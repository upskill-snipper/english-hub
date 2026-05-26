import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// ---------------------------------------------------------------------------
// Mocks
// ---------------------------------------------------------------------------
//
// We mock the Prisma client and the reconcile module. The route handler
// is the unit under test; reconcile correctness is covered separately by
// exercising it through INITIAL_PURCHASE / RENEWAL paths end-to-end
// against a fully mocked Prisma surface.

// Journal-table state - the mock maintains an in-memory row list so
// idempotency tests can exercise the duplicate-detection path.
interface JournalRow {
  id: string
  eventType: string
  appUserId: string
  productId: string | null
  payload: { id?: string; [key: string]: unknown }
  processedAt: Date | null
  processingError: string | null
}

let journalRows: JournalRow[] = []
// User lookup state - the resolveUserId helper inside reconcile calls
// prisma.user.findUnique twice; we flip behaviour based on the appUserId
// the test supplies.
let userFixture: { id: string } | null = { id: 'prisma-user-1' }
// Subscription state - the reconcile branches call findUnique / upsert /
// update. We back them with a tiny in-memory store keyed by userId.
let subscriptionFixture: Record<string, unknown> | null = null
// Captures of the last upsert / update args so tests can assert them.
let lastSubscriptionUpsert: unknown = null
let lastSubscriptionUpdate: unknown = null

const prismaMock = {
  $queryRaw: vi.fn(async (_strings: TemplateStringsArray, ...params: unknown[]) => {
    // Parameter order mirrors the SQL in the route handler:
    //   $1 = app_user_id, $2 = event_type, $3 = payload->>'id'
    const [appUserId, eventType, rcEventId] = params as [string, string, string]
    return journalRows
      .filter(
        (r) =>
          r.appUserId === appUserId &&
          r.eventType === eventType &&
          r.payload.id === rcEventId &&
          r.processedAt !== null,
      )
      .map((r) => ({ id: r.id }))
  }),
  revenueCatEvent: {
    create: vi.fn(
      async ({
        data,
        select: _select,
      }: {
        data: Omit<JournalRow, 'id' | 'processedAt' | 'processingError'>
        select?: unknown
      }) => {
        const row: JournalRow = {
          id: `journal-${journalRows.length + 1}`,
          eventType: data.eventType,
          appUserId: data.appUserId,
          productId: data.productId ?? null,
          payload: data.payload as JournalRow['payload'],
          processedAt: null,
          processingError: null,
        }
        journalRows.push(row)
        return { id: row.id }
      },
    ),
    update: vi.fn(async ({ where, data }: { where: { id: string }; data: Partial<JournalRow> }) => {
      const row = journalRows.find((r) => r.id === where.id)
      if (row) {
        if (data.processedAt !== undefined) row.processedAt = data.processedAt as Date | null
        if (data.processingError !== undefined)
          row.processingError = data.processingError as string | null
      }
      return row as unknown
    }),
  },
  user: {
    findUnique: vi.fn(async () => userFixture),
  },
  subscription: {
    findUnique: vi.fn(async () => subscriptionFixture),
    upsert: vi.fn(
      async (args: {
        create: Record<string, unknown>
        update: Record<string, unknown>
        where: { userId: string }
      }) => {
        lastSubscriptionUpsert = args
        const row = {
          id: 'sub-1',
          userId: args.where.userId,
          ...(subscriptionFixture ?? {}),
          ...args.create,
          ...args.update,
        }
        subscriptionFixture = row
        return row
      },
    ),
    create: vi.fn(async (args: { data: Record<string, unknown> }) => {
      const row = { id: 'sub-1', ...args.data }
      subscriptionFixture = row
      return row
    }),
    update: vi.fn(async (args: { where: { userId: string }; data: Record<string, unknown> }) => {
      lastSubscriptionUpdate = args
      const row = {
        ...(subscriptionFixture ?? { id: 'sub-1', userId: args.where.userId }),
        ...args.data,
      }
      subscriptionFixture = row
      return row
    }),
  },
}

vi.mock('@/lib/prisma', () => ({
  prisma: prismaMock,
}))

// @sentry/nextjs is a no-op in tests.
vi.mock('@sentry/nextjs', () => ({
  addBreadcrumb: vi.fn(),
  captureException: vi.fn(),
}))

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function buildRequest(body: string, authHeader: string | null): NextRequest {
  const headers = new Headers({ 'content-type': 'application/json' })
  if (authHeader) headers.set('authorization', authHeader)
  return new NextRequest('http://localhost/api/revenuecat/webhook', {
    method: 'POST',
    headers,
    body,
  })
}

function makePayload(
  type: string,
  overrides: Record<string, unknown> = {},
  eventOverrides: Record<string, unknown> = {},
) {
  const base = {
    api_version: '1.0',
    event: {
      id: `evt_${Math.random().toString(36).slice(2, 10)}`,
      app_user_id: '11111111-1111-1111-1111-111111111111',
      type,
      store: 'APP_STORE',
      environment: 'SANDBOX',
      event_timestamp_ms: Date.now(),
      product_id: 'com.upskillenergy.theenglishhub.student.monthly',
      purchased_at_ms: 1_700_000_000_000,
      expiration_at_ms: 1_702_678_400_000,
      original_purchase_date_ms: 1_700_000_000_000,
      is_trial_period: false,
      ...eventOverrides,
    },
    ...overrides,
  }
  return base
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('RevenueCat Webhook POST handler', () => {
  let POST: (req: NextRequest) => Promise<Response>

  const VALID_AUTH = 'Bearer whsec_rc_test'

  beforeEach(async () => {
    vi.resetModules()
    vi.clearAllMocks()
    journalRows = []
    userFixture = { id: 'prisma-user-1' }
    subscriptionFixture = null
    lastSubscriptionUpsert = null
    lastSubscriptionUpdate = null
    process.env.REVENUECAT_WEBHOOK_SECRET = 'whsec_rc_test'

    const mod = await import('@/app/api/revenuecat/webhook/route')
    POST = mod.POST as unknown as (req: NextRequest) => Promise<Response>
  })

  // ── Signature verification ──────────────────────────────────────────

  it('returns 401 when signature is invalid', async () => {
    const res = await POST(
      buildRequest(JSON.stringify(makePayload('INITIAL_PURCHASE')), 'Bearer wrong_secret'),
    )
    expect(res.status).toBe(401)
    const body = (await res.json()) as { ok: boolean; error: { code: string } }
    expect(body.ok).toBe(false)
    expect(body.error.code).toBe('invalid_signature')
  })

  it('returns 401 when Authorization header is missing', async () => {
    const res = await POST(buildRequest(JSON.stringify(makePayload('INITIAL_PURCHASE')), null))
    expect(res.status).toBe(401)
  })

  it('returns 500 when REVENUECAT_WEBHOOK_SECRET is not configured', async () => {
    delete process.env.REVENUECAT_WEBHOOK_SECRET
    // Re-import to pick up the missing env var.
    vi.resetModules()
    const mod = await import('@/app/api/revenuecat/webhook/route')
    const handler = mod.POST as unknown as (req: NextRequest) => Promise<Response>
    const res = await handler(
      buildRequest(JSON.stringify(makePayload('INITIAL_PURCHASE')), VALID_AUTH),
    )
    expect(res.status).toBe(500)
    const body = (await res.json()) as { ok: boolean; error: { code: string } }
    expect(body.error.code).toBe('not_configured')
  })

  // ── Payload validation ─────────────────────────────────────────────

  it('returns 422 when payload is missing app_user_id', async () => {
    const payload = makePayload('INITIAL_PURCHASE', {}, {})
    // @ts-expect-error - deliberately malformed
    delete payload.event.app_user_id
    const res = await POST(buildRequest(JSON.stringify(payload), VALID_AUTH))
    expect(res.status).toBe(422)
    const body = (await res.json()) as { ok: boolean; error: { code: string } }
    expect(body.error.code).toBe('invalid_payload')
  })

  it('returns 422 on non-JSON body', async () => {
    const res = await POST(buildRequest('not json at all', VALID_AUTH))
    expect(res.status).toBe(422)
    const body = (await res.json()) as { ok: boolean; error: { code: string } }
    expect(body.error.code).toBe('invalid_json')
  })

  // ── Unknown event type (but valid envelope) ────────────────────────

  it('returns 422 on unknown event type (discriminator mismatch)', async () => {
    // The discriminated union rejects any `type` outside the declared
    // enum; this protects us from silently processing an RC event type
    // we have not modelled.
    const res = await POST(buildRequest(JSON.stringify(makePayload('NOT_A_REAL_TYPE')), VALID_AUTH))
    expect(res.status).toBe(422)
  })

  it('accepts TEST event and journals it without touching Subscription', async () => {
    const res = await POST(buildRequest(JSON.stringify(makePayload('TEST')), VALID_AUTH))
    expect(res.status).toBe(200)
    const body = (await res.json()) as { ok: boolean; data: { skipped: boolean } }
    expect(body.ok).toBe(true)
    expect(body.data.skipped).toBe(true)
    // Journalled exactly once.
    expect(prismaMock.revenueCatEvent.create).toHaveBeenCalledTimes(1)
    // No Subscription write.
    expect(prismaMock.subscription.upsert).not.toHaveBeenCalled()
    expect(prismaMock.subscription.update).not.toHaveBeenCalled()
  })

  // ── INITIAL_PURCHASE ───────────────────────────────────────────────

  it('handles INITIAL_PURCHASE and upserts a Subscription row', async () => {
    const res = await POST(
      buildRequest(JSON.stringify(makePayload('INITIAL_PURCHASE')), VALID_AUTH),
    )
    expect(res.status).toBe(200)
    expect(prismaMock.subscription.upsert).toHaveBeenCalledTimes(1)
    const args = lastSubscriptionUpsert as { create: Record<string, unknown> }
    expect(args.create.userId).toBe('prisma-user-1')
    expect(args.create.status).toBe('ACTIVE')
    expect(args.create.platform).toBe('IOS')
    expect(args.create.revenuecatAppUserId).toBe('11111111-1111-1111-1111-111111111111')
    // Journal row was stamped processed.
    expect(journalRows[0]?.processedAt).not.toBeNull()
  })

  it('marks INITIAL_PURCHASE with is_trial_period=true as TRIALING', async () => {
    const res = await POST(
      buildRequest(
        JSON.stringify(makePayload('INITIAL_PURCHASE', {}, { is_trial_period: true })),
        VALID_AUTH,
      ),
    )
    expect(res.status).toBe(200)
    const args = lastSubscriptionUpsert as { create: Record<string, unknown> }
    expect(args.create.status).toBe('TRIALING')
  })

  // ── RENEWAL ────────────────────────────────────────────────────────

  it('handles RENEWAL by updating the existing Subscription', async () => {
    // Seed an existing subscription row.
    subscriptionFixture = {
      id: 'sub-1',
      userId: 'prisma-user-1',
      status: 'TRIALING',
      currentPeriodEnd: new Date(1_700_000_000_000),
    }
    const res = await POST(buildRequest(JSON.stringify(makePayload('RENEWAL')), VALID_AUTH))
    expect(res.status).toBe(200)
    expect(prismaMock.subscription.update).toHaveBeenCalledTimes(1)
    const args = lastSubscriptionUpdate as { data: Record<string, unknown> }
    expect(args.data.status).toBe('ACTIVE')
    expect(args.data.cancelledAt).toBeNull()
  })

  // ── Idempotency ────────────────────────────────────────────────────

  it('returns 200 no-op on duplicate event.id', async () => {
    // Pre-seed a processed journal row with the same RC event id.
    const dupId = 'evt_duplicate_xyz'
    journalRows.push({
      id: 'journal-existing',
      eventType: 'INITIAL_PURCHASE',
      appUserId: '11111111-1111-1111-1111-111111111111',
      productId: 'com.upskillenergy.theenglishhub.student.monthly',
      payload: { id: dupId },
      processedAt: new Date(),
      processingError: null,
    })
    const payload = makePayload('INITIAL_PURCHASE', {}, { id: dupId })
    const res = await POST(buildRequest(JSON.stringify(payload), VALID_AUTH))
    expect(res.status).toBe(200)
    const body = (await res.json()) as { ok: boolean; data: { deduped: boolean } }
    expect(body.data.deduped).toBe(true)
    // Reconcile should not have been invoked.
    expect(prismaMock.subscription.upsert).not.toHaveBeenCalled()
    expect(prismaMock.revenueCatEvent.create).not.toHaveBeenCalled()
  })

  // ── Unknown userId ─────────────────────────────────────────────────

  it('returns 200 (no error) when app_user_id does not resolve to a User', async () => {
    userFixture = null
    const res = await POST(
      buildRequest(JSON.stringify(makePayload('INITIAL_PURCHASE')), VALID_AUTH),
    )
    expect(res.status).toBe(200)
    const body = (await res.json()) as { ok: boolean; data: { skipped: boolean } }
    expect(body.data.skipped).toBe(true)
    // Journal still recorded.
    expect(prismaMock.revenueCatEvent.create).toHaveBeenCalledTimes(1)
    // No Subscription mutation.
    expect(prismaMock.subscription.upsert).not.toHaveBeenCalled()
    expect(prismaMock.subscription.update).not.toHaveBeenCalled()
  })

  // ── Method not allowed ─────────────────────────────────────────────

  it('GET returns 405', async () => {
    const mod = await import('@/app/api/revenuecat/webhook/route')
    const res = await (mod.GET as unknown as () => Promise<Response>)()
    expect(res.status).toBe(405)
    expect(res.headers.get('allow')).toBe('POST')
  })
})
