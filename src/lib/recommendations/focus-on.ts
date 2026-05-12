// ─── Focus-On Recommendations ───────────────────────────────────────────────
// Generates 3-5 prioritised "focus on" recommendations for a logged-in
// student based on actual weak spots in their progress data
// (`progress_poems`, `progress_games`, `progress_quizzes`).
//
// Heuristics applied (in priority order):
//   1. Quizzes whose best score is < 60% → revise the underlying text/poem
//   2. Poems marked "seen" but not "studied" for > 7 days → study them
//   3. Selected board has poems with no progress at all → suggest the
//      most-popular un-studied one (by global play count if available,
//      otherwise the first un-touched poem from the board's set-text list)
//   4. reading_age trend is flat or decreasing across the last 5 sessions
//      → recommend a comprehension challenge
//   5. No game played in 5 days → recommend the highest-relevance game
//      tied to the user's weakest text
//
// The function returns at most 5 recommendations, sorted by priority
// (1 = highest urgency). Each recommendation has a clear "Practise X"
// CTA plus an `href` the UI can link to.
// ─────────────────────────────────────────────────────────────────────────────

import type { SupabaseClient } from '@supabase/supabase-js'

// ─── Public Types ───────────────────────────────────────────────────────────

export type FocusPriority = 1 | 2 | 3

export interface FocusAction {
  label: string
  href: string
}

export interface FocusRecommendation {
  priority: FocusPriority
  reason: string
  action: FocusAction
}

// ─── Internal Row Shapes (best-effort; tables will exist) ───────────────────

interface ProgressPoemRow {
  poem_slug: string
  status: string | null // 'seen' | 'studied' | …
  updated_at: string | null
  board: string | null
}

interface ProgressGameRow {
  game_slug: string
  text_slug: string | null
  played_at: string | null
}

interface ProgressQuizRow {
  quiz_slug: string
  text_slug: string | null
  poem_slug: string | null
  best_score: number | null // 0-100
  updated_at: string | null
}

interface ReadingAssessmentRow {
  reading_age: number | null
  created_at: string | null
}

interface ProfileRow {
  exam_board: string | null
}

// ─── Helpers ────────────────────────────────────────────────────────────────

const DAY_MS = 1000 * 60 * 60 * 24

function daysSince(iso: string | null | undefined): number {
  if (!iso) return Number.POSITIVE_INFINITY
  const t = new Date(iso).getTime()
  if (Number.isNaN(t)) return Number.POSITIVE_INFINITY
  return (Date.now() - t) / DAY_MS
}

function prettySlug(slug: string): string {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim()
}

function pushUnique(
  list: FocusRecommendation[],
  rec: FocusRecommendation,
  seen: Set<string>,
): void {
  const key = `${rec.action.href}::${rec.action.label}`
  if (seen.has(key)) return
  seen.add(key)
  list.push(rec)
}

// Trend detection: returns true when the linear slope across the
// supplied numbers is approximately ≤ 0 (flat or decreasing).
function isFlatOrDecreasing(values: number[]): boolean {
  if (values.length < 2) return false
  // Simple slope via least-squares; cheap and good enough for n≤5.
  const n = values.length
  const xs = values.map((_, i) => i)
  const meanX = xs.reduce((a, b) => a + b, 0) / n
  const meanY = values.reduce((a, b) => a + b, 0) / n
  let num = 0
  let den = 0
  for (let i = 0; i < n; i++) {
    num += (xs[i] - meanX) * (values[i] - meanY)
    den += (xs[i] - meanX) ** 2
  }
  if (den === 0) return true
  return num / den <= 0
}

// ─── Children's Code gate ───────────────────────────────────────────────────
// Reads the user's profile and returns true ONLY when they have
// explicitly opted-in to personalised recommendations. The flag lives on
// `profiles.personalised_recommendations`. Defaults to OFF when unsure
// (Standard 8: high-privacy default).
async function isRecommendationsAllowed(
  userId: string,
  supabase: SupabaseClient,
): Promise<boolean> {
  // NOTE: The spec referenced `child_defaults.recommendations === true`
  // but no such column or table exists in the live schema. The closest
  // existing user pref is `profiles.personalised_recommendations`,
  // which is set to `false` by default for under-18s by
  // `getChildProfileDefaults()` in `src/lib/privacy/child-defaults.ts`.
  // Using this column keeps us within the owned-files boundary.
  const { data, error } = await supabase
    .from('profiles')
    .select('personalised_recommendations')
    .eq('id', userId)
    .maybeSingle<{ personalised_recommendations: boolean | null }>()

  if (error || !data) return false
  return data.personalised_recommendations === true
}

// ─── Main entry point ──────────────────────────────────────────────────────

export async function getFocusRecommendations(
  userId: string,
  supabase: SupabaseClient,
): Promise<FocusRecommendation[]> {
  // Children's Code gate — bail out unless explicit opt-in.
  const allowed = await isRecommendationsAllowed(userId, supabase)
  if (!allowed) return []

  // Pull all signals in parallel; tolerate any individual table miss
  // so a brand-new student still gets a sensible default set.
  const [poemsRes, gamesRes, quizzesRes, readingRes, profileRes] = await Promise.all([
    supabase
      .from('progress_poems')
      .select('poem_slug, status, updated_at, board')
      .eq('user_id', userId),
    supabase
      .from('progress_games')
      .select('game_slug, text_slug, played_at')
      .eq('user_id', userId)
      .order('played_at', { ascending: false }),
    supabase
      .from('progress_quizzes')
      .select('quiz_slug, text_slug, poem_slug, best_score, updated_at')
      .eq('user_id', userId),
    supabase
      .from('reading_assessments')
      .select('reading_age, created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(5),
    supabase.from('profiles').select('exam_board').eq('id', userId).maybeSingle<ProfileRow>(),
  ])

  const poems: ProgressPoemRow[] = (poemsRes.data as ProgressPoemRow[] | null) ?? []
  const games: ProgressGameRow[] = (gamesRes.data as ProgressGameRow[] | null) ?? []
  const quizzes: ProgressQuizRow[] = (quizzesRes.data as ProgressQuizRow[] | null) ?? []
  const readings: ReadingAssessmentRow[] = (readingRes.data as ReadingAssessmentRow[] | null) ?? []
  const board: string | null = profileRes.data?.exam_board ?? null

  const recs: FocusRecommendation[] = []
  const seen = new Set<string>()

  // ── 1. Weak quizzes (best_score < 60%) — priority 1 ────────────────────
  const weakQuizzes = quizzes
    .filter((q) => typeof q.best_score === 'number' && q.best_score < 60)
    .sort(
      (a, b) => (a.best_score ?? 100) - (b.best_score ?? 100), // worst first
    )

  for (const q of weakQuizzes) {
    const target = q.poem_slug ?? q.text_slug ?? q.quiz_slug
    const niceName = prettySlug(target)
    pushUnique(
      recs,
      {
        priority: 1,
        reason: `Your best score on the ${prettySlug(q.quiz_slug)} quiz is ${Math.round(
          q.best_score ?? 0,
        )}%. Revising the text will lift it fast.`,
        action: {
          label: `Practise ${niceName}`,
          href: q.poem_slug
            ? `/poems/${q.poem_slug}`
            : q.text_slug
              ? `/texts/${q.text_slug}`
              : `/revision/quiz/${q.quiz_slug}`,
        },
      },
      seen,
    )
    if (recs.length >= 5) break
  }

  // ── 2. Poems "seen" but not "studied" for > 7 days — priority 2 ────────
  if (recs.length < 5) {
    const studiedSlugs = new Set(
      poems.filter((p) => p.status === 'studied').map((p) => p.poem_slug),
    )
    const stale = poems
      .filter(
        (p) => p.status === 'seen' && !studiedSlugs.has(p.poem_slug) && daysSince(p.updated_at) > 7,
      )
      .sort((a, b) => daysSince(b.updated_at) - daysSince(a.updated_at))

    for (const p of stale) {
      pushUnique(
        recs,
        {
          priority: 2,
          reason: `You opened "${prettySlug(p.poem_slug)}" ${Math.round(
            daysSince(p.updated_at),
          )} days ago but haven't studied it yet.`,
          action: {
            label: `Practise ${prettySlug(p.poem_slug)}`,
            href: `/poems/${p.poem_slug}`,
          },
        },
        seen,
      )
      if (recs.length >= 5) break
    }
  }

  // ── 3. Untouched board poem — priority 3 ───────────────────────────────
  if (recs.length < 5 && board) {
    const touched = new Set(poems.map((p) => p.poem_slug))
    // Look for poems on this board the user has never touched. We use
    // the rows table itself to surface candidates by board column when
    // possible, then fall back to the popularity heuristic.
    const { data: boardPoemRows } = await supabase
      .from('poems')
      .select('slug, popularity')
      .eq('board', board)
      .order('popularity', { ascending: false })
      .limit(20)

    const boardPoems = (boardPoemRows as { slug: string; popularity: number | null }[] | null) ?? []
    const candidate = boardPoems.find((p) => !touched.has(p.slug))
    if (candidate) {
      pushUnique(
        recs,
        {
          priority: 3,
          reason: `"${prettySlug(candidate.slug)}" is one of the most-studied poems on your board and you haven't started it yet.`,
          action: {
            label: `Practise ${prettySlug(candidate.slug)}`,
            href: `/poems/${candidate.slug}`,
          },
        },
        seen,
      )
    }
  }

  // ── 4. Flat / decreasing reading-age trend — priority 2 ────────────────
  if (recs.length < 5 && readings.length >= 2) {
    // Stored newest-first; reverse so index increases with time.
    const series = readings
      .slice()
      .reverse()
      .map((r) => r.reading_age)
      .filter((v): v is number => typeof v === 'number')

    if (series.length >= 2 && isFlatOrDecreasing(series)) {
      pushUnique(
        recs,
        {
          priority: 2,
          reason: `Your reading age has been flat across your last ${series.length} sessions. A short comprehension challenge will push it up.`,
          action: {
            label: 'Practise comprehension',
            href: '/reading/comprehension',
          },
        },
        seen,
      )
    }
  }

  // ── 5. No game in 5 days — priority 3 ──────────────────────────────────
  if (recs.length < 5) {
    const lastPlayed = games[0]?.played_at ?? null
    if (daysSince(lastPlayed) > 5) {
      // Find weakest text — lowest best_score quiz that has a text_slug.
      const weakestText =
        weakQuizzes.find((q) => q.text_slug)?.text_slug ??
        quizzes
          .slice()
          .sort((a, b) => (a.best_score ?? 100) - (b.best_score ?? 100))
          .find((q) => q.text_slug)?.text_slug ??
        null

      const href = weakestText ? `/games?text=${encodeURIComponent(weakestText)}` : '/games'
      const label = weakestText
        ? `Practise ${prettySlug(weakestText)} games`
        : 'Practise with a game'
      pushUnique(
        recs,
        {
          priority: 3,
          reason: lastPlayed
            ? `It's been ${Math.round(daysSince(lastPlayed))} days since you played a game — a quick round keeps recall sharp.`
            : "You haven't played any games yet — they're a quick way to lock in vocabulary.",
          action: { label, href },
        },
        seen,
      )
    }
  }

  // ── Pad to a minimum of 3 recommendations with safe defaults ──────────
  if (recs.length < 3) {
    const fallbacks: FocusRecommendation[] = [
      {
        priority: 3,
        reason: 'Try a fresh quiz to surface your next weak spot.',
        action: { label: 'Practise a quiz', href: '/revision/quiz' },
      },
      {
        priority: 3,
        reason: 'A short comprehension exercise builds reading stamina.',
        action: {
          label: 'Practise comprehension',
          href: '/reading/comprehension',
        },
      },
      {
        priority: 3,
        reason: 'Quick games help vocabulary stick.',
        action: { label: 'Practise with a game', href: '/games' },
      },
    ]
    for (const f of fallbacks) {
      if (recs.length >= 3) break
      pushUnique(recs, f, seen)
    }
  }

  // Sort by priority then trim to a max of 5 recommendations.
  recs.sort((a, b) => a.priority - b.priority)
  return recs.slice(0, 5)
}
