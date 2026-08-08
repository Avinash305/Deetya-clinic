import { FaQuestionCircle } from 'react-icons/fa';
import {
  FiEye, FiHeart, FiMonitor, FiTrendingUp, FiThumbsUp, FiShield, FiHelpCircle,
} from 'react-icons/fi';
import type { DoctorDetail } from '../../data/doctorsData';
import DoctorSectionHeader from './DoctorSectionHeader';
import GlassCard from './DoctorGlassCard';
import DoctorAccordion from './DoctorAccordion';

interface DoctorClinicalProps {
  doctor: DoctorDetail;
  firstName: string;
}

const processSteps = [
  { step: '01', title: 'Consultation', desc: 'Initial discussion of your health concerns and medical history.' },
  { step: '02', title: 'Evaluation', desc: 'Thorough examination and assessment of your condition.' },
  { step: '03', title: 'Diagnosis', desc: 'Evidence-based diagnosis with clear explanations.' },
  { step: '04', title: 'Treatment Plan', desc: 'Personalized plan tailored to your unique needs.' },
  { step: '05', title: 'Procedure', desc: 'Safe and comfortable treatment administration.' },
  { step: '06', title: 'Recovery', desc: 'Guided recovery with follow-up monitoring.' },
  { step: '07', title: 'Follow-Up', desc: 'Ongoing support and care for lasting wellness.' },
];

/** Conditions treated, treatment journey, what-to-expect and FAQ. */
export default function DoctorClinical({ doctor, firstName }: DoctorClinicalProps) {
  const hasClinical = doctor.conditions && doctor.conditions.length > 0;
  const hasJourney = doctor.whatToExpect && doctor.whatToExpect.length > 0;
  const hasFaq = doctor.faq && doctor.faq.length > 0;

  return (
    <>
      {/* ── CONDITIONS TREATED ── */}
      {hasClinical && (
        <section id="conditions">
          <DoctorSectionHeader
            icon={<FiEye className="w-5 h-5 sm:w-6 sm:h-6" />}
            iconBg={doctor.color}
            title={`When to See ${firstName}`}
            subtitle="Conditions we commonly diagnose and treat"
          />

          <div className="space-y-3 sm:space-y-4">
            {doctor.conditions.map((condition, i) => (
              <DoctorAccordion
                key={i}
                icon={
                  i % 2 === 0 ? (
                    <FiHeart className="w-4 h-4" />
                  ) : (
                    <FiMonitor className="w-4 h-4" />
                  )
                }
                iconBg={doctor.color}
                title={condition.title}
                defaultOpen={i === 0}
              >
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {condition.description}
                </p>
              </DoctorAccordion>
            ))}
          </div>
        </section>
      )}

      {/* ── TREATMENT PROCESS ── */}
      {hasJourney && (
        <section id="process">
          <DoctorSectionHeader
            icon={<FiTrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />}
            iconBg="from-primary-500 to-primary-700"
            title="Your Treatment Journey"
            subtitle="Step-by-step process from consultation to recovery"
          />

          {/* Vertical timeline for mobile, horizontal stepping for desktop */}
          <div className="relative">
            {/* Desktop: horizontal connecting line */}
            <div className="hidden md:block absolute top-8 left-[calc(14.28%+16px)] right-[calc(14.28%+16px)] h-[3px] bg-gradient-to-r from-primary-200 via-accent-200 to-primary-200 rounded-full" />

            <div className="grid md:grid-cols-7 gap-4 sm:gap-5">
              {processSteps.map(({ step, title, desc }, i) => (
                <div key={i} className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-3 group">
                  {/* Step number circle */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-xl shadow-primary-500/20 ring-[5px] ring-white group-hover:scale-110 group-hover:ring-primary-100 transition-all duration-500">
                      {step}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 md:text-center">
                    <h4 className="text-xs sm:text-sm font-bold text-primary-950 mb-1 group-hover:text-primary-700 transition-colors">
                      {title}
                    </h4>
                    <p className="text-[10px] xs:text-xs text-gray-400 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                  {/* Arrow connector on mobile */}
                  {i < 6 && (
                    <div className="md:hidden absolute -bottom-4 left-7 w-0.5 h-4 sm:h-5 bg-gradient-to-b from-primary-300 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── WHAT TO EXPECT ── */}
      {hasJourney && (
        <section id="expectations">
          <DoctorSectionHeader
            icon={<FiThumbsUp className="w-5 h-5 sm:w-6 sm:h-6" />}
            iconBg="from-teal-500 to-teal-700"
            title="What to Expect During Your Visit"
            subtitle="Making your visit comfortable and stress-free"
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[23px] sm:left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-300 via-emerald-300 to-primary-300 rounded-full" />

            <div className="space-y-4 sm:space-y-5">
              {doctor.whatToExpect.map((item, i) => (
                <div key={i} className="relative flex items-start gap-4 sm:gap-5 group">
                  {/* Numbered dot */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-[46px] h-[46px] sm:w-[54px] sm:h-[54px] rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-xl shadow-teal-500/20 ring-[5px] ring-white group-hover:scale-110 group-hover:ring-teal-100 transition-all duration-400">
                      {i + 1}
                    </div>
                  </div>
                  {/* Content */}
                  <GlassCard className="flex-1 !p-3 sm:!p-4 lg:!p-5">
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item}</p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

          {/* Summary card */}
          <GlassCard className="!p-4 sm:!p-6 mt-6 !bg-gradient-to-br from-teal-50/50 to-emerald-50/30 !border-teal-100">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                <FiShield className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-teal-800 mb-1">
                  Your comfort is our priority
                </p>
                <p className="text-[10px] sm:text-xs text-teal-600/80 leading-relaxed">
                  {firstName} and the DEETYA Clinic team are committed to providing you with a
                  comfortable, respectful, and thorough healthcare experience every time you visit.
                </p>
              </div>
            </div>
          </GlassCard>
        </section>
      )}

      {/* ── FAQ ── */}
      {hasFaq && (
        <section id="faq">
          <DoctorSectionHeader
            icon={<FaQuestionCircle className="w-5 h-5 sm:w-6 sm:h-6" />}
            iconBg="from-warm-500 to-warm-700"
            title="Frequently Asked Questions"
            subtitle={`Common questions about ${firstName}'s practice`}
          />

          <div className="space-y-3 sm:space-y-4">
            {doctor.faq.map((faqItem, i) => (
              <DoctorAccordion
                key={i}
                icon={<FiHelpCircle className="w-4 h-4" />}
                iconBg="from-warm-500 to-warm-700"
                title={faqItem.q}
              >
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{faqItem.a}</p>
              </DoctorAccordion>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
