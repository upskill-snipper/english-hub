import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fakeSupabaseTables, daysFromNow, type FakeTable } from './helpers/fake-supabase-tables'

/**
 * The paid-access choke point, src/lib/course-access.ts.
 *
 * Until 12 October 2026 every GCSE AI route asked one question,
 * `profiles.subscription_status === 'pro'`, so being added to a school gave a
 * pupil nothing that lasted: the school paths wrote 'pro' onto the profile,
 * the trial-expiry cron wiped it after seven days, and an uploaded pupil had
 * only the 40-call no-card trial. Calum decided that a school pupil's access
 * comes from the school's live pilot, checked at the moment of use. These
 * tests drive the real choke point, the real getPupilSchoolAccess and the
 * real isSchoolAccessActive against a fake of the tables they read.
 */

const PUPIL = '0a6b2f4e-1c3d-4e5f-8a9b-0c1d2e3f4a5b'
const SCHOOL = '11111111-1111-4111-8111-111111111111'

let fake = fakeSupabaseTables({})

vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => fake.client,
  createServerSupabaseClient: () => fake.client,
}))

import {
  checkCourseAccess,
  hasActiveSubscription,
  hasIeltsAccess,
  resolvePaidAccess,
} from '@/lib/course-access'

function world({
  subscription = 'free',
  profileError = false,
  schoolUntil = daysFromNow(30) as string | null,
  pupil = true,
  schoolError = false,
}: {
  subscription?: string
  profileError?: boolean
  schoolUntil?: string | null
  pupil?: boolean
  schoolError?: boolean
} = {}) {
  const tables: Record<string, FakeTable> = {
    profiles: profileError
      ? { error: { code: '57014', message: 'statement timeout' } }
      : { rows: [{ id: PUPIL, subscription_status: subscription, ielts_status: 'free' }] },
    school_members: {
      rows: pupil
        ? [{ user_id: PUPIL, school_id: SCHOOL, role: 'student', invite_status: 'accepted' }]
        : [],
    },
    school_students: { rows: [] },
    class_students: { rows: [] },
    schools: schoolError
      ? { error: { code: '42P17', message: 'infinite recursion' } }
      : {
          rows: [
            {
              id: SCHOOL,
              access_type: 'paid',
              access_until: schoolUntil,
              subscription_status: 'active',
              ai_authorised_at: null,
            },
          ],
        },
  }
  fake = fakeSupabaseTables(tables)
  return fake.client as never
}

let errorSpy: ReturnType<typeof vi.spyOn>
beforeEach(() => {
  errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
})
afterEach(() => {
  errorSpy.mockRestore()
})

describe('hasActiveSubscription, the one paid-access choke point', () => {
  it('admits a pupil of a school whose access is live, with nothing written to their profile', async () => {
    const client = world({ subscription: 'free' })
    await expect(hasActiveSubscription(client, PUPIL)).resolves.toBe(true)
    await expect(resolvePaidAccess(client, PUPIL)).resolves.toMatchObject({
      allowed: true,
      via: 'school',
      school: { schoolId: SCHOOL },
    })
  })

  it('refuses the same pupil once the school’s last day has passed', async () => {
    const client = world({ subscription: 'free', schoolUntil: daysFromNow(-1) })
    await expect(hasActiveSubscription(client, PUPIL)).resolves.toBe(false)
  })

  it('refuses someone who is neither a subscriber nor a pupil', async () => {
    const client = world({ subscription: 'free', pupil: false })
    await expect(hasActiveSubscription(client, PUPIL)).resolves.toBe(false)
  })

  it('still admits a subscriber, without asking about schools', async () => {
    const client = world({ subscription: 'pro', pupil: false })
    await expect(resolvePaidAccess(client, PUPIL)).resolves.toEqual({
      allowed: true,
      via: 'subscription',
    })
    expect(fake.calls.map((c) => c.table)).toEqual(['profiles'])
  })

  it('a failed school read grants nothing', async () => {
    const client = world({ subscription: 'free', schoolError: true })
    await expect(hasActiveSubscription(client, PUPIL)).resolves.toBe(false)
  })

  it('a failed profile read grants nothing either, but does not stop a school that is confirmed live', async () => {
    await expect(
      hasActiveSubscription(world({ profileError: true, pupil: false }), PUPIL),
    ).resolves.toBe(false)
    await expect(hasActiveSubscription(world({ profileError: true }), PUPIL)).resolves.toBe(true)
  })

  it('course access gives a pupil of a live school the same answer', async () => {
    await expect(
      checkCourseAccess(world({ subscription: 'free' }), PUPIL, 'course-1'),
    ).resolves.toMatchObject({ hasAccess: true, reason: 'school_access' })
  })

  it('but a school pilot does not open IELTS, which keeps its own entitlement', async () => {
    await expect(hasIeltsAccess(world({ subscription: 'free' }), PUPIL)).resolves.toBe(false)
  })
})

// ─── Every gate a pupil meets goes through it ──────────────────────────────

function code(rel: string): string {
  return readFileSync(join(process.cwd(), rel), 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .split(/\r?\n/)
    .map((line) => line.replace(/\/\/.*$/, ''))
    .join('\n')
}

describe('the gates a school pupil meets ask the choke point, not the profile', () => {
  it.each([
    'src/app/api/mark/route.ts',
    'src/app/api/mark/stream/route.ts',
    'src/app/api/submissions/route.ts',
    'src/app/api/marking/run/route.ts',
    'src/app/api/essay-feedback/route.ts',
    'src/app/api/essay/feedback/route.ts',
    'src/app/resources/model-answers/persuasive-writing/page.tsx',
    'src/app/resources/model-answers/literature-essay/page.tsx',
    'src/app/resources/model-answers/language-analysis/page.tsx',
    'src/app/resources/model-answers/creative-writing/page.tsx',
    'src/app/revision/model-essays/[text]/[slug]/page.tsx',
    'src/lib/auth/require-subscription.ts',
  ])('%s calls hasActiveSubscription and reads no profile status itself', (rel) => {
    const body = code(rel)
    expect(body).toContain('hasActiveSubscription(')
    expect(body).not.toMatch(/subscription_status\s*[!=]==?\s*['"]pro['"]/)
  })

  it.each([
    'src/app/learn/[courseId]/[moduleId]/client-page.tsx',
    'src/app/learn/[courseId]/assessment/client-page.tsx',
    'src/app/courses/[id]/client-page.tsx',
  ])('%s asks the server rather than testing the profile for pro', (rel) => {
    const body = code(rel)
    expect(body).toContain('usePaidAccess()')
    expect(body).not.toMatch(/subscription_status\s*[!=]==?\s*['"]pro['"]/)
  })

  it('the choke point itself reads the profile and then asks the school', () => {
    const body = code('src/lib/course-access.ts')
    expect(body).toContain("profile?.subscription_status === 'pro'")
    expect(body).toContain('getPupilSchoolAccess(userId)')
  })
})
