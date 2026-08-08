import { FaGraduationCap } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import DoctorSectionHeader from './DoctorSectionHeader';
import GlassCard from './DoctorGlassCard';

/** Qualifications & Education — timeline of the doctor's academic credentials. */
export default function DoctorEducation({ education }: { education: string[] }) {
  return (
    <section id="qualifications">
      <DoctorSectionHeader
        icon={<FaGraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />}
        iconBg="from-primary-500 to-primary-700"
        title="Qualifications & Education"
        subtitle="Academic credentials and professional training"
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[23px] sm:left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-accent-300 to-warm-300 rounded-full" />
        <div className="space-y-4 sm:space-y-5">
          {education.map((edu, i) => (
            <div key={i} className="relative flex items-start gap-4 sm:gap-5 group">
              {/* Timeline dot */}
              <div className="relative z-10 shrink-0">
                <div className="w-[46px] h-[46px] sm:w-[54px] sm:h-[54px] rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white shadow-xl shadow-primary-500/20 ring-[5px] ring-white group-hover:scale-110 group-hover:ring-primary-100 transition-all duration-400">
                  <FiCheck className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
                </div>
              </div>
              {/* Content */}
              <GlassCard className="flex-1 !p-3 sm:!p-4 lg:!p-5">
                <span className="inline-block text-[9px] sm:text-xs font-bold text-primary-600 bg-primary-50 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full mb-2">
                  {i === 0 ? 'Primary Qualification' : i === 1 ? 'Specialization' : 'Fellowship'}
                </span>
                <p className="text-sm sm:text-base font-semibold text-primary-950">{edu}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
