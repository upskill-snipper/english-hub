/**
 * OCR's GCSE poetry anthology, Towards a World Unknown, as OCR sets it now.
 *
 * WHY THIS FILE EXISTS. Until 2 October 2026 the site's OCR poetry section
 * described an anthology OCR has never published. It promised "60 poems split
 * across 4 themed clusters of 15", and the fourth, Power and the Natural World,
 * does not exist. The real clusters were filled with the wrong poems: the Love
 * and Relationships list was mostly Pearson Edexcel's Relationships collection
 * and the Conflict list mostly Edexcel's Conflict collection. Of the 60 poems
 * listed across the four, five are in OCR's anthology today, and one of those
 * five, Boat Stealing, was filed under the cluster that does not exist. Three
 * more had been removed by OCR in 2022. Every one of the six study pages filed
 * under OCR was for a poem OCR does not set; one of them, When I have fears
 * that I may cease to be, was in the anthology until OCR replaced it. The hub
 * also cited an ISBN that appears in no OCR document we hold.
 *
 * THE STALE SOURCE IS THE HAZARD. OCR revised the anthology for first teaching
 * in September 2022, replacing five poems in each cluster, but the September
 * 2020 edition is still the PDF most searches find, and it is the one this
 * repository holds. The 2020 contents are right for 30 poems and wrong for 15.
 * So the lists below are built from OCR's own statement of what changed, not
 * from the 2020 contents alone, and every entry the revision added says so.
 *
 * SOURCES, all read on 2 October 2026:
 *   - Towards a World Unknown, updated edition September 2020, contents page
 *     (the 30 poems retained in 2022).
 *   - OCR blog, "Introducing our revised GCSE English Literature poetry
 *     anthology", Keeley Nolan, 21 June 2022: the five poems replaced and the
 *     five added in each cluster; first teaching September 2022, first
 *     assessment June 2024.
 *   - OCR teacher guides for the three clusters (J352/02 Poetry across time,
 *     2022), whose "Summary of the changes" tables give the same fifteen
 *     replacements.
 *   - Specification J352, Version 3.0, November 2025: "The content of Towards
 *     a World Unknown Anthology was updated for First Teach 2022 (Version 2)".
 *   - J352/02 question paper, 20 May 2025, which sets Warming Her Pearls,
 *     Lament and Equilibrium, the last a 2022 addition.
 *
 * WHAT THIS FILE IS NOT. It is not the text of the anthology and must never
 * become that: most of these poems are in copyright. Titles and poets are
 * facts about a syllabus. The order within each cluster is the 2020 contents
 * order with the 2022 additions after it; it is not a claim about where the
 * revised anthology prints them.
 */

export type OcrClusterSlug = 'love-and-relationships' | 'conflict' | 'youth-and-age'

export interface OcrPoem {
  /** The title as OCR prints it. */
  title: string
  poet: string
  /** Added when OCR revised the anthology for first teaching in September 2022. */
  added2022?: true
}

export interface OcrCluster {
  slug: OcrClusterSlug
  title: string
  /** Exactly fifteen. a-poem-board-claim-is-true.test.ts holds that. */
  poems: OcrPoem[]
  /** The five poems OCR took out of this cluster in 2022. They are not set. */
  removedIn2022: OcrPoem[]
}

export const OCR_ANTHOLOGY_SOURCE = {
  title: 'Towards a World Unknown',
  specification: 'OCR GCSE (9-1) English Literature J352, Version 3.0, November 2025',
  revision: 'Revised for first teaching in September 2022, first assessed in June 2024',
  readOn: '2026-10-02',
} as const

/**
 * How the poetry is examined: J352/02 Exploring poetry and Shakespeare,
 * Section A, Poetry across time. From the specification (Version 3.0, pages
 * 16 and 17) and the question paper of 20 May 2025.
 */
export const OCR_POETRY_EXAM = {
  paper: 'J352/02 Exploring poetry and Shakespeare',
  section: 'Section A: Poetry across time',
  /** Of the paper's 80; the section is 25% of the GCSE. */
  marks: 40,
  partA: {
    task: 'Compare a named poem from the anthology with an unseen poem; both are printed on the paper',
    marks: 20,
    suggestedMinutes: 45,
  },
  partB: {
    task: 'Explore in detail one other poem of your choice from the anthology',
    marks: 20,
    suggestedMinutes: 30,
  },
  /** AO3 (context) is assessed in Section B, Shakespeare, not in the poetry. */
  assessmentObjectives: ['AO1', 'AO2'],
  closedText: true,
} as const

export const OCR_CLUSTERS: OcrCluster[] = [
  {
    slug: 'love-and-relationships',
    title: 'Love and Relationships',
    poems: [
      { title: 'A Song', poet: 'Helen Maria Williams' },
      { title: 'Bright Star', poet: 'John Keats' },
      { title: 'Now', poet: 'Robert Browning' },
      { title: 'Love and Friendship', poet: 'Emily Brontë' },
      { title: 'Love After Love', poet: 'Derek Walcott' },
      { title: 'Morning Song', poet: 'Sylvia Plath' },
      { title: "I Wouldn't Thank You for a Valentine", poet: 'Liz Lochhead' },
      { title: 'In Paris With You', poet: 'James Fenton' },
      { title: 'Warming Her Pearls', poet: 'Carol Ann Duffy' },
      { title: 'Dusting the Phone', poet: 'Jackie Kay' },
      { title: 'Looking at Your Hands', poet: 'Martin Carter', added2022: true },
      { title: 'Poem for My Love', poet: 'June Jordan', added2022: true },
      { title: 'Flirtation', poet: 'Rita Dove', added2022: true },
      { title: 'The Perseverance', poet: 'Raymond Antrobus', added2022: true },
      { title: 'Lullaby', poet: 'Fatimah Asghar', added2022: true },
    ],
    removedIn2022: [
      { title: 'A Broken Appointment', poet: 'Thomas Hardy' },
      { title: 'Fin de Fête', poet: 'Charlotte Mew' },
      { title: 'The Sorrow of True Love', poet: 'Edward Thomas' },
      { title: 'An Arundel Tomb', poet: 'Philip Larkin' },
      { title: 'Long Distance II', poet: 'Tony Harrison' },
    ],
  },
  {
    slug: 'conflict',
    title: 'Conflict',
    poems: [
      { title: 'Envy', poet: 'Mary Lamb' },
      { title: 'Boat Stealing (from 1799 Prelude)', poet: 'William Wordsworth' },
      { title: 'The Destruction of Sennacherib', poet: 'Lord Byron' },
      { title: "There's a Certain Slant of Light", poet: 'Emily Dickinson' },
      { title: 'Vergissmeinnicht', poet: 'Keith Douglas' },
      { title: 'What Were They Like?', poet: 'Denise Levertov' },
      { title: 'Lament', poet: 'Gillian Clarke' },
      { title: 'Flag', poet: 'John Agard' },
      { title: 'Honour Killing', poet: 'Imtiaz Dharker' },
      { title: 'Partition', poet: 'Sujata Bhatt' },
      { title: 'Colonization in Reverse', poet: 'Louise Bennett', added2022: true },
      { title: 'Papa-T', poet: "Fred D'Aguiar", added2022: true },
      { title: 'We Lived Happily during the War', poet: 'Ilya Kaminsky', added2022: true },
      { title: 'Thirteen', poet: 'Caleb Femi', added2022: true },
      { title: 'Songs for the People', poet: 'Frances E. W. Harper', added2022: true },
    ],
    removedIn2022: [
      { title: 'A Poison Tree', poet: 'William Blake' },
      { title: 'The Man He Killed', poet: 'Thomas Hardy' },
      { title: 'Anthem for Doomed Youth', poet: 'Wilfred Owen' },
      { title: 'Punishment', poet: 'Seamus Heaney' },
      { title: 'Phrase Book', poet: 'Jo Shapcott' },
    ],
  },
  {
    slug: 'youth-and-age',
    title: 'Youth and Age',
    poems: [
      { title: 'Holy Thursday', poet: 'William Blake' },
      { title: 'The Bluebell', poet: 'Anne Brontë' },
      { title: 'Midnight on the Great Western', poet: 'Thomas Hardy' },
      { title: 'Out, Out-', poet: 'Robert Frost' },
      { title: 'Baby Song', poet: 'Thom Gunn' },
      { title: "You're", poet: 'Sylvia Plath' },
      { title: 'Cold Knap Lake', poet: 'Gillian Clarke' },
      { title: 'My First Weeks', poet: 'Sharon Olds' },
      { title: "Venus's-flytraps", poet: 'Yusef Komunyakaa' },
      { title: 'Love', poet: 'Kate Clanchy' },
      { title: 'Theme for English B', poet: 'Langston Hughes', added2022: true },
      { title: 'Happy Birthday Moon', poet: 'Raymond Antrobus', added2022: true },
      { title: 'Prayer', poet: 'Zaffar Kunial', added2022: true },
      { title: 'Tea With Our Grandmothers', poet: 'Warsan Shire', added2022: true },
      { title: 'Equilibrium', poet: 'Theresa Lola', added2022: true },
    ],
    removedIn2022: [
      { title: 'When I have fears that I may cease to be', poet: 'John Keats' },
      { title: 'Spring and Fall: to a Young Child', poet: 'Gerard Manley Hopkins' },
      { title: 'Ode', poet: "Arthur O'Shaughnessy" },
      { title: 'Red Roses', poet: 'Anne Sexton' },
      { title: 'Farther', poet: 'Owen Sheers' },
    ],
  },
]

/** Every poem OCR sets, all three clusters. */
export const OCR_SET_POEMS: OcrPoem[] = OCR_CLUSTERS.flatMap((c) => c.poems)

export function ocrCluster(slug: OcrClusterSlug): OcrCluster {
  const c = OCR_CLUSTERS.find((x) => x.slug === slug)
  if (!c) throw new Error(`No OCR cluster ${slug}`)
  return c
}
