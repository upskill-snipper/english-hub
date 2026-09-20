/**
 * Deterministic option shuffling, with no question bank attached.
 *
 * WHY THIS IS ITS OWN FILE (20 September 2026).
 *
 * This code lived in `src/app/revision/quiz/quiz-data.ts`, which is 6,985 lines
 * because it also holds 900 questions. Three modules imported the shuffle from
 * there - `/games/comprehension-challenge`, `src/lib/recommendations/engine.ts`
 * and `src/lib/revision/personalise.ts` - and `package.json` declares no
 * `sideEffects: false`, so a bundler cannot safely drop the bank they do not
 * use. That is the same shape as PERF-1, where `src/lib/utils.ts` pulled the
 * whole course corpus into every page that imported a class-name helper.
 *
 * More importantly, the fix for the answer-position bias needs this function in
 * a dozen game pages. Importing it from the quiz route would put 900 questions
 * into a spelling game.
 *
 * WHAT THE BIAS WAS. Measured across the repository on 20 September 2026:
 * 2,557 of 3,254 `correctIndex` values were 1, which is the second option - B.
 * In `/games/grade-climber`, 230 of 266 questions (86.5%). Those surfaces
 * shuffled the QUESTION pool and left the OPTIONS in array order, then scored
 * with `index === correctIndex`, so a student who clicked the second answer
 * every time scored 86.5% without reading anything.
 *
 * Rebalancing the data would have fixed today and not tomorrow: the next person
 * to author a hundred questions writes the answer at B again. Shuffling at
 * render cannot be undone by authoring.
 */

/** FNV-1a. Small, fast, and stable across runs and platforms. */
function hashString(input: string): number {
  let h = 2166136261 >>> 0
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619) >>> 0
  }
  return h >>> 0
}

/** Mulberry32 PRNG - small, fast, deterministic from a 32-bit seed. */
function mulberry32(seed: number): () => number {
  let t = seed >>> 0
  return () => {
    t = (t + 0x6d2b79f5) >>> 0
    let r = t
    r = Math.imul(r ^ (r >>> 15), r | 1)
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61)
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * Shuffle an option list deterministically from a seed. Pure: the input is not
 * mutated, and the same seed always gives the same order.
 *
 * DETERMINISTIC ON PURPOSE. A `Math.random()` shuffle would reorder the options
 * on every React re-render, so the answer a student was reading would move
 * under their cursor. Seed it with the question id plus a per-session salt and
 * the order is stable for that attempt and different on the next one.
 */
export function shuffleOptionsDeterministic<T>(options: readonly T[], seed: string): T[] {
  const rng = mulberry32(hashString(seed))
  const a = [...options]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * A salt for one attempt. Call once per quiz session and keep it in a ref, so
 * the order is stable while the student plays and different when they replay.
 */
export function newSessionSalt(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
}

/**
 * Some questions cannot be shuffled without becoming unanswerable, and this is
 * the single place that decides which.
 *
 * Shuffling "Both A and B" to the top, while A and B move elsewhere, turns a
 * working question into nonsense. A fix that breaks those to unbias the rest is
 * not a fix.
 *
 * WHAT THE STUDENT READS AFTER ANSWERING COUNTS TOO. The first version of this
 * read the stem only. An adversarial re-read found twelve course explanations
 * naming a letter - "Option B does this by placing 'cold' inside the quotation",
 * "Options A, B and D are paraphrases, Option C is an inference". On
 * y8t1-hg-m7-q2 a shuffle made every letter in the explanation wrong.
 *
 * LOCKING THOSE WAS THE WRONG ANSWER, and measuring said so: 717 explanations in
 * this repository name an option by letter, and 302 of them are the IELTS
 * listening bank, which is 86.1% at B. Locking would have left the second worst
 * surface on the site almost exactly as biased as it started, while reporting
 * the bias fixed - the failure this codebase is named for.
 *
 * So a LETTER moves with the option it names, and only prose that cannot be
 * repaired that way locks the question: a POSITION in words ("the third option"),
 * because nothing in the sentence says which option that was.
 *
 * THE LETTER MUST BE CAPITALISED. Matching case-insensitively looked safer and
 * was not: /answer [a-d]/i matches the ordinary English of "a correct phrase to
 * answer a Q1", and locked a question for nothing. An option letter is written
 * as a capital everywhere in this repository.
 */
const SELF_REFERENTIAL_OPTION =
  /\b(all|none|both|neither|any) of (the |them|these|those)?\s*(above|these|them|those|the others)\b|\bboth [A-D] and [A-D]\b|^\s*[A-D] and [A-D]\b/i

/** A position named in words. Unrepairable, so the question keeps its order. */
const ORDINAL_OPTION_REFERENCE = /\bthe (first|second|third|fourth|last) option\b/i

/** A letter naming an option. Repairable: the letter moves with the option. */
const OPTION_LETTER_REFERENCE = /\b([Oo]ptions?|[Aa]nswers?)\s+([A-D])\b/g

/** An ordered scale reads as nonsense shuffled, even though scoring survives it. */
const SCALE_WORDS = new Set([
  'never',
  'rarely',
  'sometimes',
  'often',
  'usually',
  'always',
  'none',
  'some',
  'most',
  'all',
])

/**
 * @param prose Everything the student reads with this question - the stem, and
 *   the explanation if the surface shows one. Pass both.
 */
export function optionsMustKeepOrder(prose: string, options: readonly string[]): boolean {
  if (ORDINAL_OPTION_REFERENCE.test(prose)) return true
  if (options.some((o) => SELF_REFERENTIAL_OPTION.test(o))) return true
  const words = options.map((o) =>
    o
      .trim()
      .toLowerCase()
      .replace(/[.!?]+$/, ''),
  )
  if (words.length >= 3 && words.every((w) => SCALE_WORDS.has(w))) return true
  return false
}

/**
 * Move every "Option B" in some prose to the letter that option now sits at.
 *
 * Exported because it is the half of the fix that is easy to forget: a surface
 * can shuffle correctly, score correctly, and still show a student an
 * explanation pointing confidently at the wrong row.
 */
export function remapOptionLetters(
  prose: string,
  authored: readonly string[],
  shown: readonly string[],
): string {
  return prose.replace(OPTION_LETTER_REFERENCE, (whole, word: string, letter: string) => {
    const value = authored[letter.charCodeAt(0) - 65]
    if (value === undefined) return whole
    const shownIndex = shown.indexOf(value)
    if (shownIndex < 0) return whole
    return `${word} ${String.fromCharCode(65 + shownIndex)}`
  })
}

/**
 * The shuffled options for a question, the correct option's VALUE, and the
 * explanation with its letter references moved to match.
 *
 * SCORE BY VALUE, NEVER BY INDEX. After a shuffle the stored `correctIndex`
 * points at whatever happens to be in that slot now, so a surface that shuffles
 * and keeps `index === correctIndex` marks the wrong answer right. That is worse
 * than the bias it was meant to fix, and it is the mistake this signature is
 * shaped to prevent: it hands back `correctValue` and no index at all.
 *
 * Questions `optionsMustKeepOrder` rejects come back in their authored order, so
 * a caller never has to make that judgement itself.
 *
 * @param question The stem.
 * @param explanation The feedback shown after answering, where the surface has
 *   one. A surface that displays an explanation must render the one returned
 *   here, not the authored one.
 */
export function shuffledOptionsFor(
  options: readonly string[],
  correctIndex: number,
  questionId: string,
  sessionSalt: string,
  question = '',
  explanation = '',
): { options: string[]; correctValue: string; explanation: string } {
  const correctValue = options[correctIndex] ?? ''
  if (optionsMustKeepOrder(`${question}\n${explanation}`, options)) {
    return { options: [...options], correctValue, explanation }
  }
  const shuffled = shuffleOptionsDeterministic(options, `${questionId}|${sessionSalt}`)
  return {
    options: shuffled,
    correctValue,
    explanation: remapOptionLetters(explanation, options, shuffled),
  }
}
