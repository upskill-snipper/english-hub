// Use Incremental Static Regeneration for SEO analysis pages instead of
// full static generation at build time. There are ~200 pages in this tree
// and generating them all during `next build` pushes the Vercel build
// container over its memory limit. With revalidate = 86400 (24h) the pages
// are generated on first request and cached at the edge, which is better
// for build performance and equally good for SEO (Googlebot gets the same
// cached HTML). Child layouts that also export `revalidate` will override.
export const revalidate = 86400

export default function AnalysisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
