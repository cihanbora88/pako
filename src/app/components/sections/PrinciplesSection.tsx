import { useTranslation } from 'react-i18next';

export function PrinciplesSection() {
  const { t } = useTranslation();
  const principles = [
    'principles.bossless',
    'principles.balance',
    'principles.diversity',
    'principles.selfControl',
    'principles.autonomy',
    'principles.honesty',
    'principles.solidarity',
    'principles.organic',
    'principles.equality',
    'principles.limitless',
    'principles.alternativeEconomy',
    'principles.locality',
    'principles.broadVision',
    'principles.pioneering',
    'principles.nonViolence',
    'principles.wellbeing',
    'principles.antiFragility',
  ];

  return (
    <section className="flex w-full flex-col items-center bg-white px-4 py-16 dark:bg-gray-900 md:px-8">
      <div className="flex w-full max-w-[var(--container-max-width)] flex-col items-center gap-10">
        <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold tracking-tighter text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-2xl">
          {t('principles.title')}
        </h2>
        <div className="flex max-w-[var(--content-max-width)] flex-wrap justify-center gap-3 md:gap-4">
          {principles.map((principle) => (
            <div
              key={principle}
              className="rounded-lg bg-[#AFE403] px-4 py-2 text-center text-xs font-normal tracking-tight text-[#290079] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] transition-transform hover:scale-105 md:px-6 md:py-2.5 md:text-sm"
            >
              {t(principle)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
