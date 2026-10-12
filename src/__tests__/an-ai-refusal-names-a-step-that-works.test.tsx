// @vitest-environment jsdom
//
// This file needs a DOM. The suite's default is `node` (MAINT-9): running
// jsdom for all 187 files cost 148 seconds of environment setup against an
// 11-second wall clock, for the 13 files that actually use one.
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor, cleanup, fireEvent } from '@testing-library/react'

/**
 * An AI refusal names a next step that actually works.
 *
 * Every AI route answers 403 for several reasons, and the consent ones carry a
 * machine-readable `code`. 73% of signed-in accounts (12 October 2026) are
 * Google or Apple sign-ups with no date of birth on file, so they meet one: a
 * 403 with `date_of_birth_required`. A trace of the sign-up journeys found
 * most pages showing that as a paywall or as bare text, and most refusals of
 * any kind with nothing to press:
 *
 *   - /marking/submit had learnt, on 19 September, to stash the essay and
 *     offer sign-in on a 401 and the plans on a 403 with no code, but only on
 *     the /api/mark fallback. The path every submission takes,
 *     /api/submissions, still answered in plain text and lost the essay. The
 *     source-string checks in marking-first-essay.test.ts passed throughout;
 *   - the IELTS Writing, Speaking and personal-statement pages turned every
 *     403 into a link to the IELTS plans. Their routes check the plan BEFORE
 *     consent, so a coded 403 reached only plan holders, who were sent to buy
 *     what they had. Speaking put the plans link under every error;
 *   - the EAL CEFR assessor said "Upgrade to Premium" to learners who already
 *     were, and its sign-in link went to the dashboard, not back to the task;
 *   - the revision-notes builder, and /dashboard/essay-feedback (where
 *     /dashboard/essay/new redirects) for anything but the consent code,
 *     showed the server's sentence with nothing to press;
 *   - the IELTS placement diagnostic printed the consent sentence in red;
 *   - the IELTS mock swallowed every refusal and told the candidate the
 *     service "may be unavailable, over its daily limit, or require a Premium
 *     subscription", losing the band for a 60-minute section.
 *
 * The rule each page now follows: a 403 with a consent code gets the consent
 * step in place and the same request again once it is answered; only a 403
 * with no code may offer plans; a 401 offers sign-in that comes back to the
 * page, on the surface the visitor was reading.
 *
 * WHY A DOM. Every assertion here is about something that exists only after a
 * fetch has settled and state has changed: a link that appears, a panel that
 * replaces a paywall, a request sent again after an asynchronous save. Source
 * text cannot show any of it, which is exactly how the /marking/submit defect
 * outlived the tests written for it. Every network call is mocked.
 */

vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}))

const push = vi.fn()
const redirect = vi.fn()
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push }),
  notFound: () => {
    throw new Error('notFound')
  },
  redirect: (url: string) => redirect(url),
}))

// The real English copy where a key exists, the key itself where it does not,
// so the assertions are about behaviour rather than wording.
vi.mock('@/lib/i18n/use-t', async () => {
  const { EN_MESSAGES } =
    await vi.importActual<typeof import('@/lib/i18n/generated/en')>('@/lib/i18n/generated/en')
  return { useT: () => (key: string) => EN_MESSAGES[key] ?? key }
})
vi.mock('@/lib/i18n/use-locale', () => ({ useLocale: () => 'en' }))

// Signed in where a page requires it; the refusal under test comes from fetch.
vi.mock('@/store/auth-store', () => ({
  useAuthStore: () => ({ user: { id: 'user-1' }, isLoading: false }),
}))
vi.mock('@/hooks/useBoard', () => ({ useBoard: () => ({ board: 'aqa' }) }))
vi.mock('@/hooks/usePaidAccess', () => ({
  usePaidAccess: () => ({ premium: true, schoolPupil: false }),
}))
vi.mock('@/lib/posthog', () => ({
  capture: vi.fn(),
  EVENTS: { MARKING_REFUSED: 'marking_refused', FIRST_ESSAY_SUBMITTED: 'first_essay_submitted' },
}))

// IELTS attempts are written through to the server by the store.
const saveAttempt = vi.fn()
vi.mock('@/lib/ielts/store', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/ielts/store')>()),
  saveAttempt: (...args: unknown[]) => saveAttempt(...args),
  saveDiagnostic: vi.fn(),
}))
vi.mock('@/lib/ielts/readiness-store', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/ielts/readiness-store')>()),
  setApplicationPsScores: vi.fn(),
}))

// Browser media and speech APIs do not exist in jsdom.
vi.mock('@/components/speech/DictationButton', () => ({ DictationButton: () => null }))
vi.mock('@/components/speech/ReadAloudButton', () => ({ ReadAloudButton: () => null }))
vi.mock('@/app/ielts/speaking/_components/Recorder', () => ({ Recorder: () => null }))
vi.mock('@/app/ielts/writing/_components/WritingChart', () => ({ WritingChart: () => null }))

// The essay-feedback page's Base UI selects, as plain selects a test can drive.
vi.mock('@/components/ui/select', () => ({
  Select: ({
    value,
    onValueChange,
    disabled,
    children,
  }: {
    value: string | null
    onValueChange: (v: string) => void
    disabled?: boolean
    children: React.ReactNode
  }) => (
    <select
      data-testid="select"
      value={value ?? ''}
      disabled={disabled}
      onChange={(e) => onValueChange(e.target.value)}
    >
      <option value="" />
      {children}
    </select>
  ),
  SelectTrigger: () => null,
  SelectValue: () => null,
  SelectContent: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  SelectItem: ({ value, children }: { value: string; children: React.ReactNode }) => (
    <option value={value}>{children}</option>
  ),
}))

import SubmitEssayPage from '@/app/marking/submit/page'
import IeltsWritingPage from '@/app/ielts/writing/page'
import IeltsSpeakingPage from '@/app/ielts/speaking/page'
import PersonalStatementCoachPage from '@/app/ielts/admissions/personal-statement/page'
import { CEFRAssessClient } from '@/components/eal/CEFRAssessClient'
import RevisionBuilderPage from '@/app/toolkit/revision-builder/page'
import EssayFeedbackPage from '@/app/dashboard/essay-feedback/page'
import NewEssayRedirect from '@/app/dashboard/essay/new/page'
import IeltsDiagnosticPage from '@/app/ielts/diagnostic/page'
import WritingStage from '@/app/ielts/mock/_components/WritingStage'
import SpeakingStage from '@/app/ielts/mock/_components/SpeakingStage'
import MockReport from '@/app/ielts/mock/_components/MockReport'
import { EMPTY_RESULTS, type TaskResult } from '@/app/ielts/mock/mock-types'
import { WRITING_PROMPTS } from '@/app/ielts/writing/writing-prompts'
import { SPEAKING_CUES } from '@/app/ielts/speaking/speaking-cues'
import { saveMarkingDraft, clearMarkingDraft } from '@/lib/marking/draft-store'
import { CONSENT_REFUSAL_CODES } from '@/lib/consent-codes'

// ─── fetch double ───────────────────────────────────────────────────────

type Reply = { status: number; body: unknown }
type Responder = Reply | ((body: Record<string, unknown>) => Reply)

let responders: Record<string, Responder>
let posts: { url: string; body: string }[]

beforeEach(() => {
  responders = {}
  posts = []
  push.mockReset()
  redirect.mockReset()
  saveAttempt.mockReset()
  clearMarkingDraft()
  window.localStorage.clear()
  window.history.pushState({}, '', '/')
  vi.stubGlobal(
    'fetch',
    vi.fn(async (url: string, init?: RequestInit) => {
      const raw = String(init?.body ?? '{}')
      if (init?.method === 'POST') posts.push({ url, body: raw })
      const responder = responders[url]
      if (!responder) throw new Error(`unexpected fetch: ${url}`)
      const canned =
        typeof responder === 'function'
          ? responder(JSON.parse(raw) as Record<string, unknown>)
          : responder
      return {
        ok: canned.status >= 200 && canned.status < 300,
        status: canned.status,
        headers: new Headers(),
        json: async () => canned.body,
      } as Response
    }),
  )
})

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
  clearMarkingDraft()
})

const DOB_REFUSAL: Reply = {
  status: 403,
  body: {
    error: 'We do not hold your date of birth.',
    code: CONSENT_REFUSAL_CODES.DATE_OF_BIRTH_REQUIRED,
  },
}
const NO_PLAN: Reply = {
  status: 403,
  body: { error: 'This is a Premium feature. Please upgrade.' },
}
const SIGNED_OUT: Reply = { status: 401, body: { error: 'Unauthorized' } }
const BUSY: Reply = { status: 503, body: { error: 'Busy, try again shortly.' } }

const words = (n: number) => Array.from({ length: n }, (_, i) => `word${i}`).join(' ')
const sentTo = (url: string) => posts.filter((p) => p.url === url)

/** Answer the date-of-birth panel, which then re-runs the original request. */
async function answerDateOfBirth() {
  responders['/api/profile/dob'] = { status: 200, body: { ok: true } }
  fireEvent.change(await screen.findByLabelText('Date of birth'), {
    target: { value: '2001-05-04' },
  })
  fireEvent.click(screen.getByRole('button', { name: 'Save date of birth' }))
}

async function expectSameRequestSentAgain(url: string) {
  await waitFor(() => expect(sentTo(url)).toHaveLength(2))
  const [first, second] = sentTo(url)
  expect(second.body).toBe(first.body)
}

/**
 * The panel quotes the server's sentence itself. What must not happen is the
 * sentence standing alone in an error box, which is what these pages did.
 */
async function expectSentenceOnlyInsidePanel(sentence: string) {
  const panel = await screen.findByRole('region', { name: /date of birth/i })
  const found = screen.queryAllByText(sentence)
  expect(found.length).toBeGreaterThan(0)
  for (const el of found) expect(panel.contains(el)).toBe(true)
}

// ═══ /marking/submit ════════════════════════════════════════════════════

const ESSAY = words(70)
const DRAFT = {
  board: 'AQA',
  paper: 'aqa-lang-paper1',
  question: 'Q2',
  title: 'Storm essay',
  essay: ESSAY,
}

/**
 * Fill the form the way a returning visitor's form is filled: from a stashed
 * draft, which the page restores on mount. The question wording is typed in,
 * because the draft does not carry it.
 */
async function renderMarkingForm() {
  saveMarkingDraft(DRAFT)
  const view = render(<SubmitEssayPage />)
  await screen.findByDisplayValue(ESSAY)
  fireEvent.change(view.container.querySelector('#questionText') as HTMLTextAreaElement, {
    target: { value: 'How does the writer use language to describe the storm?' },
  })
  return view
}

function submitMarkingForm(container: HTMLElement) {
  fireEvent.submit(container.querySelector('form') as HTMLFormElement)
}

describe('/marking/submit, refused for being signed out on the live path', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/marking/submit')
    responders['/api/submissions'] = {
      status: 401,
      body: { error: 'You must be signed in to submit work for marking.' },
    }
  })

  it('offers sign-in that comes back to this page', async () => {
    const { container } = await renderMarkingForm()
    submitMarkingForm(container)

    const link = await screen.findByRole('link', { name: 'Sign in' })
    expect(link.getAttribute('href')).toBe('/auth/login?redirect=%2Fmarking%2Fsubmit')
    // Never sent to the legacy route, and never offered the plans.
    expect(posts.map((p) => p.url)).toEqual(['/api/submissions'])
    expect(screen.queryByRole('link', { name: 'See plans' })).toBeNull()
  })

  it('has the essay stashed before the link is offered', async () => {
    const { container } = await renderMarkingForm()
    submitMarkingForm(container)
    await screen.findByRole('link', { name: 'Sign in' })

    const stored = JSON.parse(window.sessionStorage.getItem('eh-marking-draft') ?? 'null')
    expect(stored).toMatchObject(DRAFT)
  })

  it('finds the essay waiting when the visitor comes back', async () => {
    const { container, unmount } = await renderMarkingForm()
    submitMarkingForm(container)
    await screen.findByRole('link', { name: 'Sign in' })
    unmount()

    // The return trip: a fresh mount of the page, as after the login redirect.
    // The first mount consumed the draft it was filled from, so this one is
    // the draft the 401 stashed.
    const again = render(<SubmitEssayPage />)
    expect(await screen.findByDisplayValue(ESSAY)).toBeTruthy()
    const value = (id: string) => (again.container.querySelector(id) as HTMLSelectElement).value
    expect(value('#board')).toBe('AQA')
    expect(value('#paper')).toBe('aqa-lang-paper1')
    expect(value('#question')).toBe('Q2')
  })

  it('returns an Arabic reader to the Arabic surface, not the English URL', async () => {
    window.history.pushState({}, '', '/ar/marking/submit')
    const { container } = await renderMarkingForm()
    submitMarkingForm(container)

    const link = await screen.findByRole('link', { name: 'Sign in' })
    expect(link.getAttribute('href')).toBe('/auth/login?redirect=%2Far%2Fmarking%2Fsubmit')
  })
})

describe('/marking/submit, refused with no consent code', () => {
  beforeEach(() => window.history.pushState({}, '', '/marking/submit'))

  it('at the door, offers the plans beside the server sentence', async () => {
    responders['/api/submissions'] = {
      status: 403,
      body: {
        error: 'AI marking is a Premium feature. Please upgrade to submit your work for marking.',
      },
    }
    const { container } = await renderMarkingForm()
    submitMarkingForm(container)

    const plans = await screen.findByRole('link', { name: 'See plans' })
    expect(plans.getAttribute('href')).toBe('/pricing?plan=student_monthly')
    expect(screen.getByText(/AI marking is a Premium feature/)).toBeTruthy()
    expect(screen.queryByRole('link', { name: 'Sign in' })).toBeNull()
    expect(screen.queryByRole('region', { name: /date of birth/i })).toBeNull()
  })

  it('at the marking run, after the essay was saved, offers the plans too', async () => {
    responders['/api/submissions'] = { status: 201, body: { submissionId: 'sub_1' } }
    responders['/api/marking/run'] = {
      status: 403,
      body: { error: 'AI marking is a Premium feature. Start your free trial to continue.' },
    }
    const { container } = await renderMarkingForm()
    submitMarkingForm(container)

    expect(await screen.findByRole('link', { name: 'See plans' })).toBeTruthy()
    expect(push).not.toHaveBeenCalled()
  })
})

describe('/marking/submit, refused with a consent code (unchanged)', () => {
  beforeEach(() => window.history.pushState({}, '', '/marking/submit'))

  it('still gets the consent step in place, and never the plans', async () => {
    responders['/api/submissions'] = DOB_REFUSAL
    const { container } = await renderMarkingForm()
    submitMarkingForm(container)

    expect(await screen.findByRole('region', { name: /date of birth/i })).toBeTruthy()
    expect(screen.queryByRole('link', { name: 'See plans' })).toBeNull()
    expect(screen.queryByRole('link', { name: 'Sign in' })).toBeNull()
  })

  it('submits the same essay again once the date of birth is saved', async () => {
    responders['/api/submissions'] = DOB_REFUSAL
    const { container } = await renderMarkingForm()
    submitMarkingForm(container)
    await screen.findByRole('region', { name: /date of birth/i })

    // Now the gate lets them through.
    responders['/api/submissions'] = { status: 201, body: { submissionId: 'sub_2' } }
    responders['/api/marking/run'] = { status: 200, body: { ok: true } }
    await answerDateOfBirth()

    await waitFor(() => expect(push).toHaveBeenCalledWith('/marking/results/sub_2'))
    await expectSameRequestSentAgain('/api/submissions')
  })
})

// ═══ IELTS Writing, Speaking and the personal-statement coach ═══════════

const LONG_ANSWER = 'The chart shows a steady rise in the number of visitors over the decade. '
  .repeat(4)
  .trim()

const WRITING_URL = '/api/ielts/writing-feedback'
const academicTask1 = WRITING_PROMPTS.find(
  (p) => p.task === 'writing-task-1' && p.track === 'academic',
)!

async function writeIeltsAndSubmit() {
  window.history.pushState({}, '', '/ielts/writing')
  render(<IeltsWritingPage />)
  fireEvent.click(await screen.findByText(academicTask1.title))
  fireEvent.change(await screen.findByLabelText(/response/i), { target: { value: LONG_ANSWER } })
  fireEvent.click(screen.getByRole('button', { name: 'Get my band feedback' }))
}

describe('IELTS Writing', () => {
  it('answers a consent refusal in place, not with the plans', async () => {
    responders[WRITING_URL] = DOB_REFUSAL
    await writeIeltsAndSubmit()

    expect(await screen.findByRole('region', { name: /date of birth/i })).toBeTruthy()
    expect(screen.queryByRole('link', { name: 'View Premium plans' })).toBeNull()
  })

  it('sends the same response again once the date of birth is saved', async () => {
    responders[WRITING_URL] = DOB_REFUSAL
    await writeIeltsAndSubmit()
    await screen.findByRole('region', { name: /date of birth/i })

    responders[WRITING_URL] = BUSY
    await answerDateOfBirth()
    await expectSameRequestSentAgain(WRITING_URL)
  })

  it('still offers the plans for a 403 with no code', async () => {
    responders[WRITING_URL] = NO_PLAN
    await writeIeltsAndSubmit()

    const plans = await screen.findByRole('link', { name: 'View Premium plans' })
    expect(plans.getAttribute('href')).toBe('/pricing#ielts')
    expect(screen.queryByRole('region', { name: /date of birth/i })).toBeNull()
  })

  it('offers sign-in that comes back here for a 401', async () => {
    responders[WRITING_URL] = SIGNED_OUT
    await writeIeltsAndSubmit()

    const link = await screen.findByRole('link', { name: 'Sign in' })
    expect(link.getAttribute('href')).toBe('/auth/login?redirect=%2Fielts%2Fwriting')
    expect(screen.queryByRole('link', { name: 'View Premium plans' })).toBeNull()
  })
})

const SPEAKING_URL = '/api/ielts/speaking-feedback'

async function speakAndSubmit() {
  window.history.pushState({}, '', '/ielts/speaking')
  const view = render(<IeltsSpeakingPage />)
  // The cue title appears twice on the page; the first sits in its button.
  const [cueTitle] = await screen.findAllByText(SPEAKING_CUES[0].title)
  fireEvent.click(cueTitle.closest('button')!)
  const transcript = view.container.querySelector('#transcript') as HTMLTextAreaElement
  fireEvent.change(transcript, {
    target: { value: 'I usually spend my weekends walking by the river with my family.' },
  })
  fireEvent.submit(transcript.closest('form')!)
}

describe('IELTS Speaking', () => {
  it('answers a consent refusal in place, not with the plans', async () => {
    responders[SPEAKING_URL] = DOB_REFUSAL
    await speakAndSubmit()

    expect(await screen.findByRole('region', { name: /date of birth/i })).toBeTruthy()
    expect(screen.queryByRole('link', { name: 'See IELTS plans' })).toBeNull()
  })

  it('sends the same transcript again once the date of birth is saved', async () => {
    responders[SPEAKING_URL] = DOB_REFUSAL
    await speakAndSubmit()
    await screen.findByRole('region', { name: /date of birth/i })

    responders[SPEAKING_URL] = BUSY
    await answerDateOfBirth()
    await expectSameRequestSentAgain(SPEAKING_URL)
  })

  it('offers the plans for a 403 with no code', async () => {
    responders[SPEAKING_URL] = NO_PLAN
    await speakAndSubmit()

    const plans = await screen.findByRole('link', { name: 'See IELTS plans' })
    expect(plans.getAttribute('href')).toBe('/pricing#ielts')
  })

  it('does not offer the plans for a failure a plan would not fix', async () => {
    responders[SPEAKING_URL] = { status: 429, body: { error: 'Too many requests.' } }
    await speakAndSubmit()

    expect(await screen.findByText('Too many requests.')).toBeTruthy()
    expect(screen.queryByRole('link', { name: 'See IELTS plans' })).toBeNull()
  })

  it('offers sign-in that comes back here for a 401, in words rather than "Unauthorized"', async () => {
    responders[SPEAKING_URL] = SIGNED_OUT
    await speakAndSubmit()

    const link = await screen.findByRole('link', { name: 'Sign in' })
    expect(link.getAttribute('href')).toBe('/auth/login?redirect=%2Fielts%2Fspeaking')
    expect(screen.getByText('Please sign in to get speaking feedback.')).toBeTruthy()
    expect(screen.queryByText('Unauthorized')).toBeNull()
  })
})

const STATEMENT_URL = '/api/ielts/statement-feedback'

async function draftStatementAndSubmit() {
  window.history.pushState({}, '', '/ielts/admissions/personal-statement')
  const view = render(<PersonalStatementCoachPage />)
  for (const q of ['q1', 'q2', 'q3']) {
    fireEvent.change(view.container.querySelector(`#ps-${q}`) as HTMLTextAreaElement, {
      target: { value: LONG_ANSWER },
    })
  }
  fireEvent.click(screen.getByRole('button', { name: 'Get feedback' }))
}

describe('the personal-statement coach', () => {
  it('answers a consent refusal in place, not with the plans', async () => {
    responders[STATEMENT_URL] = DOB_REFUSAL
    await draftStatementAndSubmit()

    expect(await screen.findByRole('region', { name: /date of birth/i })).toBeTruthy()
    expect(screen.queryByRole('link', { name: 'View Premium plans' })).toBeNull()
  })

  it('sends the same three answers again once the date of birth is saved', async () => {
    responders[STATEMENT_URL] = DOB_REFUSAL
    await draftStatementAndSubmit()
    await screen.findByRole('region', { name: /date of birth/i })

    responders[STATEMENT_URL] = BUSY
    await answerDateOfBirth()
    await expectSameRequestSentAgain(STATEMENT_URL)
  })

  it('still offers the plans for a 403 with no code', async () => {
    responders[STATEMENT_URL] = NO_PLAN
    await draftStatementAndSubmit()

    const plans = await screen.findByRole('link', { name: 'View Premium plans' })
    expect(plans.getAttribute('href')).toBe('/pricing#ielts')
  })

  it('offers sign-in that comes back here for a 401', async () => {
    responders[STATEMENT_URL] = SIGNED_OUT
    await draftStatementAndSubmit()

    const link = await screen.findByRole('link', { name: 'Sign in' })
    expect(link.getAttribute('href')).toBe(
      '/auth/login?redirect=%2Fielts%2Fadmissions%2Fpersonal-statement',
    )
  })
})

// ═══ EAL, revision notes, essay feedback, the IELTS diagnostic ══════════

const CEFR_URL = '/api/cefr-assess'

async function assessCefr() {
  window.history.pushState({}, '', '/eal/articles/writing')
  const view = render(<CEFRAssessClient slug="articles" skill="writing" />)
  fireEvent.change(view.container.querySelector('#cefr-response') as HTMLTextAreaElement, {
    target: { value: words(40) },
  })
  fireEvent.click(screen.getByRole('button', { name: 'Assess my response' }))
}

describe('the EAL CEFR assessor', () => {
  it('answers a consent refusal in place, and does not say "Upgrade to Premium"', async () => {
    responders[CEFR_URL] = DOB_REFUSAL
    await assessCefr()

    expect(await screen.findByRole('region', { name: /date of birth/i })).toBeTruthy()
    expect(screen.queryByRole('link', { name: 'Upgrade to Premium' })).toBeNull()
  })

  it('assesses the same text again once the date of birth is saved', async () => {
    responders[CEFR_URL] = DOB_REFUSAL
    await assessCefr()
    await screen.findByRole('region', { name: /date of birth/i })

    responders[CEFR_URL] = BUSY
    await answerDateOfBirth()
    await expectSameRequestSentAgain(CEFR_URL)
  })

  it('still offers the upgrade for a 403 with no code', async () => {
    responders[CEFR_URL] = NO_PLAN
    await assessCefr()

    const link = await screen.findByRole('link', { name: 'Upgrade to Premium' })
    expect(link.getAttribute('href')).toBe('/pricing')
  })

  it('offers sign-in that comes back to the task, not to the dashboard', async () => {
    responders[CEFR_URL] = SIGNED_OUT
    await assessCefr()

    const link = await screen.findByRole('link', { name: 'Sign in' })
    expect(link.getAttribute('href')).toBe('/auth/login?redirect=%2Feal%2Farticles%2Fwriting')
  })
})

const NOTES_URL = '/api/toolkit/generate-notes'

async function generateNotes() {
  window.history.pushState({}, '', '/toolkit/revision-builder')
  const view = render(<RevisionBuilderPage />)
  fireEvent.change(view.container.querySelector('select') as HTMLSelectElement, {
    target: { value: 'Language Analysis' },
  })
  fireEvent.click(screen.getByRole('button', { name: /Generate Revision Notes/ }))
}

describe('the revision-notes builder', () => {
  it('answers a consent refusal in place, not as a sentence with nothing to press', async () => {
    responders[NOTES_URL] = DOB_REFUSAL
    await generateNotes()

    await expectSentenceOnlyInsidePanel('We do not hold your date of birth.')
    expect(screen.queryByRole('link', { name: 'See plans' })).toBeNull()
  })

  it('generates the same notes again once the date of birth is saved', async () => {
    responders[NOTES_URL] = DOB_REFUSAL
    await generateNotes()
    await screen.findByRole('region', { name: /date of birth/i })

    responders[NOTES_URL] = BUSY
    await answerDateOfBirth()
    await expectSameRequestSentAgain(NOTES_URL)
  })

  it('offers the plans for a 403 with no code', async () => {
    responders[NOTES_URL] = NO_PLAN
    await generateNotes()

    const link = await screen.findByRole('link', { name: 'See plans' })
    expect(link.getAttribute('href')).toBe('/pricing')
  })

  it('offers sign-in that comes back here for a 401', async () => {
    responders[NOTES_URL] = SIGNED_OUT
    await generateNotes()

    const link = await screen.findByRole('link', { name: 'Sign in' })
    expect(link.getAttribute('href')).toBe('/auth/login?redirect=%2Ftoolkit%2Frevision-builder')
  })

  it('offers neither for a failure they would not fix', async () => {
    responders[NOTES_URL] = { status: 500, body: { error: 'Something broke.' } }
    await generateNotes()

    expect(await screen.findByText('Something broke.')).toBeTruthy()
    expect(screen.queryByRole('link', { name: 'See plans' })).toBeNull()
    expect(screen.queryByRole('link', { name: 'Sign in' })).toBeNull()
  })
})

const FEEDBACK_URL = '/api/essay-feedback'

describe('/dashboard/essay/new', () => {
  it('makes no AI call of its own: it sends the learner to /dashboard/essay-feedback', () => {
    NewEssayRedirect()
    expect(redirect).toHaveBeenCalledWith('/dashboard/essay-feedback')
  })
})

async function requestEssayFeedback() {
  window.history.pushState({}, '', '/dashboard/essay-feedback')
  const view = render(<EssayFeedbackPage />)
  const pick = async (index: number) => {
    const select = (await screen.findAllByTestId('select'))[index] as HTMLSelectElement
    await waitFor(() => expect(select.disabled).toBe(false))
    const option = [...select.options].find((o) => o.value !== '')!
    fireEvent.change(select, { target: { value: option.value } })
    return option.value
  }
  // The board arrives from the site board; then paper, question type, question.
  await waitFor(() =>
    expect((screen.getAllByTestId('select')[0] as HTMLSelectElement).value).toBe('AQA'),
  )
  await pick(1)
  await pick(2)
  if ((await pick(3)) === 'custom') {
    fireEvent.change(view.container.querySelector('#questionText') as HTMLInputElement, {
      target: { value: 'How does the writer present conflict?' },
    })
  }
  fireEvent.change(view.container.querySelector('#essay') as HTMLTextAreaElement, {
    target: { value: words(120) },
  })
  fireEvent.submit(view.container.querySelector('form') as HTMLFormElement)
}

describe('/dashboard/essay-feedback', () => {
  it('already answered a consent refusal in place, and still does', async () => {
    responders[FEEDBACK_URL] = DOB_REFUSAL
    await requestEssayFeedback()

    expect(await screen.findByRole('region', { name: /date of birth/i })).toBeTruthy()
    expect(screen.queryByRole('link', { name: 'See plans' })).toBeNull()
  })

  it('offers the plans for a 403 with no code', async () => {
    responders[FEEDBACK_URL] = NO_PLAN
    await requestEssayFeedback()

    const link = await screen.findByRole('link', { name: 'See plans' })
    expect(link.getAttribute('href')).toBe('/pricing')
  })

  it('offers sign-in that comes back here for a 401', async () => {
    responders[FEEDBACK_URL] = SIGNED_OUT
    await requestEssayFeedback()

    const link = await screen.findByRole('link', { name: 'Sign in' })
    expect(link.getAttribute('href')).toBe('/auth/login?redirect=%2Fdashboard%2Fessay-feedback')
  })
})

const DIAGNOSTIC_URL = '/api/ielts/diagnostic-assess'

async function assessDiagnosticWriting() {
  render(<IeltsDiagnosticPage />)
  fireEvent.click(await screen.findByRole('button', { name: 'Start the placement test' }))
  fireEvent.change(await screen.findByPlaceholderText('Type your essay here…'), {
    target: { value: words(60) },
  })
  fireEvent.click(screen.getByRole('button', { name: 'Assess my Writing' }))
}

describe('the IELTS placement diagnostic', () => {
  it('answers a consent refusal in place rather than printing it as an error', async () => {
    responders[DIAGNOSTIC_URL] = DOB_REFUSAL
    await assessDiagnosticWriting()

    await expectSentenceOnlyInsidePanel('We do not hold your date of birth.')
    // The learner can still skip the task and finish the diagnostic: the
    // Writing block keeps its skip button beside the Speaking block's.
    expect(screen.getAllByRole('button', { name: 'Skip this task' })).toHaveLength(2)
  })

  it('assesses the same essay again once the date of birth is saved', async () => {
    responders[DIAGNOSTIC_URL] = DOB_REFUSAL
    await assessDiagnosticWriting()
    await screen.findByRole('region', { name: /date of birth/i })

    responders[DIAGNOSTIC_URL] = BUSY
    await answerDateOfBirth()
    await expectSameRequestSentAgain(DIAGNOSTIC_URL)
  })

  it('shows a 403 with no code as the server sentence, with no plans: the diagnostic is free', async () => {
    responders[DIAGNOSTIC_URL] = {
      status: 403,
      body: { error: 'AI features are currently disabled for your account.' },
    }
    await assessDiagnosticWriting()

    expect(
      await screen.findByText('AI features are currently disabled for your account.'),
    ).toBeTruthy()
    expect(screen.queryByRole('region', { name: /date of birth/i })).toBeNull()
    expect(screen.queryByRole('link', { name: /plans/i })).toBeNull()
  })
})

// ═══ The IELTS mock ═════════════════════════════════════════════════════

const BAND = (band: number): Reply => ({
  status: 200,
  body: {
    feedback: {
      overallBand: band,
      criteria: [{ criterion: 'Task Achievement', band, comment: 'Clear overview.' }],
      strengths: [],
      improvements: [],
    },
  },
})

const academicTask2 = WRITING_PROMPTS.find(
  (p) => p.task === 'writing-task-2' && p.track === 'academic',
)!

function renderWritingStage(onComplete: (r: TaskResult) => void) {
  const view = render(
    <WritingStage
      task1={academicTask1}
      task2={academicTask2}
      track="academic"
      stepLabel="Writing"
      onComplete={onComplete}
    />,
  )
  const box = () => view.container.querySelector('#mock-writing-response') as HTMLTextAreaElement
  return { ...view, box }
}

function finishWriting() {
  fireEvent.click(screen.getByRole('button', { name: 'Finish Writing & start Speaking' }))
}

async function writeMockTask1AndFinish(onComplete: (r: TaskResult) => void) {
  const { box } = renderWritingStage(onComplete)
  fireEvent.change(box(), { target: { value: LONG_ANSWER } })
  finishWriting()
}

describe('the mock Writing section', () => {
  it('holds on a consent refusal and offers the step, instead of moving on unscored', async () => {
    const onComplete = vi.fn()
    responders[WRITING_URL] = DOB_REFUSAL
    await writeMockTask1AndFinish(onComplete)

    expect(await screen.findByRole('region', { name: /date of birth/i })).toBeTruthy()
    expect(onComplete).not.toHaveBeenCalled()
    // Nothing recorded yet: the answer is asked about again, not saved twice.
    expect(saveAttempt).not.toHaveBeenCalled()
  })

  it('gets the band once the date of birth is saved', async () => {
    const onComplete = vi.fn()
    responders[WRITING_URL] = DOB_REFUSAL
    await writeMockTask1AndFinish(onComplete)
    await screen.findByRole('region', { name: /date of birth/i })

    responders[WRITING_URL] = BAND(6.5)
    await answerDateOfBirth()

    await waitFor(() => expect(onComplete).toHaveBeenCalledTimes(1))
    expect(onComplete.mock.calls[0][0]).toMatchObject({ status: 'scored', band: 6.5 })
    await expectSameRequestSentAgain(WRITING_URL)
  })

  it('re-asks only for the task that was refused, keeping a band already returned', async () => {
    const onComplete = vi.fn()
    const { box } = renderWritingStage(onComplete)
    fireEvent.change(box(), { target: { value: LONG_ANSWER } })
    fireEvent.click(screen.getByRole('tab', { name: /Task 2/ }))
    fireEvent.change(box(), { target: { value: `${LONG_ANSWER} Second task.` } })

    responders[WRITING_URL] = (body) => (body.promptId === academicTask1.id ? BAND(7) : DOB_REFUSAL)
    finishWriting()
    await screen.findByRole('region', { name: /date of birth/i })

    responders[WRITING_URL] = BAND(6)
    await answerDateOfBirth()

    await waitFor(() => expect(onComplete).toHaveBeenCalledTimes(1))
    const byTask = (id: string) =>
      sentTo(WRITING_URL).filter((p) => JSON.parse(p.body).promptId === id)
    expect(byTask(academicTask1.id)).toHaveLength(1)
    expect(byTask(academicTask2.id)).toHaveLength(2)
    expect(onComplete.mock.calls[0][0]).toMatchObject({ status: 'scored', band: 6.5 })
  })

  it('carries on without the band when asked, recording the answer once and blaming nothing', async () => {
    const onComplete = vi.fn()
    responders[WRITING_URL] = DOB_REFUSAL
    await writeMockTask1AndFinish(onComplete)
    await screen.findByRole('region', { name: /date of birth/i })

    finishWriting()

    expect(onComplete).toHaveBeenCalledTimes(1)
    const result = onComplete.mock.calls[0][0] as TaskResult
    expect(result).toMatchObject({ status: 'submitted', band: null })
    // Not "the service may be unavailable or require a Premium subscription".
    expect(result.note).toBeUndefined()
    expect(result.nextStep).toBeUndefined()
    // Task 1 recorded unscored; Task 2 was empty and is not an attempt.
    expect(saveAttempt).toHaveBeenCalledTimes(1)
    expect(saveAttempt.mock.calls[0][0]).toMatchObject({ promptId: academicTask1.id, band: 0 })
  })

  it('moves on after a 401, and tells the report to offer sign-in', async () => {
    const onComplete = vi.fn()
    responders[WRITING_URL] = SIGNED_OUT
    await writeMockTask1AndFinish(onComplete)

    await waitFor(() => expect(onComplete).toHaveBeenCalledTimes(1))
    expect(onComplete.mock.calls[0][0]).toMatchObject({
      status: 'submitted',
      nextStep: 'signin',
      note: 'Please sign in to get AI band feedback on your writing.',
    })
  })

  it('moves on after a 403 with no code, and tells the report to offer the plans', async () => {
    const onComplete = vi.fn()
    responders[WRITING_URL] = NO_PLAN
    await writeMockTask1AndFinish(onComplete)

    await waitFor(() => expect(onComplete).toHaveBeenCalledTimes(1))
    expect(onComplete.mock.calls[0][0]).toMatchObject({ status: 'submitted', nextStep: 'plans' })
  })
})

const [speakingPart1, speakingPart2, speakingPart3] = [
  'speaking-part-1',
  'speaking-part-2',
  'speaking-part-3',
].map((part) => SPEAKING_CUES.find((c) => c.part === part)!)

function finishSpeaking() {
  fireEvent.click(screen.getByRole('button', { name: 'Finish mock & see my band' }))
}

async function speakInMockAndFinish(onComplete: (r: TaskResult) => void) {
  render(
    <SpeakingStage
      part1={speakingPart1}
      part2={speakingPart2}
      part3={speakingPart3}
      stepLabel="Speaking"
      onComplete={onComplete}
    />,
  )
  const [first] = screen.getAllByPlaceholderText(/Type a little of what you said/)
  fireEvent.change(first, { target: { value: 'I live in a quiet town near the coast.' } })
  finishSpeaking()
}

describe('the mock Speaking section', () => {
  it('holds on a consent refusal, then gets the band once the step is answered', async () => {
    const onComplete = vi.fn()
    responders[SPEAKING_URL] = DOB_REFUSAL
    await speakInMockAndFinish(onComplete)

    await screen.findByRole('region', { name: /date of birth/i })
    expect(onComplete).not.toHaveBeenCalled()
    expect(saveAttempt).not.toHaveBeenCalled()

    responders[SPEAKING_URL] = BAND(6)
    await answerDateOfBirth()

    await waitFor(() => expect(onComplete).toHaveBeenCalledTimes(1))
    expect(onComplete.mock.calls[0][0]).toMatchObject({ status: 'scored', band: 6 })
    await expectSameRequestSentAgain(SPEAKING_URL)
  })

  it('carries on without the band when asked, blaming nothing', async () => {
    const onComplete = vi.fn()
    responders[SPEAKING_URL] = DOB_REFUSAL
    await speakInMockAndFinish(onComplete)
    await screen.findByRole('region', { name: /date of birth/i })

    finishSpeaking()

    expect(onComplete).toHaveBeenCalledTimes(1)
    const result = onComplete.mock.calls[0][0] as TaskResult
    expect(result).toMatchObject({ status: 'submitted', band: null })
    expect(result.note).toBeUndefined()
    expect(saveAttempt).toHaveBeenCalledTimes(1)
  })

  it('moves on after a 401, and tells the report to offer sign-in', async () => {
    const onComplete = vi.fn()
    responders[SPEAKING_URL] = SIGNED_OUT
    await speakInMockAndFinish(onComplete)

    await waitFor(() => expect(onComplete).toHaveBeenCalledTimes(1))
    expect(onComplete.mock.calls[0][0]).toMatchObject({
      status: 'submitted',
      nextStep: 'signin',
      note: 'Please sign in to get speaking feedback.',
    })
  })
})

describe('the mock band report', () => {
  const unscored = (nextStep?: 'signin' | 'plans'): TaskResult => ({
    skill: 'writing',
    status: 'submitted',
    band: null,
    criteria: [],
    note: 'No band this time.',
    nextStep,
  })
  const report = (writing: TaskResult) =>
    render(
      <MockReport results={{ ...EMPTY_RESULTS, writing }} track="academic" onRestart={() => {}} />,
    )

  it('offers sign-in that comes back to the mock when the section was refused for that', () => {
    window.history.pushState({}, '', '/ielts/mock')
    report(unscored('signin'))

    const link = screen.getByRole('link', { name: 'Sign in' })
    expect(link.getAttribute('href')).toBe('/auth/login?redirect=%2Fielts%2Fmock')
    expect(screen.queryByRole('link', { name: 'See IELTS plans' })).toBeNull()
  })

  it('offers the plans when the section was refused with no consent code', () => {
    report(unscored('plans'))

    const link = screen.getByRole('link', { name: 'See IELTS plans' })
    expect(link.getAttribute('href')).toBe('/pricing#ielts')
    expect(screen.queryByRole('link', { name: 'Sign in' })).toBeNull()
  })

  it('offers neither for a section that was simply not scored', () => {
    report(unscored())

    expect(screen.getByText('No band this time.')).toBeTruthy()
    expect(screen.queryByRole('link', { name: 'Sign in' })).toBeNull()
    expect(screen.queryByRole('link', { name: 'See IELTS plans' })).toBeNull()
  })
})
