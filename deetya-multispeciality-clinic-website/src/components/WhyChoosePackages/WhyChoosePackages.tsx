import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { whyChoosePackagesData } from '../../data/siteData';

export default function WhyChoosePackages() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-10 xs:py-14 lg:py-20 bg-gradient-to-b from-primary-50/40 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        <div
          className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-10 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-4 leading-tight">
              Full Body Checkups{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                in Bangalore
              </span>
            </h2>
            <p className="text-gray-600 text-sm xs:text-base lg:text-lg max-w-lg mx-auto lg:mx-0">
              Experience hassle-free testing by booking our comprehensive full
              body checkup near you.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-56 xs:w-56 xs:h-64 lg:w-72 lg:h-80 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/images/doctor-deepak.webp"
                alt="Doctor"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Feature Badges */}
        <div
          className={`flex flex-wrap justify-center items-center gap-6 xs:gap-8 lg:gap-12 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          {whyChoosePackagesData.map((item, i) => (
            <div key={i} className="flex items-center gap-3 group">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </div>
              <div>
                <p className="font-semibold text-primary-950 text-xs sm:text-sm">
                  {item.title}
                </p>
                <p className="text-gray-500 text-[11px] sm:text-xs">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
