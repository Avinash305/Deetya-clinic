import type { ReactNode } from 'react';
import {
  FiPhone, FiMail, FiClock, FiMapPin, FiShield, FiHeart, FiDollarSign,
  FiMonitor, FiUsers, FiAward, FiGrid, FiCalendar, FiWifi, FiDroplet,
  FiSun, FiClipboard, FiCheckCircle,
} from 'react-icons/fi';
import {
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn,
  FaStethoscope, FaBrain, FaBone, FaBaby, FaHeartbeat, FaEye, FaTooth,
  FaLungs, FaAllergies, FaUserMd, FaXRay, FaCapsules, FaAmbulance,
  FaFlask, FaParking, FaWheelchair, FaBed, FaShieldAlt, FaUtensils,
} from 'react-icons/fa';
import { MdLocalPharmacy, MdChildCare } from 'react-icons/md';

// ─────────────────────────────────────────
// CLINIC INFO
// ─────────────────────────────────────────
export const clinicInfo = {
  name: 'DEETYA',
  tagline: 'Multispeciality Clinic',
  fullName: 'DEETYA Multispeciality Clinic',
  phone: '+91 98765 43210',
  phoneAlt: '+91 98765 43211',
  emergency: '+91 98765 43212',
  email: 'info@deetyaclinic.com',
  emailAlt: 'appointments@deetyaclinic.com',
  address: 'Plot No. 42, Sector 21',
  city: 'Gurugram, Haryana 122016',
  shortAddress: 'Sector 21, Gurugram, Haryana',
  whatsappNumber: '919876543210',
  whatsappDefault: 'Hi DEETYA Clinic! I would like to book an appointment. Please share available slots.',
  workingHours: {
    weekday: 'Mon – Sat: 8:00 AM – 9:00 PM',
    weekend: 'Sunday: 9:00 AM – 2:00 PM',
    emergency: '24/7 Available',
  },
  established: 2009,
  mapsUrl: 'https://www.google.com/maps',
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
  { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  { icon: <FaYoutube />, href: '#', label: 'YouTube' },
  { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
];

// ─────────────────────────────────────────
// HERO SLIDES
// ─────────────────────────────────────────
export const heroSlides = [
  {
    image: 'https://images.pexels.com/photos/5203594/pexels-photo-5203594.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600',
    badge: '24/7 Emergency Services',
    heading: 'World-Class',
    headingGradient: 'Healthcare',
    headingSuffix: 'at Your Doorstep',
    description: 'Experience excellence in medical care with our state-of-the-art facilities, advanced diagnostic tools, and compassionate treatment approach.',
    pills: ['Modern Infrastructure', 'Advanced Diagnostics', 'Comfortable Stay'],
  },
  {
    image: 'https://images.pexels.com/photos/8460371/pexels-photo-8460371.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600',
    badge: '25+ Expert Specialists',
    heading: 'Trusted by',
    headingGradient: '50,000+',
    headingSuffix: 'Happy Patients',
    description: 'Our team of board-certified doctors and specialists deliver personalized care with over 15 years of combined healthcare expertise.',
    pills: ['Board-Certified Doctors', 'Personalized Care', 'Multi-Specialty'],
  },
  {
    image: 'https://images.pexels.com/photos/17940257/pexels-photo-17940257.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600',
    badge: 'In-House Laboratory',
    heading: 'Advanced',
    headingGradient: 'Diagnostics',
    headingSuffix: '& Lab Services',
    description: 'Get accurate results with our fully equipped in-house pathology lab, imaging center, and rapid diagnostic testing facility.',
    pills: ['Quick Reports', 'Accurate Results', 'Affordable Testing'],
  },
];

// ─────────────────────────────────────────
// STATS
// ─────────────────────────────────────────
export const statsData = [
  { icon: <FiHeart />, value: 50000, suffix: '+', label: 'Happy Patients', color: 'from-primary-500 to-primary-700' },
  { icon: <FiUsers />, value: 25, suffix: '+', label: 'Expert Doctors', color: 'from-accent-500 to-accent-700' },
  { icon: <FiGrid />, value: 15, suffix: '+', label: 'Departments', color: 'from-warm-500 to-warm-700' },
  { icon: <FiAward />, value: 15, suffix: '+', label: 'Years of Service', color: 'from-purple-500 to-purple-700' },
  { icon: <FiCalendar />, value: 100000, suffix: '+', label: 'Consultations', color: 'from-rose-500 to-rose-700' },
];

// ─────────────────────────────────────────
// ABOUT HIGHLIGHTS & FEATURES
// ─────────────────────────────────────────
export const aboutHighlights = [
  { icon: 'hospital', title: 'State-of-the-Art Facility', desc: 'Equipped with the latest medical technology and infrastructure.' },
  { icon: 'doctor', title: 'Expert Medical Team', desc: 'Board-certified specialists across 15+ medical disciplines.' },
  { icon: 'care', title: 'Patient-Centric Care', desc: 'Personalized treatment plans tailored to every individual.' },
];

export const aboutFeatures = [
  'Advanced diagnostic & imaging center',
  'Fully equipped modular operation theatres',
  'Round-the-clock emergency services',
  'Cashless insurance & easy EMI options',
  'Digital health records & telemedicine',
  'Infection-controlled sterile environment',
];

// ─────────────────────────────────────────
// WHY CHOOSE US
// ─────────────────────────────────────────
export const whyChooseUsData = [
  { icon: <FiShield className="w-6 h-6" />, title: 'Accredited & Certified', description: 'Our clinic meets the highest standards of medical care, accredited by leading healthcare bodies.', gradient: 'from-primary-500 to-primary-700' },
  { icon: <FiClock className="w-6 h-6" />, title: '24/7 Availability', description: 'Round-the-clock emergency services and consultation support for critical situations.', gradient: 'from-accent-500 to-accent-700' },
  { icon: <FiHeart className="w-6 h-6" />, title: 'Compassionate Care', description: 'Every patient receives personalized attention and empathetic treatment from our staff.', gradient: 'from-rose-500 to-rose-700' },
  { icon: <FiDollarSign className="w-6 h-6" />, title: 'Transparent Pricing', description: 'No hidden charges. We provide upfront cost estimates and support cashless insurance.', gradient: 'from-warm-500 to-warm-700' },
  { icon: <FiMonitor className="w-6 h-6" />, title: 'Advanced Technology', description: 'State-of-the-art diagnostic equipment and minimally invasive surgical procedures.', gradient: 'from-purple-500 to-purple-700' },
  { icon: <FiUsers className="w-6 h-6" />, title: 'Family Wellness', description: 'Comprehensive health packages designed for individuals and families of all ages.', gradient: 'from-teal-500 to-teal-700' },
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
    desc: 'Comprehensive primary care and preventive health management.',
    longDesc: 'Our General Medicine department serves as the foundation of healthcare at DEETYA Clinic. We provide comprehensive primary care services encompassing preventive health checkups, acute illness management, chronic disease monitoring, and health risk assessments. Our experienced physicians are trained to diagnose and treat a wide spectrum of medical conditions, from common colds and infections to complex multi-system disorders.\n\nWe emphasize a holistic approach to healthcare, focusing on early detection, lifestyle modifications, and patient education. Every patient receives a personalized care plan tailored to their unique health needs, medical history, and risk factors. Our state-of-the-art diagnostic facilities enable accurate and timely diagnosis, ensuring the most effective treatment outcomes.',
    highlights: ['Annual health checkup packages', 'Chronic disease management (diabetes, hypertension, thyroid)', 'Acute illness treatment & infection management', 'Vaccination & immunization programs', 'Lifestyle & dietary counseling', 'Preventive health screenings'],
    detailImages: [
      'https://images.pexels.com/photos/6129444/pexels-photo-6129444.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
      'https://images.pexels.com/photos/7579826/pexels-photo-7579826.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    ],
    gradient: 'from-blue-500 to-blue-700',
    image: 'https://images.pexels.com/photos/20100299/pexels-photo-20100299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <FaBrain />,
    title: 'Neurology',
    slug: 'neurology',
    desc: 'Expert diagnosis and treatment for brain and nerve disorders.',
    longDesc: 'The Neurology department at DEETYA Clinic offers comprehensive care for disorders affecting the brain, spinal cord, peripheral nerves, and muscles. Our team of highly skilled neurologists utilizes advanced diagnostic techniques including MRI, CT scans, EEG, EMG, and nerve conduction studies to accurately diagnose neurological conditions.\n\nWe treat a broad range of neurological disorders including stroke, epilepsy, multiple sclerosis, Parkinson disease, dementia, migraine disorders, and peripheral neuropathy. Our treatment approaches combine evidence-based medical therapies with lifestyle interventions and rehabilitation services. We also offer emergency neurological care for acute stroke and other neurological emergencies, with rapid assessment and treatment protocols to minimize long-term complications.',
    highlights: ['Stroke management & thrombolysis', 'Epilepsy evaluation & treatment', 'Headache & migraine management', 'Movement disorder treatment (Parkinson\'s)', 'Dementia & memory loss assessment', 'EMG, NCS & EEG diagnostics'],
    detailImages: [
      'https://images.pexels.com/photos/7659869/pexels-photo-7659869.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
      'https://images.pexels.com/photos/7089298/pexels-photo-7089298.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    ],
    gradient: 'from-purple-500 to-purple-700',
    image: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <FaBone />,
    title: 'Orthopedics',
    slug: 'orthopedics',
    desc: 'Advanced bone, joint, and musculoskeletal treatment.',
    longDesc: 'Our Orthopedics department is dedicated to the diagnosis, treatment, and rehabilitation of musculoskeletal conditions. We provide comprehensive care for bone fractures, joint disorders, sports injuries, spine conditions, and arthritis, utilizing both surgical and non-surgical treatment approaches.\n\nOur orthopedic surgeons are specialized in joint replacement surgeries (knee, hip, shoulder), arthroscopic procedures, spine surgeries, and trauma management. We also offer advanced treatments like platelet-rich plasma (PRP) therapy, stem cell therapy, and minimally invasive surgical techniques that ensure faster recovery and reduced post-operative pain. Our integrated rehabilitation program, including physiotherapy and occupational therapy, helps patients regain optimal function and return to their daily activities as quickly as possible.',
    highlights: ['Joint replacement surgery (knee, hip, shoulder)', 'Arthroscopic surgeries (ACL repair, meniscus)', 'Sports injury management & rehabilitation', 'Spine surgery & back pain treatment', 'Fracture care & trauma management', 'PRP therapy & regenerative medicine'],
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
    desc: 'Specialized care for infants, children, and adolescents.',
    longDesc: 'The Pediatrics department at DEETYA Clinic provides comprehensive healthcare for children from birth through adolescence. Our pediatricians are dedicated to ensuring the healthy growth and development of every child through preventive care, early diagnosis, and evidence-based treatment.\n\nWe offer a complete range of pediatric services including well-baby checkups, childhood vaccination programs, growth and development monitoring, nutritional counseling, and management of acute and chronic childhood illnesses. Our child-friendly facility is designed to put young patients at ease, with a dedicated play area and a compassionate care approach. We also provide neonatal care for newborns and specialize in managing pediatric conditions such as asthma, allergies, infections, and developmental disorders.',
    highlights: ['Newborn & neonatal care', 'Childhood vaccination programs', 'Growth & development monitoring', 'Pediatric acute illness management', 'Nutritional counseling for children', 'Adolescent health services'],
    detailImages: [
      'https://images.pexels.com/photos/8460032/pexels-photo-8460032.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
      'https://images.pexels.com/photos/3662840/pexels-photo-3662840.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    ],
    gradient: 'from-pink-500 to-pink-700',
    image: 'https://images.pexels.com/photos/8460032/pexels-photo-8460032.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <FaHeartbeat />,
    title: 'Cardiology',
    slug: 'cardiology',
    desc: 'Heart health monitoring, diagnostics, and interventions.',
    longDesc: 'The Cardiology department at DEETYA Clinic offers comprehensive cardiac care ranging from preventive cardiology to advanced interventional procedures. Our team of experienced cardiologists and cardiac surgeons is committed to providing the highest standard of care for patients with heart and vascular conditions.\n\nWe offer a full spectrum of diagnostic services including ECG, echocardiography, stress testing, 24-hour Holter monitoring, and cardiac catheterization. Our treatment services cover hypertension management, cholesterol disorders, heart failure treatment, coronary artery disease management, and cardiac rehabilitation. For patients requiring intervention, we provide advanced procedures such as angioplasty, stent placement, pacemaker implantation, and cardiac bypass surgery. Our cardiac emergency team is available 24/7 for heart attacks and other cardiac emergencies.',
    highlights: ['Advanced cardiac diagnostics (ECG, Echo, TMT)', 'Coronary angioplasty & stent placement', 'Pacemaker implantation', 'Heart failure management', 'Hypertension & cholesterol treatment', '24/7 cardiac emergency care'],
    detailImages: [
      'https://images.pexels.com/photos/9408868/pexels-photo-9408868.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
      'https://images.pexels.com/photos/7659869/pexels-photo-7659869.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    ],
    gradient: 'from-red-500 to-red-700',
    image: 'https://images.pexels.com/photos/9408868/pexels-photo-9408868.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <FaEye />,
    title: 'Ophthalmology',
    slug: 'ophthalmology',
    desc: 'Complete eye care from routine checkups to advanced surgeries.',
    longDesc: 'Our Ophthalmology department provides comprehensive eye care services for patients of all ages, from routine vision screenings to advanced surgical procedures. Our ophthalmologists are equipped with state-of-the-art diagnostic and treatment technology to address a wide range of eye conditions.\n\nWe offer complete eye examination services including refraction, glaucoma screening, cataract evaluation, and retinal examinations. Our surgical services include cataract surgery with premium intraocular lens implants, LASIK and other refractive surgeries, glaucoma surgery, diabetic retinopathy treatment, and eyelid surgeries. We also provide pediatric ophthalmology services and emergency care for eye injuries and infections. Our goal is to preserve and enhance your vision with the most advanced and compassionate care possible.',
    highlights: ['Cataract surgery with premium IOL implants', 'LASIK & refractive surgery', 'Glaucoma diagnosis & management', 'Diabetic retinopathy treatment', 'Pediatric eye care', 'Contact lens fitting & vision therapy'],
    detailImages: [
      'https://images.pexels.com/photos/32209715/pexels-photo-32209715.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
      'https://images.pexels.com/photos/6129444/pexels-photo-6129444.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    ],
    gradient: 'from-cyan-500 to-cyan-700',
    image: 'https://images.pexels.com/photos/32209715/pexels-photo-32209715.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <FaTooth />,
    title: 'Dental Care',
    slug: 'dental-care',
    desc: 'Full range of dental services including cosmetic dentistry.',
    longDesc: 'The Dental Care department at DEETYA Clinic offers a complete range of dental services designed to maintain and enhance your oral health. Our team of experienced dentists and dental surgeons use modern techniques and equipment to provide pain-free, high-quality dental care.\n\nWe provide preventive dental services including routine cleanings, fluoride treatments, and dental sealants. Our restorative services include tooth-colored fillings, crowns, bridges, and dental implants for missing teeth replacement. For patients seeking aesthetic improvements, we offer teeth whitening, veneers, and smile makeovers. We also specialize in root canal treatments, gum disease management, and pediatric dentistry. Our dental facility is equipped with digital X-rays for accurate diagnosis with minimal radiation exposure.',
    highlights: ['Teeth cleaning & preventive care', 'Dental implants & tooth replacement', 'Root canal treatment', 'Teeth whitening & veneers', 'Orthodontic treatment (braces & aligners)', 'Pediatric dentistry'],
    detailImages: [
      'https://images.pexels.com/photos/5622270/pexels-photo-5622270.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
      'https://images.pexels.com/photos/7089298/pexels-photo-7089298.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    ],
    gradient: 'from-teal-500 to-teal-700',
    image: 'https://images.pexels.com/photos/5622270/pexels-photo-5622270.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <FaLungs />,
    title: 'Pulmonology',
    slug: 'pulmonology',
    desc: 'Respiratory care and treatment for chronic lung conditions.',
    longDesc: 'Our Pulmonology department specializes in the diagnosis and treatment of respiratory and lung disorders. Our pulmonologists are experts in managing both acute and chronic respiratory conditions, utilizing advanced diagnostic and therapeutic techniques to improve breathing and quality of life.\n\nWe treat a wide spectrum of pulmonary conditions including asthma, chronic obstructive pulmonary disease (COPD), pneumonia, tuberculosis, interstitial lung disease, and sleep-disordered breathing. Our diagnostic services include pulmonary function testing, bronchoscopy, chest imaging, and sleep studies. We offer comprehensive treatment plans including medication management, pulmonary rehabilitation, oxygen therapy, and non-invasive ventilation. Our department also runs specialized clinics for asthma, COPD, and smoking cessation.',
    highlights: ['Asthma diagnosis & management', 'COPD treatment & pulmonary rehabilitation', 'Sleep disorder & sleep apnea treatment', 'Bronchoscopy & lung diagnostics', 'Tuberculosis management', 'Smoking cessation programs'],
    detailImages: [
      'https://images.pexels.com/photos/30425668/pexels-photo-30425668.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
      'https://images.pexels.com/photos/7089298/pexels-photo-7089298.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    ],
    gradient: 'from-sky-500 to-sky-700',
    image: 'https://images.pexels.com/photos/30425668/pexels-photo-30425668.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <FaAllergies />,
    title: 'Dermatology',
    slug: 'dermatology',
    desc: 'Skin health, allergy management, and cosmetic procedures.',
    longDesc: 'The Dermatology department at DEETYA Clinic provides comprehensive care for skin, hair, and nail conditions, as well as aesthetic and cosmetic services. Our dermatologists combine medical expertise with advanced technology to deliver effective treatments for a wide range of dermatological concerns.\n\nWe treat common skin conditions including acne, eczema, psoriasis, fungal infections, and skin allergies. Our surgical services include mole removal, skin cancer screening and treatment, and scar revision. For aesthetic concerns, we offer treatments such as chemical peels, microdermabrasion, laser hair removal, and anti-aging therapies including Botox and dermal fillers. We also specialize in hair loss evaluation and treatment, and provide comprehensive patch testing for allergic contact dermatitis.',
    highlights: ['Acne & acne scar treatment', 'Eczema, psoriasis & skin allergy care', 'Skin cancer screening & mole check', 'Laser hair removal & skin rejuvenation', 'Botox & dermal fillers', 'Hair loss diagnosis & treatment'],
    detailImages: [
      'https://images.pexels.com/photos/7581588/pexels-photo-7581588.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
      'https://images.pexels.com/photos/6129444/pexels-photo-6129444.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    ],
    gradient: 'from-rose-500 to-rose-700',
    image: 'https://images.pexels.com/photos/7581588/pexels-photo-7581588.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <FaUserMd />,
    title: 'ENT',
    slug: 'ent',
    desc: 'Ear, nose, and throat specialists for all ages.',
    longDesc: 'Our ENT (Ear, Nose, and Throat) department provides comprehensive medical and surgical care for conditions affecting the head and neck region. Our ENT specialists are trained to diagnose and treat a wide range of disorders in both adults and children.\n\nWe offer specialized services for ear conditions including hearing loss evaluation, ear infections, tinnitus, and balance disorders. For nasal and sinus conditions, we provide treatment for sinusitis, nasal polyps, allergic rhinitis, and deviated nasal septum. Our throat services cover tonsillitis, voice disorders, swallowing difficulties, and sleep apnea. Surgical services include endoscopic sinus surgery, tonsillectomy, septoplasty, and thyroid surgery. We also have a dedicated audiology center for comprehensive hearing assessments and hearing aid fittings.',
    highlights: ['Hearing loss evaluation & hearing aids', 'Sinusitis & nasal allergy treatment', 'Tonsil & adenoid surgery', 'Thyroid & parathyroid surgery', 'Voice & swallowing disorder management', 'Pediatric ENT care'],
    detailImages: [
      'https://images.pexels.com/photos/5206946/pexels-photo-5206946.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
      'https://images.pexels.com/photos/7659869/pexels-photo-7659869.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    ],
    gradient: 'from-indigo-500 to-indigo-700',
    image: 'https://images.pexels.com/photos/5206946/pexels-photo-5206946.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <FaXRay />,
    title: 'Radiology',
    slug: 'radiology',
    desc: 'Advanced imaging services including MRI, CT, and X-Ray.',
    longDesc: 'The Radiology department at DEETYA Clinic is equipped with state-of-the-art imaging technology to provide accurate diagnostic services across all medical specialties. Our team of experienced radiologists and technicians ensure high-quality imaging with minimal waiting times.\n\nWe offer a comprehensive range of imaging services including digital X-rays, ultrasound, CT scans, MRI, mammography, and DEXA scans for bone density assessment. All our imaging equipment is regularly maintained and calibrated to the highest standards. Our digital imaging system allows for quick report generation and seamless sharing with referring physicians. We prioritize patient safety with strict radiation dose optimization protocols, especially for pediatric and pregnant patients. Our comfortable and spacious facility ensures a stress-free experience for all patients.',
    highlights: ['Digital X-ray & ultrasound', 'CT scan (computed tomography)', 'MRI (magnetic resonance imaging)', 'Mammography & breast imaging', 'DEXA bone density scan', 'Same-day digital reports'],
    detailImages: [
      'https://images.pexels.com/photos/7089298/pexels-photo-7089298.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
      'https://images.pexels.com/photos/7659869/pexels-photo-7659869.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800',
    ],
    gradient: 'from-amber-500 to-amber-700',
    image: 'https://images.pexels.com/photos/7089298/pexels-photo-7089298.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: <FaCapsules />,
    title: 'Pharmacy',
    slug: 'pharmacy',
    desc: 'In-house pharmacy with genuine medicines at fair prices.',
    longDesc: 'Our in-house Pharmacy at DEETYA Clinic ensures that patients have convenient access to genuine, high-quality medications at fair and transparent prices. Staffed by qualified pharmacists, our pharmacy is open round-the-clock to serve both inpatients and outpatients.\n\nWe stock a comprehensive range of prescription and over-the-counter medications, including specialized drugs for chronic conditions, antibiotics, vaccines, and nutritional supplements. Our pharmacists provide personalized medication counseling, helping patients understand their prescriptions, dosage instructions, and potential side effects. We also offer medication adherence programs for patients with chronic conditions, ensuring they never miss a dose. Our pharmacy maintains strict cold chain protocols for temperature-sensitive medications and vaccines. We accept all major insurance plans and offer competitive pricing on generic alternatives.',
    highlights: ['24/7 round-the-clock service', '100% genuine & quality assured medicines', 'Prescription & OTC medications', 'Medication counseling & guidance', 'Insurance & cashless billing', 'Home delivery for chronic patients'],
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
  { name: 'Dr. Rajesh Sharma', specialization: 'Cardiologist', experience: '18 Years', phone: '+91 98765 43201', color: 'from-primary-500 to-primary-700', bgColor: 'from-primary-50 to-primary-100', image: 'https://images.pexels.com/photos/19438563/pexels-photo-19438563.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300' },
  { name: 'Dr. Priya Mehta', specialization: 'Neurologist', experience: '15 Years', phone: '+91 98765 43202', color: 'from-purple-500 to-purple-700', bgColor: 'from-purple-50 to-purple-100', image: 'https://images.pexels.com/photos/5738735/pexels-photo-5738735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300' },
  { name: 'Dr. Anand Verma', specialization: 'Orthopedic Surgeon', experience: '20 Years', phone: '+91 98765 43203', color: 'from-accent-500 to-accent-700', bgColor: 'from-accent-50 to-accent-100', image: 'https://images.pexels.com/photos/10695742/pexels-photo-10695742.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300' },
  { name: 'Dr. Sneha Gupta', specialization: 'Pediatrician', experience: '12 Years', phone: '+91 98765 43204', color: 'from-rose-500 to-rose-700', bgColor: 'from-rose-50 to-rose-100', image: 'https://images.pexels.com/photos/36665076/pexels-photo-36665076.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300' },
  { name: 'Dr. Vikram Singh', specialization: 'General Surgeon', experience: '22 Years', phone: '+91 98765 43205', color: 'from-teal-500 to-teal-700', bgColor: 'from-teal-50 to-teal-100', image: 'https://images.pexels.com/photos/19438561/pexels-photo-19438561.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300' },
  { name: 'Dr. Kavita Reddy', specialization: 'Dermatologist', experience: '10 Years', phone: '+91 98765 43206', color: 'from-warm-500 to-warm-700', bgColor: 'from-warm-50 to-warm-100', image: 'https://images.pexels.com/photos/19438560/pexels-photo-19438560.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=300&w=300' },
];

// ─────────────────────────────────────────
// FACILITIES
// ─────────────────────────────────────────
export const facilitiesData = [
  { icon: <FaAmbulance className="w-6 h-6" />, title: 'Ambulance Service', desc: '24/7 emergency ambulance with trained paramedics.' },
  { icon: <FaFlask className="w-6 h-6" />, title: 'Pathology Lab', desc: 'In-house laboratory for quick and accurate diagnostics.' },
  { icon: <MdLocalPharmacy className="w-6 h-6" />, title: 'Pharmacy', desc: 'Round-the-clock pharmacy with genuine medicines.' },
  { icon: <FaBed className="w-6 h-6" />, title: 'ICU & Wards', desc: 'Fully equipped intensive care units and private rooms.' },
  { icon: <FaParking className="w-6 h-6" />, title: 'Free Parking', desc: 'Spacious parking area for patients and visitors.' },
  { icon: <FiWifi className="w-6 h-6" />, title: 'Free Wi-Fi', desc: 'Complimentary internet access throughout the facility.' },
  { icon: <FaWheelchair className="w-6 h-6" />, title: 'Wheelchair Access', desc: 'Fully accessible facilities for differently-abled patients.' },
  { icon: <FaShieldAlt className="w-6 h-6" />, title: 'Insurance Desk', desc: 'Dedicated support for cashless insurance processing.' },
  { icon: <FaUtensils className="w-6 h-6" />, title: 'Cafeteria', desc: 'Hygienic food court with nutritious meal options.' },
  { icon: <FiDroplet className="w-6 h-6" />, title: 'Blood Bank', desc: 'Equipped blood bank for emergency requirements.' },
  { icon: <MdChildCare className="w-6 h-6" />, title: 'Play Area', desc: 'Child-friendly play zone to comfort young patients.' },
  { icon: <FiSun className="w-6 h-6" />, title: 'Healing Garden', desc: 'Peaceful green spaces designed for patient recovery.' },
];

// ─────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────
export const testimonialsData = [
  { name: 'Arun Patel', review: 'Exceptional medical care! The doctors are highly knowledgeable and took the time to explain everything clearly. I felt safe and well-cared for throughout my treatment.', rating: 5, initials: 'AP', color: 'from-primary-500 to-primary-700' },
  { name: 'Meera Joshi', review: 'DEETYA Clinic has been our family doctor for years. The staff is incredibly friendly, and the facilities are top-notch. Highly recommend for pediatric care!', rating: 5, initials: 'MJ', color: 'from-accent-500 to-accent-700' },
  { name: 'Suresh Kumar', review: 'Had my knee surgery here and the orthopedic team was outstanding. Recovery was smooth thanks to their attentive post-operative care. World-class facilities!', rating: 5, initials: 'SK', color: 'from-warm-500 to-warm-700' },
  { name: 'Lakshmi Nair', review: "The cardiology department saved my father's life. We are forever grateful to Dr. Sharma and the entire team. Truly a premium healthcare experience.", rating: 5, initials: 'LN', color: 'from-purple-500 to-purple-700' },
  { name: 'Deepak Chauhan', review: 'Very clean and organized facility. The appointment process is seamless and wait times are minimal. The dermatology treatment I received was excellent.', rating: 5, initials: 'DC', color: 'from-rose-500 to-rose-700' },
  { name: 'Fatima Khan', review: "From reception to the doctor's chamber, everything is handled with professionalism and care. The pharmacy is well-stocked and the lab results are quick.", rating: 5, initials: 'FK', color: 'from-teal-500 to-teal-700' },
];

// ─────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────
export const faqData = [
  { q: "What are the clinic's working hours?", a: 'We are open Monday to Saturday from 8:00 AM to 9:00 PM, and Sundays from 9:00 AM to 2:00 PM. Our emergency services are available 24/7.' },
  { q: 'Do you accept health insurance?', a: 'Yes, we accept all major health insurance providers and offer cashless claim processing. Our dedicated insurance desk will assist you with all documentation.' },
  { q: 'How can I book an appointment?', a: 'You can book an appointment by calling us at +91 98765 43210, sending a WhatsApp message, or visiting our clinic directly. Walk-in consultations are also available.' },
  { q: 'What specialties are available at DEETYA Clinic?', a: 'We offer 15+ specialties including Cardiology, Neurology, Orthopedics, Pediatrics, Dermatology, ENT, Ophthalmology, Dental Care, General Surgery, Pulmonology, and more.' },
  { q: 'Is parking available at the clinic?', a: 'Yes, we provide free and spacious parking for all patients and visitors. Wheelchair-accessible parking spots are also available near the entrance.' },
  { q: 'Do you offer home visit or telemedicine services?', a: 'Yes, we offer telemedicine consultations for follow-up visits and non-emergency cases. Home visit services are available for elderly and bedridden patients upon request.' },
  { q: 'What diagnostic facilities are available?', a: 'Our in-house diagnostic center includes advanced imaging (X-Ray, Ultrasound), pathology lab, ECG, pulmonary function testing, and more. Reports are typically available within a few hours.' },
  { q: 'Are EMI options available for treatments?', a: 'Yes, we offer flexible EMI options through various partner banks and financial institutions for planned surgeries and extensive treatments.' },
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
  { icon: <FiMapPin className="w-5 h-5" />, title: 'Our Address', lines: ['DEETYA Multispeciality Clinic', 'Plot No. 42, Sector 21', 'Gurugram, Haryana 122016'], color: 'from-primary-500 to-primary-700' },
  { icon: <FiPhone className="w-5 h-5" />, title: 'Phone Numbers', lines: ['+91 98765 43210', '+91 98765 43211', 'Emergency: +91 98765 43212'], color: 'from-accent-500 to-accent-700' },
  { icon: <FiMail className="w-5 h-5" />, title: 'Email Address', lines: ['info@deetyaclinic.com', 'appointments@deetyaclinic.com'], color: 'from-warm-500 to-warm-700' },
  { icon: <FiClock className="w-5 h-5" />, title: 'Working Hours', lines: ['Mon – Sat: 8:00 AM – 9:00 PM', 'Sunday: 9:00 AM – 2:00 PM', 'Emergency: 24/7'], color: 'from-purple-500 to-purple-700' },
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
  { year: '2009', title: 'Foundation', desc: 'DEETYA Clinic was established with a vision to provide affordable, quality healthcare.' },
  { year: '2012', title: 'Expansion', desc: 'Added multispeciality departments including Cardiology, Orthopedics, and Pediatrics.' },
  { year: '2016', title: 'Advanced Lab', desc: 'Launched in-house pathology and diagnostic imaging center with state-of-the-art equipment.' },
  { year: '2019', title: 'NABH Accredited', desc: 'Received NABH accreditation for maintaining highest standards of healthcare delivery.' },
  { year: '2022', title: 'Digital Health', desc: 'Introduced telemedicine, digital health records, and online appointment system.' },
  { year: '2024', title: '50K+ Patients', desc: 'Crossed milestone of 50,000 happy patients with a 98% satisfaction rate.' },
];
