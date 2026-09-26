import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, deg, gouge, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Benjamin,
  Cut,
  HEAD_FRAME,
  HORSE_EARS,
  HORSE_HEAD,
  Horse,
  Pig,
  hoof,
  k,
  place,
  type P,
  type Part,
} from './people'

/**
 * Chapter 9: "Boxer falls", the twenty-seventh moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "Late one evening in the summer, a sudden rumour ran round the farm that
 *   something had happened to Boxer. He had gone out alone to drag a load of
 *   stone down to the windmill." So it is evening, the sun low, and the cart
 *   behind him is loaded with stone, facing the windmill he was hauling it to.
 * - "About half the animals on the farm rushed out to the knoll where the
 *   windmill stood. There lay Boxer, between the shafts of the cart, his neck
 *   stretched out, unable even to raise his head." So he lies in harness, the
 *   cart's shafts either side of him, his neck laid along the ground and his
 *   head on the grass. His eye is cut open: he is alive, and speaks. The text
 *   adds that "A thin stream of blood had trickled out of his mouth"; that is
 *   left to the words, and there is no red anywhere near him.
 * - The windmill is being built again after the Battle of the Windmill: "They
 *   had started the rebuilding of the windmill the day after the victory
 *   celebrations were ended", and Boxer tells Clover "There is a pretty good
 *   store of stone accumulated." So its walls stand half built, courses of
 *   stone, with a pile of stone beside them.
 * - "Clover dropped to her knees at his side." So she kneels at his head, just
 *   beyond it, her own head lowered to his.
 * - "Only Clover remained, and Benjamin who lay down at Boxer's side, and,
 *   without speaking, kept the flies off him with his long tail. After about a
 *   quarter of an hour Squealer appeared, full of sympathy and concern." So
 *   this is that quarter of an hour: the other animals have gone for help,
 *   Benjamin lies along Boxer's belly with his tail swinging by Boxer's
 *   flank, and Squealer, small in the distance, comes skipping up the slope
 *   from the farm buildings.
 *
 * The animals are the shared figures of ./people.tsx, Benjamin in the kit's
 * own lying pose. Boxer fallen and Clover kneeling are poses this moment alone
 * needs, so they are made from the kit's own printed figures, clipped, tipped
 * and moved (see each below); nothing the kit draws is drawn again here, so
 * they change when the kit does. The spot colour is the low sun and the far
 * roofs, which are red in the text ("the red roofs of the farm buildings",
 * Chapter 7), and nothing else. Nothing is taken from a film, a cartoon or a
 * stage production.
 *
 * Seeds: 2701 (sky, country, knoll), 2702 (the pile of stone), 2703 (the
 * cart's load).
 */

const W = 860
const H = 340

/** The low evening sun. */
const SUN: P = [214, 100]
/** The line of the far country, beyond the knoll. */
const FAR = (x: number) => 176 + 4 * Math.sin(x / 60) + 3 * Math.sin(x / 21 + 2)
/** The crest of the knoll, falling away to the right, towards the farm. */
const KNOLL = (x: number) => 206 + Math.max(0, x - 600) * 0.12 + 3 * Math.sin(x / 37)

// ── BOXER, FALLEN ───────────────────────────────────────────────────────────
// The kit's own Boxer, lying (./people.tsx), with his neck laid forward along
// the ground and his head flat on the grass. Nothing of him is redrawn: the
// kit's lying horse is printed twice, once clipped to his body and legs, once
// clipped to his head and moved to where it lies, so the barrel, the hairy
// legs, the tail, the head, its cuts and the blaze are always the kit's. Only
// the laid-out neck, the mane cut along it and the collar are new. All in the
// kit's frame (facing right, ground y = 0); placed facing left, towards the
// windmill he was hauling the stone to.

/** HEAD_FRAME's numbers: where the kit sets a horse's head on its neck. */
function headFrame(): { x: number; y: number; rot: number; s: number } {
  const m = /translate\(([-\d.]+) ([-\d.]+)\) rotate\(([-\d.]+)\) scale\(([-\d.]+)\)/.exec(
    HEAD_FRAME,
  )
  // Fail loudly: a silent fallback would print the head in the wrong place.
  if (!m) throw new Error(`boxer-falls: HEAD_FRAME changed shape: ${HEAD_FRAME}`)
  return { x: +m[1], y: +m[2], rot: +m[3], s: +m[4] }
}
/** The poll of the fallen head, and how far the head turns from level. */
const POLL: P = [118, -24]
const LAY = 16
/** The kit's lying horse is sunk this far; its head sits on HEAD_FRAME above that. */
const SUNK = 54
/**
 * Moves the lying horse's head, as the kit draws it, to lie on the ground:
 * the head frame's own placing is undone and the fallen one put in its place.
 */
function headMove() {
  const h = headFrame()
  return `translate(${POLL[0]} ${POLL[1]}) rotate(${LAY - h.rot}) translate(${-h.x} ${-(h.y + SUNK)})`
}
/**
 * The head's own outline and ears, a little enlarged so the carved edge round
 * them is kept: the region of the kit's lying horse that is the head alone,
 * without the throat of the neck that runs on below the jaw.
 */
const HEAD_GROW = 'translate(30 8) scale(1.1) translate(-30 -8)'
const EARS_GROW = 'translate(-6 -8) scale(1.25) translate(6 8)'
/** The region of the body, tail and legs, in the lying horse's frame, leaving out the neck. */
const BODY_REGION = 'M-130 -75L30 -66L46 -58L66 -44L72 -30L72 20L-130 20Z'
/** The neck laid out along the ground, from the withers to the poll. */
const FALLEN_NECK = 'M30 -58C56 -62 86 -48 112 -34L120 -26L117 -4C96 -2 76 -4 58 -8L48 -30Z'
/** The collar, round the base of his neck. */
const COLLAR = 'M40 -58Q45 -34 58 -12'

function BoxerFallen({ at, s, uid }: { at: P; s: number; uid: string }) {
  const w = k(s)
  const h = headFrame()
  /** The head frame of the kit's lying horse. */
  const inPlace = `translate(${h.x} ${h.y + SUNK}) rotate(${h.rot}) scale(${h.s})`
  const body = `${uid}-bx-body`
  const head = `${uid}-bx-head`
  const neck: Part[] = [{ d: FALLEN_NECK }, { d: COLLAR, w: 6, sep: w(1.2) }]
  const mane =
    gouge(40, -57, 60, -58, w(0.45), w(-1)) +
    gouge(58, -56, 80, -51, w(0.45), w(-1)) +
    gouge(78, -49, 100, -40, w(0.45), w(-1))
  return (
    <g transform={place(at, s, -1)}>
      <defs>
        <clipPath id={body}>
          <path d={BODY_REGION} />
        </clipPath>
        <clipPath id={head}>
          <path d={HORSE_HEAD} transform={`${inPlace} ${HEAD_GROW}`} />
          <path d={HORSE_EARS} transform={`${inPlace} ${EARS_GROW}`} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${body})`}>
        <Horse at={[0, 0]} s={1} who="boxer" pose="lie" />
      </g>
      <Cut parts={neck} halo={w(1.8)}>
        <path d={mane} fill={PAPER} />
        <path d="M41 -52Q46 -32 58 -12" fill="none" stroke={PAPER} strokeWidth={w(0.8)} />
      </Cut>
      <g transform={headMove()}>
        <g clipPath={`url(#${head})`}>
          <Horse at={[0, 0]} s={1} who="boxer" pose="lie" />
        </g>
      </g>
    </g>
  )
}

// ── CLOVER, KNEELING ────────────────────────────────────────────────────────
// The kit's Clover, standing, tipped forward about her hind feet so that she
// comes down on her knees: the kit's figure is clipped at the ground, and
// below each knee the lower leg is laid back along the grass with its hoof.
// Her head is lowered to Boxer's with the kit's own `headDown`.

const KNEEL = 15
/** Her hind feet, the point she tips about, in the kit's frame. */
const HIND: P = [-53, 0]
/** Where her knees meet the ground once she is tipped, in the kit's frame. */
const KNEES: P[] = [
  [44, 0],
  [61, 0],
]

function CloverKneeling({ at, s, uid }: { at: P; s: number; uid: string }) {
  const w = k(s)
  const ground = `${uid}-cl-ground`
  const lower: Part[] = KNEES.flatMap(([x]) => [
    { d: `M${x + 2} -5L${x - 24} -5`, w: 11.5, sep: w(1.2) },
    { d: hoof(0), t: `translate(${x - 30} -1) rotate(90 0 -8) scale(0.8)` },
  ])
  return (
    <g transform={place(at, s, 1)}>
      <defs>
        <clipPath id={ground}>
          <rect x={-200} y={-300} width={400} height={299} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${ground})`}>
        <g transform={`rotate(${KNEEL} ${HIND[0]} ${HIND[1]})`}>
          <Horse at={[0, 0]} s={1} who="clover" headDown={42} uid={`${uid}-kneel`} />
        </g>
      </g>
      <Cut parts={lower} halo={w(1.8)} />
    </g>
  )
}

// ── BENJAMIN'S TAIL ─────────────────────────────────────────────────────────
// Benjamin is the kit's, lying, head up, alongside Boxer's belly, his rump by
// Boxer's hindquarters, where his tail swings.

/** Two short strokes beside his tail: it is swinging. */
const SWISH = 'M-60 -14Q-66 -8 -64 0M-66 -20Q-74 -12 -71 -2'

// ── THE SCENE ───────────────────────────────────────────────────────────────

type Marks = {
  rays: string
  far: string
  fields: string
  knoll: string
  grass: string
  shadow: string
  stones: string
  pile: string
  load: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(2701)
  // The evening sky: paper, the level rays of the sun cut across it in ink.
  let rays = ''
  for (let a = 150; a < 390; a += between(r, 6, 9)) {
    const ang = deg(a)
    let rad = between(r, 34, 60)
    while (rad < 700) {
      const len = between(r, 40, 110)
      const w0 = 0.3 + rad / 320
      rays += wedge(
        SUN[0] + Math.cos(ang) * rad,
        SUN[1] + Math.sin(ang) * rad,
        SUN[0] + Math.cos(ang) * (rad + len),
        SUN[1] + Math.sin(ang) * (rad + len),
        w0,
        w0 + len / 200,
      )
      rad += len + between(r, 10, 30)
    }
  }
  // The far country: a dark band of hills and hedges.
  let far = `M0 ${n(FAR(0))}`
  for (let x = 0; x <= W; x += 8) far += `L${x} ${n(FAR(x))}`
  far += `L${W} ${H}L0 ${H}Z`
  // The fields below the knoll, lit by the low sun.
  let fields = ''
  for (let y = 186; y < 232; y += 6) {
    let x = 560 + between(r, -30, 0)
    while (x < W) {
      const len = between(r, 20, 70)
      if (r() < 0.7) fields += gouge(x, y, x + len, y + between(r, -1, 1), 0.5 + (y - 186) / 60)
      x += len + between(r, 8, 24)
    }
  }
  // The knoll: its top lit by the low sun, so the grass is cut in ink on the
  // paper, a fringe of blades along the crest and short strokes below that
  // grow heavier as the ground comes towards us.
  let knoll = `M0 ${H}L0 ${n(KNOLL(0))}`
  for (let x = 0; x <= W; x += 8) knoll += `L${x} ${n(KNOLL(x))}`
  knoll += `L${W} ${H}Z`
  let grass = ''
  for (let x = 2; x < W; x += between(r, 3, 6)) {
    const top = KNOLL(x)
    grass += wedge(x, top + 3, x + between(r, 1, 4), top - between(r, 3, 9), 1.2, 0.2)
  }
  for (let y = 222; y < H; y += 5.5 + (y - 214) * 0.03) {
    const t = clamp((y - 214) / (H - 214))
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 6, 20) * (0.7 + t)
      if (r() < 0.45 + t * 0.2 && y > KNOLL(x) + 8)
        grass += gouge(x, y, x + len, y + between(r, -0.6, 0.6), 0.45 + t * 1.3)
      x += len + between(r, 12, 40) * (1.4 - t * 0.6)
    }
  }
  // The shadow the fallen horse and his friends throw on the grass.
  let shadow = ''
  for (let y = 286; y < 306; y += 3.2) {
    const f = 1 - Math.abs(y - 296) / 11
    shadow += gouge(250 - f * 30, y, 560 + f * 40, y + 0.6, 0.8 + f * 1.8)
  }
  // The windmill's walls, rising again: courses of stone, each block cut round.
  let stones = ''
  for (let y = 124, row = 0; y < 212; y += 10, row++) {
    const half = 50 + (y - 124) * 0.07
    let x = 86 - half + (row % 2 ? -7 : 0)
    while (x < 86 + half) {
      const bw = between(r, 13, 21)
      stones += `M${n(Math.max(x, 86 - half) + 1.5)} ${n(y + 1)}H${n(Math.min(x + bw, 86 + half) - 1.5)}`
      stones += `M${n(Math.min(x + bw, 86 + half))} ${n(y + 1)}V${n(y + 9)}`
      x += bw
    }
  }
  // "a pretty good store of stone accumulated", piled beside the walls.
  let pile = ''
  const pr = rng(2702)
  for (let i = 0; i < 12; i++) {
    const row = i < 5 ? 0 : i < 9 ? 1 : 2
    const cx = 150 + (i - [0, 5, 9][row]) * 15 + row * 8 + between(pr, -2, 2)
    const cy = 214 - row * 11
    const bw = between(pr, 12, 15)
    const bh = between(pr, 8, 11)
    pile += `M${n(cx - bw / 2)} ${n(cy)}L${n(cx - bw / 2 + 2)} ${n(cy - bh)}L${n(cx + bw / 2 - 1)} ${n(cy - bh + 1)}L${n(cx + bw / 2)} ${n(cy)}Z`
  }
  // The load of stone in the cart, heaped above its sides.
  let load = ''
  const lr = rng(2703)
  for (let i = 0; i < 7; i++) {
    const cx = 604 + i * 15 + between(lr, -2, 2)
    const cy = 232 - i * 3.6 + between(lr, -1, 1)
    const bw = between(lr, 12, 16)
    const bh = between(lr, 8, 12)
    load += `M${n(cx - bw / 2)} ${n(cy + 3)}L${n(cx - bw / 2 + 2)} ${n(cy - bh)}L${n(cx + bw / 2 - 1)} ${n(cy - bh - 1)}L${n(cx + bw / 2)} ${n(cy + 2)}Z`
  }
  cached = { rays, far, fields, knoll, grass, shadow, stones, pile, load }
  return cached
}

/** The cart's wheel: a hub, spokes and a rim, facing us. */
const WHEEL: P = [654, 256]
const WHEEL_R = 38
const SPOKES = (() => {
  let d = ''
  for (let a = 8; a < 360; a += 36) {
    const t = deg(a)
    d += wedge(
      WHEEL[0],
      WHEEL[1],
      WHEEL[0] + Math.cos(t) * WHEEL_R * 0.9,
      WHEEL[1] + Math.sin(t) * WHEEL_R * 0.9,
      3.4,
      2,
    )
  }
  return d
})()

function BoxerFalls({ uid }: ArtProps) {
  const m = marks()
  const sky = `${uid}-sky`
  return (
    <>
      <defs>
        <clipPath id={sky}>
          <rect x={0} y={0} width={W} height={200} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 270], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <g clipPath={`url(#${sky})`}>
          <path d={m.rays} fill={INK} />
        </g>
        <circle cx={SUN[0]} cy={SUN[1]} r={20} fill={RED} />
        <path d={m.far} fill={INK} />
        <path d={m.fields} fill={PAPER} />
        {/* the farm buildings, down the slope, their roofs red */}
        <g fill={INK}>
          <rect x={724} y={196} width={62} height={16} />
          <rect x={792} y={200} width={44} height={12} />
          <rect x={742} y={180} width={6} height={9} />
        </g>
        <g fill={RED}>
          <path d="M720 197L734 186L776 186L790 197Z" />
          <path d="M788 201L798 193L828 193L840 201Z" />
        </g>
        <path d={m.knoll} fill={PAPER} />
        <path d={m.grass} fill={INK} />
        <path d={m.shadow} fill={INK} />

        {/* the windmill, its walls half built again, and the store of stone */}
        <path
          d="M34 216L42 126L52 120L60 126L70 116L84 122L96 114L108 120L120 112L130 122L138 216Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.stones} stroke={PAPER} strokeWidth={LINE.fine} fill="none" />
        <path d={gouge(128, 128, 134, 212, 2.2)} fill={PAPER} />
        <path d={m.pile} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} strokeLinejoin="round" />

        {/* Squealer, coming up from the farm "full of sympathy and concern" */}
        <Pig
          at={[806, 262]}
          s={0.46}
          face={-1}
          kind="squealer"
          pose="skip"
          className="lc-drift-r"
          style={timing({ delay: 0.6, dur: 2.6 })}
        />

        {/* Clover, on her knees at his head */}
        <CloverKneeling at={[232, 282]} s={0.95} uid={uid} />

        {/* the cart and its load, tipped forward, the far shaft behind him */}
        <path d="M596 248L430 240" stroke={PAPER} strokeWidth={8.4} strokeLinecap="round" />
        <path d="M596 248L430 240" stroke={INK} strokeWidth={5.6} strokeLinecap="round" />
        <path d={m.load} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} strokeLinejoin="round" />
        <path
          d="M584 232L706 204L710 242L592 266Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={gouge(598, 240, 700, 216, 0.9) + gouge(600, 252, 702, 228, 0.9)} fill={PAPER} />
        <circle
          cx={WHEEL[0]}
          cy={WHEEL[1]}
          r={WHEEL_R}
          fill="none"
          stroke={PAPER}
          strokeWidth={10}
        />
        <circle cx={WHEEL[0]} cy={WHEEL[1]} r={WHEEL_R} fill="none" stroke={INK} strokeWidth={7} />
        <path d={SPOKES} fill={INK} />
        <circle
          cx={WHEEL[0]}
          cy={WHEEL[1]}
          r={7}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />

        {/* Boxer, "between the shafts of the cart, his neck stretched out" */}
        <BoxerFallen at={[470, 294]} s={1.05} uid={uid} />
        {/* the near shaft, lying along his flank to the collar */}
        <path d="M598 258L414 264" stroke={PAPER} strokeWidth={9} strokeLinecap="round" />
        <path d="M598 258L414 264" stroke={INK} strokeWidth={6} strokeLinecap="round" />

        {/* Benjamin, lying at his side, his tail keeping the flies off him */}
        <Benjamin at={[480, 322]} s={0.82} face={-1} lying />
        <g transform={place([480, 322], 0.82, -1)}>
          <path d={SWISH} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
        </g>
      </g>
    </>
  )
}

export const boxerFalls: LinocutArt = { width: W, height: H, Draw: BoxerFalls }
