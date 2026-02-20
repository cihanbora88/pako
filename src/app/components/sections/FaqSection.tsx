import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FaqItem {
  question: string;
  answer: string;
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`w-full rounded-lg border-2 border-[var(--color-border)] transition-colors ${
        isOpen
          ? 'bg-white dark:bg-[var(--color-gray-800)]'
          : 'bg-[var(--color-gray-100)] dark:bg-[var(--color-gray-800)]'
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="flex-1 font-['Overpass_Mono',sans-serif] text-base font-medium leading-7 text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-xl">
          {item.question}
        </span>
        <svg
          className={`size-5 shrink-0 text-[var(--color-primary)] transition-transform dark:text-[var(--color-secondary)] ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 pb-4">
          <p className="font-['Overpass',sans-serif] text-base font-light leading-6 tracking-tight text-black dark:text-white">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export function FaqSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(2); // Third item open by default like Figma

  const faqItems: FaqItem[] = [
    {
      question: t('faq.items.0.q'),
      answer: t('faq.items.0.a'),
    },
    {
      question: t('faq.items.1.q'),
      answer: t('faq.items.1.a'),
    },
    {
      question: t('faq.items.2.q'),
      answer: t('faq.items.2.a'),
    },
    {
      question: t('faq.items.3.q'),
      answer: t('faq.items.3.a'),
    },
  ];

  return (
    <section className="flex w-full items-center justify-center px-4 py-4 md:px-8">
      <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-6 md:px-16 lg:px-30">
        <h2 className="text-center font-['Overpass_Mono',sans-serif] text-2xl font-semibold tracking-tight text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px] md:leading-[32px]">
          {t('faq.title')}
        </h2>
        <div className="flex w-full flex-col gap-6">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
