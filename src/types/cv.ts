/**
 * TypeScript Data Schemas for Prof. Dr. Rasha A. Bin-Thalab Academic Website
 */

export interface LocalizedString {
  en: string;
  ar?: string;
}

export interface LocalizedStringList {
  en: string[];
  ar?: string[];
}

/** 1. Personal Profile & Institutional Affiliation */
export interface PersonalProfile {
  name: LocalizedString;
  honorific: LocalizedString;
  title: LocalizedString;
  department: LocalizedString;
  faculty: LocalizedString;
  institution: LocalizedString;
  location: LocalizedString;
  email: string;
  phonePrimary: string;
  phoneSecondary: string;
  avatar: string;
  cvPdfUrl?: string;
  executiveSummary: LocalizedString;
  professionalIdentities: Array<{
    title: LocalizedString;
    description: LocalizedString;
    icon: string;
  }>;
  links: {
    scholar: string;
    orcid: string;
    researchGate: string;
    semanticScholar: string;
  };
}

/** 2. Academic Highlights (Verified CV Facts Only) */
export interface AcademicHighlight {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  icon: string;
}

/** 3. Higher Education & Qualifications */
export interface EducationRecord {
  id: string;
  degree: LocalizedString;
  field: LocalizedString;
  institution: LocalizedString;
  location: LocalizedString;
  period: string;
  notes?: LocalizedString;
}

/** 4. Academic Leadership & Administrative Roles */
export interface AdministrativeRole {
  id: string;
  role: LocalizedString;
  unit: LocalizedString;
  institution: LocalizedString;
  period: string;
  isCurrent?: boolean;
}

/** 5. Core Research Interests */
export interface ResearchInterest {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
}

/** 6. Peer-Reviewed Publications */
export interface Publication {
  id: string;
  type: 'journal' | 'conference';
  title: LocalizedString;
  authors: string[];
  venue: string;
  venueShort: string;
  year: number;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  doiUrl?: string;
  tags?: string[];
}

/** 7. Academic Quality, Accreditation & Program Development */
export interface QualityInitiative {
  id: string;
  title: LocalizedString;
  organization: LocalizedString;
  year: string;
  category: 'guideline' | 'system' | 'curriculum';
  description: LocalizedString;
}

/** 8. Teaching Courses (Postgraduate & Undergraduate) */
export interface TeachingCourse {
  id: string;
  code?: string;
  title: LocalizedString;
  level: 'Postgraduate (M.Sc.)' | 'Undergraduate (B.Sc.)';
  category: 'core' | 'advanced' | 'specialized';
  description?: LocalizedString;
}

/** 9. Professional Activities: Workshops, Conferences, Certifications */
export interface WorkshopDelivered {
  id: string;
  title: LocalizedString;
  venue: LocalizedString;
  date: string;
  type: LocalizedString;
}

export interface ConferenceParticipation {
  id: string;
  name: string;
  title: LocalizedString;
  location?: LocalizedString;
  year: string;
  details: LocalizedString;
  presentations?: LocalizedStringList;
}

export interface ProfessionalCertification {
  id: string;
  title: LocalizedString;
  issuer?: LocalizedString;
  year?: string;
}

/** 10. Selected Supervised Graduation Projects */
export interface GraduationProject {
  id: string;
  title: LocalizedString;
  year: string;
  description: LocalizedString;
  award?: LocalizedString;
  technologies: string[];
}
