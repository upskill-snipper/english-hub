/**
 * Cambridge IGCSE Literature in English 0475, the prescribed set texts.
 *
 * WHY THIS FILE EXISTS. The board read as completely empty. `getSetTextsForBoard`
 * returned nothing for cambridge-0475, so the shelf showed a student in the Gulf
 * - the market this board mostly serves - that we had no idea what they study.
 * We held rows and finished guides for several of its texts, tagged to other
 * boards. Antony and Cleopatra, a 1,491-line guide and the longest on the site,
 * is a prescribed 0475 drama text.
 *
 * WHY IT IS NOT IN prescribed-texts.ts. Two reasons, and the second is the
 * important one.
 *
 * SHAPE. A flat shakespeare/nineteenthCentury/modern list cannot express this
 * syllabus. Paper 1 Section A offers a choice of THREE alternative poetry sets
 * of fifteen poems each, and the candidate answers on one. Section B offers
 * seven whole novels or a set of ten numbered short stories. Papers 2 and 3 are
 * alternative drama papers sharing one list of five plays.
 *
 * ROTATION, WHICH IS THE REAL HAZARD. Cambridge republishes 0475 set texts
 * EVERY YEAR and they change between years. Four syllabus PDFs sit side by side
 * on one Cambridge page - 2023-2025, 2026, 2027 and 2028-2030 - with no current,
 * past or archived label on any of them, and the superseded 2023-2025 document
 * still returns HTTP 200. Quoting the wrong one is not a theoretical risk: its
 * own change log records a set text being swapped mid-document. The 2028-2030
 * file is the most dangerous, because its lists are real and would look
 * authoritative, while prescribing a different anthology volume in each year.
 *
 * So every list here is stamped with the examination year it belongs to, and
 * anything read from this file must carry that year with it.
 *
 * WHAT CHANGED BETWEEN THE TWO LIVE SERIES. Poetry: nothing, all three options
 * and all 45 poems are identical. Prose: one swap - H G Wells's The War of the
 * Worlds is out for 2027 and Lesley Nneka Arimah's What it Means When a Man
 * Falls from the Sky is in. Drama: Chinonyerem Odimba's Princess & the Hustler
 * is in for 2027 and Tennessee Williams's A Streetcar Named Desire is out.
 *
 * That last one matters to us specifically: we hold a 719-line guide to
 * A Streetcar Named Desire, and it is a 2026 text, not a 2027 one.
 *
 * WHAT IS NOT HERE. Author dates, publication years and copyright positions.
 * The syllabus prints author names and it does not print those, and this file
 * records only what the syllabus says. They must not be filled in from memory.
 *
 * SOURCE
 *   Cambridge IGCSE Literature in English 0475
 *   syllabus for examination in 2027, Version 2, published October 2024
 *   cambridgeinternational.org/Images/721333-2027-syllabus.pdf
 *   and syllabus for examination in 2026, Version 2, published December 2025
 *   Read 19 September 2026.
 *
 * There is NO separate set-text booklet for 0475. The prescribed texts are
 * printed inside the syllabus PDF itself, already at poem and story level with
 * the anthology volume, the part number where given, and the item number for
 * stories. The syllabus is the single citation needed.
 */

export interface Cambridge0475Text {
  /** Our slug, or null where we hold no row and none is planned yet. */
  slug: string | null
  /** The title exactly as the syllabus prints it. */
  title: string
  /** The author exactly as the syllabus prints them. */
  author: string
  /** The anthology it is drawn from, where it is an anthology piece. */
  from?: string
  /** The syllabus's own item number, for the Stories of Ourselves entries. */
  item?: number
}

export interface Cambridge0475Option {
  /** The syllabus's own label for this alternative. */
  label: string
  texts: Cambridge0475Text[]
}

export interface Cambridge0475Paper {
  paper: string
  /** What the candidate does with the options below. */
  rubric: string
  options: Cambridge0475Option[]
}

export interface Cambridge0475Year {
  /** The examination year these lists apply to. Never use a list without it. */
  examYear: 2026 | 2027
  source: { version: string; url: string; readOn: string }
  papers: Cambridge0475Paper[]
}

/* The 45 poems are identical across 2026 and 2027, so they are declared once. */

const SONGS_VOLUME_1: Cambridge0475Text[] = [
  { slug: null, title: 'Song: Love Armed', author: 'Aphra Behn' },
  { slug: null, title: 'A Different History', author: 'Sujata Bhatt' },
  { slug: null, title: 'The Chimney-Sweeper', author: 'William Blake' },
  { slug: null, title: 'Where I Come From', author: 'Elizabeth Brewster' },
  { slug: null, title: 'Report to Wordsworth', author: 'Boey Kim Cheng' },
  { slug: null, title: 'Lament', author: 'Gillian Clarke' },
  { slug: null, title: 'The Cockroach', author: 'Kevin Halligan' },
  { slug: null, title: 'Follower', author: 'Seamus Heaney' },
  { slug: null, title: 'Storyteller', author: 'Liz Lochhead' },
  { slug: null, title: 'Before the Sun', author: 'Charles Mungoshi' },
  { slug: null, title: 'A Married State', author: 'Katherine Philips' },
  { slug: null, title: "From 'An Essay on Man'", author: 'Alexander Pope' },
  { slug: null, title: 'Carpet-weavers, Morocco', author: 'Carol Rumens' },
  { slug: null, title: 'Sonnet 18', author: 'William Shakespeare' },
  { slug: null, title: 'Hunting Snake', author: 'Judith Wright' },
].map((t) => ({ ...t, from: 'Songs of Ourselves Volume 1' }))

const SONGS_VOLUME_2_PART_3: Cambridge0475Text[] = [
  { slug: null, title: 'The Road', author: 'Nancy Fotheringham Cato' },
  { slug: null, title: 'The Instant of My Death', author: 'Sarah Jackson' },
  { slug: null, title: 'The Bus', author: 'Arun Kolatkar' },
  { slug: null, title: 'At the Bus Station', author: 'Julius Chingono' },
  { slug: null, title: 'These are the Times We Live in', author: 'Imtiaz Dharker' },
  { slug: null, title: 'The Enemies', author: 'Elizabeth Jennings' },
  { slug: null, title: 'Boxes', author: 'Sampurna Chattarji' },
  { slug: null, title: 'The Capital', author: 'W H Auden' },
  { slug: null, title: 'an afternoon nap', author: 'Arthur Yap' },
  { slug: null, title: 'Plaits', author: 'Elizabeth Smither' },
  { slug: null, title: 'Children of Wealth', author: 'Elizabeth Daryush' },
  { slug: null, title: 'Rich and Poor or, Saint and Sinner', author: 'Thomas Love Peacock' },
  { slug: null, title: 'A Long Journey', author: 'Musaemura Zimunya' },
  { slug: null, title: 'Touch and Go', author: 'Stevie Smith' },
  { slug: null, title: 'Song', author: 'George Szirtes' },
].map((t) => ({ ...t, from: 'Songs of Ourselves Volume 2, Part 3' }))

const KUMUKANDA: Cambridge0475Text[] = [
  "The Colour of James Brown's Scream",
  'Broomhall',
  'The N Word (I.)',
  'Waves',
  'A Proud Blemish',
  'Andrews Corner',
  "'Round Midnight",
  'This poem contains gull song',
  "Fisherman's Song",
  'Some Bright Elegance',
  'Curfew',
  'Kumukanda',
  'Grief',
  "Kung'anda",
  'Baltic Mill',
].map((title) => ({
  slug: null,
  title,
  author: 'Kayo Chingonyi',
  from: 'Kumukanda (Chatto & Windus)',
}))

/** Identical in 2026 and 2027. Three alternatives, fifteen poems each. */
const POETRY: Cambridge0475Paper = {
  paper: 'Paper 1 Section A (Poetry)',
  rubric: 'Candidates answer on ONE of these three set texts.',
  options: [
    { label: 'Songs of Ourselves Volume 1', texts: SONGS_VOLUME_1 },
    { label: 'Songs of Ourselves Volume 2, Part 3', texts: SONGS_VOLUME_2_PART_3 },
    { label: 'Kayo Chingonyi, from Kumukanda', texts: KUMUKANDA },
  ],
}

/** Identical in 2026 and 2027. Volume 2 only; no Volume 1 story is set. */
const STORIES_OF_OURSELVES: Cambridge0475Text[] = [
  { item: 3, title: 'Nick', author: 'Christina Rossetti' },
  { item: 14, title: "The Woman's Rose", author: 'Olive Schreiner' },
  { item: 26, title: 'The Black Ball', author: 'Ralph Ellison' },
  { item: 30, title: 'The Gold Watch', author: 'Mulk Raj Anand' },
  { item: 35, title: 'When It Happens', author: 'Margaret Atwood' },
  { item: 37, title: 'The Man Who Walked on the Moon', author: 'J G Ballard' },
  { item: 38, title: 'A Walk to the Jetty', author: 'Jamaica Kincaid' },
  { item: 40, title: 'Showing the Flag', author: 'Jane Gardam' },
  { item: 47, title: 'Haywards Heath', author: 'Aminatta Forna' },
  { item: 49, title: 'Fluke', author: 'Romesh Gunesekera' },
].map((t) => ({ ...t, slug: null, from: 'Stories of Ourselves Volume 2' }))

export const CAMBRIDGE_0475: Cambridge0475Year[] = [
  {
    examYear: 2026,
    source: {
      version: 'Version 2, published December 2025',
      url: 'https://www.cambridgeinternational.org/Images/697163-2026-syllabus.pdf',
      readOn: '2026-09-19',
    },
    papers: [
      POETRY,
      {
        paper: 'Paper 1 Section B (Prose)',
        rubric: 'Candidates answer on ONE set text.',
        options: [
          {
            label: 'Prose',
            texts: [
              { slug: 'things-fall-apart', title: 'Things Fall Apart', author: 'Chinua Achebe' },
              { slug: 'pride-and-prejudice', title: 'Pride and Prejudice', author: 'Jane Austen' },
              { slug: null, title: 'Fire on the Mountain', author: 'Anita Desai' },
              { slug: null, title: 'Hullaballoo in the Guava Orchard', author: 'Kiran Desai' },
              { slug: null, title: "I'm the King of the Castle", author: 'Susan Hill' },
              {
                slug: 'to-kill-a-mockingbird',
                title: 'To Kill a Mockingbird',
                author: 'Harper Lee',
              },
              // Out for 2027.
              {
                slug: 'the-war-of-the-worlds',
                title: 'The War of the Worlds',
                author: 'H G Wells',
              },
            ],
          },
          { label: 'Stories of Ourselves Volume 2', texts: STORIES_OF_OURSELVES },
        ],
      },
      {
        paper: 'Papers 2 and 3 (Drama)',
        rubric:
          'Candidates take EITHER Paper 2 (Drama) OR Paper 3 (Drama, Open Text). Both papers use the same list.',
        options: [
          {
            label: 'Drama',
            texts: [
              { slug: null, title: 'Blues for an Alabama Sky', author: 'Pearl Cleage' },
              { slug: 'a-taste-of-honey', title: 'A Taste of Honey', author: 'Shelagh Delaney' },
              {
                slug: null,
                title: "A Midsummer Night's Dream",
                author: 'William Shakespeare',
              },
              {
                slug: 'antony-and-cleopatra',
                title: 'Antony and Cleopatra',
                author: 'William Shakespeare',
              },
              // Out for 2027. We hold a 719-line guide to it, and it is a 2026
              // text only.
              {
                slug: 'a-streetcar-named-desire',
                title: 'A Streetcar Named Desire',
                author: 'Tennessee Williams',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    examYear: 2027,
    source: {
      version: 'Version 2, published October 2024',
      url: 'https://www.cambridgeinternational.org/Images/721333-2027-syllabus.pdf',
      readOn: '2026-09-19',
    },
    papers: [
      POETRY,
      {
        paper: 'Paper 1 Section B (Prose)',
        rubric: 'Candidates answer on ONE set text.',
        options: [
          {
            label: 'Prose',
            texts: [
              { slug: 'things-fall-apart', title: 'Things Fall Apart', author: 'Chinua Achebe' },
              {
                slug: null,
                title: 'What it Means When a Man Falls from the Sky',
                author: 'Lesley Nneka Arimah',
              },
              { slug: 'pride-and-prejudice', title: 'Pride and Prejudice', author: 'Jane Austen' },
              { slug: null, title: 'Fire on the Mountain', author: 'Anita Desai' },
              // The syllabus spells it "Hullaballoo". Kept as printed.
              { slug: null, title: 'Hullaballoo in the Guava Orchard', author: 'Kiran Desai' },
              { slug: null, title: "I'm the King of the Castle", author: 'Susan Hill' },
              {
                slug: 'to-kill-a-mockingbird',
                title: 'To Kill a Mockingbird',
                author: 'Harper Lee',
              },
            ],
          },
          { label: 'Stories of Ourselves Volume 2', texts: STORIES_OF_OURSELVES },
        ],
      },
      {
        paper: 'Papers 2 and 3 (Drama)',
        rubric:
          'Candidates take EITHER Paper 2 (Drama) OR Paper 3 (Drama, Open Text). Both papers use the same list.',
        options: [
          {
            label: 'Drama',
            texts: [
              { slug: null, title: 'Blues for an Alabama Sky', author: 'Pearl Cleage' },
              { slug: 'a-taste-of-honey', title: 'A Taste of Honey', author: 'Shelagh Delaney' },
              // Added for 2027. Version 2's single content change.
              {
                slug: 'princess-and-the-hustler',
                title: 'Princess & the Hustler',
                author: 'Chinonyerem Odimba',
              },
              {
                slug: null,
                title: "A Midsummer Night's Dream",
                author: 'William Shakespeare',
              },
              {
                slug: 'antony-and-cleopatra',
                title: 'Antony and Cleopatra',
                author: 'William Shakespeare',
              },
            ],
          },
        ],
      },
    ],
  },
]

/** The lists for one examination year. Throws rather than guessing a year. */
export function cambridge0475(examYear: 2026 | 2027): Cambridge0475Year {
  const year = CAMBRIDGE_0475.find((y) => y.examYear === examYear)
  if (!year) throw new Error(`No Cambridge 0475 lists held for ${examYear}`)
  return year
}

/** Every text prescribed in `examYear`, flattened. */
export function cambridge0475Texts(examYear: 2026 | 2027): Cambridge0475Text[] {
  return cambridge0475(examYear).papers.flatMap((p) => p.options.flatMap((o) => o.texts))
}

/** The slugs we hold a row for, for `examYear`. */
export function cambridge0475Slugs(examYear: 2026 | 2027): string[] {
  return cambridge0475Texts(examYear)
    .map((t) => t.slug)
    .filter((s): s is string => s !== null)
}
