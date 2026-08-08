import PageBanner from '../components/PageBanner/PageBanner';
import Services from '../components/Services/Services';
import AppointmentSection from '../components/Appointment/Appointment';
import SEO from '../components/SEO/SEO';
import { pageBannerImages } from '../data/siteData';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Comprehensive medical services at DEETYA Multispeciality Clinic: General Medicine, Gynecology, Orthopedics, Pediatrics, ENT, Laboratory, IPD, and Pharmacy. Expert care in JP Nagar, Bangalore."
        canonical="https://deetyahealthcare.com/#/services"
      />
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive medical services across 5 specialities with in-house Laboratory, IPD, OPD, and Pharmacy."
        breadcrumbs={[{ label: 'Services' }]}
        bgImage={pageBannerImages.services}
      />
      <Services showImages />
      <AppointmentSection />
    </>
  );
}
