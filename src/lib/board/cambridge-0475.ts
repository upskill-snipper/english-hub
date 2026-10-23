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
 * WHAT CHANGED BETWEEN 2026 AND 2027. Poetry: nothing, all three options and
 * all 45 poems are identical. Prose: one swap - H G Wells's The War of the
 * Worlds is out for 2027 and Lesley Nneka Arimah's What it Means When a Man
 * Falls from the Sky is in. Drama: Chinonyerem Odimba's Princess & the Hustler
 * is in for 2027 and Tennessee Williams's A Streetcar Named Desire is out.
 *
 * That last one matters to us specifically: we hold a 719-line guide to
 * A Streetcar Named Desire, and it is a 2026 text, not a 2027 one.
 *
 * WHAT CHANGES FOR 2028, ADDED 23 OCTOBER 2026. Until then this file held 2026
 * and 2027 only, and exam-placement.ts read a single "current" year, so a text
 * leaving or arriving in 2028 was silently wrong on its page. The 2028-2030
 * syllabus (Version 2, published September 2026) restructures the
 * qualification as well as rotating the texts, pages 9 and 11-13:
 *   - Paper 1 Poetry and Prose becomes OPEN TEXT, still 1 hour 30 minutes and
 *     50 marks.
 *   - Papers 2, 3 and 4 are replaced by one Paper 2, Drama and Unseen (Open
 *     text), 2 hours and 50 marks: Section A one question on the set drama
 *     text, Section B one unseen question. Component 5 Coursework becomes
 *     Component 3. So the two-text Paper 2 rule below applies to 2026 and
 *     2027 only; from 2028 a candidate studies ONE drama text.
 *   - Poetry: Songs of Ourselves Volume 2 Part 3 is out; Songs of Ourselves
 *     Volume 3 (fifteen new poems) is in. Volume 1 and Kumukanda stay.
 *   - Prose: Things Fall Apart, Fire on the Mountain and To Kill a
 *     Mockingbird are out; When We Were Birds and Brooklyn are in. Stories of
 *     Ourselves Volume 3 replaces Volume 2.
 *   - Drama: A Taste of Honey, A Midsummer Night's Dream and Antony and
 *     Cleopatra are out; An Inspector Calls, The Tempest and The Importance of
 *     Being Earnest are in.
 * The 2029 and 2030 lists in the same document differ again and are NOT held
 * here. Add them from that document, year by year, when a cohort needs them.
 *
 * PAPER 2 AND PAPER 3 ARE NOT "ONE OF FIVE". Until 23 October 2026 the
 * placement card printed "One of 5 set texts in this option" for every drama
 * text, computed from the list length. The 2027 syllabus (page 13) says:
 * Paper 2, "Candidates must answer on two different set texts from the
 * following"; Paper 3, "Candidates must answer on one set text from the
 * following". The 2026 syllabus says the same on its page 13. So each paper
 * now carries a `selection` sentence in the syllabus's own terms, and nothing
 * downstream computes one from a count.
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
 *   cambridgeinternational.org/Images/697163-2026-syllabus.pdf
 *   Read 19 September 2026; the Paper 2 and Paper 3 rubric re-read 23 October
 *   2026 from both documents, page 13 of each.
 *   and syllabus for examination in 2028, 2029 and 2030, Version 2, published
 *   September 2026
 *   cambridgeinternational.org/Images/743282-2028-2030-syllabus.pdf
 *   Read 23 October 2026, pages 9 and 11-13.
 *
 * There is NO separate set-text booklet for 0475. The prescribed texts are
 * printed inside the syllabus PDF itself, already at poem and story level with
 * the anthology volume, the part number where given, and the item number for
 * stories. The syllabus is the single citation needed.
 */

/** The examination years this file holds lists for. Never read a list without one. */
export type Cambridge0475ExamYear = 2026 | 2027 | 2028

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
  /**
   * How many of the texts below a candidate studies, in the syllabus's own
   * terms. Printed verbatim on the placement card. Hand-written from the
   * document rather than computed from a list length, because Paper 2 and
   * Paper 3 share one list and ask for two texts and one respectively.
   */
  selection: string
  options: Cambridge0475Option[]
}

export interface Cambridge0475Year {
  /** The examination year these lists apply to. Never use a list without it. */
  examYear: Cambridge0475ExamYear
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

/**
 * In for 2028, replacing Volume 2 Part 3. The 2028-2030 syllabus, page 12,
 * titles and authors as printed there.
 */
const SONGS_VOLUME_3: Cambridge0475Text[] = [
  { slug: null, title: 'Insects', author: 'John Clare' },
  { slug: null, title: 'Oblivion', author: 'Ellis Ayitey Komey' },
  { slug: null, title: 'Fox', author: 'Alice Oswald' },
  { slug: null, title: 'Deep in the Hills', author: 'Ruth Dallas' },
  { slug: null, title: "My Aunts Don't Want to Move", author: 'Moniza Alvi' },
  { slug: null, title: 'Ruin', author: 'Jacob Polley' },
  { slug: null, title: 'from The Prelude', author: 'William Wordsworth' },
  { slug: null, title: 'Bouncing Boy', author: 'Helen Dunmore' },
  { slug: null, title: 'Lightness', author: 'Yvonne Gray' },
  { slug: null, title: 'Sonnet 106', author: 'William Shakespeare' },
  { slug: null, title: 'To the Ladies', author: 'Lady Mary Chudleigh' },
  { slug: null, title: 'Ode to a Pot Noodle', author: 'Romalyn Ante' },
  { slug: null, title: 'from My Heart and I', author: 'Elizabeth Barrett Browning' },
  { slug: null, title: 'The Widower in the Country', author: 'Les Murray' },
  { slug: null, title: 'Mistress of My Own Being', author: 'Ifi Amadiume' },
].map((t) => ({ ...t, from: 'Songs of Ourselves Volume 3' }))

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
  // 2027 syllabus, page 10: "Candidates answer on one set text in Section A
  // (Poetry)." The set text is the fifteen-poem selection, not a single poem.
  selection: 'You answer on one of these three poetry sets. Each set is all fifteen poems listed.',
  options: [
    { label: 'Songs of Ourselves Volume 1', texts: SONGS_VOLUME_1 },
    { label: 'Songs of Ourselves Volume 2, Part 3', texts: SONGS_VOLUME_2_PART_3 },
    { label: 'Kayo Chingonyi, from Kumukanda', texts: KUMUKANDA },
  ],
}

/** For 2028. Open text, and Volume 3 replaces Volume 2 Part 3 (pages 9, 11-12). */
const POETRY_2028: Cambridge0475Paper = {
  paper: 'Paper 1 Section A (Poetry, Open Text)',
  rubric:
    'Open text. Candidates answer ONE question from a choice of two on their set text; the poems are printed in the paper.',
  // 2028-2030 syllabus, page 11: "Candidates study one set text from Section A
  // (Poetry). Candidates study all 15 poems from the chosen text."
  selection: 'You study one of these three poetry sets, and all fifteen poems in it.',
  options: [
    { label: 'Songs of Ourselves Volume 1', texts: SONGS_VOLUME_1 },
    { label: 'Songs of Ourselves Volume 3', texts: SONGS_VOLUME_3 },
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

/**
 * For 2028, replacing Volume 2. The 2028-2030 syllabus, page 13, prints no
 * item numbers for these, so none are recorded.
 */
const STORIES_OF_OURSELVES_VOLUME_3: Cambridge0475Text[] = [
  { title: 'Tony Kytes, the Arch-Deceiver', author: 'Thomas Hardy' },
  { title: 'A Pair of Silk Stockings', author: 'Kate Chopin' },
  { title: 'Excursion', author: 'Herman Bosman' },
  { title: 'The Flying Machine', author: 'Ray Bradbury' },
  { title: 'The Cricket Match', author: 'Sam Selvon' },
  { title: "The Man Who Wouldn't Get Up", author: 'David Lodge' },
  { title: 'Sale', author: 'Anita Desai' },
  { title: 'Smoke', author: 'Ila Mehta' },
  { title: 'Fishing', author: 'Patricia Grace' },
  { title: 'Reflection', author: 'Silmy Abdullah' },
].map((t) => ({ ...t, slug: null, from: 'Stories of Ourselves Volume 3' }))

// 2027 syllabus, page 12: "Candidates answer on one set text in Section B
// (Prose)." The Stories of Ourselves selection counts as one set text.
const PROSE_SELECTION =
  'You answer on one set text: one of the novels, or the Stories of Ourselves selection.'

// 2027 syllabus, page 13 (and the 2026 syllabus, page 13, word for word):
// Paper 2, "Candidates must answer on two different set texts from the
// following"; Paper 3, "Candidates must answer on one set text from the
// following". Page 8 of each: Paper 2 is "Two questions on two texts", Paper 3
// "One question on one text".
const DRAMA_SELECTION =
  'Paper 2 (Drama): you answer two questions on two different set texts from this list, so you study two of the five. Paper 3 (Drama, Open Text): you answer one question on one set text from the same list.'

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
        selection: PROSE_SELECTION,
        options: [
          {
            label: 'Prose',
            texts: [
              { slug: 'things-fall-apart', title: 'Things Fall Apart', author: 'Chinua Achebe' },
              { slug: 'pride-and-prejudice', title: 'Pride and Prejudice', author: 'Jane Austen' },
              {
                slug: 'fire-on-the-mountain',
                title: 'Fire on the Mountain',
                author: 'Anita Desai',
              },
              {
                slug: 'hullaballoo-in-the-guava-orchard',
                title: 'Hullaballoo in the Guava Orchard',
                author: 'Kiran Desai',
              },
              {
                slug: 'im-the-king-of-the-castle',
                title: "I'm the King of the Castle",
                author: 'Susan Hill',
              },
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
        selection: DRAMA_SELECTION,
        options: [
          {
            label: 'Drama',
            texts: [
              {
                slug: 'blues-for-an-alabama-sky',
                title: 'Blues for an Alabama Sky',
                author: 'Pearl Cleage',
              },
              { slug: 'a-taste-of-honey', title: 'A Taste of Honey', author: 'Shelagh Delaney' },
              {
                slug: 'a-midsummer-nights-dream',
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
        selection: PROSE_SELECTION,
        options: [
          {
            label: 'Prose',
            texts: [
              { slug: 'things-fall-apart', title: 'Things Fall Apart', author: 'Chinua Achebe' },
              {
                slug: 'what-it-means-when-a-man-falls-from-the-sky',
                title: 'What it Means When a Man Falls from the Sky',
                author: 'Lesley Nneka Arimah',
              },
              { slug: 'pride-and-prejudice', title: 'Pride and Prejudice', author: 'Jane Austen' },
              {
                slug: 'fire-on-the-mountain',
                title: 'Fire on the Mountain',
                author: 'Anita Desai',
              },
              // The syllabus spells it "Hullaballoo". Kept as printed.
              {
                slug: 'hullaballoo-in-the-guava-orchard',
                title: 'Hullaballoo in the Guava Orchard',
                author: 'Kiran Desai',
              },
              {
                slug: 'im-the-king-of-the-castle',
                title: "I'm the King of the Castle",
                author: 'Susan Hill',
              },
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
        selection: DRAMA_SELECTION,
        options: [
          {
            label: 'Drama',
            texts: [
              {
                slug: 'blues-for-an-alabama-sky',
                title: 'Blues for an Alabama Sky',
                author: 'Pearl Cleage',
              },
              { slug: 'a-taste-of-honey', title: 'A Taste of Honey', author: 'Shelagh Delaney' },
              // Added for 2027. Version 2's single content change.
              {
                slug: 'princess-and-the-hustler',
                title: 'Princess & the Hustler',
                author: 'Chinonyerem Odimba',
              },
              {
                slug: 'a-midsummer-nights-dream',
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
  {
    // ADDED 23 October 2026 from the 2028-2030 syllabus, pages 9 and 11-13.
    // The 2029 and 2030 lists in the same document are different again and
    // are not held: see the docblock.
    examYear: 2028,
    source: {
      version: 'Version 2, published September 2026 (syllabus for 2028, 2029 and 2030)',
      url: 'https://www.cambridgeinternational.org/Images/743282-2028-2030-syllabus.pdf',
      readOn: '2026-10-23',
    },
    papers: [
      POETRY_2028,
      {
        paper: 'Paper 1 Section B (Prose, Open Text)',
        rubric:
          'Open text. Candidates answer ONE question from a choice of two essay questions on their set text.',
        // Page 13: "Candidates study one set text from Section B (Prose).
        // Candidates study the whole text."
        selection:
          'You study one set text: one of the six novels, or the Stories of Ourselves Volume 3 selection.',
        options: [
          {
            label: 'Prose',
            texts: [
              // Printed "What It Means" here; the 2027 syllabus printed "What
              // it Means". Each is kept as its own document prints it.
              {
                slug: 'what-it-means-when-a-man-falls-from-the-sky',
                title: 'What It Means When a Man Falls from the Sky',
                author: 'Lesley Nneka Arimah',
              },
              { slug: 'pride-and-prejudice', title: 'Pride and Prejudice', author: 'Jane Austen' },
              { slug: null, title: 'When We Were Birds', author: 'Ayanna Lloyd Banwo' },
              // The 2028-2030 syllabus spells it "Hullabaloo", where the 2026
              // and 2027 syllabuses printed "Hullaballoo". Same novel, same
              // row; the title follows the document it was read from.
              {
                slug: 'hullaballoo-in-the-guava-orchard',
                title: 'Hullabaloo in the Guava Orchard',
                author: 'Kiran Desai',
              },
              {
                slug: 'im-the-king-of-the-castle',
                title: "I'm the King of the Castle",
                author: 'Susan Hill',
              },
              { slug: null, title: 'Brooklyn', author: 'Colm Tóibín' },
            ],
          },
          { label: 'Stories of Ourselves Volume 3', texts: STORIES_OF_OURSELVES_VOLUME_3 },
        ],
      },
      {
        paper: 'Paper 2 Section A (Drama, Open Text)',
        // Page 9: Paper 2 is "Drama and Unseen (Open text)", 2 hours, 50
        // marks; Section A one question from a choice of two on the set text,
        // Section B one unseen question. Paper 3 no longer exists.
        rubric:
          'Open text. Paper 2 (Drama and Unseen) replaces Papers 2 and 3 from 2028. Candidates answer ONE question from a choice of two on their set text in Section A, and one unseen question in Section B.',
        // Page 13: "Candidates study one set text for Paper 2 ... Candidates
        // study one set text in Section A (Drama). Candidates study the whole
        // text."
        selection: 'You study one of these five plays.',
        options: [
          {
            label: 'Drama',
            texts: [
              {
                slug: 'blues-for-an-alabama-sky',
                title: 'Blues for an Alabama Sky',
                author: 'Pearl Cleage',
              },
              {
                slug: 'princess-and-the-hustler',
                title: 'Princess & The Hustler',
                author: 'Chinonyerem Odimba',
              },
              // Held rows, tagged to other boards. In for 2028 only here.
              { slug: 'an-inspector-calls', title: 'An Inspector Calls', author: 'J B Priestley' },
              { slug: 'the-tempest', title: 'The Tempest', author: 'William Shakespeare' },
              { slug: null, title: 'The Importance of Being Earnest', author: 'Oscar Wilde' },
            ],
          },
        ],
      },
    ],
  },
]

/** The lists for one examination year. Throws rather than guessing a year. */
export function cambridge0475(examYear: Cambridge0475ExamYear): Cambridge0475Year {
  const year = CAMBRIDGE_0475.find((y) => y.examYear === examYear)
  if (!year) throw new Error(`No Cambridge 0475 lists held for ${examYear}`)
  return year
}

/** Every text prescribed in `examYear`, flattened. */
export function cambridge0475Texts(examYear: Cambridge0475ExamYear): Cambridge0475Text[] {
  return cambridge0475(examYear).papers.flatMap((p) => p.options.flatMap((o) => o.texts))
}

/** The slugs we hold a row for, for `examYear`. */
export function cambridge0475Slugs(examYear: Cambridge0475ExamYear): string[] {
  return cambridge0475Texts(examYear)
    .map((t) => t.slug)
    .filter((s): s is string => s !== null)
}
