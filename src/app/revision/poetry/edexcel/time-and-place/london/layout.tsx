import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'London — Blake | Edexcel Time & Place',
  description:
    'London by William Blake — GCSE analysis for the Pearson Edexcel Time and Place cluster: the city, oppression, structure and comparison poems.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/edexcel/time-and-place/london',
  },
}

export default function EdexcelTimeAndPlaceLondonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
