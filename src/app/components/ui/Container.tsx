import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  size?: 'default' | 'content';
  className?: string;
}

export function Container({ children, size = 'content', className = '' }: ContainerProps) {
  const maxWidth = size === 'content' ? 'max-w-[var(--content-max-width)]' : 'max-w-[var(--container-max-width)]';

  return (
    <div className={`mx-auto w-full ${maxWidth} px-4 md:px-8 lg:px-0 ${className}`}>
      {children}
    </div>
  );
}
