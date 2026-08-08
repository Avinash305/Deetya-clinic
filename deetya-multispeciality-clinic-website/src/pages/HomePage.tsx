import { lazy } from 'react';
import ScrollProgressBar from '../components/ScrollProgressBar/ScrollProgressBar';
import SectionDivider from '../components/SectionDivider/SectionDivider';
import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import PartnerLogoCarousel from '../components/PartnerLogoCarousel/PartnerLogoCarousel';
import WelcomeBanner from '../components/WelcomeBanner/WelcomeBanner';
import About from '../components/About/About';
import LazyLoad from '../components/LazyLoad/LazyLoad';
import SEO from '../components/SEO/SEO';
import { clinicInfo } from '../data/siteData';

// Below-the-fold sections are code-split: their JS chunk only downloads when
// the visitor scrolls near them, keeping first load fast. The shell above
// (hero, stats, partner logos, about) stays in the main bundle.
const Services = lazy(() => import('../components/Services/Services'));
const WhyChoosePackages = lazy(() => import('../components/WhyChoosePackages/WhyChoosePackages'));
const HealthPackages = lazy(() => import('../components/HealthPackages/HealthPackages'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs/WhyChooseUs'));
const DentalCare = lazy(() => import('../components/DentalCare/DentalCare'));
const Doctors = lazy(() => import('../components/Doctors/Doctors'));
const Facilities = lazy(() => import('../components/Facilities/Facilities'));
const AppointmentSection = lazy(() => import('../components/Appointment/Appointment'));
const Testimonials = lazy(() => import('../components/Testimonials/Testimonials'));
const CTABanner = lazy(() => import('../components/CTABanner/CTABanner'));
const FAQ = lazy(() => import('../components/FAQ/FAQ'));
const Contact = lazy(() => import('../components/Contact/Contact'));

export default function HomePage() {
  return (
    <>
      <SEO
        title={clinicInfo.fullName}
        description="DEETYA Multispeciality Clinic - Premium healthcare since 2026 with expert doctors (General Physician, Gynecologist, Orthopedic, Pediatrics, ENT), in-house Laboratory, IPD, OPD & Pharmacy. Located in JP Nagar 9th Phase, Bangalore."
        canonical="https://deetyahealthcare.com/"
        keywords="multispeciality clinic JP Nagar, best clinic Bangalore, general physician JP Nagar, gynecologist JP Nagar, orthopedic JP Nagar"
      />
      {/* Scroll Progress Indicator — shows reading progress at top */}
      <ScrollProgressBar />

      {/* 1 — Hero Slider with Floating Booking Card */}
      <Hero />

      {/* 2 — Trust Numbers / Stats */}
      <Stats />
      <SectionDivider variant="wave" color="light" />

      {/* 3 — Partner Logos */}
      <PartnerLogoCarousel />

      {/* 4 — Quick Contact Bar */}
      <WelcomeBanner />

      {/* 5 — About the Clinic */}
      <About />
      <SectionDivider variant="curve" color="light" flipped />

      {/* 6 — Our Services */}
      <LazyLoad>
        <Services limit={6} showViewAll showImages />
      </LazyLoad>
      <SectionDivider variant="wave" color="light" />

      {/* 6.5 — Why Choose Packages */}
      <LazyLoad>
        <WhyChoosePackages />
      </LazyLoad>

      {/* 6.6 — Premium Health Packages */}
      <LazyLoad>
        <HealthPackages showViewAll limit={3} />
      </LazyLoad>
      <SectionDivider variant="curve" color="light" flipped />

      {/* 7 — Why Choose Us */}
      <LazyLoad>
        <WhyChooseUs />
      </LazyLoad>

      {/* 7.5 — DEETYA Dental Care (Coming Soon) */}
      <LazyLoad>
        <DentalCare />
      </LazyLoad>

      {/* 8 — Our Doctors preview */}
      <LazyLoad>
        <Doctors limit={3} showViewAll />
      </LazyLoad>
      <SectionDivider variant="wave" color="light" flipped />

      {/* 9 — World-class Facilities */}
      <LazyLoad>
        <Facilities />
      </LazyLoad>

      {/* 10 — Appointment Process */}
      <LazyLoad>
        <AppointmentSection />
      </LazyLoad>
      <SectionDivider variant="curve" color="light" />

      {/* 11 — Patient Testimonials */}
      <LazyLoad>
        <Testimonials />
      </LazyLoad>

      {/* 12 — CTA Banner */}
      <LazyLoad>
        <CTABanner />
      </LazyLoad>

      {/* 13 — FAQ */}
      <LazyLoad>
        <FAQ />
      </LazyLoad>

      {/* 14 — Contact Form */}
      <LazyLoad>
        <Contact />
      </LazyLoad>
    </>
  );
}
