import type { CSSProperties, ReactNode } from 'react'

import { between, gouge, ribbon, rng } from '@/components/comics/linocut/carve'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'

import {
  Figure,
  GRIP_HAND,
  OPEN_HAND,
  SHAKE_CUTS,
  SHAKE_HAND,
  TOP_HAT,
  TOP_HAT_BAND,
  boot,
  coat,
  gent,
  handAt,
  headAt,
  type P,
  type Part,
} from '../../jekyll-and-hyde/panels/people'
import { COLLAR, floorBoards } from '../../jekyll-and-hyde/panels/investigation-kit'

/**
 * The people of The Sign of Four, cut from the text's own descriptions and
 * shared by every panel, so that a student meets the same man from chapter to
 * chapter. Drawn first for the panels of moments 1 to 5 (Chapters 1 to 4);
 * every other panel of this text draws its recurring characters from here. A
 * change to any shape below changes every panel that uses it: preview them
 * all before changing one. An artist who adds a person adds them at the end,
 * under a heading of their own, with the words they come from.
 *
 * The novel is set in London in 1888, the same years as Jekyll and Hyde, so
 * the gentlemen are cut with that text's figure machinery (gent(), Figure,
 * the hands and the top hat, re-exported below): one artist's hand across
 * the site, and one way of building a man from his joints. A figure is cut as
 * the reference panel cuts Fred (src/data/comics/a-christmas-carol/
 * counting-house.tsx): a paper halo round every part, then the parts in ink,
 * then the paper cuts of folds and features.
 *
 * ── THE RULES FOR THIS TEXT (every artist reads these first) ────────────────
 * - TONGA. The narrators describe the Andaman Islander in racist terms, with
 *   animal comparisons. The art never adopts them. He is drawn as a small
 *   man, with the same care and the same dignity as every other figure: no
 *   animal features, no caricature, no exaggerated face. None of the
 *   narrators' slurs or dehumanising descriptions is ever a quotation, a
 *   caption, a marker phrase or an alt text.
 * - COCAINE. Holmes's cocaine (Chapter 1, and the last page) is left to the
 *   words. Never draw a syringe, a needle, an arm bared for it or an
 *   injection. The neat morocco case may be shown, always closed.
 * - DEATHS OFF THE PAGE. Bartholomew Sholto is never drawn dead: show the
 *   locked room, the ladder, the faces of those who find him, or the thorn
 *   in Holmes's lens. Major Sholto's death and Captain Morstan's are told,
 *   never drawn. The Agra fort and the Mutiny are suggested, with no bodies
 *   and no killing. Tonga's end in the river chase is suggested by the
 *   launch and the smoke of the shots, never a body.
 * - RED on a mouth or a chin reads as blood at a glance. A flush goes on the
 *   cheekbone (WATSON_FLUSH), never the mouth.
 *
 * ── WHAT THE TEXT SAYS, and so what is drawn ─────────────────────────────────
 * (the held edition, src/data/full-texts/the-sign-of-four.ts)
 *
 * - HOLMES: "his clear-cut, hawklike features" (Chapter 2); "his long thin
 *   nose", "his beady eyes gleaming and deep-set like those of a bird"
 *   (Chapter 6); "his drawn brow" (Chapter 3); "his long, white, nervous
 *   fingers" (Chapter 1). So a lean face with a high bridge to the nose that
 *   hooks at the tip, a deep-set eye under a heavy brow, and his hands cut in
 *   PAPER, the one pair of white hands among the men (HolmesHands). He is the
 *   leanest man in any panel (body width 26). His hair is not described, so
 *   it is plain and dark, brushed back from a high forehead. No deerstalker
 *   and no cape: the text gives him neither, and they come from illustrators
 *   and films. Out of doors he wears the plain top hat of 1888.
 * - WATSON: an army surgeon, "an army surgeon with a weak leg and a weaker
 *   banking-account" (Chapter 2), "nursing my wounded leg. I had a Jezail
 *   bullet through it" (Chapter 1); he takes "my hat and my heaviest stick"
 *   (Chapter 3). His face is not described, so it is plain: a fuller, rounder
 *   head than Holmes's, a short straight nose, a square jaw, no moustache
 *   (none is in the text). He is broader than Holmes (body width 34). Out of
 *   doors he wears a plain bowler and carries his heavy stick. He is the man
 *   of feeling in a novel set on "reason versus emotion", so when the text
 *   says he is moved (hurt by the watch, drawn to Mary) the spot colour
 *   flushes his cheekbone (WATSON_FLUSH); Holmes is never flushed.
 * - MARY MORSTAN: "a blonde young lady, small, dainty, well gloved"; "The
 *   dress was a sombre greyish beige, untrimmed and unbraided, and she wore a
 *   small turban of the same dull hue, relieved only by a suspicion of white
 *   feather in the side" (Chapter 2); "muffled in a dark cloak" (Chapter 3).
 *   So her hair is PAPER, her small turban is ink with a white feather at the
 *   side, her plain dress is ink cut with fine upright lines (the only
 *   greyish figure among the black coats), and her gloves are PAPER. Her
 *   "large blue eyes" are left to the words: the print has no blue. She is
 *   smaller than the men.
 * - THADDEUS SHOLTO: "a small man with a very high head, a bristle of red
 *   hair all round the fringe of it, and a bald, shining scalp which shot out
 *   from among it like a mountain-peak from fir-trees"; "Nature had given him
 *   a pendulous lip"; "his weak, watery blue eyes" (Chapter 4). So his head
 *   is drawn taller than anyone's, the bald dome cut in PAPER (shining), the
 *   fringe of bristles round it printed in RED (the text's own colour, well
 *   above and behind his mouth), and his lower lip hangs. Going out he wears
 *   "a very long befrogged topcoat with Astrakhan collar and cuffs" and "a
 *   rabbit-skin cap with hanging lappets which covered the ears, so that no
 *   part of him was visible save his mobile and peaky face" (THADDEUS_CAP).
 *
 * Nobody's dress is described beyond that, so the gentlemen wear the plain
 * frock coat or greatcoat of London in 1888, and nothing is taken from a
 * film, a television series or a stage production.
 */

export {
  Figure,
  GRIP_HAND,
  OPEN_HAND,
  SHAKE_CUTS,
  SHAKE_HAND,
  TOP_HAT,
  TOP_HAT_BAND,
  COLLAR,
  boot,
  coat,
  floorBoards,
  gent,
  handAt,
  headAt,
  type P,
  type Part,
}

// ── HEADS ───────────────────────────────────────────────────────────────────
// Each in profile facing right, centred on (0, 0), crown near y -21, chin near
// y 22, the base of the neck at y 26: the frame of the Jekyll and Hyde heads,
// so gent() and TOP_HAT fit them. Features are pushed out further than life,
// because the rough edge of the print eats about two units.

/**
 * Holmes: a lean head, a high forehead, "clear-cut, hawklike features": the
 * nose rises from the brow in a high bridge and hooks down at the tip.
 */
export const HEAD_HOLMES =
  'M-8 26C-9 20 -13.5 15 -15 6C-16.5 -10 -8 -22.5 3 -22.5C11 -22.5 15.5 -17 15.5 -10L16 -6C19.4 -3.6 22.6 1 24.2 5.4C24.6 6.8 23.2 7.8 21.6 7.4L16.8 7.8L17.2 10.2L15.8 11.6L17 14C17 19 14.5 23 9.5 23.5L7 26Z'
/**
 * His features in paper: a heavy brow drawn down over a small deep-set eye
 * with a glint in it ("beady eyes gleaming and deep-set like those of a
 * bird"), the hollow of a lean cheek, a thin straight mouth, the ear.
 */
export const HOLMES_CUTS =
  gouge(5, -8.6, 15, -7.2, 1.25, 0.3) +
  'M7.6 -3.4Q10.6 -5.4 13.2 -3.6Q10.6 -1.8 7.6 -3.4Z' +
  gouge(4.4, 2.4, 6, 11.6, 0.7, 1.2) +
  gouge(10.2, 12.4, 16, 12.2, 0.5) +
  gouge(-5.5, -1, -4.5, 7, 0.7, -1.4)
/** The pupil in the eye, cut in ink over HOLMES_CUTS: the "gleaming" eye. */
export const HOLMES_PUPIL = 'M11.2 -3.6a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0 -2.4 0Z'
/** His dark hair, brushed back from a high forehead: paper strands. */
export const HOLMES_HAIR =
  gouge(7, -19.6, -8, -15.6, 0.6, 1.4) +
  gouge(5, -16.4, -13.4, -6, 0.65, 2.2) +
  gouge(-3.6, -8.4, -14, 2.4, 0.55, 1.4)

/**
 * Watson: a fuller, rounder head than Holmes's, a short straight nose and a
 * square jaw. The text never describes his face, so it is plain.
 */
export const HEAD_WATSON =
  'M-9 26C-10.5 20 -15.5 15 -16.5 6C-18 -9 -9 -20.5 2.5 -20.5C11 -20.5 16 -15.5 16 -9L16.2 -5.5L21.6 4.4L16.6 6L17 8.8L15.6 10.2L17 12.6C17.4 18.4 15.4 22.6 9.6 23.6L7.6 26Z'
/** His features: a level brow, an open eye, a line at the cheek, the ear. */
export const WATSON_CUTS =
  gouge(5.6, -8, 14.2, -7.4, 1) +
  'M6.8 -3.6Q10 -6 13 -4Q10 -1.8 6.8 -3.6Z' +
  gouge(9.4, 11.6, 15.6, 11.2, 0.55) +
  gouge(8.6, 3.4, 9.6, 8.6, 0.45, -0.6) +
  gouge(-6, -1, -5, 7, 0.7, -1.4)
/** The pupil, in ink over WATSON_CUTS. */
export const WATSON_PUPIL = 'M10.4 -3.8a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 1 0 -2.2 0Z'
/** His hair, short and parted: paper strands combed back from the parting. */
export const WATSON_HAIR =
  gouge(9, -17.6, -6, -18.4, 0.55, -1) +
  gouge(8, -14.4, -13, -8, 0.65, 1.6) +
  gouge(-2, -11, -15, 0, 0.6, 1.8) +
  gouge(-8, -3, -13.6, 8, 0.5, 0.6)
/**
 * The flush of feeling on his cheekbone: two short strokes of the spot
 * colour, well above the mouth. Stroke with RED at 2.2, round caps. (A round
 * red cheek read as a clown's on Hyde; red at the mouth reads as blood.)
 */
export const WATSON_FLUSH = 'M3.4 3.2L8.6 4.4M4 6.2L8 7.1'

/**
 * Watson's bowler: a hard, round crown and a brim curled up at the sides.
 * In the frame of the heads.
 */
export const BOWLER =
  'M-19 -10.4C-18 -13.4 -15.2 -13.8 -13.2 -13.4C-14.2 -25 -7.6 -32 1.6 -32C10.6 -32 15.6 -25 14.4 -13.6C16.6 -13.8 19.6 -13 20.4 -9.6C10 -7.4 -9 -7.6 -19 -10.4Z'
export const BOWLER_BAND = gouge(-13, -16.4, 14.2, -16.4, 0.9)

/** A young woman's face, Mary Morstan's: small and fine, a soft chin. */
export const HEAD_MARY =
  'M-7 24C-9 19 -13.5 15 -14.5 6C-15.5 -8.5 -7 -19 3 -19C10.8 -19 15 -14.4 15 -8.6L15.2 -4.8L19.8 3.6L15.4 5.2L15.8 8L14.6 9.4L15.6 11.6C15.4 16.4 12.4 19 8 19.4L6 24Z'
/**
 * Her features: a fine brow, a large eye ("her large blue eyes"), a small
 * mouth, and the ear, set in front of her hair.
 */
export const MARY_CUTS =
  gouge(9, -7.9, 14.4, -7.3, 0.7) +
  'M7.6 -3.4Q10.8 -6.2 13.8 -3.6Q10.8 -1.2 7.6 -3.4Z' +
  gouge(10.6, 10.4, 14.8, 10, 0.45) +
  gouge(0.6, -2.2, 1.2, 4.6, 0.6, -1.2)
export const MARY_PUPIL = 'M9.65 -3.6a1.35 1.35 0 1 0 2.7 0a1.35 1.35 0 1 0 -2.7 0Z'
/**
 * "a blonde young lady": her fair hair in PAPER, drawn back from the brow
 * under the turban, over the ear and gathered in a knot at the nape, as her
 * portrait has it (../portraits/mary-morstan.tsx). Fill with PAPER, then
 * stroke MARY_HAIR_LINES over it in ink.
 *
 * REDRAWN on 2 October 2026. The first cut was a thin crescent at the back of
 * the skull and a round knot: on a seated Mary at panel size the crescent
 * merged with the paper outline round her head, so her hair did not show at
 * all and the knot read as a large ear. Now the hair fills the back of the
 * head, from behind the temple over the ear to the knot. It stops behind the
 * temple on purpose: carried forward across the forehead it read, on her
 * dark face, as a band tied over her eyes.
 */
export const MARY_HAIR =
  'M6 -12.4C4.6 -10.4 4 -8 3.8 -5.6C3 -4.6 1.8 -4.2 0.6 -3.8C-1.6 -2 -2.6 2 -3 5.6C-3.4 8.6 -5 11 -8 12.4L-12.6 11.6C-14.8 7.6 -15.6 0 -14.6 -6C-14 -9.6 -13.4 -12.4 -12.6 -13.6Z' +
  'M-23 3.4a5.6 5.4 0 1 0 11.2 0a5.6 5.4 0 1 0 -11.2 0Z'
/** The strands of her hair, combed back to the knot, and the twist of the knot. */
export const MARY_HAIR_LINES =
  'M4.8 -11.6C-1 -11.2 -7.4 -9.2 -13 -5M3.4 -8.4C-2 -8 -8 -5.6 -13.4 -1.6M1.4 -5C-3 -4.2 -8.4 -1.8 -13.4 2' +
  'M-1.8 0.4C-5 2.4 -9.4 4.2 -13.2 5.2M-3.6 6.6C-6 8.6 -9.2 9.8 -12.6 9.4' +
  'M-21.8 2.6Q-19.4 -1.2 -14.6 -0.4M-21.2 6.8Q-17.2 5.4 -13.6 2.8'
/**
 * Her face when the text says it went white ("her face grew white to the
 * lips", "deadly white", Chapter 4): the face in front of her hair, cut in
 * PAPER with an ink edge. MARY_PALE_LINES are its features, stroked in ink.
 */
export const MARY_FACE_PALE =
  'M13.6 -13.4C14.4 -12 15 -10.4 15 -8.6L15.2 -4.8L19.8 3.6L15.4 5.2L15.8 8L14.6 9.4L15.6 11.6C15.4 16.4 12.4 19 8 19.4C4.4 19.2 1.6 17 0 13C-1.4 10.4 -2.6 8.4 -3 5.6C-2.6 2 -1.6 -2 0.6 -3.8C1.8 -4.2 3 -4.6 3.8 -5.6C4 -8 4.6 -10.4 6 -12.4Z'
export const MARY_PALE_LINES = 'M10.6 10.6L14.8 10.2M2 -2.4C-0.6 -2 -1.2 3 1.2 4.6'
/**
 * "a small turban of the same dull hue": a small, close, round crown set on
 * top of the head, tipped a little forward. Fill with INK; its dull hue is cut
 * with MARY_TURBAN_CUTS in paper, the same upright cuts as her dress and as
 * the turban in her portrait.
 */
export const MARY_TURBAN =
  'M-12.6 -13.6C-12.4 -22.6 -5.6 -28.4 2.4 -28.2C9.4 -28 13.8 -23 14 -14.6C9 -12 -6.6 -11 -12.6 -13.6Z'
export const MARY_TURBAN_CUTS =
  gouge(-9.6, -13.8, -9.6, -20, 0.5) +
  gouge(-6.2, -13, -6.2, -23.6, 0.5) +
  gouge(-2.8, -12.8, -2.8, -25.8, 0.5) +
  gouge(0.6, -12.7, 0.6, -26.8, 0.5) +
  gouge(4, -12.9, 4, -26.6, 0.5) +
  gouge(7.4, -13.3, 7.4, -25.4, 0.5) +
  gouge(10.8, -14, 10.8, -22.6, 0.5)
/**
 * "relieved only by a suspicion of white feather in the side": a small plume
 * from the side of the turban, curling up and back over it, in PAPER, with
 * its quill and barbs cut in ink. (The first cut, a plain pointed leaf on
 * top of the turban, read as a horn at panel size.)
 */
export const MARY_FEATHER =
  'M-2.1 -19.7C-2.5 -22.8 -4.1 -26.9 -7.1 -29.4C-9.2 -31.2 -12 -31.8 -13.1 -29.9C-13.4 -29 -13.1 -28.2 -12.6 -27.7C-12 -28.7 -10.8 -29 -9.8 -28.3C-7.7 -26.7 -5.6 -23.3 -4.4 -19.7Z'
export const MARY_FEATHER_QUILL =
  'M-3.2 -19.8C-4.1 -24 -6.8 -28.2 -11.1 -29.6M-5.1 -25.6L-4.2 -26.7M-6.7 -27.6L-6.2 -29'
/**
 * The crown of her fair hair, bare indoors at Mrs Forrester's (Chapter 9;
 * Chapter 11 has "the rich coils of her luxuriant hair"): the part the turban
 * covers elsewhere, from the hairline at the temple over the top of the head
 * to MARY_HAIR at the back. Fill with PAPER edged in ink; stroke
 * MARY_CROWN_LINES in ink. The same cut as "The empty box" uses, so she is
 * the same woman in both of the Camberwell panels; Mary({ bare }) draws it.
 */
export const MARY_CROWN =
  'M13.6 -13.4C13.6 -17.8 9.6 -21 3.4 -21.2C-4.6 -21.4 -10.6 -18.2 -13 -13.6C-6 -14.4 6 -14.6 13.6 -13.4Z'
export const MARY_CROWN_LINES =
  'M12.2 -15.4C6 -17.8 -3 -18 -10.6 -15M9.6 -18.6C3.6 -20 -3.6 -19.8 -8.6 -17.6M13 -13.8C6 -15.6 -4 -15.8 -12 -13.4M6 -20.4C1 -21 -4 -20.6 -7.6 -19.2'

/**
 * Thaddeus Sholto: "a very high head". The skull rises far higher than
 * anyone's, the face below it small and "peaky", and "a pendulous lip"
 * hangs forward under a small nose. Fill with INK; THADDEUS_SCALP is laid
 * over the dome in paper and THADDEUS_FRINGE round it in red.
 */
export const HEAD_THADDEUS =
  'M-7 25C-8.5 19 -12.6 15 -13.6 7C-14.6 -4 -13.4 -17 -9.4 -26C-6 -33 -0.6 -36 4 -35.4C9.4 -34.4 12.8 -27 14 -17L14.6 -8.4L15 -5L20.2 3.4L15.6 5L15.8 7.2L18 9.2L17.6 11.6L14.8 12.2L15.2 14.4C14.8 18.2 12.4 20.6 8 21L6 25Z'
/**
 * "a bald, shining scalp which shot out from among it like a mountain-peak
 * from fir-trees": the dome in PAPER, from the forehead over the crown and
 * down the back of the skull to the fringe, inset from the head's edge so a
 * rim of ink keeps it apart from the paper outline round the figure. Fill
 * with PAPER, stroke THADDEUS_SCALP_LINE (its rim and a shine) in ink.
 *
 * REDRAWN on 2 October 2026. The first cut stopped at a level line high on
 * the head, so the bald dome read as a small pale cap on a dark head. Now it
 * comes down to the brow in front and to the fringe behind, and it is the
 * biggest pale shape on him, as the peak is in the text.
 */
export const THADDEUS_SCALP =
  'M12.8 -10.8C13.2 -16 12.8 -25 9.6 -31.4C7.8 -33.4 5.6 -33.8 3.8 -33.6C-1.6 -34.4 -6.6 -30.6 -9.6 -23.6C-11.6 -18.6 -12.8 -11.6 -13.4 -5C-12.2 -8.4 -10.6 -11.4 -7.8 -13.4C-5.6 -14.6 -2.4 -14.4 0.2 -12.8C1.6 -11.6 3 -10.6 5 -10.4C8 -10.2 10.6 -10.6 12.8 -10.8Z'
export const THADDEUS_SCALP_LINE =
  'M12.8 -10.8C13.2 -16 12.8 -25 9.6 -31.4C7.8 -33.4 5.6 -33.8 3.8 -33.6C-1.6 -34.4 -6.6 -30.6 -9.6 -23.6C-11.6 -18.6 -12.8 -11.6 -13.4 -5M-2.6 -28.6Q0.6 -31.2 4.4 -31'
/**
 * "a bristle of red hair all round the fringe of it": a band of red from the
 * temple, round the back of the skull, to the nape, with the bristles
 * standing out of it, like the fir-trees round the foot of the text's
 * mountain-peak. Fill with RED. It sits above the ear and behind the eye,
 * well away from the mouth.
 *
 * REDRAWN on 2 October 2026. The first cut set eleven large, even triangles
 * in a level ring across the top of the head, standing straight up, and at
 * panel size that read as a red crown. Now the ring runs lower at the back,
 * as a fringe does, and its bristles are many, thin and uneven, swept up and
 * back.
 */
export const THADDEUS_FRINGE = (() => {
  const q = (v: number) => Math.round(v * 10) / 10
  // the fringe line, from the temple round the back of the skull to the nape,
  // with each bristle's direction (degrees; 0 is forward, -90 straight up)
  // and its length
  const line: [number, number, number, number][] = [
    [1.2, -7.2, -95, 3.6],
    [0.6, -10.2, -105, 4.6],
    [-1.6, -12, -115, 4],
    [-4.6, -12.6, -125, 5],
    [-7.8, -12, -138, 4.2],
    [-10.6, -10, -150, 5],
    [-12.6, -7, -162, 4.2],
    [-13.8, -3.4, -172, 4.8],
    [-14.1, 0.4, 180, 4],
    [-13.8, 4, 172, 4.2],
    [-13, 7.4, 164, 3.2],
  ]
  const spike = (x: number, y: number, a: number, len: number, w: number) => {
    const r = (a * Math.PI) / 180
    const ux = Math.cos(r)
    const uy = Math.sin(r)
    // start at the band's outer edge
    const bx = x + ux * 1.2
    const by = y + uy * 1.2
    return `M${q(bx - uy * w)} ${q(by + ux * w)}L${q(bx + ux * len)} ${q(by + uy * len)}L${q(bx + uy * w)} ${q(by - ux * w)}Z`
  }
  let d = ribbon(
    line.map(([x, y]) => [x, y]),
    3.6,
    0.3,
  )
  line.forEach(([x, y, a, len], i) => {
    d += spike(x, y, a, len, 1.1)
    const next = line[i + 1]
    if (next) {
      // a shorter bristle between each pair, so the fringe is thick
      d += spike(
        (x + next[0]) / 2,
        (y + next[1]) / 2,
        (a + next[2] + (a * next[2] < 0 ? 360 : 0)) / 2,
        len * 0.6,
        0.8,
      )
    }
  })
  return d
})()
/**
 * His features in paper: a weak brow, the "weak, watery" eye with its lid
 * drooping, the line under the nose, the hanging lip (THADDEUS_FACE_CUTS),
 * and the ear under the fringe. Under his cap the ear is covered, so a panel
 * with THADDEUS_CAP cuts THADDEUS_FACE_CUTS alone.
 */
export const THADDEUS_FACE_CUTS =
  gouge(6.6, -8.4, 13.4, -7.4, 0.6, -0.4) +
  'M7.2 -3.6Q10.2 -5.2 13 -3.4Q10.2 -1.8 7.2 -3.6Z' +
  gouge(13.4, 9.6, 17, 10.6, 0.45)
export const THADDEUS_CUTS = THADDEUS_FACE_CUTS + gouge(-4.8, -2, -4, 5.4, 0.7, -1.4)
export const THADDEUS_PUPIL = 'M10.4 -3.2a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 1 0 -2.2 0Z'
/**
 * "a rabbit-skin cap with hanging lappets which covered the ears, so that no
 * part of him was visible save his mobile and peaky face": for the panels
 * after Chapter 4, where he is dressed to go out. In the frame of the heads,
 * in three pieces that a panel inks as parts of his figure: the crown and its
 * back flap (THADDEUS_CAP, as gent()'s `hat`), the band of fur turned up round
 * it (THADDEUS_CAP_BAND) and the lappet over the ear (THADDEUS_LAPPET), each
 * of the last two with a paper edge (`sep`). Then cut THADDEUS_CAP_FUR in
 * paper. It covers the fringe, the scalp and the ears, so none of them is
 * drawn under it; with the turned-up collar of his topcoat (drawn by the
 * panel) it leaves only the face.
 *
 * REDRAWN on 2 October 2026 (review). The cap was one black shape with seven
 * thin cuts, on a black face, so cap, face and lappets printed as one dome
 * down to his collar; above his very long coat he read at panel size as a
 * long-haired figure in a long dress (and Mary is not in that scene), and the
 * ear was cut on top of the lappet that covers it. Fur cut as falling strands
 * was tried next and read as hair. Now the cap is built as a cap: a band of
 * fur turned up round the crown, a lappet that hangs over the ear and ends in
 * a rounded edge of its own, and fur cut as short tufts turned every way, so
 * it is texture and not hair.
 */
export const THADDEUS_CAP =
  'M16.2 -10.2L16.8 -16.6C16.6 -27 10.6 -36.6 4 -36.8C-2.4 -37 -8.8 -32 -12.2 -24C-15.6 -16 -16.8 -6 -16.4 2C-16.2 7 -15.6 11 -14.6 13.4L-6 13.8L-4 -8.8L9.6 -10.6Z'
/** The band of fur turned up round the crown, from the brow to the back of the head. */
export const THADDEUS_CAP_BAND =
  'M16.2 -10L17 -17.4C6 -19.4 -6 -17.4 -15.6 -11L-16.6 -3.4C-6.4 -10.2 5.8 -11.6 16.2 -10Z'
/** The lappet hanging from the band over the ear, its lower end rounded. */
export const THADDEUS_LAPPET =
  'M-9.6 -6.6L3.4 -8.8C4.8 -1.6 4.4 6 3 13C2.4 17.6 -0.4 20.4 -3.8 20.4C-7.4 20.4 -9.6 17.4 -10 13C-10.4 6 -10.4 -0.6 -9.6 -6.6Z'

/** Is (x, y) inside the polygon? */
function inPoly(poly: P[], x: number, y: number) {
  let hit = false
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i]
    const [xj, yj] = poly[j]
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit
  }
  return hit
}
/** The crown, the band and the lappet as polygons, for laying the fur inside each. */
const CAP_CROWN_POLY: P[] = [
  [16.6, -18.6],
  [15.4, -26],
  [11.8, -32.6],
  [6.6, -36.2],
  [1, -36.8],
  [-5, -34.8],
  [-9.6, -30],
  [-12.6, -23],
  [-14.8, -14.6],
]
const CAP_BACK_POLY: P[] = [
  [-16.4, -2],
  [-16.2, 4],
  [-15.6, 10],
  [-14.6, 13.2],
  [-10.6, 13.4],
  [-10.6, -3.6],
]
const CAP_BAND_POLY: P[] = [
  [16.2, -10.2],
  [16.9, -17.2],
  [6, -18.8],
  [-6, -16.8],
  [-15.6, -10.8],
  [-16.4, -3.8],
  [-6.4, -9.8],
  [5.8, -11.2],
]
const CAP_LAPPET_POLY: P[] = [
  [-9.6, -6.6],
  [3.4, -8.8],
  [4.6, -1.6],
  [4.2, 6],
  [2.8, 13],
  [0, 19],
  [-3.8, 20.2],
  [-7.6, 19],
  [-9.8, 13],
  [-10.2, 4],
]
/**
 * The rabbit-skin: on the crown, the back and the lappet, short tufts turned
 * every way, set in rows a little apart; on the band, short upright tufts, so
 * the band reads as the edge of the fur turned up. Each is kept inside its
 * piece so the paper edges stay clean. Seed 613.
 */
export const THADDEUS_CAP_FUR = (() => {
  const r = rng(613)
  const q = (v: number) => Math.round(v * 10) / 10
  let d = ''
  const lay = (poly: P[], step: number, len: [number, number], turn: [number, number]) => {
    const ys = poly.map(([, y]) => y)
    const xs = poly.map(([x]) => x)
    const inside = (x: number, y: number) =>
      inPoly(poly, x, y) &&
      inPoly(poly, x + 1, y) &&
      inPoly(poly, x - 1, y) &&
      inPoly(poly, x, y + 1) &&
      inPoly(poly, x, y - 1)
    for (let row = 0, y = Math.min(...ys); y < Math.max(...ys); row++, y += step) {
      for (let x = Math.min(...xs) + (row % 2) * step * 0.5; x < Math.max(...xs); x += step) {
        const x0 = x + between(r, -0.6, 0.6)
        const y0 = y + between(r, -0.6, 0.6)
        const a = (between(r, turn[0], turn[1]) * Math.PI) / 180
        const l = between(r, len[0], len[1])
        const x1 = x0 + Math.cos(a) * l
        const y1 = y0 + Math.sin(a) * l
        if (!inside(x0, y0) || !inside(x1, y1)) continue
        d += gouge(q(x0), q(y0), q(x1), q(y1), q(between(r, 0.4, 0.55)), q(between(r, -0.5, 0.5)))
      }
    }
  }
  lay(CAP_CROWN_POLY, 3.6, [1.6, 2.4], [0, 360])
  lay(CAP_BACK_POLY, 3.6, [1.6, 2.4], [0, 360])
  lay(CAP_LAPPET_POLY, 3.4, [1.6, 2.2], [0, 360])
  lay(CAP_BAND_POLY, 2.2, [2.4, 3.2], [-100, -80])
  return d
})()

// ── HANDS IN PAPER ──────────────────────────────────────────────────────────

/**
 * "his long, white, nervous fingers": Holmes's open hand, in the frame of the
 * J&H hands (the wrist at (0, 0), pointing along +x, the thumb on the -y
 * side), with longer, thinner fingers, every one apart.
 */
export const LONG_HAND: Part[] = [
  { d: 'M-0.8 -4C3 -5.2 6.5 -5.4 9.4 -4.6L9.6 4.4C6.5 5.2 3 5 -0.8 3.8Z' },
  { d: 'M9 -3.4L18.6 -6.6', w: 1.9 },
  { d: 'M9.4 -1.1L20.6 -2.4', w: 1.9 },
  { d: 'M9.4 1.3L20 2.4', w: 1.9 },
  { d: 'M9 3.6L16.8 6', w: 1.8 },
  { d: 'M2.4 -3.8L6 -8.4L9.2 -10', w: 2 },
]

/**
 * Hands in PAPER with a thin ink edge: Holmes's white fingers, Mary Morstan's
 * gloves. `parts` are J&H hand parts; each hand is placed by `t` (from
 * handAt). Drawn after the figure, so they sit on top of the coat.
 */
export function PaperHands({ hands }: { hands: { parts: Part[]; t: string }[] }) {
  const shape = (p: Part, colour: string, extra: number, key: string) =>
    p.w ? (
      <path
        key={key}
        d={p.d}
        fill="none"
        stroke={colour}
        strokeWidth={p.w + extra}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <path
        key={key}
        d={p.d}
        fill={colour}
        stroke={extra ? colour : undefined}
        strokeWidth={extra || undefined}
        strokeLinejoin="round"
      />
    )
  return (
    <>
      {hands.map((h, i) => (
        <g key={i} transform={h.t}>
          {h.parts.map((p, j) => shape(p, INK, 1.6, `e${j}`))}
          {h.parts.map((p, j) => shape(p, PAPER, 0, `f${j}`))}
        </g>
      ))}
    </>
  )
}

/**
 * "he put his finger-tips together": Holmes's two white hands with the
 * fingertips meeting, seen from the side, in a frame of their own: the near
 * wrist at (0, 0), the far wrist at (4, 3), the fingertips meeting at about
 * (-4, -20). Place it with a translate at the near wrist, and `scale(-1 1)`
 * for a Holmes facing left. Fill STEEPLE in PAPER with an ink edge, then cut
 * STEEPLE_LINES in ink between the fingers.
 */
export const STEEPLE =
  'M-3 2C-5.4 -2 -6.4 -8 -6 -14C-5.8 -17.6 -4.8 -20.4 -3.6 -21.8C-2.2 -21 -1.2 -18.6 -0.6 -15.4L0.2 -14L2.4 -12C4.2 -8 5.6 -3 6.4 2.6L4.6 5.4C2.6 5 0.4 4 -3 2Z'
export const STEEPLE_LINES =
  'M-3.4 -3Q-4.4 -11 -3.8 -19.6M-0.6 -4Q-1.4 -10 -1.6 -16M2 -2.4Q1.4 -7 0.4 -12.4'

/**
 * A plain dress of 1888, "untrimmed and unbraided", on the line from neck to
 * waist, for a woman standing: a fitted bodice, the skirt falling to the
 * floor at `floor`, with the gathered fullness at the back that the dress of
 * the year carried. `facing` is the way she looks.
 */
export function dressStanding(neck: P, waist: P, floor: number, facing: 1 | -1): string {
  const f = facing
  const [nx, ny] = neck
  const [wx, wy] = waist
  const q = (v: number) => Math.round(v * 10) / 10
  const X = (dx: number) => q(wx + f * dx)
  return (
    `M${q(nx - f * 3)} ${q(ny - 2)}` +
    `Q${q(nx + f * 9)} ${q(ny - 1)} ${q(nx + f * 10)} ${q(ny + 8)}` +
    `L${X(7)} ${wy}` +
    `C${X(10)} ${q(wy + 30)} ${X(16)} ${q(floor - 30)} ${X(20)} ${floor}` +
    `L${X(-24)} ${floor}` +
    `C${X(-24)} ${q(floor - 40)} ${X(-22)} ${q(wy + 30)} ${X(-17)} ${q(wy + 16)}` +
    `C${X(-22)} ${q(wy + 8)} ${X(-14)} ${q(wy + 1)} ${X(-7)} ${wy}` +
    `L${q(nx - f * 10)} ${q(ny + 8)}` +
    `Q${q(nx - f * 9)} ${q(ny - 1)} ${q(nx - f * 3)} ${q(ny - 2)}Z`
  )
}

/**
 * The same dress on a woman sitting: the bodice from neck to waist, the
 * skirt over the lap to `knee`, then down to the floor at `floor`, and back
 * under the seat. Her feet are hidden by the skirt.
 */
export function dressSeated(neck: P, waist: P, knee: P, floor: number, facing: 1 | -1): string {
  const f = facing
  const [nx, ny] = neck
  const [wx, wy] = waist
  const [kx, ky] = knee
  const q = (v: number) => Math.round(v * 10) / 10
  return (
    `M${q(nx - f * 3)} ${q(ny - 2)}` +
    `Q${q(nx + f * 9)} ${q(ny - 1)} ${q(nx + f * 10)} ${q(ny + 8)}` +
    `L${q(wx + f * 7)} ${wy}` +
    `C${q(wx + f * 10)} ${q(wy + 6)} ${q(kx - f * 10)} ${q(ky - 9)} ${q(kx + f * 2)} ${q(ky - 7)}` +
    `C${q(kx + f * 8)} ${q(ky - 4)} ${q(kx + f * 7)} ${q(ky + 8)} ${q(kx + f * 8)} ${q(ky + 20)}` +
    `C${q(kx + f * 9)} ${q(floor - 20)} ${q(kx + f * 12)} ${q(floor - 6)} ${q(kx + f * 14)} ${floor}` +
    `L${q(wx - f * 18)} ${floor}` +
    `C${q(wx - f * 18)} ${q(ky + 20)} ${q(wx - f * 16)} ${q(wy + 16)} ${q(wx - f * 9)} ${wy}` +
    `L${q(nx - f * 10)} ${q(ny + 8)}` +
    `Q${q(nx - f * 9)} ${q(ny - 1)} ${q(nx - f * 3)} ${q(ny - 2)}Z`
  )
}

/**
 * Fine upright cuts for the "sombre greyish beige" of Mary's dress: lines
 * `gap` apart over a box, to be clipped to the dress. Stroke in PAPER at
 * about 0.9.
 */
export function greyish(box: { x0: number; x1: number; y0: number; y1: number }, gap = 3.2) {
  let d = ''
  for (let x = box.x0; x < box.x1; x += gap) d += `M${Math.round(x * 10) / 10} ${box.y0}V${box.y1}`
  return d
}

/**
 * The ground a limb covers when it is drawn as a stroke `w` wide with round
 * joins and caps (an arm or a leg of gent() or Mary()), as filled shapes: a
 * band along each segment and a disc at each joint. Put each in a clipPath
 * as its own <path>, so their union is the clip whatever their winding.
 *
 * WHY (2 October 2026, review). A clipPath clips to filled geometry and
 * ignores strokes, so greyish() cuts clipped to a coat or a dress could not
 * reach the sleeves or the trousers, which are strokes: Jones's "grey suit"
 * printed as a grey tabard over black arms and legs, and Mary's "greyish"
 * dress had black sleeves, unlike both their portraits. This gives the cuts
 * the limbs as well. `trimEnd` stops the limb that much short of its last
 * point, so a cuff ends before an inked hand rather than running over it.
 */
export function limbArea(points: P[], w: number, trimEnd = 0): string[] {
  const q = (v: number) => Math.round(v * 10) / 10
  const h = w / 2
  const pts = points.slice()
  if (trimEnd > 0 && pts.length > 1) {
    const [ax, ay] = pts[pts.length - 2]
    const [bx, by] = pts[pts.length - 1]
    const L = Math.hypot(bx - ax, by - ay) || 1
    const k = Math.min(trimEnd, L - 1) / L
    pts[pts.length - 1] = [bx - (bx - ax) * k, by - (by - ay) * k]
  }
  const out: string[] = []
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1]
    const [x1, y1] = pts[i]
    const L = Math.hypot(x1 - x0, y1 - y0) || 1
    const nx = (-(y1 - y0) / L) * h
    const ny = ((x1 - x0) / L) * h
    out.push(
      `M${q(x0 + nx)} ${q(y0 + ny)}L${q(x1 + nx)} ${q(y1 + ny)}L${q(x1 - nx)} ${q(y1 - ny)}L${q(x0 - nx)} ${q(y0 - ny)}Z`,
    )
  }
  for (const [x, y] of pts)
    out.push(
      `M${q(x - h)} ${q(y)}a${q(h)} ${q(h)} 0 1 0 ${q(2 * h)} 0a${q(h)} ${q(h)} 0 1 0 ${q(-2 * h)} 0Z`,
    )
  return out
}

/**
 * Mary Morstan, whole: her dress (standing, seated, or a dark cloak for
 * Chapter 3), arms, gloved hands in paper, head, fair hair, turban and
 * feather. `uid` keeps the clip of her dress unique to its piece. `pale`
 * cuts her face in paper outlined in ink, for the moments the text says she
 * went white ("her face grew white to the lips", Chapter 4). `bare` leaves
 * off the turban and feather for the panels at home (MARY_CROWN).
 */
export function Mary({
  uid,
  facing,
  neck,
  waist,
  floor,
  knee,
  head,
  near,
  far,
  cloak = false,
  pale = false,
  flushed = false,
  bare = false,
  className,
  style,
  children,
}: {
  uid: string
  facing: 1 | -1
  neck: P
  waist: P
  floor: number
  /** Seated, with the knee here; standing if left out. */
  knee?: P
  head: { at: P; rot?: number; scale?: number }
  near: { arm: P[]; hand?: { parts: Part[]; scale?: number; rot?: number } }
  far: { arm: P[]; hand?: { parts: Part[]; scale?: number; rot?: number } }
  /** "muffled in a dark cloak" (Chapter 3): solid ink, no greyish cuts. */
  cloak?: boolean
  pale?: boolean
  /** "a bright flush of surprise and of pleasure coloured her pale cheeks" (Chapter 10). */
  flushed?: boolean
  /**
   * Bareheaded, at home in Camberwell (Chapters 9 and 11): no turban, and the
   * crown of her fair hair (MARY_CROWN) where it would be.
   */
  bare?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
}) {
  const f = facing
  const dress = knee
    ? dressSeated(neck, waist, knee, floor, f)
    : dressStanding(neck, waist, floor, f)
  const ht = headAt(f, head.at, head.rot ?? 0, head.scale ?? 1)
  const line = (a: P[]) => 'M' + a.map(([x, y]) => `${x} ${y}`).join('L')
  const parts: Part[] = [
    { d: line(far.arm), w: 6.4 },
    { d: dress },
    { d: HEAD_MARY, t: ht },
    ...(bare ? [] : [{ d: MARY_TURBAN, t: ht }]),
    { d: line(near.arm), w: 6.4, sep: 1.3 },
  ]
  const hands = [near, far]
    .filter((a) => a.hand && a.arm.length > 1)
    .map((a) => ({
      parts: a.hand!.parts,
      t: handAt(a.arm, f, { parts: a.hand!.parts, scale: a.hand!.scale ?? 0.8, rot: a.hand!.rot }),
    }))
  const clip = `${uid}-mary-dress`
  const sleeves = `${uid}-mary-sleeves`
  const xs = [
    neck[0],
    waist[0],
    knee?.[0] ?? waist[0],
    ...near.arm.map(([x]) => x),
    ...far.arm.map(([x]) => x),
  ]
  const box = {
    x0: Math.min(...xs) - 34,
    x1: Math.max(...xs) + 34,
    y0: Math.min(neck[1], ...near.arm.map(([, y]) => y), ...far.arm.map(([, y]) => y)) - 4,
    y1: floor + 2,
  }
  return (
    <g className={className} style={style}>
      <Figure parts={parts}>
        {!cloak && (
          <>
            <defs>
              <clipPath id={clip}>
                <path d={dress} />
              </clipPath>
              {/* the sleeves are the same greyish stuff as the dress (limbArea) */}
              <clipPath id={sleeves}>
                {[...limbArea(far.arm, 6.4), ...limbArea(near.arm, 6.4)].map((d) => (
                  <path key={d} d={d} />
                ))}
              </clipPath>
            </defs>
            <path
              d={greyish(box)}
              clipPath={`url(#${clip})`}
              stroke={PAPER}
              strokeWidth={0.9}
              fill="none"
            />
            {/* the near arm again, over the cut dress, so the sleeve reads as one */}
            <path
              d={line(near.arm)}
              fill="none"
              stroke={PAPER}
              strokeWidth={9}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={line(near.arm)}
              fill="none"
              stroke={INK}
              strokeWidth={6.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={greyish(box)}
              clipPath={`url(#${sleeves})`}
              stroke={PAPER}
              strokeWidth={0.9}
              fill="none"
            />
          </>
        )}
        <g transform={ht}>
          <path d={MARY_HAIR} fill={PAPER} />
          <path d={MARY_HAIR_LINES} fill="none" stroke={INK} strokeWidth={0.8} />
          {pale ? (
            <>
              <path
                d={MARY_FACE_PALE}
                fill={PAPER}
                stroke={INK}
                strokeWidth={1.1}
                strokeLinejoin="round"
              />
              <path
                d={
                  gouge(9, -7.9, 14.4, -7.3, 0.7) +
                  'M7.6 -3.4Q10.8 -6.2 13.8 -3.6Q10.8 -1.2 7.6 -3.4Z'
                }
                fill={INK}
              />
              <path d={MARY_PUPIL} fill={PAPER} />
              <path d={MARY_PALE_LINES} fill="none" stroke={INK} strokeWidth={0.9} />
            </>
          ) : (
            <>
              <path d={MARY_CUTS} fill={PAPER} />
              <path d={MARY_PUPIL} fill={INK} />
            </>
          )}
          {flushed && (
            <path d={WATSON_FLUSH} fill="none" stroke={RED} strokeWidth={2} strokeLinecap="round" />
          )}
          {bare ? (
            <>
              <path d={MARY_CROWN} fill={PAPER} stroke={INK} strokeWidth={0.8} />
              <path d={MARY_CROWN_LINES} fill="none" stroke={INK} strokeWidth={0.8} />
            </>
          ) : (
            <>
              <path d={MARY_TURBAN} fill={INK} />
              <path d={MARY_TURBAN_CUTS} fill={PAPER} />
              <path d={MARY_FEATHER} fill={PAPER} stroke={INK} strokeWidth={0.9} />
              <path d={MARY_FEATHER_QUILL} fill="none" stroke={INK} strokeWidth={0.7} />
            </>
          )}
        </g>
        {children}
      </Figure>
      <PaperHands hands={hands} />
    </g>
  )
}

/**
 * Holmes's paper hands on a gent() figure: pass the same arms and hands the
 * figure was built with, and draw this after the Figure.
 */
export function HolmesHands({
  facing,
  arms,
}: {
  facing: 1 | -1
  arms: { arm: P[]; hand: { parts: Part[]; scale?: number; rot?: number; flip?: boolean } }[]
}) {
  return (
    <PaperHands
      hands={arms.map((a) => ({
        parts: a.hand.parts,
        t: handAt(a.arm, facing, a.hand),
      }))}
    />
  )
}

// ── ATHELNEY JONES ──────────────────────────────────────────────────────────
// Cut first for a draft of "Holmes gives a demonstration" (Chapter 6). That
// panel no longer shows him: it draws the deduction, and he arrives after it
// ("here are the regulars"). Every panel with Jones draws him from here.
//
// "a very stout, portly man in a grey suit strode heavily into the room. He
// was red-faced, burly and plethoric, with a pair of very small twinkling eyes
// which looked keenly out from between swollen and puffy pouches" (Chapter 6);
// "as Athelney Jones put his broad back up against it" (Chapter 9). So his
// head is round and heavy, with a second chin under the first; his eye is a
// small glint pressed between two puffy pouches; the spot colour flushes his
// cheekbone (JONES_FLUSH), never his mouth or chin; he is the broadest man in
// any panel (body width 44 in gent(), with jonesPaunch() over the coat); and
// his grey suit is cut with the same fine upright lines as Mary's greyish
// dress (greyish(), clipped to the suit), the kit's one way of printing grey.
// His hair is not described, so it is plain, short and dark.

/** Jones: a round, heavy head, a short nose, a second chin. */
export const HEAD_JONES =
  'M-10 26C-12 20 -17.6 15 -18.2 5C-18.8 -9 -9.8 -21 2.4 -21C11 -21 16 -16 16.6 -9.6L17 -5.6L21.6 3.4L17.2 5.4L17.8 8.2L16.4 9.8L18 13C18.4 17.6 16.4 20.4 12.8 21.4C12.6 24.8 10 27.4 5 27.6L-4 27.6Z'
/**
 * His features in paper: a brow, the "very small twinkling" eye with a pouch
 * above it and a pouch below, the heavy line of the jowl, a short mouth, the
 * fold of the second chin, the ear, and short hair combed flat.
 */
export const JONES_CUTS =
  gouge(6, -9, 14.6, -8.2, 0.9) +
  'M10 -3.6Q11.8 -4.8 13.4 -3.6Q11.8 -2.8 10 -3.6Z' +
  gouge(8.4, -6, 14.4, -5.6, 0.5, -0.5) +
  gouge(8.6, -1, 14.6, -1.2, 0.6, 0.9) +
  gouge(5.4, 5, 4.6, 18, 0.6, -1.4) +
  gouge(11.6, 13.4, 16.8, 13.2, 0.5) +
  gouge(6.6, 21.6, 12.8, 21.2, 0.5, 0.4) +
  gouge(-6.4, -1, -5.4, 7, 0.7, -1.4) +
  gouge(8, -17.6, -7, -17.8, 0.55, -1) +
  gouge(6, -14.4, -14, -7, 0.6, 1.6) +
  gouge(-4, -10, -15.6, 1, 0.55, 1.6)
/** "red-faced": two short strokes on the cheekbone, below the eye, well above the mouth. */
export const JONES_FLUSH = 'M5.6 1.8L11 3.2M6.2 5L10.4 6'

/**
 * "very stout, portly": a paunch pushed out in front of the coat, on the line
 * from neck to hip, for a man facing `facing`. `width` is the body width given
 * to gent(). Fill in INK as a part of his figure, after the coat.
 */
export function jonesPaunch(neck: P, hip: P, facing: 1 | -1, width = 44): string {
  const dx = hip[0] - neck[0]
  const dy = hip[1] - neck[1]
  const L = Math.hypot(dx, dy) || 1
  const u: P = [dx / L, dy / L]
  const v: P = [-u[1], u[0]]
  const h = width / 2
  const q = (x: number) => Math.round(x * 10) / 10
  const at = (o: P, a: number, b: number) =>
    `${q(o[0] + u[0] * a + v[0] * b)} ${q(o[1] + u[1] * a + v[1] * b)}`
  const f = -facing
  return (
    `M${at(neck, 10, f * h * 0.7)}` +
    `C${at(neck, L * 0.3, f * (h + 9))} ${at(neck, L * 0.72, f * (h + 15))} ${at(hip, 2, f * h * 0.82)}` +
    `L${at(hip, 0, 0)}L${at(neck, 10, 0)}Z`
  )
}

// ── JONATHAN SMALL ──────────────────────────────────────────────────────────
// Added for moments 12 to 15 (Chapters 10 to 12), the panels he is in; every
// later piece with Small draws him from here.
//
// "He was a sunburned, reckless-eyed fellow, with a network of lines and
// wrinkles all over his mahogany features ... There was a singular prominence
// about his bearded chin ... his black, curly hair was thickly shot with grey.
// His face in repose was not an unpleasing one, though his heavy brows and
// aggressive chin gave him ... a terrible expression when moved to anger"
// (Chapter 11); "He was a good-sized, powerful man ... from the thigh
// downwards there was but a wooden stump upon the right side" (Chapter 10);
// "A crocodile took me ... and nipped off my right leg as clean as a surgeon
// could have done it, just above the knee"; "this timber toe strapped to my
// stump" (Chapter 12). So a heavy brow over a keen eye, lines cut at the brow,
// the eye and the cheek, a short beard that juts at the chin, black curly hair
// with paper curls for the grey, a broad body (34 in gent()), and on his RIGHT
// leg a wooden peg from just above the knee (smallGent): the right leg is his
// near leg when he faces right and his far leg when he faces left. His
// sunburn is the ink of every face, and is left to the words.
//
// At nineteen, in 1857 ("I was a raw recruit, and a game-legged one at
// that", Chapter 12), he has the same profile, clean-shaven, with no grey and
// no lines (HEAD_SMALL_YOUNG).

/** Small at fifty: the heavy brow, and the short beard jutting at the chin. */
export const HEAD_SMALL =
  'M-9 26C-11 20 -16.5 15 -17.4 6C-18.6 -9 -9.6 -21 2.4 -21C11.4 -21 16.2 -16.4 16.6 -10.6L18.6 -7.4L16.4 -4.6L22.6 4.4L17 6.2L17.6 8.4L16.6 9.6C19.2 11.4 21.2 15 21.8 19.4C22.2 22.6 21 25 18.6 26.2C15.4 27.6 11 27.6 7.6 26.6Z'
/**
 * His features in paper: the heavy brow, the "keen, twinkling" eye, the lines
 * on the forehead and at the corner of the eye ("a network of lines and
 * wrinkles"), the moustache, the line of the beard on the cheek, the strands
 * of the beard, the ear.
 */
export const SMALL_CUTS =
  gouge(4, -9.4, 16.6, -7.4, 1.7, 0.4) +
  'M7.4 -3.6Q10.4 -5.6 13.2 -3.8Q10.4 -1.8 7.4 -3.6Z' +
  gouge(3.6, -14.6, 12.4, -14.6, 0.45, -0.4) +
  gouge(14, -2.4, 16.4, -1, 0.35) +
  gouge(13.6, -0.4, 15.8, 1.6, 0.35) +
  gouge(12.2, 8.4, 18.8, 8.8, 0.65, 0.6) +
  gouge(4.6, 6.6, 9.2, 13, 0.4, 0.6) +
  gouge(18.4, 12.2, 20.4, 23.6, 0.5, -0.9) +
  gouge(15.4, 12.2, 16.8, 25.2, 0.5, -0.7) +
  gouge(12.2, 12.6, 13, 25.6, 0.5, -0.4) +
  gouge(9.2, 14.4, 9.4, 25.4, 0.45, -0.2) +
  gouge(-6, -1.4, -5, 6.6, 0.75, -1.4)
/** The pupil, in ink over SMALL_CUTS. */
export const SMALL_PUPIL = 'M10.4 -3.7a1.15 1.15 0 1 0 2.3 0a1.15 1.15 0 1 0 -2.3 0Z'

/** Short curved cuts turned every way, at [x, y, turn in degrees], so they read as curls. */
function curls(at: [number, number, number][], size = 1): string {
  const q = (v: number) => Math.round(v * 10) / 10
  return at
    .map(([x, y, t]) => {
      const a = (t * Math.PI) / 180
      const c = Math.cos(a) * size
      const s = Math.sin(a) * size
      const p = (u: number, v: number) => `${q(x + u * c - v * s)} ${q(y + u * s + v * c)}`
      return `M${p(-2.2, 0.6)}Q${p(-1, -2.4)} ${p(1.6, -1.2)}Q${p(2.6, 0.4)} ${p(1, 1.6)}`
    })
    .join('')
}
const SMALL_CURL_AT: [number, number, number][] = [
  [6, -18.4, 10],
  [0.4, -19, 70],
  [-5.2, -17.2, 150],
  [-10, -13.6, 30],
  [-13.8, -8.4, 110],
  [-15.4, -2.6, 200],
  [-14.6, 3.4, 60],
  [-11.6, 9, 160],
  [-1.4, -14, 250],
  [-6.8, -10.6, 320],
  [-10.4, -4.4, 20],
  [3.6, -15, 140],
  [-6, -3.4, 230],
  [-9.8, 3.6, 300],
]
/**
 * "his black, curly hair was thickly shot with grey": curls cut in paper all
 * over the head. Stroke with PAPER at about 0.8, round caps, in the head's frame.
 */
export const SMALL_CURLS = curls(SMALL_CURL_AT)

/** Small at nineteen, in 1857: the same profile, the jaw clean-shaven. */
export const HEAD_SMALL_YOUNG =
  'M-9 26C-11 20 -16.5 15 -17.4 6C-18.6 -9 -9.6 -21 2.4 -21C11.4 -21 16.2 -16.4 16.6 -10.6L18 -7.6L16.2 -4.6L22.4 4.4L17 6.2L17.6 8.6L16.2 10.2L18 13.4C18.6 18.6 15.6 22.4 10.4 23.2L8 26Z'
/** His features at nineteen: the brow already heavy, no lines, no beard. */
export const SMALL_YOUNG_CUTS =
  gouge(4.4, -9, 16.4, -7.4, 1.5, 0.4) +
  'M7.4 -3.6Q10.4 -5.6 13.2 -3.8Q10.4 -1.8 7.4 -3.6Z' +
  gouge(11.2, 11.6, 16.6, 11.2, 0.55) +
  gouge(-6, -1.4, -5, 6.6, 0.75, -1.4)
/** His black curly hair at nineteen: fewer curls cut, because there is no grey in it yet. */
export const SMALL_YOUNG_CURLS = curls(SMALL_CURL_AT.filter((_, i) => i % 2 === 0 || i < 4))

/**
 * Small as a gent() figure with the wooden leg on his right side: `peg.side`
 * is 'near' when he faces right and 'far' when he faces left. The leg on that
 * side becomes the stump of the thigh, from the hip to `peg.stump` (just above
 * where the knee was), with a leather socket strapped round it; gent()'s boot
 * there is taken off. The peg itself, "this timber toe", is returned as a
 * separate shape, from the socket to `peg.foot`, because it is wood and not
 * cloth: fill `peg` with PAPER and an ink edge, then stroke `grain` in ink and
 * `straps` in paper over the socket. Draw the peg before the figure when it is
 * the far leg, after it when it is the near one.
 */
export function smallGent(
  p: Parameters<typeof gent>[0] & { peg: { side: 'near' | 'far'; stump: P; foot: P } },
): { parts: Part[]; peg: string; grain: string; straps: string } {
  const side = p.peg.side
  const limb = p[side]
  const hip = limb.leg[0]
  const { stump, foot } = p.peg
  const all = gent({ ...p, [side]: { ...limb, leg: [hip, stump] } })
  const bootAtStump = boot(stump, p.facing).d
  const thigh = `M${hip[0]} ${hip[1]}L${stump[0]} ${stump[1]}`
  const q = (v: number) => Math.round(v * 10) / 10
  const dx = foot[0] - stump[0]
  const dy = foot[1] - stump[1]
  const L = Math.hypot(dx, dy) || 1
  const u: P = [dx / L, dy / L]
  const v: P = [-u[1], u[0]]
  const at = (o: P, a: number, b: number) =>
    `${q(o[0] + u[0] * a + v[0] * b)} ${q(o[1] + u[1] * a + v[1] * b)}`
  const lw = p.leg ?? 9.5
  const sw = lw / 2 + 1.6
  const socket: Part = {
    d: `M${at(stump, -8, sw)}L${at(stump, 6, sw * 0.6)}L${at(stump, 6, -sw * 0.6)}L${at(stump, -8, -sw)}Z`,
  }
  const parts: Part[] = []
  for (const part of all) {
    if (part.d === bootAtStump) continue
    parts.push(part)
    if (part.d === thigh && part.w) parts.push(socket)
  }
  return {
    parts,
    peg: `M${at(stump, 4, 3.4)}L${at(foot, -2.4, 2.3)}Q${at(foot, 1.4, 2.3)} ${at(foot, 1.4, 0)}Q${at(foot, 1.4, -2.3)} ${at(foot, -2.4, -2.3)}L${at(stump, 4, -3.4)}Z`,
    grain: `M${at(stump, 9, 0.9)}L${at(foot, -5, 0.6)}`,
    straps: `M${at(stump, -5, sw)}L${at(stump, -5, -sw)}M${at(stump, 1.4, sw * 0.8)}L${at(stump, 1.4, -sw * 0.8)}`,
  }
}

// ── TONGA ───────────────────────────────────────────────────────────────────
// Added for "The chase down the Thames" (Chapter 10) and "Sholto's betrayal
// and Small's revenge" (Chapter 12). READ THE RULES AT THE TOP OF THIS FILE
// FIRST. The narrators describe him in racist and dehumanising terms, and none
// of those words is drawn or quoted. What is drawn is only what describes a
// man: "the smallest I have ever seen", "a shock of tangled, dishevelled
// hair", "He was wrapped in some sort of dark ulster or blanket" (Chapter 10);
// "Tonga ... was a fine boatman, and owned a big, roomy canoe of his own";
// "He was stanch and true, was little Tonga. No man ever had a more faithful
// mate" (Chapter 12). So he is the smallest figure in any panel; his face is
// cut with the same plain features, and the same care, as every other face in
// this kit, with nothing exaggerated; his hair is a full shock with tangled
// curls cut in it; and in London he is wrapped in a dark blanket.

/** Tonga: a young man's plain profile, in the frame of the shared heads. */
export const HEAD_TONGA =
  'M-8 24C-9.6 18.6 -14.4 14.6 -15.4 6C-16.4 -8 -8.4 -18.6 2 -18.6C10.2 -18.6 14.8 -14 15 -8.4L15.6 -5L20.4 3.6L15.8 5.4L16.4 7.8L15.2 9.2L16.2 11.4C16 16 13 18.8 8.4 19.2L6.4 24Z'
/**
 * "a shock of tangled, dishevelled hair": a full mass over the crown and the
 * back of the head, its outer edge tufted. Fill with INK before the head, with
 * the head's paper halo round it, then cut TONGA_HAIR_CUTS into it.
 */
export const TONGA_HAIR = (() => {
  const q = (v: number) => Math.round(v * 10) / 10
  const cx = -2.4
  const cy = -6
  const pts: P[] = []
  for (let a = -24; a >= -236; a -= 16.3) {
    const t = (a * Math.PI) / 180
    const r = 19.6 + (Math.abs(a + 130) < 60 ? 1.2 : 0)
    pts.push([cx + r * Math.cos(t), cy + r * 0.98 * Math.sin(t)])
  }
  let d = `M${q(pts[0][0])} ${q(pts[0][1])}`
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1]
    const [x1, y1] = pts[i]
    const mx = (x0 + x1) / 2
    const my = (y0 + y1) / 2
    const L = Math.hypot(mx - cx, my - cy)
    d += `Q${q(mx + ((mx - cx) / L) * 2.6)} ${q(my + ((my - cy) / L) * 2.6)} ${q(x1)} ${q(y1)}`
  }
  return (
    d +
    'L-10.6 9.4C-12 3.6 -11.4 -2.4 -8.4 -6.8C-5 -11.2 1.6 -12.6 8.4 -12C11 -11.8 13.2 -11.2 14.6 -10.4Z'
  )
})()
/** The tangle of his hair: curls turned every way. Stroke with PAPER at about 0.75, round caps. */
export const TONGA_HAIR_CUTS = curls(
  [
    [8.6, -20.6, 30],
    [2.6, -22.6, 100],
    [-4, -22.4, 170],
    [-10.4, -19.2, 50],
    [-15.4, -13.6, 130],
    [-18, -7, 210],
    [-18.2, -0.4, 80],
    [-15.6, 5.4, 160],
    [4.6, -16.4, 260],
    [-2.6, -17, 320],
    [-9, -14.4, 20],
    [-13.4, -8.4, 280],
    [-13.8, -1.6, 350],
    [11.2, -15.4, 200],
  ],
  0.9,
)
/** His features in paper: a level brow, an open eye, the mouth, the ear. Plain, as everyone's are. */
export const TONGA_CUTS =
  gouge(5.4, -7.6, 13.4, -6.8, 0.95) +
  'M6.6 -3.4Q9.8 -5.8 12.8 -3.6Q9.8 -1.4 6.6 -3.4Z' +
  gouge(10.6, 11, 15.4, 10.6, 0.5) +
  gouge(-4.6, -1, -3.8, 6, 0.65, -1.2)
/** The pupil, in ink over TONGA_CUTS. */
export const TONGA_PUPIL = 'M9.4 -3.6a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0 -2.4 0Z'

// ── TOBY ────────────────────────────────────────────────────────────────────
// Added for "Toby and the trail of creosote" (Chapter 7), where he stands on
// the cask, and "The Baker Street Irregulars" (Chapter 8), where he lies by
// the breakfast table; any later panel with Toby draws him from here.
//
// "Toby proved to be an ugly, long-haired, lop-eared creature, half spaniel
// and half lurcher, brown-and-white in colour, with a very clumsy waddling
// gait"; "the creature stood with its fluffy legs separated" (Chapter 7).
// So: a lurcher's long legs, deep chest and tucked-up belly; a spaniel's long
// hanging ears and feathered coat; the white of him in PAPER with an ink edge
// and the brown in ink (his ears, a patch over his eye and crown, a saddle on
// his back and a patch on his haunch); long hair cut as strands under his
// belly, down his legs, on his ears and along his tail. He is drawn plainly,
// as a scruffy dog, and not as a caricature of "ugly". A thick ink halo lifts
// him off a pale ground. In his own frame: facing right, his feet (or, lying,
// his belly) on y = 0, the middle of his body at x = 0.
//
// WHY A WHITE FACE (2 October 2026). His head was first all brown, in ink: on
// the cask against the morning sky it sank into the dark of the print and his
// raised tail read as a second head. The white face with a brown patch keeps
// him "brown-and-white" and makes the head the first thing a reader finds.

type TobyPose = {
  torso: string
  neck: string
  /** The head and everything on it is drawn in the standing frame and moved by this. */
  headShift: P
  head: string
  jaw: string
  tongue?: string
  mouth?: string
  ear: string
  eyePatch: string
  nose: string
  /** A closed eye is a stroke; an open one is filled, with a pupil. */
  eye: string
  pupil?: string
  legs: string[]
  paws: P[]
  tail: string
  patches: string
  fur: string
  earFur: string
  tailFur: string
  collar: string
  ring: P
}

/** The head, in the standing frame. Both poses use it, moved by headShift. */
const TOBY_HEAD = {
  head: 'M26 -90C25 -100 34 -106 43 -105C49 -104 53 -99 60 -97C67 -95 69 -90 65 -87.6L46 -85C39 -81 28 -81 26 -90Z',
  ear: 'M32 -101C25 -101 20 -93 19 -84C18 -76 20 -70 24 -66C28 -64 31 -67 32 -71C34 -78 36 -87 37 -94C37 -99 35 -101 32 -101Z',
  earFur: 'M23 -78L22 -70M27 -86L27 -74M31 -92L31 -80',
  /** The brown of his head: a patch over the eye and the crown. */
  eyePatch: 'M29 -97C32 -104 41 -106 47 -102C50 -97 47 -91 41 -90C35 -89.6 30 -92 29 -97Z',
  nose: 'M63.4 -91.4a3 2.4 0 1 0 6 0a3 2.4 0 1 0 -6 0Z',
}

/** Standing on all four feet: on the cask, Chapter 7. */
const TOBY_STAND: TobyPose = {
  ...TOBY_HEAD,
  torso:
    'M-32 -56C-33 -64 -26 -68 -12 -67C2 -66 14 -69 22 -67C31 -65 34 -55 31 -46C28 -39 18 -38 9 -41C-2 -45 -14 -43 -22 -46C-28 -48 -32 -51 -32 -56Z',
  neck: 'M14 -64C16 -74 22 -82 30 -86L42 -80C36 -72 32 -62 30 -52Z',
  headShift: [0, 0],
  jaw: 'M42 -82L63 -85C63 -81 58 -78 51 -78C46 -78 42 -79 42 -82Z',
  /** "With lolling tongue": hanging out of his open mouth. */
  tongue:
    'M48 -81C47 -76 47 -71 50 -68C53 -66.6 55.6 -68.6 55.6 -72.4C55.6 -76 54.8 -79.4 53.8 -82Z',
  /** His open mouth, dark between the jaws. */
  mouth: 'M43 -85L64 -88L62 -83.4L45 -81Z',
  /** "blinking eyes": screwed shut against the sun. */
  eye: 'M38 -96Q41 -93 44.4 -95.6',
  legs: [
    'M15 -44L15 -22L14 -3',
    'M-29 -50L-24 -30L-33 -16L-31 -3',
    'M24 -44L25 -22L25 -3',
    'M-22 -50L-16 -30L-26 -16L-23 -3',
  ],
  paws: [
    [16, -1.8],
    [-29, -1.8],
    [27, -1.8],
    [-21, -1.8],
  ],
  tail: 'M-31 -60C-40 -65 -45 -71 -47 -80',
  /** The brown of him, on the white: a saddle, and a patch on the haunch. */
  patches:
    'M-22 -66C-8 -67.6 6 -66.6 14 -68.2C15 -60 6 -56 -4 -56C-14 -56 -21 -60 -22 -66Z' +
    'M-32 -57C-32 -63 -26 -66 -20 -65C-18 -58 -22 -52 -29 -50C-31 -52 -32 -54 -32 -57Z',
  /** Long hair: strands under the chest and belly, down the backs of the legs. */
  fur: 'M24 -40L22 -33M18 -39L16 -32M11 -41L9 -35M4 -43L2 -37M-3 -44L-5 -38M-10 -44L-12 -39M28 -36L30 -30M19 -34L21 -27M-28 -40L-33 -34M-22 -28L-28 -24',
  tailFur: 'M-36 -64L-33 -68M-40 -68L-37 -71M-44 -73L-41 -75',
  collar: 'M17 -72L31 -79',
  ring: [24, -76],
}

/** Lying down, his head up, his eyes open: at Baker Street, Chapter 8. */
const TOBY_LIE: TobyPose = {
  ...TOBY_HEAD,
  torso:
    'M-34 -6C-36 -18 -24 -27 -8 -27C8 -27 20 -25 26 -17C29 -12 29 -5 25 0L-30 0C-33 -1 -34 -3 -34 -6Z',
  neck: 'M12 -22C14 -32 20 -40 28 -44L40 -38C34 -32 30 -24 28 -16Z',
  headShift: [-4, 50],
  jaw: 'M42 -84L63 -87C62 -84 58 -82 51 -82C46 -82 42 -82.4 42 -84Z',
  eye: 'M38.4 -96.4Q41.4 -99 44.4 -96.6Q41.4 -94.2 38.4 -96.4Z',
  pupil: 'M40.6 -96.6a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0 -2.4 0Z',
  legs: ['M14 -8L40 -6', 'M-24 -8L-8 -3', 'M18 -3L46 -2', 'M-18 -12L-3 -4'],
  paws: [
    [42, -6],
    [-6, -2.4],
    [48, -2],
    [-1, -3.4],
  ],
  tail: 'M-33 -5C-42 -6 -50 -4 -57 1',
  patches:
    'M-22 -25C-8 -27 6 -26.6 14 -24.6C14 -18 6 -14 -4 -14C-14 -14 -21 -18 -22 -25Z' +
    'M-34 -8C-34 -16 -28 -20 -22 -19C-19 -13 -22 -6 -30 -3C-33 -4 -34 -6 -34 -8Z',
  fur: 'M-28 -18L-33 -14M-24 -12L-29 -8M22 -12L26 -8M16 -8L20 -4',
  tailFur: 'M-40 -6L-38 -10M-46 -5L-45 -9M-52 -3L-52 -7',
  collar: 'M15 -27L29 -34',
  ring: [22, -31],
}

/**
 * Toby, standing on all four feet or lying down. `at` is where his feet stand
 * (or his belly lies), `facing` the way his head points. Standing, his
 * collar's ring is at (24, -76) in his frame, for a cord.
 */
export function Toby({
  pose,
  at,
  facing,
  scale = 1,
}: {
  pose: 'stand' | 'lie'
  at: P
  facing: 1 | -1
  scale?: number
}) {
  const t = pose === 'stand' ? TOBY_STAND : TOBY_LIE
  const hs = `translate(${t.headShift[0]} ${t.headShift[1]})`
  const round = { strokeLinecap: 'round', strokeLinejoin: 'round' } as const
  return (
    <g transform={`translate(${at[0]} ${at[1]}) scale(${facing * scale} ${scale})`}>
      {/* the ink halo round the whole dog */}
      <g fill={INK} stroke={INK} strokeWidth={7} {...round}>
        <path d={t.torso} />
        <path d={t.neck} />
        <path d={t.head + t.jaw + t.ear} transform={hs} />
        {t.legs.map((d) => (
          <path key={d} d={d} fill="none" strokeWidth={14} />
        ))}
        <path d={t.tail} fill="none" strokeWidth={13} />
      </g>
      {/* the far legs, then the body, then the near legs: white, edged in ink */}
      {t.legs.map((d, i) => (
        <g key={d}>
          <path d={d} fill="none" stroke={INK} strokeWidth={8.6} {...round} />
          <path d={d} fill="none" stroke={PAPER} strokeWidth={5.6} {...round} />
          <ellipse
            cx={t.paws[i][0]}
            cy={t.paws[i][1]}
            rx={4.4}
            ry={2.4}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.4}
          />
          {i === 1 && (
            <path d={t.torso} fill={PAPER} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
          )}
        </g>
      ))}
      <path d={t.tail} fill="none" stroke={INK} strokeWidth={7} {...round} />
      <path d={t.tail} fill="none" stroke={PAPER} strokeWidth={4} {...round} />
      <path d={t.tailFur} stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
      <path d={t.patches} fill={INK} />
      <path d={t.fur} stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
      <path d={t.neck} fill={PAPER} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
      <path d={t.collar} stroke={INK} strokeWidth={4.2} strokeLinecap="round" />
      <circle cx={t.ring[0]} cy={t.ring[1]} r={2.4} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      {/* the white face with a brown patch over the eye */}
      <g transform={hs}>
        <path d={t.jaw} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
        {t.mouth && <path d={t.mouth} fill={INK} />}
        <path d={t.head} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
        <path d={t.eyePatch + t.nose} fill={INK} />
        {t.tongue && (
          <path d={t.tongue} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
        )}
        {t.pupil ? (
          <>
            <path d={t.eye} fill={PAPER} />
            <path d={t.pupil} fill={INK} />
          </>
        ) : (
          <path d={t.eye} fill="none" stroke={PAPER} strokeWidth={1.5} strokeLinecap="round" />
        )}
        <path d={t.ear} fill={INK} stroke={PAPER} strokeWidth={1.1} strokeLinejoin="round" />
        <path d={t.earFur} stroke={PAPER} strokeWidth={1} strokeLinecap="round" />
      </g>
    </g>
  )
}
