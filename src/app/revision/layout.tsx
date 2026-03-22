import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revision — The English Hub',
  description:
    'Revise key English topics with interactive flashcards, technique guides and spaced-repetition tools for KS3, GCSE and IGCSE exam success.',
  openGraph: {
    title: 'Revision — The English Hub',
    description:
      'Revise key English topics with interactive flashcards, technique guides and spaced-repetition tools for KS3, GCSE and IGCSE exam success.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
