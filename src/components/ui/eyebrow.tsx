import { cn } from '@/lib/utils'

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-clay-500", className)}>{children}</span>
}
