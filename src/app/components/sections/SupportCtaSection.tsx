import { Link } from 'react-router';

export function SupportCtaSection() {
    return (
        <section className="flex w-full items-center justify-center px-4 py-6 md:px-8 lg:py-6">
            <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-6 px-4 text-center md:px-16 lg:px-60">
                <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold tracking-tight text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-[32px] md:leading-[32px]">
                    Pako Rider'a Destek Ol!
                </h2>
                <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-black dark:text-white md:text-xl">
                    Sahaya adım atmadan da Pako'ya destek olabilirsin. Destek sayfamızdaki seçenekleri inceleyebilir, daha fazla bilgi alabilirsin.
                </p>
                <Link
                    to="/destek-ol"
                    className="rounded-lg bg-[var(--color-secondary)] px-6 py-4 font-['Overpass',sans-serif] text-xl font-medium tracking-tight text-[var(--color-primary)] transition-all hover:opacity-90 active:scale-[0.98]"
                >
                    Destek ol
                </Link>
            </div>
        </section>
    );
}
