import { useState, useRef, useCallback, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { testimonialsData } from '../../data/testimonialsData';

interface TestimonialsProps {
  limit?: number;
}

function TestimonialCard({ t, index }: { t: typeof testimonialsData[0]; index: number }) {
  return (
    <div className="group relative h-full">
      {/* Gradient border effect */}
      <div className={`absolute -inset-[1px] bg-gradient-to-br ${t.color} rounded-xl xs:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]`} />

      <div className="relative p-4 xs:p-5 sm:p-6 lg:p-7 bg-white rounded-xl xs:rounded-2xl border border-gray-100 group-hover:border-transparent shadow-md group-hover:shadow-xl h-full flex flex-col transition-all duration-500">
        {/* Top decoration */}
        <div className="flex items-start justify-between mb-2 xs:mb-3">
          <FaQuoteLeft className={`w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 ${index % 2 === 0 ? 'text-primary-100' : 'text-accent-100'} shrink-0`} />
          <div className={`w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-[10px] xs:text-xs shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mt-1 -mr-1`}>
            {t.initials}
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-0.5 mb-2 xs:mb-3">
          {Array.from({ length: t.rating }).map((_, si) => (
            <FaStar key={si} className="w-3 xs:w-3.5 h-3 xs:h-3.5 text-amber-400" />
          ))}
        </div>

        {/* Review text */}
        <p className="text-gray-600 leading-relaxed text-xs xs:text-sm flex-1 mb-3 xs:mb-5 italic">
          &ldquo;{t.review}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-2 xs:gap-3 pt-3 xs:pt-4 border-t border-gray-100">
          <div className={`w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-[10px] xs:text-xs shrink-0`}>
            {t.initials}
          </div>
          <div>
            <p className="font-bold text-primary-950 text-xs xs:text-sm">{t.name}</p>
            <div className="flex items-center gap-1">
              <FiStar className="w-2.5 h-2.5 text-green-500 fill-green-500" />
              <p className="text-[10px] xs:text-xs text-gray-400">Verified Patient</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials({ limit }: TestimonialsProps) {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);
  const displayed = limit ? testimonialsData.slice(0, limit) : testimonialsData;
  const startX = useRef<number | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const totalSlides = displayed.length;
  const maxIndex = Math.max(0, totalSlides - slidesPerView);
  const next = useCallback(() => setCurrent((p) => (p >= maxIndex ? 0 : p + 1)), [maxIndex]);
  const prev = useCallback(() => setCurrent((p) => (p <= 0 ? maxIndex : p - 1)), [maxIndex]);

  // If the viewport grows (more slides visible per view), current may exceed
  // the new maxIndex and would otherwise leave the carousel blank until clicked.
  useEffect(() => {
    setCurrent((p) => Math.min(p, maxIndex));
  }, [maxIndex]);

  // Measure the carousel viewport and determine how many cards fit per view,
  // mirroring the responsive slide widths (w-full / sm:w-1/2 / lg:w-1/3).
  // The translateX percentage was previously relative to the full track width,
  // which skipped 2-3 slides at a time on larger screens and went blank past the end.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      setContainerWidth(el.offsetWidth);
      setSlidesPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener('resize', update);
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      window.removeEventListener('resize', update);
      ro.disconnect();
    };
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (isVisible) {
      autoPlayRef.current = setInterval(next, 4000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isVisible, next]);

  const resetAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(next, 4000);
  }, [next]);

  const handlePrev = useCallback(() => {
    prev();
    resetAutoPlay();
  }, [prev, resetAutoPlay]);

  const handleNext = useCallback(() => {
    next();
    resetAutoPlay();
  }, [next, resetAutoPlay]);

  const handleDotClick = useCallback((i: number) => {
    setCurrent(i);
    resetAutoPlay();
  }, [resetAutoPlay]);

  const handleStart = (e: React.TouchEvent | React.MouseEvent) => {
    startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
  };
  const handleEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (startX.current === null) return;
    const endX = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX;
    const diff = startX.current - endX;
    startX.current = null;
    if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); }
  };

  return (
    <section id="testimonials" ref={ref} className="py-16 xs:py-20 lg:py-28 bg-gradient-to-b from-primary-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-100/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            <span className="text-xs sm:text-sm font-semibold text-primary-700">Testimonials</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-4">
            What Our Patients{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-gray-600 text-sm xs:text-base sm:text-lg">Real stories from real patients who have experienced the DEETYA difference.</p>
        </div>

        {/* Carousel */}
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div
            className="relative select-none"
            onTouchStart={handleStart}
            onTouchEnd={handleEnd}
            onMouseDown={handleStart}
            onMouseUp={handleEnd}
          >
            {/* Track */}
            <div ref={containerRef} className="overflow-hidden rounded-xl xs:rounded-2xl -mx-1 xs:mx-0">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * (containerWidth / slidesPerView)}px)` }}
              >
                {displayed.map((t, i) => (
                  <div key={i} className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-1 xs:px-1.5 sm:px-2 lg:px-3">
                    <TestimonialCard t={t} index={i} />
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-2 xs:gap-4 mt-6 xs:mt-8">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-300 shadow-sm hover:shadow-md transition-all active:scale-95 shrink-0 group"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 text-gray-700 group-hover:text-primary-600 transition-colors" />
              </button>

              <div className="flex items-center">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    className="group flex items-center justify-center w-11 h-11 -mx-2.5 rounded-full transition-colors"
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === current ? 'true' : undefined}
                  >
                    <span
                      className={`rounded-full transition-all duration-300 ${
                        i === current
                          ? 'bg-gradient-to-r from-primary-600 to-accent-500 w-4 sm:w-5 h-1.5 shadow-sm shadow-primary-500/30'
                          : 'bg-gray-300 w-1.5 h-1.5 group-hover:bg-gray-400'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-300 shadow-sm hover:shadow-md transition-all active:scale-95 shrink-0 group"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="w-4 h-4 xs:w-5 xs:h-5 text-gray-700 group-hover:text-primary-600 transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
