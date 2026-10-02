import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
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
  Bloom,
  FACE_LEFT,
  InnerRule,
  PH,
  PW,
  ProfileEye,
  WOMAN_HEAD,
  flip,
  nudge,
  once,
  placer,
  portraitGround,
  scallops,
  smooth,
  type Knot,
} from './common'

/**
 * Dolly Winthrop, the wheelwright's wife, as George Eliot describes her, and
 * nothing else. Chapter 10, before she first calls on Silas after the
 * robbery:
 *
 *   "She was a 'comfortable woman' ... good-looking, fresh-complexioned,
 *   having her lips always slightly screwed, as if she felt herself in a
 *   sick-room with the doctor or the clergyman present. But she was never
 *   whimpering; no one had seen her shed tears; she was simply grave and
 *   inclined to shake her head and sigh, almost imperceptibly, like a
 *   funereal mourner who is not a relation."
 *
 * (The edition has a dash after "comfortable woman"; the house style keeps
 * it out of the code, and the card's passage begins after it.) She is "a
 * very mild, patient woman", and "This good wholesome woman" in the next
 * paragraph.
 *
 * So: a woman in her thirties, in profile, facing left, towards Silas, cut
 * from the one woman's head (WOMAN_HEAD) with the cheek and jaw made fuller
 * ("comfortable", "good-looking"); her lips small, pushed a little forward
 * and puckered ("slightly screwed"); her brow level and her eye lowered and
 * steady, her head bowed a little ("simply grave", "inclined to shake her
 * head and sigh"). Her fresh complexion is the bloom on her cheekbone in the
 * spot colour, well clear of the mouth. Her dress is not described, so she
 * wears what a village wife of about 1800 would: a white cap with a frilled
 * edge over her hair, a white kerchief crossed over a dark gown. She matches
 * the Dolly of the panels (DollyHead and MOB_CAP in ../panels/people.tsx).
 * Nothing here comes from a film or stage production.
 *
 * Drawn facing right and turned by FACE_LEFT, so the markers below are
 * placed with flip(). Seeds: 5901 for the ground, 5902 for the cuts in the
 * figure.
 */

/** The one woman's head, fuller in the cheek and jaw, the lips pushed forward. */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [18, 0, 0.5],
  [19, 1.8, 0.5],
  [20, 1, 0],
  [21, 1.8, 0],
  [22, 0, 1],
  [23, 1, 2],
  [24, 3, 4],
  [25, 4, 6],
  [26, 2, 4],
])

/** Bowed a little, about the base of the neck: grave, and given to shaking her head. */
const F = placer([18, 2], 0.92, 5, [164, 252])
const HEAD = smooth(F.knots(HEAD_K))

/**
 * The cap, in the head's frame: a full linen crown over the head, down to
 * the nape, its front edge set back on the brow so a little hair shows.
 */
const CAP_K: Knot[] = [
  [206, 62, 1],
  [198, 48],
  [178, 38],
  [146, 38],
  [116, 52],
  [98, 82],
  [92, 122],
  [100, 164],
  [118, 194, 1],
  [146, 188],
  [160, 170],
  [170, 146],
  [178, 122],
  [188, 96],
]
const CAP = smooth(F.knots(CAP_K))
/** The frilled edge of the cap, round the face: its spine, in the head's frame. */
const FRILL_K: Pt[] = [
  [207, 60],
  [197, 80],
  [188, 100],
  [180, 124],
  [172, 148],
  [162, 170],
  [146, 190],
]
/** Her dark hair, parted, between the frill and the brow. */
const HAIR_K: Knot[] = [
  [217, 74, 1],
  [210, 80],
  [203, 92],
  [197, 106],
  [191, 120],
  [184, 132, 1],
  [180, 122],
  [188, 100],
  [198, 78],
  [208, 64, 1],
]
const HAIR = smooth(F.knots(HAIR_K))

const GOWN = smooth([
  [-6, 330, 1],
  [0, 294],
  [22, 262],
  [64, 240],
  [110, 234],
  [150, 240],
  [196, 244],
  [232, 256],
  [256, 288],
  [264, 330, 1],
])
/** The kerchief round her neck, crossed over her breast. */
const KERCHIEF = smooth([
  [92, 238, 1],
  [124, 226],
  [152, 232],
  [180, 238],
  [208, 236],
  [228, 248],
  [240, 274],
  [228, 306, 1],
  [204, 290],
  [176, 274],
  [136, 262],
  [98, 254, 1],
])

type Marks = {
  ground: string
  cap: string
  frill: string
  gown: string
  kerchief: string
}

const marks = once<Marks>(() => {
  const ground = portraitGround(5901, (x, y) =>
    clamp(0.06 + ((x - 40) / 280) * 0.9 - Math.max(0, (y - 250) / 280)),
  )
  const r = rng(5902)
  // The gathers of the linen crown, from the band at the back, and its shadow.
  const [cx, cy] = F.pt([146, 122])
  let cap = ''
  for (let i = 0; i < 15; i++) {
    const a = deg(196 + i * 9.5 + between(r, -3, 3))
    const x0 = cx + Math.cos(a) * 24
    const y0 = cy + Math.sin(a) * 28
    const x1 = cx + Math.cos(a) * between(r, 50, 60)
    const y1 = cy + Math.sin(a) * between(r, 64, 74)
    cap += `M${n(x0)} ${n(y0)}Q${n((x0 + x1) / 2 + between(r, -3, 3))} ${n((y0 + y1) / 2)} ${n(x1)} ${n(y1)}`
  }
  for (let rad = 44; rad < 66; rad += 4)
    cap += arcDashes(r, cx, cy, rad, deg(110), deg(200), [10, 24], [3, 7])
  const frill = scallops(
    FRILL_K.map((q) => F.pt(q)),
    4,
    6.5,
  )
  const gown =
    gouge(32, 270, 14, 318, 2, 2) +
    gouge(68, 256, 56, 318, 1.6, 2) +
    gouge(240, 290, 252, 318, 1.6, -2)
  const kerchief =
    'M110 246Q140 252 170 262M126 236Q160 246 196 256M150 240Q186 250 214 262M206 244Q220 264 224 292'
  return { ground, cap, frill, gown, kerchief }
})

function DollyPortrait({ uid }: ArtProps) {
  const m = marks()
  const capClip = `${uid}-dw-cap`
  const p = F.p
  const [ex, ey] = F.pt([216, 131])
  const [bx, by] = F.pt([200, 154])
  return (
    <>
      <defs>
        <clipPath id={capClip}>
          <path d={CAP} />
        </clipPath>
      </defs>
      <g transform={FACE_LEFT}>
        <path d={m.ground} fill={PAPER} />
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={HEAD} />
          <path d={CAP} />
          <path d={GOWN} />
        </g>
        <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.gown} fill={PAPER} />
        <path d={HEAD} fill={PAPER} />
        <path d={HAIR} fill={INK} />
        {/* "fresh-complexioned": the bloom on her cheekbone, clear of the mouth */}
        <Bloom at={[bx, by]} w={17} h={10} tilt={12} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* the jaw, full and soft */}
          <path
            d={`M${p(225, 208)}C${p(208, 216)} ${p(188, 210)} ${p(176, 196)}`}
            strokeWidth={1.3}
          />
          {/* "simply grave": a level brow */}
          <path d={`M${p(203, 119)}Q${p(214, 116.5)} ${p(226, 119.5)}`} strokeWidth={2.5} />
          {/* the nostril */}
          <path
            d={`M${p(235, 162)}C${p(232, 160)} ${p(231.5, 157)} ${p(234, 155)}`}
            strokeWidth={1.2}
          />
          {/* "her lips always slightly screwed": small, pursed, pushed forward */}
          <path
            d={`M${p(234, 176.5)}Q${p(230, 175)} ${p(226.5, 177)}Q${p(230, 179)} ${p(234, 177.8)}`}
            strokeWidth={1.7}
          />
          <path
            d={`M${p(229, 171.5)}L${p(226.5, 173.5)}M${p(228, 181.5)}L${p(225.5, 180)}M${p(230.5, 184.5)}L${p(228.5, 182.2)}M${p(232, 170.5)}L${p(230.5, 172.5)}`}
            strokeWidth={LINE.fine}
          />
          <path
            d={`M${p(227.5, 189)}Q${p(225.5, 192)} ${p(226.5, 195)}`}
            strokeWidth={LINE.hairline}
          />
          {/* the line from the nose, deepened by the pursed mouth */}
          <path
            d={`M${p(229, 152)}C${p(223, 160)} ${p(221.5, 168)} ${p(223.5, 175)}`}
            strokeWidth={LINE.fine}
          />
        </g>
        {/* the eye lowered, steady */}
        <ProfileEye at={[ex, ey]} s={0.84} heavy look={0.2} />
        <path d={CAP} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <g clipPath={`url(#${capClip})`}>
          <path
            d={m.cap}
            fill="none"
            stroke={INK}
            strokeWidth={LINE.hairline}
            strokeLinecap="round"
          />
        </g>
        <path d={m.frill} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
        <path
          d={'M' + FRILL_K.map((q) => p(q[0], q[1])).join('L')}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
        />
        {/* the band of the cap, round the back of the head */}
        <path
          d={`M${p(96, 150)}Q${p(126, 160)} ${p(160, 150)}`}
          fill="none"
          stroke={INK}
          strokeWidth={1.4}
        />
        <path d={KERCHIEF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.kerchief} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <InnerRule />
    </>
  )
}

export const dollyWinthropArt: LinocutArt = { width: PW, height: PH, Draw: DollyPortrait }

export const dollyWinthrop: Portrait = {
  name: 'Dolly Winthrop',
  art: dollyWinthropArt,
  alt: "A linocut portrait of Dolly Winthrop in profile, facing left, drawn from George Eliot's description in Chapter 10: a good-looking woman in her thirties with a full, soft cheek and jaw, her head bowed a little. Her brow is level and her eye lowered and steady, and her small lips are pushed a little forward and puckered. A patch of red on her cheekbone is her fresh complexion. She wears a white linen cap with a frilled edge over her dark hair, a white kerchief crossed over her breast and a dark gown. Three numbered red markers point to her cheek, her pursed lips and her grave eye.",
  describedBy: [
    { phrase: 'good-looking, fresh-complexioned', at: flip([168, 196]), to: flip([194, 158]) },
    { phrase: 'her lips always slightly screwed', at: flip([292, 196]), to: flip([234, 172]) },
    { phrase: 'simply grave', at: flip([290, 104]), to: flip([226, 122]) },
  ],
  where: 'Chapter 10',
  passage:
    'good-looking, fresh-complexioned, having her lips always slightly screwed, as if she felt herself in a sick-room with the doctor or the clergyman present. But she was never whimpering; no one had seen her shed tears; she was simply grave and inclined to shake her head and sigh, almost imperceptibly, like a funereal mourner who is not a relation.',
  note: 'Eliot smiles at Dolly’s solemnity, but she is the novel’s practical goodness: she brings Silas lard-cakes, teaches him to bring up a child, and stands godmother to Eppie.',
  artNote:
    'Eliot does not describe her dress, so she wears the cap, kerchief and gown of a village wife of about 1800. Her fresh complexion is the one red in the print.',
}
