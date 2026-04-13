// ─── POST /api/consent/cookie ─────────────────────────────────────────────
// Server-side log of cookie consent choices for PECR / ICO compliance.
// Records the user's cookie preference so consent can be proven if audited.
// ──────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from "next/server"
import { createHash } from "crypto"
import { prisma } from "@/lib/prisma"
import { createServerSupabaseClient } from "@/lib/supabase/server"
import { rateLimit, getClientIp } from "@/lib/rate-limit"

// ─── Types ──────────────────────────────────────────────────────────────

type CookieChoice = "accept_all" | "reject_all" | "custom"

interface CookieConsentBody {
  choice: CookieChoice
  analytics: boolean
  marketing: boolean
  /** Opaque visitor ID generated client-side (e.g. from fingerprint or random UUID) */
  visitorId: string
}

// ─── Helpers ────────────────────────────────────────────────────────────

/** One-way SHA-256 hash so we never store raw IP addresses. */
function hashIp(ip: string): string {
  return createHash("sha256").update(ip).digest("hex")
}

const VALID_CHOICES: CookieChoice[] = ["accept_all", "reject_all", "custom"]

const COOKIE_POLICY_VERSION = "2025-01"

// ─── Handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 10 consent writes per minute per IP (prevents abuse)
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`cookie-consent:${ip}`, {
      limit: 10,
      windowSeconds: 60,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests." },
        { status: 429, headers: { "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)) } },
      )
    }

    // Parse body
    let body: CookieConsentBody
    try {
      body = (await request.json()) as CookieConsentBody
    } catch {
      return NextResponse.json({ error: "Invalid JSON." }, { status: 400 })
    }

    // Validate
    if (!body.choice || !VALID_CHOICES.includes(body.choice)) {
      return NextResponse.json(
        { error: "choice must be one of: accept_all, reject_all, custom." },
        { status: 400 },
      )
    }
    if (!body.visitorId || typeof body.visitorId !== "string") {
      return NextResponse.json(
        { error: "visitorId is required." },
        { status: 400 },
      )
    }

    // Determine logged-in user (optional — anonymous visitors can also consent)
    let userId: string | null = null
    try {
      const supabase = createServerSupabaseClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        // Resolve internal user ID from Supabase auth user email
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email! },
          select: { id: true },
        })
        userId = dbUser?.id ?? null
      }
    } catch {
      // Auth is optional here — anonymous visitors can still consent
    }

    // Derive categories from choice
    const analytics = body.choice === "accept_all" ? true : body.choice === "custom" ? Boolean(body.analytics) : false
    const marketing = body.choice === "accept_all" ? true : body.choice === "custom" ? Boolean(body.marketing) : false

    // Persist to database
    await prisma.cookieConsent.create({
      data: {
        visitorId: body.visitorId,
        userId,
        choice: body.choice,
        analytics,
        marketing,
        ipHash: hashIp(ip),
        userAgent: request.headers.get("user-agent")?.slice(0, 512) ?? null,
        version: COOKIE_POLICY_VERSION,
      },
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[api/consent/cookie] error:", error)
    return NextResponse.json(
      { error: "Failed to record consent." },
      { status: 500 },
    )
  }
}
