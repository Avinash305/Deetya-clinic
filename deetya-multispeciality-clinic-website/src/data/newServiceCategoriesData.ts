export interface ServiceSubItem {
  title: string;
  description: string;
  /** Omitted when the price is not available (e.g. ambulance services). */
  offerPrice?: number;
  originalPrice?: number;
}

export interface NewServiceCategory {
  name: string;
  slug: string;
  duration: string;
  image: string;
  services: ServiceSubItem[];
}

/**
 * Quick / home-care service categories shown in the NEW section above the
 * existing Services grid. Clicking a category card opens its detail page
 * (/services/category/:slug) listing every sub-service with pricing.
 */
export const newServiceCategories: NewServiceCategory[] = [
  {
    name: 'First Aid at Home',
    slug: 'first-aid-at-home',
    duration: '30 mins',
    image: '/images/first-aid-at-home.webp',
    services: [
      {
        title: 'First Aid – Small Wounds',
        description: 'Get prompt and professional care for minor cuts and small wounds at home, ensuring proper cleaning and dressing.',
        offerPrice: 799,
        originalPrice: 999,
      },
      {
        title: 'Common Cold, Cough & Fever Treatment at Home',
        description: 'Trained nurse visits your home to check vitals and assist with care for cold, cough, and fever.',
        offerPrice: 899,
        originalPrice: 1100,
      },
      {
        title: 'First aid - large wound/multiple wounds',
        description: 'Receive expert at-home management of large or multiple wounds with sterile cleaning, dressing, and infection prevention.',
        offerPrice: 899,
        originalPrice: 1100,
      },
      {
        title: 'Weakness & Tiredness care at Home',
        description: 'At-home nurse visit for vital checks and supportive care for weakness, fatigue, and low energy.',
        offerPrice: 999,
        originalPrice: 1200,
      },
      {
        title: 'Vomiting, Diarrhea & Dehydration care at Home',
        description: 'Home nurse visit to monitor vitals and support care for vomiting, diarrhea, and dehydration.',
        offerPrice: 999,
        originalPrice: 1200,
      },
      {
        title: 'First aid - burn wound',
        description: 'Obtain professional at-home care for minor to moderate burns with safe cleaning, dressing, and guidance to promote healing.',
        offerPrice: 999,
        originalPrice: 1250,
      },
      {
        title: 'Dog bite / Cat bite Care at home',
        description: 'Get professional at-home care for minor dog or cat bites with proper cleaning, dressing, and infection prevention.',
        offerPrice: 799,
        originalPrice: 999,
      },
      {
        title: 'First aid - muscle cramps and sprains',
        description: 'Get safe and effective at-home relief for muscle cramps and sprains through professional assessment and supportive care.',
        offerPrice: 699,
        originalPrice: 900,
      },
      {
        title: 'Cellulitis care at Home',
        description: 'Home nurse service for basic wound care, monitoring, and support for skin infections like cellulitis.',
        offerPrice: 1099,
        originalPrice: 1300,
      },
      {
        title: 'Constipation care at Home',
        description: 'Nurse visit at home to provide supportive care and monitoring for constipation-related discomfort.',
        offerPrice: 899,
        originalPrice: 1100,
      },
      {
        title: 'Urinary Tract Infection (UTI) care at Home',
        description: 'Nurse visit at home to assist with vitals monitoring and supportive care for UTI symptoms.',
        offerPrice: 999,
        originalPrice: 1200,
      },
      {
        title: 'First aid - sting bites',
        description: 'Receive expert at-home care for insect stings and minor bites with proper cleaning, dressing, and infection prevention.',
        offerPrice: 699,
        originalPrice: 900,
      },
      {
        title: 'Mild Breathing Discomfort care at Home',
        description: 'Nurse at home to check oxygen levels, vitals, and support care for mild breathing discomfort.',
        offerPrice: 999,
        originalPrice: 1200,
      },
      {
        title: 'Period Cramps care at Home',
        description: 'Female nurse visit at home to assist with care and monitoring for menstrual pain and cramps.',
        offerPrice: 899,
        originalPrice: 1200,
      },
    ],
  },
  {
    name: 'Doctor at Home',
    slug: 'doctor-at-home',
    duration: '60 mins',
    image: '/images/doctor-at-home.webp',
    services: [
      {
        title: 'Doctor consultation - online',
        description: 'Consult qualified doctors online for medical advice, digital prescriptions, and follow-up care from home.',
        offerPrice: 249,
        originalPrice: 350,
      },
      {
        title: 'Online Pediatrician Consultation',
        description: 'Consult qualified pediatricians online for expert medical advice, diagnosis, and treatment plans for your child from the comfort of home. Ideal for common illnesses, follow-ups, and newborn care guidance without clinic visits.',
        offerPrice: 349,
        originalPrice: 500,
      },
      {
        title: 'Doctor home visit- general physician',
        description: 'Book a general physician home visit for in-person medical consultation and treatment at home.',
      },
      {
        title: 'Doctor home visit - death declaration',
        description: 'Doctor home visit for official death declaration and medical confirmation with dignity and care.',
      },
      {
        title: 'Online Physiotherapy Consultation',
        description: 'Consult with certified physiotherapists virtually for pain assessment, rehabilitation exercises, and ongoing care management from the comfort of your home.',
        offerPrice: 249,
        originalPrice: 350,
      },
    ],
  },
  {
    name: 'Nursing Services',
    slug: 'nursing-services',
    duration: '45 mins',
    image: '/images/nursing-services.webp',
    services: [
      {
        title: 'Injection service (IM / Sc) At Home',
        description: 'Get safe and professional injection services at home by certified nurses with proper hygiene and medical protocols.',
        offerPrice: 599,
        originalPrice: 800,
      },
      {
        title: 'IVF (fertility) injection at home',
        description: 'Book IVF injection at home in Bengaluru for safe, timely fertility injections administered by trained nurses as prescribed by your fertility specialist.',
        offerPrice: 699,
        originalPrice: 899,
      },
      {
        title: 'IV infusion Service at Home',
        description: 'Book IV infusion service at home for fluids or medications administered safely by trained nurses under medical supervision.',
        offerPrice: 899,
        originalPrice: 1100,
      },
      {
        title: 'Catheterization Service at Home',
        description: 'Professional urinary catheter insertion or change at home with sterile techniques by experienced healthcare professionals.',
        offerPrice: 799,
        originalPrice: 1100,
      },
      {
        title: 'Ryle’s Tube Insertion Service at Home',
        description: 'Safe Ryle’s tube insertion at home by trained professionals ensuring patient comfort and proper feeding access.',
        offerPrice: 1099,
        originalPrice: 1300,
      },
      {
        title: 'Enema Care at Home',
        description: 'Gentle and hygienic enema care at home for safe bowel relief, provided by trained nurses.',
        offerPrice: 999,
        originalPrice: 1200,
      },
      {
        title: 'Tracheostomy dressing at Home',
        description: 'Professional tracheostomy dressing at home to maintain airway hygiene, safety, and patient comfort.',
        offerPrice: 1099,
        originalPrice: 1299,
      },
      {
        title: 'Albumin Infusion Service at Home',
        description: 'Albumin infusion administered safely at home by trained nurses following prescribed medical protocols.',
      },
      {
        title: 'PICC Line Dressing Service at Home',
        description: 'Sterile PICC line dressing change at home to prevent infection and ensure proper line care and safety.',
        offerPrice: 999,
        originalPrice: 1200,
      },
    ],
  },
  {
    name: 'Physiotherapy',
    slug: 'physiotherapy',
    duration: '60 mins',
    image: '/images/physiotherapy.webp',
    services: [
      {
        title: 'Stroke management and recovery',
        description: 'Comprehensive stroke management and recovery care at home—ensuring timely treatment, continuous monitoring, and personalized rehabilitation to help patients regain independence safely.',
        offerPrice: 999,
        originalPrice: 1500,
      },
      {
        title: 'Pre and Post Surgical Rehabilitation',
        description: 'Pre and post-surgical rehabilitation at home—focused on faster recovery, pain management, and guided therapy to restore strength and mobility safely.',
        offerPrice: 999,
        originalPrice: 1500,
      },
      {
        title: 'Pre and Post Natal Physiotherapy',
        description: 'Pre and postnatal physiotherapy at home—supporting a healthier pregnancy and faster postpartum recovery with safe, guided exercises and expert care.',
        offerPrice: 999,
        originalPrice: 1500,
      },
      {
        title: 'Geriatric Physiotherapy at home',
        description: 'Geriatric physiotherapy at home—focused on improving mobility, reducing pain, and enhancing independence for seniors through safe, personalized care.',
        offerPrice: 999,
        originalPrice: 1500,
      },
      {
        title: 'Fracture and Recovery',
        description: 'Fracture and recovery care at home—focused on pain relief, safe healing, and guided rehabilitation to restore strength and mobility faster.',
        offerPrice: 999,
        originalPrice: 1500,
      },
      {
        title: 'Sports Physiotherapy',
        description: 'Sports physiotherapy at home—designed for faster injury recovery, pain relief, and performance-focused rehabilitation to get you back in action safely.',
        offerPrice: 999,
        originalPrice: 1500,
      },
      {
        title: 'Pain Management',
        description: 'Pain management at home—targeted therapy to relieve chronic and acute pain, improve mobility, and restore everyday comfort safely.',
        offerPrice: 899,
        originalPrice: 1300,
      },
      {
        title: 'Ergonomic assessment',
        description: 'Ergonomics assessment at home or workplace—identifying posture risks and optimizing your setup to prevent pain, injuries, and long-term strain.',
        offerPrice: 899,
        originalPrice: 1300,
      },
    ],
  },
  {
    name: 'Diagnostics',
    slug: 'diagnostics',
    duration: '60 mins',
    image: '/images/diagnostics.webp',
    services: [
      {
        title: 'Holter Monitor Test',
        description: 'Get a professional Holter Monitor test at home. Certified technicians set up 24-hour continuous monitoring to detect arrhythmias and heart abnormalities. Convenient, safe, and includes expert report analysis.',
        offerPrice: 3500,
        originalPrice: 5000,
      },
      {
        title: 'ECG at Home Service',
        description: 'Accurate ECG test at home using portable equipment, with quick and reliable heart health assessment.',
        offerPrice: 799,
        originalPrice: 1000,
      },
      {
        title: 'PFT At Home',
        description: 'Pulmonary Function Test at home to evaluate lung function and breathing capacity with professional supervision.',
        offerPrice: 899,
        originalPrice: 1100,
      },
      {
        title: 'Basic Vital Checkup at Home',
        description: 'Routine vital checkup at home including BP, oxygen levels, pulse, and temperature by trained professionals.',
        offerPrice: 399,
        originalPrice: 550,
      },
      {
        title: 'Audiometry Test at Home Service',
        description: 'Convenient audiometry hearing test at home to assess hearing loss using reliable diagnostic equipment.',
        offerPrice: 899,
        originalPrice: 1100,
      },
      {
        title: 'X-Ray at Home Service',
        description: 'Digital X-ray at home using portable equipment, offering safe and accurate diagnostic imaging without hospital visits.',
        offerPrice: 2499,
        originalPrice: 3000,
      },
    ],
  },
  {
    name: 'Ambulance Service',
    slug: 'ambulance-service',
    duration: '20 mins',
    image: '/images/ambulance-service.webp',
    services: [
      {
        title: 'BLS Ambulance Service (Basic Life Support)',
        description: 'BLS ambulance service for safe patient transport. Book a reliable basic life support ambulance with DEETYA.',
      },
      {
        title: 'ALS Ambulance Service (Advanced Life Support)',
        description: 'ALS ambulance service with advanced life support. Get critical care ambulance transport with DEETYA.',
      },
      {
        title: 'Emergency Ambulance Service',
        description: 'Emergency ambulance service with fast response. Get quick medical transport to hospital during emergencies.',
      },
      {
        title: 'Patient Transportation Service',
        description: 'Patient transportation service for safe medical travel. Book non-emergency patient transport with DEETYA.',
      },
      {
        title: 'Dead Body Freezer Box on Rent',
        description: 'Dead body freezer box on rent for safe preservation. Book hygienic freezer box service with DEETYA.',
      },
      {
        title: 'Dead Body Transport Service',
        description: 'Dead body transport service with dignity and care. Book professional body transportation with DEETYA.',
      },
      {
        title: 'Dead Body Air Cargo Service',
        description: 'Dead body air cargo service for long-distance transport. Get respectful air transfer support with DEETYA.',
      },
      {
        title: 'Standby Ambulance for Events',
        description: 'Standby ambulance for events and gatherings. Ensure medical safety at events with a DEETYA ambulance.',
      },
      {
        title: 'Air Ambulance Service',
        description: 'Air ambulance service for fast critical patient transfer. Safe medical transport by air with DEETYA.',
      },
    ],
  },
  {
    name: 'Vaccination',
    slug: 'vaccination',
    duration: '60 mins',
    image: '/images/vaccination.webp',
    services: [
      {
        title: 'Hepatitis B vaccination at home',
        description: 'Get Hepatitis B vaccination at home from certified nurses. Safe, hygienic, and convenient immunization service for adults and children. Includes digital vaccination certificate and post-care guidance.',
        offerPrice: 799,
        originalPrice: 999,
      },
      {
        title: 'Chickenpox Vaccination at Home',
        description: 'Get Chickenpox vaccination at home from certified nurses. Protect against Varicella with safe, WHO-approved immunization for kids and adults. Includes digital certificate and post-care guidance.',
        offerPrice: 2999,
        originalPrice: 3500,
      },
      {
        title: 'Rabies Vaccination at Home',
        description: 'Get anti-rabies vaccination at home after animal bites, administered safely by trained nurses.',
        offerPrice: 799,
        originalPrice: 1299,
      },
      {
        title: 'Yellow Fever Vaccination at Home',
        description: 'Get Yellow Fever vaccination at home from certified nurses. Essential protection for travelers to endemic regions. Includes WHO-approved vaccine, safe administration, and digital International Certificate of Vaccination.',
        offerPrice: 3299,
        originalPrice: 3700,
      },
      {
        title: 'Rotavirus Vaccination at Home',
        description: 'Get Rotavirus vaccination at home for your infant. Certified nurses administer safe, oral vaccines to prevent severe gastroenteritis. Convenient, painless, and includes digital vaccination certificate.',
        offerPrice: 1499,
        originalPrice: 1899,
      },
      {
        title: 'Hepatitis A vaccination at home',
        description: 'Get Hepatitis A vaccination at home from certified nurses. Safe, hygienic, and convenient immunization service for travelers, children, and adults. Includes digital vaccination certificate and post-care guidance.',
        offerPrice: 3199,
        originalPrice: 3500,
      },
      {
        title: 'MMR Vaccination at Home',
        description: 'Get MMR vaccination at home from certified nurses. Essential protection against Measles, Mumps, and Rubella for infants, children, and adults. Convenient, safe, and includes digital vaccination records.',
        offerPrice: 2899,
        originalPrice: 3800,
      },
      {
        title: 'DTP Vaccination at Home',
        description: 'Get DTP vaccination at home from certified nurses. Essential protection against Diphtheria, Tetanus, and Pertussis for infants, children, and adults. Convenient, safe, and includes digital vaccination records.',
        offerPrice: 4399,
        originalPrice: 4899,
      },
      {
        title: 'Japanese Encephalitis Vaccination at Home',
        description: 'Get Japanese Encephalitis vaccination at home from certified nurses. Protect against this mosquito-borne viral infection with safe, WHO-approved immunization. Includes digital certificate and post-care guidance.',
        offerPrice: 1299,
        originalPrice: 1600,
      },
      {
        title: 'TT (Tetanus Toxoid) Vaccination at Home',
        description: 'TT vaccination at home for protection against tetanus, safely administered by certified nurses.',
        offerPrice: 699,
        originalPrice: 1200,
      },
      {
        title: 'Influenza (Flu) Vaccination at Home',
        description: 'Seasonal flu vaccination at home for protection against influenza, administered by trained nurses.',
        offerPrice: 2149,
        originalPrice: 2500,
      },
      {
        title: 'HPV Vaccination at Home',
        description: 'HPV vaccination at home to help prevent cervical and other HPV-related cancers safely and conveniently.',
        offerPrice: 2500,
        originalPrice: 3500,
      },
      {
        title: 'Typhoid Vaccination (Typbar TCV) at Home',
        description: 'Typhoid vaccination at home using Typbar TCV for safe and effective typhoid prevention.',
        offerPrice: 2499,
        originalPrice: 3000,
      },
      {
        title: 'Pneumococcal (Prevenar 13) Vaccination at Home',
        description: 'Pneumococcal vaccination at home to help prevent pneumonia and serious infections.',
        offerPrice: 2699,
        originalPrice: 3200,
      },
      {
        title: 'Meningococcal (Menactra) Vaccination at Home',
        description: 'Meningococcal vaccination at home for protection against meningitis and bloodstream infections.',
        offerPrice: 5399,
        originalPrice: 5700,
      },
      {
        title: 'Shingles Vaccination at Home',
        description: 'Shingles vaccination at home to reduce the risk of painful herpes zoster infection in adults.',
        offerPrice: 9999,
        originalPrice: 12000,
      },
    ],
  },
  {
    name: 'Wound Care',
    slug: 'wound-care',
    duration: '60 mins',
    image: '/images/wound-care.webp',
    services: [
      {
        title: 'Suture Removal at Home',
        description: 'Safe and hygienic suture removal at home by certified nurses.',
        offerPrice: 599,
        originalPrice: 850,
      },
      {
        title: 'Wound Dressing at home (Small)',
        description: 'Professional small wound dressing at home with safe, sterile care by certified nurses.',
        offerPrice: 699,
        originalPrice: 950,
      },
      {
        title: 'Wound Dressing At Home (Big / Multiple)',
        description: 'Expert care for large or multiple wounds at home using sterile techniques by certified nurses.',
        offerPrice: 899,
        originalPrice: 1150,
      },
      {
        title: 'Wound Dressing – Bed Sores (At Home)',
        description: 'Professional bed sore wound dressing at home with safe, sterile care by certified nurses.',
        offerPrice: 899,
        originalPrice: 1200,
      },
      {
        title: 'Wound Dressing – Piles / Fistula at Home',
        description: 'Discreet and hygienic piles and fistula wound dressing at home by certified nurses.',
        offerPrice: 999,
        originalPrice: 1249,
      },
      {
        title: 'Staple Removal (Up to 10 Pins) at Home',
        description: 'Safe removal of up to 10 surgical staples at home by certified nurses.',
        offerPrice: 599,
        originalPrice: 850,
      },
      {
        title: 'Wound Debridement and Dressing at Home',
        description: 'Professional wound debridement and dressing at home to support safe healing by certified nurses.',
        offerPrice: 999,
        originalPrice: 1150,
      },
      {
        title: 'Maxwell Dressing for Cellulitis at Home',
        description: 'Specialized Maxwell dressing for cellulitis at home with safe, sterile care by certified nurses.',
        offerPrice: 1099,
        originalPrice: 1350,
      },
    ],
  },
  {
    name: 'Elder Care',
    slug: 'elder-care',
    duration: '60 mins',
    image: '/images/elder-care.webp',
    services: [
      {
        title: 'Catheterization Service at Home',
        description: 'Professional urinary catheter insertion or change at home with sterile techniques by experienced healthcare professionals.',
        offerPrice: 799,
        originalPrice: 1100,
      },
      {
        title: 'Ryle’s Tube Insertion Service at Home',
        description: 'Safe Ryle’s tube insertion at home by trained professionals ensuring patient comfort and proper feeding access.',
        offerPrice: 1099,
        originalPrice: 1300,
      },
      {
        title: 'Colostomy Bag Change at Home',
        description: 'Hygienic colostomy bag change and stoma care at home by experienced nursing staff.',
        offerPrice: 999,
        originalPrice: 1200,
      },
    ],
  },
  {
    name: 'Blood Test',
    slug: 'blood-test',
    duration: '60 mins',
    image: '/images/blood-test.webp',
    services: [
      {
        title: 'Diabetic check test',
        description: 'Monitor your blood sugar with our at-home Diabetic Check Test. Measure HbA1c and glucose levels accurately from home. Get fast, lab-certified results to manage diabetes effectively. Order your kit today.',
        offerPrice: 899,
        originalPrice: 999,
      },
      {
        title: 'Complete Blood Count',
        description: 'A comprehensive blood test that evaluates overall health by measuring red blood cells, white blood cells, hemoglobin, and platelets.',
        offerPrice: 349,
        originalPrice: 500,
      },
      {
        title: 'Cardiovascular Risk Panel Test',
        description: 'Assess your heart health with our comprehensive Cardiovascular Risk Panel Test. Measure cholesterol, triglycerides, and key cardiac markers from home. Get accurate, lab-certified results to understand your risk of heart disease. Take proactive steps for a healthier heart—order your kit today.',
        offerPrice: 6999,
        originalPrice: 8499,
      },
      {
        title: 'Diabetic Profile Test',
        description: 'Get a complete picture of your blood sugar health with our Diabetic Profile Test. Measure HbA1c, fasting glucose, and lipid levels from home. Detect early signs of diabetes and manage your condition with accurate, lab-certified results. Order your comprehensive screening kit today.',
        offerPrice: 1999,
        originalPrice: 2699,
      },
      {
        title: 'Cardiac Screening Test',
        description: 'Protect your heart with our comprehensive Cardiac Screening Test. Check key markers like cholesterol, lipids, and cardiac enzymes from home. Get accurate, lab-certified results to assess your heart health risk. Order your easy-to-use kit today.',
        offerPrice: 899,
        originalPrice: 1099,
      },
      {
        title: 'Breast Cancer Screening Test',
        description: 'Prioritize your health with our at-home Breast Cancer Screening Test. Detect key biomarkers early from the comfort of your home. Get accurate, lab-certified results quickly for peace of mind. Order your confidential screening kit today.',
        offerPrice: 1499,
        originalPrice: 1599,
      },
      {
        title: 'Anti-Natal Panel Test',
        description: 'Protect your baby’s health with our comprehensive Anti-Natal Panel Test. Screen for critical infections, blood compatibility, and genetic risks from the comfort of your home. Enjoy lab-certified accuracy, fast turnaround, and confidential digital results. Ensure a safe pregnancy journey—order your at-home screening kit today.',
        offerPrice: 1599,
        originalPrice: 2270,
      },
      {
        title: 'Cardiolipin Screening Test',
        description: 'Detect autoimmune risks with our Cardiolipin Screening Test. Identify antibodies linked to blood clots and pregnancy complications from home. Get accurate, lab-certified results quickly for early intervention. Order your confidential screening kit today.',
        offerPrice: 899,
        originalPrice: 1099,
      },
      {
        title: 'Bone Health Profile Test',
        description: 'Check your bone strength at home. Our Bone Health Profile Test measures Vitamin D, Calcium, and more. Get fast, lab-accurate results to prevent osteoporosis. Order now.',
        offerPrice: 1199,
        originalPrice: 2599,
      },
      {
        title: 'Antenatal Screening test',
        description: 'Ensure a healthy pregnancy with our comprehensive Antenatal Screening Test. Detect genetic conditions, infections, and blood type early from the comfort of your home. Get accurate, lab-certified results quickly with confidential digital reporting. Book your at-home prenatal screening today for peace of mind.',
        offerPrice: 499,
        originalPrice: 699,
      },
      {
        title: 'Immuno Health Check Test',
        description: 'Boost your body’s defense with our comprehensive Immuno Health Check Test. Get accurate, lab-certified results to identify weaknesses and strengthen your immunity. Order your at-home kit today.',
        offerPrice: 4199,
        originalPrice: 4299,
      },
      {
        title: 'Collagen Profile Test',
        description: 'Assess your skin, joint, and tissue health with our Collagen Profile Test. Measure key markers related to collagen synthesis and breakdown from home. Get accurate, lab-certified results to support anti-aging, joint mobility, and overall wellness. Order your at-home kit today.',
        offerPrice: 2499,
        originalPrice: 2999,
      },
      {
        title: 'Anemia Screening test',
        description: 'Detect iron deficiency early with our convenient Anemia Screening Test at home. Get accurate, lab-quality results from the comfort of your home without a doctor’s visit. Fast shipping, easy-to-use kit, and confidential digital reports. Take control of your energy and health today.',
        offerPrice: 1099,
        originalPrice: 1599,
      },
      {
        title: 'Diabetic Screening Test',
        description: 'Detect diabetes early with our convenient At-Home Diabetic Screening Test. Measure HbA1c and glucose levels accurately from the comfort of your home. Get fast, lab-certified results to understand your risk and take control of your health. Order your screening kit today.',
        offerPrice: 699,
        originalPrice: 799,
      },
      {
        title: 'Arthritis Screening test',
        description: 'Screen for arthritis at home. Detect early signs of joint inflammation with our easy-to-use kit. Get fast, lab-accurate results and take control of your joint health today.',
        offerPrice: 1599,
        originalPrice: 1999,
      },
      {
        title: 'Coagulation Profile Test',
        description: 'Assess your blood clotting ability with our comprehensive Coagulation Profile Test. Measure key markers like PT, INR, and APTT from the comfort of your home. Get accurate, lab-certified results to monitor bleeding risks or medication efficacy. Order your confidential screening kit today.',
        offerPrice: 699,
        originalPrice: 799,
      },
      {
        title: 'Comprehensive Cancer Panel Test',
        description: 'Gain peace of mind with our Comprehensive Cancer Panel Test. Screen for multiple tumor markers from the comfort of your home. Get accurate, lab-certified results to detect potential risks early. Confidential, fast, and easy-to-use—Book your screening kit today.',
        offerPrice: 95999,
        originalPrice: 99999,
      },
      {
        title: 'Coagulation Panel Test',
        description: 'Monitor your blood clotting health with our at-home Coagulation Panel Test. Measure key markers like PT, INR, and APTT from the comfort of your home. Get accurate, lab-certified results to manage bleeding risks or monitor medication. Order your confidential screening kit today.',
        offerPrice: 3499,
        originalPrice: 3999,
      },
      {
        title: 'Anti-Natal Screening– RAPID test',
        description: 'Get fast, reliable prenatal insights with our Anti-Natal Screening – RAPID Test. Screen for critical infections and blood compatibility from home with quick turnaround times. Enjoy lab-certified accuracy, easy sample collection, and confidential digital results. Ensure your baby’s safety without the wait—order your rapid screening kit today.',
        offerPrice: 599,
        originalPrice: 799,
      },
      {
        title: 'Complete Urine Analysis (CUA)',
        description: 'A simple urine test that evaluates kidney, urinary tract, and overall metabolic health by analyzing chemical and microscopic components.',
        offerPrice: 349,
        originalPrice: 549,
      },
      {
        title: 'Lipid Profile Test',
        description: 'A blood test that measures cholesterol and triglyceride levels to assess cardiovascular health and risk of heart disease.',
        offerPrice: 449,
        originalPrice: 650,
      },
      {
        title: 'Liver Function Test',
        description: 'A comprehensive blood test that evaluates liver health by measuring enzymes, proteins, and bilirubin levels.',
        offerPrice: 599,
        originalPrice: 750,
      },
      {
        title: 'Thyroid Profile Test',
        description: 'A blood test that evaluates thyroid hormone levels to assess thyroid function and detect thyroid disorders.',
        offerPrice: 549,
        originalPrice: 749,
      },
      {
        title: 'KFT (Kidney Function Test)',
        description: 'A blood test that assesses kidney health by measuring key waste products, electrolytes, and overall kidney function.',
        offerPrice: 899,
        originalPrice: 1100,
      },
      {
        title: 'Iron Deficiency Profile Test',
        description: 'A blood test that evaluates iron levels and related parameters to detect anemia and monitor overall iron status.',
        offerPrice: 899,
        originalPrice: 1100,
      },
      {
        title: 'PCOD Test',
        description: 'Convenient at-home PCOD testing in Bengaluru with accurate hormone analysis, helping in early diagnosis and effective management of polycystic ovary syndrome.',
        offerPrice: 999,
        originalPrice: 1499,
      },
    ],
  },
  {
    name: 'Full Body Checkup',
    slug: 'full-body-checkup',
    duration: '60 mins',
    image: '/images/full-body-checkup.webp',
    services: [
      {
        title: 'Full body checkup - Basic',
        description: 'A comprehensive at-home health screening that evaluates vital body functions, helping you stay informed, prepared, and proactive about your health.',
        offerPrice: 1299,
        originalPrice: 1500,
      },
      {
        title: 'Full Body Checkup - Essentials',
        description: 'An all-inclusive preventive health checkup designed to assess vital organs, nutrient levels, and heart health—right from the comfort of your home.',
        offerPrice: 1699,
        originalPrice: 2000,
      },
      {
        title: 'Full body checkup- Comprehensive',
        description: 'An extensive, end-to-end health assessment covering vital organs, nutrition, metabolic health, and respiratory function—delivered conveniently at home.',
        offerPrice: 2499,
        originalPrice: 2799,
      },
      {
        title: 'Full body checkup – Advanced',
        description: 'An in-depth preventive health checkup that delivers a detailed evaluation of vital organs, nutritional status, and cardiac health—all from the comfort of your home.',
        offerPrice: 1999,
        originalPrice: 2350,
      },
      {
        title: 'Blood Test - Basic',
        description: 'Get a comprehensive home-based blood test covering key health parameters for routine monitoring and early detection.',
        offerPrice: 499,
        originalPrice: 700,
      },
      {
        title: 'Blood test – Essential',
        description: 'Comprehensive home-based blood test covering essential health markers for in-depth routine monitoring and early detection.',
        offerPrice: 999,
        originalPrice: 1200,
      },
      {
        title: 'Blood test – Advanced',
        description: 'Comprehensive home-based blood and urine test covering advanced health markers for detailed health monitoring and preventive care.',
        offerPrice: 1299,
        originalPrice: 1500,
      },
      {
        title: 'Blood test – Male',
        description: 'Comprehensive home-based blood and urine test tailored for men, covering essential and advanced health markers including prostate screening.',
        offerPrice: 1499,
        originalPrice: 1700,
      },
      {
        title: 'Blood test - Female',
        description: 'Comprehensive home-based blood and urine test tailored for women, covering essential and advanced health markers including reproductive health screening.',
        offerPrice: 1499,
        originalPrice: 1700,
      },
    ],
  },
];
