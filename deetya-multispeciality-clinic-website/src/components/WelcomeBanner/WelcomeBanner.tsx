import { FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { clinicInfo } from '../../data/siteData';
import { mapsHref, telHref } from '../../utils/links';

export default function WelcomeBanner() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-12 lg:py-16 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="grid xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 lg:gap-4">
          {/* Phone */}
          <a href={telHref()} className="group flex items-center gap-3 xs:gap-4 p-3 xs:p-4 rounded-xl xs:rounded-2xl bg-white/8 border border-white/10 hover:bg-white/15 transition-all">
            <div className="w-10 h-10 xs:w-12 xs:h-12 bg-white/15 rounded-lg xs:rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <FiPhone className="w-4 h-4 xs:w-5 xs:h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] xs:text-xs text-white/50 font-medium mb-0.5">Call Us</p>
              <p className="font-bold text-xs xs:text-sm truncate">{clinicInfo.phone}</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a href={`https://wa.me/${clinicInfo.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 xs:gap-4 p-3 xs:p-4 rounded-xl xs:rounded-2xl bg-white/8 border border-white/10 hover:bg-white/15 transition-all">
            <div className="w-10 h-10 xs:w-12 xs:h-12 bg-green-500/20 rounded-lg xs:rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <FaWhatsapp className="w-4 h-4 xs:w-5 xs:h-5 text-green-300" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] xs:text-xs text-white/50 font-medium mb-0.5">WhatsApp</p>
              <p className="font-bold text-xs xs:text-sm">Chat with Us</p>
            </div>
          </a>

          {/* Location */}
          <a
            href={mapsHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 xs:gap-4 p-3 xs:p-4 rounded-xl xs:rounded-2xl bg-white/8 border border-white/10 hover:bg-white/15 transition-all"
          >
            <div className="w-10 h-10 xs:w-12 xs:h-12 bg-white/15 rounded-lg xs:rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <FiMapPin className="w-4 h-4 xs:w-5 xs:h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] xs:text-xs text-white/50 font-medium mb-0.5">Visit Us</p>
              <p className="font-bold text-xs xs:text-sm truncate group-hover:text-accent-200 transition-colors">{clinicInfo.shortAddress}</p>
            </div>
          </a>

          {/* Hours */}
          <div className="flex items-center gap-3 xs:gap-4 p-3 xs:p-4 rounded-xl xs:rounded-2xl bg-white/8 border border-white/10">
            <div className="w-10 h-10 xs:w-12 xs:h-12 bg-white/15 rounded-lg xs:rounded-xl flex items-center justify-center shrink-0">
              <FiClock className="w-4 h-4 xs:w-5 xs:h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] xs:text-xs text-white/50 font-medium mb-0.5">Working Hours</p>
              <p className="font-bold text-xs xs:text-sm truncate">Mon-Sat 7AM-11PM</p>
              <p className="font-bold text-xs xs:text-sm text-accent-300 truncate">Sun 7:30AM-1:30PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
