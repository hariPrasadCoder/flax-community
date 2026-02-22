import React, { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'flax';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer inline-block text-center font-medium';
    
    const variants = {
      // Classic ink button
      primary: 'bg-ink text-paper border-2 border-ink hover:bg-transparent hover:text-ink',
      // Outline
      outline: 'bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-paper',
      // Flax purple accent - unique to this site
      flax: 'bg-flax text-paper border-2 border-flax hover:bg-paper hover:text-flax shadow-[3px_3px_0px_0px_#18181B] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#18181B]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-sm',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
