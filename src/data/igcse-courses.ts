// @ts-nocheck
import type { CourseData } from './courses'
import { igcseLangAModules } from './igcse-lang-a-modules'
import { igcseLangBModules } from './igcse-lang-b-modules'
import { igcseLangAAssessment } from './igcse-a-assessment'
import { igcseLangBAssessment } from './igcse-b-assessment'

const igcseLangA: CourseData = {
  id: 'edexcel-igcse-lang-a',
  title: 'Edexcel IGCSE English Language A',
  subtitle: 'International GCSE - Specification A (4EA1)',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4EA1',
  specCode: '4EA1/01-02',
  price: 0,
  duration: '14 weeks',
  level: 'IGCSE (Years 10-11)',
  color: '#0ea5e9',
  description:
    'The complete Edexcel International GCSE English Language Specification A course. Master non-fiction reading, transactional writing, poetry and prose analysis, and imaginative writing - with examiner-level strategies, worked examples, and model answers for every question type across both papers.',
  moduleList: igcseLangAModules,
  assessmentQuestions: igcseLangAAssessment,
}

const igcseLangB: CourseData = {
  id: 'edexcel-igcse-lang-b',
  title: 'Edexcel IGCSE English Language B',
  subtitle: 'International GCSE - Specification B (4EB1)',
  tier: 'IGCSE',
  board: 'Edexcel',
  specId: '4EB1',
  specCode: '4EB1/01-02',
  price: 0,
  duration: '14 weeks',
  level: 'IGCSE (Years 10-11)',
  color: '#06b6d4',
  description:
    'The complete Edexcel International GCSE English Language Specification B course. Build advanced reading skills across non-fiction and literary texts, then master transactional and creative writing - with step-by-step analysis frameworks, annotated model responses, and proven exam strategies for both papers.',
  moduleList: igcseLangBModules,
  assessmentQuestions: igcseLangBAssessment,
}

export const igcseCourses: CourseData[] = [igcseLangA, igcseLangB]
