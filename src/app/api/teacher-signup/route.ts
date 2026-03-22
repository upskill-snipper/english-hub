import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { generateReferralCode } from '@/lib/referral'

interface TeacherApplicationBody {
  full_name: string
  school_email: string
  school_name: string
  exam_board: string
  student_count: string
}

const VALID_EXAM_BOARDS = ['AQA', 'Edexcel', 'OCR', 'WJEC', 'Multiple']

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 5 applications per IP per hour
    const ip = getClientIp(request.headers)
    const rl = rateLimit(`teacher-apply:${ip}`, { limit: 5, windowSeconds: 3600 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    let body: TeacherApplicationBody
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      )
    }

    // ── Validation ──────────────────────────────────────────
    const errors: string[] = []

    if (!body.full_name || body.full_name.length < 2 || body.full_name.length > 100) {
      errors.push('Full name must be 2-100 characters')
    }

    if (!body.school_email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.school_email)) {
      errors.push('Valid school email address is required')
    }

    if (!body.school_name || body.school_name.length < 2 || body.school_name.length > 200) {
      errors.push('School name must be 2-200 characters')
    }

    if (!body.exam_board || !VALID_EXAM_BOARDS.includes(body.exam_board)) {
      errors.push('Please select a valid exam board')
    }

    if (!body.student_count) {
      errors.push('Approximate number of students is required')
    }

    if (errors.length > 0) {
      return NextResponse.json({ error: errors[0] }, { status: 400 })
    }

    // ── Generate referral code ───────────────────────────────
    const referralCode = generateReferralCode(body.full_name)

    // ── Check for duplicate email ────────────────────────────
    const supabaseAdmin = createServiceRoleClient()

    const { data: existing } = await supabaseAdmin
      .from('teacher_referrals')
      .select('id, status')
      .eq('school_email', body.school_email.toLowerCase())
      .single()

    if (existing) {
      return NextResponse.json(
        { error: 'An application with this email has already been submitted. If you believe this is an error, please contact support.' },
        { status: 400 }
      )
    }

    // ── Insert application ───────────────────────────────────
    const { error: insertError } = await supabaseAdmin.from('teacher_referrals').insert({
      full_name: body.full_name.trim(),
      school_email: body.school_email.toLowerCase().trim(),
      school_name: body.school_name.trim(),
      exam_board: body.exam_board,
      student_count: body.student_count,
      referral_code: referralCode,
      status: 'pending',
      referral_count: 0,
    })

    if (insertError) {
      console.error('Failed to insert teacher application:', insertError)
      return NextResponse.json(
        { error: 'Failed to submit application. Please try again.' },
        { status: 500 }
      )
    }

    // TODO: Send confirmation email to teacher
    // TODO: Send notification email to admin

    return NextResponse.json({ success: true, referralCode })
  } catch (error) {
    console.error('Teacher application error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
