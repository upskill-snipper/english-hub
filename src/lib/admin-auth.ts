import { createServerSupabaseClient } from '@/lib/supabase/server'
import { isSiteAdmin } from '@/lib/site-admin'

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || 'admin@theenglishhub.app')
  .split(',')
  .map((e) => e.trim().toLowerCase())

export async function verifyAdmin() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    return { user: null, error: 'Unauthorized' as const }
  }

  const isAdmin = ADMIN_EMAILS.includes(user.email?.toLowerCase() ?? '') || isSiteAdmin(user.email)
  if (!isAdmin) {
    return { user, error: 'Forbidden' as const }
  }

  return { user, error: null }
}
