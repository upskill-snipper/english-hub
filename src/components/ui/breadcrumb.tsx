import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

type BreadcrumbItem = { label: string; href?: string }

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-muted-foreground">
      <Link href="/" className="hover:text-foreground"><Home className="size-3.5" /></Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="size-3" />
          {item.href ? (
            <Link href={item.href} className="hover:text-foreground">{item.label}</Link>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
