import { Link } from 'react-router';
import { MainLayout } from '../components/layout/MainLayout';
import { useTranslation } from 'react-i18next';
import { PurpleCard } from '../components/sections';

export function BusinessesPage() {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <div className="flex w-full flex-col items-center gap-16 py-10">
        {/* Section 1: Intro */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-10 lg:px-16">
            <h1 className="font-['Overpass_Mono',sans-serif] text-[32px] font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[42px]">
              {t('businesses.intro.title')}
            </h1>
            <div className="flex flex-col gap-6">
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                {t('businesses.intro.description1')}
              </p>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                {t('businesses.intro.description2')}
              </p>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                {t('businesses.intro.description3')}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Hero Statement */}
        <section className="flex w-full flex-col items-center px-4 py-16 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-6 text-center">
            <h2 className="font-['Overpass',sans-serif] text-2xl font-light leading-tight text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-2xl lg:text-3xl">
              {t('businesses.heroStatement')}
            </h2>
          </div>
        </section>

        {/* Section 3: Yerel ağa katılın */}
        <section className="flex w-full flex-col items-center px-4 py-8 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-10 lg:px-16">
            <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-3xl">
              {t('businesses.localNetwork.title')}
            </h2>
            <div className="flex flex-col gap-6">
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                {t('businesses.localNetwork.description1')}
              </p>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                {t('businesses.localNetwork.description2')}
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Pako ile tanış */}
        <section className="flex w-full flex-col items-center gap-8 px-4 py-12 text-center md:px-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-3xl">
              {t('businesses.meetPako.title')}
            </h2>
            <p className="max-w-xl font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('businesses.meetPako.description')}
            </p>
          </div>
          <Link
            to="/topluluk"
            className="rounded-lg bg-[#AFE403] px-8 py-3 font-['Overpass',sans-serif] text-xl font-bold tracking-tight text-[#290079] transition-all hover:scale-105 active:scale-[0.98] shadow-md"
          >
            {t('businesses.meetPako.cta')}
          </Link>
        </section>

        {/* Section 5: İş birliği prensipleri */}
        <section className="flex w-full flex-col items-center px-4 py-8 pb-20 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-10 lg:px-16">
            <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-3xl">
              {t('businesses.principles.title')}
            </h2>
            <div className="flex flex-col gap-6">
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                {t('businesses.principles.description1')}
              </p>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                {t('businesses.principles.description2')}
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Contact Card */}
        <PurpleCard
          description={t('businesses.contactCard.description')}
          ctaLabel={t('businesses.contactCard.cta')}
          ctaLink="/iletisim"
        />
      </div>
    </MainLayout>
  );
}
