import { Link } from 'react-router';
import { MainLayout } from '../components/layout/MainLayout';
import { useTranslation } from 'react-i18next';
import pakoRiderBadge from '@assets/svg/pako_rider_badge.svg';
import pakoRiderInterface from '@assets/images/pakorider_interface.png';
import { TextHeroSection } from '../components/sections/TextHeroSection';

export function PakoRiderPage() {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <div className="flex w-full flex-col items-center gap-8 py-10">
        {/* Page heading */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-6">
            <h1 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px]">
              {t('pakoRider.title')}
            </h1>
          </div>
        </section>

        {/* Rider description */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-10 lg:flex-row lg:gap-8">
            <div className="flex flex-[1.5] flex-col gap-6">
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                {t('pakoRider.description1')}
              </p>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                {t('pakoRider.description2')}
              </p>
            </div>

            {/* Rider Badge */}
            <div className="flex flex-1 items-center justify-center lg:justify-end">
              <img
                src={pakoRiderBadge}
                alt="Pako Rider Badge"
                className="h-auto w-full max-w-[240px] object-contain"
              />
            </div>
          </div>
        </section>

        {/* Text Hero Section */}
        <TextHeroSection title={<>{t('pakoRider.heroTitle')}</>} />

        {/* Interface Description Section */}
        <section className="flex w-full flex-col items-center px-4 py-12 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-10 lg:flex-row lg:gap-20">
            {/* App screenshot */}
            <div className="flex flex-1 items-center justify-center">
              <img
                src={pakoRiderInterface}
                alt={t('pakoRider.interfaceAlt')}
                className="h-auto w-full max-w-xs object-contain"
              />
            </div>

            {/* Text blocks */}
            <div className="flex flex-1 flex-col gap-6">
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                {t('pakoRider.interfaceDescription1')}
              </p>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                {t('pakoRider.interfaceDescription2')}
              </p>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="flex w-full flex-col items-center gap-6 px-4 py-8 text-center md:px-8">
          <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px]">
            {t('pakoRider.joinMovement')}
          </h2>
          <p className="max-w-2xl font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
            {t('pakoRider.joinDesc')}
          </p>
          <Link
            to="/topluluk"
            className="rounded-lg bg-[var(--color-secondary)] px-6 py-4 font-['Overpass',sans-serif] text-xl font-medium tracking-tight text-[var(--color-primary)] transition-all hover:opacity-90 active:scale-[0.98]"
          >
            {t('pakoRider.joinCommunity')}
          </Link>
        </section>

        {/* Community Invitation Section */}
        <section className="flex w-full flex-col items-center px-4 pb-16 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-8 lg:px-16">
            <div className="flex flex-col gap-6">
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                {t('pakoRider.communityInvitation1')}
              </p>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                {t('pakoRider.communityInvitation2')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
