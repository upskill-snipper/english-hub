import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'
import { createServiceRoleClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

// Cron job: expire pending invites whose invite_expires_at has passed.
// Runs daily at 2 AM (configured in vercel.json).
export async function GET(request: NextRequest) {
  try {
    const cronSecret = process.env.CRON_SECRET
    if (!cronSecret) {
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
    }
    const authHeader = request.headers.get('authorization')
    const incoming = Buffer.from(authHeader ?? '')
    const expected = Buffer.from(`Bearer ${cronSecret}`)
    if (
      incoming.length !== expected.length ||
      !timingSafeEqual(incoming, expected)
    ) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const admin = createServiceRoleClient()

    const { data, error } = await admin
      .from('school_members')
      .update({ invite_status: 'expired' })
      .eq('invite_status', 'pending')
      .lt('invite_expires_at', new Date().toISOString())
      .select('id')

    if (error) {
      console.error('Expire invites cron error:', error)
      return NextResponse.json({ error: 'Failed to expire invites' }, { status: 500 })
    }

    return NextResponse.json({ expired: data?.length ?? 0 })
  } catch (error) {
    console.error('Expire invites cron error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
