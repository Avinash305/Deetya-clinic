import { clinicInfo } from '../data/siteData';

/** Build a `tel:` link with whitespace stripped from the number (e.g. '+91 80504 54140'). */
export const telHref = (phone: string = clinicInfo.phone): string => `tel:${phone.replace(/\s/g, '')}`;

/**
 * Detect dialer-capable devices (phones/tablets). On desktop browsers `tel:`
 * links usually do nothing (unless a handler like Skype is configured), so
 * callers can fall back to WhatsApp or a modal instead.
 */
export const canDial = (): boolean =>
  typeof navigator !== 'undefined' &&
  /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile|webOS|BlackBerry/i.test(navigator.userAgent);

/**
 * Click handler for call buttons: lets the native `tel:` link proceed on
 * mobile; on desktop (where tel: is usually a dead end) opens WhatsApp with
 * the given message instead, so the button always does something useful.
 */
export const telClick = (message: string = clinicInfo.whatsappDefault): void => {
  if (canDial()) return; // native tel: link handles it
  window.open(whatsappHref(message), '_blank', 'noopener,noreferrer');
};

/** Build a `mailto:` link. */
export const mailHref = (email: string = clinicInfo.email): string => `mailto:${email}`;

/** Build a WhatsApp deep link with a pre-filled message. */
export const whatsappHref = (message: string = clinicInfo.whatsappDefault): string =>
  `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;

/** Build a Google Maps link that opens the clinic's Google Business listing. */
export const mapsHref = (): string =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Deetya multi-speciality clinic and diagnostics',
  )}&query_place_id=${encodeURIComponent(clinicInfo.googlePlaceId)}`;
