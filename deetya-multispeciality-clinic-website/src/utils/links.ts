import { clinicInfo } from '../data/siteData';

/** Build a `tel:` link with whitespace stripped from the number (e.g. '+91 80504 54140'). */
export const telHref = (phone: string = clinicInfo.phone): string => `tel:${phone.replace(/\s/g, '')}`;

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
