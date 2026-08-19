import { Link } from 'react-router-dom';
import { FiZap } from 'react-icons/fi';
import type { NewServiceCategory } from '../../data/newServiceCategoriesData';

interface ServiceCategoryCardProps {
  service: NewServiceCategory;
  index: number;
  isVisible: boolean;
}

/** Single quick-service card — category image, service name, duration indicator. Links to the category detail page. */
export default function ServiceCategoryCard({ service, index, isVisible }: ServiceCategoryCardProps) {
  return (
    <Link
      to={`/services/category/${service.slug}`}
      aria-label={`View ${service.name} services`}
      className={`group relative flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-primary-100 transition-all duration-300 overflow-hidden ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Category image (compact crop) */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      <div className="flex flex-col items-center text-center p-3 xs:p-4 flex-1">
        <h3 className="text-xs xs:text-sm font-bold text-primary-950 leading-snug group-hover:text-primary-700 transition-colors duration-300">
          {service.name}
        </h3>

        {/* Quick-service / duration indicator */}
        <span className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-warm-50 border border-warm-100 text-warm-700 text-[10px] xs:text-[11px] font-semibold">
          <FiZap className="w-2.5 h-2.5" aria-hidden="true" />
          {service.duration}
        </span>
      </div>
    </Link>
  );
}
