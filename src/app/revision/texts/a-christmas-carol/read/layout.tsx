import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read A Christmas Carol Online, Free',
  description:
    'Read the full novella of A Christmas Carol by Charles Dickens online, free. Quotations, themes, language and characters highlighted inline.',
  alternates: { canonical: '/revision/texts/a-christmas-carol/read' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
