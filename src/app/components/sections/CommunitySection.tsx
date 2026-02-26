import { Link } from 'react-router';
import communityImg from '@assets/images/community.png';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';

export function CommunitySection() {
  const { t } = useTranslation();
  return (
    <section className="flex w-full items-center justify-center px-4 py-6 md:px-8 lg:py-6">
      <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-10 md:gap-16 lg:flex-row lg:gap-20 lg:px-20">
        {/* Community image */}
        <div className="flex flex-1 items-center justify-center">
          <img
            src={communityImg}
            alt="Pako topluluk üyeleri"
            className="h-auto w-full max-w-md object-contain"
          />
        </div>

        {/* Text content */}
        <div className="flex flex-1 flex-col items-end gap-6 text-right">
          <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold tracking-tight text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px] md:leading-[32px]">
            {t('home.community.title')}
          </h2>
          <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
            {t('home.community.description')}
          </p>
          <Button
            asChild
            variant="primary"
            size="lg"
            className="text-xl font-medium tracking-tight h-auto py-4 px-6 rounded-lg"
          >
            <Link to="/topluluk">{t('home.community.cta')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
