import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-join:${ip}`, { limit: 5, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'You must be logged in to join a school.' }, { status: 401 })
    }

    let body: { code?: string }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const code = (body.code ?? '').trim().toUpperCase()

    if (!code) {
      return NextResponse.json({ error: 'Please enter a join code.' }, { status: 422 })
    }

    const admin = createServiceRoleClient()

    // Look up the join code with school and class info
    const { data: joinCode, error: codeError } = await admin
      .from('school_join_codes')
      .select('*, schools(id, name, seat_limit, seats_used, subscription_status), classes(id, name)')
      .eq('code', code)
      .eq('is_active', true)
      .single()

    if (codeError || !joinCode) {
      return NextResponse.json(
        { error: 'Invalid join code. Please check the code and try again.' },
        { status: 404 }
      )
    }

    // Check expiry
    if (joinCode.expires_at && new Date(joinCode.expires_at) < new Date()) {
      return NextResponse.json(
        { error: 'This join code has expired. Please ask your teacher for a new code.' },
        { status: 422 }
      )
    }

    // Check usage limit
    if (joinCode.max_uses > 0 && joinCode.uses >= joinCode.max_uses) {
      return NextResponse.json(
        { error: 'This join code has reached its maximum number of uses.' },
        { status: 422 }
      )
    }

    // Optimistic seat limit check (preliminary — re-verified after increment below)
    const school = joinCode.schools as { id: string; name: string; seat_limit: number; seats_used: number; subscription_status: string | null } | null
    if (school && school.seats_used >= school.seat_limit) {
      return NextResponse.json(
        { error: 'This school has reached its student limit. Please contact your teacher.' },
        { status: 422 }
      )
    }

    const schoolId = joinCode.school_id
    const classId = joinCode.class_id

    // Check if the student is already in any class at this school
    const { data: existingClasses } = await admin
      .from('classes')
      .select('id')
      .eq('school_id', schoolId)

    const existingClassIds = (existingClasses || []).map((c: { id: string }) => c.id)
    let alreadyInSchool = false

    if (existingClassIds.length > 0) {
      const { data: existingMembership } = await admin
        .from('class_students')
        .select('id')
        .in('class_id', existingClassIds)
        .eq('student_id', user.id)
        .eq('is_active', true)
        .limit(1)

      alreadyInSchool = !!existingMembership && existingMembership.length > 0
    }

    // Add to class if the code has a class_id
    if (classId) {
      const { data: existing } = await admin
        .from('class_students')
        .select('id, is_active')
        .eq('class_id', classId)
        .eq('student_id', user.id)
        .single()

      if (existing) {
        if (existing.is_active) {
          return NextResponse.json(
            { error: 'You have already joined this class.' },
            { status: 422 }
          )
        }
        // Re-activate if previously removed
        await admin
          .from('class_students')
          .update({ is_active: true, removed_at: null, joined_at: new Date().toISOString() })
          .eq('id', existing.id)
      } else {
        const { error: insertError } = await admin
          .from('class_students')
          .insert({
            class_id: classId,
            student_id: user.id,
          })

        if (insertError) {
          console.error('Failed to add student to class:', insertError)
          return NextResponse.json(
            { error: 'Failed to join the class. Please try again.' },
            { status: 500 }
          )
        }
      }

      // Update class student_count
      const { count: studentCount } = await admin
        .from('class_students')
        .select('id', { count: 'exact', head: true })
        .eq('class_id', classId)
        .eq('is_active', true)

      await admin.from('classes').update({ student_count: studentCount || 0 }).eq('id', classId)
    }

    // Increment uses on the join code
    await admin
      .from('school_join_codes')
      .update({ uses: joinCode.uses + 1 })
      .eq('id', joinCode.id)

    // Update school seats_used if this is a new student at the school.
    // Use a conditional update to guard against the race condition where concurrent
    // requests read the same seats_used value before either increments it.
    // The .lt('seats_used', seat_limit) filter ensures the DB won't increment past the limit.
    if (!alreadyInSchool && school) {
      const { data: updatedSchool, error: seatError } = await admin
        .from('schools')
        .update({ seats_used: school.seats_used + 1 })
        .eq('id', school.id)
        .lt('seats_used', school.seat_limit)
        .select('id, seats_used')
        .single()

      if (seatError || !updatedSchool) {
        // The seat limit was reached between our initial check and now (race condition).
        // Roll back: remove the student from the class we just added them to.
        if (classId) {
          await admin
            .from('class_students')
            .update({ is_active: false, removed_at: new Date().toISOString() })
            .eq('class_id', classId)
            .eq('student_id', user.id)

          // Re-sync class student count
          const { count: rollbackCount } = await admin
            .from('class_students')
            .select('id', { count: 'exact', head: true })
            .eq('class_id', classId)
            .eq('is_active', true)

          await admin.from('classes').update({ student_count: rollbackCount || 0 }).eq('id', classId)
        }

        // Roll back join code usage increment
        await admin
          .from('school_join_codes')
          .update({ uses: joinCode.uses })
          .eq('id', joinCode.id)

        return NextResponse.json(
          { error: 'This school has reached its student limit. Please contact your teacher.' },
          { status: 422 }
        )
      }
    }

    // Grant pro access to the student only if the school has an active subscription
    const schoolSubStatus = school?.subscription_status
    if (schoolSubStatus === 'active' || schoolSubStatus === 'trialing') {
      await admin
        .from('profiles')
        .update({ subscription_status: 'pro' })
        .eq('id', user.id)
    }

    const schoolName = (joinCode.schools as { name: string } | null)?.name ?? 'your school'
    const className = (joinCode.classes as { name: string } | null)?.name ?? null

    // Check if the student is under 16 and flag for parental consent
    let parentalConsentStatus: string | null = null
    const { data: profile } = await admin
      .from('profiles')
      .select('date_of_birth')
      .eq('id', user.id)
      .single()

    if (profile?.date_of_birth) {
      const dob = new Date(profile.date_of_birth)
      const today = new Date()
      let age = today.getFullYear() - dob.getFullYear()
      const monthDiff = today.getMonth() - dob.getMonth()
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--
      }

      if (age < 16) {
        // Check if consent already exists for this student+school
        const { data: existingConsent } = await admin
          .from('parental_consents')
          .select('status')
          .eq('student_user_id', user.id)
          .eq('school_id', schoolId)
          .single()

        if (existingConsent) {
          parentalConsentStatus = existingConsent.status
        } else {
          // Create a pending consent record (no parent email yet — student will provide it)
          parentalConsentStatus = 'pending'
        }
      }
    }

    return NextResponse.json({
      success: true,
      school_name: schoolName,
      class_name: className,
      parental_consent_status: parentalConsentStatus,
      message: `Successfully joined ${schoolName}${className ? ` - ${className}` : ''}!`,
    })
  } catch (error) {
    console.error('School join error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
