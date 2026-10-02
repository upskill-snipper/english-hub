import type { LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { COIF, HEAD_WOMAN, VEIL, VEIL_BAND } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import {
  BORACHIO_CAP,
  BORACHIO_CAP_CUT,
  CONRADE_HAT,
  CONRADE_HAT_CUT,
  DON_JOHN_HAT,
  DON_JOHN_HAT_CUT,
  VERGES_CAP,
  VERGES_CAP_CUT,
  WATCH_HAT,
  WATCH_HAT_CUT,
} from '../../much-ado-about-nothing/panels/people'
import { CutFigure, EYE, HEAD_MAN, Person, type P } from './people'

/**
 * The Epilogue: "Prospero asks to be set free", the fourteenth and last moment
 * in the guide's timeline. Every detail is from the held edition (Project
 * Gutenberg #1540, src/data/full-texts/the-tempest.ts):
 *
 * - The guide sets it on "The stage, speaking directly to the audience", and
 *   the speech is to them: "I must be here confin'd by you", "release me from
 *   my bands With the help of your good hands", "Gentle breath of yours my
 *   sails Must fill". So the playhouse is drawn from the side: Prospero alone
 *   on the boards, near the edge of the stage, and the audience below him in
 *   the pit and above in a gallery, turned to him and looking up. They are in
 *   the plain dress of about 1611, the caps and hats of the site's other
 *   plays of the time; nobody in particular.
 * - "Now my charms are all o'erthrown, And what strength I have's mine own,
 *   Which is most faint ... Now I want Spirits to enforce, art to enchant".
 *   So he has no staff, no mantle and no book, and his head is a little
 *   bowed. "Since I have my dukedom got": he is dressed as the Duke he is
 *   again, as in the panel before, in the Duke of Milan's hat over his white
 *   hair and with a rapier at his hip (the kit's `duke`).
 * - "release me from my bands With the help of your good hands": he holds out
 *   both hands to them, open, the fingers apart, below the shoulder. No band,
 *   rope or chain is drawn on him: the bands are the audience's spell, a
 *   figure of speech, and a bound man would say something the speech does not.
 * - The stage is the plainest of its period: boards on a raised platform,
 *   its side panelled, and a dark wall behind with a curtained doorway. Light
 *   falls round him and nowhere else, so he is the one figure in the light,
 *   and the audience are dark shapes cut out by their edges.
 *
 * There is no spot colour in this print. Nothing in the speech asks for one,
 * and the style guide keeps red for what a scene is about; his art, which the
 * red marked in the island's panels (Ariel's fire, Iris's bow), is given up.
 *
 * Seeds: 4401 (the back wall), 4402 (the boards), 4403 (the stage's side).
 */

const W = 860
const H = 340
/** The top of the stage, where he stands, and its front edge. */
const STAGE = 258
const EDGE = 604

type Marks = {
  wall: string
  boards: string
  side: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The wall behind the stage: ink, with the light cut into it round him.
  const pool = (x: number, y: number) =>
    Math.max(0, 1 - Math.hypot((x - 490) * 0.6, (y - 160) * 0.85) / 200)
  const wall = gougeField(
    rng(4401),
    { x0: 0, x1: W, y0: 2, y1: STAGE },
    (x, y) => clamp(0.05 + pool(x, y) ** 0.5 * 1.5),
    { spacing: 7, len: [30, 120], gap: [6, 22], max: 4 },
  )
  // The boards of the stage, seen a little from above, their joints in ink.
  const b = rng(4402)
  let boards = ''
  for (let y = STAGE + 2.6; y < STAGE + 12; y += 3.2) {
    let x = between(b, -20, 0)
    while (x < EDGE - 4) {
      const len = between(b, 50, 140)
      boards += gouge(x, y, Math.min(x + len, EDGE - 4), y + between(b, -0.3, 0.3), 0.55)
      x += len + between(b, 4, 10)
    }
  }
  // The side of the stage: panels, cut as wainscot is, lit near the edge
  // where the light from the stage falls.
  const s = rng(4403)
  let side = ''
  for (let x = 20; x < EDGE - 10; x += 44) {
    const L = clamp(0.25 + pool(x, 230) * 0.9)
    side += wedge(
      x + between(s, -1, 1),
      STAGE + 20,
      x + between(s, -1, 1),
      H - 6,
      0.6,
      0.8 + L * 2.6,
    )
  }
  side += gouge(0, STAGE + 16, EDGE - 6, STAGE + 16, 1.4)
  cached = { wall, boards, side }
  return cached
}

// ── The audience ─────────────────────────────────────────────────────────────

/** Head and shoulders of one of the audience, facing left, in a head's frame. */
type Watcher = {
  at: P
  scale: number
  head: 'man' | 'woman'
  hat?: { d: string; cut?: string }
  /** The tilt of the head: looking up at the stage is negative. */
  rot: number
}

const SHOULDERS = 'M-30 80C-31 46 -22 28 -4 25C14 24 26 34 28 80Z'

const WATCHERS: Watcher[] = [
  // in the pit, standing below the edge of the stage
  { at: [640, 280], scale: 1.12, head: 'man', hat: { d: WATCH_HAT, cut: WATCH_HAT_CUT }, rot: -16 },
  { at: [700, 270], scale: 1.08, head: 'woman', hat: { d: COIF }, rot: -14 },
  {
    at: [758, 284],
    scale: 1.12,
    head: 'man',
    hat: { d: BORACHIO_CAP, cut: BORACHIO_CAP_CUT },
    rot: -12,
  },
  {
    at: [816, 272],
    scale: 1.1,
    head: 'man',
    hat: { d: CONRADE_HAT, cut: CONRADE_HAT_CUT },
    rot: -14,
  },
  // in the gallery
  { at: [690, 118], scale: 0.76, head: 'woman', hat: { d: VEIL, cut: VEIL_BAND }, rot: 6 },
  {
    at: [748, 114],
    scale: 0.76,
    head: 'man',
    hat: { d: DON_JOHN_HAT, cut: DON_JOHN_HAT_CUT },
    rot: 4,
  },
  { at: [806, 120], scale: 0.76, head: 'man', hat: { d: VERGES_CAP, cut: VERGES_CAP_CUT }, rot: 6 },
]

function Watcher({ w }: { w: Watcher }) {
  const head = w.head === 'woman' ? HEAD_WOMAN : HEAD_MAN
  const t = `translate(${n(w.at[0])} ${n(w.at[1])}) scale(${n(-w.scale)} ${n(w.scale)})`
  const headT = `rotate(${w.rot})`
  return (
    <CutFigure
      transform={t}
      parts={[
        { d: SHOULDERS },
        ...(w.hat && w.head === 'woman' ? [{ d: w.hat.d, t: headT }] : []),
        { d: head, t: headT },
        ...(w.hat && w.head !== 'woman' ? [{ d: w.hat.d, t: headT }] : []),
      ]}
      halo={1.6}
    >
      <g transform={headT}>
        <path d={EYE} fill={PAPER} />
        {w.hat?.cut && <path d={w.hat.cut} fill={PAPER} />}
      </g>
    </CutFigure>
  )
}

const PROSPERO: P = [492, STAGE]

function ProsperoAsksToBeSetFree() {
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [500, 190], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={INK} />
        <path d={m.wall} fill={PAPER} />

        {/* the curtained doorway in the wall behind the stage */}
        <path
          d="M96 258V112Q96 84 136 84Q176 84 176 112V258Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />
        <path
          d={
            gouge(108, 104, 106, 254, 1.6, 1) +
            gouge(124, 92, 122, 254, 1.8, 0.6) +
            gouge(140, 90, 140, 254, 1.8, 0) +
            gouge(156, 94, 158, 254, 1.8, -0.6) +
            gouge(168, 106, 170, 254, 1.4, -1)
          }
          fill={PAPER}
        />

        {/* the gallery, and those who watch from it */}
        <rect x={640} y={0} width={W - 640} height={150} fill={INK} />
        <path d="M640 0V150" stroke={PAPER} strokeWidth={LINE.carve} />
        {WATCHERS.slice(4).map((w) => (
          <Watcher key={w.at[0]} w={w} />
        ))}
        <path d="M640 134H870V146H640Z" fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path
          d={[660, 690, 720, 750, 780, 810, 840].map((x) => `M${x} 146V178`).join('')}
          stroke={PAPER}
          strokeWidth={3}
        />
        <path d="M640 178H870" stroke={PAPER} strokeWidth={LINE.bold} />

        {/* the stage: its boards, and its panelled side */}
        <path d={`M-10 ${STAGE}H${EDGE}V${H + 10}H-10Z`} fill={INK} />
        <path d={`M-10 ${STAGE}H${EDGE}V${STAGE + 12}H-10Z`} fill={PAPER} />
        <path d={m.boards} fill={INK} />
        <path d={m.side} fill={PAPER} />
        <path
          d={`M-10 ${STAGE}H${EDGE}V${H + 10}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />

        {/* Prospero, alone, his art given up, asking for their hands */}
        <Person
          at={PROSPERO}
          scale={1.16}
          pose={{
            look: 'prospero',
            duke: true,
            head: { rot: 10 },
            far: {
              pts: [
                [-4, -130],
                [12, -118],
                [30, -124],
              ],
              hand: 'open',
              deg: -22,
              thumb: -1,
            },
            near: {
              pts: [
                [5, -128],
                [22, -104],
                [50, -98],
              ],
              hand: 'open',
              deg: 14,
              thumb: -1,
            },
          }}
        />

        {/* the audience in the pit, below the edge of the stage */}
        {WATCHERS.slice(0, 4).map((w) => (
          <Watcher key={w.at[0]} w={w} />
        ))}
      </g>
    </>
  )
}

export const prosperoAsksToBeSetFree: LinocutArt = {
  width: W,
  height: H,
  Draw: ProsperoAsksToBeSetFree,
}
