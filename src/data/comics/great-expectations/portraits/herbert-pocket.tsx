import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  FACE_LEFT,
  InnerRule,
  MAN_EAR,
  MAN_HEAD,
  ManFeatures,
  PH,
  PW,
  ProfileEar,
  combedHair,
  flip,
  hatch,
  nudge,
  once,
  placer,
  portraitGround,
  smooth,
  type Knot,
} from './common'

/**
 * Herbert Pocket as a young man, as Dickens describes him, and nothing else.
 * Chapter 22, when Pip comes to Barnard's Inn and finds that the friend he is
 * to share rooms with is the boy he fought in the garden at Satis House:
 *
 *   "He was still a pale young gentleman, and had a certain conquered
 *   languor about him in the midst of his spirits and briskness, that did
 *   not seem indicative of natural strength. He had not a handsome face, but
 *   it was better than handsome: being extremely amiable and cheerful. His
 *   figure was a little ungainly, as in the days when my knuckles had taken
 *   such liberties with it, but it looked as if it would always be light and
 *   young. Whether Mr. Trabb's local work would have sat more gracefully on
 *   him than on me, may be a question; but I am conscious that he carried
 *   off his rather old clothes, much better than I carried off my new suit."
 *
 * So: a young man in profile, facing left, his face cut in paper and left
 * almost unshaded ("a pale young gentleman"); an ordinary face, not a
 * handsome one, lit by a wide, easy smile that lifts the cheek and creases
 * the eye ("extremely amiable and cheerful"); a long, thin neck and narrow,
 * sloping shoulders, a little too long in the arm-hole for his coat ("a
 * little ungainly", "light and young"); and a coat that has seen better
 * days, its collar frayed, its lapel shiny with wear and a darn on the
 * shoulder ("his rather old clothes"). His hair is "light hair", from his
 * first appearance as "a pale young gentleman with red eyelids and light
 * hair" (Chapter 11), short and combed back, cut in paper, as the figure kit
 * cuts it (../panels/people.tsx). The print cannot show red eyelids without
 * a red mark beside the eye, which reads as a wound, so they are left to the
 * words, as the kit leaves them. Nothing here comes from a film or stage
 * production.
 *
 * Drawn facing right and turned by FACE_LEFT, so the markers below are
 * placed with flip(). Seeds: 7801 for the ground, 7802 for the cuts in the
 * figure.
 */

/** The one man's head, its neck longer and thinner: "a little ungainly", "light". */
const HEAD_K: Knot[] = nudge(MAN_HEAD, [
  [0, 8, 0],
  [1, 7, 0],
  [2, 3, 0],
  [26, -3, 0],
  [27, -6, 0],
  [28, -6, 0],
])

const F = placer([26, -4], 0.88)
const HEAD = smooth(F.knots(HEAD_K))

/** Short light hair, combed back from the brow, cut close above the ear and at the nape. */
const HAIR_K: Knot[] = [
  [226, 70],
  [216, 58],
  [196, 44],
  [166, 36],
  [134, 40],
  [108, 56],
  [94, 82],
  [88, 116],
  [90, 150],
  [100, 182],
  [114, 204, 1],
  [126, 194],
  [132, 168],
  [142, 146],
  [154, 126],
  [168, 114],
  [178, 112, 1],
  [186, 100],
  [200, 86],
  [214, 78],
]
const HAIR_PLACED = F.knots(HAIR_K)
const HAIR = smooth(HAIR_PLACED)

/** The old coat over narrow, sloping shoulders. */
const COAT = smooth([
  [6, 330, 1],
  [12, 296],
  [30, 266],
  [64, 248],
  [104, 240],
  [138, 244],
  [176, 252],
  [212, 252],
  [236, 264],
  [252, 292],
  [258, 330, 1],
])
/** Its collar, standing round the back of the long neck. */
const COLLAR = smooth([
  [96, 252, 1],
  [104, 226],
  [124, 222],
  [146, 234],
  [160, 254],
  [140, 266, 1],
])
/** A plain white neckcloth, a little limp. */
const NECKCLOTH = smooth([
  [140, 236, 1],
  [172, 234],
  [204, 230],
  [212, 242],
  [208, 258],
  [180, 262],
  [146, 258, 1],
])
const LAPEL = smooth([
  [208, 258, 1],
  [230, 266],
  [244, 296],
  [248, 330, 1],
  [232, 330, 1],
  [226, 296],
])
/** The darn on the shoulder. */
const DARN = 'M60 262L84 256L88 274L64 280Z'

type Marks = {
  ground: string
  hair: string
  back: string
  neck: string
  coat: string
  fray: string
  darn: string
  sheen: string
}

const marks = once<Marks>(() => {
  // Daylight from a window in front of him; the room behind him dim.
  const ground = portraitGround(7801, (x, y) =>
    clamp(0.1 + ((x - 50) / 270) * 0.85 - Math.max(0, (y - 260) / 260)),
  )
  const r = rng(7802)
  // Light hair, combed back: fine ink strokes along it, and a darker band
  // at the back where it is in shadow.
  const hair = combedHair(r, HAIR_PLACED, F.pt([150, 136]), 150, [5, 10])
  // The shadow round the back of the jaw, faint: a pale face.
  let back = ''
  for (let i = 0; i < 5; i++) {
    const [x0, y0] = F.pt([168 + i * 6, 202 + i * 2])
    const [x1, y1] = F.pt([162 + i * 6, 220 + i * 1.5])
    back += `M${n(x0)} ${n(y0)}L${n(x1)} ${n(y1)}`
  }
  const neck = hatch(r, { x0: 116, x1: 150, y0: 196, y1: 240 }, 5.4, 0.1)
  // The old coat: its folds, and the cloth gone thin and shiny at the lapel.
  const coat =
    gouge(40, 280, 26, 320, 1.8, 2) +
    gouge(84, 270, 76, 320, 1.4, 2) +
    gouge(150, 276, 154, 320, 1, -1)
  let sheen = ''
  for (let i = 0; i < 4; i++) sheen += gouge(222 + i * 4, 276 + i * 6, 228 + i * 4, 318, 0.7, -0.5)
  // "his rather old clothes": the collar's edge frayed into short threads.
  let fray = ''
  for (let i = 0; i < 12; i++) {
    const t = i / 11
    const x = 104 + t * 42
    const y = 226 + Math.sin(t * Math.PI * 0.8) * 4 + t * 6
    fray += `M${n(x)} ${n(y)}l${n(between(r, -1.5, 1.5))} ${n(-between(r, 2.5, 4.5))}`
  }
  // The darn: close rows of stitches across the worn place on the shoulder.
  let darn = ''
  for (let y = 259; y < 279; y += 2.6) darn += `M62 ${n(y + 1)}L86 ${n(y - 5)}`
  for (let x = 64; x < 86; x += 3)
    darn += `M${n(x)} ${n(262 - (x - 62) * 0.25)}L${n(x + 3)} ${n(278 - (x - 62) * 0.25)}`
  return { ground, hair, back, neck, coat, fray, darn, sheen }
})

function HerbertPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-hp-head`
  const hairClip = `${uid}-hp-hair`
  const p = F.p
  const [ax, ay] = F.pt(MAN_EAR)
  const [ex, ey] = F.pt([224, 125.6])
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
      <g transform={FACE_LEFT}>
        <path d={m.ground} fill={PAPER} />
        {/* The ink halo that lifts the figure off the ground. */}
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={HEAD} />
          <path d={HAIR} />
          <path d={COAT} />
        </g>
        <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.coat} fill={PAPER} />
        <path d={m.sheen} fill={PAPER} />
        <path d={DARN} fill={INK} stroke={PAPER} strokeWidth={LINE.hairline} />
        <path d={m.darn} fill="none" stroke={PAPER} strokeWidth={0.6} />
        <path d={HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={LINE.hairline} />
          <path d={m.neck} strokeWidth={LINE.hairline} />
        </g>
        {/* "light hair", short and combed back, cut in paper */}
        <path d={HAIR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <g clipPath={`url(#${hairClip})`}>
          <path
            d={m.hair}
            fill="none"
            stroke={INK}
            strokeWidth={LINE.hairline}
            strokeLinecap="round"
          />
        </g>
        <ProfileEar at={[ax, ay]} h={42} />
        {/* "extremely amiable and cheerful": a wide smile lifting the cheek */}
        <ManFeatures F={F} brow={2.6} raise={2} mouth="smile" />
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path d={`M${p(214, 152)}Q${p(219, 160)} ${p(222, 170)}`} strokeWidth={LINE.fine} />
          {/* the eye creased with smiling */}
          <path d={`M${p(212, 126)}Q${p(221, 119)} ${p(231, 124)}`} strokeWidth={2.3} />
          <path d={`M${p(213.5, 129.5)}Q${p(221, 127)} ${p(229.5, 128)}`} strokeWidth={1.3} />
          <path
            d={`M${p(210.5, 124.5)}L${p(203, 121)}M${p(210.5, 128)}L${p(203, 129.5)}`}
            strokeWidth={LINE.hairline}
          />
        </g>
        <circle cx={n(ex)} cy={n(ey)} r={2.1} fill={INK} />
        <circle cx={n(ex + 0.7)} cy={n(ey - 0.7)} r={0.7} fill={PAPER} />
        <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.fray} fill="none" stroke={PAPER} strokeWidth={0.9} strokeLinecap="round" />
        <path d={NECKCLOTH} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path
          d="M150 246Q178 244 206 240M154 254Q180 254 204 250"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
        />
        <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      </g>
      <InnerRule />
    </>
  )
}

export const herbertPocketArt: LinocutArt = { width: PW, height: PH, Draw: HerbertPortrait }

export const herbertPocket: Portrait = {
  name: 'Herbert Pocket',
  art: herbertPocketArt,
  alt: "A linocut portrait of Herbert Pocket as a young man, drawn from Dickens's description in Chapter 22, in profile, facing left. He has a pale, ordinary face, almost unshaded, lit by a wide, easy smile that lifts his cheek and creases the corner of his eye. His light hair is short and combed back. He has a long, thin neck and narrow, sloping shoulders, and wears an old dark coat with a frayed collar, a lapel worn shiny and a darn on the shoulder, and a plain white neckcloth. Four numbered red markers point to his pale face, his smile, his narrow shoulders and his old coat.",
  // Marker 2 sits on the cheek his smile lifts, just behind the corner of
  // the mouth. (It was first a line from the edge of the plate ending at his
  // lips, and at phone width the red line read as something in his mouth;
  // moved on review, 10 October 2026.)
  describedBy: [
    { phrase: 'a pale young gentleman', at: flip(F.pt([194, 146])) },
    { phrase: 'extremely amiable and cheerful', at: flip(F.pt([206, 176])) },
    { phrase: 'His figure was a little ungainly', at: [306, 222], to: flip([70, 250]) },
    { phrase: 'his rather old clothes', at: [304, 300], to: flip([76, 268]) },
  ],
  where: 'Chapter 22',
  passage:
    'He was still a pale young gentleman, and had a certain conquered languor about him in the midst of his spirits and briskness, that did not seem indicative of natural strength. He had not a handsome face, but it was better than handsome: being extremely amiable and cheerful. His figure was a little ungainly, as in the days when my knuckles had taken such liberties with it, but it looked as if it would always be light and young. Whether Mr. Trabb’s local work would have sat more gracefully on him than on me, may be a question; but I am conscious that he carried off his rather old clothes, much better than I carried off my new suit.',
  note: 'Herbert is everything Pip’s money cannot buy: poor, shabby and entirely at ease. Pip notices at once that his friend wears old clothes better than he wears his new ones.',
  artNote:
    'His “light hair” and his “red eyelids” are from his first appearance, in Chapter 11. The print cannot put red beside an eye without it reading as a wound, so his eyelids are left to the words.',
}
