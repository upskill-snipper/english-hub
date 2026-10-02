import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow, skyBars } from './act-3-garden'
import { OliviasHouse, Street } from './olivias-house'
import { Person, type Pose } from './people'

/**
 * Act 5, Scene 1: "One face, one voice", the eighteenth moment in the guide's
 * timeline. The street before Olivia's house (./olivias-house.tsx), by day,
 * its gate still open from "Husband". Every detail is from the scene in the
 * held edition (src/data/full-texts/twelfth-night.ts, Project Gutenberg
 * #1526):
 *
 * - "Enter Sebastian." Orsino: "One face, one voice, one habit, and two
 *   persons! A natural perspective, that is, and is not!" So the twins stand
 *   face to face in the middle of the block, in front of the gate, each the
 *   other's mirror image: the kit's one face (HEAD_TWIN), one cap, one
 *   doublet and one cloak ("he went Still in this fashion, colour, ornament,
 *   For him I imitate", 3.4), the same height, in the same pose. Viola, the
 *   kit's Cesario, is on the left, on Orsino's side, where she has stood all
 *   scene; Sebastian has come in from the right. Neither wears a rapier, so
 *   the two are one habit to the last line (the scene gives neither a drawn
 *   sword).
 * - Viola: "Do not embrace me till each circumstance Of place, time, fortune,
 *   do cohere and jump That I am Viola". So they do not touch: each holds out
 *   one open hand towards the other, and a strip of the dark gateway shows
 *   between the two hands.
 * - Sebastian: "I should my tears let fall upon your cheek, And say, 'Thrice
 *   welcome, drowned Viola.'" So the spot colour is the same flush on both
 *   their cheeks, one mirroring the other (the kit's FLUSH, on the cheek and
 *   never the mouth).
 * - Viola: "If spirits can assume both form and suit, You come to fright us."
 *   Sebastian: "A spirit I am indeed". So Sebastian fades into the print a
 *   moment after the rest, as he comes on after them.
 * - Orsino, on the left, holds out an open hand towards the pair in wonder.
 *   Antonio, on the right, "How have you made division of yourself? An apple
 *   cleft in two is not more twin Than these two creatures. Which is
 *   Sebastian?", holds out his open hand, palm up, asking. He is bareheaded,
 *   as the kit draws him since his arrest ("Though now you have no sea-cap on
 *   your head", 3.4). Olivia, at the far right: "Most wonderful!", her hands
 *   clasped at her breast.
 *
 * The garden wall runs on from both ends of the house, with no trees over
 * it, so no dark crown stands behind a head. Seeds: 6601 and 6602 (the sky
 * over each wall).
 */

const W = 860
const H = 340
const FOOT = 252
const FEET = 328
const GATE = 430

type Marks = { sky: string; shadows: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky =
    skyBars(rng(6601), { x0: 0, x1: GATE - 274, y0: 4, y1: FOOT - 104 }) +
    skyBars(rng(6602), { x0: GATE + 274, x1: W, y0: 4, y1: FOOT - 104 })
  const shadows =
    footShadow(120, FEET, 26, -3) +
    footShadow(362, FEET, 22, -2) +
    footShadow(498, FEET, 22, 2) +
    footShadow(650, FEET, 26, 3) +
    footShadow(772, FEET, 30, 3)
  cached = { sky, shadows }
  return cached
}

/** One twin, facing right, holding out an open hand to the other: drawn once, mirrored for the other. */
const TWIN: Omit<Pose, 'look'> = {
  head: { rot: 3 },
  cloak: 3,
  flush: true,
  legs: {
    far: [
      [-3, -70],
      [-4, -36],
      [-6, -3],
    ],
    near: [
      [3, -70],
      [7, -36],
      [10, -3],
    ],
  },
  far: {
    pts: [
      [-4, -129],
      [-6, -104],
      [-3, -82],
    ],
  },
  near: {
    pts: [
      [3, -129],
      [15, -110],
      [30, -110],
    ],
    hand: 'open',
    deg: -12,
    thumb: -1,
  },
}

function OneFaceOneVoice({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [430, 220], push: 1.03 })}>
      <rect width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <OliviasHouse at={[GATE, FOOT]} scale={0.92} gate="open" wall="both" trees={[]} />
      <Street top={FOOT + 10} bottom={H} width={W} vx={GATE} />
      <path d={`M0 ${FOOT + 10}H${W}`} stroke={INK} strokeWidth={2} />
      <path d={m.shadows} fill={INK} />

      {/* Orsino: "One face, one voice, one habit, and two persons!" */}
      <Person
        at={[120, FEET]}
        scale={1.1}
        pose={{
          look: 'orsino',
          head: { rot: 2 },
          sword: true,
          cloak: 2,
          far: {
            pts: [
              [-8, -131],
              [-12, -106],
              [-8, -82],
            ],
          },
          near: {
            pts: [
              [-1, -131],
              [16, -114],
              [36, -112],
            ],
            hand: 'open',
            deg: -14,
            thumb: -1,
          },
        }}
      />

      {/* the twins, face to face: Viola as Cesario on the left, Sebastian on the right */}
      <Person at={[362, FEET]} scale={1.12} pose={{ look: 'cesario', ...TWIN }} />
      <g className="lc-fade-in" style={timing({ delay: 0.6, dur: 1.2 })}>
        <Person at={[498, FEET]} scale={1.12} flip pose={{ look: 'sebastian', ...TWIN }} />
      </g>

      {/* Antonio: "Which is Sebastian?" */}
      <Person
        at={[650, FEET]}
        scale={1.1}
        flip
        pose={{
          look: 'antonio',
          bare: true,
          head: { rot: 2 },
          far: {
            pts: [
              [-6, -131],
              [-10, -106],
              [-6, -82],
            ],
          },
          near: {
            pts: [
              [3, -131],
              [16, -112],
              [34, -108],
            ],
            hand: 'open',
            deg: -2,
            thumb: 1,
          },
        }}
      />

      {/* Olivia: "Most wonderful!" */}
      <Person
        at={[772, FEET]}
        scale={1.1}
        flip
        pose={{
          look: 'olivia',
          head: { rot: -3 },
          far: {
            pts: [
              [-2, -127],
              [5, -105],
              [12, -114],
            ],
          },
          near: {
            pts: [
              [5, -126],
              [13, -104],
              [15, -115],
            ],
          },
        }}
      />
    </g>
  )
}

export const oneFaceOneVoice: LinocutArt = { width: W, height: H, Draw: OneFaceOneVoice }
