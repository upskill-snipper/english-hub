import { permanentRedirect } from 'next/navigation'

/**
 * The old /parent/** portal was a localStorage mock with no real
 * authentication or data (removed August 2026). The real parent
 * experience lives at /dashboard/parent, backed by the Prisma
 * parent-linking spine (/api/parent/link + /api/parent-reports).
 *
 * This optional catch-all keeps every old link alive - /parent,
 * /parent/login, /parent/settings, /parent/delete-data and so on all
 * permanently redirect to the real parent dashboard.
 */
export default function ParentPortalRedirect() {
  permanentRedirect('/dashboard/parent')
}
