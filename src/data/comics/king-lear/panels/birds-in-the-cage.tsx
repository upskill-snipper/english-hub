import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { n } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Letter, Person, type P } from './people'
import {
  CampGround,
  Colours,
  Drum,
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
 * Act 5, Scene 3: "Birds in the cage", the twentieth moment in the guide's
 * timeline. Every detail is from the scene in the held edition
 * (src/data/full-texts/king-lear.ts):
 *
 * - "The British Camp near Dover." "Enter in conquest with drum and colours,
 *   Edmund, Lear and Cordelia as prisoners; Officers, Soldiers, &c." So the
 *   ground is the camp the last three panels share (./the-british-camp.tsx):
 *   the field, a pavilion, the colours in the spot colour and the drum; the
 *   sea far off; and on the right, small on its hill, the castle where the
 *   prisoners are to be held ("to the castle", later in the scene), on the
 *   same side as in "Too late", where Edgar runs to it with the reprieve.
 * - "Some officers take them away: good guard". Two soldiers with spears lead
 *   Lear and Cordelia off to the right, towards that castle: "Exeunt Lear and
 *   Cordelia, guarded." The soldiers and the Captain are not described, so
 *   they wear the kit's plain soldier's dress ('knight': a cloak, a sword and
 *   a short beard).
 * - "Come, let's away to prison: / We two alone will sing like birds i' the
 *   cage" and "Have I caught thee? ... Wipe thine eyes". Lear walks beside his
 *   daughter with his hand on her shoulder and his head bent to her; she goes
 *   with her head bowed. He is the kit's Lear in the gown of 4.7, without a
 *   mantle; she is the kit's Cordelia with the circlet of the Queen of France.
 * - "Come hither, captain, hark. / Take thou this note [giving a paper]; go
 *   follow them to prison." As the prisoners go, Edmund, on the left by his
 *   colours and drum, in the mail shirt he fought in (the kit's `armed`, as
 *   the duel panel has him), gives the Captain a folded paper, and the
 *   Captain, between him and the prisoners, takes it. So the picture reads
 *   from left to right as the order will travel: from Edmund, by the
 *   Captain, after Lear and Cordelia to the castle. The note is the kit's
 *   `Letter` with its seal printed in the spot colour: the order the audience
 *   will learn is for Cordelia's death, which the picture marks and never
 *   shows. Edmund wears the kit's knowing smile.
 *
 * NOT DRAWN: birds or a cage. They are Lear's words for the prison, not
 * things in the scene. Nothing is taken from a film or stage production.
 * Seed: 2001 (the camp's sky, sea and field, through
 * ./the-british-camp.tsx).
 */

const SEA_SPAN: [number, number] = [300, 600]
const SCALE = 1.12

const EDMUND: P = [262, 328]
const CAPTAIN: P = [362, 326]
const GUARD_B: P = [470, 324]
const LEAR: P = [548, 326]
const CORDELIA: P = [614, 326]
const GUARD_A: P = [700, 324]

/** No tufts where the people stand. */
const clear = (x: number, y: number) => y > 290 && x > 200 && x < 760

/** A spear held upright: the shaft, cut round with paper, and its leaf-shaped head. */
function Spear({ x, top, foot }: { x: number; top: number; foot: number }) {
  const head = `M${n(x)} ${n(top - 16)}C${n(x + 4)} ${n(top - 8)} ${n(x + 4)} ${n(top - 2)} ${n(x)} ${n(top + 2)}C${n(x - 4)} ${n(top - 2)} ${n(x - 4)} ${n(top - 8)} ${n(x)} ${n(top - 16)}Z`
  return (
    <g>
      <path d={`M${n(x)} ${n(foot)}V${n(top)}`} stroke={PAPER} strokeWidth={6.4} />
      <path d={head} fill={PAPER} stroke={PAPER} strokeWidth={3} />
      <path d={`M${n(x)} ${n(foot)}V${n(top)}`} stroke={INK} strokeWidth={3.2} />
      <path d={head} fill={INK} />
    </g>
  )
}

/** A guard's far arm, holding his spear upright in front of him. */
const SPEAR_ARM = {
  pts: [
    [-4, -128],
    [14, -110],
    [31, -112],
  ] as P[],
  hand: 'grip' as const,
  deg: -90,
}

function BirdsInTheCage(_: ArtProps) {
  const m = campMarks(2001, SEA_SPAN, clear)
  // The guards' spears, held in the far hand in front of them.
  const spearA = GUARD_A[0] + 33 * SCALE
  const spearB = GUARD_B[0] + 33 * SCALE
  return (
    <g className="lc-push" style={timing({ origin: [430, 220], push: 1.03 })}>
      <CampGround m={m} sea={SEA_SPAN} />
      <FarCastle x={790} base={HORIZON} s={0.9} />
      <FarTent x={418} base={HORIZON} w={20} h={16} />
      <Pavilion x={92} base={262} w={150} wall={58} roof={56} door />
      <Colours x={196} foot={306} top={84} flagW={58} flagH={28} flip />
      <Drum x={150} base={310} />
      <path
        d={
          footShadow(EDMUND[0], EDMUND[1], 26, -4) +
          footShadow(CAPTAIN[0], CAPTAIN[1], 26, -4) +
          footShadow(GUARD_B[0], GUARD_B[1], 24, 4) +
          footShadow(LEAR[0] + 20, LEAR[1], 50, 4) +
          footShadow(GUARD_A[0], GUARD_A[1], 24, 4)
        }
        fill={INK}
      />
      {/* the Captain, turned to Edmund, reaching for the note (cut first, so the note is in front of his hand) */}
      <Person
        at={CAPTAIN}
        scale={SCALE}
        flip
        pose={{
          look: 'knight',
          head: { rot: 6 },
          far: {
            pts: [
              [-4, -128],
              [-6, -104],
              [-2, -82],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [22, -110],
              [42, -108],
            ],
            hand: 'open',
            deg: 0,
            thumb: -1,
          },
        }}
      />
      {/* Edmund, in his mail, by his colours, giving the Captain the note */}
      <Person
        at={EDMUND}
        scale={SCALE}
        pose={{
          look: 'edmund',
          armed: true,
          mouth: 'smile',
          head: { rot: 2 },
          far: {
            pts: [
              [-4, -128],
              [-8, -104],
              [-2, -84],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [24, -112],
              [44, -110],
            ],
            hand: 'grip',
          },
        }}
      >
        <Letter at={[54, -110]} rot={6} scale={1.3} seal />
      </Person>
      <Spear x={spearB} top={GUARD_B[1] - 236} foot={GUARD_B[1] - 4} />
      <Spear x={spearA} top={GUARD_A[1] - 236} foot={GUARD_A[1] - 4} />
      {/* the guard behind them */}
      <Person
        at={GUARD_B}
        scale={SCALE}
        pose={{
          look: 'knight',
          far: SPEAR_ARM,
          near: {
            pts: [
              [5, -128],
              [2, -104],
              [0, -82],
            ],
          },
        }}
      />
      {/* Lear beside her, his hand on her shoulder, his head bent to her */}
      <Person
        at={LEAR}
        scale={SCALE}
        pose={{
          look: 'lear',
          mantle: false,
          head: { rot: 18 },
          far: {
            pts: [
              [-4, -128],
              [-8, -104],
              [-4, -82],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [26, -116],
              [46, -108],
            ],
            hand: 'open',
            deg: 24,
            thumb: -1,
          },
        }}
      />
      {/* Cordelia, led away, her head bowed */}
      <Person
        at={CORDELIA}
        scale={SCALE}
        pose={{
          look: 'cordelia',
          crown: true,
          head: { rot: 14 },
          eye: 'down',
          far: {
            pts: [
              [-3, -126],
              [4, -104],
              [14, -96],
            ],
          },
          near: {
            pts: [
              [3, -126],
              [8, -104],
              [18, -98],
            ],
          },
        }}
      />
      {/* the guard in front, leading them away to the castle */}
      <Person
        at={GUARD_A}
        scale={SCALE}
        pose={{
          look: 'knight',
          legs: {
            far: [
              [-3, -70],
              [6, -38],
              [12, -3],
            ],
            near: [
              [3, -70],
              [-6, -36],
              [-14, -3],
            ],
          },
          far: SPEAR_ARM,
          near: {
            pts: [
              [5, -128],
              [0, -104],
              [-8, -84],
            ],
          },
        }}
      />
    </g>
  )
}

export const birdsInTheCage: LinocutArt = { width: W, height: H, Draw: BirdsInTheCage }
