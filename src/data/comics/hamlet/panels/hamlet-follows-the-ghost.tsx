import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, gougeField, rng, wisps } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagstones, nightSky, parapet } from './elsinore'
import { Ghost, Person, type P } from './people'

/**
 * Act 1, Scene 4: "Hamlet follows the Ghost", the fourth moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1524, src/data/full-texts/hamlet.ts):
 *
 * - "The platform." "The air bites shrewdly; it is very cold." It is past
 *   midnight ("it is struck"), and the Ghost revisits "thus the glimpses of
 *   the moon": so a moon shows between clouds over the parapet, the same
 *   parapet and flagstones as in "The Ghost on the battlements"
 *   (./elsinore.tsx).
 * - "[A flourish of trumpets, and ordnance shot off within.]" HAMLET: "The
 *   King doth wake tonight and takes his rouse, Keeps wassail ... And as he
 *   drains his draughts of Rhenish down, The kettle-drum and trumpet thus bray
 *   out The triumph of his pledge." So the castle stands dark on the left
 *   with the windows of its hall lit for the feast, in the spot colour: the
 *   revel the scene's quotation judges, "Something is rotten in the state of
 *   Denmark."
 * - "[Ghost beckons Hamlet.]" MARCELLUS: "Look with what courteous action It
 *   waves you to a more removed ground." So the Ghost, the kit's armoured
 *   figure in paper (./people.tsx), stands further along the walk and holds
 *   out his hand, low and open, palm up, to call Hamlet to him: a beckoning
 *   hand, never a raised one.
 * - HORATIO: "Be rul'd; you shall not go." HAMLET: "Hold off your hands ...
 *   Unhand me, gentlemen. [Breaking free from them.] ... Go on, I'll follow
 *   thee." So Hamlet, in his black cloak, strides away from his friends after
 *   the Ghost, one hand thrown back out of their grasp and the other reaching
 *   ahead, while Horatio and Marcellus reach after him. No sword is drawn:
 *   his threat to "make a ghost of him that lets me" stays in the words.
 *
 * Seeds: 1401 (sky), 1402 (parapet), 1403 (flagstones), 1404 (castle),
 * 1405 and 1406 (cloud), 1407 (the Ghost's light).
 */

const W = 860
const H = 340
const TOP = 196
const SILL = 216
const FOOT = 256
const MOON: P = [770, 58]
const GHOST: P = [686, 328]
const GLOW: P = [680, 190]
/** The castle's dark mass on the left, and the windows of its hall. */
const KEEP_X = 176

type Marks = {
  sky: string
  stars: string
  wall: string
  texture: string
  joints: string
  floor: string
  keep: string
  cloudOver: string
  cloudNear: string
  aura: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const { sky, stars } = nightSky(
    rng(1401),
    { x0: 0, x1: W, y0: 4, y1: SILL },
    (x, y) =>
      clamp(
        0.06 +
          0.22 * clamp((y - 40) / 180) +
          0.5 * clamp(1 - Math.hypot(x - MOON[0], y - MOON[1]) / 150) -
          0.25 * clamp(1 - Math.hypot(x - GLOW[0], y - GLOW[1]) / 120),
      ),
    20,
    (x, y) =>
      x < KEEP_X + 10 ||
      Math.hypot(x - MOON[0], y - MOON[1]) < 70 ||
      Math.hypot(x - GLOW[0], y - GLOW[1]) < 130,
  )
  const { wall, texture, joints } = parapet(
    rng(1402),
    W,
    { top: TOP, sill: SILL, foot: FOOT, start: KEEP_X - 4 },
    (x, y) =>
      clamp(
        0.06 +
          0.3 * clamp(1 - Math.hypot(x - GLOW[0], y - GLOW[1]) / 260) +
          0.18 * clamp(1 - Math.hypot(x - MOON[0], y - 140) / 300),
      ),
  )
  const floor = flagstones(rng(1403), W, H, FOOT, 460)
  // The keep's stone, lit only a little by its own windows.
  const keep = gougeField(
    rng(1404),
    { x0: 0, x1: KEEP_X, y0: 30, y1: FOOT },
    (x, y) => clamp(0.05 + 0.4 * clamp(1 - Math.hypot(x - 92, y - 170) / 120)),
    { spacing: 5.6, len: [10, 40], gap: [6, 16], max: 2 },
  )
  // Cloud drifting over the moon: ink across its face, paper in the dark round it.
  const cloudOver = wisps(rng(1405), 4, { x0: 730, x1: 800, y0: 50, y1: 74 }, [3, 5])
  const cloudNear = wisps(rng(1406), 5, { x0: 600, x1: 850, y0: 30, y1: 96 }, [2.4, 4.6])
  const a = rng(1407)
  const aura =
    arcDashes(a, GLOW[0], GLOW[1], 100, 0, Math.PI * 2, [8, 20], [6, 16]) +
    arcDashes(a, GLOW[0], GLOW[1], 116, 0, Math.PI * 2, [5, 14], [9, 22])
  cached = { sky, stars, wall, texture, joints, floor, keep, cloudOver, cloudNear, aura }
  return cached
}

/** The keep: a tall square tower on the left, crenellated, the parapet running from it. */
const KEEP = `M-10 ${FOOT + 2}L-10 30L4 30L4 18L28 18L28 30L52 30L52 18L78 18L78 30L102 30L102 18L128 18L128 30L152 30L152 18L${KEEP_X} 18L${KEEP_X} ${FOOT + 2}Z`
/** The hall's three tall windows, lit for the King's feast. */
const HALL_WINDOWS = [24, 74, 124]
  .map((x) => `M${x} 214L${x} 150Q${x + 14} 132 ${x + 28} 150L${x + 28} 214Z`)
  .join('')
const MULLIONS = [24, 74, 124].map((x) => `M${x + 14} 214V146M${x} 182H${x + 28}`).join('')

function HamletFollowsTheGhost({ uid }: ArtProps) {
  const m = marks()
  const keepClip = `${uid}-keep`
  const moonClip = `${uid}-moon`
  return (
    <>
      <defs>
        <clipPath id={keepClip}>
          <path d={KEEP} />
        </clipPath>
        <clipPath id={moonClip}>
          <circle cx={MOON[0]} cy={MOON[1]} r={25} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
        <path d={m.sky} fill={PAPER} />
        <path d={m.stars} fill={PAPER} />

        {/* "the glimpses of the moon", between the clouds */}
        <circle
          cx={MOON[0]}
          cy={MOON[1]}
          r={26}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <g className="lc-drift-r">
          <g clipPath={`url(#${moonClip})`}>
            <path d={m.cloudOver} fill={INK} />
          </g>
          <path d={m.cloudNear} fill={PAPER} />
        </g>

        {/* the light about the Ghost, behind the parapet */}
        <g className="lc-fade-in" style={timing({ delay: 0.4, dur: 1.6 })}>
          <path d={m.aura} fill="none" stroke={PAPER} strokeWidth={1.5} strokeLinecap="round" />
        </g>

        <path d={m.wall} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.texture} fill={PAPER} />
        <path d={m.joints} fill={PAPER} />

        {/* the castle, the King's wassail in its hall, and the smoke of the guns */}
        <path d={KEEP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <g clipPath={`url(#${keepClip})`}>
          <path d={m.keep} fill={PAPER} />
        </g>
        <path
          className="lc-glow"
          style={timing({ dur: 2 })}
          d={HALL_WINDOWS}
          fill={RED}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={MULLIONS} stroke={INK} strokeWidth={3} />

        {/* the walk */}
        <rect x={0} y={FOOT} width={W} height={H - FOOT} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={`M-10 ${FOOT}H${W + 10}`} stroke={INK} strokeWidth={LINE.bold} />

        {/* Marcellus: "You shall not go, my lord." */}
        <Person
          at={[226, 324]}
          scale={1.08}
          pose={{
            look: 'marcellus',
            body: { neck: [8, -136], hip: [0, -70] },
            head: { rot: 10 },
            mouth: 'open',
            far: {
              pts: [
                [-2, -129],
                [-4, -106],
                [6, -98],
              ],
              hand: 'grip',
              deg: -90,
            },
            partisan: { foot: [12, -2], top: [10, -214], hand: 'far' },
            near: {
              pts: [
                [10, -127],
                [32, -116],
                [54, -118],
              ],
              hand: 'open',
              deg: -2,
              thumb: -1,
            },
            legs: {
              far: [
                [-3, -70],
                [-12, -36],
                [-18, -3],
              ],
              near: [
                [3, -70],
                [14, -37],
                [18, -3],
              ],
            },
          }}
        />

        {/* Horatio: "Be rul'd; you shall not go." */}
        <Person
          at={[300, 326]}
          scale={1.08}
          pose={{
            look: 'horatio',
            body: { neck: [12, -134], hip: [0, -70] },
            head: { rot: 12 },
            far: {
              pts: [
                [6, -127],
                [28, -118],
                [48, -124],
              ],
              hand: 'open',
              deg: -10,
              thumb: -1,
            },
            near: {
              pts: [
                [14, -125],
                [36, -110],
                [60, -112],
              ],
              hand: 'open',
              deg: 4,
              thumb: -1,
            },
            legs: {
              far: [
                [-3, -70],
                [-14, -36],
                [-22, -3],
              ],
              near: [
                [3, -70],
                [16, -37],
                [22, -3],
              ],
            },
          }}
        />

        {/* Hamlet breaking free: "Unhand me, gentlemen ... Go on, I'll follow thee." */}
        <Person
          at={[452, 328]}
          scale={1.14}
          pose={{
            look: 'hamlet',
            body: { neck: [10, -134], hip: [0, -70] },
            head: { rot: 4 },
            mouth: 'open',
            cloak: 14,
            // The far arm flung down and back, out of their grasp. (Held out
            // level behind him, its open hand met Horatio's and read as
            // reaching back to take it.)
            far: {
              pts: [
                [4, -128],
                [-14, -108],
                [-32, -92],
              ],
              hand: 'open',
              deg: 146,
              thumb: 1,
            },
            near: {
              pts: [
                [12, -126],
                [32, -116],
                [54, -122],
              ],
              hand: 'open',
              deg: -6,
              thumb: -1,
            },
            legs: {
              far: [
                [-3, -70],
                [-18, -38],
                [-30, -3],
              ],
              near: [
                [3, -70],
                [20, -40],
                [26, -3],
              ],
            },
          }}
        />

        {/* the Ghost, beckoning: "It waves you to a more removed ground" */}
        <g className="lc-fade-in" style={timing({ delay: 0.4, dur: 1.6 })}>
          <Ghost
            at={GHOST}
            scale={1.06}
            flip
            pose={{
              head: { rot: 2 },
              far: {
                pts: [
                  [-4, -130],
                  [-10, -106],
                  [-10, -84],
                ],
                hand: 'mitt',
                deg: 92,
              },
              near: {
                pts: [
                  [5, -128],
                  [18, -108],
                  [40, -108],
                ],
                hand: 'open',
                deg: -18,
                thumb: -1,
                spread: 14,
              },
              legs: {
                far: [
                  [-3, -70],
                  [-8, -36],
                  [-12, -4],
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
      </g>
    </>
  )
}

export const hamletFollowsTheGhost: LinocutArt = {
  width: W,
  height: H,
  Draw: HamletFollowsTheGhost,
}
