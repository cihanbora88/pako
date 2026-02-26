import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/button';

export function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-6 px-4">
      <h1 className="font-['Overpass_Mono',sans-serif] text-6xl font-bold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
        {t('notFound.title')}
      </h1>
      <p className="font-['Overpass',sans-serif] text-2xl text-black dark:text-white">
        {t('notFound.description')}
      </p>
      <Button
        asChild
        variant="primary"
        size="lg"
        className="rounded-lg px-6 py-6 font-['Overpass',sans-serif] font-medium transition-all active:scale-[0.98]"
      >
        <Link to="/">{t('notFound.cta')}</Link>
      </Button>
    </div>
  );
}
