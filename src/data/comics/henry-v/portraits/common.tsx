import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
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
import { timing } from '@/components/comics/linocut/timing'

import { FLEUR } from '../panels/people'
import { spline } from '../../hamlet/portraits/common'
import { locks } from '../../the-merchant-of-venice/portraits/common'

/**
 * What the Henry V portraits share.
 *
 * The block, the cut ground behind a sitter, the paper rule, the outline and
 * placing helpers, the hand with its fingers kept apart, the garment folds,
 * the ear, the tear, the man's, the youth's and the woman's heads, and
 * `carry` (which takes a figure-kit shape to the size of a portrait) are the
 * Shakespeare portraits' own, re-exported here through
 * ../../hamlet/portraits/common.tsx; the grey beard's strokes, the white
 * brow and the fur are the King Lear portraits' (../../king-lear/portraits/
 * common.tsx), and the rows of mail the Macbeth portraits'. They are imported,
 * not copied: a second copy of a helper is a copy that drifts, and one hand
 * cutting every play keeps the site one artist. Only what this play needs
 * beyond them is defined below.
 *
 * THE LOOK OF EACH PERSON is the figure kit's (../panels/people.tsx), whose
 * docblock gives the lines of the play for it, so a student meets the same
 * person in the gallery as in the story: Henry young, clean-shaven, his short
 * dark hair under the King's crown, in the plain harness of 1415 with a cloth
 * jupon over it; Exeter grey-haired and grey-bearded; Canterbury in his black
 * skull cap, white rochet and short black cape, his hair white at the nape;
 * Scroop clean-shaven and bareheaded, his dark hair to the jaw; Bardolph with
 * the play's one great nose, knobbed and swollen; Pistol in his small cap with
 * the feather curling back, his beard "of the general's cut"; the Hostess in
 * a linen coif tied under the chin; Fluellen in his round cap, his long old
 * hood pulled back on his shoulders, his short dark beard and his leek; Gower
 * clean-shaven in a steel cap with a brim; Williams in the same steel cap, with
 * a short dark beard and the King's glove in its band; the Dauphin with his
 * dark hair long to the shoulder under a prince's circlet of three small
 * points, and Katherine, his sister, with her hair loose down her back under
 * the same circlet; the Constable bareheaded, with a dark pointed beard; the
 * French with the lilies of France. (The Dauphin, Katherine and Williams
 * joined the kit after their first portraits were cut, and those portraits
 * were redrawn to it on 9 October 2026.) What the kit's people
 * share at this size, the steel cap, the soldier's jack and the beards, is cut
 * once below. The men are cut from MAN_HEAD, the young (Henry, the Dauphin)
 * from YOUTH_HEAD and the women from WOMAN_HEAD, as the kit gives them
 * HEAD_MAN, HEAD_YOUTH and HEAD_WOMAN (HEAD_GIRL for Katherine).
 *
 * AS THE PLAY DESCRIBES THEM, AND NO FURTHER. Every portrait is drawn from the
 * held edition (src/data/full-texts/henry-v.ts, Project Gutenberg #1521), and
 * its docblock quotes the lines each detail comes from. Shakespeare describes
 * the looks of only a few of these people (Bardolph's face, Scroop's seeming,
 * the King's face on the night before the battle), and most of it is said by
 * someone else. Where the play gives no looks, the sitter is drawn plainly in
 * the dress of 1415 and the markers point only at what the play does say; the
 * card's small print says so. Nothing is taken from a film, television or
 * stage production.
 *
 * THIS PLAY'S RULES, as the panels keep them (../index.ts). No wound, no
 * blood, no blade drawn and none at a body: a sword stays in its scabbard,
 * out of the picture. No one is shown dying or dead. The French are cut with
 * the same care as the English. Katherine is drawn as a princess at her
 * lesson, never in a sexualised way: her gown is high at the neck and no
 * marker points at her lips. No marker, passage, note or alt text names an
 * order to kill, a death by a character's own hand, or the means of either.
 *
 * RED. The kit's rule holds here: RED is never on a face, a mouth, a chin or a
 * hand, and never as a small mark near one. Not even Bardolph's nose: a red
 * nose sits just above the lips, and at phone width it reads as a bloody one.
 * The spot colour goes only on things big enough to stay what they are: a
 * watch-fire, and the numbered markers.
 *
 * MARKERS NEVER CROSS A FACE. A marker for the face, a cheek or the skin sits
 * on the face with no line, as the pilot's "shrivelled his cheek" sits on
 * Scrooge's. Any other marker that reaches a head comes to its feature from
 * in front, at the feature's own height, as Scrooge's eye marker does, or,
 * for a hood or a cap at the back of the head, from behind at its own height:
 * never down from above the head and never up from the neck. A line to the
 * lips stops in the air before them.
 *
 * GROUND KEYS. portraitGround caches each ground by its key in a module that
 * every text's portraits share: every key here starts "hv-".
 *
 * Every figure is drawn facing right in its own 0..240 by 0..332 frame (a
 * figure drawn to the waist runs on below it) and placed with `placing`; one
 * that faces left is flipped.
 */

export {
  ageLines,
  bandAlong,
  capsule,
  carry,
  EarCut,
  FACE,
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
  napeShade,
  NeckShadow,
  neckShade,
  once,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  quad2,
  quadPts,
  shoulders,
  spline,
  strands,
  Tear,
  turn,
  WOMAN_EAR,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
  YOUTH_EAR,
  YOUTH_HEAD,
  YOUTH_HEAD_OPEN,
  YOUTH_JAW,
  YOUTH_MOUTH,
  YouthEye,
  YouthNoseAndMouth,
  type Digit,
  type SP,
} from '../../hamlet/portraits/common'
export { along, furStrokes, waves, whiteBrow } from '../../king-lear/portraits/common'
export { mailRings } from '../../macbeth/portraits/common'

// ── The lilies of France, and the Constable's stars ─────────────────────────

/**
 * The kit's fleur-de-lis (FLEUR, about 11 high) moved to (x, y) and scaled by
 * `s`, point for point, so the lilies on a portrait are the lilies the panels
 * cut. "my fair flower-de-luce" (Henry to Katherine, 5.2).
 */
export function fleur(x: number, y: number, s: number): string {
  return FLEUR.replace(
    /(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g,
    (_, xs: string, ys: string) => `${n(x + Number(xs) * s)} ${n(y + Number(ys) * s)}`,
  )
}

/** A five-pointed star centred on (x, y), its points `r` out, the first one up. */
export function star(x: number, y: number, r: number, turnDeg = 0): string {
  let d = ''
  for (let k = 0; k < 5; k++) {
    const a = deg(-90 + turnDeg + k * 72)
    const b = deg(-90 + turnDeg + k * 72 + 36)
    d += `${k ? 'L' : 'M'}${n(x + Math.cos(a) * r)} ${n(y + Math.sin(a) * r)}`
    d += `L${n(x + Math.cos(b) * r * 0.42)} ${n(y + Math.sin(b) * r * 0.42)}`
  }
  return d + 'Z'
}

// ── A prince's circlet ──────────────────────────────────────────────────────

/**
 * The circlet of a prince or a princess of France, the kit's DAUPHIN_CIRCLET
 * at this size: a band round the head above the brow, lower at the back, with
 * three small points along its top, in paper with an ink rim, and a stone set
 * under each point. The Dauphin wears it, and so does Katharine, his sister,
 * as the kit gives it to them both. Its front edge meets the brow of
 * YOUTH_HEAD (and, moved by translate(-3 2), of WOMAN_HEAD). Lower than the
 * King's crown, so neither is ever taken for Henry.
 *
 * It had five points until 9 October 2026, cut before the kit had a Dauphin;
 * the kit's has three, and the panels print three, so the portraits do too.
 */
export const PRINCE_CIRCLET =
  'M44 98L43 84L62 80.5L70 61L78 77.6L98 73.9L106 54.4L114 71L134 67.3L142 47.8L150 64.4' +
  'L164 61.8L167 75.4Q106 90 44 98Z'
/** The top edge of the band under the points, and the three stones set in it. */
export const CIRCLET_BAND = 'M44 85.6Q106 75 165 63.6'
export const CIRCLET_STONES: Pt[] = [
  [70, 86.6],
  [106, 80],
  [142, 73.6],
]

// ── A watch-fire ─────────────────────────────────────────────────────────────

/**
 * A watch-fire on the ground at (x, y), scaled by `s`, as the night panels
 * cut theirs (../panels/agincourt-night.tsx, `WatchFire`): a ring of stones
 * and two crossed logs in ink with paper edges, three tongues of flame in the
 * spot colour, and sparks rising in paper. Drawn large, so that at phone
 * width the flames stay flames and never shrink to a red speck. Keep it well
 * away from any face or hand.
 */
export function WatchFire({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${n(x)} ${n(y)}) scale(${n(s)})`}>
      <path
        d="M-30 2a5 4 0 1 0 10 0a5 4 0 1 0 -10 0ZM-19 5a5 4 0 1 0 10 0a5 4 0 1 0 -10 0ZM10 5a5 4 0 1 0 10 0a5 4 0 1 0 -10 0ZM21 2a5 4 0 1 0 10 0a5 4 0 1 0 -10 0Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.3}
      />
      <path d="M-24 -1L20 -11M-20 -11L24 -1" stroke={PAPER} strokeWidth={9} strokeLinecap="round" />
      <path d="M-24 -1L20 -11M-20 -11L24 -1" stroke={INK} strokeWidth={6.4} strokeLinecap="round" />
      <path d={gouge(-16, -4, 10, -9.6, 0.8) + gouge(-10, -9.6, 16, -4, 0.8)} fill={PAPER} />
      <g fill={RED}>
        <path className="lc-flicker" d="M-18 -8C-20 -18 -12 -22 -10 -32C-6 -24 -4 -18 -6 -8Z" />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.8, delay: 0.3 })}
          d="M-10 -8C-14 -24 -4 -36 0 -54C4 -38 14 -26 9 -8Z"
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 1, delay: 0.5 })}
          d="M6 -8C4 -18 10 -24 13 -34C16 -24 20 -16 15 -8Z"
        />
      </g>
      <path
        className="lc-rise"
        style={timing({ delay: 0.6, dur: 1.8 })}
        d={
          gouge(4, -64, 6, -70, 1.1) +
          gouge(-8, -72, -9, -77, 1) +
          gouge(12, -80, 14, -84, 0.9) +
          gouge(-2, -90, -1, -95, 0.9)
        }
        fill={PAPER}
      />
    </g>
  )
}

// ── The harness of 1415, at the size of a portrait ──────────────────────────
//
// The kit's ARMOUR (../panels/people.tsx): "the plain harness of 1415: a
// jupon (the cloth coat over the plate) ... mail ... plate on the arms and
// legs, its joints ... cut in paper". At the size of a portrait that is the
// jupon over the chest, the plates of the spaudler over the near shoulder,
// and the mail standard, the collar of mail round the neck, which a man
// wears with his helmet off. Nothing more is described in the play: its
// "casques" (Prologue) and "armourers" (Act 2, Chorus), and Henry's "bruised
// helmet and his bended sword" (Act 5, Chorus).

/** The shoulders and chest in armour, over the frame's foot: the jupon's outline. */
export const HARNESS = spline([
  [-12, 340, 1],
  [-6, 300],
  [8, 266],
  [36, 242],
  [70, 230],
  [108, 232],
  [146, 228],
  [180, 238],
  [206, 262],
  [222, 298],
  [230, 340, 1],
])

/**
 * The mail standard: a collar of mail from under the jaw round the neck,
 * flaring over the tops of the shoulders. Ink, with its rings cut in paper
 * (`mailRings`, clipped to it) and its lower edge cut in paper.
 */
export const STANDARD = spline([
  [64, 214, 1],
  [96, 206],
  [126, 208],
  [142, 212, 1],
  [150, 226],
  [160, 244, 1],
  [124, 252],
  [86, 252],
  [50, 246, 1],
  [56, 230],
])
export const STANDARD_EDGE = 'M52 245Q88 254 124 251Q146 249 160 243'

/**
 * The spaudler: three lames of plate over the near shoulder, each a band
 * overlapping the one below, the top one rounded over the shoulder. In ink,
 * with a paper rim along each lame's lower edge and the light on its curve.
 */
export const SPAUDLER = [
  spline([
    [22, 274, 1],
    [30, 252],
    [54, 238],
    [86, 234],
    [116, 240],
    [134, 256],
    [138, 272, 1],
    [100, 268],
    [60, 268],
  ]),
  spline([
    [16, 288, 1],
    [60, 280],
    [100, 280],
    [140, 284, 1],
    [140, 300, 1],
    [100, 296],
    [60, 296],
    [14, 304, 1],
  ]),
  spline([
    [12, 302, 1],
    [60, 294],
    [100, 294],
    [140, 298, 1],
    [140, 316, 1],
    [100, 312],
    [60, 312],
    [10, 320, 1],
  ]),
]
/** The lower edge of each lame, cut in paper. */
export const SPAUDLER_RIMS = [
  'M24 273Q60 266 100 267Q122 268 137 271',
  'M16 303Q60 295 100 295Q122 296 139 299',
  'M12 319Q60 311 100 311Q122 312 139 315',
]
export const SPAUDLER_RIVETS: Pt[] = [
  [32, 266],
  [128, 264],
  [26, 296],
  [132, 292],
  [22, 312],
  [132, 308],
]

/**
 * The light on the round of the top lame and on the jupon's chest: broken
 * arcs cut in paper, widest where the light from the front falls.
 */
export function plateLight(seed: number, cx: number, cy: number, from: number, to: number): string {
  const r = rng(seed)
  let d = ''
  for (let rad = from; rad < to; rad += 6) {
    let a = deg(-160) + between(r, 0, 0.2)
    while (a < deg(-30)) {
      const e = Math.min(a + between(r, 0.12, 0.3), deg(-30))
      d += arc(cx, cy, rad, a, e)
      a = e + between(r, 0.08, 0.24)
    }
  }
  return d
}

/**
 * The quilting of a jupon: lines stitched down the padded cloth from the
 * shoulder line to the foot of the block, cut in paper, bowed a little with
 * the chest. `xs` is where they start along the shoulders.
 */
export function quilting(
  seed: number,
  xs: number[],
  top: (x: number) => number,
  foot = 340,
): string {
  const r = rng(seed)
  let d = ''
  for (const x0 of xs) {
    const y0 = top(x0)
    const x1 = x0 + (x0 - 110) * 0.18 + between(r, -2, 2)
    d += gouge(x0, y0, x1, foot, between(r, 0.7, 1), between(r, -2, 2))
  }
  return d
}

/** The jupon over the chest, its quilting cut in paper; `lilies` sprinkles it. Draw it first. */
export function Jupon({ quilts, lilies }: { quilts: string; lilies?: string }) {
  return (
    <g>
      <path d={HARNESS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={quilts} fill={PAPER} />
      {lilies && <path d={lilies} fill={PAPER} />}
    </g>
  )
}

/**
 * The mail standard round the neck and the spaudler over the near shoulder.
 * Draw them after the head, so the collar of mail lies over the foot of the
 * neck, and before the hair.
 */
export function Plates({ id, rings, light }: { id: string; rings: string; light: string }) {
  return (
    <g>
      <defs>
        <clipPath id={`${id}-std`}>
          <path d={STANDARD} />
        </clipPath>
        <clipPath id={`${id}-lame`}>
          <path d={SPAUDLER[0]} />
        </clipPath>
      </defs>
      <path
        d={STANDARD}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <g clipPath={`url(#${id}-std)`}>
        <path d={rings} fill="none" stroke={PAPER} strokeWidth={0.95} />
      </g>
      <path d={STANDARD_EDGE} fill="none" stroke={PAPER} strokeWidth={2} strokeLinecap="round" />
      {[2, 1, 0].map((k) => (
        <path
          key={k}
          d={SPAUDLER[k]}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
      ))}
      <g clipPath={`url(#${id}-lame)`}>
        <path d={light} fill="none" stroke={PAPER} strokeWidth={1.5} strokeLinecap="round" />
      </g>
      <g fill="none" stroke={PAPER} strokeLinecap="round">
        {SPAUDLER_RIMS.map((d) => (
          <path key={d} d={d} strokeWidth={2.6} />
        ))}
      </g>
      <g fill={PAPER}>
        {SPAUDLER_RIVETS.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={1.9} />
        ))}
      </g>
    </g>
  )
}

// ── The soldiers' gear, at the size of a portrait ───────────────────────────
//
// The kit (../panels/people.tsx) dresses the captains and the common soldiers
// alike, "a jack and a sword", and gives Gower, Williams and the soldiers a
// steel cap with a broad brim (KETTLE). They are cut once here, so that
// Fluellen, Gower, Williams, Bardolph and Pistol wear the same jack in the
// gallery as in the panels, and Gower and Williams the same cap. The sword
// stays out of the picture, as it does on every portrait in this play.

/**
 * The steel cap with a broad brim: the kit's KETTLE at this size, set down to
 * the brow. The bowl is the kit's carried point for point (`carry(KETTLE, 0,
 * 6)`, from ../../hamlet/portraits/common.tsx); the brim is cut again,
 * curving down to front and back as a kettle hat's does, because carried
 * straight it printed as a flat board across the head.
 */
export const KETTLE_CAP =
  'M52.2 74.8C48 32.6 72.7 4.2 103 4.2C133.4 4.2 157.4 32.6 153.2 74.8' +
  'Q174 80 188.6 95.4L184 102Q152 86.6 103 84.4Q54 86.6 12.6 104.4L8.6 97Q28 81 52.2 74.8Z'
/** The bowl without the brim, for the light on the steel. */
const KETTLE_BOWL = 'M52.2 74.8C48 32.6 72.7 4.2 103 4.2C133.4 4.2 157.4 32.6 153.2 74.8Z'
/** The band round the foot of the bowl, and the edge of the brim, cut in paper (the kit's KETTLE_CUT). */
const KETTLE_BAND = gouge(53.6, 67.6, 151.6, 67.6, 2.2, -1.2)
const KETTLE_BRIM_EDGE = 'M14 100.6Q56 83.2 103 81Q150 83.2 183.4 98.4'

/**
 * The light from the front on the round of the bowl: three long curves cut in
 * paper on the side towards the light, thinning away from it, and a fainter
 * one behind. Steel shines in long strokes; short broken cuts read as straw.
 */
export function steelLight(seed: number): string {
  const r = rng(seed)
  let d = ''
  const arcAt = (rad: number, a0: number, a1: number, w: number) => {
    const steps = 10
    const pts: Pt[] = []
    for (let i = 0; i <= steps; i++) {
      const a = deg(a0 + ((a1 - a0) * i) / steps)
      pts.push([103 + Math.cos(a) * rad * 0.98, 76 + Math.sin(a) * rad * 1.3])
    }
    d += ribbon(pts, w, 0.7)
  }
  arcAt(48, -64 + between(r, -2, 2), -14, 5.4)
  arcAt(41, -70 + between(r, -2, 2), -22, 3.6)
  arcAt(34, -74 + between(r, -2, 2), -30, 2.4)
  arcAt(44, -150, -122 + between(r, -2, 2), 2)
  return d
}

/** The steel cap: ink, the light on its bowl cut in paper, its band and brim edge in paper. */
export function SteelCap({ id, light }: { id: string; light: string }) {
  return (
    <g>
      <defs>
        <clipPath id={`${id}-bowl`}>
          <path d={KETTLE_BOWL} />
        </clipPath>
      </defs>
      <path
        d={KETTLE_CAP}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <g clipPath={`url(#${id}-bowl)`}>
        <path d={light} fill={PAPER} />
      </g>
      <path d={KETTLE_BAND} fill={PAPER} />
      <path
        d={KETTLE_BRIM_EDGE}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.4}
        strokeLinecap="round"
      />
    </g>
  )
}

/** The shoulders in a soldier's padded jack, over the frame's foot. */
export const JACK = spline([
  [-12, 340, 1],
  [-6, 300],
  [8, 266],
  [36, 242],
  [68, 230],
  [104, 232],
  [144, 228],
  [180, 238],
  [206, 262],
  [222, 298],
  [230, 340, 1],
])
/** The jack's high neck, standing round the throat. */
export const JACK_NECK = spline([
  [56, 210, 1],
  [92, 214],
  [124, 218],
  [146, 218, 1],
  [152, 236, 1],
  [110, 244],
  [56, 240, 1],
])
/** The quilting of the high neck, cut in paper. */
const JACK_NECK_QUILTS = 'M76 214L74 240M98 216L98 243M120 219L122 244M140 219L144 240'

/** The quilting of the jack, cut in paper: the padding stitched down in lines. */
export function jackQuilts(seed: number): string {
  return quilting(seed, [26, 50, 74, 98, 122, 146, 170, 194], (x) => 240 + Math.abs(x - 120) * 0.16)
}

/** The body of the jack, its quilting cut in paper. Draw it first. */
export function JackBody({ quilts }: { quilts: string }) {
  return (
    <g>
      <path d={JACK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={quilts} fill={PAPER} />
    </g>
  )
}

/** The high neck of the jack: draw it after the head, so it stands over the foot of the neck. */
export function JackNeck() {
  return (
    <g>
      <path
        d={JACK_NECK}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        d={JACK_NECK_QUILTS}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.2}
        strokeLinecap="round"
      />
    </g>
  )
}

// ── Beards on MAN_HEAD ──────────────────────────────────────────────────────
//
// The kit's beards (the Lear kit's SHORT_BEARD and CORNWALL_BEARD), carried
// to this size point for point, fall short of MAN_HEAD's chin, which is
// longer than the kit's head, and leave a pale sliver in front of the beard
// that reads as a second chin. So they are cut again here to MAN_HEAD, the
// same beards at this size: dark, from the sideburn in front of the ear along
// the jaw and round the chin, below the lower lip, with a moustache over the
// upper lip. Ink, with their strands cut in paper.

/** The short dark beard, close along the jaw: Fluellen's and Williams's. */
export const SHORT_BEARD_P = spline([
  [116, 112, 1],
  [120, 128],
  [126, 141],
  [135, 149],
  [147, 154],
  [158, 157],
  [167, 158.6, 1],
  [173, 163],
  [176, 172],
  [175.4, 183],
  [169, 193],
  [158, 200],
  [144, 203],
  [131, 199],
  [121, 190],
  [114, 176],
  [110.6, 160],
  [110, 142],
  [111.4, 126],
])

/**
 * The pointed beard "of the general's cut" (Gower, 3.6): down the jaw and
 * forward to a point below the chin. The kit's CORNWALL_BEARD, which it gives
 * Pistol and the Constable.
 */
export const POINTED_BEARD_P = spline([
  [116, 112, 1],
  [120, 128],
  [126, 141],
  [135, 149],
  [147, 154],
  [158, 157],
  [167, 158.6, 1],
  [173.6, 164],
  [177.6, 176],
  [177, 192],
  [172.6, 210],
  [166, 230, 1],
  [157, 216],
  [145, 206],
  [131, 198],
  [120, 186],
  [113, 170],
  [110, 150],
  [110.6, 130],
])

/**
 * The moustache over the upper lip, following the line of the lip down to the
 * corner of the mouth and into the beard. Cut narrow and with strands: a
 * solid moustache the depth of the lip printed as a pair of dark lips.
 */
export const MOUSTACHE_P = spline([
  [166.8, 135.2, 1],
  [171.4, 137.2],
  [173.4, 141],
  [172.2, 144.6],
  [167.4, 146.6],
  [161.6, 149.6],
  [157.6, 155.4, 1],
  [156.8, 149.8],
  [160, 143.6],
  [163.4, 138.6],
])
/** The strands of the moustache, cut in paper, combed down and back. */
const MOUSTACHE_CUTS =
  gouge(168.6, 137.4, 164.4, 145.4, 0.55, 0.3) +
  gouge(165.4, 138.6, 160.6, 148.6, 0.55, 0.3) +
  gouge(171.6, 139.6, 168.6, 145.2, 0.5, 0.2)

/** The strands of a dark beard, cut in paper, from the line of the cheek down to its edge. */
export function beardStrands(seed: number, pointed: boolean): string {
  const top = (t: number): Pt => [116 + t * 50, 116 + t * 42]
  return pointed
    ? locks(seed, 15, top, (t) => [122 + t * 44, 186 + t * 42], [0.9, 1.5], 1.5) +
        locks(
          seed + 1,
          6,
          (t) => [124 + t * 30, 150 + t * 8],
          (t) => [140 + t * 24, 206 + t * 18],
          [0.8, 1.2],
          1,
        )
    : locks(seed, 14, top, (t) => [116 + t * 54, 176 + t * 22], [0.8, 1.3], 1.4) +
        locks(
          seed + 1,
          5,
          (t) => [126 + t * 30, 150 + t * 8],
          (t) => [134 + t * 30, 196 + t * 4],
          [0.7, 1.1],
          1,
        )
}

/**
 * A dark beard, and with `moustache` a moustache, drawn after the face: in ink
 * with a paper outline and their strands cut in paper. `d` is SHORT_BEARD_P or
 * POINTED_BEARD_P.
 */
export function Beard({
  id,
  d,
  strands,
  moustache = true,
}: {
  id: string
  d: string
  strands: string
  moustache?: boolean
}) {
  return (
    <g>
      <defs>
        <clipPath id={`${id}-beard`}>
          <path d={d} />
        </clipPath>
      </defs>
      <path d={d} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-beard)`}>
        <path d={strands} fill={PAPER} />
      </g>
      {moustache && (
        <>
          <path
            d={MOUSTACHE_P}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.1}
            strokeLinejoin="round"
          />
          <path d={MOUSTACHE_CUTS} fill={PAPER} />
        </>
      )}
    </g>
  )
}
