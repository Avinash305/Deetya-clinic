import { useParams, Link, Navigate } from 'react-router-dom';
import { FiArrowLeft, FiCheck, FiPhone, FiCalendar, FiArrowRight } from 'react-icons/fi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { servicesData } from '../data/siteData';
import CTABanner from '../components/CTABanner/CTABanner';
import AppointmentSection from '../components/Appointment/Appointment';
import { clinicInfo } from '../data/siteData';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);
  const { ref: contentRef, isVisible: contentVis } = useScrollAnimation();
  const { ref: highlightsRef, isVisible: highlightsVis } = useScrollAnimation();

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Get related services (other services from the same row)
  const relatedServices = servicesData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* ───── MAIN CONTENT ───── */}
      <section ref={contentRef} className="pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-5 gap-10 lg:gap-16 ${contentVis ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* Left: Main Content (3 cols) */}
            <div className="lg:col-span-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm mb-6 transition-colors group"
              >
                <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to All Services
              </Link>

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white text-xl shadow-lg`}>
                  {service.icon}
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950">{service.title}</h1>
                  <p className="text-gray-500 text-sm mt-0.5">Department at DEETYA Multispeciality Clinic</p>
                </div>
              </div>

              <div>
                {service.longDesc.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-5 text-base lg:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Detail Images */}
              {service.detailImages && service.detailImages.length > 1 && (
                <div className="grid xs:grid-cols-2 gap-4 mt-10">
                  {service.detailImages.map((img, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={img}
                        alt={`${service.title} - Image ${i + 1}`}
                        className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Highlights Sidebar (2 cols) */}
            <div className="lg:col-span-2">
              <div
                ref={highlightsRef}
                className={`sticky top-28 ${highlightsVis ? 'animate-fade-in-right' : 'opacity-0'}`}
              >
                {/* Highlights Card */}
                <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100 p-6 lg:p-8 shadow-lg mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-950 mb-1">{service.title}</h3>
                  <p className="text-sm text-gray-500 mb-5">{service.desc}</p>

                  <h4 className="font-bold text-primary-900 text-sm uppercase tracking-wider mb-4">
                    Key Highlights
                  </h4>
                  <ul className="space-y-3">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-accent-100 flex items-center justify-center shrink-0">
                          <FiCheck className="w-3 h-3 text-accent-600" />
                        </div>
                        <span className="text-sm text-gray-600">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-primary-100">
                    <Link
                      to="/contact"
                      className="group w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-600/25 hover:-translate-y-0.5 transition-all"
                    >
                      Book Appointment
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Quick Info Card */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <h4 className="font-bold text-primary-950 mb-4 text-sm uppercase tracking-wider">
                    Need Help?
                  </h4>
                  <div className="space-y-3 text-sm">
                    <a
                      href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <FiPhone className="w-4 h-4 text-primary-500" />
                      <span>{clinicInfo.phone}</span>
                    </a>
                    <div className="flex items-center gap-3 text-gray-600">
                      <FiCalendar className="w-4 h-4 text-primary-500" />
                      <span>Mon-Sat: 8AM - 9PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── RELATED SERVICES ───── */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-primary-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 mb-3">
              Other{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-gray-600 text-base">Explore our other medical specialties</p>
          </div>

          <div className="grid xs:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedServices.map((s, i) => (
              <Link
                key={i}
                to={`/services/${s.slug}`}
                className="group bg-white rounded-xl xs:rounded-2xl border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-32 xs:h-36 sm:h-40 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className={`absolute top-3 left-3 w-9 h-9 rounded-lg bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white shadow-lg`}>
                    {s.icon}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-primary-950 text-sm sm:text-base mb-1">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{s.desc}</p>
                </div>
              </Link>
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
