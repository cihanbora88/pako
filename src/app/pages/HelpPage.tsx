import { Link } from 'react-router';
import { MainLayout } from '../components/layout/MainLayout';
import { t } from '../utils/translations';

interface HelpCard {
  title: string;
  desc: string;
  action: string;
  link: string;
  isExternal?: boolean;
}

const helpCards: HelpCard[] = [
  {
    title: 'Topluluk',
    desc: "Pako'lardan destek alın, öğrenin",
    action: 'katıl',
    link: '/topluluk',
  },
  {
    title: 'PakoAI ile sohbet',
    desc: 'Pako hakkında bir AI modeli geliştirdik, ona soru sorabilir ve çözüm bulabilirsin.',
    action: 'başlat',
    link: '#',
  },
  {
    title: 'Kaynaklar',
    desc: 'Topluluk tarafından oluşturulan belgeleri burada bulabilirsin',
    action: 'incele',
    link: '#',
  },
];

export function HelpPage() {
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
                className="flex flex-col gap-4 rounded-2xl border-2 border-[var(--color-border)] p-8 transition-colors hover:border-[var(--color-secondary)]"
              >
                <h3 className="font-['Overpass_Mono',sans-serif] text-xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
                  {card.title}
                </h3>
                <p className="flex-1 font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white">
                  {card.desc}
                </p>
                {card.isExternal ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start rounded-lg bg-[var(--color-secondary)] px-6 py-3 font-['Overpass',sans-serif] text-lg font-medium tracking-tight text-[var(--color-primary)] transition-all hover:opacity-90 active:scale-[0.98]"
                  >
                    {card.action}
                  </a>
                ) : (
                  <Link
                    to={card.link}
                    className="self-start rounded-lg bg-[var(--color-secondary)] px-6 py-3 font-['Overpass',sans-serif] text-lg font-medium tracking-tight text-[var(--color-primary)] transition-all hover:opacity-90 active:scale-[0.98]"
                  >
                    {card.action}
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
