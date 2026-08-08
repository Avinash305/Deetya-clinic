import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { contactInfoData } from '../../data/siteData';
import { servicesData } from '../../data/servicesData';
import { mapsHref, whatsappHref } from '../../utils/links';
import FormField from '../ui/FormField';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', department: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello DEETYA Clinic! 👋\n\n📋 *Appointment Request*\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n📧 *Email:* ${formData.email}\n🏥 *Department:* ${formData.department}\n💬 *Message:* ${formData.message}`;
    window.open(whatsappHref(text), '_blank');
  };

  return (
    <section id="contact" ref={ref} className="py-16 xs:py-20 lg:py-28 bg-gradient-to-b from-primary-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>            {/* Left — Contact Info + Map */}
          <div>
            <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 mb-4 xs:mb-5 sm:mb-6">
              {contactInfoData.map((c, i) => (
                <div key={i} className="group p-2 xs:p-3 sm:p-5 bg-white rounded-lg xs:rounded-xl sm:rounded-2xl border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-7 h-7 xs:w-9 xs:h-9 sm:w-11 sm:h-11 rounded-lg xs:rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white mb-1.5 xs:mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}>{c.icon}</div>
                  <h4 className="font-bold text-primary-950 mb-1 xs:mb-1.5 text-[11px] xs:text-xs sm:text-sm">{c.title}</h4>
                  {c.lines.map((line, li) => (<p key={li} className="text-[11px] xs:text-xs sm:text-sm text-gray-500 leading-relaxed">{line}</p>))}
                </div>
              ))}
            </div>
            {/* Map + location QR */}
            <div className="relative rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6040318221335!2d77.55916757454507!3d12.868832317124165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae41af60d85895%3A0x5ff086dda4e75561!2sDeetya%20multi-speciality%20clinic%20and%20diagnostics!5e0!3m2!1sen!2sin!4v1786190969048!5m2!1sen!2sin"
                title="DEETYA Multispeciality Clinic location on Google Maps"
                className="w-full h-[260px] xs:h-[300px] sm:h-[340px] block"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              {/* Open in Google Maps overlay */}
              <a
                href={mapsHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-3 bottom-3 z-10 inline-flex items-center gap-1.5 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg ring-1 ring-gray-100 text-primary-700 font-semibold text-[10px] xs:text-xs hover:bg-white hover:shadow-xl transition-all"
              >
                <FiMapPin className="w-3.5 h-3.5" />
                Open in Google Maps →
              </a>
              {/* location QR code */}
              <div className="absolute right-3 bottom-3 z-10">
                <a
                  href={mapsHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl xs:rounded-2xl shadow-lg ring-1 ring-gray-100 p-1.5 xs:p-2 flex flex-col items-center gap-1 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  title="Scan to open the location in Google Maps"
                >
                  <img
                    src="/images/location.webp"
                    alt="QR code — scan to open DEETYA Clinic location in Google Maps"
                    className="w-14 xs:w-16 sm:w-20 h-auto rounded-md"
                    loading="lazy"
                  />
                  <span className="text-[7px] xs:text-[8px] text-gray-400 font-bold uppercase tracking-wider">Scan to navigate</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right — Contact Form → WhatsApp */}
          <div className="bg-white rounded-xl xs:rounded-2xl border border-gray-100 shadow-lg p-4 xs:p-5 sm:p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 xs:w-10 xs:h-10 bg-green-500 rounded-lg xs:rounded-xl flex items-center justify-center shrink-0">
                <FaWhatsapp className="w-4 h-4 xs:w-5 xs:h-5 text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-primary-950">Book via WhatsApp</h3>
                <p className="text-[11px] xs:text-xs text-gray-400">Fill the form & send directly to us</p>
              </div>
            </div>
            <p className="text-xs xs:text-sm text-gray-500 mb-4 xs:mb-6">Complete the details below and tap send — it opens WhatsApp with your message pre-filled.</p>

            <form onSubmit={handleWhatsAppSend} className="space-y-3 xs:space-y-4">
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4">
                <FormField
                  variant="green"
                  label="Full Name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  icon={<FiUser className="w-3.5 h-3.5 xs:w-4 xs:h-4" />}
                />
                <FormField
                  variant="green"
                  type="tel"
                  label="Phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  icon={<FiPhone className="w-3.5 h-3.5 xs:w-4 xs:h-4" />}
                />
              </div>
              <FormField
                variant="green"
                type="email"
                label="Email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                icon={<FiMail className="w-3.5 h-3.5 xs:w-4 xs:h-4" />}
              />
              <FormField
                variant="green"
                type="select"
                label="Department"
                name="department"
                required
                value={formData.department}
                onChange={handleChange}
                options={[{ value: '', label: 'Select Department' }, ...servicesData.map((s) => ({ value: s.title, label: s.title }))]}
              />
              <FormField
                variant="green"
                type="textarea"
                label="Message"
                name="message"
                required
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your concern or preferred date/time..."
                inputClassName="resize-none"
                icon={<FiMessageSquare className="w-3.5 h-3.5 xs:w-4 xs:h-4" />}
              />

              <button type="submit" className="group w-full flex items-center justify-center gap-2 xs:gap-3 px-4 xs:px-6 py-3 xs:py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg xs:rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5 transition-all text-xs xs:text-sm">
                <FaWhatsapp className="w-4 h-4 xs:w-5 xs:h-5 shrink-0" />
                <span>Send via WhatsApp</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <p className="text-center text-[10px] xs:text-xs text-gray-400 mt-1 xs:mt-2">
                Your details will be sent to our WhatsApp for quick response
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
