import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { gouge, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Altar, arch, ChurchWindow, FLOOR, H, Nave, Pillar, W, type Light } from './church'
import { Person, type Pose } from './people'

/**
 * Act 4, Scene 1: "The wedding", the tenth moment in the guide's timeline.
 * Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/much-ado-about-nothing.ts):
 *
 * - "The Inside of a Church." It is the church of "Kill Claudio" and "At the
 *   tomb" (./church.tsx), drawn from the same place as "Kill Claudio", which
 *   is the same scene an hour later: the altar with its white cloth, cross and
 *   two candles under a window of daylight, a pillar of the nave, and the
 *   west door open on the morning (Hero dressed for it at "almost five
 *   o'clock", 3.4). The candles are the spot colour, as they are there.
 * - "Enter Don Pedro, Don John, Leonato, Friar Francis, Claudio, Benedick,
 *   Hero, Beatrice". All eight are drawn, and nobody else.
 * - CLAUDIO: "Stand thee by, Friar." So Friar Francis stands aside on the
 *   altar step, his hands together, black against the pale pillar, while
 *   Claudio turns the service into an accusation.
 * - CLAUDIO: "There, Leonato, take her back again: / Give not this rotten
 *   orange to your friend". So Claudio has turned his back on Hero and is
 *   walking to the Prince, and points back at her over his shoulder; Leonato
 *   stands with both hands lifted open in dismay ("What do you mean, my
 *   lord?").
 * - CLAUDIO: "Behold! how like a maid she blushes here." So Hero, between
 *   them, bows her head. Her blush is left to the words: NO RED ON HER FACE.
 *   It was first cut as two short red strokes on her cheek, and the docblock
 *   said they matched "the flush on Beatrice's cheek in Kill Claudio"; that
 *   flush had already been taken out, because on an ink face at phone width
 *   it read as a mark or a bruise. On Hero, in the scene where she is shamed
 *   and her father wishes her dead, the strokes read the same way, as marks
 *   on a girl's face, so they were removed in review (26 September 2026).
 *   She wears the rebato she chose that morning ("No, pray thee, good Meg,
 *   I'll wear this", 3.4), a standing collar of lace cut in paper behind her
 *   neck, so the bride is known.
 * - Don Pedro stands with Claudio ("I stand dishonour'd, that have gone
 *   about / To link my dear friend to a common stale"), and Don John a step
 *   behind them with his arms folded, as the kit stands him, black against
 *   the open door ("Sir, they are spoken, and these things are true").
 * - Benedick and Beatrice look on from the far side: Benedick, shaved (this
 *   is after Act 3, Scene 2), with a hand lifted open ("This looks not like a
 *   nuptial"); Beatrice with her hands at her breast.
 *
 * SAFEGUARDING. The moment drawn is the accusation, not what follows it:
 * Hero's swoon, and her father's wish that she were dead, are left to the
 * words. Nobody touches her.
 *
 * The people are drawn from ./people.tsx. Nothing is taken from a film or
 * stage production. Seeds: 10101 (the wall and floor), 10102 (the window's
 * light), 10103 (the door's light).
 */

/** The west door and the window, where "Kill Claudio" has them. */
const DOOR = { x0: 648, x1: 752, top: 92, bottom: FLOOR }
const WIN = { x0: 96, x1: 150, top: 30, bottom: 118 }
const LIGHTS: Light[] = [
  { at: [700, 170], reach: 250, power: 0.95 },
  { at: [123, 80], reach: 190, power: 0.8 },
]
/** Where the people stand. */
const FEET = 322

/** Friar Francis, stood aside at the end of the altar, his hands together. */
const FRIAR: Pose = {
  look: 'friar',
  head: { rot: 4 },
  far: {
    pts: [
      [-3, -130],
      [6, -110],
      [16, -116],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [10, -108],
      [18, -112],
    ],
    hand: 'mitt',
  },
}

/** Leonato, both hands lifted open in dismay, on bent arms. */
const LEONATO: Pose = {
  look: 'leonato',
  head: { rot: -4 },
  far: {
    pts: [
      [-3, -132],
      [12, -114],
      [26, -126],
    ],
    hand: 'open',
    deg: -62,
    thumb: -1,
  },
  near: {
    pts: [
      [4, -132],
      [24, -112],
      [40, -120],
    ],
    hand: 'open',
    deg: -56,
    thumb: -1,
  },
}

/** Hero, her head bowed, her hands folded before her. */
const HERO: Pose = {
  look: 'hero',
  head: { rot: 16 },
  far: {
    pts: [
      [-3, -126],
      [4, -104],
      [14, -98],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [2, -126],
      [8, -103],
      [16, -100],
    ],
    hand: 'mitt',
  },
  hem: { front: 28, back: 38 },
}
/** Her rebato: a standing lace collar fanned behind her neck, in her own frame. */
const REBATO =
  'M-2 -134C-6 -142 -8 -150 -8 -158C-14 -156 -20 -150 -22 -142C-20 -137 -12 -133 -2 -134Z'
const REBATO_LACE = 'M-4 -136L-10 -154M-7 -136L-16 -150M-10 -136L-20 -144'

/**
 * Claudio, turned from Hero to walk away to the Prince, his chin up, his
 * near arm thrown back to point at her: "take her back again". (He was first
 * drawn facing her with his hand held out, and at panel size that read as a
 * bridegroom offering his hand, the opposite of the moment.)
 */
const CLAUDIO: Pose = {
  look: 'claudio',
  head: { rot: -6 },
  far: {
    pts: [
      [-3, -130],
      [2, -106],
      [6, -86],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [2, -130],
      [-20, -126],
      [-44, -128],
    ],
    hand: 'point',
    deg: 178,
    thumb: 1,
  },
  legs: {
    far: [
      [-3, -70],
      [4, -36],
      [10, -3],
    ],
    near: [
      [3, -70],
      [-4, -36],
      [-12, -3],
    ],
  },
  cloak: 5,
  sword: true,
}

/** Don Pedro beside him (flipped), standing with him. */
const DON_PEDRO: Pose = {
  look: 'don-pedro',
  head: { rot: -3 },
  far: {
    pts: [
      [-3, -130],
      [-6, -104],
      [-4, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [8, -104],
      [10, -84],
    ],
    hand: 'mitt',
  },
  sword: true,
}

/** Don John a step behind (flipped), his arms folded, as the kit stands him. */
const DON_JOHN: Pose = { look: 'don-john', head: { rot: -2 } }

/** Benedick on the far side (flipped), a hand lifted open: "This looks not like a nuptial." */
const BENEDICK: Pose = {
  look: 'benedick-shaved',
  head: { rot: 2 },
  far: {
    pts: [
      [-3, -130],
      [-6, -104],
      [-4, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [22, -112],
      [34, -118],
    ],
    hand: 'open',
    deg: -40,
    thumb: -1,
  },
  sword: true,
}

/** Beatrice beside him (flipped), her hands at her breast. */
const BEATRICE: Pose = {
  look: 'beatrice',
  head: { rot: 6 },
  far: {
    pts: [
      [-3, -128],
      [6, -110],
      [12, -120],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [2, -128],
      [12, -108],
      [16, -118],
    ],
    hand: 'mitt',
  },
  hem: { front: 26, back: 24 },
}

type Marks = { winRays: string; doorRays: string; street: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const winRays = rays(rng(10102), 123, 74, { from: 44, to: 120, every: 14, width: 2.2 })
  const doorRays = rays(rng(10103), 700, 176, { from: 92, to: 180, every: 12, width: 2.2 })
  // Messina beyond the door, pale in the morning, as "Kill Claudio" has it.
  const street =
    'M648 176H700V150L722 136L752 150V176' +
    gouge(648, 200, 752, 200, 0.8) +
    gouge(648, 226, 752, 226, 1)
  cached = { winRays, doorRays, street }
  return cached
}

function Wedding({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-wd-wall`
  return (
    <g className="lc-push" style={timing({ origin: [430, 190], push: 1.03 })}>
      <defs>
        <clipPath id={clip}>
          <path d={`M0 0H${W}V${FLOOR}H0Z`} />
        </clipPath>
      </defs>
      <Nave seed={10101} lights={LIGHTS} vanish={[420, 110]} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.winRays} fill={PAPER} />
        <path d={m.doorRays} fill={PAPER} />
      </g>

      {/* the altar under its window, and the Friar stood by, against the pillar */}
      <ChurchWindow uid={uid} win={WIN} />
      <Altar x={123} />
      <Pillar x={262} lit={-1} />
      <Person pose={FRIAR} at={[222, 262]} scale={0.98} />

      {/* the west door, open on the morning */}
      <path
        d={arch({ x0: DOOR.x0 - 14, x1: DOOR.x1 + 14, top: DOOR.top - 14, bottom: DOOR.bottom })}
        fill={PAPER}
      />
      <path
        d={arch({ x0: DOOR.x0 - 7, x1: DOOR.x1 + 7, top: DOOR.top - 7, bottom: DOOR.bottom })}
        fill={INK}
      />
      <path d={arch(DOOR)} fill={PAPER} />
      <path d={m.street} fill="none" stroke={INK} strokeWidth={LINE.fine} />
      <path
        d={`M${DOOR.x1 + 16} ${DOOR.top + 44}L${DOOR.x1 + 46} ${DOOR.top + 30}V${FLOOR + 16}L${DOOR.x1 + 16} ${FLOOR + 2}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={
          gouge(DOOR.x1 + 26, DOOR.top + 44, DOOR.x1 + 26, FLOOR + 4, 1.1) +
          gouge(DOOR.x1 + 36, DOOR.top + 40, DOOR.x1 + 36, FLOOR + 8, 1.1)
        }
        fill={PAPER}
      />
      <path
        d={`M${DOOR.x0} ${FLOOR}H${DOOR.x1}L${n(DOOR.x1 - 40)} ${H}H${n(DOOR.x0 - 150)}Z`}
        fill={PAPER}
      />

      {/* the wedding party */}
      <Person pose={DON_JOHN} at={[662, FEET - 8]} scale={0.98} flip />
      <Person pose={LEONATO} at={[292, FEET]} scale={1.04} />
      <Person pose={HERO} at={[384, FEET]} scale={1.04}>
        <path d={REBATO} fill={PAPER} stroke={INK} strokeWidth={1} />
        <path d={REBATO_LACE} fill="none" stroke={INK} strokeWidth={0.8} />
      </Person>
      <Person pose={CLAUDIO} at={[492, FEET]} scale={1.04} />
      <Person pose={DON_PEDRO} at={[584, FEET]} scale={1.04} flip />
      <Person pose={BENEDICK} at={[752, FEET]} scale={1.04} flip />
      <Person pose={BEATRICE} at={[818, FEET]} scale={1.04} flip />
    </g>
  )
}

export const theWedding: LinocutArt = { width: W, height: H, Draw: Wedding }
