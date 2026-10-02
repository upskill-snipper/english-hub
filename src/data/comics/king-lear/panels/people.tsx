import type { ReactNode } from 'react'

import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { deg, gouge, n, wedge } from '@/components/comics/linocut/carve'

import {
  CutFigure,
  doublet,
  gown,
  hand,
  limb,
  shoe,
  warningHand,
  type P,
  type Part,
  type Piece,
} from '../../romeo-and-juliet/panels/verona-kit'
import {
  EYE,
  EYE_DOWN,
  FULL_BEARD,
  FULL_BEARD_STRANDS,
  HEAD_GIRL,
  HEAD_MAN,
  HEAD_WOMAN,
  OLD_BEARD,
  OLD_STRANDS,
  VEIL,
  WHITE_BROW,
  pointingHand,
} from '../../romeo-and-juliet/panels/acts-3-4-kit'
import {
  CIRCLET,
  HEAD_YOUTH,
  cloak,
  cloakCuts,
  endAngle,
  mitt,
} from '../../much-ado-about-nothing/panels/people'
import {
  CROWN_SHINE,
  OLD_FRINGE,
  OLD_FRINGE_STRANDS,
  gripHand,
} from '../../julius-caesar/panels/people'
import {
  CROWN,
  CROWN_BAND,
  EAR,
  MIRANDA_FALL,
  MIRANDA_FALL_STRANDS,
  MIRANDA_HAIR,
  MIRANDA_LOCK,
  MIRANDA_LOCK_CUT,
  bareFoot,
} from '../../the-tempest/panels/people'
import { HAIR_SHORT } from '../../the-merchant-of-venice/panels/people'

export {
  CutFigure,
  hand,
  limb,
  mitt,
  endAngle,
  gripHand,
  pointingHand,
  warningHand,
  EYE,
  EYE_DOWN,
  HEAD_MAN,
  HEAD_WOMAN,
  type P,
  type Part,
  type Piece,
}

/**
 * THE PEOPLE OF LEAR'S BRITAIN: one figure kit for every King Lear panel, so
 * that a student meets the same Lear, the same Gloucester, the same Kent and
 * the same three daughters from the love test to the last scene. Draw every
 * recurring character with `Person` (or, for a pose it cannot make, with the
 * heads and pieces below), never with a new outline. A change here changes
 * every panel that uses it: preview them all before changing one. Cut first
 * for the panels of moments 1 to 5 (Act 1, Scenes 1 to 5), with every one of
 * the play's recurring people, so that the artists of the later moments find
 * them here. An artist who needs a person or a garment not here (Edgar armed
 * for the duel, Lear crowned with weeds, the Captain, the Herald) adds it below
 * in the same way, and says so in this docblock.
 *
 * The cutting tools (CutFigure, the open hand with its fingers apart, the
 * gown, the shoe, the doublet that cuts every tunic here) are the Romeo and
 * Juliet kit's (../../romeo-and-juliet/panels/verona-kit.tsx), the hand at
 * rest and the short cloak the Much Ado kit's, the hand closed round something
 * held and the old man's fringe of white hair the Julius Caesar kit's, the
 * king's crown, the bare foot and a girl's long loose hair the Tempest kit's,
 * imported, not copied, so one hand cuts every Shakespeare play on the site.
 * A figure is cut as the reference panel cuts Fred
 * (src/data/comics/a-christmas-carol/counting-house.tsx): a paper halo round
 * every part, so it reads as one black shape with one carved outline, then
 * the parts in ink, then the paper cuts of folds and features. `Person` builds
 * it from a pose in its own frame: facing right, feet at (0, 0), a man about
 * 182 units tall, the neck at (0, -138), the hip at (0, -70) (the waist at
 * (0, -90) for a man in a long gown) and the head centred on (3, -160). Place
 * it with `at`, `scale` and `flip` (to face left). A leaning or kneeling
 * figure moves its `body` (neck and hip) and gives its `legs`; a figure in a
 * long gown sits with `seated`. The near arm is cut last, after the face, the
 * beard and the collar, so a hand raised before the body is always in front.
 *
 * ── THIS PLAY'S OWN RULES, which every panel keeps ─────────────────────────
 * - GLOUCESTER'S EYES. The blinding (3.7) is never shown and never implied by
 *   hands near his face, and its panel has no red at all: draw the moment
 *   before (bound in his chair, with `seated`, Cornwall and Regan over him,
 *   the servant who will defend him) or the moment after. From then on,
 *   every panel draws him with `blind`: a plain cloth band tied over his eyes
 *   (BLIND_BAND), and nothing beneath it, no wound and no red, ever. No eye
 *   is cut under the band.
 * - POOR TOM (`look: 'tom'`). Edgar's own words are the brief: "my face I'll
 *   grime with filth, Blanket my loins; elf all my hair in knots, And with
 *   presented nakedness outface The winds" (2.3), and Lear's "a poor, bare,
 *   forked animal" (3.4). So he is barefoot and bare-armed, his hair long and
 *   knotted (TOM_HAIR), and always decently covered: a ragged blanket over
 *   one shoulder and wrapped round him from the chest to the knee, tied with a
 *   rope (TOM_BLANKET). The pins and nails of the Bedlam beggars in the same
 *   speech are never drawn. His madness is a disguise and is never mocked;
 *   Lear's is drawn with the same dignity. No caricature of mental illness,
 *   no wild grimace: a man in rags with his own young face.
 * - Kent in the stocks and Lear in the storm show hardship, not injury.
 * - The duel shows swords, never a wound. Goneril's and Regan's deaths and
 *   Cordelia's hanging happen off the page; at Lear's death, never Cordelia's
 *   body: if she is in the panel at all she is covered and turned away.
 * - RED is never put on a mouth or a chin: on this site it was twice read as
 *   blood (Hyde's anger, Juliet's lips beside the vial). A flush goes on the
 *   cheek (`flush`), and never on a bearded face, where it sits just above the
 *   beard and reads as a red mouth (the Twelfth Night kit found this on
 *   Orsino): Lear, Gloucester, Kent, Cornwall and France are never flushed.
 *   Nor, in this play, is any face: at panel size the cheek is a few pixels
 *   below the eye, and in the play of Gloucester's eyes a red mark by an eye
 *   reads on a phone as a hurt eye. Albany's anger in "Albany turns" was
 *   first printed as a flush, and the review of 2 October 2026 took it off;
 *   `flush` is kept for the kit's shape, and no panel uses it.
 *
 * ── WHAT THE PLAY SAYS OF THEM, and so what is drawn ────────────────────────
 * (the held edition, src/data/full-texts/king-lear.ts, Project Gutenberg
 * #1532). The play is set in a Britain older than history: its people swear
 * by Apollo, Jupiter and Hecate. So where the play is silent a person is
 * drawn plainly in the dress of that old Britain, with no doublets, ruffs or
 * rapiers: long gowns for the old, belted tunics to the knee (or, for the
 * great lords, to the calf) over hose, cloaks, and straight swords with a
 * cross hilt. Where a mark is invented only to tell two people apart, this
 * says so. Nothing is taken from a film, television or stage production.
 *
 * - LEAR is "Fourscore and upward" (4.7). His hair is white, "tears his white
 *   hair" (3.1), "Singe my white head" (3.2), "these white flakes" (4.7), and
 *   the Fool mocks "thy bald crown" (1.4). He has a beard: "Art not asham'd to
 *   look upon this beard?" (2.4), and it is white ("white hairs in my beard",
 *   4.6). So his crown is bald, with a glint of light on it, and his white
 *   hair falls from the temple round the back of his head to his shoulders
 *   (LEAR_HAIR), with a long white beard to his chest (LEAR_BEARD), a white
 *   brow and the lines of age, as the portrait of him cuts him
 *   (../portraits/king-lear.tsx). He wears a long dark gown with a collar of
 *   fur, "Robes and furr'd gowns" (4.6), and at court a mantle edged with fur
 *   (`mantle`). In the love test he still wears the crown that he gives away
 *   in the same scene ("This coronet part between you. [Giving the crown.]"),
 *   so `crown` is for that scene alone; after it he goes bareheaded. The
 *   crown is printed in the spot colour, on his head and in his sons-in-law's
 *   hands (BritainCrown), because it is what that scene is about.
 *   In 4.6 he comes in "fantastically dressed up with flowers", "Crown'd with
 *   rank fumiter and furrow weeds, With harlocks, hemlock, nettles,
 *   cuckoo-flowers" (4.4): `weeds` crowns his bare head with them
 *   (LEAR_WEEDS), a twist of stems with the weeds growing out of it every
 *   way, in ink with a paper edge, and the white flowers of hemlock and
 *   cuckoo-flower in paper. Never red: red on a head reads as a wound. (Added
 *   with moment 17, "Reason in madness".)
 * - GLOUCESTER is "the old man" (3.3), and his beard is white: "So white, and
 *   such a traitor!" (3.7), "These hairs which thou dost ravish from my chin"
 *   (3.7). So he has a white beard, shorter than Lear's (the Romeo and Juliet
 *   kit's FULL_BEARD), white hair at the nape, and a soft round cap
 *   (GLOUCESTER_CAP, invented only so that the two old men are never taken
 *   for each other), over an earl's long gown. `blind`: see above.
 * - KENT has "years on my back forty-eight" (1.4), and Oswald and he both name
 *   "his grey beard" (2.2). So his beard is grey: cut in paper and thick with
 *   ink strands (KENT_BEARD), between Lear's white and the dark beards of the
 *   younger men, and his short hair is grey with it. At court (1.1) he is an
 *   earl in a long tunic, a cloak and a sword ('kent'). From 1.4 he is in
 *   disguise: "If but as well I other accents borrow ... For which I rais'd
 *   my likeness", "A very honest-hearted fellow, and as poor as the King"
 *   (1.4). So 'caius' is the same man, the same grey beard, in a plain short
 *   tunic with a hood drawn up over his head (CAIUS_HOOD), and no sword.
 * - GONERIL, the eldest. Lear sees her "frontlet" (1.4), "Methinks you are
 *   too much of late i' the frown", and her "brow of youth" (1.4); "Her eyes
 *   are fierce" (2.4). So she frowns (`frown` is her default), and wears what
 *   Lear's word names: a band across the brow (GONERIL_FRONTLET), over a long
 *   dark veil, as a married woman (VEIL).
 * - REGAN, wife of Cornwall. Lear believes her eyes "Do comfort, and not
 *   burn" (2.4); the play says no more of her looks. So she goes unveiled, her
 *   dark hair drawn back under a band into a knot at the nape (REGAN_HAIR),
 *   invented only to tell the sisters apart at a glance: one veil, one knot.
 * - CORDELIA is the youngest, "the last and least" (1.1), "that
 *   little-seeming substance" (1.1), "So young" (1.1), and to France "Fairest
 *   Cordelia" (1.1). So she is drawn smallest of the three, a girl's head
 *   (HEAD_GIRL) with her hair long and loose down her back, unmarried, and,
 *   for "Fairest", the one face and the one head of hair in the play cut in
 *   PAPER, lit, with her features cut back into them in ink, over a dark gown:
 *   the light in a dark court. As Queen of France (4.7 on) she may wear a
 *   circlet (`crown`), printed in ink on her fair hair.
 *   WHY NOT ALL IN PAPER (2 October 2026). She was first cut wholly in paper,
 *   as the Romeo and Juliet kit cuts Juliet; at panel size, among ink figures,
 *   she read as a ghost or a statue, the way this site cuts its spirits, and
 *   her folded arms as a white staff across her body.
 * - THE FOOL. Lear calls him "my boy", "lad", "my pretty knave" (1.4), and
 *   "the fool hath much pined away" since Cordelia went (1.4). He offers Kent
 *   "my coxcomb" (1.4), the fool's cap, and calls himself "The one in motley"
 *   (1.4). So he is small and slight, a young man and not a child, beardless,
 *   in a coxcomb, a close cap with a crest cut like a cock's comb along its
 *   top (COXCOMB), and a coat of motley in diagonal stripes, every other one
 *   cut in paper, with hose of two colours. Stripes, not the squares of
 *   Twelfth Night's Feste or the lozenges of the Tempest's Trinculo, so the
 *   site's three fools are not one coat. No bells, no ass's ears.
 * - EDMUND is "so proper" (Kent, 1.1), and says it himself: "my dimensions
 *   are as well compact, My mind as generous, and my shape as true" (1.2).
 *   Nothing else is said of his looks. A handsome young man, clean-shaven,
 *   with a head of short dark curls (EDMUND_HAIR), a short cloak and a sword;
 *   `mouth: 'smile'` gives him a knowing smile. The curls are invented only to
 *   tell him from his brother.
 * - EDGAR is the elder brother, "a brother noble" (1.2), not described: a
 *   clean-shaven young man whose dark hair falls straight to his shoulders
 *   (EDGAR_HAIR), the same hair that he will "elf ... in knots" as Poor Tom,
 *   in a plain tunic. As Tom, see above.
 * - CORNWALL: "the fiery quality of the Duke", "The fiery Duke" (2.4). So he
 *   frowns, and has a dark pointed beard (CORNWALL_BEARD), invented only to
 *   tell the two dukes apart; a long tunic, a cloak and a sword.
 * - ALBANY: "our mild husband" (4.2), "This milky gentleness" (1.4). So his
 *   face is mild and clean-shaven, his dark hair to the jaw (ALBANY_HAIR); a
 *   long tunic, a cloak and a sword.
 * - FRANCE is "great king" (1.1), and wears a crown (the Tempest kit's CROWN,
 *   which its King wears), with a short dark beard and a long cloak.
 *   BURGUNDY, a duke, wears a soft bonnet (BURGUNDY_CAP). Neither is
 *   described; the crown and the bonnet tell them apart.
 * - OSWALD is Goneril's steward ("Enter Goneril and Oswald, her steward",
 *   1.3), and Kent calls him "three-suited", "worsted-stocking", "finical"
 *   (2.2): neat and fussy. So a neat short tunic, a small flat cap
 *   (OSWALD_CAP), and the steward's chain of office across his chest, cut in
 *   paper (STEWARD_CHAIN).
 * - LEAR'S KNIGHTS ('knight') and the servants and gentlemen ('servant') are
 *   not described: a knight wears a cloak and a sword and a short beard, a
 *   servant a plain tunic, bareheaded and clean-shaven. THE OLD MAN who leads
 *   Gloucester in 4.1 has been his tenant "these fourscore years" ('old-man'):
 *   bald and white-bearded in a plain long gown.
 *
 * Added for the panels of moments 21 to 23 (Act 5, Scene 3):
 * - ARMED FOR THE DUEL. "Enter Edgar, armed" and "Thou art arm'd, Gloucester"
 *   (Albany to Edmund). `armed` turns a man's tunic into a mail shirt: the same
 *   outline, with rows of rings cut in paper across it (mailRings). Edgar comes
 *   unknown, "Know my name is lost", so `helm` shuts his head in a closed helm
 *   (HELM), with nothing cut in it but the slit for his eyes, a band and two
 *   rows of breathing holes (HELM_CUTS): no face, no hair. Plain steel of that
 *   old Britain, not any production's. Edmund fights bareheaded, so he is known
 *   by his curls; Edgar, his name told, goes bareheaded after the fight.
 *
 * Added for the panels of moments 6 to 10 (Act 2, Scene 1 to Act 3, Scene 2):
 * - SEATED IN A TUNIC. "Put in his legs" (2.2): Kent sits on the bench of the
 *   stocks with his legs out before him. A tunic hung from the hip falls
 *   straight to the ground from a seated man and reads as a long gown, so a
 *   man in a tunic given `seated` (with his `body` and `legs`) has his tunic
 *   stop at the belt and its skirt laid over his thighs (lapSkirt).
 *
 * HANDS. Every open hand is `hand`'s, with four fingers and a thumb cut
 * apart, fanned 18 degrees, so it reads as an open hand at panel size and
 * never as a fist; a pointing hand has one long finger and the rest curled; a
 * hand at rest is a small closed mitten; a hand round a letter, a hilt or a
 * staff is `grip`, which only ever closes round something held. No hand is
 * raised flat on a straight arm: at panel size that reads as a salute.
 */

const pt = (p: P) => `${n(p[0])} ${n(p[1])}`

// ── Heads, hair and hats, in profile facing right, centred on (0, 0) ────────
// The head shapes are the shared ones: HEAD_MAN for the men, HEAD_YOUTH for
// the young men and the Fool, HEAD_WOMAN for Goneril and Regan, HEAD_GIRL for
// Cordelia. Crown near y -20, chin near y 18, the base of the neck at y 22.

/**
 * Lear's white hair: the crown bald, and the hair beginning at the temple and
 * round the back of the head at the level of the ear's top, falling behind the
 * ear and the neck to the shoulders, its ends in locks. Paper, with ink
 * strands (LEAR_HAIR_STRANDS). Set in from the head's outline at the back, as
 * the Tempest kit sets Prospero's, because white on the very edge of a black
 * head merges with the paper halo and reads as outline, not hair; with his
 * beard, a fall to the shoulders reads as an old man's hair and not a hood.
 */
export const LEAR_HAIR =
  'M5.6 -6.6C0 -7 -6 -7.8 -12.8 -8.6C-15 -4.6 -15.2 1 -14.6 7C-14.2 12 -13.8 17 -13.8 23L-11.8 20.6L-10.6 26L-8.6 21.2L-6.8 25L-6.2 18.4C-7 13.6 -7.2 9 -6.4 5.4L-4 4.6L-3.4 1.4L-0.8 0.8L0.2 -1.6L2.6 -2L3.4 -4L5.6 -3.6Z'
export const LEAR_HAIR_STRANDS =
  'M-12.2 -5C-12.6 3 -12.2 12 -11.4 20M-9.4 -6.4C-10 1 -9.8 9 -8.8 18M-5.8 -6.8C-6.4 -3.6 -6.6 -0.4 -6.2 2.6'
/** "this thin helm" (4.7): one thin strand of white across the bald crown, beside its glint. */
export const LEAR_WISP = 'M9.4 -15.4Q1.6 -19.6 -10.4 -11.4'
/**
 * His long white beard, from in front of the ear round the jaw, over the
 * corners of the mouth, falling in locks to a point on his chest. Paper, with
 * an ink edge and ink strands (LEAR_BEARD_STRANDS). Twice the length of
 * Gloucester's, so the King is known at a glance.
 */
export const LEAR_BEARD =
  'M-2 2C-4.4 12 -4 23 -1.4 33C0.8 41 4.4 49 8.8 56C11.6 51.6 14.4 45 16.6 37C18.8 29 19.8 21 19.2 15C18.9 12.8 18.2 11.4 17.2 10.6L17.6 8.4L14 7.4C12.4 9.4 12 11.6 13.6 13.2C11 14.6 7.6 14.6 5 13C2.6 10 0.6 6 -2 2Z'
export const LEAR_BEARD_STRANDS =
  'M2.6 16C3.6 28 6 40 8.8 51M8.4 16.6C10 27 11.6 37 12.8 45M14.4 16.4C15.6 23 16.2 30 16 36M-0.6 12C-0.6 21 0.6 29 3 37'
/** Age, cut in paper: a crease at the eye and two lines across the brow. */
export const LEAR_LINES =
  gouge(5.4, -2.6, 1.6, -0.6, 0.45, 0.3) +
  gouge(8.6, -12.2, 14.4, -12.6, 0.5, 0.2) +
  gouge(7.4, -14.8, 12.6, -15.4, 0.45, 0.2)

/**
 * Lear's crown of weeds (4.6, `weeds`): a twist of stems round the head above
 * the brow (its turns cut in paper), with the weeds Cordelia names growing out
 * of it every way, unruly, never in a ring of points: broad leaves of nettle
 * and harlock standing up and drooping, ink with a paper edge and a paper
 * midrib (LEAR_WEEDS_RIBS); two thin spikes of darnel; the white flowers in
 * it, two little umbrellas of hemlock and two four-petalled cuckoo-flowers
 * (LEAR_WEEDS_FLOWERS, paper with an ink edge); and a stem trailing down over
 * his white hair behind. In the head's frame.
 *
 * WHY SO UNTIDY (2 October 2026). Its first cut was seven broad leaves standing
 * evenly round a band, with round white flowers between them: at panel size it
 * read as a jewelled crown of points, and on a phone as a crown of thorns. The
 * text's crown is a madman's handful of field weeds.
 */
const WEED_LEAVES: [number, number, number, number, number][] = [
  [-13, -11.4, -24, -17, 3.4],
  [-16.4, -8.6, -24, -1, 3],
  [-7, -14, -10, -25, 3.2],
  [5, -15.6, 6, -24.6, 2.8],
  [11.6, -14.6, 22, -20, 3.4],
  [15.4, -12.6, 23.6, -7.6, 2.8],
  [-19, 2, -26, 9, 2.6],
]
/** The twist of stems: a band round the head, and a stem trailing down behind. */
const WEED_BAND =
  'M-17.6 -10.6C-9 -16.4 4 -18 17 -15L16.6 -11C4 -13.8 -8 -12.4 -16.4 -7.4Z' +
  'M-16.6 -8.6C-19.6 -4 -20.6 2 -19.8 9L-18 9C-18.4 3 -17.6 -2.6 -14.8 -7.4Z'
/** The darnel: two thin spikes of grass, each with its grains cut along it. */
const DARNEL = wedge(-2, -15.8, -4.6, -31, 1.8, 0.6) + wedge(9, -15.6, 14, -29, 1.8, 0.6)
export const LEAR_WEEDS =
  WEED_BAND + DARNEL + WEED_LEAVES.map(([a, b, c, d, w]) => gouge(a, b, c, d, w)).join('')
export const LEAR_WEEDS_RIBS =
  WEED_LEAVES.map(([a, b, c, d]) =>
    gouge(a + (c - a) * 0.15, b + (d - b) * 0.15, a + (c - a) * 0.8, b + (d - b) * 0.8, 0.45),
  ).join('') +
  gouge(-12, -14.4, 10, -15.6, 0.5, -1) +
  'M-6 -16.6l1.4 3.2M2 -17.4l1.2 3.2M10 -16.6l1 3.2'
/** A hemlock umbel: a short stalk, five rays and a white dot at the end of each. */
function umbel(x: number, y: number, a: number): string {
  const tip: P = [x + Math.cos(deg(a)) * 5, y + Math.sin(deg(a)) * 5]
  let d = `M${n(x - 0.7)} ${n(y)}L${n(tip[0] - 0.5)} ${n(tip[1])}L${n(tip[0] + 0.5)} ${n(tip[1])}L${n(x + 0.7)} ${n(y)}Z`
  for (let k = -2; k <= 2; k++) {
    const b = deg(a + k * 26)
    const e: P = [tip[0] + Math.cos(b) * 4.6, tip[1] + Math.sin(b) * 4.6]
    d += `M${n(e[0] - 1.5)} ${n(e[1])}a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0Z`
  }
  return d
}
/** A cuckoo-flower: four round petals about a point. */
function cuckooFlower(x: number, y: number): string {
  return [
    [0, -2.2],
    [2.2, 0],
    [0, 2.2],
    [-2.2, 0],
  ]
    .map(([dx, dy]) => `M${n(x + dx - 1.9)} ${n(y + dy)}a1.9 1.9 0 1 0 3.8 0a1.9 1.9 0 1 0 -3.8 0Z`)
    .join('')
}
export const LEAR_WEEDS_FLOWERS =
  umbel(-11, -14, -112) + umbel(14, -15, -58) + cuckooFlower(1, -18.6) + cuckooFlower(-19, -8)

/**
 * Gloucester's soft round cap, over the crown to the brow, its rolled band and
 * one fold cut in paper (GLOUCESTER_CAP_CUT). Invented only so that the two
 * old men are told apart: Lear goes bareheaded, Gloucester capped.
 */
export const GLOUCESTER_CAP =
  'M-17.6 -7.8C-19.8 -14 -16.6 -22.4 -8 -26.2C0 -29.6 10 -28.2 15 -21.8C17 -18.8 17.6 -15.2 17 -10.8C6 -12.8 -6 -11.4 -17.6 -7.8Z'
export const GLOUCESTER_CAP_CUT =
  gouge(-17, -10.8, 16.8, -13.8, 1.3, -0.6) + gouge(-2, -27, -9, -13.4, 0.6, 1.4)
/** His white hair below the cap at the back of the head, its ends tufted. Paper, ink strands. */
export const GLOUCESTER_HAIR =
  'M-13.6 -6.6C-16.4 0 -16.2 8 -13.8 15.6L-11.8 13.4L-10.2 17.4L-8.6 13.2C-9.8 7.6 -9.8 1.4 -8.4 -4.4Z'
export const GLOUCESTER_HAIR_STRANDS = 'M-12.2 -3C-13 3 -12.6 9 -11.6 13.4'

/**
 * The plain cloth band tied over Gloucester's eyes from 3.7 on: paper with an
 * ink edge, from the back of the head over the brow and the bridge of the
 * nose, knotted at the back with its two ends hanging (BLIND_KNOT), and one
 * fold along it in ink (BLIND_FOLD). Nothing is drawn under it: no eye, no
 * wound, no red. In the head's frame.
 */
export const BLIND_BAND = 'M-16.6 -7.8C-8 -10.4 5 -11 16.4 -9.6L19 -1.6C8 -3 -5 -2.6 -16 -0.6Z'
export const BLIND_KNOT =
  'M-16.2 -7.6C-19.6 -8.6 -22 -6.4 -21.4 -3.6C-20.8 -1.4 -18.2 -0.8 -16.2 -2.2Z' +
  'M-20 -2.6C-22 1.4 -22.6 5.4 -22 9.4L-19.6 9.2C-19.8 5.4 -19.2 1.8 -17.8 -1.4Z' +
  'M-17.4 -1.8C-17.6 2.4 -16.8 6.4 -15.4 9.8L-13.4 8.8C-14.6 5.4 -15 2 -14.8 -1.2Z'
export const BLIND_FOLD = 'M-12.6 -4.6Q1 -6.8 16.6 -5.6'

/**
 * Kent's grey beard, full and trimmed round, from in front of the ear to below
 * the chin, with the moustache. Paper with an ink edge, and so many ink
 * strands (KENT_BEARD_STRANDS) that it prints grey: between Lear's white and
 * the dark beards of the younger men. "Spare my grey beard" (2.2).
 */
export const KENT_BEARD =
  'M-2 2C-3.6 9 -3 16 -0.4 22C2.4 28 6.6 31.6 11.4 31.4C15.6 30.4 18.6 26 19.2 20.4C19.6 16.4 18.8 12.8 17.2 10.6L17.6 8.4L14 7.4C12.4 9.4 12 11.6 13.6 13.2C11 14.6 7.6 14.6 5 13C2.6 10 0.6 6 -2 2Z'
export const KENT_BEARD_STRANDS =
  'M0.4 7.6C0.8 13.6 2.2 19.4 4.4 24.4M3.4 13.4C4.4 19 6.4 24.4 9 28.6M6.8 14.6C8 20.6 9.8 25.8 12 29.6' +
  'M10.4 15C11.6 20.6 13.2 25 14.8 28.2M13.8 14.4C15 19 16.2 22.6 17.2 25.4M16.6 12.6C17.4 15.8 18 18.6 18.4 21' +
  'M14.6 9.6L17.4 9.8'
/**
 * His short grey hair, cut in paper on the ink head: the hairline from the brow
 * round in front of the ear to the nape, the ear, and more strands than a dark
 * head has, so it prints grey. Stroke in PAPER, about 1.1.
 */
export const KENT_HAIR =
  'M13.4 -12.6C6.4 -11.6 1.6 -8.4 -0.2 -3C-1.2 1.2 -2.6 4.6 -5.8 7.4' +
  'M-1.4 -3.2C-4.4 -3.8 -5.8 0 -4 3.2C-3 4.6 -1.4 4.2 -1 2.8' +
  'M-13.6 -6C-9.6 -14 -2 -18.4 9 -16.4M-12.8 1C-9.6 -7.4 -3.4 -12.4 4.4 -13.2' +
  'M-14.6 6C-13 -2 -8 -8 -2 -9.6M-9.6 -15.8C-4.6 -18.8 2 -19.6 8 -19'
/**
 * Kent's hood, as Caius: drawn up over his head and close round his face,
 * falling to a short cape at the neck. Ink, with its edge round the face cut
 * in paper (CAIUS_HOOD_EDGE, a stroke) and two folds (CAIUS_HOOD_CUTS). His
 * grey beard shows in front of it, so he is known.
 */
export const CAIUS_HOOD =
  'M15.8 -10.4C13.8 -21.6 2.4 -26.8 -8.4 -24.4C-18 -22.2 -23.4 -13.6 -23.4 -2.6C-23.4 8 -23.2 18 -26.8 29C-18 33 -6 34.4 8.6 31.6C4 26 2 17.6 2.4 8C2.8 -1 7.6 -7.6 15.8 -10.4Z'
export const CAIUS_HOOD_EDGE = 'M15.6 -10C8.6 -7.6 3.6 -1.6 2.6 6.6C1.8 15 3.4 23 7.6 30'
export const CAIUS_HOOD_CUTS =
  gouge(-10, -21.6, -19.4, 2, 0.8, 2.2) + gouge(-8, 10, -18.6, 28.6, 0.9, 1.2)

/**
 * Cornwall's dark pointed beard, with the moustache: ink, as part of the
 * figure, its strands and the line of the mouth cut in paper
 * (CORNWALL_BEARD_CUTS), because a dark beard left uncut reads only as a
 * longer chin.
 */
export const CORNWALL_BEARD =
  'M-2 2C-3.6 10 -2 17 1.6 22C5 27 9.6 30.6 14 33C15.6 28 17.6 23 18.6 18C19.2 14.6 18.6 12 17.2 10.6L17.6 8.4L14.4 7.6C13 9.6 12.6 11.4 13.8 13C11 14.2 7.6 14 5 12.6C2.6 10 0.6 6 -2 2Z'
export const CORNWALL_BEARD_CUTS =
  gouge(-0.4, 6, 4, 19, 0.75, -0.8) +
  gouge(4.6, 13.4, 9.4, 26, 0.8, -0.6) +
  gouge(9.6, 14.4, 13.2, 28.6, 0.75, -0.3) +
  gouge(14.6, 13.6, 16.6, 22.6, 0.6, -0.2) +
  gouge(13.4, 10.4, 17.8, 9.8, 0.55)
/** Anger: the brow drawn down towards the nose, cut in paper. */
export const FROWN = gouge(5.4, -9.6, 15.8, -5.4, 1.3, -0.3)
/** Goneril's frown, for a woman's head. */
export const FROWN_W = gouge(4.8, -9.2, 14.6, -5.6, 1.2, -0.3)

/**
 * France's short dark beard, rounded along the jaw: ink, its strands cut in
 * paper. Lear's knights wear the same.
 */
export const SHORT_BEARD =
  'M-1.6 3C-3 10 -1.6 16 2 20.4C5.4 24.4 10 25.6 14 24C17.6 22.4 19 18.6 18.4 14.6L17.6 10.4L16.6 10C15 11.8 12.6 12.6 10 12C6.6 11 3 7.6 -1.6 3Z'
export const SHORT_BEARD_CUTS =
  gouge(1, 7, 5, 19, 0.7, -0.6) +
  gouge(6.6, 13.4, 9.6, 22.4, 0.7, -0.4) +
  gouge(11.6, 14, 14, 22, 0.6, -0.2)

/** A scalloped mass of hair round a head, from `a0` to `a1` degrees about (cx, cy). */
function curls(
  cx: number,
  cy: number,
  r: number,
  a0: number,
  a1: number,
  bumps: number,
  out: number,
) {
  const at = (a: number, rad: number): P => [
    cx + rad * Math.cos(deg(a)),
    cy + rad * Math.sin(deg(a)),
  ]
  const step = (a1 - a0) / bumps
  let p = at(a0, r)
  let d = `M${pt(p)}`
  for (let i = 0; i < bumps; i++) {
    const c = at(a0 + step * (i + 0.5), r + out)
    p = at(a0 + step * (i + 1), r)
    d += `Q${pt(c)} ${pt(p)}`
  }
  const inner = at(a1, r - 7)
  const inner0 = at(a0, r - 7)
  d += `L${pt(inner)}A${n(r - 7)} ${n(r - 7)} 0 0 1 ${pt(inner0)}Z`
  return d
}

/**
 * Edmund's short dark curls, from the brow over the crown to the nape, in ink,
 * the curls cut in paper (EDMUND_CURLS). Invented only so that the brothers
 * are told apart: Edmund curled and cropped, Edgar's hair straight to the
 * shoulder.
 */
export const EDMUND_HAIR =
  curls(0.5, -1.5, 19.2, 128, 300, 9, 4.2) + 'M8.6 -18.2C13.4 -17.2 16 -13.4 15 -8.8L11.6 -11.2Z'
export const EDMUND_CURLS =
  'M-13.6 -12.6a2.5 2.5 0 1 1 3.3 2.5M-5.6 -18.6a2.5 2.5 0 1 1 3.3 2.5M3 -20.4a2.4 2.4 0 1 1 3.2 2.3' +
  'M-18.6 -3.2a2.4 2.4 0 1 1 3.1 2.7M-17 6.6a2.3 2.3 0 1 1 2.9 2.8M-9.6 -6.4a2.3 2.3 0 1 1 3.1 2.1'
/** A knowing smile: the line of the mouth hooked up at its corner, cut in paper. */
export const SMILE = 'M11.4 10.6Q13.4 13.2 17 10.8'
/** An open mouth, calling out: a paper notch between the lips. */
export const OPEN_MOUTH = 'M17.2 8.2L13.2 8.8L16.6 10.2Z'

/**
 * Edgar's dark hair, straight to his shoulders and swept back from the brow,
 * in ink, its strands cut in paper (EDGAR_STRANDS) with the ear below it
 * (the Tempest kit's EAR): without them dark hair on a dark head reads as a
 * hood. For HEAD_YOUTH.
 */
export const EDGAR_HAIR =
  'M15.2 -11.4C12.6 -20.6 1 -25 -8.6 -21.4C-16.6 -18.4 -20.4 -9.4 -19.8 0.6C-19.4 9 -18.6 17 -19.6 25L-15.6 27L-12.6 25.4L-9.4 27.4L-8.4 21C-10.4 14.6 -11 8.4 -10.4 2C-9.6 -4.6 -5.4 -9.6 1.6 -11.2C6.4 -12.2 11 -11.6 15.2 -11.4Z'
export const EDGAR_STRANDS =
  gouge(11.6, -14.6, -3, -20.4, 0.8, 1.4) +
  gouge(9.6, -17, -12.4, -9, 0.9, 2.4) +
  gouge(2.6, -12.6, -14.6, -3, 0.85, 1.6) +
  gouge(-14.8, -4, -15.8, 22, 0.85, 0.6) +
  gouge(-11.8, 4, -12.6, 22, 0.75, 0.4)

/**
 * Edgar's closed helm for the duel (`helm`): flat-topped, shutting the whole
 * head from above the crown to below the chin, its front drawn to a ridge.
 * Ink, as a part of the figure. HELM_CUTS, in paper: the slit for the eyes,
 * the band at the brow, the ridge's edge and two rows of breathing holes, so
 * it reads as steel and not as a hood.
 */
export const HELM =
  'M-19 -14C-19 -21 -11 -25.5 0 -25.5C10 -25.5 17.5 -22 18.6 -15.4L19.6 -6.4L23.4 1.6L20.2 9.4L20 25C10.6 28.4 -8.4 28.4 -19.4 25.2Z'
export const HELM_CUTS =
  gouge(3.6, -5.4, 23.4, -4.4, 2.2, -0.2) +
  gouge(-18, -13.4, 18.2, -14.4, 0.9, -0.6) +
  gouge(18.4, 3.6, 19.4, 22.6, 0.75) +
  'M11 8a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0 -2.6 0ZM15.4 8a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0 -2.6 0Z' +
  'M11 13a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0 -2.6 0ZM15.4 13a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0 -2.6 0Z'

/**
 * Poor Tom's hair, "elf all my hair in knots" (2.3): Edgar's hair, the same
 * length, its edge broken into soft, uneven tufts over the crown and down the
 * back, and into a few hanging locks at the nape, with knots in it cut as
 * strands twisted into open loops (TOM_KNOTS) and a few strands
 * (TOM_STRANDS). Thick hair, not a mane.
 *
 * WHY ROUNDED (2 October 2026, the review). The edge was first cut as a ring
 * of points, and at panel size the points over the crown read as a crown, and
 * on a phone as a crown of thorns: the portrait (../portraits/edgar.tsx) had
 * found the same and cut soft bumps, "never spikes". The knots were paper
 * rings in a row down the back of the head, which read as rivets or pins, and
 * the pins of the Bedlam beggars are never drawn. Each tuft is now a rounded
 * lobe through the old point (TOM_TUFTS), only the locks at the nape taper,
 * and each knot is a strand twisted into an open loop with its two ends
 * trailing, a curl and not a ring. (Two strands crossed, as the portrait cuts
 * its larger tangles, read at panel size as stitches, and stitches on a head
 * read as a wound.)
 */
const TOM_TUFTS: [P, P][] = [
  // [the hollow before the tuft, the tuft's tip], from the brow over the crown to the nape
  [
    [9.4, -22.2],
    [10.6, -26.4],
  ],
  [
    [5.6, -25],
    [3.4, -29],
  ],
  [
    [-0.6, -25.4],
    [-4.4, -28.6],
  ],
  [
    [-6.6, -24.4],
    [-11.6, -26],
  ],
  [
    [-12.4, -21.4],
    [-17.4, -20.8],
  ],
  [
    [-16.6, -16.4],
    [-21.6, -13.6],
  ],
  [
    [-19.4, -9.6],
    [-23.4, -5.6],
  ],
  [
    [-20.4, -2.4],
    [-23.6, 2.6],
  ],
  [
    [-20, 5.2],
    [-22.6, 10.4],
  ],
]
export const TOM_HAIR =
  'M15.6 -11.2C14.6 -16 12.6 -19.6 9.4 -22.2' +
  TOM_TUFTS.map(([a, tip], i) => {
    // a quadratic lobe from this hollow to the next that passes through the tip
    const b: P = i + 1 < TOM_TUFTS.length ? TOM_TUFTS[i + 1][0] : [-19, 12.4]
    const c: P = [2 * tip[0] - (a[0] + b[0]) / 2, 2 * tip[1] - (a[1] + b[1]) / 2]
    return `Q${pt(c)} ${pt(b)}`
  }).join('') +
  'L-21.4 17.6L-17.6 19L-19.4 24.6L-15.4 24.4L-14.6 29.4L-11.4 26.4L-8.6 29.6L-8.4 21.6C-10.4 14.6 -11 8.4 -10.4 2C-9.6 -4.6 -5.4 -9.6 1.6 -11.2C6.4 -12.2 11 -11.6 15.6 -11.2Z'
/** The knots: at each, a strand twisted into an open loop, its ends trailing down. Stroke in PAPER, about 0.9. */
export const TOM_KNOTS = (
  [
    [-15.6, -9.4],
    [-16.4, 6.4],
    [-13.6, 18.6],
    [-4.6, -19.4],
  ] as P[]
)
  .map(
    ([x, y]) =>
      `M${n(x - 2.8)} ${n(y + 2.6)}C${n(x + 2.6)} ${n(y + 0.6)} ${n(x + 2)} ${n(y - 3.4)} ${n(x)} ${n(y - 2.6)}` +
      `C${n(x - 1.8)} ${n(y - 1.8)} ${n(x - 1)} ${n(y + 1.4)} ${n(x + 2.4)} ${n(y + 3.4)}`,
  )
  .join('')
export const TOM_STRANDS =
  gouge(10, -15.4, -8, -19, 0.7, 1.6) +
  gouge(2, -12.6, -15.6, -1, 0.8, 2) +
  gouge(-13.6, 0, -15, 16, 0.75, 0.6)

/**
 * Albany's dark hair, to the jaw, combed back from the brow, in ink with its
 * strands cut in paper (ALBANY_STRANDS) and the ear below it.
 */
export const ALBANY_HAIR =
  'M15 -11.6C12.4 -20.6 1 -25 -8.6 -21.4C-16.6 -18.4 -20.6 -9.4 -19.6 0.4C-19 6.6 -17 11.6 -14.2 15.8L-10.8 13.6L-9.6 17.4C-11.4 10.6 -11.6 4.6 -9.6 -1.4C-7.4 -7.6 -1.6 -11.4 5.4 -11.6C9 -11.8 12.4 -11 15 -11.6Z'
export const ALBANY_STRANDS =
  gouge(12, -14, -2, -20, 0.8, 1.4) +
  gouge(10, -17, -12, -9, 0.9, 2.4) +
  gouge(3, -12.4, -14, -4, 0.85, 1.6) +
  gouge(-13.4, -1, -15.4, 12, 0.8, 0.6)

/** Burgundy's soft bonnet, worn a little tilted, its band cut in paper. */
export const BURGUNDY_CAP =
  'M-18.6 -8.4C-22 -16.8 -12.6 -26.2 1.4 -26.6C14.4 -26.8 22.8 -21 21.4 -14C13.6 -11.6 -4.4 -10.4 -18.6 -8.4Z'
export const BURGUNDY_CAP_CUT = gouge(-17.4, -11, 19.6, -15.8, 0.95, -0.8)

/** Oswald's small flat cap with a turned brim, neat as a steward's, its brim cut in paper. */
export const OSWALD_CAP =
  'M-17 -8.4C-19.4 -14.6 -14 -21.6 -3 -22.6C8 -23.4 15.6 -19.4 17 -13.4L18 -10C9 -11.8 -6 -11 -17 -8.4Z'
export const OSWALD_CAP_CUT = gouge(-16.4, -11.2, 17.4, -12.8, 1, -0.4)

/**
 * The Fool's coxcomb: a close cap over the crown and the back of the head to
 * the nape (COXCOMB), with a crest along its top cut in rounded lobes like a
 * cock's comb (COXCOMB_CREST), the cap that names it. The cap in ink; the
 * seam between crest and cap, the cap's edge round the face and a seam behind
 * the ear are cut in paper (COXCOMB_CUTS). The crest is printed in paper with
 * an ink edge, its lobes parted by ink strokes (COXCOMB_LOBES), never in red:
 * red on a head reads as a wound.
 * WHY THE CREST IS PAPER (2 October 2026). Cut in ink with the cap, at panel
 * size its lobes read as a bun of dark curls, and the cap as hair.
 */
export const COXCOMB =
  'M15.4 -10.6C14 -19.8 5.6 -24.6 -3.4 -23.6C-12.8 -22.6 -19 -15.6 -19.4 -5.6C-19.6 1 -18.4 7.4 -15.6 12.6L-12.2 14.8L-9.6 10.8C-10.8 5 -10.4 -0.8 -8.2 -5.4C-4.6 -11 4.4 -12.8 15.4 -10.6Z'
export const COXCOMB_CREST =
  'M12.6 -18.4C15.2 -24.4 12.6 -30.4 7.8 -29.8C8.4 -36.4 2.6 -39.8 -1.2 -35.6C-2.6 -41.4 -9.8 -41.6 -11 -35.6C-15.8 -37.4 -20.4 -32.2 -17.8 -27.4C-22 -26.4 -23 -21 -19.2 -18.2L-15.6 -16.6C-11 -20.6 -5 -23.4 1.6 -23.4C6.2 -23.2 9.8 -21.4 12.6 -18.4Z'
export const COXCOMB_LOBES =
  'M7.6 -27.4L5.8 -23.8M-1.4 -32.4L-1.6 -24.2M-10.8 -32.6L-8.8 -23M-17.6 -24.6L-14.6 -19.6'
export const COXCOMB_CUTS =
  gouge(-14.6, -19.4, 10.6, -21.2, 0.8, -2.4) +
  gouge(-8.4, -5.6, 15, -10.6, 1, -1.2) +
  gouge(-9.4, -4, -11, 10, 0.8, -0.6)

/**
 * Goneril's frontlet, the band across the brow that Lear's word names ("What
 * makes that frontlet on?", 1.4), in paper over her veil; and the veil's front
 * edge round her face, cut in paper (VEIL_EDGE, a stroke), or the veil reads
 * as hair.
 */
export const GONERIL_FRONTLET = gouge(13.6, -11.6, -12.8, -14.8, 1.5, -1.8)
export const VEIL_EDGE = 'M12.4 -12.8C6.4 -10.6 1.6 -5.8 -0.4 1C-2 7 -2.6 13 -4.4 19'

/**
 * Regan's hair: dark, drawn back from the brow under a band over the crown
 * (REGAN_HAIR) into a round knot at the nape (REGAN_KNOT), its band and
 * strands cut in paper (REGAN_HAIR_CUTS) and the coil of the knot in paper
 * strokes (REGAN_COIL).
 */
export const REGAN_HAIR =
  'M14 -11C10.4 -20.6 -3.6 -23.4 -11.6 -17.6C-17.4 -13 -18.6 -4.6 -16.6 2.6C-15.6 6 -13.6 8.4 -11 9.6L-8 4C-8.6 -1.6 -7 -6.6 -2.6 -9.6C2.6 -12.6 8.6 -12.6 14 -11Z'
export const REGAN_KNOT = 'M-24 6.4a6.8 6.8 0 1 0 13.6 0a6.8 6.8 0 1 0 -13.6 0Z'
export const REGAN_HAIR_CUTS =
  gouge(12.8, -12.2, -12.8, -13.4, 1.1, -2.6) +
  gouge(6, -16.6, -13, -4, 0.7, 2.4) +
  gouge(0, -19, -15.6, 1, 0.7, 2.2)
export const REGAN_COIL = 'M-21.6 3.6Q-17.2 1.4 -13.2 4.8M-22 8.6Q-17.6 6.6 -13.4 10'

/**
 * Cordelia's features, cut in ink on her lit face (HEAD_GIRL printed in paper
 * over the ink head, her fair hair in paper over that, with the Tempest kit's
 * strands for a girl's long loose hair in ink): the brow, the eye, the line of
 * the mouth and the jaw. In the frame of HEAD_GIRL.
 */
export const CORDELIA_BROW = gouge(4.6, -7.2, 10.6, -8, 0.6, -0.4)
export const CORDELIA_EYE = 'M6.8 -3.4Q9.4 -5.2 11.8 -3.4Q9.4 -2 6.8 -3.4Z'
export const CORDELIA_EYE_DOWN = gouge(6.6, -2.4, 11.6, -1.6, 0.7, 0.9)
export const CORDELIA_MOUTH = gouge(9.6, 10, 12.2, 9.8, 0.45)
/** The line of her jaw, from the chin back towards the ear, in ink: it models the lit face. */
export const CORDELIA_JAW = 'M12.4 14.4Q6.2 15.8 1.6 9.4'
/**
 * Fine ink strands combed back over her fair hair, from the hairline over the
 * crown and down behind the ear. Stroke in INK, about 0.75. (The Tempest
 * kit's bolder strands, cut for dark hair, read on fair hair as the seams of a
 * hood.)
 */
export const CORDELIA_STRANDS =
  'M11.4 -14.6Q1 -19.6 -11.6 -11M8.6 -11.6Q-1.4 -15.6 -14.4 -5.4M5 -9.8Q-4.2 -11.6 -15.4 1.4' +
  'M1.6 -7.8Q-6.6 -6.4 -14.6 7.4M-1.6 -4.4Q-6.8 1 -11.4 9.4M13 -12.6Q6 -18.8 -4 -19.2'

// ── Garments and pieces, in the figure's frame ─────────────────────────────

/**
 * Lear's mantle, worn at court: from the shoulders to the ankle behind him, as
 * a cloak hangs, its hem swung back by `swing`; its front edge and hem are
 * edged with fur (mantleFur, a band cut in paper, with MANTLE_FUR_TUFTS in ink
 * on it), "furr'd gowns" (4.6).
 */
export function royalMantle(swing = 0): string {
  const s = swing
  return `M6 -146C-10 -146 -22 -128 -26 -104C-29 -80 ${n(-31 - s)} -48 ${n(-36 - s)} -6L${n(-22 - s * 0.6)} -2L${n(-8 - s * 0.3)} -4C-8 -50 -7 -96 4 -132Z`
}
/** The mantle's fur border: along the hem and up the front edge, inside it. */
export function mantleFur(swing = 0): string {
  const s = swing
  const hem = `M${n(-35 - s)} -14L${n(-9 - s * 0.3)} -12L${n(-8 - s * 0.3)} -4L${n(-22 - s * 0.6)} -2L${n(-36 - s)} -6Z`
  const front =
    'M-8.6 -12C-9.4 -40 -9.2 -78 -6.6 -104C-5 -118 -1.4 -128 3.6 -134L-2.4 -136C-8 -126 -12 -112 -13.4 -96C-15.2 -72 -15.2 -40 -14.8 -12Z'
  return hem + front
}
/** Ink tufts in the mantle's fur, little upright flecks, as ermine is printed. */
export function mantleFurTufts(swing = 0): string {
  const s = swing
  let d = ''
  for (let k = 0; k < 5; k++) {
    const x = -32 - s + (k * (24 + s * 0.7)) / 4
    d += `M${n(x)} -11.6l0.6 3.4`
  }
  for (const y of [-120, -100, -80, -60, -40, -22]) {
    const x = -11.4 + (y < -100 ? (y + 100) * -0.12 : 0)
    d += `M${n(x)} ${y}l0.5 3.4`
  }
  return d
}

/**
 * Lear's collar of fur ("Robes and furr'd gowns", 4.6), as his portrait wears
 * it: a broad band over his shoulders from behind his neck to the front of his
 * chest. Cut in paper over the gown (it is printed after the parts), with ink
 * tufts (FUR_TUFTS) on it; placed at the neck.
 */
export function furCollar(neck: P): string {
  const [x, y] = neck
  return (
    `M${n(x - 16)} ${n(y + 4)}C${n(x - 13)} ${n(y - 5)} ${n(x + 5)} ${n(y - 7)} ${n(x + 14)} ${n(y + 1)}` +
    `C${n(x + 17.4)} ${n(y + 7)} ${n(x + 17.6)} ${n(y + 14)} ${n(x + 15)} ${n(y + 20)}L${n(x + 9.4)} ${n(y + 18.6)}` +
    `C${n(x + 10)} ${n(y + 13)} ${n(x + 7.6)} ${n(y + 7.6)} ${n(x + 1.6)} ${n(y + 6.4)}` +
    `C${n(x - 5.6)} ${n(y + 5.4)} ${n(x - 12)} ${n(y + 9)} ${n(x - 16.6)} ${n(y + 13)}Z`
  )
}
export function furTufts(neck: P): string {
  const [x, y] = neck
  const at: P[] = [
    [-13, 5],
    [-8, 1.6],
    [-2, 0],
    [4, 0.4],
    [10, 3],
    [13.4, 8.6],
    [13, 14.6],
    [-12, 9.4],
    [-5, 4.4],
  ]
  return at.map(([a, b]) => `M${n(x + a)} ${n(y + b)}l0.4 3`).join('')
}

/**
 * Poor Tom's blanket, "Blanket my loins" (2.3): a ragged cloth over the far
 * shoulder, crossing the chest and wrapped round him to the knee, its hem
 * torn, so that he is always decently covered. In the figure's frame for a man
 * standing (neck at (0, -138), hip at (0, -70)); its rope belt, rents and folds
 * are TOM_BLANKET_CUTS.
 */
export const TOM_BLANKET =
  'M-6 -146C-14 -144 -19 -136 -19.4 -122C-20 -106 -20.6 -88 -21 -72C-22 -60 -23.6 -48 -24.4 -36L-19 -40L-15 -34L-10 -39L-5 -33L0 -38L5 -33L10 -38L15 -34L20 -39C19.6 -52 18.6 -64 17 -74C16.4 -84 16 -94 15.6 -100C9 -112 2 -128 -6 -146Z'
export const TOM_BLANKET_CUTS =
  gouge(-19, -77, 17, -78, 1.5, 0.6) +
  gouge(10, -77, 13, -60, 1.2, -0.4) +
  gouge(-12, -128, -16, -84, 1.6, 1) +
  gouge(-6, -66, -14, -42, 1.6, 0.8) +
  gouge(6, -66, 8, -42, 1.5, -0.4) +
  gouge(3, -112, 10, -98, 1.1, -0.6)

/**
 * The steward's chain of office, hung across Oswald's chest from shoulder to
 * shoulder in a shallow U: small links cut in paper. In the figure's frame,
 * placed from the neck.
 */
export function stewardChain(neck: P): string {
  let d = ''
  const links = 8
  for (let i = 0; i < links; i++) {
    const t = i / (links - 1)
    const x = neck[0] - 9 + 22 * t
    const y = neck[1] + 8 + 16 * (1 - Math.pow(2 * t - 1, 2)) - t * 2
    d += `M${n(x - 2.2)} ${n(y)}a2.2 1.5 0 1 0 4.4 0a2.2 1.5 0 1 0 -4.4 0Z`
  }
  return d
}

/** A band of even width along a polyline, as a filled shape. */
function band(pts: P[], w: number): string {
  const left: P[] = []
  const right: P[] = []
  for (let i = 0; i < pts.length; i++) {
    const a = pts[Math.max(0, i - 1)]
    const b = pts[Math.min(pts.length - 1, i + 1)]
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1
    const v: P = [-(b[1] - a[1]) / L, (b[0] - a[0]) / L]
    left.push([pts[i][0] + (v[0] * w) / 2, pts[i][1] + (v[1] * w) / 2])
    right.push([pts[i][0] - (v[0] * w) / 2, pts[i][1] - (v[1] * w) / 2])
  }
  return 'M' + [...left, ...right.reverse()].map(pt).join('L') + 'Z'
}

/** The part of a leg below `fromY` (in the figure's frame), for hose cut in paper. */
function legBelow(leg: P[], fromY: number): P[] {
  const out: P[] = []
  for (let i = 0; i < leg.length; i++) {
    const q = leg[i]
    if (q[1] <= fromY) continue
    const prev = leg[i - 1]
    if (out.length === 0 && prev && prev[1] < fromY) {
      const t = (fromY - prev[1]) / (q[1] - prev[1])
      out.push([prev[0] + (q[0] - prev[0]) * t, fromY])
    }
    out.push(q)
  }
  return out
}

/** Is the point inside the polygon? (Ray casting, even-odd.) */
function insidePoly(poly: P[], [x, y]: P): boolean {
  let c = false
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i]
    const [xj, yj] = poly[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c
  }
  return c
}

/** The outline of a tunic hung from `neck` to `hip`, facing right, as `doublet` cuts it. */
function tunicOutline(neck: P, hip: P, width: number, hem: number, flare: number): P[] {
  const dx = hip[0] - neck[0]
  const dy = hip[1] - neck[1]
  const L = Math.hypot(dx, dy) || 1
  const u: P = [dx / L, dy / L]
  const v: P = [-u[1], u[0]]
  const at = (o: P, a: number, b: number): P => [
    o[0] + u[0] * a + v[0] * b,
    o[1] + u[1] * a + v[1] * b,
  ]
  const h = width / 2
  return [
    at(neck, -4, -h * 0.55),
    at(neck, 4, -h),
    at(hip, -8, -h * 0.78),
    at(hip, hem, -(h + flare)),
    at(hip, hem, h + flare),
    at(hip, -8, h * 0.78),
    at(neck, 4, h),
    at(neck, -4, h * 0.55),
  ]
}

/**
 * The rings of a mail shirt, for `armed`: rows of small arcs across the
 * tunic's outline, each row set half a ring along from the last, kept clear of
 * the edge so the outline stays whole. Stroke in PAPER. Stroked arcs, not cut
 * shapes, because a shirt of rings cut as shapes weighed four times as much.
 */
export function mailRings(poly: P[]): string {
  const xs = poly.map((q) => q[0])
  const ys = poly.map((q) => q[1])
  const x0 = Math.min(...xs)
  const x1 = Math.max(...xs)
  const y1 = Math.max(...ys)
  let d = ''
  let row = 0
  for (let y = Math.min(...ys) + 9; y < y1 - 3; y += 5, row++) {
    for (let x = x0 + (row % 2 ? 2.9 : 0); x < x1; x += 5.8) {
      const fits = [
        [x - 4.4, y],
        [x + 4.4, y],
        [x, y + 3.4],
        [x, y - 2.4],
      ].every((q) => insidePoly(poly, q as P))
      if (fits) d += `M${n(x - 2.1)} ${n(y)}a2.1 2.1 0 0 0 4.2 0`
    }
  }
  return d
}

/**
 * The Fool's motley: diagonal stripes across his coat, every other one cut in
 * paper, falling from the far shoulder towards the near hip. Each stripe is
 * cut only where it lies inside the coat, stopping short of its edge.
 */
function motleyStripes(coat: P[]): string {
  const a = deg(58)
  const u: P = [Math.cos(a), Math.sin(a)]
  const v: P = [-u[1], u[0]]
  const c: P = [
    coat.reduce((s, q) => s + q[0], 0) / coat.length,
    coat.reduce((s, q) => s + q[1], 0) / coat.length,
  ]
  let d = ''
  for (let k = -10; k <= 10; k++) {
    const o: P = [c[0] + v[0] * k * 9, c[1] + v[1] * k * 9]
    let run: P[] = []
    const flush = () => {
      if (run.length > 6) {
        const p0 = run[1]
        const p1 = run[run.length - 2]
        d += wedge(p0[0], p0[1], p1[0], p1[1], 4.2, 4.2)
      }
      run = []
    }
    for (let t = -120; t <= 120; t += 1) {
      const q: P = [o[0] + u[0] * t, o[1] + u[1] * t]
      if (insidePoly(coat, q)) run.push(q)
      else flush()
    }
    flush()
  }
  return d
}

/**
 * A long gown on a seated figure, facing right: the bodice from `neck` to
 * `waist`, the skirt over the lap to the `knee` and falling from it to the
 * hem on the ground in front of the shins; behind, it falls to the seat. (The
 * Tempest kit's seated gown, cut again here with the man's broader shoulders.)
 */
function seatedGown(
  neck: P,
  waist: P,
  seat: number,
  knee: P,
  { shoulder = 24, waistW = 17 }: { shoulder?: number; waistW?: number } = {},
): string {
  const h = shoulder / 2
  const t1: P = [neck[0] - h * 0.55, neck[1] - 4]
  const c1: P = [neck[0] - h, neck[1] - 4]
  const s1: P = [neck[0] - h, neck[1] + 4]
  const w1: P = [waist[0] - waistW / 2, waist[1]]
  const back: P = [waist[0] - waistW / 2 - 5, -seat + 1]
  const under: P = [knee[0] - 10, -seat + 3]
  const hemB: P = [knee[0] - 9, 0]
  const hemF: P = [knee[0] + 13, 0]
  const kf: P = [knee[0] + 7, knee[1] - 2]
  const w2: P = [waist[0] + waistW / 2, waist[1] + 2]
  const s2: P = [neck[0] + h, neck[1] + 4]
  const c2: P = [neck[0] + h, neck[1] - 4]
  const t2: P = [neck[0] + h * 0.55, neck[1] - 4]
  return (
    `M${pt(t1)}Q${pt(c1)} ${pt(s1)}L${pt(w1)}Q${pt([back[0] - 3, (w1[1] + back[1]) / 2])} ${pt(back)}` +
    `L${pt(under)}Q${pt([under[0] - 2, under[1] + 20])} ${pt(hemB)}L${pt(hemF)}` +
    `Q${pt([hemF[0] + 1, (hemF[1] + kf[1]) / 2])} ${pt(kf)}Q${pt([knee[0] - 4, knee[1] - 12])} ${pt(w2)}` +
    `L${pt(s2)}Q${pt(c2)} ${pt(t2)}Z`
  )
}

/**
 * Lear's mantle on a seated figure: from the shoulders down his back, over the
 * seat behind him and to the ground, its fur edge along the hem cut in paper
 * (seatedMantleFur).
 */
function seatedMantle(neck: P, seat: number): string {
  const [x, y] = neck
  return (
    `M${n(x + 5)} ${n(y - 8)}C${n(x - 10)} ${n(y - 7)} ${n(x - 22)} ${n(y + 12)} ${n(x - 24)} ${n(y + 40)}` +
    `C${n(x - 26)} ${n(-seat - 10)} ${n(x - 28)} ${n(-seat + 20)} ${n(x - 30)} -3L${n(x - 12)} -2` +
    `C${n(x - 12)} ${n(-seat + 10)} ${n(x - 9)} ${n(y + 50)} ${n(x - 6)} ${n(y + 24)}C${n(x - 4)} ${n(y + 12)} ${n(x)} ${n(y + 2)} ${n(x + 5)} ${n(y - 8)}Z`
  )
}
function seatedMantleFur(neck: P): string {
  const [x] = neck
  return `M${n(x - 29.6)} -11L${n(x - 12.4)} -10L${n(x - 12)} -2L${n(x - 30)} -3Z`
}

/**
 * The skirt of a tunic on a man seated with his legs out before him, facing
 * right: from the belt at `hip` it covers the seat behind him and lies along
 * the thigh towards the `knee`, its hem hanging a little below the thigh. (A
 * tunic hung from the hip as `doublet` hangs it falls straight to the ground
 * from a seated man, and reads as a long gown: Kent in the stocks, 2.2.)
 */
function lapSkirt(hip: P, knee: P, width: number): string {
  const L = Math.hypot(knee[0] - hip[0], knee[1] - hip[1]) || 1
  const u: P = [(knee[0] - hip[0]) / L, (knee[1] - hip[1]) / L]
  const v: P = [u[1], -u[0]]
  const at = (a: number, b: number): P => [
    hip[0] + u[0] * a + v[0] * b,
    hip[1] + u[1] * a + v[1] * b,
  ]
  const w = width * 0.5
  return (
    `M${pt(at(-w, 4))}L${pt(at(-w * 0.2, w * 0.7))}L${pt(at(w * 0.8, w * 0.62))}` +
    `Q${pt(at(L * 0.45, 7.6))} ${pt(at(L * 0.74, 6))}L${pt(at(L * 0.8, -9))}` +
    `Q${pt(at(L * 0.4, -12))} ${pt(at(0, -9))}L${pt(at(-w * 1.04, -5))}Z`
  )
}

/** Where a seated figure's neck and waist are, for a seat this high. */
export function seatedFrame(seat: number, woman = false) {
  const waist: P = [0, -seat - 8]
  const neck: P = [0, waist[1] - (woman ? 38 : 46)]
  return { waist, neck, head: [3, neck[1] - 22] as P }
}

/**
 * A straight sword in its scabbard at the hip, hanging down behind the figure:
 * the scabbard as a part of the figure, and the cross hilt to print in paper
 * over it, its grip and pommel up and forward.
 *
 * WHY SO STEEP (2 October 2026). It first hung at 158 degrees, the angle the
 * rapiers of the Italian plays hang at; on these lords in their long tunics it
 * stuck out behind them level with the knee and read as a pole. A sword on a
 * belt hangs nearly straight down.
 */
export function scabbard(hip: P, len = 62): { part: Part; hilt: string } {
  const a = deg(114)
  const start: P = [hip[0] + 6, hip[1] - 4]
  const end: P = [start[0] + Math.cos(a) * len, start[1] + Math.sin(a) * len]
  return { part: { d: limb([start, end]), w: 4.2 }, hilt: swordHilt(start, 114 - 180) }
}

/** A cross hilt: the guard across `at`, the grip and a round pommel along `angle`. */
export function swordHilt(at: P, angle: number): string {
  const a = deg(angle)
  const u: P = [Math.cos(a), Math.sin(a)]
  const v: P = [-u[1], u[0]]
  const p = (x: number, y: number): P => [at[0] + u[0] * x + v[0] * y, at[1] + u[1] * x + v[1] * y]
  const guard = `M${pt(p(-1.4, -8))}L${pt(p(1.4, -8))}L${pt(p(1.4, 8))}L${pt(p(-1.4, 8))}Z`
  const grip = `M${pt(p(1.4, -1.8))}L${pt(p(11, -1.6))}L${pt(p(11, 1.6))}L${pt(p(1.4, 1.8))}Z`
  const c = p(13.4, 0)
  const pommel = `M${n(c[0] - 2.6)} ${n(c[1])}a2.6 2.6 0 1 0 5.2 0a2.6 2.6 0 1 0 -5.2 0Z`
  return guard + grip + pommel
}

/**
 * A drawn straight sword: the blade from the guard at `grip` along `angle`
 * (degrees clockwise from the right), `len` long, with its hilt behind the
 * hand. Paper with a fine ink edge, so steel reads on dark ground and light.
 */
export function Sword({ grip, angle, len = 92 }: { grip: P; angle: number; len?: number }) {
  const a = deg(angle)
  const u: P = [Math.cos(a), Math.sin(a)]
  const v: P = [-u[1], u[0]]
  const p = (x: number, y: number): P => [
    grip[0] + u[0] * x + v[0] * y,
    grip[1] + u[1] * x + v[1] * y,
  ]
  const blade = `M${pt(p(5, -2.2))}L${pt(p(len - 9, -2))}L${pt(p(len, 0))}L${pt(p(len - 9, 2))}L${pt(p(5, 2.2))}Z`
  return (
    <path
      d={blade + swordHilt(p(4, 0), angle + 180)}
      fill={PAPER}
      stroke={INK}
      strokeWidth={0.8}
      strokeLinejoin="round"
    />
  )
}

/**
 * The crown of Britain, held: the crown Lear wears in the love test and gives
 * away in the same scene ("This coronet part between you. [Giving the
 * crown.]"), printed in the spot colour on his head and in the hands of
 * Albany and Cornwall, so a student can follow it from the one to the other.
 * It is what the first scene is about. In its own frame, the middle of its
 * band at (0, 0), about 32 wide and 20 high; place it with `at`, `rot` and
 * `scale`.
 */
export function BritainCrown({ at, rot = 0, scale = 1 }: { at: P; rot?: number; scale?: number }) {
  return (
    <g
      transform={`translate(${n(at[0])} ${n(at[1])}) rotate(${n(rot)}) scale(${n(scale)}) translate(0 13)`}
    >
      <path d={CROWN} fill={RED} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
      <path d={CROWN_BAND} fill="none" stroke={INK} strokeWidth={0.9} />
    </g>
  )
}

/**
 * A letter, folded, held or lying: a sheet of paper with an ink edge, a fold
 * and, with `seal`, a round seal printed in the spot colour (Edmund's forged
 * letter, 1.2). In its own frame, centred on (0, 0), about 18 by 12; place it
 * with `at`, `rot` and `scale`, as a child of the figure that holds it.
 */
export function Letter({
  at,
  rot = 0,
  scale = 1,
  seal = false,
  open = false,
}: {
  at: P
  rot?: number
  scale?: number
  seal?: boolean
  open?: boolean
}) {
  const sheet = open ? 'M-11 -14L11 -14L11 14L-11 14Z' : 'M-9 -6L9 -6L9 6L-9 6Z'
  const lines = open
    ? 'M-7.6 -9.6H6.6M-7.6 -5.2H7.4M-7.6 -0.8H5M-7.6 3.6H7M-7.6 8H2'
    : 'M-9 -6L0 0.6L9 -6'
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1])}) rotate(${n(rot)}) scale(${n(scale)})`}>
      <path d={sheet} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
      <path d={lines} fill="none" stroke={INK} strokeWidth={open ? 0.8 : 0.9} />
      {seal && <circle cx={open ? 0 : 0} cy={open ? 11 : 1.4} r={2.6} fill={RED} />}
    </g>
  )
}

// ── The builder ──────────────────────────────────────────────────────────────

export type Look =
  | 'lear'
  | 'gloucester'
  | 'kent'
  | 'caius'
  | 'goneril'
  | 'regan'
  | 'cordelia'
  | 'fool'
  | 'edmund'
  | 'edgar'
  | 'tom'
  | 'cornwall'
  | 'albany'
  | 'france'
  | 'burgundy'
  | 'oswald'
  | 'knight'
  | 'servant'
  | 'old-man'

/** How big each person is, against a man of 1: Cordelia is "the last and least", the Fool slight. */
const SIZE: Record<Look, number> = {
  lear: 0.98,
  gloucester: 0.97,
  kent: 1.01,
  caius: 1.01,
  goneril: 0.93,
  regan: 0.93,
  cordelia: 0.86,
  fool: 0.84,
  edmund: 1,
  edgar: 1,
  tom: 1,
  cornwall: 1.02,
  albany: 1,
  france: 1.01,
  burgundy: 0.99,
  oswald: 0.96,
  knight: 1,
  servant: 0.97,
  'old-man': 0.94,
}

/** A hand: open with the fingers apart, pointing, one finger raised, at rest, closed round something held, or hidden. */
export type HandKind = 'open' | 'point' | 'finger' | 'mitt' | 'grip' | 'none'

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
  /** The line of the body, neck to hip (to the waist, for a gown): to lean, stoop or kneel. */
  body?: { neck?: P; hip?: P }
  far?: ArmPose
  near?: ArmPose
  /** Hip, knee and ankle of each leg, for those in tunics, the Fool and Tom. */
  legs?: { far: P[]; near: P[] }
  /** A long gown's hem: how far it reaches ahead of the waist and behind it. */
  hem?: { front?: number; back?: number }
  /**
   * Seated on something `seat` units high under the hips (those in long
   * gowns: Lear, Gloucester, the women, the Old Man): `knee` is where the lap
   * ends. The head, neck and waist move down with the seat (`seatedFrame`).
   * A man in a tunic seated with his legs out before him gives his `body` and
   * `legs` as well: his tunic stops at the hip and its skirt lies over his
   * thighs (`lapSkirt`) towards `knee`, by default his near knee.
   */
  seated?: { seat: number; knee?: P }
  /** A cloak's hem swung back this far (for those who wear one), or no cloak at all. */
  cloak?: number
  noCloak?: boolean
  /** Lear's fur-edged mantle, its hem swung back this far; `false` takes it off. Lear wears it by default. */
  mantle?: number | false
  /**
   * Lear's crown, worn in the love test only (he gives it away in that scene);
   * Cordelia's circlet as Queen of France. France always wears his.
   */
  crown?: boolean
  /** Lear in 4.6, "Crown'd with rank fumiter and furrow weeds": his crown of weeds (LEAR_WEEDS). */
  weeds?: boolean
  /** No cap, hood, bonnet or crown. */
  bare?: boolean
  /** A sword in its scabbard at the hip (Kent at court, the dukes, Edmund, the knights wear one by default). */
  sword?: boolean
  /** 'shut' is asleep or lost in feeling: the lid line of EYE_DOWN. */
  eye?: 'open' | 'down' | 'shut' | 'none'
  /** The brow drawn down. Goneril and Cornwall frown unless this is `false`. */
  frown?: boolean
  /** A red flush on the cheek. Never on a bearded face, and in this play on no face (see the docblock). */
  flush?: boolean
  mouth?: 'smile' | 'open'
  /** Gloucester from 3.7 on: the plain cloth band over his eyes, and nothing beneath it. */
  blind?: boolean
  /** Armed for the duel (5.3): the tunic is a mail shirt, its rings cut in paper. Men in tunics only. */
  armed?: boolean
  /** Edgar unknown at the duel: a closed helm over the whole head, no face or hair showing. */
  helm?: boolean
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

const WOMEN: Look[] = ['goneril', 'regan', 'cordelia']
/** The men in long gowns to the floor. */
const GOWNED: Look[] = ['lear', 'gloucester', 'old-man']
/** Those who wear a sword by default. */
const ARMED: Look[] = ['kent', 'edmund', 'cornwall', 'albany', 'france', 'burgundy', 'knight']
/** Those who wear a cloak by default, and whether it is long (to the knee). */
const CLOAKED: Partial<Record<Look, boolean>> = {
  kent: true,
  cornwall: true,
  albany: true,
  france: true,
  burgundy: false,
  edmund: false,
  knight: false,
}
/** The tunic's cut for each man: width, hem (below the hip) and flare. Great lords wear it to the calf. */
const TUNIC: Partial<Record<Look, { width: number; hem: number; flare: number }>> = {
  kent: { width: 31, hem: 44, flare: 9 },
  caius: { width: 30, hem: 28, flare: 7 },
  cornwall: { width: 31, hem: 44, flare: 9 },
  albany: { width: 30, hem: 44, flare: 9 },
  france: { width: 30, hem: 44, flare: 9 },
  burgundy: { width: 30, hem: 32, flare: 7 },
  edmund: { width: 28, hem: 28, flare: 7 },
  edgar: { width: 28, hem: 28, flare: 7 },
  oswald: { width: 27, hem: 24, flare: 6 },
  knight: { width: 30, hem: 30, flare: 7 },
  servant: { width: 28, hem: 26, flare: 6 },
  fool: { width: 26, hem: 20, flare: 7 },
}

function headShape(look: Look): string {
  if (look === 'cordelia') return HEAD_GIRL
  if (look === 'goneril' || look === 'regan') return HEAD_WOMAN
  if (look === 'edgar' || look === 'tom' || look === 'fool' || look === 'servant') return HEAD_YOUTH
  return HEAD_MAN
}

function build(p: Pose) {
  const look = p.look
  const woman = WOMEN.includes(look)
  const gowned = GOWNED.includes(look)
  const small = woman || look === 'fool'
  const seat = p.seated?.seat
  const sf = seat !== undefined ? seatedFrame(seat, woman) : undefined
  const defNeck: P = woman ? [0, -132] : [0, -138]
  const defHip: P = woman ? [0, -94] : gowned ? [0, -90] : [0, -70]
  const neck: P = p.body?.neck ?? sf?.neck ?? defNeck
  const hip: P = p.body?.hip ?? sf?.waist ?? defHip
  const moved = neck[0] !== defNeck[0] || neck[1] !== defNeck[1]
  const hAt: P = p.head?.at ?? [neck[0] + 3, neck[1] - 22]
  const headT = `translate(${n(hAt[0])} ${n(hAt[1])}) rotate(${p.head?.rot ?? 0})`
  // Hair that hangs from the head but does not turn with it.
  const hangT = `translate(${n(hAt[0])} ${n(hAt[1])})`
  const armW = gowned ? 9.6 : look === 'cordelia' ? 7.2 : woman ? 7.8 : look === 'fool' ? 7.4 : 8.6
  const legW = look === 'fool' ? 8.2 : 9
  const parts: Piece[] = []
  let cuts = ''
  /** Ink marks printed over the cuts (fur tufts), before the head and the near arm. */
  let inkOver = ''
  /** A mail shirt's rings (`armed`), stroked in paper before the head and the near arm. */
  let mail = ''

  const handOf = (a: ArmPose): Part[] => {
    const kind = a.hand ?? 'mitt'
    const wrist = a.pts[a.pts.length - 1]
    const angle = a.deg ?? endAngle(a.pts)
    if (kind === 'none') return []
    if (kind === 'mitt') return [mitt(wrist, angle, small ? 0.86 : 1)]
    if (kind === 'grip') return [gripHand(wrist, angle, small ? 0.86 : 1)]
    if (kind === 'point') return pointingHand(wrist, angle, small ? 0.9 : 1, a.thumb ?? 1)
    if (kind === 'finger') return warningHand(wrist, angle, { size: small ? 13.5 : 15 })
    // Fanned 18 degrees by default: at 14 the rough edge of the print closed
    // the gaps between the fingers at panel size, and open hands read as
    // fists (the Merchant kit, reviewed 27 September 2026).
    return hand(wrist, angle, {
      size: a.size ?? (small ? 13.5 : 15),
      spread: a.spread ?? 18,
      thumb: a.thumb,
    })
  }
  const armOf = (a: ArmPose): Part[] => [{ d: limb(a.pts), w: armW }, ...handOf(a)]

  if (p.far) parts.push(armOf(p.far))

  const legs = p.legs ?? MEN_LEGS
  const last = (a: P[]) => a[a.length - 1]
  const legParts = (pts: P[]): Part[] =>
    look === 'tom'
      ? [{ d: limb(pts), w: legW }, bareFoot([last(pts)[0], last(pts)[1] + 3], 1)]
      : [{ d: limb(pts), w: legW }, shoe([last(pts)[0], last(pts)[1] + 3], 1)]
  // A man in a long gown wears a sword only when a panel asks for it, standing:
  // Lear in 1.1 ("Laying his hand on his sword"), hung from his girdle.
  const swordOn = !woman && (gowned ? p.sword === true && !sf : (p.sword ?? ARMED.includes(look)))
  const sword = swordOn ? scabbard(gowned ? [hip[0], hip[1] + 6] : hip) : undefined

  if (woman) {
    if (sf && seat !== undefined) {
      const knee = p.seated?.knee ?? ([30, -seat - 6] as P)
      parts.push({ d: seatedGown(neck, hip, seat, knee, { shoulder: 24, waistW: 16 }) })
      cuts +=
        gouge(hip[0] - 8, hip[1] + 1, hip[0] + 8.4, hip[1] + 2, 1, 0.8) +
        gouge(knee[0] - 2, knee[1] + 8, knee[0] + 2, -10, 1.6, -0.6)
    } else {
      parts.push({
        d: gown(neck, hip, 0, 1, {
          shoulder: look === 'cordelia' ? 22 : 24,
          waistW: look === 'cordelia' ? 15 : 16,
          front: p.hem?.front ?? 28,
          back: p.hem?.back ?? 34,
        }),
      })
      // the bodice's point, and two folds of the skirt
      cuts +=
        gouge(hip[0] - 8, hip[1] - 1, hip[0] + 8.4, hip[1], 1, 0.8) +
        gouge(hip[0] - 6, hip[1] + 10, hip[0] - 20, -8, 1.8, 1) +
        gouge(hip[0] + 8, hip[1] + 10, hip[0] + 18, -8, 1.8, -1)
    }
  } else if (gowned) {
    // The mantle hangs over the back of the gown, as a cloak does, so its fur
    // edge shows down its front edge and along its hem (the Tempest kit hung
    // Prospero's behind the gown first, and its border was lost).
    const mantleOn = look === 'lear' && p.mantle !== false
    const swing = typeof p.mantle === 'number' ? p.mantle : 0
    if (sf && seat !== undefined) {
      const knee = p.seated?.knee ?? ([36, -seat - 6] as P)
      parts.push({ d: seatedGown(neck, hip, seat, knee, { shoulder: 30, waistW: 24 }) })
      parts.push(shoe([knee[0] + 8, 0], 1))
      cuts +=
        gouge(hip[0] - (mantleOn ? 3 : 11), hip[1] + 1, hip[0] + 12, hip[1] + 2, 1.6, 0.8) +
        gouge(knee[0] - 2, knee[1] + 8, knee[0] + 2, -10, 1.6, -0.6) +
        gouge(hip[0] + 6, hip[1] + 6, knee[0] - 4, knee[1] + 2, 1.4, -1)
      if (mantleOn) {
        parts.push({ d: seatedMantle(neck, seat) })
        cuts += seatedMantleFur(neck)
      }
    } else {
      parts.push({
        d: gown(neck, hip, 0, 1, {
          shoulder: 30,
          waistW: 24,
          front: p.hem?.front ?? 22,
          back: p.hem?.back ?? 28,
        }),
      })
      parts.push(shoe([hip[0] + 10, 0], 1))
      // the girdle at the waist, the gown's front edge and two long folds
      // (the girdle and the back fold only where the mantle does not cover)
      cuts +=
        gouge(
          hip[0] - (mantleOn ? 3 : 12),
          hip[1] - 1,
          hip[0] + 13,
          hip[1],
          look === 'old-man' ? 1.2 : 1.7,
        ) +
        gouge(hip[0] + 6, hip[1] + 10, hip[0] + 12, -8, 1.6, -0.4) +
        (mantleOn ? '' : gouge(hip[0] - 4, hip[1] + 10, hip[0] - 14, -8, 1.8, 1))
      if (sword) parts.push(sword.part)
      if (mantleOn) {
        const t = moved ? `translate(${n(neck[0])} ${n(neck[1] + 138)})` : undefined
        parts.push({ d: royalMantle(swing), t })
        if (!moved) cuts += mantleFur(swing)
      }
    }
    if (look === 'lear') {
      cuts += furCollar(neck)
      inkOver += furTufts(neck)
      if (mantleOn && !moved && !sf) inkOver += mantleFurTufts(swing)
    }
  } else if (look === 'tom') {
    parts.push(...legParts(legs.far))
    parts.push({ d: limb([neck, hip]), w: 21 })
    parts.push(...legParts(legs.near))
    const t = moved ? `translate(${n(neck[0])} ${n(neck[1] + 138)})` : undefined
    parts.push({ d: TOM_BLANKET, t, sep: 1.3 })
    if (!moved) cuts += TOM_BLANKET_CUTS
    for (const leg of [legs.far, legs.near]) {
      const a = last(leg)
      cuts += gouge(a[0] + 9.6, a[1] - 0.2, a[0] + 13.2, a[1] + 2.2, 0.45)
    }
  } else {
    // The men in tunics: the cloak behind, the far leg, the scabbard, the
    // body, the tunic over it, the near leg.
    // Seated with the legs out (`seated`, added for moments 6 to 10): the
    // tunic stops at the hip and its skirt lies over the thighs (`lapSkirt`).
    const lap = p.seated !== undefined
    const cut = {
      ...(TUNIC[look] ?? { width: 28, hem: 28, flare: 7 }),
      ...(lap ? { hem: 4, flare: 2 } : {}),
    }
    parts.push(...legParts(legs.far))
    const long = CLOAKED[look]
    if (!p.noCloak && (p.cloak !== undefined || long !== undefined)) {
      const t = moved ? `translate(${n(neck[0])} ${n(neck[1] + 138)})` : undefined
      parts.push({ d: cloak(p.cloak ?? 0, long ?? false), t })
      if (!moved) cuts += cloakCuts(p.cloak ?? 0, long ?? false)
    }
    if (sword) parts.push(sword.part)
    parts.push({ d: limb([neck, hip]), w: cut.width * 0.76 })
    parts.push({ d: doublet(neck, hip, 1, cut) })
    parts.push(...legParts(legs.near))
    const knee = p.seated?.knee ?? legs.near[1]
    if (lap) parts.push({ d: lapSkirt(hip, knee, cut.width) })
    if (look === 'fool') {
      cuts += motleyStripes(tunicOutline(neck, hip, cut.width, cut.hem, cut.flare))
      const hose = legBelow(legs.near, hip[1] + cut.hem - 2)
      if (hose.length > 1) {
        const lp = hose[hose.length - 1]
        hose[hose.length - 1] = [lp[0], lp[1] - 4]
        cuts += band(hose, legW - 3.6)
      }
    } else {
      // the belt at the waist, and a fold down the front of the skirt
      const u: P = [(hip[0] - neck[0]) / 68, (hip[1] - neck[1]) / 68]
      cuts +=
        gouge(
          hip[0] - cut.width * 0.4 - u[0] * 4,
          hip[1] - 4,
          hip[0] + cut.width * 0.42 - u[0] * 4,
          hip[1] - 5,
          1.3,
        ) +
        (lap
          ? gouge(
              hip[0] + 8,
              hip[1] - 1,
              (hip[0] + knee[0] * 2) / 3,
              (hip[1] + knee[1] * 2) / 3 + 3,
              1.4,
              0.6,
            )
          : gouge(
              hip[0] + 6,
              hip[1] + 2,
              hip[0] + 8 + cut.flare * 0.4,
              hip[1] + cut.hem - 4,
              1.4,
              -0.4,
            ))
      if (look === 'oswald') cuts += stewardChain(neck)
      if (p.armed) mail = mailRings(tunicOutline(neck, hip, cut.width, cut.hem, cut.flare))
    }
  }

  // The head, and what is behind or on it, in order from back to front.
  const head = headShape(look)
  const bare = !!p.bare
  if (look === 'cordelia') parts.push({ d: MIRANDA_FALL, t: hangT }, { d: MIRANDA_HAIR, t: headT })
  if (look === 'goneril' && !bare) parts.push({ d: VEIL, t: headT })
  if (look === 'regan') parts.push({ d: REGAN_KNOT, t: headT }, { d: REGAN_HAIR, t: headT })
  if (look === 'edgar' && !p.helm) parts.push({ d: EDGAR_HAIR, t: headT })
  if (look === 'tom') parts.push({ d: TOM_HAIR, t: headT })
  if (look === 'albany') parts.push({ d: ALBANY_HAIR, t: headT })
  if (look === 'edmund' && !p.helm) parts.push({ d: EDMUND_HAIR, t: headT })
  if (look === 'cornwall') parts.push({ d: CORNWALL_BEARD, t: headT })
  if (look === 'france' || look === 'knight') parts.push({ d: SHORT_BEARD, t: headT })
  parts.push({ d: head, t: headT })
  if (p.helm) parts.push({ d: HELM, t: headT })
  if (look === 'caius' && !bare) parts.push({ d: CAIUS_HOOD, t: headT })
  if (look === 'gloucester' && !bare) parts.push({ d: GLOUCESTER_CAP, t: headT })
  if (look === 'burgundy' && !bare) parts.push({ d: BURGUNDY_CAP, t: headT })
  if (look === 'oswald' && !bare) parts.push({ d: OSWALD_CAP, t: headT })
  if (look === 'fool' && !bare) parts.push({ d: COXCOMB_CREST, t: headT }, { d: COXCOMB, t: headT })
  if (look === 'cordelia') parts.push({ d: MIRANDA_LOCK, t: hangT, sep: 1.3 })

  const near = p.near ? armOf(p.near) : undefined
  return { parts, cuts, inkOver, mail, headT, hangT, hilt: sword?.hilt, near }
}

/**
 * One of the people of the play, cut from the block: placed with its feet at
 * `at`, scaled by `scale` (on top of the person's own size), and turned to
 * face left with `flip`. `children` are drawn last, in the figure's own frame
 * (a letter, a coronet, a sword held in the hand).
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
  const { parts, cuts, inkOver, mail, headT, hangT, hilt, near } = build(pose)
  const look = pose.look
  const s = scale * SIZE[look]
  // Cordelia's face and hair are lit, cut in paper, so her features are cut
  // back into them in ink; every other face is ink, its features in paper.
  const lit = look === 'cordelia'
  const cut = PAPER
  const faceCut = lit ? INK : PAPER
  const eye = pose.helm
    ? 'none'
    : (pose.eye ?? (look === 'gloucester' && pose.blind ? 'none' : 'open'))
  const frown = pose.frown ?? (look === 'goneril' || look === 'cornwall')
  const bare = !!pose.bare
  const transform = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`
  const stroke = (d: string, w: number, colour = cut) => (
    <path d={d} fill="none" stroke={colour} strokeWidth={w} strokeLinecap="round" />
  )
  return (
    <CutFigure parts={parts} cuts={cuts || undefined} transform={transform}>
      {inkOver && stroke(inkOver, 1, INK)}
      {mail && stroke(mail, 0.9, PAPER)}
      {lit && (
        <g transform={hangT}>
          <path d={MIRANDA_FALL} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
          <path d={MIRANDA_FALL_STRANDS} fill={INK} />
        </g>
      )}
      <g transform={headT}>
        {look === 'lear' && (
          <>
            <path d={LEAR_HAIR} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
            {stroke(LEAR_HAIR_STRANDS, 0.8, INK)}
            {!pose.crown && <path d={CROWN_SHINE} fill={PAPER} />}
            {!pose.crown && stroke(LEAR_WISP, 0.8)}
            <path d={LEAR_LINES + WHITE_BROW} fill={PAPER} />
          </>
        )}
        {look === 'lear' && pose.weeds && (
          <>
            <path
              d={LEAR_WEEDS}
              fill={INK}
              stroke={PAPER}
              strokeWidth={1.4}
              strokeLinejoin="round"
              paintOrder="stroke"
            />
            <path d={LEAR_WEEDS_RIBS} fill={PAPER} />
            <path d={LEAR_WEEDS_FLOWERS} fill={PAPER} stroke={INK} strokeWidth={0.9} />
          </>
        )}
        {look === 'gloucester' && (
          <>
            {bare ? (
              <>
                <path d={OLD_FRINGE} fill={PAPER} stroke={INK} strokeWidth={1} />
                {stroke(OLD_FRINGE_STRANDS, 0.8, INK)}
                <path d={CROWN_SHINE} fill={PAPER} />
              </>
            ) : (
              <>
                <path d={GLOUCESTER_HAIR} fill={PAPER} stroke={INK} strokeWidth={1} />
                {stroke(GLOUCESTER_HAIR_STRANDS, 0.8, INK)}
                <path d={GLOUCESTER_CAP_CUT} fill={PAPER} />
              </>
            )}
            {!pose.blind && <path d={WHITE_BROW} fill={PAPER} />}
          </>
        )}
        {look === 'old-man' && (
          <>
            <path d={OLD_FRINGE} fill={PAPER} stroke={INK} strokeWidth={1} />
            {stroke(OLD_FRINGE_STRANDS, 0.8, INK)}
            <path d={CROWN_SHINE + WHITE_BROW} fill={PAPER} />
          </>
        )}
        {(look === 'kent' || (look === 'caius' && bare)) && stroke(KENT_HAIR, 1.1)}
        {look === 'caius' && !bare && (
          <>
            <path d={CAIUS_HOOD_CUTS} fill={PAPER} />
            {stroke(CAIUS_HOOD_EDGE, 1.6)}
          </>
        )}
        {look === 'goneril' && !bare && (
          <>
            {stroke(VEIL_EDGE, 1.4)}
            <path d={GONERIL_FRONTLET} fill={PAPER} />
          </>
        )}
        {look === 'regan' && (
          <>
            <path d={REGAN_HAIR_CUTS} fill={PAPER} />
            {stroke(REGAN_COIL, 0.9)}
          </>
        )}
        {lit && (
          <>
            <path
              d={HEAD_GIRL}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.1}
              strokeLinejoin="round"
            />
            <path
              d={MIRANDA_HAIR}
              fill={PAPER}
              stroke={INK}
              strokeWidth={0.9}
              strokeLinejoin="round"
            />
            {stroke(CORDELIA_STRANDS, 0.75, INK)}
            <path d={CORDELIA_BROW + CORDELIA_MOUTH} fill={INK} />
            {stroke(CORDELIA_JAW, 1, INK)}
            {pose.crown && (
              <path d={CIRCLET} fill={INK} stroke={PAPER} strokeWidth={1} strokeLinejoin="round" />
            )}
          </>
        )}
        {look === 'edgar' && !pose.helm && (
          <>
            <path d={EDGAR_STRANDS} fill={PAPER} />
            {stroke(EAR, 1.2)}
          </>
        )}
        {look === 'tom' && (
          <>
            <path d={TOM_STRANDS} fill={PAPER} />
            {stroke(TOM_KNOTS, 0.9)}
          </>
        )}
        {look === 'albany' && (
          <>
            <path d={ALBANY_STRANDS} fill={PAPER} />
            {stroke(EAR, 1.2)}
          </>
        )}
        {look === 'edmund' && !pose.helm && stroke(EDMUND_CURLS, 1.1)}
        {pose.helm && <path d={HELM_CUTS} fill={PAPER} />}
        {look === 'cornwall' && (
          <>
            <path d={CORNWALL_BEARD_CUTS} fill={PAPER} />
            {stroke(HAIR_SHORT, 1.2)}
          </>
        )}
        {(look === 'france' || look === 'knight') && (
          <>
            <path d={SHORT_BEARD_CUTS} fill={PAPER} />
            {stroke(HAIR_SHORT, 1.2)}
          </>
        )}
        {(look === 'servant' || (look === 'oswald' && bare) || (look === 'burgundy' && bare)) &&
          stroke(HAIR_SHORT, 1.2)}
        {look === 'burgundy' && !bare && <path d={BURGUNDY_CAP_CUT} fill={PAPER} />}
        {look === 'oswald' && !bare && <path d={OSWALD_CAP_CUT} fill={PAPER} />}
        {look === 'fool' && !bare && (
          <>
            <path d={COXCOMB_CUTS} fill={PAPER} />
            <path
              d={COXCOMB_CREST}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1}
              strokeLinejoin="round"
            />
            {stroke(COXCOMB_LOBES, 0.9, INK)}
          </>
        )}
        {look === 'fool' && bare && stroke(HAIR_SHORT, 1.2)}
        {/* the eye, the frown and the mouth */}
        {eye !== 'none' &&
          (lit ? (
            <path d={eye === 'open' ? CORDELIA_EYE : CORDELIA_EYE_DOWN} fill={INK} />
          ) : (
            <path d={eye === 'open' ? EYE : EYE_DOWN} fill={PAPER} />
          ))}
        {frown && <path d={isWoman(look) ? FROWN_W : FROWN} fill={faceCut} />}
        {pose.mouth === 'smile' && stroke(SMILE, 1.2, faceCut)}
        {pose.mouth === 'open' && <path d={OPEN_MOUTH} fill={faceCut} />}
        {pose.flush && !BEARDED.includes(look) && (
          <path
            d="M5 4.6L9.2 5.6"
            fill="none"
            stroke={RED}
            strokeWidth={1.7}
            strokeLinecap="round"
          />
        )}
        {/* the white and grey beards, over the face and the chest */}
        {look === 'lear' && (
          <>
            <path
              d={LEAR_BEARD}
              fill={PAPER}
              stroke={INK}
              strokeWidth={0.9}
              strokeLinejoin="round"
            />
            {stroke(LEAR_BEARD_STRANDS, 0.8, INK)}
          </>
        )}
        {look === 'gloucester' && (
          <>
            <path
              d={FULL_BEARD}
              fill={PAPER}
              stroke={INK}
              strokeWidth={0.9}
              strokeLinejoin="round"
            />
            {stroke(FULL_BEARD_STRANDS, 0.8, INK)}
          </>
        )}
        {look === 'old-man' && (
          <>
            <path
              d={OLD_BEARD}
              fill={PAPER}
              stroke={INK}
              strokeWidth={0.9}
              strokeLinejoin="round"
            />
            {stroke(OLD_STRANDS, 0.8, INK)}
          </>
        )}
        {(look === 'kent' || look === 'caius') && (
          <>
            <path
              d={KENT_BEARD}
              fill={PAPER}
              stroke={INK}
              strokeWidth={0.9}
              strokeLinejoin="round"
            />
            {stroke(KENT_BEARD_STRANDS, 0.85, INK)}
          </>
        )}
        {/* Gloucester's band, over everything on the head: nothing beneath it */}
        {look === 'gloucester' && pose.blind && (
          <>
            <path
              d={BLIND_KNOT + BLIND_BAND}
              fill={PAPER}
              stroke={INK}
              strokeWidth={0.9}
              strokeLinejoin="round"
            />
            {stroke(BLIND_FOLD, 0.8, INK)}
          </>
        )}
        {/* crowns: Lear's, the crown of Britain, in the spot colour (see
            BritainCrown); France's, another king's, in paper with an ink edge */}
        {((look === 'lear' && pose.crown) || (look === 'france' && !bare)) && (
          <>
            <path
              d={CROWN}
              fill={look === 'lear' ? RED : PAPER}
              stroke={INK}
              strokeWidth={1.1}
              strokeLinejoin="round"
            />
            {stroke(CROWN_BAND, 0.9, INK)}
          </>
        )}
      </g>
      {lit && (
        <g transform={hangT}>
          <path d={MIRANDA_LOCK} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
          <path d={MIRANDA_LOCK_CUT} fill={INK} />
        </g>
      )}
      {hilt && <path d={hilt} fill={PAPER} stroke={INK} strokeWidth={0.8} />}
      {near && <CutFigure parts={[near]} halo={1.5} />}
      {children}
    </CutFigure>
  )
}

const isWoman = (look: Look) => WOMEN.includes(look)
/** The faces that never take a flush: see the docblock. */
const BEARDED: Look[] = [
  'lear',
  'gloucester',
  'kent',
  'caius',
  'cornwall',
  'france',
  'knight',
  'old-man',
]

/**
 * A person's shadow thrown on a wall: the figure `Person` builds from the same
 * pose, printed as one flat shape in ink, with no halo, no cuts and no
 * features, the white beard and hair that `Person` prints over the head added
 * to the shape so that the shadow keeps the man's outline. Place it as
 * `Person` is placed; `skew` leans it (degrees, as a low light leans a shadow).
 * Drawn for "Goneril's house" (1.4): "Who is it that can tell me who I am?"
 * "Lear's shadow." Print it over a lit wall and under every figure.
 */
export function Shadow({
  pose,
  at,
  scale = 1,
  flip = false,
  skew = 0,
}: {
  pose: Pose
  at: P
  scale?: number
  flip?: boolean
  skew?: number
}) {
  const { parts, headT, hangT, near } = build(pose)
  const look = pose.look
  const s = scale * SIZE[look]
  const outline: Part[] = []
  if (look === 'lear') {
    outline.push({ d: LEAR_HAIR + LEAR_BEARD, t: headT })
    if (pose.crown) outline.push({ d: CROWN, t: headT })
  }
  if (look === 'gloucester') outline.push({ d: FULL_BEARD, t: headT })
  if (look === 'kent' || look === 'caius') outline.push({ d: KENT_BEARD, t: headT })
  if (look === 'old-man') outline.push({ d: OLD_BEARD, t: headT })
  if (look === 'cordelia') outline.push({ d: MIRANDA_FALL, t: hangT })
  const flat = [...parts, ...(near ? [near] : []), ...outline]
    .flat()
    .map((q) => ({ ...q, sep: undefined }))
  const transform =
    `translate(${n(at[0])} ${n(at[1])})` +
    (skew ? ` skewX(${n(skew)})` : '') +
    ` scale(${n(flip ? -s : s)} ${n(s)})`
  return <CutFigure parts={flat} halo={0} transform={transform} />
}
