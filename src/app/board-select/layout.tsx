import type { ReactNode } from 'react'

/**
 * Minimal layout override for /board-select.
 *
 * The root layout mounts <BoardGate /> which would, on any non-exempt path,
 * show a blocking modal prompting the user to pick a board. `/board-select`
 * is explicitly exempted inside BoardGate and the middleware allowlist, so
 * this layout intentionally renders children as-is without adding any
 * provider, chrome, or redirect logic that could trigger a gate loop.
 */
export default function BoardSelectLayout({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
