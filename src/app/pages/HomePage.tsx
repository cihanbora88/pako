import { MainLayout } from '../components/layout/MainLayout';
import {
  HeroSection,
  PakoNedirSection,
  PakoRiderSection,
  CommunitySection,
  SupportCtaSection,
  BlogPreviewSection,
  FaqSection,
  NewsletterSection,
} from '../components/sections';

export function HomePage() {
  return (
    <MainLayout>
      <div className="flex w-full flex-col items-center gap-8">
        <HeroSection />
        <PakoNedirSection />
        <PakoRiderSection />
        <CommunitySection />
        <SupportCtaSection />
        <BlogPreviewSection />
        <FaqSection />
        <NewsletterSection />
      </div>
    </MainLayout>
  );
}
