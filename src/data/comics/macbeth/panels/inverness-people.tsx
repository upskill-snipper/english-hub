import { INK, PAPER } from '@/components/comics/linocut/palette'
import { gouge } from '@/components/comics/linocut/carve'

/**
 * The people of Inverness, for the panels of moments 6 to 10 (Act 1, Scene 6
 * to Act 2, Scene 3), all of which happen at Macbeth's castle. Heads in the
 * frame of HEAD in ./cut-figure.tsx (centred on 0, 0, about 34 by 42, facing
 * right), so they are placed with a part's `t` in the same way.
 *
 * The play describes almost nobody, so almost everything here is plain dress
 * of the play's Scotland, and nothing is taken from a film or stage
 * production. What the text does say:
 *
 * - Duncan is old: Lady Macbeth remembers "the old man" (5.1), and Macbeth
 *   speaks of "His silver skin" (2.3). So his hair and beard are white, and
 *   he wears a king's crown, printed red as the other Macbeth panels print it.
 * - Lady Macbeth speaks of "this little hand" (5.1) and nothing else of her
 *   looks, so she is a plain figure in a long gown and a veil.
 * - Fleance is Banquo's "boy" (2.1), so he is drawn a head shorter.
 */

/**
 * A man's head in profile facing right, with the nose, brow and chin cut
 * larger than life. The rough edge of the print eats about two units from
 * every edge, and a profile has to survive that at phone width, so the
 * features are pushed out further than HEAD's.
 */
export const HEAD_MAN =
  'M-9 22C-10 16 -15 12 -16 3C-17 -10 -8 -20 3 -20C11 -20 16 -14 16 -8L16 -5L22.5 3.5L17 5.5L17.5 8.5L16 10L17 12.5C16.5 16 13 18.5 8 18.5L6 22Z'

/** The same head with a short beard along the jaw. */
export const HEAD_BEARD =
  'M-9 22C-10 16 -15 12 -16 3C-17 -10 -8 -20 3 -20C11 -20 16 -14 16 -8L16 -5L22.5 3.5L17 5.5L18 9C19 14 17 20 12 23C9 24.5 7 24 5.5 23Z'

/**
 * A young man's head, for Duncan's sons: no beard, and a fuller head of hair
 * that falls over the brow and curls at the nape.
 */
export const HEAD_YOUTH =
  'M-9 22C-12 18 -15 14 -16.5 8L-19.5 6.5L-16.5 3C-18 -10 -9 -21 3 -21C11.5 -21 17.5 -16 17.5 -9.5L15 -9L16.5 -5L22.5 3.5L17 5.5L17.5 8.5L16 10L17 12.5C16.5 16 13 18.5 8 18.5L6 22Z'

/**
 * Macbeth's head: the bearded head with rough locks at the nape and a fuller
 * crown of hair, so that he keeps one recognisable outline from panel to
 * panel. The play says nothing of his looks; this is plain, not described.
 */
export const HEAD_MACBETH =
  'M-9 22C-11 19 -13 17 -14.5 15L-19 13.5L-16 10L-20.5 6L-16.5 2.5L-20 -2.5L-16 -5.5C-17 -15 -8 -22.5 3 -22C12 -21.5 17.5 -15.5 16.5 -8L16.5 -5L22.5 3.5L17 5.5L18 9C19.5 14 18 21 13 24.5C10 26 7 25.5 5.5 23.5Z'

/**
 * An old man's head, for Duncan: the face in ink, with his beard and the hair
 * at his nape as separate shapes (OLD_BEARD, OLD_HAIR), so that "the old man"
 * (5.1) with his "silver skin" (2.3) reads as old at a glance. Close up, as in
 * Duncan arrives, the beard is paper outlined in ink; small, as at the head
 * of the table in Macbeth wavers, it is ink streaked with paper, because a
 * paper beard that small against a pale ground disappears.
 */
export const HEAD_OLD = HEAD_MAN
export const OLD_BEARD =
  'M17 5C20 11 20.5 20 16 28C13.5 32 10 33.5 8 31C6.5 27 6 22 6.5 17C10 18 13.5 17 15.5 12L16.5 8.5Z'
export const OLD_HAIR = 'M-14 -4C-17.5 4 -17 13 -13 21L-7 22C-10 14 -10.5 5 -8.5 -3Z'
/** Ink strands in the white beard and hair. */
export const OLD_STRANDS =
  'M15 10C16 17 15 24 12 30M11.5 18C12 23 11 27 9.5 30.5M-12.5 0C-14 7 -13 14 -10.5 20.5'

/** An eye cut as a paper spark, in the frame of every head here. */
export const EYE = 'M7 -3.6Q10 -5.4 12.6 -3.6Q10 -2.2 7 -3.6Z'

/**
 * A woman's head in profile facing right, with a veil over the crown that
 * falls down her back. Draw VEIL after the head, as its own part.
 */
export const HEAD_WOMAN =
  'M-8 21C-9 15 -14 11 -15 3C-16 -9 -7 -19 2 -19C10 -19 14.5 -13 14.5 -7.5L15 -4.5L20.5 3L15.5 4.8L16 7.5L14.8 9L15.6 11.5C15 15 12 17 7.5 17L5.5 21Z'
export const VEIL =
  'M12.5 -12.5C6 -22 -6 -23 -13 -16C-18.5 -9 -19.5 4 -18.5 16C-17.5 32 -22 52 -28 72L-13 73C-9 54 -7 34 -7 20C-7 8 -5 -3 2 -9C6.5 -12.5 10 -13 12.5 -12.5Z'

/** A plain king's crown, a band and five points, sitting on the head. */
export const CROWN =
  'M-15 -10L-17 -25L-11 -17L-5.5 -29L-0.5 -18L5 -29.5L9 -17.5L14.5 -25L14 -9C7 -12.5 -7 -12.5 -15 -10Z'

/** The band across a crown, cut in paper. */
export const CROWN_CUTS = gouge(-14.5, -13.5, 13.5, -13, 1.1)

/**
 * A martlet, the house martin Banquo calls "This guest of summer": a small
 * swallow shape with swept wings and a forked tail, flying left, about 22
 * units long. Placed with a transform; mirror it to fly right.
 */
export const MARTLET =
  'M0 0C2 -2.2 6 -2.6 9 -1.2L18.5 -9.5L13.5 0.2L22.5 0.8L14.5 2.4L21.5 6L11 3.8L16 11.5L7 3.6C4 3.8 1.5 2.6 0 0Z'

/** A martlet's nest, "his pendant bed and procreant cradle", hung under a ledge at (0, 0). */
export const NEST = 'M-7 0C-8 6 -4.5 10.5 0 10.5C4.5 10.5 8 6 7 0Z'
/** The courses of mud a nest is built from, cut in paper across the ink cup. */
export const NEST_MUD = 'M-6 4.4Q0 6.4 6 4.4M-4.6 7.8Q0 9.4 4.6 7.8'

/** Martlets flying, black against a pale sky or paper against a dark wall. */
export function Martlets({
  birds,
  tone = 'ink',
}: {
  birds: [x: number, y: number, s: number, flip?: boolean, turn?: number][]
  tone?: 'ink' | 'paper'
}) {
  return (
    <g fill={tone === 'ink' ? INK : PAPER}>
      {birds.map(([x, y, s, flip, turn = 0]) => (
        <path
          key={`${x}-${y}`}
          d={MARTLET}
          transform={`translate(${x} ${y}) rotate(${turn}) scale(${flip ? -s : s} ${s})`}
        />
      ))}
    </g>
  )
}
