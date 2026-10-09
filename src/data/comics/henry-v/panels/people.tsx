import type { CSSProperties, ReactNode } from 'react'

import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { deg, gouge, n } from '@/components/comics/linocut/carve'

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
  COIF,
  COIF_EDGE,
  EYE,
  EYE_DOWN,
  HEAD_GIRL,
  HEAD_MAN,
  HEAD_WOMAN,
  OLD_STRANDS,
  WHITE_BROW,
  pointingHand,
  prayingHands,
} from '../../romeo-and-juliet/panels/acts-3-4-kit'
import {
  HEAD_YOUTH,
  LONG_CLOAK,
  LONG_CLOAK_CUTS,
  cloak,
  cloakCuts,
  endAngle,
  mitt,
} from '../../much-ado-about-nothing/panels/people'
import {
  CROWN,
  CROWN_BAND,
  EAR,
  MIRANDA_FALL,
  MIRANDA_FALL_STRANDS,
  MIRANDA_HAIR,
  MIRANDA_STRANDS,
  PROSPERO_LINES,
  gripHand,
} from '../../the-tempest/panels/people'
import {
  GRATIANO_CAP,
  GRATIANO_CAP_CUT,
  GRATIANO_FEATHER,
  GRATIANO_FEATHER_CUTS,
  HAIR_SHORT,
} from '../../the-merchant-of-venice/panels/people'
import {
  BURGUNDY_CAP,
  BURGUNDY_CAP_CUT,
  OSWALD_CAP,
  OSWALD_CAP_CUT,
  CAIUS_HOOD,
  CAIUS_HOOD_CUTS,
  CAIUS_HOOD_EDGE,
  CORDELIA_BROW,
  CORDELIA_EYE,
  CORDELIA_EYE_DOWN,
  CORDELIA_JAW,
  CORDELIA_MOUTH,
  CORNWALL_BEARD,
  CORNWALL_BEARD_CUTS,
  FROWN,
  KENT_BEARD,
  KENT_BEARD_STRANDS,
  KENT_HAIR,
  Letter,
  OPEN_MOUTH,
  SHORT_BEARD,
  SHORT_BEARD_CUTS,
  SMILE,
  Sword,
  furCollar,
  furTufts,
  mailRings,
  royalMantle,
  mantleFur,
  mantleFurTufts,
  scabbard,
  seatedFrame,
  swordHilt,
} from '../../king-lear/panels/people'
import { SORROW, WIDE_EYE, WIDE_PUPIL } from '../../hamlet/panels/people'

export {
  CutFigure,
  hand,
  limb,
  mitt,
  endAngle,
  gripHand,
  pointingHand,
  prayingHands,
  warningHand,
  seatedFrame,
  Letter,
  Sword,
  swordHilt,
  CROWN,
  CROWN_BAND,
  EYE,
  EYE_DOWN,
  HEAD_MAN,
  HEAD_WOMAN,
  HEAD_GIRL,
  HEAD_YOUTH,
  type P,
  type Part,
  type Piece,
}

/**
 * THE PEOPLE OF HENRY V: one figure kit for every Henry V panel, so that a
 * student meets the same Henry, the same Exeter and the same Pistol from the
 * presence chamber to Agincourt. Draw every recurring character with
 * `Person`, never with a new outline; for a pose it cannot make, cut the
 * figure from the heads and pieces below. A change here changes every panel
 * that uses it: preview them all before changing one. Cut first for the panels
 * of moments 1 to 5 (the Prologue to Act 2, Scene 2), with the play's most
 * recurring people in it, so that the artists of the later moments find them
 * here. The French King, the Dauphin, the Constable, the Governor of Harfleur
 * and his citizens, Macmorris and Jamy were added for moments 6 to 10,
 * Katharine and Alice for moments 11 to 15, and Monsieur le Fer, Williams and
 * the English Herald for moments 16 to 20 (see below). An artist who needs a
 * person not here (Erpingham, Burgundy and the rest) adds a `Look` for them
 * below, in the same way, and says so in this docblock.
 *
 * The cutting tools (CutFigure, the open hand with its fingers apart, the
 * doublet that cuts every tunic here, the gown, the shoe) are the Romeo and
 * Juliet kit's (../../romeo-and-juliet/panels/verona-kit.tsx); the men's and
 * women's heads, the coif and the pointing hand that kit's acts-3-4-kit.tsx;
 * the hand at rest, the youth's head and the short cloak the Much Ado kit's;
 * the King's crown and the grip the Tempest kit's; the short hair, the ruff
 * and the feathered cap the Merchant kit's; the beards, the hood, the bonnet,
 * the fur, the mail, the straight sword with its cross hilt and the letter the
 * King Lear kit's, which dresses another medieval England. They are imported,
 * not copied, so one hand cuts every Shakespeare play on the site. A figure is
 * cut as the reference panel cuts Fred
 * (src/data/comics/a-christmas-carol/counting-house.tsx): a paper halo round
 * every part, so it reads as one black shape with one carved outline, then the
 * parts in ink, then the paper cuts of folds and features. `Person` builds it
 * from a pose in its own frame: facing right, feet at (0, 0), a man about 182
 * units tall, the neck at (0, -138), the hip at (0, -70) (the waist at
 * (0, -90) for a long gown) and the head centred on (3, -160). Place it with
 * `at`, `scale` and `flip` (to face left). A leaning, bowing or kneeling figure
 * moves its `body` (neck and hip) and gives its `legs`; a figure in a long gown
 * sits with `seated`. The near arm is cut last, after the face and the beard,
 * so a hand raised before the body is always in front.
 *
 * ── THIS PLAY'S OWN RULES, which every panel keeps ─────────────────────────
 * - War is drawn as the play stages it, not as a battle painting: banners,
 *   ranks, the breach in the wall, faces, the weather. No one is shown
 *   wounded, dying or dead; no blade, arrow or shot strikes anyone; no blood.
 *   A drawn sword is held up or out, never at a body.
 * - Henry's threats to Harfleur are words only; Bardolph's sentence is drawn,
 *   never the hanging; the order to kill the prisoners and the killing of the
 *   boys are told, never shown; the dead at Agincourt are names on the
 *   herald's paper; Falstaff's death is told by the Hostess. The Boy is never
 *   drawn in danger, and never near a drawn blade.
 * - The French are cut with the same care as the English: no caricature.
 *   Katherine is never drawn in a sexualised way.
 * - RED is never put on a face, a mouth, a chin or a hand, and never in a
 *   small mark near one: at phone width a small red mark is a speck, and a
 *   speck by a face or a hand reads as blood. So no flush is cut on any face
 *   in this play, Bardolph's included (see below), and the spot colour goes on
 *   things big enough to stay what they are: a banner, a cloth of state, a
 *   lit window. Henry's crown is printed in paper; `crownRed` exists for a
 *   panel whose subject is the crown, and needs that panel checked at phone
 *   width.
 *
 * ── WHAT THE PLAY SAYS OF THEM, and so what is drawn ────────────────────────
 * (the held edition, src/data/full-texts/henry-v.ts, Project Gutenberg
 * #1521). The play is set in 1414 and 1415, so where it is silent a person is
 * drawn plainly in the dress of those years: long gowns to the floor for the
 * King at court, the clergy and the old; belted tunics over hose for the rest,
 * to the calf for the lords and to the thigh for working men and soldiers;
 * hoods and soft bonnets; straight swords with a cross hilt, never a rapier.
 * The Chorus alone is dressed in the playhouse's own time (see below). Where a
 * mark is invented only to tell two people apart, this says so. Nothing is
 * taken from a film, television or stage production.
 *
 * - KING HENRY is young: "the very May-morn of his youth" (Ely, 1.2), "you
 *   savour too much of your youth" (the Ambassador, 1.2), "a vain, giddy,
 *   shallow, humorous youth" (the Dauphin, 2.4). Nothing describes his face,
 *   so he is the youth's head, clean-shaven, his short hair cut in paper
 *   (HAIR_SHORT), and he is known by the King's crown (the Tempest kit's
 *   CROWN, printed in paper). At court he wears a long gown to the floor with
 *   a collar of fur (`furCollar`), and on state occasions the royal mantle
 *   (`mantle`): "I will keep my state" (1.2). Dressed for war (`dress:
 *   'armour'`) see ARMOUR below.
 * - EXETER is Henry's uncle ("good uncle", "Uncle of Exeter", 1.2, 2.2), older
 *   than the King, and not described. So he has a grey beard and grey hair
 *   (the Lear kit's KENT_BEARD and KENT_HAIR, which print grey), invented only
 *   so that he is known at a glance in every scene he carries the King's
 *   business: a lord's tunic to the calf, a cloak and a sword.
 * - THE ARCHBISHOP OF CANTERBURY and THE BISHOP OF ELY are "the spiritualty"
 *   (1.2), and not described. They are drawn plainly as prelates of 1414:
 *   clean-shaven, as the clergy were, a black skull cap (SKULL_CAP, its rim
 *   cut in paper), a white rochet to the knee over a black cassock to the
 *   floor, a short black cape on the shoulders, and a cross on the breast,
 *   cut in ink on the white. No mitre: they are in council, not at the altar.
 *   Canterbury is the elder, his hair white at the nape and his face lined,
 *   and Ely the younger with dark hair: invented only to tell them apart.
 * - THE FRENCH AMBASSADORS bring "the Dauphin's meaning" (1.2) and are not
 *   described. They are lords of France in long gowns, sprinkled with the
 *   lilies of France cut in paper (`lilies`, FLEUR), which is how a student
 *   tells the French from the English in a crowded room ("my fair
 *   flower-de-luce", Henry calls Katherine, 5.2), and a soft bonnet. The same
 *   gown serves a lord of the French court ('french-lord').
 * - BARDOLPH: "His face is all bubukles, and whelks, and knobs, and flames o'
 *   fire; and his lips blows at his nose, and it is like a coal of fire,
 *   sometimes plue and sometimes red" (Fluellen, 3.6); "red-faced" (the Boy,
 *   3.2); the flea on "Bardolph's nose" (2.3). So he has the play's one great
 *   nose, round and swollen (HEAD_BARDOLPH), studded with knobs cut in paper
 *   (BARDOLPH_KNOBS), and thick lips under it. Its colour is left to the
 *   words: a red nose shrinks at phone width to a red speck on a face, which
 *   reads as blood. Bareheaded, in a soldier's jack, with a sword.
 * - PISTOL is "Ancient Pistol", the ensign, and Gower names his kind: "what a
 *   beard of the general's cut and a horrid suit of the camp will do among
 *   foaming bottles" (3.6). So he wears a dark pointed beard, cut like a
 *   commander's (the Lear kit's CORNWALL_BEARD), a soldier's jack and a big
 *   sword, and a small cap tilted back with a curling feather (the Merchant
 *   kit's GRATIANO_CAP), the swagger invented only so that he is known at a
 *   glance among the soldiers.
 * - NYM is "Corporal Nym", a man of few words ("I say little", 2.1), and not
 *   described. He wears a hood drawn up over his head (the Lear kit's
 *   CAIUS_HOOD), a working man's hood of the time, invented only to tell him
 *   from Bardolph and Pistol; a jack and a sword, lean (`slim`).
 * - THE BOY is Falstaff's page ("Mine host Pistol, you must come to my
 *   master", 2.1) and "boy to them all three" (3.2): a child, a head and more
 *   shorter than the men, bareheaded, in a short tunic. He is never drawn near
 *   a drawn blade.
 * - MISTRESS QUICKLY, the Hostess, "the quondam Quickly", now Pistol's wife
 *   (2.1), is not described: a married woman of the time in a linen coif tied
 *   under the chin (the Romeo and Juliet kit's COIF), a long gown and an
 *   apron, as the keeper of a house ("Nor shall my Nell keep lodgers",
 *   Pistol, 2.1). This play never names Eastcheap; the Henry IV plays do.
 * - THE TRAITORS AT SOUTHAMPTON (2.2) are lords and are not described:
 *   CAMBRIDGE, "Richard Earl of Cambridge", wears a soft bonnet and a short
 *   beard; SCROOP, "Henry Lord Scroop of Masham", the King's "bed-fellow", is
 *   clean-shaven and bareheaded, with hair to the jaw; GREY, "Sir Thomas
 *   Grey, knight, of Northumberland", has a dark pointed beard. Invented only
 *   to tell them apart. When Henry hands them their papers, "Their cheeks are
 *   paper" (2.2): `pale` cuts a face in PAPER with its features in ink.
 * - THE CHORUS speaks from "this wooden O", "this cockpit", "this unworthy
 *   scaffold" (Prologue), the playhouse of the play's first audience, and in
 *   Act 5 of "our gracious Empress" and her general in Ireland (Act 5,
 *   Chorus). So he alone is dressed in the playhouse's own time, about 1599:
 *   a doublet and hose, a ruff and a short cloak, bareheaded. That is how a
 *   student tells the Chorus from the people of 1415 whose story he tells.
 * - A LORD of the English court ('lord', for Westmorland, Bedford, Gloucester,
 *   Warwick, Salisbury and the rest) is drawn plainly: a tunic to the calf, a
 *   cloak, a sword; `variant` 0 to 2 changes his beard and bonnet.
 * - FLUELLEN is Welsh ("I am Welsh, you know", 4.7) and, Henry says, "a little
 *   out of fashion" (4.1): a short dark beard, a long old-fashioned hood
 *   pulled back on his shoulders and a plain cap, and in Act 5 only a leek in
 *   the cap (`leek`): "why wear you your leek today? Saint Davy's day is past"
 *   (5.1). Saint Davy's day is the first of March, so at Agincourt, in
 *   October, his cap carries no leek; this docblock once said "from Act 4 on",
 *   which would have put one there. The leek's green is left to the words.
 *   GOWER, the English
 *   captain, is clean-shaven in a steel cap (KETTLE). Both are captains: a
 *   jack and a sword. Gower's short hair is cut only when he goes bareheaded:
 *   it was first cut under his cap too, and at panel size its strokes crossed
 *   the brim and read as a bandage round his head (moment 22, 2 October 2026).
 * - MONTJOY is the French herald: "You know me by my habit" (3.6). So he wears
 *   a herald's tabard over his tunic, sprinkled with the lilies of France
 *   (`lilies`), bareheaded.
 * - A SOLDIER ('soldier') of either army wears a padded jack to the thigh and a
 *   steel cap with a brim (KETTLE); with `dress: 'armour'`, see below.
 *
 * Added for the panels of moments 6 to 10 (Act 2, Scene 3 to Act 3, Scene 3),
 * and drawn from here by every later panel they are in:
 * - THE FRENCH KING ('french-king') is "the French King", the Dauphin's "most
 *   redoubted father" (2.4) and father of "Katharine his daughter" (Act 3,
 *   Chorus). He is not described. So he is older than his son: clean-shaven,
 *   his hair white below the crown (FRENCH_KING_HAIR) and the lines of age cut
 *   in his face, invented only to tell him from Henry (young, dark-haired) and
 *   Exeter (a grey beard). A king of France of 1415: the King's crown, a long
 *   gown sprinkled with the lilies of France (on his lap too when he sits:
 *   `seatedLilies`), a collar of fur and, with `mantle`, the royal mantle.
 *   `crownRed` prints his crown in the spot colour where the crown is what the
 *   panel is about ("Deliver up the crown", Exeter, 2.4).
 * - THE DAUPHIN ('dauphin') is "Prince Dauphin" (2.4), the King's son and
 *   heir. He is not described. So he is younger than his father and
 *   clean-shaven, his dark hair long to the shoulder (DAUPHIN_HAIR) under a
 *   prince's circlet with three small points (DAUPHIN_CIRCLET), lower than a
 *   king's crown, invented only to tell him from his father and from Henry: a
 *   long gown with the lilies, and no sword unless a panel gives him one.
 * - THE CONSTABLE ('constable') is "my Lord High Constable" (2.4), the
 *   soldier of the French court, who warns "You are too much mistaken in this
 *   king" (2.4). He is not described: a lord of France in a long gown with the
 *   lilies, a sword at his hip as the commander of its army, bareheaded with a
 *   dark pointed beard (the Lear kit's CORNWALL_BEARD), invented only to tell
 *   him from the King and the Dauphin.
 * - THE GOVERNOR OF HARFLEUR ('governor'): "The Governor and some citizens on
 *   the walls" (3.3). He is not described: the captain of a besieged town, so
 *   drawn in harness (`dress: 'armour'`), the lilies of France cut on his
 *   jupon, bareheaded so that he is known among the townsmen, with a short
 *   beard.
 * - A CITIZEN ('citizen') of Harfleur, "some citizens" (3.3): a townsman in a
 *   tunic to the knee; `variant` 0 a bonnet and a short beard, 1 a hood, 2 a
 *   small cap with a turned brim. Grown men only.
 * - MACMORRIS ('macmorris') is "an Irishman, a very valiant gentleman"
 *   (Gower, 3.2), the captain of the mines, and Fluellen will "verify as much
 *   in his beard" (3.2): so he has a beard, full and dark and cut square
 *   (MACMORRIS_BEARD). Bareheaded, up from the mines, in a jack, with a sword.
 * - JAMY ('jamy') is "the Scots captain, Captain Jamy" (Gower, 3.2), and is
 *   not described: a captain in a jack, with a sword, clean-shaven, in a small
 *   flat cap with a turned brim (the Lear kit's OSWALD_CAP), invented only to
 *   tell him from Gower, Fluellen and Macmorris. Nothing in his dress is drawn
 *   as a national costume: the play makes the four captains' nations a matter
 *   of their speech, and so does the panel.
 *
 * Added for the panels of moments 16 to 20 (Act 4, Scenes 3 to 8), and drawn
 * from here by every other panel they are in:
 * - MONSIEUR LE FER ('le-fer') is the French soldier Pistol takes (4.4), who
 *   says he is "le gentilhomme de bonne maison", which the Boy puts as "a
 *   gentleman of a good house". He is not otherwise described, so he is a
 *   French gentleman in the field: in harness (`dress: 'armour'`), the lilies
 *   of France cut on his jupon as on the Governor's, bareheaded and
 *   clean-shaven, invented only so that he is known from Pistol and the Boy.
 * - WILLIAMS ('williams') is "Michael Williams" (4.1), a common soldier: "You
 *   appear'd to me but as a common man" (4.8). He is not described: a
 *   soldier's jack, a sword and a steel cap (KETTLE), and a short dark beard,
 *   invented only to tell him from Gower. From the exchange of gloves in 4.1
 *   he wears the King's in his cap: "This will I also wear in my cap" (`glove`).
 * - `glove` sets a glove in a cap's band, its fingers up behind the brow (the
 *   King's in Williams's cap, and from 4.7 the one the King gives Fluellen:
 *   "wear thou this favour for me and stick it in thy cap"). Paper with an ink
 *   edge, its fingers and thumb cut apart, so it is not taken for a feather.
 * - THE ENGLISH HERALD ('herald'), "an English Herald" (4.8), brings "the
 *   number of the slaught'red French" and then "another paper". He is not
 *   described. A herald wears his king's arms, and Henry's were France and
 *   England quartered, so his tabard is quartered: the lilies of France in
 *   paper on two ink quarters, the lions of England cut small in ink on two
 *   paper quarters (HERALD_ENGLAND). That tells him at a glance from Montjoy,
 *   whose tabard is lilies alone. Bareheaded and clean-shaven, with no sword.
 * - THE FRENCH PRISONERS of 4.6 ("Enter King Henry and his train, with
 *   prisoners") are not described: men-at-arms of France, 'french-lord' in
 *   harness (`dress: 'armour'`), bareheaded, with a short beard (`variant` 2)
 *   and no sword. Every Frenchman in harness now carries the lilies on his
 *   jupon, as le Fer and the Governor do, so that a student knows the French
 *   in the field as the court gowns let them be known at court.
 *
 * Added for the panels of moments 11 to 15 (Act 3, Scene 4 to Act 4, Scene 1),
 * and drawn from here by every later panel they are in:
 * - KATHARINE ('katharine') is the French King's daughter, "Katharine his
 *   daughter" (Act 3, Chorus), unmarried until the last scene; Henry calls her
 *   "Fair Katharine, and most fair" and "my fair flower-de-luce" (5.2). So she
 *   has a girl's head (HEAD_GIRL), her face cut in PAPER with her features in
 *   ink (FACE_GIRL), as the King Lear kit cuts Cordelia's "Fairest"; her dark
 *   hair loose down her back, as an unmarried girl's (the Tempest kit's
 *   MIRANDA_HAIR and MIRANDA_FALL); her brother's circlet (DAUPHIN_CIRCLET),
 *   so that the King's son and daughter are known by it; and a long gown to
 *   the floor, high at the neck, sprinkled with the lilies of France. She is
 *   never drawn in a sexualised way: the gown is loose, and at her English
 *   lesson she is a girl at her lesson, not a bride.
 * - ALICE ('alice') is "an old Gentlewoman" (3.4). So she wears what an older
 *   woman of 1415 wore: a white linen wimple under the chin and round the
 *   throat (WIMPLE) and a white veil over it falling to her shoulders
 *   (ALICE_VEIL, printed in paper), with the lines of age cut in her
 *   face (ALICE_LINES), and a plain dark gown with no apron: the apron is
 *   the Hostess's, who keeps a house.
 * - ORLEANS and RAMBURES (3.7) are not described. They are 'french-lord' in
 *   their bonnets, Orleans clean-shaven (`variant` 0) and Rambures with a
 *   short beard (`variant` 2), so that neither is taken for the Constable,
 *   who is bareheaded with a pointed beard.
 * - BATES and COURT (4.1), Williams's fellows, are not described. They are
 *   'soldier': Bates in his steel cap and clean-shaven (`variant` 0), Court
 *   bareheaded (`bare`), so that neither is taken for Williams, who is
 *   bearded.
 * - HENRY IN DISGUISE (`disguise`, 4.1): "Lend me thy cloak, Sir Thomas"; "I
 *   will wear it in my bonnet". So he wears Erpingham's long cloak closed
 *   about him (the Much Ado kit's LONG_CLOAK) over a lord's tunic, a soft
 *   bonnet (BURGUNDY_CAP), and no crown: nobody in the scene knows him.
 *
 * ── ARMOUR (`dress: 'armour'`), for Harfleur and Agincourt ─────────────────
 * The play names "casques" (Prologue), "armourers" (Act 2, Chorus), Henry's
 * "bruised helmet and his bended sword" (Act 5, Chorus), and a herald's
 * reckoning of "armour" (3.7). It describes none of it, so it is the plain
 * harness of 1415: a jupon (the cloth coat over the plate) to the upper thigh,
 * with the belt slung low on the hips; mail rings at the skirt below it
 * (`mailRings`); plate on the arms and legs, its joints at the elbow and knee
 * cut in paper; and, with `helm`, an open bascinet with a mail aventail
 * falling to the shoulders (BASCINET), the face left bare so the man is known.
 * Henry's crown sits on his helm, so the King is known in the field.
 *
 * HANDS. Every open hand is `hand`'s, four fingers and a thumb cut apart and
 * fanned 18 degrees, so it reads as an open hand at panel size and never as a
 * fist; a pointing hand has one long finger and the rest curled; a raised
 * finger is the warning finger; a hand at rest is a small closed mitten; a hand
 * round a hilt, a staff or a paper is `grip`, which only ever closes round
 * something held. NO HAND IS RAISED FLAT ON A STRAIGHT ARM: at panel size that
 * reads as a salute. A gesture of welcome or appeal is held out low, from a
 * bent arm.
 */

const pt = (p: P) => `${n(p[0])} ${n(p[1])}`

// ── Heads, hair, hats and faces, in profile facing right, centred on (0, 0) ─
// The head shapes are the shared ones: HEAD_MAN for the men, HEAD_YOUTH for
// Henry and the Boy, HEAD_WOMAN for the Hostess. Crown near y -20, chin near
// y 18, the base of the neck at y 22.

/**
 * Bardolph's head: the man's head with the play's one great nose, round and
 * swollen from the bridge to a bulb that hangs over the lip, and thick lips
 * pushed up under it: "his lips blows at his nose" (3.6).
 */
export const HEAD_BARDOLPH =
  'M-9 22C-10 16 -15 12 -16 3C-17 -10 -8 -20 3 -20C11 -20 16 -14 16 -8L16.2 -4.8C19.8 -3.8 24.2 -0.6 25.2 3.8C26 7.6 23.4 9.8 19.6 9L18.6 8.8L19.8 10.8L17.6 12L18.4 13.8C17.6 17 13.8 19 8.6 19L6 22Z'
/**
 * "all bubukles, and whelks, and knobs": the knobs on his nose and cheek, as
 * small rounds cut in paper, with a crease from the nose round the cheek.
 */
export const BARDOLPH_KNOBS =
  'M19.4 -0.8a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0 -2.6 0Z' +
  'M22 4a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0 -2.4 0Z' +
  'M18.4 4.4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0Z' +
  'M8.4 3.6a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0 -2.4 0Z' +
  'M11.6 7.8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0Z' +
  'M6.6 9.4a0.9 0.9 0 1 0 1.8 0a0.9 0.9 0 1 0 -1.8 0Z' +
  gouge(17.4, 6.4, 13.4, 13, 0.55, -0.6)

/**
 * The front of the face, from the hairline over the brow, down the profile and
 * round the jaw to in front of the ear: printed in PAPER with an ink edge when
 * a face goes pale ("Their cheeks are paper", 2.2), and its features cut back
 * into it in ink (PALE_FEATURES). For HEAD_MAN.
 */
export const FACE_MAN =
  'M9.6 -17C12.8 -15.6 15.6 -12.4 16 -8L16 -5L22.5 3.5L17 5.5L17.5 8.5L16 10L17 12.5C16.5 16 13 18.5 8 18.5C4.4 18.4 1.4 16.4 -0.2 13.2C-1.6 8.8 -1.8 2.8 -1.2 -2.8C0.2 -9.2 4 -14.6 9.6 -17Z'
/** A pale face's features, in ink: the brow, the line from the nose to a mouth gone slack, the nostril. */
export const PALE_FEATURES =
  gouge(5.6, -8.4, 15, -8, 1.1, -0.2) +
  gouge(15.2, 6.4, 11.8, 12.2, 0.5, -0.5) +
  gouge(11.2, 14.2, 16.4, 13.6, 0.55)
/** Eyes wide with fear on a pale face: the eye's rim and its pupil, in ink. */
export const PALE_EYE = 'M6.4 -4Q9.8 -7.4 13.4 -4Q9.8 -1 6.4 -4Z'

/**
 * The Chorus's ruff, the deep pleated band of linen that a man of 1599 wore
 * at the neck: in profile a broad flattened ring under the jaw, from in front
 * of the chin to behind the nape, cut in paper with its pleats in ink. The
 * Merchant kit's RUFF, a thin crescent, read at panel size as a plain collar,
 * and nothing then told the Chorus from the men of 1415 whose story he tells.
 */
export const CHORUS_RUFF =
  'M-13 25.2C-13 21.4 -6 18.6 2 18.6C10 18.6 16.6 21.4 16.6 25.2C16.6 29 10 31.6 2 31.6C-6 31.6 -13 29 -13 25.2Z'
export const CHORUS_RUFF_PLEATS =
  'M-9.6 21.6L-9.2 29.2M-5.6 20L-5.4 30.8M-1.6 19.2L-1.6 31.4M2.4 19L2.4 31.6M6.4 19.4L6.4 31.2M10.2 20.2L10 30.4M13.6 22L13.4 28.6'

/**
 * The Chorus's trunk hose: round breeches puffed out from the waist to the
 * upper thigh, slashed in panes, in the figure's standing frame (TRUNK_HOSE in
 * ink with the body, TRUNK_HOSE_PANES cut in paper over it). His doublet ends
 * at the waist above them (TUNIC's `hem`), as the fashion of 1599 did.
 */
export const TRUNK_HOSE =
  'M-13 -76C-18.4 -70 -19.6 -58 -16.6 -50C-14.6 -45.6 -7 -44.6 0 -46.6C7 -44.6 15 -45.6 17 -50C19.8 -58 18.6 -70 13.4 -76Z'
export const TRUNK_HOSE_PANES =
  gouge(-13.4, -66, -14.2, -50, 1.3, -1.6) +
  gouge(-7.4, -66.4, -7.6, -47.6, 1.3, -0.8) +
  gouge(-1.2, -66.6, -1, -48, 1.3, 0) +
  gouge(5, -66.6, 5.4, -47.6, 1.3, 0.8) +
  gouge(11.2, -66.2, 12.6, -48.4, 1.3, 1.6) +
  gouge(-15.6, -66.8, 15.6, -66.8, 1.1, 0.4)

/**
 * The clergy's skull cap, black, close on the crown, its rim cut in paper
 * (SKULL_CAP_RIM) so that it reads on the black head.
 */
export const SKULL_CAP =
  'M-14 -11C-12.2 -17.6 -5.4 -21.8 2.4 -21.8C8 -21.8 12 -19.4 13.4 -15.6C5.6 -16.2 -6 -14.4 -14 -11Z'
export const SKULL_CAP_RIM = gouge(-13, -11.8, 12.6, -15.8, 0.9, -0.9)
/**
 * Canterbury's white hair below the cap at the back of the head, its ends
 * tufted. Paper, with ink strands (OLD_STRANDS's back line).
 */
export const NAPE_WHITE =
  'M-14 -8C-16.8 -1 -16.6 7 -14 14.6L-12 12.4L-10.4 16.2L-8.8 12.2C-10 6.6 -10 0.4 -8.6 -5.4Z'
export const NAPE_WHITE_STRANDS = 'M-12.4 -4C-13.2 2 -12.8 8 -11.8 12.4'

/**
 * Scroop's hair, dark, to the jaw, combed back from the brow: ink with the
 * head, its strands cut in paper (SCROOP_STRANDS), with the ear below it.
 */
export const SCROOP_HAIR =
  'M15 -11.6C12.4 -20.6 1 -25 -8.6 -21.4C-16.6 -18.4 -20.6 -9.4 -19.6 0.4C-19 6.6 -17 11.6 -14.2 15.8L-10.8 13.6L-9.6 17.4C-11.4 10.6 -11.6 4.6 -9.6 -1.4C-7.4 -7.6 -1.6 -11.4 5.4 -11.6C9 -11.8 12.4 -11 15 -11.6Z'
export const SCROOP_STRANDS =
  gouge(12, -14, -2, -20, 0.8, 1.4) +
  gouge(10, -17, -12, -9, 0.9, 2.4) +
  gouge(3, -12.4, -14, -4, 0.85, 1.6) +
  gouge(-13.4, -1, -15.4, 12, 0.8, 0.6)

/**
 * A steel cap with a broad brim, the soldier's and Gower's: a round bowl and a
 * brim sloping down all round, its edge and the band at its foot cut in paper
 * (KETTLE_CUT).
 */
export const KETTLE =
  'M-13.4 -12C-14.6 -23 -7.6 -30.4 1 -30.4C9.6 -30.4 16.4 -23 15.2 -12L24 -8.4L22.8 -5C14 -9.6 -10 -10 -24.6 -4.4L-25.6 -7.8Z'
export const KETTLE_CUT =
  gouge(-23.6, -6, 23, -7.4, 0.9, -2.6) + gouge(-12.6, -13.6, 14.4, -13.6, 0.8, -0.6)

/**
 * Fluellen's cap, plain and round, with the long hood of an older fashion
 * pulled back behind his head and hanging to the shoulders: "a little out of
 * fashion" (4.1). The hood is ink with its edge cut in paper (FLUELLEN_HOOD_CUT).
 */
export const FLUELLEN_CAP =
  'M-15.4 -9.6C-17.6 -18 -10.4 -25.6 0.4 -25.8C10.4 -26 17.4 -20.2 16.8 -12.6C7.6 -11.6 -4.6 -11.2 -15.4 -9.6Z'
export const FLUELLEN_CAP_CUT = gouge(-14.6, -11.8, 16.2, -14.4, 1, -0.5)
export const FLUELLEN_HOOD =
  'M-14 4C-20 6 -25 12 -27 22C-28 28 -27.6 33 -26 38L-11 36C-12 30 -11 24 -8 19C-6 15 -7 9 -14 4Z'
export const FLUELLEN_HOOD_CUT = gouge(-24, 20, -13, 34, 0.8, 1)
/**
 * The leek in his cap (`leek`): a stalk standing up from the band, its leaves
 * spreading at the top. Paper with an ink edge; its green is left to the words.
 */
export const LEEK = 'M2 -22C1 -30 1.4 -38 3 -44C4 -46 5.6 -46 5.6 -44C5 -38 5 -30 5.6 -22Z'
export const LEEK_LEAVES =
  'M3.4 -42C-1 -48 -6 -51 -10 -50C-6 -48 -2 -45 2.4 -40Z' +
  'M4.6 -43C7 -50 11 -54 15 -54C12 -51 9 -47 6 -41Z'

/**
 * The French King's white hair, below the crown at the back of the head and
 * falling to the collar in three locks: paper with an ink edge and ink strands
 * (FRENCH_KING_STRANDS), so it reads as hair and not as a ribbon.
 */
export const FRENCH_KING_HAIR =
  'M-15 -10C-18.8 -2 -19.4 8 -17.4 17.4C-16 19.6 -14 19.4 -13.2 17.6C-12.2 20 -9.8 20 -9.2 17.8C-8 19.2 -6.2 18.4 -6.6 16C-8.4 8 -8.6 0 -7.2 -6.8C-9.8 -8.8 -12.6 -9.8 -15 -10Z'
export const FRENCH_KING_STRANDS =
  'M-15.6 -2C-16.6 4 -16.4 11 -15.2 16.6M-12.8 -5C-13.6 2 -13.4 10 -12.2 16.8' +
  'M-10 -4C-10.8 3 -10.6 10 -9.8 16.4M-8.2 2C-8.4 8 -8 12 -7.8 15'

/**
 * The Dauphin's dark hair, long to the shoulder: ink with the head, its
 * strands cut in paper (DAUPHIN_STRANDS). Longer than Scroop's, which stops at
 * the jaw, so the two are never taken for each other.
 */
export const DAUPHIN_HAIR =
  'M15 -11.6C12.4 -21 1 -25.4 -8.8 -21.8C-17.4 -18.6 -21.4 -9 -20.6 1.4C-20 10 -19.4 19 -21.8 27.6C-19 30.6 -14.6 31 -11.6 29L-9.2 31.4C-10.4 22 -11.2 12 -10 2C-8.6 -6.4 -2.4 -11.4 5.4 -11.8C9 -12 12.4 -11 15 -11.6Z'
export const DAUPHIN_STRANDS =
  gouge(12, -14, -2, -20.4, 0.8, 1.4) +
  gouge(10, -17, -12, -9, 0.9, 2.4) +
  gouge(-13.6, -3, -16.4, 25, 0.9, 0.8) +
  gouge(-17.4, -9, -19.4, 24, 0.8, 0.5)
/**
 * A prince's circlet: a band round the head with three small points, lower
 * than the King's crown, so that the heir is known from the King at a glance.
 * Paper with an ink edge.
 */
export const DAUPHIN_CIRCLET =
  'M-18.4 -5.8L-18 -9.6C-6.6 -12.8 4.4 -14.4 14.8 -14.8L15.4 -11.2C5 -11 -6.4 -9.2 -18.4 -5.8Z' +
  'M8 -13.8L10.4 -20L12.8 -14.4Z' +
  'M-1.8 -12.8L0.6 -18.8L3 -13.2Z' +
  'M-11.2 -10.6L-9.2 -16.4L-6.8 -11.4Z'

/**
 * Macmorris's beard, full and dark and cut square below the chin: "I will
 * verify as much in his beard" (Fluellen, 3.2). Ink, its strands and the line
 * of the mouth cut in paper (MACMORRIS_BEARD_CUTS).
 */
export const MACMORRIS_BEARD =
  'M-2.4 2C-4.2 10 -3.4 18 -0.6 24.6C2 30 6 33.4 10.4 34.2C14.2 34.6 17.6 32.8 19.4 29.4C20.4 24.6 20 18.6 18.6 14.2L18 10.4L17.2 8.6L14 7.6C12.6 9.6 12.4 11.4 13.6 13.2C11 14.4 7.6 14.2 5 12.8C2.4 10 0.4 6 -2.4 2Z'
export const MACMORRIS_BEARD_CUTS =
  gouge(-0.2, 7, 2.6, 24, 0.8, -0.8) +
  gouge(3.6, 13.6, 7, 30, 0.85, -0.6) +
  gouge(8, 15, 11.4, 32, 0.8, -0.4) +
  gouge(12.6, 15, 15.6, 31, 0.75, -0.2) +
  gouge(16, 14, 18, 26, 0.6, -0.2) +
  gouge(13.4, 10.4, 17.8, 9.8, 0.55)

/**
 * The open bascinet of 1415, for `helm`: a rounded steel bowl over the crown
 * and the back of the head, rising to a low point, its brow edge over the eye;
 * and the mail aventail laced to its lower edge, falling round the cheek and
 * the neck to the shoulders (AVENTAIL), its rings cut in paper. The face is
 * left bare, so the man is known.
 */
export const BASCINET =
  'M15.8 -9.2C16.4 -19.4 9 -27.8 -2 -28.6C-11.6 -29 -18.4 -22 -19.6 -12L-20.2 -2C-14 -4.4 -6 -5.2 -1.4 -5.2L-0.6 -10.6C4 -12 10 -11.6 15.8 -9.2Z'
export const BASCINET_CUTS =
  gouge(-0.6, -10.4, 15.4, -9.6, 0.9, -0.6) +
  gouge(-17, -6, -1.6, -8, 0.8, -0.6) +
  gouge(-8, -26.4, 6, -25, 0.6, -1)
export const AVENTAIL =
  'M-20.4 -3C-22 6 -23.6 16 -27.6 26L-6 28L10 26C6 22 2 17 0.6 12C-1 8 -1.2 2 -1.4 -4.6C-8 -5 -15 -4.6 -20.4 -3Z'

// ── Katharine's face and Alice's wimple, added for moments 11 to 15 ───────

/**
 * Katharine's lit face: the front of HEAD_GIRL from the hairline down the
 * profile and round the jaw, printed in PAPER with an ink edge. Her dark hair
 * (MIRANDA_HAIR) is laid over it in ink and her features are cut back into it
 * in ink (the King Lear kit's CORDELIA_ brow, eye, mouth and jaw).
 */
export const FACE_GIRL =
  'M9.6 -15.2C12.4 -13.4 14 -10.4 14 -7L14.4 -4L18.6 2.4L14.6 4.2L15 6.8L14 8.4L14.8 10.6C14.2 13.8 11.5 15.8 7.5 15.8C4 15.6 1.2 13.6 -0.2 10.6C-1.4 6.6 -1.6 1.2 -1 -4C0.4 -9.6 4.2 -14 9.6 -15.2Z'
/** Her brother's circlet set on her smaller head, a little lower on the brow. */
export const KATE_CIRCLET_AT = 'translate(-0.6 0.8) scale(0.9)'
/** Her mouth a little open on a word, in ink on the lit face. */
export const KATE_MOUTH_OPEN = 'M14.4 8.2L11 8.8L13.6 10.2Z'

/**
 * Alice's wimple: white linen over the chin and round the throat, framing
 * the face from the temple to the jaw and falling over the breast. Paper with
 * an ink edge and folds (WIMPLE_FOLDS); her white veil (ALICE_VEIL, printed in
 * paper, with ALICE_VEIL_FOLDS) lies over the head above it and falls to her
 * shoulders. For HEAD_WOMAN. (Cut under the chin only, it left a sliver of
 * the jaw between chin and linen that read at panel size as a wisp of beard.)
 */
export const WIMPLE =
  'M7.4 -13.6C2.4 -10.6 0.6 -3.4 1.2 4.6C1.6 9 4.6 12.4 9.6 13C12.6 13.2 15 12.4 16.6 10.6L17.6 18C18.2 25 16.8 31.4 13.6 36L-10.4 37C-14.4 30 -16.4 22 -17.4 12C-18.4 2 -16.4 -8 -10.4 -14C-4 -18.6 3 -17.6 7.4 -13.6Z'
export const WIMPLE_FOLDS =
  'M5.4 19.6C7.2 25 7.6 30 6.8 35M10.4 18C12.6 23 13 28 12 33M-1.6 20.4C-1.2 26 -1.8 31 -3 35.4'
/**
 * The Romeo and Juliet kit's VEIL cut short at the shoulders: falling to the
 * waist it read at panel size as long white hair, not linen.
 */
export const ALICE_VEIL =
  'M12.5 -12.5C6 -23 -7 -24 -14 -17C-19.5 -10 -21 2 -21 14C-21 24 -23 32 -25.4 40L-9 41C-8 32 -7 24 -7 16C-7 6 -5 -3 2 -9C6.5 -12.5 10 -13 12.5 -12.5Z'
export const ALICE_VEIL_FOLDS = 'M-12 -8C-13.6 4 -15 18 -17.4 34M-9.4 14C-10.4 24 -11.6 32 -13.6 39'
/**
 * The lines of age in Alice's face, cut in paper: the hollow under the
 * cheekbone and the line from the nose towards the mouth, kept inside the
 * profile. (The Tempest kit's PROSPERO_LINES, cut for a man's longer face,
 * broke HEAD_WOMAN's lip and read as whiskers.)
 */
export const ALICE_LINES = gouge(3, 2, 6.4, 11, 0.6, 1.3) + gouge(13.4, 6.4, 10.8, 11.4, 0.5, -0.4)

// ── Garments and pieces, in the figure's frame ─────────────────────────────

/**
 * A fleur-de-lis, the lily of France, about 11 high, centred on (0, 0): the
 * upright middle petal, the two side petals curling out and down, the band
 * across them and the foot.
 */
export const FLEUR =
  'M0 -6C1.8 -4 2.2 -1.4 1.2 1L-1.2 1C-2.2 -1.4 -1.8 -4 0 -6Z' +
  'M-1.4 0.8C-2.2 -1.6 -4.4 -3 -5.6 -1.6C-4.2 -1.6 -3.4 -0.2 -3.6 1.6Z' +
  'M1.4 0.8C2.2 -1.6 4.4 -3 5.6 -1.6C4.2 -1.6 3.4 -0.2 3.6 1.6Z' +
  'M-3.8 1.4L3.8 1.4L3.8 2.8L-3.8 2.8Z' +
  'M-1 2.8L1 2.8L2.2 5L-2.2 5Z'

/** A path drawn round (0, 0), moved to `at` and scaled. */
function placed(d: string, at: P, s = 1) {
  return d.replace(
    /(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g,
    (_, xs: string, ys: string) => `${n(at[0] + Number(xs) * s)} ${n(at[1] + Number(ys) * s)}`,
  )
}

/**
 * The lilies of France on a gown or a tabard: fleurs-de-lis in staggered rows
 * down the body from below the collar, following the line of the body from
 * `neck` to `waist` and on to the hem, kept in from the edges.
 */
export function lilies(neck: P, waist: P, rows = 5, hemY = -8) {
  const L = Math.hypot(waist[0] - neck[0], waist[1] - neck[1]) || 1
  const u: P = [(waist[0] - neck[0]) / L, (waist[1] - neck[1]) / L]
  const v: P = [-u[1], u[0]]
  let d = ''
  for (let r = 0; r < rows; r++) {
    // the first rows on the bodice, the rest on the skirt as it falls
    const t = (r + 0.7) / rows
    const along = 14 + t * (Math.abs(hemY - neck[1]) - 28)
    const c: P = [
      neck[0] + u[0] * along * 0.5 + (r * (waist[0] - neck[0])) / rows / 2,
      neck[1] + along,
    ]
    const half = 6 + r * 3.2
    const xs = r % 2 ? [-half, half] : [-half * 1.1, 0, half * 1.1]
    for (const x of xs) d += placed(FLEUR, [c[0] + v[0] * x * 0 + x, c[1]], 1)
  }
  return d
}

/**
 * The lilies on a seated French gown (the French King on his throne): on the
 * bodice below the fur collar, along the lap, and down the skirt where it
 * falls in front of the shins. For `seatedGown`'s shape.
 */
export function seatedLilies(neck: P, waist: P, knee: P): string {
  const at: P[] = [
    [neck[0] - 3, neck[1] + 27],
    [neck[0] + 5, neck[1] + 39],
    [(waist[0] + knee[0]) / 2 + 2, waist[1] + 5],
    [knee[0] - 6, knee[1] + 7],
    [knee[0] + 2, knee[1] + 24],
  ]
  if (knee[1] + 44 < -8) at.push([knee[0] + 1, knee[1] + 44])
  return at.map((c) => placed(FLEUR, c, 1)).join('')
}

/**
 * The clergy's rochet: a white linen tunic from the shoulders to the knee,
 * with its folds, over the black cassock. In the figure's frame for a man
 * standing; placed on a moved body with `bodyT`. Fill PAPER with an INK edge,
 * then ROCHET_FOLDS in ink.
 */
export const ROCHET =
  'M-7 -144C-15 -142 -20 -136 -21 -124C-22 -108 -23 -88 -25 -66C-26 -58 -27 -52 -28 -46C-16 -42 10 -42 24 -47C22 -56 21 -64 20 -72C18.6 -92 18.6 -110 18 -124C17.6 -136 13 -143 6 -146Z'
export const ROCHET_FOLDS =
  'M-12 -86C-14 -72 -16 -60 -18 -48M-2 -84C-3 -72 -3 -60 -3 -46M10 -86C12 -74 14 -62 16 -48M-20 -48C-8 -45 10 -45 23 -49'
/**
 * The short black cape over the shoulders, to above the elbow. Ink with a
 * paper edge. (Cut first from the jaw to the elbow and wider than the arms,
 * it stood up round the head like a bell, and at panel size the two prelates
 * looked hunched: it now sits on the shoulders, below the neck.)
 */
export const CAPE =
  'M-9 -142C-16 -141 -20.4 -135.4 -21 -127L-21.6 -112C-8 -108.6 8 -108.6 20 -112.6L19.6 -127C19 -135.4 15 -141 9 -142.4Z'
/** The cross on the breast, below the cape, in ink on the rochet. */
export const BREAST_CROSS = 'M5.4 -101H8.6V-95.6H13V-92.4H8.6V-82H5.4V-92.4H1V-95.6H5.4Z'

/** The Hostess's apron: from the waist to above the hem, a little narrower than the gown. */
export const APRON =
  'M-4 -92C2 -92 10 -91 14 -90C17 -66 21 -40 24 -18C14 -14 2 -14 -6 -16C-6 -40 -5 -66 -4 -92Z'
export const APRON_FOLDS = 'M4 -84C5 -64 6 -42 6 -20M12 -84C14 -64 16 -44 18 -22'

/**
 * A herald's tabard: a short coat open at the sides, its square sleeves over
 * the shoulders, worn over the tunic to the upper thigh (Montjoy, "You know me
 * by my habit", 3.6). In the figure's frame for a man standing.
 */
export const TABARD =
  'M-10 -146C-20 -144 -26 -138 -27 -128L-27 -112L-19 -112L-19 -46L19 -46L19 -112L27 -112L27 -128C26 -138 20 -145 9 -147Z'
export const TABARD_EDGE = 'M-19 -112L-19 -46L19 -46L19 -112'

/**
 * The English herald's tabard is quartered with his King's arms, France and
 * England: HERALD_ENGLAND is the two quarters printed in paper (the upper one
 * behind, the lower one in front), with the lions of England cut small in ink
 * (HERALD_LIONS); the other two stay ink, with the lilies of France in paper
 * (HERALD_LILIES). In the figure's frame for a man standing, over TABARD.
 */
export const HERALD_ENGLAND =
  'M-0.6 -146.6L-10 -146C-20 -144 -26 -138 -27 -128L-27 -112L-19 -112L-19 -80L-0.6 -80Z' +
  'M0.6 -80L19 -80L19 -46L0.6 -46Z'
/** A lion of England, passant, about 13 long, centred on (0, 0) and walking to the left. */
const LION =
  'M-4 -1.5C-2 -2.6 2 -2.6 4 -1.6L5.4 -3.6C6.2 -4.6 7.2 -4.2 6.6 -3.2L5 -0.8C5.4 0 5.4 1 4.8 1.4L5.2 3.4L4 3.4L3.6 1.6L-2.2 1.6L-2.8 3.4L-4 3.4L-3.6 1.2C-4.2 0.8 -4.6 0 -4.4 -0.8L-6.2 -1.2C-7 -1.6 -7 -3 -6 -3.4L-4.6 -3.6Z'
export const HERALD_LIONS = (
  [
    [-12, -130, 1],
    [-12, -117, 1],
    [-10, -98, 1],
    [9.8, -71, 0.85],
    [9.8, -61, 0.85],
    [9.8, -51, 0.85],
  ] as [number, number, number][]
)
  .map(([x, y, s]) => placed(LION, [x, y], s))
  .join('')
export const HERALD_LILIES = (
  [
    [5.6, -126, 0.85],
    [16, -126, 0.85],
    [10.5, -101, 0.85],
    [-14, -70, 0.7],
    [-5.4, -70, 0.7],
    [-9.6, -56, 0.7],
  ] as [number, number, number][]
)
  .map(([x, y, s]) => placed(FLEUR, [x, y], s))
  .join('')

/**
 * A glove set in a cap's band (`glove`), its cuff in the band behind the brow
 * and its fingers up, leaning back: four fingers and a thumb cut apart, so it
 * reads as a glove and not as a feather. In the head's frame, for KETTLE and
 * FLUELLEN_CAP. GLOVE_CUFF is the line across the wrist, in ink.
 */
function gloveInCap(at: P, angle: number) {
  const c = Math.cos(deg(angle))
  const s = Math.sin(deg(angle))
  const q = (p: P): string => `${n(at[0] + p[0] * c - p[1] * s)} ${n(at[1] + p[0] * s + p[1] * c)}`
  const poly = (pts: P[]) => 'M' + pts.map(q).join('L') + 'Z'
  let d = poly([
    [-4, 0],
    [4.2, 0],
    [4.8, -13.6],
    [-4.6, -13.6],
  ])
  for (const [x, len, fan] of [
    [-3.4, 5.4, -10],
    [-1.15, 6.8, -3],
    [1.15, 6.8, 3],
    [3.4, 5.6, 10],
  ]) {
    const ux = Math.sin(deg(fan))
    const uy = -Math.cos(deg(fan))
    const tip: P = [x + ux * len, -13 + uy * len]
    d += poly([
      [x - 0.95, -13],
      [tip[0] - 0.85, tip[1]],
      [tip[0], tip[1] - 0.9],
      [tip[0] + 0.85, tip[1]],
      [x + 0.95, -13],
    ])
  }
  d += poly([
    [4, -6],
    [8.6, -10.6],
    [9.8, -9.2],
    [4.6, -3.6],
  ])
  return { d, cuff: `M${q([-4.3, -5])}L${q([4.5, -5])}` }
}
export const { d: GLOVE, cuff: GLOVE_CUFF } = gloveInCap([-4.5, -12.6], -28)

/** The transform that carries the standing frame onto a body moved to `neck` and `hip`. */
export function bodyT(neck: P, hip: P, standHip: P = [0, -70]): string | undefined {
  const sx = 0
  const sy = -138
  const dx = hip[0] - neck[0]
  const dy = hip[1] - neck[1]
  if (neck[0] === sx && neck[1] === sy && dx === standHip[0] - sx && dy === standHip[1] - sy)
    return undefined
  const a = (Math.atan2(-dx, dy) * 180) / Math.PI
  return `translate(${n(neck[0])} ${n(neck[1])}) rotate(${n(a)}) translate(0 138)`
}

/**
 * A long gown on a seated figure, facing right: the bodice from `neck` to
 * `waist`, the skirt over the lap to the `knee` and falling from it to the hem
 * on the ground in front of the shins; behind, it falls to the seat. (The
 * Hamlet and Lear kits' seated gown, which neither exports, cut again here.)
 */
function seatedGown(neck: P, waist: P, seat: number, knee: P, shoulder = 32, waistW = 26): string {
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

/** The royal mantle on a seated figure: down the back, over the seat behind, to the ground. */
function seatedMantle(neck: P, seat: number): string {
  const [x, y] = neck
  return (
    `M${n(x + 5)} ${n(y - 8)}C${n(x - 10)} ${n(y - 7)} ${n(x - 22)} ${n(y + 12)} ${n(x - 24)} ${n(y + 40)}` +
    `C${n(x - 26)} ${n(-seat - 10)} ${n(x - 28)} ${n(-seat + 20)} ${n(x - 30)} -3L${n(x - 12)} -2` +
    `C${n(x - 12)} ${n(-seat + 10)} ${n(x - 9)} ${n(y + 50)} ${n(x - 6)} ${n(y + 24)}C${n(x - 4)} ${n(y + 12)} ${n(x)} ${n(y + 2)} ${n(x + 5)} ${n(y - 8)}Z`
  )
}

/** Plate on a limb: a paper arc at the joint (`at`, the middle point), across the limb. */
function jointArc(pts: P[], w: number): string {
  if (pts.length < 3) return ''
  const [a, b, c] = pts
  const L1 = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1
  const L2 = Math.hypot(c[0] - b[0], c[1] - b[1]) || 1
  const u: P = [(b[0] - a[0]) / L1 + (c[0] - b[0]) / L2, (b[1] - a[1]) / L1 + (c[1] - b[1]) / L2]
  const Lu = Math.hypot(u[0], u[1]) || 1
  const v: P = [-u[1] / Lu, u[0] / Lu]
  const h = w / 2 + 0.6
  return (
    gouge(b[0] + v[0] * h, b[1] + v[1] * h, b[0] - v[0] * h, b[1] - v[1] * h, 1.1, 1) +
    gouge(
      b[0] + v[0] * h + (u[0] / Lu) * 5,
      b[1] + v[1] * h + (u[1] / Lu) * 5,
      b[0] - v[0] * h + (u[0] / Lu) * 5,
      b[1] - v[1] * h + (u[1] / Lu) * 5,
      0.8,
      1,
    )
  )
}

/** The outline of a tunic hung from `neck` to `hip`, as `doublet` cuts it, for mail rings. */
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
    at(hip, -2, -h * 0.82),
    at(hip, hem, -(h + flare)),
    at(hip, hem, h + flare),
    at(hip, -2, h * 0.82),
  ]
}

// ── The builder ──────────────────────────────────────────────────────────────

export type Look =
  | 'henry'
  | 'exeter'
  | 'canterbury'
  | 'ely'
  | 'ambassador'
  | 'french-lord'
  | 'pistol'
  | 'nym'
  | 'bardolph'
  | 'boy'
  | 'hostess'
  | 'scroop'
  | 'cambridge'
  | 'grey'
  | 'chorus'
  | 'lord'
  | 'fluellen'
  | 'gower'
  | 'montjoy'
  | 'soldier'
  | 'french-king'
  | 'dauphin'
  | 'constable'
  | 'governor'
  | 'citizen'
  | 'macmorris'
  | 'jamy'
  | 'le-fer'
  | 'williams'
  | 'herald'
  | 'katharine'
  | 'alice'

/** How big each person is, against a man of 1: the Boy is a child. */
const SIZE: Record<Look, number> = {
  henry: 1.01,
  exeter: 1,
  canterbury: 0.97,
  ely: 0.98,
  ambassador: 1,
  'french-lord': 1,
  pistol: 1,
  nym: 0.98,
  bardolph: 1.02,
  boy: 0.7,
  hostess: 0.92,
  scroop: 1,
  cambridge: 1.01,
  grey: 0.99,
  chorus: 1,
  lord: 1,
  fluellen: 0.97,
  gower: 1,
  montjoy: 1,
  soldier: 1,
  'french-king': 1,
  dauphin: 1.01,
  constable: 1.02,
  governor: 1,
  citizen: 0.98,
  macmorris: 1.02,
  jamy: 0.99,
  'le-fer': 0.99,
  williams: 1.01,
  herald: 1,
  katharine: 0.88,
  alice: 0.9,
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

/** What a person wears: their own dress, or harness for war. */
export type Dress = 'own' | 'armour'

export interface Pose {
  look: Look
  /** The head's centre and its tilt in degrees (forward is positive). */
  head?: { at?: P; rot?: number }
  /** The line of the body, neck to hip (to the waist, for a gown): to lean, bow or kneel. */
  body?: { neck?: P; hip?: P }
  far?: ArmPose
  near?: ArmPose
  /** Hip, knee and ankle of each leg, for those in tunics. The ankle sits 3 above the sole. */
  legs?: { far: P[]; near: P[] }
  /** A long gown's hem: how far it reaches ahead of the waist and behind it. */
  hem?: { front?: number; back?: number }
  /** Seated, for the long gowns: the seat's height under the hips and where the lap ends. */
  seated?: { seat: number; knee?: P }
  /** A cloak's hem swung back this far (for those who wear one), or no cloak at all. */
  cloak?: number
  noCloak?: boolean
  /** Henry's royal mantle at court, its hem swung back this far. */
  mantle?: number
  dress?: Dress
  /** An open bascinet and its mail, with armour. */
  helm?: boolean
  /** No crown, cap, hood or bonnet. */
  bare?: boolean
  /** The crown printed in the spot colour, for a panel whose subject it is (check it at phone width). */
  crownRed?: boolean
  /** A sword in its scabbard at the hip (worn by default by the lords and soldiers). */
  sword?: boolean
  /** 'down' is the lid of grief or thought; 'wide' is fear. */
  eye?: 'open' | 'down' | 'shut' | 'wide' | 'none'
  /** The brow drawn down in anger (FROWN), or up towards the nose in sorrow (SORROW). */
  brow?: 'frown' | 'sorrow'
  mouth?: 'open' | 'smile'
  /** "Their cheeks are paper" (2.2): the face cut in paper, its features in ink. HEAD_MAN faces only. */
  pale?: boolean
  /** A lord's beard and bonnet (0 to 2); a soldier's (0 to 2). */
  variant?: number
  /** Fluellen's leek in his cap, from Saint Davy's day on. */
  leek?: boolean
  /** A glove set in the cap's band: Williams from 4.1, Fluellen from 4.7. */
  glove?: boolean
  /** Henry in Erpingham's cloak and a bonnet, unknown to his soldiers (4.1). */
  disguise?: boolean
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

const WOMEN: Look[] = ['hostess', 'katharine', 'alice']
/** Long gowns to the floor: the King at court, the clergy, the French envoys and court. */
const GOWNED: Look[] = [
  'henry',
  'canterbury',
  'ely',
  'ambassador',
  'french-lord',
  'french-king',
  'dauphin',
  'constable',
]
const CLERGY: Look[] = ['canterbury', 'ely']
const FRENCH: Look[] = [
  'ambassador',
  'french-lord',
  'montjoy',
  'french-king',
  'dauphin',
  'constable',
  'governor',
  'le-fer',
]
/** The two kings: crowned, with a collar of fur, and the royal mantle with `mantle`. */
const KINGS: Look[] = ['henry', 'french-king']
/** Those who wear a sword by default. */
const SWORDED: Look[] = [
  'exeter',
  'pistol',
  'nym',
  'bardolph',
  'scroop',
  'cambridge',
  'grey',
  'lord',
  'fluellen',
  'gower',
  'soldier',
  'constable',
  'governor',
  'macmorris',
  'jamy',
  'williams',
]
/** Those who wear a cloak by default, and whether it is long (to the knee). */
const CLOAKED: Partial<Record<Look, boolean>> = {
  exeter: true,
  scroop: false,
  cambridge: true,
  grey: false,
  lord: true,
  chorus: false,
}
/** The tunic's cut for each man: width, hem (below the hip) and flare. Lords wear it to the calf. */
const TUNIC: Partial<Record<Look, { width: number; hem: number; flare: number }>> = {
  exeter: { width: 31, hem: 44, flare: 9 },
  scroop: { width: 30, hem: 40, flare: 9 },
  cambridge: { width: 31, hem: 44, flare: 9 },
  grey: { width: 30, hem: 40, flare: 9 },
  lord: { width: 31, hem: 44, flare: 9 },
  pistol: { width: 31, hem: 24, flare: 7 },
  nym: { width: 27, hem: 24, flare: 6 },
  bardolph: { width: 32, hem: 24, flare: 7 },
  boy: { width: 26, hem: 18, flare: 6 },
  chorus: { width: 28, hem: 4, flare: 4 },
  fluellen: { width: 30, hem: 26, flare: 7 },
  gower: { width: 30, hem: 26, flare: 7 },
  montjoy: { width: 30, hem: 30, flare: 7 },
  soldier: { width: 30, hem: 24, flare: 7 },
  governor: { width: 31, hem: 30, flare: 7 },
  citizen: { width: 30, hem: 36, flare: 8 },
  macmorris: { width: 32, hem: 26, flare: 7 },
  jamy: { width: 30, hem: 26, flare: 7 },
  'le-fer': { width: 30, hem: 26, flare: 7 },
  williams: { width: 31, hem: 24, flare: 7 },
  herald: { width: 30, hem: 30, flare: 7 },
}

function headShape(look: Look): string {
  if (look === 'henry' || look === 'boy' || look === 'dauphin') return HEAD_YOUTH
  if (look === 'hostess' || look === 'alice') return HEAD_WOMAN
  if (look === 'katharine') return HEAD_GIRL
  if (look === 'bardolph') return HEAD_BARDOLPH
  return HEAD_MAN
}

/** The cap or hat a person wears, if any, and how it is cut. */
function hatOf(look: Look, p: Pose): { d: string; cut?: string } | undefined {
  if (p.bare || p.helm) return undefined
  if (CLERGY.includes(look)) return { d: SKULL_CAP, cut: SKULL_CAP_RIM }
  if (look === 'pistol') return { d: GRATIANO_CAP, cut: GRATIANO_CAP_CUT }
  if (look === 'nym') return { d: CAIUS_HOOD, cut: CAIUS_HOOD_CUTS }
  if (look === 'ambassador' || look === 'cambridge')
    return { d: BURGUNDY_CAP, cut: BURGUNDY_CAP_CUT }
  if (look === 'french-lord' && (p.variant ?? 0) !== 1)
    return { d: BURGUNDY_CAP, cut: BURGUNDY_CAP_CUT }
  if (look === 'lord' && (p.variant ?? 0) === 1) return { d: BURGUNDY_CAP, cut: BURGUNDY_CAP_CUT }
  if (look === 'fluellen') return { d: FLUELLEN_CAP, cut: FLUELLEN_CAP_CUT }
  if (look === 'gower' || look === 'soldier' || look === 'williams')
    return { d: KETTLE, cut: KETTLE_CUT }
  if (look === 'jamy' || (look === 'citizen' && p.variant === 2))
    return { d: OSWALD_CAP, cut: OSWALD_CAP_CUT }
  if (look === 'citizen' && p.variant === 1) return { d: CAIUS_HOOD, cut: CAIUS_HOOD_CUTS }
  if (look === 'citizen') return { d: BURGUNDY_CAP, cut: BURGUNDY_CAP_CUT }
  if (look === 'henry' && p.disguise) return { d: BURGUNDY_CAP, cut: BURGUNDY_CAP_CUT }
  return undefined
}

/** The ink beard a man wears, if any, and its paper cuts. */
function beardOf(look: Look, p: Pose): { d: string; cut: string } | undefined {
  const v = p.variant ?? 0
  if (look === 'pistol' || look === 'grey') return { d: CORNWALL_BEARD, cut: CORNWALL_BEARD_CUTS }
  if (look === 'cambridge' || look === 'fluellen' || look === 'ambassador')
    return { d: SHORT_BEARD, cut: SHORT_BEARD_CUTS }
  if ((look === 'lord' || look === 'french-lord' || look === 'soldier') && v === 2)
    return { d: SHORT_BEARD, cut: SHORT_BEARD_CUTS }
  if (look === 'french-lord' && v === 1) return { d: CORNWALL_BEARD, cut: CORNWALL_BEARD_CUTS }
  if (look === 'constable') return { d: CORNWALL_BEARD, cut: CORNWALL_BEARD_CUTS }
  if (look === 'governor' || (look === 'citizen' && v === 0))
    return { d: SHORT_BEARD, cut: SHORT_BEARD_CUTS }
  if (look === 'macmorris') return { d: MACMORRIS_BEARD, cut: MACMORRIS_BEARD_CUTS }
  if (look === 'williams') return { d: SHORT_BEARD, cut: SHORT_BEARD_CUTS }
  return undefined
}

function build(p: Pose) {
  const look = p.look
  const woman = WOMEN.includes(look)
  const armour = p.dress === 'armour' && !woman && !CLERGY.includes(look)
  // Henry in disguise wears a lord's tunic under Erpingham's cloak, not his gown
  const disguised = look === 'henry' && !!p.disguise && !armour
  const gowned = GOWNED.includes(look) && !armour && !disguised
  const small = woman || look === 'boy'
  const seat = gowned ? p.seated?.seat : undefined
  const sf = seat !== undefined ? seatedFrame(seat) : undefined
  const defNeck: P = woman ? [0, -132] : [0, -138]
  const defHip: P = woman ? [0, -94] : gowned ? [0, -90] : [0, -70]
  const neck: P = p.body?.neck ?? sf?.neck ?? defNeck
  const hip: P = p.body?.hip ?? sf?.waist ?? defHip
  const moved =
    neck[0] !== defNeck[0] || neck[1] !== defNeck[1] || hip[0] !== defHip[0] || hip[1] !== defHip[1]
  const hAt: P = p.head?.at ?? [neck[0] + 3, neck[1] - 22]
  const headT = `translate(${n(hAt[0])} ${n(hAt[1])}) rotate(${p.head?.rot ?? 0})`
  const armW = gowned ? 9.4 : small ? 7.4 : look === 'nym' ? 8 : look === 'bardolph' ? 9.2 : 8.6
  const legW = look === 'boy' ? 8.4 : look === 'nym' ? 8.6 : 9
  const parts: Piece[] = []
  let cuts = ''
  /** Ink marks printed over the cuts (fur tufts). */
  let inkOver = ''
  /** Mail rings, stroked in paper. */
  let mail = ''
  /** Overlays drawn in their own colours after the cuts, in the body's frame. */
  const over: ReactNode[] = []

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

  if (p.far) {
    parts.push(armOf(p.far))
    if (armour) cuts += jointArc(p.far.pts, armW)
  }

  const legs = p.legs ?? MEN_LEGS
  const last = (a: P[]) => a[a.length - 1]
  const legParts = (pts: P[]): Part[] => [
    { d: limb(pts), w: legW },
    shoe([last(pts)[0], last(pts)[1] + 3], 1),
  ]
  const swordOn =
    !woman &&
    !CLERGY.includes(look) &&
    !(gowned && sf) &&
    (p.sword ?? (SWORDED.includes(look) || armour))
  const sword = swordOn ? scabbard(gowned ? [hip[0], hip[1] + 6] : hip) : undefined
  const t = moved ? bodyT(neck, hip, defHip) : undefined

  if (woman) {
    const kate = look === 'katharine'
    parts.push({
      d: gown(neck, hip, 0, 1, {
        shoulder: kate ? 23 : 25,
        waistW: kate ? 16 : 18,
        front: p.hem?.front ?? (kate ? 30 : 28),
        back: p.hem?.back ?? (kate ? 40 : 34),
      }),
    })
    // the bodice, and two folds of the skirt
    cuts +=
      gouge(hip[0] - 8, hip[1] - 1, hip[0] + 9, hip[1], 1, 0.8) +
      gouge(hip[0] - 6, hip[1] + 10, hip[0] - 20, -8, 1.8, 1)
    // Katharine's gown: a third fold, and the lilies on the skirt, "my fair
    // flower-de-luce" (5.2). (Begun at the neck, the first row sat on the
    // girdle and read as a jewelled belt.)
    if (kate)
      cuts +=
        gouge(hip[0] + 8, hip[1] + 10, hip[0] + 18, -8, 1.8, -1) +
        lilies([neck[0], neck[1] + 30], hip, 4, -10)
    // the apron is the Hostess's alone: she keeps a house
    if (look === 'hostess')
      over.push(
        <g key="apron" transform={t}>
          <path d={APRON} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
          <path d={APRON_FOLDS} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
        </g>,
      )
  } else if (gowned) {
    const clergy = CLERGY.includes(look)
    const king = KINGS.includes(look)
    const mantleOn = king && p.mantle !== undefined
    if (sf && seat !== undefined) {
      const knee = p.seated?.knee ?? ([36, -seat - 6] as P)
      parts.push({ d: seatedGown(neck, hip, seat, knee) })
      parts.push(shoe([knee[0] + 8, 0], 1))
      cuts +=
        gouge(hip[0] - 11, hip[1] + 1, hip[0] + 12, hip[1] + 2, 1.6, 0.8) +
        gouge(knee[0] - 2, knee[1] + 8, knee[0] + 2, -10, 1.6, -0.6) +
        gouge(hip[0] + 6, hip[1] + 6, knee[0] - 4, knee[1] + 2, 1.4, -1)
      if (FRENCH.includes(look)) cuts += seatedLilies(neck, hip, knee)
      if (mantleOn) parts.push({ d: seatedMantle(neck, seat) })
    } else {
      if (mantleOn) parts.push({ d: royalMantle(p.mantle ?? 0), t })
      parts.push({
        d: gown(neck, hip, 0, 1, {
          shoulder: clergy ? 30 : 32,
          waistW: clergy ? 24 : 26,
          front: p.hem?.front ?? 22,
          back: p.hem?.back ?? 28,
        }),
      })
      parts.push(shoe([hip[0] + 10, 0], 1))
      if (sword) parts.push(sword.part)
      if (!clergy)
        // the girdle at the waist, the gown's front edge and a long fold
        cuts +=
          gouge(hip[0] - 13, hip[1] - 1, hip[0] + 13, hip[1], 1.7) +
          gouge(hip[0] + 6, hip[1] + 10, hip[0] + 12, -8, 1.6, -0.4) +
          gouge(hip[0] - 4, hip[1] + 10, hip[0] - 14, -8, 1.8, 1)
      if (mantleOn && !t) cuts += mantleFur(p.mantle ?? 0)
      if (mantleOn && !t) inkOver += mantleFurTufts(p.mantle ?? 0)
    }
    if (king) {
      cuts += furCollar(neck)
      inkOver += furTufts(neck)
    }
    if (clergy) {
      // the white rochet over the cassock, the black cape and the cross
      over.push(
        <g key="rochet" transform={t}>
          <path d={ROCHET} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
          <path d={ROCHET_FOLDS} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
          <path d={CAPE} fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" />
          <path d={BREAST_CROSS} fill={INK} />
        </g>,
      )
    }
    if (FRENCH.includes(look) && !sf) cuts += lilies(neck, hip, 5)
  } else {
    // The men in tunics: the cloak behind, the far leg, the scabbard, the
    // body, the tunic (or the jupon) over it, the near leg.
    const cut = (disguised ? TUNIC.lord : TUNIC[look]) ?? { width: 29, hem: 26, flare: 7 }
    const jupon = armour ? { width: cut.width, hem: 14, flare: 4 } : cut
    parts.push(...legParts(legs.far))
    if (armour) cuts += jointArc(legs.far, legW)
    const long = CLOAKED[look]
    if (!armour && !p.noCloak && (p.cloak !== undefined || long !== undefined)) {
      parts.push({ d: cloak(p.cloak ?? 0, long ?? false), t })
      if (!t) cuts += cloakCuts(p.cloak ?? 0, long ?? false)
    }
    if (sword) parts.push(sword.part)
    if (armour) {
      // the mail skirt below the jupon, to the upper thigh
      parts.push({ d: doublet(neck, hip, 1, { width: cut.width, hem: 26, flare: 6 }) })
      mail = mailRings(tunicOutline(neck, hip, cut.width, 25, 5.4))
    }
    parts.push({ d: limb([neck, hip]), w: jupon.width * 0.76 })
    parts.push({ d: doublet(neck, hip, 1, jupon) })
    if (disguised) {
      // Erpingham's cloak, closed about him from the shoulders to the knee
      parts.push({ d: LONG_CLOAK, t })
      if (!t) cuts += LONG_CLOAK_CUTS
    }
    parts.push(...legParts(legs.near))
    if (armour) cuts += jointArc(legs.near, legW)
    // the belt (slung low on the hips in armour) and a fold down the skirt
    const u: P = [(hip[0] - neck[0]) / 68, (hip[1] - neck[1]) / 68]
    const beltY = armour ? 8 : -4
    cuts +=
      gouge(
        hip[0] - jupon.width * 0.42 + u[0] * beltY,
        hip[1] + beltY,
        hip[0] + jupon.width * 0.44 + u[0] * beltY,
        hip[1] + beltY - 1,
        armour ? 1.8 : 1.3,
      ) +
      gouge(
        hip[0] + 6,
        hip[1] + 2,
        hip[0] + 8 + jupon.flare * 0.4,
        hip[1] + jupon.hem - 4,
        1.4,
        -0.4,
      )
    if (!armour && look === 'montjoy')
      over.push(
        <g key="tabard" transform={t}>
          <path d={TABARD} fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" />
          <path d={TABARD_EDGE} fill="none" stroke={PAPER} strokeWidth={1} />
          <path d={lilies([0, -138], [0, -100], 3, -50)} fill={PAPER} />
        </g>,
      )
    if (!armour && look === 'herald')
      // the English herald's tabard, quartered France and England
      over.push(
        <g key="tabard" transform={t}>
          <path d={TABARD} fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" />
          <path
            d={HERALD_ENGLAND}
            fill={PAPER}
            stroke={INK}
            strokeWidth={0.9}
            strokeLinejoin="round"
          />
          <path d={TABARD_EDGE} fill="none" stroke={PAPER} strokeWidth={1} />
          <path d={HERALD_LILIES} fill={PAPER} />
          <path d={HERALD_LIONS} fill={INK} />
        </g>,
      )
    if (!armour && look === 'chorus') {
      // the doublet's buttoned front, and the trunk hose below it
      cuts += gouge(7.6, -128, 8.6, -84, 0.9, 0.4)
      parts.push({ d: TRUNK_HOSE, t })
      over.push(<path key="hose" d={TRUNK_HOSE_PANES} transform={t} fill={PAPER} />)
    }
    // the lilies of France on the Governor's jupon or tunic, and le Fer's, and
    // on any Frenchman's jupon in harness (the prisoners of 4.6)
    if (look === 'governor' || look === 'le-fer' || (armour && FRENCH.includes(look)))
      over.push(
        <path key="lilies" d={lilies([0, -138], [0, -100], 2, -64)} transform={t} fill={PAPER} />,
      )
  }

  // The head, and what is behind or on it, in order from back to front.
  const hat = hatOf(look, p)
  const beard = p.pale ? undefined : beardOf(look, p)
  if (look === 'scroop') parts.push({ d: SCROOP_HAIR, t: headT })
  if (look === 'dauphin' && !p.helm) parts.push({ d: DAUPHIN_HAIR, t: headT })
  if (look === 'fluellen' && !p.helm) parts.push({ d: FLUELLEN_HOOD, t: headT })
  if (look === 'hostess' && !p.bare) parts.push({ d: COIF, t: headT })
  if (look === 'katharine')
    parts.push({ d: MIRANDA_FALL, t: headT, sep: 1.3 }, { d: MIRANDA_HAIR, t: headT })
  if (p.helm) parts.push({ d: AVENTAIL, t: headT })
  if (beard) parts.push({ d: beard.d, t: headT })
  parts.push({ d: headShape(look), t: headT })
  if (p.helm) parts.push({ d: BASCINET, t: headT })
  if (look === 'pistol' && hat) parts.push({ d: GRATIANO_FEATHER, t: headT })
  if (hat) parts.push({ d: hat.d, t: headT })

  const near = p.near ? armOf(p.near) : undefined
  const nearCuts = p.near && armour ? jointArc(p.near.pts, armW) : ''
  return {
    parts,
    cuts,
    inkOver,
    mail,
    over,
    headT,
    hat,
    beard,
    hilt: sword?.hilt,
    near,
    nearCuts,
    neck,
  }
}

/**
 * One of the people of the play, cut from the block: placed with its feet at
 * `at`, scaled by `scale` (on top of the person's own size), and turned to
 * face left with `flip`. `children` are drawn last, in the figure's own frame
 * (a letter, a paper, a sword held in the hand).
 */
export function Person({
  pose,
  at,
  scale = 1,
  flip = false,
  className,
  style,
  children,
}: {
  pose: Pose
  at: P
  scale?: number
  flip?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
}) {
  const { parts, cuts, inkOver, mail, over, headT, hat, beard, hilt, near, nearCuts } = build(pose)
  const look = pose.look
  const s = scale * SIZE[look]
  const eye = pose.eye ?? 'open'
  const bare = !!pose.bare
  const pale = !!pose.pale && headShape(look) === HEAD_MAN
  const transform = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`
  const stroke = (d: string, w: number, colour: string = PAPER) => (
    <path d={d} fill="none" stroke={colour} strokeWidth={w} strokeLinecap="round" />
  )
  const crowned = KINGS.includes(look) && !bare && !pose.disguise
  // Katharine's face is lit: cut in paper, with her features in ink
  const lit = look === 'katharine'
  const inked = !pale && !lit
  return (
    <CutFigure
      parts={parts}
      cuts={cuts || undefined}
      transform={transform}
      className={className}
      style={style}
    >
      {inkOver && stroke(inkOver, 1, INK)}
      {mail && stroke(mail, 0.9, PAPER)}
      {over}
      <g transform={headT}>
        {/* a pale face first, so the hair, the beard and the hat sit over it */}
        {pale && (
          <>
            <path d={FACE_MAN} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
            <path d={PALE_FEATURES} fill={INK} />
            <path d={PALE_EYE} fill="none" stroke={INK} strokeWidth={0.9} />
            <circle cx={WIDE_PUPIL[0]} cy={WIDE_PUPIL[1]} r={WIDE_PUPIL[2]} fill={INK} />
            {(look === 'grey' || look === 'cambridge') && (
              <>
                <path d={beardOf(look, { look })!.d} fill={INK} stroke={PAPER} strokeWidth={0.9} />
                <path d={beardOf(look, { look })!.cut} fill={PAPER} />
              </>
            )}
          </>
        )}
        {pose.helm && <path d={BASCINET_CUTS} fill={PAPER} />}
        {/* hair: short and cut in paper on the bare heads; Canterbury's white at the nape */}
        {!pose.helm &&
          !pale &&
          ((look === 'henry' && !pose.disguise) ||
            look === 'boy' ||
            look === 'bardolph' ||
            look === 'chorus' ||
            look === 'grey' ||
            (look === 'gower' && !hat) ||
            look === 'montjoy' ||
            (look === 'lord' && !hat) ||
            (look === 'french-lord' && !hat) ||
            (look === 'soldier' && !hat) ||
            (look === 'pistol' && !hat) ||
            look === 'constable' ||
            look === 'governor' ||
            look === 'macmorris' ||
            look === 'le-fer' ||
            look === 'herald' ||
            (look === 'citizen' && !hat)) &&
          stroke(HAIR_SHORT, 1.2)}
        {look === 'french-king' && !pose.helm && (
          <>
            <path d={FRENCH_KING_HAIR} fill={PAPER} stroke={INK} strokeWidth={0.9} />
            {stroke(FRENCH_KING_STRANDS, 0.8, INK)}
            <path d={PROSPERO_LINES + WHITE_BROW} fill={PAPER} />
          </>
        )}
        {look === 'dauphin' && !pose.helm && <path d={DAUPHIN_STRANDS} fill={PAPER} />}
        {look === 'exeter' && !pose.helm && stroke(KENT_HAIR, 1.1)}
        {look === 'scroop' && (
          <>
            <path d={SCROOP_STRANDS} fill={PAPER} />
            {stroke(EAR, 1.2)}
          </>
        )}
        {look === 'canterbury' && (
          <>
            <path d={NAPE_WHITE} fill={PAPER} stroke={INK} strokeWidth={0.9} />
            {stroke(NAPE_WHITE_STRANDS, 0.8, INK)}
            <path d={PROSPERO_LINES + WHITE_BROW} fill={PAPER} />
          </>
        )}
        {/* Ely's dark hair below his cap: the hairline over the temple and
            round the ear, as HAIR_SHORT cuts it, and its edge at the back.
            (The ear alone, with no hair round it, read as a letter C.) */}
        {look === 'ely' &&
          stroke(
            'M13.6 -12.4C6.4 -11.6 1.6 -8.4 -0.2 -3C-1.2 1.2 -2.6 4.6 -5.8 7.4' +
              'M-1.4 -3.2C-4.4 -3.8 -5.8 0 -4 3.2C-3 4.6 -1.4 4.2 -1 2.8' +
              'M-12.4 -8C-14 -1 -13.6 6 -11.6 12.6',
            1.2,
          )}
        {look === 'fluellen' && !pose.helm && <path d={FLUELLEN_HOOD_CUT} fill={PAPER} />}
        {look === 'hostess' && !bare && stroke(COIF_EDGE, 1.8)}
        {look === 'alice' && (
          <>
            <path d={WIMPLE} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
            {stroke(WIMPLE_FOLDS, 0.8, INK)}
            <path
              d={ALICE_VEIL}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.1}
              strokeLinejoin="round"
            />
            {stroke(ALICE_VEIL_FOLDS, 0.8, INK)}
            <path d={ALICE_LINES} fill={PAPER} />
          </>
        )}
        {(look === 'nym' || look === 'citizen') &&
          hat?.d === CAIUS_HOOD &&
          stroke(CAIUS_HOOD_EDGE, 1.6)}
        {hat?.cut && <path d={hat.cut} fill={PAPER} />}
        {look === 'pistol' && hat && <path d={GRATIANO_FEATHER_CUTS} fill={PAPER} />}
        {beard && <path d={beard.cut} fill={PAPER} />}
        {look === 'bardolph' && <path d={BARDOLPH_KNOBS} fill={PAPER} />}
        {/* the eye, the brow and the mouth */}
        {inked && eye === 'open' && <path d={EYE} fill={PAPER} />}
        {inked && (eye === 'down' || eye === 'shut') && <path d={EYE_DOWN} fill={PAPER} />}
        {inked && eye === 'wide' && (
          <>
            <path d={WIDE_EYE} fill={PAPER} />
            <circle cx={WIDE_PUPIL[0]} cy={WIDE_PUPIL[1]} r={WIDE_PUPIL[2]} fill={INK} />
          </>
        )}
        {inked && pose.brow === 'frown' && <path d={FROWN} fill={PAPER} />}
        {inked && pose.brow === 'sorrow' && <path d={SORROW} fill={PAPER} />}
        {inked && pose.mouth === 'open' && <path d={OPEN_MOUTH} fill={PAPER} />}
        {inked && pose.mouth === 'smile' && stroke(SMILE, 1.2)}
        {/* Katharine's lit face, her dark hair laid over it, her features in ink */}
        {lit && (
          <>
            <path d={FACE_GIRL} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
            <path d={MIRANDA_HAIR} fill={INK} />
            <path d={MIRANDA_STRANDS + MIRANDA_FALL_STRANDS} fill={PAPER} />
            {eye !== 'none' && (
              <path
                d={eye === 'down' || eye === 'shut' ? CORDELIA_EYE_DOWN : CORDELIA_EYE}
                fill={INK}
              />
            )}
            <path
              d={CORDELIA_BROW + (pose.mouth === 'open' ? KATE_MOUTH_OPEN : CORDELIA_MOUTH)}
              fill={INK}
            />
            {stroke(CORDELIA_JAW, 0.9, INK)}
          </>
        )}
        {/* Exeter's grey beard, over the face and the chest */}
        {look === 'exeter' && (
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
        {look === 'chorus' && (
          <>
            <path d={CHORUS_RUFF} fill={PAPER} stroke={INK} strokeWidth={0.9} />
            {stroke(CHORUS_RUFF_PLEATS, 0.8, INK)}
          </>
        )}
        {look === 'fluellen' && pose.leek && !pose.helm && (
          <>
            <path
              d={LEEK_LEAVES + LEEK}
              fill={PAPER}
              stroke={INK}
              strokeWidth={0.9}
              strokeLinejoin="round"
            />
            {stroke('M3.6 -24L3.8 -40', 0.7, INK)}
          </>
        )}
        {(look === 'dauphin' || lit) && !bare && !pose.helm && (
          <path
            d={DAUPHIN_CIRCLET}
            transform={lit ? KATE_CIRCLET_AT : undefined}
            fill={PAPER}
            stroke={INK}
            strokeWidth={0.9}
            strokeLinejoin="round"
          />
        )}
        {pose.glove && hat && (
          <>
            <path d={GLOVE} fill={PAPER} stroke={INK} strokeWidth={0.8} strokeLinejoin="round" />
            {stroke(GLOVE_CUFF, 0.7, INK)}
          </>
        )}
        {/* the King's crown, on his head or on his helm */}
        {crowned && (
          <g transform={pose.helm ? 'translate(-1 -6.6)' : undefined}>
            <path
              d={CROWN}
              fill={pose.crownRed ? RED : PAPER}
              stroke={INK}
              strokeWidth={1.1}
              strokeLinejoin="round"
            />
            {stroke(CROWN_BAND, 0.9, INK)}
          </g>
        )}
      </g>
      {hilt && <path d={hilt} fill={PAPER} stroke={INK} strokeWidth={0.8} />}
      {near && (
        <CutFigure parts={[near]} halo={1.5} cuts={nearCuts || undefined}>
          {look === 'canterbury' || look === 'ely' ? null : null}
        </CutFigure>
      )}
      {children}
    </CutFigure>
  )
}

/** A woman's look, for the docblock's rule that no face takes a flush. */
export const isWoman = (look: Look) => WOMEN.includes(look)

/** Silences an unused import in a kit that offers these shapes to later panels. */
export const SHARED = { OLD_STRANDS, HEAD_GIRL } as const
