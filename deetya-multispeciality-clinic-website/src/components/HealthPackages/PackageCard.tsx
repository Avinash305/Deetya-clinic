import { motion } from 'framer-motion';
import {
  FiClock,
  FiCheckCircle,
  FiPlusCircle,
  FiCalendar,
  FiArrowRight,
} from 'react-icons/fi';
import { FaFlask, FaTruck, FaFire, FaStar } from 'react-icons/fa';
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
      className="group relative h-full"
    >
      {/* Gradient border wrapper */}
      <div
        className={`rounded-2xl p-px bg-gradient-to-br transition-all duration-500 h-full ${
          compareSelected
            ? 'from-primary-500 via-primary-400 to-accent-500 shadow-xl shadow-primary-500/20'
            : 'from-transparent via-transparent to-transparent group-hover:from-primary-200 group-hover:via-primary-100 group-hover:to-accent-200'
        }`}
      >
        <div className="relative h-full bg-white rounded-[calc(1rem-1px)] overflow-hidden shadow-sm group-hover:shadow-2xl group-hover:shadow-primary-900/10 transition-shadow duration-500">
          {/* ── Top accent strip ── */}
          <div className={`h-1.5 bg-gradient-to-r ${pkg.gradient}`} />

          {/* ── Body ── */}
          <div className="p-4 sm:p-5 flex flex-col">
            {/* Header row: name + discount badge + compare */}
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                {/* Popular / New chip above the name */}
                <div className="flex items-center gap-1.5 mb-1 min-h-[1.375rem]">
                  {pkg.popular && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-warm-500 to-warm-600 text-white text-[10px] font-extrabold shadow-sm shadow-warm-500/30">
                      <FaFire className="w-2 h-2" /> Popular
                    </span>
                  )}
                  {pkg.isNew && !pkg.popular && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white text-[10px] font-extrabold shadow-sm shadow-accent-500/30">
                      ✦ New
                    </span>
                  )}
                </div>

                {/* name */}
                <h3 className="text-base sm:text-lg font-bold text-primary-950 leading-snug group-hover:text-primary-700 transition-colors line-clamp-2">
                  {pkg.name}
                </h3>
              </div>

              {/* discount badge */}
              <div className="shrink-0 text-right">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-extrabold shadow-md shadow-accent-500/30">
                  <FaStar className="w-3 h-3" />
                  {pkg.discountPercent}% OFF
                </span>
              </div>
            </div>

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
              {pkg.homeCollection && (
                <div className="flex items-center gap-1.5 ml-auto">
                  <FaTruck className="w-3.5 h-3.5 text-primary-500" />
                  <span className="text-[11px] text-gray-600 hidden xs:inline">Home</span>
                </div>
              )}
            </div>

            {/* price block — pushes down so cards bottom-align in a row */}
            <div className="mt-3 rounded-xl bg-gradient-to-r from-primary-50/90 to-accent-50/60 px-3.5 py-3 flex-1 flex flex-col justify-center">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-2xl font-extrabold text-primary-950 leading-tight">
                  {formatINR(pkg.offerPrice)}
                </span>
                <span className="text-gray-400 line-through text-xs sm:text-sm font-medium">
                  {formatINR(pkg.originalPrice)}
                </span>
              </div>
              <p className="mt-1 text-[11px] sm:text-xs font-bold text-accent-600">
                Save {formatINR(pkg.moneySaved)}
              </p>
            </div>

            {/* actions */}
            <div className="grid grid-cols-2 gap-2 mt-3.5 shrink-0">
              <button
                onClick={() => onBook(pkg)}
                className={`inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r ${pkg.gradient} text-white text-xs font-bold shadow-lg hover:shadow-xl hover:brightness-110 active:scale-[0.98] transition-all`}
              >
                <FiCalendar className="w-3.5 h-3.5" /> Book Now
              </button>
              <button
                onClick={() => onDetails(pkg)}
                className="group/btn inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-primary-200 text-primary-700 text-xs font-bold hover:bg-primary-50 active:scale-[0.98] transition-all"
              >
                Details
                <FiArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* compare toggle */}
            <div className="flex items-center justify-center mt-3">
              <button
                onClick={() => onToggleCompare(pkg.slug)}
                disabled={compareDisabled && !compareSelected}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold border transition-all ${
                  compareSelected
                    ? 'bg-primary-50 text-primary-700 border-primary-300'
                    : 'text-gray-400 border-gray-200 hover:text-primary-700 hover:border-primary-300'
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
          </div>
        </div>
      </div>
    </motion.article>
  );
}
