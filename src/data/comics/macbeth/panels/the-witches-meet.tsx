import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wave,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Witch } from './witch'

/**
 * Act 1, Scene 1: "The witches meet", the first moment in the guide's
 * timeline. Every detail is from the scene or from the play's own description
 * of the witches:
 *
 * - "Thunder and lightning. Enter three Witches." "When shall we three meet
 *   again? / In thunder, lightning, or in rain?" So a storm: a bolt of
 *   lightning splitting the sky between them, rain driving across the right.
 * - "When the hurly-burly's done, / When the battle's lost and won." The battle
 *   is still being fought, so it burns on the far horizon: the spot colour
 *   marks its fires, and nothing else in the panel.
 * - "Upon the heath." A bare, open heath and one dead thorn, no house or road.
 * - "I come, Graymalkin!" "Paddock calls." Their familiars, a cat and a toad,
 *   wait on the ground.
 * - "Fair is foul, and foul is fair, / Hover through the fog and filthy air."
 *   So they stand in a bank of fog that hides their feet.
 * - The scene does not describe them. Banquo does, in Act 1, Scene 3, and the
 *   figures are drawn from his words in ./witch.tsx, where the reasons are.
 *
 * Nothing is taken from a film or stage production. Seeds: 211 (sky), 212
 * (heath), 213 (fog), 214 (rain), 215 (smoke).
 */

const W = 860
const H = 340
const HORIZON = 236

type Marks = {
  sky: string
  rain: string
  heath: string
  fog: string
  smoke: [number, number, number][][]
  hills: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The sky is lit by the bolt between the witches and, low on the right, by
  // the glow of the battle; the storm keeps the top corners dark.
  const light = (x: number, y: number) => {
    const bolt = clamp(1 - Math.hypot((x - 400) * 0.7, (y - 124) * 1.05) / 300)
    const low = clamp(1 - (HORIZON - y) / 56) * 0.4
    const battle = clamp(1 - Math.hypot(x - 792, (y - 200) * 1.2) / 130) * 0.85
    return Math.max(bolt, low, battle, 0.03)
  }
  const sky = gougeField(rng(211), { x0: 0, x1: W, y0: 4, y1: HORIZON - 6 }, light, {
    spacing: 7.4,
    len: [20, 84],
    gap: [6, 22],
  })

  // Rain driving from the left, in the darker sky to the right.
  const rr = rng(214)
  let rain = ''
  for (let i = 0; i < 44; i++) {
    const x = between(rr, 600, 856)
    const y = between(rr, 8, 170)
    const len = between(rr, 12, 22)
    rain += gouge(x, y, x + len * 0.34, y + len, 0.6)
  }

  // Far hills: a low ridge along the horizon.
  let hills = `M0 ${HORIZON + 4}`
  for (let x = 0; x <= W; x += 12)
    hills += `L${x} ${n(HORIZON - 7 - 5 * Math.sin(x / 70) - 3 * Math.sin(x / 23 + 1))}`
  hills += `L${W} ${HORIZON + 4}Z`

  // Heather on the heath: small fans of three cuts, nearer rows larger.
  const rg = rng(212)
  let heath = ''
  for (let y = HORIZON + 6; y < H; y += 8 + (y - HORIZON) * 0.12) {
    const s = 0.7 + (y - HORIZON) / 110
    for (let x = between(rg, -10, 10); x < W; x += between(rg, 22, 44) * s) {
      if (rg() < 0.4) continue
      for (let k = -1; k <= 1; k++) {
        const len = between(rg, 4, 7) * s
        const a = deg(-90 + k * 22 + between(rg, -6, 6))
        heath += gouge(x, y, x + Math.cos(a) * len, y + Math.sin(a) * len, 0.5 + s * 0.3)
      }
    }
  }

  // "Hover through the fog": white streaks lying across the heath, thickest
  // in a band at the witches' feet, so the hems are lost in them. Never solid:
  // there is always ink between two streaks, or it reads as snow.
  const rf = rng(213)
  let fog = ''
  for (let y = 244; y < 318; y += 5) {
    const dense = clamp(1 - Math.abs(y - 270) / 34)
    let x = between(rf, -60, -10)
    while (x < W + 20) {
      const len = between(rf, 50, 170)
      if (rf() < 0.35 + dense * 0.65)
        fog += ribbon(
          wave(x, x + len, y, between(rf, 0.8, 1.8), between(rf, 70, 120), between(rf, 0, 6), 7),
          1 + dense * 4.4 * between(rf, 0.85, 1.1),
          0.6,
        )
      x += len * (0.7 + (1 - dense) * 0.3) + between(rf, 3, 20) * (1.2 - dense)
    }
  }

  // Smoke from the battle: billows swelling as they rise and lean away on
  // the wind, black against the glow. Drawn as overlapping rounds whose union
  // is the cloud, with a white curl cut into the top of each.
  const rs = rng(215)
  const smoke: [number, number, number][][] = []
  for (const [x0, lean] of [
    [740, 1],
    [786, 1.3],
    [834, 0.8],
  ]) {
    const puffs: [number, number, number][] = []
    let y = HORIZON - 12
    for (let t = 0; t < 7; t++) {
      const r = 3.4 + t * 2 + between(rs, -0.5, 0.5)
      puffs.push([x0 + (t * t * 0.9 + t * 2.4) * lean + between(rs, -1.5, 1.5), y, r])
      y -= r * 0.95
    }
    smoke.push(puffs)
  }

  cached = { sky, rain, heath, fog, smoke, hills }
  return cached
}

/** The bolt: a jagged ribbon from the top of the sky to the heath, with one branch. */
const BOLT = ribbon(
  [
    [384, 0],
    [396, 34],
    [380, 52],
    [404, 96],
    [390, 112],
    [412, 160],
    [404, 176],
    [420, 232],
  ],
  9,
  0.6,
  false,
)
const BOLT_BRANCH = ribbon(
  [
    [392, 106],
    [372, 132],
    [380, 144],
    [362, 184],
  ],
  4.6,
  0.6,
  false,
)

/** The battle's fires on the horizon: [x, height]. */
const FIRES: [number, number][] = [
  [740, 18],
  [786, 24],
  [834, 16],
]

/** A fire of three tongues leaning on the wind, its base on the horizon. */
function flame(x: number, h: number) {
  const b = HORIZON - 3
  const tongue = (cx: number, th: number, w: number) =>
    `M${n(cx - w)} ${b}Q${n(cx - w * 0.7)} ${n(b - th * 0.55)} ${n(cx + 3)} ${n(b - th)}Q${n(cx + w * 0.5)} ${n(b - th * 0.45)} ${n(cx + w)} ${b}Z`
  return tongue(x, h, 5) + tongue(x - 6, h * 0.6, 4) + tongue(x + 6, h * 0.7, 4)
}

/** A dead thorn on the heath, bent by the wind. */
const THORN = [
  ribbon(
    [
      [66, 266],
      [70, 232],
      [78, 202],
      [92, 172],
      [106, 150],
    ],
    17,
    0.35,
    false,
  ),
  ribbon(
    [
      [90, 178],
      [70, 162],
      [50, 152],
      [32, 150],
    ],
    8,
    0.5,
    false,
  ),
  ribbon(
    [
      [102, 156],
      [120, 138],
      [138, 132],
      [156, 136],
    ],
    7,
    0.5,
    false,
  ),
  ribbon(
    [
      [106, 152],
      [108, 128],
      [118, 112],
      [132, 102],
    ],
    6.4,
    0.5,
    false,
  ),
  ribbon(
    [
      [78, 204],
      [58, 198],
      [42, 188],
    ],
    6,
    0.5,
    false,
  ),
  ribbon(
    [
      [64, 160],
      [56, 142],
      [58, 124],
    ],
    4.4,
    0.5,
    false,
  ),
  ribbon(
    [
      [126, 136],
      [136, 120],
      [150, 114],
    ],
    4,
    0.5,
    false,
  ),
  ribbon(
    [
      [48, 152],
      [40, 138],
    ],
    3.4,
    0.5,
    false,
  ),
]

/** Graymalkin: a cat with its back arched, facing the witches. Feet on y = 44. */
const CAT =
  'M9 44L10 32C6 26 8 16 14 10C20 4 30 1 38 5C42 7 44 10 45 12L46 5L49 1L51 8C53 7.5 55 8 56 8.5L58 2L59.5 11C62 14 62 20 59 24C57 26 54 27 51 27L50 44L45.5 44L45 31C40 28 33 26 26 27C21 28 17 31 16 34L15.5 44Z'
const CAT_TAIL = ribbon(
  [
    [11, 24],
    [5, 14],
    [4, 2],
    [9, -6],
  ],
  6,
  0.3,
  false,
)

/** Paddock: a squat toad, facing the cat. Feet on y = 22. */
const TOAD =
  'M2 28C0 20 4 13 12 10C16 6 22 4 27 6C30 2.5 36 2.5 38 7C42 9 45 13 46.5 18L44 20C45 22 45 25 43.5 28L39 28L38 24C34 25 30 25 26 26L24 28Z'

function Heath(_: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [420, 170], push: 1.03 })}>
      {/* the storm sky, cut away round the lightning and the far fires */}
      <path d={m.sky} fill={PAPER} />
      <path d={m.rain} fill={PAPER} />
      <g className="lc-glow" style={timing({ delay: 0.4 })}>
        <path d={BOLT} fill={PAPER} stroke={PAPER} strokeWidth={1.2} />
        <path d={BOLT_BRANCH} fill={PAPER} />
      </g>

      {/* the battle still burning on the horizon */}
      {m.smoke.map((puffs, k) => (
        <g key={k} className="lc-rise" style={timing({ delay: 0.5 + k * 0.3, dur: 2.4 })}>
          <g fill={PAPER} stroke={PAPER} strokeWidth={3}>
            {puffs.map(([x, y, r]) => (
              <circle key={`${x}-${y}`} cx={n(x)} cy={n(y)} r={n(r)} />
            ))}
          </g>
          <g fill={INK}>
            {puffs.map(([x, y, r]) => (
              <circle key={`${x}-${y}`} cx={n(x)} cy={n(y)} r={n(r)} />
            ))}
          </g>
          <path
            d={puffs
              .slice(2)
              .map(
                ([x, y, r]) =>
                  `M${n(x - r * 0.6)} ${n(y - r * 0.2)}q${n(r * 0.5)} ${n(-r * 0.6)} ${n(r * 1.1)} ${n(-r * 0.1)}`,
              )
              .join('')}
            fill="none"
            stroke={PAPER}
            strokeWidth={1}
            strokeLinecap="round"
          />
        </g>
      ))}
      <path d={m.hills} fill={INK} />
      <g fill={RED}>
        {FIRES.map(([x, h], k) => (
          <path
            key={x}
            className="lc-flicker"
            style={timing({ dur: 0.7 + k * 0.05, delay: 0.2 + k * 0.15 })}
            d={flame(x, h)}
          />
        ))}
        <path d="M722 234C760 229 800 229 850 233L850 238L722 238Z" />
      </g>
      <g stroke={INK} strokeWidth={1.6}>
        {[754, 762, 800, 808, 846].map((x) => (
          <path key={x} d={`M${x} 234L${x + 2} 212`} />
        ))}
      </g>
      <path d={m.heath} fill={PAPER} />

      {/* the dead thorn, white where the lightning catches it */}
      <g fill={INK} stroke={INK} strokeWidth={2.8} strokeLinejoin="round">
        {THORN.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill={PAPER}>
        {THORN.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <path
        d={
          gouge(74, 258, 80, 216, 1.2, -0.6) +
          gouge(79, 204, 88, 184, 1, -0.4) +
          gouge(70, 244, 72, 222, 0.8)
        }
        fill={INK}
      />

      {/* the three witches, black against the lit sky, faces lit by the bolt */}
      <g transform="translate(228 48) scale(0.95)">
        <Witch pose="reach" />
      </g>
      <g transform="translate(598 34) scale(-1 1)">
        <Witch pose="arms" />
      </g>
      <g transform="translate(742 70) scale(-0.9 0.9)">
        <Witch pose="staff" />
      </g>

      {/* the fog they hover through */}
      <g className="lc-drift" style={timing({ delay: 0.2 })}>
        <path d={m.fog} fill={PAPER} />
      </g>

      {/* Graymalkin on a stone, and Paddock nearer the reader */}
      <path d="M146 300C148 288 160 282 180 282C200 282 212 290 214 302Z" fill={INK} />
      <path d={gouge(156, 290, 180, 286, 1.3) + gouge(186, 287, 204, 293, 1.1)} fill={PAPER} />
      <g transform="translate(150 234) scale(1.15)">
        <path d={CAT_TAIL} fill={INK} stroke={PAPER} strokeWidth={1.3} />
        <path d={CAT} fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" />
        <path d={gouge(52.4, 15.4, 56.4, 15, 1)} fill={PAPER} />
        <path d="M20 9L17 3M26 5L25 -1M32 4L33 -2M38 6L41 1" stroke={INK} strokeWidth={2} />
        <path d="M24 12L22 18M31 10L30 17M38 12L37 18" stroke={PAPER} strokeWidth={0.9} />
      </g>
      <path d="M58 340C60 326 76 318 100 318C124 318 138 326 140 340Z" fill={INK} />
      <path d={gouge(70, 328, 96, 322, 1.3) + gouge(104, 322, 126, 328, 1.1)} fill={PAPER} />
      <g transform="translate(66 290) scale(1.3)">
        <path d={TOAD} fill={INK} stroke={PAPER} strokeWidth={1.3} strokeLinejoin="round" />
        <path d="M5 27C8 19 17 18 21 25" stroke={PAPER} strokeWidth={1} fill="none" />
        <circle cx={34} cy={8.4} r={2.8} fill={PAPER} />
        <circle cx={34.6} cy={8.4} r={1.3} fill={INK} />
        <path d="M46 18.6L37 19.6" stroke={PAPER} strokeWidth={1} />
        <g fill={PAPER}>
          <circle cx={14} cy={14} r={1} />
          <circle cx={20} cy={11} r={1} />
          <circle cx={24} cy={16} r={1} />
          <circle cx={29} cy={13} r={1} />
          <circle cx={10} cy={20} r={1} />
        </g>
      </g>
    </g>
  )
}

export const theWitchesMeet: LinocutArt = { width: W, height: H, Draw: Heath }
