import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import WelcomeBanner from '../components/WelcomeBanner/WelcomeBanner';
import About from '../components/About/About';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Services from '../components/Services/Services';
import Doctors from '../components/Doctors/Doctors';
import Facilities from '../components/Facilities/Facilities';
import AppointmentSection from '../components/Appointment/Appointment';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';
import Contact from '../components/Contact/Contact';
import CTABanner from '../components/CTABanner/CTABanner';

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero Slider with CTA */}
      <Hero />

      {/* 2 — Trust Numbers */}
      <Stats />

      {/* 3 — Quick Contact Bar */}
      <WelcomeBanner />

      {/* 4 — About the Clinic */}
      <About />

      {/* 5 — Our Services (image cards, 6 shown, View All) */}
      <Services limit={6} showViewAll showImages />

      {/* 6 — Why Choose Us */}
      <WhyChooseUs />

      {/* 7 — Our Doctors preview */}
      <Doctors limit={3} />

      {/* 8 — World-class Facilities */}
      <Facilities />

      {/* 9 — Appointment Process */}
      <AppointmentSection />

      {/* 10 — Patient Testimonials */}
      <Testimonials />

      {/* 11 — CTA Banner */}
      <CTABanner />

      {/* 12 — FAQ */}
      <FAQ />

      {/* 13 — Contact Form */}
      <Contact />
    </>
  );
}
