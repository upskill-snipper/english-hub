import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { ROW_W, grassTufts, inkRows, tick } from './open-air'
import { Person, type P } from './people'

/**
 * Act 3, Scene 4: "Poor Tom in the hovel", the eleventh moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1532, src/data/full-texts/king-lear.ts):
 *
 * - "A part of the Heath with a Hovel." "Storm continues." It is night: "The
 *   tyranny of the open night's too rough For nature to endure", "this
 *   tyrannous night". So the sky is black, cut with driven rain, and lit low
 *   behind the clouds, so that the people stand dark against it.
 * - The hovel: "Here is the place, my lord; good my lord, enter". Edgar has
 *   been lying in it: "What art thou that dost grumble there i' the straw?
 *   Come forth." So a low thatched hut on the left, its door dark, straw
 *   trodden out of it on to the heath. "Through the sharp hawthorn blows the
 *   cold wind": a thorn tree, bent by the wind, over its roof.
 * - Edgar, "disguised as a madman", is Poor Tom as the kit (./people.tsx)
 *   cuts him, from his own words in 2.3, and decently covered: "he reserv'd
 *   a blanket, else we had been all shamed". He is "a-cold" ("Tom's a-cold",
 *   three times), so he stands hunched just out of the door, and holds out
 *   an open hand: "Who gives anything to poor Tom?", "Do poor Tom some
 *   charity". He is drawn as a man in rags, not as a madman: his madness is
 *   a disguise, and the print does not mock it. (His arms were first wrapped
 *   round him against the cold; in profile, at panel size, the near hand
 *   read as reaching over his shoulder.)
 * - Lear: "Thou art the thing itself: unaccommodated man is no more but such
 *   a poor, bare, forked animal as thou art. Off, off, you lendings! Come,
 *   unbutton here. [Tears off his clothes.]" So the King faces Tom with one
 *   open hand held out to him, and with the other pulls at the fur collar of
 *   his own gown. He is still covered: the moment is his reaching for the
 *   fastening, not a man undressed. Bareheaded, his white hair and beard as
 *   the kit cuts them; no mantle, which is for the court.
 * - Kent, as Caius, has been urging him in all scene ("Good my lord, enter
 *   here"; "How fares your grace?"), so he reaches an open hand towards the
 *   King's shoulder, not touching it.
 * - The Fool: "Look, here comes a walking fire." So he points past them to
 *   the right, where Gloucester comes ("Enter Gloucester with a torch"),
 *   holding the torch high. Its flame is the panel's one red: the only warmth
 *   on the heath, and the help that is coming ("bring you where both fire and
 *   food is ready"). Gloucester is not yet blind, and the kit cuts him so.
 *
 * Nothing is taken from a film or stage production. Seeds: 1101 (sky), 1102
 * (rain), 1103 (heath), 1104 (grass), 1105 (thatch and straw), 1106 (thorn),
 * 1107 (the torch's light).
 */

const W = 860
const H = 340
/** The far edge of the heath. */
const HORIZON = 244

/** Gloucester, coming in from the right, and the torch held up in his near hand. */
const GLOUCESTER: P = [722, 296]
const GLOUCESTER_S = 0.86
const TORCH_ARM: P[] = [
  [2, -128],
  [26, -134],
  [34, -162],
]
/** The torch's flame in Gloucester's frame, and where it burns on the print. */
const FLAME_LOCAL: P = [28, -222]
/** The kit's own size for Gloucester (SIZE in ./people.tsx). */
const KIT_GLOUCESTER = 0.97
const FLAME: Pt = [
  GLOUCESTER[0] - FLAME_LOCAL[0] * GLOUCESTER_S * KIT_GLOUCESTER,
  GLOUCESTER[1] + FLAME_LOCAL[1] * GLOUCESTER_S * KIT_GLOUCESTER,
]

type Marks = {
  sky: string
  rain: string
  ground: string[]
  tufts: string
  thatch: string
  walls: string
  straw: string
  thorn: string
  glow: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The storm sky at night: black overhead, lit low behind the clouds over
  // the middle of the heath, so the people stand dark against it.
  const sky = gougeField(
    rng(1101),
    { x0: 0, x1: W, y0: 4, y1: HORIZON },
    (x, y) =>
      clamp(
        0.04 +
          Math.max(0, 1 - Math.hypot((x - 400) * 0.42, (y - 250) * 1.1) / 200) * 1.15 +
          Math.max(0, 1 - (HORIZON - y) / 70) * 0.35 +
          Math.max(0, 1 - Math.hypot(x - FLAME[0], y - FLAME[1]) / 120) * 0.25,
      ),
    { spacing: 7, len: [36, 130], gap: [8, 26], max: 3.8 },
  )
  // Rain driven from the left by the wind, cut as fine slanting strokes.
  const rr = rng(1102)
  let rain = ''
  for (let i = 0; i < 90; i++)
    rain += tick(between(rr, -40, W), between(rr, 0, HORIZON - 20), 70, between(rr, 14, 26))
  // The heath: pale where the light from the sky falls in the middle, dark
  // towards the edges and the foot of the print.
  const ground = inkRows(rng(1103), { x0: 0, x1: W, y0: HORIZON + 3, y1: H + 4 }, (x, y) =>
    clamp(
      0.08 +
        Math.pow(Math.abs(x - 440) / 470, 1.6) * 0.9 +
        Math.pow((y - HORIZON) / (H - HORIZON), 2) * 0.55 -
        Math.max(0, 1 - Math.hypot(x - FLAME[0], (y - 300) * 2.4) / 110) * 0.35,
    ),
  )
  // Rough grass, bent by the wind from the left.
  const tufts = grassTufts(rng(1104), HORIZON + 14, H - 4, W, 12)
  // The hovel's thatch: rows of straws hanging down the slope.
  const rt = rng(1105)
  let thatch = ''
  for (let row = 0; row < 10; row++) {
    const t = row / 9
    const y0 = 128 + t * 86
    const half = 6 + t * 106
    for (let k = 0; k < 10 + row * 3; k++) {
      const u = between(rt, -1, 1)
      thatch += tick(108 + u * half, y0 + Math.abs(u) * 4, 90 + u * 14, between(rt, 6, 11))
    }
  }
  // The walls: rough upright boards.
  let walls = ''
  for (let x = 22; x < 200; x += 7) {
    if (x > 72 && x < 144) continue
    walls += `M${n(x + between(rt, -1, 1))} 218V${n(298 - between(rt, 0, 4))}`
  }
  // Straw trodden out of the doorway, where Tom lay.
  let straw = ''
  for (let i = 0; i < 26; i++) {
    const x = between(rt, 82, 150)
    straw += tick(
      x,
      between(rt, 294, 306),
      between(rt, -20, 20) + (x < 114 ? 180 : 0),
      between(rt, 7, 14),
    )
  }
  // "Through the sharp hawthorn blows the cold wind": a thorn tree behind the
  // hovel, bent by the wind, its twigs streaming away to the right over the
  // roof.
  const rh = rng(1106)
  let thorn = ''
  const twig = (x: number, y: number, a: number, len: number, w: number, depth: number) => {
    const x2 = x + Math.cos(deg(a)) * len
    const y2 = y + Math.sin(deg(a)) * len
    thorn += ribbon(
      [
        [x, y],
        [(x + x2) / 2, (y + y2) / 2 + between(rh, -2, 2)],
        [x2, y2],
      ],
      w,
      0.6,
      false,
    )
    if (depth > 0) {
      twig(x2, y2, a + between(rh, 10, 26), len * 0.74, w * 0.64, depth - 1)
      twig(x2, y2, a - between(rh, 6, 24), len * 0.68, w * 0.6, depth - 1)
    }
  }
  twig(34, 200, -62, 66, 12, 0)
  twig(64, 142, -30, 40, 8, 3)
  twig(60, 150, -74, 34, 6.4, 3)
  const glow = rays(rng(1107), FLAME[0], FLAME[1], { from: 16, to: 92, every: 8, width: 3 })
  cached = { sky, rain, ground, tufts, thatch, walls, straw, thorn, glow }
  return cached
}

/**
 * The torch held up in Gloucester's near hand, in his frame: a stick with its
 * head bound in pitched rags, and the flame blown back by the wind behind him
 * (his frame's -x), away from his face, in three tongues round a white-hot
 * core. Cut as tongues, not as one rounded shape: a single red cup on a stick
 * read as a tulip.
 */
/** The shaft above his fist (the fist closes round it below). */
const TORCH_SHAFT = 'M33.8 -175L35.6 -196'
const TORCH_HEAD = 'M30.4 -186L39.6 -187L38.6 -200L30 -199Z'
const FLAME_D =
  'M30 -199C24 -206 14 -214 4 -230C14 -226 20 -224 25 -222C20 -232 16 -242 16 -252C24 -242 30 -234 33 -228C32 -236 30 -242 30 -246C38 -236 42 -222 40 -199Z'
const FLAME_CORE = 'M32.6 -201C29 -208 28 -214 29 -220C33 -214 35.6 -208 36 -201Z'

function Torch() {
  return (
    <g transform="translate(1.6 2)">
      <path d={TORCH_SHAFT} stroke={PAPER} strokeWidth={8.4} strokeLinecap="round" />
      <path d={TORCH_SHAFT} stroke={INK} strokeWidth={5.4} strokeLinecap="round" />
      <path d={TORCH_HEAD} fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" />
      <path d="M31 -191.4L39 -192.4M30.6 -196L38.8 -196.8" stroke={PAPER} strokeWidth={1} />
      <g className="lc-flicker">
        <path d={FLAME_D} fill={RED} />
        <path d={FLAME_CORE} fill={PAPER} />
      </g>
    </g>
  )
}

function PoorTomInTheHovel({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <defs>
        <clipPath id={`${uid}-roof`}>
          <path d="M-6 222L108 116L224 222Z" />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [330, 200], push: 1.03 })}>
        <path d={m.sky} fill={PAPER} />
        <g className="lc-drift">
          <path d={m.rain} stroke={PAPER} strokeWidth={1.1} strokeLinecap="round" />
        </g>
        <path d={m.glow} fill={PAPER} />
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
        {m.ground.map((d, i) => (
          <path key={i} d={d} stroke={INK} strokeWidth={ROW_W[i]} strokeLinecap="round" />
        ))}
        <path d={m.tufts} stroke={INK} strokeWidth={1.4} strokeLinecap="round" />

        {/* the hawthorn behind the hovel */}
        <path d={m.thorn} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.thorn} fill={INK} />

        {/* the hovel, its door dark, straw trodden out of it */}
        <rect
          x={14}
          y={212}
          width={192}
          height={92}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={m.walls} stroke={PAPER} strokeWidth={1.4} />
        <path
          d="M76 304V246Q76 228 108 228Q140 228 140 246V304Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />
        <path d="M-6 222L108 116L224 222Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <g clipPath={`url(#${uid}-roof)`}>
          <path d={m.thatch} stroke={PAPER} strokeWidth={1.3} strokeLinecap="round" />
        </g>
        <path d={m.straw} stroke={PAPER} strokeWidth={1.4} strokeLinecap="round" />

        {/* Poor Tom, hunched against the cold, one hand held out for charity */}
        <Person
          at={[176, 316]}
          pose={{
            look: 'tom',
            body: { neck: [7, -134], hip: [0, -70] },
            head: { at: [11, -156], rot: 6 },
            far: {
              pts: [
                [10, -130],
                [16, -108],
                [4, -112],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -128],
                [18, -106],
                [36, -104],
              ],
              hand: 'open',
              deg: -16,
            },
            legs: {
              far: [
                [-3, -70],
                [-1, -36],
                [-7, -3],
              ],
              near: [
                [3, -70],
                [10, -38],
                [6, -3],
              ],
            },
          }}
        />

        {/* Lear, facing him: one hand held out to him, the other at his own collar */}
        <Person
          at={[320, 318]}
          flip
          pose={{
            look: 'lear',
            mantle: false,
            head: { rot: 8 },
            far: {
              pts: [
                [4, -128],
                [24, -110],
                [44, -110],
              ],
              hand: 'open',
              deg: -8,
              thumb: -1,
            },
            near: {
              pts: [
                [-2, -128],
                [14, -106],
                [10, -128],
              ],
              hand: 'grip',
              deg: -100,
            },
          }}
        />

        {/* Kent, as Caius, reaching towards the King's shoulder */}
        <Person
          at={[428, 310]}
          scale={0.95}
          flip
          pose={{
            look: 'caius',
            head: { rot: 4 },
            far: {
              pts: [
                [-2, -130],
                [-6, -98],
                [-4, -72],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [2, -130],
                [20, -116],
                [38, -118],
              ],
              hand: 'open',
              deg: -12,
              thumb: -1,
            },
          }}
        />

        {/* the Fool, pointing at the torch coming over the heath */}
        <Person
          at={[508, 306]}
          scale={0.95}
          pose={{
            look: 'fool',
            head: { rot: -6 },
            far: {
              pts: [
                [-2, -128],
                [-8, -100],
                [4, -84],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [2, -128],
                [24, -128],
                [46, -136],
              ],
              hand: 'point',
              deg: -18,
            },
            legs: {
              far: [
                [-3, -70],
                [-10, -36],
                [-14, -3],
              ],
              near: [
                [3, -70],
                [8, -36],
                [9, -3],
              ],
            },
          }}
        />

        {/* Gloucester, coming with a torch */}
        <Person
          at={GLOUCESTER}
          scale={GLOUCESTER_S}
          flip
          pose={{
            look: 'gloucester',
            far: {
              pts: [
                [-2, -128],
                [-4, -98],
                [6, -80],
              ],
              hand: 'mitt',
            },
            near: { pts: TORCH_ARM, hand: 'grip', deg: -84 },
          }}
        >
          <Torch />
        </Person>
      </g>
    </>
  )
}

export const poorTomInTheHovel: LinocutArt = { width: W, height: H, Draw: PoorTomInTheHovel }
