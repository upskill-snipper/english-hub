// ─── Lesson Plan Index & Recommendation Engine ─────────────────────────────
//
// Central registry for all lesson plans with search, filtering, and
// analytics-driven recommendation capabilities.

export type { LessonPlan, LessonActivity, WorksheetQuestion } from '@/types'
import type { LessonPlan } from '@/types'

// ─── Imports ────────────────────────────────────────────────────────────────

// Literature – Shakespeare
import { romeoJulietLessonPlans } from './romeo-juliet-lessons'
import { macbethLessons as macbethLessonPlans } from './macbeth-lessons'
import { shakespeareContextLessons } from './shakespeare-context-lessons'

// Literature – Prose & Drama
import { inspectorCallsLessonPlans } from './inspector-calls-lessons'
import { christmasCarolLessons as christmasCarolLessonPlans } from './christmas-carol-lessons'
import { jekyllHydeLessonPlans } from './jekyll-hyde-lessons'
import { lordOfFliesLessons as lordOfFliesLessonPlans } from './lord-of-flies-lessons'
import { animalFarmLessons as animalFarmLessonPlans } from './animal-farm-lessons'
import { greatExpectationsLessons } from './great-expectations-lessons'
import { bloodBrothersLessons } from './blood-brothers-lessons'
import { frankensteinLessons } from './frankenstein-lessons'
import { pridePrejudiceLessons } from './pride-prejudice-lessons'
import { nineteenthCenturyProseLessons } from './nineteenth-century-prose-lessons'

// Poetry
import { poetryLessonPlans } from './poetry-lessons'
import { poetryPowerConflictLessons as poetryPowerConflictLessonPlans } from './poetry-power-conflict-lessons'
import { poetryLoveRelationshipsLessons as poetryLoveRelationshipsLessonPlans } from './poetry-love-relationships-lessons'
import { unseenPoetryLessons } from './unseen-poetry-lessons'

// Language
import { languageP1LessonPlans } from './language-p1-lessons'
import { languageP2LessonPlans } from './language-p2-lessons'
import { languagePaper1Lessons as languagePaper1LessonPlans } from './language-paper1-lessons'
import { languagePaper2LessonPlans } from './language-paper2-lessons'
import { creativeWritingLessons } from './creative-writing-lessons'
import { nonFictionWritingLessons } from './non-fiction-writing-lessons'
import { grammarPunctuationLessons } from './grammar-punctuation-lessons'
import { readingComprehensionLessons } from './reading-comprehension-lessons'
import { spokenLanguageLessons } from './spoken-language-lessons'
import { mediaLiteracyLessons } from './media-literacy-lessons'

// KS3 & Other Boards
import { ks3Lessons as ks3LessonPlans } from './ks3-lessons'
import { edexcelLessons as edexcelLessonPlans } from './edexcel-lessons'
import { ocrWjecLessons as ocrWjecLessonPlans } from './ocr-wjec-lessons'
import { igcseLessons as igcseLessonPlans } from './igcse-lessons'

// Exam Skills & Revision
import { revisionTechniquesLessons } from './revision-techniques-lessons'

// ─── Master Array ───────────────────────────────────────────────────────────

export const ALL_LESSON_PLANS: LessonPlan[] = [
  // Literature – Shakespeare
  ...romeoJulietLessonPlans,
  ...macbethLessonPlans,
  ...shakespeareContextLessons,
  // Literature – Prose & Drama
  ...inspectorCallsLessonPlans,
  ...christmasCarolLessonPlans,
  ...jekyllHydeLessonPlans,
  ...lordOfFliesLessonPlans,
  ...animalFarmLessonPlans,
  ...greatExpectationsLessons,
  ...bloodBrothersLessons,
  ...frankensteinLessons,
  ...pridePrejudiceLessons,
  ...nineteenthCenturyProseLessons,
  // Poetry
  ...poetryLessonPlans,
  ...poetryPowerConflictLessonPlans,
  ...poetryLoveRelationshipsLessonPlans,
  ...unseenPoetryLessons,
  // Language
  ...languageP1LessonPlans,
  ...languageP2LessonPlans,
  ...languagePaper1LessonPlans,
  ...languagePaper2LessonPlans,
  ...creativeWritingLessons,
  ...nonFictionWritingLessons,
  ...grammarPunctuationLessons,
  ...readingComprehensionLessons,
  ...spokenLanguageLessons,
  ...mediaLiteracyLessons,
  // KS3 & Other Boards
  ...ks3LessonPlans,
  ...edexcelLessonPlans,
  ...ocrWjecLessonPlans,
  ...igcseLessonPlans,
  // Exam Skills & Revision
  ...revisionTechniquesLessons,
]

/** @deprecated Use ALL_LESSON_PLANS instead */
export const allLessonPlans: LessonPlan[] = ALL_LESSON_PLANS

// ─── Lookup Functions ───────────────────────────────────────────────────────

/** Get a single lesson plan by its unique id */
export function getLessonById(id: string): LessonPlan | undefined {
  return ALL_LESSON_PLANS.find((lp) => lp.id === id)
}

/** Get all lesson plans for a specific text (e.g. "Macbeth", "Poetry Anthology") */
export function getLessonsByText(text: string): LessonPlan[] {
  const q = text.toLowerCase()
  return ALL_LESSON_PLANS.filter((lp) => lp.text.toLowerCase().includes(q))
}

/** Get all lesson plans for a specific exam board */
export function getLessonsByBoard(board: string): LessonPlan[] {
  const q = board.toLowerCase()
  return ALL_LESSON_PLANS.filter(
    (lp) =>
      lp.board.toLowerCase() === q ||
      lp.board.toLowerCase() === 'universal' ||
      lp.board.toLowerCase() === 'all'
  )
}

/** Get all lesson plans matching a category (Literature, Language, Poetry, Exam Technique, KS3 Skills) */
export function getLessonsByCategory(category: string): LessonPlan[] {
  const q = category.toLowerCase()
  return ALL_LESSON_PLANS.filter((lp) => getLessonCategory(lp).toLowerCase() === q)
}

// ─── Legacy aliases (keep backward compatibility) ───────────────────────────

/** @deprecated Use getLessonsByText instead */
export const getByText = getLessonsByText

/** @deprecated Use getLessonsByBoard instead */
export const getByBoard = getLessonsByBoard

// ─── Category Helpers ───────────────────────────────────────────────────────

/**
 * Derive a category for a lesson based on its title, text and id.
 * Categories: 'Literature', 'Language', 'Poetry', 'Exam Technique', 'KS3 Skills'
 */
export function getLessonCategory(lp: LessonPlan): string {
  const titleLower = lp.title.toLowerCase()
  const idLower = lp.id.toLowerCase()

  // Poetry
  if (
    idLower.startsWith('poetry-') ||
    titleLower.includes('poetry') ||
    titleLower.includes('poem') ||
    titleLower.includes('anthology')
  ) {
    return 'Poetry'
  }

  // Language
  if (
    idLower.startsWith('lang-') ||
    titleLower.includes('language paper') ||
    titleLower.includes('paper 1') ||
    titleLower.includes('paper 2') ||
    titleLower.includes('creative writing') ||
    titleLower.includes('persuasive writing') ||
    titleLower.includes('transactional writing') ||
    titleLower.includes('non-fiction writing') ||
    titleLower.includes('non fiction writing') ||
    titleLower.includes('grammar') ||
    titleLower.includes('punctuation') ||
    titleLower.includes('spoken language') ||
    titleLower.includes('reading comprehension') ||
    titleLower.includes('media literacy')
  ) {
    return 'Language'
  }

  // Exam Technique
  if (
    titleLower.includes('exam') ||
    titleLower.includes('timed') ||
    titleLower.includes('revision') ||
    titleLower.includes('mark scheme') ||
    titleLower.includes('exam-simulation')
  ) {
    return 'Exam Technique'
  }

  // KS3
  if (idLower.startsWith('ks3-') || lp.yearGroup === 'KS3') {
    return 'KS3 Skills'
  }

  // Literature (default for set texts)
  return 'Literature'
}

/**
 * Derive a short display label for the text/topic.
 * For set texts returns the text name, for language/skills returns a summary.
 */
export function getTextLabel(lp: LessonPlan): string {
  // Set texts have short, recognisable text values
  const knownTexts = [
    'Macbeth',
    'A Christmas Carol',
    'Romeo and Juliet',
    'Lord of the Flies',
    'An Inspector Calls',
    'The Strange Case of Dr Jekyll and Mr Hyde',
    'Animal Farm',
    'Great Expectations',
    'Blood Brothers',
    'Frankenstein',
    'Pride and Prejudice',
  ]
  for (const t of knownTexts) {
    if (lp.text === t) return t
  }

  // Language and poetry lessons have long descriptions as text
  const idLower = lp.id.toLowerCase()
  const titleLower = lp.title.toLowerCase()
  if (idLower.startsWith('lang-p1') || idLower.startsWith('lang-paper1')) return 'Language Paper 1'
  if (idLower.startsWith('lang-p2') || idLower.startsWith('lang-paper2')) return 'Language Paper 2'
  if (idLower.startsWith('poetry-')) return 'Poetry Anthology'
  if (idLower.startsWith('ks3-')) return 'KS3 English'
  if (idLower.startsWith('edexcel-')) return 'Edexcel'
  if (idLower.startsWith('ocr-') || idLower.startsWith('wjec-')) return 'OCR/WJEC'
  if (idLower.startsWith('igcse-')) return 'IGCSE'
  if (idLower.startsWith('unseen-poetry') || titleLower.includes('unseen poetry')) return 'Unseen Poetry'
  if (idLower.startsWith('creative-writing') || titleLower.includes('creative writing')) return 'Creative Writing'
  if (idLower.startsWith('non-fiction') || titleLower.includes('non-fiction')) return 'Non-Fiction Writing'
  if (idLower.startsWith('grammar') || titleLower.includes('grammar')) return 'Grammar & Punctuation'
  if (idLower.startsWith('spoken-lang') || titleLower.includes('spoken language')) return 'Spoken Language'
  if (idLower.startsWith('reading-comp') || titleLower.includes('reading comprehension')) return 'Reading Comprehension'
  if (idLower.startsWith('revision') || titleLower.includes('revision')) return 'Revision Techniques'
  if (idLower.startsWith('media-lit') || titleLower.includes('media literacy')) return 'Media Literacy'
  if (idLower.startsWith('shakespeare-context') || titleLower.includes('shakespeare context')) return 'Shakespeare'
  if (idLower.startsWith('19c-prose') || titleLower.includes('nineteenth century')) return '19th Century Prose'

  // Fallback: truncate if too long
  if (lp.text.length > 40) return lp.text.slice(0, 37) + '...'
  return lp.text
}

/**
 * Derive a difficulty level from the yearGroup.
 */
export function getDifficulty(lp: LessonPlan): 'Foundation' | 'Intermediate' | 'Higher' {
  const yg = lp.yearGroup.toLowerCase()
  if (yg.includes('ks3') || yg.includes('7') || yg.includes('8') || yg.includes('9')) {
    return 'Foundation'
  }
  if (yg.includes('11') || yg.includes('12') || yg.includes('13')) {
    return 'Higher'
  }
  return 'Intermediate'
}

// ─── Filter / Search Functions ──────────────────────────────────────────────

/** Get all lesson plans targeting a specific skill */
export function getBySkill(skill: string): LessonPlan[] {
  const q = skill.toLowerCase()
  return ALL_LESSON_PLANS.filter((lp) =>
    lp.targetedSkills.some((s) => s.toLowerCase().includes(q))
  )
}

/** Full-text search across title, text, skills, objectives, and keywords */
export function searchLessons(query: string): LessonPlan[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  if (terms.length === 0) return []

  return ALL_LESSON_PLANS
    .map((lp) => {
      const searchable = [
        lp.title,
        lp.text,
        lp.board,
        ...lp.targetedSkills,
        ...lp.objectives,
        ...lp.keywords,
      ]
        .join(' ')
        .toLowerCase()

      const matchCount = terms.filter((t) => searchable.includes(t)).length
      return { lp, matchCount }
    })
    .filter(({ matchCount }) => matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    .map(({ lp }) => lp)
}

// ─── Weak Area → Skill Mapping ──────────────────────────────────────────────

const WEAK_AREA_SKILL_MAP: Record<string, string[]> = {
  // Literature skills
  'character analysis': ['Character Analysis', 'Character Development', 'Characterisation'],
  'theme analysis': ['Theme Analysis', 'Thematic Exploration', 'Theme Tracking'],
  'poetry comparison': ['Poetry Comparison', 'Comparative Analysis', 'Poetry Analysis'],
  'poetry analysis': ['Poetry Analysis', 'Poetry Comparison', 'Unseen Poetry'],
  'unseen poetry': ['Unseen Poetry', 'Poetry Analysis', 'Poetry Comparison'],
  'shakespeare': ['Shakespeare', 'Dramatic Techniques', 'Soliloquy Analysis'],
  'dramatic techniques': ['Dramatic Techniques', 'Stage Directions', 'Shakespeare'],
  'context': ['Contextual Understanding', 'Historical Context', 'Social Context'],
  'quotation usage': ['Quotation Embedding', 'Evidence Selection', 'PEE/PEEL'],

  // Language skills
  'language analysis': ['Language Analysis', 'Writer\'s Methods', 'Language Techniques'],
  'structure analysis': ['Structure Analysis', 'Structural Techniques', 'Narrative Structure'],
  'creative writing': ['Creative Writing', 'Descriptive Writing', 'Narrative Writing'],
  'descriptive writing': ['Descriptive Writing', 'Creative Writing', 'Sensory Language'],
  'narrative writing': ['Narrative Writing', 'Creative Writing', 'Story Structure'],
  'transactional writing': ['Transactional Writing', 'Persuasive Writing', 'Rhetorical Devices'],
  'persuasive writing': ['Persuasive Writing', 'Transactional Writing', 'Rhetorical Devices'],
  'reading comprehension': ['Reading Comprehension', 'Inference', 'Summary'],
  'evaluation': ['Evaluation', 'Critical Evaluation', 'Writer\'s Methods'],
  'comparison': ['Comparison', 'Comparative Analysis', 'Synthesis'],

  // Non-fiction & media skills
  'non-fiction writing': ['Non-Fiction Writing', 'Transactional Writing', 'Persuasive Writing'],
  'grammar': ['Grammar', 'Punctuation', 'SPaG', 'Sentence Structure'],
  'punctuation': ['Punctuation', 'Grammar', 'SPaG'],
  'spoken language': ['Spoken Language', 'Presentation Skills', 'Oracy'],
  'media literacy': ['Media Literacy', 'Media Analysis', 'Critical Thinking'],
  'revision': ['Revision Techniques', 'Exam Technique', 'Study Skills'],

  // General exam skills
  'essay structure': ['Essay Structure', 'PEE/PEEL', 'Paragraph Structure'],
  'pee/peel': ['PEE/PEEL', 'Essay Structure', 'Evidence Selection'],
  'exam technique': ['Exam Technique', 'Time Management', 'Question Decoding'],
  'spelling and grammar': ['SPaG', 'Proofreading', 'Technical Accuracy'],
}

// ─── Recommendation Engine ──────────────────────────────────────────────────

/**
 * Recommend lesson plans based on class analytics weak areas.
 *
 * Takes the weak area strings from analytics (e.g. WeakArea.moduleName values
 * like "Poetry Comparison", "Language Analysis", "Character Analysis") and
 * maps them to lesson plan targetedSkills to find relevant lessons.
 *
 * @param weakAreas - Array of weak area labels from analytics
 * @param board - Exam board to prefer (e.g. "AQA")
 * @param limit - Maximum number of recommendations (default 10)
 */
export function recommendLessons(
  weakAreas: string[],
  board: string,
  limit: number = 10
): LessonPlan[] {
  if (weakAreas.length === 0 || ALL_LESSON_PLANS.length === 0) return []

  // Build the full set of skills we're looking for, with weights
  const skillWeights: Record<string, number> = {}

  for (const area of weakAreas) {
    const normalised = area.toLowerCase().trim()

    // Direct match: highest weight
    skillWeights[normalised] = (skillWeights[normalised] ?? 0) + 3

    // Mapped skills: secondary weight
    const mapped = WEAK_AREA_SKILL_MAP[normalised]
    if (mapped) {
      for (const skill of mapped) {
        const key = skill.toLowerCase()
        skillWeights[key] = (skillWeights[key] ?? 0) + 2
      }
    }

    // Also try partial matches against the map keys
    for (const [mapKey, mapSkills] of Object.entries(WEAK_AREA_SKILL_MAP)) {
      if (mapKey.includes(normalised) || normalised.includes(mapKey)) {
        for (const skill of mapSkills) {
          const key = skill.toLowerCase()
          skillWeights[key] = (skillWeights[key] ?? 0) + 1
        }
      }
    }
  }

  const weightEntries = Object.entries(skillWeights)

  // Score each lesson plan
  const boardLower = board.toLowerCase()
  const scored = ALL_LESSON_PLANS.map((lp) => {
    let score = 0

    // Skill relevance scoring
    for (const skill of lp.targetedSkills) {
      const skillLower = skill.toLowerCase()

      // Check direct match against weighted skills
      const directWeight = skillWeights[skillLower]
      if (directWeight) {
        score += directWeight * 10
      }

      // Check partial matches
      for (const [weightKey, weight] of weightEntries) {
        if (skillLower !== weightKey && (skillLower.includes(weightKey) || weightKey.includes(skillLower))) {
          score += weight * 3
        }
      }
    }

    // Also check keywords for weak area relevance
    for (const keyword of lp.keywords) {
      const keyLower = keyword.toLowerCase()
      const keyWeight = skillWeights[keyLower]
      if (keyWeight) {
        score += keyWeight * 2
      }
    }

    // Board matching boost
    if (lp.board.toLowerCase() === boardLower) {
      score *= 1.5
    } else if (lp.board.toLowerCase() === 'universal' || lp.board.toLowerCase() === 'all') {
      score *= 1.1
    }

    return { lp, score }
  })

  return scored
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ lp }) => lp)
}
