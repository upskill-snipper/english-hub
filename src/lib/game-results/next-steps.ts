/**
 * Rule-based next steps from a student's game analytics: for each thing the
 * evidence says needs work, what to play or read next, and why.
 *
 * WHO SEES THEM. Next steps are personalised suggestions, so they follow the
 * account's `personalised_recommendations` setting, which the site's
 * Children's Code defaults switch off for under-18s
 * (src/lib/privacy/child-defaults.ts). The founder decided on 13 October 2026
 * that the AI coach and these suggestions follow that setting: a student sees
 * their own results and analysis at once, and suggestions once they switch
 * them on. The caller checks; this file only builds them.
 *
 * EVERY LINK IS THE SITE'S OWN and comes from a fixed list here, never from a
 * model or a guess: a game page, a quest page, or a lesson the game taxonomy
 * already names. The AI coach is given the same list and may only point at an
 * entry in it (./coach.ts).
 *
 * No step mentions a grade.
 */

import { getGameTaxon } from '@/lib/learning-profile/taxonomy'
import { TEXT_GAMES_INDEX, textGamesHref } from '@/lib/revision/text-games-href'
import type { GameAnalytics, SkillStat } from './analytics'
import type { SkillGroup } from './skills'

export interface NextStep {
  /** Unique within a list. */
  key: string
  /** An i18n key, filled with `params`. */
  messageKey: string
  params: Record<string, string | number>
  href: string
  /** An i18n key for the link's label. */
  linkKey: string
  /** A second link: the lesson that teaches the skill, where one is named. */
  learnHref?: string
}

/** A game to suggest for a skill group when the weakness is not tied to one game or text. */
const GAME_FOR_GROUP: Record<SkillGroup, string | null> = {
  plot: null, // the set-text quests
  characters: null,
  quotations: 'quote-detective',
  themes: 'theme-matcher',
  methods: 'speed-analysis',
  interpretation: 'grade-climber',
  context: null,
  reading: 'comprehension-challenge',
  vocabulary: 'vocabulary-builder',
  grammar: 'common-error-fixer',
  punctuation: 'punctuation-repair',
  spelling: 'spelling-patterns',
  writing: 'sentence-builder',
}

/** Which quest level holds a kind of question, so a step can say where to start. */
function levelForKind(kind: string | undefined): 'craft' | 'cast' | 'chapters' {
  if (kind === 'method' || kind === 'extract-note') return 'craft'
  if (kind === 'who-role' || kind === 'who-relation' || kind === 'portrait') return 'cast'
  return 'chapters'
}

function stepFor(w: SkillStat): NextStep {
  const right = `${Math.round((w.recentAccuracy * w.recentAnswered) / 100)}`
  const of = `${w.recentAnswered}`
  if (w.source === 'quest' && w.activity) {
    return {
      key: w.key,
      messageKey: `ga.next.quest.${levelForKind(w.kind)}`,
      params: { text: w.activity, kind: w.kind ?? '', right, of },
      // A text since left out of the games falls back to the index.
      href: textGamesHref(w.activity) ?? TEXT_GAMES_INDEX,
      linkKey: 'ga.next.link.quest',
    }
  }
  if (w.source === 'skills' && w.activity) {
    const taxon = getGameTaxon(w.activity)
    return {
      key: w.key,
      messageKey: 'ga.next.game',
      params: { game: w.activity, kind: w.kind ?? '', right, of },
      href: `/games/${w.activity}`,
      linkKey: 'ga.next.link.game',
      learnHref: taxon.learnHref,
    }
  }
  // A whole skill group.
  const game = GAME_FOR_GROUP[w.group]
  if (game) {
    const taxon = getGameTaxon(game)
    return {
      key: w.key,
      messageKey: 'ga.next.group',
      params: { group: w.group, game, right, of },
      href: `/games/${game}`,
      linkKey: 'ga.next.link.game',
      learnHref: taxon.learnHref,
    }
  }
  return {
    key: w.key,
    messageKey: 'ga.next.group_quests',
    params: { group: w.group, right, of },
    href: TEXT_GAMES_INDEX,
    linkKey: 'ga.next.link.quests',
  }
}

/** Up to three next steps, one per thing to work on, most specific first. */
export function nextSteps(a: GameAnalytics): NextStep[] {
  return a.workOn.slice(0, 3).map(stepFor)
}

/**
 * Every link a next step, or the AI coach, may point a student to: the game
 * pages, the quest pages and the lessons the taxonomy names. Built from the
 * site's own lists, so a link outside it is refused, not followed.
 */
export function allowedLinks(a: GameAnalytics): string[] {
  const out = new Set<string>(['/games', TEXT_GAMES_INDEX])
  for (const act of a.activities) {
    if (act.source === 'quest') {
      const href = textGamesHref(act.activity)
      if (href) out.add(href)
      continue
    }
    out.add(`/games/${act.activity}`)
    if (act.source === 'skills') {
      const learn = getGameTaxon(act.activity).learnHref
      if (learn) out.add(learn)
    }
  }
  for (const g of Object.values(GAME_FOR_GROUP)) {
    if (!g) continue
    out.add(`/games/${g}`)
    const learn = getGameTaxon(g).learnHref
    if (learn) out.add(learn)
  }
  return [...out]
}
