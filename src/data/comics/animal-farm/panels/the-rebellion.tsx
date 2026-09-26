import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Cut, Dog, Horse, Man, Moses, Pig, place, type Placing } from './people'

/**
 * Chapter 2: "The Rebellion", the fifth moment in the guide's timeline. The
 * chase down the cart-track on the evening of Midsummer Day. Every detail is
 * from the text (the held edition, src/data/full-texts/animal-farm.ts):
 *
 * - "On Midsummer's Eve, which was a Saturday, Mr. Jones went into
 *   Willingdon and got so drunk at the Red Lion that he did not come back
 *   till midday on Sunday ... so that when evening came, the animals were
 *   still unfed." So it is a June evening, the sun low and printed in the spot
 *   colour, and every shadow falls long away from it.
 * - "One of the cows broke in the door of the store-shed with her horn". So
 *   the store-shed on the left has its door hanging broken open.
 * - "he and his four men were in the store-shed with whips in their hands
 *   ... they flung themselves upon their tormentors. Jones and his men
 *   suddenly found themselves being butted and kicked from all sides." "After
 *   only a moment or two they gave up trying to defend themselves and took to
 *   their heels. A minute later all five of them were in full flight down the
 *   cart-track that led to the main road, with the animals pursuing them in
 *   triumph." So the picture is that flight: five men running down the track
 *   towards the five-barred gate and the road, Jones last, bare-headed and
 *   looking back, his men in caps; their whips lie dropped on the track
 *   behind them; and the animals come on after them, Boxer at a gallop, a cow
 *   with her horns down, the dogs, a pig. Between the animals and the men is
 *   open ground: the butting and kicking are over, and nobody is shown being
 *   struck. Many of this site's readers are children.
 * - "Mrs. Jones looked out of the bedroom window, saw what was happening,
 *   hurriedly flung a few possessions into a carpet bag, and slipped out of
 *   the farm by another way. Moses sprang off his perch and flapped after her,
 *   croaking loudly." So far off on the left, the other way, a woman hurries
 *   out of the picture with a carpet bag, and Moses flies after her, his beak
 *   open.
 * - "the animals had chased Jones and his men out on to the road and slammed
 *   the five-barred gate behind them." So the gate stands open at the right,
 *   the road pale beyond it: the moment before it is slammed.
 *
 * Nobody is described, so Mrs Jones is drawn plainly, in a long coat and hat.
 *
 * Seeds: 1501 the sky, 1502 the fields, 1503 the track, 1504 the hedge.
 */

const W = 860
const H = 340

const SUN: [number, number] = [706, 118]

/** The cart-track's centre line, from the yard on the left to the gate. */
const trackY = (x: number) => 206 + (x - 150) * 0.16 + Math.sin((x - 150) / 180) * 18
/** Its half-width, widening as it comes nearer. */
const trackW = (x: number) => 12 + (x - 150) * 0.05

type Marks = {
  sky: string
  fields: string
  track: string
  ruts: string
  hedge: string
  shadows: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = gougeField(
    rng(1501),
    { x0: 0, x1: W, y0: 8, y1: 184 },
    (x, y) => clamp(1 - Math.hypot(x - SUN[0], (y - SUN[1]) * 1.6) / 560, 0.08, 1),
    { spacing: 6, len: [24, 90], gap: [6, 20], max: 4 },
  )
  // The fields either side of the track: dark, cut with the rows of the
  // evening light running across them.
  const f = rng(1502)
  let fields = ''
  for (let y = 190; y < H; y += 7 + (y - 190) * 0.03) {
    let x = between(f, -20, 0)
    while (x < W) {
      const len = between(f, 20, 70)
      const L = clamp(0.6 - Math.abs(x - SUN[0]) / 900)
      if (f() < 0.5 + L)
        fields += gouge(x, y, x + len, y + between(f, -0.6, 0.6), 0.5 + L * 1.6 + (y - 190) * 0.006)
      x += len + between(f, 10, 34)
    }
  }
  // The track: a pale band from the yard to the gate.
  let top = ''
  let bottom = ''
  for (let x = 140; x <= W; x += 10) {
    top += `${x === 140 ? 'M' : 'L'}${n(x)} ${n(trackY(x) - trackW(x))}`
    bottom = `L${n(x)} ${n(trackY(x) + trackW(x))}` + bottom
  }
  const track = top + bottom + 'Z'
  const t = rng(1503)
  let ruts = ''
  for (const off of [-0.45, 0.45]) {
    let x = 150
    while (x < W) {
      const len = between(t, 20, 60)
      const x2 = Math.min(x + len, W)
      ruts += gouge(
        x,
        trackY(x) + off * trackW(x),
        x2,
        trackY(x2) + off * trackW(x2),
        0.5 + (x - 150) * 0.002,
      )
      x = x2 + between(t, 6, 20)
    }
  }
  // The far hedge and trees along the horizon.
  const h = rng(1504)
  let hedge = 'M230 190'
  for (let x = 230; x <= W; x += 8) hedge += `L${x} ${n(180 - between(h, 0, 8))}`
  hedge += `L${W} 192L230 192Z`
  // Long shadows of the men, thrown back along the track, away from the sun.
  let shadows = ''
  for (const [x, y] of MEN.map((m) => m.at)) shadows += wedge(x - 4, y + 1, x - 70, y - 6, 9, 2)
  cached = { sky, fields, track, ruts, hedge, shadows }
  return cached
}

/**
 * The five-barred gate, open: hung on its post at the edge of the track and
 * swung out across the road towards us, five bars and a brace.
 */
const GATE =
  'M790 232L850 252M790 246L850 268M790 260L850 284M790 274L850 300M790 288L850 316' +
  'M790 230V292M850 250V318M790 290L850 252'

/** The five men in flight: Jones last, looking back; his four men in caps. */
const MEN: { at: [number, number]; s: number; cap: boolean; back: boolean; lean: number }[] = [
  { at: [560, 318], s: 1.02, cap: false, back: true, lean: 0 },
  { at: [616, 300], s: 0.8, cap: true, back: false, lean: 12 },
  { at: [668, 288], s: 0.76, cap: true, back: true, lean: -4 },
  { at: [702, 306], s: 0.78, cap: true, back: false, lean: 16 },
  { at: [752, 294], s: 0.72, cap: true, back: false, lean: 8 },
]

/**
 * A cow charging with her horns down: drawn here on her feet, in stride, with
 * the heavy head of a cow lowered and her horns forward, since the kit's cow
 * (./people.tsx) lies chewing the cud. "One of the cows broke in the door of
 * the store-shed with her horn".
 */
const CHARGING_COW = {
  body: 'M-50 -72C-30 -78 12 -78 32 -74C42 -72 48 -64 48 -54C48 -46 44 -40 38 -38C16 -34 -18 -34 -38 -38C-48 -40 -54 -48 -54 -60C-54 -66 -52 -70 -50 -72Z',
  head: 'M30 -72C40 -68 50 -60 58 -50L74 -34C77 -30 75 -25 70 -26L58 -30C50 -34 42 -40 36 -46Z',
  horns: 'M56 -52C58 -60 64 -64 72 -62M60 -48C66 -52 74 -52 80 -48',
  ear: 'M50 -58L41 -64L47 -51Z',
  legs: 'M-40 -40L-56 -6M-30 -38L-22 -3M28 -40L46 -10M36 -40L34 -3',
  tail: 'M-52 -66C-62 -60 -66 -50 -68 -40',
  tuft: 'M-71 -42L-65 -42L-66 -32L-70 -32Z',
}
function ChargingCow({ at, s = 1, face = 1 }: Placing) {
  const c = CHARGING_COW
  return (
    <Cut
      parts={[
        { d: c.legs, w: 7 },
        { d: c.tail, w: 2.6 },
        { d: c.tuft },
        { d: c.body },
        { d: c.horns, w: 3.4 },
        { d: c.head },
        { d: c.ear },
      ]}
      halo={Math.round((1.8 / s) * 100) / 100}
      transform={place(at, s, face)}
    >
      <path
        d={
          gouge(55, -47, 60, -44, 1.1) +
          gouge(-30, -70, -40, -42, 0.7, -2.4) +
          gouge(70, -30, 72, -28, 0.6)
        }
        fill={PAPER}
      />
    </Cut>
  )
}

/** A whip dropped on the track: its handle and its lash, in ink. */
function whip(x: number, y: number, flip = 1) {
  return (
    <g>
      <path d={`M${x} ${y}l${14 * flip} -3`} stroke={INK} strokeWidth={4.4} strokeLinecap="round" />
      <path
        d={`M${x + 14 * flip} ${y - 3}c${12 * flip} -2 ${20 * flip} 4 ${30 * flip} 2s${14 * flip} -6 ${22 * flip} -2`}
        stroke={INK}
        strokeWidth={1.8}
        fill="none"
        strokeLinecap="round"
      />
    </g>
  )
}

/** Mrs Jones, far off, hurrying left with her carpet bag, in a long coat and hat. */
function MrsJones({ at, s }: { at: [number, number]; s: number }) {
  return (
    <Cut
      parts={[
        { d: 'M-6 -30C-2 -32 4 -31 6 -28L10 -4C4 -1 -8 -1 -12 -4Z' },
        { d: 'M-2 -30m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0' },
        { d: 'M-9 -36L6 -36L4 -40L-6 -40Z' },
        { d: 'M-6 -4L-10 0M4 -4L2 0', w: 2.6 },
        { d: 'M-8 -22L-14 -14', w: 2.6, sep: 0.8 },
        { d: 'M-22 -16H-10V-8H-22Z', sep: 0.8 },
      ]}
      halo={Math.round((1.6 / s) * 100) / 100}
      transform={place(at, s, 1)}
    >
      <path d="M-20 -16Q-16 -21 -12 -16" stroke={PAPER} strokeWidth={0.9} fill="none" />
    </Cut>
  )
}

function TheRebellion(_props: ArtProps) {
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [560, 240], push: 1.03 })}>
        {/* the evening sky, lit from the low sun */}
        <path d={m.sky} fill={PAPER} />
        <circle cx={SUN[0]} cy={SUN[1]} r={30} fill={INK} />
        <circle
          className="lc-glow"
          style={timing({ delay: 0.4 })}
          cx={SUN[0]}
          cy={SUN[1]}
          r={24}
          fill={RED}
        />

        {/* the far hedge and the fields */}
        <path d={m.hedge} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.fine}>
          <path d="M556 188V172C544 170 540 156 548 148C548 136 562 130 572 136C582 128 598 134 598 146C606 154 602 168 590 170L586 188Z" />
          <path d="M466 188V178C458 176 456 166 462 160C462 152 472 148 478 152C486 148 494 154 492 162C498 168 494 176 486 178L484 188Z" />
        </g>
        <rect x={0} y={190} width={W} height={H - 190} fill={INK} />
        <path d={m.fields} fill={PAPER} />
        <path d={m.track} fill={PAPER} />
        <path d={m.ruts} fill={INK} />

        {/* the farm on the left: the barn, and the store-shed with its door broken in */}
        <path
          d="M0 196V96L44 60H176L214 96V196Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={
            gouge(10, 108, 204, 108, 0.8) +
            gouge(10, 124, 204, 124, 0.8) +
            gouge(10, 140, 204, 140, 0.8) +
            gouge(52, 72, 170, 72, 0.7) +
            gouge(34, 86, 190, 86, 0.7)
          }
          fill={PAPER}
        />
        <path
          d="M168 200V148L208 128L250 148V200Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect x={194} y={160} width={30} height={40} fill={PAPER} />
        <rect x={198} y={164} width={22} height={36} fill={INK} />
        <path d="M198 164L186 172V208L198 200Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
        <path d="M188 180L196 176M188 192L196 188" stroke={PAPER} strokeWidth={1.1} />

        {/* Mrs Jones slipping away the other way, and Moses flapping after her */}
        <MrsJones at={[44, 228]} s={1.35} />
        <Moses at={[92, 176]} s={1.3} face={-1} flying beakOpen />

        {/* the five-barred gate, open on the road */}
        {/* the road beyond the gateway, and the gate swung wide open on it */}
        <path d="M784 256L860 244V334L784 322Z" fill={PAPER} />
        <path d="M786 208V300M786 300V322" stroke={INK} strokeWidth={8} />
        <path d="M786 208V322" stroke={PAPER} strokeWidth={1.4} />
        <g fill="none" strokeLinecap="round">
          <path d={GATE} stroke={PAPER} strokeWidth={6.4} />
          <path d={GATE} stroke={INK} strokeWidth={3.6} />
        </g>
        {/* the whips, dropped */}
        {whip(486, 286)}
        {whip(528, 298, -1)}

        {/* the men in flight, their shadows thrown back along the track */}
        <path d={m.shadows} fill={INK} opacity={0.9} />
        {MEN.map((man) => (
          <g key={man.at[0]} transform={`rotate(${man.lean} ${man.at[0]} ${man.at[1]})`}>
            <Man at={man.at} s={man.s} cap={man.cap} pose={man.back ? 'run-look-back' : 'run'} />
          </g>
        ))}

        {/* the animals, pursuing them in triumph */}
        <ChargingCow at={[196, 324]} s={0.72} />
        <Pig at={[276, 334]} s={0.46} pose="skip" />
        <path d="M290 300C310 296 350 296 372 300C350 304 310 304 290 300Z" fill={INK} />
        <Horse at={[330, 300]} s={0.78} who="boxer" pose="charge" headDown={8} />
        <Dog at={[452, 316]} s={0.92} />
        <Dog at={[420, 332]} s={0.88} />
      </g>
    </>
  )
}

export const theRebellion: LinocutArt = { width: W, height: H, Draw: TheRebellion }
