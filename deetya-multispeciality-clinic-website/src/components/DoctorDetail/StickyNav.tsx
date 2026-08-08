import { useEffect, useRef, useState } from 'react';
import {
  FiActivity, FiHeart, FiEye, FiTrendingUp, FiMessageSquare, FiCalendar,
} from 'react-icons/fi';
import { FaGraduationCap, FaStethoscope, FaQuestionCircle } from 'react-icons/fa';

/* ──────────────────────────────────────────────
   SECTION NAV DATA
   ────────────────────────────────────────────── */
const navSections = [
  { id: 'expertise', label: 'Expertise', icon: <FiActivity className="w-3.5 h-3.5" /> },
  { id: 'qualifications', label: 'Education', icon: <FaGraduationCap className="w-3.5 h-3.5" /> },
  { id: 'services', label: 'Services', icon: <FaStethoscope className="w-3.5 h-3.5" /> },
  { id: 'philosophy', label: 'Philosophy', icon: <FiHeart className="w-3.5 h-3.5" /> },
  { id: 'conditions', label: 'Conditions', icon: <FiEye className="w-3.5 h-3.5" /> },
  { id: 'process', label: 'Process', icon: <FiTrendingUp className="w-3.5 h-3.5" /> },
  { id: 'testimonials', label: 'Reviews', icon: <FiMessageSquare className="w-3.5 h-3.5" /> },
  { id: 'faq', label: 'FAQ', icon: <FaQuestionCircle className="w-3.5 h-3.5" /> },
  { id: 'book', label: 'Book', icon: <FiCalendar className="w-3.5 h-3.5" /> },
];

/** Sticky section nav that pins below the navbar and highlights the active section. */
export default function StickyNav({ doctorColor }: { doctorColor: string }) {
  const [activeId, setActiveId] = useState('');
  const [visible, setVisible] = useState(false);
  const clickLockRef = useRef(false);
  const visibleRef = useRef(false);
  const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  // Initial value is set to 0; the effect below computes the correct pinned
  // position on mount and on every scroll/resize (the helper functions are
  // declared below, so referencing them in a useState initializer would hit
  // the temporal dead zone and crash the page).
  const [top, setTop] = useState<number>(0);

  const getTopBarHeight = () => {
    // Check data attribute set by Layout when TopBar hides on scroll
    if (document.documentElement.dataset.topbarHidden === 'true') return 0;
    return window.innerWidth < 640 ? 32 : 40;
  };

  const getMainNavHeight = () => {
    return window.innerWidth < 640 ? 56 : window.innerWidth < 1024 ? 64 : 80;
  };

  const getTotalFixedHeight = () => {
    return getTopBarHeight() + getMainNavHeight();
  };

  const getScrollOffsetForPosition = () => {
    return getTotalFixedHeight();
  };

  const getScrollOffset = () => {
    // Account for the fixed TopBar, main Navbar, and the StickyNav heights
    const totalFixedHeight = getTotalFixedHeight();
    // Only offset for sticky nav when it's actually visible
    const stickyNavHeight = visibleRef.current ? 56 : 0;
    return totalFixedHeight + stickyNavHeight + 12; // 12px extra padding for comfort
  };

  const scrollTo = (id: string) => {
    // Immediately highlight the clicked tab
    setActiveId(id);
    // Lock scroll-based detection — will release when scrolling stops
    clearTimeout(scrollEndTimerRef.current);
    clickLockRef.current = true;
    // Fallback: release lock after 2s even if no scroll events fire
    // (e.g. clicking a tab for the section already in view)
    scrollEndTimerRef.current = setTimeout(() => { clickLockRef.current = false; }, 2000);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - getScrollOffset();
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Keep the sticky nav pinned just below the TopBar/main Navbar. Their heights
  // change when the TopBar auto-hides on scroll (Layout sets the data attribute),
  // so recompute on every scroll/resize instead of only at mount — otherwise the
  // sticky nav overlaps the main navbar and blocks its taps when scrolling up.
  useEffect(() => {
    const update = () => setTop(getScrollOffsetForPosition());
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  // Active-section detection — finds the section whose TOP EDGE is closest to the
  // sticky nav bottom (viewport-relative). Uses getBoundingClientRect() because
  // offsetTop is relative to the nearest positioned ancestor (the 'relative' div
  // wrapping the sections), NOT the document — making it incompatible with window.scrollY.
  // Locked briefly after a tab click (via clickLockRef + scroll-end debounce).
  useEffect(() => {
    const updateActiveSection = () => {
      const threshold = getScrollOffset() + 40;
      let closestId = '';
      let closestTop = -Infinity;
      for (const { id } of navSections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= threshold && top > closestTop) {
            closestTop = top;
            closestId = id;
          }
        }
      }
      // Fallback: if no section is above the threshold, pick the first section
      // that is closest to the threshold (e.g. when scrolled past all sections)
      if (!closestId) {
        let minDiff = Infinity;
        for (const { id } of navSections) {
          const el = document.getElementById(id);
          if (el) {
            const diff = Math.abs(el.getBoundingClientRect().top - threshold);
            if (diff < minDiff) {
              minDiff = diff;
              closestId = id;
            }
          }
        }
      }
      setActiveId(closestId);
    };

    const onScroll = () => {
      const nowVisible = window.scrollY > 450;
      setVisible(nowVisible);
      visibleRef.current = nowVisible;

      // If click lock is active, reset the scroll-end debounce timer
      if (clickLockRef.current) {
        clearTimeout(scrollEndTimerRef.current);
        scrollEndTimerRef.current = setTimeout(() => {
          clickLockRef.current = false;
          updateActiveSection(); // run once when scroll settles
        }, 250);
        return; // don't update active section during lock
      }

      updateActiveSection();
    };

    // Initialize active section immediately on mount
    updateActiveSection();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(scrollEndTimerRef.current);
    };
  }, []);

  return (
    <nav
      style={{ top: `${top}px` }}
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-dark rounded-b-2xl shadow-xl shadow-primary-900/10 border-t-0 border-x border-b border-white/30 overflow-hidden">
          {/* Thin accent line */}
          <div className={`h-[3px] bg-gradient-to-r ${doctorColor}`} />
          <div className="flex items-center overflow-x-auto no-scrollbar py-2 px-2 sm:px-3 gap-0.5">
            {navSections.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] sm:text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                  activeId === id
                    ? `bg-gradient-to-r ${doctorColor} text-white shadow-lg shadow-black/10 scale-105`
                    : 'text-gray-500 hover:text-primary-700 hover:bg-primary-50/60'
                }`}
              >
                {icon}
                <span className="hidden xs:inline">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
