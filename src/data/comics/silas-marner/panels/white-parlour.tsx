import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

/**
 * The White Parlour of the Red House on New Year's Eve, cut once and shared
 * by the two panels set in it ("The New Year's Eve dance" and "Silas at the
 * Red House"), so the room is the same room in both. From Chapter 11 of the
 * held edition:
 *
 *   "the White Parlour, where the mistletoe-bough was hung, and multitudinous
 *   tallow candles made rather a brilliant effect, gleaming from among the
 *   berried holly-boughs, and reflected in the old-fashioned oval mirrors
 *   fastened in the panels of the white wainscot."
 *
 * So the wainscot is bare paper with only its mouldings left in ink (a white
 * room, brilliantly lit, as the reference Fezziwig's ball prints its bright
 * warehouse), the candles are tallow on branched sconces whose flames take
 * the spot colour, the holly round them carries red berries, the oval mirrors
 * are dark glass giving back a flame, and the mistletoe hangs from the
 * ceiling with its berries cut in paper. Nothing else in the room is
 * described, so nothing else is drawn.
 */

/** A branched sconce of three tallow candles at (x, y), the middle flame's foot, in holly. */
export function Sconce({ x, y, delay = 0 }: { x: number; y: number; delay?: number }) {
  const cup = (cx: number, cy: number) =>
    `M${cx - 4} ${cy}H${cx + 4}L${cx + 2.6} ${cy + 4}H${cx - 2.6}Z`
  const flame = (cx: number, cy: number) =>
    `M${cx} ${cy}C${cx - 3} ${cy - 3} ${cx - 2} ${cy - 7} ${cx} ${cy - 12}C${cx + 2} ${cy - 7} ${cx + 3} ${cy - 3} ${cx} ${cy}Z`
  const candles: [number, number][] = [
    [x - 16, y + 8],
    [x, y],
    [x + 16, y + 8],
  ]
  return (
    <g>
      <HollyBough x={x} y={y + 30} spread={34} seed={Math.round(x * 3 + y)} />
      {/* the arms and the back-plate */}
      <path
        d={`M${x - 16} ${y + 28}Q${x - 16} ${y + 36} ${x} ${y + 36}Q${x + 16} ${y + 36} ${x + 16} ${y + 28}M${x} ${y + 20}V${y + 44}`}
        fill="none"
        stroke={INK}
        strokeWidth={2.4}
      />
      <path d={`M${x - 4} ${y + 40}H${x + 4}V${y + 52}H${x - 4}Z`} fill={INK} />
      {candles.map(([cx, cy]) => (
        <g key={cx}>
          <path d={cup(cx, cy + 20)} fill={INK} />
          <rect
            x={cx - 2.6}
            y={cy + 2}
            width={5.2}
            height={18}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.2}
          />
          <path d={`M${cx} ${cy + 2}V${cy - 0.5}`} stroke={INK} strokeWidth={1} />
        </g>
      ))}
      <g fill={RED}>
        {candles.map(([cx, cy], k) => (
          <path
            key={cx}
            className="lc-flicker"
            style={timing({ dur: 0.9 + k * 0.15, delay: delay + k * 0.2 })}
            d={flame(cx, cy)}
          />
        ))}
      </g>
    </g>
  )
}

/**
 * A bough of holly: pointed leaves in ink with a paper vein, and clusters of
 * red berries. Seeded, so each bough is the same every time.
 */
export function HollyBough({
  x,
  y,
  spread,
  seed,
  berries = true,
}: {
  x: number
  y: number
  spread: number
  seed: number
  berries?: boolean
}) {
  const r = rng(seed)
  let leaves = ''
  let veins = ''
  const dots: [number, number][] = []
  const count = Math.round(spread / 5)
  for (let i = 0; i < count; i++) {
    const t = (i / (count - 1)) * 2 - 1
    const lx = x + t * spread + between(r, -3, 3)
    const ly = y + Math.abs(t) * -6 + between(r, -5, 5)
    const a = (t * 0.9 + between(r, -0.5, 0.5)) * (Math.PI / 2) - Math.PI / 2 + Math.PI / 2
    const len = between(r, 9, 13)
    const dx = Math.cos(a) * len * Math.sign(t || 1)
    const dy = Math.sin(a) * len * 0.5 - between(r, 1, 5)
    const x2 = lx + dx
    const y2 = ly + dy
    // A holly leaf: a lens with three notches along each side.
    const L = Math.hypot(dx, dy) || 1
    const nx = -dy / L
    const ny = dx / L
    const w = 3.6
    const pts: string[] = []
    for (let k = 0; k <= 6; k++) {
      const u = k / 6
      const bulge = Math.sin(Math.PI * u) * (k % 2 ? w * 1.25 : w * 0.7)
      pts.push(`${n(lx + dx * u + nx * bulge)} ${n(ly + dy * u + ny * bulge)}`)
    }
    for (let k = 5; k >= 1; k--) {
      const u = k / 6
      const bulge = Math.sin(Math.PI * u) * (k % 2 ? w * 1.25 : w * 0.7)
      pts.push(`${n(lx + dx * u - nx * bulge)} ${n(ly + dy * u - ny * bulge)}`)
    }
    leaves += `M${n(lx)} ${n(ly)}L${pts.join('L')}Z`
    veins += gouge(lx + dx * 0.15, ly + dy * 0.15, lx + dx * 0.85, ly + dy * 0.85, 0.5)
    if (r() < 0.5) dots.push([lx + between(r, -3, 3), ly + between(r, -4, 1)])
  }
  return (
    <g>
      <path d={leaves} fill={INK} stroke={PAPER} strokeWidth={0.8} strokeLinejoin="round" />
      <path d={veins} fill={PAPER} />
      {berries && (
        <g fill={RED}>
          {dots.flatMap(([bx, by]) => [
            <circle key={`${bx}a`} cx={n(bx)} cy={n(by)} r={2} />,
            <circle key={`${bx}b`} cx={n(bx + 3.4)} cy={n(by + 1.2)} r={1.8} />,
          ])}
        </g>
      )}
    </g>
  )
}

/**
 * An old-fashioned oval mirror set in a panel: dark glass in a paper frame,
 * a bright streak across it and the red of a flame it gives back.
 */
export function OvalMirror({ cx, cy, rx, ry }: { cx: number; cy: number; rx: number; ry: number }) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx={rx + 5} ry={ry + 5} fill={INK} />
      <ellipse
        cx={cx}
        cy={cy}
        rx={rx + 2.4}
        ry={ry + 2.4}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <path
        d={
          gouge(cx - rx * 0.6, cy + ry * 0.2, cx + rx * 0.1, cy - ry * 0.7, 1.4) +
          gouge(cx - rx * 0.35, cy + ry * 0.55, cx + rx * 0.4, cy - ry * 0.45, 0.9)
        }
        fill={PAPER}
      />
      <path
        d={`M${cx + rx * 0.35} ${cy + ry * 0.35}c-2 -2 -1.4 -5 0 -8c1.4 3 2 6 0 8Z`}
        fill={RED}
      />
    </g>
  )
}

/**
 * The mistletoe-bough hung from the ceiling at (x, y): a cord, then a ball of
 * forked twigs and paired leaves, its berries cut in paper.
 */
export function Mistletoe({ x, y, drop = 40 }: { x: number; y: number; drop?: number }) {
  const r = rng(Math.round(x * 7 + y))
  const cy = y + drop + 16
  let twigs = ''
  let leaves = ''
  const berries: [number, number][] = []
  for (let i = 0; i < 11; i++) {
    const a = -Math.PI / 2 + ((i - 5) / 5) * (Math.PI * 0.95) + Math.PI
    const len = between(r, 14, 20)
    const x2 = x + Math.cos(a) * len * 1.2
    const y2 = cy + Math.sin(a) * len * 0.8
    twigs += wedge(x, cy, x2, y2, 1.6, 0.8)
    for (const s of [-1, 1]) {
      const b = a + s * 0.5
      leaves += gouge(x2, y2, x2 + Math.cos(b) * 9, y2 + Math.sin(b) * 9, 2.2)
    }
    berries.push([x2 + between(r, -2, 2), y2 + between(r, -2, 2)])
  }
  return (
    <g>
      <path d={`M${x} ${y}V${cy - 10}`} stroke={INK} strokeWidth={1.4} />
      <path d={twigs + leaves} fill={INK} stroke={PAPER} strokeWidth={0.8} strokeLinejoin="round" />
      <g fill={PAPER} stroke={INK} strokeWidth={0.8}>
        {berries.map(([bx, by]) => (
          <circle key={`${bx}-${by}`} cx={n(bx)} cy={n(by)} r={2.2} />
        ))}
      </g>
    </g>
  )
}

/**
 * The white wainscot between x0 and x1, from the cornice at `top` to the
 * skirting at `base`: bare paper with its mouldings cut in ink, a chair-rail
 * at `rail`, and every `bay` units a tall panel over a low one. Returns the
 * outline path to stroke in ink; the panels an OvalMirror is fastened in are
 * drawn by the caller.
 */
export function wainscot(
  x0: number,
  x1: number,
  top: number,
  rail: number,
  base: number,
  bay = 110,
) {
  let d = ''
  for (let x = x0 + 10; x + bay - 14 <= x1; x += bay) {
    d += `M${n(x)} ${n(top + 14)}h${n(bay - 20)}v${n(rail - top - 26)}h${n(-(bay - 20))}Z`
    d += `M${n(x)} ${n(rail + 12)}h${n(bay - 20)}v${n(base - rail - 22)}h${n(-(bay - 20))}Z`
  }
  return d
}

export const WAINSCOT_LINE = LINE.fine
