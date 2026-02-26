import { Link } from 'react-router';
import { Button } from '../ui/button';

interface PurpleCardProps {
  title?: string;
  description: string;
  ctaLabel: string;
  ctaLink: string;
}

export function PurpleCard({ title, description, ctaLabel, ctaLink }: PurpleCardProps) {
  return (
    <section className="flex w-full items-center justify-center px-4 py-12 md:px-8">
      <div className="flex w-full max-w-[var(--content-max-width)] flex-col items-center justify-between gap-8 rounded-2xl bg-[#290079] dark:bg-[#AFE403] p-8 lg:flex-row lg:px-16 lg:py-12">
        <div className="flex flex-col gap-4 text-left lg:max-w-2xl">
          {title && (
            <h2 className="font-['Overpass_Mono',sans-serif] text-2xl font-semibold tracking-tight text-[#AFE403] dark:text-black md:text-[32px] md:leading-[32px]">
              {title}
            </h2>
          )}
          <p className="font-['Overpass',sans-serif] text-base font-light leading-7 tracking-tight text-white dark:text-black md:text-xl">
            {description}
          </p>
        </div>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="min-w-[180px] rounded-xl border-2 px-8 py-6 text-xl font-medium tracking-tight transition-all active:scale-[0.98] border-white bg-transparent text-white hover:bg-white hover:text-[#290079] dark:border-black dark:bg-transparent dark:text-black dark:hover:bg-black dark:hover:border-black dark:hover:text-[#AFE403]"
        >
          <Link to={ctaLink}>{ctaLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
