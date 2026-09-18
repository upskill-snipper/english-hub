import { describe, it, expect } from 'vitest'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'
import { EXAMINER_PACKS } from '../registry'
import {
  VERIFIED_SPECS,
  KNOWN_TOTAL_MISMATCHES,
  isSpecVerified,
  verificationSentence,
} from '../verification'

/**
 * Exam-board correctness.
 *
 * The owner's instruction on this area was "This needs to be 100%". It is not
 * 100% and these tests are what stop the product claiming otherwise.
 *
 * Until 18 September 2026 the examiner tool derived a pack for all 21
 * registered schemes and told the model "PAPER STRUCTURE AND GRIDS (verbatim
 * from the published scheme)" for every one, while the provenance shown to
 * teachers read "Mark ranges and descriptors are the board's own". Auditing the
 * corpus that day found two concrete defects, so the claim was false in fact
 * and not merely unsupported:
 *
 *   • aqa-lang-paper1's structure objective carried id 'AO3'. AQA assesses
 *     structure under AO2 and does not assess AO3 on Paper 1 at all.
 *   • eduqas-lang-comp1 and comp2 declare 80-mark papers whose questions sum
 *     to 75.
 *
 * These tests pin the honest state: what has been checked, what has not, and
 * which arithmetic contradictions are known. Every one of them is designed to
 * fail when someone widens a claim without doing the work behind it.
 */

const ALL_SCHEMES = Object.values(MARK_SCHEMES)

// ─── The claim can only narrow by accident, never widen ─────────────────

describe('the verified set', () => {
  it('names only schemes that actually exist', () => {
    for (const id of Object.keys(VERIFIED_SPECS)) {
      expect(
        MARK_SCHEMES,
        `${id} is marked verified but is not a registered scheme`,
      ).toHaveProperty(id)
    }
  })

  it('is exactly the three papers checked on 18 September 2026', () => {
    // Pinned deliberately. Adding a paper here is a claim about the real world
    // and should require deleting this assertion on purpose, in a commit that
    // also carries the evidence.
    expect(Object.keys(VERIFIED_SPECS).sort()).toEqual([
      'aqa-lang-paper1',
      'aqa-lang-paper2',
      'edexcel-igcse-lang-paper1',
    ])
  })

  it('records enough for a human to re-run each check', () => {
    for (const [id, v] of Object.entries(VERIFIED_SPECS)) {
      expect(v.document.length, `${id} has no document`).toBeGreaterThan(20)
      expect(v.issue.length, `${id} has no issue`).toBeGreaterThan(3)
      expect(v.checkedBy.length, `${id} has no checker`).toBeGreaterThan(3)
      expect(v.scope.length, `${id} does not state what the check covered`).toBeGreaterThan(40)
      expect(v.checkedOn, `${id} has a malformed date`).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    }
  })

  it('leaves most of the corpus unverified, and says so', () => {
    const unverified = ALL_SCHEMES.filter((s) => !isSpecVerified(s.id))
    // If this ever reads 0 without the verified set growing, something is
    // short-circuiting isSpecVerified rather than schemes being checked.
    expect(unverified.length).toBeGreaterThan(0)
    expect(unverified.length + Object.keys(VERIFIED_SPECS).length).toBe(ALL_SCHEMES.length)
  })
})

// ─── Arithmetic that does not depend on any board document ──────────────

describe('every paper adds up to its own declared total', () => {
  it.each(ALL_SCHEMES.map((s) => [s.id, s] as const))('%s', (id, scheme) => {
    const sum = scheme.questions.reduce((a, q) => a + q.totalMarks, 0)
    if (id in KNOWN_TOTAL_MISMATCHES) {
      // A recorded defect. This asserts it is STILL broken: fixing the scheme
      // fails here until the entry is removed from KNOWN_TOTAL_MISMATCHES, so
      // a fix cannot land while the tool still calls the paper broken.
      expect(sum, `${id} was fixed - remove it from KNOWN_TOTAL_MISMATCHES`).not.toBe(
        scheme.totalMarks,
      )
      return
    }
    expect(sum, `${id} questions sum to ${sum} but the paper declares ${scheme.totalMarks}`).toBe(
      scheme.totalMarks,
    )
  })

  it('has exactly the two known mismatches, both Eduqas Language', () => {
    expect(Object.keys(KNOWN_TOTAL_MISMATCHES).sort()).toEqual([
      'eduqas-lang-comp1',
      'eduqas-lang-comp2',
    ])
  })

  it('never ships a paper that is both unsound and claimed as verified', () => {
    for (const id of Object.keys(KNOWN_TOTAL_MISMATCHES)) {
      expect(isSpecVerified(id), `${id} has a mark total defect and must not be verified`).toBe(
        false,
      )
    }
  })
})

// ─── Assessment objectives must be ones the board actually uses ─────────

describe('assessment objective codes', () => {
  it('never puts AO3 on an AQA English Language Paper 1', () => {
    // The regression this exists for. AQA assesses structure under AO2; AO3 is
    // comparison across texts and appears only on Paper 2 Q4. The corpus had
    // id 'AO3' on the Paper 1 structure objective while its own label read
    // AO2, so every Q3 commentary ended "appropriate for AO3".
    const p1 = MARK_SCHEMES['aqa-lang-paper1']
    const codes = p1.questions.flatMap((q) => q.assessmentObjectives.map((a) => a.id))
    expect(codes).not.toContain('AO3')
    const q3 = p1.questions.find((q) => q.id === 'Q3')
    expect(q3?.assessmentObjectives.map((a) => a.id)).toEqual(['AO2'])
  })

  it('keeps AO3 on AQA Paper 2 Q4, where comparison really is assessed', () => {
    const q4 = MARK_SCHEMES['aqa-lang-paper2'].questions.find((q) => q.id === 'Q4')
    expect(q4?.assessmentObjectives.map((a) => a.id)).toEqual(['AO3'])
  })

  it('gives every objective a code matching its own label', () => {
    // The Paper 1 defect was visible as id 'AO3' against label 'AO2 - ...'.
    // Cambridge uses R/W codes rather than AO codes, so only AO-coded
    // objectives are checked.
    for (const scheme of ALL_SCHEMES) {
      for (const q of scheme.questions) {
        for (const ao of q.assessmentObjectives) {
          if (!/^AO\d$/.test(ao.id)) continue
          const labelled = ao.label.match(/\bAO\d\b/)?.[0]
          if (!labelled) continue
          expect(labelled, `${scheme.id} ${q.id}: id ${ao.id} but label says ${labelled}`).toBe(
            ao.id,
          )
        }
      }
    }
  })
})

// ─── What the teacher and the model are actually told ───────────────────

describe('what the packs claim', () => {
  it('no longer tells the model any grid is verbatim from the published scheme', () => {
    for (const pack of Object.values(EXAMINER_PACKS)) {
      expect(
        pack.systemPrompt,
        `${pack.id} still claims its grids are verbatim from the published scheme`,
      ).not.toMatch(/verbatim from the published scheme/i)
    }
  })

  it('marks an unverified pack unverified, in the prompt and in the provenance', () => {
    for (const pack of Object.values(EXAMINER_PACKS)) {
      if (isSpecVerified(pack.id) || pack.calibration === 'exemplar-derived') continue
      expect(pack.calibration, `${pack.id}`).toBe('unverified-grid')
      expect(pack.provenance, `${pack.id} provenance`).toMatch(/NOT VERIFIED/)
      expect(pack.systemPrompt, `${pack.id} prompt`).toMatch(/NOT VERIFIED/)
    }
  })

  it('never claims the board owns ranges it has not been checked against', () => {
    for (const pack of Object.values(EXAMINER_PACKS)) {
      if (isSpecVerified(pack.id) || pack.calibration === 'exemplar-derived') continue
      expect(pack.provenance, `${pack.id}`).not.toMatch(/descriptors are the board's own/i)
    }
  })

  it('tells the model to disclose an unverified paper in its own commentary', () => {
    const unverified = Object.values(EXAMINER_PACKS).find(
      (p) => p.calibration === 'unverified-grid',
    )
    expect(unverified).toBeDefined()
    expect(unverified!.systemPrompt).toMatch(/say so in one short sentence/i)
  })

  it('gives a verified pack a sentence naming the document and the date', () => {
    const sentence = verificationSentence('aqa-lang-paper1')
    expect(sentence).toMatch(/8700/)
    expect(sentence).toMatch(/2026-09-18/)
    expect(sentence).not.toMatch(/NOT VERIFIED/)
  })

  it('gives an unregistered id the unverified sentence rather than throwing', () => {
    expect(verificationSentence('no-such-scheme')).toMatch(/NOT VERIFIED/)
  })
})
