import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  InnerRule,
  PH,
  PW,
  ProfileEye,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFeatures,
  hatch,
  nudge,
  once,
  placer,
  portraitGround,
  smooth,
  type Knot,
} from './common'

/**
 * Molly, Mr Jaggers's housekeeper, as Dickens describes her, and nothing
 * else. Chapter 26, when Pip first dines at Jaggers's house in Gerrard-street,
 * Soho, and she brings in the first dish:
 *
 *   "She was a woman of about forty, I supposed—but I may have thought her
 *   younger than she was. Rather tall, of a lithe nimble figure, extremely
 *   pale, with large faded eyes, and a quantity of streaming hair."
 *
 * So: a woman of about forty in profile, facing right, slight and long in the
 * neck and shoulders ("Rather tall, of a lithe nimble figure"); her face cut
 * in paper and left almost unshaded ("extremely pale"); a large eye, open
 * wide, its pupil small and pale-ringed ("large faded eyes"); and a great
 * mass of dark hair, loose and long, streaming back from her brow and down
 * over her shoulders to the foot of the block ("a quantity of streaming
 * hair"). The colour of her hair is not given; it is printed dark. Her dress
 * is not described: a plain dark gown, as a servant's was.
 *
 * WHAT IS NEVER DRAWN (./common.tsx, and ../index.ts): her hands and wrists,
 * which the novel makes much of; the picture is cut at the shoulders. Her
 * past is not drawn, and neither the card nor this docblock says what she was
 * once tried for. Nothing here comes from a film or stage production.
 *
 * Seeds: 8201 for the ground, 8202 for the cuts in the figure.
 */

/** The one woman's head, a little longer in the neck: "Rather tall, of a lithe nimble figure". */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [0, 4, 40],
  [27, 0, 40],
])

/** The head a little lifted, about the base of the neck. */
const F = placer([30, 8], 0.86, -3, [164, 252])
const HEAD = smooth(F.knots(HEAD_K))

/**
 * Her hair in the head's frame: from the brow over the crown, and then loose,
 * streaming back and down behind her head and over the shoulder, to the foot
 * of the block.
 */
const HAIR_K: Knot[] = [
  [220, 70],
  [208, 52],
  [180, 40],
  [146, 40],
  [116, 52],
  [90, 76],
  [70, 110],
  [62, 150],
  [48, 186],
  [44, 222],
  [30, 256],
  [26, 292],
  [12, 326],
  [4, 352, 1],
  [26, 334],
  [38, 356, 1],
  [56, 330],
  [72, 350, 1],
  [88, 326],
  [108, 346, 1],
  [118, 318],
  [130, 290],
  [138, 256],
  [146, 222],
  [152, 190],
  [160, 156],
  [172, 126],
  [188, 104],
  [204, 86],
  [214, 76],
]
const HAIR_PLACED = F.knots(HAIR_K)
const HAIR = smooth(HAIR_PLACED)

/** A plain dark gown over narrow, sloping shoulders, cut high at the neck. */
const GOWN = smooth([
  [-6, 330, 1],
  [4, 300],
  [32, 276],
  [78, 262],
  [124, 258],
  [168, 264],
  [210, 266],
  [242, 278],
  [262, 302],
  [270, 330, 1],
])
const NECKBAND = smooth([
  [130, 266, 1],
  [170, 270],
  [212, 268, 1],
  [214, 276, 1],
  [170, 279],
  [128, 275, 1],
])

type Marks = {
  ground: string
  hair: string
  neck: string
  gown: string
}

const marks = once<Marks>(() => {
  // Candlelight on the dinner table in front of her; the room dark behind.
  const ground = portraitGround(8201, (x, y) =>
    clamp(0.06 + ((x - 60) / 280) * 0.7 - Math.max(0, (y - 240) / 260)),
  )
  const r = rng(8202)
  // "a quantity of streaming hair": long paper strands, waving, from the
  // crown back and down through the whole mass, each ending at its own
  // length, so the hair reads as loose and streaming and not as a curtain cut
  // straight across. (Cut first with a straight lower edge, it did.)
  let hair = ''
  for (let i = 0; i < 28; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 28
    const start = F.pt([206 - t * 112, 62 - Math.sin(t * Math.PI) * 16 + t * 34])
    const end: Pt = [start[0] - between(r, 40, 84), between(r, 284, 314)]
    const pts: Pt[] = []
    for (let k = 0; k <= 18; k++) {
      const u = k / 18
      const x = start[0] + (end[0] - start[0]) * u ** 1.3 + Math.sin(u * 8 + i * 0.7) * (2 + u * 4)
      const y = start[1] + (end[1] - start[1]) * u
      pts.push([x, y])
    }
    hair += ribbon(pts, between(r, 0.9, 1.7), 0.8)
  }
  const neck = hatch(r, { x0: 150, x1: 176, y0: 236, y1: 266 }, 6, 0.1)
  const gown = 'M38 290Q30 306 26 322M228 284Q238 300 244 320'
  return { ground, hair, neck, gown }
})

function MollyPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-mo-head`
  const hairClip = `${uid}-mo-hair`
  const p = F.p
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
      </g>
      {/* the plain dark gown */}
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.gown} fill="none" stroke={PAPER} strokeWidth={1.4} strokeLinecap="round" />
      {/* "extremely pale": the face cut in paper and left almost unshaded */}
      <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.neck} strokeWidth={LINE.hairline} />
      </g>
      <path d={NECKBAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <WomanFeatures F={F} brow={1.8} mouth="set" />
      {/* "large faded eyes": a large eye, open wide, the lid lifted */}
      <ProfileEye at={F.pt([WOMAN_EYE[0] + 1, WOMAN_EYE[1] + 1])} s={1.05} wide look={0.4} />
      <path
        d={`M${p(207, 141)}Q${p(214, 145)} ${p(222, 143)}`}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      {/* "a quantity of streaming hair" */}
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <InnerRule />
    </>
  )
}

export const mollyArt: LinocutArt = { width: PW, height: PH, Draw: MollyPortrait }

export const molly: Portrait = {
  name: 'Molly',
  art: mollyArt,
  alt: "A linocut portrait of Molly, Mr Jaggers's housekeeper, drawn from Pip's description of her in Chapter 26, in profile, facing right, against a dark room lit from in front of her. She is a slight woman with a long neck and narrow, sloping shoulders, her face very pale and almost unshaded, with a large eye opened wide. A great mass of dark hair streams back from her brow and falls loose down her back and over her shoulder to the foot of the picture. She wears a plain dark gown with a narrow white band at the neck. The picture is cut at the shoulders. Four numbered red markers point to her slight figure, her pale face, her eye and her hair.",
  describedBy: [
    { phrase: 'a lithe nimble figure', at: [306, 290], to: [252, 290] },
    { phrase: 'extremely pale', at: F.pt([188, 158]) },
    { phrase: 'large faded eyes', at: [306, 118], to: F.pt([232, WOMAN_EYE[1] - 2]) },
    { phrase: 'a quantity of streaming hair', at: [26, 140], to: F.pt([84, 140]) },
  ],
  where: 'Chapter 26',
  passage:
    'She was a woman of about forty, I supposed—but I may have thought her younger than she was. Rather tall, of a lithe nimble figure, extremely pale, with large faded eyes, and a quantity of streaming hair.',
  note: 'Pip notices Molly at Jaggers’s table before he knows anything about her, and cannot stop watching her. Much later, in Chapter 48, something in her eyes and the movement of her fingers reminds him of Estella, and he works out whose mother she is.',
  artNote:
    'The colour of her hair is not given, so it is printed dark. Her hands, which the novel makes much of, are left out of the picture, which is cut at the shoulders.',
}
