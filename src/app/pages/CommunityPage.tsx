import { MainLayout } from '../components/layout/MainLayout';

export function CommunityPage() {
  return (
    <MainLayout>
      <div className="flex w-full flex-col items-center gap-8 py-10">
        {/* Page heading */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="flex w-full max-w-[var(--content-max-width)] flex-col gap-6 text-center">
            <h1 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px]">
              Topluluk
            </h1>
            <p className="mx-auto max-w-2xl font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
              Bisikletli yaşama dair fikirler ve projeler geliştirilen Pako Topluluğu&apos;na
              katılın. Çözümleri birlikte katılımcı şekilde üretelim.
            </p>
          </div>
        </section>

        {/* Community features */}
        <section className="flex w-full flex-col items-center px-4 md:px-8">
          <div className="grid w-full max-w-[var(--content-max-width)] gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Forum',
                desc: 'Topluluk üyeleriyle fikirlerinizi paylaşın ve tartışmalara katılın.',
              },
              {
                title: 'Etkinlikler',
                desc: 'Bisiklet turları, atölyeler ve buluşmalardan haberdar olun.',
              },
              {
                title: 'Projeler',
                desc: 'Açık kaynak projelerimize katkıda bulunun ve birlikte geliştirin.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-4 rounded-2xl border-2 border-[var(--color-border)] p-8 transition-colors hover:border-[var(--color-secondary)]"
              >
                <h3 className="font-['Overpass_Mono',sans-serif] text-xl font-semibold text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
                  {feature.title}
                </h3>
                <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Join CTA */}
        <section className="flex w-full items-center justify-center px-4 py-8 md:px-8">
          <a
            href="https://discord.gg/pako"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[var(--color-secondary)] px-6 py-4 font-['Overpass',sans-serif] text-xl font-medium tracking-tight text-[var(--color-primary)] transition-all hover:opacity-90 active:scale-[0.98]"
          >
            Topluluğa katıl
          </a>
        </section>
      </div>
    </MainLayout>
  );
}
