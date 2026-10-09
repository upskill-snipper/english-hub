import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, seatedBody, seatedLegs } from './people'

/**
 * Chapter I: "The green light", the second moment in the guide's timeline.
 * Every detail is from the close of the chapter in the held text (the 1925
 * first edition, src/data/full-texts/the-great-gatsby.ts):
 *
 * - "when I reached my estate at West Egg I ran the car under its shed and
 *   sat for a while on an abandoned grass roller in the yard." So Nick sits
 *   on the drum of a roller in his own dark yard, at the left, by the corner
 *   of his small house ("My own house was an eyesore, but it was a small
 *   eyesore"), turned to watch.
 * - "The wind had blown off, leaving a loud, bright night, with wings beating
 *   in the trees ... The silhouette of a moving cat wavered across the
 *   moonlight". So there is a moon, the lawn is cut pale with its light, the
 *   trees are black, and a cat crosses the moonlit grass.
 * - "fifty feet away a figure had emerged from the shadow of my neighbor's
 *   mansion and was standing ... regarding the silver pepper of the stars."
 *   The mansion is the one the chapter describes: "a factual imitation of
 *   some Hôtel de Ville in Normandy, with a tower on one side, spanking new
 *   under a thin beard of raw ivy". So it rises behind him, its face pale in
 *   the moonlight, its tower on one side, the ivy dark along its foot, and
 *   the sky is peppered with stars.
 * - "he stretched out his arms toward the dark water in a curious way, and,
 *   far as I was from him, I could have sworn he was trembling." So Gatsby,
 *   a dark figure on the pale lawn, reaches out both arms over the water,
 *   his hands open with the fingers apart, a little lower than his shoulders
 *   (two arms reaching, never one arm raised: a raised straight arm with a
 *   flat hand reads as a salute), and three short cuts shake beside each
 *   hand.
 * - "Involuntarily I glanced seaward—and distinguished nothing except a
 *   single green light, minute and far away, that might have been the end of
 *   a dock." So the water is black, the far shore a low black line far out
 *   across it, and on it one small light; what it stands at the end of is
 *   too far off to make out, for the reader as for Nick. The far shore
 *   begins well clear of Gatsby's hands. (It first ran in from the edge of
 *   the lawn and met his fingers, and at phone width it read as a beam or a
 *   line held out from his hands to the light, 9 October 2026.)
 *
 * THE GREEN LIGHT IS CUT IN PAPER, NEVER PRINTED RED. The print's one spot
 * colour is red; the novel's light is green, and a red light at the end of a
 * dock would say "stop" where Fitzgerald's says "go", and is a different
 * thing. So the light is the one bright point on the far shore: a small disc
 * cut clean out of the block, with its rays, and its colour is left to the
 * words of the quotation. Nothing else in the scene is red, so this print
 * has no red at all.
 *
 * Gatsby's clothes that night are not described: he is in a dark suit. His
 * hair has the kit's crisp barbered hairline (./people.tsx). Nothing is taken
 * from a film, television or stage production. Seeds: 1201 (the stars), 1202
 * (the mansion's moonlit face), 1203 (the lawn), 1204 (the water), 1205 (the
 * light's rays), 1206 (the trees).
 */

const W = 860
const H = 340
/** The far shore across the bay, and the green light on it. */
const HORIZON = 182
const LIGHT: [number, number] = [798, 181]
/** The moon, high over Nick's yard. */
const MOON: [number, number, number] = [74, 52, 15]
/** The mansion's walls: foot, top of the walls, left (tower side) and right ends. */
const MAN = { foot: 210, wall: 104, x0: 206, x1: 494 }
const TOWER = { x0: 166, x1: 210, top: 64, tip: 22 }

type Marks = {
  stars: string
  facade: string
  lawn: string
  water: string
  light: string
  trees: string
  ivy: string
}

/** The lawn's edge at the water: it runs down from the mansion to the beach. */
const shore = (y: number) => 572 + (y - 200) * 0.95

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // "the silver pepper of the stars"
  const rs = rng(1201)
  let stars = ''
  for (let i = 0; i < 90; i++) {
    const x = between(rs, 8, W - 8)
    const y = between(rs, 8, HORIZON - 10)
    if (Math.hypot(x - MOON[0], y - MOON[1]) < MOON[2] + 10) continue
    const rad = between(rs, 0.8, 1.6)
    stars += `M${n(x - rad)} ${n(y)}a${n(rad)} ${n(rad)} 0 1 0 ${n(rad * 2)} 0a${n(rad)} ${n(rad)} 0 1 0 ${n(-rad * 2)} 0Z`
  }
  // The mansion's face, pale in the moonlight: the courses of its new stone.
  const rf = rng(1202)
  let facade = ''
  for (let y = TOWER.top + 8; y < MAN.foot - 4; y += 9) {
    let x = TOWER.x0 + between(rf, 0, 12)
    while (x < MAN.x1) {
      const len = between(rf, 12, 30)
      facade += gouge(x, y, Math.min(x + len, MAN.x1), y + between(rf, -0.3, 0.3), 0.55)
      x += len + between(rf, 3, 8)
    }
  }
  // The moonlit lawn: pale, its grass cut as dark ticks, thicker in the
  // shadow of Nick's yard on the left and thinning towards the house.
  const rl = rng(1203)
  let lawn = ''
  for (let i = 0; i < 900; i++) {
    const y = between(rl, MAN.foot + 4, H - 2)
    const x = between(rl, 0, shore(y) - 6)
    const dark = clamp(1 - x / 420) * 0.6 + clamp((y - 240) / 110) * 0.4
    if (rl() > 0.3 + dark * 0.7) continue
    const h = 2.4 + (y - MAN.foot) * 0.05
    lawn += gouge(x, y, x + between(rl, -1, 1), y - h, 0.45 + dark * 0.5)
  }
  // The dark water: a few glints of the moon near the beach, fewer far out.
  const rw = rng(1204)
  let water = ''
  for (let y = HORIZON + 8; y < H; y += 5) {
    let x = shore(y) + between(rw, 4, 20)
    while (x < W) {
      const k = (y - HORIZON) / (H - HORIZON)
      const len = between(rw, 8, 24) * (0.6 + k)
      if (rw() < 0.35 + k * 0.3) water += gouge(x, y, x + len, y + 0.2, 0.4 + k * 0.8)
      x += len + between(rw, 14, 40)
    }
  }
  // "a single green light, minute and far away": its rays, cut in paper.
  const light = rays(rng(1205), LIGHT[0], LIGHT[1], { from: 5, to: 30, every: 22.5, width: 1.5 })
  // Trees behind Nick's house, black, with a few leaves caught by the moon.
  const rt = rng(1206)
  let trees = ''
  for (let i = 0; i < 60; i++) {
    const x = between(rt, 6, 156)
    const y = between(rt, 70, 150)
    trees += gouge(x, y, x + between(rt, 4, 9), y - between(rt, 1, 4), 0.7)
  }
  // "a thin beard of raw ivy": clusters of small dark leaves climbing the walls.
  let ivy = ''
  for (const x0 of [212, 246, 296, 330, 392, 440, 486]) {
    const top = between(rt, 26, 54)
    for (let k = 0; k < 14; k++) {
      const y = MAN.foot - 2 - between(rt, 0, top)
      const x = x0 + between(rt, -6, 6) * (1 - (MAN.foot - y) / 80)
      const rad = between(rt, 1.4, 2.4)
      ivy += `M${n(x - rad)} ${n(y)}a${n(rad)} ${n(rad * 0.8)} 0 1 0 ${n(rad * 2)} 0a${n(rad)} ${n(rad * 0.8)} 0 1 0 ${n(-rad * 2)} 0Z`
    }
  }
  cached = { stars, facade, lawn, water, light, trees, ivy }
  return cached
}

/** A cat walking right across the lawn, its tail up: about 30 long. */
const CAT =
  'M-14 -9C-15 -14 -12 -17 -6 -17C0 -17 6 -16 10 -14C12 -18 14 -21 16 -21L17 -25L19 -21.4L21 -25L21.6 -20.6C24 -19 24 -15.6 21.6 -13.6C19.6 -12 17 -11.6 15 -11.2L15 -2L12.6 -2L12 -9C6 -8 0 -8 -6 -9L-7 -2L-9.4 -2L-10.2 -8.6Z' +
  'M-13.6 -14C-18 -17 -20 -22 -19 -28C-18.4 -30.6 -16.2 -30.6 -16.4 -28C-17 -23 -15 -19 -11.6 -16.6Z'

function TheGreenLight({ uid }: ArtProps) {
  const m = marks()
  const id = { water: `${uid}-water` }
  return (
    <>
      <defs>
        <clipPath id={id.water}>
          <path d={`M${shore(HORIZON)} ${HORIZON}H${W}V${H}H${shore(H)}Z`} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [600, 190], push: 1.03 })}>
        {/* the night sky and its stars, and the moon over Nick's yard */}
        <path d={m.stars} fill={PAPER} />
        <circle cx={MOON[0]} cy={MOON[1]} r={MOON[2]} fill={PAPER} />
        <path
          d={gouge(66, 46, 72, 44, 1.2) + gouge(78, 58, 84, 56, 1) + gouge(68, 60, 72, 62, 0.8)}
          fill={INK}
        />

        {/* the bay: the far shore, low and black, tapering in far out on
            the water and clear of Gatsby's hands, and the dark water */}
        <path
          d={`M604 ${HORIZON + 2}Q680 ${HORIZON - 4} 760 ${HORIZON - 2}L800 ${HORIZON - 1}Q840 ${HORIZON - 3} ${W} ${HORIZON - 1}V${HORIZON + 4}H640Q620 ${HORIZON + 4} 604 ${HORIZON + 2}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={0.9}
        />
        <g clipPath={`url(#${id.water})`}>
          <path d={m.water} fill={PAPER} />
        </g>
        {/* the end of a dock, and the single light on it */}
        <path d={`M770 ${HORIZON - 1}H${LIGHT[0] + 2}V${HORIZON + 2}H770Z`} fill={INK} />
        <g className="lc-glow" style={timing({ dur: 2.4 })}>
          <path d={m.light} fill={PAPER} />
          <circle cx={LIGHT[0]} cy={LIGHT[1]} r={3.2} fill={PAPER} />
        </g>
        <path
          d={
            gouge(LIGHT[0] - 1, HORIZON + 10, LIGHT[0] + 1, HORIZON + 26, 1) +
            gouge(LIGHT[0] - 2, HORIZON + 32, LIGHT[0] + 2, HORIZON + 40, 0.8)
          }
          fill={PAPER}
        />

        {/* Gatsby's mansion: the tower on one side, the steep roofs, the pale
            face in the moonlight, the ivy at its foot */}
        <rect
          x={TOWER.x0}
          y={TOWER.top}
          width={MAN.x1 - TOWER.x0}
          height={MAN.foot - TOWER.top}
          fill={INK}
        />
        <path
          d={`M${TOWER.x0 - 6} ${TOWER.top}L${(TOWER.x0 + TOWER.x1) / 2} ${TOWER.tip}L${TOWER.x1 + 6} ${TOWER.top}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${MAN.x0} ${MAN.wall}L${MAN.x0 + 22} 74H${MAN.x1 - 22}L${MAN.x1} ${MAN.wall}ZM316 ${MAN.wall - 8}L334 58H374L392 ${MAN.wall - 8}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${TOWER.x0} ${TOWER.top}H${TOWER.x1}V${MAN.wall}H${MAN.x1}V${MAN.foot}H${TOWER.x0}Z`}
          fill={PAPER}
        />
        <path d={m.facade} fill={INK} />
        {/* the windows, dark in the pale face: square above, arched below,
            as the house is cut in "Gatsby's party" and "Boats against the
            current" */}
        <g fill={INK}>
          {[228, 254, 280, 306, 336, 366, 400, 426, 452, 476].map((x) => (
            <rect key={`u${x}`} x={x} y={116} width={11} height={26} />
          ))}
          {[228, 254, 280, 306, 336, 366, 400, 426, 452, 476].map((x) => (
            <path key={`l${x}`} d={`M${x} 192V164Q${x + 5.5} 155 ${x + 11} 164V192Z`} />
          ))}
          <rect x={181} y={84} width={14} height={24} />
          <path d="M181 158V136Q188 127 195 136V158Z" />
          <rect x={346} y={66} width={16} height={22} />
        </g>
        <path
          d={
            gouge(MAN.x0, MAN.wall + 1, MAN.x1, MAN.wall + 1, 1.4) +
            gouge(TOWER.x0, MAN.foot - 1, MAN.x1, MAN.foot - 1, 1.2)
          }
          fill={INK}
        />
        {/* dormers in the roof */}
        <g fill={PAPER}>
          {[244, 284, 424, 460].map((x) => (
            <path key={x} d={`M${x} 98V88L${x + 7} 81L${x + 14} 88V98Z`} />
          ))}
        </g>
        <g fill={INK}>
          {[244, 284, 424, 460].map((x) => (
            <rect key={x} x={x + 4} y={89} width={6} height={9} />
          ))}
        </g>
        <path d={m.ivy} fill={INK} />

        {/* the moonlit lawn running down to the beach */}
        <path d={`M0 ${MAN.foot}H${shore(MAN.foot)}L${shore(H)} ${H}H0Z`} fill={PAPER} />
        <path d={m.lawn} fill={INK} />
        <path
          d={`M${shore(MAN.foot)} ${MAN.foot}L${shore(H)} ${H}`}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.bold}
        />

        {/* Nick's small dark house and the trees behind it */}
        <path
          d="M0 70Q40 50 80 74Q120 60 160 92Q176 130 160 214H0Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={m.trees} fill={PAPER} />
        <path d="M0 150L66 132L74 136V246H0Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d={
            gouge(0, 168, 70, 164, 0.9) +
            gouge(0, 190, 70, 186, 0.9) +
            gouge(0, 212, 70, 208, 0.9) +
            gouge(0, 234, 70, 230, 0.9)
          }
          fill={PAPER}
        />

        {/* the cat crossing the moonlight */}
        <path d={CAT} transform="translate(286 318)" fill={INK} />

        {/* Nick on the old grass roller in his yard, watching */}
        <path
          d="M118 296L58 246M50 240L66 252"
          stroke={PAPER}
          strokeWidth={7.4}
          strokeLinecap="round"
        />
        <path
          d="M118 296L58 246M50 240L66 252"
          stroke={INK}
          strokeWidth={4.4}
          strokeLinecap="round"
        />
        <circle cx={118} cy={298} r={18} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <circle cx={118} cy={298} r={4} fill={PAPER} />
        <Person
          at={[118, 326]}
          scale={0.98}
          pose={{
            look: 'nick',
            body: seatedBody(42, 4),
            head: { rot: -2 },
            legs: seatedLegs(42, 30),
            far: {
              pts: [
                [0, -106],
                [8, -78],
                [26, -56],
              ],
              hand: 'mitt',
              deg: 16,
            },
            near: {
              pts: [
                [6, -106],
                [14, -78],
                [32, -54],
              ],
              hand: 'mitt',
              deg: 16,
            },
          }}
        />

        {/* "the shadow of my neighbor's mansion", from which he has come out */}
        <path
          d={`M${TOWER.x0} ${MAN.foot}H${MAN.x1}L${MAN.x1 + 64} ${MAN.foot + 30}H${TOWER.x0 + 30}Z`}
          fill={INK}
        />
        <path
          d={
            gouge(TOWER.x0 + 40, MAN.foot + 22, MAN.x1 + 40, MAN.foot + 22, 0.8) +
            gouge(TOWER.x0 + 20, MAN.foot + 12, MAN.x1 + 10, MAN.foot + 12, 0.6)
          }
          fill={PAPER}
        />
        {/* his shadow on the moonlit grass, falling away from the moon */}
        <path d="M470 300L486 296Q540 300 590 320L594 326Q540 318 478 304Z" fill={INK} />

        {/* Gatsby on his lawn, his arms stretched out toward the dark water */}
        <Person
          at={[478, 300]}
          scale={0.8}
          pose={{
            look: 'gatsby',
            head: { rot: -2 },
            legs: {
              far: [
                [-3, -70],
                [-7, -36],
                [-10, -3],
              ],
              near: [
                [3, -70],
                [8, -36],
                [10, -3],
              ],
            },
            far: {
              pts: [
                [-2, -132],
                [24, -129],
                [49, -126],
              ],
              hand: 'open',
              deg: 2,
              thumb: -1,
              size: 17,
              spread: 21,
            },
            near: {
              pts: [
                [4, -131],
                [28, -119],
                [52, -111],
              ],
              hand: 'open',
              deg: 16,
              thumb: -1,
              size: 17,
              spread: 21,
            },
          }}
        >
          {/* "I could have sworn he was trembling" */}
          <path
            d="M71 -131V-122M74.4 -130V-123M72 -112V-102M75.4 -111V-103"
            fill="none"
            stroke={PAPER}
            strokeWidth={1.5}
            strokeLinecap="round"
          />
        </Person>
      </g>
    </>
  )
}

export const theGreenLight: LinocutArt = { width: W, height: H, Draw: TheGreenLight }
