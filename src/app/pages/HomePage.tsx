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
      <section className="flex w-full items-center justify-center px-6 py-12 md:px-12 md:py-16">
        <p className="max-w-4xl text-center font-['Overpass',sans-serif] text-xl font-semibold leading-snug text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-3xl md:leading-snug">
          {t('home.faqStatement')}
        </p>
      </section>
      <FaqSection />
      <NewsletterSection />
    </div>
  );
}
