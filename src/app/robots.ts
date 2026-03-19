import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/auth/', '/learn/', '/admin', '/dashboard', '/account'],
    },
    sitemap: 'https://theenglishhub.app/sitemap.xml',
  }
}
