import { FiPhone, FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { appointmentSteps, clinicInfo } from '../../data/siteData';
import SectionHeader from '../ui/SectionHeader';
import { telHref, whatsappHref } from '../../utils/links';

export default function AppointmentSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="appointment" ref={ref} className="py-16 xs:py-20 lg:py-28 bg-gradient-to-b from-white to-primary-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-100/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left — Steps */}
          <div className={`order-2 lg:order-1 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <SectionHeader
              badge="How It Works"
              badgeTone="warm"
              align="left"
              badgeClassName="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 bg-warm-50 border border-warm-200 rounded-full mb-3 xs:mb-4"
              title="Easy Appointment "
              gradient="Process"
              gradientClassName="text-gradient"
              titleClassName="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-3 xs:mb-4"
              subtitle="Booking an appointment at DEETYA is simple and hassle-free. Follow these four easy steps."
              subtitleClassName="text-sm xs:text-base sm:text-lg text-gray-600 mb-6 xs:mb-8 sm:mb-10"
            />

            <div className="space-y-5 xs:space-y-6 sm:space-y-7">
              {appointmentSteps.map((s, i) => (
                <div key={i} className="group flex items-start gap-4 xs:gap-5 sm:gap-6">
                  <div className="relative shrink-0">
                    <div className={`w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 rounded-xl xs:rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-black/5`}>
                      {s.icon}
                    </div>
                    {i < appointmentSteps.length - 1 && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-5 xs:h-6 sm:h-7 bg-gradient-to-b from-gray-300 to-transparent" />
                    )}
                  </div>
                  <div className="pt-1 xs:pt-1.5">
                    <span className="text-[10px] xs:text-xs font-bold text-gray-400 tracking-wider">STEP {s.step}</span>
                    <h4 className="text-sm xs:text-base sm:text-lg font-bold text-primary-950 mb-1">{s.title}</h4>
                    <p className="text-xs xs:text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Booking Card */}
          <div className={`order-1 lg:order-2 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-2xl xs:rounded-3xl p-6 xs:p-8 sm:p-10 lg:p-12 text-white overflow-hidden shadow-2xl shadow-primary-600/20">
              {/* Background decoration circles */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-accent-500/10 rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 xs:gap-3 mb-4 xs:mb-5">
                  <div className="w-10 xs:w-12 h-10 xs:h-12 bg-white/15 rounded-lg xs:rounded-xl flex items-center justify-center backdrop-blur-sm shrink-0">
                    <FiCalendar className="w-5 xs:w-6 h-5 xs:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold leading-tight">Book Your Visit</h3>
                    <p className="text-primary-200 text-[11px] xs:text-xs sm:text-sm">Schedule your consultation today</p>
                  </div>
                </div>

                <p className="text-primary-200 text-xs xs:text-sm sm:text-base mb-5 xs:mb-6 leading-relaxed">
                  Take the first step towards better health. Our friendly staff will help you schedule a visit with the right specialist.
                </p>

                {/* Quick contact buttons */}
                <div className="space-y-3 xs:space-y-3.5 mb-6 xs:mb-7">
                  <a
                    href={telHref()}
                    className="flex items-center justify-center gap-2 xs:gap-3 w-full px-4 xs:px-6 py-3 xs:py-3.5 min-h-[44px] bg-white/10 border border-white/20 backdrop-blur-sm text-white font-semibold rounded-lg xs:rounded-xl hover:bg-white/20 transition-all text-[11px] xs:text-sm group"
                  >
                    <FiPhone className="w-3.5 xs:w-4 h-3.5 xs:h-4 shrink-0" />
                    <span>Call: {clinicInfo.phone}</span>
                    <FiArrowRight className="w-3.5 xs:w-4 h-3.5 xs:h-4 group-hover:translate-x-1 transition-transform ml-auto shrink-0" />
                  </a>
                  <a
                    href={whatsappHref(clinicInfo.whatsappDefault)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 xs:gap-3 w-full px-4 xs:px-6 py-3 xs:py-3.5 min-h-[44px] bg-accent-500 text-white font-semibold rounded-lg xs:rounded-xl hover:bg-accent-600 transition-all text-[11px] xs:text-sm group"
                  >
                    <FaWhatsapp className="w-3.5 xs:w-4 h-3.5 xs:h-4 shrink-0" />
                    <span>WhatsApp Us</span>
                    <FiArrowRight className="w-3.5 xs:w-4 h-3.5 xs:h-4 group-hover:translate-x-1 transition-transform ml-auto shrink-0" />
                  </a>
                </div>

                {/* Working hours */}
                <div className="pt-5 xs:pt-6 border-t border-white/15">
                  <div className="flex items-center gap-2 mb-3 xs:mb-4">
                    <FiClock className="w-3.5 xs:w-4 h-3.5 xs:h-4 text-accent-300 shrink-0" />
                    <p className="text-[11px] xs:text-xs sm:text-sm font-semibold text-white">Working Hours</p>
                  </div>
                  <div className="space-y-2 xs:space-y-2.5 text-[11px] xs:text-xs sm:text-sm">
                    <div className="flex justify-between gap-2">
                      <span className="text-primary-200">Monday – Saturday</span>
                      <span className="font-semibold whitespace-nowrap">7:00 AM – 11:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-primary-200">Sunday</span>
                      <span className="font-semibold whitespace-nowrap">7:30 AM – 1:30 PM</span>
                    </div>
                    <div className="flex justify-between gap-2 pt-2 border-t border-white/10">
                      <span className="text-primary-200">Emergency</span>
                      <span className="font-semibold text-accent-300 text-right">{clinicInfo.workingHours.emergency}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
