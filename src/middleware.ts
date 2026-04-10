import { updateSession } from '@/lib/supabase/middleware'
import { applyAffiliateTracking } from '@/middleware-affiliate'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const response = await updateSession(request)
  // Annotate the response with affiliate tracking cookie if ?ref=… is present.
  // No-op when no ref param or when the response is a redirect we want to pass through.
  return applyAffiliateTracking(request, response)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
