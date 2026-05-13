import { cn } from '@/lib/utils'
import { t } from '@/lib/i18n/t'

type Props = {
  hex: string
  name: string
  token: string
  usage: string
  /** When the colour is near-white or extremely light, force dark text on the chip. */
  lightChip?: boolean
}

/**
 * Single colour chip for the /brand palette section. Shows the hex value,
 * the British semantic name, the design-token identifier, and a short
 * usage note. The colour name, design-token id, and hex value are all
 * pulled from props (the call site applies any `brand.palette.*` lookups
 * via `await t()` before passing them in); this component only owns the
 * surrounding chrome strings (the screen-reader label).
 */
export async function ColourSwatch({ hex, name, token, usage, lightChip = false }: Props) {
  const swatchLabel = await t('brand.colour.aria_swatch')
  return (
    <div
      className="rounded-xl border border-border/40 overflow-hidden bg-card/40"
      role="group"
      aria-label={`${swatchLabel}: ${name} (${hex})`}
    >
      <div
        className={cn(
          'aspect-[5/3] w-full flex items-end p-4',
          lightChip ? 'text-foreground' : 'text-white',
        )}
        style={{ backgroundColor: hex }}
      >
        <span className="font-mono text-xs uppercase tracking-[0.12em]">{hex}</span>
      </div>
      <div className="p-4 space-y-1">
        <p className="font-semibold text-foreground text-sm">{name}</p>
        <p className="font-mono text-[11px] text-muted-foreground">{token}</p>
        <p className="text-xs text-muted-foreground leading-relaxed pt-1">{usage}</p>
      </div>
    </div>
  )
}
