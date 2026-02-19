import { Link } from 'react-router';
import pakoSticker from '@assets/svg/pako_sticker.svg';

export function PakoNedirSection() {
  return (
    <section className="flex w-full items-center justify-center px-4 py-6 md:px-8 lg:py-6">
      <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-10 md:gap-16 lg:flex-row lg:gap-20 lg:px-20">
        {/* Image */}
        <div className="flex flex-1 items-center justify-center">
          <img
            src={pakoSticker}
            alt="Pako sticker"
            className="h-auto w-full max-w-sm object-contain lg:max-w-none"
          />
        </div>

        {/* Text content */}
        <div className="flex flex-1 flex-col items-end gap-4 text-right">
          <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold tracking-tight text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px] md:leading-[32px]">
            Pako nedir?
          </h2>
          <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
            Pako, Patronsuz Kuryeler&apos;den doğan Kadıköy merkezli bir restoran kuryeliği
            projesidir. 2019 yılında pandemi döneminde yerel esnafı, üreticiyi desteklemek amacıyla
            kâr amacı gütmeden oluşmuştur.
          </p>
          <Link
            to="/hakkinda"
            className="rounded-lg bg-[var(--color-secondary)] px-6 py-4 font-['Overpass',sans-serif] text-xl font-medium tracking-tight text-[var(--color-primary)] transition-all hover:opacity-90 active:scale-[0.98]"
          >
            devamı
          </Link>
        </div>
      </div>
    </section>
  );
}
