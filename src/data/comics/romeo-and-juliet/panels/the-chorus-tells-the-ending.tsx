import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  BEARD_CUTS,
  CAP_FLAT,
  CutFigure,
  EYE,
  HAIR_CUTS,
  HEAD_BEARD,
  gown,
  headAt,
  openArm,
  limb,
  shoe,
  type P,
  type Piece,
} from './people'

/**
 * The Prologue: "The Chorus tells the ending", the first moment in the
 * guide's timeline. "The stage, before the action begins." The held edition
 * leaves the Prologue out (see the note at the top of
 * src/data/study-guides/romeo-and-juliet.ts), so nothing of it is quoted on
 * the panel: the caption is the guide's own sentence. The details are drawn
 * from the Chorus's sonnet in the Project Gutenberg text (#1513) the guide
 * describes it from:
 *
 * - "Enter Chorus." A single speaker who stands outside the action and
 *   addresses the audience: "if you with patient ears attend". The play does
 *   not describe him, so he is a plain bearded man in a long gown and a flat
 *   cap, on the bare boards of a stage, turned to the scene with one open
 *   hand held out to it, palm up: he is showing the audience what is to
 *   come. Below the front of the stage, the backs of the audience's heads.
 * - "Two households, both alike in dignity, / In fair Verona, where we lay
 *   our scene". Behind him, across the back of the stage, two great houses
 *   of Verona stand facing each other, each with its tower and its banner,
 *   cut as mirror images of each other so that neither is the greater, with
 *   the roofs and towers of the city low between them.
 * - "A pair of star-cross'd lovers take their life". Above the houses two
 *   stars fall across the night, their trails crossing in the middle of the
 *   sky. They are the only things printed in red: the lovers the whole play
 *   is about, crossed by the stars before it begins. Each falls towards the
 *   other's house.
 * - Nothing of "death-mark'd love" is shown: the ending is told, not drawn.
 *
 * Nothing is taken from a film or stage production. Seeds: 2001 (sky),
 * 2002 (stars), 2003 (boards), 2004 (the red stars' light).
 */

const W = 860
const H = 340
/** The back edge of the stage, where the scene behind it meets the boards. */
const STAGE = 262
/** The front edge of the stage, over the heads of the audience. */
const LIP = 302
/** Where the two falling stars' trails cross. */
const CROSS: P = [596, 84]

type Marks = { sky: string; stars: string; boards: string; glow: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Night overhead, paling to the last light along the roofs of the city.
  const sky = gougeField(
    rng(2001),
    { x0: 0, x1: W, y0: 6, y1: STAGE },
    (_x, y) => Math.pow(clamp((y - 40) / (STAGE - 60)), 1.5) * 0.95 + 0.04,
    { spacing: 6.2, len: [24, 90], gap: [6, 22], max: 3.2 },
  )
  // Small white stars scattered in the dark top of the sky.
  const s = rng(2002)
  let stars = ''
  for (let i = 0; i < 38; i++) {
    const x = between(s, 16, W - 16)
    const y = between(s, 14, 130)
    if (Math.hypot(x - CROSS[0], y - CROSS[1]) < 40) continue
    if (x < 370 && y < 96) continue
    const r = between(s, 1.2, 2.6)
    stars +=
      gouge(x - r * 1.6, y, x + r * 1.6, y, r * 0.8) +
      gouge(x, y - r * 1.6, x, y + r * 1.6, r * 0.8)
  }
  // The boards of the stage, running back from the front edge.
  const b = rng(2003)
  let boards = ''
  const V: P = [430, 120]
  for (let xb = -520; xb < 1400; xb += 40) {
    const t0 = (STAGE + 2 - V[1]) / (LIP - V[1])
    boards += wedge(V[0] + (xb - V[0]) * t0, STAGE + 2, xb, LIP, 0.4, 2.2)
  }
  for (let y = STAGE + 8; y < LIP - 4; y += between(b, 9, 13)) {
    let x = between(b, -20, 0)
    while (x < W) {
      const len = between(b, 40, 140)
      if (b() < 0.6)
        boards += gouge(x, y, x + len, y + between(b, -0.5, 0.5), 0.6 + (y - STAGE) / 40)
      x += len + between(b, 10, 60)
    }
  }
  const glow =
    rays(rng(2004), CROSS[0] - 92, 128, { from: 10, to: 34, every: 18, width: 1.8 }) +
    rays(rng(2005), CROSS[0] + 92, 128, { from: 10, to: 34, every: 18, width: 1.8 })
  cached = { sky, stars, boards, glow }
  return cached
}

/**
 * One great house of Verona, with its tower and a banner on the tower,
 * standing on the left of x = 0 in its own frame (it is mirrored for the
 * other house). The two are the same shape: "both alike in dignity".
 */
const HOUSE =
  `M-150 ${STAGE}V150H-120V138H-60V150H-40V${STAGE}Z` + `M-104 138V62L-94 48L-84 62V138Z`
const HOUSE_WINDOWS = (() => {
  let d = ''
  const win = (x: number, y: number, w: number, h: number) =>
    (d += `M${x} ${y + h}V${y + w / 2}A${w / 2} ${w / 2} 0 0 1 ${x + w} ${y + w / 2}V${y + h}Z`)
  for (const x of [-140, -118, -74, -54]) win(x, 170, 10, 18)
  for (const x of [-140, -118, -74, -54]) win(x, 204, 10, 18)
  win(-100, 80, 12, 22)
  win(-103, 226, 18, 36)
  return d
})()
/** The banner on the tower, streaming towards the other house. */
const BANNER = 'M-92 50V20M-92 21C-82 18 -74 24 -64 21L-68 28L-63 34C-73 37 -82 31 -92 34Z'
/** The cornices and the tiles along the eaves, in paper. */
const HOUSE_LINES = 'M-150 150H-120M-60 150H-40M-120 138H-60M-106 62H-82'

/** The city's roofs and towers, low and far off between the two houses. */
const CITY = `M520 ${STAGE}V236H532V224H540V236H552V214L558 206L564 214V236H578V228H590V218L600 210L610 218V228H622V236H636V222H642V214H648V236H672V${STAGE}Z`

/** A falling star's trail: a ribbon full at the star's head, thinning back up the sky. */
const trail = (a: P, c: P, head: P) =>
  ribbon(
    [
      head,
      [c[0] + (head[0] - c[0]) * 0.5, c[1] + (head[1] - c[1]) * 0.5],
      c,
      [a[0] + (c[0] - a[0]) * 0.5, a[1] + (c[1] - a[1]) * 0.5 - 4],
      a,
    ],
    6,
    0.9,
    false,
  )
/** A five-pointed star centred on (x, y). */
function star(x: number, y: number, r: number) {
  let d = ''
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / 5
    const rr = i % 2 === 0 ? r : r * 0.45
    d += `${i ? 'L' : 'M'}${n(x + Math.cos(a) * rr)} ${n(y + Math.sin(a) * rr)}`
  }
  return d + 'Z'
}
const STAR_L: P = [CROSS[0] - 92, 128]
const STAR_R: P = [CROSS[0] + 92, 128]

/**
 * The audience, below the front of the stage: the backs of a row of heads and
 * shoulders, cut off by the bottom of the block. The Chorus speaks to them
 * ("if you with patient ears attend"), so they are the one thing in the
 * picture that he is not showing.
 */
const AUDIENCE = (() => {
  const a = rng(2006)
  const people: { d: string; cuts: string }[] = []
  for (const row of [0, 1]) {
    for (let x = 20 + row * 30; x < W; x += between(a, 50, 66)) {
      if (row === 0 && x > 140 && x < 250) continue
      const y = row === 0 ? between(a, 310, 314) : between(a, 324, 330)
      const r = between(a, 12, 14) + row * 1.5
      const capped = a() < 0.45
      let d = `M${n(x - r)} ${n(y)}a${n(r)} ${n(r * 1.15)} 0 1 1 ${n(2 * r)} 0a${n(r)} ${n(r * 1.15)} 0 1 1 ${n(-2 * r)} 0Z`
      d += `M${n(x - r * 2.8)} ${H + 6}C${n(x - r * 2.6)} ${n(y + r * 1.5)} ${n(x - r * 1.3)} ${n(y + r)} ${n(x)} ${n(y + r)}C${n(x + r * 1.3)} ${n(y + r)} ${n(x + r * 2.6)} ${n(y + r * 1.5)} ${n(x + r * 2.8)} ${H + 6}Z`
      if (capped)
        d += `M${n(x - r * 1.35)} ${n(y - r * 0.55)}C${n(x - r * 1.2)} ${n(y - r * 1.5)} ${n(x + r * 1.2)} ${n(y - r * 1.5)} ${n(x + r * 1.35)} ${n(y - r * 0.55)}C${n(x + r * 0.5)} ${n(y - r * 0.8)} ${n(x - r * 0.5)} ${n(y - r * 0.8)} ${n(x - r * 1.35)} ${n(y - r * 0.55)}Z`
      const cuts = capped
        ? gouge(x - r * 1.1, y - r * 0.62, x + r * 1.1, y - r * 0.62, 0.8)
        : gouge(x - r * 0.5, y - r * 0.8, x - r * 0.7, y + r * 0.6, 0.7, -0.6) +
          gouge(x + r * 0.2, y - r * 0.95, x + r * 0.35, y + r * 0.7, 0.7, 0.4)
      people.push({ d, cuts })
    }
  }
  return people
})()

// ── The Chorus ───────────────────────────────────────────────────────────────
const C_HEAD = headAt(1, [190, 122], 4, 0.96)
const CHORUS: Piece[] = [
  // the far arm, hanging at his side
  {
    d: limb([
      [180, 156],
      [172, 188],
      [174, 216],
    ]),
    w: 8.4,
  },
  { d: gown([184, 143], [178, 208], 294, 1, { shoulder: 30, waistW: 22, front: 32, back: 38 }) },
  shoe([196, 295], 1),
  { d: HEAD_BEARD, t: C_HEAD },
  { d: CAP_FLAT, t: C_HEAD },
  // the near arm held out to the scene, the hand open, palm up, its fingers
  // fanned wide: at the kit's usual size they merged into a mitten at phone
  // width (review of 26 September 2026)
  openArm(
    [
      [190, 154],
      [214, 178],
      [246, 172],
    ],
    -14,
    { w: 8.4, sep: 1.5, size: 21, spread: 25, thumb: -1 },
  ),
]
const CHORUS_CUTS =
  gouge(182, 160, 170, 288, 1, 1) +
  gouge(190, 214, 206, 288, 0.9, -0.8) +
  gouge(176, 214, 152, 288, 0.9, 1.2) +
  gouge(166, 206, 194, 208, 1)

function TheChorusTellsTheEnding({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [200, 200], push: 1.03 })}>
        {/* the night over Verona */}
        <path d={m.sky} fill={PAPER} />
        <path d={m.stars} fill={PAPER} />

        {/* the city, far off, and the two households */}
        <path d={CITY} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} strokeLinejoin="round" />
        {[
          { key: 'left', t: 'translate(530 0)' },
          { key: 'right', t: 'translate(662 0) scale(-1 1)' },
        ].map(({ key, t }) => (
          <g key={key} transform={t}>
            <path
              d={BANNER}
              fill={INK}
              stroke={PAPER}
              strokeWidth={LINE.carve}
              strokeLinejoin="round"
            />
            <path
              d={HOUSE}
              fill={INK}
              stroke={PAPER}
              strokeWidth={LINE.carve}
              strokeLinejoin="round"
            />
            <path d={HOUSE_WINDOWS} fill={PAPER} />
            <path d={HOUSE_LINES} stroke={PAPER} strokeWidth={LINE.bold} />
          </g>
        ))}

        {/* two stars falling across the sky, their paths crossed */}
        <path
          d={
            trail([CROSS[0] + 118, 22], CROSS, STAR_L) + trail([CROSS[0] - 118, 22], CROSS, STAR_R)
          }
          fill={PAPER}
        />
        <g className="lc-fade-in" style={timing({ delay: 0.8, dur: 1 })}>
          <path d={m.glow} fill={PAPER} />
        </g>
        <path
          d={star(STAR_L[0], STAR_L[1], 11) + star(STAR_R[0], STAR_R[1], 11)}
          fill={RED}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />

        {/* the stage: its boards, its front edge, and the dark below it */}
        <rect x={0} y={STAGE} width={W} height={LIP - STAGE} fill={PAPER} />
        <path d={m.boards} fill={INK} />
        <path d={`M0 ${STAGE + 1}H${W}`} stroke={INK} strokeWidth={LINE.frame} />
        <path d={gouge(120, 298, 290, 299, 3.2)} fill={INK} />
        <rect x={0} y={LIP} width={W} height={H - LIP} fill={INK} />
        <path d={`M0 ${LIP + 3}H${W}`} stroke={PAPER} strokeWidth={LINE.bold} />

        {/* the Chorus */}
        <CutFigure parts={CHORUS} cuts={CHORUS_CUTS} halo={2}>
          <g transform={C_HEAD}>
            <path d={HAIR_CUTS} fill={PAPER} />
            <path d={BEARD_CUTS} fill={PAPER} />
            <path d={EYE} fill={PAPER} />
          </g>
        </CutFigure>

        {/* the audience, below the front of the stage */}
        {AUDIENCE.map((p) => (
          <g key={p.d}>
            <path
              d={p.d}
              fill={INK}
              stroke={PAPER}
              strokeWidth={LINE.carve}
              strokeLinejoin="round"
            />
            <path d={p.cuts} fill={PAPER} />
          </g>
        ))}
      </g>
    </>
  )
}

export const theChorusTellsTheEnding: LinocutArt = {
  width: W,
  height: H,
  Draw: TheChorusTellsTheEnding,
}
