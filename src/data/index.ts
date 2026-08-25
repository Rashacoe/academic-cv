/**
 * ============================================================================
 * PROF. DR. RASHA ABDULAZIZ BIN-THALAB ACADEMIC PORTFOLIO DATA AGGREGATOR
 * ============================================================================
 * Central barrel file exporting strongly-typed academic data structures.
 */

export * from '../types/cv';
export { personalProfile, academicHighlights } from './profile';
export { educationRecords } from './education';
export { administrativeRoles } from './positions';
export { researchInterests } from './research';
export { publicationsList } from './publications';
export { qualityInitiatives } from './quality';
export { teachingCourses } from './teaching';
export {
  conferenceParticipations,
  workshopsDelivered,
  professionalCertifications,
} from './activities';
export { graduationProjects } from './projects';

import { personalProfile, academicHighlights } from './profile';
import { educationRecords } from './education';
import { administrativeRoles } from './positions';
import { researchInterests } from './research';
import { publicationsList } from './publications';
import { qualityInitiatives } from './quality';
import { teachingCourses } from './teaching';
import {
  conferenceParticipations,
  workshopsDelivered,
  professionalCertifications,
} from './activities';
import { graduationProjects } from './projects';

/**
 * Unified CV Object supporting both `personal` and `profile` naming
 * to ensure 100% resilient access across all components.
 */
export const cvData = {
  personal: personalProfile,
  profile: personalProfile,
  highlights: academicHighlights,
  education: educationRecords,
  positions: administrativeRoles,
  research: researchInterests,
  researchInterests: researchInterests,
  publications: publicationsList,
  quality: qualityInitiatives,
  teaching: teachingCourses,
  conferences: conferenceParticipations,
  workshops: workshopsDelivered,
  certifications: professionalCertifications,
  projects: graduationProjects,
  supervision: graduationProjects,
};

export default cvData;
