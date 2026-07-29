import { FiPhone, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { appointmentSteps, clinicInfo } from '../../data/siteData';

export default function AppointmentSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="appointment" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className={`order-2 lg:order-1 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 bg-warm-50 border border-warm-200 rounded-full mb-3 xs:mb-4">
              <span className="w-2 h-2 bg-warm-500 rounded-full" /><span className="text-xs xs:text-sm font-semibold text-warm-700">How It Works</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-3 xs:mb-4">Easy Appointment{' '}<span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Process</span></h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 mb-6 xs:mb-8 sm:mb-10">Booking an appointment at DEETYA is simple and hassle-free. Follow these four easy steps.</p>
            <div className="space-y-4 xs:space-y-5 sm:space-y-6">
              {appointmentSteps.map((s, i) => (
                <div key={i} className="group flex items-start gap-3 xs:gap-4 sm:gap-5">
                  <div className="relative shrink-0">
                    <div className={`w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-lg xs:rounded-xl sm:rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>{s.icon}</div>
                    {i < appointmentSteps.length - 1 && <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-4 xs:h-5 sm:h-6 bg-gradient-to-b from-gray-300 to-transparent" />}
                  </div>
                  <div className="pt-0.5 xs:pt-1">
                    <span className="text-[10px] xs:text-xs font-bold text-gray-400 tracking-wider">STEP {s.step}</span>
                    <h4 className="text-sm xs:text-base sm:text-lg font-bold text-primary-950 mb-0.5 xs:mb-1">{s.title}</h4>
                    <p className="text-xs xs:text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`order-1 lg:order-2 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl xs:rounded-3xl p-5 xs:p-6 sm:p-8 lg:p-10 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-xl xs:text-2xl lg:text-3xl font-bold mb-3 xs:mb-4">Book Your Appointment Today</h3>
                <p className="text-primary-200 text-sm xs:text-base mb-6 xs:mb-8 leading-relaxed">Take the first step towards better health. Our friendly staff will help you schedule a visit with the right specialist.</p>
                <div className="space-y-4 mb-8">
                  <a href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-white text-primary-700 font-semibold rounded-2xl hover:bg-primary-50 transition-colors group">
                    <FiPhone className="w-5 h-5" />Call: {clinicInfo.phone}<FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(clinicInfo.whatsappDefault)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-accent-500 text-white font-semibold rounded-2xl hover:bg-accent-600 transition-colors group">
                    <FaWhatsapp className="w-5 h-5" />WhatsApp Us<FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                <div className="pt-6 border-t border-white/20">
                  <p className="text-sm text-primary-200 mb-3 font-medium">Working Hours</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-primary-200">Mon – Sat</span><span className="font-semibold">8:00 AM – 9:00 PM</span></div>
                    <div className="flex justify-between"><span className="text-primary-200">Sunday</span><span className="font-semibold">9:00 AM – 2:00 PM</span></div>
                    <div className="flex justify-between"><span className="text-primary-200">Emergency</span><span className="font-semibold text-accent-300">{clinicInfo.workingHours.emergency}</span></div>
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
