import type { CSSProperties, ReactNode } from 'react'

import { gouge } from '@/components/comics/linocut/carve'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'

/**
 * The people of Silas Marner, cut from the text's own descriptions and shared
 * by every panel, so that a student meets the same Silas, the same Godfrey and
 * the same Dunstan from Lantern Yard to the wedding. Cut first for the panels
 * of moments 1 to 5 (Chapters 1 to 7); every other panel of this text draws
 * its recurring people from here. A change to any shape below changes every
 * panel that uses it: preview them all before changing one. A person this file
 * does not have yet (Eppie, Dolly, Nancy, Priscilla, the Squire, Aaron) is
 * added HERE, by the first artist who needs them, so the next one finds them.
 *
 * A figure is cut as the reference panel cuts Fred
 * (src/data/comics/a-christmas-carol/counting-house.tsx): a paper halo round
 * every part, so it reads as one black shape with a single carved outline,
 * then the parts in ink, then the paper cuts of folds and features. The
 * machinery (Figure, Part, headAt, handAt, the hands, coat, man) is the
 * Frankenstein kit's (src/data/comics/frankenstein/panels/people.tsx), copied
 * rather than imported so that a change made for one text cannot redraw
 * another.
 *
 * WHAT THE TEXT SAYS, and so what is drawn (the held edition,
 * src/data/full-texts/silas-marner.ts):
 *
 * - SILAS. "a pallid young man, with prominent short-sighted brown eyes"
 *   when he came (Chapter 1); "those large brown protuberant eyes in Silas
 *   Marner's pale face"; "that defenceless, deer-like gaze which belongs to
 *   large prominent eyes"; by the fifteenth year "so withered and yellow, that,
 *   though he was not yet forty, the children always called him 'Old Master
 *   Marner'", his "face and figure shrank and bent themselves" (Chapter 2);
 *   "his pale face, strange straining eyes, and meagre form" (Chapter 5); "the
 *   pale thin figure of Silas Marner" (Chapter 7). So his face is the one face
 *   cut in PAPER on a black figure, in every panel (SilasFace): he is the pale
 *   man among the ruddy villagers. His eye is drawn large, round and set
 *   forward, a big dark iris in a wide white, the look of a man who sees only
 *   what is close. With `withered` (Raveloe, Part One) the cheek is hollowed
 *   and lined; without it (Lantern Yard) the face is the same face, younger.
 *   His figure is thin and, at his work, bent ("the bent, tread-mill attitude
 *   of the weaver", Chapter 1). His hair is not described in Part One, so it
 *   is plain and dark, worn lank to the collar (SILAS_HAIR). Sixteen years on
 *   "The weaver's bent shoulders and white hair give him almost the look of
 *   advanced age" and "His large brown eyes seem to have gathered a longer
 *   vision" (Chapter 16): so in Part Two his hair is cut in PAPER
 *   (`white`), and the eye may be drawn a little calmer. Brown is left to the
 *   words.
 * - WILLIAM DANE. "a young man, a little older than himself"; "the
 *   self-complacent suppression of inward triumph that lurked in the narrow
 *   slanting eyes and compressed lips of William Dane"; of the two friends,
 *   "many a pair of pale-faced weavers" (Chapter 1). So in Lantern Yard his
 *   face is paper too (WilliamFace), set against Silas's: the same cut of
 *   face, but the eye a narrow slit under a heavy lid that slopes down
 *   towards the ear, the pupil half hidden, and the lips pressed into one
 *   straight line turned up at the corner. His hair is combed flat. The two
 *   pale faces are the pair the chapter is about; nobody else there is
 *   described, so the minister and the brethren keep dark faces. (His eye was
 *   first cut as a paper slit in a black face, and at panel size it vanished.)
 * - GODFREY. "a fine open-faced good-natured young man"; "Godfrey's blond
 *   face"; "That big muscular frame of his" (Chapter 3). So he is the broadest
 *   man in any panel, with an open, regular profile, and his fair hair is cut
 *   in PAPER (GODFREY_HAIR) on the black head. He is "the handsome son" of
 *   the Squire.
 * - DUNSTAN (Dunsey). "a thick-set, heavy-looking young man ... with the
 *   flushed face and the gratuitously elated bearing which mark the first
 *   stage of intoxication"; "a spiteful jeering fellow" (Chapter 3); "His own
 *   ill-favoured person" (Chapter 4). So he is shorter than Godfrey and
 *   thicker, with a heavy jaw and jowl, a low brow, a small heavy-lidded eye
 *   and a jeering mouth (DUNSTAN_CUTS); his hair is dark, to set him apart
 *   from his fair brother at a glance. When the text flushes him the spot
 *   colour is one patch ON THE CHEEK (DUNSTAN_FLUSH), never on the mouth or
 *   chin: red there reads as blood at a glance, as it did on Hyde and on
 *   Juliet's lips. He carries a whip in both his chapters (Chapter 3, "taking
 *   a whip from the table"; Chapter 4, "It was Godfrey's whip ... because it
 *   had a gold handle").
 * - MR MACEY. "Mr. Macey, tailor and parish-clerk ... held his white head on
 *   one side, and twirled his thumbs with an air of complacency" (Chapter 6);
 *   "that oracular old gentleman" (Chapter 7). So an old man, his white hair
 *   cut in PAPER (MACEY_HAIR), his head tilted.
 * - JEM RODNEY. "the mole-catcher" (Chapter 1); "a known poacher, and
 *   otherwise disreputable" (Chapter 5). Nothing of his looks is given, so
 *   he is a rough labouring man, unshaven (JEM_CUTS), his hair rough, in a
 *   smock-frock (smock()).
 * - Anyone the text does not describe (the Lantern Yard minister and
 *   brethren, the Rainbow's landlord and drinkers) takes HEAD_PLAIN or
 *   HEAD_OLD, drawn plainly.
 *
 * THE SPOT COLOUR AND THE GOLD. In the panels of moments 1 to 5 the spot
 * colour marks the money wherever it is the subject (the empty church-money
 * bag in Lantern Yard, Silas's guineas under the bricks, the two leather bags
 * in Dunstan's hands), and otherwise a fire. The
 * text ties the gold to Eppie ("Gold!—his own gold ... it was a sleeping
 * child", Chapter 12), so a later panel may carry the colour from the one to
 * the other.
 *
 * The story is set "In the early years of this century" (Chapter 1), in war
 * time, so everyone wears the plain dress of about 1800 to 1815: gentlemen in
 * a tail-coat cut away at the front (coat()), breeches and boots, a
 * tall round hat (ROUND_HAT); labouring men in a smock-frock. Nothing is taken
 * from a film, television or stage production.
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
// y 22, the base of the neck at y 26. The nose, brow and chin are pushed out
// further than life: the rough edge of the print eats about two units, and a
// profile must survive that at phone width. Features are cut in PAPER in the
// same frame, except where a note says ink.

/** Silas: a long, thin head. Drawn in ink, then SilasFace over its front. */
export const HEAD_SILAS =
  'M-7 26C-8 20 -13.5 15 -14.5 6C-15.5 -9 -8 -20.5 3 -20.5C11 -20.5 15 -15.5 15.2 -9.5L15.4 -6.4L17.2 -2.8L21.4 6.2L16.4 7.6L16.8 10.4L15.4 11.8L16.4 14.4C16.4 19.4 14.2 22.6 9.6 23.4L7 26Z'
/** His pale face, laid over the front of the head in paper and outlined in ink. */
export const SILAS_FACE =
  'M0.4 -12.6C5 -14.2 11 -14 14.4 -12L15.2 -9.5L15.4 -6.4L17.2 -2.8L21.4 6.2L16.4 7.6L16.8 10.4L15.4 11.8L16.4 14.4C16.4 19.4 14.2 22.6 9.6 23.4C5.4 23 2 20.2 0.4 15.4C-1.2 9.6 -1.4 -4 0.4 -12.6Z'
/**
 * His lank dark hair: an ink lock over the top of the face (drawn after it),
 * and paper strands cut down the back of the head to the collar.
 */
export const SILAS_FRINGE =
  'M-0.6 -13.4C4 -15.8 10.6 -15.8 15.2 -12.2L14.8 -10C13 -11.4 10.4 -11.6 8.6 -10.6C7.4 -12 5 -12 3.4 -10.4C2.4 -11.6 1 -11.2 0.2 -9.6Z'
export const SILAS_HAIR =
  gouge(10, -17.6, -6, -17.6, 0.55, -1.4) +
  gouge(6, -15.6, -12.4, -8, 0.6, -1.8) +
  gouge(0, -12, -13.8, 2, 0.6, -1.6) +
  gouge(-3.2, -6, -11.6, 12, 0.55, -1) +
  gouge(-4.6, 2, -8.4, 18, 0.5, -0.6)
/** Part Two: his white hair, over the back of the head, in PAPER. Stroke SILAS_WHITE_LINES in ink over it. */
export const SILAS_WHITE_HAIR =
  'M-14.8 6C-16.4 -9 -8 -21.6 3 -21.6C10.6 -21.6 15 -17.4 15.8 -12C12.6 -13.6 7.6 -14.2 3.6 -13.4C1.2 -9 -0.4 -3 -0.4 3C-0.4 9 -2 15 -5 20C-8.6 18.6 -12 13 -14.8 6Z'
export const SILAS_WHITE_LINES =
  'M-10.6 -12C-13.6 -4 -13.4 6 -9 14M-5.4 -16C-9 -7 -8.6 4 -5.6 12M1 -17.4C-3.4 -9 -4.2 1 -2.2 8'

/** The large round eye set forward: white in paper, outlined; the iris in ink. */
const SILAS_EYE_WHITE = 'M6.4 -3.8Q10.4 -8.4 14.8 -4Q10.8 0.8 6.4 -3.8Z'
/** The same eye in Part Two: "a less vague, a more answering gaze", the lid lower. */
const SILAS_EYE_WHITE_CALM = 'M6.6 -3.6Q10.6 -6.8 14.6 -3.8Q10.8 0.2 6.6 -3.6Z'

/**
 * Silas's pale face, over HEAD_SILAS: place with the head's transform. With
 * `withered` (Raveloe) the cheek is hollowed and lined; `white` gives Part
 * Two's white hair and calmer eye. `look` moves the iris along the eye: 1 is
 * forward (at his work, or staring), 0 the middle.
 */
export function SilasFace({
  t,
  withered = true,
  white = false,
  look = 1,
}: {
  t: string
  withered?: boolean
  white?: boolean
  look?: number
}) {
  const ix = 10.4 + look * 1.6
  return (
    <g transform={t}>
      {white ? (
        <>
          <path d={SILAS_WHITE_HAIR} fill={PAPER} stroke={INK} strokeWidth={0.8} />
          <path d={SILAS_WHITE_LINES} fill="none" stroke={INK} strokeWidth={0.8} />
        </>
      ) : (
        <path d={SILAS_HAIR} fill={PAPER} />
      )}
      <path d={SILAS_FACE} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <path
        d={white ? SILAS_EYE_WHITE_CALM : SILAS_EYE_WHITE}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.1}
      />
      <circle cx={ix} cy={-3.7} r={2.3} fill={INK} />
      <circle cx={ix + 0.6} cy={-4.5} r={0.65} fill={PAPER} />
      <g fill="none" stroke={INK} strokeLinecap="round">
        {/* the heavy upper lid and the thin brow */}
        <path d="M6 -4.2Q10.4 -9 15.2 -4.4" strokeWidth={1.5} />
        <path d="M6.2 -9.4Q10.8 -11.2 15.2 -9.4" strokeWidth={1.2} />
        {/* the ear, at the back of the face */}
        <path d="M1.2 -3.6Q-2.4 -2.6 -1.6 3Q-0.6 6 1.8 5" strokeWidth={1} />
        {/* the mouth, and the shadow under the jaw */}
        <path d="M12.6 11.4L16 11.2" strokeWidth={1.1} />
        <path d="M2 16Q5.2 21.6 9.8 22.8" strokeWidth={0.8} />
        {withered && (
          <>
            {/* the hollow cheek, the fold under the eye, the line from nose to mouth */}
            <path d="M4.2 2.4Q6.2 9 9.4 14.6" strokeWidth={0.9} />
            <path d="M7.4 -0.2Q10.8 1.8 14.2 -0.6" strokeWidth={0.8} />
            <path d="M16.2 5.8Q12.8 8.2 12.2 11.2" strokeWidth={0.8} />
          </>
        )}
      </g>
      {!white && <path d={SILAS_FRINGE} fill={INK} />}
    </g>
  )
}

/** William Dane: a sharp, long nose. Drawn in ink, then WilliamFace over its front. */
export const HEAD_WILLIAM =
  'M-8 26C-9 20 -14 15 -15 6C-16 -9 -8 -20 3 -20C11 -20 15.2 -15 15.2 -9L15.6 -5.4L23 6.2L16.4 7.2L16.6 9.8L15.4 11.2L16.2 13.4C16.4 18 14.8 21.6 10 22.6L7.4 26Z'
/** His pale face, over the front of the head in paper and outlined in ink. */
export const WILLIAM_FACE =
  'M0.4 -12.6C5 -14.2 11 -14 14.4 -12L15.2 -9L15.6 -5.4L23 6.2L16.4 7.2L16.6 9.8L15.4 11.2L16.2 13.4C16.4 18 14.8 21.6 10 22.6C5.6 22.2 2 19.6 0.4 15C-1.2 9.4 -1.4 -4 0.4 -12.6Z'
/** His hair combed flat: an ink edge over the brow, and long paper strands combed back. */
export const WILLIAM_FRINGE =
  'M-0.8 -13.6C4 -16.4 10.8 -16.2 15.2 -12.4L14.8 -10.6C10.8 -12.4 5.8 -12.6 1 -11Z'
export const WILLIAM_HAIR =
  gouge(12, -18.4, -9, -14.6, 0.5, -1.2) +
  gouge(7, -15.8, -13, -7.4, 0.5, -1.4) +
  gouge(1, -12, -14.2, 1, 0.5, -1.2) +
  gouge(-3.6, -5, -11.4, 10, 0.45, -0.8)

/**
 * William's pale face, over HEAD_WILLIAM: place with the head's transform.
 * The narrow eye: a heavy upper lid sloping down towards the ear, a thin
 * lower lid, the pupil half hidden under the lid. The compressed lips: one
 * straight line, its back corner turned up.
 */
export function WilliamFace({ t }: { t: string }) {
  return (
    <g transform={t}>
      <path d={WILLIAM_HAIR} fill={PAPER} />
      <path d={WILLIAM_FACE} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <circle cx={12.4} cy={-4.4} r={1.5} fill={INK} />
      <g fill="none" stroke={INK} strokeLinecap="round">
        {/* the heavy lid, drawn low, and the thin lower lid */}
        <path d="M6.6 -3.4Q10.6 -6.6 15.2 -5.6" strokeWidth={2} />
        <path d="M7.6 -2.6Q11.2 -2 14.6 -4.4" strokeWidth={0.8} />
        {/* the lean brow */}
        <path d="M6.4 -9Q10.6 -10.4 15 -9.2" strokeWidth={1.1} />
        {/* the ear */}
        <path d="M1.2 -3.6Q-2.4 -2.6 -1.6 3Q-0.6 6 1.8 5" strokeWidth={1} />
        {/* the compressed lips, the back corner turned up */}
        <path d="M10.6 11.1L16.2 10.9M10.6 11.1Q10 11 9.8 10.5" strokeWidth={1.2} />
        {/* the shadow under the jaw */}
        <path d="M2 16Q5.2 21.4 9.6 22.4" strokeWidth={0.8} />
      </g>
      <path d={WILLIAM_FRINGE} fill={INK} />
    </g>
  )
}

/** Godfrey: a broad, regular head; an open profile. His hair is GODFREY_HAIR, in paper. */
export const HEAD_GODFREY =
  'M-9 26C-10.5 20 -16 15 -17 6C-18 -9 -9 -21.5 3 -21.5C12 -21.5 17 -16 17 -9.5L17 -5.8L22.6 4.4L17.2 6.2L17.6 9L16.2 10.4L17.4 12.8C17.8 19 14.6 23.4 8.6 24L7 26Z'
/** His fair hair, cropped and curling, and a short whisker before the ear. Fill with PAPER. */
export const GODFREY_HAIR =
  'M-17.4 5C-19.2 -8 -11 -23.2 3 -23.2C11.4 -23.6 17 -19.2 18 -12.6C15.4 -14.8 12.4 -15.4 9.8 -14.2C8.2 -16.6 4.2 -17 1.4 -15.2C0.4 -10.4 -1.6 -6.6 -2.4 -1.6C-2.6 2 -2 5 -0.6 7.6L-3 8C-5.6 7.6 -8.4 7.2 -10.8 7.4C-13.4 7.4 -15.8 6.6 -17.4 5Z'
/** The curls in his hair, stroked in ink over GODFREY_HAIR. */
export const GODFREY_CURLS =
  'M-12 -14Q-9 -12 -10 -8M-6 -18Q-3 -16 -4 -12M1 -20Q4 -18 3 -15M-14.6 -4Q-11.6 -2 -12.6 2M-8 -6Q-5 -4 -6 0M7 -19Q10 -17.4 9.4 -15'
/** His features: a level brow, a clear eye, a firm mouth. */
export const GODFREY_CUTS =
  'M6.8 -3.8Q10.2 -6.2 13.4 -4.2Q10.2 -2.2 6.8 -3.8Z' +
  gouge(6.2, -8.2, 14.6, -7.6, 1) +
  gouge(11.6, 11.4, 16.2, 11, 0.5) +
  gouge(5.4, 4, 8.4, 14, 0.5, 1)
/** The same, frowning: the brow drawn down towards the nose. "the look of gloomy vexation". */
export const GODFREY_FROWN_CUTS =
  'M7 -3.4Q10.2 -5.4 13.4 -3.8Q10.2 -2 7 -3.4Z' +
  gouge(6, -9.2, 14.8, -6.4, 1.05) +
  gouge(11.8, 11.8, 16.2, 11.2, 0.5) +
  gouge(5.4, 4, 8.4, 14, 0.5, 1)

/** Dunstan: thick-set, a heavy jaw and jowl, a thick neck. */
export const HEAD_DUNSTAN =
  'M-10 27C-12 21 -17 16 -17.5 6C-18 -8 -10 -19.5 2 -19.5C10.5 -19.5 15.5 -15 16 -9L16.4 -6L21.8 3.4L17 5.2L17.4 8.2L16 9.6L17.4 12.2C19 16 18.8 20.4 15.6 23.4C11.6 26.4 4 27 -2 27Z'
/** His cropped dark hair, cut in paper strands so the head does not read as a hood. */
export const DUNSTAN_HAIR =
  gouge(10, -16.8, -6, -17, 0.5, -1.2) +
  gouge(4, -14.4, -13, -7, 0.55, -1.6) +
  gouge(-2, -10, -15, 1, 0.5, -1.2)
/** His features: a low heavy brow, a small heavy-lidded eye, a jeering mouth, a jowl. */
export const DUNSTAN_CUTS =
  gouge(5.8, -7.2, 15.4, -6.4, 1.3) +
  'M7.8 -3.2Q10.8 -4.8 13.8 -3.6Q10.8 -2.2 7.8 -3.2Z' +
  gouge(9.8, 12.4, 16.8, 10, 0.6, -0.8) +
  gouge(4, 6, 8.4, 18, 0.5, 1.6) +
  gouge(-4, -1, -2.6, 8, 0.6, -1.2)
/**
 * Where the spot colour flushes him: one patch of RED on the cheek, [cx, cy,
 * rx, ry], below the eye and well clear of the mouth, as the Squire's is.
 * (Two level bars were tried first and read as war paint. Three short
 * slanting hatches came next, and the review of 2 October 2026 found that in
 * "Blackmail at the Red House" they read as three scratches across his cheek,
 * which is a wound; his portrait had already moved to a patch for the same
 * reason.)
 */
export const DUNSTAN_FLUSH: [number, number, number, number] = [5.4, 6.2, 3.2, 2.2]

/** An old man's head: Mr Macey, or any old villager. A sunken mouth, a long upper lip. */
export const HEAD_OLD =
  'M-8 25C-9 19 -14 14.6 -15 6C-16 -9 -8 -20 3 -20C11 -20 15 -15 15 -9L15.4 -5L21.4 5.4L16 6.6L14.8 9.6L14.2 11L16.8 14C17.2 18 14.6 21 9.6 21.6L7 25Z'
/** Mr Macey's white hair, over the crown and the back of the head. Fill with PAPER. */
export const MACEY_HAIR =
  'M-15.6 6C-17.4 -8 -9 -21.4 3 -21.4C10 -21.4 14.4 -17.6 15.6 -12.4C12 -14 6 -14.4 2 -13C-1 -8 -2.6 -2 -2.4 4C-6 6.8 -12 7.8 -15.6 6Z'
/** Its strands, in ink over it. */
export const MACEY_HAIR_LINES = 'M-11 -12C-14 -4 -13.6 2 -12 5M-5 -16C-9 -8 -8.4 -1 -7 4'
/** An old man's features: a thin brow, a small eye, lines at the eye and mouth. */
export const OLD_CUTS =
  gouge(6.4, -8.4, 14, -7.2, 0.7) +
  'M7.6 -3.6Q10.4 -5.4 13 -3.8Q10.4 -2.4 7.6 -3.6Z' +
  gouge(10.4, 10.6, 14.6, 10.8, 0.45) +
  gouge(14.2, -1.4, 16, 2.6, 0.35) +
  gouge(4.6, 3, 7.2, 13, 0.45, 1.2) +
  gouge(-3.6, -1, -2.6, 6, 0.55, -1)

/** Jem Rodney: a rough, bony face; rough hair. */
export const HEAD_JEM =
  'M-8.5 25C-10 19 -15 15 -16 6C-17 -9 -8.6 -20 3 -20C11 -20 15.5 -15.6 15.8 -9.6L16 -6L20.8 4.4L16.4 5.8L16.8 8.8L15.4 10.2L16.6 12.8C17 18.4 14.6 22 9 22.6L7 25Z'
/** His rough hair, in tufts over the crown and the nape. Fill with INK after the head. */
export const JEM_HAIR =
  'M-15.6 4C-18.6 3 -19.6 0 -17.6 -2C-20 -4.6 -19 -8.4 -16 -8.6C-17.4 -12.6 -14.6 -15.6 -11.4 -14.6C-11 -18.6 -7 -20.8 -3.6 -19.4C-2 -22.4 2.6 -22.6 4.6 -20C7.6 -21.2 10.6 -19.6 11.4 -17L3 -16Z'
/** The lines between his tufts, in PAPER. */
export const JEM_HAIR_CUTS =
  gouge(-16, -4.6, -11, -6, 0.45, 0.6) +
  gouge(-12.6, -11.6, -7.4, -11.2, 0.45, 0.6) +
  gouge(-5.6, -17, -1, -14.6, 0.45, 0.6) +
  gouge(2, -19.2, 5.6, -16, 0.4, 0.4)
/** His features: a wide eye, a rough brow, and the stubble of his jaw in paper dots. */
export const JEM_CUTS =
  gouge(6.2, -8.6, 14.8, -8, 0.9) +
  'M6.8 -3.8Q10.2 -7 13.6 -4.2Q10.2 -1.4 6.8 -3.8Z' +
  gouge(11.4, 11, 16, 10.6, 0.5) +
  gouge(-3.6, -1, -2.6, 6, 0.6, -1.2)
/** His stubble: paper dots along the jaw and chin. Fill with PAPER. */
export const JEM_STUBBLE = [
  [6, 15],
  [8.6, 17.6],
  [11.6, 18.8],
  [14.4, 17.4],
  [5, 18.6],
  [8.4, 20.6],
  [12.2, 21],
  [3.6, 12.6],
  [15.6, 14.6],
]
  .map(([x, y]) => `M${x} ${y}m-0.7 0a0.7 0.7 0 1 0 1.4 0a0.7 0.7 0 1 0 -1.4 0`)
  .join('')

/** A plain man's head, for anyone the text does not describe. */
export const HEAD_PLAIN =
  'M-8 26C-9 20 -14 15 -15.5 6C-17 -9 -8 -20 3 -20C11 -20 15.5 -15 15.5 -9L16 -5.5L22 5L16.5 6.6L17 9.4L15.5 11L16.8 13.6C17 18.6 15 22 10 23L7.5 26Z'
export const PLAIN_CUTS =
  'M6.6 -3.6Q10 -5.8 13.2 -3.8Q10 -1.8 6.6 -3.6Z' +
  gouge(6.4, -7.8, 13.8, -7.2, 0.8) +
  gouge(11.2, 11.4, 15.8, 11, 0.5) +
  gouge(-3.8, -1, -2.8, 6, 0.6, -1.2)
/** The same features with the eye shut: a head bowed in prayer. */
export const PLAIN_SHUT_CUTS =
  gouge(7, -3.4, 13.4, -3, 0.6, 0.6) +
  gouge(6.4, -7.8, 13.8, -7.2, 0.8) +
  gouge(11.2, 11.4, 15.8, 11, 0.5) +
  gouge(-3.8, -1, -2.8, 6, 0.6, -1.2)
/** Plain hair cut in paper strands over a dark head. */
export const PLAIN_HAIR =
  gouge(10, -17.2, -6, -17.4, 0.5, -1.2) +
  gouge(4, -14.6, -13, -7, 0.55, -1.6) +
  gouge(-2, -10.4, -14.6, 2, 0.5, -1.2)
/**
 * Grey hair, for an older man: close paper strands over the back of
 * HEAD_PLAIN, in place of PLAIN_HAIR. Fill with PAPER. (A solid paper patch
 * was tried first and read at panel size as a bandage.)
 */
export const GREY_HAIR =
  gouge(11, -17.6, -5, -18.4, 0.6, -1.2) +
  gouge(8, -15.6, -9.6, -14.4, 0.65, -1.6) +
  gouge(4, -13.2, -13.6, -7.6, 0.65, -1.8) +
  gouge(0, -10.4, -15.4, 0, 0.6, -1.6) +
  gouge(-3, -6.4, -14.8, 7, 0.55, -1.2) +
  gouge(-4.6, -1, -12, 13, 0.5, -0.8)

// ── HATS, in the frame of the heads ─────────────────────────────────────────

/** The tall round hat of about 1800, its crown widening a little to the top. */
export const ROUND_HAT =
  'M-18.5 -10C-17.5 -13.5 -14.5 -14.2 -12.8 -14.2L-14.4 -37.4C-5 -40 6 -40 14.4 -37.4L12.8 -14.2C14.8 -14.2 18 -13.2 19 -10C9 -7.8 -8.5 -7.8 -18.5 -10Z'
export const ROUND_HAT_BAND = gouge(-13, -19.5, 13, -19.5, 1)

/** A labourer's low felt hat with a floppy brim. */
export const FELT_HAT =
  'M-20 -9C-18 -12.6 -15 -13.2 -12.4 -13.4C-12.6 -22 -6 -26 1.6 -26C9.4 -26 13.8 -22 13.6 -13.6C16.4 -13.4 19.6 -12 21 -8.6C14 -6.4 -12 -6.4 -20 -9Z'

/**
 * The pale neckcloth of about 1800 at the throat, in the head's frame: fill
 * with PAPER after the figure. Gentlemen and the minister.
 */
export const NECKCLOTH =
  'M-4 24.6C0 23.4 5 23.6 8.6 25C9.4 28 8.6 31 7 33C3 33.6 -1.6 33 -4.6 31.4C-5.4 29 -5.2 26.6 -4 24.6Z'
/** A shirt collar open at the throat: Silas, Jem. Fill with PAPER. */
export const SHIRT_COLLAR = 'M-3 24.4L3 23.6L9 25.4L7.4 30L3 27.4L-1.4 30.6Z'

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

/** A hand thrown up with the fingers splayed wide, palm out. */
export const SPREAD_HAND: Part[] = [
  { d: 'M-0.8 -5C3 -6.4 7 -6.6 10 -5.6L10.4 5.4C7 6.4 3 6 -0.8 4.8Z' },
  { d: 'M9.4 -4.4L16.4 -12', w: 2.3 },
  { d: 'M10.2 -1.6L19.8 -5.4', w: 2.3 },
  { d: 'M10.2 1.8L19.8 2.6', w: 2.3 },
  { d: 'M9.6 4.8L16.8 10', w: 2.2 },
  { d: 'M2.4 -5L3.6 -11.4L5.6 -16', w: 2.4 },
]

/** A hand holding something flat (a book, a slip of paper): fingers together, cut apart, the thumb over. */
export const HOLD_HAND: Part[] = [
  { d: 'M-0.8 -4.4C3 -5.6 7 -5.8 10 -4.8L10 5C7 5.6 3 5.4 -0.8 4.2Z' },
  { d: 'M9.5 -2.8L17 -3.2', w: 2.2 },
  { d: 'M9.5 0L17.6 0.2', w: 2.2 },
  { d: 'M9.5 2.8L16.6 3.4', w: 2.2 },
  { d: 'M2.8 -4.2L7 -8.2L10.5 -9.4', w: 2.4 },
]
/** The paper lines between the fingers of HOLD_HAND, in its frame. */
export const HOLD_CUTS = gouge(10.5, -1.4, 17, -1.5, 0.5) + gouge(10.5, 1.4, 16.8, 1.8, 0.5)

/** A fist closed round a stick, a whip or a handle; the knuckles cut apart. */
export const GRIP_HAND: Part[] = [
  {
    d: 'M-0.8 -4.4C4 -6 9.5 -6.2 11.8 -3.2C13.2 -1 13 2.6 11.3 4.4C8.2 6 3.2 5.6 -0.8 4.2Z',
  },
]
export const GRIP_CUTS = gouge(8.6, -4.6, 11.6, -1.6, 0.4) + gouge(9.6, 0.4, 12, 2.4, 0.4)

/**
 * Two hands pressed together, palm to palm, the fingers pointing along the
 * forearm and up: prayer. The fingers are cut apart in paper (PRAY_CUTS), so
 * the shape never reads as a fist. At scale 1.2 and up (the kneelers of
 * Lantern Yard) the cuts survive the print's rough edge. Smaller, or seen
 * lying in a lap, they close up and the hands print as one mitten, as the
 * review of 2 October 2026 found on Nancy; there, stroke PRAY_CUTS in PAPER
 * as well, wide enough to make a hairline at the scale it is drawn
 * ("Silas at the Red House", "The Stone-pit gives up its secret").
 */
export const PRAY_HANDS: Part[] = [
  {
    d: 'M-0.8 -4.6C3 -6 8 -6.4 12 -5.4L19.6 -3.2C21 -2.4 21 -0.6 19.8 0.2L12.4 3.6C8 5.4 3 5.4 -0.8 4.4Z',
  },
]
export const PRAY_CUTS =
  gouge(11.4, -3.2, 19.4, -1.8, 0.45) +
  gouge(10.6, -0.8, 18.2, 0.2, 0.45) +
  gouge(10, 1.6, 15.6, 2.2, 0.4)

/** A shoe or a short boot, its heel at the ankle point, toe towards `facing`. */
export function boot([x, y]: P, facing: 1 | -1): Part {
  const f = facing
  return {
    d: `M${x - f * 5} ${y - 7}L${x + f * 6} ${y - 6}C${x + f * 11} ${y - 5} ${x + f * 14} ${y - 2} ${x + f * 14} ${y + 1}L${x - f * 6} ${y + 1}Z`,
  }
}

/**
 * The paper band at the top of a riding boot, a little below the knee of
 * `leg` (hip, knee, ankle): Godfrey's and Dunstan's top-boots. Fill with PAPER.
 */
export function bootTop(leg: P[], w = 10): string {
  const [k, a] = [leg[1], leg[2]]
  const t = 0.18
  const x = k[0] + (a[0] - k[0]) * t
  const y = k[1] + (a[1] - k[1]) * t
  const dx = a[0] - k[0]
  const dy = a[1] - k[1]
  const L = Math.hypot(dx, dy) || 1
  const nx = (-dy / L) * (w / 2 + 0.6)
  const ny = (dx / L) * (w / 2 + 0.6)
  const ux = (dx / L) * 2.2
  const uy = (dy / L) * 2.2
  return `M${r1(x + nx)} ${r1(y + ny)}L${r1(x - nx)} ${r1(y - ny)}L${r1(x - nx + ux)} ${r1(y - ny + uy)}L${r1(x + nx + ux)} ${r1(y + ny + uy)}Z`
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
 * The coat of about 1800 on the line from neck to hip: shoulders `width`
 * across, drawn in at the waist, CUT AWAY at the front so the breeches show,
 * with tails hanging `tails` below the hip at the back. `front` is how far
 * below the hip the front edge stops (small, or negative for a coat cut high).
 * `swing` pushes the tails back, as a coat does on a man in motion. With
 * `long`, a greatcoat or a plain long coat instead: the whole skirt to
 * `tails` below the hip.
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
 * A labourer's smock-frock on the line from neck to hip: full from the
 * shoulders, falling `drop` below the hip. Its gathered front is SMOCKING,
 * cut in paper by the panel over the chest. Jem Rodney and the Rainbow's
 * beer-drinkers.
 */
export function smock(neck: P, hip: P, { width = 34, drop = 26, flare = 8 } = {}): string {
  const { u, v } = axes(neck, hip)
  const at = (o: P, a: number, b: number): P => [
    r1(o[0] + u[0] * a + v[0] * b),
    r1(o[1] + u[1] * a + v[1] * b),
  ]
  const h = width / 2
  const s1 = at(neck, 4, h)
  const s2 = at(neck, 4, -h)
  const c1 = at(neck, -3, h * 0.9)
  const c2 = at(neck, -3, -h * 0.9)
  const t1 = at(neck, -4, h * 0.45)
  const t2 = at(neck, -4, -h * 0.45)
  const hem1 = at(hip, drop, h + flare)
  const hem2 = at(hip, drop, -h - flare)
  const hemMid = at(hip, drop + 3, 0)
  return `M${t1[0]} ${t1[1]}Q${c1[0]} ${c1[1]} ${s1[0]} ${s1[1]}L${hem1[0]} ${hem1[1]}Q${hemMid[0]} ${hemMid[1]} ${hem2[0]} ${hem2[1]}L${s2[0]} ${s2[1]}Q${c2[0]} ${c2[1]} ${t2[0]} ${t2[1]}Z`
}

/** The gathered stitching down the front of a smock, as short paper cuts in a band from `a` to `b`. */
export function smocking(a: P, b: P, rows = 6): string {
  let d = ''
  for (let i = 0; i < rows; i++) {
    const t = i / Math.max(1, rows - 1)
    const x = a[0] + (b[0] - a[0]) * t
    const y = a[1] + (b[1] - a[1]) * t
    d += gouge(x - 3.6, y, x + 3.6, y, 0.5)
  }
  return d
}

/**
 * A figure from its joints: arms through shoulder, elbow and wrist, legs
 * through hip, knee and ankle, a coat (or with `robe`, a smock or a shape of
 * the panel's own) on the line from neck to hip, a hand at the end of each
 * arm. Returned in drawing order: far limbs, body, near leg, head, headwear,
 * near arm (lifted off the coat by its own paper edge), near hand. A limb may
 * be left out by passing an empty list.
 */
export function man(p: {
  facing: 1 | -1
  neck: P
  hip: P
  head: { d: string; at: P; rot?: number; scale?: number }
  /** Hair or a hat in the head's frame, drawn over the head in ink. */
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

/** Dunstan's flush, over his head: place with the head's transform. */
export function DunstanFlush({ t }: { t: string }) {
  const [cx, cy, rx, ry] = DUNSTAN_FLUSH
  return <ellipse cx={cx} cy={cy} rx={rx} ry={ry} transform={t} fill={RED} />
}

/**
 * Hair cut in PAPER (Godfrey's, Mr Macey's, Silas's in Part Two), with a
 * fine ink edge. WHY THE EDGE: every figure wears a paper halo, and paper hair
 * with no edge runs straight into it, so the head reads as a paper blob.
 * Place with the head's transform; `lines` are strands stroked in ink over it.
 */
export function PaperHair({ t, d, lines }: { t: string; d: string; lines?: string }) {
  return (
    <g transform={t}>
      <path d={d} fill={PAPER} stroke={INK} strokeWidth={0.9} strokeLinejoin="round" />
      {lines && <path d={lines} fill="none" stroke={INK} strokeWidth={0.8} />}
    </g>
  )
}

// ── ADDED FOR MOMENTS 6 TO 10 (Chapters 9 to 13) ────────────────────────────
//
// The people who first appear in those panels, from the held edition. Draw
// them from here in every later panel.
//
// - THE SQUIRE. "a tall, stout man of sixty, with a face in which the knit
//   brow and rather hard glance seemed contradicted by the slack and feeble
//   mouth. His person showed marks of habitual neglect, his dress was
//   slovenly" (Chapter 9). So a heavy head with a jowl and a double chin, a
//   brow drawn down, a narrow hard eye, and a slack lower lip (SQUIRE_CUTS).
//   His hair is not described; at sixty it is cut thin and grey, as close
//   paper strands combed back over the dark head (SQUIRE_HAIR). (A solid
//   paper cap was tried first and read at panel size as a powdered wig.) "The
//   Squire was purple with anger": the spot colour, one patch on the cheek
//   (SQUIRE_FLUSH), as Fred's in the reference panel, never on the mouth or
//   chin. (Two level strokes were tried first and read as war paint.)
// - NANCY. "her light-brown hair was cropped behind like a boy's, and was
//   dressed in front in a number of flat rings, that lay quite away from her
//   face"; she is small ("ridiculously small and light"); at the dance she
//   wears "her silvery twilled silk, her lace tucker, her coral necklace, and
//   coral ear-drops" (Chapter 11). So a small head, the hair short at the
//   nape, and a row of flat rings cut in paper over the brow (NANCY_RINGS);
//   her gown is printed pale, crossed with fine twill lines. Her blush ("the
//   bloom on her cheeks", "with a deep blush") is NANCY_BLOOM on the cheek.
//   The coral is left to the words: a red line round a neck, or a red drop
//   below an ear, reads at a glance as a wound.
// - DOLLY WINTHROP. "a 'comfortable woman'—good-looking, fresh-complexioned,
//   having her lips always slightly screwed" (Chapter 10). So a full, kindly
//   profile with the lips pursed (DOLLY_CUTS). Her dress is not described, so
//   she wears the cap, kerchief and apron of a village wife of about 1800
//   (MOB_CAP). She is "grave", and never smiles broadly.
// - AARON, as a boy. "an apple-cheeked youngster of seven, with a clean
//   starched frill which looked like a plate for the apples"; "Aaron's brown
//   head"; "the neat-featured rosy face" (Chapter 10). So a round child's
//   head, brown hair cut in paper strands, a red apple on the cheek
//   (AARON_CHEEK), and a wide paper frill round the neck (AARON_FRILL).
// - EPPIE, as a small child. "a round, fair thing, with soft yellow rings all
//   over its head"; "the little golden head"; "the blue eyes"; "the old grimy
//   shawl in which it was wrapped trailing behind it, and the queer little
//   bonnet dangling at its back" (Chapter 12). So a round head, its hair a
//   paper cap of ring-shaped curls (EPPIE_CURLS), a tiny nose and a full
//   cheek. Blue is left to the words. Asleep, use EPPIE_ASLEEP for the eye.
//
// The women's dress of about 1800 is a gown with the waist high under the
// bust and the skirt falling straight: gown() for a woman standing,
// seatedGown() for one in a chair.

/** The Squire: a heavy old head, a jowl and a double chin. Fill with INK. */
export const HEAD_SQUIRE =
  'M-10 27C-12.5 21 -18 16 -18.5 6C-19 -9 -10.5 -20.5 2 -20.5C11 -20.5 16 -16 16.4 -10L16.8 -6.4L23.4 4L17.6 5.8L17.8 8.8L16 10.6L17.2 13C18.4 15.6 18.4 18.4 16.6 20.6C18 23.2 16.6 26.6 12 27.4C5 28.6 -3 28.6 -10 27Z'
/** His thin grey hair, combed back from a high brow to the nape: close strands. Fill with PAPER. */
export const SQUIRE_HAIR =
  gouge(8.6, -18.8, -6, -19.6, 0.6, -1.2) +
  gouge(5.6, -16.4, -10.6, -15.2, 0.65, -1.6) +
  gouge(2.4, -13.6, -14.6, -8.2, 0.65, -1.8) +
  gouge(-0.8, -10.4, -16.8, -0.8, 0.6, -1.6) +
  gouge(-3.4, -6.4, -16.6, 7.4, 0.55, -1.2) +
  gouge(-5, -1.2, -13.8, 14, 0.5, -0.8)
/** His features: the knit brow drawn down, a narrow hard eye with a bag under it, a slack lip, a jowl. */
export const SQUIRE_CUTS =
  gouge(5.4, -10.2, 15.8, -6.6, 1.3, 0.4) +
  'M8 -3.2Q11 -5 14.2 -3.6Q11 -2.2 8 -3.2Z' +
  gouge(8.4, 0.2, 13.8, 0.6, 0.4, 0.8) +
  gouge(15.6, 4.8, 12.4, 10.6, 0.4, 0.4) +
  gouge(11.2, 12.8, 17.2, 12.4, 0.6, 0.8) +
  gouge(3.4, 7, 10, 21.4, 0.55, 1.8) +
  gouge(-4.4, -1, -3, 7, 0.65, -1.2)
/** "purple with anger": a patch of RED on the cheek, [cx, cy, rx, ry], well clear of the mouth. */
export const SQUIRE_FLUSH: [number, number, number, number] = [5.6, 6.4, 3.4, 2.4]

/** Nancy: a small, fine head, a short nose, a rounded chin. Fill with INK. */
export const HEAD_NANCY =
  'M-7 24C-8.5 19 -13 14.5 -14 6C-15 -8.5 -7.5 -19 2.5 -19C10.5 -19 14.4 -14.8 14.6 -8.8L14.8 -5.4L18.8 3L15 4.6L15.2 7.4L14 8.8L15 11.2C14.8 16.2 12.2 19.4 8 20L6.4 24Z'
/** Her light-brown hair, cropped at the nape: paper strands cut in the black. */
export const NANCY_HAIR =
  gouge(9, -16.6, -6, -16.4, 0.5, -1.2) +
  gouge(2, -13, -12, -6, 0.55, -1.4) +
  gouge(-3, -7, -12.4, 4, 0.5, -1) +
  gouge(-5, 0, -8.6, 10, 0.45, -0.6)
/** The "flat rings" dressed over her brow: centres of small rings, stroked in PAPER. */
export const NANCY_RINGS: P[] = [
  [-1.6, -15.4],
  [2.6, -16.8],
  [6.8, -16],
  [10.4, -13.6],
  [0.8, -11.6],
  [5, -12.4],
]
/** Her features: a fine brow, a clear eye, a small mouth, the ear below the cropped hair. */
export const NANCY_CUTS =
  'M6.4 -3.6Q9.6 -6.2 12.8 -4Q9.6 -1.8 6.4 -3.6Z' +
  gouge(6, -8, 13, -8.2, 0.6) +
  gouge(11, 10, 14.4, 9.6, 0.45) +
  gouge(-3.4, -1.4, -2.4, 5.4, 0.55, -1)
/**
 * "the bloom on her cheeks": a small patch of RED on the cheek, well clear of
 * the mouth and low enough to clear the eye. (Set just under the eye at first,
 * it read at panel size as a bruise.)
 */
export const NANCY_BLOOM: [number, number, number, number] = [5, 5.6, 2.6, 1.7]

/** Nancy's head, hair and face, placed with the head's transform. */
export function NancyHead({ t, blush = false }: { t: string; blush?: boolean }) {
  const [bx, by, brx, bry] = NANCY_BLOOM
  return (
    <g transform={t}>
      <path d={HEAD_NANCY} fill={INK} />
      <path d={NANCY_HAIR + NANCY_CUTS} fill={PAPER} />
      <g fill="none" stroke={PAPER} strokeWidth={0.9}>
        {NANCY_RINGS.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={1.9} />
        ))}
      </g>
      {blush && <ellipse cx={bx} cy={by} rx={brx} ry={bry} fill={RED} />}
    </g>
  )
}

/** Dolly: a full, kindly face, the lips a little screwed. Fill with INK. */
export const HEAD_DOLLY =
  'M-8 25C-9.5 19.6 -14.4 15 -15.4 6C-16.4 -9 -8 -20 3 -20C11 -20 15.4 -15.4 15.6 -9.4L15.8 -5.8L20.6 3.6L16.2 5.2L16.8 7.4L15.2 8.6L15.6 10.2L16.6 12.8C16.6 18 13.6 21.2 8.6 21.8L6.8 25Z'
/** Her features: a level, grave brow, a mild eye, pursed lips, a soft chin line. */
export const DOLLY_CUTS =
  'M7 -3.4Q10 -5.6 13 -3.8Q10 -2 7 -3.4Z' +
  gouge(6.6, -7.8, 13.6, -7.4, 0.7) +
  gouge(13, 9.2, 15.6, 9.4, 0.5) +
  gouge(13.2, 11.6, 15.4, 11.4, 0.4) +
  gouge(4.6, 14, 10.4, 19.4, 0.45, 0.8)
/**
 * A village wife's mob-cap of about 1800, over the crown and the back of the
 * head, with a frilled edge round the face: fill with PAPER, outline in ink,
 * stroke MOB_CAP_FRILL in ink.
 */
export const MOB_CAP =
  'M-17 8C-19.6 -6 -11 -24 3 -24C12 -24 17.4 -19 17.8 -12.6L14.6 -11.2C12 -14.8 6 -15.8 1.4 -13.8C-1.4 -10 -2.6 -4 -2 2C-1.6 6 -3 9.4 -6 11C-10 11.4 -14.6 10.4 -17 8Z'
export const MOB_CAP_FRILL =
  'M14.6 -11.2Q13 -13.6 11 -12.6Q9.6 -15 7 -14Q5 -16 2.6 -14.2Q0 -14 0.2 -11.4Q-2.4 -10 -1.6 -7.4Q-3.4 -5.4 -2 -3M-2 -3Q-3.6 -0.6 -2 2Q-3.4 5 -1.8 7'
export const MOB_CAP_BAND = 'M-16.2 2.6Q-9 5.6 -2.4 3.6'

/** Dolly's head in her cap, placed with the head's transform. */
export function DollyHead({ t, bloom = true }: { t: string; bloom?: boolean }) {
  return (
    <g transform={t}>
      <path d={HEAD_DOLLY} fill={INK} />
      <path d={DOLLY_CUTS} fill={PAPER} />
      <path d={MOB_CAP} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
      <path d={MOB_CAP_FRILL + MOB_CAP_BAND} fill="none" stroke={INK} strokeWidth={0.8} />
      {bloom && <ellipse cx={7.4} cy={3.6} rx={2.4} ry={1.5} fill={RED} />}
    </g>
  )
}

/** Aaron at seven: a round child's head, a small nose. Fill with INK. */
export const HEAD_AARON =
  'M-8 20C-10 16 -14.6 12 -15.4 4C-16.4 -10 -8 -19.6 2 -19.6C10 -19.6 14.4 -14.6 14.4 -7.6L14.6 -4.4L17.8 2.4L14.6 3.8L15 6L13.8 7.2L14.8 9.6C14.6 14 11.8 16.6 7.6 17L6 20Z'
/** His brown hair, cut in paper strands, and his features. */
export const AARON_CUTS =
  gouge(8, -16.4, -6, -15.6, 0.5, -1.2) +
  gouge(2, -12.4, -12.6, -5, 0.5, -1.4) +
  gouge(-2.6, -6.4, -13, 3, 0.45, -1) +
  'M6.2 -2.8Q9 -5.2 11.8 -3.2Q9 -1 6.2 -2.8Z' +
  gouge(5.8, -7, 11.8, -6.8, 0.55) +
  gouge(10, 9.6, 13, 9.4, 0.45) +
  gouge(-3.4, -1, -2.4, 5, 0.5, -1)
/** "apple-cheeked": the round red of his cheek. */
export const AARON_CHEEK: [number, number, number] = [6, 3.8, 2.8]
/**
 * "a clean starched frill which looked like a plate for the apples": a wide
 * round paper frill under the chin, in the head's frame. Fill with PAPER,
 * outline in ink, then stroke AARON_FRILL_PLEATS in ink.
 */
export const AARON_FRILL =
  'M-16 20C-14 15 -4 13.4 6 14.2C14 14.8 20.4 17 21 20.4C20.4 24 12 26.6 2 26.4C-8 26.2 -15.4 24 -16 20Z'
export const AARON_FRILL_PLEATS =
  'M-12 19.6L-13.6 23.4M-7 18.4L-7.8 24.8M-2 17.8L-2.2 25.4M3 17.6L3.2 25.6M8 17.8L8.6 25.2M13 18.6L14 24.2M17.4 19.6L18.6 22.8'

/** Aaron's head and frill, placed with the head's transform. */
export function AaronHead({ t }: { t: string }) {
  const [cx, cy, r] = AARON_CHEEK
  return (
    <g transform={t}>
      <path d={AARON_FRILL} fill={PAPER} stroke={INK} strokeWidth={1} />
      <path d={AARON_FRILL_PLEATS} fill="none" stroke={INK} strokeWidth={0.7} />
      <path d={HEAD_AARON} fill={INK} />
      <path d={AARON_CUTS} fill={PAPER} />
      <circle cx={cx} cy={cy} r={r} fill={RED} />
    </g>
  )
}

/** Eppie as a small child: a big round head, a tiny nose, a full cheek. Fill with INK. */
export const HEAD_EPPIE_CHILD =
  'M-9 17C-12 13 -15.6 8 -15.6 0C-15.6 -12 -7 -18.6 2 -18.6C10.4 -18.6 15 -12.6 14.6 -5L14.4 -2.4L16.8 2L14.2 3.4L14.6 5.4L13.4 6.4L13.8 8.4C13 12.4 10 14.6 6 14.8L4.6 17Z'
/**
 * "soft yellow rings all over its head": the hair a cap of PAPER over the
 * crown and back of the head, outlined in ink, its edge SCALLOPED, one bump to
 * a curl, with open rings stroked in ink inside it (EPPIE_CURLS are their
 * centres, EPPIE_CURL_TURN which way each opens). Redrawn for "Eppie is named"
 * (moment 11): the first cut, a smooth cap dotted with closed rings, read at
 * panel size as a bonnet with spots, not as curls.
 */
function scallopEdge(pts: P[], bulge: number): string {
  let d = ''
  for (let i = 1; i < pts.length; i++) {
    const [ax, ay] = pts[i - 1]
    const [bx, by] = pts[i]
    const len = Math.hypot(bx - ax, by - ay) || 1
    d += `Q${r1((ax + bx) / 2 + ((by - ay) / len) * bulge * 2)} ${r1((ay + by) / 2 - ((bx - ax) / len) * bulge * 2)} ${bx} ${by}`
  }
  return d
}
/** From the nape round the back and over the crown to the brow. */
const EPPIE_HAIR_EDGE: P[] = [
  [-6.4, 9.8],
  [-11.6, 8.6],
  [-15.8, 3.6],
  [-17.2, -3.4],
  [-16, -10.6],
  [-11.6, -16.6],
  [-5, -20.4],
  [2.4, -21],
  [9.4, -18.6],
  [14, -13.6],
  [15.4, -8.6],
]
/** From the brow back along the forehead and down before the ear to the nape. */
const EPPIE_HAIR_FRINGE: P[] = [
  [15.4, -8.6],
  [12, -9.6],
  [8.6, -9.4],
  [5, -10.4],
  [2.2, -9.2],
  [0.6, -5.6],
  [-0.4, -1.4],
  [-1, 3],
  [-3, 7],
  [-6.4, 9.8],
]
export const EPPIE_HAIR = `M-6.4 9.8${scallopEdge(EPPIE_HAIR_EDGE, 1.7)}${scallopEdge(EPPIE_HAIR_FRINGE, 1.1)}Z`
export const EPPIE_CURLS: P[] = [
  [-11, -10],
  [-5.4, -14.6],
  [1.4, -15.6],
  [7.6, -14],
  [-12.6, -2.6],
  [-7, -6.8],
  [-1.8, -9.6],
  [-9.6, 4],
  [-4.2, 0.8],
]
export const EPPIE_CURL_TURN = [0.9, 1.1, 1.4, 1.6, 0.7, 1.2, 1.5, 0.6, 1]
/** The curls as open rings of radius 2, each 260 degrees round. Stroke in INK. */
export const EPPIE_CURL_RINGS = EPPIE_CURLS.map(([x, y], i) => {
  const a0 = EPPIE_CURL_TURN[i]
  const a1 = a0 + Math.PI * 1.45
  return `M${r1(x + 2 * Math.cos(a0))} ${r1(y + 2 * Math.sin(a0))}A2 2 0 1 1 ${r1(x + 2 * Math.cos(a1))} ${r1(y + 2 * Math.sin(a1))}`
}).join('')
/** Her features, awake: a round eye, a tiny mouth. Cut in PAPER. */
export const EPPIE_CUTS =
  'M6.4 -1.6a2.1 2.1 0 1 0 4.2 0a2.1 2.1 0 1 0 -4.2 0Z' +
  gouge(10.4, 8.8, 12.8, 8.6, 0.45) +
  gouge(-2.6, 1, -1.8, 5.4, 0.5, -0.8)
/** Asleep: "the blue eyes were veiled by their delicate half-transparent lids". Cut in PAPER. */
export const EPPIE_ASLEEP =
  gouge(6.2, -1.2, 11, -0.6, 0.55, 0.6) + gouge(10.4, 8.8, 12.8, 8.6, 0.45)

/**
 * Eppie's head, placed with the head's transform. The curls are drawn after
 * the face, so the hair sits over the brow.
 */
export function EppieHead({ t, asleep = false }: { t: string; asleep?: boolean }) {
  return (
    <g transform={t}>
      <path d={HEAD_EPPIE_CHILD} fill={INK} />
      <path d={asleep ? EPPIE_ASLEEP : EPPIE_CUTS} fill={PAPER} />
      {!asleep && <circle cx={9} cy={-1.4} r={1.1} fill={INK} />}
      <path d={EPPIE_HAIR} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
      <path
        d={EPPIE_CURL_RINGS}
        fill="none"
        stroke={INK}
        strokeWidth={0.85}
        strokeLinecap="round"
      />
    </g>
  )
}

/**
 * A woman's gown of about 1800, standing: shoulders `width` across at the
 * neck, the waist high under the bust (`waist` below the neck), the skirt
 * falling straight to `hem`, a little wider at the foot. Facing does not
 * matter to its shape. Returns one path, for a Part.
 */
export function gown(
  neck: P,
  hem: P,
  {
    width = 26,
    waist = 22,
    foot = 38,
    bust = 3,
  }: { width?: number; waist?: number; foot?: number; bust?: number } = {},
): string {
  const { u, v } = axes(neck, hem)
  const at = (a: number, b: number): P => [
    r1(neck[0] + u[0] * a + v[0] * b),
    r1(neck[1] + u[1] * a + v[1] * b),
  ]
  const L = Math.hypot(hem[0] - neck[0], hem[1] - neck[1])
  const h = width / 2
  const pts: P[] = [
    at(-2, h * 0.45),
    at(3, h),
    at(waist, h * 0.8 + bust),
    at(L, foot / 2),
    at(L + 1.5, 0),
    at(L, -foot / 2),
    at(waist, -h * 0.8 - bust),
    at(3, -h),
    at(-2, -h * 0.45),
  ]
  return 'M' + pts.map(([x, y]) => `${x} ${y}`).join('L') + 'Z'
}

/**
 * A woman in a gown of about 1800, seated in profile facing `facing`: the
 * bodice from `neck` to the high waist, the lap along the thigh from `hip` to
 * `knee`, and the skirt falling from the knee to the floor at `floor`, where
 * it spreads a little over the feet. The back of the skirt drops behind the
 * hip to the seat of the chair. Returns one path, for a Part.
 */
export function seatedGown(
  neck: P,
  hip: P,
  knee: P,
  floor: number,
  facing: 1 | -1,
  { width = 24, lap = 11 }: { width?: number; lap?: number } = {},
): string {
  const f = facing
  const h = width / 2
  const pts: P[] = [
    [neck[0] - f * h * 0.4, neck[1] - 2],
    [neck[0] + f * h * 0.6, neck[1] + 2],
    [neck[0] + f * h * 0.9, neck[1] + 12],
    [hip[0] + f * h * 0.7, hip[1] - lap - 4],
    [knee[0] + f * 3, knee[1] - lap * 0.8],
    [knee[0] + f * 7, knee[1] + 2],
    [knee[0] + f * 8, floor - 2],
    [knee[0] + f * 12, floor],
    [knee[0] - f * 16, floor],
    [hip[0] - f * 4, hip[1] + 10],
    [hip[0] - f * h * 0.9, hip[1] + 2],
    [neck[0] - f * h * 0.9, neck[1] + 14],
    [neck[0] - f * h * 0.7, neck[1] + 3],
  ]
  return 'M' + pts.map(([x, y]) => `${r1(x)} ${r1(y)}`).join('L') + 'Z'
}

// ── THE COMPANY AT THE RED HOUSE ON NEW YEAR'S EVE (moments 8 and 10) ───────
//
// People seen only at the dance (Chapters 11 and 13), from the held edition.
//
// - SOLOMON MACEY, the fiddler: "a small hale old man with an abundant crop
//   of long white hair reaching nearly to his shoulders"; "holding his white
//   head on one side, and playing vigorously". So HEAD_OLD with SOLOMON_HAIR,
//   in paper, falling nearly to the shoulders, the head tipped.
// - MRS CRACKENTHORP, the rector's wife: "a small blinking woman, who
//   fidgeted incessantly with her lace, ribbons, and gold chain"; "matrons in
//   turban-shaped caps, nay, Mrs. Crackenthorp herself, the summit of whose
//   perpendicular feather was on a level with the Squire's shoulder". So a
//   small woman (HEAD_LADY) in a TURBAN with a tall upright FEATHER.
// - MRS KIMBLE, the Squire's sister and the doctor's wife: "a double
//   dignity, with which her diameter was in direct proportion"; "laughing
//   above her double chin"; "her own ornamented satin bodice". So a stout
//   woman with a heavy jaw and a double chin (HEAD_KIMBLE), in a matron's
//   TURBAN without the feather; her bodice is cut pale, with ornament.
// - Any other lady at the dance takes HEAD_LADY and LADY_CUTS, drawn plainly.

/** A woman's head, for the ladies the text does not describe. Fill with INK. */
export const HEAD_LADY =
  'M-7.6 25C-9 19.6 -13.8 15 -14.8 6C-15.8 -8.6 -8 -19.6 2.6 -19.6C10.6 -19.6 14.8 -15.2 15 -9.2L15.2 -5.8L19.4 3L15.4 4.6L15.8 7.4L14.4 8.8L15.4 11.2C15.4 16.4 12.6 19.8 8.2 20.4L6.6 25Z'
/** Her features and her hair, in paper strands, gathered up behind. */
export const LADY_CUTS =
  'M6.6 -3.6Q9.8 -6 13 -4Q9.8 -1.8 6.6 -3.6Z' +
  gouge(6.2, -8, 13.2, -8.2, 0.6) +
  gouge(11, 10, 14.6, 9.6, 0.45) +
  gouge(-3.4, -1.4, -2.4, 5.4, 0.55, -1) +
  gouge(9, -16.6, -6, -16.4, 0.5, -1.2) +
  gouge(2, -13, -12, -6, 0.55, -1.4)
/** A matron's turban-shaped cap, over the crown and the back of the head. PAPER, outlined in ink. */
export const TURBAN =
  'M15 -11C15.6 -21 9 -29.6 -1.6 -30C-12.4 -30.4 -20.2 -23 -19.4 -11.6C-19 -5.6 -17.6 -0.6 -15.4 2.4C-11 -1.6 -5 -5.8 1 -8.6C5.6 -10.6 10.6 -11.6 15 -11Z'
/** Its wrapped folds, stroked in ink. */
export const TURBAN_FOLDS =
  'M-16.6 -17Q-3 -24.6 13 -16.6M-18.4 -8.6Q-4 -16.4 12.4 -12.2M-10 -27Q-6 -18 -12 -4'
/** Mrs Crackenthorp's perpendicular feather, rising from the turban. INK, its quill in PAPER. */
export const FEATHER =
  'M-3.6 -29C-5.6 -40 -5.2 -52 -1.6 -60C0 -64 2.4 -67 4.4 -68.6C4.2 -65 3 -60 2.2 -56C0.6 -48 0.4 -38 0 -29Z'
export const FEATHER_QUILL = 'M-1.8 -30C-2.6 -44 -1.6 -56 3.6 -67.4'
/** Solomon's long white hair, over the crown and falling to the shoulders. PaperHair, with the lines. */
export const SOLOMON_HAIR =
  'M-16.4 6C-18 -8 -9 -21.4 3 -21.4C10 -21.4 14.4 -17.6 15.6 -12.4C12 -14 6 -14.4 2 -13C-1 -8 -2.4 -2 -2.2 4C-2 12 -3.4 21 -5.4 29C-10 31 -15.4 30.6 -19.6 28C-17.6 21 -16.4 14 -16.4 6Z'
export const SOLOMON_HAIR_LINES =
  'M-11 -12C-14 -2 -13.6 10 -15.4 26M-5.6 -16C-9 -6 -8 8 -9.6 27M-2 -10C-4 0 -4.6 14 -6 26'
/** Mrs Kimble: her brother's heavy jaw, and a double chin. Fill with INK. */
export const HEAD_KIMBLE =
  'M-9.4 27C-12 21 -17.4 16 -17.8 6C-18.2 -8.6 -10.2 -20 2 -20C10.6 -20 15.4 -15.8 15.8 -10L16 -6.8L20.8 3L16.4 4.8L16.8 7.8L15.4 9.4L16.4 12C17.4 14.8 17.4 17.6 15.8 19.8C17.2 22.4 16 25.8 11.6 26.6C4.6 27.8 -2.8 28.2 -9.4 27Z'
/** Her features: a mild eye, a good-humoured mouth, the fold of the double chin. Cut in PAPER. */
export const KIMBLE_CUTS =
  'M7.6 -3.4Q10.6 -5.6 13.6 -3.8Q10.6 -2.2 7.6 -3.4Z' +
  gouge(6.8, -8.2, 14, -7.6, 0.7) +
  gouge(10.8, 11.6, 15.6, 10.2, 0.5, 0.6) +
  gouge(6, 18.8, 14.6, 20.2, 0.45, 0.8) +
  gouge(4, 6, 8, 15, 0.45, 1.2) +
  gouge(-4, -1, -2.8, 6.4, 0.6, -1.2)

/** A head in a turban, placed with the head's transform; `feather` for Mrs Crackenthorp. */
export function TurbanHead({
  t,
  d,
  cuts,
  feather = false,
}: {
  t: string
  d: string
  cuts: string
  feather?: boolean
}) {
  return (
    <g transform={t}>
      {feather && (
        <>
          <path d={FEATHER} fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" />
          <path d={FEATHER_QUILL} fill="none" stroke={PAPER} strokeWidth={0.8} />
        </>
      )}
      <path d={d} fill={INK} />
      <path d={cuts} fill={PAPER} />
      <path d={TURBAN} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
      <path d={TURBAN_FOLDS} fill="none" stroke={INK} strokeWidth={0.8} />
    </g>
  )
}

// ── ADDED FOR MOMENTS 11 TO 15 (Chapters 14 to 18) ──────────────────────────
//
// Part Two's grown Eppie and Aaron, first needed by "Sixteen years later".
//
// - EPPIE, grown. "a blonde dimpled girl of eighteen, who has vainly tried to
//   chastise her curly auburn hair into smoothness under her brown bonnet: the
//   hair ripples as obstinately as a brooklet under the March breeze, and the
//   little ringlets burst away from the restraining comb behind and show
//   themselves below the bonnet-crown"; "the rippling radiance of her hair and
//   the whiteness of her rounded chin and throat set off by the dark-blue
//   cotton gown" (Chapter 16). So the child's cap of ring curls grown long:
//   the same paper hair, rippling over the brow, gathered up behind under a
//   comb, with ringlets escaping at the nape (EPPIE_GROWN_HAIR), a rounded
//   chin, and a dimple beside a smile (EPPIE_GROWN_CUTS). Auburn and blue are
//   left to the words. Her gown is gown() or seatedGown(), dark.
// - AARON, grown. "That good-looking young fellow, in a new fustian suit";
//   "he was a-going in four-and-twenty" (Chapter 16); as a boy he had a
//   "brown head" (Chapter 10). So a young man's plain head with his brown
//   hair cut in paper strands (AARON_MAN_CUTS), and a short working man's
//   jacket (coat() with short tails), not a gentleman's tail-coat.

/** Eppie at eighteen: HEAD_NANCY's frame, the chin rounder. Fill with INK. */
export const HEAD_EPPIE_GROWN =
  'M-7 24C-8.5 19 -13 14.5 -14 6C-15 -8.5 -7.5 -19 2.5 -19C10.5 -19 14.4 -14.8 14.6 -8.8L14.8 -5.4L18.6 3.2L15 4.6L15.2 7.2L14 8.6L15 11C15.2 16.4 12.4 20 7.6 20.4L6 24Z'
/**
 * Her hair: rippling over the brow and temple, gathered up at the back of the
 * crown, the ringlets bursting away below the comb at the nape. Fill with
 * PAPER, outlined in ink; EPPIE_GROWN_RIPPLES and EPPIE_GROWN_RINGLETS, below,
 * are stroked in ink over it.
 */
export const EPPIE_GROWN_HAIR =
  'M14.2 -10.6C13.4 -13 11.6 -13.2 10.4 -12.4C9.4 -14.2 7.2 -14.4 6 -13C4.8 -14.2 2.8 -13.6 2.2 -12C0.8 -11.4 0.2 -9.8 0.8 -8.4C-0.6 -7 -0.6 -5 0.4 -3.8C-0.8 -2.2 -0.6 0 0.4 1.2C-0.4 3 0 5 -1.4 6.6C-1.8 9 -1 11.4 -2.6 13.6C-3.4 16 -5.8 16.4 -6.8 14.8C-8 17.2 -11 16.8 -11.4 14.4C-13.6 15 -15.4 12.6 -14.6 10.4C-16.8 8.6 -16.6 5.4 -15.4 3.6C-17 1 -16.8 -2 -15.6 -3.6C-18.6 -5.4 -19.2 -10 -16.8 -12.4C-16.4 -16.4 -12.8 -18.6 -9.6 -17.6C-6.6 -21 -1 -22 3.6 -21.2C9.4 -20.6 13.8 -16.8 14.2 -10.6Z'
/** The comb that gathers it up behind: an ink bar across the back of the crown. */
export const EPPIE_GROWN_COMB = 'M-15.4 -12.6Q-12.6 -16.6 -7.8 -17.4'
/** Her features: a clear eye, a fine brow, a smile, and the dimple. Cut in PAPER. */
export const EPPIE_GROWN_CUTS =
  'M7 -3.6Q10 -6 12.8 -4Q10 -1.8 7 -3.6Z' +
  gouge(6.6, -8, 13, -8.2, 0.6) +
  gouge(10.8, 9.8, 14.4, 8.8, 0.45, 0.6) +
  'M8.8 7.8a0.75 0.75 0 1 0 1.5 0a0.75 0.75 0 1 0 -1.5 0Z'

/**
 * "the hair ripples as obstinately as a brooklet": wavy lines running back
 * over the crown from the brow. Stroke in INK over EPPIE_GROWN_HAIR.
 * Redrawn for "Sixteen years later" (moment 13): the first cut stroked twelve
 * closed rings all over the hair, which at panel size read as a spotted cap,
 * as the child's rings had (see EPPIE_HAIR). Rings are kept only at the nape,
 * opened, where "the little ringlets burst away from the restraining comb
 * behind" (EPPIE_GROWN_RINGLETS).
 */
export const EPPIE_GROWN_RIPPLES =
  'M11.6 -17.4Q9 -19.6 6 -18.2Q3 -16.8 0 -18.4Q-3 -20 -6 -18.4Q-9 -16.8 -12 -15.4' +
  'M8.4 -12.6Q6 -14.6 3.2 -13.2Q0.6 -11.8 -2.2 -13.4Q-5 -15 -8 -13.2Q-11 -11.4 -14.4 -11' +
  'M1.2 -6.6Q-1.2 -8.6 -4 -7.2Q-6.8 -5.8 -9.4 -7.4Q-12 -9 -15 -6.4' +
  'M-1 1Q-3.4 -0.8 -6 0.6Q-8.6 2 -11 0.4Q-13.2 -1 -15 1.4'
/** The ringlets at the nape: open rings of radius 1.8, each turned a different way. */
export const EPPIE_GROWN_RINGLETS = (
  [
    [-12.6, 7.6, 0.8],
    [-8.6, 11.8, 1.4],
    [-4.6, 9, 0.4],
  ] as [number, number, number][]
)
  .map(([x, y, a0]) => {
    const a1 = a0 + Math.PI * 1.45
    return `M${r1(x + 1.8 * Math.cos(a0))} ${r1(y + 1.8 * Math.sin(a0))}A1.8 1.8 0 1 1 ${r1(x + 1.8 * Math.cos(a1))} ${r1(y + 1.8 * Math.sin(a1))}`
  })
  .join('')

/** Eppie at eighteen: head, features and hair, placed with the head's transform. */
export function EppieGrownHead({ t }: { t: string }) {
  return (
    <g transform={t}>
      <path d={HEAD_EPPIE_GROWN} fill={INK} />
      <path d={EPPIE_GROWN_CUTS} fill={PAPER} />
      <path d={EPPIE_GROWN_HAIR} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
      <path
        d={EPPIE_GROWN_RIPPLES + EPPIE_GROWN_RINGLETS}
        fill="none"
        stroke={INK}
        strokeWidth={0.85}
        strokeLinecap="round"
      />
      <path d={EPPIE_GROWN_COMB} fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
    </g>
  )
}

/** Aaron at twenty-three: a young man's plain head (HEAD_PLAIN's), his brown hair and features cut in PAPER. */
export const HEAD_AARON_MAN = HEAD_PLAIN
export const AARON_MAN_CUTS = PLAIN_HAIR + PLAIN_CUTS

// ── ADDED FOR MOMENTS 16 TO 19 (Chapters 19 to 21 and the Conclusion) ───────
//
// - BONNETS. Nancy walks to the cottage at night and, home again, "laid down
//   her bonnet and shawl" (Chapter 20); Eppie goes to church "under her brown
//   bonnet" (Chapter 16) and goes north "in their Sunday clothes" (Chapter
//   21). So a bonnet of the time, in the frame of the heads: the soft crown
//   over the back of the head, the brim standing up and forward over the
//   brow, its edge sweeping down in front of the ear so the face still shows,
//   and the ribbon tied in a bow at the side of the jaw, cut in paper and kept
//   off the chin. Nancy's is straw, printed pale with the plait in ink; Eppie's
//   is brown, printed in ink with its edges cut in paper, and her ringlets show
//   below it, as the text has them "below the bonnet-crown". Draw it after the
//   head, with the head's transform.

/** The bonnet's outline, in the frame of the heads, facing right. */
export const BONNET =
  'M-12 12C-16 8 -18.6 -2 -17.6 -10C-16.4 -20 -8 -26.4 2 -26.6C10 -27 18 -29.4 23.8 -27.4C25 -24 22.6 -20.6 19 -18.8C12.8 -16.6 7 -13.4 4.4 -8.8C2.6 -4 2.2 2 3.2 8C-0.8 12 -6 13.6 -12 12Z'
/** The seam where the brim meets the crown, and the plait across the brim. */
export const BONNET_LINES =
  'M1.6 -26.2C-1.8 -17 -2.4 -2 -0.4 9.4M6 -26.6C5 -21 4.4 -16 4.6 -10.4M11.4 -27.4C10.2 -23 9.6 -19.4 9.8 -15.6M17 -28C16.2 -24.6 15.6 -21.8 15.6 -18.6M-15.4 -12.6Q-8 -14.6 -1.4 -12'
/** The ribbon down from the brim, and its bow at the side of the jaw. Stroke in PAPER. */
export const BONNET_BOW =
  'M3.2 8L4.4 16M4.4 16C1 13.4 -2.2 14.6 -1.4 17.4C-0.6 19.6 2.6 18.6 4.4 16ZM4.4 16C6.4 13.2 9.6 13.6 9.4 16.4C9.2 18.8 6 18.8 4.4 16ZM4.4 16L3.6 22.4M4.4 16L6.8 21.8'

/** A bonnet on a head, placed with the head's transform: `straw` pale (Nancy's), or dark (Eppie's brown one). */
export function Bonnet({ t, straw = false }: { t: string; straw?: boolean }) {
  return (
    <g transform={t}>
      <path
        d={BONNET}
        fill={straw ? PAPER : INK}
        stroke={straw ? INK : PAPER}
        strokeWidth={1.1}
        strokeLinejoin="round"
      />
      <path d={BONNET_LINES} fill="none" stroke={straw ? INK : PAPER} strokeWidth={0.8} />
      <path d={BONNET_BOW} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinecap="round" />
    </g>
  )
}
