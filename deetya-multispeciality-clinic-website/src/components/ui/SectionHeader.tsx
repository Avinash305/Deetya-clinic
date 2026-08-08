type BadgeTone = 'primary' | 'accent' | 'warm' | 'dark';
type Align = 'center' | 'left';
type Tone = 'light' | 'dark';
type Size = 'xl' | 'lg';

interface SectionHeaderProps {
  /** Small pill label above the title. */
  badge?: string;
  badgeTone?: BadgeTone;
  title: string;
  /** Word(s) highlighted with a gradient text effect. */
  gradient?: string;
  subtitle?: string;
  align?: Align;
  /** 'dark' for dark section backgrounds (title inherits white). */
  tone?: Tone;
  /** 'xl' = full section header, 'lg' = compact related-items header. */
  size?: Size;
  /** Center the header inside a max-w-2xl container (default true). */
  contain?: boolean;
  /** Extra classes on the wrapper (e.g. vertical margins + scroll animation). */
  className?: string;
  /** Fully replaces the default title classes. */
  titleClassName?: string;
  /** Fully replaces the default gradient-span classes. */
  gradientClassName?: string;
  /** Fully replaces the default subtitle classes. */
  subtitleClassName?: string;
  /** Fully replaces the default badge classes. */
  badgeClassName?: string;
  /** Fully replaces the default dot classes. */
  dotClassName?: string;
}

const centeredBadge: Record<BadgeTone, string> = {
  primary: 'inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full mb-4',
  accent: 'inline-flex items-center gap-2 px-4 py-1.5 bg-accent-50 border border-accent-200 rounded-full mb-4',
  warm: 'inline-flex items-center gap-2 px-4 py-1.5 bg-warm-50 border border-warm-200 rounded-full mb-4',
  dark: 'inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 border border-white/20 rounded-full mb-3 sm:mb-4',
};

const leftBadge: Record<BadgeTone, string> = {
  primary: 'inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full mb-4 xs:mb-5',
  accent: 'inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 bg-accent-50 border border-accent-200 rounded-full mb-4 xs:mb-5',
  warm: 'inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 bg-warm-50 border border-warm-200 rounded-full mb-4 xs:mb-5',
  dark: centeredBadge.dark,
};

const badgeDot: Record<BadgeTone, string> = {
  primary: 'w-2 h-2 bg-primary-500 rounded-full',
  accent: 'w-2 h-2 bg-accent-500 rounded-full',
  warm: 'w-2 h-2 bg-warm-500 rounded-full',
  dark: 'w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-400 rounded-full',
};

const badgeLabel: Record<BadgeTone, string> = {
  primary: 'text-xs sm:text-sm font-semibold text-primary-700',
  accent: 'text-xs sm:text-sm font-semibold text-accent-700',
  warm: 'text-xs sm:text-sm font-semibold text-warm-700',
  dark: 'text-[10px] xs:text-xs sm:text-sm font-semibold text-accent-300',
};

export default function SectionHeader({
  badge,
  badgeTone = 'primary',
  title,
  gradient,
  subtitle,
  align = 'center',
  tone = 'light',
  size = 'xl',
  contain = true,
  className = '',
  titleClassName,
  gradientClassName,
  subtitleClassName,
  badgeClassName,
  dotClassName,
}: SectionHeaderProps) {
  const isCentered = align === 'center';

  const containerClass = isCentered ? `text-center ${contain ? 'max-w-2xl mx-auto' : ''} ${className}` : className;
  const badgeClass = badgeClassName ?? (isCentered ? centeredBadge[badgeTone] : leftBadge[badgeTone]);

  const defaultTitle =
    size === 'lg'
      ? 'text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 mb-3'
      : `text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold ${
          tone === 'dark' ? '' : 'text-primary-950'
        } mb-4 ${isCentered ? '' : 'leading-tight'}`;

  const defaultGradient =
    tone === 'dark'
      ? 'bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent'
      : 'bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent';

  const defaultSubtitle =
    size === 'lg' ? 'text-gray-600 text-xs xs:text-sm sm:text-base' : 'text-gray-600 text-sm xs:text-base sm:text-lg';

  return (
    <div className={containerClass}>
      {badge && (
        <span className={badgeClass}>
          <span className={dotClassName ?? badgeDot[badgeTone]} />
          <span className={badgeLabel[badgeTone]}>{badge}</span>
        </span>
      )}
      <h2 className={titleClassName ?? defaultTitle}>
        {title}
        {gradient && <span className={gradientClassName ?? defaultGradient}>{gradient}</span>}
      </h2>
      {subtitle && <p className={subtitleClassName ?? defaultSubtitle}>{subtitle}</p>}
    </div>
  );
}
