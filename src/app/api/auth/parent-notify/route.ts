import { NextRequest, NextResponse } from 'next/server'

// In-memory rate limit store: IP -> timestamps of recent requests
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000 // 1 hour
const RATE_LIMIT_MAX = 5

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = rateLimitMap.get(ip) ?? []

  // Remove entries older than the window
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  rateLimitMap.set(ip, recent)

  if (recent.length >= RATE_LIMIT_MAX) {
    return true
  }

  recent.push(now)
  rateLimitMap.set(ip, recent)
  return false
}

export async function POST(request: NextRequest) {
  // Rate limit by IP
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  let body: { parentEmail?: string; studentName?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    )
  }

  const { parentEmail, studentName } = body

  if (!parentEmail || !studentName) {
    return NextResponse.json(
      { error: 'parentEmail and studentName are required' },
      { status: 400 }
    )
  }

  const resendApiKey = process.env.RESEND_API_KEY
  if (!resendApiKey) {
    console.warn('[parent-notify] RESEND_API_KEY not configured — skipping parental consent email')
    return NextResponse.json(
      { error: 'Email service not configured' },
      { status: 503 }
    )
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://theenglishhub.app'
  const consentUrl = `${siteUrl}/consent`
  const fromAddress = 'The English Hub <noreply@theenglishhub.app>'
  const subject = 'Parental Consent Required - The English Hub'

  const html = [
    `<h2>Parental Consent Required</h2>`,
    `<p>Dear Parent/Guardian,</p>`,
    `<p>Your child, <strong>${studentName}</strong>, has created an account on <strong>The English Hub</strong>, an online English learning platform.</p>`,
    `<p>As they are under 16, we require parental consent before they can fully use the platform. The English Hub collects the following data to provide our educational services:</p>`,
    `<ul>`,
    `<li>Name and email address</li>`,
    `<li>Date of birth</li>`,
    `<li>Learning progress and assessment results</li>`,
    `<li>Usage data to improve the learning experience</li>`,
    `</ul>`,
    `<p>All data is stored securely and used solely for educational purposes. We do not share personal data with third parties for marketing.</p>`,
    `<p>To review our data practices and provide your consent, please visit the link below:</p>`,
    `<p><a href="${consentUrl}">Provide Parental Consent</a></p>`,
    `<p>If you did not expect this email or have any questions, please contact our support team.</p>`,
    `<br />`,
    `<p>Best regards,<br />The English Hub Team</p>`,
  ].join('\n')

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromAddress,
        to: parentEmail,
        subject,
        html,
      }),
    })

    if (!res.ok) {
      const errorBody = await res.text()
      console.error(
        `[parent-notify] Failed to send parental consent email to ${parentEmail}: ${res.status} ${errorBody}`
      )
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[parent-notify] Error sending parental consent email:', err)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
