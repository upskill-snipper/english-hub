import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  ribbon,
  rng,
  type Pt,
  type Rng,
  wisps,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { PH, portraitGround, PortraitRule, PW } from './common'

/**
 * The three witches as Banquo first sees them on the heath (1.3), and as he
 * describes them, which is all the play gives:
 *
 *   "What are these, / So wither'd, and so wild in their attire, / That look
 *   not like the inhabitants o' th' earth, / And yet are on't? ... You seem to
 *   understand me, / By each at once her choppy finger laying / Upon her skinny
 *   lips. You should be women, / And yet your beards forbid me to interpret /
 *   That you are so."
 *
 * (Gutenberg's text, which the guide prints: see the note above the extracts
 * in src/data/study-guides/macbeth.ts.)
 *
 * So: three old women, their faces cut with deep lines ("wither'd"), in
 * hooded rags torn at every edge ("wild in their attire"), each laying a
 * chapped finger on thin lips at the same moment, and each with a straggling
 * beard. One faces us, because the gesture reads best face on; the other two
 * stand behind her in profile, turned in towards her. Nothing else is added:
 * no hooked noses, warts, hats or broomsticks, which come from later pictures
 * of witches, not from this play. The fog is from their own "Hover through
 * the fog and filthy air" (1.1).
 *
 * There is no spot colour in this plate. Banquo's description names no colour,
 * and the red is kept for what a text gives it.
 */

/**
 * A torn edge: a polyline broken into rags of uneven width and length, some
 * hanging a long way and some not at all, to its right-hand side (negative
 * `depth` for the left). Returned as path data without the opening M, so
 * edges can be joined.
 */
function tattered(r: Rng, pts: Pt[], depth: number, width: [number, number] = [5, 13]): string {
  let d = ''
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i]
    const [x1, y1] = pts[i + 1]
    const L = Math.hypot(x1 - x0, y1 - y0) || 1
    const nx = -(y1 - y0) / L
    const ny = (x1 - x0) / L
    const on = (t: number, out: number) =>
      `L${n(x0 + (x1 - x0) * t + nx * out)} ${n(y0 + (y1 - y0) * t + ny * out)}`
    let t = 0
    while (t < 1) {
      const step = between(r, width[0], width[1]) / L
      const t1 = Math.min(1, t + step)
      if (r() < 0.72) {
        // A rag: out to its torn end, which is ragged itself, and back.
        const deep = between(r, 0.25, 1) * depth
        d += on(t, 0)
        d += on(t + (t1 - t) * between(r, 0.1, 0.3), deep * between(r, 0.8, 1.1))
        d += on(t + (t1 - t) * 0.55, deep * between(r, 0.55, 0.85))
        d += on(t + (t1 - t) * between(r, 0.7, 0.9), deep * between(r, 0.8, 1.2))
      } else d += on(t, between(r, 0, 0.15) * depth)
      t = t1
    }
  }
  const [xe, ye] = pts[pts.length - 1]
  return d + `L${n(xe)} ${n(ye)}`
}

// ── The witch in front, facing us, drawn about her face's centre ──────────

const FACE_F =
  'M0 -54C20 -54 32 -42 34 -20C36 0 34 18 26 32C18 44 10 52 0 55C-10 52 -18 44 -26 32C-34 18 -36 0 -34 -20C-32 -42 -20 -54 0 -54Z'
/** The inside of the hood round her face, and down to her chest. */
const OPENING_F: Pt[] = [
  [-4, -66],
  [-28, -60],
  [-41, -38],
  [-45, -6],
  [-43, 30],
  [-36, 62],
  [-22, 96],
  [22, 96],
  [38, 60],
  [45, 28],
  [46, -6],
  [42, -38],
  [28, -60],
  [4, -66],
]
const HOOD_F: Pt[] = [
  [0, -94],
  [-32, -88],
  [-54, -64],
  [-63, -20],
  [-68, 30],
  [-84, 80],
  [-106, 130],
  [-116, 180],
]
/** Her raised hand: the forefinger up across her lips, the fist below and to one side. */
const INDEX_F = 'M-2.9 21C-2.9 16.5 2.9 16.5 2.9 21L3.2 46L-3.2 46Z'
/** The back of the hand and wrist behind the curled fingers. */
const PALM_F = 'M-6 42L14 40L18 66C16 74 10 80 2 80L-6 80Z'
/** The three curled fingers, knuckles towards us, stacked below the forefinger. */
const CURLED_F: [number, number, number, number][] = [
  [-4.5, 44, 27, 8.6],
  [-4.5, 52.2, 26, 8.6],
  [-4, 60.4, 22.5, 8.2],
]
const HAND_F_LINES =
  'M-2.6 28Q0 26.5 2.7 28M-2.8 36Q0 34.5 2.9 36M16 46.5V50.5M15 54.7V58.7M12.5 63V67'
const SLEEVE_F: Pt[] = [
  [-10, 150],
  [-10, 110],
  [-8, 76],
  [20, 70],
  [30, 100],
  [36, 150],
]

type FrontMarks = {
  hood: string
  opening: string
  sleeve: string
  folds: string
  deep: string
  fine: string
  hair: string
  beard: string
  bristles: string
  chaps: string
}

let front: FrontMarks | undefined
function frontMarks(): FrontMarks {
  if (front) return front
  const r = rng(113)
  const mirror = (pts: Pt[]): Pt[] => [...pts].reverse().map(([x, y]) => [-x, y])
  const left = tattered(r, HOOD_F, -9)
  const right = tattered(r, mirror(HOOD_F), -9)
  const hood = `M${HOOD_F[0][0]} ${HOOD_F[0][1]}${left}L-126 240L126 240L116 180${right}Z`
  const opening = `M${OPENING_F[0][0]} ${OPENING_F[0][1]}${tattered(r, OPENING_F, 5, [4, 9])}Z`
  const sleeve = `M${SLEEVE_F[0][0]} ${SLEEVE_F[0][1]}${tattered(r, SLEEVE_F, -6)}Z`

  let folds = ''
  for (let i = 0; i < 14; i++) {
    const side = i % 2 ? 1 : -1
    const x = side * between(r, 52, 110)
    const y = between(r, -60, 150)
    folds += gouge(
      x,
      y,
      x + side * between(r, 4, 18),
      y + between(r, 40, 90),
      between(r, 0.9, 2.1),
      between(r, -3, 3),
    )
  }

  // "So wither'd": deep lines first, then the fine ones between them.
  let deep = ''
  for (const s of [-1, 1]) {
    deep += `M${n(s * 10)} ${n(10)}C${n(s * 14)} ${n(20)} ${n(s * 16)} ${n(30)} ${n(s * 17)} ${n(40)}` // nose past the mouth
    deep += `M${n(s * 17)} ${n(34)}C${n(s * 20)} ${n(40)} ${n(s * 20)} ${n(44)} ${n(s * 16)} ${n(48)}` // jowl
  }
  for (let i = 0; i < 3; i++) {
    const y = -42 + i * 5.5
    deep += `M${n(-20 + i * 2)} ${n(y + 1)}Q${n(-10)} ${n(y - 2)} 0 ${n(y + 0.5)}Q${n(10)} ${n(y - 2.5)} ${n(20 - i * 2)} ${n(y + 1)}`
  }

  let fine = ''
  for (const s of [-1, 1]) {
    // crow's feet
    for (let i = 0; i < 4; i++)
      fine += `M${n(s * 23)} ${n(-13 + i * 2)}L${n(s * (30 + between(r, 0, 3)))} ${n(-17 + i * 4)}`
    // bags under the eyes
    fine += `M${n(s * 20)} ${n(-6)}Q${n(s * 14)} ${n(-1)} ${n(s * 7)} ${n(-5)}`
    fine += `M${n(s * 21)} ${n(-2)}Q${n(s * 14)} ${n(4)} ${n(s * 6)} ${n(-1)}`
    // the hollow cheeks
    for (let rad = 7; rad < 15; rad += 2.8)
      fine += arcDashes(r, s * 19, 2, rad, deg(40), deg(140), [5, 12], [2, 4])
  }
  // "skinny lips": puckered lines round a thin mouth
  for (let i = -2; i <= 2; i++) {
    if (i === 0) continue
    fine += `M${n(i * 3)} ${n(29)}L${n(i * 3.3)} ${n(32)}`
  }
  // Long hair escaping the hood beside her cheeks: she is a woman, and old.
  let hair = ''
  for (const s of [-1, 1])
    for (let i = 0; i < 6; i++) {
      const x0 = s * (30 + i * 1.8 + between(r, -1, 1))
      const y0 = -48 + i * 4
      const pts: Pt[] = []
      for (let k = 0; k <= 10; k++) {
        const u = k / 10
        pts.push([x0 + s * (Math.sin(u * 3 + i) * 2 + u * 6), y0 + u * between(r, 80, 110)])
      }
      hair += ribbon(pts, between(r, 1.1, 1.8), 0.7)
    }

  // "your beards": a straggle from the chin and jaw, paper against the shadow.
  let beard = ''
  for (let i = 0; i < 16; i++) {
    const t = i / 15
    const x0 = -20 + t * 26 + between(r, -1.5, 1.5)
    const y0 = 36 + Math.sin(Math.PI * (t * 0.8 + 0.1)) * 14 + between(r, -1, 1)
    const len = between(r, 16, 34) * (0.6 + Math.sin(Math.PI * t) * 0.6)
    const pts: Pt[] = []
    for (let k = 0; k <= 7; k++) {
      const u = k / 7
      pts.push([x0 + Math.sin(u * 4 + i) * 1.6 - (x0 * u) / 6, y0 + u * len])
    }
    beard += ribbon(pts, between(r, 1.2, 2.1), 0.7)
  }
  let bristles = ''
  for (let i = 0; i < 14; i++) {
    const x = between(r, -18, 6)
    const y = between(r, 38, 50)
    bristles += `M${n(x)} ${n(y)}l${n(between(r, -1, 1))} ${n(between(r, 3, 5))}`
  }

  // "choppy": the chapped finger, small cuts across its skin.
  let chaps = ''
  for (let i = 0; i < 5; i++) {
    const y = 21 + i * 4.8 + between(r, -0.8, 0.8)
    chaps += `M${n(-1.8)} ${n(y)}l${n(between(r, 1.2, 2.6))} ${n(between(r, -0.8, 0.8))}`
  }

  front = { hood, opening, sleeve, folds, deep, fine, hair, beard, bristles, chaps }
  return front
}

/** The witch who faces us, centred on her face. */
export function WitchFacing() {
  const m = frontMarks()
  return (
    <g>
      <path d={m.hood} fill={INK} stroke={INK} strokeWidth={10} strokeLinejoin="round" />
      <path d={m.hood} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.folds} fill={PAPER} />
      <path d={m.opening} fill={INK} stroke={PAPER} strokeWidth={1.3} strokeLinejoin="round" />
      <path d={m.hair} fill={PAPER} />
      <path d={FACE_F} fill={PAPER} stroke={INK} strokeWidth={1.2} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={m.deep} strokeWidth={1.5} />
        <path d={m.fine} strokeWidth={LINE.hairline} />
        {/* heavy brows, deep-set eyes */}
        <path d="M-24 -21Q-15 -26 -6 -20.5M24 -21Q15 -26 6 -20.5" strokeWidth={2} />
        <path d="M-21 -12Q-14 -16.5 -7 -12M21 -12Q14 -16.5 7 -12" strokeWidth={1.8} />
        <path d="M-20 -9.5Q-14 -7.5 -8 -9.5M20 -9.5Q14 -7.5 8 -9.5" strokeWidth={1} />
        {/* the long nose, lit on one side */}
        <path d="M4 -16C5 -6 7 2 8 9" strokeWidth={1.3} />
        <path d="M-8 11Q-5 15.5 -1 13.5M1 13.5Q5 15.5 8 11" strokeWidth={1.5} />
        {/* the thin mouth, pressed shut */}
        <path d="M-11 26Q0 24.5 11 26" strokeWidth={1.9} />
        <path d={m.bristles} strokeWidth={1} />
      </g>
      <circle cx={-14} cy={-12.2} r={2} fill={INK} />
      <circle cx={14} cy={-12.2} r={2} fill={INK} />
      <path d={m.beard} fill={PAPER} />
      <path
        d={m.sleeve}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <g fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round">
        <path d={PALM_F} />
        {CURLED_F.map(([x, y, w, h]) => (
          <rect key={y} x={x} y={y} width={w} height={h} rx={h / 2} />
        ))}
        <path d={INDEX_F} />
      </g>
      <path d={HAND_F_LINES} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
      <path d={m.chaps} fill="none" stroke={INK} strokeWidth={0.8} strokeLinecap="round" />
    </g>
  )
}

// ── The two behind, in profile, facing right in their own frame ───────────

const FACE_P =
  'M138 58C150 60 158 68 162 78C164 84 165 89 164 94L161 100C166 110 172 119 178 129C180 133 178.5 137 174.5 137.5C171 138 168.5 139.5 167 142C166 145.5 166.5 148.5 164.5 151C163 153 163 155 165 157.5C170 162 172.5 170 170.5 178C167 186 157 190 145 190C137 192 131 196 127 204L118 206C112 190 108 170 108 150C108 118 120 80 138 58Z'
const HOOD_P: Pt[] = [
  [148, 48],
  [132, 32],
  [104, 28],
  [78, 36],
  [58, 58],
  [48, 96],
  [44, 150],
  [36, 210],
  [20, 270],
]
const OPENING_P: Pt[] = [
  [190, 330],
  [182, 300],
  [168, 250],
  [146, 222],
  [128, 206],
  [114, 184],
  [108, 150],
  [112, 110],
  [124, 78],
  [140, 56],
  [148, 48],
]
/** The finger up to the lips, rising from a ragged sleeve held under the chin. */
const HAND_P =
  'M163.5 151C162.5 146 165 142.5 167.5 143C170 143.5 170.5 147 170.4 151L170.5 170C176 169 183 171 186 176C188 181 186 186 180 188C174 190 167 189 165 184C164 178 164 168 163.8 160Z'
const SLEEVE_P: Pt[] = [
  [150, 260],
  [156, 220],
  [160, 186],
  [190, 180],
  [196, 214],
  [198, 260],
]

type ProfileMarks = {
  hood: string
  sleeve: string
  folds: string
  lines: string
  fine: string
  beard: string
}
const profileCache = new Map<number, ProfileMarks>()
function profileMarks(seed: number): ProfileMarks {
  const hit = profileCache.get(seed)
  if (hit) return hit
  const r = rng(seed)
  const hood = `M${HOOD_P[0][0]} ${HOOD_P[0][1]}${tattered(r, HOOD_P, -8)}L0 480L214 480L190 330${tattered(r, OPENING_P, -5, [4, 9])}Z`
  const sleeve = `M${SLEEVE_P[0][0]} ${SLEEVE_P[0][1]}${tattered(r, SLEEVE_P, -6)}Z`
  let folds = ''
  for (let i = 0; i < 6; i++) {
    const a = deg(between(r, 200, 280))
    folds += gouge(
      98 + Math.cos(a) * 44,
      120 + Math.sin(a) * 60,
      98 + Math.cos(a) * 64,
      120 + Math.sin(a) * 84,
      between(r, 1, 1.8),
      between(r, -2, 2),
    )
  }
  let lines =
    'M166 136C158 142 154 150 155 160C156 168 160 174 164 178M150 176C140 180 130 180 122 176'
  for (let i = 0; i < 4; i++) {
    const y = 70 + i * 5
    lines += `M${n(140 + i * 1.5)} ${n(y + 2)}Q${n(150 + i)} ${n(y - 2)} ${n(160 + i * 0.8)} ${n(y + 1)}`
  }
  let fine = 'M146 108Q153 112 160 108M145 112Q152 117 159 113'
  for (let i = 0; i < 4; i++)
    fine += `M144 ${n(100 + i * 2)}L${n(134 - between(r, 0, 4))} ${n(96 + i * 5)}`
  for (let rad = 10; rad < 28; rad += 3.4)
    fine += arcDashes(r, 140, 126, rad, deg(30), deg(165), [6, 16], [2, 5])
  let beard = ''
  for (let i = 0; i < 8; i++) {
    const x0 = 146 + i * 2.8 + between(r, -1, 1)
    const y0 = 186 + between(r, -1, 2)
    const len = between(r, 14, 30)
    const pts: Pt[] = []
    for (let k = 0; k <= 6; k++) {
      const u = k / 6
      pts.push([x0 - u * between(r, 3, 8) + Math.sin(u * 5 + i) * 1.4, y0 + u * len])
    }
    beard += ribbon(pts, between(r, 1.6, 2.6), 0.7)
  }
  const m = { hood, sleeve, folds, lines, fine, beard }
  profileCache.set(seed, m)
  return m
}

/** A witch in profile, facing right in a 0..220 by 0..330 frame. */
export function WitchInProfile({ seed }: { seed: number }) {
  const m = profileMarks(seed)
  return (
    <g>
      <path d={m.hood} fill={INK} stroke={INK} strokeWidth={12} strokeLinejoin="round" />
      <path d={m.hood} fill={INK} stroke={PAPER} strokeWidth={2.4} strokeLinejoin="round" />
      <path d={m.folds} fill={PAPER} />
      <path d={FACE_P} fill={PAPER} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={m.lines} strokeWidth={2} />
        <path d={m.fine} strokeWidth={1.2} />
        <path d="M169 131C165 128 166 123 171 123" strokeWidth={1.8} />
        <path d="M144 88Q152 85 162 90" strokeWidth={3.4} />
        <path d="M146 99Q152 95 160 99" strokeWidth={2.4} />
        <path d="M165.5 151.5L157 152.5" strokeWidth={2.2} />
      </g>
      <circle cx={154} cy={100.4} r={2.8} fill={INK} />
      <path d={m.beard} fill={PAPER} />
      <path d={m.sleeve} fill={INK} stroke={PAPER} strokeWidth={2} strokeLinejoin="round" />
      <path d={HAND_P} fill={PAPER} stroke={INK} strokeWidth={2.6} strokeLinejoin="round" />
      <path
        d="M166 176Q176 173 185 178M165 183Q174 181 184 185"
        fill="none"
        stroke={INK}
        strokeWidth={1.4}
      />
    </g>
  )
}

// ── The portrait ───────────────────────────────────────────────────────────

/** The two behind: [x, y, scale], the right-hand one flipped to face left. */
const BEHIND_LEFT: [number, number, number] = [-16, 8, 0.64]
const BEHIND_RIGHT: [number, number, number] = [348, 8, 0.64]
/** The centre of the front witch's face. */
const FRONT: [number, number] = [166, 150]

let cuts: { ground: string; fog: string } | undefined
function portraitCuts() {
  if (cuts) return cuts
  // A storm-lit sky, brightest high up behind the front witch's head.
  const ground = portraitGround('witches', 1611, (x, y) =>
    clamp(0.08 + 0.75 * Math.max(0, 1 - Math.hypot(x - 166, (y - 40) * 1.3) / 190) ** 1.4),
  )
  const fog = wisps(rng(1101), 5, { x0: -60, x1: PW + 40, y0: 272, y1: PH - 18 }, [6, 11])
  cuts = { ground, fog }
  return cuts
}

function WitchesPortrait({ uid }: ArtProps) {
  const c = portraitCuts()
  const fogClip = `${uid}-wt-fog`
  return (
    <>
      <defs>
        <clipPath id={fogClip}>
          <rect x={10} y={10} width={PW - 20} height={PH - 20} />
        </clipPath>
      </defs>
      <path d={c.ground} fill={PAPER} />
      <g transform={`translate(${BEHIND_LEFT[0]} ${BEHIND_LEFT[1]}) scale(${BEHIND_LEFT[2]})`}>
        <WitchInProfile seed={13} />
      </g>
      <g
        transform={`translate(${BEHIND_RIGHT[0]} ${BEHIND_RIGHT[1]}) scale(${-BEHIND_RIGHT[2]} ${BEHIND_RIGHT[2]})`}
      >
        <WitchInProfile seed={31} />
      </g>
      <g transform={`translate(${FRONT[0]} ${FRONT[1]})`}>
        <WitchFacing />
      </g>
      {/* "Hover through the fog and filthy air": fog rolling in at their feet */}
      <g clipPath={`url(#${fogClip})`}>
        <g className="lc-drift" style={timing({ delay: 0.2 })}>
          <path d={c.fog} fill={PAPER} />
        </g>
      </g>
      <PortraitRule />
    </>
  )
}

export const witchesPortrait: LinocutArt = { width: PW, height: PH, Draw: WitchesPortrait }

const at = (x: number, y: number): [number, number] => [FRONT[0] + x, FRONT[1] + y]

export const witches: Portrait = {
  name: 'The Witches',
  art: witchesPortrait,
  alt: 'A linocut portrait of the three witches on a dark, storm-lit heath with fog rolling in at their feet. One faces us in the middle; the other two stand behind her in profile, turned in towards her. All three are old women with deeply lined faces, wrapped in hooded rags torn at every edge, and each has a straggling beard. Each holds up a chapped hand and lays one finger across her thin lips. Four numbered red markers point to the witch in front: her lined face, her torn hood, the finger on her lips and her beard.',
  describedBy: [
    { phrase: "So wither'd", at: at(-60, -118), to: at(-22, -40) },
    { phrase: 'wild in their attire', at: at(-120, 60), to: at(-86, 70) },
    { phrase: 'her choppy finger laying', at: at(64, 2), to: at(4, 30) },
    // The beard shows only left of her hand, from about 40 to 75 below the
    // face's centre; 70 put the line's end below its tip, in the dark.
    { phrase: 'your beards forbid me to interpret', at: at(-66, 104), to: at(-13, 56) },
  ],
  where: 'Act 1, Scene 3',
  note: 'Banquo cannot tell what they are: women, but bearded; on the earth, but not like anything that lives there. The play keeps them that uncertain.',
  artNote:
    'Nothing is added to Banquo’s words: no hats, broomsticks or hooked noses, which come from later pictures of witches, not from the play.',
}
