import type { LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, gladius } from './people'

/**
 * Act 1, Scene 3: "A night of storms and portents", the fourth moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1522, src/data/full-texts/julius-caesar.ts):
 *
 * - "The same. A street." "Thunder and lightning. Enter, from opposite sides,
 *   Casca with his sword drawn". It is night ("Good even"; "it is after
 *   midnight"), so the ground of the print is ink and the light is the
 *   lightning's.
 * - "Why are you breathless, and why stare you so?"; "I ha' not since put up
 *   my sword". Casca, on the left (bearded, as the kit, ./people.tsx, tells
 *   him from the others), stares up at the sky with his mouth open, his sword
 *   still drawn and held low, its point to the ground, his free hand spread.
 * - "never till tonight, never till now, Did I go through a tempest dropping
 *   fire." Fire falls through the storm: the spot colour, each fall a burning
 *   head with a white-hot core, trailing long tails of flame and sparks,
 *   falling aslant in the wind ("the scolding winds"), so it reads as fire
 *   and never as anything else, and none of it near either man (see
 *   `fireball`).
 * - "And, thus unbraced, Casca, as you see, Have bar'd my bosom to the
 *   thunder-stone; And when the cross blue lightning seem'd to open The
 *   breast of heaven, I did present myself Even in the aim and very flash of
 *   it." Cassius, lean, ungirt (the kit's 'unbraced'), his tunic pulled open
 *   on his bare chest, faces the lightning with his arms spread and his head
 *   thrown back, as it strikes down before him, its flash cut in paper; Casca
 *   watches from behind him. The lightning is blue in the text; the print has
 *   no blue, so it is left to the words.
 * - The street is Rome's: house fronts on the left, a temple's columns on
 *   the right, lit on one side by the flash.
 *
 * Nobody else is drawn: Cicero has gone ("Goodnight then, Casca") and Cinna
 * is not yet come.
 *
 * Seeds: 5401 (sky), 5402 (flash), 5403 (ground), 5404 (fire), 5405 (walls).
 */

const W = 860
const H = 340
const STREET = 262
/** Where the lightning strikes, behind Cassius. */
const BOLT: Pt = [612, 214]

type Marks = {
  sky: string
  flash: string
  bolt: string
  branch: string
  ground: string
  walls: string
  fire: { body: string; glow: string; heads: string }
}

/** The fork of lightning, from the top of the sky down to the roofs. */
const BOLT_PTS: Pt[] = [
  [700, 4],
  [672, 46],
  [690, 60],
  [650, 108],
  [668, 120],
  [628, 168],
  [640, 176],
  [BOLT[0], BOLT[1]],
]
const BRANCH_PTS: Pt[] = [
  [650, 108],
  [610, 128],
  [618, 138],
  [578, 160],
]

/** A zigzag bolt as a filled shape, thickest at the top. */
function boltShape(pts: Pt[], w0: number, w1: number) {
  const left: Pt[] = []
  const right: Pt[] = []
  pts.forEach((p, i) => {
    const a = pts[Math.max(0, i - 1)]
    const b = pts[Math.min(pts.length - 1, i + 1)]
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1
    const v: Pt = [-(b[1] - a[1]) / L, (b[0] - a[0]) / L]
    const w = (w0 + (w1 - w0) * (i / (pts.length - 1))) / 2
    left.push([p[0] + v[0] * w, p[1] + v[1] * w])
    right.push([p[0] - v[0] * w, p[1] - v[1] * w])
  })
  return 'M' + [...left, ...right.reverse()].map(([x, y]) => `${n(x)} ${n(y)}`).join('L') + 'Z'
}

/**
 * One fall of fire, a "tempest dropping fire": a burning head falling along
 * `angle`, a white-hot core in it and a paper rim round it, and a long trail
 * of flame streaming back behind it with two thinner trails beside, sparks
 * thrown off along them. Body in RED, the rest in PAPER.
 *
 * WHY LIKE THIS (2 October 2026). Cut first as small red streaks, and then as
 * short fat flames, each fall printed as a red drop or a red pod, and at
 * panel size red drops falling from a sky read as blood, the reading this
 * site never allows. A falling fire reads as fire by its long burning trail,
 * its hot core and its sparks, and none of them may come near a figure.
 */
function fireball(r: () => number, x: number, y: number, size: number, angle: number) {
  const a = (angle * Math.PI) / 180
  const u: Pt = [Math.cos(a), Math.sin(a)]
  const v: Pt = [-u[1], u[0]]
  const at = (p: number, q: number): Pt => [x + u[0] * p + v[0] * q, y + u[1] * p + v[1] * q]
  let body = ''
  for (const [q, len, w] of [
    [0, 86, 10],
    [-4.6, 52, 4.4],
    [4.6, 46, 4],
  ] as const) {
    const pts: Pt[] = [0, 0.2, 0.4, 0.6, 0.8, 1].map((t) =>
      at(-t * len * size, (q * (0.6 + t) + Math.sin(t * 7 + q) * 1.6 * t) * size),
    )
    body += ribbon(pts, w * size, 0.75, false)
  }
  const R = 5.6 * size
  const head = `M${n(x - R)} ${n(y)}a${n(R)} ${n(R)} 0 1 0 ${n(R * 2)} 0a${n(R)} ${n(R)} 0 1 0 ${n(-R * 2)} 0Z`
  body += head
  let glow = gouge(
    x - u[0] * 3.6 * size,
    y - u[1] * 3.6 * size,
    x + u[0] * 2.4 * size,
    y + u[1] * 2.4 * size,
    1.7 * size,
  )
  for (let k = 0; k < 6; k++) {
    const p = at(-between(r, 18, 80) * size, between(r, -11, 11) * size)
    const s = between(r, 1, 1.6)
    glow += `M${n(p[0] - s)} ${n(p[1])}a${n(s)} ${n(s)} 0 1 0 ${n(s * 2)} 0a${n(s)} ${n(s)} 0 1 0 ${n(-s * 2)} 0Z`
  }
  return { body, glow, head }
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The storm sky: dark, its clouds cut in long ragged gouges that brighten
  // towards the lightning.
  const sky = gougeField(
    rng(5401),
    { x0: 0, x1: W, y0: 4, y1: 214 },
    (x, y) =>
      clamp(
        0.08 +
          Math.max(0, 1 - Math.hypot((x - 650) * 0.7, (y - 110) * 1.2) / 330) * 0.62 +
          (y < 60 ? 0.08 : 0),
      ),
    { spacing: 6, len: [30, 110], gap: [8, 34], max: 3.4 },
  )
  const flash = rays(rng(5402), BOLT[0], BOLT[1], { from: 16, to: 120, every: 7, width: 3 })
  const bolt = boltShape(BOLT_PTS, 9, 3)
  const branch = boltShape(BRANCH_PTS, 4, 1.4)
  // The wet street, lit from the flash: paper cuts on the ink, thicker near it.
  const ground = gougeField(
    rng(5403),
    { x0: 0, x1: W, y0: STREET + 4, y1: H },
    (x, y) =>
      clamp(0.1 + Math.max(0, 1 - Math.hypot((x - BOLT[0]) * 0.5, y - STREET) / 230) * 0.75),
    { spacing: 6, len: [20, 80], gap: [8, 30], max: 3 },
  )
  // The house fronts on the left: dark, the edges of their stones caught by the flash.
  const walls = gougeField(
    rng(5405),
    { x0: 0, x1: 300, y0: 116, y1: STREET - 2 },
    (x) => clamp(0.06 + (x / 300) * 0.3),
    { spacing: 7.4, len: [12, 44], gap: [12, 34], max: 1.8 },
  )
  // Every fall is kept well clear of the two men: fire beside a hand or a
  // face would read as a wound.
  const f = rng(5404)
  const falls: [number, number, number][] = [
    [404, 70, 1.1],
    [546, 34, 0.8],
    [312, 128, 0.75],
    [810, 92, 1],
    [760, 196, 0.7],
  ]
  const fire = { body: '', glow: '', heads: '' }
  for (const [x, y, s] of falls) {
    const one = fireball(f, x, y, s, 118)
    fire.body += one.body
    fire.glow += one.glow
    fire.heads += one.head
  }
  cached = { sky, flash, bolt, branch, ground, walls, fire }
  return cached
}

/**
 * The temple's corner on the right: the slope of its pediment, the beam, and
 * three columns with their capitals and bases, all lit on their left sides by
 * the flash and dark on the right.
 */
function Columns() {
  const xs = [742, 792, 842]
  return (
    <g>
      <path d="M716 112L880 62V112Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={gouge(724, 108, 870, 66, 1.4)} fill={PAPER} />
      <rect x={716} y={112} width={160} height={14} fill={PAPER} />
      <rect x={716} y={120} width={160} height={2.4} fill={INK} />
      {xs.map((x) => (
        <g key={x}>
          <rect x={x - 11} y={134} width={22} height={STREET - 146} fill={INK} />
          <rect x={x - 11} y={134} width={8} height={STREET - 146} fill={PAPER} />
          <path
            d={gouge(x, 142, x, STREET - 18, 0.8) + gouge(x + 5, 142, x + 5, STREET - 18, 0.6)}
            fill={PAPER}
          />
          {/* capital and base */}
          <rect
            x={x - 16}
            y={126}
            width={32}
            height={8}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.2}
          />
          <rect
            x={x - 15}
            y={STREET - 12}
            width={30}
            height={7}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.2}
          />
        </g>
      ))}
      <rect x={706} y={STREET - 5} width={180} height={5} fill={PAPER} />
    </g>
  )
}

function ANightOfStormsAndPortents() {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [430, 190], push: 1.035 })}>
      <path d={m.sky} fill={PAPER} />
      {/* the flash, and the lightning striking down behind Cassius */}
      <g className="lc-fade-in" style={timing({ delay: 0.5, dur: 0.4 })}>
        <path d={m.flash} fill={PAPER} />
        <path d={m.bolt + m.branch} fill={PAPER} />
      </g>

      {/* the house fronts on the left, a doorway, the roofs against the sky */}
      <path d="M-10 262V122L120 110L300 118V262Z" fill={INK} />
      <path d={m.walls} fill={PAPER} />
      <path d="M-10 122L120 110L300 118" fill="none" stroke={PAPER} strokeWidth={LINE.carve} />
      <path d="M300 118V262" stroke={PAPER} strokeWidth={LINE.carve} />
      <path
        d="M60 262V200Q60 176 86 176Q112 176 112 200V262Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.4}
      />
      {/* the temple on the right, its columns caught by the flash */}
      <Columns />

      {/* the wet street */}
      <path d={`M0 ${STREET}H${W}`} stroke={PAPER} strokeWidth={LINE.bold} />
      <path d={m.ground} fill={PAPER} />

      {/* fire falling through the storm */}
      <g className="lc-drift" style={timing({ delay: 0.1 })}>
        <path d={m.fire.heads} fill="none" stroke={PAPER} strokeWidth={2.4} />
        <path d={m.fire.body} fill={RED} />
        <path d={m.fire.glow} fill={PAPER} />
      </g>

      {/* Casca, staring up, breathless, his sword still drawn and held low */}
      <Person
        at={[206, 334]}
        scale={1.14}
        pose={{
          look: 'casca',
          head: { rot: -16 },
          mouth: 'open',
          feet: [-18, 10],
          hem: { front: 26, back: 34 },
          far: {
            pts: [
              [-4, -130],
              [-16, -110],
              [-28, -96],
            ],
            hand: 'open',
            deg: 130,
            thumb: -1,
          },
          near: {
            pts: [
              [5, -128],
              [14, -104],
              [26, -92],
            ],
            hand: 'grip',
            deg: 40,
          },
        }}
      >
        <path
          d={gladius([30, -89], 58, 50)}
          fill={PAPER}
          stroke={INK}
          strokeWidth={0.9}
          strokeLinejoin="round"
        />
      </Person>

      {/* Cassius, unbraced, facing the lightning with his chest bared and his
          arms spread: "I did present myself Even in the aim and very flash of it" */}
      <Person
        at={[462, 336]}
        scale={1.16}
        pose={{
          look: 'cassius',
          dress: 'unbraced',
          head: { rot: -14 },
          feet: [-10, 14],
          far: {
            pts: [
              [-4, -130],
              [-24, -134],
              [-42, -146],
            ],
            hand: 'open',
            deg: 204,
            thumb: 1,
          },
          near: {
            pts: [
              [5, -128],
              [26, -132],
              [46, -144],
            ],
            hand: 'open',
            deg: -24,
            thumb: -1,
          },
        }}
      >
        {/* the tunic pulled open, and the bare chest in it lit by the flash: a
            broad rounded opening set below the collar, the neck dark between
            it and the chin (a narrow pointed one read as a blade, and one
            under the chin as a white beard) */}
        <path
          d="M-3 -137C2 -139.6 10 -139.6 15 -137C16.6 -126 15.4 -112 11.4 -100C9.4 -97.6 6.6 -97.6 5 -100C1 -110 -2.4 -124 -3 -137Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.1}
        />
        <path
          d="M0.6 -127Q4 -123.4 7.6 -125.6M8.6 -125.6Q11.6 -123.4 14 -127M8 -118L8.4 -106"
          stroke={INK}
          strokeWidth={0.8}
          fill="none"
          strokeLinecap="round"
        />
      </Person>
    </g>
  )
}

export const aNightOfStormsAndPortents: LinocutArt = {
  width: W,
  height: H,
  Draw: ANightOfStormsAndPortents,
}
