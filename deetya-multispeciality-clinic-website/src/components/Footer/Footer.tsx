import { Link } from 'react-router-dom';
import { FaHeartbeat } from 'react-icons/fa';
import { FiArrowUp, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { clinicInfo, socialLinks, footerQuickLinks, servicesData } from '../../data/siteData';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-primary-950 text-white relative">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center shadow-xl hover:-translate-y-1 transition-transform"
          aria-label="Back to top"
        >
          <FiArrowUp className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 xs:pt-20 pb-8">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 xs:gap-8 mb-10 xs:mb-12">
          {/* About */}
          <div className="xs:col-span-2 sm:col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <FaHeartbeat className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">{clinicInfo.name}</p>
                <p className="text-xs text-primary-400 tracking-[0.2em] uppercase">{clinicInfo.tagline}</p>
              </div>
            </Link>
            <p className="text-primary-300 text-sm leading-relaxed mb-5">
              A trusted name in healthcare excellence since {clinicInfo.established}. We provide comprehensive medical services with compassion, expertise, and cutting-edge technology.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-primary-300 hover:bg-primary-600 hover:text-white transition-all duration-200" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerQuickLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-primary-300 hover:text-white text-sm transition-colors flex items-center gap-2.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600 group-hover:bg-accent-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {servicesData.slice(0, 8).map((s, i) => (
                <li key={i}>
                  <Link to="/services" className="text-primary-300 hover:text-white text-sm transition-colors flex items-center gap-2.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600 group-hover:bg-accent-400 transition-colors" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-5">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMapPin className="w-4 h-4 text-accent-400 mt-0.5 shrink-0" />
                <p className="text-primary-300 text-sm">{clinicInfo.address}<br />{clinicInfo.city}</p>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="w-4 h-4 text-accent-400 shrink-0" />
                <a href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`} className="text-primary-300 hover:text-white text-sm transition-colors">{clinicInfo.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="w-4 h-4 text-accent-400 shrink-0" />
                <a href={`mailto:${clinicInfo.email}`} className="text-primary-300 hover:text-white text-sm transition-colors">{clinicInfo.email}</a>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <p className="text-xs text-red-300 font-semibold mb-1">EMERGENCY</p>
              <a href={`tel:${clinicInfo.emergency.replace(/\s/g, '')}`} className="text-lg font-bold text-red-400 hover:text-red-300 transition-colors">{clinicInfo.emergency}</a>
            </div>
          </div>
        </div>          <div className="pt-6 xs:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 xs:gap-4">
          <p className="text-primary-400 text-sm text-center sm:text-left">© {new Date().getFullYear()} {clinicInfo.fullName}. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-primary-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
