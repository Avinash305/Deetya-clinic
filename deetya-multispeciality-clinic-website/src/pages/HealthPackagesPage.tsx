import HealthPackages from '../components/HealthPackages/HealthPackages';
import HealthPackagesHero from '../components/HealthPackages/HealthPackagesHero';
import AppointmentSection from '../components/Appointment/Appointment';
import CTABanner from '../components/CTABanner/CTABanner';
import SEO from '../components/SEO/SEO';

export default function HealthPackagesPage() {
  return (
    <>
      <SEO
        title="Health Packages"
        description="Explore comprehensive health checkup packages & diagnostic profiles at DEETYA Multispeciality Clinic: full body checkups, women's health, senior citizen, diabetic, cardiac & cancer screening with home sample collection and same-day reports in JP Nagar, Bangalore."
        canonical="https://deetyahealthcare.com/#/health-packages"
      />
      <HealthPackagesHero />
      <HealthPackages />
      <AppointmentSection />
      <CTABanner />
    </>
  );
}
