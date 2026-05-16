import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '../../utils/cn';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: 'blue' | 'green' | 'ghost';
};

export function Button({ children, className, variant = 'blue', ...props }: ButtonProps) {
  const variants = {
    blue: 'bg-mvtec-blue text-white hover:bg-sky-400',
    green: 'bg-mvtec-green text-white hover:bg-green-400',
    ghost: 'bg-white/10 text-white hover:bg-white/15',
  };

  return (
    <button
      className={cn('rounded-xl px-5 py-3 text-sm font-bold transition', variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
