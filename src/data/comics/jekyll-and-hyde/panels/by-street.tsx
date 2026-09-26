import { between, gouge, rng } from '@/components/comics/linocut/carve'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'

/**
 * The door in the by-street, shared by "The door and Enfield's story" (seen
 * across the street by day) and "Utterson meets Hyde" (close to, at night),
 * so that it is the same door in both. Chapter 1:
 *
 * "It was two storeys high; showed no window, nothing but a door on the lower
 * storey and a blind forehead of discoloured wall on the upper; and bore in
 * every feature, the marks of prolonged and sordid negligence. The door, which
 * was equipped with neither bell nor knocker, was blistered and distained.
 * Tramps slouched into the recess and struck matches on the panels; children
 * kept shop upon the steps; the schoolboy had tried his knife on the
 * mouldings".
 *
 * So: a plain four-panelled door in a recess, with no bell and no knocker,
 * its paint blistered (paper blisters), the scratches of struck matches on
 * its lower panels, nicks cut in the mouldings round it, and a step. Drawn at
 * any size from its box, with its own seed (212), so both panels cut the
 * same blisters and the same scratches.
 */

export type Box = { x: number; y: number; w: number; h: number }

type DoorMarks = {
  recess: string
  body: string
  panels: string
  blisters: string
  matches: string
  nicks: string
  step: string
}

const cache = new Map<string, DoorMarks>()

function doorMarks({ x, y, w, h }: Box): DoorMarks {
  const key = `${x} ${y} ${w} ${h}`
  const hit = cache.get(key)
  if (hit) return hit
  const r = rng(212)
  const k = w / 40
  // The recess round the door, and the door inside it.
  const m = 5 * k
  const recess = `M${x - m} ${y + h}V${y - m}H${x + w + m}V${y + h}Z`
  const body = `M${x} ${y + h}V${y}H${x + w}V${y + h}Z`
  // Four panels: two tall above the lock rail, two short below.
  const px = 5 * k
  const gap = 4 * k
  const pw = (w - px * 2 - gap) / 2
  const upper = h * 0.5
  const lower = h * 0.28
  const top = y + 6 * k
  const rail = top + upper + 6 * k
  let panels = ''
  for (const cx of [x + px, x + px + pw + gap]) {
    panels += `M${cx} ${top}h${pw}v${upper}h${-pw}Z`
    panels += `M${cx} ${rail}h${pw}v${lower}h${-pw}Z`
  }
  // "blistered and distained": blisters of lifted paint, cut as paper flecks.
  let blisters = ''
  for (let i = 0; i < 26; i++) {
    const bx = x + between(r, 2, w - 2)
    const by = y + between(r, 3, h - 4)
    const bw = between(r, 0.8, 2.2) * k
    blisters += gouge(
      bx - bw,
      by,
      bx + bw,
      by + between(r, -0.4, 0.4) * k,
      between(r, 0.4, 0.8) * k,
    )
  }
  // "struck matches on the panels": short scratches on the lower panels.
  let matches = ''
  for (let i = 0; i < 11; i++) {
    const sx = x + between(r, 6, w - 8) * 1
    const sy = rail + between(r, 2, lower - 2)
    const len = between(r, 3, 6) * k
    matches += gouge(sx, sy, sx + len * 0.9, sy - len * 0.45, 0.45 * k)
  }
  // "the schoolboy had tried his knife on the mouldings": nicks in the frame.
  let nicks = ''
  for (let i = 0; i < 9; i++) {
    const side = i % 3
    if (side === 0) {
      const ny = y + between(r, 8, h - 8)
      nicks += gouge(x - m, ny, x - m + 3.2 * k, ny + between(r, -1.4, 1.4) * k, 0.55 * k)
    } else if (side === 1) {
      const ny = y + between(r, 8, h - 8)
      nicks += gouge(x + w + m, ny, x + w + m - 3.2 * k, ny + between(r, -1.4, 1.4) * k, 0.55 * k)
    } else {
      const nx = x + between(r, 4, w - 4)
      nicks += gouge(nx, y - m, nx + between(r, -1.4, 1.4) * k, y - m + 3.2 * k, 0.55 * k)
    }
  }
  const step = `M${x - m - 4 * k} ${y + h + 4 * k}V${y + h}H${x + w + m + 4 * k}V${y + h + 4 * k}Z`
  const out = { recess, body, panels, blisters, matches, nicks, step }
  cache.set(key, out)
  return out
}

/**
 * The door, drawn into its box: the recess black, the moulding round it a
 * paper line, the door itself ink with its panels cut as paper lines, and no
 * bell and no knocker. `weight` scales the cut lines for a door drawn large.
 */
export function Door({ box, weight = 1 }: { box: Box; weight?: number }) {
  const m = doorMarks(box)
  const k = box.w / 40
  return (
    <g>
      <path d={m.recess} fill={INK} stroke={PAPER} strokeWidth={LINE.carve * weight} />
      <path d={m.body} fill={INK} stroke={PAPER} strokeWidth={LINE.fine * weight} />
      <path d={m.panels} fill="none" stroke={PAPER} strokeWidth={LINE.fine * weight} />
      <path d={m.blisters} fill={PAPER} />
      <path d={m.matches} fill={PAPER} />
      <path d={m.nicks} fill={INK} />
      <path d={m.step} fill={PAPER} stroke={INK} strokeWidth={LINE.fine * weight} />
      <path
        d={`M${box.x - 5 * k - 4 * k} ${box.y + box.h + 1.6 * k}H${box.x + box.w + 5 * k + 4 * k}`}
        stroke={INK}
        strokeWidth={0.9 * weight}
      />
    </g>
  )
}
