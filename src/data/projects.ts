import type { GraduationProject } from '../types/cv';

/**
 * ============================================================================
 * SELECTED SUPERVISED GRADUATION PROJECTS
 * ============================================================================
 * 6 Key capstone projects mentored by Prof. Dr. Rasha Abdulaziz Bin-Thalab
 */
export const graduationProjects: GraduationProject[] = [
  {
    id: 'proj-traffic-accident',
    title: {
      en: 'Traffic Accident Detection and Alert System',
      ar: 'نظام الكشف والإنذار التلقائي لحوادث المرور',
    },
    year: '2016',
    description: {
      en: 'An intelligent hardware-software IoT system that utilizes embedded impact sensors, GPS tracking, and automated GSM telecommunication to detect vehicle collisions in real-time and immediately transmit location coordinates to emergency response dispatchers.',
      ar: 'منظومة ذكية مدمجة مبنية على إنترنت الأشياء، تستخدم حساسات التصادم وتحديد الموقع عبر GPS والإرسال التلقائي للبيانات عبر شبكات الاتصال فور وقوع الحادث لإبلاغ مراكز الطوارئ والإنقاذ.',
    },
    award: {
      en: 'Awarded Silver Medal in the First Hadhramout Invention Exhibition in Mukalla (2016)',
      ar: 'حاصل على الميدالية الفضية في معرض حضرموت الأول للاختراع بالمكلا (2016م)',
    },
    technologies: ['IoT', 'Embedded Sensors', 'GPS / GSM', 'Emergency Telemetry', 'Microcontrollers'],
  },
  {
    id: 'proj-weather-monitoring',
    title: {
      en: 'Smart Weather Monitoring and Online Broadcasting System',
      ar: 'محطة الرصد الجوي الذكية والبث المباشر عبر الإنترنت',
    },
    year: '2019',
    description: {
      en: 'A coastal meteorological telemetry station deployed with atmospheric sensors to collect temperature, humidity, wind velocity, and barometric pressure data with live web broadcasting and storm alert triggers.',
      ar: 'محطة رصد أرصاد جوية ذكية للمناطق الساحلية، تجمع مؤشرات درجات الحرارة والرطوبة وسرعة الرياح والضغط الجوي، مع بثها مباشرة إلى بوابة ويب وتفعيل التنبيهات المبكرة.',
    },
    technologies: ['IoT Sensors', 'Web Telemetry', 'Cloud Dashboard', 'Real-Time Alerting'],
  },
  {
    id: 'proj-autonomous-car',
    title: {
      en: 'Autonomous Driving Car Project',
      ar: 'مشروع السيارة ذاتية القيادة والتحكم الذكي',
    },
    year: '2021',
    description: {
      en: 'A prototype robotic autonomous vehicle integrating computer vision, ultrasonic obstacle avoidance, lane-keeping algorithms, and path planning control logic for structured environments.',
      ar: 'نموذج أولي لمركبة ذاتية القيادة يدمج الرؤية الحاسوبية، وتفادي العوائق بالموجات فوق الصوتية، وخوارزميات تتبع المسار، والتحكم الذاتي بحركة المركبة.',
    },
    technologies: ['Computer Vision', 'Robotics', 'Path Planning', 'Obstacle Avoidance', 'Embedded AI'],
  },
  {
    id: 'proj-child-tracking',
    title: {
      en: 'Smart Child Tracking and Safety System',
      ar: 'نظام التتبع الذكي والسلامة لحماية الأطفال',
    },
    year: '2020',
    description: {
      en: 'A wearable safety device and mobile application utilizing geofencing boundaries, SOS triggers, and real-time location telemetry to ensure child safety and notify guardians during anomalies.',
      ar: 'جهاز أمان مدمج وتطبيق للهواتف الذكية يوفر السياج الجغرافي الذكي وتنبيهات الطوارئ وتتبع الموقع اللحظي لحماية الأطفال وإشعار أولياء الأمور فوراً.',
    },
    technologies: ['Geofencing', 'Mobile App', 'Wearable Hardware', 'Location Services'],
  },
  {
    id: 'proj-gym-management',
    title: {
      en: 'Electronic Gym Center Management System',
      ar: 'النظام الإلكتروني الشامل لإدارة المراكز والأندية الرياضية',
    },
    year: '2022',
    description: {
      en: 'A secure multi-tier enterprise web information system managing member subscriptions, biometric turnstile access control, trainer scheduling, financial transactions, and automated member analytics.',
      ar: 'نظام معلومات إداري متكامل لإدارة اشتراكات الأعضاء، والبوابات الإلكترونية البيومترية، وجدولة المدربين، والعمليات المالية والتقارير التحليلية.',
    },
    technologies: ['Enterprise Database', 'Web System', 'Access Control', 'Financial Analytics'],
  },
  {
    id: 'proj-smart-pharmacy',
    title: {
      en: 'AI-Powered Smart Pharmacy Management System',
      ar: 'نظام إدارة الصيدليات الذكي المدعوم بالذكاء الاصطناعي',
    },
    year: '2026',
    description: {
      en: 'An intelligent pharmacy management platform featuring optical character recognition (OCR) for prescription parsing, automated drug-drug interaction checking, predictive inventory replenishment, and barcode tracking.',
      ar: 'منصة إدارة صيدلانية ذكية تتضمن قراءة الوصفات الطبية بالرؤية الحاسوبية، والتحقق الآلي من التداخلات الدوائية، والتنبؤ باحتياجات المخزون والتتبع بالباركود.',
    },
    technologies: ['AI / OCR', 'Drug Interaction Engine', 'Predictive Inventory', 'Database Architecture'],
  },
];
