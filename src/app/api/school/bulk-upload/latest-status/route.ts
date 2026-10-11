/**
 * GET /api/school/bulk-upload/latest-status
 *
 * Read-only, any-school-member-can-call endpoint that returns the most
 * recent completed BulkUploadJob for the caller's school so the mobile
 * Settings → School → admin-status screen can render:
 *
 *   "Your school's user list is managed by <admin>. Last imported: <date>."
 *
 * The mobile app has NO write surface for bulk upload. This endpoint exists
 * purely so mobile can surface the read-only status banner.
 *
 * The admin name comes from the `profiles` row of the `adminUserId` recorded
 * on the job, which is a Supabase auth uuid. If that lookup fails (e.g. the
 * admin has since been deleted) we return the email or 'the school
 * administrator'.
 */

import { NextRequest, NextResponse } from 'next/server'

import { createServerSupabaseClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { prisma } from '@/lib/prisma'
import { readIdentityProfile } from '@/lib/identity'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerSupabaseClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const member = await verifySchoolMember(user.id)
    if (!member) {
      return NextResponse.json({ error: 'Forbidden: not a school member' }, { status: 403 })
    }

    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`bulk-upload-status:${ip}`, {
      limit: 60,
      windowSeconds: 60,
    })
    if (!rl.success) {
      return NextResponse.json({ error: 'Rate limit exceeded.' }, { status: 429 })
    }

    const latest = await prisma.bulkUploadJob.findFirst({
      where: { schoolId: member.school_id as string, status: 'completed' },
      orderBy: { completedAt: 'desc' },
    })

    if (!latest) {
      return NextResponse.json({
        hasImport: false,
        lastImportedAt: null,
        lastChangedAt: null,
        adminName: null,
      })
    }

    // Resolve the admin's display name. Best-effort - fall back to email.
    //
    // FIXED 11 October 2026. This looked the admin up as a Prisma `User.id`,
    // but the commit route records `adminUserId` as the Supabase auth uuid,
    // and a Prisma id is a cuid (CLAUDE.md, structural fact 1), so the lookup
    // never found anyone and every school saw "the school administrator". The
    // uuid keys `profiles`, which every account has.
    let adminName: string | null = null
    try {
      const profile = await readIdentityProfile(latest.adminUserId)
      if (profile) {
        adminName = profile.full_name?.trim() || profile.email || null
      }
    } catch {
      // Non-fatal.
    }

    return NextResponse.json({
      hasImport: true,
      lastImportedAt: latest.completedAt?.toISOString() ?? null,
      lastChangedAt: latest.completedAt?.toISOString() ?? null,
      adminName: adminName ?? 'the school administrator',
      createdCount: latest.createdCount,
      updatedCount: latest.updatedCount,
    })
  } catch (err) {
    console.error('bulk-upload.latest-status error', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
