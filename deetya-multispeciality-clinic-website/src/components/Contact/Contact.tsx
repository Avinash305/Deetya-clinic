import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { contactInfoData, clinicInfo, servicesData } from '../../data/siteData';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', department: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello DEETYA Clinic! 👋\n\n📋 *Appointment Request*\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n📧 *Email:* ${formData.email}\n🏥 *Department:* ${formData.department}\n💬 *Message:* ${formData.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${clinicInfo.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-primary-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>            {/* Left — Contact Info + Map */}
          <div>
            <div className="grid xs:grid-cols-2 gap-3 xs:gap-4 mb-5 xs:mb-6">
              {contactInfoData.map((c, i) => (
                <div key={i} className="group p-3 xs:p-4 sm:p-5 bg-white rounded-xl xs:rounded-2xl border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 rounded-lg xs:rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white mb-2 xs:mb-3 group-hover:scale-110 transition-transform`}>{c.icon}</div>
                  <h4 className="font-bold text-primary-950 mb-1.5 xs:mb-2 text-xs xs:text-sm">{c.title}</h4>
                  {c.lines.map((line, li) => (<p key={li} className="text-xs xs:text-sm text-gray-500 leading-relaxed">{line}</p>))}
                </div>
              ))}
            </div>
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64 bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-8">
                <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, rgba(20,39,87,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              </div>
              <div className="text-center relative z-10">
                <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center animate-bounce">
                  <FiMapPin className="w-7 h-7 text-white" />
                </div>
                <p className="font-bold text-primary-900 text-sm">{clinicInfo.shortAddress}</p>
                <a href={clinicInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-primary-600 hover:text-primary-700 font-medium mt-1 inline-block">Open in Google Maps →</a>
              </div>
            </div>
          </div>

          {/* Right — Contact Form → WhatsApp */}
          <div className="bg-white rounded-xl xs:rounded-2xl border border-gray-100 shadow-lg p-4 xs:p-5 sm:p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 xs:w-10 xs:h-10 bg-green-500 rounded-lg xs:rounded-xl flex items-center justify-center shrink-0">
                <FaWhatsapp className="w-4 h-4 xs:w-5 xs:h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg xs:text-xl font-bold text-primary-950">Book via WhatsApp</h3>
                <p className="text-[10px] xs:text-xs text-gray-400">Fill the form & send directly to us</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-6">Complete the details below and tap send — it opens WhatsApp with your message pre-filled.</p>

            <form onSubmit={handleWhatsAppSend} className="space-y-4">
              <div className="grid xs:grid-cols-2 gap-3 xs:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <div className="relative">
                    <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                  <div className="relative">
                    <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 transition-all" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <div className="relative">
                  <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Department</label>
                <select name="department" required value={formData.department} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 transition-all bg-white">
                  <option value="">Select Department</option>
                  {servicesData.map((s, i) => (<option key={i}>{s.title}</option>))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                  <textarea name="message" rows={4} required value={formData.message} onChange={handleChange} placeholder="Describe your concern or preferred date/time..." className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 transition-all resize-none" />
                </div>
              </div>

              <button type="submit" className="group w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5 transition-all">
                <FaWhatsapp className="w-5 h-5" />
                Send via WhatsApp
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <p className="text-center text-xs text-gray-400 mt-2">
                Your details will be sent to our WhatsApp for quick response
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
