import type { ReactNode } from 'react';

export interface DoctorCondition {
  title: string;
  description: string;
  icon?: ReactNode;
}

export interface DoctorFAQ {
  q: string;
  a: string;
}

export interface DoctorDetail {
  name: string;
  slug: string;
  specialization: string;
  experience: string;
  phone: string;
  color: string;
  bgColor: string;
  image: string;
  bio: string;
  education: string[];
  services: string[];
  languages: string[];
  consultation: string;
  approach: string;
  conditions: DoctorCondition[];
  whatToExpect: string[];
  faq: DoctorFAQ[];
}

export const doctorsData: DoctorDetail[] = [
  {
    name: 'Dr. Deepak L',
    slug: 'dr-deepak-l',
    specialization: 'General Physician',
    experience: '15+ Years',
    phone: '+91 8050454140',
    color: 'from-primary-500 to-primary-700',
    bgColor: 'from-primary-50 to-primary-100',
    image: '/images/doctor-deepak.webp',
    bio: 'Dr. Deepak L is a highly experienced General Physician with over 15 years of clinical practice. He is the head of DEETYA Multispeciality Clinic and leads the General Medicine department with compassion and expertise. Dr. Deepak is known for his thorough diagnostic approach and personalized treatment plans that address each patient\'s unique health needs. He specializes in managing chronic conditions like diabetes, hypertension, and thyroid disorders, while also providing comprehensive primary care for acute illnesses. His patient-first philosophy and ability to explain complex medical conditions in simple terms have made him a trusted healthcare provider in the JP Nagar community.',
    education: ['MBBS', 'MD - General Medicine'],
    services: ['General health checkups', 'Diabetes & hypertension management', 'Thyroid disorder treatment', 'Acute illness & infection care', 'Preventive health screenings'],
    languages: ['English', 'Kannada', 'Hindi'],
    consultation: '₹350',
    approach: "Healthcare isn't just about treating symptoms—it's about understanding the whole person behind the condition. Dr. Deepak L believes that every patient deserves a doctor who takes the time to listen, explain, and partner with them on their health journey. Instead of rushed appointments and quick prescriptions, he focuses on building lasting relationships with his patients, getting to know their medical history, lifestyle, and personal health goals. Whether you're managing a chronic condition or dealing with a sudden illness, Dr. Deepak ensures that your care plan is tailored specifically to you—not a one-size-fits-all approach.",
    conditions: [
      { title: 'Diabetes & Metabolic Health', description: "Managing diabetes isn't just about checking blood sugar levels—it's about understanding how your body responds to food, activity, and stress. Dr. Deepak helps patients develop personalized diabetes management plans that include medication, dietary guidance, and lifestyle adjustments. Whether you're newly diagnosed or have been managing diabetes for years, he works with you to achieve stable blood sugar control and prevent complications." },
      { title: 'Hypertension & Heart Health', description: "High blood pressure often has no symptoms, but its effects on your health can be serious. Dr. Deepak provides thorough evaluations to understand the root causes of hypertension and creates effective management strategies. From medication optimization to sodium reduction and stress management, he helps patients bring their blood pressure under control and reduce their risk of heart disease and stroke." },
      { title: 'Thyroid Disorders', description: "Thyroid conditions can affect your energy, weight, mood, and overall well-being. Whether you're dealing with hypothyroidism, hyperthyroidism, or thyroid nodules, Dr. Deepak offers comprehensive thyroid care with accurate diagnosis and personalized treatment plans. He monitors your progress closely and adjusts medications as needed to help you feel your best." },
      { title: 'Respiratory & Seasonal Illnesses', description: "From common colds and flu to bronchitis and pneumonia, respiratory infections can range from mildly annoying to seriously debilitating. Dr. Deepak provides thorough evaluations to determine whether your symptoms are viral, bacterial, or allergy-related, ensuring you receive the right treatment—not unnecessary antibiotics. He also offers guidance on managing chronic respiratory conditions like asthma." },
      { title: 'Digestive & Gastrointestinal Health', description: "Persistent heartburn, bloating, indigestion, or irregular bowel movements can significantly impact your quality of life. Dr. Deepak takes a comprehensive approach to digestive health, evaluating diet, lifestyle factors, and underlying medical conditions to identify the root cause of your symptoms and provide effective relief." },
      { title: 'Preventive Health & Wellness Checkups', description: "Regular health checkups are the best way to catch potential health issues before they become serious. Dr. Deepak offers comprehensive annual physical examinations with appropriate screening tests based on your age, gender, and risk factors. He takes the time to review your results with you and provides actionable recommendations for maintaining optimal health." },
    ],
    whatToExpect: [
      'A thorough consultation where Dr. Deepak listens carefully to your concerns and asks detailed questions about your symptoms, medical history, and lifestyle.',
      'Evidence-based diagnostic evaluation—if tests are needed, he explains why and what they will reveal, so there are no surprises.',
      'A clear, jargon-free explanation of your condition and the reasoning behind your treatment plan, so you feel informed and confident.',
      'Personalized treatment options presented with their benefits and considerations, allowing you to make informed decisions about your care.',
      'Follow-up guidance and support, including monitoring plans, lifestyle recommendations, and clear instructions on when to return.',
    ],
    faq: [
      { q: 'How often should I have a general health checkup?', a: 'For most adults under 40 with no chronic conditions, an annual checkup is recommended. If you have diabetes, hypertension, or other chronic conditions, your doctor may recommend more frequent visits—typically every 3 to 6 months—to monitor your progress and adjust treatment as needed.' },
      { q: 'Do I need a referral to see a specialist at your clinic?', a: "No referral is needed. You can directly book an appointment with any of our specialists. However, if you're unsure which specialist to see, Dr. Deepak can provide a general consultation first and guide you to the right department." },
      { q: 'Can I get my lab tests done at the same location?', a: 'Yes! DEETYA Clinic has a fully equipped in-house laboratory. Most common blood tests, urine analysis, and basic diagnostic tests can be performed on-site, and results are typically available quickly—often within the same day.' },
      { q: 'What should I bring to my first appointment?', a: 'Please bring any previous medical records, a list of current medications (including dosages), your insurance card if applicable, and any recent lab reports or imaging results. This helps Dr. Deepak get a complete picture of your health right from the start.' },
    ],
  },
  {
    name: 'Dr. Uthra R',
    slug: 'dr-uthra',
    specialization: 'Consultant Obstetrician & Gynaecologist',
    experience: '6+ Years',
    phone: '+91 9488474175',
    color: 'from-pink-500 to-pink-700',
    bgColor: 'from-pink-50 to-pink-100',
    image: '/images/doctor-uttra.webp',
    bio: "Women's health isn't just about check-ups and test results—it's about feeling heard, understood, and supported at every stage of life. Whether you're navigating menstrual health, fertility, pregnancy, menopause, or pelvic conditions, the right medical care can make all the difference.\n\nDr. Uthra R is a Consultant Obstetrician & Gynaecologist who believes that women deserve better than rushed appointments and quick prescriptions. Instead, she takes the time to listen, explain, and find solutions that actually work for you. No two women are the same—some prefer natural remedies, others want medical treatments. Some are thinking about starting a family, while others just want relief from painful periods. Whatever your concern, Dr. Uthra ensures your care is as unique as you are.",
    education: ['MBBS', 'MS Obstetrics and Gynaecology'],
    services: ['Antenatal & postnatal care', 'Menstrual disorder management', 'PCOS & hormonal treatment', 'Cervical cancer screening (Pap smear)', 'Fertility evaluation & treatment', 'Menopause management', 'Pelvic health & gynecological care'],
    languages: ['Kannada', 'English', 'Tamil', 'Hindi'],
    consultation: '₹400',
    approach: "Women's health isn't just about check-ups and test results—it's about feeling heard, understood, and supported at every stage of life. Too often, healthcare feels rushed, leaving women with more questions than answers. Dr. Uthra believes that women deserve better. Instead of a quick appointment and a prescription, she takes the time to listen, explain, and find solutions that actually work for you.\n\nNo two women are the same. Some prefer natural remedies, others want medical treatments. Some are thinking about starting a family, while others just want relief from painful periods. Whatever your concern, Dr. Uthra ensures that your care is as unique as you are.",
    conditions: [
      { title: 'Managing Period Pain & Irregular Cycles', description: "Periods shouldn't feel like a battle every month. If you're dealing with severe cramps, unpredictable cycles, or heavy bleeding, it's time to get answers. These symptoms can sometimes indicate underlying health issues, and Dr. Uthra works to pinpoint the cause and provide real solutions—not just temporary fixes." },
      { title: 'Fertility Support That Fits Your Journey', description: "Trying to conceive isn't always as straightforward as people make it seem. If you've been trying for a while without success or just want guidance on where to start, Dr. Uthra provides step-by-step fertility evaluations and treatments tailored to your body's needs." },
      { title: 'Pregnancy Care With Compassion', description: "Pregnancy is exciting, but it's also full of unknowns. Some days bring joy, others bring questions. No matter what stage you're at, having a trusted doctor who listens to your concerns and provides clear, reassuring guidance makes all the difference." },
      { title: 'Making Menopause Easier', description: "Menopause doesn't come with a manual, and the symptoms can catch many women off guard. If hot flashes, mood swings, sleep issues, or unexpected body changes are making daily life difficult, there are options. Dr. Uthra helps women find relief—whether through lifestyle changes, non-hormonal treatments, or medical solutions that fit their individual needs." },
      { title: 'Pelvic Health & Gynecological Conditions', description: "Conditions like fibroids, cysts, and pelvic pain can impact everything from your daily comfort to your long-term health. Dr. Uthra takes a conservative approach, exploring all treatment options before considering surgery, so you can make the best choice for your body." },
    ],
    whatToExpect: [
      'A real conversation—no rushed visits. Dr. Uthra takes the time to truly listen and address your concerns.',
      'Straightforward explanations—if tests or exams are needed, she explains why, so there are no surprises.',
      'Personalized care—instead of just handing you a prescription, she walks you through different options and helps you make the right decision for your health.',
    ],
    faq: [
      { q: 'Do I need surgery for my condition?', a: 'Not always. Many gynecological conditions can be treated with lifestyle changes, medications, or non-invasive options. Surgery is only recommended when absolutely necessary, and Dr. Uthra explores every alternative first.' },
      { q: 'How do I know if I should see a fertility specialist?', a: "If you've been trying to conceive for six months to a year without success or your cycle seems irregular, it's a good idea to check in. Dr. Uthra offers thorough fertility evaluations to help take the guesswork out of the process." },
      { q: 'Are there non-hormonal options for menopause symptoms?', a: "Yes. Every woman's body is different, and what works for one person may not work for another. Some women find relief through diet, lifestyle changes, or natural therapies, while others benefit from targeted medical treatments. Dr. Uthra helps you explore what's best for your body." },
    ],
  },
  {
    name: 'Dr. Karthik M S',
    slug: 'dr-karthik',
    specialization: 'Consultant Orthopaedic Surgeon',
    experience: '7+ Years',
    phone: '+91 8861407440',
    color: 'from-accent-500 to-accent-700',
    bgColor: 'from-accent-50 to-accent-100',
    image: '/images/doctor-karthik.webp',
    bio: 'Dr. Karthik M S is a highly skilled Consultant Orthopaedic Surgeon specializing in Trauma and Orthopaedics with 7+ years of clinical experience. He completed his MBBS, MS (Orthopaedics), DNB (Orthopaedics), FRGUHS (Arthroplasty), and Fellowship in Spine Surgery.\n\n🔬 Research & Publications\nDr. Karthik has an active academic portfolio with numerous published studies and ongoing research. He co-authored a study on lumbar diseases treated with single-level instrumented posterior lumbar interbody fusion and published research on Covid-19 infection in AVN patients admitted for THR. His case report on heterotopic ossification following total knee replacement and study on management of proximal tibial shaft stress fracture with grade 4 osteoarthritis knee have been well-received in orthopedic circles. Dr. Karthik has presented papers and posters at KOACON, IOACON, and TOSACON conferences. He currently has research papers on complex primary total knee replacement and severe valgus deformity cases under review.\n\n🏆 Certifications & Awards\nDr. Karthik has been selected by the Karnataka Orthopedic Association for an Inland Fellowship in Spine Surgery at Bhagwan Mahaveer Jain Hospital. He holds a Diploma in Football Medicine, Basic Cardiac Life Support (BCLS), Advanced Cardiac Life Support (ACLS), and has completed the Basic Course in Biomedical Research. He is an active member of the Indian Medical Association (IMA), Karnataka Orthopedic Association (KOA), and Bangalore Orthopedic Society (BOS). Dr. Karthik combines exceptional surgical skill with rigorous academic standards, bringing evidence-based, compassionate care to every patient.',
    education: ['MBBS', 'MS (Orthopaedics)', 'DNB (Orthopaedics)', 'FRGUHS (Arthroplasty)', 'Fellowship in Spine Surgery'],
    services: ['Trauma & fracture management', 'Spine surgery & back pain treatment', 'Joint replacement & arthroplasty', 'Arthritis & joint preservation', 'Sports injury & ligament reconstruction', 'Complex trauma & deformity correction', 'Minimally invasive spine surgery', 'Revision joint replacement surgery'],
    languages: ['English', 'Kannada', 'Hindi', 'Telugu'],
    consultation: '₹400',
    approach: "Pain and injury can be frustrating—especially when they keep you from doing the things you love. Dr. Karthik M S understands that behind every orthopedic condition is a person whose daily life has been affected. Whether it's a spinal issue making it hard to sit through the workday, joint pain keeping you from your favourite activities, or a sports injury sidelining you from the game, he takes the time to understand how your condition affects you personally. His approach combines thorough diagnosis with practical treatment plans that prioritize non-surgical solutions first, reserving surgery for when it truly offers the best outcome.",
    conditions: [
      { title: 'Spine & Back Pain', description: "Back pain is one of the most common reasons people miss work. Whether it's a dull ache or sharp, shooting pain, Dr. Karthik M S performs a thorough evaluation to diagnose the root cause—which could range from muscle strain and poor posture to disc issues or spinal conditions. With his Fellowship in Spine Surgery, he offers advanced management for conditions like disc herniation, spinal stenosis, and degenerative spine disease." },
      { title: 'Arthritis & Joint Preservation', description: "Arthritis doesn't have to mean a life of pain. Dr. Karthik M S helps patients manage osteoarthritis and rheumatoid arthritis with a combination of medications, joint protection strategies, and therapeutic exercises. When conservative options are exhausted, he offers joint replacement (arthroplasty) with advanced techniques to restore mobility and quality of life." },
      { title: 'Fractures & Trauma', description: "Accidents happen, and when they do, you need expert orthopedic care. Dr. Karthik M S provides comprehensive fracture management—from initial assessment and reduction (realigning the bone) to casting, splinting, and complex trauma surgery. He monitors healing progress closely and provides rehabilitation guidance to restore full function." },
      { title: 'Sports Injuries & Ligament Reconstruction', description: "Whether you're a weekend warrior or a competitive athlete, sports injuries need proper care to heal correctly and prevent recurrence. Dr. Karthik M S treats sprains, strains, ligament injuries (including ACL/PCL tears), tendonitis, and stress fractures with evidence-based protocols and surgical reconstruction when needed." },
      { title: 'Joint Replacement (Arthroplasty)', description: "For patients with advanced joint damage from arthritis or injury, Dr. Karthik M S offers expert joint replacement surgery including total knee replacement (TKR) and total hip replacement (THR). With his FRGUHS in Arthroplasty and published research on complex cases, he delivers exceptional outcomes for even the most challenging joint replacement scenarios." },
    ],
    whatToExpect: [
      'A thorough evaluation starting with a detailed discussion about your pain, injury history, and how it affects your daily activities and mobility.',
      'A focused physical examination to assess range of motion, strength, tenderness, and functional limitations in the affected area.',
      'Clear diagnostic imaging discussion—if X-rays, MRI, or CT scans are needed, Dr. Karthik M S explains what he is looking for and what the results mean in simple terms.',
      'Treatment options presented from least to most invasive, so you understand the full spectrum of choices before making a decision.',
      'A personalized recovery plan with specific exercises, activity modifications, and follow-up milestones to track your progress.',
    ],
    faq: [
      { q: 'Will I need surgery for my orthopedic condition?', a: "Not necessarily. Dr. Karthik M S believes in conservative management first. Many conditions including back pain, arthritis, and even some fractures can be managed effectively with medications, physiotherapy, and lifestyle modifications. Surgery is only recommended when non-surgical options have been exhausted or when the condition clearly requires surgical intervention for the best outcome." },
      { q: 'How long does it take to recover from a fracture?', a: 'Recovery time depends on the type and location of the fracture, your age, and overall health. Most fractures take 6–8 weeks to heal sufficiently for cast removal, but full recovery and return to normal activities may take 3–6 months. Dr. Karthik M S provides a personalized recovery timeline during your consultation.' },
      { q: 'What is joint replacement surgery and when is it needed?', a: "Joint replacement (arthroplasty) is a surgical procedure where damaged joint surfaces are replaced with artificial implants. It is typically recommended when advanced arthritis or joint damage causes severe pain and disability that hasn't responded to non-surgical treatments. Dr. Karthik M S specializes in knee and hip replacements using modern techniques for faster recovery." },
      { q: "When should I see an orthopedic doctor for back pain?", a: 'Most back pain resolves with rest and basic care within a few weeks. However, you should see an orthopedic specialist if the pain persists beyond 2–3 weeks, is severe or worsening, radiates down your leg, or is accompanied by numbness, tingling, or weakness in your legs.' },
    ],
  },
  {
    name: 'Dr. Manvanthar M',
    slug: 'dr-manvanthar',
    specialization: 'Pediatrician and Intensive Care Specialist',
    experience: '8 Years',
    phone: '+91 9901528204',
    color: 'from-warm-500 to-warm-700',
    bgColor: 'from-warm-50 to-warm-100',
    image: '/images/doctor-manvanthar.webp',
    bio: 'Dr. Manvanthar M is a dedicated Pediatrician and Intensive Care Specialist, serving young patients at DEETYA Multispeciality Clinic. His practice encompasses both general pediatric care and the management of critical conditions, ensuring comprehensive medical attention for children. His academic background includes an MBBS from SSIMS Davanagere, followed by a Doctor of Medicine (MD) in Pediatrics from DY Patil Medical College, Pune. To further specialize in critical care, he completed a Pediatric Critical Care Fellowship (IDPCCM) at Narayana Hrudayalaya, Bengaluru. This extensive and specialized training equips him to provide skilled and thorough medical care to his pediatric patients, establishing him as a trusted healthcare provider within the community from the past 4 years.',
    education: ['MBBS', 'MD in Pediatrics'],
    services: ['Newborn & neonatal care', 'Childhood vaccination programs', 'Growth & development monitoring', 'Pediatric illness management', 'Nutritional counseling', 'Adolescent health services'],
    languages: ['English', 'Kannada', 'Hindi'],
    consultation: '₹350',
    approach: "When your child is unwell, the worry can be overwhelming. Dr. Manvanthar M understands that treating a child means caring for the whole family. He believes that the best pediatric care combines medical expertise with a warm, reassuring bedside manner that puts both children and their parents at ease. Instead of rushing through appointments, he takes time to playfully engage with young patients, listen patiently to parents' concerns, and explain conditions and treatments in a way that's easy to understand. His goal is to build lasting relationships with families, guiding children through every stage of healthy growth and development.",
    conditions: [
      { title: 'Childhood Fevers & Infections', description: "Fevers in children can be frightening, but they're often the body's natural way of fighting infection. Dr. Manvanthar M carefully evaluates your child's symptoms to determine whether the cause is viral, bacterial, or something else. He provides clear guidance on fever management, when to use medication, and what signs to watch for that warrant immediate attention." },
      { title: 'Vaccination & Immunization', description: "Vaccines are one of the most important steps in protecting your child's health. Dr. Manvanthar M provides comprehensive childhood vaccination programs following the recommended immunization schedule. He takes time to explain each vaccine, its benefits, and potential side effects, ensuring parents feel confident in their decision to vaccinate." },
      { title: 'Growth & Development Monitoring', description: "Every child grows at their own pace, but tracking development helps identify potential concerns early. Dr. Manvanthar M monitors your child's physical growth, motor skills, speech development, and social-emotional milestones at each visit. He provides personalized guidance on nutrition, sleep, and activities appropriate for each developmental stage." },
      { title: 'Respiratory & Allergy Care', description: "From croup and bronchitis to asthma and seasonal allergies, respiratory conditions are among the most common pediatric concerns. Dr. Manvanthar M provides thorough evaluation and treatment for breathing difficulties, persistent coughs, and allergic reactions. He works with families to identify triggers and develop effective management plans." },
      { title: 'Nutritional Counseling & Healthy Habits', description: "Good nutrition is the foundation of a child's health. Dr. Manvanthar M offers practical, age-appropriate nutritional guidance for everything from introducing solid foods to managing picky eating. He helps families establish healthy eating habits early, addressing concerns like growth faltering, obesity, and dietary deficiencies." },
    ],
    whatToExpect: [
      'A warm, child-friendly environment designed to make your little one feel safe and comfortable from the moment they walk in.',
      'A thorough consultation where Dr. Manvanthar M listens carefully to your concerns as a parent and observes your child\'s behavior and responsiveness.',
      'Gentle examinations performed with patience and care—Dr. Manvanthar M knows how to work with children who may be scared or uncooperative.',
      'Clear explanations of your child\'s condition, treatment options, and what you can do at home to support their recovery.',
      'Detailed growth and development tracking with practical advice tailored to your child\'s specific age and stage.',
    ],
    faq: [
      { q: 'How often should my child see a pediatrician for checkups?', a: "For healthy children, well-child visits are recommended at regular intervals: shortly after birth, at 2 weeks, 2 months, 4 months, 6 months, 9 months, 12 months, 15 months, 18 months, and then annually from age 2 onward. These visits track growth, development, and ensure vaccinations are up to date." },
      { q: "When should I bring my child in for a fever?", a: "You should bring your child to see Dr. Manvanthar M if: the fever is 100.4°F (38°C) or higher in an infant under 3 months, the fever lasts more than 3 days, your child seems unusually lethargic or irritable, or if the fever is accompanied by other concerning symptoms like rash, difficulty breathing, or persistent vomiting." },
      { q: 'Are vaccines safe for my child?', a: "Yes, vaccines are thoroughly tested for safety and effectiveness before they are approved for use. Dr. Manvanthar M follows the standard immunization schedule recommended by pediatric health authorities. He is happy to discuss any vaccine-related concerns you may have and provide evidence-based information to help you make informed decisions." },
      { q: "My child is a picky eater. Should I be worried?", a: "Picky eating is very common in childhood and often a normal phase of development. However, if your child is consistently eating a very limited diet, not gaining weight appropriately, or showing signs of nutritional deficiency, Dr. Manvanthar M can help. He offers practical strategies to expand your child's diet and address underlying concerns." },
    ],
  },
  {
    name: 'Dr. Manjunath L',
    slug: 'dr-manjunath-l',
    specialization: 'Consultant – Paediatric Critical Care',
    experience: '10+ Years',
    phone: '+91 80504 54140',
    color: 'from-warm-500 to-warm-700',
    bgColor: 'from-warm-50 to-warm-100',
    image: '/images/doctor-manjunath.webp',
    bio: 'Dr. Manjunath L is a highly experienced Consultant in Paediatric Critical Care with over 10 years of expertise in managing critically ill children. He holds an MBBS, DCH (Diploma in Child Health), DNB (Paediatrics), and FIPCCM (Fellowship in Paediatric Critical Care Medicine).\n\n🔬 Research & Publications\nDr. Manjunath presented a scientific poster titled \"Erythema Nodosum – An Early but Rare Manifestation of Childhood Tuberculosis\" at the 7th Karnataka State Conference of the IAP Infectious Disease Karnataka Chapter (2018), Bengaluru. He is actively involved in academic training and evidence-based practice in Paediatrics and Paediatric Critical Care Medicine.\n\n🏆 Certifications & Awards\nDr. Manjunath holds a Fellowship in Paediatric Critical Care Medicine (FIPCCM). He is certified in Advanced Neonatal Resuscitation (NRP), IAP-Certified Advanced Paediatric Resuscitation, and Paediatric Point-of-Care Ultrasonography (POCUS). He has advanced training in ECMO (Extracorporeal Membrane Oxygenation) by the ECMO Society of India, Continuous Renal Replacement Therapy (CRRT), and Advanced Ventilation Techniques. He holds certifications in Basic Life Support (BLS), Paediatric Advanced Life Support (PALS), and Neonatal Resuscitation Program (NRP).\n\n🤝 Professional Memberships\nDr. Manjunath is a Life Member of the Indian Academy of Paediatrics (IAP) and is registered with the Indian Medical Register and Karnataka Medical Council (KMC).',
    education: ['MBBS', 'DCH (Diploma in Child Health)', 'DNB (Paediatrics)', 'FIPCCM (Fellowship in Paediatric Critical Care Medicine)'],
    services: ['Pediatric critical care management', 'Neonatal & pediatric resuscitation', 'Advanced ventilatory support', 'ECMO & CRRT for children', 'Pediatric emergency care', 'Post-operative pediatric intensive care', 'Pediatric point-of-care ultrasonography', 'Advanced life support & resuscitation'],
    languages: ['English', 'Kannada', 'Hindi'],
    consultation: '₹400',
    approach: "When a child is critically ill, every moment counts—and every decision matters. Dr. Manjunath L understands that parents need more than just medical expertise; they need clarity, compassion, and constant reassurance. His approach to pediatric critical care combines advanced evidence-based medicine with clear, empathetic communication. He takes the time to explain complex medical situations in simple terms, ensuring families understand their child's condition and are actively involved in care decisions. Whether managing a neonatal emergency, providing advanced ventilatory support, or coordinating multi-specialty care, Dr. Manjunath brings calm competence and unwavering dedication to every young patient he treats.",
    conditions: [
      { title: 'Pediatric Respiratory Emergencies', description: "Severe respiratory distress, pneumonia, bronchiolitis, and asthma exacerbations can quickly become life-threatening in children. Dr. Manjunath L provides expert management including advanced ventilatory support, oxygen therapy, and close monitoring in the intensive care setting to ensure your child's breathing is stabilized." },
      { title: 'Neonatal Critical Care', description: "Newborns requiring intensive care—whether due to prematurity, birth complications, or congenital conditions—receive specialized attention from Dr. Manjunath L. With advanced training in neonatal resuscitation (NRP) and pediatric critical care, he ensures the most vulnerable patients get the highest level of medical support." },
      { title: 'Pediatric Sepsis & Infections', description: "Serious infections such as sepsis, meningitis, and severe pneumonia require prompt recognition and aggressive treatment. Dr. Manjunath L uses evidence-based protocols for early detection, appropriate antibiotic therapy, and intensive monitoring to achieve the best possible outcomes." },
      { title: 'Multi-Organ Dysfunction & ECMO Support', description: "For children with severe heart or lung failure, Dr. Manjunath L offers advanced life support including ECMO (Extracorporeal Membrane Oxygenation) and CRRT (Continuous Renal Replacement Therapy). His specialized training in these advanced modalities provides a lifeline for the most critically ill children." },
      { title: 'Post-Surgical Pediatric Intensive Care', description: "Children recovering from complex surgeries require meticulous monitoring and specialized critical care. Dr. Manjunath L provides comprehensive post-operative intensive care management, ensuring smooth recovery and early detection of any complications." },
    ],
    whatToExpect: [
      'Immediate and thorough evaluation of your child\'s condition with prompt initiation of necessary life-support measures if required.',
      'Clear, transparent communication about your child\'s diagnosis, treatment plan, and progress—updated regularly so you are never left wondering.',
      'A calm, compassionate approach—Dr. Manjunath L takes time to answer your questions and address your concerns, no matter how small.',
      'Coordinated multi-specialty care if needed, working closely with other pediatric specialists to ensure comprehensive treatment.',
      'Detailed discharge planning and follow-up guidance to support your child\'s continued recovery at home.',
    ],
    faq: [
      { q: 'When should I take my child to a pediatric critical care specialist?', a: "If your child is experiencing severe breathing difficulty, altered consciousness, persistent high fever with lethargy, seizures, or any life-threatening condition, immediate evaluation by a pediatric critical care specialist is essential. Dr. Manjunath L is available for such emergencies at DEETYA Clinic." },
      { q: 'Does Dr. Manjunath L treat routine pediatric conditions too?', a: "While Dr. Manjunath L specializes in pediatric critical care, he also provides consultations for complex pediatric cases. For routine well-child visits and vaccinations, our pediatric team including Dr. Manvanthar M is available." },
      { q: 'What advanced life-support technologies are available?', a: "Dr. Manjunath L is trained in ECMO (heart-lung bypass), CRRT (kidney support), advanced ventilation techniques, and point-of-care ultrasonography (POCUS). These advanced modalities are available for children who need intensive care support." },
      { q: 'How do I schedule a consultation with Dr. Manjunath L?', a: 'You can book an appointment by calling us at +91 80504 54140, sending a WhatsApp message, or visiting the clinic directly. For emergencies, please call ahead so our team can prepare.' },
    ],
  },
  {
    name: 'Dr. Shweta Gadge',
    slug: 'dr-shweta',
    specialization: 'Consultant ENT Surgery',
    experience: '10+ Years',
    phone: '+91 9665760018',
    color: 'from-indigo-500 to-indigo-700',
    bgColor: 'from-indigo-50 to-indigo-100',
    image: '/images/doctor-shweta.webp',
    bio: 'Dr. Shweta Gadge is a highly experienced ENT Specialist in Bangalore with over 10 years of expertise in diagnosing and treating complex disorders affecting the ear, nose, throat, voice box, and head-neck region. She completed her MBBS and MS in ENT from a government institute, followed by thorough clinical training that has given her firm competence in both routine ENT problems and high-precision surgical procedures.\n\nDr. Shweta Gadge is skilled in endoscopic sinus surgery, micro ear surgeries including myringoplasty and tympanoplasty, cochlear implants, thyroid surgery, correction of deviated nasal septum, and minimally invasive head and neck procedures. She is also a renowned allergy expert who accurately diagnoses and manages chronic, complex allergic conditions. Her expertise extends to nasal surgery (including DNS correction), complex ear surgeries, endoscopic surgery, and sutureless surgery—applying contemporary, evidence-based techniques to deliver safe, successful outcomes with minimal discomfort and faster recovery. Her empathetic communication, patient education, and precision-driven treatment philosophy make her one of the preferred choices for those seeking effective and safe ENT care. She treats patients of all ages, including children for ear infections, adenoids, tonsils, and allergies.',
    education: ['MBBS', 'MS - ENT'],
    services: ['Ear infection & hearing loss treatment', 'Endoscopic sinus surgery', 'Nasal allergy & sinusitis management', 'Micro ear surgeries (Myringoplasty, Tympanoplasty)', 'Cochlear implant evaluation & surgery', 'Tonsil & throat surgery', 'Voice & swallowing disorder management', 'Thyroid & neck surgery', 'Deviated nasal septum (DNS) correction', 'Nasal polyps & chronic congestion treatment', 'Allergy testing & long-term management', 'Minimally invasive & sutureless ENT surgery'],
    languages: ['English', 'Marati', 'Hindi', 'Kannada'],
    consultation: '₹350',
    approach: "ENT issues can be surprisingly disruptive—congested sinuses that make it hard to breathe, ear infections that cause sleepless nights, or a persistent sore throat that makes swallowing painful. Dr. Shweta Gadge understands that these seemingly small problems can have a big impact on your daily life and overall well-being. She believes in thorough, accurate diagnosis first—using advanced ENT endoscopy units and high-resolution imaging to see exactly what's going on—so that treatment is targeted and effective. Her approach combines medical expertise with compassionate communication, ensuring patients understand their condition and feel confident in their treatment plan. She applies contemporary, minimally invasive techniques including endoscopic and sutureless surgery to deliver safe, successful outcomes with minimal discomfort and faster recovery.",
    conditions: [
      { title: 'Ear Disorders & Hearing Loss', description: "Ear infections, ear pain, and hearing loss can significantly impact your quality of life. Dr. Shweta Gadge provides thorough ear examinations to diagnose and treat outer ear infections (swimmer's ear), middle ear infections (otitis media), and chronic ear issues. She offers advanced micro ear surgeries including myringoplasty and tympanoplasty, as well as cochlear implant surgery for severe to profound hearing loss. She also manages tinnitus (ringing in the ears) and balance-related problems." },
      { title: 'Nasal Allergies & Sinusitis', description: "Chronic sinus congestion, facial pressure, post-nasal drip, and nasal blockages can make you feel miserable for weeks. Dr. Shweta Gadge evaluates whether your symptoms are due to sinus infections, allergic rhinitis, or structural issues like a deviated nasal septum. She offers comprehensive allergy testing and long-term allergy management, endoscopic sinus surgery for chronic sinusitis, septoplasty for deviated septum correction, and treatment of nasal polyps and chronic nasal congestion." },
      { title: 'Throat & Voice Disorders', description: "Recurrent sore throats, tonsillitis, and voice disorders can disrupt work, school, and daily life. Dr. Shweta Gadge evaluates the severity and frequency of throat infections to determine the best treatment approach—from medications and symptomatic relief to tonsillectomy for recurrent cases. She offers voice therapy support for professional voice users, treatment for vocal cord nodules, lesions, and hoarseness, and evaluation of swallowing disorders and acid reflux-related throat conditions." },
      { title: 'Head & Neck Conditions', description: "Thyroid swellings, neck masses, cysts, and salivary gland issues require expert evaluation and management. Dr. Shweta Gadge provides comprehensive assessment of thyroid disorders, treatment for neck masses and benign tumors, salivary gland infection and stone management, and minimally invasive head and neck surgery." },
      { title: 'Pediatric ENT Care', description: "Children are especially prone to ENT issues like ear infections, adenoids, tonsillitis, and allergies. Dr. Shweta Gadge provides gentle, child-friendly care that puts young patients at ease. She offers comprehensive evaluation and treatment for common childhood ENT conditions including ear infections, adenoids, tonsils, and allergies. She also treats sleep-disordered breathing and snoring in children." },
    ],
    whatToExpect: [
      'A thorough discussion of your symptoms—how long they have been present, what makes them better or worse, and how they affect your daily life.',
      'A careful ENT examination using advanced diagnostic equipment, including nasal endoscopy, otoscopy, and throat assessment with high-resolution imaging as needed.',
      'Clear explanations of findings—if Dr. Shweta Gadge sees something on examination, she explains what it means using diagrams or models when helpful.',
      'Treatment options presented from least to most invasive—starting with medical management and progressing to surgical solutions only when necessary.',
      'Practical home care advice including nasal irrigation techniques, voice rest guidance, allergy management strategies, and environmental modifications to support your recovery.',
    ],
    faq: [
      { q: 'Is Dr. Shweta Gadge one of the best ENT Specialists in Bangalore?', a: 'Yes, Dr. Shweta Gadge is widely recognized for her exceptional surgical skills, high success rates, and comprehensive ENT care. She is one of the preferred ENT specialists in Bangalore.' },
      { q: 'Does she treat pediatric ENT problems?', a: 'Yes, she treats children of all ages for ear infections, adenoids, tonsils, allergies, and more. She provides gentle, child-friendly care.' },
      { q: 'Must I have an appointment to visit?', a: 'Walk-ins are accepted, but appointments ensure quicker consultations with minimal waiting time.' },
      { q: 'Does she perform sinus surgery?', a: 'Yes, she specializes in Endoscopic Sinus Surgery for chronic sinusitis and also performs septoplasty for deviated nasal septum correction. These are minimally invasive procedures with faster recovery.' },
      { q: 'Can she help with hearing loss?', a: 'Yes, she offers comprehensive hearing evaluations, hearing aid fittings, and cochlear implant surgery for severe to profound hearing loss.' },
      { q: 'Does she treat snoring or sleep apnea?', a: 'Yes, she provides evaluation and treatment options for snoring and sleep-disordered breathing.' },
      { q: 'Is allergy testing and management available?', a: 'Yes, advanced allergy evaluation and long-term allergy management are available at the clinic.' },
      { q: 'Does she perform thyroid or neck surgeries?', a: 'Yes, she performs thyroid surgery, salivary gland procedures, and neck mass excisions using minimally invasive techniques.' },
      { q: 'Are minimally invasive ENT surgeries available?', a: 'Yes, most procedures are performed using endoscopic or microsurgical techniques for minimal discomfort and faster recovery.' },
      { q: 'How do I schedule an appointment?', a: 'You can schedule an appointment by calling +91 9665760018, sending a WhatsApp message, or visiting the clinic directly at #23 60 Feet Main Road, Avalahali - BDA Layout Road, Srinivas Reddy Layout, Avalahalli, Anjanapura Post, JP Nagar 9th Phase, Bangalore - 560108.' },
    ],
  },
];
