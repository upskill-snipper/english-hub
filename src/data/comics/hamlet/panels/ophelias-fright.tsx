import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rng,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { keep, shadowPool } from './acts-3-4-rooms'
import { H, LobbyWindow, W, arch, inWindow, type Win } from './lobby'
import { Person, mitt } from './people'

/**
 * Act 2, Scene 1: "Ophelia's fright", the sixth moment in the guide's
 * timeline, at the moment she runs in to her father. Every detail is from the
 * scene in the held edition (src/data/full-texts/hamlet.ts, Project
 * Gutenberg #1524):
 *
 * - "A room in Polonius's house." It is not the castle, so it is a lord's
 *   room of about 1600: plastered walls over a panelled dado, a boarded
 *   floor, round-headed windows like the castle's, and Polonius's table with
 *   his papers and inkstand, the man who has just sent his servant off with
 *   "this money and these notes". The scene names no hour, but Ophelia was
 *   "sewing in my chamber", work for daylight, so it is day.
 * - "[Exit Reynaldo.] [Enter Ophelia.] POLONIUS: How now, Ophelia, what's
 *   the matter? OPHELIA: Alas, my lord, I have been so affrighted." So only
 *   the two of them are drawn: Reynaldo has gone. Ophelia has run in through
 *   the open door, leaning forward, her eyes wide and her lips parted, one
 *   hand held out to her father and the other still holding the sewing she
 *   ran from, a piece of plain linen (the note on LINEN says why it carries
 *   no red). She is the kit's (./people.tsx), her dark hair loose under its
 *   fillet.
 * - "POLONIUS: With what, in the name of God?" So he has turned from his
 *   table, old and white-bearded under his flat bonnet as the kit cuts him,
 *   his eyes wide and a hand lifted.
 * - What frightened her is told, not shown: "Lord Hamlet, with his doublet
 *   all unbrac'd, No hat upon his head, his stockings foul'd ... Pale as his
 *   shirt, his knees knocking each other". The guide's point is that "The
 *   first sign of the antic disposition is seen only through Ophelia's
 *   report", so Hamlet is not in the picture; his state is in the quotation.
 *   Nor is his grip drawn ("He took me by the wrist and held me hard").
 *
 * Nothing is taken from a film or stage production.
 *
 * Seeds: 6101 (the plaster), 6102 (the panelling), 6103 (the boards), 6104
 * (the sky of the window behind Polonius), 6105 (the passage beyond the
 * door), 6106 (the sky of the window on the left).
 */

/** Where the floor meets the wall, and the top of the panelled dado. */
const FLOOR = 262
const DADO = 204
const DOOR: Win = { x0: 196, x1: 282, top: 92, bottom: FLOOR }
const WIN_L: Win = { x0: 40, x1: 106, top: 84, bottom: 196 }
const WIN: Win = { x0: 482, x1: 558, top: 86, bottom: 196 }
const TABLE = { x0: 612, x1: 800, top: 238, foot: 306 }
const OPHELIA_AT: Pt = [258, 320]
const POLONIUS_AT: Pt = [520, 314]

/** Daylight from the windows and the lit passage beyond the door, on pale plaster. */
const light = (x: number, y: number) => {
  const a = clamp(1 - Math.hypot((x - 73) * 0.7, (y - 130) * 1.1) / 240) ** 1.2
  const w = clamp(1 - Math.hypot((x - 520) * 0.7, (y - 126) * 1.1) / 260) ** 1.2
  const d = clamp(1 - Math.hypot((x - 239) * 0.9, (y - 180) * 1.1) / 190) ** 1.3
  return Math.max(a * 0.9, w, d * 0.8, 0.2)
}

type Marks = { plaster: string; panels: string; panelCuts: string; boards: string; passage: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const covered = (x: number, y: number) =>
    inWindow(WIN, x, y) ||
    inWindow(WIN_L, x, y) ||
    (x > DOOR.x0 - 16 && x < DOOR.x1 + 16 && y > DOOR.top - 16)
  const plaster = keep(
    gougeField(rng(6101), { x0: 0, x1: W, y0: 8, y1: DADO - 8 }, light, {
      spacing: 6.8,
      len: [16, 60],
      gap: [6, 22],
      max: 3.2,
    }),
    covered,
  )
  // The dado: a rail along its top, and a row of framed panels, each with a
  // lit edge on the side towards the window and a cut down its middle.
  const r = rng(6102)
  let panels = ''
  let panelCuts = ''
  for (let x = 0; x < W; x += 46) {
    const x0 = x + 6
    const x1 = x + 40
    if (x1 > DOOR.x0 - 16 && x0 < DOOR.x1 + 16) continue
    if (x1 > TABLE.x0 + 8 && x0 < TABLE.x1 - 8) continue
    const L = light((x0 + x1) / 2, (DADO + FLOOR) / 2)
    panels += `M${n(x0)} ${DADO + 12}H${n(x1)}V${FLOOR - 10}H${n(x0)}Z`
    const lit = (x0 + x1) / 2 < 520 && (x0 + x1) / 2 > 100 ? x1 - 1.5 : x0 + 1.5
    panelCuts += wedge(lit, DADO + 14, lit, FLOOR - 12, 0.8 + L * 2.2, 0.8 + L * 2.2)
    panelCuts += gouge(x0 + 4, DADO + 13.5, x1 - 4, DADO + 13.5, 0.5 + L * 1.2)
    if (r() < 0.8)
      panelCuts += gouge(
        (x0 + x1) / 2,
        DADO + 22,
        (x0 + x1) / 2 + between(r, -1, 1),
        FLOOR - 20,
        0.4 + L,
      )
  }
  // The boards of the floor, running back to a point above the window, lit
  // where the day falls across them.
  const b = rng(6103)
  const V: Pt = [520, 40]
  let boards = ''
  for (let xt = -900; xt < W + 900; xt += 34) {
    const xb = V[0] + ((xt - V[0]) * (H - V[1])) / (FLOOR - V[1])
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(b, 0.3, 0.8))
      const xa = xt + (xb - xt) * t0
      const xe = xt + (xb - xt) * t1
      if (Math.max(xa, xe) > -10 && Math.min(xa, xe) < W + 10)
        boards += wedge(
          xa,
          FLOOR + (H - FLOOR) * t0,
          xe,
          FLOOR + (H - FLOOR) * t1,
          0.8 + t0 * 2.6,
          0.8 + t1 * 2.6,
        )
      t0 = t1 + between(b, 0.03, 0.08)
    }
  }
  for (let y = FLOOR + 2; y < FLOOR + 18; y += 3)
    boards += gouge(0, y, W, y, 2.4 - (y - FLOOR) * 0.13)
  // The lit passage beyond the door: a far wall in light hatching, its floor.
  const p = rng(6105)
  let passage = ''
  for (let y = DOOR.top + 10; y < FLOOR - 30; y += 6.4) {
    let x = DOOR.x0 + between(p, -8, 0)
    while (x < DOOR.x1) {
      const len = between(p, 10, 26)
      if (p() < 0.4) passage += gouge(x, y, x + len, y + between(p, -0.3, 0.3), 0.5)
      x += len + between(p, 6, 14)
    }
  }
  passage += wedge(DOOR.x0, FLOOR - 28, DOOR.x1, FLOOR - 28, 2, 2)
  for (let k = 0, y = FLOOR - 22; y < FLOOR - 2; k++, y += 6 + k * 1.6)
    passage += gouge(DOOR.x0 + 2, y, DOOR.x1 - 2, y + 0.4, 0.5 + k * 0.25)
  cached = { plaster, panels, panelCuts, boards, passage }
  return cached
}

/** Polonius's table: a heavy top on turned legs, his papers, his inkstand and quill. */
function Table() {
  const { x0, x1, top, foot } = TABLE
  return (
    <g>
      {/* the legs, turned, and the stretcher */}
      <path
        d={`M${x0 + 10} ${top + 10}H${x0 + 22}V${foot}H${x0 + 10}ZM${x1 - 22} ${top + 10}H${x1 - 10}V${foot}H${x1 - 22}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={`M${x0 + 22} ${foot - 16}H${x1 - 22}V${foot - 10}H${x0 + 22}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <path
        d={
          gouge(x0 + 16, top + 22, x0 + 16, top + 34, 2) +
          gouge(x0 + 16, top + 44, x0 + 16, top + 54, 2) +
          gouge(x1 - 16, top + 22, x1 - 16, top + 34, 2) +
          gouge(x1 - 16, top + 44, x1 - 16, top + 54, 2)
        }
        fill={PAPER}
      />
      {/* the top and its apron */}
      <path
        d={`M${x0 - 4} ${top}H${x1 + 4}V${top + 12}H${x0 - 4}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={gouge(x0, top + 3, x1, top + 3, 1.3)} fill={PAPER} />
      {/* papers, one lying askew over another */}
      <path
        d={`M${x0 + 34} ${top - 1}L${x0 + 82} ${top - 3}L${x0 + 84} ${top - 0.5}L${x0 + 35} ${top + 1}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
      />
      <path
        d={`M${x0 + 58} ${top - 2}L${x0 + 100} ${top - 7}L${x0 + 104} ${top - 4}L${x0 + 61} ${top}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
      />
      {/* the inkstand and its quill */}
      <path
        d={`M${x1 - 64} ${top}V${top - 12}Q${x1 - 64} ${top - 16} ${x1 - 58} ${top - 16}H${x1 - 46}Q${x1 - 40} ${top - 16} ${x1 - 40} ${top - 12}V${top}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <path d={gouge(x1 - 58, top - 10, x1 - 46, top - 10, 0.9)} fill={PAPER} />
      <path
        d={`M${x1 - 52} ${top - 16}C${x1 - 50} ${top - 30} ${x1 - 44} ${top - 42} ${x1 - 34} ${top - 52}C${x1 - 40} ${top - 38} ${x1 - 46} ${top - 28} ${x1 - 50} ${top - 16}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
      />
    </g>
  )
}

/** Where the hand that holds her sewing is, and which way its fist points. */
const SEWING_WRIST: Pt = [12, -84]
const SEWING_ANGLE = 72
/**
 * The sewing Ophelia ran from, still in her hand at her side: a piece of
 * plain linen hanging from her fist, one corner fallen. In her own frame
 * (facing right). Her hand is cut again over its top edge, so it reads as
 * held.
 *
 * NO SPOT COLOUR (2 October 2026). The linen first had a flower worked on it
 * in red, the print's one spot of colour. At phone width a small red mark on
 * a white cloth in a frightened girl's hand reads as blood, and suggests a
 * hurt the scene does not have. So the linen is plain, and this panel prints
 * in black alone.
 */
const LINEN =
  'M7 -78C12 -80.6 19 -80.6 25 -77.6C26.4 -70 26.6 -62 24 -54L17 -46L11 -53.6C7 -60 5.6 -69 7 -78Z'
const LINEN_FOLDS = 'M12.6 -76C13.4 -68 14.2 -60 16.6 -50.6M20.4 -76.6C21.6 -69 22 -62 21.4 -55'

function OpheliasFright({ uid }: ArtProps) {
  const m = marks()
  const door = `${uid}-door`
  return (
    <>
      <defs>
        <clipPath id={door}>
          <path d={arch(DOOR)} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 190], push: 1.03 })}>
        {/* the room: plaster over a panelled dado, a boarded floor */}
        <path d={m.plaster} fill={PAPER} />
        <rect x={0} y={DADO} width={W} height={6} fill={PAPER} />
        <rect x={0} y={DADO + 8} width={W} height={1.6} fill={PAPER} />
        <path d={m.panels} fill="none" stroke={PAPER} strokeWidth={1.6} />
        <path d={m.panelCuts} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.boards} fill={INK} />
        <rect x={0} y={FLOOR - 3} width={W} height={4} fill={INK} />

        <LobbyWindow uid={uid} win={WIN_L} seed={6106} />
        <LobbyWindow uid={uid} win={WIN} seed={6104} />

        {/* the open door, and the lit passage she has run along */}
        <path
          d={arch({ x0: DOOR.x0 - 12, x1: DOOR.x1 + 12, top: DOOR.top - 12, bottom: FLOOR })}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={arch(DOOR)} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
        <g clipPath={`url(#${door})`}>
          <path d={m.passage} fill={INK} />
        </g>
        {/* the door's leaf, swung back against the wall */}
        <path
          d={`M${DOOR.x0 - 12} ${FLOOR}V${DOOR.top + 40}L${DOOR.x0 - 40} ${DOOR.top + 52}V${FLOOR + 12}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={gouge(DOOR.x0 - 26, DOOR.top + 60, DOOR.x0 - 26, FLOOR - 2, 1.2)} fill={PAPER} />

        <Table />
        <path d={shadowPool(TABLE.x0 + 90, TABLE.foot + 4, 100, 4)} fill={INK} />

        {/* Polonius, turning from his table: "With what, in the name of God?" */}
        <path d={shadowPool(POLONIUS_AT[0], POLONIUS_AT[1] + 3, 46, 4)} fill={INK} />
        <Person
          at={POLONIUS_AT}
          scale={1.12}
          flip
          pose={{
            look: 'polonius',
            eye: 'wide',
            mouth: 'open',
            head: { rot: -4 },
            far: {
              pts: [
                [-4, -130],
                [-12, -106],
                [-22, -88],
              ],
            },
            near: {
              pts: [
                [5, -130],
                [24, -112],
                [38, -124],
              ],
              hand: 'open',
              deg: -52,
              thumb: -1,
            },
          }}
        />

        {/* Ophelia, run in from her chamber: "I have been so affrighted" */}
        <path d={shadowPool(OPHELIA_AT[0] + 4, OPHELIA_AT[1] + 3, 50, 4)} fill={INK} />
        <Person
          at={OPHELIA_AT}
          scale={1.16}
          pose={{
            look: 'ophelia',
            eye: 'wide',
            mouth: 'open',
            body: { neck: [8, -132] },
            head: { rot: -6 },
            hem: { front: 18, back: 46 },
            far: {
              pts: [[2, -126], [5, -100], SEWING_WRIST],
              deg: SEWING_ANGLE,
            },
            near: {
              pts: [
                [10, -126],
                [32, -112],
                [52, -116],
              ],
              hand: 'open',
              deg: -14,
              thumb: -1,
            },
          }}
        >
          <path d={LINEN} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
          <path d={LINEN_FOLDS} fill="none" stroke={INK} strokeWidth={0.9} />
          <path
            d={mitt(SEWING_WRIST, SEWING_ANGLE).d}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.4}
            strokeLinejoin="round"
          />
        </Person>
      </g>
    </>
  )
}

export const opheliasFright: LinocutArt = { width: W, height: H, Draw: OpheliasFright }
