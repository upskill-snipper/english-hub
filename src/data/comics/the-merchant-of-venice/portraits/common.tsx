import { INK, LINE } from '@/components/comics/linocut/palette'
import { arcDashes, between, deg, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import { ear, spline, type SP } from '../../much-ado-about-nothing/portraits/common'

/**
 * What The Merchant of Venice portraits share.
 *
 * The block, the cut ground behind a head, the paper rule, the outline and
 * placing helpers, the hand, the garment folds, the ruff and the ear are the
 * Romeo and Juliet and Much Ado About Nothing portraits' own, re-exported here
 * through ../../much-ado-about-nothing/portraits/common.tsx rather than
 * copied: the three plays were written within a few years of each other and
 * are drawn in the same dress, and a second copy of a helper is a copy that
 * drifts. Only what this play needs beyond them is defined below.
 *
 * ONE HEAD FOR EVERY MAN. The figure kit (../panels/people.tsx) gives every
 * man in the play the same head, Shylock's no different from Antonio's, and
 * these portraits keep that rule at their own size: every man is cut from
 * MAN_HEAD (or, talking, MAN_HEAD_OPEN), the same brow, the same ordinary
 * nose, the same ear, and is told from the others by what the play or the kit
 * gives him: a beard, grey hair, a cap, his age, what he is doing. Every
 * woman is cut from WOMAN_HEAD. So nothing in a face is drawn to mark a man
 * out by his faith or his colour, which is this play's first rule.
 *
 * THE LOOK OF EACH PERSON is the kit's, and its docblock gives the text for
 * it: Shylock bareheaded, grey-haired and grey-bearded in his gaberdine;
 * Antonio clean-shaven in a round cap with a turned-up brim and a merchant's
 * gown; Bassanio bareheaded, his dark hair swept back, in a doublet and short
 * cloak with a rapier; Gratiano in a small cap with a feather curling back;
 * Lorenzo in a flat bonnet tilted forward; Portia small, her hair pale and
 * falling at her temples, a band of lace at the neck of a rich gown; Nerissa
 * in a linen coif; Jessica with long dark hair loose down her back; Launcelet
 * in a close cap and a plain jerkin; the Prince of Morocco all in white, with
 * a plain circlet and a scimitar sheathed at his side. Tubal is not in the
 * kit: his portrait's docblock says how he is drawn. Men wear the kit's small
 * ruff at the neck.
 *
 * THE DRESS IS PLAIN ON PURPOSE. Shakespeare describes the looks of very few
 * people in this play, so nobody wears anything the text does not give them
 * beyond the ordinary dress of Venice as his first audience would have
 * pictured it, in the later 1590s. None of it comes from a film, television
 * or stage production. The markers on each portrait point only at what the
 * play does say.
 *
 * Every figure is drawn facing right in its own 0..240 by 0..332 frame and
 * placed with `placing`; one that faces left is flipped.
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
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  quad2,
  ruffBand,
  spline,
  strands,
  type Digit,
  type SP,
} from '../../much-ado-about-nothing/portraits/common'

// ── The man's head ──────────────────────────────────────────────────────────

/** Brow, nose and the space under it: the same on every man. */
const BROW_AND_NOSE: SP[] = [
  [64, 230],
  [57, 202],
  [49, 174],
  [43, 142],
  [44, 108],
  [55, 74],
  [78, 50],
  [110, 38],
  [140, 39],
  [158, 52],
  [165, 70],
  [168, 88],
  [164.5, 98, 1],
  [171, 111],
  [177.5, 124],
  [179, 130],
  [175, 134],
  [168, 135.5, 1],
]
/** The chin and jaw back to the nape, after the lips. */
const CHIN_AND_JAW: SP[] = [
  [172, 167],
  [171, 177],
  [161, 186],
  [147, 193],
  [137, 200],
  [132, 214],
  [132, 230],
]

/** A man's head in profile, facing right, the lips closed. */
export const MAN_HEAD = spline([
  ...BROW_AND_NOSE,
  [170.5, 140],
  [173, 144.5],
  [169.8, 148, 1],
  [172.2, 152],
  [168.8, 157, 1],
  ...CHIN_AND_JAW,
])
/**
 * The same head talking, the lips parted: the outline is cut back between
 * them, and MAN_MOUTH fills the gap with ink so it reads as an open mouth
 * whatever ground is behind it.
 */
export const MAN_HEAD_OPEN = spline([
  ...BROW_AND_NOSE,
  [170.5, 140],
  [173, 144.5],
  [170.5, 148, 1],
  [161, 152, 1],
  [170, 158.5, 1],
  [172.4, 162],
  [169.8, 165.5, 1],
  [172.4, 170],
  [171, 179],
  [161, 187],
  [147, 193],
  [137, 200],
  [132, 214],
  [132, 230],
])
export const MAN_MOUTH = 'M171 147.6L161 152L170.4 159Z'
export const MAN_EAR = ear(104, 124)

/** Where the eye and the cheek are on MAN_HEAD, for markers. */
export const MAN_EYE: Pt = [155, 100.5]
export const MAN_CHEEK: Pt = [146, 132]

/**
 * The eye of MAN_HEAD. `open`, level and steady; `down`, the lid lowered and
 * the lashes cast down, for grief or thought; `laugh`, the lower lid pushed
 * up and the crow's feet cut deep; `up`, looking up at something above him.
 */
export function ManEye({ look = 'open' }: { look?: 'open' | 'down' | 'laugh' | 'up' }) {
  return (
    <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
      {look === 'open' && (
        <>
          <path d="M146 98Q154 94 162.5 98" strokeWidth={2.3} />
          <path d="M147.5 103.5Q154.5 106 161 102.5" strokeWidth={1.1} />
          <path d="M146.5 93Q153 90.8 160 92.6" strokeWidth={LINE.hairline} />
          <circle cx={155.4} cy={100.2} r={2.7} fill={INK} stroke="none" />
        </>
      )}
      {look === 'up' && (
        <>
          <path d="M146 97Q154 92 162.5 96.5" strokeWidth={2.3} />
          <path d="M147.5 103.5Q154.5 106 161 102.5" strokeWidth={1.1} />
          <circle cx={157} cy={97.6} r={2.7} fill={INK} stroke="none" />
        </>
      )}
      {look === 'down' && (
        <>
          {/* the lid heavy, the eye still open under it and looking down */}
          <path d="M146 99Q154 100.5 162 98.6" strokeWidth={2.4} />
          <path d="M150.4 100.4A3 2.6 0 0 0 156.4 100.4Z" fill={INK} stroke="none" />
          <path d="M148 104.4Q154.5 107 160.5 103.4" strokeWidth={1} />
          <path d="M146.5 94Q153.5 91.6 160.5 93.6" strokeWidth={LINE.hairline} />
        </>
      )}
      {look === 'laugh' && (
        <>
          <path d="M146 100Q154 94.5 162.5 99.5" strokeWidth={2.3} />
          <path d="M147.5 102.5Q154.5 99.5 161 101.5" strokeWidth={1.4} />
          <path d="M145 99L137 95.5M145 102L137.5 103.5M145.5 105L139 109.5" strokeWidth={1.1} />
          <circle cx={155.2} cy={99.4} r={2.2} fill={INK} stroke="none" />
        </>
      )}
    </g>
  )
}

/** The nostril, the mouth line of the closed lips, and the fold of the cheek: every man's. */
export function ManNoseAndMouth({
  open = false,
  smile = false,
}: {
  open?: boolean
  smile?: boolean
}) {
  return (
    <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
      <path d="M172.5 128C168.5 125.5 168.5 120 174 119" strokeWidth={1.5} />
      {open ? (
        <path d={MAN_MOUTH} fill={INK} stroke="none" />
      ) : smile ? (
        <path d="M170 148Q166 150.4 161.4 147.2" strokeWidth={1.6} />
      ) : (
        <path d="M170 148.2L162.6 148.8" strokeWidth={1.6} />
      )}
      {/* the fold from the nostril towards the corner of the mouth */}
      <path
        d={smile || open ? 'M165 124Q158 134 159 146' : 'M165 125Q160 134 161.5 145'}
        strokeWidth={1}
      />
    </g>
  )
}

/** A level brow of the given weight: ink on a paper face. */
export function ManBrow({ w = 2.6, raise = 0 }: { w?: number; raise?: number }) {
  return (
    <path
      d={`M143.5 ${n(88.5 - raise)}Q153 ${n(85 - raise * 1.5)} 165.5 ${n(88.5 - raise)}`}
      fill="none"
      stroke={INK}
      strokeWidth={w}
      strokeLinecap="round"
    />
  )
}

/**
 * The shadow under a clean-shaven man's jaw: a wedge of the neck just below
 * the jaw line cut in rows of ink, so the jaw reads crisp against it, and the
 * throat below left in the light (the pilot's Scrooge has the same rows under
 * his chin). Draw inside the head, after it is filled,
 * with ids from the piece's `uid`.
 */
const JAW_LINE = 'M108 148C118 168 140 182 167 183'
const NECK_SHADOW =
  'M100 142C116 170 140 185 168 185L160 190L147 194L137 201L133 212Q104 204 82 180Q70 164 72 146Z'
let neckRows: string | undefined
export function NeckShadow({ id }: { id: string }) {
  if (!neckRows) {
    let d = ''
    for (let y = 151; y < 240; y += 3.9) d += `M40 ${n(y)}L176 ${n(y + 2.4)}`
    neckRows = d
  }
  return (
    <g>
      <defs>
        <clipPath id={`${id}-neck`}>
          <path d={NECK_SHADOW} />
        </clipPath>
        <clipPath id={`${id}-head`}>
          <path d={MAN_HEAD} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-head)`}>
        <g clipPath={`url(#${id}-neck)`}>
          <path d={neckRows} fill="none" stroke={INK} strokeWidth={1.1} />
        </g>
      </g>
      <path d={JAW_LINE} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
    </g>
  )
}

/** Shadow down the back of the jaw and neck, as Scrooge's: fine arcs of ink. */
export function neckShade(seed: number): string {
  const r = rng(seed)
  let d = ''
  for (let rad = 76; rad < 108; rad += 3.6)
    d += arcDashes(r, 120, 116, rad, deg(106), deg(146), [8, 20], [2, 5])
  return d
}

// ── The woman's head ───────────────────────────────────────────────────────

/** A woman's head in profile, facing right, smaller-featured than the man's. */
export const WOMAN_HEAD = spline([
  [76, 236],
  [68, 210],
  [57, 180],
  [48, 146],
  [48, 108],
  [60, 72],
  [84, 48],
  [114, 38],
  [141, 40],
  [157, 54],
  [163, 72],
  [165.5, 89],
  [163, 97, 1],
  [169, 108],
  [176, 119],
  [174.5, 124.5],
  [166.5, 127, 1],
  [168, 133],
  [163.5, 137, 1],
  [166.5, 141],
  [163, 147, 1],
  [166.5, 156],
  [164, 166],
  [153, 173],
  [139, 177],
  [132, 186],
  [129, 206],
  [131, 236],
])
export const WOMAN_EAR = ear(104, 124, 0.95)
export const WOMAN_EYE: Pt = [153, 95.5]

/** A woman's features: nostril, lips, chin, brow and eye (`open` or `down`). */
export function WomanFace({ eye = 'open' }: { eye?: 'open' | 'down' }) {
  return (
    <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
      <path d="M169.5 121.5C166 119.5 166 115.5 170 114.5" strokeWidth={1.2} />
      <path d="M163.5 137L156.5 137.8" strokeWidth={1.6} />
      <path d="M165.5 133C163.5 134 161.5 135.5 160.5 137" strokeWidth={0.9} />
      <path d="M164.5 143.5C162.5 145 160.5 145.3 158.5 144.7" strokeWidth={0.9} />
      <path d="M143 83.5Q152 80 161 83" strokeWidth={2} />
      {eye === 'open' ? (
        <>
          <path d="M145 94.5Q152.5 90 160.5 94" strokeWidth={2.2} />
          <path d="M146.5 99.2Q153 101.6 159.5 98.6" strokeWidth={1} />
          <circle cx={153.6} cy={96.2} r={2.5} fill={INK} stroke="none" />
        </>
      ) : (
        <>
          <path d="M145 96Q152.5 99.5 160.5 95.5" strokeWidth={2.3} />
          <path
            d="M147 97.5L145.5 101.5M151 99L150.5 103M155.5 99L156 103M159.5 97L161 100.5"
            strokeWidth={0.9}
          />
          <path d="M146 91.5Q152 89.5 158 91" strokeWidth={0.9} />
        </>
      )}
    </g>
  )
}

const WOMAN_NECK_SHADOW =
  'M100 146C114 164 134 175 154 173L139 177L132 186L128 204L90 198L62 196L60 170Z'
const WOMAN_JAW_LINE = 'M106 150C118 164 134 172 150 173'
let womanNeckRows: string | undefined
/** The shadow under a woman's jaw, lighter than a man's: fewer, finer rows. */
export function WomanNeckShadow({ id }: { id: string }) {
  if (!womanNeckRows) {
    let d = ''
    for (let y = 150; y < 206; y += 4.2) d += `M40 ${n(y)}L176 ${n(y + 2.4)}`
    womanNeckRows = d
  }
  return (
    <g>
      <defs>
        <clipPath id={`${id}-neck`}>
          <path d={WOMAN_NECK_SHADOW} />
        </clipPath>
        <clipPath id={`${id}-head`}>
          <path d={WOMAN_HEAD} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-head)`}>
        <g clipPath={`url(#${id}-neck)`}>
          <path d={womanNeckRows} fill="none" stroke={INK} strokeWidth={0.9} />
        </g>
      </g>
      <path d={WOMAN_JAW_LINE} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
    </g>
  )
}

// ── Hair ────────────────────────────────────────────────────────────────────

/**
 * Long hair or a long beard as tapered ribbons: `count` locks, each from a
 * point on the start curve `from(t)` to a point on the end curve `to(t)`,
 * bowed by `sag` so they hang as hair does and waved by `wave`. Fill them
 * with INK on a pale head of hair (grey or fair) or with PAPER on a dark one.
 * Cached by the caller, like every mark.
 */
export function locks(
  seed: number,
  count: number,
  from: (t: number) => Pt,
  to: (t: number) => Pt,
  width: [number, number],
  sag = 4,
  wave = 0,
): string {
  const r = rng(seed)
  let d = ''
  for (let i = 0; i < count; i++) {
    const t = (i + between(r, 0.15, 0.85)) / count
    const [x0, y0] = from(t)
    const [x1, y1] = to(t)
    const jx = between(r, -2, 2)
    const jy = between(r, -2, 2)
    const pts: Pt[] = []
    for (let k = 0; k <= 8; k++) {
      const u = k / 8
      pts.push([
        x0 + (x1 - x0) * u + Math.sin(Math.PI * u) * sag + Math.sin(u * 7 + i) * wave + jx * u,
        y0 + (y1 - y0) * u + jy * u,
      ])
    }
    d += ribbon(pts, between(r, width[0], width[1]), 0.8)
  }
  return d
}
