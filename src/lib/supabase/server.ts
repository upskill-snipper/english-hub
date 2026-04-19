import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies, type UnsafeUnwrappedCookies } from 'next/headers'

export function createServerSupabaseClient() {
  const cookieStore = cookies() as unknown as UnsafeUnwrappedCookies

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({
              name,
              value,
              ...options,
              secure: process.env.NODE_ENV === 'production',
              sameSite: options.sameSite ?? 'lax',
            })
          } catch {
            // Server Component — ignore
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch {
            // Server Component — ignore
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
