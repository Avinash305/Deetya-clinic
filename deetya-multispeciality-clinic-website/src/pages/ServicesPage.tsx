import PageBanner from '../components/PageBanner/PageBanner';
import Services from '../components/Services/Services';
import AppointmentSection from '../components/Appointment/Appointment';
import { pageBannerImages } from '../data/siteData';

export default function ServicesPage() {
  return (
    <>
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
