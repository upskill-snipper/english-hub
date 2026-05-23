import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Westminster Bridge — Edexcel Time & Place',
  description:
    'Composed upon Westminster Bridge by William Wordsworth — GCSE analysis for the Edexcel Time and Place cluster: the city, awe and comparison poems.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/poetry/edexcel/time-and-place/composed-upon-westminster-bridge',
  },
}

export default function EdexcelTimeAndPlaceComposedUponWestminsterBridgeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
