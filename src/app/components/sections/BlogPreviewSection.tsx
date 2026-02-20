import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

interface BlogCardData {
  label: string;
  title: string;
  excerpt: string;
}

function BlogCard({ post }: { post: BlogCardData }) {
  return (
    <article className="flex flex-1 flex-col gap-1">
      {/* Placeholder image with label */}
      <div className="relative flex flex-col items-start">
        <div className="z-10 bg-[var(--color-secondary)] px-1">
          <span className="font-['Overpass',sans-serif] text-base font-semibold text-[#230067]">
            {post.label}
          </span>
        </div>
        <div className="-mt-2 aspect-[300/200] w-full bg-[var(--color-gray-300)] dark:bg-[var(--color-gray-700)]" />
      </div>
      <h3 className="font-['Overpass',sans-serif] text-base font-semibold text-black dark:text-white">
        {post.title}
      </h3>
      <p className="font-['Overpass',sans-serif] text-base font-light leading-6 tracking-tight text-black dark:text-white">
        {post.excerpt}
      </p>
    </article>
  );
}

export function BlogPreviewSection() {
  const { t } = useTranslation();

  const blogPosts: BlogCardData[] = [
    {
      label: t('home.blogPreview.postLabel'),
      title: t('home.blogPreview.posts.0.title'),
      excerpt: t('home.blogPreview.posts.0.excerpt'),
    },
    {
      label: t('home.blogPreview.postLabel'),
      title: t('home.blogPreview.posts.1.title'),
      excerpt: t('home.blogPreview.posts.1.excerpt'),
    },
    {
      label: t('home.blogPreview.postLabel'),
      title: t('home.blogPreview.posts.2.title'),
      excerpt: t('home.blogPreview.posts.2.excerpt'),
    },
  ];

  return (
    <section className="flex w-full items-center justify-center px-4 py-6 md:px-8">
      <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-3">
        {/* Blog cards grid */}
        <div className="grid w-full gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <BlogCard key={i} post={post} />
          ))}
        </div>

        <Link
          to="/blog"
          className="mt-2 rounded-lg bg-[var(--color-secondary)] px-6 py-4 font-['Overpass',sans-serif] text-xl font-medium tracking-tight text-[var(--color-primary)] transition-all hover:opacity-90 active:scale-[0.98]"
        >
          {t('home.blogPreview.cta')}
        </Link>
      </div>
    </section>
  );
}
