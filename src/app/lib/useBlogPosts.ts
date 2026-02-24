import { useEffect, useState } from 'react';
import type { Asset } from 'contentful';
import { contentfulClient } from './contentful';
import type { BlogPost, Author } from '../data/blog-posts';

export function useBlogPosts(locale: string = 'tr-TR') {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    contentfulClient
      .getEntries({
        content_type: 'blogPost',
        locale,
        order: ['-fields.publishDate' as const],
      })
      .then((res) => {
        const mapped: BlogPost[] = res.items.map((item, index) => {
          const fields = item.fields as Record<string, unknown>;
          const imageAsset = fields['image'] as Asset | undefined;
          const imageUrl = imageAsset?.fields?.file?.url
            ? `https:${imageAsset.fields.file.url}`
            : undefined;

          // Resolve author reference
          const authorEntry = fields['author'] as Record<string, unknown> | undefined;
          const authorFields = authorEntry?.['fields'] as Record<string, unknown> | undefined;
          const authorPicture = authorFields?.['picture'] as Asset | undefined;
          const authorPictureUrl = authorPicture?.fields?.file?.url
            ? `https:${authorPicture.fields.file.url}`
            : undefined;

          const author: Author = {
            name: (authorFields?.['name'] as string) || 'Pako Ekibi',
            picture: authorPictureUrl,
            bio: (authorFields?.['bio'] as string) || undefined,
          };

          const categoryMap: Record<string, BlogPost['category']> = {
            article: 'article',
            video: 'video',
            story: 'story',
            guide: 'guide',
            howto: 'howto',
            advice: 'advice',
          };

          const rawCategory = (fields['category'] as string) || 'article';

          return {
            id: index + 1,
            title: (fields['title'] as string) || '',
            slug: (fields['slug'] as string) || '',
            excerpt: (fields['excerpt'] as string) || '',
            category: categoryMap[rawCategory] ?? 'article',
            image: imageUrl,
            date: fields['publishDate']
              ? new Date(fields['publishDate'] as string).toISOString().split('T')[0]
              : '',
            author,
          };
        });
        setPosts(mapped);
        setError(null);
      })
      .catch((err) => {
        console.error('Failed to fetch blog posts from Contentful:', err);
        setError('Could not load posts.');
      })
      .finally(() => setLoading(false));
  }, [locale]);

  return { posts, loading, error };
}
