import { NextRequest, NextResponse } from "next/server"
import { createServerSupabaseClient, createServiceRoleClient } from "@/lib/supabase/server"
import { verifySchoolMember } from "@/lib/school-auth"
import { rateLimit, getClientIp } from "@/lib/rate-limit"

export const dynamic = "force-dynamic"

const VALID_ROLES = ["admin", "head_of_department", "teacher"] as const
type SchoolRole = typeof VALID_ROLES[number]

// POST /api/school/roles — update a member's role (school_admin only)
export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-roles-update:${ip}`, { limit: 20, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const actor = await verifySchoolMember(user.id, ["admin"])
    if (!actor) {
      return NextResponse.json({ error: "Forbidden: only school admins can change roles" }, { status: 403 })
    }

    let body: { userId?: string; newRole?: string }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    }

    const { userId, newRole } = body

    if (!userId || typeof userId !== "string") {
      return NextResponse.json({ error: "userId is required" }, { status: 422 })
    }

    if (!newRole || !VALID_ROLES.includes(newRole as SchoolRole)) {
      return NextResponse.json(
        { error: `newRole must be one of: ${VALID_ROLES.join(", ")}` },
        { status: 422 }
      )
    }

    const admin = createServiceRoleClient()

    // Verify the target member belongs to the same school
    const { data: targetMember, error: fetchError } = await admin
      .from("school_members")
      .select("id, user_id, role, full_name, email, department, invite_status, school_id")
      .eq("user_id", userId)
      .eq("school_id", actor.school_id)
      .single()

    if (fetchError || !targetMember) {
      return NextResponse.json({ error: "Member not found in your school" }, { status: 404 })
    }

    const { data: updated, error: updateError } = await admin
      .from("school_members")
      .update({ role: newRole as SchoolRole })
      .eq("id", targetMember.id)
      .select("id, user_id, role, full_name, email, department, invite_status, school_id, created_at")
      .single()

    if (updateError) {
      console.error("Role update error:", updateError)
      return NextResponse.json({ error: "Failed to update role" }, { status: 500 })
    }

    return NextResponse.json({ member: updated })
  } catch (error) {
    console.error("Role update error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// DELETE /api/school/roles — remove a user from the school (school_admin only, cannot remove self)
export async function DELETE(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-roles-delete:${ip}`, { limit: 10, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const actor = await verifySchoolMember(user.id, ["admin"])
    if (!actor) {
      return NextResponse.json({ error: "Forbidden: only school admins can remove members" }, { status: 403 })
    }

    let body: { userId?: string }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    }

    const { userId } = body

    if (!userId || typeof userId !== "string") {
      return NextResponse.json({ error: "userId is required" }, { status: 422 })
    }

    // Prevent self-removal
    if (userId === user.id) {
      return NextResponse.json({ error: "You cannot remove yourself from the school" }, { status: 422 })
    }

    const admin = createServiceRoleClient()

    // Verify target member belongs to the same school
    const { data: targetMember, error: fetchError } = await admin
      .from("school_members")
      .select("id, user_id, school_id")
      .eq("user_id", userId)
      .eq("school_id", actor.school_id)
      .single()

    if (fetchError || !targetMember) {
      return NextResponse.json({ error: "Member not found in your school" }, { status: 404 })
    }

    const { error: deleteError } = await admin
      .from("school_members")
      .delete()
      .eq("id", targetMember.id)

    if (deleteError) {
      console.error("Member removal error:", deleteError)
      return NextResponse.json({ error: "Failed to remove member" }, { status: 500 })
    }

    return NextResponse.json({ success: true, removedUserId: userId })
  } catch (error) {
    console.error("Member removal error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
