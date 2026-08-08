import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { servicesData } from '../../data/servicesData';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

interface ServicesProps {
  limit?: number;
  showHeader?: boolean;
  showViewAll?: boolean;
  showImages?: boolean;
}

export default function Services({ limit, showHeader = true, showViewAll = false, showImages = false }: ServicesProps) {
  const { ref, isVisible } = useScrollAnimation();
  const displayed = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section id="services" ref={ref} className="py-16 xs:py-20 lg:py-28 bg-gradient-to-b from-white to-primary-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <SectionHeader
            badge="Our Services"
            title="Comprehensive "
            gradient="Medical Services"
            gradientClassName="text-gradient"
            subtitle="From routine checkups to specialized treatments, we offer a wide spectrum of healthcare services under one roof."
            subtitleClassName="text-gray-600 text-xs xs:text-sm sm:text-base lg:text-lg"
            className={`mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          />
        )}

        {showImages ? (
          /* Cards with images for services page */
          <div className="grid xs:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6 lg:gap-8">
            {displayed.map((s, i) => (
              <div
                key={i}
                className={`group bg-white rounded-xl xs:rounded-2xl border border-gray-100 hover:border-transparent shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Service Image — displayed in full (natural aspect ratio) */}
                <div className="relative overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />
                </div>
                {/* Content */}
                <div className="p-4 xs:p-5 sm:p-6 flex flex-col">
                  <h3 className="text-sm xs:text-base sm:text-lg font-bold text-primary-950 mb-2 group-hover:text-primary-700 transition-colors">{s.title}</h3>
                  <p className="text-[11px] xs:text-xs sm:text-sm text-gray-500 leading-relaxed mb-auto pb-3 xs:pb-4">{s.desc}</p>
                  <Link
                    to={`/services/${s.slug}`}
                    className="inline-flex items-center gap-1.5 px-3 xs:px-4 py-2.5 xs:py-3 rounded-lg bg-primary-50 text-primary-700 font-semibold text-[11px] xs:text-xs sm:text-sm border border-primary-100 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 group-hover:gap-2.5 transition-all w-fit"
                  >
                    <span>Learn More</span>
                    <FiArrowUpRight className="w-3 xs:w-3.5 h-3 xs:h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Compact cards for homepage */
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xs:gap-5 sm:gap-6">
            {displayed.map((s, i) => (
              <div
                key={i}
                className={`group relative p-5 xs:p-6 sm:p-7 bg-white rounded-xl xs:rounded-2xl border border-gray-100 hover:border-transparent shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {/* Hover gradient background that sweeps in */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                {/* Decorative corner accent */}
                <div className={`absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br ${s.gradient} rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 group-hover:scale-150`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-sm xs:text-base sm:text-lg font-bold text-primary-950 mb-2 group-hover:text-white transition-colors duration-300">{s.title}</h3>
                  <p className="text-[11px] xs:text-xs sm:text-sm text-gray-500 leading-relaxed group-hover:text-white/80 transition-colors duration-300 flex-1">{s.desc}</p>
                  <Link
                    to={`/services/${s.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-primary-50 text-primary-700 font-semibold text-[11px] xs:text-xs sm:text-sm border border-primary-100 group-hover:bg-white/15 group-hover:text-white group-hover:border-white/20 group-hover:gap-2.5 transition-all w-fit"
                  >
                    <span>Learn More</span>
                    <FiArrowUpRight className="w-3 xs:w-3.5 h-3 xs:h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {showViewAll && (
          <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Button to="/services">
              View All Services
              <FiArrowUpRight className="w-3.5 xs:w-4 h-3.5 xs:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
