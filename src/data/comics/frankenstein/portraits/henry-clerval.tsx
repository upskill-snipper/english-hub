import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, deg, gouge, rng, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Hand,
  InnerRule,
  PH,
  PW,
  framePoint,
  frameTransform,
  hatch,
  once,
  portraitGround,
  rimLight,
  smooth,
  strands,
  type Digit,
} from './common'

/**
 * Henry Clerval on the Rhine, in Chapter 18, as Victor remembers him on
 * their journey to England:
 *
 *   "He was alive to every new scene; joyful when he saw the beauties of the
 *   setting sun, and more happy when he beheld it rise, and recommence a new
 *   day. He pointed out to me the shifting colours of the landscape, and the
 *   appearances of the sky." (Chapter 18)
 *
 * and a few pages later, still in the boat: "Look at that castle which
 * overhangs yon precipice". So: a young man in profile, facing right, in the
 * boat at sunrise, his face lifted and smiling, one arm stretched out ahead
 * of him with the forefinger pointing at a castle on a crag above the river.
 * The hand is drawn with the pointing finger long and clear, the other
 * three folded, each cut apart from the next, and the thumb laid along them,
 * so it reads as pointing and never as a fist or a salute. (The thumb was
 * first drawn raised, and the hand read as a child's pretend pistol.) The one spot of colour is the rising sun.
 * (Its light was first laid on the water in red dashes as well, for "the
 * golden sunrise reflected in the Rhine" in the same paragraph; the arm hid
 * most of them, and the two that showed read as stray red marks.)
 *
 * Shelley describes his face only once, in Victor's fevered memories in
 * Chapter 21: "the expressive eyes of Henry ... the dark orbs nearly covered
 * by the lids, and the long black lashes that fringed them". He is given the
 * dark eyes and the long lashes, open here, in life. Nothing else about him
 * is described, so he has plain short dark hair and the dress of a young
 * Genevese of the 1790s: a dark coat with a high collar and a white
 * neckcloth. Nothing here comes from a film or stage production.
 *
 * The head is drawn in its own frame and placed with HEAD_T; `onHead` carries
 * a point on it to the plate, for the markers.
 *
 * Seeds: 4501 for the ground, 4502 for the cuts in the figure.
 */

const HEAD_T = 'translate(-38 -14)'
const onHead = (x: number, y: number): Pt => [x - 38, y - 14]

/** A young head in profile, facing right: an open face, the chin lifted. */
const HEAD = smooth([
  [112, 262, 1],
  [114, 222],
  [100, 184],
  [92, 144],
  [96, 104],
  [114, 72],
  [144, 52],
  [180, 48],
  [206, 60],
  [218, 82],
  [222, 100],
  [220, 108, 1],
  [226, 122],
  [232, 134],
  [237.5, 145, 1],
  [231.5, 149],
  [223, 150.5, 1],
  [224, 155],
  [226.5, 159, 1],
  [223.5, 163, 1],
  [225.5, 166.5],
  [222, 172],
  [225, 182],
  [221, 194],
  [206, 200],
  [186, 200],
  [172, 196, 1],
  [178, 222],
  [184, 262, 1],
])
/** Short dark hair, a little wavy, down to the nape and the sideburn. */
const HAIR = smooth([
  [212, 68, 1],
  [200, 70],
  [186, 76],
  [176, 92],
  [172, 116],
  [168, 140, 1],
  [160, 128],
  [150, 112],
  [136, 110],
  [124, 130],
  [120, 160],
  [124, 188, 1],
  [98, 184],
  [88, 144],
  [90, 100],
  [106, 64],
  [138, 40],
  [176, 34],
  [206, 42],
  [222, 58],
])
const EAR = smooth([
  [152, 116],
  [144, 114],
  [139, 122],
  [139, 136],
  [143, 147],
  [150, 151],
  [156, 145],
  [157, 130],
])

/** His coat, the high collar standing behind his neck, and the white neckcloth. */
const COAT = smooth([
  [-12, 330, 1],
  [-12, 262],
  [30, 244],
  [70, 236],
  [110, 238],
  [140, 244],
  [168, 248],
  [190, 262],
  [200, 292],
  [202, 330, 1],
])
const COLLAR = smooth([
  [72, 240, 1],
  [80, 208],
  [94, 196],
  [110, 210],
  [128, 230],
  [140, 244, 1],
  [110, 246],
  [84, 246],
])
const NECKCLOTH = smooth([
  [134, 196, 1],
  [158, 198],
  [176, 194, 1],
  [180, 214],
  [168, 234],
  [152, 242],
  [138, 230],
])

/** The near arm, stretched out ahead of him to point, and the white cuff at the wrist. */
const SLEEVE = smooth([
  [96, 330, 1],
  [110, 280],
  [150, 250],
  [200, 232],
  [248, 220],
  [262, 216, 1],
  [266, 238, 1],
  [250, 242],
  [206, 258],
  [168, 282],
  [150, 330, 1],
])
const CUFF = smooth([
  [258, 212, 1],
  [270, 209, 1],
  [274, 236, 1],
  [262, 240, 1],
])

// The pointing hand, in its own frame: the wrist at the origin, the hand
// along +x, the forefinger out and the other three folded under.
const WRIST: Pt = [270, 222]
const HAND_ROT = -16
const PALM = smooth([
  [-1, -8],
  [8, -10.5],
  [19, -10],
  [24, -5],
  [24.5, 5],
  [17, 9.5],
  [5, 9.5],
  [-2, 5],
])
const DIGITS: Digit[] = [
  { from: [15, 7], to: [19, 13.5], w: 6 },
  { from: [19, 3.5], to: [24, 10], w: 6.3 },
  { from: [21.5, -0.5], to: [27.5, 5.5], w: 6.4 },
  { from: [21, -5.5], to: [46, -7.5], w: 6.6 },
  { from: [5, -3], to: [21, 0.5], w: 6.6 },
]
const HAND_LINES = 'M42.5 -9.2L45 -9.4M19 -1.6L21.4 -0.6'
const inHand = framePoint(WRIST, HAND_ROT, 1)

// ── The Rhine at sunrise ──────────────────────────────────────────────────

const HILLS = 'M200 196C222 186 240 190 258 182C272 176 286 184 300 180L324 178L324 206L200 206Z'
/** A crag at the right, rising sheer from the river, with a castle on its top. */
const CRAG = 'M268 206L274 150C278 132 284 120 290 112L324 104L324 206Z'
const CASTLE =
  'M288 112L288 88L294 88L294 82L298 82L298 88L304 88L304 70L308 64L312 70L312 88L318 88L318 82L322 82L322 104Z'
const WINDOWS =
  'M307 76L309 76L309 81L307 81ZM296 94L298 94L298 99L296 99ZM313 94L315 94L315 99L313 99Z'
const SUN_C: Pt = [238, 190]
const SUN = `M${SUN_C[0] - 20} 190A20 20 0 0 1 ${SUN_C[0] + 20} 190Z`
/** The gunwale of the boat, across the foot of the block. */
const GUNWALE = 'M-10 300C80 290 200 288 340 296L340 330L-10 330Z'

type Marks = {
  ground: string
  rays: string
  water: string
  hair: string
  hairRim: string
  coat: string
  sleeve: string
  neck: string
  crag: string
  boat: string
}

const marks = once<Marks>(() => {
  // Dawn: the sky brightest over the sun, low at the right; dark behind him.
  const ground = portraitGround(4501, (x, y) => {
    const d = Math.hypot(x - SUN_C[0] - 20, (y - SUN_C[1]) * 1.1)
    return 0.05 + clamp(1 - d / 230) ** 1.2 + clamp((x - 160) / 300) * 0.15
  })
  const r = rng(4502)

  // The sun's light, cut as rays across the sky above the hills.
  let rays = ''
  for (let a = 196; a < 344; a += 8) {
    const ang = deg(a + between(r, -1.5, 1.5))
    let rad = 26 + between(r, 0, 6)
    while (rad < 110) {
      const len = between(r, 8, 18)
      const x1 = SUN_C[0] + Math.cos(ang) * rad
      const y1 = SUN_C[1] + Math.sin(ang) * rad
      if (x1 > 200 && y1 < 180)
        rays += gouge(
          x1,
          y1,
          SUN_C[0] + Math.cos(ang) * (rad + len),
          SUN_C[1] + Math.sin(ang) * (rad + len),
          0.5 + 1.6 * clamp(1 - (rad - 26) / 90),
        )
      rad += len + between(r, 5, 12)
    }
  }

  // The river between the hills and the boat, lit under the sun.
  let water = ''
  for (let y = 210; y < 290; y += 5.5) {
    let x = 196 + between(r, 0, 10)
    while (x < 324) {
      const len = between(r, 12, 40)
      const L = clamp(1 - Math.abs(x + len / 2 - SUN_C[0]) / 120)
      water += gouge(x, y, Math.min(x + len, 324), y + between(r, -0.5, 0.5), 0.5 + L * 1.6)
      x += len + between(r, 4, 12)
    }
  }

  // Short dark hair: paper strands swept back, and light along the crown.
  let hair = strands(
    r,
    24,
    (t) => [212 - t * 110, 64 + t * 30],
    (t) => [150 - t * 50, 44 + t * 130],
    [0.5, 1],
    2.4,
  )
  hair += gouge(206, 70, 196, 86, 0.8, -1.2) + gouge(198, 70, 186, 90, 0.7, -1)
  const hairRim = rimLight(r, { cx: 156, cy: 110, rx: 66, ry: 76 }, 220, 330, 26, 1.2)

  const coat = gouge(22, 262, 8, 322, 2, 2) + gouge(58, 254, 52, 324, 1.5, 1.5)
  const sleeve =
    gouge(126, 286, 180, 256, 1.4, -1.5) +
    gouge(150, 296, 206, 266, 1.2, -1) +
    gouge(196, 240, 246, 228, 1, -0.6)
  const neck = hatch(r, { x0: 124, x1: 176, y0: 204, y1: 214 }, 4, 0.1)

  // The face of the crag: a few cuts down it, lit from the sun.
  let crag = ''
  for (let i = 0; i < 6; i++) crag += gouge(282 + i * 7, 116 + i * 2, 276 + i * 8, 200, 0.7, 1)

  // The boat's planking, cut along the gunwale.
  const boat =
    gouge(0, 306, 330, 308, 1.2, 0.5) +
    gouge(0, 316, 330, 318, 0.9, 0.3) +
    gouge(10, 298, 330, 300, 0.7)

  return { ground, rays, water, hair, hairRim, coat, sleeve, neck, crag, boat }
})

function HenryClerval({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-hc-head`
  const hairClip = `${uid}-hc-hair`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      <path d={m.rays} fill={PAPER} />
      {/* the sun rising behind the hills, and its light on the water */}
      <path
        d={SUN}
        fill={RED}
        className="lc-glow"
        // three 1.2 s breaths after the delay: all done by 4 s
        style={timing({ delay: 0.3 })}
      />
      <path d={HILLS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={`M196 206L324 206L324 292L196 292Z`} fill={INK} />
      <path d={m.water} fill={PAPER} />
      {/* "Look at that castle which overhangs yon precipice" */}
      <path d={CRAG} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.crag} fill={PAPER} />
      <path d={CASTLE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={WINDOWS} fill={PAPER} />
      {/* the ink halo that lifts him off the ground */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={COAT} />
        <path d={SLEEVE} />
        <g transform={HEAD_T}>
          <path d={HEAD} />
          <path d={HAIR} />
        </g>
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <g transform={HEAD_T}>
        <path d={HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.neck} strokeWidth={1.1} />
          <path d="M170 166C176 182 190 194 206 198" strokeWidth={1.1} />
        </g>
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
          <path d={m.hairRim} fill={PAPER} />
        </g>
        <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.7} strokeLinejoin="round" />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d="M150 122C145 124 144 134 146 139C147 142 150 141 151 138" strokeWidth={1.1} />
          {/* a raised brow, and a dark eye under long black lashes */}
          <path d="M194 96Q206 90 219 95" strokeWidth={2.6} />
          <path d="M199 109Q206.5 102.5 215 107" strokeWidth={2.4} />
          <path
            d="M202 105.4L199.6 100.6M205.4 103.8L204.2 98.6M209 103.4L209 98.2M212.4 104.4L213.8 99.6M214.8 106L217.4 102"
            strokeWidth={1.1}
          />
          <path d="M200.5 112Q207 115.6 213.5 110.6" strokeWidth={LINE.fine} />
          {/* the nostril, and an open smile */}
          <path d="M229 146C225 144 225 139 229 137" strokeWidth={1.4} />
          <path d="M226 159.2L214 159Q210 157 208.5 153.5" strokeWidth={1.7} />
          <path d="M223.5 166.4Q219.5 168 215.5 166.6" strokeWidth={LINE.hairline} />
          <path d="M214 146Q207 152 209 160" strokeWidth={0.9} />
        </g>
        {/* "the dark orbs": a large dark eye, with its glint */}
        <circle cx={207.4} cy={108.8} r={3.4} fill={INK} />
        <circle cx={208.6} cy={107.6} r={1} fill={PAPER} />
      </g>
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path
        d={NECKCLOTH}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <path
        d="M148 206C154 214 160 220 170 222M144 216C150 226 156 232 162 236"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      {/* the arm stretched out, the cuff, and the pointing hand */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.sleeve} fill={PAPER} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <Hand
        transform={frameTransform(WRIST, HAND_ROT, 1)}
        palm={PALM}
        digits={DIGITS}
        lines={HAND_LINES}
        halo={3.4}
      />
      {/* the gunwale of the boat */}
      <path d={GUNWALE} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} />
      <path d={m.boat} fill={PAPER} />
      <InnerRule />
    </>
  )
}

export const henryClervalArt: LinocutArt = { width: PW, height: PH, Draw: HenryClerval }

/** The cheek, reached from behind, so the marker's line keeps clear of the eye. */
const FACE = onHead(200, 140)
const FINGER = inHand(40, -7.5)

export const henryClerval: Portrait = {
  name: 'Henry Clerval',
  art: henryClervalArt,
  alt: 'A linocut portrait of Henry Clerval in a boat on the Rhine at sunrise, in profile, facing right: a young, clean-shaven man with short dark hair, a raised brow, a large dark eye under long black lashes and an open smile. He wears a dark coat with a high collar and a white neckcloth. His near arm is stretched out ahead of him, the forefinger pointing up at a castle with a tower on top of a sheer crag above the river; his other fingers are folded. Beyond him the sun rises red behind dark hills over the river, and rays of its light are cut across the sky. The gunwale of the boat runs across the foot of the picture. Three numbered red markers point to his face, the rising sun and his pointing hand.',
  describedBy: [
    { phrase: 'He was alive to every new scene', at: [96, 60], to: FACE },
    { phrase: 'more happy when he beheld it rise', at: [236, 150], to: [238, 180] },
    {
      phrase: 'He pointed out to me the shifting colours of the landscape',
      at: [FINGER[0], FINGER[1] + 44],
      to: FINGER,
    },
  ],
  where: 'Chapter 18',
  passage:
    'He was alive to every new scene; joyful when he saw the beauties of the setting sun, and more happy when he beheld it rise, and recommence a new day. He pointed out to me the shifting colours of the landscape, and the appearances of the sky.',
  note: 'Victor, travelling to make a second creature, can see nothing; Clerval sees everything. He is what Victor might have been, and Victor says so: “in Clerval I saw the image of my former self”.',
  artNote:
    'Shelley gives his face only once, in Victor’s fevered memories in Chapter 21: his dark eyes and “long black lashes”, which he has here. The rest is the plain dress of the 1790s.',
}
