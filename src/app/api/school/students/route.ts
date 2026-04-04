import { NextRequest, NextResponse } from "next/server"
import { createServerSupabaseClient, createServiceRoleClient } from "@/lib/supabase/server"
import { rateLimit, getClientIp } from "@/lib/rate-limit"
import { verifySchoolMember } from "@/lib/school-auth"

export const dynamic = "force-dynamic"

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const STAFF_ROLES = ["admin", "head_of_department", "teacher"]

// ---------------------------------------------------------------------------
// GET /api/school/students
// Returns all students for the requester's school.
// Requires the caller to be an admin, head_of_department, or teacher.
// ---------------------------------------------------------------------------

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-students-get:${ip}`, { limit: 60, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        }
      )
    }

    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const member = await verifySchoolMember(user.id, STAFF_ROLES)
    if (!member) {
      return NextResponse.json({ error: "Forbidden: admin or teacher access required" }, { status: 403 })
    }

    const admin = createServiceRoleClient()
    const { data: students, error: studentsError } = await admin
      .from("school_members")
      .select("id, user_id, full_name, email, year_group, invite_status, last_active_at, created_at")
      .eq("school_id", member.school_id)
      .eq("role", "student")
      .order("full_name", { ascending: true })

    if (studentsError) {
      console.error("[school/students] GET fetch error:", studentsError)
      return NextResponse.json({ error: "Failed to fetch students" }, { status: 500 })
    }

    return NextResponse.json({ students: students || [] })
  } catch (error) {
    console.error("[school/students] GET error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// ---------------------------------------------------------------------------
// POST /api/school/students
// Adds a single student to the school.
// Requires admin or head_of_department role.
// Body: { email, firstName, lastName, yearGroup? }
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-students-post:${ip}`, { limit: 20, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        }
      )
    }

    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Only admins and HoDs can add students directly
    const member = await verifySchoolMember(user.id, ["admin", "head_of_department"])
    if (!member) {
      return NextResponse.json({ error: "Forbidden: admin or head of department access required" }, { status: 403 })
    }

    let body: { email?: string; firstName?: string; lastName?: string; yearGroup?: string }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    }

    const { email, firstName, lastName, yearGroup } = body

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 422 })
    }
    if (!firstName || typeof firstName !== "string" || !firstName.trim()) {
      return NextResponse.json({ error: "firstName is required" }, { status: 422 })
    }
    if (!lastName || typeof lastName !== "string" || !lastName.trim()) {
      return NextResponse.json({ error: "lastName is required" }, { status: 422 })
    }

    const normalizedEmail = email.toLowerCase().trim()
    const fullName = `${firstName.trim()} ${lastName.trim()}`
    const admin = createServiceRoleClient()

    // Check if this email is already a student in this school
    const { data: existing } = await admin
      .from("school_members")
      .select("id, role")
      .eq("school_id", member.school_id)
      .eq("email", normalizedEmail)
      .single()

    if (existing) {
      return NextResponse.json(
        { error: "A school member with this email address already exists" },
        { status: 422 }
      )
    }

    // Check if the user already has an auth account
    const { data: existingProfile } = await admin
      .from("profiles")
      .select("id")
      .eq("email", normalizedEmail)
      .single()

    const { data: newStudent, error: insertError } = await admin
      .from("school_members")
      .insert({
        school_id: member.school_id,
        user_id: existingProfile?.id ?? null,
        role: "student",
        full_name: fullName,
        email: normalizedEmail,
        year_group: yearGroup?.trim() ?? null,
        invite_status: existingProfile ? "accepted" : "pending",
      })
      .select("id, user_id, full_name, email, year_group, invite_status, created_at")
      .single()

    if (insertError) {
      console.error("[school/students] POST insert error:", insertError)
      return NextResponse.json({ error: "Failed to add student" }, { status: 500 })
    }

    return NextResponse.json({ student: newStudent }, { status: 201 })
  } catch (error) {
    console.error("[school/students] POST error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// ---------------------------------------------------------------------------
// DELETE /api/school/students
// Removes a student from the school by school_members.id or user_id.
// Requires admin or head_of_department role.
// Body: { studentId } — the school_members.id of the student row.
// ---------------------------------------------------------------------------

export async function DELETE(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-students-delete:${ip}`, { limit: 20, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        }
      )
    }

    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const member = await verifySchoolMember(user.id, ["admin", "head_of_department"])
    if (!member) {
      return NextResponse.json({ error: "Forbidden: admin or head of department access required" }, { status: 403 })
    }

    let body: { studentId?: string }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    }

    const { studentId } = body
    if (!studentId || typeof studentId !== "string") {
      return NextResponse.json({ error: "studentId is required" }, { status: 422 })
    }

    const admin = createServiceRoleClient()

    // Confirm the target row belongs to this school and has role "student"
    const { data: target, error: lookupError } = await admin
      .from("school_members")
      .select("id, role, school_id")
      .eq("id", studentId)
      .eq("school_id", member.school_id)
      .eq("role", "student")
      .single()

    if (lookupError || !target) {
      return NextResponse.json({ error: "Student not found in your school" }, { status: 404 })
    }

    const { error: deleteError } = await admin
      .from("school_members")
      .delete()
      .eq("id", studentId)

    if (deleteError) {
      console.error("[school/students] DELETE error:", deleteError)
      return NextResponse.json({ error: "Failed to remove student" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[school/students] DELETE error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
