import type { QualityInitiative } from '../types/cv';

/**
 * ============================================================================
 * ACADEMIC QUALITY, ACCREDITATION & PROGRAM DEVELOPMENT
 * ============================================================================
 * Key institutional quality frameworks, evaluation instruments, and program
 * specifications authored or co-developed by Prof. Dr. Rasha Abdulaziz Bin-Thalab.
 */
export const qualityInitiatives: QualityInitiative[] = [
  {
    id: 'qi-guideline-learning-outcomes',
    title: {
      en: 'Guideline for Measuring and Evaluating Learning Outcomes',
      ar: 'دليل قياس وتقويم مخرجات التعلم',
    },
    organization: {
      en: 'Center for Academic Development & Quality Assurance, Hadhramout University',
      ar: 'مركز التطوير الأكاديمي وضمان الجودة، جامعة حضرموت',
    },
    year: '2025',
    category: 'guideline',
    description: {
      en: 'Comprehensive institutional reference and operational methodology for direct and indirect assessment of Course Learning Outcomes (CLOs) and Program Learning Outcomes (PLOs) aligning with national and international quality benchmarks.',
      ar: 'مرجع مؤسسي ومنهجية تطبيقية للتقييم المباشر وغير المباشر لمخرجات تعلم المقررات والبرامج الأكاديمية بما يتوافق مع معايير الاعتماد الوطنية والدولية.',
    },
  },
  {
    id: 'qi-excel-exam-system',
    title: {
      en: 'Standardized Excel Evaluation System for Exam Papers',
      ar: 'النظام المحوسب لتقييم وتحليل أوراق الاختبارات وفق جدول المواصفات',
    },
    organization: {
      en: 'Center for Academic Development & Quality Assurance, Hadhramout University',
      ar: 'مركز التطوير الأكاديمي وضمان الجودة، جامعة حضرموت',
    },
    year: '2024',
    category: 'system',
    description: {
      en: 'Automated evaluation instrument and analytical engine designed in Excel to audit exam papers, measure alignment with cognitive Bloom taxonomy levels, and calculate table of specifications compliance across academic departments.',
      ar: 'أداة تقييم محوسبة ونظام تحليلي متقدم لمراجعة أوراق الاختبارات، وقياس مدى مواءمتها للمستويات المعرفية لهرم بلوم، والتحقق من التزامها بجدول المواصفات الأكاديمي.',
    },
  },
  {
    id: 'qi-ai-program-spec',
    title: {
      en: 'B.Sc. Program Specifications in Artificial Intelligence',
      ar: 'توصيف وتصميم برنامج بكالوريوس الذكاء الاصطناعي',
    },
    organization: {
      en: 'College of Engineering & IT, Al-Arab University',
      ar: 'كلية الهندسة وتقنية المعلومات، جامعة العرب',
    },
    year: '2024',
    category: 'curriculum',
    description: {
      en: 'Co-developed complete program structure, curriculum matrix, course syllabi, and outcome mapping for the newly launched Bachelor of Science in Artificial Intelligence.',
      ar: 'المشاركة في إعداد وتوصيف الهيكل الأكاديمي الكامل، ومصفوفة البرنامج، وتوصيف المقررات لبرنامج بكالوريوس الذكاء الاصطناعي.',
    },
  },
  {
    id: 'qi-it-program-spec',
    title: {
      en: 'B.Sc. Program Specifications in Information Technology',
      ar: 'توصيف وتطوير برنامج بكالوريوس تقنية المعلومات',
    },
    organization: {
      en: 'Al-Arab University',
      ar: 'جامعة العرب',
    },
    year: '2018',
    category: 'curriculum',
    description: {
      en: 'Comprehensive academic program specification including competency mapping, market alignment analysis, prerequisite structures, and institutional learning goals.',
      ar: 'توصيف أكاديمي شامل لبرنامج تقنية المعلومات متضمناً مصفوفة الكفايات، واحتياجات سوق العمل، والتسلسل المنهجي، ومخرجات التعلم المستهدفة.',
    },
  },
  {
    id: 'qi-ce-program-spec',
    title: {
      en: 'B.Eng. Program Specifications in Computer Engineering',
      ar: 'توصيف وتحديث برنامج بكالوريوس هندسة الحاسوب',
    },
    organization: {
      en: 'Faculty of Engineering & Petroleum, Hadhramout University',
      ar: 'كلية الهندسة والبترول، جامعة حضرموت',
    },
    year: '2016 – 2017',
    category: 'curriculum',
    description: {
      en: 'Major curriculum restructuring and benchmarking against ABET criteria (EAC), mapping student outcomes (1-7), laboratory requirements, and continuous quality improvement loops.',
      ar: 'إعادة هيكلة وتطوير شامل للمناهج وفق معايير هيئة الاعتماد الأكاديمي للهندسة والتكنولوجيا (ABET)، ومواءمة مخرجات الطلبة وتجهيزات المعامل وحلقات التحسين المستمر.',
    },
  },
];
