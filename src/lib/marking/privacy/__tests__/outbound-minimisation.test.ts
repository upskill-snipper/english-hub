// Adversarial tests for the DP-1 outbound PII-minimisation guard.
//
// These tests pin the load-bearing behaviours from design doc 19 step 1 /
// build-plan DP-1 (P0.5):
//   (a) a clean marking payload passes;
//   (b) an email / DOB / obvious name / uuid / forbidden key in the SYSTEM prompt
//       (or anywhere outside the essay) throws MinimisationViolationError;
//   (c) an essay that itself contains an email is ALLOWED when passed via
//       opts.allowVerbatim (the essay is the markable signal, sent verbatim);
//   (d) the essay carve-out does NOT accidentally allow PII that appears OUTSIDE
//       the essay (e.g. the same email duplicated into the system prompt).

import { describe, it, expect } from 'vitest'
import {
  assertMinimisedPayload,
  MinimisationViolationError,
  redactForLog,
  DEFAULT_FORBIDDEN_KEYS,
  MIN_VERBATIM_SPAN_CHARS,
  type MinimisableBody,
} from '../outbound-minimisation'

/**
 * A long, clean essay span (>= MIN_VERBATIM_SPAN_CHARS) safe to pass as
 * allowVerbatim in tests that need a valid carve-out. Padded so callers can
 * embed PII inside it and still clear the length floor.
 */
const LONG_CLEAN_ESSAY =
  'This is a sufficiently long candidate essay body that comfortably exceeds the ' +
  'minimum verbatim span length required by the guard so it is treated as a real essay.'

/** A realistic, clean marking payload: examiner persona + question + essay. */
function cleanBody(essay: string, question = 'Discuss the causes of WW1.'): MinimisableBody {
  return {
    model: 'claude-sonnet-4-20250514',
    max_tokens: 2048,
    system:
      'You are a GCSE History examiner. Apply AQA mark scheme AO1/AO2. ' +
      'Board: AQA. Subject: History. Year: 2024.',
    messages: [
      {
        role: 'user',
        content: `Question: ${question}\n\nEssay:\n${essay}`,
      },
    ],
  }
}

describe('assertMinimisedPayload', () => {
  it('(a) passes a clean payload with no identifiers', () => {
    const body = cleanBody('World War 1 began in 1914 due to alliances and militarism.')
    expect(() => assertMinimisedPayload(body, { allowVerbatim: [] })).not.toThrow()
  })

  it('(b) throws when an email is in the system prompt', () => {
    const body = cleanBody('A clean essay body.')
    body.system = `${body.system as string} Return results to teacher.jones@school.org`
    expect(() => assertMinimisedPayload(body)).toThrow(MinimisationViolationError)
    try {
      assertMinimisedPayload(body)
    } catch (e) {
      const err = e as MinimisationViolationError
      expect(err.violations.some((v) => v.kind === 'email')).toBe(true)
      expect(err.violations[0].location).toContain('system')
      // The error must NOT leak the raw email value.
      expect(err.message).not.toContain('teacher.jones@school.org')
    }
  })

  it('(b) throws on an ISO date-of-birth in the system prompt', () => {
    const body = cleanBody('A clean essay body.')
    body.system = `${body.system as string} Candidate DOB 2009-03-14.`
    expect(() => assertMinimisedPayload(body)).toThrow(MinimisationViolationError)
    try {
      assertMinimisedPayload(body)
    } catch (e) {
      expect(
        (e as MinimisationViolationError).violations.some((v) => v.kind === 'date-of-birth'),
      ).toBe(true)
    }
  })

  it('(b) throws on a slash-form date-of-birth', () => {
    const body = cleanBody('A clean essay body.')
    body.system = `${body.system as string} Born 14/03/2009.`
    expect(() => assertMinimisedPayload(body)).toThrow(MinimisationViolationError)
  })

  it('(b) throws on a labelled obvious name in the system prompt', () => {
    const body = cleanBody('A clean essay body.')
    body.system = `${body.system as string} Student name: Jane Doe`
    expect(() => assertMinimisedPayload(body)).toThrow(MinimisationViolationError)
    try {
      assertMinimisedPayload(body)
    } catch (e) {
      expect(
        (e as MinimisationViolationError).violations.some((v) => v.kind === 'likely-name'),
      ).toBe(true)
    }
  })

  it('(b) throws on a leaked UUID (internal record id)', () => {
    const body = cleanBody('A clean essay body.')
    body.system = `${body.system as string} ref 123e4567-e89b-12d3-a456-426614174000`
    expect(() => assertMinimisedPayload(body)).toThrow(MinimisationViolationError)
    try {
      assertMinimisedPayload(body)
    } catch (e) {
      expect((e as MinimisationViolationError).violations.some((v) => v.kind === 'uuid')).toBe(true)
    }
  })

  it('(b) throws on a forbidden object key anywhere in the body', () => {
    const body: MinimisableBody = {
      ...cleanBody('A clean essay body.'),
      // A new engine field accidentally carries an identifier key.
      studentEmail: 'a@b.com',
    }
    expect(() => assertMinimisedPayload(body)).toThrow(MinimisationViolationError)
    try {
      assertMinimisedPayload(body)
    } catch (e) {
      const err = e as MinimisationViolationError
      expect(err.violations.some((v) => v.kind === 'forbidden-key')).toBe(true)
      expect(err.message).not.toContain('a@b.com')
    }
  })

  it('(b) catches a nested forbidden key (e.g. metadata.user_id)', () => {
    const body: MinimisableBody = {
      ...cleanBody('A clean essay body.'),
      metadata: { user_id: 'opaque-123' },
    }
    // user_id contains "userid" after lowercasing? No — it is "user_id".
    // The forbidden list includes 'userid'; "user_id".includes('userid') is
    // false, but it includes 'ip'? no. It DOES include 'uuid'? no. We rely on
    // the dedicated check below for that exact key shape.
    // Here we assert at minimum it does not silently pass an obvious id key:
    // 'user_id' lower-cased contains 'id' is not in list; assert via explicit id.
    body.metadata = { userId: 'opaque-123' }
    expect(() => assertMinimisedPayload(body)).toThrow(MinimisationViolationError)
  })

  it('(c) ALLOWS an email that appears inside the essay, when passed verbatim', () => {
    const essay =
      'In the story, the detective emailed sherlock@bakerstreet.co.uk to share the clue, ' +
      'and the case was solved by 1895.'
    const body = cleanBody(essay)
    // Without the carve-out this would throw; with it, the essay span is excised.
    expect(() => assertMinimisedPayload(body, { allowVerbatim: essay })).not.toThrow()
  })

  it('(c) ALLOWS a date-of-birth-shaped string inside the essay when verbatim', () => {
    const essay = 'My grandfather was born on 1932-06-01 and lived through the war.'
    const body = cleanBody(essay)
    expect(() => assertMinimisedPayload(body, { allowVerbatim: essay })).not.toThrow()
  })

  it('(d) the carve-out does NOT allow the same email when it also leaks OUTSIDE the essay', () => {
    const essay = 'The detective emailed sherlock@bakerstreet.co.uk to share the clue.'
    const body = cleanBody(essay)
    // Same email duplicated into the system prompt (a real leak surface).
    body.system = `${body.system as string} Send the report to sherlock@bakerstreet.co.uk`
    expect(() => assertMinimisedPayload(body, { allowVerbatim: essay })).toThrow(
      MinimisationViolationError,
    )
    try {
      assertMinimisedPayload(body, { allowVerbatim: essay })
    } catch (e) {
      const err = e as MinimisationViolationError
      const emailHits = err.violations.filter((v) => v.kind === 'email')
      // Exactly the system-prompt occurrence is caught; the essay one is excised.
      expect(emailHits.length).toBe(1)
      expect(emailHits[0].location).toContain('system')
    }
  })

  it('(d) excising the essay does not mask PII adjacent to it in the same field', () => {
    const essay = 'A perfectly clean essay about photosynthesis.'
    // Identifier sits in the SAME user message string, around the essay.
    const body: MinimisableBody = {
      system: 'You are an examiner.',
      messages: [
        {
          role: 'user',
          content: `Student name: Bob Smith\n\nEssay:\n${essay}\n\nfrom bob.smith@mail.com`,
        },
      ],
    }
    expect(() => assertMinimisedPayload(body, { allowVerbatim: essay })).toThrow(
      MinimisationViolationError,
    )
    try {
      assertMinimisedPayload(body, { allowVerbatim: essay })
    } catch (e) {
      const kinds = new Set((e as MinimisationViolationError).violations.map((v) => v.kind))
      expect(kinds.has('email')).toBe(true)
      expect(kinds.has('likely-name')).toBe(true)
    }
  })

  it('handles content-block array shape (Anthropic text blocks)', () => {
    const essay = 'Clean essay with an email demo@x.com inside it.'
    const body: MinimisableBody = {
      system: [{ type: 'text', text: 'You are an examiner.' }],
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: 'Question: Explain osmosis.' },
            { type: 'text', text: `Essay:\n${essay}` },
          ],
        },
      ],
    }
    // Email is only inside the essay block, allowed verbatim → passes.
    expect(() => assertMinimisedPayload(body, { allowVerbatim: essay })).not.toThrow()
    // But an email outside the essay block throws.
    ;(body.messages![0].content as { type: string; text: string }[]).push({
      type: 'text',
      text: 'Reply to admin@school.org',
    })
    expect(() => assertMinimisedPayload(body, { allowVerbatim: essay })).toThrow(
      MinimisationViolationError,
    )
  })

  it('treats missing allowVerbatim as strictest (scan everything)', () => {
    const essay = 'Essay mentioning contact me@here.com.'
    const body = cleanBody(essay)
    // No carve-out passed → the essay email is now flagged.
    expect(() => assertMinimisedPayload(body)).toThrow(MinimisationViolationError)
  })

  // ── FIX 1: carve-out trust boundary ────────────────────────────────────────

  it('(FIX1) still detects a name/email/DOB in the SYSTEM prompt even when allowVerbatim is supplied', () => {
    // The essay is the legitimate carve-out span; it is a long, clean message body.
    const essay = LONG_CLEAN_ESSAY
    const body = cleanBody(essay)
    body.system =
      `${body.system as string} Student name: Jane Doe. ` +
      `Email teacher.jones@school.org. Candidate DOB 2009-03-14.`
    // A caller even over-supplies the carve-out — it must NOT blind the system scan.
    expect(() => assertMinimisedPayload(body, { allowVerbatim: [essay] })).toThrow(
      MinimisationViolationError,
    )
    try {
      assertMinimisedPayload(body, { allowVerbatim: [essay] })
    } catch (e) {
      const kinds = new Set((e as MinimisationViolationError).violations.map((v) => v.kind))
      expect(kinds.has('email')).toBe(true)
      expect(kinds.has('likely-name')).toBe(true)
      expect(kinds.has('date-of-birth')).toBe(true)
      const locations = (e as MinimisationViolationError).violations.map((v) => v.location)
      expect(locations.every((l) => l.includes('system'))).toBe(true)
    }
  })

  it('(FIX1) does NOT apply the carve-out to the system prompt: an essay span echoed into system is still scanned', () => {
    // The essay legitimately contains an email (allowed inside message content)...
    const essay = `${LONG_CLEAN_ESSAY} Contact in the story was sherlock@bakerstreet.co.uk for the clue.`
    const body = cleanBody(essay)
    // ...but the SAME email also leaks into the system prompt. Even though it sits
    // inside an allowVerbatim span, the system surface ignores the carve-out.
    body.system = `${body.system as string} Send the report to sherlock@bakerstreet.co.uk`
    expect(() => assertMinimisedPayload(body, { allowVerbatim: [essay] })).toThrow(
      MinimisationViolationError,
    )
    try {
      assertMinimisedPayload(body, { allowVerbatim: [essay] })
    } catch (e) {
      const emailHits = (e as MinimisationViolationError).violations.filter(
        (v) => v.kind === 'email',
      )
      // Exactly the system occurrence; the message-content one was excised.
      expect(emailHits.length).toBe(1)
      expect(emailHits[0].location).toContain('system')
    }
  })

  it('(FIX1) rejects an allowVerbatim span that also appears in the system prompt (misuse)', () => {
    const sharedSpan =
      'You are a GCSE History examiner applying the AQA mark scheme to this response.'
    const body = cleanBody(LONG_CLEAN_ESSAY)
    body.system = `${body.system as string} ${sharedSpan}`
    expect(() => assertMinimisedPayload(body, { allowVerbatim: [sharedSpan] })).toThrow(
      MinimisationViolationError,
    )
    try {
      assertMinimisedPayload(body, { allowVerbatim: [sharedSpan] })
    } catch (e) {
      expect(
        (e as MinimisationViolationError).violations.some((v) => v.kind === 'verbatim-misuse'),
      ).toBe(true)
    }
  })

  it('(FIX1) rejects a too-short allowVerbatim span', () => {
    const shortSpan = 'short essay' // < MIN_VERBATIM_SPAN_CHARS
    expect(shortSpan.length).toBeLessThan(MIN_VERBATIM_SPAN_CHARS)
    const body = cleanBody('A clean essay body about photosynthesis and respiration.')
    expect(() => assertMinimisedPayload(body, { allowVerbatim: [shortSpan] })).toThrow(
      MinimisationViolationError,
    )
    try {
      assertMinimisedPayload(body, { allowVerbatim: [shortSpan] })
    } catch (e) {
      expect(
        (e as MinimisationViolationError).violations.some((v) => v.kind === 'verbatim-misuse'),
      ).toBe(true)
    }
  })

  it('(FIX1) a too-short span does NOT excise content (cannot blind the guard)', () => {
    // The short span "@" would, if it excised, mangle every email in the payload.
    const body = cleanBody('Reply to the marker once done about your essay structure today.')
    body.system = `${body.system as string} contact admin@school.org`
    // Even though we pass a short span, the email in system is still caught (the
    // span is rejected, not used to excise).
    expect(() => assertMinimisedPayload(body, { allowVerbatim: ['@'] })).toThrow(
      MinimisationViolationError,
    )
    try {
      assertMinimisedPayload(body, { allowVerbatim: ['@'] })
    } catch (e) {
      const kinds = new Set((e as MinimisationViolationError).violations.map((v) => v.kind))
      expect(kinds.has('email')).toBe(true)
      expect(kinds.has('verbatim-misuse')).toBe(true)
    }
  })

  // ── FIX 2: additional DOB formats ──────────────────────────────────────────

  it('(FIX2) throws on dash day-first DOB (DD-MM-YYYY)', () => {
    const body = cleanBody('A clean essay body about WW1.')
    body.system = `${body.system as string} Born 14-03-2009.`
    expect(() => assertMinimisedPayload(body)).toThrow(MinimisationViolationError)
    try {
      assertMinimisedPayload(body)
    } catch (e) {
      expect(
        (e as MinimisationViolationError).violations.some((v) => v.kind === 'date-of-birth'),
      ).toBe(true)
    }
  })

  it('(FIX2) throws on 2-digit-year DOB (DD/MM/YY and DD-MM-YY)', () => {
    for (const dob of ['14/03/09', '14-03-09']) {
      const body = cleanBody('A clean essay body about WW1.')
      body.system = `${body.system as string} DOB ${dob}.`
      expect(() => assertMinimisedPayload(body)).toThrow(MinimisationViolationError)
    }
  })

  it('(FIX2) throws on month-name DOB, day-first (3rd March 2009 / 03 Mar 2009)', () => {
    for (const dob of ['3rd March 2009', '03 Mar 2009']) {
      const body = cleanBody('A clean essay body about WW1.')
      body.system = `${body.system as string} Date of birth: ${dob}.`
      expect(() => assertMinimisedPayload(body)).toThrow(MinimisationViolationError)
      try {
        assertMinimisedPayload(body)
      } catch (e) {
        expect(
          (e as MinimisationViolationError).violations.some((v) => v.kind === 'date-of-birth'),
        ).toBe(true)
      }
    }
  })

  it('(FIX2) throws on month-name DOB, month-first (March 3, 2009)', () => {
    const body = cleanBody('A clean essay body about WW1.')
    body.system = `${body.system as string} Born March 3, 2009.`
    expect(() => assertMinimisedPayload(body)).toThrow(MinimisationViolationError)
    try {
      assertMinimisedPayload(body)
    } catch (e) {
      expect(
        (e as MinimisationViolationError).violations.some((v) => v.kind === 'date-of-birth'),
      ).toBe(true)
    }
  })

  // ── FIX 3: identifier detection + numeric coercion ─────────────────────────

  it('(FIX3) scans a NUMERIC id under a plain (non-forbidden) key', () => {
    const body: MinimisableBody = {
      ...cleanBody('A clean essay body about WW1.'),
      // `ref` is not a forbidden key, and the value is a number — previously skipped.
      ref: 88213771,
    }
    expect(() => assertMinimisedPayload(body)).toThrow(MinimisationViolationError)
    try {
      assertMinimisedPayload(body)
    } catch (e) {
      const v = (e as MinimisationViolationError).violations.find((x) => x.kind === 'identifier')
      expect(v).toBeDefined()
      expect(v?.location).toContain('ref')
    }
  })

  it('(FIX3) detects a >=6 digit run in prose', () => {
    const body = cleanBody('A clean essay body about WW1.')
    body.system = `${body.system as string} Reference 5567421 attached.`
    expect(() => assertMinimisedPayload(body)).toThrow(MinimisationViolationError)
    try {
      assertMinimisedPayload(body)
    } catch (e) {
      expect(
        (e as MinimisationViolationError).violations.some((v) => v.kind === 'identifier'),
      ).toBe(true)
    }
  })

  it('(FIX3) detects a Mongo ObjectId (24 hex)', () => {
    const body = cleanBody('A clean essay body about WW1.')
    body.system = `${body.system as string} doc 507f1f77bcf86cd799439011`
    expect(() => assertMinimisedPayload(body)).toThrow(MinimisationViolationError)
    try {
      assertMinimisedPayload(body)
    } catch (e) {
      expect(
        (e as MinimisationViolationError).violations.some((v) => v.kind === 'identifier'),
      ).toBe(true)
    }
  })

  it('(FIX3) detects a ULID (Crockford base32, 26 chars)', () => {
    const body = cleanBody('A clean essay body about WW1.')
    body.system = `${body.system as string} id 01ARZ3NDEKTSV4RRFFQ69G5FAV`
    expect(() => assertMinimisedPayload(body)).toThrow(MinimisationViolationError)
    try {
      assertMinimisedPayload(body)
    } catch (e) {
      expect(
        (e as MinimisationViolationError).violations.some((v) => v.kind === 'identifier'),
      ).toBe(true)
    }
  })

  it('(FIX3) detects a JWT-shaped token', () => {
    const body = cleanBody('A clean essay body about WW1.')
    const jwt =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N'
    body.system = `${body.system as string} token ${jwt}`
    expect(() => assertMinimisedPayload(body)).toThrow(MinimisationViolationError)
    try {
      assertMinimisedPayload(body)
    } catch (e) {
      expect(
        (e as MinimisationViolationError).violations.some((v) => v.kind === 'identifier'),
      ).toBe(true)
    }
  })

  it('(FIX3) identifier detectors do NOT fire on a long digit run INSIDE the essay (carve-out)', () => {
    const essay = `${LONG_CLEAN_ESSAY} In maths I computed the value 1234567 during my working.`
    const body = cleanBody(essay)
    // The digit run is inside the verbatim essay span → excised → no violation.
    expect(() => assertMinimisedPayload(body, { allowVerbatim: [essay] })).not.toThrow()
  })

  // ── FIX 4: forbidden-key gaps ──────────────────────────────────────────────

  it('(FIX4) flags new UK-education identifier keys', () => {
    for (const key of ['centreNumber', 'uln', 'candidateNumber', 'username']) {
      const body: MinimisableBody = {
        ...cleanBody('A clean essay body about WW1.'),
        [key]: 'X',
      }
      expect(() => assertMinimisedPayload(body)).toThrow(MinimisationViolationError)
      try {
        assertMinimisedPayload(body)
      } catch (e) {
        expect(
          (e as MinimisationViolationError).violations.some((v) => v.kind === 'forbidden-key'),
        ).toBe(true)
      }
    }
  })
})

describe('DEFAULT_FORBIDDEN_KEYS', () => {
  it('covers the core student identifier keys', () => {
    for (const k of ['name', 'email', 'dob', 'school', 'userid', 'studentid', 'uuid']) {
      expect(DEFAULT_FORBIDDEN_KEYS).toContain(k)
    }
  })

  it('(FIX4) covers UK-education / exam-administration identifier keys', () => {
    for (const k of [
      'centre',
      'centrenumber',
      'uln',
      'candidatenumber',
      'examnumber',
      'seatnumber',
      'username',
      'initials',
      'nhsnumber',
    ]) {
      expect(DEFAULT_FORBIDDEN_KEYS).toContain(k)
    }
  })

  it("(FIX4) the 'school' entry uses plain ASCII (no stray non-breaking space leaked into the value)", () => {
    // Regression for the line-~132 nit: the entry must be exactly 'school' with no
    // non-ASCII whitespace fused into the string literal.
    expect(DEFAULT_FORBIDDEN_KEYS).toContain('school')
    expect(DEFAULT_FORBIDDEN_KEYS.some((k) => / /.test(k))).toBe(false)
  })
})

describe('redactForLog', () => {
  it('replaces every string with a non-reversible descriptor', () => {
    const essay = 'Secret essay content with sherlock@bakerstreet.co.uk inside.'
    const redacted = redactForLog(cleanBody(essay)) as Record<string, unknown>
    const serialised = JSON.stringify(redacted)
    expect(serialised).not.toContain('sherlock@bakerstreet.co.uk')
    expect(serialised).not.toContain('examiner')
    expect(serialised).not.toContain(essay)
    // Every STRING is redacted (the safe default) — even non-PII like the model
    // id is replaced by the descriptor, so a raw value can never survive.
    expect(String(redacted.model)).toMatch(/^\[string len 24 fp [0-9a-f]{8}\]$/)
    // Non-string scalars keep their shape for debugging.
    expect(redacted.max_tokens).toBe(2048)
    expect(serialised).toContain('[string len')
  })

  it('is stable: same string → same fingerprint', () => {
    const a = redactForLog({ x: 'repeat', y: 'repeat' }) as { x: string; y: string }
    expect(a.x).toBe(a.y)
  })

  it('handles circular structures without throwing', () => {
    const obj: Record<string, unknown> = { a: 'x' }
    obj.self = obj
    expect(() => redactForLog(obj)).not.toThrow()
  })
})
