import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
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
        ],
      },
    ],
    sitemap: 'https://theenglishhub.app/sitemap.xml',
  }
}
