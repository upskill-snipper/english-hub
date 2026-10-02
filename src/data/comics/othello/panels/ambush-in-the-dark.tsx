import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  rays,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { doublet, sheathed } from '../../romeo-and-juliet/panels/verona-kit'
import { OLD_BEARD } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Person, limb, type Pose } from './people'
import { OffTheirFeet } from './seated'

/**
 * Act 5, Scene 1: "Ambush in the dark", the fourteenth moment in the guide's
 * timeline. The ambush itself is over before the picture: it is the moment
 * after, when the lights arrive and the faces are seen. Every detail is from
 * the scene in the held edition (src/data/full-texts/othello.ts):
 *
 * - "Cyprus. A Street." IAGO: "Here, stand behind this bulk." So a street of
 *   stone house fronts, shut for the night, with a bulk, a stall built out
 *   from a house front under its own roof. It is "between twelve and one"
 *   (4.2), and LODOVICO: "It is a heavy night". So the sky over the roofs is
 *   all but black, and nothing in the street is lit but by the one lantern.
 * - CASSIO: "[Falls.]" ... "O, help, ho! light! a surgeon!" ... "Here, here!
 *   for heaven's sake, help me!" So Cassio sits on the ground before the bulk
 *   where he fell (./seated.tsx), leaning back on his far hand, which is out
 *   of sight behind him, his near hand raised open towards the light, his
 *   mouth open, calling. No wound is drawn, and nothing about his leg: "My
 *   leg is cut in two" is left to the words.
 * - "Enter Iago with a light." GRATIANO: "Here's one comes in his shirt, with
 *   light and weapons." IAGO: "Who's there? Whose noise is this that cries on
 *   murder?" So Iago comes in from the right with a lantern held up, its
 *   flame the spot colour and its light cut round it, calling out; he is in
 *   his shirt, cut in paper over the kit's jerkin, with his sword sheathed in
 *   its baldric at his side, as if roused from his bed: the honest man come
 *   running to help.
 * - LODOVICO: "Let's think't unsafe / To come in to the cry without more
 *   help." So Lodovico and old Gratiano stand back at the edge of the light,
 *   watching: Lodovico with an open hand raised a little to hold back,
 *   Gratiano with his hand on his breast. Their faces are lit, as the kit
 *   lights every Venetian face, and the dark is in the street round them.
 *
 * LEFT OUT, on purpose (the play's own rules, ../index.ts). No blade is drawn
 * out of its scabbard, and nobody is touched by one. Roderigo, wounded behind
 * the bulk and then stabbed by Iago, is not shown at all; nor is Othello, who
 * has come and gone before the lights arrive; nor are Bianca and Emilia, who
 * come later. No blood and no wound. Nothing is taken from a film or stage
 * production.
 *
 * Seeds: 1401 (the sky, the stone and the street), 1402 (the lantern's
 * light), 1403 (the bulk's boards).
 */

const W = 860
const H = 340
/** The foot of the house fronts, where the paving begins. */
const PAVE = 270
/** Where everyone stands. */
const FEET = 318
/** The bulk: the stall built out from the house front, its board and its roof. */
const BULK = { x0: 300, x1: 500, board: 214, roof: 140 }
/** Iago, and the lantern hung from his raised hand: the flame inside it. */
const IAGO_AT: Pt = [640, FEET]
const IAGO_SCALE = 1.12
const LAMP: Pt = [598, 172]

type Marks = {
  sky: string
  stone: string
  street: string
  glow: string
  bulk: string
}

const lit = (x: number, y: number) =>
  Math.max(clamp(1 - Math.hypot((x - LAMP[0]) * 0.8, (y - LAMP[1]) * 1.1) / 340) ** 1.2, 0)

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1401)
  // A heavy night: a dark sky over the roofs, a few cuts of low cloud.
  const sky = gougeField(
    r,
    { x0: 0, x1: W, y0: 10, y1: 70 },
    (_x, y) => clamp((y - 10) / 80) * 0.34 + 0.02,
    { spacing: 7, len: [30, 90], gap: [10, 30], max: 2.4 },
  )
  // The house fronts: courses of stone, cut in paper only where the lantern reaches them.
  let stone = ''
  for (let y = 84; y < PAVE - 4; y += 13) {
    let x = between(r, -10, 0)
    while (x < W) {
      const len = between(r, 24, 58)
      const L = lit(x + len / 2, y)
      if (L > 0.04) stone += gouge(x, y + between(r, -0.5, 0.5), x + len, y, 0.4 + L * 1.7)
      x += len + between(r, 2, 6)
    }
    const off = (Math.round(y / 13) % 2) * 19
    for (let x2 = 10 + off; x2 < W; x2 += 38) {
      const L = lit(x2, y + 6)
      if (L > 0.18) stone += gouge(x2, y + 2, x2, y + 11, 0.4 + L * 0.8)
    }
  }
  // The paving: rows of setts, lit in a pool round the lantern.
  let street = ''
  for (let y = PAVE + 5; y < H; y += 6) {
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 14, 44)
      const L = clamp(1 - Math.hypot(x + len / 2 - LAMP[0] + 70, (y - FEET) * 3.2) / 400)
      if (r() < 0.14 + L * 0.9)
        street += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.5 + L * 2.4)
      x += len + between(r, 6, 20) * (1 - L * 0.5)
    }
  }
  const glow = rays(rng(1402), LAMP[0], LAMP[1], { from: 20, to: 124, every: 5.6, width: 2.8 })
  const b = rng(1403)
  let bulk = ''
  for (let x = BULK.x0 + 10; x < BULK.x1 - 6; x += 12) {
    const L = lit(x, BULK.board + 30)
    bulk += gouge(x, BULK.board + 12, x + between(b, -1, 1), PAVE - 4, 0.5 + L * 1.6)
  }
  cached = { sky, stone, street, glow, bulk }
  return cached
}

/** The street: the sky over the roofs, the house fronts, their shut windows and door, and the bulk. */
function Street() {
  const m = marks()
  return (
    <g>
      <path d={m.sky} fill={PAPER} />
      <path
        d="M-4 80H96L118 64H200L214 78H330L350 62H452L468 76H612L630 64H724L742 78H864V86H-4Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={m.stone} fill={PAPER} />
      <path d={m.glow} fill={PAPER} />
      {/* shuttered windows and a shut door: the town asleep */}
      <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve}>
        <rect x={60} y={112} width={44} height={60} />
        <rect x={186} y={112} width={44} height={60} />
        <rect x={680} y={108} width={44} height={60} />
        <rect x={780} y={108} width={44} height={60} />
        <path d={`M548 ${PAVE}V216Q578 196 608 216V${PAVE}Z`} />
      </g>
      <path
        d={
          gouge(82, 116, 82, 168, 1.1) +
          gouge(208, 116, 208, 168, 1.1) +
          gouge(702, 112, 702, 164, 1.1) +
          gouge(802, 112, 802, 164, 1.1) +
          gouge(578, 206, 578, PAVE - 4, 1.1)
        }
        fill={PAPER}
      />
      {/* the bulk: a stall built out from the house, its board and its sloping roof */}
      <path
        d={`M${BULK.x0} ${PAVE}V${BULK.board}H${BULK.x1}V${PAVE}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={m.bulk} fill={PAPER} />
      <path
        d={`M${BULK.x0 - 10} ${BULK.board}H${BULK.x1 + 10}V${BULK.board + 9}H${BULK.x0 - 10}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={`M${BULK.x0 - 18} ${BULK.roof + 22}L${BULK.x0 - 4} ${BULK.roof}H${BULK.x1 + 4}L${BULK.x1 + 18} ${BULK.roof + 22}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={gouge(BULK.x0 - 10, BULK.roof + 15, BULK.x1 + 10, BULK.roof + 15, 1.1)}
        fill={PAPER}
      />
      <path
        d={`M${BULK.x0 + 2} ${BULK.roof + 22}V${BULK.board}M${BULK.x1 - 2} ${BULK.roof + 22}V${BULK.board}`}
        stroke={INK}
        strokeWidth={6}
      />
      {/* the paving */}
      <rect x={0} y={PAVE} width={W} height={H - PAVE} fill={INK} />
      <path d={m.street} fill={PAPER} />
      <rect x={0} y={PAVE} width={W} height={2.4} fill={PAPER} />
    </g>
  )
}

// ── The people ──────────────────────────────────────────────────────────────

/** Lodovico, holding back at the edge of the light, an open hand raised a little before him. */
const LODOVICO: Pose = {
  look: 'lodovico',
  eye: 'open',
  head: { rot: 4 },
  far: {
    pts: [
      [-3, -130],
      [-6, -104],
      [-4, -82],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [16, -108],
      [32, -116],
    ],
    hand: 'open',
    deg: -54,
    thumb: -1,
  },
}

/**
 * Old Gratiano beside him, his hand on his breast. His short white beard is
 * the kit's (OLD_BEARD, paper on his lit face); GRATIANO_BEARD cuts its edge
 * and strands bolder in ink here. WHY (2 October 2026): at panel size the
 * kit's fine edge was lost under the paper grain, and an old man with white
 * hair to the nape, a pale face and a gown to the floor read as an old woman.
 */
const GRATIANO: Pose = {
  look: 'gratiano',
  eye: 'open',
  head: { rot: 6 },
  far: {
    pts: [
      [-3, -130],
      [-6, -104],
      [-4, -82],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [-2, -106],
      [12, -112],
    ],
    hand: 'open',
    deg: -100,
    thumb: 1,
    size: 14,
    spread: 14,
  },
}

/** Strands and a moustache cut in ink into the kit's OLD_BEARD, in the frame of the head. */
const GRATIANO_BEARD =
  'M10 17C11 22 11.6 26 11 30M13.4 15C14.8 20 15 25 13.8 29M17.4 7.6C15.4 6.6 13.2 7 11.6 8.4'

/**
 * Cassio on the ground where he fell (./seated.tsx), sitting up and leaning
 * back on his far hand, his near hand raised open towards the light, his
 * mouth open, calling.
 */
const CASSIO: Pose = {
  look: 'cassio',
  sword: false,
  eye: 'open',
  mouth: 'open',
  head: { rot: -10 },
  far: {
    pts: [
      [-3, -130],
      [-14, -106],
      [-28, -86],
    ],
    hand: 'mitt',
    deg: 120,
  },
  near: {
    pts: [
      [4, -130],
      [24, -124],
      [44, -134],
    ],
    hand: 'open',
    deg: -34,
    thumb: -1,
  },
}

/**
 * Iago, flipped, come in from the right with the lantern: his near arm bent
 * and raised to hold it up before him, his far arm at his side, his mouth
 * open on "Who's there?".
 */
const IAGO: Pose = {
  look: 'iago',
  eye: 'open',
  mouth: 'open',
  head: { rot: -2 },
  far: {
    pts: [
      [-3, -130],
      [-4, -104],
      [-2, -84],
    ],
    hand: 'none',
  },
  near: {
    pts: [
      [4, -130],
      [24, -134],
      [36, -152],
    ],
    hand: 'mitt',
    deg: -70,
  },
}

/**
 * "In his shirt": the white shirt over the kit's jerkin, in Iago's own frame,
 * drawn after his figure: the body of the shirt, loose and gathered at the
 * neck, its folds in ink; the near sleeve, full, to the wrist; the baldric
 * over it in ink, and the sword's hilt again where the shirt covered it.
 */
function Shirt() {
  const body = doublet([0, -136], [0, -70], 1, { width: 30, hem: 12, flare: 5 })
  const sleeve = limb([
    [4, -130],
    [24, -134],
    [33, -147],
  ])
  const hilt = sheathed([0, -74], 1, 76).hilt
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d={body} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path
        d="M-6 -128C-8 -112 -8 -96 -6 -80M5 -126C8 -110 8 -96 6 -82M-2 -134C0 -132 2 -132 4 -134"
        fill="none"
        stroke={INK}
        strokeWidth={1}
      />
      <path d={sleeve} fill="none" stroke={INK} strokeWidth={12.4} />
      <path d={sleeve} fill="none" stroke={PAPER} strokeWidth={9.8} />
      <path
        d="M22 -137C25 -132 25 -127 23 -124M30 -146C28 -142 28 -139 29 -136"
        fill="none"
        stroke={INK}
        strokeWidth={0.9}
      />
      <path d={gouge(-11, -134, 12, -80, 2, 1.6)} fill={INK} />
      <path d={hilt} fill={PAPER} stroke={INK} strokeWidth={0.8} />
    </g>
  )
}

/** The lantern, hung from its ring in Iago's hand: a cage of horn and iron, the flame in it in the spot colour. */
function Lantern() {
  const [x, y] = LAMP
  return (
    <g transform={`translate(${x} ${y}) scale(1.25)`}>
      <path
        d="M0 -26C-5 -26 -5 -20 0 -20C5 -20 5 -26 0 -26Z"
        fill="none"
        stroke={INK}
        strokeWidth={1.8}
      />
      <path d="M-9 -18H9L6 -13H-6Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <path d="M0 -20V-18" stroke={INK} strokeWidth={2} />
      <path d="M-8 -13H8V12H-8Z" fill={PAPER} stroke={INK} strokeWidth={1.6} />
      <path d="M-8 -0.5H8M0 -13V12" stroke={INK} strokeWidth={0.9} />
      <path
        className="lc-flicker"
        style={timing({ dur: 0.9, delay: 0.2 })}
        d="M0 9C-4 7 -4.6 2 -2 -3C-1.6 -0.6 -0.6 0.4 0 0C-0.6 -4 0.4 -7 2 -9C2.8 -5 4.4 -2 4 2C3.6 5 2 8 0 9Z"
        fill={RED}
      />
      <path d="M-9.4 12H9.4L7 17H-7Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
    </g>
  )
}

function AmbushInTheDark({ uid }: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [480, 200], push: 1.03 })}>
      <Street />
      <Person pose={GRATIANO} at={[96, FEET]} scale={1.08}>
        <g transform={`translate(3 -160) rotate(${GRATIANO.head?.rot ?? 0})`}>
          <path d={OLD_BEARD} fill="none" stroke={INK} strokeWidth={1.7} strokeLinejoin="round" />
          <path
            d={GRATIANO_BEARD}
            fill="none"
            stroke={INK}
            strokeWidth={1.1}
            strokeLinecap="round"
          />
        </g>
      </Person>
      <Person pose={LODOVICO} at={[178, FEET]} scale={1.1} />
      <OffTheirFeet
        uid={uid}
        id="cassio"
        pose={CASSIO}
        how="ground"
        at={[392, 312]}
        scale={1.08}
        lean={-12}
      />
      <Person pose={IAGO} at={IAGO_AT} scale={IAGO_SCALE} flip>
        <Shirt />
      </Person>
      <Lantern />
    </g>
  )
}

export const ambushInTheDark: LinocutArt = { width: W, height: H, Draw: AmbushInTheDark }
