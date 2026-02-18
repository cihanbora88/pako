import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex w-full flex-col gap-1">
        {label && (
          <label
            htmlFor={props.id}
            className="font-['Overpass',sans-serif] font-bold text-2xl text-black dark:text-white"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`h-[45px] rounded-lg border border-[var(--color-border)] dark:border-gray-700 bg-[var(--color-gray-100)] dark:bg-gray-700 px-3 text-black dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-secondary)] ${
            error ? 'border-red-500' : ''
          } ${className}`}
          {...props}
        />
        {error && (
          <span className="text-sm text-red-500 dark:text-red-400">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
