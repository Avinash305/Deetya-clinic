import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { FiSearch, FiX, FiChevronDown, FiGrid, FiSliders, FiArrowUpRight } from 'react-icons/fi';
import {
  healthPackagesData,
  packageCategories,
  sortOptions,
  type HealthPackageEntry,
  type HealthPackageCategory,
  type SortValue,
} from '../../data/healthPackagesData';
import { clinicInfo } from '../../data/siteData';
import PackageCard from './PackageCard';
import BookPackageModal from './BookPackageModal';
import CompareModal from './CompareModal';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const MAX_COMPARE = 3;
const CATEGORY_ICONS: Record<string, string> = {
  'General Health': '🩺',
  Women: '🌸',
  Men: '🫀',
  'Senior Citizen': '🧓',
  Diabetes: '🩸',
  Heart: '❤️',
  Cancer: '🎗️',
  Kidney: '🫘',
  Fertility: '🧬',
  'Health Profiles': '📋',
};

interface HealthPackagesProps {
  /** Show a "View All Health Packages" link below the grid (used when embedded on the home page) */
  showViewAll?: boolean;
  /** Maximum number of cards to show (preview on the home page). Defaults to all. */
  limit?: number;
}

export default function HealthPackages({ showViewAll = false, limit }: HealthPackagesProps) {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.05);
  const navigate = useNavigate();

  /* ── UI state ── */
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<HealthPackageCategory | 'All'>('All');
  const [sort, setSort] = useState<SortValue>('featured');
  const [showSkeleton, setShowSkeleton] = useState(true);

  /* ── Modal state ── */
  const [booking, setBooking] = useState<{ pkg: HealthPackageEntry; mode: 'book' | 'callback' } | null>(null);
  const [compareOpen, setCompareOpen] = useState(false);
  const [compareIds, setCompareIds] = useState<string[]>([]);

  /* Brief skeleton while the section hydrates */
  useEffect(() => {
    const t = setTimeout(() => setShowSkeleton(false), 550);
    return () => clearTimeout(t);
  }, []);

  const comparePackages = useMemo(
    () => compareIds.map((id) => healthPackagesData.find((p) => p.slug === id)).filter(Boolean) as HealthPackageEntry[],
    [compareIds]
  );

  /* ── Filter + sort pipeline ── */
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const list = healthPackagesData.filter((p) => {
      const inCategory = category === 'All' || p.categories.includes(category);
      const inSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.categories.some((c) => c.toLowerCase().includes(q)) ||
        p.testGroups.some((g) => g.name.toLowerCase().includes(q));
      return inCategory && inSearch;
    });

    switch (sort) {
      case 'price-low':
        return [...list].sort((a, b) => a.offerPrice - b.offerPrice);
      case 'price-high':
        return [...list].sort((a, b) => b.offerPrice - a.offerPrice);
      case 'newest':
        return [...list].sort(
          (a, b) => Number(b.isNew ?? false) - Number(a.isNew ?? false) || b.displayOrder - a.displayOrder
        );
      case 'featured':
      default:
        return [...list].sort((a, b) => Number(b.popular ?? false) - Number(a.popular ?? false) || a.displayOrder - b.displayOrder);
    }
  }, [search, category, sort]);

  /* When used as a home-page preview, show only the first `limit` cards */
  const visiblePackages = useMemo(() => (limit ? filtered.slice(0, limit) : filtered), [filtered, limit]);

  const toggleCompare = (slug: string) => {
    setCompareIds((ids) => {
      if (ids.includes(slug)) return ids.filter((id) => id !== slug);
      if (ids.length >= MAX_COMPARE) return ids;
      return [...ids, slug];
    });
  };

  const clearCompare = () => {
    setCompareIds([]);
    setCompareOpen(false);
  };

  return (
    <MotionConfig reducedMotion="user">
    <section id="health-packages" ref={sectionRef} className="relative py-16 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-primary-100/60 via-accent-100/40 to-warm-100/50 blur-3xl rounded-full" />
        <div className="absolute bottom-10 -left-24 w-72 h-72 rounded-full bg-primary-50 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-72 h-72 rounded-full bg-accent-50 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section header ── */}
        <div className={`text-center mb-8 lg:mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold uppercase tracking-widest">
            <FiGrid className="w-3.5 h-3.5" /> Health Packages
          </span>
          <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-950 leading-tight">
            Premium{' '}
            <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-warm-500 bg-clip-text text-transparent animate-gradient-shift">
              Health Packages
            </span>{' '}
            &amp; Profiles
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {healthPackagesData.length} comprehensive health screening packages &amp; diagnostic profiles — all
            with in-house laboratory accuracy, home sample collection and same-day reports at DEETYA Multispeciality
            Clinic.
          </p>
        </div>

        {/* ── Sticky search / filter / sort bar ── */}
        <div className="sticky top-14 sm:top-16 lg:top-20 z-40 -mx-1 px-1 py-2">
          <div className="glass-card rounded-2xl shadow-lg shadow-primary-900/5 px-3 sm:px-4 py-3">
            {/* Row 1: search + sort + compare */}
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search packages, tests…"
                  className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all placeholder-gray-400"
                  aria-label="Search packages"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
                    aria-label="Clear search"
                  >
                    <FiX className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* sort */}
              <div className="relative shrink-0">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortValue)}
                  className="appearance-none pl-3.5 pr-8 py-2.5 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm font-semibold text-primary-950 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all cursor-pointer"
                  aria-label="Sort packages"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* compare trigger */}
              <button
                onClick={() => compareIds.length > 0 && setCompareOpen(true)}
                disabled={compareIds.length === 0}
                className={`shrink-0 inline-flex items-center gap-1.5 px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                  compareIds.length > 0
                    ? 'bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700'
                    : 'bg-white border-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <FiSliders className="w-4 h-4" />
                <span className="hidden xs:inline">Compare</span>
                {compareIds.length > 0 && (
                  <span className="w-5 h-5 rounded-full bg-white/20 text-[11px] flex items-center justify-center">
                    {compareIds.length}
                  </span>
                )}
              </button>
            </div>

            {/* Row 2: category chips */}
            <div className="flex gap-1.5 mt-2.5 overflow-x-auto no-scrollbar -mx-1 px-1 pb-0.5">
              {(['All', ...packageCategories] as const).map((c) => {
                const active = category === c;
                return (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold border transition-all ${
                      active
                        ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white border-transparent shadow-md shadow-primary-600/25'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-primary-300 hover:text-primary-700'
                    }`}
                  >
                    {c !== 'All' && <span className="text-[11px] leading-none">{CATEGORY_ICONS[c]}</span>}
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* results meta */}
        <div className="flex items-center justify-between mt-4 mb-4 px-1">
          <p className="text-xs text-gray-400 font-medium">
            Showing <span className="font-bold text-primary-700">{filtered.length}</span> of {healthPackagesData.length} packages
          </p>
          {category !== 'All' && (
            <button
              onClick={() => setCategory('All')}
              className="inline-flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700 font-semibold"
            >
              <FiX className="w-3.5 h-3.5" /> Clear filter
            </button>
          )}
        </div>

        {/* ── Cards grid ── */}
        {showSkeleton ? (
          <SkeletonGrid />
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6">
            <AnimatePresence mode="popLayout">
              {visiblePackages.map((pkg, i) => (
                <PackageCard
                  key={pkg.slug}
                  pkg={pkg}
                  index={i}
                  compareSelected={compareIds.includes(pkg.slug)}
                  compareDisabled={compareIds.length >= MAX_COMPARE}
                  onBook={(p) => setBooking({ pkg: p, mode: 'book' })}
                  onDetails={(p) => navigate(`/packages/${p.slug}`)}
                  onToggleCompare={toggleCompare}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* empty state */}
        {!showSkeleton && filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-50 flex items-center justify-center mb-4">
              <FiSearch className="w-7 h-7 text-primary-400" />
            </div>
            <h3 className="text-lg font-bold text-primary-950">No packages found</h3>
            <p className="text-sm text-gray-500 mt-1.5">
              Try a different keyword or clear the filters.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setCategory('All');
              }}
              className="mt-5 px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* view all link (embedded sections) */}
        {showViewAll && (
          <div className="text-center mt-12">
            <Link
              to="/health-packages"
              className="group inline-flex items-center justify-center gap-2 px-5 xs:px-8 py-3 xs:py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg xs:rounded-xl shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-0.5 transition-all text-xs xs:text-sm"
            >
              View All Health Packages
              <FiArrowUpRight className="w-3.5 xs:w-4 h-3.5 xs:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </Link>
          </div>
        )}

        {/* booking reassurance strip */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { emoji: '🏠', title: 'Home Sample Collection', desc: 'Free doorstep sample pickup across Bangalore' },
            { emoji: '⏱️', title: 'Same-Day Reports', desc: 'Accurate results within 6–12 hours' },
            { emoji: '🩺', title: 'Doctor Consultation', desc: `Call ${clinicInfo.phone} for expert guidance` },
          ].map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-2xl bg-white border border-gray-100 p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <span className="text-2xl">{b.emoji}</span>
              <div>
                <p className="text-sm font-bold text-primary-950">{b.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Floating compare bar ── */}
      <AnimatePresence>
        {compareIds.length > 0 && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', damping: 24, stiffness: 260 }}
            className="fixed bottom-24 sm:bottom-6 left-1/2 -translate-x-1/2 z-[70] w-[calc(100%-24px)] max-w-lg"
          >
            <div className="glass-card rounded-2xl shadow-2xl shadow-primary-900/20 px-3 py-2.5 flex items-center gap-2">
              <div className="flex items-center -space-x-2 overflow-hidden">
                {comparePackages.map((p) => (
                  <div
                    key={p.slug}
                    title={p.name}
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${p.gradient} text-white flex items-center justify-center ring-2 ring-white shadow`}
                  >
                    {p.icon}
                  </div>
                ))}
                {compareIds.length < MAX_COMPARE && (
                  <div className="w-9 h-9 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs font-bold">
                    +
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-primary-950 leading-tight">
                  {compareIds.length} package{compareIds.length > 1 ? 's' : ''} selected
                </p>
                <p className="text-[10px] text-gray-400">Compare side-by-side</p>
              </div>
              <button
                onClick={clearCompare}
                className="px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-gray-500 hover:bg-gray-100 transition-colors"
              >
                Clear
              </button>
              <button
                onClick={() => setCompareOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold shadow-lg shadow-primary-600/25 transition-all active:scale-[0.98]"
              >
                Compare Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Modals ── */}
      <AnimatePresence>
        {booking && (
          <BookPackageModal
            pkg={booking.pkg}
            mode={booking.mode}
            onClose={() => setBooking(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {compareOpen && comparePackages.length > 0 && (
          <CompareModal
            pkgs={comparePackages}
            onClose={() => setCompareOpen(false)}
            onRemove={(slug) => setCompareIds((ids) => ids.filter((id) => id !== slug))}
            onClear={clearCompare}
            onBook={(p) => {
              setCompareOpen(false);
              setBooking({ pkg: p, mode: 'book' });
            }}
          />
        )}
      </AnimatePresence>
    </section>
    </MotionConfig>
  );
}

/* ── Loading skeleton grid ── */
function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm">
          <div className="h-24 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer" />
          <div className="p-5 space-y-3">
            <div className="flex gap-2">
              <div className="h-4 w-20 rounded-full bg-gray-100 animate-shimmer" />
              <div className="h-4 w-16 rounded-full bg-gray-100 animate-shimmer" />
            </div>
            <div className="h-4 w-3/4 rounded-lg bg-gray-100 animate-shimmer" />
            <div className="h-3 w-full rounded bg-gray-100 animate-shimmer" />
            <div className="h-3 w-2/3 rounded bg-gray-100 animate-shimmer" />
            <div className="h-16 rounded-xl bg-gray-100 animate-shimmer" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-9 rounded-xl bg-gray-100 animate-shimmer" />
              <div className="h-9 rounded-xl bg-gray-100 animate-shimmer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
