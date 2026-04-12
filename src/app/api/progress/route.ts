import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

// ─── GET /api/progress ────────────────────────────────────────────────
// Returns a progress summary for the authenticated user.

interface ProgressSummary {
  totalPoems: number
  totalGames: number
  totalQuizzes: number
  totalTexts: number
  totalEssays: number
  totalFlashcardSessions: number
  averageGrade: string | null
  streak: number
  lastActive: string | null
}

// GCSE grade ordering for averaging
const GRADE_VALUES: Record<string, number> = {
  '9': 9, '8': 8, '7': 7, '6': 6, '5': 5, '4': 4, '3': 3, '2': 2, '1': 1,
  'A*': 9, 'A': 7, 'B': 6, 'C': 4, 'D': 3, 'E': 2, 'F': 1, 'G': 1, 'U': 0,
}

const VALUE_TO_GRADE: [number, string][] = [
  [8.5, '9'], [7.5, '8'], [6.5, '7'], [5.5, '6'], [4.5, '5'],
  [3.5, '4'], [2.5, '3'], [1.5, '2'], [0.5, '1'], [0, 'U'],
]

function numericToGrade(avg: number): string {
  for (const [threshold, grade] of VALUE_TO_GRADE) {
    if (avg >= threshold) return grade
  }
  return 'U'
}

function calculateStreak(dates: string[]): number {
  if (dates.length === 0) return 0

  const uniqueDays = [
    ...new Set(
      dates.map((d) => {
        const dt = new Date(d)
        return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`
      })
    ),
  ].sort().reverse()

  if (uniqueDays.length === 0) return 0

  // Check if today or yesterday is included (streak must be current)
  const today = new Date()
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)
  const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`

  if (uniqueDays[0] !== todayStr && uniqueDays[0] !== yesterdayStr) {
    return 0
  }

  let streak = 1
  for (let i = 1; i < uniqueDays.length; i++) {
    const prev = new Date(uniqueDays[i - 1])
    const curr = new Date(uniqueDays[i])
    const diffMs = prev.getTime() - curr.getTime()
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24))

    if (diffDays === 1) {
      streak++
    } else {
      break
    }
  }

  return streak
}

export async function GET(request: NextRequest) {
  try {
    // ── Rate limit ─────────────────────────────────────────────────────
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`progress-get:${ip}`, {
      limit: 30,
      windowSeconds: 60,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Rate limited' },
        { status: 429 }
      )
    }

    // ── Auth check ─────────────────────────────────────────────────────
    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // ── Fetch all progress for user ────────────────────────────────────
    const { data: rows, error } = await supabase
      .from('student_progress')
      .select('progress_type, slug, score, max_score, grade, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('[progress] DB error:', error)
      return NextResponse.json(
        { error: 'Failed to load progress' },
        { status: 500 }
      )
    }

    const progressRows = rows ?? []

    // ── Compute summary ────────────────────────────────────────────────
    const byType = (type: string) => progressRows.filter((r) => r.progress_type === type)

    const allGrades = progressRows
      .map((r) => r.grade)
      .filter((g): g is string => g !== null && g in GRADE_VALUES)

    const averageGradeNum =
      allGrades.length > 0
        ? allGrades.reduce((sum, g) => sum + (GRADE_VALUES[g] ?? 0), 0) / allGrades.length
        : null

    const allDates = progressRows.map((r) => r.created_at).filter(Boolean) as string[]

    const summary: ProgressSummary = {
      totalPoems: byType('poem_studied').length,
      totalGames: byType('game_played').length,
      totalQuizzes: byType('quiz_completed').length,
      totalTexts: byType('text_studied').length,
      totalEssays: byType('essay_marked').length,
      totalFlashcardSessions: byType('flashcard_session').length,
      averageGrade: averageGradeNum !== null ? numericToGrade(averageGradeNum) : null,
      streak: calculateStreak(allDates),
      lastActive: allDates[0] ?? null,
    }

    return NextResponse.json(summary)
  } catch (err) {
    console.error('[progress] Error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
