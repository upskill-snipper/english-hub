import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK } from '@/components/comics/linocut/palette'
import { clamp } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { DoverCountry, H, W, doverMarks } from './dover-country'
import { Person, type P } from './people'
import { footShadow } from './the-british-camp'

/**
 * Act 4, Scene 6: "Dover cliff", the sixteenth moment in the guide's
 * timeline. Every detail is from the scene in the held edition
 * (src/data/full-texts/king-lear.ts):
 *
 * - "Enter Gloucester, and Edgar dressed like a peasant." Only the two of
 *   them. Edgar is out of Poor Tom's blanket ("in nothing am I chang'd / But
 *   in my garments"), so he is the kit's Edgar in his plain tunic, and his
 *   father, blind since 3.7, wears the kit's plain cloth band over his eyes
 *   (`blind`), with nothing beneath it.
 * - "Methinks the ground is even." It is: the down (./dover-country.tsx) is
 *   level from the two men's feet to the far ridge, and the sea, which
 *   Gloucester cannot hear ("Hark, do you hear the sea?" / "No, truly."), is
 *   only a band on the horizon.
 * - "Come on, sir; here's the place. Stand still. How fearful / And dizzy
 *   'tis to cast one's eyes so low!" and "Give me your hand. / You are now
 *   within a foot of th'extreme verge." So Edgar stands a step ahead at the
 *   "verge" he describes, bent to look down over a drop that is not there,
 *   his near hand held out open over the flat grass in front of him, and
 *   with his other hand he holds his father's. Gloucester stands upright
 *   behind him, his face lifted, as a blind man listens.
 *
 * NOT DRAWN: the leap. "Gloucester leaps, and falls along" is the moment the
 * scene turns on, but it is a man trying to end his life, and the style
 * guide's care for self-harm applies: the picture carries the moment before
 * it, the son's kind deception ("Why I do trifle thus with his despair / Is
 * done to cure it"), not the attempt. Nor is anything printed in red: there
 * is no flame or symbol in the scene, and a red mark near a blinded man's
 * feet could be taken for blood.
 *
 * Nothing is taken from a film or stage production. Seeds: 1601 (the
 * country, through ./dover-country.tsx).
 */

const GLOUCESTER: P = [318, 326]
const EDGAR: P = [440, 326]
const SCALE = 1.2

/** The sky is kept clear of engraving behind the two heads. */
const light = (x: number, y: number) => clamp(1 - Math.hypot((x - 380) * 0.8, y - 140) / 200)
/** No tufts of grass under the two men's feet. */
const clear = (x: number, y: number) => x > 250 && x < 530 && y > 284

function DoverCliff(_: ArtProps) {
  const m = doverMarks(1601, light, clear)
  return (
    <g className="lc-push" style={timing({ origin: [380, 240], push: 1.03 })}>
      <DoverCountry m={m} />
      <path
        d={
          footShadow(GLOUCESTER[0] - 6, GLOUCESTER[1], 32, -4) +
          footShadow(EDGAR[0] - 4, EDGAR[1], 30, -4)
        }
        fill={INK}
      />
      {/* Gloucester, blind, his face lifted, his near hand held in his son's */}
      <Person
        at={GLOUCESTER}
        scale={SCALE}
        pose={{
          look: 'gloucester',
          blind: true,
          head: { rot: -6 },
          far: {
            pts: [
              [-5, -128],
              [-8, -102],
              [-4, -80],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [24, -110],
              [46, -104],
            ],
            hand: 'mitt',
          },
        }}
      />
      {/* Edgar at the "verge", bent to look down, his arm out over a drop that is not there */}
      <Person
        at={EDGAR}
        scale={SCALE}
        pose={{
          look: 'edgar',
          body: { neck: [22, -130], hip: [2, -70] },
          head: { rot: 48 },
          legs: {
            far: [
              [-1, -70],
              [-12, -36],
              [-20, -3],
            ],
            near: [
              [5, -70],
              [14, -38],
              [18, -3],
            ],
          },
          far: {
            pts: [
              [18, -124],
              [-8, -112],
              [-36, -105],
            ],
            hand: 'grip',
          },
          near: {
            pts: [
              [26, -122],
              [44, -102],
              [56, -80],
            ],
            hand: 'open',
            deg: 66,
            thumb: -1,
          },
        }}
      />
    </g>
  )
}

export const doverCliff: LinocutArt = { width: W, height: H, Draw: DoverCliff }
