import { createServiceRoleClient } from '@/lib/supabase/server'

/**
 * The `profiles` columns the identity layer reads.
 *
 * `profiles` is written during Supabase signup for every account, including
 * the ~96% that never reached /api/auth/register (email confirmation is ON,
 * so there is no session at signup and the Prisma projection was never
 * written). It is therefore the only place a Supabase-native account's
 * declared details exist.
 *
 * Read-only. Nothing in src/lib/identity ever writes to `profiles`.
 */
export interface IdentityProfile {
  id: string
  email: string | null
  full_name: string | null
  date_of_birth: string | null
  is_minor: boolean | null
  role: string | null
  school_name: string | null
  exam_board: string | null
  created_at: string | null
}

const COLUMNS =
  'id, email, full_name, date_of_birth, is_minor, role, school_name, exam_board, created_at'

/**
 * Reads the Supabase `profiles` row for an auth user.
 *
 * Returns null both when there is no row and when the read fails. Callers
 * must treat null as "we do not know", never as "this is an adult" - see
 * resolveAgeBand in ./age.ts, which fails closed on it.
 */
export async function readIdentityProfile(supabaseUserId: string): Promise<IdentityProfile | null> {
  try {
    const admin = createServiceRoleClient()
    const { data, error } = await admin
      .from('profiles')
      .select(COLUMNS)
      .eq('id', supabaseUserId)
      .maybeSingle()

    if (error || !data) return null
    return data as unknown as IdentityProfile
  } catch {
    return null
  }
}
