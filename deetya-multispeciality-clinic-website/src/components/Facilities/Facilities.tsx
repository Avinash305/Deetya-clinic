import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { facilitiesData } from '../../data/siteData';

export default function Facilities() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="facilities" ref={ref} className="py-20 lg:py-28 bg-gradient-to-br from-primary-900 via-primary-950 to-primary-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-4">
            <span className="w-2 h-2 bg-accent-400 rounded-full" />
            <span className="text-sm font-semibold text-accent-300">Our Facilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            World-Class{' '}
            <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">Infrastructure</span>
          </h2>
          <p className="text-primary-200 text-lg">Our state-of-the-art facilities are designed to provide maximum comfort and care during your visit.</p>
        </div>
        <div className={`grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 xs:gap-4`}>
          {facilitiesData.map((f, i) => (
            <div key={i} className={`group p-3 xs:p-4 sm:p-5 rounded-xl xs:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 mb-2 xs:mb-3 sm:mb-4 rounded-lg xs:rounded-xl bg-gradient-to-br from-accent-400/20 to-accent-500/10 border border-accent-400/20 flex items-center justify-center text-accent-400 group-hover:scale-110 transition-transform">{f.icon}</div>
              <h3 className="text-sm xs:text-base font-bold mb-1 xs:mb-1.5">{f.title}</h3>
              <p className="text-xs xs:text-sm text-primary-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
