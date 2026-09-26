import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  CAP,
  CAP_BAND,
  CutFigure,
  EYE,
  FULL_BEARD,
  FULL_BEARD_STRANDS,
  HEAD_MAN,
  PARIS_BAND,
  PARIS_CAP,
  PARIS_HAIR,
  WHITE_BROW,
  doublet,
  gown,
  headAt,
  limb,
  openArm,
  shoe,
  type P,
  type Piece,
} from './people'

/**
 * Act 1, Scene 2: "A suitor for Juliet", the third moment in the guide's
 * timeline. A street in Verona by day ("This night I hold an old accustom'd
 * feast"). The moment runs on into Act 1, Scene 3, in Capulet's house; the
 * panel draws its first half, where the suit is made. Every detail is from the
 * held edition:
 *
 * - "Enter Capulet, Paris and Servant." Nobody else: Juliet is not in the
 *   scene, and Romeo and Benvolio come only after Capulet and Paris have
 *   gone.
 * - "But now my lord, what say you to my suit?" On the left Paris, young and
 *   beardless in his bonnet and short cloak (as the other panels cut him),
 *   bows a little towards Capulet with a hand on his heart, asking. Their
 *   hands are kept well apart: nothing is agreed, and a reader must not see
 *   a handshake.
 * - "My child is yet a stranger in the world"; "But woo her, gentle Paris,
 *   get her heart, / My will to her consent is but a part". In the middle old
 *   Capulet, white-bearded, in his cap and long gown, answers him with an
 *   open hand, patient, not refusing.
 * - "Go, sirrah, trudge about / Through fair Verona; find those persons out /
 *   Whose names are written there, [gives a paper]". With his other hand he
 *   passes the list of guests back to his servant, who reaches for it. The
 *   list is the one thing printed in red: the servant cannot read it ("I must
 *   to the learned"), asks Romeo to, and so it is this paper that sends
 *   Romeo to the feast.
 * - Behind them, the house fronts of the street in the sun, an archway on the
 *   left into the rest of the city, and on the right the door of Capulet's
 *   house.
 *
 * The servant is plain: bareheaded, in a belted tunic. Nothing is taken from
 * a film or stage production. Seeds: 2301 (sky), 2302 (walls), 2303 (paving).
 */

const W = 860
const H = 340
/** The foot of the house fronts. */
const GROUND = 252
/** The eaves of the house fronts. */
const EAVE = 34

type Marks = { sky: string; walls: string; paving: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = gougeField(
    rng(2301),
    { x0: 0, x1: W, y0: 6, y1: EAVE - 2 },
    (_x, y) => clamp(0.5 - y / 60) + 0.05,
    { spacing: 6, len: [30, 110], gap: [16, 40], max: 2.6 },
  )
  // Sunlit plaster, a light grain that darkens a little towards the street.
  const walls = gougeField(
    rng(2302),
    { x0: 0, x1: W, y0: EAVE + 10, y1: GROUND },
    (_x, y) => 0.26 + clamp((y - 120) / 130) * 0.32,
    { spacing: 6.6, len: [30, 90], gap: [10, 26], max: 2.2 },
  )
  // The paving: joints running back, and courses across.
  const g = rng(2303)
  let paving = ''
  const V: P = [430, 130]
  for (let xb = -500; xb < 1400; xb += 44) {
    const t0 = (GROUND + 2 - V[1]) / (H - V[1])
    paving += wedge(V[0] + (xb - V[0]) * t0, GROUND + 2, xb, H + 4, 0.5, 2.2)
  }
  for (let k = 0; k < 7; k++) {
    const y = GROUND + 6 + Math.pow(k, 1.5) * 6
    let x = between(g, -30, 0)
    while (x < W) {
      const len = between(g, 60, 170)
      paving += gouge(x, y, x + len, y + between(g, -0.6, 0.6), 0.5 + k * 0.18)
      x += len + between(g, 4, 18)
    }
  }
  cached = { sky, walls, paving }
  return cached
}

/** Arched windows on the upper floor, and the archway and door at street level. */
const WINDOWS = (() => {
  let d = ''
  const win = (x: number, y: number, w: number, h: number) =>
    (d += `M${x} ${y + h}V${y + w / 2}A${w / 2} ${w / 2} 0 0 1 ${x + w} ${y + w / 2}V${y + h}Z`)
  for (const x of [40, 100, 290, 470, 560, 690, 760]) win(x, 58, 22, 44)
  return d
})()
/** The archway on the left, into the rest of the city. */
const ARCHWAY = `M26 ${GROUND}V168A52 52 0 0 1 130 168V${GROUND}Z`
/** The far street seen through the archway: house fronts in the sun. */
const FAR_STREET = `M34 ${GROUND - 20}V180H52V168H70V184H88V172H104V186H122V${GROUND - 20}Z`
/** The door of Capulet's house, on the right, with its step. */
const DOOR = `M660 ${GROUND - 6}V172A42 42 0 0 1 744 172V${GROUND - 6}Z`
const DOOR_PANELS = 'M702 132V246M672 186H692M712 186H732M672 222H692M712 222H732'
/** The pilasters between the house fronts. */
const PILASTERS = `M160 ${EAVE}H176V${GROUND}H160ZM606 ${EAVE}H622V${GROUND}H606Z`
/** The eaves along the top, with the ends of the rafters under them. */
const EAVES = `M0 ${EAVE - 6}H${W}V${EAVE + 6}H0Z`
/** The stone base of the house fronts, in shadow, its courses cut in paper. */
const PLINTH = `M0 ${GROUND - 22}H${W}V${GROUND}H0Z`
const PLINTH_JOINTS = (() => {
  let d = gouge(0, GROUND - 11, W, GROUND - 11, 0.8)
  for (let x = 8; x < W; x += 34) d += gouge(x, GROUND - 21, x, GROUND - 12, 0.7)
  for (let x = 25; x < W; x += 34) d += gouge(x, GROUND - 10, x, GROUND - 1, 0.7)
  return d
})()

// ── Paris, facing right, asking ──────────────────────────────────────────────
const P_NECK: P = [240, 162]
const P_HIP: P = [228, 230]
const P_HEAD = headAt(1, [249, 139], 14, 1.02)
const PARIS: Piece[] = [
  // the short cloak on his back
  {
    d: 'M232 160C216 168 208 194 204 222C202 236 202 246 203 254L222 250C220 232 222 206 232 184Z',
  },
  {
    d: limb([
      [224, 230],
      [214, 276],
      [208, 318],
    ]),
    w: 9,
  },
  shoe([208, 319], 1),
  { d: limb([P_NECK, P_HIP]), w: 22 },
  { d: doublet(P_NECK, P_HIP, 1, { width: 28, hem: 16, flare: 6, swing: 3 }) },
  {
    d: limb([
      [231, 230],
      [240, 276],
      [246, 318],
    ]),
    w: 9,
  },
  shoe([247, 319], 1),
  { d: HEAD_MAN, t: P_HEAD },
  { d: PARIS_HAIR, t: P_HEAD },
  { d: PARIS_CAP, t: P_HEAD },
  // the far arm, at his side
  {
    d: limb([
      [236, 172],
      [230, 200],
      [229, 224],
    ]),
    w: 7.5,
  },
  { d: 'M224.5 225a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0Z' },
  // the near hand laid on his heart as he asks
  openArm(
    [
      [244, 170],
      [254, 198],
      [262, 186],
    ],
    -116,
    { w: 7.8, sep: 1.4, size: 13.5, spread: 12, thumb: -1 },
  ),
]
const PARIS_CUTS =
  gouge(212, 190, 208, 246, 0.8, 0.8) +
  gouge(222, 206, 244, 207, 0.9) +
  gouge(236, 172, 230, 206, 0.8, 0.6)

// ── Capulet, facing left, answering him and passing back the list ────────────
const C_HEAD = headAt(-1, [362, 134], -6, 1.04)
const C_GRIP: P = [424, 196]
const CAPULET: Piece[] = [
  // the far arm, reaching back to the servant with the list
  [
    { d: limb([[374, 166], [398, 190], C_GRIP]), w: 8.6 },
    { d: `M${C_GRIP[0] - 5} ${C_GRIP[1]}a5 5 0 1 0 10 0a5 5 0 1 0 -10 0Z` },
  ],
  { d: gown([366, 156], [372, 222], 326, -1, { shoulder: 30, waistW: 22, front: 30, back: 36 }) },
  shoe([350, 327], -1),
  { d: FULL_BEARD, t: C_HEAD },
  { d: HEAD_MAN, t: C_HEAD },
  { d: CAP, t: C_HEAD },
  // the near hand, open, palm up, to Paris
  openArm(
    [
      [360, 166],
      [346, 194],
      [324, 197],
    ],
    -172,
    { w: 8.6, sep: 1.5, size: 15, spread: 13, thumb: 1 },
  ),
]
const CAPULET_CUTS =
  gouge(366, 184, 352, 320, 1, 1) +
  gouge(376, 228, 388, 320, 0.9, -0.6) +
  gouge(368, 226, 392, 226, 0.9)

// ── The servant, facing left, reaching for the list ─────────────────────────
const S_NECK: P = [488, 170]
const S_HIP: P = [492, 234]
const S_HEAD = headAt(-1, [482, 150], 10, 0.96)
const SERVANT: Piece[] = [
  {
    d: limb([
      [496, 234],
      [504, 278],
      [508, 318],
    ]),
    w: 9,
  },
  shoe([508, 319], -1),
  // the far arm, at his side
  {
    d: limb([
      [494, 178],
      [502, 208],
      [500, 232],
    ]),
    w: 7.8,
  },
  { d: limb([S_NECK, S_HIP]), w: 22 },
  { d: doublet(S_NECK, S_HIP, -1, { width: 27, hem: 22, flare: 6 }) },
  {
    d: limb([
      [488, 234],
      [480, 278],
      [474, 318],
    ]),
    w: 9,
  },
  shoe([472, 319], -1),
  { d: HEAD_MAN, t: S_HEAD },
  // the near hand reaching out for the paper
  openArm(
    [
      [482, 178],
      [466, 198],
      [452, 196],
    ],
    182,
    { w: 7.8, sep: 1.4, size: 14, spread: 13, thumb: -1 },
  ),
]
const SERVANT_CUTS = gouge(480, 212, 504, 213, 0.9) + gouge(490, 180, 494, 208, 0.7, -0.6)

/** The list of guests, a sheet folded once, between Capulet's hand and the servant's. */
const LIST = 'M420 182L446 178L450 208L424 212Z'
const LIST_LINES =
  gouge(427, 189, 443, 186.6, 0.8) +
  gouge(428, 196, 444, 193.6, 0.8) +
  gouge(429, 203, 441, 201.2, 0.8)

function ASuitorForJuliet({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-arch`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={ARCHWAY} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [370, 200], push: 1.03 })}>
        {/* a strip of sky over the roofs, and the house fronts in the sun */}
        <rect x={0} y={0} width={W} height={GROUND} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.walls} fill={INK} />
        <path d={EAVES} fill={INK} />
        <path
          d={`M0 ${EAVE}H${W}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={4}
          strokeDasharray="2 7"
        />
        <path d={PILASTERS} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
        <path d={WINDOWS} fill={INK} />
        <path
          d={`M30 104H136M280 104H326M460 104H596M680 104H796`}
          stroke={INK}
          strokeWidth={LINE.bold}
        />

        <path d={PLINTH} fill={INK} />
        <path d={PLINTH_JOINTS} fill={PAPER} />

        {/* the archway into the city, and the far street in the sun */}
        <path d={ARCHWAY} fill={INK} />
        <g clipPath={`url(#${clip})`}>
          <path d={FAR_STREET} fill={PAPER} />
          <path d={`M34 ${GROUND - 20}H124`} stroke={PAPER} strokeWidth={LINE.bold} />
        </g>
        <path d={ARCHWAY} fill="none" stroke={INK} strokeWidth={LINE.frame} />

        {/* the door of Capulet's house */}
        <path d={DOOR} fill={INK} stroke={INK} strokeWidth={LINE.frame} />
        <path d={DOOR_PANELS} stroke={PAPER} strokeWidth={LINE.fine} />
        <rect x={650} y={GROUND - 6} width={104} height={6} fill={INK} />
        <circle cx={694} cy={210} r={2.4} fill={PAPER} />
        <circle cx={710} cy={210} r={2.4} fill={PAPER} />

        {/* the street */}
        <rect x={0} y={GROUND} width={W} height={H - GROUND} fill={PAPER} />
        <path d={m.paving} fill={INK} />
        <path d={`M0 ${GROUND + 1}H${W}`} stroke={INK} strokeWidth={LINE.bold} />
        {/* shadows, the sun behind them on the left */}
        <path
          d={
            gouge(200, 322, 300, 324, 3) +
            gouge(330, 330, 450, 332, 3.2) +
            gouge(460, 322, 560, 324, 3)
          }
          fill={INK}
        />

        {/* Paris, Capulet and the servant */}
        <CutFigure parts={PARIS} cuts={PARIS_CUTS} halo={2}>
          <g transform={P_HEAD}>
            <path d={PARIS_BAND} fill={PAPER} />
            <path d={EYE} fill={PAPER} />
          </g>
        </CutFigure>
        <CutFigure parts={SERVANT} cuts={SERVANT_CUTS} halo={2}>
          <g transform={S_HEAD}>
            <path d={gouge(14, -11, -13, -5, 0.8, 3.4)} fill={PAPER} />
            <path d={EYE} fill={PAPER} />
          </g>
        </CutFigure>
        <CutFigure parts={CAPULET} cuts={CAPULET_CUTS} halo={2}>
          <g transform={C_HEAD}>
            <path d={CAP_BAND} fill={PAPER} />
            {/* Capulet's long white beard and white brow, as in every other panel and his portrait */}
            <path d={FULL_BEARD} fill={PAPER} stroke={INK} strokeWidth={0.9} />
            <path d={FULL_BEARD_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
            <path d={WHITE_BROW} fill={PAPER} />
            <path d={EYE} fill={PAPER} />
          </g>
        </CutFigure>

        {/* the list of guests, passing from hand to hand */}
        <path d={LIST} fill={RED} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={LIST_LINES} fill={PAPER} />
        <path
          d={`M${C_GRIP[0] - 5} ${C_GRIP[1]}a5 5 0 1 0 10 0a5 5 0 1 0 -10 0Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.4}
        />
      </g>
    </>
  )
}

export const aSuitorForJuliet: LinocutArt = { width: W, height: H, Draw: ASuitorForJuliet }
