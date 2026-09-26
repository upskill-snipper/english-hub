import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, deg, gouge, n, rng, wedge } from '@/components/comics/linocut/carve'

import { InnerRule, PH, PW, once, portraitGround, smooth } from './common'

/**
 * Moses, from the two places Orwell shows him, and nothing else:
 *
 *   "Moses, the tame raven, who slept on a perch behind the back door"
 *   (Chapter 1)
 *
 *   "He would perch on a stump, flap his black wings, and talk by the hour to
 *   anyone who would listen. "Up there, comrades," he would say solemnly,
 *   pointing to the sky with his large beak ... "up there, just on the other
 *   side of that dark cloud that you can see ... there it lies, Sugarcandy
 *   Mountain"" (Chapter 9)
 *
 * So: a raven on a stump, cut in INK against a pale sky, his black wings
 * lifted and flapping, his large beak pointed up at a dark cloud in the top
 * right of the block. Light breaks out round the cloud's edge, because that
 * is where he says the mountain lies; the mountain itself is not drawn,
 * because nobody in the book ever sees it. Nothing here comes from a film or
 * stage production.
 *
 * Seeds: 6101 for the sky, 6102 for the cuts in the bird and the stump.
 */

/** The dark cloud, top right, and where the light breaks from behind it. */
const CLOUD = smooth([
  [226, 54],
  [234, 36],
  [252, 28],
  [266, 16],
  [290, 14],
  [308, 22],
  [326, 18],
  [330, 50, 1],
  [330, 64, 1],
  [306, 68],
  [280, 64],
  [256, 68],
  [234, 66],
])

/** His body and head, perched, facing right, the beak raised to the sky. */
const BODY = smooth([
  [96, 222, 1],
  [112, 196],
  [132, 172],
  [156, 150],
  [176, 128],
  [186, 110],
  [198, 98],
  [214, 96],
  [224, 102],
  [226, 110],
  [216, 122],
  [206, 138],
  [206, 162],
  [198, 188],
  [182, 208],
  [160, 222],
  [132, 230],
])
/** "his large beak": heavy, pointing up and out at the cloud. */
const BEAK = 'M216 98L246 80L249 84L226 110C222 106 218 102 216 98Z'
const BEAK_LINE = 'M222 104L246 82'
/** The shaggy feathers at his throat. */
const HACKLES = 'M212 118L220 126L208 128L214 136L204 138L208 148L198 146'
/** His wings, lifted and spread behind him mid-flap. */
const WING_FAR = smooth([
  [150, 150],
  [128, 120],
  [96, 88],
  [70, 58, 1],
  [66, 76],
  [58, 92, 1],
  [62, 108],
  [52, 122, 1],
  [66, 136],
  [70, 150, 1],
  [96, 158],
  [124, 170],
])
const WING_NEAR = smooth([
  [168, 150],
  [156, 110],
  [140, 70],
  [126, 30, 1],
  [116, 50],
  [100, 60, 1],
  [100, 80],
  [84, 90, 1],
  [96, 108],
  [88, 122, 1],
  [110, 136],
  [132, 160],
  [150, 176],
])
/** The wedge of his tail, and his feet gripping the stump. */
const TAIL = 'M112 208L64 250L74 260L126 222Z'
const FEET = 'M150 222L146 238M160 222L164 238M140 240L170 240'
/** The stump. */
const STUMP = 'M110 238L220 234L224 318L100 318Z'
const STUMP_TOP = 'M110 238C130 230 200 228 220 234C204 244 128 246 110 238Z'

type Marks = {
  sky: string
  light: string
  cloudCuts: string
  feathers: string
  rings: string
  bark: string
}

const marks = once<Marks>(() => {
  // A pale sky, ruled with thin ink lines that thicken low down.
  const sky = portraitGround(6101, (x, y) => clamp(0.08 + (y / PH) * 0.25 + (1 - x / PW) * 0.08))
  const r = rng(6102)
  // Light breaking round the cloud: short wedges fanning out from behind it.
  let light = ''
  for (let a = 100; a <= 250; a += 8) {
    const ang = deg(a + between(r, -2, 2))
    const cx = 284
    const cy = 42
    const r0 = between(r, 50, 58)
    const r1 = r0 + between(r, 18, 34)
    light += wedge(
      cx + Math.cos(ang) * r0,
      cy + Math.sin(ang) * r0 * 0.7,
      cx + Math.cos(ang) * r1,
      cy + Math.sin(ang) * r1 * 0.7,
      2.2,
      0.4,
    )
  }
  // The cloud's billows, cut into it.
  const cloudCuts =
    gouge(238, 56, 272, 48, 1.2, -2) +
    gouge(260, 36, 300, 28, 1.3, -2) +
    gouge(284, 58, 320, 50, 1.2, -2) +
    gouge(300, 30, 326, 26, 1, -1.5)
  // Feathers: the long cuts that part his flight feathers, and short
  // scallops over his body.
  let feathers = ''
  const quills: [number, number, number, number][] = [
    [146, 148, 124, 34],
    [148, 152, 110, 58],
    [150, 156, 100, 82],
    [150, 160, 92, 100],
    [148, 164, 96, 124],
    [140, 158, 70, 64],
    [138, 160, 62, 96],
    [134, 162, 60, 126],
  ]
  for (const [x1, y1, x2, y2] of quills) feathers += gouge(x1, y1, x2, y2, 0.9, 1)
  let rings = ''
  for (let i = 0; i < 30; i++) {
    const x = between(r, 120, 196)
    const y = between(r, 150, 214)
    if (y < 150 + (x - 120) * -0.2 || x + (y - 150) * 0.9 > 222) continue
    rings += `M${n(x - 4)} ${n(y)}Q${n(x)} ${n(y + 4)} ${n(x + 4)} ${n(y)}`
  }
  // The stump's bark and its growth rings.
  let bark = ''
  for (let x = 108; x < 222; x += 9)
    bark += gouge(x + between(r, -1, 1), 246, x + between(r, -2, 2), 316, 0.9, between(r, -1, 1))
  return { sky, light, cloudCuts, feathers, rings, bark }
})

function MosesPortrait({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-mo-cloud`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={CLOUD} />
        </clipPath>
      </defs>
      <rect x={0} y={0} width={PW} height={PH} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      {/* the light breaking out round the dark cloud */}
      <path d={m.light} fill={INK} />
      <path d={CLOUD} fill={PAPER} stroke={PAPER} strokeWidth={6} />
      <path d={CLOUD} fill={INK} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.cloudCuts} fill={PAPER} />
      </g>
      {/* the stump */}
      <path d={STUMP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.bark} fill={PAPER} />
      <path d={STUMP_TOP} fill={PAPER} stroke={INK} strokeWidth={1.2} />
      <path
        d="M130 238C150 234 186 234 204 237M140 240C156 238 180 238 194 240"
        fill="none"
        stroke={INK}
        strokeWidth={0.9}
      />
      {/* the paper edge that cuts him out of the sky */}
      <g fill={PAPER} stroke={PAPER} strokeWidth={5} strokeLinejoin="round">
        <path d={WING_FAR} />
        <path d={WING_NEAR} />
        <path d={BODY} />
        <path d={BEAK} />
        <path d={TAIL} />
      </g>
      <path d={WING_FAR} fill={INK} />
      <path d={TAIL} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <path d="M100 224L72 252M108 226L84 256" stroke={PAPER} strokeWidth={1} />
      <path d={BODY} fill={INK} />
      <path d={m.rings} fill="none" stroke={PAPER} strokeWidth={1} strokeLinecap="round" />
      <path
        d={WING_NEAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={m.feathers} fill={PAPER} />
      <path d={HACKLES} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
      <path d={BEAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={BEAK_LINE} stroke={PAPER} strokeWidth={1} />
      {/* a bright eye */}
      <circle cx={210} cy={106} r={3.6} fill={PAPER} />
      <circle cx={211} cy={106} r={2} fill={INK} />
      <path d={FEET} fill="none" stroke={INK} strokeWidth={3.6} strokeLinecap="round" />
      <path d={FEET} fill="none" stroke={PAPER} strokeWidth={1} strokeLinecap="round" />
      <InnerRule />
    </>
  )
}

export const mosesArt: LinocutArt = { width: PW, height: PH, Draw: MosesPortrait }

export const moses: Portrait = {
  name: 'Moses',
  art: mosesArt,
  alt: 'A linocut portrait of Moses the raven, in Chapter 9: a black raven perched on a tree stump against a pale sky, facing right, his black wings lifted and spread mid-flap, the shaggy feathers at his throat standing out. His large beak points up at a dark cloud in the top right corner, and light breaks out round the edges of the cloud. Nothing is drawn beyond it. Five numbered red markers point to the raven, his wings, his beak, the cloud and the stump.',
  describedBy: [
    { phrase: 'Moses, the tame raven', at: [228, 180], to: [200, 170] },
    { phrase: 'flap his black wings', at: [40, 40], to: [80, 74] },
    { phrase: 'pointing to the sky with his large beak', at: [270, 120], to: [240, 90] },
    { phrase: 'just on the other side of that dark cloud', at: [196, 26], to: [236, 44] },
    { phrase: 'perch on a stump', at: [262, 262], to: [222, 262] },
  ],
  where: 'Chapters 1 and 9',
  note: 'Moses preaches Sugarcandy Mountain, a happy country where animals go when they die. The pigs call it a lie, yet in Chapter 9 they let him stay without working, with an allowance of beer. One reading is that a story of rest after death suits a farm that offers none before it.',
}
