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

// ─── Pricing display strings ───────────────────────────────────────────
// 21 April 2026 pricing pivot: two-tier Early Access / Standard with anchor.
// Headline is the Early Access monthly price; Standard shown as strikethrough
// anchor with "from August 2026" urgency tag.

export const STUDENT_PRICE_STRING = `Early Access ${PRICING.CURRENCY}${PRICING.STUDENT_MONTHLY}/month (or ${PRICING.CURRENCY}${PRICING.STUDENT_ANNUAL}/year) — Standard ${PRICING.CURRENCY}${PRICING.STUDENT_MONTHLY_STANDARD} from ${PRICING.PRICE_INCREASE_DATE}`
export const TEACHER_PRICE_STRING = `Early Access ${PRICING.CURRENCY}${PRICING.TEACHER_MONTHLY}/month (or ${PRICING.CURRENCY}${PRICING.TEACHER_ANNUAL}/year) — Standard ${PRICING.CURRENCY}${PRICING.TEACHER_MONTHLY_STANDARD} from ${PRICING.PRICE_INCREASE_DATE}`

export function getPriceString(feature: GatedFeature): string {
  return isTeacherFeature(feature) ? TEACHER_PRICE_STRING : STUDENT_PRICE_STRING
}

export function getFullPricingLine(feature: GatedFeature): string {
  if (isTeacherFeature(feature)) {
    return `Teachers — Early Access: ${PRICING.CURRENCY}${PRICING.TEACHER_MONTHLY}/month or ${PRICING.CURRENCY}${PRICING.TEACHER_ANNUAL}/year. Standard pricing from ${PRICING.PRICE_INCREASE_DATE}: ${PRICING.CURRENCY}${PRICING.TEACHER_MONTHLY_STANDARD}/month or ${PRICING.CURRENCY}${PRICING.TEACHER_ANNUAL_STANDARD}/year. ${PRICING.TRIAL_TEXT} — card required, cancel before day 7. ⚡ ${PRICING.PRICE_INCREASE_MESSAGE}.`
  }
  return `Students — Early Access: ${PRICING.CURRENCY}${PRICING.STUDENT_MONTHLY}/month or ${PRICING.CURRENCY}${PRICING.STUDENT_ANNUAL}/year (${PRICING.CURRENCY}${PRICING.STUDENT_ANNUAL_WITH_CODE}/year with code ${PRICING.AFFILIATE_PROMO_CODE}). Standard pricing from ${PRICING.PRICE_INCREASE_DATE}: ${PRICING.CURRENCY}${PRICING.STUDENT_MONTHLY_STANDARD}/month or ${PRICING.CURRENCY}${PRICING.STUDENT_ANNUAL_STANDARD}/year. ${PRICING.TRIAL_TEXT} — card required, cancel before day 7. ⚡ ${PRICING.PRICE_INCREASE_MESSAGE}.`
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
    `You've used ${usageCount} of your ${freeLimit} free ${featureName.toLowerCase()} uses. Students who use AI marking regularly improve by a full grade. Start a ${PRICING.TRIAL_TEXT} to continue — card required, cancel before day 7.`,
  teacher: (featureName: string, usageCount: number, freeLimit: number) =>
    `You've generated ${usageCount} of your ${freeLimit} free ${featureName.toLowerCase()} uses. Unlock unlimited planning, marking, and analytics with a ${PRICING.TRIAL_TEXT} — card required, cancel before day 7.`,
} as const

// ─── Dashboard banner copy ─────────────────────────────────────────────

export const DASHBOARD_BANNER_COPY = {
  student: `You're making progress. Premium students get unlimited AI marking, mock exams, and personalised study plans. Start a ${PRICING.TRIAL_TEXT} — card required, cancel before day 7.`,
  teacher: `You've started building with The English Hub. Unlock unlimited AI tools and full class analytics with a ${PRICING.TRIAL_TEXT} — card required, cancel before day 7.`,
} as const

// ─── Promo banner (reusable across CTAs) ───────────────────────────────

export const PROMO_BANNER_STUDENT_CODE = `Use code ${PRICING.AFFILIATE_PROMO_CODE} at checkout — annual plan ${PRICING.CURRENCY}${PRICING.STUDENT_ANNUAL_WITH_CODE} (save ${PRICING.CURRENCY}${PRICING.STUDENT_ANNUAL_SAVINGS}).`
