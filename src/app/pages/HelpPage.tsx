import { Link } from 'react-router';
import { MainLayout } from '../components/layout/MainLayout';
import { useTranslation } from 'react-i18next';

interface HelpCard {
  title: string;
  desc: string;
  action: string;
  link: string;
  isExternal?: boolean;
  icon: React.ReactNode;
}

export function HelpPage() {
  const { t } = useTranslation();

  const helpCards: HelpCard[] = [
    {
      title: 'help.community',
      desc: 'help.communityDesc',
      action: 'help.join',
      link: '/topluluk',
      icon: (
        <svg className="size-10 shrink-0" viewBox="0 0 40 40" fill="none">
          <path
            d="M20 8c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm-10 18c0-3.3 4.5-6 10-6s10 2.7 10 6v2H10v-2z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: 'help.pakoAI',
      desc: 'help.pakoAIDesc',
      action: 'help.start',
      link: '#',
      icon: (
        <svg className="size-10 shrink-0" viewBox="0 0 40 40" fill="none">
          <path
            d="M28 12H12a2 2 0 00-2 2v10a2 2 0 002 2h4l4 4 4-4h4a2 2 0 002-2V14a2 2 0 00-2-2zm-8 12l-1-3h-3l3-8h2l1 3h3l-3 8h-2z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: 'help.resources',
      desc: 'help.resourcesDesc',
      action: 'help.explore',
      link: '#',
      icon: (
        <svg className="size-10 shrink-0" viewBox="0 0 40 40" fill="none">
          <path
            d="M12 10h16a2 2 0 012 2v16a2 2 0 01-2 2H12a2 2 0 01-2-2V12a2 2 0 012-2zm2 4v2h12v-2H14zm0 4v2h12v-2H14zm0 4v2h8v-2h-8z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <MainLayout>
      <div className="flex w-full flex-col items-center gap-8 py-10">
        {/* Page heading */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-4">
            <h1 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px]">
              {t('help.title')}
            </h1>
            <p className="max-w-2xl font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('help.description')}
            </p>
          </div>
        </section>

        {/* Help cards */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="grid w-full max-w-[var(--content-max-width)] gap-8 md:grid-cols-3">
            {helpCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-7 transition-all hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600"
              >
                {/* Top: title + icon row */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-['Overpass_Mono',sans-serif] text-lg font-semibold text-black dark:text-white leading-snug">
                    {t(card.title)}
                  </h3>
                  <span className="text-black/60 dark:text-white/60">{card.icon}</span>
                </div>

                {/* Description */}
                <p className="flex-1 font-['Overpass',sans-serif] text-sm font-light leading-6 text-black/70 dark:text-white/70">
                  {t(card.desc)}
                </p>

                {/* CTA — outlined button */}
                {card.isExternal ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start rounded-md border-2 border-black dark:border-white px-5 py-2 font-['Overpass_Mono',sans-serif] text-sm font-semibold text-black dark:text-white transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black active:scale-[0.98]"
                  >
                    {t(card.action)}
                  </a>
                ) : (
                  <Link
                    to={card.link}
                    className="self-start rounded-md border-2 border-black dark:border-white px-5 py-2 font-['Overpass_Mono',sans-serif] text-sm font-semibold text-black dark:text-white transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black active:scale-[0.98]"
                  >
                    {t(card.action)}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
