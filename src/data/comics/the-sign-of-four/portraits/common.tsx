import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { n, type Pt } from '@/components/comics/linocut/carve'

/**
 * What The Sign of Four portraits share.
 *
 * The block, the cut ground behind a sitter, the paper rule, the outline and
 * hair helpers and the hand are the Jekyll and Hyde portraits' own,
 * re-exported here from ../../jekyll-and-hyde/portraits/ rather than copied:
 * the two books are set in the same London four years apart (1886 and 1888),
 * their people wear the same dress, and a second copy of a helper is a copy
 * that drifts. Only what this novel needs beyond them is defined below.
 *
 * AS CONAN DOYLE DESCRIBES THEM, AND NO FURTHER. Every portrait is drawn from
 * the held edition (src/data/full-texts/the-sign-of-four.ts) and its docblock
 * quotes the sentences each detail comes from. Watson describes some people
 * closely (Mary Morstan in Chapter 2, Thaddeus Sholto in Chapter 4, Athelney
 * Jones in Chapter 6, Small in Chapter 11) and others hardly at all (himself,
 * Captain Morstan, Major Sholto). Where the text gives no face, the sitter is
 * drawn plainly and the markers point only at what it does say; the card's
 * artNote says so.
 *
 * THE DRESS IS PLAIN ON PURPOSE. Conan Doyle names very little clothing: Mary
 * Morstan's sombre dress, turban and white feather, Jones's grey suit,
 * Thaddeus's Astrakhan topcoat, Small's handcuffs. Everyone else wears the
 * ordinary dress of their time and place: a London gentleman of 1888 a dark
 * coat, a white collar and a dark tie; an officer of the 1870s a plain dark
 * tunic with a stand collar; a trooper at Agra in 1857 a turban and a long
 * coat with a sash. Nothing comes from a film, television or stage
 * production, and none of the familiar Holmes costume of later illustrators
 * (no deerstalker, no cape, no curved pipe), because this book never gives
 * him any of it. The men are clean-shaven unless the text gives them a beard
 * (Small) or the dress of their time and place does (the Sikh troopers at
 * Agra, bearded and turbaned as the panels of Chapter 12 draw them).
 *
 * ONE WAY OF CUTTING A FACE. As in the Merchant of Venice portraits, every
 * face in these prints is cut the same way, in paper, with the same eye, the
 * same ear and the same few lines, whoever the sitter is. So nothing in a
 * face is drawn to mark a person out by their colour or origin, and where
 * the text names a complexion (Small's "mahogany features", Jones's
 * "red-faced") the words carry it, or the spot colour where it can sit on a
 * cheek. Above all Tonga: the narrator's description of him in Chapter 10 is
 * written in the racist language of its day. None of its words is quoted,
 * and nothing in it that makes him less than a man is drawn: his face is cut
 * from the same block as everyone else's, and his hair is the figure kit's
 * (../panels/people.tsx), so that he is one man from piece to piece. His
 * portrait is drawn from Small's words in Chapter 12 alone.
 *
 * RED IS NEVER ON A MOUTH OR A CHIN. Twice in the last texts a red mark near
 * a mouth read at a glance as blood (Hyde's anger, Juliet's lips beside the
 * vial). A flush sits on the cheekbone, well clear of the lips.
 *
 * Every portrait is drawn in the plate's own coordinates, 332 by 318, so its
 * markers can be read straight off the drawing, and each faces right, the way
 * the text is read, unless it says why not.
 *
 * TWO SITTERS IN ONE BLOCK. Where the words describe a person by what they do
 * to another (Mrs Forrester's arm round Mary's waist), both are drawn, each
 * head cut in a single sitter's frame and set smaller with a transform. The
 * line weights inside are multiplied by 1 / the scale (the `w` of
 * ProfileEye, ProfileEar and MaryHead), so no line prints finer than a
 * hairline, and a person who has a portrait of their own is drawn from it.
 */

export {
  InnerRule,
  PH,
  PW,
  combedHair,
  hatch,
  inside,
  lerp2,
  once,
  portraitGround,
  rimLight,
  smooth,
  strands,
  type Knot,
} from '../../jekyll-and-hyde/portraits/common'
export {
  Hand,
  handPaths,
  type HandPaths,
  type HandSpec,
} from '../../jekyll-and-hyde/portraits/hands'

/**
 * An eye in profile, looking right, cut as the Jekyll and Hyde portraits cut
 * Utterson's: a bold upper lid, a fine lower lid, the pupil forward in the
 * eye, and a paper glint. `at` is the middle of the eye. `wide` opens it for
 * alarm or eagerness; `heavy` drops the upper lid, for a tired or a knowing
 * look; `s` scales it. `w` multiplies its line weights, for a head drawn in
 * a portrait's frame and then set smaller in the block (two sitters in one
 * piece): pass 1 / the scale, so the lids print at the weight they have on a
 * single sitter and never finer than a hairline.
 */
export function ProfileEye({
  at,
  s = 1,
  wide = false,
  heavy = false,
  glint = true,
  w = 1,
}: {
  at: Pt
  s?: number
  wide?: boolean
  heavy?: boolean
  glint?: boolean
  w?: number
}) {
  const [x, y] = at
  const lift = wide ? -1.6 : heavy ? 1.4 : 0
  const upper = `M${n(x - 7.5 * s)} ${n(y + 1 * s)}Q${n(x + 0.5 * s)} ${n(y + (-4.2 + lift) * s)} ${n(x + 8 * s)} ${n(y - 0.4 * s)}`
  const lower = `M${n(x - 5.5 * s)} ${n(y + 4.6 * s)}Q${n(x + 1 * s)} ${n(y + 6.2 * s)} ${n(x + 7 * s)} ${n(y + 3 * s)}`
  const px = x + 4 * s
  const py = y + (heavy ? 1.8 : 1.2) * s
  return (
    <g>
      <path
        d={upper}
        fill="none"
        stroke={INK}
        strokeWidth={2.4 * Math.min(1, s) * w}
        strokeLinecap="round"
      />
      <path d={lower} fill="none" stroke={INK} strokeWidth={LINE.fine * w} strokeLinecap="round" />
      <circle cx={n(px)} cy={n(py)} r={n(2.8 * s)} fill={INK} />
      {glint && <circle cx={n(px + 1.1 * s)} cy={n(py - 1.1 * s)} r={n(1.1 * s)} fill={PAPER} />}
    </g>
  )
}

/**
 * An ear, as the Jekyll and Hyde portraits cut it: an outline in bold and one
 * fine inner fold. `at` is the top of the ear's front edge; `h` its height;
 * `w` multiplies its line weights, as for ProfileEye.
 */
export function ProfileEar({ at, h = 50, w = 1 }: { at: Pt; h?: number; w?: number }) {
  const [x, y] = at
  const k = h / 50
  const outer = `M${n(x)} ${n(y)}C${n(x - 12 * k)} ${n(y - 1 * k)} ${n(x - 17 * k)} ${n(y + 16 * k)} ${n(x - 14 * k)} ${n(y + 32 * k)}C${n(x - 11 * k)} ${n(y + 46 * k)} ${n(x - 3 * k)} ${n(y + 52 * k)} ${n(x + 4 * k)} ${n(y + 46 * k)}C${n(x + 6 * k)} ${n(y + 38 * k)} ${n(x + 6 * k)} ${n(y + 20 * k)} ${n(x)} ${n(y)}Z`
  const inner = `M${n(x - 2 * k)} ${n(y + 9 * k)}C${n(x - 8 * k)} ${n(y + 11 * k)} ${n(x - 9 * k)} ${n(y + 25 * k)} ${n(x - 6 * k)} ${n(y + 33 * k)}C${n(x - 4 * k)} ${n(y + 36 * k)} ${n(x - 1 * k)} ${n(y + 35 * k)} ${n(x)} ${n(y + 31 * k)}`
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d={outer} fill={PAPER} stroke={INK} strokeWidth={2 * w} />
      <path d={inner} fill="none" stroke={INK} strokeWidth={1.3 * w} />
    </g>
  )
}
