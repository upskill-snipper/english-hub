import { cn } from '@/lib/utils'

type Variant = 'primary' | 'wordmark' | 'icon'

// TODO(founder): replace these text placeholders with the real SVG assets
// once the brand kit is produced. Expected files:
//   /public/brand/logo-primary.svg
//   /public/brand/logo-wordmark.svg
//   /public/brand/logo-icon.svg
// Until then we render a deliberate, clearly labelled text placeholder so
// no stale mark is ever shipped.

export function LogoAsset({
  variant,
  className,
}: {
  variant: Variant
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-xl border border-dashed border-border/60 bg-card/40 p-8 min-h-[140px]',
        className,
      )}
      aria-label={`The English Hub logo, ${variant} variant (placeholder)`}
      role="img"
    >
      {variant === 'icon' ? (
        <span className="font-serif text-4xl font-bold text-primary">EH</span>
      ) : (
        <span className="font-sans text-2xl font-bold tracking-tight text-foreground">
          The English Hub
        </span>
      )}
    </div>
  )
}
