import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { whyChooseUsData } from '../../data/siteData';

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-primary-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-50 border border-accent-200 rounded-full mb-4">
            <span className="w-2 h-2 bg-accent-500 rounded-full" />
            <span className="text-sm font-semibold text-accent-700">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-4">
            What Makes Us{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Different</span>
          </h2>
          <p className="text-gray-600 text-lg">We go beyond treatment to provide a healthcare experience that is trustworthy, transparent, and truly patient-centered.</p>
        </div>
        <div className={`grid xs:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-6`}>
          {whyChooseUsData.map((r, i) => (
            <div key={i} className={`group relative p-4 xs:p-5 sm:p-7 bg-white rounded-xl xs:rounded-2xl border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`absolute top-0 left-4 xs:left-6 right-4 xs:right-6 h-1 bg-gradient-to-r ${r.gradient} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className={`w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 mb-3 xs:mb-4 sm:mb-5 rounded-xl xs:rounded-2xl bg-gradient-to-br ${r.gradient} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>{r.icon}</div>
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-primary-950 mb-1.5 xs:mb-2 sm:mb-3">{r.title}</h3>
              <p className="text-gray-500 leading-relaxed text-xs xs:text-sm">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
