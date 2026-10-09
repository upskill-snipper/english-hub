import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { headland } from '../../othello/panels/garden'
import { Ship, type ShipSpec } from './fleet'
import { lightField, seaCuts, skyLines } from './light-cuts'
import { Person } from './people'

/**
 * Act 3, Scene 10: "Actium", the twelfth moment in the guide's timeline.
 * Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Another part of the Plain." "After their going in, is heard the noise of
 *   a sea fight." So the men stand on the plain above the shore, and the
 *   fight is out on the bay below them.
 * - The fight is suggested, never shown: far off, a crowd of galleys cleared
 *   for battle, their masts down, rowed bow to bow, two heeled hard over
 *   with their masts askew. Nobody is drawn in the water and nothing burns.
 * - ENOBARBUS: "Th’ Antoniad, the Egyptian admiral, With all their sixty, fly
 *   and turn the rudder." SCARUS: "The breeze upon her, like a cow in June,
 *   Hoists sails and flies." So Cleopatra's ships, the only ones under sail,
 *   stream away from the fight to the right with their wakes behind them,
 *   their sails printed in the spot colour (./fleet.tsx says why hers are
 *   red), the Antoniad nearest and largest.
 * - SCARUS: "Antony, Claps on his sea-wing and, like a doting mallard,
 *   Leaving the fight in height, flies after her." So one ship has left the
 *   fight behind the red sails under a sail of her own, paper, Antony's.
 * - ENOBARBUS: "Naught, naught, all naught! I can behold no longer"; "To see
 *   ’t mine eyes are blasted"; "Mine eyes did sicken at the sight and could
 *   not Endure a further view." So Enobarbus has turned his back on the sea,
 *   his forearm laid across his eyes.
 * - "Enter Scarus." "Gods and goddesses, All the whole synod of them!"; "Yon
 *   ribaudred nag of Egypt ... Hoists sails and flies." So Scarus, bareheaded,
 *   calls out and points down at the red sails.
 * - "Enter Canidius." "To Caesar will I render My legions and my horse. Six
 *   kings already Show me the way of yielding." So Canidius, last, in the
 *   crested helmet and cloak of the land army's commander, has turned his
 *   back on the sea and walks away inland, his head bowed.
 *
 * The three men are the kit's (./people.tsx), drawn large enough that their
 * gestures read on a phone. No sword is drawn. Read left to right: the man
 * who goes, the man who cannot look, the man who looks, and his arm leads
 * the eye out over the fight to the red sails in flight and the one sail
 * that follows them. Nothing is taken from a film or stage production.
 * Seeds: 1201 (sky), 1202 (sea), 1203 (the plain).
 */

const W = 860
const H = 340
const HORIZON = 124
/** The scale the men are drawn at, as in "By sea, by sea". */
const S = 1.2

/** The plain the men stand on, falling to the shore on the right. */
const LAND =
  'M-10 290C80 286 190 286 280 290C340 293 390 304 432 320C500 330 660 333 870 334V350H-10Z'
/** The top of the plain at x, for keeping the sea's cuts off it. */
const landTop = (x: number) =>
  x < 280 ? 288 : x < 432 ? 290 + ((x - 280) / 152) * 30 : 320 + ((x - 432) / 438) * 14

/**
 * The fight, far off: galleys cleared for battle, their masts down, rowed bow
 * to bow, and two heeled hard over with their masts askew. No red is drawn
 * this small.
 */
const FIGHT: ShipSpec[] = [
  { at: [380, 139], s: 0.2, facing: 1, mast: false },
  { at: [416, 137], s: 0.2, facing: -1, mast: false },
  { at: [454, 140], s: 0.21, facing: 1, mast: false, tilt: -4 },
  { at: [492, 138], s: 0.2, facing: -1, mast: false },
  { at: [530, 140], s: 0.21, facing: 1, mast: false },
  { at: [368, 152], s: 0.26, facing: -1, mast: false, tilt: 6 },
  { at: [406, 150], s: 0.27, facing: 1, mast: false },
  { at: [446, 154], s: 0.27, facing: -1, sail: 'none', tilt: -22 },
  { at: [488, 151], s: 0.28, facing: 1, mast: false },
  { at: [528, 153], s: 0.26, facing: -1, mast: false, tilt: 9 },
  { at: [392, 168], s: 0.32, facing: 1, mast: false, tilt: -4 },
  { at: [438, 166], s: 0.33, facing: -1, mast: false },
  { at: [482, 170], s: 0.33, facing: 1, sail: 'none', tilt: 20 },
  { at: [526, 166], s: 0.31, facing: -1, mast: false, tilt: -5 },
]

/** Antony's ship, out of the fight under a sail of her own, after the red sails. */
const ANTONY_SHIP: ShipSpec = { at: [566, 194], s: 0.46, sail: 'set', colour: 'paper', wake: true }

/** Cleopatra's ships in flight, the Antoniad nearest. No red sail is drawn below 0.5. */
const FLIGHT: ShipSpec[] = [
  { at: [672, 176], s: 0.5, sail: 'set', colour: 'red', wake: true },
  { at: [760, 168], s: 0.52, sail: 'set', colour: 'red', wake: true },
  { at: [700, 222], s: 0.6, sail: 'set', colour: 'red', wake: true },
  { at: [818, 214], s: 0.58, sail: 'set', colour: 'red', wake: true },
  { at: [770, 278], s: 0.76, sail: 'set', colour: 'red', wake: true },
]

type Marks = { sky: string; sea: string; land: string; far: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = skyLines(1201, { x0: 0, x1: W, y0: 0, y1: HORIZON - 4 }, (_x, y) => 0.62 - y / 300)
  const sea = seaCuts(1202, { x0: 0, x1: W, y0: HORIZON + 1, y1: H }, (x, y) => y < landTop(x) - 3)
  // The plain in ink, its grass cut in paper, lit from the sky behind.
  const land = lightField(
    1203,
    { x0: 0, x1: 470, y0: 294, y1: H },
    (x, y) => clamp(0.5 - (y - 294) / 110 - x / 2400),
    { spacing: 5.6, len: [8, 30], gap: [4, 14], max: 2.6 },
  )
  const far = headland(640, 870, HORIZON, 9) + headland(-20, 170, HORIZON, 6)
  cached = { sky, sea, land, far }
  return cached
}

function Actium(_props: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [560, 200], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <path d={m.far} fill={INK} />
      <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.3} />
      <path d={m.sea} fill={INK} />

      {/* the fight, far off */}
      {FIGHT.map((s, i) => (
        <Ship key={i} {...s} />
      ))}
      {/* Antony's ship, flying after her */}
      <Ship {...ANTONY_SHIP} />
      {/* Cleopatra's sixty, under sail */}
      {FLIGHT.map((s, i) => (
        <Ship key={i} {...s} />
      ))}

      {/* the plain */}
      <path d={LAND} fill={INK} />
      <path d={m.land} fill={PAPER} />
      <path d={LAND} fill="none" stroke={PAPER} strokeWidth={LINE.carve} />

      {/* Canidius, going: "To Caesar will I render My legions and my horse" */}
      <Person
        pose={{
          look: 'canidius',
          head: { rot: 12 },
          eye: 'down',
          legs: {
            far: [
              [-3, -70],
              [-13, -38],
              [-22, -3],
            ],
            near: [
              [3, -70],
              [15, -38],
              [22, -3],
            ],
          },
          far: {
            pts: [
              [-4, -130],
              [6, -106],
              [16, -88],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [-1, -104],
              [-9, -84],
            ],
          },
        }}
        at={[78, 324]}
        scale={S}
        flip
      />
      {/* Enobarbus, his back to the sea: "I can behold no longer" */}
      <Person
        pose={{
          look: 'enobarbus',
          head: { rot: 12 },
          eye: 'shut',
          far: {
            pts: [
              [-4, -130],
              [-3, -104],
              [0, -80],
            ],
          },
          // the forearm laid level across his eyes, the hand out of sight
          // against the far side of his head
          near: {
            pts: [
              [5, -128],
              [34, -148],
              [4, -160],
            ],
            hand: 'none',
          },
        }}
        at={[204, 324]}
        scale={S}
        flip
      />
      {/* Scarus, pointing down at the red sails: "Hoists sails and flies" */}
      <Person
        pose={{
          look: 'scarus',
          head: { rot: 4 },
          mouth: 'open',
          legs: {
            far: [
              [-3, -70],
              [-9, -36],
              [-13, -3],
            ],
            near: [
              [3, -70],
              [13, -36],
              [19, -3],
            ],
          },
          far: {
            pts: [
              [-4, -130],
              [6, -108],
              [22, -100],
            ],
            hand: 'open',
            deg: -30,
          },
          near: {
            pts: [
              [5, -128],
              [29, -122],
              [53, -114],
            ],
            hand: 'point',
            deg: 16,
          },
        }}
        at={[330, 326]}
        scale={S}
      />
    </g>
  )
}

export const actium: LinocutArt = { width: W, height: H, Draw: Actium }
