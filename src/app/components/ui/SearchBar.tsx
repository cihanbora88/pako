import { InputHTMLAttributes } from 'react';
import svgPaths from '../../../imports/svg-9rloq76aef';

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

export function SearchBar({ _onSearch, ...props }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        className="h-9 w-full rounded-lg border border-[var(--color-border)] dark:border-gray-700 bg-white dark:bg-gray-800 px-3 pr-10 text-sm text-black dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-secondary)]"
        {...props}
      />
      <svg
        className="absolute right-3 top-1/2 size-5 -translate-y-1/2 text-gray-500 dark:text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path d={svgPaths.p25f14b80} fill="currentColor" />
      </svg>
    </div>
  );
}
