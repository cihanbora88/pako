import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { BlogCard } from '../ui/BlogCard';
import { Container } from '../ui/Container';
import { useBlogPosts } from '../../lib/useBlogPosts';
import { Button } from '../ui/button';

export function BlogPreviewSection() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language.startsWith('tr') ? 'tr-TR' : 'en-US';
  const { posts, loading } = useBlogPosts(locale);

  // Show the 3 most recent posts
  const previewPosts = posts.slice(0, 3);

  return (
    <section className="flex w-full items-center justify-center px-4 py-16 md:px-8 bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <div className="flex w-full flex-col items-center gap-12">
          {/* Blog cards grid */}
          <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {loading
              ? // Skeleton placeholders while fetching
                Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-64 w-full animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800"
                  />
                ))
              : previewPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    category={t(`blog.filters.${post.category}`)}
                    image={post.image}
                    slug={post.slug}
                    author={post.author}
                    date={post.date}
                  />
                ))}
          </div>

          <Button
            asChild
            variant="primary"
            size="lg"
            className="rounded-full px-10 py-6 font-['Overpass_Mono',sans-serif] text-lg font-bold transition-all shadow-lg shadow-secondary/20 hover:opacity-90"
          >
            <Link to="/blog">{t('home.blogPreview.cta')}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
