import { FaStethoscope } from 'react-icons/fa';
import { FiCheck, FiActivity, FiHeart, FiMonitor, FiShield, FiLayers } from 'react-icons/fi';
import DoctorSectionHeader from './DoctorSectionHeader';
import GlassCard from './DoctorGlassCard';

/* Icons cycled through the expertise cards (kept at module scope so they are
   not re-created for every card on every render). */
const expertiseIcons = [
  <FaStethoscope key="s" className="w-5 h-5 sm:w-6 sm:h-6" />,
  <FiHeart key="h" className="w-5 h-5 sm:w-6 sm:h-6" />,
  <FiMonitor key="m" className="w-5 h-5 sm:w-6 sm:h-6" />,
  <FiShield key="sh" className="w-5 h-5 sm:w-6 sm:h-6" />,
  <FiLayers key="l" className="w-5 h-5 sm:w-6 sm:h-6" />,
  <FiActivity key="a" className="w-5 h-5 sm:w-6 sm:h-6" />,
];

interface DoctorServicesProps {
  services: string[];
  color: string;
}

/** Services Provided + Areas of Expertise — both map the same service list. */
export default function DoctorServices({ services, color }: DoctorServicesProps) {
  return (
    <>
      {/* ── SERVICES PROVIDED ── */}
      <section id="services">
        <DoctorSectionHeader
          icon={<FaStethoscope className="w-5 h-5 sm:w-6 sm:h-6" />}
          iconBg={color}
          title="Services Provided"
          subtitle="Treatments and procedures offered"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {services.map((svc, i) => (
            <GlassCard key={i} className="!p-3 sm:!p-4 flex items-start gap-3 group">
              <div className="mt-0.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent-100 flex items-center justify-center shrink-0 group-hover:bg-accent-200 group-hover:scale-110 transition-all duration-300">
                <FiCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-600" />
              </div>
              <span className="text-xs sm:text-sm text-gray-600 group-hover:text-primary-950 transition-colors font-medium">
                {svc}
              </span>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ── AREAS OF EXPERTISE ── */}
      <section id="expertise">
        <DoctorSectionHeader
          icon={<FiActivity className="w-5 h-5 sm:w-6 sm:h-6" />}
          iconBg={color}
          title="Areas of Expertise"
          subtitle="Special clinical focus and specialized services"
        />

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {services.map((svc, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500"
            >
              {/* Gradient border effect on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${color} rounded-xl sm:rounded-2xl p-[2px]`}>
                <div className="w-full h-full rounded-xl sm:rounded-2xl bg-white" />
              </div>
              <div className="relative z-10 p-4 sm:p-5">
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-md mb-3 sm:mb-4 group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}
                  role="img"
                  aria-label={`Expertise icon for ${svc}`}
                >
                  {expertiseIcons[i % expertiseIcons.length]}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-primary-950 mb-1.5 group-hover:text-primary-700 transition-colors">
                  {svc}
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-400 leading-relaxed line-clamp-2">
                  Specialized care and treatment for {svc.toLowerCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
