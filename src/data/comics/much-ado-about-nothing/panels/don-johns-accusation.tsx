import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gougeField, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { H, Room, W, Window, type Win } from './leonatos-rooms'
import { Person, type Pose } from './people'

/**
 * Act 3, Scene 2: "Don John’s accusation", the seventh moment in the
 * guide's timeline. Every detail is from the scene, as the held edition
 * prints it (src/data/full-texts/much-ado-about-nothing.ts):
 *
 * - "A Room in Leonato's House." It is the room of ./leonatos-rooms.tsx, the
 *   room "Too busy to listen" is set in, so a student knows the house.
 * - "Exeunt Benedick and Leonato." Then "Enter Don John." So only Don Pedro,
 *   Claudio and Don John are drawn: the guide's list names Benedick and
 *   Leonato, who have gone before the accusation is made.
 * - DON PEDRO: "Good den, brother." DON JOHN: "go but with me tonight", "bear
 *   it coldly but till midnight". It is the end of the day, so the sun, the
 *   spot colour, is going down behind the roofs of Messina: "O day
 *   untowardly turned!"
 * - DON JOHN: "the lady is disloyal." CLAUDIO: "Who, Hero?" DON JOHN: "Even
 *   she: Leonato's Hero, your Hero, every man's Hero." So Don John, frowning
 *   under his tall hat as the kit cuts him, leans in and points at Claudio:
 *   "your Hero".
 * - CLAUDIO: "Disloyal?", "May this be so?" So he recoils, leaning back, one
 *   foot stepped away and a hand pressed to his breast.
 * - DON PEDRO: "I will not think it." So he lifts an open hand before him on
 *   a bent arm, as a man puts a thing from him.
 *
 * The people are drawn from ./people.tsx. Nothing is taken from a film or
 * stage production. Seeds: 7101 (wall and floor), 7102 (the evening sky).
 */

const WIN: Win = { x0: 290, x1: 400, top: 44, bottom: 196 }
const SUN: [number, number] = [364, 178]

/**
 * Don John, still in his long cloak, leaning in and pointing at Claudio:
 * "your Hero". (A forefinger raised was tried first; from the side, at panel
 * size, one raised finger could be taken for a rude gesture.)
 */
const DON_JOHN: Pose = {
  look: 'don-john',
  head: { rot: 8 },
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
      [24, -112],
      [46, -118],
    ],
    hand: 'point',
    deg: -6,
  },
}

/**
 * Claudio, recoiling from him (flipped to face left): leaning back, one foot
 * stepped away, his near hand pressed flat to his breast. The hand was first
 * set high, its fingers reaching up under the chin, and at panel size he
 * seemed to be clutching his throat (review, 26 September 2026); it lies on
 * the chest now, the fingers across it.
 */
const CLAUDIO: Pose = {
  look: 'claudio',
  head: { rot: -9 },
  far: {
    pts: [
      [-3, -130],
      [-10, -106],
      [-12, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [22, -106],
      [14, -116],
    ],
    hand: 'open',
    deg: -150,
    thumb: 1,
    spread: 9,
  },
  legs: {
    far: [
      [-3, -70],
      [-12, -36],
      [-22, -3],
    ],
    near: [
      [3, -70],
      [7, -36],
      [9, -3],
    ],
  },
  cloak: 4,
  sword: true,
}

/**
 * Don Pedro, the Prince, beside him (flipped to face left): "I will not
 * think it." His near hand is lifted open before him on a bent arm, the
 * fingers apart, as a man puts a thing from him.
 */
const DON_PEDRO: Pose = {
  look: 'don-pedro',
  head: { rot: 3 },
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
      [22, -116],
      [32, -130],
    ],
    hand: 'open',
    deg: -76,
    thumb: -1,
  },
  sword: true,
}

type Marks = { sky: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(7102)
  // Evening through the window: light low down, round the setting sun.
  const light = (x: number, y: number) =>
    clamp(1.15 - Math.hypot(x - SUN[0], (y - SUN[1]) * 1.2) / 200) * 0.75 + 0.25
  const sky = gougeField(
    r,
    { x0: WIN.x0 - 20, x1: WIN.x1 + 20, y0: WIN.top, y1: WIN.bottom },
    light,
    {
      spacing: 4.8,
      len: [30, 80],
      gap: [3, 8],
      max: 3.2,
    },
  )
  cached = { sky }
  return cached
}

/** Messina's roofs beyond the window, low against the evening. */
const ROOFS =
  'M280 200V180L292 174L304 180V160H312V152H316V160H322V184L338 178L352 186L372 182L388 188L410 184V200Z'

function Accusation({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [380, 170], push: 1.03 })}>
      <Room seed={7101} win={WIN} />
      <Window
        uid={uid}
        win={WIN}
        outside={
          <>
            <rect
              x={WIN.x0}
              y={WIN.top}
              width={WIN.x1 - WIN.x0}
              height={WIN.bottom - WIN.top}
              fill={INK}
            />
            <path d={m.sky} fill={PAPER} />
            <circle cx={SUN[0]} cy={SUN[1]} r={15} fill={RED} />
            <path d={ROOFS} fill={INK} />
          </>
        }
      />
      <Person pose={DON_JOHN} at={[214, 318]} scale={1.14} />
      <Person pose={CLAUDIO} at={[478, 318]} scale={1.14} flip />
      <Person pose={DON_PEDRO} at={[610, 318]} scale={1.14} flip />
    </g>
  )
}

export const donJohnsAccusation: LinocutArt = { width: W, height: H, Draw: Accusation }
