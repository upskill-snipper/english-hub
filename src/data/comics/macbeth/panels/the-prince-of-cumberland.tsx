import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { BEARD_LINES, HAIR_CUTS } from './act1-people'
import { CutFigure, type Part } from './cut-figure'
import {
  CROWN,
  CROWN_CUTS,
  EYE,
  HEAD_BEARD,
  HEAD_MACBETH,
  HEAD_MAN,
  HEAD_OLD,
  OLD_BEARD,
  OLD_HAIR,
  OLD_STRANDS,
} from './inverness-people'

/**
 * Act 1, Scene 4: "The Prince of Cumberland", the fourth moment in the
 * guide's timeline. Every detail is from the scene:
 *
 * - "Forres. A Room in the Palace." Duncan receives Macbeth and Banquo at
 *   court, so a
 *   stone hall, the king enthroned on a dais under a cloth of state.
 * - "We will establish our estate upon / Our eldest, Malcolm; whom we name
 *   hereafter / The Prince of Cumberland". Malcolm kneels on the step below
 *   his father, and the old king (white-bearded and crowned in red, as the
 *   other Macbeth panels draw him) holds out his hand over him.
 * - "signs of nobleness, like stars, shall shine / On all deservers." Duncan's
 *   own image, so the cloth of state behind the throne is cut with stars.
 * - Macbeth's aside: "The Prince of Cumberland!—That is a step / On which I
 *   must fall down, or else o’erleap, / For in my way it lies. Stars, hide
 *   your fires! / Let not light see my black and deep desires." Macbeth is the big
 *   figure in the foreground, turned away from the throne towards us, so that
 *   the court behind him cannot see his face. The steps of the dais are
 *   Malcolm's "step", between Macbeth and the crown.
 * - Light comes in by the tall window behind Macbeth, so his head is black
 *   against it: the light is there, and it does not see his face. The red is
 *   the crown alone, the thing he has turned his back on and is thinking of.
 * - The throne is cut pale, so the old king sits black against it, his white
 *   beard edged in ink so it is not lost in the wood.
 * - Two thanes stand beyond Malcolm; the stage direction brings in Banquo,
 *   Lennox, Ross and Angus, and the panel does not say which.
 *
 * Macbeth wears the mail and cloak he wore on the heath, and the head the
 * other Macbeth panels give him (HEAD_MACBETH). The play describes no one's
 * looks here. Nothing is taken from a film or stage production. Seeds: 241
 * (wall), 242 (floor), 244 (stars).
 */

const W = 860
const H = 340
const FLOOR = 238

type Marks = {
  wall: string
  floor: string
  stars: string
  valance: string
}

/** The window behind Macbeth: tall, round-headed. */
const WINDOW = 'M598 212V84Q598 18 672 18Q746 18 746 84V212Z'

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The hall is lit by the window on the right; the far wall darkens away
  // from it, except where the shaft of light reaches the dais.
  const light = (x: number, y: number) => {
    const win = clamp(1 - Math.hypot((x - 672) * 0.8, (y - 110) * 1.1) / 300)
    return Math.max(win * 0.9, 0.06)
  }
  const wall = gougeField(rng(241), { x0: 0, x1: W, y0: 4, y1: FLOOR }, light, {
    spacing: 7.4,
    len: [24, 80],
    gap: [6, 20],
  })

  // Flagstones in perspective, the joints running to a point behind the dais.
  const r = rng(242)
  let floor = ''
  const V: [number, number] = [300, 120]
  for (let xt = -700; xt < 1500; xt += 64) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    floor += wedge(xt, FLOOR, xb, H, 0.8, 3)
  }
  for (const [y, w] of [
    [248, 1],
    [262, 1.6],
    [282, 2.2],
    [310, 3],
  ])
    floor += wedge(0, y, W, y + between(r, -1, 1), w, w)

  // "signs of nobleness, like stars": stars cut in the cloth of state.
  const rs = rng(244)
  let stars = ''
  for (let y = 58; y < 222; y += 26)
    for (let x = 96 + ((y / 26) % 2) * 14; x < 270; x += 30) {
      const cx = x + between(rs, -3, 3)
      const cy = y + between(rs, -3, 3)
      const R = between(rs, 4.2, 5.4)
      let d = ''
      for (let k = 0; k < 10; k++) {
        const a = -Math.PI / 2 + (k * Math.PI) / 5
        const rr = k % 2 ? R * 0.42 : R
        d += `${k ? 'L' : 'M'}${n(cx + Math.cos(a) * rr)} ${n(cy + Math.sin(a) * rr)}`
      }
      stars += d + 'Z'
    }

  // The scalloped valance along the top of the cloth.
  let valance = 'M84 14H282V36'
  for (let x = 282; x > 84; x -= 18) valance += `Q${x - 9} 50 ${x - 18} 36`
  valance += 'Z'

  cached = { wall, floor, stars, valance }
  return cached
}

// ── Duncan, enthroned, his hand held out over his son ───────────────────────
// Seated, facing right, his feet on y = 0.
const DUNCAN_HEAD = 'translate(4 -162) scale(0.92)'
const DUNCAN: Part[] = [
  { d: 'M-10 -144C-24 -122 -30 -84 -32 -40L-14 -40C-14 -80 -12 -118 -6 -138Z' },
  {
    d: 'M-12 -142C-18 -122 -18 -102 -14 -82L20 -80C22 -102 20 -124 12 -142C4 -148 -6 -148 -12 -142Z',
  },
  { d: 'M-16 -90L36 -86L40 -64L-14 -62Z' },
  { d: 'M18 -72L42 -72L46 -6L16 -6Z' },
  { d: 'M14 -8L46 -8L54 0L14 0Z' },
  { d: HEAD_OLD, t: DUNCAN_HEAD },
  { d: 'M8 -134C22 -124 40 -112 58 -106', w: 8.5, sep: 1.4 },
  { d: 'M56 -110C62 -112 70 -110 73 -106C70 -102 63 -100 57 -102Z', sep: 1 },
]
const DUNCAN_CUTS =
  gouge(-12, -86, 36, -82, 1) + gouge(24, -60, 28, -10, 1, -0.6) + gouge(34, -60, 40, -10, 0.9)

// ── Malcolm, kneeling on the step, head bowed ───────────────────────────────
// Facing right in his frame and mirrored to face his father.
const MALCOLM_HEAD = 'translate(8 -146) rotate(18) scale(0.9)'
const MALCOLM: Part[] = [
  { d: 'M-10 -130C-24 -110 -34 -80 -40 -44L-44 -8L-20 -8L-14 -110Z' },
  { d: 'M-2 -58L-10 -8L-40 -6', w: 10 },
  { d: 'M-44 -10L-34 -10L-34 0L-50 0Z' },
  { d: 'M2 -60L30 -58', w: 11 },
  { d: 'M30 -58L32 -8', w: 10 },
  { d: 'M26 -10L38 -10L46 -3L46 0L26 0Z' },
  {
    d: 'M-14 -130C-20 -108 -20 -84 -16 -60L22 -58C24 -84 22 -108 14 -130C6 -136 -6 -136 -14 -130Z',
  },
  { d: HEAD_MAN, t: MALCOLM_HEAD },
  // hands folded on his raised knee
  { d: 'M8 -122C16 -104 22 -86 26 -70', w: 8, sep: 1.4 },
  { d: 'M20 -74C24 -78 31 -76 31 -70C31 -64 24 -63 21 -66Z', sep: 1 },
]
const MALCOLM_CUTS = gouge(-15, -84, 21, -84, 1.1) + gouge(-2, -124, -8, -64, 0.9, 0.8)

// ── Two thanes of the court, standing beyond, watching the king ─────────────
const THANE: Part[] = [
  { d: 'M-9 -164C-26 -140 -32 -100 -36 -44L-14 -42C-14 -84 -12 -122 -6 -150Z' },
  { d: 'M-7 -56L-9 -8', w: 10 },
  { d: 'M7 -56L10 -8', w: 10 },
  { d: 'M-16 -11L-4 -11L-1 -4L-1 0L-18 0Z' },
  { d: 'M5 -11L16 -11L23 -4L23 0L5 0Z' },
  {
    d: 'M-12 -162C-18 -138 -18 -112 -16 -92L-22 -52L22 -52L16 -92C16 -116 16 -142 13 -161C5 -166 -5 -166 -12 -162Z',
  },
  { d: HEAD_BEARD, t: 'translate(3 -181) scale(0.92)' },
]

// ── Macbeth, in front, turned away from the court: the aside ────────────────
// Facing right, away from the throne; feet below the bottom of the panel.
const MACBETH_HEAD = 'translate(4 -181) rotate(4) scale(0.95)'
const MACBETH: Part[] = [
  {
    d: 'M-8 -166C-26 -146 -36 -104 -40 -46L-16 -44C-15 -86 -13 -126 -4 -156Z',
  },
  { d: 'M-7 -56L-9 -8', w: 10.5 },
  { d: 'M8 -56L11 -8', w: 10.5 },
  {
    d: 'M-12 -164C-20 -140 -20 -112 -17 -92L-24 -50L24 -50L17 -92C16 -116 15 -142 11 -162C3 -168 -4 -168 -12 -164Z',
  },
  { d: HEAD_MACBETH, t: MACBETH_HEAD },
  // the sword at his hip
  { d: 'M4 -96L-40 -62', w: 4.6, sep: 1.4 },
  { d: 'M4 -96L12 -103', w: 3.6, sep: 1.2 },
  { d: 'M0 -101L8 -91', w: 3, sep: 1.2 },
  // his near hand clenched at his chest
  { d: 'M9 -152C16 -138 20 -126 18 -116', w: 8.5, sep: 1.4 },
  { d: 'M11 -121C14 -126 23 -125 24 -118C24 -112 16 -109 12 -113Z', sep: 1 },
]
function mail(x0: number, x1: number, y0: number, y1: number) {
  let d = ''
  let row = 0
  for (let y = y0; y < y1; y += 5.4, row++)
    for (let x = x0 + (row % 2) * 2.6; x < x1; x += 5.2) d += `M${n(x - 2)} ${n(y)}q2 2.4 4 0`
  return d
}
const MACBETH_MAIL = mail(-12, 12, -148, -104) + mail(-18, 18, -88, -56)
const MACBETH_CUTS = gouge(-17, -95, 17, -95, 1.2) + gouge(-20, -132, -32, -52, 1, 1)

function PrinceOfCumberland(_: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [320, 170], push: 1.03 })}>
      {/* the hall wall, lit from the window */}
      <path d={m.wall} fill={PAPER} />

      {/* the window behind Macbeth */}
      <path d={WINDOW} fill={INK} stroke={PAPER} strokeWidth={3} />
      <g className="lc-fade-in" style={timing({ delay: 0.3, dur: 1.2 })}>
        <path d="M607 206V86Q607 27 672 27Q737 27 737 86V206Z" fill={PAPER} />
        <path d="M672 27V206M607 118H737" stroke={INK} strokeWidth={3.4} />
      </g>
      <path d="M588 212H756V222H588Z" fill={PAPER} />

      {/* the cloth of state, cut with stars, and its valance */}
      <path d="M86 36H280V232H86Z" fill={INK} stroke={PAPER} strokeWidth={2} />
      <path d={m.stars} fill={PAPER} />
      <path d={m.valance} fill={INK} stroke={PAPER} strokeWidth={1.6} />
      <path d="M92 44H274" stroke={PAPER} strokeWidth={LINE.fine} />

      {/* the floor */}
      <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
      <path d={m.floor} fill={INK} />

      {/* the dais: Malcolm's "step" */}
      <path d="M40 216H356V232H40Z" fill={PAPER} stroke={INK} strokeWidth={2} />
      <path d="M40 232H356V240H40Z" fill={INK} />
      <path d="M26 240H372V256H26Z" fill={PAPER} stroke={INK} strokeWidth={2} />
      <path d="M26 256H372V264H26Z" fill={INK} />
      <path d="M12 264H388V280H12Z" fill={PAPER} stroke={INK} strokeWidth={2} />
      <path d="M12 280H388V288H12Z" fill={INK} />

      {/* the throne: pale carved wood, so the king sits black against it */}
      <path
        d="M116 216V58Q116 36 138 32L168 22L198 32Q220 36 220 58V216Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={2.4}
        strokeLinejoin="round"
      />
      <path
        d="M126 210V62Q126 44 144 40L168 32L192 40Q210 44 210 62V210Z"
        fill="none"
        stroke={INK}
        strokeWidth={1.2}
      />
      <circle cx={168} cy={18} r={5} fill={PAPER} stroke={INK} strokeWidth={2} />
      <path d={gouge(134, 70, 134, 200, 1) + gouge(202, 70, 202, 200, 1)} fill={INK} />

      {/* Duncan, Malcolm, and two thanes watching */}
      <CutFigure parts={DUNCAN} cuts={DUNCAN_CUTS} transform="translate(166 216) scale(0.95)">
        <g transform={DUNCAN_HEAD}>
          <path d={EYE} fill={PAPER} />
          {/* edged in ink here, or the white beard is lost against the throne */}
          <path d={OLD_HAIR} fill={PAPER} stroke={INK} strokeWidth={0.9} />
          <path d={OLD_BEARD} fill={PAPER} stroke={INK} strokeWidth={0.9} />
          <path d={OLD_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
          <path d={CROWN} fill={RED} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
          <path d={CROWN_CUTS} fill={INK} />
        </g>
      </CutFigure>
      <CutFigure
        parts={MALCOLM}
        cuts={MALCOLM_CUTS}
        transform="translate(286 240) scale(-0.95 0.95)"
      >
        <path d={EYE} transform={MALCOLM_HEAD} fill={PAPER} />
        <path d={HAIR_CUTS} transform={MALCOLM_HEAD} fill={PAPER} />
      </CutFigure>
      <CutFigure parts={THANE} transform="translate(420 246) scale(-0.8 0.8)">
        <path d={EYE} transform="translate(3 -181) scale(0.92)" fill={PAPER} />
      </CutFigure>
      <CutFigure parts={THANE} transform="translate(474 250) scale(-0.8 0.8)">
        <path d={EYE} transform="translate(3 -181) scale(0.92)" fill={PAPER} />
      </CutFigure>

      {/* Macbeth, turned away: "Let not light see my black and deep desires" */}
      <CutFigure parts={MACBETH} cuts={MACBETH_CUTS} transform="translate(666 452) scale(1.9)">
        <path d={MACBETH_MAIL} fill="none" stroke={PAPER} strokeWidth={0.7} />
        <g transform={MACBETH_HEAD}>
          <path d={EYE} fill={PAPER} transform="translate(0.5 0.4) scale(0.9)" />
          <path d={BEARD_LINES} fill="none" stroke={PAPER} strokeWidth={0.8} />
        </g>
      </CutFigure>
    </g>
  )
}

export const thePrinceOfCumberland: LinocutArt = {
  width: W,
  height: H,
  Draw: PrinceOfCumberland,
}
