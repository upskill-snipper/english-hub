import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
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
import { EYE, HEAD_BEARD, HEAD_MACBETH, HEAD_MAN } from './inverness-people'

/**
 * Act 2, Scene 1: "The dagger", the eighth moment in the guide's timeline.
 * Every detail is from the scene:
 *
 * - "Inverness. Court of Macbeth's castle." "The moon is down." "There's
 *   husbandry in heaven; / Their candles are all out." So the courtyard is
 *   black, with no moon and no stars.
 * - "Enter Banquo and Fleance, bearing a torch before him"; "How goes the
 *   night, boy?"; "Exeunt Banquo and Fleance." Far off on the left the two of
 *   them go out through an arch, the boy a head shorter and carrying the torch.
 *   Stage directions are quoted from the site's own reader
 *   (src/app/revision/texts/macbeth/read/page.tsx).
 * - "Is this a dagger which I see before me, / The handle toward my hand?
 *   Come, let me clutch thee." The dagger hangs in the air, cut as the one
 *   light in the courtyard, its handle towards Macbeth, who reaches for it. His
 *   own dagger is still at his belt: "As this which now I draw".
 * - "Thou marshal'st me the way that I was going". Its point is towards the
 *   stair and the door of the king's chamber.
 * - "And, on thy blade and dudgeon, gouts of blood, / Which was not so
 *   before." The spot colour is the drops on the blade and the handle, and it
 *   arrives after the dagger does. It stands for blood; nothing is wounded.
 * - "Go bid thy mistress, when my drink is ready, / She strike upon the bell."
 *   "A bell rings." Last, rings of sound cut round a small bell by the stair.
 *
 * Nothing is taken from a film or stage production. Seeds: 801 (walls), 802
 * (the dagger's light), 803 (floor), 804 (the bell).
 */

const W = 860
const H = 340

/** The stair, climbing to the right: eleven treads, 17 across and 16 up. */
const STAIR = (() => {
  let d = 'M600 340V262'
  for (let i = 0; i < 11; i++) d += `H${617 + i * 17}V${246 - i * 16}`
  return d + 'H868V340Z'
})()

/** The vision: its centre, and its angle, pointing up the stair to the door. */
const DAGGER = { x: 486, y: 132, angle: -12 }

type Marks = {
  walls: string
  glow: string
  floor: string
  steps: string
  ring: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const near = (x: number, y: number) =>
    Math.pow(clamp(1 - Math.hypot((x - DAGGER.x) * 0.75, y - DAGGER.y) / 300), 1.4)
  // Stone walls, seen only where the vision lights them.
  const walls = gougeField(rng(801), { x0: 0, x1: W, y0: 4, y1: 258 }, (x, y) => near(x, y) * 0.8, {
    spacing: 8.5,
    len: [10, 28],
    gap: [3, 8],
    max: 2.8,
  })
  // The vision's own light: a burst of cuts, brightest at the blade.
  const r = rng(802)
  const glow = rays(r, DAGGER.x, DAGGER.y, { from: 20, to: 200, every: 3.6, width: 3.6 })

  // The courtyard floor: flagstones in rows that widen towards us, their
  // joints running back to the foot of the wall, lit below the vision.
  const f = rng(803)
  const lit = (x: number, y: number) =>
    Math.pow(clamp(1 - Math.hypot((x - DAGGER.x) * 0.7, (y - 290) * 1.6) / 220), 1.6) * 0.8
  let floor = ''
  for (let k = 0, y = 266; y < H + 4; k++, y += 6 + k * 2.4) {
    let x = between(f, -30, 0)
    while (x < W) {
      const len = between(f, 30, 70)
      const L = lit(x + len / 2, y)
      if (f() < 0.25 + L) floor += gouge(x, y, x + len, y + between(f, -0.5, 0.5), 0.4 + L * 3)
      x += len + between(f, 3, 8)
    }
  }
  for (let xb = -300; xb < 1200; xb += 46) {
    const xt = DAGGER.x + (xb - DAGGER.x) * 0.3
    const L = lit(xb * 0.5 + xt * 0.5, 300)
    if (L > 0.2) floor += wedge(xt, 262, xb, H + 6, 0.4, 0.4 + L * 2)
  }
  // The stair up to the king's door: the lit nosing of each tread.
  let steps = ''
  for (let i = 0; i < 11; i++) {
    const x = 604 + i * 17
    const y = 262 - i * 16
    steps += gouge(x + 4, y + 1.5, x + 70, y + 1.5, 2.2 - i * 0.1)
  }
  let ring = ''
  const b = rng(804)
  for (let rad = 16; rad < 42; rad += 8) {
    ring += arcDashes(b, 646, 74, rad, deg(145), deg(215), [6, 12], [3, 6])
    ring += arcDashes(b, 646, 74, rad, deg(-35), deg(35), [6, 12], [3, 6])
  }
  cached = { walls, glow, floor, steps, ring }
  return cached
}

/**
 * The vision, drawn along +x from the pommel at 0: the handle ("dudgeon"),
 * the guard, then the blade to its point at 104.
 */
const VISION = {
  grip: 'M4 -4.4C0 -4.4 -2.4 -2.4 -2.4 0C-2.4 2.4 0 4.4 4 4.4L8 3.6L30 3.6L30 -3.6L8 -3.6Z',
  guard: 'M30 -10L36 -10L36 10L30 10Z',
  blade: 'M36 -6.4L84 -4L102 0L84 4L36 6.4Z',
  fuller: 'M42 0L82 0',
  /** "gouts of blood", on the blade and on the dudgeon. */
  gouts: [
    'M51 -4.4C48.6 -2 49.2 1.8 52 2.2C54.8 2.4 56 -0.6 54.4 -3.2Z',
    'M65.4 0.4C63.4 2.6 64.2 5.4 66.6 5.4C68.8 5.2 69.4 2.4 67.6 0.4Z',
    'M78 -3.6C76.2 -1.6 77 1 79 1C80.8 0.8 81.2 -1.6 79.6 -3.4Z',
    'M13.4 -3C11.4 -0.8 12.2 2.4 14.6 2.4C16.8 2.2 17.2 -0.6 15.6 -2.8Z',
    'M22.6 -0.2C20.8 1.8 21.6 4 23.4 3.8C25.2 3.6 25.4 1.4 23.8 -0.2Z',
  ],
  /** Drips hanging from the blade's lower edge. */
  drips:
    'M57.6 5.2L58.6 11.6C58.2 13.4 55.8 13.4 55.4 11.6L56.4 5.4ZM72 4.4L72.8 9C72.4 10.6 70.4 10.6 70.1 9L70.9 4.6Z',
}

// ── Macbeth, reaching for it ─────────────────────────────────────────────────
const MACBETH_HEAD = 'translate(4 -181) rotate(-4) scale(0.95)'
const MACBETH: Part[] = [
  { d: 'M-6 -166C-24 -146 -34 -104 -40 -46L-16 -44C-14 -86 -12 -126 -2 -156Z' },
  // the back leg braced, the front leg stepping forward
  { d: 'M-7 -56L-14 -8', w: 10.5 },
  { d: 'M9 -56L22 -10', w: 10.5 },
  { d: 'M-21 -11L-9 -11L-5 -4L-5 0L-23 0Z' },
  { d: 'M16 -13L27 -14L36 -6L37 -1L18 -1Z' },
  {
    d: 'M-10 -164C-18 -140 -18 -112 -15 -92L-21 -52L25 -52L17 -92C16 -116 15 -142 11 -162C3 -168 -3 -168 -10 -164Z',
  },
  { d: HEAD_MACBETH, t: MACBETH_HEAD },
  // his own dagger, sheathed at his belt
  { d: 'M12 -96L-2 -76', w: 4.6, sep: 1.4 },
  { d: 'M12 -96L18 -104', w: 3.4, sep: 1.2 },
  { d: 'M8 -100L16 -92', w: 2.8, sep: 1.2 },
  // the reaching arm and open hand: "Come, let me clutch thee"
  { d: 'M9 -154C20 -150 32 -148 44 -150L58 -154', w: 8.4, sep: 1.4 },
  {
    d: 'M55 -159C59 -162 64 -162 70 -161L70.5 -158.5L64 -158L72 -156.5L72 -154L64 -154.2L70.5 -151.5L69.5 -149.5L62 -150.5C59 -149.5 56 -150.5 55 -152Z',
  },
]
const MACBETH_CUTS =
  gouge(-15, -95, 17, -95, 1.1) + gouge(0, -128, -4, -58, 1, 0.8) + gouge(-20, -130, -30, -50, 1, 1)

// ── Banquo and Fleance, leaving by the far arch ──────────────────────────────
const LEAVING: Part[] = [
  // Banquo, walking away to the left
  {
    d: 'M-6 -86C-10 -74 -10 -58 -8 -48L-12 -26L12 -26L9 -48C9 -60 8 -74 6 -85C2 -88 -2 -88 -6 -86Z',
  },
  { d: 'M-4 -28L-8 -3', w: 5.6 },
  { d: 'M5 -28L7 -3', w: 5.6 },
  { d: HEAD_BEARD, t: 'translate(0 -96) scale(-0.5 0.5)' },
  // Fleance, a head shorter, holding the torch before them
  {
    d: 'M-34 -66C-37 -56 -37 -44 -35 -36L-38 -20L-20 -20L-22 -36C-22 -46 -23 -56 -25 -65C-28 -68 -31 -68 -34 -66Z',
  },
  { d: 'M-32 -22L-34 -3', w: 4.8 },
  { d: 'M-24 -22L-22 -3', w: 4.8 },
  { d: HEAD_MAN, t: 'translate(-30 -74) scale(-0.44 0.44)' },
  { d: 'M-34 -60L-44 -70L-50 -86', w: 4.4 },
  { d: 'M-52 -104L-47 -66', w: 2.4 },
]

function TheDagger({ uid }: ArtProps) {
  const m = marks()
  const far = `${uid}-far`
  const face = `${uid}-face`
  const place = `translate(${DAGGER.x} ${DAGGER.y}) rotate(${DAGGER.angle}) scale(1.45) translate(-54 0)`
  return (
    <>
      <defs>
        <clipPath id={face}>
          <rect x={8} y={-208} width={30} height={60} />
        </clipPath>
        <clipPath id={far}>
          <path d="M44 300V214Q44 168 92 166Q140 168 140 214V300Z" />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [DAGGER.x, DAGGER.y], push: 1.035 })}>
        {/* the courtyard walls, black but where the vision lights them */}
        <path d={m.walls} fill={PAPER} />
        <path d={gouge(160, 261, 760, 261, 1.6)} fill={PAPER} />
        <path d={m.floor} fill={PAPER} />

        {/* the far arch, where Banquo and Fleance go out by torchlight */}
        <path
          d="M36 300V214Q36 160 92 158Q148 160 148 214V300Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d="M44 300V214Q44 168 92 166Q140 168 140 214V300Z" fill={PAPER} />
        <g clipPath={`url(#${far})`}>
          <path
            d={
              gouge(44, 292, 140, 292, 1.2) +
              gouge(50, 284, 134, 284, 0.8) +
              gouge(56, 277, 128, 277, 0.6)
            }
            fill={INK}
          />
          <CutFigure parts={LEAVING} halo={0} transform="translate(112 300)" />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.9, delay: 0.1 })}
            d="M60.5 198C57 195 57.5 190 60.5 183C63.5 190 64 195 60.5 198Z"
            fill={RED}
          />
        </g>

        {/* the stair to the king's chamber, and its door */}
        <path d={STAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.steps} fill={PAPER} />
        <path d="M768 94V36Q768 12 800 10Q832 12 832 36V94Z" fill={PAPER} />
        <path d="M774 94V38Q774 18 800 16Q826 18 826 38V94Z" fill={INK} />
        <path d="M787 20V94M800 16V94M813 20V94" stroke={PAPER} strokeWidth={LINE.hairline} />
        <circle cx={818} cy={60} r={3} fill="none" stroke={PAPER} strokeWidth={LINE.fine} />
        {/* the bell */}
        <g className="lc-fade-in" style={timing({ delay: 2.7, dur: 0.5 })}>
          <path
            d={m.ring}
            fill="none"
            stroke={PAPER}
            strokeWidth={LINE.bold}
            strokeLinecap="round"
          />
        </g>
        <path d="M646 6V64M636 58H656" stroke={PAPER} strokeWidth={LINE.fine} />
        <path d="M640 78C640 70 642 64 646 64C650 64 652 70 652 78L654 80H638Z" fill={PAPER} />
        <circle cx={646} cy={82} r={1.8} fill={PAPER} />

        {/* the vision and its light */}
        <g className="lc-fade-in" style={timing({ delay: 0.4, dur: 1.2 })}>
          <path d={m.glow} fill={PAPER} />
          <g transform={place}>
            <g fill={INK} stroke={INK} strokeWidth={7} strokeLinejoin="round">
              <path d={VISION.blade} />
              <path d={VISION.guard} />
              <path d={VISION.grip} />
            </g>
            <g fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round">
              <path d={VISION.blade} />
              <path d={VISION.guard} />
              <path d={VISION.grip} />
            </g>
            <path d={VISION.fuller} stroke={INK} strokeWidth={LINE.fine} />
            <path
              d="M10 -3.6L10 3.6M15 -3.6L15 3.6M20 -3.6L20 3.6M25 -3.6L25 3.6"
              stroke={INK}
              strokeWidth={LINE.hairline}
            />
          </g>
        </g>
        <g className="lc-fade-in" style={timing({ delay: 1.9, dur: 0.8 })}>
          <g transform={place} fill={RED}>
            {VISION.gouts.map((d) => (
              <path key={d} d={d} />
            ))}
            <path d={VISION.drips} />
          </g>
        </g>

        {/* Macbeth, reaching for it */}
        <CutFigure
          parts={MACBETH}
          cuts={MACBETH_CUTS}
          halo={1.35}
          transform="translate(300 326) scale(1.2)"
        >
          <path d={EYE} transform={MACBETH_HEAD} fill={PAPER} />
          {/* the vision's light on the front of his face */}
          <g clipPath={`url(#${face})`}>
            <path
              d={HEAD_MACBETH}
              transform={MACBETH_HEAD}
              fill="none"
              stroke={PAPER}
              strokeWidth={3.2}
            />
          </g>
        </CutFigure>
      </g>
    </>
  )
}

export const theDagger: LinocutArt = { width: W, height: H, Draw: TheDagger }
