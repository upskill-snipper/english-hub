import type { GatedFeature } from '@/lib/feature-gating'
import { PRICING } from '@/constants/pricing'

// ─── Teacher-only features ─────────────────────────────────────────────

export const TEACHER_FEATURES: Set<GatedFeature> = new Set([
  'ai_lesson_plan',
  'worksheet_builder',
  'mark_scheme_generator',
  'export_pptx_word',
  'class_analytics',
  'student_reports',
  'feedback_report',
])

export function isTeacherFeature(feature: GatedFeature): boolean {
  return TEACHER_FEATURES.has(feature)
}

// ─── Pricing display strings (annual-only since 19 April 2026) ─────────

export const STUDENT_PRICE_STRING = `${PRICING.CURRENCY}${PRICING.STUDENT_ANNUAL}/year`
export const TEACHER_PRICE_STRING = `${PRICING.CURRENCY}${PRICING.TEACHER_ANNUAL}/year`

export function getPriceString(feature: GatedFeature): string {
  return isTeacherFeature(feature) ? TEACHER_PRICE_STRING : STUDENT_PRICE_STRING
}

export function getFullPricingLine(feature: GatedFeature): string {
  const price = isTeacherFeature(feature)
    ? `${PRICING.CURRENCY}${PRICING.TEACHER_ANNUAL}/year (teachers)`
    : `${PRICING.CURRENCY}${PRICING.STUDENT_ANNUAL}/year (students)`
  return `${price}. ${PRICING.TRIAL_TEXT}. Cancel anytime.`
}

// ─── Feature-specific lockout messages ─────────────────────────────────

export const FEATURE_LOCKOUT_COPY: Record<GatedFeature, string> = {
  ai_essay_marking:
    'Unlock unlimited AI marking with exam-board-aligned feedback on every essay. Premium students improve by a full grade on average.',
  mock_exam:
    'Access full-length mock exams that mirror real GCSE and A-Level papers, with detailed AI feedback on every answer.',
  feedback_report:
    'Generate comprehensive, shareable feedback reports for students and parents with targeted improvement areas.',
  ai_study_recommendations:
    'Get personalised study plans that adapt to your strengths and gaps, keeping revision focused and efficient.',
  ai_lesson_plan:
    'Create fully differentiated, curriculum-aligned lesson plans in minutes — not hours.',
  worksheet_builder:
    'Build differentiated worksheets with auto-generated questions and mark schemes, ready for any class.',
  mark_scheme_generator:
    'Generate detailed mark schemes aligned to AQA, Edexcel, and OCR criteria in seconds.',
  export_pptx_word:
    'Export lesson materials directly to PowerPoint and Word for seamless classroom delivery.',
  class_analytics:
    'Track class-wide progress with performance heatmaps, skill gaps, and intervention recommendations.',
  student_reports:
    'Generate individual student progress reports with targeted improvement areas and parent-ready summaries.',
}

// ─── Benefit summaries (short lists for modals/cards) ──────────────────

export const STUDENT_BENEFITS = [
  'Unlimited AI marking and detailed feedback',
  'Full mock exams with AI-powered analysis',
  'Personalised study plans and revision tools',
  'Progress tracking and exam readiness insights',
] as const

export const TEACHER_BENEFITS = [
  'Unlimited AI lesson plans and worksheets',
  'AI marking and feedback report generation',
  'Class analytics and student progress tracking',
  'PowerPoint and Word export for all materials',
] as const

export function getBenefits(isTeacher: boolean): readonly string[] {
  return isTeacher ? TEACHER_BENEFITS : STUDENT_BENEFITS
}

// ─── Soft nudge copy ───────────────────────────────────────────────────

export const SOFT_NUDGE_COPY = {
  student: (featureName: string, usageCount: number, freeLimit: number) =>
    `You've used ${usageCount} of your ${freeLimit} free ${featureName.toLowerCase()} submissions. Students who use AI marking regularly improve by a full grade. Upgrade to continue \u2014 first month free.`,
  teacher: (featureName: string, usageCount: number, freeLimit: number) =>
    `You've generated ${usageCount} of your ${freeLimit} free ${featureName.toLowerCase()} submissions. Upgrade for unlimited planning, marking, and analytics \u2014 first month free.`,
} as const

// ─── Dashboard banner copy ─────────────────────────────────────────────

export const DASHBOARD_BANNER_COPY = {
  student:
    "You're making progress. Premium students get unlimited AI marking, mock exams, and personalised study plans. 7-day free trial.",
  teacher:
    "You've started building with The English Hub. Unlock unlimited AI tools and full class analytics. 7-day free trial.",
} as const
