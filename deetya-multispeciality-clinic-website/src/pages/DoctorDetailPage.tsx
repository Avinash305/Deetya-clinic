import { useState, useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import {
  FiPhone, FiCalendar, FiAward, FiGlobe,
  FiCheck, FiClock, FiPhoneCall, FiHeart, FiHelpCircle, FiEye,
  FiChevronDown, FiMapPin, FiStar, FiArrowUp, FiArrowRight,
  FiMonitor, FiShield, FiThumbsUp, FiVideo, FiHome, FiChevronRight,
  FiTrendingUp, FiActivity, FiMessageSquare, FiLayers,
} from 'react-icons/fi';
import {
  FaGraduationCap, FaStethoscope, FaWhatsapp, FaUserMd,
  FaQuoteLeft, FaQuestionCircle, FaRegCalendarCheck, FaStar,
  FaCheckCircle,
} from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';
import { doctorsData, clinicInfo, testimonialsData } from '../data/siteData';
import CTABanner from '../components/CTABanner/CTABanner';
import AppointmentSection from '../components/Appointment/Appointment';

/* ──────────────────────────────────────────────
   SECTION NAV DATA
   ────────────────────────────────────────────── */
const navSections = [
  { id: 'expertise', label: 'Expertise', icon: <FiActivity className="w-3.5 h-3.5" /> },
  { id: 'qualifications', label: 'Education', icon: <FaGraduationCap className="w-3.5 h-3.5" /> },
  { id: 'services', label: 'Services', icon: <FaStethoscope className="w-3.5 h-3.5" /> },
  { id: 'philosophy', label: 'Philosophy', icon: <FiHeart className="w-3.5 h-3.5" /> },
  { id: 'conditions', label: 'Conditions', icon: <FiEye className="w-3.5 h-3.5" /> },
  { id: 'process', label: 'Process', icon: <FiTrendingUp className="w-3.5 h-3.5" /> },
  { id: 'testimonials', label: 'Reviews', icon: <FiMessageSquare className="w-3.5 h-3.5" /> },
  { id: 'faq', label: 'FAQ', icon: <FaQuestionCircle className="w-3.5 h-3.5" /> },
  { id: 'book', label: 'Book', icon: <FiCalendar className="w-3.5 h-3.5" /> },
];

/* ──────────────────────────────────────────────
   SCROLL PROGRESS INDICATOR
   ────────────────────────────────────────────── */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-gray-200/30 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-accent-400 via-accent-500 to-primary-500 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* ──────────────────────────────────────────────
   STICKY SECTION NAV
   ────────────────────────────────────────────── */
function StickyNav({ doctorColor }: { doctorColor: string }) {
  const [activeId, setActiveId] = useState('');
  const [visible, setVisible] = useState(false);
  const clickLockRef = useRef(false);
  const visibleRef = useRef(false);
  const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  // Initial value is set to 0; the effect below computes the correct pinned
  // position on mount and on every scroll/resize (the helper functions are
  // declared below, so referencing them in a useState initializer would hit
  // the temporal dead zone and crash the page).
  const [top, setTop] = useState<number>(0);

  const getTopBarHeight = () => {
    // Check data attribute set by Layout when TopBar hides on scroll
    if (document.documentElement.dataset.topbarHidden === 'true') return 0;
    return window.innerWidth < 640 ? 32 : 40;
  };

  const getMainNavHeight = () => {
    return window.innerWidth < 640 ? 56 : window.innerWidth < 1024 ? 64 : 80;
  };

  const getTotalFixedHeight = () => {
    return getTopBarHeight() + getMainNavHeight();
  };

  const getScrollOffsetForPosition = () => {
    return getTotalFixedHeight();
  };

  const getScrollOffset = () => {
    // Account for the fixed TopBar, main Navbar, and the StickyNav heights
    const totalFixedHeight = getTotalFixedHeight();
    // Only offset for sticky nav when it's actually visible
    const stickyNavHeight = visibleRef.current ? 56 : 0;
    return totalFixedHeight + stickyNavHeight + 12; // 12px extra padding for comfort
  };

  const scrollTo = (id: string) => {
    // Immediately highlight the clicked tab
    setActiveId(id);
    // Lock scroll-based detection — will release when scrolling stops
    clearTimeout(scrollEndTimerRef.current);
    clickLockRef.current = true;
    // Fallback: release lock after 2s even if no scroll events fire
    // (e.g. clicking a tab for the section already in view)
    scrollEndTimerRef.current = setTimeout(() => { clickLockRef.current = false; }, 2000);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - getScrollOffset();
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Keep the sticky nav pinned just below the TopBar/main Navbar. Their heights
  // change when the TopBar auto-hides on scroll (Layout sets the data attribute),
  // so recompute on every scroll/resize instead of only at mount — otherwise the
  // sticky nav overlaps the main navbar and blocks its taps when scrolling up.
  useEffect(() => {
    const update = () => setTop(getScrollOffsetForPosition());
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  // Active-section detection — finds the section whose TOP EDGE is closest to the
  // sticky nav bottom (viewport-relative). Uses getBoundingClientRect() because
  // offsetTop is relative to the nearest positioned ancestor (the 'relative' div
  // wrapping the sections), NOT the document — making it incompatible with window.scrollY.
  // Locked briefly after a tab click (via clickLockRef + scroll-end debounce).
  useEffect(() => {
    const updateActiveSection = () => {
      const threshold = getScrollOffset() + 40;
      let closestId = '';
      let closestTop = -Infinity;
      for (const { id } of navSections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= threshold && top > closestTop) {
            closestTop = top;
            closestId = id;
          }
        }
      }
      // Fallback: if no section is above the threshold, pick the first section
      // that is closest to the threshold (e.g. when scrolled past all sections)
      if (!closestId) {
        let minDiff = Infinity;
        for (const { id } of navSections) {
          const el = document.getElementById(id);
          if (el) {
            const diff = Math.abs(el.getBoundingClientRect().top - threshold);
            if (diff < minDiff) {
              minDiff = diff;
              closestId = id;
            }
          }
        }
      }
      setActiveId(closestId);
    };

    const onScroll = () => {
      const nowVisible = window.scrollY > 450;
      setVisible(nowVisible);
      visibleRef.current = nowVisible;

      // If click lock is active, reset the scroll-end debounce timer
      if (clickLockRef.current) {
        clearTimeout(scrollEndTimerRef.current);
        scrollEndTimerRef.current = setTimeout(() => {
          clickLockRef.current = false;
          updateActiveSection(); // run once when scroll settles
        }, 250);
        return; // don't update active section during lock
      }

      updateActiveSection();
    };

    // Initialize active section immediately on mount
    updateActiveSection();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(scrollEndTimerRef.current);
    };
  }, []);

  return (
    <nav
      style={{ top: `${top}px` }}
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-dark rounded-b-2xl shadow-xl shadow-primary-900/10 border-t-0 border-x border-b border-white/30 overflow-hidden">
          {/* Thin accent line */}
          <div className={`h-[3px] bg-gradient-to-r ${doctorColor}`} />
          <div className="flex items-center overflow-x-auto no-scrollbar py-2 px-2 sm:px-3 gap-0.5">
            {navSections.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] sm:text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                  activeId === id
                    ? `bg-gradient-to-r ${doctorColor} text-white shadow-lg shadow-black/10 scale-105`
                    : 'text-gray-500 hover:text-primary-700 hover:bg-primary-50/60'
                }`}
              >
                {icon}
                <span className="hidden xs:inline">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ──────────────────────────────────────────────
   SCROLL TO TOP
   ────────────────────────────────────────────── */
function ScrollToTopBtn() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-20 right-4 sm:right-6 z-40 w-11 h-11 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-primary-600 hover:bg-primary-50 hover:text-primary-800 hover:-translate-y-1 active:scale-90 transition-all duration-300 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'
      }`}
    >
      <FiArrowUp className="w-5 h-5" />
    </button>
  );
}

/* ──────────────────────────────────────────────
   SECTION HEADER COMPONENT
   ────────────────────────────────────────────── */
function SectionHeader({
  icon,
  iconBg,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
      <div
        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${iconBg} flex items-center justify-center shadow-lg shadow-black/10 ring-4 ring-white/50 shrink-0`}
      >
        <div className="text-white">{icon}</div>
      </div>
      <div>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-950 leading-tight">
          {title}
        </h2>
        <p className="text-[10px] xs:text-xs text-gray-400 mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   GLASS CARD WRAPPER
   ────────────────────────────────────────────── */
function GlassCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass-card rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${className}`}
    >
      {children}
    </div>
  );
}

/* ──────────────────────────────────────────────
   ANIMATED STAT CARD
   ────────────────────────────────────────────── */
function AnimatedStatCard({
  icon,
  label,
  value,
  suffix = '',
  color,
  countTo,
  startCounting,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  suffix?: string;
  color: string;
  countTo?: number;
  startCounting: boolean;
}) {
  const count = useCountUp(countTo || 0, 2000, startCounting);
  const isParsed = countTo !== undefined;

  return (
    <div className="group relative">
      <div className="flex items-center gap-3 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-white transition-all duration-500">
        <div
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}
        >
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-[8px] xs:text-[10px] font-medium text-gray-400 uppercase tracking-[0.1em]">
            {label}
          </p>
          <p className="text-sm sm:text-base lg:text-lg font-bold text-primary-950">
            {isParsed ? <span>{count}{suffix}</span> : value}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   SMOOTH ACCORDION
   ────────────────────────────────────────────── */
function Accordion({
  icon,
  iconBg,
  title,
  children,
  defaultOpen = false,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? contentRef.current.scrollHeight : 0);
    }
  }, [open, children]);

  return (
    <GlassCard className="!p-0 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left hover:bg-gray-50/50 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={`w-8 h-8 rounded-lg bg-gradient-to-br ${iconBg} flex items-center justify-center text-white shrink-0 shadow-sm`}
          >
            {icon}
          </div>
          <span className="text-xs sm:text-sm font-semibold text-primary-950 leading-snug">
            {title}
          </span>
        </div>
        <div
          className={`w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180 bg-primary-100' : ''
          }`}
        >
          <FiChevronDown
            className={`w-4 h-4 transition-colors duration-300 ${
              open ? 'text-primary-600' : 'text-gray-400'
            }`}
          />
        </div>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{ height: height ? `${height}px` : '0px' }}
      >
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
          <div className="pt-3 border-t border-gray-100">{children}</div>
        </div>
      </div>
    </GlassCard>
  );
}

/* ──────────────────────────────────────────────
   MAIN PAGE COMPONENT
   ────────────────────────────────────────────── */
export default function DoctorDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const doctor = doctorsData.find((d) => d.slug === slug);

  const { ref: heroRef, isVisible: heroVis } = useScrollAnimation(0.05);
  const { ref: contentRef, isVisible: contentVis } = useScrollAnimation(0.05);
  const { ref: statsRef, isVisible: statsVis } = useScrollAnimation(0.1);

  if (!doctor) {
    return <Navigate to="/about" replace />;
  }

  const otherDoctors = doctorsData.filter((d) => d.slug !== doctor.slug).slice(0, 3);

  const firstTwo = doctor.name.split(' ').slice(0, 2).join(' ');

  // JSON-LD structured data for this doctor
  const doctorJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: doctor.name,
    description: doctor.bio.substring(0, 200),
    url: `https://deetyaclinic.com/#/doctors/${doctor.slug}`,
    image: doctor.image,
    medicalSpecialty: doctor.specialization,
    knowsAbout: doctor.conditions.map((c) => c.title),
    availableService: doctor.services.map((s) => ({
      '@type': 'MedicalProcedure',
      name: s,
    })),
    hospitalAffiliation: {
      '@type': 'Hospital',
      name: 'DEETYA Multispeciality Clinic',
    },
  };

  return (
    <>
      <SEO
        title={`${doctor.name} - ${doctor.specialization}`}
        description={`Book appointment with ${doctor.name}, ${doctor.specialization} at DEETYA Multispeciality Clinic. ${doctor.experience} experience. Call +91-8050454140.`}
        canonical={`https://deetyaclinic.com/#/doctors/${doctor.slug}`}
        jsonLd={doctorJsonLd}
      />
      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Sticky section nav */}
      <StickyNav doctorColor={doctor.color} />

      {/* ─────────────────────────────────────────
          HERO SECTION — Premium Two-Column
         ───────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] sm:min-h-[92vh] flex items-center overflow-hidden"
      >
        {/* Animated gradient background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 animate-gradient-shift" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.08),transparent_60%)]" />

        {/* Decorative glow orbs */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent-500/8 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-primary-500/12 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-accent-400/6 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-[200px] h-[200px] bg-purple-500/8 rounded-full blur-[80px] animate-float" style={{ animationDelay: '0.5s' }} />

        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Breadcrumb */}
          <nav
            className={`flex items-center gap-1.5 text-white/50 text-[10px] xs:text-xs sm:text-sm mb-6 sm:mb-8 ${
              heroVis ? 'animate-fade-in-down' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.05s', animationFillMode: 'forwards' }}
          >
            <Link to="/" className="hover:text-white/80 transition-colors flex items-center gap-1">
              <FiHome className="w-3 h-3" />
              <span className="hidden xs:inline">Home</span>
            </Link>
            <FiChevronRight className="w-3 h-3" />
            <Link to="/about" className="hover:text-white/80 transition-colors">Doctors</Link>
            <FiChevronRight className="w-3 h-3" />
            <span className="text-white/80 font-medium">{doctor.name}</span>
          </nav>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* ── LEFT COLUMN: Doctor Photo ── */}
            <div
              className={`lg:col-span-2 flex justify-center ${
                heroVis ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
            >
              <div className="relative w-64 xs:w-72 sm:w-80 lg:w-full max-w-sm">
                {/* Photo card */}
                <div className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/30 ring-1 ring-white/10 group">
                  <div
                    className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{
                      backgroundImage: `url(${doctor.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center 20%',
                    }}
                    role="img"
                    aria-label={doctor.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-primary-950/10 to-transparent" />

                  {/* Experience badge - top right */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                    <FiStar className="w-3 h-3 text-yellow-300" />
                    <span className="text-[10px] font-bold text-white">{doctor.experience}</span>
                  </div>
                </div>

                {/* ── FLOATING BADGES ── */}
                {/* Verified Doctor badge */}
                <div className="absolute -bottom-2 -left-3 sm:-left-4 flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 bg-white/95 backdrop-blur-md rounded-xl shadow-xl shadow-black/20 border border-white/50 animate-float" style={{ animationDelay: '0.5s' }}>
                  <FaCheckCircle className="w-4 h-4 text-accent-500" />
                  <span className="text-[9px] sm:text-[10px] font-bold text-primary-900">Verified Doctor</span>
                </div>


              </div>
            </div>

            {/* ── RIGHT COLUMN: Doctor Info ── */}
            <div
              className={`lg:col-span-3 ${
                heroVis ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              {/* Name */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 leading-[1.08] tracking-tight">
                {doctor.name}
              </h1>

              {/* Designation + Hospital */}
              <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
                {doctor.specialization}{' '}
                <span className="text-white/40">|</span>{' '}
                <span className="text-accent-300 font-medium">{clinicInfo.fullName}</span>
              </p>

              {/* Qualifications inline chips */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-4">
                {doctor.education.map((edu, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-[10px] xs:text-xs font-medium"
                  >
                    <FaGraduationCap className="w-3 h-3 text-accent-400 shrink-0" />
                    {edu}
                  </span>
                ))}
              </div>

              {/* Languages + Experience + Location chips */}
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/8 backdrop-blur-sm border border-white/10 text-white/70 text-[10px] xs:text-xs">
                  <FiGlobe className="w-3 h-3 text-accent-400 shrink-0" />
                  {doctor.languages.join(', ')}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/8 backdrop-blur-sm border border-white/10 text-white/70 text-[10px] xs:text-xs">
                  <FiAward className="w-3 h-3 text-accent-400 shrink-0" />
                  {doctor.experience}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/8 backdrop-blur-sm border border-white/10 text-white/70 text-[10px] xs:text-xs">
                  <FiMapPin className="w-3 h-3 text-accent-400 shrink-0" />
                  JP Nagar, Bangalore
                </span>
              </div>

              {/* Consultation type chips */}
              <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-300 text-[10px] xs:text-xs font-medium">
                  <FiVideo className="w-3 h-3" />
                  Online Consultation
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-[10px] xs:text-xs font-medium">
                  <FaUserMd className="w-3 h-3" />
                  In-Person Consultation
                </span>
              </div>

              {/* Bio */}
              <p className="text-white/60 text-sm sm:text-base lg:text-lg max-w-2xl mb-6 sm:mb-8 leading-relaxed line-clamp-3 sm:line-clamp-none">
                {doctor.bio}
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    const el = document.getElementById('book');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group relative inline-flex items-center gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 min-h-[44px] bg-accent-500 text-white font-bold rounded-xl hover:bg-accent-600 shadow-xl shadow-accent-500/30 hover:shadow-accent-500/50 hover:-translate-y-1 active:scale-[0.97] transition-all text-xs sm:text-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <FaRegCalendarCheck className="w-4 h-4" />
                  Book Appointment
                </button>
                <a
                  href={`tel:${doctor.phone.replace(/\s/g, '')}`}
                  className="group inline-flex items-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 min-h-[44px] bg-white/10 border border-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 hover:-translate-y-1 active:scale-[0.97] transition-all text-xs sm:text-sm"
                >
                  <FiPhoneCall className="w-4 h-4" />
                  <span className="hidden xs:inline">Call Hospital</span>
                  <span className="xs:hidden">Call</span>
                </a>
                <a
                  href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(`Hi DEETYA Clinic! I would like to book an appointment with ${doctor.name}. Please share available slots.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 min-h-[44px] bg-white/10 border border-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 hover:-translate-y-1 active:scale-[0.97] transition-all text-xs sm:text-sm"
                >
                  <FaWhatsapp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          STATS BAR - Animated Counters
         ───────────────────────────────────────── */}
      <section ref={statsRef} className="relative -mt-6 sm:-mt-8 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl sm:rounded-3xl shadow-2xl shadow-primary-900/10 border border-white/50 p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-3xl mx-auto">
              <AnimatedStatCard
                icon={<FiAward className="w-5 h-5 sm:w-6 sm:h-6" />}
                label="Experience"
                value={doctor.experience}
                color="from-warm-500 to-warm-700"
                startCounting={statsVis}
              />
              <AnimatedStatCard
                icon={<FaGraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />}
                label="Qualifications"
                value={`${doctor.education.length} Degrees`}
                color="from-accent-500 to-accent-700"
                countTo={doctor.education.length}
                suffix="+"
                startCounting={statsVis}
              />
              <AnimatedStatCard
                icon={<FiGlobe className="w-5 h-5 sm:w-6 sm:h-6" />}
                label="Languages"
                value={doctor.languages.join(', ')}
                color="from-purple-500 to-purple-700"
                countTo={doctor.languages.length}
                suffix="+"
                startCounting={statsVis}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          DETAILED CONTENT
         ───────────────────────────────────────── */}
      <section
        ref={contentRef}
        className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-primary-50/40 via-white to-white relative"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-100/15 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`space-y-12 sm:space-y-16 lg:space-y-20 ${
              contentVis ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            {/* ── QUALIFICATIONS ── */}
            <section id="qualifications">
              <SectionHeader
                icon={<FaGraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />}
                iconBg="from-primary-500 to-primary-700"
                title="Qualifications & Education"
                subtitle="Academic credentials and professional training"
              />

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[23px] sm:left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 via-accent-300 to-warm-300 rounded-full" />
                <div className="space-y-4 sm:space-y-5">
                  {doctor.education.map((edu, i) => (
                    <div key={i} className="relative flex items-start gap-4 sm:gap-5 group">
                      {/* Timeline dot */}
                      <div className="relative z-10 shrink-0">
                        <div className="w-[46px] h-[46px] sm:w-[54px] sm:h-[54px] rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white shadow-xl shadow-primary-500/20 ring-[5px] ring-white group-hover:scale-110 group-hover:ring-primary-100 transition-all duration-400">
                          <FiCheck className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
                        </div>
                      </div>
                      {/* Content */}
                      <GlassCard className="flex-1 !p-3 sm:!p-4 lg:!p-5">
                        <span className="inline-block text-[9px] sm:text-xs font-bold text-primary-600 bg-primary-50 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full mb-2">
                          {i === 0 ? 'Primary Qualification' : i === 1 ? 'Specialization' : 'Fellowship'}
                        </span>
                        <p className="text-sm sm:text-base font-semibold text-primary-950">{edu}</p>
                      </GlassCard>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SERVICES PROVIDED ── */}
            <section id="services">
              <SectionHeader
                icon={<FaStethoscope className="w-5 h-5 sm:w-6 sm:h-6" />}
                iconBg={doctor.color}
                title="Services Provided"
                subtitle="Treatments and procedures offered"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {doctor.services.map((svc, i) => (
                  <GlassCard key={i} className="!p-3 sm:!p-4 flex items-start gap-3 group">
                    <div className="mt-0.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent-100 flex items-center justify-center shrink-0 group-hover:bg-accent-200 group-hover:scale-110 transition-all duration-300">
                      <FiCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-600" />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600 group-hover:text-primary-950 transition-colors font-medium">
                      {svc}
                    </span>
                  </GlassCard>
                ))}
              </div>
            </section>

            {/* ── AREAS OF EXPERTISE ── */}
            <section id="expertise">
              <SectionHeader
                icon={<FiActivity className="w-5 h-5 sm:w-6 sm:h-6" />}
                iconBg={doctor.color}
                title="Areas of Expertise"
                subtitle="Special clinical focus and specialized services"
              />

              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {doctor.services.map((svc, i) => {
                  const icons = [
                    <FaStethoscope key="s" className="w-5 h-5 sm:w-6 sm:h-6" />,
                    <FiHeart key="h" className="w-5 h-5 sm:w-6 sm:h-6" />,
                    <FiMonitor key="m" className="w-5 h-5 sm:w-6 sm:h-6" />,
                    <FiShield key="sh" className="w-5 h-5 sm:w-6 sm:h-6" />,
                    <FiLayers key="l" className="w-5 h-5 sm:w-6 sm:h-6" />,
                    <FiActivity key="a" className="w-5 h-5 sm:w-6 sm:h-6" />,
                  ];
                  return (
                    <div
                      key={i}
                      className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500"
                    >
                      {/* Gradient border effect on hover */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${doctor.color} rounded-xl sm:rounded-2xl p-[2px]`}>
                        <div className="w-full h-full rounded-xl sm:rounded-2xl bg-white" />
                      </div>                              <div className="relative z-10 p-4 sm:p-5">
                        <div
                          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${doctor.color} flex items-center justify-center text-white shadow-md mb-3 sm:mb-4 group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}
                          role="img"
                          aria-label={`Expertise icon for ${svc}`}
                        >
                          {icons[i % icons.length]}
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold text-primary-950 mb-1.5 group-hover:text-primary-700 transition-colors">
                          {svc}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-gray-400 leading-relaxed line-clamp-2">
                          Specialized care and treatment for {svc.toLowerCase()}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ── CARE PHILOSOPHY ── */}
            {doctor.approach && (
              <section id="philosophy">
                <SectionHeader
                  icon={<FiHeart className="w-5 h-5 sm:w-6 sm:h-6" />}
                  iconBg="from-rose-500 to-rose-700"
                  title="A More Thoughtful Approach to Care"
                  subtitle={`${firstTwo}'s care philosophy`}
                />

                <GlassCard className="!p-5 sm:!p-8 lg:!p-10 relative overflow-hidden !border-rose-100 !shadow-rose-100/30">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-40 h-40 sm:w-56 sm:h-56 bg-rose-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-rose-200/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

                  {/* Large quote icon */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-rose-200/40">
                    <FaQuoteLeft className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
                  </div>

                  <div className="relative z-10">
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-[1.8] italic font-serif">
                      &ldquo;{doctor.approach}&rdquo;
                    </p>
                  </div>

                  {/* Doctor signature */}
                  <div className="relative z-10 mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-rose-200/50 flex items-center gap-3 sm:gap-4">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${doctor.color} flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg`}
                    >
                      {doctor.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-bold text-primary-950">{doctor.name}</p>
                      <p className="text-[10px] sm:text-xs text-gray-500">{doctor.specialization}</p>
                    </div>
                    <div className="ml-auto hidden sm:block">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <FiStar key={s} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </section>
            )}

            {/* ── CONDITIONS TREATED ── */}
            {doctor.conditions && doctor.conditions.length > 0 && (
              <section id="conditions">
                <SectionHeader
                  icon={<FiEye className="w-5 h-5 sm:w-6 sm:h-6" />}
                  iconBg={doctor.color}
                  title={`When to See ${firstTwo}`}
                  subtitle="Conditions we commonly diagnose and treat"
                />

                <div className="space-y-3 sm:space-y-4">
                  {doctor.conditions.map((condition, i) => (
                    <Accordion
                      key={i}
                      icon={
                        i % 2 === 0 ? (
                          <FiHeart className="w-4 h-4" />
                        ) : (
                          <FiMonitor className="w-4 h-4" />
                        )
                      }
                      iconBg={doctor.color}
                      title={condition.title}
                      defaultOpen={i === 0}
                    >
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {condition.description}
                      </p>
                    </Accordion>
                  ))}
                </div>
              </section>
            )}

            {/* ── TREATMENT PROCESS ── */}
            {doctor.whatToExpect && doctor.whatToExpect.length > 0 && (
              <section id="process">
                <SectionHeader
                  icon={<FiTrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />}
                  iconBg="from-primary-500 to-primary-700"
                  title="Your Treatment Journey"
                  subtitle="Step-by-step process from consultation to recovery"
                />

                {/* Vertical timeline for mobile, horizontal stepping for desktop */}
                <div className="relative">
                  {/* Desktop: horizontal connecting line */}
                  <div className="hidden md:block absolute top-8 left-[calc(14.28%+16px)] right-[calc(14.28%+16px)] h-[3px] bg-gradient-to-r from-primary-200 via-accent-200 to-primary-200 rounded-full" />

                  <div className="grid md:grid-cols-7 gap-4 sm:gap-5">
                    {[ 
                      { step: '01', title: 'Consultation', desc: 'Initial discussion of your health concerns and medical history.' },
                      { step: '02', title: 'Evaluation', desc: 'Thorough examination and assessment of your condition.' },
                      { step: '03', title: 'Diagnosis', desc: 'Evidence-based diagnosis with clear explanations.' },
                      { step: '04', title: 'Treatment Plan', desc: 'Personalized plan tailored to your unique needs.' },
                      { step: '05', title: 'Procedure', desc: 'Safe and comfortable treatment administration.' },
                      { step: '06', title: 'Recovery', desc: 'Guided recovery with follow-up monitoring.' },
                      { step: '07', title: 'Follow-Up', desc: 'Ongoing support and care for lasting wellness.' },
                    ].map(({ step, title, desc }, i) => (
                      <div key={i} className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-3 group">
                        {/* Step number circle */}
                        <div className="relative z-10 shrink-0">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-xl shadow-primary-500/20 ring-[5px] ring-white group-hover:scale-110 group-hover:ring-primary-100 transition-all duration-500">
                            {step}
                          </div>
                        </div>
                        {/* Content */}
                        <div className="flex-1 md:text-center">
                          <h4 className="text-xs sm:text-sm font-bold text-primary-950 mb-1 group-hover:text-primary-700 transition-colors">
                            {title}
                          </h4>
                          <p className="text-[10px] xs:text-xs text-gray-400 leading-relaxed">
                            {desc}
                          </p>
                        </div>
                        {/* Arrow connector on mobile */}
                        {i < 6 && (
                          <div className="md:hidden absolute -bottom-4 left-7 w-0.5 h-4 sm:h-5 bg-gradient-to-b from-primary-300 to-transparent" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* ── WHAT TO EXPECT ── */}
            {doctor.whatToExpect && doctor.whatToExpect.length > 0 && (
              <section id="expectations">
                <SectionHeader
                  icon={<FiThumbsUp className="w-5 h-5 sm:w-6 sm:h-6" />}
                  iconBg="from-teal-500 to-teal-700"
                  title="What to Expect During Your Visit"
                  subtitle="Making your visit comfortable and stress-free"
                />

                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-[23px] sm:left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-300 via-emerald-300 to-primary-300 rounded-full" />

                  <div className="space-y-4 sm:space-y-5">
                    {doctor.whatToExpect.map((item, i) => (
                      <div key={i} className="relative flex items-start gap-4 sm:gap-5 group">
                        {/* Numbered dot */}
                        <div className="relative z-10 shrink-0">
                          <div className="w-[46px] h-[46px] sm:w-[54px] sm:h-[54px] rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-xl shadow-teal-500/20 ring-[5px] ring-white group-hover:scale-110 group-hover:ring-teal-100 transition-all duration-400">
                            {i + 1}
                          </div>
                        </div>
                        {/* Content */}
                        <GlassCard className="flex-1 !p-3 sm:!p-4 lg:!p-5">
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item}</p>
                        </GlassCard>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Summary card */}
                <GlassCard className={`!p-4 sm:!p-6 mt-6 !bg-gradient-to-br from-teal-50/50 to-emerald-50/30 !border-teal-100`}>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                      <FiShield className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-teal-800 mb-1">
                        Your comfort is our priority
                      </p>
                      <p className="text-[10px] sm:text-xs text-teal-600/80 leading-relaxed">
                        {firstTwo} and the DEETYA Clinic team are committed to providing you with a
                        comfortable, respectful, and thorough healthcare experience every time you visit.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </section>
            )}

            {/* ── FAQ ── */}
            {doctor.faq && doctor.faq.length > 0 && (
              <section id="faq">
                <SectionHeader
                  icon={<FaQuestionCircle className="w-5 h-5 sm:w-6 sm:h-6" />}
                  iconBg="from-warm-500 to-warm-700"
                  title="Frequently Asked Questions"
                  subtitle={`Common questions about ${firstTwo}'s practice`}
                />

                <div className="space-y-3 sm:space-y-4">
                  {doctor.faq.map((faqItem, i) => (
                    <Accordion
                      key={i}
                      icon={<FiHelpCircle className="w-4 h-4" />}
                      iconBg="from-warm-500 to-warm-700"
                      title={faqItem.q}
                    >
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{faqItem.a}</p>
                    </Accordion>
                  ))}
                </div>
              </section>
            )}

            {/* ── PATIENT TESTIMONIALS ── */}
            <section id="testimonials">
              <SectionHeader
                icon={<FiMessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />}
                iconBg="from-purple-500 to-purple-700"
                title="What Patients Say"
                subtitle={`Real feedback from patients of ${firstTwo}`}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {testimonialsData
                  .filter((t) =>
                    t.review.toLowerCase().includes(doctor.name.replace(/^Dr\.\s*/i, '').split(' ')[0].toLowerCase())
                  )
                  .slice(0, 3)
                  .map((t, i) => (
                    <GlassCard key={i} className="!p-5 sm:!p-6 relative overflow-hidden">
                      {/* Decorative quote */}
                      <div className="absolute top-2 right-3 text-purple-100/60">
                        <FaQuoteLeft className="w-8 h-8 sm:w-10 sm:h-10" />
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1 mb-3">
                        {[...Array(t.rating)].map((_, s) => (
                          <FaStar key={s} className="w-3.5 h-3.5 text-yellow-400" />
                        ))}
                      </div>

                      {/* Review */}
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-4 relative z-10">
                        &ldquo;{t.review}&rdquo;
                      </p>

                      {/* Patient info */}
                      <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                        <div
                          className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}
                        >
                          {t.initials}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-primary-950">{t.name}</p>
                          <p className="text-[9px] text-gray-400">Verified Patient</p>
                        </div>
                        <div className="ml-auto">
                          <FaCheckCircle className="w-4 h-4 text-accent-400" />
                        </div>
                      </div>
                    </GlassCard>
                  ))}
              </div>

              {testimonialsData.filter((t) =>
                t.review.toLowerCase().includes(doctor.name.replace(/^Dr\.\s*/i, '').split(' ')[0].toLowerCase())
              ).length === 0 && (
                <GlassCard className="!p-6 sm:!p-8 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <FiMessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-purple-500" />
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-primary-950 mb-1">
                    Share Your Experience
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto">
                    Be the first to leave a review about your experience with {firstTwo}.
                  </p>
                </GlassCard>
              )}
            </section>

            {/* ── BOOK APPOINTMENT ── */}
            <section id="book">
              <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
                {/* Main booking card */}
                <div className="lg:col-span-3">
                  <div
                    className={`relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br ${doctor.color} shadow-2xl shadow-black/15`}
                  >
                    {/* Decorative elements */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full" />
                    <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

                    {/* Pattern */}
                    <div className="absolute inset-0 opacity-[0.04]">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage:
                            'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
                          backgroundSize: '18px 18px',
                        }}
                      />
                    </div>

                    <div className="relative z-10 p-6 sm:p-8 lg:p-10 text-white">
                      <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/15 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                          <FaRegCalendarCheck className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                            Book an Appointment
                          </h3>
                          <p className="text-white/70 text-xs sm:text-sm">
                            with {doctor.name}
                          </p>
                        </div>
                      </div>

                      <p className="text-white/80 text-xs sm:text-sm lg:text-base mb-6 sm:mb-8 leading-relaxed max-w-lg">
                        Schedule your consultation today. Our friendly staff will help you
                        find the perfect time slot that fits your schedule.
                      </p>

                      {/* Quick Details */}
                      <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 mb-6 sm:mb-8 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                        <div className="flex items-center gap-2.5">
                          <FiAward className="w-4 h-4 text-white/60 shrink-0" />
                          <div>
                            <p className="text-[8px] xs:text-[10px] text-white/50 uppercase tracking-wider">
                              Experience
                            </p>
                            <p className="text-xs sm:text-sm font-bold">{doctor.experience}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <FiClock className="w-4 h-4 text-white/60 shrink-0" />
                          <div>
                            <p className="text-[8px] xs:text-[10px] text-white/50 uppercase tracking-wider">
                              Hours
                            </p>
                            <p className="text-xs sm:text-sm font-bold">Mon-Sat 7AM-11PM</p>
                          </div>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-col xs:flex-row gap-3">
                        <a
                          href={`tel:${doctor.phone.replace(/\s/g, '')}`}
                          className="group flex items-center justify-center gap-2.5 flex-1 px-5 py-3.5 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 hover:-translate-y-1 active:scale-[0.97] transition-all shadow-xl text-xs sm:text-sm"
                        >
                          <FiPhone className="w-4 h-4" />
                          Call {firstTwo}
                        </a>
                        <a
                          href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(`Hi DEETYA Clinic! I would like to book an appointment with ${doctor.name}. Please share available slots.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-center gap-2.5 flex-1 px-5 py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 hover:-translate-y-1 active:scale-[0.97] transition-all shadow-xl shadow-green-500/25 text-xs sm:text-sm"
                        >
                          <FaWhatsapp className="w-4 h-4" />
                          WhatsApp Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clinic Info sidebar */}
                <div className="lg:col-span-2">
                  <GlassCard className="!p-5 sm:!p-6 lg:!p-7 h-full">
                    <h4 className="font-bold text-primary-950 mb-5 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-primary-100 flex items-center justify-center">
                        <FaUserMd className="w-3.5 h-3.5 text-primary-600" />
                      </div>
                      Clinic Information
                    </h4>

                    <div className="space-y-4">
                      <a
                        href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors group p-3 rounded-xl hover:bg-primary-50/70 -mx-1"
                      >
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                          <FiPhone className="w-4 h-4 text-primary-500" />
                        </div>
                        <div>
                          <p className="text-[8px] xs:text-[10px] text-gray-400 uppercase tracking-wider">
                            Call Clinic
                          </p>
                          <span className="text-xs sm:text-sm font-medium">{clinicInfo.phone}</span>
                        </div>
                      </a>

                      <div className="flex items-center gap-3 text-gray-600 p-3 rounded-xl -mx-1">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                          <FiCalendar className="w-4 h-4 text-primary-500" />
                        </div>
                        <div>
                          <p className="text-[8px] xs:text-[10px] text-gray-400 uppercase tracking-wider">
                            Working Hours
                          </p>
                          <span className="text-xs sm:text-sm font-medium">Mon-Sat 7AM-11PM</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-gray-600 p-3 rounded-xl -mx-1">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                          <FiClock className="w-4 h-4 text-primary-500" />
                        </div>
                        <div>
                          <p className="text-[8px] xs:text-[10px] text-gray-400 uppercase tracking-wider">
                            Sunday
                          </p>
                          <span className="text-xs sm:text-sm font-medium">7:30AM - 1:30PM</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-gray-600 p-3 rounded-xl -mx-1">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                          <FiMapPin className="w-4 h-4 text-primary-500" />
                        </div>
                        <div>
                          <p className="text-[8px] xs:text-[10px] text-gray-400 uppercase tracking-wider">
                            Address
                          </p>
                          <span className="text-[10px] sm:text-xs font-medium leading-tight block">
                            JP Nagar 9th Phase, Bangalore
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="my-5 border-t border-gray-100" />

                    {/* Quick actions */}
                    <div className="space-y-2.5">
                      <a
                        href={`tel:${doctor.phone.replace(/\s/g, '')}`}
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold rounded-xl hover:-translate-y-0.5 active:scale-[0.97] transition-all shadow-md text-xs sm:text-sm"
                      >
                        <FiPhoneCall className="w-4 h-4" />
                        Call Now
                      </a>
                      <a
                        href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(`Hi DEETYA Clinic! I would like to book an appointment with ${doctor.name}. Please share available slots.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:-translate-y-0.5 active:scale-[0.97] transition-all shadow-md text-xs sm:text-sm"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          OTHER DOCTORS
         ───────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-primary-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent-100/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full mb-4">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-primary-700">Our Team</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary-950 mb-3 leading-tight">
              Other{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Specialists
              </span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Meet our other highly qualified and experienced specialists
            </p>
          </div>

          {/* Doctor cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {otherDoctors.map((doc, i) => (
              <Link
                key={i}
                to={`/doctors/${doc.slug}`}
                className="group bg-white rounded-xl sm:rounded-2xl border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Doctor photo — displayed in full (natural aspect ratio) */}
                <div className="relative overflow-hidden bg-primary-50">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
                  {/* Experience badge */}
                  <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md">
                    <FiAward className="w-3 h-3 text-warm-500" />
                    <span className="text-[10px] sm:text-xs font-bold text-primary-900">
                      {doc.experience}
                    </span>
                  </div>
                </div>

                {/* Content — flex column so cards in a row stretch to equal height */}
                <div className="flex-1 flex flex-col p-4 sm:p-5">
                  <div
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r ${doc.color} text-white text-[10px] font-semibold mb-2 shadow-sm w-fit`}
                  >
                    <FaStar className="w-2.5 h-2.5" />
                    {doc.specialization}
                  </div>
                  <h3 className="font-bold text-primary-950 text-sm sm:text-base lg:text-lg mb-1 group-hover:text-primary-700 transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
                    {doc.bio.slice(0, 100)}...
                  </p>

                  {/* View profile CTA — pinned to bottom so all cards align */}
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 flex items-center justify-end">
                    <span className="text-[10px] sm:text-xs font-semibold text-primary-600 group-hover:text-primary-800 group-hover:gap-2 transition-all inline-flex items-center gap-1">
                      View Profile
                      <FiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPOINTMENT ── */}
      <AppointmentSection />

      {/* ── CTA BANNER ── */}
      <CTABanner />

      {/* Scroll to top */}
      <ScrollToTopBtn />
    </>
  );
}
