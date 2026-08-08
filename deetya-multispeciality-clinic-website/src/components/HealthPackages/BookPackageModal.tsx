import { useState } from 'react';
import { FiX, FiUser, FiPhone, FiCalendar, FiClock, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import type { HealthPackageEntry } from '../../data/healthPackagesData';
import Modal from '../ui/Modal';
import FormField from '../ui/FormField';
import { bookingWhatsAppMessage, callbackWhatsAppMessage, formatINR, whatsappHref } from './bookingUtils';

interface BookPackageModalProps {
  pkg: HealthPackageEntry;
  mode: 'book' | 'callback';
  onClose: () => void;
}

const timeSlots = ['7 AM – 9 AM', '9 AM – 12 PM', '12 PM – 3 PM', '3 PM – 6 PM', '6 PM – 9 PM', '9 PM – 11 PM'];

export default function BookPackageModal({ pkg, mode, onClose }: BookPackageModalProps) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[0-9+\-\s]{10,15}$/.test(form.phone.trim())) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    setError('');
    const message =
      mode === 'book'
        ? bookingWhatsAppMessage(form.name.trim(), form.phone.trim(), form.date, form.time, form.notes.trim(), pkg)
        : callbackWhatsAppMessage(form.name.trim(), form.phone.trim(), form.time || 'Anytime', pkg.name);
    window.open(whatsappHref(message), '_blank');
    setSubmitted(true);
  };

  return (
    <Modal onClose={onClose}>
        {/* header */}
        <div className={`bg-gradient-to-br ${pkg.gradient} px-6 py-5 relative overflow-hidden`}>
          <div className="absolute -top-8 -right-6 w-32 h-32 rounded-full bg-white/10 blur-xl" />
          <button
            onClick={onClose}
            autoFocus
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur flex items-center justify-center text-white transition-colors"
            aria-label="Close"
          >
            <FiX className="w-4 h-4" />
          </button>
          <p className="text-[11px] font-bold uppercase tracking-wider text-white/80">
            {mode === 'book' ? 'Book Package' : 'Request Callback'}
          </p>
          <h3 className="text-lg font-extrabold text-white mt-0.5 pr-8">{pkg.name}</h3>
          <p className="text-white/90 text-xs mt-1">
            {formatINR(pkg.offerPrice)} <span className="line-through opacity-70">{formatINR(pkg.originalPrice)}</span>{' '}
            • {pkg.discountPercent}% OFF
          </p>
        </div>

        <div className="px-6 py-5">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-accent-100 flex items-center justify-center mb-4">
                <FiCheckCircle className="w-8 h-8 text-accent-600" />
              </div>
              <h4 className="text-lg font-bold text-primary-950">Request Sent!</h4>
              <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">
                We've opened WhatsApp with your details pre-filled. Just press send and our team will confirm your{' '}
                {mode === 'book' ? 'booking' : 'callback'} shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-5 px-6 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <FormField
                label="Full Name"
                name="name"
                required
                value={form.name}
                onChange={set('name')}
                placeholder="Your name"
                icon={<FiUser className="w-4 h-4" />}
              />

              <FormField
                type="tel"
                label="Phone Number"
                name="phone"
                required
                value={form.phone}
                onChange={set('phone')}
                placeholder="+91 XXXXX XXXXX"
                icon={<FiPhone className="w-4 h-4" />}
              />

              {mode === 'book' && (
                <div className="grid grid-cols-2 gap-3">
                  <FormField
                    type="date"
                    label="Preferred Date"
                    name="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={form.date}
                    onChange={set('date')}
                    icon={<FiCalendar className="w-4 h-4" />}
                    iconClassName="pointer-events-none"
                  />
                  <FormField
                    type="select"
                    label="Time Slot"
                    name="time"
                    required
                    value={form.time}
                    onChange={set('time')}
                    inputClassName="appearance-none"
                    icon={<FiClock className="w-4 h-4" />}
                    iconClassName="pointer-events-none"
                    options={[{ value: '', label: 'Select' }, ...timeSlots.map((t) => ({ value: t, label: t }))]}
                  />
                </div>
              )}

              {mode === 'callback' && (
                <FormField
                  type="select"
                  label="Best Time to Call"
                  name="time"
                  required
                  value={form.time}
                  onChange={set('time')}
                  options={[{ value: '', label: 'Select a time' }, ...timeSlots.map((t) => ({ value: t, label: t }))]}
                />
              )}

              {mode === 'book' && (
                <FormField
                  type="textarea"
                  label="Notes (optional)"
                  name="notes"
                  rows={2}
                  value={form.notes}
                  onChange={set('notes')}
                  placeholder="Any specific concern…"
                  inputClassName="resize-none"
                  icon={<FiMessageSquare className="w-4 h-4" />}
                />
              )}

              {error && <p className="text-xs font-semibold text-red-500">{error}</p>}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5 transition-all"
              >
                <FaWhatsapp className="w-4 h-4" />
                {mode === 'book' ? 'Confirm Booking via WhatsApp' : 'Request Callback via WhatsApp'}
              </button>
              <p className="text-center text-[11px] text-gray-400">
                Opens WhatsApp with your details pre-filled • No payment now
              </p>
            </form>
          )}
        </div>
    </Modal>
  );
}
