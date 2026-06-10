import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Christmas Carol Context | GCSE English',
  description:
    "AO3 context for A Christmas Carol: Victorian poverty, the Poor Law and workhouses, the Industrial Revolution and Dickens's 1843 call for social reform.",
  alternates: { canonical: '/revision/texts/a-christmas-carol/context' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
