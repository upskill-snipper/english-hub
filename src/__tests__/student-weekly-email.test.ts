import { describe, it, expect } from 'vitest'
import {
  buildStudentWeeklyEmail,
  type StudentWeeklyData,
} from '@/lib/email-templates/student-weekly'

// ── Helper ───────────────────────────────────────────────────────────

function baseData(overrides?: Partial<StudentWeeklyData>): StudentWeeklyData {
  return {
    studentName: 'Alice Smith',
    studentEmail: 'alice@test.com',
    weekStart: new Date('2026-04-06'),
    weekEnd: new Date('2026-04-12'),
    poemsStudied: [],
    textsStudied: [],
    gamesPlayed: 0,
    quizScores: [],
    streakDays: 0,
    suggestedFocus: [],
    ...overrides,
  }
}

// ── Tests ─────────────────────────────────────────────────────────────

describe('Student Weekly Email Template', () => {
  // ── Subject line ───────────────────────────────────────────────────

  it('generates a subject line with date range', () => {
    const { subject } = buildStudentWeeklyEmail(baseData())
    expect(subject).toContain('Weekly Summary')
    expect(subject).toContain('Apr')
  })

  // ── Basic HTML structure ──────────────────────────────────────────

  it('returns valid HTML with doctype', () => {
    const { html } = buildStudentWeeklyEmail(baseData())
    expect(html).toContain('<!DOCTYPE html>')
    expect(html).toContain('</html>')
  })

  it('includes the student name in the greeting', () => {
    const { html } = buildStudentWeeklyEmail(baseData({ studentName: 'Charlie Brown' }))
    expect(html).toContain('Charlie Brown')
  })

  it('includes the English Hub branding', () => {
    const { html } = buildStudentWeeklyEmail(baseData())
    expect(html).toContain('The English Hub')
    expect(html).toContain('#1A5276') // brand colour
  })

  // ── No activity state ─────────────────────────────────────────────

  it('shows no-activity message when nothing was studied', () => {
    const { html } = buildStudentWeeklyEmail(baseData())
    expect(html).toContain('No revision activity this week')
  })

  // ── Poems studied ─────────────────────────────────────────────────

  it('lists studied poems when present', () => {
    const { html } = buildStudentWeeklyEmail(
      baseData({ poemsStudied: ['Ozymandias', 'London', 'Exposure'] })
    )
    expect(html).toContain('Ozymandias')
    expect(html).toContain('London')
    expect(html).toContain('Exposure')
    expect(html).toContain('Poems')
  })

  // ── Texts studied ─────────────────────────────────────────────────

  it('lists studied texts when present', () => {
    const { html } = buildStudentWeeklyEmail(
      baseData({ textsStudied: ['Macbeth Act 1', 'An Inspector Calls'] })
    )
    expect(html).toContain('Macbeth Act 1')
    expect(html).toContain('An Inspector Calls')
    expect(html).toContain('Texts')
  })

  // ── Games played ──────────────────────────────────────────────────

  it('shows games played count when > 0', () => {
    const { html } = buildStudentWeeklyEmail(baseData({ gamesPlayed: 5 }))
    expect(html).toContain('5')
    expect(html).toContain('revision game')
  })

  it('uses plural for multiple games', () => {
    const { html } = buildStudentWeeklyEmail(baseData({ gamesPlayed: 3 }))
    expect(html).toContain('games')
  })

  it('uses singular for exactly 1 game', () => {
    const { html } = buildStudentWeeklyEmail(baseData({ gamesPlayed: 1 }))
    // Should not contain "games" (plural) — only "game"
    expect(html).toMatch(/1<\/strong> revision game[^s]/)
  })

  // ── Quiz scores ───────────────────────────────────────────────────

  it('shows quiz summary when scores are present', () => {
    const { html } = buildStudentWeeklyEmail(baseData({ quizScores: [60, 80, 70] }))
    expect(html).toContain('Quiz Scores')
    expect(html).toContain('3') // quizzes taken
    expect(html).toContain('70%') // average (60+80+70)/3 = 70
    expect(html).toContain('80%') // best score
  })

  it('calculates average score correctly', () => {
    const { html } = buildStudentWeeklyEmail(baseData({ quizScores: [50, 90] }))
    expect(html).toContain('70%') // (50+90)/2 = 70
  })

  it('does not show quiz section when no quizzes taken', () => {
    const { html } = buildStudentWeeklyEmail(baseData({ quizScores: [] }))
    expect(html).not.toContain('Quiz Scores')
  })

  // ── Streak display ────────────────────────────────────────────────

  it('shows streak days in the banner', () => {
    const { html } = buildStudentWeeklyEmail(baseData({ streakDays: 5 }))
    expect(html).toContain('5-day streak')
  })

  it('shows fire emoji for 7+ day streak', () => {
    const { html } = buildStudentWeeklyEmail(baseData({ streakDays: 7 }))
    expect(html).toContain('&#128293;') // fire emoji
    expect(html).toContain('Amazing consistency')
  })

  it('shows star emoji for 3-6 day streak', () => {
    const { html } = buildStudentWeeklyEmail(baseData({ streakDays: 4 }))
    expect(html).toContain('&#11088;') // star emoji
    expect(html).toContain('Great momentum')
  })

  it('shows encouraging message for low streak', () => {
    const { html } = buildStudentWeeklyEmail(baseData({ streakDays: 1 }))
    expect(html).toContain('build your streak')
  })

  // ── Suggested focus ───────────────────────────────────────────────

  it('shows suggested focus areas when provided', () => {
    const { html } = buildStudentWeeklyEmail(
      baseData({ suggestedFocus: ['Practice poetry comparison', 'Revise Macbeth themes'] })
    )
    expect(html).toContain('Suggested focus')
    expect(html).toContain('Practice poetry comparison')
    expect(html).toContain('Revise Macbeth themes')
  })

  it('does not show focus section when empty', () => {
    const { html } = buildStudentWeeklyEmail(baseData({ suggestedFocus: [] }))
    expect(html).not.toContain('Suggested focus')
  })

  // ── Unsubscribe ───────────────────────────────────────────────────

  it('includes unsubscribe token link when provided', () => {
    const { html } = buildStudentWeeklyEmail(baseData({ unsubscribeToken: 'abc123' }))
    expect(html).toContain('unsubscribe?token=abc123')
  })

  it('falls back to settings page when no unsubscribe token', () => {
    const { html } = buildStudentWeeklyEmail(baseData())
    expect(html).toContain('/dashboard/settings')
  })

  // ── XSS protection ────────────────────────────────────────────────

  it('escapes HTML in student name', () => {
    const { html } = buildStudentWeeklyEmail(
      baseData({ studentName: '<script>alert("xss")</script>' })
    )
    expect(html).not.toContain('<script>')
    expect(html).toContain('&lt;script&gt;')
  })

  it('escapes HTML in poem names', () => {
    const { html } = buildStudentWeeklyEmail(
      baseData({ poemsStudied: ['<img src=x onerror=alert(1)>'] })
    )
    expect(html).not.toContain('<img')
    expect(html).toContain('&lt;img')
  })

  // ── Footer ────────────────────────────────────────────────────────

  it('includes legal footer with company name', () => {
    const { html } = buildStudentWeeklyEmail(baseData())
    expect(html).toContain('Upskill Energy Limited')
  })

  it('includes links to terms and privacy policy', () => {
    const { html } = buildStudentWeeklyEmail(baseData())
    expect(html).toContain('/terms')
    expect(html).toContain('/privacy-policy')
  })
})
