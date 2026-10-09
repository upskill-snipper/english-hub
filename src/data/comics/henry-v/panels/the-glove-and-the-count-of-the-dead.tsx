import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  PAVILION,
  POLE_TOP,
  banner,
  clothBand,
  daySky,
  staff,
  trampledGround,
} from './agincourt-field'
import { Person } from './people'

/**
 * Act 4, Scene 8: "The glove and the count of the dead", the twentieth moment
 * in the guide's timeline. Every detail is from the held edition
 * (src/data/full-texts/henry-v.ts, Project Gutenberg #1521):
 *
 * - It is "Before King Henry's pavilion" (the guide's setting): the great
 *   round tent on the right, Saint George's pennon flying from its pole, the
 *   one mark of the spot colour.
 * - The glove comes first, so it is on the left. "Here, uncle Exeter, fill
 *   this glove with crowns, And give it to this fellow." So Exeter (the kit's
 *   grey beard, still in his harness: the scene follows the battle on the same
 *   field, and the King is in his) holds out a glove heaped with crowns, cut in
 *   paper and cut large enough to stay a glove of coins at phone width, to
 *   Williams (the kit's Williams: steel cap, short beard), who reaches for it.
 *   The King has just taken back his own glove from Williams's cap to have it
 *   filled ("Give me thy glove, soldier. Look, here is the fellow of it"), so
 *   Williams's cap is bare. Behind him Fluellen, who still wears Williams's
 *   glove in his cap ("wear thou this favour for me and stick it in thy cap",
 *   4.7), holds out a coin: "Hold, there is twelve pence for you".
 * - Then the count. "Enter an English Herald." "Here is the number of the
 *   slaught'red French." "[Herald gives him another paper.]" So the Herald, in
 *   his tabard quartered with the King's arms (the kit's), holds out the
 *   second paper, and Henry, before his pavilion, holds the first open in both
 *   hands and lifts his eyes from it: "O God, thy arm was here; And not to us,
 *   but to thy arm alone, Ascribe we all!"
 * - The dead are names on paper and nothing more: the list is ruled with lines
 *   of names, and no one dead or wounded is drawn anywhere.
 *
 * The blow Williams gives Fluellen (4.8) is not drawn: the panel is the
 * reward, not the quarrel. Nobody's blade is drawn. Nothing is taken from a
 * film or stage production.
 */

const W = 860
const H = 340
const HORIZON = 218

type Marks = {
  sky: string
  ground: string
  pennon: string
  cross: string
  pole: string
  shade: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = daySky(rng(2001), { x0: 0, x1: W, y0: 6, y1: HORIZON - 6 }, (x, y) => {
    const high = 1 - y / HORIZON
    // the day is clearing: lighter than the panels of the battle
    return 0.06 + high * 0.38
  })
  const ground = trampledGround(rng(2002), { x0: 0, x1: W, y0: HORIZON + 2, y1: H }, 0.9)
  const top: [number, number] = [PAV[0] + POLE_TOP[0] * PAV_S, PAV[1] + POLE_TOP[1] * PAV_S]
  const flag = banner(rng(2003), [top[0] + 1, top[1] + 2], { len: 54, depth: 30, tail: true })
  const cross =
    clothBand(flag.at, true, 0, 0.8, 0.5, 0.22) + clothBand(flag.at, false, 0, 1, 0.3, 0.13)
  const pole = staff([top[0], top[1] + 34], [top[0], top[1]], 3)
  let shade = ''
  for (const [x0, x1, y] of [
    [40, 140, 324],
    [150, 254, 324],
    [270, 380, 324],
    [470, 576, 326],
    [596, 706, 328],
  ])
    for (let k = 0; k < 4; k++)
      shade += gouge(x0 + k * 5, y + k * 2.6, x1 - k * 6, y + k * 2.6 + 0.6, 1.6 - k * 0.25)
  cached = { sky, ground, pennon: flag.cloth, cross, pole, shade }
  return cached
}

/** The pavilion's foot, and its scale. */
const PAV: [number, number] = [772, 296]
const PAV_S = 1.02

/**
 * The glove heaped with crowns, in Exeter's frame (facing right before the
 * flip), held by its cuff beside his fist: the fingers hanging down, the cuff
 * up, and the coins piled in the mouth of it, cut as paper discs with an ink
 * edge and a line across each.
 */
const CROWNS_AT = 'translate(46.4 -107.6) scale(1.3)'
const FULL_GLOVE =
  'M-6 -4L6 -4L5.4 8L7.4 20L5.4 21L4.6 12L4 22L2 22.4L1.8 12L0.6 22.6L-1.4 22.4L-1 12L-2.8 21.6L-4.6 21L-3.6 12L-5.2 8Z' +
  'M5.4 6L10.4 12.4L8.8 14L4.8 9.4Z'
const COINS: [number, number][] = [
  [-4.6, -5.4],
  [0, -6.6],
  [4.6, -5.4],
  [-2.4, -10.4],
  [2.6, -10.8],
  [0, -14.6],
]
const COIN_LINES = COINS.map(([x, y]) => `M${n(x - 1.4)} ${n(y)}H${n(x + 1.4)}`).join('')

/** Fluellen's twelve pence, on his open palm, in his frame. */
const PENNY = [44, -104] as const

/** The list of the French dead, held open in both of Henry's hands, in his frame: ruled lines of names. */
const LIST = 'M18 -126C20 -128 38 -128 40 -126L42 -68C40 -66 22 -66 20 -68Z'
const LIST_LINES = (() => {
  let d = ''
  for (let k = 0; k < 11; k++) {
    const y = -120 + k * 4.8
    const x0 = 22.6 + (k % 3) * 0.4
    const x1 = 36.4 - ((k * 7) % 5) * 1.2
    d += `M${n(x0)} ${n(y)}L${n(x1)} ${n(y + 0.3)}`
  }
  return d
})()
/** The second paper, in the Herald's hand, in his frame. */
const SECOND = 'M38 -122L56 -120L54 -96L36 -98Z'
const SECOND_LINES = 'M40 -116L52 -114.6M40 -111L52 -109.6M39.6 -106L50 -104.8M39.4 -101L47 -100'

function TheGloveAndTheCountOfTheDead({ uid }: ArtProps) {
  const m = marks()
  const pennon = `${uid}-pennon`
  return (
    <>
      <defs>
        <clipPath id={pennon}>
          <path d={m.pennon} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [600, 200], push: 1.03 })}>
        {/* the sky clearing after the battle */}
        <rect x={0} y={0} width={W} height={HORIZON + 2} fill={PAPER} />
        <path d={m.sky} fill={INK} />

        {/* the field */}
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
        <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.4} />
        <path d={m.ground} fill={INK} />

        {/* the King's pavilion, and Saint George's pennon over it */}
        <path d={m.pole} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
        <path d={m.pennon} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
        <g clipPath={`url(#${pennon})`}>
          <path d={m.cross} fill={RED} />
        </g>
        <g transform={`translate(${PAV[0]} ${PAV[1]}) scale(${PAV_S})`}>
          <g fill={INK} stroke={INK} strokeWidth={5} strokeLinejoin="round">
            <path d={PAVILION.wall} />
            <path d={PAVILION.roof} />
            <path d={PAVILION.valance} />
          </g>
          <path d={PAVILION.wall} fill={PAPER} />
          <path d={PAVILION.roof} fill={PAPER} />
          <path d={PAVILION.seams} fill={INK} />
          <path d={PAVILION.valance} fill={INK} />
          <path d="M-88 -62.6L88 -62.6" stroke={PAPER} strokeWidth={1.3} strokeDasharray="2 4.1" />
          <path d={PAVILION.door} fill={INK} />
          <path
            d={PAVILION.flaps}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.4}
            strokeLinejoin="round"
          />
        </g>
        <path d={m.shade} fill={INK} />

        {/* Fluellen, Williams's glove in his cap, holding out a coin */}
        <Person
          at={[88, 324]}
          scale={1.22}
          pose={{
            look: 'fluellen',
            glove: true,
            far: {
              pts: [
                [-2, -130],
                [-6, -104],
                [-2, -80],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -130],
                [14, -106],
                [34, -102],
              ],
              hand: 'open',
              deg: -8,
              thumb: -1,
            },
          }}
        >
          <circle
            cx={PENNY[0]}
            cy={PENNY[1] - 3.4}
            r={3.4}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1}
          />
        </Person>

        {/* Williams, reaching for the glove of crowns */}
        <Person
          at={[204, 324]}
          scale={1.24}
          pose={{
            look: 'williams',
            far: {
              pts: [
                [-2, -130],
                [-6, -104],
                [-2, -80],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -130],
                [14, -106],
                [36, -102],
              ],
              hand: 'open',
              deg: -6,
              thumb: -1,
            },
          }}
        />

        {/* Exeter, still in his harness from the field, holding out the glove filled with crowns */}
        <Person
          at={[318, 324]}
          scale={1.22}
          flip
          pose={{
            look: 'exeter',
            dress: 'armour',
            far: {
              pts: [
                [-2, -130],
                [-6, -104],
                [-2, -80],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -130],
                [16, -112],
                [36, -110],
              ],
              hand: 'grip',
              deg: 0,
            },
          }}
        >
          <g transform={CROWNS_AT}>
            <path d={FULL_GLOVE} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
            <path d="M-5.6 2H5.6" stroke={INK} strokeWidth={0.8} />
            {COINS.map(([x, y]) => (
              <circle
                key={`${x} ${y}`}
                cx={x}
                cy={y}
                r={2.7}
                fill={PAPER}
                stroke={INK}
                strokeWidth={0.9}
              />
            ))}
            <path d={COIN_LINES} stroke={INK} strokeWidth={0.7} />
          </g>
        </Person>

        {/* the English Herald, holding out the second paper */}
        <Person
          at={[516, 326]}
          scale={1.24}
          pose={{
            look: 'herald',
            far: {
              pts: [
                [-2, -130],
                [-6, -104],
                [-2, -80],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -130],
                [16, -108],
                [36, -108],
              ],
              hand: 'grip',
              deg: 0,
            },
          }}
        >
          <path d={SECOND} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
          <path d={SECOND_LINES} stroke={INK} strokeWidth={0.8} />
        </Person>

        {/* Henry before his pavilion, the list in his hands, his eyes lifted */}
        <Person
          at={[646, 328]}
          scale={1.3}
          flip
          pose={{
            look: 'henry',
            dress: 'armour',
            head: { rot: -22 },
            far: {
              pts: [
                [-2, -130],
                [8, -110],
                [22, -122],
              ],
              hand: 'grip',
              deg: -10,
            },
            near: {
              pts: [
                [4, -130],
                [12, -100],
                [24, -80],
              ],
              hand: 'grip',
              deg: 30,
            },
            legs: {
              far: [
                [-3, -70],
                [-7, -36],
                [-10, -3],
              ],
              near: [
                [3, -70],
                [8, -36],
                [11, -3],
              ],
            },
          }}
        >
          <path d={LIST} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
          <path d={LIST_LINES} stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
        </Person>
      </g>
    </>
  )
}

export const theGloveAndTheCountOfTheDead: LinocutArt = {
  width: W,
  height: H,
  Draw: TheGloveAndTheCountOfTheDead,
}
