import { Link } from 'react-router';
import { MainLayout } from '../components/layout/MainLayout';
import { t } from '../utils/translations';

export function SupportPage() {
  return (
    <MainLayout>
      <div className="flex w-full flex-col items-center gap-8 py-10">
        {/* Page heading */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-4">
            <h1 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px]">
              {t('support.title')}
            </h1>
          </div>
        </section>

        {/* Support cards */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="grid w-full max-w-[var(--content-max-width)] gap-8 md:grid-cols-2">
            {/* GitHub card */}
            <div className="flex flex-col gap-4 rounded-2xl border-2 border-[var(--color-border)] p-8 transition-colors hover:border-[var(--color-secondary)]">
              <h3 className="font-['Overpass_Mono',sans-serif] text-xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
                {t('support.repoTitle')}
              </h3>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white">
                {t('support.repoDesc')}
              </p>
              <a
                href="https://github.com/pako"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start rounded-lg bg-[var(--color-secondary)] px-6 py-3 font-['Overpass',sans-serif] text-lg font-medium tracking-tight text-[var(--color-primary)] transition-all hover:opacity-90 active:scale-[0.98]"
              >
                {t('support.github')}
              </a>
            </div>

            {/* Bank accounts card */}
            <div className="flex flex-col gap-4 rounded-2xl border-2 border-[var(--color-border)] p-8 transition-colors hover:border-[var(--color-secondary)]">
              <h3 className="font-['Overpass_Mono',sans-serif] text-xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
                {t('support.bankAccounts')}
              </h3>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white">
                {t('support.bankAccountsDesc')}
              </p>
              <div className="flex flex-col gap-3">
                <div className="rounded-lg bg-[var(--color-gray-100)] p-4 dark:bg-[var(--color-gray-800)]">
                  <p className="font-['Overpass_Mono',sans-serif] text-sm text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
                    {t('support.bank1')}
                  </p>
                  <p className="font-['Overpass',sans-serif] text-sm text-black dark:text-white">IBAN: TR00 0000 0000 0000 0000 0000 00</p>
                </div>
                <div className="rounded-lg bg-[var(--color-gray-100)] p-4 dark:bg-[var(--color-gray-800)]">
                  <p className="font-['Overpass_Mono',sans-serif] text-sm text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
                    {t('support.bank2')}
                  </p>
                  <p className="font-['Overpass',sans-serif] text-sm text-black dark:text-white">IBAN: TR00 0000 0000 0000 0000 0000 00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
