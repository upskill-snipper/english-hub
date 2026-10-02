import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { gouge, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow, skyBars } from './act-3-garden'
import { OliviasHouse, Street } from './olivias-house'
import { Person } from './people'

/**
 * Act 5, Scene 1: "The whole pack of you", the nineteenth moment in the
 * guide's timeline. The street before Olivia's house (./olivias-house.tsx),
 * by day, its gate open: Fabian has just brought Malvolio out of it ("See
 * him delivered, Fabian, bring him hither"). Every detail is from the scene
 * in the held edition (src/data/full-texts/twelfth-night.ts, Project
 * Gutenberg #1526):
 *
 * - "Enter Fabian and Malvolio." ... "Lady, you have. Pray you peruse that
 *   letter. You must not now deny it is your hand ... Or say 'tis not your
 *   seal". Olivia: "Alas, Malvolio, this is not my writing ... 'tis Maria's
 *   hand." So Olivia holds the forged letter up, and its seal is the panel's
 *   one spot of colour: the trick, in red, in her hand. Her other hand is
 *   held out open to him: "Alas, poor fool, how have they baffled thee!"
 * - Feste: "I was one, sir, in this interlude, one Sir Topas, sir ... But do
 *   you remember? 'Madam, why laugh you at such a barren rascal?' ... And
 *   thus the whirligig of time brings in his revenges." So Feste, nearest
 *   him, holds one forefinger up as he quotes Malvolio's old words back at
 *   him, his other hand open towards him.
 * - Fabian has just confessed ("Most freely I confess, myself and Toby Set
 *   this device against Malvolio here"), so he stands still beside Feste,
 *   his head bowed and his arms at his sides.
 * - Malvolio: "I'll be revenged on the whole pack of you. [Exit.]" So he
 *   stands alone at the left, at the edge of the block, with an empty
 *   stretch of street between him and them, points at them all, and goes. He
 *   is drawn with the dignity the kit gives him in the dark room: upright,
 *   his head up and his brow drawn down, in his sober black with his
 *   steward's chain, and nothing about him made comic. The yellow stockings
 *   are not drawn: the play does not put him in them again.
 * - Orsino, behind Olivia, holds out a hand after him: "Pursue him, and
 *   entreat him to a peace".
 *
 * Viola, Sebastian, Antonio and the Priest are on stage too, but the moment
 * is Malvolio's and the guide names the five above, so only they are drawn.
 * Seeds: 6701 (the sky).
 */

const W = 860
const H = 340
const FOOT = 252
const FEET = 328
const GATE = 500

type Marks = { sky: string; shadows: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = skyBars(rng(6701), { x0: 0, x1: GATE - 274, y0: 4, y1: FOOT - 104 })
  const shadows =
    footShadow(104, FEET, 26, -3) +
    footShadow(314, FEET, 24, 3) +
    footShadow(424, FEET, 24, 3) +
    footShadow(548, FEET, 30, 3) +
    footShadow(682, FEET, 28, 3)
  cached = { sky, shadows }
  return cached
}

/**
 * The forged letter in Olivia's hand, in her figure's frame: a sheet with
 * its lines of writing cut in ink and the wax seal in the spot colour, its
 * impression cut in paper ("the impressure her Lucrece, with which she uses
 * to seal", 2.5).
 */
const LETTER = 'M24 -142L45 -139L43 -111L22 -114Z'
const WRITING =
  gouge(27.4, -134.6, 41, -132.6, 0.55) +
  gouge(27, -129.6, 40.6, -127.6, 0.55) +
  gouge(26.6, -124.6, 39.6, -122.8, 0.55) +
  gouge(26.4, -119.8, 34, -118.8, 0.55)
const SEAL: [number, number] = [37.6, -118.2]

function TheWholePackOfYou({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [430, 220], push: 1.03 })}>
      <rect width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <OliviasHouse at={[GATE, FOOT]} scale={0.92} gate="open" wall="left" trees={[]} />
      <Street top={FOOT + 10} bottom={H} width={W} vx={GATE} />
      <path d={`M0 ${FOOT + 10}H${W}`} stroke={INK} strokeWidth={2} />
      <path d={m.shadows} fill={INK} />

      {/* Malvolio, alone: "I'll be revenged on the whole pack of you." */}
      <Person
        at={[104, FEET]}
        scale={1.12}
        pose={{
          look: 'malvolio',
          head: { rot: -4 },
          frown: true,
          legs: {
            far: [
              [-3, -70],
              [2, -36],
              [6, -3],
            ],
            near: [
              [3, -70],
              [-2, -36],
              [-8, -3],
            ],
          },
          far: {
            pts: [
              [-6, -131],
              [-10, -106],
              [-8, -82],
            ],
          },
          near: {
            pts: [
              [2, -132],
              [24, -126],
              [47, -129],
            ],
            hand: 'point',
            deg: -4,
          },
        }}
      />

      {/* Feste: "the whirligig of time brings in his revenges" */}
      <Person
        at={[314, FEET]}
        scale={1.12}
        flip
        pose={{
          look: 'feste',
          head: { rot: -5 },
          far: {
            pts: [
              [-4, -130],
              [12, -112],
              [31, -107],
            ],
            hand: 'open',
            deg: 2,
            thumb: -1,
          },
          near: {
            pts: [
              [4, -130],
              [15, -110],
              [21, -127],
            ],
            hand: 'finger',
            deg: -82,
          },
        }}
      />

      {/* Fabian, who has confessed the plot */}
      <Person
        at={[424, FEET]}
        scale={1.1}
        flip
        pose={{
          look: 'fabian',
          head: { rot: 8 },
          eye: 'down',
          far: {
            pts: [
              [-4, -130],
              [2, -106],
              [10, -90],
            ],
          },
          near: {
            pts: [
              [4, -130],
              [10, -106],
              [14, -90],
            ],
          },
        }}
      />

      {/* Olivia, with the letter: "Alas, poor fool, how have they baffled thee!" */}
      <Person
        at={[548, FEET]}
        scale={1.1}
        flip
        pose={{
          look: 'olivia',
          head: { rot: 3 },
          far: {
            pts: [
              [-2, -127],
              [12, -108],
              [30, -102],
            ],
            hand: 'open',
            deg: 8,
            thumb: -1,
          },
          near: {
            pts: [
              [5, -126],
              [16, -108],
              [28, -112],
            ],
            hand: 'grip',
            deg: -60,
          },
        }}
      >
        <path
          d={LETTER}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={WRITING} fill={INK} />
        <circle cx={SEAL[0]} cy={SEAL[1]} r={4.2} fill={RED} stroke={INK} strokeWidth={1} />
        <path d={gouge(SEAL[0] - 1.8, SEAL[1], SEAL[0] + 1.8, SEAL[1], 0.6)} fill={PAPER} />
      </Person>

      {/* Orsino: "Pursue him, and entreat him to a peace" */}
      <Person
        at={[682, FEET]}
        scale={1.1}
        flip
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
            deg: -10,
            thumb: -1,
          },
        }}
      />
    </g>
  )
}

export const theWholePackOfYou: LinocutArt = { width: W, height: H, Draw: TheWholePackOfYou }
