import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'
import { shoe } from '../../romeo-and-juliet/panels/verona-kit'
import { NAPE_HAIR, RUFF } from '../../the-merchant-of-venice/panels/people'

import {
  CROWN,
  CROWN_BAND,
  CutFigure,
  EYE_DOWN,
  HEAD_MAN,
  Person,
  limb,
  mitt,
  seatedFrame,
  type P,
  type Part,
} from './people'

/**
 * Act 2, Scene 1: "The plot to kill the King", the sixth moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1540, src/data/full-texts/the-tempest.ts):
 *
 * - "Another part of the island." "How lush and lusty the grass looks! how
 *   green!" "The ground indeed is tawny." So it is open grassland under the
 *   afternoon sky, with a pale grassy bank, and the sea far off.
 * - "[All sleep but Alonso, Sebastian and Antonio.]" "Thank you. Wondrous
 *   heavy! [Alonso sleeps. Exit Ariel.]" "Here lies your brother, No better
 *   than the earth he lies upon". The King and old Gonzalo sleep where they
 *   sank down against the bank, their eyes shut, Gonzalo's head bowed on his
 *   breast and the King's pillowed on his hand, his elbow on his knee:
 *   plainly asleep, sitting up, never laid out like the dead. The King keeps
 *   his crown (the kit's CROWN), Gonzalo his white beard and cap. The other
 *   lords asleep further off are out of the picture, and Ariel has gone, so
 *   he is not drawn.
 * - "My strong imagination sees a crown Dropping upon thy head." The crown
 *   Antonio imagines is the spot colour: a crown in red, hanging over
 *   Sebastian's head with the strokes of its fall above it, the one thing in
 *   the picture that is not there. It answers the real crown on the sleeping
 *   King, which is what it means.
 * - "Noble Sebastian, Thou let'st thy fortune sleep"; "Whom I, with this
 *   obedient steel, three inches of it, Can lay to bed for ever". Antonio, in
 *   the Duke of Milan's hat, leans in behind Sebastian, a hand on his
 *   shoulder and the other on the hilt of his own sheathed sword. No blade
 *   is drawn: the moment drawn is the temptation, before "Draw thy sword".
 * - "Methinks I do." Sebastian, in his bonnet and short beard, stands
 *   looking down at his sleeping brother, his hand at his chin.
 *
 * The King's sleeping pose is one the kit's Person cannot make, so he is cut
 * here from the kit's own pieces (its man's head, crown, ruff and gown), as
 * the kit's docblock allows.
 *
 * Seeds: 3601 (sky), 3602 (sea and headland), 3603 (the bank), 3604
 * (ground).
 */

const W = 860
const H = 340
const GROUND = 330
const HORIZON = 200

type Marks = {
  sky: string
  sea: string
  headland: string
  headCuts: string
  bank: string
  bankCuts: string
  ground: string
  tufts: string
}

/** The grassy bank the sleepers have sunk against, its crest along the top. */
const bankTop = (x: number) => 264 - 26 * Math.exp(-(((x - 240) / 170) ** 2)) + 3 * Math.sin(x / 19)

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = gougeField(
    rng(3601),
    { x0: 0, x1: W, y0: 4, y1: HORIZON - 2 },
    (x, y) => clamp(0.08 + (1 - y / HORIZON) * 0.3),
    { spacing: 6, len: [36, 130], gap: [14, 44], max: 2.2 },
  )
  const s = rng(3602)
  const sea = gougeField(s, { x0: 0, x1: W, y0: HORIZON + 3, y1: 246 }, () => 0.3, {
    spacing: 5,
    len: [30, 90],
    gap: [8, 26],
    max: 1.8,
  })
  // A headland far off on the right.
  const headland =
    'M676 202C690 190 708 182 726 180C744 178 760 168 780 166C800 164 822 172 836 182C848 190 858 196 870 202Z'
  let headCuts = ''
  for (let i = 0; i < 40; i++) {
    const x = between(s, 690, 856)
    const y = between(s, 172, 198)
    const light = clamp(1 - (y - 168) / 34)
    if (s() > light) continue
    headCuts += gouge(x, y, x + between(s, 6, 14), y + between(s, 0.5, 2), 0.5 + light)
  }
  // The bank: pale, its grass cut in ink, thick along the crest and thinning
  // down its face, so the sleepers lie dark against it. (An ink bank swallowed
  // them, and they read as outlines, which in this set means invisible.)
  let bank = `M-10 ${H}L-10 ${n(bankTop(-10))}`
  for (let x = -10; x <= 470; x += 6) bank += `L${n(x)} ${n(bankTop(x))}`
  bank += `L482 ${H}Z`
  const b = rng(3603)
  let bankCuts = ''
  for (let i = 0; i < 170; i++) {
    const x = between(b, -6, 464)
    const top = bankTop(x)
    const y = between(b, top + 3, 304)
    const dark = clamp(0.95 - (y - top) / 40)
    if (b() > dark) continue
    const h = 3 + dark * 5
    bankCuts += `M${n(x - 2)} ${n(y)}l${n(-1)} ${n(-h)}M${n(x)} ${n(y)}l0 ${n(-h * 1.2)}M${n(x + 2)} ${n(y)}l${n(1.3)} ${n(-h)}`
  }
  const g = rng(3604)
  const ground = gougeField(
    g,
    { x0: 0, x1: W, y0: 248, y1: H },
    (x, y) => clamp(((y - 244) / 96) ** 1.5 * 0.5 + 0.06),
    { spacing: 6, len: [10, 46], gap: [14, 44], max: 2 },
  )
  let tufts = ''
  for (let i = 0; i < 90; i++) {
    const x = between(g, 0, W)
    const y = between(g, 254, H - 2)
    const h = 4 + clamp((y - 250) / 90) * 8
    tufts += `M${n(x - 2.4)} ${n(y)}l${n(-1.2)} ${n(-h)}M${n(x)} ${n(y)}l0 ${n(-h * 1.25)}M${n(x + 2.4)} ${n(y)}l${n(1.6)} ${n(-h)}`
  }
  cached = { sky, sea, headland, headCuts, bank, bankCuts, ground, tufts }
  return cached
}

// ── The sleeping King ────────────────────────────────────────────────────────

/**
 * His head: bowed forward and resting on his hand, in his own frame. (Sitting
 * with his legs out and his head on his breast, he could be taken for a body;
 * a head pillowed on a hand is asleep and nothing else.)
 */
const KING_HEAD = `translate(5 -82) rotate(30)`
/** His gown to the knee, over his body and his lap as he sits. */
const KING_GOWN =
  'M-22 -70C-28 -64 -27 -50 -24 -38L-20 -2L16 -2L37 -30C35 -39 28 -41 22 -37L10 -32C8 -44 7 -56 6 -66C2 -72 -14 -74 -22 -70Z'
const KING_GOWN_CUTS =
  gouge(-16, -36, 10, -32, 1.4, 0.6) +
  gouge(-12, -62, -16, -8, 1.6, 0.8) +
  gouge(10, -28, 30, -32, 1.4, -0.4) +
  gouge(-20, -66, 6, -64, 2, 2)
/** The far arm in his lap, the near arm's elbow on his knee and its hand under his cheek. */
const KING_ARMS: P[][] = [
  [
    [-12, -62],
    [-4, -38],
    [16, -30],
  ],
  [
    [-4, -62],
    [30, -44],
    [13, -66],
  ],
]

/**
 * The King asleep, sitting against the bank: placed with his seat at `at`,
 * facing right. His crown stays on his bowed head.
 */
function SleepingKing({ at, scale }: { at: P; scale: number }) {
  const leg = (pts: P[]): Part[] => [
    { d: limb(pts), w: 9 },
    shoe([pts[pts.length - 1][0] + 3, 0], 1),
  ]
  const parts = [
    ...leg([
      [-4, -10],
      [36, -20],
      [68, -6],
    ]),
    { d: limb(KING_ARMS[0]), w: 8.6 },
    { ...mitt(KING_ARMS[0][2], 4) },
    {
      d: limb([
        [-10, -66],
        [-2, -14],
      ]),
      w: 22,
    },
    ...leg([
      [2, -10],
      [34, -38],
      [54, -6],
    ]),
    { d: KING_GOWN },
    { d: NAPE_HAIR, t: KING_HEAD },
    { d: HEAD_MAN, t: KING_HEAD },
    [
      { d: limb(KING_ARMS[1]), w: 8.6, sep: 1.5 },
      { ...mitt(KING_ARMS[1][2], -112), sep: 1.5 },
    ],
  ]
  return (
    <CutFigure
      parts={parts}
      cuts={KING_GOWN_CUTS}
      transform={`translate(${n(at[0])} ${n(at[1])}) scale(${n(scale)})`}
    >
      <g transform={KING_HEAD}>
        <path d={CROWN} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
        <path d={CROWN_BAND} fill="none" stroke={INK} strokeWidth={1} />
        <path d={RUFF} fill={PAPER} stroke={INK} strokeWidth={0.8} />
        <path d={EYE_DOWN} fill={PAPER} />
      </g>
    </CutFigure>
  )
}

// ── The imagined crown ───────────────────────────────────────────────────────

/** The crown Antonio imagines, larger than the King's, and the strokes of its fall. */
const FALLING = 'M-12 -46L-12 -34M0 -50L0 -36M12 -46L12 -34'

const GONZALO: P = [184, 318]
const KING: P = [286, 322]
const SEBASTIAN: P = [486, GROUND]
const ANTONIO: P = [576, GROUND]
const DREAM_CROWN: P = [478, 134]
const SEAT = 8

function ThePlotToKillTheKing({ uid }: ArtProps) {
  const m = marks()
  const seaClip = `${uid}-sea`
  const sf = seatedFrame(SEAT)
  return (
    <>
      <defs>
        <clipPath id={seaClip}>
          <rect x={0} y={HORIZON} width={W} height={50} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <g clipPath={`url(#${seaClip})`}>
          <path d={m.sea} fill={INK} />
        </g>
        <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.headland} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.headCuts} fill={PAPER} />

        {/* the grassland: "how lush and lusty the grass looks" */}
        <path
          d={`M-10 ${H + 10}L-10 246Q430 236 ${W + 10} 246L${W + 10} ${H + 10}Z`}
          fill={PAPER}
        />
        <path
          d={`M-10 246Q430 236 ${W + 10} 246`}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path d={m.ground} fill={INK} />
        <path d={m.tufts} stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
        <path d={m.bank} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.bankCuts} stroke={INK} strokeWidth={1.2} strokeLinecap="round" />

        {/* old Gonzalo asleep, his head bowed on his breast */}
        <Person
          at={GONZALO}
          scale={1.14}
          pose={{
            look: 'gonzalo',
            seated: { seat: SEAT, knee: [34, -14] },
            head: { rot: 28 },
            eye: 'shut',
            far: {
              pts: [
                [-3, sf.shoulder[1]],
                [2, sf.shoulder[1] + 22],
                [20, sf.waist[1] - 2],
              ],
              deg: 6,
            },
            near: {
              pts: [
                [3, sf.shoulder[1]],
                [10, sf.shoulder[1] + 22],
                [26, sf.waist[1] - 4],
              ],
              deg: 4,
            },
          }}
        />

        {/* the King asleep against the bank, his crown on his bowed head */}
        <SleepingKing at={KING} scale={1.14} />

        {/* Sebastian, looking down at his sleeping brother, a hand at his chin */}
        <Person
          at={SEBASTIAN}
          scale={1.14}
          flip
          pose={{
            look: 'sebastian',
            head: { rot: 10 },
            sword: true,
            cloak: 4,
            legs: {
              far: [
                [-3, -70],
                [-5, -36],
                [-7, -3],
              ],
              near: [
                [3, -70],
                [6, -36],
                [8, -3],
              ],
            },
            far: {
              pts: [
                [-4, -130],
                [-8, -104],
                [-6, -82],
              ],
              deg: 84,
            },
            near: {
              pts: [
                [5, -128],
                [16, -108],
                [17, -132],
              ],
              hand: 'mitt',
              deg: -74,
            },
          }}
        />

        {/* Antonio, leaning in at his shoulder, a hand on his own sword's hilt */}
        <g transform={`rotate(-5 ${ANTONIO[0]} ${ANTONIO[1]})`}>
          <Person
            at={ANTONIO}
            scale={1.14}
            flip
            pose={{
              look: 'antonio',
              head: { rot: 14 },
              sword: true,
              cloak: 6,
              legs: {
                far: [
                  [-3, -70],
                  [-8, -36],
                  [-12, -3],
                ],
                near: [
                  [3, -70],
                  [9, -37],
                  [12, -3],
                ],
              },
              far: {
                pts: [
                  [-4, -130],
                  [22, -124],
                  [50, -132],
                ],
                hand: 'mitt',
                deg: 176,
              },
              near: {
                pts: [
                  [5, -128],
                  [14, -104],
                  [11, -82],
                ],
                hand: 'grip',
                deg: 96,
              },
            }}
          />
        </g>

        {/* "My strong imagination sees a crown Dropping upon thy head" */}
        <g
          className="lc-fade-in"
          style={timing({ delay: 0.8, dur: 1.4 })}
          transform={`translate(${DREAM_CROWN[0]} ${DREAM_CROWN[1]}) scale(1.5)`}
        >
          <path d={FALLING} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
          <path d={CROWN} fill={RED} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
          <path d={CROWN_BAND} fill="none" stroke={INK} strokeWidth={0.9} />
        </g>
      </g>
    </>
  )
}

export const thePlotToKillTheKing: LinocutArt = {
  width: W,
  height: H,
  Draw: ThePlotToKillTheKing,
}
