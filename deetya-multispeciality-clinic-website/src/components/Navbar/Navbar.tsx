import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { FaHeartbeat } from 'react-icons/fa';
import { navLinks, clinicInfo } from '../../data/siteData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-primary-900/5'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg shadow-primary-600/20">
              <FaHeartbeat className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-extrabold text-primary-900 tracking-tight leading-tight">{clinicInfo.name}</span>
              <span className="text-[10px] lg:text-xs text-primary-600 font-semibold tracking-[0.2em] uppercase leading-tight">{clinicInfo.tagline}</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50/60'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-primary-700 border border-primary-200 rounded-xl hover:bg-primary-50 hover:border-primary-300 transition-all duration-200"
            >
              <FiPhone className="w-4 h-4" />
              Call Now
            </a>
            <Link
              to="/contact"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 xs:p-2.5 rounded-lg xs:rounded-xl text-gray-700 hover:bg-gray-100 transition-colors active:scale-95"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5 xs:w-6 xs:h-6">
              <FiMenu className={`w-5 h-5 xs:w-6 xs:h-6 absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <FiX className={`w-5 h-5 xs:w-6 xs:h-6 absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-3 xs:px-4 pb-4 xs:pb-5 pt-1 space-y-0.5 xs:space-y-1 bg-white border-t border-gray-100 shadow-xl shadow-primary-900/5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`block px-3 xs:px-4 py-2.5 xs:py-3 rounded-lg xs:rounded-xl font-medium transition-colors duration-200 text-sm xs:text-base ${
                isActive(link.path)
                  ? 'text-primary-700 bg-primary-50'
                  : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 xs:pt-3 flex flex-col gap-2 xs:gap-2.5">
            <a
              href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 px-4 py-2.5 xs:py-3 text-xs xs:text-sm font-semibold text-primary-700 border border-primary-200 rounded-lg xs:rounded-xl"
            >
              <FiPhone className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
              Call Now
            </a>
            <Link
              to="/contact"
              className="text-center px-4 py-2.5 xs:py-3 text-xs xs:text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg xs:rounded-xl shadow-lg shadow-primary-600/20"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
