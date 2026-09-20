import type { Metadata } from 'next'
import { t } from '@/lib/i18n/t'

export async function generateMetadata(): Promise<Metadata> {
  const [title, description, ogTitle] = await Promise.all([
    t('resources.vocab.meta.title'),
    t('resources.vocab.meta.desc'),
    t('resources.vocab.meta.og_title'),
  ])
  return {
    title,
    description,
    alternates: { canonical: 'https://theenglishhub.app/resources/vocabulary' },
    openGraph: {
      title: ogTitle,
      description,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(ogTitle)}`,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
