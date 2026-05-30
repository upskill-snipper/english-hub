// ─── Marker · Self-service Application ─────────────────────────────────────
// POST /api/marker/apply
//
// A logged-in user with NO marker record applies to become a marker: they submit
// their display name + credentials and tick the boards they're qualified for.
// This creates their markers row and a 'requested' marker_board_access row per
// ticked board.
//
// CRITICAL GUARDRAIL (open self-service): creating an account grants NOTHING.
// The marker can mark no scripts until an admin APPROVES a board (Stage B admin
// route). status='active' here only means "a real applicant", not "may mark" —
// the queue/review enforce approved-board access separately (canMarkSubmission).
//
// Idempotent: a user who already has a marker record cannot re-apply here (they
// use POST /api/marker/board-access to request more boards instead).
//
// Supabase generated types don't know about markers / marker_board_access yet,
// so rows are cast through `unknown`.

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import {
  badRequestResponse,
  rateLimitResponse,
  serverErrorResponse,
  unauthorizedResponse,
  unsupportedMediaTypeResponse,
} from '@/lib/api-response'
import { isRequestableBoard, normaliseBoard, requestBoardAccess } from '@/lib/marker-board-access'

export const dynamic = 'force-dynamic'

interface ApplyBody {
  displayName?: string
  qualification?: string
  /** Boards the applicant is qualified for (each becomes a 'requested' row). */
  boards?: string[]
  /** Optional LinkedIn profile URL. */
  linkedinUrl?: string
  /** Optional storage key of an already-uploaded CV (marker-cvs bucket). */
  cvPath?: string
  /** OPTIONAL opt-in marketing/quality consent. Never required to apply. */
  marketingConsent?: boolean
}

export async function POST(request: NextRequest) {
  try {
    const ct = request.headers.get('content-type')
    if (!ct || !ct.includes('application/json')) return unsupportedMediaTypeResponse()

    // Auth: must be a signed-in user.
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) return unauthorizedResponse('Sign in to apply as a marker.')

    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`marker-apply:${user.id}:${ip}`, { limit: 5, windowSeconds: 3600 })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    let body: ApplyBody
    try {
      body = (await request.json()) as ApplyBody
    } catch {
      return badRequestResponse('Invalid JSON body.')
    }

    const displayName = typeof body.displayName === 'string' ? body.displayName.trim() : ''
    if (displayName.length === 0) return badRequestResponse('displayName is required.')
    if (displayName.length > 200) return badRequestResponse('displayName is too long.')

    const qualification =
      typeof body.qualification === 'string' && body.qualification.trim().length > 0
        ? body.qualification.trim().slice(0, 2000)
        : null

    const rawBoards = Array.isArray(body.boards) ? body.boards : []
    const boards = Array.from(
      new Set(rawBoards.filter((b) => typeof b === 'string').map(normaliseBoard)),
    )
    for (const b of boards) {
      if (!isRequestableBoard(b)) return badRequestResponse(`Unknown board: ${b}`)
    }
    if (boards.length === 0) {
      return badRequestResponse('Select at least one board you are qualified for.')
    }

    // ── Optional fields ──────────────────────────────────────────────────────
    // LinkedIn URL: must look like a LinkedIn URL if present; else null.
    let linkedinUrl: string | null = null
    if (typeof body.linkedinUrl === 'string' && body.linkedinUrl.trim().length > 0) {
      const raw = body.linkedinUrl.trim()
      if (raw.length > 500) return badRequestResponse('LinkedIn URL is too long.')
      let host = ''
      try {
        host = new URL(raw).host.toLowerCase()
      } catch {
        return badRequestResponse('Enter a valid LinkedIn URL.')
      }
      if (!raw.toLowerCase().startsWith('https://') || !host.includes('linkedin.com')) {
        return badRequestResponse('Enter a valid LinkedIn URL (https://www.linkedin.com/...).')
      }
      linkedinUrl = raw
    }

    // CV path: must be a string the caller actually owns (starts with their id).
    let cvPath: string | null = null
    if (typeof body.cvPath === 'string' && body.cvPath.trim().length > 0) {
      const raw = body.cvPath.trim()
      if (raw.length > 500) return badRequestResponse('CV path is too long.')
      if (!raw.startsWith(`${user.id}/`)) {
        return badRequestResponse('Invalid CV reference.')
      }
      cvPath = raw
    }

    // Marketing consent is OPTIONAL — coerce to boolean. Never reject for it.
    const marketingConsent = body.marketingConsent === true
    const marketingConsentAt = marketingConsent ? new Date().toISOString() : null

    const admin = createServiceRoleClient()

    // Already a marker? Don't create a second record — direct them to request
    // more boards via the board-access route.
    const { data: existing } = await admin
      .from('markers')
      .select('id, status')
      .eq('user_id', user.id)
      .maybeSingle()

    // The three new application fields. Generated types don't know these
    // columns yet, so the insert/update payloads are cast through `unknown`.
    const extraFields = {
      linkedin_url: linkedinUrl,
      cv_path: cvPath,
      marketing_consent: marketingConsent,
      marketing_consent_at: marketingConsentAt,
    }

    let markerId: string
    if (existing) {
      markerId = (existing as unknown as { id: string }).id
      // Re-applying / updating: refresh the optional fields on the existing row.
      // Only overwrite linkedin_url / cv_path when a new value was supplied so a
      // resubmission without re-uploading doesn't wipe a previously stored CV.
      const updatePayload: Record<string, unknown> = {
        marketing_consent: marketingConsent,
        marketing_consent_at: marketingConsentAt,
      }
      if (linkedinUrl !== null) updatePayload.linkedin_url = linkedinUrl
      if (cvPath !== null) updatePayload.cv_path = cvPath
      const { error: updateErr } = await admin
        .from('markers')
        .update(updatePayload as unknown as never)
        .eq('id', markerId)
      if (updateErr) {
        console.error('[marker/apply] update marker extras failed', updateErr)
        // Non-fatal: the board request below is the primary action.
      }
    } else {
      // Create the marker record. status='active' = "a real applicant"; it does
      // NOT grant marking — that needs an approved board (enforced downstream).
      const { data: created, error: createErr } = await admin
        .from('markers')
        .insert({
          user_id: user.id,
          display_name: displayName,
          email: user.email ?? null,
          qualification,
          status: 'active',
          boards: [], // legacy array stays empty; access lives in marker_board_access
          ...extraFields,
        } as unknown as never)
        .select('id')
        .single()
      if (createErr || !created) {
        console.error('[marker/apply] create marker failed', createErr)
        return serverErrorResponse('Could not create your marker profile.')
      }
      markerId = (created as unknown as { id: string }).id
    }

    // Create a 'requested' access row per board (idempotent per board).
    const requested: string[] = []
    for (const b of boards) {
      try {
        await requestBoardAccess(markerId, b, qualification)
        requested.push(b)
      } catch (err) {
        console.error('[marker/apply] requestBoardAccess failed', b, err)
        // Continue — partial success is fine; the applicant can re-request.
      }
    }

    return NextResponse.json({
      ok: true,
      markerId,
      requestedBoards: requested,
      message:
        'Application received. You can start marking a board once an administrator approves your access to it.',
    })
  } catch (err) {
    console.error('[marker/apply] unexpected error', err)
    return serverErrorResponse('An unexpected error occurred.')
  }
}
