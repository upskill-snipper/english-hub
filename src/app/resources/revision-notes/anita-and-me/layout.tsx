import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anita and Me by Meera Syal | AQA GCSE Revision Notes',
  description:
    "AQA GCSE revision notes for Meera Syal's Anita and Me: plot, Meena and Anita character profiles, themes of identity and racism, key quotes and exam questions.",
  alternates: { canonical: '/resources/revision-notes/anita-and-me' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
