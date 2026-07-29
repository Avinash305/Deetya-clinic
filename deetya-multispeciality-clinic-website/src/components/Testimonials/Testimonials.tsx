import { useState, useRef, useCallback, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { testimonialsData } from '../../data/siteData';

interface TestimonialsProps {
  limit?: number;
}

function TestimonialCard({ t }: { t: typeof testimonialsData[0] }) {
  return (
    <div className="p-4 xs:p-5 sm:p-6 lg:p-7 bg-white rounded-xl xs:rounded-2xl border border-gray-100 shadow-md h-full flex flex-col">
      <FaQuoteLeft className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-primary-100 mb-2 xs:mb-3 shrink-0" />
      <div className="flex gap-0.5 mb-2 xs:mb-3">
        {Array.from({ length: t.rating }).map((_, si) => (
          <FaStar key={si} className="w-3 xs:w-3.5 h-3 xs:h-3.5 text-amber-400" />
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed text-xs xs:text-sm flex-1 mb-3 xs:mb-5">{t.review}</p>
      <div className="flex items-center gap-2 xs:gap-3 pt-3 xs:pt-4 border-t border-gray-100">
        <div className={`w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-[10px] xs:text-xs shrink-0`}>
          {t.initials}
        </div>
        <div>
          <p className="font-bold text-primary-950 text-xs xs:text-sm">{t.name}</p>
          <p className="text-[10px] xs:text-xs text-gray-400">Verified Patient</p>
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

  const totalSlides = displayed.length;
  const next = useCallback(() => setCurrent((p) => (p + 1) % totalSlides), [totalSlides]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + totalSlides) % totalSlides), [totalSlides]);

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
    <section id="testimonials" ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-primary-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            <span className="text-sm font-semibold text-primary-700">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-4">
            What Our Patients{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-gray-600 text-lg">Real stories from real patients who have experienced the DEETYA difference.</p>
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
            {/* Track - 1 card mobile, 2 tablet, 3 desktop */}
            <div className="overflow-hidden rounded-xl xs:rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {displayed.map((t, i) => (
                  <div key={i} className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-1 xs:px-1.5 sm:px-2 lg:px-3">
                    <TestimonialCard t={t} />
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-2 xs:gap-4 mt-6 xs:mt-8">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-300 shadow-sm hover:shadow-md transition-all active:scale-95"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="w-5 h-5 text-gray-700" />
              </button>

              <div className="flex gap-1.5">
                {displayed.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-primary-600 w-6' : 'bg-gray-300 w-2 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-primary-50 hover:border-primary-300 shadow-sm hover:shadow-md transition-all active:scale-95"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
