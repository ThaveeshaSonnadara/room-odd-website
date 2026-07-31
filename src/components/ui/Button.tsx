import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsButton
  extends ButtonBaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-bronze text-white hover:bg-bronze-dark active:bg-bronze-dark focus-visible:ring-bronze',
  secondary:
    'bg-olive-deep text-white hover:bg-olive-dark active:bg-charcoal focus-visible:ring-olive',
  ghost:
    'bg-transparent text-canvas-dark hover:bg-stone/50 active:bg-stone focus-visible:ring-bronze',
  outline:
    'bg-transparent border border-canvas-dark/20 text-canvas-dark hover:border-canvas-dark/40 hover:bg-canvas-dark/5 active:bg-canvas-dark/10 focus-visible:ring-bronze',
};

const lightVariantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-bronze text-white hover:bg-bronze-dark active:bg-bronze-dark focus-visible:ring-bronze',
  secondary:
    'bg-white/10 text-white hover:bg-white/20 active:bg-white/30 focus-visible:ring-white',
  ghost:
    'bg-transparent text-white hover:bg-white/10 active:bg-white/20 focus-visible:ring-white',
  outline:
    'bg-transparent border border-white/30 text-white hover:border-white/50 hover:bg-white/5 active:bg-white/10 focus-visible:ring-white',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs tracking-wider',
  md: 'px-6 py-3 text-sm tracking-wider',
  lg: 'px-8 py-4 text-sm tracking-wider',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-body font-medium uppercase transition-all duration-300 ease-architectural focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

/** Button variant for use on dark backgrounds */
export function ButtonLight({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-body font-medium uppercase transition-all duration-300 ease-architectural focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal disabled:opacity-50 disabled:cursor-not-allowed';

  const classes = `${baseStyles} ${lightVariantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
