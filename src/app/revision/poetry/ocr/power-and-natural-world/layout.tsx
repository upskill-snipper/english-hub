import type { Metadata } from 'next'

// OCR has no cluster of this name. Until 2 October 2026 this metadata described
// one, with fifteen poems. The page now says so and is noindex; see page.tsx.
// The robots rule is not set here because this layout also wraps The Eagle.
export const metadata: Metadata = {
  title: 'OCR has no Power and the Natural World cluster',
  description:
    "OCR's GCSE anthology, Towards a World Unknown, has three clusters: Love and Relationships, Conflict, and Youth and Age.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/ocr/power-and-natural-world',
  },
}

export default function OcrPowerAndNaturalWorldLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
