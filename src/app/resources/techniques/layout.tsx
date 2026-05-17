import type { Metadata } from 'next'
import { t } from '@/lib/i18n/t'

export async function generateMetadata(): Promise<Metadata> {
  const [title, description, ogTitle] = await Promise.all([
    t('resources.techniques.meta.title'),
    t('resources.techniques.meta.desc'),
    t('resources.techniques.meta.og_title'),
  ])
  return {
    title,
    description,
    alternates: { canonical: 'https://theenglishhub.app/resources/techniques' },
    openGraph: { title: ogTitle, description },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
