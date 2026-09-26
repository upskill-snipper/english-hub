import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CutFigure, HEAD, type Part } from './cut-figure'
import { CROWN, CROWN_CUTS, EYE, HEAD_BEARD, HEAD_MACBETH } from './inverness-people'

/**
 * Act 3, Scene 1: "Banquo suspects", the twelfth moment in the guide's
 * timeline. The royal palace at Forres, in the morning of the day of the
 * feast. Every detail is from the scene (quoted from the held
 * edition, src/data/full-texts/macbeth.ts):
 *
 * - BANQUO, alone: "Thou hast it now, King, Cawdor, Glamis, all, / As the Weird
 *   Women promis’d; and, I fear, / Thou play’dst most foully for’t." So
 *   he stands apart, a hand at his beard, looking across the hall at the new
 *   king: the look of a man turning a thought over.
 * - "Enter Macbeth as King". He asks Banquo "Ride you this afternoon?", so
 *   Banquo is dressed to ride: a cloak, boots, a sword.
 * - MACBETH, alone: "To be thus is nothing, / But to be safely thus. Our fears
 *   in Banquo / Stick deep", and "Upon my head they plac’d a fruitless crown, /
 *   And put a barren sceptre in my gripe". So Macbeth sits enthroned on a
 *   dais, gripping his sceptre, watching Banquo. The crown is the spot colour,
 *   because it is what the scene is about: the thing he has, and cannot keep
 *   safe. The other Macbeth panels crown him in red too.
 * - The murderers "are, my lord, without the palace gate", and are sent for.
 *   So two of them wait, black, in the bright doorway behind the throne.
 *
 * Banquo and Macbeth wear the plain heads shared with the other Macbeth panels
 * (./inverness-people.tsx); nothing is taken from a production.
 * Seed 312 for the wall and the floor.
 */

const W = 860
const H = 340
const FLOOR = 250

type Marks = {
  wall: string
  floor: string
  winLight: string
  doorRays: string
  steps: string
  pillar: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(312)
  // The hall is lit from the window on the left and, less, from the open door.
  const light = (x: number, y: number) => {
    const a = clamp(1 - Math.hypot((x - 196) * 0.8, y - 120) / 260)
    const b = clamp(1 - Math.hypot(x - 792, y - 170) / 150) * 0.55
    return Math.max(a, b, 0.05)
  }
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: FLOOR - 2 }, light, { spacing: 6.4 })

  // Flagstones: joints running to a vanishing point, and cross joints.
  let floor = ''
  const V = [420, 40]
  for (let xt = -700; xt < 1560; xt += 44) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    floor += wedge(xt, FLOOR, xb, H, 1, 3.4)
  }
  for (const [y, w] of [
    [262, 1.2],
    [280, 1.8],
    [304, 2.4],
    [332, 3],
  ])
    floor += gouge(0, y, W, y + between(r, -1, 1), w)

  let winLight = ''
  for (let y = 44; y < 204; y += 5) winLight += gouge(158, y, 236, y + 0.5, 0.35)
  // The pillar's rounded face: cuts heavy on the lit left side, gone on the right.
  let pillar = ''
  for (let x = 401; x < 440; x += 3.2) {
    const L = clamp(1 - (x - 401) / 30)
    let y = 32 + between(r, 0, 10)
    while (y < 224) {
      const len = between(r, 16, 50)
      if (r() < 0.25 + L * 0.75)
        pillar += gouge(x, y, x + between(r, -0.4, 0.4), Math.min(y + len, 224), 0.3 + L * 1.3)
      y += len + between(r, 4, 14)
    }
  }
  const doorRays = rays(rng(313), 792, 150, { from: 20, to: 110, every: 7, width: 2.6 })

  // The steps of the dais: paper treads where the light falls, worn by feet.
  let steps = ''
  for (const [x0, y] of [
    [522, 252],
    [508, 264.2],
    [492, 282.4],
  ]) {
    let x = x0 + between(r, 4, 20)
    while (x < W) {
      const len = between(r, 10, 40)
      steps += gouge(x, y, x + len, y + between(r, -0.3, 0.3), 0.7)
      x += len + between(r, 18, 60)
    }
  }

  cached = { wall, floor, winLight, doorRays, steps, pillar }
  return cached
}

/** Banquo, facing right, a hand at his beard, dressed to ride. */
const BANQUO_HEAD_AT = 'translate(199 126) rotate(5) scale(1.05)'
const BANQUO: Part[] = [
  { d: 'M170 226L128 258', w: 5 },
  {
    d: 'M184 146C176 150 170 160 169 174C167 206 164 248 160 292C176 298 200 300 224 294C220 256 218 214 217 178C217 162 213 152 205 147C198 144 190 144 184 146Z',
  },
  { d: 'M182 290L178 315', w: 9.5 },
  { d: 'M204 290L210 315', w: 9.5 },
  { d: 'M170 309L184 308L185 319L164 319C164 314 166 311 170 309Z' },
  { d: 'M204 309L217 308C222 310 225 314 224 319L205 319Z' },
  { d: HEAD_BEARD, t: BANQUO_HEAD_AT },
  { d: 'M206 157C212 170 218 181 224 188C226 174 224 160 218 150', w: 7.5, sep: 1.5 },
  { d: 'M213 147C216 143 221 142 224 145C225 149 223 153 219 154C216 154 213 151 213 147Z' },
  { d: 'M212 216L234 205', w: 3.6, sep: 1.3 },
  { d: 'M224 201L230 214', w: 3.2, sep: 1.1 },
]
const BANQUO_CUTS =
  gouge(178, 170, 172, 286, 1.4, 1.2) +
  gouge(192, 186, 190, 290, 1.1, 0.4) +
  gouge(208, 196, 213, 288, 1, -0.8) +
  gouge(186, 152, 204, 151, 0.8) +
  gouge(150, 240, 134, 252, 0.8)

/** The throne on its dais: a high back with three finials, and the seat. */
const THRONE =
  'M636 214V76L646 66V54L652 48L658 54V66L672 56V42L678 34L684 42V56L698 66V54L704 48L710 54V66L720 76V214Z'
const THRONE_SEAT = 'M604 204H724V226H716V262H706V226H622V262H612V226H604Z'
const THRONE_CUTS =
  gouge(648, 84, 648, 196, 1.4) +
  gouge(708, 84, 708, 196, 1.4) +
  gouge(652, 80, 704, 80, 1.1) +
  gouge(606, 208, 722, 208, 1)

/** Macbeth enthroned, facing left, crowned, gripping the sceptre, leaning towards Banquo. */
const MACBETH_HEAD_AT = 'translate(640 122) rotate(-6) scale(-1.06 1.06)'
const MACBETH: Part[] = [
  {
    d: 'M650 140C638 140 628 148 624 160C620 174 619 192 622 208L684 210C686 190 684 170 680 156C676 146 666 140 656 140Z',
  },
  {
    d: 'M682 196L680 224L606 226C592 226 584 220 584 211C584 202 592 197 606 197Z',
  },
  { d: 'M588 208L584 256L622 256L618 216Z' },
  { d: 'M572 254L592 252L596 262L570 262C569 258 570 256 572 254Z' },
  { d: 'M598 254L616 252L620 262L596 262Z' },
  { d: HEAD_MACBETH, t: MACBETH_HEAD_AT },
  { d: 'M632 152C626 164 620 176 616 184C610 190 604 194 598 196', w: 8.5, sep: 1.5 },
  { d: 'M592 190C596 187 602 188 604 192C605 197 602 201 597 201C593 200 590 196 592 190Z' },
]
const MACBETH_CUTS =
  gouge(640, 158, 632, 204, 1.2, 1.2) +
  gouge(656, 156, 652, 206, 1, 0.4) +
  gouge(600, 214, 660, 216, 1, 0.8) +
  gouge(594, 222, 590, 252, 1, 0.6) +
  gouge(606, 226, 606, 254, 0.9)

/** The sceptre, upright in his fist, and its head. */
const SCEPTRE = 'M598 124L600 250'

/** A murderer waiting in the doorway: plain, bare-headed, in a short coat. */
const MURDERER: Part[] = [
  {
    d: 'M-12 -150C-20 -146 -24 -136 -24 -124C-24 -104 -26 -84 -28 -64C-14 -60 4 -60 18 -64C16 -84 16 -104 16 -124C16 -136 12 -146 4 -150C-2 -152 -7 -152 -12 -150Z',
  },
  { d: 'M-16 -66L-18 -4', w: 10 },
  { d: 'M6 -66L8 -4', w: 10 },
  { d: 'M-28 -6L-14 -6L-12 2L-30 2Z' },
  { d: 'M2 -6L14 -6C18 -4 20 -1 20 2L2 2Z' },
  { d: HEAD, t: 'translate(-4 -168)' },
]

function BanquoSuspects({ uid }: ArtProps) {
  const m = marks()
  const door = `${uid}-door`
  return (
    <>
      <defs>
        <clipPath id={door}>
          <path d="M752 250V112C752 88 770 70 792 70C814 70 832 88 832 112V250Z" />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [620, 170], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={FLOOR - 8} width={W} height={5} fill={PAPER} />

        {/* the tall window, the day coming in */}
        <path d="M146 214V58C146 30 166 16 192 16C218 16 238 30 238 58V214Z" fill={INK} />
        <path d="M156 206V60C156 38 172 26 192 26C212 26 228 38 228 60V206Z" fill={PAPER} />
        <path d={m.winLight} fill={INK} />
        <path d="M192 26V206M156 110H228M156 160H228" stroke={INK} strokeWidth={4} fill="none" />
        <rect x={138} y={206} width={108} height={8} fill={PAPER} />
        <rect x={138} y={214} width={108} height={2} fill={INK} />

        {/* a pillar between the two men, lit on the window side */}
        <rect x={398} y={0} width={46} height={FLOOR} fill={INK} />
        <path d={m.pillar} fill={PAPER} />
        <path
          d="M388 20H454V30H388ZM388 226H454V240H388Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />

        {/* the floor of the hall */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        {[...Array(9)].map((_, i) => (
          <path
            key={i}
            d={gouge(150 + i * 3, 322 + i * 0.4, 236 - i * 2, 322 + i * 0.4, 1.6 - i * 0.12)}
            fill={INK}
          />
        ))}

        {/* the open door behind the throne, and the men waiting there */}
        <path d="M744 250V110C744 80 766 62 792 62C818 62 840 80 840 110V250Z" fill={PAPER} />
        <path d="M752 250V112C752 88 770 70 792 70C814 70 832 88 832 112V250Z" fill={INK} />
        <g clipPath={`url(#${door})`}>
          <path d={m.doorRays} fill={PAPER} />
          <g className="lc-fade-in" style={timing({ delay: 1.4, dur: 1.2 })}>
            <CutFigure transform="translate(778 250) scale(0.74)" parts={MURDERER} halo={2.2} />
            <CutFigure transform="translate(812 252) scale(-0.7 0.7)" parts={MURDERER} halo={2.2} />
          </g>
        </g>

        {/* the dais */}
        <path d="M520 250H860V262H520Z" fill={INK} />
        <path d="M506 262H860V280H506Z" fill={INK} />
        <path d="M490 280H860V298H490Z" fill={INK} />
        <path
          d="M522 250H860V253.5H522ZM508 262H860V266H508ZM492 280H860V284.5H492Z"
          fill={PAPER}
        />
        <path d={m.steps} fill={INK} />

        {/* the throne, and Macbeth on it */}
        <path
          d={THRONE}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={THRONE_SEAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={THRONE_CUTS} fill={PAPER} />
        <CutFigure parts={MACBETH} cuts={MACBETH_CUTS}>
          <path d={EYE} transform={MACBETH_HEAD_AT} fill={PAPER} />
          {/* "a fruitless crown" */}
          <path d={CROWN} transform={MACBETH_HEAD_AT} fill={RED} stroke={INK} strokeWidth={1} />
          <path d={CROWN_CUTS} transform={MACBETH_HEAD_AT} fill={INK} />
        </CutFigure>
        {/* "a barren sceptre in my gripe" */}
        <path d={SCEPTRE} stroke={PAPER} strokeWidth={6.4} strokeLinecap="round" />
        <path d={SCEPTRE} stroke={INK} strokeWidth={3.4} strokeLinecap="round" />
        <circle cx={598} cy={118} r={6.6} fill={INK} stroke={PAPER} strokeWidth={1.6} />
        <path d="M598 111V104M594.5 107.5H601.5" stroke={PAPER} strokeWidth={1.6} />
        <path
          d="M591 190C595 187 601 188 603 192C604 197 601 201 596 201C592 200 589 196 591 190Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={1}
        />

        {/* Banquo, in the light of the window */}
        <CutFigure parts={BANQUO} cuts={BANQUO_CUTS}>
          <path d={EYE} transform={BANQUO_HEAD_AT} fill={PAPER} />
        </CutFigure>
      </g>
    </>
  )
}

export const banquoSuspects: LinocutArt = { width: W, height: H, Draw: BanquoSuspects }
