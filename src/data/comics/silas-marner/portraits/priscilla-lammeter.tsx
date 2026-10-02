import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  Bloom,
  InnerRule,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  WOMAN_HEAD,
  hatch,
  lerp2,
  nudge,
  once,
  placer,
  portraitGround,
  rimLight,
  scallops,
  smooth,
  strands,
  twill,
  type Knot,
} from './common'

/**
 * Priscilla Lammeter, Nancy's elder sister, as George Eliot describes her,
 * and nothing else. Chapter 11, arriving to dress for the New Year's Eve
 * dance, "the entrance of that cheerful-looking lady herself, with a face
 * made blowsy by cold and damp", and, in her own words to the room,
 *
 *   "I'm obliged to have the same as Nancy, you know, for all I'm five years
 *   older"; "I feature my father's family"
 *
 * and then "The delicate process of getting her narrow gown over her head
 * without injury to her smooth curls". Their father is "her tall, erect
 * father" (the start of the same chapter).
 *
 * So: a woman a few years older than Nancy, in profile, facing right,
 * towards her sister, whose portrait faces her; cut from the same woman's
 * head as Nancy (WOMAN_HEAD), so that they look like sisters, but taller,
 * with a longer, stronger nose and a firmer chin, the features Priscilla
 * says she takes from her father; smiling, the eye creased with it
 * ("cheerful-looking"); her cheek red and roughened by the weather, printed
 * as a broad bloom on the cheekbone, well clear of the mouth ("blowsy by
 * cold and damp"); her dark hair drawn back into a knot, with smooth
 * ringlets hanging behind the ear ("smooth curls"). Where the curls fall is
 * the period's way, not the text's. She wears the same gown as Nancy, because she must: the silvery
 * twilled silk, narrow and high-waisted, with the lace tucker and the puffed
 * sleeve, cut exactly as Nancy's portrait cuts it. Eliot does not give the
 * colour of her hair, so it is dark. Nothing here comes from a film or stage
 * production.
 *
 * The words come from three places in the chapter, too far apart to print
 * as one passage, so the card prints the phrases alone. Priscilla's own
 * word for her looks is not one of them: the drawing shows a plain, pleasant
 * face, and leaves the judgement to her.
 *
 * Seeds: 5801 for the ground, 5802 for the cuts in the figure.
 */

/** The one woman's head with her father's features: a longer, stronger nose, a firmer chin. */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [14, 1, 0],
  [15, 3.5, 0],
  [16, 4.5, 2],
  [17, 3, 3],
  [18, 1, 3],
  [19, 1, 3],
  [20, 1, 3.5],
  [21, 1.5, 3.5],
  [22, 1, 4],
  [23, 2.5, 5],
  [24, 2, 6],
  [25, 1, 6],
])

/** Dark hair, drawn back smoothly over the ear into a knot behind. */
const HAIR_K: Knot[] = [
  [217, 72],
  [207, 84],
  [199, 98],
  [190, 108],
  [176, 112],
  [162, 107],
  [148, 111],
  [138, 126],
  [130, 146],
  [122, 162, 1],
  [108, 154],
  [102, 130],
  [106, 98],
  [124, 66],
  [154, 46],
  [188, 44],
  [210, 55],
]
/** The knot of hair pinned up at the back of the crown. */
const KNOT_C: Pt = [116, 84]

/** Her smooth curls: ringlets hanging behind the ear: the top and bottom of each. */
const CURLS: [Pt, Pt][] = [
  [
    [142, 132],
    [140, 178],
  ],
  [
    [131, 136],
    [128, 184],
  ],
  [
    [120, 140],
    [118, 180],
  ],
]

/** Taller than Nancy: the head at the men's size, placed as hers is. */
const F = placer([10, -4], 0.95)
const HEAD = smooth(F.knots(HEAD_K))
const HAIR = smooth(F.knots(HAIR_K))

/** Nancy's gown: the same bodice, sleeve and tucker, facing right. */
const GOWN = smooth([
  [124, 220, 1],
  [106, 218],
  [80, 230],
  [58, 258],
  [44, 296],
  [40, 330, 1],
  [252, 330, 1],
  [254, 296],
  [246, 268],
  [228, 246, 1],
  [196, 244],
  [166, 234],
])
const SKIN = smooth([
  [132, 200, 1],
  [196, 200, 1],
  [204, 226],
  [228, 246, 1],
  [196, 244],
  [166, 234],
  [124, 222, 1],
])
const SLEEVE = smooth([
  [92, 232],
  [118, 224],
  [144, 234],
  [152, 258],
  [140, 282],
  [110, 288],
  [84, 276],
  [76, 254],
])
const TUCKER_SPINE: Pt[] = [
  [128, 224],
  [150, 232],
  [170, 238],
  [196, 246],
  [226, 248],
]

type Marks = {
  ground: string
  hair: string
  knot: string
  silk: string
  silkShade: string
  sleeve: string
  lace: string
  cheek: string
  curls: string
}

const marks = once<Marks>(() => {
  const ground = portraitGround(5801, (x, y) =>
    clamp(0.06 + ((x - 40) / 280) * 0.9 - Math.max(0, (y - 250) / 300)),
  )
  const r = rng(5802)
  const [hx, hy] = F.pt([156, 112])
  const hair =
    strands(
      r,
      36,
      lerp2(F.pt([124, 80]), F.pt([130, 160])),
      lerp2(F.pt([206, 62]), F.pt([170, 112])),
      [0.4, 0.8],
      2,
    ) + rimLight(r, { cx: hx, cy: hy, rx: 62, ry: 80 }, 160, 270, 34, 1)
  // The knot: a coil of hair, cut as rings of paper.
  const [kx, ky] = F.pt(KNOT_C)
  let knot = ''
  for (let rad = 4; rad < 19; rad += 3.4)
    knot += arcDashes(r, kx, ky, rad, deg(0), deg(340), [12, 30], [1.5, 3])
  const silk = twill({ x0: 30, x1: 260, y0: 210, y1: 330 }, 4.4, 0.62)
  let silkShade = ''
  for (let i = 0; i < 9; i++) silkShade += gouge(52 + i * 4, 252 + i * 6, 40 + i * 4, 330, 0.9, 0.5)
  silkShade += hatch(r, { x0: 40, x1: 100, y0: 240, y1: 330 }, 3.6, 0.3)
  const sleeve =
    'M100 228Q96 252 104 278M114 222Q112 250 118 280M128 222Q130 250 132 278M140 230Q144 250 140 272'
  let lace = scallops(TUCKER_SPINE, 2.6, 5)
  for (let i = 0; i < TUCKER_SPINE.length - 1; i++) {
    const [ax, ay] = TUCKER_SPINE[i]
    const [bx, by] = TUCKER_SPINE[i + 1]
    const L = Math.hypot(bx - ax, by - ay)
    for (let t = 2.5; t < L; t += 5) {
      const x = ax + ((bx - ax) * t) / L
      const y = ay + ((by - ay) * t) / L + 4.6
      lace += `M${n(x - 0.9)} ${n(y)}a0.9 0.9 0 1 0 1.8 0a0.9 0.9 0 1 0 -1.8 0`
    }
  }
  // Each ringlet a corkscrew: a loop for every few units of its length.
  let curls = ''
  for (const [a, b] of CURLS) {
    const [x0, y0] = F.pt(a)
    const [x1, y1] = F.pt(b)
    const steps = 44
    let d = ''
    for (let i = 0; i <= steps; i++) {
      const t = i / steps
      const th = t * Math.PI * 2 * 5.5
      const w = 3.6 * (1 - t * 0.35)
      const x = x0 + (x1 - x0) * t + Math.sin(th) * w
      const y = y0 + (y1 - y0) * t - Math.cos(th) * 2.2
      d += `${i ? 'L' : 'M'}${n(x)} ${n(y)}`
    }
    curls += d
  }
  // The smile, creasing the cheek and the corner of the eye.
  const cheek =
    `M${F.p(222, 160)}Q${F.p(219, 172)} ${F.p(224, 182)}` +
    `M${F.p(204, 132)}L${F.p(199, 129)}M${F.p(205, 136)}L${F.p(200, 137)}`
  return { ground, hair, knot, silk, silkShade, sleeve, lace, cheek, curls }
})

function PriscillaPortrait({ uid }: ArtProps) {
  const m = marks()
  const gownClip = `${uid}-pl-gown`
  const p = F.p
  const [ex, ey] = F.pt([218, 130])
  const [ax, ay] = F.pt([160, 118])
  const [bx, by] = F.pt([200, 154])
  const [kx, ky] = F.pt(KNOT_C)
  return (
    <>
      <defs>
        <clipPath id={gownClip}>
          <path d={GOWN} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={HAIR} />
        <circle cx={n(kx)} cy={n(ky)} r={21} />
        <path d={GOWN} />
        <path d={SKIN} />
      </g>
      {/* The same silvery twilled silk as Nancy's. */}
      <path d={GOWN} fill={PAPER} />
      <g clipPath={`url(#${gownClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.silk} strokeWidth={LINE.hairline} />
      </g>
      <g clipPath={`url(#${gownClip})`}>
        <path d={m.silkShade} fill={INK} />
      </g>
      <path d={SKIN} fill={PAPER} />
      <path d={HEAD} fill={PAPER} />
      <path d={SLEEVE} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.sleeve} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={m.lace} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path
        d="M128 220Q172 234 228 244"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinecap="round"
      />
      {/* Her hair, drawn back into a knot, with smooth curls at the temple. */}
      <circle cx={n(kx)} cy={n(ky)} r={20} fill={INK} />
      <path d={m.knot} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinecap="round" />
      <path d={HAIR} fill={INK} />
      <path d={m.hair} fill={PAPER} />
      <ProfileEar at={[ax, ay]} h={42} />
      {/* "her smooth curls": ringlets, each a coil of hair cut as a corkscrew */}
      <path d={m.curls} fill="none" stroke={INK} strokeWidth={2.1} strokeLinecap="round" />
      {/* "a face made blowsy by cold and damp": a broad red on the cheekbone */}
      <Bloom at={[bx, by]} w={21} h={12} tilt={10} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={m.cheek} strokeWidth={LINE.fine} />
        {/* the jaw, firm, back to below the ear */}
        <path
          d={`M${p(225, 209)}C${p(206, 216)} ${p(188, 210)} ${p(176, 196)}`}
          strokeWidth={1.4}
        />
        {/* a strong brow */}
        <path d={`M${p(203, 119)}Q${p(214, 114)} ${p(226, 119)}`} strokeWidth={2.6} />
        {/* the nostril, and a wide smile */}
        <path
          d={`M${p(239, 166)}C${p(235.5, 163.5)} ${p(235, 160)} ${p(238, 157.5)}`}
          strokeWidth={1.3}
        />
        <path
          d={`M${p(232, 180)}L${p(225.5, 180)}Q${p(222, 179)} ${p(220.5, 175.5)}`}
          strokeWidth={1.7}
        />
        <path d={`M${p(231, 185)}Q${p(228, 188)} ${p(225, 186)}`} strokeWidth={LINE.hairline} />
      </g>
      {/* "cheerful-looking": the eye creased and lifted by the smile */}
      <ProfileEye at={[ex, ey]} s={0.88} heavy look={0.4} />
      <path
        d={`M${p(211, 135.5)}Q${p(218, 133)} ${p(225, 134)}`}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinecap="round"
      />
      <InnerRule />
    </>
  )
}

export const priscillaLammeterArt: LinocutArt = { width: PW, height: PH, Draw: PriscillaPortrait }

export const priscillaLammeter: Portrait = {
  name: 'Priscilla Lammeter',
  art: priscillaLammeterArt,
  alt: "A linocut portrait of Priscilla Lammeter in profile, facing right, drawn from George Eliot's descriptions in Chapter 11 as she arrives to dress for the New Year's Eve dance. She is a woman a little older than her sister Nancy, with the same face but a longer, stronger nose and a firmer chin, and she is smiling, her eye creased with it. A broad patch of red on her cheekbone is her face reddened by the cold and damp of the journey. Her dark hair is drawn back smoothly over her ear into a coiled knot at the back of her head, and three smooth ringlets, cut as coils, hang behind her ear onto her neck. She wears the same gown as Nancy: pale silk crossed with fine diagonal ribs, cut low and high-waisted, with a puffed sleeve and a band of lace along the neckline. Five numbered red markers point to her smile, her red cheek, her gown, her nose and her curls.",
  describedBy: [
    { phrase: 'that cheerful-looking lady', at: [296, 196], to: [234, 176] },
    { phrase: 'a face made blowsy by cold and damp', at: [176, 196], to: [196, 156] },
    { phrase: 'I’m obliged to have the same as Nancy', at: [216, 292] },
    { phrase: 'I feature my father’s family', at: [296, 120], to: [240, 140] },
    { phrase: 'her smooth curls', at: [80, 214], to: [118, 186] },
  ],
  where: 'Chapter 11',
  note: 'Priscilla says aloud what Nancy never would, and does not mind who hears it. She stays single, runs her father’s farm, and years later tells Nancy that a dairy will keep her from being low.',
  artNote:
    'Eliot never says what colour Priscilla’s hair is, so it is cut dark. Her gown is Nancy’s, as she says it must be, and the print cuts it the same way.',
}
