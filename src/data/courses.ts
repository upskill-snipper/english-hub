// ─── Shared Types ────────────────────────────────────────────────────────────

export interface CourseQuiz {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface CourseModule {
  id: string;
  title: string;
  duration: string;
  content: string;
  quiz: CourseQuiz[];
}

export interface CourseData {
  id: string;
  title: string;
  subtitle: string;
  tier: string;
  board?: string;
  specId?: string;
  specCode?: string;
  price: number;
  duration: string;
  level: string;
  description: string;
  color: string;
  moduleList: CourseModule[];
  assessmentQuestions?: CourseQuiz[];
}

// ─── Imports ─────────────────────────────────────────────────────────────────

import { ks3Courses } from './ks3-courses';
import { gcseCourses } from './gcse-courses';

// ─── Master Course List ──────────────────────────────────────────────────────

export const allCourses: CourseData[] = [...ks3Courses, ...gcseCourses];

export default allCourses;
