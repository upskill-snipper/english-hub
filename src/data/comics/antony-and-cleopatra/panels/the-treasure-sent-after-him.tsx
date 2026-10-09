import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, n, ribbon, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type P } from './people'
import { cut, skyLines } from './light-cuts'

/**
 * Act 4, Scene 6: "The treasure sent after him", the sixteenth moment in the
 * guide's timeline. Every detail is from the scene, as the held edition
 * prints it (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Alexandria. Caesar’s camp." CAESAR: "Go forth, Agrippa, and begin the
 *   fight"; "Prove this a prosp’rous day". So it is the morning of the
 *   battle, in daylight, at a tent inside the camp's palisade, with the walls
 *   of Alexandria on the skyline. Caesar and his train have gone ("Exeunt
 *   Caesar and his Train") before the treasure comes, so he is not drawn.
 * - SOLDIER: "Antony Hath after thee sent all thy treasure, with His bounty
 *   overplus. The messenger Came on my guard, and at thy tent is now
 *   Unloading of his mules." So at Enobarbus's tent Antony's messenger, in
 *   the kit's travelling cloak, carries a chest from his laden mule to the
 *   pile already set down, and one chest stands open, heaped with gold:
 *   coins, a cup and a dish, cut in paper with the glint of light round
 *   them, because the print has no gold.
 * - ENOBARBUS: "I am alone the villain of the earth, And feel I am so most";
 *   "when my turpitude Thou dost so crown with gold! This blows my heart."
 *   So he stands alone before the gift, his head bowed over it and his hand
 *   pressed flat to his heart. The Soldier who brought the news has gone
 *   back to his post ("I must attend mine office"), and is not drawn.
 * - RED is Caesar's standards over the camp, flags too large to be anything
 *   else at phone width and far from any face or hand: it is the enemy's
 *   camp Enobarbus has deserted to.
 *
 * WHAT IS LEFT OUT. Enobarbus ends the scene resolving to "seek Some ditch
 * wherein to die". His death is never drawn or suggested, so the quotation is
 * his grief, not that line. Nothing marks the place as Egypt beyond the
 * city's own walls: the first cut set small tents along the skyline, and at
 * panel size they read as pyramids, which Alexandria never had, so the far
 * edge of the camp is a palisade. Nothing is taken from a film or stage
 * production. Seed: 1601.
 */

const W = 860
const H = 340
/** The far edge of the plain. */
const HORIZON = 254

// ── The mule, in its own frame: facing right, hooves on y 0, a man is 182 ──

const MULE_BODY =
  'M-60 -118C-40 -124 -6 -120 26 -122C38 -124 52 -140 60 -156C64 -164 70 -170 76 -168C86 -160 96 -134 100 -122C102 -116 98 -110 92 -110C84 -112 78 -122 72 -130C64 -120 54 -106 48 -94C46 -86 44 -80 42 -76C20 -70 -20 -70 -44 -76C-58 -80 -68 -92 -68 -104C-68 -110 -64 -116 -60 -118Z'
const MULE_LEGS: P[][] = [
  [
    [28, -80],
    [24, -42],
    [27, -6],
  ],
  [
    [-58, -84],
    [-58, -46],
    [-54, -6],
  ],
  [
    [38, -80],
    [41, -42],
    [38, -6],
  ],
  [
    [-48, -84],
    [-38, -46],
    [-44, -6],
  ],
]
/**
 * The long ears that make it a mule, far and near: broad at the root and
 * tapering to a rounded tip, set apart in a V. The first cut tapered them to a
 * point at both ends, and at panel size they read as two feathers stuck in
 * its head.
 */
const MULE_EARS =
  ribbon(
    [
      [61, -164],
      [55, -182],
      [47, -200],
    ],
    11,
    0.55,
    false,
  ) +
  ribbon(
    [
      [70, -166],
      [69, -186],
      [67, -206],
    ],
    12,
    0.55,
    false,
  )
const MULE_TAIL = ribbon(
  [
    [-64, -112],
    [-70, -96],
    [-74, -76],
    [-76, -52],
  ],
  7,
  0.4,
)
/** The pack: a pad across the back, a rolled bundle on it and one chest still strapped to the near side. */
const MULE_PAD = 'M-36 -116L-34 -134C-12 -138 10 -138 30 -132L30 -114C10 -118 -12 -118 -36 -116Z'
const MULE_BUNDLE =
  'M-28 -136C-30 -148 -18 -154 -4 -154C10 -154 22 -150 22 -140C22 -134 10 -132 -4 -132C-16 -132 -27 -132 -28 -136Z'
const MULE_CHEST = 'M-30 -126L22 -126L22 -88L-30 -88Z'

function hoof([x]: P): string {
  return `M${n(x - 6)} -7L${n(x + 6)} -7L${n(x + 7)} 0L${n(x - 7)} 0Z`
}

/** The laden mule, standing, facing the way `flip` turns it. */
function Mule({ at, s, flip }: { at: P; s: number; flip?: boolean }) {
  const t = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`
  const legs = MULE_LEGS.map((pts) => 'M' + pts.map(([x, y]) => `${n(x)} ${n(y)}`).join('L')).join(
    '',
  )
  const hooves = MULE_LEGS.map((pts) => hoof(pts[pts.length - 1])).join('')
  return (
    <g transform={t} strokeLinecap="round" strokeLinejoin="round">
      {/* the paper halo round the whole beast and its load */}
      <path
        d={MULE_BODY + MULE_EARS + MULE_TAIL + MULE_PAD + MULE_BUNDLE + MULE_CHEST + hooves}
        fill={PAPER}
        stroke={PAPER}
        strokeWidth={4}
      />
      <path d={legs} fill="none" stroke={PAPER} strokeWidth={13} />
      <path d={legs} fill="none" stroke={INK} strokeWidth={9} />
      <path d={MULE_BODY + MULE_EARS + MULE_TAIL + hooves} fill={INK} />
      {/* the mane and the eye, the inside of the near ear */}
      <path
        d={
          gouge(56, -150, 66, -160, 0.9) +
          gouge(48, -138, 58, -150, 0.9) +
          gouge(40, -128, 50, -140, 0.8) +
          gouge(80, -150, 86, -148, 0.9) +
          gouge(69.6, -174, 68.2, -199, 1.3, 0.4)
        }
        fill={PAPER}
      />
      {/* the pack, cut free of the body by its own paper edge */}
      <path d={MULE_PAD + MULE_BUNDLE + MULE_CHEST} fill={INK} stroke={PAPER} strokeWidth={2} />
      <path
        d={
          gouge(-26, -147, 12, -146, 1, -0.6) +
          gouge(-18, -124, -18, -90, 1.1) +
          gouge(12, -124, 12, -90, 1.1) +
          gouge(-32, -108, 24, -108, 0.9)
        }
        fill={PAPER}
      />
      {/* the girth strap under the belly */}
      <path d={gouge(0, -88, 2, -72, 1.1)} fill={PAPER} />
    </g>
  )
}

// ── The treasure ────────────────────────────────────────────────────────────

/** A closed chest on the ground at `at` (the middle of its foot), `s` its scale: banded and locked. */
function Chest({ at, s = 1 }: { at: P; s?: number }) {
  const [x, y] = at
  const box = `M${n(x - 28 * s)} ${n(y)}L${n(x - 28 * s)} ${n(y - 32 * s)}C${n(x - 24 * s)} ${n(y - 44 * s)} ${n(x + 24 * s)} ${n(y - 44 * s)} ${n(x + 28 * s)} ${n(y - 32 * s)}L${n(x + 28 * s)} ${n(y)}Z`
  return (
    <g>
      <path d={box} fill={INK} stroke={PAPER} strokeWidth={2.4} strokeLinejoin="round" />
      <path
        d={
          gouge(x - 17 * s, y - 39 * s, x - 18 * s, y - 2 * s, 1.4) +
          gouge(x + 17 * s, y - 39 * s, x + 18 * s, y - 2 * s, 1.4) +
          gouge(x - 26 * s, y - 31 * s, x + 26 * s, y - 31 * s, 1.1, 0.8)
        }
        fill={PAPER}
      />
      <rect
        x={n(x - 4.4 * s)}
        y={n(y - 26 * s)}
        width={n(8.8 * s)}
        height={n(10 * s)}
        fill={PAPER}
        stroke={INK}
        strokeWidth={0.9}
      />
    </g>
  )
}

/** The open chest: its middle, its foot, its half-width. */
const OPEN = { x: 470, y: 330, half: 50 }

/** The coins heaped in the open chest: [cx, cy, r], in a seeded heap. */
type Coin = [number, number, number]

type Marks = {
  sky: string
  ground: string
  shade: string
  coins: Coin[]
  glints: string
  tent: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1601)
  const sky = skyLines(1602, { x0: 0, x1: W, y0: 0, y1: HORIZON - 4 }, (_x, y) => 0.5 - y / 380)
  // The trodden ground of the camp: paper, scored in ink, more heavily
  // towards the front, in short broken strokes and tufts, so it reads as
  // earth and not as water (the first cut, long level cuts in a black
  // ground, read as a sea).
  let ground = ''
  for (let y = HORIZON + 3; y < H; ) {
    const t = (y - HORIZON) / (H - HORIZON)
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 4, 16) * (0.8 + t * 0.8)
      if (r() < 0.3 + t * 0.5) ground += cut(x, y, len, 0.5 + t * 1.3, between(r, -1.4, 1.4))
      // a tuft of grass, now and then
      if (r() < 0.05 + t * 0.06) {
        const tx = x + len / 2
        ground +=
          gouge(tx, y + 1, tx - 2.4, y - 5 - t * 4, 0.7) +
          gouge(tx + 1, y + 1, tx + 3.2, y - 4 - t * 4, 0.7)
      }
      x += len + between(r, 6, 26) * (1.3 - t * 0.6)
    }
    y += 3.4 + t * 2.4
  }
  // The shadows on the ground under each standing thing, cut as rows of ink.
  let shade = ''
  const pools: [number, number, number, number][] = [
    [204, 326, 40, 5],
    [OPEN.x + 6, 332, 96, 4],
    [374, 328, 34, 4],
    [566, 324, 32, 4],
    [656, 322, 36, 4],
    [770, 320, 78, 4],
  ]
  for (const [cx, cy, half, rows] of pools)
    for (let k = 0; k < rows; k++) {
      const w = half * (1 - k / (rows + 1))
      shade += cut(cx - w, cy + k * 2.4 - 3, w * 2, 1.1, between(r, -0.4, 0.4))
    }
  // The coins in the heap above the open chest's rim: the rims of coins lying
  // flat, cut in ink on the paper mound, in rows that follow its curve.
  const coins: Coin[] = []
  for (let row = 0; row < 5; row++) {
    const y = OPEN.y - 50 - row * 5
    const halfW = (OPEN.half - 12) * Math.sqrt(1 - (row / 5.4) ** 2)
    for (let x = OPEN.x - halfW + between(r, 0, 6); x < OPEN.x + halfW - 4; x += between(r, 8, 12))
      coins.push([x, y + between(r, -1, 1), between(r, 3.6, 4.8)])
  }
  // The glint of the gold: short cuts in paper on the dark of the open lid.
  let glints = ''
  for (let k = 0; k < 11; k++) {
    const a = Math.PI * 1.06 + (k / 10) * Math.PI * 0.88
    const r0 = 40
    const r1 = 40 + between(r, 9, 16)
    glints += gouge(
      OPEN.x + Math.cos(a) * r0,
      OPEN.y - 56 + Math.sin(a) * r0 * 0.9,
      OPEN.x + Math.cos(a) * r1,
      OPEN.y - 56 + Math.sin(a) * r1 * 0.9,
      1.6,
    )
  }
  // The shaded side of the tent: its canvas hatched in ink.
  let tent = ''
  for (let x = 530; x < 606; x += 5) {
    const top = 176 + (x - 530) * 0.6
    tent += gouge(x, top + 4, x + (x - 530) * 0.06, 306, 0.7 + (x - 530) / 110)
  }
  cached = { sky, ground, shade, coins, glints, tent }
  return cached
}

/** Alexandria on the skyline to the left: the wall, its towers and its gate. */
const CITY =
  'M-6 254L-6 236L14 236L14 222L32 222L32 236L74 236L74 228L82 228L82 236L118 236L118 220L140 220L140 236L176 236L176 230L190 230L190 254Z'

/** The camp's palisade along the far edge of the plain: a fence of stakes. */
const PALISADE = (() => {
  let d = ''
  for (let x = 214; x < W; x += 7) {
    const h = 9 + ((x * 7) % 5)
    d += `M${x} ${HORIZON}V${HORIZON - h}`
  }
  return d
})()

/** Enobarbus's tent: a ridge tent seen end on, its canvas paper with ink seams. */
const TENT = 'M318 312L344 176L464 118L584 176L610 312Z'
const TENT_SEAMS = 'M404 147L388 312M524 147L540 312M344 176L584 176M464 118L464 164'
/** The dark doorway, its flaps drawn back and tied. */
const DOOR = 'M410 312L422 190Q464 170 506 190L518 312Z'
const FLAPS = 'M410 312L422 190L398 254ZM518 312L506 190L530 254Z'

/** A standard of Caesar's: a pole, a crossbar and a square flag hung from it, in the spot colour. */
function Standard({ x, top, foot }: { x: number; top: number; foot: number }) {
  const flag = `M${x - 19} ${top + 11}H${x + 19}V${top + 44}L${x + 12.7} ${top + 39}L${x + 6.3} ${top + 45}L${x} ${top + 39}L${x - 6.3} ${top + 45}L${x - 12.7} ${top + 39}L${x - 19} ${top + 45}Z`
  return (
    <g>
      <path d={`M${x} ${foot}V${top}`} stroke={PAPER} strokeWidth={6.4} strokeLinecap="round" />
      <path d={`M${x} ${foot}V${top}`} stroke={INK} strokeWidth={3.6} strokeLinecap="round" />
      <path d={`M${x - 21} ${top + 10}H${x + 21}`} stroke={INK} strokeWidth={3} />
      <path d={flag} fill={RED} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <path d={`M${x - 3} ${top - 1}L${x} ${top - 9}L${x + 3} ${top - 1}Z`} fill={INK} />
    </g>
  )
}

function TreasureSentAfterHim(_props: ArtProps) {
  const m = marks()
  const { x: ox, y: oy, half } = OPEN
  return (
    <g className="lc-push" style={timing({ origin: [430, 230], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />

      {/* Alexandria on the skyline, and the camp's palisade */}
      <path d={CITY} fill={INK} />
      <path
        d={
          gouge(4, 244, 70, 244, 0.7) + gouge(86, 244, 170, 244, 0.7) + gouge(96, 254, 96, 242, 1.6)
        }
        fill={PAPER}
      />
      <path d={PALISADE} stroke={INK} strokeWidth={2.2} />
      <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.6} />

      {/* the camp ground, and the shadows on it */}
      <path d={m.ground} fill={INK} />
      <path d={m.shade} fill={INK} />

      {/* Caesar's standards over the camp */}
      <Standard x={628} top={34} foot={300} />
      <Standard x={806} top={20} foot={292} />

      {/* Enobarbus's tent */}
      <path d={TENT} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
      <path d={m.tent} fill={INK} />
      <path d={TENT_SEAMS} fill="none" stroke={INK} strokeWidth={1.6} />
      <path d={DOOR} fill={INK} />
      <path d={FLAPS} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
      <path d="M464 114V106" stroke={INK} strokeWidth={4} />

      {/* the chests set down */}
      <Chest at={[374, 330]} s={1.02} />
      <Chest at={[566, 326]} s={0.96} />
      <Chest at={[566, 290]} s={0.8} />

      {/* the open chest: its lid thrown back, dark behind the gold */}
      <path
        d={`M${ox - half + 2} ${oy - 40}L${ox - half + 6} ${oy - 108}C${ox - 20} ${oy - 118} ${ox + 20} ${oy - 118} ${ox + half - 6} ${oy - 108}L${ox + half - 2} ${oy - 40}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={2.4}
        strokeLinejoin="round"
      />
      {/* the lid's rim and its hinge, cut in paper so it reads as a lid thrown open */}
      <path
        d={`M${ox - half + 8} ${oy - 104}C${ox - 20} ${oy - 113} ${ox + 20} ${oy - 113} ${ox + half - 8} ${oy - 104}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={2.2}
      />
      <path d={m.glints} fill={PAPER} />
      {/* a dish standing up at the back of the heap, and a goblet */}
      <ellipse
        cx={ox + 22}
        cy={oy - 76}
        rx={16}
        ry={19}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.3}
      />
      <ellipse
        cx={ox + 22}
        cy={oy - 76}
        rx={8.6}
        ry={10.4}
        fill="none"
        stroke={INK}
        strokeWidth={1.1}
      />
      <path
        d={`M${ox - 38} ${oy - 98}Q${ox - 37} ${oy - 76} ${ox - 26} ${oy - 74}L${ox - 25} ${oy - 64}L${ox - 33} ${oy - 60}L${ox - 13} ${oy - 60}L${ox - 21} ${oy - 64}L${ox - 20} ${oy - 74}Q${ox - 9} ${oy - 76} ${ox - 8} ${oy - 98}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.3}
        strokeLinejoin="round"
      />
      <path d={gouge(ox - 36, oy - 92, ox - 10, oy - 92, 0.9)} fill={INK} />
      {/* the heap of coins, a paper mound with the rims of coins cut in it */}
      <path
        d={`M${ox - half + 4} ${oy - 44}C${ox - 34} ${oy - 62} ${ox - 18} ${oy - 78} ${ox} ${oy - 78}C${ox + 18} ${oy - 78} ${ox + 34} ${oy - 62} ${ox + half - 4} ${oy - 44}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.3}
        strokeLinejoin="round"
      />
      <path
        d={m.coins
          .map(
            ([cx, cy, cr]) =>
              `M${n(cx - cr)} ${n(cy)}a${n(cr)} ${n(cr * 0.42)} 0 1 0 ${n(2 * cr)} 0a${n(cr)} ${n(cr * 0.42)} 0 1 0 ${n(-2 * cr)} 0`,
          )
          .join('')}
        fill="none"
        stroke={INK}
        strokeWidth={1.1}
      />
      {/* the chest's front, over the foot of the heap */}
      <path
        d={`M${ox - half} ${oy}L${ox - half} ${oy - 46}L${ox + half} ${oy - 46}L${ox + half} ${oy}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={2.4}
        strokeLinejoin="round"
      />
      <path
        d={
          gouge(ox - half + 15, oy - 42, ox - half + 15, oy - 3, 1.5) +
          gouge(ox + half - 15, oy - 42, ox + half - 15, oy - 3, 1.5) +
          gouge(ox - half + 2, oy - 43, ox + half - 2, oy - 43, 1.4)
        }
        fill={PAPER}
      />
      <rect
        x={ox - 6}
        y={oy - 34}
        width={12}
        height={13}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
      />

      {/* the laden mule, and Antony's messenger carrying a chest to the pile */}
      <Mule at={[772, 320]} s={0.86} flip />
      <Chest at={[618, 240]} s={0.74} />
      <Person
        pose={{
          look: 'messenger',
          head: { rot: 8 },
          far: {
            pts: [
              [-4, -130],
              [10, -106],
              [26, -100],
            ],
            hand: 'grip',
            deg: -70,
          },
          near: {
            pts: [
              [5, -128],
              [18, -106],
              [30, -96],
            ],
            hand: 'grip',
            deg: -80,
          },
          legs: {
            far: [
              [-3, -70],
              [-14, -38],
              [-22, -3],
            ],
            near: [
              [3, -70],
              [12, -36],
              [16, -3],
            ],
          },
        }}
        at={[662, 322]}
        scale={1.02}
        flip
      />

      {/* Enobarbus, alone before it, his hand flat on his heart */}
      <g transform="rotate(-2.4 204 328)">
        <Person
          pose={{
            look: 'enobarbus',
            head: { rot: 26 },
            eye: 'down',
            far: {
              pts: [
                [-4, -130],
                [-9, -104],
                [-7, -80],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [5, -128],
                [17, -98],
                [12, -112],
              ],
              hand: 'open',
              deg: -64,
              thumb: -1,
            },
            legs: {
              far: [
                [-3, -70],
                [-9, -36],
                [-14, -3],
              ],
              near: [
                [3, -70],
                [6, -36],
                [9, -3],
              ],
            },
          }}
          at={[204, 328]}
          scale={1.16}
        />
      </g>
    </g>
  )
}

export const treasureSentAfterHim: LinocutArt = { width: W, height: H, Draw: TreasureSentAfterHim }
