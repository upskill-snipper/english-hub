import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { createServiceRoleClient } from '@/lib/supabase/server'

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

    // ── Store in Supabase ───────────────────────────────
    const supabase = await createServiceRoleClient()
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name: body.name.trim(),
        email: body.email.trim(),
        subject: body.subject,
        message: body.message.trim(),
        created_at: new Date().toISOString(),
      })

    if (dbError) {
      console.error('[api/contact] Supabase insert error:', dbError)
      return NextResponse.json(
        { error: 'Failed to save your message. Please try again.' },
        { status: 500 }
      )
    }

    // ── Send notification email to support ────────────
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      console.error('[api/contact] RESEND_API_KEY is not configured')
    } else {
      const fromAddress = 'The English Hub <noreply@theenglishhub.app>'

      const [notificationRes, confirmationRes] = await Promise.allSettled([
        // Notification to support
        fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: fromAddress,
            to: 'support@theenglishhub.app',
            subject: `[Contact Form] ${body.subject} – from ${body.name.trim()}`,
            html: [
              `<h2>New Contact Form Submission</h2>`,
              `<p><strong>Name:</strong> ${body.name.trim()}</p>`,
              `<p><strong>Email:</strong> ${body.email.trim()}</p>`,
              `<p><strong>Subject:</strong> ${body.subject}</p>`,
              `<hr />`,
              `<p>${body.message.trim().replace(/\n/g, '<br />')}</p>`,
            ].join('\n'),
          }),
        }),
        // Confirmation to user
        fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: fromAddress,
            to: body.email.trim(),
            subject: 'We received your message – The English Hub',
            html: [
              `<h2>Thank you for contacting us, ${body.name.trim()}!</h2>`,
              `<p>We've received your message regarding <strong>${body.subject}</strong> and will get back to you as soon as possible.</p>`,
              `<p>If your enquiry is urgent, please allow up to 24 hours for a response.</p>`,
              `<br />`,
              `<p>Best regards,<br />The English Hub Team</p>`,
            ].join('\n'),
          }),
        }),
      ])

      if (notificationRes.status === 'rejected') {
        console.error('[api/contact] Failed to send notification email:', notificationRes.reason)
      }
      if (confirmationRes.status === 'rejected') {
        console.error('[api/contact] Failed to send confirmation email:', confirmationRes.reason)
      }
    }

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
