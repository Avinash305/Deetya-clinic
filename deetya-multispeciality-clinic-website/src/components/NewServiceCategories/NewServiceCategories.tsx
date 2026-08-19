import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeader from '../ui/SectionHeader';
import { newServiceCategories } from '../../data/newServiceCategoriesData';
import ServiceCategoryCard from './ServiceCategoryCard';

/**
 * NEW "Our Healthcare Services" section — quick / home-care category cards.
 * Rendered ABOVE the existing Services section; each card links to its own
 * detail page listing the available sub-services with pricing.
 */
export default function NewServiceCategories() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-16 xs:py-20 lg:py-24 bg-gradient-to-b from-primary-50/50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Quick & Home Care"
          title="Our Healthcare "
          gradient="Services"
          gradientClassName="text-gradient"
          subtitle="Professional healthcare services delivered with convenience and care."
          className={`mb-12 xs:mb-14 lg:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xs:gap-4 lg:gap-5">
          {newServiceCategories.map((service, i) => (
            <ServiceCategoryCard key={service.name} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
