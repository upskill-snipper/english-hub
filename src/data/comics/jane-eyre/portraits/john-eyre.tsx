import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, rng } from '@/components/comics/linocut/carve'

import {
  InnerRule,
  MAN_HEAD,
  MAN_LINES,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  hatch,
  lerp2,
  once,
  placePath,
  placer,
  portraitGround,
  smooth,
  strands,
  type Knot,
} from './common'

/**
 * John Eyre, Jane's uncle, as Bessie saw him, and nothing else. He never
 * appears in the novel; this is all it says of how he looked. Chapter 10,
 * Bessie to Jane at Lowood:
 *
 *   "for one day, nearly seven years ago, a Mr. Eyre came to Gateshead and
 *   wanted to see you; Missis said you were at school fifty miles off; he
 *   seemed so much disappointed, for he could not stay: he was going on a
 *   voyage to a foreign country, and the ship was to sail from London in a
 *   day or two. He looked quite a gentleman, and I believe he was your
 *   father's brother."
 *
 * So, as the portraits' common rules ask for a sitter whose face the text
 * does not give (./common.tsx): a man drawn plainly, cut from the one man's
 * head (MAN_HEAD) with its lines unaltered and only a crease from the nose
 * to the mouth, since he is Jane's father's brother and no longer young; in
 * the ordinary dress of a gentleman of the time setting out on a journey,
 * a tall hat and a greatcoat with a short cape over the shoulders, a high
 * collar and a white neckcloth. The markers point only at what Bessie says.
 * There is no red in this plate. Nothing here comes from a film or stage
 * production.
 *
 * Seeds: 8901 for the ground, 8902 for the cuts in the figure.
 */

const F = placer([4, 34], 0.8)
const HEAD = smooth(F.knots(MAN_HEAD))

/** A tall hat of the time: the crown, a little wider at the top, and a curled brim. In the head's frame. */
const CROWN = smooth(
  F.knots([
    [122, 60, 1],
    [118, 22],
    [116, -14, 1],
    [210, -18, 1],
    [210, 18],
    [206, 56, 1],
  ]),
)
const BRIM = smooth(
  F.knots([
    [84, 72, 1],
    [92, 62],
    [118, 58],
    [206, 54],
    [232, 52],
    [246, 56, 1],
    [236, 64],
    [206, 64],
    [118, 70],
    [96, 74],
  ]),
)
/** The band round the foot of the crown. */
const BAND = smooth(
  F.knots([
    [121, 46, 1],
    [207, 42, 1],
    [206, 54, 1],
    [122, 58, 1],
  ]),
)

/** Plain dark hair, showing under the hat at the temple, round the ear and at the nape. */
const HAIR_K: Knot[] = [
  [204, 66, 1],
  [202, 84],
  [194, 100],
  [184, 110],
  [170, 108],
  [158, 104],
  [144, 108],
  [132, 124],
  [122, 150],
  [114, 178],
  [104, 198, 1],
  [92, 172],
  [88, 130],
  [92, 92],
  [104, 70],
]
const HAIR = smooth(F.knots(HAIR_K))

/** The greatcoat: broad over the shoulders, to the edge of the block. */
const COAT = smooth([
  [-8, 330, 1],
  [-4, 290],
  [12, 262],
  [50, 244],
  [96, 236],
  [140, 240],
  [182, 248],
  [220, 250],
  [252, 260],
  [278, 284],
  [290, 312],
  [292, 330, 1],
])
/** The short cape over the shoulders, its hem cut in paper. */
const CAPE = smooth([
  [-6, 302, 1],
  [8, 266],
  [46, 246],
  [96, 238],
  [140, 242],
  [184, 250],
  [224, 252],
  [256, 264],
  [280, 288],
  [286, 302, 1],
  [240, 298],
  [180, 300],
  [120, 302],
  [60, 304],
])
/** The high collar of the coat, standing behind the neck. */
const COLLAR = smooth([
  [92, 246, 1],
  [100, 214],
  [124, 216],
  [148, 230],
  [166, 248],
  [142, 254],
  [112, 252, 1],
])
/** The white neckcloth, wound high at the throat. */
const NECKCLOTH = smooth([
  [124, 222, 1],
  [158, 226],
  [186, 220],
  [200, 218],
  [206, 230],
  [204, 246],
  [180, 252],
  [144, 250, 1],
])

type Marks = {
  ground: string
  hair: string
  hat: string
  back: string
  neck: string
  coat: string
  cloth: string
}

const marks = once<Marks>(() => {
  // Plain daylight, from in front of him.
  const ground = portraitGround(8901, (x, y) =>
    clamp(0.12 + ((x - 50) / 270) * 0.85 - Math.max(0, (y - 260) / 260)),
  )
  const r = rng(8902)
  const hair = strands(
    r,
    16,
    lerp2(F.pt([200, 70]), F.pt([186, 108])),
    lerp2(F.pt([110, 76]), F.pt([108, 186])),
    [0.35, 0.6],
    1.6,
  )
  // The nap of the hat catching the light along its crown.
  const hat =
    gouge(...F.pt([196, -10]), ...F.pt([198, 40]), 1.1, 0.4) +
    gouge(...F.pt([184, -12]), ...F.pt([186, 40]), 0.6, 0.2) +
    gouge(...F.pt([130, 60]), ...F.pt([226, 56]), 0.6, 0.6)
  let back = ''
  const [bx, by] = F.pt([176, 152])
  for (let rad = 54; rad < 88; rad += 3.4)
    back += arcDashes(r, bx, by, rad * F.s, deg(100), deg(148), [8, 20], [2, 5])
  const neck = hatch(r, { x0: 112, x1: 190, y0: 196, y1: 218 }, 4.4, 0.06)
  const coat =
    gouge(30, 274, 14, 300, 1.4, 1.6) +
    gouge(250, 276, 266, 298, 1.4, -1.6) +
    gouge(40, 310, 30, 318, 1.2, 1) +
    gouge(260, 310, 270, 318, 1.2, -1) +
    gouge(110, 252, 100, 296, 0.9, 1) +
    gouge(200, 258, 210, 294, 0.9, -1)
  const cloth = 'M134 230Q170 232 200 226M140 240Q174 242 204 236'
  return { ground, hair, hat, back, neck, coat, cloth }
})

function JohnEyrePortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-jy-head`
  const hairClip = `${uid}-jy-hair`
  const P = (d: string) => placePath(d, F)
  const [ex, ey] = F.pt([222, 127])
  const [ax, ay] = F.pt([156, 112])
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
        <path d={CROWN} />
        <path d={BRIM} />
        <path d={COAT} />
      </g>
      {/* "he was going on a voyage to a foreign country": the greatcoat and its cape */}
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={CAPE} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={m.coat} fill={PAPER} />
      {/* the hem of the cape, catching the light, so it reads over the coat */}
      <path
        d="M-6 302C40 305 100 303 160 301C210 299 250 298 286 302"
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.back} strokeWidth={1.4} />
        <path d={m.neck} strokeWidth={LINE.hairline} />
      </g>
      <path d={HAIR} fill={INK} />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <ProfileEar at={[ax, ay]} h={38} />
      {/* "He looked quite a gentleman": the one man's face, plainly cut */}
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={P(MAN_LINES.jaw)} strokeWidth={1.4} />
        <path d={P(MAN_LINES.brow)} strokeWidth={2.2} />
        <path d={P(MAN_LINES.nostril)} strokeWidth={1.2} />
        <path d={P(MAN_LINES.fold)} strokeWidth={LINE.hairline} />
        <path d={P(MAN_LINES.mouth)} strokeWidth={1.6} />
        <path d={P(MAN_LINES.chin)} strokeWidth={LINE.hairline} />
      </g>
      <ProfileEye at={[ex, ey]} s={0.9} look={0.4} />
      {/* the tall hat */}
      <path d={CROWN} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={BAND} fill={INK} stroke={PAPER} strokeWidth={LINE.hairline} />
      <path d={m.hat} fill={PAPER} />
      <path d={BRIM} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={NECKCLOTH} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.cloth} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <InnerRule />
    </>
  )
}

export const johnEyreArt: LinocutArt = { width: PW, height: PH, Draw: JohnEyrePortrait }

export const johnEyre: Portrait = {
  name: 'John Eyre',
  art: johnEyreArt,
  alt: "A linocut portrait of John Eyre, Jane's uncle, in profile, facing right, drawn plainly from the one thing Bessie says of his looks in Chapter 10, that he looked a gentleman. He is a man no longer young, with regular features, a level brow and a firm mouth, dressed to travel: a tall dark hat, his dark hair showing under it at the temple and the nape, a white neckcloth wound high at his throat, and a dark greatcoat with a high collar and a short cape over the shoulders. Two numbered red markers point to his greatcoat and his face.",
  describedBy: [
    { phrase: 'he was going on a voyage to a foreign country', at: [66, 278] },
    { phrase: 'He looked quite a gentleman', at: [158, 168] },
  ],
  where: 'Chapter 10',
  passage:
    'he seemed so much disappointed, for he could not stay: he was going on a voyage to a foreign country, and the ship was to sail from London in a day or two. He looked quite a gentleman, and I believe he was your father’s brother.',
  note: 'Jane never meets her uncle, and the novel shows him only through Bessie’s memory of one visit. Yet his letters and his legacy shape her life twice: he helps to expose Rochester’s marriage, and he makes her independent.',
  artNote:
    'Bessie is the only person in the novel who sees him, and she says nothing of his face, so he is drawn plainly, in the dress of a gentleman of the time setting out on a journey. The markers point only at what she says.',
}
