import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

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

const VALID_STUDENT_RANGES = [
  '1-30',
  '31-50',
  '51-100',
  '101-200',
  '201-500',
  '500+',
]

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 5 inquiries per IP per hour
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-inquiry:${ip}`, { limit: 5, windowSeconds: 3600 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    let body: SchoolInquiryBody
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

    if (!body.school_name || body.school_name.length < 2 || body.school_name.length > 200) {
      errors.push('School name must be 2–200 characters')
    }

    if (!body.teacher_name || body.teacher_name.length < 2 || body.teacher_name.length > 100) {
      errors.push('Your name must be 2–100 characters')
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
      console.error('Failed to insert school inquiry:', insertError)
      // If the table doesn't exist yet, still return success
      // but log the error for the developer to create the table
      if (insertError.code === '42P01') {
        console.error(
          'school_inquiries table does not exist. Create it with:\n' +
          'CREATE TABLE school_inquiries (\n' +
          '  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,\n' +
          '  school_name TEXT NOT NULL,\n' +
          '  teacher_name TEXT NOT NULL,\n' +
          '  email TEXT NOT NULL,\n' +
          '  role TEXT NOT NULL,\n' +
          '  num_students TEXT NOT NULL,\n' +
          '  message TEXT,\n' +
          '  status TEXT DEFAULT \'new\',\n' +
          '  created_at TIMESTAMPTZ DEFAULT now()\n' +
          ');'
        )
      }
      return NextResponse.json(
        { error: 'Failed to submit inquiry. Please try again.' },
        { status: 500 }
      )
    }

    // TODO(Phase-5): Send notification email to admin and confirmation email to the teacher via Resend

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('School inquiry error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
