import type { ReactNode } from 'react'

import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { n } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Avenue, H, W } from './belmont-avenue'
import {
  CutFigure,
  EYE,
  HEAD_MAN,
  HEAD_WOMAN,
  JESSICA_HAIR,
  JESSICA_STRANDS,
  LORENZO_BONNET,
  LORENZO_BONNET_CUT,
  NAPE_HAIR,
  Person,
  RUFF,
  doublet,
  gown,
  limb,
  mitt,
  shoe,
  type P,
  type Piece,
  type Pose,
} from './people'

/**
 * Act 5, Scene 1: "In such a night", the fifteenth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/the-merchant-of-venice.ts):
 *
 * - "Belmont. The avenue to Portia's house." "Enter Lorenzo and Jessica."
 *   The place is cut in ./belmont-avenue.tsx, in the same view as "The ring
 *   quarrel" later the same night: the moon high over the bank, the stars
 *   and their patens, two rows of cypresses running back to the house, and
 *   the lit window of the hall.
 * - LORENZO: "How sweet the moonlight sleeps upon this bank! / Here will we
 *   sit and let the sounds of music / Creep in our ears; soft stillness and
 *   the night / Become the touches of sweet harmony. / Sit, Jessica." So the
 *   two sit side by side on the bank, the palest ground in the print, turned
 *   up to the moon ("The moon shines bright"): Lorenzo leaning back on one
 *   hand, the other on his knee; Jessica, her long dark hair loose as the
 *   kit cuts it, her hands in her lap. They are drawn sitting with the kit's
 *   own pieces, because `Person` stands, and wear what the kit dresses them
 *   in: Lorenzo's flat bonnet, Jessica's gown.
 * - "Enter Portia and Nerissa." PORTIA: "That light we see is burning in my
 *   hall. / How far that little candle throws his beams!" So far up the
 *   avenue, small, the two women walk home towards the lit window, which is
 *   the spot colour. They are on their way while the lovers talk, and
 *   Portia's fair hair tells her from Nerissa even so far off.
 * - Stephano and the musicians are not drawn: Stephano has gone in with his
 *   message, and the musicians come out after the lines quoted.
 *
 * Nothing is taken from a film or stage production. Seed: 15301 (the sky,
 * the stars, the trees, the grass and the bank, and the candle's beams: see
 * ./belmont-avenue.tsx).
 */

const headT = (at: P, rot: number) => `translate(${n(at[0])} ${n(at[1])}) rotate(${rot})`

/**
 * Lorenzo, sitting on the grass of the bank, leaning back on one hand, the
 * other on his knee, looking up. Drawn facing right, from the point he sits
 * on at (0, 0), facing the moon.
 *
 * His hand was first lifted open to the stars ("Look how the floor of
 * heaven"), and at panel size it sat before his face and read as a man
 * praying or eating, so it was put on his knee.
 */
const L_HEAD: P = [2, -96]
const L_HEAD_T = headT(L_HEAD, -14)
const LORENZO: Piece[] = [
  [
    {
      d: limb([
        [-4, -66],
        [-16, -40],
        [-22, -8],
      ]),
      w: 8.4,
    },
    mitt([-22, -8], 100),
  ],
  {
    d: limb([
      [-2, -8],
      [26, -20],
      [46, -3],
    ]),
    w: 9,
  },
  shoe([46, 0], 1),
  {
    d: limb([
      [0, -70],
      [0, -12],
    ]),
    w: 22,
  },
  { d: doublet([0, -74], [0, -18], 1, { width: 28, hem: 16, flare: 6 }) },
  {
    d: limb([
      [2, -8],
      [32, -24],
      [54, -3],
    ]),
    w: 9,
  },
  shoe([54, 0], 1),
  { d: NAPE_HAIR, t: L_HEAD_T },
  { d: HEAD_MAN, t: L_HEAD_T },
  { d: LORENZO_BONNET, t: L_HEAD_T },
  [
    {
      d: limb([
        [3, -66],
        [14, -44],
        [27, -26],
      ]),
      w: 8.4,
      sep: 1.5,
    },
    { ...mitt([27, -26], 40), sep: 1.5 },
  ],
]

/**
 * Jessica beside him on the bank, her skirt spread over her feet on the
 * grass, her hands in her lap, looking up with him. Drawn facing right from
 * the point she sits on. (His arm was tried round her shoulders, and with
 * the two so close it read as a hand at her face, so they sit apart.)
 */
const J_HEAD: P = [4, -98]
const J_HEAD_T = headT(J_HEAD, -20)
const JESSICA: Piece[] = [
  { d: JESSICA_HAIR, t: J_HEAD_T },
  shoe([66, 0], 1),
  { d: gown([0, -76], [0, -38], 0, 1, { shoulder: 24, waistW: 16, front: 66, back: 18 }) },
  { d: HEAD_WOMAN, t: J_HEAD_T },
  [
    {
      d: limb([
        [-2, -72],
        [4, -52],
        [14, -40],
      ]),
      w: 7.8,
    },
    mitt([14, -40], 10, 0.85),
  ],
  [
    {
      d: limb([
        [3, -72],
        [8, -52],
        [18, -42],
      ]),
      w: 7.8,
      sep: 1.5,
    },
    { ...mitt([18, -42], 4, 0.85), sep: 1.5 },
  ],
]

/** Portia and Nerissa, far up the avenue, walking home. */
const WALKER_PORTIA: Pose = {
  look: 'portia',
  far: {
    pts: [
      [-3, -126],
      [-8, -104],
      [-6, -86],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [3, -126],
      [8, -104],
      [6, -86],
    ],
    hand: 'mitt',
  },
}
const WALKER_NERISSA: Pose = { ...WALKER_PORTIA, look: 'nerissa' }

function Seated({
  parts,
  at,
  scale,
  flip = false,
  children,
}: {
  parts: Piece[]
  at: P
  scale: number
  flip?: boolean
  children: ReactNode
}) {
  return (
    <CutFigure
      parts={parts}
      transform={`translate(${at[0]} ${at[1]}) scale(${flip ? -scale : scale} ${scale})`}
    >
      {children}
    </CutFigure>
  )
}

function InSuchANight(_: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [200, 200], push: 1.03 })}>
      <Avenue
        seed={15301}
        walk={
          <>
            <Person pose={WALKER_NERISSA} at={[640, 276]} scale={0.44} />
            <Person pose={WALKER_PORTIA} at={[664, 274]} scale={0.44} />
          </>
        }
      />
      <Seated parts={JESSICA} at={[164, 318]} scale={1.36}>
        <g transform={J_HEAD_T}>
          <path d={JESSICA_STRANDS} fill={PAPER} />
          <path d={EYE} fill={PAPER} />
        </g>
      </Seated>
      <Seated parts={LORENZO} at={[50, 324]} scale={1.4}>
        <g transform={L_HEAD_T}>
          <path d={LORENZO_BONNET_CUT} fill={PAPER} />
          <path d={RUFF} fill={PAPER} stroke={INK} strokeWidth={0.8} />
          <path d={EYE} fill={PAPER} />
        </g>
      </Seated>
    </g>
  )
}

export const inSuchANight: LinocutArt = { width: W, height: H, Draw: InSuchANight }
