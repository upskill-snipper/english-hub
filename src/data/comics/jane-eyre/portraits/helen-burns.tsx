import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, rng, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Bloom,
  FACE_LEFT,
  InnerRule,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  WOMAN_HEAD,
  flame,
  flip,
  hatch,
  lerp2,
  nudge,
  once,
  placePath,
  placer,
  scallops,
  smooth,
  splitGround,
  strands,
  type Knot,
} from './common'

/**
 * Helen Burns, as Jane describes her, and nothing else. Chapter 8, in Miss
 * Temple's room, by her fire, the evening Helen talks with her teacher:
 *
 *   "The refreshing meal, the brilliant fire, the presence and kindness of
 *   her beloved instructress, or, perhaps, more than all these, something in
 *   her own unique mind, had roused her powers within her. They woke, they
 *   kindled: first, they glowed in the bright tint of her cheek, which till
 *   this hour I had never seen but pale and bloodless; then they shone in
 *   the liquid lustre of her eyes"
 *
 * and, in the same paragraph, "Then her soul sat on her lips, and language
 * flowed" and "Has a girl of fourteen a heart large enough". Her dress and
 * hair are the school's, Chapter 5: "all with plain locks combed from their
 * faces, not a curl visible; in brown dresses, made high and surrounded by
 * a narrow tucker about the throat".
 *
 * So: a girl of fourteen in profile, facing left, towards her teacher,
 * talking: her lips parted, her chin lifted a little, her brow raised, her
 * eye open wide and bright with a large glint ("the liquid lustre of her
 * eyes"). The flush of her cheek is the one red on her face, a patch high on
 * the cheekbone, well clear of the mouth. She is cut from the one woman's
 * head (WOMAN_HEAD), made a girl's: the nose shorter, the chin rounder. Her
 * hair is combed straight back from the brow, not a curl, and cut short at
 * the nape, as the figure kit cuts the Lowood girls' (../panels/people.tsx);
 * her frock is high at the neck, with a narrow white tucker at the throat.
 * The brilliant fire is below the block in front of her, and its light rises
 * in the spot colour in the ground below her chin.
 *
 * She is drawn well and happy, as Jane sees her that evening; nothing of
 * her punishments, her illness or her end is drawn or named. Nothing here
 * comes from a film or stage production. The brown of the frock prints dark;
 * the card says so.
 *
 * Drawn facing right and turned by FACE_LEFT, so the markers below are
 * placed with flip(). Seeds: 7701 for the ground, 7702 for the cuts.
 */

/** The one woman's head made a girl's: the nose shorter, the chin round; the lips parted. */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [15, -1.5, 0],
  [16, -3, 0.5],
  [17, -2, 0.5],
  [18, -1, 0.5],
  [19, 0, 0.5],
  [20, -3.5, 1.5],
  [21, 0, 2.5],
  [22, -0.5, 2],
  [23, -1, 1.5],
])

/** A girl, set smaller in the block, her chin lifted as she talks. */
const F = placer([30, 4], 0.84, -5, [164, 252])
const HEAD = smooth(F.knots(HEAD_K))

/** "plain locks combed from their faces, not a curl visible": back from the brow, short at the nape. */
const HAIR_K: Knot[] = [
  [218, 72, 1],
  [212, 82],
  [204, 94],
  [196, 108],
  [186, 118],
  [172, 116],
  [158, 110],
  [144, 116],
  [134, 136],
  [128, 162],
  [120, 186, 1],
  [106, 170],
  [100, 136],
  [104, 98],
  [120, 68],
  [148, 50],
  [180, 46],
  [204, 54],
]
const HAIR = smooth(F.knots(HAIR_K))

/** The frock, "made high": narrow shoulders, close at the neck. */
const FROCK = smooth([
  [22, 330, 1],
  [28, 300],
  [46, 276],
  [80, 258],
  [116, 244],
  [138, 232],
  [168, 236],
  [196, 238],
  [214, 232],
  [230, 244],
  [244, 266],
  [252, 300],
  [254, 330, 1],
])
/** "a narrow tucker about the throat" */
const TUCKER = smooth([
  [138, 226, 1],
  [164, 232],
  [192, 234],
  [210, 228],
  [218, 224, 1],
  [220, 232],
  [208, 237],
  [190, 240],
  [162, 238],
  [136, 233, 1],
])
const TUCKER_EDGE: Pt[] = [
  [140, 227],
  [164, 232.5],
  [192, 234.5],
  [210, 228.5],
  [217, 225],
]

/** The fire's flames, rising at the foot of the block in front of her. */
const FLAMES: [number, number, number, number][] = [
  [292, 318, 34, -3],
  [308, 318, 24, -2],
  [278, 318, 20, 2],
  [320, 318, 14, -1],
]

type Marks = {
  ground: { paper: string; red: string }
  hair: string
  back: string
  neck: string
  frock: string
  frill: string
}

const marks = once<Marks>(() => {
  // "the brilliant fire": lit from the fire in front of her, below the
  // block. The cuts nearest it print red, only below the level of her chin.
  const fire = (x: number, y: number) => Math.hypot(x - 300, (y - 340) * 1.1)
  const ground = splitGround(
    7701,
    (x, y) => clamp(Math.max(1.1 - fire(x, y) / 260, 0.05 + ((x - 60) / 300) * 0.6)),
    (x, y) => y > 218 && fire(x, y) < 116,
  )
  const r = rng(7702)
  const hair = strands(
    r,
    30,
    lerp2(F.pt([214, 70]), F.pt([190, 114])),
    lerp2(F.pt([116, 70]), F.pt([112, 170])),
    [0.35, 0.6],
    1.2,
  )
  let back = ''
  const [bx, by] = F.pt([176, 150])
  for (let rad = 48; rad < 80; rad += 3.4)
    back += arcDashes(r, bx, by, rad, deg(98), deg(146), [8, 20], [2, 5])
  const neck = hatch(r, { x0: 120, x1: 214, y0: 184, y1: 200 }, 4.6, 0.12)
  const frock =
    gouge(226, 256, 242, 314, 1.6, -2) +
    gouge(52, 284, 38, 318, 1.3, 2) +
    gouge(94, 270, 86, 318, 1, 1) +
    gouge(154, 250, 140, 312, 0.9, 2)
  const frill = scallops(TUCKER_EDGE, 2, 4.2)
  return { ground, hair, back, neck, frock, frill }
})

function HelenPortrait({ uid }: ArtProps) {
  const m = marks()
  const hairClip = `${uid}-hb-hair`
  const headClip = `${uid}-hb-head`
  const P = (d: string) => placePath(d, F)
  const [ex, ey] = F.pt([217, 129])
  const [ax, ay] = F.pt([160, 118])
  const [cx, cy] = F.pt([201, 154])
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
        <path d={m.ground.paper} fill={PAPER} />
        <path d={m.ground.red} fill={RED} />
        {/* The ink halo that lifts the figure off the ground. */}
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={HEAD} />
          <path d={HAIR} />
          <path d={FROCK} />
        </g>
        <path d={FROCK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.frock} fill={PAPER} />
        <path d={HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.3} />
          <path d={m.neck} strokeWidth={LINE.hairline} />
        </g>
        <ProfileEar at={[ax, ay]} h={36} />
        <path d={HAIR} fill={INK} />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        {/* "the bright tint of her cheek", high on the cheekbone */}
        <Bloom at={[cx, cy]} w={13} h={8} tilt={10} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d={P('M220 203C204 210 188 205 176 192')} strokeWidth={1.2} />
          {/* the brow raised as she talks */}
          <path d={P('M204 116Q214 111.5 225 115.5')} strokeWidth={2.1} />
          <path d={P('M233 161C230 159 229.5 155.5 232 153.5')} strokeWidth={1.1} />
        </g>
        {/* "her soul sat on her lips, and language flowed": the lips parted */}
        <path d={P('M228.5 173.5L221 176.6L227.5 180Z')} fill={INK} />
        <path
          d={P('M223.5 189Q221.5 191.5 222.5 194')}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
          strokeLinecap="round"
        />
        {/* "the liquid lustre of her eyes": open wide, a large glint */}
        <ProfileEye at={[ex, ey]} s={0.84} wide look={0.6} />
        <circle cx={ex + 2.9} cy={ey - 0.6} r={1.5} fill={PAPER} />
        <path d={TUCKER} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.frill} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
        {/* The fire. */}
        <g className="lc-flicker" style={timing({ delay: 0.3, dur: 1.6 })}>
          {FLAMES.map(([x, y, h, lean]) => (
            <path key={x} d={flame(x, y, h, lean)} fill={RED} />
          ))}
        </g>
        <path d={flame(292, 318, 14, -1)} fill={PAPER} />
      </g>
      <InnerRule />
    </>
  )
}

export const helenBurnsArt: LinocutArt = { width: PW, height: PH, Draw: HelenPortrait }

export const helenBurns: Portrait = {
  name: 'Helen Burns',
  art: helenBurnsArt,
  alt: "A linocut portrait of Helen Burns in profile, facing left, drawn from Jane's description of her by Miss Temple's fire in Chapter 8: a girl of fourteen, talking, her lips parted, her chin lifted a little and her brow raised, her eye open wide and bright with a large glint of light. A small patch of red high on her cheek is the flush of her cheek. Her dark hair is combed straight back from her brow, without a curl, and cut short at the nape. She wears a dark school frock made high at the neck, with a narrow white tucker at the throat. A fire burns red at the bottom left of the block, and its light rises below her chin. Five numbered red markers point to her combed hair, her tucker, her cheek, her bright eye and her parted lips.",
  describedBy: [
    {
      phrase: 'plain locks combed from their faces',
      at: flip([60, 112]),
      to: flip([114, 120]),
    },
    {
      phrase: 'a narrow tucker about the throat',
      at: flip([292, 214]),
      to: flip([222, 226]),
    },
    { phrase: 'the bright tint of her cheek', at: flip([170, 148]) },
    { phrase: 'the liquid lustre of her eyes', at: flip([298, 100]), to: flip([236, 112]) },
    {
      phrase: 'her soul sat on her lips, and language flowed',
      at: flip([300, 160]),
      to: flip([250, 156]),
    },
  ],
  where: 'Chapters 5 and 8',
  note: 'Helen is most alive when she is talking about books and ideas. By Miss Temple’s fire Jane sees in her a beauty “of meaning, of movement, of radiance”.',
  artNote:
    'The school frocks were brown, which prints dark. Her hair and her frock are the school’s, from Jane’s first morning at Lowood in Chapter 5; her face is from Chapter 8. The words come from two chapters, so the card prints the phrases alone.',
}
