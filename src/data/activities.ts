import type {
  ConferenceParticipation,
  WorkshopDelivered,
  ProfessionalCertification,
} from '../types/cv';

/**
 * ============================================================================
 * 1. WORKSHOPS & LECTURES DELIVERED
 * ============================================================================
 * Source: CV Eng.docx
 */
export const workshopsDelivered: WorkshopDelivered[] = [
  {
    id: 'ws-exam-prep-2026',
    title: {
      en: 'Preparing Exams, Measuring Learning Outcomes, and Course Reporting',
      ar: 'إعداد الاختبارات وقياس مخرجات التعلم وإعداد تقارير المقررات',
    },
    venue: {
      en: 'Zoom Workshop for Al-Arab University',
      ar: 'ورشة عمل عبر الزوم لجامعة العرب',
    },
    date: 'January 20 & 27, 2026',
    type: {
      en: 'Workshop',
      ar: 'ورشة عمل',
    },
  },
  {
    id: 'ws-effective-exams-2025',
    title: {
      en: 'Constructing Effective Exams According to the Table of Specifications',
      ar: 'بناء الاختبارات الفعالة وفق جدول المواصفات',
    },
    venue: {
      en: 'Al-Arab University Summer Course',
      ar: 'الدورة الصيفية بجامعة العرب',
    },
    date: 'August 2025',
    type: {
      en: 'Lecture',
      ar: 'محاضرة',
    },
  },
  {
    id: 'ws-ai-quality-2025',
    title: {
      en: 'The Role of Artificial Intelligence in Enhancing Quality: Opportunities and Challenges',
      ar: 'دور الذكاء الاصطناعي في تعزيز الجودة: الفرص والتحديات',
    },
    venue: {
      en: 'Quality Week at Al-Ahgaff University',
      ar: 'أسبوع الجودة بجامعة الأحقاف',
    },
    date: 'November 2025',
    type: {
      en: 'Lecture',
      ar: 'محاضرة',
    },
  },
  {
    id: 'ws-student-role-2024',
    title: {
      en: "The Student's Role in Achieving Academic Program Quality",
      ar: 'دور الطالب في تحقيق جودة البرامج الأكاديمية',
    },
    venue: {
      en: 'Quality Week at Al-Ahgaff University',
      ar: 'أسبوع الجودة بجامعة الأحقاف',
    },
    date: 'November 2024',
    type: {
      en: 'Lecture',
      ar: 'محاضرة',
    },
  },
];

/**
 * ============================================================================
 * 2. CERTIFICATIONS & CONTINUOUS PROFESSIONAL DEVELOPMENT
 * ============================================================================
 * Source: CV Eng.docx
 */
export const professionalCertifications: ProfessionalCertification[] = [
  {
    id: 'cert-e-trainer-2024',
    title: {
      en: 'Certified Specialized E-Trainer',
      ar: 'مدرب إلكتروني تخصصي معتمد',
    },
    issuer: {
      en: 'Arab Board for Consulting & General Training',
      ar: 'البورد العربي للاستشارات والتدريب العام',
    },
    year: '2024',
  },
  {
    id: 'cert-adv-excel-2024',
    title: {
      en: 'Advanced Excel Certificate',
      ar: 'شهادة إكسل متقدم (Advanced Excel)',
    },
    issuer: {
      en: 'Science Platform for Training & Qualification',
      ar: 'منصة علم للتدريب والتأهيل',
    },
    year: '2024',
  },
  {
    id: 'cert-external-auditor-2026',
    title: {
      en: 'External Auditor Preparation and Qualification Course',
      ar: 'دورة إعداد وتأهيل المراجعين الخارجيين',
    },
    issuer: {
      en: 'Council for Academic Accreditation and Quality Assurance of Higher Education – Yemen',
      ar: 'مجلس الاعتماد الأكاديمي وضمان جودة التعليم العالي – اليمن',
    },
    year: 'Duration: August 8–13, 2026',
  },
  {
    id: 'cert-training-series-jundi-2026',
    title: {
      en: 'Training Series by International Expert Prof. Dr. Ibrahim Al-Jundi: Academic Programs, Self-Study Reports, and Learning Outcome Measurement',
      ar: 'سلسلة دورات الخبير الدولي أ.د. إبراهيم الجندي: البرامج الأكاديمية وتقارير الدراسة الذاتية وقياس مخرجات التعلم',
    },
    year: 'July 2026',
  },
  {
    id: 'cert-abet-prep-2018',
    title: {
      en: 'Training Course: "Preparing the Faculty of Engineering for ABET Academic Accreditation"',
      ar: 'دورة تدريبية: "تهيئة كلية الهندسة للاعتماد الأكاديمي ABET"',
    },
    year: '2018',
  },
];

/**
 * ============================================================================
 * 3. CONFERENCES & SCIENTIFIC PARTICIPATION
 * ============================================================================
 * Source: CV Eng.docx
 */
export const conferenceParticipations: ConferenceParticipation[] = [
  {
    id: 'conf-icofast-2024',
    name: 'ICoFAST 2024',
    title: {
      en: '2nd IEEE International Conference on Fundamental, Applied Sciences and Technology (ICoFAST 2024)',
      ar: 'المؤتمر الدولي الثاني للتطبيقات المستقبلية والعلوم والتكنولوجيا (ICoFAST 2024)',
    },
    location: {
      en: 'Hadhramout University – Mukalla, Yemen',
      ar: 'جامعة حضرموت – المكلا، اليمن',
    },
    year: '2024',
    details: {
      en: 'Participated in the scientific activities of the international conference, held in Mukalla, Yemen, on 2–3 July 2024.',
      ar: 'المشاركة في الفعاليات والأنشطة العلمية للمؤتمر الدولي المنعقد في المكلا، اليمن، خلال الفترة 2-3 يوليو 2024م.',
    },
  },
  {
    id: 'conf-icoice-2019',
    name: 'ICOICE 2019',
    title: {
      en: 'First International Conference of Intelligent Computing and Engineering (ICOICE 2019)',
      ar: 'المؤتمر الدولي الأول للحوسبة الذكية والهندسة (ICOICE 2019)',
    },
    location: {
      en: 'Hadhramout University – Mukalla, Yemen',
      ar: 'جامعة حضرموت – المكلا، اليمن',
    },
    year: '2019',
    details: {
      en: 'Participated as a researcher and presented scientific research at the conference.',
      ar: 'المشاركة كباحث وتقديم أبحاث علمية محكمة في المؤتمر.',
    },
    presentations: {
      en: [
        '"Adapting Sequence Alignments for Text Classification" — Co-authored with Seham Bamatraf.',
        '"Clustering RDF Data Using K-Medoids" — Co-authored with Seham Bamatraf.',
      ],
      ar: [
        '"Adapting Sequence Alignments for Text Classification" — بالاشتراك مع سهام بابطراف.',
        '"Clustering RDF Data Using K-Medoids" — بالاشتراك مع سهام بابطراف.',
      ],
    },
  },
  {
    id: 'conf-infos-cairo',
    name: 'INFOS',
    title: {
      en: 'Attended 7th & 8th International Conferences on Informatics & Systems (INFOS 2010, INFOS 2012)',
      ar: 'حضور المؤتمرين الدوليين السابع والثامن للمعلوماتية والنظم (INFOS 2010, INFOS 2012)',
    },
    location: {
      en: 'Cairo University, Egypt',
      ar: 'جامعة القاهرة، مصر',
    },
    year: '2010, 2012',
    details: {
      en: 'Cairo University, Egypt.',
      ar: 'جامعة القاهرة، جمهورية مصر العربية.',
    },
  },
];
