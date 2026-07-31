import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { whyChooseUsData } from '../../data/siteData';

const decorativeNumbers = ['01', '02', '03', '04', '05', '06'];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 xs:py-20 lg:py-28 bg-gradient-to-b from-primary-50/50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-100/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div
          className="w-full h-full"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(20,39,87,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-50 border border-accent-200 rounded-full mb-4">
            <span className="w-2 h-2 bg-accent-500 rounded-full" />
            <span className="text-xs sm:text-sm font-semibold text-accent-700">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-4">
            What Makes Us{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Different</span>
          </h2>
          <p className="text-gray-600 text-sm xs:text-base sm:text-lg">We go beyond treatment to provide a healthcare experience that is trustworthy, transparent, and truly patient-centered.</p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-5 sm:gap-6">
          {whyChooseUsData.map((r, i) => (
            <div
              key={i}
              className={`group relative p-5 xs:p-6 sm:p-7 bg-white rounded-xl xs:rounded-2xl border border-gray-100 hover:border-transparent shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Decorative number in background */}
              <div className="absolute -top-3 -right-2 xs:-top-4 xs:-right-3 text-5xl xs:text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-100/50 select-none pointer-events-none leading-none transition-all duration-500 group-hover:opacity-0 group-hover:scale-110">
                {decorativeNumbers[i]}
              </div>

              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${r.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Top accent bar */}
              <div className={`absolute top-0 left-4 right-4 h-1 bg-gradient-to-r ${r.gradient} rounded-b-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-x-105`} />

              <div className="relative z-10">
                <div className={`w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 mb-4 xs:mb-5 rounded-xl xs:rounded-2xl bg-gradient-to-br ${r.gradient} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 group-hover:bg-white/20 transition-all duration-300 shadow-lg shadow-black/5`}>
                  {r.icon}
                </div>
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-primary-950 mb-2 sm:mb-3 group-hover:text-white transition-colors duration-300">{r.title}</h3>
                <p className="text-gray-500 leading-relaxed text-xs xs:text-sm group-hover:text-white/80 transition-colors duration-300">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
