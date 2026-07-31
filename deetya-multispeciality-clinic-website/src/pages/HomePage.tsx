import ScrollProgressBar from '../components/ScrollProgressBar/ScrollProgressBar';
import SectionDivider from '../components/SectionDivider/SectionDivider';
import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import PartnerLogoCarousel from '../components/PartnerLogoCarousel/PartnerLogoCarousel';
import WelcomeBanner from '../components/WelcomeBanner/WelcomeBanner';
import About from '../components/About/About';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Services from '../components/Services/Services';
import Doctors from '../components/Doctors/Doctors';
import Facilities from '../components/Facilities/Facilities';
import AppointmentSection from '../components/Appointment/Appointment';
import Testimonials from '../components/Testimonials/Testimonials';
import CTABanner from '../components/CTABanner/CTABanner';
import FAQ from '../components/FAQ/FAQ';
import Contact from '../components/Contact/Contact';
import SEO from '../components/SEO/SEO';
import { clinicInfo } from '../data/siteData';

export default function HomePage() {
  return (
    <>
      <SEO
        title={clinicInfo.fullName}
        description="DEETYA Multispeciality Clinic - Premium healthcare since 2026 with expert doctors (General Physician, Gynecologist, Orthopedic, Pediatrics, ENT), in-house Laboratory, IPD, OPD & Pharmacy. Located in JP Nagar 9th Phase, Bangalore."
        canonical="https://deetyaclinic.com/"
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
      <Services limit={6} showViewAll showImages />
      <SectionDivider variant="wave" color="light" />

      {/* 7 — Why Choose Us */}
      <WhyChooseUs />

      {/* 8 — Our Doctors preview */}
      <Doctors limit={3} showViewAll />
      <SectionDivider variant="wave" color="light" flipped />

      {/* 9 — World-class Facilities */}
      <Facilities />

      {/* 10 — Appointment Process */}
      <AppointmentSection />
      <SectionDivider variant="curve" color="light" />

      {/* 11 — Patient Testimonials */}
      <Testimonials />

      {/* 12 — CTA Banner */}
      <CTABanner />

      {/* 13 — FAQ */}
      <FAQ />

      {/* 14 — Contact Form */}
      <Contact />

    </>
  );
}
