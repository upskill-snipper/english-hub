import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  n,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  EppieGrownHead,
  Figure,
  HEAD_EPPIE_GROWN,
  HEAD_SILAS,
  OPEN_HAND,
  SHIRT_COLLAR,
  SilasFace,
  gown,
  handAt,
  headAt,
  line,
  man,
  type Hand,
  type P,
  type Part,
} from './people'

/**
 * Chapter 16: "Sixteen years later", the thirteenth moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/silas-marner.ts):
 *
 * - "It was a bright autumn Sunday, sixteen years after Silas Marner had found
 *   his new treasure on the hearth"; "this afternoon, when Eppie came out with
 *   Silas into the sunshine". So it is a bright afternoon at the Stone-pits,
 *   and the sun, the one thing printed in the spot colour, stands over them.
 * - "She skipped forward to the pit, meaning to lift one of the stones and
 *   exhibit her strength, but she started back in surprise. 'Oh, father, just
 *   come and look here,' she exclaimed—'come and see how the water's gone down
 *   since yesterday.'" "'Well, to be sure,' said Silas, coming to her side." So
 *   Eppie stands at the edge of the old quarry with her hand out to the water,
 *   and Silas comes up beside her; "See here, round the big pit, what a many
 *   stones!", so loose stones lie along its rim. The pit is "the deserted
 *   quarry" (Chapter 4), so its far side is broken ledges of stone. The water
 *   has dropped below the line where it stood, leaving a band of wet, dark
 *   stone: the draining that will give up the pit's secret in Chapter 18.
 *   Nothing is in the water but its ripples. Its colour ("the red, muddy
 *   water", Chapter 4) is left to the words: red water in that pit would read
 *   as blood.
 * - Silas: "The weaver's bent shoulders and white hair give him almost the
 *   look of advanced age"; "His large brown eyes seem to have gathered a
 *   longer vision ... a less vague, a more answering gaze" (SilasFace, white).
 *   He leans to look, his hands behind his back (see S_ARM for why). His pipe
 *   ("he had his pipe in his hand") was cut and taken out again: at panel size
 *   a long pale stem in a fist, pointing at her back, read as a knife.
 * - Eppie: "a blonde dimpled girl of eighteen"; "the rippling radiance of her
 *   hair and the whiteness of her rounded chin and throat set off by the
 *   dark-blue cotton gown" (EppieGrownHead; the gown is printed dark, its blue
 *   left to the words).
 * - The cottage: a stone cottage that "had no thatch" (Chapter 4), so its roof
 *   is stone slates; "Mr. Cass's been so good to us, and built us up the new
 *   end o' the cottage", so it has a newer end, its stones coursed more
 *   evenly. And "The furze bush was there still": the bush near the door.
 * - "let us go and sit down on the bank against the stile there": the stile
 *   stands in the hedge beyond the pit, an ash over it ("An ash in the hedgerow
 *   behind made a fretted screen from the sun").
 *
 * Seeds: 1601 (the sky), 1602 (the ground), 1603 (the quarry), 1604 (the
 * hedge and the ash), 1605 (the cottage walls).
 */

const W = 860
const H = 340
/** The far edge of the ground: the foot of the hedge. */
const HORIZON = 208
/** Where Silas and Eppie stand. */
const STAND = 298
const SUN: P = [176, 66]

/** The quarry's outline: its far rim, its right-hand edge, and the frame. */
const PIT =
  'M-4 238C60 232 140 230 220 233C300 236 380 230 424 236C432 252 426 280 412 304C402 320 396 332 392 344H-4Z'
/** The lip of the pit, where the turf ends. */
const RIM = 'M-4 238C60 232 140 230 220 233C300 236 380 230 424 236'
/** The line the water stood at yesterday, and the water as it is now. */
const HIGH_WATER = 'M-4 280C80 276 200 276 300 280C350 282 384 280 406 284'
const WATER = 'M-4 308C80 304 200 304 300 308C336 310 372 308 398 312L392 344H-4Z'
/** Loose stones along the rim. */
const STONES: [number, number, number, number][] = [
  [42, 236, 9, 5],
  [118, 232, 12, 6],
  [196, 234, 8, 4.5],
  [282, 236, 11, 5.5],
  [362, 233, 9, 5],
  [436, 250, 10, 5.5],
  [444, 274, 8, 4.5],
  [470, 300, 11, 5],
]

type Marks = {
  sky: string
  rays: string
  ground: string
  ledges: string
  turf: string
  wet: string
  ripples: string
  hedgeCuts: string
  crowns: string
  crownCuts: string
  walls: string
  slates: string
  furze: string
}

/** The ash over the stile: round crowns [cx, cy, r]. */
const ASH: [number, number, number][] = [
  [318, 120, 30],
  [358, 104, 34],
  [396, 126, 26],
  [340, 150, 26],
]

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = gougeField(
    rng(1601),
    { x0: 0, x1: W, y0: 8, y1: 160 },
    (x, y) =>
      clamp(0.45 - (y - 8) / 300 - Math.max(0, 1 - Math.hypot(x - SUN[0], y - SUN[1]) / 120) * 0.5),
    { spacing: 9, len: [20, 70], gap: [20, 60], max: 1.6 },
  )
  // The sun's rays: ink spokes on the paper sky.
  let rays = ''
  for (let a = 0; a < 360; a += 15) {
    const t = deg(a + 4)
    const r0 = 30
    const r1 = a % 30 === 0 ? 52 : 44
    rays += wedge(
      SUN[0] + Math.cos(t) * r0,
      SUN[1] + Math.sin(t) * r0,
      SUN[0] + Math.cos(t) * r1,
      SUN[1] + Math.sin(t) * r1,
      1.8,
      0.6,
    )
  }
  // The ground: grass in short ink strokes, closer and larger towards the eye.
  const g = rng(1602)
  let ground = ''
  for (let k = 0; k < 150; k++) {
    const y = between(g, HORIZON + 6, H - 4)
    const x = between(g, 400, W)
    const s = 0.6 + (y - HORIZON) / 120
    ground += `M${n(x)} ${n(y)}l${n(between(g, -1.5, 1.5) * s)} ${n(-between(g, 2.5, 5) * s)}`
  }
  // The quarry's far side, in the sun: broken ledges of the old workings,
  // each a stepped line cut in ink on the lit face, with cracks below.
  const q = rng(1603)
  let ledges = ''
  for (let row = 0; row < 4; row++) {
    let x = -6
    let y = 246 + row * 9 + between(q, -1, 1)
    while (x < 418) {
      const len = between(q, 28, 76)
      const step = between(q, -2.4, 2.4)
      ledges += wedge(x, y, x + len, y + step, 2.4 - row * 0.3, 1)
      if (q() < 0.55) {
        const cx = x + len * between(q, 0.3, 0.7)
        ledges += wedge(cx, y, cx + between(q, -3, 3), y + between(q, 5, 8), 1.6, 0.3)
      }
      x += len + between(q, 2, 7)
      y += step * 0.6
    }
  }
  // The turf at the lip of the pit.
  let turf = ''
  for (let x = 0; x < 420; x += between(q, 4, 9)) {
    const y = 236 - Math.sin(x / 70) * 2.4
    turf += `M${n(x)} ${n(y)}l${n(between(q, -1.5, 1.5))} ${n(-between(q, 3, 6))}`
  }
  // Below the line the water stood at, the stone is wet and dark, with a
  // glint cut here and there.
  let wet = ''
  for (let y = 289; y < 304; y += 5) {
    let x = between(q, -10, 4)
    while (x < 396 - (y - 280) * 0.3) {
      const len = between(q, 6, 22)
      if (q() < 0.55) wet += gouge(x, y, x + len, y + between(q, -0.5, 0.5), 0.55)
      x += len + between(q, 8, 22)
    }
  }
  // The water reflects the bright sky: paper, ruled with ink ripples.
  let ripples = ''
  for (const [y, x0, x1] of [
    [315, 10, 120],
    [316, 170, 300],
    [323, 60, 230],
    [324, 270, 380],
    [331, 0, 90],
    [332, 140, 340],
    [338, 40, 200],
  ])
    ripples += gouge(x0, y, x1, y + 0.6, 1.1)
  // The hedge along the horizon: leaves cut in short paper strokes.
  const h = rng(1604)
  const hedgeCuts = gougeField(h, { x0: 0, x1: W, y0: HORIZON - 16, y1: HORIZON + 2 }, () => 0.35, {
    spacing: 4.4,
    len: [4, 9],
    gap: [4, 10],
    max: 1.2,
  })
  let crowns = ''
  let crownCuts = ''
  for (const [cx, cy, r] of ASH) {
    crowns += `M${n(cx - r)} ${n(cy)}a${n(r)} ${n(r * 0.9)} 0 1 1 ${n(r * 2)} 0a${n(r)} ${n(r * 0.9)} 0 1 1 ${n(-r * 2)} 0Z`
    for (let i = 0; i < Math.round(r / 1.7); i++) {
      // the leaves the sun comes through, on the side towards it
      const a = between(h, -r * 0.8, r * 0.3)
      const b = between(h, -r * 0.7, r * 0.5)
      crownCuts += gouge(cx + a, cy + b, cx + a + between(h, 4, 9), cy + b - 1.2, 1)
    }
  }
  // The cottage walls: courses of stone, the old end rough, the new end even.
  const c = rng(1605)
  let walls = ''
  for (let y = 158, i = 0; y < STAND - 6; y += 11, i++) {
    let x = 612 + between(c, 0, 10)
    while (x < 756) {
      const w = between(c, 14, 30)
      walls += gouge(x + 1, y + between(c, -0.8, 0.8), x + w - 1, y + between(c, -0.8, 0.8), 0.9)
      x += w + between(c, 2, 5)
    }
    for (let x = 770 + (i % 2) * 11; x < W; x += 22) walls += `M${x} ${y}V${y + 11}`
    walls += `M766 ${y}H${W}`
  }
  let slates = ''
  for (let y = 126; y < 152; y += 6.5)
    slates += `M${n(640 + (152 - y) * 0.9)} ${y}H${n(744 - (152 - y) * 0.6)}`
  for (let y = 142; y < 162; y += 6) slates += `M770 ${y}H${W}`
  // The furze bush: a dark spiky mound, its spines cut in paper.
  let furze = ''
  for (let i = 0; i < 26; i++) {
    const a = deg(between(c, 190, 350))
    const r0 = between(c, 8, 20)
    const cx = 586
    const cy = 286
    furze += gouge(
      cx + Math.cos(a) * r0,
      cy + Math.sin(a) * r0 * 0.8,
      cx + Math.cos(a) * (r0 + 12),
      cy + Math.sin(a) * (r0 + 12) * 0.8,
      0.7,
    )
  }
  cached = {
    sky,
    rays,
    ground,
    ledges,
    turf,
    wet,
    ripples,
    hedgeCuts,
    crowns,
    crownCuts,
    walls,
    slates,
    furze,
  }
  return cached
}

// ── EPPIE, at the edge of the pit, her hand out to the water ───────────────
const E_HEAD = { at: [444, 150] as P, rot: -12, scale: 1.2 }
const E_NECK: P = [450, 172]
const E_HEM: P = [456, STAND]
const E_ARM: P[] = [
  [446, 184],
  [430, 212],
  [408, 228],
]
const E_HAND: Hand = { parts: OPEN_HAND, scale: 1, rot: 10 }
/** Her far arm, bent, the hand at her waist. */
const E_FAR_ARM: P[] = [
  [454, 184],
  [462, 210],
  [452, 220],
]

// ── SILAS, coming to her side, leaning to look ─────────────────────────────
const S_HEAD = { d: HEAD_SILAS, at: [502, 150] as P, rot: -10, scale: 1.24 }
const S_NECK: P = [513, 179]
const S_HIP: P = [526, 238]
/**
 * His hands behind his back as he leans to look: an old man's way, and a
 * gesture nobody can misread. (A hand reaching to her shoulder was tried first
 * and, at the edge of the pit, read as a push.)
 */
const S_ARM: P[] = [
  [516, 190],
  [530, 222],
  [538, 238],
]
const S_HAND: Hand = { parts: OPEN_HAND, scale: 0.9, rot: 30 }
const SILAS: Part[] = man({
  facing: -1,
  neck: S_NECK,
  hip: S_HIP,
  head: S_HEAD,
  body: { width: 30, tails: 36, long: true, flare: 4 },
  arm: 8.6,
  leg: 10,
  near: {
    arm: S_ARM,
    hand: S_HAND,
    leg: [
      [522, 240],
      [510, 270],
      [512, STAND],
    ],
  },
  far: {
    arm: [],
    leg: [
      [530, 242],
      [538, 270],
      [540, STAND],
    ],
  },
})

function SixteenYearsLater({ uid }: ArtProps) {
  const m = marks()
  const et = headAt(-1, E_HEAD.at, E_HEAD.rot, E_HEAD.scale)
  const st = headAt(-1, S_HEAD.at, S_HEAD.rot, S_HEAD.scale)
  const eppie: Part[] = [
    { d: line(E_FAR_ARM), w: 7.2 },
    { d: gown(E_NECK, E_HEM, { width: 24, waist: 22, foot: 42, bust: 2 }) },
    { d: HEAD_EPPIE_GROWN, t: et },
    { d: line(E_ARM), w: 7.2, sep: 1.2 },
    ...E_HAND.parts.map((q) => ({ ...q, t: handAt(E_ARM, -1, E_HAND) })),
  ]
  return (
    <>
      <defs>
        <clipPath id={`${uid}-pit`}>
          <path d={PIT} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [440, 220], push: 1.03 })}>
        {/* the bright sky and the sun */}
        <rect x={0} y={0} width={W} height={HORIZON + 4} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.rays} fill={INK} />
        <circle cx={SUN[0]} cy={SUN[1]} r={22} fill={RED} />

        {/* the ash over the stile, and the hedge along the far side */}
        <path
          d="M352 210L356 150M356 168L334 140M356 160L382 134"
          stroke={INK}
          strokeWidth={6}
          strokeLinecap="round"
        />
        <path d={m.crowns} fill={INK} />
        <path d={m.crownCuts} fill={PAPER} />
        <path
          d={`M0 ${HORIZON + 4}V${HORIZON - 10}Q60 ${HORIZON - 18} 140 ${HORIZON - 12}T300 ${HORIZON - 14}T460 ${HORIZON - 10}T620 ${HORIZON - 14}T${W} ${HORIZON - 10}V${HORIZON + 4}Z`}
          fill={INK}
        />
        <path d={m.hedgeCuts} fill={PAPER} />
        {/* the stile in the hedge */}
        <path d="M312 214V176M340 214V176M306 196H346M310 186H342" stroke={PAPER} strokeWidth={7} />
        <path d="M312 214V176M340 214V176M306 196H346M310 186H342" stroke={INK} strokeWidth={4} />

        {/* the ground, and its grass */}
        <rect x={0} y={HORIZON + 4} width={W} height={H - HORIZON - 4} fill={PAPER} />
        <path d={m.ground} stroke={INK} strokeWidth={1.1} strokeLinecap="round" />

        {/* the old quarry, its water gone down */}
        <path d={PIT} fill={PAPER} />
        <g clipPath={`url(#${uid}-pit)`}>
          {/* the far face in the sun, its courses of stone */}
          <path d={m.ledges} fill={INK} stroke={INK} strokeWidth={1.1} />
          {/* below the line the water stood at yesterday, the stone is wet and dark */}
          <path d={`${HIGH_WATER}L414 344H-4Z`} fill={INK} />
          <path d={m.wet} fill={PAPER} />
          {/* the water now, low in the pit, bright with the sky */}
          <path d={WATER} fill={PAPER} stroke={INK} strokeWidth={1.4} />
          <path d={m.ripples} fill={INK} />
          {/* the near side wall, in shadow */}
          <path
            d="M424 236C432 252 426 280 412 304C402 320 396 332 392 344H360C374 320 392 290 404 262C410 250 414 242 424 236Z"
            fill={INK}
          />
        </g>
        <path d={PIT} fill="none" stroke={INK} strokeWidth={2.4} />
        <path d={RIM} fill="none" stroke={INK} strokeWidth={5} />
        <path d={m.turf} stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
        <g fill={PAPER} stroke={INK} strokeWidth={1.2}>
          {STONES.map(([x, y, rx, ry]) => (
            <ellipse key={`${x}-${y}`} cx={x} cy={y} rx={rx} ry={ry} />
          ))}
        </g>

        {/* the cottage: the old end and the new end, stone-slated, no thatch */}
        <path d="M612 296V156L640 152L692 112L744 152L758 156V296Z" fill={INK} />
        <path d="M766 296V164L776 140H860V296Z" fill={INK} />
        <path d="M756 296V156H768V296Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
        <path d={m.walls} fill={PAPER} stroke={PAPER} strokeWidth={0.6} />
        <path d={m.slates} fill="none" stroke={PAPER} strokeWidth={1} />
        <path d="M606 156L692 108L750 154M770 138H860" fill="none" stroke={PAPER} strokeWidth={2} />
        {/* the chimney */}
        <path d="M716 132V100H732V142Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
        {/* the door, and the window */}
        <path
          d="M632 296V218Q632 206 646 206H660Q674 206 674 218V296Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d="M640 220V290M666 220V290" stroke={PAPER} strokeWidth={1} />
        <rect
          x={698}
          y={196}
          width={40}
          height={34}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d="M718 196V230" stroke={PAPER} strokeWidth={1.4} />
        <rect x={694} y={230} width={48} height={4} fill={PAPER} />

        {/* the furze bush */}
        <path
          d="M562 296C558 282 566 268 580 264C594 260 608 270 612 284C614 290 612 294 610 296Z"
          fill={INK}
        />
        <path d={m.furze} fill={PAPER} />

        {/* Eppie, at the edge, her hand out to the water */}
        <Figure parts={eppie}>
          <EppieGrownHead t={et} />
        </Figure>

        {/* Silas, white-haired, leaning to look, his hands behind his back */}
        <Figure parts={SILAS}>
          <path d={SHIRT_COLLAR} transform={st} fill={PAPER} />
          <SilasFace t={st} white look={1} />
        </Figure>
      </g>
    </>
  )
}

export const sixteenYearsLater: LinocutArt = { width: W, height: H, Draw: SixteenYearsLater }
