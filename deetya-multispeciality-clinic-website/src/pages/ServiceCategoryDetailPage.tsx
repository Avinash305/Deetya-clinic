import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiClock, FiZap, FiPhone } from 'react-icons/fi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO/SEO';
import AppointmentSection from '../components/Appointment/Appointment';
import CTABanner from '../components/CTABanner/CTABanner';
import SubServiceModal from '../components/NewServiceCategories/SubServiceModal';
import { newServiceCategories } from '../data/newServiceCategoriesData';
import type { ServiceSubItem } from '../data/newServiceCategoriesData';
import { telHref } from '../utils/links';
import { formatINR } from '../components/HealthPackages/bookingUtils';

const discountPercent = (item: ServiceSubItem): number =>
  item.offerPrice && item.originalPrice
    ? Math.round((1 - item.offerPrice / item.originalPrice) * 100)
    : 0;

export default function ServiceCategoryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = newServiceCategories.find((c) => c.slug === slug);
  const { ref: listRef, isVisible: listVis } = useScrollAnimation();
  const [selected, setSelected] = useState<ServiceSubItem | null>(null);

  if (!category) {
    return <Navigate to="/services" replace />;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: category.name,
    description: `${category.name} at DEETYA Multispeciality Clinic, JP Nagar, Bangalore.`,
    url: `https://deetyahealthcare.com/#/services/category/${category.slug}`,
    provider: {
      '@type': 'MedicalBusiness',
      name: 'DEETYA Multispeciality Clinic',
    },
  };

  return (
    <>
      <SEO
        title={`${category.name} - Home Care Services`}
        description={`${category.name} services at home in Bengaluru — ${category.services.length} services available with transparent pricing. Book now at ₹299, pay the rest after service. Call +91-8050454140.`}
        canonical={`https://deetyahealthcare.com/#/services/category/${category.slug}`}
        jsonLd={jsonLd}
      />

      {/* ───── HEADER / HERO ───── */}
      <section className="pt-10 pb-12 lg:pt-16 lg:pb-16 bg-gradient-to-b from-primary-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-xs xs:text-sm mb-6 transition-colors group"
          >
            <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Services
          </Link>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-14 items-center">
            {/* Single category image at the top */}
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-primary-900/10">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full aspect-[3/2] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 text-warm-700 text-[11px] font-bold shadow">
                  <FiZap className="w-3 h-3" aria-hidden="true" />
                  {category.duration}
                </span>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 leading-tight">
                {category.name}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                <span className="inline-flex items-center gap-1 font-semibold text-warm-700">
                  <FiZap className="w-3.5 h-3.5" aria-hidden="true" />
                  {category.duration}
                </span>
                <span className="inline-flex items-center gap-1">
                  <FiClock className="w-3.5 h-3.5" aria-hidden="true" />
                  {category.services.length} services available
                </span>
              </div>
              <p className="mt-4 text-gray-600 text-sm xs:text-base max-w-xl">
                Professional {category.name.toLowerCase()} services at home with transparent pricing.
                Book now at ₹299 and pay the rest after the service.
              </p>
              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-600/25 hover:-translate-y-0.5 transition-all"
              >
                Book a Service
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SERVICE CARDS ───── */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={listRef}
            className="grid grid-cols-1 min-[320px]:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6"
          >
            {category.services.map((item, i) => {
              const hasPrice = item.offerPrice != null;
              const openDetails = () => setSelected(item);
              return (
                <div
                  key={i}
                  className={`flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary-100 active:scale-[0.99] transition-all duration-300 overflow-hidden ${
                    listVis ? 'animate-fade-in-right' : 'opacity-0'
                  }`}
                >
                  {/* Content */}
                  <div className="p-3 xs:p-3.5 sm:p-5 flex flex-col flex-1">
                    <h2 className="text-[13px] xs:text-sm sm:text-base font-bold text-primary-950 leading-snug">{item.title}</h2>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1.5 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="mt-auto">
                      {/* Pricing */}
                      <div className="flex items-center gap-1.5 sm:gap-2.5 mt-3 sm:mt-4 flex-wrap">
                        {hasPrice ? (
                          <>
                            <span className="text-sm sm:text-lg font-extrabold text-primary-950">{formatINR(item.offerPrice!)}</span>
                            <span className="text-[11px] sm:text-sm text-gray-400 line-through">{formatINR(item.originalPrice!)}</span>
                            <span className="px-1.5 sm:px-2 py-1 text-[10px] sm:text-[11px] font-bold tracking-wide bg-accent-100 text-accent-700 rounded-md">
                              {discountPercent(item)}% OFF
                            </span>
                          </>
                        ) : (
                          <span className="text-xs sm:text-sm font-semibold text-gray-400">Price not available</span>
                        )}
                      </div>

                      {/* View Details → popup */}
                      <button
                        type="button"
                        onClick={openDetails}
                        className="mt-3 sm:mt-4 w-full inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white text-[11px] xs:text-xs sm:text-sm uppercase font-bold py-2 sm:py-2.5 rounded-xl active:scale-[0.98] transition-all shadow-sm cursor-pointer"
                      >
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* Booking strip — calls the clinic directly */}
                  {hasPrice ? (
                    <a
                      href={telHref()}
                      className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-0.5 sm:gap-x-1.5 sm:gap-y-0.5 py-2.5 px-3 bg-warm-50 text-gray-600 text-[11px] sm:text-xs font-medium hover:bg-warm-100 transition-colors text-center leading-tight"
                    >
                      <span className="inline-flex items-center gap-1">
                        <FiPhone className="w-3.5 h-3.5 text-primary-500 shrink-0" aria-hidden="true" />
                        <span className="font-bold">Book now at ₹299</span>
                      </span>
                      <span>· Pay rest after service</span>
                    </a>
                  ) : (
                    <a
                      href={telHref()}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-warm-50 text-gray-600 text-[11px] sm:text-xs font-medium hover:bg-warm-100 transition-colors"
                    >
                      <FiPhone className="w-3.5 h-3.5 text-primary-500 shrink-0" aria-hidden="true" />
                      <span className="font-bold">Speak to our Experts</span>
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── APPOINTMENT ───── */}
      <AppointmentSection />

      {/* ───── CTA ───── */}
      <CTABanner />

      {/* ───── SUB-SERVICE POPUP ───── */}
      <AnimatePresence>
        {selected && (
          <SubServiceModal item={selected} categoryName={category.name} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
