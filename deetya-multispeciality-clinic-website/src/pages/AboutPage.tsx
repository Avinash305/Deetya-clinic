import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner/PageBanner';
import Stats from '../components/Stats/Stats';
import Doctors from '../components/Doctors/Doctors';
import Testimonials from '../components/Testimonials/Testimonials';
import CTABanner from '../components/CTABanner/CTABanner';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FiArrowRight, FiTarget, FiEye, FiCheck, FiHeart, FiShield, FiStar, FiActivity } from 'react-icons/fi';
import { FaMedal, FaUserMd, FaHandHoldingMedical, FaAward } from 'react-icons/fa';
import { coreValues, timelineData, clinicInfo, pageBannerImages, aboutFeatures } from '../data/siteData';

const aboutImages = {
  story: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
  mission: 'https://images.pexels.com/photos/7659869/pexels-photo-7659869.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
  surgery: 'https://images.pexels.com/photos/7583367/pexels-photo-7583367.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=900',
};

export default function AboutPage() {
  const { ref: storyRef, isVisible: storyVis } = useScrollAnimation();
  const { ref: missionRef, isVisible: missionVis } = useScrollAnimation();
  const { ref: valRef, isVisible: valVis } = useScrollAnimation();
  const { ref: timeRef, isVisible: timeVis } = useScrollAnimation();
  const { ref: whyRef, isVisible: whyVis } = useScrollAnimation();

  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Discover the story, mission, and values behind DEETYA Multispeciality Clinic."
        breadcrumbs={[{ label: 'About Us' }]}
        bgImage={pageBannerImages.about}
      />

      {/* ───── OUR STORY ───── */}
      <section ref={storyRef} className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className={`relative ${storyVis ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/10">
                <img src={aboutImages.story} alt="Doctor consulting patient" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent" />
              </div>
              {/* Floating badge — reduced size */}
              <div className="absolute -bottom-4 -right-2 xs:-bottom-5 xs:-right-3 sm:-right-6 bg-white rounded-xl xs:rounded-2xl shadow-lg xs:shadow-xl p-2.5 xs:p-3 sm:p-4 border border-gray-100 z-10">
                <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-warm-500 to-warm-600 rounded-lg xs:rounded-xl flex items-center justify-center shadow-md xs:shadow-lg shadow-warm-500/30">
                    <FaMedal className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-lg xs:text-xl sm:text-2xl font-bold text-primary-950">15+</p>
                    <p className="text-[10px] xs:text-[11px] sm:text-xs text-gray-500 font-medium leading-tight">Years of Trust</p>
                  </div>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute -top-3 -left-3 xs:-top-4 xs:-left-4 w-full h-full border-2 border-primary-200/50 rounded-2xl xs:rounded-3xl -z-10" />
              {/* Accent dot */}
              <div className="absolute top-4 xs:top-6 -left-2 w-4 xs:w-5 h-4 xs:h-5 bg-accent-400 rounded-full shadow-lg shadow-accent-400/40 hidden lg:block" />
            </div>

            {/* Content */}
            <div className={`${storyVis ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full mb-4 xs:mb-5">
                <span className="w-2 h-2 bg-primary-500 rounded-full" />
                <span className="text-xs xs:text-sm font-semibold text-primary-700">Our Story</span>
              </div>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-4 xs:mb-6 leading-tight">
                A Legacy of{' '}
                <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                  Healing & Care
                </span>
              </h2>

              <p className="text-sm xs:text-base sm:text-lg text-gray-600 leading-relaxed mb-4 xs:mb-5">
                Founded in {clinicInfo.established}, {clinicInfo.fullName} began with a powerful
                mission — to provide world-class healthcare that is accessible, affordable, and
                deeply compassionate. What started as a small practice has grown into one of
                Gurugram's most trusted multispeciality clinics.
              </p>

              <p className="text-sm xs:text-base text-gray-500 leading-relaxed mb-6 xs:mb-8">
                Today we are home to <strong className="text-primary-950">25+ specialist doctors</strong>,{' '}
                <strong className="text-primary-950">15+ departments</strong>, and state-of-the-art
                diagnostic facilities — all under one roof. Over{' '}
                <strong className="text-primary-950">50,000 patients</strong> have trusted us with
                their health, and we continue to raise the bar with every consultation.
              </p>

              {/* Mini stats row */}
              <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8">
                {[
                  { num: '50K+', label: 'Patients Served', color: 'text-primary-600' },
                  { num: '25+', label: 'Specialists', color: 'text-accent-600' },
                  { num: '15+', label: 'Departments', color: 'text-warm-600' },
                ].map((s, i) => (
                  <div key={i} className="text-center p-2 xs:p-2.5 sm:p-3 rounded-lg xs:rounded-xl bg-gray-50 border border-gray-100">
                    <p className={`text-base xs:text-lg sm:text-2xl font-bold ${s.color}`}>{s.num}</p>
                    <p className="text-[10px] xs:text-xs text-gray-500 font-medium mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/services"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white font-semibold rounded-xl hover:bg-primary-800 shadow-lg shadow-primary-700/25 transition-all hover:-translate-y-0.5"
              >
                Explore Our Services
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───── STATS ───── */}
      <Stats />

      {/* ───── MISSION & VISION ───── */}
      <section ref={missionRef} className="py-20 lg:py-28 bg-gradient-to-b from-primary-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content first on desktop */}
            <div className={`order-2 lg:order-1 ${missionVis ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 bg-accent-50 border border-accent-200 rounded-full mb-4 xs:mb-5">
                <span className="w-2 h-2 bg-accent-500 rounded-full" />
                <span className="text-xs xs:text-sm font-semibold text-accent-700">Mission & Vision</span>
              </div>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-4 xs:mb-6 leading-tight">
                Guided by{' '}
                <span className="bg-gradient-to-r from-accent-600 to-primary-500 bg-clip-text text-transparent">
                  Purpose
                </span>
              </h2>

              <p className="text-sm xs:text-base sm:text-lg text-gray-600 leading-relaxed mb-6 xs:mb-8">
                Every decision we make and every treatment we offer is driven by our unwavering
                commitment to patient wellbeing. We don't just treat conditions — we build lasting
                relationships founded on trust and care.
              </p>

              {/* Mission & Vision cards */}
              <div className="grid xs:grid-cols-2 gap-3 xs:gap-4 mb-6 xs:mb-8">
                <div className="p-4 xs:p-5 rounded-xl xs:rounded-2xl bg-white border border-primary-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-3">
                    <FiTarget className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-primary-950 mb-1.5">Our Mission</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    To deliver accessible, affordable, and exceptional healthcare backed by advanced
                    technology and a patient-first philosophy.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-accent-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 bg-gradient-to-br from-accent-500 to-accent-700 rounded-xl flex items-center justify-center mb-3">
                    <FiEye className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-primary-950 mb-1.5">Our Vision</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    To be the most trusted healthcare partner in every community we serve — recognized
                    for clinical excellence and genuine compassion.
                  </p>
                </div>
              </div>

              {/* Feature list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {aboutFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-accent-100 flex items-center justify-center shrink-0">
                      <FiCheck className="w-3 h-3 text-accent-600" />
                    </div>
                    <span className="text-sm text-gray-600">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className={`order-1 lg:order-2 ${missionVis ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="relative">
                <div className="rounded-2xl xs:rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/10">
                  <img src={aboutImages.mission} alt="Doctor and patient consultation" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </div>
                {/* Floating badge — reduced */}
                <div className="absolute -bottom-3 -left-2 xs:-bottom-4 xs:-left-3 sm:-left-6 bg-white rounded-xl xs:rounded-2xl shadow-lg xs:shadow-xl p-2.5 xs:p-3 sm:p-4 border border-gray-100 z-10">
                  <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg xs:rounded-xl flex items-center justify-center">
                      <FaHandHoldingMedical className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-base xs:text-lg sm:text-lg font-bold text-primary-950">98%</p>
                      <p className="text-[10px] xs:text-[11px] sm:text-xs text-gray-500 leading-tight">Satisfaction Rate</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 xs:-top-3 xs:-right-3 w-full h-full border-2 border-accent-200/50 rounded-2xl xs:rounded-3xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── CORE VALUES ───── */}
      <section ref={valRef} className="py-16 xs:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-2xl mx-auto mb-14 ${valVis ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-warm-50 border border-warm-200 rounded-full mb-4">
              <span className="w-2 h-2 bg-warm-500 rounded-full" />
              <span className="text-sm font-semibold text-warm-700">Core Values</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-4">
              What We{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Stand For
              </span>
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600">
              The principles that guide every treatment, every consultation, and every interaction at DEETYA.
            </p>
          </div>
          <div className={`grid xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 ${valVis ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {coreValues.map((v, i) => (
              <div
                key={i}
                className="group relative p-4 xs:p-5 sm:p-7 bg-white rounded-xl xs:rounded-2xl border border-gray-100 hover:border-transparent shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${v.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className={`w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 mx-auto mb-3 xs:mb-4 sm:mb-5 rounded-xl xs:rounded-2xl bg-gradient-to-br ${v.gradient} flex items-center justify-center text-white group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300`}>
                    {v.icon}
                  </div>
                  <h3 className="text-sm xs:text-base sm:text-lg font-bold text-primary-950 mb-1.5 xs:mb-2 group-hover:text-white transition-colors">{v.title}</h3>
                  <p className="text-xs xs:text-sm text-gray-500 leading-relaxed group-hover:text-white/80 transition-colors">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── WHY DEETYA — Key Differentiators ───── */}
      <section ref={whyRef} className="py-16 xs:py-20 lg:py-28 bg-gradient-to-br from-primary-900 via-primary-950 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-2xl mx-auto mb-14 ${whyVis ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-4">
              <span className="w-2 h-2 bg-accent-400 rounded-full" />
              <span className="text-sm font-semibold text-accent-300">Why Choose DEETYA</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              The DEETYA{' '}
              <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">Advantage</span>
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-primary-200">What sets us apart in the healthcare landscape.</p>
          </div>

          <div className={`grid xs:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 ${whyVis ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {[
              { icon: <FaAward className="w-5 h-5 xs:w-6 xs:h-6" />, title: 'NABH Accredited', desc: 'Our systems and processes meet national quality benchmarks for patient safety.' },
              { icon: <FiActivity className="w-5 h-5 xs:w-6 xs:h-6" />, title: 'Advanced Diagnostics', desc: 'In-house pathology lab, imaging center, and rapid testing for precise diagnosis.' },
              { icon: <FaUserMd className="w-5 h-5 xs:w-6 xs:h-6" />, title: 'Multi-Specialty Expertise', desc: '25+ specialists across 15+ departments — comprehensive care under one roof.' },
              { icon: <FiHeart className="w-5 h-5 xs:w-6 xs:h-6" />, title: 'Patient-First Approach', desc: 'Personalized treatment plans, transparent billing, and continuous follow-up care.' },
              { icon: <FiShield className="w-5 h-5 xs:w-6 xs:h-6" />, title: 'Cashless Insurance', desc: 'Seamless cashless processing for all major insurance providers at our dedicated desk.' },
              { icon: <FiStar className="w-5 h-5 xs:w-6 xs:h-6" />, title: '98% Satisfaction', desc: 'Our patients rate us among the top clinics for care quality and staff behaviour.' },
            ].map((item, i) => (
              <div key={i} className="group p-4 xs:p-5 sm:p-6 rounded-xl xs:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 mb-3 xs:mb-4 rounded-lg xs:rounded-xl bg-gradient-to-br from-accent-400/20 to-accent-500/10 border border-accent-400/20 flex items-center justify-center text-accent-400 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-sm xs:text-base font-bold mb-1 xs:mb-1.5">{item.title}</h3>
                <p className="text-xs xs:text-sm text-primary-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── OUR DOCTORS ───── */}
      <Doctors />

      {/* ───── FULL-WIDTH IMAGE BREAK ───── */}
      <section className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <img src={aboutImages.surgery} alt="Medical team in operation theater" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/70 via-primary-950/40 to-primary-950/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 sm:mb-3 drop-shadow-lg px-4">Excellence in Every Procedure</p>
            <p className="text-white/70 text-xs sm:text-sm lg:text-base max-w-lg mx-auto drop-shadow px-4">Our surgical teams operate with precision, using the latest minimally invasive techniques for faster recovery.</p>
          </div>
        </div>
      </section>

      {/* ───── JOURNEY TIMELINE ───── */}
      <section ref={timeRef} className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 xs:mb-14 sm:mb-16 ${timeVis ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 bg-primary-50 border border-primary-200 rounded-full mb-4">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              <span className="text-sm font-semibold text-primary-700">Our Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-4">
              Milestones of{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-gray-600 text-sm xs:text-base sm:text-lg max-w-xl mx-auto">From a single room clinic to a multi-department healthcare hub — our story in milestones.</p>
          </div>

          <div className={`relative ${timeVis ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* Mobile left line */}
            <div className="absolute left-4 xs:left-5 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-300 via-accent-300 to-warm-300 lg:-translate-x-1/2" />

            <div className="space-y-6 xs:space-y-8 lg:space-y-12">
              {timelineData.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={i} className={`relative flex items-start gap-3 xs:gap-6 lg:gap-0 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Desktop content */}
                    <div className={`hidden lg:flex flex-1 ${isLeft ? 'justify-end pr-14' : 'justify-start pl-14'}`}>
                      <div className={`max-w-sm ${isLeft ? 'text-right' : 'text-left'}`}>
                        <span className="inline-block px-2.5 xs:px-3 py-0.5 xs:py-1 bg-primary-50 text-primary-600 text-[10px] xs:text-xs font-bold rounded-full mb-1.5 xs:mb-2">{item.year}</span>
                        <h4 className="text-base xs:text-lg sm:text-xl font-bold text-primary-950 mb-1">{item.title}</h4>
                        <p className="text-xs xs:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {/* Circle */}
                    <div className="relative z-10 shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                      <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-[10px] xs:text-xs font-bold shadow-lg ring-4 ring-white">
                        {item.year.slice(2)}
                      </div>
                    </div>

                    {/* Mobile content */}
                    <div className="flex-1 lg:hidden pt-0.5">
                      <span className="inline-block px-2 xs:px-3 py-0.5 xs:py-1 bg-primary-50 text-primary-600 text-[10px] xs:text-xs font-bold rounded-full mb-1 xs:mb-2">{item.year}</span>
                      <h4 className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold text-primary-950 mb-0.5 xs:mb-1">{item.title}</h4>
                      <p className="text-[11px] xs:text-xs sm:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>

                    {/* Desktop empty side */}
                    <div className="hidden lg:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <Testimonials limit={3} />

      {/* ───── CTA ───── */}
      <CTABanner />
    </>
  );
}
