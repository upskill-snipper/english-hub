import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, ribbon, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  COIF,
  COIF_EDGE,
  CutFigure,
  EYE,
  FULL_BEARD,
  FULL_BEARD_STRANDS,
  HEAD_GIRL,
  HEAD_MAN,
  HEAD_NURSE,
  HEAD_WOMAN,
  JULIET_HAIR,
  JULIET_STRANDS,
  VEIL,
  VEIL_BAND,
  WHITE_BROW,
  footShadow,
  headAt,
  line,
  prayingHands,
  stoneWall,
  flagFloor,
  type Part,
} from './acts-3-4-kit'
import { CAP, CAP_BAND } from './late-scenes-kit'

/**
 * Act 3, Scene 5: "Dawn, and a father's rage", the thirteenth moment in the
 * guide's timeline. "An open Gallery to Juliet's Chamber, overlooking the
 * Garden", at daybreak. Every detail is from the scene in the held edition
 * (src/data/full-texts/romeo-and-juliet.ts):
 *
 * - ROMEO: "Look, love, what envious streaks / Do lace the severing clouds
 *   in yonder east. ... jocund day / Stands tiptoe on the misty mountain
 *   tops." NURSE: "The day is broke". So the gallery's arches open on the
 *   first light: streaks laced through the clouds in the spot colour, over
 *   misty hills. JULIET: "Nightly she sings on yond pomegranate tree", so the
 *   tree stands in the garden below. Romeo has gone ("[Descends.]"), so he is
 *   not drawn.
 * - JULIET: "Good father, I beseech you on my knees, / Hear me with patience
 *   but to speak a word." So she kneels before him, her hands pressed
 *   together, looking up at him.
 * - CAPULET: "Hang thee young baggage, disobedient wretch! ... Or never
 *   after look me in the face." LADY CAPULET: "You are too hot." So he stands
 *   over her, leaning in with both hands on his hips, his face edged in red.
 *   He threatens ("My fingers itch") but the text has him strike no one, so
 *   neither hand goes near her: no raised hand, no fist. He was first cut
 *   pointing down at her, and at panel size the small knuckles and long
 *   outlined finger read as a fist gripping a stick held at a kneeling girl
 *   (review of 26 September 2026); arms akimbo carry the rage and cannot be
 *   misread.
 * - "Enter Capulet and Nurse." NURSE: "God in heaven bless her. / You are to
 *   blame, my lord, to rate her so." So the Nurse stands behind him, her
 *   hands pressed together in appeal.
 * - LADY CAPULET: "Fie, fie! What, are you mad?" She has brought the news
 *   and will not help ("Talk not to me, for I'll not speak a word"), so she
 *   stands apart on the left, by the door, her hands folded.
 *
 * Juliet is cut in paper, with her dark hair loose, as in the other Romeo
 * and Juliet panels, and a head shorter than the adults: she is not yet
 * fourteen. Capulet is old, white-bearded, in his cap and long gown; Lady
 * Capulet in a gown and veil; the Nurse broad, in a white coif
 * (./acts-3-4-kit.tsx). Seeds: 3501 (wall), 3502 (floor), 3503 (sky and
 * tree).
 */

const W = 860
const H = 340
const FLOOR = 276
/** The two arches of the gallery, open on the garden: springing line, radius, sill. */
const ARCH = { spring: 98, r: 62, sill: 214, cols: [566, 702, 838] }
const archPath = (x0: number, x1: number) => {
  const r = (x1 - x0) / 2
  return `M${x0} ${ARCH.sill}V${ARCH.spring}A${r} ${r} 0 0 1 ${x1} ${ARCH.spring}V${ARCH.sill}Z`
}
const OPEN = [archPath(578, 690), archPath(714, 826)]

type Marks = {
  wall: string
  joints: string
  floor: string
  clouds: string
  streaks: string
  mist: string
  leaves: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(3501)
  // the first light comes in through the arches, from the right
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot(x - 720, (y - 150) * 1.2) / 700) ** 1.1, 0.05)
  const { cuts: wall, joints } = stoneWall(r, { x0: 0, x1: W, y0: 4, y1: FLOOR - 2 }, light)
  const floor = flagFloor(rng(3502), W, H, FLOOR, [470, 30])

  // The dawn sky: pale, with ink bars of cloud, and the streaks of light
  // laced through them in the spot colour, lowest and strongest in the east.
  const s = rng(3503)
  let clouds = ''
  let streaks = ''
  for (let y = 44; y < 176; y += 7) {
    let x = 572 + between(s, -20, 0)
    while (x < 834) {
      const len = between(s, 24, 70)
      const dark = clamp(1 - (y - 40) / 150)
      if (s() < 0.25 + dark * 0.55)
        clouds += gouge(x, y, x + len, y + between(s, -0.6, 0.6), 0.6 + dark * 2.2)
      x += len + between(s, 8, 24)
    }
    if (y > 120 && y < 172) {
      let sx = 580 + between(s, 0, 30)
      while (sx < 820) {
        const len = between(s, 30, 80)
        if (s() < 0.8)
          streaks += gouge(
            sx,
            y + 3,
            sx + len,
            y + 3 + between(s, -0.5, 0.5),
            1.6 + (y - 120) * 0.05,
          )
        sx += len + between(s, 14, 40)
      }
    }
  }
  // misty mountain tops on the horizon
  let mist = ''
  for (let y = 186; y < 204; y += 4.4)
    mist += gouge(572, y, 834, y + between(s, -0.4, 0.4), 0.8 + (y - 186) * 0.06)
  // the pomegranate tree's crown, cut into leaves
  let leaves = ''
  for (let i = 0; i < 46; i++) {
    const a = between(s, 0, Math.PI * 2)
    const rad = Math.sqrt(s()) * 36
    const x = 778 + Math.cos(a) * rad * 1.25
    const y = 178 + Math.sin(a) * rad * 0.8
    const t = between(s, -0.6, 0.6)
    leaves += gouge(x, y, x + 6 * Math.cos(t), y + 6 * Math.sin(t), 1.3)
  }
  cached = { wall, joints, floor, clouds, streaks, mist, leaves }
  return cached
}

// ── Lady Capulet, on the left, standing apart ───────────────────────────────
// Drawn at full size with her feet at (203, 310), and set further back with LADY_AT.
const LADY_AT = 'translate(206 294) scale(0.86) translate(-203 -310)'
const LADY_HEAD = headAt([196, 112], 1, 1, 2)
const LADY: Part[] = [
  { d: VEIL, t: LADY_HEAD },
  {
    d: 'M186 132C176 136 173 148 175 160C176 170 179 180 182 190C172 230 164 270 156 310L250 310C242 270 232 230 208 190C210 180 212 168 212 158C212 146 208 136 200 132C196 130 190 130 186 132Z',
  },
  { d: HEAD_WOMAN, t: LADY_HEAD },
  // her hands folded before her
  {
    d: line([
      [204, 142],
      [214, 170],
      [200, 182],
    ]),
    w: 8.5,
    sep: 1.6,
  },
  { d: 'M191 182a6 5 0 1 0 12 0a6 5 0 1 0 -12 0Z', sep: 1.2 },
]
const LADY_CUTS =
  gouge(184, 204, 170, 304, 1.1, 0.8) +
  gouge(196, 208, 196, 304, 1, 0) +
  gouge(206, 204, 228, 304, 1, -0.8) +
  gouge(181, 190, 208, 190, 0.9) +
  gouge(186, 132.6, 202, 132.6, 2.2, 0.8)

// ── The Nurse, behind Capulet, her hands pressed together ───────────────────
// Set a little back from him with NURSE_AT, her feet at (311, 308).
const NURSE_AT = 'translate(314 300) scale(0.93) translate(-311 -308)'
const NURSE_HEAD = headAt([308, 122], 1, 1.02, 4)
const NURSE_HANDS = prayingHands([318, 170], -62, 1.1)
const NURSE: Part[] = [
  // a broad gown, and her apron over it
  {
    d: 'M296 142C280 148 274 166 274 188C272 226 266 266 260 308L362 308C356 266 348 226 344 190C342 164 336 148 322 142C314 138 304 138 296 142Z',
  },
  { d: HEAD_NURSE, t: NURSE_HEAD },
  { d: COIF, t: NURSE_HEAD },
  {
    d: line([
      [322, 152],
      [334, 180],
      [322, 172],
    ]),
    w: 10,
    sep: 1.6,
  },
  { ...NURSE_HANDS.part, sep: 1.3 },
]
const NURSE_CUTS =
  gouge(290, 214, 282, 302, 1, 0.6) +
  gouge(320, 218, 330, 302, 0.9, -0.6) +
  gouge(300, 192, 342, 192, 1)

// ── Capulet, facing right, leaning over her and pointing ────────────────────
const CAPULET_HEAD = headAt([436, 110], 1, 1.08, 14)
const CAPULET: Part[] = [
  // the far arm, its hand on his hip, behind the gown
  {
    d: line([
      [418, 140],
      [386, 166],
      [408, 190],
    ]),
    w: 12,
  },
  { d: 'M404 184a7 6 0 1 0 12 0a7 6 0 1 0 -12 0Z' },
  // the long gown, leaning forward
  {
    d: 'M422 130C408 136 402 158 402 186C400 226 396 264 392 306L472 306C470 266 466 228 462 194C462 160 458 138 444 130C436 126 428 126 422 130Z',
  },
  { d: HEAD_MAN, t: CAPULET_HEAD },
  { d: CAP, t: CAPULET_HEAD },
  // the near arm, akimbo: the elbow thrust out towards her, the hand on his
  // hip, in its wide sleeve
  {
    d: line([
      [446, 142],
      [476, 166],
      [462, 190],
    ]),
    w: 12.5,
    sep: 1.6,
  },
  { d: 'M452 195a6.5 5.5 0 1 0 13 0a6.5 5.5 0 1 0 -13 0Z', sep: 1.2 },
]
const CAPULET_CUTS =
  gouge(416, 196, 410, 300, 1, 0.8) +
  gouge(434, 196, 438, 300, 0.9, -0.4) +
  gouge(452, 170, 462, 300, 1, -0.8)

// ── Juliet, kneeling, facing left, looking up at him ────────────────────────
const JULIET_HEAD = headAt([584, 184], -1, 0.94, 14)
const JULIET_HANDS = prayingHands([566, 232], -124, 1.1)
const JULIET: Part[] = [
  { d: JULIET_HAIR, t: JULIET_HEAD },
  // her gown, kneeling: the body upright, the skirt spread on the floor behind
  {
    d: 'M580 202C570 206 566 220 568 236C569 248 572 258 574 266C566 280 562 294 562 312L650 314C648 300 640 290 626 284C616 280 606 276 600 270C602 256 604 244 604 232C604 216 600 206 592 202C588 200 584 200 580 202Z',
  },
  { d: HEAD_GIRL, t: JULIET_HEAD },
  {
    d: line([
      [582, 216],
      [566, 248],
      [560, 238],
    ]),
    w: 8,
    sep: 1.4,
  },
  { ...JULIET_HANDS.part, sep: 1.2 },
]
const JULIET_CUTS =
  gouge(576, 270, 568, 308, 1, 0.6) +
  gouge(592, 276, 604, 306, 0.9, -0.4) +
  gouge(612, 290, 640, 310, 0.8, -0.6) +
  gouge(572, 262, 600, 264, 0.8)

function DawnAndAFathersRage({ uid }: ArtProps) {
  const m = marks()
  const sky = `${uid}-sky`
  const face = `${uid}-face`
  return (
    <>
      <defs>
        <clipPath id={sky}>
          <path d={OPEN.join('')} />
        </clipPath>
        {/* the front of Capulet's face, for the flush of his temper */}
        <clipPath id={face}>
          <rect x={10} y={-12} width={16} height={24} transform={CAPULET_HEAD} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [480, 200], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />
        <path d={m.joints} fill={PAPER} />

        {/* the door back into the house, on the left */}
        <path d="M24 276V110A42 42 0 0 1 108 110V276Z" fill={PAPER} />
        <path d="M32 276V112A34 34 0 0 1 100 112V276Z" fill={INK} />

        {/* the gallery's arches, open on the dawn */}
        <path
          d="M570 222V98A64 64 0 0 1 698 98V222ZM706 222V98A64 64 0 0 1 834 98V222Z"
          fill={PAPER}
        />
        <g clipPath={`url(#${sky})`}>
          <rect x={570} y={30} width={270} height={190} fill={PAPER} />
          <path d={m.clouds} fill={INK} />
          <g className="lc-fade-in" style={timing({ delay: 0.4, dur: 1.6 })}>
            <path d={m.streaks} fill={RED} />
          </g>
          {/* the misty mountain tops */}
          <path
            d="M570 214V196C590 184 606 176 622 184C640 170 660 166 680 178C700 168 720 172 736 182C760 170 786 172 806 184C818 180 830 182 840 186V214Z"
            fill={INK}
          />
          <path d={m.mist} fill={PAPER} />
          {/* the pomegranate tree in the garden below */}
          <path
            d="M774 214V196L770 190M782 214V194L788 186"
            stroke={INK}
            strokeWidth={5}
            fill="none"
          />
          <path
            d="M738 186C734 166 752 146 778 146C804 146 822 164 818 184C814 200 796 206 778 204C758 206 742 200 738 186Z"
            fill={INK}
          />
          <path d={m.leaves} fill={PAPER} />
        </g>
        {/* the parapet below the arches */}
        <path d="M566 214H838V222H566Z" fill={PAPER} />
        <path d="M566 222H838V276H566Z" fill={INK} />
        <path
          d={
            gouge(570, 240, 834, 240, 0.9) +
            gouge(570, 258, 834, 258, 0.9) +
            gouge(630, 222, 630, 240, 0.8) +
            gouge(760, 222, 760, 240, 0.8) +
            gouge(700, 240, 700, 258, 0.8)
          }
          fill={PAPER}
        />

        {/* the floor */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path
          d={
            footShadow(206, 297, 42) +
            footShadow(314, 303, 48) +
            footShadow(432, 310, 44) +
            footShadow(606, 316, 50)
          }
          fill={INK}
        />

        <CutFigure parts={LADY} cuts={LADY_CUTS} transform={LADY_AT}>
          <path d={VEIL_BAND} transform={LADY_HEAD} fill={PAPER} />
          <path
            d="M-12.6 -9C-15.4 4 -12.6 30 -18 56C-19.8 64 -21.4 68 -22.6 71"
            transform={LADY_HEAD}
            stroke={PAPER}
            strokeWidth={1.3}
            fill="none"
          />
          <path d={EYE} transform={LADY_HEAD} fill={PAPER} />
        </CutFigure>

        <CutFigure parts={NURSE} cuts={NURSE_CUTS} transform={NURSE_AT}>
          <g transform={NURSE_HEAD}>
            <path d={COIF} fill={PAPER} />
            <path d={COIF_EDGE} fill="none" stroke={INK} strokeWidth={1.2} />
            <path d={EYE} fill={PAPER} />
          </g>
          {/* her apron */}
          <path
            d="M292 196C290 230 288 262 286 300L336 300C334 262 332 230 330 196Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth={1}
          />
          <path d={gouge(302, 206, 298, 294, 0.7) + gouge(320, 206, 324, 294, 0.7)} fill={INK} />
          <path d={NURSE_HANDS.cut} transform={NURSE_HANDS.t} fill={PAPER} />
        </CutFigure>

        <CutFigure parts={CAPULET} cuts={CAPULET_CUTS}>
          <g transform={CAPULET_HEAD}>
            <path d={CAP_BAND} fill={PAPER} />
            <path d={FULL_BEARD} fill={PAPER} stroke={INK} strokeWidth={0.9} />
            <path d={FULL_BEARD_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
            <path d={WHITE_BROW} fill={PAPER} />
            <path d={EYE} fill={PAPER} />
          </g>
          {/* "You are too hot": the flush down the front of his face */}
          <g clipPath={`url(#${face})`}>
            <path
              d={HEAD_MAN}
              transform={CAPULET_HEAD}
              fill="none"
              stroke={RED}
              strokeWidth={2.2}
              strokeLinejoin="round"
            />
          </g>
        </CutFigure>

        <CutFigure parts={JULIET} cuts={JULIET_CUTS} tone="paper" halo={2.2}>
          {/* her dark hair, loose down her back, over the paper */}
          <path d={JULIET_HAIR} transform={JULIET_HEAD} fill={INK} />
          <path d={JULIET_STRANDS} transform={JULIET_HEAD} fill={PAPER} />
          <path d={EYE} transform={JULIET_HEAD} fill={INK} />
          <path
            d={gouge(4.6, -7.4, 10.8, -8.2, 0.6, -0.4) + gouge(9.8, 10, 12.4, 9.8, 0.5)}
            transform={JULIET_HEAD}
            fill={INK}
          />
          <path d={JULIET_HANDS.cut} transform={JULIET_HANDS.t} fill={INK} />
        </CutFigure>
      </g>
    </>
  )
}

export const dawnAndAFathersRage: LinocutArt = { width: W, height: H, Draw: DawnAndAFathersRage }
