import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCountUp } from '../../hooks/useCountUp';
import { statsData } from '../../data/siteData';
import SectionBackground from '../ui/SectionBackground';

function StatCard({ stat, isVisible, index }: { stat: typeof statsData[0]; isVisible: boolean; index: number }) {
  const count = useCountUp(stat.value, 2500, isVisible);
  const formatNumber = (n: number) => {
    if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + 'K';
    return n.toString();
  };

  return (
    <div
      className={`group relative p-3 xs:p-5 sm:p-8 rounded-xl xs:rounded-2xl overflow-hidden transition-all duration-500 ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Background layers — the gradient must paint ABOVE the white card
          (z-[1]) or the hover gradient would be hidden behind it, leaving
          white text invisible on the white card. Content sits at z-10. */}
      <div className="absolute inset-0 bg-white rounded-xl xs:rounded-2xl border border-gray-100 group-hover:border-transparent transition-colors duration-500" />
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl xs:rounded-2xl z-[1]`} />

      {/* Decorative corner circle */}
      <div className={`absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 group-hover:scale-[3] pointer-events-none`} />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon */}
        <div className={`w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-16 mb-2 xs:mb-3 sm:mb-4 rounded-lg xs:rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white text-sm xs:text-lg sm:text-2xl group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-white/20 transition-all duration-500 shadow-lg shadow-black/5`}>
          {stat.icon}
        </div>

        {/* Number */}
        <div className="flex flex-wrap items-baseline gap-0.5 justify-center">
          <span className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-bold text-primary-950 group-hover:text-white transition-colors duration-500">
            {formatNumber(count)}
          </span>
          <span className="text-base xs:text-lg sm:text-2xl lg:text-3xl font-bold text-primary-500 group-hover:text-white/90 transition-colors duration-500">
            {stat.suffix}
          </span>
        </div>

        {/* Label */}
        <p className="text-[10px] xs:text-xs sm:text-sm lg:text-base text-gray-500 font-medium mt-0.5 xs:mt-1 sm:mt-1.5 group-hover:text-white/80 transition-colors duration-500">
          {stat.label}
        </p>
      </div>
    </div>
  );
}

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  const marqueeItems = [...statsData, ...statsData];

  return (
    <section ref={ref} className="py-8 xs:py-10 lg:py-14 bg-gradient-to-b from-white to-primary-50/30 relative overflow-hidden">
      {/* Background decorations + dot grid */}
      <SectionBackground
        blobs={[
          'top-0 right-0 w-72 h-72 bg-primary-100/30 -translate-y-1/3 translate-x-1/4 blur-3xl',
          'bottom-0 left-0 w-72 h-72 bg-accent-100/20 translate-y-1/3 -translate-x-1/4 blur-3xl',
        ]}
        dotGrid={{ color: 'rgba(20,39,87,1)', size: 32, opacity: 0.02 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Edge fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 xs:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none lg:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-12 xs:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none lg:hidden" />

          {/* Mobile marquee */}
          <div className="flex lg:hidden overflow-hidden">
            <div className="flex items-stretch gap-2 xs:gap-4 animate-marquee hover:[animation-play-state:paused]"
              style={{ width: 'fit-content' }}
            >
              {marqueeItems.map((stat, i) => (
                <div key={i} className="flex-shrink-0 w-[calc(33.333vw-16px)] xs:w-[calc(33.333vw-22px)] sm:w-[200px]">
                  <StatCard stat={stat} isVisible={isVisible} index={i % statsData.length} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden lg:grid grid-cols-5 gap-5">
            {statsData.map((stat, i) => (
              <StatCard key={i} stat={stat} isVisible={isVisible} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
