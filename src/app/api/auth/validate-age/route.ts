import { NextRequest, NextResponse } from 'next/server'
import { calculateAge } from '@/lib/auth'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { z } from 'zod'

// ─── Schema ────────────────────────────────────────────────────────────
const validateAgeSchema = z.object({
  dobDay: z.number().int().min(1).max(31),
  dobMonth: z.number().int().min(1).max(12),
  dobYear: z.number().int().min(1900).max(new Date().getFullYear()),
  parentGuardianEmail: z.string().email().optional(),
})

// ─── Handler ───────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  // P1 (Cycle 2 perf audit): previously used an in-memory Map which is
  // non-functional in Vercel's serverless runtime (per-instance state).
  // Switched to Upstash Redis via the shared rateLimit helper - same
  // pattern as every other auth-adjacent endpoint.
  const ip = getClientIp(request.headers)
  const rl = await rateLimit(`validate-age:${ip}`, {
    limit: 10,
    windowSeconds: 15 * 60,
  })
  if (!rl.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 },
    )
  }

  try {
    const body = await request.json()
    const data = validateAgeSchema.parse(body)

    const age = calculateAge(data.dobYear, data.dobMonth, data.dobDay)

    // Under 13: blocked entirely (UK GDPR digital consent age)
    if (age < 13) {
      return NextResponse.json({ error: 'You must be at least 13 years old' }, { status: 403 })
    }

    // 13-15: requires parent/guardian email
    if (age < 16 && !data.parentGuardianEmail) {
      return NextResponse.json(
        { error: 'Parent/Guardian email required for users under 16' },
        { status: 400 },
      )
    }

    // Valid
    return NextResponse.json({ valid: true, age })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid date of birth.' }, { status: 400 })
    }

    console.error('[ValidateAge] Unexpected error:', error)
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 })
  }
}
