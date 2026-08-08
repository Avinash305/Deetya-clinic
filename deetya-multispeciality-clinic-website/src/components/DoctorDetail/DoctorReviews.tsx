import { FaQuoteLeft, FaStar, FaCheckCircle } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';
import DoctorSectionHeader from './DoctorSectionHeader';
import GlassCard from './DoctorGlassCard';

interface DoctorReview {
  review: string;
  rating: number;
  name: string;
  color: string;
  initials: string;
}

interface DoctorReviewsProps {
  reviews: DoctorReview[];
  firstName: string;
}

/** Patient testimonials for this doctor, with an empty state. */
export default function DoctorReviews({ reviews, firstName }: DoctorReviewsProps) {
  return (
    <section id="testimonials">
      <DoctorSectionHeader
        icon={<FiMessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />}
        iconBg="from-purple-500 to-purple-700"
        title="What Patients Say"
        subtitle={`Real feedback from patients of ${firstName}`}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {reviews.slice(0, 3).map((t, i) => (
          <GlassCard key={i} className="!p-5 sm:!p-6 relative overflow-hidden">
            {/* Decorative quote */}
            <div className="absolute top-2 right-3 text-purple-100/60">
              <FaQuoteLeft className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-3">
              {[...Array(t.rating)].map((_, s) => (
                <FaStar key={s} className="w-3.5 h-3.5 text-yellow-400" />
              ))}
            </div>

            {/* Review */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-4 relative z-10">
              &ldquo;{t.review}&rdquo;
            </p>

            {/* Patient info */}
            <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
              <div
                className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-xs font-bold text-primary-950">{t.name}</p>
                <p className="text-[9px] text-gray-400">Verified Patient</p>
              </div>
              <div className="ml-auto">
                <FaCheckCircle className="w-4 h-4 text-accent-400" />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {reviews.length === 0 && (
        <GlassCard className="!p-6 sm:!p-8 text-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
            <FiMessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-purple-500" />
          </div>
          <p className="text-sm sm:text-base font-semibold text-primary-950 mb-1">
            Share Your Experience
          </p>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto">
            Be the first to leave a review about your experience with {firstName}.
          </p>
        </GlassCard>
      )}
    </section>
  );
}
