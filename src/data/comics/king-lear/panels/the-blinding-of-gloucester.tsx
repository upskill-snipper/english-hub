import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, n, rays, rng, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, stoneWall } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Letter, Person, type P } from './people'

/**
 * Act 3, Scene 7: "The blinding of Gloucester", the thirteenth moment in the
 * guide's timeline. THE BLINDING IS NOT DRAWN, AND THIS PANEL HAS NO RED.
 * By the rule of this play's kit (./people.tsx) it shows the moment before:
 * the old Earl bound in his own chair, questioned. No hand is near his face,
 * nothing points at his eyes, nothing is raised over him, and no foot is
 * lifted ("Upon these eyes of thine I'll set my foot" is never illustrated).
 * Every detail is from the scene in the held edition (Project Gutenberg
 * #1532, src/data/full-texts/king-lear.ts):
 *
 * - "A Room in Gloucester's Castle", the same night as the storm. So a room
 *   of coursed stone, lit by one torch in an iron bracket on the wall. Its
 *   flame is cut in paper, not printed in red: this panel carries no red at
 *   all. The door the servants brought him in by is on the left.
 * - "Bind fast his corky arms." "To this chair bind him." "I am tied to the
 *   stake, and I must stand the course." So Gloucester sits in a high-backed
 *   chair, a rope wound three times round his chest and the chair's back and
 *   knotted behind it, and another twice round his near wrist on the chair's
 *   arm. "I am your host": it is his own chair, in his own
 *   house. He holds his head up and faces his questioners. His white beard,
 *   "So white", and his cap are the kit's.
 * - "Come, sir, what letters had you late from France?" Cornwall holds out
 *   the letter at the height of the Earl's breast, never near his face: "the
 *   fiery Duke", frowning, his sword at his hip. The letter is the kit's.
 * - "To whose hands have you sent the lunatic King? Speak." "Wherefore to
 *   Dover, sir?" Regan, beside him, points at the Earl's breast, from where
 *   she stands.
 * - The servant who will defend him: "I have serv'd you ever since I was a
 *   child; But better service have I never done you Than now to bid you
 *   hold." He stands by the door, watching, his hand on his sword's hilt,
 *   before he draws. It is the one thing in the picture that moves towards
 *   help.
 *
 * Goneril, Edmund and Oswald have left before Gloucester is brought in, and
 * are not drawn. Nothing is taken from a film or stage production. Seeds:
 * 1301 (the wall), 1302 (the floor), 1303 (the torch's light).
 */

const W = 860
const H = 340
/** The foot of the wall. */
const FLOOR = 258
/** The torch's flame, in its bracket on the wall. */
const FLAME: Pt = [470, 92]

/** Gloucester's chair and the Earl in it: the seat's height in his frame, and his feet on the print. */
const CHAIR_AT: P = [352, 318]
const SEAT = 70
/** The kit's own size for Gloucester (SIZE in ./people.tsx). */
const KIT_GLOUCESTER = 0.97

type Marks = {
  wall: { cuts: string; joints: string }
  floor: string
  glow: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = (x: number, y: number) =>
    clamp(1.05 - Math.hypot((x - FLAME[0]) * 0.7, (y - FLAME[1] - 30) * 1.05) / 330)
  const wall = stoneWall(rng(1301), { x0: 0, x1: W, y0: 4, y1: FLOOR }, light, 26)
  const floor = flagFloor(rng(1302), W, H, FLOOR, [430, 60], 70, 5)
  const glow = rays(rng(1303), FLAME[0], FLAME[1], { from: 14, to: 84, every: 8, width: 2.8 })
  cached = { wall, floor, glow }
  return cached
}

/**
 * The Earl's chair, in his frame (facing right, feet at the origin): a high
 * carved back behind him, the seat under his lap, an arm under his forearm,
 * and the legs. Ink, with a paper edge to lift it off the wall.
 */
const CHAIR =
  'M-36 -204C-36 -212 -30 -216 -26 -216C-22 -216 -16 -212 -16 -204V-64H-36Z' +
  `M-40 ${-SEAT - 2}H44V${-SEAT + 6}H-40Z` +
  'M-28 -100H40V-93H-28Z' +
  'M34 -93H41V0H34Z' +
  `M-36 ${-SEAT + 6}H-29V0H-36Z`
/** The carving on the chair's back: a band and a lozenge, cut in paper. */
const CHAIR_CUTS =
  gouge(-32, -196, -20, -196, 1) +
  'M-26 -184L-22 -176L-26 -168L-30 -176Z' +
  gouge(-32, -158, -20, -158, 1)

/**
 * The ropes, in his frame: three turns round his chest and the chair's back,
 * and a cord down the chair's back joining them, each a paper cord with an
 * ink edge so that it reads on the black of his gown.
 */
const ROPES =
  'M-24 -118C-10 -124 6 -122 15 -116' +
  'M-24 -109C-10 -115 6 -113 15 -107' +
  'M-24 -100C-10 -106 6 -104 15 -98' +
  'M-21 -120L-27 -98'
/** The rope round his near wrist and the chair's arm, two turns, and its tail. */
const WRIST_ROPE =
  'M18 -101C16 -96 17 -89 20 -86M24 -101C22 -96 23 -89 26 -86M26 -86C30 -84 32 -78 30 -72'
/** The knot at the back of the chair, and its two ends hanging. */
const KNOT =
  'M-30 -110a3.4 3.4 0 1 0 0.1 0ZM-31 -106C-33 -98 -32 -90 -34 -82M-28 -106C-28 -98 -26 -92 -27 -84'
/** The twist of the cord, as short ink ticks across it. */
const TWIST = [-118, -109, -100]
  .map((y) =>
    [-18, -10, -2, 6, 12].map((x) => `M${x} ${n(y - 5.4 + Math.abs(x) * 0.04)}l1.6 3`).join(''),
  )
  .join('')

function TheBlindingOfGloucester(_: ArtProps) {
  const m = marks()
  const s = KIT_GLOUCESTER
  const chairT = `translate(${CHAIR_AT[0]} ${CHAIR_AT[1]}) scale(${n(s)})`
  return (
    <>
      <g className="lc-push" style={timing({ origin: [400, 190], push: 1.03 })}>
        <path d={m.wall.cuts} fill={PAPER} />
        <path d={m.wall.joints} fill={PAPER} />
        <path d={m.glow} fill={PAPER} />
        {/* the doorway the servants brought him in by */}
        <path d="M30 258V130C30 102 52 86 80 86C108 86 130 102 130 130V258Z" fill={PAPER} />
        <path d="M40 258V132C40 110 58 96 80 96C102 96 120 110 120 132V258Z" fill={INK} />
        {/* the floor */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        {/* the torch in its iron bracket, its flame cut in paper */}
        <path
          d={`M${FLAME[0] - 14} ${FLAME[1] + 40}H${FLAME[0] + 14}M${FLAME[0]} ${FLAME[1] + 40}L${FLAME[0]} ${FLAME[1] + 10}`}
          stroke={INK}
          strokeWidth={4}
        />
        <path
          d={`M${FLAME[0] - 6} ${FLAME[1] + 12}L${FLAME[0] + 6} ${FLAME[1] + 12}L${FLAME[0] + 4} ${FLAME[1] + 22}L${FLAME[0] - 4} ${FLAME[1] + 22}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path
          className="lc-flicker"
          d={`M${FLAME[0] - 8} ${FLAME[1] + 12}C${FLAME[0] - 12} ${FLAME[1] - 2} ${FLAME[0] - 2} ${FLAME[1] - 10} ${FLAME[0]} ${FLAME[1] - 24}C${FLAME[0] + 4} ${FLAME[1] - 10} ${FLAME[0] + 12} ${FLAME[1] - 2} ${FLAME[0] + 8} ${FLAME[1] + 12}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path d={gouge(FLAME[0] - 2, FLAME[1] + 8, FLAME[0], FLAME[1] - 8, 1.6)} fill={INK} />

        {/* the servant who will defend him, by the door, his hand on his hilt */}
        <Person
          at={[176, 312]}
          scale={0.96}
          pose={{
            look: 'servant',
            sword: true,
            head: { rot: 2 },
            far: {
              pts: [
                [-2, -128],
                [-8, -100],
                [-4, -74],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [2, -128],
                [14, -102],
                [12, -78],
              ],
              hand: 'grip',
              deg: 70,
            },
          }}
        />

        {/* his own chair */}
        <g transform={chairT}>
          <path
            d={CHAIR}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
          <path d={CHAIR_CUTS} fill={PAPER} />
        </g>
        {/* Gloucester, bound in it, his head up */}
        <Person
          at={CHAIR_AT}
          pose={{
            look: 'gloucester',
            seated: { seat: SEAT, knee: [36, -SEAT - 6] },
            head: { rot: -4 },
            far: {
              pts: [
                [-4, -118],
                [-6, -96],
                [16, -94],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [0, -118],
                [2, -98],
                [26, -94],
              ],
              hand: 'mitt',
            },
          }}
        >
          <g fill="none" strokeLinecap="round">
            <path d={ROPES + WRIST_ROPE + KNOT} stroke={INK} strokeWidth={5.4} />
            <path d={ROPES + WRIST_ROPE + KNOT} stroke={PAPER} strokeWidth={3} />
            <path d={TWIST} stroke={INK} strokeWidth={0.8} />
          </g>
        </Person>

        {/* Cornwall, holding out the letter from France */}
        <Person
          at={[496, 316]}
          flip
          pose={{
            look: 'cornwall',
            head: { rot: 6 },
            far: {
              pts: [
                [-2, -128],
                [-8, -100],
                [-2, -76],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [2, -128],
                [12, -104],
                [32, -106],
              ],
              hand: 'grip',
              deg: -10,
            },
          }}
        >
          <Letter at={[44, -112]} rot={-14} scale={1.25} open />
        </Person>

        {/* Regan, beside him, pointing at the Earl's breast */}
        <Person
          at={[594, 314]}
          flip
          pose={{
            look: 'regan',
            head: { rot: 4 },
            far: {
              pts: [
                [-2, -122],
                [-6, -98],
                [4, -84],
              ],
              hand: 'mitt',
            },
            // Raised to the height of his breast, in the middle of a course of
            // the wall. Lower, her fingertip sat on a joint between two stones
            // (x 542), and the pale joint above and below it read as a thin
            // rod held in her hand (the review, 2 October 2026).
            near: {
              pts: [
                [2, -122],
                [24, -121],
                [46, -128],
              ],
              hand: 'point',
              deg: -8,
            },
          }}
        />
      </g>
    </>
  )
}

export const theBlindingOfGloucester: LinocutArt = {
  width: W,
  height: H,
  Draw: TheBlindingOfGloucester,
}
