import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { lightField, skyLines } from './light-cuts'
import { Column, beam, parapet } from './palace'
import { Person, type P } from './people'

/**
 * Act 1, Scene 2: "News from Rome", the second moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Alexandria. Another Room in Cleopatra’s palace." So the palace of the
 *   first panel (./palace.tsx), another of its rooms: a dark wall with a
 *   doorway at the left, and to the right the columns and the daylight.
 * - ENOBARBUS: "Bring in the banquet quickly; wine enough Cleopatra’s health
 *   to drink." The scene opens on a feast, and the queen's party has gone
 *   ("We will not look upon him. Go with us."). So the banquet is left
 *   standing behind Antony: a table with a cloth, a dish of grapes and two
 *   cups on it, and beside it on the floor a tall jar of the wine in its
 *   stand, printed in the spot colour as the one thing of Egypt's pleasure
 *   Antony turns his back on, cut large so it stays a jar at phone width.
 *   Nobody is drinking and no cup is near anyone's mouth.
 * - "Enter another Messenger with a letter." THIRD MESSENGER: "Fulvia thy wife
 *   is dead." ... "[Gives a letter.]" ANTONY: "Forbear me." So at the left,
 *   come in through the doorway from the road, the messenger in his short
 *   tunic and travelling cloak, the kit's (./people.tsx), has just put the
 *   letter into Antony's hand: his own hand is still held out, low and open,
 *   and he bows his head.
 * - ANTONY: "There’s a great spirit gone! ... I must from this enchanting
 *   queen break off." So Antony, the kit's Antony in the tunic he wears at
 *   ease in Alexandria, as in the first panel, has turned from the feast to
 *   the letter, holding it up before him and reading it, his head bowed over
 *   it.
 *
 * The quotation is Antony's own, from the same scene, verbatim. Nothing is
 * taken from a film or stage production. Seeds: 201 (the wall), 202 (the
 * sky), 203 (the floor), 204 and 205 (the parapets), 206 (the doorway's
 * light), 207 (the grapes).
 */

const W = 860
const H = 340
const BEAM = { top: 14, bottom: 40 }
const WALL_FOOT = 262
const FEET = 328
/** The doorway in the dark wall: its sides, its lintel's foot. */
const DOOR = { x0: 62, x1: 142, top: 78 }
/** Where the dark wall ends and the columns begin. */
const WALL_END = 270
const COLS = [300, 560, 820]
const CAP_TOP = 40
const SILL = 224
/** The banquet table: its top's front edge, its ends, and the cloth's hem. */
const TABLE = { x0: 468, x1: 648, top: 252, hem: 312 }
/** The wine jar's foot, on the floor beside the table. */
const JAR = { cx: 704, foot: 314 }
/** The scale every figure is drawn at: closer than the first panel's hall. */
const S = 1.2

type Marks = {
  wall: string
  sky: string
  doorLight: string
  floor: string
  parapets: { shape: string; cuts: string }[]
  cloth: string
  grapes: P[]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The wall is dark, a little lit at the doorway and towards the columns.
  const wall = lightField(
    201,
    { x0: 0, x1: WALL_END, y0: BEAM.bottom + 2, y1: WALL_FOOT },
    (x, y) =>
      clamp(
        Math.max(
          0.5 - Math.hypot(x - (DOOR.x0 + DOOR.x1) / 2, (y - 170) * 0.6) / 170,
          0.1 + ((x - 150) / 104) * 0.35,
        ) -
          (y - 160) / 1200,
      ),
    { spacing: 6, len: [12, 40], gap: [6, 18], max: 3 },
  )
  const sky = skyLines(
    202,
    { x0: WALL_END, x1: W, y0: BEAM.bottom + 2, y1: SILL - 2 },
    (_x, y) => 0.4 - (y - BEAM.bottom) / 260,
  )
  // Through the doorway, the daylight of the court outside.
  const doorLight = skyLines(
    206,
    { x0: DOOR.x0, x1: DOOR.x1, y0: DOOR.top + 2, y1: WALL_FOOT },
    (_x, y) => 0.32 - (y - DOOR.top) / 400,
  )
  const floor = flagFloor(rng(203), W, H, WALL_FOOT, [400, 120], 64, 5)
  const parapets = [0, 1].map((k) =>
    parapet(204 + k, COLS[k] + 14, COLS[k + 1] - 14, SILL, WALL_FOOT),
  )
  const r = rng(207)
  let cloth = ''
  for (let x = TABLE.x0 + 16; x < TABLE.x1 - 8; x += between(r, 22, 32))
    cloth += gouge(x, TABLE.top + 14, x + between(r, -2, 2), TABLE.hem - 6, between(r, 1.3, 1.8))
  // a bunch of grapes lying in the dish, its point hanging over the rim:
  // rows of four, three, two and one, so it reads as a bunch and not a heap
  const grapes: P[] = []
  const rows = [4, 3, 2, 1]
  rows.forEach((count, row) => {
    for (let k = 0; k < count; k++)
      grapes.push([
        496 + row * 7.6 + between(r, -0.4, 0.4),
        238 + (k - (count - 1) / 2) * 7.4 + row * 1.6 + between(r, -0.4, 0.4),
      ])
  })
  cached = { wall, sky, doorLight, floor, parapets, cloth, grapes }
  return cached
}

/**
 * A tall jar of wine in its stand, on the floor: a narrow neck with a lip, two
 * handles from the neck down to the shoulder, a broad shoulder, the body
 * tapering to a point that sits in a ring stand. In the spot colour, edged in
 * ink; the handles and the stand in ink; a band round the shoulder and a
 * glint down the body cut in paper.
 */
function WineJar({ cx, foot }: { cx: number; foot: number }) {
  const t = foot - 128
  const body =
    `M${cx - 9} ${t}H${cx + 9}L${cx + 8} ${t + 6}L${cx + 7} ${t + 24}` +
    `C${cx + 22} ${t + 30} ${cx + 28} ${t + 42} ${cx + 27} ${t + 58}` +
    `C${cx + 25} ${t + 80} ${cx + 14} ${t + 102} ${cx + 3} ${t + 118}L${cx} ${t + 122}L${cx - 3} ${t + 118}` +
    `C${cx - 14} ${t + 102} ${cx - 25} ${t + 80} ${cx - 27} ${t + 58}` +
    `C${cx - 28} ${t + 42} ${cx - 22} ${t + 30} ${cx - 7} ${t + 24}L${cx - 8} ${t + 6}Z`
  const handles =
    `M${cx - 7} ${t + 8}C${cx - 22} ${t + 6} ${cx - 24} ${t + 22} ${cx - 18} ${t + 30}` +
    `M${cx + 7} ${t + 8}C${cx + 22} ${t + 6} ${cx + 24} ${t + 22} ${cx + 18} ${t + 30}`
  const stand = `M${cx - 16} ${foot}L${cx - 11} ${t + 108}H${cx + 11}L${cx + 16} ${foot}Z`
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d={stand} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={handles} fill="none" stroke={PAPER} strokeWidth={6.6} />
      <path d={handles} fill="none" stroke={INK} strokeWidth={3.6} />
      <path d={body} fill={RED} stroke={PAPER} strokeWidth={3.4} paintOrder="stroke" />
      <path d={body} fill="none" stroke={INK} strokeWidth={1.4} />
      <path d={`M${cx - 10.4} ${t}H${cx + 10.4}`} stroke={INK} strokeWidth={3.2} />
      <path
        d={
          gouge(cx - 24, t + 44, cx + 24, t + 44, 1.6) +
          gouge(cx - 12, t + 54, cx - 9, t + 98, 1.4, 1.6)
        }
        fill={PAPER}
      />
      <path d={`M${cx - 13} ${t + 108}H${cx + 13}`} stroke={PAPER} strokeWidth={1.2} />
    </g>
  )
}

/** A drinking cup standing on the table: a shallow bowl on a stem and foot, in ink. */
function cup(cx: number, foot: number): string {
  return (
    `M${cx - 13} ${foot - 16}Q${cx} ${foot - 4} ${cx + 13} ${foot - 16}Z` +
    `M${cx - 1.4} ${foot - 9}H${cx + 1.4}V${foot - 2}H${cx - 1.4}Z` +
    `M${cx - 6} ${foot - 2}H${cx + 6}V${foot}H${cx - 6}Z`
  )
}

/**
 * The letter in Antony's hand, in his figure's frame: an opened sheet held up
 * before him to read, its lines cut in ink.
 */
const LETTER = 'M37 -142L56 -146L60 -120L41 -116Z'
const LETTER_LINES = 'M42 -136L55 -138.8M43 -131L56 -133.8M44 -126L57 -128.8M45 -121L53 -122.6'

function NewsFromRome(_props: ArtProps) {
  const m = marks()
  const b = beam(W, BEAM.top, BEAM.bottom)
  return (
    <g className="lc-push" style={timing({ origin: [360, 200], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      {/* the dark wall, and the bright doorway in it */}
      <rect x={0} y={BEAM.bottom} width={WALL_END} height={WALL_FOOT - BEAM.bottom} fill={INK} />
      <path d={m.wall} fill={PAPER} />
      <rect
        x={DOOR.x0 - 10}
        y={DOOR.top - 12}
        width={DOOR.x1 - DOOR.x0 + 20}
        height={WALL_FOOT - DOOR.top + 12}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <rect
        x={DOOR.x0}
        y={DOOR.top}
        width={DOOR.x1 - DOOR.x0}
        height={WALL_FOOT - DOOR.top}
        fill={PAPER}
      />
      <path d={m.doorLight} fill={INK} />
      <path d={gouge(DOOR.x0 - 10, DOOR.top - 6, DOOR.x1 + 10, DOOR.top - 6, 1.2)} fill={PAPER} />
      {m.parapets.map((p, k) => (
        <g key={k}>
          <path d={p.shape} fill={INK} />
          <path d={p.cuts} fill={PAPER} />
        </g>
      ))}
      <path d={m.floor} fill={INK} />
      <path d={footShadow(238, FEET + 2, 58) + footShadow(394, FEET + 2, 66)} fill={INK} />

      {/* the beam and the columns */}
      <path d={b.shape} fill={INK} />
      <path d={b.cuts} fill={PAPER} />
      {COLS.map((cx) => (
        <Column key={cx} cx={cx} top={CAP_TOP} foot={WALL_FOOT + 2} />
      ))}

      {/* the banquet left standing: the table and its cloth, the grapes, the cups, the wine jar */}
      <path
        d={`M${TABLE.x0} ${TABLE.top}H${TABLE.x1}L${TABLE.x1 + 6} ${TABLE.hem}Q${(TABLE.x0 + TABLE.x1) / 2} ${TABLE.hem + 5} ${TABLE.x0 - 6} ${TABLE.hem}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={m.cloth} fill={PAPER} />
      <path d={gouge(TABLE.x0, TABLE.top + 3, TABLE.x1, TABLE.top + 3, 1.6)} fill={PAPER} />
      <path
        d={`M${486} ${TABLE.top - 1}Q${514} ${TABLE.top + 7} ${542} ${TABLE.top - 1}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.4}
      />
      {/* the bunch's stalk */}
      <path d="M490 238Q484 234 482 228" stroke={INK} strokeWidth={2} fill="none" />
      <g fill={INK} stroke={PAPER} strokeWidth={1.2}>
        {m.grapes.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={n(x)} cy={n(y)} r={3.8} />
        ))}
      </g>
      <path
        d={cup(596, TABLE.top) + cup(630, TABLE.top)}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <WineJar cx={JAR.cx} foot={JAR.foot} />

      {/* the messenger, come in from the road, the letter given */}
      <Person
        pose={{
          look: 'messenger',
          head: { rot: 14 },
          eye: 'down',
          near: {
            pts: [
              [5, -128],
              [14, -104],
              [32, -100],
            ],
            hand: 'open',
            deg: -8,
            thumb: -1,
          },
        }}
        at={[238, FEET]}
        scale={S}
      />
      {/* Antony, turned from the feast to the letter */}
      <Person
        pose={{
          look: 'antony',
          dress: 'tunic',
          head: { rot: 22 },
          eye: 'down',
          near: {
            pts: [
              [5, -130],
              [18, -110],
              [36, -122],
            ],
            hand: 'grip',
            deg: -34,
          },
        }}
        at={[394, FEET]}
        scale={S}
        flip
      >
        <path d={LETTER} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
        <path d={LETTER_LINES} stroke={INK} strokeWidth={0.9} />
      </Person>
    </g>
  )
}

export const newsFromRome: LinocutArt = { width: W, height: H, Draw: NewsFromRome }
