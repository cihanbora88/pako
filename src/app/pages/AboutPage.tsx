import girlRider from '@assets/images/pako_girl_sportsbg.png';
import iconKolektif from '@assets/icons/icon_kolektif.svg';
import iconYerel from '@assets/icons/icon_yerel.svg';
import iconDoga from '@assets/icons/icon_doga.svg';
import iconSeffaf from '@assets/icons/icon_seffaf.svg';
import { TextHeroSection } from '../components/sections/TextHeroSection';
import { PrinciplesSection } from '../components/sections/PrinciplesSection';
import { useTranslation } from 'react-i18next';

export function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="flex w-full flex-col items-center gap-8 py-10">
      {/* Page heading */}
      <section className="flex w-full flex-col items-center px-4 md:px-8">
        <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-6">
          <h1 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px]">
            {t('about.title')}
          </h1>
        </div>
      </section>

      {/* About content with image */}
      <section className="flex w-full flex-col items-center px-4 md:px-8">
        <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-10 lg:flex-row lg:gap-20 lg:px-20">
          {/* Image */}
          <div className="flex flex-1 items-center justify-center">
            <img
              src={girlRider}
              alt="Pako bisiklet kurye"
              className="h-auto w-full max-w-sm object-contain"
            />
          </div>

          {/* Content blocks */}
          <div className="flex flex-1 flex-col gap-6">
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('about.description1')}
            </p>
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('about.description2')}
            </p>
          </div>
        </div>
      </section>

      {/* Text Hero Section */}
      <TextHeroSection title={<>{t('about.heroTitle')}</>} />

      {/* Virtue section */}
      <section className="flex w-full flex-col items-center px-4 py-8 md:px-8">
        <div className="grid w-full max-w-[var(--content-max-width)] gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-16">
          {[
            {
              icon: iconKolektif,
              title: 'about.kolektif',
              desc: 'about.kolektifDesc',
            },
            {
              icon: iconYerel,
              title: 'about.yerel',
              desc: 'about.yerelDesc',
            },
            {
              icon: iconDoga,
              title: 'about.doga',
              desc: 'about.dogaDesc',
            },
            {
              icon: iconSeffaf,
              title: 'about.seffaf',
              desc: 'about.seffafDesc',
            },
          ].map((value) => (
            <div key={value.title} className="flex flex-col items-center gap-4 text-center">
              <img
                src={value.icon}
                alt={t(value.title)}
                className="h-28 w-28 object-contain transition-transform hover:scale-105 md:h-32 md:w-32"
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-['Overpass',sans-serif] text-lg font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-xl">
                  {t(value.title)}
                </h3>
                <p className="font-['Overpass',sans-serif] text-sm font-light leading-relaxed text-black dark:text-white md:text-base">
                  {t(value.desc)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* New Ecosystem Section */}
      <section className="flex w-full flex-col items-center px-4 py-12 md:px-8">
        <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-8 lg:px-16">
          <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-3xl lg:text-2xl text-center md:text-left leading-tight">
            {t('about.newEcosystemTitle')}
          </h2>
          <div className="flex flex-col gap-6">
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('about.newEcosystemContent')}
            </p>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="bg-white dark:bg-gray-900 w-full py-8 flex justify-center">
        <div className="max-w-[1440px] w-full">
          <PrinciplesSection />
        </div>
      </section>

      {/* Community and Culture Section */}
      <section className="flex w-full flex-col items-center px-4 py-12 md:px-8">
        <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-8 lg:px-16">
          <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-3xl lg:text-2xl text-center md:text-left leading-tight">
            {t('about.communityTitle')}
          </h2>
          <div className="flex flex-col gap-6">
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('about.communityDesc1')}
            </p>
            <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              {t('about.communityDesc2')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
