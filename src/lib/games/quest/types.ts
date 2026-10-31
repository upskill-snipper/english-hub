/**
 * Text quests: a set text's games as a journey through the story, chapter by
 * chapter, with stars, a comic to collect and spaced review.
 *
 * WHAT THIS IS (12 October 2026). The founder asked for the games to be "elite
 * level, the type people would pay an app for", and for the comics to become
 * interactive learning. The guided path of 10 October (src/lib/games/
 * text-games) asked six rounds of questions in a fixed order. A quest arranges
 * the same checked material, and more of it, as levels:
 *
 *   - the text's key moments split into chapters, each a short level mixing
 *     story order, quotations, themes and, where the text has comics, its
 *     panels;
 *   - a Cast level (who's who, and whose description a line from the text is)
 *     and a Craft level (methods);
 *   - a final level across the whole story, opened once every chapter has a
 *     star.
 *
 * Finishing a chapter inks its comic panels into the student's copy of the
 * comic. Missed questions come back in Review, on a spaced schedule.
 *
 * THE ONE RULE, UNCHANGED. Every question, option and explanation is the
 * guide's or the comic registry's own words, never written here: the
 * challenges below either carry an item the text-games builder made (and
 * proved has one right answer) or are built in ./build.ts from a panel's
 * verbatim quotation or a portrait's marker phrases, under the same rule.
 *
 * WHAT IT DELIBERATELY DOES NOT DO, for a site most of whose users are
 * children (src/lib/privacy/child-defaults.ts): no timer, no streak, no "come
 * back tomorrow", no leaderboard, no lives to lose. Progress stays in this
 * browser (./progress.ts); since 13 October 2026 a signed-in student's
 * answers are also saved to their account (src/lib/game-results).
 *
 * Plain data only: the page hands it to the client player.
 */

import type { PanelDescriptor, PortraitDescriptor } from '@/lib/comics/types'
import type { GameItem, MomentRef } from '@/lib/games/text-games/types'

/** A guided-path item, carried as it was built and checked. */
export interface ItemChallenge {
  type: 'item'
  id: string
  item: GameItem
}

/** "Which line belongs in this panel?" The panel's verbatim quotation is the answer. */
export interface PanelLineChallenge {
  type: 'panel-line'
  id: string
  moment: MomentRef
  /** Lines from other moments' panels, none from a moment that could be the same place. */
  options: string[]
  answer: string
}

/** "Which moment is this line from?" Answered by choosing a panel. */
export interface LinePanelChallenge {
  type: 'line-panel'
  id: string
  quote: string
  /** Moment titles, each with its panel; the answer among them. */
  options: string[]
  answer: string
  moment: MomentRef
}

/** Rebuild a quotation from its words, shuffled. */
export interface RebuildChallenge {
  type: 'rebuild'
  id: string
  /** Exactly as the guide or the panel prints it. */
  quote: string
  /** The quotation's words, in order; the player shuffles them. */
  words: string[]
  where: string
  moment?: MomentRef
  /** The guide's own words on the moment the quotation comes from. */
  explanation: string
}

/** "Whose description is this?" A portrait marker's phrase, answered with a portrait. */
export interface WhoseChallenge {
  type: 'whose'
  id: string
  phrase: string
  where: string
  /** Portrait names, the answer among them. */
  options: string[]
  answer: string
  /** The portrait's note, in the guide's voice, when it has one. */
  explanation?: string
}

/** "Which marker points to this?" On one portrait with three or more markers. */
export interface MarkerChallenge {
  type: 'marker'
  id: string
  portrait: string
  phrase: string
  /** Marker numbers start at 1, as the plate prints them. */
  answer: number
  where: string
  explanation?: string
}

/** A quick yes or no: "Is <theme> at work in this moment?" */
export interface ThemeCheckChallenge {
  type: 'theme-check'
  id: string
  moment: MomentRef
  theme: string
  answer: boolean
  /** Every theme the guide gives the moment, shown with the feedback. */
  carries: string[]
}

/**
 * "Which quotation is this reading about?" (24 October 2026). The point is the
 * guide's own analysis of one key quotation, with the words it quotes from
 * that line elided; the options are quotations the guided path already asks
 * about, the analysed one among them. It asks what no other challenge did:
 * matching a reading of the text, a method and its effect, to the line that
 * bears it out, which is the evidence an exam answer is built on.
 */
export interface EvidenceChallenge {
  type: 'evidence'
  id: string
  /** The guide's analysis of the answer, its quotations of the line elided. */
  point: string
  /** Quotations, the answer among them. */
  options: string[]
  answer: string
  /** Where the answer comes from, as the guide gives it. */
  where: string
  /** The guide's analysis, whole, shown with the feedback. */
  explanation: string
}

export type Challenge =
  | ItemChallenge
  | PanelLineChallenge
  | LinePanelChallenge
  | RebuildChallenge
  | WhoseChallenge
  | MarkerChallenge
  | ThemeCheckChallenge
  | EvidenceChallenge

export type LevelKind = 'chapter' | 'cast' | 'craft' | 'finale'

export interface Level {
  /** Stable: 'chapter-1', 'cast', 'craft', 'finale'. Progress is stored against it. */
  id: string
  kind: LevelKind
  /** 1-based for a chapter; absent otherwise. */
  chapter?: number
  /** The first and last moment the chapter covers, as the guide titles them. */
  span?: { from: string; to: string }
  /**
   * Where in the text the chapter runs, as the guide places its first and
   * last moments ("Act 1, Scene 1" to "Act 1, Scene 7"). The map shows this,
   * not the titles, since 24 October 2026: the titles were the first and last
   * cards of the chapter's own story order, on 329 of 332 parts, so the map
   * answered half of the question each part opens with.
   */
  where?: { from: string; to: string }
  /**
   * The ids of the challenges the level may ask (in Quest.challenges); a play
   * deals PLAY_SIZE of them (./deal.ts). The finale's pool is every other
   * level's, by id, so no challenge travels to the page twice.
   */
  pool: string[]
  /** The moments whose panels a first finish inks into the comic, in the text's order. */
  panels: string[]
}

/** Where each numbered marker sits on a portrait, in the drawing's own coordinates. */
export interface PortraitMarkers {
  width: number
  height: number
  at: [number, number][]
}

export interface QuestArt {
  /** By the exact title of the moment the panel shows. */
  panels: Record<string, PanelDescriptor>
  /** By the character's name as the guide gives it. */
  portraits: Record<string, PortraitDescriptor>
  /** For the portraits a marker challenge shows. */
  markers: Record<string, PortraitMarkers>
}

/**
 * SLIM: a moment carried inside a challenge has an empty `significance`; the
 * player reads the significance from Quest.moments[index], where it is held
 * once (./build.ts, slimMoment).
 */
export interface Quest {
  slug: string
  title: string
  author: string
  levels: Level[]
  /** Every challenge, once. */
  challenges: Challenge[]
  /** Every moment in the text's order, for the comic and the chapter spans. */
  moments: MomentRef[]
  art: QuestArt
  /** True when the text has comic panels to collect. */
  hasComic: boolean
  /** As TextGame.acknowledgement: printed for a text in copyright. */
  acknowledgement?: string
}
