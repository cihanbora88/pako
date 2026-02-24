import { MainLayout } from '../components/layout/MainLayout';
import {
  HeroSection,
  PakoNedirSection,
  PakoRiderSection,
  CommunitySection,
  PurpleCard,
  BlogPreviewSection,
  FaqSection,
  NewsletterSection,
} from '../components/sections';
import { useTranslation } from 'react-i18next';

export function HomePage() {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <div className="flex w-full flex-col items-center gap-8">
        <HeroSection />
        <PakoNedirSection />
        <PakoRiderSection />
        <CommunitySection />
        <PurpleCard
          title={t('supportCta.title')}
          description={t('supportCta.description')}
          ctaLabel={t('supportCta.cta')}
          ctaLink="/destek-ol"
        />
        <BlogPreviewSection />
        <FaqSection />
        <NewsletterSection />
      </div>
    </MainLayout>
  );
}
