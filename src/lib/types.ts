export interface Profile {
  id: string
  email: string
  full_name: string | null
  year_group: string | null
  exam_board: string | null
  subscription_status: 'free' | 'pro' | 'cancelled'
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
  level: 'KS3' | 'GCSE' | 'A-Level'
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

export interface CourseData {
  id: string
  title: string
  subtitle: string
  tier: string
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
