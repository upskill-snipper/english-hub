/**
 * The two WJEC Eduqas GCSE English Literature poetry anthologies, and which
 * one a student sits.
 *
 * WHY THIS FILE EXISTS. Eduqas replaced its whole poetry anthology between the
 * summer 2026 and summer 2027 series, with no poem in common. Until 2 October
 * 2026 the site described the new one as a "12-poem 2025 cluster": it has
 * fifteen poems, it is not a cluster, and it is for first assessment in 2027.
 * Three of its poems (War Photographer, Dusting the Phone and Remains) were
 * missing from the hub altogether. The eight study pages written for the old
 * anthology carried a notice calling it "pre-2025", though it was examined for
 * the last time in summer 2026, and one of them, The Prelude, prints a passage
 * the Eduqas anthology never printed (the boat-stealing episode, where Eduqas
 * printed the skating one).
 *
 * prescribed-texts.ts deliberately records no Eduqas poems, because a flat
 * list cannot say which series it is for. This file can: each anthology says
 * which series it serves, and nothing here is a cluster.
 *
 * SOURCES, read on 2 October 2026:
 *   - WJEC Eduqas GCSE (9-1) English Literature Poetry Anthology (C720), "for
 *     first assessment in 2027", WJEC 2024, ISBN 978-1-86085-774-4.
 *   - WJEC Eduqas GCSE Poetry Anthology, WJEC CBAC Ltd 2014, whose every page
 *     says "This version of the anthology will be examined for the final time
 *     in summer 2026."
 *   - Eduqas GCSE English Literature specification, Version 4, August 2024,
 *     Component 1 Section B.
 *
 * Titles and poets are facts about a syllabus; the poems are not reproduced
 * here, and most of the new anthology is in copyright.
 */

export interface EduqasPoem {
  title: string
  poet: string
  /** Page in the anthology, for a teacher checking against the booklet. */
  page?: number
}

/** The anthology every Eduqas student now sits: first assessed in summer 2027. */
export const EDUQAS_ANTHOLOGY_2027 = {
  title: 'WJEC Eduqas GCSE (9-1) English Literature Poetry Anthology (C720)',
  firstAssessed: 'summer 2027',
  isbn: '978-1-86085-774-4',
  poems: [
    { title: 'The Schoolboy', poet: 'William Blake', page: 4 },
    { title: 'I Wandered Lonely as a Cloud', poet: 'William Wordsworth', page: 5 },
    { title: 'Cousin Kate', poet: 'Christina Rossetti', page: 6 },
    { title: 'Sonnet 29', poet: 'Elizabeth Barrett Browning', page: 8 },
    { title: 'Drummer Hodge', poet: 'Thomas Hardy', page: 9 },
    { title: 'Disabled', poet: 'Wilfred Owen', page: 10 },
    { title: 'I Shall Return', poet: 'Claude McKay', page: 12 },
    { title: 'Decomposition', poet: 'Zulfikar Ghose', page: 13 },
    { title: 'Catrin', poet: 'Gillian Clarke', page: 14 },
    { title: 'Blackberry Picking', poet: 'Seamus Heaney', page: 15 },
    { title: 'Kamikaze', poet: 'Beatrice Garland', page: 16 },
    { title: 'War Photographer', poet: 'Carol Ann Duffy', page: 18 },
    { title: 'Dusting the Phone', poet: 'Jackie Kay', page: 19 },
    { title: 'Remains', poet: 'Simon Armitage', page: 20 },
    { title: 'Origin Story', poet: 'Eve L. Ewing', page: 21 },
  ] as EduqasPoem[],
} as const

/** The anthology it replaced: examined for the final time in summer 2026. */
export const EDUQAS_ANTHOLOGY_2014 = {
  title: 'WJEC Eduqas GCSE Poetry Anthology',
  lastAssessed: 'summer 2026',
  poems: [
    { title: 'The Manhunt', poet: 'Simon Armitage' },
    { title: 'Sonnet 43', poet: 'Elizabeth Barrett Browning' },
    { title: 'London', poet: 'William Blake' },
    { title: 'The Soldier', poet: 'Rupert Brooke' },
    { title: 'She Walks in Beauty', poet: 'Lord Byron' },
    { title: 'Living Space', poet: 'Imtiaz Dharker' },
    { title: 'As Imperceptibly as Grief', poet: 'Emily Dickinson' },
    { title: 'Cozy Apologia', poet: 'Rita Dove' },
    { title: 'Valentine', poet: 'Carol Ann Duffy' },
    { title: 'A Wife in London', poet: 'Thomas Hardy' },
    { title: 'Death of a Naturalist', poet: 'Seamus Heaney' },
    { title: 'Hawk Roosting', poet: 'Ted Hughes' },
    { title: 'To Autumn', poet: 'John Keats' },
    { title: 'Afternoons', poet: 'Philip Larkin' },
    { title: 'Dulce et Decorum Est', poet: 'Wilfred Owen' },
    { title: 'Ozymandias', poet: 'Percy Bysshe Shelley' },
    { title: 'Mametz Wood', poet: 'Owen Sheers' },
    { title: 'Excerpt from The Prelude', poet: 'William Wordsworth' },
  ] as EduqasPoem[],
} as const

/**
 * How the poetry is examined: Component 1, Section B, 40 marks, 20% of the
 * qualification. One question on a specified poem, then one on a second poem
 * from the anthology, compared with the first. Learners must study every poem
 * and may not take the anthology into the examination.
 */
export const EDUQAS_POETRY_EXAM = {
  component: 'Component 1, Section B: Poetry from 1789 to the present day',
  marks: 40,
  closedText: true,
} as const
