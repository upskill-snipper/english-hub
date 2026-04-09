import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'

// ── POST: Issue or update a certificate after a passing assessment ────────────
//
// The client submits the assessment_attempt_id. This route:
//   1. Authenticates the user via session cookie.
//   2. Verifies the assessment attempt exists, belongs to the user, and passed.
//   3. Re-derives score/grade from the stored attempt (never trusts client values).
//   4. Upserts the certificate, keeping the highest score.
//
// This runs server-side with the service role client so RLS INSERT restrictions
// on the certificates table are bypassed intentionally.

function getGrade(percentage: number): string | null {
  if (percentage >= 90) return 'Grade 9'
  if (percentage >= 80) return 'Grade 8'
  if (percentage >= 70) return 'Grade 7'
  if (percentage >= 60) return 'Grade 6'
  if (percentage >= 50) return 'Grade 5'
  if (percentage >= 40) return 'Grade 4'
  if (percentage < 40) return null
  return null
}

export async function POST(request: NextRequest) {
  try {
    // Authenticate
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Rate limit: 10 certificate requests per minute per user
    const rl = await rateLimit(`certificate:${user.id}`, { limit: 10, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { assessment_attempt_id, course_id } = body

    if (!assessment_attempt_id || typeof assessment_attempt_id !== 'string' || assessment_attempt_id.length > 100) {
      return NextResponse.json(
        { error: 'Valid assessment_attempt_id is required' },
        { status: 400 }
      )
    }

    if (!course_id || typeof course_id !== 'string' || course_id.length > 100) {
      return NextResponse.json(
        { error: 'Valid course_id is required' },
        { status: 400 }
      )
    }

    const admin = createServiceRoleClient()

    // Fetch the assessment attempt and verify ownership + passing status
    const { data: attempt, error: attemptError } = await admin
      .from('assessment_attempts')
      .select('id, user_id, course_id, score, passed')
      .eq('id', assessment_attempt_id)
      .single()

    if (attemptError || !attempt) {
      return NextResponse.json(
        { error: 'Assessment attempt not found' },
        { status: 404 }
      )
    }

    // Verify the attempt belongs to the authenticated user
    if (attempt.user_id !== user.id) {
      return NextResponse.json(
        { error: 'Assessment attempt does not belong to you' },
        { status: 403 }
      )
    }

    // Verify course_id matches
    if (attempt.course_id !== course_id) {
      return NextResponse.json(
        { error: 'Course ID mismatch' },
        { status: 400 }
      )
    }

    // Verify the attempt passed
    if (!attempt.passed) {
      return NextResponse.json(
        { error: 'Assessment was not passed' },
        { status: 400 }
      )
    }

    // Derive grade from the server-side score (never trust client)
    const grade = getGrade(attempt.score)
    if (!grade) {
      return NextResponse.json(
        { error: 'Score does not meet pass threshold' },
        { status: 400 }
      )
    }

    // Fetch the student's name to store on the certificate
    const { data: profile } = await admin
      .from('profiles')
      .select('full_name')
      .eq('id', user.id)
      .single()

    const studentName = profile?.full_name || null

    // Check for existing certificate - only update if new score is higher
    const { data: existingCert } = await admin
      .from('certificates')
      .select('id, score')
      .eq('user_id', user.id)
      .eq('course_id', course_id)
      .single()

    if (existingCert && attempt.score <= existingCert.score) {
      // Existing certificate has equal or higher score, return it
      return NextResponse.json({ certificate_id: existingCert.id })
    }

    // Upsert certificate (unique on user_id, course_id)
    const { data: certData, error: certError } = await admin
      .from('certificates')
      .upsert(
        {
          user_id: user.id,
          course_id: course_id,
          assessment_attempt_id: attempt.id,
          score: attempt.score,
          grade,
          student_name: studentName,
        },
        { onConflict: 'user_id,course_id' }
      )
      .select('id')
      .single()

    if (certError) {
      console.error('Failed to upsert certificate:', certError)
      return NextResponse.json(
        { error: 'Failed to issue certificate' },
        { status: 500 }
      )
    }

    return NextResponse.json({ certificate_id: certData.id })
  } catch (error) {
    console.error('Certificate API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
