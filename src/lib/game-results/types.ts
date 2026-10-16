/**
 * Game results saved to a signed-in student's account: the shapes shared by
 * the browser that sends a round and the server that stores and reads it.
 *
 * WHY THIS EXISTS (13 October 2026). The founder asked for every game to be
 * "tracked and scored as detailed analytics" in the student's hub and for
 * schools, with AI feedback on strengths, weaknesses and next steps. Until
 * then no game result had ever reached the server: GameShell posted
 * {slug, score, time} to /api/progress/games, which wrote the Supabase uuid
 * into a table whose rule admits only the Prisma cuid, so every write since May
 * was refused and the browser ignored the refusal. Even a working save would
 * have learned nothing about which questions were missed.
 *
 * A ROUND is one finished play: a skills game's round, or one level or review
 * of a set-text quest. It carries, per question, a short id, the kind of skill
 * the question tests, whether it was right first time and, for a wrong choice
 * from a fixed list of short labels, the label chosen. NEVER anything a
 * student typed: Spelling Bee's typed words, for one, are not sent.
 *
 * Signed-in students only. A guest's games stay in the browser and nothing is
 * sent (src/components/games/game-round.tsx checks before sending).
 *
 * Client-safe: no server imports here.
 */

export type RoundSource = 'skills' | 'quest'

/** One answered question in a round, as sent and as stored. Short keys keep rows small. */
export interface RoundItem {
  /** The question's id: itemId() of its own id or prompt. */
  i: string
  /** The kind of skill it tests: a quest challenge kind, or a skills game's tag. */
  k: string
  /** 1 if right first time, else 0. */
  c: 0 | 1
  /** For a wrong choice from a fixed list of short labels: the label chosen. Never typed text. */
  w?: string
}

/** What the browser sends to POST /api/games/rounds. */
export interface RoundPayload {
  /** The browser's own id for the round, so a round sent twice is stored once. */
  clientRoundId: string
  source: RoundSource
  /** A skills game's slug, or a quest's text slug. */
  activity: string
  /** A quest level id ('chapter-2', 'cast', 'craft', 'finale') or 'review'. Absent for skills games. */
  level?: string
  /** The game's own score and maximum, as its results screen shows them. */
  score?: number
  maxScore?: number
  durationSeconds?: number
  items: RoundItem[]
}

/** A round as the server reads it back. */
export interface StoredRound {
  source: RoundSource
  activity: string
  level: string | null
  answered: number
  correct: number
  score: number | null
  maxScore: number | null
  durationSeconds: number | null
  items: RoundItem[]
  /** ISO timestamp, set by the server. */
  finishedAt: string
}

/** The most questions one round may carry. Grade Climber is open-ended; it sends its last 200. */
export const MAX_ITEMS_PER_ROUND = 200

export const ITEM_ID_RE = /^[a-z0-9]{1,16}$/
export const ITEM_KIND_RE = /^[a-z0-9][a-z0-9-]{0,39}$/
export const ACTIVITY_RE = /^[a-z0-9][a-z0-9-]{0,79}$/
export const LEVEL_RE = /^[A-Za-z0-9_.:-]{1,80}$/
export const CLIENT_ROUND_ID_RE = /^[A-Za-z0-9-]{8,64}$/
/**
 * A chosen label: a device name, a word, a clock time, "a" or "the". Letters,
 * digits and light punctuation only. The colon was added on 16 October 2026:
 * Numbers and Time offers times such as "7:45", and a wrong pick of one was
 * being dropped, so a pupil's mix-ups never showed which time they confused.
 */
export const CHOSEN_RE = /^[\p{L}\p{N} '’.,:?()/-]{1,40}$/u

/**
 * A question's id for storage: a 32-bit FNV-1a hash of its own id or prompt,
 * in base 36. The raw id can carry a name or a few words of a quotation
 * (quest ids do), which has no business in a row about a child; the hash is
 * stable for as long as the question is, and collisions within one game's few
 * hundred questions are negligible.
 */
export function itemId(raw: string): string {
  let h = 0x811c9dc5
  for (let n = 0; n < raw.length; n++) {
    h ^= raw.charCodeAt(n)
    h = Math.imul(h, 0x01000193)
  }
  return (h >>> 0).toString(36)
}
