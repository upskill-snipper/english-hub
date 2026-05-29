// ─── resolvePack unit tests (doc 10 §1.2/§2.2 Step 3 acceptance; doc 11 §2.4) ─────
//
// These tests lock in the CORE FAIL-CLOSED GUARANTEE the engine was built to
// provide: the soft-null loader miss must become a typed THROW at the resolve seam,
// so a bare null pack can never reach the marker (NPE / skipped grounding / mark
// without a rubric). They are OFFLINE + DETERMINISTIC (no model, no I/O beyond the
// in-repo loader registry).
// ──────────────────────────────────────────────────────────────────────────────

import { describe, it, expect } from 'vitest'

import { resolvePack, resolvePackFn } from '@/lib/marking/engine/resolve-pack'
import { RoutingError } from '@/lib/marking/engine/router'
import { listMarkSchemeIds } from '@/lib/marking/mark-schemes'
import type { PackResolveRequest } from '@/lib/marking/engine/types'

/** Build a resolve request with sensible defaults. */
function req(partial: Partial<PackResolveRequest>): PackResolveRequest {
  return { area: 'ielts', taskType: 'IELTS_Writing_Task2', ...partial }
}

// ════════════════════════════════════════════════════════════════════════════════
// The headline guarantee: a miss FAILS CLOSED with a typed error, never null
// ════════════════════════════════════════════════════════════════════════════════

describe('resolvePack — fail-closed on miss (NEVER returns null)', () => {
  it('throws NO_PACK for an unknown area/taskType route (not null, not a marked result)', async () => {
    await expect(
      resolvePack(req({ area: 'totally_unknown_area', taskType: 'whatever' })),
    ).rejects.toMatchObject({ code: 'NO_PACK' })
  })

  it('throws NO_PACK for the IELTS (a,t,l) path because the in-repo pack is draft/unverified', async () => {
    // The IELTS WT2 stub is status:'draft', verified:false (doc 11 §3), so it is
    // REFUSED on the version-resolution path until a human publishes it — proving
    // the published+verified gate (doc 11 §2.4) and the fail-closed seam.
    await expect(
      resolvePack(req({ area: 'ielts', taskType: 'IELTS_Writing_Task2' })),
    ).rejects.toMatchObject({ code: 'NO_PACK' })
  })

  it('the thrown value is a real RoutingError instance with a typed code', async () => {
    try {
      await resolvePack(req({ area: 'ielts', taskType: 'IELTS_Writing_Task2' }))
      expect.unreachable('resolvePack must fail closed, not return')
    } catch (err) {
      expect(err).toBeInstanceOf(RoutingError)
      expect((err as RoutingError).code).toBe('NO_PACK')
      // The offending route is surfaced for a clear 4xx body / observability.
      expect((err as RoutingError).offendingKey).toBeTruthy()
    }
  })

  it('never resolves to a null/undefined pack on any miss', async () => {
    const result = await resolvePack(
      req({ area: 'ielts', taskType: 'IELTS_Writing_Task2', packPin: 'ielts_writing_v2025.1' }),
    )
    // The only way to GET a result is a real, loaded pack — assert it is present.
    expect(result).toBeDefined()
    expect(result.kind).toBe('pack')
    if (result.kind === 'pack') {
      expect(result.pack).not.toBeNull()
      expect(result.pack.manifest.fullId).toBe('ielts_writing_v2025.1')
    }
  })
})

// ════════════════════════════════════════════════════════════════════════════════
// Pin path (mode 3): exact version, bypasses publish gate, but must load
// ════════════════════════════════════════════════════════════════════════════════

describe('resolvePack — packPin (mode 3)', () => {
  it('resolves a valid pin to the exact pack, bypassing the publish/verified gate', async () => {
    // The stub is draft/unverified yet a PIN must still resolve it for exact
    // reproducibility / audit (doc 11 §2.4).
    const result = await resolvePack(req({ packPin: 'ielts_writing_v2025.1' }))
    expect(result.kind).toBe('pack')
    if (result.kind === 'pack') {
      expect(result.pack.manifest.fullId).toBe('ielts_writing_v2025.1')
      expect(result.ref.fullId).toBe('ielts_writing_v2025.1')
      expect(result.ref.board).toBe('ielts')
    }
  })

  it('throws INVALID_METADATA for an empty/blank pin (caller pinned to "nothing")', async () => {
    await expect(resolvePack(req({ packPin: '   ' }))).rejects.toMatchObject({
      code: 'INVALID_METADATA',
    })
  })

  it('throws INVALID_METADATA for a pin that does not load (wrong exact key)', async () => {
    // Distinct from NO_PACK: the caller asserted an EXACT version that is wrong.
    await expect(resolvePack(req({ packPin: 'ielts_writing_v9999.9' }))).rejects.toMatchObject({
      code: 'INVALID_METADATA',
    })
  })

  it('throws INVALID_METADATA for a structurally unparseable pin', async () => {
    await expect(resolvePack(req({ packPin: 'garbage' }))).rejects.toMatchObject({
      code: 'INVALID_METADATA',
    })
  })
})

// ════════════════════════════════════════════════════════════════════════════════
// Legacy GCSE branch: getMarkScheme soft-null → fail-closed NO_PACK
// ════════════════════════════════════════════════════════════════════════════════

describe('resolvePack — legacy GCSE branch', () => {
  it('resolves a known GCSE resolverKey to a legacy scheme with a provenance ref', async () => {
    const knownKey = listMarkSchemeIds()[0]!
    const result = await resolvePack(
      req({ area: 'gcse', taskType: 'Essay', resolverKey: knownKey }),
    )
    expect(result.kind).toBe('legacy')
    if (result.kind === 'legacy') {
      expect(result.scheme.id).toBe(knownKey)
      expect(result.ref.board).toBe('gcse')
      expect(result.ref.fullId).toContain(knownKey)
    }
  })

  it('throws NO_PACK for an unknown GCSE resolverKey (soft-null → fail-closed)', async () => {
    await expect(
      resolvePack(
        req({ area: 'gcse', taskType: 'Essay', resolverKey: 'this-scheme-does-not-exist' }),
      ),
    ).rejects.toMatchObject({ code: 'NO_PACK' })
  })
})

// ════════════════════════════════════════════════════════════════════════════════
// The seam contract export is wired and assignable
// ════════════════════════════════════════════════════════════════════════════════

describe('resolvePackFn (the ResolvePackFn seam)', () => {
  it('is callable and fails closed identically to resolvePack', async () => {
    await expect(
      resolvePackFn(req({ area: 'ielts', taskType: 'IELTS_Writing_Task2' })),
    ).rejects.toMatchObject({ code: 'NO_PACK' })
  })
})
