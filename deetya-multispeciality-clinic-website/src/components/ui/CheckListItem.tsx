import type { ReactNode } from 'react';
import { FiCheck } from 'react-icons/fi';

type Tone = 'accent' | 'primary' | 'warm';

interface CheckListItemProps {
  children: ReactNode;
  /** Circle color scheme. */
  tone?: Tone;
  /** Extra classes (e.g. gap or text size adjustments). */
  className?: string;
}

const circleClasses: Record<Tone, string> = {
  accent: 'bg-accent-100 text-accent-600',
  primary: 'bg-primary-100 text-primary-700',
  warm: 'bg-warm-100 text-warm-700',
};

/** Checklist row: a checkmark in a colored circle followed by the content. */
export default function CheckListItem({ children, tone = 'accent', className = '' }: CheckListItemProps) {
  return (
    <div className={`flex items-start ${className}`}>
      <span
        className={`mt-0.5 w-5 h-5 rounded-full ${circleClasses[tone]} flex items-center justify-center shrink-0`}
      >
        <FiCheck className="w-3 h-3" />
      </span>
      {children}
    </div>
  );
}
