import { Container } from '../components/ui/Container';
import { useTranslation } from 'react-i18next';

interface KvkkSection {
  title: string;
  content?: string;
  list?: string[];
}

export function KvkkPage() {
  const { t } = useTranslation();
  const sections = t('kvkk.sections', { returnObjects: true }) as KvkkSection[];

  return (
    <div className="flex w-full flex-col items-center gap-12 py-16 bg-white dark:bg-gray-900">
      <Container>
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h1 className="font-['Overpass_Mono',sans-serif] text-4xl font-bold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
              {t('kvkk.title')}
            </h1>
            <div className="flex flex-col gap-4">
              <p className="font-['Overpass',sans-serif] text-lg text-gray-600 dark:text-gray-400">
                {t('kvkk.description')}
              </p>
              <p className="font-['Overpass',sans-serif] text-lg font-medium text-black dark:text-white">
                {t('kvkk.subDescription')}
              </p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="flex flex-col gap-12">
            {sections.map((section, index) => (
              <section key={index} className="flex flex-col gap-4">
                <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
                  {section.title}
                </h2>
                {section.content && (
                  <p className="font-['Overpass',sans-serif] text-base leading-relaxed text-black dark:text-white">
                    {section.content}
                  </p>
                )}
                {section.list && (
                  <ul className="list-disc pl-6 flex flex-col gap-2 font-['Overpass',sans-serif] text-base leading-relaxed text-black dark:text-white">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
              <p className="font-['Overpass',sans-serif] text-lg font-bold text-[var(--color-primary)] dark:text-[var(--color-secondary)] italic">
                {t('kvkk.footer')}
              </p>
              <p className="font-['Overpass',sans-serif] text-base mt-2 text-black dark:text-white">
                {t('kvkk.contact')}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
