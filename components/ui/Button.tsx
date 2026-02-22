import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
          {
            'bg-white text-black hover:bg-brand-accent hover:text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]':
              variant === 'primary',
            'bg-brand-card text-white hover:bg-brand-terminal border border-white/10':
              variant === 'secondary',
            'border border-white/20 text-white hover:bg-white/5 hover:border-white/40':
              variant === 'outline',
            'text-brand-text hover:text-white': variant === 'ghost',
            'h-9 px-4 text-xs tracking-widest uppercase': size === 'sm',
            'h-11 px-6 text-sm tracking-widest uppercase': size === 'md',
            'h-14 px-8 text-sm tracking-widest uppercase font-semibold': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, cn };
