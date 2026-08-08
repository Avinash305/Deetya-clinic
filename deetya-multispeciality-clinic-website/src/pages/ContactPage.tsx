import PageBanner from '../components/PageBanner/PageBanner';
import Contact from '../components/Contact/Contact';
import AppointmentSection from '../components/Appointment/Appointment';
import FAQ from '../components/FAQ/FAQ';
import SEO from '../components/SEO/SEO';
import { pageBannerImages } from '../data/siteData';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with DEETYA Multispeciality Clinic in JP Nagar, Bangalore. Call +91 80504 54140, email deetyamultispecialityclinic26@gmail.com, or visit #23 60 Feet Main Road, Avalahali - BDA Layout Road, Srinivas Reddy Layout, Avalahalli, Anjanapura Post, JP Nagar 9th Phase, Bangalore - 560108."
        canonical="https://deetyahealthcare.com/#/contact"
      />
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with us for appointments, queries, or emergency assistance."
        breadcrumbs={[{ label: 'Contact' }]}
        bgImage={pageBannerImages.contact}
      />
      <Contact />
      <AppointmentSection />
      <FAQ />
    </>
  );
}
