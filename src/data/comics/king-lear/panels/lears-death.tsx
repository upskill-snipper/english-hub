import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK } from '@/components/comics/linocut/palette'
import { n } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type P } from './people'
import { Kneel } from './kneel'
import { KneelingMan } from './off-their-feet'
import { Feather } from './the-last-scene'
import {
  CampGround,
  Colours,
  FarTent,
  H,
  Pavilion,
  W,
  campMarks,
  footShadow,
} from './the-british-camp'

/**
 * Act 5, Scene 3: "Lear's death", the twenty-third and last moment in the
 * guide's timeline. The instant drawn is Lear watching the feather for
 * Cordelia's breath, with Kent at his side and Edgar and Albany standing by,
 * in the moments before he dies. Every detail is from the scene in the held
 * edition (Project Gutenberg #1532, src/data/full-texts/king-lear.ts):
 *
 * - The British camp near Dover, its tents and its colours, as in the two
 *   panels before (./the-british-camp.tsx), seen from lower down, at the
 *   height of the two men on their knees.
 * - "Lend me a looking glass; If that her breath will mist or stain the
 *   stone, Why, then she lives." ... "This feather stirs; she lives! If it
 *   be so, It is a chance which does redeem all sorrows That ever I have
 *   felt." So Lear kneels on the right, nearest to us and largest, and holds
 *   a small feather up before his face, watching it. He is the kit's Lear,
 *   his white hair falling from the bald crown, his long white beard, in the
 *   plain gown with its fur collar and without the mantle, as in "Lear
 *   wakes": "We put fresh garments on him" (4.7). He is "Fourscore and
 *   upward" (4.7).
 * - "KENT O, my good master! [Kneeling.]" ... "LEAR Prythee, away!" Kent,
 *   still in the hood and tunic of his disguise as Caius, his grey beard
 *   showing, kneels behind him and reaches a hand to his back; Lear does not
 *   turn.
 * - "EDGAR 'Tis noble Kent, your friend." Edgar, still in his mail from the
 *   duel, stands behind Kent with an open hand held out towards him. Albany
 *   stands apart with his head bowed and his hand on his breast: "Our present
 *   business Is general woe."
 *
 * SAFEGUARDING. Cordelia's death happens off the page, and her body is never
 * drawn: whatever Lear watches over lies beyond the right-hand edge of the
 * block, and nothing of it is in the picture. Lear's grief is drawn with
 * dignity: an old man on his knees, intent on a feather, never a grimace.
 * His death itself is left to the words. The spot colour is the camp's
 * colours flying behind the people, and nothing else.
 *
 * The people are cut from the kit (./people.tsx); Lear kneels with
 * ./kneel.tsx and Kent with ./off-their-feet.tsx. Nothing is taken from a
 * film, television or stage production. Seed: 2301 (the camp).
 */

/** The far edge of the field, low: the panel is seen from the height of a kneeling man. */
const HZ = 236
const NO_SEA: [number, number] = [0, 0]
const GROUND = 334

const ALBANY = { at: [330, 316] as P, s: 1.16 }
const EDGAR = { at: [442, 318] as P, s: 1.2 }
/** The points on the ground under the kneeling men's hips. */
const KENT = { at: [566, 326] as P, s: 1.4 }
const LEAR = { at: [700, GROUND] as P, s: 1.7, lean: 6 }

/** The kit's size for Lear and ./kneel.tsx's hip height, to place the feather in his hand. */
const LEAR_SIZE = 0.98
const KNEEL_HIP = 44
const GOWN_WAIST = 90

/** Lear's near wrist, in his standing frame, and the line the feather takes from his fist. */
const LEAR_WRIST: P = [36, -138]
const FEATHER_AT = -45

function LearsDeath({ uid }: ArtProps) {
  const m = campMarks(2301, NO_SEA, (x, y) => y > 290 && x > 320, HZ)
  const s = LEAR.s * LEAR_SIZE
  // The frame ./kneel.tsx puts Lear's standing figure in, for the feather in his hand.
  const learFrame = `translate(${LEAR.at[0]} ${LEAR.at[1]}) scale(${n(s)}) translate(0 ${-KNEEL_HIP}) rotate(${LEAR.lean}) translate(0 ${GOWN_WAIST})`
  const quill: P = [
    LEAR_WRIST[0] + Math.cos((FEATHER_AT * Math.PI) / 180) * 10,
    LEAR_WRIST[1] + Math.sin((FEATHER_AT * Math.PI) / 180) * 10,
  ]
  return (
    <g className="lc-push" style={timing({ origin: [640, 200], push: 1.03 })}>
      <CampGround m={m} sea={NO_SEA} horizon={HZ} />
      <FarTent x={300} base={HZ + 2} w={20} h={16} />
      <FarTent x={336} base={HZ + 2} w={16} h={13} />
      <FarTent x={590} base={HZ + 2} w={18} h={14} />
      <Pavilion x={116} base={274} w={128} wall={44} roof={56} door />
      <Colours x={226} foot={280} top={64} flagW={70} flagH={34} />
      <path
        d={
          footShadow(ALBANY.at[0], ALBANY.at[1], 28) +
          footShadow(EDGAR.at[0], EDGAR.at[1], 30) +
          footShadow(KENT.at[0], KENT.at[1], 50) +
          footShadow(LEAR.at[0], GROUND, 70)
        }
        fill={INK}
      />

      {/* Albany, apart, his head bowed */}
      <Person
        at={ALBANY.at}
        scale={ALBANY.s}
        pose={{
          look: 'albany',
          eye: 'down',
          head: { rot: 14 },
          far: {
            pts: [
              [-4, -128],
              [-10, -104],
              [-6, -82],
            ],
            hand: 'mitt',
          },
          near: {
            pts: [
              [5, -128],
              [14, -104],
              [10, -114],
            ],
            hand: 'mitt',
            deg: -60,
          },
        }}
      />

      {/* Edgar: "'Tis noble Kent, your friend." */}
      <Person
        at={EDGAR.at}
        scale={EDGAR.s}
        pose={{
          look: 'edgar',
          armed: true,
          head: { rot: 10 },
          far: {
            pts: [
              [-4, -128],
              [-10, -104],
              [-6, -82],
            ],
            hand: 'mitt',
          },
          near: {
            pts: [
              [5, -128],
              [22, -110],
              [40, -108],
            ],
            hand: 'open',
            deg: 8,
            thumb: -1,
          },
        }}
      />

      {/* Kent, on one knee behind his master: "O, my good master!" */}
      <KneelingMan
        uid={uid}
        id="kent"
        at={KENT.at}
        scale={KENT.s}
        lean={6}
        pose={{
          look: 'caius',
          head: { rot: 8 },
          far: {
            pts: [
              [-4, -128],
              [-8, -104],
              [-2, -84],
            ],
            hand: 'mitt',
          },
          near: {
            pts: [
              [5, -128],
              [24, -112],
              [46, -120],
            ],
            hand: 'open',
            deg: -6,
            thumb: -1,
          },
        }}
      />

      {/* Lear, on his knees, watching the feather for her breath */}
      <Kneel
        uid={uid}
        id="lear"
        at={LEAR.at}
        scale={LEAR.s}
        lean={LEAR.lean}
        pose={{
          look: 'lear',
          mantle: false,
          head: { rot: 2 },
          far: {
            pts: [
              [-4, -128],
              [6, -106],
              [12, -114],
            ],
            hand: 'mitt',
            deg: -50,
          },
          near: {
            pts: [[5, -128], [26, -114], LEAR_WRIST],
            hand: 'grip',
            deg: FEATHER_AT,
          },
        }}
      />
      <g transform={learFrame}>
        <Feather quill={quill} angle={FEATHER_AT} len={38} />
      </g>
    </g>
  )
}

export const learsDeath: LinocutArt = { width: W, height: H, Draw: LearsDeath }
