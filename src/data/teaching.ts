import type { TeachingCourse } from '../types/cv';

/**
 * ============================================================================
 * TEACHING & UNIVERSITY COURSES
 * ============================================================================
 * Designed for modular expansion so each course can later link to a dedicated
 * subpage with lectures, course files, and references.
 */
export const teachingCourses: TeachingCourse[] = [
  // ==========================================
  // POSTGRADUATE COURSES (M.Sc.)
  // ==========================================
  {
    id: 'course-msc-ase',
    title: {
      en: 'Advanced Software Engineering',
      ar: 'هندسة البرمجيات المتقدمة',
    },
    level: 'Postgraduate (M.Sc.)',
    category: 'advanced',
    description: {
      en: 'Advanced paradigms in software architecture, quality attributes, agile engineering, formal verification, and enterprise system design.',
      ar: 'المفاهيم المتقدمة في معمارية البرمجيات، وسمات الجودة، والهندسة الرشيقة، والتحقق الشكلي، وتصميم النظم المؤسسية.',
    },
  },
  {
    id: 'course-msc-aoop',
    title: {
      en: 'Advanced Object-Oriented Programming',
      ar: 'البرمجة كائنية التوجه المتقدمة',
    },
    level: 'Postgraduate (M.Sc.)',
    category: 'advanced',
    description: {
      en: 'Design patterns, architectural idioms, concurrent object systems, reflection, metaprogramming, and scalable software construction.',
      ar: 'أنماط التصميم، والمعايير الهيكلية، والبرمجة كائنية التوجه المتزامنة، والبرمجة الوصفية، وبناء البرمجيات القابلة للتوسع.',
    },
  },
  {
    id: 'course-msc-adb',
    title: {
      en: 'Advanced Databases',
      ar: 'قواعد البيانات المتقدمة',
    },
    level: 'Postgraduate (M.Sc.)',
    category: 'advanced',
    description: {
      en: 'Distributed database systems, transaction isolation mechanisms, query optimization engines, NoSQL paradigms, and semantic data models.',
      ar: 'نظم قواعد البيانات الموزعة، وآليات عزل المعاملات، ومحركات تحسين الاستعلامات، ونظم NoSQL، ونماذج البيانات الدلالية.',
    },
  },

  // ==========================================
  // UNDERGRADUATE COURSES (B.Sc.)
  // ==========================================
  {
    id: 'course-bsc-ai',
    title: {
      en: 'Artificial Intelligence',
      ar: 'الذكاء الاصطناعي',
    },
    level: 'Undergraduate (B.Sc.)',
    category: 'core',
    description: {
      en: 'Knowledge representation, search algorithms, heuristic reasoning, machine learning fundamentals, and intelligent agents.',
      ar: 'تمثيل المعرفة، وخوارزميات البحث والاستدلال، ومبادئ التعلم الآلي، والوكلاء الأذكياء.',
    },
  },
  {
    id: 'course-bsc-se',
    title: {
      en: 'Software Engineering',
      ar: 'هندسة البرمجيات',
    },
    level: 'Undergraduate (B.Sc.)',
    category: 'core',
    description: {
      en: 'Software development lifecycle, requirements elicitation, UML modeling, testing strategies, and software maintenance.',
      ar: 'دورة حياة تطوير البرمجيات، وهندسة المتطلبات، والنمذجة باستخدام UML، واستراتيجيات الاختبار، وصيانة البرمجيات.',
    },
  },
  {
    id: 'course-bsc-os',
    title: {
      en: 'Operating Systems',
      ar: 'نظم التشغيل',
    },
    level: 'Undergraduate (B.Sc.)',
    category: 'core',
    description: {
      en: 'Process scheduling, synchronization, memory management, virtual memory, file system design, and concurrency.',
      ar: 'جدولة العمليات، والتزامن، وإدارة الذاكرة، والذاكرة الافتراضية، وهيكلية نظم الملفات.',
    },
  },
  {
    id: 'course-bsc-adv-os',
    title: {
      en: 'Advanced Operating Systems',
      ar: 'نظم التشغيل المتقدمة',
    },
    level: 'Undergraduate (B.Sc.)',
    category: 'advanced',
    description: {
      en: 'Distributed operating systems, kernel architecture, multi-core virtualization, real-time operating systems, and security.',
      ar: 'نظم التشغيل الموزعة، وبنية نواة النظام، والافتراضية متعددة الأنوية، ونظم التشغيل اللحظية.',
    },
  },
  {
    id: 'course-bsc-sad',
    title: {
      en: 'Systems Analysis & Design',
      ar: 'تحليل وتصميم النظم',
    },
    level: 'Undergraduate (B.Sc.)',
    category: 'core',
    description: {
      en: 'Structural analysis, data flow modeling, object-oriented system analysis, UI/UX prototyping, and system specification.',
      ar: 'التحليل الهيكلي، ونمذجة تدفق البيانات، والتحليل كائني التوجه، والنماذج الأولية، والمواصفات الفنية للنظم.',
    },
  },
  {
    id: 'course-bsc-ds',
    title: {
      en: 'Data Structures',
      ar: 'تراكيب البيانات',
    },
    level: 'Undergraduate (B.Sc.)',
    category: 'core',
    description: {
      en: 'Arrays, linked lists, stacks, queues, trees, graphs, heaps, hash tables, and computational complexity analysis (Big-O).',
      ar: 'المصفوفات، والقوائم المترابطة، والمكدسات، والطوابير، والأشجار، والرسوم البيانية، وجداول التجزئة، وتحليل التعقيد الحسابي.',
    },
  },
  {
    id: 'course-bsc-db-principles',
    title: {
      en: 'Principles of Database Systems',
      ar: 'مبادئ نظم قواعد البيانات',
    },
    level: 'Undergraduate (B.Sc.)',
    category: 'core',
    description: {
      en: 'Relational data model, Entity-Relationship (ER) modeling, normalization theory, SQL query language, and database integrity.',
      ar: 'النموذج العلائقي، ونمذجة الكيانات والعلاقات (ER)، ونظرية التسوية، ولغة SQL، وسلامة البيانات.',
    },
  },
  {
    id: 'course-bsc-cis',
    title: {
      en: 'Computer & Internet Security',
      ar: 'أمن الحاسوب والإنترنت',
    },
    level: 'Undergraduate (B.Sc.)',
    category: 'specialized',
    description: {
      en: 'Cryptographic algorithms, public key infrastructure, network security protocols, firewalls, and defense in depth.',
      ar: 'الخوارزميات التشفيرية، والبنية التحتية للمفاتيح العامة، وبروتوكولات أمن الشبكات، والجدران النارية.',
    },
  },
  {
    id: 'course-bsc-data-sec',
    title: {
      en: 'Data Security',
      ar: 'أمن البيانات',
    },
    level: 'Undergraduate (B.Sc.)',
    category: 'specialized',
    description: {
      en: 'Access control models, encryption standards, authentication mechanisms, data masking, and risk mitigation.',
      ar: 'نماذج التحكم بالوصول، ومعايير التشفير، وآليات المصادقة، وحماية سرية البيانات وإدارة المخاطر.',
    },
  },
  {
    id: 'course-bsc-discrete-math',
    title: {
      en: 'Discrete Mathematics',
      ar: 'الرياضيات المتقطعة',
    },
    level: 'Undergraduate (B.Sc.)',
    category: 'core',
    description: {
      en: 'Propositional logic, predicate calculus, set theory, combinatorics, relations, graph theory, and mathematical proof techniques.',
      ar: 'المنطق الرياضي، ونظرية المجموعات، والتوافيق والتباديل، والعلاقات والدوال، ونظرية الرسوم البيانية.',
    },
  },
  {
    id: 'course-bsc-oop',
    title: {
      en: 'Object-Oriented Programming',
      ar: 'البرمجة كائنية التوجه',
    },
    level: 'Undergraduate (B.Sc.)',
    category: 'core',
    description: {
      en: 'Encapsulation, inheritance, polymorphism, abstract classes, interfaces, exception handling, and robust program design.',
      ar: 'التغليف، والتوارث، وتعدد الأشكال، والفئات المجردة، والواجهات، ومعالجة الاستثناءات.',
    },
  },
  {
    id: 'course-bsc-visual-prog',
    title: {
      en: 'Visual Programming',
      ar: 'البرمجة المرئية',
    },
    level: 'Undergraduate (B.Sc.)',
    category: 'core',
    description: {
      en: 'Event-driven programming, GUI component architectures, visual controls, and database-driven desktop applications.',
      ar: 'البرمجة الموجهة بالأحداث، وتصميم واجهات المستخدم الرسومية (GUI)، وبناء التطبيقات المرتبطة بقواعد البيانات.',
    },
  },
  {
    id: 'course-bsc-computer-graphics',
    title: {
      en: 'Computer Graphics',
      ar: 'رسم الحاسوب',
    },
    level: 'Undergraduate (B.Sc.)',
    category: 'specialized',
    description: {
      en: '2D/3D transformations, rasterization algorithms, clipping, lighting models, rendering pipelines, and graphical programming.',
      ar: 'التحويلات ثنائية وثلاثية الأبعاد، وخوارزميات الرسم والتنقيط، ونماذج الإضاءة، وتوليد الرسوميات.',
    },
  },
  {
    id: 'course-bsc-research-method',
    title: {
      en: 'Scientific Research Methodology',
      ar: 'مناهج البحث العلمي',
    },
    level: 'Undergraduate (B.Sc.)',
    category: 'core',
    description: {
      en: 'Literature review formulation, research hypotheses, experimental design, scientific paper structuring, and academic citation standards.',
      ar: 'صياغة المراجعة الأدبية، والفرضيات البحثية، والتصميم التجريبي، وكتابة الأوراق العلمية، ومعايير التوثيق الأكاديمي.',
    },
  },
  {
    id: 'course-bsc-ethics',
    title: {
      en: 'Professional Ethics',
      ar: 'أخلاقيات المهنة',
    },
    level: 'Undergraduate (B.Sc.)',
    category: 'core',
    description: {
      en: 'Engineering and computing ethical codes, intellectual property rights, privacy legislation, professional responsibility, and societal impact.',
      ar: 'المواثيق الأخلاقية لمهنة الهندسة والحوسبة، والملكية الفكرية، وتشريعات الخصوصية، والمسؤولية المجتمعية.',
    },
  },
  {
    id: 'course-bsc-prog-1-2',
    title: {
      en: 'Introduction to Programming I & II',
      ar: 'مقدمة في البرمجة (1) و (2)',
    },
    level: 'Undergraduate (B.Sc.)',
    category: 'core',
    description: {
      en: 'Fundamental control structures, algorithmic problem solving, functions, recursion, pointers, and memory layout.',
      ar: 'البنى التحكمية الأساسية، وحل المسائل الخوارزمية، والدوال، والتكرار، والمؤشرات، وتنظيم الذاكرة.',
    },
  },
  {
    id: 'course-bsc-intro-computers',
    title: {
      en: 'Introduction to Computers',
      ar: 'مقدمة في الحاسوب',
    },
    level: 'Undergraduate (B.Sc.)',
    category: 'core',
    description: {
      en: 'Computer architecture basics, number systems, operating system fundamentals, and software applications.',
      ar: 'أساسيات معمارية الحاسوب، ونظم الأعداد، والمبادئ الأولية لنظم التشغيل والبرمجيات.',
    },
  },
  {
    id: 'course-bsc-grad-projects',
    title: {
      en: 'Graduation Projects I & II',
      ar: 'مشاريع التخرج (1) و (2)',
    },
    level: 'Undergraduate (B.Sc.)',
    category: 'core',
    description: {
      en: 'Capstone senior engineering design experience integrating hardware and software solutions to solve real-world problems.',
      ar: 'المشروع التطبيقي الشامل لمرحلة التخرج لدمج الحلول البرمجية والمادية لمعالجة مشكلات واقعية.',
    },
  },
];
