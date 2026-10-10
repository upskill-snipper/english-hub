/**
 * Guided text games: the shape of one text's path, as the server builds it
 * from that text's study guide and comic art, and as the browser plays it.
 *
 * WHAT THIS IS (10 October 2026). The founder asked for games to be a guided
 * part of revision, with quick feedback, pictures and scores. Each public-domain
 * set text with a study guide gets a path of short rounds at
 * /games/texts/<slug>: who's who, story order, where a quotation comes from,
 * finishing a quotation, naming a method and matching a theme.
 *
 * THE ONE RULE. Every question, every option and every explanation is the
 * guide's own data, never written here. A quotation is exactly a guide
 * quotation (a key quotation or a scene card's, as quotationsOf() in
 * src/lib/study-guides/validate.ts defines them), and an explanation is a
 * guide field quoted whole, or the opening sentence of a character's entry.
 * src/__tests__/text-games-are-built-from-the-guides.test.ts checks every item
 * of every path against its guide.
 *
 * Plain data only, so the page can hand it to the client runner: the comic art
 * travels as descriptors (src/lib/comics/descriptors.ts), never as drawings.
 */

import type { PanelDescriptor, PortraitDescriptor } from '@/lib/comics/types'

/** The rounds, in the order a path plays them. */
export const ROUND_KINDS = ['who', 'order', 'where', 'finish', 'method', 'theme'] as const
export type RoundKind = (typeof ROUND_KINDS)[number]

/** A moment from the guide's timeline, as a question or an answer shows it. */
export interface MomentRef {
  /** The moment's position in the guide's timeline, which is the text's order. */
  index: number
  title: string
  where: string
  /** One line from the guide: why the moment matters. */
  significance: string
  /** Its comic panel, by moment title, when one is drawn (see TextGame.art). */
  panel?: string
}

interface ItemBase {
  /** Stable within a text: the round and the guide entry the item was built from. */
  id: string
  /** Where in the text, as the guide gives it, when the guide gives it. */
  where?: string
}

interface ChoiceBase extends ItemBase {
  /** Every option, the answer among them. The runner shuffles their order. */
  options: string[]
  answer: string
  /** The guide's own words on the answer. */
  explanation: string
}

/** Who's who, from the cast list: the guide's description of a character. */
export interface WhoRoleItem extends ChoiceBase {
  kind: 'who'
  mode: 'role'
  role: string
  /** The answer's portrait, shown with the feedback. */
  portrait?: string
}

/** Who's who, from the character map: "What is X to Y?" */
export interface WhoRelationItem extends ChoiceBase {
  kind: 'who'
  mode: 'relation'
  from: string
  to: string
  /** Portraits of the two people asked about, by name, where drawn. */
  portraits: string[]
}

export interface WhereItem extends ChoiceBase {
  kind: 'where'
  quote: string
  /** The moment the quotation comes from, when it is a scene card's. */
  moment?: MomentRef
}

export interface FinishItem extends ChoiceBase {
  kind: 'finish'
  /** The whole quotation, exactly as the guide prints it. */
  quote: string
  /** The quotation either side of the missing word: before + answer + after === quote. */
  before: string
  after: string
  moment?: MomentRef
}

export interface MethodItem extends ChoiceBase {
  kind: 'method'
  example: string
}

export interface ThemeItem extends ChoiceBase {
  kind: 'theme'
  moment: MomentRef
  /** Every theme the guide gives this moment, the answer among them. */
  carries: string[]
}

/** Story order: moments to put in the order they come in the text. */
export interface OrderItem extends ItemBase {
  kind: 'order'
  /** In the text's order. The runner deals them out shuffled. */
  moments: MomentRef[]
}

export type ChoiceItem =
  | WhoRoleItem
  | WhoRelationItem
  | WhereItem
  | FinishItem
  | MethodItem
  | ThemeItem
export type GameItem = ChoiceItem | OrderItem

export interface Round {
  kind: RoundKind
  /**
   * Every item the guide supports for this round, up to a pool's worth. A play
   * of the round deals ROUND_SIZE of them (see arrange.ts), so a second play
   * can ask different questions without the page carrying the whole guide.
   */
  items: GameItem[]
}

/** The comic art a path shows, as served-plate descriptors. */
export interface GameArt {
  /** By the exact title of the moment the panel shows. */
  panels: Record<string, PanelDescriptor>
  /** By the character's name as the guide gives it. */
  portraits: Record<string, PortraitDescriptor>
}

export interface TextGame {
  slug: string
  title: string
  author: string
  /** Only the rounds the guide has the data for, in ROUND_KINDS order. */
  rounds: Round[]
  /** Only the pieces some item uses. */
  art: GameArt
}
