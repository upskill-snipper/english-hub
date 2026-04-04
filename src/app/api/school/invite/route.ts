import { NextRequest, NextResponse } from "next/server"
import { createServerSupabaseClient, createServiceRoleClient } from "@/lib/supabase/server"
import { verifySchoolMember } from "@/lib/school-auth"
import { rateLimit, getClientIp } from "@/lib/rate-limit"
import { sendEmail } from "@/lib/email"

export const dynamic = "force-dynamic"

const INVITE_TTL_MS = 7 * 24 * 60 * 60 * 1000 // 7 days
const VALID_INVITE_ROLES = ["teacher", "head_of_department"] as const
type InviteRole = (typeof VALID_INVITE_ROLES)[number]

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function normaliseEmail(email: string): string {
  return email.toLowerCase().trim()
}

/**
 * Build the invite-email HTML body inline so we don't require a separate
 * template function. Mirrors the layout used across the rest of the app.
 */
function buildInviteEmailHtml(opts: {
  schoolName: string
  role: string
  inviteUrl: string
  message?: string
}): string {
  const BRAND_COLOR = "#1A5276"
  const roleLabel =
    opts.role === "head_of_department" ? "Head of Department" : "Teacher"

  const messageBlock = opts.message
    ? `<p style="margin:0 0 16px;padding:12px 16px;background:#f4f4f4;border-left:4px solid ${BRAND_COLOR};border-radius:4px;font-style:italic;color:#555;">
        ${opts.message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
      </p>`
    : ""

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>School Invitation</title></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;color:#333;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;">
    <tr><td align="center" style="padding:24px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">
        <tr><td style="background:${BRAND_COLOR};padding:24px 32px;text-align:center;">
          <h1 style="margin:0;color:#fff;font-size:24px;font-weight:700;">The English Hub</h1>
        </td></tr>
        <tr><td style="padding:32px;">
          <h2 style="margin:0 0 8px;font-size:20px;color:#111;">You have been invited to join ${opts.schoolName}</h2>
          <p style="margin:0 0 16px;color:#555;">You have been invited as a <strong>${roleLabel}</strong>. Click the button below to accept your invitation. The link expires in 7 days.</p>
          ${messageBlock}
          <div style="text-align:center;margin:24px 0;">
            <a href="${opts.inviteUrl}" style="display:inline-block;padding:14px 28px;background:${BRAND_COLOR};color:#fff;text-decoration:none;border-radius:6px;font-weight:700;font-size:16px;">
              Accept Invitation
            </a>
          </div>
          <p style="margin:16px 0 0;font-size:13px;color:#888;text-align:center;">
            Or copy this link: <a href="${opts.inviteUrl}" style="color:${BRAND_COLOR};">${opts.inviteUrl}</a>
          </p>
          <hr style="margin:24px 0;border:none;border-top:1px solid #eee;"/>
          <p style="margin:0;font-size:12px;color:#aaa;text-align:center;">
            If you were not expecting this invitation, you can safely ignore this email.
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

// ---------------------------------------------------------------------------
// POST /api/school/invite
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-invite-send:${ip}`, { limit: 20, windowSeconds: 60 })
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
      return NextResponse.json({ error: "Forbidden: only school admins can send invitations" }, { status: 403 })
    }

    let body: { emails?: unknown; role?: unknown; message?: unknown }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    }

    // Validate emails array
    if (!Array.isArray(body.emails) || body.emails.length === 0) {
      return NextResponse.json({ error: "emails must be a non-empty array" }, { status: 422 })
    }

    if (body.emails.length > 50) {
      return NextResponse.json({ error: "Cannot send more than 50 invites at once" }, { status: 422 })
    }

    const rawEmails = body.emails as unknown[]
    const rawRole = body.role as string | undefined
    const rawMessage = typeof body.message === "string" ? body.message.slice(0, 500) : undefined

    // Validate role
    if (!rawRole || !VALID_INVITE_ROLES.includes(rawRole as InviteRole)) {
      return NextResponse.json(
        { error: `role must be one of: ${VALID_INVITE_ROLES.join(", ")}` },
        { status: 422 }
      )
    }

    const role = rawRole as InviteRole

    // Validate and normalise each email
    const invalidEmails: string[] = []
    const emails: string[] = []
    for (const e of rawEmails) {
      if (typeof e !== "string") {
        invalidEmails.push(String(e))
        continue
      }
      const normalised = normaliseEmail(e)
      if (!isValidEmail(normalised)) {
        invalidEmails.push(e)
      } else {
        emails.push(normalised)
      }
    }

    if (invalidEmails.length > 0) {
      return NextResponse.json(
        { error: `Invalid email addresses: ${invalidEmails.join(", ")}` },
        { status: 422 }
      )
    }

    // Deduplicate
    const uniqueEmails = [...new Set(emails)]

    const admin = createServiceRoleClient()
    const schoolName = (actor.schools as unknown as { name: string } | null)?.name ?? "your school"
    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://theenglishhub.app"

    let sent = 0
    let alreadyMembers = 0
    const errors: { email: string; reason: string }[] = []

    for (const email of uniqueEmails) {
      try {
        // Check if there's already a member record for this email in the school
        const { data: existingMember } = await admin
          .from("school_members")
          .select("id, invite_status, user_id")
          .eq("school_id", actor.school_id)
          .eq("email", email)
          .maybeSingle()

        if (existingMember) {
          if (existingMember.invite_status === "accepted") {
            alreadyMembers++
            continue
          }
          // Has a pending/expired invite — re-issue a fresh token rather than erroring
          const newToken = crypto.randomUUID()
          const expiresAt = new Date(Date.now() + INVITE_TTL_MS).toISOString()
          await admin
            .from("school_members")
            .update({
              invite_token: newToken,
              invite_expires_at: expiresAt,
              invite_status: "pending",
              role,
            })
            .eq("id", existingMember.id)

          const inviteUrl = `${appUrl}/school/invite/${newToken}`
          await sendEmail(
            email,
            `You have been invited to join ${schoolName} on The English Hub`,
            buildInviteEmailHtml({ schoolName, role, inviteUrl, message: rawMessage })
          )
          sent++
          continue
        }

        // Check if the email belongs to an existing Supabase auth user
        const { data: existingProfile } = await admin
          .from("profiles")
          .select("id")
          .eq("email", email)
          .maybeSingle()

        if (existingProfile) {
          // User already has an account — add directly as accepted member
          const { error: insertError } = await admin
            .from("school_members")
            .insert({
              school_id: actor.school_id,
              user_id: existingProfile.id,
              role,
              email,
              invite_status: "accepted",
              invite_token: null,
              invite_expires_at: null,
              last_active_at: new Date().toISOString(),
            })

          if (insertError) {
            console.error(`[invite] Failed to add existing user ${email}:`, insertError)
            errors.push({ email, reason: "Failed to add to school" })
            continue
          }

          // Notify them that they have been added
          await sendEmail(
            email,
            `You have been added to ${schoolName} on The English Hub`,
            buildInviteEmailHtml({
              schoolName,
              role,
              inviteUrl: `${appUrl}/school`,
              message: rawMessage,
            })
          )
          alreadyMembers++
          continue
        }

        // New user — create a pending invite with a UUID token
        const inviteToken = crypto.randomUUID()
        const inviteExpiresAt = new Date(Date.now() + INVITE_TTL_MS).toISOString()

        const { error: insertError } = await admin
          .from("school_members")
          .insert({
            school_id: actor.school_id,
            user_id: null,
            role,
            email,
            invite_status: "pending",
            invite_token: inviteToken,
            invite_expires_at: inviteExpiresAt,
          })

        if (insertError) {
          console.error(`[invite] Failed to insert pending invite for ${email}:`, insertError)
          errors.push({ email, reason: "Failed to create invite record" })
          continue
        }

        const inviteUrl = `${appUrl}/school/invite/${inviteToken}`
        const emailResult = await sendEmail(
          email,
          `You have been invited to join ${schoolName} on The English Hub`,
          buildInviteEmailHtml({ schoolName, role, inviteUrl, message: rawMessage })
        )

        if (!emailResult.success) {
          console.warn(`[invite] Email delivery failed for ${email}: ${emailResult.error}`)
          // The record was created successfully; don't block on email failures
        }

        sent++
      } catch (err) {
        console.error(`[invite] Unexpected error for ${email}:`, err)
        errors.push({ email, reason: "Unexpected error" })
      }
    }

    return NextResponse.json({ sent, alreadyMembers, errors }, { status: 200 })
  } catch (error) {
    console.error("[invite] POST error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// ---------------------------------------------------------------------------
// GET /api/school/invite
// ---------------------------------------------------------------------------

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-invite-list:${ip}`, { limit: 30, windowSeconds: 60 })
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
      return NextResponse.json({ error: "Forbidden: only school admins can view invites" }, { status: 403 })
    }

    const admin = createServiceRoleClient()

    // Auto-expire any invites whose time has passed
    await admin
      .from("school_members")
      .update({ invite_status: "expired" })
      .eq("school_id", actor.school_id)
      .eq("invite_status", "pending")
      .lt("invite_expires_at", new Date().toISOString())

    const { data: invites, error: fetchError } = await admin
      .from("school_members")
      .select("id, email, role, invite_status, invite_token, invite_expires_at, created_at")
      .eq("school_id", actor.school_id)
      .in("invite_status", ["pending", "expired"])
      .order("created_at", { ascending: false })

    if (fetchError) {
      console.error("[invite] GET list error:", fetchError)
      return NextResponse.json({ error: "Failed to fetch invites" }, { status: 500 })
    }

    const result = (invites ?? []).map((inv) => ({
      id: inv.id,
      email: inv.email,
      role: inv.role,
      invite_status: inv.invite_status,
      invited_at: inv.created_at,
      expires: inv.invite_expires_at,
    }))

    return NextResponse.json({ invites: result })
  } catch (error) {
    console.error("[invite] GET error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
