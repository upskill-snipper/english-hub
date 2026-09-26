import type { CSSProperties, ReactNode } from 'react'

import { deg, gouge, n } from '@/components/comics/linocut/carve'
import { INK, PAPER } from '@/components/comics/linocut/palette'

/**
 * The people of Frankenstein, cut from the text's own descriptions and shared
 * by every panel, so that a student meets the same Victor, the same Walton and
 * the same Creature from the first letter to the last. Cut first for the
 * panels of moments 1 to 5 (Letters 1 to 4, Chapters 1 to 5); every other
 * panel of this text draws its recurring people from here. A change to any
 * shape below changes every panel that uses it: preview them all before
 * changing one. A person this file does not have yet (Clerval, Justine,
 * William, the De Laceys) is added HERE, by the first artist who needs them,
 * so the next one finds them.
 *
 * A figure is cut as the reference panel cuts Fred
 * (src/data/comics/a-christmas-carol/counting-house.tsx): a paper halo round
 * every part, so it reads as one black shape with a single carved outline,
 * then the parts in ink, then the paper cuts of folds and features. The
 * machinery (Figure, Part, headAt, handAt, the hands) is the Jekyll and Hyde
 * kit's (src/data/comics/jekyll-and-hyde/panels/people.tsx), copied rather
 * than imported so that a change made for one text cannot redraw the other.
 *
 * WHAT THE TEXT SAYS, and so what is drawn (the held edition, the 1831 text,
 * src/data/full-texts/frankenstein.ts):
 *
 * - VICTOR. His looks are hardly described, so he is a plain young Genevese
 *   gentleman of the 1790s: clean-shaven, lean, his own dark hair worn loose
 *   to the collar, a dark coat cut away at the front with tails behind, a
 *   pale neckcloth. What the text does say is drawn: "My cheek had grown pale
 *   with study, and my person had become emaciated with confinement"
 *   (Chapter 4), so the cheek is cut hollow (VICTOR_CUTS); Walton finds "his
 *   eyes have generally an expression of wildness, and even madness" and "his
 *   limbs were nearly frozen, and his body dreadfully emaciated" (Letter 4),
 *   so his eye is cut wide open with the pupil set in it, and a lock falls
 *   over his brow. As a boy (HEAD_VICTOR_BOY) he has the same hair on a
 *   rounder, shorter face.
 * - WALTON. Twenty-eight ("Now I am twenty-eight", Letter 2) and "wrapped in
 *   furs,--a dress which I have already adopted" (Letter 1). Nothing else is
 *   given, so he is clean-shaven, with a fuller face than Victor's, and he
 *   always wears the fur cap (FUR_CAP) and a greatcoat with a fur collar
 *   (FUR_COLLAR): the one mark that tells him from Victor at a glance.
 * - THE CREATURE, only as Chapter 5 describes him: "His limbs were in
 *   proportion, and I had selected his features as beautiful"; "His yellow
 *   skin scarcely covered the work of muscles and arteries beneath; his hair
 *   was of a lustrous black, and flowing; his teeth of a pearly whiteness";
 *   "his watery eyes, that seemed almost of the same colour as the dun white
 *   sockets in which they were set, his shrivelled complexion and straight
 *   black lips"; and "a being of a gigantic stature; that is to say, about
 *   eight feet in height" (Chapter 4). So his face is the one face cut in
 *   PAPER (CREATURE_FACE), well made in profile, with a rounded skull under
 *   long black hair that flows below his shoulders (CREATURE_HAIR, its gloss
 *   cut in long paper lines); a few hairline cuts on the cheek and neck for
 *   the muscles showing through (CREATURE_SINEWS), never more, or the face
 *   reads as flayed; a pale eye in a pale socket with only a small pupil
 *   (CREATURE_EYE); lips cut as one straight black bar (CREATURE_LIPS); and
 *   one fine line pouching the skin under the eye for the shrivelled
 *   complexion (CREATURE_WRINKLES says why). He is drawn at about
 *   1.4 times the scale of the men beside him. The print cannot show yellow:
 *   the paper stands for his skin, and the colour is left to the words, as the
 *   alt text says. NEVER the film image: no flat-topped head, no bolts in the
 *   neck, no green skin, no stitches across the forehead. When he is dressed,
 *   it is in "some clothes" he took from Victor's rooms (Chapter 11), so a
 *   plain dark cloak (cloak()).
 * - ELIZABETH, as a child: "this child was thin, and very fair. Her hair was
 *   the brightest living gold"; "Her brow was clear and ample, her blue eyes
 *   cloudless" (Chapter 1). So her hair is cut in PAPER (GOLD_HAIR), long and
 *   loose down her back, on a slight figure; the blue of her eyes is left to
 *   the words.
 * - ALPHONSE, Victor's father: "nor was it until the decline of life that he
 *   became a husband and the father of a family"; "There was a considerable
 *   difference between the ages of my parents" (Chapter 1). So he is an older
 *   man, his grey hair cut in paper (ALPHONSE_HAIR) and tied back at the nape
 *   in the manner of a Genevese syndic of the 1780s.
 *
 * Nobody's dress is described beyond Walton's furs, so everyone wears the plain
 * dress of the 1780s and 1790s, and nothing is taken from a film, television
 * or stage production.
 */

export type P = [number, number]

/**
 * One part of a figure: a filled shape, or with `w` a limb or a stick drawn
 * as a stroke of that width. `sep` cuts a paper edge that wide round this part
 * before it is inked, to lift an arm off the coat behind it. `t` places the
 * part (a head drawn once, turned and scaled).
 */
export type Part = { d: string; w?: number; sep?: number; t?: string }

export function Figure({
  parts,
  cuts,
  halo = 1.8,
  transform,
  className,
  style,
  children,
}: {
  parts: Part[]
  cuts?: string
  halo?: number
  transform?: string
  className?: string
  style?: CSSProperties
  children?: ReactNode
}) {
  const shape = (p: Part, colour: string, extra: number, key: string) =>
    p.w ? (
      <path
        key={key}
        d={p.d}
        transform={p.t}
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
        transform={p.t}
        fill={colour}
        stroke={extra ? colour : undefined}
        strokeWidth={extra || undefined}
        strokeLinejoin="round"
      />
    )
  return (
    <g transform={transform} className={className} style={style}>
      {halo > 0 && parts.map((p, i) => shape(p, PAPER, halo * 2, `h${i}`))}
      {parts.map((p, i) => [
        p.sep ? shape(p, PAPER, p.sep * 2, `s${i}`) : null,
        shape(p, INK, 0, `f${i}`),
      ])}
      {cuts && <path d={cuts} fill={PAPER} />}
      {children}
    </g>
  )
}

/** The transform of a head centred on `at`, facing right (1) or left (-1). */
export function headAt(facing: 1 | -1, at: P, rot = 0, scale = 1) {
  return `translate(${at[0]} ${at[1]}) rotate(${rot}) scale(${facing * scale} ${scale})`
}

// ── HEADS ───────────────────────────────────────────────────────────────────
// Each in profile facing right, centred on (0, 0), crown near y -20, chin near
// y 21, the base of the neck at y 25 (the Creature's a little longer). The
// nose, brow and chin are pushed out further than life: the rough edge of the
// print eats about two units, and a profile must survive that at phone width.
// Features are cut in PAPER in the same frame, except where a note says ink.

/** Victor: lean, a straight nose, a hollow cheek. */
export const HEAD_VICTOR =
  'M-8 26C-9 20 -14 15 -15.5 6C-17 -9 -8 -20 3 -20C11 -20 15.5 -15 15.5 -9L16 -5L22.4 5L16.6 6.8L17 9.6L15.6 11.2L16.8 13.6C17 18 15.5 21.5 10.5 22.5L7.5 26Z'
/**
 * His own dark hair, loose to the collar, a lock fallen over the brow: ink, a
 * little beyond the skull, so that his head reads as bare and not as a hood.
 */
export const VICTOR_HAIR =
  'M16.4 -9.4C17.6 -15 14.6 -23.6 3 -24.6C-9.6 -25.4 -19.6 -17 -20.2 -3.6C-20.6 5 -19.6 12 -17 18.6L-15.4 15.6L-13.6 22L-11.6 17.4L-9 21.4C-10.6 14 -11.4 6 -10.8 -0.4C-9.8 -6 -5 -10.6 1.6 -11.8C5.4 -12.4 8.6 -11.8 11 -10.4L12.6 -7.2L13.8 -10.2Z'
/**
 * The paper strands brushed back through his hair, and a fine cut along the
 * hairline from the lock on his brow to behind the ear, so the black hair and
 * the black face read apart.
 */
export const VICTOR_HAIR_CUTS =
  gouge(12.6, -19.4, -6, -21.6, 0.7, -1.2) +
  gouge(9, -16.4, -14, -12.6, 0.8, 1.6) +
  gouge(3, -13.6, -17, -3, 0.75, 2.2) +
  gouge(-8.4, -4, -17.4, 12, 0.7, 1.2) +
  gouge(-11.6, 6, -14.8, 18, 0.6, 0.4) +
  gouge(-4, -17, -18, -6, 0.6, 1.8) +
  gouge(9.8, -11.2, -10.2, 1.4, 0.45, 4)
/** His features: a straight brow, an eye cut wide open, the hollow cheek, a closed mouth. */
export const VICTOR_CUTS =
  gouge(5.6, -7.6, 14.6, -6.4, 1.1) +
  'M6.2 -3.4Q10 -6.4 13.8 -3.6Q10 -0.8 6.2 -3.4Z' +
  gouge(3.6, 1.6, 6.4, 15, 0.8, 1.6) +
  gouge(10.4, 11.8, 16, 11.4, 0.5)
/** The pupil set in his open eye, in ink: "an expression of wildness". */
export const VICTOR_PUPIL = 'M10.2 -3.5a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0 -2.6 0Z'
/** His mouth thrown open, for his horror: an ink wedge over VICTOR_CUTS' mouth. */
export const VICTOR_AGHAST =
  'M15.2 10.2L17.2 10.6L17.6 14.4L14.6 14.8C13.6 13.6 13.6 11.6 15.2 10.2Z'

/**
 * Victor's face cut in PAPER, for a panel that draws him large and lit (by a
 * candle, a fire, the moon): the same profile, hair and features as the ink
 * head, with the features cut in ink instead. Place with the head's
 * transform, after his Figure. With `aghast`, the brow is raised and the
 * mouth open, for his horror ("The creation, and the flight").
 */
export function VictorLitFace({ aghast = false }: { aghast?: boolean }) {
  return (
    <>
      <path d={HEAD_VICTOR} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <path d={VICTOR_HAIR} fill={INK} />
      <path d={VICTOR_HAIR_CUTS} fill={PAPER} />
      <path
        d={aghast ? gouge(5, -10.8, 15, -9.4, 1.1, -1.4) : gouge(5.6, -8.4, 14.6, -7.2, 1.1)}
        fill={INK}
      />
      <path d="M6 -3.8Q10 -7.4 14.2 -4Q10 -0.2 6 -3.8Z" fill="none" stroke={INK} strokeWidth={1} />
      <path d="M9.4 -3.9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0Z" fill={INK} />
      <path
        d="M3.6 3Q5.6 8.6 6.4 13.6M17.6 5.4Q16.2 6.8 14.6 5.8M-6.4 -2.8C-3.6 -4 -2 -1 -2.4 2.2C-2.8 4.6 -4.4 5.8 -6.2 5.4M-6 14L-5 22.4M-3.4 15L-2.4 23.4"
        fill="none"
        stroke={INK}
        strokeWidth={0.8}
        strokeLinecap="round"
      />
      {aghast ? (
        <path d="M12.4 10.2L17.4 10.4L17.8 15L12.8 15.4C11.8 14 11.6 11.6 12.4 10.2Z" fill={INK} />
      ) : (
        <path d="M11 11.4L16.2 11.2" stroke={INK} strokeWidth={0.9} />
      )}
    </>
  )
}

/** Victor at thirteen: the same hair on a rounder, shorter face. */
export const HEAD_VICTOR_BOY =
  'M-8 24C-10 19 -14 14 -15 5C-16 -9 -8 -19.5 3 -19.5C11 -19.5 15 -14.5 15 -8.5L15.2 -4.6L20.2 4L15.6 5.6L16 8.4L14.8 9.8L15.8 12C15.6 16.5 12.5 19 8 19.2L6 24Z'
export const VICTOR_BOY_CUTS =
  gouge(6, -7.4, 13.4, -6.8, 0.9) +
  'M6.4 -3.4Q9.6 -5.8 12.8 -3.6Q9.6 -1.4 6.4 -3.4Z' +
  gouge(9.6, 10.6, 14.8, 10.2, 0.45)
export const VICTOR_BOY_PUPIL = 'M9.6 -3.5a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 1 0 -2.2 0Z'

/** Walton: a fuller face than Victor's, a strong straight nose. */
export const HEAD_WALTON =
  'M-8.5 25C-10 19 -15 15 -16 6C-17 -9 -8.5 -20 3 -20C11.5 -20 16 -15 16 -9L16.2 -5.4L22.6 4.6L16.8 6.2L17.2 9L15.8 10.6L17 13C17.2 18.5 14.5 22 9 22.5L6.5 25Z'
export const WALTON_CUTS =
  gouge(6, -7.6, 14.6, -7, 1) +
  'M6.6 -3.4Q10 -5.8 13.4 -3.6Q10 -1.6 6.6 -3.4Z' +
  gouge(10.6, 11.4, 16.2, 11, 0.5) +
  gouge(-4.6, -1, -3.6, 8, 0.7, -1.4)
/**
 * His fur cap ("wrapped in furs", Letter 1): a smooth rounded crown over a
 * thick turned-up fur band that stands out beyond it at the brow, with a flap
 * down over the ear. Ink, with FUR_CAP_CUTS in paper.
 *
 * WHY THIS SHAPE (27 September 2026). Two others were tried. A dome whose
 * whole edge was broken into tufts read at panel size as a head of curly
 * hair. A tall hat with straight sides and a flat top read as a flat-topped
 * head, the film image of the Creature this text must never show. So the
 * crown is round and smooth, and the fur is in the band, which is cut paler
 * than the crown so the two read as a hat and its brim.
 */
export const FUR_CAP =
  'M-16.4 -15C-17.8 -26.6 -9 -34 1 -34.2C11.4 -34.4 18 -27 17 -15Z' +
  'M-20 4C-21.6 -2 -21.8 -12 -18.6 -18C-7 -21.8 8 -21.8 19.4 -18.8C21.4 -15.6 21.6 -11.6 20.8 -7.8C12 -10.8 1 -11 -9.6 -7.4L-10 6C-13 8 -17.4 7.4 -20 4Z'
/**
 * The fur of the band, cut as dense short paper strokes so it prints paler
 * than the crown, and two seams on the crown. Seed-free: a fixed grid.
 */
export const FUR_CAP_CUTS = (() => {
  let d = gouge(-6, -31.4, -12.6, -18.6, 0.5, 1.2) + gouge(5, -32.4, 9.6, -19.6, 0.5, -1)
  for (let row = 0; row < 3; row++) {
    const y = -18.4 + row * 3.4
    for (let x = -18.4 + (row % 2) * 1.6; x < 19.4; x += 3.2) {
      if (row === 2 && x > -9 && x < 19) continue
      d += gouge(x, y, x + 0.7, y + 2.6, 0.55)
    }
  }
  for (let y = -6; y < 4; y += 3.2)
    for (let x = -18.4 + ((y + 6) % 2); x < -11; x += 3.2) d += gouge(x, y, x + 0.6, y + 2.4, 0.5)
  return d
})()

/**
 * Walton's thick fur collar, turned up round his neck: place it with the
 * head's transform. Ink, with FUR_COLLAR_CUTS in paper.
 */
export const FUR_COLLAR =
  'M-15 18C-16 24 -14 31 -8 35C0 38 10 37 16 33C18 30 18.4 26.6 17 24C13 27 8 28 4 27.6C-2 27 -8 24 -11 17Z'
export const FUR_COLLAR_CUTS =
  gouge(-12.6, 22, -10.4, 27, 0.5) +
  gouge(-8.6, 25.6, -6.2, 30.6, 0.5) +
  gouge(-3.6, 28, -2, 33.4, 0.5) +
  gouge(2, 29, 2.6, 34.6, 0.5) +
  gouge(7.4, 29, 7.4, 34.4, 0.5) +
  gouge(12.2, 28, 11.6, 32.6, 0.5)

/**
 * The fur down the front edge of Walton's greatcoat, from `a` to `b` in the
 * panel's own units: a column of short paper tufts slanting back from the
 * edge. Fill with PAPER over the coat.
 */
export function furTrim(a: P, b: P, facing: 1 | -1 = 1, every = 4.2): string {
  const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1
  let d = ''
  for (let s = 0, i = 0; s <= L; s += every, i++) {
    const x = a[0] + ((b[0] - a[0]) * s) / L
    const y = a[1] + ((b[1] - a[1]) * s) / L
    const back = -facing * (i % 2 ? 3.6 : 4.6)
    d += gouge(x, y, x + back, y + 2.4, 0.55)
  }
  return d
}

/** Elizabeth as a girl: a slight, small face. */
export const HEAD_ELIZABETH_GIRL =
  'M-7 23C-9 18 -13 14 -14 6C-15 -8 -7 -18.5 3 -18.5C10.5 -18.5 14.5 -14 14.5 -8.5L14.6 -4.6L18.8 3.4L14.8 5L15.2 7.8L14.2 9.2L15 11.4C14.8 15.6 12 18 7.6 18.2L5.5 23Z'
export const ELIZABETH_GIRL_CUTS =
  gouge(6, -7.2, 13, -6.8, 0.7) +
  'M6.6 -3.2Q9.6 -5.4 12.4 -3.4Q9.6 -1.6 6.6 -3.2Z' +
  gouge(9.4, 10.2, 14.2, 9.8, 0.45)
/**
 * "Her hair was the brightest living gold": PAPER, from the brow over the
 * crown and loose down her back. Draw it after the figure and before the
 * face's cuts; stroke its edge in ink (LINE.fine) where it lies on paper.
 */
export const GOLD_HAIR =
  'M14 -11.6C12.4 -18.6 6 -22 -1 -21.4C-11 -20.6 -17.4 -12.6 -17.6 -2C-17.8 8 -20 14 -19.4 22C-19 30 -22 36 -21.6 43L-19 40.4L-17.4 46L-15.2 41.6L-12.6 47L-11 41L-8.4 44.6C-8.8 36 -7 30 -8 22C-8.8 14 -6.4 8 -7.4 1C-5 -5 0 -9.4 6 -10.8C9 -11.4 11.6 -11.2 14 -11.6Z'
/**
 * Ink lines down her hair, waving as they fall, so it reads as loose hair and
 * not as a hood or a veil. Stroke in ink at about 0.9.
 */
export const GOLD_HAIR_STRANDS =
  'M9 -17Q-6 -17.6 -12.4 -4Q-15.6 6 -14.4 16Q-13.4 26 -16.6 36M3 -12.4Q-7 -9 -10.6 2Q-12 10 -11.4 18Q-10.8 28 -12.8 40M-4 -19.4Q-13.6 -15 -15.4 -2M-9.6 8Q-9.6 18 -9.8 28'

/** Alphonse: an older man's face, a high forehead. */
export const HEAD_ALPHONSE =
  'M-8 25C-9.5 19 -14 15 -15 6C-16 -9 -8 -20 3 -20C11 -20 15 -15.4 15.2 -9L15.6 -5.2L22.4 5L16.2 6.4L16.6 9.2L15.2 10.6L16.4 13C16.2 18 13 21.2 8 21.6L6 25Z'
export const ALPHONSE_CUTS =
  gouge(6, -7.2, 13.4, -6.6, 0.9) +
  'M6.8 -3.2Q9.8 -5.2 12.8 -3.4Q9.8 -1.8 6.8 -3.2Z' +
  gouge(10, 11.2, 15.4, 10.8, 0.5) +
  gouge(4.6, 0.6, 8.6, 9.6, 0.5, 1) +
  gouge(3, -13.6, 11, -12.6, 0.45) +
  gouge(2.4, -10.6, 10.4, -10.2, 0.45)
/**
 * His grey hair, swept back from a high forehead over the crown to the nape:
 * dense paper cuts combed back through the black of the head, which is how a
 * cut block shows grey. Fill with PAPER.
 */
export const ALPHONSE_HAIR =
  gouge(8, -18.4, -8, -18.6, 0.8, -1.4) +
  gouge(6, -15.8, -12.4, -13.6, 0.85, 1.2) +
  gouge(3, -13, -15, -7, 0.85, 1.8) +
  gouge(0, -10.6, -16, -0.6, 0.85, 2.2) +
  gouge(-3, -8, -15.6, 6, 0.8, 1.8) +
  gouge(-5.6, -4.6, -13.6, 11.6, 0.75, 1.2) +
  gouge(-7.6, 0, -11.4, 14, 0.6, 0.6) +
  gouge(10, -16.4, 2, -17.8, 0.6, -0.6) +
  gouge(-1, -17.4, -13, -11, 0.6, 1.4)
/** The queue tied at his nape, and its black ribbon. Ink. */
export const QUEUE =
  'M-13.4 12.6C-16.6 14.4 -18.4 18 -18.6 23.4L-15.6 23.6C-15.2 19.4 -13.8 16.6 -11.4 15.2Z' +
  'M-15.6 12.6L-20.4 9.8L-19.6 15.4ZM-14.2 13.2L-13.4 7.8L-10.4 12Z'

/**
 * The Creature's head: taller than a man's, the skull ROUNDED (never flat on
 * top), a well-made profile ("I had selected his features as beautiful").
 * Fill with PAPER and stroke with INK (LINE.fine): see CreatureHead, which
 * draws it all.
 */
export const HEAD_CREATURE =
  'M-9 30C-10 22 -16 16 -17 6C-18 -10 -9 -22 3 -22C12 -22 17 -16 17 -9.5L17.2 -5.5L23 5L17.4 6.8L17.6 9.2L16 10.6L17.4 13.2C17.6 19.5 15 24 9 25L7.5 30Z'
/** "his hair was of a lustrous black, and flowing": ink, from a hairline at the temple over the skull, behind the ear, and down past the shoulders in loose locks. */
export const CREATURE_HAIR =
  'M15 -13.2C12.4 -21.6 5 -26.2 -3 -26C-14 -25.4 -21 -16 -21.4 -3C-21.8 8 -22.2 18 -23.4 28C-24.4 36 -26.4 43 -28.6 50L-24.8 47.4L-23.4 54L-20.4 48.4L-17.6 53.6L-15.8 46.8L-12.6 50.6L-11.8 43C-11 34 -9.4 24 -7 16C-5.6 10 -5 4 -3.6 -2C-2.4 -7 1 -10.6 6 -12.2C9 -13 12 -13.2 15 -13.2Z'
/** Its lustre: long paper lines down the hair. */
export const CREATURE_HAIR_GLOSS =
  gouge(8, -21, -13, -14, 0.6, 1.8) +
  gouge(-3, -21.6, -17.6, 2, 0.6, 2.4) +
  gouge(-15.6, 4, -21.6, 42, 0.65, 1.4) +
  gouge(-11, 10, -15.6, 44, 0.55, 0.8) +
  gouge(1, -16, -8, -6, 0.5, 1)
/**
 * His hair over the skull only, stopping at the nape: for a panel that lays
 * the rest of it out itself (spread on the boards where he lies, in "The
 * creation, and the flight"). Gloss it with CREATURE_HAIR_SKULL_GLOSS.
 */
export const CREATURE_HAIR_SKULL =
  'M15 -13.2C12.4 -21.6 5 -26.2 -3 -26C-14 -25.4 -21 -16 -21.4 -3C-21.8 6 -20.4 14 -17.6 20L-11.6 18.4C-9 12 -6.2 6 -4.4 0C-3.2 -6 1 -10.6 6 -12.2C9 -13 12 -13.2 15 -13.2Z'
export const CREATURE_HAIR_SKULL_GLOSS =
  gouge(8, -21, -13, -14, 0.6, 1.8) +
  gouge(-3, -21.6, -17.6, 2, 0.6, 2.4) +
  gouge(1, -16, -8, -6, 0.5, 1)
/** The ear, just in front of the hair: stroke with INK at 1. */
export const CREATURE_EAR =
  'M-2 -4C1.4 -5.4 3.4 -1.6 2.8 2.4C2.4 5.6 0.4 7.6 -2 7.2M-0.2 -1Q1.2 1 -0.2 3.6'
/** A heavy brow, in ink, so the pale face keeps an expression at phone width. */
export const CREATURE_BROW = gouge(5, -8.6, 16.4, -7.6, 1.3, -0.3)
/**
 * "his watery eyes, that seemed almost of the same colour as the dun white
 * sockets in which they were set": the eye is left pale, with only its lid
 * and a small pupil cut in ink, and the socket shows as a thin ink crescent
 * of shadow beneath it. (A closed ring round the eye was tried and read as
 * spectacles.) Fill CREATURE_SOCKET and CREATURE_PUPIL; stroke CREATURE_EYE_LID.
 */
export const CREATURE_SOCKET = 'M6 -2.6Q10.6 2.4 15.8 -3.4Q10.8 0.4 6 -2.6Z'
export const CREATURE_EYE_LID = 'M7 -4Q10.8 -6.4 14.6 -4'
export const CREATURE_PUPIL = 'M10.2 -3.4a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 1 0 -2.2 0Z'
/** "straight black lips": one straight ink bar from the profile back. Fill in ink. */
export const CREATURE_LIPS = 'M11.4 10.6L17.4 10.4L17.4 11.9L11.4 12.1Z'
/**
 * "His yellow skin scarcely covered the work of muscles and arteries
 * beneath": two hairline ink cuts down the neck and one on the cheek, and no
 * more, or the face reads as flayed or as an old man's. Stroke with INK at 0.7.
 */
export const CREATURE_SINEWS = 'M3.6 4Q6.2 9.6 7 15.6M-3.4 10Q0.4 18 1.6 29M6.6 21Q4 25 2.8 29.6'
/**
 * "his shrivelled complexion": one fine line under the eye, the skin pouched
 * below the socket. Stroke with INK at 0.7.
 *
 * WHY THIS LINE (27 September 2026). Two lines first ran back level from the
 * eye's corner to within a unit of the ear, and at panel size the eye, the
 * lines and the ear read as a pair of spectacles and their arm, on every
 * panel with his face. Two short lines falling from the corner were tried
 * next, and read as a tear running down. A pouch under the eye reads as
 * neither.
 */
export const CREATURE_WRINKLES = 'M7.6 1.8Q10.4 3.2 13.2 2'

/**
 * The Creature's whole head in one: paper face, ink outline, black hair,
 * ear, brow, eye and lips. Place with headAt(); `eye` false leaves the lid
 * shut, for a panel before he wakes. Draw it after his Figure, so it sits over
 * the figure's black. With `collar` (the default) the dark collar of his cloak
 * is drawn over the base of the neck; a panel that covers him some other way
 * passes false and covers the neck itself.
 */
export function CreatureHead({
  t,
  eye = true,
  collar = true,
  hair = CREATURE_HAIR,
  gloss = CREATURE_HAIR_GLOSS,
  ear = true,
  sinews = true,
}: {
  t: string
  eye?: boolean
  collar?: boolean
  /** His hair, in the head's frame: CREATURE_HAIR hanging, or CREATURE_HAIR_SKULL for a panel that lays it out itself. */
  hair?: string
  gloss?: string
  /** False for a head seen lying face up, where the ear's curve read as a mouth. */
  ear?: boolean
  /**
   * False for a head seen lying face up. WHY (27 September 2026): the sinews
   * run down the cheek and neck, so on a head turned on its back they lie
   * across the face, and at panel size two lines across his face read as
   * scars, the film image this text must never show.
   */
  sinews?: boolean
}) {
  return (
    <g transform={t}>
      <path d={HEAD_CREATURE} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <path d={hair} fill={INK} stroke={PAPER} strokeWidth={1} strokeLinejoin="round" />
      <path d={gloss} fill={PAPER} />
      <path d={CREATURE_BROW + CREATURE_LIPS + CREATURE_SOCKET} fill={INK} />
      {ear && (
        <path d={CREATURE_EAR} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
      )}
      {eye ? (
        <>
          <path d={CREATURE_EYE_LID} fill="none" stroke={INK} strokeWidth={1.2} />
          <path d={CREATURE_PUPIL} fill={INK} />
        </>
      ) : (
        <path d="M7.2 -3.4Q10.8 -2 14.4 -3.6" fill="none" stroke={INK} strokeWidth={1.2} />
      )}
      <path
        d={(sinews ? CREATURE_SINEWS : '') + CREATURE_WRINKLES}
        fill="none"
        stroke={INK}
        strokeWidth={0.7}
        strokeLinecap="round"
      />
      {collar && (
        <path
          d={CREATURE_COLLAR}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1}
          strokeLinejoin="round"
        />
      )}
    </g>
  )
}

/** The collar of his cloak over the base of his neck, in the head's frame. */
export const CREATURE_COLLAR = 'M-14 25.4Q-2 20.6 12.4 25.4L14.6 34H-14.6Z'

// ── WALTON'S CREW ───────────────────────────────────────────────────────────
// The master, the lieutenant and the sailors are not described beyond their
// characters ("remarkable in the ship for his gentleness", Letter 2), so they
// share one plain weathered head under the knitted stocking cap of a seaman
// of the 1790s, its end drooping at the back, which also keeps them apart
// from Walton's fur cap. (A low round hat with a brim was tried first, and at
// panel size it read as a Victorian bowler.)

export const HEAD_SAILOR =
  'M-8.5 25C-10 19 -15 15 -16 6C-17 -9 -8.5 -20 3 -20C11 -20 15.4 -15 15.4 -9L15.8 -5L21.6 5L16.4 6.4L16.8 9.4L15.4 10.8L16.8 13.4C17 19 14 22.4 8.4 22.8L6.4 25Z'
export const SAILOR_CUTS =
  gouge(6, -7.4, 14, -6.8, 1) +
  'M6.6 -3.2Q9.8 -5.4 12.8 -3.4Q9.8 -1.6 6.6 -3.2Z' +
  gouge(10, 11.4, 15.6, 11, 0.5) +
  gouge(3.4, 2, 7.4, 8, 0.45, 0.8)
/**
 * The seaman's stocking cap: a close crown with a rolled edge at the brow,
 * and its end flopped over and hanging down behind. Ink, in the head's frame.
 */
export const SAILOR_HAT =
  'M-16.6 -8.4C-18.4 -19 -11 -26.6 -0.6 -27C8.6 -27.2 14.6 -22.6 16 -15.4C16.8 -12.6 16.4 -10.4 15.6 -8.6C6 -11 -6.6 -11 -16.6 -8.4Z' +
  'M-6 -26.4C-14.6 -26.6 -20.6 -21 -21.8 -13.4C-22.6 -8 -22 -3 -20.8 1.4C-19 2.2 -17.2 1.2 -16.8 -0.6C-17 -5.6 -16.6 -10.6 -15.2 -14.6C-13.6 -18.8 -10.4 -21.8 -6.4 -22.8Z'
/** The rolled edge of the cap, and the fold where its end hangs down behind. Paper. */
export const SAILOR_HAT_BAND =
  gouge(-16, -11.6, 15.6, -12.4, 1) + gouge(-9.4, -23.6, -18.8, -4, 0.5, 2.4)

// ── SLEDGES AND DOGS ────────────────────────────────────────────────────────
// "a low carriage, fixed on a sledge and drawn by dogs" (Letter 4), and the
// stranger's sledge "like that we had seen before". Both are this one shape.

/**
 * A sledge seen from the side, `len` long, its runners on the line at
 * `ground`, the front (curled up) towards `facing`: `box` is the low carriage
 * (fill INK), `runners` the runners and struts (stroke INK at 2.4), `slats`
 * the paper cuts along the carriage's side.
 */
export function sledge(
  [x, ground]: P,
  len: number,
  facing: 1 | -1,
  height = 26,
): { box: string; runners: string; slats: string } {
  const f = facing
  const x0 = x
  const x1 = x + f * len
  const top = ground - height
  const boxY = ground - 8
  const bx0 = x0 + f * 4
  const bx1 = x1 - f * len * 0.16
  const box = `M${n(bx0)} ${n(boxY)}L${n(bx1)} ${n(boxY)}L${n(bx1 - f * 2)} ${n(top + 6)}L${n(bx0 + f * len * 0.12)} ${n(top)}L${n(bx0)} ${n(top - 4)}Z`
  const curl = x1 + f * 8
  const runners =
    `M${n(x0 - f * 2)} ${n(ground)}L${n(x1)} ${n(ground)}Q${n(curl + f * 2)} ${n(ground)} ${n(curl)} ${n(ground - 10)}` +
    [0.12, 0.45, 0.78]
      .map((t) => {
        const sx = bx0 + (bx1 - bx0) * t
        return `M${n(sx)} ${n(ground)}L${n(sx)} ${n(boxY)}`
      })
      .join('')
  let slats = ''
  for (let t = 0.22; t < 0.95; t += 0.24) {
    const sx = bx0 + (bx1 - bx0) * t
    slats += gouge(sx, boxY - 2, sx, top + 7, 0.7)
  }
  slats += gouge(bx0 + f * 3, boxY - 5.5, bx1 - f * 3, boxY - 5.5, 0.6)
  return { box, runners, slats }
}

/**
 * A sledge dog standing, in profile facing left, centred on its body, about
 * 46 long and 40 tall with its ears up, paws on y 15: a pointed muzzle,
 * pricked ears and a tail curled over its back. Ink; mirror it with
 * scale(-1 1) to face right. DOG_FAR_LEGS goes behind (stroke at 4).
 */
export const DOG =
  'M-26 -10L-21 -13.4L-17 -15.6L-15.2 -24L-11.8 -16.6L-8 -14.6L-4 -10.4L6 -9.6L15 -9.6L18.8 -7.6L19.4 1L17.8 12L20.8 13.6L20.6 15L14.6 15L14.2 3.4L11.6 0L2 -0.6L-6.6 0L-7.6 12L-5 13.6L-5.2 15L-11.2 15L-11.6 2.4L-13.2 -3.6L-17 -6L-22.6 -7L-26 -8.4Z'
export const DOG_FAR_LEGS = 'M9 -1L7 13.6M-2 -1L-3 13.6'
/** Its tail, curled up over the rump. Fill INK. */
export const DOG_TAIL =
  'M17 -8.6C20 -12 22.4 -17 20 -20.6C18.4 -22.8 15 -21.6 15.6 -18.8C17.6 -18.8 18.4 -17 17.4 -14.6C16.6 -12.4 15.2 -10.6 14.2 -9.4Z'
/** The paper cuts of its eye, its far ear's edge and its coat. */
export const DOG_CUTS =
  gouge(-19.6, -11.6, -17, -12.2, 0.6) +
  gouge(-13.4, -16.4, -12.6, -21, 0.45) +
  gouge(-6, -7.6, 8, -6.8, 0.6, 0.6) +
  gouge(-10, -4, -8.4, 6, 0.5, -0.6) +
  gouge(12, -6, 15.6, 6, 0.5, 0.6)

// ── HANDS ───────────────────────────────────────────────────────────────────
// In the frame of the wrist: the wrist at (0, 0), the hand pointing along +x,
// the thumb on the -y side. `man` turns them along the forearm. Drawn larger
// than life, with a clear gap between every finger, because a hand whose
// fingers merge reads as a fist at phone width.

/** An open hand, the fingers spread. */
export const OPEN_HAND: Part[] = [
  { d: 'M-0.8 -4.6C3 -5.8 6.5 -6 9.4 -5.2L9.6 5C6.5 5.8 3 5.6 -0.8 4.4Z' },
  { d: 'M8.8 -3.9L16.4 -7.6', w: 2.2 },
  { d: 'M9.3 -1.3L18.2 -3', w: 2.2 },
  { d: 'M9.3 1.4L17.6 2.4', w: 2.2 },
  { d: 'M8.8 4L15 6.8', w: 2.1 },
  { d: 'M2.4 -4.4L5.8 -9L8.8 -10.8', w: 2.3 },
]

/**
 * A hand thrown up with the fingers splayed wide, palm out: horror, warding
 * off. Wider than OPEN_HAND, so it still reads as spread fingers when drawn
 * large (at OPEN_HAND's spread and twice the size it read as a paw).
 */
export const SPREAD_HAND: Part[] = [
  { d: 'M-0.8 -5C3 -6.4 7 -6.6 10 -5.6L10.4 5.4C7 6.4 3 6 -0.8 4.8Z' },
  { d: 'M9.4 -4.4L16.4 -12', w: 2.3 },
  { d: 'M10.2 -1.6L19.8 -5.4', w: 2.3 },
  { d: 'M10.2 1.8L19.8 2.6', w: 2.3 },
  { d: 'M9.6 4.8L16.8 10', w: 2.2 },
  { d: 'M2.4 -5L3.6 -11.4L5.6 -16', w: 2.4 },
]

/** A hand holding something flat (a book, a letter): fingers together, cut apart, the thumb over. */
export const HOLD_HAND: Part[] = [
  { d: 'M-0.8 -4.4C3 -5.6 7 -5.8 10 -4.8L10 5C7 5.6 3 5.4 -0.8 4.2Z' },
  { d: 'M9.5 -2.8L17 -3.2', w: 2.2 },
  { d: 'M9.5 0L17.6 0.2', w: 2.2 },
  { d: 'M9.5 2.8L16.6 3.4', w: 2.2 },
  { d: 'M2.8 -4.2L7 -8.2L10.5 -9.4', w: 2.4 },
]
/** The paper lines between the fingers of HOLD_HAND, in its frame. */
export const HOLD_CUTS = gouge(10.5, -1.4, 17, -1.5, 0.5) + gouge(10.5, 1.4, 16.8, 1.8, 0.5)

/** A fist closed round a stick, a rope or a handle; the knuckles cut apart. */
export const GRIP_HAND: Part[] = [
  {
    d: 'M-0.8 -4.4C4 -6 9.5 -6.2 11.8 -3.2C13.2 -1 13 2.6 11.3 4.4C8.2 6 3.2 5.6 -0.8 4.2Z',
  },
]

/** A shoe or a short boot, its heel at the ankle point, toe towards `facing`. */
export function boot([x, y]: P, facing: 1 | -1): Part {
  const f = facing
  return {
    d: `M${x - f * 5} ${y - 7}L${x + f * 6} ${y - 6}C${x + f * 11} ${y - 5} ${x + f * 14} ${y - 2} ${x + f * 14} ${y + 1}L${x - f * 6} ${y + 1}Z`,
  }
}

export type Hand = { parts: Part[]; scale?: number; rot?: number; flip?: boolean }

export const line = (pts: P[]) => 'M' + pts.map(([x, y]) => `${x} ${y}`).join('L')
const r1 = (v: number) => Math.round(v * 10) / 10

/** The transform `man` gives a hand at the end of `arm`. */
export function handAt(arm: P[], facing: 1 | -1, h: Hand) {
  const [x0, y0] = arm[arm.length - 2]
  const [x1, y1] = arm[arm.length - 1]
  const a = (Math.atan2(y1 - y0, x1 - x0) * 180) / Math.PI + (h.rot ?? 0)
  const s = h.scale ?? 1
  const flip = (h.flip ?? facing === -1) ? -1 : 1
  return `translate(${x1} ${y1}) rotate(${r1(a)}) scale(${s} ${flip * s})`
}

/** The unit vectors along and across the line from `a` to `b`. */
function axes(a: P, b: P): { u: P; v: P } {
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  const L = Math.hypot(dx, dy) || 1
  return { u: [dx / L, dy / L], v: [-dy / L, dx / L] }
}

/**
 * The coat of the 1790s on the line from neck to hip: shoulders `width`
 * across, drawn in at the waist, CUT AWAY at the front so the breeches show,
 * with tails hanging `tails` below the hip at the back. `front` is how far
 * below the hip the front edge stops (small, or negative for a coat cut high).
 * `swing` pushes the tails back, as a coat does on a man in motion. With
 * `long`, a greatcoat instead: the whole skirt to `tails` below the hip.
 */
export function coat(
  neck: P,
  hip: P,
  facing: 1 | -1,
  {
    width = 34,
    tails = 46,
    front = 4,
    flare = 7,
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
  const { u, v } = axes(neck, hip)
  const at = (o: P, a: number, b: number): P => [
    r1(o[0] + u[0] * a + v[0] * b),
    r1(o[1] + u[1] * a + v[1] * b),
  ]
  const h = width / 2
  const f = facing
  // v points to the figure's left when it walks down the page; `side` picks
  // the front (+1) or the back (-1) of the figure whichever way it faces.
  const side = (s: 1 | -1) => (v[0] * f >= 0 ? s : -s)
  const back = -f * swing
  const sF = at(neck, 5, side(1) * h)
  const sB = at(neck, 5, side(-1) * h)
  const tF = at(neck, -3, side(1) * h * 0.5)
  const tB = at(neck, -3, side(-1) * h * 0.5)
  const cF = at(neck, -3, side(1) * h)
  const cB = at(neck, -3, side(-1) * h)
  const wF = at(hip, -4, side(1) * h * 0.78)
  const wB = at(hip, -4, side(-1) * h * 0.78)
  const hemB: P = [
    r1(hip[0] + u[0] * tails + v[0] * side(-1) * (h * 0.78 + flare) + back),
    r1(hip[1] + u[1] * tails + v[1] * side(-1) * (h * 0.78 + flare)),
  ]
  if (long) {
    const hemF: P = [
      r1(hip[0] + u[0] * tails + v[0] * side(1) * (h * 0.78 + flare) + back),
      r1(hip[1] + u[1] * tails + v[1] * side(1) * (h * 0.78 + flare)),
    ]
    return path([tF, cF, sF, wF, hemF, hemB, wB, sB, cB, tB])
  }
  // Cut away: the front stops just below the waist, the edge runs back and
  // down across the thigh, and the tails hang behind to `tails` below the hip.
  const fF = at(hip, front, side(1) * h * 0.8)
  const cut = at(hip, front + (tails - front) * 0.42, side(-1) * h * 0.12)
  const tf = at(hip, tails, side(-1) * h * 0.22)
  const tailF: P = [r1(tf[0] + back), tf[1]]
  return path([tF, cF, sF, wF, fF, cut, tailF, hemB, wB, sB, cB, tB])
}

/**
 * A coat's outline through its points: the first three and the last three
 * are the collar curves (start, control, shoulder; shoulder, control, end),
 * the rest straight edges.
 */
function path(p: P[]): string {
  const k = p.length
  const pt = (q: P) => `${q[0]} ${q[1]}`
  const mid = p
    .slice(3, k - 3)
    .map((q) => `L${pt(q)}`)
    .join('')
  return `M${pt(p[0])}Q${pt(p[1])} ${pt(p[2])}${mid}L${pt(p[k - 3])}Q${pt(p[k - 2])} ${pt(p[k - 1])}Z`
}

/**
 * A plain dark cloak hung from the shoulders on the line from neck to hip,
 * falling `drop` below the hip and widening to the hem: the Creature's dress
 * once he has taken "some clothes" from Victor's rooms.
 */
export function cloak(neck: P, hip: P, { width = 40, drop = 70, flare = 16 } = {}): string {
  const { u, v } = axes(neck, hip)
  const at = (o: P, a: number, b: number): P => [
    r1(o[0] + u[0] * a + v[0] * b),
    r1(o[1] + u[1] * a + v[1] * b),
  ]
  const h = width / 2
  const s1 = at(neck, 3, h)
  const s2 = at(neck, 3, -h)
  const c1 = at(neck, -4, h * 0.9)
  const c2 = at(neck, -4, -h * 0.9)
  const t1 = at(neck, -5, h * 0.4)
  const t2 = at(neck, -5, -h * 0.4)
  const hem1 = at(hip, drop, h + flare)
  const hem2 = at(hip, drop, -h - flare)
  const hemMid = at(hip, drop + 4, 0)
  return `M${t1[0]} ${t1[1]}Q${c1[0]} ${c1[1]} ${s1[0]} ${s1[1]}L${hem1[0]} ${hem1[1]}Q${hemMid[0]} ${hemMid[1]} ${hem2[0]} ${hem2[1]}L${s2[0]} ${s2[1]}Q${c2[0]} ${c2[1]} ${t2[0]} ${t2[1]}Z`
}

/**
 * A figure from its joints: arms through shoulder, elbow and wrist, legs
 * through hip, knee and ankle, a coat (or with `robe`, a cloak or gown shape
 * of the panel's own) on the line from neck to hip, a hand at the end of each
 * arm. Returned in drawing order: far limbs, body, near leg, head, headwear,
 * near arm (lifted off the coat by its own paper edge), near hand. A limb may
 * be left out by passing an empty list.
 */
export function man(p: {
  facing: 1 | -1
  neck: P
  hip: P
  head: { d: string; at: P; rot?: number; scale?: number }
  /** Hair or a cap in the head's frame, drawn over the head. */
  hair?: string
  near: { arm: P[]; leg: P[]; hand?: Hand }
  far: { arm: P[]; leg: P[]; hand?: Hand }
  body?: {
    width?: number
    tails?: number
    front?: number
    flare?: number
    swing?: number
    long?: boolean
  }
  /** A body shape of the panel's own, in place of the coat. */
  robe?: string
  arm?: number
  leg?: number
  /** Shoes: false for a figure whose feet are hidden. */
  feet?: boolean
}): Part[] {
  const f = p.facing
  const aw = p.arm ?? 8.5
  const lw = p.leg ?? 9.5
  const feet = p.feet ?? true
  const last = (a: P[]) => a[a.length - 1]
  const hand = (arm: P[], h?: Hand): Part[] =>
    h && arm.length > 1 ? h.parts.map((q) => ({ ...q, t: handAt(arm, f, h) })) : []
  const limb = (pts: P[], w: number, sep?: number): Part[] =>
    pts.length > 1 ? [{ d: line(pts), w, sep }] : []
  const ht = headAt(f, p.head.at, p.head.rot ?? 0, p.head.scale ?? 1)
  return [
    ...limb(p.far.arm, aw),
    ...hand(p.far.arm, p.far.hand),
    ...limb(p.far.leg, lw),
    ...(feet && p.far.leg.length > 1 ? [boot(last(p.far.leg), f)] : []),
    { d: line([p.neck, p.hip]), w: (p.body?.width ?? 30) * 0.75 },
    { d: p.robe ?? coat(p.neck, p.hip, f, p.body) },
    ...limb(p.near.leg, lw),
    ...(feet && p.near.leg.length > 1 ? [boot(last(p.near.leg), f)] : []),
    { d: p.head.d, t: ht },
    ...(p.hair ? [{ d: p.hair, t: ht }] : []),
    ...limb(p.near.arm, aw, 1.4),
    ...hand(p.near.arm, p.near.hand),
  ]
}

/**
 * The pale neckcloth of the 1790s at the throat, in the head's frame: fill
 * with PAPER after the figure. Victor, Walton under his collar, Alphonse.
 */
export const NECKCLOTH =
  'M-4 24.6C0 23.4 5 23.6 8.6 25C9.4 28 8.6 31 7 33C3 33.6 -1.6 33 -4.6 31.4C-5.4 29 -5.2 26.6 -4 24.6Z'

// ── ADDED FOR MOMENTS 6 TO 10 (Chapters 6 to 16) ────────────────────────────
// Elizabeth grown, Justine, and the De Laceys, from the held edition:
//
// - ELIZABETH, grown: "Time had altered her since I last beheld her; it had
//   endowed her with loveliness surpassing the beauty of her childish years"
//   (Chapter 7). So the same GOLD_HAIR, loose down her back, on a woman's face
//   (HEAD_WOMAN) and a woman's gown (gown()).
// - JUSTINE: "She was dressed in mourning" at her trial (Chapter 8), and in
//   the prison "her hands were manacled". Her hair is not described, so it is
//   plain and dark, bound in a knot at the nape (JUSTINE_HAIR), as a servant
//   of the house would wear it.
// - DE LACEY: "One was old, with silver hairs and a countenance beaming with
//   benevolence and love"; "The old man, whom I soon perceived to be blind"
//   (Chapters 11 and 12). So his long hair is cut in PAPER (DE_LACEY_HAIR) and
//   his eye is cut shut (DE_LACEY_CUTS), a lid and lashes, never an open eye.
// - FELIX: "the younger was slight and graceful in his figure, and his
//   features were moulded with the finest symmetry" (Chapter 11). So a slight
//   young man, clean-shaven, with short dark hair (FELIX_HAIR), in a plain
//   coat: he works in the fields.
// - AGATHA: "a coarse blue petticoat and a linen jacket being her only garb;
//   her fair hair was plaited, but not adorned" (Chapter 11). So her fair hair
//   is PAPER, drawn close and falling in one plait down her back
//   (AGATHA_HAIR); the blue of her petticoat is left to the words.
// - SAFIE: "Her hair of a shining raven black, and curiously braided ... her
//   complexion wondrously fair, each cheek tinged with a lovely pink"
//   (Chapter 13). So her hair is INK with its braids cut in paper coiled round
//   her head (SAFIE_HAIR, SAFIE_BRAIDS). The pink of her cheeks is left to the
//   words: a spot of red on a black profile this small sat against the eye and
//   read as a red eye, which is not what the text says of her.

/** A young woman's face: Elizabeth grown, Justine, Agatha, Safie. */
export const HEAD_WOMAN =
  'M-7 24C-9 19 -13.5 15 -14.5 6C-15.5 -8.5 -7 -19 3 -19C10.8 -19 15 -14.4 15 -8.6L15.2 -4.8L19.8 3.6L15.4 5.2L15.8 8L14.6 9.4L15.6 11.6C15.4 16.4 12.4 19 8 19.4L6 24Z'
/** Her features: a fine brow, the eye, a small mouth. */
export const WOMAN_CUTS =
  gouge(6, -7.4, 13.4, -6.8, 0.75) +
  'M6.6 -3.2Q9.8 -5.6 12.8 -3.4Q9.8 -1.6 6.6 -3.2Z' +
  gouge(9.8, 10.2, 14.6, 9.8, 0.45)
/** The same eye lowered, for weeping: a lid cut as a downward curve. */
export const WOMAN_WEEPING_CUTS =
  gouge(6, -7, 13.4, -6.2, 0.75) +
  'M6.8 -3.2Q9.8 -1.6 12.8 -2.6Q9.8 -0.6 6.8 -3.2Z' +
  gouge(9.8, 10.4, 14.6, 10.4, 0.45)
/** A tear on the cheek, in PAPER. */
export const TEAR = 'M9.6 1.2Q10.8 3.4 10.4 5.2Q9.2 5.8 8.6 4.6Q8.6 2.8 9.6 1.2Z'

/** Justine's plain dark hair, drawn back and bound in a knot at the nape. INK. */
export const JUSTINE_HAIR =
  'M14 -11.5C12 -18.6 6 -22 -1 -21.6C-10.6 -21 -17 -13.4 -17.4 -3C-17.6 3 -16.4 8.6 -13.8 13L-8.8 11.4C-10.6 6.6 -10.8 1 -9.8 -3.4C-8.4 -8.6 -3.6 -12 2.4 -12.6C7 -13.2 10.6 -12.6 14 -11.5Z' +
  'M-25 5.4a7 6.4 0 1 0 14 0a7 6.4 0 1 0 -14 0Z'
/** The paper strands drawn back through it, and the coil of the knot. */
export const JUSTINE_HAIR_CUTS =
  gouge(11, -16.4, -8, -17.4, 0.55, -1.2) +
  gouge(6, -13.4, -14, -6, 0.6, 1.6) +
  gouge(-10.6, -2, -14, 8, 0.5, 0.8) +
  gouge(-22.6, 2.6, -14.4, 1.6, 0.5, -1.4) +
  gouge(-22, 8.4, -14, 9, 0.5, 1.4)

/** De Lacey: an old man's face, lined, a little sunk at the mouth. */
export const HEAD_DE_LACEY =
  'M-8 25C-9.5 19 -14.5 15 -15.5 6C-16.5 -9 -8 -20 3 -20C11 -20 15 -15.4 15.2 -9L15.6 -5.2L22 5.4L16.4 6.8L16.2 9.6L15 10.8L16.6 13.4C16.8 18 13.8 21.4 8.6 21.8L6.4 25Z'
/**
 * His features: a heavy, kindly brow, the eye cut SHUT (a lid curving down,
 * and three short lashes), the lines of age at the cheek and brow, and a
 * mouth turned up at its corner ("his benevolent smiles").
 */
export const DE_LACEY_CUTS =
  gouge(5.6, -8, 13.8, -7.4, 1) +
  gouge(6.8, -3.4, 13.4, -3.4, 0.6, 1) +
  gouge(3.8, 1, 7.8, 10.4, 0.5, 1.2) +
  gouge(2.6, -13.6, 11, -12.8, 0.45) +
  gouge(9.6, 11.8, 15.2, 10.8, 0.5, 0.6)
/** The lashes of the shut eye, in paper. */
export const DE_LACEY_LASHES = 'M8.6 -2L8 -0.4M10.4 -1.6L10.2 0M12.2 -2L12.4 -0.4'
/** "silver hairs": long, falling from the crown to the collar. PAPER, with DE_LACEY_HAIR_LINES in ink. */
export const DE_LACEY_HAIR =
  'M8 -15.4C3 -17.2 -4 -17 -9.6 -13.6C-15.4 -9.6 -18 -2.6 -18.2 4.4C-18.4 11.4 -17 18.4 -14.4 24.6L-8.2 23.4C-10.2 17.4 -10.8 10.4 -10 4C-9.2 -2.4 -6 -8 -0.4 -11.2C2.4 -12.8 5.4 -13.8 8 -15.4Z'
export const DE_LACEY_HAIR_LINES =
  'M3 -14.8Q-9 -12 -13.4 0Q-15 10 -12.4 22M-2 -11.6Q-9 -6 -10.8 4Q-11.6 13 -10 21'

/** Felix: a young, clean-cut face. */
export const HEAD_FELIX =
  'M-8 25C-9.5 19 -14 15 -15 6C-16 -9 -8 -19.6 3 -19.6C11 -19.6 15.2 -14.8 15.2 -8.8L15.6 -5L21.4 4.6L16 6.2L16.4 9L15 10.4L16.2 12.8C16.2 17.4 13.6 20.6 8.8 21.2L6.8 25Z'
export const FELIX_CUTS =
  gouge(5.8, -7.4, 14, -6.6, 0.95) +
  'M6.4 -3.4Q10 -6 13.4 -3.6Q10 -1.4 6.4 -3.4Z' +
  gouge(10.2, 11.4, 15.6, 11, 0.5)
/** His short dark hair, close to the head. INK, a little beyond the skull. */
export const FELIX_HAIR =
  'M15.2 -9.4C16 -16 11 -22.4 2 -22.6C-9.4 -22.8 -17.4 -15 -17.4 -3.6C-17.4 3 -16 8.4 -13 12.6L-8.6 10.6C-10.4 6 -10.8 1 -10 -3C-8.8 -8.4 -3.8 -11.8 2.6 -12C7.6 -12.2 11.6 -10.8 15.2 -9.4Z'
export const FELIX_HAIR_CUTS =
  gouge(12, -17.6, -6, -19, 0.55, -1) +
  gouge(6, -14.4, -13, -8, 0.6, 1.4) +
  gouge(-9.6, -3, -13.4, 8, 0.5, 0.8)

/** Agatha's fair hair, drawn close over the crown, and its one plait down her back. PAPER. */
export const AGATHA_HAIR =
  'M13.8 -11.6C11.8 -18.4 5.8 -21.8 -1 -21.4C-10.4 -20.8 -16.6 -13.4 -17 -3.4C-17.2 2.6 -16.2 7.8 -14 12L-9 10.8C-10.6 6.2 -10.8 1 -9.8 -3.4C-8.4 -8.6 -3.6 -12 2.4 -12.6C7 -13.2 10.4 -12.6 13.8 -11.6Z' +
  'M-15.6 8C-18.4 16 -19 26 -18 38C-17.6 42 -15.8 44 -13.4 43.6C-12.6 36 -12.4 24 -11.6 12Z'
/** Ink lines through her hair, and the crossings of the plait. */
export const AGATHA_HAIR_LINES =
  'M9 -16.4Q-5 -16 -12.4 -4M3 -13Q-6 -9 -10.4 2' +
  'M-17.6 14L-13 17M-17.8 20L-12.6 23M-17.8 26L-12.6 29M-17.8 32L-12.8 35M-17.4 38L-13.2 40.6'

/** Safie's raven-black hair, "curiously braided", wound up round her head. INK. */
export const SAFIE_HAIR =
  'M14.6 -10.8C13 -19 6 -24 -2 -23.8C-12 -23.6 -19.4 -16 -19.8 -5C-20 3 -18.4 10 -14.8 15.4L-9 13.4C-10.8 8 -11 2 -10 -2.8C-8.4 -8.4 -3.6 -12 2.6 -12.6C7.2 -13 11.2 -12.4 14.6 -10.8Z'
/** The braids coiled round it, cut in paper as rows of short slanting cuts. */
export const SAFIE_BRAIDS = (() => {
  let d = ''
  const coil = (cx: number, cy: number, r: number, a0: number, a1: number) => {
    for (let a = a0; a < a1; a += 0.42) {
      const x = cx + Math.cos(a) * r
      const y = cy + Math.sin(a) * r
      // Each cut slants across the braid, so a row of them reads as plaiting.
      const tx = -Math.sin(a + 0.7) * 2.4
      const ty = Math.cos(a + 0.7) * 2.4
      d += gouge(x - tx, y - ty, x + tx, y + ty, 0.85)
    }
  }
  coil(-4, -4, 14, 3.3, 5.3)
  coil(-7, -2, 8, 2.2, 5.6)
  return d
})()

/**
 * A woman's gown of the 1790s: the bodice from the neck to a high waist,
 * then a long skirt falling to `hemY`, `front` ahead of the waist and `back`
 * behind it. With `kneel`, the skirt is spread on the floor round a kneeling
 * figure instead, its hem at `hemY`. `facing` is the way the figure faces.
 */
export function gown(
  neck: P,
  waist: P,
  hemY: number,
  facing: 1 | -1,
  {
    shoulder = 24,
    waistW = 17,
    front = 26,
    back = 32,
  }: { shoulder?: number; waistW?: number; front?: number; back?: number } = {},
): string {
  const f = facing
  const { u, v: v0 } = axes(neck, waist)
  // v points to the figure's back.
  const v: P = [v0[0] * -f, v0[1] * -f]
  const at = (o: P, a: number, b: number): P => [
    r1(o[0] + u[0] * a + v[0] * b),
    r1(o[1] + u[1] * a + v[1] * b),
  ]
  const pt = (p: P) => `${r1(p[0])} ${r1(p[1])}`
  const h = shoulder / 2
  const t1 = at(neck, -4, h * 0.55)
  const c1 = at(neck, -4, h)
  const s1 = at(neck, 4, h)
  const w1 = at(waist, 0, waistW / 2)
  const hb: P = [waist[0] - f * back, hemY]
  const hf: P = [waist[0] + f * front, hemY]
  const w2 = at(waist, 0, -waistW / 2)
  const s2 = at(neck, 4, -h)
  const c2 = at(neck, -4, -h)
  const t2 = at(neck, -4, -h * 0.55)
  const midHem: P = [(hb[0] + hf[0]) / 2, hemY + 3]
  return (
    `M${pt(t1)}Q${pt(c1)} ${pt(s1)}L${pt(w1)}` +
    `C${pt([w1[0] - f * 6, w1[1] + (hemY - w1[1]) * 0.4])} ${pt([hb[0] + f * 4, hemY - (hemY - w1[1]) * 0.25])} ${pt(hb)}` +
    `Q${pt(midHem)} ${pt(hf)}` +
    `C${pt([hf[0] - f * 4, hemY - (hemY - w2[1]) * 0.25])} ${pt([w2[0] + f * 5, w2[1] + (hemY - w2[1]) * 0.4])} ${pt(w2)}` +
    `L${pt(s2)}Q${pt(c2)} ${pt(t2)}Z`
  )
}
