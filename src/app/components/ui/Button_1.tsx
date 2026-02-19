import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'rounded-lg font-["Overpass",sans-serif] font-medium transition-all hover:opacity-90 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary:
      'bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-secondary-dark)]',
    secondary:
      'bg-[var(--color-gray-100)] dark:bg-gray-800 text-[var(--color-primary)] dark:text-white border border-[var(--color-border)] dark:border-gray-700',
    outline: 'border-2 border-white text-white hover:bg-white/10',
  };

  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-xl',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
