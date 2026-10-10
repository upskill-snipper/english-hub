import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, rng } from '@/components/comics/linocut/carve'

import {
  InnerRule,
  MAN_HEAD,
  PH,
  PW,
  ProfileEar,
  hatch,
  lerp2,
  nudge,
  once,
  placePath,
  placer,
  portraitGround,
  rimLight,
  smooth,
  strands,
  type Knot,
} from './common'

/**
 * John Reed, as Jane describes him, and nothing else. Chapter 1, at
 * Gateshead:
 *
 *   "John Reed was a schoolboy of fourteen years old; four years older than
 *   I, for I was but ten: large and stout for his age, with a dingy and
 *   unwholesome skin; thick lineaments in a spacious visage, heavy limbs and
 *   large extremities. He gorged himself habitually at table, which made him
 *   bilious, and gave him a dim and bleared eye and flabby cheeks."
 *
 * So: a big, heavy boy of fourteen in profile, facing right, at rest. He is
 * cut from the one man's head (MAN_HEAD), made a boy's and made heavy, as
 * the figure kit makes him (HEAD_JOHN_REED in ../panels/people.tsx): a broad
 * face, the nose short and thick, the lips thick, the chin small and sunk in
 * a soft jowl under the jaw ("thick lineaments in a spacious visage",
 * "flabby cheeks"); a small, dull eye half shut under a heavy lid, with a
 * puffy lower lid ("a dim and bleared eye"); a thick neck and big round
 * shoulders ("large and stout for his age"). His hair and dress are not
 * described, so they are a schoolboy's of about 1800, as the kit has them:
 * short plain dark hair, a dark jacket, and a wide white shirt collar open
 * at the neck. His skin's colour is left to the words.
 *
 * He is drawn alone and still, as Jane first describes him: nothing in the
 * portrait shows what he does to her. There is no red in this plate.
 * Nothing here comes from a film or stage production.
 *
 * Seeds: 7601 for the ground, 7602 for the cuts in the figure.
 */

/**
 * The one man's head made a heavy boy's: the nose short and thick, the lips
 * thick, the chin small, a soft jowl under the jaw.
 */
const HEAD_K: Knot[] = nudge(MAN_HEAD, [
  [8, 0, 3],
  [9, -2, 4],
  [10, -2, 3],
  [11, 0, 1],
  [14, -0.5, 1],
  [15, -3, 1.5],
  [16, -6, -0.5],
  [17, -4.5, -1],
  [18, -2, -0.5],
  [19, 1, 0],
  [20, -1.5, 0.5],
  [21, 2, 1.5],
  [22, -1, 2],
  [23, -4.5, 1],
  [24, -6, 0],
  [25, 2, 4],
  [26, 2, 2],
])

/** A big head, set low: a heavy boy, his head large on his shoulders. */
const F = placer([2, 10], 0.96)
const HEAD = smooth(F.knots(HEAD_K))

/**
 * Short, plain dark hair, cropped close and brushed forward over the brow
 * in a short fringe, as a boy of about 1800 wore it.
 */
const HAIR_K: Knot[] = [
  [226, 84, 1],
  [214, 86],
  [204, 88],
  [194, 96],
  [188, 108],
  [178, 114, 1],
  [166, 106],
  [150, 104],
  [136, 112],
  [126, 132],
  [118, 158],
  [108, 180, 1],
  [92, 160],
  [88, 124],
  [96, 90],
  [116, 62],
  [146, 44],
  [180, 38],
  [208, 46],
  [224, 64],
]
const HAIR = smooth(F.knots(HAIR_K))

/** Big round shoulders in a dark jacket. */
const JACKET = smooth([
  [-8, 330, 1],
  [-6, 280],
  [12, 252],
  [52, 236],
  [100, 230],
  [140, 238],
  [184, 252],
  [230, 256],
  [266, 270],
  [290, 300],
  [298, 330, 1],
])
/** The wide white collar of his shirt, open and turned down over the jacket. */
const COLLAR = smooth([
  [112, 240, 1],
  [150, 250],
  [186, 258],
  [214, 258],
  [230, 252, 1],
  [242, 278, 1],
  [216, 274],
  [188, 270],
  [150, 264],
  [110, 254, 1],
])

type Marks = {
  ground: string
  hair: string
  rim: string
  back: string
  neck: string
  face: string
  jacket: string
}

const marks = once<Marks>(() => {
  // Grey daylight from a window in front of him.
  const ground = portraitGround(7601, (x, y) =>
    clamp(0.05 + ((x - 60) / 270) * 0.9 - Math.max(0, (y - 250) / 260)),
  )
  const r = rng(7602)
  // Cropped hair: short cuts brushed forward from the crown to the fringe.
  const hair =
    strands(
      r,
      22,
      lerp2(F.pt([150, 48]), F.pt([118, 150])),
      lerp2(F.pt([214, 74]), F.pt([186, 108])),
      [0.35, 0.65],
      2,
    ) +
    strands(
      r,
      10,
      lerp2(F.pt([196, 62]), F.pt([186, 84])),
      lerp2(F.pt([226, 82]), F.pt([200, 92])),
      [0.4, 0.7],
      1,
    )
  const rim = rimLight(
    r,
    { cx: F.pt([156, 112])[0], cy: F.pt([156, 112])[1], rx: 66 * F.s, ry: 76 * F.s },
    -90,
    -10,
    14,
    1,
  )
  let back = ''
  const [bx, by] = F.pt([176, 152])
  for (let rad = 54; rad < 88; rad += 3.4)
    back += arcDashes(r, bx, by, rad, deg(100), deg(150), [8, 22], [2, 5])
  // The shadow under the soft jowl.
  const neck = hatch(r, { x0: 150, x1: 230, y0: 212, y1: 230 }, 4.4, 0.05)
  // "flabby cheeks": the round of the cheek cut as shallow bowls of line.
  let face = ''
  const [cx, cy] = F.pt([200, 148])
  for (let rad = 14; rad < 26; rad += 3.4)
    face += arcDashes(r, cx, cy, rad, deg(70), deg(150), [8, 20], [2, 5])
  const jacket =
    gouge(250, 276, 270, 318, 1.6, -2) +
    gouge(30, 266, 12, 318, 1.6, 2) +
    gouge(72, 254, 62, 318, 1.3, 2) +
    gouge(124, 268, 120, 318, 1, 1) +
    gouge(196, 284, 200, 318, 0.9, -1)
  return { ground, hair, rim, back, neck, face, jacket }
})

function JohnReedPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-jr-head`
  const hairClip = `${uid}-jr-hair`
  const P = (d: string) => placePath(d, F)
  const [ax, ay] = F.pt([156, 114])
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
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={HAIR} />
        <path d={JACKET} />
      </g>
      <path d={JACKET} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.jacket} fill={PAPER} />
      <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.4} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.back} strokeWidth={1.6} />
        <path d={m.neck} strokeWidth={LINE.hairline} />
        <path d={m.face} strokeWidth={0.95} />
      </g>
      <path d={HAIR} fill={INK} />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
        <path d={m.rim} fill={PAPER} />
      </g>
      <ProfileEar at={[ax, ay]} h={38} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* a soft, round jaw, lost in the fat of the cheek */}
        <path d={P('M228 208C214 216 196 212 184 202C176 194 172 184 171 174')} strokeWidth={1.4} />
        {/* a low, plain brow under the fringe */}
        <path d={P('M206 113Q218 109.5 231 113')} strokeWidth={2.4} />
        {/* a short, thick nose with a wide nostril */}
        <path d={P('M239 166C234 165 232.5 160 236 156.5')} strokeWidth={1.6} />
        <path d={P('M230 156C225 164 223.5 172 226 180')} strokeWidth={LINE.fine} />
        {/* thick lips, closed */}
        <path d={P('M238.5 179L228.5 179.8')} strokeWidth={1.9} />
        <path d={P('M240 184Q236 189.5 230 186')} strokeWidth={LINE.fine} />
        {/* "a dim and bleared eye": small, half shut under a heavy lid, the lower lid puffed */}
        <path d={P('M211 126.5Q221 121 232 126')} strokeWidth={2.6} />
        <path d={P('M213 131.5Q222 135 231 130')} strokeWidth={LINE.fine} />
        <path d={P('M214 137Q222 141.5 230 136.5')} strokeWidth={LINE.hairline} />
      </g>
      {/* the pupil, small and half hidden by the lid */}
      <path d={P('M220.5 126.8Q224 132.5 228 126.2Z')} fill={INK} />
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path
        d="M122 250Q160 258 196 264M214 264Q226 266 236 272"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      <InnerRule />
    </>
  )
}

export const johnReedArt: LinocutArt = { width: PW, height: PH, Draw: JohnReedPortrait }

export const johnReed: Portrait = {
  name: 'John Reed',
  art: johnReedArt,
  alt: "A linocut portrait of John Reed in profile, facing right, drawn from Jane's description in Chapter 1: a big, heavy boy of fourteen, alone and at rest. His face is broad and fleshy, with a short, thick nose, thick closed lips and a small chin sunk in a soft jowl under the jaw. His eye is small and dull, half shut under a heavy lid, with a puffy lower lid. His short dark hair is plain. He has a thick neck and big round shoulders in a dark jacket, with a wide white shirt collar open at the neck. Four numbered red markers point to his schoolboy's collar, his heavy build, his broad face and his dull eye.",
  describedBy: [
    { phrase: 'a schoolboy of fourteen years old', at: [204, 300] },
    { phrase: 'large and stout for his age', at: [64, 288] },
    { phrase: 'thick lineaments in a spacious visage', at: [196, 168] },
    { phrase: 'a dim and bleared eye and flabby cheeks', at: [300, 110], to: [234, 120] },
  ],
  where: 'Chapter 1',
  passage:
    'John Reed was a schoolboy of fourteen years old; four years older than I, for I was but ten: large and stout for his age, with a dingy and unwholesome skin; thick lineaments in a spacious visage, heavy limbs and large extremities. He gorged himself habitually at table, which made him bilious, and gave him a dim and bleared eye and flabby cheeks.',
  note: 'Jane describes her cousin as a body before she describes anything he does: everything about him is too much, the sign of a boy who has never been refused anything.',
  artNote:
    'His dress and hair are not described, so he wears a schoolboy’s jacket and open collar of about 1800. His “dingy and unwholesome skin” is left to the words.',
}
