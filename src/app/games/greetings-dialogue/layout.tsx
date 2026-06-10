import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Greetings and Replies Game | EAL English',
  description:
    'Pick the right reply in everyday English conversations: greetings, requests and small talk. A free speaking-skills game for EAL beginners.',
  alternates: { canonical: '/games/greetings-dialogue' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
