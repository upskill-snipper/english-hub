import type { ReactNode } from 'react'

import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'

/**
 * BELMONT: the room in Portia's house where the caskets stand, cut once for
 * every panel set there, so a student knows the room, the three caskets and
 * their curtain again from panel to panel. Drawn first for "Portia and her
 * father's will" (1.2) and "Morocco chooses gold" (2.7); "Arragon chooses
 * silver" (2.9) and "Lead, and a letter" (3.2) should draw the same room.
 *
 * WHAT THE PLAY SAYS, and so what is drawn (the held edition,
 * src/data/full-texts/the-merchant-of-venice.ts):
 *
 * - Acts 1.2, 2.1, 2.7 and 2.9 are all set in "Belmont. A room in Portia's
 *   house", so they share one room: a lady "richly left" (1.1), so a room of
 *   dressed stone with a tall window on the gardens, and a floor of marble
 *   squares, which no room in Venice has in these panels.
 * - The caskets are kept behind curtains: "Go, draw aside the curtains and
 *   discover / The several caskets to this noble prince" (2.7), "A gentle
 *   riddance. Draw the curtains, go" (2.7), "Quick, quick, I pray thee, draw
 *   the curtain straight" (2.9). So they stand on a table in an arched alcove
 *   hung with a curtain, printed in the spot colour: the curtain is what
 *   hides and shows the father's lottery, the thing every Belmont scene
 *   turns on. `open` draws it from closed (0) to drawn right back (1).
 * - "these three chests of gold, silver, and lead" (1.2); "The first, of gold
 *   ... The second, silver ... This third, dull lead" (2.7). So they stand in
 *   that order from the left. The print has no gold or silver ink, so the
 *   three are told apart by value, as a linocut does: the gold casket is cut
 *   in paper, the brightest thing in the room, with glints cut round it
 *   ("All that glisters is not gold"); the silver is ink cut through with fine
 *   hatching, a grey; "dull lead" is plain ink with only its edge cut. Each
 *   bears an inscription (2.7), suggested by a line of small cuts on its
 *   front. A casket can be drawn open (`openOne`), its lid raised and its
 *   inside dark; what lies in it belongs to each panel.
 * - The key: "Deliver me the key" (2.7). Each casket has a lock plate.
 *
 * Nothing is taken from a film or stage production.
 */

export const W = 860
export const H = 340
/** Where the wall meets the floor. */
export const FLOOR = 256

export type Box = { x0: number; x1: number; top: number; bottom: number }
export type CasketKind = 'gold' | 'silver' | 'lead'

/** A round-arched opening. */
export function arch({ x0, x1, top, bottom }: Box) {
  const r = (x1 - x0) / 2
  return `M${n(x0)} ${n(bottom)}V${n(top + r)}A${n(r)} ${n(r)} 0 0 1 ${n(x1)} ${n(top + r)}V${n(bottom)}Z`
}

/**
 * A wide opening with a shallow segmental arch, rising `rise` above its
 * springing: the caskets' alcove. (A full round arch as wide as the alcove
 * rose far above its curtain rod and read as a dome.)
 */
export function segArch({ x0, x1, top, bottom }: Box, rise = 26) {
  const cx = (x0 + x1) / 2
  return `M${n(x0)} ${n(bottom)}V${n(top + rise)}Q${n(cx)} ${n(top - rise)} ${n(x1)} ${n(top + rise)}V${n(bottom)}Z`
}

const cache = new Map<string, { wall: string; floor: string }>()

/**
 * The wall's cuts, lit from the window `win`, leaving out the alcove `skip`
 * (which covers them), and the floor of marble squares. One seed per panel.
 */
export function roomMarks(seed: number, win: Box, skip: Box) {
  const key = `${seed}:${win.x0}:${skip.x0}`
  const hit = cache.get(key)
  if (hit) return hit
  const r = rng(seed)
  const cx = (win.x0 + win.x1) / 2
  const cy = (win.top + win.bottom) / 2
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - cx) * 0.62, y - cy) / 300) * 0.9, 0.07)
  const opts = {
    spacing: 7,
    len: [22, 76] as [number, number],
    gap: [7, 22] as [number, number],
    max: 3.6,
  }
  const wall =
    gougeField(r, { x0: 0, x1: skip.x0 - 14, y0: 4, y1: FLOOR - 18 }, light, opts) +
    gougeField(r, { x0: skip.x1 + 14, x1: W, y0: 4, y1: FLOOR - 18 }, light, opts) +
    gougeField(r, { x0: skip.x0 - 14, x1: skip.x1 + 14, y0: 4, y1: skip.top - 12 }, light, opts)
  // Marble squares: every other one inked, running back to a point below the
  // window's light.
  const V: [number, number] = [430, 110]
  const rows = [FLOOR, 264, 276, 293, 316, H + 8]
  const colX = (xt: number, y: number) => V[0] + (xt - V[0]) * ((y - V[1]) / (FLOOR - V[1]))
  let floor = ''
  for (let k = 0; k < rows.length - 1; k++) {
    const y0 = rows[k]
    const y1 = rows[k + 1]
    for (let i = 0, xt = -620; xt < W + 620; i++, xt += 38) {
      if ((i + k) % 2) continue
      const a = colX(xt, y0)
      const b = colX(xt + 38, y0)
      const c = colX(xt + 38, y1)
      const d = colX(xt, y1)
      if (Math.max(a, b, c, d) < -10 || Math.min(a, b, c, d) > W + 10) continue
      floor += `M${n(a)} ${n(y0)}L${n(b)} ${n(y0)}L${n(c)} ${n(y1)}L${n(d)} ${n(y1)}Z`
    }
  }
  // A few veins cut across the dark squares.
  for (let k = 0; k < 16; k++) {
    const y = between(r, FLOOR + 4, H - 4)
    const x = between(r, 0, W)
    floor += gouge(x, y, x + between(r, 12, 30), y + between(r, -2, 2), 0.5)
  }
  const out = { wall, floor }
  cache.set(key, out)
  return out
}

/** The wall, its dado rail and the marble floor. Draw first. */
export function Room({ seed, win, skip }: { seed: number; win: Box; skip: Box }) {
  const m = roomMarks(seed, win, skip)
  return (
    <>
      <path d={m.wall} fill={PAPER} />
      <rect x={0} y={FLOOR - 16} width={W} height={3} fill={PAPER} />
      <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <rect x={0} y={FLOOR - 2} width={W} height={4} fill={INK} />
    </>
  )
}

/**
 * The tall window on Belmont's gardens: a deep reveal, the view (`outside`,
 * clipped to the opening), its mullion and transom, and the sill.
 */
export function Window({ uid, win, outside }: { uid: string; win: Box; outside: ReactNode }) {
  const clip = `${uid}-win`
  const cx = (win.x0 + win.x1) / 2
  const r = (win.x1 - win.x0) / 2
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={arch(win)} />
        </clipPath>
      </defs>
      <path
        d={arch({ x0: win.x0 - 10, x1: win.x1 + 10, top: win.top - 10, bottom: win.bottom + 4 })}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={arch(win)} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>{outside}</g>
      <path
        d={`M${n(cx)} ${n(win.top)}V${n(win.bottom)}M${n(win.x0)} ${n(win.top + r + 6)}H${n(win.x1)}`}
        stroke={INK}
        strokeWidth={4}
      />
      <path d={arch(win)} fill="none" stroke={INK} strokeWidth={3} />
      <path
        d={`M${n(win.x0 - 16)} ${n(win.bottom)}H${n(win.x1 + 16)}V${n(win.bottom + 7)}H${n(win.x0 - 16)}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.4}
      />
    </>
  )
}

/**
 * Belmont's gardens through the window: a pale sky, a line of clipped hedge
 * and two cypresses. For a window whose opening is `win`.
 */
export function Garden({ win }: { win: Box }) {
  const g = win.bottom - 34
  const cyp = (x: number, h: number) =>
    `M${n(x)} ${n(g + 4)}C${n(x - 9)} ${n(g - h * 0.4)} ${n(x - 5)} ${n(g - h * 0.85)} ${n(x)} ${n(g - h)}C${n(x + 5)} ${n(g - h * 0.85)} ${n(x + 9)} ${n(g - h * 0.4)} ${n(x)} ${n(g + 4)}Z`
  let streaks = ''
  for (let y = win.top + 20; y < g - 20; y += 16)
    streaks += gouge(win.x0 + ((y * 7) % 23), y, win.x0 + ((y * 7) % 23) + 26, y + 0.6, 0.8)
  return (
    <>
      <path d={streaks} fill={INK} />
      <path
        d={cyp(win.x0 + (win.x1 - win.x0) * 0.28, 74) + cyp(win.x0 + (win.x1 - win.x0) * 0.74, 58)}
        fill={INK}
      />
      <path
        d={`M${n(win.x0 - 4)} ${n(win.bottom + 2)}V${n(g)}Q${n(win.x0 + 14)} ${n(g - 9)} ${n(win.x0 + 30)} ${n(g - 2)}Q${n(win.x0 + 48)} ${n(g - 10)} ${n(win.x0 + 64)} ${n(g - 2)}Q${n(win.x0 + 82)} ${n(g - 9)} ${n(win.x1 + 4)} ${n(g - 1)}V${n(win.bottom + 2)}Z`}
        fill={INK}
      />
      <path
        d={
          gouge(win.x0, g + 8, win.x0 + 40, g + 8.6, 1) +
          gouge(win.x0 + 50, g + 14, win.x1, g + 14.6, 1) +
          gouge(win.x0 + 10, g + 22, win.x0 + 70, g + 22.6, 1.1)
        }
        fill={PAPER}
      />
    </>
  )
}

// ── The caskets ──────────────────────────────────────────────────────────────
// Each drawn front on, its base centred on (0, 0): 48 wide, 34 tall closed.

const BODY = 'M-25 0H25V-4H22V-22H-22V-4H-25Z'
const LID = 'M-23.4 -21.6C-22.4 -33 22.4 -33 23.4 -21.6Z'
/** The lid thrown back, seen from the front: its underside rising behind the rim. */
const LID_UP = 'M-22 -22L-18.6 -48C-8 -52 8 -52 18.6 -48L22 -22Z'
const MOUTH = 'M-20 -22H20V-19H-20Z'
const FEET = 'M-23 0h6v4h-6zM17 0h6v4h-6z'
const LOCK = 'M-4.4 -16H4.4V-8H-4.4Z'
const KEYHOLE = 'M0 -14.6a1.4 1.4 0 1 0 0.01 0ZM-0.7 -13.4H0.7L1 -10.4H-1Z'
/** The inscription on its front: a line of small cuts either side of the lock. */
const WORDS =
  'M-18 -12.6h3M-13.6 -12.6h4M-8.6 -12.6h2.4M7 -12.6h3.6M11.6 -12.6h2.6M15.2 -12.6h3' +
  'M-17 -8.6h4M-11.6 -8.6h3M7.4 -8.6h2.6M11 -8.6h4.4'
const BANDS = 'M-22 -4H22M-22 -19H22'
/** Glints round the gold, cut in paper: short wedges pointing out. */
const GLINTS = [
  [-34, -30, -44, -40],
  [0, -40, 0, -52],
  [34, -30, 44, -40],
  [-36, -10, -48, -10],
  [36, -10, 48, -10],
  [-30, -44, -35, -52],
  [30, -44, 35, -52],
]
  .map(([a, b, c, d]) => wedge(a, b, c, d, 2.4, 0.4))
  .join('')

/**
 * One casket: 'gold' cut in paper with its glints, 'silver' a grey of fine
 * hatching, 'lead' plain dull ink. With `open`, the lid is raised and the
 * inside shows dark; `children` are drawn in the casket's frame after it,
 * for what lies inside.
 */
export function Casket({
  kind,
  at,
  s = 1,
  open = false,
  glints = true,
  children,
}: {
  kind: CasketKind
  at: [number, number]
  s?: number
  open?: boolean
  glints?: boolean
  children?: ReactNode
}) {
  const fill = kind === 'gold' ? PAPER : INK
  const edge = kind === 'gold' ? INK : PAPER
  const lid = open ? LID_UP : LID
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1])}) scale(${n(s)})`}>
      {kind === 'gold' && glints && <path d={GLINTS} fill={PAPER} />}
      {/* a halo cut round it, so it stands off the dark alcove */}
      <path
        d={BODY + lid + FEET}
        fill={PAPER}
        stroke={PAPER}
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <path
        d={lid}
        fill={open ? INK : fill}
        stroke={INK}
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
      {open && (
        <path d={gouge(-16, -44, 16, -44, 1.1) + gouge(-17, -30, 17, -30, 0.8)} fill={PAPER} />
      )}
      <path d={BODY + FEET} fill={fill} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      {open && <path d={MOUTH} fill={INK} />}
      {kind === 'silver' && (
        <path
          d={
            'M-21 -8L-16 -18M-17 -6L-11 -18M-12 -6L-7 -16M-8 -4L-6 -8M6 -6L12 -18M11 -6L17 -18M16 -6L21 -16M19 -4L21 -8' +
            (open
              ? ''
              : 'M-20 -23L-16 -27M-14 -23L-10 -28.6M-8 -23L-4 -29M-2 -23L2 -29.4M4 -23L8 -29M10 -23L14 -28.6M16 -23L19 -26')
          }
          stroke={PAPER}
          strokeWidth={1.3}
        />
      )}
      {kind !== 'lead' && <path d={BANDS} stroke={edge} strokeWidth={1.6} />}
      <path d={LOCK} fill={kind === 'gold' ? INK : PAPER} />
      <path d={KEYHOLE} fill={kind === 'gold' ? PAPER : INK} />
      <path d={WORDS} stroke={edge} strokeWidth={1.3} />
      {children}
    </g>
  )
}

/**
 * The alcove the caskets stand in: an arched recess `box` in the wall, dark
 * inside, a table across it with the three caskets on it (gold, silver,
 * lead from the left), and the curtain on its rod drawn back `open` (0
 * closed, 1 right back to the sides, where it is tied). `openOne` draws that
 * casket open, with `inside` in its frame.
 */
export function Alcove({
  box,
  open,
  openOne,
  inside,
}: {
  box: Box
  open: number
  openOne?: CasketKind
  inside?: ReactNode
}) {
  const { x0, x1, top, bottom } = box
  const cx = (x0 + x1) / 2
  const tableY = bottom - 58
  const span = x1 - x0
  const kinds: CasketKind[] = ['gold', 'silver', 'lead']
  // The curtain: each half hangs from the rod, its inner edge drawn back
  // towards the side by `open`, gathered at a tie-back a third of the way up.
  const rod = top + 30
  const half = span / 2
  const pull = half * (1 - clamp(open)) + 16
  const tieY = bottom - 70
  const curtain = (side: 1 | -1) => {
    const outer = side === -1 ? x0 - 6 : x1 + 6
    const inner = outer - side * pull
    const tie = outer - side * Math.max(16, pull * 0.45)
    return (
      `M${n(outer)} ${n(rod)}L${n(inner)} ${n(rod)}` +
      `C${n(inner - side * 4)} ${n(rod + (tieY - rod) * 0.5)} ${n(tie)} ${n(tieY - 20)} ${n(tie)} ${n(tieY)}` +
      `C${n(tie)} ${n(tieY + 26)} ${n(inner + side * 2)} ${n(bottom - 20)} ${n(inner + side * 6)} ${n(bottom + 2)}` +
      `L${n(outer)} ${n(bottom + 2)}Z`
    )
  }
  const folds = (side: 1 | -1) => {
    const outer = side === -1 ? x0 - 6 : x1 + 6
    const inner = outer - side * pull
    const tie = outer - side * Math.max(16, pull * 0.45)
    let d = ''
    for (let k = 1; k < 4; k++) {
      const t = k / 4
      const xa = outer + (inner - outer) * t
      const xb = outer + (tie - outer) * t
      const xc = outer + (inner + side * 6 - outer) * t
      d += `M${n(xa)} ${n(rod + 4)}Q${n(xb)} ${n(tieY - 30)} ${n(xb)} ${n(tieY - 2)}M${n(xb)} ${n(tieY + 6)}Q${n(xb)} ${n(bottom - 30)} ${n(xc)} ${n(bottom)}`
    }
    return d
  }
  return (
    <>
      {/* the recess, its moulding and the dark within */}
      <path
        d={segArch({ x0: x0 - 12, x1: x1 + 12, top: top - 12, bottom })}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.bold}
      />
      <path d={segArch(box)} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      {/* the table and its cloth */}
      <path
        d={`M${n(x0 + 18)} ${n(tableY)}H${n(x1 - 18)}L${n(x1 - 12)} ${n(tableY + 20)}H${n(x0 + 12)}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.4}
      />
      <path
        d={
          gouge(x0 + 30, tableY + 12, x1 - 30, tableY + 12, 0.9) +
          wedge(x0 + 26, tableY + 20, x0 + 30, bottom, 5, 3) +
          wedge(x1 - 26, tableY + 20, x1 - 30, bottom, 5, 3)
        }
        fill={INK}
      />
      {kinds.map((k, i) => (
        <Casket
          key={k}
          kind={k}
          at={[cx + (i - 1) * span * 0.29, tableY]}
          s={span / 190}
          open={openOne === k}
          glints={openOne !== 'gold'}
        >
          {openOne === k ? inside : null}
        </Casket>
      ))}
      {/* the curtain and its rod */}
      <g fill={RED} stroke={INK} strokeWidth={1.6} strokeLinejoin="round">
        <path d={curtain(-1)} />
        <path d={curtain(1)} />
      </g>
      <path
        d={folds(-1) + folds(1)}
        fill="none"
        stroke={INK}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <path
        d={`M${n(x0 - 22)} ${n(rod - 3)}H${n(x1 + 22)}V${n(rod + 2)}H${n(x0 - 22)}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <circle cx={x0 - 24} cy={rod} r={4.4} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <circle cx={x1 + 24} cy={rod} r={4.4} fill={INK} stroke={PAPER} strokeWidth={1.2} />
    </>
  )
}
