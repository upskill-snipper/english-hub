import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rays,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/timing'

import { InnerRule, PH, PW, coat, once, portraitGround, smooth, type Knot } from './common'

/**
 * Old Major, as Orwell first shows him in Chapter 1, and nothing else:
 *
 *   "At one end of the big barn, on a sort of raised platform, Major was
 *   already ensconced on his bed of straw, under a lantern which hung from a
 *   beam. He was twelve years old and had lately grown rather stout, but he
 *   was still a majestic-looking pig, with a wise and benevolent appearance in
 *   spite of the fact that his tushes had never been cut."
 *
 * and, a paragraph before, "old Major, the prize Middle White boar". So: a
 * big, stout white boar cut in PAPER, lying at his ease on a heap of straw on
 * the edge of a plank platform, his head raised and turned a little towards
 * us; a heavy, kindly face, the eye half-lidded and creased at the corner; his
 * two uncut tushes curving up out of his lower jaw, cut in paper with an ink
 * shadow so they show against his white face; and over him a lantern hanging
 * from a black beam, its flame printed in the spot colour and its light cut
 * into the dark of the barn around it. It is night: the meeting waits until
 * Mr Jones is asleep. Nothing here comes from a film or stage production.
 *
 * Seeds: 5201 for the ground, 5202 for the cuts in the figure, 5203 for the
 * straw.
 */

/** Where the lantern hangs, and its flame. */
const LAMP: Pt = [106, 78]
const BEAM = { top: 14, foot: 40 }

/** The body, lying on the straw, facing right: rump at the left, shoulder under the head. */
const BODY: Knot[] = [
  [20, 292, 1],
  [16, 250],
  [30, 196],
  [64, 160],
  [112, 140],
  [160, 134],
  [200, 132],
  [224, 150],
  [236, 200],
  [238, 250],
  [236, 292, 1],
]
/** The head: poll, ears' root, forehead, the dished face, the snout, mouth, jowl. */
const HEAD: Knot[] = [
  [186, 146],
  [196, 120],
  [214, 106],
  [236, 106],
  [254, 116],
  [268, 134],
  [280, 156],
  [292, 172],
  [304, 180, 1],
  [309, 196],
  [306, 212, 1],
  [296, 214],
  [284, 216],
  [272, 222],
  [262, 234],
  [246, 248],
  [226, 256],
  [204, 254],
  [188, 240],
  [180, 214],
  [178, 184],
]
/** The snout's flat disc, seen a little from the side. */
const SNOUT_DISC = smooth([
  [303, 181],
  [311, 186],
  [314, 197],
  [311, 209],
  [305, 212],
  [301, 204],
  [300, 192],
])
/** The ears: large and upright, tipped forward. */
const EAR_FAR = smooth([
  [198, 124],
  [194, 94],
  [202, 66, 1],
  [218, 90],
  [216, 114],
])
const EAR_NEAR = smooth([
  [226, 114],
  [236, 84],
  [258, 60, 1],
  [262, 90],
  [254, 122],
])
/** The near foreleg, folded under him, the trotter showing at the front. */
const FORELEG = smooth([
  [200, 256],
  [230, 262],
  [258, 270],
  [270, 276],
  [268, 290],
  [240, 290],
  [206, 284],
])
/** The trotter: two toes, split, at the end of the folded leg. */
const TROTTER =
  'M262 272C272 270 282 276 286 286C286 291 280 292 274 291L262 290C258 284 258 276 262 272Z'
const TROTTER_SPLIT = 'M270 280Q278 283 285 288'
/** A tush: from the root in the lower jaw, curving up and out past the lip. */
const TUSH_NEAR = 'M268 222C270 212 276 200 286 192C284 202 280 212 276 224Z'
const TUSH_FAR = 'M292 214C294 206 298 198 304 194C303 202 300 210 298 216Z'

type Marks = {
  ground: string
  light: string
  beam: string
  straw: string
  strawBack: string
  hide: string
  belly: string
  jowl: string
  brow: string
  barrel: string
  bristles: string
}

const marks = once<Marks>(() => {
  const ground = portraitGround(5201, (x, y) =>
    clamp(0.95 - Math.hypot(x - LAMP[0], (y - LAMP[1]) * 1.2) / 190),
  )
  const r = rng(5202)
  // The lantern's light cut into the dark round it.
  const light = rays(r, LAMP[0], LAMP[1] + 8, { from: 26, to: 92, every: 9, width: 2.6 })
  // The beam: a black baulk of timber, its grain cut along it.
  let beam = ''
  for (let y = BEAM.top + 5; y < BEAM.foot - 3; y += 5)
    for (let x = 10 + between(r, 0, 20); x < PW - 20; x += between(r, 50, 90))
      beam += gouge(x, y + between(r, -1, 1), x + between(r, 26, 60), y + between(r, -1, 1), 0.7)
  // The white hide, modelled only in its shadows, and a few bristles standing
  // off the ridge of his back.
  const hide = coat(
    r,
    BODY,
    90,
    (x) => deg(-8 + x * 0.1),
    (x, y) => clamp((y - 230) / 60 + (90 - x) / 200),
    { len: [7, 14], stroke: true },
  )
  let bristles = ''
  for (let i = 0; i < 34; i++) {
    const t = (i + between(r, 0.1, 0.9)) / 34
    const x = 34 + t * 170
    const y = 196 - Math.sin(t * Math.PI * 0.62) * 66 + t * 4
    const a = deg(-100 + t * 40 + between(r, -12, 12))
    const L = between(r, 4, 8)
    bristles += `M${n(x)} ${n(y)}l${n(Math.cos(a) * L)} ${n(Math.sin(a) * L)}`
  }
  let belly = ''
  for (let rad = 118; rad < 170; rad += 7)
    belly += arcDashes(r, 150, 330, rad, deg(200), deg(236), [10, 26], [3, 8])
  // The heavy jowl and the folds of an old face.
  let jowl = ''
  for (let rad = 14; rad < 40; rad += 4.5)
    jowl += arcDashes(r, 232, 214, rad, deg(20), deg(160), [8, 18], [2, 6])
  const brow =
    'M232 128Q242 124 252 130M228 136Q240 131 254 140M270 156Q274 150 280 150M276 166Q281 160 288 161M282 176Q287 171 294 173M236 238Q250 236 262 228'
  // The straw: a heap of paper stalks lying every way. Behind him it is
  // heaped up round his body; in front it spills over the platform's edge.
  const rs = rng(5203)
  let straw = ''
  let strawBack = ''
  const stalk = (x: number, y: number, a: number, L: number) =>
    ribbon(
      [
        [x, y],
        [x + Math.cos(a) * L * 0.5, y + Math.sin(a) * L * 0.5 + between(rs, -2, 2)],
        [x + Math.cos(a) * L, y + Math.sin(a) * L],
      ],
      between(rs, 2.4, 4),
      0.6,
    )
  for (let i = 0; i < 120; i++) {
    const x = between(rs, 8, PW - 8)
    const y = between(rs, 206, 288) + Math.max(0, 140 - x) * 0.3
    strawBack += stalk(
      x,
      y,
      deg(between(rs, -35, 35) + (rs() < 0.5 ? 180 : 0)),
      between(rs, 18, 40),
    )
  }
  for (let i = 0; i < 110; i++) {
    const x = between(rs, 8, PW - 8)
    const y = between(rs, 268, 300)
    straw += stalk(x, y, deg(between(rs, -25, 25) + (rs() < 0.5 ? 180 : 0)), between(rs, 16, 34))
  }
  // The hide's curve: long broken lines round the barrel of the body, on its
  // shadowed side, away from the lantern.
  let barrel = ''
  for (let rad = 50; rad < 150; rad += 8)
    barrel += arcDashes(r, 150, 196, rad, deg(62), deg(172), [12, 30], [4, 10])
  return { ground, light, beam, straw, strawBack, hide, bristles, belly, jowl, brow, barrel }
})

function OldMajorPortrait({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-om-body`
  const HEAD_D = smooth(HEAD)
  const BODY_D = smooth(BODY)
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={BODY_D} />
          <path d={HEAD_D} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      <path d={m.light} fill={PAPER} />
      {/* the beam, and the lantern hanging from it */}
      <rect x={8} y={BEAM.top} width={PW - 16} height={BEAM.foot - BEAM.top} fill={INK} />
      <path d={`M8 ${BEAM.foot}L${PW - 8} ${BEAM.foot}`} stroke={PAPER} strokeWidth={LINE.bold} />
      <path d={m.beam} fill={PAPER} />
      <g stroke={PAPER} strokeWidth={LINE.carve} fill="none">
        <path d={`M${LAMP[0]} ${BEAM.foot}L${LAMP[0]} ${LAMP[1] - 30}`} />
        <path
          d={`M${LAMP[0] - 7} ${LAMP[1] - 22}Q${LAMP[0]} ${LAMP[1] - 38} ${LAMP[0] + 7} ${LAMP[1] - 22}`}
        />
      </g>
      <g transform={`translate(${LAMP[0]} ${LAMP[1]})`}>
        <path d="M-14 -20L14 -20L10 -26L-10 -26Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
        <rect x={-13} y={-20} width={26} height={36} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path
          d="M-6 10C-9 2 -5 -6 0 -12C5 -6 9 2 6 10C3 13 -3 13 -6 10Z"
          fill={RED}
          className="lc-flicker"
          style={timing({ delay: 0.4 })}
        />
        <path
          d="M-13 -20L-13 16M13 -20L13 16M0 -20L0 -14M-13 -2L-9 -2M13 -2L9 -2"
          stroke={INK}
          strokeWidth={2}
        />
        <path d="M-16 16L16 16L12 23L-12 23Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
      </g>
      {/* the platform's edge, and the straw heaped on it behind him */}
      <rect x={8} y={296} width={PW - 16} height={16} fill={INK} />
      <path d="M8 297L324 297" stroke={PAPER} strokeWidth={LINE.bold} />
      <path d={m.strawBack} fill={PAPER} />
      {/* the ink halo that lifts him off the straw and the dark */}
      <g fill={INK} stroke={INK} strokeWidth={8} strokeLinejoin="round">
        <path d={BODY_D} />
        <path d={HEAD_D} />
        <path d={EAR_FAR} />
        <path d={EAR_NEAR} />
      </g>
      <path d={EAR_FAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d="M204 116Q204 96 204 78" fill="none" stroke={INK} strokeWidth={1.2} />
      <path d={BODY_D} fill={PAPER} />
      <path d={HEAD_D} fill={PAPER} />
      <g clipPath={`url(#${clip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.hide} strokeWidth={LINE.hairline} />
        <path d={m.belly} strokeWidth={1.1} />
        <path d={m.barrel} strokeWidth={LINE.hairline} />
        {/* the shadow where he sinks into the straw */}
        <path
          d="M0 276C40 270 80 280 120 272C160 266 200 276 240 270L240 320L0 320Z"
          fill={INK}
          stroke="none"
        />
        <path d={m.jowl} strokeWidth={1} />
      </g>
      <path
        d={m.bristles}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      {/* where the head turns from the shoulder */}
      <path
        d="M196 150C184 176 184 214 198 246"
        fill="none"
        stroke={INK}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <path d={EAR_NEAR} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
      <path
        d="M234 112Q244 90 256 70M240 116Q250 98 258 82"
        fill="none"
        stroke={INK}
        strokeWidth={1}
        strokeLinecap="round"
      />
      {/* the snout, the mouth, the tushes */}
      <path d={SNOUT_DISC} fill={PAPER} stroke={INK} strokeWidth={1.8} />
      <g fill={INK}>
        <ellipse cx={306} cy={192} rx={1.8} ry={3} />
        <ellipse cx={307} cy={203} rx={1.8} ry={3} />
      </g>
      <path
        d="M303 214C292 220 280 222 266 224"
        fill="none"
        stroke={INK}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <g stroke={INK} strokeWidth={1.3} strokeLinejoin="round">
        <path d={TUSH_FAR} fill={PAPER} />
        <path d={TUSH_NEAR} fill={PAPER} />
      </g>
      {/* a wise, kindly eye under a heavy lid, creased at the corner */}
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={m.brow} strokeWidth={1.1} />
        <path d="M242 150Q252 142 262 150" strokeWidth={2.6} />
        <path d="M244 154Q252 158 261 153" strokeWidth={1.2} />
        <path d="M240 158L234 162M242 162L238 168" strokeWidth={1} />
      </g>
      <ellipse cx={253} cy={152} rx={3} ry={2.6} fill={INK} />
      <circle cx={254.2} cy={151} r={0.9} fill={PAPER} />
      {/* the straw in front of him, over the edge of the platform */}
      <path d={m.straw} fill={PAPER} />
      <path d={FORELEG} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
      <path d={TROTTER} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <path d={TROTTER_SPLIT} fill="none" stroke={PAPER} strokeWidth={1.4} strokeLinecap="round" />
      <InnerRule />
    </>
  )
}

export const oldMajorArt: LinocutArt = { width: PW, height: PH, Draw: OldMajorPortrait }

export const oldMajor: Portrait = {
  name: 'Old Major',
  art: oldMajorArt,
  alt: 'A linocut portrait of Old Major in the big barn at night, in Chapter 1: a big, stout white boar lying at his ease on a heap of straw, facing right, his head raised. He has large upright ears, a heavy, kindly face with a half-closed eye creased at the corner, a broad flat snout, and two uncut tusks curving up out of his lower jaw. Above him a lantern hangs from a black beam, its flame printed in red and its light cut into the dark around it. Five numbered red markers point to the straw, the lantern, his body, his eye and his tusks.',
  describedBy: [
    { phrase: 'ensconced on his bed of straw', at: [48, 290], to: [72, 272] },
    { phrase: 'under a lantern which hung from a beam', at: [160, 84], to: [122, 80] },
    { phrase: 'a majestic-looking pig', at: [96, 200], to: [128, 180] },
    { phrase: 'a wise and benevolent appearance', at: [290, 120], to: [258, 148] },
    { phrase: 'his tushes had never been cut', at: [300, 250], to: [282, 206] },
  ],
  where: 'Chapter 1',
  passage:
    'At one end of the big barn, on a sort of raised platform, Major was already ensconced on his bed of straw, under a lantern which hung from a beam. He was twelve years old and had lately grown rather stout, but he was still a majestic-looking pig, with a wise and benevolent appearance in spite of the fact that his tushes had never been cut.',
  note: 'Orwell makes the founder of the Rebellion grand and kind, so the reader measures the pigs against him. His rules are broken one by one, and under Napoleon even his skull is dug up and put on show.',
  artNote:
    'He is cut white because the text calls him “the prize Middle White boar”, a white breed.',
}
