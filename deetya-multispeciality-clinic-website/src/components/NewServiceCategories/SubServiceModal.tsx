import { FiX, FiPhone, FiZap, FiClock } from 'react-icons/fi';
import Modal from '../ui/Modal';
import CheckListItem from '../ui/CheckListItem';
import type { ServiceSubItem } from '../../data/newServiceCategoriesData';
import { telHref } from '../../utils/links';
import { formatINR } from '../HealthPackages/bookingUtils';

interface SubServiceModalProps {
  item: ServiceSubItem;
  categoryName: string;
  onClose: () => void;
}

const discountPercent = (item: ServiceSubItem): number =>
  item.offerPrice && item.originalPrice
    ? Math.round((1 - item.offerPrice / item.originalPrice) * 100)
    : 0;

/**
 * Responsive popup with a single sub-service's details. Becomes a bottom sheet
 * on mobile, scrolls when the content is tall, and offers booking + a link to
 * the full detail page.
 */
export default function SubServiceModal({ item, categoryName, onClose }: SubServiceModalProps) {
  const hasPrice = item.offerPrice != null;

  return (
    <Modal onClose={onClose} ariaLabel={item.title} size="sm" centered panelClassName="flex flex-col max-h-[85vh]">
      {/* Header */}
      <div className="shrink-0 bg-gradient-to-r from-primary-600 to-primary-800 px-5 sm:px-7 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 text-primary-100 text-[10px] xs:text-[11px] font-semibold">
              <FiZap className="w-3 h-3" aria-hidden="true" />
              {categoryName}
            </span>
            <h3 className="text-white font-extrabold text-base xs:text-lg sm:text-xl leading-snug mt-2.5">{item.title}</h3>
          </div>
          <button
            onClick={onClose}
            autoFocus
            aria-label="Close"
            className="w-8 h-8 shrink-0 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
          >
            <FiX className="w-4 h-4" />
          </button>
        </div>

        {/* Pricing */}
        {hasPrice ? (
          <div className="mt-3.5 flex flex-wrap items-center gap-2">
            <span className="text-white font-extrabold text-lg xs:text-xl sm:text-2xl">{formatINR(item.offerPrice!)}</span>
            <span className="text-primary-200 line-through text-xs xs:text-sm">{formatINR(item.originalPrice!)}</span>
            <span className="px-2 py-0.5 rounded-full bg-accent-500 text-white text-[11px] font-bold">
              {discountPercent(item)}% OFF
            </span>
          </div>
        ) : (
          <p className="mt-3.5 text-primary-100 text-sm font-semibold">Price not available</p>
        )}
      </div>

      {/* Body — full service detail */}
      <div className="overflow-y-auto flex-1 px-5 sm:px-7 py-5">
        <p className="text-gray-600 leading-relaxed text-[13px] xs:text-sm sm:text-base">{item.description}</p>

        {/* How booking works */}
        <div className="mt-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100 p-4 sm:p-5">
          <h4 className="text-sm sm:text-base font-bold text-primary-950 mb-3">How booking works</h4>
          <ul className="space-y-2.5">
            {[
              'Book the service with a token amount of just ₹299.',
              'Pay the remaining amount only after the service is delivered.',
              'A trained healthcare professional visits your home at the scheduled slot.',
              'Post-service follow-up and support from the DEETYA team.',
            ].map((step, i) => (
              <CheckListItem key={i} className="gap-2.5">
                <span className="text-xs xs:text-sm text-gray-600">{step}</span>
              </CheckListItem>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-primary-100 flex items-center gap-2 text-[11px] xs:text-xs text-gray-500">
            <FiClock className="w-4 h-4 text-primary-500 shrink-0" aria-hidden="true" />
            Available Mon-Sat: 7AM - 11PM · JP Nagar, Bangalore
          </div>
        </div>
      </div>

      {/* Footer CTA — calls the clinic directly */}
      <div className="shrink-0 border-t border-gray-100 bg-gray-50/70 px-5 sm:px-7 py-4">
        {hasPrice ? (
          <a
            href={telHref()}
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-[13px] xs:text-sm font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-600/25 transition-all"
          >
            <FiPhone className="w-4 h-4 shrink-0" />
            Book now at ₹299 · Pay rest after service
          </a>
        ) : (
          <a
            href={telHref()}
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-600/25 transition-all"
          >
            <FiPhone className="w-4 h-4" />
            Speak to our Experts
          </a>
        )}
      </div>
    </Modal>
  );
}
