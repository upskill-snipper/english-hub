/**
 * Site-wide admin configuration.
 *
 * Site admins can access ALL areas of the platform (school portal, teacher
 * dashboard, student pages, admin panel, etc.) regardless of whether they
 * have a school_members row in Supabase.
 *
 * Add emails here in lowercase. The check is always case-insensitive.
 */

export const SITE_ADMIN_EMAILS: string[] = [
  'lauren.x@hotmail.co.uk',
  'calumjohnson@hotmail.com',
]

/**
 * Returns true when the given email belongs to a site-wide admin.
 */
export function isSiteAdmin(email: string | null | undefined): boolean {
  if (!email) return false
  return SITE_ADMIN_EMAILS.includes(email.toLowerCase())
}
