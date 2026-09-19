/**
 * What Pearson Edexcel International GCSE English Literature (4ET1) actually
 * prescribes, outside the anthology.
 *
 * WHY THIS FILE EXISTS. Read against the specification, our 4ET1 tagging was
 * wrong in three directions at once. Eight prescribed texts were missing from
 * the data entirely, including both of the 2024 additions. Three that we do
 * hold, with real guides, were tagged to four UK boards and not to the
 * international one that also prescribes them. Six were claimed for 4ET1 that
 * it does not prescribe at all - five of them anthology Part 2 pieces, which
 * belong to English Language A.
 *
 * THE SHAPE OF THE QUALIFICATION, because the mis-tagging came from assuming it
 * looks like a UK GCSE and it does not:
 *
 *   Component 1  Section B  the sixteen anthology Part 3 poems, all compulsory
 *                Section C  ONE modern prose text from seven
 *   Component 2  (examined) and Component 3 (non-examined assessment) draw on
 *                the SAME two lists: ONE modern drama from five, and ONE
 *                literary heritage text from six
 *
 * There is no separate Shakespeare component. A 4ET1 candidate may avoid
 * Shakespeare's plays entirely by choosing Austen, Dickens or Hawthorne for the
 * literary heritage text, which is not true of any UK GCSE we cover, and is
 * worth knowing before telling an international student what they must revise.
 *
 * Anthology Part 2 appears nowhere in that structure. The specification's only
 * component headings are "Component 1: Poetry and Modern Prose" and
 * "Component 2/3: Modern Drama and Literary Heritage Texts", and Part 2 is
 * prescribed for 4EA1. See edexcel-igcse-anthology.ts.
 *
 * TWO DATED ENTRIES. Klara and the Sun and Western Lane are first teaching
 * September 2024 and FIRST ASSESSMENT MAY 2026. They are live for Summer 2026
 * and Summer 2027 but were not assessable before that, so a 2025 resit student
 * must not be shown them as an option. Nothing on these lists is being
 * withdrawn: the specification carries no "last assessment" note against any of
 * them.
 *
 * SOURCE
 *   Pearson Edexcel International GCSE in English Literature (4ET1)
 *   Specification, Issue 3, August 2025
 *   ISBN 978 1 446 95435 5, print code DB240524
 *   Read 19 September 2026.
 *
 * SCOPE. This is the LINEAR 4ET1. Pearson publishes a separate modular
 * International GCSE English Literature specification, and these rows must not
 * be reused for it without reading that document.
 */

export interface PrescribedChoice {
  /** The specification's own heading for where this list is assessed. */
  assessedIn: string
  /** How many of the list a candidate takes. */
  choose: number
  entries: {
    slug: string
    /** The title as the specification prints it. */
    title: string
    /** The writer as the specification's prescribed-editions appendix prints them. */
    author: string
    /**
     * First assessment series, where the specification dates the entry.
     * Absent means it has been prescribed throughout.
     */
    firstAssessment?: string
  }[]
}

export const LITERATURE_4ET1_SOURCE = {
  title: 'Pearson Edexcel International GCSE in English Literature (4ET1) Specification',
  version: 'Issue 3, August 2025',
  isbn: '978 1 446 95435 5',
  readOn: '2026-09-19',
  /** The linear specification. There is a separate modular one. */
  variant: 'linear',
} as const

/** ONE modern prose text, Component 1 Section C. */
export const MODERN_PROSE: PrescribedChoice = {
  assessedIn: 'Component 1 (Unit 1) Section C',
  choose: 1,
  entries: [
    { slug: 'to-kill-a-mockingbird', title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { slug: 'of-mice-and-men', title: 'Of Mice and Men', author: 'John Steinbeck' },
    { slug: 'the-whale-rider', title: 'The Whale Rider', author: 'Witi Ihimaera' },
    { slug: 'the-joy-luck-club', title: 'The Joy Luck Club', author: 'Amy Tan' },
    { slug: 'things-fall-apart', title: 'Things Fall Apart', author: 'Chinua Achebe' },
    {
      slug: 'klara-and-the-sun',
      title: 'Klara and the Sun',
      author: 'Kazuo Ishiguro',
      firstAssessment: 'May 2026',
    },
    {
      slug: 'western-lane',
      title: 'Western Lane',
      author: 'Chetna Maroo',
      firstAssessment: 'May 2026',
    },
  ],
}

/** ONE modern drama text, Components 2 and 3. */
export const MODERN_DRAMA: PrescribedChoice = {
  assessedIn: 'Component 2 (examined) and Component 3 (non-examined assessment)',
  choose: 1,
  entries: [
    { slug: 'a-view-from-the-bridge', title: 'A View from the Bridge', author: 'Arthur Miller' },
    { slug: 'an-inspector-calls', title: 'An Inspector Calls', author: 'J B Priestley' },
    {
      // Our slug is the short one, from before the long form existed. Kept
      // rather than renamed: the URL is live and indexed, and a rename would
      // cost a redirect for no reader benefit.
      slug: 'curious-incident',
      title: 'The Curious Incident of the Dog in the Night-time',
      author: 'Mark Haddon (adapted by Simon Stephens)',
    },
    { slug: 'kindertransport', title: 'Kindertransport', author: 'Diane Samuels' },
    {
      slug: 'death-and-the-kings-horseman',
      title: "Death and the King's Horseman",
      author: 'Wole Soyinka',
    },
  ],
}

/** ONE literary heritage text, Components 2 and 3. No separate Shakespeare paper. */
export const LITERARY_HERITAGE: PrescribedChoice = {
  assessedIn: 'Component 2 (examined) and Component 3 (non-examined assessment)',
  choose: 1,
  entries: [
    { slug: 'romeo-and-juliet', title: 'Romeo and Juliet', author: 'William Shakespeare' },
    { slug: 'macbeth', title: 'Macbeth', author: 'William Shakespeare' },
    {
      slug: 'the-merchant-of-venice',
      title: 'The Merchant of Venice',
      author: 'William Shakespeare',
    },
    { slug: 'pride-and-prejudice', title: 'Pride and Prejudice', author: 'Jane Austen' },
    { slug: 'great-expectations', title: 'Great Expectations', author: 'Charles Dickens' },
    { slug: 'the-scarlet-letter', title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne' },
  ],
}

export const LITERATURE_4ET1: PrescribedChoice[] = [MODERN_PROSE, MODERN_DRAMA, LITERARY_HERITAGE]

/** Every whole text 4ET1 prescribes. Anthology poems are in the anthology file. */
export function literature4et1Slugs(): string[] {
  return LITERATURE_4ET1.flatMap((c) => c.entries.map((e) => e.slug))
}
