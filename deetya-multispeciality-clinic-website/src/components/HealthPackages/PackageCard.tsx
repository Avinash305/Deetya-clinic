import { motion } from 'framer-motion';
import {
  FiClock,
  FiCheckCircle,
  FiPlusCircle,
  FiEye,
  FiCalendar,
} from 'react-icons/fi';
import { FaFlask, FaTruck, FaFire } from 'react-icons/fa';
import type { HealthPackageEntry } from '../../data/healthPackagesData';
import { formatINR } from './bookingUtils';

interface PackageCardProps {
  pkg: HealthPackageEntry;
  index: number;
  compareSelected: boolean;
  compareDisabled: boolean;
  onBook: (pkg: HealthPackageEntry) => void;
  onDetails: (pkg: HealthPackageEntry) => void;
  onToggleCompare: (slug: string) => void;
}

export default function PackageCard({
  pkg,
  index,
  compareSelected,
  compareDisabled,
  onBook,
  onDetails,
  onToggleCompare,
}: PackageCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.5), ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      {/* Gradient border wrapper */}
      <div
        className={`rounded-2xl p-px bg-gradient-to-br transition-all duration-500 ${
          compareSelected
            ? 'from-primary-500 via-primary-400 to-accent-500 shadow-xl shadow-primary-500/20'
            : 'from-transparent via-transparent to-transparent group-hover:from-primary-200 group-hover:via-primary-100 group-hover:to-accent-200'
        }`}
      >
        <div className="relative h-full bg-white rounded-[calc(1rem-1px)] overflow-hidden shadow-sm group-hover:shadow-2xl group-hover:shadow-primary-900/10 transition-shadow duration-500">
          {/* ── Gradient header ── */}
          <div className={`relative h-24 bg-gradient-to-br ${pkg.gradient}`}>
            {/* decorative blobs (clipped to the header so the Popular/New badge below can overhang fully visible) */}
            <div className="absolute inset-0 overflow-hidden rounded-[calc(1rem-1px)]">
              <div className="absolute -top-8 -right-6 w-28 h-28 rounded-full bg-white/10 blur-xl" />
              <div className="absolute -bottom-10 -left-4 w-24 h-24 rounded-full bg-black/10 blur-lg" />
            </div>

            {/* icon */}
            <div className="absolute left-4 top-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg">
              {pkg.icon}
            </div>

            {/* badges */}
            <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
              {pkg.homeCollection && (
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 backdrop-blur text-primary-800 text-[10px] font-bold shadow">
                  <FaTruck className="w-2.5 h-2.5" /> Home Collection
                </span>
              )}
            </div>

            {pkg.popular && (
              <div className="absolute -bottom-2.5 left-4">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-warm-500 to-warm-600 text-white text-[10px] font-extrabold shadow-lg shadow-warm-500/40 animate-bounce-soft">
                  <FaFire className="w-2.5 h-2.5" /> Popular
                </span>
              </div>
            )}
            {pkg.isNew && !pkg.popular && (
              <div className="absolute -bottom-2.5 left-4">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white text-[10px] font-extrabold shadow-lg shadow-accent-500/40">
                  ✦ New
                </span>
              </div>
            )}
          </div>

          {/* ── Body ── */}
          <div className="p-4 sm:p-5">
            {/* category + compare */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase ${pkg.badgeClass} text-white`}
              >
                {pkg.categories[0]}
              </span>
              <button
                onClick={() => onToggleCompare(pkg.slug)}
                disabled={compareDisabled && !compareSelected}
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold border transition-all ${
                  compareSelected
                    ? 'bg-primary-50 text-primary-700 border-primary-300'
                    : 'text-gray-500 border-gray-200 hover:border-primary-300 hover:text-primary-700'
                } ${compareDisabled && !compareSelected ? 'opacity-40 cursor-not-allowed' : ''}`}
                aria-pressed={compareSelected}
              >
                {compareSelected ? (
                  <>
                    <FiCheckCircle className="w-3 h-3" /> Comparing
                  </>
                ) : (
                  <>
                    <FiPlusCircle className="w-3 h-3" /> Compare
                  </>
                )}
              </button>
            </div>

            {/* name */}
            <h3 className="text-base sm:text-lg font-bold text-primary-950 leading-snug group-hover:text-primary-700 transition-colors line-clamp-2 min-h-[2.5rem]">
              {pkg.name}
            </h3>

            {/* short description */}
            <p className="text-xs text-gray-500 leading-relaxed mt-1.5 line-clamp-2 min-h-[2.25rem]">
              {pkg.shortDescription}
            </p>

            {/* stats row */}
            <div className="flex items-center gap-4 mt-3 pt-3 border-t border-dashed border-gray-100">
              <div className="flex items-center gap-1.5">
                <FaFlask className="w-3.5 h-3.5 text-primary-500" />
                <span className="text-[11px] text-gray-600">
                  <span className="font-bold text-primary-950">{pkg.totalTests}</span> Tests
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiClock className="w-3.5 h-3.5 text-accent-600" />
                <span className="text-[11px] text-gray-600 line-clamp-1">{pkg.reportDelivery.replace('Same-day reports ', '')}</span>
              </div>
            </div>

            {/* price block */}
            <div className="mt-3 rounded-xl bg-gradient-to-r from-primary-50/90 to-accent-50/60 p-3">
              <div className="flex items-end justify-between gap-2 flex-wrap">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 line-through text-xs sm:text-sm font-medium">
                      {formatINR(pkg.originalPrice)}
                    </span>
                    <span className="text-[10px] font-extrabold text-accent-700 bg-accent-100 px-1.5 py-0.5 rounded-md">
                      {pkg.discountPercent}% OFF
                    </span>
                  </div>
                  <p className="text-2xl font-extrabold text-primary-950 leading-tight mt-0.5">
                    {formatINR(pkg.offerPrice)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-400">You Save</p>
                  <p className="text-sm font-bold text-accent-600">{formatINR(pkg.moneySaved)}</p>
                </div>
              </div>
            </div>

            {/* actions */}
            <div className="grid grid-cols-2 gap-2 mt-3">
              <button
                onClick={() => onBook(pkg)}
                className={`inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r ${pkg.gradient} text-white text-xs font-bold shadow-lg hover:shadow-xl hover:brightness-110 active:scale-[0.98] transition-all`}
              >
                <FiCalendar className="w-3.5 h-3.5" /> Book Now
              </button>
              <button
                onClick={() => onDetails(pkg)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-primary-200 text-primary-700 text-xs font-bold hover:bg-primary-50 active:scale-[0.98] transition-all"
              >
                <FiEye className="w-3.5 h-3.5" /> View Details
              </button>
            </div>

          </div>

          {/* bottom accent strip */}
          <div className={`h-1 bg-gradient-to-r ${pkg.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        </div>
      </div>
    </motion.article>
  );
}
