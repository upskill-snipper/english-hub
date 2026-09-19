/**
 * The Pearson Edexcel International GCSE English Anthology, as it is actually
 * printed.
 *
 * WHY THIS FILE EXISTS. Thirty-six of our set-text rows are anthology pieces,
 * and until it was checked against the booklet itself the tagging was wrong in
 * a way that told students to revise the wrong half of it. Every one of the
 * sixteen Part 3 poems was either tagged to English Language A, which does not
 * examine them, or missing from our data altogether. Nine were being shown to
 * Language students who will never be asked about them; seven - including four
 * with a finished guide already written - were shown to nobody at all.
 *
 * THE DISTINCTION THAT WAS BEING MISSED, and it is the whole point of the file:
 * the anthology is ONE booklet serving TWO qualifications, and the parts are
 * not shared.
 *
 *   Part 1  ten non-fiction texts     English Language A (4EA1) only
 *   Part 2  ten poems and prose       English Language A (4EA1) only
 *   Part 3  sixteen poems             English Literature (4ET1) only
 *
 * The specification is explicit that Part 3 is not part of 4EA1. So 4EA1
 * prescribes twenty anthology texts, not the thirty-five we were claiming, and
 * 4ET1 prescribes sixteen poems, not the eight we held.
 *
 * WHY THE ISSUE NUMBER IS RECORDED AND THE ISBN IS NOT ENOUGH. The ISBN is
 * stable across issues: 978 1 446 93108 0 identifies the anthology but not the
 * version of it. Pearson also overwrites specification asset paths in place
 * while leaving stale filenames and stale download labels, so the URL a
 * document sits at cannot be trusted to say which issue it is. The version must
 * be read from the running footer of the document body, which is where the
 * string below comes from.
 *
 * WHAT THIS FILE IS NOT. It is not the text of the anthology and must never
 * become that. The booklet carries "(c) Pearson Education Limited 2026": the
 * compilation and several of the translations are themselves copyright works.
 * Titles, authors and page numbers are facts about a syllabus and are recorded
 * here; the works are not reproduced.
 *
 * SOURCE
 *   Pearson Edexcel International GCSE English Anthology
 *   for 4ET1, 4EA1, 4XET1 (Modular) and 4XEA1 (Modular)
 *   Issue 8, February 2026, ISBN 978 1 446 93108 0
 *   qualifications.pearson.com .../9781446931080-int-gcse-eng-ant.pdf
 *   Read 19 September 2026.
 */

import type { ExamBoard } from './board-config'

export interface AnthologyEntry {
  /** Our slug, or null where we hold no row for it yet. */
  slug: string
  /** The title as the anthology prints it, punctuation included. */
  title: string
  /** The author as the anthology prints them. */
  author: string
  /** Page number in the anthology, for a teacher checking against the booklet. */
  page: number
  /**
   * True where the anthology prints a shortened or altered version, so the
   * freely available original is NOT the prescribed text. A student revising
   * the original answers on a text the examiner is not reading.
   */
  altered?: 'extract' | 'adapted' | 'translation'
  /** What the alteration is, where the anthology says so. */
  alteredNote?: string
}

export interface AnthologyPart {
  part: 1 | 2 | 3
  /** The specification that examines this part. They do not overlap. */
  board: ExamBoard
  /** Where it is assessed, in the specification's own words. */
  assessedIn: string
  entries: AnthologyEntry[]
}

/** The document every entry below was read from. Cite this, never a filename. */
export const ANTHOLOGY_SOURCE = {
  title: 'Pearson Edexcel International GCSE English Anthology',
  version: 'Issue 8, February 2026',
  isbn: '978 1 446 93108 0',
  url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
  readOn: '2026-09-19',
  /** The ISBN does not change between issues, so it cannot identify a version. */
  versionIsInDocumentBody: true,
} as const

export const ANTHOLOGY: AnthologyPart[] = [
  {
    part: 1,
    board: 'edexcel-igcse-lang',
    assessedIn: '4EA1 Component 1 (Unit 1) Section A. All ten are compulsory.',
    entries: [
      {
        slug: 'the-danger-of-a-single-story',
        title: 'From The Danger of a Single Story',
        author: 'Chimamanda Ngozi Adichie',
        page: 2,
        altered: 'extract',
      },
      {
        slug: 'a-passage-to-africa',
        title: 'From A Passage to Africa',
        author: 'George Alagiah',
        page: 4,
        altered: 'extract',
      },
      {
        slug: 'the-explorers-daughter',
        title: "From The Explorer's Daughter",
        author: 'Kari Herbert',
        page: 6,
        altered: 'extract',
      },
      {
        slug: 'explorers-or-boys-messing-about',
        title: 'Explorers or boys messing about? Either way, taxpayer gets rescue bill',
        author: 'Steven Morris',
        page: 8,
        altered: 'adapted',
        alteredNote: 'The anthology prints an explicit adaptation note under this article.',
      },
      {
        slug: 'between-a-rock-and-a-hard-place',
        title: 'From 127 Hours: Between a Rock and a Hard Place',
        author: 'Aron Ralston',
        page: 10,
        altered: 'extract',
      },
      {
        slug: 'young-and-dyslexic',
        title: "Young and dyslexic? You've got it going on",
        author: 'Benjamin Zephaniah',
        page: 12,
        altered: 'adapted',
        alteredNote: 'The anthology prints an explicit adaptation note under this article.',
      },
      {
        slug: 'a-game-of-polo-with-a-headless-goat',
        title: 'From A Game of Polo with a Headless Goat',
        author: 'Emma Levine',
        page: 14,
        altered: 'extract',
      },
      {
        slug: 'beyond-the-sky-and-the-earth',
        title: 'From Beyond the Sky and the Earth: A Journey into Bhutan',
        author: 'Jamie Zeppa',
        page: 16,
        altered: 'extract',
      },
      {
        slug: 'h-is-for-hawk',
        title: 'From H is for Hawk',
        author: 'Helen Macdonald',
        page: 19,
        altered: 'extract',
      },
      {
        slug: 'chinese-cinderella',
        title: 'From Chinese Cinderella',
        author: 'Adeline Yen Mah',
        page: 21,
        altered: 'extract',
      },
    ],
  },
  {
    part: 2,
    board: 'edexcel-igcse-lang',
    assessedIn:
      '4EA1 Component 2 (Unit 2 Section A, examined) and Component 3 (Unit 3, non-examined assessment). Five poems then five prose.',
    entries: [
      { slug: 'disabled', title: 'Disabled', author: 'Wilfred Owen', page: 25 },
      { slug: 'out-out', title: 'Out, Out-', author: 'Robert Frost', page: 26 },
      { slug: 'an-unknown-girl', title: 'An Unknown Girl', author: 'Moniza Alvi', page: 27 },
      {
        slug: 'the-bright-lights-of-sarajevo',
        title: 'The Bright Lights of Sarajevo',
        author: 'Tony Harrison',
        page: 28,
      },
      { slug: 'still-i-rise', title: 'Still I Rise', author: 'Maya Angelou', page: 29 },
      {
        slug: 'the-story-of-an-hour',
        title: 'The Story of an Hour',
        author: 'Kate Chopin',
        page: 30,
      },
      {
        slug: 'the-necklace',
        title: 'The Necklace',
        author: 'Guy de Maupassant',
        page: 32,
        altered: 'translation',
        alteredNote:
          'The prescribed text is the David Coward translation, which is in copyright. The freely available older translations are NOT the prescribed text and must not be published as though they were.',
      },
      {
        slug: 'significant-cigarettes',
        title: 'Significant Cigarettes (from The Road Home)',
        author: 'Rose Tremain',
        page: 38,
        altered: 'extract',
      },
      {
        slug: 'whistle-and-ill-come-to-you',
        title: "Whistle and I'll Come to You (from The Woman in Black)",
        author: 'Susan Hill',
        page: 42,
        altered: 'extract',
      },
      { slug: 'night', title: 'Night', author: 'Alice Munro', page: 44 },
    ],
  },
  {
    part: 3,
    board: 'edexcel-igcse',
    assessedIn:
      '4ET1 Component 1 (Unit 1) Section B, and the modular 4XET1. All sixteen are compulsory, not a choice. Expressly NOT part of 4EA1.',
    entries: [
      { slug: 'if', title: 'If-', author: 'Rudyard Kipling', page: 51 },
      {
        slug: 'prayer-before-birth',
        title: 'Prayer Before Birth',
        author: 'Louis MacNeice',
        page: 52,
      },
      { slug: 'blessing', title: 'Blessing', author: 'Imtiaz Dharker', page: 53 },
      {
        slug: 'search-for-my-tongue',
        title: 'Search For My Tongue',
        author: 'Sujata Bhatt',
        page: 54,
      },
      { slug: 'half-past-two', title: 'Half-past Two', author: 'U A Fanthorpe', page: 56 },
      { slug: 'piano', title: 'Piano', author: 'D H Lawrence', page: 57 },
      { slug: 'hide-and-seek', title: 'Hide and Seek', author: 'Vernon Scannell', page: 58 },
      {
        slug: 'sonnet-116',
        title: 'Sonnet 116: Let me not to the marriage of true minds',
        author: 'William Shakespeare',
        page: 59,
      },
      {
        slug: 'la-belle-dame-sans-merci',
        title: 'La Belle Dame sans Merci',
        author: 'John Keats',
        page: 60,
      },
      {
        slug: 'poem-at-thirty-nine',
        title: 'Poem at Thirty-Nine',
        author: 'Alice Walker',
        page: 62,
      },
      {
        slug: 'war-photographer',
        title: 'War Photographer',
        author: 'Carol Ann Duffy',
        page: 63,
      },
      { slug: 'the-tyger', title: 'The Tyger', author: 'William Blake', page: 64 },
      { slug: 'my-last-duchess', title: 'My Last Duchess', author: 'Robert Browning', page: 65 },
      { slug: 'half-caste', title: 'Half-caste', author: 'John Agard', page: 67 },
      {
        slug: 'do-not-go-gentle-into-that-good-night',
        title: 'Do not go gentle into that good night',
        author: 'Dylan Thomas',
        page: 69,
      },
      { slug: 'remember', title: 'Remember', author: 'Christina Rossetti', page: 70 },
    ],
  },
]

/** Every slug the anthology prescribes for `board`. */
export function anthologySlugsForBoard(board: ExamBoard): string[] {
  return ANTHOLOGY.filter((p) => p.board === board).flatMap((p) => p.entries.map((e) => e.slug))
}

/** The part an anthology slug belongs to, or null when it is not in the anthology. */
export function anthologyPartOf(slug: string): AnthologyPart | null {
  return ANTHOLOGY.find((p) => p.entries.some((e) => e.slug === slug)) ?? null
}

/** The entry for a slug, or null. */
export function anthologyEntry(slug: string): AnthologyEntry | null {
  for (const part of ANTHOLOGY) {
    const found = part.entries.find((e) => e.slug === slug)
    if (found) return found
  }
  return null
}
