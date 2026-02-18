import { Link } from 'react-router';
import { MainLayout } from '../components/layout/MainLayout';
import { t } from '../utils/translations';
import girlRider from '@assets/images/pako_girl_sportsbg.png';

export function AboutPage() {
  return (
    <MainLayout>
      <div className="flex w-full flex-col items-center gap-8 py-10">
        {/* Page heading */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-6">
            <h1 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px]">
              Pako nedir?
            </h1>
          </div>
        </section>

        {/* About content with image */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-10 lg:flex-row lg:gap-20 lg:px-20">
            {/* Image */}
            <div className="flex flex-1 items-center justify-center">
              <img
                src={girlRider}
                alt="Pako bisiklet kurye"
                className="h-auto w-full max-w-sm object-contain"
              />
            </div>

            {/* Content blocks */}
            <div className="flex flex-1 flex-col gap-6">
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                Pako, Patronsuz Kuryeler'den doğan Kadıköy merkezli bir restoran kuryeliği projesidir. 2019 yılında pandemi döneminde yerel esnafı, üreticiyi desteklemek amacıyla kâr amacı gütmeden oluşmuştur.
              </p>
              <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                Topluluk tarafından yönetilen, merkeziyetsiz bir yapıya sahip olan Pako, adil çalışma koşulları ve yerel ekonomiyi desteklemek için çalışmaktadır.
              </p>
            </div>
          </div>
        </section>

        {/* Values section */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="grid w-full max-w-[var(--content-max-width)] gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: 'icon_yerel.svg', title: 'Yerel', desc: 'Yerel esnafı ve üreticiyi destekleriz.' },
              { icon: 'icon_kolektif.svg', title: 'Kolektif', desc: 'Kararlar birlikte alınır, kazanç adil paylaşılır.' },
              { icon: 'icon_seffaf.svg', title: 'Şeffaf', desc: 'Tüm süreçlerimiz açık ve hesap verebilirdir.' },
              { icon: 'icon_doga.svg', title: 'Doğa dostu', desc: 'Bisikletle teslimat, sıfır karbon ayak izi.' },
            ].map((value) => (
              <div key={value.title} className="flex flex-col items-center gap-4 rounded-xl border-2 border-[var(--color-border)] p-6 text-center transition-colors hover:border-[var(--color-secondary)]">
                <img
                  src={`/icons/${value.icon}`}
                  alt={value.title}
                  className="size-16"
                />
                <h3 className="font-['Overpass_Mono',sans-serif] text-lg font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
                  {value.title}
                </h3>
                <p className="font-['Overpass',sans-serif] text-sm font-light text-black dark:text-white">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="flex w-full items-center justify-center px-4 py-8 md:px-8">
          <Link
            to="/topluluk"
            className="rounded-lg bg-[var(--color-secondary)] px-6 py-4 font-['Overpass',sans-serif] text-xl font-medium tracking-tight text-[var(--color-primary)] transition-all hover:opacity-90 active:scale-[0.98]"
          >
            Topluluğa katıl
          </Link>
        </section>
      </div>
    </MainLayout>
  );
}
