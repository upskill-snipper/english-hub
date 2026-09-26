/**
 * One study guide, section by section, for one set text.
 *
 * WHY THIS EXISTS (25 September 2026). The founder's report: "A lot of the texts
 * are missing Language Analysis, Key Vocabulary, Exam Practice etc." He was
 * right, and the reason was structural rather than a matter of effort. The 108
 * registered set texts had their guides spread across five route trees, each
 * with its own idea of what a guide contains. Macbeth had nine guides and no
 * glossary. Thirty-eight texts had no guide anywhere, only a placeholder saying
 * one was in production. Six of the ten anthology non-fiction texts had no
 * language analysis at all, and five had no vocabulary.
 *
 * So the sections are fixed here, once, and a test measures every registered
 * text against them. A guide file may hold every section, for a text that had
 * nothing, or only the sections its existing page lacks, in which case `native`
 * records where the rest already live and the test checks those routes exist.
 *
 * COPYRIGHT. Most set texts are in UK copyright. Analysis, opinion, context and
 * short quotation are lawful for them under the fair-dealing provision of the
 * Copyright, Designs and Patents Act 1988 (s.30, criticism and review). The
 * site's limits, which are tighter than the law, and the reasoning behind every
 * number are in fair-dealing.ts; `rights.acknowledgement` is the
 * acknowledgement, and the guide test enforces both.
 */

import type { AdvisoryTheme } from '@/components/content/ContentAdvisory'

/** The eleven sections every text is measured against, in reading order. */
export const SECTION_KEYS = [
  'overview',
  'context',
  'themes',
  'characters',
  'keyQuotes',
  'extracts',
  'languageAnalysis',
  'structureForm',
  'vocabulary',
  'examPractice',
  'modelAnswer',
] as const

export type SectionKey = (typeof SECTION_KEYS)[number]

export type GuideForm =
  | 'novel'
  | 'novella'
  | 'play'
  | 'poem'
  | 'short-story'
  | 'non-fiction'
  | 'short-story-collection'

export interface GuideQuote {
  /** The exact words, without the surrounding quotation marks. */
  text: string
  /** Who says it and where: "Mr Birling, Act 1", "Stanza 3", "Paragraph 4". */
  where: string
  analysis: string
}

/**
 * A passage for close reading, with notes on phrases inside it.
 *
 * ADDED 25 September 2026 at the founder's request for "text extracts" as well
 * as quotations. Two shapes, by copyright:
 *
 * - A PUBLIC-DOMAIN text prints the passage itself in `text`, verbatim from the
 *   held edition, and every annotated phrase must appear in it.
 * - A COPYRIGHTED text does not print the passage: see fair-dealing.ts for why.
 *   It gives a `pointer` precise enough to find the passage in the student's own
 *   copy, a `summary` in the guide's own words, and annotations on short quoted
 *   phrases, each under 15 words. That is a passage guide, and it is what a
 *   student needs beside the book open at the right page.
 */
export interface GuideExtract {
  /** What the passage is: "The Inspector's final speech". */
  title: string
  /** Where it comes from: "Act 3", "Chapter 8", "Stanza 4, lines 13-16". */
  where: string
  /**
   * How to find it in the text: its opening and closing words, or a line or
   * page reference. "From Birling's toast to the doorbell."
   */
  pointer: string
  /** The passage, verbatim. Public-domain texts only. Separate poem lines with " / ". */
  text?: string
  /** What happens in the passage, in the guide's own words. Required without `text`. */
  summary?: string
  /** Close-reading notes on short phrases from the passage. */
  annotations: { phrase: string; note: string }[]
  /** An exam-style question on the passage. */
  question: string
}

export interface GuideTechnique {
  /** The technique, named as an examiner would name it. */
  technique: string
  /** A short example from the text: a quotation, or a precise description of the moment. */
  example: string
  /** What it does to the reader, and why the writer chose it. */
  effect: string
}

/**
 * One moment in the text, in reading order: a scene, a chapter, a stanza, a
 * paragraph run. The animated story arc and the scene cards are drawn from
 * these, so they carry what a picture needs and not just prose.
 *
 * ADDED 25 September 2026 with the founder's request for "animations for each
 * and every set text and then some for chapters and key scenes". Researched in
 * the same pass as the rest of the guide so that every animation shows a
 * verified scene rather than an invented one.
 */
export interface GuideMoment {
  /** "Act 1, Scene 3", "Chapter 5", "Stanza 2", "Paragraphs 1-3". */
  where: string
  /** A short label for the card: "The witches' prophecy". */
  title: string
  /** Two or three sentences: what happens. */
  summary: string
  /** Where it happens, for the scene card: "A heath in a storm". */
  setting: string
  /** Characters present or involved, named as in `characters`. */
  who: string[]
  /** A short quotation from this moment. The fair-dealing limits apply. */
  quote?: string
  /** Theme titles from `themes` that this moment develops. */
  themes: string[]
  /**
   * Dramatic or emotional intensity from 1 (calm) to 5 (crisis). Drawn as the
   * story arc. A reading, not a fact, so it is for shape, not for marks.
   */
  tension: 1 | 2 | 3 | 4 | 5
  /** One line: why this moment matters to the whole text. */
  significance: string
}

/** One link in the character map. */
export interface GuideRelationship {
  from: string
  to: string
  /** A few words: "husband and wife", "master and servant", "rivals". */
  kind: string
  /** How the relationship changes or what it shows. */
  note: string
}

export interface GuideQuestion {
  question: string
  /** What the question is testing, in plain words: "Language analysis", "Whole-text essay". */
  skill: string
  /** How to answer it: the points to make, in order. */
  guidance: string[]
}

export interface StudyGuide {
  slug: string
  title: string
  author: string
  form: GuideForm
  /**
   * What the student studies, in the specification's terms: "The whole play",
   * or "The extract printed in the Pearson Edexcel anthology". A guide to the
   * whole of The Woman in Black is the wrong guide for a student set one
   * chapter of it.
   */
  scope: string
  rights: {
    status: 'public-domain' | 'copyright'
    /** Rendered under the guide. For a copyrighted text, the copyright line. */
    acknowledgement: string
  }
  /**
   * The length of what the student studies - the anthology extract, not the
   * whole book it comes from - and how that was established. Required for a
   * text in copyright, because the quotation limits depend on it, and a guide
   * that does not know is held to the tightest ones.
   */
  workLength?: { words: number; lines?: number; basis: string }

  overview?: { summary: string[] }
  context?: { heading: string; body: string }[]
  themes?: { title: string; body: string }[]
  /** Characters, or for a poem or a piece of non-fiction, the speaker or writer. */
  characters?: { name: string; role: string; body: string }[]
  keyQuotes?: GuideQuote[]
  /**
   * Why the quotations are fewer than usual, shown to the student above them.
   *
   * For a text whose prescribed wording cannot be checked from here - a novel
   * or play in copyright whose prescribed edition could not be read in full,
   * as with The Whale Rider - a rule demanding six quotations is a rule
   * demanding six guesses. With a note, three verified quotations meet the
   * bar, and the note tells the student to check any others against their
   * own copy. A short copyrighted poem, where the quotation limits leave room
   * for only a few, uses it too.
   *
   * Until 26 September 2026 this named The Necklace (David Coward's
   * translation) and the anthology's adapted extracts as texts that cannot be
   * checked. Both can: the anthology PDF prints the prescribed wording of
   * every one, Coward's translation included, so neither needs the lower bar.
   */
  quoteNote?: string
  extracts?: GuideExtract[]
  languageAnalysis?: GuideTechnique[]
  structureForm?: { heading: string; body: string }[]
  vocabulary?: { term: string; definition: string }[]
  examPractice?: { questions: GuideQuestion[]; tips: string[] }
  modelAnswer?: {
    question: string
    paragraph: string
    /** Why it works, point by point. */
    commentary: string[]
  }

  /**
   * Required in every guide file, including supplements: an existing page's
   * act or chapter summaries are prose, and an animation cannot be drawn from
   * prose. See GuideMoment.
   */
  timeline: GuideMoment[]
  /** The character map. Empty for a poem or essay with a single voice. */
  relationships: GuideRelationship[]

  compareWith?: { title: string; href?: string; reason: string }[]
  contentGuidance?: AdvisoryTheme[]

  /**
   * Sections the text's existing guide already provides, and where. Not
   * rendered. A route here is a claim, and the guide test checks the route
   * exists, so a section cannot be marked done by pointing at nothing.
   */
  native?: Partial<Record<SectionKey, string>>

  /**
   * Quoted phrases in this guide's prose that come from somewhere other than the
   * text: a dedication, an essay title, the author's autobiography, a critic.
   * Every other quoted phrase must be the text's own words, and for a text whose
   * edition is held in src/data/full-texts the test checks each one against it.
   * The War of the Worlds pilot is why: its draft quoted "dethroned", which the
   * novel does not contain, inside an otherwise accurate sentence.
   */
  quotesFromElsewhere?: string[]

  /** Where quotations and facts were checked. Not rendered; kept for the next editor. */
  sources: { label: string; url?: string }[]
}
