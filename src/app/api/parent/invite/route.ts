// Cycle 7 / Identity PR-3: lookups prefer supabaseUserId over email.
import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { createInvite, getActiveInvite } from '@/lib/parent-linking'
import { rateLimit } from '@/lib/rate-limit'

// ─── POST: Student generates an invite code/link for their parent ───────

export async function POST(request: NextRequest) {
  try {
    // ── Authenticate ───────────────────────────────────────────────────
    const supabase = createServerSupabaseClient()
    const {
      data: { user: authUser },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !authUser) {
      return NextResponse.json({ error: 'Authentication required.' }, { status: 401 })
    }

    const dbUserBySupabaseId = await prisma.user.findUnique({
      where: { supabaseUserId: authUser.id },
      select: {
        id: true,
        role: true,
        accountStatus: true,
        firstName: true,
      },
    })
    // Fallback for pre-backfill or mismatched rows - logged as a warning.
    const dbUser =
      dbUserBySupabaseId ??
      (await prisma.user.findUnique({
        where: { email: authUser.email!.toLowerCase() },
        select: {
          id: true,
          role: true,
          accountStatus: true,
          firstName: true,
        },
      }))
    if (dbUser && !dbUserBySupabaseId) {
      console.warn('[identity] Prisma row matched by email, not supabaseUserId', {
        supabaseUserId: authUser.id,
        prismaUserId: dbUser.id,
      })
    }

    if (!dbUser || dbUser.accountStatus !== 'ACTIVE') {
      return NextResponse.json({ error: 'Session expired. Please log in again.' }, { status: 401 })
    }

    const user = dbUser

    // Only students can create parent invites
    if (user.role !== 'STUDENT') {
      return NextResponse.json(
        { error: 'Only students can generate parent invite codes.' },
        { status: 403 },
      )
    }

    // ── Rate limit ─────────────────────────────────────────────────────
    const rl = await rateLimit(`parent-invite:${user.id}`, { limit: 5, windowSeconds: 3600 }) // 5 per hour
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
        },
      )
    }

    // ── Create invite ──────────────────────────────────────────────────
    const invite = await createInvite(user.id)

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://theenglishhub.app'
    const inviteUrl = `${baseUrl}/invite/${invite.code}`

    return NextResponse.json(
      {
        code: invite.code,
        inviteUrl,
        expiresAt: invite.expiresAt.toISOString(),
        message: 'Invite code generated successfully. Share this with your parent.',
      },
      { status: 201 },
    )
  } catch (err) {
    console.error('[parent/invite] Error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}

// ─── GET: Student retrieves their current active invite ─────────────────

export async function GET(request: NextRequest) {
  try {
    // ── Authenticate ───────────────────────────────────────────────────
    const supabaseGet = createServerSupabaseClient()
    const {
      data: { user: authUserGet },
      error: authErrorGet,
    } = await supabaseGet.auth.getUser()
    if (authErrorGet || !authUserGet) {
      return NextResponse.json({ error: 'Authentication required.' }, { status: 401 })
    }

    const dbUserBySupabaseId = await prisma.user.findUnique({
      where: { supabaseUserId: authUserGet.id },
      select: {
        id: true,
        role: true,
        accountStatus: true,
      },
    })
    // Fallback for pre-backfill or mismatched rows - logged as a warning.
    const dbUser =
      dbUserBySupabaseId ??
      (await prisma.user.findUnique({
        where: { email: authUserGet.email!.toLowerCase() },
        select: {
          id: true,
          role: true,
          accountStatus: true,
        },
      }))
    if (dbUser && !dbUserBySupabaseId) {
      console.warn('[identity] Prisma row matched by email, not supabaseUserId', {
        supabaseUserId: authUserGet.id,
        prismaUserId: dbUser.id,
      })
    }

    if (!dbUser || dbUser.accountStatus !== 'ACTIVE') {
      return NextResponse.json({ error: 'Session expired. Please log in again.' }, { status: 401 })
    }

    const user = dbUser

    if (user.role !== 'STUDENT') {
      return NextResponse.json(
        { error: 'Only students can view their parent invite codes.' },
        { status: 403 },
      )
    }

    const invite = await getActiveInvite(user.id)

    if (!invite) {
      return NextResponse.json({ invite: null })
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://theenglishhub.app'

    return NextResponse.json({
      invite: {
        code: invite.code,
        inviteUrl: `${baseUrl}/invite/${invite.code}`,
        expiresAt: invite.expiresAt.toISOString(),
        createdAt: invite.createdAt.toISOString(),
      },
    })
  } catch (err) {
    console.error('[parent/invite] GET Error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
