// @vitest-environment jsdom
//
// Renders the real panel with the real English copy, and writes an answer and
// takes a quiz: the grades appeared only after those clicks, so that is what
// is asserted.
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import type { MouseEvent, ReactNode } from 'react'

/**
 * The Self-Study panel tells a student no grade.
 *
 * THE DEFECT (found 16 October 2026). InlineStudyEngine is mounted by 28
 * set-text guides and 50 poem pages. Its Essay tab showed "Marking..." for 1.5
 * seconds, called nothing, and printed "Working at Grade 6-7", "4-5" or "3-4"
 * from the word count alone, under the label "AI Feedback". Its Quiz tab
 * printed "Working at Grade {g}" from the percentage. Neither was a grade.
 *
 * WHY A RENDERED TEST. Rendered to a string, the panel shows only the quiz's
 * settings, so the old panel passes any static check: both grades existed
 * only once a student had typed an answer, or answered every question, and
 * clicked. The source-text guards are in pages-say-what-the-code-does.test.ts.
 */

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    onClick,
    className,
  }: {
    href: string
    children: ReactNode
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
    className?: string
  }) => (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        onClick?.(e)
        e.preventDefault()
      }}
    >
      {children}
    </a>
  ),
}))
vi.mock('@/lib/gtag', () => ({ events: { quizStarted: () => {}, quizCompleted: () => {} } }))

const { default: InlineStudyEngine } = await import('@/components/study/InlineStudyEngine')

const QUESTIONS = [1, 2, 3].map((n) => ({
  id: `q${n}`,
  question: `Question ${n}?`,
  type: 'multiple-choice' as const,
  options: ['Alpha', 'Beta', 'Gamma', 'Delta'],
  correctIndex: 1,
  explanation: 'Because.',
  topic: 'Themes',
  difficulty: 'higher' as const,
}))

/** Any grade a student could read as their own: "Grade 6", "6-7", "Working at". */
const GRADE = /grade\s*\d|\b\d\s*-\s*\d\b|working at/i

function panel() {
  return render(
    <InlineStudyEngine
      textName="Macbeth"
      questions={QUESTIONS}
      essayPrompts={['How does Shakespeare present ambition?']}
    />,
  )
}

beforeEach(() => {
  window.sessionStorage.clear()
  window.localStorage.clear()
})

describe('the essay box', () => {
  it('checks an answer against a list, with no grade and no AI label', () => {
    panel()
    fireEvent.click(screen.getByRole('button', { name: /essay/i }))
    const answer = Array.from({ length: 230 }, () => 'ambition').join(' ')
    fireEvent.change(screen.getByRole('textbox'), { target: { value: answer } })
    fireEvent.click(screen.getByRole('button', { name: 'Check my answer' }))

    // The checklist the student ticks for themselves.
    expect(screen.getByText('Check your own answer')).toBeTruthy()
    const boxes = screen.getAllByRole('checkbox')
    expect(boxes).toHaveLength(6)
    fireEvent.click(boxes[0]!)
    expect((boxes[0] as HTMLInputElement).checked).toBe(true)

    // 230 words was "Working at Grade 6-7" under "AI Feedback".
    const text = document.body.textContent ?? ''
    expect(text).not.toMatch(GRADE)
    expect(text).not.toMatch(/AI Feedback/i)
    expect(text).not.toMatch(/Marking\.\.\./)
  })

  it('takes the answer to the real marker, carrying it in this tab', () => {
    panel()
    fireEvent.click(screen.getByRole('button', { name: /essay/i }))
    const answer = Array.from({ length: 60 }, (_, i) => `word${i}`).join(' ')
    fireEvent.change(screen.getByRole('textbox'), { target: { value: answer } })
    fireEvent.click(screen.getByRole('button', { name: 'Check my answer' }))

    const link = screen.getByRole('link', { name: /Take this answer to AI marking/ })
    expect(link.getAttribute('href')).toMatch(/^\/marking\/submit\?/)
    expect(link.getAttribute('href')).toContain('text=Macbeth')

    fireEvent.click(link)
    const stored = JSON.parse(window.sessionStorage.getItem('eh-marking-draft') ?? '{}')
    expect(stored.essay).toBe(answer)
    expect(stored.title).toBe('Macbeth')
    // The paper is the student's to choose: a guessed one marks the answer
    // against the wrong grid.
    expect(stored.paper).toBe('')
  })

  it('keeps the answer when the student goes back to it', () => {
    panel()
    fireEvent.click(screen.getByRole('button', { name: /essay/i }))
    const answer = Array.from({ length: 55 }, () => 'word').join(' ')
    fireEvent.change(screen.getByRole('textbox'), { target: { value: answer } })
    fireEvent.click(screen.getByRole('button', { name: 'Check my answer' }))
    fireEvent.click(screen.getByRole('button', { name: /Back to my answer/ }))
    expect((screen.getByRole('textbox') as HTMLTextAreaElement).value).toBe(answer)
  })
})

describe('the quiz results', () => {
  it('give the score and the percentage, and no grade', () => {
    panel()
    fireEvent.click(screen.getByRole('button', { name: 'Start Quiz' }))
    for (let i = 0; i < QUESTIONS.length; i++) {
      // Option buttons carry their letter; pick the first, right or wrong.
      fireEvent.click(screen.getByRole('button', { name: /^A\./ }))
      fireEvent.click(screen.getByRole('button', { name: /Next Question|See Results/ }))
    }
    const results = screen.getByText('Topic Breakdown').parentElement!.parentElement!
    // The score appears twice: overall, and on the one topic's row.
    expect(within(results).getAllByText(/^\d\/3$/).length).toBeGreaterThan(0)
    expect(within(results).getByText(/^\d+%$/)).toBeTruthy()
    expect(results.textContent ?? '').not.toMatch(GRADE)
  })
})
