import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { servicesData } from '../../data/siteData';

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
    <section id="services" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full mb-4">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              <span className="text-sm font-semibold text-primary-700">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-4">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Medical Services</span>
            </h2>
            <p className="text-gray-600 text-lg">From routine checkups to specialized treatments, we offer a wide spectrum of healthcare services under one roof.</p>
          </div>
        )}

        {showImages ? (
          /* Cards with images for services page */
          <div className={`grid xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6`}>
            {displayed.map((s, i) => (
              <div key={i} className={`group bg-white rounded-xl xs:rounded-2xl border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 0.1}s` }}>
                {/* Service Image */}
                <div className="relative h-36 xs:h-44 sm:h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className={`absolute top-4 left-4 w-11 h-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white shadow-lg`}>
                    {s.icon}
                  </div>
                </div>
                {/* Content */}
                <div className="p-4 xs:p-5 sm:p-6 flex flex-col">
                  <h3 className="text-base xs:text-lg font-bold text-primary-950 mb-1.5 xs:mb-2">{s.title}</h3>
                  <p className="text-xs xs:text-sm text-gray-500 leading-relaxed mb-auto pb-3 xs:pb-4">{s.desc}</p>
                  <Link
                    to={`/services/${s.slug}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 font-semibold text-xs xs:text-sm border border-primary-100 group-hover:bg-primary-100 group-hover:border-primary-200 group-hover:gap-2.5 transition-all w-fit"
                  >
                    <span>Learn More</span>
                    <FiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Compact cards for homepage */
          <div className={`grid xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xs:gap-4 sm:gap-5`}>
            {displayed.map((s, i) => (
              <div key={i} className={`group relative p-4 xs:p-5 sm:p-6 bg-white rounded-xl xs:rounded-2xl border border-gray-100 hover:border-transparent shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 mb-3 xs:mb-4 rounded-lg xs:rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white text-base xs:text-lg group-hover:bg-white/20 transition-colors duration-300`}>{s.icon}</div>
                  <h3 className="text-sm xs:text-base sm:text-lg font-bold text-primary-950 mb-1.5 xs:mb-2 group-hover:text-white transition-colors">{s.title}</h3>
                  <p className="text-xs xs:text-sm text-gray-500 leading-relaxed group-hover:text-white/80 transition-colors flex-1">{s.desc}</p>
                  <Link
                    to={`/services/${s.slug}`}
                    className="mt-3 xs:mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 font-semibold text-xs xs:text-sm border border-primary-100 group-hover:bg-white/15 group-hover:text-white group-hover:border-white/20 group-hover:gap-2.5 transition-all w-fit"
                  >
                    <span>Learn More</span>
                    <FiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {showViewAll && (
          <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Link to="/services" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-0.5 transition-all">
              View All Services
              <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
