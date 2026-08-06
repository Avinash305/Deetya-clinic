// Shown while a lazy page chunk downloads. Matches the site's look: a small
// centered spinner so the navbar/footer stay visible and there's no blank jump.
export default function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh] bg-white">
      <div className="flex flex-col items-center gap-3">
        <span className="relative flex h-6 w-6">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-6 w-6 bg-accent-500" />
        </span>
        <span className="text-sm font-medium text-primary-900/60">Loading…</span>
      </div>
    </div>
  );
}
