import { Link } from 'react-router';
import { MainLayout } from '../components/layout/MainLayout';
import { t } from '../utils/translations';

export function BusinessesPage() {
  return (
    <MainLayout>
      <div className="flex w-full flex-col items-center gap-8 py-10">
        {/* Page heading */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-6">
            <h1 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px]">
              {t('businesses.title')}
            </h1>
          </div>
        </section>

        {/* CTA section */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-8 rounded-2xl border-2 border-[var(--color-border)] p-8 text-center md:p-12">
            <h2 className="font-['Overpass_Mono',sans-serif] text-xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-2xl">
              {t('businesses.ctaTitle')}
            </h2>
            <p className="max-w-2xl font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('businesses.ctaDesc')}
            </p>
            <Link
              to="/pako-rider"
              className="rounded-lg bg-[var(--color-secondary)] px-6 py-4 font-['Overpass',sans-serif] text-xl font-medium tracking-tight text-[var(--color-primary)] transition-all hover:opacity-90 active:scale-[0.98]"
            >
              {t('businesses.start')}
            </Link>
          </div>
        </section>

        {/* Contact section */}
        <section className="flex w-full flex-col items-center px-4 py-8 text-center md:px-8">
          <div className="flex max-w-2xl flex-col items-center gap-6">
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('businesses.contactTitle')}
            </p>
            <Link
              to="/iletisim"
              className="rounded-lg bg-[var(--color-secondary)] px-6 py-4 font-['Overpass',sans-serif] text-xl font-medium tracking-tight text-[var(--color-primary)] transition-all hover:opacity-90 active:scale-[0.98]"
            >
              {t('businesses.contactBtn')}
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
