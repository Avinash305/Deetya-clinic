import { FiArrowRight, FiAward, FiUsers, FiHeart } from 'react-icons/fi';
import { FaUserMd } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { aboutFeatures, clinicInfo } from '../../data/siteData';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import CheckListItem from '../ui/CheckListItem';
import FloatingBadge from '../ui/FloatingBadge';

const aboutImage = '/images/about-clinic.webp';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="py-16 xs:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <div className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/10">
                <img src={aboutImage} alt="Doctor consulting a patient" className="w-full aspect-[3/2] object-cover" loading="lazy" />
              </div>

              <FloatingBadge
                size="sm"
                position="bottom-right"
                iconBg="from-accent-500 to-accent-600"
                icon={<FaUserMd className="w-2.5 h-2.5 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-white" />}
                title="5+"
                subtitle="Specialist Doctors"
                iconClassName="w-5 h-5 xs:w-7 xs:h-7 sm:w-9 sm:h-9 rounded-lg shadow-md shadow-accent-500/30 shrink-0"
                titleClassName="text-[10px] xs:text-sm sm:text-lg"
                subtitleClassName="font-medium"
              />

              <FloatingBadge
                size="sm"
                position="top-left"
                iconBg="from-warm-500 to-warm-600"
                icon={<FiAward className="w-2 h-2 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-white" />}
                title="15+ Yrs"
                subtitle="Experience"
                iconClassName="w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 rounded-lg shrink-0"
                titleClassName="text-[9px] xs:text-xs sm:text-base"
              />

              <div className="absolute -top-1.5 -left-1.5 xs:-top-3 xs:-left-3 w-full h-full border-2 border-primary-200/50 rounded-xl xs:rounded-2xl sm:rounded-3xl -z-10" />
            </div>
          </div>

          {/* Right — Content */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <SectionHeader
              badge="About Our Clinic"
              align="left"
              badgeClassName="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full mb-5"
              title="Trusted Healthcare "
              gradient={`Since ${clinicInfo.established}`}
            />

            <p className="text-sm xs:text-base sm:text-lg text-gray-600 leading-relaxed mb-5 xs:mb-6">
              {clinicInfo.fullName} has been a beacon of healthcare excellence since {clinicInfo.established}. We combine cutting-edge medical technology with compassionate care to deliver comprehensive solutions for you and your family.
            </p>

            {/* Quick stats row */}
            <div className="grid grid-cols-3 gap-1.5 xs:gap-3 mb-5 xs:mb-7">
              {[
                { icon: <FiHeart className="w-4 h-4 xs:w-5 xs:h-5" />, num: '500+', label: 'Happy Patients', color: 'text-primary-600 bg-primary-50' },
                { icon: <FiUsers className="w-4 h-4 xs:w-5 xs:h-5" />, num: '5+', label: 'Specialties', color: 'text-accent-600 bg-accent-50' },
                { icon: <FiAward className="w-4 h-4 xs:w-5 xs:h-5" />, num: '98%', label: 'Satisfaction', color: 'text-warm-600 bg-warm-50' },
              ].map((s, i) => (
                <div key={i} className={`flex flex-col items-center p-2 xs:p-3 rounded-lg xs:rounded-xl border border-gray-100 ${s.color}`}>
                  {s.icon}
                  <p className="text-base xs:text-lg sm:text-xl font-bold text-primary-950 mt-0.5 xs:mt-1">{s.num}</p>
                  <p className="text-[10px] xs:text-xs text-gray-500 font-medium">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Feature checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {aboutFeatures.map((f, i) => (
                <CheckListItem key={i} className="gap-2.5">
                  <span className="text-xs xs:text-sm text-gray-600">{f}</span>
                </CheckListItem>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button to="/about" variant="solid">
                Learn More About Us
                <FiArrowRight className="w-3.5 xs:w-4 h-3.5 xs:h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Button>
              <Button to="/services" variant="outline">
                Our Services
                <FiArrowRight className="w-3.5 xs:w-4 h-3.5 xs:h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
