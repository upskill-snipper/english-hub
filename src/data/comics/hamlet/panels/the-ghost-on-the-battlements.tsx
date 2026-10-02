import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, gouge, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagstones, nightSky, parapet } from './elsinore'
import { Ghost, Person, type P } from './people'

/**
 * Act 1, Scene 1: "The Ghost on the battlements", the first moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1524, src/data/full-texts/hamlet.ts):
 *
 * - "Elsinore. A platform before the Castle." "'Tis now struck twelve";
 *   "'Tis bitter cold". So it is the walk behind the parapet at night, under
 *   stars, its flagstones pale.
 * - Barnardo was telling of "yond same star that's westward from the pole ...
 *   Where now it burns" when Marcellus broke in: "Peace, break thee off. Look
 *   where it comes again." The star is the spot colour, the portent Horatio
 *   speaks of in this scene ("stars with trains of fire").
 * - "Enter Ghost." BARNARDO: "In the same figure, like the King that's dead",
 *   and "Looks it not like the King? Mark it, Horatio": so Barnardo points at
 *   it. MARCELLUS: "Thou art a scholar; speak to it, Horatio": so his hand is
 *   on Horatio's shoulder, urging him on. HORATIO: "It harrows me with fear
 *   and wonder": he starts back, eyes wide, a hand up before him. Francisco
 *   has gone to bed and is not drawn.
 * - Marcellus asks "Shall I strike at it with my partisan?", so the two
 *   soldiers carry partisans, and wear the steel caps and cloaks the kit gives
 *   the watch (./people.tsx). Horatio is "a scholar" in his cap and gown.
 * - The Ghost as the kit cuts him from 1.1 and 1.2: "that fair and warlike
 *   form In which the majesty of buried Denmark Did sometimes march", "Such
 *   was the very armour he had on", "With martial stalk", "Goes slow and
 *   stately by them ... Within his truncheon's length", "very pale", "fix'd
 *   his eyes upon you". So he walks slowly in from the right in full armour,
 *   in paper, his truncheon held upright before him like a sceptre (held so,
 *   it is a sign of rank and never a threat), his eyes on them, his face
 *   sorrowful,
 *   passing within a truncheon's length of Horatio. He has come out of the
 *   dark doorway of the corner tower behind him.
 *   He shines a little in the dark (the rings of light round him), and that is
 *   all: no wound, no corpse, nothing to frighten a child beyond a pale knight.
 *
 * Seeds: 1101 (sky), 1102 (parapet), 1103 (flagstones), 1104 (the Ghost's light),
 * 1105 (the star), 1106 (the tower).
 */

const W = 860
const H = 340
const TOP = 196
const SILL = 216
const FOOT = 256
const GHOST: P = [458, 328]
const GLOW: P = [452, 188]
const STAR: P = [74, 46]
/** The corner tower at the right, out of whose dark the Ghost has come. */
const TOWER_X = 690

type Marks = {
  towerTexture: string
  towerJoints: string
  sky: string
  stars: string
  wall: string
  texture: string
  joints: string
  floor: string
  aura: string
  star: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The sky lightens a little towards the sea's horizon behind the parapet,
  // and stays dark round the Ghost, so his light shows.
  const nearGhost = (x: number, y: number) =>
    clamp(1 - Math.hypot(x - GLOW[0], (y - GLOW[1]) * 0.8) / 150)
  const { sky, stars } = nightSky(
    rng(1101),
    { x0: 0, x1: W, y0: 4, y1: SILL },
    (x, y) => clamp(0.05 + 0.3 * clamp((y - 30) / 190) - 0.3 * nearGhost(x, y)),
    26,
    (x, y) =>
      Math.hypot(x - STAR[0], y - STAR[1]) < 34 ||
      Math.hypot(x - GLOW[0], y - GLOW[1]) < 150 ||
      x > TOWER_X - 10,
  )
  // The stone is lit by the Ghost: brightest behind him, dark at the left.
  const { wall, texture, joints } = parapet(
    rng(1102),
    W,
    { top: TOP, sill: SILL, foot: FOOT },
    (x, y) => clamp(0.08 + 0.5 * clamp(1 - Math.hypot(x - GLOW[0], y - GLOW[1]) / 300)),
  )
  const floor = flagstones(rng(1103), W, H, FOOT, 470)
  // The tower's stone: dark, with only a little of the Ghost's light on its face.
  const tower = parapet(
    rng(1106),
    W,
    { top: 44, sill: 56, foot: FOOT, start: TOWER_X - 8 },
    (x, y) => clamp(0.06 + 0.3 * clamp(1 - Math.hypot(x - GLOW[0], y - GLOW[1]) / 260)),
  )
  const towerTexture = tower.texture
  const towerJoints = tower.joints
  const a = rng(1104)
  const aura =
    arcDashes(a, GLOW[0], GLOW[1], 112, 0, Math.PI * 2, [8, 22], [6, 16]) +
    arcDashes(a, GLOW[0], GLOW[1], 128, 0, Math.PI * 2, [6, 16], [9, 22]) +
    arcDashes(a, GLOW[0], GLOW[1], 146, 0, Math.PI * 2, [4, 10], [12, 28])
  const star = rays(rng(1105), STAR[0], STAR[1], { from: 9, to: 30, every: 30, width: 1.8 })
  cached = { towerTexture, towerJoints, sky, stars, wall, texture, joints, floor, aura, star }
  return cached
}

/**
 * The corner tower: a square tower of the same stone rising out of the
 * parapet at the right, crenellated, with a dark doorway onto the walk and an
 * arrow-slit above it.
 */
const TOWER = `M${TOWER_X} ${FOOT + 4}L${TOWER_X} 70L${TOWER_X - 8} 70L${TOWER_X - 8} 44L${TOWER_X + 14} 44L${TOWER_X + 14} 56L${TOWER_X + 40} 56L${TOWER_X + 40} 44L${TOWER_X + 70} 44L${TOWER_X + 70} 56L${TOWER_X + 96} 56L${TOWER_X + 96} 44L${TOWER_X + 130} 44L${TOWER_X + 130} 56L${W + 10} 56L${W + 10} ${FOOT + 4}Z`
const DOORWAY = `M${TOWER_X + 44} ${FOOT + 2}L${TOWER_X + 44} 196Q${TOWER_X + 70} 168 ${TOWER_X + 96} 196L${TOWER_X + 96} ${FOOT + 2}Z`
const SLIT = `M${TOWER_X + 66} 132L${TOWER_X + 74} 132L${TOWER_X + 74} 104L${TOWER_X + 66} 104Z`

/** The four points of the burning star, about its centre. */
const STAR_SHAPE = `M${STAR[0]} ${STAR[1] - 13}L${STAR[0] + 3.4} ${STAR[1] - 3.4}L${STAR[0] + 13} ${STAR[1]}L${STAR[0] + 3.4} ${STAR[1] + 3.4}L${STAR[0]} ${STAR[1] + 13}L${STAR[0] - 3.4} ${STAR[1] + 3.4}L${STAR[0] - 13} ${STAR[1]}L${STAR[0] - 3.4} ${STAR[1] - 3.4}Z`

function GhostOnTheBattlements({ uid }: ArtProps) {
  const m = marks()
  const towerClip = `${uid}-tower`
  return (
    <>
      <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
        <path d={m.sky} fill={PAPER} />
        <path d={m.stars} fill={PAPER} />
        {/* "yond same star that's westward from the pole ... Where now it burns" */}
        <path d={m.star} fill={PAPER} />
        <path
          className="lc-glow"
          style={timing({ dur: 2.4 })}
          d={STAR_SHAPE}
          fill={RED}
          stroke={INK}
          strokeWidth={1}
        />

        {/* the light about the Ghost, behind the parapet */}
        <g className="lc-fade-in" style={timing({ delay: 0.5, dur: 1.8 })}>
          <path d={m.aura} fill="none" stroke={PAPER} strokeWidth={1.5} strokeLinecap="round" />
        </g>

        {/* the parapet */}
        <path d={m.wall} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.texture} fill={PAPER} />
        <path d={m.joints} fill={PAPER} />

        {/* the corner tower, and the dark doorway the Ghost has come out of */}
        <defs>
          <clipPath id={towerClip}>
            <path d={TOWER} />
          </clipPath>
        </defs>
        <path d={TOWER} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <g clipPath={`url(#${towerClip})`}>
          <path d={m.towerTexture} fill={PAPER} />
          <path d={m.towerJoints} fill={PAPER} />
        </g>
        <path d={DOORWAY} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} />
        <path d={SLIT} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />

        {/* the walk */}
        <rect x={0} y={FOOT} width={W} height={H - FOOT} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={`M-10 ${FOOT}H${W + 10}`} stroke={INK} strokeWidth={LINE.bold} />

        {/* Barnardo, pointing: "Looks it not like the King? Mark it, Horatio." */}
        <Person
          at={[150, 318]}
          scale={1.1}
          pose={{
            look: 'barnardo',
            head: { rot: -2 },
            far: {
              pts: [
                [-4, -130],
                [-6, -106],
                [4, -96],
              ],
              hand: 'grip',
              deg: -90,
            },
            partisan: { foot: [8, -2], top: [8, -214], hand: 'far' },
            near: {
              pts: [
                [5, -128],
                [26, -124],
                [46, -128],
              ],
              hand: 'point',
              deg: -6,
            },
            legs: {
              far: [
                [-3, -70],
                [-8, -36],
                [-12, -3],
              ],
              near: [
                [3, -70],
                [9, -36],
                [12, -3],
              ],
            },
          }}
        />

        {/* Marcellus: "Thou art a scholar; speak to it, Horatio." */}
        <Person
          at={[232, 320]}
          scale={1.1}
          pose={{
            look: 'marcellus',
            body: { neck: [4, -137], hip: [0, -70] },
            head: { rot: 6 },
            far: {
              pts: [
                [-2, -129],
                [-4, -106],
                [6, -98],
              ],
              hand: 'grip',
              deg: -90,
            },
            partisan: { foot: [10, -2], top: [10, -214], hand: 'far' },
            near: {
              pts: [
                [8, -127],
                [30, -118],
                [48, -124],
              ],
              hand: 'open',
              deg: 8,
              size: 14,
            },
            legs: {
              far: [
                [-3, -70],
                [-10, -36],
                [-15, -3],
              ],
              near: [
                [3, -70],
                [10, -37],
                [13, -3],
              ],
            },
          }}
        />

        {/* Horatio: "It harrows me with fear and wonder." */}
        <Person
          at={[306, 320]}
          scale={1.1}
          pose={{
            look: 'horatio',
            body: { neck: [-7, -137], hip: [-1, -70] },
            head: { rot: -8 },
            eye: 'wide',
            far: {
              pts: [
                [-11, -129],
                [-20, -108],
                [-24, -88],
              ],
              hand: 'open',
              deg: 104,
              size: 14,
            },
            near: {
              pts: [
                [-2, -127],
                [12, -112],
                [24, -122],
              ],
              hand: 'open',
              deg: -58,
              thumb: -1,
            },
            legs: {
              far: [
                [-4, -70],
                [-13, -36],
                [-20, -3],
              ],
              near: [
                [1, -70],
                [8, -36],
                [12, -3],
              ],
            },
          }}
        />

        {/* the Ghost */}
        <g className="lc-fade-in" style={timing({ delay: 0.5, dur: 1.8 })}>
          <Ghost
            at={GHOST}
            scale={1.15}
            flip
            pose={{
              head: { rot: -3 },
              legs: {
                far: [
                  [-3, -70],
                  [-12, -36],
                  [-20, -4],
                ],
                near: [
                  [3, -70],
                  [12, -37],
                  [17, -4],
                ],
              },
              far: {
                pts: [
                  [-4, -130],
                  [-10, -106],
                  [-12, -84],
                ],
                hand: 'mitt',
                deg: 96,
              },
              near: {
                pts: [
                  [5, -128],
                  [9, -104],
                  [19, -96],
                ],
                hand: 'grip',
                deg: -84,
              },
              truncheon: { from: [21, -74], to: [26, -120] },
            }}
          />
        </g>
      </g>
    </>
  )
}

export const ghostOnTheBattlements: LinocutArt = {
  width: W,
  height: H,
  Draw: GhostOnTheBattlements,
}
