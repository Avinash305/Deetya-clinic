import type { ReactNode } from 'react';
import { FaStethoscope, FaUserMd, FaBone, FaBaby, FaFlask, FaBed, FaCapsules } from 'react-icons/fa';

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
    desc: 'Comprehensive primary care by Dr. Deepak L.',
    longDesc: 'Our General Medicine department is the cornerstone of DEETYA Multispeciality Clinic, led by Dr. Deepak L. We provide comprehensive primary healthcare services including preventive checkups, acute illness management, and chronic disease monitoring.\n\nWe diagnose and treat a wide range of conditions including fever, infections, diabetes, hypertension, thyroid disorders, respiratory issues, and gastrointestinal problems. Our physicians take time to understand your complete health profile before recommending personalized treatment plans. With our in-house laboratory, diagnostic results are available quickly, enabling faster treatment decisions.',
    highlights: ['General health checkups', 'Diabetes & hypertension management', 'Thyroid disorder treatment', 'Acute illness & infection care', 'Preventive health screenings', 'Comprehensive primary care'],
    detailImages: [
      '/images/general-medicine-1.webp',
      '/images/general-medicine-2.webp',
    ],
    gradient: 'from-blue-500 to-blue-700',
    image: '/images/general-medicine-1.webp',
  },
  {
    icon: <FaUserMd />,
    title: 'Gynecology',
    slug: 'gynecology',
    desc: "Women's health and wellness care by Dr. Uthra R.",
    longDesc: 'Our Gynecology department, led by Dr. Uthra R, provides specialized healthcare for women of all ages. We offer comprehensive services covering reproductive health, prenatal care, gynecological examinations, and treatment of menstrual disorders.\n\nDr. Uthra R brings expertise in managing conditions such as PCOS, uterine fibroids, endometriosis, and menopause-related issues. We provide prenatal consultations, family planning guidance, and cervical cancer screening (Pap smear). Our clinic ensures a comfortable, private environment where women can discuss their health concerns openly with compassionate care.',
    highlights: ['Antenatal & postnatal care', 'Menstrual disorder management', 'PCOS & hormonal treatment', 'Cervical cancer screening (Pap smear)', 'Family planning & counseling', 'Menopause management'],
    detailImages: [
      '/images/gynecology-1.webp',
      '/images/gynecology-2.webp',
    ],
    gradient: 'from-pink-500 to-pink-700',
    image: '/images/gynecology-1.webp',
  },
  {
    icon: <FaBone />,
    title: 'Orthopedics',
    slug: 'orthopedics',
    desc: 'Bone, joint, and musculoskeletal care by Dr. Karthik M S.',
    longDesc: 'Our Orthopedics department, led by Dr. Karthik M S, provides comprehensive care for all bone, joint, and musculoskeletal conditions. We specialize in trauma and orthopaedics, spine surgery, joint replacement (arthroplasty), and sports injury management. Our team diagnoses and treats fractures, spine conditions, arthritis, back pain, neck pain, and sports-related injuries.\n\nDr. Karthik M S uses a combination of clinical examination and advanced diagnostic tests to create personalized treatment plans. We offer non-surgical management including medications, physiotherapy guidance, and lifestyle modification advice. For surgical cases, we provide expert fracture fixation, spine surgery, and joint replacement procedures with comprehensive rehabilitation guidance.',
    highlights: ['Fracture & injury management', 'Back pain & neck pain treatment', 'Arthritis management', 'Sports injury care', 'Joint pain diagnosis & treatment', 'Post-injury rehabilitation guidance'],
    detailImages: [
      '/images/orthopedics-1.webp',
      '/images/orthopedics-2.webp',
    ],
    gradient: 'from-orange-500 to-orange-700',
    image: '/images/orthopedics-1.webp',
  },
  {
    icon: <FaBaby />,
    title: 'Pediatrics',
    slug: 'pediatrics',
    desc: 'Child healthcare from newborn to adolescent by Dr. Manvanthar M.',
    longDesc: 'Our Pediatrics department, led by Dr. Manvanthar M, is dedicated to the health and well-being of children from birth through adolescence. We provide comprehensive pediatric care including growth monitoring, immunization, and treatment of childhood illnesses.\n\nDr. Manvanthar M brings warmth and expertise to every consultation, ensuring both parents and children feel comfortable. We provide newborn checkups, vaccination programs, nutritional guidance, and treatment for common childhood conditions such as fevers, respiratory infections, allergies, and digestive issues.',
    highlights: ['Newborn & neonatal care', 'Childhood vaccination programs', 'Growth & development monitoring', 'Pediatric illness management', 'Nutritional counseling', 'Adolescent health services'],
    detailImages: [
      '/images/pediatrics-1.webp',
      '/images/pediatrics-2.webp',
    ],
    gradient: 'from-pink-500 to-pink-700',
    image: '/images/pediatrics-1.webp',
  },
  {
    icon: <FaUserMd />,
    title: 'ENT',
    slug: 'ent',
    desc: 'Ear, nose, and throat care for all ages by Dr. Shweta Gadge.',
    longDesc: 'Our ENT department, led by Dr. Shweta Gadge, provides specialized diagnosis and treatment for ear, nose, and throat conditions. We care for patients of all ages with common ENT problems including ear infections, hearing issues, sinusitis, tonsillitis, and voice disorders.\n\nDr. Shweta Gadge offers thorough ear examinations, nasal endoscopy, and throat evaluation using modern equipment. We treat allergic rhinitis, sinus infections, ear wax removal, tonsil infections, and provide hearing assessments. Our approach focuses on accurate diagnosis followed by effective medical management.',
    highlights: ['Ear infection treatment', 'Sinusitis & nasal allergy care', 'Tonsil & throat infection management', 'Hearing evaluation', 'Ear wax removal', 'Voice & swallowing assessment'],
    detailImages: [
      '/images/ent-1.webp',
      '/images/ent-2.webp',
    ],
    gradient: 'from-indigo-500 to-indigo-700',
    image: '/images/ent-1.webp',
  },
  {
    icon: <FaFlask />,
    title: 'Laboratory',
    slug: 'laboratory',
    desc: 'In-house pathology lab for quick and accurate diagnostic reports.',
    longDesc: 'Our in-house Laboratory at DEETYA Multispeciality Clinic provides comprehensive pathology and diagnostic services with quick turnaround times. Having a fully equipped lab within the clinic means patients get their test results faster, enabling quicker diagnosis and treatment.\n\nWe offer a wide range of tests including complete blood count (CBC), blood sugar, lipid profile, liver function tests, kidney function tests, thyroid profile, urine analysis, and more. Our lab follows strict quality control protocols to ensure accurate and reliable results. Samples are processed professionally by trained technicians.',
    highlights: ['Blood tests (CBC, Sugar, Lipid, etc.)', 'Liver & kidney function tests', 'Thyroid profile testing', 'Urine analysis', 'Quick report turnaround', 'Quality assured results'],
    detailImages: [
      '/images/laboratory-1.webp',
      '/images/ent-2.webp',
    ],
    gradient: 'from-amber-500 to-amber-700',
    image: '/images/laboratory-1.webp',
  },
  {
    icon: <FaBed />,
    title: 'IPD (In-Patient Department)',
    slug: 'ipd',
    desc: 'Comfortable inpatient facility for observation and recovery.',
    longDesc: 'Our In-Patient Department (IPD) at DEETYA Multispeciality Clinic offers comfortable and hygienic facilities for patients who require observation, treatment, or recovery under medical supervision. We provide private and shared rooms with attentive nursing care.\n\nOur IPD is equipped for patients needing short-term hospitalization for conditions requiring IV fluids, post-procedure observation, or recovery from acute illness. The facility maintains strict cleanliness and infection control standards. Our nursing staff and on-call doctors ensure patients receive continuous monitoring and timely medical attention throughout their stay.',
    highlights: ['Comfortable patient rooms', '24/7 nursing care', 'IV fluid & injection administration', 'Post-procedure monitoring', 'Clean & hygienic environment', 'On-call doctor availability'],
    detailImages: [
      '/images/ipd-1.webp',
      '/images/ipd-2.webp',
    ],
    gradient: 'from-teal-500 to-teal-700',
    image: '/images/ipd-1.webp',
  },
  {
    icon: <FaCapsules />,
    title: 'Pharmacy',
    slug: 'pharmacy',
    desc: 'In-house pharmacy with genuine medicines at affordable prices.',
    longDesc: 'Our in-house Pharmacy at DEETYA Multispeciality Clinic ensures patients get genuine, quality-assured medicines at fair prices without having to visit an external chemist. Having a pharmacy within the clinic saves patients time and ensures they receive exactly the medications prescribed by our doctors.\n\nWe stock a comprehensive range of prescription medications, over-the-counter drugs, health supplements, and first-aid supplies. Our pharmacists provide medication counseling, helping patients understand dosage, timing, and potential side effects of their prescriptions.',
    highlights: ['Genuine quality-assured medicines', 'Prescription & OTC medications', 'Health supplements', 'First-aid supplies', 'Medication counseling', 'Convenient in-house access'],
    detailImages: [
      '/images/pharmacy-1.webp',
      '/images/laboratory-1.webp',
    ],
    gradient: 'from-emerald-500 to-emerald-700',
    image: '/images/pharmacy-1.webp',
  },
];
