export type SubjectId = 'english'

export interface SubjectConfig {
  id: SubjectId
  name: string
  description: string
  icon: 'BookOpen'
  color: 'blue'
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
} as const

export const SUBJECT_LIST = Object.values(SUBJECTS)

export function getSubject(id: SubjectId): SubjectConfig {
  return SUBJECTS[id]
}

export function getAvailableSubjects(): SubjectConfig[] {
  return SUBJECT_LIST.filter((s) => s.available)
}
