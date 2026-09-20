/**
 * The meta description for a course page.
 *
 * THE DEFECT (20 September 2026). `src/app/courses/[id]/page.tsx` built it as
 *
 *     `${subtitle}. ${description.slice(0, 120)}... ${n} modules, ${duration}.${board}`
 *
 * `slice(0, 120)` cuts at a byte count, not at a word or a sentence, so on 78
 * of the 87 courses the result read "... Includes ... 10 modules, 9 hours.
 * (AQA)" - a sentence abandoned mid-clause, an ellipsis standing in for nothing,
 * and then two facts the sentence before it had usually just given. Every one
 * of the 87 came out over 160 characters (the longest was 288), so Google cut
 * it again, generally right at the dangling fragment.
 *
 * The rule here instead: start with the subtitle, add whole sentences from the
 * description while they fit, and add the module count and duration only if
 * there is room and the text has not already said it. Nothing is ever cut
 * mid-word, and nothing ends in an ellipsis. If a single sentence is longer
 * than the budget on its own it is cut at a clause boundary where there is one
 * and at a word boundary otherwise, then closed with a full stop. That is the
 * only case where anything is dropped silently, and the reason it is allowed at
 * all is spelled out where it happens.
 */

/**
 * Google shows roughly 155-160 characters on desktop, so 160 is the top of the
 * range rather than a guess. It was 158 for an afternoon, which cost exactly
 * one course the last word of its only sentence - the Prayer Before Birth
 * description is 160 characters on the nose - and reading "...for the Edexcel
 * IGCSE Literature." is worse than two characters of risk at the cut.
 */
export const MAX_DESCRIPTION = 160

type CourseLike = {
  subtitle?: string
  description?: string
  duration?: string
  moduleList?: unknown[]
}

/** Split on sentence ends, keeping the terminator with its sentence. */
function sentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean)
}

/**
 * Cut and close with a full stop, never mid-word.
 *
 * Prefers the last CLAUSE boundary - a comma or semicolon - over the last word
 * boundary, because a list cut between its items still reads as a finished
 * sentence while a list cut inside one does not. On the Edexcel poetry courses
 * a word-boundary cut produced "...exam technique for the Edexcel IGCSE
 * Literature." with "anthology" missing; the clause cut gives "...covering
 * context, language, structure, and exam technique." instead. Only accepted
 * when the clause boundary is in the last third of the budget, so a sentence
 * with one early comma is not chopped down to nothing.
 */
function hardTrim(text: string, max: number): string {
  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  const clause = Math.max(cut.lastIndexOf(','), cut.lastIndexOf(';'))
  const at = clause > max * 0.66 ? clause : cut.lastIndexOf(' ')
  return (at > 0 ? cut.slice(0, at) : cut).replace(/[,;:.\s]+$/, '') + '.'
}

/**
 * Twenty of the 87 subtitles end with no punctuation at all - "Poem-by-poem
 * analysis for the full 15-poem anthology", "Exploring Effects and Impact
 * (J351/02)". Joined to the next sentence with a space they run straight into
 * it, which is how the old template produced "...anthology A comprehensive
 * module-by-module guide...".
 */
function asSentence(text: string): string {
  const t = text.trim()
  return !t || /[.!?]$/.test(t) ? t : `${t}.`
}

/** Whole sentences of `body` that fit after `lead`, `lead` itself if none do. */
function fill(lead: string, body: string): string {
  let out = lead
  for (const sentence of sentences(body)) {
    const next = out ? `${out} ${sentence}` : sentence
    if (next.length > MAX_DESCRIPTION) break
    out = next
  }
  return out
}

export function courseDescription(course: CourseLike): string {
  const subtitle = asSentence(course.subtitle ?? '')
  const body = (course.description ?? '').trim()
  const modules = course.moduleList?.length ?? 0
  const duration = (course.duration ?? '').trim()

  // "10 modules, 9 hours." - worth the characters only when the prose has not
  // already said it, which it does on courses described as "a 10-module course".
  const facts = modules && duration ? `${modules} modules, ${duration}.` : ''

  // Two honest candidates, no truncation in either: the subtitle plus whatever
  // whole sentences fit after it, and the body's own sentences with the
  // subtitle dropped. On a course with a long opening sentence the second says
  // considerably more, and saying more beats repeating the title.
  const withSubtitle = fill(subtitle, body)
  const bodyOnly = fill('', body)
  let out = bodyOnly.length > withSubtitle.length ? bodyOnly : withSubtitle

  // When the body is ONE long sentence, neither candidate can use it and the
  // description falls back to the subtitle - which on the eleven courses where
  // this happens is generic and shared. All eight Edexcel IGCSE poetry courses
  // carry the subtitle "Edexcel IGCSE Literature poetry anthology study", so
  // they would ship eight identical descriptions while the poem and the poet,
  // the only distinguishing facts, sat unused in the sentence that did not fit.
  // Trimming that sentence at a word boundary keeps it true - it lists fewer
  // things - and is the lesser evil against eight pages saying the same thing.
  if (out.length < 100 && body.length > out.length) out = hardTrim(body, MAX_DESCRIPTION)
  if (!out) out = hardTrim(body || subtitle, MAX_DESCRIPTION)

  const saysCount = modules > 0 && new RegExp(`\\b${modules}[- ]module`).test(out)
  if (facts && !saysCount && out.length + 1 + facts.length <= MAX_DESCRIPTION) {
    out = `${out} ${facts}`
  }

  return hardTrim(out, MAX_DESCRIPTION)
}
