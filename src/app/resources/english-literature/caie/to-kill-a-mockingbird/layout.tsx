import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'To Kill a Mockingbird - CAIE IGCSE',
  description:
    'CAIE IGCSE English Literature guide for To Kill a Mockingbird. Character analysis, themes of justice and prejudice, key quotes, and exam tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/caie/to-kill-a-mockingbird' },
  openGraph: {
    title: 'To Kill a Mockingbird - CAIE IGCSE — The English Hub',
    description:
      'CAIE IGCSE English Literature guide for To Kill a Mockingbird. Character analysis, themes of justice and prejudice, key quotes, and exam tips.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
