import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { ribbon } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Alcove, Garden, H, Room, W, Window, type Box } from './belmont'
import { Person, type Pose } from './people'
import { footShadow } from './venice-canal'

/**
 * Act 2, Scene 9: "Arragon chooses silver", the seventh moment in the
 * guide's timeline. Every detail is from the scene, as the held edition
 * prints it (src/data/full-texts/the-merchant-of-venice.ts):
 *
 * - "Belmont. A room in Portia's house." It is the casket room of
 *   ./belmont.tsx, cut as "Portia and her father's will" cuts it, with the
 *   window on the gardens on the left and the alcove in the middle. NERISSA:
 *   "Quick, quick, I pray thee, draw the curtain straight." So the curtain,
 *   the room's spot colour, is drawn right back, and the three caskets stand
 *   on their table: gold, silver and lead from the left.
 * - "Enter the Prince of Arragon, his train, and Portia." ARRAGON: "Give me
 *   a key for this, / And instantly unlock my fortunes here." "He opens the
 *   silver casket." So the silver casket stands open, its lid thrown back.
 * - "What's here? The portrait of a blinking idiot / Presenting me a
 *   schedule!" "Did I deserve no more than a fool's head?" So Arragon, on
 *   the right, holds up in both hands a small framed picture of a fool's
 *   head, in a fool's cap of three points that droop to bells, one eye shut
 *   in a wink, and a scroll held up below his chin. He stares down at it.
 *   How the kit dresses him, and why, is in ./people.tsx: a prince's
 *   circlet, a long cloak and a rapier, in ink, so he is never taken for
 *   Morocco in white. He is proud ("I will assume desert"), so he stands
 *   upright even now.
 * - PORTIA: "Too long a pause for that which you find there." So Portia,
 *   small and fair-haired, stands on the left of the caskets, still, her
 *   hands at her sides, watching him; Nerissa, in her coif, beside her. His train
 *   is not drawn: they have no part in the moment.
 *
 * Nothing is taken from a film or stage production. Seed: 2901 (the wall
 * and the floor).
 */

const WIN: Box = { x0: 46, x1: 146, top: 40, bottom: 196 }
const ALCOVE: Box = { x0: 330, x1: 580, top: 64, bottom: 256 }
const FEET = 324

/** Nerissa, behind Portia, her hands at rest. */
const NERISSA: Pose = {
  look: 'nerissa',
  far: {
    pts: [
      [-3, -126],
      [-6, -102],
      [-3, -84],
    ],
  },
  near: {
    pts: [
      [4, -126],
      [8, -102],
      [6, -84],
    ],
  },
}

/** Portia, watching him, still, her hands at rest at her sides. */
const PORTIA: Pose = {
  look: 'portia',
  head: { rot: 3 },
  far: {
    pts: [
      [-3, -126],
      [-5, -102],
      [-2, -82],
    ],
  },
  near: {
    pts: [
      [4, -126],
      [8, -102],
      [8, -80],
    ],
  },
}

/**
 * Arragon (flipped to face left), holding the portrait up before him by its
 * lower corners, his head bowed to it.
 */
const ARRAGON: Pose = {
  look: 'arragon',
  head: { rot: 10 },
  sword: true,
  far: {
    pts: [
      [-4, -128],
      [24, -104],
      [55, -110],
    ],
    deg: -96,
  },
  near: {
    pts: [
      [5, -128],
      [16, -100],
      [31, -108],
    ],
    deg: -84,
  },
}

/**
 * The portrait of a blinking idiot, drawn about its own centre and set in
 * Arragon's frame at PORTRAIT_AT, held up before him: a dark frame round a
 * pale picture of a fool's head in a fool's cap, its three points drooping
 * to bells, one eye open and one shut, and the scroll it presents, all in
 * ink on paper.
 */
const PORTRAIT_AT = 'translate(43 -142)'
const FRAME = 'M-18 -24H18V24H-18Z'
const PICTURE = 'M-15 -21H15V21H-15Z'
const FOOL_FACE =
  'M-6.6 3C-6.6 -3 -3.8 -5.6 0 -5.6C3.8 -5.6 6.6 -3 6.6 3C6.6 9 3.8 12.4 0 12.4C-3.8 12.4 -6.6 9 -6.6 3Z'
/**
 * The fool's cap: a band across the brow and three points, out to either
 * side and up in the middle, each drooping at its tip to a bell.
 */
const FOOL_CAP =
  'M-7.4 -1.6Q0 -7 7.4 -1.6L7.4 -5.4Q0 -10.8 -7.4 -5.4Z' +
  ribbon(
    [
      [-4, -6],
      [-9, -12],
      [-13.6, -12],
      [-15.6, -6],
    ],
    5.4,
    0.7,
    false,
  ) +
  ribbon(
    [
      [0, -8],
      [0.4, -14],
      [2.6, -18.4],
      [6, -17],
    ],
    5.4,
    0.7,
    false,
  ) +
  ribbon(
    [
      [4, -6],
      [9, -12],
      [13.6, -12],
      [15.6, -6],
    ],
    5.4,
    0.7,
    false,
  )
const BELLS =
  'M-17.6 -4.2a2.1 2.1 0 1 0 4.2 0a2.1 2.1 0 1 0 -4.2 0Z' +
  'M4.6 -15.6a2.1 2.1 0 1 0 4.2 0a2.1 2.1 0 1 0 -4.2 0Z' +
  'M13.4 -4.2a2.1 2.1 0 1 0 4.2 0a2.1 2.1 0 1 0 -4.2 0Z'
/** One eye shut in a wink, and a wide grin. Strokes in ink; the open eye is FOOL_EYE. */
const FOOL_FEATURES = 'M-4.2 1.8Q-2.8 0.6 -1.4 1.8M-4 6.6Q0 10 4 6.6'
const FOOL_EYE: [number, number] = [2.8, 1.4]
/** The schedule the fool holds up: a small scroll below his chin. */
const SCHEDULE = 'M-8 14.4H8V18.6H-8Z'

function ArragonChoosesSilver({ uid }: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [560, 180], push: 1.03 })}>
      <Room seed={2901} win={WIN} skip={ALCOVE} />
      <Window uid={uid} win={WIN} outside={<Garden win={WIN} />} />
      <Alcove box={ALCOVE} open={1} openOne="silver" />
      <path
        d={
          footShadow(186, 30, FEET + 2) +
          footShadow(258, 30, FEET + 2) +
          footShadow(676, 40, FEET + 2)
        }
        fill={INK}
      />
      <Person pose={NERISSA} at={[186, FEET]} scale={1.3} />
      <Person pose={PORTIA} at={[258, FEET]} scale={1.3} />
      <Person pose={ARRAGON} at={[676, FEET]} scale={1.22} flip>
        <g transform={PORTRAIT_AT}>
          <path d={FRAME} fill={INK} stroke={PAPER} strokeWidth={1.6} strokeLinejoin="round" />
          <path d={PICTURE} fill={PAPER} />
          <path d={FOOL_FACE} fill={PAPER} stroke={INK} strokeWidth={1.1} />
          <path d={FOOL_CAP + BELLS} fill={INK} />
          <path
            d={FOOL_FEATURES}
            fill="none"
            stroke={INK}
            strokeWidth={1.1}
            strokeLinecap="round"
          />
          <circle cx={FOOL_EYE[0]} cy={FOOL_EYE[1]} r={1.1} fill={INK} />
          <path d={SCHEDULE} fill={PAPER} stroke={INK} strokeWidth={0.9} />
        </g>
      </Person>
    </g>
  )
}

export const arragonChoosesSilver: LinocutArt = { width: W, height: H, Draw: ArragonChoosesSilver }
