import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, n, rng } from '@/components/comics/linocut/carve'

import {
  FACE_LEFT,
  Bloom,
  InnerRule,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  flip,
  hatch,
  lerp2,
  once,
  placer,
  portraitGround,
  rimLight,
  smooth,
  strands,
  type Knot,
} from './common'

/**
 * Dunstan Cass, as George Eliot describes him, and nothing else. Chapter 3,
 * coming into the parlour where Godfrey waits for him:
 *
 *   "The door opened, and a thick-set, heavy-looking young man entered, with
 *   the flushed face and the gratuitously elated bearing which mark the
 *   first stage of intoxication."
 *
 * and, elsewhere in Chapters 3 and 4, "a spiteful jeering fellow", "His own
 * ill-favoured person".
 *
 * So: a young man in profile, facing left, towards the brother whose
 * portrait faces him; thick-set, with a heavy jaw and jowl and a thick neck
 * that runs straight down into broad, round shoulders ("thick-set,
 * heavy-looking"); his chin pushed up and his head carried back, so he looks
 * down his nose ("elated bearing"); a low, heavy brow and a small,
 * heavy-lidded eye; the corner of the mouth drawn up and back in a sneer
 * ("jeering"). The face is smooth and unlined: he is young. The spot colour
 * is the flush, a flat patch of red high on the cheekbone, kept well clear of
 * the mouth and chin, where red reads as blood. (The panels first cut it as
 * three slanting strokes; at portrait size strokes like those read as
 * scratches, so here it is a patch, as Lanyon's "red-faced" flush is in the
 * Jekyll and Hyde portraits. On 2 October 2026 the panels' DUNSTAN_FLUSH, in
 * ../panels/people.tsx, became a patch too, for the same reason.) His hair is dark and
 * cropped, to set him apart from his fair brother at a glance, as in the
 * panels. The ground is lit from in front of him, as the room is.
 *
 * His dress is not described, so it is the plain dress of a squire's son of
 * about 1800: a dark coat with a high collar and a white neckcloth. Nothing
 * here comes from a film or stage production.
 *
 * Drawn facing right and turned by FACE_LEFT, so the markers below are
 * placed with flip(). Seeds: 5501 for the ground, 5502 for the cuts in the
 * figure.
 */

/** A heavy head in its own frame, facing right: a low brow, a blunt nose, a heavy jaw. */
const HEAD_K: Knot[] = [
  [106, 272, 1],
  [102, 244],
  [90, 212],
  [80, 176],
  [78, 136],
  [88, 98],
  [110, 66],
  [144, 46],
  [182, 41],
  [210, 52],
  [224, 72],
  [229, 92],
  [235.5, 108],
  [229, 121],
  [233.5, 133],
  [240.5, 148],
  [247, 160, 1],
  [242, 166.5],
  [235.5, 168, 1],
  [237.5, 174],
  [234.5, 178, 1],
  [236.5, 183],
  [232, 190],
  [237.5, 200],
  [238, 213],
  [231, 225],
  [219, 233],
  [214, 250],
  [214, 272, 1],
]

/** Dark hair cropped close, combed forward to a low hairline. */
const HAIR_K: Knot[] = [
  [60, 20, 1],
  [214, 20, 1],
  [218, 62],
  [214, 72],
  [204, 74],
  [194, 84],
  [186, 102],
  [180, 120],
  [178, 140, 1],
  [168, 130],
  [158, 112],
  [146, 110],
  [136, 124],
  [128, 150],
  [118, 180],
  [106, 202, 1],
  [60, 202, 1],
]

/** The chin pushed up: turned back five degrees about the base of the neck. */
const F = placer([0, 0], 1, -5, [160, 272])
const HEAD = smooth(F.knots(HEAD_K))
const HAIR = smooth(F.knots(HAIR_K))

/** Broad, round shoulders, the neck going straight down into them. */
const COAT = smooth([
  [-8, 330, 1],
  [-4, 288],
  [14, 256],
  [48, 236],
  [92, 228],
  [126, 240],
  [170, 250],
  [212, 250],
  [240, 262],
  [262, 292],
  [270, 330, 1],
])
/** The coat's high collar, standing round the back of the thick neck. */
const COLLAR = smooth([
  [86, 236, 1],
  [100, 210],
  [122, 216],
  [148, 236],
  [164, 258],
  [136, 264],
  [104, 254, 1],
])
/** The white neckcloth, wound round the neck and knotted at the throat. */
const NECKCLOTH = smooth([
  [130, 240, 1],
  [170, 238],
  [212, 232],
  [222, 244],
  [220, 262],
  [188, 268],
  [140, 262, 1],
])
const KNOT = smooth([
  [212, 256, 1],
  [228, 254, 1],
  [236, 270],
  [228, 292, 1],
  [218, 280],
  [208, 294, 1],
  [206, 274],
])
const LAPEL = smooth([
  [196, 266, 1],
  [242, 274, 1],
  [252, 330, 1],
  [214, 330, 1],
])

type Marks = {
  ground: string
  hair: string
  back: string
  neck: string
  jowl: string
  coat: string
}

const marks = once<Marks>(() => {
  // Lit from in front of his face; the dark gathers behind his head.
  const ground = portraitGround(5501, (x, y) =>
    clamp(0.04 + ((x - 40) / 280) * 0.95 - Math.max(0, (y - 240) / 260)),
  )
  const r = rng(5502)
  const [c0x, c0y] = F.pt([158, 140])
  const hair =
    strands(
      r,
      34,
      lerp2(F.pt([110, 70]), F.pt([124, 182])),
      lerp2(F.pt([206, 62]), F.pt([172, 116])),
      [0.35, 0.75],
      2,
    ) + rimLight(r, { cx: c0x, cy: c0y, rx: 74, ry: 100 }, 160, 290, 46, 1)
  let back = ''
  for (let rad = 64; rad < 104; rad += 3.4)
    back += arcDashes(r, c0x + 14, c0y + 4, rad, deg(98), deg(150), [8, 22], [2, 5])
  const neck = hatch(r, { x0: 104, x1: 216, y0: 214, y1: 250 }, 4.8, 0.06)
  // The heavy jowl under the jaw, and the fold of flesh at the back of the neck.
  let jowl = ''
  for (let i = 0; i < 2; i++) {
    const [ax, ay] = F.pt([196 + i * 6, 218 + i * 3])
    const [bx, by] = F.pt([214 + i * 4, 210 + i * 4])
    jowl += `M${n(ax)} ${n(ay)}Q${n((ax + bx) / 2)} ${n((ay + by) / 2 + 4)} ${n(bx)} ${n(by)}`
  }
  const [fx, fy] = F.pt([96, 222])
  jowl += `M${n(fx)} ${n(fy)}q14 6 24 2`
  const coat =
    gouge(30, 270, 14, 318, 2.2, 2) +
    gouge(64, 256, 52, 318, 1.8, 2) +
    gouge(110, 270, 106, 318, 1.3, 1) +
    gouge(160, 280, 162, 318, 1, -1)
  return { ground, hair, back, neck, jowl, coat }
})

function DunstanPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-dc-head`
  const p = F.p
  const [ex, ey] = F.pt([220, 125])
  const [ax, ay] = F.pt([156, 116])
  const [cx, cy] = F.pt([204, 152])
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      <g transform={FACE_LEFT}>
        <path d={m.ground} fill={PAPER} />
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={HEAD} />
          <path d={COAT} />
        </g>
        <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.coat} fill={PAPER} />
        <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.6} />
        <g clipPath={`url(#${headClip})`}>
          <g fill="none" stroke={INK} strokeLinecap="round">
            <path d={m.back} strokeWidth={1.6} />
            <path d={m.neck} strokeWidth={LINE.hairline} />
            <path d={m.jowl} strokeWidth={LINE.fine} />
          </g>
          <path d={HAIR} fill={INK} />
          <path d={m.hair} fill={PAPER} />
        </g>
        <ProfileEar at={[ax, ay]} h={46} />
        {/* "the flushed face": on the cheekbone, well clear of the mouth */}
        <Bloom at={[cx, cy]} w={24} h={15} tilt={16} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* the heavy jaw, back to below the ear */}
          <path
            d={`M${p(236, 214)}C${p(214, 228)} ${p(188, 222)} ${p(172, 204)}C${p(167, 196)} ${p(165, 186)} ${p(165, 176)}`}
            strokeWidth={1.9}
          />
          {/* a low, heavy brow */}
          <path d={`M${p(201, 108)}Q${p(218, 101)} ${p(234, 109)}`} strokeWidth={3.8} />
          {/* nostril, and the fold from the nose drawn up by the sneer */}
          <path
            d={`M${p(241.5, 163)}C${p(237.5, 160.5)} ${p(237, 156.5)} ${p(240, 154)}`}
            strokeWidth={1.5}
          />
          <path
            d={`M${p(232, 150)}C${p(225, 157)} ${p(222, 166)} ${p(224, 173)}`}
            strokeWidth={LINE.fine}
          />
          {/* "a spiteful jeering fellow": the corner of the mouth drawn up and back */}
          <path
            d={`M${p(235, 178)}L${p(228, 178)}Q${p(223, 177)} ${p(220.5, 171)}`}
            strokeWidth={2.3}
          />
          <path d={`M${p(222, 166)}Q${p(218, 171)} ${p(219.5, 177)}`} strokeWidth={LINE.fine} />
          <path d={`M${p(232, 189)}Q${p(229.5, 192)} ${p(231, 195.5)}`} strokeWidth={LINE.fine} />
          {/* the throat, thick */}
          <path d={`M${p(212, 238)}Q${p(218, 246)} ${p(213, 254)}`} strokeWidth={LINE.fine} />
        </g>
        <ProfileEye at={[ex, ey]} s={0.92} heavy />
        <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={NECKCLOTH} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path
          d="M140 250Q176 247 214 243M146 258Q180 256 214 253"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
        />
        <path d={KNOT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
        <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      </g>
      <InnerRule />
    </>
  )
}

export const dunstanCassArt: LinocutArt = { width: PW, height: PH, Draw: DunstanPortrait }

export const dunstanCass: Portrait = {
  name: 'Dunstan Cass',
  art: dunstanCassArt,
  alt: "A linocut portrait of Dunstan Cass in profile, facing left, drawn from George Eliot's description in Chapter 3 as he comes into the parlour: a thick-set, heavy young man with a heavy jaw and jowl and a thick neck running straight down into broad, round shoulders. His chin is pushed up and his head carried back, so that he looks down his nose; his brow is low and heavy over a small, heavy-lidded eye, and the corner of his mouth is drawn up and back in a sneer. A patch of red high on his cheekbone marks his flushed face. His dark hair is cropped close. He wears a dark coat with a high collar and a white neckcloth. Three numbered red markers point to his heavy build, his flushed cheek and his lifted chin.",
  describedBy: [
    { phrase: 'a thick-set, heavy-looking young man', at: flip([60, 196]), to: flip([100, 236]) },
    { phrase: 'the flushed face', at: flip([168, 196]), to: flip([188, 160]) },
    { phrase: 'the gratuitously elated bearing', at: flip([292, 236]), to: flip([236, 206]) },
  ],
  where: 'Chapter 3',
  passage:
    'The door opened, and a thick-set, heavy-looking young man entered, with the flushed face and the gratuitously elated bearing which mark the first stage of intoxication. It was Dunsey, and at the sight of him Godfrey’s face parted with some of its gloom to take on the more active expression of hatred.',
  note: 'Eliot shows Dunstan as all appetite and spite. The next day he steals Silas’s gold on impulse and vanishes, and what became of him is learned only when the Stone-pit is drained, sixteen years later.',
  artNote:
    'His clothes are not described, so he wears the plain dress of a squire’s son of about 1800. The red is the flush the text gives him, set on the cheek and kept away from the mouth.',
}
