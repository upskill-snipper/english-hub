import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED, SERIF } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rng,
  wedge,
  type Pt,
  type Rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CAP, EYE_CUT, HAIR_CUTS, HEAD } from './people'

/**
 * Chapter 4: "The news spreads", the tenth moment in the guide's timeline.
 * The Rebellion's story and its song get out across the county, and the
 * farmers cannot stop them. Every detail is from the held edition
 * (src/data/full-texts/animal-farm.ts):
 *
 * - "By the late summer the news of what had happened on Animal Farm had
 *   spread across half the county. Every day Snowball and Napoleon sent out
 *   flights of pigeons whose instructions were to mingle with the animals on
 *   neighbouring farms, tell them the story of the Rebellion, and teach them
 *   the tune of 'Beasts of England'." So a flight of pigeons crosses a summer
 *   sky, left to right, away over the fields.
 * - "The blackbirds whistled it in the hedges, the pigeons cooed it in the
 *   elms, it got into the din of the smithies and the tune of the church
 *   bells." So blackbirds sing on a hedge, pigeons perch in an elm, and a
 *   church tower's bell hangs in its belfry; the song is drawn as notes, in
 *   the spot colour, rising from each of them. No smithy is drawn: a panel
 *   this wide holds three of the four, and the elm, the hedge and the bell
 *   are the ones a phone can show.
 * - "Most of this time Mr. Jones had spent sitting in the taproom of the Red
 *   Lion at Willingdon, complaining to anyone who would listen". So the inn
 *   stands on the right, its sign a lion in the spot colour, and through the
 *   taproom window Jones sits at a table with a mug, turned towards another
 *   drinker, his mouth open. He is the Jones of the figure kit
 *   (./people.tsx): never described in person, so a plain countryman,
 *   bare-headed, in shirt and waistcoat. The listener, in a cap, is one of
 *   "The other farmers" who "sympathised in principle", and is not named.
 *
 * Mr Pilkington and Mr Frederick are named in the moment, but the text never
 * puts them in the Red Lion, or anywhere the eye could find them in the same
 * view, so they are left to the words. Nothing is taken from a film or stage
 * production. Seeds: 1001 (sky), 1002 (hills and hedges), 1003 (elm), 1004
 * (inn and tower), 1005 (field).
 */

const W = 860
const H = 340
/** The foot of the far hills: fields run from here to the foreground. */
const FIELD_TOP = 178
/** The top of the near hedge, where the blackbirds sit. */
const HEDGE_TOP = 226

type Marks = {
  sky: string
  hills: string
  hillCuts: string
  hedge: string
  hedgeCuts: string
  furrows: string
  crown: string
  leaves: string
  tower: string
  facade: string
  roof: string
}

/** The elm's crown: overlapping rounds, [cx, cy, r]. */
const CROWN: [number, number, number][] = [
  [106, 128, 38],
  [150, 96, 50],
  [196, 124, 38],
  [128, 64, 34],
  [180, 62, 30],
  [90, 94, 30],
  [214, 90, 26],
  [152, 150, 36],
]
const inCrown = (x: number, y: number) =>
  CROWN.some(([cx, cy, r]) => Math.hypot(x - cx, y - cy) < r - 3)

/** The far hills' top edge. */
const hillY = (x: number) => 156 + 7 * Math.sin(x / 74 + 0.6) + 4 * Math.sin(x / 23 + 1.3)

/** The near hedge's top edge: a row of bumps. */
const hedgeY = (x: number) => HEDGE_TOP + 3 * Math.abs(Math.sin(x / 13)) - 2 * Math.sin(x / 41)

function skyMarks(r: Rng) {
  let d = ''
  for (let y = 14; y < FIELD_TOP - 20; y += 8) {
    const dens = clamp(1 - (y - 14) / 150)
    let x = 12 + between(r, -20, 0)
    while (x < W - 12) {
      const len = between(r, 10, 42)
      if (r() < 0.1 + dens * 0.36)
        d += gouge(x, y + between(r, -1, 1), x + len, y + between(r, -1, 1), 0.3 + dens * 0.8)
      x += len + between(r, 12, 44)
    }
  }
  return d
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = skyMarks(rng(1001))

  const h = rng(1002)
  let hills = `M0 ${FIELD_TOP + 2}`
  for (let x = 0; x <= W; x += 8) hills += `L${x} ${n(hillY(x))}`
  hills += `L${W} ${FIELD_TOP + 2}Z`
  // Field boundaries on the far hills, cut in paper and following the slope.
  let hillCuts = ''
  for (let k = 0; k < 16; k++) {
    const x = between(h, 20, W - 40)
    const y = hillY(x) + between(h, 6, 16)
    if (y < FIELD_TOP - 3)
      hillCuts += gouge(x, y, x + between(h, 30, 70), y + between(h, -2, 3), 0.7)
  }
  let hedge = `M-4 ${HEDGE_TOP + 26}`
  for (let x = -4; x <= 504; x += 4) hedge += `L${x} ${n(hedgeY(x))}`
  hedge += `L504 ${HEDGE_TOP + 26}Z`
  let hedgeCuts = ''
  for (let k = 0; k < 150; k++) {
    const x = between(h, 0, 500)
    const top = hedgeY(x) + 3
    const y = between(h, top, HEDGE_TOP + 22)
    // Leaves catch the light along the top of the hedge.
    if (h() < 1.1 - (y - top) / 22)
      hedgeCuts += gouge(x, y, x + between(h, 3, 6), y + between(h, -1.5, 1.5), 0.8)
  }

  // Furrows of the near field, running to a point behind the hedge.
  const f = rng(1005)
  let furrows = ''
  const V: Pt = [360, HEDGE_TOP + 10]
  for (let xb = -480; xb < 1100; xb += 34) {
    const t0 = 0.06
    const x0 = V[0] + (xb - V[0]) * t0
    const y0 = V[1] + (H - V[1]) * t0
    if (x0 > 520) continue
    furrows += wedge(x0, y0, xb, H, 0.5, 2.8 + between(f, -0.4, 0.4))
  }

  const e = rng(1003)
  let crown = ''
  for (const [cx, cy, r] of CROWN)
    crown += `M${n(cx - r)} ${n(cy)}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z`
  // Leaves cut where the light falls, from the upper right.
  let leaves = ''
  for (let k = 0; k < 520; k++) {
    const x = between(e, 56, 244)
    const y = between(e, 26, 188)
    if (!inCrown(x, y)) continue
    const L = clamp(1 - Math.hypot(x - 230, y - 30) / 190)
    if (e() < L * 0.95)
      leaves += gouge(x, y, x + between(e, 3, 7), y + between(e, -2, 2), 0.6 + L * 1.1)
  }

  const t = rng(1004)
  const tower = gougeField(
    t,
    { x0: 506, x1: 562, y0: 74, y1: 214 },
    (x) => 0.18 + 0.3 * clamp(1 - (x - 506) / 56),
    { spacing: 9, len: [8, 20], gap: [3, 8], max: 2.2 },
  )
  const facade = gougeField(
    t,
    { x0: 632, x1: 852, y0: 150, y1: 306 },
    (x, y) => 0.12 + 0.34 * clamp(1 - (x - 632) / 220) * clamp(1 - (y - 150) / 200),
    { spacing: 7, len: [16, 44], gap: [6, 16], max: 2.6 },
  )
  let roof = gouge(652, 111, 832, 111, 1.4)
  for (const y of [120, 128, 136]) {
    const inset = ((y - 110) / 34) * 26
    let x = 652 - inset + between(t, 0, 10)
    while (x < 832 + inset - 12) {
      const len = between(t, 18, 40)
      roof += gouge(x, y, Math.min(x + len, 832 + inset - 6), y, 0.9)
      x += len + between(t, 5, 12)
    }
  }

  cached = {
    sky,
    hills,
    hillCuts,
    hedge,
    hedgeCuts,
    furrows,
    crown,
    leaves,
    tower,
    facade,
    roof,
  }
  return cached
}

// ── BIRDS AND NOTES ─────────────────────────────────────────────────────────

/**
 * A pigeon in flight, facing right, centred on its body; `up` is the
 * wingbeat. Plump, with broad rounded wings and a square tail, so that it
 * reads as a pigeon and not a swallow.
 */
function flyingPigeon(up: boolean) {
  const wings = up
    ? 'M-4 -3C-8 -10 -12 -18 -15 -27C-6 -25 2 -16 6 -4Z' +
      'M0 -4C0 -12 2 -20 4 -26C8 -20 9 -12 8 -4Z'
    : 'M-4 1C-8 8 -10 16 -13 24C-4 20 2 11 6 1Z' + 'M2 1C3 8 4 14 6 19C9 14 9 8 8 1Z'
  return (
    'M-11 -2C-6 -7 5 -7 10 -4C12.6 -2.4 12 2 9 3.4C3 5.6 -5 5 -11 2.4Z' +
    'M7.6 -5.4a3.8 3.8 0 1 0 7.6 0a3.8 3.8 0 1 0 -7.6 0Z' +
    'M14.8 -6.2L18 -5L14.8 -4Z' +
    'M-9 -1.8L-19 -4.4L-20 2.4L-9 2Z' +
    wings
  )
}
/** The paper cuts of the near wing's feathers, in the pigeon's frame. */
const FEATHERS_UP = gouge(-3, -6, -11, -21, 0.6, 0.6) + gouge(0, -6, -6, -19, 0.55, 0.5)
const FEATHERS_DOWN = gouge(-2, 3, -8, 17, 0.6, -0.6) + gouge(1, 3, -3, 14, 0.55, -0.5)

/** A pigeon perched, facing `f`, cooing: puffed chest, tail down. Its feet at (0, 0). */
function perchedPigeon(f: 1 | -1) {
  const s = (x: number) => n(x * f)
  return (
    `M${s(-11)} -7C${s(-9)} -15 ${s(-1)} -18 ${s(5)} -17C${s(9)} -16 ${s(10)} -12 ${s(9)} -7C${s(7)} -2 ${s(0)} 0 ${s(-6)} -1Z` +
    `M${s(4)} -21a4 4 0 1 0 ${s(8)} 0a4 4 0 1 0 ${s(-8)} 0Z` +
    `M${s(11.4)} -22L${s(15)} -20.6L${s(11.4)} -19.4Z` +
    `M${s(-9)} -5L${s(-20)} 1L${s(-18.6)} 3.6L${s(-6)} -1.6Z` +
    `M${s(-1)} -2L${s(-1)} 0.6M${s(3)} -2L${s(3.4)} 0.6`
  )
}

/** A blackbird perched on the hedge, facing right, beak open in song. Feet at (0, 0). */
const BLACKBIRD =
  'M-8 -8C-7 -14 0 -16 5 -14C7 -13 8 -11 8 -9C7 -4 1 -2 -4 -3Z' +
  'M3.6 -16.6a3.8 3.8 0 1 0 7.6 0a3.8 3.8 0 1 0 -7.6 0Z' +
  'M10.6 -18L16.2 -21L11.2 -16.4Z' +
  'M10.8 -15.6L15.6 -13.2L10.4 -14.2Z' +
  'M-6 -7L-15 -16L-12.6 -18L-3 -9.6Z'
const BLACKBIRD_LEGS = 'M-1 -3L-1.4 1M2 -3L2.6 1'

/** A quaver: head at (0, 0), stem and flag rising to the right. */
const QUAVER =
  'M-3.6 1.2C-4.4 -1 -2 -2.8 0.8 -2.8C3.4 -2.8 4.4 -0.8 3.6 1C2.8 2.8 -2.8 3.4 -3.6 1.2Z' +
  'M2.6 -1.4L2.6 -17.4L4.2 -17.4L4.2 -1Z' +
  'M4.2 -17.4C5.4 -13.4 10 -12.8 9.2 -6.4C8.4 -9.4 6.6 -11 4.2 -11.6Z'
/** Two quavers joined by a beam. */
const BEAMED =
  'M-3.6 1.2C-4.4 -1 -2 -2.8 0.8 -2.8C3.4 -2.8 4.4 -0.8 3.6 1C2.8 2.8 -2.8 3.4 -3.6 1.2Z' +
  'M8.4 -1.8C7.6 -4 10 -5.8 12.8 -5.8C15.4 -5.8 16.4 -3.8 15.6 -2C14.8 -0.2 9.2 0.4 8.4 -1.8Z' +
  'M2.6 -1.4L2.6 -17.4L4.2 -17.4L4.2 -1Z' +
  'M14.6 -4.4L14.6 -20.4L16.2 -20.4L16.2 -4Z' +
  'M2.6 -17.6L16.2 -20.8L16.2 -16.6L2.6 -13.4Z'

/** Where the notes rise: [x, y, scale, beamed, delay]. */
const NOTES: [number, number, number, boolean, number][] = [
  // from the pigeons in the elm
  [248, 110, 0.95, false, 0.9],
  [262, 86, 1, true, 1.2],
  // from the blackbirds on the hedge, clear of their beaks: the spot
  // colour at an open beak would read as blood, not song
  [330, 190, 0.85, false, 1.0],
  [348, 174, 0.9, true, 1.35],
  [414, 188, 0.85, true, 1.15],
  [476, 186, 0.9, false, 1.3],
  [488, 166, 0.85, false, 1.6],
  // from the church bell
  [572, 98, 0.95, false, 1.1],
  [590, 80, 1, true, 1.45],
]

/** The flight of pigeons: [x, y, scale, wings up]. */
const FLIGHT: [number, number, number, boolean][] = [
  [276, 58, 1.25, true],
  [314, 34, 1.3, false],
  [352, 70, 1.2, false],
  [388, 40, 1.35, true],
  [428, 64, 1.25, true],
  [466, 30, 1.3, false],
  [504, 56, 1.2, true],
]

/**
 * The lion on the inn's sign, passant and facing left, centred on (0, 0): a
 * shaggy mane round the head, so it reads as a lion and not a dog.
 */
function lionMane() {
  let d = ''
  const cx = -10.4
  const cy = -5.4
  for (let i = 0; i <= 18; i++) {
    const a = (i / 18) * Math.PI * 2
    const rad = i % 2 ? 6.2 : 9.4
    d += `${i ? 'L' : 'M'}${n(cx + Math.cos(a) * rad)} ${n(cy + Math.sin(a) * rad)}`
  }
  return d + 'Z'
}
const LION_MANE = lionMane()
const LION =
  'M-4 -4.6C0 -7.6 8 -7.6 12 -4.6C14 -2.6 14 1.6 12 3.4C6 4.6 -2 4.6 -6 3Z' +
  'M-17.6 -5.6L-12 -9.4L-9 -4L-11.6 -0.6L-17 -2Z'
const LION_LEGS = 'M-5 2L-7 11M-1 3L0 11M7 3L5.4 11M11 2L13 11'
const LION_TAIL = 'M12.4 -2.4C18 -5 19 -12 14.6 -14.6'

// ── THE TAPROOM ─────────────────────────────────────────────────────────────

/** The kit's head, scaled for a man seen through the taproom window. */
const HEAD_S = 0.62
/**
 * A man seated at the taproom table, facing right, his head (the kit's HEAD)
 * centred on (0, 0) and the table top at y 36. Jones is the kit's Jones,
 * bare-headed, the black of his waistcoat over paper shirt-sleeves, his mouth
 * open; the listener wears the kit's cap and a jacket, his mouth shut.
 */
const SEATED_BODY = 'M-6 12C-13 16 -16 25 -16 36L15 36C15 25 12 16 4 12Z'
const SEATED_ARM = 'M1 17L5 31L14 30'
/** Jones's open mouth, in the frame of the kit's HEAD. */
const OPEN_MOUTH = 'M18.6 5.2L11.4 7.4L15 9.6Z'
const MUG = 'M14 21H21V32H14Z'

function Drinker({ at, facing, jones }: { at: [number, number]; facing: 1 | -1; jones: boolean }) {
  const hs = `scale(${HEAD_S})`
  return (
    <g transform={`translate(${at[0]} ${at[1]}) scale(${facing} 1)`}>
      <path d={SEATED_BODY} fill={INK} />
      <path d={HEAD} transform={hs} fill={INK} />
      {!jones && <path d={CAP} transform={hs} fill={INK} />}
      <g transform={hs} fill={PAPER}>
        <path d={EYE_CUT + (jones ? HAIR_CUTS + OPEN_MOUTH : '')} />
      </g>
      {!jones && <path d={gouge(3, 14, -4, 34, 0.6, 1)} fill={PAPER} />}
      <path
        d={SEATED_ARM}
        fill="none"
        stroke={PAPER}
        strokeWidth={9.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={SEATED_ARM}
        fill="none"
        stroke={INK}
        strokeWidth={6.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {jones && <path d="M2.6 18L5.6 29.6" stroke={PAPER} strokeWidth={0.9} fill="none" />}
      <path d={MUG} fill={INK} stroke={PAPER} strokeWidth={1.1} />
      <path d="M21 24Q25 25 24 29L21 29.6" fill="none" stroke={INK} strokeWidth={1.8} />
    </g>
  )
}

function TheNewsSpreads({ uid }: ArtProps) {
  const m = marks()
  const id = { tower: `${uid}-tower`, facade: `${uid}-facade`, win: `${uid}-win` }
  return (
    <>
      <defs>
        <clipPath id={id.tower}>
          <rect x={506} y={70} width={56} height={146} />
        </clipPath>
        <clipPath id={id.facade}>
          <rect x={632} y={148} width={220} height={160} />
        </clipPath>
        <clipPath id={id.win}>
          <rect x={700} y={230} width={140} height={70} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 170], push: 1.03 })}>
        {/* the summer sky over the county */}
        <rect x={0} y={0} width={W} height={FIELD_TOP + 4} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        {/* the far hills, and the fields below them */}
        <path d={m.hills} fill={INK} />
        <path d={m.hillCuts} fill={PAPER} />
        <rect x={0} y={FIELD_TOP} width={W} height={H - FIELD_TOP} fill={PAPER} />
        <path d={m.furrows} fill={INK} />

        {/* the elm, pigeons cooing in it */}
        <path d={wedge(152, HEDGE_TOP + 6, 150, 140, 22, 14)} fill={INK} />
        <path d={m.crown} fill={INK} />
        <path d={m.leaves} fill={PAPER} />
        <g fill="none" stroke={PAPER} strokeWidth={LINE.bold} strokeLinecap="round">
          <path d="M92 118L132 112" />
          <path d="M150 88L196 80" />
          <path d="M128 158L172 150" />
        </g>
        <g fill={PAPER} stroke={INK} strokeWidth={0.6}>
          <path transform="translate(112 116)" d={perchedPigeon(1)} />
          <path transform="translate(176 83)" d={perchedPigeon(-1)} />
          <path transform="translate(152 154)" d={perchedPigeon(1)} />
        </g>
        <g fill={INK}>
          <circle cx={120.4} cy={95.6} r={1} />
          <circle cx={167.6} cy={62.6} r={1} />
          <circle cx={160.4} cy={133.6} r={1} />
        </g>

        {/* the hedge, blackbirds whistling on it */}
        <path d={m.hedge} fill={INK} />
        <path d={m.hedgeCuts} fill={PAPER} />
        <g fill={INK}>
          {[
            [300, 1],
            [382, 1],
            [460, 1],
          ].map(([x]) => (
            <g key={x} transform={`translate(${x} ${n(hedgeY(x) + 1)})`}>
              <path d={BLACKBIRD} />
              <path d={BLACKBIRD_LEGS} stroke={INK} strokeWidth={1.2} fill="none" />
              <circle cx={7.6} cy={-17.2} r={0.9} fill={PAPER} />
            </g>
          ))}
        </g>

        {/* the church tower, its bell in the belfry */}
        <rect x={506} y={70} width={56} height={146} fill={INK} />
        <g clipPath={`url(#${id.tower})`}>
          <path d={m.tower} fill={PAPER} />
        </g>
        <path d="M502 72V58H510V64H518V58H526V64H534V58H542V64H550V58H558V64H566V72Z" fill={INK} />
        <rect x={500} y={70} width={68} height={4} fill={PAPER} />
        <path d="M520 132V106Q520 92 534 87Q548 92 548 106V132Z" fill={PAPER} />
        <rect x={522} y={98} width={24} height={2.6} fill={INK} />
        <path d="M527.4 121Q527 106 534 102.6Q541 106 540.6 121L543.6 124.4H524.4Z" fill={INK} />
        <circle cx={534} cy={127.4} r={2.4} fill={INK} />
        <path d="M528 176V158Q528 151 534 151Q540 151 540 158V176Z" fill={PAPER} />
        <path d="M534 151V176M528 164H540" stroke={INK} strokeWidth={1.2} />
        <rect x={500} y={212} width={68} height={5} fill={INK} />

        {/* the Red Lion: roof, chimney, and the front of the inn */}
        <rect x={778} y={80} width={24} height={34} fill={INK} />
        <rect x={782} y={74} width={16} height={8} fill={INK} />
        <path d={gouge(778, 88, 802, 88, 1.1)} fill={PAPER} />
        <path d="M624 146L652 108L832 108L860 146Z" fill={INK} />
        <path d={m.roof} fill={PAPER} />
        <rect x={632} y={146} width={220} height={162} fill={INK} />
        <g clipPath={`url(#${id.facade})`}>
          <path d={m.facade} fill={PAPER} />
        </g>
        <rect x={624} y={146} width={236} height={4} fill={PAPER} />
        {/* upper windows, dark glass in pale frames */}
        {[660, 734, 806].map((x) => (
          <g key={x}>
            <rect x={x} y={158} width={30} height={34} fill={INK} />
            <path
              d={`M${x} 158h30v34h-30ZM${x + 15} 158v34M${x} 175h30`}
              fill="none"
              stroke={PAPER}
              strokeWidth={2.2}
            />
            <path d={gouge(x + 4, 172, x + 11, 162, 0.9)} fill={PAPER} />
          </g>
        ))}
        {/* the fascia board */}
        <rect x={650} y={202} width={190} height={19} fill={PAPER} />
        <rect x={650} y={202} width={190} height={19} fill="none" stroke={INK} strokeWidth={1.6} />
        <text
          x={745}
          y={217}
          textAnchor="middle"
          fontFamily={SERIF}
          fontSize={14}
          fontWeight={700}
          letterSpacing={5}
          fill={INK}
        >
          RED LION
        </text>
        {/* the door */}
        <rect x={650} y={236} width={36} height={70} fill={PAPER} />
        <rect x={655} y={241} width={26} height={65} fill={INK} />
        <path d={gouge(662, 250, 662, 296, 0.8) + gouge(674, 250, 674, 296, 0.8)} fill={PAPER} />
        <rect x={644} y={304} width={48} height={5} fill={PAPER} />

        {/* the taproom window, and Jones complaining inside it */}
        <rect x={694} y={224} width={152} height={78} fill={PAPER} />
        <g clipPath={`url(#${id.win})`}>
          <Drinker at={[728, 254]} facing={1} jones />
          <Drinker at={[816, 254]} facing={-1} jones={false} />
          <rect x={700} y={290} width={140} height={5} fill={INK} />
          <path d="M716 295V300M824 295V300" stroke={INK} strokeWidth={3} />
        </g>
        <path d="M700 230h140v70h-140ZM772 230V290" fill="none" stroke={INK} strokeWidth={2.4} />
        <rect x={690} y={300} width={160} height={5} fill={PAPER} />

        {/* the inn sign on its iron bracket */}
        <path
          d="M632 164H588M632 184Q610 182 604 164M596 164V172M628 164V172"
          fill="none"
          stroke={INK}
          strokeWidth={2.6}
        />
        <rect x={590} y={172} width={44} height={44} fill={PAPER} />
        <rect x={590} y={172} width={44} height={44} fill="none" stroke={INK} strokeWidth={3} />
        <g transform="translate(613 194) scale(0.95)">
          <path d={LION_TAIL} fill="none" stroke={RED} strokeWidth={2} strokeLinecap="round" />
          <circle cx={14.4} cy={-15.4} r={2.4} fill={RED} />
          <path d={LION_LEGS} fill="none" stroke={RED} strokeWidth={2.6} strokeLinecap="round" />
          <path d={LION} fill={RED} />
          <path d={LION_MANE} fill={RED} stroke={PAPER} strokeWidth={0.8} />
          <circle cx={-12.2} cy={-5.6} r={4.2} fill={RED} stroke={PAPER} strokeWidth={0.8} />
          <path d="M-15.4 -4.6L-19 -3.4L-15.2 -2.4Z" fill={RED} />
          <circle cx={-13} cy={-6.8} r={0.8} fill={PAPER} />
        </g>
        {/* the lane in front of the inn */}
        <path d={gouge(560, 318, 850, 314, 1.4) + gouge(600, 330, 846, 326, 1.2)} fill={INK} />

        {/* the flight of pigeons, sent out over the county */}
        <g className="lc-drift" style={timing({ delay: 0.1 })}>
          {FLIGHT.map(([x, y, s, up]) => (
            <g key={x} transform={`translate(${x} ${y}) rotate(-8) scale(${s})`}>
              <path d={flyingPigeon(up)} fill={INK} />
              <path d={up ? FEATHERS_UP : FEATHERS_DOWN} fill={PAPER} />
              <circle cx={12.6} cy={-6.2} r={0.75} fill={PAPER} />
            </g>
          ))}
        </g>

        {/* the song, rising from the birds and the bell */}
        {NOTES.map(([x, y, s, beamed, delay]) => (
          <g key={`${x}-${y}`} className="lc-rise" style={timing({ delay, dur: 1 })}>
            <path
              transform={`translate(${x} ${y}) rotate(-8) scale(${s})`}
              d={beamed ? BEAMED : QUAVER}
              fill={RED}
              stroke={PAPER}
              strokeWidth={1.1}
              strokeLinejoin="round"
              paintOrder="stroke"
            />
          </g>
        ))}
      </g>
    </>
  )
}

export const theNewsSpreads: LinocutArt = { width: W, height: H, Draw: TheNewsSpreads }
