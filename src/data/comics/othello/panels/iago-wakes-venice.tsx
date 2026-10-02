import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { gouge, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, TorchFlame, type Pose } from './people'
import {
  H,
  W,
  WallTorch,
  campanile,
  chimney,
  houseRow,
  glowFrom,
  gothicArch,
  lights,
  nightSky,
  nightStreet,
  nightWater,
  stars,
  stoneByNight,
} from './venice-night'

/**
 * Act 1, Scene 1: "Iago wakes Venice", the first moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/othello.ts):
 *
 * - "Venice. A street." It is night: "At this odd-even and dull watch o' the
 *   night". RODERIGO: "Here is her father's house, I'll call aloud." So the
 *   house front of a Venetian palace fills the right of the picture, and the
 *   street runs beside a canal under a dark sky, with a bell tower and
 *   funnel-topped chimneys beyond (./venice-night.tsx).
 * - RODERIGO: "What ho, Brabantio! Signior Brabantio, ho!" IAGO: "Awake! what
 *   ho, Brabantio! Thieves, thieves! / Look to your house, your daughter, and
 *   your bags!" So the two men stand in the street with their faces turned
 *   up to the house, calling: Roderigo, in his feathered bonnet with his purse
 *   at his girdle, points up at the window; Iago, in his soldier's cap, a step
 *   behind him and further from the light, has a hand to his mouth to shout.
 *   He keeps back on purpose: "It seems not meet nor wholesome to my place /
 *   To be produc'd ... Against the Moor", and Brabantio never knows his voice
 *   ("What profane wretch art thou?").
 * - "Brabantio appears above at a window." BRABANTIO: "What is the reason of
 *   this terrible summons? / What is the matter there?" He has come from his
 *   bed ("for shame put on your gown"), so the old man leans out over his
 *   balcony in his white nightshirt, bareheaded, his white hair and beard
 *   cut in paper as the kit cuts them (./people.tsx), against the dark of
 *   his room.
 * - BRABANTIO: "Strike on the tinder, ho! / Give me a taper! Call up all my
 *   people!" So the house is waking: in the next window a taper has been
 *   lit, its flame printed in the spot colour, and its light is cut into the
 *   room. A torch burns in its bracket by the door, and its light is cut into
 *   the stone, the paving and the canal: the only other red.
 *
 * What Iago and Roderigo shout up about Othello and Desdemona is left out of
 * the picture and the words, as this play's rules require (./people.tsx and
 * ../index.ts): no animal stands for anyone, nothing is sexual, and the
 * quotation is Iago's own confession, "I am not what I am". Nothing is taken
 * from a film or stage production. Seeds: 4101 (sky), 4102 (stars), 4103
 * (house front), 4104 (street), 4105 (canal), 4106 (window light).
 */

/** Where everyone stands, and where the house fronts meet the paving. */
const FEET = 326
const PAVE = 268
/** Brabantio's house front, from here to the right edge. */
const HOUSE = 500
/** His window, over the balcony; the lit window beside it; the door below. */
const WIN = { x0: 626, x1: 742, top: 18, bottom: 142 }
const LIT = { x0: 788, x1: 844, top: 44, bottom: 136 }
const DOOR = { x0: 596, x1: 664, top: 176 }
const BALCONY = { x0: 610, x1: 758, top: 142 }
/** The torch's flame, in its bracket by the door. */
const TORCH: [number, number] = [566, 170]
/** The taper in the lit window. */
const TAPER: [number, number] = [816, 104]
/** The canal behind the street, on the left, and the far bank's foot. */
const CANAL = { x0: 0, x1: HOUSE, top: 236 }

const RODERIGO: Pose = {
  look: 'roderigo',
  head: { rot: -20 },
  mouth: 'open',
  cloak: 3,
  legs: {
    far: [
      [-3, -70],
      [-9, -36],
      [-14, -3],
    ],
    near: [
      [3, -70],
      [10, -37],
      [14, -3],
    ],
  },
  far: {
    pts: [
      [-3, -130],
      [-9, -104],
      [-8, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [24, -138],
      [40, -160],
    ],
    hand: 'point',
    deg: -40,
    thumb: 1,
  },
}

/** Iago, a step behind, a hand cupped to his mouth to shout up at the house. */
const IAGO: Pose = {
  look: 'iago',
  head: { rot: -16 },
  mouth: 'open',
  nearOverFace: true,
  legs: {
    far: [
      [-3, -70],
      [-8, -36],
      [-12, -3],
    ],
    near: [
      [3, -70],
      [8, -36],
      [11, -3],
    ],
  },
  far: {
    pts: [
      [-3, -130],
      [-14, -106],
      [-20, -86],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [5, -130],
      [30, -126],
      [30, -148],
    ],
    hand: 'open',
    deg: -84,
    thumb: -1,
    size: 14,
    spread: 9,
  },
}

/** Brabantio at his window (flipped to face left), leaning out over the balcony rail. */
const BRABANTIO: Pose = {
  look: 'brabantio',
  bare: true,
  shirt: true,
  mouth: 'open',
  head: { rot: 18, at: [8, -158] },
  far: {
    pts: [
      [-2, -130],
      [6, -116],
      [28, -115],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [5, -130],
      [18, -116],
      [40, -115],
    ],
    hand: 'open',
    deg: 14,
    thumb: 1,
    spread: 16,
  },
}

type Marks = {
  sky: string
  stars: string
  stone: string
  street: string
  water: string
  litRoom: string
  torchGlow: string
}

const torchLight = glowFrom(TORCH, 300, 1.1)

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = nightSky(4101, { x0: 0, x1: HOUSE, y0: 60, y1: 214 })
  const st = stars(4102, { x0: 10, x1: HOUSE - 10, y0: 10, y1: 150 }, 30, {
    x0: 0,
    x1: 330,
    y0: 0,
    y1: 70,
  })
  // The house front is lit only where the torch and the taper reach it; the
  // stone round Brabantio's dark window stays black, so he stands out.
  const front = lights(glowFrom(TORCH, 190, 1.1), glowFrom([TAPER[0], TAPER[1] + 30], 90))
  const stone = stoneByNight(4103, { x0: HOUSE, x1: W, y0: 0, y1: PAVE }, (x, y) => {
    const L = front(x, y)
    return L > 0.1 ? L : 0
  })
  const street = nightStreet(4104, { x0: 0, x1: W, y0: PAVE + 2, y1: H }, (x, y) =>
    Math.max(torchLight(x, y - 40), 0.06),
  )
  const water = nightWater(
    4105,
    { x0: CANAL.x0, x1: CANAL.x1, y0: CANAL.top + 2, y1: PAVE - 4 },
    glowFrom([TORCH[0] - 20, PAVE], 220, 2),
    [86, 214, 402],
  )
  const litRoom = rays(rng(4106), TAPER[0], TAPER[1] - 8, {
    from: 16,
    to: 70,
    every: 13,
    width: 2.2,
  })
  const torchGlow = rays(rng(4107), TORCH[0], TORCH[1] - 8, {
    from: 22,
    to: 70,
    every: 12,
    width: 2,
  })
  cached = { sky, stars: st, stone, street, water, litRoom, torchGlow }
  return cached
}

/** The far bank beyond the canal: house fronts, chimneys and a bell tower against the sky. */
const FAR =
  houseRow(238, [
    [-4, 58, 176, 162],
    [56, 120, 166, 150],
    [118, 176, 182, 170],
    [174, 232, 170, 156],
    [282, 352, 172, 158],
    [350, 410, 182, 170],
    [408, 470, 168, 154],
    [468, 504, 180, 170],
  ]) +
  chimney(30, 140, 166) +
  chimney(96, 128, 156) +
  chimney(190, 138, 164, 0.9) +
  chimney(366, 138, 164)
const TOWER = campanile(258, 238, 34, 24)
/** A few windows still lit on the far bank. */
const FAR_WINDOWS =
  'M20 192h7v10h-7zM32 192h7v10h-7zM140 198h7v10h-7zM196 188h7v10h-7zM300 190h7v10h-7zM372 198h7v10h-7zM430 186h7v10h-7z'

/** A gondola moored on the canal, its high prow to the left. */
const GONDOLA =
  'M24 256C40 262 120 264 176 258C186 256 192 250 194 244L198 244C198 252 192 260 180 263C120 270 44 268 18 260C12 256 10 248 12 238L16 238C17 247 19 253 24 256Z' +
  'M10 232h9v3h-9zM10 238h9v2.4h-9zM10 243h8v2.2h-8z'

function IagoWakesVenice({ uid }: ArtProps) {
  const m = marks()
  const win = `${uid}-win`
  return (
    <>
      <defs>
        <clipPath id={win}>
          <path d={gothicArch(WIN.x0, WIN.x1, WIN.top, BALCONY.top + 2)} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [560, 150], push: 1.03 })}>
        {/* the night sky over the canal, its stars, and the far bank */}
        <path d={m.sky} fill={PAPER} />
        <path d={m.stars} stroke={PAPER} strokeWidth={1} strokeLinecap="round" />
        <path d={TOWER.body + FAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={TOWER.arches} fill={PAPER} />
        <path d={FAR_WINDOWS} fill={PAPER} />
        {/* the canal, the torch's light broken on it, and a gondola moored */}
        <rect
          x={CANAL.x0}
          y={CANAL.top}
          width={CANAL.x1 - CANAL.x0}
          height={PAVE - CANAL.top}
          fill={INK}
        />
        <path d={m.water} fill={PAPER} />
        <path d={GONDOLA} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <rect x={0} y={CANAL.top - 2} width={HOUSE} height={3} fill={PAPER} />

        {/* Brabantio's house front, its stone lit by the torch and the taper */}
        <rect x={HOUSE} y={0} width={W - HOUSE} height={PAVE} fill={INK} />
        <path d={m.stone} fill={PAPER} />
        <rect x={HOUSE - 3} y={0} width={3} height={PAVE} fill={PAPER} />
        {/* the string course under the windows */}
        <path d={`M${HOUSE} 160H${W}M${HOUSE} 166H${W}`} stroke={PAPER} strokeWidth={2} />

        {/* the lit window: a taper struck, the room lit behind it */}
        <path
          d={gothicArch(LIT.x0 - 6, LIT.x1 + 6, LIT.top - 6, LIT.bottom + 6)}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={gothicArch(LIT.x0, LIT.x1, LIT.top, LIT.bottom)} fill={PAPER} />
        <path d={m.litRoom} fill={INK} />
        <path
          d={`M${(LIT.x0 + LIT.x1) / 2} ${LIT.top + 24}V${LIT.bottom}`}
          stroke={INK}
          strokeWidth={3}
        />
        <path
          d={`M${TAPER[0] - 4} ${TAPER[1] + 30}H${TAPER[0] + 4}V${TAPER[1] + 1}H${TAPER[0] - 4}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.6}
        />
        <path
          d={`M${TAPER[0] - 12} ${TAPER[1] + 31}H${TAPER[0] + 12}`}
          stroke={INK}
          strokeWidth={3}
        />
        <TorchFlame at={TAPER} s={0.62} rays={false} delay={0.5} />
        <path
          d={`M${LIT.x0 - 12} ${LIT.bottom + 6}H${LIT.x1 + 12}V${LIT.bottom + 12}H${LIT.x0 - 12}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />

        {/* Brabantio's window: dark behind him, the old man leaning out */}
        <path
          d={gothicArch(WIN.x0 - 7, WIN.x1 + 7, WIN.top - 7, BALCONY.top)}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <g clipPath={`url(#${win})`}>
          <rect
            x={WIN.x0}
            y={WIN.top}
            width={WIN.x1 - WIN.x0}
            height={BALCONY.top - WIN.top}
            fill={INK}
          />
          <path
            d={
              gouge(WIN.x0 + 8, WIN.top + 40, WIN.x0 + 8, BALCONY.top, 1) +
              gouge(WIN.x1 - 8, WIN.top + 40, WIN.x1 - 8, BALCONY.top, 1)
            }
            fill={PAPER}
          />
          <Person pose={BRABANTIO} at={[690, 250]} scale={1.04} flip />
        </g>
        {/* the balcony: its rail, balusters and slab */}
        <path
          d={`M${BALCONY.x0} ${BALCONY.top}H${BALCONY.x1}V${BALCONY.top + 7}H${BALCONY.x0}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <path
          d={[0, 1, 2, 3, 4, 5, 6, 7, 8]
            .map((k) => {
              const x = BALCONY.x0 + 8 + k * 13.2
              return `M${n(x - 3)} ${BALCONY.top + 8}C${n(x - 5)} ${BALCONY.top + 14} ${n(x - 5)} ${BALCONY.top + 18} ${n(x - 2)} ${BALCONY.top + 24}H${n(x + 2)}C${n(x + 5)} ${BALCONY.top + 18} ${n(x + 5)} ${BALCONY.top + 14} ${n(x + 3)} ${BALCONY.top + 8}Z`
            })
            .join('')}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1}
        />
        <path
          d={`M${BALCONY.x0 - 4} ${BALCONY.top + 24}H${BALCONY.x1 + 4}V${BALCONY.top + 31}H${BALCONY.x0 - 4}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />

        {/* the door, shut, and the torch burning in its bracket beside it */}
        <path
          d={gothicArch(DOOR.x0, DOOR.x1, DOOR.top, PAVE, 0.7)}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />
        <path
          d={
            [612, 630, 648].map((x) => gouge(x, DOOR.top + 30, x, PAVE - 4, 1.1)).join('') +
            gouge(DOOR.x0 + 6, 226, DOOR.x1 - 6, 226, 1.2)
          }
          fill={PAPER}
        />
        <path d={m.torchGlow} fill={PAPER} />
        <WallTorch wall={[582, 200]} at={TORCH} />

        {/* the street, lit from the torch */}
        <rect x={0} y={PAVE} width={W} height={H - PAVE} fill={INK} />
        <path d={m.street} fill={PAPER} />
        <rect x={0} y={PAVE} width={W} height={2.4} fill={PAPER} />

        {/* Iago a step back, and Roderigo calling up at the window */}
        <Person pose={IAGO} at={[292, FEET]} scale={1.1} />
        <Person pose={RODERIGO} at={[418, FEET]} scale={1.1} />
      </g>
    </>
  )
}

export const iagoWakesVenice: LinocutArt = { width: W, height: H, Draw: IagoWakesVenice }
