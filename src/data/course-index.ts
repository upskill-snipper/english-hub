/**
 * Lightweight course metadata for catalogue/listing/dashboard surfaces.
 *
 * WHY THIS FILE EXISTS: every course's metadata lives in the same module as its
 * full lesson bodies and quizzes (~7.2 MB of source across 27 board files).
 * Before this index existed, the dashboard, the grade dashboard, the class
 * analytics page and the catalogue all called `loadAllCourses()` on mount and
 * pulled all 7.2 MB into the browser purely to render cards - titles, colours
 * and module counts. This module carries only the fields those surfaces read.
 *
 * GENERATED DATA. `COURSE_INDEX` and `COURSE_BOARD_KEYS` below are derived
 * from `allCourses` in ./courses and from the board modules listed in
 * BOARD_LOADERS in ./course-loader. If you add, remove or rename a course, or
 * change a course title/module list, this file must be regenerated - it is the
 * only thing the listing UI reads. `verifyCourseIndex()` in ./course-loader
 * runs in development on the server and logs an error describing any drift, so
 * a stale index is loud rather than silent.
 *
 * To regenerate: bundle ./courses with esbuild, map every course through
 * `toIndexEntry()` below for COURSE_INDEX, and map each board module in
 * BOARD_LOADERS to the ids it exports for COURSE_BOARD_KEYS.
 *
 * Import `allCourses` from './courses' only when you need full module content
 * (i.e. when a lesson is actually being rendered).
 */

import type { CourseData, CourseTier, CourseModule } from './courses'

export interface CourseIndexEntry {
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
  moduleCount: number
  /** Total quiz questions across all modules - shown on catalogue cards. */
  quizCount: number
  moduleList: Pick<CourseModule, 'id' | 'title' | 'duration'>[]
}

/**
 * Strips heavy content from a course for lightweight listing.
 * Keeps only what's needed for cards, filters, and navigation.
 */
export function toIndexEntry(course: CourseData): CourseIndexEntry {
  return {
    id: course.id,
    title: course.title,
    subtitle: course.subtitle,
    tier: course.tier,
    board: course.board,
    price: course.price,
    duration: course.duration,
    level: course.level,
    description: course.description,
    color: course.color,
    moduleCount: course.moduleList.length,
    quizCount: course.moduleList.reduce((sum, m) => sum + (m.quiz?.length ?? 0), 0),
    moduleList: course.moduleList.map((m) => ({
      id: m.id,
      title: m.title,
      duration: m.duration,
    })),
  }
}

/**
 * Board loader key for every known course id. Generated from the board modules
 * themselves, so it is exact.
 *
 * This replaces prefix-guessing as the primary route in `loadCourseById()`.
 * The old prefix heuristic mis-routed 13 of 87 courses (all nine ks3-y7/y8/y9
 * curriculum courses matched the broader `ks3-` rule first, the three
 * `igcse-lit-classic-*` courses matched `igcse-lit-` before `igcse-classic-`,
 * and `igcse-lit-drama-prose` matched the `igcse-lit-drama-` text rule), so
 * loading any of them by id returned undefined.
 */
export const COURSE_BOARD_KEYS: Record<string, string> = {
  'ks3-reading': 'ks3',
  'ks3-writing': 'ks3',
  'ks3-grammar': 'ks3',
  'ks3-poetry': 'ks3',
  'ks3-shakespeare': 'ks3',
  'ks3-media-literacy': 'ks3',
  'gcse-lang-reading': 'gcse',
  'gcse-lang-writing': 'gcse',
  'gcse-lit-poetry': 'gcse',
  'gcse-lit-prose': 'gcse',
  'gcse-revision-blitz': 'gcse',
  'edexcel-lang-paper1': 'edexcel',
  'edexcel-lang-paper2': 'edexcel',
  'edexcel-lit-paper1': 'edexcel-lit',
  'edexcel-lit-paper2': 'edexcel-lit',
  'edexcel-igcse-lang-a': 'igcse',
  'edexcel-igcse-lang-b': 'igcse',
  'igcse-lit-drama-prose': 'igcse-lit',
  'igcse-lit-poetry': 'igcse-lit',
  'wjec-lang-c1': 'wjec',
  'wjec-lang-c2': 'wjec',
  'ocr-lang-c1': 'ocr',
  'ocr-lang-c2': 'ocr',
  'aqa-lit-power-conflict': 'aqa-poetry-pc',
  'aqa-lit-love-relationships': 'aqa-poetry-lr',
  'aqa-lit-romeo-juliet': 'romeo-juliet',
  'aqa-lit-jekyll-hyde': 'jekyll-hyde',
  'gcse-lit-lord-of-flies': 'lord-of-flies',
  'gcse-lit-animal-farm': 'animal-farm',
  'aqa-lit-christmas-carol': 'christmas-carol',
  'aqa-lit-inspector-calls': 'inspector-calls',
  'caie-lit-poetry': 'caie-lit',
  'caie-lit-prose': 'caie-lit',
  'caie-lit-drama': 'caie-lit',
  'igcse-lit-poem-if': 'igcse-poetry-1',
  'igcse-lit-poem-prayer-before-birth': 'igcse-poetry-1',
  'igcse-lit-poem-blessing': 'igcse-poetry-1',
  'igcse-lit-poem-search-for-my-tongue': 'igcse-poetry-1',
  'igcse-lit-poem-half-past-two': 'igcse-poetry-1',
  'igcse-lit-poem-piano': 'igcse-poetry-1',
  'igcse-lit-poem-hide-and-seek': 'igcse-poetry-1',
  'igcse-lit-poem-sonnet-116': 'igcse-poetry-1',
  'igcse-lit-poem-la-belle-dame': 'igcse-poetry-2',
  'igcse-lit-poem-at-thirty-nine': 'igcse-poetry-2',
  'igcse-lit-poem-war-photographer': 'igcse-poetry-2',
  'igcse-lit-poem-the-tyger': 'igcse-poetry-2',
  'igcse-lit-poem-my-last-duchess': 'igcse-poetry-2',
  'igcse-lit-poem-half-caste': 'igcse-poetry-2',
  'igcse-lit-poem-do-not-go-gentle': 'igcse-poetry-2',
  'igcse-lit-poem-remember': 'igcse-poetry-2',
  'igcse-lit-prose-to-kill-a-mockingbird': 'igcse-prose',
  'igcse-lit-prose-of-mice-and-men': 'igcse-prose',
  'igcse-lit-prose-whale-rider': 'igcse-prose',
  'igcse-lit-prose-joy-luck-club': 'igcse-prose',
  'igcse-lit-prose-things-fall-apart': 'igcse-prose',
  'igcse-lit-prose-klara-and-the-sun': 'igcse-prose',
  'igcse-lit-prose-western-lane': 'igcse-prose',
  'igcse-lit-drama-view-from-bridge': 'igcse-drama',
  'igcse-lit-drama-inspector-calls': 'igcse-drama',
  'igcse-lit-drama-curious-incident': 'igcse-drama',
  'igcse-lit-drama-kindertransport': 'igcse-drama',
  'igcse-lit-drama-death-kings-horseman': 'igcse-drama',
  'igcse-lit-drama-romeo-juliet': 'igcse-drama',
  'igcse-lit-drama-macbeth': 'igcse-drama',
  'igcse-lit-drama-merchant-of-venice': 'igcse-drama',
  'igcse-lit-classic-pride-and-prejudice': 'igcse-classics',
  'igcse-lit-classic-great-expectations': 'igcse-classics',
  'igcse-lit-classic-the-scarlet-letter': 'igcse-classics',
  'ks3-y7-t1-fox-girl': 'ks3-y7',
  'ks3-y7-t2-voice-identity': 'ks3-y7',
  'ks3-y7-t3-shaping-meaning': 'ks3-y7',
  'ks3-y8-t1-hunger-games': 'ks3-y8',
  'ks3-y8-t2-conflict-poetry': 'ks3-y8',
  'ks3-y8-t3-rhetoric-media': 'ks3-y8',
  'ks3-y9-t1-christmas-carol': 'ks3-y9',
  'ks3-y9-t2-writing-craft': 'ks3-y9',
  'ks3-y9-t3-omam': 'ks3-y9',
  'igcse-y10-lang-p1': 'igcse-y10-11',
  'igcse-y10-lit-poetry': 'igcse-y10-11',
  'igcse-y10-lit-omam': 'igcse-y10-11',
  'igcse-y11-lang-p2': 'igcse-y10-11',
  'igcse-y11-lit-inspector': 'igcse-y10-11',
  'igcse-y11-lit-macbeth': 'igcse-y10-11',
  'ial-y12-unit1': 'ial-y12-13',
  'ial-y12-unit2': 'ial-y12-13',
  'ial-y13-unit3': 'ial-y12-13',
  'ial-y13-unit4': 'ial-y12-13',
}

/** Every course, metadata only, in the same order as `allCourses`. */
export const COURSE_INDEX: CourseIndexEntry[] = [
  {
    id: 'ks3-reading',
    title: 'KS3 Reading Skills',
    subtitle: 'Master comprehension, inference, and language analysis for Years 7-9.',
    tier: 'KS3',
    price: 0,
    duration: '4-6 hours',
    level: 'KS3 (Years 7-9)',
    description:
      'Build a rock-solid foundation in reading comprehension. Learn how to find evidence, analyse language, understand structure, compare texts, and read between the lines. Every skill you need before GCSE.',
    color: '#10b981',
    moduleCount: 6,
    quizCount: 24,
    moduleList: [
      {
        id: 'ks3r-m1',
        title: 'Understanding the Question',
        duration: '30 mins',
      },
      {
        id: 'ks3r-m2',
        title: 'Finding and Using Evidence',
        duration: '35 mins',
      },
      {
        id: 'ks3r-m3',
        title: 'Language Analysis',
        duration: '40 mins',
      },
      {
        id: 'ks3r-m4',
        title: 'Structure Analysis',
        duration: '35 mins',
      },
      {
        id: 'ks3r-m5',
        title: 'Comparing Texts',
        duration: '35 mins',
      },
      {
        id: 'ks3r-m6',
        title: 'Inference and Implicit Meaning',
        duration: '30 mins',
      },
    ],
  },
  {
    id: 'ks3-writing',
    title: 'KS3 Writing Skills',
    subtitle: 'Build confidence in descriptive, narrative, and persuasive writing.',
    tier: 'KS3',
    price: 0,
    duration: '4-6 hours',
    level: 'KS3 (Years 7-9)',
    description:
      'Learn to write with purpose, clarity, and style. From planning to proofreading, this course covers descriptive, narrative, and persuasive writing - the three pillars of English writing at KS3 and beyond.',
    color: '#10b981',
    moduleCount: 6,
    quizCount: 24,
    moduleList: [
      {
        id: 'ks3w-m1',
        title: 'Audience and Purpose',
        duration: '30 mins',
      },
      {
        id: 'ks3w-m2',
        title: 'Planning Your Writing',
        duration: '25 mins',
      },
      {
        id: 'ks3w-m3',
        title: 'Descriptive Writing',
        duration: '40 mins',
      },
      {
        id: 'ks3w-m4',
        title: 'Narrative Writing',
        duration: '40 mins',
      },
      {
        id: 'ks3w-m5',
        title: 'Persuasive and Argument Writing',
        duration: '35 mins',
      },
      {
        id: 'ks3w-m6',
        title: 'Technical Accuracy',
        duration: '35 mins',
      },
    ],
  },
  {
    id: 'ks3-grammar',
    title: 'KS3 Grammar & Vocabulary',
    subtitle: 'Master the building blocks of the English language.',
    tier: 'KS3',
    price: 0,
    duration: '3-4 hours',
    level: 'KS3 (Years 7-9)',
    description:
      'Understand how English works at the word and sentence level. Parts of speech, sentence types, punctuation, vocabulary building, and spelling strategies - the foundations that everything else is built on.',
    color: '#10b981',
    moduleCount: 5,
    quizCount: 20,
    moduleList: [
      {
        id: 'ks3g-m1',
        title: 'Parts of Speech',
        duration: '30 mins',
      },
      {
        id: 'ks3g-m2',
        title: 'Sentence Types',
        duration: '25 mins',
      },
      {
        id: 'ks3g-m3',
        title: 'Punctuation Mastery',
        duration: '35 mins',
      },
      {
        id: 'ks3g-m4',
        title: 'Building Vocabulary',
        duration: '30 mins',
      },
      {
        id: 'ks3g-m5',
        title: 'Spelling Strategies',
        duration: '25 mins',
      },
    ],
  },
  {
    id: 'ks3-poetry',
    title: 'KS3 Poetry Skills',
    subtitle: 'Explore rhythm, imagery, and the craft of poetry for Years 7-9.',
    tier: 'KS3',
    board: 'All',
    price: 0,
    duration: '3-5 hours',
    level: 'KS3 (Years 7-9)',
    description:
      'Discover how poets use rhythm, rhyme, imagery, and figurative language to create powerful effects. Learn to compare poems, write confidently about poetry, and build a strong foundation for GCSE Literature.',
    color: '#6366f1',
    moduleCount: 5,
    quizCount: 15,
    moduleList: [
      {
        id: 'ks3p-m1',
        title: 'What is Poetry?',
        duration: '30 mins',
      },
      {
        id: 'ks3p-m2',
        title: 'Rhythm & Rhyme',
        duration: '35 mins',
      },
      {
        id: 'ks3p-m3',
        title: 'Imagery & Figurative Language',
        duration: '35 mins',
      },
      {
        id: 'ks3p-m4',
        title: 'Comparing Poems',
        duration: '35 mins',
      },
      {
        id: 'ks3p-m5',
        title: 'Writing About Poetry',
        duration: '35 mins',
      },
    ],
  },
  {
    id: 'ks3-shakespeare',
    title: 'KS3 Shakespeare Introduction',
    subtitle: "Build confidence with Shakespeare's language, plays, and performance.",
    tier: 'KS3',
    board: 'All',
    price: 0,
    duration: '3-5 hours',
    level: 'KS3 (Years 7-9)',
    description:
      'Demystify Shakespeare for KS3 students. Understand the language, explore key plays including Macbeth, Romeo and Juliet, and The Tempest, analyse characters and themes, and discover why performance matters.',
    color: '#f59e0b',
    moduleCount: 5,
    quizCount: 15,
    moduleList: [
      {
        id: 'ks3s-m1',
        title: "Shakespeare's World",
        duration: '30 mins',
      },
      {
        id: 'ks3s-m2',
        title: 'Understanding the Language',
        duration: '35 mins',
      },
      {
        id: 'ks3s-m3',
        title: 'Key Plays Overview',
        duration: '40 mins',
      },
      {
        id: 'ks3s-m4',
        title: 'Character & Theme Analysis',
        duration: '35 mins',
      },
      {
        id: 'ks3s-m5',
        title: 'Performing Shakespeare',
        duration: '30 mins',
      },
    ],
  },
  {
    id: 'ks3-media-literacy',
    title: 'KS3 Media Literacy',
    subtitle: 'Analyse advertisements, news, social media, and persuasive media texts.',
    tier: 'KS3',
    board: 'All',
    price: 0,
    duration: '3-5 hours',
    level: 'KS3 (Years 7-9)',
    description:
      'Develop critical thinking skills for the modern media landscape. Learn to analyse advertisements, detect bias in news, understand persuasion on social media, and create your own media texts with confidence.',
    color: '#06b6d4',
    moduleCount: 5,
    quizCount: 15,
    moduleList: [
      {
        id: 'ks3ml-m1',
        title: 'What is Media Literacy?',
        duration: '30 mins',
      },
      {
        id: 'ks3ml-m2',
        title: 'Analysing Advertisements',
        duration: '35 mins',
      },
      {
        id: 'ks3ml-m3',
        title: 'News & Bias',
        duration: '35 mins',
      },
      {
        id: 'ks3ml-m4',
        title: 'Social Media & Persuasion',
        duration: '35 mins',
      },
      {
        id: 'ks3ml-m5',
        title: 'Creating Your Own Media Text',
        duration: '35 mins',
      },
    ],
  },
  {
    id: 'gcse-lang-reading',
    title: 'GCSE Language: Reading (AQA)',
    subtitle: 'Conquer AQA Paper 1 and Paper 2 reading questions with confidence.',
    tier: 'GCSE',
    board: 'AQA',
    price: 0,
    duration: '8-10 hours',
    level: 'GCSE (Years 10-11)',
    description:
      'From identifying information to evaluating critically, master every AQA English Language reading question type across both papers. Includes model answers at every grade band.',
    color: '#10b981',
    moduleCount: 8,
    quizCount: 32,
    moduleList: [
      {
        id: 'gcse-lr-m1',
        title: 'Paper 1 Q1: Information Retrieval',
        duration: '25 mins',
      },
      {
        id: 'gcse-lr-m2',
        title: 'Paper 1 Q2: Language Analysis',
        duration: '40 mins',
      },
      {
        id: 'gcse-lr-m3',
        title: 'Paper 1 Q3: Structural Analysis',
        duration: '40 mins',
      },
      {
        id: 'gcse-lr-m4',
        title: 'Paper 1 Q4: Critical Evaluation',
        duration: '45 mins',
      },
      {
        id: 'gcse-lr-m5',
        title: 'Paper 2 Q1: True or False',
        duration: '20 mins',
      },
      {
        id: 'gcse-lr-m6',
        title: 'Paper 2 Q2: Summary & Synthesis',
        duration: '35 mins',
      },
      {
        id: 'gcse-lr-m7',
        title: 'Paper 2 Q3: Language Comparison',
        duration: '40 mins',
      },
      {
        id: 'gcse-lr-m8',
        title: 'Paper 2 Q4: Comparing Viewpoints',
        duration: '45 mins',
      },
    ],
  },
  {
    id: 'gcse-lang-writing',
    title: 'GCSE Language: Writing (AQA)',
    subtitle: 'Craft compelling creative and non-fiction writing for top AQA marks.',
    tier: 'GCSE',
    board: 'AQA',
    price: 0,
    duration: '7-9 hours',
    level: 'GCSE (Years 10-11)',
    description:
      'Master both AQA Paper 1 (creative writing) and Paper 2 (non-fiction writing). Learn how to plan, structure, and polish your writing to hit every marking guide descriptor.',
    color: '#10b981',
    moduleCount: 7,
    quizCount: 28,
    moduleList: [
      {
        id: 'gcse-lw-m1',
        title: 'Planning Under Pressure',
        duration: '25 mins',
      },
      {
        id: 'gcse-lw-m2',
        title: 'Paper 1 Q5: Descriptive Writing',
        duration: '45 mins',
      },
      {
        id: 'gcse-lw-m3',
        title: 'Paper 1 Q5: Narrative Writing',
        duration: '45 mins',
      },
      {
        id: 'gcse-lw-m4',
        title: 'Paper 2 Q5: Viewpoint Writing',
        duration: '45 mins',
      },
      {
        id: 'gcse-lw-m5',
        title: 'Sentences & Paragraphs for Effect',
        duration: '35 mins',
      },
      {
        id: 'gcse-lw-m6',
        title: 'Vocabulary & Ambitious Language',
        duration: '30 mins',
      },
      {
        id: 'gcse-lw-m7',
        title: 'SPaG & Proofreading',
        duration: '25 mins',
      },
    ],
  },
  {
    id: 'gcse-lit-poetry',
    title: 'GCSE Literature: Poetry (AQA)',
    subtitle: 'Analyse unseen poetry and AQA anthology poems with precision.',
    tier: 'GCSE',
    board: 'AQA',
    price: 0,
    duration: '5-7 hours',
    level: 'GCSE (Years 10-11)',
    description:
      'Build your confidence with unseen poetry analysis. Learn to identify techniques, explore meanings, compare poems, and write essays that markers love. Covers both unseen poetry questions on AQA Paper 2.',
    color: '#10b981',
    moduleCount: 6,
    quizCount: 24,
    moduleList: [
      {
        id: 'gcse-lp-m1',
        title: 'Reading a Poem: First Steps',
        duration: '30 mins',
      },
      {
        id: 'gcse-lp-m2',
        title: 'Poetic Techniques Toolkit',
        duration: '40 mins',
      },
      {
        id: 'gcse-lp-m3',
        title: 'Analysing Meaning & Themes',
        duration: '35 mins',
      },
      {
        id: 'gcse-lp-m4',
        title: 'Structure & Form',
        duration: '35 mins',
      },
      {
        id: 'gcse-lp-m5',
        title: 'Writing a Poetry Essay',
        duration: '40 mins',
      },
      {
        id: 'gcse-lp-m6',
        title: 'Unseen Poetry Comparison',
        duration: '35 mins',
      },
    ],
  },
  {
    id: 'gcse-lit-prose',
    title: 'GCSE Literature: Prose & Drama (AQA)',
    subtitle: 'Ace your AQA set texts - Macbeth, An Inspector Calls, and prose.',
    tier: 'GCSE',
    board: 'AQA',
    price: 0,
    duration: '5-7 hours',
    level: 'GCSE (Years 10-11)',
    description:
      "Deep-dive into your GCSE set texts. Learn how to write about characters, themes, and the writer's craft in Macbeth, An Inspector Calls, and the 19th-century novel. Includes essay planning frameworks and model paragraphs.",
    color: '#10b981',
    moduleCount: 6,
    quizCount: 24,
    moduleList: [
      {
        id: 'gcse-ld-m1',
        title: 'Macbeth: Characters & Themes',
        duration: '45 mins',
      },
      {
        id: 'gcse-ld-m2',
        title: "Macbeth: Writer's Craft",
        duration: '35 mins',
      },
      {
        id: 'gcse-ld-m3',
        title: 'An Inspector Calls: Characters & Themes',
        duration: '45 mins',
      },
      {
        id: 'gcse-ld-m4',
        title: "An Inspector Calls: Writer's Craft",
        duration: '35 mins',
      },
      {
        id: 'gcse-ld-m5',
        title: 'The 19th-Century Novel',
        duration: '40 mins',
      },
      {
        id: 'gcse-ld-m6',
        title: 'Writing Literature Essays',
        duration: '35 mins',
      },
    ],
  },
  {
    id: 'gcse-revision-blitz',
    title: 'GCSE Revision Blitz (AQA)',
    subtitle: 'Last-minute AQA exam prep that actually works.',
    tier: 'GCSE',
    board: 'AQA',
    price: 0,
    duration: '6-8 hours',
    level: 'GCSE (Years 10-11)',
    description:
      'The ultimate AQA revision sprint. Condensed lessons covering every question type across Language and Literature, with exam walkthroughs, timing strategies, and grade-boosting tips from real markers.',
    color: '#f59e0b',
    moduleCount: 8,
    quizCount: 32,
    moduleList: [
      {
        id: 'gcse-rb-m1',
        title: 'Exam Survival Guide',
        duration: '20 mins',
      },
      {
        id: 'gcse-rb-m2',
        title: 'Language Paper 1 Walkthrough',
        duration: '40 mins',
      },
      {
        id: 'gcse-rb-m3',
        title: 'Language Paper 2 Walkthrough',
        duration: '40 mins',
      },
      {
        id: 'gcse-rb-m4',
        title: 'Literature Paper 1 Walkthrough',
        duration: '40 mins',
      },
      {
        id: 'gcse-rb-m5',
        title: 'Literature Paper 2 Walkthrough',
        duration: '40 mins',
      },
      {
        id: 'gcse-rb-m6',
        title: 'Grade Booster: Language',
        duration: '30 mins',
      },
      {
        id: 'gcse-rb-m7',
        title: 'Grade Booster: Literature',
        duration: '30 mins',
      },
      {
        id: 'gcse-rb-m8',
        title: 'The Night Before: Final Checklist',
        duration: '15 mins',
      },
    ],
  },
  {
    id: 'edexcel-lang-paper1',
    title: 'Edexcel GCSE English Language - Paper 1',
    subtitle: 'Non-Fiction Texts & Transactional Writing (1EN2/01)',
    tier: 'GCSE',
    board: 'Edexcel',
    price: 0,
    duration: '12 weeks',
    level: 'GCSE (Years 10-11)',
    description:
      'Master Edexcel Paper 1: analyse 19th-century non-fiction texts and craft compelling transactional writing. Covers all question types with Edexcel-specific strategies and marker insights.',
    color: '#7c3aed',
    moduleCount: 10,
    quizCount: 43,
    moduleList: [
      {
        id: 'edx-lp1-m1',
        title: 'Paper 1 Overview & what markers look for',
        duration: '45 min',
      },
      {
        id: 'edx-lp1-m2',
        title: 'Reading 19th-Century Non-Fiction: Comprehension & Inference',
        duration: '50 min',
      },
      {
        id: 'edx-lp1-m3',
        title: 'Reading 19th-Century Non-Fiction: Language Analysis',
        duration: '95 min',
      },
      {
        id: 'edx-lp1-m4',
        title: 'Reading 19th-Century Non-Fiction: Evaluation',
        duration: '55 min',
      },
      {
        id: 'edx-lp1-m5',
        title: '19th-Century Non-Fiction: Context & Text Types',
        duration: '50 min',
      },
      {
        id: 'edx-lp1-m6',
        title: 'Transactional Writing: Planning & Structure',
        duration: '90 min',
      },
      {
        id: 'edx-lp1-m7',
        title: 'Transactional Writing: Audience, Purpose & Form',
        duration: '55 min',
      },
      {
        id: 'edx-lp1-m8',
        title: 'Transactional Writing: Persuasive Techniques',
        duration: '55 min',
      },
      {
        id: 'edx-lp1-m9',
        title: 'Spelling, Punctuation & Grammar for Paper 1',
        duration: '45 min',
      },
      {
        id: 'edx-lp1-m10',
        title: 'Paper 1 Exam Strategy & Timed Practice',
        duration: '60 min',
      },
    ],
  },
  {
    id: 'edexcel-lang-paper2',
    title: 'Edexcel GCSE English Language - Paper 2',
    subtitle: 'Fiction, Literary Non-Fiction & Imaginative Writing (1EN2/02)',
    tier: 'GCSE',
    board: 'Edexcel',
    price: 0,
    duration: '12 weeks',
    level: 'GCSE (Years 10-11)',
    description:
      'Master Edexcel Paper 2: analyse modern fiction and literary non-fiction, then craft powerful imaginative writing with top-scoring strategies.',
    color: '#4f46e5',
    moduleCount: 10,
    quizCount: 43,
    moduleList: [
      {
        id: 'edx-lp2-m1',
        title: 'Paper 2 Overview & what markers look for',
        duration: '45 min',
      },
      {
        id: 'edx-lp2-m2',
        title: 'Reading 20th/21st-Century Fiction: Comprehension & Inference',
        duration: '50 min',
      },
      {
        id: 'edx-lp2-m3',
        title: 'Reading Fiction: Language & Structure Analysis',
        duration: '90 min',
      },
      {
        id: 'edx-lp2-m4',
        title: 'Reading Literary Non-Fiction: Analysis & Comparison',
        duration: '90 min',
      },
      {
        id: 'edx-lp2-m5',
        title: 'Synthesis & Evaluation Skills',
        duration: '55 min',
      },
      {
        id: 'edx-lp2-m6',
        title: 'Imaginative Writing: Narrative Techniques',
        duration: '55 min',
      },
      {
        id: 'edx-lp2-m7',
        title: 'Imaginative Writing: Descriptive Writing',
        duration: '55 min',
      },
      {
        id: 'edx-lp2-m8',
        title: 'Imaginative Writing: Advanced Craft',
        duration: '55 min',
      },
      {
        id: 'edx-lp2-m9',
        title: 'SPaG & Vocabulary for Creative Writing',
        duration: '45 min',
      },
      {
        id: 'edx-lp2-m10',
        title: 'Paper 2 Exam Strategy & Timed Practice',
        duration: '60 min',
      },
    ],
  },
  {
    id: 'edexcel-lit-paper1',
    title: 'Edexcel GCSE English Literature – Paper 1',
    subtitle: 'Shakespeare & Post-1914 Literature',
    tier: 'GCSE',
    board: 'Edexcel',
    price: 0,
    duration: '14 weeks',
    level: 'GCSE (Years 10-11)',
    description:
      "Master Edexcel Literature Paper 1: Shakespeare (Macbeth) and Post-1914 Literature (An Inspector Calls). Extract-based responses with context, character analysis, and writer's methods.",
    color: '#e11d48',
    moduleCount: 10,
    quizCount: 44,
    moduleList: [
      {
        id: 'edx-lt1-m1',
        title: 'Paper 1 Overview & what markers look for',
        duration: '45 min',
      },
      {
        id: 'edx-lt1-m2',
        title: 'Shakespeare: Themes & Context (Macbeth Focus)',
        duration: '55 min',
      },
      {
        id: 'edx-lt1-m3',
        title: 'Shakespeare: Character Analysis & Development',
        duration: '55 min',
      },
      {
        id: 'edx-lt1-m4',
        title: 'Shakespeare: Language, Form & Structure',
        duration: '55 min',
      },
      {
        id: 'edx-lt1-m5',
        title: 'Shakespeare: Writing the Extract-Based Response',
        duration: '55 min',
      },
      {
        id: 'edx-lt1-m6',
        title: 'Post-1914 Literature: Themes & Context (An Inspector Calls Focus)',
        duration: '55 min',
      },
      {
        id: 'edx-lt1-m7',
        title: 'Post-1914 Literature: Character Analysis',
        duration: '55 min',
      },
      {
        id: 'edx-lt1-m8',
        title: "Post-1914 Literature: Writer's Methods & Effects",
        duration: '55 min',
      },
      {
        id: 'edx-lt1-m9',
        title: 'Post-1914 Literature: Essay Writing Techniques',
        duration: '55 min',
      },
      {
        id: 'edx-lt1-m10',
        title: 'Paper 1 Exam Strategy & Practice',
        duration: '60 min',
      },
    ],
  },
  {
    id: 'edexcel-lit-paper2',
    title: 'Edexcel GCSE English Literature – Paper 2',
    subtitle: '19th-Century Novel & Poetry Anthology',
    tier: 'GCSE',
    board: 'Edexcel',
    price: 0,
    duration: '14 weeks',
    level: 'GCSE (Years 10-11)',
    description:
      'Master Edexcel Literature Paper 2: 19th-Century Novel (A Christmas Carol) and Poetry Anthology. Extract responses, poetry analysis, and comparison essays.',
    color: '#d97706',
    moduleCount: 10,
    quizCount: 43,
    moduleList: [
      {
        id: 'edx-lt2-m1',
        title: 'Paper 2 Overview & what markers look for',
        duration: '45 min',
      },
      {
        id: 'edx-lt2-m2',
        title: '19th-Century Novel: Context & Conventions (A Christmas Carol Focus)',
        duration: '55 min',
      },
      {
        id: 'edx-lt2-m3',
        title: '19th-Century Novel: Character Analysis',
        duration: '55 min',
      },
      {
        id: 'edx-lt2-m4',
        title: "19th-Century Novel: Themes & Writer's Methods",
        duration: '55 min',
      },
      {
        id: 'edx-lt2-m5',
        title: '19th-Century Novel: Extract & Essay Response',
        duration: '55 min',
      },
      {
        id: 'edx-lt2-m6',
        title: 'Poetry Anthology: Approaching Anthology Poems',
        duration: '55 min',
      },
      {
        id: 'edx-lt2-m7',
        title: 'Poetry: Language, Form & Structure',
        duration: '55 min',
      },
      {
        id: 'edx-lt2-m8',
        title: 'Poetry: Comparison Techniques',
        duration: '55 min',
      },
      {
        id: 'edx-lt2-m9',
        title: 'Poetry: Writing the Comparison Essay',
        duration: '55 min',
      },
      {
        id: 'edx-lt2-m10',
        title: 'Paper 2 Exam Strategy & Practice',
        duration: '60 min',
      },
    ],
  },
  {
    id: 'edexcel-igcse-lang-a',
    title: 'Edexcel IGCSE English Language A',
    subtitle: 'International GCSE - Specification A (4EA1)',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '14 weeks',
    level: 'IGCSE (Years 10-11)',
    description:
      'The complete Edexcel International GCSE English Language Specification A course. Master non-fiction reading, transactional writing, poetry and prose analysis, and imaginative writing - with examiner-level strategies, worked examples, and model answers for every question type across both papers.',
    color: '#0ea5e9',
    moduleCount: 14,
    quizCount: 70,
    moduleList: [
      {
        id: 'igcse-a-m1',
        title: 'IGCSE Language A Overview & Assessment Objectives',
        duration: '45 min',
      },
      {
        id: 'igcse-a-m2',
        title: 'Reading Non-Fiction: Comprehension & Retrieval Skills',
        duration: '50 min',
      },
      {
        id: 'igcse-a-m3',
        title: 'Reading Non-Fiction: Language Analysis for Paper 1',
        duration: '55 min',
      },
      {
        id: 'igcse-a-m4',
        title: 'Reading Non-Fiction: Structure & Whole-Text Analysis',
        duration: '55 min',
      },
      {
        id: 'igcse-a-m5',
        title: "Reading Non-Fiction: Comparing Writers' Ideas & Perspectives",
        duration: '55 min',
      },
      {
        id: 'igcse-a-m6',
        title: 'Transactional Writing: Form, Audience & Purpose',
        duration: '55 min',
      },
      {
        id: 'igcse-a-m7',
        title: 'Transactional Writing: Persuasion, Rhetoric & Argument',
        duration: '60 min',
      },
      {
        id: 'igcse-a-m8',
        title: 'Paper 1 Exam Technique & Timed Practice Strategy',
        duration: '50 min',
      },
      {
        id: 'igcse-a-m9',
        title: 'Paper 2 Overview: Poetry, Prose & Imaginative Writing',
        duration: '45 min',
      },
      {
        id: 'igcse-a-m10',
        title: 'Reading Literary Texts: Close Analysis of Prose Fiction',
        duration: '55 min',
      },
      {
        id: 'igcse-a-m11',
        title: 'Reading Literary Texts: Poetry Analysis & Anthology Response',
        duration: '55 min',
      },
      {
        id: 'igcse-a-m12',
        title: 'Imaginative Writing: Narrative Craft & Story Structure',
        duration: '60 min',
      },
      {
        id: 'igcse-a-m13',
        title: 'Imaginative Writing: Descriptive Writing Mastery',
        duration: '55 min',
      },
      {
        id: 'igcse-a-m14',
        title: 'Paper 2 Exam Technique & Final Revision Strategy',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'edexcel-igcse-lang-b',
    title: 'Edexcel IGCSE English Language B',
    subtitle: 'International GCSE - Specification B (4EB1)',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '14 weeks',
    level: 'IGCSE (Years 10-11)',
    description:
      'The complete Edexcel International GCSE English Language Specification B course. Build advanced reading skills across non-fiction and literary texts, then master transactional and creative writing - with step-by-step analysis frameworks, annotated model responses, and proven exam strategies for both papers.',
    color: '#06b6d4',
    moduleCount: 14,
    quizCount: 70,
    moduleList: [
      {
        id: 'igcse-b-m1',
        title: 'IGCSE Language B Overview & Assessment Objectives',
        duration: '45 min',
      },
      {
        id: 'igcse-b-m2',
        title: 'Non-Fiction Reading: Retrieval & Explicit Information',
        duration: '50 min',
      },
      {
        id: 'igcse-b-m3',
        title: 'Non-Fiction Reading: Inference & Implied Meaning',
        duration: '55 min',
      },
      {
        id: 'igcse-b-m4',
        title: "Non-Fiction Reading: Language Analysis & Writer's Methods",
        duration: '55 min',
      },
      {
        id: 'igcse-b-m5',
        title: 'Non-Fiction Reading: Summary, Synthesis & Comparison',
        duration: '55 min',
      },
      {
        id: 'igcse-b-m6',
        title: 'Literary Text Reading: Comprehension & Character Analysis',
        duration: '55 min',
      },
      {
        id: 'igcse-b-m7',
        title: "Literary Text Reading: Language, Structure & Writer's Craft",
        duration: '60 min',
      },
      {
        id: 'igcse-b-m8',
        title: 'Literary Text Reading: Evaluation & Personal Response',
        duration: '55 min',
      },
      {
        id: 'igcse-b-m9',
        title: 'Paper 2 Overview: Transactional & Creative Writing',
        duration: '45 min',
      },
      {
        id: 'igcse-b-m10',
        title: 'Transactional Writing: Letters, Articles & Reports',
        duration: '55 min',
      },
      {
        id: 'igcse-b-m11',
        title: 'Transactional Writing: Speeches, Reviews & Argument',
        duration: '55 min',
      },
      {
        id: 'igcse-b-m12',
        title: 'Creative Writing: Narrative Structure & Storytelling',
        duration: '60 min',
      },
      {
        id: 'igcse-b-m13',
        title: 'Creative Writing: Descriptive Writing & Atmosphere',
        duration: '55 min',
      },
      {
        id: 'igcse-b-m14',
        title: 'Paper 2 Exam Technique & Final Revision Strategy',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-drama-prose',
    title: 'IGCSE Literature - Drama & Prose',
    subtitle: 'International GCSE Literature - Drama & Prose',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '12 weeks',
    level: 'IGCSE (Years 10-11)',
    description:
      'The complete Edexcel IGCSE English Literature course for drama and prose set texts. Master extract-based essay technique, character and theme analysis, close reading skills, and timed essay writing - with in-depth study guides for Macbeth and An Inspector Calls, examiner-level strategies, and model analytical approaches.',
    color: '#8b5cf6',
    moduleCount: 10,
    quizCount: 42,
    moduleList: [
      {
        id: 'iglit-dp-m1',
        title: 'How to Approach Set Texts',
        duration: '50 min',
      },
      {
        id: 'iglit-dp-m2',
        title: 'Extract-Based Essay Technique',
        duration: '2 hours',
      },
      {
        id: 'iglit-dp-m3',
        title: 'Character Analysis Skills',
        duration: '2 hours',
      },
      {
        id: 'iglit-dp-m4',
        title: 'Theme Analysis',
        duration: '2 hours',
      },
      {
        id: 'iglit-dp-m5',
        title: 'Context Integration',
        duration: '2 hours',
      },
      {
        id: 'iglit-dp-m6',
        title: 'Close Reading Skills',
        duration: '50 min',
      },
      {
        id: 'iglit-dp-m7',
        title: 'Macbeth for IGCSE: Key Scenes, Characters, Themes & Methods',
        duration: '60 min',
      },
      {
        id: 'iglit-dp-m8',
        title: 'An Inspector Calls for IGCSE',
        duration: '60 min',
      },
      {
        id: 'iglit-dp-m9',
        title: 'Essay Planning and Structure',
        duration: '45 min',
      },
      {
        id: 'iglit-dp-m10',
        title: 'Timed Essay Practice',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'igcse-lit-poetry',
    title: 'IGCSE Literature - Poetry & Unseen',
    subtitle: 'International GCSE Literature - Poetry & Unseen',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '10 weeks',
    level: 'IGCSE (Years 10-11)',
    description:
      'The complete Edexcel IGCSE English Literature course for poetry and unseen texts. Master poetry analysis including form, structure, and language; develop anthology poetry skills and comparison techniques; build confidence with unseen poetry through systematic methods - with model responses, timed practice strategies, and self-assessment frameworks.',
    color: '#a855f7',
    moduleCount: 8,
    quizCount: 36,
    moduleList: [
      {
        id: 'iglit-po-m1',
        title: 'How to Approach Poetry',
        duration: '50 min',
      },
      {
        id: 'iglit-po-m2',
        title: 'Analysing Form and Structure in Poetry',
        duration: '50 min',
      },
      {
        id: 'iglit-po-m3',
        title: 'Analysing Language and Imagery in Poetry',
        duration: '55 min',
      },
      {
        id: 'iglit-po-m4',
        title: 'Anthology Poetry Skills',
        duration: '50 min',
      },
      {
        id: 'iglit-po-m5',
        title: 'Comparing Poems',
        duration: '55 min',
      },
      {
        id: 'iglit-po-m6',
        title: 'Unseen Poetry Technique',
        duration: '55 min',
      },
      {
        id: 'iglit-po-m7',
        title: 'Writing About Poetry Under Timed Conditions',
        duration: '45 min',
      },
      {
        id: 'iglit-po-m8',
        title: 'Practice Responses and Model Analysis',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'wjec-lang-c1',
    title: 'WJEC/Eduqas GCSE English Language - Component 1',
    subtitle: '20th Century Literature Reading & Creative Prose Writing (C700U10-1)',
    tier: 'GCSE',
    board: 'WJEC',
    price: 0,
    duration: '10 weeks',
    level: 'GCSE (Years 10-11)',
    description:
      'Master WJEC/Eduqas Component 1: analyse 20th-century fiction extracts and craft compelling creative prose. Covers retrieval, language analysis, structural analysis, evaluation, narrative and descriptive writing with WJEC-specific strategies and examiner insights.',
    color: '#dc2626',
    moduleCount: 9,
    quizCount: 37,
    moduleList: [
      {
        id: 'wjec-c1-m1',
        title: 'Component 1 Overview & Assessment Objectives',
        duration: '45 min',
      },
      {
        id: 'wjec-c1-m2',
        title: 'Retrieval and Comprehension Skills (A1)',
        duration: '40 min',
      },
      {
        id: 'wjec-c1-m3',
        title: 'Language Analysis: Inference and Impressions (A2 & A3)',
        duration: '55 min',
      },
      {
        id: 'wjec-c1-m4',
        title: 'Structural Analysis: Organisation and Effect (A4)',
        duration: '50 min',
      },
      {
        id: 'wjec-c1-m5',
        title: 'Evaluation and Critical Response (A5)',
        duration: '50 min',
      },
      {
        id: 'wjec-c1-m6',
        title: 'Creative Prose Writing: Narrative Techniques',
        duration: '55 min',
      },
      {
        id: 'wjec-c1-m7',
        title: 'Creative Prose Writing: Descriptive Techniques',
        duration: '50 min',
      },
      {
        id: 'wjec-c1-m8',
        title: 'Technical Accuracy: SPaG for Creative Writing',
        duration: '45 min',
      },
      {
        id: 'wjec-c1-m9',
        title: 'Proofreading, Revision, and Exam Strategy',
        duration: '40 min',
      },
    ],
  },
  {
    id: 'wjec-lang-c2',
    title: 'WJEC/Eduqas GCSE English Language - Component 2',
    subtitle:
      '19th & 21st Century Non-Fiction Reading & Transactional/Persuasive Writing (C700U20-1)',
    tier: 'GCSE',
    board: 'WJEC',
    price: 0,
    duration: '12 weeks',
    level: 'GCSE (Years 10-11)',
    description:
      'Master WJEC/Eduqas Component 2: read and analyse 19th and 21st century non-fiction, synthesise across texts, compare viewpoints, and produce persuasive transactional writing (speeches, letters, articles, reviews, reports) with WJEC-specific strategies.',
    color: '#b91c1c',
    moduleCount: 10,
    quizCount: 43,
    moduleList: [
      {
        id: 'wjec-c2-m1',
        title: 'Component 2 Overview & Assessment Objectives',
        duration: '45 min',
      },
      {
        id: 'wjec-c2-m2',
        title: 'Reading 19th and 21st Century Non-Fiction (A1)',
        duration: '45 min',
      },
      {
        id: 'wjec-c2-m3',
        title: 'Synthesis: Drawing Together Two Texts (A2)',
        duration: '50 min',
      },
      {
        id: 'wjec-c2-m4',
        title: 'Language Analysis in Non-Fiction (A3)',
        duration: '50 min',
      },
      {
        id: 'wjec-c2-m5',
        title: 'Comparing Viewpoints and Perspectives (A4)',
        duration: '55 min',
      },
      {
        id: 'wjec-c2-m6',
        title: 'The Proofreading Task (A5)',
        duration: '30 min',
      },
      {
        id: 'wjec-c2-m7',
        title: 'Transactional Writing: Forms and Conventions',
        duration: '55 min',
      },
      {
        id: 'wjec-c2-m8',
        title: 'Persuasive Writing Techniques',
        duration: '50 min',
      },
      {
        id: 'wjec-c2-m9',
        title: 'Transactional Writing: Accuracy and Crafting',
        duration: '45 min',
      },
      {
        id: 'wjec-c2-m10',
        title: 'Component 2 Exam Strategy and Revision',
        duration: '40 min',
      },
    ],
  },
  {
    id: 'ocr-lang-c1',
    title: 'OCR GCSE English Language - Component 01',
    subtitle: 'Communicating Information and Ideas (J351/01)',
    tier: 'GCSE',
    board: 'OCR',
    price: 0,
    duration: '12 weeks',
    level: 'GCSE (Years 10-11)',
    description:
      'Master OCR Component 01: analyse non-fiction texts, compare viewpoints, evaluate writer effectiveness, and craft compelling transactional writing across all five forms - letters, articles, speeches, reports, and reviews.',
    color: '#0891b2',
    moduleCount: 10,
    quizCount: 42,
    moduleList: [
      {
        id: 'ocr-lc1-m1',
        title: 'Component 01 Overview & Assessment Objectives',
        duration: '45 min',
      },
      {
        id: 'ocr-lc1-m2',
        title: 'Reading Non-Fiction: Retrieval & Inference',
        duration: '50 min',
      },
      {
        id: 'ocr-lc1-m3',
        title: 'Language Analysis in Non-Fiction Texts',
        duration: '55 min',
      },
      {
        id: 'ocr-lc1-m4',
        title: "Comparing Writers' Viewpoints and Perspectives",
        duration: '55 min',
      },
      {
        id: 'ocr-lc1-m5',
        title: "Evaluating a Writer's Effectiveness",
        duration: '55 min',
      },
      {
        id: 'ocr-lc1-m6',
        title: 'Analysing Viewpoint, Bias, and Perspective',
        duration: '50 min',
      },
      {
        id: 'ocr-lc1-m7',
        title: 'Transactional Writing: Letters and Articles',
        duration: '55 min',
      },
      {
        id: 'ocr-lc1-m8',
        title: 'Transactional Writing: Speeches, Reports, and Reviews',
        duration: '55 min',
      },
      {
        id: 'ocr-lc1-m9',
        title: 'Technical Accuracy: Spelling, Punctuation, and Grammar',
        duration: '50 min',
      },
      {
        id: 'ocr-lc1-m10',
        title: 'Component 01 Exam Strategy & Timed Practice',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'ocr-lang-c2',
    title: 'OCR GCSE English Language - Component 02',
    subtitle: 'Exploring Effects and Impact (J351/02)',
    tier: 'GCSE',
    board: 'OCR',
    price: 0,
    duration: '12 weeks',
    level: 'GCSE (Years 10-11)',
    description:
      'Master OCR Component 02: analyse fiction extracts for language, structure, and evaluation, then craft powerful narrative and descriptive writing with advanced creative techniques.',
    color: '#0e7490',
    moduleCount: 10,
    quizCount: 41,
    moduleList: [
      {
        id: 'ocr-lc2-m1',
        title: 'Component 02 Overview & Assessment Objectives',
        duration: '45 min',
      },
      {
        id: 'ocr-lc2-m2',
        title: 'Reading Fiction: Comprehension & Character Inference',
        duration: '50 min',
      },
      {
        id: 'ocr-lc2-m3',
        title: 'Language Analysis in Fiction',
        duration: '55 min',
      },
      {
        id: 'ocr-lc2-m4',
        title: 'Structural Analysis in Fiction',
        duration: '55 min',
      },
      {
        id: 'ocr-lc2-m5',
        title: 'Evaluating Fiction: Critical Judgement',
        duration: '55 min',
      },
      {
        id: 'ocr-lc2-m6',
        title: 'Narrative Writing: Crafting Stories',
        duration: '55 min',
      },
      {
        id: 'ocr-lc2-m7',
        title: 'Descriptive Writing: Creating Atmosphere',
        duration: '55 min',
      },
      {
        id: 'ocr-lc2-m8',
        title: 'Creative Writing Techniques: Advanced Craft',
        duration: '55 min',
      },
      {
        id: 'ocr-lc2-m9',
        title: 'Technical Accuracy in Creative Writing',
        duration: '50 min',
      },
      {
        id: 'ocr-lc2-m10',
        title: 'Component 02 Exam Strategy & Timed Practice',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'aqa-lit-power-conflict',
    title: 'AQA Power & Conflict Poetry Anthology',
    subtitle: 'Poem-by-poem analysis for the full 15-poem anthology',
    tier: 'GCSE',
    board: 'AQA',
    price: 0,
    duration: '15 hours',
    level: 'GCSE',
    description:
      'A comprehensive module-by-module guide to every poem in the AQA Power & Conflict anthology. Each module covers context, form and structure, key themes, quotation analysis, comparison links, and exam-style quiz questions.',
    color: '#7C3AED',
    moduleCount: 15,
    quizCount: 65,
    moduleList: [
      {
        id: 'aqa-pc-m1',
        title: 'Ozymandias - Percy Bysshe Shelley',
        duration: '55 min',
      },
      {
        id: 'aqa-pc-m2',
        title: 'London - William Blake',
        duration: '55 min',
      },
      {
        id: 'aqa-pc-m3',
        title: 'The Prelude: Stealing the Boat - William Wordsworth',
        duration: '55 min',
      },
      {
        id: 'aqa-pc-m4',
        title: 'My Last Duchess - Robert Browning',
        duration: '55 min',
      },
      {
        id: 'aqa-pc-m5',
        title: 'The Charge of the Light Brigade - Alfred, Lord Tennyson',
        duration: '55 min',
      },
      {
        id: 'aqa-pc-m6',
        title: 'Exposure - Wilfred Owen',
        duration: '55 min',
      },
      {
        id: 'aqa-pc-m7',
        title: 'Storm on the Island - Seamus Heaney',
        duration: '55 min',
      },
      {
        id: 'aqa-pc-m8',
        title: 'Bayonet Charge - Ted Hughes',
        duration: '55 min',
      },
      {
        id: 'aqa-pc-m9',
        title: 'Remains - Simon Armitage',
        duration: '55 min',
      },
      {
        id: 'aqa-pc-m10',
        title: 'Poppies - Jane Weir',
        duration: '55 min',
      },
      {
        id: 'aqa-pc-m11',
        title: 'War Photographer - Carol Ann Duffy',
        duration: '55 min',
      },
      {
        id: 'aqa-pc-m12',
        title: 'Tissue - Imtiaz Dharker',
        duration: '55 min',
      },
      {
        id: 'aqa-pc-m13',
        title: 'The Émigrée - Carol Rumens',
        duration: '55 min',
      },
      {
        id: 'aqa-pc-m14',
        title: 'Kamikaze - Beatrice Garland',
        duration: '55 min',
      },
      {
        id: 'aqa-pc-m15',
        title: 'Checking Out Me History - John Agard',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'aqa-lit-love-relationships',
    title: 'AQA Love & Relationships Poetry Anthology',
    subtitle: 'Poem-by-poem analysis for all 15 anthology poems',
    tier: 'GCSE',
    board: 'AQA',
    price: 0,
    duration: '12 hours',
    level: 'GCSE',
    description:
      'Complete poem-by-poem analysis of the AQA Love & Relationships Poetry Anthology. Each module covers context, form and structure, key themes, quotations with analysis, and comparison links to other anthology poems.',
    color: '#e91e63',
    moduleCount: 15,
    quizCount: 65,
    moduleList: [
      {
        id: 'aqa-lr-m1',
        title: 'When We Two Parted - Lord Byron',
        duration: '40 min',
      },
      {
        id: 'aqa-lr-m2',
        title: "Love's Philosophy - Percy Bysshe Shelley",
        duration: '40 min',
      },
      {
        id: 'aqa-lr-m3',
        title: "Porphyria's Lover - Robert Browning",
        duration: '45 min',
      },
      {
        id: 'aqa-lr-m4',
        title: 'Sonnet 29 - Elizabeth Barrett Browning',
        duration: '90 min',
      },
      {
        id: 'aqa-lr-m5',
        title: 'Neutral Tones - Thomas Hardy',
        duration: '40 min',
      },
      {
        id: 'aqa-lr-m6',
        title: 'Letters from Yorkshire - Maura Dooley',
        duration: '90 min',
      },
      {
        id: 'aqa-lr-m7',
        title: "The Farmer's Bride - Charlotte Mew",
        duration: '45 min',
      },
      {
        id: 'aqa-lr-m8',
        title: 'Walking Away - Cecil Day-Lewis',
        duration: '40 min',
      },
      {
        id: 'aqa-lr-m9',
        title: 'Eden Rock - Charles Causley',
        duration: '40 min',
      },
      {
        id: 'aqa-lr-m10',
        title: 'Follower - Seamus Heaney',
        duration: '40 min',
      },
      {
        id: 'aqa-lr-m11',
        title: 'Mother, any distance - Simon Armitage',
        duration: '90 min',
      },
      {
        id: 'aqa-lr-m12',
        title: 'Before You Were Mine - Carol Ann Duffy',
        duration: '90 min',
      },
      {
        id: 'aqa-lr-m13',
        title: 'Winter Swans - Owen Sheers',
        duration: '40 min',
      },
      {
        id: 'aqa-lr-m14',
        title: 'Singh Song! - Daljit Nagra',
        duration: '40 min',
      },
      {
        id: 'aqa-lr-m15',
        title: 'Climbing My Grandfather - Andrew Waterhouse',
        duration: '40 min',
      },
    ],
  },
  {
    id: 'aqa-lit-romeo-juliet',
    title: 'Romeo & Juliet',
    subtitle: 'AQA GCSE English Literature - Shakespeare Study',
    tier: 'GCSE',
    board: 'AQA',
    price: 0,
    duration: '12 hours',
    level: 'GCSE',
    description:
      "A comprehensive 10-module course covering every aspect of Romeo and Juliet for AQA GCSE English Literature. Includes plot analysis, character studies, themes, writer's methods, context, and exam technique with model paragraphs and exam-style practice.",
    color: '#b91c1c',
    moduleCount: 10,
    quizCount: 47,
    moduleList: [
      {
        id: 'rj-m1',
        title: 'Play Overview & Context',
        duration: '60 min',
      },
      {
        id: 'rj-m2',
        title: 'Act 1: The Feud & The Meeting',
        duration: '65 min',
      },
      {
        id: 'rj-m3',
        title: 'Act 2: The Balcony Scene & Secret Marriage',
        duration: '65 min',
      },
      {
        id: 'rj-m4',
        title: 'Act 3: The Turning Point',
        duration: '65 min',
      },
      {
        id: 'rj-m5',
        title: 'Acts 4-5: The Tragic Resolution',
        duration: '65 min',
      },
      {
        id: 'rj-m6',
        title: 'Character Study: Romeo',
        duration: '60 min',
      },
      {
        id: 'rj-m7',
        title: 'Character Study: Juliet',
        duration: '60 min',
      },
      {
        id: 'rj-m8',
        title: 'Key Themes: Love, Fate, Conflict, Family, Youth vs Age',
        duration: '70 min',
      },
      {
        id: 'rj-m9',
        title: "Writer's Methods: Language, Form & Structure",
        duration: '70 min',
      },
      {
        id: 'rj-m10',
        title: 'Exam Technique: Extract-Based Essay Practice',
        duration: '70 min',
      },
    ],
  },
  {
    id: 'aqa-lit-jekyll-hyde',
    title: 'The Strange Case of Dr Jekyll and Mr Hyde',
    subtitle: 'AQA GCSE English Literature - 19th-Century Novel',
    tier: 'GCSE',
    board: 'AQA',
    price: 0,
    duration: '10 modules · approx. 8 hours',
    level: 'GCSE',
    description:
      "A comprehensive course covering Robert Louis Stevenson's The Strange Case of Dr Jekyll and Mr Hyde for AQA GCSE English Literature. Includes chapter-by-chapter analysis, character studies, thematic exploration, writer's methods and exam technique.",
    color: '#6b21a8',
    moduleCount: 10,
    quizCount: 50,
    moduleList: [
      {
        id: 'jh-m1',
        title: 'Novel Overview & Context',
        duration: '50 min',
      },
      {
        id: 'jh-m2',
        title: 'Chapters 1-3: The Mystery Begins',
        duration: '50 min',
      },
      {
        id: 'jh-m3',
        title: 'Chapters 4-6: The Carew Murder & Deepening Mystery',
        duration: '50 min',
      },
      {
        id: 'jh-m4',
        title: 'Chapters 7-10: The Truth Revealed',
        duration: '55 min',
      },
      {
        id: 'jh-m5',
        title: 'Character Study: Dr Jekyll',
        duration: '50 min',
      },
      {
        id: 'jh-m6',
        title: 'Character Study: Mr Hyde',
        duration: '50 min',
      },
      {
        id: 'jh-m7',
        title: 'Character Study: Utterson, Lanyon & Enfield',
        duration: '50 min',
      },
      {
        id: 'jh-m8',
        title: 'Key Themes: Duality, Reputation, Science, Secrecy & More',
        duration: '55 min',
      },
      {
        id: 'jh-m9',
        title: "Writer's Methods: Gothic Elements, Narrative & Symbolism",
        duration: '55 min',
      },
      {
        id: 'jh-m10',
        title: 'Exam Technique: AQA-Style Essay Practice',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'gcse-lit-lord-of-flies',
    title: 'Lord of the Flies - Complete GCSE Course',
    subtitle: "William Golding's exploration of civilisation, savagery and the darkness within",
    tier: 'GCSE',
    board: 'AQA',
    price: 0,
    duration: '12 hours',
    level: 'GCSE English Literature',
    description:
      "A comprehensive course covering every aspect of Lord of the Flies for GCSE English Literature. From historical context and chapter-by-chapter analysis to character studies, themes, symbolism, writer's methods and exam technique - everything you need to achieve the highest grades.",
    color: '#2d6a4f',
    moduleCount: 10,
    quizCount: 48,
    moduleList: [
      {
        id: 'lotf-m1',
        title: 'Novel Overview & Context',
        duration: '55 min',
      },
      {
        id: 'lotf-m2',
        title: 'Chapters 1-3: Arrival & Establishing Order',
        duration: '60 min',
      },
      {
        id: 'lotf-m3',
        title: 'Chapters 4-6: The Beast & Breakdown of Order',
        duration: '60 min',
      },
      {
        id: 'lotf-m4',
        title: 'Chapters 7-9: Savagery Takes Over',
        duration: '60 min',
      },
      {
        id: 'lotf-m5',
        title: 'Chapters 10-12: Total Collapse',
        duration: '60 min',
      },
      {
        id: 'lotf-m6',
        title: 'Character Studies: Ralph, Jack, Piggy, Simon, Roger',
        duration: '65 min',
      },
      {
        id: 'lotf-m7',
        title: 'Key Themes: Civilisation vs Savagery, Power, Loss of Innocence, Fear, Human Nature',
        duration: '65 min',
      },
      {
        id: 'lotf-m8',
        title:
          "Symbolism: The Conch, The Beast, The Lord of the Flies, Piggy's Glasses, The Fire, The Island",
        duration: '60 min',
      },
      {
        id: 'lotf-m9',
        title:
          "Writer's Methods: Allegory, Foreshadowing, Biblical Allusions, Imagery, Setting as Character",
        duration: '60 min',
      },
      {
        id: 'lotf-m10',
        title: 'Exam Technique: Essay Practice with Model Paragraphs',
        duration: '65 min',
      },
    ],
  },
  {
    id: 'gcse-lit-animal-farm',
    title: 'Animal Farm - Complete GCSE Course',
    subtitle: "George Orwell's allegorical novella: context, characters, themes & exam technique",
    tier: 'GCSE',
    board: 'AQA',
    price: 0,
    duration: '12 hours',
    level: 'GCSE English Literature',
    description:
      "A comprehensive ten-module course covering every aspect of Animal Farm for AQA GCSE English Literature. From Orwell's biographical context and the Russian Revolution allegory through to character studies, thematic analysis, writer's methods and full exam technique - everything you need to achieve top marks.",
    color: '#b91c1c',
    moduleCount: 10,
    quizCount: 50,
    moduleList: [
      {
        id: 'af-m1',
        title: 'Novel Overview & Context',
        duration: '60 min',
      },
      {
        id: 'af-m2',
        title: "Chapters 1-2: Old Major's Speech & The Rebellion",
        duration: '60 min',
      },
      {
        id: 'af-m3',
        title: 'Chapters 3-4: Building the New Society',
        duration: '120 min',
      },
      {
        id: 'af-m4',
        title: "Chapters 5-7: Napoleon's Rise to Power",
        duration: '70 min',
      },
      {
        id: 'af-m5',
        title: 'Chapters 8-10: The Betrayal of the Revolution',
        duration: '150 min',
      },
      {
        id: 'af-m6',
        title: 'Character Studies',
        duration: '75 min',
      },
      {
        id: 'af-m7',
        title: 'Key Themes',
        duration: '150 min',
      },
      {
        id: 'af-m8',
        title: 'Allegory: Mapping Characters to Historical Figures',
        duration: '60 min',
      },
      {
        id: 'af-m9',
        title: "Writer's Methods",
        duration: '70 min',
      },
      {
        id: 'af-m10',
        title: 'Exam Technique: Extract & Essay Practice',
        duration: '75 min',
      },
    ],
  },
  {
    id: 'aqa-lit-christmas-carol',
    title: 'AQA GCSE English Literature: A Christmas Carol',
    subtitle: 'Complete novella study with AQA exam technique',
    tier: 'GCSE',
    board: 'AQA',
    price: 0,
    duration: '9 hours',
    level: 'GCSE',
    description:
      "A comprehensive 10-module course covering Charles Dickens's A Christmas Carol for AQA GCSE English Literature. Includes detailed stave-by-stave analysis, character studies, thematic exploration, writer's methods, and AQA-specific exam technique with extract-based essay practice.",
    color: '#b91c1c',
    moduleCount: 10,
    quizCount: 48,
    moduleList: [
      {
        id: 'aqa-acc-m1',
        title: 'Novel Overview & Context',
        duration: '50 min',
      },
      {
        id: 'aqa-acc-m2',
        title: "Stave 1: Marley's Ghost",
        duration: '55 min',
      },
      {
        id: 'aqa-acc-m3',
        title: 'Stave 2: The Ghost of Christmas Past',
        duration: '55 min',
      },
      {
        id: 'aqa-acc-m4',
        title: 'Stave 3: The Ghost of Christmas Present',
        duration: '55 min',
      },
      {
        id: 'aqa-acc-m5',
        title: 'Stave 4: The Ghost of Christmas Yet to Come',
        duration: '55 min',
      },
      {
        id: 'aqa-acc-m6',
        title: 'Stave 5: The Transformation',
        duration: '50 min',
      },
      {
        id: 'aqa-acc-m7',
        title: 'Character Studies',
        duration: '55 min',
      },
      {
        id: 'aqa-acc-m8',
        title: 'Key Themes',
        duration: '55 min',
      },
      {
        id: 'aqa-acc-m9',
        title: "Writer's Methods",
        duration: '55 min',
      },
      {
        id: 'aqa-acc-m10',
        title: 'Exam Technique: AQA Extract-Based Essay',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'aqa-lit-inspector-calls',
    title: 'AQA An Inspector Calls',
    subtitle: 'Complete GCSE study guide - Paper 2 Section A (Modern Texts)',
    tier: 'GCSE',
    board: 'AQA',
    price: 0,
    duration: '10 modules · approx 12 hours',
    level: 'GCSE',
    description:
      "A comprehensive course covering J.B. Priestley's An Inspector Calls for AQA GCSE English Literature Paper 2 Section A. Includes act-by-act analysis, character studies, thematic exploration, key quotations, and exam technique - all tailored to the closed-book, no-extract AQA format.",
    color: '#8B0000',
    moduleCount: 10,
    quizCount: 46,
    moduleList: [
      {
        id: 'aic-m1',
        title: 'Play Overview & Context',
        duration: '60 min',
      },
      {
        id: 'aic-m2',
        title: 'Act 1: The Birling Household',
        duration: '60 min',
      },
      {
        id: 'aic-m3',
        title: "Act 2: Sheila & Gerald's Interrogation",
        duration: '60 min',
      },
      {
        id: 'aic-m4',
        title: "Act 3: Eric's Confession & The Inspector's Final Speech",
        duration: '60 min',
      },
      {
        id: 'aic-m5',
        title: 'Character Study: Arthur Birling',
        duration: '55 min',
      },
      {
        id: 'aic-m6',
        title: 'Character Study: Sheila Birling',
        duration: '55 min',
      },
      {
        id: 'aic-m7',
        title: 'Character Study: Inspector Goole',
        duration: '55 min',
      },
      {
        id: 'aic-m8',
        title: 'Character Studies: Eric, Mrs Birling, Gerald & Eva Smith',
        duration: '65 min',
      },
      {
        id: 'aic-m9',
        title: 'Key Themes: Social Responsibility, Class, Gender, Age & Power',
        duration: '65 min',
      },
      {
        id: 'aic-m10',
        title: 'Exam Technique: AQA Paper 2 Section A Practice',
        duration: '65 min',
      },
    ],
  },
  {
    id: 'caie-lit-poetry',
    title: 'CAIE Literature - Poetry Anthology',
    subtitle: 'Cambridge IGCSE Literature - Poetry (0475/0992)',
    tier: 'IGCSE',
    board: 'CAIE',
    price: 0,
    duration: '10 weeks',
    level: 'IGCSE (Years 10-11)',
    description:
      'The complete Cambridge IGCSE Literature course for poetry and the Songs of Ourselves anthology. Master poetry analysis including form, structure, and language; develop comparison skills and unseen poetry confidence; learn passage-based and essay question techniques - with CAIE-specific AO guidance, model analytical approaches, and exam strategies.',
    color: '#7c3aed',
    moduleCount: 5,
    quizCount: 20,
    moduleList: [
      {
        id: 'caie-poetry-m1',
        title: 'Approaching the Songs of Ourselves Anthology',
        duration: '55 min',
      },
      {
        id: 'caie-poetry-m2',
        title: 'Poetry Analysis: Form, Structure, and Language',
        duration: '60 min',
      },
      {
        id: 'caie-poetry-m3',
        title: 'Comparing Poems: Methods and Frameworks',
        duration: '55 min',
      },
      {
        id: 'caie-poetry-m4',
        title: 'Unseen Poetry: A Systematic Approach',
        duration: '55 min',
      },
      {
        id: 'caie-poetry-m5',
        title: 'Passage-Based and Essay Questions for CAIE Poetry',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'caie-lit-prose',
    title: 'CAIE Literature - Prose Texts',
    subtitle: 'Cambridge IGCSE Literature - Prose (0475/0992)',
    tier: 'IGCSE',
    board: 'CAIE',
    price: 0,
    duration: '10 weeks',
    level: 'IGCSE (Years 10-11)',
    description:
      'The complete Cambridge IGCSE Literature course for prose set texts. Master character and theme analysis, narrative voice, passage-based close reading, essay technique, and context integration - with CAIE-specific AO guidance, model analytical frameworks, and strategies for both open-text and closed-text components.',
    color: '#6d28d9',
    moduleCount: 5,
    quizCount: 20,
    moduleList: [
      {
        id: 'caie-prose-m1',
        title: 'Approaching Prose Set Texts for CAIE',
        duration: '55 min',
      },
      {
        id: 'caie-prose-m2',
        title: 'Character Analysis in Prose',
        duration: '55 min',
      },
      {
        id: 'caie-prose-m3',
        title: 'Theme Analysis in Prose',
        duration: '50 min',
      },
      {
        id: 'caie-prose-m4',
        title: 'Passage-Based Questions for Prose',
        duration: '55 min',
      },
      {
        id: 'caie-prose-m5',
        title: 'Essay Questions and Context Integration',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'caie-lit-drama',
    title: 'CAIE Literature - Drama',
    subtitle: 'Cambridge IGCSE Literature - Drama (0475/0992)',
    tier: 'IGCSE',
    board: 'CAIE',
    price: 0,
    duration: '10 weeks',
    level: 'IGCSE (Years 10-11)',
    description:
      "The complete Cambridge IGCSE Literature course for drama texts including Shakespeare and modern drama. Master drama analysis fundamentals, stagecraft and performance awareness, Shakespeare's language and structure, modern dramatic techniques, and exam strategies for passage-based and essay questions - with CAIE-specific AO guidance and model approaches.",
    color: '#5b21b6',
    moduleCount: 5,
    quizCount: 20,
    moduleList: [
      {
        id: 'caie-drama-m1',
        title: 'Drama Analysis: Foundations for CAIE',
        duration: '55 min',
      },
      {
        id: 'caie-drama-m2',
        title: 'Stagecraft and Performance Elements',
        duration: '55 min',
      },
      {
        id: 'caie-drama-m3',
        title: 'Shakespeare for CAIE Literature',
        duration: '60 min',
      },
      {
        id: 'caie-drama-m4',
        title: 'Modern Drama for CAIE',
        duration: '55 min',
      },
      {
        id: 'caie-drama-m5',
        title: 'Open-Text Exam Technique for CAIE Drama',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'igcse-lit-poem-if',
    title: '"If-" by Rudyard Kipling',
    subtitle: 'Edexcel IGCSE Literature Poetry Anthology',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '3 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive study of Kipling\'s "If-", covering context, language, structure, and exam technique for the Edexcel IGCSE Literature anthology.',
    color: '#7c3aed',
    moduleCount: 4,
    quizCount: 12,
    moduleList: [
      {
        id: 'iglit-if-m1',
        title: 'Context & Overview',
        duration: '45 min',
      },
      {
        id: 'iglit-if-m2',
        title: 'Language & Imagery Analysis',
        duration: '50 min',
      },
      {
        id: 'iglit-if-m3',
        title: 'Structure & Form',
        duration: '45 min',
      },
      {
        id: 'iglit-if-m4',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-poem-prayer-before-birth',
    title: '"Prayer Before Birth" by Louis MacNeice',
    subtitle: 'Edexcel IGCSE Literature Poetry Anthology',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '3 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive study of MacNeice\'s "Prayer Before Birth", covering context, language, structure, and exam technique for the Edexcel IGCSE Literature anthology.',
    color: '#6d28d9',
    moduleCount: 4,
    quizCount: 12,
    moduleList: [
      {
        id: 'iglit-pbb-m1',
        title: 'Context & Overview',
        duration: '45 min',
      },
      {
        id: 'iglit-pbb-m2',
        title: 'Language & Imagery Analysis',
        duration: '50 min',
      },
      {
        id: 'iglit-pbb-m3',
        title: 'Structure & Form',
        duration: '45 min',
      },
      {
        id: 'iglit-pbb-m4',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-poem-blessing',
    title: '"Blessing" by Imtiaz Dharker',
    subtitle: 'Edexcel IGCSE Literature Poetry Anthology',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '3 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive study of Dharker\'s "Blessing", covering context, language, structure, and exam technique for the Edexcel IGCSE Literature anthology.',
    color: '#2563eb',
    moduleCount: 4,
    quizCount: 12,
    moduleList: [
      {
        id: 'iglit-bl-m1',
        title: 'Context & Overview',
        duration: '45 min',
      },
      {
        id: 'iglit-bl-m2',
        title: 'Language & Imagery Analysis',
        duration: '50 min',
      },
      {
        id: 'iglit-bl-m3',
        title: 'Structure & Form',
        duration: '45 min',
      },
      {
        id: 'iglit-bl-m4',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-poem-search-for-my-tongue',
    title: '"Search For My Tongue" by Sujata Bhatt',
    subtitle: 'Edexcel IGCSE Literature Poetry Anthology',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '3 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive study of Bhatt\'s "Search For My Tongue", covering context, language, structure, and exam technique for the Edexcel IGCSE Literature anthology.',
    color: '#0891b2',
    moduleCount: 4,
    quizCount: 12,
    moduleList: [
      {
        id: 'iglit-sfmt-m1',
        title: 'Context & Overview',
        duration: '45 min',
      },
      {
        id: 'iglit-sfmt-m2',
        title: 'Language & Imagery Analysis',
        duration: '50 min',
      },
      {
        id: 'iglit-sfmt-m3',
        title: 'Structure & Form',
        duration: '45 min',
      },
      {
        id: 'iglit-sfmt-m4',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-poem-half-past-two',
    title: '"Half-past Two" by U A Fanthorpe',
    subtitle: 'Edexcel IGCSE Literature Poetry Anthology',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '3 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive study of Fanthorpe\'s "Half-past Two", covering context, language, structure, and exam technique for the Edexcel IGCSE Literature anthology.',
    color: '#059669',
    moduleCount: 4,
    quizCount: 12,
    moduleList: [
      {
        id: 'iglit-hpt-m1',
        title: 'Context & Overview',
        duration: '45 min',
      },
      {
        id: 'iglit-hpt-m2',
        title: 'Language & Imagery Analysis',
        duration: '50 min',
      },
      {
        id: 'iglit-hpt-m3',
        title: 'Structure & Form',
        duration: '45 min',
      },
      {
        id: 'iglit-hpt-m4',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-poem-piano',
    title: '"Piano" by D H Lawrence',
    subtitle: 'Edexcel IGCSE Literature Poetry Anthology',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '3 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive study of Lawrence\'s "Piano", covering context, language, structure, and exam technique for the Edexcel IGCSE Literature anthology.',
    color: '#dc2626',
    moduleCount: 4,
    quizCount: 12,
    moduleList: [
      {
        id: 'iglit-pi-m1',
        title: 'Context & Overview',
        duration: '45 min',
      },
      {
        id: 'iglit-pi-m2',
        title: 'Language & Imagery Analysis',
        duration: '50 min',
      },
      {
        id: 'iglit-pi-m3',
        title: 'Structure & Form',
        duration: '45 min',
      },
      {
        id: 'iglit-pi-m4',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-poem-hide-and-seek',
    title: '"Hide and Seek" by Vernon Scannell',
    subtitle: 'Edexcel IGCSE Literature Poetry Anthology',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '3 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive study of Scannell\'s "Hide and Seek", covering context, language, structure, and exam technique for the Edexcel IGCSE Literature anthology.',
    color: '#d97706',
    moduleCount: 4,
    quizCount: 12,
    moduleList: [
      {
        id: 'iglit-has-m1',
        title: 'Context & Overview',
        duration: '45 min',
      },
      {
        id: 'iglit-has-m2',
        title: 'Language & Imagery Analysis',
        duration: '50 min',
      },
      {
        id: 'iglit-has-m3',
        title: 'Structure & Form',
        duration: '45 min',
      },
      {
        id: 'iglit-has-m4',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-poem-sonnet-116',
    title: '"Sonnet 116" by William Shakespeare',
    subtitle: 'Edexcel IGCSE Literature Poetry Anthology',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '3 weeks',
    level: 'IGCSE',
    description:
      "A comprehensive study of Shakespeare's Sonnet 116, covering context, language, structure, and exam technique for the Edexcel IGCSE Literature anthology.",
    color: '#9333ea',
    moduleCount: 4,
    quizCount: 12,
    moduleList: [
      {
        id: 'iglit-s116-m1',
        title: 'Context & Overview',
        duration: '45 min',
      },
      {
        id: 'iglit-s116-m2',
        title: 'Language & Imagery Analysis',
        duration: '50 min',
      },
      {
        id: 'iglit-s116-m3',
        title: 'Structure & Form',
        duration: '45 min',
      },
      {
        id: 'iglit-s116-m4',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-poem-la-belle-dame',
    title: '"La Belle Dame sans Merci" - John Keats',
    subtitle: 'Edexcel IGCSE Literature poetry anthology study',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '3 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive study of Keats\'s "La Belle Dame sans Merci" covering context, language and imagery analysis, structure and form, and exam practice with model responses.',
    color: '#7C3AED',
    moduleCount: 4,
    quizCount: 12,
    moduleList: [
      {
        id: 'igp2-labelle-m1',
        title: 'Context & Overview',
        duration: '45 min',
      },
      {
        id: 'igp2-labelle-m2',
        title: 'Language & Imagery Analysis',
        duration: '50 min',
      },
      {
        id: 'igp2-labelle-m3',
        title: 'Structure & Form',
        duration: '45 min',
      },
      {
        id: 'igp2-labelle-m4',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-poem-at-thirty-nine',
    title: '"Poem at Thirty-Nine" - Alice Walker',
    subtitle: 'Edexcel IGCSE Literature poetry anthology study',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '3 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive study of Alice Walker\'s "Poem at Thirty-Nine" covering context, language and imagery analysis, structure and form, and exam practice with model responses.',
    color: '#7C3AED',
    moduleCount: 4,
    quizCount: 12,
    moduleList: [
      {
        id: 'igp2-thirty9-m1',
        title: 'Context & Overview',
        duration: '45 min',
      },
      {
        id: 'igp2-thirty9-m2',
        title: 'Language & Imagery Analysis',
        duration: '50 min',
      },
      {
        id: 'igp2-thirty9-m3',
        title: 'Structure & Form',
        duration: '45 min',
      },
      {
        id: 'igp2-thirty9-m4',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-poem-war-photographer',
    title: '"War Photographer" - Carol Ann Duffy',
    subtitle: 'Edexcel IGCSE Literature poetry anthology study',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '3 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive study of Carol Ann Duffy\'s "War Photographer" covering context, language and imagery analysis, structure and form, and exam practice with model responses.',
    color: '#7C3AED',
    moduleCount: 4,
    quizCount: 12,
    moduleList: [
      {
        id: 'igp2-warpho-m1',
        title: 'Context & Overview',
        duration: '45 min',
      },
      {
        id: 'igp2-warpho-m2',
        title: 'Language & Imagery Analysis',
        duration: '50 min',
      },
      {
        id: 'igp2-warpho-m3',
        title: 'Structure & Form',
        duration: '45 min',
      },
      {
        id: 'igp2-warpho-m4',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-poem-the-tyger',
    title: '"The Tyger" - William Blake',
    subtitle: 'Edexcel IGCSE Literature poetry anthology study',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '3 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive study of William Blake\'s "The Tyger" covering context, language and imagery analysis, structure and form, and exam practice with model responses.',
    color: '#7C3AED',
    moduleCount: 4,
    quizCount: 12,
    moduleList: [
      {
        id: 'igp2-tyger-m1',
        title: 'Context & Overview',
        duration: '45 min',
      },
      {
        id: 'igp2-tyger-m2',
        title: 'Language & Imagery Analysis',
        duration: '50 min',
      },
      {
        id: 'igp2-tyger-m3',
        title: 'Structure & Form',
        duration: '45 min',
      },
      {
        id: 'igp2-tyger-m4',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-poem-my-last-duchess',
    title: '"My Last Duchess" - Robert Browning',
    subtitle: 'Edexcel IGCSE Literature poetry anthology study',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '3 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive study of Robert Browning\'s "My Last Duchess" covering context, language and imagery analysis, structure and form, and exam practice with model responses.',
    color: '#7C3AED',
    moduleCount: 4,
    quizCount: 12,
    moduleList: [
      {
        id: 'igp2-duchess-m1',
        title: 'Context & Overview',
        duration: '45 min',
      },
      {
        id: 'igp2-duchess-m2',
        title: 'Language & Imagery Analysis',
        duration: '50 min',
      },
      {
        id: 'igp2-duchess-m3',
        title: 'Structure & Form',
        duration: '45 min',
      },
      {
        id: 'igp2-duchess-m4',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-poem-half-caste',
    title: '"Half-caste" - John Agard',
    subtitle: 'Edexcel IGCSE Literature poetry anthology study',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '3 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive study of John Agard\'s "Half-caste" covering context, language and imagery analysis, structure and form, and exam practice with model responses.',
    color: '#7C3AED',
    moduleCount: 4,
    quizCount: 12,
    moduleList: [
      {
        id: 'igp2-halfcaste-m1',
        title: 'Context & Overview',
        duration: '45 min',
      },
      {
        id: 'igp2-halfcaste-m2',
        title: 'Language & Imagery Analysis',
        duration: '50 min',
      },
      {
        id: 'igp2-halfcaste-m3',
        title: 'Structure & Form',
        duration: '45 min',
      },
      {
        id: 'igp2-halfcaste-m4',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-poem-do-not-go-gentle',
    title: '"Do not go gentle into that good night" - Dylan Thomas',
    subtitle: 'Edexcel IGCSE Literature poetry anthology study',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '3 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive study of Dylan Thomas\'s "Do not go gentle into that good night" covering context, language and imagery analysis, structure and form, and exam practice with model responses.',
    color: '#7C3AED',
    moduleCount: 4,
    quizCount: 12,
    moduleList: [
      {
        id: 'igp2-donotgo-m1',
        title: 'Context & Overview',
        duration: '45 min',
      },
      {
        id: 'igp2-donotgo-m2',
        title: 'Language & Imagery Analysis',
        duration: '50 min',
      },
      {
        id: 'igp2-donotgo-m3',
        title: 'Structure & Form',
        duration: '45 min',
      },
      {
        id: 'igp2-donotgo-m4',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-poem-remember',
    title: '"Remember" - Christina Rossetti',
    subtitle: 'Edexcel IGCSE Literature poetry anthology study',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '3 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive study of Christina Rossetti\'s "Remember" covering context, language and imagery analysis, structure and form, and exam practice with model responses.',
    color: '#7C3AED',
    moduleCount: 4,
    quizCount: 12,
    moduleList: [
      {
        id: 'igp2-remember-m1',
        title: 'Context & Overview',
        duration: '45 min',
      },
      {
        id: 'igp2-remember-m2',
        title: 'Language & Imagery Analysis',
        duration: '50 min',
      },
      {
        id: 'igp2-remember-m3',
        title: 'Structure & Form',
        duration: '45 min',
      },
      {
        id: 'igp2-remember-m4',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-prose-to-kill-a-mockingbird',
    title: 'To Kill a Mockingbird - IGCSE Literature',
    subtitle:
      "Harper Lee's exploration of racial injustice, moral courage and the loss of innocence in the American South",
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '6 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive IGCSE Literature course on To Kill a Mockingbird by Harper Lee, covering context, plot, characters, themes, language and exam technique for the Edexcel IGCSE Literature specification.',
    color: '#8B4513',
    moduleCount: 6,
    quizCount: 18,
    moduleList: [
      {
        id: 'tkam-m1',
        title: 'Context & Author Background',
        duration: '45 min',
      },
      {
        id: 'tkam-m2',
        title: 'Plot & Structure',
        duration: '50 min',
      },
      {
        id: 'tkam-m3',
        title: 'Character Analysis',
        duration: '50 min',
      },
      {
        id: 'tkam-m4',
        title: 'Themes & Ideas',
        duration: '50 min',
      },
      {
        id: 'tkam-m5',
        title: 'Language & Style',
        duration: '45 min',
      },
      {
        id: 'tkam-m6',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-prose-of-mice-and-men',
    title: 'Of Mice and Men - IGCSE Literature',
    subtitle:
      "John Steinbeck's tragic novella of friendship, loneliness and broken dreams in Depression-era California",
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '6 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive IGCSE Literature course on Of Mice and Men by John Steinbeck, covering context, plot, characters, themes, language and exam technique for the Edexcel IGCSE Literature specification.',
    color: '#A0522D',
    moduleCount: 6,
    quizCount: 18,
    moduleList: [
      {
        id: 'omam-m1',
        title: 'Context & Author Background',
        duration: '45 min',
      },
      {
        id: 'omam-m2',
        title: 'Plot & Structure',
        duration: '50 min',
      },
      {
        id: 'omam-m3',
        title: 'Character Analysis',
        duration: '50 min',
      },
      {
        id: 'omam-m4',
        title: 'Themes & Ideas',
        duration: '50 min',
      },
      {
        id: 'omam-m5',
        title: 'Language & Style',
        duration: '45 min',
      },
      {
        id: 'omam-m6',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-prose-whale-rider',
    title: 'The Whale Rider - IGCSE Literature',
    subtitle:
      "Witi Ihimaera's story of tradition, gender and spiritual connection in Maori New Zealand",
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '6 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive IGCSE Literature course on The Whale Rider by Witi Ihimaera, covering context, plot, characters, themes, language and exam technique for the Edexcel IGCSE Literature specification.',
    color: '#1E6091',
    moduleCount: 6,
    quizCount: 18,
    moduleList: [
      {
        id: 'wr-m1',
        title: 'Context & Author Background',
        duration: '45 min',
      },
      {
        id: 'wr-m2',
        title: 'Plot & Structure',
        duration: '50 min',
      },
      {
        id: 'wr-m3',
        title: 'Character Analysis',
        duration: '50 min',
      },
      {
        id: 'wr-m4',
        title: 'Themes & Ideas',
        duration: '50 min',
      },
      {
        id: 'wr-m5',
        title: 'Language & Style',
        duration: '45 min',
      },
      {
        id: 'wr-m6',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-prose-joy-luck-club',
    title: 'The Joy Luck Club - IGCSE Literature',
    subtitle:
      "Amy Tan's interwoven stories of Chinese immigrant mothers and their American daughters",
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '6 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive IGCSE Literature course on The Joy Luck Club by Amy Tan, covering context, plot, characters, themes, language and exam technique for the Edexcel IGCSE Literature specification.',
    color: '#C41E3A',
    moduleCount: 6,
    quizCount: 18,
    moduleList: [
      {
        id: 'jlc-m1',
        title: 'Context & Author Background',
        duration: '45 min',
      },
      {
        id: 'jlc-m2',
        title: 'Plot & Structure',
        duration: '50 min',
      },
      {
        id: 'jlc-m3',
        title: 'Character Analysis',
        duration: '50 min',
      },
      {
        id: 'jlc-m4',
        title: 'Themes & Ideas',
        duration: '50 min',
      },
      {
        id: 'jlc-m5',
        title: 'Language & Style',
        duration: '45 min',
      },
      {
        id: 'jlc-m6',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-prose-things-fall-apart',
    title: 'Things Fall Apart - IGCSE Literature',
    subtitle:
      "Chinua Achebe's groundbreaking novel of colonialism, tradition and cultural destruction in Nigeria",
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '6 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive IGCSE Literature course on Things Fall Apart by Chinua Achebe, covering context, plot, characters, themes, language and exam technique for the Edexcel IGCSE Literature specification.',
    color: '#8B0000',
    moduleCount: 6,
    quizCount: 18,
    moduleList: [
      {
        id: 'tfa-m1',
        title: 'Context & Author Background',
        duration: '45 min',
      },
      {
        id: 'tfa-m2',
        title: 'Plot & Structure',
        duration: '50 min',
      },
      {
        id: 'tfa-m3',
        title: 'Character Analysis',
        duration: '50 min',
      },
      {
        id: 'tfa-m4',
        title: 'Themes & Ideas',
        duration: '50 min',
      },
      {
        id: 'tfa-m5',
        title: 'Language & Style',
        duration: '45 min',
      },
      {
        id: 'tfa-m6',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-prose-klara-and-the-sun',
    title: 'Klara and the Sun - IGCSE Literature',
    subtitle:
      "Kazuo Ishiguro's haunting exploration of artificial intelligence, love and what makes us human",
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '6 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive IGCSE Literature course on Klara and the Sun by Kazuo Ishiguro, covering context, plot, characters, themes, language and exam technique for the Edexcel IGCSE Literature specification.',
    color: '#DAA520',
    moduleCount: 6,
    quizCount: 18,
    moduleList: [
      {
        id: 'klara-m1',
        title: 'Context & Author Background',
        duration: '45 min',
      },
      {
        id: 'klara-m2',
        title: 'Plot & Structure',
        duration: '50 min',
      },
      {
        id: 'klara-m3',
        title: 'Character Analysis',
        duration: '50 min',
      },
      {
        id: 'klara-m4',
        title: 'Themes & Ideas',
        duration: '50 min',
      },
      {
        id: 'klara-m5',
        title: 'Language & Style',
        duration: '45 min',
      },
      {
        id: 'klara-m6',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-prose-western-lane',
    title: 'Western Lane - IGCSE Literature',
    subtitle:
      "Chetna Maroo's luminous debut novel of grief, discipline and the body's language of loss",
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '6 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive IGCSE Literature course on Western Lane by Chetna Maroo, covering context, plot, characters, themes, language and exam technique for the Edexcel IGCSE Literature specification.',
    color: '#4A766E',
    moduleCount: 6,
    quizCount: 18,
    moduleList: [
      {
        id: 'wl-m1',
        title: 'Context & Author Background',
        duration: '45 min',
      },
      {
        id: 'wl-m2',
        title: 'Plot & Structure',
        duration: '50 min',
      },
      {
        id: 'wl-m3',
        title: 'Character Analysis',
        duration: '50 min',
      },
      {
        id: 'wl-m4',
        title: 'Themes & Ideas',
        duration: '50 min',
      },
      {
        id: 'wl-m5',
        title: 'Language & Style',
        duration: '45 min',
      },
      {
        id: 'wl-m6',
        title: 'Exam Practice & Model Response',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'igcse-lit-drama-view-from-bridge',
    title: 'A View from the Bridge',
    subtitle: 'Edexcel IGCSE Literature - Arthur Miller',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '6 weeks',
    level: 'IGCSE',
    description:
      "A comprehensive study guide for Arthur Miller's A View from the Bridge for Edexcel IGCSE Literature. Covers context, plot, character analysis, themes, language and stagecraft, and exam technique with model responses.",
    color: '#6366f1',
    moduleCount: 6,
    quizCount: 18,
    moduleList: [
      {
        id: 'vftb-m1',
        title: 'Context & Playwright Background',
        duration: '45 min',
      },
      {
        id: 'vftb-m2',
        title: 'Plot & Structure',
        duration: '50 min',
      },
      {
        id: 'vftb-m3',
        title: 'Character Analysis',
        duration: '50 min',
      },
      {
        id: 'vftb-m4',
        title: 'Themes & Ideas',
        duration: '50 min',
      },
      {
        id: 'vftb-m5',
        title: 'Language, Stagecraft & Dramatic Techniques',
        duration: '50 min',
      },
      {
        id: 'vftb-m6',
        title: 'Exam Practice & Model Response',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'igcse-lit-drama-inspector-calls',
    title: 'An Inspector Calls',
    subtitle: 'Edexcel IGCSE Literature - J B Priestley',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '6 weeks',
    level: 'IGCSE',
    description:
      "A comprehensive study guide for J B Priestley's An Inspector Calls for Edexcel IGCSE Literature. Covers context, plot, character analysis, themes, language and stagecraft, and exam technique with model responses.",
    color: '#8b5cf6',
    moduleCount: 6,
    quizCount: 18,
    moduleList: [
      {
        id: 'aic-ig-m1',
        title: 'Context & Playwright Background',
        duration: '45 min',
      },
      {
        id: 'aic-ig-m2',
        title: 'Plot & Structure',
        duration: '50 min',
      },
      {
        id: 'aic-ig-m3',
        title: 'Character Analysis',
        duration: '50 min',
      },
      {
        id: 'aic-ig-m4',
        title: 'Themes & Ideas',
        duration: '50 min',
      },
      {
        id: 'aic-ig-m5',
        title: 'Language, Stagecraft & Dramatic Techniques',
        duration: '50 min',
      },
      {
        id: 'aic-ig-m6',
        title: 'Exam Practice & Model Response',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'igcse-lit-drama-curious-incident',
    title: 'The Curious Incident of the Dog in the Night-time',
    subtitle: 'Edexcel IGCSE Literature - Mark Haddon / Simon Stephens',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '6 weeks',
    level: 'IGCSE',
    description:
      'A comprehensive study guide for The Curious Incident of the Dog in the Night-time (adapted by Simon Stephens) for Edexcel IGCSE Literature. Covers context, plot, character analysis, themes, stagecraft, and exam technique with model responses.',
    color: '#a855f7',
    moduleCount: 6,
    quizCount: 18,
    moduleList: [
      {
        id: 'ci-m1',
        title: 'Context & Playwright Background',
        duration: '45 min',
      },
      {
        id: 'ci-m2',
        title: 'Plot & Structure',
        duration: '50 min',
      },
      {
        id: 'ci-m3',
        title: 'Character Analysis',
        duration: '50 min',
      },
      {
        id: 'ci-m4',
        title: 'Themes & Ideas',
        duration: '50 min',
      },
      {
        id: 'ci-m5',
        title: 'Language, Stagecraft & Dramatic Techniques',
        duration: '50 min',
      },
      {
        id: 'ci-m6',
        title: 'Exam Practice & Model Response',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'igcse-lit-drama-kindertransport',
    title: 'Kindertransport',
    subtitle: 'Edexcel IGCSE Literature - Diane Samuels',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '6 weeks',
    level: 'IGCSE',
    description:
      "A comprehensive study guide for Diane Samuels' Kindertransport for Edexcel IGCSE Literature. Covers context, plot, character analysis, themes, language and stagecraft, and exam technique with model responses.",
    color: '#7c3aed',
    moduleCount: 6,
    quizCount: 18,
    moduleList: [
      {
        id: 'kt-m1',
        title: 'Context & Playwright Background',
        duration: '45 min',
      },
      {
        id: 'kt-m2',
        title: 'Plot & Structure',
        duration: '50 min',
      },
      {
        id: 'kt-m3',
        title: 'Character Analysis',
        duration: '50 min',
      },
      {
        id: 'kt-m4',
        title: 'Themes & Ideas',
        duration: '50 min',
      },
      {
        id: 'kt-m5',
        title: 'Language, Stagecraft & Dramatic Techniques',
        duration: '50 min',
      },
      {
        id: 'kt-m6',
        title: 'Exam Practice & Model Response',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'igcse-lit-drama-death-kings-horseman',
    title: "Death and the King's Horseman",
    subtitle: 'Edexcel IGCSE Literature - Wole Soyinka',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '6 weeks',
    level: 'IGCSE',
    description:
      "A comprehensive study guide for Wole Soyinka's Death and the King's Horseman for Edexcel IGCSE Literature. Covers context, plot, character analysis, themes, language and stagecraft, and exam technique with model responses.",
    color: '#6d28d9',
    moduleCount: 6,
    quizCount: 18,
    moduleList: [
      {
        id: 'dkh-m1',
        title: 'Context & Playwright Background',
        duration: '45 min',
      },
      {
        id: 'dkh-m2',
        title: 'Plot & Structure',
        duration: '50 min',
      },
      {
        id: 'dkh-m3',
        title: 'Character Analysis',
        duration: '50 min',
      },
      {
        id: 'dkh-m4',
        title: 'Themes & Ideas',
        duration: '50 min',
      },
      {
        id: 'dkh-m5',
        title: 'Language, Stagecraft & Dramatic Techniques',
        duration: '50 min',
      },
      {
        id: 'dkh-m6',
        title: 'Exam Practice & Model Response',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'igcse-lit-drama-romeo-juliet',
    title: 'Romeo and Juliet',
    subtitle: 'Edexcel IGCSE Literature - William Shakespeare',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '6 weeks',
    level: 'IGCSE',
    description:
      "A comprehensive study guide for Shakespeare's Romeo and Juliet for Edexcel IGCSE Literature. Covers context, plot, character analysis, themes, language and stagecraft, and exam technique with model responses.",
    color: '#5b21b6',
    moduleCount: 6,
    quizCount: 18,
    moduleList: [
      {
        id: 'rj-ig-m1',
        title: 'Context & Playwright Background',
        duration: '45 min',
      },
      {
        id: 'rj-ig-m2',
        title: 'Plot & Structure',
        duration: '50 min',
      },
      {
        id: 'rj-ig-m3',
        title: 'Character Analysis',
        duration: '50 min',
      },
      {
        id: 'rj-ig-m4',
        title: 'Themes & Ideas',
        duration: '50 min',
      },
      {
        id: 'rj-ig-m5',
        title: 'Language, Stagecraft & Dramatic Techniques',
        duration: '50 min',
      },
      {
        id: 'rj-ig-m6',
        title: 'Exam Practice & Model Response',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'igcse-lit-drama-macbeth',
    title: 'Macbeth',
    subtitle: 'Edexcel IGCSE Literature - William Shakespeare',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '6 weeks',
    level: 'IGCSE',
    description:
      "A comprehensive study guide for Shakespeare's Macbeth for Edexcel IGCSE Literature. Covers context, plot, character analysis, themes, language and stagecraft, and exam technique with model responses.",
    color: '#4c1d95',
    moduleCount: 6,
    quizCount: 18,
    moduleList: [
      {
        id: 'mac-ig-m1',
        title: 'Context & Playwright Background',
        duration: '45 min',
      },
      {
        id: 'mac-ig-m2',
        title: 'Plot & Structure',
        duration: '50 min',
      },
      {
        id: 'mac-ig-m3',
        title: 'Character Analysis',
        duration: '50 min',
      },
      {
        id: 'mac-ig-m4',
        title: 'Themes & Ideas',
        duration: '50 min',
      },
      {
        id: 'mac-ig-m5',
        title: 'Language, Stagecraft & Dramatic Techniques',
        duration: '50 min',
      },
      {
        id: 'mac-ig-m6',
        title: 'Exam Practice & Model Response',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'igcse-lit-drama-merchant-of-venice',
    title: 'The Merchant of Venice',
    subtitle: 'Edexcel IGCSE Literature - William Shakespeare',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '6 weeks',
    level: 'IGCSE',
    description:
      "A comprehensive study guide for Shakespeare's The Merchant of Venice for Edexcel IGCSE Literature. Covers context, plot, character analysis, themes, language and stagecraft, and exam technique with model responses.",
    color: '#3b0764',
    moduleCount: 6,
    quizCount: 18,
    moduleList: [
      {
        id: 'mov-m1',
        title: 'Context & Playwright Background',
        duration: '45 min',
      },
      {
        id: 'mov-m2',
        title: 'Plot & Structure',
        duration: '50 min',
      },
      {
        id: 'mov-m3',
        title: 'Character Analysis',
        duration: '50 min',
      },
      {
        id: 'mov-m4',
        title: 'Themes & Ideas',
        duration: '50 min',
      },
      {
        id: 'mov-m5',
        title: 'Language, Stagecraft & Dramatic Techniques',
        duration: '50 min',
      },
      {
        id: 'mov-m6',
        title: 'Exam Practice & Model Response',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'igcse-lit-classic-pride-and-prejudice',
    title: 'IGCSE Literature - Pride and Prejudice',
    subtitle: 'Jane Austen - Pride and Prejudice (Edexcel IGCSE Literature)',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '6 weeks',
    level: 'IGCSE',
    description:
      "A comprehensive study of Jane Austen's Pride and Prejudice for Edexcel IGCSE Literature. Covers context and author background, plot and structure, character analysis, themes and ideas, language and style, and exam practice with model responses - equipping you to write confident, analytical responses on this classic novel.",
    color: '#8b5cf6',
    moduleCount: 6,
    quizCount: 18,
    moduleList: [
      {
        id: 'igcse-classic-pp-m1',
        title: 'Context & Author Background',
        duration: '45 min',
      },
      {
        id: 'igcse-classic-pp-m2',
        title: 'Plot & Structure',
        duration: '50 min',
      },
      {
        id: 'igcse-classic-pp-m3',
        title: 'Character Analysis',
        duration: '55 min',
      },
      {
        id: 'igcse-classic-pp-m4',
        title: 'Themes & Ideas',
        duration: '50 min',
      },
      {
        id: 'igcse-classic-pp-m5',
        title: 'Language & Style',
        duration: '50 min',
      },
      {
        id: 'igcse-classic-pp-m6',
        title: 'Exam Practice & Model Response',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'igcse-lit-classic-great-expectations',
    title: 'IGCSE Literature - Great Expectations',
    subtitle: 'Charles Dickens - Great Expectations (Edexcel IGCSE Literature)',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '6 weeks',
    level: 'IGCSE',
    description:
      "A comprehensive study of Charles Dickens's Great Expectations for Edexcel IGCSE Literature. Covers context and author background, plot and structure, character analysis, themes and ideas, language and style, and exam practice with model responses - equipping you to write confident, analytical responses on this classic novel.",
    color: '#7c3aed',
    moduleCount: 6,
    quizCount: 18,
    moduleList: [
      {
        id: 'igcse-classic-ge-m1',
        title: 'Context & Author Background',
        duration: '45 min',
      },
      {
        id: 'igcse-classic-ge-m2',
        title: 'Plot & Structure',
        duration: '50 min',
      },
      {
        id: 'igcse-classic-ge-m3',
        title: 'Character Analysis',
        duration: '55 min',
      },
      {
        id: 'igcse-classic-ge-m4',
        title: 'Themes & Ideas',
        duration: '50 min',
      },
      {
        id: 'igcse-classic-ge-m5',
        title: 'Language & Style',
        duration: '50 min',
      },
      {
        id: 'igcse-classic-ge-m6',
        title: 'Exam Practice & Model Response',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'igcse-lit-classic-the-scarlet-letter',
    title: 'IGCSE Literature - The Scarlet Letter',
    subtitle: 'Nathaniel Hawthorne - The Scarlet Letter (Edexcel IGCSE Literature)',
    tier: 'IGCSE',
    board: 'Edexcel',
    price: 0,
    duration: '6 weeks',
    level: 'IGCSE',
    description:
      "A comprehensive study of Nathaniel Hawthorne's The Scarlet Letter for Edexcel IGCSE Literature. Covers context and author background, plot and structure, character analysis, themes and ideas, language and style, and exam practice with model responses - equipping you to write confident, analytical responses on this classic novel.",
    color: '#6d28d9',
    moduleCount: 6,
    quizCount: 18,
    moduleList: [
      {
        id: 'igcse-classic-sl-m1',
        title: 'Context & Author Background',
        duration: '45 min',
      },
      {
        id: 'igcse-classic-sl-m2',
        title: 'Plot & Structure',
        duration: '50 min',
      },
      {
        id: 'igcse-classic-sl-m3',
        title: 'Character Analysis',
        duration: '55 min',
      },
      {
        id: 'igcse-classic-sl-m4',
        title: 'Themes & Ideas',
        duration: '50 min',
      },
      {
        id: 'igcse-classic-sl-m5',
        title: 'Language & Style',
        duration: '50 min',
      },
      {
        id: 'igcse-classic-sl-m6',
        title: 'Exam Practice & Model Response',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'ks3-y7-t1-fox-girl',
    title: 'Year 7 Term 1: Fox Girl & White Gazelle',
    subtitle: 'Identity, belonging, and character analysis through a dual-narrative novel.',
    tier: 'KS3',
    board: 'Universal',
    price: 0,
    duration: '6-8 hours',
    level: 'Year 7',
    description:
      "Explore identity and belonging through Katherine Rundell's Fox Girl and White Gazelle. Develop reading comprehension, character analysis, PEE paragraph writing, and inference skills aligned to 7R.1-7R.6 and 7W.1-7W.9.",
    color: '#f59e0b',
    moduleCount: 12,
    quizCount: 60,
    moduleList: [
      {
        id: 'y7t1-fg-m1',
        title: 'Introduction to Character - What Makes a Character?',
        duration: '45 mins',
      },
      {
        id: 'y7t1-fg-m2',
        title: 'First Impressions - Meeting the Protagonists',
        duration: '45 mins',
      },
      {
        id: 'y7t1-fg-m3',
        title: 'Language and Characterisation - How Writers Reveal Character Through Words',
        duration: '50 mins',
      },
      {
        id: 'y7t1-fg-m4',
        title: 'Dialogue and Voice - What Characters Say and How They Say It',
        duration: '45 mins',
      },
      {
        id: 'y7t1-fg-m5',
        title: 'Theme: Identity and Belonging - What Does It Mean to Belong?',
        duration: '50 mins',
      },
      {
        id: 'y7t1-fg-m6',
        title: 'Narrative Structure - Beginning, Middle, End and Why It Matters',
        duration: '45 mins',
      },
      {
        id: 'y7t1-fg-m7',
        title: 'Setting and Atmosphere - How Place Shapes Story',
        duration: '45 mins',
      },
      {
        id: 'y7t1-fg-m8',
        title: 'Inference Skills - Reading Between the Lines',
        duration: '50 mins',
      },
      {
        id: 'y7t1-fg-m9',
        title: 'Evidence and Quotation - Selecting the Right Proof',
        duration: '45 mins',
      },
      {
        id: 'y7t1-fg-m10',
        title: 'Analytical Writing: PEE Paragraphs - Building Your First Analysis',
        duration: '50 mins',
      },
      {
        id: 'y7t1-fg-m11',
        title: 'Analytical Writing: PEEL Extension - Adding Depth to Analysis',
        duration: '50 mins',
      },
      {
        id: 'y7t1-fg-m12',
        title: 'Assessment Preparation - Putting It All Together',
        duration: '55 mins',
      },
    ],
  },
  {
    id: 'ks3-y7-t2-voice-identity',
    title: 'Year 7 Term 2: Voice & Identity',
    subtitle: 'Finding your own voice and exploring others through autobiography and fiction.',
    tier: 'KS3',
    board: 'Universal',
    price: 0,
    duration: '6-8 hours',
    level: 'Year 7',
    description:
      "Discover what makes a writer's voice unique and how language shapes identity. Covers tone, perspective, descriptive writing, reflective writing, and empathy through diverse texts. Aligned to 7R.3-7R.5 and 7W.1-7W.6.",
    color: '#8b5cf6',
    moduleCount: 12,
    quizCount: 60,
    moduleList: [
      {
        id: 'y7t2-m1',
        title: 'What is Voice? Understanding Tone and Perspective',
        duration: '45 mins',
      },
      {
        id: 'y7t2-m2',
        title: 'Autobiographical Writing - Reading Personal Accounts',
        duration: '50 mins',
      },
      {
        id: 'y7t2-m3',
        title: 'Language and Identity - How Words Shape Who We Are',
        duration: '50 mins',
      },
      {
        id: 'y7t2-m4',
        title: "Descriptive Writing Techniques - Show Don't Tell",
        duration: '50 mins',
      },
      {
        id: 'y7t2-m5',
        title: 'Reflective Writing - Looking Inward',
        duration: '45 mins',
      },
      {
        id: 'y7t2-m6',
        title: 'Crafting a Personal Narrative - Structure and Voice',
        duration: '50 mins',
      },
      {
        id: 'y7t2-m7',
        title: "Empathy Through Reading - Walking in Another's Shoes",
        duration: '50 mins',
      },
      {
        id: 'y7t2-m8',
        title: 'Viewpoint and Perspective - First vs Third Person',
        duration: '45 mins',
      },
      {
        id: 'y7t2-m9',
        title: "Writing from Another's Perspective - Diary Entries and Letters",
        duration: '50 mins',
      },
      {
        id: 'y7t2-m10',
        title: 'Transactional Writing Bridge - Articles and Letters with Purpose',
        duration: '50 mins',
      },
      {
        id: 'y7t2-m11',
        title: "Vocabulary for Emotion - Building a Writer's Toolkit",
        duration: '45 mins',
      },
      {
        id: 'y7t2-m12',
        title: 'Assessment: Creative Writing Portfolio',
        duration: '60 mins',
      },
    ],
  },
  {
    id: 'ks3-y7-t3-shaping-meaning',
    title: 'Year 7 Term 3: Shaping Meaning',
    subtitle: 'Stories, folk tales, and poetry - how writers craft meaning for their readers.',
    tier: 'KS3',
    board: 'Universal',
    price: 0,
    duration: '6-8 hours',
    level: 'Year 7',
    description:
      'Analyse narrative structure and moral themes in folk tales from different cultures, then explore poetry through annotation, imagery, and comparison. End-of-year assessment combines both skills. Aligned to 7R.3-7R.6 and 7W.2-7W.5.',
    color: '#10b981',
    moduleCount: 12,
    quizCount: 60,
    moduleList: [
      {
        id: 'y7t3-m1',
        title: 'Narrative Conventions',
        duration: '40 min',
      },
      {
        id: 'y7t3-m2',
        title: 'Moral Themes in Folk Tales',
        duration: '40 min',
      },
      {
        id: 'y7t3-m3',
        title: 'Setting as Symbol',
        duration: '40 min',
      },
      {
        id: 'y7t3-m4',
        title: 'Comparing Stories',
        duration: '40 min',
      },
      {
        id: 'y7t3-m5',
        title: 'Structured Analytical Paragraphs',
        duration: '40 min',
      },
      {
        id: 'y7t3-m6',
        title: 'Introduction to Poetry',
        duration: '40 min',
      },
      {
        id: 'y7t3-m7',
        title: 'Poetic Methods: Rhyme and Rhythm',
        duration: '40 min',
      },
      {
        id: 'y7t3-m8',
        title: 'Poetic Methods: Imagery and Figurative Language',
        duration: '40 min',
      },
      {
        id: 'y7t3-m9',
        title: 'Analysing a Poem',
        duration: '45 min',
      },
      {
        id: 'y7t3-m10',
        title: 'Comparing Poems',
        duration: '45 min',
      },
      {
        id: 'y7t3-m11',
        title: 'Subject Terminology',
        duration: '35 min',
      },
      {
        id: 'y7t3-m12',
        title: 'Assessment: Poetry and Prose Analysis',
        duration: '50 min',
      },
    ],
  },
  {
    id: 'ks3-y8-t1-hunger-games',
    title: 'Year 8 Term 1: The Hunger Games',
    subtitle: 'Power, inequality, and resistance through a dystopian novel.',
    tier: 'KS3',
    board: 'Universal',
    price: 0,
    duration: '6-8 hours',
    level: 'Year 8',
    description:
      "Examine power structures, social inequality, and resistance in Suzanne Collins's The Hunger Games. Develop inference, analytical paragraph writing, and contextual understanding. Aligned to 8R.1-8R.7 and 8W.1-8W.9.",
    color: '#ef4444',
    moduleCount: 12,
    quizCount: 60,
    moduleList: [
      {
        id: 'y8t1-hg-m1',
        title: 'The World of Panem - Setting and Context',
        duration: '40 mins',
      },
      {
        id: 'y8t1-hg-m2',
        title: 'Power and Control - How the Capitol Maintains Dominance',
        duration: '40 mins',
      },
      {
        id: 'y8t1-hg-m3',
        title: 'Katniss as Protagonist - Character Analysis',
        duration: '40 mins',
      },
      {
        id: 'y8t1-hg-m4',
        title: 'Inequality and Social Class - Themes of Injustice',
        duration: '40 mins',
      },
      {
        id: 'y8t1-hg-m5',
        title: 'Language of Oppression - How Writers Present Power',
        duration: '40 mins',
      },
      {
        id: 'y8t1-hg-m6',
        title: 'Rebellion and Resistance - When Characters Fight Back',
        duration: '40 mins',
      },
      {
        id: 'y8t1-hg-m7',
        title: 'Inference and Evidence - Developing 8R.4 Skills',
        duration: '35 mins',
      },
      {
        id: 'y8t1-hg-m8',
        title: 'Embedding Quotations - Moving Beyond Bolt-On Quotes',
        duration: '35 mins',
      },
      {
        id: 'y8t1-hg-m9',
        title: 'Analytical Paragraphs - "This suggests... because..."',
        duration: '40 mins',
      },
      {
        id: 'y8t1-hg-m10',
        title: 'Tense Consistency in Writing - Grammar Focus',
        duration: '30 mins',
      },
      {
        id: 'y8t1-hg-m11',
        title: 'Persuasive Writing on Justice - Transactional Bridge',
        duration: '40 mins',
      },
      {
        id: 'y8t1-hg-m12',
        title: 'Assessment: Analytical Essay on Power',
        duration: '50 mins',
      },
    ],
  },
  {
    id: 'ks3-y8-t2-conflict-poetry',
    title: 'Year 8 Term 2: Conflict & Poetry',
    subtitle:
      'War poetry, humanity, and an introduction to Shakespeare - KS3 foundations with GCSE-prep cross-references.',
    tier: 'KS3',
    board: 'Universal',
    price: 0,
    duration: '6-8 hours',
    level: 'Year 8',
    description:
      "Build transferable analytical skills through conflict poetry exploring humanity and the cost of war, then explore Shakespeare's language and stagecraft in Macbeth and Julius Caesar. Develop comparative essay skills. This is a KS3 unit teaching transferable poetry-analysis skills; references to AQA Power & Conflict anthology poems are intentional GCSE-preparation cross-references, not a prescribed KS3 anthology. Aligned to 8R.1-8R.7 and 8W.2-8W.7.",
    color: '#3b82f6',
    moduleCount: 12,
    quizCount: 60,
    moduleList: [
      {
        id: 'y8t2-m1',
        title: 'Poetry of Conflict - Introduction to the Anthology',
        duration: '40 min',
      },
      {
        id: 'y8t2-m2',
        title: 'Imagery in War Poetry - Visual Language and Effect',
        duration: '45 min',
      },
      {
        id: 'y8t2-m3',
        title: 'Tone and Mood - How Poets Create Feeling',
        duration: '40 min',
      },
      {
        id: 'y8t2-m4',
        title: 'Structure in Poetry - Form, Stanza, Enjambment',
        duration: '45 min',
      },
      {
        id: 'y8t2-m5',
        title: 'Comparing Two Poems - Using Comparative Connectives',
        duration: '45 min',
      },
      {
        id: 'y8t2-m6',
        title: 'Writing a Comparative Essay - Structure and Development',
        duration: '50 min',
      },
      {
        id: 'y8t2-m7',
        title: "Introduction to Macbeth - Shakespeare's Language",
        duration: '45 min',
      },
      {
        id: 'y8t2-m8',
        title: 'Power and Ambition in Macbeth - Key Scenes',
        duration: '50 min',
      },
      {
        id: 'y8t2-m9',
        title: 'Soliloquy and Stagecraft - How Drama Works',
        duration: '45 min',
      },
      {
        id: 'y8t2-m10',
        title: 'Shakespeare vs. Julius Caesar - Comparative Extracts',
        duration: '50 min',
      },
      {
        id: 'y8t2-m11',
        title: 'Subject Terminology in Practice - Using It Accurately',
        duration: '40 min',
      },
      {
        id: 'y8t2-m12',
        title: 'Assessment: Poetry Comparison and Shakespeare Extract',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'ks3-y8-t3-rhetoric-media',
    title: 'Year 8 Term 3: Rhetoric & Media',
    subtitle: 'The art of persuasion - speeches, bias, and media literacy.',
    tier: 'KS3',
    board: 'Universal',
    price: 0,
    duration: '6-8 hours',
    level: 'Year 8',
    description:
      'Explore rhetoric through landmark speeches by Malala Yousafzai, Greta Thunberg, and Sheikha Moza. Develop media literacy, analyse bias and representation in news, and master persuasive writing. Aligned to 8R.3-8R.7 and 8W.1-8W.9.',
    color: '#f97316',
    moduleCount: 12,
    quizCount: 60,
    moduleList: [
      {
        id: 'y8t3-m1',
        title: 'What is Rhetoric? The Art of Persuasion',
        duration: '45 mins',
      },
      {
        id: 'y8t3-m2',
        title: 'Analysing Speeches - Malala Yousafzai',
        duration: '50 mins',
      },
      {
        id: 'y8t3-m3',
        title: 'Analysing Speeches - Greta Thunberg',
        duration: '50 mins',
      },
      {
        id: 'y8t3-m4',
        title: 'Analysing Speeches - Sheikha Moza bint Nasser',
        duration: '50 mins',
      },
      {
        id: 'y8t3-m5',
        title: 'Persuasive Techniques - Ethos, Pathos, Logos',
        duration: '50 mins',
      },
      {
        id: 'y8t3-m6',
        title: 'Writing a Speech - Structure and Delivery',
        duration: '50 mins',
      },
      {
        id: 'y8t3-m7',
        title: 'Media Literacy - Reading Beyond the Surface',
        duration: '45 mins',
      },
      {
        id: 'y8t3-m8',
        title: 'Bias and Representation in News',
        duration: '50 mins',
      },
      {
        id: 'y8t3-m9',
        title: 'Advertising and Persuasion - Visual Rhetoric',
        duration: '50 mins',
      },
      {
        id: 'y8t3-m10',
        title: 'Creating Persuasive Media Texts',
        duration: '50 mins',
      },
      {
        id: 'y8t3-m11',
        title: 'Register and Audience Adaptation',
        duration: '45 mins',
      },
      {
        id: 'y8t3-m12',
        title: 'Assessment: Speech Writing and Media Analysis',
        duration: '55 mins',
      },
    ],
  },
  {
    id: 'ks3-y9-t1-christmas-carol',
    title: 'Year 9 Term 1: A Christmas Carol',
    subtitle: 'Dickens, Victorian society, and moral redemption - a GCSE bridge text.',
    tier: 'KS3',
    board: 'Universal',
    price: 0,
    duration: '6-8 hours',
    level: 'Year 9',
    description:
      "Study Dickens's A Christmas Carol as a gateway to GCSE-level literary analysis. Explore themes of poverty, redemption, and social responsibility with full contextual knowledge. Develop sustained analytical essays. Aligned to 9R.1-9R.7 and 9W.1-9W.9.",
    color: '#dc2626',
    moduleCount: 12,
    quizCount: 60,
    moduleList: [
      {
        id: 'y9t1-acc-m1',
        title: 'Victorian Context: Poverty, Workhouses, and Social Responsibility',
        duration: '45 mins',
      },
      {
        id: 'y9t1-acc-m2',
        title: 'Dickens as Social Reformer: Why He Wrote the Novella',
        duration: '45 mins',
      },
      {
        id: 'y9t1-acc-m3',
        title: "Scrooge's Transformation: Character Arc Analysis",
        duration: '50 mins',
      },
      {
        id: 'y9t1-acc-m4',
        title: 'The Ghost Narratives: Structure and Purpose',
        duration: '45 mins',
      },
      {
        id: 'y9t1-acc-m5',
        title: "Language Analysis: Dickens' Use of Imagery and Symbolism",
        duration: '50 mins',
      },
      {
        id: 'y9t1-acc-m6',
        title: 'Themes: Redemption and Morality',
        duration: '45 mins',
      },
      {
        id: 'y9t1-acc-m7',
        title: 'Themes: Social Responsibility and Class',
        duration: '45 mins',
      },
      {
        id: 'y9t1-acc-m8',
        title: 'Form and Structure: The Novella as Allegory',
        duration: '45 mins',
      },
      {
        id: 'y9t1-acc-m9',
        title: 'Conceptual Interpretations: Wider Ideas and Critical Thinking',
        duration: '50 mins',
      },
      {
        id: 'y9t1-acc-m10',
        title: 'Integrating Context into Analysis',
        duration: '45 mins',
      },
      {
        id: 'y9t1-acc-m11',
        title: 'Sustained Analytical Essay Writing: Building an Argument',
        duration: '50 mins',
      },
      {
        id: 'y9t1-acc-m12',
        title: 'Timed Essay Practice and Exam Technique',
        duration: '50 mins',
      },
    ],
  },
  {
    id: 'ks3-y9-t2-writing-craft',
    title: 'Year 9 Term 2: Writing Craft',
    subtitle: 'Master transactional and creative writing for GCSE success.',
    tier: 'KS3',
    board: 'Universal',
    price: 0,
    duration: '6-8 hours',
    level: 'Year 9',
    description:
      'Develop advanced writing skills across transactional formats (articles, speeches, letters, reports) and creative writing (narrative, descriptive, and imaginative). Understand how to adapt tone, style, and structure for different purposes and audiences. Aligned to 9W.1-9W.10.',
    color: '#7c3aed',
    moduleCount: 12,
    quizCount: 60,
    moduleList: [
      {
        id: 'y9t2-m1',
        title: 'Writing for Purpose',
        duration: '45 mins',
      },
      {
        id: 'y9t2-m2',
        title: 'Argument and Persuasion',
        duration: '45 mins',
      },
      {
        id: 'y9t2-m3',
        title: 'Rhetorical Techniques',
        duration: '45 mins',
      },
      {
        id: 'y9t2-m4',
        title: 'Register Control',
        duration: '40 mins',
      },
      {
        id: 'y9t2-m5',
        title: 'Audience Adaptation',
        duration: '40 mins',
      },
      {
        id: 'y9t2-m6',
        title: 'Editing and Refining',
        duration: '40 mins',
      },
      {
        id: 'y9t2-m7',
        title: 'Crafted Narrative Writing',
        duration: '45 mins',
      },
      {
        id: 'y9t2-m8',
        title: 'Controlling Perspective and Viewpoint',
        duration: '45 mins',
      },
      {
        id: 'y9t2-m9',
        title: 'Descriptive Techniques',
        duration: '45 mins',
      },
      {
        id: 'y9t2-m10',
        title: 'Developing Atmosphere and Tone',
        duration: '45 mins',
      },
      {
        id: 'y9t2-m11',
        title: 'Sentence Variety for Effect',
        duration: '40 mins',
      },
      {
        id: 'y9t2-m12',
        title: 'Assessment: Transactional and Creative Writing Portfolio',
        duration: '55 mins',
      },
    ],
  },
  {
    id: 'ks3-y9-t3-omam',
    title: 'Year 9 Term 3: Of Mice and Men',
    subtitle:
      "1930s America, the American Dream, and Steinbeck's language - Y9 stretch unit and bridge to Edexcel / Eduqas / IGCSE GCSE study.",
    tier: 'KS3',
    board: 'Universal',
    price: 0,
    duration: '6-8 hours',
    level: 'Year 9',
    description:
      "Study Steinbeck's Of Mice and Men in depth, examining the Great Depression context, marginalised voices, and the destruction of dreams. This is a Year 9 stretch unit that doubles as preparation for the GCSE / IGCSE specifications (Edexcel, Eduqas, and CIE) which prescribe Of Mice and Men as a set text. Develops exam-style analytical essays and contextual integration skills. Aligned to 9R.1-9R.7 and 9W.1-9W.9.",
    color: '#059669',
    moduleCount: 12,
    quizCount: 60,
    moduleList: [
      {
        id: 'y9t3-omam-m1',
        title: '1930s America - The Great Depression and the American Dream',
        duration: '50 min',
      },
      {
        id: 'y9t3-omam-m2',
        title: 'George and Lennie - An Unusual Friendship',
        duration: '50 min',
      },
      {
        id: 'y9t3-omam-m3',
        title: "Curley's Wife - Marginalised Voices",
        duration: '50 min',
      },
      {
        id: 'y9t3-omam-m4',
        title: 'Crooks and Candy - Loneliness and Discrimination',
        duration: '50 min',
      },
      {
        id: 'y9t3-omam-m5',
        title: 'The Ranch as Microcosm - Setting Analysis',
        duration: '50 min',
      },
      {
        id: 'y9t3-omam-m6',
        title: 'Dreams and Disillusionment - Thematic Analysis',
        duration: '50 min',
      },
      {
        id: 'y9t3-omam-m7',
        title: "Steinbeck's Language - Dialect, Description, Dialogue",
        duration: '50 min',
      },
      {
        id: 'y9t3-omam-m8',
        title: 'Foreshadowing and Structure - Cyclical Narrative',
        duration: '50 min',
      },
      {
        id: 'y9t3-omam-m9',
        title: 'Comparing Characters - Analytical Comparison',
        duration: '50 min',
      },
      {
        id: 'y9t3-omam-m10',
        title: 'Integrating Context - How History Shapes Meaning',
        duration: '50 min',
      },
      {
        id: 'y9t3-omam-m11',
        title: 'Sustained Analytical Essays - Exam-Style Responses',
        duration: '55 min',
      },
      {
        id: 'y9t3-omam-m12',
        title: 'Timed Practice - Writing Under Pressure',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'igcse-y10-lang-p1',
    title: 'IGCSE Language Paper 1',
    subtitle: 'Reading and directed writing - Edexcel IGCSE English Language (4EA1).',
    tier: 'IGCSE',
    board: 'Edexcel IGCSE',
    price: 0,
    duration: '8-10 hours',
    level: 'Year 10',
    description:
      'Master Edexcel IGCSE English Language Paper 1: reading comprehension, language analysis, summary writing, and directed writing. Covers all four question types with model answers and examiner guidance.',
    color: '#2563eb',
    moduleCount: 12,
    quizCount: 60,
    moduleList: [
      {
        id: 'y10-p1-m1',
        title: 'Understanding Paper 1 - Format, Timing & Mark Allocation',
        duration: '45 min',
      },
      {
        id: 'y10-p1-m2',
        title: 'Reading Section A - Inference and Retrieval (AO1)',
        duration: '55 min',
      },
      {
        id: 'y10-p1-m3',
        title: 'Reading Section A - Language Analysis (AO2)',
        duration: '55 min',
      },
      {
        id: 'y10-p1-m4',
        title: "Reading Section A - Writer's Effects (AO2)",
        duration: '55 min',
      },
      {
        id: 'y10-p1-m5',
        title: 'Reading Section A - Summary and Synthesis (AO1)',
        duration: '60 min',
      },
      {
        id: 'y10-p1-m6',
        title: 'Transactional Writing - Articles',
        duration: '55 min',
      },
      {
        id: 'y10-p1-m7',
        title: 'Transactional Writing - Speeches',
        duration: '55 min',
      },
      {
        id: 'y10-p1-m8',
        title: 'Transactional Writing - Letters (Formal and Informal)',
        duration: '50 min',
      },
      {
        id: 'y10-p1-m9',
        title: 'Transactional Writing - Reports and Reviews',
        duration: '50 min',
      },
      {
        id: 'y10-p1-m10',
        title: 'Planning and Structuring Transactional Writing',
        duration: '50 min',
      },
      {
        id: 'y10-p1-m11',
        title: 'SPAG and Accuracy - Maximising Marks',
        duration: '50 min',
      },
      {
        id: 'y10-p1-m12',
        title: 'Full Paper Practice and Self-Assessment',
        duration: '60 min',
      },
    ],
  },
  {
    id: 'igcse-y10-lit-poetry',
    title: 'IGCSE Literature: Poetry Anthology',
    subtitle: 'Anthology poems - unseen poetry and comparative analysis (IGCSE Literature).',
    tier: 'IGCSE',
    board: 'Edexcel IGCSE',
    price: 0,
    duration: '8-10 hours',
    level: 'Year 10',
    description:
      'Study the Edexcel IGCSE Poetry Anthology in depth. Analyse individual poems, compare across the anthology, and develop skills for both the studied and unseen poetry questions. Includes all six clusters with full close analysis.',
    color: '#7c3aed',
    moduleCount: 12,
    quizCount: 60,
    moduleList: [
      {
        id: 'y10-poetry-m1',
        title: 'Understanding the Anthology - Overview and Approach',
        duration: '50 min',
      },
      {
        id: 'y10-poetry-m2',
        title: 'Analysing Language in Poetry - Word-Level Analysis',
        duration: '55 min',
      },
      {
        id: 'y10-poetry-m3',
        title: 'Analysing Form and Structure - Shape and Pattern',
        duration: '55 min',
      },
      {
        id: 'y10-poetry-m4',
        title: 'Responding to Unseen Poetry - First Encounter Strategies',
        duration: '55 min',
      },
      {
        id: 'y10-poetry-m5',
        title: 'Thematic Groupings - Love, Conflict, Identity, Nature',
        duration: '55 min',
      },
      {
        id: 'y10-poetry-m6',
        title: 'Comparative Poetry Essay - Structure and Method',
        duration: '55 min',
      },
      {
        id: 'y10-poetry-m7',
        title: 'Using Subject Terminology Precisely',
        duration: '50 min',
      },
      {
        id: 'y10-poetry-m8',
        title: 'Context in Poetry - When and Why It Matters',
        duration: '50 min',
      },
      {
        id: 'y10-poetry-m9',
        title: 'Sample Poem Analysis 1 - Worked Exemplar',
        duration: '55 min',
      },
      {
        id: 'y10-poetry-m10',
        title: 'Sample Poem Analysis 2 - Worked Exemplar',
        duration: '55 min',
      },
      {
        id: 'y10-poetry-m11',
        title: 'Writing a Grade 7-9 Poetry Response',
        duration: '55 min',
      },
      {
        id: 'y10-poetry-m12',
        title: 'Timed Poetry Comparison Practice',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'igcse-y10-lit-omam',
    title: 'IGCSE Literature: Of Mice and Men',
    subtitle: "Steinbeck's novella - character, context, and exam technique (IGCSE Literature).",
    tier: 'IGCSE',
    board: 'Edexcel IGCSE',
    price: 0,
    duration: '8-10 hours',
    level: 'Year 10',
    description:
      "Detailed study of Steinbeck's Of Mice and Men for Edexcel IGCSE Literature. Covers all characters, themes, language, structure, and 1930s context with full exam preparation including model essays and mark-scheme guidance.",
    color: '#059669',
    moduleCount: 12,
    quizCount: 60,
    moduleList: [
      {
        id: 'omam-m1',
        title: "Steinbeck's Context - The Dust Bowl, Itinerant Workers, and the American Dream",
        duration: '55 min',
      },
      {
        id: 'omam-m2',
        title: 'Chapter-by-Chapter Analysis: Part 1 (Chapters 1-2)',
        duration: '60 min',
      },
      {
        id: 'omam-m3',
        title: 'Chapter-by-Chapter Analysis: Part 2 (Chapters 3-4)',
        duration: '60 min',
      },
      {
        id: 'omam-m4',
        title: 'Chapter-by-Chapter Analysis: Part 3 (Chapters 5-6)',
        duration: '60 min',
      },
      {
        id: 'omam-m5',
        title: 'Character Study: George Milton - Protector and Pragmatist',
        duration: '55 min',
      },
      {
        id: 'omam-m6',
        title: 'Character Study: Lennie Small - Innocence and Violence',
        duration: '55 min',
      },
      {
        id: 'omam-m7',
        title: "Character Study: Curley's Wife, Crooks, Candy - Marginalised Voices",
        duration: '60 min',
      },
      {
        id: 'omam-m8',
        title: 'Themes: The American Dream and Its Failure',
        duration: '55 min',
      },
      {
        id: 'omam-m9',
        title: 'Themes: Loneliness, Friendship, and Belonging',
        duration: '55 min',
      },
      {
        id: 'omam-m10',
        title: "Writer's Methods: Language, Structure, and Form",
        duration: '55 min',
      },
      {
        id: 'omam-m11',
        title: 'IGCSE Essay Structure: Extract + Whole Text Response',
        duration: '55 min',
      },
      {
        id: 'omam-m12',
        title: 'Grade 7-9 Model Answers and Exam Practice',
        duration: '60 min',
      },
    ],
  },
  {
    id: 'igcse-y11-lang-p2',
    title: 'IGCSE Language Paper 2',
    subtitle: 'Writing and composition - Edexcel IGCSE English Language (4EA1).',
    tier: 'IGCSE',
    board: 'Edexcel IGCSE',
    price: 0,
    duration: '8-10 hours',
    level: 'Year 11',
    description:
      'Master Edexcel IGCSE English Language Paper 2: transactional and creative writing. Develop skills in writing for different purposes and audiences, with full coverage of all required formats, structural techniques, and AO mark schemes.',
    color: '#0891b2',
    moduleCount: 12,
    quizCount: 60,
    moduleList: [
      {
        id: 'y11-p2-m1',
        title: 'Understanding Paper 2 - Format and Expectations',
        duration: '45 min',
      },
      {
        id: 'y11-p2-m2',
        title: 'Descriptive Writing - Creating Vivid Scenes',
        duration: '50 min',
      },
      {
        id: 'y11-p2-m3',
        title: 'Narrative Writing - Crafting Compelling Stories',
        duration: '50 min',
      },
      {
        id: 'y11-p2-m4',
        title: 'Openings that Hook - First Impressions Matter',
        duration: '50 min',
      },
      {
        id: 'y11-p2-m5',
        title: "Building Atmosphere - Show Don't Tell",
        duration: '50 min',
      },
      {
        id: 'y11-p2-m6',
        title: 'Character Through Action and Dialogue',
        duration: '50 min',
      },
      {
        id: 'y11-p2-m7',
        title: 'Structure for Effect - Cyclical, Flashback, Shift',
        duration: '50 min',
      },
      {
        id: 'y11-p2-m8',
        title: 'Sentence Variety - Controlling Pace and Tension',
        duration: '50 min',
      },
      {
        id: 'y11-p2-m9',
        title: 'Vocabulary Precision - Choosing the Perfect Word',
        duration: '50 min',
      },
      {
        id: 'y11-p2-m10',
        title: 'Planning Under Pressure - 5-Minute Planning Strategies',
        duration: '45 min',
      },
      {
        id: 'y11-p2-m11',
        title: 'Self-Editing Checklist - Catching Common Errors',
        duration: '45 min',
      },
      {
        id: 'y11-p2-m12',
        title: 'Full Paper 2 Practice with Model Answers',
        duration: '60 min',
      },
    ],
  },
  {
    id: 'igcse-y11-lit-inspector',
    title: 'IGCSE Literature: An Inspector Calls',
    subtitle: "Priestley's drama - social responsibility and exam mastery (IGCSE Literature).",
    tier: 'IGCSE',
    board: 'Edexcel IGCSE',
    price: 0,
    duration: '8-10 hours',
    level: 'Year 11',
    description:
      "Complete study of J.B. Priestley's An Inspector Calls for Edexcel IGCSE Literature. Analyse every character, explore themes of responsibility and social class, and master the extract and essay questions with model answers and examiner tips.",
    color: '#b45309',
    moduleCount: 12,
    quizCount: 60,
    moduleList: [
      {
        id: 'ic-m1',
        title: "Priestley's Context: 1912 vs 1945, Class, and Socialism",
        duration: '55 min',
      },
      {
        id: 'ic-m2',
        title: 'Act 1 Analysis: The Comfortable Birlings',
        duration: '55 min',
      },
      {
        id: 'ic-m3',
        title: "Act 2 Analysis: Sheila and Gerald's Confessions",
        duration: '55 min',
      },
      {
        id: 'ic-m4',
        title: "Act 3 Analysis: The Inspector's Final Speech",
        duration: '55 min',
      },
      {
        id: 'ic-m5',
        title: 'Character: Mr Birling - Capitalism and Selfishness',
        duration: '50 min',
      },
      {
        id: 'ic-m6',
        title: 'Character: Sheila and Eric - The Younger Generation',
        duration: '55 min',
      },
      {
        id: 'ic-m7',
        title: "Character: The Inspector - Priestley's Mouthpiece",
        duration: '55 min',
      },
      {
        id: 'ic-m8',
        title: 'Themes: Responsibility and Guilt',
        duration: '55 min',
      },
      {
        id: 'ic-m9',
        title: 'Themes: Class, Gender, and Generational Conflict',
        duration: '55 min',
      },
      {
        id: 'ic-m10',
        title: 'Dramatic Techniques: Dramatic Irony, Staging, and Structure',
        duration: '55 min',
      },
      {
        id: 'ic-m11',
        title: 'IGCSE Essay Writing: Extract to Whole Text',
        duration: '60 min',
      },
      {
        id: 'ic-m12',
        title: 'Timed Essay Practice and Model Answers',
        duration: '60 min',
      },
    ],
  },
  {
    id: 'igcse-y11-lit-macbeth',
    title: 'IGCSE Literature: Macbeth',
    subtitle: "Shakespeare's tragedy - ambition, power, and dramatic technique (IGCSE Literature).",
    tier: 'IGCSE',
    board: 'Edexcel IGCSE',
    price: 0,
    duration: '8-10 hours',
    level: 'Year 11',
    description:
      "In-depth study of Shakespeare's Macbeth for Edexcel IGCSE Literature. Master all characters, themes, dramatic techniques, and contextual factors. Full exam preparation with extract analysis skills and essay planning frameworks.",
    color: '#4b5563',
    moduleCount: 12,
    quizCount: 60,
    moduleList: [
      {
        id: 'macbeth-m1',
        title: 'Jacobean Context: Kingship, Witchcraft, and Divine Right',
        duration: '55 min',
      },
      {
        id: 'macbeth-m2',
        title: 'Act 1: Prophecy and Temptation',
        duration: '55 min',
      },
      {
        id: 'macbeth-m3',
        title: 'Act 2: Murder and Guilt',
        duration: '55 min',
      },
      {
        id: 'macbeth-m4',
        title: 'Act 3: Tyranny and Paranoia',
        duration: '55 min',
      },
      {
        id: 'macbeth-m5',
        title: 'Acts 4-5: Downfall and Restoration',
        duration: '55 min',
      },
      {
        id: 'macbeth-m6',
        title: 'Character: Macbeth - The Tragic Hero',
        duration: '55 min',
      },
      {
        id: 'macbeth-m7',
        title: 'Character: Lady Macbeth - Ambition and Madness',
        duration: '55 min',
      },
      {
        id: 'macbeth-m8',
        title: 'Character: The Witches - Supernatural and Evil',
        duration: '50 min',
      },
      {
        id: 'macbeth-m9',
        title: 'Themes: Ambition, Power, and Corruption',
        duration: '55 min',
      },
      {
        id: 'macbeth-m10',
        title: 'Themes: Guilt, Masculinity, and Fate vs Free Will',
        duration: '55 min',
      },
      {
        id: 'macbeth-m11',
        title: "Shakespeare's Language: Soliloquy, Imagery, and Rhetoric",
        duration: '55 min',
      },
      {
        id: 'macbeth-m12',
        title: 'IGCSE Essay Practice: Extract Response and Model Answers',
        duration: '60 min',
      },
    ],
  },
  {
    id: 'ial-y12-unit1',
    title: 'IAL English Language Unit 1: Language & Context',
    subtitle: 'Language in social contexts - Edexcel IAL English Language (WEN01).',
    tier: 'Higher',
    board: 'Edexcel IAL',
    price: 0,
    duration: '10-12 hours',
    level: 'Year 12',
    description:
      'Study language variation, identity, and social context for Edexcel IAL English Language Unit 1. Covers language frameworks, sociolinguistics, dialect, idiolect, gender, occupation, and media language with full analytical methodology.',
    color: '#1d4ed8',
    moduleCount: 12,
    quizCount: 60,
    moduleList: [
      {
        id: 'y12-ial-u1-m1',
        title: 'Introduction to Linguistic Frameworks',
        duration: '55 min',
      },
      {
        id: 'y12-ial-u1-m2',
        title: 'Phonological Analysis',
        duration: '55 min',
      },
      {
        id: 'y12-ial-u1-m3',
        title: 'Lexical Analysis',
        duration: '55 min',
      },
      {
        id: 'y12-ial-u1-m4',
        title: 'Grammatical Analysis',
        duration: '55 min',
      },
      {
        id: 'y12-ial-u1-m5',
        title: 'Discourse Analysis',
        duration: '55 min',
      },
      {
        id: 'y12-ial-u1-m6',
        title: 'Language and Identity',
        duration: '55 min',
      },
      {
        id: 'y12-ial-u1-m7',
        title: 'Language and Gender',
        duration: '55 min',
      },
      {
        id: 'y12-ial-u1-m8',
        title: 'Language and Power',
        duration: '55 min',
      },
      {
        id: 'y12-ial-u1-m9',
        title: 'Language and Social Groups',
        duration: '55 min',
      },
      {
        id: 'y12-ial-u1-m10',
        title: 'Analysing Unseen Texts',
        duration: '55 min',
      },
      {
        id: 'y12-ial-u1-m11',
        title: 'Writing an Analytical Commentary',
        duration: '55 min',
      },
      {
        id: 'y12-ial-u1-m12',
        title: 'Exam Practice',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'ial-y12-unit2',
    title: 'IAL English Language Unit 2: Language Change',
    subtitle: 'Historical and contemporary language change - Edexcel IAL (WEN02).',
    tier: 'Higher',
    board: 'Edexcel IAL',
    price: 0,
    duration: '10-12 hours',
    level: 'Year 12',
    description:
      'Explore how and why English changes over time for Edexcel IAL English Language Unit 2. Covers historical language change, contemporary change, language debate, attitudes to change, and child language acquisition with data analysis skills.',
    color: '#0369a1',
    moduleCount: 12,
    quizCount: 60,
    moduleList: [
      {
        id: 'y12-ial-u2-m1',
        title: 'Old English to Middle English - Foundations of Change',
        duration: '60 min',
      },
      {
        id: 'y12-ial-u2-m2',
        title: "Early Modern English - Shakespeare's Language Revolution",
        duration: '60 min',
      },
      {
        id: 'y12-ial-u2-m3',
        title: 'Standardisation - Dictionaries, Grammar Books, and Printing',
        duration: '60 min',
      },
      {
        id: 'y12-ial-u2-m4',
        title: 'Lexical Change - New Words, Borrowed Words, Lost Words',
        duration: '60 min',
      },
      {
        id: 'y12-ial-u2-m5',
        title: 'Semantic Change - Amelioration, Pejoration, Narrowing, Broadening',
        duration: '60 min',
      },
      {
        id: 'y12-ial-u2-m6',
        title: 'Phonological Change - The Great Vowel Shift and Beyond',
        duration: '60 min',
      },
      {
        id: 'y12-ial-u2-m7',
        title: 'Grammatical Change - Inflections, Word Order, and Auxiliary Verbs',
        duration: '60 min',
      },
      {
        id: 'y12-ial-u2-m8',
        title: 'Theories of Language Change - Aitchison, Trudgill, Crystal',
        duration: '60 min',
      },
      {
        id: 'y12-ial-u2-m9',
        title: 'Analysing Historical Texts - Systematic Comparison',
        duration: '60 min',
      },
      {
        id: 'y12-ial-u2-m10',
        title: 'Spoken vs Written Language Change',
        duration: '60 min',
      },
      {
        id: 'y12-ial-u2-m11',
        title: 'Comparative Analysis - Early Modern vs Contemporary English',
        duration: '60 min',
      },
      {
        id: 'y12-ial-u2-m12',
        title: 'Exam Practice - Data Response Questions',
        duration: '60 min',
      },
    ],
  },
  {
    id: 'ial-y13-unit3',
    title: 'IAL English Language Unit 3: Crafting Language',
    subtitle: 'Original writing and commentary - Edexcel IAL (WEN03).',
    tier: 'Higher',
    board: 'Edexcel IAL',
    price: 0,
    duration: '10-12 hours',
    level: 'Year 13',
    description:
      'Develop advanced creative and analytical writing for Edexcel IAL English Language Unit 3. Master original writing for different purposes and audiences, produce a critical commentary evaluating your own linguistic choices, and explore style and register at A-level.',
    color: '#7e22ce',
    moduleCount: 12,
    quizCount: 60,
    moduleList: [
      {
        id: 'y13-ial-u3-m1',
        title: 'Genre, Audience, Purpose - The Writing Triangle',
        duration: '55 min',
      },
      {
        id: 'y13-ial-u3-m2',
        title: 'Creative Writing: Fiction - Techniques and Craft',
        duration: '60 min',
      },
      {
        id: 'y13-ial-u3-m3',
        title: 'Creative Writing: Non-Fiction - Articles, Speeches, Reviews',
        duration: '60 min',
      },
      {
        id: 'y13-ial-u3-m4',
        title: "Stylistic Analysis - Examining Professional Writers' Craft",
        duration: '55 min',
      },
      {
        id: 'y13-ial-u3-m5',
        title: 'Voice and Register - Controlling Tone for Effect',
        duration: '55 min',
      },
      {
        id: 'y13-ial-u3-m6',
        title: 'Narrative Techniques - Point of View, Time, Structure',
        duration: '55 min',
      },
      {
        id: 'y13-ial-u3-m7',
        title: 'Rhetorical Techniques - Advanced Persuasion',
        duration: '55 min',
      },
      {
        id: 'y13-ial-u3-m8',
        title: 'Writing an Analytical Commentary - Reflecting on Your Own Writing',
        duration: '55 min',
      },
      {
        id: 'y13-ial-u3-m9',
        title: 'Coursework Planning - Choosing Your Texts and Approach',
        duration: '50 min',
      },
      {
        id: 'y13-ial-u3-m10',
        title: 'Drafting and Redrafting - The Editing Process',
        duration: '50 min',
      },
      {
        id: 'y13-ial-u3-m11',
        title: 'Coursework Commentary - Linking Choices to Linguistic Theory',
        duration: '55 min',
      },
      {
        id: 'y13-ial-u3-m12',
        title: 'Final Portfolio Preparation and Assessment Criteria',
        duration: '55 min',
      },
    ],
  },
  {
    id: 'ial-y13-unit4',
    title: 'IAL English Language Unit 4: Language Investigation',
    subtitle: 'Independent research and investigation - Edexcel IAL (WEN04).',
    tier: 'Higher',
    board: 'Edexcel IAL',
    price: 0,
    duration: '10-12 hours',
    level: 'Year 13',
    description:
      'Complete a structured language investigation for Edexcel IAL English Language Unit 4. Covers research methodology, data collection and analysis, applying linguistic frameworks, writing up findings, and producing an academic report with full coursework guidance.',
    color: '#065f46',
    moduleCount: 12,
    quizCount: 60,
    moduleList: [
      {
        id: 'ial-u4-m1',
        title: 'What is Language Investigation? Choosing a Topic',
        duration: '55 min',
      },
      {
        id: 'ial-u4-m2',
        title: 'Research Methodology - Qualitative vs Quantitative',
        duration: '55 min',
      },
      {
        id: 'ial-u4-m3',
        title: 'Data Collection Methods - Surveys, Recordings, Corpora',
        duration: '55 min',
      },
      {
        id: 'ial-u4-m4',
        title: 'Ethical Considerations in Language Research',
        duration: '50 min',
      },
      {
        id: 'ial-u4-m5',
        title: 'Phonological Investigation - Accent and Pronunciation Studies',
        duration: '55 min',
      },
      {
        id: 'ial-u4-m6',
        title: 'Lexical Investigation - Jargon, Slang, New Words',
        duration: '55 min',
      },
      {
        id: 'ial-u4-m7',
        title: 'Discourse Investigation - Conversation Analysis, Power in Talk',
        duration: '55 min',
      },
      {
        id: 'ial-u4-m8',
        title: 'Applying Linguistic Frameworks to Data',
        duration: '55 min',
      },
      {
        id: 'ial-u4-m9',
        title: 'Presenting Findings - Tables, Charts, Analysis',
        duration: '50 min',
      },
      {
        id: 'ial-u4-m10',
        title: 'Writing the Investigation Report - Structure and Conventions',
        duration: '55 min',
      },
      {
        id: 'ial-u4-m11',
        title: 'Evaluation and Reflection - Strengths and Limitations',
        duration: '50 min',
      },
      {
        id: 'ial-u4-m12',
        title: 'Exam Preparation - Data Response and Language Topics',
        duration: '55 min',
      },
    ],
  },
]
