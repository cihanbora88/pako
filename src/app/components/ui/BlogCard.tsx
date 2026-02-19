interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  image?: string;
  size?: 'small' | 'medium' | 'large';
}

export function BlogCard({ title, excerpt, category, image, size = 'medium' }: BlogCardProps) {
  const aspectRatios = {
    small: 'aspect-[3/2]',
    medium: 'aspect-[3/2]',
    large: 'aspect-video',
  };

  return (
    <article className="flex w-full flex-col gap-2">
      <div
        className={`relative mb-4 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800 ${aspectRatios[size]}`}
      >
        {image && (
          <img src={image} alt={title} className="absolute inset-0 size-full object-cover" />
        )}
        <span className="absolute left-2 top-2 z-10 bg-[var(--color-secondary)] px-1 font-['Overpass',sans-serif] text-sm font-semibold text-[var(--color-primary)]">
          {category}
        </span>
      </div>
      <h3 className="font-['Overpass',sans-serif] font-semibold text-black dark:text-white">
        {title}
      </h3>
      <p className="font-['Overpass',sans-serif] font-light text-black dark:text-white line-clamp-3">
        {excerpt}
      </p>
    </article>
  );
}
