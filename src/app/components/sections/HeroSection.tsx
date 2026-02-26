import { Link } from 'react-router';
import heroImage from '@assets/images/hero_image.png';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';

export function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden py-16 md:py-20 lg:h-[450px]">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 size-full object-cover" src={heroImage} />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(41,0,121,0.5)] dark:to-[rgba(0,0,0,0.5)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-[var(--content-max-width)] flex-col items-end px-4 md:px-8 lg:px-20">
        <div className="flex flex-col items-end gap-2 text-right">
          <p className="font-['Overpass',sans-serif] text-4xl font-extralight leading-tight text-[var(--color-gray-100)] md:text-5xl lg:text-[80px] lg:leading-[80px]">
            {t('home.hero.line1')}
          </p>
          <p className="font-['Overpass',sans-serif] text-4xl font-bold leading-tight text-[var(--color-gray-100)] md:text-5xl lg:text-[80px] lg:leading-[80px]">
            {t('home.hero.line2')}
          </p>
          <p className="max-w-lg font-['Overpass',sans-serif] text-lg font-light leading-relaxed tracking-tight text-[var(--color-gray-100)] md:text-2xl lg:text-[32px] lg:leading-[40px]">
            {t('home.hero.description')}
          </p>
          <Button
            asChild
            variant="primary"
            size="lg"
            className="mt-2 text-xl font-medium tracking-tight h-auto py-4 px-6"
          >
            <Link to="/topluluk">{t('home.hero.cta')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
