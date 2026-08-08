import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'gradient' | 'gradient-xl' | 'solid' | 'outline' | 'outline-xl';

const variantClasses: Record<ButtonVariant, string> = {
  /* View-all style CTA (Doctors / Services / Health Packages) */
  gradient:
    'group inline-flex items-center justify-center gap-2 px-5 xs:px-8 py-3 xs:py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg xs:rounded-xl shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-0.5 transition-all text-xs xs:text-sm',
  /* Larger rounded CTA (packages hero / why-choose-packages) */
  'gradient-xl':
    'group inline-flex items-center justify-center gap-2 px-5 xs:px-7 py-3 xs:py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-0.5 transition-all text-xs xs:text-sm',
  /* Solid primary CTA (about sections) */
  solid:
    'group inline-flex items-center justify-center gap-2 px-5 xs:px-6 py-3 bg-primary-700 text-white font-semibold rounded-lg xs:rounded-xl hover:bg-primary-800 shadow-lg shadow-primary-700/25 transition-all hover:-translate-y-0.5 text-xs xs:text-sm',
  /* Outlined primary CTA */
  outline:
    'group inline-flex items-center justify-center gap-2 px-5 xs:px-6 py-3 border-2 border-primary-200 text-primary-700 font-semibold rounded-lg xs:rounded-xl hover:bg-primary-50 hover:border-primary-300 transition-all text-xs xs:text-sm',
  /* Larger outlined CTA (packages hero / why-choose-packages secondary links) */
  'outline-xl':
    'group inline-flex items-center justify-center gap-2 px-5 xs:px-7 py-3 xs:py-3.5 border-2 border-primary-200 text-primary-700 font-bold rounded-xl hover:bg-primary-50 hover:border-primary-300 transition-all text-xs xs:text-sm',
};

interface ButtonProps {
  variant?: ButtonVariant;
  /** Renders a router <Link>. */
  to?: string;
  /** Renders an <a>. */
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  /** Extra classes appended after the variant classes. */
  className?: string;
  children: ReactNode;
}

/** Standard site CTA — renders a Link, anchor, or button with a shared style. */
export default function Button({
  variant = 'gradient',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  children,
}: ButtonProps) {
  const classes = `${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
