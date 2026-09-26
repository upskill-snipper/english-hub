import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CutFigure, type Part } from './cut-figure'
import {
  CROWN,
  EYE,
  HEAD_MACBETH,
  HEAD_MAN,
  HEAD_OLD,
  HEAD_WOMAN,
  OLD_BEARD,
  OLD_HAIR,
  OLD_STRANDS,
  VEIL,
} from './inverness-people'

/**
 * Act 1, Scene 7: "Macbeth wavers", the seventh moment in the guide's
 * timeline. Every detail is from the scene:
 *
 * - "Hautboys and torches. Enter, and pass over, a Sewer and divers Servants
 *   with dishes and service. Then enter Macbeth." (The stage directions here
 *   are quoted from the held edition, src/data/full-texts/macbeth.ts.) The
 *   feast goes on
 *   in the great hall behind: a long table laid with dishes and candles, the
 *   guests seated along it.
 * - "He has almost supp’d. Why have you left the chamber?" "Hath he ask’d for
 *   me?" So Macbeth has left the hall, and the two of them stand in the
 *   passage outside it, black against its light, with the king at the head of
 *   his own table between them.
 * - "We will proceed no further in this business." Macbeth leans away from
 *   her with a hand raised, palm out.
 * - "When you durst do it, then you were a man." Lady Macbeth leans in and
 *   points at him.
 * - "Wouldst thou have that / Which thou esteem'st the ornament of life, / And
 *   live a coward in thine own esteem". What they argue over is the crown, so
 *   the king's crown at the far end of the table is printed in the spot
 *   colour, with the candle flames and the torches of the hall.
 *
 * Nobody's dress is described, so all are in plain dress of the play's
 * Scotland. Nothing is taken from a film or stage production. Seeds: 701
 * (hall wall), 702 (passage), 703 (floors).
 */

const W = 860
const H = 340
/** The arch between the dark passage and the lit hall. */
const ARCH = 'M246 302V150C246 80 328 42 430 42C532 42 614 80 614 150V302Z'

type Marks = { hallWall: string; passage: string; hallFloor: string; passFloor: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The hall's back wall: lit, so paper with a few ink lines, darker aloft.
  const hallWall = gougeField(
    rng(701),
    { x0: 240, x1: 620, y0: 40, y1: 196 },
    (x, y) => clamp(0.42 - (y - 40) / 260),
    { spacing: 6, len: [30, 90], gap: [6, 18], max: 3.2 },
  )
  // The passage: dark stone, touched by the light from the arch.
  const passage = gougeField(
    rng(702),
    { x0: 0, x1: W, y0: 4, y1: 300 },
    (x) => clamp(0.5 - Math.min(Math.abs(x - 246), Math.abs(x - 614)) / 260) * 0.9,
    { spacing: 9, len: [10, 28], gap: [3, 7], max: 2.6 },
  )
  // Floors: the hall's boards running away, the passage flags in the spill of light.
  const f = rng(703)
  let hallFloor = ''
  for (let y = 244; y < 302; y += 7)
    hallFloor += gouge(240, y, 620, y + between(f, -0.6, 0.6), 0.5 + (y - 244) * 0.02)
  for (let x = 250; x < 620; x += 34)
    hallFloor += wedge(x, 244, 430 + (x - 430) * 1.5, 302, 0.6, 1.6)
  let passFloor = ''
  for (let y = 306; y < H; y += 8) passFloor += gouge(0, y, W, y, 0.8 + (y - 306) * 0.05)
  for (let x = -200; x < 1100; x += 70)
    passFloor += wedge(430 + (x - 430) * 0.8, 302, x, H + 10, 1, 3)
  cached = { hallWall, passage, hallFloor, passFloor }
  return cached
}

/** One guest at the table, a bust from the shoulders up, head in profile. */
function guest(x: number, y: number, s: number, faceLeft: boolean): Part[] {
  const t = `translate(${x} ${y}) scale(${faceLeft ? -s : s} ${s})`
  return [
    { d: 'M-16 44C-16 30 -12 22 0 20C12 22 16 30 16 44Z', t },
    { d: HEAD_MAN, t: `${t} translate(1 0) scale(0.62)` },
  ]
}

/** Duncan at the head of his table, old and crowned, as in Duncan arrives. */
const KING_HEAD = 'translate(431 146) scale(0.8)'
const KING: Part[] = [
  { d: 'M411 196C411 176 416 166 430 163C444 166 449 176 449 196Z' },
  { d: HEAD_OLD, t: KING_HEAD },
  { d: OLD_BEARD, t: KING_HEAD },
]

// ── Lady Macbeth: leaning in, pointing at him ────────────────────────────────
const LADY_HEAD = 'translate(10 -177) rotate(8) scale(0.95)'
const LADY: Part[] = [
  {
    d: 'M-8 -160C-16 -140 -16 -118 -14 -100C-21 -70 -32 -34 -42 -1L32 -1C26 -32 20 -68 15 -100C18 -120 21 -140 18 -158C10 -164 -1 -164 -8 -160Z',
  },
  { d: HEAD_WOMAN, t: LADY_HEAD },
  { d: VEIL, t: LADY_HEAD, sep: 1.2 },
  // the pointing arm and hand
  { d: 'M13 -150C20 -142 26 -138 34 -138L52 -140', w: 7.4, sep: 1.4 },
  { d: 'M50 -144C54 -145 57 -143 57 -140C56 -137 53 -136 50 -137Z' },
  { d: 'M55 -141.5L66 -143', w: 2.4 },
]
const LADY_CUTS =
  gouge(-12, -101, 15, -101, 1) +
  gouge(2, -96, -10, -8, 1, 1) +
  gouge(10, -94, 16, -8, 0.9, -0.6) +
  gouge(-6, -90, -28, -8, 0.8, 1)

// ── Macbeth: leaning away, a hand raised against her ─────────────────────────
// Drawn facing right and mirrored, so he faces her.
const MACBETH_HEAD = 'translate(2 -181) rotate(16) scale(0.95)'
const MACBETH: Part[] = [
  // the cloak, hanging behind
  { d: 'M-6 -166C-22 -146 -30 -104 -34 -46L-12 -44C-12 -86 -10 -126 -2 -156Z' },
  { d: 'M-5 -56L-6 -8', w: 10.5 },
  { d: 'M9 -56L14 -8', w: 10.5 },
  { d: 'M-13 -11L-2 -11L2 -4L2 0L-15 0Z' },
  { d: 'M8 -11L19 -11L27 -4L27 0L8 0Z' },
  {
    d: 'M-10 -164C-18 -140 -18 -112 -15 -92L-20 -52L24 -52L17 -92C16 -116 14 -142 10 -162C2 -168 -4 -168 -10 -164Z',
  },
  { d: HEAD_MACBETH, t: MACBETH_HEAD },
  // the raised hand, palm out: "We will proceed no further"
  { d: 'M8 -152C16 -146 24 -142 30 -144L40 -160', w: 8, sep: 1.4 },
  {
    d: 'M36 -158C35 -164 37 -171 40 -175L42 -174.5L42.5 -168L45 -176L47.5 -175.5L46.5 -167L49.5 -173L51.5 -172L48 -162C46 -158 40 -155 36 -158Z',
  },
]
const MACBETH_CUTS =
  gouge(-15, -95, 17, -95, 1.1) +
  gouge(0, -128, -4, -58, 1, 0.8) +
  gouge(8, -88, 14, -56, 0.9, -0.5) +
  gouge(-18, -130, -26, -50, 1, 1)

function MacbethWavers({ uid }: ArtProps) {
  const m = marks()
  const hall = `${uid}-hall`
  const guests: Part[] = [
    ...guest(282, 156, 0.95, false),
    ...guest(318, 158, 0.95, false),
    ...guest(356, 158, 0.95, false),
    ...guest(504, 158, 0.95, true),
    ...guest(542, 158, 0.95, true),
    ...guest(580, 156, 0.95, true),
  ]
  return (
    <>
      <defs>
        <clipPath id={hall}>
          <path d={ARCH} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 170], push: 1.03 })}>
        {/* the dark passage */}
        <path d={m.passage} fill={PAPER} />
        <rect x={0} y={300} width={W} height={H - 300} fill={INK} />
        {/* the light from the hall, spilling on to the flagstones */}
        <path d="M246 302H614L700 340H160Z" fill={PAPER} />
        <path d={m.passFloor} fill={INK} />

        {/* the arch, its stones cut in the light, and the hall beyond */}
        <path
          d="M232 302V150C232 70 320 28 430 28C540 28 628 70 628 150V302Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path
          d="M232 190H246M232 150H246M236 110L250 116M258 72L268 82M296 46L302 58M340 32L344 45M388 28L389 42M430 28V42M472 28L471 42M520 32L516 45M564 46L558 58M602 72L592 82M624 110L610 116M614 150H628M614 190H628M232 240H246M614 240H628"
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path d={ARCH} fill={PAPER} />
        <g clipPath={`url(#${hall})`}>
          <path d={m.hallWall} fill={INK} />
          {/* torches on the hall's far wall */}
          <g fill={INK}>
            <path d="M300 118h10l-2 12h-6Z" />
            <path d="M550 118h10l-2 12h-6Z" />
            <rect x={303} y={129} width={4} height={10} />
            <rect x={553} y={129} width={4} height={10} />
          </g>
          <g fill={RED}>
            <path
              className="lc-flicker"
              d="M305 119C300 114 301 107 305 97C309 107 310 114 305 119Z"
            />
            <path
              className="lc-flicker"
              style={timing({ dur: 0.8, delay: 0.5 })}
              d="M555 119C550 114 551 107 555 97C559 107 560 114 555 119Z"
            />
          </g>
          {/* the king at the head of the table, in his high chair */}
          {/* a cloth of estate hung behind his chair */}
          <path d="M404 196V106H456V196Z" fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
          <path
            d="M412 112V196M420 112V196M428 112V196M436 112V196M444 112V196M452 112V196"
            stroke={INK}
            strokeWidth={LINE.hairline}
          />
          <path d="M404 106H456V114H404Z" fill={INK} />
          <CutFigure parts={KING} halo={1.3}>
            <g transform={KING_HEAD}>
              <path d={OLD_STRANDS} fill="none" stroke={PAPER} strokeWidth={1.1} />
              <path d={OLD_HAIR} fill={PAPER} />
            </g>
          </CutFigure>
          <path d={CROWN} transform={KING_HEAD} fill={RED} />
          {/* the guests along the table */}
          <CutFigure parts={guests} halo={1.2} />
          {/* the table, laid with dishes, and its candles */}
          <path d="M240 196H620V206H240Z" fill={INK} />
          <path d="M240 206H620L614 240H246Z" fill={INK} />
          <path
            d={
              gouge(242, 208, 618, 208, 1) +
              [270, 330, 390, 470, 530, 590].map((x) => gouge(x, 212, x + 2, 238, 1, 0.6)).join('')
            }
            fill={PAPER}
          />
          <g fill={PAPER} stroke={INK} strokeWidth={1}>
            {[296, 338, 404, 460, 520, 566].map((x) => (
              <ellipse key={x} cx={x} cy={198} rx={9} ry={2.6} />
            ))}
          </g>
          <g fill={INK}>
            {[318, 380, 484, 546].map((x) => (
              <rect key={x} x={x - 1.6} y={180} width={3.2} height={17} />
            ))}
          </g>
          <g fill={RED}>
            {[318, 380, 484, 546].map((x, i) => (
              <path
                key={x}
                className="lc-flicker"
                style={timing({ dur: 0.7 + i * 0.05, delay: 0.2 + i * 0.1 })}
                d={`M${x} 180C${x - 3} 177 ${x - 2.5} 173 ${x} 168C${x + 2.5} 173 ${x + 3} 177 ${x} 180Z`}
              />
            ))}
          </g>
          <path d="M240 240H620V302H240Z" fill={PAPER} />
          <path d={m.hallFloor} fill={INK} />
        </g>

        {/* the two of them, black against the light */}
        <CutFigure
          parts={LADY}
          cuts={LADY_CUTS}
          halo={1.3}
          transform="translate(328 328) scale(1.22)"
        >
          <path d={EYE} transform={LADY_HEAD} fill={PAPER} />
        </CutFigure>
        <CutFigure
          parts={MACBETH}
          halo={1.3}
          cuts={MACBETH_CUTS}
          transform="translate(560 328) rotate(4) scale(-1.22 1.22)"
        >
          <path d={EYE} transform={MACBETH_HEAD} fill={PAPER} />
        </CutFigure>
      </g>
    </>
  )
}

export const macbethWavers: LinocutArt = { width: W, height: H, Draw: MacbethWavers }
