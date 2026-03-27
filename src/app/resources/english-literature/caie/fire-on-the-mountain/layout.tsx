import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fire on the Mountain - CAIE IGCSE',
  description:
    'CAIE IGCSE English Literature guide for Fire on the Mountain by Anita Desai. Character analysis, themes, key quotes, and exam preparation.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/caie/fire-on-the-mountain' },
  openGraph: {
    title: 'Fire on the Mountain - CAIE IGCSE — The English Hub',
    description:
      'CAIE IGCSE English Literature guide for Fire on the Mountain by Anita Desai. Character analysis, themes, key quotes, and exam preparation.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
