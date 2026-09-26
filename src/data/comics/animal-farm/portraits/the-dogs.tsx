import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arc, between, clamp, deg, gouge, rng } from '@/components/comics/linocut/carve'

import { InnerRule, PH, PW, once, portraitGround, smooth } from './common'

/**
 * Napoleon's dogs, as Orwell shows them in Chapter 5, and nothing else:
 *
 *   "nine enormous dogs wearing brass-studded collars came bounding into the
 *   barn"
 *
 *   "they were the puppies whom Napoleon had taken away from their mothers
 *   and reared privately. Though not yet full-grown, they were huge dogs, and
 *   as fierce-looking as wolves. They kept close to Napoleon. It was noticed
 *   that they wagged their tails to him in the same way as the other dogs had
 *   been used to do to Mr. Jones."
 *
 * So: three of the nine, huge and dark, sitting close in a row at the side of
 * Napoleon, whose black flank and foreleg stand at the right edge of the
 * block; their heads are up and turned to him, their ears pricked, their long
 * muzzles shut and their brows low, like wolves. Round each neck is a collar
 * set with studs, cut as bright points, since the print has no brass. Their
 * tails sweep the floor behind them, cut with arcs of motion: they are
 * wagging, for him. Nothing is shown of what they do to other animals; the
 * portrait is of what they look like and whose they are. They are cut in INK
 * against a pale ground, as the panel of their first appearance draws them
 * (../panels/snowball-is-driven-out.tsx): black, with bright studs. Nothing
 * here comes from a film or stage production.
 *
 * Seeds: 5901 for the ground, 5902 for the cuts in the figures.
 */

/** Where the barn floor is. */
const FLOOR = 292

/**
 * One dog sitting, facing right, in its own frame: the ground at y 0, the
 * haunch at the left. The body is drawn here; the head is drawn apart and
 * turned up about the neck (NECK), so the dogs look up at Napoleon.
 */
const BODY = smooth([
  [0, 0, 1],
  [-12, -26],
  [-2, -58],
  [20, -86],
  [40, -104],
  [58, -110],
  [76, -100],
  [80, -84],
  [84, -60],
  [86, -26],
  [88, -6],
  [100, -4],
  [102, 0, 1],
])
const NECK: [number, number] = [60, -104]
/** A wolf's head: a broad skull, a long muzzle, the nose at the tip. */
const HEAD = smooth([
  [36, -110],
  [42, -130],
  [56, -142],
  [74, -142],
  [88, -134],
  [108, -128],
  [126, -122],
  [130, -116, 1],
  [124, -110],
  [106, -106],
  [90, -100],
  [76, -94],
  [60, -94],
])
const EARS = 'M44 -134L47 -168L65 -142ZM58 -140L69 -170L81 -138Z'
/** The collar round the neck, and its studs. */
const COLLAR = 'M34 -100C48 -92 64 -88 80 -88L80 -76C64 -76 48 -80 32 -88Z'
const STUDS: [number, number][] = [
  [39, -92],
  [47, -88],
  [56, -85],
  [65, -83.5],
  [74, -82.5],
]
/** The near hind leg folded under the haunch, its paw forward. */
const HAUNCH = 'M-6 -36C4 -52 30 -54 40 -36C46 -22 44 -8 56 -4L62 0L10 0C0 -8 -10 -18 -6 -36Z'
/** The tail: swept up behind the haunch, mid-wag. */
const TAIL = 'M-4 -10C-18 -12 -28 -22 -30 -36C-31 -46 -26 -52 -20 -52'

/** The three dogs: where each sits and its scale, the farthest first. */
const DOGS: [number, number, number][] = [
  [62, FLOOR - 4, 0.84],
  [116, FLOOR, 0.93],
  [172, FLOOR + 6, 1.0],
]

/** Napoleon at the right edge, facing left: his black head over them, his flank and foreleg. */
const NAPOLEON = smooth([
  [340, 24, 1],
  [314, 30],
  [290, 44],
  [270, 60],
  [252, 78],
  [242, 90, 1],
  [238, 106],
  [244, 120, 1],
  [256, 124],
  [272, 132],
  [284, 150],
  [290, 190],
  [292, 240],
  [296, 296],
  [300, 330, 1],
  [340, 330, 1],
])
/** His snout's disc, facing left. */
const NAP_SNOUT = 'M244 90C236 92 232 104 236 116C238 122 244 122 246 118C248 108 248 98 244 90Z'
const NAP_EAR = 'M300 34L286 6L312 26Z'

type Marks = {
  ground: string
  rim: string
  headRim: string
  hide: string
  wag: string
  flank: string
}

const marks = once<Marks>(() => {
  const ground = portraitGround(5901, (x, y) =>
    clamp(0.1 + Math.max(0, (y - 200) / 240) + (x / PW) * 0.12),
  )
  const r = rng(5902)
  // Light along the back of the neck, the crown and the top of the muzzle.
  const rim = gouge(22, -84, 40, -100, 1.3, -0.4) + gouge(-6, -30, 4, -58, 1.2, 0.4)
  const headRim = gouge(46, -134, 62, -140, 1.1, -0.3) + gouge(90, -128, 124, -120, 1.2, -0.4)
  // The rough of their coats: short cuts down the chest and the haunch.
  let hide = ''
  for (let i = 0; i < 28; i++) {
    const x = between(r, 10, 80)
    const y = between(r, -80, -10)
    const a = deg(between(r, 70, 110))
    const L = between(r, 5, 10)
    hide += gouge(x, y, x + Math.cos(a) * L, y + Math.sin(a) * L, 0.7)
  }
  // "they wagged their tails to him": arcs of motion round each tail's sweep.
  const wag =
    arc(-4, -10, 44, deg(212), deg(250)) +
    arc(-4, -10, 53, deg(216), deg(246)) +
    arc(-4, -10, 62, deg(220), deg(242))
  // The grain of Napoleon's flank.
  let flank = ''
  for (let y = 140; y < 300; y += 9)
    flank += gouge(292, y + between(r, -2, 2), 330, y + 6 + between(r, -2, 2), 0.9, -1)
  flank += gouge(262, 70, 300, 44, 1.6, -0.6) + gouge(250, 86, 262, 72, 1.2, -0.4)
  return { ground, rim, headRim, hide, wag, flank }
})

/**
 * A dog's tail and the arcs of its wag, drawn for every dog before any body,
 * so each tail shows only where the dog behind it does not cover it.
 */
function Tail({ at, s, m }: { at: [number, number]; s: number; m: Marks }) {
  return (
    <g transform={`translate(${at[0]} ${at[1]}) scale(${s})`}>
      <path d={TAIL} fill="none" stroke={PAPER} strokeWidth={15} strokeLinecap="round" />
      <path d={m.wag} fill="none" stroke={INK} strokeWidth={LINE.bold} strokeLinecap="round" />
      <path d={TAIL} fill="none" stroke={INK} strokeWidth={10} strokeLinecap="round" />
    </g>
  )
}

function Dog({ at, s, m }: { at: [number, number]; s: number; m: Marks }) {
  const turn = `rotate(-16 ${NECK[0]} ${NECK[1]})`
  return (
    <g transform={`translate(${at[0]} ${at[1]}) scale(${s})`}>
      {/* the paper edge that cuts each dog out of the one behind */}
      <g fill={PAPER} stroke={PAPER} strokeWidth={5} strokeLinejoin="round">
        <path d={BODY} />
        <g transform={turn}>
          <path d={HEAD} />
          <path d={EARS} />
        </g>
      </g>
      <path d={BODY} fill={INK} />
      <path d={m.rim} fill={PAPER} />
      <path d={m.hide} fill={PAPER} />
      <path d={HAUNCH} fill={INK} stroke={PAPER} strokeWidth={1.4} />
      <path d="M86 -30L86 -4M78 -40L80 -8" stroke={PAPER} strokeWidth={1} />
      <g transform={turn}>
        <path d={EARS} fill={INK} />
        <path d="M50 -140L50 -166M64 -144L69 -168" stroke={PAPER} strokeWidth={1} />
        <path d={HEAD} fill={INK} />
        <path d={m.headRim} fill={PAPER} />
        {/* a low brow over the eye; the long muzzle shut */}
        <path d="M70 -134L90 -126" stroke={PAPER} strokeWidth={2.6} strokeLinecap="round" />
        <path d="M74 -127Q81 -130 88 -125Q81 -122 74 -127Z" fill={PAPER} />
        <circle cx={82} cy={-126.5} r={2} fill={INK} />
        <path
          d="M126 -112L102 -108L88 -104"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.3}
          strokeLinecap="round"
        />
        <circle cx={128} cy={-119} r={2.4} fill={PAPER} />
      </g>
      {/* the collar, and its studs cut as bright points */}
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={1.4} />
      {STUDS.map(([x, y]) => (
        <circle key={`${x}`} cx={x} cy={y} r={2.2} fill={PAPER} />
      ))}
    </g>
  )
}

function TheDogsPortrait({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-dg-nap`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={NAPOLEON} />
        </clipPath>
      </defs>
      <rect x={0} y={0} width={PW} height={PH} fill={PAPER} />
      <path d={m.ground} fill={INK} />
      <path d={`M8 ${FLOOR + 8}L${PW - 8} ${FLOOR + 8}`} stroke={INK} strokeWidth={LINE.bold} />
      {/* Napoleon, beside them: a black flank and a foreleg at the edge */}
      <path d={NAPOLEON} fill={PAPER} stroke={PAPER} strokeWidth={6} />
      <path d={NAPOLEON} fill={INK} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.flank} fill={PAPER} />
      </g>
      <path d={NAP_EAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={NAP_SNOUT} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} />
      <path
        d="M254 124C266 120 276 124 282 132"
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.bold}
        strokeLinecap="round"
      />
      {/* his brow, low over a small eye, looking down at them */}
      <path d="M288 66L262 76L263 79L289 70Z" fill={PAPER} />
      <path d="M266 82Q273 78 280 81Q273 86 266 82Z" fill={PAPER} />
      <circle cx={272} cy={82} r={2} fill={INK} />
      <path d="M294 296L318 296L320 308L292 308Z" fill={INK} stroke={PAPER} strokeWidth={1.3} />
      <path d="M306 298L306 308" stroke={PAPER} strokeWidth={1.2} />
      {DOGS.map(([x, y, s]) => (
        <Tail key={`t${x}`} at={[x, y]} s={s} m={m} />
      ))}
      {DOGS.map(([x, y, s]) => (
        <Dog key={x} at={[x, y]} s={s} m={m} />
      ))}
      <InnerRule />
    </>
  )
}

export const theDogsArt: LinocutArt = { width: PW, height: PH, Draw: TheDogsPortrait }

/** A point in one dog's frame (0 the farthest, 2 the nearest), carried to the plate. */
const onDog =
  (k: number) =>
  (x: number, y: number): [number, number] => {
    const [dx, dy, s] = DOGS[k]
    return [Math.round((dx + x * s) * 10) / 10, Math.round((dy + y * s) * 10) / 10]
  }
const near = onDog(2)

export const theDogs: Portrait = {
  name: 'The dogs',
  art: theDogsArt,
  alt: "A linocut portrait of three of Napoleon's nine dogs, in Chapter 5: huge dark dogs sitting close together in a row on the barn floor, facing right, against a pale ground. Their pointed ears are pricked, their long muzzles are shut, and their brows are low over their eyes, like wolves. Each wears a collar set with bright studs. Their heads are turned up to the black flank and foreleg of Napoleon, who stands at the right edge of the picture, and their tails sweep the floor behind them with arcs of motion: they are wagging. Four numbered red markers point to a studded collar, a dog's head, Napoleon beside them, and a wagging tail.",
  describedBy: [
    {
      phrase: 'nine enormous dogs wearing brass-studded collars',
      at: [214, 196],
      to: near(60, -84),
    },
    { phrase: 'huge dogs, and as fierce-looking as wolves', at: [150, 44], to: [240, 164] },
    { phrase: 'They kept close to Napoleon', at: [312, 118], to: [290, 96] },
    { phrase: 'they wagged their tails to him', at: [30, 196], to: onDog(0)(-26, -46) },
  ],
  where: 'Chapter 5',
  note: 'Napoleon took them from their mothers as puppies in Chapter 3 and reared them in secret. From the day they drive Snowball out, they are how he rules; they are usually read as the secret police.',
}
