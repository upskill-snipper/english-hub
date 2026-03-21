export interface Profile {
  id: string
  email: string
  full_name: string | null
  year_group: string | null
  exam_board: string | null
  subscription_status: 'free' | 'pro' | 'cancelled' | 'past_due' | 'unpaid' | 'incomplete' | 'paused'
  subscription_end_date: string | null
  stripe_customer_id: string | null
  created_at: string
  updated_at: string
}

export interface Course {
  id: string
  title: string
  subtitle: string | null
  description: string | null
  level: 'KS3' | 'GCSE' | 'IGCSE' | 'A-Level'
  category: string | null
  price_gbp: number | null
  stripe_price_id: string | null
  is_subscription_only: boolean
  thumbnail_url: string | null
  module_count: number
  duration_hours: number | null
  published: boolean
  created_at: string
}

export interface Module {
  id: string
  course_id: string
  title: string
  description: string | null
  content_html: string | null
  order_index: number
  duration_mins: number | null
  is_preview: boolean
  created_at: string
}

export interface QuizQuestion {
  id: string
  module_id: string | null
  course_id: string | null
  question: string
  options: { id: string; text: string }[]
  correct_option: string
  explanation: string | null
  question_type: string
  difficulty: number
  created_at: string
}

export interface Enrolment {
  id: string
  user_id: string
  course_id: string
  enrolled_at: string
  payment_type: 'free' | 'one_time' | 'subscription'
  stripe_payment_intent_id: string | null
}

export interface ModuleProgress {
  id: string
  user_id: string
  course_id: string
  module_id: string
  completed: boolean
  quiz_score: number | null
  quiz_attempts: number
  time_spent_seconds: number
  completed_at: string | null
}

export interface AssessmentAttempt {
  id: string
  user_id: string
  course_id: string
  score: number
  passed: boolean
  questions_answered: {
    question_id: string
    selected: string
    correct: boolean
  }[]
  time_taken_seconds: number | null
  attempted_at: string
}

export interface Certificate {
  id: string
  user_id: string
  course_id: string
  assessment_attempt_id: string
  score: number
  grade: 'Pass' | 'Merit' | 'Distinction'
  issued_at: string
  verification_url: string
}

export interface PracticeQuestion {
  id: string
  board: string
  paper: number
  questionType: string
  difficulty: string
  extract: string
  extractSource: string
  question: string
  modelAnswers: Record<string, string>
  markScheme: string[]
  examinerTips: string[]
}

export interface FlashcardDeck {
  id: string
  title: string
  description: string
  category: string
  board: string
  cards: FlashCard[]
}

export interface FlashCard {
  id: string
  front: string
  back: string
}

export type CourseTier = 'KS3' | 'GCSE' | 'IGCSE' | 'Foundation' | 'Higher'

export interface CourseData {
  id: string
  title: string
  subtitle: string
  tier: CourseTier
  board?: string
  price: number
  duration: string
  level: string
  description: string
  color: string
  moduleList: CourseModule[]
}

export interface CourseModule {
  id: string
  title: string
  duration: string
  content: string
  quiz: CourseQuiz[]
}

export interface CourseQuiz {
  id: string
  question: string
  options: string[]
  correct: number
  explanation: string
}

// ── Affiliate System Types ──────────────────────────────────

export type AffiliateStatus =
  | 'pending'
  | 'agreement_sent'
  | 'agreement_signed'
  | 'active'
  | 'suspended'
  | 'terminated'

export type CommissionStatus = 'pending' | 'confirmed' | 'paid' | 'voided' | 'refunded'

export type PayoutStatus = 'calculated' | 'disclosure_checked' | 'approved' | 'paid' | 'failed'

export type AffiliatePlanType = 'monthly' | 'annual' | 'crammer'

export interface Affiliate {
  id: string
  user_id: string | null
  rewardful_affiliate_id: string | null
  full_name: string
  email: string
  tiktok_handle: string | null
  instagram_handle: string | null
  approx_follower_count: string | null
  audience_description: string | null
  best_post_url: string | null
  content_plan: string | null
  tier: 1 | 2 | 3
  status: AffiliateStatus
  date_of_birth: string
  is_minor: boolean
  affiliate_agreement_signed_at: string | null
  affiliate_agreement_version: string | null
  parental_consent_signed_at: string | null
  parental_consent_guardian_name: string | null
  parental_consent_guardian_email: string | null
  last_disclosure_check_at: string | null
  disclosure_violations: number
  commission_monthly_gbp: number | null
  commission_annual_gbp: number | null
  commission_crammer_gbp: number | null
  bank_account_name: string | null
  bank_sort_code: string | null
  bank_account_number: string | null
  payout_to_guardian: boolean
  notes: string | null
  created_at: string
  updated_at: string
  activated_at: string | null
  terminated_at: string | null
  termination_reason: string | null
}

export interface AffiliateReferral {
  id: string
  affiliate_id: string
  referred_user_id: string | null
  rewardful_referral_id: string | null
  clicked_at: string | null
  signed_up_at: string | null
  converted_to_paid_at: string | null
  stripe_checkout_session_id: string | null
  stripe_subscription_id: string | null
  stripe_customer_id: string | null
  plan_type: AffiliatePlanType | null
  plan_amount_gbp: number | null
  commission_amount_gbp: number | null
  commission_status: CommissionStatus
  commission_voided_reason: string | null
  payout_id: string | null
  created_at: string
  updated_at: string
}

export interface AffiliatePayout {
  id: string
  affiliate_id: string
  period_start: string
  period_end: string
  referral_count: number
  gross_commission_gbp: number
  status: PayoutStatus
  disclosure_check_passed: boolean | null
  disclosure_check_notes: string | null
  disclosure_checked_by: string | null
  disclosure_checked_at: string | null
  paid_at: string | null
  payment_reference: string | null
  payment_method: string
  approved_by: string | null
  approved_at: string | null
  notes: string | null
  created_at: string
  updated_at: string
}

export interface AffiliateCommissionDefaults {
  tier: 1 | 2 | 3
  commission_monthly_gbp: number
  commission_annual_gbp: number
  commission_crammer_gbp: number
}

export interface AffiliateWithRelations extends Affiliate {
  affiliate_referrals?: AffiliateReferral[]
  affiliate_payouts?: AffiliatePayout[]
}
