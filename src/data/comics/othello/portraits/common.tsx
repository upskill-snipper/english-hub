import { INK, PAPER } from '@/components/comics/linocut/palette'
import {
  arc,
  between,
  deg,
  gouge,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import { inside } from '../../jekyll-and-hyde/portraits/common'
import {
  ruffBand,
  spline,
  type Digit,
  type SP,
} from '../../the-merchant-of-venice/portraits/common'

/**
 * What the Othello portraits share.
 *
 * The block, the cut ground behind a sitter, the paper rule, the outline and
 * placing helpers, the hand with its fingers kept apart, the garment folds,
 * the ruff, the ear, and the man's and the woman's heads are the Shakespeare
 * portraits' own, re-exported here through
 * ../../the-merchant-of-venice/portraits/common.tsx rather than copied: The
 * Merchant of Venice is set in the same city and is drawn in the same dress,
 * and a second copy of a helper is a copy that drifts. `EarCut`, `once` and
 * `turn` are the Julius Caesar portraits' (../../julius-caesar/portraits/
 * common.tsx) and `inside` the Jekyll and Hyde portraits'. Only what this play
 * needs beyond them is defined below.
 *
 * THE LOOK OF EACH PERSON is the figure kit's (../panels/people.tsx), whose
 * docblock gives the lines of the play for it, so a student meets the same
 * people in the gallery as in the story: Othello bareheaded and clean-shaven,
 * his hair close and dark, in a general's long coat girdled with a sash and
 * the small ruff; Iago clean-shaven in a close dark cap with a paper band, a
 * baldric across his chest; Cassio bareheaded, his dark hair curling, with a
 * short neat dark beard; Roderigo beardless in a flat bonnet with the one
 * feather in the play, his purse at his girdle; Brabantio old, with a full
 * white beard, bareheaded on the night he is woken; Desdemona with her dark
 * hair dressed up in a knot and a band of lace at her neck; Emilia in a dark
 * linen coif; Bianca with her hair bound up in a kerchief; Lodovico in a flat
 * bonnet without a feather, with a short dark beard and a long cloak. Every
 * man but Brabantio wears the kit's small ruff (manRuff).
 *
 * OTHELLO IS DRAWN AS A BLACK MAN, as the play makes him: "Haply, for I am
 * black" (3.3), in his own words. In a linocut the block is ink and light is
 * what the artist cuts away, so a dark face is cut the way the print cuts
 * anything dark, and the way the kit cuts his: the face is left in ink, and
 * the light that falls on it is cut in paper (DarkHead below). The head is
 * every man's head in these portraits, MAN_HEAD, cut no differently: the same
 * brow, the same nose, the same mouth and chin as Cassio's or Lodovico's.
 * Nothing in the outline is changed to mark him out. The lips themselves are
 * never cut in paper or enlarged, because a pale or swollen mouth on a dark
 * face is the mark of the old caricature and the print never draws it; one
 * fine line where they part is cut, as the kit cuts it, and the rest of the
 * mouth is the profile's own line. He is drawn with exactly the care and the
 * dignity of every other sitter: head up, eye level, mouth closed. His close
 * curling hair is small cuts of paper in the ink (`curls`), so it reads as
 * hair without a line round it, and its edge against the ground is a row of
 * small rounds (`bumps`). His years ("I am declin'd Into the vale of years",
 * 3.3) are the lines at the corner of his eye; the kit gives his hair no grey.
 *
 * THE INSULTS ARE NEVER QUOTED. Iago, Roderigo and Brabantio call Othello
 * and Desdemona names. None of those words is a marker, a passage, a note or
 * an alt text here, and no animal stands for anyone.
 *
 * THE DRESS IS PLAIN ON PURPOSE: the ordinary dress of Venice in the 1570s,
 * the years of the Turkish war for Cyprus, as the kit draws it. None of it
 * comes from a film, television or stage production. The markers on each
 * portrait point only at what the play does say, and where it says nothing
 * of someone's looks the card's small print says so.
 *
 * RED. Never on a mouth or a chin, and no marker's line crosses a mouth: a
 * marker for a smile or a beard reaches its feature from below and behind.
 * A blush is laid flat on the cheek (Desdemona's), never cut as strokes,
 * which read as scratches.
 *
 * GROUND KEYS. portraitGround caches each ground by its key in a module that
 * every text's portraits share, and The Merchant of Venice has its own
 * Venetians: every key here starts "othello-".
 *
 * Every figure is drawn facing right in its own 0..240 by 0..332 frame (a
 * figure drawn to the waist runs a little past its foot) and placed with
 * `placing`; one that faces left is flipped.
 */

export {
  Buttons,
  capsule,
  ear,
  folds,
  Hand,
  handPoint,
  hatch,
  lerp2,
  locks,
  MAN_CHEEK,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  MAN_HEAD_OPEN,
  MAN_MOUTH,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  NeckShadow,
  neckShade,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  quad2,
  ruffBand,
  spline,
  strands,
  WOMAN_EAR,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
  type Digit,
  type SP,
} from '../../the-merchant-of-venice/portraits/common'
export { EarCut, once, turn } from '../../julius-caesar/portraits/common'
export { inside }

/** The landmarks of an outline, as a polygon for testing whether a point is inside it. */
export const poly = (pts: SP[]): Pt[] => pts.map(([x, y]): Pt => [x, y])

/**
 * Close-curling hair cut as small open rounds of paper scattered through a
 * shape: each an arc of a little circle, turned this way and that, so the
 * mass reads as tight curls and never as a pattern. `light(x, y)` (0 to 1)
 * thins them where the light does not reach. Stroke the result with PAPER.
 */
export function curls(
  seed: number,
  shape: Pt[],
  count: number,
  size: [number, number],
  light: (x: number, y: number) => number = () => 1,
): string {
  const r = rng(seed)
  const xs = shape.map((p) => p[0])
  const ys = shape.map((p) => p[1])
  const [x0, x1] = [Math.min(...xs), Math.max(...xs)]
  const [y0, y1] = [Math.min(...ys), Math.max(...ys)]
  let d = ''
  for (let i = 0, tries = 0; i < count && tries < count * 30; tries++) {
    const x = between(r, x0, x1)
    const y = between(r, y0, y1)
    if (!inside(shape, x, y)) continue
    if (r() > 0.25 + light(x, y) * 0.75) continue
    const rad = between(r, size[0], size[1])
    const a0 = between(r, 0, 360)
    d += arc(x, y, rad, deg(a0), deg(a0 + between(r, 150, 250)))
    i++
  }
  return d
}

/**
 * Small rounds along an edge, every `step` units, each of radius about `r`:
 * the outline of close curling hair against the ground. Fill with INK after
 * the figure's paper halo, and give them the same halo.
 */
export function bumps(seed: number, pts: Pt[], step: number, r: number): string {
  const g = rng(seed)
  let d = ''
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, ay] = pts[i]
    const [bx, by] = pts[i + 1]
    const L = Math.hypot(bx - ax, by - ay)
    const k = Math.max(1, Math.round(L / step))
    for (let j = 0; j < k; j++) {
      const t = (j + between(g, 0.2, 0.8)) / k
      const x = ax + (bx - ax) * t
      const y = ay + (by - ay) * t
      const rr = r * between(g, 0.8, 1.2)
      d += `M${n(x - rr)} ${n(y)}a${n(rr)} ${n(rr)} 0 1 0 ${n(rr * 2)} 0a${n(rr)} ${n(rr)} 0 1 0 ${n(-rr * 2)} 0Z`
    }
  }
  return d
}

// ── Othello's head ──────────────────────────────────────────────────────────
//
// MAN_HEAD, every man's head, in its 0..240 by 0..332 frame: the eye near
// (155, 100), the ear near (104, 124), the nose's tip at (179, 130), the
// chin at (172, 170), the foot of the neck at y 230. The figure kit
// (../panels/people.tsx) gives him no beard and no hat, and his hair close
// and dark: so does his portrait.

/**
 * His hair, cut close to the head: from the hairline at the top of the brow,
 * over the crown, down the back of the head to the nape, behind and above the
 * ear, and down in front of it to the level of the ear's lobe.
 */
export const OTHELLO_HAIR_PTS: SP[] = [
  [152, 47, 1],
  [145, 40],
  [128, 33.5],
  [106, 32.5],
  [82, 40],
  [60, 56],
  [46, 80],
  [39.5, 110],
  [38.5, 142],
  [43, 170],
  [53, 192, 1],
  [69, 193, 1],
  [79, 176],
  [89, 156],
  [93.5, 138],
  [94.5, 118],
  [99, 105],
  [110, 99],
  [121, 99, 1],
  [124, 110],
  [125, 121, 1],
  [129.5, 107],
  [133, 91],
  [137.5, 76],
  [144, 61],
]
export const OTHELLO_HAIR = spline(OTHELLO_HAIR_PTS)
/** The outer edge of the hair against the ground, for its row of small rounds. */
const HAIR_EDGE: Pt[] = [
  [151, 46],
  [145, 39.5],
  [128, 33],
  [106, 32],
  [82, 39.5],
  [60, 55.5],
  [46, 79.5],
  [39.5, 110],
  [38.5, 142],
  [43, 170],
  [52, 190],
]
/**
 * The hairline, cut as one line of paper where his hair meets his brow and
 * his temple and runs down in front of the ear, as the kit's
 * OTHELLO_HAIRLINE cuts it.
 */
export const OTHELLO_HAIRLINE =
  'M152.6 48C146.6 55.6 140.4 66.4 136.4 78.4C133.6 87.4 131.6 96.6 130.4 105.4C129.2 112 127.4 117.4 125.2 121.6'

/** Where his features are, for markers: the eye, the cheekbone, the lines at the eye's corner. */
export const OTHELLO_EYE: Pt = [155.5, 100.5]
export const OTHELLO_CHEEK: Pt = [150, 121]
export const OTHELLO_AGE: Pt = [140, 101]

/**
 * The front of MAN_HEAD, the profile the light falls on, as (y, x) pairs
 * from the top of the brow to the foot of the throat: the light on the face
 * is cut back from this line.
 */
const PROFILE: Pt[] = [
  [39, 140],
  [45, 150],
  [52, 158],
  [60, 162],
  [70, 165],
  [80, 167],
  [88, 168],
  [93, 166.5],
  [98, 164.5],
  [104, 167.5],
  [111, 171],
  [118, 174.5],
  [124, 177.5],
  [130, 179],
  [134, 175],
  [136, 168],
  [140, 170.5],
  [144.5, 173],
  [148, 169.8],
  [152, 172.2],
  [157, 168.8],
  [162, 171],
  [167, 172],
  [172, 172],
  [177, 171],
  [182, 166],
  [186, 161],
  [190, 153],
  [193, 147],
  [197, 140],
  [200, 137],
  [207, 134],
  [214, 132],
  [230, 132],
]
function frontAt(y: number): number {
  for (let i = 0; i < PROFILE.length - 1; i++) {
    const [y0, x0] = PROFILE[i]
    const [y1, x1] = PROFILE[i + 1]
    if (y >= y0 && y <= y1) return x0 + ((x1 - x0) * (y - y0)) / (y1 - y0 || 1)
  }
  return PROFILE[PROFILE.length - 1][1]
}

/** No light is cut over the eye, the lips, the nostril or the ear: each is cut on its own. */
function shut(x: number, y: number): boolean {
  const eye = ((x - 154) / 12) ** 2 + ((y - 99.6) / 7.6) ** 2 < 1
  const lips = x > 158 && y > 137 && y < 159
  const nostril = ((x - 171) / 5.4) ** 2 + ((y - 124) / 6.6) ** 2 < 1
  const ear = ((x - 104) / 12.5) ** 2 + ((y - 124) / 22.5) ** 2 < 1
  return eye || lips || nostril || ear
}

type DarkMarks = { hair: string; hairEdge: string; light: string; cheek: string }

const darkBySeed = new Map<number, DarkMarks>()
function darkMarks(seed: number): DarkMarks {
  const hit = darkBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)
  // Light from ahead of him, the right: the front of the head is lit, the back
  // of the head and the nape are not.
  const lit = (x: number) => Math.max(0, Math.min(1, (x - 40) / 130))
  const hair = curls(seed + 1, poly(OTHELLO_HAIR_PTS), 520, [0.9, 1.35], lit)
  const hairEdge = bumps(seed + 2, HAIR_EDGE, 3.2, 1.6)

  // THE LIGHT ON THE FACE. Lines cut back from the profile and following it,
  // as contours follow a form: the first, just inside the edge, the widest,
  // where the light strikes, and each further back thinner and more broken,
  // until the face turns from the light into the ink. So the brow, the nose,
  // the cheek, the chin and the throat stand out of the ink in their own
  // shapes, the grain of the face runs another way from the ground's, and the
  // face is modelled, never a flat silhouette.
  let light = ''
  const contours: [number, number, number][] = [
    // [how far back from the profile, the cut's width, how much of it is cut]
    [2.4, 2.6, 1],
    [5.8, 2.2, 0.95],
    [9.6, 1.8, 0.85],
    [13.8, 1.45, 0.7],
    [18.5, 1.15, 0.5],
    [24, 0.9, 0.32],
  ]
  // Each contour is cut in runs, and a run never crosses the mouth or jumps
  // where the profile does (under the nose, at the lips): a cut that bridged
  // either would lie across the face like a bar, and over the mouth it would
  // read as teeth.
  const mouthBand = (y: number) => y > 133 && y < 162
  for (const [back, w, keep] of contours) {
    const runs: Pt[][] = [[]]
    let prev: Pt | null = null
    for (let y = 50 + back * 0.3; y < 186; y += 1.5) {
      const x = frontAt(y) - back
      const ok = !shut(x, y) && !(mouthBand(y) && x > 148)
      const jump = prev !== null && Math.abs(x - prev[0]) > 1.6
      if (!ok || jump) {
        if (runs[runs.length - 1].length) runs.push([])
      }
      if (ok) runs[runs.length - 1].push([x, y])
      prev = [x, y]
    }
    for (const run of runs) {
      let i = 0
      while (i < run.length - 3) {
        const k = Math.round(between(r, 6, 12))
        const part = run.slice(i, i + k + 1)
        // a stub shorter than four steps reads as a scratch, not as light
        if (part.length > 4 && r() < keep) light += ribbon(part, w * between(r, 0.8, 1.1), 0.7)
        i += k + Math.round(between(r, 1, 3))
      }
    }
  }
  // The front of the throat, lit, under the jaw and down to the collar.
  for (const [back, w] of [
    [2.4, 2.2],
    [6, 1.7],
    [10, 1.3],
    [14.5, 0.9],
  ]) {
    const pts: Pt[] = []
    for (let y = 199 + back * 0.4; y < 228; y += 1.5) pts.push([frontAt(y) - back, y])
    let i = 0
    while (i < pts.length - 2) {
      const k = Math.round(between(r, 5, 9))
      const run = pts.slice(i, i + k + 1)
      if (run.length > 2) light += ribbon(run, w * between(r, 0.8, 1.1), 0.7)
      i += k + Math.round(between(r, 1, 3))
    }
  }
  // The cheekbone, under the eye: broken arcs following its round.
  let cheek = ''
  for (let rad = 14; rad < 27; rad += 3.2) {
    let a = deg(58 + between(r, 0, 8))
    while (a < deg(104)) {
      const e = Math.min(a + between(r, 6, 13) / rad, deg(110))
      cheek += arc(148, 101, rad, a, e)
      a = e + between(r, 2, 4) / rad
    }
  }
  const m = { hair, hairEdge, light, cheek }
  darkBySeed.set(seed, m)
  return m
}

/**
 * OTHELLO'S HEAD, facing right in the 0..240 by 0..332 frame: MAN_HEAD in
 * ink, its outline and the edge of his hair lifted off the ground by a paper
 * halo, and the light cut into it in paper: contours cut back from the
 * profile and following it, which model the brow, the nose, the cheek, the
 * chin and the throat; broken arcs on the cheekbone; the ridge of the brow;
 * the white of the eye round a dark iris; the lines at the corner of the eye;
 * one fine line where the lips part; the ear; and the hairline, with small
 * curls cut in the hair behind it. No light is cut on the lips themselves,
 * which keep the profile's own line. Draw it over the body; place it with a
 * transform on a parent group.
 */
export function DarkHead({
  uid,
  seed,
  head,
  ear,
  halo = 1.8,
}: {
  uid: string
  seed: number
  /** The head's outline: MAN_HEAD. */
  head: string
  /** MAN_EAR. */
  ear: { outline: string; curl: string }
  halo?: number
}) {
  const m = darkMarks(seed)
  const clip = `${uid}-oth-head-${seed}`
  const hairClip = `${uid}-oth-hair-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={head} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={OTHELLO_HAIR} />
          <path d={m.hairEdge} />
        </clipPath>
      </defs>
      {/* the paper halo round head and hair, then both in ink */}
      <g fill={PAPER} stroke={PAPER} strokeWidth={halo * 2} strokeLinejoin="round">
        <path d={head} />
        <path d={OTHELLO_HAIR} />
        <path d={m.hairEdge} />
      </g>
      <g fill={INK}>
        <path d={head} />
        <path d={OTHELLO_HAIR} />
        <path d={m.hairEdge} />
      </g>
      {/* the light on the face, cut in paper and kept off the hair */}
      <g clipPath={`url(#${clip})`}>
        <path d={m.light} fill={PAPER} />
        <path d={m.cheek} fill="none" stroke={PAPER} strokeWidth={1} strokeLinecap="round" />
        <path d={OTHELLO_HAIR} fill={INK} />
      </g>
      <g fill="none" stroke={PAPER} strokeLinecap="round" strokeLinejoin="round">
        {/* the ridge of the brow over the eye */}
        <path d="M145.4 85.6Q155.6 82.6 166.2 85.4" strokeWidth={1.5} />
        {/* the wing of the nostril, and the fold down from it */}
        <path d="M172.5 128.2C168.8 125.6 168.8 120.4 173.6 119.4" strokeWidth={1.2} />
        <path d="M165.4 125.4Q160.6 133 161.8 142.6" strokeWidth={1} />
        {/* the parting of the lips: one fine line, never the lips themselves */}
        <path d="M169.4 148.3L163.6 148.8" strokeWidth={0.9} />
        {/* the eyelid's crease, the lower lid */}
        <path d="M146.6 94.2Q154.4 90.6 162.4 94.6" strokeWidth={1.1} />
        <path d="M148.6 104.8Q155 107 160.8 103.8" strokeWidth={0.9} />
        {/* the lines at the corner of the eye: "declin'd Into the vale of years" */}
        <path
          d="M145 98.8L135.6 94.6M145.2 102.4L135.4 103.6M146 105.8L138.4 111.4"
          strokeWidth={1.15}
        />
        {/* the hairline, and the ear cut in paper lines */}
        <path d={OTHELLO_HAIRLINE} strokeWidth={1.1} />
        <path d={ear.outline} strokeWidth={1.4} />
        <path d={ear.curl} strokeWidth={1.3} />
      </g>
      {/* the eye: its white, the dark of it, and the light in it */}
      <path
        d="M147.4 100.2Q154 96 161.6 97.6Q163.2 100.2 161.4 102.8Q154.4 104.2 147.4 100.2Z"
        fill={PAPER}
      />
      <circle cx={OTHELLO_EYE[0]} cy={OTHELLO_EYE[1]} r={3} fill={INK} />
      <circle cx={156.4} cy={99.6} r={0.75} fill={PAPER} />
      {/* his close hair, curl by curl */}
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill="none" stroke={PAPER} strokeWidth={0.8} strokeLinecap="round" />
      </g>
    </g>
  )
}

/** The outline of his hair and its edge, for the ink knockout under the figure. */
export function darkHeadOutline(seed: number): string[] {
  const m = darkMarks(seed)
  return [OTHELLO_HAIR, m.hairEdge]
}

// ── Dress ───────────────────────────────────────────────────────────────────

/** Light in a dark garment: lines of paper gouges, for folds and seams. */
export function seams(seed: number, lines: [Pt, Pt][], w: [number, number]): string {
  const r = rng(seed)
  let d = ''
  for (const [a, b] of lines)
    d += gouge(a[0], a[1], b[0], b[1], between(r, w[0], w[1]), between(r, -1.2, 1.2))
  return d
}

/** Shoulders and chest over the frame's foot, in a doublet or a jerkin: every man's body. */
export const DOUBLET_W = spline([
  [-14, 336, 1],
  [-8, 294],
  [8, 258],
  [38, 232],
  [70, 222],
  [100, 226],
  [130, 228],
  [150, 224],
  [180, 234],
  [208, 260],
  [226, 298],
  [236, 336, 1],
])

/**
 * The kit's small ruff at the neck of every man but the old senators, at the
 * size of a portrait: from the nape round to the throat, under the jaw.
 */
export function manRuff() {
  return ruffBand(62, 150, 207, 223, 6.5, 0.05)
}

/**
 * OTHELLO'S COAT, as the kit cuts it: a general's long coat over his doublet,
 * girdled with a sash, in ink with its front edge and folds cut in paper. To
 * the waist and a little below, in the 0..240 by 0..332 frame: the shoulders
 * round the foot of the neck, the chest, and the waist at y 292 to 310,
 * where the sash is tied.
 */
export const OTHELLO_COAT = spline([
  [-8, 344, 1],
  [6, 304],
  [10, 272],
  [22, 245],
  [50, 227],
  [80, 221],
  [110, 225],
  [140, 223],
  [168, 231],
  [193, 252],
  [205, 278],
  [204, 300],
  [216, 344, 1],
])
/** The sash round the waist: a band of cloth cut in paper, tied at the front. */
export const OTHELLO_SASH = spline([
  [4, 290, 1],
  [70, 293],
  [140, 292],
  [205, 288, 1],
  [206, 307, 1],
  [140, 311],
  [70, 312],
  [6, 309, 1],
])
/** Its knot at his side, near the front, and the two ends hanging from it. */
export const OTHELLO_SASH_KNOT = spline([
  [168, 291],
  [181, 289],
  [186, 299],
  [180, 309],
  [167, 309],
  [163, 299],
])
export const OTHELLO_SASH_ENDS =
  spline([
    [166, 306, 1],
    [161, 322],
    [158, 344, 1],
    [170, 344, 1],
    [172, 322],
    [176, 306, 1],
  ]) +
  spline([
    [176, 306, 1],
    [181, 324],
    [186, 344, 1],
    [196, 344, 1],
    [191, 322],
    [184, 305, 1],
  ])
/** Where the sash is, for a marker. */
export const OTHELLO_SASH_AT: Pt = [120, 301]

/**
 * A flat bonnet, tilted forward over the brow: the kit's RODERIGO_BONNET, which
 * the kit gives Lodovico too, without Roderigo's feather.
 */
export const FLAT_BONNET = spline([
  [44, 88, 1],
  [37, 68],
  [46, 47],
  [70, 29],
  [104, 18],
  [140, 17],
  [170, 26],
  [186, 40],
  [184, 54, 1],
  [152, 60],
  [112, 68],
  [72, 79],
])
/** Its band, along its lower edge, cut in paper. */
export const FLAT_BONNET_BAND = ribbon(
  [
    [46, 84],
    [72, 77],
    [104, 70],
    [136, 64],
    [164, 58.5],
    [183, 55],
  ],
  6.6,
  0.2,
)
/** Dark hair below a cap or bonnet, at the back of the head to the nape: the kit's NAPE_HAIR. */
export const HAT_NAPE = spline([
  [46, 86, 1],
  [41.5, 112],
  [43.5, 140],
  [51, 164],
  [61, 178, 1],
  [73, 174, 1],
  [81, 152],
  [89, 128],
  [93, 107],
  [96, 82, 1],
])

// ── Hands ───────────────────────────────────────────────────────────────────
//
// Every hand is drawn with the Shakespeare portraits' Hand: paper, with an
// ink rim round every digit, so the fingers stay apart at card size and never
// merge into a fist. Each is drawn in its own frame, the wrist at the origin,
// pointing along +x, and placed with a transform.

/**
 * A hand holding something light by its corner: the back of the hand
 * towards us, the corner between the tips of the thumb and the forefinger,
 * which bends up at its middle joint to meet the thumb and leaves a gap of
 * shadow between them, so the two read as a pinch and not as two fingers
 * laid together and pointing; the other three fingers loosely curled below
 * and cut apart. PINCH_AT is the point the thing is held by. Desdemona and
 * Bianca hold the handkerchief so.
 */
export const PINCH_PALM = spline([
  [0, -8],
  [9, -10.5],
  [17, -9],
  [20.5, -2],
  [19.5, 6],
  [11, 10],
  [0, 8.5],
])
export const PINCH_DIGITS: Digit[] = [
  { from: [14, 7], to: [21, 13.5], w: 5.2 },
  { from: [17, 3.5], to: [25.5, 10.5], w: 5.8 },
  { from: [19, -0.5], to: [28.5, 6], w: 6.2 },
  { from: [18.5, -4.5], to: [28.5, -3.5], w: 6.2 },
  { from: [28.5, -3.5], to: [34, -8.4], w: 5.6 },
  { from: [5, -10], to: [21, -15.6], w: 7 },
  { from: [21, -15.6], to: [33, -11.8], w: 6.2 },
]
export const PINCH_LINES =
  'M16 -5L17.5 6M28.4 -6.4L28.6 -0.6M21.4 -18.6L21 -12.6M33.8 -14.2L35.4 -13.4'
export const PINCH_AT: Pt = [35, -10.4]

/**
 * A hand closed round something upright, a staff or the stem of a
 * candlestick: the back of the hand towards us, the four fingers wrapped
 * across it one above another, each cut apart from the next, the thumb over
 * the first of them, as the Tempest portraits close Prospero's hand round
 * his staff. The thing held runs up and down through GRIP_AT.
 */
export const GRIP_PALM = spline([
  [-2, -13],
  [8, -16],
  [17, -13],
  [19, 0],
  [17, 14],
  [7, 17],
  [-2, 13],
])
export const GRIP_DIGITS: Digit[] = [
  { from: [12, 13], to: [30, 13.5], w: 7 },
  { from: [12, 5.5], to: [32, 6], w: 7.4 },
  { from: [12, -2], to: [32.5, -2], w: 7.4 },
  { from: [12, -9.5], to: [31, -10], w: 7.2 },
  { from: [3, -12], to: [22, -19], w: 8 },
]
export const GRIP_LINES = 'M14 -12.5L14 15M29.6 13.4L31.2 13.4M31.4 6L33 6M31.8 -2L33.4 -2'
/** Where the staff passes through the closed fingers. */
export const GRIP_AT: Pt = [26, 0]
