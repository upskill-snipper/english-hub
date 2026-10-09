import type { ReactNode } from 'react'

import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  wedge,
  type Rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { nightSky } from '../../hamlet/panels/elsinore'
import { shoe } from '../../romeo-and-juliet/panels/verona-kit'
import { HAIR_SHORT } from '../../the-merchant-of-venice/panels/people'
import { SHORT_BEARD, SHORT_BEARD_CUTS } from '../../king-lear/panels/people'
import {
  CutFigure,
  EYE,
  EYE_DOWN,
  HEAD_MAN,
  KETTLE,
  KETTLE_CUT,
  limb,
  mitt,
  type Piece,
} from './people'

/**
 * The night before Agincourt: the two camps, cut once for the three panels
 * set in them, "The French wait for morning" (3.7), "A little touch of Harry"
 * (Act 4, Chorus) and "The king in disguise" (4.1), so the tents, the fires
 * and the field are the same in each. Pure shapes and path data; each panel
 * calls `nightMarks` with its own seed and caches the result.
 *
 * WHAT THE PLAY SAYS OF THE NIGHT (the held edition,
 * src/data/full-texts/henry-v.ts, Project Gutenberg #1521):
 * - The Chorus to Act 4: "Fire answers fire, and through their paly flames
 *   Each battle sees the other's umber'd face"; "from the tents The
 *   armourers, accomplishing the knights"; "The poor condemned English, Like
 *   sacrifices, by their watchful fires Sit patiently"; "the gazing moon".
 *   So both camps are tents and fires under the moon, and each can see the
 *   other's fires across the field (`farCamp`).
 * - The French are "Proud of their numbers" and the Constable says "I have
 *   the best armour of the world" (3.7). So a French pavilion (`Pavilion`
 *   with `rich`) is a great round tent with a striped wall, a scalloped
 *   valance and a pennon; the English tents (`rich` false) are plain, low
 *   and patched, for "this ruin'd band" and its "war-worn coats".
 * - 3.7 runs from midnight ("'Tis midnight") to "two o'clock"; the Chorus
 *   names "the third hour of drowsy morning"; in 4.1 the soldiers see "the
 *   morning which breaks yonder". So the same sky is deep night in the first
 *   two panels and has the first light low along it in the third (`dawn`).
 *
 * The fires are the spot colour where they are near enough to be flames
 * (`WatchFire`), big enough at phone width to stay flames: at a distance they
 * are cut in paper, never as red specks, which on a phone read as something
 * else. The tents' shapes are plain ones of the play's century; nothing is
 * taken from a film or stage production.
 */

export const W = 860
export const H = 340

export type P = [number, number]

type Box = { x0: number; x1: number; y0: number; y1: number }

/** A light at a point: a fire, falling off over `reach`. */
export type Glow = { at: P; reach: number; strength: number }

export type NightMarks = {
  sky: string
  stars: string
  ground: string
  tufts: string
  glows: string
}

/**
 * The marks of a night sky over a field, for one panel: the sky's cuts and
 * stars down to `horizon`, the dark field below it with tufts of trampled
 * grass, and the firelight round each `glows` entry, cut as broken rays.
 * `dawn` is how much first light lies low along the horizon (0 for deep
 * night); `clear` keeps stars and tufts off the places figures and the moon
 * stand. Seeded, and cached by the panel that calls it.
 *
 * Weight: the firelight rays, the tufts and the rows of the field were first
 * cut more densely, and with four lords, a horse or a ring of men over them
 * the night plates came to 96 to 98 KB, over the style guide's 90. Thinned on
 * 9 October 2026 (a ray every 12 degrees reaching 0.68 of the glow, 52 tufts
 * of four blades, 17 rows), which brought them to 79 and 86 KB and reads the
 * same at panel size.
 */
export function nightMarks(
  seed: number,
  {
    horizon,
    dawn = 0,
    glows = [],
    stars = 40,
    clear = () => false,
  }: {
    horizon: number
    dawn?: number
    glows?: Glow[]
    stars?: number
    clear?: (x: number, y: number) => boolean
  },
): NightMarks {
  const r = rng(seed)
  const lightAt = (x: number, y: number) =>
    glows.reduce(
      (m, g) => Math.max(m, g.strength * clamp(1 - Math.hypot(x - g.at[0], y - g.at[1]) / g.reach)),
      0,
    )
  // The sky: darkest overhead, a little lighter towards the horizon, and
  // lighter still where the dawn is coming up.
  const sky = nightSky(
    r,
    { x0: 0, x1: W, y0: 4, y1: horizon - 1 },
    (x, y) =>
      clamp(
        0.04 +
          0.22 * clamp((y - 40) / (horizon - 40)) +
          dawn * clamp((y - horizon + 120) / 120) * (0.6 + 0.4 * clamp(x / W)) +
          0.5 * lightAt(x, y),
      ),
    stars,
    (x, y) => clear(x, y) || y > horizon - 60 * (dawn + 0.3),
  )
  const field = fieldCuts(r, { x0: 0, x1: W, y0: horizon + 3, y1: H }, (x, y) =>
    clamp(0.05 + 0.12 * clamp((y - horizon) / (H - horizon)) + 0.75 * lightAt(x, y)),
  )
  let tufts = ''
  for (let i = 0; i < 52; i++) {
    const t = Math.pow(r(), 0.8)
    const x = between(r, 0, W)
    const y = horizon + 8 + (H - horizon - 8) * t
    if (clear(x, y)) continue
    const L = lightAt(x, y)
    if (L < 0.12 && r() < 0.6) continue
    const s = 0.4 + t * 1
    for (let k = -1.5; k <= 1.5; k++) {
      const a = ((-90 + k * 19 + between(r, -7, 7)) * Math.PI) / 180
      const len = between(r, 5, 9) * s
      tufts += gouge(
        x + k * 1.7 * s,
        y,
        x + k * 1.7 * s + Math.cos(a) * len,
        y + Math.sin(a) * len,
        0.4 + s * 0.5,
      )
    }
  }
  let glowCuts = ''
  for (const g of glows)
    glowCuts += rays(rng(seed + Math.round(g.at[0])), g.at[0], g.at[1], {
      from: 22 * g.strength,
      to: g.reach * 0.68,
      every: 12,
      width: 2.2,
    })
  return { sky: sky.sky, stars: sky.stars, ground: field, tufts, glows: glowCuts }
}

/** Rows of cuts across a dark field, longer and wider where the light falls, closing up with distance. */
function fieldCuts(r: Rng, box: Box, light: (x: number, y: number) => number) {
  let d = ''
  const rows = 17
  for (let k = 0; k < rows; k++) {
    const t = Math.pow(k / rows, 1.5)
    const y = box.y0 + (box.y1 - box.y0) * t
    let x = box.x0 + between(r, -40, 0)
    while (x < box.x1 + 20) {
      const len = between(r, 18, 70) * (0.5 + t)
      const L = light(x + len / 2, y)
      if (r() < 0.25 + L)
        d += gouge(
          x,
          y + between(r, -0.6, 0.6),
          x + len,
          y + between(r, -0.6, 0.6),
          0.35 + (0.4 + t) * L * 2.6,
        )
      x += len + between(r, 8, 30) * (0.6 + t) * (1.2 - L * 0.6)
    }
  }
  return d
}

/**
 * The other camp, far off along the horizon from `x0` to `x1`: a row of
 * small tents, and its fires as small paper flames with a short spray of
 * light, "Fire answers fire". Returns the tents (fill INK, stroke PAPER) and
 * the fires (fill PAPER).
 */
export function farCamp(seed: number, x0: number, x1: number, horizon: number, every = 26) {
  const r = rng(seed)
  let tents = ''
  let fires = ''
  for (let x = x0; x < x1; x += every * between(r, 0.7, 1.3)) {
    const h = between(r, 7, 12)
    const w = h * between(r, 0.9, 1.3)
    tents += `M${n(x - w)} ${horizon}L${n(x - w * 0.8)} ${n(horizon - h * 0.55)}L${n(x)} ${n(horizon - h)}L${n(x + w * 0.8)} ${n(horizon - h * 0.55)}L${n(x + w)} ${horizon}Z`
    if (r() < 0.75) {
      const fx = x + w + between(r, 2, every * 0.3)
      const fh = between(r, 4, 6.5)
      fires += `M${n(fx - 2.4)} ${horizon}Q${n(fx - 2.6)} ${n(horizon - fh * 0.6)} ${n(fx)} ${n(horizon - fh)}Q${n(fx + 2.6)} ${n(horizon - fh * 0.6)} ${n(fx + 2.4)} ${horizon}Z`
      for (let k = 0; k < 5; k++) {
        const a = ((-170 + k * 40 + between(r, -8, 8)) * Math.PI) / 180
        const rad = fh + 2.4
        fires += gouge(
          fx + Math.cos(a) * rad,
          horizon - fh * 0.4 + Math.sin(a) * rad,
          fx + Math.cos(a) * (rad + 4),
          horizon - fh * 0.4 + Math.sin(a) * (rad + 4),
          0.55,
        )
      }
    }
  }
  return { tents, fires }
}

// ── Tents ────────────────────────────────────────────────────────────────────
// In their own frame: the middle of the foot of the wall at (0, 0), about 90
// wide and, with the pennon, 120 high. Canvas is pale, so a tent is cut in
// paper with ink seams and shadow, and a black figure reads against it.

const WALL = 'M-42 0L-40 -48L40 -48L42 0Z'
const ROOF = 'M-49 -46C-34 -56 -16 -72 0 -94C16 -72 34 -56 49 -46Z'
/** The scalloped valance under the eaves of a great pavilion. */
const VALANCE = (() => {
  let d = 'M-49 -49L49 -49L49 -44'
  const k = 8
  for (let i = 0; i < k; i++) {
    const x = 49 - (98 * i) / k
    d += `Q${n(x - 98 / k / 2)} -35 ${n(x - 98 / k)} -44`
  }
  return d + 'Z'
})()
/** A plain tent's eave: a sagging line, the canvas a little loose. */
const PLAIN_ROOF = 'M-46 -42C-32 -50 -16 -64 0 -82C16 -64 32 -50 46 -42C30 -40 -30 -40 -46 -42Z'
const PLAIN_WALL = 'M-40 0L-38 -42C-20 -40 20 -40 38 -42L40 0Z'
/** The open door: a dark triangle, with the flaps tied back either side. */
const DOOR = 'M-15 0L-3 -42L3 -42L15 0Z'
const FLAPS = 'M-15 0L-3 -42L-9 -24L-24 0ZM15 0L3 -42L9 -24L24 0Z'
const POLE = 'M0 -94V-118'
const PENNON = 'M1 -117L36 -112.6L26 -108.6L36 -104L1 -106Z'
const PLAIN_POLE = 'M0 -82V-92'

/** The seams of a tent's canvas, and the shade on its far side: fill INK over the paper tent. */
function tentShade(rich: boolean, lit: -1 | 1) {
  let d = ''
  // seams down the wall, and the shadow side cut darker
  for (let x = -36; x <= 36; x += rich ? 9 : 12) {
    const away = clamp((-lit * x + 40) / 80)
    d += wedge(x, -2, x * 0.96, rich ? -47 : -41, 0.5 + away * (rich ? 1.6 : 2.4), 0.5)
  }
  // seams of the roof running to the peak
  const peak = rich ? -93 : -81
  const eave = rich ? -48 : -43
  for (let x = -44; x <= 44; x += rich ? 11 : 14) {
    const away = clamp((-lit * x + 44) / 88)
    d += wedge(x, eave, 0, peak, 0.6 + away * 2.2, 0.2)
  }
  return d
}

/**
 * A tent on the field, with its foot at `at`, scaled by `s`. `rich` is a
 * French pavilion: a striped wall, a scalloped valance and a swallow-tailed
 * pennon on its pole (printed in the spot colour with `red`); otherwise a
 * plain English tent, lower, its canvas sagging and patched. `lit` is the
 * side the nearest fire is on. With `open`, the door is open on a dark
 * inside, and `children` are drawn in it, in the tent's own frame.
 */
export function Pavilion({
  at,
  s = 1,
  rich = false,
  lit = 1,
  open = false,
  red = false,
  children,
}: {
  at: P
  s?: number
  rich?: boolean
  lit?: -1 | 1
  open?: boolean
  red?: boolean
  children?: ReactNode
}) {
  const wall = rich ? WALL : PLAIN_WALL
  const roof = rich ? ROOF : PLAIN_ROOF
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1])}) scale(${n(s)})`}>
      {/* a thick ink edge round the whole tent, so it stands off the sky */}
      <g fill={INK} stroke={INK} strokeWidth={5} strokeLinejoin="round">
        <path d={wall} />
        <path d={roof} />
        {rich && <path d={VALANCE} />}
      </g>
      <path d={rich ? POLE : PLAIN_POLE} stroke={PAPER} strokeWidth={5.4} strokeLinecap="round" />
      <path d={rich ? POLE : PLAIN_POLE} stroke={INK} strokeWidth={2.8} strokeLinecap="round" />
      {rich && (
        <>
          <path
            d={PENNON}
            fill={red ? RED : PAPER}
            stroke={red ? PAPER : INK}
            strokeWidth={1.2}
            strokeLinejoin="round"
          />
          <circle cx={0} cy={-120} r={3.2} fill={PAPER} stroke={INK} strokeWidth={1.2} />
        </>
      )}
      <path d={wall} fill={PAPER} />
      <path d={roof} fill={PAPER} />
      <path d={tentShade(rich, lit)} fill={INK} />
      {rich ? (
        <>
          {/* the striped wall of a great pavilion */}
          <path
            d={[-30, -12, 6, 24]
              .map((x) => `M${x} 0L${n(x * 0.96)} -48L${n(x * 0.96 + 9)} -48L${x + 9} 0Z`)
              .join('')}
            fill={INK}
          />
          <path d={VALANCE} fill={INK} />
          <path d="M-46 -44.6L46 -44.6" stroke={PAPER} strokeWidth={1.3} strokeDasharray="2 4.1" />
        </>
      ) : (
        // patches on the plain canvas
        <path
          d="M-30 -30h11v9h-11ZM18 -18h10v8h-10ZM-14 -62l9 -2l1 7l-9 2Z"
          fill="none"
          stroke={INK}
          strokeWidth={1.3}
        />
      )}
      {open && (
        <>
          <path d={DOOR} fill={INK} />
          <path d={FLAPS} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
          <path d="M-9 -24L-3 -42M9 -24L3 -42" stroke={INK} strokeWidth={1.1} />
          {children}
        </>
      )}
      <path d={wall} fill="none" stroke={INK} strokeWidth={1.4} />
    </g>
  )
}

// ── Fire and moon ────────────────────────────────────────────────────────────

/**
 * A watch-fire on the ground at `at`, scaled by `s`: two crossed logs and a
 * ring of stones in ink, the flames in the spot colour (flickering), a few
 * sparks rising in paper. The light it throws is in `nightMarks`' `glows`.
 * Drawn large: at phone width a small red flame is a speck, and a red speck
 * near a hand reads as something else. `low` is a fire burnt down to its
 * embers and one short flame, for the end of the night.
 */
export function WatchFire({ at, s = 1, low = false }: { at: P; s?: number; low?: boolean }) {
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1])}) scale(${n(s)})`}>
      {/* the stones round it, and the logs */}
      <path
        d="M-30 2a5 4 0 1 0 10 0a5 4 0 1 0 -10 0ZM-19 5a5 4 0 1 0 10 0a5 4 0 1 0 -10 0ZM10 5a5 4 0 1 0 10 0a5 4 0 1 0 -10 0ZM21 2a5 4 0 1 0 10 0a5 4 0 1 0 -10 0Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.3}
      />
      <path d="M-24 -1L20 -11M-20 -11L24 -1" stroke={PAPER} strokeWidth={9} strokeLinecap="round" />
      <path d="M-24 -1L20 -11M-20 -11L24 -1" stroke={INK} strokeWidth={6.4} strokeLinecap="round" />
      <path d={gouge(-16, -4, 10, -9.6, 0.8) + gouge(-10, -9.6, 16, -4, 0.8)} fill={PAPER} />
      {low ? (
        <>
          <path
            className="lc-glow"
            d="M-14 -8C-12 -13 -4 -14 0 -11C4 -15 12 -13 14 -8Z"
            fill={RED}
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 1.1 })}
            d="M-5 -10C-7 -18 -2 -24 1 -30C3 -22 7 -17 4 -10Z"
            fill={RED}
          />
        </>
      ) : (
        <g fill={RED}>
          <path d="M-18 -8C-20 -18 -12 -22 -10 -32C-6 -24 -4 -18 -6 -8Z" className="lc-flicker" />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8, delay: 0.3 })}
            d="M-10 -8C-14 -24 -4 -36 0 -54C4 -38 14 -26 9 -8Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 1, delay: 0.5 })}
            d="M6 -8C4 -18 10 -24 13 -34C16 -24 20 -16 15 -8Z"
          />
        </g>
      )}
      {/* sparks */}
      <path
        className="lc-rise"
        style={timing({ delay: 0.6, dur: 1.8 })}
        d={
          gouge(4, -64, 6, -70, 1.1) +
          gouge(-8, -72, -9, -77, 1) +
          gouge(12, -80, 14, -84, 0.9) +
          (low ? '' : gouge(-2, -90, -1, -95, 0.9))
        }
        fill={PAPER}
      />
    </g>
  )
}

/**
 * The moon, "the gazing moon" of the Chorus, at `at` with radius `rad`: a
 * paper disc, its shaded side cut with ink arcs, and a broken ring of light
 * round it. Seeded for its ring.
 */
export function Moon({ at, rad, seed }: { at: P; rad: number; seed: number }) {
  const r = rng(seed)
  const ring =
    arcDashes(r, at[0], at[1], rad + 7, 0, Math.PI * 2, [6, 14], [5, 12]) +
    arcDashes(r, at[0], at[1], rad + 13, 0, Math.PI * 2, [4, 9], [9, 20])
  let shade = ''
  for (let k = 0; k < 5; k++) {
    const rr = rad - 2 - k * 2.4
    if (rr < 3) break
    shade += `M${n(at[0] + rr * 0.2)} ${n(at[1] - rr)}A${n(rr)} ${n(rr)} 0 0 1 ${n(at[0] + rr * 0.2)} ${n(at[1] + rr)}`
  }
  return (
    <g>
      <path d={ring} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinecap="round" />
      <circle cx={at[0]} cy={at[1]} r={rad} fill={PAPER} />
      <path d={shade} fill="none" stroke={INK} strokeWidth={0.9} />
      <circle
        cx={at[0] - rad * 0.3}
        cy={at[1] - rad * 0.2}
        r={rad * 0.16}
        fill="none"
        stroke={INK}
        strokeWidth={0.9}
      />
      <circle
        cx={at[0] + rad * 0.15}
        cy={at[1] + rad * 0.32}
        r={rad * 0.12}
        fill="none"
        stroke={INK}
        strokeWidth={0.9}
      />
    </g>
  )
}

/** The cuts of `nightMarks` laid on the ink ground: sky, stars, field, tufts and firelight. */
export function NightGround({ m }: { m: NightMarks }) {
  return (
    <g>
      <path d={m.sky} fill={PAPER} />
      <path d={m.stars} fill={PAPER} />
      <path d={m.ground} fill={PAPER} />
      <path d={m.glows} fill={PAPER} />
      <path d={m.tufts} fill={PAPER} />
    </g>
  )
}

/** A log to sit on, side on, its foot at `at`: ink with its end cut in paper rings. */
export function Log({ at, len, r }: { at: P; len: number; r: number }) {
  const [x, y] = at
  return (
    <g>
      <path
        d={`M${n(x - len / 2)} ${n(y)}V${n(y - r * 2)}H${n(x + len / 2)}V${n(y)}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <ellipse
        cx={x + len / 2}
        cy={y - r}
        rx={r * 0.5}
        ry={r}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
      />
      <ellipse
        cx={x + len / 2}
        cy={y - r}
        rx={r * 0.24}
        ry={r * 0.5}
        fill="none"
        stroke={INK}
        strokeWidth={0.8}
      />
      <path
        d={gouge(x - len / 2 + 6, y - r * 1.3, x + len / 2 - 8, y - r * 1.4, 0.8)}
        fill={PAPER}
      />
    </g>
  )
}

// ── A soldier sitting by the fire ────────────────────────────────────────────

/**
 * An English soldier sitting by a watch-fire, for the two English panels of
 * the night: "The poor condemned English, Like sacrifices, by their watchful
 * fires Sit patiently" (Act 4, Chorus), and Court at the end of it (4.1).
 * The kit's `Person` stands, kneels or sits in a long gown; a man in a jack
 * sitting on a log or on the ground is a pose it cannot make (its jack hangs
 * to the ground and hides the legs), so he is cut here from the kit's own
 * pieces, as its docblock asks: the man's head (HEAD_MAN) under the
 * soldier's steel cap (KETTLE), or bareheaded with the short hair cut in
 * paper, the jack, the limbs and the hands at rest.
 *
 * In his own frame he faces right, his feet on y 0 and his hip `seat` above
 * them, his knees up. `bow` leans the back and the head forward (degrees),
 * `look` tilts the head on top of that (negative looks up). His hands rest on
 * his knees, or with `hug` are clasped round his shins.
 */
export function SeatedSoldier({
  at,
  s = 1,
  flip = false,
  seat = 16,
  bow = 0,
  look = 0,
  bare = false,
  beard = false,
  eye = 'open',
  hug = false,
}: {
  at: P
  s?: number
  flip?: boolean
  seat?: number
  bow?: number
  look?: number
  bare?: boolean
  beard?: boolean
  eye?: 'open' | 'down'
  hug?: boolean
}) {
  const rad = (d: number) => (d * Math.PI) / 180
  const turn = (p: P, d: number): P => [
    p[0] * Math.cos(rad(d)) - p[1] * Math.sin(rad(d)),
    p[0] * Math.sin(rad(d)) + p[1] * Math.cos(rad(d)),
  ]
  const add = (a: P, b: P): P => [a[0] + b[0], a[1] + b[1]]
  const hip: P = [0, -seat]
  const neck = add(hip, turn([0, -66], bow))
  const knee: P = [27, -seat - 20]
  const ankle: P = [31, -3]
  const head = add(neck, turn([3, -21], bow))
  const headT = `translate(${n(head[0])} ${n(head[1])}) rotate(${n(bow + look)})`
  const shoulder = add(neck, turn([0, 9], bow))
  // the hands on the knees, or clasped round the shins
  const farArm: P[] = hug
    ? [add(shoulder, [-2, 0]), [knee[0] - 7, knee[1] - 1], [knee[0] + 5, knee[1] + 12]]
    : [add(shoulder, [-2, 0]), add(shoulder, [7, 24]), [knee[0] - 5, knee[1] - 3]]
  const nearArm: P[] = hug
    ? [add(shoulder, [2, 0]), [knee[0] - 3, knee[1] + 1], [knee[0] + 9, knee[1] + 13]]
    : [add(shoulder, [2, 0]), add(shoulder, [11, 24]), [knee[0] - 1, knee[1] - 4]]
  const handAngle = hug ? 180 : 24
  const lap =
    `M${n(hip[0] - 12)} ${n(hip[1] - 12)}L${n(hip[0] + 12)} ${n(hip[1] - 15)}` +
    `L${n(knee[0] - 7)} ${n(knee[1] + 3)}L${n(knee[0] - 5)} ${n(knee[1] + 12)}L${n(hip[0] - 12)} ${n(hip[1] + 4)}Z`
  const parts: Piece[] = [
    [{ d: limb(farArm), w: 8.4 }, mitt(farArm[2], handAngle)],
    [
      {
        d: limb([add(hip, [-2, 0]), [knee[0] - 4, knee[1] + 1], [ankle[0] - 5, ankle[1]]]),
        w: 9.4,
      },
      shoe([ankle[0] - 5, 0], 1),
    ],
    { d: limb([neck, hip]), w: 24 },
    { d: lap },
    [{ d: limb([hip, knee, ankle]), w: 10 }, shoe([ankle[0], 0], 1)],
    ...(beard ? [{ d: SHORT_BEARD, t: headT }] : []),
    { d: HEAD_MAN, t: headT },
    ...(bare ? [] : [{ d: KETTLE, t: headT }]),
    [
      { d: limb(nearArm), w: 8.6, sep: 1.3 },
      { ...mitt(nearArm[2], handAngle), sep: 1.3 },
    ],
  ]
  // the belt, and the quilting of the jack
  const u = turn([0, 1], bow)
  const cuts =
    gouge(hip[0] - 11, hip[1] - 9, hip[0] + 12, hip[1] - 11, 1.1) +
    gouge(
      neck[0] - 5 + u[0] * 14,
      neck[1] + u[1] * 14,
      hip[0] - 5 - u[0] * 14,
      hip[1] - u[1] * 14,
      0.7,
    ) +
    gouge(
      neck[0] + 4 + u[0] * 14,
      neck[1] + u[1] * 14,
      hip[0] + 4 - u[0] * 14,
      hip[1] - u[1] * 14,
      0.7,
    )
  return (
    <CutFigure
      parts={parts}
      cuts={cuts}
      transform={`translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`}
    >
      <g transform={headT}>
        {bare ? (
          <path d={HAIR_SHORT} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinecap="round" />
        ) : (
          <path d={KETTLE_CUT} fill={PAPER} />
        )}
        {beard && <path d={SHORT_BEARD_CUTS} fill={PAPER} />}
        <path d={eye === 'down' ? EYE_DOWN : EYE} fill={PAPER} />
      </g>
    </CutFigure>
  )
}
