import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'View From The Bridge Revision Notes',
  description:
    'Free View From The Bridge revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/view-from-the-bridge' },
  openGraph: {
    title: 'View From The Bridge Revision Notes — The English Hub',
    description:
      'Free View From The Bridge revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
