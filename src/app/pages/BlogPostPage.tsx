import { useParams, Link } from 'react-router';
import { MainLayout } from '../components/layout/MainLayout';
import { Container } from '../components/ui/Container';
import { blogPosts } from '../data/blog-posts';
import { useTranslation } from 'react-i18next';
import { AuthorInfo } from '../components/ui/AuthorInfo';
import { BlogCard } from '../components/ui/BlogCard';

export function BlogPostPage() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();

  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];

  if (!post) {
    return (
      <MainLayout>
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
      </MainLayout>
    );
  }

  // Get localized content
  const localizedPosts = t('blog.posts', { returnObjects: true }) as Array<{
    title: string;
    excerpt: string;
    content: string;
  }>;
  const localizedPost = localizedPosts[postIndex] || {};

  // Recommendation logic: same category, excluding current post, max 3
  const recommendedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category) return -1;
      if (a.category !== post.category && b.category === post.category) return 1;
      return 0;
    })
    .slice(0, 3)
    .map((p) => {
      const index = blogPosts.findIndex((item) => item.id === p.id);
      const loc = localizedPosts[index] || {};
      return {
        ...p,
        title: loc.title || p.title,
        excerpt: loc.excerpt || p.excerpt,
        categoryLabel: t(`blog.filters.${p.category}`),
      };
    });

  return (
    <MainLayout>
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
                {localizedPost.title || post.title}
              </h1>
            </div>

            {/* Hero Image */}
            {post.image && (
              <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                <img
                  src={post.image}
                  alt={localizedPost.title || post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div
              className="prose prose-lg dark:prose-invert max-w-none font-['Overpass',sans-serif] text-black dark:text-white leading-relaxed"
              dangerouslySetInnerHTML={{ __html: localizedPost.content || post.content || '' }}
            />

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
          </div>
        </Container>
      </div>
    </MainLayout>
  );
}
