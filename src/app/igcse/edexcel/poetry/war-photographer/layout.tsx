import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'War Photographer (Carol Ann Duffy) - IGCSE Poetry',
  description:
    "Analysis of Duffy's 'War Photographer' for the Edexcel IGCSE Literature anthology: suffering, detachment and the media, with key quotations and structure.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
