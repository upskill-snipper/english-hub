import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  Hand,
  InnerRule,
  PH,
  PW,
  handPaths,
  lerp2,
  once,
  placer,
  portraitGround,
  rimLight,
  smooth,
  strands,
  type HandSpec,
  type Knot,
} from './common'

/**
 * Pip as a boy, as he describes himself, and nothing else. Chapter 8, at
 * Satis House, after Estella has scorned him over the cards ("And what coarse
 * hands he has! And what thick boots!"):
 *
 *   "I took the opportunity of being alone in the courtyard, to look at my
 *   coarse hands and my common boots. My opinion of those accessories was
 *   not favourable. They had never troubled me before, but they troubled me
 *   now, as vulgar appendages."
 *
 * Dickens never describes Pip's face, so this card is drawn from what Pip
 * looks at: a small boy alone in the paved courtyard, sitting on a low stone
 * with his knees up, holding his hands up before him and looking down at
 * them, his brow lifted and his mouth turned down a little ("they troubled
 * me now"); his hands large and square for a boy, the knuckles cut and the
 * backs scored ("my coarse hands"); and on the flagstones a pair of heavy
 * laced boots with thick soles ("my common boots").
 *
 * His dress is from Chapter 7, when Mrs Joe sends him to Satis House: "clean
 * linen of the stiffest character" and "my tightest and fearfullest suit".
 * So he wears a short, tight jacket whose sleeves stop above the wrist, and
 * a stiff white collar. His hair is not described, so it is plain, short and
 * dark. Behind him the wall of the house is in shadow and the flagstones of
 * the courtyard are in the light, so his dark legs and boots stand out
 * against them.
 *
 * SAFEGUARDING. Pip is a child in the first stage of the novel, and this is
 * his card: he is alone, in daylight, with nobody and nothing near him. His
 * crying behind the gate, which follows, is not drawn.
 *
 * Nothing here comes from a film or stage production. Seeds: 7301 for the
 * ground, 7302 for the cuts in the figure.
 */

/** A young boy's head in profile, facing right: a round brow, a small nose, a full cheek, a short neck. */
const BOY_HEAD: Knot[] = [
  [120, 238, 1],
  [118, 214],
  [102, 192],
  [88, 164],
  [82, 128],
  [88, 92],
  [108, 62],
  [140, 44],
  [178, 42],
  [208, 56],
  [224, 80],
  [230, 106],
  [230, 122],
  [226.5, 130, 1],
  [230, 138],
  [235, 146, 1],
  [230.5, 150],
  [224, 151.5, 1],
  [225.5, 154.5],
  [224.5, 158, 1],
  [226, 162],
  [222, 169.5],
  [223.5, 175],
  [217.5, 182],
  [206, 186],
  [194, 188, 1],
  [196, 212],
  [200, 238, 1],
]

/** Plain short dark hair, cropped over the ear and at the nape. */
const HAIR_K: Knot[] = [
  [218, 72],
  [208, 56],
  [184, 42],
  [150, 36],
  [118, 44],
  [94, 62],
  [80, 94],
  [76, 128],
  [82, 164],
  [96, 190],
  [112, 204, 1],
  [124, 194],
  [130, 170],
  [140, 148],
  [152, 126],
  [164, 114],
  [178, 110, 1],
  [186, 100],
  [198, 88],
  [210, 80],
]

/** The head bowed eighteen degrees about the base of the neck: looking down at his hands. */
const F = placer([34.4, -7.1], 0.66, 18, [160, 238])
const HEAD = smooth(F.knots(BOY_HEAD))
const HAIR_PLACED = F.knots(HAIR_K)
const HAIR = smooth(HAIR_PLACED)
const EAR = smooth(
  F.knots([
    [166, 124],
    [158, 120],
    [152, 126],
    [151, 140],
    [155, 150],
    [162, 152],
    [167, 146],
    [168, 134],
  ]),
)

/** Where the neck meets the collar, back and front, on the plate. */
const NAPE = F.pt([120, 226])
const THROAT = F.pt([198, 226])

/** The tight jacket over the bent back, sitting forward. */
const JACKET = smooth([
  [92, 264, 1],
  [86, 230],
  [92, 192],
  [104, 160],
  [NAPE[0] - 4, NAPE[1] + 6],
  [THROAT[0] + 6, THROAT[1] + 4],
  [186, 174],
  [192, 210],
  [186, 248, 1],
])
/** "clean linen of the stiffest character": a stiff white collar standing round the neck. */
const COLLAR = smooth([
  [NAPE[0] - 6, NAPE[1] - 4, 1],
  [THROAT[0] + 4, THROAT[1] - 2, 1],
  [THROAT[0] + 8, THROAT[1] + 10, 1],
  [(NAPE[0] + THROAT[0]) / 2, (NAPE[1] + THROAT[1]) / 2 + 12],
  [NAPE[0] - 4, NAPE[1] + 10, 1],
])

/** The near thigh, from the seat out to the knee, and the shin down to the boot. */
const THIGH = smooth([
  [96, 266, 1],
  [150, 264],
  [208, 256],
  [236, 248],
  [248, 230],
  [236, 214],
  [204, 218],
  [150, 228],
  [100, 232],
])
const SHIN = smooth([
  [216, 246],
  [232, 220],
  [250, 226],
  [257, 252],
  [258, 274, 1],
  [226, 274, 1],
  [224, 262],
])
/** The far leg, a little behind the near one: its shin, down to its boot. */
const FAR_SHIN = smooth([
  [184, 250],
  [200, 232],
  [220, 238],
  [222, 270, 1],
  [190, 270, 1],
  [186, 260],
])

/**
 * A heavy laced boot in profile, its toe to the right: the shaft up the
 * ankle, the instep sloping down to a round toe, the heel at the back, and a
 * thick sole studded with nails. `dx`, `dy` move it.
 */
function boot(dx: number, dy: number): { upper: string; sole: string; nails: Pt[] } {
  const P = (x: number, y: number, c?: 1): Knot => (c ? [x + dx, y + dy, 1] : [x + dx, y + dy])
  return {
    upper: smooth([
      P(226, 262, 1),
      P(254, 260, 1),
      P(258, 274),
      P(272, 286),
      P(294, 293),
      P(306, 300),
      P(308, 306, 1),
      P(212, 306, 1),
      P(214, 290),
      P(220, 274),
    ]),
    sole: `M${n(210 + dx)} ${n(305 + dy)}L${n(310 + dx)} ${n(305 + dy)}L${n(307 + dx)} ${n(313 + dy)}L${n(212 + dx)} ${n(313 + dy)}Z`,
    nails: [218, 228, 254, 268, 282, 296].map((x): Pt => [x + dx, 309 + dy]),
  }
}
const NEAR_BOOT = boot(0, 0)
const FAR_BOOT = boot(-44, -3)

/** The near arm: the upper arm down to the elbow on the knee, the forearm up to the hands. */
const UPPER_ARM = smooth([
  [142, 160],
  [170, 164],
  [198, 204],
  [204, 224],
  [190, 230],
  [176, 218],
  [140, 182],
])
const FOREARM = smooth([
  [186, 226, 1],
  [192, 210],
  [210, 194],
  [226, 174, 1],
  [240, 186, 1],
  [222, 210],
  [206, 230],
  [194, 236, 1],
])
/** The bare wrist, where the tight sleeve stops short. */
const WRIST = 'M224 176L240 189L245 182L230 169Z'

/** A hand held up, its back to us: the knuckles fan out from the wrist, each finger apart. */
function heldHand(wrist: Pt, dir: number, s: number): HandSpec {
  const a = (dir * Math.PI) / 180
  const u: Pt = [Math.cos(a), Math.sin(a)]
  const v: Pt = [-u[1], u[0]]
  const at = (along: number, across: number): Pt => [
    wrist[0] + (u[0] * along + v[0] * across) * s,
    wrist[1] + (u[1] * along + v[1] * across) * s,
  ]
  const finger = (k: Pt, deg: number, len: number): Pt => {
    const b = ((dir + deg) * Math.PI) / 180
    return [k[0] + Math.cos(b) * len * s, k[1] + Math.sin(b) * len * s]
  }
  const knuckles = [at(28, 10.5), at(29, 3.5), at(28, -3.5), at(26, -10)]
  return {
    wrist: [at(0, -8), at(0, 8)],
    knuckles,
    tips: [
      finger(knuckles[0], 10, 23),
      finger(knuckles[1], 2, 25),
      finger(knuckles[2], -6, 23),
      finger(knuckles[3], -14, 18),
    ],
    width: [8, 8.4, 7.8, 6.8].map((w) => w * s),
    bow: [0.8, 0.4, -0.4, -0.8],
    thumb: { root: at(6, 9), tip: at(18, 26), width: 8 * s, bow: 2 },
  }
}
const NEAR_HAND = handPaths(heldHand([233, 180], -56, 1))
const FAR_HAND = handPaths(heldHand([262, 168], -48, 0.96))

/** The low stone he sits on. */
const STONE = 'M24 258L156 258L160 300L20 300Z'
/** The flagstones of the courtyard, running back to the foot of the wall. */
const FLOOR_TOP = 236

type Marks = {
  ground: string
  floor: string
  hair: string
  jacket: string
  legs: string
  boots: string
  stone: string
  coarse: string
}

const marks = once<Marks>(() => {
  // The wall of the house behind him, in shadow; a little light at its top
  // from the open sky over the courtyard.
  const ground = portraitGround(7301, (x, y) =>
    y > FLOOR_TOP ? 0 : clamp(0.42 - y / 520 + ((x - 40) / 290) * 0.25),
  )
  const r = rng(7302)
  // The flagstones in the light: their joints, closer together as they go back.
  let floor = `M8 ${FLOOR_TOP}H324`
  for (const y of [244, 256, 274, 298]) floor += `M8 ${y}H324`
  for (const [y0, y1, step, off] of [
    [FLOOR_TOP, 244, 34, 0],
    [244, 256, 44, 18],
    [256, 274, 60, 6],
    [274, 298, 80, 40],
    [298, 312, 104, 10],
  ])
    for (let x = 8 + off; x < 324; x += step)
      floor += `M${n(x)} ${y0}L${n(x + (x - 166) * 0.12)} ${y1}`
  // Short dark hair, cut in paper strands combed down from the crown, and
  // the light along its top.
  const [cx, cy] = F.pt([150, 128])
  const hair =
    strands(
      r,
      24,
      lerp2(F.pt([204, 64]), F.pt([118, 50])),
      lerp2(F.pt([200, 92]), F.pt([96, 152])),
      [0.4, 0.8],
      2,
    ) + rimLight(r, { cx, cy, rx: 52, ry: 56 }, 190, 330, 28, 0.95)
  // Folds of the tight jacket, pulled across the bent back.
  const jacket =
    gouge(100, 210, 96, 256, 1.4, 1) +
    gouge(112, 180, 106, 226, 1, 1) +
    gouge(176, 176, 186, 214, 1, -1)
  // The trousers' folds at the knee, and the light on the shin.
  const legs =
    gouge(206, 226, 234, 220, 1, -1) +
    gouge(150, 238, 194, 234, 0.9, -0.5) +
    gouge(246, 234, 250, 278, 1.2, -0.5)
  // The boots: the laces crossed up the instep, the line of the toe-cap,
  // and the heel cut off from the sole.
  let boots = ''
  for (const [dx, dy] of [
    [0, 0],
    [-44, -3],
  ]) {
    for (let i = 0; i < 4; i++) {
      const x = 254 + dx + i * 4.2
      const y = 266 + dy + i * 4.6
      boots += `M${n(x - 3)} ${n(y - 2)}L${n(x + 3)} ${n(y + 2)}M${n(x - 3)} ${n(y + 2)}L${n(x + 3)} ${n(y - 2)}`
    }
    boots += `M${n(280 + dx)} ${n(289 + dy)}Q${n(292 + dx)} ${n(292 + dy)} ${n(296 + dx)} ${n(305 + dy)}`
    boots += `M${n(238 + dx)} ${n(305 + dy)}L${n(238 + dx)} ${n(313 + dy)}`
  }
  // The stone: its rough top and front.
  let stone = 'M24 262L156 262'
  for (let i = 0; i < 10; i++) {
    const x = between(r, 30, 150)
    const y = between(r, 268, 296)
    stone += `M${n(x)} ${n(y)}l${n(between(r, 4, 10))} ${n(between(r, -1, 1))}`
  }
  // "my coarse hands": the backs of the hands scored.
  let coarse = ''
  for (const [x, y] of [
    [238, 168],
    [244, 162],
    [240, 176],
    [250, 170],
  ] as Pt[])
    coarse += `M${n(x)} ${n(y)}l${n(between(r, 3, 5))} ${n(between(r, -3, -1.5))}`
  return { ground, floor, hair, jacket, legs, boots, stone, coarse }
})

/** The nails in a thick sole: small ink studs along it. */
function Nails({ pts }: { pts: Pt[] }) {
  return (
    <g fill={INK}>
      {pts.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={n(x)} cy={n(y)} r={1.2} />
      ))}
    </g>
  )
}

function PipPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-pp-head`
  const p = F.p
  const [ex, ey] = F.pt([211.5, 117])
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* The flagstones of the courtyard, in the light, and the low stone he sits on. */}
      <path d={`M8 ${FLOOR_TOP}H324V312H8Z`} fill={PAPER} />
      <path d={m.floor} fill="none" stroke={INK} strokeWidth={LINE.fine} />
      <path d={STONE} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
      <path d={m.stone} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={6} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={HAIR} />
        <path d={JACKET} />
        <path d={THIGH} />
        <path d={SHIN} />
        <path d={FAR_SHIN} />
        <path d={NEAR_BOOT.upper} />
        <path d={FAR_BOOT.upper} />
        <path d={UPPER_ARM} />
        <path d={FOREARM} />
      </g>
      {/* The far leg and boot, behind. */}
      <path d={FAR_SHIN} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={FAR_BOOT.upper} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={FAR_BOOT.sole} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <Nails pts={FAR_BOOT.nails} />
      {/* The near leg and boot. */}
      <path d={THIGH} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={SHIN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.legs} fill={PAPER} />
      <path d={NEAR_BOOT.upper} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={NEAR_BOOT.sole} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <Nails pts={NEAR_BOOT.nails} />
      <path d={m.boots} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinecap="round" />
      {/* the hems of the trousers over the boots */}
      <path
        d="M224 272L260 272M188 268L224 268"
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      {/* The tight jacket and the stiff collar. */}
      <path d={JACKET} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.jacket} fill={PAPER} />
      <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2} />
      <g clipPath={`url(#${headClip})`}>
        <path d={HAIR} fill={INK} />
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path
          d={`M${p(164, 130)}C${p(159, 132)} ${p(158, 140)} ${p(160, 145)}`}
          strokeWidth={LINE.hairline}
        />
        {/* "they troubled me now": the brow lifted at its inner end */}
        <path d={`M${p(197, 105)}Q${p(207, 100)} ${p(218.5, 97)}`} strokeWidth={2} />
        {/* the eye cast down at his hands */}
        <path d={`M${p(202.5, 115.5)}Q${p(210, 111.5)} ${p(218.5, 114.5)}`} strokeWidth={2.2} />
        <path d={`M${p(205, 121)}Q${p(211, 123)} ${p(216.5, 120)}`} strokeWidth={LINE.hairline} />
        {/* the small nose; the mouth closed, turned down a little */}
        <path
          d={`M${p(231.5, 147)}C${p(228.5, 145.5)} ${p(228.5, 141.5)} ${p(231.5, 140)}`}
          strokeWidth={1.2}
        />
        <path
          d={`M${p(224.5, 158)}L${p(217, 158.6)}Q${p(214.6, 159.6)} ${p(214, 162.5)}`}
          strokeWidth={1.4}
        />
        <path
          d={`M${p(174, 170)}C${p(182, 180)} ${p(190, 185)} ${p(198, 187)}`}
          strokeWidth={1.1}
        />
      </g>
      <circle cx={n(ex)} cy={n(ey)} r={1.9} fill={INK} />
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      {/* The near arm in its tight sleeve, the wrist bare where it stops short. */}
      <path d={UPPER_ARM} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={FOREARM} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={WRIST} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      {/* "my coarse hands": held up before him, the fingers apart. */}
      <Hand paths={FAR_HAND} knuckly />
      <Hand paths={NEAR_HAND} knuckly>
        <path
          d={m.coarse}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
          strokeLinecap="round"
        />
      </Hand>
      <InnerRule />
    </>
  )
}

export const pipArt: LinocutArt = { width: PW, height: PH, Draw: PipPortrait }

export const pip: Portrait = {
  name: 'Pip',
  art: pipArt,
  alt: 'A linocut portrait of Pip as a small boy, alone in the paved courtyard of Satis House, drawn from his own words in Chapter 8. He sits on a low stone with his knees drawn up, seen from the side, facing right, holding both hands up before him and looking down at them with his brow lifted and his mouth turned down a little. His hands are large and square for a boy, the knuckles cut and the backs scored. He has short dark hair and wears a tight dark jacket whose sleeves stop above the wrist, a stiff white collar, dark trousers and a pair of heavy laced boots with thick soles, which stand dark on the pale flagstones. Behind him the wall of the house is in shadow. Three numbered red markers point to his hands, his boots and his troubled face.',
  describedBy: [
    { phrase: 'my coarse hands', at: [242, 92], to: [262, 128] },
    { phrase: 'my common boots', at: [306, 250], to: [298, 292] },
    {
      phrase: 'They had never troubled me before, but they troubled me now',
      at: F.pt([196, 160]),
    },
  ],
  where: 'Chapter 8',
  passage:
    'I took the opportunity of being alone in the courtyard, to look at my coarse hands and my common boots. My opinion of those accessories was not favourable. They had never troubled me before, but they troubled me now, as vulgar appendages.',
  note: 'Pip learns shame in a single afternoon. Estella looks at his hands and boots with contempt, and from this moment he looks at himself, and at Joe, through her eyes.',
  artNote:
    'Dickens never describes Pip’s face or hair, so he is drawn plainly, in the tight suit and stiff collar Mrs Joe sends him to Satis House in (Chapter 7). The numbers point only to what he looks at, and what it does to him.',
}
