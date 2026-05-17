import type { Metadata } from 'next'
import { t } from '@/lib/i18n/t'

export async function generateMetadata(): Promise<Metadata> {
  const [title, description, ogTitle] = await Promise.all([
    t('resources.glossary.meta.title'),
    t('resources.glossary.meta.desc'),
    t('resources.glossary.meta.og_title'),
  ])
  return {
    title,
    description,
    alternates: { canonical: 'https://theenglishhub.app/resources/glossary' },
    openGraph: { title: ogTitle, description },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
