import { useState, useEffect, useRef, useCallback } from 'react';
import { FiCheck } from 'react-icons/fi';
import { heroSlides as slides } from '../../data/siteData';

const SLIDE_DURATION = 5000;
const SWIPE_THRESHOLD = 40;
const SWIPE_AXIS_THRESHOLD = 10;

function DecorativeShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {/* Floating cross shape */}
      <div className="absolute top-[15%] right-[8%] w-6 h-6 xs:w-8 xs:h-8 animate-float-slow opacity-[0.08]">
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-white">
          <path d="M16 2L16 30M2 16L30 16" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      {/* Floating circle */}
      <div className="absolute top-[25%] left-[5%] w-10 h-10 xs:w-14 xs:h-14 animate-float-delayed opacity-[0.06]">
        <div className="w-full h-full rounded-full border-2 border-white" />
      </div>

      {/* Dotted circle */}
      <div className="absolute bottom-[20%] right-[12%] w-16 h-16 xs:w-20 xs:h-20 animate-rotate-slow opacity-[0.07]">
        <svg viewBox="0 0 80 80" className="w-full h-full text-white">
          <circle cx="40" cy="40" r="38" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Small dots */}
      <div className="absolute top-[40%] left-[15%] w-2 h-2 xs:w-3 xs:h-3 animate-pulse-slow opacity-[0.12] rounded-full bg-white" />
      <div className="absolute bottom-[30%] right-[25%] w-3 h-3 xs:w-4 xs:h-4 animate-pulse-slow opacity-[0.08] rounded-full bg-white" style={{ animationDelay: '1.5s' }} />

      {/* Diamond shape */}
      <div className="absolute top-[60%] left-[3%] w-5 h-5 xs:w-7 xs:h-7 animate-float-slow opacity-[0.06]" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full bg-white/20 rotate-45" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
      </div>

      {/* Gradient blob */}
      <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] animate-morph-blob opacity-[0.04] bg-gradient-to-br from-accent-400 via-primary-400 to-purple-400 blur-[80px]" />
      <div className="absolute -bottom-[10%] -left-[10%] w-[35%] h-[35%] animate-morph-blob opacity-[0.03] bg-gradient-to-tr from-accent-400 via-primary-400 to-purple-400 blur-[80px]" style={{ animationDelay: '4s' }} />
    </div>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(current);
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const isDragging = useRef(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => { currentRef.current = current; }, [current]);

  const goTo = useCallback((idx: number) => {
    const next = ((idx % slides.length) + slides.length) % slides.length;
    setCurrent(next);
  }, []);

  // Auto-slide timer. Restarting on every `current` change keeps the timer in
  // sync with the progressive indicator fill: tapping a line (or swiping)
  // starts a fresh 5s cycle, so the bar never desyncs from auto-advance.
  useEffect(() => {
    const interval = setInterval(() => {
      goTo(currentRef.current + 1);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [goTo, current]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onTouchStart = (e: TouchEvent) => {
      startX.current = e.touches[0]?.clientX ?? 0;
      startY.current = e.touches[0]?.clientY ?? 0;
      isDragging.current = true;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || startX.current === null || startY.current === null) return;
      const currentX = e.touches[0]?.clientX;
      const currentY = e.touches[0]?.clientY;
      if (currentX === undefined || currentY === undefined) return;
      const diffX = startX.current - currentX;
      const diffY = startY.current - currentY;
      // Only suppress native scrolling for a clearly horizontal gesture.
      // A vertical scroll with a little sideways drift must keep scrolling,
      // otherwise the hero traps the whole page on touch devices.
      if (Math.abs(diffX) > SWIPE_AXIS_THRESHOLD && Math.abs(diffX) > Math.abs(diffY)) e.preventDefault();
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (startX.current === null || !isDragging.current) return;
      isDragging.current = false;
      const endX = e.changedTouches[0]?.clientX ?? 0;
      const endY = e.changedTouches[0]?.clientY ?? 0;
      const diffX = startX.current - endX;
      const diffY = (startY.current ?? 0) - endY;
      startX.current = null;
      startY.current = null;
      // Only advance the slide when the gesture is clearly horizontal
      if (Math.abs(diffX) > SWIPE_THRESHOLD && Math.abs(diffX) > Math.abs(diffY)) diffX > 0 ? goTo(currentRef.current + 1) : goTo(currentRef.current - 1);
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

  const handleMouseStart = (e: React.MouseEvent) => { startX.current = e.clientX; isDragging.current = true; };
  const handleMouseEnd = (e: React.MouseEvent) => {
    if (startX.current === null || !isDragging.current) return;
    isDragging.current = false;
    const endX = e.clientX;
    const diff = startX.current - endX;
    startX.current = null;
    if (Math.abs(diff) > SWIPE_THRESHOLD) diff > 0 ? goTo(currentRef.current + 1) : goTo(currentRef.current - 1);
  };
  const handleMouseLeave = () => { isDragging.current = false; startX.current = null; };

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
      <div className="relative w-full min-h-[450px] xs:min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px] xl:min-h-[700px]" style={{ cursor: 'grab' }}>
        {/* Background slides */}
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 pointer-events-none transition-all duration-1000 ease-in-out ${
              i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={s.image}
              srcSet={`${s.image.replace(/\.webp$/, '-480.webp')} 480w, ${s.image.replace(/\.webp$/, '-768.webp')} 768w, ${s.image.replace(/\.webp$/, '-1200.webp')} 1200w, ${s.image} ${s.width}w`}
              sizes="100vw"
              alt={`${s.heading} ${s.headingGradient}`}
              className="w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'low'}
              draggable={false}
            />
          </div>
        ))}

        {/* Gradient overlays — full-image slides (e.g. brand graphics that
            carry their own text) get much lighter overlays so the artwork
            stays crisp; text slides keep the dark left/right gradient for
            readability. */}
        {slide.fullImage ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary-950/60 to-transparent pointer-events-none" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/65 to-primary-950/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/20 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary-950/50 to-transparent pointer-events-none" />
          </>
        )}

        {/* Decorative animated shapes */}
        <DecorativeShapes />

        {/* Content — skipped for full-image slides that carry their own text */}
        {slide.fullImage ? (
          <h1 className="sr-only">{slide.heading} {slide.headingGradient} {slide.headingSuffix}</h1>
        ) : (
          <div className="absolute inset-0 z-10 flex items-center pt-10 sm:pt-0 pb-14 xs:pb-16 sm:pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-xl xs:max-w-2xl lg:max-w-3xl" key={current}>
                <div className="animate-fade-in-left">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-full mb-3 sm:mb-5 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group">
                    <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-accent-400" />
                    </span>
                    <span className="text-[10px] xs:text-xs sm:text-sm font-semibold text-white/90 group-hover:text-white transition-colors">{slide.badge}</span>
                  </div>

                  {/* Heading */}
                  <h1 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-2 xs:mb-3 sm:mb-5" style={{ textWrap: 'balance' }}>
                    {slide.heading}{' '}
                    <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-primary-300 bg-clip-text text-transparent animate-gradient-shift">{slide.headingGradient}</span>
                    <br className="hidden sm:block" />
                    <span className="text-white/90"> {slide.headingSuffix}</span>
                  </h1>

                  {/* Description */}
                  <p className="text-[11px] xs:text-sm sm:text-lg md:text-xl text-white/60 mb-2 xs:mb-4 sm:mb-7 max-w-prose sm:max-w-xl leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2.5 mb-3 sm:mb-8">
                    {slide.pills.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-white/10 border border-white/15 rounded-full backdrop-blur-sm hover:bg-white/15 hover:border-accent-400/40 transition-all duration-300"
                      >
                        <FiCheck className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-accent-400 shrink-0" />
                        <span className="text-[10px] xs:text-xs sm:text-sm text-white/80 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>


                </div>
              </div>
            </div>
          </div>
        )}

        {/* Progressive slide indicator — horizontal row of lines at the
            bottom. The active line is larger and fills from 0% to 100% over
            the slide duration; visited lines stay filled, upcoming lines stay
            small and empty. Tapping a line jumps to that slide. The key
            remount restarts the fill animation whenever the active slide
            changes. */}
        <div className="absolute inset-x-0 bottom-4 xs:bottom-5 sm:bottom-6 z-20 flex items-center justify-center gap-2 xs:gap-2.5 sm:gap-3 px-4">
          {slides.map((_, i) => {
            const isActive = i === current;
            const isPast = i < current;
            return (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={isActive ? 'true' : undefined}
                className={`group flex items-center cursor-pointer rounded-full py-2 xs:py-2.5 transition-all duration-500 ${
                  isActive ? 'w-16 xs:w-20 sm:w-24 lg:w-28' : 'w-7 xs:w-8 sm:w-10 lg:w-12'
                }`}
              >
                <span
                  className={`relative w-full rounded-full overflow-hidden bg-white/20 transition-colors duration-300 group-hover:bg-white/40 ${
                    isActive ? 'h-2.5 xs:h-3' : 'h-1.5 xs:h-2'
                  }`}
                >
                  <span
                    key={isActive ? `active-${current}` : `inactive-${i}`}
                    className={`absolute inset-y-0 left-0 rounded-full ${
                      isActive
                        ? 'bg-gradient-to-r from-accent-400 to-accent-500'
                        : isPast
                          ? 'bg-white/70'
                          : 'bg-white/0'
                    }`}
                    style={
                      isActive
                        ? { animation: `slideProgress ${SLIDE_DURATION}ms linear forwards` }
                        : isPast
                          ? { width: '100%' }
                          : { width: '0%' }
                    }
                  />
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
