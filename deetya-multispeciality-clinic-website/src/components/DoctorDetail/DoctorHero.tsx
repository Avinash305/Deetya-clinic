import { Link } from 'react-router-dom';
import {
  FiHome, FiChevronRight, FiStar, FiGlobe, FiAward, FiMapPin, FiVideo, FiPhoneCall,
} from 'react-icons/fi';
import { FaGraduationCap, FaUserMd, FaRegCalendarCheck, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import type { DoctorDetail } from '../../data/doctorsData';
import { clinicInfo } from '../../data/siteData';
import { telHref, whatsappHref } from '../../utils/links';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionBackground from '../ui/SectionBackground';

/** Hero — dark gradient banner with doctor photo, credentials and CTAs. */
export default function DoctorHero({ doctor }: { doctor: DoctorDetail }) {
  const { ref, isVisible: heroVis } = useScrollAnimation(0.05);

  return (
    <section
      ref={ref}
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
      <SectionBackground dotGrid={{ color: 'rgba(255,255,255,0.4)', size: 28, opacity: 0.04 }} />

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
                href={telHref(doctor.phone)}
                className="group inline-flex items-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 min-h-[44px] bg-white/10 border border-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 hover:-translate-y-1 active:scale-[0.97] transition-all text-xs sm:text-sm"
              >
                <FiPhoneCall className="w-4 h-4" />
                <span className="hidden xs:inline">Call Hospital</span>
                <span className="xs:hidden">Call</span>
              </a>
              <a
                href={whatsappHref(`Hi DEETYA Clinic! I would like to book an appointment with ${doctor.name}. Please share available slots.`)}
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
  );
}
