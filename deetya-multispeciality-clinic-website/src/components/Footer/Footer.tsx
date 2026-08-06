import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiArrowUp, FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { clinicInfo, footerQuickLinks, footerServices } from '../../data/siteData';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-primary-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-800/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />

      {/* Back to top button */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center shadow-xl shadow-primary-600/30 hover:-translate-y-1 hover:shadow-primary-600/50 transition-all duration-300"
          aria-label="Back to top"
        >
          <FiArrowUp className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 xs:pt-20 sm:pt-24 pb-8">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 xs:gap-8 lg:gap-12 mb-8 xs:mb-10 lg:mb-12">
          {/* About */}
          <div className="xs:col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4 sm:mb-5 group">
              <div className="w-10 sm:w-12 h-9 sm:h-11 rounded-lg sm:rounded-xl overflow-hidden group-hover:scale-105 transition-transform shadow-lg shadow-primary-600/20 shrink-0 bg-primary-800 flex items-center justify-center p-0.5 sm:p-1">
                <img src="/images/logo.webp" alt="Deetya Clinic" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-bold text-base sm:text-lg leading-tight">{clinicInfo.name}</p>
                <p className="text-[10px] sm:text-xs text-primary-400 tracking-[0.2em] uppercase">{clinicInfo.tagline}</p>
              </div>
            </Link>
            <p className="text-primary-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              A trusted name in healthcare excellence since {clinicInfo.established}. We provide comprehensive medical services with compassion, expertise, and cutting-edge technology under one roof.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <span className="w-11 h-11 rounded-lg bg-white/8 flex items-center justify-center text-primary-300 cursor-default" aria-label="Facebook">
                <FaFacebookF className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </span>
              <span className="w-11 h-11 rounded-lg bg-white/8 flex items-center justify-center text-primary-300 cursor-default" aria-label="Instagram">
                <FaInstagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </span>
              <a href={`https://wa.me/${clinicInfo.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-lg bg-white/8 flex items-center justify-center text-primary-300 hover:bg-green-600 hover:text-white transition-all duration-200" aria-label="WhatsApp">
                <FaWhatsapp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm sm:text-base mb-3 sm:mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 sm:-bottom-1.5 w-6 sm:w-8 h-0.5 bg-accent-500 rounded-full" />
            </h4>
            <ul className="space-y-0 mt-4 sm:mt-5">
              {footerQuickLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-primary-300 hover:text-white text-[11px] xs:text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary-600 group-hover:bg-accent-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm sm:text-base mb-3 sm:mb-5 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 sm:-bottom-1.5 w-6 sm:w-8 h-0.5 bg-accent-500 rounded-full" />
            </h4>
            <ul className="space-y-0 mt-4 sm:mt-5">
              {footerServices.map((s, i) => (
                <li key={i}>
                  <Link to="/services" className="text-primary-300 hover:text-white text-[11px] xs:text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary-600 group-hover:bg-accent-400 transition-colors" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm sm:text-base mb-3 sm:mb-5 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 sm:-bottom-1.5 w-6 sm:w-8 h-0.5 bg-accent-500 rounded-full" />
            </h4>
            <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent-500/15 flex items-center justify-center shrink-0 mt-0.5">
                  <FiMapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-primary-300 text-xs sm:text-sm">{clinicInfo.address}</p>
                  <p className="text-primary-400 text-[10px] sm:text-xs mt-0.5">{clinicInfo.city}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent-500/15 flex items-center justify-center shrink-0">
                  <FiPhone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-400" />
                </div>
                <div className="min-w-0 space-y-0">
                  <a href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`} className="text-primary-300 hover:text-white text-xs sm:text-sm transition-colors block truncate">{clinicInfo.phone}</a>
                  <a href={`tel:${clinicInfo.phoneAlt.replace(/\s/g, '')}`} className="text-primary-300 hover:text-white text-xs sm:text-sm transition-colors block truncate">{clinicInfo.phoneAlt}</a>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent-500/15 flex items-center justify-center shrink-0">
                  <FiMail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-400" />
                </div>
                <a href={`mailto:${clinicInfo.email}`} className="text-primary-300 hover:text-white text-xs sm:text-sm transition-colors truncate">{clinicInfo.email}</a>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent-500/15 flex items-center justify-center shrink-0">
                  <FiClock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-primary-300 text-xs sm:text-sm">{clinicInfo.workingHours.weekday}</p>
                  <p className="text-primary-400 text-[10px] sm:text-xs">{clinicInfo.workingHours.weekend}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-red-500/10 border border-red-500/20">
              <p className="text-[10px] sm:text-xs text-red-300 font-semibold mb-1.5 flex items-center gap-1.5 sm:gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full animate-pulse" />
                EMERGENCY
              </p>
              <div className="space-y-0.5">
                <a href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`} className="block text-base sm:text-lg font-bold text-red-400 hover:text-red-300 transition-colors">{clinicInfo.phone}</a>
                <a href={`tel:${clinicInfo.phoneAlt.replace(/\s/g, '')}`} className="block text-base sm:text-lg font-bold text-red-400 hover:text-red-300 transition-colors">{clinicInfo.phoneAlt}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 xs:pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 xs:gap-4">
          <p className="text-primary-400 text-[11px] xs:text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} {clinicInfo.fullName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] xs:text-xs sm:text-sm text-primary-400">
            <span className="text-primary-400 cursor-default">Privacy Policy</span>
            <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-primary-700" />
            <span className="text-primary-400 cursor-default">Terms of Use</span>
            <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-primary-700" />
            <span className="text-primary-400 cursor-default">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
