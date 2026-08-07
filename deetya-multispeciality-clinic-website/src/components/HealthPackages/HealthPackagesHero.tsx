import { FiArrowRight, FiGrid, FiHome, FiPhone } from 'react-icons/fi';
import { FaFlask, FaTruck } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { healthPackagesData } from '../../data/healthPackagesData';
import { clinicInfo, whyChoosePackagesData } from '../../data/siteData';

export default function HealthPackagesHero() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  const totalTests = healthPackagesData.reduce((sum, p) => sum + p.totalTests, 0);
  const homeCollectionCount = healthPackagesData.filter((p) => p.homeCollection).length;

  const scrollToPackages = () => {
    document.getElementById('health-packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: `${healthPackagesData.length}+`, label: 'Packages', icon: <FaFlask className="w-4 h-4" /> },
    { value: `${totalTests}+`, label: 'Tests Covered', icon: <FaFlask className="w-4 h-4" /> },
    { value: `${homeCollectionCount}+`, label: 'Home Collection', icon: <FaTruck className="w-4 h-4" /> },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50/50">
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-20 w-96 h-96 rounded-full bg-primary-100/60 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-accent-100/50 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-warm-100/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 xs:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* ── Left: content ── */}
          <div className={`text-center lg:text-left ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold uppercase tracking-widest">
              <FaFlask className="w-3.5 h-3.5" /> Health Packages &amp; Profiles
            </span>

            <h1 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-950 leading-tight">
              Complete Health{' '}
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-warm-500 bg-clip-text text-transparent animate-gradient-shift">
                Checkup Packages
              </span>{' '}
              in Bangalore
            </h1>

            <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {healthPackagesData.length} comprehensive screening packages &amp; diagnostic profiles for every age
              and need — with in-house laboratory accuracy, free home sample collection and same-day reports.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                onClick={scrollToPackages}
                className="group inline-flex items-center justify-center gap-2 px-5 xs:px-7 py-3 xs:py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-0.5 transition-all text-xs xs:text-sm"
              >
                <FiGrid className="w-4 h-4" />
                View All Packages
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-5 xs:px-7 py-3 xs:py-3.5 border-2 border-primary-200 text-primary-700 font-bold rounded-xl hover:bg-primary-50 hover:border-primary-300 transition-all text-xs xs:text-sm"
              >
                <FiPhone className="w-4 h-4" />
                Book Home Collection
              </a>
            </div>

            {/* mini stats */}
            <div className="mt-9 grid grid-cols-3 gap-2 xs:gap-3 max-w-md mx-auto lg:mx-0">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl xs:rounded-2xl bg-white/80 backdrop-blur border border-gray-100 shadow-sm p-2.5 xs:p-3 text-center"
                >
                  <div className="w-8 h-8 mx-auto rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-1.5">
                    {s.icon}
                  </div>
                  <p className="text-base xs:text-lg sm:text-xl font-extrabold text-primary-950 leading-none">{s.value}</p>
                  <p className="text-[10px] xs:text-[11px] text-gray-500 font-medium mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: image ── */}
          <div className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* decorative frame */}
              <div className="absolute -top-3 -left-3 xs:-top-4 xs:-left-4 w-full h-full border-2 border-primary-200/60 rounded-3xl -z-10" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/15 ring-4 ring-white">
                <img
                  src="/images/lab-doctor-microscope.webp"
                  alt="Doctor examining samples under a microscope in the laboratory"
                  className="w-full aspect-[3/2] object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent" />
                {/* photo credit (CC BY 2.0 — Wikimedia Commons) */}
                <p className="absolute bottom-1.5 left-2.5 text-[9px] text-white/75 drop-shadow leading-none">
                  Photo: Nenad Stojkovic (CC BY 2.0)
                </p>

              </div>

              {/* floating badge: home collection */}
              <div className="absolute -bottom-4 -left-2 xs:-left-4 bg-white rounded-2xl shadow-xl shadow-primary-900/10 border border-gray-100 px-3 xs:px-4 py-2.5 xs:py-3 flex items-center gap-2.5">
                <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 text-white flex items-center justify-center shadow-md">
                  <FiHome className="w-4 xs:w-5 h-4 xs:h-5" />
                </div>
                <div>
                  <p className="text-[10px] xs:text-xs font-bold text-primary-950 leading-tight">Free Home Sample Collection</p>
                  <p className="text-[9px] xs:text-[10px] text-gray-500">Across Bangalore, 6 AM – 10 PM</p>
                </div>
              </div>

              {/* floating badge: reports */}
              <div className="absolute -top-4 -right-2 xs:-right-4 bg-white rounded-2xl shadow-xl shadow-primary-900/10 border border-gray-100 px-3 xs:px-4 py-2.5 xs:py-3 flex items-center gap-2.5">
                <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white flex items-center justify-center shadow-md">
                  <FaFlask className="w-4 xs:w-5 h-4 xs:h-5" />
                </div>
                <div>
                  <p className="text-[10px] xs:text-xs font-bold text-primary-950 leading-tight">NABL-Accredited Lab</p>
                  <p className="text-[9px] xs:text-[10px] text-gray-500">Same-day reports in 6–12 hrs</p>
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
