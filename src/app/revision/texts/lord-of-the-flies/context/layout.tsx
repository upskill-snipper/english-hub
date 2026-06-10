import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lord of the Flies Context | GCSE English',
  description:
    "AO3 context for Lord of the Flies: post war Britain, Golding's war experience, the atomic age and The Coral Island, explained for GCSE English essays.",
  alternates: { canonical: '/revision/texts/lord-of-the-flies/context' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
