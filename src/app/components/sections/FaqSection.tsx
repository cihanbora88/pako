import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: 'Pako sürücüsü ne yapar',
    answer:
      'Pako sürücüsü Pako Rider uygulamasının havuzunda bulunan, restoranlardan gelen teslimat görevlerini üstlenir, gönüllülük esasıyla çalışır. Bir kolektifi temsil etmenin bilincinde iş ortaklarına esenlikle çözüm sunar.',
  },
  {
    question: "Pako'nun diğer teslimat platformlarından farkı nedir?",
    answer:
      'Pako platform kuryeliği yapmaz, restoran kuryeliği yapar. Özel bir şirket de değildir, bisikletlilerden oluşan bir topluluktur. Pako Rider sadece yerel işleri listeler. Pakolar bu işleri seçer ve seçtikleri işler için motorlu araçlar kullanmaz, teslimatları bisiklet ile yaparlar. Pako komisyon ile çalışmaz, emeğinin karşılığı dışında bir gelir etmez.',
  },
  {
    question: 'Nasıl Pako olabilirim?',
    answer:
      'Topluluğa dahil olarak Pako tarzı yaşamı birlikte geliştirdiğimiz bir platforma katılmış ve ilk adımı atmış olursun. Topluluk sayfamızda saha ile ilgili bilgileri edinebilir ve oryantasyon sürecini başlatabilirsin.',
  },
  {
    question: 'Pako güvenli midir?',
    answer:
      'Evet. Pako sürücüleri profesyonel ekipmanlara sahiptir ve topluluk tarafından denetlenen güvenlik standartlarına uyarlar. Bisiklet en güvenli ulaşım araçlarından biridir ve Pako’da kazalar sık karşılaştığımız bir durum değildir. Pako oryantasyonu bir süreçtir ve bisikletliyi sadece trafikte değil hayatın her alanında farkındalığını geliştirmek için otonom şekilde eğitir. ',
  },
];

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
  const [openIndex, setOpenIndex] = useState<number | null>(2); // Third item open by default like Figma

  return (
    <section className="flex w-full items-center justify-center px-4 py-4 md:px-8">
      <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-6 md:px-16 lg:px-30">
        <h2 className="text-center font-['Overpass_Mono',sans-serif] text-2xl font-semibold tracking-tight text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px] md:leading-[32px]">
          Sıkça sorulan sorular
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
