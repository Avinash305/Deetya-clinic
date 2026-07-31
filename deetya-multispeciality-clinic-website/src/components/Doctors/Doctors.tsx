import { Link } from 'react-router-dom';
import { FiPhone, FiAward, FiCalendar, FiArrowUpRight } from 'react-icons/fi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { doctorsData } from '../../data/siteData';

interface DoctorsProps {
  limit?: number;
  showHeader?: boolean;
  showViewAll?: boolean;
}

export default function Doctors({ limit, showHeader = true, showViewAll = false }: DoctorsProps) {
  const { ref, isVisible } = useScrollAnimation();
  const displayed = limit ? doctorsData.slice(0, limit) : doctorsData;

  return (
    <section id="doctors" ref={ref} className="py-16 xs:py-20 lg:py-28 bg-gradient-to-b from-white to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-50 border border-accent-200 rounded-full mb-4">
              <span className="w-2 h-2 bg-accent-500 rounded-full" />
              <span className="text-xs sm:text-sm font-semibold text-accent-700">Our Doctors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-4">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Expert Team</span>
            </h2>
            <p className="text-gray-600 text-sm xs:text-base sm:text-lg">Our team of highly qualified and experienced specialists are dedicated to providing the best care for you and your family.</p>
          </div>
        )}          <div className={`grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-6`}>
          {displayed.map((doc, i) => (
            <div
              key={i}
              className={`group bg-white rounded-xl xs:rounded-2xl border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex flex-col">
                <Link to={`/doctors/${doc.slug}`} className="block">
                  <div className="relative w-full aspect-[3/4] xs:aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-primary-50">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex items-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md z-10">
                      <FiAward className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-warm-500" />
                      <span className="text-[10px] sm:text-xs font-bold text-primary-900">{doc.experience}</span>
                    </div>
                  </div>
                  <div className="w-full p-3 xs:p-4 sm:p-5">
                    <h3 className="text-sm xs:text-base sm:text-lg font-bold text-primary-950 mb-0.5 leading-tight">{doc.name}</h3>
                    <p className={`text-[11px] xs:text-xs sm:text-sm font-semibold bg-gradient-to-r ${doc.color} bg-clip-text text-transparent mb-1.5 xs:mb-2 sm:mb-3`}>{doc.specialization}</p>
                    <div className="flex items-center gap-1.5 text-[11px] xs:text-xs sm:text-sm text-gray-500">
                      <FiPhone className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                      <span className="truncate">{doc.phone}</span>
                    </div>
                  </div>
                </Link>
                <div className="flex gap-1.5 xs:gap-2 px-3 xs:px-4 sm:px-5 pb-3 xs:pb-4 sm:pb-5">
                  <a href={`tel:${doc.phone.replace(/\s/g, '')}`} className={`flex-1 flex items-center justify-center gap-1 px-2 xs:px-2.5 py-2.5 xs:py-3 min-h-[44px] bg-gradient-to-r ${doc.color} text-white text-[10px] xs:text-xs font-semibold rounded-lg hover:opacity-90 transition-opacity`}>
                    <FiPhone className="w-2.5 h-2.5 xs:w-3 xs:h-3" />Call
                  </a>
                  <Link to="/contact" className="flex-1 flex items-center justify-center gap-1 px-2 xs:px-2.5 py-2.5 xs:py-3 min-h-[44px] border-2 border-gray-200 text-gray-700 text-[10px] xs:text-xs font-semibold rounded-lg hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50 transition-all">
                    <FiCalendar className="w-2.5 h-2.5 xs:w-3 xs:h-3" />Book
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showViewAll && (
          <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Link to="/about" className="group inline-flex items-center justify-center gap-2 px-5 xs:px-8 py-3 xs:py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg xs:rounded-xl shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-0.5 transition-all text-xs xs:text-sm">
              View All Doctors
              <FiArrowUpRight className="w-3.5 xs:w-4 h-3.5 xs:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
