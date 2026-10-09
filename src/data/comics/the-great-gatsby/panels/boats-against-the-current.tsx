import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  type Rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type Pose } from './people'

/**
 * Chapter IX: "Boats against the current", the twelfth and last moment in the
 * guide's timeline: Nick's last night, on the beach below Gatsby's house.
 * Every detail is from the held edition (src/data/full-texts/the-great-gatsby.ts):
 *
 * - "On the last night ... I went over and looked at that huge incoherent
 *   failure of a house once more. On the white steps an obscene word,
 *   scrawled by some boy with a piece of brick, stood out clearly in the
 *   moonlight, and I erased it". So the house stands over its lawn, cut as
 *   "Gatsby's death" cuts it by day (./gatsbys-death.tsx): the square tower
 *   and its spire at one end, the steep roof, the arched windows, a thin
 *   beard of ivy, and the white steps, pale in the moonlight and clean. Nick
 *   has rubbed the word out, and it is never drawn, in any form.
 * - "Gatsby's house was still empty when I left ... the grass on his lawn had
 *   grown as long as mine." So every window is dark, and the lawn is long
 *   grass down to the sand.
 * - "Then I wandered down to the beach and sprawled out on the sand"; "as I
 *   sat there brooding on the old, unknown world". So Nick (the kit's 'nick')
 *   sits on the sand, leaning back on his hands, one knee up, his face lifted
 *   to the water: a small black figure on the pale beach, his head against
 *   the moon's path. The moon is behind him over the water, so his shadow,
 *   cut in a few short strokes, lies on the sand under him and past his
 *   feet. (The alt text first said it fell "towards us"; at panel size it
 *   reads as a shadow lying beside him, and the alt now says so.)
 * - "Most of the big shore places were closed now and there were hardly any
 *   lights except the shadowy, moving glow of a ferryboat across the Sound.
 *   And as the moon rose higher the inessential houses began to melt away".
 *   So the moon stands high, its path laid down the water; across the water
 *   the houses are dark against the paler sky at the horizon, their outlines
 *   broken as if melting into the trees; and the one light is the
 *   ferryboat's, a soft glow cut in paper, gliding in from the right as the
 *   plate arrives (lc-drift-r).
 *
 * THE GREEN LIGHT. "I thought of Gatsby's wonder when he first picked out the
 * green light at the end of Daisy's dock." Nick thinks of it; the text gives
 * that night no light but the ferryboat's, and the Buchanans have gone away.
 * So across the bay a dock runs out into the water with its lamp dark. Were
 * it lit, it would be cut in paper, a bright point with its rays, and never
 * printed red: the print's one spot colour is red, but the novel's light is
 * green, and a red light by the water would read as something else.
 *
 * No red is used in this print. The night has nothing red in it, and a small
 * red mark near water or a face reads as blood at phone width. The old island
 * that "flowered once for Dutch sailors' eyes" is in Nick's mind, not on the
 * beach, so it is not drawn; the far houses melting away is as near as the
 * print comes to it.
 *
 * Seeds: 1201 (the sky), 1202 (the water), 1203 and 1208 (the moon's halo),
 * 1204 (the grass), 1205 (the sand), 1206 (the far shore), 1207 (the
 * ferryboat's glow), 1209 (the wavelets), 1210 (the house's stone, slates and
 * spire), 1211 (the ivy).
 */

const W = 860
const H = 340
/** The moon, risen high over the Sound. */
const MOON = { x: 472, y: 60, r: 21 }
/** Where the Sound meets the far shore. */
const HORIZON = 170
/** The ferryboat across the Sound: the left end of its hull, at the waterline. */
const FERRY = { x: 676, y: 186 }
/** The dock across the bay, and the lamp at its end, dark. */
const DOCK = { x: 596, shore: HORIZON - 3, end: 180 }
/** The top of the beach: the foot of the lawn, then the water's edge. */
const BEACH = (x: number) => 226 + x * 0.034 + 2.5 * Math.sin(x / 40)
/** The terrace the house stands on, and the bank where it falls to the water. */
const TERRACE = 152
const BANK: [number, number][] = [
  [336, TERRACE],
  [360, 166],
  [398, 196],
  [440, BEACH(440)],
]

/** The house: the tower's edges and spire, the eaves, the foot of the walls. */
const HOUSE = {
  tl: 26,
  tr: 78,
  tip: [52, 16] as [number, number],
  r: 324,
  eaves: 82,
  foot: TERRACE,
}
/** The front door, centred on the white steps. */
const DOOR = { cx: 206, w: 22, top: 118 }

/**
 * "Then I wandered down to the beach and sprawled out on the sand ... as I
 * sat there brooding on the old, unknown world": Nick sits leaning back on
 * his hands, one knee up, his face lifted to the water.
 */
const NICK: Pose = {
  look: 'nick',
  head: { rot: -8 },
  body: { neck: [-16, -72], hip: [0, -10] },
  legs: {
    far: [
      [-2, -10],
      [26, -36],
      [50, -4],
    ],
    near: [
      [2, -10],
      [44, -10],
      [84, -6],
    ],
  },
  far: {
    pts: [
      [-18, -66],
      [-28, -40],
      [-36, -12],
    ],
    hand: 'mitt',
    deg: 172,
  },
  near: {
    pts: [
      [-13, -66],
      [-22, -40],
      [-29, -12],
    ],
    hand: 'mitt',
    deg: 168,
  },
}

/** Where Nick sits: his head in the moon's path, clear of the lawn's edge. */
const NICK_AT = 494

/**
 * Nick's shadow on the sand, thrown towards us by the moon behind him: cut as
 * a few ink strokes, so it reads as shade on the sand and not as a hole.
 */
let shadowCache: string | undefined
function shadow() {
  if (shadowCache) return shadowCache
  let d = ''
  for (let k = 0; k < 5; k++) {
    const y = 305 + k * 3.2
    const x0 = NICK_AT - 32 + k * 3 + (k % 2) * 4
    const x1 = NICK_AT + 78 - k * 9
    d += gouge(x0, y, x1, y + 0.5, 1.15 - k * 0.12)
  }
  shadowCache = d
  return d
}

type Marks = {
  sky: string
  halo: string
  haloRings: string
  water: string
  foam: string
  sand: string
  grass: string
  far: string
  farCuts: string
  glow: string
  courses: string
  roof: string
  spire: string
  ivy: string
  ivyStems: string
}

/** A line cut as broken dashes, for an outline that is melting away. */
function brokenLine(r: Rng, x1: number, y1: number, x2: number, y2: number) {
  const L = Math.hypot(x2 - x1, y2 - y1) || 1
  let d = ''
  let t = between(r, 0, 0.15)
  while (t < 1) {
    const e = Math.min(1, t + between(r, 4, 9) / L)
    d += gouge(x1 + (x2 - x1) * t, y1 + (y2 - y1) * t, x1 + (x2 - x1) * e, y1 + (y2 - y1) * e, 0.85)
    t = e + between(r, 2, 4.5) / L
  }
  return d
}

/** The top edge of the lawn at x: the terrace, then the bank falling to the water. */
function lawnTop(x: number) {
  if (x <= BANK[0][0]) return TERRACE
  for (let i = 0; i < BANK.length - 1; i++) {
    const [x0, y0] = BANK[i]
    const [x1, y1] = BANK[i + 1]
    if (x <= x1) return y0 + ((y1 - y0) * (x - x0)) / (x1 - x0)
  }
  return BEACH(x)
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const moonDist = (x: number, y: number) => Math.hypot(x - MOON.x, (y - MOON.y) * 1.2)
  const sky = gougeField(
    rng(1201),
    { x0: 0, x1: W, y0: 4, y1: HORIZON - 4 },
    (x, y) =>
      clamp(
        0.04 +
          0.85 * Math.exp(-(moonDist(x, y) ** 2) / (2 * 160 ** 2)) +
          0.5 * Math.exp(-((y - HORIZON + 10) ** 2) / (2 * 13 ** 2)),
      ),
    { spacing: 6, len: [24, 90], gap: [8, 26], max: 3 },
  )
  const halo = rays(rng(1203), MOON.x, MOON.y, { from: 34, to: 96, every: 9, width: 2 })
  const hr = rng(1208)
  let haloRings = ''
  for (const rad of [27, 31])
    haloRings += arcDashes(hr, MOON.x, MOON.y, rad, 0, Math.PI * 2, [6, 16], [3, 7])

  // The Sound: dark, with the moon's path laid down it, widening towards us.
  const water = gougeField(
    rng(1202),
    { x0: 300, x1: W, y0: HORIZON + 2, y1: 266 },
    (x, y) => {
      const spread = 10 + (y - HORIZON) * 0.75
      const path = clamp(1 - Math.abs(x - MOON.x) / spread)
      return clamp(0.06 + 0.95 * path ** 0.8 + 0.06 * Math.sin(x / 13 + y))
    },
    { spacing: 4.6, len: [8, 30], gap: [6, 20], max: 2.4 },
  )

  // Small breaking wavelets along the water's edge.
  const fr = rng(1209)
  let foam = ''
  for (let x = 450; x < W; x += between(fr, 16, 30)) {
    const y = BEACH(x) - 2.5
    foam += gouge(x, y, x + between(fr, 10, 22), y + between(fr, -0.5, 0.5), 1.1)
  }

  // The sand, pale in the moonlight: the wet sand darker by the water, and a
  // little grain cut into the dry sand above it.
  const sr = rng(1205)
  let sand = ''
  for (let k = 0; k < 4; k++)
    for (let x = 440 + between(sr, -20, 0); x < W; x += between(sr, 16, 40)) {
      const y = BEACH(x) + 3 + k * 3.2
      const len = between(sr, 18, 60) * (1 - k * 0.2)
      if (sr() < 0.85 - k * 0.18) sand += gouge(x, y, x + len, y + 0.6, 1 - k * 0.18)
    }
  for (let i = 0; i < 200; i++) {
    const x = between(sr, 0, W)
    const y = between(sr, BEACH(x) + 8, H - 6)
    sand += gouge(x, y, x + between(sr, 4, 11), y + between(sr, -0.4, 0.4), between(sr, 0.5, 0.8))
  }

  // "the grass on his lawn had grown as long as mine": long blades in the
  // moonlight, all down the lawn from the terrace to the sand.
  const gr = rng(1204)
  let grass = ''
  for (let i = 0; i < 170; i++) {
    const x = between(gr, -4, 430)
    const top = lawnTop(x) + 8
    const foot = BEACH(x) - 1
    if (foot - top < 6) continue
    const y = between(gr, top, foot)
    const h = between(gr, 6, 13)
    grass += gouge(x, y, x + between(gr, 1, 4), y - h, 0.7, between(gr, -0.6, 0.6))
  }

  // The far shore, where "the big shore places were closed now": low dark
  // houses among trees, their outlines broken as if melting away.
  const fs = rng(1206)
  const base = HORIZON - 4
  let far = `M300 ${HORIZON + 1}V${base}`
  let farCuts = ''
  const places: [number, number, number][] = [
    [352, 40, 13],
    [540, 46, 15],
    [664, 36, 12],
    [790, 52, 16],
  ]
  for (const [x, w, h] of places) {
    const roof = h * 0.55
    far += `L${x} ${base}V${n(base - h)}L${n(x + w * 0.2)} ${n(base - h - roof)}L${n(x + w * 0.8)} ${n(base - h - roof)}L${n(x + w)} ${n(base - h)}V${base}`
    farCuts += brokenLine(fs, x, base - h, x + w * 0.2, base - h - roof)
    farCuts += brokenLine(fs, x + w * 0.2, base - h - roof, x + w * 0.8, base - h - roof)
    farCuts += brokenLine(fs, x + w * 0.8, base - h - roof, x + w, base - h)
    farCuts += brokenLine(fs, x, base - h, x, base - 1)
    farCuts += brokenLine(fs, x + w, base - h, x + w, base - 1)
  }
  far += `L${W + 10} ${base}V${HORIZON + 1}Z`
  // trees between the houses: low dark crowns on the far shore
  for (const [cx, rad] of [
    [404, 9],
    [512, 10],
    [620, 11],
    [728, 10],
    [756, 8],
  ] as [number, number][])
    far += `M${cx - rad} ${base + 1}A${rad} ${rad * 0.8} 0 0 1 ${cx + rad} ${base + 1}Z`

  // The ferryboat's glow: short, soft rays, a shadowy light.
  const glow = rays(rng(1207), FERRY.x + 30, FERRY.y - 6, {
    from: 9,
    to: 32,
    every: 15,
    width: 1.3,
  })

  // The house's new stone, its slates and spire, and the thin ivy, cut as
  // "Gatsby's death" cuts them.
  const r = rng(1210)
  let courses = ''
  // At night the new stone is toned a little, more on the side away from the moon.
  for (let y = HOUSE.eaves + 5; y < HOUSE.foot; y += 5.5) {
    let x = HOUSE.tl + between(r, 0, 14)
    while (x < HOUSE.r) {
      const len = between(r, 14, 46)
      const away = 1 - (x - HOUSE.tl) / (HOUSE.r - HOUSE.tl)
      if (r() < 0.3 + away * 0.4) courses += gouge(x, y, x + len, y, 0.4 + away * 0.45)
      x += len + between(r, 10, 30)
    }
  }
  let roof = ''
  for (let y = 46; y < HOUSE.eaves - 3; y += 4.6) {
    const inset = ((HOUSE.eaves - y) / (HOUSE.eaves - 40)) * 22
    let x = HOUSE.tr + inset + between(r, 0, 8)
    while (x < HOUSE.r - inset) {
      const len = between(r, 14, 44)
      roof += gouge(x, y, Math.min(x + len, HOUSE.r - inset), y, 0.45 + (y - 40) / 90)
      x += len + between(r, 5, 14)
    }
  }
  let spire = ''
  for (let k = 1; k < 8; k++) {
    const y = HOUSE.tip[1] + k * 5.4
    const half = ((y - HOUSE.tip[1]) / (60 - HOUSE.tip[1])) * 31
    spire += gouge(HOUSE.tip[0] - half + 2, y, HOUSE.tip[0] + half - 2, y, 0.5 + k * 0.06)
  }
  const v = rng(1211)
  let ivy = ''
  let ivyStems = ''
  for (let k = 0; k < 5; k++) {
    let x = HOUSE.tl + 5 + k * 10 + between(v, -2, 2)
    let y = HOUSE.foot - 1
    const tall = between(v, 30, 70)
    ivyStems += `M${n(x)} ${n(y)}`
    while (y > HOUSE.foot - tall) {
      x += between(v, -3, 3)
      y -= between(v, 5, 9)
      ivyStems += `L${n(x)} ${n(y)}`
      if (v() < 0.45) ivy += gouge(x, y, x + between(v, -4, 4), y - between(v, 1.5, 3.5), 1.1)
    }
  }

  cached = {
    sky,
    halo,
    haloRings,
    water,
    foam,
    sand,
    grass,
    far,
    farCuts,
    glow,
    courses,
    roof,
    spire,
    ivy,
    ivyStems,
  }
  return cached
}

/** One window: an arched opening `w` by `h`, its top at `y`. */
function windowPath(x: number, y: number, w: number, h: number) {
  return `M${x} ${y + h}V${y + w / 2}A${w / 2} ${w / 2} 0 0 1 ${x + w} ${y + w / 2}V${y + h}Z`
}

/**
 * Gatsby's house, empty, as "Gatsby's death" cuts it by day (./gatsbys-death.tsx):
 * "a factual imitation of some Hôtel de Ville in Normandy, with a tower on one
 * side, spanking new under a thin beard of raw ivy" (Chapter I); "every arched
 * door and square tower" (Chapter V). The moon is behind the viewer's right
 * shoulder, so the new stone of the front is pale, and every window is dark.
 */
function House({ uid, m }: { uid: string; m: Marks }) {
  const cols = [96, 132, 168, 244, 280]
  return (
    <g>
      <defs>
        <clipPath id={`${uid}-front`}>
          <path
            d={`M${HOUSE.tl} ${HOUSE.foot}V60H${HOUSE.tr}V${HOUSE.eaves}H${HOUSE.r}V${HOUSE.foot}Z`}
          />
        </clipPath>
      </defs>
      {/* the walls, pale in the moonlight, and their faint courses */}
      <path
        d={`M${HOUSE.tl} ${HOUSE.foot}V60H${HOUSE.tr}V${HOUSE.eaves}H${HOUSE.r}V${HOUSE.foot}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={3}
        strokeLinejoin="round"
      />
      <g clipPath={`url(#${uid}-front)`}>
        <path d={m.courses} fill={INK} />
      </g>
      {/* the steep roof and its slates; the tower's spire */}
      <path
        d={`M${HOUSE.tr - 4} ${HOUSE.eaves}L${HOUSE.tr + 22} 40H${HOUSE.r - 22}L${HOUSE.r + 6} ${HOUSE.eaves}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={m.roof} fill={PAPER} />
      <path
        d={`M${HOUSE.tl - 5} 60L${HOUSE.tip[0]} ${HOUSE.tip[1]}L${HOUSE.tr + 5} 60Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={m.spire} fill={PAPER} />
      <path
        d={`M${HOUSE.tip[0]} ${HOUSE.tip[1]}V${HOUSE.tip[1] - 6}`}
        stroke={INK}
        strokeWidth={2.4}
      />
      <rect
        x={HOUSE.tr - 6}
        y={HOUSE.eaves - 1}
        width={HOUSE.r - HOUSE.tr + 12}
        height={4}
        fill={INK}
      />
      <rect x={HOUSE.tl - 5} y={58} width={HOUSE.tr - HOUSE.tl + 10} height={4} fill={INK} />
      <path d={`M${HOUSE.tr} 60V${HOUSE.foot}`} stroke={INK} strokeWidth={LINE.bold} />
      {/* every window dark: two floors of them, and slits up the tower */}
      <g fill={INK}>
        {cols.map((x) => (
          <path key={`u${x}`} d={windowPath(x, 90, 16, 24)} />
        ))}
        {cols.map((x) => (
          <path key={`l${x}`} d={windowPath(x, 120, 16, 26)} />
        ))}
        {[72, 106].map((y) => (
          <path key={`t${y}`} d={windowPath(HOUSE.tl + 20, y, 12, 22)} />
        ))}
        <path d={windowPath(DOOR.cx - DOOR.w / 2, DOOR.top, DOOR.w, HOUSE.foot - DOOR.top)} />
      </g>
      <g stroke={PAPER} strokeWidth={0.9} fill="none">
        {[...cols.map((x) => [x, 90, 24]), ...cols.map((x) => [x, 120, 26])].map(([x, y, h]) => (
          <path key={`g${x}-${y}`} d={`M${x + 8} ${y + 4}V${y + h}M${x} ${y + 12}H${x + 16}`} />
        ))}
      </g>
      {/* "a thin beard of raw ivy" on the tower */}
      <path d={m.ivyStems} stroke={INK} strokeWidth={1} fill="none" />
      <path d={m.ivy} fill={INK} />
      {/* "the white steps", in the moonlight */}
      <path
        d={`M${DOOR.cx - 18} ${HOUSE.foot}H${DOOR.cx + 18}L${DOOR.cx + 24} ${HOUSE.foot + 7}H${DOOR.cx - 24}ZM${DOOR.cx - 26} ${HOUSE.foot + 9}H${DOOR.cx + 26}L${DOOR.cx + 32} ${HOUSE.foot + 16}H${DOOR.cx - 32}Z`}
        fill={PAPER}
      />
    </g>
  )
}

function BoatsAgainstTheCurrent({ uid }: ArtProps) {
  const m = marks()
  let beach = `M-4 ${H + 4}V${n(BEACH(0))}`
  for (let x = 0; x <= W + 4; x += 6) beach += `L${x} ${n(BEACH(x))}`
  beach += `L${W + 4} ${H + 4}Z`
  let lawn = `M-4 ${TERRACE}`
  for (const [x, y] of BANK) lawn += `L${x} ${n(y)}`
  for (let x = BANK[3][0]; x >= -4; x -= 8) lawn += `L${x} ${n(BEACH(x) + 2)}`
  lawn += 'Z'
  return (
    <>
      <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
        <path d={m.sky} fill={PAPER} />
        <path d={m.halo} fill={PAPER} />
        <path d={m.haloRings} fill="none" stroke={PAPER} strokeWidth={1.2} />
        <circle cx={MOON.x} cy={MOON.y} r={MOON.r + 3} fill={INK} />
        <circle cx={MOON.x} cy={MOON.y} r={MOON.r} fill={PAPER} />

        {/* the Sound, and the moon's path down it */}
        <rect x={-4} y={HORIZON} width={W + 8} height={H - HORIZON} fill={INK} />
        <path d={m.water} fill={PAPER} />

        {/* the far shore, its houses closed and melting into the dark */}
        <path d={m.far} fill={INK} />
        <path d={m.farCuts} fill={PAPER} />

        {/* the dock across the bay, its lamp dark */}
        <path
          d={`M${DOCK.x - 4} ${DOCK.shore}H${DOCK.x + 4}L${DOCK.x + 7} ${DOCK.end}H${DOCK.x - 7}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1}
        />
        <path d={`M${DOCK.x + 5} ${DOCK.end}V${DOCK.end - 15}`} stroke={PAPER} strokeWidth={3.4} />
        <path d={`M${DOCK.x + 5} ${DOCK.end}V${DOCK.end - 15}`} stroke={INK} strokeWidth={1.4} />
        <path
          d={`M${DOCK.x + 2} ${DOCK.end - 15}H${DOCK.x + 8}L${DOCK.x + 7} ${DOCK.end - 21}H${DOCK.x + 3}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1}
        />

        {/* the ferryboat across the Sound, its shadowy, moving glow */}
        <g className="lc-drift-r" style={timing({ delay: 0.4, dur: 3.4 })}>
          <path d={m.glow} fill={PAPER} />
          <path
            d={`M${FERRY.x} ${FERRY.y}H${FERRY.x + 60}L${FERRY.x + 54} ${FERRY.y + 6}H${FERRY.x + 6}Z`}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1}
          />
          <path
            d={`M${FERRY.x + 12} ${FERRY.y}V${FERRY.y - 8}H${FERRY.x + 48}V${FERRY.y}Z`}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1}
          />
          <path
            d={`M${FERRY.x + 15} ${FERRY.y - 4}H${FERRY.x + 45}`}
            stroke={PAPER}
            strokeWidth={2.4}
            strokeDasharray="3.4 2"
          />
        </g>

        {/* the lawn, falling from the house to the beach */}
        <path d={lawn} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.grass} fill={PAPER} />
        <House uid={uid} m={m} />

        {/* the beach */}
        <path d={beach} fill={PAPER} />
        <path d={m.foam} fill={PAPER} />
        <path d={m.sand} fill={INK} />

        {/* his shadow, thrown towards us by the moon over the water */}
        <path d={shadow()} fill={INK} />
        {/* Nick, sprawled on the sand in the moonlight, looking out across the Sound */}
        <Person pose={NICK} at={[NICK_AT, 304]} scale={0.86} />
      </g>
    </>
  )
}

export const boatsAgainstTheCurrent: LinocutArt = {
  width: W,
  height: H,
  Draw: BoatsAgainstTheCurrent,
}
