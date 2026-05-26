/**
 * GAME → SKILL TAXONOMY
 *
 * Single source of truth that maps every game on the platform to the
 * skill it develops, the strand it belongs to, the CEFR/key-stage level
 * it targets, and the audience it is built for.
 *
 * This is what turns raw game scores + time-on-task into a meaningful
 * learning profile: by tagging each game with a `skill`, we can roll up
 * many game attempts into per-skill mastery, identify a learner's
 * strengths and weaknesses, and point them at the next best activity.
 *
 * Every mapping is deliberate and accurate to what each game actually
 * tests. New games MUST be added here (with a sensible default fallback
 * applied at lookup time) so the profile stays complete.
 */

// ─── Vocabulary ────────────────────────────────────────────────────────

/** Broad competency strand - how the dashboard groups the profile. */
export type Strand =
  | 'vocabulary'
  | 'grammar'
  | 'punctuation'
  | 'spelling'
  | 'reading'
  | 'writing'
  | 'literature'

/** Fine-grained skill - what a single game actually trains. */
export type Skill =
  // vocabulary
  | 'everyday-vocabulary'
  | 'academic-vocabulary'
  | 'word-meaning-in-context'
  | 'collocations'
  | 'phrasal-verbs'
  | 'word-formation'
  // grammar
  | 'articles'
  | 'verb-forms'
  | 'tenses'
  | 'prepositions'
  | 'sentence-construction'
  | 'word-classes'
  | 'comparatives'
  | 'question-formation'
  | 'common-errors'
  // punctuation
  | 'punctuation'
  | 'apostrophes'
  | 'capitalisation'
  // spelling
  | 'spelling-patterns'
  | 'homophones'
  | 'high-frequency-spelling'
  // reading
  | 'retrieval-and-inference'
  | 'reference-skills'
  | 'text-cohesion'
  // literature
  | 'literary-devices'
  | 'literary-terminology'
  | 'set-text-knowledge'
  | 'analysis-speed'
  | 'theme-knowledge'
  // numeracy-of-language
  | 'numbers-and-time'

export type Audience = 'eal' | 'ks3' | 'gcse'

/** CEFR-aligned / key-stage level the game targets. */
export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'KS3' | 'GCSE'

export interface GameTaxon {
  /** kebab-case game slug / id (matches the standalone route or inline id). */
  slug: string
  /** Human-readable title for the profile UI. */
  title: string
  strand: Strand
  skill: Skill
  level: Level
  audience: Audience
  /** Optional deep link to a lesson/page that teaches this skill. */
  learnHref?: string
}

export const STRAND_LABEL: Record<Strand, string> = {
  vocabulary: 'Vocabulary',
  grammar: 'Grammar',
  punctuation: 'Punctuation',
  spelling: 'Spelling',
  reading: 'Reading',
  writing: 'Writing',
  literature: 'Literature',
}

export const SKILL_LABEL: Record<Skill, string> = {
  'everyday-vocabulary': 'Everyday vocabulary',
  'academic-vocabulary': 'Ambitious vocabulary',
  'word-meaning-in-context': 'Word meaning in context',
  collocations: 'Collocations',
  'phrasal-verbs': 'Phrasal verbs',
  'word-formation': 'Prefixes & suffixes',
  articles: 'Articles (a / an / the)',
  'verb-forms': 'Verb forms',
  tenses: 'Verb tenses',
  prepositions: 'Prepositions',
  'sentence-construction': 'Sentence construction',
  'word-classes': 'Word classes',
  comparatives: 'Comparatives & superlatives',
  'question-formation': 'Question formation',
  'common-errors': 'Common errors',
  punctuation: 'Punctuation',
  apostrophes: 'Apostrophes',
  capitalisation: 'Capital letters',
  'spelling-patterns': 'Spelling patterns',
  homophones: 'Homophones',
  'high-frequency-spelling': 'Everyday spelling',
  'retrieval-and-inference': 'Retrieval & inference',
  'reference-skills': 'Dictionary & reference skills',
  'text-cohesion': 'Text cohesion',
  'literary-devices': 'Literary devices',
  'literary-terminology': 'Literary terminology',
  'set-text-knowledge': 'Set-text knowledge',
  'analysis-speed': 'Analysis under time pressure',
  'theme-knowledge': 'Themes',
  'numbers-and-time': 'Numbers & time',
}

// ─── The map ───────────────────────────────────────────────────────────

const TAXA: GameTaxon[] = [
  // ── GCSE / IGCSE literature & literacy games ──────────────────────────
  {
    slug: 'word-scramble',
    title: 'Word Scramble',
    strand: 'literature',
    skill: 'literary-terminology',
    level: 'GCSE',
    audience: 'gcse',
  },
  {
    slug: 'quote-match',
    title: 'Quote Match',
    strand: 'literature',
    skill: 'set-text-knowledge',
    level: 'GCSE',
    audience: 'gcse',
  },
  {
    slug: 'grammar-fix',
    title: 'Grammar Fix',
    strand: 'grammar',
    skill: 'common-errors',
    level: 'GCSE',
    audience: 'gcse',
  },
  {
    slug: 'quote-detective',
    title: 'Quote Detective',
    strand: 'literature',
    skill: 'set-text-knowledge',
    level: 'GCSE',
    audience: 'gcse',
  },
  {
    slug: 'theme-matcher',
    title: 'Theme Matcher',
    strand: 'literature',
    skill: 'theme-knowledge',
    level: 'GCSE',
    audience: 'gcse',
  },
  {
    slug: 'speed-analysis',
    title: 'Speed Analysis',
    strand: 'literature',
    skill: 'analysis-speed',
    level: 'GCSE',
    audience: 'gcse',
  },
  {
    slug: 'grade-climber',
    title: 'Grade Climber',
    strand: 'literature',
    skill: 'set-text-knowledge',
    level: 'GCSE',
    audience: 'gcse',
  },
  {
    slug: 'comprehension-challenge',
    title: 'Comprehension Challenge',
    strand: 'reading',
    skill: 'retrieval-and-inference',
    level: 'GCSE',
    audience: 'gcse',
  },
  {
    slug: 'vocabulary-builder',
    title: 'Vocabulary Builder',
    strand: 'vocabulary',
    skill: 'academic-vocabulary',
    level: 'GCSE',
    audience: 'gcse',
  },
  {
    slug: 'spelling-bee',
    title: 'Spelling Bee',
    strand: 'spelling',
    skill: 'spelling-patterns',
    level: 'GCSE',
    audience: 'gcse',
  },

  // ── EAL / new-to-English games ────────────────────────────────────────
  {
    slug: 'picture-word-match',
    title: 'Picture Word Match',
    strand: 'vocabulary',
    skill: 'everyday-vocabulary',
    level: 'A1',
    audience: 'eal',
    learnHref: '/eal',
  },
  {
    slug: 'everyday-vocab-flashcards',
    title: 'Everyday Vocabulary',
    strand: 'vocabulary',
    skill: 'everyday-vocabulary',
    level: 'A1',
    audience: 'eal',
    learnHref: '/eal',
  },
  {
    slug: 'article-a-an-the',
    title: 'A, An, The or Nothing?',
    strand: 'grammar',
    skill: 'articles',
    level: 'A2',
    audience: 'eal',
    learnHref: '/eal',
  },
  {
    slug: 'plural-builder',
    title: 'Plural Builder',
    strand: 'grammar',
    skill: 'word-formation',
    level: 'A1',
    audience: 'eal',
    learnHref: '/eal',
  },
  {
    slug: 'to-be-conjugation',
    title: 'The Verb To Be',
    strand: 'grammar',
    skill: 'verb-forms',
    level: 'A1',
    audience: 'eal',
    learnHref: '/eal',
  },
  {
    slug: 'numbers-and-time',
    title: 'Numbers & Time',
    strand: 'vocabulary',
    skill: 'numbers-and-time',
    level: 'A1',
    audience: 'eal',
    learnHref: '/eal',
  },
  {
    slug: 'days-months-seasons',
    title: 'Days, Months & Seasons',
    strand: 'vocabulary',
    skill: 'everyday-vocabulary',
    level: 'A1',
    audience: 'eal',
    learnHref: '/eal',
  },
  {
    slug: 'classroom-objects',
    title: 'In the Classroom',
    strand: 'vocabulary',
    skill: 'everyday-vocabulary',
    level: 'A1',
    audience: 'eal',
    learnHref: '/eal',
  },
  {
    slug: 'greetings-dialogue',
    title: 'What Do You Say?',
    strand: 'vocabulary',
    skill: 'everyday-vocabulary',
    level: 'A2',
    audience: 'eal',
    learnHref: '/eal',
  },
  {
    slug: 'capital-letter-quest',
    title: 'Capital Letter Quest',
    strand: 'punctuation',
    skill: 'capitalisation',
    level: 'A1',
    audience: 'eal',
    learnHref: '/ks3/ilowersecondary/reference/spelling-punctuation',
  },
  {
    slug: 'tricky-word-spelling',
    title: 'Tricky Word Sprint',
    strand: 'spelling',
    skill: 'high-frequency-spelling',
    level: 'A2',
    audience: 'eal',
    learnHref: '/ks3/ilowersecondary/grammar-lab',
  },
  {
    slug: 'tense-timeline',
    title: 'Tense Timeline',
    strand: 'grammar',
    skill: 'tenses',
    level: 'B1',
    audience: 'eal',
    learnHref: '/eal',
  },
  {
    slug: 'prepositions-of-place',
    title: 'Where Is It?',
    strand: 'grammar',
    skill: 'prepositions',
    level: 'A2',
    audience: 'eal',
    learnHref: '/eal',
  },
  {
    slug: 'phrasal-verbs-match',
    title: 'Phrasal Verb Match',
    strand: 'vocabulary',
    skill: 'phrasal-verbs',
    level: 'B1',
    audience: 'eal',
    learnHref: '/eal',
  },
  {
    slug: 'question-formation',
    title: 'Build the Question',
    strand: 'grammar',
    skill: 'question-formation',
    level: 'B1',
    audience: 'eal',
    learnHref: '/eal',
  },
  {
    slug: 'common-error-fixer',
    title: 'Fix the Common Mistake',
    strand: 'grammar',
    skill: 'common-errors',
    level: 'B1',
    audience: 'eal',
    learnHref: '/eal',
  },
  {
    slug: 'comparatives-superlatives',
    title: 'Bigger, Biggest!',
    strand: 'grammar',
    skill: 'comparatives',
    level: 'A2',
    audience: 'eal',
    learnHref: '/eal',
  },
  {
    slug: 'collocations-challenge',
    title: 'Make / Do / Have / Take',
    strand: 'vocabulary',
    skill: 'collocations',
    level: 'B1',
    audience: 'eal',
    learnHref: '/eal',
  },

  // ── KS3 literacy games ────────────────────────────────────────────────
  {
    slug: 'word-class-sorter',
    title: 'Word Class Sorter',
    strand: 'grammar',
    skill: 'word-classes',
    level: 'KS3',
    audience: 'ks3',
    learnHref: '/ks3/ilowersecondary/reading/grammar-terminology',
  },
  {
    slug: 'punctuation-repair',
    title: 'Punctuation Repair',
    strand: 'punctuation',
    skill: 'punctuation',
    level: 'KS3',
    audience: 'ks3',
    learnHref: '/ks3/ilowersecondary/reference/spelling-punctuation',
  },
  {
    slug: 'apostrophe-ace',
    title: 'Apostrophe Ace',
    strand: 'punctuation',
    skill: 'apostrophes',
    level: 'KS3',
    audience: 'ks3',
    learnHref: '/ks3/ilowersecondary/reference/spelling-punctuation',
  },
  {
    slug: 'homophone-hero',
    title: 'Homophone Hero',
    strand: 'spelling',
    skill: 'homophones',
    level: 'KS3',
    audience: 'ks3',
    learnHref: '/ks3/ilowersecondary/grammar-lab',
  },
  {
    slug: 'sentence-builder',
    title: 'Sentence Builder',
    strand: 'writing',
    skill: 'sentence-construction',
    level: 'KS3',
    audience: 'ks3',
    learnHref: '/ks3/ilowersecondary/writing/sentence-variety',
  },
  {
    slug: 'prefix-suffix-lab',
    title: 'Prefix & Suffix Lab',
    strand: 'vocabulary',
    skill: 'word-formation',
    level: 'KS3',
    audience: 'ks3',
    learnHref: '/ks3/ilowersecondary/grammar-lab',
  },
  {
    slug: 'synonym-shuffle',
    title: 'Synonym Shuffle',
    strand: 'vocabulary',
    skill: 'academic-vocabulary',
    level: 'KS3',
    audience: 'ks3',
    learnHref: '/ks3/ilowersecondary/writing/vocabulary-cohesion',
  },
  {
    slug: 'spelling-patterns',
    title: 'Spelling Patterns',
    strand: 'spelling',
    skill: 'spelling-patterns',
    level: 'KS3',
    audience: 'ks3',
    learnHref: '/ks3/ilowersecondary/grammar-lab',
  },
  {
    slug: 'reading-detective',
    title: 'Reading Detective',
    strand: 'reading',
    skill: 'retrieval-and-inference',
    level: 'KS3',
    audience: 'ks3',
    learnHref: '/ks3/ilowersecondary/reading/inference',
  },
  {
    slug: 'figurative-language-finder',
    title: 'Figurative Language Finder',
    strand: 'literature',
    skill: 'literary-devices',
    level: 'KS3',
    audience: 'ks3',
    learnHref: '/ks3/ilowersecondary/reading/language',
  },
  {
    slug: 'dictionary-skills',
    title: 'Dictionary Skills',
    strand: 'reading',
    skill: 'reference-skills',
    level: 'KS3',
    audience: 'ks3',
    learnHref: '/ks3/ilowersecondary/grammar-lab',
  },
  {
    slug: 'paragraph-jumble',
    title: 'Paragraph Jumble',
    strand: 'writing',
    skill: 'text-cohesion',
    level: 'KS3',
    audience: 'ks3',
    learnHref: '/ks3/ilowersecondary/writing/structure-organisation',
  },
]

const BY_SLUG: Record<string, GameTaxon> = Object.fromEntries(TAXA.map((t) => [t.slug, t]))

/**
 * Look up a game's taxonomy. Returns a safe default (so an unmapped new
 * game still contributes a coarse signal) rather than throwing.
 */
export function getGameTaxon(slug: string): GameTaxon {
  return (
    BY_SLUG[slug] ?? {
      slug,
      title: slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' '),
      strand: 'vocabulary',
      skill: 'everyday-vocabulary',
      level: 'GCSE',
      audience: 'gcse',
    }
  )
}

export function allGameTaxa(): GameTaxon[] {
  return TAXA.slice()
}

/** Other games that train the same skill - used for "what to play next". */
export function gamesForSkill(skill: Skill, excludeSlug?: string): GameTaxon[] {
  return TAXA.filter((t) => t.skill === skill && t.slug !== excludeSlug)
}
