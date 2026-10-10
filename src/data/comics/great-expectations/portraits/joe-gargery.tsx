import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  InnerRule,
  MAN_EAR,
  MAN_HEAD,
  ManFeatures,
  PH,
  PW,
  ProfileEar,
  curlMarks,
  flame,
  hatch,
  nudge,
  once,
  placer,
  smooth,
  splitGround,
  type Knot,
} from './common'

/**
 * Joe Gargery, as Dickens describes him, and nothing else. Chapter 2, the
 * first time Pip describes the household he is "brought up by hand" in:
 *
 *   "Joe was a fair man, with curls of flaxen hair on each side of his
 *   smooth face, and with eyes of such a very undecided blue that they
 *   seemed to have somehow got mixed with their own whites. He was a mild,
 *   good-natured, sweet-tempered, easy-going, foolish, dear fellow—a sort of
 *   Hercules in strength, and also in weakness."
 *
 * So: a young man in profile, facing right, towards his forge fire; a
 * clean-shaven face ("smooth face") with a mild, easy smile and a light,
 * lifted brow; fair hair cut in paper, curling all over his head and down in
 * front of the ear on each side of his face, its edge a run of curls ("curls
 * of flaxen hair"); a pale eye, its iris cut as a fine ring round a small
 * pupil with paper all round it, so that it seems lost in its own white
 * ("eyes of such a very undecided blue"); and a thick neck over broad, heavy
 * shoulders and a great arm ("a sort of Hercules in strength"). The print
 * has no blue, so the colour of his eyes is left to the words; the card
 * says so.
 *
 * His dress is the text's, from elsewhere in the novel: at work he has "his
 * coat and waistcoat and cravat off, and his leather apron on" (Chapter 5),
 * and he means to be found "at the old anvil, in the old burnt apron"
 * (Chapter 27). So he is in a white shirt, open at the throat, under a
 * leather apron whose bib is held by a strap round his neck, with a few
 * small scorch marks cut in it. The forge fire burns at the bottom right, in
 * front of him: its flames and the light nearest them print red, far below
 * his face. Nothing here comes from a film or stage production.
 *
 * Seeds: 7101 for the ground, 7102 for the cuts in the figure.
 */

/** The one man's head, its neck thickened front and back: "a sort of Hercules". */
const HEAD_K: Knot[] = nudge(MAN_HEAD, [
  [0, -16, 0],
  [1, -12, 0],
  [2, -4, 0],
  [26, 4, 2],
  [27, 9, 0],
  [28, 12, 0],
])

const F = placer([14, -2], 0.88)
const HEAD = smooth(F.knots(HEAD_K))

/**
 * His fair hair, in the head's own frame: curling over the crown and down the
 * back of the head, and in a curly lock in front of the ear on each side of
 * his face, down to the line of the jaw.
 */
const HAIR_K: Knot[] = [
  [227, 70],
  [218, 77],
  [206, 81],
  [196, 90],
  [190, 106],
  [189, 126],
  [191, 146],
  [189, 166],
  [182, 184, 1],
  [172, 180],
  [168, 160],
  [166, 138],
  [158, 122],
  [144, 120],
  [134, 132],
  [128, 158],
  [118, 186],
  [104, 208, 1],
  [92, 196],
  [82, 166],
  [80, 128],
  [88, 90],
  [108, 56],
  [144, 33],
  [186, 27],
  [214, 37],
  [229, 54],
]
const HAIR_PLACED = F.knots(HAIR_K)
const HAIR = smooth(HAIR_PLACED)

/** The shirt, white linen over the broad shoulders and the chest. */
const SHIRT = smooth([
  [-8, 330, 1],
  [-6, 298],
  [4, 270],
  [24, 250],
  [54, 236],
  [86, 226],
  [108, 216],
  [150, 222],
  [196, 216],
  [222, 224],
  [242, 240],
  [256, 266],
  [264, 300],
  [266, 330, 1],
])

/** The near arm in its shirt sleeve, hanging at his side: the round of the shoulder, the great upper arm. */
const ARM = smooth([
  [56, 266],
  [64, 244],
  [88, 232],
  [118, 232],
  [142, 242],
  [158, 262],
  [164, 292],
  [166, 330, 1],
  [62, 330, 1],
  [56, 298],
])

/** The leather apron's bib, on the front of his chest beyond the arm. */
const BIB = smooth([
  [166, 254, 1],
  [204, 242],
  [230, 246, 1],
  [246, 266],
  [256, 298],
  [260, 330, 1],
  [166, 330, 1],
])
/** Its strap, from the top of the bib up round the side of his neck. */
const STRAP = 'M206 245C196 232 182 225 164 221C146 218 126 217 108 221'

/** The forge fire at the bottom right: base, height, lean. */
const FLAMES: [number, number, number, number][] = [
  [292, 316, 44, 3],
  [308, 316, 30, -2],
  [278, 316, 24, 2],
]

type Marks = {
  ground: { paper: string; red: string }
  bumps: string
  curls: string
  hairShade: string
  back: string
  neck: string
  armShade: string
  shirt: string
  arm: string
  burns: string
  sparks: string
}

/** Points every `step` units along a run of a polygon, from index a to index b. */
function along(pts: Pt[], a: number, b: number, step: number): Pt[] {
  const out: Pt[] = []
  for (let i = a; i < b; i++) {
    const [x0, y0] = pts[i % pts.length]
    const [x1, y1] = pts[(i + 1) % pts.length]
    const L = Math.hypot(x1 - x0, y1 - y0)
    for (let t = 0; t < L; t += step) out.push([x0 + ((x1 - x0) * t) / L, y0 + ((y1 - y0) * t) / L])
  }
  return out
}

const marks = once<Marks>(() => {
  // Lit from the forge fire at the bottom right. Its light prints red only
  // close round the flames, far below his face.
  const fire = (x: number, y: number) => Math.hypot(x - 300, (y - 326) * 1.15)
  const ground = splitGround(
    7101,
    (x, y) => clamp(0.06 + ((x - 30) / 300) * 0.5 + (1 - fire(x, y) / 250) * 0.75),
    (x, y) => y > 252 && fire(x, y) < 78,
  )
  const r = rng(7102)
  const poly: Pt[] = HAIR_PLACED.map(([x, y]): Pt => [x, y])
  // The outer edge of the hair is a run of curls, so it stands off the
  // skull curling, not as a cap: round bumps along it, each with its ring.
  let bumps = ''
  let curls = ''
  const ring = (x: number, y: number, rad: number) => {
    const a0 = between(r, 0, Math.PI * 2)
    const a1 = a0 + between(r, 3.8, 4.9)
    curls += `M${n(x + Math.cos(a0) * rad)} ${n(y + Math.sin(a0) * rad)}A${n(rad)} ${n(rad)} 0 1 1 ${n(x + Math.cos(a1) * rad)} ${n(y + Math.sin(a1) * rad)}`
  }
  for (const [x, y] of along(poly, 17, 27, 7.5)) {
    const rad = between(r, 4.2, 6)
    bumps += `M${n(x - rad)} ${n(y)}a${n(rad)} ${n(rad)} 0 1 0 ${n(2 * rad)} 0a${n(rad)} ${n(rad)} 0 1 0 ${n(-2 * rad)} 0Z`
    ring(x + between(r, -1, 1), y + between(r, -1, 1), rad * 0.62)
  }
  // Along the front edge, the hairline and the lock beside the face, a close
  // row of curls, so the paper hair has an edge on the paper face.
  for (const [x, y] of along(poly, 0, 9, 4.6))
    ring(x - 2.4, y + between(r, -0.8, 0.8), between(r, 2, 3))
  curls += curlMarks(r, HAIR_PLACED, 170, [2.2, 4.2])
  // The hair's shadow on the side away from the fire.
  const [cx, cy] = F.pt([150, 116])
  let hairShade = ''
  for (let rad = 50; rad < 80; rad += 3)
    hairShade += arcDashes(r, cx, cy, rad, deg(112), deg(212), [5, 13], [2, 6])
  // The shadow round the back of the jaw and down the back of the neck.
  let back = ''
  const [bx, by] = F.pt([176, 150])
  for (let rad = 52; rad < 84; rad += 3.4)
    back += arcDashes(r, bx, by, rad, deg(104), deg(148), [8, 20], [2, 5])
  const neck = hatch(r, { x0: 100, x1: 172, y0: 186, y1: 226 }, 5, 0.1)
  // The shadow down the back of the great arm, away from the fire.
  const armShade = hatch(r, { x0: 50, x1: 92, y0: 250, y1: 330 }, 4.6, -0.18)
  // Folds in the shirt across the back and the chest.
  const shirt = 'M10 270Q26 258 50 250M4 296Q18 284 40 278M196 230Q206 236 212 244'
  // The great arm: the round of the shoulder, and the muscle swelling under
  // the sleeve, lit from the fire in front.
  const arm =
    'M74 246Q104 236 136 248M66 270Q78 286 82 312M150 270Q156 290 156 318' +
    'M112 254Q126 272 128 300M92 262Q96 276 94 292'
  // "the old burnt apron": small scorches cut in the leather.
  let burns = ''
  const spots: Pt[] = [
    [198, 262],
    [224, 278],
    [190, 296],
    [236, 306],
    [210, 316],
  ]
  for (const [x, y] of spots)
    burns += gouge(x, y, x + between(r, 3, 6), y + between(r, -2, 2), between(r, 1, 1.7))
  // A few sparks rising from the fire into the dark, cut in paper.
  let sparks = ''
  for (let i = 0; i < 8; i++) {
    const x = between(r, 272, 316)
    const y = between(r, 176, 256)
    const a = deg(between(r, -110, -72))
    const L = between(r, 3, 6)
    sparks += gouge(x, y, x + Math.cos(a) * L, y + Math.sin(a) * L, 0.9)
  }
  return { ground, bumps, curls, hairShade, back, neck, armShade, shirt, arm, burns, sparks }
})

/** "eyes of such a very undecided blue": a pale ring of an iris lost in the white. */
function PaleEye() {
  const p = F.p
  const [ix, iy] = F.pt([224.6, 127.6])
  return (
    <g fill="none" stroke={INK} strokeLinecap="round">
      <path d={`M${p(211.5, 127.5)}Q${p(220.5, 120.5)} ${p(230.5, 125.5)}`} strokeWidth={2.2} />
      <path d={`M${p(213.5, 131.5)}Q${p(221.5, 135.5)} ${p(229, 130.5)}`} strokeWidth={LINE.fine} />
      <path d={`M${p(212.5, 121.5)}Q${p(220, 117)} ${p(229, 120.5)}`} strokeWidth={LINE.hairline} />
      <circle cx={n(ix)} cy={n(iy)} r={2.9} strokeWidth={LINE.hairline} />
      <circle cx={n(ix + 0.4)} cy={n(iy)} r={1.15} fill={INK} stroke="none" />
    </g>
  )
}

function JoePortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-jg-head`
  const hairClip = `${uid}-jg-hair`
  const bibClip = `${uid}-jg-bib`
  const armClip = `${uid}-jg-arm`
  const [ax, ay] = F.pt(MAN_EAR)
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
          <path d={m.bumps} />
        </clipPath>
        <clipPath id={bibClip}>
          <path d={BIB} />
        </clipPath>
        <clipPath id={armClip}>
          <path d={ARM} />
        </clipPath>
      </defs>
      <path d={m.ground.paper} fill={PAPER} />
      <path d={m.ground.red} fill={RED} />
      <path d={m.sparks} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={HAIR} />
        <path d={m.bumps} />
        <path d={SHIRT} />
      </g>
      <path d={SHIRT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.shirt} fill="none" stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round" />
      {/* The leather apron's bib, and its strap up round the side of his neck. */}
      <path d={BIB} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${bibClip})`}>
        <path d={m.burns} fill={PAPER} />
        <path
          d="M172 270Q208 260 250 272M174 304Q212 296 258 308"
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.hairline}
        />
      </g>
      <path d={HEAD} fill={PAPER} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.back} strokeWidth={1.5} />
        <path d={m.neck} strokeWidth={LINE.hairline} />
      </g>
      {/* The open neck of the shirt. */}
      <path
        d="M198 217L212 232L203 238M198 219Q194 232 198 246"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d={STRAP} fill="none" stroke={PAPER} strokeWidth={8.6} strokeLinecap="butt" />
      <path d={STRAP} fill="none" stroke={INK} strokeWidth={5.4} strokeLinecap="butt" />
      {/* "curls of flaxen hair", fair, cut in paper. */}
      <path d={m.bumps} fill={PAPER} />
      <path d={HAIR} fill={PAPER} />
      <g clipPath={`url(#${hairClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.curls} strokeWidth={0.95} />
        <path d={m.hairShade} strokeWidth={0.9} />
      </g>
      <ProfileEar at={[ax, ay]} h={42} />
      <ManFeatures F={F} brow={2.2} raise={1.5} mouth="smile" />
      <PaleEye />
      {/* The near arm, hanging at his side in its shirt sleeve. */}
      <path d={ARM} fill={PAPER} stroke={INK} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${armClip})`}>
        <path d={m.armShade} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <path d={m.arm} fill="none" stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round" />
      {/* His forge fire. */}
      <g className="lc-flicker" style={timing({ delay: 0.3, dur: 1.6 })}>
        {FLAMES.map(([x, y, h, lean]) => (
          <path key={x} d={flame(x, y, h, lean)} fill={RED} />
        ))}
      </g>
      <path d={flame(293, 316, 20, 2) + flame(308, 316, 12, -1)} fill={PAPER} />
      <InnerRule />
    </>
  )
}

export const joeGargeryArt: LinocutArt = { width: PW, height: PH, Draw: JoePortrait }

export const joeGargery: Portrait = {
  name: 'Joe Gargery',
  art: joeGargeryArt,
  alt: "A linocut portrait of Joe Gargery in profile, facing right, drawn from Dickens's description in Chapter 2. He is a young blacksmith with a smooth, clean-shaven face, a mild, easy smile and a light, lifted brow. His fair hair is cut in white and curls all over his head and down in front of his ear on each side of his face. His eye is pale, its iris a fine ring round a small pupil, almost lost in the white. He has a thick neck, broad, heavy shoulders and a great arm, and wears a white shirt open at the throat under a dark leather apron with a few small scorch marks, its strap round his neck. In front of him, at the bottom right, his forge fire burns red, and a few sparks rise into the dark. Four numbered red markers point to his curly hair, his pale eye, his mild face and his great arm.",
  describedBy: [
    {
      phrase: 'curls of flaxen hair on each side of his smooth face',
      at: [40, 108],
      to: [86, 100],
    },
    { phrase: 'eyes of such a very undecided blue', at: [292, 108], to: [216, 110] },
    {
      phrase: 'a mild, good-natured, sweet-tempered, easy-going, foolish, dear fellow',
      at: [196, 130],
    },
    { phrase: 'a sort of Hercules in strength', at: [28, 222], to: [72, 254] },
  ],
  where: 'Chapter 2',
  passage:
    'Joe was a fair man, with curls of flaxen hair on each side of his smooth face, and with eyes of such a very undecided blue that they seemed to have somehow got mixed with their own whites. He was a mild, good-natured, sweet-tempered, easy-going, foolish, dear fellow—a sort of Hercules in strength, and also in weakness.',
  note: 'Dickens sets a blacksmith’s strength beside a gentle, simple nature. Joe lets Mrs Joe rule the house because he would rather suffer himself than do wrong by a woman, as he saw his father do by his mother (Chapter 7): his strength and his weakness are the same goodness.',
  artNote:
    'The print has no blue, so the colour of his eyes is left to the words. His leather apron comes from Chapters 5 and 27, and the red is his forge fire, not any colour in him.',
}
