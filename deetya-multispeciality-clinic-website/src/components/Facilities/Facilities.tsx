import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { facilitiesData } from '../../data/siteData';

export default function Facilities() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="facilities" ref={ref} className="py-12 xs:py-20 lg:py-28 bg-gradient-to-br from-primary-900 via-primary-950 to-primary-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary-700/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-10 xs:mb-12 sm:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 border border-white/20 rounded-full mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-400 rounded-full" />
            <span className="text-[10px] xs:text-xs sm:text-sm font-semibold text-accent-300">Our Facilities</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            World-Class{' '}
            <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">Infrastructure</span>
          </h2>
          <p className="text-primary-200 text-xs xs:text-sm sm:text-base lg:text-lg">Our state-of-the-art facilities are designed to provide maximum comfort and care during your visit.</p>
        </div>
        <div className={`grid grid-cols-2 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 xs:gap-3 sm:gap-4`}>
          {facilitiesData.map((f, i) => (
            <div key={i} className={`group p-2.5 xs:p-3 sm:p-4 lg:p-5 rounded-lg xs:rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-12 mb-1.5 xs:mb-2 sm:mb-4 rounded-lg xs:rounded-xl bg-gradient-to-br from-accent-400/20 to-accent-500/10 border border-accent-400/20 flex items-center justify-center text-accent-400 group-hover:scale-110 transition-transform">{f.icon}</div>
              <h3 className="text-[11px] xs:text-sm sm:text-base font-bold mb-0.5 xs:mb-1 sm:mb-1.5">{f.title}</h3>
              <p className="text-[10px] xs:text-xs sm:text-sm text-primary-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
