import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { gouge, n, ribbon, type Pt } from '@/components/comics/linocut/carve'

import { Person, type P } from './people'

/**
 * Rome's stones, cut once for every Julius Caesar panel: the temple front of
 * a public place, Caesar's statue on its plinth, and the flowers the crowd
 * strews. Several panels stand in the same streets (1.1, 1.2 and 1.3 are all
 * "A street" or "A public place" in Rome), so the same temple and the same
 * statue are seen in each, and a student knows the place again.
 *
 * WHAT THE PLAY SAYS: Flavius sends Marullus to "Disrobe the images, If you
 * do find them deck'd with ceremonies", and "let no images Be hung with
 * Caesar's trophies" (1.1); Casca reports that "Marullus and Flavius, for
 * pulling scarfs off Caesar's images, are put to silence" (1.2). So Caesar's
 * statues stand in the streets, hung with scarves. The citizens come to
 * "strew flowers in his way" (1.1).
 */

/**
 * One of "Caesar's images": Caesar's own figure from the kit, cut in stone
 * (paper, with ink folds and blank eyes), on a plinth whose top is at `at`.
 * His arms are held down, the near hand holding a scroll at his side: never
 * a raised arm, which at panel size reads as a salute. With `scarves`, the
 * "ceremonies" hang on the image: a scarf swagged across the front of the
 * plinth, knotted at its corners, its ends hanging, printed in the spot
 * colour.
 *
 * WHY ON THE PLINTH (2 October 2026). The scarves were first hung over the
 * statue's shoulders and down its front, and at panel size two red bands
 * running down a figure of Caesar read as blood running down him, in a play
 * where Calpurnia dreams of "his statue, Which, like a fountain with an
 * hundred spouts, Did run pure blood" (2.2). No red is put on Caesar's
 * figure, in stone or in life.
 */
export function CaesarImage({
  at,
  scale = 1,
  flip = false,
  scarves = false,
  plinth = 54,
}: {
  at: P
  scale?: number
  flip?: boolean
  scarves?: boolean
  plinth?: number
}) {
  const [x, y] = at
  const s = scale
  const pw = 46 * s
  return (
    <g>
      {/* the plinth: a block with a moulded cap and base */}
      <path
        d={`M${n(x - pw)} ${n(y)}h${n(pw * 2)}v${n(8 * s)}h${n(-6 * s)}v${n(plinth * s - 18 * s)}h${n(6 * s)}v${n(10 * s)}h${n(-pw * 2)}v${n(-10 * s)}h${n(6 * s)}v${n(-(plinth * s - 18 * s))}h${n(-6 * s)}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        d={
          gouge(x - pw + 2, y + 4 * s, x + pw - 2, y + 4 * s, 1.1) +
          gouge(x - pw + 8 * s, y + 13 * s, x + pw - 8 * s, y + 13 * s, 0.9) +
          gouge(x - pw + 8 * s, y + (plinth - 15) * s, x + pw - 8 * s, y + (plinth - 15) * s, 0.9) +
          gouge(x - pw + 13 * s, y + 18 * s, x - pw + 13 * s, y + (plinth - 20) * s, 1.2) +
          gouge(x + pw - 13 * s, y + 18 * s, x + pw - 13 * s, y + (plinth - 20) * s, 1.2)
        }
        fill={PAPER}
      />
      <Person
        at={[x, y]}
        scale={s * 1.04}
        flip={flip}
        stone
        pose={{
          look: 'caesar',
          feet: [-6, 7],
          hem: { front: 20, back: 24 },
          near: {
            pts: [
              [5, -128],
              [12, -106],
              [16, -86],
            ],
            hand: 'grip',
            deg: 80,
          },
        }}
      >
        {/* the scroll in his hand */}
        <path
          d="M10.6 -88.6L22.6 -86.6L21.6 -80.6L9.6 -82.6Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1}
          strokeLinejoin="round"
        />
        <path d="M10.6 -88.6L9.6 -82.6M22.6 -86.6L21.6 -80.6" stroke={INK} strokeWidth={1.1} />
      </Person>
      {scarves && <PlinthScarves x={x} y={y} pw={pw} s={s} />}
    </g>
  )
}

/**
 * The scarves on the plinth: one swagged across its face from corner to
 * corner, a knot at each corner, and the ends hanging down its sides and
 * lifting a little, so they read as cloth. Red, with a paper edge to lift
 * them off the ink of the stone.
 */
function PlinthScarves({ x, y, pw, s }: { x: number; y: number; pw: number; s: number }) {
  const l = x - pw + 3 * s
  const r = x + pw - 3 * s
  const top = y + 9 * s
  const swag: Pt[] = [
    [l, top],
    [l + (r - l) * 0.25, top + 13 * s],
    [x, top + 17 * s],
    [r - (r - l) * 0.25, top + 13 * s],
    [r, top],
  ]
  const endL: Pt[] = [
    [l, top],
    [l - 4 * s, top + 12 * s],
    [l - 2 * s, top + 24 * s],
    [l - 7 * s, top + 34 * s],
  ]
  const endR: Pt[] = [
    [r, top],
    [r + 4 * s, top + 12 * s],
    [r + 2 * s, top + 24 * s],
    [r + 7 * s, top + 34 * s],
  ]
  const d =
    ribbon(swag, 9 * s, 0.4, true) +
    ribbon(endL, 7 * s, 0.4, false) +
    ribbon(endR, 7 * s, 0.4, false)
  const knot = (cx: number) =>
    `M${n(cx - 4.4 * s)} ${n(top)}a${n(4.4 * s)} ${n(4 * s)} 0 1 0 ${n(8.8 * s)} 0a${n(4.4 * s)} ${n(4 * s)} 0 1 0 ${n(-8.8 * s)} 0Z`
  return (
    <g>
      <path
        d={d + knot(l) + knot(r)}
        fill={PAPER}
        stroke={PAPER}
        strokeWidth={3}
        strokeLinejoin="round"
      />
      <path d={d + knot(l) + knot(r)} fill={RED} />
      <path
        d={
          gouge(l + (r - l) * 0.2, top + 8 * s, x, top + 13 * s, 0.6, 1.2) +
          gouge(x, top + 13 * s, r - (r - l) * 0.2, top + 8 * s, 0.6, 1.2)
        }
        fill={INK}
      />
    </g>
  )
}

/**
 * The front of a temple in a public place: steps, six columns, the beam over
 * them and a pediment, its shadowed porch black between the columns. In
 * paper with ink cuts, lit from the left. `x0` and `x1` are the ends of the
 * steps, `top` the pediment's apex and `base` the foot of the steps.
 */
export function templeFront(x0: number, x1: number, top: number, base: number) {
  const w = x1 - x0
  const beamTop = top + (base - top) * 0.24
  const beamBot = beamTop + (base - top) * 0.09
  const stepTop = base - (base - top) * 0.11
  const cols = 6
  const inset = w * 0.05
  const span = w - inset * 2
  const colW = span / (cols * 1.9)
  const colX = Array.from({ length: cols }, (_, i) => x0 + inset + (span - colW) * (i / (cols - 1)))
  // the porch, the pediment's tympanum and the cornice
  const porch = `M${n(x0 + inset)} ${n(beamBot)}H${n(x1 - inset)}V${n(stepTop)}H${n(x0 + inset)}Z`
  const pediment = `M${n(x0 - 6)} ${n(beamTop)}L${n((x0 + x1) / 2)} ${n(top)}L${n(x1 + 6)} ${n(beamTop)}Z`
  const tympanum = `M${n(x0 + 14)} ${n(beamTop - 4)}L${n((x0 + x1) / 2)} ${n(top + 9)}L${n(x1 - 14)} ${n(beamTop - 4)}Z`
  const beam = `M${n(x0 - 4)} ${n(beamTop)}H${n(x1 + 4)}V${n(beamBot)}H${n(x0 - 4)}Z`
  // the columns: paper shafts, their flutes cut in ink, darker on the shadow side
  let shafts = ''
  let flutes = ''
  for (const cx of colX) {
    shafts += `M${n(cx)} ${n(beamBot)}h${n(colW)}l${n(1.6)} ${n(stepTop - beamBot)}h${n(-colW - 3.2)}Z`
    shafts += `M${n(cx - 3)} ${n(beamBot)}h${n(colW + 6)}v5h${n(-colW - 6)}Z`
    for (let k = 1; k < 4; k++) {
      const fx = cx + (colW * k) / 4
      flutes += gouge(fx, beamBot + 9, fx + (k - 2) * 0.4, stepTop - 6, k === 3 ? 1.1 : 0.6)
    }
  }
  // the steps
  let steps = ''
  const nSteps = 3
  for (let k = 0; k < nSteps; k++) {
    const y = stepTop + ((base - stepTop) * k) / nSteps
    steps += `M${n(x0 - k * 6)} ${n(y)}H${n(x1 + k * 6)}`
  }
  return { porch, pediment, tympanum, beam, shafts, flutes, steps, stepTop, colX, colW }
}

/** The temple drawn: pass what templeFront returns. */
export function TempleFront({
  t,
  x0,
  x1,
  base,
}: {
  t: ReturnType<typeof templeFront>
  x0: number
  x1: number
  base: number
}) {
  return (
    <g>
      <path d={t.porch} fill={INK} />
      <path
        d={t.pediment}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.bold}
        strokeLinejoin="round"
      />
      <path d={t.tympanum} fill={INK} />
      <path d={t.beam} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={t.shafts} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={t.flutes} fill={INK} />
      <rect x={x0 - 14} y={t.stepTop} width={x1 - x0 + 28} height={base - t.stepTop} fill={PAPER} />
      <path d={t.steps} stroke={INK} strokeWidth={LINE.bold} fill="none" />
    </g>
  )
}

/**
 * A flower: five round petals in the spot colour about an ink heart, with an
 * ink edge so it holds on paper or on ink. `r` is the petal's radius.
 */
export function blossom(cx: number, cy: number, r = 2.4): string {
  let d = ''
  for (let k = 0; k < 5; k++) {
    const a = (k / 5) * Math.PI * 2 - Math.PI / 2
    const px = cx + Math.cos(a) * r * 1.05
    const py = cy + Math.sin(a) * r * 1.05
    d += `M${n(px - r)} ${n(py)}a${n(r)} ${n(r)} 0 1 0 ${n(r * 2)} 0a${n(r)} ${n(r)} 0 1 0 ${n(-r * 2)} 0Z`
  }
  return d
}

/** A bunch of flowers held in the hand at `at` (in the holder's frame), on stems fanning up along `angle`. */
export function Bunch({ at, angle = -90, size = 1 }: { at: P; angle?: number; size?: number }) {
  const heads: P[] = []
  let stems = ''
  const spread = [-26, -10, 6, 20]
  const lens = [17, 22, 20, 15]
  spread.forEach((da, i) => {
    const a = ((angle + da) * Math.PI) / 180
    const L = lens[i] * size
    const tip: P = [at[0] + Math.cos(a) * L, at[1] + Math.sin(a) * L]
    stems += `M${n(at[0])} ${n(at[1])}L${n(tip[0])} ${n(tip[1])}`
    heads.push(tip)
  })
  return (
    <g>
      <path d={stems} stroke={PAPER} strokeWidth={3.4 * size} strokeLinecap="round" fill="none" />
      <path d={stems} stroke={INK} strokeWidth={1.5 * size} strokeLinecap="round" fill="none" />
      <path
        d={heads.map(([x, y]) => blossom(x, y, 2.5 * size)).join('')}
        fill={RED}
        stroke={INK}
        strokeWidth={0.8}
      />
      <g fill={INK}>
        {heads.map(([x, y]) => (
          <circle key={`${x} ${y}`} cx={n(Number(x))} cy={n(Number(y))} r={1.1 * size} />
        ))}
      </g>
    </g>
  )
}

/**
 * The eave of a house front: an ink band from x0 to x1 whose lower edge, at
 * y, is a row of round roof-tile ends with paper rims.
 */
export function Eave({ x0, x1, y }: { x0: number; x1: number; y: number }) {
  let tiles = ''
  for (let x = x0; x < x1; x += 13) tiles += `M${n(x)} ${n(y)}a6 6 0 0 0 12 0Z`
  return (
    <g>
      <rect x={x0} y={y - 12} width={x1 - x0} height={12} fill={INK} />
      <path d={tiles} fill={INK} stroke={PAPER} strokeWidth={1.2} />
    </g>
  )
}
