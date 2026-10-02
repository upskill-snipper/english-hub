import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  gouge,
  gougeField,
  rays,
  rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagstones, nightSky, parapet } from './elsinore'
import { Ghost, Person, type P } from './people'

/**
 * Act 1, Scene 5: "The Ghost's command", the fifth moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1524, src/data/full-texts/hamlet.ts):
 *
 * - "A more remote part of the Castle." HAMLET: "Whither wilt thou lead me?
 *   Speak, I'll go no further." So it is a corner of the walls away from the
 *   platform: the foot of a tower on the left, a low wall on the edge of the
 *   cliff, and the sea beyond it.
 * - The night is nearly over: "methinks I scent the morning air; Brief let me
 *   be", "The glow-worm shows the matin to be near, And 'gins to pale his
 *   uneffectual fire." So the first of the dawn shows red on the sea's rim on
 *   the right, the spot colour, the light the Ghost must leave before; the sky
 *   is still dark above. (A bank of morning mist was tried over the ground,
 *   and it cut the Ghost off at the knee like a box he stood in.)
 * - GHOST: "Adieu, adieu, adieu. Remember me." He is the kit's armoured Ghost
 *   (./people.tsx), in paper, his face sorrowful, and he holds his open hand
 *   out over his son, low, palm down, as he charges him: a hand held out, not
 *   raised. Nothing of the murder he has told is drawn: the poison, the vial
 *   and the orchard stay in the words.
 * - HAMLET: "O all you host of heaven! O earth! What else? ... Hold, my
 *   heart; And you, my sinews, grow not instant old, But bear me stiffly up."
 *   So he has sunk to one knee before his father, in his black cloak, a hand
 *   on his heart and the other reaching out to him, his face turned up.
 *   Horatio and Marcellus come in only after the Ghost has gone, so they are
 *   not drawn.
 *
 * Seeds: 1501 (sky), 1502 (low wall), 1503 (ground), 1504 (tower), 1505
 * (sea), 1507 (the Ghost's light), 1508 (the dawn).
 */

const W = 860
const H = 340
const HORIZON = 204
const WALL_TOP = 244
const FOOT = 262
const TOWER_X = 128
const DAWN: P = [744, HORIZON]
const GHOST: P = [344, 330]
const GLOW: P = [348, 196]
const HAMLET: P = [560, 330]

type Marks = {
  sky: string
  stars: string
  sea: string
  wall: string
  texture: string
  joints: string
  floor: string
  tower: string
  aura: string
  dawn: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Dark overhead and over the tower; paling towards the dawn on the right.
  const skyLight = (x: number, y: number) =>
    clamp(
      0.04 +
        0.8 * clamp(1 - Math.hypot((x - DAWN[0]) * 0.6, (y - DAWN[1]) * 1.4) / 360) -
        0.25 * clamp(1 - Math.hypot(x - GLOW[0], y - GLOW[1]) / 120),
    )
  const { sky, stars } = nightSky(
    rng(1501),
    { x0: 0, x1: W, y0: 4, y1: HORIZON },
    skyLight,
    14,
    (x, y) =>
      x < TOWER_X + 10 ||
      x > 560 ||
      Math.hypot(x - GLOW[0], y - GLOW[1]) < 130 ||
      (x < 360 && y < 120),
  )
  // The sea under the dawn, and the path of the first light across it.
  const s = rng(1505)
  let sea = gougeField(
    s,
    { x0: TOWER_X, x1: W, y0: HORIZON + 4, y1: WALL_TOP },
    (x) => clamp(0.12 + 0.45 * clamp(1 - Math.abs(x - DAWN[0]) / 240)),
    { spacing: 4.4, len: [20, 70], gap: [6, 24], max: 1.6 },
  )
  for (let y = HORIZON + 5, k = 0; y < WALL_TOP - 2; y += 4.6, k++) {
    const half = 8 + k * 3.4
    sea += gouge(
      DAWN[0] - half + between(s, -3, 3),
      y,
      DAWN[0] + half + between(s, -3, 3),
      y + 0.4,
      1.3 + k * 0.12,
    )
  }
  // A low wall on the cliff's edge: a parapet with no crenels.
  const { wall, texture, joints } = parapet(
    rng(1502),
    W,
    { top: WALL_TOP, sill: WALL_TOP, foot: FOOT, merlon: 2000, gap: 0, start: TOWER_X - 4 },
    (x, y) => clamp(0.08 + 0.4 * clamp(1 - Math.hypot(x - DAWN[0], y - 230) / 300)),
  )
  const floor = flagstones(rng(1503), W, H, FOOT, 470)
  const tower = gougeField(
    rng(1504),
    { x0: 0, x1: TOWER_X, y0: 4, y1: FOOT },
    (x, y) => clamp(0.06 + 0.4 * clamp(1 - Math.hypot(x - GLOW[0], y - GLOW[1]) / 300)),
    { spacing: 5.6, len: [10, 40], gap: [6, 16], max: 2 },
  )
  const a = rng(1507)
  const aura =
    arcDashes(a, GLOW[0], GLOW[1], 104, 0, Math.PI * 2, [8, 20], [6, 16]) +
    arcDashes(a, GLOW[0], GLOW[1], 120, 0, Math.PI * 2, [5, 14], [9, 22])
  const dawn = rays(rng(1508), DAWN[0], DAWN[1], { from: 22, to: 120, every: 6, width: 2.6 })
  cached = { sky, stars, sea, wall, texture, joints, floor, tower, aura, dawn }
  return cached
}

/** The foot of the tower on the left: its dark stone, and a narrow door. */
const TOWER = `M-10 ${FOOT + 2}L-10 -10L${TOWER_X} -10L${TOWER_X} ${FOOT + 2}Z`
const DOOR = `M40 ${FOOT + 2}L40 200Q64 176 88 200L88 ${FOOT + 2}Z`

function TheGhostsCommand({ uid }: ArtProps) {
  const m = marks()
  const skyClip = `${uid}-sky`
  const towerClip = `${uid}-tower`
  return (
    <>
      <defs>
        <clipPath id={skyClip}>
          <rect x={0} y={0} width={W} height={HORIZON} />
        </clipPath>
        <clipPath id={towerClip}>
          <path d={TOWER} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [450, 220], push: 1.03 })}>
        <path d={m.sky} fill={PAPER} />
        <path d={m.stars} fill={PAPER} />

        {/* "The glow-worm shows the matin to be near": the dawn on the sea's rim */}
        <g clipPath={`url(#${skyClip})`}>
          <path
            className="lc-fade-in"
            style={timing({ delay: 0.3, dur: 2.4 })}
            d={m.dawn}
            fill={PAPER}
          />
          <path
            className="lc-glow"
            style={timing({ dur: 2.6 })}
            d={`M${DAWN[0] - 20} ${HORIZON + 1}A20 20 0 0 1 ${DAWN[0] + 20} ${HORIZON + 1}Z`}
            fill={RED}
            stroke={INK}
            strokeWidth={1}
          />
        </g>
        <rect x={0} y={HORIZON} width={W} height={WALL_TOP - HORIZON} fill={INK} />
        <path d={m.sea} fill={PAPER} />
        <path d={`M0 ${HORIZON}H${W}`} stroke={PAPER} strokeWidth={LINE.fine} />

        {/* the light about the Ghost */}
        <g className="lc-fade-in" style={timing({ delay: 0.3, dur: 1.6 })}>
          <path d={m.aura} fill="none" stroke={PAPER} strokeWidth={1.5} strokeLinecap="round" />
        </g>

        {/* the low wall on the cliff's edge, and the foot of the tower */}
        <path d={m.wall} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.texture} fill={PAPER} />
        <path d={m.joints} fill={PAPER} />
        <path d={TOWER} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <g clipPath={`url(#${towerClip})`}>
          <path d={m.tower} fill={PAPER} />
        </g>
        <path d={DOOR} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} />

        {/* the ground */}
        <rect x={0} y={FOOT} width={W} height={H - FOOT} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={`M-10 ${FOOT}H${W + 10}`} stroke={INK} strokeWidth={LINE.bold} />

        {/* the Ghost: "Adieu, adieu, adieu. Remember me." */}
        <g className="lc-fade-in" style={timing({ delay: 0.3, dur: 1.6 })}>
          <Ghost
            at={GHOST}
            scale={1.16}
            pose={{
              head: { rot: 10 },
              far: {
                pts: [
                  [-4, -130],
                  [-8, -106],
                  [-4, -84],
                ],
                hand: 'mitt',
                deg: 86,
              },
              near: {
                pts: [
                  [5, -128],
                  [26, -114],
                  [48, -106],
                ],
                hand: 'open',
                deg: 14,
                thumb: -1,
              },
              legs: {
                far: [
                  [-3, -70],
                  [-10, -36],
                  [-14, -4],
                ],
                near: [
                  [3, -70],
                  [8, -37],
                  [10, -4],
                ],
              },
            }}
          />
        </g>

        {/* Hamlet on one knee: "Hold, my heart" */}
        <Person
          at={HAMLET}
          scale={1.16}
          flip
          pose={{
            look: 'hamlet',
            body: { neck: [6, -112], hip: [0, -46] },
            head: { rot: -16 },
            brow: 'sorrow',
            cloak: 4,
            // The far hand reaching towards his father, its fingers forward:
            // turned up, an open palm facing the Ghost read as warding him off.
            // The arm is bent, the elbow low and the hand no higher than his
            // shoulder: drawn straight and rising, with the open hand at its
            // end, it read at phone width as a raised salute (reviewed
            // 2 October 2026).
            far: {
              pts: [
                [2, -106],
                [18, -92],
                [38, -100],
              ],
              hand: 'open',
              deg: -22,
              thumb: -1,
            },
            near: {
              pts: [
                [10, -104],
                [24, -86],
                [14, -94],
              ],
              hand: 'open',
              deg: 176,
              size: 14,
              thumb: -1,
            },
            legs: {
              far: [
                [-2, -46],
                [26, -50],
                [28, -3],
              ],
              near: [
                [2, -46],
                [6, -9],
                [-26, -4],
              ],
            },
          }}
        />
      </g>
    </>
  )
}

export const theGhostsCommand: LinocutArt = { width: W, height: H, Draw: TheGhostsCommand }
