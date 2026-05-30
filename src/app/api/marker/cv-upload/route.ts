// ─── Marker · CV Upload ────────────────────────────────────────────────────
// POST /api/marker/cv-upload  (multipart/form-data, field name: 'file')
//
// A signed-in applicant uploads their CV (PDF or Word) as part of the marker
// application. The file is stored in the PRIVATE 'marker-cvs' storage bucket
// under `${user.id}/cv-<ts>.<ext>` via the service-role client (which bypasses
// RLS — there are NO storage policies on this bucket, so CVs stay private and
// are only ever read back through an admin-only signed URL).
//
// The returned { path } is later submitted to /api/marker/apply, which
// sanity-checks that the path starts with the caller's own user id before
// persisting it onto the markers row.
//
// Supabase generated types don't know about the bucket, but the storage API is
// untyped here, so no casts are needed.

import { NextRequest } from 'next/server'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import {
  badRequestResponse,
  rateLimitResponse,
  serverErrorResponse,
  unauthorizedResponse,
} from '@/lib/api-response'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// Allowed CV mime types → file extension. Anything else is rejected.
const ALLOWED_MIME: Record<string, string> = {
  'application/pdf': 'pdf',
  'application/msword': 'doc',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
}

const MAX_BYTES = 5 * 1024 * 1024 // 5 MB

export async function POST(request: NextRequest) {
  try {
    // Auth: must be a signed-in user.
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) return unauthorizedResponse('Sign in to upload your CV.')

    // Rate-limit: 10 uploads/hour per user+ip.
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`marker-cv-upload:${user.id}:${ip}`, {
      limit: 10,
      windowSeconds: 3600,
    })
    if (!rl.success) return rateLimitResponse(rl.resetAt)

    // Parse the multipart form and pull the file.
    let form: FormData
    try {
      form = await request.formData()
    } catch {
      return badRequestResponse('Expected multipart/form-data with a "file" field.')
    }
    const file = form.get('file')
    if (!(file instanceof File)) {
      return badRequestResponse('No file uploaded.')
    }

    // Validate mime type (PDF or Word only).
    const ext = ALLOWED_MIME[file.type]
    if (!ext) {
      return badRequestResponse('CV must be a PDF or Word document (.pdf, .doc, .docx).')
    }

    // Validate size (max 5 MB).
    if (file.size > MAX_BYTES) {
      return badRequestResponse('CV is too large. Maximum size is 5 MB.')
    }
    if (file.size === 0) {
      return badRequestResponse('Uploaded file is empty.')
    }

    const buffer = Buffer.from(await file.arrayBuffer())

    // Upload to the PRIVATE bucket. Path is namespaced by user id so a user can
    // only ever write under their own prefix (and apply route re-checks this).
    const path = `${user.id}/cv-${Date.now()}.${ext}`
    const admin = createServiceRoleClient()
    const { error: uploadErr } = await admin.storage
      .from('marker-cvs')
      .upload(path, buffer, { contentType: file.type, upsert: true })

    if (uploadErr) {
      console.error('[marker/cv-upload] storage upload failed', uploadErr)
      return serverErrorResponse('Could not upload your CV. Please try again.')
    }

    return Response.json({ path }, { status: 200 })
  } catch (err) {
    console.error('[marker/cv-upload] unexpected error', err)
    return serverErrorResponse('An unexpected error occurred.')
  }
}
