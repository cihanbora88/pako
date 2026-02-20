import { MainLayout } from '../components/layout/MainLayout';
import { Container } from '../components/ui/Container';
import { useTranslation } from 'react-i18next';

export function CookiePolicyPage() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className="flex w-full flex-col items-center gap-12 py-16 bg-white dark:bg-gray-900">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col gap-10">
            {/* Header */}
            <div className="flex flex-col gap-4">
              <h1 className="font-['Overpass_Mono',sans-serif] text-4xl font-bold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
                {t('cookiePolicy.title')}
              </h1>
              <p className="font-['Overpass',sans-serif] text-lg text-gray-600 dark:text-gray-400">
                {t('cookiePolicy.description')}
              </p>
            </div>

            {/* Content Sections */}
            <div className="flex flex-col gap-12">
              <section className="flex flex-col gap-4">
                <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
                  {t('cookiePolicy.whatAreCookies.title')}
                </h2>
                <p className="font-['Overpass',sans-serif] text-base leading-relaxed text-black dark:text-white">
                  {t('cookiePolicy.whatAreCookies.content')}
                </p>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
                  {t('cookiePolicy.howWeUse.title')}
                </h2>
                <div className="flex flex-col gap-4">
                  <p className="font-['Overpass',sans-serif] text-base leading-relaxed text-black dark:text-white">
                    {t('cookiePolicy.howWeUse.content1')}
                  </p>
                  <ul className="list-disc pl-6 flex flex-col gap-2 font-['Overpass',sans-serif] text-base leading-relaxed text-black dark:text-white">
                    <li>{t('cookiePolicy.howWeUse.item1')}</li>
                    <li>{t('cookiePolicy.howWeUse.item2')}</li>
                  </ul>
                  <p className="font-['Overpass',sans-serif] text-base leading-relaxed text-black dark:text-white">
                    {t('cookiePolicy.howWeUse.content2')}
                  </p>
                </div>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
                  {t('cookiePolicy.managing.title')}
                </h2>
                <p className="font-['Overpass',sans-serif] text-base leading-relaxed text-black dark:text-white">
                  {t('cookiePolicy.managing.content')}
                </p>
              </section>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
}
