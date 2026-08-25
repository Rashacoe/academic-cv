import type { EducationRecord } from '../types/cv';

/**
 * ============================================================================
 * EDUCATION & ACADEMIC QUALIFICATIONS
 * ============================================================================
 */
export const educationRecords: EducationRecord[] = [
  {
    id: 'edu-phd',
    degree: {
      en: 'Ph.D. in Information Systems',
      ar: 'دكتوراه في نظم المعلومات',
    },
    field: {
      en: 'Information Systems & Semantic Technologies',
      ar: 'نظم المعلومات والتقنيات الدلالية',
    },
    institution: {
      en: 'Cairo University',
      ar: 'جامعة القاهرة',
    },
    location: {
      en: 'Giza / Cairo, Egypt',
      ar: 'الجيزة / القاهرة، جمهورية مصر العربية',
    },
    period: '2008 – 2014',
    notes: {
      en: 'Doctoral research focused on Information Systems, semantic processing, and computational intelligence.',
      ar: 'أطروحة الدكتوراه في نظم المعلومات والمعالجة الدلالية والذكاء الحسابي.',
    },
  },
  {
    id: 'edu-msc',
    degree: {
      en: 'M.Sc. in Computer Science',
      ar: 'ماجستير في علوم الحاسوب',
    },
    field: {
      en: 'Computer Science & Software Engineering',
      ar: 'علوم الحاسوب وهندسة البرمجيات',
    },
    institution: {
      en: 'Alexandria University',
      ar: 'جامعة الإسكندرية',
    },
    location: {
      en: 'Alexandria, Egypt',
      ar: 'الإسكندرية، جمهورية مصر العربية',
    },
    period: '2004 – 2007',
    notes: {
      en: 'Master of Science coursework and advanced research in computer science algorithms.',
      ar: 'دراسات الماجستير والأبحاث المتقدمة في خوارزميات علوم الحاسوب.',
    },
  },
  {
    id: 'edu-bsc',
    degree: {
      en: 'B.Sc. in Computer Science',
      ar: 'بكالوريوس في علوم الحاسوب',
    },
    field: {
      en: 'Computer Science',
      ar: 'علوم الحاسوب',
    },
    institution: {
      en: 'Hadhramout University',
      ar: 'جامعة حضرموت',
    },
    location: {
      en: 'Mukalla, Yemen',
      ar: 'المكلا، الجمهورية اليمنية',
    },
    period: '1996 – 2000',
    notes: {
      en: 'Undergraduate foundation with distinction in core computing principles.',
      ar: 'دراسة البكالوريوس بتميز في أسس ومبادئ علوم الحاسوب.',
    },
  },
];
