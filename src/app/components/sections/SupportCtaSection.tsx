import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export function SupportCtaSection() {
  const { t } = useTranslation();
  return (
    <section className="flex w-full items-center justify-center px-4 py-12 md:px-8">
      <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center justify-between gap-8 rounded-2xl bg-[#290079] p-8 lg:flex-row lg:px-16 lg:py-12">
        <div className="flex flex-col gap-4 text-left lg:max-w-2xl">
          <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold tracking-tight text-[#AFE403] md:text-[32px] md:leading-[32px]">
            {t('supportCta.title')}
          </h2>
          <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-white md:text-xl">
            {t('supportCta.description')}
          </p>
        </div>
        <Link
          to="/destek-ol"
          className="min-w-[180px] rounded-xl border-2 border-white px-8 py-4 text-center font-['Overpass',sans-serif] text-xl font-medium tracking-tight text-white transition-all hover:bg-white hover:text-[#290079] active:scale-[0.98]"
        >
          {t('supportCta.cta')}
        </Link>
      </div>
    </section>
  );
}
