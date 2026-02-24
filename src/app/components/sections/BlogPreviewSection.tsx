import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { BlogCard } from '../ui/BlogCard';
import { blogPosts as allPosts } from '../../data/blog-posts';

export function BlogPreviewSection() {
  const { t } = useTranslation();

  // Pick specific posts for the preview (e.g., first 3)
  const previewPosts = [3, 4, 5]; // Indices for PakoBike, Püf Noktaları, Topluluk

  const localizedPosts = previewPosts.map((index) => {
    const post = allPosts[index];
    const localizedPostsData = t('blog.posts', { returnObjects: true }) as Array<{
      title: string;
      excerpt: string;
      content: string;
    }>;
    const localizedPost = localizedPostsData[index];

    return {
      id: post.id,
      title: localizedPost?.title || post.title,
      excerpt: localizedPost?.excerpt || post.excerpt,
      category: t(`blog.filters.${post.category}`),
      image: post.image,
      slug: post.slug,
      author: post.author,
      date: post.date,
    };
  });

  return (
    <section className="flex w-full items-center justify-center px-4 py-16 md:px-8 bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <div className="flex w-full flex-col items-center gap-12">
          {/* Blog cards grid */}
          <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {localizedPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                image={post.image}
                slug={post.slug}
                author={post.author}
                date={post.date}
              />
            ))}
          </div>

          <Link
            to="/blog"
            className="rounded-full bg-[var(--color-secondary)] px-10 py-4 font-['Overpass_Mono',sans-serif] text-lg font-bold text-[var(--color-primary)] transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-secondary/20"
          >
            {t('home.blogPreview.cta')}
          </Link>
        </div>
      </Container>
    </section>
  );
}

import { Container } from '../ui/Container';
