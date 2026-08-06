import { Link } from 'react-router-dom';
import { FiClock, FiArrowRight } from 'react-icons/fi';
import { FaFlask, FaTag } from 'react-icons/fa';
import type { CheckupPackage } from '../../data/checkupPackagesData';

interface PackageCardProps {
  pkg: CheckupPackage;
  index?: number;
  isVisible?: boolean;
}

export default function PackageCard({
  pkg,
  index = 0,
  isVisible = true,
}: PackageCardProps) {
  return (
    <Link
      to={`/packages/${pkg.slug}`}
      className={`group relative bg-white rounded-2xl border border-gray-100 hover:border-primary-300 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-block ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Top Gradient Bar */}
      <div
        className={`h-1.5 bg-gradient-to-r ${pkg.gradient} group-hover:h-2 transition-all duration-300 rounded-t-2xl`}
      />

      {/* Discount Badge */}
      <div className="absolute top-5 right-4 z-10">
        <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-[10px] font-bold rounded-full shadow-lg">
          <FaTag className="w-2.5 h-2.5" />
          {pkg.discountPercent}% OFF
        </div>
      </div>

      <div className="p-5 xs:p-6">
        {/* Package Name */}
        <div className="mb-4">
          <span className="inline-block px-2 py-0.5 bg-primary-50 text-primary-700 text-[10px] font-semibold rounded mb-2">
            Checkup
          </span>
          <h3 className="text-base xs:text-lg font-bold text-primary-950 leading-tight group-hover:text-primary-700 transition-colors">
            {pkg.name}
          </h3>
        </div>

        {/* Price Section */}
        <div className="bg-gradient-to-r from-primary-50/80 to-accent-50/50 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-gray-400 line-through text-sm">
              ₹{pkg.originalPrice.toLocaleString('en-IN')}
            </span>
            <span className="text-2xl xs:text-3xl font-bold text-primary-950">
              ₹{pkg.discountedPrice.toLocaleString('en-IN')}
            </span>
          </div>
          <p className="text-accent-600 text-xs font-medium mt-1">
            You save ₹
            {(pkg.originalPrice - pkg.discountedPrice).toLocaleString('en-IN')}
          </p>
        </div>

        {/* Details */}
        <div className="flex items-center gap-5 mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
              <FaFlask className="w-4 h-4 text-primary-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Tests</p>
              <p className="text-sm font-semibold text-primary-950">
                {pkg.parameters} Parameters
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center">
              <FiClock className="w-4 h-4 text-accent-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Reports</p>
              <p className="text-sm font-semibold text-primary-950">
                {pkg.reportDelivery}
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div
          className={`flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r ${pkg.gradient} text-white font-semibold text-sm rounded-xl shadow-lg group-hover:shadow-xl group-hover:-translate-y-0.5 transition-all duration-300`}
        >
          View Details
          <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
