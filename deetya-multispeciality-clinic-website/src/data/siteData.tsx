import type { ReactNode } from 'react';
import {
  FiPhone, FiMail, FiClock, FiMapPin, FiShield, FiHeart, FiDollarSign,
  FiMonitor, FiUsers, FiAward, FiGrid, FiCalendar, FiWifi, FiDroplet,
  FiSun, FiClipboard, FiCheckCircle,
} from 'react-icons/fi';
import {
  FaFacebookF, FaInstagram,
  FaStethoscope, FaBone, FaBaby, FaUserMd, FaCapsules,
  FaFlask, FaParking, FaWheelchair, FaBed, FaShieldAlt, FaUtensils,
} from 'react-icons/fa';
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
  phoneAlt: '+91 80504 54140',
  emergency: '+91 80504 54140',
  email: 'deetya.clinic@gmail.com',
  emailAlt: 'deetya.clinic@gmail.com',
  address: 'Navya Disha #22 & #23, 60 Feet Main Road, Avalahali - BDA Layout Road',
  city: 'Srinivas Reddy Layout, Avalahali, Anjanapura Post, JP Nagar 9th Phase, Bangalore-560108',
  shortAddress: 'JP Nagar 9th Phase, Bangalore',
  whatsappNumber: '918050454140',
  whatsappDefault: 'Hi DEETYA Clinic! I would like to book an appointment. Please share available slots.',
  workingHours: {
    weekday: 'Mon – Sat: 9:00 AM – 9:00 PM',
    weekend: 'Sunday: 9:00 AM – 2:00 PM',
    emergency: '24/7 Available',
  },
  established: 2015,
  mapsUrl: 'https://www.google.com/maps/place/JP+Nagar+9th+Phase,+Bangalore',
};

// ─────────────────────────────────────────
// NAVIGATION LINKS
// ─────────────────────────────────────────
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const footerQuickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Services', path: '/services' },
  { label: 'Our Doctors', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
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
    image: 'https://images.pexels.com/photos/5203594/pexels-photo-5203594.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600',
    badge: 'In-House Pharmacy & Lab',
    heading: 'Complete',
    headingGradient: 'Healthcare',
    headingSuffix: 'Under One Roof',
    description: 'Experience comprehensive medical care with in-house laboratory, IPD, OPD, pharmacy, and expert consultations across multiple specialties.',
    pills: ['OPD & IPD Services', 'In-House Laboratory', 'Pharmacy Available'],
  },
  {
    image: 'https://images.pexels.com/photos/8460371/pexels-photo-8460371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600',
    badge: '5+ Expert Specialists',
    heading: 'Trusted',
    headingGradient: 'Medical',
    headingSuffix: 'Professionals',
    description: 'Our team of dedicated doctors specializes in General Medicine, Gynecology, Orthopedics, Pediatrics, and ENT for comprehensive family healthcare.',
    pills: ['General Physician', 'Gynecologist', 'Orthopedic & Pediatrics'],
  },
  {
    image: 'https://images.pexels.com/photos/17940257/pexels-photo-17940257.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600',
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
  { icon: <FiHeart />, value: 10000, suffix: '+', label: 'Happy Patients', color: 'from-primary-500 to-primary-700' },
  { icon: <FiUsers />, value: 5, suffix: '+', label: 'Expert Doctors', color: 'from-accent-500 to-accent-700' },
  { icon: <FiGrid />, value: 5, suffix: '+', label: 'Specialties', color: 'from-warm-500 to-warm-700' },
  { icon: <FiAward />, value: 10, suffix: '+', label: 'Years of Service', color: 'from-purple-500 to-purple-700' },
  { icon: <FiCalendar />, value: 25000, suffix: '+', label: 'Consultations', color: 'from-rose-500 to-rose-700' },
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
  { icon: <FiClock className="w-6 h-6" />, title: 'Convenient Hours', description: 'Open Monday to Saturday 9AM-9PM and Sunday 9AM-2PM with flexible appointment scheduling.', gradient: 'from-accent-500 to-accent-700' },
  { icon: <FiHeart className="w-6 h-6" />, title: 'Compassionate Care', description: 'Every patient receives personalized attention and empathetic treatment from our staff.', gradient: 'from-rose-500 to-rose-700' },
  { icon: <FiDollarSign className="w-6 h-6" />, title: 'Affordable Pricing', description: 'Transparent and fair consultation rates without compromising on quality of care.', gradient: 'from-warm-500 to-warm-700' },
  { icon: <FiMonitor className="w-6 h-6" />, title: 'Modern Equipment', description: 'Well-equipped laboratory and diagnostic tools for accurate and timely test results.', gradient: 'from-purple-500 to-purple-700' },
  { icon: <FiUsers className="w-6 h-6" />, title: 'Family Wellness', description: 'Comprehensive healthcare for the entire family across all age groups and needs.', gradient: 'from-teal-500 to-teal-700' },
];

// ─────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────
export interface ServiceDetail {
  icon: ReactNode;
  title: string;
  slug: string;
  desc: string;
  longDesc: string;
  highlights: string[];
  detailImages: string[];
  gradient: string;
  image: string;
}

export const servicesData: ServiceDetail[] = [
  {
    icon: <FaStethoscope />,
    title: 'General Medicine',
    slug: 'general-medicine',
    desc: 'Comprehensive primary care by Dr. Deepak L and Dr. Harshitha.',
    longDesc: 'Our General Medicine department is the cornerstone of DEETYA Multispeciality Clinic, led by Dr. Deepak L and Dr. Harshitha. We provide comprehensive primary healthcare services including preventive checkups, acute illness management, and chronic disease monitoring.\n\nWe diagnose and treat a wide range of conditions including fever, infections, diabetes, hypertension, thyroid disorders, respiratory issues, and gastrointestinal problems. Our physicians take time to understand your complete health profile before recommending personalized treatment plans. With our in-house laboratory, diagnostic results are available quickly, enabling faster treatment decisions.',
    highlights: ['General health checkups', 'Diabetes & hypertension management', 'Thyroid disorder treatment', 'Acute illness & infection care', 'Preventive health screenings', 'Comprehensive primary care'],
    detailImages: [
      'https://images.pexels.com/photos/6129444/pexels-photo-6129444.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
      'https://images.pexels.com/photos/7579826/pexels-photo-7579826.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    ],
    gradient: 'from-blue-500 to-blue-700',
    image: 'https://images.pexels.com/photos/20100299/pexels-photo-20100299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <FaUserMd />,
    title: 'Gynecology',
    slug: 'gynecology',
    desc: "Women's health and wellness care by Dr. Uttra.",
    longDesc: 'Our Gynecology department, led by Dr. Uttra, provides specialized healthcare for women of all ages. We offer comprehensive services covering reproductive health, prenatal care, gynecological examinations, and treatment of menstrual disorders.\n\nDr. Uttra brings expertise in managing conditions such as PCOS, uterine fibroids, endometriosis, and menopause-related issues. We provide prenatal consultations, family planning guidance, and cervical cancer screening (Pap smear). Our clinic ensures a comfortable, private environment where women can discuss their health concerns openly with compassionate care.',
    highlights: ['Antenatal & postnatal care', 'Menstrual disorder management', 'PCOS & hormonal treatment', 'Cervical cancer screening (Pap smear)', 'Family planning & counseling', 'Menopause management'],
    detailImages: [
      'https://images.pexels.com/photos/6129444/pexels-photo-6129444.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
      'https://images.pexels.com/photos/7579826/pexels-photo-7579826.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    ],
    gradient: 'from-pink-500 to-pink-700',
    image: 'https://images.pexels.com/photos/20100299/pexels-photo-20100299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <FaBone />,
    title: 'Orthopedics',
    slug: 'orthopedics',
    desc: 'Bone, joint, and musculoskeletal care by Dr. Karthik.',
    longDesc: 'Our Orthopedics department, led by Dr. Karthik, provides comprehensive care for all bone, joint, and musculoskeletal conditions. We diagnose and treat fractures, sprains, arthritis, back pain, neck pain, and sports-related injuries.\n\nDr. Karthik uses a combination of clinical examination and diagnostic tests to create personalized treatment plans. We offer non-surgical management including medications, physiotherapy guidance, and lifestyle modification advice for joint and back pain. For fractures and injuries, we provide casting, splinting, and follow-up rehabilitation guidance.',
    highlights: ['Fracture & injury management', 'Back pain & neck pain treatment', 'Arthritis management', 'Sports injury care', 'Joint pain diagnosis & treatment', 'Post-injury rehabilitation guidance'],
    detailImages: [
      'https://images.pexels.com/photos/5723885/pexels-photo-5723885.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
      'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    ],
    gradient: 'from-orange-500 to-orange-700',
    image: 'https://images.pexels.com/photos/5723885/pexels-photo-5723885.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <FaBaby />,
    title: 'Pediatrics',
    slug: 'pediatrics',
    desc: 'Child healthcare from newborn to adolescent by Dr. Manvanthar.',
    longDesc: 'Our Pediatrics department, led by Dr. Manvanthar, is dedicated to the health and well-being of children from birth through adolescence. We provide comprehensive pediatric care including growth monitoring, immunization, and treatment of childhood illnesses.\n\nDr. Manvanthar brings warmth and expertise to every consultation, ensuring both parents and children feel comfortable. We provide newborn checkups, vaccination programs, nutritional guidance, and treatment for common childhood conditions such as fevers, respiratory infections, allergies, and digestive issues.',
    highlights: ['Newborn & neonatal care', 'Childhood vaccination programs', 'Growth & development monitoring', 'Pediatric illness management', 'Nutritional counseling', 'Adolescent health services'],
    detailImages: [
      'https://images.pexels.com/photos/8460032/pexels-photo-8460032.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
      'https://images.pexels.com/photos/3662840/pexels-photo-3662840.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    ],
    gradient: 'from-pink-500 to-pink-700',
    image: 'https://images.pexels.com/photos/8460032/pexels-photo-8460032.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <FaUserMd />,
    title: 'ENT',
    slug: 'ent',
    desc: 'Ear, nose, and throat care for all ages by Dr. Shweta.',
    longDesc: 'Our ENT department, led by Dr. Shweta, provides specialized diagnosis and treatment for ear, nose, and throat conditions. We care for patients of all ages with common ENT problems including ear infections, hearing issues, sinusitis, tonsillitis, and voice disorders.\n\nDr. Shweta offers thorough ear examinations, nasal endoscopy, and throat evaluation using modern equipment. We treat allergic rhinitis, sinus infections, ear wax removal, tonsil infections, and provide hearing assessments. Our approach focuses on accurate diagnosis followed by effective medical management.',
    highlights: ['Ear infection treatment', 'Sinusitis & nasal allergy care', 'Tonsil & throat infection management', 'Hearing evaluation', 'Ear wax removal', 'Voice & swallowing assessment'],
    detailImages: [
      'https://images.pexels.com/photos/5206946/pexels-photo-5206946.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
      'https://images.pexels.com/photos/7659869/pexels-photo-7659869.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    ],
    gradient: 'from-indigo-500 to-indigo-700',
    image: 'https://images.pexels.com/photos/5206946/pexels-photo-5206946.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <FaFlask />,
    title: 'Laboratory',
    slug: 'laboratory',
    desc: 'In-house pathology lab for quick and accurate diagnostic reports.',
    longDesc: 'Our in-house Laboratory at DEETYA Multispeciality Clinic provides comprehensive pathology and diagnostic services with quick turnaround times. Having a fully equipped lab within the clinic means patients get their test results faster, enabling quicker diagnosis and treatment.\n\nWe offer a wide range of tests including complete blood count (CBC), blood sugar, lipid profile, liver function tests, kidney function tests, thyroid profile, urine analysis, and more. Our lab follows strict quality control protocols to ensure accurate and reliable results. Samples are processed professionally by trained technicians.',
    highlights: ['Blood tests (CBC, Sugar, Lipid, etc.)', 'Liver & kidney function tests', 'Thyroid profile testing', 'Urine analysis', 'Quick report turnaround', 'Quality assured results'],
    detailImages: [
      'https://images.pexels.com/photos/7089298/pexels-photo-7089298.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
      'https://images.pexels.com/photos/7659869/pexels-photo-7659869.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    ],
    gradient: 'from-amber-500 to-amber-700',
    image: 'https://images.pexels.com/photos/7089298/pexels-photo-7089298.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <FaBed />,
    title: 'IPD (In-Patient Department)',
    slug: 'ipd',
    desc: 'Comfortable inpatient facility for observation and recovery.',
    longDesc: 'Our In-Patient Department (IPD) at DEETYA Multispeciality Clinic offers comfortable and hygienic facilities for patients who require observation, treatment, or recovery under medical supervision. We provide private and shared rooms with attentive nursing care.\n\nOur IPD is equipped for patients needing short-term hospitalization for conditions requiring IV fluids, post-procedure observation, or recovery from acute illness. The facility maintains strict cleanliness and infection control standards. Our nursing staff and on-call doctors ensure patients receive continuous monitoring and timely medical attention throughout their stay.',
    highlights: ['Comfortable patient rooms', '24/7 nursing care', 'IV fluid & injection administration', 'Post-procedure monitoring', 'Clean & hygienic environment', 'On-call doctor availability'],
    detailImages: [
      'https://images.pexels.com/photos/6129499/pexels-photo-6129499.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
      'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    ],
    gradient: 'from-teal-500 to-teal-700',
    image: 'https://images.pexels.com/photos/6129499/pexels-photo-6129499.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <FaCapsules />,
    title: 'Pharmacy',
    slug: 'pharmacy',
    desc: 'In-house pharmacy with genuine medicines at affordable prices.',
    longDesc: 'Our in-house Pharmacy at DEETYA Multispeciality Clinic ensures patients get genuine, quality-assured medicines at fair prices without having to visit an external chemist. Having a pharmacy within the clinic saves patients time and ensures they receive exactly the medications prescribed by our doctors.\n\nWe stock a comprehensive range of prescription medications, over-the-counter drugs, health supplements, and first-aid supplies. Our pharmacists provide medication counseling, helping patients understand dosage, timing, and potential side effects of their prescriptions.',
    highlights: ['Genuine quality-assured medicines', 'Prescription & OTC medications', 'Health supplements', 'First-aid supplies', 'Medication counseling', 'Convenient in-house access'],
    detailImages: [
      'https://images.pexels.com/photos/140123/pexels-photo-140123.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
      'https://images.pexels.com/photos/7089298/pexels-photo-7089298.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    ],
    gradient: 'from-emerald-500 to-emerald-700',
    image: 'https://images.pexels.com/photos/140123/pexels-photo-140123.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
];

// ─────────────────────────────────────────
// PAGE BANNER IMAGES
// ─────────────────────────────────────────
export const pageBannerImages = {
  about: 'https://images.pexels.com/photos/6129499/pexels-photo-6129499.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1600',
  services: 'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1600',
  contact: 'https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1600',
};

// ─────────────────────────────────────────
// DOCTORS
// ─────────────────────────────────────────
export const doctorsData = [
  { name: 'Dr. Deepak L', specialization: 'General Physician', experience: '15+ Years', phone: '+91 8050454140', color: 'from-primary-500 to-primary-700', bgColor: 'from-primary-50 to-primary-100', image: 'https://images.pexels.com/photos/19438563/pexels-photo-19438563.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300' },
  { name: 'Dr. Harshitha', specialization: 'General Physician', experience: '8+ Years', phone: '+91 9986566909', color: 'from-blue-500 to-blue-700', bgColor: 'from-blue-50 to-blue-100', image: 'https://images.pexels.com/photos/5738735/pexels-photo-5738735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300' },
  { name: 'Dr. Uttra', specialization: 'Gynecologist', experience: '10+ Years', phone: '+91 9488474175', color: 'from-pink-500 to-pink-700', bgColor: 'from-pink-50 to-pink-100', image: 'https://images.pexels.com/photos/36665076/pexels-photo-36665076.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300' },
  { name: 'Dr. Karthik', specialization: 'Orthopedic', experience: '12+ Years', phone: '+91 8861407440', color: 'from-accent-500 to-accent-700', bgColor: 'from-accent-50 to-accent-100', image: 'https://images.pexels.com/photos/10695742/pexels-photo-10695742.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300' },
  { name: 'Dr. Manvanthar', specialization: 'Pediatrics', experience: '9+ Years', phone: '+91 9901528204', color: 'from-warm-500 to-warm-700', bgColor: 'from-warm-50 to-warm-100', image: 'https://images.pexels.com/photos/19438561/pexels-photo-19438561.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300' },
  { name: 'Dr. Shweta', specialization: 'ENT', experience: '8+ Years', phone: '+91 9665760018', color: 'from-indigo-500 to-indigo-700', bgColor: 'from-indigo-50 to-indigo-100', image: 'https://images.pexels.com/photos/19438560/pexels-photo-19438560.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300' },
];

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
export const testimonialsData = [
  { name: 'Ravi Kumar', review: 'Excellent medical care at DEETYA Clinic! Dr. Deepak L is very thorough and patient. The lab reports came quickly and the pharmacy had all the medicines I needed. Highly recommended for families!', rating: 5, initials: 'RK', color: 'from-primary-500 to-primary-700' },
  { name: 'Ananya Reddy', review: 'Dr. Uttra is the most caring gynecologist I have met. She listened patiently and provided excellent treatment. The clinic is very clean and well-managed by Mrs. Nagashree. Very professional staff.', rating: 5, initials: 'AR', color: 'from-accent-500 to-accent-700' },
  { name: 'Venkatesh Murthy', review: 'Dr. Karthik treated my back pain and within weeks I felt so much better. The Orthopedic care here is top-notch. The clinic has all facilities under one roof - lab, pharmacy, and IPD.', rating: 5, initials: 'VM', color: 'from-warm-500 to-warm-700' },
  { name: 'Priya Sharma', review: 'Dr. Manvanthar is wonderful with children. My kids actually look forward to visiting the doctor! Great pediatric care in JP Nagar area. The clinic is conveniently located on the main road.', rating: 5, initials: 'PS', color: 'from-purple-500 to-purple-700' },
  { name: 'Kiran Patel', review: 'Had a persistent ENT issue and Dr. Shweta diagnosed it accurately and treated it effectively. Very modern approach to treatment. The pharmacy being in-house saved me so much time.', rating: 5, initials: 'KP', color: 'from-rose-500 to-rose-700' },
  { name: 'Lakshmi Devi', review: "DEETYA Clinic is a blessing for our family. From Dr. Harshitha's general checkups to the lab tests, everything is efficient and affordable. Mrs. Nagashree manages the front desk wonderfully.", rating: 5, initials: 'LD', color: 'from-teal-500 to-teal-700' },
];

// ─────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────
export const faqData = [
  { q: "What are the clinic's working hours?", a: 'We are open Monday to Saturday from 9:00 AM to 9:00 PM, and Sundays from 9:00 AM to 2:00 PM. Please call to confirm doctor availability for specific specialties.' },
  { q: 'Do you accept health insurance?', a: 'Yes, we accept all major health insurance providers and offer cashless claim processing. Please bring your insurance card during your visit for verification.' },
  { q: 'How can I book an appointment?', a: 'You can book an appointment by calling us at +91 80504 54140, sending a WhatsApp message, or visiting our clinic directly at Navya Disha, 60 Feet Main Road, Avalahali. Walk-in consultations are also welcome.' },
  { q: 'What specialties are available at DEETYA Clinic?', a: 'We have specialists in General Medicine (Dr. Deepak L & Dr. Harshitha), Gynecology (Dr. Uttra), Orthopedics (Dr. Karthik), Pediatrics (Dr. Manvanthar), and ENT (Dr. Shweta). We also have in-house Laboratory, IPD, OPD, and Pharmacy facilities.' },
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
// CONTACT INFO
// ─────────────────────────────────────────
export const contactInfoData = [
  { icon: <FiMapPin className="w-5 h-5" />, title: 'Our Address', lines: ['DEETYA Multispeciality Clinic', 'Navya Disha #22 & #23, 60 Feet Main Road', 'Avalahali - BDA Layout Road, Srinivas Reddy Layout', 'JP Nagar 9th Phase, Bangalore-560108'], color: 'from-primary-500 to-primary-700' },
  { icon: <FiPhone className="w-5 h-5" />, title: 'Phone Number', lines: ['+91 80504 54140', 'Dr. Harshitha: +91 99865 66909', 'Dr. Uttra: +91 94884 74175'], color: 'from-accent-500 to-accent-700' },
  { icon: <FiMail className="w-5 h-5" />, title: 'Email Address', lines: ['deetya.clinic@gmail.com'], color: 'from-warm-500 to-warm-700' },
  { icon: <FiClock className="w-5 h-5" />, title: 'Working Hours', lines: ['Mon – Sat: 9:00 AM – 9:00 PM', 'Sunday: 9:00 AM – 2:00 PM'], color: 'from-purple-500 to-purple-700' },
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
  { year: '2015', title: 'Foundation', desc: 'DEETYA Multispeciality Clinic established at Avalahali, JP Nagar 9th Phase to serve the local community.' },
  { year: '2018', title: 'Expansion', desc: 'Added multispeciality services including Gynecology, Orthopedics, and Pediatrics to the clinic.' },
  { year: '2020', title: 'In-House Lab', desc: 'Launched in-house pathology laboratory for faster diagnostic turnaround times.' },
  { year: '2022', title: 'Pharmacy Added', desc: 'Added an in-house pharmacy for convenient access to genuine medicines.' },
  { year: '2024', title: 'IPD Facility', desc: 'Opened In-Patient Department for observation and recovery under medical supervision.' },
  { year: '2026', title: 'Digital Growth', desc: 'Expanded digital presence with online appointment booking and patient records.' },
];
