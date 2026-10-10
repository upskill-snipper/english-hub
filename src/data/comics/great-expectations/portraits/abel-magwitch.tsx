import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  InnerRule,
  MAN_EYE,
  MAN_HEAD,
  ManFeatures,
  PH,
  PW,
  ProfileEye,
  hatch,
  inside,
  nudge,
  once,
  placer,
  portraitGround,
  smooth,
  type Knot,
} from './common'

/**
 * Abel Magwitch, as Dickens describes him when he comes back, and nothing
 * else. Chapter 39, a stormy night in the Temple: Pip hears a footstep on
 * the stair and holds his reading-lamp out over the rail.
 *
 *   "Moving the lamp as the man moved, I made out that he was substantially
 *   dressed, but roughly; like a voyager by sea. That he had long iron-grey
 *   hair. That his age was about sixty. That he was a muscular man, strong
 *   on his legs, and that he was browned and hardened by exposure to
 *   weather."
 *
 * and, a few lines on, when he is in Pip's rooms: "he pulled off a rough
 * outer coat, and his hat. Then, I saw that his head was furrowed and bald,
 * and that the long iron-grey hair grew only on its sides."
 *
 * So he is drawn as Pip then sees him, bareheaded, as the figure kit draws
 * him from Chapter 39 on ('magwitch60' in ../panels/people.tsx): a man of
 * about sixty in profile, facing right, his head lifted a little towards the
 * lamp, which lights him from below and in front; the top of his head bald,
 * with furrows across it ("furrowed and bald"); long grey hair growing only
 * on the sides of his head and hanging over his collar, cut as locks of
 * paper with the dark between them ("long iron-grey hair"); the convict's
 * heavy brow and strong nose, a deeply lined face, the cheek hollow and the
 * fold from nose to mouth cut deep ("about sixty", "hardened by exposure to
 * weather"); a thick neck and broad, heavy shoulders ("a muscular man"); a
 * seaman's short jacket of rough cloth and a neckerchief knotted at the
 * throat ("substantially dressed, but roughly; like a voyager by sea").
 *
 * The print has no brown, so the weather on his skin is left to the words
 * and shown only in its lines; his face is cut in paper (see ./common.tsx on
 * complexions). There is no red in this plate. Nothing of the convict of
 * Chapter 1 is drawn here, and nothing comes from a film or stage
 * production.
 *
 * Seeds: 7401 for the ground, 7402 for the cuts in the figure.
 */

/** The one man's head: the convict's heavy brow and strong nose, a hard jaw, a thick neck. */
const HEAD_K: Knot[] = nudge(MAN_HEAD, [
  [0, -14, 0],
  [1, -10, 0],
  [11, 3, 0],
  [12, 2, 0],
  [15, 3, 1],
  [16, 4, 2],
  [17, 2, 2],
  [24, 2, 2],
  [26, 3, 2],
  [27, 8, 0],
  [28, 11, 0],
])

/** The head lifted six degrees about the base of the neck: looking up at the lamp. */
const F = placer([12, 18], 0.9, -6, [160, 256])
const HEAD = smooth(F.knots(HEAD_K))

/**
 * His long grey hair, in the head's frame: growing only on the sides and the
 * back of the head, below the bald crown, and hanging over his collar.
 */
const HAIR_K: Knot[] = [
  [184, 104],
  [168, 92],
  [146, 86],
  [120, 90],
  [100, 104],
  [88, 130],
  [84, 170],
  [86, 210],
  [90, 250, 1],
  [124, 256],
  [152, 252, 1],
  [166, 220],
  [176, 180],
  [182, 140],
]
const HAIR_PLACED = F.knots(HAIR_K)
const HAIR = smooth(HAIR_PLACED)

/** The short jacket over broad shoulders. */
const JACKET = smooth([
  [-8, 330, 1],
  [-6, 290],
  [8, 262],
  [40, 244],
  [84, 236],
  [124, 240],
  [164, 252],
  [208, 248],
  [234, 258],
  [256, 280],
  [266, 330, 1],
])
/** Its collar, lying round the back of the neck. */
const COLLAR = smooth([
  [64, 252, 1],
  [76, 232],
  [104, 226],
  [132, 234],
  [154, 252],
  [150, 266, 1],
  [110, 258],
])
/** The neckerchief knotted at the throat, and its knot and ends. */
const KERCHIEF = smooth([
  [168, 250, 1],
  [196, 242],
  [214, 246],
  [222, 258],
  [208, 268],
  [184, 268],
  [166, 262, 1],
])
const KNOT = smooth([
  [204, 256, 1],
  [218, 258],
  [222, 272],
  [214, 288, 1],
  [208, 274],
  [200, 282, 1],
  [198, 268],
])
/** The front of the jacket, its lapel turned back. */
const LAPEL = smooth([
  [218, 264, 1],
  [238, 270],
  [252, 300],
  [256, 330, 1],
  [234, 330, 1],
  [230, 298],
])

type Marks = {
  ground: string
  hair: string
  hairDark: string
  furrows: string
  lines: string
  neck: string
  jacket: string
}

const marks = once<Marks>(() => {
  // Lit from below and in front by Pip's lamp; the stair behind him dark.
  const ground = portraitGround(7401, (x, y) =>
    clamp(1.12 - Math.hypot(x - 330, (y - 300) * 0.9) / 270),
  )
  const r = rng(7402)
  // "long iron-grey hair": locks of paper hanging from the edge of the bald
  // crown down over the collar, with the dark between them, so it reads as
  // grey (the kit's SIXTY_HAIR found one solid paper shape read as a hood).
  const poly = HAIR_PLACED.map(([x, y]): Pt => [x, y])
  let hair = ''
  for (let i = 0; i < 30; i++) {
    const t = (i + between(r, 0.1, 0.9)) / 30
    const [x0, y0] = F.pt([182 - t * 88, 98 - Math.sin(t * Math.PI) * 10])
    const [x1, y1] = F.pt([150 - t * 58 + between(r, -4, 4), 254])
    const pts: Pt[] = []
    for (let k = 0; k <= 10; k++) {
      const u = k / 10
      const x =
        x0 + (x1 - x0) * u + Math.sin(u * Math.PI) * between(r, -4, 2) + Math.sin(u * 9 + i) * 1.1
      const y = y0 + (y1 - y0) * u
      if (inside(poly, x, y)) pts.push([x, y])
    }
    if (pts.length > 3) hair += ribbon(pts, between(r, 1.3, 2.4), 0.8)
  }
  // The dark between the locks, deepest at the back.
  let hairDark = ''
  const [hx, hy] = F.pt([150, 160])
  for (let rad = 50; rad < 90; rad += 3.4)
    hairDark += arcDashes(r, hx, hy, rad, deg(110), deg(220), [6, 16], [3, 8])
  // "his head was furrowed and bald": furrows across the crown and the brow.
  const P = F.p
  let furrows = ''
  for (let i = 0; i < 4; i++) {
    const y = 58 + i * 9
    furrows += `M${P(158 + i * 6, y + 6)}Q${P(196 + i * 3, y - 4)} ${P(222 + i * 2, y + 6 + i * 2)}`
  }
  // "about sixty", "hardened by exposure to weather": the creases at the eye,
  // the hollow cheek, the deep fold from the nose and the lines along the jaw.
  let lines = ''
  lines += `M${P(207, 126)}L${P(197, 122)}M${P(207, 130)}L${P(196, 131)}M${P(208, 134)}L${P(199, 140)}`
  lines += `M${P(236, 151)}C${P(227, 159)} ${P(223, 171)} ${P(224, 183)}`
  lines += `M${P(231, 157)}C${P(225, 165)} ${P(221, 175)} ${P(222, 185)}`
  for (let rad = 12; rad < 26; rad += 3.4) {
    const [cx, cy] = F.pt([200, 146])
    lines += arcDashes(r, cx, cy, rad * 0.9, deg(60), deg(132), [6, 12], [2, 5])
  }
  lines += `M${P(228, 198)}Q${P(216, 206)} ${P(202, 208)}`
  // A deep-set eye: the shadow of the heavy brow over it.
  lines += `M${P(209, 116)}Q${P(220, 111)} ${P(233, 116)}`
  const neck =
    hatch(r, { x0: 96, x1: 178, y0: 190, y1: 250 }, 4.8, 0.08) +
    `M${P(214, 222)}Q${P(204, 236)} ${P(200, 252)}`
  // "roughly": the coarse cloth of the jacket, cut in short broken strokes,
  // and its heavy folds.
  let jacket = ''
  for (let i = 0; i < 70; i++) {
    const x = between(r, 4, 250)
    const y = between(r, 252, 318)
    const L = between(r, 3, 7)
    const a = deg(between(r, 60, 120))
    jacket += gouge(x, y, x + Math.cos(a) * L, y + Math.sin(a) * L, 0.55)
  }
  jacket +=
    gouge(30, 270, 14, 318, 2.2, 2) +
    gouge(62, 258, 52, 318, 1.6, 2) +
    gouge(178, 272, 186, 318, 1.4, -1)
  return { ground, hair, hairDark, furrows, lines, neck, jacket }
})

function MagwitchPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-mw-head`
  const hairClip = `${uid}-mw-hair`
  const jacketClip = `${uid}-mw-jacket`
  const [ex, ey] = F.pt([MAN_EYE[0], MAN_EYE[1] + 1])
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={jacketClip}>
          <path d={JACKET} />
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
      <g clipPath={`url(#${jacketClip})`}>
        <path d={m.jacket} fill={PAPER} />
      </g>
      <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.neck} strokeWidth={LINE.hairline} />
        <path d={m.furrows} strokeWidth={1} />
        <path d={m.lines} strokeWidth={0.95} />
      </g>
      <ManFeatures F={F} brow={3.4} knit={1.5} mouth="thin" />
      <ProfileEye at={[ex, ey]} s={0.86} look={0.6} />
      {/* The jacket's collar and the neckerchief. */}
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={KERCHIEF} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={KNOT} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      {/* "long iron-grey hair", growing only on the sides of his head. */}
      <path d={HAIR} fill={INK} />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hairDark} fill="none" stroke={INK} strokeWidth={2} />
        <path d={m.hair} fill={PAPER} />
      </g>
      <InnerRule />
    </>
  )
}

export const abelMagwitchArt: LinocutArt = { width: PW, height: PH, Draw: MagwitchPortrait }

export const abelMagwitch: Portrait = {
  name: 'Abel Magwitch',
  art: abelMagwitchArt,
  alt: "A linocut portrait of Abel Magwitch as he comes back in Chapter 39, in profile, facing right, his head lifted a little towards a light below and in front of him, against a dark stair. He is a man of about sixty with a deeply lined face: a heavy brow over a deep-set eye, a strong nose, creases at the corner of the eye, a hollow cheek, a deep fold from nose to mouth and a thin, hard mouth. The top of his head is bald, with furrows across it, and long grey hair grows only on the sides of his head and hangs over his collar. He has a thick neck and broad, heavy shoulders, and wears a seaman's short jacket of rough cloth and a dark neckerchief knotted at the throat. Four numbered red markers point to his rough jacket, his long grey hair, his thick neck and his weathered face.",
  describedBy: [
    {
      phrase: 'substantially dressed, but roughly; like a voyager by sea',
      at: [26, 226],
      to: [60, 256],
    },
    { phrase: 'long iron-grey hair', at: [30, 156], to: [94, 164] },
    { phrase: 'a muscular man', at: [300, 226], to: [212, 230] },
    {
      phrase: 'browned and hardened by exposure to weather',
      at: F.pt([194, 156]),
    },
  ],
  where: 'Chapter 39',
  passage:
    'Moving the lamp as the man moved, I made out that he was substantially dressed, but roughly; like a voyager by sea. That he had long iron-grey hair. That his age was about sixty. That he was a muscular man, strong on his legs, and that he was browned and hardened by exposure to weather.',
  note: 'Pip sees him first by the lamp as a stranger, piece by piece, in short sentences, as a man takes in someone he cannot place. The face he does not want to know is the one from the churchyard, and the money that made him a gentleman came from it.',
  artNote:
    'His bald, furrowed head is from a few lines later in the chapter, when he takes off his hat. The print has no brown, so the weather on his skin is left to the words and shown only in its lines.',
}
