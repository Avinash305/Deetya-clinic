import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCountUp } from '../../hooks/useCountUp';
import { statsData } from '../../data/siteData';


function StatCard({ stat, isVisible }: { stat: typeof statsData[0]; isVisible: boolean }) {
  const count = useCountUp(stat.value, 2500, isVisible);
  const formatNumber = (n: number) => {
    if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + 'K';
    return n.toString();
  };

  return (
    <div className="group flex flex-col items-center text-center p-3 xs:p-4 sm:p-6 rounded-xl xs:rounded-2xl bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
      <div className={`w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 mb-2 xs:mb-3 sm:mb-4 rounded-xl xs:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white text-base xs:text-xl group-hover:scale-110 transition-transform duration-300`}>
        {stat.icon}
      </div>
      <p className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 mb-0.5 xs:mb-1">{formatNumber(count)}{stat.suffix}</p>
      <p className="text-[10px] xs:text-xs sm:text-sm text-gray-500 font-medium">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-white to-primary-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-3 xs:gap-4 lg:gap-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {statsData.map((stat, i) => (
            <div key={i} className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 0.15}s` }}>
              <StatCard stat={stat} isVisible={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
