interface DotGrid {
  /** rgba() color used for the dots, e.g. 'rgba(255,255,255,0.35)'. */
  color: string;
  /** Grid cell size in px. */
  size: number;
  /** Overlay opacity (0–1). */
  opacity: number;
}

interface SectionBackgroundProps {
  /**
   * Positioning / size / color / blur classes for each corner blob.
   * `absolute rounded-full` are added automatically — pass e.g.
   * '-top-24 -right-20 w-96 h-96 bg-primary-100/60 blur-3xl'.
   */
  blobs?: string[];
  /** Optional dotted-grid overlay. */
  dotGrid?: DotGrid;
  /** Extra classes appended to the wrapper (default is pointer-events-none absolute inset-0). */
  className?: string;
}

/**
 * Decorative section background: soft corner blur blobs and/or a subtle dot grid.
 * Purely visual — pointer-events-none + aria-hidden.
 */
export default function SectionBackground({ blobs = [], dotGrid, className = '' }: SectionBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      {blobs.map((b, i) => (
        <div key={i} className={`absolute rounded-full ${b}`} />
      ))}
      {dotGrid && (
        <div
          className="absolute inset-0"
          style={{
            opacity: dotGrid.opacity,
            backgroundImage: `radial-gradient(circle, ${dotGrid.color} 1px, transparent 1px)`,
            backgroundSize: `${dotGrid.size}px ${dotGrid.size}px`,
          }}
        />
      )}
    </div>
  );
}
