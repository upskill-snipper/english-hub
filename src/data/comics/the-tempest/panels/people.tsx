import type { ReactNode } from 'react'

import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { deg, gouge, n, ribbon, type Pt } from '@/components/comics/linocut/carve'

import {
  CutFigure,
  doublet,
  gown,
  hand,
  limb,
  sheathed,
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
  OLD_HAIR,
  OLD_STRANDS,
  WHITE_BROW,
  pointingHand,
} from '../../romeo-and-juliet/panels/acts-3-4-kit'
import {
  HEAD_YOUTH,
  cloak,
  cloakCuts,
  endAngle,
  mitt,
} from '../../much-ado-about-nothing/panels/people'
import {
  HAIR_SHORT,
  LORENZO_BONNET,
  LORENZO_BONNET_CUT,
  NAPE_HAIR,
  RUFF,
  SOLANIO_BEARD,
  SOLANIO_BEARD_CUTS,
} from '../../the-merchant-of-venice/panels/people'

export {
  CutFigure,
  hand,
  limb,
  mitt,
  endAngle,
  pointingHand,
  warningHand,
  EYE,
  EYE_DOWN,
  HEAD_MAN,
  type P,
  type Part,
  type Piece,
}

/**
 * THE PEOPLE OF THE ISLAND: one figure kit for every Tempest panel, so that a
 * student meets the same Prospero, the same Miranda, the same Ariel and the
 * same Caliban from the storm to the epilogue. Draw every recurring character
 * with `Person`, and Ariel with `Ariel` (or, for a pose they cannot make, with
 * the heads and pieces below), never with a new outline. A change here
 * changes every panel that uses it: preview them all before changing one. Cut
 * first for the panels of moments 1 to 5 (Act 1, Scenes 1 and 2); Stephano,
 * Trinculo, Ariel as the harpy and the veil were added with moments 6 to 10
 * (Act 2, Scene 1 to Act 3, Scene 3), and Prospero as the Duke (`duke`) with
 * moments 11 to 14. An artist who needs a person not here adds a `Look` for
 * them below, in the same way, and says so in this docblock. The spirits of
 * the masque (4.1) appear in one panel only, so they are cut there, in
 * ./the-masque-broken-off.tsx, from this kit's heads, hands and garments.
 * Prospero's cell, the ground "before the cell" that eight moments share, is
 * cut once too, in ./the-cell.tsx.
 *
 * The cutting tools (CutFigure, the open hand with its fingers apart, doublet,
 * gown, shoe, the sheathed rapier) are the Romeo and Juliet kit's
 * (../../romeo-and-juliet/panels/verona-kit.tsx), and the hand at rest and
 * the short cloak the Much Ado kit's (../../much-ado-about-nothing/
 * panels/people.tsx), re-exported, not copied: the court of Naples and Milan
 * dresses as the Italy of those plays does, and one hand cutting all of them
 * keeps the site one artist. A figure is cut as the reference panel cuts Fred
 * (src/data/comics/a-christmas-carol/counting-house.tsx): a paper halo round
 * every part, so it reads as one black shape with one carved outline, then
 * the parts in ink, then the paper cuts of folds and features. `Person`
 * builds it from a pose in its own frame: facing right, feet at (0, 0), a man
 * about 182 units tall, the head centred on (3, -160). Place it with `at`,
 * `scale` and `flip` (to face left).
 *
 * ── THIS PLAY'S OWN RULES, which every panel keeps ─────────────────────────
 * - CALIBAN is drawn as a man, with the same care as every other figure. His
 *   head is the same man's head every other man in this kit wears (HEAD_MAN):
 *   the same nose, the same brow, cut no differently. He is weathered,
 *   barefoot and dressed for the island, and nothing more: no scales, fins,
 *   claws, fur, animal features or caricature of any kind, and no chain,
 *   which the play never gives him. The other characters' names for him
 *   ("monster", "mooncalf", "fish" and worse) stay in their mouths and are
 *   never a quotation, a caption or an alt text; his own lines ("This
 *   island's mine", "The isle is full of noises") are the ones to quote.
 * - Prospero's accusation that Caliban tried to violate Miranda is never
 *   drawn or alluded to: no panel poses Miranda shrinking from Caliban, or
 *   Caliban looking at her.
 * - The storm and the wreck show the ship and the sea, never a drowning
 *   figure: everyone survives ("Not a hair perish'd", 1.2).
 * - ARIEL is a spirit: a light, airy figure of grown proportions, never a
 *   child in danger, and never shown in pain or held prisoner. The cloven
 *   pine of 1.2 is described in the words; if a panel shows the tree, it is
 *   empty.
 *
 * ── WHAT THE PLAY SAYS OF THEM, and so what is drawn ────────────────────────
 * (the held edition, src/data/full-texts/the-tempest.ts, Project Gutenberg
 * #1540). Shakespeare describes almost nobody. Where he is silent a person is
 * drawn plainly in the dress of the play's Italy of about 1610, and is told
 * from the others by a hat or a cut of hair, invented only for that and noted
 * here; nothing is taken from a film, television or stage production.
 *
 * - PROSPERO is old: "Bear with my weakness; my old brain is troubled"
 *   (4.1). So his hair is white, cut in paper round the back of his head from
 *   a high brow (PROSPERO_HAIR), with a white brow and a line of age on the
 *   cheek. The play gives him no beard, so he has none, and is never taken
 *   for Gonzalo, whose beard the play names. He wears a long gown to the
 *   floor ("master of a full poor cell"), and carries a staff: "I can here
 *   disarm thee with this stick" (1.2), "I'll break my staff" (5.1) (`staff`,
 *   held as STAFF_HELD holds it, in front of him and clear of his face).
 *   His "magic garment", the mantle he lays down to tell Miranda the past
 *   ("Lays down his mantle"; "Lie there my art", 1.2), is worn with
 *   `mantle` and laid down, thrown over a stone bench, as MantleLaid; either
 *   way its border is a band cut in paper along the hem with a row of ink
 *   lozenges in it, so it is known as the same garment. The held
 *   edition gives no direction for him to put it on again in 1.2, so the
 *   panels of that scene after he lays it down show him without it; he
 *   enters "in his magic robes" in 5.1. When he presents himself "As I was
 *   sometime Milan" (5.1) he sends for "the hat and rapier in my cell": the
 *   Duke of Milan's hat is MILAN_HAT, the one Antonio wears, and `duke` puts
 *   it on him, over his white hair, with the rapier at his hip and no mantle.
 * - MIRANDA was "not Out three years old" twelve years before the play (1.2),
 *   so she is about fifteen: a girl, drawn a little smaller than the men, in a
 *   plain long gown, her dark hair long and loose down her back
 *   (MIRANDA_HAIR, its strands cut in paper). Nothing describes her colouring
 *   or her dress, so she is in ink like everyone else.
 * - ARIEL is "my delicate Ariel" (4.1), "but air" (5.1), who rides "On the
 *   curl'd clouds" and "flam'd amazement" on the ship (1.2). So he is cut in
 *   PAPER, the one figure who is, as the pilot cuts its spirits: a slender,
 *   grown figure in a light shift whose body streams away below the waist
 *   into wisps of air, with no feet on the ground, and hair streaming up and
 *   back like a flame (`form: 'air'`). When Prospero sends him to "make
 *   thyself like a nymph o' th' sea" (1.2), his hair falls in long waves like
 *   water instead (`form: 'nymph'`). "Invisible To every eyeball else" (1.2),
 *   he is cut as a veil (`veiled`): a bright outline with the ground showing
 *   through rows of fine cuts, as the pilot cuts Marley's transparent body.
 * - CALIBAN: "my barefoot way" (2.2), and he wears a "gaberdine" (2.2), a
 *   loose coat Trinculo creeps under. So he is barefoot, in a coarse
 *   gaberdine to the knee with a ragged hem, sleeves pushed to the elbow and a
 *   rope for a belt, his dark hair thick to the collar, and his face cut with
 *   the lines of a man who works outdoors: "he does make our fire, Fetch in
 *   our wood" (1.2). Prospero calls him "freckl'd" in the same breath as an
 *   insult; the print leaves the freckles to the words, because at panel size
 *   paper flecks on a face read as scales or a rash, which is exactly the
 *   caricature this kit refuses.
 * - FERDINAND is "the King's son" and a young man: Prospero calls him "This
 *   gallant" and "A goodly person" (1.2), and Ariel brings him ashore with
 *   his garments "fresher than before" (1.2). So he is beardless, his hair
 *   to the jaw (FERDINAND_HAIR), in a doublet and hose with a ruff and a short
 *   cloak, and a rapier: "He draws" (1.2).
 * - ALONSO is "the King" (1.1). He is not described, so he is known by a
 *   crown (CROWN, in paper), over a gown to the knee.
 * - ANTONIO, who took the dukedom of Milan, is not described. He wears the
 *   Duke of Milan's hat (MILAN_HAT), a doublet, a cloak to the knee and a
 *   rapier.
 * - SEBASTIAN, the King's brother, is not described. A flat bonnet and a
 *   short beard, invented only to tell him from Antonio, a doublet, a short
 *   cloak and a rapier.
 * - GONZALO is "the good old lord, Gonzalo" (5.1), "My old bones ache"
 *   (3.3), and "His tears run down his beard" (5.1). So he has a full white
 *   beard and white hair under a close black cap, and wears a counsellor's
 *   long gown ("You are a counsellor", 1.1).
 * - THE BOATSWAIN and THE MARINERS are not described. They wear the short
 *   jacket and wide breeches of seamen of the time, with bare shins and feet
 *   on the wet deck; the Boatswain is known by a knitted cap with a turned-up
 *   band (SAILOR_CAP), the mariners go bareheaded.
 * - STEPHANO is "my drunken butler" (5.1), who comes on "singing; a bottle in
 *   his hand" (2.2), a bottle "which I made of the bark of a tree with mine
 *   own hands". Nothing else is said of him. So he is a servant of the King's
 *   household, in a plain doublet and hose with no ruff and no rapier, under
 *   a broad-brimmed hat worn tipped back (STEPHANO_HAT, invented only to tell
 *   him at panel size), and he carries the bark bottle (BarkBottle). No red
 *   nose and no drunkard's belly: the words say he is drunk; the print does
 *   not mock him.
 * - TRINCULO is the King's jester, whom Caliban calls "pied ninny" and
 *   "scurvy patch" (3.2): a fool in motley. So his coat is pied, a harlequin
 *   of lozenges cut in paper (`motley`), his hose are of two colours, the
 *   near leg cut in paper (`piedHose`), and he wears a fool's hood with a
 *   long point and a dagged cape (TRINCULO_HOOD). The play does not name the
 *   hood; it is added only so that he is known as the jester. No bells, no
 *   ass's ears.
 * - ARIEL comes "like a Harpy; claps his wings upon the table" (3.3), and
 *   speaks of "my plume". So `form: 'harpy'` gives the kit's Ariel a harpy's
 *   great wings, in paper like him, and draws his brow down. He keeps his own
 *   face and his wisps of air: no bird's body, no talons, no beak.
 * - A VEIL for anyone the play makes invisible. Prospero watches the banquet
 *   "above, invisible" (3.3): `Person`'s `veiled` cuts him as `Ariel`'s veil
 *   cuts the spirit, an outline and fine upright cuts with the ground showing
 *   through, so a student reads him as there but unseen.
 *
 * The court's garments were "drenched in the sea" and are "as fresh as when
 * we put them on first in Afric, at the marriage of the King's fair daughter
 * Claribel" (2.1): wedding clothes, so the gentlemen wear ruffs.
 *
 * HANDS. Every open hand is `hand`'s, with four fingers and a thumb cut
 * apart, fanned 18 degrees, so it reads as an open hand at panel size and
 * never as a fist; a pointing hand has one long finger and the rest curled; a
 * hand at rest is a small closed mitten; a hand round a staff or a rope is
 * `grip`, which only ever closes round something. No hand is raised flat on a
 * straight arm: at panel size that reads as a salute.
 *
 * RED. The spot colour is never put on a mouth or a chin: on this site it was
 * twice read as blood (Hyde's anger, Juliet's lips beside the vial). A flush,
 * if a panel needs one, goes on the cheek (FLUSH).
 */

const pt = (p: P) => `${n(p[0])} ${n(p[1])}`

// ── Heads, hair and hats, in profile facing right, centred on (0, 0) ────────

/**
 * Prospero's white hair: the crown bald, with a glint of light on it
 * (PROSPERO_SHINE), and the hair left in a fringe at the level of the ear,
 * from the temple round the back of the head to the nape, its lower edge
 * tufted. Paper, with ink strands cut back into it (PROSPERO_HAIR_STRANDS).
 *
 * WHY NOT A FULL HEAD OF WHITE HAIR (2 October 2026). It was first cut as a
 * smooth paper band round the back of the head from crown to nape, as
 * Leonato's is in Much Ado; without Leonato's beard, at panel size it read as
 * a hood, and Prospero as an old woman. The white is set in from the head's
 * outline, as the Friar's tonsure is in the Romeo and Juliet kit, because
 * white on the very edge of a black head merges with the paper halo and reads
 * as outline, not hair. A fringe that fell to the collar read as a woman's bob,
 * and a long glint across the crown as a headband, so the fringe stops at the
 * nape and the glint is short, at the front of the crown.
 */
export const PROSPERO_HAIR =
  'M5.6 -6.4C0 -6.8 -6 -7.6 -12.6 -8.4C-14.8 -4.6 -15 0.6 -14.2 5.6C-13.6 8.6 -12.6 11 -11 13.2L-9.6 10.6L-8 13L-7 9.4L-5.4 10.4L-5.2 6.6L-3 6.4L-3 3.2L-0.6 2.6L0.2 -0.4L2.6 -0.8L3.4 -3.4L5.6 -3.2Z'
export const PROSPERO_HAIR_STRANDS =
  'M-12.2 -4.4C-12.6 0 -12.2 5 -10.6 9.6M-8.6 -6C-9.4 -2 -9.2 2 -8.2 6.4M-4.4 -6.2C-5.2 -3.6 -5.2 -0.6 -4.6 2.6'
/** The light on his bald crown, so it reads as bare and not as a cap. */
export const PROSPERO_SHINE = gouge(-3, -17.4, 8.4, -14.8, 1, -1.3)
/** Age: the line from the nose to the corner of the mouth, and the hollow under the cheekbone. */
export const PROSPERO_LINES =
  gouge(15.4, 6, 11.6, 12.4, 0.55, -0.5) + gouge(3, 2, 6.4, 11, 0.6, 1.3)

/**
 * Miranda's hair: dark, long and loose down her back to the waist, a little
 * waved, its strands cut in paper (MIRANDA_STRANDS), and one lock falling
 * forward over her shoulder (MIRANDA_LOCK), cut free of her gown by a paper
 * edge. For HEAD_GIRL. (Dark hair down the back of a dark gown is lost in
 * it, as Hero's plait was in Much Ado; the lock in front is what shows it is
 * hair and not a hood.)
 */
export const MIRANDA_HAIR =
  'M13 -11C9 -20.5 -5 -22 -12.5 -15.5C-18.5 -9.5 -19.4 1 -18.4 12L-5.4 10C-4 -1 -1 -6 4 -8.5C8 -11 10.5 -11.5 13 -11Z'
/**
 * The long fall of her hair from behind the ear to the waist. It hangs from
 * the head but does not turn with it: when she bows her head, asleep, it
 * still falls. (Cut as one with the crown, it swung out behind her bowed
 * head like a pole.)
 */
export const MIRANDA_FALL =
  'M-18.6 4C-18.4 14 -17.6 22 -20.4 30C-21.6 38 -17.4 48 -21 56C-21.6 60 -19.4 64 -19 64C-15.6 66.4 -11.4 66.2 -8.4 64C-7.6 54 -5 46 -5.6 36C-6.2 26 -6.8 16 -5.4 2Z'
export const MIRANDA_STRANDS =
  gouge(8, -16.6, -12, -6, 0.9, 2.6) +
  gouge(4, -18.6, -15, 0, 0.9, 3) +
  gouge(-1, -12.6, -15.6, 8, 0.9, 2)
export const MIRANDA_FALL_STRANDS =
  gouge(-14.6, 6, -16, 34, 1, 1.4) +
  gouge(-10.6, 10, -12, 44, 0.9, 1.2) +
  gouge(-8, 30, -10.4, 60, 0.9, 1.2) +
  gouge(-13.6, 36, -15.6, 62, 0.9, -0.6) +
  gouge(-17.6, 40, -17.8, 60, 0.7, -0.8)
export const MIRANDA_LOCK =
  'M-6 4C-2 12 0 20 0.6 28C1.2 36 0.4 42 -1.4 48C1.4 46 4.2 42 5 36C5.8 28 4.6 18 1 8C-0.4 5 -2.6 3.2 -6 4Z'
export const MIRANDA_LOCK_CUT =
  gouge(-2.6, 9, 1.6, 42, 0.8, 0.8) + gouge(0.6, 12, 3.4, 34, 0.6, 0.4)

/**
 * Caliban's hair: thick and dark, over the crown and down to the collar, its
 * edge broken into locks, its strands cut in paper (CALIBAN_STRANDS), and his
 * ear cut in paper below it (CALIBAN_EAR). Cut as neatly as anyone's: thick
 * hair, not a wild mane. (With a smooth edge and four fine strands it was
 * lost in the black of his head and read as a hood; the many strands, the
 * broken edge and the ear are what make it hair.)
 */
export const CALIBAN_HAIR =
  'M15 -11C13.6 -17 10 -21.6 4.6 -23.6L1.6 -26.2L-2 -24.2L-6.4 -26L-9 -23C-14.6 -22 -19.4 -17.6 -21 -11.6L-23.4 -8L-21.2 -4.6L-22.8 -0.6L-20.4 2.8L-21.6 7.6L-19 10.6L-19.8 15.4L-16.6 17.4L-15.4 22L-12 20.4L-9.4 23.2L-7.4 17.6C-8.8 11 -9 4.8 -7 -0.4C-5 -5.4 0 -8.6 6 -10C9.4 -10.8 12.4 -11 15 -11Z'
export const CALIBAN_STRANDS =
  gouge(11, -15, -4, -19.6, 0.8, 1.6) +
  gouge(6, -11.6, -16, -14, 0.9, 2.4) +
  gouge(-1, -21, -19, -6, 0.9, 2.4) +
  gouge(-4, -9, -17.6, 4, 0.9, 1.6) +
  gouge(-15.6, -2, -16.4, 16, 0.85, 0.8) +
  gouge(-11, 2, -11.6, 19, 0.8, 0.4)
/** His ear, under the hair, cut in paper. */
export const CALIBAN_EAR = 'M-4.6 -1.6C-1.4 -3.4 1.4 -1.2 1 2.6C0.6 6 -2 7.4 -4.4 6.2'

/** A face that works outdoors: a crease at the eye, and the line from the nose to the mouth. */
export const CALIBAN_LINES =
  gouge(5.4, -2.6, 1.6, -0.6, 0.45, 0.3) + gouge(15.6, 5.8, 12, 12, 0.55, -0.5)

/** Ferdinand's hair, to the jaw and swept back from the brow, its strands cut in paper. For HEAD_YOUTH. */
export const FERDINAND_HAIR =
  'M15 -11.6C12.4 -20.6 1 -25 -8.6 -21.4C-16.6 -18.4 -20.6 -9.4 -19.6 0.4C-19 6.6 -17 11.6 -14.2 15.8L-10.8 13.6L-9.6 17.4C-11.4 10.6 -11.6 4.6 -9.6 -1.4C-7.4 -7.6 -1.6 -11.4 5.4 -11.6C9 -11.8 12.4 -11 15 -11.6Z'
export const FERDINAND_STRANDS =
  gouge(12, -14, -2, -20, 0.8, 1.4) +
  gouge(10, -17, -12, -9, 0.9, 2.4) +
  gouge(3, -12.4, -14, -4, 0.85, 1.6) +
  gouge(-3, -19.6, -17, 2, 0.9, 2) +
  gouge(-13.4, -1, -15.4, 12, 0.8, 0.6)
/**
 * An ear cut in paper below the hair, for a man whose dark hair would
 * otherwise run into his dark head and read as a hood (Caliban, Ferdinand).
 */
export const EAR = 'M-4.6 -1.6C-1.4 -3.4 1.4 -1.2 1 2.6C0.6 6 -2 7.4 -4.4 6.2'

/**
 * The King's crown: a band with five points, in paper with an ink edge, and
 * the band's lower edge cut in ink (CROWN_BAND). Taller in its points than a
 * prince's circlet, so it is known as a king's at panel size.
 */
export const CROWN =
  'M-15 -11L-16.6 -25.4L-11 -19.6L-6.6 -29L-1.4 -20.4L4 -29.8L8.6 -20.4L14.2 -27.4L15.6 -12.4C6 -14.6 -5.4 -14 -15 -11Z'
export const CROWN_BAND = 'M-15.4 -15.8C-5 -18.2 6 -18.6 15.4 -16.6'

/**
 * The Duke of Milan's hat: a tall crown, a little tapering, its top leaning
 * back, over a narrow brim, its band cut in paper (MILAN_HAT_CUT): the hat of
 * about 1610, and the one Antonio's portrait wears
 * (../portraits/antonio.tsx). Antonio wears it, and Prospero sends for it in
 * 5.1 ("Fetch me the hat and rapier in my cell"): nobody else wears one like
 * it.
 *
 * WHY NOT A ROUND CROWN (2 October 2026). It was first cut as a dome over the
 * brim, narrower than the head; at panel size, with its band, it read as a
 * Victorian bowler on Antonio in every scene and on Prospero in the epilogue,
 * two centuries late (Stephano's first hat failed the same way, below). The
 * crown is now as wide as the head at the brim, so no brow stands out above
 * it, and tall, with a flat top.
 */
export const MILAN_HAT =
  'M-21.4 -9.2C-10 -12.8 8 -14 22.6 -12.2L21.6 -9.2C17.4 -9.8 15.4 -10.4 14.8 -11.6L8.6 -39.2C3.6 -41.2 -8 -41.6 -13.2 -39.6L-16.4 -11.2C-18 -10.8 -19.8 -10 -21.4 -9.2Z'
export const MILAN_HAT_CUT = gouge(-15.4, -16, 13.6, -15.8, 1.2, -0.3)

/** Sebastian's flat bonnet, worn tilted, its band cut in paper (the Merchant kit's, which Lorenzo wears). */
export const SEBASTIAN_BONNET = LORENZO_BONNET
export const SEBASTIAN_BONNET_CUT = LORENZO_BONNET_CUT

/** Gonzalo's close black cap, over the crown, its edge cut in paper. */
export const GONZALO_CAP =
  'M-15.6 -8.4C-16.4 -17.4 -8 -23 1 -23C9.4 -23 14.6 -18.6 15.4 -11.6C6 -13 -6.6 -11.6 -15.6 -8.4Z'
export const GONZALO_CAP_CUT = gouge(-14.6, -10.6, 14.6, -13.4, 0.9, -0.6)

/**
 * The Boatswain's knitted cap: a round crown over a thick turned-up band,
 * the band's edge and two ribs of the knit cut in paper (SAILOR_CAP_CUT).
 */
export const SAILOR_CAP =
  'M-16.6 -7.6C-18.6 -16 -12.4 -24.6 -1 -25.6C9 -26.4 15.4 -21.4 16.6 -13.6L17.6 -9.6C9 -11.6 -6 -10.6 -16.6 -7.6Z'
export const SAILOR_CAP_CUT =
  gouge(-16.2, -11.6, 17, -13.6, 1.1, -0.4) +
  gouge(-6, -22, -8, -14.6, 0.5) +
  gouge(5, -23, 4, -15.4, 0.5)

/**
 * A flush of feeling: one short stroke on the cheek, below the eye and back
 * from the nose, never on the mouth or chin. Stroke in RED, about 1.6, in the
 * head's frame. (A round of red on the cheek was tried first, and on the
 * small face of a girl it read as a red eye, as a round red cheek once read
 * as a clown's on Hyde; two strokes read as a sticking plaster.)
 */
export const FLUSH = 'M5 4.6L9.2 5.6'
/**
 * Anger: the brow drawn down towards the nose, cut in paper (FROWN), and, for
 * a moment the text says is angry, the spot colour in two short strokes on
 * the cheek (ANGER), as the Jekyll and Hyde kit flushes Hyde: never the mouth.
 */
export const FROWN = gouge(5.4, -9.6, 15.8, -5.4, 1.3, -0.3)
export const ANGER = 'M6.4 4L10.6 5.2M7 7L10.4 7.9'

// ── Garments and pieces, in the figure's frame ─────────────────────────────

/**
 * Prospero's magic garment, worn: a mantle from the shoulders to the ankle,
 * hanging over his gown as a cloak does, its hem swung back by `swing`.
 * mantleCuts are its folds and the band of its border, cut in paper, down
 * its front edge and along its hem; mantleBorder the ink lozenges in that
 * band, as MantleLaid cuts them, so the garment worn and laid down is plainly
 * the same one.
 *
 * WHY OVER THE GOWN (2 October 2026). It was first hung behind the gown, so
 * only the few units of it behind his heels showed, and its border, the one
 * mark that says "magic robes" (5.1), was lost in the grass at panel size.
 */
export function mantle(swing = 0): string {
  const s = swing
  return `M6 -146C-10 -146 -22 -128 -26 -104C-29 -80 ${n(-31 - s)} -48 ${n(-36 - s)} -8L${n(-24 - s * 0.6)} -3L${n(-6 - s * 0.3)} -5C-7 -50 -6 -96 4 -132Z`
}
/** A point on the mantle's front edge, `t` from 0 at the hem to 1 at the shoulder. */
function mantleEdge(t: number, s: number): P {
  const p0: P = [-6 - s * 0.3, -5]
  const p1: P = [-7, -50]
  const p2: P = [-6, -96]
  const p3: P = [4, -132]
  const u = 1 - t
  const k = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t]
  return [
    k[0] * p0[0] + k[1] * p1[0] + k[2] * p2[0] + k[3] * p3[0],
    k[0] * p0[1] + k[1] * p1[1] + k[2] * p2[1] + k[3] * p3[1],
  ]
}
const MANTLE_FRONT_T = [0.03, 0.15, 0.3, 0.45, 0.6, 0.75, 0.88]
export function mantleCuts(swing = 0): string {
  const s = swing
  let d =
    gouge(-23, -120, n2(-32 - s * 0.9), -16, 1.4, 1.2) +
    gouge(-17, -126, n2(-20 - s * 0.6), -18, 1.1, 0.8)
  // the band of the border along the hem
  d += `M${n(-35 - s)} -17L${n(-8 - s * 0.3)} -15L${n(-7 - s * 0.3)} -8L${n(-24 - s * 0.6)} -6L${n(-34.6 - s)} -10.6Z`
  // and up the front edge, just inside it
  const edge = MANTLE_FRONT_T.map((t) => mantleEdge(t, s))
  d +=
    'M' +
    [
      ...edge.map(([x, y]) => `${n(x - 1)} ${n(y)}`),
      ...[...edge].reverse().map(([x, y]) => `${n(x - 7.4)} ${n(y)}`),
    ].join('L') +
    'Z'
  return d
}
/** The ink lozenges in the border's band, along the hem and up the front, in the figure's frame. */
export function mantleBorder(swing = 0): string {
  const s = swing
  const loz = (x: number, y: number, r = 1.9) =>
    `M${n(x - r)} ${n(y)}l${n(r)} ${n(-r * 1.1)}l${n(r)} ${n(r * 1.1)}l${n(-r)} ${n(r * 1.1)}Z`
  let d = ''
  for (let k = 0; k < 4; k++) {
    const x = -31 - s + (k * (20 + s * 0.7)) / 3
    d += loz(x, -11.6 + k * 0.6)
  }
  for (const t of [0.22, 0.38, 0.54, 0.7]) {
    const [x, y] = mantleEdge(t, s)
    d += loz(x - 4.2, y)
  }
  return d
}
const n2 = (v: number) => Math.round(v * 10) / 10

/**
 * The mantle laid down ("Lays down his mantle", 1.2), thrown over a low
 * stone bench so that it hangs as cloth hangs: the collar and its clasp on
 * the top, the folds falling in Vs to a hem whose corners hang lowest, and
 * the broad border along the hem cut in paper. In its own frame: the ground
 * at y 0, its middle at x 0, about 100 wide and 36 high. Draw MantleLaid.
 * (A heap of folded cloth on the ground was tried first, and read as a rock;
 * thrown over a round stone, as a tortoise's shell. Cloth reads as cloth
 * when it hangs.)
 */
export const MANTLE_LAID =
  'M-47 -29C-45 -34 -37 -35 -24 -34L24 -34C37 -35 45 -34 47 -29L49 1L40 -3.4L30 -8L20 -2.6L11 -7L1 -1.6L-9 -6.6L-19 -2.4L-29 -7.6L-39 -2.8L-49 1.4Z'
/** Its folds, falling in Vs from the top to the points of the hem, cut in paper. */
export const MANTLE_LAID_CUTS =
  gouge(-40, -28, -46, -6, 1.3, 0.6) +
  gouge(-26, -30, -19, -8, 1.5, -0.4) +
  gouge(-12, -30, -18, -8, 1.3, 0.4) +
  gouge(-2, -30, 1, -6, 1.5, -0.2) +
  gouge(9, -30, 2, -6, 1.3, 0.4) +
  gouge(22, -30, 20, -7, 1.5, 0) +
  gouge(34, -29, 40, -8, 1.4, -0.6) +
  gouge(-44, -30.6, 44, -30.6, 1.2, 1.4)
/** The border along the hem: a paper band following its points, with ink lozenges in it. */
export const MANTLE_LAID_BAND =
  'M-48 -5L-39 -7.6L-29 -12.4L-19 -7.2L-9 -11.4L1 -6.4L11 -11.8L20 -7.4L30 -12.8L40 -8.2L48.6 -4.4L48.8 -0.8L40 -4.6L30 -9.2L20 -3.8L11 -8.2L1 -2.8L-9 -7.8L-19 -3.6L-29 -8.8L-39 -4L-48.4 -1.2Z'
export const MANTLE_LAID_BORDER = [-39, -29, -19, -9, 1, 11, 20, 30, 40]
  .map((x, i) => `M${x - 1.6} ${i % 2 ? -8.4 : -5.8}l1.6 -1.4l1.6 1.4l-1.6 1.4Z`)
  .join('')

/** The mantle over its bench, placed with its middle on the ground at `at`. */
export function MantleLaid({
  at,
  scale = 1,
  flip = false,
}: {
  at: P
  scale?: number
  flip?: boolean
}) {
  return (
    <g
      transform={`translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -scale : scale)} ${n(scale)})`}
    >
      {/* the stone bench's ends, showing at either side */}
      <path
        d="M-54 1V-26H-46V1ZM46 1V-26H54V1Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={MANTLE_LAID} fill={INK} stroke={PAPER} strokeWidth={3.2} strokeLinejoin="round" />
      <path d={MANTLE_LAID} fill={INK} />
      <path d={MANTLE_LAID_CUTS + MANTLE_LAID_BAND} fill={PAPER} />
      <path d={MANTLE_LAID_BORDER} fill={INK} />
      {/* the collar, rolled on the top, and its clasp */}
      <path
        d="M-40 -33C-34 -38 -22 -39 -14 -35L-16 -31C-24 -34 -32 -33 -38 -30Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <circle cx={-27} cy={-35.6} r={2.4} fill={PAPER} stroke={INK} strokeWidth={1} />
    </g>
  )
}

/**
 * Caliban's gaberdine: a coarse loose coat to the knee with a ragged hem,
 * its rope belt, folds and the patched hem cut in paper (GABERDINE_CUTS).
 */
export const GABERDINE =
  'M-6 -146C-14 -144 -18 -138 -18 -128C-18 -112 -16 -98 -15 -88C-18 -74 -21 -58 -23 -42L-17 -44.6L-12.4 -39L-6.6 -43.4L-0.4 -38.4L5.6 -43L11.6 -39L17 -43.4C16 -58 14 -74 13 -88C15 -98 17 -112 17 -128C17 -138 12 -144 6 -146C2 -147.4 -2 -147.4 -6 -146Z'
export const GABERDINE_CUTS =
  gouge(-15, -89.6, 14, -88.4, 1.7, 0.4) +
  gouge(6, -88, 9, -70, 1.3, -0.4) +
  gouge(9.6, -88, 14, -72, 1.2, -0.6) +
  gouge(-6, -80, -15, -48, 1.8, 1) +
  gouge(3, -80, 6, -48, 1.6, -0.6) +
  gouge(-8, -136, -12, -98, 1.4, 1)

/** A seaman's wide breeches, to the knee, gathered at the waist; two folds cut in paper. */
export const SLOPS =
  'M-14 -78C-19 -66 -20 -50 -16.4 -37L-2.4 -36L0 -48L2.6 -36L16.6 -37C19.4 -50 18 -66 13.6 -78Z'
export const SLOPS_CUTS = gouge(-9, -70, -11, -42, 1.4, 0.8) + gouge(8, -70, 10, -42, 1.4, -0.6)

/** A bare foot on the ground at (x, y), toes towards `facing`; the toes' line cut by BARE_TOES. */
export function bareFoot([x, y]: P, f: 1 | -1): Part {
  return {
    d: `M${n(x - f * 4.4)} ${n(y - 8)}L${n(x + f * 3)} ${n(y - 6.4)}C${n(x + f * 7)} ${n(y - 5.6)} ${n(x + f * 11)} ${n(y - 4.2)} ${n(x + f * 14)} ${n(y - 1.8)}C${n(x + f * 15.2)} ${n(y - 0.8)} ${n(x + f * 15)} ${n(y + 1)} ${n(x + f * 13.4)} ${n(y + 1)}L${n(x - f * 6)} ${n(y + 1)}C${n(x - f * 7)} ${n(y - 2)} ${n(x - f * 6.4)} ${n(y - 5.4)} ${n(x - f * 4.4)} ${n(y - 8)}Z`,
  }
}
const bareToes = ([x, y]: P, f: 1 | -1) => gouge(x + f * 9.6, y - 3.2, x + f * 13.2, y - 0.8, 0.45)

/**
 * A long gown on a seated figure, facing right: the bodice from `neck` to
 * `waist`, the skirt over the lap to the `knee` and falling from it to the
 * hem on the ground in front of the shins; behind, it falls to the seat.
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
 * A staff from `foot` to `top`, as a part of the figure that holds it, so
 * the halo cuts it free of the ground as one shape with him. Its head is
 * thickened a little, a plain knob.
 */
export function staffParts(foot: P, top: P): Part[] {
  return [
    { d: limb([foot, top]), w: 3.8 },
    { d: `M${n(top[0] - 3.4)} ${n(top[1] + 2)}a3.4 4.2 0 1 0 6.8 0a3.4 4.2 0 1 0 -6.8 0Z` },
  ]
}

/**
 * Prospero's staff as every panel holds it: the near hand closed round it at
 * the waist, a forearm's length in front of him, so that it stands clear of
 * his face. Spread it into a pose: `{ near: STAFF_HELD.near, staff:
 * STAFF_HELD.staff }`, facing either way.
 *
 * WHY (2 October 2026). The first panels held it close at the hip, from
 * [24, 0] to [14, -212]; on that line it ran up through his eye and nose, and
 * at panel size it cut his face in two.
 */
export const STAFF_HELD: { near: ArmPose; staff: { foot: P; top: P } } = {
  near: {
    pts: [
      [5, -128],
      [20, -108],
      [37, -100],
    ],
    hand: 'grip',
    deg: -90,
  },
  staff: { foot: [40, 0], top: [35, -214] },
}

/** A hand closed round a staff or a rope at `wrist`: only ever drawn round something held. */
export function gripHand(wrist: P, angle: number, size = 1): Part {
  const a = deg(angle)
  const u: P = [Math.cos(a), Math.sin(a)]
  const v: P = [-u[1], u[0]]
  const at = (x: number, y: number): P => [
    wrist[0] + (u[0] * x + v[0] * y) * size,
    wrist[1] + (u[1] * x + v[1] * y) * size,
  ]
  return {
    d: `M${pt(at(-1, -4))}L${pt(at(5, -5.4))}Q${pt(at(10.6, -4.6))} ${pt(at(10.6, 0))}Q${pt(at(10.6, 4.6))} ${pt(at(5, 5.4))}L${pt(at(-1, 4))}Z`,
  }
}

/** A paper ring round an arm at the elbow, where a pushed-up sleeve ends and the forearm is bare. */
function sleeveEnd(pts: P[], w: number): string {
  if (pts.length < 3) return ''
  const e = pts[1]
  const wr = pts[2]
  const L = Math.hypot(wr[0] - e[0], wr[1] - e[1]) || 1
  const u: P = [(wr[0] - e[0]) / L, (wr[1] - e[1]) / L]
  const v: P = [-u[1], u[0]]
  const c: P = [e[0] + u[0] * 4, e[1] + u[1] * 4]
  const h = w / 2 + 0.4
  return gouge(c[0] + v[0] * h, c[1] + v[1] * h, c[0] - v[0] * h, c[1] - v[1] * h, 1)
}

// ── The builder ──────────────────────────────────────────────────────────────

export type Look =
  | 'prospero'
  | 'miranda'
  | 'caliban'
  | 'ferdinand'
  | 'alonso'
  | 'antonio'
  | 'sebastian'
  | 'gonzalo'
  | 'boatswain'
  | 'mariner'
  | 'stephano'
  | 'trinculo'

/** How big each person is, against a man of 1: Miranda is about fifteen. */
const SIZE: Record<Look, number> = {
  prospero: 1,
  miranda: 0.88,
  caliban: 1.02,
  ferdinand: 0.98,
  alonso: 1,
  antonio: 1,
  sebastian: 0.99,
  gonzalo: 0.95,
  boatswain: 1.02,
  mariner: 0.98,
  stephano: 1,
  trinculo: 0.96,
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
  far?: ArmPose
  near?: ArmPose
  /** Hip, knee and ankle of each leg, for the men in hose or breeches and for Caliban. */
  legs?: { far: P[]; near: P[] }
  /** A short cloak (Antonio's falls to the knee), and how far its hem swings back. */
  cloak?: number
  /** A long gown's hem: how far it reaches ahead of the waist and behind it. */
  hem?: { front?: number; back?: number }
  /** 'shut' is asleep: the lid line of EYE_DOWN, with the head bowed. */
  eye?: 'open' | 'down' | 'shut' | 'none'
  /** No hat, cap or crown. */
  bare?: boolean
  /** A rapier sheathed at the hip (the gentlemen). */
  sword?: boolean
  /** Prospero's magic garment, worn, its hem swung back this far. */
  mantle?: number
  /** Prospero's staff, held in the near hand, from its foot to its top, in the figure's frame. */
  staff?: { foot: P; top: P }
  /**
   * Seated on something `seat` units high under the hips (the gowned
   * figures): the knee where the lap ends. The head, neck and waist move
   * down with the seat; place the arms from SEATED's points.
   */
  seated?: { seat: number; knee?: P }
  /** A red flush on the cheek (FLUSH), or anger (ANGER, with the frown). */
  flush?: boolean | 'anger'
  /** The brow drawn down (FROWN). */
  frown?: boolean
  /**
   * Prospero dressed as the Duke of Milan (5.1): "Fetch me the hat and rapier
   * in my cell ... I will discase me, and myself present As I was sometime
   * Milan". The Duke's hat (MILAN_HAT) over his white hair, with no glint of
   * the bald crown under it, and a rapier sheathed at his hip.
   */
  duke?: boolean
}

/** Where a seated figure's neck, waist and head are, for a seat this high. */
export function seatedFrame(seat: number) {
  const waist: P = [0, -seat - 10]
  const neck: P = [0, waist[1] - 38]
  return { waist, neck, head: [3, neck[1] - 22] as P, shoulder: [0, neck[1] + 4] as P }
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
const SEAMEN_LEGS = {
  far: [
    [-6, -40],
    [-6, -3],
  ] as P[],
  near: [
    [6, -40],
    [8, -3],
  ] as P[],
}
const CALIBAN_LEGS = {
  far: [
    [-5, -44],
    [-7, -3],
  ] as P[],
  near: [
    [5, -44],
    [7, -3],
  ] as P[],
}

/** The long gowns to the floor, over no visible legs. */
const GOWNED: Look[] = ['prospero', 'miranda', 'gonzalo']
const IN_HOSE: Look[] = ['ferdinand', 'antonio', 'sebastian']
const SEAMEN: Look[] = ['boatswain', 'mariner']
const GENTLEMEN: Look[] = ['ferdinand', 'alonso', 'antonio', 'sebastian']

function hatOf(look: Look): { d: string; cut?: string; paper?: boolean } | undefined {
  if (look === 'alonso') return { d: CROWN, paper: true }
  if (look === 'antonio') return { d: MILAN_HAT, cut: MILAN_HAT_CUT }
  if (look === 'sebastian') return { d: SEBASTIAN_BONNET, cut: SEBASTIAN_BONNET_CUT }
  if (look === 'gonzalo') return { d: GONZALO_CAP, cut: GONZALO_CAP_CUT }
  if (look === 'boatswain') return { d: SAILOR_CAP, cut: SAILOR_CAP_CUT }
  if (look === 'stephano') return { d: STEPHANO_HAT, cut: STEPHANO_HAT_CUT }
  if (look === 'trinculo') return { d: TRINCULO_HOOD, cut: TRINCULO_HOOD_CUT }
  return undefined
}

function build(p: Pose) {
  const look = p.look
  const girl = look === 'miranda'
  const gowned = GOWNED.includes(look)
  const seat = p.seated?.seat
  const sf = seat !== undefined ? seatedFrame(seat) : undefined
  const h = p.head ?? {}
  const hAt: P = h.at ?? sf?.head ?? (girl ? [3, -154] : [3, -160])
  const headT = `translate(${n(hAt[0])} ${n(hAt[1])}) rotate(${h.rot ?? 0})`
  const armW = girl ? 7.6 : look === 'caliban' ? 9.6 : look === 'gonzalo' ? 9 : 8.6
  const parts: Piece[] = []
  let cuts = ''

  const handOf = (a: ArmPose, sep?: number): Part[] => {
    const kind = a.hand ?? 'mitt'
    const wrist = a.pts[a.pts.length - 1]
    const angle = a.deg ?? endAngle(a.pts)
    if (kind === 'none') return []
    if (kind === 'mitt') return [{ ...mitt(wrist, angle, girl ? 0.85 : 1), sep }]
    if (kind === 'grip') return [{ ...gripHand(wrist, angle, girl ? 0.85 : 1), sep }]
    if (kind === 'point')
      return pointingHand(wrist, angle, girl ? 0.9 : 1, a.thumb ?? 1).map((q) => ({ ...q, sep }))
    if (kind === 'finger') return warningHand(wrist, angle, { size: girl ? 13 : 15, sep })
    // Fanned 18 degrees by default: at 14 the rough edge of the print closed
    // the gaps between the fingers at panel size, and open hands read as
    // fists (the Merchant kit, reviewed 27 September 2026).
    return hand(wrist, angle, {
      size: a.size ?? (girl ? 13.5 : 15),
      spread: a.spread ?? 18,
      thumb: a.thumb,
      sep,
    })
  }
  const armOf = (a: ArmPose, near: boolean): Piece => {
    const sep = near ? 1.5 : undefined
    if (look === 'caliban') cuts += sleeveEnd(a.pts, armW)
    return [{ d: limb(a.pts), w: armW, sep }, ...handOf(a, sep)]
  }

  if (p.far) parts.push(armOf(p.far, false))
  const duke = p.duke && look === 'prospero'
  const sword =
    (p.sword && GENTLEMEN.includes(look)) || duke ? sheathed([0, -74], 1, 76) : undefined

  if (gowned && sf) {
    // A long gown on a seated figure: the lap, and the skirt falling to the feet.
    const knee = p.seated?.knee ?? ([34, -(seat ?? 0) - 8] as P)
    parts.push({
      d: seatedGown(sf.neck, sf.waist, seat ?? 0, knee, {
        shoulder: girl ? 24 : 30,
        waistW: girl ? 16 : 24,
      }),
    })
    parts.push(shoe([knee[0] + 8, 0], 1))
    cuts +=
      gouge(sf.waist[0] - 8, sf.waist[1] + 1, sf.waist[0] + 8.4, sf.waist[1] + 2, 1, 0.8) +
      gouge(knee[0] - 2, knee[1] + 8, knee[0] + 2, -10, 1.6, -0.6) +
      gouge(sf.waist[0] + 6, sf.waist[1] + 6, knee[0] - 4, knee[1] + 2, 1.4, -1)
  } else if (gowned) {
    const front = p.hem?.front ?? (girl ? 28 : 22)
    const back = p.hem?.back ?? (girl ? 34 : 28)
    if (girl) {
      parts.push({
        d: gown([0, -132], [0, -94], 0, 1, { shoulder: 24, waistW: 16, front, back }),
      })
      // the bodice's point, and two folds of the skirt
      cuts +=
        gouge(-8, -95, 8.4, -94, 1, 0.8) +
        gouge(-6, -84, -20, -8, 1.8, 1) +
        gouge(8, -84, 18, -8, 1.8, -1)
    } else {
      // The Duke's rapier hangs behind the gown, its hilt printed over it.
      if (sword) parts.push(sword.scabbard)
      parts.push({
        d: gown([0, -136], [0, -90], 0, 1, { shoulder: 30, waistW: 24, front, back }),
      })
      parts.push(shoe([10, 0], 1))
      // the sash at the waist, the gown's front edge and two long folds (the
      // sash and the back fold only where the mantle, if worn, does not cover)
      const robed = p.mantle !== undefined
      cuts +=
        gouge(robed ? -4 : -12, -91, 13, -90, 1.8) +
        gouge(9, -124, 15, -8, 1.2, -0.6) +
        (robed ? '' : gouge(-4, -80, -14, -8, 1.8, 1)) +
        gouge(4, -80, 6, -8, 1.6, -0.4)
    }
  } else if (look === 'caliban') {
    const legs = p.legs ?? CALIBAN_LEGS
    const leg = (pts: P[]): Part[] => [
      { d: limb(pts), w: 9 },
      bareFoot([pts[pts.length - 1][0], 0], 1),
    ]
    parts.push(...leg(legs.far))
    parts.push(...leg(legs.near))
    parts.push({ d: GABERDINE })
    cuts +=
      GABERDINE_CUTS +
      bareToes([legs.far[legs.far.length - 1][0], 0], 1) +
      bareToes([legs.near[legs.near.length - 1][0], 0], 1)
  } else if (SEAMEN.includes(look)) {
    const legs = p.legs ?? SEAMEN_LEGS
    const leg = (pts: P[]): Part[] => [
      { d: limb(pts), w: 8.6 },
      bareFoot([pts[pts.length - 1][0], 0], 1),
    ]
    parts.push(...leg(legs.far))
    parts.push(...leg(legs.near))
    parts.push({ d: SLOPS })
    parts.push({
      d: limb([
        [0, -138],
        [0, -76],
      ]),
      w: 24,
    })
    parts.push({ d: doublet([0, -138], [0, -76], 1, { width: 30, hem: 8, flare: 4 }) })
    cuts +=
      SLOPS_CUTS +
      gouge(-12, -78, 12, -79, 1.2) +
      gouge(7.6, -128, 8.4, -86, 0.9, 0.4) +
      bareToes([legs.far[legs.far.length - 1][0], 0], 1) +
      bareToes([legs.near[legs.near.length - 1][0], 0], 1)
  } else if (look === 'stephano' || look === 'trinculo') {
    // The butler and the jester: hose and shoes under a doublet, no ruff and
    // no rapier. The jester's coat is longer, and pied (`motley`), and his
    // hose are of two colours (`piedHose`).
    const fool = look === 'trinculo'
    const legs = p.legs ?? MEN_LEGS
    const leg = (pts: P[]): Part[] => [{ d: limb(pts), w: 9 }, shoe([pts[pts.length - 1][0], 0], 1)]
    const coat = fool ? { width: 28, hem: 24, flare: 9 } : { width: 31, hem: 14, flare: 7 }
    parts.push(...leg(legs.far))
    parts.push({
      d: limb([
        [0, -138],
        [0, -72],
      ]),
      w: 22,
    })
    parts.push({ d: doublet([0, -138], [0, -70], 1, coat) })
    parts.push(...leg(legs.near))
    cuts += gouge(-12, -79, 13, -80, 1.2)
    if (fool)
      cuts += motley(coatOutline(coat), p.near?.pts, armW) + piedHose(legs.near, -68 + coat.hem)
    else cuts += gouge(7.6, -128, 8.6, -84, 0.9, 0.4)
  } else {
    // The gentlemen: hose and shoes, and over them a doublet, or the King's gown.
    const legs = p.legs ?? MEN_LEGS
    const leg = (pts: P[]): Part[] => [{ d: limb(pts), w: 9 }, shoe([pts[pts.length - 1][0], 0], 1)]
    parts.push(...leg(legs.far))
    const long = look === 'antonio'
    if (p.cloak !== undefined || long) {
      parts.push({ d: cloak(p.cloak ?? 0, long) })
      cuts += cloakCuts(p.cloak ?? 0, long)
    }
    if (sword) parts.push(sword.scabbard)
    parts.push({
      d: limb([
        [0, -138],
        [0, -72],
      ]),
      w: 22,
    })
    if (look === 'alonso') {
      // A gown to the knee over his hose, girdled, with a broad collar cut in paper.
      parts.push(...leg(legs.near))
      parts.push({
        d: gown([0, -136], [0, -92], -40, 1, { shoulder: 32, waistW: 26, front: 16, back: 20 }),
      })
      cuts +=
        gouge(-13, -93, 14, -92, 1.4) +
        gouge(6, -128, 9, -46, 1.6, -0.4) +
        gouge(-6, -84, -14, -46, 1.8, 1) +
        gouge(-14, -132, 12, -130, 2.2, 2.4)
    } else {
      parts.push({ d: doublet([0, -138], [0, -70], 1, { width: 28, hem: 16, flare: 6 }) })
      parts.push(...leg(legs.near))
      // the doublet's buttons down the front and the girdle at the waist
      cuts += gouge(7.6, -128, 8.6, -84, 0.9, 0.4) + gouge(-11, -79, 12, -80, 1.1)
    }
  }

  // The magic garment hangs from the shoulders over the gown, as a cloak
  // does, so its border shows down its front edge and along its hem.
  if (p.mantle !== undefined) {
    parts.push({ d: mantle(p.mantle) })
    cuts += mantleCuts(p.mantle)
  }

  // The head, and what is behind or on it.
  const hat: ReturnType<typeof hatOf> = p.bare
    ? undefined
    : duke
      ? { d: MILAN_HAT, cut: MILAN_HAT_CUT }
      : hatOf(look)
  // The lock and the long fall hang from the head but do not turn with it.
  const lockT = `translate(${n(hAt[0])} ${n(hAt[1])})`
  if (look === 'miranda') parts.push({ d: MIRANDA_FALL, t: lockT }, { d: MIRANDA_HAIR, t: headT })
  if (look === 'caliban') parts.push({ d: CALIBAN_HAIR, t: headT })
  if (look === 'ferdinand') parts.push({ d: FERDINAND_HAIR, t: headT })
  // (Prospero's own white hair shows under the Duke's hat, not dark nape hair.)
  if (hat && look !== 'gonzalo' && look !== 'trinculo' && look !== 'prospero')
    parts.push({ d: NAPE_HAIR, t: headT })
  if (look === 'sebastian') parts.push({ d: SOLANIO_BEARD, t: headT })
  parts.push({
    d: look === 'miranda' ? HEAD_GIRL : look === 'ferdinand' ? HEAD_YOUTH : HEAD_MAN,
    t: headT,
  })
  if (hat && !hat.paper) parts.push({ d: hat.d, t: headT })
  if (look === 'miranda') parts.push({ d: MIRANDA_LOCK, t: lockT, sep: 1.3 })

  if (p.near) parts.push(armOf(p.near, true))
  // The staff over the near hand's palm, then the hand closed over it again.
  const staff: Part[] = p.staff ? staffParts(p.staff.foot, p.staff.top) : []
  return { parts, cuts, headT, lockT, hat, hilt: sword?.hilt, staff }
}

/**
 * One of the people of the play, cut from the block: placed with its feet at
 * `at`, scaled by `scale` (on top of the person's own size), and turned to
 * face left with `flip`. `children` are drawn last, in the figure's own frame
 * (a book, a log, a rope held in the hand).
 */
export function Person({
  pose,
  at,
  scale = 1,
  flip = false,
  veiled,
  children,
}: {
  pose: Pose
  at: P
  scale?: number
  flip?: boolean
  /**
   * Invisible to the others on stage ("Prospero above, invisible", 3.3): give
   * the piece's uid, and the figure is cut as Ariel's veil is, its outline and
   * fine upright cuts with the ground showing through, in INK on a light
   * ground or PAPER on a dark one.
   */
  veiled?: { uid: string; key?: string; on?: 'light' | 'dark' }
  children?: ReactNode
}) {
  const { parts, cuts, headT, lockT, hat, hilt, staff } = build(pose)
  const look = pose.look
  const s = scale * SIZE[look]
  const eye = pose.eye ?? 'open'
  const transform = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`
  if (veiled) {
    const clip = `${veiled.uid}-${veiled.key ?? look}-veil`
    const line = veiled.on === 'dark' ? PAPER : INK
    const all = [...parts.flatMap((q) => (Array.isArray(q) ? q : [q])), ...staff]
    const shapes = all.map((q, i) => <path key={i} d={asShape(q)} transform={q.t} />)
    let hatch = ''
    for (let x = -70; x < 80; x += 3) hatch += `M${x} -250V4`
    return (
      <g transform={transform}>
        <defs>
          <clipPath id={clip}>{shapes}</clipPath>
        </defs>
        <g clipPath={`url(#${clip})`}>
          <path d={hatch} stroke={line} strokeWidth={0.85} />
        </g>
        <g fill="none" stroke={line} strokeWidth={LINE.bold} strokeLinejoin="round">
          {shapes}
        </g>
        <g transform={headT}>
          <path d={EYE} fill={line} />
        </g>
        {children}
      </g>
    )
  }
  // The staff is cut with the figure, so one halo runs round both, and the
  // gripping hand is printed again over it.
  const near = pose.near
  const grip =
    staff.length && near && (near.hand ?? 'mitt') === 'grip'
      ? gripHand(near.pts[near.pts.length - 1], near.deg ?? endAngle(near.pts))
      : undefined
  return (
    <CutFigure
      parts={staff.length ? [...parts, ...staff] : parts}
      cuts={cuts || undefined}
      transform={transform}
    >
      {grip && <path d={grip.d} fill={INK} stroke={PAPER} strokeWidth={1} />}
      <g transform={headT}>
        {look === 'prospero' && (
          <>
            <path d={PROSPERO_HAIR} fill={PAPER} stroke={INK} strokeWidth={1} />
            <path d={PROSPERO_HAIR_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
            <path
              d={(pose.frown ? FROWN : WHITE_BROW) + PROSPERO_LINES + (hat ? '' : PROSPERO_SHINE)}
              fill={PAPER}
            />
          </>
        )}
        {look === 'gonzalo' && (
          <>
            <path d={OLD_HAIR} fill={PAPER} stroke={INK} strokeWidth={0.9} />
            <path d={FULL_BEARD} fill={PAPER} stroke={INK} strokeWidth={0.9} />
            <path d={FULL_BEARD_STRANDS + OLD_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
            <path d={WHITE_BROW} fill={PAPER} />
          </>
        )}
        {look === 'miranda' && <path d={MIRANDA_STRANDS} fill={PAPER} />}
        {look === 'caliban' && (
          <>
            <path d={CALIBAN_STRANDS + CALIBAN_LINES} fill={PAPER} />
            <path
              d={CALIBAN_EAR}
              fill="none"
              stroke={PAPER}
              strokeWidth={1.2}
              strokeLinecap="round"
            />
          </>
        )}
        {look === 'ferdinand' && (
          <>
            <path d={FERDINAND_STRANDS} fill={PAPER} />
            <path d={EAR} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinecap="round" />
          </>
        )}
        {look === 'sebastian' && <path d={SOLANIO_BEARD_CUTS} fill={PAPER} />}
        {(look === 'mariner' ||
          (hat === undefined && (look === 'alonso' || look === 'antonio'))) && (
          <path d={HAIR_SHORT} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinecap="round" />
        )}
        {hat?.cut && <path d={hat.cut} fill={PAPER} />}
        {hat?.paper && (
          <>
            <path d={hat.d} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
            <path d={CROWN_BAND} fill="none" stroke={INK} strokeWidth={1} />
          </>
        )}
        {GENTLEMEN.includes(look) && <path d={RUFF} fill={PAPER} stroke={INK} strokeWidth={0.8} />}
        {eye !== 'none' && <path d={eye === 'open' ? EYE : EYE_DOWN} fill={PAPER} />}
        {pose.frown && look !== 'prospero' && <path d={FROWN} fill={PAPER} />}
        {pose.flush && (
          <path
            d={pose.flush === 'anger' ? ANGER : FLUSH}
            fill="none"
            stroke={RED}
            strokeWidth={1.7}
            strokeLinecap="round"
          />
        )}
      </g>
      {look === 'miranda' && (
        <path d={MIRANDA_FALL_STRANDS + MIRANDA_LOCK_CUT} transform={lockT} fill={PAPER} />
      )}
      {pose.mantle !== undefined && <path d={mantleBorder(pose.mantle)} fill={INK} />}
      {hilt && <path d={hilt} fill={PAPER} stroke={INK} strokeWidth={0.8} />}
      {children}
    </CutFigure>
  )
}

// ── Ariel ────────────────────────────────────────────────────────────────────

/**
 * Ariel, in a frame like a man's (the head centred on (3, -160), the hips at
 * (0, -86)), but with no feet: below the waist his shift streams back into
 * wisps of air that curl at their ends, the lowest about 18 units above the
 * ground. Place with `at`, `scale` and `flip`; raise him off the ground with
 * a smaller `at` y.
 *
 * HOW HE IS CUT (2 October 2026). In PAPER, with a thick INK edge (`halo`
 * 3), as the style guide asks of a lit figure on a light ground: with the
 * thin edge a figure in ink is given, he vanished into a daylit sky. His hair
 * is a cap over the crown with locks streaming straight back in the wind,
 * not up: locks raised above the head read as feathers, and as a headdress.
 * The wisps are four, of different lengths, curling at their ends, so they
 * are never taken for legs (a fifth, short one flying back from the waist,
 * read as a disc). In daylight a few curls of wind are cut in ink
 * round him (`wind`).
 */
export interface SpiritPose {
  /** Shoulder, elbow and wrist of each arm, in the spirit's frame. Hands are open, or point. */
  far?: ArmPose
  near?: ArmPose
  head?: { rot?: number }
  /**
   * 'air': hair streaming back in the wind. 'nymph': hair falling in long
   * waves, like water. 'harpy': as 'air', with the harpy's wings (3.3).
   */
  form?: 'air' | 'nymph' | 'harpy'
  /** How far the wisps of his body stream back behind him, 1 by default. */
  trail?: number
  /** Curls of wind cut in ink round him, for a light ground. On by default. */
  wind?: boolean
  /** A red bloom on the cheek. */
  flush?: boolean
}

/** A band of even width along a polyline, as a filled shape: an arm that can be clipped. */
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

/** His shift, from the shoulders to the hips: slender, drawn in at the waist. */
const ARIEL_TORSO =
  'M-11 -140C-14 -132 -13 -118 -9 -104C-8 -98 -9 -92 -11 -86L12 -86C10 -92 9 -98 10 -104C13 -118 14 -132 10 -140C4 -143 -5 -143 -11 -140Z'
/** The shift's neck and the fold at its waist, cut in ink. */
const ARIEL_TORSO_CUTS =
  gouge(-8, -101, 9, -101, 0.8, 0.8) +
  gouge(-6, -139, 6, -139, 0.7, 1.4) +
  gouge(3, -132, 5, -106, 0.6, -0.4)

/** A wisp's spine, from the hips back and down, curling up at its end. */
const WISPS: [P[], number][] = [
  [
    [
      [-10, -90],
      [-16, -74],
      [-26, -60],
      [-40, -50],
      [-56, -46],
      [-66, -50],
      [-67, -58],
      [-61, -61],
    ],
    15,
  ],
  [
    [
      [-4, -88],
      [-8, -70],
      [-16, -54],
      [-28, -40],
      [-44, -32],
      [-58, -32],
      [-63, -38],
      [-59, -43],
    ],
    15,
  ],
  [
    [
      [3, -88],
      [2, -68],
      [-4, -50],
      [-14, -34],
      [-28, -22],
      [-42, -18],
      [-49, -22],
    ],
    13,
  ],
  [
    [
      [9, -88],
      [10, -70],
      [6, -52],
      [-2, -36],
      [-12, -24],
      [-20, -19],
    ],
    10,
  ],
]
function arielWisps(trail: number): string {
  return WISPS.map(([pts, w]) =>
    ribbon(
      pts.map(([x, y]): Pt => [x * trail, y]),
      w,
      0.75,
      false,
    ),
  ).join('')
}

/** The cap of his hair over the crown, leaving the face, in the head's frame. */
const ARIEL_CAP =
  'M14.8 -11C11 -21 -1 -25 -10 -21.6C-16.6 -19 -19.6 -12 -19.4 -4C-19.2 1 -17.6 5 -15 8L-11 4C-12.4 -2 -11.6 -8 -8 -12C-3 -16 6 -15 14.8 -11Z'
/** The locks, in the head's frame: streaming back in the wind, or falling like water. */
const LOCKS: Record<'air' | 'nymph', [P[], number][]> = {
  air: [
    [
      [
        [-8, -20],
        [-20, -25],
        [-32, -24],
        [-44, -28],
        [-56, -26],
        [-66, -30],
      ],
      8,
    ],
    [
      [
        [-13, -15],
        [-26, -17],
        [-38, -14],
        [-50, -17],
        [-62, -13],
        [-72, -15],
      ],
      8,
    ],
    [
      [
        [-16, -8],
        [-28, -7],
        [-40, -3],
        [-52, -5],
        [-64, 0],
      ],
      7.5,
    ],
    [
      [
        [-17, -1],
        [-28, 3],
        [-38, 8],
        [-48, 7],
        [-58, 12],
      ],
      7,
    ],
    [
      [
        [-15, 5],
        [-24, 11],
        [-32, 17],
        [-42, 18],
      ],
      6,
    ],
  ],
  nymph: [
    [
      [
        [-14, -10],
        [-22, 6],
        [-20, 22],
        [-26, 38],
        [-22, 54],
        [-28, 70],
      ],
      9,
    ],
    [
      [
        [-8, -17],
        [-18, 0],
        [-14, 16],
        [-20, 32],
        [-16, 48],
      ],
      8,
    ],
    [
      [
        [-18, -2],
        [-28, 14],
        [-26, 30],
        [-32, 46],
        [-30, 62],
      ],
      8,
    ],
  ],
}
function arielHair(form: 'air' | 'nymph'): string {
  return ARIEL_CAP + LOCKS[form].map(([pts, w]) => ribbon(pts as Pt[], w, 0.6, true)).join('')
}
/** Ink strands cut back into his hair, so it reads as hair at panel size. */
const STRANDS: Record<'air' | 'nymph', string> = {
  air: 'M12 -15C4 -20 -6 -21 -14 -16M8 -12C1 -15 -7 -14 -12 -10M-14 -20C-26 -23 -38 -23 -52 -25M-18 -13C-30 -14 -42 -13 -56 -14M-20 -6C-32 -4 -44 -3 -56 -2M-19 1C-28 5 -38 8 -48 9',
  nymph:
    'M10 -17C2 -21 -8 -21 -16 -15M-14 -6C-19 6 -18 20 -22 34M-9 -12C-15 2 -12 14 -16 28M-20 2C-25 14 -24 26 -28 40',
}

/** His face, cut in ink on the paper head: a brow, the eye, the line of the mouth. */
const ARIEL_FACE =
  gouge(6.4, -8.6, 14.6, -7.8, 0.8, -0.4) +
  'M7.4 -4.2Q10.2 -6.6 13 -4Q10.2 -1.6 7.4 -4.2Z' +
  gouge(10.8, 10.6, 15, 9.8, 0.55)

/** Curls of wind round him, in his frame: about the wisps and behind his hair. */
const WIND =
  'M-80 -70C-92 -64 -96 -52 -88 -46C-82 -42 -76 -48 -80 -54' +
  'M24 -60C34 -52 34 -40 26 -36C20 -34 16 -40 22 -44' +
  'M-40 -14C-52 -8 -66 -8 -74 -14'

export function Ariel({
  pose,
  at,
  scale = 1,
  flip = false,
  veiled,
  children,
}: {
  pose: SpiritPose
  at: P
  scale?: number
  flip?: boolean
  /**
   * Invisible to all but Prospero: give the piece's uid, and he is cut as a
   * veil, his outline and fine cuts with the ground showing through, in INK
   * on a light ground or PAPER on a dark one.
   */
  veiled?: { uid: string; key?: string; on?: 'light' | 'dark' }
  children?: ReactNode
}) {
  const form = pose.form ?? 'air'
  const s = scale * 0.96
  const headT = `translate(3 -160) rotate(${pose.head?.rot ?? 0})`
  const transform = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`
  const handParts = (a: ArmPose): Part[] => {
    const wrist = a.pts[a.pts.length - 1]
    const angle = a.deg ?? endAngle(a.pts)
    if (a.hand === 'point') return pointingHand(wrist, angle, 0.9, a.thumb ?? 1)
    return hand(wrist, angle, { size: a.size ?? 17, spread: a.spread ?? 24, thumb: a.thumb })
  }
  const wisps = arielWisps(pose.trail ?? 1)
  const locks = form === 'nymph' ? 'nymph' : 'air'
  const hair = arielHair(locks)
  const wind = (pose.wind ?? true) && form === 'air'
  const wings = form === 'harpy' ? harpyWings() : undefined
  if (veiled) {
    const clip = `${veiled.uid}-${veiled.key ?? 'ariel'}-veil`
    const line = veiled.on === 'dark' ? PAPER : INK
    // The veil: fine upright cuts inside his outline, the ground showing
    // between them, and his outline cut round every part.
    let hatch = ''
    for (let x = -120; x < 70; x += 3) hatch += `M${n(x)} -250V0`
    const arms = [pose.far, pose.near].filter((a): a is ArmPose => !!a)
    // Locks streaming back in the wind are cut along their length, as hair
    // is, never across it. REVIEWED 2 October 2026: cut across by the veil's
    // upright lines, the row of locks behind his head read at panel size as
    // the barbs of feathers, a feathered headdress ("The plot against
    // Prospero"). So only the cap over his crown takes the upright cuts, and
    // each streaming lock is an outline with a strand cut along it. Hair
    // falling like water ('nymph') already runs with the upright cuts.
    const streaming = locks === 'air'
    const body = (
      <>
        <path d={wisps + ARIEL_TORSO} />
        {arms.map((a) => (
          <path key={a.pts.join()} d={band(a.pts, 6.4)} />
        ))}
      </>
    )
    return (
      <g transform={transform}>
        <defs>
          <clipPath id={clip}>
            {body}
            <path d={(streaming ? ARIEL_CAP : hair) + HEAD_YOUTH} transform={headT} />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clip})`}>
          <path d={hatch} stroke={line} strokeWidth={0.85} />
        </g>
        <g fill="none" stroke={line} strokeWidth={LINE.bold} strokeLinejoin="round">
          {body}
          <path d={hair + HEAD_YOUTH} transform={headT} />
        </g>
        {streaming && (
          <g transform={headT}>
            <path
              d={STRANDS.air}
              fill="none"
              stroke={line}
              strokeWidth={0.9}
              strokeLinecap="round"
            />
          </g>
        )}
        <CutFigure
          parts={arms.map(handParts)}
          tone={veiled.on === 'dark' ? 'paper' : 'ink'}
          halo={1.2}
        />
        <g transform={headT}>
          <path d={ARIEL_FACE} fill={line} />
        </g>
        {children}
      </g>
    )
  }
  return (
    <g transform={transform}>
      {wind && <path d={WIND} fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />}
      {wings && (
        <CutFigure
          parts={[{ d: wings.far.d }, { d: wings.near.d }]}
          cuts={wings.far.quills + wings.near.quills}
          tone="paper"
          halo={3}
        />
      )}
      <CutFigure
        parts={[
          { d: wisps },
          ...(pose.far ? [{ d: band(pose.far.pts, 6.4) }] : []),
          { d: ARIEL_TORSO },
          { d: HEAD_YOUTH, t: headT },
          { d: hair, t: headT },
          ...(pose.near ? [{ d: band(pose.near.pts, 6.4), sep: 1.2 }] : []),
        ]}
        cuts={ARIEL_TORSO_CUTS}
        tone="paper"
        halo={3}
      >
        <g transform={headT}>
          <path
            d={STRANDS[locks]}
            fill="none"
            stroke={INK}
            strokeWidth={0.9}
            strokeLinecap="round"
          />
          <path d={form === 'harpy' ? ARIEL_FACE_STERN : ARIEL_FACE} fill={INK} />
          {pose.flush && (
            <path d={FLUSH} fill="none" stroke={RED} strokeWidth={1.7} strokeLinecap="round" />
          )}
        </g>
      </CutFigure>
      {/* The hands, with an edge of their own: under the body's thick edge
          the gaps between the fingers closed, and they read as claws. */}
      <CutFigure
        parts={[pose.far, pose.near].filter((a): a is ArmPose => !!a).map(handParts)}
        tone="paper"
        halo={1.5}
      />
      {children}
    </g>
  )
}

// ── The butler and the jester, the harpy, and a veil ────────────────────────
//
// Added on 2 October 2026 with the panels of moments 6 to 10 (Act 2, Scene 1
// to Act 3, Scene 3), where Stephano and Trinculo first come on and Ariel
// comes "like a Harpy". What the play says of them is in the docblock above.

/**
 * Stephano's hat: a felt hat of the time, a tall crown with a flat top over a
 * broad brim that droops at its edges, worn tipped back off the brow; its
 * band is cut in paper (STEPHANO_HAT_CUT). The play gives him no hat; it is
 * invented only so that he is known at panel size, and nobody else on the
 * island wears a brim. (A round crown over a narrow brim was tried first, and
 * read as a bowler; a low dented crown, as a fedora: both centuries late.)
 */
export const STEPHANO_HAT =
  'M-31 -1.6C-28 -6 -21 -9.4 -14.4 -11C-14.6 -20 -13 -32 -11.4 -38.4C-5 -41.6 6 -42.6 13.6 -40.6C14.6 -32 16 -22 16.4 -14.6C22 -16.6 28 -17.4 31.6 -14.4C32.6 -13.4 32.4 -11.6 31 -11C25 -11.4 13 -9.6 1 -7.2C-11 -4.8 -24 -1 -31 -1.6Z'
export const STEPHANO_HAT_CUT = gouge(-14, -14.6, 16.2, -18, 1.1, -0.4)

/**
 * Trinculo's hood: a fool's hood, close round the face, with a long point
 * falling back from the crown and a short cape over the shoulders cut into
 * dags along its edge. The play names his motley ("pied ninny", "scurvy
 * patch", 3.2) but not his hood, which is added only so that he is known as
 * the jester at panel size: no bells, no ass's ears. TRINCULO_HOOD_CUT is the
 * paper edge round his face and the seam of the point.
 */
export const TRINCULO_HOOD =
  'M14.6 -11.6C12 -21 1 -25.6 -9 -22.6C-16 -25 -26 -28 -34 -24C-40 -21 -44 -14 -46 -4C-44 -10 -40 -16 -33 -18C-26 -19 -21 -15 -19 -8C-18 2 -19 12 -22 20L-24 28L-19 25L-16 31L-11 26L-7 32L-2 27L2 31L5 25C2 18 0 8 1.6 0C3 -6 8 -10.6 14.6 -11.6Z'
export const TRINCULO_HOOD_CUT =
  gouge(14.2, -11.2, 1.8, 2, 0.9, 1.4) +
  gouge(1.6, 2, 4.2, 23, 0.8, 0.6) +
  gouge(-12, -23, -40, -9, 0.6, 1.6)

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

/** How far the point lies from the polyline. */
function distToLine(pts: P[], [x, y]: P): number {
  let best = Infinity
  for (let i = 1; i < pts.length; i++) {
    const [ax, ay] = pts[i - 1]
    const [bx, by] = pts[i]
    const L2 = (bx - ax) ** 2 + (by - ay) ** 2 || 1
    const t = Math.max(0, Math.min(1, ((x - ax) * (bx - ax) + (y - ay) * (by - ay)) / L2))
    best = Math.min(best, Math.hypot(x - (ax + (bx - ax) * t), y - (ay + (by - ay) * t)))
  }
  return best
}

/** The outline of a doublet hung from the neck at (0, -138) to the hip at (0, -70), facing right: as `doublet` cuts it. */
function coatOutline({ width, hem, flare }: { width: number; hem: number; flare: number }): P[] {
  const h = width / 2
  return [
    [-h * 0.55, -142],
    [-h, -134],
    [-h * 0.78, -78],
    [-(h + flare), -70 + hem],
    [h + flare, -70 + hem],
    [h * 0.78, -78],
    [h, -134],
    [h * 0.55, -142],
  ]
}

/**
 * The jester's pied coat: a harlequin of lozenges, every other one cut in
 * paper. Only whole lozenges inside the coat are cut, and none under the near
 * arm, which hangs over the coat (cuts are printed after every part).
 */
function motley(coat: P[], arm: P[] | undefined, armW: number): string {
  const a = 10
  const b = 13
  const k = 0.42
  let d = ''
  for (let y = -128; y < -40; y += b)
    for (let x = -25; x < 30; x += a) {
      const v: P[] = [
        [x, y - b * k],
        [x + a * k, y],
        [x, y + b * k],
        [x - a * k, y],
      ]
      if (!v.every((q) => insidePoly(coat, q))) continue
      if (arm && v.some((q) => distToLine(arm, q) < armW / 2 + 2.4)) continue
      d += `M${pt(v[0])}L${pt(v[1])}L${pt(v[2])}L${pt(v[3])}Z`
    }
  return d
}

/** The jester's near leg in paper, from below his coat's hem to his shoe: his hose are of two colours. */
function piedHose(leg: P[], fromY: number): string {
  const pts: P[] = []
  for (let i = 0; i < leg.length; i++) {
    const q = leg[i]
    if (q[1] <= fromY) continue
    const prev = leg[i - 1]
    if (pts.length === 0 && prev && prev[1] < fromY) {
      const t = (fromY - prev[1]) / (q[1] - prev[1])
      pts.push([prev[0] + (q[0] - prev[0]) * t, fromY])
    }
    pts.push(q)
  }
  if (pts.length < 2) return ''
  const last = pts[pts.length - 1]
  pts[pts.length - 1] = [last[0], Math.min(last[1], -7)]
  return band(pts, 5.4)
}

/**
 * Stephano's bottle, "which I made of the bark of a tree with mine own hands,
 * since I was cast ashore" (2.2): a squat flask of bark with a short neck and
 * a stopper, its bark cut in paper. In its own frame, the mouth at (0, 0) and
 * the body below it, about 19 wide and 31 deep; place it with `at`, `rot` and
 * `scale`, as a child of the figure that holds it. `red` prints it flat in the
 * spot colour, edged and barked in ink.
 */
const BOTTLE =
  'M-3 0L3 0L3.4 6C8 8 9.6 11 9.4 15L9 26C8.6 29 5 31 0 31C-5 31 -8.6 29 -9 26L-9.4 15C-9.6 11 -8 8 -3.4 6Z'
const BOTTLE_STOPPER = 'M-2.4 0.6L-2.8 -4.4C-1 -5.4 1 -5.4 2.8 -4.4L2.4 0.6Z'
const BOTTLE_BARK =
  gouge(-5.6, 12, -6, 27, 0.7, 0.4) +
  gouge(-1, 11, -1.4, 29, 0.7, -0.3) +
  gouge(4, 12, 4.6, 28, 0.7, -0.3) +
  gouge(-7.4, 19, 7.4, 20, 0.5, 0.6)
export function BarkBottle({
  at,
  rot = 0,
  scale = 1,
  red = false,
}: {
  at: P
  rot?: number
  scale?: number
  red?: boolean
}) {
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1])}) rotate(${n(rot)}) scale(${n(scale)})`}>
      <path
        d={BOTTLE + BOTTLE_STOPPER}
        fill={red ? RED : INK}
        stroke={red ? INK : PAPER}
        strokeWidth={red ? 1.2 : LINE.carve}
        strokeLinejoin="round"
      />
      <path d={BOTTLE_BARK} fill={red ? INK : PAPER} />
    </g>
  )
}

/**
 * ARIEL AS THE HARPY (3.3): "Enter Ariel like a Harpy; claps his wings upon
 * the table". The spirit of the kit as he always is, his wisps and his own
 * face, with a harpy's great wings springing from his shoulders behind him:
 * the far one raised high, the near one swept down and back, as if just
 * brought down on the table ("One dowle that's in my plume"). Paper, like
 * him, the quills of the feathers cut in ink. The near wing's feathers reach
 * down to about y -14 in his frame, where a table top can take them, and out
 * well behind his wisps, so the two are not read as one skirt. His brow
 * is drawn down (ARIEL_FACE_STERN). He is a spirit playing a part, and never
 * a monster: no bird's body, no talons, no beak.
 */
type Wing = { d: string; quills: string }
function featheredWing(lead: P[], tips: P[], root: P, elbow: P): Wing {
  let d = 'M' + lead.map(pt).join('L')
  let quills = ''
  const quill = (t: P) => {
    const a: P = [elbow[0] + (t[0] - elbow[0]) * 0.36, elbow[1] + (t[1] - elbow[1]) * 0.36]
    const b: P = [elbow[0] + (t[0] - elbow[0]) * 0.9, elbow[1] + (t[1] - elbow[1]) * 0.9]
    quills += gouge(a[0], a[1], b[0], b[1], 0.8)
  }
  let prev = lead[lead.length - 1]
  quill(prev)
  for (const t of tips) {
    const mid: P = [(prev[0] + t[0]) / 2, (prev[1] + t[1]) / 2]
    const notch: P = [mid[0] + (elbow[0] - mid[0]) * 0.2, mid[1] + (elbow[1] - mid[1]) * 0.2]
    d += `L${pt(notch)}L${pt(t)}`
    quill(t)
    prev = t
  }
  return { d: d + `L${pt(root)}Z`, quills }
}
let wingsCache: { far: Wing; near: Wing } | undefined
function harpyWings() {
  if (!wingsCache)
    wingsCache = {
      far: featheredWing(
        [
          [-6, -140],
          [-14, -164],
          [-28, -188],
          [-48, -206],
          [-76, -220],
          [-108, -228],
        ],
        [
          [-118, -212],
          [-120, -194],
          [-116, -176],
          [-106, -158],
          [-92, -142],
          [-76, -130],
          [-58, -122],
          [-40, -118],
          [-24, -116],
        ],
        [-12, -120],
        [-52, -176],
      ),
      near: featheredWing(
        [
          [-2, -134],
          [-26, -134],
          [-54, -128],
          [-82, -116],
          [-108, -96],
          [-128, -70],
        ],
        [
          [-134, -50],
          [-128, -34],
          [-116, -22],
          [-100, -14],
          [-84, -14],
          [-68, -20],
          [-52, -32],
          [-38, -50],
          [-26, -72],
        ],
        [-12, -104],
        [-72, -80],
      ),
    }
  return wingsCache
}
/** The harpy's face: his own, the brow drawn down towards the nose and the mouth set. */
const ARIEL_FACE_STERN =
  gouge(5.6, -10.6, 15, -6.4, 0.9, -0.2) +
  'M7.4 -4.2Q10.2 -6.6 13 -4Q10.2 -1.6 7.4 -4.2Z' +
  gouge(10.4, 10.8, 15.2, 10.4, 0.6)

/** A limb's path ('M x y L x y ...', or several of them) as lists of points. */
function polylines(d: string): P[][] {
  return d
    .split('M')
    .filter(Boolean)
    .map((s) => s.split('L').map((q) => q.trim().split(/\s+/).map(Number) as P))
}
/** A part as a filled outline, a stroked limb turned into a band: a clip path takes no strokes. */
function asShape(q: Part): string {
  return q.w
    ? polylines(q.d)
        .map((pts) => band(pts, q.w as number))
        .join('')
    : q.d
}
