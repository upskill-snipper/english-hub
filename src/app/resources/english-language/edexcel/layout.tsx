// 28 Apr 2026 — wrong-board cookie redirect intentionally removed.
// See /revision/poetry/edexcel/layout.tsx for the canonical version of
// this fix. Bouncing stale-cookie users away from URLs they explicitly
// clicked silently broke the homepage / cross-hub navigation flows.
// Render the page; cross-board UX nudges belong on the unified hubs.
export default function EdexcelLangLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
