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
 * ASSUMPTION(W5): the admin name is derived from the Prisma `User` row of
 * the `adminUserId` recorded on the job. If that lookup fails (e.g. the
 * admin has since been deleted) we return the raw email fallback or 'the
 * school administrator'.
 */

import { NextRequest, NextResponse } from 'next/server'

import { createServerSupabaseClient } from '@/lib/supabase/server'
import { verifySchoolMember } from '@/lib/school-auth'
import { prisma } from '@/lib/prisma'
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
    let adminName: string | null = null
    try {
      const adminUser = await prisma.user.findUnique({
        where: { id: latest.adminUserId },
        select: { firstName: true, lastName: true, email: true },
      })
      if (adminUser) {
        adminName =
          `${adminUser.firstName ?? ''} ${adminUser.lastName ?? ''}`.trim() || adminUser.email
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
