import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';

export function PakoRiderSection() {
  const { t } = useTranslation();
  return (
    <section className="flex w-full items-center justify-center px-4 py-6 md:px-8 lg:py-6">
      <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center lg:px-20">
        {/* Text content */}
        <div className="flex w-full max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold tracking-tight text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px] md:leading-[32px]">
            Pako Rider
          </h2>
          <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
            {t('home.pakoRider.description')}
          </p>
          <Button
            asChild
            variant="primary"
            size="lg"
            className="text-xl font-medium tracking-tight h-auto py-4 px-6 rounded-lg"
          >
            <Link to="/pako-rider">{t('home.pakoRider.cta')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
