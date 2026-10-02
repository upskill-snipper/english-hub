import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wave,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  CASTLE_RIGHT,
  CastleFront,
  GATE,
  GROUND,
  H,
  HORIZON,
  Stocks,
  W,
  castleMarks,
  countryMarks,
} from './gloucesters-castle'
import { Person } from './people'

/**
 * Act 2, Scene 4: "Stripped of his knights". The end of the scene, as the
 * storm breaks. Goneril has asked "What need you five-and-twenty? Ten? Or
 * five?", Regan "What need one?", and Lear will not weep in front of them:
 *
 *   "I have full cause of weeping; but this heart Shall break into a hundred
 *   thousand flaws Or ere I'll weep." ... "O fool, I shall go mad!"
 *
 * with the stage direction "Storm and tempest" in the same speech, and then
 * "Exeunt Lear, Gloucester, Kent and Fool."
 *
 * Every detail is from the scene (the held edition, src/data/full-texts/
 * king-lear.ts):
 * - "Before Gloucester's Castle": the same gate as "Kent in the stocks"
 *   (./gloucesters-castle.tsx), at nightfall ("Alack, the night comes on,
 *   and the high winds Do sorely ruffle"), with the storm beginning: rain
 *   slants in on the wind from the right and lightning flashes far off.
 * - "Kent here set at liberty": the stocks stand empty by the gate.
 * - "O Regan, wilt thou take her by the hand?" The sisters stand together
 *   before the gate, hand in hand: the kit's 'goneril', veiled, her brow
 *   banded and frowning, and 'regan', her hair in a knot. Beside them stands
 *   Cornwall, the kit's 'cornwall', frowning: "the fiery quality of the
 *   Duke".
 * - The gate stands open on the lit hall that is shut against the King a few
 *   lines later ("Shut up your doors, my lord; 'tis a wild night."). A torch
 *   burns in a bracket high over the gate, the one red in the panel, well
 *   clear of every face.
 * - Lear, the kit's 'lear', bareheaded, has turned his back on them and the
 *   house. One hand is pressed to his heart ("O me, my heart, my rising
 *   heart!" earlier in the scene; "this heart Shall break"), and he speaks
 *   down to the Fool, who holds his other hand and looks up at him: the
 *   gesture is the print's, set against the sisters' joined hands. Kent,
 *   still Caius and hooded, follows them out. Gloucester, who goes out with
 *   them and comes straight back, and Oswald are left out of the picture.
 * - Lear wears his gown with its fur collar and no mantle, as he does on the
 *   heath, at the hovel and at the farmhouse the same night, so he is dressed
 *   the same from the gate to the farmhouse. The kit puts no flush on a
 *   bearded face, so his rage is in his turned back and his hand on his
 *   heart, not in colour.
 *
 * Nothing is taken from a film or stage production.
 *
 * Seeds: 9201 (the sky, the cloud, the rain and the ground), 9203 (the far
 * country), 9205 (the castle front), 7302 (the stocks' grain).
 */

/** Where the lightning flashes, far off on the right. */
const FLASH: [number, number] = [760, 70]

const skyLight = (x: number, y: number) =>
  clamp(0.9 - Math.hypot((x - FLASH[0]) * 0.7, (y - FLASH[1]) * 1.1) / 260, 0.03)
/** The castle in the dusk, lit only round the open gate. */
const castleLight = (x: number, y: number) =>
  clamp(0.75 - Math.hypot((x - 199) * 0.9, (y - 240) * 0.8) / 170, 0.06)
const landLight = (x: number, y: number) => clamp(0.4 - Math.abs(x - FLASH[0]) / 500) * 0.6

type Marks = { sky: string; clouds: string; rain: string; country: string; ground: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(9201)
  const sky = gougeField(r, { x0: CASTLE_RIGHT - 20, x1: W, y0: 6, y1: HORIZON }, skyLight, {
    spacing: 5.6,
    len: [20, 90],
    gap: [6, 20],
    max: 4.4,
  })
  // Rolling banks of cloud: heavy ribbons along waves, drifting in from the right.
  let clouds = ''
  for (let k = 0; k < 7; k++) {
    const y = 26 + k * 24 + between(r, -6, 6)
    const x0 = CASTLE_RIGHT + between(r, -40, 120)
    clouds += ribbon(
      wave(
        x0,
        x0 + between(r, 180, 360),
        y,
        between(r, 3, 7),
        between(r, 70, 120),
        between(r, 0, 6),
        24,
      ),
      between(r, 3, 6),
      0.8,
    )
  }
  // The first of the rain, slanting in on the wind.
  let rain = ''
  for (let i = 0; i < 90; i++) {
    const x = between(r, CASTLE_RIGHT, W + 60)
    const y = between(r, 10, GROUND)
    const len = between(r, 10, 24)
    rain += `M${n(x)} ${n(y)}l${n(-len * 0.42)} ${n(len)}`
  }
  const country = countryMarks(9203, landLight)
  let ground = ''
  for (let y = GROUND + 3; y < H; y += 3.4 + (y - GROUND) * 0.05) {
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 20, 80)
      // the light from the open gate falls in a fan on the ground before it
      const L = clamp(
        0.95 - Math.abs(x + len / 2 - 199 - (y - GROUND) * 0.4) / (60 + (y - GROUND) * 1.6),
      )
      if (r() < 0.3 + (1 - L) * 0.7)
        ground += gouge(x, y, x + len, y + between(r, -0.4, 0.4), 0.5 + (1 - L) * 2.2)
      x += len + between(r, 4, 16)
    }
  }
  cached = { sky, clouds, rain, country, ground }
  return cached
}

/** The hall seen through the open gate: lit, its doors swung back, its far wall and floor. */
function Hall({ uid }: { uid: string }) {
  const clip = `${uid}-hall`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={GATE} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect x={150} y={130} width={100} height={140} fill={PAPER} />
        {/* the doors swung back against the passage walls */}
        <path d="M154 140L170 150V262H154Z M244 140L228 150V262H244Z" fill={INK} />
        <path d="M162 150V262M236 150V262" stroke={PAPER} strokeWidth={0.9} />
        {/* the far wall and floor of the passage */}
        <path
          d="M170 236H228M170 236L154 262M228 236L244 262"
          stroke={INK}
          strokeWidth={1.4}
          fill="none"
        />
      </g>
    </g>
  )
}

function StrippedOfHisKnights({ uid }: ArtProps) {
  const m = marks()
  const c = castleMarks(9205, castleLight)
  return (
    <g className="lc-push" style={timing({ origin: [430, 220], push: 1.03 })}>
      {/* the storm coming on: a dark sky, cloud banks, a flash far off */}
      <path d={m.sky} fill={PAPER} />
      <path d={m.clouds} fill={INK} />
      <g className="lc-fade-in" style={timing({ delay: 1, dur: 0.5 })}>
        <path
          d={`M${FLASH[0] + 30} 6L${FLASH[0] + 8} 52L${FLASH[0] + 22} 56L${FLASH[0] - 4} 112L${FLASH[0] - 10} ${HORIZON - 30}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={3}
          strokeLinejoin="bevel"
        />
      </g>
      <rect
        x={CASTLE_RIGHT}
        y={HORIZON}
        width={W - CASTLE_RIGHT}
        height={GROUND - HORIZON}
        fill={INK}
      />
      <path d={m.country} fill={PAPER} />
      <g className="lc-drift-r" style={timing({ dur: 3 })}>
        <path d={m.rain} stroke={PAPER} strokeWidth={1} strokeLinecap="round" />
      </g>
      <CastleFront m={c} open hall={<Hall uid={uid} />} />
      {/* a torch in its bracket over the gate, high above every head */}
      <path d="M199 118V100M193 118H205" stroke={PAPER} strokeWidth={5} strokeLinecap="round" />
      <path d="M199 118V100M193 118H205" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
      <path
        className="lc-flicker"
        style={timing({ dur: 0.8, delay: 0.4 })}
        d="M199 100C194.6 95 195.4 88 199 80C202.6 88 203.4 95 199 100Z"
        fill={RED}
      />
      {/* the ground before the gate, the gate's light falling on it */}
      <rect x={0} y={GROUND} width={W} height={H - GROUND} fill={PAPER} />
      <path d={m.ground} fill={INK} />
      <Stocks transform="translate(330 300)" empty />

      {/* Cornwall beside the gate, and the sisters hand in hand before it */}
      <Person
        pose={{
          look: 'cornwall',
          near: {
            pts: [
              [5, -128],
              [12, -104],
              [10, -82],
            ],
            hand: 'mitt',
          },
        }}
        at={[110, 300]}
        scale={0.9}
      />
      <Person
        pose={{
          look: 'goneril',
          near: {
            pts: [
              [5, -122],
              [16, -102],
              [30, -96],
            ],
            hand: 'grip',
            deg: 10,
          },
        }}
        at={[172, 296]}
        scale={0.92}
      />
      <Person
        pose={{
          look: 'regan',
          far: {
            pts: [
              [-4, -122],
              [-14, -104],
              [-24, -98],
            ],
            hand: 'grip',
            deg: 170,
          },
          near: {
            pts: [
              [5, -122],
              [10, -100],
              [12, -80],
            ],
            hand: 'mitt',
          },
        }}
        at={[222, 298]}
        scale={0.92}
      />

      {/* Kent following, and Lear turning out into the storm with the Fool */}
      <Person
        pose={{
          look: 'caius',
          head: { rot: 4 },
          legs: {
            far: [
              [-3, -70],
              [-12, -38],
              [-20, -3],
            ],
            near: [
              [3, -70],
              [12, -38],
              [16, -3],
            ],
          },
        }}
        at={[450, 326]}
      />
      <Person
        pose={{
          look: 'lear',
          mantle: false,
          head: { rot: 10 },
          far: {
            pts: [
              [-2, -128],
              [16, -106],
              [32, -92],
            ],
            hand: 'grip',
            deg: 18,
          },
          near: {
            pts: [
              [6, -128],
              [14, -106],
              [4, -108],
            ],
            hand: 'open',
            deg: 200,
          },
        }}
        at={[566, 328]}
        scale={1.07}
      />
      <Person
        pose={{
          look: 'fool',
          head: { rot: -14 },
          near: {
            pts: [
              [5, -126],
              [14, -110],
              [26, -112],
            ],
            hand: 'grip',
            deg: 170,
          },
        }}
        at={[624, 330]}
        scale={1.07}
        flip
      />
    </g>
  )
}

export const strippedOfHisKnights: LinocutArt = { width: W, height: H, Draw: StrippedOfHisKnights }
