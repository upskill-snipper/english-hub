// Feature gating constants
export const FREE_USES_PER_FEATURE = 3

export type GatedFeature =
  | 'ai_essay_marking'
  | 'mock_exam'
  | 'feedback_report'
  | 'ai_study_recommendations'
  | 'ai_lesson_plan'
  | 'worksheet_builder'
  | 'mark_scheme_generator'
  | 'export_pptx_word'
  | 'class_analytics'
  | 'student_reports'

export function getFeatureUsage(feature: GatedFeature): number {
  if (typeof window === 'undefined') return 0
  const key = `feature_usage_${feature}`
  return parseInt(localStorage.getItem(key) || '0', 10)
}

export function incrementFeatureUsage(feature: GatedFeature): number {
  const current = getFeatureUsage(feature)
  const next = current + 1
  localStorage.setItem(`feature_usage_${feature}`, String(next))
  return next
}

export function getRemainingUses(feature: GatedFeature): number {
  return Math.max(0, FREE_USES_PER_FEATURE - getFeatureUsage(feature))
}

export function isFeatureLocked(feature: GatedFeature): boolean {
  return getFeatureUsage(feature) >= FREE_USES_PER_FEATURE
}

export function isUserPremium(): boolean {
  // Check localStorage or auth store for premium status
  if (typeof window === 'undefined') return false
  return localStorage.getItem('subscription_status') === 'premium'
}

export function canUseFeature(feature: GatedFeature): boolean {
  return isUserPremium() || !isFeatureLocked(feature)
}

// Feature display names
export const FEATURE_NAMES: Record<GatedFeature, string> = {
  ai_essay_marking: 'AI Essay Marking',
  mock_exam: 'Mock Exam Practice',
  feedback_report: 'Feedback Report',
  ai_study_recommendations: 'AI Study Recommendations',
  ai_lesson_plan: 'AI Lesson Plan',
  worksheet_builder: 'Worksheet Builder',
  mark_scheme_generator: 'Mark Scheme Generator',
  export_pptx_word: 'PowerPoint/Word Export',
  class_analytics: 'Class Analytics',
  student_reports: 'Student Reports',
}
