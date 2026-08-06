import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { checkupPackagesData } from '../../data/checkupPackagesData';
import PackageCard from '../PackageCard/PackageCard';

export default function CheckupPackages() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="checkup-packages"
      ref={ref}
      className="py-12 xs:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <p className="text-gray-500 text-xs sm:text-sm">
            Showing {checkupPackagesData.length} tests/checkups
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6">
          {checkupPackagesData.map((pkg, i) => (
            <PackageCard key={pkg.slug} pkg={pkg} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
