import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK } from '@/components/comics/linocut/palette'
import { clamp } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { DoverCountry, H, W, doverMarks } from './dover-country'
import { Kneel } from './kneel'
import { Person, type P } from './people'
import { footShadow } from './the-british-camp'

/**
 * Act 4, Scene 6: "Reason in madness", the seventeenth moment in the guide's
 * timeline. Every detail is from the scene in the held edition
 * (src/data/full-texts/king-lear.ts):
 *
 * - The same down near Dover as "Dover cliff" (./dover-country.tsx), the
 *   same day: "Enter Lear, fantastically dressed up with flowers." Cordelia
 *   has just described him "Crown'd with rank fumiter and furrow weeds, /
 *   With harlocks, hemlock, nettles, cuckoo-flowers" (4.4), so he wears the
 *   kit's crown of weeds (`weeds`, added to ./people.tsx for this panel):
 *   leaves standing up like the points of a crown, and the white flowers of
 *   hemlock and cuckoo-flower. Bareheaded under it, white-haired and
 *   white-bearded, in his gown with its fur collar, without the court's
 *   mantle.
 * - "Ay, every inch a king. / When I do stare, see how the subject quakes."
 *   He stands upright, his head up, and holds out his hand.
 * - "O, let me kiss that hand!" / "Let me wipe it first; it smells of
 *   mortality." Gloucester, blind (the kit's `blind`: the plain band over his
 *   eyes, nothing beneath it), reaches up for the hand with both of his. The
 *   play gives no direction for him to kneel; a subject kisses a king's hand
 *   on his knees, and "see how the subject quakes" makes him one, so he
 *   kneels (./kneel.tsx). The King's hand is held low, at the height of
 *   Gloucester's chest, so no hand comes near the blind man's face.
 * - Edgar, still "dressed like a peasant", stands a little apart: "O thou
 *   side-piercing sight!" and "I would not take this from report, / It is,
 *   and my heart breaks at it." So his head is bowed, his eyes down and his
 *   hand on his heart.
 *
 * Only these three: the Gentleman and his attendants come later in the scene,
 * and Oswald after Lear has run from them, so neither is here, nor is the
 * fight in which Oswald dies. Nothing is printed in red: there is no flame
 * or symbol in the scene, red on the King's head would read as a wound, and
 * a blinded man kneels at the centre. Nothing is taken from a film or stage
 * production. Seeds: 1701 (the country, through ./dover-country.tsx).
 */

const LEAR: P = [292, 326]
const GLOUCESTER: P = [406, 326]
const EDGAR: P = [526, 326]
const SCALE = 1.2

/** The sky is kept clear of engraving behind the three heads. */
const light = (x: number, y: number) => clamp(1 - Math.hypot((x - 400) * 0.7, y - 150) / 230)
/** No tufts of grass under the three of them. */
const clear = (x: number, y: number) => x > 230 && x < 600 && y > 284

function ReasonInMadness({ uid }: ArtProps) {
  const m = doverMarks(1701, light, clear)
  return (
    <g className="lc-push" style={timing({ origin: [400, 240], push: 1.03 })}>
      <DoverCountry m={m} />
      <path
        d={
          footShadow(LEAR[0] - 4, LEAR[1], 34, -4) +
          footShadow(GLOUCESTER[0], GLOUCESTER[1], 40, -4) +
          footShadow(EDGAR[0], EDGAR[1], 28, -4)
        }
        fill={INK}
      />
      {/* Lear, crowned with weeds, upright, holding out his hand */}
      <Person
        at={LEAR}
        scale={SCALE}
        pose={{
          look: 'lear',
          mantle: false,
          weeds: true,
          head: { rot: -4 },
          far: {
            pts: [
              [-5, -128],
              [-10, -104],
              [-6, -82],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [18, -102],
              [38, -86],
            ],
            hand: 'open',
            deg: 18,
            thumb: -1,
          },
        }}
      />
      {/* Gloucester on his knees, reaching up for the King's hand */}
      <Kneel
        uid={uid}
        id="gloucester"
        at={GLOUCESTER}
        scale={SCALE}
        flip
        lean={10}
        pose={{
          look: 'gloucester',
          blind: true,
          head: { rot: -8 },
          far: {
            pts: [
              [-4, -128],
              [12, -116],
              [30, -122],
            ],
            hand: 'open',
            deg: -24,
          },
          near: {
            pts: [
              [5, -128],
              [20, -114],
              [36, -120],
            ],
            hand: 'open',
            deg: -22,
            thumb: -1,
          },
        }}
      />
      {/* Edgar a little apart, his head bowed, his hand on his heart */}
      <Person
        at={EDGAR}
        scale={SCALE}
        flip
        pose={{
          look: 'edgar',
          head: { rot: 18 },
          eye: 'down',
          far: {
            pts: [
              [-4, -130],
              [-6, -104],
              [-2, -80],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [14, -102],
              [12, -116],
            ],
            hand: 'open',
            deg: -120,
            thumb: 1,
          },
        }}
      />
    </g>
  )
}

export const reasonInMadness: LinocutArt = { width: W, height: H, Draw: ReasonInMadness }
