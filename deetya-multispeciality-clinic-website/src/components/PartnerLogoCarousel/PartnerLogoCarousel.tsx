import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FaHeartbeat, FaHospital, FaMicroscope, FaFlask, FaSyringe, FaAmbulance } from 'react-icons/fa';
import { FiShield } from 'react-icons/fi';

const partners = [
  { icon: <FaHeartbeat className="w-8 h-8 xs:w-10 xs:h-10" />, name: 'Aarogya Health' },
  { icon: <FaHospital className="w-8 h-8 xs:w-10 xs:h-10" />, name: 'MediCare Plus' },
  { icon: <FaMicroscope className="w-8 h-8 xs:w-10 xs:h-10" />, name: 'BioDiagnostics' },
  { icon: <FaFlask className="w-8 h-8 xs:w-10 xs:h-10" />, name: 'PharmaCorp' },
  { icon: <FaSyringe className="w-8 h-8 xs:w-10 xs:h-10" />, name: 'VaccineCare' },
  { icon: <FaAmbulance className="w-8 h-8 xs:w-10 xs:h-10" />, name: 'QuickAid' },
  { icon: <FiShield className="w-8 h-8 xs:w-10 xs:h-10" />, name: 'SafeMed' },
  { icon: <FaHeartbeat className="w-8 h-8 xs:w-10 xs:h-10" />, name: 'LifeLine Labs' },
];

export default function PartnerLogoCarousel() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-14 lg:py-16 bg-gradient-to-b from-primary-50/40 to-white border-y border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs sm:text-sm font-semibold text-primary-500 uppercase tracking-[0.2em] mb-1.5">
            Trusted Partners
          </p>
          <p className="text-base sm:text-lg text-gray-600">
            We collaborate with leading healthcare providers
          </p>
        </div>

        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Always show grid on all screens */}
          <div className="grid grid-cols-2 xs:grid-cols-4 lg:grid-cols-8 gap-3 xs:gap-4 sm:gap-5 lg:gap-6">
            {partners.map((p, i) => (
              <div
                key={i}
                className="group flex flex-col items-center gap-1.5 xs:gap-2 p-2 xs:p-3 sm:p-4 rounded-lg xs:rounded-xl bg-white border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="text-primary-300 group-hover:text-primary-500 transition-colors duration-300 group-hover:scale-110 transition-transform text-sm xs:text-base sm:text-lg">
                  {p.icon}
                </div>
                <span className="text-[9px] xs:text-[10px] sm:text-xs text-gray-400 font-medium text-center group-hover:text-primary-600 transition-colors leading-tight">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
