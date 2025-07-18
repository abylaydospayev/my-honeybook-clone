import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import './button_54.css';
import './button_85.css';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105',
  {
    variants: {
      variant: {
        primary: 'bg-dark-gray text-white hover:bg-dark-gray/90',
        secondary: 'bg-brand-blue text-white hover:bg-brand-blue/90',
        deep3d: 'btn-54',
        deepBorder: 'btn-85',
        // --- ADDED GHOST AND OUTLINE VARIANTS ---
        ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800',
        outline: 'border border-gray-200 dark:border-gray-700 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
      },
      size: {
        default: 'px-5 py-2.5',
        lg: 'px-8 py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    // Note: The base class logic doesn't need to change.
    // CVA will apply the correct classes for 'ghost' and 'outline'.
    const baseClass = cn(buttonVariants({ variant, size, className }));

    if (variant === 'deep3d') {
      return (
        <Comp className={cn('btn-54', className)} ref={ref} {...props}>
          <span className="shadow"></span>
          <span className="depth"></span>
          <span className="content">{children}</span>
        </Comp>
      );
    }

    if (variant === 'deepBorder') {
      return (
        <Comp className={cn('btn-85', className)} ref={ref} {...props}>
          <span>{children}</span>
        </Comp>
      );
    }

    return (
      <Comp className={baseClass} ref={ref} {...props}>
        {children}
      </Comp>
    );
  }
);


Button.displayName = 'Button';

export { Button, buttonVariants };