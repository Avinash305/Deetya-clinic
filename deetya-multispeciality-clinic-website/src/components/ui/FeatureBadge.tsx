import type { ReactNode } from 'react';

interface FeatureBadgeProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  /** 'light' = white card, 'dark' = glass card on dark backgrounds. */
  tone?: 'light' | 'dark';
  /** Gradient classes for the icon tile (light tone only). */
  color?: string;
}

/** Small info badge: gradient icon tile + bold title + muted subtitle. */
export default function FeatureBadge({ icon, title, subtitle, tone = 'light', color = 'from-accent-500 to-accent-700' }: FeatureBadgeProps) {
  if (tone === 'dark') {
    return (
      <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 p-3.5 xs:p-4 backdrop-blur-sm hover:bg-white/10 hover:border-accent-400/30 hover:-translate-y-0.5 transition-all duration-300">
        <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-accent-500/25 to-accent-500/10 border border-accent-400/25 flex items-center justify-center text-accent-400">
          {icon}
        </div>
        <div>
          <p className="text-xs xs:text-sm font-bold text-white">{title}</p>
          <p className="text-[10px] xs:text-[11px] text-white/50">{subtitle}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white border border-gray-100 p-3.5 xs:p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
      <div className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-md`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-primary-950">{title}</p>
        <p className="text-[11px] xs:text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}
