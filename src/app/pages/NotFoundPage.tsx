import { Link } from 'react-router';
import { MainLayout } from '../components/layout/MainLayout';
import { useTranslation } from 'react-i18next';

export function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-6 px-4">
        <h1 className="font-['Overpass_Mono',sans-serif] text-6xl font-bold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
          {t('notFound.title')}
        </h1>
        <p className="font-['Overpass',sans-serif] text-2xl text-black dark:text-white">
          {t('notFound.description')}
        </p>
        <Link
          to="/"
          className="rounded-lg bg-[var(--color-secondary)] px-6 py-3 font-['Overpass',sans-serif] font-medium text-[var(--color-primary)] transition-all hover:opacity-90 active:scale-98"
        >
          {t('notFound.cta')}
        </Link>
      </div>
    </MainLayout>
  );
}
