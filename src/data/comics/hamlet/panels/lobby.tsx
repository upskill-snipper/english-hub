import type { ReactNode } from 'react'

import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, wedge, type Pt } from '@/components/comics/linocut/carve'

import { FLOOR, H, W } from './acts-3-4-rooms'

export { FLOOR, H, W }

/**
 * THE LOBBY AT ELSINORE, cut once for the three moments the guide sets in it:
 * "Spies and players" and "The rogue and peasant slave" (Act 2, Scene 2) and
 * "To be, or not to be" and the nunnery scene (Act 3, Scene 1). It is one
 * room, so a student knows it again: the same tall leaded windows, the same
 * arras on the wall and the same chairs of state under their cloth.
 *
 * WHY ONE ROOM. The play makes it one. In Act 2, Scene 2 Polonius, in the
 * room where the King and Queen have just received Rosencrantz, Guildenstern
 * and the ambassadors, says of Hamlet: "You know sometimes he walks four hours
 * together Here in the lobby", and plans: "At such a time I'll loose my
 * daughter to him. Be you and I behind an arras then, Mark the encounter."
 * Act 3, Scene 1 is that encounter. So the arras the King and Polonius hide
 * behind in "To be, or not to be" hangs on this wall from the first of the
 * three panels, and the chairs of state the King and Queen sat in at the start
 * of Act 2, Scene 2 stand empty at its end, when Hamlet is alone.
 *
 * WHAT THE PLAY SAYS, and so what is drawn (the held edition,
 * src/data/full-texts/hamlet.ts, Project Gutenberg #1524): "Elsinore. A room
 * in the Castle." No more. So the room is drawn plainly, as a room of a stone
 * castle of Shakespeare's day: round-headed windows with mullion, transom and
 * leaded panes, an arras of the kind Polonius names, chairs of state under a
 * cloth. Both scenes are by day (the King sends the ambassadors "to your rest,
 * at night we'll feast together", and in Act 3, Scene 1 the players "have
 * already order This night to play before him"), so the light is daylight
 * from the windows, thrown across the flags. Nothing is taken from a film or
 * stage production.
 *
 * THE STONE AND THE FLAGS are the castle's, from ./acts-3-4-rooms.tsx
 * (roomMarks, Floor), imported, not copied, so that the lobby by day and the
 * King's and Queen's rooms by night are one building. The windows are cut as
 * the window of "The rest is silence" is: a round head, a twelve-unit splay
 * of lit stone, the sky engraved darkest at the top of the arch.
 *
 * POLONIUS'S HOUSE ("Ophelia's fright", Act 2, Scene 1) is another building,
 * but of the same place and years, so it borrows the window and the arch
 * from here; its walls are its own.
 *
 * Each panel passes its own seeds, recorded in its docblock.
 */

export type Win = { x0: number; x1: number; top: number; bottom: number }
export type Light = (x: number, y: number) => number

/** A round-headed opening, from its foot to the crown of the arch. */
export function arch({ x0, x1, top, bottom }: Win) {
  const r = (x1 - x0) / 2
  return `M${n(x0)} ${n(bottom)}V${n(top + r)}A${n(r)} ${n(r)} 0 0 1 ${n(x1)} ${n(top + r)}V${n(bottom)}Z`
}

/** The splayed stone round a window, REVEAL units deep. */
export const REVEAL = 12
export const revealOf = (w: Win): Win => ({
  x0: w.x0 - REVEAL,
  x1: w.x1 + REVEAL,
  top: w.top - REVEAL,
  bottom: w.bottom + 6,
})

/** Is (x, y) inside a window or its reveal? For keeping cuts off the glass. */
export function inWindow(w: Win, x: number, y: number) {
  const o = revealOf(w)
  const r = (o.x1 - o.x0) / 2
  const cx = (o.x0 + o.x1) / 2
  return (
    x > o.x0 - 2 &&
    x < o.x1 + 2 &&
    y < o.bottom + 4 &&
    (y > o.top + r || Math.hypot(x - cx, y - (o.top + r)) < r + 2)
  )
}

/** Daylight from the windows on the wall: bright at a window, falling away from it. */
export function daylight(wins: Win[], least = 0.05): Light {
  return (x, y) => {
    let L = least
    for (const w of wins) {
      const cx = (w.x0 + w.x1) / 2
      const cy = (w.top + w.bottom) / 2
      L = Math.max(L, clamp(1 - Math.hypot((x - cx) * 0.7, (y - cy) * 1.1) / 260) ** 1.3)
    }
    return L
  }
}

/**
 * The day thrown in across the flags from a window: a pale tongue from the
 * foot of the wall below the window, widening towards us and leaning away
 * from the light (`lean`, in units at the bottom edge). Fill `d` PAPER over
 * the ink floor, then the floor's joints in INK clipped to it. `inside` says
 * which joints to cut again for that, so the others are not sent twice; it is
 * generous on the left, because a joint is kept or dropped by its first
 * point and may start outside the tongue and run into it.
 */
export function sunOnFloor(
  w: Win,
  lean = 60,
  widen = 1.5,
): { d: string; inside: (x: number, y: number) => boolean } {
  const a = w.x0 + 4
  const b = w.x1 - 4
  const mid = (a + b) / 2
  const half = ((b - a) / 2) * widen
  const c = mid - half + lean
  const e = mid + half + lean
  return {
    d: `M${n(a)} ${FLOOR}L${n(b)} ${FLOOR}L${n(e)} ${H}L${n(c)} ${H}Z`,
    inside: (x, y) => {
      if (y < FLOOR - 2) return false
      const t = Math.min(1, (y - FLOOR) / (H - FLOOR))
      return x > a + (c - a) * t - 70 && x < b + (e - b) * t + 4
    },
  }
}

/**
 * Light that falls away below the windows' sills: the foot of the wall
 * darkens, and the floor's worn flags (which roomMarks lights from 70 to 80
 * units above them) stay dark, so the light on the floor is the windows'
 * tongues of day alone.
 */
export function dimBelow(light: Light, from = 186, k = 0.45): Light {
  return (x, y) => (y > from ? light(x, y) * k : light(x, y))
}

// ── The windows ──────────────────────────────────────────────────────────────

const winCache = new Map<string, { sky: string; lead: string }>()

function windowMarks(win: Win, seed: number) {
  const key = `${win.x0}:${win.x1}:${win.top}:${win.bottom}:${seed}`
  const hit = winCache.get(key)
  if (hit) return hit
  const r = rng(seed)
  // A pale day sky, engraved darkest at the top of the arch and clearing
  // towards the sill.
  let sky = ''
  for (let y = win.top + 5; y < win.bottom; y += 5.4) {
    const depth = clamp(1 - (y - win.top) / ((win.bottom - win.top) * 0.75))
    let x = win.x0 + between(r, -20, 0)
    while (x < win.x1) {
      const len = between(r, 12, 40)
      if (r() < 0.1 + depth * 0.8)
        sky += gouge(x, y, x + len, y + between(r, -0.4, 0.4), 0.4 + depth * 1.6)
      x += len + between(r, 6, 20)
    }
  }
  // Leaded quarries: two sets of diagonals, 14 units apart.
  let lead = ''
  const span = win.bottom - win.top
  for (let k = -span; k < win.x1 - win.x0 + span; k += 14) {
    const x = win.x0 + k
    lead += `M${n(x)} ${n(win.top)}l${n(span * 0.6)} ${n(span)}`
    lead += `M${n(x)} ${n(win.top)}l${n(-span * 0.6)} ${n(span)}`
  }
  const out = { sky, lead }
  winCache.set(key, out)
  return out
}

/**
 * A tall round-headed window in the castle wall: the lit splay of its reveal,
 * the sky (and whatever `view` holds, clipped to the opening, drawn before the
 * leading), the leaded panes, a stone mullion and transom, and the sill.
 */
export function LobbyWindow({
  uid,
  win,
  seed,
  view,
}: {
  uid: string
  win: Win
  seed: number
  view?: ReactNode
}) {
  const clip = `${uid}-win-${win.x0}`
  const m = windowMarks(win, seed)
  const cx = (win.x0 + win.x1) / 2
  const r = (win.x1 - win.x0) / 2
  const o = revealOf(win)
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={arch(win)} />
        </clipPath>
      </defs>
      <path d={arch(o)} fill={PAPER} />
      <path
        d={
          wedge(o.x0 + 1, o.top + r + 30, win.x0, win.top + r + 30, 1.6, 1.6) +
          wedge(o.x1 - 1, o.top + r + 30, win.x1, win.top + r + 30, 1.6, 1.6) +
          wedge(o.x0 + 1, o.top + r + 80, win.x0, win.top + r + 80, 1.6, 1.6) +
          wedge(o.x1 - 1, o.top + r + 80, win.x1, win.top + r + 80, 1.6, 1.6)
        }
        fill={INK}
      />
      <path d={arch(win)} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.sky} fill={INK} />
        {view}
        <path d={m.lead} fill="none" stroke={INK} strokeWidth={0.9} />
      </g>
      <path
        d={`M${n(cx)} ${n(win.top)}V${n(win.bottom)}M${n(win.x0)} ${n(win.top + r + 22)}H${n(win.x1)}`}
        stroke={INK}
        strokeWidth={5}
      />
      <path d={arch(win)} fill="none" stroke={INK} strokeWidth={3.2} />
      <path
        d={`M${n(o.x0 - 6)} ${n(win.bottom)}H${n(o.x1 + 6)}V${n(win.bottom + 7)}H${n(o.x0 - 6)}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.4}
      />
    </>
  )
}

// ── The arras ───────────────────────────────────────────────────────────────

export type ArrasBox = { x0: number; x1: number; top: number; bottom: number }

type ArrasMarks = {
  body: string
  border: string
  borderCuts: string
  field: string
  flowers: string
  folds: string
  fringe: string
  rings: string
}

const arrasCache = new Map<string, ArrasMarks>()
const FOLD = 34

/** The hem of the arras: a slow wave, a fold every FOLD units. */
function hemY(a: ArrasBox, x: number) {
  return a.bottom + 2.6 * Math.sin(((x - a.x0) / FOLD) * Math.PI * 2)
}

function arrasMarks(a: ArrasBox, seed: number): ArrasMarks {
  const key = `${a.x0}:${a.x1}:${a.top}:${a.bottom}:${seed}`
  const hit = arrasCache.get(key)
  if (hit) return hit
  const r = rng(seed)
  let body = `M${n(a.x0)} ${n(a.top)}H${n(a.x1)}`
  for (let x = a.x1; x >= a.x0; x -= 4) body += `L${n(x)} ${n(hemY(a, x))}`
  body += `L${n(a.x0)} ${n(hemY(a, a.x0))}Z`
  // The woven border: a dark band round the field, a row of lozenges cut in it.
  const b = 5
  const bw = 10
  const inner = {
    x0: a.x0 + b + bw,
    x1: a.x1 - b - bw,
    top: a.top + b + bw,
    bottom: a.bottom - b - bw,
  }
  const border =
    `M${n(a.x0 + b)} ${n(a.top + b)}H${n(a.x1 - b)}V${n(a.bottom - b)}H${n(a.x0 + b)}Z` +
    `M${n(inner.x0)} ${n(inner.top)}V${n(inner.bottom)}H${n(inner.x1)}V${n(inner.top)}Z`
  const loz = (cx: number, cy: number, horiz: boolean) => {
    const L = 4.2
    const S = 2.4
    return horiz
      ? `M${n(cx - L)} ${n(cy)}L${n(cx)} ${n(cy - S)}L${n(cx + L)} ${n(cy)}L${n(cx)} ${n(cy + S)}Z`
      : `M${n(cx)} ${n(cy - L)}L${n(cx + S)} ${n(cy)}L${n(cx)} ${n(cy + L)}L${n(cx - S)} ${n(cy)}Z`
  }
  const mid = b + bw / 2
  let borderCuts = ''
  for (let x = a.x0 + mid + 9; x < a.x1 - mid - 4; x += 14)
    borderCuts += loz(x, a.top + mid, true) + loz(x, a.bottom - mid, true)
  for (let y = a.top + mid + 13; y < a.bottom - mid - 6; y += 14)
    borderCuts += loz(a.x0 + mid, y, false) + loz(a.x1 - mid, y, false)
  // The field: a diamond trellis woven in dark thread, a small round flower
  // in each diamond. Each thread runs only across the field (stroked, so
  // it is one short line of markup, not a polygon).
  let field = ''
  let flowers = ''
  const step = 24
  const fw = inner.x1 - inner.x0
  const fh = inner.bottom - inner.top
  const thread = (x0: number, dir: 1 | -1) => {
    // from (x0, top) down at 45 degrees, clipped to the field's box
    let t0 = 0
    let t1 = fh
    if (dir === 1) {
      t0 = Math.max(t0, -x0 + inner.x0)
      t1 = Math.min(t1, inner.x1 - x0)
    } else {
      t0 = Math.max(t0, x0 - inner.x1)
      t1 = Math.min(t1, x0 - inner.x0)
    }
    if (t1 <= t0) return ''
    return `M${n(x0 + dir * t0)} ${n(inner.top + t0)}L${n(x0 + dir * t1)} ${n(inner.top + t1)}`
  }
  for (let k = -fh; k < fw + fh; k += step) {
    field += thread(inner.x0 + k, 1) + thread(inner.x0 + k, -1)
  }
  // The flowers are dots: a stroke of no length with round caps.
  for (let y = inner.top + step / 2, row = 0; y < inner.bottom; y += step / 2, row++) {
    for (let x = inner.x0 + (row % 2 ? 0 : step / 2); x < inner.x1 + 2; x += step) {
      flowers += `M${n(x + between(r, -0.4, 0.4))} ${n(y)}h0.1`
    }
  }
  // The folds it hangs in: soft vertical shadows, one to each dip of the hem.
  let folds = ''
  for (let x = a.x0 + FOLD * 0.75; x < a.x1 - 6; x += FOLD) {
    for (let k = -1; k <= 1; k++) {
      const xx = x + k * 3.4
      folds += gouge(
        xx,
        a.top + 10,
        xx + between(r, -1.5, 1.5),
        a.bottom - 2,
        1.6 - Math.abs(k) * 0.5,
      )
    }
  }
  let fringe = ''
  for (let x = a.x0 + 2; x < a.x1 - 1; x += 3.4)
    fringe += `M${n(x)} ${n(hemY(a, x))}l${n(between(r, -0.6, 0.6))} ${n(between(r, 4.5, 6.5))}`
  let rings = ''
  for (let x = a.x0 + 8; x < a.x1; x += 22)
    rings += `M${n(x - 3.2)} ${n(a.top - 2)}a3.2 3.2 0 1 0 6.4 0a3.2 3.2 0 1 0 -6.4 0Z`
  const out = { body, border, borderCuts, field, flowers, folds, fringe, rings }
  arrasCache.set(key, out)
  return out
}

/**
 * The arras: a woven hanging on a rod, a pale ground, a dark border cut with
 * lozenges, a diamond trellis with a flower in each diamond, hanging in soft
 * folds to a fringed hem a hand's breadth above the floor. Anyone hidden
 * behind it is drawn before it.
 */
export function Arras({ uid, a, seed }: { uid: string; a: ArrasBox; seed: number }) {
  const m = arrasMarks(a, seed)
  const clip = `${uid}-arras-${a.x0}`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={m.body} />
        </clipPath>
      </defs>
      <path d={m.body} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
      <g clipPath={`url(#${clip})`}>
        <path d={m.field} fill="none" stroke={INK} strokeWidth={2.4} />
        <path d={m.flowers} fill="none" stroke={INK} strokeWidth={5.4} strokeLinecap="round" />
        <path d={m.folds} fill={INK} />
        <path d={m.border} fill={INK} fillRule="evenodd" />
        <path d={m.borderCuts} fill={PAPER} />
      </g>
      <path d={m.fringe} fill="none" stroke={PAPER} strokeWidth={1.2} />
      {/* the rod and its rings */}
      <rect
        x={a.x0 - 10}
        y={a.top - 7}
        width={a.x1 - a.x0 + 20}
        height={5.5}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <path d={m.rings} fill="none" stroke={PAPER} strokeWidth={1.2} />
      <circle cx={a.x0 - 11} cy={a.top - 4.2} r={4.2} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <circle cx={a.x1 + 11} cy={a.top - 4.2} r={4.2} fill={INK} stroke={PAPER} strokeWidth={1.2} />
    </>
  )
}

// ── The chairs of state ─────────────────────────────────────────────────────

/**
 * Two chairs of state on a dais under a cloth of state, seen from in front:
 * the King's and the Queen's, where they received Rosencrantz, Guildenstern
 * and the ambassadors at the start of Act 2, Scene 2. Drawn in its own frame,
 * centred on x 0 with the floor at y 0, about 228 wide and 248 high; place it
 * with `at` and `scale`. The crown worked on the cloth over the King's chair
 * is printed in the spot colour with `crown`, for the panel it is about.
 */
export function ChairsOfState({
  uid,
  at,
  scale = 1,
  crown = false,
}: {
  uid: string
  at: Pt
  scale?: number
  crown?: boolean
}) {
  const clip = `${uid}-cloth`
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1])}) scale(${n(scale)})`}>
      <defs>
        <clipPath id={clip}>
          <path d="M-82 -216V-30H82V-216Z" />
        </clipPath>
      </defs>
      {/* the cloth of state, hanging from its tester */}
      <path d="M-92 -226H92V-20H-92Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path
        d={CLOTH_DIAPER}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.1}
        clipPath={`url(#${clip})`}
      />
      <path d="M-82 -216V-30H82V-216Z" fill="none" stroke={PAPER} strokeWidth={1.4} />
      <path d="M-104 -248H104V-226H-104Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
      <path d={VALANCE} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <path d={gouge(-98, -240, 98, -240, 1.6)} fill={PAPER} />
      {/* the crown worked on the cloth, over the King's chair */}
      <path d={CLOTH_CROWN_HALO} fill={INK} stroke={INK} strokeWidth={6} strokeLinejoin="round" />
      <path
        d={CLOTH_CROWN}
        fill={crown ? RED : PAPER}
        stroke={crown ? PAPER : INK}
        strokeWidth={crown ? 1.2 : 1}
        strokeLinejoin="round"
      />
      {/* the dais: two steps */}
      <path d="M-114 0V-10H114V0Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
      <path d="M-100 -10V-20H100V-10Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
      <path
        d={gouge(-112, -8.6, 112, -8.6, 1.2) + gouge(-98, -18.6, 98, -18.6, 1.2)}
        fill={PAPER}
      />
      {/* the two chairs */}
      <Chair x={-46} />
      <Chair x={46} />
    </g>
  )
}

/** A carved chair of state from in front, its cushion lit, standing on the dais. */
function Chair({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <path d={CHAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={CHAIR_CUTS} fill={PAPER} />
      <path d={CUSHION} fill={PAPER} stroke={INK} strokeWidth={1.2} />
    </g>
  )
}

const CHAIR =
  // the high back, with a cresting and two finials
  'M-26 -70V-150C-26 -156 -22 -158 -18 -160C-14 -166 -6 -172 0 -172C6 -172 14 -166 18 -160C22 -158 26 -156 26 -150V-70Z' +
  'M-31 -152a5 5 0 1 0 10 0a5 5 0 1 0 -10 0ZM21 -152a5 5 0 1 0 10 0a5 5 0 1 0 -10 0Z' +
  // the arms on their posts
  'M-35 -100H-24V-64H-35ZM24 -100H35V-64H24Z' +
  'M-38 -105H-22V-97H-38ZM22 -105H38V-97H22Z' +
  // the seat rail, the legs to the dais and the stretcher
  'M-35 -72H35V-60H-35Z' +
  'M-33 -60H-24V-20H-33ZM24 -60H33V-20H24Z' +
  'M-30 -38H30V-32H-30Z'
const CHAIR_CUTS =
  // the panel of the back and its carving, and the posts' mouldings
  gouge(-18, -146, -18, -84, 1.1) +
  gouge(18, -146, 18, -84, 1.1) +
  gouge(-15, -150, 15, -150, 1) +
  gouge(-9, -126, 9, -126, 1.5) +
  gouge(0, -138, 0, -114, 1.5) +
  gouge(-29.5, -94, -29.5, -68, 0.9) +
  gouge(29.5, -94, 29.5, -68, 0.9)
const CUSHION = 'M-25 -79C-25 -84 -20 -85 0 -85C20 -85 25 -84 25 -79V-72H-25Z'

/** The cloth's diaper: a lattice of lozenges, cut in paper. */
const CLOTH_DIAPER = (() => {
  let d = ''
  for (let k = -300; k < 300; k += 26) d += `M${k} -216L${k + 186} -30M${k} -216L${k - 186} -30`
  return d
})()
const VALANCE = (() => {
  let d = 'M-104 -226'
  for (let x = -104; x < 104; x += 16) d += `Q${x + 8} -212 ${x + 16} -226`
  return d + 'Z'
})()
/** A plain crown with five points, worked on the cloth over the King's chair. */
const CLOTH_CROWN =
  'M-64 -176L-66 -200L-58 -188L-52 -204L-45 -188L-39 -204L-33 -188L-26 -200L-28 -176Z'
const CLOTH_CROWN_HALO = CLOTH_CROWN
