import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'I started Early — Edexcel Time & Place',
  description:
    'I started Early – Took my Dog by Emily Dickinson — GCSE analysis for the Edexcel Time and Place cluster: the sea, desire and comparison poems.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/poetry/edexcel/time-and-place/i-started-early-took-my-dog',
  },
}

export default function EdexcelTimeAndPlaceIStartedEarlyTookMyDogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
