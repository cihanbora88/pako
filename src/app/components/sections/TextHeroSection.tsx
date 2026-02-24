import React from 'react';

interface TextHeroSectionProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

export function TextHeroSection({ title, subtitle, className }: TextHeroSectionProps) {
  return (
    <section className={`flex w-full flex-col items-center px-4 py-16 md:px-8 ${className ?? ''}`}>
      <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center gap-6 text-center">
        <h2 className="font-['Overpass',sans-serif] text-3xl font-light leading-tight text-[var(--color-primary)] dark:text-[var(--color-secondary)] md:text-5xl lg:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <div className="font-['Overpass',sans-serif] text-xl font-light text-black dark:text-white md:text-2xl">
            {subtitle}
          </div>
        )}
      </div>
    </section>
  );
}
