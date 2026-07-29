import { useState, useEffect, useRef, useCallback } from 'react';
import { FiAward, FiActivity, FiCheck } from 'react-icons/fi';
import { FaFlask } from 'react-icons/fa';
import { heroSlides as slides } from '../../data/siteData';

const SLIDE_DURATION = 5000;
const SWIPE_THRESHOLD = 40;
const SWIPE_AXIS_THRESHOLD = 10;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const currentRef = useRef(current);
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Keep ref in sync with state
  useEffect(() => { currentRef.current = current; }, [current]);

  const goTo = useCallback((idx: number) => {
    setProgress(0);
    const next = ((idx % slides.length) + slides.length) % slides.length;
    setCurrent(next);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          goTo(currentRef.current + 1);
          return 0;
        }
        return p + (100 / (SLIDE_DURATION / 50));
      });
    }, 50);
    return () => clearInterval(interval);
  }, [goTo]);

  // Attach ALL touch handlers natively to bypass React's passive event delegation
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      startX.current = e.touches[0]?.clientX ?? 0;
      isDragging.current = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || startX.current === null) return;
      const currentX = e.touches[0]?.clientX;
      if (currentX === undefined) return;
      const diff = startX.current - currentX;
      // Prevent browser default (scrolling) when a horizontal swipe is detected
      if (Math.abs(diff) > SWIPE_AXIS_THRESHOLD) {
        e.preventDefault();
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (startX.current === null || !isDragging.current) return;
      isDragging.current = false;
      const endX = e.changedTouches[0]?.clientX ?? 0;
      const diff = startX.current - endX;
      startX.current = null;
      if (Math.abs(diff) > SWIPE_THRESHOLD) {
        diff > 0 ? goTo(currentRef.current + 1) : goTo(currentRef.current - 1);
      }
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [goTo]);

  // Mouse-only handlers (no touch — handled natively above ^)
  const handleMouseStart = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseEnd = (e: React.MouseEvent) => {
    if (startX.current === null || !isDragging.current) return;
    isDragging.current = false;
    const endX = e.clientX;
    const diff = startX.current - endX;
    startX.current = null;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      diff > 0 ? goTo(currentRef.current + 1) : goTo(currentRef.current - 1);
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    startX.current = null;
  };

  const slide = slides[current];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden bg-primary-950 select-none"
      style={{ touchAction: 'pan-y' }}
      onMouseDown={handleMouseStart}
      onMouseUp={handleMouseEnd}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full min-h-[420px] xs:min-h-[460px] sm:min-h-[500px] md:aspect-[16/9]" style={{ cursor: 'grab' }}>
        {/* Slides */}
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={s.image}
              alt={`${s.heading} ${s.headingGradient}`}
              className="w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'low'}
              draggable={false}
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/85 via-primary-950/55 to-primary-950/30" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary-950/70 to-transparent pointer-events-none" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex items-start pt-10 xs:pt-14 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              {/* Left text — 3 cols */}
              <div className="lg:col-span-3" key={current}>
                <div className="animate-fade-in-left">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-5 backdrop-blur-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-400" />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white/90">{slide.badge}</span>
                  </div>

                  <h1 className="text-base xs:text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-2 xs:mb-3 sm:mb-4" style={{ textWrap: 'balance' }}>
                    {slide.heading}{' '}
                    <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-primary-300 bg-clip-text text-transparent">{slide.headingGradient}</span>
                    <br className="hidden sm:block" />
                    <span className="text-white/90"> {slide.headingSuffix}</span>
                  </h1>

                  <p className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg text-white/60 mb-3 xs:mb-4 sm:mb-6 max-w-lg leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {slide.pills.map((item) => (
                      <div key={item} className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 border border-white/15 rounded-full backdrop-blur-sm hover:bg-white/15 hover:border-accent-400/40 transition-all duration-300">
                        <FiCheck className="w-3.5 h-3.5 text-accent-400 shrink-0" />
                        <span className="text-xs sm:text-sm text-white/80 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right floating cards — 2 cols */}
              <div className="lg:col-span-2 grid grid-cols-3 sm:flex sm:flex-row lg:flex-col gap-1.5 xs:gap-2 sm:gap-3 mt-3 xs:mt-4 sm:mt-5 lg:mt-0 items-stretch sm:items-center lg:items-end">
                <div className="animate-float glass rounded-lg xs:rounded-xl lg:rounded-2xl px-1.5 xs:px-3 sm:px-4 lg:px-5 py-1.5 xs:py-2.5 lg:py-3.5 shadow-2xl flex flex-col xs:flex-row items-center xs:items-center gap-1 xs:gap-2 sm:gap-3 lg:gap-4 flex-1 lg:flex-none lg:w-60">
                  <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-9 sm:h-9 lg:w-11 lg:h-11 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg lg:rounded-xl flex items-center justify-center shrink-0"><FiAward className="w-2.5 h-2.5 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" /></div>
                  <div className="text-center xs:text-left"><p className="text-xs xs:text-sm sm:text-base lg:text-2xl font-bold text-white">15+</p><p className="text-[8px] xs:text-[10px] sm:text-xs text-white/55 font-medium leading-tight">Years Experience</p></div>
                </div>
                <div className="animate-float glass rounded-lg xs:rounded-xl lg:rounded-2xl px-1.5 xs:px-3 sm:px-4 lg:px-5 py-1.5 xs:py-2.5 lg:py-3.5 shadow-2xl flex flex-col xs:flex-row items-center xs:items-center gap-1 xs:gap-2 sm:gap-3 lg:gap-4 flex-1 lg:flex-none lg:w-60 lg:mr-8" style={{ animationDelay: '1s' }}>
                  <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-9 sm:h-9 lg:w-11 lg:h-11 bg-gradient-to-br from-accent-500 to-accent-700 rounded-lg lg:rounded-xl flex items-center justify-center shrink-0"><FaFlask className="w-2.5 h-2.5 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" /></div>
                  <div className="text-center xs:text-left"><p className="text-xs xs:text-sm sm:text-base lg:text-base font-bold text-white">Lab Available</p><p className="text-[8px] xs:text-[10px] sm:text-xs text-white/55 font-medium leading-tight">In-house Testing</p></div>
                </div>
                <div className="animate-float glass rounded-lg xs:rounded-xl lg:rounded-2xl px-1.5 xs:px-3 sm:px-4 lg:px-5 py-1.5 xs:py-2.5 lg:py-3.5 shadow-2xl flex flex-col xs:flex-row items-center xs:items-center gap-1 xs:gap-2 sm:gap-3 lg:gap-4 flex-1 lg:flex-none lg:w-60" style={{ animationDelay: '2s' }}>
                  <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-9 sm:h-9 lg:w-11 lg:h-11 bg-gradient-to-br from-warm-500 to-warm-700 rounded-lg lg:rounded-xl flex items-center justify-center shrink-0"><FiActivity className="w-2.5 h-2.5 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" /></div>
                  <div className="text-center xs:text-left"><p className="text-xs xs:text-sm sm:text-base lg:text-base font-bold text-white">500+ Daily</p><p className="text-[8px] xs:text-[10px] sm:text-xs text-white/55 font-medium leading-tight">Patient Consultations</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-5 sm:bottom-7 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2.5">
              {slides.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} className="relative h-1 rounded-full overflow-hidden transition-all duration-300" style={{ width: i === current ? '40px' : '18px' }} aria-label={`Slide ${i + 1}`}>
                  <div className="absolute inset-0 bg-white/20 rounded-full" />
                  {i === current ? (
                    <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full" style={{ width: `${progress}%`, transition: 'width 50ms linear' }} />
                  ) : (
                    <div className="absolute inset-0 bg-white/30 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
