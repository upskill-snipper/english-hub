import type { Metadata } from 'next'
import { t } from '@/lib/i18n/t'

export async function generateMetadata(): Promise<Metadata> {
  const [title, description, ogTitle] = await Promise.all([
    t('resources.rev_notes.meta.title'),
    t('resources.rev_notes.meta.desc'),
    t('resources.rev_notes.meta.og_title'),
  ])
  return {
    title,
    description,
    alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes' },
    openGraph: { title: ogTitle, description },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
