import type { ResearchInterest } from '../types/cv';

/**
 * ============================================================================
 * RESEARCH INTERESTS & EXPERTISE DOMAINS
 * ============================================================================
 * 7 Primary Specialized Research Areas
 */
export const researchInterests: ResearchInterest[] = [
  {
    id: 'is',
    title: {
      en: 'Information Systems',
      ar: 'نظم المعلومات',
    },
    description: {
      en: 'Strategic design, modeling, enterprise architectures, and implementation of organizational information systems and decision support frameworks.',
      ar: 'التصميم الاستراتيجي والنمذجة وهيكلية النظم المؤسسية وتطبيق نظم دعم اتخاذ القرار.',
    },
    icon: 'server',
  },
  {
    id: 'data-science',
    title: {
      en: 'Data Science & Analytics',
      ar: 'علم البيانات والتحليلات',
    },
    description: {
      en: 'Exploratory data analysis, predictive modeling, statistical learning, and extracting actionable business and educational intelligence.',
      ar: 'تحليل البيانات الاستكشافي، والنمذجة التنبؤية، والتعلم الإحصائي، واستخراج الرؤى التحليلية.',
    },
    icon: 'chart-bar',
  },
  {
    id: 'software-engineering',
    title: {
      en: 'Software Engineering',
      ar: 'هندسة البرمجيات',
    },
    description: {
      en: 'Software architecture design, agile methodologies, object-oriented design patterns, quality metrics, and lifecycle process improvement.',
      ar: 'تصميم معمارية البرمجيات، والمنهجيات الرشيقة، وأنماط التصميم كائني التوجه، ومعايير جودة البرمجيات.',
    },
    icon: 'code',
  },
  {
    id: 'ai',
    title: {
      en: 'Artificial Intelligence (AI)',
      ar: 'الذكاء الاصطناعي',
    },
    description: {
      en: 'Machine learning algorithms, neural network applications, cognitive computing, and intelligent decision systems in higher education and healthcare.',
      ar: 'خوارزميات التعلم الآلي، وتطبيقات الشبكات العصبية، والنظم الذكية في التعليم العالي والصحة.',
    },
    icon: 'brain',
  },
  {
    id: 'iot',
    title: {
      en: 'Internet of Things (IoT)',
      ar: 'إنترنت الأشياء (IoT)',
    },
    description: {
      en: 'Smart embedded sensor networks, real-time telemetry systems, intelligent tracking, and connected hardware-software integrations.',
      ar: 'شبكات الحساسات الذكية المدمجة، ونظم البث الآني للبيانات، والتتبع الذكي، وتكامل العتاد والبرمجيات.',
    },
    icon: 'wifi',
  },
  {
    id: 'semantic-text',
    title: {
      en: 'Text Processing & Semantic Classification',
      ar: 'معالجة النصوص والتصنيف الدلالي',
    },
    description: {
      en: 'Natural language text processing, semantic ontologies, document indexing, categorization, and contextual information extraction.',
      ar: 'معالجة النصوص الطبيعية، والأنطولوجيا الدلالية، وفهرسة الوثائق وتصنيفها، واستخراج المعلومات السياقية.',
    },
    icon: 'document-search',
  },
  {
    id: 'database-systems',
    title: {
      en: 'Database Systems',
      ar: 'نظم قواعد البيانات',
    },
    description: {
      en: 'Relational database modeling, distributed database design, query optimization, security, and advanced transactional architectures.',
      ar: 'نمذجة قواعد البيانات العلائقية، وتصميم القواعد الموزعة، وتحسين الاستعلامات، وأمن قواعد البيانات.',
    },
    icon: 'database',
  },
];
