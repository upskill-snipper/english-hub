import type { ReactNode } from 'react'

import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { gouge, n } from '@/components/comics/linocut/carve'

import {
  CutFigure,
  EYE,
  EYE_DOWN,
  FLUSH,
  FROWN,
  HEAD_CASCA,
  CASCA_BEARD_CUTS,
  HEAD_MAN,
  HELMET,
  HELMET_CREST,
  HELMET_CUTS,
  HOUSE_MANTLE,
  HOUSE_MANTLE_CUTS,
  OPEN_MOUTH,
  PORTIA_HAIR,
  PORTIA_STRANDS,
  ROMAN_HAIR,
  DECIUS_HAIR,
  DECIUS_LOCK,
  ANTONY_CURLS,
  CROWN_SHINE,
  LEPIDUS_HAIR,
  CAP,
  CAP_CUT,
  CINNA_FRINGE,
  CINNA_HAIR,
  OLD_FRINGE,
  OLD_FRINGE_STRANDS,
  PALLA,
  PALLA_EDGE,
  armourCuts,
  cuirass,
  endAngle,
  gripHand,
  hand,
  limb,
  mitt,
  pointingHand,
  pteruges,
  robe,
  robeCuts,
  sandal,
  sandalCuts,
  toga,
  togaCuts,
  tunic,
  tunicCuts,
  warningHand,
  type P,
  type Part,
  type Piece,
} from '../../julius-caesar/panels/people'
import { gown } from '../../romeo-and-juliet/panels/verona-kit'
import {
  FULL_BEARD,
  FULL_BEARD_STRANDS,
  HEAD_WOMAN,
  WHITE_BROW,
} from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { HEAD_YOUTH, cloak, cloakCuts } from '../../much-ado-about-nothing/panels/people'

export { CutFigure, hand, limb, mitt, gripHand, endAngle, type P, type Part, type Piece }

/**
 * THE PEOPLE OF ANTONY AND CLEOPATRA: one figure kit for every panel of the
 * play, so a student meets the same Antony, the same Cleopatra and the same
 * Caesar from Alexandria to Rome and back. Draw every recurring character
 * with `Person`, never with a new outline. A change here changes every panel
 * that uses it: preview them all before changing one. Cut first, on 2
 * October 2026, by the artist of moments 21 to 25 (Act 4, Scene 15 to the
 * end). An artist who needs a person not here adds a `Look` below, in the
 * same way, and says so in this docblock.
 *
 * THE TOOLS ARE SHARED, NOT COPIED. The cutting tools (CutFigure, the open
 * hand with its fingers apart, the pointing and warning hands, the hand at
 * rest, the grip) and the Roman dress (toga, tunic, robe, cuirass and its
 * skirt of strips, sandals, the general's cloak, the soldier's helmet) are
 * the Julius Caesar kit's (../../julius-caesar/panels/people.tsx), which
 * re-exports the Romeo and Juliet and Much Ado kits' hands, so one hand cuts
 * every Shakespeare play on the site and a Roman here is dressed as a Roman
 * is at Philippi. A figure is cut as the reference panel cuts Fred
 * (src/data/comics/a-christmas-carol/counting-house.tsx): a paper halo round
 * every part, the parts in ink, then the paper cuts of folds and features.
 * `Person` builds it from a pose in its own frame: facing right, feet at
 * (0, 0), a man about 182 units tall, the head centred on (3, -160) (a
 * woman's on (3, -154)). Place it with `at`, `scale` and `flip`.
 *
 * ── THIS PLAY'S OWN RULES, which every panel keeps ─────────────────────────
 * - Five deaths come by the characters' own hands or by grief: Enobarbus,
 *   Eros, Antony, Charmian and Iras, and Cleopatra. None is shown at the
 *   moment and none is suggested by its method: no blade turned on anyone,
 *   no sword fallen on, no asp at a breast or arm, no poison raised to a
 *   mouth. So no hand in this kit holds a drawn sword, and `gripHand` is for
 *   a staff, a rope, a letter or a crown. Thidias is led away; his whipping
 *   is never drawn.
 * - Cleopatra is drawn with the same dignity as every other figure: never
 *   sexualised, never a caricature of an Egyptian queen. No snake is ever
 *   drawn on her crown or anywhere near her.
 * - RED is never put on a mouth, a chin or a hand: on this site it was twice
 *   read as blood. A flush goes on the cheek (FLUSH). A crown in red is cut
 *   large enough to stay a crown at phone width.
 *
 * ── WHAT THE PLAY SAYS OF THEM, and so what is drawn ────────────────────────
 * (the held edition, src/data/full-texts/antony-and-cleopatra.ts, Project
 * Gutenberg #1534). Where the play is silent a person is drawn plainly, in
 * the dress of Rome or of Alexandria in about 30 BC: a tunic, a toga in
 * Rome, armour in the field, a long gown for the women. Where a mark is
 * invented only to tell two people apart, this says so. Nothing is taken from
 * a film, television or stage production.
 *
 * - ANTONY is the older man here: "this grizzled head" (3.13); "My very hairs
 *   do mutiny, for the white Reprove the brown" (3.11); "Though grey Do
 *   something mingle with our younger brown" (4.8); "the curled Antony"
 *   (5.2); and Enobarbus speaks of "Antonius' beard" (2.2). So the man's head
 *   with a short curled beard (HEAD_ANTONY), his hair in curls
 *   (ANTONY_HAIR), and both flecked with paper for the grey among the brown
 *   (GRIZZLE). "This Herculean Roman" (1.3): he is the biggest man in any
 *   panel, his arms a little thicker. In the field he wears the cuirass and a
 *   general's cloak; unarmed ("Unarm, Eros", 4.14), a belted tunic.
 * - CLEOPATRA: "a tawny front" (Philo, 1.1); "with Phœbus' amorous pinches
 *   black, And wrinkled deep in time" (her own words, 1.5). Every face in a
 *   linocut is cut in ink, hers too; the print cannot show the colour of
 *   anyone's skin, and a panel's alt text says so where it matters, leaving
 *   the colour to those words. The play does not describe her hair, her
 *   gown or her height. So she is drawn plainly: her hair long and loose
 *   down her back (CLEO_HAIR), a long gown, and a queen's mantle hanging from
 *   her shoulders behind her (QUEEN_MANTLE), which her women do not wear.
 *   She wears her crown only where the play gives it to her ("Bring our
 *   crown and all", "Put on my crown", 5.2): `crown: 'red'` prints it in the
 *   spot colour, `crown: 'paper'` cuts it in paper. It is a plain band with
 *   five points (CROWN), "the diadem" of 5.2, with nothing on it. With
 *   `dress: 'robe'` she wears the robe she calls for ("Give me my robe",
 *   5.2): the gown and mantle with broad bands of cut ornament at the hem,
 *   the front and the neck (ROBE_BANDS).
 * - CHARMIAN and IRAS, her women, are not described. Each is a woman in a
 *   long plain gown, a little shorter than the queen; Charmian's hair is
 *   bound in a knot at the nape (the Julius Caesar kit's PORTIA_HAIR) and
 *   Iras's is cut level at the jaw (IRAS_HAIR): both invented only to tell
 *   them apart, and from Cleopatra's long hair.
 * - CAESAR (Octavius) is young: "the scarce-bearded Caesar" (1.1), "the boy
 *   Caesar" (3.13), "the young Roman boy" (4.12). So a youth's head, his
 *   hair cropped and combed forward in the Roman way (ROMAN_HAIR), as the
 *   Julius Caesar kit draws the young Octavius at Philippi. His scarce beard
 *   is too fine to cut at panel size and is left to the words. In the field,
 *   the cuirass and a general's cloak, as Antony; in Rome, a toga.
 * - ENOBARBUS is not described. A soldier in the cuirass, no cloak, with a
 *   short dark beard (the Julius Caesar kit's HEAD_CASCA): invented only to
 *   tell him from the other Romans.
 * - DOLABELLA (5.1, 5.2) is not described: a Roman officer in the cuirass,
 *   bareheaded, cropped hair, no cloak and no beard.
 * - AGRIPPA and MAECENAS, Caesar's friends, are not described. Agrippa is a
 *   soldier in the cuirass, his hair cropped; Maecenas wears the toga, his
 *   hair worn longer and swept back to a lock at the nape (the Julius Caesar
 *   kit's DECIUS_LOCK): the dress and the lock invented to tell them apart.
 * - A SOLDIER or GUARD wears the cuirass and a crested helmet (HELMET), as at
 *   Philippi; `bare` takes the helmet off (DERCETUS, Antony's man, who
 *   yields himself to Caesar in 5.1).
 * - An ATTENDANT of the queen's household (Diomedes, Mardian, Alexas, a
 *   servant) wears a long plain robe, girt, and is bareheaded and
 *   clean-shaven. Nothing marks any of them as foreign, because the play
 *   draws nothing of the kind.
 *
 * Added for the panels of moments 11 to 15 (Act 3, Scene 7 to Act 4, Scene 3):
 * - CANIDIUS, Antony's lieutenant-general, who holds "Our nineteen legions
 *   ... by land, / And our twelve thousand horse" (3.7). Not described. The
 *   cuirass, a general's cloak and the soldier's crested helmet: the cloak
 *   and the helmet together, which nobody else wears, invented to mark the
 *   commander of the land army.
 * - SCARUS, a soldier of Antony's, is not described: the cuirass, bareheaded,
 *   cropped hair, clean-shaven, no cloak. His wounds in Act 4 are never drawn.
 * - EROS, Antony's servant, is not described: a youth's head, beardless, the
 *   hair cropped, in a belted tunic to the knee.
 * - THIDIAS, Caesar's envoy (3.13), is not described beyond Antony's scorn
 *   ("a fellow that will take rewards", "one that ties his points"). He
 *   comes from Caesar with Caesar's terms, so he wears the toga, cropped hair,
 *   clean-shaven, and stands out from the household in their tunics.
 * - Antony's SERVANTS, who take Thidias away (3.13), are `attendant` with
 *   `dress: 'tunic'`: men of the household in belted tunics, bareheaded.
 *
 * Added for the panels of moments 1 to 5 (Act 1, Scenes 1 to 5):
 * - PHILO and DEMETRIUS, Antony's officers who open the play, are not
 *   described. Roman soldiers, so the cuirass, bareheaded, the hair cropped,
 *   no cloak: Philo, who speaks Rome's verdict, on the man's head (a panel
 *   gives him `frown`), Demetrius on the youth's head, beardless. The heads
 *   are invented only to tell them apart.
 * - LEPIDUS (1.4) is not described in this play. He is the Julius Caesar
 *   kit's Lepidus, slight and balding (LEPIDUS_HAIR, CROWN_SHINE), in a
 *   toga, so that he is the same man: invented there only to tell him from
 *   Antony and Octavius.
 * - A MESSENGER from Rome (1.1, 1.2) or to Caesar (1.4) has come a long way:
 *   a youth's head, cropped hair, a belted tunic and the Much Ado kit's short
 *   cloak behind him; `bare` takes the cloak off. The "Eunuchs fanning her"
 *   of 1.1, and MARDIAN and ALEXAS in 1.5, are the `attendant` above, told
 *   apart in a panel by what each of them does.
 *
 * Added for the panels of moments 6 to 10 (Act 2, Scene 2 to Act 3, Scene 6):
 * - OCTAVIA. "Admired Octavia", of "beauty, wisdom, modesty" (2.2); "Her hair,
 *   what colour?" "Brown, madam" (3.3); not as tall as Cleopatra ("Is she as
 *   tall as me?" "She is not, madam", 3.3). A Roman matron, as the Julius
 *   Caesar kit draws Calpurnia: a long gown, and the palla drawn over her
 *   head (PALLA, its edge round the face cut in paper), which none of
 *   Cleopatra's women wears.
 * - THE SOOTHSAYER, who reads "In nature's infinite book of secrecy" (1.2),
 *   is not described. An old man in a long girt robe, his crown bald and his
 *   hair and full beard white (the Julius Caesar kit's OLD_FRINGE, and the
 *   Romeo and Juliet kit's FULL_BEARD and WHITE_BROW): the plain look of an
 *   old seer. Nothing marks him as Egyptian, because the play draws nothing
 *   of the kind.
 * - POMPEY (Sextus Pompeius) is not described. A commander at sea, in the
 *   cuirass and a general's cloak, clean-shaven, with a fringe of hair over
 *   the brow (the Julius Caesar kit's CINNA_FRINGE): the fringe invented only
 *   to tell him from Antony and Caesar at his own table.
 * - MENAS, one of "Menecrates and Menas, famous pirates" (1.4): "I have ever
 *   held my cap off to thy fortunes" (2.7). So a seaman's belted tunic, the
 *   felt cap the Julius Caesar kit cuts for its working men (CAP), and a short
 *   dark beard (HEAD_CASCA), which with the cap tells him from Enobarbus.
 *
 * HANDS. Every open hand is `hand`'s, four fingers and a thumb cut apart and
 * fanned 18 degrees, so it reads as an open hand at panel size and never as a
 * fist; a hand at rest is a small closed mitten; a hand round a rope, a staff
 * or a crown is `grip`, which only ever closes round something held. NO HAND
 * IS RAISED FLAT ON A STRAIGHT ARM: at panel size that reads as a salute,
 * and in Roman dress as the one salute no page of this site may show. An arm
 * that is raised is bent at the elbow, and its hand is open with the fingers
 * apart or holds something.
 */

const pt = (p: P) => `${n(p[0])} ${n(p[1])}`

// ── Heads and hair, in profile facing right, centred on (0, 0) ──────────────

/**
 * Antony's head: the man's head with a short curled beard from the ear round
 * the jaw, scalloped where it curls below the chin, and a moustache over the
 * lip. Ink on an ink head, so its curls and the line of the mouth are cut in
 * paper (BEARD_CURLS): a dark beard left uncut reads only as a longer chin.
 */
export const HEAD_ANTONY =
  'M-9 22C-10 16 -15 12 -16 3C-17 -10 -8 -20 3 -20C11 -20 16 -14 16 -8L16 -5L22.5 3.5L17 5.5L19 7.6L17.4 9.6Q20.6 11 19.8 14.2Q21.6 17.4 19 20Q19.4 23.8 15.6 24.2Q13.4 27.2 10 25.4Q7.4 26.8 5.8 24.2L6 22Z'
/** The line of the mouth, the beard's edge on the cheek, and its curls, in paper. */
export const BEARD_CURLS =
  gouge(13.2, 9.8, 17.4, 9.6, 0.6) + gouge(-1.6, 2.4, 3.6, 13.6, 0.75, -1.2)
export const BEARD_CURL_ARCS =
  'M4.6 11.6a2.3 2.3 0 1 1 3 2.4M9.4 16.4a2.3 2.3 0 1 1 3 2.4M14.4 13.6a2 2 0 1 1 2.8 2M5.6 18.8a2.2 2.2 0 1 1 2.8 2.4M13 20.8a2 2 0 1 1 2.6 2'

/**
 * Antony's hair: thick and curling over the crown from the brow to the nape,
 * in ink, with the curls cut in paper (the Julius Caesar kit's ANTONY_CURLS,
 * so it is the Antony of that play grown older). For HEAD_ANTONY.
 */
export const ANTONY_HAIR = (() => {
  // the scalloped mass, as the Julius Caesar kit cuts it
  const cx = 0.5
  const cy = -1.5
  const r = 19.4
  const a0 = 112
  const a1 = 304
  const bumps = 10
  const out = 5
  const at = (a: number, rad: number): P => [
    cx + rad * Math.cos((a * Math.PI) / 180),
    cy + rad * Math.sin((a * Math.PI) / 180),
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
  return d + 'M8.6 -18.4C13.6 -17.4 16.4 -13.4 15.4 -8.6L11.8 -11.2Z'
})()
/**
 * "The white Reprove the brown" (3.11): short paper flecks among the curls
 * and in the beard, for the grey in them. Stroke in PAPER, about 1.
 */
export const GRIZZLE =
  'M-12.6 -9.4l2 -1.4M-4.6 -16l2.2 -0.4M5.4 -18.6l2 0.8M-17.4 1.4l1.2 -2M-9 -3.4l1.8 -1M-15.4 9.8l1.2 -1.8' +
  'M10.6 23.2l1.6 -1.2M17.6 17.4l0.8 -1.8M7.6 14.4l1.4 -1'

/**
 * Cleopatra's hair: long and loose, from the brow over the crown and down her
 * back below the shoulder blades, a heavy mass that is how she is known when
 * she is not crowned. Ink, with strands cut in paper (CLEO_STRANDS). For
 * HEAD_WOMAN.
 */
export const CLEO_HAIR =
  'M13.4 -11.4C10 -21 -6 -23.4 -13.4 -17C-19.6 -11 -21 0 -20 10C-19 26 -22 44 -25 62Q-21 67.4 -15 65Q-11 66.6 -8.6 63C-8 48 -7 34 -7.6 22C-8 10 -6 -1 0 -6.6C4 -10 9 -11.6 13.4 -11.4Z'
export const CLEO_STRANDS =
  gouge(6, -16.4, -12.4, -6, 0.6, 2.4) +
  gouge(-14.4, -4, -16, 36, 0.7, 1.4) +
  gouge(-11, 16, -12.6, 54, 0.65, 1) +
  gouge(-18.6, 24, -21.4, 58, 0.6, 0.8)

/**
 * Cleopatra's crown, "the diadem" of 5.2: a band round the head at the brow
 * with five points rising above the crown of the head, and nothing on it. In
 * the head's frame of HEAD_WOMAN. CROWN_BAND is the top of the band, cut so
 * the points read as points on a band and not as a comb.
 */
export const CROWN =
  'M-14.6 -8.6L-16.4 -24.4L-10.2 -16.8L-5.4 -29.4L-0.4 -18.4L5 -30L9.4 -17.6L14.8 -25L14.6 -9.4C7 -12 -6.4 -11.8 -14.6 -8.6Z'
export const CROWN_BAND = 'M-14.2 -13.4C-6.4 -16 6.4 -16.2 14.2 -14.4'

/** Iras's hair, cut level at the jaw behind: invented to tell her from Charmian. For HEAD_WOMAN. */
export const IRAS_HAIR =
  'M14 -10.6C11 -20 0 -23 -8 -19.6C-15.4 -16.2 -18.6 -8 -18.2 1.6C-17.8 8.4 -17 13.4 -15 17.8L-9 17C-10.4 10.6 -10.4 3.8 -8.8 -1.8C-6.6 -8 -0.6 -11 5.6 -10.8C9 -10.6 11.4 -10 14 -10.6Z'
export const IRAS_STRANDS =
  gouge(9.4, -15.8, -11.4, -7.6, 0.55, 2) +
  gouge(-3.8, -17.6, -15.6, 3.8, 0.55, 1.7) +
  gouge(-12.6, -1.8, -14, 14.4, 0.5, 0.6)

// ── Garments, in the figure's frame (facing right, feet at y 0) ─────────────

/**
 * The queen's mantle: hung from the shoulders behind her and falling down her
 * back to the hem, fuller below. Drawn behind the gown; its folds in paper.
 */
export const QUEEN_MANTLE =
  'M3 -138C-10 -137 -20 -126 -24 -106C-28 -82 -32 -48 -40 -4L-18 -2C-16 -42 -12 -84 -4 -120C-2 -128 0 -134 3 -138Z'
export const QUEEN_MANTLE_CUTS =
  gouge(-12, -122, -30, -12, 1.7, 1.4) + gouge(-6, -112, -20, -10, 1.5, 0.8)

/** A woman's long gown, its girdle under the breast and two long folds, in paper. */
function womansGown(front: number, back: number): Part {
  return {
    d: gown([0, -132], [0, -94], 0, 1, { shoulder: 24, waistW: 17, front, back }),
  }
}
const GOWN_CUTS =
  gouge(-8, -112, 8.6, -111, 1, 0.6) +
  gouge(-6, -100, -18, -8, 1.7, 1) +
  gouge(6, -100, 16, -8, 1.7, -1)

/**
 * The robe Cleopatra calls for (5.2): her gown and mantle, with broad bands
 * of ornament cut in paper at the neck, down the front and round the hem, a
 * row of lozenges between two lines, so it reads as a queen's robe and not
 * her everyday gown.
 */
export const ROBE_BANDS = (() => {
  let d =
    gouge(-24, -16, 22, -16, 1.1, 0) +
    gouge(-26, -5, 24, -5, 1.1, 0) +
    gouge(-7, -133, 9, -130, 1.3, 1.8) +
    gouge(10.6, -110, 18, -18, 1, -0.6)
  // the lozenges between the hem's two lines
  for (let x = -21; x < 21; x += 6.4)
    d += `M${n(x)} -10.5L${n(x + 2.4)} -13.6L${n(x + 4.8)} -10.5L${n(x + 2.4)} -7.4Z`
  return d
})()

// ── The builder ──────────────────────────────────────────────────────────────

export type Look =
  | 'antony'
  | 'cleopatra'
  | 'charmian'
  | 'iras'
  | 'caesar'
  | 'enobarbus'
  | 'dolabella'
  | 'agrippa'
  | 'maecenas'
  | 'soldier'
  | 'attendant'
  | 'canidius'
  | 'scarus'
  | 'eros'
  | 'thidias'
  | 'philo'
  | 'demetrius'
  | 'lepidus'
  | 'messenger'
  | 'octavia'
  | 'soothsayer'
  | 'pompey'
  | 'menas'

/** What a person wears: armour in the field, a tunic unarmed, a toga in Rome, a robe, a gown. */
export type Dress = 'armour' | 'tunic' | 'toga' | 'robe' | 'gown'

const DRESS: Record<Look, Dress> = {
  antony: 'armour',
  cleopatra: 'gown',
  charmian: 'gown',
  iras: 'gown',
  caesar: 'armour',
  enobarbus: 'armour',
  dolabella: 'armour',
  agrippa: 'armour',
  maecenas: 'toga',
  soldier: 'armour',
  attendant: 'robe',
  canidius: 'armour',
  scarus: 'armour',
  eros: 'tunic',
  thidias: 'toga',
  philo: 'armour',
  demetrius: 'armour',
  lepidus: 'toga',
  messenger: 'tunic',
  octavia: 'gown',
  soothsayer: 'robe',
  pompey: 'armour',
  menas: 'tunic',
}

/** How big each person is, against a man of 1. Antony is "this Herculean Roman" (1.3). */
const SIZE: Record<Look, number> = {
  antony: 1.04,
  cleopatra: 0.96,
  charmian: 0.92,
  iras: 0.9,
  caesar: 0.97,
  enobarbus: 1,
  dolabella: 1,
  agrippa: 1.01,
  maecenas: 0.99,
  soldier: 1,
  attendant: 0.98,
  canidius: 1,
  scarus: 1,
  eros: 0.97,
  thidias: 0.99,
  philo: 1,
  demetrius: 0.98,
  lepidus: 0.98,
  messenger: 0.97,
  octavia: 0.9,
  soothsayer: 0.94,
  pompey: 1,
  menas: 0.99,
}

const WOMEN: Look[] = ['cleopatra', 'charmian', 'iras', 'octavia']
/** Who wears a general's cloak over the cuirass. */
const GENERALS: Look[] = ['antony', 'caesar', 'canidius', 'pompey']
/** Who wears the crested helmet, unless the pose is `bare`. */
const HELMETED: Look[] = ['soldier', 'canidius']

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
  /** Overrides the look's usual dress. Cleopatra's 'robe' is the robe of 5.2. */
  dress?: Dress
  /** The head's centre and its tilt in degrees (forward is positive). */
  head?: { at?: P; rot?: number }
  far?: ArmPose
  near?: ArmPose
  /** Hip, knee and ankle of each leg, for the tunic and the cuirass. */
  legs?: { far: P[]; near: P[] }
  /** Where the feet stand under a gown, toga or robe: x of the far foot and the near foot. */
  feet?: [number, number]
  /** The hem's reach ahead of the body and behind it, wider in a stride. */
  hem?: { front?: number; back?: number }
  eye?: 'open' | 'down' | 'shut' | 'none'
  mouth?: 'open'
  frown?: boolean
  /** A red flush on the cheek (FLUSH). Never on the mouth or chin. */
  flush?: boolean
  /** No helmet (a soldier), no cloak (a general). */
  bare?: boolean
  /** Cleopatra's crown, printed in the spot colour or cut in paper. */
  crown?: 'red' | 'paper'
}

/** Where the near arm hangs at rest, if a pose gives none. */
export const REST: ArmPose = {
  pts: [
    [5, -128],
    [9, -104],
    [11, -80],
  ],
  hand: 'mitt',
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

function headOf(look: Look) {
  if (look === 'antony') return HEAD_ANTONY
  if (look === 'caesar' || look === 'eros' || look === 'demetrius' || look === 'messenger')
    return HEAD_YOUTH
  if (look === 'enobarbus' || look === 'menas') return HEAD_CASCA
  if (WOMEN.includes(look)) return HEAD_WOMAN
  return HEAD_MAN
}

function build(p: Pose) {
  const look = p.look
  const woman = WOMEN.includes(look)
  const dress = p.dress ?? DRESS[look]
  const h = p.head ?? {}
  const hAt: P = h.at ?? (woman ? [3, -154] : [3, -160])
  const headT = `translate(${n(hAt[0])} ${n(hAt[1])}) rotate(${h.rot ?? 0})`
  const armW = woman ? 7.6 : look === 'antony' ? 9.2 : 8.6
  const parts: Piece[] = []
  let cuts = ''

  const handOf = (a: ArmPose, sep?: number): Part[] => {
    const kind = a.hand ?? 'mitt'
    const wrist = a.pts[a.pts.length - 1]
    const angle = a.deg ?? endAngle(a.pts)
    if (kind === 'none') return []
    if (kind === 'mitt') return [{ ...mitt(wrist, angle, woman ? 0.85 : 1), sep }]
    if (kind === 'grip') return [{ ...gripHand(wrist, angle, woman ? 0.85 : 1), sep }]
    if (kind === 'point')
      return pointingHand(wrist, angle, woman ? 0.9 : 1, a.thumb ?? 1).map((q) => ({ ...q, sep }))
    if (kind === 'finger') return warningHand(wrist, angle, { size: woman ? 13 : 15, sep })
    // Fanned 18 degrees: at 14 the print's rough edge closed the gaps between
    // the fingers at panel size, and open hands read as fists (the Merchant
    // kit, reviewed 27 September 2026).
    return hand(wrist, angle, {
      size: a.size ?? (woman ? 13.5 : 15),
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

  const front = p.hem?.front
  const back = p.hem?.back
  const legsOf = (legs: { far: P[]; near: P[] }, which: 'far' | 'near'): Part[] => {
    const pts = legs[which]
    const ankle = pts[pts.length - 1]
    cuts += sandalCuts([ankle[0], 0], 1)
    return [{ d: limb(pts), w: 9 }, sandal([ankle[0], 0], 1)]
  }
  const feetUnder = (fallback: [number, number]) => {
    const [fx, nx] = p.feet ?? fallback
    parts.push(sandal([fx, 0], 1))
    cuts += sandalCuts([fx, 0], 1)
    return nx
  }

  if (dress === 'gown' || (woman && dress === 'robe')) {
    const nx = feetUnder([-4, 10])
    if (look === 'cleopatra') {
      parts.push({ d: QUEEN_MANTLE })
      cuts += QUEEN_MANTLE_CUTS
    }
    parts.push(womansGown(front ?? 26, back ?? 32))
    parts.push(sandal([nx, 0], 1))
    cuts += sandalCuts([nx, 0], 1) + GOWN_CUTS
    if (dress === 'robe') cuts += ROBE_BANDS
  } else if (dress === 'toga') {
    const f = front ?? 24
    const b = back ?? 30
    // Lepidus is slight, as the Julius Caesar kit cuts him
    const slim = look === 'lepidus' ? 0.9 : 1
    const nx = feetUnder([-8, 8])
    parts.push({ d: toga(f, b, slim) })
    parts.push(sandal([nx, 0], 1))
    cuts += sandalCuts([nx, 0], 1) + togaCuts(f, b, slim)
  } else if (dress === 'robe') {
    const f = front ?? 20
    const b = back ?? 26
    const nx = feetUnder([-6, 8])
    parts.push({ d: robe(f, b) })
    parts.push(sandal([nx, 0], 1))
    cuts += sandalCuts([nx, 0], 1) + robeCuts(f, b, true)
  } else if (dress === 'armour') {
    // a general's cloak behind, then bare legs, the skirt of strips and the
    // cuirass over it
    if (GENERALS.includes(look) && !p.bare) {
      parts.push({ d: HOUSE_MANTLE })
      cuts += HOUSE_MANTLE_CUTS
    }
    const legs = p.legs ?? MEN_LEGS
    parts.push(...legsOf(legs, 'far'))
    parts.push({ d: pteruges() })
    parts.push({ d: cuirass() })
    parts.push(...legsOf(legs, 'near'))
    cuts += armourCuts()
  } else {
    // a belted tunic to the knee: bare legs and sandals below the hem, and
    // for a messenger on the road a short cloak behind
    if (look === 'messenger' && !p.bare) {
      parts.push({ d: cloak(4) })
      cuts += cloakCuts(4)
    }
    const legs = p.legs ?? MEN_LEGS
    parts.push(...legsOf(legs, 'far'))
    parts.push({
      d: limb([
        [0, -138],
        [0, -86],
      ]),
      w: 22,
    })
    parts.push({ d: tunic(-46) })
    parts.push(...legsOf(legs, 'near'))
    cuts += tunicCuts(-46)
  }

  // The head, and what is behind it or on it.
  if (look === 'antony') parts.push({ d: ANTONY_HAIR, t: headT })
  if (look === 'cleopatra') parts.push({ d: CLEO_HAIR, t: headT })
  if (look === 'charmian') parts.push({ d: PORTIA_HAIR, t: headT })
  if (look === 'iras') parts.push({ d: IRAS_HAIR, t: headT })
  if (look === 'maecenas') parts.push({ d: DECIUS_LOCK, t: headT })
  if (look === 'octavia' && !p.bare) parts.push({ d: PALLA, t: headT })
  parts.push({ d: headOf(look), t: headT })
  if (look === 'pompey') parts.push({ d: CINNA_FRINGE, t: headT })
  if (look === 'menas' && !p.bare) parts.push({ d: CAP, t: headT })
  if (HELMETED.includes(look) && !p.bare)
    parts.push({ d: HELMET, t: headT }, { d: HELMET_CREST, t: headT })
  if (look === 'cleopatra' && p.crown) parts.push({ d: CROWN, t: headT })

  parts.push(armOf(p.near ?? REST, true))
  return { parts, cuts, headT }
}

/**
 * One of the people of the play, cut from the block: placed with its feet at
 * `at`, scaled by `scale` (on top of the person's own size), and turned to
 * face left with `flip`. With `stone`, cut in paper with ink folds and
 * features: a vision, as the colossal Antony of Cleopatra's dream (5.2).
 * `children` are drawn last, in the figure's own frame (a rope, a crown held
 * in the hands).
 */
export function Person({
  pose,
  at,
  scale = 1,
  flip = false,
  stone = false,
  children,
}: {
  pose: Pose
  at: P
  scale?: number
  flip?: boolean
  stone?: boolean
  children?: ReactNode
}) {
  const { parts, cuts, headT } = build(pose)
  const look = pose.look
  const s = scale * SIZE[look]
  const eye = pose.eye ?? 'open'
  // The colour a feature is cut in: paper on an ink figure, ink on a stone one.
  const cut = stone ? INK : PAPER
  const transform = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`
  const cropped =
    look === 'caesar' ||
    look === 'enobarbus' ||
    look === 'dolabella' ||
    look === 'agrippa' ||
    look === 'attendant' ||
    look === 'scarus' ||
    look === 'eros' ||
    look === 'thidias' ||
    look === 'philo' ||
    look === 'demetrius' ||
    look === 'messenger' ||
    (look === 'menas' && pose.bare) ||
    (HELMETED.includes(look) && pose.bare)
  return (
    <CutFigure
      parts={parts}
      cuts={cuts || undefined}
      transform={transform}
      tone={stone ? 'paper' : 'ink'}
    >
      <g transform={headT}>
        {cropped && (
          <path d={ROMAN_HAIR} fill="none" stroke={cut} strokeWidth={1.2} strokeLinecap="round" />
        )}
        {(look === 'enobarbus' || look === 'menas') && <path d={CASCA_BEARD_CUTS} fill={cut} />}
        {look === 'menas' && !pose.bare && <path d={CAP_CUT} fill={cut} />}
        {look === 'pompey' && (
          <path d={CINNA_HAIR} fill="none" stroke={cut} strokeWidth={1.2} strokeLinecap="round" />
        )}
        {look === 'octavia' && !pose.bare && (
          <path d={PALLA_EDGE} fill="none" stroke={cut} strokeWidth={1.8} strokeLinecap="round" />
        )}
        {look === 'soothsayer' && (
          <>
            <path d={OLD_FRINGE} fill={PAPER} stroke={INK} strokeWidth={1} />
            <path d={OLD_FRINGE_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
            <path d={CROWN_SHINE + WHITE_BROW} fill={cut} />
            <path d={FULL_BEARD} fill={PAPER} stroke={INK} strokeWidth={0.9} />
            <path d={FULL_BEARD_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
          </>
        )}
        {look === 'maecenas' && (
          <path d={DECIUS_HAIR} fill="none" stroke={cut} strokeWidth={1.2} strokeLinecap="round" />
        )}
        {look === 'lepidus' && (
          <>
            <path
              d={LEPIDUS_HAIR}
              fill="none"
              stroke={cut}
              strokeWidth={1.2}
              strokeLinecap="round"
            />
            <path d={CROWN_SHINE} fill={cut} />
          </>
        )}
        {look === 'antony' && (
          <>
            <path
              d={ANTONY_CURLS + BEARD_CURL_ARCS}
              fill="none"
              stroke={cut}
              strokeWidth={1.1}
              strokeLinecap="round"
            />
            <path d={BEARD_CURLS} fill={cut} />
            <path d={GRIZZLE} fill="none" stroke={cut} strokeWidth={1} strokeLinecap="round" />
          </>
        )}
        {look === 'cleopatra' && <path d={CLEO_STRANDS} fill={cut} />}
        {look === 'charmian' && <path d={PORTIA_STRANDS} fill={cut} />}
        {look === 'iras' && <path d={IRAS_STRANDS} fill={cut} />}
        {HELMETED.includes(look) && !pose.bare && <path d={HELMET_CUTS} fill={cut} />}
        {look === 'cleopatra' && pose.crown && (
          <>
            <path
              d={CROWN}
              fill={pose.crown === 'red' && !stone ? RED : PAPER}
              stroke={INK}
              strokeWidth={0.8}
              strokeLinejoin="round"
            />
            <path
              d={CROWN_BAND}
              fill="none"
              stroke={pose.crown === 'red' && !stone ? PAPER : INK}
              strokeWidth={1.1}
              strokeLinecap="round"
            />
          </>
        )}
        {eye === 'open' && <path d={EYE} fill={cut} />}
        {(eye === 'down' || eye === 'shut') && <path d={EYE_DOWN} fill={cut} />}
        {pose.frown && <path d={FROWN} fill={cut} />}
        {pose.mouth === 'open' && <path d={OPEN_MOUTH} fill={cut} />}
        {pose.flush && !stone && (
          <path d={FLUSH} fill="none" stroke={RED} strokeWidth={1.7} strokeLinecap="round" />
        )}
      </g>
      {children}
    </CutFigure>
  )
}

/** Where the kit's standing figure is cut for `UpperBody`: its hip, this far above its feet. */
export const HIP_CUT = 86

/**
 * The kit's figure above the hip, for a person leaning out of a window, seated
 * or lifted: the very same `Person`, clipped at the hip and turned about it by
 * `lean` (forward is positive). Its frame is the hip: the hip at (0, 0), the
 * figure's own units, facing right. `uid` and `id` make the clip's id unique.
 */
export function UpperBody({
  uid,
  id,
  pose,
  lean = 0,
}: {
  uid: string
  id: string
  pose: Pose
  lean?: number
}) {
  const clip = `${uid}-upper-${id}`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <rect x={-240} y={-400} width={480} height={402} />
        </clipPath>
      </defs>
      <g transform={lean ? `rotate(${n(lean)})` : undefined}>
        <g clipPath={`url(#${clip})`}>
          <Person pose={pose} at={[0, HIP_CUT]} scale={1 / SIZE[pose.look]} />
        </g>
      </g>
    </>
  )
}

/** A person's own size against a man of 1, for placing an `UpperBody` beside a standing figure. */
export const sizeOf = (look: Look) => SIZE[look]

// ── Posing: putting a hand where the scene needs it ──────────────────────────

/**
 * Shoulder, elbow and wrist for an arm of two bones `len` long (the kit's arms
 * are 24 and 24) reaching from `shoulder` to `target`, in one frame. `side`
 * bends the elbow to one side of the line from shoulder to target: 1 is
 * clockwise of it as drawn facing right (below a level reach), -1 the other
 * side. A target out of reach is reached towards with the arm all but
 * straight, so check a straight arm is never a raised flat hand.
 */
export function reach(shoulder: P, target: P, len = 24, side: 1 | -1 = 1): P[] {
  const dx = target[0] - shoulder[0]
  const dy = target[1] - shoulder[1]
  const a = Math.atan2(dy, dx)
  const d = Math.min(Math.hypot(dx, dy), len * 1.96)
  const wrist: P = [shoulder[0] + Math.cos(a) * d, shoulder[1] + Math.sin(a) * d]
  const h = Math.sqrt(Math.max(0, len * len - (d / 2) ** 2))
  const mid: P = [(shoulder[0] + wrist[0]) / 2, (shoulder[1] + wrist[1]) / 2]
  return [shoulder, [mid[0] - Math.sin(a) * h * side, mid[1] + Math.cos(a) * h * side], wrist]
}

/**
 * A point in the panel, in the frame of a `Person` placed at `at` with total
 * scale `s` (the `scale` given times `sizeOf(look)`), turned with `flip`: so a
 * pose's hand can be put on a point of the panel with `reach`.
 */
export function toFigure(world: P, at: P, s: number, flip = false): P {
  return [(world[0] - at[0]) / (flip ? -s : s), (world[1] - at[1]) / s]
}

/**
 * A point in the panel, in the hip frame of an `UpperBody` drawn inside
 * translate(hip) scale(flip ? -s : s, s) with `lean`: the frame its pose's
 * arms are drawn in, less HIP_CUT on y. For a person leaning from a window,
 * seated, or lifted.
 */
export function toHip(world: P, f: { hip: P; s: number; lean: number; flip?: boolean }): P {
  const x = (world[0] - f.hip[0]) / (f.flip ? -f.s : f.s)
  const y = (world[1] - f.hip[1]) / f.s
  const a = (-f.lean * Math.PI) / 180
  return [x * Math.cos(a) - y * Math.sin(a), x * Math.sin(a) + y * Math.cos(a)]
}
