import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

const VALID_SUBJECTS = [
  'General Enquiry',
  'Technical Support',
  'Billing',
  'School/Institutional',
  'Partnership',
  'Feedback',
]

interface ContactBody {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    // ── Rate limit: 5 per IP per hour ───────────────────
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`contact:${ip}`, { limit: 5, windowSeconds: 3600 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    // ── Parse body ──────────────────────────────────────
    let body: ContactBody
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    // ── Validate ────────────────────────────────────────
    const errors: string[] = []

    if (!body.name || typeof body.name !== 'string' || body.name.trim().length < 2 || body.name.trim().length > 100) {
      errors.push('Name must be 2–100 characters')
    }

    if (!body.email || typeof body.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      errors.push('A valid email address is required')
    }

    if (!body.subject || !VALID_SUBJECTS.includes(body.subject)) {
      errors.push('Please select a valid subject')
    }

    if (!body.message || typeof body.message !== 'string' || body.message.trim().length < 10 || body.message.trim().length > 2000) {
      errors.push('Message must be 10–2000 characters')
    }

    if (errors.length > 0) {
      return NextResponse.json({ error: errors[0] }, { status: 400 })
    }

    // ── Log contact submission ──────────────────────────
    // TODO: Send email via Resend
    // TODO: Store in Supabase contact_messages table
    console.log('[api/contact] Submission received', {
      subject: body.subject,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[api/contact] Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
