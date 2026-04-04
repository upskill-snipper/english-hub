import { MetadataRoute } from 'next'

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
          '/demo/',
          '/affiliates/apply',
          '/affiliates/dashboard',
        ],
      },
    ],
    sitemap: 'https://theenglishhub.app/sitemap.xml',
  }
}
