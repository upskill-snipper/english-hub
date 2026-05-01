// 28 Apr 2026 — wrong-board cookie redirect intentionally removed.
// Previously this layout bounced any user whose board cookie wasn't
// `'eduqas'` to /revision/poetry?wrongBoard=1. That meant a homepage
// click on the WJEC Eduqas card silently failed for anyone with a stale
// cookie from another board (e.g. an Edexcel-IGCSE user clicking GCSE
// Eduqas would be bounced and never see the requested page). We now
// trust the explicit URL the user clicked and render the page directly;
// any cross-board UX nudges should live on the unified `/revision` hub
// rather than on board-specific URLs.
export default function EduqasPoetryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
