import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiHeart, FiCalendar } from 'react-icons/fi';
import { FaTruck, FaFlask, FaStar } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { whyChoosePackagesData } from '../../data/siteData';

const checklist = [
  { text: 'NABL-accredited in-house laboratory', icon: <FaFlask className="w-3.5 h-3.5" /> },
  { text: 'Free home sample collection, 6 AM – 10 PM', icon: <FaTruck className="w-3.5 h-3.5" /> },
  { text: 'Same-day digital reports in 6–12 hours', icon: <FiCheckCircle className="w-3.5 h-3.5" /> },
];

export default function WhyChoosePackages() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-primary-50/60 via-white to-accent-50/40 py-10 xs:py-14 lg:py-20"
    >
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary-100/50 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-accent-100/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {/* ── Left: content ── */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold uppercase tracking-widest">
              <FiHeart className="w-3.5 h-3.5" /> Full Body Checkup
            </span>

            <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 leading-tight">
              Full Body Checkups{' '}
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-warm-500 bg-clip-text text-transparent animate-gradient-shift">
                in Bangalore
              </span>
            </h2>

            <p className="mt-4 text-gray-600 text-sm xs:text-base lg:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Experience hassle-free testing by booking our comprehensive full body checkup near you — all tests,
              one visit, with expert guidance on your results.
            </p>

            {/* checklist */}
            <ul className="mt-6 space-y-2.5 max-w-md mx-auto lg:mx-0 text-left">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center">
                    {item.icon}
                  </span>
                  <span className="text-xs xs:text-sm font-medium text-gray-600">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Link
                to="/health-packages"
                className="group inline-flex items-center justify-center gap-2 px-5 xs:px-7 py-3 xs:py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-0.5 transition-all text-xs xs:text-sm"
              >
                <FiCalendar className="w-4 h-4" />
                Explore Packages
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 xs:px-7 py-3 xs:py-3.5 border-2 border-primary-200 text-primary-700 font-bold rounded-xl hover:bg-primary-50 hover:border-primary-300 transition-all text-xs xs:text-sm"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          {/* ── Right: real photo ── */}
          <div className="relative">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* decorative frame */}
              <div className="absolute -top-3 -left-3 xs:-top-4 xs:-left-4 w-full h-full border-2 border-accent-200/60 rounded-3xl -z-10" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/15 ring-4 ring-white">
                <img
                  src="/images/lab-doctor-microscope.webp"
                  alt="Doctor examining samples under a microscope in the laboratory"
                  className="w-full aspect-[3/2] object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent" />
                {/* photo credit (CC BY 2.0 — Wikimedia Commons) */}
                <p className="absolute bottom-1.5 right-2.5 text-[9px] text-white/75 drop-shadow leading-none">
                  Photo: Nenad Stojkovic (CC BY 2.0)
                </p>
              </div>

              {/* floating badge: rating */}
              <div className="absolute -top-4 -right-2 xs:-right-4 bg-white rounded-2xl shadow-xl shadow-primary-900/10 border border-gray-100 px-3 xs:px-4 py-2.5 xs:py-3 flex items-center gap-2.5">
                <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-xl bg-gradient-to-br from-warm-500 to-warm-600 text-white flex items-center justify-center shadow-md">
                  <FaStar className="w-4 xs:w-5 h-4 xs:h-5" />
                </div>
                <div>
                  <p className="text-[10px] xs:text-xs font-bold text-primary-950 leading-tight">500+ Happy Patients</p>
                  <p className="text-[9px] xs:text-[10px] text-gray-500">Trusted checkups in JP Nagar</p>
                </div>
              </div>

              {/* floating badge: home collection */}
              <div className="absolute -bottom-4 -left-2 xs:-left-4 bg-white rounded-2xl shadow-xl shadow-primary-900/10 border border-gray-100 px-3 xs:px-4 py-2.5 xs:py-3 flex items-center gap-2.5">
                <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 text-white flex items-center justify-center shadow-md">
                  <FaTruck className="w-4 xs:w-5 h-4 xs:h-5" />
                </div>
                <div>
                  <p className="text-[10px] xs:text-xs font-bold text-primary-950 leading-tight">Free Home Sample Collection</p>
                  <p className="text-[9px] xs:text-[10px] text-gray-500">Across Bangalore, 6 AM – 10 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Feature badges ── */}
        <div
          className={`mt-12 xs:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3 xs:gap-4 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          {whyChoosePackagesData.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-2xl bg-white border border-gray-100 p-3.5 xs:p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div
                className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md`}
              >
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-primary-950">{item.title}</p>
                <p className="text-[11px] xs:text-xs text-gray-500">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
