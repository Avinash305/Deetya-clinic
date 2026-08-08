import { FaTooth } from 'react-icons/fa6';
import { FiArrowRight, FiCheckCircle, FiClock, FiPhone, FiShield, FiSmile, FiAward, FiStar } from 'react-icons/fi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import FeatureBadge from '../ui/FeatureBadge';
import FloatingBadge from '../ui/FloatingBadge';
import SectionBackground from '../ui/SectionBackground';
import { telHref, whatsappHref } from '../../utils/links';

const dentalServices = [
  { text: 'Root Canal Treatment (RCT)', icon: <FiSmile className="w-3.5 h-3.5" /> },
  { text: 'Teeth Whitening & Bleaching', icon: <FiStar className="w-3.5 h-3.5" /> },
  { text: 'Braces & Clear Aligners', icon: <FiCheckCircle className="w-3.5 h-3.5" /> },
  { text: 'Dental Implants & Crowns', icon: <FaTooth className="w-3.5 h-3.5" /> },
  { text: 'Scaling, Polishing & Fillings', icon: <FiShield className="w-3.5 h-3.5" /> },
  { text: 'Pediatric & Preventive Dentistry', icon: <FiAward className="w-3.5 h-3.5" /> },
];

const dentalFeatures = [
  { icon: <FaTooth className="w-4 h-4 xs:w-5 xs:h-5" />, title: 'Advanced Dental Technology', subtitle: 'Digital X-rays & modern equipment' },
  { icon: <FiSmile className="w-4 h-4 xs:w-5 xs:h-5" />, title: 'Painless Treatments', subtitle: 'Comfort-first patient care' },
  { icon: <FiShield className="w-4 h-4 xs:w-5 xs:h-5" />, title: 'Strict Sterilization', subtitle: 'Safe, hygienic environment' },
  { icon: <FiClock className="w-4 h-4 xs:w-5 xs:h-5" />, title: 'Flexible Timings', subtitle: 'Convenient appointment slots' },
];

const whatsappDentalMessage = encodeURIComponent(
  'Hi DEETYA Clinic! I would like to know more about the upcoming DEETYA Dental Care clinic and its services.'
);

export default function DentalCare() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="dental-care"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-[#1F1A44] via-[#2B2553] to-[#171238] text-white"
    >
      {/* Decorative background + subtle dot grid */}
      <SectionBackground
        blobs={[
          '-top-24 -right-24 w-80 h-80 sm:w-96 sm:h-96 bg-accent-400/10 blur-3xl',
          '-bottom-28 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-purple-400/10 blur-3xl',
          'top-1/3 left-1/2 w-40 h-40 bg-primary-500/5 blur-3xl',
        ]}
        dotGrid={{ color: 'rgba(255,255,255,0.35)', size: 32, opacity: 0.04 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 xs:py-18 sm:py-24 lg:py-28">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* ── Left: content ── */}
          <div className="text-center lg:text-left">
            {/* Coming soon badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-400" />
              </span>
              <span className="text-[10px] xs:text-xs font-bold uppercase tracking-[0.2em] text-accent-300">Coming Soon</span>
            </div>

            <h2 className="mt-4 xs:mt-5 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              DEETYA{' '}
              <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-primary-300 bg-clip-text text-transparent animate-gradient-shift">
                Dental Care
              </span>
            </h2>
            <p className="mt-2 xs:mt-3 text-sm xs:text-base sm:text-lg text-primary-200 font-medium tracking-wide">
              Opening Soon at JP Nagar 9th Phase, Bangalore
            </p>

            <p className="mt-4 xs:mt-5 text-xs xs:text-sm sm:text-base text-white/60 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We are excited to announce our upcoming dental wing — bringing complete oral healthcare under the
              DEETYA umbrella. Advanced treatments, modern equipment, and gentle, expert care for your entire family.
            </p>

            {/* Planned services checklist */}
            <div className="mt-6 xs:mt-8 grid grid-cols-1 xs:grid-cols-2 gap-2.5 xs:gap-3 max-w-xl mx-auto lg:mx-0 text-left">
              {dentalServices.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 xs:gap-3 px-3 xs:px-3.5 py-2 xs:py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-400/30 transition-all duration-300">
                  <span className="w-6 h-6 xs:w-7 xs:h-7 shrink-0 rounded-full bg-accent-500/15 flex items-center justify-center text-accent-400">
                    {item.icon}
                  </span>
                  <span className="text-[11px] xs:text-xs sm:text-sm text-white/85 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-7 xs:mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href={whatsappHref(whatsappDentalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-5 xs:px-7 py-3 xs:py-3.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 hover:-translate-y-0.5 transition-all text-xs xs:text-sm"
              >
                Get Updates on WhatsApp
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={telHref()}
                className="inline-flex items-center justify-center gap-2 px-5 xs:px-7 py-3 xs:py-3.5 border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all text-xs xs:text-sm"
              >
                <FiPhone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </div>

          {/* ── Right: dental graphic ── */}
          <div className="relative">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* glow frame */}
              <div className="absolute -inset-1.5 xs:-inset-2 rounded-3xl bg-gradient-to-br from-accent-400/30 via-purple-400/20 to-primary-400/30 blur-lg opacity-70" />
              <div className="relative rounded-3xl overflow-hidden ring-4 ring-white/10 shadow-2xl shadow-purple-950/60">
                <img
                  src="/images/deetya-dental-care.webp"
                  alt="DEETYA Dental Care — opening soon"
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171238]/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* floating badge: dental wing */}
              <FloatingBadge
                position="top-right"
                iconBg="from-accent-500 to-accent-600"
                shadow="shadow-purple-950/40"
                icon={<FaTooth className="w-4 xs:w-5 h-4 xs:h-5" />}
                title="New Dental Wing"
                subtitle="DEETYA Multispeciality Clinic"
              />

              {/* floating badge: care */}
              <FloatingBadge
                position="bottom-left"
                iconBg="from-primary-500 to-primary-700"
                shadow="shadow-purple-950/40"
                icon={<FiSmile className="w-4 xs:w-5 h-4 xs:h-5" />}
                title="Smiles Coming Soon"
                subtitle="Complete oral care for all ages"
              />
            </div>
          </div>
        </div>

        {/* ── Feature cards ── */}
        <div className={`mt-12 xs:mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {dentalFeatures.map((item, i) => (
            <FeatureBadge key={i} tone="dark" icon={item.icon} title={item.title} subtitle={item.subtitle} />
          ))}
        </div>
      </div>
    </section>
  );
}
