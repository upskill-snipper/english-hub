'use client'

// ─── School portal access gate ──────────────────────────────────────────────
//
// Companion to src/app/school/layout.tsx (the server layout fetches the
// user's school access and passes it down; this component applies the gate).
//
// WHY A CLIENT COMPONENT: the gate must vary by pathname because two routes
// under /school are deliberately PUBLIC to the role check - the invite
// acceptance page (/school/invite/[token]) and the join-code page
// (/school/join). A Next.js server layout cannot read the request pathname,
// so the path-aware part of the gate lives here. usePathname() resolves
// during SSR as well, so redirects and the 403 state still render
// server-side with no client flash.
//
// Behaviour:
//   • /school/join and /school/invite/[token] bypass the gate entirely
//     (rendered without the admin chrome) so invited teachers and pupils
//     with codes can actually get in. Those pages handle their own
//     sign-in prompts.
//   • Unauthenticated users elsewhere are redirected to /auth/login.
//   • Signed-in users without an eligible role (or with expired access) see
//     a rendered 403 explainer linking to /dashboard - never a bounce back
//     to the login page they are already past.
//   • Teachers ARE allowed through: the APIs beneath implement
//     teacher-scoped branches, and admin-only pages carry (or will carry)
//     their own inline admin checks.
// ────────────────────────────────────────────────────────────────────────────

import Link from 'next/link'
import { usePathname, redirect } from 'next/navigation'
import { SchoolSidebarNav } from '@/components/school/SchoolSidebarNav'

export interface GateAccess {
  schoolName: string
  accessType: 'founder' | 'paid' | 'trial' | 'expired'
  accessUntil: string | null
  isActive: boolean
  userRole: 'admin' | 'head_of_department' | 'teacher' | 'student'
}

const PORTAL_ROLES = ['admin', 'head_of_department', 'teacher'] as const

/** Paths that must stay reachable before any membership exists. */
function isPublicSchoolPath(pathname: string): boolean {
  // /school/join - pupils and teachers entering a join code.
  if (pathname === '/school/join') return true
  // /school/invite/[token] - invite acceptance. NB the bare /school/invite
  // (no token) is the admin "invite teachers" page and stays gated.
  if (/^\/school\/invite\/[^/]+/.test(pathname)) return true
  return false
}

function NotAuthorised() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen items-center justify-center bg-background p-6"
    >
      <div className="w-full max-w-md rounded-lg border p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">403</p>
        <h1 className="mt-2 text-2xl font-bold">You do not have access to the school portal</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This area is for school staff. If you believe you should have access, ask your school
          administrator to invite you, or check that your school&apos;s access is still active.
        </p>
        <Link
          href="/dashboard"
          className="mt-6 inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          Go to your dashboard
        </Link>
      </div>
    </main>
  )
}

export function SchoolPortalGate({
  isAuthenticated,
  userEmail,
  access,
  children,
}: {
  isAuthenticated: boolean
  userEmail: string
  access: GateAccess | null
  children: React.ReactNode
}) {
  const pathname = usePathname() ?? ''

  // Invite-acceptance and join-code flows must work for users who have no
  // membership yet (and, for invites, possibly no account yet).
  if (isPublicSchoolPath(pathname)) {
    return <>{children}</>
  }

  if (!isAuthenticated) {
    redirect('/auth/login')
  }

  // Signed-in but no membership, expired access, or a non-staff role:
  // render an explanation instead of bouncing a logged-in user to login.
  if (!access || !access.isActive) {
    return <NotAuthorised />
  }
  if (!(PORTAL_ROLES as readonly string[]).includes(access.userRole)) {
    return <NotAuthorised />
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar (fixed 240px desktop, hamburger on mobile) */}
      <SchoolSidebarNav
        schoolName={access.schoolName}
        userEmail={userEmail}
        accessType={access.accessType}
        founderAccess={access.accessType === 'founder'}
        accessUntil={access.accessUntil ?? undefined}
      />

      {/* Main content area - id matches the skip-to-content link in
          src/app/layout.tsx. The root layout-shell suppresses its own
          #main-content wrapper on /school/* routes, so this is the only
          anchor keyboard users land on after using the skip link. */}
      <main id="main-content" className="flex-1 min-w-0 overflow-auto p-6">
        {children}
      </main>
    </div>
  )
}
