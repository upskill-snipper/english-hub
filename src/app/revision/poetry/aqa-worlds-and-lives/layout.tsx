// 28 Apr 2026 - wrong-board cookie redirect intentionally removed. Worlds
// and Lives is an AQA-specific cluster, but bouncing non-AQA users meant
// homepage clicks on the AQA card silently failed for anyone holding an
// older board cookie. The page is now reachable directly; cross-board
// UX nudges belong on the unified `/revision` hub.
export default function AqaWorldsAndLivesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
