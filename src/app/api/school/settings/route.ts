import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { createServerSupabaseClient, createServiceRoleClient } from "@/lib/supabase/server"
import { verifySchoolMember } from "@/lib/school-auth"
import { rateLimit, getClientIp } from "@/lib/rate-limit"

export const dynamic = "force-dynamic"

const updateSettingsSchema = z.object({
  name: z
    .string()
    .min(1, "School name must not be empty")
    .max(200, "School name must be 200 characters or fewer")
    .optional(),
  address: z
    .string()
    .max(500, "Address must be 500 characters or fewer")
    .optional(),
  contact_email: z
    .string()
    .email("contact_email must be a valid email address")
    .optional()
    .or(z.literal("")),
  contact_phone: z
    .string()
    .max(50, "contact_phone must be 50 characters or fewer")
    .optional(),
  website: z
    .string()
    .url("website must be a valid URL")
    .optional()
    .or(z.literal("")),
  timezone: z
    .string()
    .max(100, "timezone must be 100 characters or fewer")
    .optional(),
}).strict()

type UpdateSettingsBody = z.infer<typeof updateSettingsSchema>

// GET /api/school/settings — get school settings including subscription info
export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-settings-get:${ip}`, { limit: 30, windowSeconds: 60 })
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

    const member = await verifySchoolMember(user.id)
    if (!member) {
      return NextResponse.json({ error: "Forbidden: not a school member" }, { status: 403 })
    }

    const admin = createServiceRoleClient()

    const { data: school, error: schoolError } = await admin
      .from("schools")
      .select(
        "id, name, address, contact_email, contact_phone, website, timezone, " +
        "subscription_plan, subscription_status, subscription_expires_at, " +
        "max_members, created_at, updated_at"
      )
      .eq("id", member.school_id)
      .single()

    if (schoolError) {
      console.error("School settings fetch error:", schoolError)
      return NextResponse.json({ error: "Failed to fetch school settings" }, { status: 500 })
    }

    // Count current member seats used
    const { count: memberCount } = await admin
      .from("school_members")
      .select("id", { count: "exact", head: true })
      .eq("school_id", member.school_id)
      .eq("invite_status", "accepted")

    const s = school as any
    return NextResponse.json({
      settings: school,
      subscription: {
        plan: s.subscription_plan ?? null,
        status: s.subscription_status ?? null,
        expires_at: s.subscription_expires_at ?? null,
        seats_used: memberCount ?? 0,
        seats_max: s.max_members ?? null,
      },
    })
  } catch (error) {
    console.error("School settings get error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// PUT /api/school/settings — update school settings (admin only)
export async function PUT(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-settings-update:${ip}`, { limit: 10, windowSeconds: 60 })
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
      return NextResponse.json({ error: "Forbidden: only school admins can update settings" }, { status: 403 })
    }

    let rawBody: unknown
    try {
      rawBody = await request.json()
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    }

    const parseResult = updateSettingsSchema.safeParse(rawBody)
    if (!parseResult.success) {
      const firstError = parseResult.error.issues[0]
      return NextResponse.json(
        {
          error: firstError?.message ?? "Validation failed",
          details: parseResult.error.issues.map((e: any) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
        { status: 422 }
      )
    }

    const body: UpdateSettingsBody = parseResult.data

    if (Object.keys(body).length === 0) {
      return NextResponse.json({ error: "At least one field to update is required" }, { status: 422 })
    }

    const admin = createServiceRoleClient()

    const { data: updated, error: updateError } = await admin
      .from("schools")
      .update({ ...body, updated_at: new Date().toISOString() })
      .eq("id", actor.school_id)
      .select(
        "id, name, address, contact_email, contact_phone, website, timezone, " +
        "subscription_plan, subscription_status, subscription_expires_at, " +
        "max_members, created_at, updated_at"
      )
      .single()

    if (updateError) {
      console.error("School settings update error:", updateError)
      return NextResponse.json({ error: "Failed to update school settings" }, { status: 500 })
    }

    return NextResponse.json({ settings: updated })
  } catch (error) {
    console.error("School settings update error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
