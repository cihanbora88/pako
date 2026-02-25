import { Container } from '../components/ui/Container';
import { useTranslation } from 'react-i18next';

interface TermsSection {
  title: string;
  content: string;
}

export function TermsPage() {
  const { t } = useTranslation();
  const sections = t('terms.sections', { returnObjects: true }) as TermsSection[];

  return (
    <div className="flex w-full flex-col items-center gap-12 py-16 bg-white dark:bg-gray-900">
      <Container>
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h1 className="font-['Overpass_Mono',sans-serif] text-4xl font-bold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
              {t('terms.title')}
            </h1>
            <p className="font-['Overpass',sans-serif] text-lg text-gray-600 dark:text-gray-400">
              {t('terms.description')}
            </p>
          </div>

          {/* Content Sections */}
          <div className="flex flex-col gap-12">
            {sections?.map((section, index) => (
              <section key={index} className="flex flex-col gap-4">
                <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
                  {section.title}
                </h2>
                <p className="font-['Overpass',sans-serif] text-base leading-relaxed text-black dark:text-white">
                  {section.content}
                </p>
              </section>
            ))}

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
              <p className="font-['Overpass',sans-serif] text-xl font-bold text-[var(--color-primary)] dark:text-[var(--color-secondary)] italic text-center">
                {t('terms.footer')}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
