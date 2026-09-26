/**
 * A guide to ONE chapter (or act, or stave) of a set text: the page a student
 * opens when they have just read Chapter 5 and want to know what mattered in
 * it.
 *
 * WHY A SHAPE OF ITS OWN (26 September 2026). The whole-text StudyGuide answers
 * "what is this book about"; a student revising chapter by chapter needs the
 * chapter's events in order, its key lines read closely, what it adds to each
 * character and theme, and a question to try. Macbeth's act pages do this in
 * bespoke JSX, 700 to 1,000 lines each; this type does it as data, so every
 * chapter page renders the same way and a test can check every word of it.
 *
 * THE RULE THAT MAKES IT TRUSTWORTHY. For a text out of UK copyright with an
 * edition held in src/data/full-texts, every quotation here, in `closeReading`
 * and anywhere in the prose inside double quotation marks, must be found word
 * for word in THIS chapter of that edition. chapter-guides.test.ts enforces it,
 * so a quotation from the wrong chapter fails as surely as an invented one.
 */
export interface ChapterGuide {
  /** The set text's slug, as in src/lib/board/set-texts.ts. */
  slug: string
  /** 1-based. The page lives at /revision/texts/<slug>/chapter-<n>. */
  chapter: number
  /**
   * The part name the guide's timeline uses ("Chapter 5"), so the scene player
   * can show this chapter's moments. See src/lib/study-guides/parts.ts.
   */
  part: string
  /** The chapter's own title if it has one, otherwise a short descriptive one. */
  title: string
  /** Two or three sentences: what happens and why it matters. */
  atAGlance: string
  /** What happens, in order, in several paragraphs. */
  summary: string[]
  /** The turning points, each a sentence. */
  keyEvents: string[]
  /** Lines read closely: the words, the technique, and what it does. */
  closeReading: { quote: string; technique: string; analysis: string }[]
  /** What this chapter shows or changes about each character in it. */
  characters: { name: string; development: string }[]
  /** How this chapter develops each theme. */
  themes: { theme: string; development: string }[]
  /** Historical or biographical context this chapter depends on. */
  context: { heading: string; body: string }[]
  /** Where the chapter sits in the book's shape, and how it is built. */
  structure: string
  vocabulary: { term: string; meaning: string }[]
  /** An exam-style question on this chapter, with a plan and tips. */
  examQuestion: { question: string; guidance: string[]; tips: string[] }
  /** Self-check questions. `answer` is the index of the right option. */
  quiz: { question: string; options: string[]; answer: number; explanation: string }[]
  /** Where each outside fact came from. Not rendered. */
  sources: { label: string; url?: string }[]
}
