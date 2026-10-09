import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rays, rng, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { headland } from '../../othello/panels/garden'
import { flame, flameCore } from './caesars-house'
import { cut, lightField, seaCuts } from './light-cuts'
import { Person, type Pose } from './people'

/**
 * Act 2, Scene 7: "Pompey's galley", the ninth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "On board Pompey’s Galley, lying near Misenum." "Music. Enter two or
 *   three Servants with a banquet." The feast runs into the night: it ends
 *   with Caesar's "Pompey, good night". So the galley lies at anchor in the
 *   bay at dusk, the sky still pale low over the sea and darkening above,
 *   Mount Misena dark on the far shore ("About the Mount Misena", 2.2). The
 *   ship is told by what is on her deck: the far bulwark with the sea beyond
 *   it, the mast with its sail furled on the yard, and the anchor cable. The
 *   feast is set under an awning rigged aft of the mast and lit by two
 *   hanging lamps, whose flames are the spot colour, cut large with tongues
 *   and a paper core (the flame of ./caesars-house.tsx), high above every
 *   head and hand.
 * - "Sit, and some wine! A health to Lepidus!" At the table sit Enobarbus,
 *   his cup up ("Here’s to thee, Menas!"); Lepidus, drunk ("I am not so well
 *   as I should be"), slumped forward with his eyes shut and his cup fallen
 *   by his hand; Antony, turned to him with an open hand, telling him what a
 *   crocodile is ("It is shaped, sir, like itself"); and Caesar, upright and
 *   sober ("I could well forbear’t"), his hand flat on the table. The cloth
 *   hides them below the waist, as men seated at it. "Lepidus is
 *   high-coloured" is left to the words: a flush on his cheek would shrink to
 *   a red speck on a face at phone width.
 * - POMPEY: "Rise from thy stool." "Rises and walks aside." MENAS: "These
 *   three world-sharers, these competitors, Are in thy vessel. Let me cut the
 *   cable". So forward of the mast, away from the table and against the pale
 *   sea, Menas, a seaman in a belted tunic and the cap he holds off "to thy
 *   fortunes", leans in to Pompey and points back over his shoulder at the
 *   three at the table. Nothing in his hands could cut anything: his plan is
 *   left to the words, and the quotation names no killing.
 * - POMPEY: "Ah, this thou shouldst have done And not have spoke on ’t! ...
 *   Desist, and drink." So Pompey, in the cuirass and a general's cloak (the
 *   kit, ./people.tsx), faces him with his head up and holds up his open
 *   hand, the arm bent, the fingers apart: he refuses. Beyond them, at the
 *   bow, the anchor cable is made fast round a bollard on the deck and runs
 *   up over the bulwark to the anchor in the bay.
 *
 * Redrawn on 9 October 2026 from an unreviewed draft, in which the dark sky
 * and the dark sea could not be told apart, so the panel did not read as a
 * ship, Pompey's hand held out reached for Menas instead of refusing him,
 * and the cable's coil at the bow was a knot of lines at panel size.
 *
 * Nothing is taken from a film or stage production. Seeds: 901 (sky), 903
 * (sea), 904 (deck).
 */

const W = 860
const H = 340
/** The far edge of the sea, the cap of the far bulwark, and the deck below it. */
const HORIZON = 166
/** The top of the clear band of light over the horizon. */
const GLOW = 132
const RAIL = 200
const DECK = 240
/** The awning over the feast: its roof, its underside and the hem of its valance. */
const AWN = { x0: -10, x1: 506, roof: 40, under: 62, hem: 74 }
/** The mast, and the yard across it with the sail furled on it. */
const MAST = 506
const YARD = { x0: 300, x1: 790, y: 22 }
/** The two lamps hung from the awning: where each flame stands. */
const LAMPS: Pt[] = [
  [148, 124],
  [352, 124],
]
/** The table: its top and the hem of its cloth. */
const TABLE = { x0: 16, x1: 476, top: 252, hem: 332 }
/** Where the seated men's feet would be, under the table: they are hidden by its cloth. */
const SEAT = 360
/** Menas and Pompey, standing on the deck forward of the mast. */
const MENAS_AT: Pt = [590, 326]
const POMPEY_AT: Pt = [672, 326]
/** The anchor cable: the middle of its coil on the deck, where it leaves the coil, and where it goes over the side. */
const COIL: Pt = [802, 310]
const COIL_RINGS = [30, 20, 10]
const CABLE_FROM: Pt = [826, 301]
const OVER: Pt = [868, RAIL + 3]

type Marks = {
  sky: string
  band: string
  glow: string
  sea: string
  stanchions: string
  deck: string
  awning: string
  cloth: string
  twist: string
  lay: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The dusk: dark overhead, cut lighter and lighter down to the band of
  // clear light along the horizon, against which the far shore and the heads
  // of the two men forward are seen.
  const sky = lightField(
    901,
    { x0: 0, x1: W, y0: 2, y1: GLOW + 4 },
    (_x, y) => 0.06 + 0.94 * clamp(y / GLOW) ** 1.8,
    { spacing: 6.4, len: [24, 80], gap: [6, 24], max: 3.8 },
  )
  // The band of clear light, its top edge rolling a little, like the edge of
  // a bank of cloud, so it is not ruled.
  let band = `M0 ${RAIL}V${GLOW}`
  for (let x = 0; x <= W; x += 10)
    band += `L${x} ${n(GLOW + 2.6 * Math.sin(x / 37) + 1.6 * Math.sin(x / 13 + 1))}`
  band += `L${W} ${RAIL}Z`
  // The lamplight under the awning, cut in paper rays round each flame.
  const glow = LAMPS.map(([x, y], k) =>
    rays(rng(902 + k), x + 4, y - 12, { from: 22, to: 74, every: 8 }),
  ).join('')
  // The sea: long fine ripples far off, shorter and heavier near the ship.
  const sea = seaCuts(903, { x0: 0, x1: W, y0: HORIZON + 2, y1: RAIL - 2 }, () => true)
  // The stanchions of the far bulwark, cut in paper.
  let stanchions = ''
  for (let x = 22; x < W; x += 44) stanchions += gouge(x, RAIL + 9, x + 0.6, DECK - 4, 1.3)
  // The deck: planks running the length of the ship, their seams closer
  // together towards the far side, the butts of the planks staggered.
  const q = rng(904)
  let deck = ''
  const seams: number[] = []
  for (let y = DECK + 4, k = 0; y < H + 4; k++, y += 5 + k * 1.2) seams.push(y)
  for (let i = 0; i < seams.length; i++) {
    const y = seams[i]
    deck += cut(-10, y, W + 20, 0.5 + i * 0.16, between(q, -0.6, 0.6))
    const next = seams[i + 1] ?? H + 6
    for (let x = between(q, 0, 80); x < W; x += between(q, 90, 170))
      deck += gouge(x, y + 1, x + 0.8, next - 1, 0.5 + i * 0.1)
  }
  // The seams of the awning's cloths, on its underside.
  let awning = ''
  for (let x = AWN.x0 + 24; x < AWN.x1; x += 34)
    awning += gouge(x, AWN.under + 1, x - 6, AWN.hem - 1, 1.4)
  // The cloth over the table falls in long folds.
  let cloth = ''
  for (let x = TABLE.x0 + 22; x < TABLE.x1 - 6; x += between(q, 22, 34))
    cloth += gouge(x, TABLE.top + 16, x + between(q, -3, 3), TABLE.hem - 6, between(q, 1.4, 2))
  // The lay of the cable's strands, along its taut length.
  let twist = ''
  const [bx, by] = CABLE_FROM
  const [ox, oy] = OVER
  for (let t = 0.08; t < 0.95; t += 0.09) {
    const x = bx + (ox - bx) * t
    const y = by + (oy - by) * t
    twist += gouge(x - 2, y + 2.6, x + 1.4, y - 3.2, 0.8)
  }
  // The lay of the rope round each ring of the coil, short slanting cuts.
  let lay = ''
  for (const rx of COIL_RINGS)
    for (let a = 0; a < Math.PI * 2; a += 0.62 - rx / 140) {
      const x = COIL[0] + Math.cos(a) * rx
      const y = COIL[1] + Math.sin(a) * rx * 0.42
      lay += gouge(x - 1.2, y + 1.6, x + 1.2, y - 1.6, 0.55)
    }
  cached = { sky, band, glow, sea, stanchions, deck, awning, cloth, twist, lay }
  return cached
}

/** A drinking cup: a bowl on a short foot, in ink with a paper rim. */
function Cup({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  const d = `M${n(x - 8 * s)} ${n(y - 12 * s)}H${n(x + 8 * s)}C${n(x + 7 * s)} ${n(y - 5 * s)} ${n(x + 3 * s)} ${n(y - 3.4 * s)} ${n(x + 2 * s)} ${n(y - 2.4 * s)}L${n(x + 5 * s)} ${n(y)}H${n(x - 5 * s)}L${n(x - 2 * s)} ${n(y - 2.4 * s)}C${n(x - 3 * s)} ${n(y - 3.4 * s)} ${n(x - 7 * s)} ${n(y - 5 * s)} ${n(x - 8 * s)} ${n(y - 12 * s)}Z`
  return (
    <>
      <path d={d} fill={INK} stroke={PAPER} strokeWidth={1.6} strokeLinejoin="round" />
      <path d={gouge(x - 7 * s, y - 11 * s, x + 7 * s, y - 11 * s, 0.9 * s)} fill={PAPER} />
    </>
  )
}

/** The men at the table, seen above its cloth: placed with their feet at SEAT, under it. */
const AT_TABLE: { pose: Pose; x: number; flip?: boolean }[] = [
  {
    // Enobarbus, his cup up: "Here's to thee, Menas!"
    x: 78,
    pose: {
      look: 'enobarbus',
      dress: 'tunic',
      far: {
        pts: [
          [-4, -130],
          [14, -112],
          [36, -118],
        ],
        hand: 'grip',
        deg: -70,
      },
      near: {
        pts: [
          [5, -128],
          [14, -104],
          [34, -100],
        ],
        hand: 'mitt',
      },
    },
  },
  {
    // Lepidus, drunk, slumped over the table, his head fallen forward
    x: 178,
    pose: {
      look: 'lepidus',
      head: { at: [13, -150], rot: 34 },
      eye: 'shut',
      near: {
        pts: [
          [8, -124],
          [18, -104],
          [40, -100],
        ],
        hand: 'mitt',
      },
    },
  },
  {
    // Antony, telling him what a crocodile is, his open hand out to him
    x: 304,
    flip: true,
    pose: {
      look: 'antony',
      dress: 'toga',
      far: {
        pts: [
          [-4, -130],
          [6, -106],
          [26, -102],
        ],
        hand: 'mitt',
      },
      near: {
        pts: [
          [5, -128],
          [22, -112],
          [44, -120],
        ],
        hand: 'open',
        deg: -12,
        thumb: -1,
      },
    },
  },
  {
    // Caesar, sober and upright, his hand flat on the table
    x: 414,
    flip: true,
    pose: {
      look: 'caesar',
      dress: 'toga',
      head: { rot: -4 },
      near: {
        pts: [
          [5, -128],
          [12, -104],
          [32, -101],
        ],
        hand: 'open',
        deg: 4,
        spread: 12,
      },
    },
  },
]

/** Menas, leaning in to Pompey and pointing back over his shoulder at the three at the table. */
const MENAS: Pose = {
  look: 'menas',
  head: { rot: 10 },
  far: {
    pts: [
      [-4, -130],
      [-24, -124],
      [-46, -128],
    ],
    hand: 'point',
    deg: 184,
  },
  near: {
    pts: [
      [5, -128],
      [10, -104],
      [14, -82],
    ],
    hand: 'mitt',
  },
  legs: {
    far: [
      [-3, -70],
      [-8, -36],
      [-12, -3],
    ],
    near: [
      [3, -70],
      [10, -36],
      [14, -3],
    ],
  },
}

/**
 * Pompey, refusing: his head up, his open hand held up before his chest, the
 * forearm upright from a low elbow and the fingers apart, as a man says
 * "stop". Never a straight arm raised.
 */
const POMPEY: Pose = {
  look: 'pompey',
  head: { rot: -6 },
  far: {
    pts: [
      [-4, -130],
      [-2, -106],
      [8, -96],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [5, -128],
      [26, -108],
      [34, -130],
    ],
    hand: 'open',
    deg: -80,
    thumb: -1,
  },
}

/**
 * The anchor cable, "Let me cut the cable": its slack lies coiled on the deck
 * at the bow, three rings of thick rope seen from above, and from the coil the
 * taut length runs up and over the bulwark to the anchor in the bay. Ink with
 * a paper edge, each ring cut apart from the next and the lay of the taut
 * strands cut in paper, so it reads as a rope at phone width. (A bollard with
 * turns of rope round it, in the first draft, read as a hand gripping a stick.)
 */
function Cable() {
  const m = marks()
  const [cx, cy] = COIL
  const taut = `M${n(CABLE_FROM[0])} ${n(CABLE_FROM[1])}L${n(OVER[0])} ${n(OVER[1])}`
  return (
    <g strokeLinecap="round" fill="none">
      {COIL_RINGS.map((rx) => (
        <g key={rx}>
          <ellipse cx={cx} cy={cy} rx={rx} ry={rx * 0.42} stroke={PAPER} strokeWidth={9} />
          <ellipse cx={cx} cy={cy} rx={rx} ry={rx * 0.42} stroke={INK} strokeWidth={5.6} />
        </g>
      ))}
      <path d={m.lay} fill={PAPER} stroke="none" />
      <path d={taut} stroke={PAPER} strokeWidth={11} strokeLinejoin="round" />
      <path d={taut} stroke={INK} strokeWidth={7.6} strokeLinejoin="round" />
      <path d={m.twist} fill={PAPER} stroke="none" />
    </g>
  )
}

/**
 * A lamp hung from the awning: a shallow bowl on three chains that meet at a
 * ring above it, and one chain up to the awning; the flame stands from the
 * bowl's nozzle, inside the chains' triangle and clear of them.
 */
function HangingLamp({ at: [x, y], k }: { at: Pt; k: number }) {
  const ring: Pt = [x + 5, y - 44]
  const chains =
    `M${x - 16} ${y + 7}L${ring[0]} ${ring[1]}L${x + 26} ${y + 7}` +
    `M${ring[0]} ${ring[1]}V${AWN.hem + 2}`
  const bowl = `M${x - 18} ${y + 8}C${x - 16} ${y + 18} ${x + 24} ${y + 19} ${x + 28} ${y + 8}C${x + 20} ${y + 4} ${x - 8} ${y + 4} ${x - 18} ${y + 8}Z`
  const t = `translate(${x + 4} ${y + 5}) scale(0.78) translate(${-(x + 4)} ${-(y + 5)})`
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d={chains} fill="none" stroke={PAPER} strokeWidth={4.2} />
      <circle cx={ring[0]} cy={ring[1]} r={3} fill="none" stroke={PAPER} strokeWidth={4.2} />
      <path d={chains} fill="none" stroke={INK} strokeWidth={1.6} />
      <circle cx={ring[0]} cy={ring[1]} r={3} fill="none" stroke={INK} strokeWidth={1.6} />
      <path d={bowl} fill={INK} stroke={PAPER} strokeWidth={1.4} />
      <g transform={t}>
        <g className="lc-flicker" style={timing({ dur: 0.9, delay: 0.2 + k * 0.3 })}>
          <path d={flame(x + 4, y + 5)} fill={RED} stroke={INK} strokeWidth={1.4} />
          <path d={flameCore(x + 4, y + 5)} fill={PAPER} />
        </g>
      </g>
    </g>
  )
}

function PompeysGalley({ uid }: ArtProps) {
  const m = marks()
  const id = { above: `${uid}-above`, under: `${uid}-under` }
  return (
    <>
      <defs>
        <clipPath id={id.above}>
          <rect x={0} y={0} width={W} height={TABLE.top + 10} />
        </clipPath>
        <clipPath id={id.under}>
          <rect x={0} y={AWN.hem} width={AWN.x1 - 8} height={GLOW - AWN.hem} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [630, 200], push: 1.03 })}>
        {/* the dusk over the bay, Mount Misena on the far shore, and the sea */}
        <rect x={0} y={0} width={W} height={GLOW + 8} fill={INK} />
        <path d={m.band} fill={PAPER} />
        <path d={m.sky} fill={PAPER} />
        <path d={headland(700, 900, HORIZON, 30)} fill={INK} />
        <path d={m.sea} fill={INK} />
        <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.4} />

        {/* the far bulwark, its cap and its stanchions */}
        <rect x={0} y={RAIL} width={W} height={DECK - RAIL} fill={INK} />
        <rect x={0} y={RAIL} width={W} height={4.4} fill={PAPER} />
        <path d={m.stanchions} fill={PAPER} />
        {/* the deck */}
        <rect x={0} y={DECK} width={W} height={H - DECK} fill={PAPER} />
        <path d={m.deck} fill={INK} />

        {/* the forestay from the masthead to the bow */}
        <path d={`M${MAST} -10L852 ${RAIL + 1}`} stroke={PAPER} strokeWidth={3.4} fill="none" />
        <path d={`M${MAST} -10L852 ${RAIL + 1}`} stroke={INK} strokeWidth={1.4} fill="none" />
        {/* the mast */}
        <rect
          x={MAST - 8}
          y={-6}
          width={16}
          height={DECK + 12}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={gouge(MAST - 3, 4, MAST - 3, DECK, 1.3)} fill={PAPER} />
        {/* the yard, with the sail furled along it and tied */}
        <path
          d={`M${YARD.x0} ${YARD.y}Q${MAST} ${YARD.y - 8} ${YARD.x1} ${YARD.y}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={17}
          strokeLinecap="round"
        />
        <path
          d={`M${YARD.x0} ${YARD.y}Q${MAST} ${YARD.y - 8} ${YARD.x1} ${YARD.y}`}
          fill="none"
          stroke={INK}
          strokeWidth={13}
          strokeLinecap="round"
        />
        <path
          d={Array.from({ length: 9 }, (_, k) => {
            const x = YARD.x0 + 34 + k * 54
            const t = (x - YARD.x0) / (YARD.x1 - YARD.x0)
            const y = YARD.y - 16 * t * (1 - t)
            return `M${n(x)} ${n(y - 6)}V${n(y + 6)}`
          }).join('')}
          stroke={PAPER}
          strokeWidth={1.4}
        />

        {/* the awning over the feast, rigged aft of the mast */}
        <path
          d={`M${AWN.x0} ${AWN.roof}L${AWN.x1} ${AWN.roof + 6}L${AWN.x1} ${AWN.under}L${AWN.x0} ${AWN.under}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect
          x={AWN.x0}
          y={AWN.under}
          width={AWN.x1 - AWN.x0}
          height={AWN.hem - AWN.under}
          fill={PAPER}
        />
        <path d={m.awning} fill={INK} />
        <path
          d={
            `M${AWN.x0} ${AWN.hem}` +
            Array.from({ length: 16 }, (_, k) => {
              const x0 = AWN.x0 + (k * (AWN.x1 - AWN.x0)) / 16
              const x1 = AWN.x0 + ((k + 1) * (AWN.x1 - AWN.x0)) / 16
              return `Q${n((x0 + x1) / 2)} ${AWN.hem + 9} ${n(x1)} ${AWN.hem}`
            }).join('') +
            `L${AWN.x1} ${AWN.hem - 3}L${AWN.x0} ${AWN.hem - 3}Z`
          }
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.2}
        />
        <g clipPath={`url(#${id.under})`}>
          <path d={m.glow} fill={PAPER} />
        </g>
        {LAMPS.map((p, k) => (
          <HangingLamp key={p[0]} at={p} k={k} />
        ))}

        {/* the men at the table, seen above its cloth */}
        <g clipPath={`url(#${id.above})`}>
          {AT_TABLE.map((p) => (
            <Person key={p.x} pose={p.pose} at={[p.x, SEAT]} scale={1.12} flip={p.flip} />
          ))}
        </g>
        {/* Enobarbus's cup, held up over the table */}
        <Cup x={124} y={214} s={0.9} />
        {/* the table and its cloth, cups on it */}
        <path
          d={`M${TABLE.x0} ${TABLE.top}H${TABLE.x1}L${TABLE.x1 + 6} ${TABLE.top + 12}H${TABLE.x0 - 6}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <path
          d={`M${TABLE.x0 - 6} ${TABLE.top + 12}H${TABLE.x1 + 6}L${TABLE.x1 + 10} ${TABLE.hem}Q${(TABLE.x0 + TABLE.x1) / 2} ${TABLE.hem + 5} ${TABLE.x0 - 10} ${TABLE.hem}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={m.cloth} fill={PAPER} />
        {/* Lepidus's cup, fallen on its side by his hand */}
        <g transform="rotate(-80 238 255)">
          <Cup x={238} y={255} s={0.9} />
        </g>
        <Cup x={350} y={258} />
        <Cup x={448} y={258} />

        {/* the anchor cable at the bow */}
        <Cable />
        {/* Menas, tempting; Pompey, refusing */}
        <Person pose={MENAS} at={MENAS_AT} scale={1.1} />
        <Person pose={POMPEY} at={POMPEY_AT} scale={1.1} flip />
      </g>
    </>
  )
}

export const pompeysGalley: LinocutArt = { width: W, height: H, Draw: PompeysGalley }
