import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useParams, Link } from 'react-router';

import { Container } from '../components/ui/Container';
import { useTranslation } from 'react-i18next';
import { AuthorInfo } from '../components/ui/AuthorInfo';
import { BlogCard } from '../components/ui/BlogCard';
import { contentfulClient } from '../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import type { Document, Block, Inline } from '@contentful/rich-text-types';
import type { BlogPost } from '../data/blog-posts';

type LocalizedPost = BlogPost & { categoryLabel: string };

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: Block | Inline, children: ReactNode) => (
      <p className="mb-5 leading-[1.8] font-['Overpass',sans-serif] text-[1.0625rem]">{children}</p>
    ),
  },
};

function mapEntry(item: Record<string, unknown>, index: number): BlogPost {
  const fields = (item['fields'] as Record<string, unknown>) || {};
  const imageAsset = fields['image'] as Record<string, unknown> | undefined;
  const fileUrl = (imageAsset?.['fields'] as Record<string, unknown> | undefined)?.['file'];
  const imageUrl = fileUrl ? `https:${(fileUrl as Record<string, unknown>)['url']}` : undefined;

  const categoryMap: Record<string, BlogPost['category']> = {
    article: 'article',
    video: 'video',
    story: 'story',
    guide: 'guide',
    howto: 'howto',
    advice: 'advice',
  };

  // Resolve author reference
  const authorEntry = fields['author'] as Record<string, unknown> | undefined;
  const authorFields = authorEntry?.['fields'] as Record<string, unknown> | undefined;
  const authorPicAsset = authorFields?.['picture'] as Record<string, unknown> | undefined;
  const authorPicFile = (authorPicAsset?.['fields'] as Record<string, unknown> | undefined)?.[
    'file'
  ];
  const authorPictureUrl = authorPicFile
    ? `https:${(authorPicFile as Record<string, unknown>)['url']}`
    : undefined;

  return {
    id: index + 1,
    title: (fields['title'] as string) || '',
    slug: (fields['slug'] as string) || '',
    excerpt: (fields['excerpt'] as string) || '',
    category: categoryMap[(fields['category'] as string) || ''] ?? 'article',
    image: imageUrl,
    date: fields['publishDate']
      ? new Date(fields['publishDate'] as string).toISOString().split('T')[0]
      : '',
    author: {
      name: (authorFields?.['name'] as string) || 'Pako Ekibi',
      picture: authorPictureUrl,
      bio: (authorFields?.['bio'] as string) || undefined,
    },
  };
}

export function BlogPostPage() {
  const { t, i18n } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const locale = i18n.language.startsWith('tr') ? 'tr-TR' : 'en-US';

  const [post, setPost] = useState<BlogPost | null>(null);
  const [richContent, setRichContent] = useState<Document | null>(null);
  const [recommendedPosts, setRecommendedPosts] = useState<LocalizedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);

    // Fetch the specific post by slug
    contentfulClient
      .getEntries({
        content_type: 'blogPost',
        locale,
        'fields.slug': slug,
        limit: 1,
      })
      .then((res) => {
        if (!res.items.length) {
          setNotFound(true);
          return;
        }

        const item = res.items[0];
        const fields = item.fields as Record<string, unknown>;
        const mapped = mapEntry(item as unknown as Record<string, unknown>, 0);
        setPost(mapped);

        if (fields['content']) {
          setRichContent(fields['content'] as Document);
        }

        // Fetch all posts for recommendations
        return contentfulClient.getEntries({
          content_type: 'blogPost',
          locale,
          order: ['-fields.publishDate' as const],
        });
      })
      .then((allRes) => {
        if (!allRes) return;
        const allPosts = allRes.items.map((item, i) =>
          mapEntry(item as unknown as Record<string, unknown>, i)
        );
        const current = allPosts.find((p) => p.slug === slug);
        const recommended = allPosts
          .filter((p) => p.slug !== slug)
          .sort((a, b) => {
            if (a.category === current?.category && b.category !== current?.category) return -1;
            if (a.category !== current?.category && b.category === current?.category) return 1;
            return 0;
          })
          .slice(0, 3)
          .map((p) => ({ ...p, categoryLabel: t(`blog.filters.${p.category}`) }));
        setRecommendedPosts(recommended);
      })
      .catch((err) => {
        console.error('Failed to fetch blog post:', err);
        setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [slug, locale, t]);

  if (loading) {
    return (
      <Container>
        <div className="flex items-center justify-center py-40">
          <span className="font-['Overpass_Mono',sans-serif] text-gray-400 animate-pulse">
            {t('blog.loading', 'Yükleniyor...')}
          </span>
        </div>
      </Container>
    );
  }

  if (notFound || !post) {
    return (
      <Container>
        <div className="flex flex-col items-center justify-center py-20 gap-6">
          <h1 className="font-['Overpass_Mono',sans-serif] text-3xl text-gray-400">
            Post not found
          </h1>
          <Link to="/blog" className="text-[var(--color-primary)] hover:underline">
            Back to Blog
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <Container>
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {/* Back Button */}
          <Link
            to="/blog"
            className="group flex items-center gap-2 font-['Overpass_Mono',sans-serif] text-sm text-[var(--color-primary)] dark:text-[var(--color-secondary)] hover:opacity-80 transition-opacity"
          >
            <span className="text-xl">←</span>
            {t('blog.backToBlog')}
          </Link>

          {/* Post Header */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="bg-[var(--color-secondary)] px-3 py-1 font-['Overpass',sans-serif] text-sm font-bold text-[var(--color-primary)] rounded">
                {t(`blog.filters.${post.category}`)}
              </span>
              <span className="font-['Overpass_Mono',sans-serif] text-sm text-gray-500 dark:text-gray-400">
                {post.date}
              </span>
            </div>
            <h1 className="font-['Overpass',sans-serif] text-2xl md:text-3xl font-bold leading-tight text-black dark:text-white">
              {post.title}
            </h1>
          </div>

          {/* Hero Image */}
          {post.image && (
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Content */}
          {richContent && (
            <div className="blog-content text-black dark:text-white">
              {documentToReactComponents(richContent, richTextOptions)}
            </div>
          )}

          {/* Author Info */}
          <AuthorInfo
            name={post.author.name}
            picture={post.author.picture}
            bio={post.author.bio}
            variant="detailed"
          />

          {/* Divider */}
          <hr className="border-gray-100 dark:border-gray-800 my-8" />

          {/* Recommended Posts */}
          {recommendedPosts.length > 0 && (
            <div className="flex flex-col gap-10 py-10">
              <h2 className="font-['Overpass',sans-serif] text-2xl font-bold text-black dark:text-white">
                {t('blog.recommendedTitle', { defaultValue: 'Sizin için seçtiklerimiz' })}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recommendedPosts.map((p) => (
                  <BlogCard
                    key={p.id}
                    title={p.title}
                    excerpt={p.excerpt}
                    category={p.categoryLabel}
                    image={p.image}
                    slug={p.slug}
                    author={p.author}
                    date={p.date}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
