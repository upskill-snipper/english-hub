import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { gouge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, seatedLegs, type P, type Pose } from './people'
import { H, TempleRoom, W } from './temple-chambers'

/**
 * Chapters 50 and 51: "Estella's parents", the fifteenth moment in the
 * guide's timeline, at the instant of its quotation, which ends Chapter 50.
 * Pip's chambers in the Temple again (./temple-chambers.tsx, the room of "The
 * convict returns" and "Magwitch's story"), by the fire, at the end of the
 * day after the fire at Satis House. Every detail is from the held edition
 * (src/data/full-texts/great-expectations.ts):
 *
 * - "When Herbert had been down to Hammersmith and had seen his father, he
 *   came back to me at our chambers, and devoted the day to attending on
 *   me"; "as I lay quiet on the sofa"; "as Herbert changed the bandages, more
 *   by the light of the fire than by the outer light". So it is the room by
 *   day, with the day wearing away, and its fire.
 * - "those I carried in a sling; and I could only wear my coat like a cloak,
 *   loose over my shoulders and fastened at the neck." So Pip, the kit's Pip
 *   grown, sits on the sofa with his coat hung from his shoulders and the
 *   white band of the sling across his chest, as he sits in the boat in
 *   "Escape down the river". His burns are not drawn: the coat covers his
 *   arms.
 * - "'Herbert,' said I, after a short silence, in a hurried way, 'can you see
 *   me best by the light of the window, or the light of the fire?' 'By the
 *   firelight,' answered Herbert, coming close again. 'Look at me.' 'I do look
 *   at you, my dear boy.'" So Herbert, the kit's (a pale young gentleman with
 *   light hair), sits on a chair with his back to the fire and leans close to
 *   look into Pip's face, which the fire lights; Pip sits up on the sofa
 *   facing him, his head lifted, about to say the panel's words.
 * - The sofa is not described: it is drawn plainly, against the wall, and
 *   Pip sits on its near end turned to Herbert, so that the two face each
 *   other in profile.
 *
 * WHAT IS NOT DRAWN. What Herbert tells: the woman, the barn, the trial and
 * the child are in the telling, not in the room, and the caption and alt text
 * do not describe them. Molly, Jaggers, Magwitch and Estella, named in the
 * guide for this moment, are not in this room and are not drawn. The spot
 * colour is the fire alone, low on the left, away from both their faces.
 */

/** The figures' scale: the scale of the people in "Magwitch's story", in the same room. */
const FIG = 1.27
/** Herbert's chair by the fire, and Pip on the sofa facing him. */
const HERBERT_AT: P = [236, 326]
const PIP_AT: P = [386, 326]

/** Herbert's plain chair, side on, its back behind him (towards the fire). */
function HerbertsChair() {
  const legs = 'M206 274V322M242 274V322M202 270V198'
  return (
    <g strokeLinejoin="round">
      <path d={legs} stroke={PAPER} strokeWidth={8} strokeLinecap="round" />
      <path d={legs} stroke={INK} strokeWidth={5} strokeLinecap="round" />
      <rect
        x={198}
        y={266}
        width={50}
        height={7}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
    </g>
  )
}

/**
 * The sofa, against the wall behind them: a long padded back, the seat, its
 * scrolled arm at the far end, away from the two of them, and short legs.
 * Pip sits on its near end, turned to Herbert.
 */
const SOFA = { x0: 356, x1: 640, back: 210, seat: 268, front: 290 }
function Sofa() {
  const { x0, x1, back, seat, front } = SOFA
  const legs = `M${x0 + 8} ${front}V320M${x1 - 10} ${front}V320`
  return (
    <g strokeLinejoin="round">
      {/* the back, its padding buttoned */}
      <path
        d={`M${x0} ${seat}V${back + 14}Q${x0} ${back} ${x0 + 16} ${back}H${x1 - 30}Q${x1 - 14} ${back} ${x1 - 14} ${back + 14}V${seat}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={[420, 470, 520, 570]
          .map((x) => `M${x - 1.6} ${back + 30}a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0Z`)
          .join('')}
        fill={PAPER}
      />
      <path d={gouge(x0 + 14, back + 8, x1 - 36, back + 8, 1.1, 0.3)} fill={PAPER} />
      {/* the seat */}
      <path
        d={`M${x0 - 4} ${seat}H${x1}V${front}H${x0 - 2}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={gouge(x0 + 4, seat + 6, x1 - 8, seat + 6, 1, 0.3)} fill={PAPER} />
      {/* the scrolled arm at the far end */}
      <path
        d={`M${x1 - 18} ${front}V${back + 34}C${x1 - 18} ${back + 18} ${x1 + 4} ${back + 14} ${x1 + 6} ${back + 32}C${x1 + 8} ${back + 44} ${x1 - 2} ${back + 48} ${x1 - 4} ${back + 40}V${front}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={legs} stroke={PAPER} strokeWidth={8} strokeLinecap="round" />
      <path d={legs} stroke={INK} strokeWidth={5} strokeLinecap="round" />
    </g>
  )
}

// ── THE PEOPLE, from the figure kit ─────────────────────────────────────────

/** Herbert, leaning close to look into Pip's face, his hands on his knees. */
const HERBERT: Pose = {
  look: 'herbert',
  eye: 'open',
  brow: 'up',
  head: { rot: 4 },
  body: { neck: [22, -110], hip: [0, -48] },
  legs: seatedLegs(46, 36),
  far: {
    pts: [
      [18, -104],
      [26, -80],
      [34, -60],
    ],
    hand: 'mitt',
    deg: 30,
  },
  near: {
    pts: [
      [24, -102],
      [32, -78],
      [40, -58],
    ],
    hand: 'mitt',
    deg: 24,
  },
}

/**
 * Pip, sitting up on the sofa, facing Herbert and the fire, his head lifted:
 * his arms under the coat he wears like a cloak (COAT_CLOAK), and the sling's
 * white band across his chest.
 */
const PIP: Pose = {
  look: 'pip',
  age: 'man',
  eye: 'wide',
  head: { rot: -4 },
  body: { neck: [6, -114], hip: [0, -48] },
  legs: seatedLegs(46, 38),
  far: {
    pts: [
      [2, -108],
      [4, -86],
      [14, -66],
    ],
    hand: 'none',
  },
  near: {
    pts: [
      [6, -108],
      [8, -90],
      [18, -86],
    ],
    hand: 'none',
  },
}
/**
 * His coat, "like a cloak, loose over my shoulders and fastened at the neck"
 * (Chapter 50), in his frame: from the collar over both shoulders and arms
 * to the waist, open down the front, where the sling shows.
 */
const COAT_CLOAK =
  'M14 -116C21 -114 25 -108 26 -98C27 -86 28 -72 29 -56L-14 -54C-15 -70 -15 -86 -13 -98C-11 -108 -4 -115 6 -117Z'
const COAT_COLLAR = 'M-4 -118C2 -122 12 -122 18 -118L20 -110C12 -107 2 -107 -4 -110Z'
const COAT_FOLDS = gouge(-6, -108, -8, -62, 0.8, 0.5) + gouge(8, -104, 6, -64, 0.6, -0.4)
/** The sling: a white band from the far side of his neck down across his chest, and the arm it holds. */
const SLING = 'M4 -114L20 -86'
const SLUNG_ARM = 'M8 -90C12 -92 20 -92 26 -88L26 -80C20 -82 12 -82 8 -80Z'

function EstellasParents({ uid }: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [330, 200], push: 1.03 })}>
      <TempleRoom uid={uid} night={false} />
      <Sofa />
      <HerbertsChair />
      {/* Herbert, his back to the fire, leaning close to look at him */}
      <Person at={HERBERT_AT} scale={FIG} pose={HERBERT} />
      {/* Pip on the sofa, facing him, in his coat worn like a cloak, his arm in its sling */}
      <Person at={PIP_AT} scale={FIG} pose={PIP} flip>
        <path d={COAT_CLOAK} fill={INK} stroke={PAPER} strokeWidth={1.6} strokeLinejoin="round" />
        <path d={COAT_FOLDS} fill={PAPER} />
        <path d={SLUNG_ARM} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
        <path d={SLING} stroke={PAPER} strokeWidth={3.2} strokeLinecap="round" />
        <path d={COAT_COLLAR} fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" />
      </Person>
    </g>
  )
}

export const estellasParents: LinocutArt = { width: W, height: H, Draw: EstellasParents }
