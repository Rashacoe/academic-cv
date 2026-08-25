import type { SupervisionRecord } from '../types/cv';

/**
 * ============================================================================
 * DOCTORAL SUPERVISION & ALUMNI PLACEMENTS
 * ============================================================================
 * Features graduated Ph.D. advisees, postdoctoral researchers, and their career placements.
 */
export const supervisionRecords: SupervisionRecord[] = [
  {
    id: 'phd-1',
    name: 'Dr. Faisal Al-Hussaini',
    role: 'PhD',
    year: '2024',
    dissertation: {
      en: 'Algorithmic Delegation and Decision Latency in High-Frequency FinTech Platforms',
      ar: 'التفويض الخوارزمي وزمن الاستجابة للقرار في منصات التقنية المالية عالية التردد',
    },
    placement: {
      en: 'Assistant Professor (Tenure-Track), King Saud University',
      ar: 'أستاذ مساعد (مسار التثبيت)، جامعة الملك سعود',
    },
  },
  {
    id: 'phd-2',
    name: 'Dr. Sarah Jenkins',
    role: 'PhD',
    year: '2023',
    dissertation: {
      en: 'Generative AI Prompt Architectures and Knowledge Worker Productivity in Professional Services',
      ar: 'هندسة أوامر الذكاء الاصطناعي التوليدي وإنتاجية العاملين في الخدمات المهنية',
    },
    placement: {
      en: 'Research Staff Member, Microsoft Research AI & Work Futures Lab',
      ar: 'باحثة علمية، مختبر مايكروسوفت للأبحاث والذكاء الاصطناعي',
    },
  },
  {
    id: 'phd-3',
    name: 'Dr. Zaid Al-Otaibi',
    role: 'PhD',
    year: '2021',
    dissertation: {
      en: 'Critical Realist Mechanisms in Clinical Telehealth Adoption across Multi-Hospital Systems',
      ar: 'الآليات الواقعية النقدية لتبني الرعاية الصحية عن بعد في منظومات المستشفيات',
    },
    placement: {
      en: 'Assistant Professor, College of Medicine & Health Informatics, KAU',
      ar: 'أستاذ مساعد، كلية الطب والمعلوماتية الصحية، جامعة الملك عبدالعزيز',
    },
  },
  {
    id: 'phd-4',
    name: 'Dr. Amira Mansour',
    role: 'PhD',
    year: '2019',
    dissertation: {
      en: 'API Governance and Modular Innovation Dynamics in Cloud Marketplace Ecosystems',
      ar: 'حوكمة واجهات البرمجة وديناميكيات الابتكار المعياري في أسواق الحوسبة السحابية',
    },
    placement: {
      en: 'Senior Principal Economist & Platform Strategist, OECD Digital Economy Directorate',
      ar: 'كبير المستشارين الاقتصاديين واستراتيجي المنصات، منظمة التعاون الاقتصادي والتنمية (OECD)',
    },
  },
  {
    id: 'phd-5',
    name: 'Dr. Hisham Al-Ghamdi',
    role: 'Postdoc',
    year: '2022 – 2024',
    dissertation: {
      en: 'Postdoctoral Research in Human-Algorithm Collaborative Design',
      ar: 'أبحاث ما بعد الدكتوراه في التصميم التعاوني بين الإنسان والخوارزميات',
    },
    placement: {
      en: 'Director of AI Strategy & Innovation, National Center for Artificial Intelligence (SDAIA)',
      ar: 'مدير استراتيجية الذكاء الاصطناعي، الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)',
    },
  },
];
