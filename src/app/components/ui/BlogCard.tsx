import { Link } from 'react-router';
import { AuthorInfo } from './AuthorInfo';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  image?: string;
  size?: 'small' | 'medium' | 'large';
  slug: string;
  author: {
    name: string;
  };
  date: string;
}

export function BlogCard({
  title,
  excerpt,
  category,
  image,
  size = 'medium',
  slug,
  author,
  date,
}: BlogCardProps) {
  const aspectRatios = {
    small: 'aspect-[3/2]',
    medium: 'aspect-[3/2]',
    large: 'aspect-video',
  };

  return (
    <div className="group flex w-full flex-col gap-2">
      <Link
        to={`/blog/${slug}`}
        className="flex w-full flex-col gap-2 transition-transform hover:scale-[1.01]"
      >
        <article className="flex w-full flex-col gap-2">
          <div
            className={`relative mb-4 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800 ${aspectRatios[size]}`}
          >
            {image && (
              <img
                src={image}
                alt={title}
                className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            )}
            <span className="absolute left-2 top-2 z-10 bg-[var(--color-secondary)] px-2 py-0.5 font-['Overpass',sans-serif] text-xs font-bold text-[var(--color-primary)]">
              {category}
            </span>
          </div>
          <h3 className="font-['Overpass',sans-serif] text-lg font-semibold text-black dark:text-white group-hover:text-[var(--color-primary)] dark:group-hover:text-[var(--color-secondary)] transition-colors">
            {title}
          </h3>
          <p className="font-['Overpass',sans-serif] text-sm font-light text-black/70 dark:text-white/70 line-clamp-3">
            {excerpt}
          </p>
        </article>
      </Link>
      <div className="mt-2">
        <AuthorInfo name={author.name} date={date} variant="minimal" />
      </div>
    </div>
  );
}
