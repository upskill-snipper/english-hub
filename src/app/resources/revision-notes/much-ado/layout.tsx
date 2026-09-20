import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Much Ado About Nothing Revision Notes',
  description:
    "GCSE revision notes for Shakespeare's Much Ado About Nothing: scene-by-scene plot, nine character profiles, five themes and 24 key quotations.",
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/much-ado' },
  openGraph: {
    title: 'Much Ado About Nothing Revision Notes - The English Hub',
    description:
      "GCSE revision notes for Shakespeare's Much Ado About Nothing: scene-by-scene plot, nine character profiles, five themes and 24 key quotations.",
    images: [
      {
        url: '/api/og?title=Much+Ado+About+Nothing+Revision+Notes+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Much Ado About Nothing Revision Notes - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
