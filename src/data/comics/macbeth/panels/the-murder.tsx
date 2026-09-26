import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CutFigure, type Part } from './cut-figure'
import { EYE, HEAD_MACBETH, HEAD_WOMAN, VEIL } from './inverness-people'

/**
 * Act 2, Scene 2: "The murder", the ninth moment in the guide's timeline.
 * The killing happens off stage, and so it does here: the panel shows what the
 * scene shows, the two of them afterwards. Every detail is from the scene:
 *
 * - "The same." The courtyard of The dagger, the same night, with the same
 *   stair to the king's chamber. "The doors are open", so the door at the top
 *   stands open on to black. Nothing inside it is drawn.
 * - "It was the owl that shriek’d, the fatal bellman". An owl sits on a
 *   ledge by the king's door.
 * - The panel is the moment of its quotation, near the end of the scene.
 *   "Give me the daggers": Lady Macbeth has taken them back up to the
 *   chamber and returned, so neither of them holds a dagger now. "My hands
 *   are of your color, but I shame / To wear a heart so white."
 * - "I have done the deed." "As I descended?" Macbeth stands at the foot of
 *   the stair. "This is a sorry sight", "these hangman's hands", "Will all
 *   great Neptune's ocean wash this blood / Clean from my hand?": he stares
 *   down at his open hands, held up before him.
 * - "I hear knocking / At the south entry:—retire we to our chamber. / A
 *   little water clears us of this deed." White knocks break out round the
 *   gate on the left, one after another, and she reaches out to lead him
 *   away.
 * - The spot colour is only the blood, as a symbol: on his hands and on
 *   hers. Nothing is wounded and nobody is shown hurt. So the torch on the
 *   wall burns white here and in The discovery, to keep the red for the hands.
 *
 * REVIEWED 26 September 2026. The first version put the two red daggers in
 * Macbeth's hands with her reaching for them ("Give me the daggers"), under a
 * quotation she speaks only after she has taken them away, and with the
 * knocking that begins only once she has gone. The daggers were taken out
 * and her hand printed red, so the picture, the knocking and the words are
 * one moment.
 *
 * Nothing is taken from a film or stage production. Seeds: 901 (walls), 902
 * (torchlight), 903 (floor), 904 (knocking).
 */

const W = 860
const H = 340
const TORCH = { x: 446, y: 92 }

type Marks = { walls: string; glow: string; floor: string; steps: string; knocks: string[] }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const near = (x: number, y: number) =>
    Math.pow(clamp(1 - Math.hypot((x - TORCH.x) * 0.8, y - TORCH.y) / 330), 1.3)
  const walls = gougeField(
    rng(901),
    { x0: 0, x1: W, y0: 4, y1: 258 },
    (x, y) => near(x, y) * 0.75,
    {
      spacing: 8.5,
      len: [10, 28],
      gap: [3, 8],
      max: 2.8,
    },
  )
  const glow = rays(rng(902), TORCH.x, TORCH.y, { from: 16, to: 170, every: 4.4, width: 3.2 })
  // The flagstones: paper where the torch reaches, ink joints closing in
  // towards the corners, as the reference floor darkens away from its window.
  const f = rng(903)
  const dark = (x: number, y: number) =>
    clamp(Math.hypot((x - TORCH.x) * 0.9, (y - 280) * 2) / 520 + 0.04)
  let floor = gougeField(f, { x0: 0, x1: W, y0: 266, y1: H + 4 }, dark, {
    spacing: 7,
    len: [30, 70],
    gap: [2, 5],
    max: 6,
  })
  for (let xb = -300; xb < 1200; xb += 48) {
    const xt = TORCH.x + (xb - TORCH.x) * 0.3
    floor += wedge(xt, 262, xb, H + 6, 0.5, 1 + dark(xb, H) * 4)
  }
  let steps = ''
  for (let i = 0; i < 11; i++) {
    const x = 604 + i * 17
    const y = 262 - i * 16
    steps += gouge(x + 4, y + 1.5, x + 70, y + 1.5, 2.2 - i * 0.1)
  }
  // Three knocks at the gate, each a burst of short cuts round the door.
  const k = rng(904)
  const knocks = [0, 1, 2].map((i) => {
    const cx = 74
    const cy = 190 + i * 38
    let d = ''
    for (let a = -60; a <= 60; a += 30) {
      const ang = deg(a + between(k, -6, 6))
      const r0 = 60 + between(k, 0, 5)
      d += wedge(
        cx + Math.cos(ang) * r0,
        cy + Math.sin(ang) * r0 * 0.8,
        cx + Math.cos(ang) * (r0 + 24),
        cy + Math.sin(ang) * (r0 + 24) * 0.8,
        4,
        0.6,
      )
    }
    return d
  })
  cached = { walls, glow, floor, steps, knocks }
  return cached
}

/** The stair, as in The dagger: eleven treads climbing to the right. */
const STAIR = (() => {
  let d = 'M600 340V262'
  for (let i = 0; i < 11; i++) d += `H${617 + i * 17}V${246 - i * 16}`
  return d + 'H868V340Z'
})()

/** The owl, "the fatal bellman", sitting on its ledge at (0, 0). */
const OWL = {
  body: 'M0 -36C-7 -36 -12 -31 -12 -23L-13 -10C-13 -2 -8 2 0 2C8 2 13 -2 13 -10L12 -23C12 -31 7 -36 0 -36Z',
  ears: 'M-11 -30L-14 -42L-5 -34ZM11 -30L14 -42L5 -34Z',
  breast: 'M-5 -8L-2 -5L1 -8M1 -12L4 -9L7 -12M-7 -14L-4 -11L-1 -14M-3 -2L0 1L3 -2',
}

// ── Lady Macbeth, back from the chamber: "Retire we to our chamber" ─────────
const LADY_HEAD = 'translate(10 -177) rotate(6) scale(0.95)'
const LADY: Part[] = [
  {
    d: 'M-8 -160C-16 -140 -16 -118 -14 -100C-21 -70 -32 -34 -42 -1L32 -1C26 -32 20 -68 15 -100C18 -120 21 -140 18 -158C10 -164 -1 -164 -8 -160Z',
  },
  { d: HEAD_WOMAN, t: LADY_HEAD },
  { d: VEIL, t: LADY_HEAD, sep: 1.2 },
  // the reaching arm; the hand at its end is drawn red, in LADY_HAND
  { d: 'M13 -150C22 -142 30 -138 40 -138L56 -142', w: 7.4, sep: 1.4 },
]
/** Her open hand, turned up, red as his are: "My hands are of your color". */
const LADY_HAND =
  'M53 -146C56 -148 62 -148 68 -147L69 -144.5L62 -144L69 -142L68 -139.5L60 -140C57 -139 54 -139.5 53 -141Z'
const LADY_CUTS =
  gouge(-12, -101, 15, -101, 1) +
  gouge(2, -96, -10, -8, 1, 1) +
  gouge(10, -94, 16, -8, 0.9, -0.6) +
  gouge(-6, -90, -28, -8, 0.8, 1)

// ── Macbeth: staring down at his own hands ──────────────────────────────────
// Drawn facing right and mirrored, so he faces her.
const MACBETH_HEAD = 'translate(6 -179) rotate(26) scale(0.95)'
const MACBETH: Part[] = [
  { d: 'M-6 -166C-22 -146 -30 -104 -34 -46L-12 -44C-12 -86 -10 -126 -2 -156Z' },
  { d: 'M-5 -56L-6 -8', w: 10.5 },
  { d: 'M9 -56L14 -8', w: 10.5 },
  { d: 'M-13 -11L-2 -11L2 -4L2 0L-15 0Z' },
  { d: 'M8 -11L19 -11L27 -4L27 0L8 0Z' },
  {
    d: 'M-10 -164C-18 -140 -18 -112 -15 -92L-20 -52L24 -52L17 -92C16 -116 14 -142 10 -162C2 -168 -4 -168 -10 -164Z',
  },
  { d: HEAD_MACBETH, t: MACBETH_HEAD },
  // both forearms raised before him
  { d: 'M3 -150C4 -134 6 -122 12 -116L30 -118', w: 7.8, sep: 1.4 },
  { d: 'M10 -152C14 -136 18 -126 26 -124L44 -130', w: 8.2, sep: 1.4 },
]
const MACBETH_CUTS =
  gouge(-15, -95, 17, -95, 1.1) + gouge(0, -110, -4, -58, 1, 0.8) + gouge(-18, -130, -26, -50, 1, 1)

/**
 * His two hands, open and turned up before him, in his own frame: "these
 * hangman's hands". Red, as a symbol of the blood, and edged in paper so they
 * stand clear of his coat. Nothing is in them.
 */
const HANDS = [
  'M27 -121C28 -126 34 -128 39 -126L47 -127.5L47.5 -125L40.5 -123.6L47.8 -122.8L47.6 -120.2L40 -120.4L46.4 -118.2L45.6 -115.8L38 -117C35 -114 29 -114 27 -117Z',
  'M42 -133C43 -138 49 -140 54 -138L62 -139.5L62.5 -137L55.5 -135.6L62.8 -134.8L62.6 -132.2L55 -132.4L61.4 -130.2L60.6 -127.8L53 -129C50 -126 44 -126 42 -129Z',
]
/** The thumbs, curled up over each palm. */
const THUMBS = [
  'M37 -126.5C39 -130 42 -131 44 -129.5L40.5 -125Z',
  'M52 -138.5C54 -142 57 -143 59 -141.5L55.5 -137Z',
]

function TheMurder({ uid }: ArtProps) {
  const m = marks()
  const gate = `${uid}-gate`
  return (
    <>
      <defs>
        <clipPath id={gate}>
          <path d="M30 300V196Q30 150 74 148Q118 150 118 196V300Z" />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [470, 170], push: 1.03 })}>
        <path d={m.walls} fill={PAPER} />
        <path d={gouge(150, 261, 760, 261, 1.6)} fill={PAPER} />
        <rect x={0} y={262} width={W} height={H - 262} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the torch on the wall, burning white */}
        <path d={m.glow} fill={PAPER} />
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.fine}>
          <path d={`M${TORCH.x - 7} ${TORCH.y + 4}h14l-3 13h-8Z`} />
          <rect x={TORCH.x - 2} y={TORCH.y + 17} width={4} height={16} />
        </g>
        <path
          className="lc-flicker"
          d={`M${TORCH.x} ${TORCH.y + 5}C${TORCH.x - 7} ${TORCH.y} ${TORCH.x - 6} ${TORCH.y - 9} ${TORCH.x} ${TORCH.y - 22}C${TORCH.x + 6} ${TORCH.y - 9} ${TORCH.x + 7} ${TORCH.y} ${TORCH.x} ${TORCH.y + 5}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />

        {/* the gate at the south entry, and the knocking */}
        <path d="M22 300V196Q22 140 74 138Q126 140 126 196V300Z" fill={PAPER} />
        <path d="M30 300V196Q30 150 74 148Q118 150 118 196V300Z" fill={INK} />
        <g clipPath={`url(#${gate})`}>
          <path
            d="M52 146V300M74 146V300M96 146V300M30 200H118M30 260H118"
            stroke={PAPER}
            strokeWidth={LINE.fine}
          />
        </g>
        <circle cx={100} cy={232} r={4} fill="none" stroke={PAPER} strokeWidth={LINE.carve} />
        {m.knocks.map((d, i) => (
          <path
            key={i}
            d={d}
            fill={PAPER}
            className="lc-pop"
            style={timing({ delay: 1.5 + i * 0.6 })}
          />
        ))}

        {/* the owl on its ledge */}
        <rect x={676} y={70} width={48} height={7} fill={PAPER} />
        <g transform="translate(700 70)">
          <path d={OWL.body} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path d={OWL.ears} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
          <circle cx={-5.2} cy={-24} r={4.2} fill={PAPER} />
          <circle cx={5.2} cy={-24} r={4.2} fill={PAPER} />
          <circle cx={-5.2} cy={-24} r={1.7} fill={INK} />
          <circle cx={5.2} cy={-24} r={1.7} fill={INK} />
          <path d="M-1.6 -20L1.6 -20L0 -15Z" fill={PAPER} />
          <path d={OWL.breast} fill="none" stroke={PAPER} strokeWidth={LINE.hairline} />
        </g>

        {/* the stair he came down, and the king's door standing open on black */}
        <path d={STAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.steps} fill={PAPER} />
        <path d="M768 94V36Q768 12 800 10Q832 12 832 36V94Z" fill={PAPER} />
        <path d="M774 94V38Q774 18 800 16Q826 18 826 38V94Z" fill={INK} />
        <path d="M774 94V38L760 30V100Z" fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d="M765 36V96" stroke={PAPER} strokeWidth={LINE.hairline} />

        <CutFigure
          parts={LADY}
          cuts={LADY_CUTS}
          halo={1.35}
          transform="translate(336 326) scale(1.2)"
        >
          <path d={EYE} transform={LADY_HEAD} fill={PAPER} />
          <path d={LADY_HAND} fill={PAPER} stroke={PAPER} strokeWidth={2.8} />
          <path d={LADY_HAND} fill={RED} />
        </CutFigure>
        <CutFigure
          parts={MACBETH}
          halo={1.35}
          cuts={MACBETH_CUTS}
          transform="translate(552 326) scale(-1.2 1.2)"
        >
          <path d={EYE} transform={MACBETH_HEAD} fill={PAPER} />
          {/* his open hands, red */}
          {HANDS.map((d, i) => (
            <g key={d}>
              <path d={d} fill={PAPER} stroke={PAPER} strokeWidth={2.8} strokeLinejoin="round" />
              <path d={d} fill={RED} />
              <path d={THUMBS[i]} fill={RED} stroke={PAPER} strokeWidth={1} />
            </g>
          ))}
        </CutFigure>
      </g>
    </>
  )
}

export const theMurder: LinocutArt = { width: W, height: H, Draw: TheMurder }
