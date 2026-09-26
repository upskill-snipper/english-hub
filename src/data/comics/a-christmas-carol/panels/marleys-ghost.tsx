import type { ReactElement } from 'react'

import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { ScroogeNightHead } from './scrooge-at-night'

/**
 * Stave One: "Marley's Ghost", the third moment in the guide's timeline. The
 * picture is the moment the ghost is in the room. Every detail is from the
 * text:
 *
 * - Scrooge "took off his cravat; put on his dressing-gown and slippers, and
 *   his nightcap; and sat down before the fire to take his gruel. It was a
 *   very low fire indeed". "The fireplace was an old one, built by some Dutch
 *   merchant long ago, and paved all round with quaint Dutch tiles, designed
 *   to illustrate the Scriptures." The gruel's "little saucepan" is "upon the
 *   hob". So he sits in his chair in dressing-gown and nightcap, with no
 *   cravat, by a tiled fireplace with a figure on every tile, and the
 *   saucepan stands on the hob. Later "Scrooge held on tight to his chair":
 *   his hand grips its arm.
 * - "his glance happened to rest upon a bell, a disused bell, that hung in the
 *   room". It hangs on the wall between them, still now: "The bells ceased as
 *   they had begun, together."
 * - "it came on through the heavy door, and passed into the room before his
 *   eyes. Upon its coming in, the dying flame leaped up, as though it cried, 'I
 *   know him; Marley's Ghost!'" So the ghost stands before the shut door, and
 *   the one flame in the grate stands up tall: the spot colour.
 * - "Marley in his pigtail, usual waistcoat, tights and boots; the tassels on
 *   the latter bristling, like his pigtail, and his coat-skirts, and the hair
 *   upon his head." "the folded kerchief bound about its head and chin". So
 *   the pigtail, the boot-tassels, the coat-skirts and the hair all stand out
 *   stiff, and a kerchief is bound over his head and under his chin, knotted
 *   on top. The face is the knocker's face from the approved prototype, since
 *   this is "The same face: the very same": spectacles "turned up on its
 *   ghostly forehead", and eyes "wide open" and "perfectly motionless".
 * - "His body was transparent; so that Scrooge, observing him, and looking
 *   through his waistcoat, could see the two buttons on his coat behind." So
 *   his body is a pale veil of cuts through which the door's mouldings show
 *   dark, and two buttons show through his waistcoat. His face and hands are
 *   solid, because the text looks through his body only.
 * - "The chain he drew was clasped about his middle. It was long, and wound
 *   about him like a tail; and it was made ... of cash-boxes, keys, padlocks,
 *   ledgers, deeds, and heavy purses wrought in steel." So the chain is locked
 *   round his middle with a padlock, falls across him, and trails away over
 *   the floor with each of those six things on it: the one solid thing about
 *   him.
 *
 * Safeguarding: not the jaw dropping "down upon its breast", which the text
 * gives a moment later. The kerchief is still bound, as when he comes in.
 *
 * Seeds: 303 for the room, 313 for the tiles, 323 for the veil, 333 for the
 * chimney-breast.
 */

const W = 860
const H = 340
/** Where the ghost's feet stand, and his size. */
const GHOST_AT: Pt = [528, 314]
const GHOST_SCALE = 1.06
/** The heavy door's leaf. */
const DOOR = { x0: 446, x1: 610, y0: 30, y1: 256 }

type Marks = {
  wall: string
  floor: string
  floorLight: string
  breast: string
  tiles: string
  veil: [string, number][]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(303)
  // Lit by the low fire at the left, and faintly by the ghost itself.
  const light = (x: number, y: number) => {
    const l1 = clamp(1 - Math.hypot((x - 86) * 0.8, y - 210) / 210) * 0.95
    const l2 = clamp(1 - Math.hypot((x - GHOST_AT[0]) * 0.9, y - 120) / 200) * 0.4
    return Math.max(l1, l2, 0.04)
  }
  // The wall round the door, not behind it.
  const wall =
    gougeField(r, { x0: 172, x1: DOOR.x0 - 12, y0: 4, y1: 250 }, light, { spacing: 7 }) +
    gougeField(r, { x0: DOOR.x1 + 12, x1: W, y0: 4, y1: 250 }, light, { spacing: 7 }) +
    gougeField(r, { x0: DOOR.x0 - 12, x1: DOOR.x1 + 12, y0: 4, y1: 18 }, light, { spacing: 7 })

  // Floor: dark boards with paper joints running to a vanishing point.
  let floor = ''
  const V = [470, 40]
  for (let xt = -700; xt < 1500; xt += 36) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (256 - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.35, 0.9))
      floor += wedge(
        xt + (xb - xt) * t0,
        256 + (H - 256) * t0,
        xt + (xb - xt) * t1,
        256 + (H - 256) * t1,
        0.6 + t0 * 2.2,
        0.6 + t1 * 2.2,
      )
      t0 = t1 + between(r, 0.02, 0.07)
    }
  }
  // Firelight across the boards by the hearth.
  const floorLight = gougeField(
    r,
    { x0: 0, x1: 420, y0: 264, y1: 338 },
    (x, y) => clamp(1 - Math.hypot((x - 100) * 0.7, (y - 262) * 1.8) / 250) * 0.8,
    { spacing: 6, len: [12, 44] },
  )
  const breast = gougeField(rng(333), { x0: 4, x1: 170, y0: 8, y1: 110 }, (x, y) =>
    clamp(0.55 - Math.abs(x - 86) / 300 - (110 - y) / 260),
  )

  // The Dutch tiles: each a small square with a figure scratched on it.
  const t = rng(313)
  let tiles = ''
  const tile = (x: number, y: number) => {
    const cx = x + 6.5
    const cy = y + 6.5
    tiles += `M${n(cx + between(t, -1.5, 1.5))} ${n(cy - 4)}m-1.2 0a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0 -2.4 0`
    tiles += `M${n(cx)} ${n(cy - 2.4)}L${n(cx + between(t, -1.5, 1.5))} ${n(cy + 2.5)}`
    tiles += `M${n(cx - 3)} ${n(cy + between(t, -1.5, 1))}L${n(cx + 3)} ${n(cy + between(t, -2, 0.5))}`
    tiles += `M${n(cx)} ${n(cy + 2.5)}l-2.5 2.5M${n(cx)} ${n(cy + 2.5)}l2.5 2.5`
    if (t() < 0.5) tiles += `M${n(x + 2)} ${n(y + 11)}q${n(4.5)} -2.5 9 0`
  }
  for (let y = 132; y < 250; y += 14) {
    tile(16, y)
    tile(30, y)
    tile(130, y)
    tile(144, y)
  }
  for (let x = 44; x < 128; x += 14) {
    tile(x, 132)
    tile(x, 146)
  }

  // The veil of the body: fine upright cuts, broken like a shimmer, heavier
  // towards his outline so that the middle of him is the most see-through.
  const v = rng(323)
  const cols: string[] = ['', '', '']
  for (let x = -70; x < 70; x += 3) {
    const k = Math.abs(x) > 34 ? 2 : Math.abs(x) > 16 ? 1 : 0
    let y = -226 + between(v, -6, 0)
    while (y < 2) {
      const len = between(v, 18, 60)
      if (k > 0 || v() < 0.55) cols[k] += `M${n(x + between(v, -0.4, 0.4))} ${n(y)}V${n(y + len)}`
      y += len + between(v, 3, 9) + (k === 0 ? 6 : 0)
    }
  }
  const veil: [string, number][] = [
    [cols[0], 0.8],
    [cols[1], 1.05],
    [cols[2], 1.35],
  ]
  cached = { wall, floor, floorLight, breast, tiles, veil }
  return cached
}

// ── Marley's Ghost, facing us, in his own frame: feet at (0, 0), about 275 tall ──

/** An arm swung a little out from the shoulder, as the bristling rest of him is. */
const ARM_L = 'rotate(9 -34 -200)'
const ARM_R = 'rotate(-9 34 -200)'

/** The parts the veil fills: coat, waistcoat, sleeves and cuffs, tights, boots. */
const BODY: [string, string?][] = [
  [
    'M-10 -208L-34 -203C-38 -190 -34 -170 -30 -156C-34 -132 -42 -110 -53 -89L-45 -94L-41 -83L-33 -91L-27 -82L-20 -90L-16 -87C-16 -110 -16 -130 -14 -150C-13 -170 -12 -190 -10 -208Z',
  ],
  [
    'M10 -208L34 -203C38 -190 34 -170 30 -156C34 -132 42 -110 53 -89L45 -94L41 -83L33 -91L27 -82L20 -90L16 -87C16 -110 16 -130 14 -150C13 -170 12 -190 10 -208Z',
  ],
  ['M-10 -208L10 -208L15 -150L16 -126L8 -121L0 -125L-8 -121L-16 -126L-15 -150Z'],
  [
    'M-34 -203C-42 -198 -46 -184 -47 -170L-49 -150L-34 -150L-33 -170C-32 -180 -32 -190 -30 -196Z',
    ARM_L,
  ],
  ['M34 -203C42 -198 46 -184 47 -170L49 -150L34 -150L33 -170C32 -180 32 -190 30 -196Z', ARM_R],
  ['M-52 -152L-32 -152L-33 -139L-51 -139Z', ARM_L],
  ['M52 -152L32 -152L33 -139L51 -139Z', ARM_R],
  ['M-16 -122L-2 -122L-3 -86L-5 -50L-16 -50L-17 -86Z'],
  ['M16 -122L2 -122L3 -86L5 -50L16 -50L17 -86Z'],
  ['M-18 -53L-10 -45L-3 -53L-3 -8C-3 -4 -6 0 -10 0L-29 0C-31 -3 -29 -6 -23 -7L-18 -9Z'],
  ['M18 -53L10 -45L3 -53L3 -8C3 -4 5 0 9 0L25 0C28 -3 27 -6 22 -7L18 -9Z'],
  ['M-8 -216H8V-205H-8Z'],
]

/** The hands, solid paper: fingers spread and hanging, as a shade's might. */
const HANDS: [string, string][] = [
  [
    'M-49 -139C-51 -131 -51 -123 -48 -116L-46 -122L-45 -113L-43 -121L-41 -113L-40 -121L-38 -116C-36 -123 -36 -131 -35 -139Z',
    ARM_L,
  ],
  [
    'M49 -139C51 -131 51 -123 48 -116L46 -122L45 -113L43 -121L41 -113L40 -121L38 -116C36 -123 36 -131 35 -139Z',
    ARM_R,
  ],
]

/** The boot-tassels, bristling. */
const TASSELS =
  gouge(-10, -45, -18, -34, 1.2) +
  gouge(-10, -45, -12, -32, 1.2) +
  gouge(-10, -45, -4, -33, 1.2) +
  gouge(10, -45, 18, -34, 1.2) +
  gouge(10, -45, 12, -32, 1.2) +
  gouge(10, -45, 4, -33, 1.2)

/**
 * The head, in the prototype's frame (the knocker face was drawn at 211, 214
 * there), placed on the body with HEAD_PLACE. Line weights are set for the
 * 0.5 scale, so that none falls below a hairline once placed.
 */
const HEAD_PLACE = 'translate(0 -236) scale(0.5) translate(-211 -214)'
const FACE =
  'M211 168C230 168 243 180 245 198C246 212 243 226 238 236C233 247 224 256 211 257C198 256 189 247 184 236C179 226 176 212 177 198C179 180 192 168 211 168Z'
/** The kerchief: a band over the crown, down both cheeks and under the chin. */
const KERCHIEF =
  'M211 156C234 156 249 176 249 208C249 238 236 268 211 268C186 268 173 238 173 208C173 176 188 156 211 156ZM211 166C193 166 183 182 183 208C183 232 193 258 211 258C229 258 239 232 239 208C239 182 229 166 211 166Z'
/**
 * Hair standing out from under the kerchief and rising, "curiously stirred,
 * as if by breath or hot air": wavering strands, each lifting and drifting
 * the same way, as the prototype's knocker face has them.
 */
const HAIR: Pt[][] = [
  [178, 182, -1],
  [175, 198, -1],
  [175, 214, -1],
  [246, 182, 1],
  [249, 198, 1],
  [249, 214, 1],
  [192, 162, -0.4],
  [230, 162, 0.4],
].map(([x, y, side]) => {
  const pts: Pt[] = []
  for (let k = 0; k <= 16; k++) {
    const t = k / 16
    pts.push([x + side * 22 * t + Math.sin(t * Math.PI * 2 + x) * 4 * t, y - 40 * t])
  }
  return pts
})
/** The kerchief's knot on top of his head, and its two short ends. */
const KNOT = [
  'M206 156L190 142C188 136 194 130 200 134L212 150Z',
  'M216 156L232 140C236 136 242 142 238 148L220 160Z',
]
/** The pigtail, standing out stiff behind his head. */
const PIGTAIL: Pt[] = [
  [244, 232],
  [262, 230],
  [282, 226],
  [300, 222],
  [314, 220],
]

/** Diagonal hatching for the kerchief, clipped to it. */
const CLOTH_HATCH = Array.from(
  { length: 30 },
  (_, i) => `M${160 + i * 5} 150L${130 + i * 5} 276`,
).join('')

function MarleyHead({ uid }: { uid: string }) {
  return (
    <g transform={HEAD_PLACE}>
      <defs>
        <clipPath id={`${uid}-cloth`}>
          <path d={KERCHIEF} clipRule="evenodd" />
        </clipPath>
      </defs>
      <g stroke={INK} strokeWidth={3} strokeLinejoin="round">
        {/* the pigtail and its bow, behind the head */}
        <path d={ribbon(PIGTAIL, 13, 0.5, false)} fill={PAPER} />
        <path d="M250 232C240 218 256 214 258 228C262 214 276 220 262 236Z" fill={PAPER} />
        <g fill={PAPER}>
          {HAIR.map((pts) => (
            <path key={pts[0].join()} d={ribbon(pts, 7, 0.8)} />
          ))}
        </g>
      </g>
      <path d={FACE} fill={PAPER} />
      <path d={KERCHIEF} fill={PAPER} fillRule="evenodd" stroke={INK} strokeWidth={3} />
      {/* the kerchief's cloth, cut in fine diagonal hatching so it reads apart from his face */}
      <g clipPath={`url(#${uid}-cloth)`}>
        <path d={CLOTH_HATCH} stroke={INK} strokeWidth={2} />
      </g>
      <g fill={PAPER} stroke={INK} strokeWidth={3} strokeLinejoin="round">
        {KNOT.map((d) => (
          <path key={d} d={d} />
        ))}
        <circle cx={211} cy={155} r={8} />
      </g>
      {/* the folds of the kerchief */}
      <path
        d="M179 196Q176 214 183 238M243 196Q246 214 239 238M196 264Q211 267 226 264M198 160Q211 158 224 160"
        fill="none"
        stroke={INK}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* spectacles turned up on the forehead */}
        <circle cx={199} cy={182.5} r={7} strokeWidth={2.8} />
        <circle cx={223} cy={182.5} r={7} strokeWidth={2.8} />
        <path
          d="M206 182.5Q211 179.5 216 182.5M192 183L185 185M230 183L237 185"
          strokeWidth={2.4}
        />
        {/* brows, lids wide open, the nose, the set mouth */}
        <path d="M190 196.5Q198 194 206 195.5M216 195.5Q224 194 232 196.5" strokeWidth={3.4} />
        <path d="M189 205Q198.5 197 208 205M214 205Q223.5 197 233 205" strokeWidth={4.4} />
        <path d="M190 206Q198.5 211.5 207 206M215 206Q223.5 211.5 232 206" strokeWidth={2.2} />
        <path d="M211 205L209.5 228" strokeWidth={2.8} />
        <path
          d="M204.5 230Q207 227.5 209.5 230.5Q212 232 214 230.5Q216 228 218 230"
          strokeWidth={2.4}
        />
        <path d="M201 241Q211 242 221 241" strokeWidth={3.6} />
        <path
          d="M199 234Q196 240 199.5 246M223 234Q226 240 222.5 246M205 251Q211 252.5 217 251"
          strokeWidth={2}
        />
      </g>
      {/* the eyes turned on Scrooge, and fixed there */}
      <circle cx={195.5} cy={204.4} r={3.9} fill={INK} />
      <circle cx={220.5} cy={204.4} r={3.9} fill={INK} />
    </g>
  )
}

// ── The chain ──────────────────────────────────────────────────────────────

/** Points every `step` units along a polyline, with the direction there. */
function along(pts: Pt[], step: number): { p: Pt; ang: number }[] {
  const out: { p: Pt; ang: number }[] = []
  let carry = 0
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i]
    const [x1, y1] = pts[i + 1]
    const L = Math.hypot(x1 - x0, y1 - y0)
    const ang = Math.atan2(y1 - y0, x1 - x0)
    let d = carry
    while (d < L) {
      out.push({ p: [x0 + ((x1 - x0) * d) / L, y0 + ((y1 - y0) * d) / L], ang })
      d += step
    }
    carry = d - L
  }
  return out
}

/** A chain of links along a path: flat links as paper rings, edge-on links as bars. */
function chainPath(pts: Pt[]) {
  let rings = ''
  let bars = ''
  let holes = ''
  along(pts, 7.4).forEach(({ p: [x, y], ang }, i) => {
    const c = Math.cos(ang)
    const s = Math.sin(ang)
    if (i % 2 === 0) {
      const pt = (u: number, v: number) => `${n(x + u * c - v * s)} ${n(y + u * s + v * c)}`
      rings += `M${pt(-6, 0)}C${pt(-6, -4.6)} ${pt(6, -4.6)} ${pt(6, 0)}C${pt(6, 4.6)} ${pt(-6, 4.6)} ${pt(-6, 0)}Z`
      holes += `M${pt(-3.4, 0)}C${pt(-3.4, -1.7)} ${pt(3.4, -1.7)} ${pt(3.4, 0)}C${pt(3.4, 1.7)} ${pt(-3.4, 1.7)} ${pt(-3.4, 0)}Z`
    } else {
      bars += wedge(x - c * 5.4, y - s * 5.4, x + c * 5.4, y + s * 5.4, 2.6, 2.6)
    }
  })
  return { rings, bars, holes }
}

/** Round the middle, and the long tail falling across him and away over the floor. */
const WAIST: Pt[] = Array.from({ length: 25 }, (_, i) => {
  const a = Math.PI * (i / 24)
  return [-40 * Math.cos(a), -134 + 7 * Math.sin(a)] as Pt
})
const TAIL: Pt[] = [
  [-38, -132],
  [-44, -112],
  [-40, -92],
  [-26, -74],
  [-6, -62],
  [16, -54],
  [34, -40],
  [42, -22],
  [52, -6],
  [70, 2],
  [100, 4],
  [130, -2],
  [160, -6],
  [196, -2],
  [230, 4],
  [262, -2],
  [300, -8],
  [330, -4],
]

/** The things on the chain, each small and cut in paper, drawn centred on (0, 0). */
function CashBox() {
  return (
    <g>
      <path d="M-12 -8H12V9H-12Z" fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d="M-12 -3H12M-6 -8V9M6 -8V9" stroke={INK} strokeWidth={1.2} />
      <path d="M-1.6 1.5a1.6 1.6 0 1 1 3.2 0L1 5.5H-1Z" fill={INK} />
    </g>
  )
}
function Padlock() {
  return (
    <g>
      <path d="M-5 -3V-7.5A5 5 0 0 1 5 -7.5V-3" fill="none" stroke={INK} strokeWidth={5} />
      <path d="M-5 -3V-7.5A5 5 0 0 1 5 -7.5V-3" fill="none" stroke={PAPER} strokeWidth={2.4} />
      <path d="M-7.5 -3.5H7.5V8H-7.5Z" fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d="M-1.4 1a1.4 1.4 0 1 1 2.8 0L0.9 5H-0.9Z" fill={INK} />
    </g>
  )
}
function Key() {
  return (
    <g>
      <path
        d="M-4 0H14M10 0V5M14 0V4"
        fill="none"
        stroke={INK}
        strokeWidth={4.6}
        strokeLinecap="round"
      />
      <circle cx={-8} cy={0} r={5} fill="none" stroke={INK} strokeWidth={5.4} />
      <path
        d="M-4 0H14M10 0V5M14 0V4"
        fill="none"
        stroke={PAPER}
        strokeWidth={2.2}
        strokeLinecap="round"
      />
      <circle cx={-8} cy={0} r={5} fill="none" stroke={PAPER} strokeWidth={2.4} />
    </g>
  )
}
function Ledger() {
  return (
    <g>
      <path d="M-13 -8H13V9H-13Z" fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d="M-13 -8H-7V9H-13Z" fill={INK} />
      <path d="M-4 -3H10M-4 1H10M-4 5H6" stroke={INK} strokeWidth={0.9} />
      <path d="M-1 -8V9" stroke={INK} strokeWidth={1.2} />
    </g>
  )
}
function Deed() {
  return (
    <g>
      <path d="M-12 -7L10 -9L12 7L-10 9Z" fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d="M-7 -3L6 -4.4M-7 1L7 -0.4M-6 5L2 4.2" stroke={INK} strokeWidth={0.9} />
      <circle cx={7} cy={4.5} r={3} fill={INK} />
      <path d="M6 7L4 12M8 7L10 12" stroke={INK} strokeWidth={1.3} />
    </g>
  )
}
/** "heavy purses wrought in steel": a bag of cut rings, bright on the dark. */
function Purse() {
  return (
    <g>
      <path
        d="M-6 -9H6L4 -5C11 -2 13 5 11 9C6 13 -6 13 -11 9C-13 5 -11 -2 -4 -5Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.4}
      />
      <path d="M-5 -5H5" stroke={INK} strokeWidth={1.6} />
      <path
        d="M-8 1h3M-2 1h3M4 1h3M-5 5h3M1 5h3M-8 8.5h3M-2 8.5h3M4 8.5h3M-4 -2h3M2 -2h3"
        fill="none"
        stroke={INK}
        strokeWidth={0.9}
      />
    </g>
  )
}

/** Each thing's place on the chain, in the ghost's frame, and its tilt. */
const ON_CHAIN: [() => ReactElement, number, number, number][] = [
  [Padlock, 0, -128, 0],
  [Key, -45, -104, 80],
  [CashBox, -12, -66, 22],
  [Ledger, 40, -30, 50],
  [Purse, 84, 6, -6],
  [Deed, 132, -4, -8],
  [CashBox, 178, -6, 4],
  [Key, 214, 2, 10],
  [Ledger, 248, 0, -6],
  [Padlock, 286, -8, 0],
  [Purse, 318, -4, 8],
]

function Chain() {
  const waist = chainPath(WAIST)
  const tail = chainPath(TAIL)
  const rings = waist.rings + tail.rings
  const bars = waist.bars + tail.bars
  return (
    <g>
      {/* an ink edge under every link, to lift it off the veil and the boards */}
      <g fill={INK} stroke={INK} strokeWidth={2.4} strokeLinejoin="round">
        <path d={rings} />
        <path d={bars} />
      </g>
      <path d={bars} fill={PAPER} />
      <path d={rings} fill={PAPER} />
      <path d={waist.holes + tail.holes} fill={INK} />
      {ON_CHAIN.map(([Thing, x, y, rot], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${rot}) scale(1.12)`}>
          <Thing />
        </g>
      ))}
    </g>
  )
}

/** The heavy door's six moulded panels. */
const DOOR_PANELS: [number, number, number, number][] = [
  [460, 42, 60, 76],
  [536, 42, 60, 76],
  [460, 132, 60, 66],
  [536, 132, 60, 66],
  [460, 212, 60, 32],
  [536, 212, 60, 32],
]
function DoorPanels({ single = false }: { single?: boolean }) {
  return (
    <>
      {DOOR_PANELS.map(([x, y, w, h]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width={w} height={h} />
          {!single && <rect x={x + 6} y={y + 6} width={w - 12} height={h - 12} strokeWidth={1} />}
        </g>
      ))}
    </>
  )
}

function Ghost({ uid }: { uid: string }) {
  const m = marks()
  const clip = `${uid}-veil`
  // The door, seen from inside the ghost's own frame.
  const back = `scale(${n(1 / GHOST_SCALE)}) translate(${-GHOST_AT[0]} ${-GHOST_AT[1]})`
  return (
    <g transform={`translate(${GHOST_AT[0]} ${GHOST_AT[1]}) scale(${GHOST_SCALE})`}>
      <defs>
        <clipPath id={clip}>
          {BODY.map(([d, tf]) => (
            <path key={d} d={d} transform={tf} />
          ))}
        </clipPath>
      </defs>
      {/* the veil of the body, and the door showing dark through it */}
      <g clipPath={`url(#${clip})`}>
        {m.veil.map(([d, w]) => (
          <path key={w} d={d} stroke={PAPER} strokeWidth={w} />
        ))}
        <g transform={back} fill="none" stroke={INK} strokeWidth={3.2}>
          <DoorPanels single />
        </g>
        {/* "the two buttons on his coat behind", seen through the waistcoat */}
        <circle cx={-5.5} cy={-162} r={3.4} fill={PAPER} stroke={INK} strokeWidth={1.3} />
        <circle cx={5.5} cy={-162} r={3.4} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      </g>
      {/* his outline, cut bright round every part */}
      <g fill="none" stroke={PAPER} strokeWidth={LINE.bold} strokeLinejoin="round">
        {BODY.map(([d, tf]) => (
          <path key={d} d={d} transform={tf} />
        ))}
      </g>
      {/* the waistcoat's pocket flaps */}
      <path d="M-15 -142L-5 -140M15 -142L5 -140" stroke={INK} strokeWidth={1.6} />
      <path d={TASSELS} fill={PAPER} />
      <g fill={PAPER} stroke={INK} strokeWidth={1.2}>
        {HANDS.map(([d, tf]) => (
          <path key={d} d={d} transform={tf} />
        ))}
      </g>
      <MarleyHead uid={uid} />
      <Chain />
    </g>
  )
}

function MarleysGhost({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [GHOST_AT[0], 170], push: 1.035 })}>
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={250} width={W} height={6} fill={PAPER} />
        <rect x={0} y={253} width={W} height={1.2} fill={INK} />
        <path d={m.floorLight} fill={PAPER} />
        <path d={m.floor} fill={PAPER} />

        {/* the heavy door, shut and double-locked, that he came through */}
        <path
          d={`M${DOOR.x0 - 12} 256V${DOOR.y0 - 10}H${DOOR.x1 + 12}V256`}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />
        <path
          d={`M${DOOR.x0 - 6} 256V${DOOR.y0 - 4}H${DOOR.x1 + 6}V256`}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <rect
          x={DOOR.x0}
          y={DOOR.y0}
          width={DOOR.x1 - DOOR.x0}
          height={DOOR.y1 - DOOR.y0}
          fill={INK}
        />
        <g fill="none" stroke={PAPER} strokeWidth={LINE.carve}>
          <DoorPanels />
        </g>
        <circle cx={600} cy={166} r={4.5} fill={PAPER} />
        <path d="M596 180h8v4h-8z" fill={PAPER} />

        {/* the disused bell, still now */}
        <path d="M398 6V18" stroke={PAPER} strokeWidth={LINE.bold} />
        <path
          d="M392 18C404 20 392 23 404 25C392 27 404 30 392 32"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.6}
        />
        <path
          d="M398 32C390 32 386 40 386 48L382 56H414L410 48C410 40 406 32 398 32Z"
          fill={PAPER}
        />
        <path
          d="M386 50H410M390 42C392 38 394 36 397 35"
          stroke={INK}
          strokeWidth={1.2}
          fill="none"
        />
        <circle cx={398} cy={59} r={2.6} fill={PAPER} />

        {/* the old Dutch fireplace, paved round with tiles */}
        <rect x={0} y={4} width={172} height={250} fill={INK} />
        <path d={m.breast} fill={PAPER} />
        <rect x={2} y={112} width={168} height={8} fill={PAPER} />
        <rect x={6} y={120} width={160} height={3} fill={PAPER} />
        <rect x={12} y={126} width={148} height={128} fill={PAPER} />
        <path d={m.tiles} fill="none" stroke={INK} strokeWidth={0.9} />
        <path
          d="M12 126H160M12 140H160M12 154H160M12 168H44M128 168H160M12 182H44M128 182H160M12 196H44M128 196H160M12 210H44M128 210H160M12 224H44M128 224H160M12 238H44M128 238H160M16 126V254M30 126V254M44 126V254M58 126V160M72 126V160M86 126V160M100 126V160M114 126V160M128 126V254M142 126V254M156 126V254"
          fill="none"
          stroke={INK}
          strokeWidth={1.1}
        />
        <rect x={44} y={160} width={84} height={94} fill={INK} />
        {/* the hob, and the little saucepan of gruel upon it */}
        <rect x={104} y={226} width={24} height={4} fill={PAPER} />
        <path d="M108 226L110 214H124L126 226Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
        <path d="M124 216L136 212" stroke={PAPER} strokeWidth={2} />
        {/* a very low fire, and the dying flame leaping up */}
        <path d="M54 250V238M100 250V238M54 238H100M54 244H100" stroke={PAPER} strokeWidth={1.8} />
        <g fill={RED}>
          <path d="M58 238C58 233 64 231 68 234C71 230 79 231 81 234C85 232 92 234 94 238Z" />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.9, delay: 0.3 })}
            d="M70 234C64 222 70 208 76 196C77 186 74 178 78 170C82 182 88 190 86 204C92 196 92 188 91 182C98 196 96 216 84 234Z"
          />
        </g>
        <rect x={0} y={254} width={176} height={8} fill={PAPER} />
        <rect x={0} y={262} width={176} height={2} fill={INK} />

        {/* Scrooge's chair: a high wing chair, side on */}
        <path
          d="M150 122C150 110 160 104 172 104C184 104 194 112 194 124L198 250L150 252Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d="M190 120C204 118 216 126 220 142L216 190L194 196Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={gouge(160, 124, 162, 240, 1.4) + gouge(170, 116, 174, 244, 1)} fill={PAPER} />
        <path
          d="M168 238H318C328 238 332 244 330 252L170 258Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d="M168 258L330 254V270L168 272Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d="M176 272V300M318 270V298" stroke={INK} strokeWidth={7} strokeLinecap="round" />
        <path d="M176 272V300M318 270V298" stroke={PAPER} strokeWidth={1.2} strokeDasharray="4 6" />

        {/* Scrooge in dressing-gown, slippers and nightcap */}
        <path
          d="M236 194C222 202 214 224 214 250L216 262L338 262C342 272 344 284 342 294L374 294C372 280 368 266 364 254C362 244 356 238 348 236L308 234C308 222 306 210 300 200C294 194 284 190 272 190L250 190Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path
          d={
            gouge(226, 214, 222, 254, 1.4, 1.2) +
            gouge(238, 206, 236, 236, 1) +
            gouge(350, 262, 356, 290, 1.2, -0.8) +
            gouge(292, 212, 296, 232, 0.9)
          }
          fill={PAPER}
        />
        {/* stockinged shins and slippers */}
        <path d="M348 294V304M364 294V304" stroke={INK} strokeWidth={7} />
        <path
          d="M340 302H378C386 302 390 306 388 312H340Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        {/* the chair's rolled arm, and his hand holding on to it tight */}
        <path
          d="M190 216H304C316 214 326 220 326 230C326 238 320 242 312 242H190Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <circle cx={313} cy={229} r={7} fill="none" stroke={PAPER} strokeWidth={1.4} />
        <path d={gouge(204, 226, 292, 226, 1)} fill={PAPER} />
        <path
          d="M262 198C258 210 262 220 272 224L300 216"
          fill="none"
          stroke={PAPER}
          strokeWidth={16.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M262 198C258 210 262 220 272 224L300 216"
          fill="none"
          stroke={INK}
          strokeWidth={13}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d={gouge(268, 212, 290, 218, 1)} fill={PAPER} />
        <path
          d="M298 208C304 204 314 205 318 211L322 220C322 224 318 226 314 226L302 224Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.2}
        />
        <path d="M306 210L310 222M312 211L316 222" stroke={INK} strokeWidth={0.9} />
        {/* his head, lit by the leaping flame, eyes wide */}
        <g transform="translate(214 98) scale(0.4)">
          <ScroogeNightHead uid={uid} seed={31} wide />
        </g>

        <g className="lc-fade-in" style={timing({ delay: 0.5, dur: 1.6 })}>
          <Ghost uid={uid} />
        </g>
      </g>
    </>
  )
}

export const marleysGhost: LinocutArt = { width: W, height: H, Draw: MarleysGhost }
