import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export function PakoRiderSection() {
  const { t } = useTranslation();
  return (
    <section className="flex w-full items-center justify-center px-4 py-6 md:px-8 lg:py-6">
      <div className="flex w-full max-w-[var(--content-max-width)] flex-col-reverse items-center gap-6 lg:flex-row lg:gap-6 lg:px-20">
        {/* Text content */}
        <div className="flex flex-1 flex-col items-start gap-4">
          <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold tracking-tight text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px] md:leading-[32px]">
            Pako Rider
          </h2>
          <p className="max-w-lg font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
            {t('home.pakoRider.description')}
          </p>
          <Link
            to="/pako-rider"
            className="rounded-lg bg-[var(--color-secondary)] px-6 py-4 font-['Overpass',sans-serif] text-xl font-medium tracking-tight text-[var(--color-primary)] transition-all hover:opacity-90 active:scale-[0.98]"
          >
            {t('home.pakoRider.cta')}
          </Link>
        </div>

        {/* App icon */}
        <div className="flex items-center justify-center lg:items-end">
          <img src="/assets/svg/pako_app_playstore.svg" alt="Play Store" className="h-48 w-auto" />
        </div>
      </div>
    </section>
  );
}
