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
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json(
        { error: 'You must be logged in to join a school.' },
        { status: 401 },
      )
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
      .select(
        '*, schools(id, name, seat_limit, seats_used, subscription_status), classes(id, name)',
      )
      .eq('code', code)
      .eq('is_active', true)
      .single()

    if (codeError || !joinCode) {
      return NextResponse.json(
        { error: 'Invalid join code. Please check the code and try again.' },
        { status: 404 },
      )
    }

    // Check expiry
    if (joinCode.expires_at && new Date(joinCode.expires_at) < new Date()) {
      return NextResponse.json(
        { error: 'This join code has expired. Please ask your teacher for a new code.' },
        { status: 422 },
      )
    }

    // Check usage limit
    if (joinCode.max_uses > 0 && joinCode.uses >= joinCode.max_uses) {
      return NextResponse.json(
        { error: 'This join code has reached its maximum number of uses.' },
        { status: 422 },
      )
    }

    const school = joinCode.schools as {
      id: string
      name: string
      seat_limit: number
      seats_used: number
      subscription_status: string | null
    } | null

    const schoolId = joinCode.school_id as string
    const classId = joinCode.class_id as string | null
    const codeRole: string = (joinCode.role ?? 'student').toLowerCase()

    const schoolName = school?.name ?? 'your school'
    const className = (joinCode.classes as { name: string } | null)?.name ?? null

    // -----------------------------------------------------------------
    // TEACHER PATH
    // -----------------------------------------------------------------
    if (codeRole === 'teacher') {
      // Check if already a member of this school
      const { data: existingMember } = await admin
        .from('school_members')
        .select('id, role')
        .eq('school_id', schoolId)
        .eq('user_id', user.id)
        .single()

      if (existingMember) {
        return NextResponse.json(
          { error: 'You are already a member of this school.' },
          { status: 422 },
        )
      }

      const { error: memberInsertError } = await admin.from('school_members').insert({
        school_id: schoolId,
        user_id: user.id,
        role: 'teacher',
      })

      if (memberInsertError) {
        console.error('Failed to add teacher to school_members:', memberInsertError)
        return NextResponse.json(
          { error: 'Failed to join the school. Please try again.' },
          { status: 500 },
        )
      }

      // Atomic increment - P1-DATA-8 fix. Replaces the previous
      // read-then-write pattern that could drift uses/max_uses under
      // concurrent joins. Returns null if the cap was hit between the
      // earlier check and now.
      const { data: newUses, error: incErr } = await admin.rpc('increment_join_code_uses', {
        code_id: joinCode.id,
      })
      if (incErr || newUses == null) {
        console.warn(
          '[school/join] teacher join: atomic increment returned null (cap hit or stale code)',
          incErr,
        )
        // Best-effort roll back the members insert so we don't leave
        // an orphan teacher membership tied to an over-full code.
        await admin.from('school_members').delete().eq('school_id', schoolId).eq('user_id', user.id)
      }

      return NextResponse.json({
        success: true,
        schoolName,
        schoolId,
        role: 'teacher',
        class_name: null,
        message: `Successfully joined ${schoolName} as a teacher!`,
      })
    }

    // -----------------------------------------------------------------
    // STUDENT PATH
    // -----------------------------------------------------------------

    // Optimistic seat limit check (re-verified after increment below)
    if (school && school.seats_used >= school.seat_limit) {
      return NextResponse.json(
        { error: 'This school has reached its student limit. Please contact your teacher.' },
        { status: 422 },
      )
    }

    // Check if the student is already in the school via school_students table first
    const { data: existingSchoolStudent } = await admin
      .from('school_students')
      .select('id')
      .eq('school_id', schoolId)
      .eq('student_id', user.id)
      .eq('is_active', true)
      .limit(1)

    const alreadyInSchool = !!existingSchoolStudent && existingSchoolStudent.length > 0

    if (alreadyInSchool && !classId) {
      return NextResponse.json(
        { error: 'You are already a member of this school.' },
        { status: 422 },
      )
    }

    // Add to school_students if not already there
    if (!alreadyInSchool) {
      const { error: schoolStudentError } = await admin.from('school_students').insert({
        school_id: schoolId,
        student_id: user.id,
      })

      if (schoolStudentError) {
        // Ignore unique-constraint violations (concurrent request already inserted)
        if (!(schoolStudentError.code === '23505')) {
          console.error('Failed to add student to school_students:', schoolStudentError)
          return NextResponse.json(
            { error: 'Failed to join the school. Please try again.' },
            { status: 500 },
          )
        }
      }
    }

    // Optionally add to class if the join code has a class_id
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
            { status: 422 },
          )
        }
        // Re-activate if previously removed
        await admin
          .from('class_students')
          .update({ is_active: true, removed_at: null, joined_at: new Date().toISOString() })
          .eq('id', existing.id)
      } else {
        const { error: insertError } = await admin.from('class_students').insert({
          class_id: classId,
          student_id: user.id,
        })

        if (insertError) {
          console.error('Failed to add student to class:', insertError)
          return NextResponse.json(
            { error: 'Failed to join the class. Please try again.' },
            { status: 500 },
          )
        }
      }

      // Update class student_count
      const { count: studentCount } = await admin
        .from('class_students')
        .select('id', { count: 'exact', head: true })
        .eq('class_id', classId)
        .eq('is_active', true)

      await admin
        .from('classes')
        .update({ student_count: studentCount || 0 })
        .eq('id', classId)
    }

    // Atomic increment - P1-DATA-8. Replaces the previous read-then-write
    // which could drift uses past max_uses under concurrent joins.
    const { data: newUses, error: incErr } = await admin.rpc('increment_join_code_uses', {
      code_id: joinCode.id,
    })
    if (incErr || newUses == null) {
      // Cap hit or code became inactive between the earlier checks and now.
      // Roll back the memberships we just created and tell the user.
      if (classId) {
        await admin
          .from('class_students')
          .update({ is_active: false, removed_at: new Date().toISOString() })
          .eq('class_id', classId)
          .eq('student_id', user.id)
      }
      await admin
        .from('school_students')
        .update({ is_active: false })
        .eq('school_id', schoolId)
        .eq('student_id', user.id)
      return NextResponse.json(
        {
          error:
            'This join code has just reached its usage limit. Please ask your teacher for a new code.',
        },
        { status: 422 },
      )
    }

    // Update school seats_used for new students.
    // The .lt filter guards against racing past the seat limit.
    if (!alreadyInSchool && school) {
      const { data: updatedSchool, error: seatError } = await admin
        .from('schools')
        .update({ seats_used: school.seats_used + 1 })
        .eq('id', school.id)
        .lt('seats_used', school.seat_limit)
        .select('id, seats_used')
        .single()

      if (seatError || !updatedSchool) {
        // Race condition: seat limit hit between our check and now - roll back.
        if (classId) {
          await admin
            .from('class_students')
            .update({ is_active: false, removed_at: new Date().toISOString() })
            .eq('class_id', classId)
            .eq('student_id', user.id)

          const { count: rollbackCount } = await admin
            .from('class_students')
            .select('id', { count: 'exact', head: true })
            .eq('class_id', classId)
            .eq('is_active', true)

          await admin
            .from('classes')
            .update({ student_count: rollbackCount || 0 })
            .eq('id', classId)
        }

        // Roll back school_students
        await admin
          .from('school_students')
          .update({ is_active: false })
          .eq('school_id', schoolId)
          .eq('student_id', user.id)

        // Roll back join code usage increment via the inverse RPC-style
        // decrement (best effort - the counter can drift by 1 under
        // pathological races, which is acceptable given the seat-limit
        // already prevented over-provisioning).
        await admin
          .from('school_join_codes')
          .update({ uses: Math.max(0, joinCode.uses) })
          .eq('id', joinCode.id)

        return NextResponse.json(
          { error: 'This school has reached its student limit. Please contact your teacher.' },
          { status: 422 },
        )
      }
    }

    // Grant pro access if the school has an active subscription
    const schoolSubStatus = school?.subscription_status
    if (schoolSubStatus === 'active' || schoolSubStatus === 'trialing') {
      await admin.from('profiles').update({ subscription_status: 'pro' }).eq('id', user.id)
    }

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
        const { data: existingConsent } = await admin
          .from('parental_consents')
          .select('status')
          .eq('student_user_id', user.id)
          .eq('school_id', schoolId)
          .single()

        if (existingConsent) {
          parentalConsentStatus = existingConsent.status
        } else {
          parentalConsentStatus = 'pending'
        }
      }
    }

    return NextResponse.json({
      success: true,
      schoolName,
      schoolId,
      role: 'student',
      class_name: className,
      parental_consent_status: parentalConsentStatus,
      message: `Successfully joined ${schoolName}${className ? ` - ${className}` : ''}!`,
    })
  } catch (error) {
    console.error('School join error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
