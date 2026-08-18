import type { Metadata } from 'next'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { getSchoolAccess } from '@/lib/school-access'
import { SchoolPortalGate, type GateAccess } from './school-portal-gate'

export const metadata: Metadata = {
  title: 'School Admin',
  description: 'Manage your school account, users, classes, and analytics.',
  robots: { index: false, follow: false },
}

// ─── School portal layout ───────────────────────────────────────────────────
//
// This server layout only GATHERS auth state; the gate itself lives in
// SchoolPortalGate (a client component) because it must vary by pathname:
// /school/join and /school/invite/[token] are allowlisted past the role
// check so invited teachers and code-holding pupils can get in, and a
// server layout cannot read the request pathname.
//
// Role policy (changed 2026-08-18): teachers are allowed into the portal.
// The old admin/HoD-only gate locked out the very role the marking queue,
// classes and analytics APIs were built for, and bounced already-signed-in
// users to /auth/login in a loop. Admin-only pages (billing, users,
// permissions, import, settings, join-codes) are expected to enforce their
// own inline admin check - see requireSchoolAdmin in src/lib/school-access.
// ────────────────────────────────────────────────────────────────────────────

export default async function SchoolAdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const access = user ? await getSchoolAccess(user.id, user.email ?? undefined) : null

  const gateAccess: GateAccess | null = access
    ? {
        schoolName: access.schoolName,
        accessType: access.accessType,
        accessUntil: access.accessUntil,
        isActive: access.isActive,
        userRole: access.userRole,
      }
    : null

  return (
    <SchoolPortalGate
      isAuthenticated={Boolean(user)}
      userEmail={user?.email ?? ''}
      access={gateAccess}
    >
      {children}
    </SchoolPortalGate>
  )
}
