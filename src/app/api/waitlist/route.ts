import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { SUBJECTS, type SubjectId } from '@/data/subjects'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  try {
    // Rate limit: 5 requests per hour per IP
    const ip = getClientIp(req.headers)
    const rl = rateLimit(`waitlist:${ip}`, { limit: 5, windowSeconds: 3600 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await req.json()
    const { email, subject } = body as { email?: string; subject?: string }

    // Validate email
    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    // Validate subject
    if (!subject || !(subject in SUBJECTS)) {
      return NextResponse.json(
        { error: 'Invalid subject.' },
        { status: 400 }
      )
    }

    const subjectConfig = SUBJECTS[subject as SubjectId]

    // Only allow waitlist for subjects that aren't available yet
    if (subjectConfig.available) {
      return NextResponse.json(
        { error: `${subjectConfig.name} is already available! Head to /courses to get started.` },
        { status: 400 }
      )
    }

    const supabase = createServiceRoleClient()

    // Upsert into waitlist table — ignore duplicates
    const { error } = await supabase
      .from('waitlist')
      .upsert(
        {
          email: email.toLowerCase().trim(),
          subject,
          created_at: new Date().toISOString(),
        },
        { onConflict: 'email,subject' }
      )

    if (error) {
      // If the table doesn't exist yet, fall back gracefully
      if (error.code === '42P01') {
        console.warn('[waitlist] Table does not exist yet. Logging to console instead.')
        console.log(`[waitlist] ${email} → ${subject}`)
        return NextResponse.json({
          message: `You're on the ${subjectConfig.name} waitlist! We'll email you when it launches.`,
        })
      }

      console.error('[waitlist] Supabase error:', error)
      return NextResponse.json(
        { error: 'Something went wrong. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: `You're on the ${subjectConfig.name} waitlist! We'll email you when it launches.`,
    })
  } catch (err) {
    console.error('[waitlist] Unexpected error:', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}
