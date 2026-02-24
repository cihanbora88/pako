import { useTranslation } from 'react-i18next';

interface AuthorInfoProps {
  name: string;
  picture?: string;
  bio?: string;
  date?: string;
  variant?: 'minimal' | 'detailed';
}

export function AuthorInfo({ name, picture, bio, date, variant = 'minimal' }: AuthorInfoProps) {
  const { t } = useTranslation();

  if (variant === 'detailed') {
    return (
      <div className="flex flex-col gap-4 border-y border-gray-100 py-8 dark:border-gray-800">
        <div className="flex items-center gap-4">
          {picture ? (
            <img src={picture} alt={name} className="size-16 rounded-full object-cover shadow-md" />
          ) : (
            <div className="flex size-16 items-center justify-center rounded-full bg-gray-200 text-2xl font-bold text-gray-400 dark:bg-gray-800">
              {name.charAt(0)}
            </div>
          )}
          <div className="flex flex-col">
            <span className="font-['Overpass',sans-serif] text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
              {t('blog.author')}
            </span>
            <h4 className="font-['Overpass',sans-serif] text-xl font-bold text-black dark:text-white">
              {name}
            </h4>
          </div>
        </div>
        {bio && (
          <p className="font-['Overpass',sans-serif] text-base font-light leading-relaxed text-black/70 dark:text-white/70">
            {bio}
          </p>
        )}
      </div>
    );
  }

  // Minimal variant (for cards)
  return (
    <div className="flex items-center gap-2">
      <span className="font-['Overpass',sans-serif] text-sm font-medium text-black dark:text-white">
        {name}
      </span>
      {date && (
        <>
          <span className="text-gray-300 dark:text-gray-600">•</span>
          <span className="font-['Overpass',sans-serif] text-sm font-light text-black/50 dark:text-white/50">
            {date}
          </span>
        </>
      )}
    </div>
  );
}
