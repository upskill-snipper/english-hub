// 28 Apr 2026 — wrong-board cookie redirect intentionally removed. See
// /revision/poetry/edexcel/layout.tsx and /revision/poetry/eduqas/layout.tsx
// for the same pattern + explanation. Homepage CTAs are explicit user
// choices and must always render the requested page regardless of stale
// cookie state.
export default function OcrPoetryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
