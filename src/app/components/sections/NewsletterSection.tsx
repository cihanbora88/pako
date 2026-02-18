import { useState } from 'react';
import newsletterBg from '@assets/images/newsletter_bg.jpg';

export function NewsletterSection() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Newsletter signup:', email);
        setEmail('');
    };

    return (
        <section className="relative flex w-full items-center justify-center overflow-hidden px-4 py-10 md:h-[188px] md:px-8">
            {/* Background */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                <img
                    alt=""
                    className="absolute inset-0 size-full object-cover"
                    src={newsletterBg}
                />
                <div className="absolute inset-0 bg-[rgba(41,0,121,0.5)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
                {/* Text */}
                <div className="flex flex-col gap-2 text-white">
                    <p className="font-['Overpass',sans-serif] text-3xl font-bold leading-tight md:text-5xl lg:text-[64px] lg:leading-[64px]">
                        Bizden Haber Al
                    </p>
                    <p className="font-['Overpass',sans-serif] text-lg font-light tracking-tight md:text-2xl lg:text-[32px] lg:leading-[40px]">
                        En son gelişmelerden haberdar ol
                    </p>
                </div>

                {/* Email input */}
                <form onSubmit={handleSubmit} className="flex w-full flex-1 gap-4 md:max-w-md">
                    <input
                        type="email"
                        placeholder="mail@pako.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 rounded-lg border border-[var(--color-gray-300)] bg-white px-4 py-3 font-['Inter',sans-serif] text-base text-[var(--color-gray-500)] outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    />
                    <button
                        type="submit"
                        className="rounded-lg bg-black px-6 py-3 font-['Overpass',sans-serif] text-xl font-medium tracking-tight text-white transition-all hover:bg-[var(--color-gray-800)] active:scale-[0.98]"
                    >
                        katıl
                    </button>
                </form>
            </div>
        </section>
    );
}
