import { FaQuoteLeft } from 'react-icons/fa';
import { FiHeart, FiStar } from 'react-icons/fi';
import type { DoctorDetail } from '../../data/doctorsData';
import DoctorSectionHeader from './DoctorSectionHeader';
import GlassCard from './DoctorGlassCard';

interface DoctorPhilosophyProps {
  doctor: DoctorDetail;
  firstName: string;
}

/** "A More Thoughtful Approach to Care" — the doctor's care-philosophy quote card. */
export default function DoctorPhilosophy({ doctor, firstName }: DoctorPhilosophyProps) {
  if (!doctor.approach) return null;

  return (
    <section id="philosophy">
      <DoctorSectionHeader
        icon={<FiHeart className="w-5 h-5 sm:w-6 sm:h-6" />}
        iconBg="from-rose-500 to-rose-700"
        title="A More Thoughtful Approach to Care"
        subtitle={`${firstName}'s care philosophy`}
      />

      <GlassCard className="!p-5 sm:!p-8 lg:!p-10 relative overflow-hidden !border-rose-100 !shadow-rose-100/30">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 bg-rose-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-rose-200/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        {/* Large quote icon */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-rose-200/40">
          <FaQuoteLeft className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
        </div>

        <div className="relative z-10">
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] italic font-serif">
            &ldquo;{doctor.approach}&rdquo;
          </p>
        </div>

        {/* Doctor signature */}
        <div className="relative z-10 mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-rose-200/50 flex items-center gap-3 sm:gap-4">
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${doctor.color} flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg`}
          >
            {doctor.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
          </div>
          <div>
            <p className="text-sm sm:text-base font-bold text-primary-950">{doctor.name}</p>
            <p className="text-[10px] sm:text-xs text-gray-500">{doctor.specialization}</p>
          </div>
          <div className="ml-auto hidden sm:block">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <FiStar key={s} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
