import { FiPhone, FiMail, FiClock, FiMapPin, FiShield, FiHeart, FiDollarSign, FiMonitor, FiUsers, FiAward, FiGrid, FiCalendar, FiWifi, FiDroplet, FiSun, FiClipboard, FiCheckCircle, FiFileText } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaStethoscope, FaFlask, FaParking, FaWheelchair, FaBed, FaShieldAlt, FaUtensils } from 'react-icons/fa';
import { MdLocalPharmacy } from 'react-icons/md';

// ─────────────────────────────────────────
// CLINIC INFO
// ─────────────────────────────────────────
export const clinicInfo = {
  name: 'DEETYA',
  tagline: 'Multispeciality Clinic',
  fullName: 'DEETYA Multispeciality Clinic',
  proprietor: 'Shobha H R',
  manager: 'Mrs. Nagashree Vincent',
  headDoctor: 'Dr. Deepak L (General Physician)',
  phone: '+91 80504 54140',
  phoneAlt: '+91 82964 12626',
  emergency: '+91 80504 54140 / +91 82964 12626',
  email: 'deetya.clinic@gmail.com',
  emailAlt: 'deetya.clinic@gmail.com',
  address: 'Navya Disha #22 & #23, 60 Feet Main Road, Avalahali - BDA Layout Road',
  city: 'Srinivas Reddy Layout, Avalahali, Anjanapura Post, JP Nagar 9th Phase, Bangalore-560108',
  shortAddress: 'JP Nagar 9th Phase, Bangalore',
  whatsappNumber: '918050454140',
  whatsappDefault: 'Hi DEETYA Clinic! I would like to book an appointment. Please share available slots.',
  workingHours: {
    weekday: 'Mon – Sat: 7:00 AM – 11:00 PM',
    weekend: 'Sunday: 7:30 AM – 1:30 PM',
    emergency: '24/7 Available',
  },
  established: 2026,
  mapsUrl: 'https://www.google.com/maps/place/JP+Nagar+9th+Phase,+Bangalore',
};

// ─────────────────────────────────────────
// NAVIGATION LINKS
// ─────────────────────────────────────────
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Health Packages', path: '/health-packages' },
  { label: 'Contact', path: '/contact' },
];

export const footerQuickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Services', path: '/services' },
  { label: 'Health Packages', path: '/health-packages' },
  { label: 'Our Doctors', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

// Lightweight footer service names (mirrors servicesData titles). Kept here so
// the footer never drags the heavy servicesData module into the main bundle.
export const footerServices = [
  'General Medicine',
  'Gynecology',
  'Orthopedics',
  'Pediatrics',
  'ENT',
  'Laboratory',
  'IPD (In-Patient Department)',
  'Pharmacy',
];

// ─────────────────────────────────────────
// SOCIAL LINKS
// ─────────────────────────────────────────
export const socialLinks = [
  { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
];

// ─────────────────────────────────────────
// HERO SLIDES
// ─────────────────────────────────────────
export const heroSlides = [
  {
    image: '/images/hero-slide-1.webp',
    width: 1584,
    badge: 'In-House Pharmacy & Lab',
    heading: 'Complete',
    headingGradient: 'Healthcare',
    headingSuffix: 'Under One Roof',
    description: 'Experience comprehensive medical care with in-house laboratory, IPD, OPD, pharmacy, and expert consultations across multiple specialties.',
    pills: ['OPD & IPD Services', 'In-House Laboratory', 'Pharmacy Available'],
  },
  {
    image: '/images/hero-slide-2.webp',
    width: 1408,
    badge: '5+ Expert Specialists',
    heading: 'Trusted',
    headingGradient: 'Medical',
    headingSuffix: 'Professionals',
    description: 'Our team of dedicated doctors specializes in General Medicine, Gynecology, Orthopedics, Pediatrics, and ENT for comprehensive family healthcare.',
    pills: ['General Physician', 'Gynecologist', 'Orthopedic & Pediatrics'],
  },
  {
    image: '/images/hero-slide-3.webp',
    width: 1408,
    badge: 'Located in JP Nagar 9th Phase',
    heading: 'Your',
    headingGradient: 'Family',
    headingSuffix: 'Health Partner',
    description: 'Providing compassionate, personalized healthcare in Avalahali, JP Nagar 9th Phase, Bangalore. We are committed to your well-being with quality medical services.',
    pills: ['Affordable Care', 'Experienced Doctors', 'Patient-First Approach'],
  },
];

// ─────────────────────────────────────────
// STATS
// ─────────────────────────────────────────
export const statsData = [
  { icon: <FiHeart />, value: 500, suffix: '+', label: 'Happy Patients', color: 'from-primary-500 to-primary-700' },
  { icon: <FiUsers />, value: 5, suffix: '+', label: 'Expert Doctors', color: 'from-accent-500 to-accent-700' },
  { icon: <FiGrid />, value: 5, suffix: '+', label: 'Specialties', color: 'from-warm-500 to-warm-700' },
  { icon: <FiClock />, value: 24, suffix: '/7', label: 'Emergency Care', color: 'from-purple-500 to-purple-700' },
  { icon: <FiCalendar />, value: 1500, suffix: '+', label: 'Consultations', color: 'from-rose-500 to-rose-700' },
];

// ─────────────────────────────────────────
// ABOUT HIGHLIGHTS & FEATURES
// ─────────────────────────────────────────
export const aboutHighlights = [
  { icon: 'hospital', title: 'Comprehensive Facility', desc: 'Equipped with OPD, IPD, Laboratory, and Pharmacy all under one roof.' },
  { icon: 'doctor', title: 'Expert Medical Team', desc: 'Specialists across General Medicine, Gynecology, Orthopedics, Pediatrics, and ENT.' },
  { icon: 'care', title: 'Patient-Centric Care', desc: 'Personalized and compassionate treatment for every patient and family.' },
];

export const aboutFeatures = [
  'In-house pathology laboratory',
  'OPD & IPD facilities',
  'Fully stocked in-house pharmacy',
  'Cashless insurance & easy billing',
  'Hygienic and sterile environment',
  'Convenient location on 60 Feet Main Road',
];

// ─────────────────────────────────────────
// WHY CHOOSE US
// ─────────────────────────────────────────
export const whyChooseUsData = [
  { icon: <FiShield className="w-6 h-6" />, title: 'Trusted Healthcare', description: 'Serving the JP Nagar community with dedication, honesty, and reliable medical expertise.', gradient: 'from-primary-500 to-primary-700' },
  { icon: <FiClock className="w-6 h-6" />, title: 'Convenient Hours', description: 'Open Monday to Saturday 7AM-11PM and Sunday 7:30AM-1:30PM with flexible appointment scheduling.', gradient: 'from-accent-500 to-accent-700' },
  { icon: <FiHeart className="w-6 h-6" />, title: 'Compassionate Care', description: 'Every patient receives personalized attention and empathetic treatment from our staff.', gradient: 'from-rose-500 to-rose-700' },
  { icon: <FiDollarSign className="w-6 h-6" />, title: 'Affordable Pricing', description: 'Transparent and fair consultation rates without compromising on quality of care.', gradient: 'from-warm-500 to-warm-700' },
  { icon: <FiMonitor className="w-6 h-6" />, title: 'Modern Equipment', description: 'Well-equipped laboratory and diagnostic tools for accurate and timely test results.', gradient: 'from-purple-500 to-purple-700' },
  { icon: <FiUsers className="w-6 h-6" />, title: 'Family Wellness', description: 'Comprehensive healthcare for the entire family across all age groups and needs.', gradient: 'from-teal-500 to-teal-700' },
];

// ─────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────


// ─────────────────────────────────────────
// PAGE BANNER IMAGES
// ─────────────────────────────────────────
export const pageBannerImages = {
  about: '/images/ipd-2.webp',
  services: '/images/banner-services.webp',
  contact: '/images/banner-contact.webp',
  doctors: '/images/hero-slide-2.webp',
  packages: '/images/laboratory-1.webp',
};

// ─────────────────────────────────────────
// DOCTORS
// ─────────────────────────────────────────


// ─────────────────────────────────────────
// FACILITIES
// ─────────────────────────────────────────
export const facilitiesData = [
  { icon: <FaFlask className="w-6 h-6" />, title: 'Pathology Lab', desc: 'In-house laboratory for quick and accurate diagnostics.' },
  { icon: <FaBed className="w-6 h-6" />, title: 'IPD Facility', desc: 'Comfortable inpatient rooms with 24/7 nursing care.' },
  { icon: <FaStethoscope className="w-6 h-6" />, title: 'OPD Consultations', desc: 'Daily outpatient consultations across 5 specialties.' },
  { icon: <MdLocalPharmacy className="w-6 h-6" />, title: 'Pharmacy', desc: 'On-site pharmacy with genuine medicines.' },
  { icon: <FaWheelchair className="w-6 h-6" />, title: 'Wheelchair Access', desc: 'Easy access for differently-abled patients.' },
  { icon: <FaParking className="w-6 h-6" />, title: 'Parking Available', desc: 'Convenient parking for patients and visitors.' },
  { icon: <FaShieldAlt className="w-6 h-6" />, title: 'Insurance Desk', desc: 'Support for cashless insurance processing.' },
  { icon: <FiWifi className="w-6 h-6" />, title: 'Waiting Lounge', desc: 'Comfortable seating area with reading material.' },
  { icon: <FiSun className="w-6 h-6" />, title: 'Hygienic Environment', desc: 'Strict cleanliness and sterilization protocols.' },
  { icon: <FiClipboard className="w-6 h-6" />, title: 'Digital Records', desc: 'Organized digital patient history management.' },
  { icon: <FiDroplet className="w-6 h-6" />, title: 'IV & Injection Room', desc: 'Dedicated area for IV fluids and injections.' },
  { icon: <FaUtensils className="w-6 h-6" />, title: 'Nearby Food Options', desc: 'Multiple eateries in close vicinity.' },
];

// ─────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────


// ─────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────
export const faqData = [
  { q: "What are the clinic's working hours?", a: 'We are open Monday to Saturday from 7:00 AM to 11:00 PM, and Sundays from 7:30 AM to 1:30 PM. Please call to confirm doctor availability for specific specialties.' },
  { q: 'Do you accept health insurance?', a: 'Yes, we accept all major health insurance providers and offer cashless claim processing. Please bring your insurance card during your visit for verification.' },
  { q: 'How can I book an appointment?', a: 'You can book an appointment by calling us at +91 80504 54140 / +91 82964 12626, sending a WhatsApp message, or visiting our clinic directly at Navya Disha, 60 Feet Main Road, Avalahali. Walk-in consultations are also welcome.' },
  { q: 'What specialties are available at DEETYA Clinic?', a: 'We have specialists in General Medicine (Dr. Deepak L), Gynecology (Dr. Uthra R), Orthopedics (Dr. Karthik M S), Pediatrics (Dr. Manvanthar M), and ENT (Dr. Shweta Gadge). We also have in-house Laboratory, IPD, OPD, and Pharmacy facilities.' },
  { q: 'Is parking available at the clinic?', a: 'Yes, parking is available for patients and visitors. The clinic is located on the 60 Feet Main Road in Avalahali, making it easily accessible.' },
  { q: 'What laboratory tests are available?', a: 'Our in-house laboratory offers a wide range of tests including CBC, blood sugar, lipid profile, liver & kidney function tests, thyroid profile, urine analysis, and more. Reports are available quickly.' },
  { q: 'Do you have inpatient (IPD) facilities?', a: 'Yes, we have comfortable IPD rooms for patients requiring observation, IV fluids, or recovery under medical supervision with 24/7 nursing care.' },
  { q: 'Is the pharmacy located within the clinic?', a: 'Yes, our in-house pharmacy stocks genuine prescription and OTC medications. This saves patients time and ensures they receive exactly what the doctor prescribes.' },
];

// ─────────────────────────────────────────
// APPOINTMENT STEPS
// ─────────────────────────────────────────
export const appointmentSteps = [
  { icon: <FiPhone className="w-6 h-6" />, step: '01', title: 'Contact Us', desc: 'Call us or fill in the online form to request your appointment.', color: 'from-primary-500 to-primary-700' },
  { icon: <FiCalendar className="w-6 h-6" />, step: '02', title: 'Select Date & Time', desc: 'Choose a convenient date and time slot for your visit.', color: 'from-accent-500 to-accent-700' },
  { icon: <FiClipboard className="w-6 h-6" />, step: '03', title: 'Consultation', desc: 'Meet our specialist for a thorough checkup and diagnosis.', color: 'from-warm-500 to-warm-700' },
  { icon: <FiCheckCircle className="w-6 h-6" />, step: '04', title: 'Get Well', desc: 'Follow the personalized treatment plan for a speedy recovery.', color: 'from-purple-500 to-purple-700' },
];

// ─────────────────────────────────────────
// WHY CHOOSE HEALTH PACKAGES
// ─────────────────────────────────────────
export const whyChoosePackagesData = [
  { icon: <FaFlask className="w-5 h-5" />, title: 'In-house Labs Certified', subtitle: 'NABL Accredited', color: 'from-primary-500 to-primary-600' },
  { icon: <FiClock className="w-5 h-5" />, title: '60 Mins Collection', subtitle: '6 AM – 10 PM', color: 'from-accent-500 to-accent-600' },
  { icon: <FiFileText className="w-5 h-5" />, title: 'On-time Reports', subtitle: 'Within 6-12 Hours', color: 'from-warm-500 to-warm-600' },
];

// ─────────────────────────────────────────
// CHECKUP PACKAGES
// ─────────────────────────────────────────


// ─────────────────────────────────────────
// CONTACT INFO
// ─────────────────────────────────────────
export const contactInfoData = [
  { icon: <FiMapPin className="w-5 h-5" />, title: 'Our Address', lines: ['DEETYA Multispeciality Clinic', 'Navya Disha #22 & #23, 60 Feet Main Road', 'Avalahali - BDA Layout Road, Srinivas Reddy Layout', 'JP Nagar 9th Phase, Bangalore-560108'], color: 'from-primary-500 to-primary-700' },
  { icon: <FiPhone className="w-5 h-5" />, title: 'Phone Number', lines: ['+91 80504 54140', '+91 82964 12626', 'Dr. Harshitha: +91 99865 66909', 'Dr. Uthra: +91 94884 74175'], color: 'from-accent-500 to-accent-700' },
  { icon: <FiMail className="w-5 h-5" />, title: 'Email Address', lines: ['deetya.clinic@gmail.com'], color: 'from-warm-500 to-warm-700' },
  { icon: <FiClock className="w-5 h-5" />, title: 'Working Hours', lines: ['Mon – Sat: 7:00 AM – 11:00 PM', 'Sunday: 7:30 AM – 1:30 PM'], color: 'from-purple-500 to-purple-700' },
];

// ─────────────────────────────────────────
// ABOUT PAGE - VALUES & TIMELINE
// ─────────────────────────────────────────
export const coreValues = [
  { icon: <FiHeart className="w-6 h-6" />, title: 'Compassion', desc: 'Treating every patient with empathy, respect, and genuine care at every step of their health journey.', gradient: 'from-rose-500 to-rose-700' },
  { icon: <FiShield className="w-6 h-6" />, title: 'Integrity', desc: 'Maintaining the highest ethical standards in diagnosis, treatment, and patient communication.', gradient: 'from-primary-500 to-primary-700' },
  { icon: <FiAward className="w-6 h-6" />, title: 'Excellence', desc: 'Continuously raising the bar in clinical outcomes, patient safety, and service quality.', gradient: 'from-accent-500 to-accent-700' },
  { icon: <FiUsers className="w-6 h-6" />, title: 'Teamwork', desc: 'Multidisciplinary collaboration to ensure comprehensive and holistic patient care.', gradient: 'from-purple-500 to-purple-700' },
];

export const timelineData = [
  { year: '2026', title: 'Foundation', desc: 'DEETYA Multispeciality Clinic established at Avalahali, JP Nagar 9th Phase to serve the local community.' },
  { year: '2026', title: 'Multi-Specialty Launch', desc: 'Commenced operations with expert doctors across General Medicine, Gynecology, Orthopedics, Pediatrics & ENT.' },
  { year: '2026', title: 'Full Facility Operations', desc: 'In-house Laboratory, Pharmacy, and IPD facilities fully operational for comprehensive patient care.' },
];
