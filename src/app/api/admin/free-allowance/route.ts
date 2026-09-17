/**
 * GET / PUT /api/admin/free-allowance
 *
 * THIS IS THE NO-DEPLOY KNOB.
 *
 * Changing a Vercel environment variable does not affect an existing
 * deployment until it is redeployed, so env vars alone cannot deliver "change
 * the free allowance without shipping". This endpoint writes the
 * `AppConfigSetting` rows that `src/lib/usage/limits.ts` reads with precedence
 * AppConfigSetting > env var > code default, through a 60-second cache. A
 * change made here is live everywhere within a minute, with no build.
 *
 * It is also the rollback: setting `free_allowance.enforced` to false stops the
 * cap refusing anything (counting continues) without a deploy, and
 * `free_allowance.shadow_mode` runs the meter in observe-only mode so the real
 * usage distribution can be measured before a number is chosen.
 *
 * GET returns, for every knob, the value in force and which layer supplied it,
 * so an operator can see at a glance whether a database override is masking an
 * environment variable.
 *
 * Auth: verifyAdmin() - 401 with no session, 403 when not an admin. Every write
 * records the admin email in `updated_by` and an AuditLog entry, because a
 * limit change is the answer to "why was this learner stopped at 4".
 */

import { NextRequest, NextResponse } from 'next/server'
import { verifyAdmin } from '@/lib/admin-auth'
import { prisma } from '@/lib/prisma'
import {
  FLAG_SPECS,
  LIMIT_SPECS,
  getFlag,
  getLimit,
  resetConfigCache,
  type FlagName,
  type LimitName,
} from '@/lib/usage/limits'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const LIMIT_NAMES = Object.keys(LIMIT_SPECS) as LimitName[]
const FLAG_NAMES = Object.keys(FLAG_SPECS) as FlagName[]

/** configKey -> the spec it belongs to, so a PUT can validate before writing. */
const BY_CONFIG_KEY = new Map<
  string,
  { kind: 'limit'; name: LimitName } | { kind: 'flag'; name: FlagName }
>([
  ...LIMIT_NAMES.map(
    (name) => [LIMIT_SPECS[name].configKey, { kind: 'limit' as const, name }] as const,
  ),
  ...FLAG_NAMES.map(
    (name) => [FLAG_SPECS[name].configKey, { kind: 'flag' as const, name }] as const,
  ),
])

export async function GET(_request: NextRequest) {
  const { error: authError } = await verifyAdmin()
  if (authError === 'Unauthorized')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (authError === 'Forbidden') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const overrides = await prisma.appConfigSetting.findMany({
    select: { key: true, value: true, updatedAt: true, updatedBy: true },
  })
  const overrideByKey = new Map(overrides.map((o) => [o.key, o]))

  const limits = await Promise.all(
    LIMIT_NAMES.map(async (name) => {
      const spec = LIMIT_SPECS[name]
      const override = overrideByKey.get(spec.configKey)
      return {
        name,
        configKey: spec.configKey,
        envVar: spec.envVar,
        inForce: await getLimit(name),
        databaseOverride: override?.value ?? null,
        environmentValue: process.env[spec.envVar] ?? null,
        codeDefault: spec.fallback,
        allowedRange: [spec.min, spec.max],
        updatedAt: override?.updatedAt ?? null,
        updatedBy: override?.updatedBy ?? null,
      }
    }),
  )

  const flags = await Promise.all(
    FLAG_NAMES.map(async (name) => {
      const spec = FLAG_SPECS[name]
      const override = overrideByKey.get(spec.configKey)
      return {
        name,
        configKey: spec.configKey,
        envVar: spec.envVar,
        inForce: await getFlag(name),
        databaseOverride: override?.value ?? null,
        environmentValue: process.env[spec.envVar] ?? null,
        codeDefault: spec.fallback,
        updatedAt: override?.updatedAt ?? null,
        updatedBy: override?.updatedBy ?? null,
      }
    }),
  )

  return NextResponse.json({ ok: true, data: { limits, flags } })
}

/**
 * PUT { key, value }
 *
 * `value: null` deletes the override and hands the knob back to the
 * environment variable or the code default.
 */
export async function PUT(request: NextRequest) {
  const { user, error: authError } = await verifyAdmin()
  if (authError === 'Unauthorized')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (authError === 'Forbidden') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON in request body.' }, { status: 400 })
  }

  const { key, value } = (body ?? {}) as { key?: unknown; value?: unknown }
  if (typeof key !== 'string' || !BY_CONFIG_KEY.has(key)) {
    return NextResponse.json(
      { error: 'Unknown key.', allowedKeys: [...BY_CONFIG_KEY.keys()] },
      { status: 400 },
    )
  }

  const target = BY_CONFIG_KEY.get(key)!
  const adminEmail = user?.email?.slice(0, 128) ?? null

  // Clearing an override is a legitimate operation - it hands the knob back to
  // the environment variable or the code default.
  if (value === null) {
    await prisma.appConfigSetting.deleteMany({ where: { key } })
    resetConfigCache()
    await prisma.auditLog.create({
      data: {
        userId: null,
        action: 'FREE_ALLOWANCE_OVERRIDE_CLEARED',
        resource: 'AppConfigSetting',
        resourceId: key,
        details: { clearedBy: adminEmail, clearedAt: new Date().toISOString() },
        ipAddress: 'admin',
      },
    })
    return NextResponse.json({ ok: true, data: { key, value: null } })
  }

  const raw = String(value).trim()

  // Validate HERE as well as at read time. The resolver already ignores an
  // unparseable value rather than throwing, but a knob that silently does
  // nothing is worse than a rejected save: the founder would believe the limit
  // had changed.
  if (target.kind === 'limit') {
    const spec = LIMIT_SPECS[target.name]
    const n = Number(raw)
    if (!Number.isInteger(n) || n < spec.min || n > spec.max) {
      return NextResponse.json(
        { error: `Value must be a whole number between ${spec.min} and ${spec.max}.` },
        { status: 400 },
      )
    }
  } else if (!['true', 'false'].includes(raw.toLowerCase())) {
    return NextResponse.json({ error: "Value must be 'true' or 'false'." }, { status: 400 })
  }

  await prisma.appConfigSetting.upsert({
    where: { key },
    create: { key, value: raw, updatedBy: adminEmail },
    update: { value: raw, updatedBy: adminEmail },
  })

  // Drop this instance's cache immediately so the operator sees the change take
  // effect on their own next request rather than up to 60 seconds later.
  resetConfigCache()

  await prisma.auditLog.create({
    data: {
      userId: null,
      action: 'FREE_ALLOWANCE_OVERRIDE_SET',
      resource: 'AppConfigSetting',
      resourceId: key,
      details: { value: raw, setBy: adminEmail, setAt: new Date().toISOString() },
      ipAddress: 'admin',
    },
  })

  return NextResponse.json({ ok: true, data: { key, value: raw } })
}

async function methodNotAllowed() {
  return NextResponse.json(
    { error: 'GET or PUT only' },
    { status: 405, headers: { Allow: 'GET, PUT' } },
  )
}

export const POST = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed
