/**
 * EAL (English as Additional Language) curriculum data model.
 *
 * Drives /eal routes. Designed for Arabic L1 learners studying English
 * for UK GCSE/IGCSE exams. Covers the topics where Arabic-speaker
 * transfer errors most commonly appear:
 *   - sentence structures (SVO vs Arabic VSO)
 *   - tenses (especially the perfect tenses, which Arabic doesn't
 *     mark morphologically the same way)
 *   - articles (Arabic has no indefinite article)
 *   - word order, prepositions, phrasal verbs
 *   - pronouns (Arabic distinguishes gender/number more)
 *   - singular/plural + uncountable nouns
 *   - pronunciation (P/B, V/F, consonant clusters)
 *   - common Arabic-to-English transfer errors
 *
 * Bilingual by design — every user-facing string carries en + optional
 * ar (Khaleeji). Schema mirrors src/lib/ks3/types.ts so /eal and /ks3
 * can share rendering helpers and the existing dictionary lookups.
 */

import type { LocalizedString, Locale } from '../ks3/types'
import type { CEFRBand } from './cefr'

export type { LocalizedString, Locale }
export { loc } from '../ks3/types'

/**
 * High-level EAL category. Drives the landing page navigation grouping
 * and lets us reuse the existing strand colour palette from KS3.
 */
export type EALCategory =
  | 'grammar' // tenses, articles, pronouns, etc.
  | 'sentence' // sentence structures, word order, conjunctions
  | 'vocabulary' // word families, collocations, register
  | 'pronunciation' // silent letters, sound contrasts, stress
  | 'common_errors' // explicit Arabic L1 transfer-error remediation

export const EAL_CATEGORY_LABEL: Record<EALCategory, LocalizedString> = {
  grammar: { en: 'Grammar', ar: 'القواعد' },
  sentence: { en: 'Sentence Structure', ar: 'بناء الجملة' },
  vocabulary: { en: 'Vocabulary', ar: 'المفردات' },
  pronunciation: { en: 'Pronunciation', ar: 'النطق' },
  common_errors: { en: 'Common Errors', ar: 'الأخطاء الشائعة' },
}

export const EAL_CATEGORY_DESCRIPTION: Record<EALCategory, LocalizedString> = {
  grammar: {
    en: 'Tenses, articles, pronouns and modal verbs — the grammatical patterns Arabic L1 learners most often need to retrain.',
    ar: 'الأزمنة وأدوات التعريف والضمائر والأفعال الناقصة — الأنماط القواعدية اللي يحتاجها المتعلم العربي يعيد بناءها بأكثر دقّة.',
  },
  sentence: {
    en: 'Building English sentences: word order, joining clauses, avoiding fragments and run-ons. Arabic uses VSO order — English insists on SVO.',
    ar: 'بناء الجملة الإنجليزية: ترتيب الكلمات، الربط بين الجمل، تجنّب الجمل الناقصة والمتداخلة. العربي يستخدم ترتيب فعل-فاعل-مفعول، والإنجليزي يصرّ على فاعل-فعل-مفعول.',
  },
  vocabulary: {
    en: 'Word families, collocations, false friends, register. Words that look the same in Arabic + English but mean different things.',
    ar: 'عائلات الكلمات، الكولوكيشن، الأصدقاء الكاذبين، السجل اللغوي. الكلمات اللي تشبه بعض في العربي والإنجليزي بس معناها يختلف.',
  },
  pronunciation: {
    en: "Sound contrasts that don't exist in Arabic: P vs B, V vs F, no consonant clusters in Arabic. Plus silent letters and English stress patterns.",
    ar: 'الفوارق الصوتية اللي ما توجد في العربي: P و B، V و F، وغياب التكتّلات الساكنة في العربي. وكذلك الحروف الصامتة وأنماط النبر في الإنجليزي.',
  },
  common_errors: {
    en: 'Direct Arabic-to-English transfer errors — patterns Arabic speakers reach for instinctively that examiners flag every time.',
    ar: 'أخطاء النقل المباشر من العربي للإنجليزي — أنماط ينحاز إليها المتعلم العربي تلقائياً، والمصحّحون يرصدونها كل مرة.',
  },
}

/**
 * An example sentence pair. The English version is the target; the
 * Arabic shows the meaning. Optionally we add a grammar note explaining
 * the rule the example illustrates.
 */
export type EALExample = {
  /** Target English sentence (the form the student should produce). */
  en: string
  /** Arabic translation — meaning, not literal word-for-word. */
  ar: string
  /** Optional teaching note (e.g. "Note the past participle form"). */
  note?: LocalizedString
}

/**
 * A common error students make — wrong vs right with an explanation
 * the teacher would give in an Arabic L1 classroom.
 */
export type EALError = {
  /** What an Arabic L1 student typically writes (the wrong form). */
  wrong: string
  /** The correct English form. */
  right: string
  /** Why the wrong form is wrong, expressed in plain student-facing language. */
  explanation: LocalizedString
}

/**
 * A practice question with multiple-choice answers and an explanation
 * shown after answering. Answers reveal locale-aware explanation.
 */
export type EALExercise = {
  /** The question prompt (e.g. "Choose the correct article."). */
  question: LocalizedString
  /** A sentence with a blank or set of options inline (e.g. "She is __ student."). */
  prompt: LocalizedString
  /** Multiple-choice options. */
  options: LocalizedString[]
  /** 0-based index into `options` for the correct answer. */
  correctIndex: number
  /** Locale-aware explanation shown after answering. */
  explanation: LocalizedString
}

/**
 * One EAL topic. Mirrors the depth of a KS3 weekly lesson plan —
 * concept + examples + common errors + practice — but framed around
 * the single grammatical or sentence-level idea the topic teaches.
 */
export type EALTopic = {
  /** URL slug, also the i18n key suffix (e.g. 'present-perfect'). */
  id: string
  category: EALCategory
  /**
   * CEFR band this topic is pitched at (A2..C1). Drives the placement
   * test's "study next" routing and the /eal/<id>/level/<band> pages.
   */
  cefr: CEFRBand
  /** Title shown on the landing card + heading. */
  title: LocalizedString
  /** One-sentence hook for the landing card. */
  description: LocalizedString
  /** Long-form concept explanation — 2-4 paragraphs. */
  concept: LocalizedString
  /** 6-10 illustrative examples. */
  examples: EALExample[]
  /** 3-8 common Arabic-L1 transfer errors. */
  commonErrors: EALError[]
  /** 4-8 practice questions. */
  exercises: EALExercise[]
  /** Optional cross-reference to a KS3 skill code or another EAL topic. */
  seeAlso?: string[]
}

/** The full EAL curriculum. */
export type EALCurriculum = {
  topics: EALTopic[]
}
