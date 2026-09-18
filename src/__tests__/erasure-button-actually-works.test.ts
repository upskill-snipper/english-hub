import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * The only "delete my account" button on the account page could not work
 * (COMP-9).
 *
 * THE DEFECT (19 September 2026). `src/app/account/page.tsx` had its own
 * confirm-and-delete form which POSTed to `/api/account/delete`. That route
 * exports only `DELETE`. Every attempt therefore got Next's automatic 405,
 * whose body is not JSON, so `await res.json()` threw into a bare `catch` and
 * the user was shown a generic "something went wrong".
 *
 * Nothing on that page linked to `/account/delete`, the control that does
 * work, so the Danger Zone was the ONLY erasure route a user found from their
 * account - and it failed every time, silently, in a way that looked like
 * their problem rather than ours.
 *
 * This is a UK GDPR Article 17 right, owed here to children and their parents.
 * It had been unusable from the obvious place for as long as the two forms had
 * disagreed.
 *
 * THE FIX IS A LINK, NOT A SECOND FORM. A working control already existed with
 * the right method, the confirmation body and the scheduled-purge handling.
 * Duplicating it is what let the two drift apart; `/dashboard/settings` and
 * `/legal/privacy` already link to it rather than reimplementing it.
 */

const ROOT = process.cwd()

function code(rel: string): string {
  return readFileSync(join(ROOT, rel), 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .split(/\r?\n/)
    .map((l) => l.replace(/\/\/.*$/, ''))
    .join('\n')
}

const ACCOUNT = code('src/app/account/page.tsx')
const DELETE_PAGE = code('src/app/account/delete/page.tsx')
const ROUTE = code('src/app/api/account/delete/route.ts')

// ─── The endpoint's actual contract ─────────────────────────────────────────

describe('/api/account/delete', () => {
  it('accepts DELETE and nothing else', () => {
    expect(ROUTE).toMatch(/export async function DELETE\(/)
    // If a POST handler were ever added, the old broken call would start
    // "working" in a way nobody designed. It should stay a 405.
    expect(ROUTE).not.toMatch(/export async function POST\(/)
  })

  it('requires the typed confirmation in the body', () => {
    expect(ROUTE).toMatch(/body\?\.confirm !== 'DELETE'/)
  })
})

// ─── The account page no longer ships a form that cannot succeed ────────────

describe('the account page Danger Zone', () => {
  it('does not POST to a DELETE-only endpoint', () => {
    // The whole defect in one assertion.
    expect(ACCOUNT).not.toMatch(/fetch\('\/api\/account\/delete',\s*\{\s*method:\s*'POST'/)
  })

  it('does not call the deletion endpoint at all any more', () => {
    // It links instead. A second caller is how the two drifted apart.
    expect(ACCOUNT).not.toContain('/api/account/delete')
  })

  it('sends the user to the control that works', () => {
    expect(ACCOUNT).toMatch(/href="\/account\/delete"/)
  })

  it('keeps the section and its warning, so nothing looks removed', () => {
    // Erasure must remain discoverable from the account page - the fix is that
    // it now leads somewhere, not that it disappeared.
    expect(ACCOUNT).toContain("t('account.danger_zone')")
    expect(ACCOUNT).toContain("t('account.delete_blurb')")
    expect(ACCOUNT).toContain("t('account.delete_account')")
  })

  it('leaves behind no orphaned delete state', () => {
    for (const dead of ['deleteConfirm', 'deleteLoading', 'deleteError', 'handleDeleteAccount']) {
      expect(ACCOUNT, `${dead} is still referenced`).not.toContain(dead)
    }
  })
})

// ─── The control that does work, pinned ─────────────────────────────────────

describe('/account/delete', () => {
  it('uses the method the route exports', () => {
    expect(DELETE_PAGE).toMatch(/method:\s*'DELETE'/)
  })

  it('sends the confirmation the route requires', () => {
    expect(DELETE_PAGE).toMatch(/JSON\.stringify\(\{\s*confirm:\s*'DELETE'\s*\}\)/)
  })

  it('handles the scheduled purge the route reports back', () => {
    expect(DELETE_PAGE).toContain('scheduledPurgeAt')
  })
})

// ─── One caller, so they cannot disagree again ──────────────────────────────

describe('callers of the erasure endpoint', () => {
  it('is exactly one page', () => {
    // A second confirm form against one endpoint is precisely how a working
    // control and a broken one came to coexist for months.
    const callers = [
      ['src/app/account/delete/page.tsx', DELETE_PAGE],
      ['src/app/account/page.tsx', ACCOUNT],
    ].filter(([, body]) => body.includes('/api/account/delete'))

    expect(callers.map(([path]) => path)).toEqual(['src/app/account/delete/page.tsx'])
  })
})
