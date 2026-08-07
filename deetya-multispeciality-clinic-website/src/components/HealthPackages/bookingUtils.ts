import { clinicInfo } from '../../data/siteData';
import type { HealthPackageEntry } from '../../data/healthPackagesData';

/** Format a rupee amount in Indian digit grouping, e.g. ₹1,29,999 */
export const formatINR = (amount: number): string =>
  `₹${amount.toLocaleString('en-IN')}`;

/** tel: link for the clinic's main line */
export const telHref = (): string => `tel:${clinicInfo.phone.replace(/\s/g, '')}`;

/** WhatsApp deep link with a pre-filled message */
export const whatsappHref = (message: string): string =>
  `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;

/** Pre-filled WhatsApp message for a specific package */
export const packageWhatsAppMessage = (pkg: HealthPackageEntry): string =>
  `Hi DEETYA Clinic! 👋\n\nI would like to book the *${pkg.name}*.\n\n• Offer Price: ${formatINR(pkg.offerPrice)} (${pkg.discountPercent}% OFF)\n• Tests: ${pkg.totalTests}\n\nPlease share the available slots for the booking.`;

/** Pre-filled WhatsApp message for a callback request */
export const callbackWhatsAppMessage = (
  name: string,
  phone: string,
  time: string,
  pkgName?: string
): string =>
  `Hi DEETYA Clinic! 👋\n\n📞 *Request Callback*\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n🕐 *Preferred Time:* ${time}${pkgName ? `\n🏥 *Package:* ${pkgName}` : ''}\n\nPlease call me back at the earliest.`;

/** Pre-filled WhatsApp message for a full booking form */
export const bookingWhatsAppMessage = (
  name: string,
  phone: string,
  date: string,
  time: string,
  notes: string,
  pkg: HealthPackageEntry
): string =>
  `Hi DEETYA Clinic! 👋\n\n📋 *Package Booking Request*\n\n🏥 *Package:* ${pkg.name}\n💰 *Offer Price:* ${formatINR(pkg.offerPrice)}\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n📅 *Preferred Date:* ${date}\n🕐 *Preferred Time:* ${time}${notes ? `\n📝 *Notes:* ${notes}` : ''}\n\nPlease confirm my booking.`;
