import type { ReactNode } from 'react'

import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { deg, gouge, n } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/timing'

import {
  doublet,
  gown,
  hand,
  hilt,
  limb,
  rapier,
  sheathed,
  shoe,
  type P,
  type Part,
} from '../../romeo-and-juliet/panels/verona-kit'
import {
  COIF,
  FULL_BEARD,
  FULL_BEARD_STRANDS,
  HEAD_MAN,
  HEAD_WOMAN,
  OLD_BEARD,
} from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { cloak, cloakCuts, endAngle, mitt } from '../../much-ado-about-nothing/panels/people'
import {
  DUKE_CAP,
  DUKE_CAP_CUT,
  NAPE_HAIR,
  RUFF,
  SALARINO_CAP,
  SALARINO_CAP_CUT,
  SALERIO_HAT,
  SALERIO_HAT_CUT,
} from '../../the-merchant-of-venice/panels/people'

export { hilt, limb, rapier, type P, type Part }

/**
 * THE PEOPLE OF VENICE AND CYPRUS: one figure kit for every Othello panel, so
 * that a student meets the same Othello, the same Iago and the same Desdemona
 * from the street in Venice to the bedchamber on Cyprus. Draw every recurring
 * character with `Person` (or, for a pose it cannot make, with the heads and
 * pieces below), never with a new outline. A change here changes every panel
 * that uses it: preview them all before changing one. Cut first for the
 * panels of moments 1 to 5 (Act 1, Scene 1 to Act 2, Scene 1); an artist who
 * needs a person not here adds a `Look` for them below, in the same way, and
 * says so in this docblock.
 *
 * The cutting tools (the open hand with its fingers apart, the doublet, the
 * gown, the shoe, the rapier sheathed and drawn) are the Romeo and Juliet
 * kit's, the hand at rest and the short cloak the Much Ado kit's, and the
 * Duke's cap, the small ruff and two of the hats The Merchant of Venice kit's,
 * imported, not copied: the four plays are set in the same Italy within a few
 * years of each other, and one hand cutting all of them keeps the site one
 * artist. A figure is cut as the reference panel cuts Fred
 * (src/data/comics/a-christmas-carol/counting-house.tsx): a paper halo round
 * every part, so it reads as one black shape with one carved outline, then
 * the parts in ink, then the paper cuts of folds and features. `Person` builds
 * it from a pose in its own frame: facing right, feet at (0, 0), a man about
 * 182 units tall, the head centred on (3, -160). Place it with `at`, `scale`
 * and `flip` (to face left).
 *
 * ── HOW THE PRINT SHOWS THAT OTHELLO IS BLACK ───────────────────────────────
 * "Haply, for I am black" (3.3); "the Moor" throughout. The Merchant of Venice
 * kit cut every face from the same black block and left the Prince of
 * Morocco's complexion to his words; this play's brief is that Othello is
 * drawn as a Black man, so the print has to show it, and it does so the way a
 * relief print shows any face: by where the light is cut.
 * - The Venetians' faces and hands are LIT: cut in paper, with a fine ink
 *   edge and their features cut back in ink, as the pilot lights the charity
 *   collectors' faces and Scrooge's. The play gives them pale skin by its own
 *   repeated contrast, and Othello says it of Desdemona: "that whiter skin of
 *   hers than snow, / And smooth as monumental alabaster" (5.2).
 * - Othello's face and hands are left in INK, as every face is in the Romeo
 *   and Juliet and Merchant kits, and modelled by paper cuts where the light
 *   falls: the ridge of the brow, the white of the eye round a dark iris, the
 *   cheekbone, the parting of the lips and the ear. His close dark hair is
 *   left solid, its outline cut in small scallops so the shape of the head
 *   reads as close curls.
 * - HIS HEAD IS THE SAME HEAD every other man in this kit wears (HEAD_MAN):
 *   the same nose, the same lips, the same brow and chin, cut no differently.
 *   Nothing in his face is exaggerated. The insults the play's villains use
 *   about his looks are theirs, never the print's: Roderigo's slur in 1.1 is
 *   never drawn or quoted.
 * - He is never put in shadow to look sinister, and nobody else's face is ever
 *   left in ink to show shadow: in this play an ink face means only Othello,
 *   so a Venetian in the dark keeps a lit face and the darkness is in the
 *   ground round him. He stands upright, with the bearing of a general, in
 *   the same rich dress as the senators' sons; Iago's words for him are
 *   never his picture.
 * - For the same reason no one's shadow is cut as a whole figure in solid
 *   ink. "Iago's plan is born" first threw Iago's shadow huge across the wall
 *   beside the words "Hell and night ... this monstrous birth", and a giant
 *   black man's shape there draws the very link between blackness and the
 *   devil that Iago's insults make. Review took it out, and the kit's
 *   Silhouette with it (2 October 2026).
 *
 * ── WHAT THE PLAY SAYS OF THEM, and so what is drawn ────────────────────────
 * (the held edition, src/data/full-texts/othello.ts, Project Gutenberg
 * #1531). Shakespeare describes very few looks. Where he is silent a person is
 * drawn plainly in the dress of Venice in the 1570s, the years of the Turkish
 * war for Cyprus, and is told from the others by a hat or a cut of hair,
 * invented only for that and noted here; nothing is taken from a film,
 * television or stage production.
 *
 * - OTHELLO: "the Moor", "for I am black" (3.3); a general, "valiant
 *   Othello" (1.3), "the warlike Moor Othello" (2.1), "I fetch my life and
 *   being / From men of royal siege" (1.2); older than his wife and his
 *   lieutenant: "I am declin'd / Into the vale of years" (3.3). He wears his
 *   sword ("Keep up your bright swords", 1.2) and speaks of his helm (1.3).
 *   So: his own face in ink, as above, his hair close and dark; bareheaded;
 *   a general's long coat to the knee over doublet and hose, girdled with a
 *   sash cut in paper, the small ruff, and a rapier sheathed at his side. He
 *   is a little taller than the men round him (size 1.03), as a commander
 *   stands, never stooped.
 * - IAGO: Othello's "ancient", his ensign (1.1), "four times seven years"
 *   old (1.3), a soldier "At Rhodes, at Cyprus" (1.1), "honest Iago" to
 *   everyone. Nothing in his looks is described, and he must look honest. So
 *   a plain soldier: a buff jerkin over his hose, a baldric cut in paper
 *   across his chest to the sword at his hip, clean-shaven, and a close dark
 *   cap with its band cut in paper (IAGO_CAP), which nobody else wears.
 * - CASSIO: "a Florentine" (1.1), "a proper man" with "a person and a smooth
 *   dispose" (1.3), "handsome, young" (2.1), and bearded: Iago claims to have
 *   seen him "wipe his beard" with the handkerchief (3.3). So he is a young
 *   gentleman, bareheaded, his dark hair curling (CASSIO_HAIR), with a short
 *   neat dark beard and moustache cut in ink on his lit face, in a doublet,
 *   a short cloak and a rapier.
 * - RODERIGO: "a Venetian gentleman", rich ("I'll sell all my land", 1.3),
 *   whose purse Iago empties ("who hast had my purse", 1.1; "put money in thy
 *   purse", 1.3), and clean-shaven: Iago tells him to "defeat thy favour with
 *   an usurped beard" (1.3). So he is beardless, in a doublet and short cloak
 *   with a rapier, a flat bonnet with a long feather curling back from it
 *   (RODERIGO_BONNET), the one feather in the play, and a fat purse at his
 *   girdle, cut in paper.
 * - BRABANTIO: a senator, "the magnifico" (1.2), old: "this old man's
 *   daughter" (1.3), "you shall more command with years / Than with your
 *   weapons" (1.2). So he has a full white beard and white hair cut in paper
 *   with ink strands, a senator's gown to the floor and a soft round cap
 *   (SENATOR_CAP). Woken in 1.1 he is not yet dressed ("for shame put on your
 *   gown"), so at his window he is bareheaded (`bare`) in his white shirt.
 * - DESDEMONA: "a maid so tender, fair, and happy" (1.2), "gentle" (1.2),
 *   young; "that whiter skin of hers than snow" (5.2). So she is a head
 *   shorter than the men (size 0.87), her face lit, in a gown with a band of
 *   lace at the neck, and her dark hair dressed up in a knot at the back of
 *   her head with a paper band over the crown, as a lady's is: on the last
 *   night she asks Emilia to "unpin me" (4.3), so `loose` lets it fall down
 *   her back, for the panels of Act 4, Scene 3 and Act 5, Scene 2 only.
 * - EMILIA, Iago's wife and Desdemona's attendant, is not described. A plain
 *   gown and a dark linen coif (the Romeo and Juliet kit's COIF) framing her
 *   lit face, so she is told from Desdemona at a glance.
 * - THE DUKE OF VENICE is not described. He wears the stiff cap of his office
 *   rising to a horn at the back, and a long robe with a short cape across
 *   the shoulders, as The Merchant of Venice kit's Duke does (same office,
 *   same city).
 * - SENATORS are not described: long gowns, the soft round SENATOR_CAP, and
 *   short grey beards (the Romeo and Juliet kit's OLD_BEARD), so none of them
 *   is taken for Brabantio with his full white beard.
 * - OFFICERS AND ATTENDANTS "with torches" (1.2) and gentlemen are plain men
 *   in doublets and a brimmed hat ('officer', the Merchant kit's Salerio's
 *   hat) or a round cap ('gentleman').
 * - MONTANO, governor of Cyprus before Othello, "trusty and most valiant"
 *   (1.3), is not described. A soldier past his youth: a short grey beard, a
 *   long cloak to the knee, a rapier, and a round cap with a turned-up brim
 *   (the Merchant kit's Salarino's).
 * - LODOVICO, "a proper man" (4.3), a noble of Venice, and GRATIANO,
 *   Brabantio's brother, are cut here for later panels: Lodovico in a long
 *   cloak with a short dark beard and a flat bonnet without a feather;
 *   Gratiano an old man in a senator's gown with a short white beard,
 *   bareheaded, his white hair cut in paper.
 * - BIANCA, Cassio's mistress, is not described. A plain gown, her hair
 *   bound up in a kerchief cut in paper, and nothing about her drawn to
 *   demean her.
 *
 * HANDS. Every open hand has four fingers and a thumb cut apart, so it reads
 * as an open hand at panel size and never as a fist; a lit hand keeps an ink
 * edge round each finger for the same reason. A pointing hand has one long
 * finger and the rest curled; a hand at rest is a small closed mitten. No
 * hand is raised flat on a straight arm: at panel size that reads as a
 * salute. And no single finger is raised upright from a fist: on Othello's
 * ink hand, in a shadow, or at phone width, that is a silhouette, and in
 * silhouette it reads as a rude sign. The kit had a hand for it ('finger'),
 * used for Iago's "I have't" and Othello's oath, and review took both out
 * and the hand with them (2 October 2026); see "Iago's plan is born" and
 * "The vow of revenge" for what replaced them. Nor is a hand of Othello's
 * raised closed above his shoulder: a raised fist on a Black man is a
 * political sign the play does not make.
 *
 * RED. Never on a mouth or a chin, where it reads as blood at a glance (it
 * did on this site twice: Hyde's anger, Juliet's lips beside the vial). A
 * flush, if a panel needs one, goes on the cheek (FLUSH). Torch and candle
 * flames are red; so may a symbol be, never a wound.
 *
 * CUT ONCE ELSEWHERE, and imported, never cut again: the handkerchief "Spotted
 * with strawberries" (./handkerchief.tsx: fallen, tucked at a belt, held up,
 * or another, plain one); a man on one knee or seated on a bench
 * (./kneel.tsx) and a woman seated or kneeling (./seated.tsx), each on this
 * kit's own upper body; and the castle's stone, garden and harbour
 * (./garden.tsx).
 */

// ── Heads, in profile facing right, centred on (0, 0) ────────────────────────

export { HEAD_MAN, HEAD_WOMAN }

/**
 * A lit man's face on HEAD_MAN: the paper from the hairline down the profile
 * to the throat, and back up behind the ear to the temple. The hair and the
 * back of the head stay ink. Filled PAPER with an ink edge (FACE_EDGE wide),
 * so the profile keeps its line against the paper halo round the head.
 */
export const FACE_MAN =
  'M13.4 -14.6C15.2 -12.6 16 -10.4 16 -8L16 -5L22.5 3.5L17 5.5L17.5 8.5L16 10L17 12.5C16.5 16 13 18.5 8 18.5L6 22L-5.6 22C-5.4 17 -5.4 12 -5.8 7.6C-6 3 -4.4 -1.6 -1.4 -5.4C2.2 -9.8 7.6 -13 13.4 -14.6Z'
/** A lit woman's face on HEAD_WOMAN, as FACE_MAN. */
export const FACE_WOMAN =
  'M12.2 -14.2C13.9 -12.2 14.5 -10 14.5 -7.5L15 -4.5L20.5 3L15.5 4.8L16 7.5L14.8 9L15.6 11.5C15 15 12 17 7.5 17L5.5 21L-4.6 21C-4.6 16 -4.4 11 -4.8 7C-5 2.6 -3.6 -1.6 -0.8 -5.2C2.4 -9.4 7 -12.6 12.2 -14.2Z'
/** Emilia's face inside the opening of her coif: its back edge is the coif's front edge. */
export const FACE_COIFED =
  'M14.2 -11C14.5 -9.6 14.5 -8.6 14.5 -7.5L15 -4.5L20.5 3L15.5 4.8L16 7.5L14.8 9L15.6 11.5C15 15 12 17 7.5 17L5.4 21.4C1.8 17.4 0.2 9.6 1.6 1C3 -5.6 7.8 -9.6 14.2 -11Z'
/**
 * The turned-back linen border of Emilia's coif, a paper band just behind the
 * opening round her face, so the coif reads as a cap and not as a dark bob of
 * hair. Stroke PAPER about 1.6.
 */
export const COIF_BORDER = 'M12.6 -14.4C6 -12.6 0.6 -7.4 -1.4 0.4C-2.8 7.6 -1.4 15.2 2 21.4'
/** The ink edge round a lit face: carve weight, so the profile survives at phone width. */
export const FACE_EDGE = 1.6

/**
 * A lit man's features, cut in ink. The open eye is the same eye Othello's
 * is, the white left paper inside an ink lid line (LIT_EYE, stroked INK
 * about 0.9) round a dark iris (LIT_IRIS): a solid ink almond read as an eye
 * shut. The brow over it is filled INK.
 */
export const LIT_EYE = 'M7.2 -3.6Q10.2 -6 13.1 -3.6Q10.2 -1.6 7.2 -3.6Z'
export const LIT_IRIS: [number, number, number] = [10.5, -3.7, 1.15]
export const LIT_EYE_DOWN = gouge(7, -2.4, 12.8, -1.6, 0.85, 0.9)
export const LIT_BROW = gouge(5.6, -8.4, 14.8, -7.8, 1.15, -0.6)
/** The nostril, the ear and the line of a shut mouth, stroked in ink about 1. */
export const LIT_LINES =
  'M18.6 4.6Q16.8 3 15.2 4.2' + 'M-0.4 -3.2C-3.8 -4 -5.4 -0.4 -3.6 3C-2.6 4.6 -0.8 4.2 -0.4 2.8'
export const LIT_MOUTH = 'M16.2 10.1L12.2 10.7'
/** A mouth open to call out: a small dark wedge between the lips. Fill INK. */
export const LIT_MOUTH_OPEN = 'M16.8 9.2L11.8 10.2L16.6 12Z'
/** A mouth hooked up at the back corner: a knowing smile (Iago alone). Stroke INK. */
export const LIT_SMILE = 'M16.2 10.2Q14 10.8 12.4 10.2Q11.6 9.6 11.2 8.6'
/**
 * An open, happy smile, the corner lifted softly (Othello and Desdemona
 * meeting on Cyprus, 2.1). On a lit face stroke INK; on Othello's, PAPER.
 */
export const JOY = 'M16.2 10.1Q14 11.6 11.6 9.6'
export const JOY_W = 'M14.8 9.1Q12.8 10.5 10.8 8.9'
/** A woman's features on FACE_WOMAN, finer. */
export const LIT_EYE_W = 'M6.8 -3.4Q9.6 -5.6 12.4 -3.4Q9.6 -1.6 6.8 -3.4Z'
export const LIT_IRIS_W: [number, number, number] = [9.8, -3.5, 1.05]
export const LIT_EYE_W_DOWN = gouge(6.6, -2.3, 12.2, -1.6, 0.75, 0.9)
export const LIT_BROW_W = gouge(5.6, -7.8, 13.2, -7.6, 0.8, -0.7)
export const LIT_LINES_W = 'M16.8 3.8Q15.2 2.7 13.8 3.6'
export const LIT_MOUTH_W = 'M14.8 9.1L11.8 9.6'
/** The ear of a woman with her hair up, stroked in ink. */
export const LIT_EAR_W = 'M-0.2 -2.4C-3.2 -3.2 -4.6 0 -3 3C-2.2 4.4 -0.6 4 -0.2 2.8'
/** The spot colour on a cheek, never the mouth: two short strokes. Stroke RED. */
export const FLUSH = 'M4 2.6L9.6 3.6M4.6 5.2L9 6'

/**
 * Othello's features, cut in PAPER on his ink face, where the light falls:
 * the white of the eye (OTHELLO_EYE) round a dark iris (OTHELLO_IRIS), the
 * ridge of the brow, the light on his skin (OTHELLO_LIGHT), the parting of
 * the lips and the ear. The head itself is HEAD_MAN, as every man's is, with
 * his close hair (OTHELLO_HAIR) over it.
 */
export const OTHELLO_EYE = 'M7.2 -3.6Q10.2 -6 13.1 -3.6Q10.2 -1.6 7.2 -3.6Z'
export const OTHELLO_IRIS: [number, number, number] = [10.5, -3.7, 1.15]
export const OTHELLO_EYE_DOWN = gouge(7, -2.4, 12.9, -1.5, 0.75, 0.9)
export const OTHELLO_BROW = gouge(5.2, -8.8, 15, -8.4, 0.85, -0.8)
/**
 * The light on his skin, cut just inside the profile and across the
 * cheekbone: the forehead, the bridge of the nose, the cheekbone and the
 * chin. Where these cuts stop, the hair begins, so no line is drawn round
 * the hairline: a cut band there read as a cap. Fill PAPER.
 */
export const OTHELLO_LIGHT =
  gouge(12.4, -13.2, 14.6, -9.4, 0.55, -0.5) +
  gouge(16.8, -3.4, 19.8, 0.8, 0.5, 0.2) +
  gouge(5.8, 1.6, 10.8, 3.2, 0.6, 0.5) +
  gouge(10.6, 16, 14.6, 14.4, 0.5, 0.4)
export const OTHELLO_LIPS = 'M16.2 10.1L12.4 10.6'
export const OTHELLO_EAR = 'M-1.2 -3.4C-4.4 -4 -5.8 -0.4 -4 3C-3 4.6 -1.2 4.2 -0.8 2.8'
/** The edge of his hair at the temple, before the ear. Stroke PAPER about 0.9. */
export const OTHELLO_TEMPLE = 'M3.6 -8.6C1.6 -6.6 0.4 -4.8 -0.2 -2.8'

/**
 * Cassio's curling dark hair, a scalloped mass from the brow over the crown
 * to the nape, ink over the head with the curls cut in paper (CASSIO_CURLS).
 */
function scallop(
  cx: number,
  cy: number,
  r: number,
  a0: number,
  a1: number,
  k: number,
  out: number,
) {
  const at = (a: number, rad: number): P => [
    cx + rad * Math.cos(deg(a)),
    cy + rad * Math.sin(deg(a)),
  ]
  const step = (a1 - a0) / k
  let [x, y] = at(a0, r)
  let d = `M${n(x)} ${n(y)}`
  for (let i = 0; i < k; i++) {
    const c = at(a0 + step * (i + 0.5), r + out)
    ;[x, y] = at(a0 + step * (i + 1), r)
    d += `Q${n(c[0])} ${n(c[1])} ${n(x)} ${n(y)}`
  }
  const e1 = at(a1, r - 7)
  const e0 = at(a0, r - 7)
  return d + `L${n(e1[0])} ${n(e1[1])}A${n(r - 7)} ${n(r - 7)} 0 0 0 ${n(e0[0])} ${n(e0[1])}Z`
}
export const CASSIO_HAIR = scallop(0.5, -1.5, 19, 120, 300, 8, 4.4)
/**
 * Othello's close dark hair: a mass a little proud of the skull, from the
 * nape over the crown to the brow, its edge cut in small scallops so the
 * outline of the head itself reads as close curls. Ink, in the figure's head
 * stack, so the paper halo follows the curls.
 */
export const OTHELLO_HAIR = scallop(0.4, -1.4, 19.6, 140, 302, 16, 1.5)
export const CASSIO_CURLS =
  gouge(-11, -13, -5, -17.4, 0.6, -1.2) +
  gouge(-16.4, -3, -13.6, -9.6, 0.6, -1) +
  gouge(-15.6, 6, -15, 0, 0.6, -1) +
  gouge(-1, -19.4, 5.6, -19.4, 0.55, -1)
/**
 * Cassio's short beard and moustache, in ink on his lit face: along the jaw
 * from below the ear to the chin, trimmed close.
 */
export const CASSIO_BEARD =
  'M-4 7C-3.4 12.6 0 17.4 4.6 20C8.4 22.2 13.2 22 16 19.6C17.8 17.8 17.8 15 17 12.8L16.2 10.4C13.8 11.6 10.8 12.2 7.8 11.4C4.6 10.6 0.6 8.6 -4 7Z' +
  'M17.4 7.6C15.4 6.6 13.2 7 11.6 8.4C13.6 9.2 15.6 9 17.4 7.6Z'
export const CASSIO_BEARD_CUTS =
  gouge(2, 12.4, 7.6, 18.6, 0.5, -0.4) + gouge(9.4, 15, 14.2, 18.2, 0.45)
/** Lodovico's beard: as Cassio's, a little longer at the point. */
export const LODOVICO_BEARD =
  'M-4 7C-3.4 13 0 19 5 22.6C8.6 25 12.6 25.6 15.6 22.4C17.6 20 17.8 15.6 17 12.8L16.2 10.4C13.8 11.6 10.8 12.2 7.8 11.4C4.6 10.6 0.6 8.6 -4 7Z' +
  'M17.4 7.6C15.4 6.6 13.2 7 11.6 8.4C13.6 9.2 15.6 9 17.4 7.6Z'

/** Iago's close soldier's cap over the crown, its band cut in paper. */
export const IAGO_CAP =
  'M-16.2 -7.6C-17.4 -17.6 -9 -23.6 1 -23.6C10 -23.6 15.6 -19 16 -11.6C6.4 -13.4 -6.4 -12 -16.2 -7.6Z'
export const IAGO_CAP_CUT = gouge(-15.4, -10.2, 15.4, -13.6, 1.1, -0.7)

/** Roderigo's flat bonnet, tilted, with its band cut in paper. */
export const RODERIGO_BONNET =
  'M-17.6 -7.4C-21.4 -15.4 -13 -25.4 1 -26.4C14 -27 23.6 -21.6 23 -14.4C15 -11.6 -3.4 -9.6 -17.6 -7.4Z'
export const RODERIGO_BONNET_CUT = gouge(-16.6, -10, 21, -15.6, 0.9, -0.8)
/** His long feather, sweeping back and down from the bonnet; its barbs cut in paper. */
export const RODERIGO_FEATHER =
  'M-4 -23C-12 -31 -25 -33.4 -35 -28.6C-39.6 -26.2 -40.6 -21.4 -38 -18.4C-36.6 -22.6 -32 -25.4 -26 -25.6C-18 -25.6 -11 -22.6 -6.6 -18.6Z'
export const RODERIGO_FEATHER_CUTS =
  gouge(-7, -22.6, -35.4, -26.4, 0.55, 1.4) +
  'M-13 -26.6L-11.2 -23.2M-19.6 -28.6L-18.4 -25M-26.6 -29L-26 -25.6M-33 -27.2L-33.4 -24.2'

/** The senators' soft round cap, Brabantio's too, its band cut in paper. */
export const SENATOR_CAP =
  'M-17.8 -8.6C-20.4 -17.8 -12.6 -25.8 0.6 -26.2C13 -26.6 19.4 -20.4 18.6 -11.6C7.8 -13.2 -6 -12 -17.8 -8.6Z'
export const SENATOR_CAP_CUT = gouge(-17, -11.2, 18, -13.8, 1.1, -0.5)

/**
 * White hair at the back of an old man's head, below a cap or bare, cut in
 * paper with an ink edge and ink strands (WHITE_HAIR_STRANDS): Brabantio,
 * Gratiano.
 */
export const WHITE_HAIR =
  'M-1 -19.2C-9 -18.2 -14.8 -12 -16 -4C-17.2 5 -16.2 13 -12.2 20L-6.8 20.6C-9.6 13 -10.2 4.6 -8.4 -2.6C-6.6 -9.6 -3.2 -13.8 1.8 -16Z'
export const WHITE_HAIR_STRANDS =
  'M-12.4 -6C-13.6 2 -13 10 -10.6 17M-6.6 -13C-9.6 -8 -11 -2 -11.4 4M-3 -16.6C-7 -13 -9 -8 -9.8 -3'
/**
 * The whole head of white hair, for an old man bareheaded (Brabantio at his
 * window, Gratiano): over the crown from the brow to the nape, so no dark
 * crown reads as a cap. Paper with an ink edge, and WHITE_CROWN_STRANDS.
 */
export const WHITE_CROWN =
  'M13.4 -14.6C11.6 -18.4 7.6 -20.4 3 -20.4C-8 -20.4 -16.6 -10.6 -16.2 3C-16 10 -14.6 15.6 -12.2 20L-5.6 21C-5.4 17 -5.4 12 -5.8 7.6C-6 3 -4.4 -1.6 -1.4 -5.4C2.2 -9.8 7.6 -13 13.4 -14.6Z'
export const WHITE_CROWN_STRANDS =
  'M-12.4 -6C-13.6 2 -13 10 -10.6 17M-9.4 -10C-11.4 -4 -11.8 2 -11.2 8' +
  'M10 -17.6C4 -18.4 -2 -17 -6.4 -13.6M4.6 -15.6C-1 -15 -5.6 -12 -8.6 -7.6'

/**
 * Desdemona's dark hair dressed up: the knot at the back of her head
 * (HAIR_KNOT), ink over HEAD_WOMAN, with a paper band over the crown
 * (HAIR_BAND) and strands cut in paper (HAIR_UP_CUTS) so it reads as hair and
 * never as a hood.
 */
export const HAIR_KNOT = 'M-21.4 -7.6a7 7 0 1 0 14 0a7 7 0 1 0 -14 0Z'
export const HAIR_BAND = gouge(11.6, -14.6, -9.4, -15.4, 1, -2.6)
export const HAIR_UP_CUTS =
  gouge(8, -18.6, -10, -11.4, 0.5, 2) + gouge(3, -12.6, -9.4, -3.6, 0.5, 1.6)
/** The turns of the knot, stroked in PAPER about 0.9. */
export const HAIR_KNOT_LINES = 'M-17.6 -11.4Q-13 -12.6 -10.4 -8.6M-18.8 -6.6Q-14.4 -7.6 -11.4 -4'
/** Her hair unpinned (4.3, 5.2): long and loose down her back. */
export const HAIR_LOOSE =
  'M12.6 -11.6C8.6 -20.8 -5 -22.2 -12.6 -15.6C-18.6 -9.6 -19 2 -17.6 14C-16.2 28 -18 42 -21.6 54C-18 56 -12 56 -8.6 54C-6.4 42 -5.4 30 -6 19C-6.6 8 -4 -3 4 -8.6C7.8 -11.2 10.2 -11.8 12.6 -11.6Z'
export const HAIR_LOOSE_CUTS =
  gouge(4, -15.6, -13.6, 4, 0.55, 3) +
  gouge(-12, 8, -14.4, 40, 0.6, 1.4) +
  gouge(-9, 20, -11.4, 50, 0.55, 1.2)

/** Bianca's kerchief, tied over her hair, its edge and knot cut in paper. */
export const KERCHIEF =
  'M12.4 -12.6C8 -21.6 -6 -23 -13.4 -16C-18.6 -11 -19.6 -3 -18 4L-24 9L-17.6 9.6L-14.6 5.4C-12 2 -9.4 -4 -5.6 -8.2C-0.6 -12.6 6 -13.6 12.4 -12.6Z'
export const KERCHIEF_CUT =
  gouge(11.6, -13.6, -12.6, -6, 0.9, -2.4) + gouge(-16.4, 4.2, -22, 8.2, 0.6)

// ── Things held ─────────────────────────────────────────────────────────────

/**
 * A torch held up: the shaft as a figure's part (TORCH_SHAFT, from the grip
 * up along `angle`), and `TorchFlame` drawn at its head, in the spot colour.
 * Officers carry them in 1.2 ("Enter Cassio and Officers with torches").
 */
export function torchShaft(grip: P, angle = -80, len = 34): { part: Part; head: P } {
  const a = deg(angle)
  const head: P = [grip[0] + Math.cos(a) * len, grip[1] + Math.sin(a) * len]
  const tail: P = [grip[0] - Math.cos(a) * 8, grip[1] - Math.sin(a) * 8]
  return { part: { d: limb([tail, head]), w: 3.4 }, head }
}

/**
 * A flame at `at` (its foot), in the spot colour, with a paper heart and a
 * ring of short cut rays: a torch, a lamp or a candle. Scaled by `s`; `still`
 * leaves out the flicker.
 */
export function TorchFlame({
  at,
  s = 1,
  rays = true,
  delay = 0,
}: {
  at: P
  s?: number
  rays?: boolean
  delay?: number
}) {
  const [x, y] = at
  const spokes = rays
    ? [-150, -120, -90, -60, -30, 0, 180]
        .map((a) => {
          const r0 = 11 * s
          const r1 = 18 * s
          const c: P = [x, y - 7 * s]
          const u: P = [Math.cos(deg(a)), Math.sin(deg(a))]
          return gouge(c[0] + u[0] * r0, c[1] + u[1] * r0, c[0] + u[0] * r1, c[1] + u[1] * r1, 0.7)
        })
        .join('')
    : ''
  return (
    <g>
      {rays && <path d={spokes} fill={PAPER} />}
      <path
        className="lc-flicker"
        style={timing({ delay: 0.2 + delay })}
        d={`M${n(x - 5 * s)} ${n(y)}C${n(x - 7 * s)} ${n(y - 8 * s)} ${n(x - 2 * s)} ${n(y - 12 * s)} ${n(x)} ${n(y - 20 * s)}C${n(x + 3 * s)} ${n(y - 12 * s)} ${n(x + 7 * s)} ${n(y - 8 * s)} ${n(x + 5 * s)} ${n(y)}Z`}
        fill={RED}
        stroke={INK}
        strokeWidth={0.8}
      />
      <path
        d={`M${n(x - 2 * s)} ${n(y - 1 * s)}C${n(x - 2.6 * s)} ${n(y - 5 * s)} ${n(x - 0.6 * s)} ${n(y - 7 * s)} ${n(x)} ${n(y - 10 * s)}C${n(x + 0.8 * s)} ${n(y - 7 * s)} ${n(x + 2.6 * s)} ${n(y - 5 * s)} ${n(x + 2 * s)} ${n(y - 1 * s)}Z`}
        fill={PAPER}
      />
    </g>
  )
}

/**
 * A pointing hand: a small closed fist, the forefinger long and straight out
 * along `a` (degrees), the thumb tucked along the fist. `thumb` is the side it
 * lies on, as for the open hand.
 *
 * WHY NOT THE ROMEO AND JULIET KIT'S pointingHand. Its thumb stands out at 28
 * degrees and its fist is round; cut as a lit (paper) hand with an ink edge,
 * at panel size it read as a cupped hand held out, palm up, and the pointing
 * was lost (Brabantio's "Down with him, thief!", 1.2).
 */
export function pointer(at: P, a: number, s = 1, thumb: 1 | -1 = 1): Part[] {
  const u: P = [Math.cos(deg(a)), Math.sin(deg(a))]
  const v: P = [-u[1], u[0]]
  const pt = (x: number, y: number): P => [
    at[0] + (u[0] * x + v[0] * y) * s,
    at[1] + (u[1] * x + v[1] * y) * s,
  ]
  const q = (p: P) => `${n(p[0])} ${n(p[1])}`
  const fist =
    `M${q(pt(-1, -3.4))}L${q(pt(5.6, -3.8))}Q${q(pt(9.4, -3.4))} ${q(pt(9.4, 0))}` +
    `Q${q(pt(9.4, 3.6))} ${q(pt(5.6, 3.8))}L${q(pt(-1, 3.2))}Z`
  const fb = pt(8, -thumb * 2.2)
  const ft = pt(21, -thumb * 2.4)
  const tb = pt(3.2, -thumb * 3.6)
  const tt = pt(8.8, -thumb * 3.4)
  return [
    { d: fist },
    { d: `M${q(fb)}L${q(ft)}`, w: 2.3 * s },
    { d: `M${q(tb)}L${q(tt)}`, w: 2.1 * s },
  ]
}

// ── The builder ──────────────────────────────────────────────────────────────

export type Look =
  | 'othello'
  | 'iago'
  | 'cassio'
  | 'roderigo'
  | 'brabantio'
  | 'desdemona'
  | 'emilia'
  | 'duke'
  | 'senator'
  | 'officer'
  | 'gentleman'
  | 'montano'
  | 'lodovico'
  | 'gratiano'
  | 'bianca'

/** How big each person is, against a man of 1. */
const SIZE: Record<Look, number> = {
  othello: 1.03,
  iago: 0.99,
  cassio: 1,
  roderigo: 0.97,
  brabantio: 0.97,
  desdemona: 0.87,
  emilia: 0.89,
  duke: 1,
  senator: 0.99,
  officer: 1,
  gentleman: 0.98,
  montano: 1,
  lodovico: 1,
  gratiano: 0.96,
  bianca: 0.88,
}

const WOMEN: Look[] = ['desdemona', 'emilia', 'bianca']
/** The long gowns of the senate, to the floor. */
const ROBED: Look[] = ['brabantio', 'duke', 'senator', 'gratiano']

/**
 * A hand: open with the fingers apart, pointing, at rest, or hidden. There is
 * no hand with one finger raised, and why is under HANDS above.
 */
export type HandKind = 'open' | 'point' | 'mitt' | 'none'

export interface ArmPose {
  /** Shoulder, elbow and wrist, in the figure's frame. */
  pts: P[]
  hand?: HandKind
  /** The direction the fingers point, in degrees clockwise from the right. Defaults to the forearm's. */
  deg?: number
  /** Which side of the fingers the thumb is on: 1 clockwise of them, -1 anticlockwise. */
  thumb?: 1 | -1
  /** An open hand's length (15 is life and a little more) and how far its fingers fan. */
  size?: number
  spread?: number
}

export interface Pose {
  look: Look
  /** The head's centre and its tilt in degrees (forward is positive). */
  head?: { at?: P; rot?: number }
  far?: ArmPose
  near?: ArmPose
  /** Hip, knee and foot of each leg, for everyone not in a gown to the floor. */
  legs?: { far: P[]; near: P[] }
  /** A short cloak, and how far its hem swings back. */
  cloak?: number
  /** A gown's hem: how far it reaches ahead of the waist and behind it. */
  hem?: { front?: number; back?: number }
  eye?: 'open' | 'down' | 'none'
  /** 'smile' is Iago's knowing smile; 'joy' an open, happy one. */
  mouth?: 'shut' | 'open' | 'smile' | 'joy'
  /** No cap or hat (Brabantio at his window). */
  bare?: boolean
  /** A rapier sheathed at the hip. On by default for the men who wear one. */
  sword?: boolean
  /** Desdemona's hair unpinned, down her back (4.3 and 5.2 only). */
  loose?: boolean
  /** The spot colour on the cheek. */
  flush?: boolean
  /**
   * The near arm crosses in front of the face (a hand cupped to the mouth to
   * shout): it is cut after the face instead of before it.
   */
  nearOverFace?: boolean
  /**
   * Cut the clothes in paper with an ink edge instead of in ink: a white
   * linen shirt or nightgown (Brabantio woken in 1.1: "for shame put on your
   * gown"; Desdemona in her nightgown in 4.3 and 5.2).
   */
  shirt?: boolean
}

const MEN_LEGS = {
  far: [
    [-3, -70],
    [-5, -36],
    [-6, -3],
  ] as P[],
  near: [
    [3, -70],
    [5, -36],
    [7, -3],
  ] as P[],
}

/**
 * A part of a figure; whether it is skin (a hand), which a lit figure prints
 * in paper; and whether it stays ink on a figure in a white shirt (the head,
 * the hair, a hat).
 */
type Bit = Part & { skin?: boolean; ink?: boolean }
/**
 * The ink edge round each part of a lit hand, each side. At 0.7 the fingers
 * of a paper hand ran together at panel size into a mitten.
 */
const HAND_EDGE = 1

function hatOf(look: Look): { d: string; cut: string } | undefined {
  if (look === 'iago') return { d: IAGO_CAP, cut: IAGO_CAP_CUT }
  if (look === 'roderigo') return { d: RODERIGO_BONNET, cut: RODERIGO_BONNET_CUT }
  if (look === 'brabantio' || look === 'senator') return { d: SENATOR_CAP, cut: SENATOR_CAP_CUT }
  if (look === 'duke') return { d: DUKE_CAP, cut: DUKE_CAP_CUT }
  if (look === 'officer') return { d: SALERIO_HAT, cut: SALERIO_HAT_CUT }
  if (look === 'gentleman' || look === 'montano') return { d: SALARINO_CAP, cut: SALARINO_CAP_CUT }
  if (look === 'lodovico') return { d: RODERIGO_BONNET, cut: RODERIGO_BONNET_CUT }
  return undefined
}

function build(p: Pose) {
  const look = p.look
  const woman = WOMEN.includes(look)
  const robed = ROBED.includes(look)
  const h = p.head ?? {}
  const hAt: P = h.at ?? (woman ? [3, -154] : [3, -160])
  const headT = `translate(${n(hAt[0])} ${n(hAt[1])}) rotate(${h.rot ?? 0})`
  const armW = woman ? 7.8 : robed ? 10.6 : look === 'othello' ? 9.6 : 8.6
  const groups: Bit[][] = []
  const push = (...g: Bit[]) => groups.push(g)
  let cuts = ''
  const handOf = (a: ArmPose, sep?: number): Bit[] => {
    const kind = a.hand ?? 'mitt'
    const wrist = a.pts[a.pts.length - 1]
    const angle = a.deg ?? endAngle(a.pts)
    const skin = (q: Part): Bit => ({ ...q, sep, skin: true })
    if (kind === 'none') return []
    if (kind === 'mitt') return [skin(mitt(wrist, angle, woman ? 0.85 : 1))]
    if (kind === 'point') return pointer(wrist, angle, woman ? 0.9 : 1, a.thumb ?? 1).map(skin)
    // 20 degrees between the fingers: the Merchant kit found that at 14 the
    // rough edge of the print closed the gaps and open hands read as fists,
    // and a lit hand's ink edges take a little more room.
    return hand(wrist, angle, {
      size: a.size ?? (woman ? 14.5 : 16),
      spread: a.spread ?? 20,
      thumb: a.thumb,
    }).map(skin)
  }
  const armOf = (a: ArmPose, near: boolean) => {
    const sep = near ? 1.5 : undefined
    push({ d: limb(a.pts), w: armW, sep }, ...handOf(a, sep))
  }

  if (p.far) armOf(p.far, false)
  const swordOn = p.sword ?? (!robed && !woman)
  const sword = swordOn && !robed && !woman ? sheathed([0, -74], 1, 76) : undefined
  if (!robed && !woman) {
    const legs = p.legs ?? MEN_LEGS
    const leg = (pts: P[]): Bit[] => [{ d: limb(pts), w: 9 }, shoe([pts[pts.length - 1][0], 0], 1)]
    push(...leg(legs.far))
    const long = look === 'montano' || look === 'lodovico'
    if (p.cloak !== undefined || long) {
      push({ d: cloak(p.cloak ?? 0, long) })
      cuts += cloakCuts(p.cloak ?? 0, long)
    }
    if (sword) push(sword.scabbard)
    push({
      d: limb([
        [0, -138],
        [0, -72],
      ]),
      w: 22,
    })
    if (look === 'othello') {
      // A general's long coat to the knee over doublet and hose, girdled
      // with a sash, its front edge and two folds cut in paper.
      push(...leg(legs.near))
      push({
        d: gown([0, -136], [0, -92], -40, 1, { shoulder: 33, waistW: 26, front: 16, back: 20 }),
      })
      cuts +=
        gouge(-13.4, -93.6, 14.4, -92, 2.4) +
        gouge(10, -91, 12.6, -74, 1.4, -0.4) +
        gouge(13.2, -90.6, 17.4, -76, 1.2, -0.6) +
        gouge(6, -128, 9, -46, 1.6, -0.4) +
        gouge(-6, -84, -14, -46, 1.8, 1)
    } else {
      push({ d: doublet([0, -138], [0, -70], 1, { width: 28, hem: 16, flare: 6 }) })
      push(...leg(legs.near))
      // the doublet's buttons down the front and the girdle at the waist
      cuts += gouge(7.6, -128, 8.6, -84, 0.9, 0.4) + gouge(-11, -79, 12, -80, 1.1)
      // Iago's baldric, over the shoulder to the sword at his hip
      if (look === 'iago') cuts += gouge(-10.6, -134, 11.4, -82, 1.5, 1.6)
    }
  } else if (woman) {
    push({
      d: gown([0, -132], [0, -94], 0, 1, {
        shoulder: 24,
        waistW: 16,
        front: p.hem?.front ?? 30,
        back: p.hem?.back ?? 36,
      }),
    })
    // the bodice's point, and two folds of the skirt
    cuts +=
      gouge(-8, -95, 8.4, -94, 1, 0.8) +
      gouge(-6, -84, -20, -8, 1.8, 1) +
      gouge(8, -84, 18, -8, 1.8, -1)
    // Desdemona, a senator's daughter: a band of lace at the neck of her gown.
    if (look === 'desdemona') cuts += gouge(-9, -131, 8, -129.6, 1.6, 1.4)
  } else {
    // The senate's long gowns; the Duke's wider, with a short cape.
    const duke = look === 'duke'
    push({
      d: gown([0, -136], [0, -90], 0, 1, {
        shoulder: duke ? 36 : 32,
        waistW: duke ? 30 : 26,
        front: p.hem?.front ?? (duke ? 28 : 22),
        back: p.hem?.back ?? (duke ? 36 : 28),
      }),
    })
    push(shoe([10, 0], 1))
    cuts +=
      gouge(-12, -91, 13, -90, 1.8) +
      gouge(9, -124, 16, -6, 1.2, -0.6) +
      gouge(-4, -80, -14, -8, 1.8, 1) +
      gouge(4, -80, 6, -8, 1.6, -0.4) +
      (duke ? gouge(-18, -110, 18, -108, 2, 2.6) : '')
  }
  // The head, and what is behind or on it.
  const head: Bit[] = []
  const hat = !p.bare ? hatOf(look) : undefined
  const t = headT
  if (look === 'desdemona') {
    if (p.loose) head.push({ d: HAIR_LOOSE, t })
    else head.push({ d: HAIR_KNOT, t })
    head.push({ d: HEAD_WOMAN, t })
  } else if (look === 'emilia') head.push({ d: COIF, t }, { d: HEAD_WOMAN, t })
  else if (look === 'bianca') head.push({ d: HEAD_WOMAN, t }, { d: KERCHIEF, t })
  else {
    if (hat) head.push({ d: NAPE_HAIR, t })
    head.push({ d: HEAD_MAN, t })
    if (look === 'othello') head.push({ d: OTHELLO_HAIR, t })
    if (look === 'cassio') head.push({ d: CASSIO_HAIR, t }, { d: CASSIO_BEARD, t })
    if (look === 'lodovico') head.push({ d: LODOVICO_BEARD, t })
    if (look === 'brabantio') head.push({ d: FULL_BEARD, t })
    if (look === 'senator' || look === 'montano' || look === 'gratiano')
      head.push({ d: OLD_BEARD, t })
  }
  if (hat) head.push({ d: hat.d, t })
  if (look === 'roderigo' && hat) head.push({ d: RODERIGO_FEATHER, t })
  push(...head.map((q) => ({ ...q, ink: true })))
  if (p.near) armOf(p.near, true)
  const late = p.near && p.nearOverFace ? groups.splice(groups.length - 1, 1) : []
  return { groups, late, cuts, headT, hat, hilt: sword?.hilt }
}

/**
 * The figure cut from the block: halo, parts, cuts, as the Romeo and Juliet
 * kit's CutFigure cuts it, with one addition. On a lit figure each hand is
 * printed in paper with an ink edge, straight after its own arm, so a far hand
 * behind the body stays behind it.
 */
function Cut({
  groups,
  late = [],
  cuts,
  lit,
  tone = 'ink',
  transform,
  face,
  children,
}: {
  groups: Bit[][]
  /** Groups cut after the face: a near arm crossing in front of it. */
  late?: Bit[][]
  cuts?: string
  lit: boolean
  /** The colour the clothes are cut in: ink, or paper with an ink edge (a white shirt). */
  tone?: 'ink' | 'paper'
  transform?: string
  face?: ReactNode
  children?: ReactNode
}) {
  const halo = 1.8
  const FG = tone === 'ink' ? INK : PAPER
  const EDGE = tone === 'ink' ? PAPER : INK
  const all = [...groups, ...late].flat()
  const haloShapes = all.filter((q) => !q.w && !q.t)
  const haloLimbs = new Map<string, string>()
  for (const q of all)
    if (q.w && !q.t) {
      const k = n(q.w + halo * 2)
      haloLimbs.set(k, (haloLimbs.get(k) ?? '') + q.d)
    }
  const placed = all.filter((q) => q.t)
  const one = (q: Bit, colour: string, extra: number, key: string) =>
    q.w ? (
      <path
        key={key}
        d={q.d}
        transform={q.t}
        fill="none"
        stroke={colour}
        strokeWidth={n(q.w + extra)}
      />
    ) : (
      <path
        key={key}
        d={q.d}
        transform={q.t}
        fill={colour}
        stroke={extra ? colour : undefined}
        strokeWidth={extra ? n(extra) : undefined}
      />
    )
  // A lit hand: an ink edge round every part first, then the paper, so the
  // palm and fingers join as one paper hand and each finger keeps its edge.
  const skin = (g: Bit[], i: number) => {
    const s = g.filter((q) => q.skin)
    if (!lit || !s.length) return null
    const fills = s
      .filter((q) => !q.w)
      .map((q) => q.d)
      .join('')
    const strokes = s.filter((q) => q.w)
    return (
      <g key={`k${i}`}>
        {fills && <path d={fills} fill={INK} stroke={INK} strokeWidth={HAND_EDGE * 2} />}
        {strokes.map((q, j) => one(q, INK, HAND_EDGE * 2, `ke${j}`))}
        {fills && <path d={fills} fill={PAPER} />}
        {strokes.map((q, j) => one(q, PAPER, 0, `kp${j}`))}
      </g>
    )
  }
  return (
    <g transform={transform} strokeLinecap="round" strokeLinejoin="round">
      <path
        d={haloShapes.map((q) => q.d).join('')}
        fill={EDGE}
        stroke={EDGE}
        strokeWidth={n(halo * 2)}
      />
      {[...haloLimbs].map(([w, d]) => (
        <path key={w} d={d} fill="none" stroke={EDGE} strokeWidth={w} />
      ))}
      {placed.map((q, i) => one(q, EDGE, halo * 2, `h${i}`))}
      {groups.map((g, i) => [
        ...g.map((q, j) => (q.sep ? one(q, EDGE, q.sep * 2, `s${i}-${j}`) : null)),
        ...g.map((q, j) => one(q, q.ink ? INK : FG, 0, `f${i}-${j}`)),
        skin(g, i),
      ])}
      {cuts && <path d={cuts} fill={EDGE} />}
      {face}
      {late.map((g, i) => [
        ...g.map((q, j) => (q.sep ? one(q, EDGE, q.sep * 2, `ls${i}-${j}`) : null)),
        ...g.map((q, j) => one(q, q.ink ? INK : FG, 0, `lf${i}-${j}`)),
        skin(g, groups.length + i),
      ])}
      {children}
    </g>
  )
}

/**
 * One of the people of the play, cut from the block: placed with its feet at
 * `at`, scaled by `scale` (on top of the person's own size), and turned to
 * face left with `flip`. `children` are drawn last, in the figure's own frame
 * (a torch, a letter held in the hand).
 */
export function Person({
  pose,
  at,
  scale = 1,
  flip = false,
  children,
}: {
  pose: Pose
  at: P
  scale?: number
  flip?: boolean
  children?: ReactNode
}) {
  const { groups, late, cuts, headT, hat, hilt: swordHilt } = build(pose)
  const look = pose.look
  const s = scale * SIZE[look]
  const eye = pose.eye ?? 'open'
  const mouth = pose.mouth ?? 'shut'
  const woman = WOMEN.includes(look)
  const lit = look !== 'othello'
  const transform = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`
  const hatAgain = hat && (
    <>
      <path d={hat.d} fill={INK} />
      {look === 'roderigo' && (
        <>
          <path d={RODERIGO_FEATHER} fill={INK} />
          <path d={RODERIGO_FEATHER_CUTS} fill={PAPER} />
        </>
      )}
      <path d={hat.cut} fill={PAPER} />
    </>
  )
  let face: ReactNode
  if (!lit) {
    face = (
      <g transform={headT}>
        <path
          d={OTHELLO_TEMPLE + OTHELLO_EAR + (mouth === 'joy' ? JOY : OTHELLO_LIPS)}
          fill="none"
          stroke={PAPER}
          strokeWidth={1}
        />
        <path d={OTHELLO_BROW + OTHELLO_LIGHT} fill={PAPER} />
        {eye === 'open' && (
          <>
            <path d={OTHELLO_EYE} fill={PAPER} />
            <circle cx={OTHELLO_IRIS[0]} cy={OTHELLO_IRIS[1]} r={OTHELLO_IRIS[2]} fill={INK} />
          </>
        )}
        {eye === 'down' && <path d={OTHELLO_EYE_DOWN} fill={PAPER} />}
        <path d={RUFF} fill={PAPER} stroke={INK} strokeWidth={0.8} />
      </g>
    )
  } else {
    const faceD = look === 'emilia' ? FACE_COIFED : woman ? FACE_WOMAN : FACE_MAN
    const whiteBeard = look === 'brabantio' ? FULL_BEARD : undefined
    const greyBeard =
      look === 'senator' || look === 'montano' || look === 'gratiano' ? OLD_BEARD : undefined
    face = (
      <g transform={headT}>
        <path d={faceD} fill={PAPER} stroke={INK} strokeWidth={FACE_EDGE} />
        {pose.flush && (
          <path d={FLUSH} fill="none" stroke={RED} strokeWidth={1.6} strokeLinecap="round" />
        )}
        {woman ? (
          <>
            <path d={(eye === 'down' ? LIT_EYE_W_DOWN : '') + LIT_BROW_W} fill={INK} />
            {eye === 'open' && (
              <>
                <path d={LIT_EYE_W} fill="none" stroke={INK} strokeWidth={0.9} />
                <circle cx={LIT_IRIS_W[0]} cy={LIT_IRIS_W[1]} r={LIT_IRIS_W[2]} fill={INK} />
              </>
            )}
            <path
              d={
                LIT_LINES_W +
                (mouth === 'joy' ? JOY_W : LIT_MOUTH_W) +
                (look === 'emilia' ? '' : LIT_EAR_W)
              }
              fill="none"
              stroke={INK}
              strokeWidth={0.9}
            />
          </>
        ) : (
          <>
            <path d={(eye === 'down' ? LIT_EYE_DOWN : '') + LIT_BROW} fill={INK} />
            {eye === 'open' && (
              <>
                <path d={LIT_EYE} fill="none" stroke={INK} strokeWidth={0.9} />
                <circle cx={LIT_IRIS[0]} cy={LIT_IRIS[1]} r={LIT_IRIS[2]} fill={INK} />
              </>
            )}
            <path
              d={
                LIT_LINES +
                (mouth === 'shut'
                  ? LIT_MOUTH
                  : mouth === 'smile'
                    ? LIT_SMILE
                    : mouth === 'joy'
                      ? JOY
                      : '')
              }
              fill="none"
              stroke={INK}
              strokeWidth={1}
            />
            {mouth === 'open' && <path d={LIT_MOUTH_OPEN} fill={INK} />}
          </>
        )}
        {look === 'cassio' && (
          <>
            <path d={CASSIO_HAIR} fill={INK} />
            <path d={CASSIO_CURLS} fill={PAPER} />
            <path d={CASSIO_BEARD} fill={INK} />
            <path d={CASSIO_BEARD_CUTS} fill={PAPER} />
          </>
        )}
        {look === 'lodovico' && <path d={LODOVICO_BEARD} fill={INK} />}
        {(look === 'brabantio' || look === 'gratiano') && (
          <>
            <path d={hat ? WHITE_HAIR : WHITE_CROWN} fill={PAPER} stroke={INK} strokeWidth={1} />
            <path
              d={hat ? WHITE_HAIR_STRANDS : WHITE_CROWN_STRANDS}
              fill="none"
              stroke={INK}
              strokeWidth={0.8}
            />
          </>
        )}
        {whiteBeard && (
          <>
            <path d={whiteBeard} fill={PAPER} stroke={INK} strokeWidth={1.1} />
            <path d={FULL_BEARD_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
          </>
        )}
        {greyBeard && (
          <>
            <path d={greyBeard} fill={PAPER} stroke={INK} strokeWidth={1.1} />
            <path
              d="M15 10C16 17 15 24 12 30M11.5 18C12 23 11 27 9.5 30.5"
              fill="none"
              stroke={INK}
              strokeWidth={0.8}
            />
          </>
        )}
        {look === 'desdemona' && (
          <>
            <path d={pose.loose ? HAIR_LOOSE_CUTS : HAIR_UP_CUTS + HAIR_BAND} fill={PAPER} />
            {!pose.loose && (
              <path d={HAIR_KNOT_LINES} fill="none" stroke={PAPER} strokeWidth={0.9} />
            )}
          </>
        )}
        {look === 'bianca' && <path d={KERCHIEF_CUT} fill={PAPER} />}
        {look === 'emilia' && <path d={COIF_BORDER} fill="none" stroke={PAPER} strokeWidth={1.6} />}
        {hatAgain}
        {woman ? null : <path d={RUFF} fill={PAPER} stroke={INK} strokeWidth={0.8} />}
      </g>
    )
  }
  return (
    <Cut
      groups={groups}
      late={late}
      cuts={cuts || undefined}
      lit={lit}
      tone={pose.shirt ? 'paper' : 'ink'}
      transform={transform}
      face={face}
    >
      {swordHilt && <path d={swordHilt} fill={PAPER} stroke={INK} strokeWidth={0.8} />}
      {look === 'roderigo' && (
        // his purse at the girdle: "put money in thy purse"
        <path
          d="M8.6 -79.4C6.4 -76 6 -70.6 7.6 -67C9.6 -63.6 15.8 -63.6 17.6 -67C19 -70.6 18.4 -76 16 -79.4Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1}
        />
      )}
      {children}
    </Cut>
  )
}

/** The angle, in degrees, from a to b: for placing held things. */
export const angleOf = (a: P, b: P) => (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI

/** A point `d` along the direction `a` (degrees) from `p`. */
export const along = (p: P, a: number, d: number): P => [
  p[0] + Math.cos(deg(a)) * d,
  p[1] + Math.sin(deg(a)) * d,
]
