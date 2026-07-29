import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { clinicInfo } from '../../data/siteData';

export default function CTABanner() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative rounded-3xl overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-400/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          </div>
          <div className="relative z-10 px-4 xs:px-6 sm:px-8 lg:px-16 py-10 xs:py-12 sm:py-14 lg:py-16 text-center">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 xs:mb-4 leading-tight">
              Ready to Experience{' '}<span className="bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">Premium Healthcare?</span>
            </h2>
            <p className="text-primary-200 text-sm xs:text-base lg:text-lg max-w-2xl mx-auto mb-6 xs:mb-8 sm:mb-10">Book your appointment today and let our expert team take care of your health. Walk-in consultations are also welcome.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 xs:gap-4">
              <Link to="/contact" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 xs:gap-2.5 px-5 xs:px-6 sm:px-8 py-3 xs:py-3.5 sm:py-4 bg-white text-primary-700 font-semibold rounded-xl xs:rounded-2xl shadow-xl hover:bg-primary-50 hover:-translate-y-0.5 transition-all text-sm xs:text-base">
                Book Appointment<FiArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`} className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 xs:gap-2.5 px-5 xs:px-6 sm:px-8 py-3 xs:py-3.5 sm:py-4 text-white border-2 border-white/30 font-semibold rounded-xl xs:rounded-2xl hover:bg-white/10 hover:-translate-y-0.5 transition-all text-sm xs:text-base">
                <FiPhone className="w-4 h-4 xs:w-5 xs:h-5" />Call: {clinicInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
