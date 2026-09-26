import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Cut, Pig, place, type P as At, type Part } from './people'

/**
 * Chapter 5: "The windmill plans", the thirteenth moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "Snowball used as his study a shed which had once been used for
 *   incubators and had a smooth wooden floor, suitable for drawing on." So the
 *   floor is one smooth black ground, with no boards cut in it, and the plans
 *   are drawn on it in white chalk, in perspective, as lines lying on the
 *   floor. The shed is lit by one window and its open door.
 * - "With his books held open by a stone, and with a piece of chalk gripped
 *   between the knuckles of his trotter, he would move rapidly to and fro,
 *   drawing in line after line". So three books lie on the floor at the left,
 *   one of them open under a round stone, and Snowball, the pale pig of the
 *   figure kit, stands at the edge of his plans with his nose to the floor and
 *   the chalk at his trotter.
 * - "Gradually the plans grew into a complicated mass of cranks and
 *   cog-wheels, covering more than half the floor". So the chalk is toothed
 *   cog-wheels, the shafts and a crank between them, and ruled lines, over more
 *   than half the floor. At the far end a windmill is sketched, a tapering
 *   tower with four sails, since the plans are "for the windmill".
 * - "Even the hens and ducks came, and were at pains not to tread on the chalk
 *   marks." So a hen and a duck pick their way along the back of the floor,
 *   each with a foot lifted over a line.
 * - "Only Napoleon held aloof. ... One day, however, he arrived unexpectedly to
 *   examine the plans. He walked heavily round the shed, looked closely at
 *   every detail of the plans and snuffed at them once or twice, then stood
 *   for a little while contemplating them out of the corner of his eye". So
 *   Napoleon, the large black boar, has come in at the open door on the
 *   right, and his eye, turned on the plans, is the panel's one mark of the
 *   spot colour: the same red sidelong eye he casts at Snowball in "Snowball
 *   is driven out". What he does next is left to the words; the panel stops
 *   before it.
 * - "In the long pasture, not far from the farm buildings, there was a small
 *   knoll which was the highest point on the farm." Through the door, in
 *   daylight, the pasture rises to the knoll where the windmill is to stand.
 *
 * The text does not say whether Snowball was in the shed on the day Napoleon
 * came; it says he "was closeted there for hours at a time", and the panel
 * shows the maker of the plans and their enemy together, which is the
 * moment's point. The quotation on the panel is the text's own description
 * of the plans; the guide's card for the moment quotes Benjamin, who is not
 * drawn, because the text puts him in no shed.
 *
 * Nothing is taken from a film or stage production. Seeds: 1310 (wall), 1311
 * (floor light), 1312 (pasture), 1313 (sky).
 */

const W = 860
const H = 340

/** The floor's perspective: horizon, focal length and centre line. */
const HZ = 96
const F = 244
const CX = 430
/** The back wall meets the floor at depth ZB (y about 205). */
const ZB = 2.24
const BASE = HZ + F / ZB

type Pt = [number, number]
/** A point on the floor, X across and z in depth (1 at the front edge), on the page. */
const floor = (X: number, z: number): Pt => [CX + (F * X) / z, HZ + F / z]
const poly = (pts: Pt[], close = false) =>
  'M' + pts.map(([x, y]) => `${n(x)} ${n(y)}`).join('L') + (close ? 'Z' : '')

/** A cog-wheel on the floor: a toothed rim, a hub and spokes, as chalk lines. */
function cog(X: number, z: number, R: number, teeth: number, phase = 0): string {
  // Square teeth: up the flank, across the top, down, then along the rim.
  const rim: Pt[] = []
  const p = (Math.PI * 2) / teeth
  for (let i = 0; i <= teeth; i++) {
    const a = phase + i * p
    const at = (t: number, r: number): Pt => floor(X + r * Math.cos(t), z + r * Math.sin(t))
    rim.push(at(a, R), at(a + 0.1 * p, R * 1.22), at(a + 0.45 * p, R * 1.22), at(a + 0.55 * p, R))
    if (i < teeth) rim.push(at(a + 0.78 * p, R))
  }
  const hub: Pt[] = []
  for (let i = 0; i <= 16; i++) {
    const t = (i / 16) * Math.PI * 2
    hub.push(floor(X + R * 0.22 * Math.cos(t), z + R * 0.22 * Math.sin(t)))
  }
  let d = poly(rim) + poly(hub)
  for (let s = 0; s < 4; s++) {
    const t = phase + (s / 4) * Math.PI * 2 + 0.4
    d += poly([
      floor(X + R * 0.22 * Math.cos(t), z + R * 0.22 * Math.sin(t)),
      floor(X + R * 0.9 * Math.cos(t), z + R * 0.9 * Math.sin(t)),
    ])
  }
  return d
}

/** A straight chalk line on the floor from (X1, z1) to (X2, z2). */
const rule = (X1: number, z1: number, X2: number, z2: number) =>
  poly([floor(X1, z1), floor(X2, z2)])

/**
 * Napoleon's eye, turned on the plans "out of the corner of his eye": a lens
 * in the spot colour laid over the kit's eye cut, in the kit pig's frame, and
 * large enough to hold at phone width. "Snowball is driven out" cuts his
 * sidelong look the same way.
 */
const SIDELONG_EYE = gouge(35.2, -39, 46, -41.2, 1.9)

/** Where Snowball stands, Napoleon stands, and the hen and the duck step. */
const SNOWBALL: At = [168, 262]
const NAPOLEON: At = [770, 232]
const HEN: At = [492, 214]
const DUCK: At = [566, 217]

type Marks = {
  wall: string
  planks: string
  floorLight: string
  chalk: string
  chalkFar: string
  pasture: string
  sky: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The shed is lit by its one window, behind Snowball, and by the open door
  // on the right; the cuts in the plank wall follow the light.
  const light = (x: number, y: number) => {
    const win = clamp(1 - Math.hypot((x - 446) * 0.7, (y - 110) * 1.1) / 200)
    const door = clamp(1 - Math.hypot((x - 680) * 0.9, y - 150) / 150) * 0.7
    return Math.max(win, door, 0.06)
  }
  const wall = gougeField(rng(1310), { x0: 0, x1: 648, y0: 6, y1: BASE - 4 }, light, {
    spacing: 6.4,
  })
  // The joints of the plank wall, dark vertical grooves across the cuts.
  let planks = ''
  for (let x = 24; x < 640; x += 38) planks += wedge(x, 4, x + 0.6, BASE, 2.2, 2.6)

  // Daylight from the door lies across the floor as a pale wedge, cut in rows
  // that follow the floor's perspective.
  const rf = rng(1311)
  let floorLight = ''
  for (let z = 1.05; z < ZB; z += 0.045) {
    const y = HZ + F / z
    const reach = clamp((ZB - z) / (ZB - 1))
    const x0 = floor(1.05 + (1 - reach) * 0.4, z)[0]
    const x1 = floor(2.6, z)[0]
    let x = x0 + between(rf, -10, 10)
    while (x < x1) {
      const len = between(rf, 16, 46)
      const L = clamp((x - x0) / Math.max(1, x1 - x0)) * 0.8 + 0.2
      if (rf() < 0.35 + L * 0.5) floorLight += gouge(x, y, x + len, y, (0.3 + L * 1.6) / z)
      x += len + between(rf, 6, 18)
    }
  }

  // The plans. Near cog-wheels and their shafts in heavier chalk; the far ones
  // and the ruled lines finer, as a floor seen at a slant would show them.
  const chalk =
    cog(-1.02, 1.42, 0.26, 12, 0.1) +
    cog(-0.56, 1.3, 0.15, 8, 0.3) +
    cog(-0.12, 1.5, 0.32, 14, 0.2) +
    cog(0.46, 1.34, 0.19, 9, 0.5) +
    cog(0.18, 1.12, 0.1, 6, 0) +
    // shafts joining them
    rule(-1.02, 1.42, -0.56, 1.3) +
    rule(-0.56, 1.3, -0.12, 1.5) +
    rule(-0.12, 1.5, 0.46, 1.34) +
    rule(0.46, 1.34, 0.18, 1.12) +
    // a crank off the big wheel
    poly([floor(-0.12, 1.5), floor(-0.02, 1.2), floor(0.02, 1.17), floor(0.06, 1.08)]) +
    // ruled lines of the frame the wheels sit in
    rule(-1.42, 1.1, 0.84, 1.1) +
    rule(-1.42, 1.1, -1.42, 1.8) +
    rule(0.84, 1.1, 0.84, 1.62)

  const chalkFar =
    cog(-0.8, 1.98, 0.22, 11, 0.4) +
    cog(-0.26, 2.0, 0.14, 8, 0.1) +
    cog(0.42, 1.9, 0.26, 12, 0.2) +
    cog(0.9, 1.72, 0.12, 7, 0) +
    rule(-0.8, 1.98, -0.26, 2.0) +
    rule(-0.26, 2.0, 0.42, 1.9) +
    rule(0.42, 1.9, 0.9, 1.72) +
    rule(-0.12, 1.5, -0.26, 2.0) +
    rule(0.46, 1.34, 0.42, 1.9) +
    poly([floor(-1.42, 1.8), floor(-1.3, 2.1), floor(0.2, 2.15), floor(1.2, 2.05)]) +
    // the windmill itself, sketched at the far end: a tapering tower, drawn
    // up the floor away from the viewer, and four sails on its cap
    poly([floor(1.12, 1.78), floor(1.2, 2.02), floor(1.36, 2.02), floor(1.44, 1.78)], true) +
    rule(1.28, 1.96, 1.28, 2.16) +
    rule(1.16, 2.06, 1.4, 2.06) +
    rule(1.2, 1.99, 1.36, 2.13) +
    rule(1.2, 2.13, 1.36, 1.99) +
    // line after line of working
    rule(-1.5, 1.6, -1.2, 1.62) +
    rule(-1.5, 1.66, -1.24, 1.68) +
    rule(-1.5, 1.72, -1.28, 1.74) +
    rule(0.6, 1.58, 0.8, 1.56) +
    rule(0.6, 1.64, 0.78, 1.62)

  // Through the door, in daylight: the long pasture rising to the knoll, cut
  // as ink furrows that thicken towards the door, under a pale sky with a few
  // thin lines of cloud.
  const pasture = gougeField(
    rng(1312),
    { x0: 664, x1: 836, y0: 108, y1: BASE },
    (_x, y) => 0.08 + ((y - 108) / (BASE - 108)) * 0.3,
    { spacing: 5.4, len: [10, 36], gap: [6, 16], max: 2.4 },
  )
  const sky = gougeField(rng(1313), { x0: 664, x1: 836, y0: 30, y1: 104 }, () => 0.02, {
    spacing: 12,
    len: [24, 70],
    gap: [24, 60],
    max: 1,
  })
  cached = { wall, planks, floorLight, chalk, chalkFar, pasture, sky }
  return cached
}

/** The skyline through the door: the pasture rising to the knoll. */
const KNOLL_EDGE = 'M664 150C700 142 730 118 760 112C790 108 812 120 836 128'

/**
 * A hen and a duck, walking: the kit's hen roosts, and these two must be seen
 * stepping. Each is drawn facing right, feet on y = 0, with one foot lifted
 * over a chalk line. Neither is described in the text beyond what it is.
 */
const HEN_WALK: Part[] = [
  { d: 'M-2 -7L-3 0M3 -7L6 -3.4L10 -4.2', w: 1.6 },
  {
    d: 'M-11 -12C-13 -18 -9 -22 -3 -20C-1 -25 3 -28 7 -26L9 -27.4L9.4 -24.6L12.6 -22.4L9.4 -20.6C9.4 -14 5.4 -8 -0.6 -7C-5.6 -7 -9 -9 -11 -12Z',
  },
  { d: 'M-10 -13L-17 -25L-6 -18Z' },
]
const DUCK_WALK: Part[] = [
  { d: 'M0 -4.5L-1 0M4.6 -4.5L8 -2', w: 1.6 },
  {
    d: 'M-15 -8C-17 -13 -11 -16 -3 -15.4C3 -15 7 -14.4 9 -12.6L9.6 -20C10 -24 13.6 -26 17 -24.4C19 -23.4 19.4 -21.6 18.6 -20.4L25 -19.6L18.4 -17.4C16.4 -15.6 14.4 -13.4 14.4 -10.4C12.6 -6 6.4 -4 -2 -4C-8 -4 -12.6 -5 -15 -8Z',
  },
  { d: 'M-14 -8.6L-20 -12.6L-13.4 -11.6Z' },
]

function Books() {
  // Three books on the floor at the left: two shut in a pile, one open and
  // held flat by a round stone.
  return (
    <g>
      <path d="M22 300L96 292L100 304L26 313Z" fill={PAPER} />
      <path d="M26 313L100 304L100 309L27 318Z" fill={INK} />
      <path d="M30 290L90 284L93 294L32 301Z" fill={PAPER} />
      <path d="M32 301L93 294L93 298L33 305Z" fill={INK} />
      {/* the open book, its two pages and the spine between */}
      <path d="M40 268L84 262L88 280L44 287Z" fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d="M84 262L128 258L134 276L88 280Z" fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d="M84 262L88 280" stroke={INK} strokeWidth={2} />
      <path
        d="M48 271L80 267M49 275L81 271M50 279L82 275M92 267L124 264M93 271L126 268M94 275L127 272"
        stroke={INK}
        strokeWidth={0.9}
      />
      {/* the stone */}
      <path
        d="M72 272C72 262 82 256 92 258C102 260 106 268 102 276C96 282 78 282 72 272Z"
        fill={INK}
      />
      <path d={gouge(80, 262, 94, 260, 1.2)} fill={PAPER} />
    </g>
  )
}

function WindmillPlans({ uid }: ArtProps) {
  const m = marks()
  const door = `${uid}-door`
  const hill = `${uid}-hill`
  return (
    <>
      <defs>
        <clipPath id={door}>
          <rect x={664} y={20} width={172} height={BASE - 20} />
        </clipPath>
        <clipPath id={hill}>
          <path d={`${KNOLL_EDGE}V${BASE}H664Z`} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
        {/* the plank wall */}
        <path d={m.wall} fill={PAPER} />
        <path d={m.planks} fill={INK} />
        {/* the window behind Snowball, and its light */}
        <rect x={380} y={46} width={132} height={110} fill={INK} />
        <rect x={388} y={54} width={116} height={94} fill={PAPER} />
        <g fill={INK}>
          <rect x={443} y={54} width={5} height={94} />
          <rect x={388} y={98} width={116} height={5} />
        </g>
        <rect x={374} y={156} width={144} height={6} fill={PAPER} />
        <rect x={374} y={162} width={144} height={2} fill={INK} />

        {/* the skirting where the wall meets the floor */}
        <rect x={0} y={BASE - 4} width={660} height={4} fill={PAPER} />
        {/* the floor: smooth, dark, and chalked */}
        <rect x={0} y={BASE} width={W} height={H - BASE} fill={INK} />
        <path d={m.floorLight} fill={PAPER} />
        <path
          d={m.chalkFar}
          fill="none"
          stroke={PAPER}
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={m.chalk}
          fill="none"
          stroke={PAPER}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* the open door on the right, and the pasture beyond it */}
        <rect x={648} y={8} width={204} height={BASE - 8} fill={INK} />
        <rect x={664} y={20} width={172} height={BASE - 20} fill={PAPER} />
        <g clipPath={`url(#${door})`}>
          <path d={m.sky} fill={INK} />
          <g clipPath={`url(#${hill})`}>
            <path d={m.pasture} fill={INK} />
          </g>
          <path d={KNOLL_EDGE} fill="none" stroke={INK} strokeWidth={2.4} />
        </g>
        {/* the door leaf, swung back against the wall */}
        <path d="M836 20L856 10V214L836 206Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
        <rect x={648} y={BASE - 2} width={204} height={4} fill={PAPER} />

        <Books />

        {/* a hen and a duck, picking their way between the chalk marks */}
        <Cut
          parts={HEN_WALK}
          halo={1.4}
          cuts={gouge(4.6, -23, 7, -23.2, 0.6) + gouge(-7, -14, 1, -12, 0.45, 1)}
          transform={place(HEN, 1.55)}
        />
        <Cut
          parts={DUCK_WALK}
          tone="paper"
          halo={1.3}
          cuts={gouge(13.4, -21.6, 15.8, -21.8, 0.55) + gouge(-9, -9, 3, -8, 0.4, 1)}
          transform={place(DUCK, 1.55)}
        />

        {/* Snowball at the edge of his plans, bent to the floor, the chalk in
            his lifted trotter */}
        <g transform={`rotate(3 ${SNOWBALL[0]} ${SNOWBALL[1]})`}>
          <Pig at={SNOWBALL} s={1.6} kind="snowball" />
          <g transform={place(SNOWBALL, 1.6)}>
            {/* the line he is drawing, fresh from the chalk */}
            <path
              d="M35 -2.4C40 -1 44 -3.4 48 -2.2S55 -1.4 58 -3"
              fill="none"
              stroke={PAPER}
              strokeWidth={1.1}
              strokeLinecap="round"
            />
            <path
              d="M26.6 -7L35.4 -5L34.6 -1.2L25.8 -3.2Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth={0.8}
              strokeLinejoin="round"
            />
          </g>
        </g>

        {/* Napoleon, come in at the door, eyeing the plans sidelong */}
        <Pig at={NAPOLEON} s={1.4} face={-1} kind="napoleon" />
        <g transform={place(NAPOLEON, 1.4, -1)}>
          <path d={SIDELONG_EYE} fill={RED} />
        </g>
      </g>
    </>
  )
}

export const windmillPlans: LinocutArt = { width: W, height: H, Draw: WindmillPlans }
