import type { ReactNode } from 'react'

import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, gouge, n, rng } from '@/components/comics/linocut/carve'

import { flagFloor } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { cut, lightField } from './light-cuts'

/**
 * CLEOPATRA'S MONUMENT, cut once for the panels of moments 21 to 25 ("Death
 * in the monument" to "A pair so famous"), so that the tower Antony is drawn
 * up, the tower Caesar's camp sees on the skyline and the room where the play
 * ends are one building.
 *
 * The play does not describe it beyond "her monument" (4.13, 4.15, 5.1), "A
 * Room in the Monument" (5.2), and what is done there: the women are "aloft"
 * and draw Antony up to them (4.15), so it is high and its door is not
 * opened to him; Gallus's soldiers take it by surprise (5.2). So it is drawn
 * plainly, as a tomb of Alexandria in about 30 BC might have been: a tall
 * tower of large dressed stone with a cornice and a parapet round its roof,
 * and inside, a room of the same stone with one tall window. Nothing in it
 * is taken from a film or a stage production, and nothing on it is ornament
 * that could be read as a serpent (see the kit's rules, ./people.tsx).
 *
 * WEIGHT. The courses are written as stroked lines, one path for the lot,
 * not as filled cuts: a wall of them costs a few kilobytes.
 */

type Box = { x0: number; x1: number; y0: number; y1: number }

/**
 * The joints of dressed stone in a wall: level courses `course` tall from the
 * box's top, each stone's end joint staggered from the course below, the
 * wall's left edge at `left(y)`. Returns one path to STROKE: in ink about 1.4
 * on a lit face, in paper on a dark one.
 */
export function stoneCourses(
  seed: number,
  box: Box,
  left: (y: number) => number,
  o: { course?: number; stone?: [number, number]; top?: boolean } = {},
): string {
  const r = rng(seed)
  const course = o.course ?? 22
  const [s0, s1] = o.stone ?? [56, 84]
  let d = ''
  let row = 0
  for (let y = box.y0; y < box.y1 - 2; y += course, row++) {
    const x0 = Math.max(box.x0, left(y))
    // the bed joint at the top of the course, except the wall's own top edge
    if (row > 0 || o.top) d += `M${n(x0)} ${n(y)}H${n(box.x1)}`
    const h = Math.min(course, box.y1 - y)
    // the stones' ends: one joint per stone, staggered row by row
    let x = x0 + (row % 2 ? s0 * 0.4 : s0 * 0.9) + between(r, -6, 6)
    while (x < box.x1) {
      d += `M${n(x)} ${n(y)}v${n(h)}`
      x += between(r, s0, s1)
    }
  }
  return d
}

// ── The room in the monument (5.2), for moments 23, 24 and 25 ───────────────
//
// One room, seen from the same place in all three panels, so a student knows
// it is the same room by day, at dusk and at night: a back wall of dark
// dressed stone, one tall window in it on the left with a deep stone sill and
// lintel, and a floor of pale stone flags. Panels are 860 by 340.

/** Where the back wall meets the floor. */
export const ROOM_FLOOR = 258
/** The window's opening, in the back wall. */
export const ROOM_WINDOW = { x0: 192, x1: 262, y0: 56, y1: 204 }
/** The point the floor's joints run to. */
const ROOM_VANISH: [number, number] = [430, 118]

/**
 * The back wall, lit by `light` (0 dark to 1 lit, from the window or a
 * torch): rows of paper cuts that follow the light, as the style guide's
 * gougeField cuts a wall, and the joints of the stone, which print pale where
 * the light reaches and are lost where it does not. Fill `cuts` with PAPER;
 * STROKE `joints` in PAPER (about 1.6) and `dim` in PAPER (about 0.9).
 */
export function roomWall(
  seed: number,
  light: (x: number, y: number) => number,
  o: {
    box?: { x0: number; x1: number; y0: number; y1: number }
    course?: number
    max?: number
  } = {},
): { cuts: string; joints: string; dim: string } {
  const box = o.box ?? { x0: 0, x1: 866, y0: 0, y1: ROOM_FLOOR }
  const course = o.course ?? 30
  const cuts = lightField(seed, box, light, {
    spacing: 6.2,
    len: [16, 60],
    gap: [5, 16],
    max: o.max ?? 3.4,
  })
  const r = rng(seed + 1)
  let joints = ''
  let dim = ''
  let row = 0
  for (let y = box.y0 + course * 0.8; y < box.y1 - 4; y += course, row++) {
    // the bed joint, in runs, bright or dim by the light where each run lies
    let x = box.x0
    while (x < box.x1) {
      const len = between(r, 40, 110)
      const L = light(x + len / 2, y)
      const seg = `M${n(x)} ${n(y + between(r, -0.6, 0.6))}h${n(len)}`
      if (L > 0.42 && L < 0.86) joints += seg
      else if (L > 0.14 && L < 0.86) dim += seg
      x += len
    }
    // the head joints, staggered course by course
    let hx = box.x0 + (row % 2 ? 22 : 58) + between(r, -6, 6)
    while (hx < box.x1) {
      const L = light(hx, y - course / 2)
      const seg = `M${n(hx)} ${n(y - course + 1)}v${n(course - 1)}`
      if (L > 0.42 && L < 0.86) joints += seg
      else if (L > 0.14 && L < 0.86) dim += seg
      hx += between(r, 60, 90)
    }
  }
  return { cuts, joints, dim }
}

/** The floor of stone flags, pale, its joints in ink running to the room's vanishing point. Fill with INK. */
export function roomFloor(seed: number, W = 860, H = 340): string {
  return flagFloor(rng(seed), W, H, ROOM_FLOOR, ROOM_VANISH, 66, 5)
}

/** A shadow on the floor under someone or something: rows of short ink cuts. Fill with INK. */
export function floorShadow(cx: number, y: number, half: number, rows = 4): string {
  let d = ''
  for (let k = 0; k < rows; k++) {
    const w = half * (1 - k / (rows + 1))
    d += cut(cx - w, y + k * 2.6 - 3, w * 2, 1.1 + (rows - k) * 0.12)
  }
  return d
}

/**
 * The window: whatever the panel puts in it (`children`, the sky by day, at
 * dusk or at night) clipped to the opening, then the deep stone round it: a
 * paper reveal down the left jamb where the wall's thickness catches the
 * light, the lintel and the sill, each a single stone with its edge cut in
 * paper. `uid` makes the clip's id unique. `at` moves it along the wall, for a
 * panel that looks at the room from a step to one side.
 */
export function RoomWindow({
  uid,
  at = ROOM_WINDOW.x0,
  children,
}: {
  uid: string
  /** The opening's left edge, if the panel looks at the room from a step to one side. */
  at?: number
  children?: ReactNode
}) {
  const { y0, y1 } = ROOM_WINDOW
  const x0 = at
  const x1 = at + (ROOM_WINDOW.x1 - ROOM_WINDOW.x0)
  const clip = `${uid}-room-window`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} />
        </clipPath>
      </defs>
      <rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>{children}</g>
      {/* the jamb's reveal, the thickness of the wall */}
      <path d={`M${x0} ${y0}L${x0 + 10} ${y0 + 8}V${y1 - 4}L${x0} ${y1}Z`} fill={INK} />
      <path d={gouge(x0 + 4, y0 + 10, x0 + 4.6, y1 - 8, 1.2)} fill={PAPER} />
      {/* the lintel and the sill */}
      <path
        d={`M${x0 - 16} ${y0 - 18}H${x1 + 16}V${y0}H${x0 - 16}Z M${x0 - 12} ${y1}H${x1 + 12}V${y1 + 12}H${x0 - 12}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={
          gouge(x0 - 12, y0 - 4, x1 + 12, y0 - 4, 1.1) + gouge(x0 - 8, y1 + 4, x1 + 8, y1 + 4, 1.2)
        }
        fill={PAPER}
      />
    </>
  )
}

/**
 * The queen's bed, at the right of the room: "Take up her bed" (5.2). A
 * couch on turned legs with a high end at its head, a bolster, and a canopy
 * on two posts with curtains. Open, as in moment 24, the curtains are tied
 * back to the posts and the couch is bare; drawn, as in moment 25, they hang
 * closed all along its side from the canopy to below the couch, its legs
 * showing under the hem, so that nothing on it can be seen, as the Othello
 * panels close Desdemona's bed (../../othello). Stands with its feet on the
 * floor at y 300; the panel draws it in front of the back wall.
 */
export const BED = { x0: 590, x1: 846, tester: 58, couch: 230, foot: 300 }

export function QueensBed({ curtains }: { curtains: 'open' | 'drawn' }) {
  const { x0, x1, tester, couch, foot } = BED
  const postL = x0 + 8
  const postR = x1 - 8
  // the couch: mattress, frame, legs, and the high end at the head (right)
  const mattress = `M${x0 + 18} ${couch}C${x0 + 40} ${couch - 8} ${x1 - 60} ${couch - 8} ${x1 - 30} ${couch - 2}L${x1 - 26} ${couch + 16}H${x0 + 14}Z`
  const frame = `M${x0 + 10} ${couch + 14}H${x1 - 22}V${couch + 32}H${x0 + 10}Z`
  const legs = `M${x0 + 20} ${couch + 30}h12l-3 ${foot - couch - 32}h-6ZM${x1 - 50} ${couch + 30}h12l-3 ${foot - couch - 32}h-6Z`
  const head = `M${x1 - 34} ${couch + 16}C${x1 - 36} ${couch - 30} ${x1 - 30} ${couch - 52} ${x1 - 14} ${couch - 60}C${x1 - 8} ${couch - 50} ${x1 - 12} ${couch - 20} ${x1 - 16} ${couch + 16}Z`
  const bolster = `M${x1 - 74} ${couch - 4}C${x1 - 74} ${couch - 18} ${x1 - 40} ${couch - 20} ${x1 - 38} ${couch - 4}Z`
  // a curtain hung from the tester: closed, a long fall of cloth; open, gathered to its post
  const fold = (x: number, top: number, bottom: number, w: number) =>
    gouge(x, top, x + w * 0.1, bottom, w, 0.6)
  let open = ''
  let openFolds = ''
  for (const [px, dir] of [
    [postL, 1],
    [postR, -1],
  ] as [number, 1 | -1][]) {
    const tie = 176
    open +=
      `M${px - dir * 4} ${tester + 10}C${px + dir * 30} ${tester + 40} ${px + dir * 22} ${tie - 30} ${px + dir * 6} ${tie}` +
      `C${px + dir * 18} ${tie + 30} ${px + dir * 30} ${foot - 50} ${px + dir * 26} ${foot - 6}L${px - dir * 4} ${foot - 6}Z`
    openFolds +=
      gouge(px + dir * 6, tester + 18, px + dir * 4, tie - 8, 1.4, dir * 1.6) +
      gouge(px + dir * 8, tie + 10, px + dir * 18, foot - 14, 1.5, -dir * 1.2)
  }
  // drawn, the curtain hangs from the tester between the posts to below the
  // couch, its hem scalloped where it is gathered, and the couch's legs show
  // beneath it, so it reads as a bed and not as a hanging on the wall
  const hem = couch + 40
  let drawn = ''
  let drawnFolds = ''
  if (curtains === 'drawn') {
    drawn = `M${postL + 3} ${tester + 8}H${postR - 3}V${hem}`
    for (let x = postR - 3; x > postL + 3; x -= 21)
      drawn += `Q${x - 10.5} ${hem + 7} ${Math.max(postL + 3, x - 21)} ${hem}`
    drawn += 'Z'
    for (let x = postL + 14; x < postR - 6; x += 21)
      drawnFolds += fold(x, tester + 16, hem - 4, 1.7)
  }
  return (
    <g>
      {curtains === 'drawn' && <path d={legs} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />}
      {curtains === 'open' && (
        <>
          <path d={head} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path d={legs + frame} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path d={mattress} fill={PAPER} stroke={INK} strokeWidth={1.6} />
          <path d={bolster} fill={PAPER} stroke={INK} strokeWidth={1.4} />
          <path
            d={
              gouge(x0 + 24, couch + 7, x1 - 34, couch + 7, 0.9) +
              gouge(x0 + 14, couch + 23, x1 - 26, couch + 23, 1.2)
            }
            fill={INK}
          />
        </>
      )}
      {/* the posts and the tester */}
      <path
        d={`M${postL - 4} ${tester}h8V${foot}h-8ZM${postR - 4} ${tester}h8V${foot}h-8ZM${x0 - 8} ${tester - 8}H${x1 + 8}V${tester + 8}H${x0 - 8}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={gouge(x0 - 4, tester - 2, x1 + 4, tester - 2, 1)} fill={PAPER} />
      {curtains === 'open' ? (
        <>
          <path d={open} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
          <path d={openFolds} fill={INK} />
          {/* the ties */}
          <path d={`M${postL - 6} 174h16v5h-16ZM${postR - 10} 174h16v5h-16Z`} fill={INK} />
        </>
      ) : (
        <>
          <path d={drawn} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
          <path d={drawnFolds} fill={INK} />
        </>
      )}
    </g>
  )
}
