/**
 * Every poem page on the site that is not a set text in its own right, and the
 * anthology clusters they belong to, for the text search.
 *
 * WHY THIS LIST EXISTS. SET_TEXTS holds the texts a specification prescribes
 * one by one. The poetry anthologies are prescribed as clusters, so Ozymandias,
 * Remains, Poppies and the other fifteen Power and Conflict poems, which are
 * among the most searched texts on the site, have pages but no set-text row. A
 * search built on SET_TEXTS alone would answer "ozymandias" with nothing.
 *
 * WHY IT IS WRITTEN OUT RATHER THAN SCANNED. A generator reading each page's
 * first `title:` was tried first and was wrong on nine pages: several open with
 * a related-poem link, so Exposure came out as Bayonet Charge and Still I Rise
 * as Half-Caste. The page files have no shared field to read reliably.
 *
 * SO A TEST STANDS BEHIND IT. text-search.test.ts fails if a poem directory
 * under any of the roots below is missing from this list, if an href has no
 * page, or if a title or poet here does not appear in that page's own source.
 * Adding a poem page and forgetting it here fails the suite rather than
 * leaving the poem unfindable.
 */

export interface PoemPage {
  title: string
  poet: string
  href: string
  /** The anthology or cluster, as a student would name it. */
  collection: string
}

export interface PoemCollection {
  title: string
  href: string
  /** The board and qualification, for the result's context line. */
  context: string
  /** Other names students use for it. */
  aliases?: readonly string[]
}

/** The route trees that hold one page per poem. The test walks these. */
export const POEM_ROOTS: Readonly<Record<string, string>> = {
  '/revision/poetry/power-and-conflict': 'AQA Power and Conflict',
  '/revision/poetry/love-and-relationships': 'AQA Love and Relationships',
  '/revision/poetry/eduqas': 'Eduqas Poetry Anthology',
  '/revision/poetry/edexcel/conflict': 'Edexcel GCSE Conflict',
  '/revision/poetry/edexcel/time-and-place': 'Edexcel GCSE Time and Place',
  '/igcse/edexcel/poetry': 'Edexcel IGCSE Poetry Anthology',
}

/** Directories under those roots that are not poems. */
export const NOT_POEMS: ReadonlySet<string> = new Set(['essay-plans', 'comparison-guide'])

function inRoot(root: string, poems: ReadonlyArray<[slug: string, title: string, poet: string]>) {
  return poems.map(
    ([slug, title, poet]): PoemPage => ({
      title,
      poet,
      href: `${root}/${slug}`,
      collection: POEM_ROOTS[root],
    }),
  )
}

export const POEM_PAGES: readonly PoemPage[] = [
  ...inRoot('/revision/poetry/power-and-conflict', [
    ['bayonet-charge', 'Bayonet Charge', 'Ted Hughes'],
    ['checking-out-me-history', 'Checking Out Me History', 'John Agard'],
    ['exposure', 'Exposure', 'Wilfred Owen'],
    ['kamikaze', 'Kamikaze', 'Beatrice Garland'],
    ['london', 'London', 'William Blake'],
    ['my-last-duchess', 'My Last Duchess', 'Robert Browning'],
    ['ozymandias', 'Ozymandias', 'Percy Bysshe Shelley'],
    ['poppies', 'Poppies', 'Jane Weir'],
    ['remains', 'Remains', 'Simon Armitage'],
    ['storm-on-the-island', 'Storm on the Island', 'Seamus Heaney'],
    ['the-charge-of-the-light-brigade', 'The Charge of the Light Brigade', 'Alfred Lord Tennyson'],
    ['the-emigree', 'The Émigrée', 'Carol Rumens'],
    ['the-prelude', 'Extract from The Prelude', 'William Wordsworth'],
    ['tissue', 'Tissue', 'Imtiaz Dharker'],
    ['war-photographer', 'War Photographer', 'Carol Ann Duffy'],
  ]),
  ...inRoot('/revision/poetry/love-and-relationships', [
    ['before-you-were-mine', 'Before You Were Mine', 'Carol Ann Duffy'],
    ['climbing-my-grandfather', 'Climbing My Grandfather', 'Andrew Waterhouse'],
    ['eden-rock', 'Eden Rock', 'Charles Causley'],
    ['follower', 'Follower', 'Seamus Heaney'],
    ['letters-from-yorkshire', 'Letters from Yorkshire', 'Maura Dooley'],
    ['loves-philosophy', "Love's Philosophy", 'Percy Bysshe Shelley'],
    ['mother-any-distance', 'Mother, any distance', 'Simon Armitage'],
    ['neutral-tones', 'Neutral Tones', 'Thomas Hardy'],
    ['porphyrias-lover', "Porphyria's Lover", 'Robert Browning'],
    ['singh-song', 'Singh Song!', 'Daljit Nagra'],
    ['sonnet-29', 'Sonnet 29', 'Elizabeth Barrett Browning'],
    ['the-farmers-bride', "The Farmer's Bride", 'Charlotte Mew'],
    ['walking-away', 'Walking Away', 'C. Day-Lewis'],
    ['when-we-two-parted', 'When We Two Parted', 'Lord Byron'],
    ['winter-swans', 'Winter Swans', 'Owen Sheers'],
  ]),
  ...inRoot('/revision/poetry/eduqas', [
    ['a-wife-in-london', 'A Wife in London', 'Thomas Hardy'],
    ['cousin-kate', 'Cousin Kate', 'Christina Rossetti'],
    ['drummer-hodge', 'Drummer Hodge', 'Thomas Hardy'],
    ['dulce-et-decorum-est', 'Dulce et Decorum Est', 'Wilfred Owen'],
    ['london', 'London', 'William Blake'],
    ['ozymandias', 'Ozymandias', 'Percy Bysshe Shelley'],
    ['sonnet-43', 'Sonnet 43', 'Elizabeth Barrett Browning'],
    ['the-prelude', 'The Prelude', 'William Wordsworth'],
    ['the-soldier', 'The Soldier', 'Rupert Brooke'],
    ['to-autumn', 'To Autumn', 'John Keats'],
  ]),
  ...inRoot('/revision/poetry/edexcel/conflict', [
    ['a-poison-tree', 'A Poison Tree', 'William Blake'],
    ['the-destruction-of-sennacherib', 'The Destruction of Sennacherib', 'Lord Byron'],
  ]),
  ...inRoot('/revision/poetry/edexcel/time-and-place', [
    ['composed-upon-westminster-bridge', 'Composed Upon Westminster Bridge', 'William Wordsworth'],
    ['i-started-early-took-my-dog', 'I started Early', 'Emily Dickinson'],
    ['london', 'London', 'William Blake'],
    ['to-autumn', 'To Autumn', 'John Keats'],
  ]),
  ...inRoot('/igcse/edexcel/poetry', [
    ['an-unknown-girl', 'An Unknown Girl', 'Moniza Alvi'],
    ['cousin-kate', 'Cousin Kate', 'Christina Rossetti'],
    ['disabled', 'Disabled', 'Wilfred Owen'],
    ['half-caste', 'Half-Caste', 'John Agard'],
    ['if', 'If-', 'Rudyard Kipling'],
    ['la-belle-dame-sans-merci', 'La Belle Dame sans Merci', 'John Keats'],
    ['out-out', 'Out, Out-', 'Robert Frost'],
    ['ozymandias', 'Ozymandias', 'Percy Bysshe Shelley'],
    ['piano', 'Piano', 'D.H. Lawrence'],
    ['remember', 'Remember', 'Christina Rossetti'],
    ['sonnet-116', 'Sonnet 116', 'William Shakespeare'],
    ['still-i-rise', 'Still I Rise', 'Maya Angelou'],
    ['the-bright-lights-of-sarajevo', 'The Bright Lights of Sarajevo', 'Tony Harrison'],
    ['the-man-he-killed', 'The Man He Killed', 'Thomas Hardy'],
    ['the-tyger', 'The Tyger', 'William Blake'],
    ['war-photographer', 'War Photographer', 'Carol Ann Duffy'],
  ]),
]

/** The cluster and anthology hubs, so "power and conflict" finds its hub. */
export const POEM_COLLECTIONS: readonly PoemCollection[] = [
  {
    title: 'Power and Conflict',
    href: '/revision/poetry/power-and-conflict',
    context: 'AQA GCSE poetry anthology',
    aliases: ['P&C'],
  },
  {
    title: 'Love and Relationships',
    href: '/revision/poetry/love-and-relationships',
    context: 'AQA GCSE poetry anthology',
  },
  {
    title: 'Worlds and Lives',
    href: '/revision/poetry/aqa-worlds-and-lives',
    context: 'AQA GCSE poetry anthology',
  },
  {
    title: 'Conflict',
    href: '/revision/poetry/edexcel/conflict',
    context: 'Edexcel GCSE poetry anthology',
  },
  {
    title: 'Time and Place',
    href: '/revision/poetry/edexcel/time-and-place',
    context: 'Edexcel GCSE poetry anthology',
  },
  {
    title: 'Eduqas Poetry Anthology',
    href: '/revision/poetry/eduqas',
    context: 'Eduqas GCSE poetry anthology',
  },
  {
    title: 'OCR Poetry Anthology',
    href: '/revision/poetry/ocr',
    context: 'OCR GCSE poetry clusters',
    aliases: ['Towards a World Unknown'],
  },
  {
    title: 'Edexcel IGCSE Poetry Anthology',
    href: '/igcse/edexcel/poetry',
    context: 'Edexcel IGCSE Literature (4ET1)',
  },
  {
    title: 'Edexcel IGCSE Language A Anthology',
    href: '/igcse/edexcel-lang/anthology',
    context: 'Edexcel IGCSE Language A (4EA1)',
  },
  {
    title: 'Unseen Poetry',
    href: '/revision/poetry/unseen-poetry',
    context: 'GCSE English Literature',
  },
]
