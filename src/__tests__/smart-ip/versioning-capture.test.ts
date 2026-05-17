// ─── Smart-IP · captureVersions (provenance upsert) ──────────────────────────
//
// src/lib/marking/versioning-capture.ts. The Supabase client is a *parameter*,
// so we hand-build a programmable stub (no @/lib/supabase mock needed). We mock
// @/lib/anthropic-client (ANTHROPIC_MODEL) and @/lib/ai-audit-log (hashAuditInput).
//
// Contract under test:
//   • select-existing-first; only INSERT when absent
//   • returns nulls (never throws) on ANY client failure
//   • content-hash keys are stable & derived deterministically
//   • a 23505 unique-violation race re-selects and converges
// ────────────────────────────────────────────────────────────────────────────

import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('@/lib/anthropic-client', () => ({ ANTHROPIC_MODEL: 'claude-test-model' }))
vi.mock('@/lib/ai-audit-log', () => ({ hashAuditInput: (v: string) => `HASH<${v}>` }))

import { captureVersions } from '@/lib/marking/versioning-capture'

// ── Programmable Supabase client stub ────────────────────────────────────────
// Per-table behaviour: selectResult (for the existing-row probe) and
// insertResult (for the .insert(...).select('id').single()).

interface TableBehaviour {
  selectResult?: { data: unknown; error: unknown }
  insertResult?: { data: unknown; error: unknown }
  throwOnSelect?: boolean
  throwOnInsert?: boolean
}

function buildClient(behaviour: Record<string, TableBehaviour>) {
  const selects: Record<string, Array<Record<string, string>>> = {}
  const inserts: Record<string, Record<string, unknown>[]> = {}

  const client = {
    from(table: string) {
      const b = behaviour[table] ?? {}
      const eqMatch: Record<string, string> = {}
      const q: Record<string, unknown> = {}

      q.select = () => q
      q.eq = (k: string, v: string) => {
        eqMatch[k] = v
        return q
      }
      q.limit = () => q
      q.maybeSingle = async () => {
        if (b.throwOnSelect) throw new Error('select boom')
        ;(selects[table] ??= []).push({ ...eqMatch })
        return b.selectResult ?? { data: null, error: null }
      }
      q.insert = (row: Record<string, unknown>) => {
        ;(inserts[table] ??= []).push(row)
        return {
          select: () => ({
            single: async () => {
              if (b.throwOnInsert) throw new Error('insert boom')
              return b.insertResult ?? { data: null, error: null }
            },
          }),
        }
      }
      return q
    },
  }
  return { client, selects, inserts }
}

const INPUT = {
  promptText: 'SYSTEM\n\nUSER',
  markSchemeId: 'aqa-lit-p1',
  schemeVersion: 'v2.0',
  examBoard: 'AQA',
  qualification: 'GCSE',
}

beforeEach(() => vi.clearAllMocks())

describe('captureVersions — select-existing then insert', () => {
  it('returns existing ids WITHOUT inserting when rows already exist', async () => {
    const { client, inserts } = buildClient({
      model_versions: { selectResult: { data: { id: 'mv-1' }, error: null } },
      rubric_versions: { selectResult: { data: { id: 'rv-1' }, error: null } },
      prompt_versions: { selectResult: { data: { id: 'pv-1' }, error: null } },
    })

    const res = await captureVersions(client as never, INPUT)

    expect(res).toEqual({
      modelVersionId: 'mv-1',
      promptVersionId: 'pv-1',
      rubricVersionId: 'rv-1',
    })
    expect(inserts).toEqual({}) // nothing inserted
  })

  it('inserts when absent and returns the new ids; rubric id is threaded into the prompt row', async () => {
    const { client, inserts, selects } = buildClient({
      model_versions: {
        selectResult: { data: null, error: null },
        insertResult: { data: { id: 'mv-new' }, error: null },
      },
      rubric_versions: {
        selectResult: { data: null, error: null },
        insertResult: { data: { id: 'rv-new' }, error: null },
      },
      prompt_versions: {
        selectResult: { data: null, error: null },
        insertResult: { data: { id: 'pv-new' }, error: null },
      },
    })

    const res = await captureVersions(client as never, INPUT)
    expect(res).toEqual({
      modelVersionId: 'mv-new',
      promptVersionId: 'pv-new',
      rubricVersionId: 'rv-new',
    })

    // Model row uses the mocked ANTHROPIC_MODEL for provider/name/version.
    expect(inserts.model_versions[0]).toMatchObject({
      provider: 'anthropic',
      model_name: 'claude-test-model',
      model_version: 'claude-test-model',
      is_active: true,
    })
    // Rubric content_hash = HASH<markSchemeId + schemeVersion>.
    expect(inserts.rubric_versions[0]).toMatchObject({
      mark_scheme_id: 'aqa-lit-p1',
      scheme_version: 'v2.0',
      content_hash: 'HASH<aqa-lit-p1v2.0>',
      exam_board: 'AQA',
      qualification: 'GCSE',
    })
    // Prompt content_hash = HASH<promptText>; carries the resolved rubric id.
    expect(inserts.prompt_versions[0]).toMatchObject({
      prompt_key: 'AQA:aqa-lit-p1',
      content_hash: 'HASH<SYSTEM\n\nUSER>',
      rubric_version_id: 'rv-new',
      active: true,
    })
    // Existence was probed before insert on every table.
    expect(selects.model_versions?.length).toBeGreaterThanOrEqual(1)
    expect(selects.rubric_versions?.length).toBeGreaterThanOrEqual(1)
    expect(selects.prompt_versions?.length).toBeGreaterThanOrEqual(1)
  })

  it('content-hash keys are stable across repeated calls (deterministic)', async () => {
    const mk = () =>
      buildClient({
        model_versions: { selectResult: { data: { id: 'mv' }, error: null } },
        rubric_versions: {
          selectResult: { data: null, error: null },
          insertResult: { data: { id: 'rv' }, error: null },
        },
        prompt_versions: {
          selectResult: { data: null, error: null },
          insertResult: { data: { id: 'pv' }, error: null },
        },
      })

    const a = mk()
    await captureVersions(a.client as never, INPUT)
    const b = mk()
    await captureVersions(b.client as never, INPUT)

    expect(a.inserts.rubric_versions[0].content_hash).toBe(
      b.inserts.rubric_versions[0].content_hash,
    )
    expect(a.inserts.prompt_versions[0].content_hash).toBe(
      b.inserts.prompt_versions[0].content_hash,
    )
    // schemeVersion default → 'v1.0' folds into the hash
    const dC = buildClient({
      model_versions: { selectResult: { data: { id: 'mv' }, error: null } },
      rubric_versions: {
        selectResult: { data: null, error: null },
        insertResult: { data: { id: 'rv' }, error: null },
      },
      prompt_versions: {
        selectResult: { data: null, error: null },
        insertResult: { data: { id: 'pv' }, error: null },
      },
    })
    await captureVersions(dC.client as never, { ...INPUT, schemeVersion: '' })
    expect(dC.inserts.rubric_versions[0].content_hash).toBe('HASH<aqa-lit-p1v1.0>')
  })
})

describe('captureVersions — never throws, returns nulls on failure', () => {
  it('select that throws ⇒ that id is null (no exception bubbles)', async () => {
    const { client } = buildClient({
      model_versions: { throwOnSelect: true },
      rubric_versions: { throwOnSelect: true },
      prompt_versions: { throwOnSelect: true },
    })
    const res = await captureVersions(client as never, INPUT)
    expect(res).toEqual({
      modelVersionId: null,
      promptVersionId: null,
      rubricVersionId: null,
    })
  })

  it('insert error that is NOT a unique-violation ⇒ null id', async () => {
    const { client } = buildClient({
      model_versions: {
        selectResult: { data: null, error: null },
        insertResult: { data: null, error: { code: '42501', message: 'rls' } },
      },
      rubric_versions: { selectResult: { data: { id: 'rv' }, error: null } },
      prompt_versions: { selectResult: { data: { id: 'pv' }, error: null } },
    })
    const res = await captureVersions(client as never, INPUT)
    expect(res.modelVersionId).toBeNull()
    expect(res.rubricVersionId).toBe('rv')
    expect(res.promptVersionId).toBe('pv')
  })

  it('insert throwing ⇒ null id, no throw', async () => {
    const { client } = buildClient({
      model_versions: { selectResult: { data: null, error: null }, throwOnInsert: true },
      rubric_versions: { selectResult: { data: { id: 'rv' }, error: null } },
      prompt_versions: { selectResult: { data: { id: 'pv' }, error: null } },
    })
    const res = await captureVersions(client as never, INPUT)
    expect(res.modelVersionId).toBeNull()
  })

  it('a select that returns a Postgres error object ⇒ null (treated as absent)', async () => {
    const { client } = buildClient({
      model_versions: { selectResult: { data: null, error: { message: 'boom' } } },
      rubric_versions: { selectResult: { data: null, error: { message: 'boom' } } },
      prompt_versions: { selectResult: { data: null, error: { message: 'boom' } } },
      // no insertResult ⇒ insert returns {data:null,error:null} ⇒ null id
    })
    const res = await captureVersions(client as never, INPUT)
    expect(res).toEqual({
      modelVersionId: null,
      promptVersionId: null,
      rubricVersionId: null,
    })
  })
})

describe('captureVersions — unique-violation race', () => {
  it('23505 on insert ⇒ re-selects and converges on the existing row', async () => {
    // selectResult is consulted twice: first (absent) → insert → 23505 →
    // re-select returns the row. Our stub returns the SAME selectResult each
    // call, so model the realistic "lost the race" by having select resolve to
    // the row and insert to 23505: the first probe finds it and we never insert.
    // To exercise the *re-select* path we instead make select return null but
    // flip behaviour: simplest deterministic check is that a 23505 does not
    // throw and does not surface as a hard null when the row exists.
    let modelSelectCalls = 0
    const client = {
      from(table: string) {
        const q: Record<string, unknown> = {}
        q.select = () => q
        q.eq = () => q
        q.limit = () => q
        q.maybeSingle = async () => {
          if (table === 'model_versions') {
            modelSelectCalls++
            // 1st probe: absent → forces insert. 2nd (post-race): present.
            return modelSelectCalls === 1
              ? { data: null, error: null }
              : { data: { id: 'mv-raced' }, error: null }
          }
          return { data: { id: `${table}-existing` }, error: null }
        }
        q.insert = () => ({
          select: () => ({
            single: async () => ({ data: null, error: { code: '23505' } }),
          }),
        })
        return q
      },
    }
    const res = await captureVersions(client as never, INPUT)
    expect(res.modelVersionId).toBe('mv-raced')
    expect(modelSelectCalls).toBe(2) // probed, then re-selected after 23505
  })
})
