export type SubjectId = 'english' | 'maths' | 'science'

export interface SubjectConfig {
  id: SubjectId
  name: string
  description: string
  icon: 'BookOpen' | 'Calculator' | 'FlaskConical'
  color: 'blue' | 'green' | 'purple'
  available: boolean
  boards: string[]
}

export const SUBJECTS: Record<SubjectId, SubjectConfig> = {
  english: {
    id: 'english',
    name: 'English',
    description: 'GCSE English Language & Literature',
    icon: 'BookOpen',
    color: 'blue',
    available: true,
    boards: ['aqa', 'edexcel', 'ocr', 'wjec', 'igcse', 'ks3'],
  },
  maths: {
    id: 'maths',
    name: 'Maths',
    description: 'GCSE Mathematics',
    icon: 'Calculator',
    color: 'green',
    available: false,
    boards: ['aqa', 'edexcel', 'ocr'],
  },
  science: {
    id: 'science',
    name: 'Science',
    description: 'GCSE Combined & Triple Science',
    icon: 'FlaskConical',
    color: 'purple',
    available: false,
    boards: ['aqa', 'edexcel', 'ocr'],
  },
} as const

export const SUBJECT_LIST = Object.values(SUBJECTS)

export function getSubject(id: SubjectId): SubjectConfig {
  return SUBJECTS[id]
}

export function getAvailableSubjects(): SubjectConfig[] {
  return SUBJECT_LIST.filter((s) => s.available)
}

export function getComingSoonSubjects(): SubjectConfig[] {
  return SUBJECT_LIST.filter((s) => !s.available)
}
