interface SectionDividerProps {
  variant?: 'wave' | 'curve';
  color?: 'primary' | 'accent' | 'light';
  flipped?: boolean;
}

const colorMap = {
  primary: {
    fill: 'fill-primary-950',
    bg: 'bg-primary-950',
  },
  accent: {
    fill: 'fill-accent-500',
    bg: 'bg-accent-500',
  },
  light: {
    fill: 'fill-primary-50',
    bg: 'bg-primary-50',
  },
};

export default function SectionDivider({ variant = 'wave', color = 'light', flipped = false }: SectionDividerProps) {
  const c = colorMap[color];

  const renderWave = () => (
    <svg className={`w-full h-[30px] xs:h-[40px] sm:h-[60px] ${c.fill} ${flipped ? 'rotate-180' : ''}`} viewBox="0 0 1440 60" preserveAspectRatio="none">
      <path d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V0H0V30Z" />
    </svg>
  );

  const renderCurve = () => (
    <svg className={`w-full h-[30px] xs:h-[40px] sm:h-[60px] ${c.fill} ${flipped ? 'rotate-180' : ''}`} viewBox="0 0 1440 60" preserveAspectRatio="none">
      <path d="M0 0C480 60 960 60 1440 0V60H0V0Z" />
    </svg>
  );

  switch (variant) {
    case 'wave': return renderWave();
    case 'curve': return renderCurve();
    default: return renderWave();
  }
}
