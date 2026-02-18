import { Link } from 'react-router';
import { MainLayout } from '../components/layout/MainLayout';
import { t } from '../utils/translations';
import pakoRiderInterface from '@assets/images/pakorider_interface.png';

export function PakoRiderPage() {
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
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-10 lg:flex-row lg:gap-20">
            {/* Text */}
            <div className="flex flex-1 flex-col gap-6">
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                Merkeziyetsiz teslimat teknolojisi Pako topluluğu tarafından kolektif şekilde üretiliyor, adil çalışmayı herkes için mümkün kılıyor.
              </p>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                Pako Rider uygulaması ile teslimatları yönetin, rotalarınızı planlayın ve topluluğun bir parçası olun.
              </p>
            </div>

            {/* App screenshot */}
            <div className="flex flex-1 items-center justify-center">
              <img
                src={pakoRiderInterface}
                alt="Pako Rider uygulama arayüzü"
                className="h-auto w-full max-w-xs rounded-2xl shadow-lg object-contain"
              />
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
      </div>
    </MainLayout>
  );
}
