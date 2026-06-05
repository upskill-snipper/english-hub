// ─── Admin · Read a marker's CV ────────────────────────────────────────────
// GET /api/admin/marker-cv?markerId=<uuid>
//
// Admin-only. Looks up the marker's stored CV path and returns a short-lived
// SIGNED URL (10-minute expiry) so an administrator can view the uploaded CV.
// The 'marker-cvs' bucket is PRIVATE (no RLS policies); the signed URL is the
// only way the file is ever served, and only to a verified admin here.
//
// Also surfaces the applicant's LinkedIn URL and marketing-consent flag so the
// admin has the full application context in one call.
//
// Generated types don't know the new markers columns; the row is cast through
// `unknown`.

import { NextRequest } from 'next/server'
import { verifyAdmin } from '@/lib/admin-auth'
import { createServiceRoleClient } from '@/lib/supabase/server'
import {
  badRequestResponse,
  forbiddenResponse,
  serverErrorResponse,
  unauthorizedResponse,
} from '@/lib/api-response'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { error: adminError } = await verifyAdmin()
    if (adminError === 'Unauthorized') return unauthorizedResponse()
    if (adminError === 'Forbidden') return forbiddenResponse()

    const markerId = request.nextUrl.searchParams.get('markerId')?.trim()
    if (!markerId) return badRequestResponse('markerId is required.')

    const admin = createServiceRoleClient()
    const { data, error } = await admin
      .from('markers')
      .select('cv_path, linkedin_url, marketing_consent, marketing_anonymous')
      .eq('id', markerId)
      .maybeSingle()

    if (error) {
      console.error('[admin/marker-cv] lookup failed', error)
      return serverErrorResponse('Could not look up the marker.')
    }

    const row = (data ?? null) as unknown as {
      cv_path: string | null
      linkedin_url: string | null
      marketing_consent: boolean | null
      marketing_anonymous: boolean | null
    } | null

    if (!row) return badRequestResponse('Marker not found.')

    const linkedinUrl = row.linkedin_url ?? null
    const marketingConsent = row.marketing_consent === true
    const marketingAnonymous = row.marketing_anonymous === true

    if (!row.cv_path) {
      return Response.json(
        { found: false, linkedinUrl, marketingConsent, marketingAnonymous },
        { status: 200 },
      )
    }

    // 10-minute signed URL into the private bucket.
    const { data: signed, error: signErr } = await admin.storage
      .from('marker-cvs')
      .createSignedUrl(row.cv_path, 60 * 10)

    if (signErr || !signed?.signedUrl) {
      console.error('[admin/marker-cv] signed url failed', signErr)
      return serverErrorResponse('Could not generate a link to the CV.')
    }

    return Response.json(
      { found: true, url: signed.signedUrl, linkedinUrl, marketingConsent, marketingAnonymous },
      { status: 200 },
    )
  } catch (err) {
    console.error('[admin/marker-cv] unexpected error', err)
    return serverErrorResponse('An unexpected error occurred.')
  }
}
