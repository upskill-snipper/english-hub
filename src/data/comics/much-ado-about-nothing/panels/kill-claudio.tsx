import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { gouge, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Altar,
  arch,
  ChurchWindow,
  FLOOR,
  H,
  Nave,
  NAVE_VIEW,
  Pillar,
  W,
  type Light,
} from './church'
import { Person, type Pose } from './people'

/**
 * Act 4, Scene 1, after the failed wedding: "“Kill Claudio”", the eleventh
 * moment in the guide's timeline. Every detail is from the scene, as the held
 * edition prints it (src/data/full-texts/much-ado-about-nothing.ts):
 *
 * - "The Inside of a Church." The wedding was that morning (Hero dresses for
 *   it at "almost five o'clock", 3.4), so it is day, and the church is the
 *   one "At the tomb" is set in (./church.tsx). The altar on the left, with
 *   its white cloth, its cross and its two candles, is the altar the wedding
 *   was broken off at, and the candles' flames are the spot colour: the
 *   wedding that did not happen, still lit.
 * - "Exeunt Don Pedro, Don John and Claudio", then "Exeunt Friar, Hero and
 *   Leonato." So nobody is left but Benedick and Beatrice, and the west door
 *   the others went out by stands open on the day.
 * - BENEDICK: "Come, bid me do anything for thee." BEATRICE: "Kill Claudio."
 *   BENEDICK: "Ha! not for the wide world." So he recoils from her, leaning
 *   back, both hands up and open before him, as a man refuses. His hands are
 *   raised on bent arms with the fingers apart, never flat on a straight arm.
 *   He is a soldier ("By my sword, Beatrice, thou lovest me"), so he wears
 *   his rapier, and he is shaved: this is after Act 3, Scene 2, where his
 *   friends find "the old ornament of his cheek" gone (./people.tsx).
 * - Beatrice faces him with her chin up, and points back past her shoulder
 *   at the open door Claudio went out by. The play gives no gesture; the
 *   point is how the picture says "Claudio", the man who is not there.
 * - NO RED ON HER FACE. A flush of anger on her cheek was tried (she has
 *   "wept all this while" and cries "O God, that I were a man!"), and on her
 *   ink face at phone width it read as a mark or a bruise beside the eye. In
 *   a panel about a demand for a killing, nothing red goes near a face.
 *
 * The people are drawn from ./people.tsx, as in every panel of this play.
 * Nothing is taken from a film or stage production. Seeds: 11101 (the wall and
 * floor), 11102 (the window's light), 11103 (the door's light).
 */

/** The west door's opening, and the light on the wall round it and over the altar. */
const { door: DOOR, win: WIN } = NAVE_VIEW
const LIGHTS: Light[] = [
  { at: [700, 170], reach: 250, power: 0.95 },
  { at: [123, 80], reach: 190, power: 0.8 },
  { at: [450, 40], reach: 280, power: 0.62 },
]

/**
 * Benedick, recoiling: leaning back, his near hand up and open towards her,
 * the fingers apart, as a man refuses; the far arm hangs at his side.
 */
const BENEDICK: Pose = {
  look: 'benedick-shaved',
  head: { at: [1, -160], rot: -10 },
  far: {
    pts: [
      [-3, -132],
      [-9, -106],
      [-8, -82],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -132],
      [28, -112],
      [40, -130],
    ],
    hand: 'open',
    deg: -80,
    thumb: -1,
    size: 16,
    spread: 13,
  },
  legs: {
    far: [
      [-3, -70],
      [-12, -36],
      [-22, -3],
    ],
    near: [
      [3, -70],
      [9, -36],
      [13, -3],
    ],
  },
  cloak: 5,
  sword: true,
}

/**
 * Beatrice, turned to him (the figure is flipped to face left), her near arm
 * thrown back past her shoulder to point at the open door behind her.
 */
const BEATRICE: Pose = {
  look: 'beatrice',
  head: { at: [4, -154], rot: -7 },
  far: {
    pts: [
      [-3, -128],
      [4, -104],
      [12, -110],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [2, -128],
      [-22, -130],
      [-48, -134],
    ],
    hand: 'point',
    deg: 180,
    thumb: 1,
  },
  hem: { front: 26, back: 40 },
}

type Marks = { winRays: string; doorRays: string; street: string; shadows: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const winRays = rays(rng(11102), 123, 74, { from: 44, to: 120, every: 10, width: 2.2 })
  const doorRays = rays(rng(11103), 700, 176, { from: 92, to: 180, every: 7, width: 2.2 })
  // Messina beyond the door, pale in the sun: a house across the way, its
  // door and window, the edge of its roof.
  const street =
    'M648 180H696V154L722 138L752 154V180' +
    gouge(648, 204, 752, 204, 0.8) +
    gouge(648, 228, 752, 228, 1)
  // Shadows on the flags, cut as rows of ink gouges: a short pool under
  // Benedick, and Beatrice's thrown towards him by the light behind her.
  let shadows = ''
  for (let y = 312; y < 324; y += 2.8) {
    const w = 1 - Math.abs(y - 318) / 8
    shadows += gouge(302 - w * 10, y, 368 + w * 10, y + 0.6, 1.1 + w * 2)
  }
  for (let y = 309; y < 328; y += 2.8) {
    const t = (y - 309) / 19
    shadows += gouge(594 - t * 26, y, 480 - t * 90, y + 1, 1.2 + (1 - Math.abs(t - 0.5) * 2) * 1.8)
  }
  cached = { winRays, doorRays, street, shadows }
  return cached
}

function KillClaudio({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-kc-wall`
  return (
    <g className="lc-push" style={timing({ origin: [470, 190], push: 1.03 })}>
      <defs>
        <clipPath id={clip}>
          <path d={`M0 0H${W}V${FLOOR}H0Z`} />
        </clipPath>
      </defs>
      <Nave seed={11101} lights={LIGHTS} vanish={[420, 110]} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.winRays} fill={PAPER} />
        <path d={m.doorRays} fill={PAPER} />
      </g>

      {/* the altar the wedding was broken off at, under its window */}
      <ChurchWindow uid={uid} win={WIN} />
      <Altar x={NAVE_VIEW.altar} />
      {NAVE_VIEW.pillars.map((x) => (
        <Pillar key={x} x={x} lit={x < 450 ? -1 : 1} />
      ))}

      {/* the west door, open on the day outside */}
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
      {/* its leaf, swung in against the wall */}
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
      {/* the daylight falling in across the flags */}
      <path
        d={`M${DOOR.x0} ${FLOOR}H${DOOR.x1}L${n(DOOR.x1 - 40)} ${H}H${n(DOOR.x0 - 150)}Z`}
        fill={PAPER}
      />

      {/* their shadows: Beatrice's thrown long across the flags by the door's light */}
      <path d={m.shadows} fill={INK} />

      <Person pose={BENEDICK} at={[340, 316]} scale={1.28} />
      <Person pose={BEATRICE} at={[560, 316]} scale={1.28} flip />
    </g>
  )
}

export const killClaudio: LinocutArt = { width: W, height: H, Draw: KillClaudio }
