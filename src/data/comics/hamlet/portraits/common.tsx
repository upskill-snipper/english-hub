import { n, type Pt } from '@/components/comics/linocut/carve'

import { ruffBand, spline } from '../../the-tempest/portraits/common'

/**
 * What the Hamlet portraits share.
 *
 * The block, the cut ground behind a sitter, the paper rule, the outline and
 * placing helpers, the hand with its fingers kept apart, the garment folds,
 * the ruff, the ear, the tear, the crown, and the man's and the woman's heads
 * are the Shakespeare portraits' own (Romeo and Juliet, Much Ado About
 * Nothing, The Merchant of Venice, The Tempest), re-exported here through
 * ../../the-tempest/portraits/common.tsx rather than copied: a second copy of
 * a helper is a copy that drifts, and one hand cutting all the plays keeps the
 * site one artist. The youth's head, its eye, nose and jaw, the shoulders and
 * `once` are the Julius Caesar portraits'. Only what this play needs beyond
 * them is defined below.
 *
 * ONE HEAD FOR EVERY MAN, ONE FOR THE YOUNG, ONE FOR EVERY WOMAN, as the figure
 * kit has it (its HEAD_MAN, HEAD_YOUTH and the women's heads). The men are cut
 * from MAN_HEAD, the same brow, nose and ear; the three the kit makes young,
 * Hamlet, Laertes and Fortinbras, from YOUTH_HEAD, smoother in the nose and
 * chin; Gertrude and Ophelia from WOMAN_HEAD. Each is told from the others by
 * what the play or the kit gives them: the Ghost's armour and silvered beard,
 * Claudius's crown and cup, Polonius's white beard and bonnet, Hamlet's black,
 * Laertes's feathered cap and rapier, Horatio's scholar's cap and book,
 * Rosencrantz's bonnet and sealed letters, Guildenstern's round cap, beard and
 * pipe, Fortinbras's circlet and army.
 *
 * AS THE PLAY DESCRIBES THEM, AND NO FURTHER. Every portrait is drawn from the
 * held edition (src/data/full-texts/hamlet.ts, Project Gutenberg #1524), and
 * its docblock quotes the lines each detail comes from. Shakespeare describes
 * very few of these people, and nearly everything he gives is said by
 * someone else, most of it by Hamlet: the Ghost's armour, beaver, sorrow and
 * beard are Horatio's report (Act 1, Scene 2), Gertrude's tears and red eyes
 * her son's bitter memory of them, Polonius's grey beard and wrinkles the
 * "satirical slave" Hamlet pretends to read. Where the play gives no looks,
 * the sitter is drawn plainly in the dress of the time and the markers point
 * only at what the play does say; the card's small print says so.
 *
 * THE DRESS IS PLAIN ON PURPOSE: the ordinary dress of a northern European
 * court about 1600, when the play was written. Men in doublets buttoned down
 * the front, with a small ruff, a short cloak and a flat cap; older men and
 * scholars in long gowns; a king and queen crowned; women in a fitted bodice
 * with a high collar. The play names the "inky cloak" and "suits of solemn
 * black" (1.2), the doublet (2.1), the rapier (4.7), the recorders (3.2), the
 * letters "seal'd" (3.4) and the arras (2.2, 3.3). The armour is the plate
 * armour a king rode to war in, "cap-à-pie", head to foot, with the beaver of
 * the helmet raised. None of it comes from a film, television or stage
 * production.
 *
 * NEVER DRAWN, in any portrait. No wound, no blood and no blade at a body; no
 * sword drawn. The Ghost is a pale armoured man, never a skeleton and never
 * gory. Ophelia is drawn as she lives, with her own flowers, never near
 * water. Polonius is drawn alive beside the arras, never behind it. Nothing
 * suggests self-harm. No marker is a line of abuse.
 *
 * MARKERS AND RED. A marker never lies across a face. A marker for a face, a
 * cheek or a beard sits on it, with no line, as the pilot's "shrivelled his
 * cheek" sits on Scrooge; any other marker reaches its feature from in front
 * of the figure at the feature's own height, as the pilot's eye marker does,
 * never down from above the head or up from the neck. Red is never on a mouth
 * or a chin: a red mark there reads at a glance as blood (it was caught twice
 * in earlier texts, Hyde's anger flush and Juliet's lips beside the vial). A
 * flush goes on the cheek.
 *
 * GROUND KEYS. portraitGround caches each ground by its key in a module that
 * every text's portraits share: every key here starts "hamlet-".
 *
 * Every figure is drawn facing right in its own 0..240 by 0..332 frame (one
 * drawn to the waist runs on below it) and placed with `placing`; one that
 * faces left is flipped.
 */

export {
  bandAlong,
  Buttons,
  capsule,
  CROWN,
  CROWN_BAND_LINE,
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
  NECK_PIVOT,
  NeckShadow,
  neckShade,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  quad2,
  quadPts,
  ruffBand,
  spline,
  strands,
  Tear,
  turn,
  WOMAN_EAR,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
  type Digit,
  type SP,
} from '../../the-tempest/portraits/common'
export {
  ageLines,
  EarCut,
  FACE,
  napeShade,
  once,
  shoulders,
  YOUTH_EAR,
  YOUTH_HEAD,
  YOUTH_HEAD_OPEN,
  YOUTH_JAW,
  YOUTH_MOUTH,
  YouthEye,
  YouthNoseAndMouth,
} from '../../julius-caesar/portraits/common'

// ── The gentleman's dress ───────────────────────────────────────────────────

/** A man's shoulders in a doublet, in the 0..240 by 0..332 frame. */
export const DOUBLET = spline([
  [-6, 336, 1],
  [0, 298],
  [16, 264],
  [44, 240],
  [78, 228],
  [112, 232],
  [148, 226],
  [178, 238],
  [202, 262],
  [218, 296],
  [226, 336, 1],
])
/** The doublet's front edge, from under the ruff to the foot of the block. */
export const DOUBLET_FRONT = 'M162 246Q180 284 194 336'
export const DOUBLET_BUTTONS: Pt[] = [
  [171.5, 264],
  [178, 279],
  [184, 294],
  [189.5, 309],
  [194.5, 324],
]
/** The small ruff every gentleman wears, as the Twelfth Night portraits cut it. */
export const MAN_RUFF = ruffBand(74, 152, 206, 228, 6, 0.06)

/** A short cloak over the far shoulder, its edge falling down the back. */
export const SHORT_CLOAK = spline([
  [-6, 336, 1],
  [-2, 300],
  [12, 268],
  [38, 244],
  [70, 230],
  [100, 232],
  [92, 258],
  [88, 296],
  [88, 336, 1],
])

// ── The kit's shapes at the size of a portrait ──────────────────────────────

/**
 * The figure kit (../panels/people.tsx) cuts every head about forty units
 * tall, centred on (0, 0). A portrait's head is every Shakespeare portrait's
 * MAN_HEAD, WOMAN_HEAD or the youth's head, in the 0..240 by 0..332 frame.
 * `carry` takes a kit path (a hat, a beard, a crown) to the portrait's frame
 * point for point, as the Twelfth Night portraits carry theirs (x' = 99.5 +
 * 3.53x, y' = 114.9 + 3.84y), so the hat a student sees on a portrait is the
 * hat the panels give the same person. Relative commands are scaled, not
 * moved; an arc's radii are scaled with it.
 */
export function carry(d: string, dx = 0, dy = 0): string {
  const ax = 99.5 + dx
  const ay = 114.9 + dy
  const bx = 3.53
  const by = 3.84
  const toks = d.match(/[a-zA-Z]|-?(?:\d+\.?\d*|\.\d+)(?:e-?\d+)?/g) ?? []
  let out = ''
  let cmd = ''
  let i = 0
  const num = () => Number(toks[i++])
  while (i < toks.length) {
    if (/^[a-zA-Z]$/.test(toks[i])) {
      cmd = toks[i++]
      out += cmd
      if (cmd === 'Z' || cmd === 'z') continue
    }
    const abs = cmd === cmd.toUpperCase()
    const X = (v: number) => n(abs ? ax + bx * v : bx * v)
    const Y = (v: number) => n(abs ? ay + by * v : by * v)
    const pair = () => `${X(num())} ${Y(num())}`
    switch (cmd.toUpperCase()) {
      case 'H':
        out += `${X(num())} `
        break
      case 'V':
        out += `${Y(num())} `
        break
      case 'C':
        out += `${pair()} ${pair()} ${pair()} `
        break
      case 'S':
      case 'Q':
        out += `${pair()} ${pair()} `
        break
      case 'A': {
        const rx = n(num() * bx)
        const ry = n(num() * by)
        out += `${rx} ${ry} ${num()} ${num()} ${num()} ${pair()} `
        break
      }
      default:
        out += `${pair()} `
    }
  }
  return out.replace(/ ([A-Za-z])/g, '$1').trim()
}
