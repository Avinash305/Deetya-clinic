export interface CheckupPackage {
  name: string;
  slug: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  parameters: number;
  reportDelivery: string;
  gradient: string;
  includes?: string[];
}

export const checkupPackagesData: CheckupPackage[] = [
  {
    name: 'Full Body Checkup – Essential',
    slug: 'full-body-checkup-essential',
    originalPrice: 5243,
    discountedPrice: 1599,
    discountPercent: 70,
    parameters: 91,
    reportDelivery: 'Reports within 6 Hours',
    gradient: 'from-primary-500 to-primary-700',
    includes: ['Complete Blood Count (CBC)', 'Blood Sugar (Fasting & PP)', 'Lipid Profile', 'Liver Function Tests', 'Kidney Function Tests', 'Thyroid Profile (T3, T4, TSH)', 'Urine Routine & Microscopy', 'Iron Studies', 'Vitamin D', 'Vitamin B12', 'Calcium', 'Phosphorus'],
  },
  {
    name: 'Full Body Checkup – Complete',
    slug: 'full-body-checkup-complete',
    originalPrice: 18568,
    discountedPrice: 4999,
    discountPercent: 73,
    parameters: 118,
    reportDelivery: 'Reports within 12 Hours',
    gradient: 'from-accent-500 to-accent-700',
    includes: ['Complete Blood Count (CBC)', 'Blood Sugar (Fasting, PP & HbA1c)', 'Lipid Profile', 'Liver Function Tests (LFT)', 'Kidney Function Tests (KFT)', 'Thyroid Profile (T3, T4, TSH)', 'Iron Studies', 'Vitamin D & B12', 'Calcium, Phosphorus, Magnesium', 'Urine Routine & Microscopy', 'Hepatitis B Surface Antigen', 'HIV I & II', 'PSA (Prostate for Males)', 'Cardiac Risk Markers'],
  },
  {
    name: 'Ultra Full Body Checkup – Male',
    slug: 'ultra-full-body-checkup-male',
    originalPrice: 42729,
    discountedPrice: 14999,
    discountPercent: 65,
    parameters: 135,
    reportDelivery: 'Reports by Sun, 09 Aug',
    gradient: 'from-warm-500 to-warm-700',
    includes: ['Complete Blood Count (CBC)', 'Blood Sugar Profile (Fasting, PP, HbA1c)', 'Comprehensive Lipid Profile', 'Liver Function Tests (LFT)', 'Kidney Function Tests (KFT)', 'Thyroid Profile (Complete)', 'Iron Studies & Ferritin', 'Vitamin D, B12 & Folate', 'Cardiac Markers (hs-CRP, Homocysteine)', 'Hepatitis Panel (B & C)', 'HIV I & II', 'PSA (Prostate Specific Antigen)', 'Testosterone Level', 'ECG & Chest X-Ray', 'Urine Routine & Culture'],
  },
  {
    name: 'Ultra Full Body Checkup – Female',
    slug: 'ultra-full-body-checkup-female',
    originalPrice: 45529,
    discountedPrice: 14999,
    discountPercent: 67,
    parameters: 139,
    reportDelivery: 'Reports by Sun, 09 Aug',
    gradient: 'from-pink-500 to-pink-700',
    includes: ['Complete Blood Count (CBC)', 'Blood Sugar Profile (Fasting, PP, HbA1c)', 'Comprehensive Lipid Profile', 'Liver Function Tests (LFT)', 'Kidney Function Tests (KFT)', 'Thyroid Profile (Complete)', 'Iron Studies & Ferritin', 'Vitamin D, B12 & Folate', 'Cardiac Markers (hs-CRP, Homocysteine)', 'Hepatitis Panel (B & C)', 'HIV I & II', 'Cervical Cancer Screening (Pap Smear)', 'Mammography', 'ECG & Chest X-Ray', 'Urine Routine & Culture'],
  },
  {
    name: 'Full Body Checkup – Advanced',
    slug: 'full-body-checkup-advanced',
    originalPrice: 8308,
    discountedPrice: 2799,
    discountPercent: 67,
    parameters: 101,
    reportDelivery: 'Reports within 6 Hours',
    gradient: 'from-purple-500 to-purple-700',
    includes: ['Complete Blood Count (CBC)', 'Blood Sugar (Fasting, PP & HbA1c)', 'Lipid Profile', 'Liver Function Tests', 'Kidney Function Tests', 'Thyroid Profile (T3, T4, TSH)', 'Iron Studies & Ferritin', 'Vitamin D & B12', 'Calcium & Phosphorus', 'Urine Routine & Microscopy', 'ECG', 'Chest X-Ray', 'Hepatitis B Surface Antigen'],
  },
  {
    name: 'Full Body Checkup – Comprehensive',
    slug: 'full-body-checkup-comprehensive',
    originalPrice: 11983,
    discountedPrice: 3899,
    discountPercent: 67,
    parameters: 105,
    reportDelivery: 'Reports within 12 Hours',
    gradient: 'from-rose-500 to-rose-700',
    includes: ['Complete Blood Count (CBC)', 'Blood Sugar (Fasting, PP & HbA1c)', 'Lipid Profile', 'Liver Function Tests (LFT)', 'Kidney Function Tests (KFT)', 'Thyroid Profile', 'Iron Studies', 'Vitamin D & B12', 'Urine Routine & Microscopy', 'Hepatitis B', 'Cardiac Risk Markers', 'ECG & Chest X-Ray', 'USG Abdomen'],
  },
  {
    name: 'Full Body Checkup – Basic',
    slug: 'full-body-checkup-basic',
    originalPrice: 2624,
    discountedPrice: 1099,
    discountPercent: 58,
    parameters: 79,
    reportDelivery: 'Reports within 6 Hours',
    gradient: 'from-teal-500 to-teal-700',
    includes: ['Complete Blood Count (CBC)', 'Blood Sugar (Fasting)', 'Lipid Profile', 'Liver Function Tests', 'Kidney Function Tests', 'Thyroid (TSH)', 'Urine Routine', 'Iron', 'Calcium'],
  },
  {
    name: "Children's Checkup – Essential For Kids",
    slug: 'childrens-checkup-essential',
    originalPrice: 5398,
    discountedPrice: 1299,
    discountPercent: 76,
    parameters: 35,
    reportDelivery: 'Reports within 12 Hours',
    gradient: 'from-indigo-500 to-indigo-700',
    includes: ['Complete Blood Count (CBC)', 'Blood Sugar', 'Iron Studies', 'Vitamin D', 'Calcium', 'Urine Routine', 'Growth Assessment', 'Nutritional Counseling'],
  },
];
