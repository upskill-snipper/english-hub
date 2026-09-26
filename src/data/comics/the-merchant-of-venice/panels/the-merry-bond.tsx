import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Person, type Pose } from './people'
import { Argosy, archPath, ripples } from './venice'

/**
 * Act 1, Scene 3: "The merry bond", the third moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/the-merchant-of-venice.ts):
 *
 * - "Venice. A public place." Not the Rialto: Shylock asks "What news on the
 *   Rialto?" So a paved square of the city by day, with a stone well-head,
 *   house fronts round it and, through an arch on the right, the water.
 * - "Enter Bassanio with Shylock the Jew", then "Enter Antonio." Only the
 *   three of them are drawn.
 * - SHYLOCK: "I would be friends with you, and have your love ... This
 *   kindness will I show. / Go with me to a notary, seal me there / Your
 *   single bond; and in a merry sport ... let the forfeit / Be nominated for
 *   an equal pound / Of your fair flesh". So Shylock, on the left, stands
 *   upright and holds out an open hand to Antonio as he makes the offer. He is
 *   drawn as the kit draws him (./people.tsx): old, with a full grey beard,
 *   in a plain gaberdine to the ankle, with the same face as every other
 *   man. Nothing in his hands: the ducats are Tubal's to furnish, and are not
 *   in the scene. The insults he recalls ("You call me misbeliever, cut-throat
 *   dog, / And spet upon my Jewish gaberdine") are left to his words, and not
 *   drawn.
 * - ANTONIO: "Content, in faith, I'll seal to such a bond, / And say there
 *   is much kindness in the Jew." So Antonio, in his gown and cap, faces him
 *   with his chin up and a hand laid on his breast, as a man gives his word.
 * - BASSANIO: "You shall not seal to such a bond for me, / I'll rather dwell
 *   in my necessity." So Bassanio steps up behind Antonio and lays a hand on
 *   his shoulder to hold him back.
 * - ANTONIO: "Why, fear not, man, I will not forfeit it ... I do expect return
 *   / Of thrice three times the value of this bond"; "My ships come home a
 *   month before the day." So through the arch an argosy is at sea, its sails
 *   printed in the spot colour as in "Antonio's sadness": the ships the whole
 *   bond rests on.
 *
 * The quotation is Shylock's offer, a line a student can weigh (is it meant?)
 * rather than any of the scene's insults. Nothing is taken from a film or
 * stage production. Seeds: 1301 (house fronts), 1302 (square), 1303 (water).
 */

const W = 860
const H = 340
/** Where the house fronts meet the paving of the square. */
const GROUND = 238
/** The arch through to the water, on the right. */
const ARCH = { x0: 700, x1: 812, top: 92 }
const WATER = 196

const SHYLOCK: Pose = {
  look: 'shylock',
  head: { rot: -2 },
  far: {
    pts: [
      [-3, -130],
      [-7, -104],
      [-5, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [22, -113],
      [43, -118],
    ],
    hand: 'open',
    deg: -12,
    thumb: -1,
  },
}

/** Antonio (flipped to face left), giving his word, a hand on his breast. */
const ANTONIO: Pose = {
  look: 'antonio',
  head: { rot: -4 },
  far: {
    pts: [
      [-3, -130],
      [-6, -104],
      [-4, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [22, -101],
      [12, -106],
    ],
    hand: 'open',
    deg: -172,
    thumb: 1,
    spread: 8,
  },
}

/** Bassanio (flipped), stepping up behind Antonio, a hand on his shoulder. */
const BASSANIO: Pose = {
  look: 'bassanio',
  head: { rot: 6 },
  cloak: 4,
  sword: true,
  legs: {
    far: [
      [-3, -70],
      [-12, -36],
      [-20, -3],
    ],
    near: [
      [3, -70],
      [12, -36],
      [18, -3],
    ],
  },
  far: {
    pts: [
      [-3, -130],
      [-8, -104],
      [-8, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [24, -122],
      [44, -128],
    ],
    hand: 'open',
    deg: -14,
    thumb: -1,
    spread: 10,
  },
}

type Marks = { houses: string; floor: string; water: string; sky: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The house fronts, lit from the right, where the square opens on the water.
  const light = (x: number, y: number) =>
    clamp(0.25 + (x / W) * 0.55 - Math.max(0, y - 190) / 300) * 0.95 + 0.06
  const houses = gougeField(rng(1301), { x0: 0, x1: W, y0: 30, y1: GROUND - 4 }, light, {
    spacing: 6.8,
    len: [18, 64],
    gap: [6, 20],
    max: 3.4,
  })
  const floor = flagFloor(rng(1302), W, H, GROUND, [420, 110], 60, 6)
  const water = ripples(1303, ARCH.x0, ARCH.x1, WATER, GROUND)
  const r = rng(1304)
  let sky = ''
  for (let y = 8; y < 26; y += 7) {
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 30, 90)
      if (r() < 0.4) sky += gouge(x, y, x + len, y + between(r, -0.6, 0.6), 0.7)
      x += len + between(r, 30, 80)
    }
  }
  cached = { houses, floor, water, sky }
  return cached
}

/** Arched windows in the house fronts, and the roofline against the sky. */
const WINDOWS =
  archPath(28, 50, 56, 100) +
  archPath(66, 88, 56, 100) +
  archPath(176, 198, 50, 96) +
  archPath(214, 236, 50, 96) +
  archPath(352, 374, 56, 100) +
  archPath(390, 412, 56, 100) +
  archPath(530, 552, 50, 96) +
  archPath(568, 590, 50, 96) +
  archPath(612, 634, 50, 96) +
  archPath(28, 50, 132, 176) +
  archPath(390, 412, 132, 176) +
  archPath(612, 634, 132, 176)
const ROOF =
  'M0 30H148V24H300V30H470V22H660V30H860V0H0Z' +
  'M100 24V10H96V4H112V10H108V24Z' +
  'M560 22V8H556V2H572V8H568V22Z'

/** A Venetian well-head: a round stone drum with a lip, on a step. */
const WELL = 'M86 244H170V236H164V200H92V236H86Z'
const WELL_LIP = 'M86 202C86 192 170 192 170 202Z'

function MerryBond({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-arch`
  const archD = archPath(ARCH.x0, ARCH.x1, ARCH.top, GROUND)
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={archD} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 180], push: 1.03 })}>
        {/* the house fronts round the square, and a strip of sky over them */}
        <path d={m.houses} fill={PAPER} />
        <rect x={0} y={0} width={W} height={30} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={ROOF} fill={INK} />
        <path d={WINDOWS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d="M148 30V238M300 30V238M470 30V238M660 30V238" stroke={PAPER} strokeWidth={2.2} />
        {/* the arch through to the water, and an argosy out at sea */}
        <path d={archD} fill={PAPER} stroke={PAPER} strokeWidth={10} />
        <path d={archD} fill={PAPER} stroke={INK} strokeWidth={3} />
        <g clipPath={`url(#${clip})`}>
          <rect
            x={ARCH.x0}
            y={WATER}
            width={ARCH.x1 - ARCH.x0}
            height={GROUND - WATER}
            fill={INK}
          />
          <path d={m.water} fill={PAPER} />
          <g className="lc-drift" style={timing({ dur: 3.2 })}>
            <Argosy at={[760, WATER + 3]} s={0.62} />
          </g>
        </g>
        {/* the paved square */}
        <rect x={0} y={GROUND} width={W} height={H - GROUND} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <rect x={0} y={GROUND - 1} width={W} height={3} fill={INK} />
        {/* the well-head */}
        <path d={WELL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={WELL_LIP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d={
            gouge(96, 214, 160, 214, 1.4) +
            gouge(100, 226, 156, 226, 1.1) +
            gouge(128, 204, 128, 234, 1)
          }
          fill={PAPER}
        />
        <path
          d={footShadow(236, 324, 32) + footShadow(452, 324, 30) + footShadow(526, 324, 30)}
          fill={INK}
        />
        <Person pose={SHYLOCK} at={[236, 322]} scale={1.14} />
        <Person pose={ANTONIO} at={[452, 322]} scale={1.14} flip />
        <Person pose={BASSANIO} at={[522, 322]} scale={1.12} flip />
      </g>
    </>
  )
}

export const theMerryBond: LinocutArt = { width: W, height: H, Draw: MerryBond }
