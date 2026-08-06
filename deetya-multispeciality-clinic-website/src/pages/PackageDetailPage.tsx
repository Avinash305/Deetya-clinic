import { useParams, Link, Navigate } from 'react-router-dom';
import {
  FiArrowLeft,
  FiCheck,
  FiPhone,
  FiCalendar,
  FiArrowRight,
  FiClock,
  FiFileText,
} from 'react-icons/fi';
import { FaClipboardCheck, FaFlask } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO/SEO';
import { checkupPackagesData } from '../data/checkupPackagesData';
import { clinicInfo } from '../data/siteData';
import CTABanner from '../components/CTABanner/CTABanner';
import AppointmentSection from '../components/Appointment/Appointment';
import PackageCard from '../components/PackageCard/PackageCard';

export default function PackageDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const pkg = checkupPackagesData.find((p) => p.slug === slug);
  const { ref: contentRef, isVisible: contentVis } = useScrollAnimation();
  const { ref: highlightsRef, isVisible: highlightsVis } = useScrollAnimation();

  if (!pkg) {
    return <Navigate to="/#checkup-packages" replace />;
  }

  // Get related packages (other packages from the same list)
  const relatedPackages = checkupPackagesData
    .filter((p) => p.slug !== pkg.slug)
    .slice(0, 3);

  // JSON-LD structured data for this package
  const packageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: pkg.name,
    description: `${pkg.name} with ${pkg.parameters} parameters at DEETYA Multispeciality Clinic`,
    url: `https://deetyaclinic.com/#/packages/${pkg.slug}`,
    brand: {
      '@type': 'Brand',
      name: 'DEETYA Multispeciality Clinic',
    },
    offers: {
      '@type': 'Offer',
      price: pkg.discountedPrice,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <SEO
        title={`${pkg.name} - DEETYA Clinic`}
        description={`${pkg.name} at DEETYA Multispeciality Clinic with ${pkg.parameters} parameters. Original price ₹${pkg.originalPrice.toLocaleString('en-IN')}, now at ₹${pkg.discountedPrice.toLocaleString('en-IN')} (${pkg.discountPercent}% OFF). Call +91-8050454140.`}
        canonical={`https://deetyaclinic.com/#/packages/${pkg.slug}`}
        jsonLd={packageJsonLd}
      />

      {/* ───── MAIN CONTENT ───── */}
      <section ref={contentRef} className="pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid lg:grid-cols-5 gap-10 lg:gap-16 ${
              contentVis ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            {/* Left: Main Content (3 cols) */}
            <div className="lg:col-span-3">
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-xs xs:text-sm mb-6 transition-colors group"
              >
                <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to All Packages
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center text-white text-xl shadow-lg`}
                >
                  <FaFlask className="w-7 h-7" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950">
                    {pkg.name}
                  </h1>
                  <p className="text-gray-500 text-xs xs:text-sm mt-0.5">
                    Health Checkup Package at DEETYA Multispeciality Clinic
                  </p>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="bg-gradient-to-r from-primary-50 to-white rounded-2xl p-6 mb-8 border border-primary-100">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-gray-400 line-through text-lg">
                    ₹{pkg.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-3xl sm:text-4xl font-bold text-primary-950">
                    ₹{pkg.discountedPrice.toLocaleString('en-IN')}
                  </span>
                  <span
                    className={`px-3 py-1 bg-gradient-to-r ${pkg.gradient} rounded-lg text-white text-sm font-bold`}
                  >
                    {pkg.discountPercent}% OFF
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaClipboardCheck className="w-4 h-4 text-primary-500" />
                    <span>
                      <span className="font-semibold">{pkg.parameters}</span>{' '}
                      Parameters
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiClock className="w-4 h-4 text-primary-500" />
                    <span>{pkg.reportDelivery}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-primary-950 mb-4">
                  About This Package
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm xs:text-base lg:text-lg">
                  The <span className="font-semibold">{pkg.name}</span> is a
                  comprehensive health screening package designed to help you
                  monitor your overall health with {pkg.parameters} diagnostic
                  parameters. This package includes essential tests to detect
                  potential health issues early, enabling timely intervention
                  and better health outcomes.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm xs:text-base lg:text-lg mt-4">
                  Our in-house laboratory ensures quick and accurate results,
                  with reports delivered as per the package specifications. The
                  package is priced at just{' '}
                  <span className="font-bold text-primary-700">
                    ₹{pkg.discountedPrice.toLocaleString('en-IN')}
                  </span>{' '}
                  (original price ₹
                  {pkg.originalPrice.toLocaleString('en-IN')}), offering a
                  savings of {pkg.discountPercent}%.
                </p>
              </div>

              {/* Tests Included */}
              {pkg.includes && pkg.includes.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-primary-950 mb-4">
                    Tests Included
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {pkg.includes.map((test, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 bg-primary-50/50 rounded-xl"
                      >
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-accent-100 flex items-center justify-center shrink-0">
                          <FiCheck className="w-3 h-3 text-accent-600" />
                        </div>
                        <span className="text-sm text-gray-700">{test}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Booking Sidebar (2 cols) */}
            <div className="lg:col-span-2">
              <div
                ref={highlightsRef}
                className={`sticky top-28 ${
                  highlightsVis ? 'animate-fade-in-right' : 'opacity-0'
                }`}
              >
                {/* Booking Card */}
                <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100 p-6 lg:p-8 shadow-lg mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center text-white mb-4`}
                  >
                    <FaFlask className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-950 mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs xs:text-sm text-gray-500 mb-5">
                    {pkg.parameters} Parameters • {pkg.reportDelivery}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Package Price</span>
                      <span className="text-gray-400 line-through text-sm">
                        ₹{pkg.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">You Save</span>
                      <span className="text-accent-600 font-semibold text-sm">
                        ₹
                        {(
                          pkg.originalPrice - pkg.discountedPrice
                        ).toLocaleString('en-IN')}{' '}
                        ({pkg.discountPercent}% OFF)
                      </span>
                    </div>
                    <div className="h-px bg-primary-100" />
                    <div className="flex items-center justify-between">
                      <span className="text-primary-950 font-bold">
                        Total Payable
                      </span>
                      <span className="text-2xl font-bold text-primary-950">
                        ₹{pkg.discountedPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="group w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-600/25 hover:-translate-y-0.5 transition-all mb-3"
                  >
                    Book Package
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button className="w-full px-5 py-3 border-2 border-primary-200 text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all">
                    Add to Cart
                  </button>
                </div>

                {/* Quick Info Card */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <h4 className="font-bold text-primary-950 mb-4 text-[10px] xs:text-xs sm:text-sm uppercase tracking-wider">
                    Need Help?
                  </h4>
                  <div className="space-y-3 text-xs xs:text-sm">
                    <a
                      href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <FiPhone className="w-4 h-4 text-primary-500" />
                      <span>{clinicInfo.phone}</span>
                    </a>
                    <div className="flex items-center gap-3 text-gray-600">
                      <FiCalendar className="w-4 h-4 text-primary-500" />
                      <span>Mon-Sat: 7AM - 11PM</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <FiFileText className="w-4 h-4 text-primary-500" />
                      <span>{pkg.reportDelivery}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── RELATED PACKAGES ───── */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 mb-3">
              Other{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Packages
              </span>
            </h2>
            <p className="text-gray-600 text-xs xs:text-sm sm:text-base">
              Explore our other health checkup packages
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6">
            {relatedPackages.map((p, i) => (
              <PackageCard key={p.slug} pkg={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── APPOINTMENT ───── */}
      <AppointmentSection />

      {/* ───── CTA ───── */}
      <CTABanner />
    </>
  );
}
