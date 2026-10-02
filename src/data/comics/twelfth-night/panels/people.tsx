import type { ReactNode } from 'react'

import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { gouge, n, ribbon, type Pt } from '@/components/comics/linocut/carve'

import {
  CutFigure,
  doublet,
  gown,
  hand,
  limb,
  rapier,
  sheathed,
  shoe,
  warningHand,
  type P,
  type Part,
  type Piece,
} from '../../romeo-and-juliet/panels/verona-kit'
import {
  COIF,
  COIF_EDGE,
  EYE,
  EYE_DOWN,
  FULL_BEARD,
  FULL_BEARD_STRANDS,
  HEAD_MAN,
  HEAD_WOMAN,
  OLD_BEARD,
  OLD_STRANDS,
  TONSURE,
  TONSURE_SHINE,
  TONSURE_STRANDS,
  VEIL,
  WHITE_BROW,
  pointingHand,
} from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { CIRCLET, endAngle, mitt } from '../../much-ado-about-nothing/panels/people'
import {
  GAOLER_HELMET,
  GAOLER_HELMET_CUT,
  HAIR_SHORT,
  LORENZO_BONNET,
  LORENZO_BONNET_CUT,
  NAPE_HAIR,
  RUFF,
  SALARINO_CAP,
  SALARINO_CAP_CUT,
  SOLANIO_BEARD,
  SOLANIO_BEARD_CUTS,
} from '../../the-merchant-of-venice/panels/people'
import {
  ANGER,
  EAR,
  FLUSH,
  FROWN,
  SLOPS,
  SLOPS_CUTS,
  bareFoot,
  gripHand,
} from '../../the-tempest/panels/people'

export {
  CutFigure,
  hand,
  limb,
  mitt,
  endAngle,
  gripHand,
  pointingHand,
  rapier,
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
 * THE PEOPLE OF ILLYRIA: one figure kit for every Twelfth Night panel, so that
 * a student meets the same Viola, the same Orsino, the same Olivia and the same
 * Malvolio from the shipwreck to Feste's last song. Draw every recurring
 * character with `Person` (or, for a pose it cannot make, with the heads and
 * pieces below), never with a new outline. A change here changes every panel
 * that uses it: preview them all before changing one. Cut first for the panels
 * of moments 1 to 5 (Act 1, Scenes 1 to 5), with every one of the play's
 * recurring people, so that the artists of the later moments find them here.
 * An artist who needs a person not here (the Priest, the Officers, a servant)
 * adds a `Look` for them below, in the same way, and says so in this docblock.
 *
 * The cutting tools (CutFigure, the open hand with its fingers apart, doublet,
 * gown, shoe, the rapier drawn and sheathed) are the Romeo and Juliet kit's
 * (../../romeo-and-juliet/panels/verona-kit.tsx), the hand at rest the Much
 * Ado kit's, the hand closed round something held, the seaman's slops and the
 * flush on the cheek the Tempest kit's, re-exported, not copied: the comedies
 * are set in the same Italy and Adriatic in the same years, and one hand
 * cutting all of them keeps the site one artist. A figure is cut as the
 * reference panel cuts Fred (src/data/comics/a-christmas-carol/
 * counting-house.tsx): a paper halo round every part, so it reads as one black
 * shape with one carved outline, then the parts in ink, then the paper cuts of
 * folds and features. `Person` builds it from a pose in its own frame: facing
 * right, feet at (0, 0), a man about 182 units tall, the neck at (0, -138), the
 * hip at (0, -70) and the head centred on (3, -160). Place it with `at`,
 * `scale` and `flip` (to face left). A seated or leaning figure moves its
 * `body` (neck and hip) and gives its `legs`; `seatedLegs` gives a man's legs
 * on a seat of a given height.
 *
 * ── THIS PLAY'S OWN RULES, which every panel keeps ─────────────────────────
 * - VIOLA AS CESARIO is a young woman dressed as a young man, as the text says
 *   ("Enter Valentine and Viola in man's attire", 1.4), drawn so that a student
 *   can see it is Viola: her own face (HEAD_TWIN, the face she has in 1.2),
 *   beardless ("send thee a beard", 3.1), the slight build Orsino praises in
 *   her ("Diana's lip / Is not more smooth and rubious", 1.4), and her long
 *   hair gathered up under the page's cap, a dark lock showing at the nape. The
 *   disguise is never mocked: no panel makes a joke of her body or her dress.
 * - SEBASTIAN looks like her: "One face, one voice, one habit, and two persons"
 *   (5.1), and she dresses as he did, "he went / Still in this fashion,
 *   colour, ornament, / For him I imitate" (3.4). So the twins share one head,
 *   one cap with its feather (the "ornament"), one doublet and one cloak, and
 *   are drawn the same size. Where both are in a panel, the composition and
 *   the alt text tell them apart, as the play does.
 * - MALVOLIO is drawn as a man, never a grotesque. In yellow stockings (3.4)
 *   he is comic in what he wears and how he smiles (`crossGartered`,
 *   `smile`), not in his body or face. In the dark room (4.2) he is drawn with
 *   dignity: no caricature of madness or of mental illness.
 * - ANTONIO's devotion to Sebastian is drawn with the same care as every other
 *   bond in the play, never as a stereotype: he is a sea captain, and looks it.
 * - SIR TOBY drinks, and the play says so; the print does not mock it or make
 *   it glamorous. He has no red nose and no drunkard's belly. A cup is drawn
 *   only where the text gives him one.
 * - The shipwreck (1.2) shows the sea and the survivors on the shore, never a
 *   drowning figure; Sebastian on his mast is in the Captain's words only.
 *
 * ── WHAT THE PLAY SAYS OF THEM, and so what is drawn ────────────────────────
 * (the held edition, src/data/full-texts/twelfth-night.ts, Project Gutenberg
 * #1526). Shakespeare describes few of them. Where he is silent a person is
 * drawn plainly in the dress of Illyria about 1600, and is told from the
 * others by a hat or a cut of hair, invented only for that and noted here;
 * nothing is taken from a film, television or stage production.
 *
 * - VIOLA ('viola', 1.2 only) comes ashore "a lady" from the wreck: a young
 *   woman in a plain long gown, her dark hair loose down her back and one lock
 *   fallen forward over her shoulder, with HEAD_TWIN, the face she keeps in
 *   disguise. Nothing names her colouring, so she is in ink like everyone.
 * - CESARIO ('cesario') is Viola from 1.4 on: Malvolio's "Not yet old enough
 *   for a man, nor young enough for a boy ... 'Tis with him in standing water,
 *   between boy and man. He is very well-favoured" (1.5). HEAD_TWIN under a
 *   flat page's cap tilted back with a feather curling from its band
 *   (TWIN_CAP, TWIN_FEATHER), the dark lock at the nape (TWIN_NAPE), a
 *   doublet and hose cut a little slighter than the men's, and a short cloak.
 *   A rapier only where the text gives her one (`sword`): the duel of 3.4.
 * - SEBASTIAN ('sebastian') is Cesario's double, as above, with a rapier: he
 *   fights Sir Andrew in 4.1.
 * - ORSINO ('orsino'), the Duke: "Of great estate, of fresh and stainless
 *   youth ... A gracious person" (1.5). So he is young, his dark hair swept
 *   back to the collar (ORSINO_HAIR), with a short pointed beard (ORSINO_BEARD,
 *   invented, so the master is told from his beardless page at a glance), a
 *   ruff, a cloak to the knee and a plain paper circlet for the ruler of
 *   Illyria (the Much Ado kit's CIRCLET, which its Prince wears).
 * - OLIVIA ('olivia') mourns her brother: "like a cloistress she will veiled
 *   walk" (1.1); "Give me my veil; come, throw it o'er my face" (1.5). So she
 *   is in a black gown with a black veil over her head falling down her back
 *   (the Romeo and Juliet kit's VEIL), its front edge cut in paper. Her face is
 *   described, by Viola, "beauty truly blent, whose red and white / Nature's
 *   own sweet and cunning hand laid on", and by herself, "two lips
 *   indifferent red; item, two grey eyes with lids to them" (1.5). So her face
 *   is the one face in the play cut in PAPER (OLIVIA_FACE), with its features
 *   in ink, and her "red" is a flush on the cheek (`flush`), never on the lips.
 *   Where a panel has her without the veil (`veil: 'none'`), her dark hair is
 *   drawn back into a coil at the back of her head (OLIVIA_HAIR).
 * - MARIA ('maria') is Olivia's gentlewoman ("Call in my gentlewoman", 1.5)
 *   and small: "the little villain" (2.5), "the youngest wren of nine" (3.2),
 *   and Viola's "your giant" (1.5) is a joke on it. So she is the smallest
 *   adult in any panel, in a plain gown and a linen coif (the Romeo and Juliet
 *   kit's COIF), which no other woman in the play wears.
 * - SIR TOBY ('sir-toby') is Olivia's uncle ("my niece"), and says "These
 *   clothes are good enough to drink in, and so be these boots too" (1.3). So
 *   he is an older man, broad in the chest, his crown going bald with a glint
 *   of light on it (TOBY_SHINE), with a full rounded beard (TOBY_BEARD), a
 *   collar worn loose and riding boots to the knee with their tops turned down
 *   (`boots`), which nobody else wears indoors.
 * - SIR ANDREW ('sir-andrew'): "He's as tall a man as any's in Illyria" (1.3);
 *   his hair "will not curl by nature ... it hangs like flax on a distaff"
 *   (1.3); Toby calls him "Sir Andrew Agueface". So he is the tallest man in
 *   any panel and thin, with a long face, and his straight hair hangs to his
 *   shoulders, pale as flax: the one head of hair in the play cut in PAPER
 *   (ANDREW_HAIR), with ink strands running straight down it.
 * - FESTE ('feste') is the fool: "I wear not motley in my brain"; "cucullus
 *   non facit monachum", the hood does not make the monk (1.5). In 4.2 he
 *   says "I am not tall enough to become the function well, nor lean enough to
 *   be thought a good student". So he is shorter than the gentlemen and
 *   sturdy, in a fool's hood with a long point falling back and a dagged cape
 *   (FESTE_HOOD), a coat chequered in paper and ink (motley), and hose of two
 *   colours, the near leg cut in paper. No bells and no ass's ears. He comes
 *   on "with a tabor" in 3.1 (`Tabor`).
 * - SIR TOPAS ('sir-topas') is Feste disguised: "put on this gown and this
 *   beard; make him believe thou art Sir Topas the curate" (4.2). So the same
 *   short, sturdy man in a curate's long dark gown, a close black cap and a
 *   long false beard cut in paper with ink strands (the Romeo and Juliet kit's
 *   FULL_BEARD), so it reads as put on.
 * - MALVOLIO ('malvolio') is Olivia's steward, "a kind of Puritan" (2.3),
 *   "sad and civil" (3.4), and Toby mocks his office: "Go, sir, rub your chain
 *   with crumbs" (2.3). Maria's letter will describe "the colour of his beard,
 *   the shape of his leg" (2.3). So he wears sober black, a plain white
 *   falling band for a collar where the gentlemen wear ruffs, the steward's
 *   chain across his chest cut in paper (STEWARD_CHAIN), and a neat pointed
 *   beard (MALVOLIO_BEARD); his brow is raised and his eye half lidded,
 *   "sick of self-love" (1.5). He goes bareheaded. `crossGartered` gives him
 *   the stockings of 3.4, cut in paper with the garters crossed on them in
 *   ink: the print cannot show yellow, so the colour is left to the words.
 *   `smile` cuts the smile Maria describes: "He does smile his face into more
 *   lines than is in the new map" (3.2).
 * - ANTONIO ('antonio') is a sea captain, "notable pirate, thou salt-water
 *   thief" to Orsino's officer, whose face Orsino last saw "besmear'd / As
 *   black as Vulcan, in the smoke of war" (5.1). So he is a seaman past his
 *   youth, with a short full beard (ANTONIO_BEARD) and the lines of weather at
 *   his eye, a knitted seaman's cap (SEA_CAP), a short jacket over wide
 *   breeches (the Tempest kit's SLOPS), stockings and shoes, and a rapier: he
 *   draws in 3.4.
 * - FABIAN ('fabian'), of Olivia's household from 2.5, is not described: a
 *   plain jerkin and a round cap with a turned-up brim (the Merchant kit's
 *   SALARINO_CAP).
 * - VALENTINE and CURIO ('valentine', 'curio'), Orsino's gentlemen, are not
 *   described. Valentine wears a flat bonnet (the Merchant kit's
 *   LORENZO_BONNET), Curio goes bareheaded with a short beard, and both a
 *   doublet with a ruff.
 * - THE CAPTAIN ('captain') of 1.2 is not described, beyond "There is a fair
 *   behaviour in thee". A master of a ship past middle age: a short grey beard
 *   (the Romeo and Juliet kit's OLD_BEARD), a felt hat with a tall crown and a
 *   broad brim (CAPTAIN_HAT), a sea-coat to the knee, belted, and
 *   boots. THE SAILORS ('sailor') wear short jackets and wide breeches and go
 *   barefoot on the shore, bareheaded or (`cap`) in the seaman's cap.
 * - THE MUSICIANS ('musician') of 1.1 are not described: plain doublets with a
 *   falling band, bareheaded.
 *
 * ADDED for the panels of moments 11 to 15 (Act 3, Scene 1 to Act 4, Scene 2):
 * - THE OFFICERS ('officer') who arrest Antonio "at the suit / Of Count
 *   Orsino" (3.4), and bring him in again in 5.1, are not described. A plain
 *   jerkin with no ruff, the dark hair short at the nape (NAPE_HAIR), and the
 *   steel cap of an officer of the time, a dome with a low comb and a sloping
 *   brim (the Merchant kit's GAOLER_HELMET, which its gaoler wears), which
 *   nobody else in this play wears, so they are known as the law at a
 *   glance. A panel may give one a bill to carry, a staff with a hooked
 *   blade at its head, held upright and never raised against anyone (as
 *   "A duel and an arrest" does).
 * - ANTONIO WITHOUT HIS CAP: the First Officer knows his face "Though now
 *   you have no sea-cap on your head" (3.4). So in 3.4 he is drawn `bare`,
 *   and his short dark hair is cut in paper (the Merchant kit's HAIR_SHORT).
 *
 * ADDED for the panels of moments 16 to 20 (Act 4, Scene 3 and Act 5, Scene 1):
 * - THE PRIEST ('priest') whom Olivia brings to betroth her to Sebastian, "this
 *   holy man", "good father" (4.3), and who swears to the contract in 5.1. He
 *   is old: "my watch hath told me, toward my grave, I have travelled but two
 *   hours" (5.1). Nothing else is said of him. So he is a priest of the
 *   time, in a long black cassock to the floor, girdled (the gown Sir Topas
 *   wears, since Sir Topas plays a curate), bareheaded and tonsured, his
 *   white hair a ring round a shaven crown (the Romeo and Juliet kit's
 *   TONSURE), with a white brow and the lines of age on his cheek
 *   (PRIEST_LINES); clean-shaven, so that he is never taken for Feste's Sir
 *   Topas, whose false beard and cap the play names, and a head taller than
 *   Feste. (A priest's square cap with its ridges and tuft was cut first, and
 *   at panel size read as a crown.)
 *
 * HANDS. Every open hand is `hand`'s, with four fingers and a thumb cut apart,
 * fanned 18 degrees, so it reads as an open hand at panel size and never as a
 * fist; a pointing hand has one long finger and the rest curled; a hand at
 * rest is a small closed mitten; a hand round a cup, a hilt or a rope is
 * `grip`, which only ever closes round something. No hand is raised flat on a
 * straight arm: at panel size that reads as a salute.
 *
 * RED. The spot colour is never put on a mouth or a chin: on this site it was
 * twice read as blood (Hyde's anger, Juliet's lips beside the vial). A flush
 * goes on the cheek (`flush`), Olivia's "red and white" included.
 */

const pt = (p: P) => `${n(p[0])} ${n(p[1])}`

// ── Heads, hair, beards and hats, in profile facing right, centred on (0, 0) ─

/**
 * The twins' one face, Viola's and Sebastian's: a young profile, softer in the
 * nose and chin than the men's (HEAD_MAN) and a little fuller than a girl's,
 * so it serves Viola in her own dress, Viola as Cesario and Sebastian alike.
 */
export const HEAD_TWIN =
  'M-8.6 22C-9.6 16 -14.8 12 -15.8 3C-16.8 -10 -7.8 -19.8 2.6 -19.8C10.6 -19.8 15.2 -13.8 15.2 -8L15.5 -5L20.6 3L15.9 5L16.5 7.8L15.2 9.4L16 11.8C15.4 15.2 12.4 17.4 7.8 17.4L5.8 22Z'

/**
 * Viola's own hair in 1.2: dark, over the crown (VIOLA_HAIR), long and loose
 * down her back (VIOLA_FALL, hung from the head but not turned with it), and
 * one lock fallen forward over her shoulder (VIOLA_LOCK), cut free of her gown
 * by a paper edge, so it reads as hair against the dark gown and not as a
 * hood. Strands cut in paper.
 */
export const VIOLA_HAIR =
  'M14.4 -11.6C10.4 -22 -5 -23.8 -13.4 -16.8C-20 -10.6 -20.8 0.6 -19.8 12.4L-6 10.4C-4.6 -1 -1.2 -6.4 4.2 -9.2C8.6 -11.6 11.6 -12 14.4 -11.6Z'
export const VIOLA_STRANDS =
  gouge(8.6, -17.6, -12.6, -6.4, 0.9, 2.6) +
  gouge(4.2, -19.6, -16, 0, 0.9, 3) +
  gouge(-1, -13.4, -16.4, 8.4, 0.9, 2)
export const VIOLA_FALL =
  'M-19.8 2C-19.8 14 -19.4 24 -22.4 33C-24 43 -19.6 53 -23 62C-23.6 66 -21 70 -20.4 70C-16.6 72.4 -12.2 72.2 -9.2 70C-8.2 60 -5.6 50 -6 40C-6.4 28 -7 16 -5.8 2Z'
export const VIOLA_FALL_STRANDS =
  gouge(-15.6, 6, -17, 36, 1, 1.4) +
  gouge(-11.4, 10, -12.8, 46, 0.9, 1.2) +
  gouge(-8.6, 32, -11.2, 63, 0.9, 1.2) +
  gouge(-14.6, 38, -16.6, 65, 0.9, -0.6)
export const VIOLA_LOCK =
  'M-6.4 4C-2.2 12.6 0 21 0.6 29.4C1.2 38 0.4 44 -1.4 50C1.6 48 4.4 44 5.2 37.6C6 29.4 4.8 19 1 8.4C-0.4 5.2 -2.8 3.4 -6.4 4Z'
export const VIOLA_LOCK_CUT =
  gouge(-2.8, 9.4, 1.6, 44, 0.8, 0.8) + gouge(0.6, 12.6, 3.6, 36, 0.6, 0.4)

/**
 * The twins' cap: a flat page's bonnet tilted back on the head, its band cut
 * in paper (TWIN_CAP_CUT), with a feather curling back from the band
 * (TWIN_FEATHER, its quill and barbs cut in paper by TWIN_FEATHER_CUTS). The
 * play gives Sebastian an "ornament" that Viola copies (3.4) and names no
 * other; the feather is that ornament, and nobody else in the play wears one,
 * so the twins are known by it at panel size.
 */
export const TWIN_CAP =
  'M-18 -7.6C-21.8 -15.8 -13.4 -26 0.8 -27C14 -27.6 23.8 -22 23.2 -14.6C15.2 -11.8 -3.6 -9.8 -18 -7.6Z'
export const TWIN_CAP_CUT = gouge(-17, -10.2, 21.2, -15.8, 0.9, -0.8)
const FEATHER_SPINE: Pt[] = [
  [8, -26.4],
  [-2, -30.4],
  [-13, -31],
  [-22, -28.2],
  [-27.4, -22.4],
  [-29, -15.6],
]
export const TWIN_FEATHER = ribbon(FEATHER_SPINE, 7.6, 0.5, true)
/**
 * The quill along the feather, and its barbs, cut in paper.
 *
 * WHY IT HUGS THE CAP (2 October 2026). It was first cut longer, curling up
 * and back from the band and down behind the head; on a head tilted back, in
 * the panel of 1.4, it stood up from the cap like a horn. It now lies over the
 * crown of the cap and droops just past its back edge.
 */
export const TWIN_FEATHER_CUTS =
  gouge(4, -28, -27.6, -17.6, 0.45, 3.4) +
  gouge(-5, -32.6, -7.6, -29.8, 0.45) +
  gouge(-13, -33.4, -15.6, -30.4, 0.45) +
  gouge(-21, -31, -22.6, -27.8, 0.45)
/**
 * The twins' flush: one short stroke low on the cheek, back towards the ear.
 * (The kit's FLUSH, cut for the Tempest's faces, sat close under the eye on
 * the twins' smaller face and read as a red eye.)
 */
export const TWIN_FLUSH = 'M1.8 6L6.4 7.2'
/**
 * The dark hair at the twins' nape, below the cap, curling to the collar a
 * little longer than a man's (the Merchant kit's NAPE_HAIR is shorter): on
 * Cesario it is the end of Viola's long hair gathered up under the cap.
 */
export const TWIN_NAPE =
  'M-16.6 -6.6C-20.4 0 -19.8 9 -15.6 16.6C-14.6 18.4 -12.6 19.6 -10.6 19.2L-8.8 16.2C-11.2 9.4 -11.4 2.2 -9.4 -5.4Z'
export const TWIN_NAPE_CUTS = gouge(-15.6, -2.4, -14.4, 14.6, 0.6, 0.8)

/**
 * Orsino's hair: dark, swept back from the brow over the crown and falling to
 * the collar behind (ORSINO_HAIR), its strands cut in paper; and his short
 * pointed beard (ORSINO_BEARD), cut with strands so it reads on an ink head
 * (a dark beard left uncut reads only as a longer chin).
 */
export const ORSINO_HAIR =
  'M15.4 -11.4C12.8 -21 1 -25.4 -8.8 -21.6C-17 -18.4 -21 -9 -20.2 1.4C-19.6 9 -18 15.6 -15.2 21.6L-11.6 18.8L-10 22.6C-11.8 14 -12 5.4 -10 -1.2C-7.8 -7.8 -1.6 -11.6 5.6 -11.8C9.4 -12 12.8 -11 15.4 -11.4Z'
export const ORSINO_STRANDS =
  gouge(12, -14.4, -2, -20.4, 0.8, 1.4) +
  gouge(10, -17, -12.4, -9, 0.9, 2.4) +
  gouge(3, -12.6, -14.6, -3, 0.85, 1.6) +
  gouge(-3.4, -19.8, -17.6, 3, 0.9, 2) +
  gouge(-14.4, 0, -16, 18, 0.8, 0.6)
export const ORSINO_BEARD =
  'M-2.6 4C-2.4 11 1.4 17 6.4 20.4C10 22.8 13.4 25 16.2 26.6C17.6 23.4 18.2 19 17.8 15L16.6 11.4L15.4 9.6C12 12 7.4 11.6 3.6 8.6Z'
export const ORSINO_BEARD_CUTS =
  gouge(1, 8, 4.6, 17.6, 0.8, -0.5) +
  gouge(6.4, 12.6, 9.6, 21.6, 0.8, -0.4) +
  gouge(11.6, 13.6, 14.6, 23.4, 0.75, -0.2) +
  gouge(12.4, 9.8, 18, 9.4, 0.7)

/**
 * Olivia's face, in PAPER over the ink head: from the brow along the profile
 * to the chin and back along the jaw, the veil framing it. OLIVIA_FEATURES are
 * cut back into it in ink: the brow, the grey eye "with lids to them", the
 * nostril and the line of the mouth, never red.
 */
export const OLIVIA_FACE =
  'M1.6 -12.8C6.4 -13.6 11 -12.4 14.5 -7.5L15 -4.5L20.5 3L15.5 4.8L16 7.5L14.8 9L15.6 11.5C15 15 12 17 7.5 17C3.8 16.6 0.6 14 -0.8 10C-2.2 5 -2 -6 1.6 -12.8Z'
export const OLIVIA_BROW_MOUTH =
  gouge(5.4, -8.4, 12.8, -8.8, 0.65, -0.5) + gouge(11.8, 9.4, 15.2, 9, 0.45)
export const OLIVIA_EYE =
  'M7.2 -4.4Q9.8 -6.4 12.4 -4.4Q9.8 -2.8 7.2 -4.4Z' + gouge(6.6, -5.6, 12.8, -6, 0.45, -0.7)
/** Olivia's eye cast down, in ink on her paper face. */
export const OLIVIA_EYE_DOWN = gouge(6.8, -3.4, 12.6, -3, 0.7, 0.9)
/** Under her face, the shadow of the jaw where it meets the veil. */
export const OLIVIA_JAW = 'M-0.8 10C0.4 13.6 3.2 16.2 7.4 17L7.2 15.4C4 14.6 1.6 12.4 0.6 9.4Z'
/** The veil's front edge, cut in paper where it frames her face. */
export const VEIL_EDGE =
  'M12.5 -12.5C9.6 -13.2 6 -12.4 2 -9.2C-4.4 -3.6 -6.8 7 -7 20C-7.2 34 -9.2 54 -13 73'

/**
 * Sir Toby's head: an older man's, full in the cheek and jaw. His crown is
 * going bald (TOBY_SHINE, the light on it); a full rounded beard covers his
 * jaw (TOBY_BEARD), its strands and the line of his mouth cut in paper.
 */
export const HEAD_TOBY =
  'M-10 23C-12 17 -17 12 -18 3C-19 -11 -9 -21 3 -21C11 -21 16 -15 16 -9L16.4 -5.4L22.4 3.4L17 5.6L17.8 8.6L16.4 10.2L18.4 13.4C19.4 18.6 16.4 23.4 9.6 24.4C5 25.2 -1 25.4 -5 24.6Z'
export const TOBY_BEARD =
  'M-4.4 5.6C-6.4 14 -4.4 22.4 1.6 27.4C6.6 31.4 13 31.8 17 29C20.4 26.4 21.6 21.4 20.6 16.8L18.8 12.6L17.6 10.2C14.2 12.6 9.6 12.6 5.8 10.4C2.8 8.6 0 7 -4.4 5.6Z'
export const TOBY_BEARD_CUTS =
  gouge(-0.4, 10.4, 2.6, 24.4, 0.8, -0.6) +
  gouge(4.8, 13.4, 7.8, 27.4, 0.85, -0.4) +
  gouge(10.4, 14.6, 12.4, 28.6, 0.8, -0.2) +
  gouge(15.4, 14.6, 17, 25.4, 0.7) +
  gouge(12.4, 10.4, 18.6, 10, 0.75)
export const TOBY_SHINE = gouge(-6, -18, 8, -17.2, 1.1, -1.8)
/** The fringe of hair left round the back of his head, cut with strands. */
export const TOBY_FRINGE =
  gouge(-15.4, -5, -14.4, 9, 0.6, 1) + gouge(-11.6, -11, -10.4, 4, 0.55, 0.8)

/**
 * Sir Andrew's head: long in the face and the nose, the chin small. His hair
 * hangs straight to his shoulders "like flax on a distaff" (ANDREW_HAIR): PAPER
 * with an ink edge, so it is pale and does not melt into the paper halo, cut
 * level at the ends, with ink strands running straight down it.
 */
export const HEAD_ANDREW =
  'M-8.6 24C-9.6 18 -14.6 13 -15.6 3C-16.6 -11 -8 -21 3 -21C11 -21 15.6 -15 15.6 -9L15.8 -5.6L23.4 5L16.6 6.4L17 9.4L15.6 11L16 13.6C15.4 18.2 12.6 21.4 7.6 21.8L6.2 24Z'
export const ANDREW_HAIR =
  'M15.6 -11.6C12.8 -21.8 0 -26.2 -9.8 -22.2C-17.8 -18.8 -21.2 -10 -20.8 0C-20.6 10 -20.8 20 -21.2 30.4L-17 31L-13.6 30L-10.2 31L-7.6 29.8C-8.4 20 -9.2 10 -8.6 1C-7.8 -6.4 -2.8 -11 4.6 -11.8C8.6 -12.2 12.6 -11.4 15.6 -11.6Z'
export const ANDREW_STRANDS =
  'M-17.8 -4V28.6M-14.2 -9V28.4M-11 -5V28.6M-2.6 -20.4C-8.4 -18 -12.6 -13.6 -14.6 -8M5 -20.2C-2 -19 -8 -15 -11.2 -9M10.4 -15.4C4 -15.4 -2.4 -12.2 -6.2 -6'

/**
 * Feste's hood: a fool's hood, close round the face, its long point hanging
 * from the crown down behind his head like a tail, with a short cape over the
 * shoulders cut into dags along its edge. The hood is the "cucullus" he names
 * (1.5); FESTE_HOOD_CUT is the paper edge round his face and the seam of the
 * point.
 *
 * WHY IT HANGS (2 October 2026). The point was first cut rising from the
 * crown and curling back, as the Tempest jester's does; on Feste, at panel
 * size, it read as a hook or a horn over his head. Hanging down his back it
 * reads as cloth.
 */
export const FESTE_HOOD =
  'M15 -11.4C12.4 -21 1.4 -26 -9 -23C-16 -24 -23 -21 -27 -14C-31 -6 -33 4 -32.4 14L-27.8 15C-27 6 -25 -2 -20.6 -8C-18.4 0 -19 10 -21.4 18L-24 26L-18.6 23.6L-15.6 29.6L-10.6 25L-6.4 30.6L-1.6 25.6L2.4 29.6L5.4 23.6C2.4 17 0.4 8 1.8 0C3.2 -6 8.2 -10.4 15 -11.4Z'
export const FESTE_HOOD_CUT =
  gouge(14.6, -11, 2, 2, 0.9, 1.4) +
  gouge(1.8, 2, 4.4, 22, 0.8, 0.6) +
  gouge(-12, -22.6, -30, 9, 0.6, 3.4)

/**
 * The Captain's hat: a felt hat of about 1600, a tall crown with a flat top
 * over a broad brim, its band cut in paper (CAPTAIN_HAT_CUT). (The Much Ado
 * watchman's hat was tried first; its thin brim was lost at panel size and
 * the hat read as a peaked cap three centuries late.)
 */
export const CAPTAIN_HAT =
  'M-31 -5.6L-30 -9L-15 -12.2L-12.6 -31C-6 -34.4 5 -34.6 11.4 -31.4L13.6 -13L33 -11.6L32.6 -7.2C18 -7.6 -10 -6 -31 -5.6Z'
export const CAPTAIN_HAT_CUT = gouge(-14.4, -16.4, 13.2, -17.2, 1.1, -0.3)

/**
 * Olivia's own hair, for a panel where she wears no veil: dark, drawn back
 * from the brow over the crown into a coil at the back of the head, its
 * strands cut in paper (OLIVIA_HAIR_CUTS). Her face stays paper below it.
 */
export const OLIVIA_HAIR =
  'M14 -11.5C10.5 -20 0 -23.5 -8 -21C-12 -24.6 -19 -24.4 -22.6 -19.6C-26.4 -14.6 -25 -7 -20.4 -4C-17.6 -2.2 -14.2 -2.4 -12 -4.2L-9.6 -6C-7.4 -10.4 -2.6 -12.6 2.4 -12.8C6.6 -13 10.6 -12.4 14 -11.5Z'
export const OLIVIA_HAIR_CUTS =
  gouge(9, -16.4, -8, -17.6, 0.7, 1.6) + gouge(4, -19.6, -12, -12, 0.7, 2)
/** The turn of the coil at the back of her head, stroked in paper. */
export const OLIVIA_COIL =
  'M-22.6 -15.6C-20 -20 -15 -20.4 -13 -16.6C-11.6 -13.4 -14.4 -9.6 -18.2 -10.6'

/** Sir Topas's close black cap, over the crown, its edge cut in paper. */
export const TOPAS_CAP =
  'M-15.6 -8.4C-16.4 -17.4 -8 -23 1 -23C9.4 -23 14.6 -18.6 15.4 -11.6C6 -13 -6.6 -11.6 -15.6 -8.4Z'
export const TOPAS_CAP_CUT = gouge(-14.6, -10.6, 14.6, -13.4, 0.9, -0.6)

/** The lines of age on the Priest's cheek: from the nose to the mouth, and the hollow under the cheekbone. */
export const PRIEST_LINES = gouge(15.4, 6, 11.6, 12.4, 0.55, -0.5) + gouge(3, 2, 6.4, 11, 0.6, 1.3)

/**
 * Malvolio's neat pointed beard, long to its point (MALVOLIO_BEARD), cut with
 * strands; his brow raised and arched and his eye half lidded
 * (MALVOLIO_BROW), "sick of self-love"; and the lines of his smile in 3.4
 * (MALVOLIO_SMILE), cut in paper across the cheek, more of them than a smile
 * needs.
 */
export const MALVOLIO_BEARD =
  'M-1.4 5C-1 11.6 2.4 17.6 7.4 21.6C11 24.6 14.4 28 16.6 31.4C17.8 26.6 18.4 21 18 16L16.8 12L15.6 9.8C12.4 12 8 11.8 4.4 9.2Z'
export const MALVOLIO_BEARD_CUTS =
  gouge(2, 9, 6, 20, 0.8, -0.5) +
  gouge(7.6, 13, 11.8, 25, 0.8, -0.4) +
  gouge(13, 14, 16, 27.6, 0.7, -0.2) +
  gouge(12.4, 10, 18, 9.6, 0.7)
export const MALVOLIO_BROW = gouge(5.4, -10, 15.4, -8.6, 1.2, -1.3)
export const MALVOLIO_EYE = 'M7.2 -3.4Q10 -4.6 12.6 -3.4Q10 -2.2 7.2 -3.4Z'
export const MALVOLIO_SMILE =
  gouge(11.6, 9.2, 18.2, 7.4, 0.75, 1.1) +
  gouge(4, 2.4, 9.4, 9.4, 0.55, 1.4) +
  gouge(2, 6.4, 6.6, 12.4, 0.5, 1.2) +
  gouge(6.6, -1.2, 11.8, -0.2, 0.45, 0.6)

/** Antonio's short full beard, cut with strands, and the lines of weather at his eye and cheek. */
export const ANTONIO_BEARD =
  'M-3 5C-4 12 -1 19 4.6 23.4C9 26.6 14 27 17 24.6C19.2 22.4 19.4 18.6 18.4 15L17 11.6L16 9.8C12.6 12.2 8 12 4.4 9.6Z'
export const ANTONIO_BEARD_CUTS =
  gouge(0.6, 9, 3.6, 20.6, 0.8, -0.5) +
  gouge(6, 12.6, 8.6, 23.6, 0.8, -0.4) +
  gouge(11.4, 13.6, 13.6, 23.4, 0.75, -0.2) +
  gouge(12.4, 10, 18, 9.8, 0.7)
export const WEATHER_LINES =
  gouge(5.4, -2.4, 1.4, -0.4, 0.45, 0.3) + gouge(4.4, 1, 0.6, 3.4, 0.4, 0.2)

/**
 * The seaman's knitted cap Antonio and the sailors wear: a tall rounded crown
 * over a thick turned-up band, its edge and two ribs of the knit cut in paper.
 */
export const SEA_CAP =
  'M-17 -7C-19.4 -17 -12 -27 0 -28.4C10.6 -29.4 17 -23.6 17.6 -15L18.4 -10C9.4 -11.6 -6 -10.4 -17 -7Z'
export const SEA_CAP_CUT =
  gouge(-16.4, -11, 17.8, -13.4, 1.1, -0.4) +
  gouge(-6, -24, -8, -14.4, 0.5) +
  gouge(5, -25, 4, -15.2, 0.5)

// ── Collars, chains and garments, in the head's frame or the figure's ───────

/**
 * A plain falling band, a flat white collar lying on the shoulders: Malvolio's
 * sober one, and the musicians'. Paper with an ink edge, in the head's frame.
 */
export const FALLING_BAND =
  'M-11 19.6C-6 24.6 6 26.4 14.6 22L17.6 26.4C9 31.6 -4.6 31.4 -12.6 24.6Z'
/** Sir Toby's collar, the same band worn loose and askew. */
export const LOOSE_BAND = 'M-11.6 20.6C-6 26 4 27.4 12 23.6L17.4 29.6C8 33.4 -4.4 32.6 -13.6 26Z'

/**
 * The steward's chain of office, hung across Malvolio's chest from shoulder to
 * shoulder: a row of links cut in paper along a curve, in the figure's frame
 * given the neck. "Go, sir, rub your chain with crumbs" (2.3).
 */
export function stewardChain(neck: P, hip: P, arm?: P[], armW = 8.6): string {
  const dx = hip[0] - neck[0]
  const dy = hip[1] - neck[1]
  const L = Math.hypot(dx, dy) || 1
  const u: P = [dx / L, dy / L]
  const v: P = [-u[1], u[0]]
  const at = (a: number, b: number): P => [
    neck[0] + u[0] * a + v[0] * b,
    neck[1] + u[1] * a + v[1] * b,
  ]
  let d = ''
  const links = 9
  for (let i = 0; i < links; i++) {
    const t = i / (links - 1)
    // a shallow U from the far shoulder down over the chest to the near shoulder
    const b = -12 + 24 * t
    const a = 6 + 20 * (1 - Math.pow(2 * t - 1, 2))
    const [x, y] = at(a, b)
    // none under the near arm, which hangs over the chest
    if (arm && distToLine(arm, [x, y]) < armW / 2 + 2.6) continue
    const rx = 2.4
    const ry = 1.6
    d += `M${n(x - rx)} ${n(y)}a${rx} ${ry} 0 1 0 ${n(2 * rx)} 0a${rx} ${ry} 0 1 0 ${n(-2 * rx)} 0Z`
  }
  return d
}

/**
 * A riding boot from the knee to the ground, its top turned down in a cuff
 * (cut in paper by bootCuts): Sir Toby's, "so be these boots too" (1.3), the
 * Captain's and Antonio's on shipboard. `knee` and `ankle` are the leg's
 * last two points; the foot points along +x.
 */
function bootParts(knee: P, ankle: P, w: number): Part[] {
  const foot: P = [ankle[0], ankle[1] + 3]
  return [
    { d: limb([knee, ankle]), w: w + 2.6 },
    {
      d: `M${n(foot[0] - 7)} ${n(foot[1] - 9)}L${n(foot[0] + 5)} ${n(foot[1] - 8)}C${n(foot[0] + 11)} ${n(foot[1] - 6)} ${n(foot[0] + 14)} ${n(foot[1] - 3)} ${n(foot[0] + 14)} ${n(foot[1] + 1)}L${n(foot[0] - 7)} ${n(foot[1] + 1)}Z`,
    },
    {
      d: `M${n(knee[0] - w / 2 - 3.4)} ${n(knee[1] - 1)}L${n(knee[0] + w / 2 + 3.4)} ${n(knee[1] - 2)}L${n(knee[0] + w / 2 + 2.4)} ${n(knee[1] + 9)}L${n(knee[0] - w / 2 - 2.4)} ${n(knee[1] + 10)}Z`,
    },
  ]
}
function bootCuts(knee: P, w: number): string {
  return gouge(knee[0] - w / 2 - 2.4, knee[1] + 8.6, knee[0] + w / 2 + 2.2, knee[1] + 7.6, 0.9)
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

/**
 * The outline of a doublet hung from `neck` to `hip`, facing right, as
 * `doublet` cuts it: for the fool's motley, which is cut only inside it.
 */
function doubletOutline(neck: P, hip: P, width: number, hem: number, flare: number): P[] {
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
 * Feste's motley: the coat chequered, every other square cut in paper. Only
 * whole squares inside the coat are cut, and none under the near arm, which
 * hangs over it. Squares, not the Tempest jester's lozenges, so the two fools
 * of the site are not one coat.
 */
function chequer(coat: P[], arm: P[] | undefined, armW: number): string {
  const s = 7.2
  let d = ''
  for (let row = 0; row < 20; row++)
    for (let col = 0; col < 12; col++) {
      if ((row + col) % 2) continue
      const x = -36 + col * s
      const y = -150 + row * s
      const v: P[] = [
        [x, y],
        [x + s, y],
        [x + s, y + s],
        [x, y + s],
      ]
      if (!v.every((q) => insidePoly(coat, q))) continue
      if (arm && v.some((q) => distToLine(arm, q) < armW / 2 + 2.4)) continue
      d += `M${pt(v[0])}H${n(x + s)}V${n(y + s)}H${n(x)}Z`
    }
  return d
}

// ── Pieces a figure holds ──────────────────────────────────────────────────

/**
 * Feste's tabor (3.1, "Enter Viola and Clown with a tabor"): a small drum hung
 * at his side, its head cut in paper and its cords in ink. In its own frame,
 * the middle of the drum at (0, 0), about 22 wide; place it as a child of the
 * figure.
 */
export function Tabor({ at, rot = 0 }: { at: P; rot?: number }) {
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1])}) rotate(${n(rot)})`}>
      <path d="M-11 -8H11V8H-11Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <ellipse cx={0} cy={-8} rx={11} ry={3.4} fill={PAPER} stroke={INK} strokeWidth={1} />
      <path d="M-9 -5L-4 6M-4 -5L1 6M1 -5L6 6M6 -5L10 4" stroke={PAPER} strokeWidth={0.9} />
    </g>
  )
}

/**
 * A cup held in the hand: a plain stoup of the time, its rim cut in paper. In
 * its own frame, the bottom of the cup at (0, 0), about 12 wide and 14 high;
 * place it at the gripping hand.
 */
export function Cup({ at, rot = 0, scale = 1 }: { at: P; rot?: number; scale?: number }) {
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1])}) rotate(${n(rot)}) scale(${n(scale)})`}>
      <path
        d="M-6.4 -14L6.4 -14L5 -2L2.4 0L-2.4 0L-5 -2Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={gouge(-5.6, -12.4, 5.6, -12.4, 0.9)} fill={PAPER} />
    </g>
  )
}

// ── The builder ──────────────────────────────────────────────────────────────

export type Look =
  | 'viola'
  | 'cesario'
  | 'sebastian'
  | 'orsino'
  | 'olivia'
  | 'maria'
  | 'sir-toby'
  | 'sir-andrew'
  | 'feste'
  | 'sir-topas'
  | 'malvolio'
  | 'antonio'
  | 'fabian'
  | 'valentine'
  | 'curio'
  | 'captain'
  | 'sailor'
  | 'musician'
  | 'officer'
  | 'priest'

/** How big each person is, against a man of 1: Maria is "the youngest wren of nine". */
const SIZE: Record<Look, number> = {
  viola: 0.92,
  cesario: 0.92,
  sebastian: 0.92,
  orsino: 1,
  olivia: 0.92,
  maria: 0.8,
  'sir-toby': 1,
  'sir-andrew': 1.08,
  feste: 0.9,
  'sir-topas': 0.9,
  malvolio: 1,
  antonio: 1,
  fabian: 0.97,
  valentine: 0.98,
  curio: 0.98,
  captain: 0.98,
  sailor: 0.97,
  musician: 0.97,
  officer: 1,
  priest: 0.98,
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
  /** The line of the body, neck to hip (to the waist, for a gown): to lean, stoop or sit. */
  body?: { neck?: P; hip?: P }
  far?: ArmPose
  near?: ArmPose
  /** Hip, knee and ankle of each leg, for the men. See `seatedLegs`. */
  legs?: { far: P[]; near: P[] }
  /** A short cloak (Orsino's falls to the knee), and how far its hem swings back. */
  cloak?: number
  /** A long gown's hem: how far it reaches ahead of the waist and behind it. */
  hem?: { front?: number; back?: number }
  /** 'shut' is asleep or lost in feeling: the lid line of EYE_DOWN. */
  eye?: 'open' | 'down' | 'shut' | 'none'
  /** No hat, cap or circlet. */
  bare?: boolean
  /** A rapier sheathed at the hip. */
  sword?: boolean
  /**
   * A red flush on the cheek (FLUSH), or anger (ANGER, with the frown).
   * ANGER's lower stroke lies level with the mouth: on Orsino's dark, bearded
   * face in "Husband" the two strokes read as red lips. Even the single FLUSH,
   * on a dark face with a beard (Orsino's), sits just above the beard where a
   * mouth would be. So the review of 2 October 2026 took the red off Orsino in
   * both his panels that had it. Give a flush only to a face where the red
   * cannot be taken for a mouth: Olivia's paper face, and the twins'
   * beardless one (TWIN_FLUSH).
   */
  flush?: boolean | 'anger'
  /** The brow drawn down (FROWN). */
  frown?: boolean
  /** Olivia's veil: thrown back over her head and falling behind (the default), or none. */
  veil?: 'back' | 'none'
  /** Malvolio in 3.4: his stockings cut in paper and cross-gartered in ink. */
  crossGartered?: boolean
  /** Malvolio's smile in 3.4. */
  smile?: boolean
  /** A sailor in the seaman's cap. */
  cap?: boolean
  /**
   * No cloak, not even Orsino's: for a man lying back or seated, where a cloak
   * hung from the shoulders would hang through the couch or the chair.
   */
  noCloak?: boolean
}

/** A man's legs on a seat `seat` units high, knees forward to `reach`, feet on the ground. */
export function seatedLegs(seat: number, reach = 34): { far: P[]; near: P[] } {
  return {
    far: [
      [-2, -seat],
      [reach - 4, -seat - 2],
      [reach - 6, -3],
    ],
    near: [
      [2, -seat],
      [reach + 2, -seat - 1],
      [reach + 2, -3],
    ],
  }
}
/** The body of a man seated on a seat `seat` units high: neck and hip. */
export function seatedBody(seat: number, lean = 0): { neck: P; hip: P } {
  return { hip: [0, -seat - 2], neck: [lean, -seat - 70] }
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

const WOMEN: Look[] = ['viola', 'olivia', 'maria']
const TWINS: Look[] = ['viola', 'cesario', 'sebastian']
const BOOTED: Look[] = ['sir-toby', 'captain']
const RUFFED: Look[] = ['orsino', 'valentine', 'curio', 'sir-andrew', 'cesario', 'sebastian']
const BANDED: Look[] = ['malvolio', 'musician']

/** The doublet's cut for each man: width, hem and flare. */
const COAT: Partial<Record<Look, { width: number; hem: number; flare: number }>> = {
  'sir-toby': { width: 34, hem: 16, flare: 7 },
  'sir-andrew': { width: 25, hem: 15, flare: 5 },
  cesario: { width: 25, hem: 15, flare: 6 },
  sebastian: { width: 25, hem: 15, flare: 6 },
  feste: { width: 31, hem: 22, flare: 9 },
  antonio: { width: 30, hem: 8, flare: 4 },
  sailor: { width: 30, hem: 8, flare: 4 },
}

function hatOf(look: Look, p: Pose): { d: string; cut?: string; paper?: boolean } | undefined {
  if (p.bare) return undefined
  if (look === 'cesario' || look === 'sebastian') return { d: TWIN_CAP, cut: TWIN_CAP_CUT }
  if (look === 'orsino') return { d: CIRCLET, paper: true }
  if (look === 'feste') return { d: FESTE_HOOD, cut: FESTE_HOOD_CUT }
  if (look === 'sir-topas') return { d: TOPAS_CAP, cut: TOPAS_CAP_CUT }
  if (look === 'antonio') return { d: SEA_CAP, cut: SEA_CAP_CUT }
  if (look === 'sailor' && p.cap) return { d: SEA_CAP, cut: SEA_CAP_CUT }
  if (look === 'fabian') return { d: SALARINO_CAP, cut: SALARINO_CAP_CUT }
  if (look === 'valentine') return { d: LORENZO_BONNET, cut: LORENZO_BONNET_CUT }
  if (look === 'captain') return { d: CAPTAIN_HAT, cut: CAPTAIN_HAT_CUT }
  if (look === 'maria') return { d: COIF }
  if (look === 'officer') return { d: GAOLER_HELMET, cut: GAOLER_HELMET_CUT }
  return undefined
}

function headShape(look: Look): string {
  if (TWINS.includes(look)) return HEAD_TWIN
  if (look === 'olivia' || look === 'maria') return HEAD_WOMAN
  if (look === 'sir-toby') return HEAD_TOBY
  if (look === 'sir-andrew') return HEAD_ANDREW
  return HEAD_MAN
}

function build(p: Pose) {
  const look = p.look
  const woman = WOMEN.includes(look)
  const gownedMan = look === 'sir-topas' || look === 'priest'
  const defNeck: P = woman ? [0, -132] : [0, -138]
  const defHip: P = woman ? [0, -94] : [0, -70]
  const neck: P = p.body?.neck ?? defNeck
  const hip: P = p.body?.hip ?? defHip
  const moved = neck[0] !== defNeck[0] || neck[1] !== defNeck[1]
  const hipMoved = hip[0] !== defHip[0] || hip[1] !== defHip[1]
  const hAt: P = p.head?.at ?? [neck[0] + 3, neck[1] - 22]
  const headT = `translate(${n(hAt[0])} ${n(hAt[1])}) rotate(${p.head?.rot ?? 0})`
  // Hair that hangs from the head but does not turn with it.
  const hangT = `translate(${n(hAt[0])} ${n(hAt[1])})`
  const armW =
    look === 'sir-toby'
      ? 9.6
      : look === 'sir-andrew'
        ? 7.8
        : woman || TWINS.includes(look)
          ? 7.8
          : 8.6
  const legW =
    look === 'sir-toby' ? 10 : look === 'sir-andrew' ? 8.2 : TWINS.includes(look) ? 8.4 : 9
  const small = woman || TWINS.includes(look)
  const parts: Piece[] = []
  let cuts = ''

  const handOf = (a: ArmPose, sep?: number): Part[] => {
    const kind = a.hand ?? 'mitt'
    const wrist = a.pts[a.pts.length - 1]
    const angle = a.deg ?? endAngle(a.pts)
    if (kind === 'none') return []
    if (kind === 'mitt') return [{ ...mitt(wrist, angle, small ? 0.86 : 1), sep }]
    if (kind === 'grip') return [{ ...gripHand(wrist, angle, small ? 0.86 : 1), sep }]
    if (kind === 'point')
      return pointingHand(wrist, angle, small ? 0.9 : 1, a.thumb ?? 1).map((q) => ({ ...q, sep }))
    if (kind === 'finger') return warningHand(wrist, angle, { size: small ? 13.5 : 15, sep })
    // Fanned 18 degrees by default: at 14 the rough edge of the print closed
    // the gaps between the fingers at panel size, and open hands read as
    // fists (the Merchant kit, reviewed 27 September 2026).
    return hand(wrist, angle, {
      size: a.size ?? (small ? 13.5 : 15),
      spread: a.spread ?? 18,
      thumb: a.thumb,
      sep,
    })
  }
  const armOf = (a: ArmPose, near: boolean): Piece => {
    const sep = near ? 1.5 : undefined
    return [{ d: limb(a.pts), w: armW, sep }, ...handOf(a, sep)]
  }

  if (p.far) parts.push(armOf(p.far, false))

  const sword = p.sword && !woman && !gownedMan ? sheathed([hip[0], hip[1] - 4], 1, 76) : undefined
  const legs = p.legs ?? MEN_LEGS
  const last = (a: P[]) => a[a.length - 1]
  const legParts = (pts: P[]): Part[] => {
    const ankle = last(pts)
    if (BOOTED.includes(look) && pts.length >= 3)
      return [
        { d: limb(pts.slice(0, -1)), w: legW },
        ...bootParts(pts[pts.length - 2], ankle, legW),
      ]
    if (look === 'sailor') return [{ d: limb(pts), w: legW }, bareFoot([ankle[0], ankle[1] + 3], 1)]
    return [{ d: limb(pts), w: legW }, shoe([ankle[0], ankle[1] + 3], 1)]
  }

  if (woman) {
    // A long gown to the floor, the bodice drawn in at the waist.
    parts.push({
      d: gown(neck, hip, 0, 1, {
        shoulder: 24,
        waistW: 16,
        front: p.hem?.front ?? 28,
        back: p.hem?.back ?? 34,
      }),
    })
    // the bodice's point, and two folds of the skirt
    cuts +=
      gouge(hip[0] - 8, hip[1] - 1, hip[0] + 8.4, hip[1], 1, 0.8) +
      gouge(hip[0] - 6, hip[1] + 10, hip[0] - 20, -8, 1.8, 1) +
      gouge(hip[0] + 8, hip[1] + 10, hip[0] + 18, -8, 1.8, -1)
  } else if (gownedMan) {
    // Sir Topas: the curate's gown to the floor, girdled.
    parts.push({
      d: gown(neck, [hip[0], hip[1] - 20], 0, 1, {
        shoulder: 30,
        waistW: 26,
        front: p.hem?.front ?? 22,
        back: p.hem?.back ?? 26,
      }),
    })
    parts.push(shoe([hip[0] + 10, 0], 1))
    cuts +=
      gouge(hip[0] - 13, hip[1] - 21, hip[0] + 13, hip[1] - 20, 1.6) +
      gouge(hip[0] - 4, hip[1] - 10, hip[0] - 14, -8, 1.8, 1) +
      gouge(hip[0] + 6, hip[1] - 10, hip[0] + 10, -8, 1.6, -0.4)
  } else if (look === 'captain') {
    // The Captain's sea-coat to the knee, belted, over his boots.
    parts.push(...legParts(legs.far))
    parts.push({ d: limb([neck, hip]), w: 22 })
    parts.push(...legParts(legs.near))
    parts.push({
      d: gown(neck, [hip[0], hip[1] - 20], hip[1] + 32, 1, {
        shoulder: 30,
        waistW: 26,
        front: 16,
        back: 20,
      }),
    })
    cuts +=
      gouge(hip[0] - 13, hip[1] - 21, hip[0] + 14, hip[1] - 20, 1.6) +
      gouge(hip[0] + 7, neck[1] + 10, hip[0] + 9, hip[1] + 28, 1.4, -0.4) +
      gouge(hip[0] - 6, hip[1] - 12, hip[0] - 14, hip[1] + 28, 1.8, 1)
  } else {
    const coat = COAT[look] ?? { width: 28, hem: 16, flare: 6 }
    const seaman = look === 'antonio' || look === 'sailor'
    parts.push(...legParts(legs.far))
    if (seaman)
      parts.push({
        d: SLOPS,
        t: hipMoved ? `translate(${n(hip[0])} ${n(hip[1] + 70)})` : undefined,
      })
    const long = look === 'orsino'
    if (!p.noCloak && (p.cloak !== undefined || long)) {
      const swing = p.cloak ?? 0
      const t = moved ? `translate(${n(neck[0])} ${n(neck[1] + 138)})` : undefined
      parts.push({ d: cloakPath(swing, long), t })
    }
    if (sword) parts.push(sword.scabbard)
    parts.push({ d: limb([neck, hip]), w: coat.width * 0.76 })
    parts.push({ d: doublet(neck, hip, 1, coat) })
    parts.push(...legParts(legs.near))
    if (seaman && !hipMoved) cuts += SLOPS_CUTS
    if (look === 'feste') {
      const outline = doubletOutline(neck, hip, coat.width, coat.hem, coat.flare)
      cuts += chequer(outline, p.near?.pts, armW)
      const hose = legBelow(legs.near, hip[1] + coat.hem - 2)
      if (hose.length > 1) {
        const lastPt = hose[hose.length - 1]
        hose[hose.length - 1] = [lastPt[0], lastPt[1] - 4]
        cuts += band(hose, legW - 3.6)
      }
    } else {
      // the doublet's buttons down the front and the girdle at the waist
      const u: P = [(hip[0] - neck[0]) / 68, (hip[1] - neck[1]) / 68]
      const front = (a: number): P => [neck[0] + u[0] * a + 7.6, neck[1] + u[1] * a]
      const b0 = front(10)
      const b1 = front(52)
      cuts +=
        gouge(b0[0], b0[1], b1[0], b1[1], 0.9, 0.4) +
        gouge(hip[0] - coat.width * 0.42, hip[1] - 9, hip[0] + coat.width * 0.44, hip[1] - 10, 1.1)
    }
    if (look === 'malvolio' && p.crossGartered) {
      for (const leg of [legs.far, legs.near]) {
        const hose = legBelow(leg, hip[1] + coat.hem - 2)
        if (hose.length > 1) {
          const lastPt = hose[hose.length - 1]
          hose[hose.length - 1] = [lastPt[0], lastPt[1] - 4]
          cuts += band(hose, legW - 3)
        }
      }
    }
  }

  // The head, and what is behind or on it.
  const hat = hatOf(look, p)
  if (look === 'viola') parts.push({ d: VIOLA_FALL, t: hangT }, { d: VIOLA_HAIR, t: headT })
  if (look === 'cesario' || look === 'sebastian') parts.push({ d: TWIN_NAPE, t: headT })
  if (look === 'orsino') parts.push({ d: ORSINO_HAIR, t: headT })
  if (look === 'valentine' || look === 'fabian' || look === 'officer')
    parts.push({ d: NAPE_HAIR, t: headT })
  if (look === 'curio') parts.push({ d: SOLANIO_BEARD, t: headT })
  if (look === 'orsino') parts.push({ d: ORSINO_BEARD, t: headT })
  if (look === 'sir-toby') parts.push({ d: TOBY_BEARD, t: headT })
  if (look === 'malvolio') parts.push({ d: MALVOLIO_BEARD, t: headT })
  if (look === 'antonio') parts.push({ d: ANTONIO_BEARD, t: headT })
  parts.push({ d: headShape(look), t: headT })
  if ((look === 'cesario' || look === 'sebastian') && hat) parts.push({ d: TWIN_FEATHER, t: headT })
  if (hat && !hat.paper) parts.push({ d: hat.d, t: headT })
  if (look === 'olivia' && (p.veil ?? 'back') === 'back') parts.push({ d: VEIL, t: headT })
  if (look === 'olivia' && p.veil === 'none') parts.push({ d: OLIVIA_HAIR, t: headT })
  if (look === 'viola') parts.push({ d: VIOLA_LOCK, t: hangT, sep: 1.3 })

  if (p.near) parts.push(armOf(p.near, true))
  return { parts, cuts, headT, hangT, hat, hilt: sword?.hilt, neck, hip, legs, armW }
}

/** A short cloak hung from the far shoulder; with `long`, to the knee, as Orsino's. */
function cloakPath(swing: number, long: boolean) {
  const b = long ? -34 : -58
  return `M-2 -142C-14 -136 -21 -116 -23 -94C-24.4 -78 ${n(-25 - swing)} ${b + 12} ${n(-26 - swing)} ${b}L${n(-8 - swing * 0.4)} ${b + 4}C-8 -84 -7 -112 2 -134Z`
}

/**
 * One of the people of the play, cut from the block: placed with its feet at
 * `at`, scaled by `scale` (on top of the person's own size), and turned to
 * face left with `flip`. `children` are drawn last, in the figure's own frame
 * (a cup, a ring, a letter held in the hand).
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
  const { parts, cuts, headT, hangT, hat, hilt, neck, hip, legs, armW } = build(pose)
  const look = pose.look
  const s = scale * SIZE[look]
  const eye = pose.eye ?? 'open'
  const transform = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`
  return (
    <CutFigure parts={parts} cuts={cuts || undefined} transform={transform}>
      <g transform={headT}>
        {look === 'olivia' && (
          <>
            <path
              d={OLIVIA_FACE}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.1}
              strokeLinejoin="round"
            />
            <path
              d={OLIVIA_JAW + OLIVIA_BROW_MOUTH + (eye === 'open' ? OLIVIA_EYE : OLIVIA_EYE_DOWN)}
              fill={INK}
            />
            {pose.veil === 'none' && (
              <>
                <path d={OLIVIA_HAIR_CUTS} fill={PAPER} />
                <path
                  d={OLIVIA_COIL}
                  fill="none"
                  stroke={PAPER}
                  strokeWidth={1.1}
                  strokeLinecap="round"
                />
              </>
            )}
            {(pose.veil ?? 'back') === 'back' && (
              <path
                d={VEIL_EDGE}
                fill="none"
                stroke={PAPER}
                strokeWidth={1.4}
                strokeLinecap="round"
              />
            )}
          </>
        )}
        {look === 'viola' && <path d={VIOLA_STRANDS} fill={PAPER} />}
        {(look === 'cesario' || look === 'sebastian') && (
          <>
            <path d={TWIN_NAPE_CUTS} fill={PAPER} />
            {hat && <path d={TWIN_FEATHER_CUTS} fill={PAPER} />}
            {!hat && (
              <path
                d={HAIR_SHORT}
                fill="none"
                stroke={PAPER}
                strokeWidth={1.2}
                strokeLinecap="round"
              />
            )}
            <path d={EAR} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinecap="round" />
          </>
        )}
        {look === 'orsino' && <path d={ORSINO_STRANDS + ORSINO_BEARD_CUTS} fill={PAPER} />}
        {look === 'sir-toby' && (
          <>
            <path d={TOBY_BEARD_CUTS + TOBY_SHINE + TOBY_FRINGE} fill={PAPER} />
            <path d={EAR} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinecap="round" />
          </>
        )}
        {look === 'sir-andrew' && (
          <>
            <path
              d={ANDREW_HAIR}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.1}
              strokeLinejoin="round"
            />
            <path
              d={ANDREW_STRANDS}
              fill="none"
              stroke={INK}
              strokeWidth={0.8}
              strokeLinecap="round"
            />
          </>
        )}
        {look === 'malvolio' && (
          <>
            <path
              d={MALVOLIO_BEARD_CUTS + MALVOLIO_BROW + (pose.smile ? MALVOLIO_SMILE : '')}
              fill={PAPER}
            />
            <path
              d={HAIR_SHORT}
              fill="none"
              stroke={PAPER}
              strokeWidth={1.2}
              strokeLinecap="round"
            />
          </>
        )}
        {look === 'antonio' && <path d={ANTONIO_BEARD_CUTS + WEATHER_LINES} fill={PAPER} />}
        {look === 'antonio' && pose.bare && (
          <path d={HAIR_SHORT} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinecap="round" />
        )}
        {look === 'curio' && (
          <>
            <path d={SOLANIO_BEARD_CUTS} fill={PAPER} />
            <path
              d={HAIR_SHORT}
              fill="none"
              stroke={PAPER}
              strokeWidth={1.2}
              strokeLinecap="round"
            />
          </>
        )}
        {(look === 'musician' || (look === 'sailor' && !pose.cap)) && (
          <path d={HAIR_SHORT} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinecap="round" />
        )}
        {look === 'captain' && (
          <>
            <path d={OLD_BEARD} fill={PAPER} stroke={INK} strokeWidth={0.9} />
            <path d={OLD_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
          </>
        )}
        {look === 'sir-topas' && (
          <>
            <path d={FULL_BEARD} fill={PAPER} stroke={INK} strokeWidth={0.9} />
            <path d={FULL_BEARD_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
          </>
        )}
        {look === 'priest' && (
          <>
            <path d={TONSURE + TONSURE_SHINE + WHITE_BROW + PRIEST_LINES} fill={PAPER} />
            <path d={TONSURE_STRANDS} fill="none" stroke={INK} strokeWidth={0.9} />
          </>
        )}
        {look === 'maria' && (
          <path d={COIF_EDGE} fill="none" stroke={PAPER} strokeWidth={1.8} strokeLinecap="round" />
        )}
        {hat?.cut && <path d={hat.cut} fill={PAPER} />}
        {hat?.paper && (
          <path d={hat.d} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
        )}
        {RUFFED.includes(look) && <path d={RUFF} fill={PAPER} stroke={INK} strokeWidth={0.8} />}
        {BANDED.includes(look) && (
          <path d={FALLING_BAND} fill={PAPER} stroke={INK} strokeWidth={0.8} />
        )}
        {look === 'sir-toby' && <path d={LOOSE_BAND} fill={PAPER} stroke={INK} strokeWidth={0.8} />}
        {look !== 'olivia' && eye !== 'none' && (
          <path
            d={
              eye === 'open' ? (look === 'malvolio' && !pose.smile ? MALVOLIO_EYE : EYE) : EYE_DOWN
            }
            fill={PAPER}
          />
        )}
        {look === 'captain' && <path d={WHITE_BROW} fill={PAPER} />}
        {pose.frown && <path d={FROWN} fill={PAPER} />}
        {pose.flush && (
          <path
            d={pose.flush === 'anger' ? ANGER : TWINS.includes(look) ? TWIN_FLUSH : FLUSH}
            fill="none"
            stroke={RED}
            strokeWidth={1.7}
            strokeLinecap="round"
          />
        )}
      </g>
      {look === 'viola' && (
        <path d={VIOLA_FALL_STRANDS + VIOLA_LOCK_CUT} transform={hangT} fill={PAPER} />
      )}
      {look === 'malvolio' && (
        <path
          d={stewardChain(neck, hip, pose.near?.pts, armW)}
          fill={PAPER}
          stroke={INK}
          strokeWidth={0.7}
        />
      )}
      {look === 'malvolio' && pose.crossGartered && (
        <path
          d={garterCross(legs)}
          fill="none"
          stroke={INK}
          strokeWidth={1.1}
          strokeLinecap="round"
        />
      )}
      {look === 'sir-toby' && legs.far.length >= 3 && (
        <path d={bootCuts(legs.far[1], 10) + bootCuts(legs.near[1], 10)} fill={PAPER} />
      )}
      {hilt && <path d={hilt} fill={PAPER} stroke={INK} strokeWidth={0.8} />}
      {children}
    </CutFigure>
  )
}

/** The crossed garters on Malvolio's stockings, below and above each knee. */
function garterCross(legs: { far: P[]; near: P[] }): string {
  let d = ''
  for (const leg of [legs.far, legs.near]) {
    if (leg.length < 3) continue
    const [kx, ky] = leg[1]
    d += `M${n(kx - 4)} ${n(ky - 6)}L${n(kx + 4)} ${n(ky + 6)}M${n(kx + 4)} ${n(ky - 6)}L${n(kx - 4)} ${n(ky + 6)}`
    d += `M${n(kx - 4)} ${n(ky + 8)}L${n(kx + 4)} ${n(ky + 15)}M${n(kx + 4)} ${n(ky + 8)}L${n(kx - 4)} ${n(ky + 15)}`
  }
  return d
}
