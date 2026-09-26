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
  wave,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CutFigure, HAIR_CUTS, type Part } from './cut-figure'
import { EYE, HEAD_BEARD, HEAD_OLD, OLD_BEARD, OLD_HAIR, OLD_STRANDS } from './inverness-people'

/**
 * Act 2, Scene 4: "Nature in disorder", the eleventh moment in the guide's
 * timeline. Outside Macbeth's castle, by day, the morning after Duncan's
 * murder. Every detail is from the scene (quoted from the held
 * edition, src/data/full-texts/macbeth.ts):
 *
 * - ROSS: "By the clock ’tis day, / And yet dark night strangles the travelling
 *   lamp", and "darkness does the face of earth entomb, / When living light
 *   should kiss it". So the sky is black by day, a thin band
 *   of day lies along the horizon, and the sun is a red disc with black
 *   bands of night drawn tight across it. The red is the sun and nothing else.
 * - OLD MAN: "On Tuesday last, / A falcon, towering in her pride of place, /
 *   Was by a mousing owl hawk’d at and kill’d." So an owl stoops on a falcon
 *   high over the scene, talons out, and a few feathers fall. The kill itself
 *   is not drawn.
 * - ROSS: "Duncan’s horses ... Beauteous and swift, the minions of their race,
 *   / Turn’d wild in nature, broke their stalls, flung out, / Contending ’gainst
 *   obedience"; OLD MAN: "’Tis said they eat each other." So two horses rear
 *   at each other below the castle.
 * - The Old Man: "Threescore and ten I can remember well", so he is seventy:
 *   stooped, on a staff, white-bearded. Ross is a nobleman, and points up at
 *   the sky he is describing ("Thou seest the heavens").
 * - Macduff enters from the castle, where he has come from the news that
 *   Macbeth is named king, and is going home to Fife. So he is a small cloaked
 *   figure on the road from the castle gate.
 *
 * Nobody's dress is described, so they wear plain cloaks and robes.
 * Seed 211 for the sky, the ground and the rays.
 */

const W = 860
const H = 340
const HORIZON = 236
const SUN: [number, number] = [420, 100]

type Marks = {
  sky: string
  rays: string
  ground: string
  road: string
  hills: string
  night: string[]
  feathers: string
  stones: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(211)
  // Dark by day: the sky is barely cut, except in a thin band of day along
  // the horizon and a weak glow round the strangled sun.
  const skyLight = (x: number, y: number) => {
    const d = Math.hypot(x - SUN[0], (y - SUN[1]) * 1.15)
    const glow = d < 128 ? 0.04 : clamp(1 - d / 330) * 0.42
    const day = clamp((y - 150) / (HORIZON - 150)) ** 1.4 * 0.85
    return Math.max(glow, day, 0.03)
  }
  const sky = gougeField(r, { x0: 0, x1: W, y0: 6, y1: HORIZON - 2 }, skyLight, {
    spacing: 7,
    len: [18, 80],
  })
  const sunRays = rays(rng(212), SUN[0], SUN[1], { from: 46, to: 124, every: 5.2, width: 3 })

  // The road runs from the castle gate down and to the left; the ground either
  // side of it is hatched in ink, heavier towards the front.
  const roadHalf = (y: number) => {
    const t = clamp((y - 246) / (H - 246))
    return { cx: 766 - 440 * Math.pow(t, 0.75), half: 9 + 70 * t }
  }
  const dark = (x: number, y: number) => {
    const { cx, half } = roadHalf(y)
    if (y > 244 && Math.abs(x - cx) < half) return 0.02
    return 0.24 + clamp((y - HORIZON) / (H - HORIZON)) * 0.5
  }
  const ground = gougeField(r, { x0: 0, x1: W, y0: HORIZON + 4, y1: H }, dark, {
    spacing: 5.6,
    len: [10, 40],
    gap: [4, 14],
    max: 2.6,
  })

  // The road's edges, thin at the gate and heavy at the front, and its ruts.
  const edge = (side: number, k = 1): Pt[] => {
    const pts: Pt[] = []
    for (let y = H + 4; y >= 247; y -= 6) {
      const { cx, half } = roadHalf(y)
      pts.push([cx + side * half * k, y])
    }
    return pts
  }
  const road =
    ribbon(edge(-1), 4.2, 0.8, false) +
    ribbon(edge(1), 4.2, 0.8, false) +
    ribbon(edge(-1, 0.3), 1.4, 0.8, false) +
    ribbon(edge(1, 0.34), 1.4, 0.8, false)

  // Low hills along the horizon.
  let hills = `M0 ${HORIZON + 2}`
  for (let x = 0; x <= W; x += 10) {
    const y = HORIZON - 6 - 7 * Math.sin(x / 70 + 1) - 4 * Math.sin(x / 23)
    hills += `L${n(x)} ${n(y)}`
  }
  hills += `L${W} ${HORIZON + 2}Z`

  // Bands of night drawn tight across the sun.
  const night = [
    { a: 352, b: 492, y: 97, amp: 5, w: 12, ph: 0.4 },
    { a: 366, b: 478, y: 118, amp: 4, w: 8, ph: 2.2 },
    { a: 372, b: 470, y: 78, amp: 3.5, w: 6.5, ph: 4.1 },
  ].map(({ a, b, y, amp, w, ph }) => ribbon(wave(a, b, y, amp, 120, ph, 26), w, 0.6))

  // Feathers falling from the falcon.
  const f = rng(213)
  let feathers = ''
  for (const [x, y] of [
    [512, 150],
    [528, 166],
    [504, 178],
    [522, 192],
  ]) {
    const a = between(f, -0.9, 0.9)
    feathers += gouge(x, y, x + Math.cos(a) * 9, y + Math.sin(a) * 9, 1.6, 0.6)
  }

  // Courses of stone in the castle, cut as broken paper lines.
  let stones = ''
  for (let y = 58; y < 244; y += 12) {
    let x = 694 + between(r, 0, 10)
    while (x < 850) {
      const len = between(r, 8, 22)
      if (!(y > 192 && x > 736 && x < 784) && r() < 0.7)
        stones += gouge(x, y + between(r, -0.5, 0.5), x + len, y + between(r, -0.5, 0.5), 0.6)
      x += len + between(r, 4, 10)
    }
  }

  cached = { sky, rays: sunRays, ground, road, hills, night, feathers, stones }
  return cached
}

/** The castle: a keep with a gate, a turret on its left, a curtain wall on its right. */
function battlements(x0: number, x1: number, top: number) {
  let d = ''
  for (let x = x0; x < x1 - 1; x += 12)
    d += `H${n(x)}V${n(top - 9)}H${n(Math.min(x + 7, x1))}V${n(top)}`
  return d
}
const CASTLE =
  `M688 248V104${battlements(688, 718, 104)}H718V52${battlements(718, 802, 52)}H802V132` +
  `${battlements(802, 856, 132)}H856V248Z`
const GATE = 'M742 248V214C742 202 750 194 760 194C770 194 778 202 778 214V248Z'
const SLITS =
  gouge(736, 80, 736, 100, 1.5) +
  gouge(784, 80, 784, 100, 1.5) +
  gouge(760, 122, 760, 144, 1.5) +
  gouge(702, 138, 702, 154, 1.2) +
  gouge(830, 162, 830, 178, 1.2)

/**
 * A horse rearing, facing right, hind hooves on the ground at (0, 0) and
 * about 140 units tall: haunch and body thrown up, neck arched, head up,
 * forelegs folded in the air, tail and mane streaming. Built from parts so the
 * halo joins them into one silhouette.
 */
const HORSE: Part[] = [
  { d: 'M-18 -54C-26 -46 -34 -34 -38 -18C-36 -30 -32 -42 -26 -52Z', w: 6 },
  { d: 'M-2 -40C-10 -30 -18 -22 -16 -14C-14 -8 -12 -4 -10 0', w: 8 },
  { d: 'M-13 1H-1L-2 -5H-10Z' },
  { d: 'M-40 0A38 20 0 1 0 36 0A38 20 0 1 0 -40 0Z', t: 'translate(8 -64) rotate(-50)' },
  { d: 'M-25 -46A18 18 0 1 0 11 -46A18 18 0 1 0 -25 -46Z' },
  { d: 'M6 -38C8 -28 4 -18 2 -10C2 -6 4 -3 6 0', w: 8 },
  { d: 'M0 1H12L11 -5H3Z' },
  { d: 'M14 -94C18 -110 26 -123 38 -131L50 -123C44 -113 42 -100 42 -82C32 -82 20 -86 14 -94Z' },
  {
    d: 'M33 -131L35 -144L41 -135C51 -131 61 -123 68 -114C71 -109 68 -103 62 -104C55 -105 48 -109 42 -113C37 -118 34 -124 33 -131Z',
  },
  {
    d: 'M37 -131C28 -129 20 -121 14 -109C10 -103 5 -99 0 -97C6 -95 11 -96 15 -98C11 -93 7 -90 2 -89C11 -86 18 -90 22 -97C25 -106 30 -117 38 -125Z',
  },
  { d: 'M34 -82C40 -86 46 -88 52 -86C55 -82 56 -76 55 -70', w: 6.5, sep: 1.2 },
  { d: 'M28 -74C34 -74 40 -72 44 -68C46 -64 46 -58 44 -54', w: 6.5 },
]
const HORSE_CUTS =
  gouge(-4, -60, 22, -86, 1.2, 1.4) +
  gouge(-10, -52, -4, -38, 0.9, 0.6) +
  gouge(24, -104, 38, -126, 0.8, -0.8) +
  gouge(50, -118, 58, -110, 0.7)

/** The owl, facing left, wings raised as it stoops, talons thrown forward. */
const OWL: Part[] = [
  { d: 'M2 -2C8 -18 18 -34 32 -44C31 -34 30 -24 26 -12C22 -6 14 -2 8 2Z' },
  {
    d: 'M-14 0C-8 -6 6 -8 16 -2C22 2 26 8 32 14L30 18L24 16C18 20 8 22 -2 20C-10 18 -14 12 -14 0Z',
  },
  { d: 'M-32 4A12 12 0 1 0 -8 4A12 12 0 1 0 -32 4Z' },
  {
    d: 'M-8 -2C-12 -16 -14 -30 -15 -44L-11 -40L-10 -49L-5 -41L-3 -48L1 -38C8 -30 14 -20 16 -8C12 -2 4 2 -2 2Z',
    sep: 1.2,
  },
  { d: 'M-6 16C-12 20 -18 24 -24 27', w: 5 },
  { d: 'M-24 27L-31 24M-24 27L-31 30M-24 27L-27 34', w: 1.6 },
]
const OWL_CUTS =
  gouge(-10, -40, -4, -12, 1, 0.4) +
  gouge(-4, -38, 4, -12, 1, 0.4) +
  gouge(2, -34, 10, -10, 1, 0.4) +
  gouge(18, -34, 12, -8, 0.8) +
  gouge(-2, 6, 18, 8, 0.8) +
  gouge(0, 12, 20, 12, 0.7)

/** The falcon, from below, towering: long pointed wings, head up. */
const FALCON =
  'M0 -27C3 -27 4.5 -24 4 -20L5 -14C14 -15 28 -10 40 2C28 -2 16 -2 6 2L5 9L7 26L-7 26L-5 9L-6 2C-16 -2 -28 -2 -40 2C-28 -10 -14 -15 -5 -14L-4 -20C-4.5 -24 -3 -27 0 -27Z'

/** Ross, facing right, pointing up at the sky. */
const ROSS_HEAD_AT = 'translate(221 127) rotate(-14) scale(1.05)'
const ROSS: Part[] = [
  {
    d: 'M206 146C198 150 192 160 191 174C189 206 186 246 182 290C198 297 222 298 244 292C240 256 238 216 237 180C237 164 234 152 226 147C219 144 212 144 206 146Z',
  },
  { d: 'M204 288L200 314', w: 9 },
  { d: 'M226 288L231 314', w: 9 },
  { d: 'M192 311L205 310L206 318L186 319C186 315 188 312 192 311Z' },
  { d: 'M225 311L237 310C242 312 245 315 244 319L226 319Z' },
  { d: HEAD_BEARD, t: ROSS_HEAD_AT },
  { d: 'M230 160C240 155 250 151 257 147C264 143 270 140 277 136', w: 8, sep: 1.5 },
  { d: 'M274 131C279 129 285 127 291 126L291.5 129C287 130 283 132 280 134L278 139L272 139Z' },
]
const ROSS_CUTS =
  gouge(200, 170, 196, 280, 1.4, 1.2) +
  gouge(212, 176, 212, 288, 1.1, 0.4) +
  gouge(228, 182, 233, 286, 1.1, -0.8) +
  gouge(214, 150, 232, 150, 0.8)

/** The Old Man, seventy, stooped over his staff, looking up. */
const OLD_HEAD_AT = 'translate(132 150) rotate(-24) scale(0.95)'

const OLD_MAN: Part[] = [
  {
    d: 'M118 160C104 160 90 168 84 184C78 204 74 252 68 312L140 312C138 280 136 244 134 214C134 196 132 180 128 170C126 164 122 160 118 160Z',
  },
  { d: 'M74 309L94 309L95 318L70 318Z' },
  { d: 'M116 309L130 308C136 310 139 314 139 318L116 318Z' },
  { d: HEAD_OLD, t: OLD_HEAD_AT },
  { d: 'M158 176L161 318', w: 4.5 },
  { d: 'M124 178C132 190 142 197 152 200', w: 8, sep: 1.5 },
  { d: 'M150 195C154 193 158 194 160 197C161 201 159 205 155 205C151 205 148 202 150 195Z' },
]
const OLD_MAN_CUTS =
  gouge(92, 196, 84, 300, 1.3, 1) +
  gouge(104, 200, 100, 304, 1.1, 0.5) +
  gouge(120, 206, 124, 300, 1, -0.6)
/** Macduff, leaving the castle on foot, cloak blown back, drawn at 200 units tall. */
const MACDUFF: Part[] = [
  {
    d: 'M-8 -160C-18 -156 -24 -144 -24 -128C-26 -100 -30 -70 -34 -40C-20 -34 0 -32 14 -36C30 -40 44 -30 54 -44C40 -62 32 -92 22 -120C16 -140 10 -154 2 -160C-2 -162 -5 -162 -8 -160Z',
  },
  { d: 'M-16 -42L-30 -4', w: 11 },
  { d: 'M6 -42L16 -4', w: 11 },
  { d: 'M-40 -8L-26 -8L-26 2L-44 2Z' },
  { d: 'M8 -8L20 -8C24 -6 26 -2 26 2L8 2Z' },
  { d: HEAD_BEARD, t: 'translate(-4 -176) scale(-1.05 1.05)' },
]

function NatureInDisorder(_: ArtProps) {
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [420, 120], push: 1.03 })}>
        <path d={m.sky} fill={PAPER} />
        <path d={m.rays} fill={PAPER} />
        {/* "dark night strangles the travelling lamp" */}
        <circle cx={SUN[0]} cy={SUN[1]} r={38} fill={INK} />
        <circle cx={SUN[0]} cy={SUN[1]} r={33} fill={RED} />
        <g className="lc-drift" style={timing({ delay: 0.2 })}>
          {m.night.map((d) => (
            <g key={d}>
              <path d={d} fill={PAPER} stroke={PAPER} strokeWidth={3.2} strokeLinejoin="round" />
              <path d={d} fill={INK} />
            </g>
          ))}
        </g>

        <path d={m.hills} fill={INK} />
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
        <path d={m.ground} fill={INK} />
        <path d={m.road} fill={INK} />
        <path d={`M0 ${HORIZON + 1}H${W}`} stroke={INK} strokeWidth={LINE.bold} fill="none" />

        {/* the castle, the road from its gate */}
        <path
          d={CASTLE}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.stones} fill={PAPER} opacity={0.9} />
        <path d={SLITS} fill={PAPER} />
        <path d={GATE} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path
          d="M744 214H776M750 200V248M760 194V248M770 200V248"
          stroke={PAPER}
          strokeWidth={0.9}
        />

        {/* Duncan's horses, broken from their stalls, rearing at each other */}
        <CutFigure transform="translate(462 264) scale(0.82)" parts={HORSE} cuts={HORSE_CUTS}>
          <circle cx={47} cy={-124} r={1.6} fill={PAPER} />
        </CutFigure>
        <CutFigure transform="translate(618 262) scale(-0.78 0.78)" parts={HORSE} cuts={HORSE_CUTS}>
          <circle cx={47} cy={-124} r={1.6} fill={PAPER} />
        </CutFigure>

        {/* the owl stooping on the falcon; the kill is left to the words */}
        <CutFigure
          transform="translate(512 108) rotate(-38) scale(0.82)"
          parts={[{ d: FALCON }]}
          cuts={gouge(-30, -2, -8, -6, 0.8) + gouge(8, -6, 30, -2, 0.8) + gouge(0, 12, 0, 22, 0.7)}
        />
        <CutFigure
          transform="translate(578 60) rotate(-30) scale(1.08)"
          parts={OWL}
          cuts={OWL_CUTS}
        >
          {/* a barn owl's pale, heart-shaped face: the mousing owl */}
          <path
            d="M-21 -4C-24 -8 -30 -7 -30 -1C-30 6 -25 12 -21 14C-17 12 -12 6 -12 -1C-12 -7 -18 -8 -21 -4Z"
            fill={PAPER}
          />
          <circle cx={-25} cy={0.5} r={2} fill={INK} />
          <circle cx={-17} cy={0.5} r={2} fill={INK} />
          <path d="M-21 -2.5L-19.4 6L-21 9L-22.6 6Z" fill={INK} />
        </CutFigure>
        <path d={m.feathers} fill={PAPER} />

        {/* Macduff, on the road from the gate, going home to Fife */}
        <CutFigure transform="translate(700 266) scale(0.46)" parts={MACDUFF} halo={2.6}>
          <path
            d={gouge(-14, -120, -20, -46, 1.6, 1) + gouge(8, -116, 26, -48, 1.4, -1)}
            fill={PAPER}
          />
        </CutFigure>

        {/* the Old Man and Ross, looking up */}
        <CutFigure parts={OLD_MAN} cuts={OLD_MAN_CUTS}>
          <g transform={OLD_HEAD_AT}>
            <path d={OLD_BEARD} fill={PAPER} stroke={INK} strokeWidth={1.3} />
            <path d={OLD_HAIR} fill={PAPER} />
            <path d={OLD_STRANDS} fill="none" stroke={INK} strokeWidth={0.9} />
            <path d={EYE} fill={PAPER} />
          </g>
        </CutFigure>
        <CutFigure parts={ROSS} cuts={ROSS_CUTS}>
          <path d={HAIR_CUTS + EYE} transform={ROSS_HEAD_AT} fill={PAPER} />
        </CutFigure>
        <path
          d={
            gouge(64, 322, 146, 322, 1.6) +
            gouge(176, 323, 252, 323, 1.6) +
            gouge(80, 327, 132, 327, 1) +
            gouge(190, 328, 240, 328, 1)
          }
          fill={INK}
        />
      </g>
    </>
  )
}

export const natureInDisorder: LinocutArt = { width: W, height: H, Draw: NatureInDisorder }
