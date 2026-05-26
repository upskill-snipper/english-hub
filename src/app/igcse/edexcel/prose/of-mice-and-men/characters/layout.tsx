import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Of Mice and Men: Characters - Edexcel IGCSE Literature',
  description:
    "Character analysis for Steinbeck's Of Mice and Men for Edexcel IGCSE Literature: George, Lennie, Curley's wife, Candy, Crooks and Slim, with key quotations.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
