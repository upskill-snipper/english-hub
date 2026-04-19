// Cycle 7 / Identity PR-3: lookups prefer supabaseUserId over email.
import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

// DELETE /api/privacy/delete-essay
// Soft-deletes a specific essay belonging to the current user
export async function DELETE(request: NextRequest) {
  try {
    // ── Rate limit: 10 deletions per 15 minutes per IP ─────────────────
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`privacy-delete-essay:${ip}`, {
      limit: 10,
      windowSeconds: 900,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    const supabase = createServerSupabaseClient()
    const {
      data: { user: authUser },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !authUser) {
      return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
    }

    const body = await request.json()
    const essayId = body.essayId

    if (!essayId || typeof essayId !== 'string') {
      return NextResponse.json({ error: 'essayId is required' }, { status: 400 })
    }

    const prismaUser = await prisma.user.findUnique({
      where: { supabaseUserId: authUser.id },
      select: { id: true },
    })
    // Fallback for pre-backfill or mismatched rows — logged as a warning.
    const user =
      prismaUser ??
      (await prisma.user.findUnique({
        where: { email: authUser.email!.toLowerCase() },
        select: { id: true },
      }))
    if (user && !prismaUser) {
      console.warn('[identity] Prisma row matched by email, not supabaseUserId', {
        supabaseUserId: authUser.id,
        prismaUserId: user.id,
      })
    }

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Find the essay and verify ownership
    const essay = await prisma.essay.findUnique({
      where: { id: essayId },
      select: { id: true, userId: true, deletedAt: true, title: true },
    })

    if (!essay) {
      return NextResponse.json({ error: 'Essay not found' }, { status: 404 })
    }

    if (essay.userId !== user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    if (essay.deletedAt) {
      return NextResponse.json({ error: 'This essay has already been deleted.' }, { status: 409 })
    }

    // Soft delete the essay
    await prisma.essay.update({
      where: { id: essayId },
      data: { deletedAt: new Date() },
    })

    // Audit log (ip already declared above for rate limiting)
    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: 'ESSAY_DELETED',
        resource: 'Essay',
        resourceId: essayId,
        details: { title: essay.title },
        ipAddress: ip,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('DELETE /api/privacy/delete-essay error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
