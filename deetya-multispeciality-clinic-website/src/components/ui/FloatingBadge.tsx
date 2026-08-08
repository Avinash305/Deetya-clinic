import type { ReactNode } from 'react';

type BadgePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type BadgeSize = 'sm' | 'md' | 'lg';

interface FloatingBadgeProps {
  icon: ReactNode;
  /** Gradient classes for the icon tile, e.g. 'from-accent-500 to-accent-700'. */
  iconBg: string;
  title: string;
  subtitle: string;
  /** Which corner of the parent image the badge floats over. */
  position?: BadgePosition;
  /** 'sm' = compact (About quick-stats), 'md' = standard, 'lg' = large (AboutPage stats). */
  size?: BadgeSize;
  /** Shadow tint class, e.g. 'shadow-primary-900/10' or 'shadow-purple-950/40'. Pass '' to keep the plain box shadow. */
  shadow?: string;
  /** Extra classes appended to the badge shell (padding / radius / shadow overrides). */
  className?: string;
  /** Extra classes for the icon tile (size / shadow / shrink overrides). */
  iconClassName?: string;
  /** Extra classes for the title line. */
  titleClassName?: string;
  /** Extra classes for the subtitle line. */
  subtitleClassName?: string;
  /** Fully replaces the computed corner offsets. */
  cornerClassName?: string;
}

const cornerMap: Record<BadgeSize, Record<BadgePosition, string>> = {
  sm: {
    'top-left': '-top-1.5 -left-0.5 xs:-top-3 xs:-left-2 sm:-left-4',
    'top-right': '-top-1.5 -right-0.5 xs:-top-3 xs:-right-2 sm:-right-4',
    'bottom-left': '-bottom-1.5 -left-0.5 xs:-bottom-3 xs:-left-2 sm:-left-4',
    'bottom-right': '-bottom-1.5 -right-0.5 xs:-bottom-3 xs:-right-2 sm:-right-4',
  },
  md: {
    'top-left': '-top-4 -left-2 xs:-left-4',
    'top-right': '-top-4 -right-2 xs:-right-4',
    'bottom-left': '-bottom-4 -left-2 xs:-left-4',
    'bottom-right': '-bottom-4 -right-2 xs:-right-4',
  },
  lg: {
    'top-left': '-top-3 -left-2 xs:-top-4 xs:-left-3 sm:-left-6',
    'top-right': '-top-3 -right-2 xs:-top-4 xs:-right-3 sm:-right-6',
    'bottom-left': '-bottom-3 -left-2 xs:-bottom-4 xs:-left-3 sm:-left-6',
    'bottom-right': '-bottom-4 -right-2 xs:-bottom-5 xs:-right-3 sm:-right-6',
  },
};

const sizeClasses: Record<BadgeSize, { outer: string; tile: string; title: string; subtitle: string }> = {
  sm: {
    outer: 'bg-white rounded-lg xs:rounded-xl shadow-md xs:shadow-lg p-1.5 xs:p-2 sm:p-3 border border-gray-100 z-10 flex items-center gap-1 xs:gap-1.5 sm:gap-2',
    tile: 'w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 rounded-lg',
    // text sizes are fully specified by call sites (both sm usages differ)
    title: 'font-bold text-primary-950 leading-tight',
    subtitle: 'text-[6px] xs:text-[8px] sm:text-[10px] text-gray-500 leading-tight',
  },
  md: {
    outer: 'bg-white rounded-2xl shadow-xl px-3 xs:px-4 py-2.5 xs:py-3 border border-gray-100 flex items-center gap-2.5',
    tile: 'w-9 h-9 xs:w-10 xs:h-10 rounded-xl shadow-md',
    title: 'text-[10px] xs:text-xs font-bold text-primary-950 leading-tight',
    subtitle: 'text-[9px] xs:text-[10px] text-gray-500',
  },
  lg: {
    outer: 'bg-white rounded-xl xs:rounded-2xl shadow-lg xs:shadow-xl p-2.5 xs:p-3 sm:p-4 border border-gray-100 z-10 flex items-center gap-2 xs:gap-2.5 sm:gap-3',
    tile: 'w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-lg xs:rounded-xl',
    title: 'text-base xs:text-lg sm:text-lg font-bold text-primary-950 leading-tight',
    subtitle: 'text-[10px] xs:text-[11px] sm:text-xs text-gray-500 leading-tight',
  },
};

/** White floating badge pinned over an image corner (icon tile + title + subtitle). */
export default function FloatingBadge({
  icon,
  iconBg,
  title,
  subtitle,
  position = 'bottom-left',
  size = 'md',
  // md keeps the standard primary-tinted glow; sm/lg bake their own box-shadow
  shadow = size === 'md' ? 'shadow-primary-900/10' : '',
  className = '',
  iconClassName = '',
  titleClassName = '',
  subtitleClassName = '',
  cornerClassName,
}: FloatingBadgeProps) {
  const s = sizeClasses[size];
  const corner = cornerClassName ?? cornerMap[size][position];

  return (
    <div className={`absolute ${corner} ${s.outer} ${shadow} ${className}`}>
      <div className={`${s.tile} bg-gradient-to-br ${iconBg} text-white flex items-center justify-center ${iconClassName}`}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className={`${s.title} ${titleClassName}`}>{title}</p>
        <p className={`${s.subtitle} ${subtitleClassName}`}>{subtitle}</p>
      </div>
    </div>
  );
}
