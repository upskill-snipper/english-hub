import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { escapeHtml } from '@/lib/email/resend'

// Where school-pilot leads are emailed. Set SCHOOL_INQUIRY_EMAIL in production
// to the address that handles school enquiries; defaults to the monitored
// interim inbox so leads are never silently dropped.
const SCHOOL_INQUIRY_EMAIL = process.env.SCHOOL_INQUIRY_EMAIL || 'cj@upskillenergy.com'

const ROLE_LABELS: Record<string, string> = {
  head_of_english: 'Head of English',
  english_teacher: 'English Teacher',
  head_of_department: 'Head of Department',
  assistant_head: 'Assistant Head',
  deputy_head: 'Deputy Head',
  headteacher: 'Headteacher',
  mat_leader: 'MAT Leader',
  other: 'Other',
}

interface SchoolInquiryBody {
  school_name: string
  teacher_name: string
  email: string
  role: string
  num_students: string
  message?: string
}

const VALID_ROLES = [
  'head_of_english',
  'english_teacher',
  'head_of_department',
  'assistant_head',
  'deputy_head',
  'headteacher',
  'mat_leader',
  'other',
]

const VALID_STUDENT_RANGES = ['1-30', '31-50', '51-100', '101-200', '201-500', '500+']

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 5 inquiries per IP per hour
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-inquiry:${ip}`, { limit: 5, windowSeconds: 3600 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    let body: SchoolInquiryBody
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    // ── Validation ──────────────────────────────────────────
    const errors: string[] = []

    if (!body.school_name || body.school_name.length < 2 || body.school_name.length > 200) {
      errors.push('School name must be 2-200 characters')
    }

    if (!body.teacher_name || body.teacher_name.length < 2 || body.teacher_name.length > 100) {
      errors.push('Your name must be 2-100 characters')
    }

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      errors.push('Valid email address is required')
    }

    if (!body.role || !VALID_ROLES.includes(body.role)) {
      errors.push('Please select a valid role')
    }

    if (!body.num_students || !VALID_STUDENT_RANGES.includes(body.num_students)) {
      errors.push('Please select a valid student range')
    }

    if (body.message && body.message.length > 1000) {
      errors.push('Message must be under 1000 characters')
    }

    if (errors.length > 0) {
      return NextResponse.json({ error: errors[0] }, { status: 400 })
    }

    // ── Store in Supabase ─────────────────────────────────
    const supabaseAdmin = createServiceRoleClient()

    const { error: insertError } = await supabaseAdmin.from('school_inquiries').insert({
      school_name: body.school_name.trim(),
      teacher_name: body.teacher_name.trim(),
      email: body.email.toLowerCase().trim(),
      role: body.role,
      num_students: body.num_students,
      message: body.message?.trim() || null,
      status: 'new',
    })

    if (insertError) {
      // The table is created by supabase/migrations/20260823_school_inquiries.sql,
      // applied at build time. If it is somehow still missing (42P01) we do NOT
      // pretend success - the lead would be lost; the email below is the safety
      // net, so fall through to send it and only 500 if the email also fails.
      console.error('Failed to insert school inquiry:', insertError)
    }

    // ── Notify the schools team + confirm to the teacher (Resend) ──────────
    // The insert alone is not enough: nothing reads the table on a schedule,
    // and the form promises "we reply within one UK working day". Email is
    // what actually makes a lead actionable today.
    let emailed = false
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      console.error('[school-inquiry] RESEND_API_KEY is not configured - lead not emailed')
    } else {
      const fromAddress = 'The English Hub <noreply@theenglishhub.app>'
      const roleLabel = ROLE_LABELS[body.role] ?? body.role
      const results = await Promise.allSettled([
        fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${resendApiKey}` },
          body: JSON.stringify({
            from: fromAddress,
            to: SCHOOL_INQUIRY_EMAIL,
            reply_to: body.email.trim(),
            subject: `[School pilot] ${body.school_name.trim()} - ${roleLabel}`,
            html: [
              `<h2>New school pilot enquiry</h2>`,
              `<p><strong>School:</strong> ${escapeHtml(body.school_name.trim())}</p>`,
              `<p><strong>Contact:</strong> ${escapeHtml(body.teacher_name.trim())} (${escapeHtml(roleLabel)})</p>`,
              `<p><strong>Email:</strong> ${escapeHtml(body.email.trim())}</p>`,
              `<p><strong>Students:</strong> ${escapeHtml(body.num_students)}</p>`,
              `<hr />`,
              `<p>${escapeHtml(body.message?.trim() || 'No message provided.').replace(/\n/g, '<br />')}</p>`,
            ].join('\n'),
          }),
        }),
        fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${resendApiKey}` },
          body: JSON.stringify({
            from: fromAddress,
            to: body.email.trim(),
            subject: 'We received your enquiry - The English Hub for Schools',
            html: [
              `<h2>Thank you, ${escapeHtml(body.teacher_name.trim())}</h2>`,
              `<p>We have received your enquiry about a pilot for <strong>${escapeHtml(body.school_name.trim())}</strong> and will reply within one UK working day.</p>`,
              `<br />`,
              `<p>Best regards,<br />The English Hub Team</p>`,
            ].join('\n'),
          }),
        }),
      ])
      const notify = results[0]
      emailed = notify.status === 'fulfilled' && notify.value.ok
      if (!emailed) {
        console.error('[school-inquiry] notification email failed', notify)
      }
    }

    // Only fail the request if BOTH the DB row and the notification failed -
    // otherwise the lead is captured somewhere a human will see it.
    if (insertError && !emailed) {
      return NextResponse.json(
        { error: 'Failed to submit inquiry. Please try again.' },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('School inquiry error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
