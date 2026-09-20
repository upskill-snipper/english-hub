import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A View from the Bridge Revision Notes',
  description:
    'A View from the Bridge revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/revision-notes/view-from-the-bridge',
  },
  openGraph: {
    title: 'A View from the Bridge Revision Notes - The English Hub',
    description:
      'A View from the Bridge revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
