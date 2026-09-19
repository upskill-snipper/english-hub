import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
// A Node script, imported to test its one pure function.
import { assertNoPii } from '../../scripts/growth-report.mjs'

/**
 * The Friday growth report (SM-9).
 *
 * THE DEFECT. The only conversion signals in the product are client-side: a
 * `subscription_started` fired on a redirect, a GA4 purchase on
 * `?checkout=success`, and `first_essay_submitted` from one page. Every one can
 * be wrong in the direction that flatters. Nothing produced the weekly report
 * the roadmap commits to, so the registers and the product already disagree -
 * the affiliate register in the business folder is empty while the database
 * holds two active affiliate accounts.
 *
 * TWO THINGS THE FIRST DRAFT OF THE REPORT GOT WRONG, both found by looking at
 * the data rather than at the schema:
 *
 *   - It reported "209 adults, 1 minor". `profiles.is_minor` is NOT NULL with
 *     DEFAULT false, and exactly ONE of 210 accounts has a date of birth. So
 *     209 of those "adults" are the column default, not a fact about anybody.
 *     On a product whose age gate and parental-consent flow both read that
 *     field, publishing it as an age breakdown would be the worst kind of
 *     confident wrong answer.
 *   - It reported one activation number from `marking_submissions` (1 row)
 *     while `Essay` and `AIFeedback` hold 4 each. Two stores, different paths,
 *     and choosing one would have been a guess presented as a measurement.
 *
 * WHAT IT CANNOT DO. The money. Only test Stripe keys are on this machine, so
 * trials, first payments, active subscriptions and MRR need a restricted
 * read-only LIVE key that only the owner can issue. The report says so in place,
 * because a blank section reads as a zero.
 */

const ROOT = process.cwd()
const SCRIPT = readFileSync(join(ROOT, 'scripts/growth-report.mjs'), 'utf8')

/** Source with comments removed, so an assertion cannot match its own docblock. */
const code = SCRIPT.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

describe('it is read-only, structurally', () => {
  it.each(['insert into', 'update ', 'delete from', 'drop ', 'alter table', 'truncate'])(
    'contains no %s',
    (statement) => {
      // It runs against a production database holding children's data. The
      // guarantee has to be visible in the file, not asserted in a comment.
      expect(code.toLowerCase()).not.toContain(statement)
    },
  )

  it('opens no write path through an ORM either', () => {
    expect(code).not.toMatch(/prisma\.\w+\.(create|update|delete|upsert)/)
  })
})

describe('what it refuses to write', () => {
  it('rejects an email address', () => {
    expect(() => assertNoPii('a report mentioning head@example.com')).toThrow(/email/)
  })

  it('rejects a Supabase uuid', () => {
    expect(() => assertNoPii('user 3f2504e0-4f89-11d3-9a0c-0305e82c3301')).toThrow(/uuid/)
  })

  it('rejects a Prisma cuid', () => {
    expect(() => assertNoPii('user cl9ebqhxk00003b6ohj4k8xyz')).toThrow(/cuid/)
  })

  it('accepts a report of counts', () => {
    expect(() => assertNoPii('| student | 203 |\n| teacher | 6 |')).not.toThrow()
  })
})

describe('the age section', () => {
  it('does not call an unset column an adult', () => {
    // THE ASSERTION THIS FILE EXISTS FOR. `is_minor` is NOT NULL DEFAULT false
    // and one account in 210 has a date of birth. Any report that prints
    // "adult" against that column is reporting a default as a fact about a
    // child's age.
    expect(code).not.toMatch(/then 'adult'/)
    expect(code).toContain('date_of_birth is not null')
    expect(code).toContain('column defaults to false')
  })

  it('says why the distinction matters, where somebody reading will see it', () => {
    expect(SCRIPT).toMatch(/cannot record/)
    expect(SCRIPT).toMatch(/age gate and a parental-consent flow/)
  })
})

describe('the activation section', () => {
  it('reports both stores rather than choosing one', () => {
    // marking_submissions holds 1 row; Essay and AIFeedback hold 4 each. A
    // single number would be a guess about which one counts.
    expect(code).toContain('marking_submissions')
    expect(code).toContain('"Essay"')
    expect(code).toContain('"AIFeedback"')
  })

  it('reports a missing table as missing, never as zero', () => {
    // "School analytics counted rows in tables that do not exist" is a fixed
    // defect in this repository; the same mistake in a report is a wrong number
    // handed to the owner as a fact.
    expect(code).toContain('unavailable')
    expect(SCRIPT).toMatch(/is a FACT about the product, not a zero/)
  })
})

describe('KPI rule 2', () => {
  it('reports counts rather than rates below thirty', () => {
    expect(code).toMatch(/RATE_FLOOR = 30/)
    expect(code).toMatch(/of >= RATE_FLOOR/)
  })
})

describe('the money half', () => {
  it('says out loud that it is absent, rather than leaving a blank', () => {
    // A blank section reads as a zero, and a zero for MRR is a different
    // statement from "not measured here".
    expect(SCRIPT).toMatch(/The money half is missing/)
    expect(SCRIPT).toMatch(/read-only LIVE key/)
  })
})
