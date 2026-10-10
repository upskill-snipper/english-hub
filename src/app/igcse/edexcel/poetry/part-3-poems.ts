/**
 * The poems the International GCSE Literature poetry hub lists for Paper 1
 * Section B: Part 3 of the anthology, in the anthology's order, taken from the
 * register read off Issue 8 (src/lib/board/edexcel-igcse-anthology.ts), with
 * what this page adds to each.
 *
 * WHY THE REGISTER (10 October 2026). Until then the hub kept its own list of
 * thirteen poems, said to be "verified against TEXT_MASTER_LIST.csv" in April
 * 2026. Six of them were never Section B poems: Ozymandias is not in the
 * anthology at all, and Disabled, Out, Out-, An Unknown Girl, The Bright Lights
 * of Sarajevo and Still I Rise are Part 2, set for English Language A. Nine of
 * the sixteen Part 3 poems were missing. A 4ET1 student revising from the list
 * would have learned five poems Section B never sets and missed nine it can.
 * So the titles, poets and order now come from the register, and this file
 * holds only the summary, themes, date and link the page shows.
 * src/__tests__/the-igcse-poetry-hub-lists-part-3.test.ts holds the two
 * together.
 *
 * Summaries describe each poem in the page's own words and quote none of it.
 * Each was checked against the poem's study guide or revision page, which were
 * themselves checked against Issue 8 on 26 September and 10 October 2026.
 */

import { ANTHOLOGY } from '@/lib/board/edexcel-igcse-anthology'
import { textGuideHref } from '@/lib/revision/guide-href'

export type AnthologyPoem = {
  number: number
  slug: string
  title: string
  poet: string
  year?: string
  href: string
  themes: string[]
  publicDomain: boolean
  summary: string
}

type PoemNotes = Omit<AnthologyPoem, 'number' | 'slug' | 'title' | 'poet'>

/** Where a poem with no International GCSE page of its own is studied. */
const guide = (slug: string) => textGuideHref(slug, 'edexcel-igcse')

export const PART_3_NOTES: Record<string, PoemNotes> = {
  if: {
    year: '1910',
    href: '/igcse/edexcel/poetry/if',
    themes: ['Stoicism', 'Identity', 'Growing up'],
    publicDomain: true,
    summary:
      'A father addresses his son, listing the qualities required to live a balanced, honourable life and become a person of integrity.',
  },
  'prayer-before-birth': {
    year: '1944',
    href: guide('prayer-before-birth'),
    themes: ['Innocence', 'The violence of the adult world', 'Individuality'],
    publicDomain: false,
    summary:
      'A child not yet born asks an unnamed listener to shield it from the cruelty of the adult world.',
  },
  blessing: {
    href: guide('blessing'),
    themes: ['Water as a gift', 'Poverty', 'Community'],
    publicDomain: false,
    summary:
      'Where water is always scarce, a burst municipal pipe brings a whole community running to catch it.',
  },
  'search-for-my-tongue': {
    year: '1988',
    href: guide('search-for-my-tongue'),
    themes: ['Language and identity', 'Loss', 'Renewal'],
    publicDomain: false,
    summary:
      'The speaker imagines losing her mother tongue while living in a foreign one, then finds it growing back in her dreams.',
  },
  'half-past-two': {
    year: '1992',
    href: guide('half-past-two'),
    themes: ['Childhood and adult power', 'Two kinds of time', 'Escape'],
    publicDomain: false,
    summary:
      'Kept in as a punishment, a small boy who cannot tell the time drifts out of clock time until his teacher returns.',
  },
  piano: {
    year: '1918',
    href: '/igcse/edexcel/poetry/piano',
    themes: ['Memory and music', 'Childhood', 'Past and present'],
    publicDomain: true,
    summary:
      'A woman singing at dusk carries the adult speaker back to sitting under the piano as his mother played, and he weeps for the past.',
  },
  'hide-and-seek': {
    href: guide('hide-and-seek'),
    themes: ['Childhood', 'Isolation', 'Abandonment'],
    publicDomain: false,
    summary:
      'A child hides so well in a garden toolshed that the game turns into a lesson in being forgotten.',
  },
  'sonnet-116': {
    year: '1609',
    href: '/igcse/edexcel/poetry/sonnet-116',
    themes: ['Love', 'Constancy', 'Time'],
    publicDomain: true,
    summary:
      'A meditation on true love as a fixed and enduring force that cannot be altered by time, circumstance or trouble.',
  },
  'la-belle-dame-sans-merci': {
    year: '1819',
    href: '/igcse/edexcel/poetry/la-belle-dame-sans-merci',
    themes: ['Obsession', 'Deception', 'Death'],
    publicDomain: true,
    // Until 2 October 2026 this said the anthology prints the 1820 Indicator
    // version, the error the poem's own page corrected on 26 September. The
    // anthology prints the earlier knight-at-arms text (read from the Pearson
    // PDF, see src/data/study-guides/la-belle-dame-sans-merci.ts); the Indicator
    // revision opens with a "wretched wight", and a student quoting it would
    // misquote the anthology's text. The card cuts a summary at three lines, so
    // that note now sits in the page's anthology-version notice.
    summary:
      'A pale, wandering knight tells how a mysterious fairy woman enchanted him and left him alone on a cold hillside.',
  },
  'poem-at-thirty-nine': {
    year: '1984',
    href: guide('poem-at-thirty-nine'),
    themes: ['Grief', 'What a parent passes on', 'Independence'],
    publicDomain: false,
    summary:
      'Writing at thirty-nine, after her father’s death, the speaker remembers what he taught her and how much of him lives on in her.',
  },
  'war-photographer': {
    year: '1985',
    href: '/igcse/edexcel/poetry/war-photographer',
    themes: ['War', 'Suffering', 'Moral responsibility'],
    publicDomain: false,
    summary:
      "A war photographer develops pictures at home in England, caught between the horrors abroad and readers' short-lived sympathy.",
  },
  'the-tyger': {
    year: '1794',
    href: '/igcse/edexcel/poetry/the-tyger',
    themes: ['Creation', 'Evil', 'Awe'],
    publicDomain: true,
    summary:
      'The speaker asks what kind of creator could have made the terrifying, beautiful tiger - and the lamb too.',
  },
  'my-last-duchess': {
    year: '1842',
    href: guide('my-last-duchess'),
    themes: ['Power and control', 'Jealousy', 'Art'],
    publicDomain: true,
    summary:
      'The Duke of Ferrara shows an envoy the portrait of his late wife and, as he talks, reveals the jealousy and need for control behind her death.',
  },
  'half-caste': {
    year: '1996',
    href: '/igcse/edexcel/poetry/half-caste',
    themes: ['Identity', 'Race', 'Language and prejudice'],
    publicDomain: false,
    // The anthology's spelling 'yu' is in the page's anthology-version notice:
    // the card cuts a summary at three lines.
    summary:
      'The speaker challenges the term ‘half-caste’ by mocking its illogic, drawing on art, music and weather to expose its absurdity.',
  },
  'do-not-go-gentle-into-that-good-night': {
    href: guide('do-not-go-gentle-into-that-good-night'),
    themes: ['Death', 'Defiance', 'Fathers and sons'],
    publicDomain: true,
    summary: 'A son begs his dying father to fight against death rather than go quietly.',
  },
  remember: {
    year: '1862',
    href: '/igcse/edexcel/poetry/remember',
    themes: ['Death', 'Memory', 'Love'],
    publicDomain: true,
    summary:
      'A speaker asks her beloved to remember her after death - then, selflessly, prefers he forget and be happy.',
  },
}

/**
 * Part 3, in the anthology's order, as the page lists it. A Part 3 poem with no
 * notes here is an error, not a gap to skip: thrown, it fails the build and the
 * test rather than leaving a poem off the list a student revises from.
 */
export function part3Poems(): AnthologyPoem[] {
  const part3 = ANTHOLOGY.find((p) => p.part === 3)
  if (!part3) throw new Error('the anthology register has no Part 3')
  return part3.entries.map((entry, i) => {
    const notes = PART_3_NOTES[entry.slug]
    if (!notes) throw new Error(`Part 3 poem ${entry.slug} has no notes on the poetry hub`)
    return { number: i + 1, slug: entry.slug, title: entry.title, poet: entry.author, ...notes }
  })
}
