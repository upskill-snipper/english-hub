import { NextRequest, NextResponse } from "next/server"
import { createServerSupabaseClient, createServiceRoleClient } from "@/lib/supabase/server"
import { verifySchoolMember } from "@/lib/school-auth"
import { rateLimit, getClientIp } from "@/lib/rate-limit"

export const dynamic = "force-dynamic"

// ---------------------------------------------------------------------------
// DELETE /api/school/invite/[token]
// Cancel (revoke) a pending invite. Admin only.
// ---------------------------------------------------------------------------

export async function DELETE(request: NextRequest, props: { params: Promise<{ token: string }> }) {
  const params = await props.params;
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-invite-revoke:${ip}`, { limit: 20, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } }
      )
    }

    const token = params.token?.trim()
    if (!token) {
      return NextResponse.json({ error: "Missing invite token" }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const actor = await verifySchoolMember(user.id, ["admin"])
    if (!actor) {
      return NextResponse.json({ error: "Forbidden: only school admins can revoke invites" }, { status: 403 })
    }

    const admin = createServiceRoleClient()

    // Find the invite — must belong to this school and be pending
    const { data: invite, error: fetchError } = await admin
      .from("school_members")
      .select("id, invite_status, school_id")
      .eq("invite_token", token)
      .eq("school_id", actor.school_id)
      .maybeSingle()

    if (fetchError) {
      console.error("[invite] revoke fetch error:", fetchError)
      return NextResponse.json({ error: "Failed to look up invite" }, { status: 500 })
    }

    if (!invite) {
      return NextResponse.json({ error: "Invite not found" }, { status: 404 })
    }

    if (invite.invite_status !== "pending") {
      return NextResponse.json(
        { error: `Cannot revoke an invite with status '${invite.invite_status}'` },
        { status: 409 }
      )
    }

    // Hard-delete the row so the email address can be re-invited later if needed
    const { error: deleteError } = await admin
      .from("school_members")
      .delete()
      .eq("id", invite.id)

    if (deleteError) {
      console.error("[invite] revoke delete error:", deleteError)
      return NextResponse.json({ error: "Failed to revoke invite" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[invite] DELETE error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
