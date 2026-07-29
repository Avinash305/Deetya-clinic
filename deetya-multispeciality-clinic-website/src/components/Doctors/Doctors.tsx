import { Link } from 'react-router-dom';
import { FiPhone, FiAward, FiCalendar } from 'react-icons/fi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { doctorsData } from '../../data/siteData';

interface DoctorsProps {
  limit?: number;
  showHeader?: boolean;
}

export default function Doctors({ limit, showHeader = true }: DoctorsProps) {
  const { ref, isVisible } = useScrollAnimation();
  const displayed = limit ? doctorsData.slice(0, limit) : doctorsData;

  return (
    <section id="doctors" ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-white to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-50 border border-accent-200 rounded-full mb-4">
              <span className="w-2 h-2 bg-accent-500 rounded-full" />
              <span className="text-sm font-semibold text-accent-700">Our Doctors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-4">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Expert Team</span>
            </h2>
            <p className="text-gray-600 text-lg">Our team of highly qualified and experienced specialists are dedicated to providing the best care for you and your family.</p>
          </div>
        )}          <div className={`grid xs:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-6`}>
          {displayed.map((doc, i) => (
            <div key={i} className={`group bg-white rounded-2xl border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex flex-col sm:flex-row">
                {/* Left Half - Photo */}
                <div className="relative sm:w-1/2 h-48 sm:h-auto overflow-hidden bg-white">
                  <div
                    className="absolute inset-0 bg-white"
                    style={{
                      backgroundImage: `url(${doc.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    role="img"
                    aria-label={doc.name}
                  />
                  {/* Experience badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md">
                    <FiAward className="w-3 h-3 text-warm-500" />
                    <span className="text-xs font-bold text-primary-900">{doc.experience}</span>
                  </div>
                </div>
                {/* Right Half - Details */}
                <div className="sm:w-1/2 p-4 sm:p-5 flex flex-col justify-center">
                  <h3 className="text-base sm:text-lg font-bold text-primary-950 mb-0.5">{doc.name}</h3>
                  <p className={`text-xs sm:text-sm font-semibold bg-gradient-to-r ${doc.color} bg-clip-text text-transparent mb-2 sm:mb-3`}>{doc.specialization}</p>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                    <FiPhone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="truncate">{doc.phone}</span>
                  </div>
                  <div className="flex gap-2">
                    <a href={`tel:${doc.phone.replace(/\s/g, '')}`} className={`flex-1 flex items-center justify-center gap-1.5 px-2.5 py-2 bg-gradient-to-r ${doc.color} text-white text-xs font-semibold rounded-lg hover:opacity-90 transition-opacity`}>
                      <FiPhone className="w-3 h-3" />Call
                    </a>
                    <Link to="/contact" className="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-2 border-2 border-gray-200 text-gray-700 text-xs font-semibold rounded-lg hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50 transition-all">
                      <FiCalendar className="w-3 h-3" />Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
