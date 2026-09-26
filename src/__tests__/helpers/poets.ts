/**
 * Which poets are in UK copyright, and how long their poems are.
 *
 * Shared by no-copyrighted-poem-printed-whole.test.ts, which measures a page's
 * PoemData lines, and no-poem-quoted-beyond-fair-dealing.test.ts, which
 * measures every quotation on every poetry page. Moved here from the first of
 * those on 26 September 2026 so the two guards cannot disagree about a poet.
 *
 * UK copyright lasts until the end of the 70th year after the poet's death, so
 * in 2026 a poet who died in 1956 or later is in copyright.
 *
 * FAIL-CLOSED. A guard that meets a poet missing from POETS fails; a poem is
 * never judged by its poet being unknown.
 */

/**
 * Year of death, or null for a poet who is living, or whose death this file
 * has not established. Both kinds of null are in copyright, which is the safe
 * side to be wrong on.
 */
export const POETS: Record<string, number | null> = {
  'Alfred Lord Tennyson': 1892,
  'Alice Walker': null,
  'Andrew Waterhouse': 2001,
  'Beatrice Garland': null,
  'Ben Jonson': 1637,
  'Benjamin Zephaniah': 2023,
  'C. Day-Lewis': 1972,
  'Caleb Femi': null,
  'Carmen Bernos de Gasztold': 1995,
  'Carol Ann Duffy': null,
  'Carol Rumens': null,
  'Carole Satyamurti': 2019,
  'Charles Causley': 2003,
  'Charlotte Mew': 1928,
  'Chinua Achebe': 2013,
  'Christina Rossetti': 1894,
  'Ciaran Carson': 2019,
  'Claude McKay': 1948,
  'D.H. Lawrence': 1930,
  'Daljit Nagra': null,
  'Denise Levertov': 1997,
  'Douglas Dunn': null,
  'Dylan Thomas': 1953,
  'Edward Thomas': 1917,
  'Elizabeth Barrett Browning': 1861,
  'Elizabeth Jennings': 2001,
  'Emily Brontë': 1848,
  'Emily Dickinson': 1886,
  'Eve L. Ewing': null,
  'Fleur Adcock': 2024,
  'George Eliot': 1880,
  'Gerard Manley Hopkins': 1889,
  'Gillian Clarke': null,
  'Grace Nichols': null,
  'Helen Dunmore': 2017,
  'Imtiaz Dharker': null,
  'James Berry': 2017,
  'James Shirley': 1666,
  'Jane Weir': null,
  'Jen Hadfield': null,
  'Joanna Baillie': 1851,
  'John Agard': null,
  'John Cooper Clarke': null,
  'John Davidson': 1909,
  'John Keats': 1821,
  'Liz Berry': null,
  'Lord Byron': 1824,
  'Louis MacNeice': 1963,
  'Louisa Adjoa Parker': null,
  'Margaret Walker': 1998,
  // "The Class Game" (OCR). Her dates are not established here.
  'Mary Casey': null,
  'Maura Dooley': null,
  'Maya Angelou': 2014,
  'Mervyn Morris': null,
  'Moniza Alvi': null,
  'Norman MacCaig': 1996,
  'Owen Sheers': null,
  'Percy Bysshe Shelley': 1822,
  'Raman Mundair': null,
  'Raymond Antrobus': null,
  'Robert Browning': 1889,
  'Robert Frost': 1963,
  'Roger Robinson': null,
  'Rudyard Kipling': 1936,
  'Rupert Brooke': 1915,
  'Seamus Heaney': 2013,
  'Seni Seneviratne': null,
  'Shamshad Khan': null,
  'Simon Armitage': null,
  'Sophie Hannah': null,
  'Sujata Bhatt': null,
  'Tatamkhulu Afrika': 2002,
  'Ted Hughes': 1998,
  'Thomas Hardy': 1928,
  'Thomas Hood': 1845,
  'Toby Campion': null,
  'Tony Harrison': null,
  'U.A. Fanthorpe': 2009,
  'Vernon Scannell': 2007,
  'W.B. Yeats': 1939,
  'W.H. Auden': 1973,
  'Wilfred Owen': 1918,
  'William Blake': 1827,
  'William Shakespeare': 1616,
  'William Wordsworth': 1850,
  'Zulfikar Ghose': 2022,
}

export const inCopyright = (poet: string) => {
  const died = POETS[poet]
  return died === null || died >= new Date().getFullYear() - 70
}

/**
 * Words in each copyrighted poem, title excluded, so a page's share of it can
 * be measured after the text is gone.
 *
 * The first fifteen were counted on 25 September 2026 from the full text these
 * pages then printed (git history holds it). The rest were counted from the
 * exam board's own copy of the poem, as the source beside each says, by the
 * study-guide validator's wordCount unless the source says otherwise. A poem
 * not listed is held to limitsFor's tightest case, 20 words.
 */
export const POEM_WORDS: Record<string, number> = {
  'Before You Were Mine': 375,
  'Checking Out Me History': 269,
  Kamikaze: 224,
  Remains: 201,
  'Bayonet Charge': 192,
  'War Photographer': 187,
  'Storm on the Island': 158,
  Follower: 153,
  'Letters from Yorkshire': 148,
  Poppies: 147,
  Tissue: 141,
  'Walking Away': 137,
  'Climbing My Grandfather': 135,
  'Winter Swans': 130,
  'Mother, any distance': 111,
  // Pearson Edexcel International GCSE English Anthology, Issue 8 (February
  // 2026), Pearson's PDF, counted for the study guides in src/data/study-guides
  // on 25 September 2026; each guide's workLength.basis gives page and method.
  'An Unknown Girl': 190,
  "'Out, Out-'": 301,
  'Still I Rise': 240,
  'The Bright Lights of Sarajevo': 351,
  Blessing: 100,
  'Search For My Tongue': 194,
  'Poem at Thirty-Nine': 168,
  'Half-past Two': 199,
  'Prayer Before Birth': 328,
  // Counted on 26 September 2026 from the boards' own PDFs, title, poet's name,
  // page numbers and margin line numbers excluded, by the validator's wordCount
  // (a hyphenated word is two). Pearson Edexcel GCSE (9-1) English Literature
  // Poetry Anthology, Issue 4, by printed page:
  'Half-caste': 234, // p. 29, 53 lines; the IGCSE Anthology Issue 8, pp. 67-68, gives 235
  'The Class Game': 214, // p. 37, 27 lines
  'What Were They Like?': 204, // p. 40, 32 lines
  'Presents from my Aunts in Pakistan': 308, // p. 51, 69 lines
  'Hurricane Hits England': 168, // p. 52, 36 lines
  Absence: 117, // p. 56, 15 lines
  'One Flesh': 147, // p. 16, 18 lines
  Nettles: 136, // p. 19, 16 lines
  // AQA Anthology of Poetry, Poems past and present (AQA's PDF), by printed
  // page. It has no margin numbers, so a numeral in the text is a word.
  'Eden Rock': 171, // p. 12, 20 lines
  'Singh Song!': 372, // pp. 17-18, 58 lines
  'The Émigrée': 231, // p. 37, 25 lines
}
