import PageBanner from '../components/PageBanner/PageBanner';
import Contact from '../components/Contact/Contact';
import AppointmentSection from '../components/Appointment/Appointment';
import FAQ from '../components/FAQ/FAQ';
import { pageBannerImages } from '../data/siteData';

export default function ContactPage() {
  return (
    <>
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
