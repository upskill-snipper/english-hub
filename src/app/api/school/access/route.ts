import { NextRequest, NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase/server"
import { rateLimit, getClientIp } from "@/lib/rate-limit"
import { getSchoolAccess } from "@/lib/school-access"

export const dynamic = "force-dynamic"

// ---------------------------------------------------------------------------
// Renewal pricing constants
// ---------------------------------------------------------------------------
const RENEWAL_PRICE = 1500
const RENEWAL_CURRENCY = "GBP"

// ---------------------------------------------------------------------------
// GET /api/school/access
// Returns the authenticated user's school access status.
// Used by the school admin dashboard to show access banners and renewal info.
// ---------------------------------------------------------------------------

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`school-access:${ip}`, { limit: 60, windowSeconds: 60 })
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        }
      )
    }

    // Authenticate
    const supabase = createServerSupabaseClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Fetch school access
    const access = await getSchoolAccess(user.id)
    if (!access) {
      return NextResponse.json({ error: "No school association found for this user." }, { status: 404 })
    }

    // Build response — include renewal info when access is expired or expiring soon
    const includeRenewal = !access.isActive || (access.daysRemaining !== null && access.daysRemaining <= 30)

    return NextResponse.json({
      schoolId: access.schoolId,
      schoolName: access.schoolName,
      accessType: access.accessType,
      accessUntil: access.accessUntil,
      isActive: access.isActive,
      daysRemaining: access.daysRemaining,
      userRole: access.userRole,
      ...(includeRenewal && {
        renewalPrice: RENEWAL_PRICE,
        renewalCurrency: RENEWAL_CURRENCY,
      }),
    })
  } catch (error) {
    console.error("[school/access] GET error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
