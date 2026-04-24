type Props = {
  family: string
  role: string
  stack: string
  sample: string
  /** Tailwind class controlling the specimen rendering, e.g. "font-serif". */
  className: string
}

/**
 * Typography specimen card for the /brand page. Shows the role, family,
 * CSS stack, and a representative sample string rendered in the face.
 */
export function TypographySpecimen({ family, role, stack, sample, className }: Props) {
  return (
    <div className="rounded-xl border border-border/40 bg-card/40 p-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-2">
        {role}
      </p>
      <p className="font-semibold text-foreground">{family}</p>
      <p className="font-mono text-[11px] text-muted-foreground mt-1 break-all">{stack}</p>
      <p className={`${className} text-3xl sm:text-4xl text-foreground mt-6 leading-tight`}>
        {sample}
      </p>
    </div>
  )
}
