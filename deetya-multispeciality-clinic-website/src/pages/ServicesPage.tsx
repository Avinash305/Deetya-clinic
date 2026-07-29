import PageBanner from '../components/PageBanner/PageBanner';
import Services from '../components/Services/Services';
import AppointmentSection from '../components/Appointment/Appointment';
import { pageBannerImages } from '../data/siteData';

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive medical services across 15+ specialities, all under one roof."
        breadcrumbs={[{ label: 'Services' }]}
        bgImage={pageBannerImages.services}
      />
      <Services showImages />
      <AppointmentSection />
    </>
  );
}
