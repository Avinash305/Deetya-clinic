import { Link } from 'react-router-dom';
import { FiCheck, FiArrowRight, FiAward, FiUsers, FiHeart } from 'react-icons/fi';
import { FaUserMd } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { aboutFeatures, clinicInfo } from '../../data/siteData';

const aboutImage = '/images/about-clinic.webp';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="py-16 xs:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <div className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/10">
                <img src={aboutImage} alt="Doctor consulting a patient" className="w-full aspect-[3/2] object-cover" loading="lazy" />
              </div>

              <div className="absolute -bottom-1.5 -right-0.5 xs:-bottom-3 xs:-right-2 sm:-right-4 bg-white rounded-lg xs:rounded-xl shadow-md xs:shadow-lg p-1.5 xs:p-2 sm:p-3 border border-gray-100 z-10">
                <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
                  <div className="w-5 h-5 xs:w-7 xs:h-7 sm:w-9 sm:h-9 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center shadow-md shadow-accent-500/30 shrink-0">
                    <FaUserMd className="w-2.5 h-2.5 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] xs:text-sm sm:text-lg font-bold text-primary-950">5+</p>
                    <p className="text-[6px] xs:text-[8px] sm:text-[10px] text-gray-500 font-medium leading-tight">Specialist Doctors</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-1.5 -left-0.5 xs:-top-3 xs:-left-2 sm:-left-4 bg-white rounded-lg xs:rounded-xl shadow-md xs:shadow-lg p-1.5 xs:p-2 sm:p-3 border border-gray-100 z-10">
                <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
                  <div className="w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-warm-500 to-warm-600 rounded-lg flex items-center justify-center shrink-0">
                    <FiAward className="w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] xs:text-xs sm:text-base font-bold text-primary-950">15+ Yrs</p>
                    <p className="text-[6px] xs:text-[8px] sm:text-[10px] text-gray-500 leading-tight">Experience</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-1.5 -left-1.5 xs:-top-3 xs:-left-3 w-full h-full border-2 border-primary-200/50 rounded-xl xs:rounded-2xl sm:rounded-3xl -z-10" />
            </div>
          </div>

          {/* Right — Content */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full mb-5">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              <span className="text-xs sm:text-sm font-semibold text-primary-700">About Our Clinic</span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-4 xs:mb-6 leading-tight">
              Trusted Healthcare{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Since {clinicInfo.established}</span>
            </h2>

            <p className="text-sm xs:text-base sm:text-lg text-gray-600 leading-relaxed mb-5 xs:mb-6">
              {clinicInfo.fullName} has been a beacon of healthcare excellence since {clinicInfo.established}. We combine cutting-edge medical technology with compassionate care to deliver comprehensive solutions for you and your family.
            </p>

            {/* Quick stats row */}
            <div className="grid grid-cols-3 gap-1.5 xs:gap-3 mb-5 xs:mb-7">
              {[
                { icon: <FiHeart className="w-4 h-4 xs:w-5 xs:h-5" />, num: '500+', label: 'Happy Patients', color: 'text-primary-600 bg-primary-50' },
                { icon: <FiUsers className="w-4 h-4 xs:w-5 xs:h-5" />, num: '5+', label: 'Specialties', color: 'text-accent-600 bg-accent-50' },
                { icon: <FiAward className="w-4 h-4 xs:w-5 xs:h-5" />, num: '98%', label: 'Satisfaction', color: 'text-warm-600 bg-warm-50' },
              ].map((s, i) => (
                <div key={i} className={`flex flex-col items-center p-2 xs:p-3 rounded-lg xs:rounded-xl border border-gray-100 ${s.color}`}>
                  {s.icon}
                  <p className="text-base xs:text-lg sm:text-xl font-bold text-primary-950 mt-0.5 xs:mt-1">{s.num}</p>
                  <p className="text-[10px] xs:text-xs text-gray-500 font-medium">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Feature checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {aboutFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-accent-100 flex items-center justify-center shrink-0">
                    <FiCheck className="w-3 h-3 text-accent-600" />
                  </div>
                  <span className="text-xs xs:text-sm text-gray-600">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/about" className="group inline-flex items-center justify-center gap-2 px-5 xs:px-6 py-3 bg-primary-700 text-white font-semibold rounded-lg xs:rounded-xl hover:bg-primary-800 shadow-lg shadow-primary-700/25 transition-all hover:-translate-y-0.5 text-xs xs:text-sm">
                Learn More About Us
                <FiArrowRight className="w-3.5 xs:w-4 h-3.5 xs:h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
              <Link to="/services" className="group inline-flex items-center justify-center gap-2 px-5 xs:px-6 py-3 border-2 border-primary-200 text-primary-700 font-semibold rounded-lg xs:rounded-xl hover:bg-primary-50 hover:border-primary-300 transition-all text-xs xs:text-sm">
                Our Services
                <FiArrowRight className="w-3.5 xs:w-4 h-3.5 xs:h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
