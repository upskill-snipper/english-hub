import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'
import { rapier } from '../../romeo-and-juliet/panels/verona-kit'

import { Ariel, Person, STAFF_HELD, type P } from './people'

/**
 * Act 3, Scene 3: "The vanishing banquet", the tenth moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1540, src/data/full-texts/the-tempest.ts):
 *
 * - "Thunder and lightning. Enter Ariel like a Harpy; claps his wings upon
 *   the table; and, with a quaint device, the banquet vanishes." So the sky
 *   is black and lit by a fork of lightning, and over a long table Ariel
 *   hangs as the kit's harpy (./people.tsx: his own face and wisps, a
 *   harpy's great wings, no bird's body or talons), the far wing raised, the
 *   near one brought down on the table.
 * - The banquet is the spot colour, as Ariel's arts are in this set (his
 *   fire on the ship, his song, his tune): the dishes the Shapes brought,
 *   fruit, a jug, a fowl, a goblet, cut as red outlines on the white cloth
 *   because they are vanishing. In motion they print whole and then fade to
 *   those outlines.
 * - "You are three men of sin". Ariel points at them. "[Seeing Alonso,
 *   Sebastian &c., draw their swords.] You fools! ... Your swords are now
 *   too massy for your strengths, And will not be uplifted." Alonso in his
 *   crown, Sebastian in his bonnet and Antonio in the Duke of Milan's hat
 *   have drawn, and their blades sag to the ground: drawn and useless, never
 *   raised, and no one is struck. "O, it is monstrous! monstrous!" The King
 *   lifts his other hand to his face, the fingers spread: horror, not a
 *   salute or a blow. (REVIEWED 2 October 2026: the alt text had him throw
 *   the hand up; it is drawn held up before his face, and the alt now says
 *   so.)
 * - Gonzalo does not see what they see: "I' the name of something holy,
 *   sir, why stand you In this strange stare?" He stands apart behind them,
 *   white-bearded, holding out a hand to the King.
 * - "Solemn and strange music: and Prospero above, invisible." He stands on
 *   the top of a crag on the right, small, watching, cut as the kit's veil
 *   (`veiled`), his staff held as the kit holds it.
 *
 * The other lords and the Shapes are out of the picture. Seeds: 4001 (sky),
 * 4002 (rain), 4003 (the crag), 4004 (ground), 4005 (the cloth).
 */

const W = 860
const H = 340
const GROUND = 330
/** The table's top: its far edge, and its near edge where the cloth falls. */
const TOP_FAR = 238
const TOP_NEAR = 248
const TABLE_X0 = 372
const TABLE_X1 = 664
const FLASH: P = [404, 40]

type Marks = {
  sky: string
  rain: string
  bolt: string
  crag: string
  cragCuts: string
  ground: string
  cloth: string
  folds: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The black sky, lit by the flash on the right and paling towards the
  // ground, so the lords' heads are not lost in it.
  const sky = gougeField(
    rng(4001),
    { x0: 0, x1: W, y0: 4, y1: 236 },
    (x, y) =>
      clamp(
        Math.max(
          0.78 - Math.hypot((x - FLASH[0]) * 0.8, y - FLASH[1]) / 300,
          0.1 + ((y - 40) / 200) * 0.62,
        ),
      ),
    { spacing: 6, len: [20, 80], gap: [6, 18], max: 3.4 },
  )
  const r = rng(4002)
  let rain = ''
  for (let i = 0; i < 70; i++) {
    const x = between(r, -20, W + 40)
    const y = between(r, 0, 200)
    const len = between(r, 14, 30)
    rain += gouge(x, y, x - len * 0.36, y + len, 0.5)
  }
  const bolt =
    'M430 2L414 30L424 32L400 70L412 72L386 116L420 66L408 64L432 28L421 26L442 2Z' +
    'M412 72L398 90L406 86L400 104L414 80Z'
  // The crag Prospero stands on: dark, its face lit by the flash.
  const crag =
    'M712 340C716 300 714 262 724 230C730 208 734 186 744 172C760 162 784 160 806 162C826 160 846 166 870 160L870 340Z'
  const k = rng(4003)
  let cragCuts = ''
  for (let i = 0; i < 90; i++) {
    const x = between(k, 722, 866)
    const y = between(k, 170, 330)
    const light = clamp(0.95 - (x - 720) / 110 - (y - 170) / 400)
    if (k() > light) continue
    cragCuts += gouge(x, y, x + between(k, 6, 14), y + between(k, 2, 6), 0.6 + light * 1.4)
  }
  const g = rng(4004)
  const ground = gougeField(
    g,
    { x0: 0, x1: W, y0: 240, y1: H },
    (x, y) => clamp(((y - 236) / 104) ** 1.4 * 0.55 + 0.08),
    { spacing: 6, len: [10, 46], gap: [14, 44], max: 2 },
  )
  // The cloth: the table's top in paper, and the cloth falling from its near
  // edge in folds to a hem cut into points.
  const c = rng(4005)
  let cloth = `M${TABLE_X0} ${TOP_NEAR}L${TABLE_X0 + 10} ${TOP_FAR}L${TABLE_X1 + 4} ${TOP_FAR}L${TABLE_X1 - 6} ${TOP_NEAR}`
  let folds = ''
  const hem = 286
  for (let x = TABLE_X1 - 6; x > TABLE_X0; x -= 18) {
    const x2 = Math.max(TABLE_X0, x - 18)
    cloth += `L${n(x - 4)} ${n(hem + between(c, -2, 2))}L${n(x2 + 5)} ${n(hem + 7 + between(c, -2, 2))}`
    folds += gouge(x - 9, TOP_NEAR + 4, x - 9 + between(c, -1.5, 1.5), hem - 2, 0.9)
  }
  cloth += `L${TABLE_X0} ${hem}Z`
  cached = { sky, rain, bolt, crag, cragCuts, ground, cloth, folds }
  return cached
}

/**
 * The banquet, on the left of the cloth nearest the lords, in the panel's
 * frame: a dish heaped with fruit, a jug, a fowl on a platter, a goblet.
 * Each is cut as a red outline, the set's way of drawing a thing that is not
 * quite there; while the motion plays it prints whole first, then fades to
 * the outline. (Broken red outlines were tried first, and on the white cloth
 * read as a spatter.)
 */
const DISHES = [
  // the dish of fruit
  'M386 244C385 240 386 237 388 236L430 236C432 237 433 240 432 244Z',
  'M389 236a5.4 5.4 0 1 1 10.8 0ZM398 233a6 6 0 1 1 12 0ZM409 234a5.6 5.6 0 1 1 11.2 0ZM419 236a5 5 0 1 1 10 0Z',
  // the jug, and its handle
  'M444 244C440 236 440 226 446 222L446 214C445 212 446 210 448 210L456 210C458 210 459 212 458 214L458 222C464 226 464 236 460 244Z',
  // the fowl on its platter
  'M464 244C464 240 478 238 492 238C506 238 520 240 520 244Z',
  'M472 238C470 229 478 223 490 223C501 223 509 229 509 238Z',
  // the goblet
  'M526 244L538 244L534 241L533 233C538 231 540 225 540 218L524 218C524 225 526 231 531 233L530 241Z',
]
/** The jug's handle and the fowl's legs: lines, not shapes. */
const DISH_LINES = 'M460 222C469 222 469 235 461 237M505 231L513 225M508 235L517 231'

const GONZALO: P = [56, GROUND]
const ALONSO: P = [146, GROUND]
const SEBASTIAN: P = [230, GROUND]
const ANTONIO: P = [312, GROUND]
const HARPY: P = [574, 262]
const PROSPERO: P = [800, 166]
const LORDS = 1.04

function TheVanishingBanquet({ uid }: ArtProps) {
  const m = marks()
  const skyClip = `${uid}-sky`
  return (
    <>
      <defs>
        <clipPath id={skyClip}>
          <rect x={0} y={0} width={W} height={242} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 190], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={INK} />
        <g clipPath={`url(#${skyClip})`}>
          <path d={m.sky} fill={PAPER} />
          <path d={m.rain} fill={PAPER} />
        </g>
        {/* "Thunder and lightning" */}
        <path
          className="lc-fade-in"
          style={timing({ delay: 0.2, dur: 0.6 })}
          d={m.bolt}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.2}
        />

        {/* the ground, pale in the flash */}
        <path
          d={`M-10 ${H + 10}L-10 242Q430 234 ${W + 10} 242L${W + 10} ${H + 10}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path d={m.ground} fill={INK} />

        {/* the crag, and Prospero on its top, above, invisible */}
        <path d={m.crag} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.cragCuts} fill={PAPER} />
        <Person
          at={PROSPERO}
          scale={0.62}
          flip
          veiled={{ uid, key: 'prospero', on: 'dark' }}
          pose={{
            look: 'prospero',
            head: { rot: 10 },
            far: {
              pts: [
                [-4, -130],
                [-8, -106],
                [-2, -86],
              ],
              hand: 'mitt',
              deg: 80,
            },
            ...STAFF_HELD,
          }}
        />

        {/* the table, its cloth, and the banquet vanishing from it */}
        <path
          d={`M${TABLE_X0 + 6} ${GROUND}V280M${TABLE_X1 - 10} ${GROUND}V280M${TABLE_X0 + 40} ${GROUND - 6}V280M${TABLE_X1 - 44} ${GROUND - 6}V280`}
          stroke={INK}
          strokeWidth={7}
        />
        <path
          d={m.cloth}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
          strokeLinejoin="round"
        />
        <path d={m.folds} fill={INK} />
        <g fill={PAPER} stroke={RED} strokeWidth={1.8} strokeLinejoin="round">
          {DISHES.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <path d={DISH_LINES} fill="none" stroke={RED} strokeWidth={1.8} strokeLinecap="round" />
        <g className="lc-fade-out" style={timing({ delay: 1.1, dur: 1.4 })} fill={RED}>
          {DISHES.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>

        {/* Gonzalo, apart, who sees nothing: "why stand you In this strange stare?" */}
        <Person
          at={GONZALO}
          scale={LORDS}
          pose={{
            look: 'gonzalo',
            head: { rot: 4 },
            far: {
              pts: [
                [-4, -130],
                [-8, -106],
                [-4, -86],
              ],
              deg: 84,
            },
            near: {
              pts: [
                [5, -128],
                [18, -112],
                [34, -116],
              ],
              hand: 'open',
              deg: -8,
              thumb: -1,
            },
          }}
        />

        {/* Alonso, his sword drawn and sagging, his other hand thrown up */}
        <Person
          at={ALONSO}
          scale={LORDS}
          pose={{
            look: 'alonso',
            head: { rot: -6 },
            legs: {
              far: [
                [-3, -70],
                [-9, -36],
                [-13, -3],
              ],
              near: [
                [3, -70],
                [6, -36],
                [8, -3],
              ],
            },
            far: {
              pts: [
                [-4, -130],
                [12, -126],
                [24, -146],
              ],
              hand: 'open',
              deg: -64,
              thumb: -1,
            },
            near: {
              pts: [
                [5, -128],
                [14, -104],
                [24, -90],
              ],
              hand: 'grip',
              deg: 66,
            },
          }}
        >
          <path d={rapier([26, -86], 70, 86)} fill={PAPER} stroke={INK} strokeWidth={0.9} />
        </Person>

        {/* Sebastian, drawn, his blade too heavy to lift */}
        <Person
          at={SEBASTIAN}
          scale={LORDS}
          pose={{
            look: 'sebastian',
            head: { rot: -4 },
            cloak: 10,
            legs: {
              far: [
                [-3, -70],
                [-10, -36],
                [-15, -3],
              ],
              near: [
                [3, -70],
                [8, -36],
                [11, -3],
              ],
            },
            far: {
              pts: [
                [-4, -130],
                [-16, -110],
                [-22, -92],
              ],
              hand: 'mitt',
              deg: 110,
            },
            near: {
              pts: [
                [5, -128],
                [18, -106],
                [30, -96],
              ],
              hand: 'grip',
              deg: 54,
            },
          }}
        >
          <path d={rapier([33, -92], 62, 90)} fill={PAPER} stroke={INK} strokeWidth={0.9} />
        </Person>

        {/* Antonio, drawn, his blade's point on the ground */}
        <Person
          at={ANTONIO}
          scale={LORDS}
          pose={{
            look: 'antonio',
            head: { rot: -2 },
            cloak: 12,
            legs: {
              far: [
                [-3, -70],
                [-10, -36],
                [-16, -3],
              ],
              near: [
                [3, -70],
                [9, -36],
                [13, -3],
              ],
            },
            far: {
              pts: [
                [-4, -130],
                [-14, -108],
                [-12, -86],
              ],
              hand: 'mitt',
              deg: 96,
            },
            near: {
              pts: [
                [5, -128],
                [20, -110],
                [34, -102],
              ],
              hand: 'grip',
              deg: 46,
            },
          }}
        >
          <path d={rapier([37, -98], 58, 100)} fill={PAPER} stroke={INK} strokeWidth={0.9} />
        </Person>

        {/* Ariel like a Harpy, over the table: "You are three men of sin" */}
        <g className="lc-fade-in" style={timing({ delay: 0.3, dur: 1 })}>
          <Ariel
            at={HARPY}
            scale={1}
            flip
            pose={{
              form: 'harpy',
              head: { rot: 4 },
              trail: 0.55,
              far: {
                pts: [
                  [-4, -134],
                  [-8, -112],
                  [-4, -94],
                ],
                deg: 90,
                size: 14,
                spread: 16,
              },
              near: {
                pts: [
                  [4, -132],
                  [22, -128],
                  [46, -136],
                ],
                hand: 'point',
                deg: -10,
              },
            }}
          />
        </g>
      </g>
    </>
  )
}

export const theVanishingBanquet: LinocutArt = {
  width: W,
  height: H,
  Draw: TheVanishingBanquet,
}
