// ─── Class Results Analysis & Recommendation Engine ─────────────────────────

import { percentageToGCSEGradeLabel } from '@/lib/grades'
import type {
  ClassAnalytics as AnalyticsClassAnalytics,
  StudentAnalytics as AnalyticsStudentAnalytics,
  WeakArea,
} from '@/lib/analytics/types'

// ── Types ────────────────────────────────────────────────────────────────────

export interface StudentScore {
  student_id: string
  student_name: string
  module_id: string
  module_name: string
  course_id: string
  course_name: string
  score: number
  completed_at: string
  skill_tags?: string[]
}

export interface SkillBreakdown {
  skill: string
  avg_score: number
  sample_size: number
  status: 'below' | 'approaching' | 'meeting' | 'exceeding'
}

export interface StrengthWeakness {
  area: string
  course_id: string
  course_name: string
  module_id?: string
  module_name?: string
  avg_score: number
  student_count: number
  severity: 'critical' | 'warning' | 'minor'
}

export interface ScoreDistributionBucket {
  label: string
  min: number
  max: number
  count: number
  percentage: number
}

export interface TrendPoint {
  label: string
  avg_score: number
  active_students: number
}

export interface ClassAnalysisResult {
  class_avg_score: number
  median_score: number
  score_distribution: ScoreDistributionBucket[]
  skill_breakdown: SkillBreakdown[]
  trends: TrendPoint[]
  top_strengths: StrengthWeakness[]
  top_weaknesses: StrengthWeakness[]
  student_count: number
  total_attempts: number
}

export interface ResourceRecommendation {
  id: string
  type: 'lesson_plan' | 'course_module' | 'practice_questions' | 'flashcard_deck'
  title: string
  description: string
  duration_minutes: number
  reason: string
  weak_area: string
  course_id?: string
  module_id?: string
  href: string
}

export interface WeeklyPlan {
  week: number
  theme: string
  resources: ResourceRecommendation[]
  focus_areas: string[]
  target_outcome: string
}

// ── Skill tag mappings ───────────────────────────────────────────────────────

const MODULE_SKILL_MAP: Record<string, string[]> = {
  'creative-writing': ['Imagination', 'Vocabulary', 'Sentence Structure', 'Descriptive Writing'],
  'language-analysis': ['Comprehension', 'Inference', 'Language Techniques', 'Critical Analysis'],
  'unseen-poetry': ['Poetry Analysis', 'Language Techniques', 'Comparison', 'Critical Thinking'],
  'shakespeare': ['Shakespeare', 'Contextual Understanding', 'Character Analysis', 'Quotation'],
  'narrative-voice': ['Narrative Techniques', 'Tone', 'Perspective', 'Critical Analysis'],
  'structure-analysis': ['Text Structure', 'Cohesion', 'Argument Building', 'Critical Analysis'],
  'transactional-writing': ['Persuasion', 'Formal Writing', 'Audience Awareness', 'Rhetoric'],
  'poetry-anthology': ['Poetry Analysis', 'Comparison', 'Contextual Understanding', 'Memory Recall'],
  'prose-study': ['Prose Analysis', 'Character Analysis', 'Theme Analysis', 'Quotation'],
  'spoken-language': ['Speaking Skills', 'Listening', 'Rhetoric', 'Audience Awareness'],
  'reading-comprehension': ['Comprehension', 'Inference', 'Summary', 'Vocabulary'],
  'modern-prose': ['Prose Analysis', 'Theme Analysis', 'Character Analysis', 'Modern Context'],
  'poetry-comparison': ['Poetry Analysis', 'Comparison', 'Critical Thinking', 'Structure Analysis'],
  'oracy': ['Speaking Skills', 'Debate', 'Presentation', 'Rhetoric'],
}

function inferSkillsFromModule(moduleId: string, moduleName: string): string[] {
  // Try direct mapping first
  for (const [key, skills] of Object.entries(MODULE_SKILL_MAP)) {
    if (
      moduleId.toLowerCase().includes(key) ||
      moduleName.toLowerCase().includes(key.replace(/-/g, ' '))
    ) {
      return skills
    }
  }
  // Fallback: infer from module name keywords
  const skills: string[] = []
  const lower = moduleName.toLowerCase()
  if (lower.includes('writ')) skills.push('Writing')
  if (lower.includes('read') || lower.includes('comprehension')) skills.push('Comprehension')
  if (lower.includes('analy')) skills.push('Critical Analysis')
  if (lower.includes('poetry') || lower.includes('poem')) skills.push('Poetry Analysis')
  if (lower.includes('grammar') || lower.includes('punctuation')) skills.push('Grammar')
  if (lower.includes('vocabulary') || lower.includes('vocab')) skills.push('Vocabulary')
  if (lower.includes('shakesp')) skills.push('Shakespeare')
  if (lower.includes('speak') || lower.includes('oral')) skills.push('Speaking Skills')
  return skills.length > 0 ? skills : ['General English']
}

// ── Core analysis function ───────────────────────────────────────────────────

export function analyzeClassPerformance(scores: StudentScore[]): ClassAnalysisResult {
  if (scores.length === 0) {
    return {
      class_avg_score: 0,
      median_score: 0,
      score_distribution: [],
      skill_breakdown: [],
      trends: [],
      top_strengths: [],
      top_weaknesses: [],
      student_count: 0,
      total_attempts: 0,
    }
  }

  const allScores = scores.map((s) => s.score)
  const studentIds = new Set(scores.map((s) => s.student_id))

  // Class average
  const classAvg = Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length)

  // Median
  const sorted = [...allScores].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  const median =
    sorted.length % 2 !== 0
      ? sorted[mid]
      : Math.round((sorted[mid - 1] + sorted[mid]) / 2)

  // Score distribution buckets
  const buckets = [
    { label: '0-20%', min: 0, max: 20 },
    { label: '21-40%', min: 21, max: 40 },
    { label: '41-60%', min: 41, max: 60 },
    { label: '61-80%', min: 61, max: 80 },
    { label: '81-100%', min: 81, max: 100 },
  ]

  const scoreDistribution: ScoreDistributionBucket[] = buckets.map((b) => {
    const count = allScores.filter((s) => s >= b.min && s <= b.max).length
    return {
      ...b,
      count,
      percentage: Math.round((count / allScores.length) * 100),
    }
  })

  // Skill breakdown: aggregate scores by inferred skill
  const skillAgg = new Map<string, { total: number; count: number }>()
  for (const s of scores) {
    const skills = s.skill_tags?.length
      ? s.skill_tags
      : inferSkillsFromModule(s.module_id, s.module_name)
    for (const skill of skills) {
      const entry = skillAgg.get(skill) ?? { total: 0, count: 0 }
      entry.total += s.score
      entry.count++
      skillAgg.set(skill, entry)
    }
  }

  const skillBreakdown: SkillBreakdown[] = Array.from(skillAgg.entries())
    .map(([skill, data]) => {
      const avg = Math.round(data.total / data.count)
      let status: SkillBreakdown['status']
      if (avg < 40) status = 'below'
      else if (avg < 60) status = 'approaching'
      else if (avg < 80) status = 'meeting'
      else status = 'exceeding'
      return { skill, avg_score: avg, sample_size: data.count, status }
    })
    .sort((a, b) => a.avg_score - b.avg_score)

  // Trends: group by week
  const weekMap = new Map<string, { total: number; count: number; students: Set<string> }>()
  for (const s of scores) {
    if (!s.completed_at) continue
    const date = new Date(s.completed_at)
    // Get Monday of that week
    const day = date.getDay()
    const mondayOffset = day === 0 ? -6 : 1 - day
    const monday = new Date(date)
    monday.setDate(date.getDate() + mondayOffset)
    const weekKey = monday.toISOString().split('T')[0]

    const entry = weekMap.get(weekKey) ?? { total: 0, count: 0, students: new Set<string>() }
    entry.total += s.score
    entry.count++
    entry.students.add(s.student_id)
    weekMap.set(weekKey, entry)
  }

  const trends: TrendPoint[] = Array.from(weekMap.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-8)
    .map(([weekStart, data]) => {
      const d = new Date(weekStart)
      const label = `${d.getDate()}/${d.getMonth() + 1}`
      return {
        label,
        avg_score: Math.round(data.total / data.count),
        active_students: data.students.size,
      }
    })

  // Module-level aggregation for strengths and weaknesses
  const moduleAgg = new Map<
    string,
    {
      module_id: string
      module_name: string
      course_id: string
      course_name: string
      total: number
      count: number
      students: Set<string>
    }
  >()

  for (const s of scores) {
    const key = s.module_id
    const entry = moduleAgg.get(key) ?? {
      module_id: s.module_id,
      module_name: s.module_name,
      course_id: s.course_id,
      course_name: s.course_name,
      total: 0,
      count: 0,
      students: new Set<string>(),
    }
    entry.total += s.score
    entry.count++
    entry.students.add(s.student_id)
    moduleAgg.set(key, entry)
  }

  const moduleResults = Array.from(moduleAgg.values()).map((m) => {
    const avg = Math.round(m.total / m.count)
    let severity: StrengthWeakness['severity']
    if (avg < 40) severity = 'critical'
    else if (avg < 60) severity = 'warning'
    else severity = 'minor'
    return {
      area: m.module_name,
      course_id: m.course_id,
      course_name: m.course_name,
      module_id: m.module_id,
      module_name: m.module_name,
      avg_score: avg,
      student_count: m.students.size,
      severity,
    }
  })

  const sortedByScore = [...moduleResults].sort((a, b) => a.avg_score - b.avg_score)
  const topWeaknesses = sortedByScore.filter((m) => m.avg_score < 70).slice(0, 3)
  const topStrengths = [...moduleResults]
    .sort((a, b) => b.avg_score - a.avg_score)
    .slice(0, 3)

  return {
    class_avg_score: classAvg,
    median_score: median,
    score_distribution: scoreDistribution,
    skill_breakdown: skillBreakdown,
    trends,
    top_strengths: topStrengths,
    top_weaknesses: topWeaknesses,
    student_count: studentIds.size,
    total_attempts: scores.length,
  }
}

// ── Resource mapping ─────────────────────────────────────────────────────────

const BOARD_RESOURCE_MAP: Record<string, Record<string, { lessons: string[]; modules: string[]; practice: string[]; flashcards: string[] }>> = {
  AQA: {
    'creative-writing': {
      lessons: ['Descriptive & Narrative Writing Masterclass', 'Sensory Language Workshop'],
      modules: ['Creative Writing Foundations', 'Advanced Descriptive Techniques'],
      practice: ['Paper 1 Section B Practice', 'Narrative Writing Prompts'],
      flashcards: ['Literary Devices', 'Sensory Vocabulary Builder'],
    },
    'language-analysis': {
      lessons: ['Language Analysis Step-by-Step', 'Identifying Writer\'s Methods'],
      modules: ['Paper 1 Reading Skills', 'Language Techniques Toolkit'],
      practice: ['Unseen Extract Analysis', 'Paper 1 Section A Practice'],
      flashcards: ['Language Techniques Definitions', 'Effect Words Bank'],
    },
    'shakespeare': {
      lessons: ['Approaching Shakespeare Essays', 'Context & Character Deep Dive'],
      modules: ['Shakespeare Study Guide', 'Quotation & Analysis Techniques'],
      practice: ['Shakespeare Extract Questions', 'Essay Planning Practice'],
      flashcards: ['Key Shakespeare Quotations', 'Shakespearean Vocabulary'],
    },
  },
  Edexcel: {
    'transactional-writing': {
      lessons: ['Persuasive Writing Techniques', 'Formal vs Informal Register'],
      modules: ['Transactional Writing Mastery', 'Audience & Purpose'],
      practice: ['Letter & Article Writing Practice', 'Speech Writing Tasks'],
      flashcards: ['Rhetorical Devices', 'Formal Vocabulary Bank'],
    },
    'language-analysis': {
      lessons: ['Close Reading Strategies', 'Comparing Writers\' Viewpoints'],
      modules: ['Non-Fiction Reading Skills', 'Analytical Response Framework'],
      practice: ['Paper 2 Reading Practice', 'Comparison Response Tasks'],
      flashcards: ['Analysis Vocabulary', 'Structural Features'],
    },
    'shakespeare': {
      lessons: ['Shakespeare in Context', 'Character & Theme Exploration'],
      modules: ['Shakespeare Anthology Guide', 'Essay Writing Workshop'],
      practice: ['Extract-Based Essay Practice', 'Theme Comparison Tasks'],
      flashcards: ['Key Quotations Bank', 'Character Profiles'],
    },
  },
}

// Fallback resources for any board/area combination
const GENERIC_RESOURCES: Record<string, { lessons: string[]; modules: string[]; practice: string[]; flashcards: string[] }> = {
  writing: {
    lessons: ['Effective Writing Techniques', 'Planning & Structuring Responses'],
    modules: ['Writing Skills Foundation', 'Advanced Writing Workshop'],
    practice: ['Timed Writing Practice', 'Peer Assessment Writing Tasks'],
    flashcards: ['Writing Vocabulary', 'Connectives & Transitions'],
  },
  reading: {
    lessons: ['Active Reading Strategies', 'Inference & Deduction Skills'],
    modules: ['Reading Comprehension Core', 'Advanced Analysis Skills'],
    practice: ['Unseen Text Practice', 'Summary & Synthesis Tasks'],
    flashcards: ['Reading Techniques', 'Subject Terminology'],
  },
  analysis: {
    lessons: ['Building an Analytical Response', 'Using Evidence Effectively'],
    modules: ['Critical Analysis Toolkit', 'Exam Response Framework'],
    practice: ['Analysis Practice Papers', 'PEE/PEEL Paragraph Practice'],
    flashcards: ['Analysis Keywords', 'Effect Descriptors'],
  },
  poetry: {
    lessons: ['Approaching Unseen Poetry', 'Comparing Poems Effectively'],
    modules: ['Poetry Analysis Core', 'Poetry Comparison Skills'],
    practice: ['Unseen Poetry Practice', 'Anthology Revision Questions'],
    flashcards: ['Poetic Devices', 'Poetry Vocabulary'],
  },
  shakespeare: {
    lessons: ['Approaching Shakespeare Essays', 'Context & Character Deep Dive'],
    modules: ['Shakespeare Study Guide', 'Quotation & Analysis Techniques'],
    practice: ['Shakespeare Extract Questions', 'Essay Planning Practice'],
    flashcards: ['Key Shakespeare Quotations', 'Shakespearean Vocabulary'],
  },
  general: {
    lessons: ['Revision Strategies Workshop', 'Exam Technique Masterclass'],
    modules: ['Core Skills Refresher', 'Exam Preparation Guide'],
    practice: ['Mixed Practice Paper', 'Timed Assessment Practice'],
    flashcards: ['Key Terms Glossary', 'Quick Revision Cards'],
  },
}

function matchWeakAreaCategory(weakArea: string): string {
  const lower = weakArea.toLowerCase()
  if (lower.includes('writ') || lower.includes('creative') || lower.includes('narrative')) return 'writing'
  if (lower.includes('read') || lower.includes('comprehension')) return 'reading'
  if (lower.includes('analy') || lower.includes('language')) return 'analysis'
  if (lower.includes('poetry') || lower.includes('poem') || lower.includes('unseen')) return 'poetry'
  if (lower.includes('shakesp')) return 'shakespeare'
  return 'general'
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function mapWeakAreasToResources(
  weakAreas: string[],
  board: string
): ResourceRecommendation[] {
  const resources: ResourceRecommendation[] = []
  const boardResources = BOARD_RESOURCE_MAP[board] ?? {}

  for (const area of weakAreas) {
    const category = matchWeakAreaCategory(area)
    const areaSlug = slugify(area)

    // Try board-specific first, then fall back to generic
    const boardMatch = Object.entries(boardResources).find(([key]) =>
      areaSlug.includes(key) || key.includes(category)
    )
    const source = boardMatch ? boardMatch[1] : (GENERIC_RESOURCES[category] ?? GENERIC_RESOURCES.general)

    // Lesson plans
    for (const lesson of source.lessons) {
      resources.push({
        id: `lp-${slugify(lesson)}`,
        type: 'lesson_plan',
        title: lesson,
        description: `Targeted lesson plan to address gaps in ${area}.`,
        duration_minutes: 60,
        reason: `Class performance in "${area}" is below target. This lesson addresses the core concepts.`,
        weak_area: area,
        href: `/courses?focus=${encodeURIComponent(areaSlug)}`,
      })
    }

    // Course modules
    for (const mod of source.modules) {
      resources.push({
        id: `cm-${slugify(mod)}`,
        type: 'course_module',
        title: mod,
        description: `Structured course module covering ${area} fundamentals.`,
        duration_minutes: 45,
        reason: `Students need structured practice in "${area}" to build confidence.`,
        weak_area: area,
        href: `/courses?focus=${encodeURIComponent(areaSlug)}`,
      })
    }

    // Practice questions
    for (const pq of source.practice) {
      resources.push({
        id: `pq-${slugify(pq)}`,
        type: 'practice_questions',
        title: pq,
        description: `Exam-style practice questions focused on ${area}.`,
        duration_minutes: 30,
        reason: `Regular practice will help consolidate understanding of "${area}".`,
        weak_area: area,
        href: `/practice?topic=${encodeURIComponent(areaSlug)}`,
      })
    }

    // Flashcard decks
    for (const fc of source.flashcards) {
      resources.push({
        id: `fc-${slugify(fc)}`,
        type: 'flashcard_deck',
        title: fc,
        description: `Flashcard deck for key terminology and concepts in ${area}.`,
        duration_minutes: 15,
        reason: `Spaced repetition helps embed knowledge of "${area}" terminology.`,
        weak_area: area,
        href: `/practice?mode=flashcards&topic=${encodeURIComponent(areaSlug)}`,
      })
    }
  }

  return resources
}

// ── Study path generation ────────────────────────────────────────────────────

export function generateStudyPath(
  weakAreas: string[],
  board: string,
  weeks: number
): WeeklyPlan[] {
  const allResources = mapWeakAreasToResources(weakAreas, board)
  const plans: WeeklyPlan[] = []

  // Prioritise: lesson plans first, then modules, then practice, then flashcards
  const typeOrder: ResourceRecommendation['type'][] = [
    'lesson_plan',
    'course_module',
    'practice_questions',
    'flashcard_deck',
  ]

  // Distribute resources across weeks
  // Each week focuses on 1-2 weak areas, with a mix of resource types
  const areasPerWeek = Math.max(1, Math.ceil(weakAreas.length / weeks))

  for (let w = 0; w < weeks; w++) {
    const weekAreas = weakAreas.slice(
      w * areasPerWeek,
      Math.min((w + 1) * areasPerWeek, weakAreas.length)
    )

    // If we've run out of unique areas, cycle back
    const focusAreas =
      weekAreas.length > 0
        ? weekAreas
        : [weakAreas[w % weakAreas.length]]

    // Get resources for this week's focus areas
    const weekResources: ResourceRecommendation[] = []
    for (const area of focusAreas) {
      const areaResources = allResources.filter((r) => r.weak_area === area)

      // Pick a balanced mix for this week
      for (const type of typeOrder) {
        const ofType = areaResources.filter((r) => r.type === type)
        if (ofType.length > 0) {
          // Rotate through available resources based on week number
          const idx = w % ofType.length
          weekResources.push(ofType[idx])
        }
      }
    }

    // Determine week theme
    const theme =
      focusAreas.length === 1
        ? `Deep dive: ${focusAreas[0]}`
        : `Focus: ${focusAreas.join(' & ')}`

    // Target outcome
    const phaseNames = ['Foundation & Understanding', 'Practice & Application', 'Consolidation & Mastery', 'Revision & Assessment']
    const phase = phaseNames[Math.min(w, phaseNames.length - 1)]

    plans.push({
      week: w + 1,
      theme,
      resources: weekResources,
      focus_areas: focusAreas,
      target_outcome: `${phase} — Students should be able to demonstrate improved performance in ${focusAreas.join(', ')}.`,
    })
  }

  return plans
}

// ── New types for enhanced recommendation engine ─────────────────────────────

export interface LessonSlot {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'
  lessonNumber: number
  title: string
  focusSkill: string
  objectiveSummary: string
  linkedResources: ResourceRecommendation[]
  durationMinutes: number
  lessonPlanId: string
}

export interface WeeklyTeachingPlan {
  weekStarting: string
  examBoard: string
  classId: string
  overallTheme: string
  targetWeakAreas: string[]
  lessons: LessonSlot[]
  homeworkSuggestion: string
  expectedOutcome: string
}

export interface InterventionRecommendation {
  studentId: string
  studentName: string
  priorityLevel: 'urgent' | 'high' | 'medium'
  weakSkillAreas: string[]
  interventionType: 'one-to-one' | 'small-group' | 'targeted-homework' | 'peer-mentoring' | 'parental-engagement'
  estimatedWeeksToImprove: number
  currentAvgScore: number
  targetScore: number
  linkedResources: {
    lessons: ResourceRecommendation[]
    flashcards: ResourceRecommendation[]
    practiceQuestions: ResourceRecommendation[]
  }
  rationale: string
}

export interface ParentUpdateSummary {
  studentId: string
  studentName: string
  generatedDate: string
  doingWell: string[]
  areasForDevelopment: string[]
  homeRevisionSuggestions: string[]
  recommendedMinutesPerWeek: number
  overallTrajectory: 'improving' | 'stable' | 'declining'
  encouragementNote: string
}

export interface GradeTrajectory {
  studentId: string
  studentName: string
  currentAvgScore: number
  weeksUntilExam: number
  currentTrajectory: 'improving' | 'stable' | 'declining'
  predictedGrade: string
  gradeIfEffortIncreases: string
  gradeIfEffortDecreases: string
  keyActionsToReachTarget: string[]
  confidenceLevel: 'high' | 'medium' | 'low'
  weeklyProgressNeeded: number
}

export interface QuickWin {
  type: 'grade-boundary' | 'high-impact-skill' | 'exam-weighted-topic'
  title: string
  description: string
  affectedStudentIds: string[]
  affectedStudentCount: number
  currentAvgScore: number
  targetScore: number
  estimatedEffortHours: number
  potentialGradeImpact: string
  linkedResources: ResourceRecommendation[]
}

export interface QuickWinsResult {
  classId: string
  className: string
  quickWins: QuickWin[]
  totalStudentsBenefiting: number
  summary: string
}

export interface PeerGroupComparison {
  classId: string
  className: string
  overallPercentile: number
  platformAvgScore: number
  classAvgScore: number
  skillComparisons: {
    skill: string
    classAvg: number
    platformAvg: number
    percentile: number
    status: 'outperforming' | 'on-par' | 'underperforming'
  }[]
  areasOutperforming: string[]
  areasUnderperforming: string[]
  summary: string
}

// ── Grade boundary helpers ───────────────────────────────────────────────────

const GRADE_BOUNDARIES: { grade: string; minScore: number }[] = [
  { grade: '9', minScore: 90 },
  { grade: '8', minScore: 80 },
  { grade: '7', minScore: 70 },
  { grade: '6', minScore: 60 },
  { grade: '5', minScore: 50 },
  { grade: '4', minScore: 40 },
  { grade: '3', minScore: 30 },
  { grade: '2', minScore: 20 },
  { grade: '1', minScore: 10 },
  { grade: 'U', minScore: 0 },
]

function scoreToGrade(score: number): string {
  for (const boundary of GRADE_BOUNDARIES) {
    if (score >= boundary.minScore) return boundary.grade
  }
  return 'U'
}

function getNextGradeBoundary(score: number): { grade: string; minScore: number } | null {
  for (let i = GRADE_BOUNDARIES.length - 1; i >= 0; i--) {
    if (GRADE_BOUNDARIES[i].minScore > score) {
      return GRADE_BOUNDARIES[i]
    }
  }
  return null
}

// ── Skill-to-exam-weight mapping (approximate GCSE English weighting) ────────

const SKILL_EXAM_WEIGHT: Record<string, number> = {
  'Creative Writing': 0.15,
  'Descriptive Writing': 0.10,
  'Language Techniques': 0.12,
  'Comprehension': 0.12,
  'Critical Analysis': 0.10,
  'Poetry Analysis': 0.08,
  'Shakespeare': 0.08,
  'Quotation': 0.06,
  'Inference': 0.05,
  'Vocabulary': 0.04,
  'Sentence Structure': 0.04,
  'Persuasion': 0.03,
  'Comparison': 0.03,
}

function getExamWeight(skill: string): number {
  // Try direct match
  if (SKILL_EXAM_WEIGHT[skill] !== undefined) return SKILL_EXAM_WEIGHT[skill]
  // Try partial match
  const lower = skill.toLowerCase()
  for (const [key, weight] of Object.entries(SKILL_EXAM_WEIGHT)) {
    if (lower.includes(key.toLowerCase()) || key.toLowerCase().includes(lower)) {
      return weight
    }
  }
  return 0.03 // default small weight
}

// ── Platform average simulation (used for peer comparison) ───────────────────

const PLATFORM_SKILL_AVERAGES: Record<string, number> = {
  'Imagination': 62,
  'Vocabulary': 58,
  'Sentence Structure': 55,
  'Descriptive Writing': 60,
  'Comprehension': 64,
  'Inference': 59,
  'Language Techniques': 56,
  'Critical Analysis': 52,
  'Poetry Analysis': 50,
  'Comparison': 54,
  'Critical Thinking': 53,
  'Shakespeare': 48,
  'Contextual Understanding': 55,
  'Character Analysis': 58,
  'Quotation': 51,
  'Narrative Techniques': 57,
  'Tone': 60,
  'Perspective': 56,
  'Text Structure': 59,
  'Cohesion': 57,
  'Argument Building': 54,
  'Persuasion': 61,
  'Formal Writing': 55,
  'Audience Awareness': 58,
  'Rhetoric': 53,
  'Memory Recall': 62,
  'Prose Analysis': 54,
  'Theme Analysis': 56,
  'Speaking Skills': 65,
  'Listening': 67,
  'Summary': 60,
  'Modern Context': 58,
  'Structure Analysis': 55,
  'Debate': 60,
  'Presentation': 63,
  'Writing': 58,
  'Grammar': 60,
  'General English': 57,
}

function getPlatformAverage(skill: string): number {
  return PLATFORM_SKILL_AVERAGES[skill] ?? 57
}

// ── 1. generateWeeklyTeachingPlan ────────────────────────────────────────────

export function generateWeeklyTeachingPlan(
  classAnalytics: AnalyticsClassAnalytics,
  weakAreas: WeakArea[],
  examBoard: string
): WeeklyTeachingPlan {
  const days: LessonSlot['day'][] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

  // Sort weak areas by severity then by score (worst first)
  const sortedWeakAreas = [...weakAreas].sort((a, b) => {
    const severityOrder = { critical: 0, warning: 1, minor: 2 }
    const sevDiff = severityOrder[a.severity] - severityOrder[b.severity]
    if (sevDiff !== 0) return sevDiff
    return a.avgScore - b.avgScore
  })

  // Take top 5 weak areas (one per lesson), cycling if fewer than 5
  const targetAreas = sortedWeakAreas.slice(0, 5)
  const targetAreaNames = targetAreas.map((wa) => wa.moduleName)

  const lessons: LessonSlot[] = days.map((day, i) => {
    const areaIndex = i % Math.max(targetAreas.length, 1)
    const area = targetAreas[areaIndex]
    const areaName = area?.moduleName ?? 'General Revision'
    const areaCategory = matchWeakAreaCategory(areaName)

    // Generate resources for this specific area
    const areaResources = mapWeakAreasToResources([areaName], examBoard)
    const lessonResources = areaResources.filter((r) => r.type === 'lesson_plan')
    const supportResources = areaResources.filter((r) => r.type !== 'lesson_plan').slice(0, 2)
    const linkedResources = [...lessonResources.slice(0, 1), ...supportResources]

    const lessonPlanId = lessonResources.length > 0
      ? lessonResources[0].id
      : `lp-${slugify(areaName)}-day-${i + 1}`

    // Vary lesson type across the week
    const lessonTypes = [
      'Introduction & direct teaching',
      'Guided practice & modelling',
      'Independent application',
      'Peer collaboration & feedback',
      'Assessment & consolidation',
    ]

    return {
      day,
      lessonNumber: i + 1,
      title: `${areaName} — ${lessonTypes[i]}`,
      focusSkill: areaCategory,
      objectiveSummary: area
        ? `Address ${area.severity} weakness in ${areaName} (current avg: ${area.avgScore}%). ${area.studentsBelowThreshold} student${area.studentsBelowThreshold !== 1 ? 's' : ''} below threshold.`
        : `General revision and consolidation of key skills.`,
      linkedResources,
      durationMinutes: 60,
      lessonPlanId,
    }
  })

  const today = new Date()
  const dayOfWeek = today.getDay()
  const mondayOffset = dayOfWeek === 0 ? 1 : dayOfWeek === 1 ? 0 : 8 - dayOfWeek
  const nextMonday = new Date(today)
  nextMonday.setDate(today.getDate() + mondayOffset)
  const weekStarting = nextMonday.toISOString().split('T')[0]

  return {
    weekStarting,
    examBoard,
    classId: classAnalytics.classId,
    overallTheme: targetAreaNames.length > 0
      ? `Targeted intervention: ${targetAreaNames.slice(0, 3).join(', ')}${targetAreaNames.length > 3 ? ' and more' : ''}`
      : 'General skills consolidation',
    targetWeakAreas: targetAreaNames,
    lessons,
    homeworkSuggestion: targetAreas.length > 0
      ? `Assign practice questions on ${targetAreaNames[0]}. Recommend 20-30 minutes of flashcard revision covering ${targetAreaNames.slice(0, 2).join(' and ')}.`
      : 'Assign mixed revision tasks covering core skills.',
    expectedOutcome: `By end of week, students should show measurable improvement in ${targetAreaNames.slice(0, 2).join(' and ')}. Target: +5-10% on weak area scores.`,
  }
}

// ── 2. generateInterventionRecommendations ───────────────────────────────────

export function generateInterventionRecommendations(
  students: AnalyticsStudentAnalytics[]
): InterventionRecommendation[] {
  const recommendations: InterventionRecommendation[] = []

  for (const student of students) {
    // Determine if student is at risk
    const avgScore = student.avgQuizScore
    const trajectory = student.trajectory
    const completionRate = student.completionRate

    // Determine priority level
    let priorityLevel: InterventionRecommendation['priorityLevel'] | null = null
    if (avgScore < 30 || (avgScore < 40 && trajectory === 'declining')) {
      priorityLevel = 'urgent'
    } else if (avgScore < 50 || (avgScore < 60 && trajectory === 'declining')) {
      priorityLevel = 'high'
    } else if (avgScore < 60 && trajectory !== 'improving') {
      priorityLevel = 'medium'
    } else if (completionRate < 30 && avgScore < 65) {
      priorityLevel = 'medium'
    }

    // Skip students who don't need intervention
    if (priorityLevel === null) continue

    // Identify weak skill areas from their weaknesses
    const weakSkillAreas = student.weaknesses.map((w) => w.courseName)

    // Determine intervention type based on severity and pattern
    let interventionType: InterventionRecommendation['interventionType']
    if (priorityLevel === 'urgent') {
      interventionType = 'one-to-one'
    } else if (priorityLevel === 'high' && completionRate < 40) {
      interventionType = 'parental-engagement'
    } else if (priorityLevel === 'high') {
      interventionType = 'small-group'
    } else if (completionRate < 50) {
      interventionType = 'targeted-homework'
    } else {
      interventionType = 'peer-mentoring'
    }

    // Estimate weeks to improve based on current gap
    const targetScore = 60
    const gap = Math.max(0, targetScore - avgScore)
    // Assume ~3-5% improvement per week with intervention
    const weeklyGain = priorityLevel === 'urgent' ? 3 : priorityLevel === 'high' ? 4 : 5
    const estimatedWeeks = Math.ceil(gap / weeklyGain)

    // Get linked resources for their weak areas
    const weakAreaNames = weakSkillAreas.length > 0 ? weakSkillAreas : ['General English']
    const allResources = mapWeakAreasToResources(weakAreaNames, student.examBoard ?? 'AQA')

    const lessonResources = allResources.filter((r) => r.type === 'lesson_plan').slice(0, 3)
    const flashcardResources = allResources.filter((r) => r.type === 'flashcard_deck').slice(0, 2)
    const practiceResources = allResources.filter((r) => r.type === 'practice_questions').slice(0, 2)

    // Rationale
    const trajectoryText = trajectory === 'declining' ? 'performance is declining' : trajectory === 'stable' ? 'performance is stagnant' : 'showing some improvement but still below target'
    const rationale = `${student.fullName ?? 'This student'} has an average of ${percentageToGCSEGradeLabel(avgScore)} and ${trajectoryText}. ${completionRate < 50 ? `Completion rate is only ${completionRate}%, suggesting engagement issues. ` : ''}Weakest areas: ${weakSkillAreas.slice(0, 3).join(', ') || 'general skills'}.`

    recommendations.push({
      studentId: student.studentId,
      studentName: student.fullName ?? student.email,
      priorityLevel,
      weakSkillAreas,
      interventionType,
      estimatedWeeksToImprove: estimatedWeeks,
      currentAvgScore: avgScore,
      targetScore,
      linkedResources: {
        lessons: lessonResources,
        flashcards: flashcardResources,
        practiceQuestions: practiceResources,
      },
      rationale,
    })
  }

  // Sort by priority: urgent first, then high, then medium
  const priorityOrder = { urgent: 0, high: 1, medium: 2 }
  recommendations.sort((a, b) => priorityOrder[a.priorityLevel] - priorityOrder[b.priorityLevel])

  return recommendations
}

// ── 3. generateParentUpdateSummary ───────────────────────────────────────────

export function generateParentUpdateSummary(
  student: AnalyticsStudentAnalytics
): ParentUpdateSummary {
  const avgScore = student.avgQuizScore

  // Identify what they're doing well
  const doingWell: string[] = []
  for (const strength of student.strengths.slice(0, 3)) {
    if (strength.avgScore >= 70) {
      doingWell.push(`Performing strongly in ${strength.courseName} (${percentageToGCSEGradeLabel(strength.avgScore)})`)
    } else if (strength.avgScore >= 50) {
      doingWell.push(`Making good progress in ${strength.courseName}`)
    }
  }
  if (student.trajectory === 'improving') {
    doingWell.push('Showing a positive upward trend in recent work')
  }
  if (student.completionRate >= 80) {
    doingWell.push('Consistently completing assigned work on time')
  }
  if (student.certificates > 0) {
    doingWell.push(`Has earned ${student.certificates} certificate${student.certificates !== 1 ? 's' : ''}, demonstrating strong commitment`)
  }
  if (student.practiceSessions >= 10) {
    doingWell.push('Regularly engaging with additional practice materials')
  }
  // Ensure at least one positive point
  if (doingWell.length === 0) {
    doingWell.push('Engaging with the course materials and working towards their targets')
  }

  // Areas for development — diplomatic phrasing
  const areasForDevelopment: string[] = []
  for (const weakness of student.weaknesses.slice(0, 3)) {
    if (weakness.avgScore < 30) {
      areasForDevelopment.push(`Would benefit from additional support in ${weakness.courseName} to build foundational understanding`)
    } else if (weakness.avgScore < 50) {
      areasForDevelopment.push(`${weakness.courseName} is an area where focused revision would help build confidence`)
    } else {
      areasForDevelopment.push(`There is room to strengthen skills in ${weakness.courseName} with regular practice`)
    }
  }
  if (student.completionRate < 50) {
    areasForDevelopment.push('Completing more of the set work would help reinforce classroom learning')
  }
  if (student.trajectory === 'declining') {
    areasForDevelopment.push('Recent results suggest a dip in performance — a refreshed revision routine could help')
  }

  // Home revision suggestions
  const homeRevisionSuggestions: string[] = []
  const weakAreaNames = student.weaknesses.map((w) => w.courseName)

  if (weakAreaNames.length > 0) {
    homeRevisionSuggestions.push(`Focus revision time on ${weakAreaNames.slice(0, 2).join(' and ')} using the flashcard decks on the platform`)
  }
  homeRevisionSuggestions.push('Use the practice question feature to attempt exam-style questions under timed conditions')
  if (student.completionRate < 70) {
    homeRevisionSuggestions.push('Encourage completing any unfinished course modules before moving on to new topics')
  }
  homeRevisionSuggestions.push('Short, regular revision sessions (15-20 minutes daily) are more effective than longer, infrequent sessions')
  if (avgScore < 50) {
    homeRevisionSuggestions.push('Reading for pleasure for 15 minutes a day can significantly improve comprehension and vocabulary')
  }

  // Time recommendation based on current performance
  let recommendedMinutes: number
  if (avgScore < 40) {
    recommendedMinutes = 180 // 3 hours
  } else if (avgScore < 55) {
    recommendedMinutes = 120 // 2 hours
  } else if (avgScore < 70) {
    recommendedMinutes = 90
  } else {
    recommendedMinutes = 60
  }

  // Encouragement note
  let encouragementNote: string
  if (student.trajectory === 'improving') {
    encouragementNote = `${student.fullName ?? 'Your child'} is making clear progress and should be encouraged to keep up the great work. Consistent effort will continue to pay off.`
  } else if (avgScore >= 60) {
    encouragementNote = `${student.fullName ?? 'Your child'} is performing well overall. With targeted revision on the areas mentioned above, there is strong potential to achieve an even higher grade.`
  } else {
    encouragementNote = `With the right support and a consistent revision routine, ${student.fullName ?? 'your child'} has every opportunity to improve. The platform resources are designed to make this as straightforward as possible.`
  }

  return {
    studentId: student.studentId,
    studentName: student.fullName ?? student.email,
    generatedDate: new Date().toISOString().split('T')[0],
    doingWell,
    areasForDevelopment,
    homeRevisionSuggestions,
    recommendedMinutesPerWeek: recommendedMinutes,
    overallTrajectory: student.trajectory,
    encouragementNote,
  }
}

// ── 4. predictGradeTrajectory ────────────────────────────────────────────────

export function predictGradeTrajectory(
  student: AnalyticsStudentAnalytics,
  weeksUntilExam: number
): GradeTrajectory {
  const currentScore = student.avgQuizScore
  const trajectory = student.trajectory

  // Calculate weekly progress rate from trajectory
  let weeklyProgressRate: number
  switch (trajectory) {
    case 'improving':
      weeklyProgressRate = 1.5
      break
    case 'stable':
      weeklyProgressRate = 0.3
      break
    case 'declining':
      weeklyProgressRate = -0.8
      break
  }

  // Predicted score at exam time (capped at 100)
  const predictedScore = Math.min(100, Math.max(0, Math.round(currentScore + weeklyProgressRate * weeksUntilExam)))

  // Score if effort increases by 25%
  const increasedRate = weeklyProgressRate >= 0
    ? weeklyProgressRate * 1.25 + 0.5
    : weeklyProgressRate * 0.5 + 1.0 // declining students who increase effort flip towards positive
  const increasedScore = Math.min(100, Math.max(0, Math.round(currentScore + increasedRate * weeksUntilExam)))

  // Score if effort decreases by 25%
  const decreasedRate = weeklyProgressRate >= 0
    ? weeklyProgressRate * 0.75 - 0.3
    : weeklyProgressRate * 1.25 - 0.3
  const decreasedScore = Math.min(100, Math.max(0, Math.round(currentScore + decreasedRate * weeksUntilExam)))

  const predictedGrade = scoreToGrade(predictedScore)
  const gradeIfIncrease = scoreToGrade(increasedScore)
  const gradeIfDecrease = scoreToGrade(decreasedScore)

  // Key actions to reach target grade (next grade boundary up)
  const nextBoundary = getNextGradeBoundary(currentScore)
  const keyActions: string[] = []

  if (nextBoundary) {
    const pointsNeeded = nextBoundary.minScore - currentScore
    const weeklyPointsNeeded = weeksUntilExam > 0 ? Math.ceil(pointsNeeded / weeksUntilExam) : pointsNeeded

    keyActions.push(`Aim to improve by ${weeklyPointsNeeded}% per week to reach grade ${nextBoundary.grade} (need ${pointsNeeded} more marks)`)
  }

  // Add weakness-specific actions
  for (const weakness of student.weaknesses.slice(0, 2)) {
    if (weakness.avgScore < 40) {
      keyActions.push(`Prioritise intensive revision in ${weakness.courseName} — currently at ${weakness.avgScore}%`)
    } else {
      keyActions.push(`Regular practice in ${weakness.courseName} to move from ${weakness.avgScore}% towards 60%+`)
    }
  }

  if (student.completionRate < 60) {
    keyActions.push(`Complete outstanding modules (currently ${student.completionRate}% completion) to ensure full syllabus coverage`)
  }

  if (student.practiceSessions < 5) {
    keyActions.push('Increase use of practice questions to build exam technique and confidence')
  }

  keyActions.push('Maintain consistent daily revision of 20-30 minutes rather than occasional long sessions')

  // Confidence level based on data available
  let confidenceLevel: GradeTrajectory['confidenceLevel']
  const dataPoints = student.quizScores.length + student.assessmentScores.length
  if (dataPoints >= 10 && weeksUntilExam <= 20) {
    confidenceLevel = 'high'
  } else if (dataPoints >= 5) {
    confidenceLevel = 'medium'
  } else {
    confidenceLevel = 'low'
  }

  // Weekly progress needed to reach next grade boundary
  const weeklyProgressNeeded = nextBoundary && weeksUntilExam > 0
    ? Math.round(((nextBoundary.minScore - currentScore) / weeksUntilExam) * 10) / 10
    : 0

  return {
    studentId: student.studentId,
    studentName: student.fullName ?? student.email,
    currentAvgScore: currentScore,
    weeksUntilExam,
    currentTrajectory: trajectory,
    predictedGrade,
    gradeIfEffortIncreases: gradeIfIncrease,
    gradeIfEffortDecreases: gradeIfDecrease,
    keyActionsToReachTarget: keyActions,
    confidenceLevel,
    weeklyProgressNeeded,
  }
}

// ── 5. identifyQuickWins ─────────────────────────────────────────────────────

export function identifyQuickWins(
  classAnalytics: AnalyticsClassAnalytics
): QuickWinsResult {
  const quickWins: QuickWin[] = []
  const examBoard = classAnalytics.examBoard ?? 'AQA'

  // --- Quick Win Type 1: Students just below grade boundaries ---
  for (const boundary of GRADE_BOUNDARIES) {
    // Find students within 5 marks below this boundary
    const justBelow = classAnalytics.students.filter((s) => {
      const score = s.avgQuizScore
      return score >= boundary.minScore - 5 && score < boundary.minScore
    })

    if (justBelow.length > 0) {
      const avgScore = Math.round(justBelow.reduce((sum, s) => sum + s.avgQuizScore, 0) / justBelow.length)
      const studentIds = justBelow.map((s) => s.studentId)

      // Get resources for these students' weakest areas
      const commonWeakAreas = findCommonWeakAreas(justBelow)
      const resources = mapWeakAreasToResources(commonWeakAreas.slice(0, 2), examBoard)

      quickWins.push({
        type: 'grade-boundary',
        title: `${justBelow.length} student${justBelow.length !== 1 ? 's' : ''} within 5 marks of grade ${boundary.grade}`,
        description: `These students are averaging ${avgScore}% and need to reach ${boundary.minScore}% for grade ${boundary.grade}. A focused push on their weakest areas could move them up a grade.`,
        affectedStudentIds: studentIds,
        affectedStudentCount: justBelow.length,
        currentAvgScore: avgScore,
        targetScore: boundary.minScore,
        estimatedEffortHours: Math.ceil((boundary.minScore - avgScore) * 0.5),
        potentialGradeImpact: `Move from grade ${scoreToGrade(avgScore)} to grade ${boundary.grade}`,
        linkedResources: resources.slice(0, 4),
      })
    }
  }

  // --- Quick Win Type 2: Skills with low scores but high exam impact ---
  for (const weakArea of classAnalytics.weakAreas) {
    const examWeight = getExamWeight(weakArea.moduleName)
    // High impact = high exam weight AND low current score (lots of room for gain)
    const impactScore = examWeight * (100 - weakArea.avgScore)

    if (impactScore > 2.0 && weakArea.avgScore < 60) {
      const affectedStudents = classAnalytics.students.filter((s) =>
        s.weaknesses.some((w) => w.courseId === weakArea.courseId)
      )
      const resources = mapWeakAreasToResources([weakArea.moduleName], examBoard)

      quickWins.push({
        type: 'high-impact-skill',
        title: `${weakArea.moduleName} — high exam weight, low score`,
        description: `This skill accounts for approximately ${Math.round(examWeight * 100)}% of the exam but the class averages only ${weakArea.avgScore}%. Improving here yields disproportionate grade gains.`,
        affectedStudentIds: affectedStudents.map((s) => s.studentId),
        affectedStudentCount: affectedStudents.length,
        currentAvgScore: weakArea.avgScore,
        targetScore: 60,
        estimatedEffortHours: Math.ceil((60 - weakArea.avgScore) * 0.3),
        potentialGradeImpact: `+${Math.round(examWeight * (60 - weakArea.avgScore))}% estimated exam score improvement`,
        linkedResources: resources.slice(0, 4),
      })
    }
  }

  // --- Quick Win Type 3: Topics with upcoming exam weighting ---
  // Identify weak areas that are commonly exam-weighted and have the most students below threshold
  const examWeightedWeak = classAnalytics.weakAreas
    .filter((wa) => wa.studentsBelowThreshold >= 3)
    .sort((a, b) => {
      const weightA = getExamWeight(a.moduleName)
      const weightB = getExamWeight(b.moduleName)
      return (weightB * b.studentsBelowThreshold) - (weightA * a.studentsBelowThreshold)
    })
    .slice(0, 3)

  for (const area of examWeightedWeak) {
    // Only add if not already covered by type 2
    const alreadyCovered = quickWins.some(
      (qw) => qw.type === 'high-impact-skill' && qw.title.includes(area.moduleName)
    )
    if (alreadyCovered) continue

    const affectedStudents = classAnalytics.students.filter((s) =>
      s.weaknesses.some((w) => w.courseId === area.courseId)
    )
    const resources = mapWeakAreasToResources([area.moduleName], examBoard)

    quickWins.push({
      type: 'exam-weighted-topic',
      title: `${area.moduleName} — ${area.studentsBelowThreshold} students below threshold`,
      description: `${area.studentsBelowThreshold} students are scoring below 50% in ${area.moduleName}. This topic carries significant exam weight and targeted revision could benefit a large portion of the class.`,
      affectedStudentIds: affectedStudents.map((s) => s.studentId),
      affectedStudentCount: affectedStudents.length,
      currentAvgScore: area.avgScore,
      targetScore: 55,
      estimatedEffortHours: Math.ceil((55 - area.avgScore) * 0.4),
      potentialGradeImpact: `Could move ${area.studentsBelowThreshold} students above the pass threshold`,
      linkedResources: resources.slice(0, 4),
    })
  }

  // Sort quick wins by effort-to-impact ratio (lowest effort, highest student count first)
  quickWins.sort((a, b) => {
    const ratioA = a.estimatedEffortHours / Math.max(a.affectedStudentCount, 1)
    const ratioB = b.estimatedEffortHours / Math.max(b.affectedStudentCount, 1)
    return ratioA - ratioB
  })

  const uniqueStudentIds = new Set(quickWins.flatMap((qw) => qw.affectedStudentIds))

  return {
    classId: classAnalytics.classId,
    className: classAnalytics.className,
    quickWins: quickWins.slice(0, 10),
    totalStudentsBenefiting: uniqueStudentIds.size,
    summary: quickWins.length > 0
      ? `Identified ${quickWins.length} quick win${quickWins.length !== 1 ? 's' : ''} that could benefit ${uniqueStudentIds.size} student${uniqueStudentIds.size !== 1 ? 's' : ''}. Focus on grade-boundary students and high-impact skills for the best return on teaching time.`
      : 'No significant quick wins identified — the class is performing consistently across skill areas.',
  }
}

function findCommonWeakAreas(students: AnalyticsStudentAnalytics[]): string[] {
  const areaCounts = new Map<string, number>()
  for (const student of students) {
    for (const weakness of student.weaknesses) {
      areaCounts.set(weakness.courseName, (areaCounts.get(weakness.courseName) ?? 0) + 1)
    }
  }
  return Array.from(areaCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([area]) => area)
}

// ── 6. compareToPeerGroups ───────────────────────────────────────────────────

export function compareToPeerGroups(
  classAnalytics: AnalyticsClassAnalytics
): PeerGroupComparison {
  // Build skill averages for this class from student data
  const classSkillScores = new Map<string, { total: number; count: number }>()

  for (const student of classAnalytics.students) {
    for (const score of student.quizScores) {
      const skills = inferSkillsFromModule(score.moduleId, score.moduleName)
      for (const skill of skills) {
        const entry = classSkillScores.get(skill) ?? { total: 0, count: 0 }
        entry.total += score.score
        entry.count++
        classSkillScores.set(skill, entry)
      }
    }
    // Also include strength/weakness data
    for (const strength of student.strengths) {
      const skills = inferSkillsFromModule(strength.courseId, strength.courseName)
      for (const skill of skills) {
        const entry = classSkillScores.get(skill) ?? { total: 0, count: 0 }
        entry.total += strength.avgScore
        entry.count++
        classSkillScores.set(skill, entry)
      }
    }
    for (const weakness of student.weaknesses) {
      const skills = inferSkillsFromModule(weakness.courseId, weakness.courseName)
      for (const skill of skills) {
        const entry = classSkillScores.get(skill) ?? { total: 0, count: 0 }
        entry.total += weakness.avgScore
        entry.count++
        classSkillScores.set(skill, entry)
      }
    }
  }

  const skillComparisons: PeerGroupComparison['skillComparisons'] = []
  const areasOutperforming: string[] = []
  const areasUnderperforming: string[] = []

  for (const [skill, data] of Array.from(classSkillScores.entries())) {
    const classAvg = Math.round(data.total / data.count)
    const platformAvg = getPlatformAverage(skill)

    // Calculate percentile (simplified normal distribution approximation)
    // Assume platform scores have a standard deviation of ~15
    const zScore = (classAvg - platformAvg) / 15
    const percentile = Math.min(99, Math.max(1, Math.round(50 + zScore * 34)))

    let status: 'outperforming' | 'on-par' | 'underperforming'
    if (classAvg >= platformAvg + 5) {
      status = 'outperforming'
      areasOutperforming.push(skill)
    } else if (classAvg <= platformAvg - 5) {
      status = 'underperforming'
      areasUnderperforming.push(skill)
    } else {
      status = 'on-par'
    }

    skillComparisons.push({
      skill,
      classAvg,
      platformAvg,
      percentile,
      status,
    })
  }

  // Sort by percentile descending
  skillComparisons.sort((a, b) => b.percentile - a.percentile)

  // Overall class percentile
  const classOverallAvg = classAnalytics.avgQuizScore
  const platformOverallAvg = 57 // weighted platform average
  const overallZ = (classOverallAvg - platformOverallAvg) / 15
  const overallPercentile = Math.min(99, Math.max(1, Math.round(50 + overallZ * 34)))

  // Summary
  const outCount = areasOutperforming.length
  const underCount = areasUnderperforming.length
  let summary: string
  if (outCount > underCount * 2) {
    summary = `This class is performing above the platform average overall (${overallPercentile}th percentile). Particularly strong in ${areasOutperforming.slice(0, 3).join(', ')}.`
  } else if (underCount > outCount * 2) {
    summary = `This class is performing below the platform average in several areas (${overallPercentile}th percentile). Priority areas for improvement: ${areasUnderperforming.slice(0, 3).join(', ')}.`
  } else {
    summary = `This class is broadly in line with the platform average (${overallPercentile}th percentile), with strengths in ${areasOutperforming.slice(0, 2).join(', ') || 'various areas'} and room for growth in ${areasUnderperforming.slice(0, 2).join(', ') || 'a few areas'}.`
  }

  return {
    classId: classAnalytics.classId,
    className: classAnalytics.className,
    overallPercentile,
    platformAvgScore: platformOverallAvg,
    classAvgScore: classOverallAvg,
    skillComparisons,
    areasOutperforming,
    areasUnderperforming,
    summary,
  }
}
