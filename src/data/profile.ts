import type { PersonalProfile, AcademicHighlight } from '../types/cv';

/**
 * ============================================================================
 * PROFESSOR PERSONAL PROFILE & EXECUTIVE INTRODUCTION
 * ============================================================================
 * Prof. Dr. Rasha Abdulaziz Bin-Thalab
 */
export const personalProfile: PersonalProfile = {
  name: {
    en: 'Prof. Dr. Rasha Abdulaziz Bin-Thalab',
    ar: 'أ.د. رشا عبدالعزيز بن ثعلب',
  },
  honorific: {
    en: 'Ph.D. in Information Systems | Quality Assurance Consultant',
    ar: 'دكتوراه في نظم المعلومات | استشارية ضمان الجودة والاعتماد الأكاديمي',
  },
  title: {
    en: 'Professor of Computer Science & Information Systems',
    ar: 'أستاذ علوم الحاسوب ونظم المعلومات',
  },
  department: {
    en: 'Department of Computer Engineering',
    ar: 'قسم هندسة الحاسوب',
  },
  faculty: {
    en: 'Faculty of Engineering & Petroleum',
    ar: 'كلية الهندسة والبترول',
  },
  institution: {
    en: 'Hadhramout University',
    ar: 'جامعة حضرموت',
  },
  location: {
    en: 'Mukalla, Hadhramout, Yemen',
    ar: 'المكلا، حضرموت، اليمن',
  },
  email: 'r.binthalab@hu.edu.ye',
  phonePrimary: '+967 776384300',
  phoneSecondary: '+967 739180011',
  avatar: '/assets/profile-placeholder.svg',
  cvPdfUrl: undefined, // Real PDF download link can be linked when file is provided
  executiveSummary: {
    en: 'Professor of Computer Science specializing in Information Systems and Software Engineering, with extensive academic, research, and administrative leadership experience. Recognized Academic Quality Assurance Consultant with a strong track record in program design, learning outcome assessment, and accreditation standards (including ABET). Author/co-author of 14 peer-reviewed research papers in international journals and scientific conferences.',
    ar: 'أستاذ علوم الحاسوب المتخصصة في نظم المعلومات وهندسة البرمجيات، بخبرة أكاديمية وبحثية وقيادية وإدارية واسعة. استشارية معتمدة في ضمان الجودة والاعتماد الأكاديمي مع سجل متميز في تصميم البرامج الأكاديمية، وقياس مخرجات التعلم، ومعايير الاعتماد البرامجي والمؤسسي (بما في ذلك ABET). مؤلفة ومشاركة في تأليف 14 ورقة بحثية محكمة في مجلات ومؤتمرات علمية دولية.',
  },
  professionalIdentities: [
    {
      title: {
        en: 'Professor & Researcher',
        ar: 'أستاذة وباحثة أكاديمية',
      },
      description: {
        en: 'Specializing in Information Systems, Semantic Text Classification, Software Engineering, and Artificial Intelligence with 14 peer-reviewed scientific publications.',
        ar: 'متخصصة في نظم المعلومات، والتصنيف الدلالي للنصوص، وهندسة البرمجيات، والذكاء الاصطناعي مع 14 بحثاً علمياً محكّماً.',
      },
      icon: 'microscope',
    },
    {
      title: {
        en: 'Academic Leader & Quality Consultant',
        ar: 'قيادية أكاديمية واستشارية جودة',
      },
      description: {
        en: 'Extensive leadership in academic accreditation, ABET readiness, curriculum design, learning outcome measurement, and institutional self-study reporting.',
        ar: 'خبرة ريادية واسعة في الاعتماد الأكاديمي، والتهيئة لمعايير ABET، وتصميم المناهج، وقياس مخرجات التعلم، وإعداد دراسات التقييم الذاتي.',
      },
      icon: 'shield-check',
    },
    {
      title: {
        en: 'Educator & Academic Mentor',
        ar: 'مربية ومرشدة أكاديمية',
      },
      description: {
        en: 'Over 23 years of university-level teaching excellence spanning postgraduate M.Sc. and undergraduate B.Sc. courses, supervising award-winning graduation innovations.',
        ar: 'أكثر من 23 عاماً من التميز في التدريس الجامعي لمرحلتي الماجستير والبكالوريوس، والإشراف على مشاريع تخرج ابتكارية حاصدة لجوائز.',
      },
      icon: 'academic-cap',
    },
  ],
  links: {
    scholar: 'https://scholar.google.com/citations?user=rasha-binthalab',
    orcid: 'https://orcid.org/0000-0002-XXXX-XXXX',
    researchGate: 'https://www.researchgate.net/profile/Rasha-Bin-Thalab',
    semanticScholar: 'https://www.semanticscholar.org/author/Rasha-A.-Bin-Thalab',
  },
};

/**
 * ============================================================================
 * ACADEMIC HIGHLIGHTS (Fact-checked directly from verified CV)
 * ============================================================================
 */
export const academicHighlights: AcademicHighlight[] = [
  {
    id: 'hl-rank',
    title: { en: 'Full Professor', ar: 'أستاذ دكتور' },
    subtitle: { en: 'Computer Science & Information Systems', ar: 'علوم الحاسوب ونظم المعلومات' },
    icon: 'user-check',
  },
  {
    id: 'hl-degree',
    title: { en: 'Ph.D. in Information Systems', ar: 'دكتوراه في نظم المعلومات' },
    subtitle: { en: 'Cairo University, Egypt (2014)', ar: 'جامعة القاهرة، مصر (2014)' },
    icon: 'academic-cap',
  },
  {
    id: 'hl-pubs',
    title: { en: '14 Research Papers', ar: '14 بحثاً علمياً' },
    subtitle: { en: 'Peer-reviewed international journals & conferences', ar: 'في مجلات ومؤتمرات علمية دولية محكمة' },
    icon: 'document-text',
  },
  {
    id: 'hl-quality',
    title: { en: 'Academic Quality Consultant', ar: 'استشارية جودة واعتماد' },
    subtitle: { en: 'ABET criteria & program specification expert', ar: 'خبيرة في معايير ABET وتوصيف البرامج الأكاديمية' },
    icon: 'badge-check',
  },
  {
    id: 'hl-experience',
    title: { en: '23+ Years of Service', ar: 'أكثر من 23 عاماً من العطاء' },
    subtitle: { en: 'Faculty Member since March 2001', ar: 'عضو هيئة تدريس منذ مارس 2001م' },
    icon: 'clock',
  },
];
