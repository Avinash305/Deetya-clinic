import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

/** Frosted-glass card used across the doctor detail page. */
export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={`glass-card rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${className}`}
    >
      {children}
    </div>
  );
}
