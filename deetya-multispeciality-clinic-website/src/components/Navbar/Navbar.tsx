import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { navLinks, clinicInfo } from '../../data/siteData';
import { telHref } from '../../utils/links';

export default function Navbar({ topBarHidden }: { topBarHidden: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed inset-x-0 z-[60] bg-white shadow-md transition-all duration-300 ${
        topBarHidden ? 'top-0' : 'top-8 sm:top-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo — clicking it always returns to the top of the home page:
              when already on /, the route doesn't change so ScrollToTop won't
              fire; scroll manually in that case. */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 group shrink-0"
          >
            <div className="h-8 sm:h-10 lg:h-12 rounded-lg sm:rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300 shrink-0 flex items-center bg-white shadow-md ring-1 ring-gray-100">
              <img src="/images/logo.webp" alt="Deetya Clinic" width={475} height={237} className="h-full w-auto object-contain px-1 sm:px-1.5 lg:px-2" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs sm:text-sm lg:text-xl font-extrabold tracking-tight text-primary-950">
                {clinicInfo.name}
              </span>
              <span className="text-[7px] xs:text-[8px] sm:text-[9px] lg:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary-500 leading-tight">
                {clinicInfo.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop nav — from md up (tablets get the full bar; small screens get the menu) */}
          <div className="hidden md:flex items-center gap-0.5 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`relative inline-flex items-center px-2 lg:px-4 py-1.5 lg:py-2 min-h-[44px] text-[11px] lg:text-sm font-medium rounded-lg transition-all ${
                  isActive(link.path)
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-3 lg:w-5 h-0.5 rounded-full bg-primary-600" />
                )}
              </Link>
            ))}

            <div className="flex items-center gap-1.5 ml-1 lg:ml-3">
              <a href={telHref()}
                className="flex items-center gap-1 lg:gap-2 px-2 lg:px-4 py-1.5 lg:py-2 min-h-[44px] text-[11px] lg:text-sm font-semibold rounded-lg lg:rounded-xl transition-all text-primary-700 border border-primary-200 hover:bg-primary-50">
                <FiPhone className="w-3 lg:w-4 h-3 lg:h-4" />
                <span className="hidden lg:inline">Call Now</span>
              </a>
              <Link to="/contact"
                className="inline-flex items-center px-2.5 lg:px-5 py-1.5 lg:py-2 min-h-[44px] text-[11px] lg:text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg lg:rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg transition-all whitespace-nowrap">
                <span className="lg:hidden">Book</span>
                <span className="hidden lg:inline">Book Appointment</span>
              </Link>
            </div>
          </div>

          {/* Mobile/tablet-small: Hamburger only */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 min-w-[44px] min-h-[44px] rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="w-5 h-5 text-gray-700" /> : <FiMenu className="w-5 h-5 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/tablet-small dropdown */}
      <div className={`md:hidden overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-white border-t border-gray-100 px-4 pb-4 pt-2 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.path}
              className={`block px-4 py-3 rounded-lg font-medium text-xs xs:text-sm transition-colors ${
                isActive(link.path)
                  ? 'text-primary-700 bg-primary-50'
                  : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50'
              }`}>
              {link.label}
            </Link>
          ))}
          <div className="pt-3 mt-3 border-t border-gray-100 space-y-2">
            <a href={telHref()}
              className="flex items-center justify-center gap-2 w-full py-3 text-xs xs:text-sm font-semibold text-primary-700 border border-primary-200 rounded-lg hover:bg-primary-50 transition-colors">
              <FiPhone className="w-4 h-4" />
              {clinicInfo.phone}
            </a>
            <Link to="/contact"
              className="block text-center w-full py-3 text-xs xs:text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg hover:from-primary-700 hover:to-primary-800 shadow-sm transition-all">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
