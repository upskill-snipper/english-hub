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

export type CourseTier = 'KS3' | 'GCSE' | 'IGCSE' | 'Foundation' | 'Higher';

export interface CourseData {
  id: string;
  title: string;
  subtitle: string;
  tier: CourseTier;
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
import { edexcelCourses } from './edexcel-courses';
import { edexcelLitCourses } from './edexcel-lit-courses';
import { igcseCourses } from './igcse-courses';

// ─── Master Course List ──────────────────────────────────────────────────────

export const allCourses: CourseData[] = [...ks3Courses, ...gcseCourses, ...edexcelCourses, ...edexcelLitCourses, ...igcseCourses];

export default allCourses;
