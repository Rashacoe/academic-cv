import type { ResearchGrant } from '../types/cv';

/**
 * ============================================================================
 * RESEARCH GRANTS & FUNDED PROJECTS
 * ============================================================================
 * Includes competitive grants, PI/Co-PI roles, award amounts, and consortium details.
 */
export const researchGrants: ResearchGrant[] = [
  {
    id: 'grant-nsf-ai',
    title: {
      en: 'Socio-Technical Governance of Foundation Models in Critical Infrastructure & Energy Sectors',
      ar: 'الحوكمة الاجتماعية-التقنية للنماذج التأسيسية في قطاعات البنية التحتية الحيوية والطاقة',
    },
    agency: {
      en: 'National Research & Development Foundation / Dep. of Energy',
      ar: 'هيئة البحث والتطوير والابتكار / وزارة الطاقة',
    },
    grantNumber: 'NRDF-AI-2024-8842',
    role: {
      en: 'Lead Principal Investigator (PI)',
      ar: 'الباحث الرئيسي (Lead PI)',
    },
    amount: '$1,450,000 USD',
    period: '2024 – 2027',
    status: 'active',
    description: {
      en: 'A multi-year consortium grant developing safety guardrails, continuous monitoring mechanisms, and audit protocols for LLMs and deep neural networks deployed in industrial enterprise grids.',
      ar: 'مشروع بحثي وطني استراتيجي يهدف إلى تطوير أطر الأمان وضوابط التدقيق المستمر لنماذج الذكاء الاصطناعي في الشبكات الصناعية والأنظمة الحيوية.',
    },
    collaborators: ['KFUPM', 'Saudi Aramco Digital Hub', 'MIT CISR'],
  },
  {
    id: 'grant-horizon-platform',
    title: {
      en: 'Cross-Border Digital Health Interoperability and Behavioral Analytics Ecosystems',
      ar: 'منظومة التوافق التشغيلي والتحليلات السلوكية عبر الحدود في الصحة الرقمية',
    },
    agency: {
      en: 'International Collaborative Research Program & WHO Health Tech',
      ar: 'برنامج الأبحاث التعاونية الدولية ومنظمة الصحة العالمية',
    },
    grantNumber: 'ICRP-HT-70921',
    role: {
      en: 'Co-Principal Investigator (Co-PI)',
      ar: 'باحث رئيسي مشارك (Co-PI)',
    },
    amount: '€920,000 EUR (~$1,000,000 USD)',
    period: '2022 – 2025',
    status: 'active',
    description: {
      en: 'Designing scalable API interoperability architectures and privacy-preserving federated analytics across national electronic health record networks.',
      ar: 'تصميم هيكلية واجهات برمجة معيارية للربط بين السجلات الطبية الوطنية مع الحفاظ على خصوصية بيانات المرضى عبر التعلم الموزع.',
    },
    collaborators: ['Alliance Manchester Business School', 'Charité Berlin', 'King Faisal Specialist Hospital'],
  },
  {
    id: 'grant-fintech-resilience',
    title: {
      en: 'Resilience and Fault-Tolerance in Decentralized Enterprise Payment Architectures',
      ar: 'المرونة ومقاومة الأعطال في البنى التحتية اللامركزية لمدفوعات المؤسسات',
    },
    agency: {
      en: 'Central Bank FinTech Innovation Fund',
      ar: 'صندوق البنك المركزي لدعم ابتكارات التقنية المالية',
    },
    grantNumber: 'CB-FIN-2021-04',
    role: {
      en: 'Lead Principal Investigator (PI)',
      ar: 'الباحث الرئيسي (Lead PI)',
    },
    amount: '$820,000 USD',
    period: '2021 – 2024',
    status: 'completed',
    description: {
      en: 'Empirical and algorithmic modeling of throughput stress testing and fault tolerance in high-volume enterprise distributed settlement networks.',
      ar: 'نمذجة تجريبية وخوارزمية لاختبارات التحمل في شبكات التسوية المالية الموزعة عالية الكثافة للمؤسسات.',
    },
  },
  {
    id: 'grant-behavioral-sec',
    title: {
      en: 'NeuroIS Investigation of Cyber-Security Decision Fatigue and Adaptive Mitigation',
      ar: 'أبحاث نظم المعلومات العصبية في إجهاد اتخاذ القرار للأمن السيبراني والحلول التكيفية',
    },
    agency: {
      en: 'National Cybersecurity Research Center',
      ar: 'المركز الوطني لأبحاث الأمن السيبراني',
    },
    grantNumber: 'NCSC-IS-2019-31',
    role: {
      en: 'Principal Investigator (PI)',
      ar: 'الباحث الرئيسي (PI)',
    },
    amount: '$560,000 USD',
    period: '2019 – 2022',
    status: 'completed',
    description: {
      en: 'Biometric laboratory and cognitive testing establishing behavioral nudging protocols that mitigate employee security bypasses.',
      ar: 'تجارب معملية بيومترية ومعرفية لوضع بروتوكولات الوخز السلوكي للحد من تجاوز الموظفين للسياسات الأمنية.',
    },
  },
];
