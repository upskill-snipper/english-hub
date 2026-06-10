import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/poetry/war-photographer' },
  title: 'War Photographer (Carol Ann Duffy) - IGCSE Poetry',
  description:
    "Analysis of Duffy's 'War Photographer' for the Edexcel IGCSE Literature anthology: suffering, detachment and the media, with key quotations and structure.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
