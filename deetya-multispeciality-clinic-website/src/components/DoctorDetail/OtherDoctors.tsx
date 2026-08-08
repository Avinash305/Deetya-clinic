import { Link } from 'react-router-dom';
import { FiArrowRight, FiAward } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import type { DoctorDetail } from '../../data/doctorsData';
import SectionBackground from '../ui/SectionBackground';

/** "Other Specialists" — link cards for the remaining doctors. */
export default function OtherDoctors({ doctors }: { doctors: DoctorDetail[] }) {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-primary-50/30 relative overflow-hidden">
      <SectionBackground
        blobs={[
          'top-0 right-0 w-80 h-80 bg-primary-100/20 -translate-y-1/2 translate-x-1/3 blur-3xl',
          'bottom-0 left-0 w-60 h-60 bg-accent-100/15 translate-y-1/2 -translate-x-1/4 blur-3xl',
        ]}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-primary-700">Our Team</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary-950 mb-3 leading-tight">
            Other{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Specialists
            </span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Meet our other highly qualified and experienced specialists
          </p>
        </div>

        {/* Doctor cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {doctors.map((doc, i) => (
            <Link
              key={i}
              to={`/doctors/${doc.slug}`}
              className="group bg-white rounded-xl sm:rounded-2xl border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Doctor photo — displayed in full (natural aspect ratio) */}
              <div className="relative overflow-hidden bg-primary-50">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
                {/* Experience badge */}
                <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md">
                  <FiAward className="w-3 h-3 text-warm-500" />
                  <span className="text-[10px] sm:text-xs font-bold text-primary-900">
                    {doc.experience}
                  </span>
                </div>
              </div>

              {/* Content — flex column so cards in a row stretch to equal height */}
              <div className="flex-1 flex flex-col p-4 sm:p-5">
                <div
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r ${doc.color} text-white text-[10px] font-semibold mb-2 shadow-sm w-fit`}
                >
                  <FaStar className="w-2.5 h-2.5" />
                  {doc.specialization}
                </div>
                <h3 className="font-bold text-primary-950 text-sm sm:text-base lg:text-lg mb-1 group-hover:text-primary-700 transition-colors">
                  {doc.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
                  {doc.bio.slice(0, 100)}...
                </p>

                {/* View profile CTA — pinned to bottom so all cards align */}
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 flex items-center justify-end">
                  <span className="text-[10px] sm:text-xs font-semibold text-primary-600 group-hover:text-primary-800 group-hover:gap-2 transition-all inline-flex items-center gap-1">
                    View Profile
                    <FiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
