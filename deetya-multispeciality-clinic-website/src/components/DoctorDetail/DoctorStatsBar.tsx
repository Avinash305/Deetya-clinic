import { FiAward, FiGlobe } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import type { DoctorDetail } from '../../data/doctorsData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCountUp } from '../../hooks/useCountUp';

function AnimatedStatCard({
  icon,
  label,
  value,
  suffix = '',
  color,
  countTo,
  startCounting,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  suffix?: string;
  color: string;
  countTo?: number;
  startCounting: boolean;
}) {
  const count = useCountUp(countTo || 0, 2000, startCounting);
  const isParsed = countTo !== undefined;

  return (
    <div className="group relative">
      <div className="flex items-center gap-3 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-white transition-all duration-500">
        <div
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}
        >
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-[8px] xs:text-[10px] font-medium text-gray-400 uppercase tracking-[0.1em]">
            {label}
          </p>
          <p className="text-sm sm:text-base lg:text-lg font-bold text-primary-950">
            {isParsed ? <span>{count}{suffix}</span> : value}
          </p>
        </div>
      </div>
    </div>
  );
}

/** Stats bar with animated counters, overlapping the hero. */
export default function DoctorStatsBar({ doctor }: { doctor: DoctorDetail }) {
  const { ref, isVisible: statsVis } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative -mt-6 sm:-mt-8 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl sm:rounded-3xl shadow-2xl shadow-primary-900/10 border border-white/50 p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-3xl mx-auto">
            <AnimatedStatCard
              icon={<FiAward className="w-5 h-5 sm:w-6 sm:h-6" />}
              label="Experience"
              value={doctor.experience}
              color="from-warm-500 to-warm-700"
              startCounting={statsVis}
            />
            <AnimatedStatCard
              icon={<FaGraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />}
              label="Qualifications"
              value={`${doctor.education.length} Degrees`}
              color="from-accent-500 to-accent-700"
              countTo={doctor.education.length}
              suffix="+"
              startCounting={statsVis}
            />
            <AnimatedStatCard
              icon={<FiGlobe className="w-5 h-5 sm:w-6 sm:h-6" />}
              label="Languages"
              value={doctor.languages.join(', ')}
              color="from-purple-500 to-purple-700"
              countTo={doctor.languages.length}
              suffix="+"
              startCounting={statsVis}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
