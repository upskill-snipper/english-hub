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
import { igcseLitCourses } from './igcse-lit-courses';
import { wjecCourses } from './wjec-courses';
import { ocrCourses } from './ocr-courses';
import { aqaPowerConflictCourse } from './aqa-poetry-power-conflict';
import { aqaLoveRelationshipsCourse } from './aqa-poetry-love-relationships';
import { romeoJulietCourse } from './romeo-juliet-course';
import { jekyllHydeCourse } from './jekyll-hyde-course';
import { lordOfFliesCourse } from './lord-of-flies-course';
import { animalFarmCourse } from './animal-farm-course';
import { christmasCarolCourse } from './christmas-carol-course';
import { inspectorCallsCourse } from './inspector-calls-course';
import { caieLitCourses } from './caie-lit-courses';
import { igcsePoetry1Courses } from './edexcel-igcse-lit-poetry-courses';
import { igcsePoetry2Courses } from './edexcel-igcse-lit-poetry-courses-2';
import { igcseProseCourses } from './edexcel-igcse-lit-prose-courses';
import { igcseDramaCourses } from './edexcel-igcse-lit-drama-courses';
import { igcseClassicsCourses } from './edexcel-igcse-lit-classics-courses';
import { ks3Year7Courses } from './ks3-year7-courses';
import { ks3Year8Courses } from './ks3-year8-courses';
import { ks3Year9Courses } from './ks3-year9-courses';
import { igcseYear1011Courses } from './igcse-year10-11-courses';
import { ialYear1213Courses } from './ial-year12-13-courses';

// ─── Master Course List ──────────────────────────────────────────────────────

export const allCourses: CourseData[] = [
  ...ks3Courses,
  ...gcseCourses,
  ...edexcelCourses,
  ...edexcelLitCourses,
  ...igcseCourses,
  ...igcseLitCourses,
  ...wjecCourses,
  ...ocrCourses,
  aqaPowerConflictCourse,
  aqaLoveRelationshipsCourse,
  romeoJulietCourse,
  jekyllHydeCourse,
  lordOfFliesCourse,
  animalFarmCourse,
  christmasCarolCourse,
  inspectorCallsCourse,
  ...caieLitCourses,
  ...igcsePoetry1Courses,
  ...igcsePoetry2Courses,
  ...igcseProseCourses,
  ...igcseDramaCourses,
  ...igcseClassicsCourses,
  // KS3 Year-group curriculum courses
  ...ks3Year7Courses,
  ...ks3Year8Courses,
  ...ks3Year9Courses,
  // IGCSE Year 10-11 curriculum courses
  ...igcseYear1011Courses,
  // IAL Year 12-13 curriculum courses
  ...ialYear1213Courses,
];

export default allCourses;
