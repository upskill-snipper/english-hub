import type { CSSProperties, ReactNode } from 'react'

import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, n, ribbon, rng } from '@/components/comics/linocut/carve'

import { hand, limb, type P } from '../../romeo-and-juliet/panels/verona-kit'
import { EYE, EYE_DOWN, HEAD_MAN, pointingHand } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { endAngle, mitt } from '../../much-ado-about-nothing/panels/people'
import { EAR, FROWN, gripHand } from '../../the-tempest/panels/people'
import { Cut, type Part, type Piece, type Tone } from '../../the-great-gatsby/panels/people'
import { HAIR_LINES, MAN_HAIR, PALE_STRANDS } from '../../the-great-gatsby/panels/people'

export { Cut, hand, limb, type P, type Part, type Piece, type Tone }

/**
 * THE PEOPLE OF GREAT EXPECTATIONS: one figure kit for every panel of the
 * novel, so that a student meets the same boy, the same convict, the same
 * blacksmith and the same bride from the churchyard to the last chapter. Draw
 * every recurring person with `Person` (or, for a pose it cannot make, with
 * the heads, hair and pieces below), never with a new outline. A change here
 * changes every panel that uses it: preview them all before changing one.
 * Cut first for the panels of moments 1 to 5 (Chapters 1 to 16).
 *
 * ADDING SOMEONE. A person this file does not have yet (Jaggers, Herbert,
 * Wemmick, Drummle, Compeyson, Pip grown up, Estella grown up, Magwitch at
 * sixty) is added HERE, by the first artist who needs them, as a `Look` with
 * its own entry in SIZE, BUILD and LOOK, and its head, hair and features in
 * the frame below, from the held text's own words, quoted in this docblock.
 * Then the next artist finds them. Keep the existing looks as they are.
 *
 * The cutting tools are the site's own, re-used rather than copied, so one
 * hand cuts every text: `Cut` (a figure whose parts each carry a tone, edged
 * in the colour they are not) from the Gatsby kit, the open hand and the limb
 * from the Romeo and Juliet kit, its pointing hand, eye and man's head, the
 * hand at rest from Much Ado and the hand closed round something, the ear
 * and the frown from The Tempest. A figure is cut as the reference panel cuts
 * Fred (src/data/comics/a-christmas-carol/counting-house.tsx): a halo in the
 * edge colour round every part, so it reads as one shape with a single carved
 * outline, then the parts, then the cuts of the folds and features.
 *
 * `Person` builds a figure from a pose in its own frame: facing right, feet at
 * (0, 0). A man is about 182 units tall, the neck at (0, -138), the hip at
 * (0, -70), the head centred on (3, -160). Children are drawn in frames of
 * their own (FRAMES), not shrunk men: a child's head is larger for its body.
 * Place a figure with `at`, `scale` and `flip` (to face left). Arms run
 * shoulder, elbow, wrist; legs hip, knee, ankle. The near arm is cut as a
 * second figure over the first, so it is always lifted off the body by its
 * own paper edge.
 *
 * ── THIS NOVEL'S OWN RULES, which every panel keeps ────────────────────────
 * - Nobody is drawn from a film, a television series or a stage production:
 *   not any adaptation's costumes, faces, sets or casting.
 * - PIP IS A CHILD in the first stage (Chapters 1 to 19), and is never shown
 *   in danger at the moment of harm: never seized, held, tilted or turned
 *   upside down, never with a knife or a threat near him. Mrs Joe's "Tickler"
 *   is never shown in use. The attack on Mrs Joe, Miss Havisham's dress on
 *   fire, Orlick's ambush, the struggle on the river and Magwitch's death are
 *   never shown (see ../index.ts for what may be shown instead).
 * - Pip's waking vision in the brewery (Chapter 8) of a figure hanging from a
 *   beam is never drawn, quoted or described.
 * - RED on a mouth or a chin reads as blood at a glance, and at phone width a
 *   small red mark near a face, a hand, a blade, water or a leg-iron reads as
 *   blood too. A flush goes on the cheekbone (FLUSH), never the mouth, and only
 *   where the text gives one: Mrs Joe's "prevailing redness of skin".
 *
 * ── WHAT THE NOVEL SAYS OF THEM, and so what is drawn ──────────────────────
 * (The held edition, src/data/full-texts/great-expectations.ts.) The first
 * stage is set in Pip's childhood, early in the century: where the text is
 * silent a person is drawn plainly in the dress of about 1815 to 1825, a man
 * in a coat cut away at the front with tails behind, a woman in a gown with
 * the waist high under the bust and the skirt falling straight.
 *
 * - PIP ('pip'). "I was at that time undersized, for my years, and not
 *   strong"; the convict: "what fat cheeks you ha' got" (Chapter 1); "I
 *   twisted the only button on my waistcoat" (Chapter 2); Estella: "what
 *   coarse hands he has! And what thick boots!" (Chapter 8). So the child
 *   (`age: 'child'`, Chapters 1 to 7) is small even for a child, with a round
 *   head and a full cheek (HEAD_PIP), a short jacket, a waistcoat with one
 *   paper button, trousers and thick boots. His hair is not described, so it
 *   is plain, dark and a little rough ("rumple my hair the wrong way",
 *   Chapter 12). `age: 'boy'` is the same boy a year or two on (Chapters 8 to
 *   13); `age: 'youth'` is the apprentice (Chapters 14 to 19), in the forge
 *   in his shirt and a leather apron like Joe's (`dress: 'forge'`).
 * - JOE ('joe'). "Joe was a fair man, with curls of flaxen hair on each side
 *   of his smooth face, and with eyes of such a very undecided blue"; "a sort
 *   of Hercules in strength" (Chapter 2); "feeling his right-side flaxen
 *   curls and whisker" (Chapter 2). So he is the broadest man in any panel,
 *   clean-shaven, his fair hair and the flaxen curls in front of his ear cut
 *   in PAPER (JOE_HAIR, JOE_LOCK). His blue eyes are left to the words. At
 *   work he has "his coat and waistcoat and cravat off, and his leather apron
 *   on" (Chapter 5): `dress: 'forge'`, shirt sleeves in paper and the apron
 *   in ink. Otherwise his coat (`dress: 'coat'`).
 * - MRS JOE ('mrsjoe'). "with black hair and eyes, had such a prevailing
 *   redness of skin"; "She was tall and bony, and almost always wore a coarse
 *   apron, fastened over her figure behind with two loops, and having a
 *   square impregnable bib in front, that was stuck full of pins and needles"
 *   (Chapter 2); she "threw her cap off" (Chapter 15). So she is a tall, thin
 *   woman with a sharp nose and chin (HEAD_MRSJOE), black hair under a cap,
 *   the spot colour on her cheekbone (FLUSH), and a paper apron over a dark
 *   gown with a square bib pricked with ink pins (`apron`, on by default).
 * - THE CONVICT, MAGWITCH ('magwitch'). "A fearful man, all in coarse grey,
 *   with a great iron on his leg. A man with no hat, and with broken shoes,
 *   and with an old rag tied round his head" (Chapter 1); "his ragged rough
 *   sleeve" (Chapter 3). So he is a big, rough man (HEAD_MAGWITCH, a heavy
 *   brow and a deep-set eye) with a pale rag knotted round his head (RAG),
 *   his coarse grey printed as ink cut through with close hatching
 *   (`dress: 'grey'`), and, until he files it off, a leg-iron (`iron`). When
 *   he returns, about sixty (Chapters 39 onwards), the artist of that panel
 *   adds him as a look of his own.
 * - MISS HAVISHAM ('havisham'). "She was dressed in rich materials—satins,
 *   and lace, and silks—all of white. Her shoes were white. And she had a
 *   long white veil dependent from her hair, and she had bridal flowers in her
 *   hair, but her hair was white"; "she had but one shoe on"; "the figure
 *   upon which it now hung loose, had shrunk to skin and bone"; "no brightness
 *   left but the brightness of her sunken eyes"; "Her chest had dropped, so
 *   that she stooped" (Chapter 8); "a crutch-headed stick on which she
 *   leaned" (Chapter 11). So she is the one figure cut almost all in PAPER,
 *   edged in ink: a gaunt face (HEAD_HAVISHAM) with a hollow cheek and a
 *   sunken eye that keeps a paper glint, white hair, the veil and the flowers,
 *   and the long white dress hanging loose on a thin frame. The yellow of
 *   age is left to the words.
 * - ESTELLA as a girl ('estella', `age: 'girl'`). "very pretty and seemed very
 *   proud"; "she was of about my own age"; "her fair young bosom and ... her
 *   pretty brown hair" (Chapter 8); "held her pretty brown hair spread out in
 *   her two hands" (Chapter 8). So she is Pip's height, her face cut in PAPER
 *   (fair), her chin a little raised, and her long dark hair falls down her
 *   back; brown is left to the words. Her dress is not described: a pale
 *   gown of the period, the dress of a girl of a rich house.
 * - BIDDY ('biddy'). As a girl "her hair always wanted brushing, her hands
 *   always wanted washing, and her shoes always wanted mending and pulling up
 *   at heel" (Chapter 7); when she comes to the forge she is in mourning ("I
 *   remember her being newly out of mourning", Chapter 17), so in Chapter 16
 *   she is in black, her dark hair in a knot with strands escaping. Then "her
 *   hair grew bright and neat" (Chapter 17), and on her wedding day Pip finds
 *   her "smart" (Chapter 58): `neat` drops the escaping strands, as her
 *   portrait does.
 * - ORLICK ('orlick'). "a broad-shouldered loose-limbed swarthy fellow of
 *   great strength, never in a hurry, and always slouching"; "He always
 *   slouched, locomotively, with his eyes on the ground"; "about
 *   five-and-twenty" (Chapter 15); "came slouching out, with a curious loose
 *   vagabond bend in the knees" (Chapter 16). So he is as broad as Joe, his
 *   head carried low and forward on a stooped back, his eyes down, a heavy jaw
 *   and a low brow (HEAD_ORLICK), dark rough hair, his knees bent; at the
 *   forge he wears a leather apron like Joe's.
 * - SOLDIERS ('soldier'). "a file of soldiers ... their loaded muskets"; "the
 *   sergeant ... with his handcuffs" (Chapter 5); "their red coats" (Chapter
 *   3). So a coat cut short in front with short tails, two white cross-belts
 *   in paper, and a tall peaked shako (SHAKO). Their red coats are printed in
 *   ink: a red coat beside a man in irons, in a scene of a fight, reads as
 *   blood at panel size. The red is left to the words.
 * - PIP GROWN UP ('pip', `age: 'man'`, Chapters 20 onwards). Dickens hardly
 *   describes his grown self, but the convict admires his "linen; fine and
 *   beautiful! Look at your clothes; better ain't to be got!" (Chapter 39). So
 *   he is a man of the man's frame with the apprentice's head (HEAD_PIP_YOUTH)
 *   and the same dark, rough hair, dressed by default as a gentleman: a dark
 *   coat with tails and white linen at the throat (`dress: 'coat'`).
 * - MAGWITCH AT SIXTY ('magwitch60', Chapters 39 onwards). "substantially
 *   dressed, but roughly; like a voyager by sea. That he had long iron-grey
 *   hair. That his age was about sixty. That he was a muscular man, strong on
 *   his legs, and that he was browned and hardened by exposure to weather";
 *   "his head was furrowed and bald, and that the long iron-grey hair grew
 *   only on its sides"; "his large brown veinous hands"; "the handkerchief
 *   from his neck" (Chapter 39). So he keeps the convict's head and heavy brow
 *   (HEAD_MAGWITCH, GLARE_BROW) with the rag gone: a bald crown with a shine
 *   and furrows cut on it (SIXTY_SHINE, SIXTY_FURROWS), long grey hair round
 *   the sides of the head hanging to his collar (SIXTY_HAIR, locks of PAPER
 *   with the ink between them), a neckerchief knotted at his throat, and a seaman's short jacket (`dress: 'jacket'`). His eye is open
 *   by default, not the convict's glare. From Chapter 40 "he wore his grizzled
 *   hair cut short" (`cropped`), in a dress "more like a prosperous farmer's"
 *   (`dress: 'coat'`). The brown of his skin is the ink of every man's face
 *   here, and left to the words.
 * - MR JAGGERS ('jaggers', added for moment 6, Chapter 18). "He was a burly
 *   man of an exceedingly dark complexion, with an exceedingly large head and
 *   a corresponding large hand"; "He was prematurely bald on the top of his
 *   head, and had bushy black eyebrows that wouldn't lie down, but stood up
 *   bristling. His eyes were set very deep in his head, and were disagreeably
 *   sharp and suspicious. He had a large watch-chain, and strong black dots
 *   where his beard and whiskers would have been if he had let them" (Chapter
 *   11); he "bit the side of a great forefinger" and "threw his forefinger"
 *   (Chapter 18). So he is burly, and his head is bigger than any other man's
 *   (HEAD_JAGGERS): a bald dome with a cut of light across it (JAGGERS_SHINE)
 *   over dark hair at the back and sides (JAGGERS_FRINGE), a heavy brow
 *   overhanging a deep-set eye, brows that stand up in bristles
 *   (JAGGERS_BRISTLES) and a hard, straight mouth. His hands are cut larger
 *   than other men's, and a heavy watch-chain crosses his waistcoat in paper.
 *   The black dots of his beard cannot show on a face printed in ink, and are
 *   left to the words, as is his dark complexion, which is the ink every man's
 *   face here is printed in. His clothes are not described: a gentleman's dark
 *   coat of the period.
 * - ESTELLA GROWN UP ('estella', `age: 'woman'`, added for moment 10, Chapter
 *   38). "an elegant lady"; "so much more beautiful, so much more womanly";
 *   "Her handsome dress had trailed upon the ground" (Chapter 29); "Her
 *   graceful figure and her beautiful face expressed a self-possessed
 *   indifference" (Chapter 38). So she has the woman's frame with the girl's
 *   fair face and proud eye, and her dark hair is dressed up at the back of her
 *   head (ESTELLA_HAIR_UP), as a lady's is: Miss Havisham plays "with
 *   Estella's hair" and puts jewels "into Estella's hair" (Chapter 29). Her
 *   gown is pale by default, as the girl's is.
 * - HERBERT POCKET ('herbert', added for moment 17, Chapter 54). "He was
 *   still a pale young gentleman"; "He had not a handsome face, but it was
 *   better than handsome: being extremely amiable and cheerful. His figure
 *   was a little ungainly ... but it looked as if it would always be light
 *   and young" (Chapter 22). So his face is the one man's face cut in PAPER,
 *   edged in ink, under short light hair: "a pale young gentleman
 *   with red eyelids and light hair" (Chapter 11), so MAN_HAIR from the Gatsby
 *   kit is cut in PAPER, lifted off the face by an ink edge, with its
 *   PALE_STRANDS in ink. (It was first cut dark; the text makes it light,
 *   corrected for moment 12 on 10 October 2026.) His red eyelids are left to
 *   the words. He is on a lighter frame than a man's, in a plain dark coat.
 * - STARTOP ('startop', added for moment 17). "Startop, younger in years and
 *   appearance" (Chapter 23); "He had a woman's delicacy of feature"
 *   (Chapter 25). So he is the slightest man in any panel, with the plain
 *   head and dark hair cut in paper lines (the Gatsby kit's HAIR_LINES).
 * - Anyone else ('man', 'woman'): plain heads, plain dress of the period.
 *
 * SEEDS: 8101 (the hatching of the convicts' coarse grey).
 */

// ── FRAMES: where the joints of each kind of body sit ───────────────────────

type Frame = {
  neck: P
  hip: P
  /** The head's centre, and its scale against a man's. */
  head: P
  hs: number
  /** Shoulders across, and the widths of an arm and a leg. */
  width: number
  arm: number
  leg: number
}

const FRAMES = {
  man: { neck: [0, -138], hip: [0, -70], head: [3, -160], hs: 1, width: 30, arm: 8.6, leg: 10 },
  woman: {
    neck: [0, -133],
    hip: [0, -78],
    head: [2.5, -154],
    hs: 0.94,
    width: 23,
    arm: 6.2,
    leg: 6.6,
  },
  /** Pip at about seven, "undersized, for my years": two thirds of a man. */
  child: { neck: [0, -84], hip: [0, -46], head: [2.2, -101], hs: 0.84, width: 20, arm: 6, leg: 7 },
  /** Pip a year or two on, at Satis House. */
  boy: {
    neck: [0, -95],
    hip: [0, -52],
    head: [2.4, -113],
    hs: 0.87,
    width: 22,
    arm: 6.6,
    leg: 7.6,
  },
  /** Estella at Pip's age. */
  girl: {
    neck: [0, -95],
    hip: [0, -58],
    head: [2.2, -112],
    hs: 0.84,
    width: 19,
    arm: 5.4,
    leg: 5.8,
  },
  /** Pip the apprentice, nearly grown. */
  youth: {
    neck: [0, -126],
    hip: [0, -65],
    head: [2.8, -147],
    hs: 0.95,
    width: 27,
    arm: 7.8,
    leg: 9,
  },
} satisfies Record<string, Frame>

type FrameName = keyof typeof FRAMES

// ── HEADS, each in profile facing right, centred on (0, 0) ──────────────────
// Crown near y -20, chin near y 18 to 22, the base of the neck near y 22 to
// 24. The nose, brow and chin are pushed out further than life: the rough
// edge of the print eats about two units, and a profile must survive that at
// phone width.

/** Pip as a child: a round head, a short nose, and the "fat cheeks" of Chapter 1. */
export const HEAD_PIP =
  'M-8 21C-9.6 16 -15.2 12.6 -16.2 4C-17.2 -9.8 -8.6 -20.6 2.6 -20.6C10.6 -20.6 15.2 -15.2 15.4 -9L15.6 -5.6L19.6 0.8L15.8 2.8L16.2 5.6L15 7.2L15.8 9.6C16.2 15.6 12.6 18.8 7.4 18.8L5.6 21Z'
/** Pip the apprentice: the same profile, longer in the jaw. */
export const HEAD_PIP_YOUTH =
  'M-8.6 22C-9.8 16.4 -15 12.6 -16 3.6C-17 -9.8 -8.4 -20.2 2.8 -20.2C10.8 -20.2 15.6 -14.6 15.8 -8.6L16 -5.4L21 2.4L16.6 4.4L17 7.2L15.6 8.8L16.6 11.4C16.6 16.2 13 18.8 8 18.8L6 22Z'
/**
 * Joe: a broad, strong, smooth-faced head, the jaw full and the neck thick.
 * His hair and curls are JOE_HAIR and JOE_LOCK, in paper over it.
 */
export const HEAD_JOE =
  'M-10.4 24C-11.8 18 -17 13.4 -17.8 4.2C-18.6 -10 -9.2 -21 3 -21C11.8 -21 16.8 -15.4 17 -9L17 -5.6L22.4 3L17.6 5.2L18 8.2L16.6 9.8L17.6 12.4C18 18.4 14.4 21.4 8.6 21.6L7.6 24Z'
/**
 * The convict: a heavy brow over a deep-set eye, a big nose and a hard jaw.
 * The RAG is knotted round it in paper.
 */
export const HEAD_MAGWITCH =
  'M-9.6 24C-11 18 -16.4 13.6 -17.4 4.6C-18.4 -9.6 -9.2 -20.6 3 -20.6C11.4 -20.6 16.4 -15.6 16.8 -9.6L18.6 -6.8L16.8 -4.8L23.6 4.6L17.8 6.6L18.4 9.6L16.8 11.2L18.2 14C18.6 19.4 14.8 22.2 8.8 22.4L7.4 24Z'
/** Mrs Joe: tall and bony, a long sharp nose and a sharp chin. */
export const HEAD_MRSJOE =
  'M-8 22C-9 16.4 -14 12.4 -15 3.8C-16 -9 -7.6 -19.6 2.4 -19.6C10.4 -19.6 14.8 -14.2 15 -8.6L15.2 -5.4L22 4.4L16.2 5.8L16.4 8.2L15 9.6L16.4 12.6C16.4 16.4 13.6 18.6 9 18.8L6.6 22Z'
/** Miss Havisham: gaunt, "shrunk to skin and bone". Cut in PAPER with an ink edge. */
export const HEAD_HAVISHAM =
  'M-8 21C-9 15.6 -13.6 11.6 -14.6 3.4C-15.6 -9 -7.4 -19.4 2.4 -19.4C10.2 -19.4 14.4 -14.2 14.6 -8.6L15 -5.6L20 2.8L15.4 4.6L15.6 7.2L14.4 8.6L15.6 11.6C15.4 15.8 12.4 17.8 8.2 18L6.4 21Z'
/** A girl's head (Estella, Biddy): softer in the nose and chin than a woman's. */
export const HEAD_GIRL =
  'M-8 20C-9 14.6 -13.4 10.6 -14.4 3C-15.4 -9 -7.2 -18.4 2 -18.4C9.6 -18.4 14 -13 14.2 -7.4L14.6 -4.2L18.8 2.2L14.8 4L15.2 6.6L14.2 8.2L15 10.4C14.6 14 11.8 16 7.6 16L5.6 20Z'
/** Orlick: a low brow, a heavy jaw pushed forward. */
export const HEAD_ORLICK =
  'M-10.4 23C-11.8 17 -17 12.6 -17.8 4C-18.6 -9.4 -9.8 -19.4 2 -19.4C10.6 -19.4 15.6 -14.8 16.2 -9.2L17.6 -6.4L16 -4.6L21.8 4.4L16.8 6.4L17.6 9.2L16.2 10.8L18.6 13.4C19.2 19 15.6 21.8 9.4 22L8 23Z'
/** A woman's head, for women the text does not describe. */
export const HEAD_WOMAN =
  'M-8 21C-9 15 -14 11 -15 3C-16 -9 -7 -19 2 -19C10 -19 14.5 -13 14.5 -7.5L15 -4.5L20.5 3L15.5 4.8L16 7.5L14.8 9L15.6 11.5C15 15 12 17 7.5 17L5.5 21Z'
export { HEAD_MAN }

// ── FEATURES, in the same frame ─────────────────────────────────────────────

export { EYE, EYE_DOWN, EAR, FROWN }
/** A man's brow, one firm cut. */
export const BROW = gouge(6.4, -8.6, 14.6, -7.8, 0.9, -0.2)
/** A brow raised in fright: higher and arched. */
export const BROW_UP = gouge(5.8, -11.4, 14, -10.2, 0.85, -1.4)
/** A woman's or a child's brow, finer. */
export const BROW_FINE = gouge(7, -8.2, 13.4, -7.6, 0.6, -0.4)
/**
 * An eye opened wide in fright, for an ink face: a round paper eye with an
 * ink pupil (EYE_WIDE_PUPIL). The plain one-cut EYE reads as calm.
 */
export const EYE_WIDE = 'M6.6 -3.4C7.4 -6.6 11.8 -7.2 13.2 -3.8C12.2 -1 8 -0.6 6.6 -3.4Z'
export const EYE_WIDE_PUPIL = 'M9.4 -3.9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0Z'
/** An open eye on a face cut in paper: the lid's outline and the pupil, in ink. */
export const EYE_LID = 'M6.8 -3.8Q10 -6 12.9 -3.8Q10 -1.8 6.8 -3.8Z'
export const EYE_PUPIL = 'M8.9 -3.9a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0 -2.5 0Z'
/** A proud eye on a paper face, the lid lowered: Estella. Stroke in ink. */
export const EYE_PROUD = 'M7 -3.4Q10.2 -5 13 -3.6'
/** A tear on the cheek, in paper on an ink face: Pip, "beginning to cry". */
export const TEAR =
  'M9.2 1.4C9.8 3 10.8 4.6 10.2 5.8C9.4 6.8 7.8 6.2 8 4.8C8.2 3.6 8.8 2.4 9.2 1.4Z'
/**
 * The cheek, where a flush goes when the text gives one: one patch on the
 * cheekbone, well above the mouth and clear of the profile, as Fred's ruddy
 * cheek is in the reference panel: [cx, cy, rx, ry], filled RED. (Two level
 * strokes, the Gatsby kit's flush, read on Mrs Joe at panel size as paint.)
 */
export const FLUSH: [number, number, number, number] = [6.2, 4.6, 3.4, 2.3]
/** A mouth for a face cut in paper, stroked in ink at about 1. */
export const MOUTH_PAPER = 'M12.8 9.6L15.2 9.2'
/**
 * The convict's glare: a deep-set eye under the heavy brow. GLARE_BROW and
 * GLARE_EYE in paper on the ink face; GLARE_PUPIL in ink inside the eye.
 */
export const GLARE_BROW = gouge(5.6, -9.4, 17.2, -6.2, 1.25, -0.4)
export const GLARE_EYE = 'M7.4 -3.6Q11 -5.6 14.4 -3.4Q11 -1.4 7.4 -3.6Z'
export const GLARE_PUPIL = 'M10.6 -3.6a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 1 0 -2.2 0Z'
/** The lines of a hard face: the crease from nose to mouth, cut in paper. */
export const HARD_CHEEK = gouge(15.4, 4.6, 11, 11.2, 0.5, 0.6)

/** Pip's dark hair on the ink head: a rough hairline and strands. Stroke in PAPER at about 1.1. */
export const PIP_HAIR_LINES =
  'M12.6 -13.6C7.6 -12.4 3.6 -9.8 1.2 -6.2C-0.6 -3 -1.6 1.6 -4.4 5.4' +
  'M9.4 -17.6C3 -18.6 -4.4 -16.4 -10.4 -10.4M4.6 -14.2C-1.6 -13.6 -7 -9.4 -10.6 -2.4' +
  'M13.6 -12.6L15.8 -15.8M10.4 -15.8L12 -19.2'

/**
 * Joe's fair hair, short over the crown, in PAPER (fill), edged in ink by the
 * figure; JOE_STRANDS are ink strokes through it.
 */
export const JOE_HAIR =
  'M13.4 -14.4C10 -21.6 1.4 -23.8 -5.6 -22C-14 -19.8 -18.8 -12 -18.4 -2.6C-18 3.6 -16.4 8.6 -13.8 12.2L-9.2 11.4C-10.2 7.4 -9.6 3.2 -6.8 0.2C-4.6 -2.2 -2.6 -4.6 -0.6 -7L1.6 -8.6L3.2 -11L5 -9.8L7.2 -12.6L9 -11.2L11.4 -13.8Z'
/**
 * Strands through Joe's hair, so that at panel size the paper reads as hair
 * and not as a cap. (Cut first with three strands and a smooth hairline, it
 * read on 10 October 2026 as a white helmet.)
 */
export const JOE_STRANDS =
  'M10.6 -16.2C4.2 -18.6 -4 -17.8 -10.6 -12.2M7.6 -12.8C1.6 -13.8 -5.4 -12.2 -11 -6M-13 -10.6C-15.8 -5.2 -15.6 1.6 -12.6 8.4' +
  'M3.4 -10.2C-1.6 -9.6 -6.4 -6.4 -9.8 -1.2M-4.4 -19.6C-10.2 -17.2 -14.8 -12 -16.2 -4.8M-10.8 -1.4C-12.6 2.4 -12.4 6.4 -11.2 9.8'
/**
 * The flaxen curls in front of his ear, from the temple down the cheek: a
 * paper lock (JOE_LOCK, edged in ink by the figure) with the turns of the
 * curls cut into it in ink (JOE_CURL_TURNS).
 */
export const JOE_LOCK =
  'M3.2 -10.4C0 -6.4 -1.6 -1 -1.2 4.2C-0.8 9 1.2 13.2 4.6 16C6.6 13.6 7.2 10 6.4 6.6C5.6 2.6 5.4 -1.8 6.4 -6.2Z'
export const JOE_CURL_TURNS =
  'M1.4 -5.2q2 -1.8 3.4 0.4M0.6 0.2q2.2 -1.6 3.4 0.8M1 5.4q2.2 -1.4 3.4 1M2.2 10.4q2 -1 2.8 1.2'

/**
 * The convict's "old rag tied round his head": a band round the crown above
 * the brow, knotted at the back with two loose ends. Fill with PAPER; its
 * folds, RAG_FOLDS, are stroked in ink.
 */
export const RAG =
  'M15.4 -11.6C8.6 -18.8 -6.6 -19.6 -16.8 -11.6L-17.6 -4.6C-7.6 -11.2 5.6 -12 15.6 -6.6Z' +
  'M-15.2 -10.2C-19.6 -11.6 -23 -9.2 -23.2 -5.4C-23.2 -2.6 -20.4 -0.8 -17.2 -1.8Z' +
  'M-21.4 -4C-25.6 0 -28.4 5.4 -29.8 11L-26 11.4C-24.8 6.4 -22.6 2 -19 -1.2Z' +
  'M-19.4 -2.6C-21.2 2.4 -21.6 8 -20.6 13L-17.2 12.4C-17.8 7.8 -17.4 3 -16 -0.8Z'
export const RAG_FOLDS = 'M10 -13.6C2 -16.4 -7 -15.4 -14 -10.4M12.6 -9.4C4 -12.2 -6 -11.6 -14.8 -7'

/**
 * Magwitch at sixty ('magwitch60'): the convict's head with the rag gone. The
 * crown is bald, a cut of light across it (SIXTY_SHINE) and two furrows on the
 * brow (SIXTY_FURROWS), in paper on the ink. "The long iron-grey hair grew
 * only on its sides": SIXTY_HAIR is cut as separate locks of paper with the
 * ink showing between them, from the line of the bald crown round the back of
 * the head and down over the collar, so it reads as grey hair. (It was first
 * cut as one solid paper shape, which at panel size read as a white hood.)
 * From Chapter 40 "he wore his grizzled hair cut short": SIXTY_HAIR_SHORT.
 */
const lock = (pts: P[], w: number) => ribbon(pts, w, 0.6, false)
export const SIXTY_HAIR =
  lock(
    [
      [-5.4, -8.8],
      [-6.4, -1],
      [-7.4, 8],
      [-9, 17],
      [-11, 26],
    ],
    3,
  ) +
  lock(
    [
      [-8.8, -9.4],
      [-10.2, -0.6],
      [-11.6, 9],
      [-13.2, 18.6],
      [-15.2, 28.6],
    ],
    3.2,
  ) +
  lock(
    [
      [-12.2, -8.8],
      [-14, 0.4],
      [-15.4, 10.4],
      [-17, 20.4],
      [-19, 30.4],
    ],
    3.2,
  ) +
  lock(
    [
      [-15.6, -6.6],
      [-18, 2],
      [-19.2, 11.6],
      [-20.4, 21],
      [-21.8, 30],
    ],
    3,
  )
export const SIXTY_HAIR_SHORT =
  lock(
    [
      [-5.4, -8.8],
      [-6.4, -1.4],
      [-7.4, 5],
      [-8.2, 11],
    ],
    2.8,
  ) +
  lock(
    [
      [-8.8, -9.4],
      [-10.2, -1.6],
      [-11.2, 5.6],
      [-12, 12.6],
    ],
    3,
  ) +
  lock(
    [
      [-12.2, -8.8],
      [-13.8, -1],
      [-14.8, 6],
      [-15, 13],
    ],
    3,
  ) +
  lock(
    [
      [-15.6, -6.6],
      [-17.6, 0.6],
      [-18, 7],
      [-17.4, 12.4],
    ],
    2.8,
  )
export const SIXTY_SHINE = gouge(-9.6, -17.4, 8.6, -19.4, 0.9, -1.6)
export const SIXTY_FURROWS =
  gouge(15.4, -12.4, 9, -13.4, 0.5, -0.3) + gouge(14, -15.4, 7.4, -16.4, 0.5, -0.3)

/**
 * Mrs Joe's dark hair under her cap, and the cap: a plain linen cap with a
 * frill round the face, in PAPER. MRSJOE_CAP_FRILL is stroked in ink.
 */
export const MRSJOE_CAP =
  'M12.4 -12.6C9 -20.4 -2 -24 -10.6 -20.4C-18.2 -17.2 -21 -9.6 -19.6 -2C-19 1.8 -17.4 4.6 -15.4 6L-11 4.4C-11.4 0 -10.4 -4.6 -7 -8C-3.6 -11.2 4 -12.6 12.4 -12.6Z'
export const MRSJOE_CAP_FRILL =
  'M12.6 -12.6C10.6 -14.4 8.4 -12.4 6.4 -13.8C4.6 -12 2.2 -13.4 0.4 -11.8C-1.6 -10.2 -3.8 -11 -5.2 -8.8C-7.2 -7.4 -8.4 -5.4 -9.2 -2.6C-10.4 -0.6 -10.2 2 -11.2 4.4'
/** The black hair showing at the brow under the cap. */
export const MRSJOE_HAIR_LINES = 'M12 -11.4C8 -10.4 4.6 -8.2 2.4 -5'

/**
 * Miss Havisham's white hair (PAPER, edged in ink), drawn back under the
 * veil; HAVISHAM_STRANDS stroked in ink. Her features are HAVISHAM_FACE: the
 * hollow of the cheek, the socket of the sunken eye (ink, with a paper glint,
 * HAVISHAM_GLINT), a brow, and a thin mouth turned down.
 */
export const HAVISHAM_HAIR =
  'M12.6 -13C9.4 -20.6 0 -22.6 -7 -20.6C-15 -18.2 -19.2 -10.4 -18.4 -1.4C-18 4 -16.6 8.6 -14.4 12.4L-9.4 12C-11 7.4 -10.8 2.4 -8.6 -1.8C-5.8 -7 2.4 -11.4 12.6 -13Z'
export const HAVISHAM_STRANDS =
  'M9.6 -15.4C3 -17.6 -5 -16.6 -11 -11.2M6 -12.2C0 -12.6 -6.6 -9.6 -11.6 -3.6M-13.8 -9C-16.4 -3.6 -16.2 3.2 -13.4 9.8'
export const HAVISHAM_FACE = {
  socket: 'M6.4 -3.6Q10 -7.4 13.6 -4.2L13 -1.6Q10 0.2 6.8 -1.6Z',
  glint: 'M9.6 -3.4a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0 -2.4 0Z',
  brow: 'M6 -8.6Q10 -10.4 14 -8.4',
  hollow: 'M4.6 1.2Q2.8 5.8 5.4 10.6',
  mouth: 'M11 11.8Q13 10 15 11.4',
}
/** Her bridal flowers, in her hair: rosettes [cx, cy, r], paper with ink hearts. */
export const BRIDAL_FLOWERS: [number, number, number][] = [
  [-2, -19.6, 3.4],
  [-8.4, -17.8, 3],
  [3.6, -20.6, 2.6],
]
/**
 * Her veil, "dependent from her hair", "but half-arranged": hung from the
 * crown down her back to below the waist. In the frame of the head, at the
 * head's scale; fill PAPER, edged in ink by the figure. VEIL_FOLDS in ink.
 */
export const VEIL =
  'M6 -19C-4 -24 -16 -20 -20 -10C-23 -2 -23 10 -24 22C-25 44 -29 66 -34 90L-16 92C-12 70 -10 48 -10 28C-10 14 -9 2 -4 -8C-1 -13 2 -16 6 -19Z'
export const VEIL_FOLDS = 'M-15 -6C-17 12 -18 40 -25 82M-12 10C-13 34 -14 58 -20 86'

/**
 * Estella's long dark hair, falling down her back, on her paper face: an INK
 * shape over the head, cut through with paper strands (ESTELLA_STRANDS).
 */
export const ESTELLA_HAIR =
  'M12.6 -11.4C9.2 -19.6 -2 -21.4 -9.6 -17C-16.4 -13 -18.2 -4 -17.4 6C-16.4 22 -18.2 36 -21 50C-17 51.6 -12.4 51.8 -8.4 50.4C-6.8 38 -6 24 -6.8 12C-7.4 2 -4.6 -5.6 2.4 -9.6C5.8 -11.4 9.2 -11.8 12.6 -11.4Z'
export const ESTELLA_STRANDS =
  gouge(6.4, -15.4, -12.6, -2, 0.6, 2.6) +
  gouge(-12.4, 6, -14.6, 40, 0.6, 1.2) +
  gouge(-9.6, 14, -11.6, 44, 0.5, 0.8)

/** Biddy's dark hair in a knot, in INK: BIDDY_BUN alone when it is neat. */
export const BIDDY_BUN = 'M-24.6 -8a6.4 6 0 1 0 12.8 0a6.4 6 0 1 0 -12.8 0Z'
/** The knot with strands escaping it, as it is when she first comes to the forge. */
export const BIDDY_KNOT =
  BIDDY_BUN +
  'M-22.4 -12.6L-28 -17.2L-24.2 -11Z' +
  'M-24.6 -5.6L-30.4 -4.2L-24.6 -3Z' +
  'M-13.6 -15.6L-13.4 -21.4L-10.8 -16.4Z'
/** The rough edge of her hair, strands cut in paper through the knot. */
export const BIDDY_STRANDS = 'M-22.4 -9.6Q-18.6 -12 -14.6 -9.8M-22.6 -6Q-18.4 -4.2 -14.2 -6.6'
export const BIDDY_HAIR_LINES =
  'M12 -11.6C6.4 -10.2 2.2 -7.4 0 -3.6M7.6 -15.8C0.6 -17 -7 -14.6 -12.4 -8.6M3 -12.6C-3 -12 -8.4 -8 -11.6 -1.6'

/** Orlick's rough dark hair, cut in paper strands, hanging over the brow. Stroke in PAPER at about 1.1. */
export const ORLICK_HAIR_LINES =
  'M13.4 -12.4C9 -12.6 5.4 -10.4 3 -7M10 -16.6C3 -18 -4.6 -15.4 -10.4 -9.4M4.8 -13C-1.6 -12.6 -7.4 -8.2 -11 -1.4M-13.6 -8.4C-16.2 -3 -16 3.6 -13.2 10'

/**
 * Mr Jaggers ('jaggers'): "an exceedingly large head", bigger than a man's
 * (crown at -25, chin at 23), the brow overhanging the eye so that the eye is
 * "set very deep in his head". Drawn in ink; the features below are cut in
 * paper over it.
 */
export const HEAD_JAGGERS =
  'M-10 25C-11.6 19 -18 14.6 -20.2 5C-22.4 -9.6 -12.6 -25 1.8 -25C12.4 -25 17.8 -18.8 18 -11.6L18.8 -8.6L16.4 -6.2L24.4 4.4L18 6.8L18.6 9.6L16.8 11L18.6 14C19.2 19.4 15.4 22.6 9.4 23L8 25Z'
/** "prematurely bald on the top of his head": a cut of light across the bare dome. */
export const JAGGERS_SHINE =
  gouge(-15.4, -12.6, -6, -20.6, 1.5, -0.9) + gouge(-6.6, -20.4, 6.6, -21.4, 1.5, -0.6)
/** The dark hair left at the back and sides, below the bald crown: paper strands. */
export const JAGGERS_FRINGE =
  gouge(-20.4, -3, -18.2, 12, 0.75, 1) +
  gouge(-17, -7, -14.6, 9, 0.7, 0.9) +
  gouge(-13.4, -9.4, -11.6, 5, 0.65, 0.7) +
  gouge(-9.8, -10.6, -8.4, -1, 0.55, 0.5)
/** "bushy black eyebrows that wouldn't lie down, but stood up bristling": bristles over the brow. */
export const JAGGERS_BRISTLES =
  gouge(7.6, -10.2, 6.4, -14.6, 0.55) +
  gouge(10.4, -10.6, 9.8, -15.4, 0.55) +
  gouge(13.2, -10.4, 13.6, -15, 0.55) +
  gouge(15.8, -9.8, 17.4, -13.8, 0.5)
/** His hard, straight mouth. */
export const JAGGERS_MOUTH = gouge(12.4, 12.4, 17.6, 12.2, 0.55)

/**
 * Estella grown up: her dark hair dressed up at the back of the head, a lady's,
 * in INK over her paper face, with a knot at the back (both in this one path),
 * cut through with paper strands (ESTELLA_UP_STRANDS). In HEAD_GIRL's frame.
 */
export const ESTELLA_HAIR_UP =
  'M12.8 -11.2C9.6 -19 -0.6 -21.2 -8.4 -18.2C-15.4 -15.4 -17.8 -7.8 -16.6 0.4C-15.8 5.6 -13.4 9.4 -10 11.6L-6.8 10.4C-8.4 6.8 -8.6 2.4 -6.4 -1.8C-3.6 -7 3.4 -10.8 12.8 -11.2Z' +
  'M-23 -13.8a7 6 0 1 0 14 0a7 6 0 1 0 -14 0Z'
export const ESTELLA_UP_STRANDS =
  gouge(8.4, -15.6, -10.6, -10.4, 0.55, 2) +
  gouge(3.6, -12.4, -12.6, -2.6, 0.55, 2) +
  gouge(-20.6, -14.6, -12.6, -16.4, 0.5, -1.4) +
  gouge(-20, -11.4, -12, -11.6, 0.5, 1.2)

// ── HATS, in the frame of the heads ─────────────────────────────────────────

/** A plain top hat of the period, the crown a little flared. */
export const TOP_HAT =
  'M-18.5 -10C-17.5 -13.5 -14.5 -14.2 -12.8 -14.2L-14.6 -38.4C-5 -41 6 -41 14.6 -38.4L12.8 -14.2C14.8 -14.2 18 -13.2 19 -10C9 -7.8 -8.5 -7.8 -18.5 -10Z'
export const TOP_HAT_BAND = gouge(-13, -19.5, 13, -19.5, 1)
/** A soldier's shako of about 1815: a tall front, a peak, a plume; SHAKO_PLATE is its badge in paper. */
export const SHAKO =
  'M-14.6 -11.6L-15.4 -27.6L-12.8 -40.6C-4 -43.4 6 -43.4 14.6 -40.4L14.4 -11.6Z' +
  'M12.4 -12.6L25.6 -9.4L24.4 -6.6L11.6 -8.6Z' +
  'M-3 -42.6C-4 -48 -2.6 -53.4 1.2 -56.6C3.6 -53.2 4.4 -47.6 3.4 -42.4Z'
export const SHAKO_PLATE = 'M6.4 -31.4L11.6 -27.4L10.6 -20.6L6 -18.4L2 -21.6L1.8 -28Z'
export const SHAKO_BAND = gouge(-14.6, -15, 14.4, -15, 0.9)

// ── HANDS ───────────────────────────────────────────────────────────────────

/**
 * A hand: open with the fingers apart, pointing, at rest, closed round
 * something held, or hidden (in a pocket, or behind the body).
 */
export type HandKind = 'open' | 'point' | 'mitt' | 'grip' | 'none'

export interface ArmPose {
  /** Shoulder, elbow and wrist, in the figure's frame. */
  pts: P[]
  hand?: HandKind
  /** The direction the fingers point, in degrees clockwise from the right. Defaults to the forearm's. */
  deg?: number
  /** Which side of the fingers the thumb is on: 1 clockwise of them, -1 anticlockwise. */
  thumb?: 1 | -1
  /**
   * An open hand's length (15 is life and a little more) and how far its
   * fingers fan. `size` also scales a pointing hand, against 15.
   */
  size?: number
  spread?: number
}

// ── THE PEOPLE ──────────────────────────────────────────────────────────────

export type Look =
  | 'pip'
  | 'joe'
  | 'mrsjoe'
  | 'magwitch'
  | 'magwitch60'
  | 'havisham'
  | 'estella'
  | 'biddy'
  | 'orlick'
  | 'soldier'
  | 'jaggers'
  | 'herbert'
  | 'startop'
  | 'man'
  | 'woman'

/**
 * What a figure wears. 'jacket': a boy's short jacket over a waistcoat, and
 * trousers. 'coat': a man's coat of the period, cut away at the front with
 * tails behind. 'forge': shirt sleeves in paper and a leather apron in ink.
 * 'grey': the convicts' coarse grey, ink cut through with hatching.
 * 'uniform': a soldier's short-skirted coat with white cross-belts. 'gown':
 * a woman's gown of the period. 'bridal': Miss Havisham's.
 */
export type Dress = 'jacket' | 'coat' | 'forge' | 'grey' | 'uniform' | 'gown' | 'bridal'

export interface Pose {
  look: Look
  /**
   * Pip: 'child' (Chapters 1 to 7, the default), 'boy', 'youth' or 'man'
   * (Chapters 20 onwards). Estella: 'girl' (the default), or 'woman'
   * (Chapters 29 onwards).
   */
  age?: 'child' | 'boy' | 'youth' | 'girl' | 'man' | 'woman'
  /** The head's centre and its tilt in degrees (forward, chin down, is positive). */
  head?: { at?: P; rot?: number }
  /** The line of the body, neck to hip: to lean, stoop or sit. */
  body?: { neck?: P; hip?: P }
  far?: ArmPose
  near?: ArmPose
  /** Hip, knee and ankle of each leg. */
  legs?: { far: P[]; near: P[] }
  dress?: Dress
  /** The tone of the dress, if not the look's own. */
  tone?: Tone
  /** A woman sitting: her skirt runs over her lap to the knee her legs give, and down to the floor. */
  seated?: boolean
  eye?: 'open' | 'wide' | 'down' | 'shut' | 'glare' | 'proud' | 'none'
  brow?: 'plain' | 'up' | 'frown'
  tear?: boolean
  /** A flush on the cheekbone (FLUSH), never the mouth. Only where the text gives one. */
  flush?: boolean
  hat?: 'top' | 'shako' | 'none'
  /** The convict's leg-iron, on the near or the far leg. */
  iron?: 'near' | 'far'
  /** Handcuffs: both wrists, which the pose must bring together. */
  cuffs?: boolean
  /** Mrs Joe's apron (on by default for her), or the leather apron of the forge. */
  apron?: boolean
  /** Miss Havisham's one shoe: on the near foot, the far foot, or neither shown. */
  shoe?: 'near' | 'far'
  /** Magwitch at sixty from Chapter 40: "he wore his grizzled hair cut short". */
  cropped?: boolean
  /** Magwitch at sixty's neckerchief, knotted at the throat: on unless false. */
  neckerchief?: boolean
  /**
   * Biddy from Chapter 17 on, when "her hair grew bright and neat": the knot
   * without its escaping strands. Off by default, for the Biddy who has just
   * come to the forge (Chapter 16).
   */
  neat?: boolean
}

const WOMEN: Look[] = ['mrsjoe', 'havisham', 'estella', 'biddy', 'woman']

/** How big each person is, against a man of 1 (before the frame). */
const SIZE: Record<Look, number> = {
  pip: 1,
  joe: 1.06,
  mrsjoe: 1.02,
  magwitch: 1.03,
  magwitch60: 1.03,
  havisham: 0.98,
  estella: 1,
  biddy: 0.98,
  orlick: 1.03,
  soldier: 1,
  jaggers: 1.04,
  herbert: 1,
  startop: 0.98,
  man: 1,
  woman: 1,
}

/** Shoulders, arm and leg widths against the frame's: Joe's strength, Miss Havisham's thinness. */
const BUILD: Partial<Record<Look, { width: number; arm: number; leg: number }>> = {
  herbert: { width: 27, arm: 7.8, leg: 9 },
  startop: { width: 26, arm: 7.4, leg: 8.8 },
  joe: { width: 37, arm: 10.6, leg: 11.6 },
  magwitch: { width: 33, arm: 9.6, leg: 10.6 },
  magwitch60: { width: 33, arm: 9.6, leg: 10.6 },
  orlick: { width: 36, arm: 10.2, leg: 11 },
  havisham: { width: 19, arm: 5, leg: 5.6 },
  mrsjoe: { width: 21, arm: 5.8, leg: 6 },
  jaggers: { width: 35, arm: 10, leg: 11 },
}

/** What each person wears, and how it is printed, unless the pose says otherwise. */
const LOOK: Record<Look, { dress: Dress; tone: Tone; skin: Tone }> = {
  herbert: { dress: 'coat', tone: 'ink', skin: 'paper' },
  startop: { dress: 'coat', tone: 'ink', skin: 'ink' },
  pip: { dress: 'jacket', tone: 'ink', skin: 'ink' },
  joe: { dress: 'coat', tone: 'ink', skin: 'ink' },
  mrsjoe: { dress: 'gown', tone: 'ink', skin: 'ink' },
  magwitch: { dress: 'grey', tone: 'ink', skin: 'ink' },
  magwitch60: { dress: 'jacket', tone: 'ink', skin: 'ink' },
  havisham: { dress: 'bridal', tone: 'paper', skin: 'paper' },
  estella: { dress: 'gown', tone: 'paper', skin: 'paper' },
  biddy: { dress: 'gown', tone: 'ink', skin: 'ink' },
  orlick: { dress: 'forge', tone: 'ink', skin: 'ink' },
  soldier: { dress: 'uniform', tone: 'ink', skin: 'ink' },
  jaggers: { dress: 'coat', tone: 'ink', skin: 'ink' },
  man: { dress: 'coat', tone: 'ink', skin: 'ink' },
  woman: { dress: 'gown', tone: 'ink', skin: 'ink' },
}

function frameOf(p: Pose): Frame {
  const pipAge: FrameName =
    p.age === 'boy' || p.age === 'youth' || p.age === 'man' ? p.age : 'child'
  const f: FrameName =
    p.look === 'pip'
      ? pipAge
      : p.look === 'estella'
        ? p.age === 'woman'
          ? 'woman'
          : 'girl'
        : WOMEN.includes(p.look)
          ? 'woman'
          : 'man'
  const base = FRAMES[f]
  const b = f === 'man' || f === 'woman' ? BUILD[p.look] : undefined
  return b ? { ...base, ...b } : base
}

/** Arms hanging at rest, in a frame. */
function restArms(f: Frame): { far: P[]; near: P[] } {
  const L = f.hip[1] - f.neck[1]
  const s0 = f.neck[1] + L * 0.09
  return {
    far: [
      [-3, s0],
      [-6, s0 + L * 0.44],
      [-3, s0 + L * 0.82],
    ],
    near: [
      [3, s0],
      [7, s0 + L * 0.44],
      [9, s0 + L * 0.82],
    ],
  }
}
/** Legs standing, in a frame. */
function standLegs(f: Frame): { far: P[]; near: P[] } {
  const h = f.hip[1]
  return {
    far: [
      [-3, h],
      [-5, h / 2],
      [-6, -3],
    ],
    near: [
      [3, h],
      [5, h / 2],
      [7, -3],
    ],
  }
}

/** A man's legs on a seat `seat` units high, knees forward to `reach`, feet on the ground. */
export function seatedLegs(seat: number, reach = 36): { far: P[]; near: P[] } {
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

/** A unit vector from a to b, and the vector to the figure's front (its right, facing right). */
function axes(a: P, b: P): { u: P; fr: P } {
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  const L = Math.hypot(dx, dy) || 1
  const u: P = [dx / L, dy / L]
  return { u, fr: [u[1], -u[0]] }
}
const along = (o: P, u: P, a: number, fr: P, b: number): P => [
  o[0] + u[0] * a + fr[0] * b,
  o[1] + u[1] * a + fr[1] * b,
]
const pt = (q: P) => `${n(q[0])} ${n(q[1])}`
const poly = (q: P[]) => 'M' + q.map(pt).join('L') + 'Z'

/**
 * A man's coat of the period on the line from neck to hip, facing right:
 * shoulders `width` across, drawn in at the waist, cut away at the front so
 * the legs show, with tails hanging `tails` below the hip at the back. With
 * `long`, a frock or greatcoat whose whole skirt falls to `tails`.
 */
export function coat(
  neck: P,
  hip: P,
  {
    width = 30,
    tails = 40,
    front = 4,
    flare = 6,
    swing = 0,
    long = false,
  }: {
    width?: number
    tails?: number
    front?: number
    flare?: number
    swing?: number
    long?: boolean
  } = {},
): string {
  const { u, fr } = axes(neck, hip)
  const at = (o: P, a: number, b: number) => along(o, u, a, fr, b)
  const h = width / 2
  const back = (q: P): P => [q[0] - swing, q[1]]
  const tF = at(neck, -3, h * 0.5)
  const cF = at(neck, -3, h)
  const sF = at(neck, 5, h)
  const wF = at(hip, -4, h * 0.78)
  const wB = at(hip, -4, -h * 0.78)
  const sB = at(neck, 5, -h)
  const cB = at(neck, -3, -h)
  const tB = at(neck, -3, -h * 0.5)
  const hemB = back(at(hip, tails, -(h * 0.78 + flare)))
  const mid = long
    ? [back(at(hip, tails, h * 0.78 + flare)), hemB]
    : [
        at(hip, front, h * 0.8),
        at(hip, front + (tails - front) * 0.42, -h * 0.1),
        back(at(hip, tails, -h * 0.24)),
        hemB,
      ]
  return (
    `M${pt(tF)}Q${pt(cF)} ${pt(sF)}L${pt(wF)}` +
    mid.map((q) => `L${pt(q)}`).join('') +
    `L${pt(wB)}L${pt(sB)}Q${pt(cB)} ${pt(tB)}Z`
  )
}

/**
 * A woman's gown of the period, standing: the waist high under the bust
 * (`waist` below the neck), the skirt falling straight to `hem`, a little
 * wider at the foot. Returns one path.
 */
export function gown(
  neck: P,
  hem: P,
  {
    width = 23,
    waist = 22,
    foot = 36,
    bust = 2.6,
  }: { width?: number; waist?: number; foot?: number; bust?: number } = {},
): string {
  const { u, fr } = axes(neck, hem)
  const at = (a: number, b: number) => along(neck, u, a, fr, b)
  const L = Math.hypot(hem[0] - neck[0], hem[1] - neck[1])
  const h = width / 2
  return poly([
    at(-2, h * 0.45),
    at(3, h),
    at(waist, h * 0.8 + bust),
    at(L, foot / 2),
    at(L + 1.5, 0),
    at(L, -foot / 2),
    at(waist, -h * 0.8),
    at(3, -h),
    at(-2, -h * 0.45),
  ])
}

/**
 * A woman's gown when she sits, facing right: the bodice from `neck` to the
 * high waist, the lap along the thigh from `hip` to `knee`, and the skirt
 * falling from the knee to the floor at `floor`. The back of the skirt drops
 * behind the hip to the seat.
 */
export function seatedGown(neck: P, hip: P, knee: P, floor: number, width = 22, lap = 10): string {
  const h = width / 2
  return poly([
    [neck[0] - h * 0.4, neck[1] - 2],
    [neck[0] + h * 0.6, neck[1] + 2],
    [neck[0] + h * 0.9, neck[1] + 12],
    [hip[0] + h * 0.7, hip[1] - lap - 4],
    [knee[0] + 3, knee[1] - lap * 0.8],
    [knee[0] + 7, knee[1] + 2],
    [knee[0] + 8, floor - 2],
    [knee[0] + 12, floor],
    [knee[0] - 16, floor],
    [hip[0] - 4, hip[1] + 10],
    [hip[0] - h * 0.9, hip[1] + 2],
    [neck[0] - h * 0.9, neck[1] + 14],
    [neck[0] - h * 0.7, neck[1] + 3],
  ])
}

/**
 * A leather apron on the line from neck to hip, facing right: a bib from the
 * chest, hanging in front of the body to below the knee, `drop` below the hip.
 */
function leatherApron(neck: P, hip: P, h: number, drop: number): string {
  const { u, fr } = axes(neck, hip)
  const at = (o: P, a: number, b: number) => along(o, u, a, fr, b)
  return poly([
    at(neck, 9, -h * 0.05),
    at(neck, 8, h * 0.95),
    at(hip, -6, h * 1.02),
    at(hip, drop, h * 1.24),
    at(hip, drop + 2, h * 0.1),
    at(hip, -2, -h * 0.5),
    at(neck, 18, -h * 0.4),
  ])
}

/** A boot, thick in the sole and the ankle, its heel at the ankle point, toe to the right. */
export function heavyBoot([x, y]: P, size = 1): Part {
  const s = size
  return {
    d: `M${n(x - 5.4 * s)} ${n(y - 9 * s)}L${n(x + 4 * s)} ${n(y - 9 * s)}L${n(x + 5 * s)} ${n(y - 5 * s)}C${n(x + 10 * s)} ${n(y - 4.6 * s)} ${n(x + 13.4 * s)} ${n(y - 2.4 * s)} ${n(x + 13.6 * s)} ${n(y + 1.4 * s)}L${n(x + 13.6 * s)} ${n(y + 3 * s)}L${n(x - 6.2 * s)} ${n(y + 3 * s)}Z`,
  }
}
/** A woman's shoe with a small heel, at the ankle (x, y), toe to the right. */
function ladyShoe([x, y]: P, s = 1): Part {
  return {
    d: `M${n(x - 3.4 * s)} ${n(y - 1 * s)}L${n(x + 4 * s)} ${n(y)}C${n(x + 8 * s)} ${n(y + 0.6 * s)} ${n(x + 9.4 * s)} ${n(y + 2.4 * s)} ${n(x + 9.4 * s)} ${n(y + 4 * s)}L${n(x - 2 * s)} ${n(y + 4 * s)}L${n(x - 3.2 * s)} ${n(y + 4.4 * s)}Z`,
  }
}

/**
 * The hatching of the convicts' coarse grey, over the ink of the cloth:
 * fixed once from the seed, as fractions along and across, so every print is
 * the same.
 */
let hatchCache: [number, number, number][] | undefined
function hatchMarks() {
  if (hatchCache) return hatchCache
  const r = rng(8101)
  const out: [number, number, number][] = []
  for (let i = 0; i < 80; i++) out.push([between(r, 0, 1), between(r, -1, 1), between(r, 0.8, 1.2)])
  hatchCache = out
  return out
}
/**
 * Short paper flecks scattered down a band from a to b, `w` wide: the coarse
 * grey of a sleeve, a leg, a coat. Scattered and short, never in rows: cut as
 * regular slanted lines, the grey read at panel size as the stripes of a
 * later century's prison clothes, which the novel does not have.
 */
function hatchBand(a: P, b: P, w: number, every = 4.2): string {
  const { u, fr } = axes(a, b)
  const L = Math.hypot(b[0] - a[0], b[1] - a[1])
  const marks = hatchMarks()
  let d = ''
  let k = 0
  for (let s = 1.5; s < L - 1; s += every * 0.55) {
    for (let j = 0; j < 2; j++) {
      const [t, c, m] = marks[k++ % marks.length]
      const across = c * (w / 2) * 0.7
      const at = s + (t - 0.5) * every * 0.5
      const q = along(a, u, at, fr, across)
      const ang = 0.9 + t * 1.2
      const len = 1.3 * m
      d += gouge(
        q[0] - Math.cos(ang) * len,
        q[1] - Math.sin(ang) * len,
        q[0] + Math.cos(ang) * len,
        q[1] + Math.sin(ang) * len,
        0.42 * m,
      )
    }
  }
  return d
}

/**
 * The leg-iron round the shin of `leg` (hip, knee, ankle), a little above the
 * ankle: a thick ring across the shin (`ring`, turned by `tr`), two rivets,
 * and two links of chain hanging from it.
 */
function legIron(leg: P[], w: number): { ring: string; tr: string; rivets: string; links: string } {
  const [, k, a] = leg
  const t = 0.74
  const c: P = [k[0] + (a[0] - k[0]) * t, k[1] + (a[1] - k[1]) * t]
  const ang = (Math.atan2(a[1] - k[1], a[0] - k[0]) * 180) / Math.PI
  const rx = w / 2 + 2.8
  const ring = `M${n(c[0] - rx)} ${n(c[1])}a${n(rx)} 4.6 0 1 0 ${n(rx * 2)} 0a${n(rx)} 4.6 0 1 0 ${n(-rx * 2)} 0Z`
  const tr = `rotate(${n(ang - 90)} ${n(c[0])} ${n(c[1])})`
  const rivets = `M${n(c[0] - rx * 0.5)} ${n(c[1] + 1)}h0.1M${n(c[0] + rx * 0.4)} ${n(c[1] + 1.2)}h0.1`
  const lx = c[0] - rx * 0.7
  const links =
    `M${n(lx - 2.2)} ${n(c[1] + 7)}a2.2 3.2 0 1 0 4.4 0a2.2 3.2 0 1 0 -4.4 0Z` +
    `M${n(lx - 5.2)} ${n(c[1] + 12)}a3.2 2.2 0 1 0 6.4 0a3.2 2.2 0 1 0 -6.4 0Z`
  return { ring, tr, rivets, links }
}

function build(p: Pose) {
  const look = p.look
  const woman = WOMEN.includes(look)
  const F = frameOf(p)
  const L = LOOK[look]
  // Pip grown up is a gentleman, in a coat, unless the pose says otherwise.
  const dress: Dress = p.dress ?? (look === 'pip' && p.age === 'man' ? 'coat' : L.dress)
  const cloth: Tone = p.tone ?? (dress === 'grey' ? 'ink' : L.tone)
  const skin: Tone = L.skin
  const neck: P = p.body?.neck ?? F.neck
  const hip: P = p.body?.hip ?? F.hip
  const hAt: P = p.head?.at ?? [neck[0] + F.head[0], neck[1] + (F.head[1] - F.neck[1])]
  const rot = p.head?.rot ?? (look === 'orlick' ? 14 : look === 'havisham' ? 6 : 0)
  const headT = `translate(${n(hAt[0])} ${n(hAt[1])}) rotate(${rot}) scale(${F.hs})`
  const rest = restArms(F)
  const legs = p.legs ?? standLegs(F)
  const far = p.far ?? { pts: rest.far }
  const near = p.near ?? { pts: rest.near }
  const small = woman || F === FRAMES.child || F === FRAMES.boy || F === FRAMES.girl
  const back: Piece[] = []
  const last = (a: P[]) => a[a.length - 1]
  const h = F.width / 2

  const handOf = (a: ArmPose, sep?: number): Part[] => {
    const kind = a.hand ?? 'mitt'
    const wrist = last(a.pts)
    const angle = a.deg ?? endAngle(a.pts)
    // Mr Jaggers's "corresponding large hand".
    const s = small ? F.hs * 0.95 : look === 'jaggers' ? 1.22 : 1
    const out: Part[] =
      kind === 'none'
        ? []
        : kind === 'mitt'
          ? [mitt(wrist, angle, s)]
          : kind === 'grip'
            ? [gripHand(wrist, angle, s)]
            : kind === 'point'
              ? // `size` scales a pointing hand too (15 is the default), so a
                // child's pointing finger can be made to read at panel size.
                pointingHand(wrist, angle, a.size ? (s * a.size) / 15 : s, a.thumb ?? 1)
              : // Fanned 18 degrees by default: at 14 the rough edge of the
                // print closes the gaps between the fingers at panel size,
                // and open hands read as fists.
                hand(wrist, angle, {
                  size: a.size ?? (small ? 15 * s : 15),
                  spread: a.spread ?? 18,
                  thumb: a.thumb,
                })
    return out.map((q) => ({ ...q, sep, tone: skin }))
  }
  // The sleeve: paper shirt sleeves at the forge, the gown's tone for a
  // woman, the coat's for a man.
  const sleeve: Tone = dress === 'forge' ? 'paper' : cloth
  const armOf = (a: ArmPose, isNear: boolean): Part[] => [
    { d: limb(a.pts), w: F.arm, sep: isNear ? 1.6 : undefined, tone: sleeve },
    ...handOf(a, isNear ? 1.6 : undefined),
  ]

  back.push(armOf(far, false))

  const longSkirt = dress === 'gown' || dress === 'bridal'
  if (longSkirt) {
    // A woman: the gown hangs from the shoulders to the floor; only the toes
    // of her shoes show at the hem, unless she sits.
    const floorY = Math.max(last(legs.far)[1], last(legs.near)[1]) + 2
    if (p.seated) {
      for (const leg of [legs.far, legs.near]) back.push({ d: limb(leg), w: F.leg, tone: cloth })
      back.push({ d: limb([neck, hip]), w: F.width * 0.66, tone: cloth })
      back.push({
        d: seatedGown(neck, hip, legs.near[1], floorY, F.width, 10),
        tone: cloth,
      })
    } else {
      back.push({ d: limb([neck, [hip[0], hip[1] - 6]]), w: F.width * 0.66, tone: cloth })
      back.push({
        d: gown(neck, [hip[0] + (legs.near[2][0] + legs.far[2][0]) / 2 - 1, floorY - 2], {
          width: F.width,
          waist: (hip[1] - neck[1]) * 0.36,
          foot: F.width * (dress === 'bridal' ? 1.9 : 1.6),
        }),
        tone: cloth,
      })
    }
    const shoeTone: Tone = dress === 'bridal' ? 'paper' : 'ink'
    if (look !== 'havisham' || p.shoe === 'far')
      back.push({ ...ladyShoe(last(legs.far), F.hs), tone: shoeTone })
    if (look !== 'havisham' || p.shoe === 'near')
      back.push({ ...ladyShoe(last(legs.near), F.hs), tone: shoeTone })
  } else {
    const legTone: Tone = dress === 'uniform' ? 'paper' : cloth
    // Pip's "thick boots" (Chapter 8) are a size larger than anyone's.
    const bootSize = (small ? F.hs : 1) * (look === 'pip' ? 1.18 : 1)
    const legOf = (leg: P[]): Part[] => [
      { d: limb(leg), w: F.leg, tone: legTone },
      { ...heavyBoot([last(leg)[0], last(leg)[1] + 3], bootSize), tone: 'ink' },
    ]
    back.push(...legOf(legs.far))
    back.push({
      d: limb([neck, hip]),
      w: F.width * 0.76,
      tone: dress === 'forge' ? 'paper' : cloth,
    })
    const [h0, k0] = legs.near
    const sitting = k0[0] - h0[0] > 18 && Math.abs(k0[1] - h0[1]) < 16
    const torsoTone: Tone = dress === 'forge' ? 'paper' : cloth
    if (dress === 'coat' || dress === 'uniform')
      back.push({
        d: coat(neck, hip, {
          width: F.width,
          tails: sitting ? 6 : dress === 'uniform' ? 22 : 40,
          front: dress === 'uniform' ? -4 : 4,
          flare: sitting ? 1 : 5,
        }),
        tone: cloth,
      })
    else
      back.push({
        d: coat(neck, hip, { width: F.width, tails: sitting ? 4 : 6, flare: 1, long: true }),
        tone: torsoTone,
      })
    back.push(...legOf(legs.near))
    if (dress === 'forge' || p.apron)
      back.push({ d: leatherApron(neck, hip, h, (hip[1] - neck[1]) * 0.62), tone: 'ink' })
  }

  // The head, and the hair and hat on it.
  const headShape =
    look === 'pip'
      ? p.age === 'youth' || p.age === 'man'
        ? HEAD_PIP_YOUTH
        : HEAD_PIP
      : look === 'joe'
        ? HEAD_JOE
        : look === 'magwitch' || look === 'magwitch60'
          ? HEAD_MAGWITCH
          : look === 'mrsjoe'
            ? HEAD_MRSJOE
            : look === 'havisham'
              ? HEAD_HAVISHAM
              : look === 'estella' || look === 'biddy'
                ? HEAD_GIRL
                : look === 'orlick'
                  ? HEAD_ORLICK
                  : look === 'jaggers'
                    ? HEAD_JAGGERS
                    : woman
                      ? HEAD_WOMAN
                      : HEAD_MAN
  if (look === 'havisham') back.push({ d: VEIL, t: headT, tone: 'paper' })
  back.push({ d: headShape, t: headT, tone: skin, sep: skin === cloth ? 1 : undefined })
  if (look === 'joe') {
    back.push({ d: JOE_HAIR, t: headT, tone: 'paper' })
    back.push({ d: JOE_LOCK, t: headT, tone: 'paper' })
  }
  if (look === 'havisham') back.push({ d: HAVISHAM_HAIR, t: headT, tone: 'paper' })
  if (look === 'estella')
    back.push({
      d: p.age === 'woman' ? ESTELLA_HAIR_UP : ESTELLA_HAIR,
      t: headT,
      tone: 'ink',
      sep: 0.8,
    })
  if (look === 'mrsjoe') back.push({ d: MRSJOE_CAP, t: headT, tone: 'paper' })
  if (look === 'biddy') back.push({ d: p.neat ? BIDDY_BUN : BIDDY_KNOT, t: headT, tone: 'ink' })
  if (look === 'magwitch') back.push({ d: RAG, t: headT, tone: 'paper' })
  if (look === 'magwitch60')
    back.push({ d: p.cropped ? SIXTY_HAIR_SHORT : SIXTY_HAIR, t: headT, tone: 'paper' })
  if (look === 'herbert') back.push({ d: MAN_HAIR, t: headT, tone: 'paper', sep: 0.8 })
  const hat = p.hat ?? (look === 'soldier' ? 'shako' : 'none')
  if (hat === 'top') back.push({ d: TOP_HAT, t: headT, tone: 'ink' })
  if (hat === 'shako') back.push({ d: SHAKO, t: headT, tone: 'ink' })

  return {
    back,
    near: armOf(near, true),
    woman,
    skin,
    cloth,
    dress,
    hat,
    headT,
    neck,
    hip,
    legs,
    far,
    nearArm: near,
    F,
    rot,
  }
}

/**
 * One of the people of the novel, cut from the block: placed with its feet at
 * `at`, scaled by `scale` (on top of the person's own size), and turned to
 * face left with `flip`. `children` are drawn last, in the figure's own frame
 * (a slate, a file, a pie held in the hand).
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
  const b = build(pose)
  const look = pose.look
  const s = scale * SIZE[look]
  const transform = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`
  // Features are cut in the colour the face is not.
  const feat = b.skin === 'ink' ? PAPER : INK
  const eye = pose.eye ?? (look === 'magwitch' ? 'glare' : look === 'orlick' ? 'down' : 'open')
  const brow = pose.brow ?? 'plain'
  const { neck, hip, F } = b
  const { u, fr } = axes(neck, hip)
  const h = F.width / 2

  // Magwitch at sixty: "the handkerchief from his neck", knotted at the
  // throat with one end hanging, in paper edged in ink.
  let kerchief = ''
  if (look === 'magwitch60' && pose.neckerchief !== false) {
    // A narrow band round the neck, a soft knot at the throat, and its two
    // ends hanging loose down the chest. (A first cut, a broad band and a
    // round knot, read at panel size as a collar and a locket.)
    const kp = (a: number, c: number) => along(neck, u, a, fr, F.width * c)
    const knot = kp(0.6, 0.32)
    kerchief =
      poly([kp(-2.4, -0.14), kp(-3.4, 0.27), kp(0.4, 0.3), kp(1.2, -0.12)]) +
      poly([
        [knot[0] - fr[0] * 2.8, knot[1] - fr[1] * 2.8],
        [knot[0] - u[0] * 2.4, knot[1] - u[1] * 2.4],
        [knot[0] + fr[0] * 2.8, knot[1] + fr[1] * 2.8],
        [knot[0] + u[0] * 2.4, knot[1] + u[1] * 2.4],
      ]) +
      ribbon([kp(2, 0.33), kp(7, 0.36), kp(13, 0.4)], 3.4, 0.6, false) +
      ribbon([kp(2.2, 0.27), kp(6.6, 0.24), kp(11, 0.2)], 3, 0.6, false)
  }

  // Cuts over the clothes, in the figure's frame.
  let cuts = ''
  let inkCuts = ''
  let nearCuts = ''
  if (b.dress === 'jacket') {
    // The jacket's front edge, and the one button on the waistcoat.
    const a0 = along(neck, u, 4, fr, h * 0.72)
    const a1 = along(hip, u, -2, fr, h * 0.62)
    cuts += gouge(a0[0], a0[1], a1[0], a1[1], 0.6)
    const bt = along(neck, u, (hip[1] - neck[1]) * 0.45, fr, h * 0.84)
    cuts += `M${n(bt[0] - 1.6)} ${n(bt[1])}a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0Z`
  }
  if (b.dress === 'coat') {
    // The lapel's edge and the cut-away front.
    const l0 = along(neck, u, 1, fr, h * 0.86)
    const l1 = along(neck, u, 20, fr, h * 0.66)
    cuts += gouge(l0[0], l0[1], l1[0], l1[1], 0.7)
    const c0 = along(neck, u, -1.6, fr, h * 0.3)
    const c1 = along(neck, u, -0.4, fr, h * 0.82)
    const c2 = along(neck, u, 8, fr, h * 0.62)
    cuts += poly([c0, c1, c2])
  }
  if (look === 'jaggers') {
    // "He had a large watch-chain": heavy paper links slung across the
    // waistcoat, from a buttonhole near the front to the fob.
    const L = hip[1] - neck[1]
    const q0 = along(neck, u, L * 0.42, fr, h * 0.94)
    const qc = along(neck, u, L * 0.9, fr, h * 0.3)
    const q1 = along(neck, u, L * 0.58, fr, -h * 0.34)
    const onChain = (t: number): P => [
      (1 - t) ** 2 * q0[0] + 2 * (1 - t) * t * qc[0] + t * t * q1[0],
      (1 - t) ** 2 * q0[1] + 2 * (1 - t) * t * qc[1] + t * t * q1[1],
    ]
    for (let i = 0; i < 5; i++) {
      const l0 = onChain(i / 5 + 0.025)
      const l1 = onChain((i + 1) / 5 - 0.025)
      cuts += gouge(l0[0], l0[1], l1[0], l1[1], i % 2 ? 1 : 1.5)
    }
  }
  if (b.dress === 'uniform') {
    // The two white cross-belts, and the collar.
    const L = hip[1] - neck[1]
    const x0 = along(neck, u, 4, fr, -h * 0.7)
    const x1 = along(hip, u, -2, fr, h * 0.7)
    const y0 = along(neck, u, 4, fr, h * 0.7)
    const y1 = along(hip, u, -2, fr, -h * 0.7)
    cuts += gouge(x0[0], x0[1], x1[0], x1[1], 2.2) + gouge(y0[0], y0[1], y1[0], y1[1], 2.2)
    const pl = along(neck, u, L * 0.5, fr, 0)
    cuts += `M${n(pl[0] - 2.4)} ${n(pl[1])}a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0Z`
  }
  if (b.dress === 'grey') {
    cuts += hatchBand(neck, [hip[0], hip[1] + 4], F.width * 0.9, 3.8)
    for (const leg of [b.legs.far, b.legs.near]) {
      cuts += hatchBand(leg[0], leg[1], F.leg, 4.4)
      cuts += hatchBand(leg[1], leg[2], F.leg, 4.4)
    }
    const fa = b.far.pts
    if (fa.length >= 3)
      cuts += hatchBand(fa[0], fa[1], F.arm, 4.4) + hatchBand(fa[1], fa[2], F.arm, 4.4)
    const na = b.nearArm.pts
    if (na.length >= 3)
      nearCuts += hatchBand(na[0], na[1], F.arm, 4.4) + hatchBand(na[1], na[2], F.arm, 4.4)
  }
  if (b.dress === 'forge' || pose.apron) {
    // The leather apron's strap and a fold, and the shirt's collar.
    const s0 = along(neck, u, -1, fr, h * 0.1)
    const s1 = along(neck, u, 9, fr, h * 0.6)
    cuts += gouge(s0[0], s0[1], s1[0], s1[1], 0.7)
    const f0 = along(hip, u, 4, fr, h * 0.9)
    const f1 = along(hip, u, (hip[1] - neck[1]) * 0.5, fr, h * 1.06)
    cuts += gouge(f0[0], f0[1], f1[0], f1[1], 0.6)
  }
  // Mrs Joe's apron and its "square impregnable bib ... stuck full of pins and needles".
  let apronPaper = ''
  let pins = ''
  if (look === 'mrsjoe' && pose.apron !== false && !pose.seated) {
    const L = hip[1] - neck[1]
    apronPaper = poly([
      along(neck, u, 8, fr, h * 0.2),
      along(neck, u, 8, fr, h * 1.02),
      along(neck, u, L * 0.4, fr, h * 1.08),
      along(neck, u, L * 0.42, fr, h * 1.3),
      along(neck, u, L * 1.9, fr, h * 1.5),
      along(neck, u, L * 1.92, fr, -h * 0.1),
      along(neck, u, L * 0.44, fr, -h * 0.2),
      along(neck, u, L * 0.4, fr, h * 0.2),
    ])
    const r = rng(8102)
    for (let i = 0; i < 9; i++) {
      const q = along(neck, u, 11 + between(r, 0, L * 0.26), fr, h * between(r, 0.32, 0.92))
      pins += `M${n(q[0])} ${n(q[1])}l${n(between(r, 1.6, 2.6))} ${n(between(r, -1, 1))}`
    }
  }
  if (look === 'mrsjoe' && pose.apron !== false && pose.seated) {
    const L = hip[1] - neck[1]
    apronPaper = poly([
      along(neck, u, 8, fr, h * 0.2),
      along(neck, u, 8, fr, h * 1.02),
      along(neck, u, L * 0.4, fr, h * 1.08),
      along(neck, u, L * 0.4, fr, -h * 0.2),
    ])
    const r = rng(8102)
    for (let i = 0; i < 7; i++) {
      const q = along(neck, u, 11 + between(r, 0, L * 0.24), fr, h * between(r, 0.32, 0.92))
      pins += `M${n(q[0])} ${n(q[1])}l${n(between(r, 1.6, 2.6))} ${n(between(r, -1, 1))}`
    }
  }
  // Miss Havisham's dress: lace at the bodice and folds down the skirt, in ink.
  if (b.dress === 'bridal') {
    const L = hip[1] - neck[1]
    const w0 = along(neck, u, L * 0.36, fr, -h)
    const w1 = along(neck, u, L * 0.36, fr, h * 1.1)
    inkCuts += `M${pt(w0)}L${pt(w1)}`
    if (pose.seated) {
      // Seated, the folds run over the lap to the knee and fall from the knee
      // to the floor. (They first ran straight down from the waist, as a
      // standing figure's do, through the lap to the floor, and she read as
      // standing in front of her seat; 10 October 2026.)
      const knee = b.legs.near[1]
      const foot = Math.max(b.legs.far[2][1], b.legs.near[2][1])
      const folds: [P, P][] = [
        [
          [hip[0] + 4, hip[1] - 7],
          [knee[0] - 2, knee[1] - 4],
        ],
        [
          [knee[0] + 1, knee[1] + 6],
          [knee[0] + 3, foot - 3],
        ],
        [
          [knee[0] - 8, knee[1] + 8],
          [knee[0] - 9, foot - 3],
        ],
      ]
      for (const [q0, q1] of folds) inkCuts += `M${pt(q0)}L${pt(q1)}`
    } else {
      for (const [a, c] of [
        [0.5, 0.5],
        [0.55, -0.3],
        [0.6, 1.1],
      ] as [number, number][]) {
        const q0 = along(neck, u, L * a, fr, h * c)
        const q1 = along(neck, u, L * 2.2, fr, h * c * 1.7)
        inkCuts += `M${pt(q0)}L${pt(q1)}`
      }
    }
  }
  // The leg-iron.
  const iron = pose.iron ? legIron(pose.iron === 'near' ? b.legs.near : b.legs.far, F.leg) : null
  // The handcuffs, round both wrists.
  let cuffs = ''
  if (pose.cuffs) {
    const w1 = b.far.pts[b.far.pts.length - 1]
    const w2 = b.nearArm.pts[b.nearArm.pts.length - 1]
    const ring = (q: P) => `M${n(q[0] - 3.6)} ${n(q[1])}a3.6 3.6 0 1 0 7.2 0a3.6 3.6 0 1 0 -7.2 0Z`
    cuffs = ring(w1) + ring(w2) + `M${pt(w1)}L${pt(w2)}`
  }

  const headFeatures = (
    <g transform={b.headT}>
      {look === 'pip' && <path d={PIP_HAIR_LINES} fill="none" stroke={PAPER} strokeWidth={1.1} />}
      {look === 'herbert' && <path d={PALE_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />}
      {look === 'startop' && <path d={HAIR_LINES} fill="none" stroke={PAPER} strokeWidth={1.2} />}
      {look === 'orlick' && (
        <path d={ORLICK_HAIR_LINES} fill="none" stroke={PAPER} strokeWidth={1.1} />
      )}
      {look === 'biddy' && (
        <>
          <path d={BIDDY_HAIR_LINES} fill="none" stroke={PAPER} strokeWidth={1} />
          <path d={BIDDY_STRANDS} fill="none" stroke={PAPER} strokeWidth={0.9} />
        </>
      )}
      {look === 'joe' && (
        <>
          <path d={JOE_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
          <path d={JOE_CURL_TURNS} fill="none" stroke={INK} strokeWidth={0.8} />
        </>
      )}
      {look === 'magwitch' && <path d={RAG_FOLDS} fill="none" stroke={INK} strokeWidth={0.9} />}
      {look === 'mrsjoe' && (
        <>
          <path d={MRSJOE_CAP_FRILL} fill="none" stroke={INK} strokeWidth={0.9} />
          <path d={MRSJOE_HAIR_LINES} fill="none" stroke={PAPER} strokeWidth={0.9} />
        </>
      )}
      {look === 'havisham' && (
        <>
          <path d={VEIL_FOLDS} fill="none" stroke={INK} strokeWidth={0.8} />
          <path d={HAVISHAM_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
          {BRIDAL_FLOWERS.map(([cx, cy, r]) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r={r} fill={PAPER} stroke={INK} strokeWidth={0.9} />
              <circle cx={cx} cy={cy} r={r * 0.36} fill={INK} />
            </g>
          ))}
          <path d={HAVISHAM_FACE.socket} fill={INK} />
          <path d={HAVISHAM_FACE.glint} fill={PAPER} />
          <path
            d={HAVISHAM_FACE.brow + HAVISHAM_FACE.hollow + HAVISHAM_FACE.mouth}
            fill="none"
            stroke={INK}
            strokeWidth={1}
            strokeLinecap="round"
          />
        </>
      )}
      {look === 'estella' && (
        <path d={pose.age === 'woman' ? ESTELLA_UP_STRANDS : ESTELLA_STRANDS} fill={PAPER} />
      )}
      {look === 'jaggers' && (
        <path d={JAGGERS_SHINE + JAGGERS_FRINGE + JAGGERS_BRISTLES + JAGGERS_MOUTH} fill={PAPER} />
      )}
      {!b.woman && look !== 'magwitch' && look !== 'magwitch60' && look !== 'joe' && (
        <path d={EAR} fill="none" stroke={feat} strokeWidth={1.1} />
      )}
      {look === 'magwitch' && (
        <path d={EAR} transform="translate(0 2)" fill="none" stroke={feat} strokeWidth={1.1} />
      )}
      {look === 'magwitch60' && (
        <>
          <path d={EAR} transform="translate(0 2)" fill="none" stroke={feat} strokeWidth={1.1} />
          <path d={SIXTY_SHINE + SIXTY_FURROWS} fill={feat} />
        </>
      )}
      {look !== 'havisham' &&
        eye !== 'none' &&
        (eye === 'glare' ? (
          <>
            <path d={GLARE_EYE} fill={feat} />
            <path d={GLARE_PUPIL} fill={INK} />
          </>
        ) : eye === 'wide' ? (
          b.skin === 'ink' ? (
            <>
              <path d={EYE_WIDE} fill={PAPER} />
              <path d={EYE_WIDE_PUPIL} fill={INK} />
            </>
          ) : (
            <>
              <path d={EYE_WIDE} fill="none" stroke={INK} strokeWidth={0.9} />
              <path d={EYE_WIDE_PUPIL} fill={INK} />
            </>
          )
        ) : eye === 'proud' ? (
          <>
            <path d={EYE_PROUD} fill="none" stroke={INK} strokeWidth={1.1} />
            <path d="M9.6 -2.9a1.1 1 0 1 0 2.2 0Z" fill={INK} />
          </>
        ) : eye === 'open' ? (
          b.skin === 'paper' ? (
            <>
              <path d={EYE_LID} fill="none" stroke={INK} strokeWidth={0.9} />
              <path d={EYE_PUPIL} fill={INK} />
            </>
          ) : (
            <path d={EYE} fill={feat} />
          )
        ) : (
          <path d={EYE_DOWN} fill={feat} />
        ))}
      {look !== 'havisham' &&
        (eye === 'glare' || (look === 'magwitch60' && brow === 'plain') ? (
          <path d={GLARE_BROW} fill={feat} />
        ) : brow === 'up' ? (
          <path d={BROW_UP} fill={feat} />
        ) : brow === 'frown' ? (
          <path d={FROWN} fill={feat} />
        ) : (
          <path d={b.woman || look === 'pip' ? BROW_FINE : BROW} fill={feat} />
        ))}
      {(look === 'magwitch' || look === 'magwitch60' || look === 'orlick') && (
        <path d={HARD_CHEEK} fill={feat} />
      )}
      {b.skin === 'paper' && look !== 'havisham' && (
        <path d={MOUTH_PAPER} fill="none" stroke={INK} strokeWidth={1} />
      )}
      {pose.tear && <path d={TEAR} fill={PAPER} />}
      {(pose.flush ?? look === 'mrsjoe') && (
        <ellipse cx={FLUSH[0]} cy={FLUSH[1]} rx={FLUSH[2]} ry={FLUSH[3]} fill={RED} />
      )}
      {b.hat === 'top' && <path d={TOP_HAT_BAND} fill={PAPER} />}
      {b.hat === 'shako' && (
        <>
          <path d={SHAKO_PLATE} fill={PAPER} />
          <path d={SHAKO_BAND} fill={PAPER} />
        </>
      )}
    </g>
  )

  return (
    <g transform={transform} className={className} style={style}>
      <Cut parts={b.back}>
        {cuts && <path d={cuts} fill={PAPER} />}
        {kerchief && (
          <path d={kerchief} fill={PAPER} stroke={INK} strokeWidth={0.9} strokeLinejoin="round" />
        )}
        {inkCuts && <path d={inkCuts} fill="none" stroke={INK} strokeWidth={0.8} />}
        {apronPaper && (
          <path d={apronPaper} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
        )}
        {pins && <path d={pins} fill="none" stroke={INK} strokeWidth={0.8} strokeLinecap="round" />}
        {iron && (
          <>
            <path d={iron.links} fill="none" stroke={PAPER} strokeWidth={3} />
            <path d={iron.links} fill="none" stroke={INK} strokeWidth={1.3} />
            <path d={iron.ring} transform={iron.tr} fill={INK} stroke={PAPER} strokeWidth={1.5} />
            <path
              d={iron.rivets}
              transform={iron.tr}
              stroke={PAPER}
              strokeWidth={1.6}
              strokeLinecap="round"
            />
          </>
        )}
        {headFeatures}
      </Cut>
      <Cut parts={b.near}>{nearCuts && <path d={nearCuts} fill={PAPER} />}</Cut>
      {cuffs && (
        <>
          <path d={cuffs} fill="none" stroke={PAPER} strokeWidth={3.4} />
          <path d={cuffs} fill="none" stroke={INK} strokeWidth={1.6} />
        </>
      )}
      {children}
    </g>
  )
}
