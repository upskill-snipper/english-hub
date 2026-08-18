import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hide and Seek by Vernon Scannell | GCSE Revision Notes',
  description:
    "Revise Vernon Scannell's Hide and Seek for GCSE: form, voice and imagery explained, themes of childhood and abandonment, key quotes and exam tips.",
  alternates: { canonical: '/resources/revision-notes/hide-and-seek' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
