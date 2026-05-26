import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'To Autumn - Keats | Edexcel Time & Place',
  description:
    'To Autumn by John Keats - GCSE analysis for the Pearson Edexcel Time and Place cluster: nature, ripeness, the ode and comparison poems.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/edexcel/time-and-place/to-autumn',
  },
}

export default function EdexcelTimeAndPlaceToAutumnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
