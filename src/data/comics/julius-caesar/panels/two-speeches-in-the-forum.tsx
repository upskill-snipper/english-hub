import type { LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Person, type P, type Pose } from './people'
import { Eave, TempleFront, templeFront } from './rome'

/**
 * Act 3, Scene 2: "Two speeches in the Forum", the ninth moment in the
 * guide's timeline. Brutus has spoken and gone ("Good countrymen, let me
 * depart alone"), and the panel is Antony's speech at the turn that wins the
 * crowd: the will. Every detail is from the scene in the held edition
 * (Project Gutenberg #1522, src/data/full-texts/julius-caesar.ts):
 *
 * - "The same. The Forum." "Let him go up into the public chair"; "[Goes
 *   up.]" Antony speaks from the pulpit, a raised stone platform with a
 *   parapet, above the citizens. The Forum is a public place of Rome, so its
 *   temple is the one the public place has in the panels of Act 1
 *   (templeFront, ./rome.tsx), and a student knows the place again.
 * - "But here's a parchment with the seal of Caesar, I found it in his
 *   closet; 'tis his will: Let but the commons hear this testament, Which,
 *   pardon me, I do not mean to read". So he holds the parchment up from the
 *   pulpit, the seal hanging from it: the spot colour, the will that turns
 *   Rome. He comes down to read it only later ("Shall I descend?").
 * - "My heart is in the coffin there with Caesar"; "Stand from the hearse".
 *   Caesar's coffin stands before the pulpit on the bier that carries it,
 *   shut: a long box with a gabled lid, as a Roman's was.
 * - "We'll hear the will. Read it, Mark Antony." The citizens are ordinary
 *   Romans, men and women of the kit (./people.tsx) in their tunics and
 *   mantles, packed towards the pulpit and looking up at him: the cobbler
 *   points at the parchment, calling out; an old man bows his head into his
 *   hand, already moved ("Caesar has had great wrong"), as the whole crowd
 *   will weep before the speech is done ("O, now you weep"); a woman holds
 *   her hands together at her breast. No one in the crowd raises an arm: a
 *   raised arm in this dress reads as a salute (the kit's rule).
 * - The quotation is the line the picture shows. The guide's own, "Mischief,
 *   thou art afoot", is spoken once the crowd has gone.
 *
 * SAFEGUARDING. The body is not shown: the coffin is shut. Caesar's mantle,
 * which Antony shows the crowd with its rents ("See what a rent the envious
 * Casca made"), and his wounds are left to the words.
 *
 * Seeds: 7501 (sky), 7502 (walls), 7503 (paving), 7504 (the pulpit's stones).
 */

const W = 860
const H = 340
/** Where the paving meets the house fronts and the temple steps. */
const STREET = 246
const TEMPLE = { x0: 334, x1: 584, top: 34 }
/** The pulpit: its platform's top, the parapet's top, its front face. */
const PULPIT = { x0: 54, x1: 286, top: 240, rail: 206, foot: 314 }

type Marks = {
  sky: string
  walls: string
  paving: string
  shadows: string
  courses: string
  temple: ReturnType<typeof templeFront>
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = gougeField(
    rng(7501),
    { x0: 0, x1: W, y0: 6, y1: 104 },
    (x, y) => clamp(0.08 + (1 - y / 104) * 0.24),
    { spacing: 7, len: [40, 150], gap: [24, 70], max: 1.6 },
  )
  const walls = gougeField(
    rng(7502),
    { x0: 0, x1: W, y0: 92, y1: STREET - 4 },
    (x, y) => {
      if (x > TEMPLE.x0 - 16 && x < TEMPLE.x1 + 16) return 0
      const top = x < TEMPLE.x0 ? 92 : 100
      return clamp(0.05 + Math.max(0, 1 - (y - top) / 26) * 0.5)
    },
    { spacing: 7, len: [14, 60], gap: [16, 46], max: 2 },
  )
  const paving = flagFloor(rng(7503), W, H, STREET, [470, 120], 54, 6)
  const shadows =
    footShadow(356, 314, 64) +
    footShadow(470, 286, 30) +
    footShadow(560, 288, 30) +
    footShadow(652, 286, 30) +
    footShadow(744, 286, 30)
  // The pulpit's stone courses, cut in ink on its white face.
  const r = rng(7504)
  let courses = ''
  for (let y = PULPIT.top + 14; y < PULPIT.foot - 4; y += 15)
    courses += gouge(PULPIT.x0 + 4, y + between(r, -0.6, 0.6), PULPIT.x1 - 4, y, 1.1)
  for (let y = PULPIT.top; y < PULPIT.foot - 10; y += 15)
    for (let x = PULPIT.x0 + between(r, 20, 50); x < PULPIT.x1 - 10; x += between(r, 44, 70))
      courses += gouge(x, y + 2, x + between(r, -0.6, 0.6), y + 13, 0.9)
  const temple = templeFront(TEMPLE.x0, TEMPLE.x1, TEMPLE.top, STREET)
  cached = { sky, walls, paving, shadows, courses, temple }
  return cached
}

/**
 * Caesar's coffin on the bier that carries it, before the pulpit: "My heart
 * is in the coffin there with Caesar". Closed, the lid's edge and the
 * carrying poles cut in paper.
 */
const COFFIN = 'M292 296V272H412V296Z'
/** The lid: gabled, with a raised point at each corner, as a Roman coffin's is. */
const LID = 'M286 274L290 262L298 266L352 254L406 266L414 262L418 274Z'
const BIER = 'M270 296H434V303H270ZM292 303L296 318M412 303L408 318'
const BIER_CUTS =
  gouge(272, 299.4, 432, 299.4, 0.9) +
  gouge(298, 284, 406, 284, 1) +
  gouge(300, 271, 352, 259, 0.8) +
  gouge(352, 259, 404, 271, 0.8)

/** The crowd, facing the pulpit: where each stands, their size, and their pose. */
const up = (rot: number) => ({ rot })
const CROWD: { at: P; s: number; pose: Pose }[] = [
  // the back row, beyond the coffin
  { at: [462, 284], s: 0.72, pose: { look: 'citizen', variant: 1, head: up(-14) } },
  { at: [528, 286], s: 0.72, pose: { look: 'citizen-woman', head: up(-12) } },
  { at: [598, 284], s: 0.72, pose: { look: 'citizen', variant: 2, head: up(-10) } },
  { at: [664, 286], s: 0.72, pose: { look: 'citizen', variant: 4, head: up(-14) } },
  { at: [730, 284], s: 0.72, pose: { look: 'citizen', variant: 0, bare: true, head: up(-10) } },
  { at: [800, 286], s: 0.72, pose: { look: 'citizen-woman', head: up(-12) } },
  // the middle row
  {
    at: [500, 316],
    s: 0.86,
    pose: {
      look: 'citizen-woman',
      head: up(-14),
      near: {
        pts: [
          [4, -122],
          [10, -102],
          [20, -110],
        ],
        hand: 'mitt',
      },
    },
  },
  { at: [622, 318], s: 0.86, pose: { look: 'citizen', variant: 1, head: up(-16) } },
  { at: [748, 316], s: 0.86, pose: { look: 'citizen', variant: 2, head: up(-12) } },
  // the front row
  {
    at: [446, 350],
    s: 1.04,
    pose: {
      look: 'citizen',
      variant: 0,
      head: up(-16),
      mouth: 'open',
      near: {
        pts: [
          [5, -128],
          [18, -114],
          [34, -132],
        ],
        hand: 'point',
        deg: -58,
      },
    },
  },
  {
    at: [568, 352],
    s: 1.04,
    pose: {
      look: 'citizen',
      variant: 3,
      head: up(10),
      eye: 'down',
      near: {
        pts: [
          [5, -128],
          [16, -108],
          [18, -142],
        ],
        hand: 'mitt',
        deg: -70,
      },
    },
  },
  {
    at: [686, 350],
    s: 1,
    pose: {
      look: 'citizen-woman',
      head: up(-14),
      far: {
        pts: [
          [-3, -124],
          [0, -102],
          [12, -108],
        ],
        hand: 'mitt',
      },
      near: {
        pts: [
          [3, -124],
          [8, -102],
          [14, -112],
        ],
        hand: 'mitt',
        deg: 150,
      },
    },
  },
  {
    at: [806, 348],
    s: 1.04,
    pose: {
      look: 'citizen',
      variant: 4,
      head: up(-12),
      near: {
        pts: [
          [5, -128],
          [12, -106],
          [6, -112],
        ],
        hand: 'mitt',
        deg: 180,
      },
    },
  },
]

function TwoSpeechesInTheForum() {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [300, 200], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />

      {/* the Forum: house fronts either side of a temple */}
      <path d={m.walls} fill={INK} />
      <Eave x0={-12} x1={TEMPLE.x0 - 22} y={92} />
      <Eave x0={TEMPLE.x1 + 22} x1={W + 12} y={100} />
      <path d={`M${TEMPLE.x0 - 22} 80V${STREET}`} stroke={INK} strokeWidth={LINE.bold} />
      <path d={`M${TEMPLE.x1 + 22} 88V${STREET}`} stroke={INK} strokeWidth={LINE.bold} />
      <rect x={640} y={126} width={40} height={34} fill={INK} />
      <path d="M660 126V160M640 143H680" stroke={PAPER} strokeWidth={2} />
      <rect x={760} y={126} width={40} height={34} fill={INK} />
      <path d="M780 126V160M760 143H800" stroke={PAPER} strokeWidth={2} />
      <TempleFront t={m.temple} x0={TEMPLE.x0} x1={TEMPLE.x1} base={STREET} />
      <rect x={0} y={STREET} width={W} height={H - STREET} fill={PAPER} />
      <path d={m.paving} fill={INK} />
      <path d={m.shadows} fill={INK} />

      {/* the pulpit, and Antony in it with the parchment held up */}
      <path
        d={`M${PULPIT.x0} ${PULPIT.foot}V${PULPIT.top}H${PULPIT.x1}V${PULPIT.foot}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.bold}
      />
      <path d={m.courses} fill={INK} />
      <Person
        at={[176, PULPIT.top]}
        scale={1.14}
        pose={{
          look: 'antony',
          head: { rot: -4 },
          far: {
            pts: [
              [-4, -130],
              [12, -112],
              [30, -106],
            ],
            hand: 'open',
            deg: 24,
          },
          near: {
            pts: [
              [5, -128],
              [30, -142],
              [46, -166],
            ],
            hand: 'grip',
            deg: -80,
          },
        }}
      >
        <g transform="translate(6 2)">
          {/* "here's a parchment with the seal of Caesar" */}
          <path
            d="M30 -178Q42 -181 56 -178L55 -138Q43 -141 31 -138Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.3}
            strokeLinejoin="round"
          />
          <path
            d="M34 -170H52M34 -164H52M34 -158H50M34 -152H52M34 -146H46"
            stroke={INK}
            strokeWidth={0.9}
          />
          <path d="M27 -182Q42 -186 59 -182L59 -176Q42 -180 27 -176Z" fill={INK} />
          <path d="M43 -139.6L43 -131" stroke={INK} strokeWidth={1.3} />
          <circle cx={43} cy={-126} r={5.4} fill={RED} stroke={INK} strokeWidth={1.4} />
        </g>
      </Person>
      {/* the parapet in front of him */}
      <path
        d={`M${PULPIT.x0 - 6} ${PULPIT.top + 2}V${PULPIT.rail}H${PULPIT.x1 + 6}V${PULPIT.top + 2}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.bold}
      />
      <path
        d={
          gouge(PULPIT.x0 - 4, PULPIT.rail + 7, PULPIT.x1 + 4, PULPIT.rail + 7, 1.3) +
          gouge(PULPIT.x0 - 4, PULPIT.top - 4, PULPIT.x1 + 4, PULPIT.top - 4, 1.1)
        }
        fill={INK}
      />

      {/* Caesar's coffin on its bier */}
      <path
        d={BIER + COFFIN + LID}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={BIER_CUTS} fill={PAPER} />

      {/* the citizens, ordinary Romans, turned to the pulpit */}
      {CROWD.map((c, i) => (
        <Person key={i} at={c.at} scale={c.s} flip pose={c.pose} />
      ))}
    </g>
  )
}

export const twoSpeechesInTheForum: LinocutArt = {
  width: W,
  height: H,
  Draw: TwoSpeechesInTheForum,
}
