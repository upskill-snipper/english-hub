import { NextRequest, NextResponse } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { runCron } from '@/lib/cron/observability'
import { authoriseCronRequest } from '@/lib/cron/auth'

export const dynamic = 'force-dynamic'

// Cron job: expire pending invites whose invite_expires_at has passed.
// Runs daily at 2 AM (configured in vercel.json).
export async function GET(request: NextRequest) {
  const auth = authoriseCronRequest(request, 'expire-invites')
  if (!auth.ok) return auth.response

  return runCron('expire-invites', async () => {
    const admin = createServiceRoleClient()

    const { data, error } = await admin
      .from('school_members')
      .update({ invite_status: 'expired' })
      .eq('invite_status', 'pending')
      .lt('invite_expires_at', new Date().toISOString())
      .select('id')

    if (error) {
      throw new Error(`Failed to expire invites: ${error.message}`)
    }

    return { expired: data?.length ?? 0 }
  })
}
