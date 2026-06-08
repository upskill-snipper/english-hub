import { MetadataRoute } from 'next'

// 2026-06-08 — SEO + GEO audit fixes.
//
// /demo/ was previously in the disallow list (when demos were treated
// as internal "try-it-out" surfaces). They are now the primary
// institutional conversion path: /demo/school, /demo/teacher,
// /demo/student are the dashboards a Qatar/GCC headteacher will land
// on from the Expo. Blocking them from Google + AI crawlers was
// hiding the strongest signal we have for the schools sales motion.
//
// /for-schools/register/ was removed — the /for-* URLs 308 to the new
// /schools etc. canonical URLs (see next.config redirects) so the
// rule pointed at a path that no longer exists, and the residual
// allow/disallow conflict was confusing crawlers.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/auth/register', '/auth/login'],
        disallow: [
          '/api/',
          '/dashboard/',
          '/school/',
          '/admin/',
          '/account/',
          '/learn/',
          '/auth/',
          '/consent/',
          '/verify/',
          '/certificate/',
          '/parent/',
          '/affiliates/apply',
          '/affiliates/dashboard',
          '/affiliates/payouts',
          '/affiliates/resources',
          '/affiliates/settings',
        ],
      },
    ],
    sitemap: 'https://theenglishhub.app/sitemap.xml',
  }
}
