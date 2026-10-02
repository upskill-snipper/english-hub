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

import {
  InnerRule,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  combedHair,
  inside,
  once,
  placer,
  smooth,
  splitGround,
  type Knot,
} from './common'

/**
 * Godfrey Cass, as George Eliot describes him, and nothing else. Chapter 3,
 * the first time we see him, in his father's house on a late November
 * afternoon, waiting for his brother:
 *
 *   "It was the once hopeful Godfrey who was standing, with his hands in his
 *   side-pockets and his back to the fire, in the dark wainscoted parlour,
 *   one late November afternoon in that fifteenth year of Silas Marner's
 *   life at Raveloe."
 *
 * and, in the same paragraph, "the look of gloomy vexation on Godfrey's
 * blond face"; earlier in the chapter "a fine open-faced good-natured young
 * man who was to come into the land some day"; later in it, "Godfrey stood,
 * still with his back to the fire, uneasily moving his fingers among the
 * contents of his side-pockets, and looking at the floor. That big muscular
 * frame of his held plenty of animal courage".
 *
 * So the description is a stance as much as a face, and he is drawn half
 * length to show it: a big, broad-shouldered young man of twenty-six facing
 * us squarely, his elbows out and his hands thrust into the pockets at his
 * waist, his head turned in profile to the right and bowed a little, his eyes
 * on the floor. The face is open and regular ("open-faced"), its brow drawn
 * down and knit and the corner of the mouth turned down ("gloomy vexation").
 * His hair is fair, cut in paper as the panels cut it ("blond"), cropped and
 * curling in the way of about 1800; that cut is the period's, not the
 * text's. The fire is behind him, out of sight below the block: its light
 * rises red on the lower panels of the wall on either side of him and in the
 * gaps under his arms, and stops well below his face, which is lit only by
 * the grey window light from the right. The wall above the rail is the dark
 * panelling of the parlour.
 *
 * His dress is not described, so it is the plain dress of a squire's son of
 * about 1800: a dark tail-coat with a high collar, cut away at the waist, a
 * striped waistcoat, a white neckcloth wound high, and pale breeches. He
 * matches the Godfrey of the panels (../panels/people.tsx): the broadest man
 * in the book, with an open profile and fair hair. Nothing here comes from a
 * film or stage production.
 *
 * The head is drawn in the frame the other portraits' heads are drawn in and
 * placed smaller with placer(), so it has the same proportions as theirs.
 * Seeds: 5401 for the ground, 5402 for the cuts in the figure.
 */

/** The head in its own frame, facing right: William Dane's frame, broader in the jaw. */
const HEAD_K: Knot[] = [
  [116, 262, 1],
  [112, 236],
  [98, 208],
  [86, 172],
  [84, 132],
  [94, 94],
  [116, 62],
  [148, 42],
  [184, 37],
  [211, 48],
  [227, 70],
  [233.5, 95],
  [235.5, 112],
  [231, 123],
  [235.5, 135],
  [243.5, 151],
  [250, 162, 1],
  [244.5, 167.5],
  [238, 169, 1],
  [239, 175],
  [237, 179, 1],
  [238.5, 183.5],
  [233.5, 189.5],
  [239, 199],
  [237.5, 211],
  [222, 219],
  [210, 228],
  [208, 246],
  [207, 262, 1],
]

/** His fair hair: cropped over the crown, round the ear, a short whisker before it. */
const HAIR_K: Knot[] = [
  [229, 76],
  [221, 81],
  [211, 79],
  [201, 84],
  [193, 94],
  [187, 108],
  [183, 126],
  [180, 146],
  [178, 158, 1],
  [170, 158, 1],
  [168, 136],
  [165, 116],
  [156, 106],
  [144, 109],
  [136, 126],
  [128, 152],
  [118, 180],
  [106, 198, 1],
  [92, 190],
  [82, 166],
  [79, 130],
  [89, 90],
  [113, 56],
  [148, 34],
  [187, 30],
  [215, 42],
  [228, 60],
]

/** Bowed seven degrees about the base of the neck: "looking at the floor". */
const F = placer([61.1, 2], 0.66, 7, [162, 262])
const HEAD = smooth(F.knots(HEAD_K))
const HAIR_PLACED = F.knots(HAIR_K)
const HAIR = smooth(HAIR_PLACED)
/** The crown of his head, where the cropped hair turns from. */
const CROWN = F.pt([150, 62])

/** The coat on his body, square to us; the arms are drawn over it. */
const TORSO = smooth([
  [140, 162, 1],
  [116, 174],
  [90, 182],
  [72, 192],
  [80, 206],
  [98, 214],
  [104, 250],
  [112, 284],
  [104, 330, 1],
  [232, 330, 1],
  [224, 284],
  [232, 250],
  [238, 214],
  [256, 206],
  [264, 192],
  [246, 182],
  [220, 174],
  [198, 162, 1],
])

/** The coat's high collar, standing up behind his neck. */
const COLLAR = smooth([
  [108, 180, 1],
  [118, 156],
  [128, 136],
  [142, 128],
  [152, 138],
  [150, 168, 1],
])

/** A striped waistcoat in the opening of the coat, cut straight across at the waist. */
const WAISTCOAT = smooth([
  [150, 172, 1],
  [190, 172, 1],
  [198, 208],
  [206, 284, 1],
  [130, 284, 1],
  [138, 204],
])

/** Pale breeches below it, between the cut-away fronts of the coat. */
const BREECHES = smooth([
  [128, 282, 1],
  [208, 282, 1],
  [216, 300],
  [228, 330, 1],
  [108, 330, 1],
  [120, 300],
])

/** The white neckcloth, wound high round his neck and tied at the front. */
const NECKCLOTH = smooth([
  [142, 154, 1],
  [160, 151],
  [180, 150],
  [200, 150],
  [212, 154, 1],
  [208, 166],
  [192, 176],
  [168, 180, 1],
  [146, 176, 1],
  [140, 166],
])
/** The knot at the front of it, and its two short ends. */
const KNOT = smooth([
  [162, 168, 1],
  [176, 167, 1],
  [182, 184],
  [174, 192, 1],
  [166, 186],
  [158, 192, 1],
  [156, 182],
])

/** His left arm (on our left), the elbow out, the hand thrust into the pocket. */
const ARM: Knot[] = [
  [74, 184],
  [54, 200],
  [42, 224],
  [34, 248],
  [38, 264],
  [56, 278],
  [84, 292],
  [114, 304, 1],
  [124, 287, 1],
  [96, 272],
  [72, 256],
  [78, 232],
  [94, 212],
  [104, 194],
]
const mirror = (ks: Knot[]): Knot[] =>
  ks.map((k): Knot => (k[2] ? [336 - k[0], k[1], 1] : [336 - k[0], k[1]]))
const ARM_L = smooth(ARM)
const ARM_R = smooth(mirror(ARM))

/** The shirt cuff at the end of each sleeve, where the hand goes into the pocket. */
const CUFF_L = 'M108.8 301.3L118.8 283.1L125 286.4L114.8 304.6Z'
const CUFF_R = 'M227.2 301.3L217.2 283.1L211 286.4L221.2 304.6Z'
/** The pockets: dark slits at the top of the breeches, where the hands go in. */
const POCKETS = 'M124 290Q120 299 116 308M212 290Q216 299 220 308'

/** The panelling: two stiles and the rail, solid dark, over the cut ground. */
const STILES = 'M66 12H78V194H66ZM258 12H270V194H258ZM12 190H320V200H12Z'
/** Their lit edges, towards the window. */
const STILE_EDGES = 'M66 12V190M258 12V190M12 200H320'

type Marks = {
  ground: { paper: string; red: string }
  hair: string
  hairShade: string
  jaw: string
  cheek: string
  waistcoat: string
  coat: string
  sleeves: string
  breeches: string
}

const marks = once<Marks>(() => {
  // Grey window light from the right. The fire's red light comes up from
  // below and behind him: it lights the lower panels only, under the rail.
  const fire = (x: number, y: number) =>
    Math.min(Math.hypot(x - 44, (y - 330) * 1.2), Math.hypot(x - 292, (y - 330) * 1.2))
  const ground = splitGround(
    5401,
    (x, y) =>
      y > 200
        ? clamp(1.2 - fire(x, y) / 150)
        : clamp(0.04 + ((x - 40) / 290) * 0.5 + Math.max(0, (120 - y) / 600)),
    (x, y) => y > 200,
  )
  const r = rng(5402)
  // Cropped fair hair, cut as Poole's white hair is: short strokes lying
  // round the skull, thickest over the back of the head, away from the light,
  // and no outline where the hair meets the brow, or it reads as a cap. A row
  // of small curls along the fringe and the whisker: "curling".
  let hair = combedHair(r, HAIR_PLACED, [CROWN[0] + 4, CROWN[1] + 24], 330, [4, 8])
  const poly = HAIR_PLACED.map(([x, y]): Pt => [x, y])
  for (let i = 0, tries = 0; i < 70 && tries < 4000; tries++) {
    const x = between(r, 70, 150)
    const y = between(r, 20, 140)
    if (!inside(poly, x, y)) continue
    const a = between(r, deg(150), deg(260))
    const L = between(r, 4, 7)
    hair += `M${n(x)} ${n(y)}l${n(Math.cos(a) * L)} ${n(Math.sin(a) * L)}`
    i++
  }
  // The fringe: short strokes brushed forward and down to the hairline, so
  // the hair has an edge on the brow without an outline, and a few curls.
  const edge: Pt[] = [
    [229, 76],
    [220, 81],
    [210, 80],
    [200, 85],
    [192, 96],
    [186, 111],
    [182, 129],
    [180, 148],
  ]
  for (let i = 0; i < edge.length - 1; i++) {
    const [ax, ay] = edge[i]
    const [bx, by] = edge[i + 1]
    const L = Math.hypot(bx - ax, by - ay)
    for (let t = 0; t < L; t += 3) {
      const x = ax + ((bx - ax) * t) / L
      const y = ay + ((by - ay) * t) / L
      const [x0, y0] = F.pt([x - between(r, 7, 13), y - between(r, 2, 5)])
      const [x1, y1] = F.pt([x - between(r, 0, 1.2), y + between(r, 0.5, 2.5)])
      hair += `M${n(x0)} ${n(y0)}Q${n((x0 + x1) / 2 + between(r, -0.8, 0.8))} ${n((y0 + y1) / 2 - 0.8)} ${n(x1)} ${n(y1)}`
    }
  }
  for (const k of [0.15, 0.4, 0.62, 0.85]) {
    const i = Math.floor(k * (edge.length - 1))
    const [x, y] = F.pt([
      edge[i][0] + (edge[i + 1][0] - edge[i][0]) * 0.5 - 4,
      edge[i][1] + (edge[i + 1][1] - edge[i][1]) * 0.5,
    ])
    const rad = between(r, 2.4, 3)
    hair += `M${n(x + rad)} ${n(y)}A${n(rad)} ${n(rad)} 0 1 1 ${n(x)} ${n(y + rad)}`
  }
  let hairShade = ''
  for (let rad = 38; rad < 62; rad += 2.8)
    hairShade += arcDashes(
      r,
      CROWN[0] + 10,
      CROWN[1] + 30,
      rad,
      deg(120),
      deg(200),
      [6, 14],
      [2, 5],
    )
  // The shadow under the jaw, behind the ear.
  let jaw = ''
  for (let i = 0; i < 5; i++) {
    const [x0, y0] = F.pt([166 + i * 7, 202 + i * 2.5])
    const [x1, y1] = F.pt([160 + i * 7, 222 + i * 1.5])
    jaw += `M${n(x0)} ${n(y0)}L${n(x1)} ${n(y1)}`
  }
  const [cx, cy] = F.pt([204, 150])
  let cheek = ''
  for (let rad = 7; rad < 13; rad += 2.4)
    cheek += arcDashes(r, cx, cy, rad, deg(62), deg(128), [5, 10], [1.5, 3])
  // The stripes of the waistcoat.
  let waistcoat = ''
  for (let x = 134; x < 206; x += 5.4) waistcoat += gouge(x, 174, x + (x - 168) * 0.12, 284, 0.9)
  // Folds of the coat, lit from the right.
  const coat =
    gouge(230, 214, 226, 276, 1.4, -1) +
    gouge(110, 222, 114, 270, 0.9, 1) +
    gouge(226, 300, 230, 326, 1.2, -1)
  const sleeves =
    gouge(280, 206, 294, 240, 1.6, 1) +
    gouge(270, 214, 282, 240, 1, 1) +
    gouge(296, 262, 270, 278, 1.3, -1) +
    gouge(278, 280, 250, 290, 1, -1) +
    gouge(54, 214, 44, 240, 0.9, -1) +
    gouge(44, 266, 68, 276, 0.8, 1)
  const breeches =
    'M130 290L206 290' + gouge(150, 298, 142, 326, 0.7, 0.5) + gouge(186, 298, 194, 326, 0.7, -0.5)
  return { ground, hair, hairShade, jaw, cheek, waistcoat, coat, sleeves, breeches }
})

function GodfreyPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-gc-head`
  const hairClip = `${uid}-gc-hair`
  const vestClip = `${uid}-gc-vest`
  const p = F.p
  const [ex, ey] = F.pt([222, 127])
  const [ax, ay] = F.pt([157, 112])
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={vestClip}>
          <path d={WAISTCOAT} />
        </clipPath>
      </defs>
      <path d={m.ground.paper} fill={PAPER} />
      <path d={m.ground.red} fill={RED} />
      <path d={STILES} fill={INK} />
      <path d={STILE_EDGES} fill="none" stroke={PAPER} strokeWidth={LINE.fine} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={HAIR} />
        <path d={TORSO} />
        <path d={ARM_L} />
        <path d={ARM_R} />
      </g>
      <path d={TORSO} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <path d={BREECHES} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.breeches} fill={PAPER} stroke={INK} strokeWidth={LINE.hairline} />
      <path d={WAISTCOAT} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <g clipPath={`url(#${vestClip})`}>
        <path d={m.waistcoat} fill={PAPER} />
      </g>
      {/* The lapels of the coat, turned back either side of the waistcoat. */}
      <path
        d="M150 176Q132 192 118 212L136 226M190 176Q206 192 218 212L200 226"
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={HEAD} fill={PAPER} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.jaw} strokeWidth={LINE.hairline} />
        <path d={m.cheek} strokeWidth={LINE.hairline} />
      </g>
      <path d={NECKCLOTH} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d="M146 162Q170 158 206 160M150 171Q166 168 196 168M188 158Q196 166 202 162"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      <path d={KNOT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path
        d="M166 170L169 184M174 170L172 184"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      <path d={HAIR} fill={PAPER} />
      <g clipPath={`url(#${hairClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.hair} strokeWidth={0.85} />
        <path d={m.hairShade} strokeWidth={0.9} />
      </g>
      <ProfileEar at={[ax, ay]} h={32} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* the jaw, back to below the ear */}
        <path
          d={`M${p(231, 214)}C${p(212, 220)} ${p(190, 214)} ${p(177, 199)}C${p(173, 193)} ${p(171, 185)} ${p(171, 177)}`}
          strokeWidth={1.5}
        />
        {/* "gloomy vexation": the brow knit and drawn down towards the nose */}
        <path d={`M${p(202, 106)}Q${p(218, 102)} ${p(234, 114)}`} strokeWidth={2.6} />
        <path
          d={`M${p(232, 98)}L${p(230, 107)}M${p(227.5, 96)}L${p(226, 104)}`}
          strokeWidth={LINE.hairline}
        />
        {/* nostril, the fold from the nose, the mouth turned down at the corner */}
        <path
          d={`M${p(244.5, 166)}C${p(240.5, 163.5)} ${p(240, 159.5)} ${p(243, 157)}`}
          strokeWidth={1.3}
        />
        <path
          d={`M${p(235, 152)}C${p(229, 159)} ${p(226.5, 168)} ${p(228, 176)}`}
          strokeWidth={LINE.fine}
        />
        <path
          d={`M${p(237.5, 179)}L${p(228, 180.5)}Q${p(224.5, 182)} ${p(224, 187)}`}
          strokeWidth={1.7}
        />
        <path d={`M${p(233.5, 189)}Q${p(231, 192)} ${p(232.5, 195)}`} strokeWidth={LINE.hairline} />
      </g>
      <ProfileEye at={[ex, ey]} s={0.74} heavy look={-0.6} />
      {/* His arms, the elbows out, the hands in his pockets. */}
      <path d={POCKETS} fill="none" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
      <path d={ARM_L} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={ARM_R} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.sleeves} fill={PAPER} />
      <path d={CUFF_L + CUFF_R} fill={PAPER} stroke={INK} strokeWidth={LINE.hairline} />
      <InnerRule />
    </>
  )
}

export const godfreyCassArt: LinocutArt = { width: PW, height: PH, Draw: GodfreyPortrait }

export const godfreyCass: Portrait = {
  name: 'Godfrey Cass',
  art: godfreyCassArt,
  alt: "A linocut portrait of Godfrey Cass, drawn half length from George Eliot's description in Chapter 3. A big, broad-shouldered young man stands squarely facing us with his elbows out and his hands pushed into the pockets at his waist, his head turned in profile to the right and bowed a little, his eyes on the floor. His face is open and regular, but his brow is drawn down and knit and the corner of his mouth turns down. His fair hair is cropped and curling. He wears a dark tail-coat with a high collar, a striped waistcoat, a white neckcloth wound high round his neck, and pale breeches. Behind him is the dark panelled wall of the parlour, and low down on either side of him, and in the gaps under his arms, it glows red with the light of the fire at his back. Five numbered red markers point to his hands in his pockets, the red firelight behind him, the panelled wall, his frowning brow and his fair hair.",
  describedBy: [
    { phrase: 'his hands in his side-pockets', at: [306, 296], to: [222, 300] },
    { phrase: 'his back to the fire', at: [24, 294], to: [86, 262] },
    { phrase: 'the dark wainscoted parlour', at: [38, 110], to: [72, 100] },
    { phrase: 'the look of gloomy vexation', at: [292, 52], to: [222, 74] },
    { phrase: 'Godfrey’s blond face', at: [96, 26], to: [138, 44] },
  ],
  where: 'Chapter 3',
  passage:
    'It was the once hopeful Godfrey who was standing, with his hands in his side-pockets and his back to the fire, in the dark wainscoted parlour, one late November afternoon in that fifteenth year of Silas Marner’s life at Raveloe. The fading grey light fell dimly on the walls decorated with guns, whips, and foxes’ brushes, on coats and hats flung on the chairs, on tankards sending forth a scent of flat ale, and on a half-choked fire, with pipes propped up in the chimney-corners: signs of a domestic life destitute of any hallowing charm, with which the look of gloomy vexation on Godfrey’s blond face was in sad accordance.',
  note: 'The heir to the Red House is already trapped when we meet him: he is waiting for the brother who knows his secret marriage, and Eliot lets his whole body show it before he says a word.',
  artNote:
    'Eliot never describes his clothes, so he wears the plain dress of a squire’s son of about 1800. The fire is below the block, so the print shows only its red light on the wall behind him.',
}
