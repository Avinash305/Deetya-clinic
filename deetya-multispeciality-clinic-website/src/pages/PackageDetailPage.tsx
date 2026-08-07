import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  FiArrowLeft,
  FiCheck,
  FiPhone,
  FiCalendar,
  FiArrowRight,
  FiClock,
  FiFileText,
  FiUser,
  FiDroplet,
  FiHome,
  FiHeart,
} from 'react-icons/fi';
import { FaWhatsapp, FaFlask, FaTruck, FaFire, FaStethoscope } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO/SEO';
import { healthPackagesData, type HealthPackageEntry } from '../data/healthPackagesData';
import { clinicInfo } from '../data/siteData';
import CTABanner from '../components/CTABanner/CTABanner';
import AppointmentSection from '../components/Appointment/Appointment';
import PackageCard from '../components/HealthPackages/PackageCard';
import { MotionConfig } from 'framer-motion';
import BookPackageModal from '../components/HealthPackages/BookPackageModal';
import { formatINR, packageWhatsAppMessage, whatsappHref, telHref } from '../components/HealthPackages/bookingUtils';

export default function PackageDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const pkg = healthPackagesData.find((p) => p.slug === slug);

  // Go to the dedicated Health Packages page
  const goToPackages = () => {
    navigate('/health-packages');
  };
  const [booking, setBooking] = useState<{ pkg: HealthPackageEntry; mode: 'book' | 'callback' } | null>(null);
  const { ref: contentRef, isVisible: contentVis } = useScrollAnimation();
  const { ref: highlightsRef, isVisible: highlightsVis } = useScrollAnimation();

  if (!pkg) {
    return <Navigate to="/" replace />;
  }

  // Related packages — same primary category first, then the rest
  const relatedPackages = healthPackagesData
    .filter((p) => p.slug !== pkg.slug)
    .sort((a, b) => {
      const aMatch = a.categories[0] === pkg.categories[0] ? 0 : 1;
      const bMatch = b.categories[0] === pkg.categories[0] ? 0 : 1;
      return aMatch - bMatch || a.displayOrder - b.displayOrder;
    })
    .slice(0, 3);

  const packageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: pkg.name,
    description: `${pkg.name} with ${pkg.totalTests} tests at DEETYA Multispeciality Clinic. Includes ${pkg.testGroups.map((g) => g.name).join(', ')}.`,
    url: `https://deetyaclinic.com/#/packages/${pkg.slug}`,
    brand: { '@type': 'Brand', name: 'DEETYA Multispeciality Clinic' },
    offers: {
      '@type': 'Offer',
      price: pkg.offerPrice,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  };

  const facilityChips = [
    { label: 'Doctor Consultation', on: pkg.doctorConsultation, icon: <FaStethoscope className="w-3.5 h-3.5" /> },
    { label: 'ECG', on: pkg.ecg, icon: <FiHeart className="w-3.5 h-3.5" /> },
    { label: 'ECHO', on: pkg.echo, icon: <FiHeart className="w-3.5 h-3.5" /> },
    { label: 'TMT', on: pkg.tmt, icon: <FiHeart className="w-3.5 h-3.5" /> },
    { label: 'Ultrasound', on: pkg.ultrasound, icon: <FaFlask className="w-3.5 h-3.5" /> },
    { label: 'Chest X-Ray', on: pkg.xray, icon: <FiFileText className="w-3.5 h-3.5" /> },
    { label: 'Vitamin Tests', on: pkg.vitaminTests, icon: <FiHome className="w-3.5 h-3.5" /> },
    { label: 'Kidney Tests', on: pkg.kidneyTests, icon: <FaFlask className="w-3.5 h-3.5" /> },
    { label: 'Liver Tests', on: pkg.liverTests, icon: <FaFlask className="w-3.5 h-3.5" /> },
    { label: 'Blood Sugar', on: pkg.bloodSugarTests, icon: <FiDroplet className="w-3.5 h-3.5" /> },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <SEO
        title={pkg.seoTitle}
        description={pkg.seoDescription}
        canonical={`https://deetyaclinic.com/#/packages/${pkg.slug}`}
        jsonLd={packageJsonLd}
      />

      {/* ───── MAIN CONTENT ───── */}
      <section ref={contentRef} className="pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-5 gap-10 lg:gap-16 ${contentVis ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* Left: Main Content (3 cols) */}
            <div className="lg:col-span-3">
              <button
                onClick={goToPackages}
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-xs xs:text-sm mb-6 transition-colors group"
              >
                <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to All Packages
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center text-white text-xl shadow-lg`}>
                  {pkg.icon}
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 leading-tight">{pkg.name}</h1>
                  <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${pkg.badgeClass} text-white`}>
                      {pkg.categories.join(' • ')}
                    </span>
                    {pkg.homeCollection && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent-700 bg-accent-50 px-2 py-0.5 rounded-full">
                        <FaTruck className="w-2.5 h-2.5" /> Home Collection
                      </span>
                    )}
                    {pkg.popular && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-warm-700 bg-warm-50 px-2 py-0.5 rounded-full">
                        <FaFire className="w-2.5 h-2.5" /> Popular
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-r from-primary-50 to-white rounded-2xl p-6 mb-6 border border-primary-100">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-gray-400 line-through text-lg">₹{pkg.originalPrice.toLocaleString('en-IN')}</span>
                  <span className="text-3xl sm:text-4xl font-bold text-primary-950">{formatINR(pkg.offerPrice)}</span>
                  <span className={`px-3 py-1 bg-gradient-to-r ${pkg.gradient} rounded-lg text-white text-sm font-bold`}>
                    {pkg.discountPercent}% OFF
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaFlask className="w-4 h-4 text-primary-500" />
                    <span><span className="font-semibold">{pkg.totalTests}</span> Tests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiClock className="w-4 h-4 text-primary-500" />
                    <span>{pkg.reportDelivery}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiDroplet className="w-4 h-4 text-accent-600" />
                    <span>Save <span className="font-bold text-accent-600">{formatINR(pkg.moneySaved)}</span></span>
                  </div>
                </div>
              </div>

              {/* Quick facts */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {[
                  { icon: <FiClock className="w-4 h-4" />, label: 'Duration', value: pkg.duration },
                  { icon: <FiUser className="w-4 h-4" />, label: 'Recommended Age', value: pkg.recommendedAge },
                  { icon: <FiUser className="w-4 h-4" />, label: 'Recommended For', value: pkg.recommendedGender },
                  { icon: <FiDroplet className="w-4 h-4" />, label: 'Fasting', value: pkg.fastingRequired ? 'Yes (8–10 hrs)' : 'Not required' },
                  { icon: <FiHome className="w-4 h-4" />, label: 'Sample', value: pkg.homeCollection ? 'Home collection available' : 'At clinic' },
                  { icon: <FaStethoscope className="w-4 h-4" />, label: 'Consultation', value: pkg.doctorConsultation ? 'Included' : 'On request' },
                ].map((f, i) => (
                  <div key={i} className="rounded-xl border border-gray-100 bg-gray-50/50 p-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-2">{f.icon}</div>
                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">{f.label}</p>
                    <p className="text-xs font-bold text-primary-950 mt-0.5">{f.value}</p>
                  </div>
                ))}
              </div>

              {/* About */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-primary-950 mb-4">About This Package</h2>
                <p className="text-gray-600 leading-relaxed text-sm xs:text-base">{pkg.description}</p>
              </div>

              {/* Who should take + preparation */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="rounded-2xl border border-primary-100 bg-primary-50/40 p-5">
                  <h3 className="text-base font-bold text-primary-950 mb-3">Who Should Take This Package</h3>
                  <ul className="space-y-2">
                    {pkg.whoShouldTake.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center shrink-0">
                          <FiCheck className="w-3 h-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-warm-100 bg-warm-50/40 p-5">
                  <h3 className="text-base font-bold text-primary-950 mb-3">Preparation Instructions</h3>
                  <ul className="space-y-2">
                    {pkg.preparation.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-warm-100 text-warm-700 flex items-center justify-center shrink-0">
                          <FiCheck className="w-3 h-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Included chips */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-primary-950 mb-4">Included In This Package</h2>
                <div className="flex flex-wrap gap-2">
                  {facilityChips.map((f) => (
                    <span
                      key={f.label}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-semibold border ${
                        f.on ? 'bg-accent-50 text-accent-700 border-accent-200' : 'bg-gray-50 text-gray-400 border-gray-100 line-through decoration-gray-300'
                      }`}
                    >
                      {f.icon}
                      {f.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Complete test list */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-primary-950 mb-4">Complete Test List</h2>
                <div className="rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
                  {pkg.testGroups.map((group, gi) => (
                    <div key={gi} className="px-4 py-3 bg-white hover:bg-primary-50/40 transition-colors">
                      <div className="flex items-start gap-2.5">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center shrink-0">
                          <FiCheck className="w-3 h-3" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-primary-950">{group.name}</p>
                          {group.tests && (
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {group.tests.map((t, ti) => (
                                <span key={ti} className="inline-flex items-center px-2 py-0.5 rounded-md bg-primary-50 text-primary-800 text-[11px] font-medium">
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              {pkg.addOns && pkg.addOns.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-primary-950 mb-4">Add-On Packages</h2>
                  <div className="space-y-2">
                    {pkg.addOns.map((a, i) => (
                      <div key={i} className="flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-warm-50 to-white border border-warm-100">
                        <span className="text-sm font-semibold text-primary-950">{a.name}</span>
                        <span className="text-sm font-bold text-warm-600">{a.price !== undefined ? `+ ${formatINR(a.price)}` : 'Ask Us'}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Booking Sidebar (2 cols) */}
            <div className="lg:col-span-2">
              <div ref={highlightsRef} className={`sticky top-28 ${highlightsVis ? 'animate-fade-in-right' : 'opacity-0'}`}>
                {/* Booking Card */}
                <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100 p-6 lg:p-8 shadow-lg mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center text-white mb-4`}>
                    {pkg.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-950 mb-1">{pkg.name}</h3>
                  <p className="text-xs xs:text-sm text-gray-500 mb-5">
                    {pkg.totalTests} Tests • {pkg.reportDelivery}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Package Price</span>
                      <span className="text-gray-400 line-through text-sm">{formatINR(pkg.originalPrice)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">You Save</span>
                      <span className="text-accent-600 font-semibold text-sm">
                        {formatINR(pkg.moneySaved)} ({pkg.discountPercent}% OFF)
                      </span>
                    </div>
                    <div className="h-px bg-primary-100" />
                    <div className="flex items-center justify-between">
                      <span className="text-primary-950 font-bold">Total Payable</span>
                      <span className="text-2xl font-bold text-primary-950">{formatINR(pkg.offerPrice)}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setBooking({ pkg, mode: 'book' })}
                    className="group w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-600/25 hover:-translate-y-0.5 transition-all mb-3"
                  >
                    Book Now
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <a
                      href={whatsappHref(packageWhatsAppMessage(pkg))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white text-xs font-bold shadow-lg shadow-green-500/25 transition-all"
                    >
                      <FaWhatsapp className="w-3.5 h-3.5" /> WhatsApp
                    </a>
                    <a
                      href={telHref()}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border-2 border-primary-200 text-primary-700 text-xs font-bold hover:bg-primary-50 transition-all"
                    >
                      <FiPhone className="w-3.5 h-3.5" /> Call Now
                    </a>
                  </div>

                  <button
                    onClick={() => setBooking({ pkg, mode: 'callback' })}
                    className="w-full px-5 py-3 border border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 transition-all text-sm"
                  >
                    Request Callback
                  </button>
                </div>

                {/* Quick Info Card */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <h4 className="font-bold text-primary-950 mb-4 text-[10px] xs:text-xs sm:text-sm uppercase tracking-wider">Need Help?</h4>
                  <div className="space-y-3 text-xs xs:text-sm">
                    <a href={telHref()} className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors">
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
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Packages</span>
            </h2>
            <p className="text-gray-600 text-xs xs:text-sm sm:text-base">Explore our other health checkup packages</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6">
            {relatedPackages.map((p, i) => (
              <PackageCard
                key={p.slug}
                pkg={p}
                index={i}
                compareSelected={false}
                compareDisabled={false}
                onBook={(bp) => setBooking({ pkg: bp, mode: 'book' })}
                onDetails={(dp) => navigate(`/packages/${dp.slug}`)}
                onToggleCompare={() => undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───── APPOINTMENT ───── */}
      <AppointmentSection />

      {/* ───── CTA ───── */}
      <CTABanner />

      {booking && (
        <BookPackageModal pkg={booking.pkg} mode={booking.mode} onClose={() => setBooking(null)} />
      )}
    </MotionConfig>
  );
}
