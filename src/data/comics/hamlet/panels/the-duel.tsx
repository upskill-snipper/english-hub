import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { timing } from '@/components/comics/linocut/styles'

import { H, HallBack, Table, W, stoup } from './hall'
import { Person, rapier } from './people'

/**
 * Act 5, Scene 2: "The duel", the twentieth moment in the guide's timeline.
 *
 * SAFEGUARDING. The moment holds four deaths: the Queen poisoned, Laertes
 * and Hamlet wounded with the envenomed blade, and the King killed. The
 * panel's brief is the foils, the cup and the faces, and no wound, no blood
 * and no body. So it draws the moment between the second bout and the third,
 * when nobody is hurt yet and everything is decided: the Queen lifts the
 * poisoned cup and the King cannot stop her. The quotation carries the rest.
 *
 * Every detail is from the scene in the held edition
 * (src/data/full-texts/hamlet.ts, Project Gutenberg #1524):
 *
 * - The hall is ./hall.tsx's, the same as in "The readiness is all" and "The
 *   rest is silence": its great window and the day's light across the flags.
 *   KING: "Set me the stoups of wine upon that table." So the stoups stand on
 *   the table by the wall.
 * - QUEEN: "The Queen carouses to thy fortune, Hamlet." KING: "Gertrude, do
 *   not drink." QUEEN: "I will, my lord; I pray you pardon me." KING:
 *   "[Aside.] It is the poison'd cup; it is too late." So the Queen lifts
 *   the cup towards her son in a toast, and the King, by the table, reaches
 *   out his open hand to stop her, his eyes wide. The cup is the spot colour:
 *   it is what the moment is about. She holds it out at the height of her
 *   shoulder, well in front of her, so the red is nowhere near a mouth.
 * - QUEEN: "Here, Hamlet, take my napkin, rub thy brows." So her napkin is in
 *   her other hand. HAMLET: "I dare not drink yet, madam. By and by." So
 *   Hamlet is turned to her, his foil lowered, its point to the floor. He
 *   was first cut holding up an open hand to her, and at panel size it
 *   reached for the cup, as if he took it: the very thing he does not do.
 * - LAERTES: "My lord, I'll hit him now." He waits by the King, his foil
 *   lowered, bareheaded for the match and known by his short pointed beard.
 *   "Give them the foils, young Osric"; "And you, the judges, bear a wary
 *   eye." So Osric, in his tall plumed hat, stands between them as the
 *   judge, and Horatio watches from the other side.
 * - The foils are drawn as the kit's rapier, every point down to the floor
 *   and away from everyone.
 *
 * Nothing is taken from a film or stage production. Seeds: the hall's own
 * (./hall.tsx).
 */

/**
 * The cup, in the Queen's frame: a goblet held by its stem, its bowl above her
 * fist and its foot below it, so the fist itself shows between them. Only the
 * wine in the bowl is red; the foot is cut in paper, because a red foot under
 * a fist reads as a drop falling from the hand (reviewed 2 October 2026).
 */
const CUP_BOWL =
  'M30.4 -146.6C30 -140.4 32.4 -137.6 35.6 -137.2C38.8 -137.6 41.2 -140.4 40.8 -146.6Z'
const CUP_FOOT = 'M31.6 -125.8L39.6 -125.8L37 -128.2L34.2 -128.2Z'
/** Her napkin, hanging from her far hand: a fold of white linen. */
const NAPKIN = 'M4.6 -86C2 -78 1.4 -68 3.4 -60L9.6 -60.8C8.6 -69 9 -78 11 -86Z'
const NAPKIN_FOLD = 'M6.6 -82L5.8 -64'

function TheDuel({ uid }: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [560, 200], push: 1.03 })}>
      <HallBack uid={uid} />
      {/* "Set me the stoups of wine upon that table." */}
      <Table />
      <path
        d={stoup(52) + stoup(92, 30)}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />

      {/* in the middle distance: Laertes, Osric the judge, Horatio */}
      <Person
        at={[334, 300]}
        scale={1}
        pose={{
          look: 'laertes',
          bare: true,
          head: { rot: 2 },
          far: {
            pts: [
              [-4, -130],
              [-8, -104],
              [-2, -84],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [14, -104],
              [20, -86],
            ],
            hand: 'grip',
          },
        }}
      >
        <path d={rapier([21, -82], 96, 74)} fill={PAPER} stroke={INK} strokeWidth={0.9} />
      </Person>
      <Person
        at={[446, 296]}
        scale={0.97}
        pose={{
          look: 'osric',
          far: {
            pts: [
              [-4, -130],
              [-10, -106],
              [-4, -86],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [12, -104],
              [10, -86],
            ],
          },
        }}
      />
      <Person
        at={[828, 300]}
        scale={0.98}
        flip
        pose={{
          look: 'horatio',
          head: { rot: 4 },
          far: {
            pts: [
              [-4, -130],
              [-1, -104],
              [9, -90],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [12, -104],
              [15, -88],
            ],
          },
        }}
      />

      {/* the King, by the table, reaching out: "Gertrude, do not drink." */}
      <Person
        at={[214, 330]}
        scale={1.12}
        pose={{
          look: 'claudius',
          eye: 'wide',
          head: { rot: -2 },
          far: {
            pts: [
              [-4, -130],
              [-8, -104],
              [0, -86],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [24, -112],
              [45, -104],
            ],
            hand: 'open',
            deg: 10,
          },
        }}
      />
      {/* the Queen, the cup lifted to her son */}
      <Person
        at={[598, 328]}
        scale={1.12}
        pose={{
          look: 'gertrude',
          head: { rot: -3 },
          far: {
            pts: [
              [-4, -126],
              [-4, -104],
              [6, -88],
            ],
            hand: 'grip',
          },
          near: {
            pts: [
              [5, -124],
              [24, -110],
              [40, -114],
            ],
            hand: 'grip',
            deg: -80,
          },
        }}
      >
        <path d={NAPKIN} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
        <path d={NAPKIN_FOLD} stroke={INK} strokeWidth={0.8} />
        <g transform="translate(6 14)">
          <path d={CUP_BOWL} fill={RED} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
          <path d={CUP_FOOT} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
          <path d="M31.8 -144.4H39.4" stroke={PAPER} strokeWidth={1} />
        </g>
      </Person>
      {/* Hamlet, turned to her, his foil lowered: "I dare not drink yet, madam. By and by." */}
      <Person
        at={[730, 330]}
        scale={1.15}
        flip
        pose={{
          look: 'hamlet',
          head: { rot: 4 },
          far: {
            pts: [
              [-4, -130],
              [-8, -104],
              [-2, -84],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [14, -104],
              [22, -88],
            ],
            hand: 'grip',
          },
        }}
      >
        <path d={rapier([23, -84], 94, 74)} fill={PAPER} stroke={INK} strokeWidth={0.9} />
      </Person>
    </g>
  )
}

export const theDuel: LinocutArt = { width: W, height: H, Draw: TheDuel }
