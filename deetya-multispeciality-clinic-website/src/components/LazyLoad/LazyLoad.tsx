import { Suspense, useEffect, useRef, useState, type ReactNode } from 'react';

interface LazyLoadProps {
  children: ReactNode;
  /** How early (px) before entering the viewport content starts loading. */
  rootMargin?: string;
  /** Applied to the wrapper while content is not loaded yet (prevents layout shift). */
  minHeight?: string | number;
  className?: string;
}

/**
 * Loads `children` only when the wrapper is close to the viewport, deferring
 * the JS chunk + work of below-the-fold sections. Keeps the initial page load
 * (and first paint) fast without moving content around: by default content
 * starts loading 800px before it becomes visible.
 */
export default function LazyLoad({
  children,
  rootMargin = '800px',
  minHeight,
  className,
}: LazyLoadProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (very old browsers) -> load immediately.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  const style = minHeight !== undefined ? { minHeight } : undefined;

  return (
    <div ref={ref} className={className} style={style}>
      {inView ? (
        <Suspense
          fallback={
            <div className="animate-pulse-slow w-full rounded-2xl bg-primary-50/70" style={style} />
          }
        >
          {children}
        </Suspense>
      ) : null}
    </div>
  );
}
