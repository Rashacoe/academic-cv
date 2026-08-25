import type { AcademicAward, AcademicServiceCollection, KeynoteAddress } from '../types/cv';

/**
 * ============================================================================
 * HONORS & AWARDS
 * ============================================================================
 */
export const academicAwards: AcademicAward[] = [
  {
    id: 'award-ais-distinguished',
    year: '2024',
    title: {
      en: 'AIS Distinguished Member (Cum Laude)',
      ar: 'عضو متميز في جمعية نظم المعلومات العالمية (AIS)',
    },
    organization: {
      en: 'Association for Information Systems (AIS)',
      ar: 'جمعية نظم المعلومات العالمية (AIS)',
    },
    description: {
      en: 'Awarded to scholars who have demonstrated sustained excellence in publication leadership and service to the IS academic discipline.',
      ar: 'تُمنح للعلماء المتميزين أصحاب الإسهامات البحثية والقيادية البارزة في تخصص نظم المعلومات عالمياً.',
    },
  },
  {
    id: 'award-icis-best-nominee',
    year: '2024',
    title: {
      en: 'Best Conference Paper Nominee',
      ar: 'الترشيح لجائزة أفضل بحث في المؤتمر',
    },
    organization: {
      en: '45th International Conference on Information Systems (ICIS)',
      ar: 'المؤتمر الدولي الخامس والأربعون لنظم المعلومات (ICIS)',
    },
    description: {
      en: 'Recognized among top 1% of papers at the premier international gathering of IS professors and researchers.',
      ar: 'ضمن أفضل 1% من الأوراق العلمية في أكبر تجمع دولي لأكاديميي نظم المعلومات.',
    },
  },
  {
    id: 'award-jmis-outstanding',
    year: '2023',
    title: {
      en: 'JMIS Outstanding Publication Award',
      ar: 'جائزة البحث المتميز لمجلة JMIS',
    },
    organization: {
      en: 'Journal of Management Information Systems',
      ar: 'مجلة إدارة نظم المعلومات (JMIS)',
    },
    description: {
      en: 'Honored for pioneering empirical insights on NeuroIS and behavioral cybersecurity compliance.',
      ar: 'تكريماً للإسهامات الرائدة في دراسة نظم المعلومات العصبية والامتثال للأمن السيبراني.',
    },
  },
  {
    id: 'award-kfupm-excellence',
    year: '2021',
    title: {
      en: 'University Excellence in Research Award',
      ar: 'جائزة التميز في البحث العلمي على مستوى الجامعة',
    },
    organization: {
      en: 'King Fahd University of Petroleum & Minerals (KFUPM)',
      ar: 'جامعة الملك فهد للبترول والمعادن',
    },
    description: {
      en: 'Highest university-wide faculty research honor for sustained scholarship and high-impact international publications.',
      ar: 'أعلى وسام بحثي على مستوى الجامعة تقديراً للإنتاج العلمي الغزير في كبرى الدوريات العالمية.',
    },
  },
  {
    id: 'award-ejis-editor',
    year: '2019',
    title: {
      en: 'Outstanding Associate Editor of the Year',
      ar: 'جائزة رئيس التحرير المشارك المتميز للعام',
    },
    organization: {
      en: 'European Journal of Information Systems (EJIS)',
      ar: 'المجلة الأوروبية لنظم المعلومات (EJIS)',
    },
    description: {
      en: 'Recognized for exemplary, constructive, and rigorous review guidance for submitted scholarly manuscripts.',
      ar: 'تقديراً للتحكيم العلمي الرصين والتوجيه الأكاديمي المتميز للأبحاث المقدمة للنشر.',
    },
  },
  {
    id: 'award-teaching-excellence',
    year: '2016',
    title: {
      en: 'Distinguished Teaching Award',
      ar: 'جائزة التدريس الجامعي المتميز',
    },
    organization: {
      en: 'College of Industrial Management & Computing',
      ar: 'كلية الإدارة الصناعية والحوسبة',
    },
    description: {
      en: 'Awarded for innovative pedagogy, syllabus excellence, and doctoral mentorship.',
      ar: 'تكريماً للابتكار في طرائق التدريس الجامعي والتميز في الإشراف على طلاب الدراسات العليا.',
    },
  },
];

/**
 * ============================================================================
 * EDITORIAL & PROFESSIONAL ACADEMIC SERVICE
 * ============================================================================
 */
export const academicService: AcademicServiceCollection = {
  editorial: [
    {
      id: 'ed-jais',
      role: { en: 'Senior Editor (SE)', ar: 'رئيس تحرير أول' },
      journal: 'Journal of the Association for Information Systems (JAIS)',
      period: '2022 – Present',
    },
    {
      id: 'ed-misq',
      role: { en: 'Associate Editor (AE)', ar: 'محرر مشارك' },
      journal: 'MIS Quarterly (MISQ) Special Issue on Generative AI',
      period: '2023 – 2025',
    },
    {
      id: 'ed-ejis',
      role: { en: 'Associate Editor (AE)', ar: 'محرر مشارك' },
      journal: 'European Journal of Information Systems (EJIS)',
      period: '2017 – 2022',
    },
    {
      id: 'ed-im',
      role: { en: 'Editorial Board Member', ar: 'عضو هيئة التحرير' },
      journal: 'Information & Management',
      period: '2018 – Present',
    },
  ],
  conferences: [
    {
      id: 'conf-icis-2025',
      role: { en: 'Track Co-Chair (AI & Autonomous Systems)', ar: 'رئيس مسار (الذكاء الاصطناعي والنظم المستقلة)' },
      conference: 'International Conference on Information Systems (ICIS 2025)',
      year: '2025',
    },
    {
      id: 'conf-mcis-2024',
      role: { en: 'Program Committee Co-Chair', ar: 'رئيس اللجنة العلمية للمؤتمر' },
      conference: 'Mediterranean Conference on Information Systems (MCIS)',
      year: '2024',
    },
    {
      id: 'conf-amcis-2023',
      role: { en: 'Track Chair (Platform Strategy & Ecosystems)', ar: 'رئيس مسار (استراتيجيات المنصات والمنظومات)' },
      conference: 'Americas Conference on Information Systems (AMCIS 2023)',
      year: '2023',
    },
    {
      id: 'conf-ecis-2022',
      role: { en: 'Doctoral Consortium Faculty Mentor', ar: 'مرشد أكاديمي لملتقى طلاب الدكتوراه' },
      conference: 'European Conference on Information Systems (ECIS 2022)',
      year: '2022',
    },
  ],
  institutional: [
    {
      id: 'inst-phd-chair',
      role: { en: 'Chair', ar: 'رئيس اللجنة' },
      committee: {
        en: 'University PhD Curriculum & Academic Accreditation Committee',
        ar: 'لجنة برامج الدكتوراه والاعتماد الأكاديمي بالجامعة',
      },
      period: '2021 – Present',
    },
    {
      id: 'inst-senate',
      role: { en: 'Elected Member', ar: 'عضو منتخب' },
      committee: {
        en: 'University Academic Senate & Faculty Promotion Board',
        ar: 'مجلس الجامعة ولجنة الترقيات الأكاديمية',
      },
      period: '2019 – 2023',
    },
    {
      id: 'inst-taskforce',
      role: { en: 'Director', ar: 'مدير المبادرة' },
      committee: {
        en: 'Digital Transformation & Executive Education Taskforce',
        ar: 'فريق عمل التحول الرقمي والتعليم التنفيذي',
      },
      period: '2020 – Present',
    },
  ],
};

/**
 * ============================================================================
 * KEYNOTES, INVITED PLENARIES & TALKS
 * ============================================================================
 */
export const keynoteAddresses: KeynoteAddress[] = [
  {
    id: 'keynote-wisac-2025',
    year: '2025',
    title: {
      en: 'Governing Enterprise Intelligence: Socio-Technical Realities in the Age of Generative Foundation Models',
      ar: 'حوكمة الذكاء المؤسسي: الحقائق الاجتماعية-التقنية في عصر النماذج التأسيسية التوليدية',
    },
    event: {
      en: 'World Information Systems & Analytics Congress (WISAC 2025)',
      ar: 'المؤتمر العالمي لنظم المعلومات والتحليلات 2025',
    },
    location: {
      en: 'Zurich, Switzerland',
      ar: 'زيورخ، سويسرا',
    },
    type: {
      en: 'Opening Keynote Speaker',
      ar: 'المتحدث الرئيسي الافتتاحي',
    },
  },
  {
    id: 'keynote-govtech-2024',
    year: '2024',
    title: {
      en: 'The Platformization of Government: Architectural Resilience & Citizen-Centric Digital Services',
      ar: 'تحول الحكومات إلى منصات رقمية: المرونة المعمارية والخدمات المتمحورة حول المستفيد',
    },
    event: {
      en: 'Global Digital Transformation & GovTech Summit',
      ar: 'القمة العالمية للتحول الرقمي والتقنيات الحكومية',
    },
    location: {
      en: 'Riyadh, Saudi Arabia',
      ar: 'الرياض، المملكة العربية السعودية',
    },
    type: {
      en: 'Distinguished Keynote Address',
      ar: 'كلمة رئيسية متميزة',
    },
  },
  {
    id: 'keynote-vienna-2023',
    year: '2023',
    title: {
      en: 'NeuroIS & Human Behavioral Compliance in Contemporary Cybersecurity Architectures',
      ar: 'نظم المعلومات العصبية والامتثال السلوكي البشري في بنى الأمن السيبراني المعاصرة',
    },
    event: {
      en: 'European Information Security & Behavior Forum',
      ar: 'المنتدى الأوروبي لأمن المعلومات والسلوك المؤسسي',
    },
    location: {
      en: 'Vienna, Austria',
      ar: 'فيينا، النمسا',
    },
    type: {
      en: 'Plenary Address',
      ar: 'جلسة رئيسية عامة',
    },
  },
];
