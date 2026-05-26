import { createServerClient } from '@supabase/ssr'
import { cookies, type UnsafeUnwrappedCookies } from 'next/headers'

/**
 * Server-side Supabase client. Uses the modern `getAll` / `setAll` cookie
 * API (the deprecated `get` / `set` / `remove` triplet was the source of
 * intermittent login failures - chunked session cookies were not being
 * round-tripped reliably between request and response).
 *
 * Stays synchronously-invokable so existing call sites remain unchanged.
 * `cookies()` returns a Promise in Next 15 but exposes the underlying
 * cookie store synchronously via `UnsafeUnwrappedCookies` until cache
 * components ship in 16. When that lands, this wrapper must become async
 * and every caller must `await` it; until then the synchronous form is
 * the documented migration path (see Next.js error E223).
 */
export function createServerSupabaseClient() {
  const cookieStore = cookies() as unknown as UnsafeUnwrappedCookies

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            for (const { name, value, options } of cookiesToSet) {
              cookieStore.set(name, value, {
                ...options,
                // Force `secure` in production - the founder's HTTPS-only
                // deploy needs this, and Supabase's defaults omit it.
                secure: process.env.NODE_ENV === 'production',
                sameSite: options?.sameSite ?? 'lax',
              })
            }
          } catch {
            // Server Components cannot mutate cookies. The middleware
            // (src/middleware.ts → updateSession) refreshes sessions
            // before any Server Component renders, so swallowing the
            // error here is safe and matches the official Supabase
            // pattern for Next.js App Router.
          }
        },
      },
    },
  )
}

export function createServiceRoleClient() {
  // Use dynamic import-style require to avoid bundling service role key into client
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { createClient } =
    require('@supabase/supabase-js') as typeof import('@supabase/supabase-js')
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
}
