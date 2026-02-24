import { MainLayout } from '../components/layout/MainLayout';
import { useTranslation } from 'react-i18next';

export function CommunityPage() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className="flex w-full flex-col items-center gap-8 py-10">
        {/* Page heading */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-6 text-center">
            <h1 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px]">
              {t('community.title')}
            </h1>
            <p className="mx-auto max-w-2xl font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('community.description')}
            </p>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
