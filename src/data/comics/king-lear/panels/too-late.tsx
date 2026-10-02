import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK } from '@/components/comics/linocut/palette'
import { timing } from '@/components/comics/linocut/styles'

import { Person, Sword, type P } from './people'
import { SittingMan } from './off-their-feet'
import {
  CampGround,
  Colours,
  FarCastle,
  FarTent,
  H,
  HORIZON,
  Pavilion,
  W,
  campMarks,
  footShadow,
} from './the-british-camp'

/**
 * Act 5, Scene 3: "Too late", the twenty-second moment in the guide's
 * timeline. The instant drawn is the reprieve being sent, the last moment
 * before it is too late. Every detail is from the scene in the held edition
 * (Project Gutenberg #1532, src/data/full-texts/king-lear.ts):
 *
 * - The British camp near Dover, with its tents and colours, as in the panel
 *   before (./the-british-camp.tsx).
 * - "Here comes Kent. Enter Kent." ... "I am come To bid my King and master
 *   aye good night: Is he not here?" Kent, still in the plain tunic and hood
 *   of his disguise as Caius, his grey beard showing, has just come in on the
 *   left and holds out an open hand, asking.
 * - Edmund, fallen in the duel, is sitting up on the ground: "I pant for life.
 *   Some good I mean to do, Despite of mine own nature. Quickly send, Be brief
 *   in it, to the castle; for my writ Is on the life of Lear and on
 *   Cordelia". Albany: "Run, run, O, run!" So Albany, beside him, points
 *   across the field to the castle, his mouth open, calling.
 * - "Send Thy token of reprieve." "Well thought on: take my sword, Give it
 *   the captain." "Haste thee for thy life. [Exit Edgar.]" In the held
 *   edition it is Edgar who goes. So Edmund, sitting up on the ground in his
 *   mail and propped on one hand, holds up his sword by the blade, its point
 *   to the ground, and Edgar, still in his mail, bareheaded now that he has
 *   named himself ("My name is Edgar"), takes it by the hilt as he strides
 *   off towards the castle.
 * - The castle, small and far off on its hill on the right, is where the
 *   prisoners are held: the whole width of the field still to cross.
 *
 * NOT DRAWN. "The bodies of Goneril and Regan are brought in" during this
 * part of the scene, and Lear enters "with Cordelia dead in his arms" just
 * after it: neither is ever drawn. The panel stops at the reprieve, before
 * the news of how it ended; the guide's summary and the next panel carry the
 * rest. Edmund has no wound: he sits up, his hand on his sword, his face
 * grave. The spot colour is only the colours flying over the camp, far from
 * the sword, so nothing red is near the men or the blade.
 *
 * The people are cut from the kit (./people.tsx), Edmund sitting with
 * ./off-their-feet.tsx; nothing is taken from a film, television or stage
 * production. Seed: 2201 (the camp).
 */

const FEET = 324
const SEA: [number, number] = [0, 0]

const KENT = { at: [64, 318] as P, s: 0.96 }
const ALBANY = { at: [176, FEET] as P, s: 1 }
/** The point on the ground under Edmund's hip. */
const EDMUND = { at: [312, FEET] as P, s: 1 }
const EDGAR = { at: [420, FEET] as P, s: 1 }

/** Where Edgar takes hold of the sword's hilt, in the panel: the sword hangs point down below it. */
const HILT: P = [362, 236]

function TooLate({ uid }: ArtProps) {
  const m = campMarks(2201, SEA, (x, y) => y > 296 && x > 20 && x < 500)
  return (
    <g className="lc-push" style={timing({ origin: [380, 220], push: 1.03 })}>
      <CampGround m={m} sea={SEA} />
      {/* the castle where the prisoners are held, far off */}
      <FarCastle x={770} base={HORIZON} s={1.35} />
      <FarTent x={34} base={HORIZON + 2} w={18} h={14} />
      <FarTent x={404} base={HORIZON + 2} w={20} h={16} />
      <Pavilion x={132} base={240} w={104} wall={38} roof={48} door />
      <Colours x={252} foot={244} top={52} flagW={66} flagH={32} />
      <path
        d={
          footShadow(KENT.at[0], KENT.at[1], 22) +
          footShadow(ALBANY.at[0], FEET, 26) +
          footShadow(EDMUND.at[0] + 30, FEET - 2, 46) +
          footShadow(EDGAR.at[0], FEET, 34, -2)
        }
        fill={INK}
      />

      {/* Kent, just come: "Is he not here?" */}
      <Person
        at={KENT.at}
        scale={KENT.s}
        pose={{
          look: 'caius',
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
              [30, -100],
            ],
            hand: 'open',
            deg: -12,
            thumb: -1,
          },
        }}
      />

      {/* Albany: "Run, run, O, run!" */}
      <Person
        at={ALBANY.at}
        scale={ALBANY.s}
        pose={{
          look: 'albany',
          mouth: 'open',
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
              [6, -128],
              [28, -126],
              [48, -132],
            ],
            hand: 'point',
            deg: -8,
          },
        }}
      />

      {/* Edmund's sword, held up by its blade, point down: the token of reprieve */}
      <Sword grip={HILT} angle={90} len={86} />

      {/* Edmund, sitting up on the ground, holding up his sword */}
      <SittingMan
        uid={uid}
        id="edmund"
        at={EDMUND.at}
        scale={EDMUND.s}
        lean={-6}
        pose={{
          look: 'edmund',
          armed: true,
          sword: false,
          noCloak: true,
          head: { rot: -4 },
          far: {
            pts: [
              [-6, -128],
              [-22, -100],
              [-36, -64],
            ],
            hand: 'open',
            deg: 112,
            thumb: -1,
          },
          near: {
            pts: [
              [5, -128],
              [26, -112],
              [47, -121],
            ],
            hand: 'grip',
            deg: -4,
          },
        }}
      />

      {/* Edgar, in his mail, taking the sword by the hilt as he starts to run */}
      <Person
        at={EDGAR.at}
        scale={EDGAR.s}
        pose={{
          look: 'edgar',
          armed: true,
          body: { neck: [14, -130], hip: [2, -68] },
          head: { rot: 6 },
          legs: {
            far: [
              [-1, -68],
              [-14, -40],
              [-32, -14],
            ],
            near: [
              [5, -68],
              [26, -44],
              [34, -3],
            ],
          },
          far: {
            pts: [
              [6, -124],
              [18, -100],
              [30, -86],
            ],
            hand: 'mitt',
          },
          near: {
            pts: [
              [16, -124],
              [-14, -108],
              [-48, -90],
            ],
            hand: 'grip',
            deg: 160,
          },
        }}
      />
    </g>
  )
}

export const tooLate: LinocutArt = { width: W, height: H, Draw: TooLate }
