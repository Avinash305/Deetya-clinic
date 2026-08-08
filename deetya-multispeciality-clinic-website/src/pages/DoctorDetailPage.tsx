import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import { FiArrowUp } from 'react-icons/fi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { doctorsData } from '../data/doctorsData';
import { testimonialsData } from '../data/testimonialsData';
import CTABanner from '../components/CTABanner/CTABanner';
import AppointmentSection from '../components/Appointment/Appointment';
import SectionBackground from '../components/ui/SectionBackground';
import StickyNav from '../components/DoctorDetail/StickyNav';
import DoctorHero from '../components/DoctorDetail/DoctorHero';
import DoctorStatsBar from '../components/DoctorDetail/DoctorStatsBar';
import DoctorEducation from '../components/DoctorDetail/DoctorEducation';
import DoctorServices from '../components/DoctorDetail/DoctorServices';
import DoctorPhilosophy from '../components/DoctorDetail/DoctorPhilosophy';
import DoctorClinical from '../components/DoctorDetail/DoctorClinical';
import DoctorReviews from '../components/DoctorDetail/DoctorReviews';
import DoctorBook from '../components/DoctorDetail/DoctorBook';
import OtherDoctors from '../components/DoctorDetail/OtherDoctors';

/* ──────────────────────────────────────────────
   SCROLL PROGRESS INDICATOR
   ────────────────────────────────────────────── */
function ScrollProgress() {
  const progress = useScrollProgress();
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
   MAIN PAGE COMPONENT
   ────────────────────────────────────────────── */
export default function DoctorDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { ref: contentRef, isVisible: contentVis } = useScrollAnimation(0.05);
  const doctor = doctorsData.find((d) => d.slug === slug);

  if (!doctor) {
    return <Navigate to="/about" replace />;
  }

  const otherDoctors = doctorsData.filter((d) => d.slug !== doctor.slug).slice(0, 3);

  const firstTwo = doctor.name.split(' ').slice(0, 2).join(' ');
  // Reviews matching this doctor — computed once instead of twice per render.
  const doctorFirst = doctor.name.replace(/^Dr\.\s*/i, '').split(' ')[0].toLowerCase();
  const doctorReviews = testimonialsData.filter((t) => t.review.toLowerCase().includes(doctorFirst));

  // JSON-LD structured data for this doctor
  const doctorJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: doctor.name,
    description: doctor.bio.substring(0, 200),
    url: `https://deetyahealthcare.com/#/doctors/${doctor.slug}`,
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
        canonical={`https://deetyahealthcare.com/#/doctors/${doctor.slug}`}
        jsonLd={doctorJsonLd}
      />

      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Sticky section nav */}
      <StickyNav doctorColor={doctor.color} />

      {/* Hero */}
      <DoctorHero doctor={doctor} />

      {/* Stats bar */}
      <DoctorStatsBar doctor={doctor} />

      {/* ─────────────────────────────────────────
          DETAILED CONTENT
         ───────────────────────────────────────── */}
      <section
        ref={contentRef}
        className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-primary-50/40 via-white to-white relative"
      >
        {/* Background decoration */}
        <SectionBackground
          blobs={[
            'top-0 right-0 w-96 h-96 bg-primary-100/20 blur-[100px] -translate-y-1/3 translate-x-1/4',
            'bottom-0 left-0 w-72 h-72 bg-accent-100/15 blur-[80px] translate-y-1/3 -translate-x-1/4',
          ]}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`space-y-12 sm:space-y-16 lg:space-y-20 ${
              contentVis ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <DoctorEducation education={doctor.education} />
            <DoctorServices services={doctor.services} color={doctor.color} />
            <DoctorPhilosophy doctor={doctor} firstName={firstTwo} />
            <DoctorClinical doctor={doctor} firstName={firstTwo} />
            <DoctorReviews reviews={doctorReviews} firstName={firstTwo} />
            <DoctorBook doctor={doctor} firstName={firstTwo} />
          </div>
        </div>
      </section>

      {/* Other doctors */}
      <OtherDoctors doctors={otherDoctors} />

      {/* ── APPOINTMENT ── */}
      <AppointmentSection />

      {/* ── CTA BANNER ── */}
      <CTABanner />

      {/* Scroll to top */}
      <ScrollToTopBtn />
    </>
  );
}
