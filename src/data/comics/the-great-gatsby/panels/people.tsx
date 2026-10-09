import type { CSSProperties, ReactNode } from 'react'

import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, n, rng } from '@/components/comics/linocut/carve'

import { hand, limb, shoe, type P } from '../../romeo-and-juliet/panels/verona-kit'
import {
  EYE,
  EYE_DOWN,
  HEAD_MAN,
  HEAD_WOMAN,
  pointingHand,
} from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { endAngle, mitt } from '../../much-ado-about-nothing/panels/people'
import { EAR, FROWN, gripHand } from '../../the-tempest/panels/people'
import { boot, coat } from '../../jekyll-and-hyde/panels/people'

export { hand, limb, type P }

/**
 * THE PEOPLE OF THE GREAT GATSBY: one figure kit for every panel of the novel,
 * so that a student meets the same Nick, the same Gatsby, the same Daisy and
 * the same Tom from the dinner in East Egg to the last night on the beach.
 * Draw every recurring character with `Person` (or, for a pose it cannot
 * make, with the heads, hair and hats below), never with a new outline. A
 * change here changes every panel that uses it: preview them all before
 * changing one. Cut first for the panels of moments 1 to 5 (Chapters I to
 * IV). An artist who needs a person not here (Gatsby's father, Owl Eyes,
 * Michaelis, Catherine) adds a `Look` for them at the end, in the same way,
 * with the words they come from, and says so in this docblock.
 *
 * The cutting tools are the site's own, re-used rather than copied, so one
 * hand cuts every text: the limb and the open hand with its fingers apart
 * from the Romeo and Juliet kit (../../romeo-and-juliet/panels/verona-kit.tsx),
 * the heads of a man and a woman and the pointing hand from its other kit
 * (acts-3-4-kit.tsx), the hand at rest from Much Ado, the hand closed round
 * something and the ear from The Tempest, and the coat hung from neck to hip
 * from Jekyll and Hyde, cut short here for a lounge jacket of 1922 and long
 * for a dress. A figure is cut as the reference panel cuts Fred
 * (src/data/comics/a-christmas-carol/counting-house.tsx): a halo in the edge
 * colour round every part, so it reads as one shape with a single carved
 * outline, then the parts, then the cuts of the folds and features.
 *
 * ONE THING IS NEW HERE: a part carries its own tone (`Cut` below). The
 * novel dresses its people in light and dark ("They were both in white";
 * "Dressed up in white flannels"; "a spotted dress of dark blue
 * crêpe-de-chine"), and some of them are tanned, so a figure may be a black
 * face over a white dress (Jordan) or a white suit under a black head (Nick at
 * the party). Ink parts are edged in paper and paper parts in ink, exactly as
 * the Verona kit's `CutFigure` edges a whole figure of one tone.
 *
 * `Person` builds a figure from a pose in its own frame: facing right, feet at
 * (0, 0), a man about 182 units tall, the neck at (0, -138), the hip at
 * (0, -70), the head centred on (3, -160); a woman's neck at (0, -132) and hip
 * at (0, -80), her head centred on (2.5, -153). Place it with `at`, `scale`
 * and `flip` (to face left). Arms run shoulder, elbow, wrist; legs hip, knee,
 * ankle. `seatedLegs` and `seatedBody` give a man on a seat; a woman seated
 * gives her legs and `seated: true`, and her skirt runs over her lap.
 *
 * ── THIS NOVEL'S OWN RULES, which every panel keeps ────────────────────────
 * - Nobody is drawn from a film, a television series or a stage production:
 *   not the 1974 film's or the 2013 film's costumes, faces or casting.
 * - MEYER WOLFSHIEM is drawn like every other man, never as the caricature
 *   the novel's description of him makes him. That description, and his
 *   cufflinks, are never quoted, drawn or alluded to. He has the plain head
 *   every other man here has, and nothing marks him out but his age, which
 *   he gives himself: "I am fifty years old" (Chapter IV).
 * - MYRTLE, DAISY AND JORDAN are drawn with the same dignity as every other
 *   figure, never sexualised: the dresses are cut as plain shapes of the
 *   period, and no body is drawn through them.
 * - RED on a mouth or a chin reads as blood at a glance, and at phone width a
 *   small red mark near a face, a hand, a car, a road or water reads as
 *   blood too. A flush goes on the cheekbone (FLUSH), never the mouth, and
 *   only where the text gives one.
 * - Nobody at a party is drawn drunk, sick or falling, though a glass may be
 *   in a hand where the text puts one there.
 *
 * ── WHAT THE NOVEL SAYS OF THEM, and so what is drawn ──────────────────────
 * (the 1925 first edition, held as src/data/full-texts/the-great-gatsby.ts.)
 * Where the novel is silent a person is drawn plainly in the dress of New
 * York and Long Island in 1922: a lounge suit, a soft hat or a straw boater
 * for the men, a straight, loose dress to below the knee for the women.
 *
 * - NICK ('nick') describes himself hardly at all: thirty in the summer of
 *   the story ("I was thirty", Chapter VII). So he is the plainest man in
 *   any panel: dark hair cut short, a dark suit. At Gatsby's first party he
 *   is "Dressed up in white flannels" (Chapter III): `dress: 'paper'`.
 * - GATSBY ('gatsby'): "an elegant young rough-neck, a year or two over
 *   thirty" (Chapter III); "His tanned skin was drawn attractively tight on
 *   his face and his short hair looked as though it were trimmed every day"
 *   (Chapter III). So his face is ink (tanned), with one cut along the
 *   cheekbone for the tight skin, and his dark hair has a crisp hairline and
 *   a parting, cut in paper (GATSBY_HAIR): the one head of hair in the novel
 *   that looks freshly barbered. His suits are the novel's: "his
 *   caramel-colored suit" (Chapter IV) is left to the words, as the print has
 *   no caramel; "a white flannel suit, silver shirt, and gold-colored tie"
 *   (Chapter V) is `dress: 'paper'`; "his pink suit" (Chapters VII and VIII)
 *   is for the artist of those panels to decide (`dress: 'red'` prints it in
 *   the spot colour; check it at phone width before using it). "The Plaza
 *   Hotel" prints it red. "The death car" and "Gatsby's death" cut it in
 *   ink: in the car that kills Myrtle, and on the steps on the day he dies, a
 *   figure printed red could read as blood.
 * - TOM ('tom'): "a sturdy straw-haired man of thirty with a rather hard
 *   mouth and a supercilious manner. Two shining arrogant eyes had
 *   established dominance over his face and gave him the appearance of
 *   always leaning aggressively forward ... the enormous power of that body
 *   ... a great pack of muscle shifting when his shoulder moved under his
 *   thin coat. It was a body capable of enormous leverage—a cruel body"
 *   (Chapter I). So he is the broadest man in any panel (body 36, thick arms
 *   and neck), with a heavy, square jaw (HEAD_TOM), straw hair cut in PAPER,
 *   a larger eye with a hard lid, and his head carried forward of his
 *   shoulders. In Chapter I he is "in riding clothes" and "those glistening
 *   boots until he strained the top lacing": `riding: true` gives him
 *   breeches and tall boots with a shine cut down the shin and the lacing at
 *   the top.
 * - DAISY ('daisy'): "They were both in white" (Chapter I); "She dressed in
 *   white" (Chapter IV); "her glowing face" (Chapter I); "her dark shining
 *   hair" (Chapter VIII), and in the rain "A damp streak of hair lay like a
 *   dash of blue paint across her cheek" (Chapter V). So she is cut in
 *   PAPER, face, arms and white dress, with dark hair, short and waved to the
 *   jaw (DAISY_HAIR), the fashion of 1922. Her "bright passionate mouth" is
 *   left to the words: no red on her lips.
 * - JORDAN ('jordan'): "a slender, small-breasted girl, with an erect
 *   carriage, which she accentuated by throwing her body backward at the
 *   shoulders like a young cadet. Her gray sun-strained eyes ... out of a
 *   wan, charming, discontented face" and "with her chin raised a little, as
 *   if she were balancing something on it" (Chapter I); "the autumn-leaf
 *   yellow of her hair" (Chapter I); "Jordan's slender golden arm", "her
 *   brown hand" (Chapter III); "her face the same brown tint as the
 *   fingerless glove on her knee" (Chapter IX). So she is the slimmest woman
 *   in any panel, upright, her chin raised (her head tilts back 6 degrees by
 *   default); her face and arms are INK, the tan of a golfer, and her short
 *   hair is PAPER with ink strands (JORDAN_HAIR). She is in white with Daisy
 *   in Chapters I and VII (the default, `dress: 'paper'`).
 * - MYRTLE ('myrtle'): "She was in the middle thirties, and faintly stout
 *   ... Her face, above a spotted dress of dark blue crêpe-de-chine,
 *   contained no facet or gleam of beauty, but there was an immediately
 *   perceptible vitality about her" (Chapter II). So she is a little broader
 *   than the other women, dark-haired with her hair pinned up
 *   (MYRTLE_HAIR), and by default in the spotted dress: INK with paper spots
 *   (`dress: 'spotted'`); its blue is left to the words. In the flat she
 *   changes into "an elaborate afternoon dress of cream-colored chiffon":
 *   `dress: 'paper'`.
 * - GEORGE WILSON ('wilson'): "a blond, spiritless man, anæmic, and faintly
 *   handsome ... his light blue eyes"; "A white ashen dust veiled his dark
 *   suit and his pale hair as it veiled everything in the vicinity" (Chapter
 *   II); "pale as his own pale hair" (Chapter VII). So he is thinner than the
 *   other men, his long face bowed a little (HEAD_WILSON), his pale hair cut
 *   in PAPER, and his dark suit flecked with paper specks of ash (`dusty`,
 *   on by default). His blue eyes are left to the words.
 * - MEYER WOLFSHIEM ('wolfshiem'): see the rule above. A plain head and a
 *   dark suit, and two paper strands of grey at the temple for his fifty
 *   years.
 * - HENRY C. GATZ ('gatz'), added for "The funeral": "a solemn old man, very
 *   helpless and dismayed, bundled up in a long cheap ulster against the
 *   warm September day ... he began to pull so incessantly at his sparse
 *   gray beard" (Chapter IX). So he is a little smaller and narrower than
 *   the other men, his hair grey (PAPER), a sparse grey beard along the jaw
 *   with ink strands cut through it (GATZ_BEARD), and his ulster hangs to
 *   the calf, over both legs.
 * - OWL EYES ('owl'), added for "The funeral": "A stout, middle-aged man,
 *   with enormous owl-eyed spectacles" (Chapter III); "the man with
 *   owl-eyed glasses ... The rain poured down his thick glasses" (Chapter
 *   IX). So he is as broad as Tom, and a large round lens is cut in paper
 *   over his eye, its arm running back to the ear (OWL_SPECTACLES).
 * - Anyone else ('man', 'woman'): the guests, the musicians, the servants.
 *   Give them hats and dress tones to tell them apart.
 *
 * SEEDS: 7101 (the ash on Wilson's suit), 7102 (the spots of Myrtle's dress).
 */

// ── CUTTING ─────────────────────────────────────────────────────────────────

/** A part's tone: printed in ink, left as paper, or printed in the spot colour. */
export type Tone = 'ink' | 'paper' | 'red'

/**
 * A part is a filled shape, or, with `w`, a limb drawn as a stroke of that
 * width. `sep` cuts an edge of that width round the part before it is inked,
 * to lift an arm off the body behind it. `t` is a transform for that part
 * alone. `tone` overrides the figure's tone for this part.
 */
export type Part = { d: string; w?: number; sep?: number; t?: string; tone?: Tone }

/** One entry in a figure: a part, or a group (an arm and its hand) lifted off the body as one. */
export type Piece = Part | Part[]

const FILL: Record<Tone, string> = { ink: INK, paper: PAPER, red: RED }

/**
 * A figure cut from the block, as the Verona kit's CutFigure cuts one, with a
 * tone for each part. Every part is first haloed in its edge colour (paper
 * round ink, ink round paper and round red, unless `redEdge` says paper), the
 * ink parts' halos last so a black figure keeps one clean paper outline; then
 * the parts in order, each group's separating edges before its fills.
 */
export function Cut({
  parts,
  tone = 'ink',
  halo = 1.8,
  redEdge = INK,
  transform,
  className,
  style,
  children,
}: {
  parts: Piece[]
  tone?: Tone
  halo?: number
  redEdge?: string
  transform?: string
  className?: string
  style?: CSSProperties
  children?: ReactNode
}) {
  const toneOf = (p: Part) => p.tone ?? tone
  const edgeOf = (p: Part) => {
    const t = toneOf(p)
    return t === 'ink' ? PAPER : t === 'paper' ? INK : redEdge
  }
  const groups = parts.map((piece) => (Array.isArray(piece) ? piece : [piece]))
  const all = groups.flat()
  // Halos merged per colour (and per width for limbs), to keep the markup
  // small: every plate is fetched whole on a phone.
  const shapes = new Map<string, string>()
  const limbs = new Map<string, string>()
  const placed: Part[] = []
  for (const p of all) {
    if (p.t) {
      placed.push(p)
      continue
    }
    const e = edgeOf(p)
    if (p.w) {
      const k = `${e}|${n(p.w + halo * 2)}`
      limbs.set(k, (limbs.get(k) ?? '') + p.d)
    } else shapes.set(e, (shapes.get(e) ?? '') + p.d)
  }
  const order = [INK, RED, PAPER]
  const one = (p: Part, colour: string, extra: number, key: string) =>
    p.w ? (
      <path
        key={key}
        d={p.d}
        transform={p.t}
        fill="none"
        stroke={colour}
        strokeWidth={n(p.w + extra)}
      />
    ) : (
      <path
        key={key}
        d={p.d}
        transform={p.t}
        fill={colour}
        stroke={extra ? colour : undefined}
        strokeWidth={extra ? n(extra) : undefined}
      />
    )
  return (
    <g
      transform={transform}
      className={className}
      style={style}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {halo > 0 &&
        order.map((c) => (
          <g key={c}>
            {shapes.get(c) && (
              <path d={shapes.get(c)} fill={c} stroke={c} strokeWidth={n(halo * 2)} />
            )}
            {[...limbs]
              .filter(([k]) => k.startsWith(c))
              .map(([k, d]) => (
                <path key={k} d={d} fill="none" stroke={c} strokeWidth={k.split('|')[1]} />
              ))}
            {placed.filter((p) => edgeOf(p) === c).map((p, i) => one(p, c, halo * 2, `h${i}`))}
          </g>
        ))}
      {groups.map((g, i) => [
        ...g.map((p, j) => (p.sep ? one(p, edgeOf(p), p.sep * 2, `s${i}-${j}`) : null)),
        ...g.map((p, j) => one(p, FILL[toneOf(p)], 0, `f${i}-${j}`)),
      ])}
      {children}
    </g>
  )
}

// ── HEADS, in the frame of the shared heads: centred on (0, 0), facing right ──
// HEAD_MAN and HEAD_WOMAN are the Romeo and Juliet kit's, which every
// comedy's kit also cuts from. Crown near y -20, chin near y 18, the base of
// the neck at y 22.

/**
 * Tom: the same profile made heavier, "a sturdy straw-haired man": the jaw
 * squarer and lower, the chin pushed forward, the neck thick.
 */
export const HEAD_TOM =
  'M-11.6 24C-12.6 17 -16.8 12 -17.2 3C-17.6 -10 -8.4 -20.6 3 -20.6C11.4 -20.6 16.4 -14.6 16.4 -8.4L16.4 -5.2L22.8 3.4L17.4 5.6L18 8.6L16.4 10.2L18.4 13C18.6 18.4 15.4 21.4 9.2 21.8L8.4 24Z'
/**
 * Wilson: "a blond, spiritless man, anæmic, and faintly handsome". A longer,
 * thinner face than the others, the chin lower and receding a little.
 */
export const HEAD_WILSON =
  'M-8 23C-9 17 -13.4 12 -14.4 3C-15.4 -10 -7.6 -20 3 -20C10.6 -20 15 -14.4 15 -8.4L15.4 -5.2L21.4 3.8L16.2 5.8L16.6 8.8L15.2 10.4L15.8 13.4C15.4 18.6 12.6 21.4 7.8 21.6L6.4 23Z'

/** An eye: the shared one-cut eye. */
export { EYE, EYE_DOWN }
/**
 * An open eye on a face cut in paper (Daisy's): the lid's outline and the
 * pupil, in ink. The shared EYE filled in ink on a paper face read as an eye
 * shut, a single dark slit, at panel size.
 */
export const EYE_LID = 'M6.8 -3.8Q10 -6 12.9 -3.8Q10 -1.8 6.8 -3.8Z'
export const EYE_PUPIL = 'M8.9 -3.9a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0 -2.5 0Z'
/** A man's brow, one firm cut. */
export const BROW = gouge(6.4, -8.6, 14.6, -7.8, 0.9, -0.2)
/** A woman's brow, finer. */
export const BROW_FINE = gouge(7, -8.2, 13.4, -7.6, 0.6, -0.4)
/**
 * Tom's "Two shining arrogant eyes": a larger eye under a brow drawn low and
 * hard, with a paper glint left in the eye where the face is ink.
 */
export const TOM_EYE = 'M6.4 -4.2Q10.4 -6.8 13.8 -4.2Q10.4 -1.8 6.4 -4.2Z'
export const TOM_PUPIL = 'M9.4 -4.2a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0 -2.6 0Z'
export const TOM_BROW = gouge(5.8, -9.2, 15.6, -7.2, 1.2, -0.4)
/** Gatsby's "tanned skin ... drawn attractively tight on his face": a cut along the cheekbone. */
export const GATSBY_CHEEK = gouge(3.6, 4.4, 11.6, 6.6, 0.55, 0.6)
/**
 * A mouth, for a face cut in paper, stroked in ink at about 1. On an ink face
 * a cut mouth reads as teeth, so the profile alone carries it there.
 */
export const MOUTH_MAN = 'M14 10.6L16.6 10.2'
export const MOUTH_WOMAN = 'M12.8 9.6L15.2 9.2'
/**
 * The cheek, where a flush goes when the text gives one: two short strokes
 * on the cheekbone, well above the mouth. Stroke in RED at about 1.8.
 */
export const FLUSH = 'M4.6 2.6L9 3.6M5.2 5.4L8.6 6.2'

// ── HAIR, in the same frame ─────────────────────────────────────────────────

/**
 * A man's short hair as a shape, for hair whose tone differs from the face's
 * (Tom's and Wilson's pale hair on an ink face; dark hair on a face cut in
 * paper): from the hairline above the brow over the crown and down the back
 * of the head to the nape, the ear left clear in front of it.
 */
export const MAN_HAIR =
  'M12.8 -13.4C9.4 -20.2 1.4 -22.4 -5.4 -20.8C-13.4 -18.8 -18.4 -11.2 -17.8 -2C-17.4 4 -15.8 9 -13.2 12.4L-8.6 11.4C-9.6 7.6 -9.4 3.6 -6.8 0.6C-4.8 -1.6 -3 -3.8 -1.2 -6.2C1.8 -9.4 6.6 -11.4 12.8 -13.4Z'
/** Tom's straw hair, a little fuller and brushed back. */
export const TOM_HAIR =
  'M13 -14.2C9.6 -21.4 1 -23.6 -5.8 -21.8C-14.2 -19.4 -18.8 -11.4 -18.2 -2.2C-17.8 4 -16.2 9 -13.6 12.6L-9 11.6C-10 7.6 -9.6 3.6 -7 0.4C-4.8 -2 -3 -4.2 -1 -6.6C2 -9.8 6.6 -12 13 -14.2Z'
/** The strands of pale hair (Tom's, Wilson's), brushed back. Stroke in INK at about 0.8. */
export const PALE_STRANDS =
  'M10.4 -15.4C4 -17.6 -4 -16.8 -10.4 -11.4M8 -12.6C2 -13.6 -5 -12 -10.6 -6M3.4 -9.2C-2 -8.6 -7.4 -5 -10.8 0.6M-12.6 -11C-15.4 -5.6 -15.4 1.4 -12.4 8'
/**
 * Dark short hair on an ink face: the hairline cut in paper from the brow
 * round in front of the ear to the nape, the ear, and two strands over the
 * crown, as the Merchant kit's HAIR_SHORT is. Stroke in PAPER at about 1.2.
 */
export const HAIR_LINES =
  'M12.8 -13.4C6.4 -11.2 1.6 -8.4 -0.6 -3.6C-1.6 0.2 -3 4.6 -6 7.8' +
  'M8.6 -17C1 -18.2 -7.4 -15.4 -13 -8.4M4.4 -13.2C-2.6 -12.8 -8.6 -8.4 -12.2 -0.6'
/**
 * Gatsby's "short hair looked as though it were trimmed every day": a crisp
 * hairline cut close round the ear and the nape, and a parting. Stroke in
 * PAPER at about 1.3.
 */
export const GATSBY_HAIR =
  'M12.8 -13.4C7 -11.6 2.4 -8.8 0.2 -5.4C-1.6 -2.6 -2 2 -4.4 5.6C-6.4 8.4 -9 10.2 -12.4 10.8' +
  'M7.6 -17.6C2 -16.8 -4.6 -15.2 -10.6 -12.2'
/** Grey at Wolfshiem's temple, for his fifty years. Stroke in PAPER at about 0.9. */
export const GREY_TEMPLE = 'M0.4 -7.6C-2 -5.6 -3.2 -2.6 -3.4 0.6M-1.6 -9C-4.4 -7 -5.8 -3.8 -6 -0.4'
/**
 * Gatsby's father's "sparse gray beard": grey (PAPER) along the jaw and
 * hanging below the chin, the mouth left clear, with ink strands cut through
 * it (GATZ_BEARD_GAPS, stroked in INK at about 0.9) so it reads as sparse.
 * (First cut as five thin strands alone, which vanished at panel size.)
 */
export const GATZ_BEARD =
  'M0.6 4.4C1.4 9 3 13 6 16.4C8 19.6 9.6 24 12.4 25C14.6 24 16.4 20.4 17 16.4L17 12.6C15.4 12.2 14 12.4 12.6 13.4C9 12 5 9.6 3.2 4.8Z'
export const GATZ_BEARD_GAPS = 'M3 8.4L5 15.4M7 12.8L9.4 20.6M11 14.6L12.4 22.4M14.6 14.4L15 20.8'
/**
 * Owl Eyes' "enormous owl-eyed spectacles": a large round lens over the eye,
 * the bridge to the nose and the arm back to the ear. Stroke in PAPER at
 * about 1.4.
 */
export const OWL_SPECTACLES =
  'M5 -3.6a4.9 4.9 0 1 0 9.8 0a4.9 4.9 0 1 0 -9.8 0M14.8 -3.8L16.6 -4.6M5 -3.4L-1.4 -2.4'

/**
 * Daisy's dark hair, short and waved to the jaw, covering the ear: the bob of
 * 1922, with a wave over the temple. In the frame of HEAD_WOMAN.
 */
export const DAISY_HAIR =
  'M12 -12.6C9 -19.6 0 -21.8 -6.8 -19.8C-15 -17.2 -19.4 -9.2 -18.6 0C-18.2 6 -17 11.2 -14.6 15.6C-12.4 17.2 -9.6 16.6 -8 14.6C-6.2 16.6 -3.2 16.8 -1.4 14.6C0.8 12 1.8 7.6 2 3C2.2 -1.6 3.2 -5.4 5.6 -8C7.6 -10.2 9.6 -11.6 12 -12.6Z'
/** Its waves, cut in paper where the hair is dark. Fill with the face's edge colour. */
export const DAISY_WAVES =
  gouge(7.6, -15.6, -6.4, -14.4, 0.7, 1) +
  gouge(-9.6, -10.8, -13.4, 4.4, 0.7, 1.2) +
  gouge(-4.4, -5, -6.6, 10.6, 0.6, 1)
/**
 * Jordan's hair, "the autumn-leaf yellow of her hair": shorter than Daisy's,
 * close to the head and cut level at the nape, in PAPER.
 */
export const JORDAN_HAIR =
  'M12 -12.6C9 -19.6 0 -21.6 -6.6 -19.6C-14.6 -17 -18.8 -9.4 -18 -0.6C-17.6 4.6 -16.6 8.8 -14.6 12.2L-4.8 11.6C-2.6 9.4 -1.2 6 -0.8 2C-0.4 -2 1.2 -5.8 4.4 -8.6C6.6 -10.4 9.2 -11.8 12 -12.6Z'
export const JORDAN_STRANDS =
  'M9.6 -14.2C3.6 -16.6 -4 -15.8 -10.2 -11.2M6.4 -11.4C1 -12.4 -5.4 -10.4 -11 -4.6M2.2 -7.8C-2.2 -6.4 -6.6 -2.4 -9 3.4M-13 -9.8C-15.6 -4.4 -15.4 3 -13 9.4'
/** Myrtle's dark hair, pinned up at the back of the head in a knot. */
export const MYRTLE_HAIR =
  'M11.4 -12.6C8 -19.2 0 -21.2 -6.4 -19.4C-14 -17.2 -17.8 -10 -17.2 -2C-16.8 3 -15.2 7 -12.6 9.6C-10.8 10.4 -9.2 9.4 -8.8 7.6C-8.8 3.4 -6.6 -1 -3.2 -4.6C0.4 -8.6 5.4 -11 11.4 -12.6Z' +
  'M-25.6 -4a6.2 5.8 0 1 0 12.4 0a6.2 5.8 0 1 0 -12.4 0Z'
export const MYRTLE_HAIR_CUTS =
  gouge(7.6, -15.8, -6.6, -14.6, 0.6, 1) +
  gouge(-10, -11.2, -13, 2.6, 0.6, 1.2) +
  gouge(-23.6, -6.4, -15.6, -2.4, 0.6, 0.8)

// ── HATS, in the same frame ─────────────────────────────────────────────────

/** A straw boater: a flat crown and a flat brim. PAPER, with an ink band. */
export const BOATER =
  'M-21 -12.6C-21 -15 23 -15 23 -12.6C23 -10.6 -21 -10.6 -21 -12.6Z' +
  'M-13.2 -13.6L-12.8 -25.6C-4.4 -27.4 6.2 -27.4 13.8 -25.6L14.2 -13.6Z'
export const BOATER_BAND = 'M-13.2 -18.4L14 -18.4L14.1 -14.6L-13.2 -14.6Z'
/** A soft felt hat, its crown pinched and its brim snapped down at the front. INK, a paper band. */
export const FEDORA =
  'M-20 -10.8C-18 -13.8 17 -15.6 21.6 -12.6C23 -11.4 22 -9.8 19.6 -10.4C10 -12.4 -8 -11.6 -15.8 -9.2C-18.2 -8.6 -20.6 -9.4 -20 -10.8Z' +
  'M-13.6 -12C-14 -18.6 -12.4 -24.6 -7.2 -27.4C-2 -25.4 4 -25.4 9 -27.6C13.2 -25 14.8 -18.8 14.4 -12.8Z'
export const FEDORA_BAND = gouge(-13.6, -15.2, 14.4, -15.8, 1.1)
/** A cloth cap with a short peak, for a workman or a chauffeur. INK, a paper seam. */
export const CAP =
  'M-16.4 -9.6C-18.6 -16 -12.4 -24 0 -24.6C10 -25 16 -20 17 -14L26 -11.6C24 -9.6 18 -9.4 14 -10.2C4 -11.4 -8 -11 -16.4 -9.6Z'
export const CAP_SEAM = gouge(-12, -14.6, 15, -15.6, 0.8, 1.6)
/** A cloche, the close bell-shaped hat of 1922, pulled down to the brow. INK, a paper band. */
export const CLOCHE =
  'M13.4 -8.6C14 -16 9.4 -22.8 0 -23.2C-9.4 -23.6 -16.8 -17.6 -18 -8C-18.4 -3 -17.4 1.4 -16 4.4L-11.6 4.6C-11 0 -9 -4 -4.4 -6.6C1.2 -9.4 7.6 -9.8 13.4 -8.6Z'
export const CLOCHE_BAND = gouge(13.2, -11, -14.4, -9.6, 1, -1)

// ── HANDS, at the end of an arm ─────────────────────────────────────────────

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
  /** An open hand's length (15 is life and a little more) and how far its fingers fan. */
  size?: number
  spread?: number
}

// ── THE PEOPLE ──────────────────────────────────────────────────────────────

export type Look =
  | 'nick'
  | 'gatsby'
  | 'tom'
  | 'wilson'
  | 'wolfshiem'
  | 'gatz'
  | 'owl'
  | 'man'
  | 'daisy'
  | 'jordan'
  | 'myrtle'
  | 'woman'

export type Dress = Tone | 'spotted'

export interface Pose {
  look: Look
  /**
   * The head's centre and its tilt in degrees (forward, chin down, is
   * positive). `back` turns the head to look back over the shoulder, the
   * body still facing forward: Jordan turning to Nick beside her in the
   * victoria ("Wolfshiem and Jordan's story").
   */
  head?: { at?: P; rot?: number; back?: boolean }
  /** The line of the body, neck to hip: to lean, stoop or sit. */
  body?: { neck?: P; hip?: P }
  far?: ArmPose
  near?: ArmPose
  /** Hip, knee and ankle of each leg. See `seatedLegs`. */
  legs?: { far: P[]; near: P[] }
  /** The suit or the dress. Defaults to what the text gives each person (above). */
  dress?: Dress
  /** The face, the neck, the hands, and a woman's arms and legs. */
  skin?: Tone
  hair?: 'ink' | 'paper'
  hat?: 'boater' | 'fedora' | 'cap' | 'cloche'
  /** Tom in Chapter I: breeches and "those glistening boots". */
  riding?: boolean
  /** Ash on the suit: Wilson's, by default. */
  dusty?: boolean
  /** A woman sitting: her skirt runs over her lap to the knee her legs give. */
  seated?: boolean
  /** 'down' and 'shut' are the lid line of EYE_DOWN. */
  eye?: 'open' | 'down' | 'shut' | 'none'
  frown?: boolean
  /** A flush on the cheekbone (FLUSH), never the mouth. Only where the text gives one. */
  flush?: boolean
}

const WOMEN: Look[] = ['daisy', 'jordan', 'myrtle', 'woman']

/** How big each person is, against a man of 1. */
const SIZE: Record<Look, number> = {
  nick: 1,
  gatsby: 1,
  tom: 1.03,
  wilson: 0.99,
  wolfshiem: 1,
  gatz: 0.96,
  owl: 0.99,
  man: 1,
  daisy: 0.92,
  jordan: 0.94,
  myrtle: 0.92,
  woman: 0.92,
}

/** Shoulders, arm and leg widths: Tom's "great pack of muscle", Jordan's slenderness. */
const BUILD: Record<Look, { width: number; arm: number; leg: number }> = {
  nick: { width: 30, arm: 8.6, leg: 10 },
  gatsby: { width: 30, arm: 8.6, leg: 10 },
  tom: { width: 36, arm: 10.6, leg: 11.4 },
  wilson: { width: 27, arm: 8, leg: 9.2 },
  wolfshiem: { width: 30, arm: 8.6, leg: 10 },
  gatz: { width: 28, arm: 8.2, leg: 9.4 },
  owl: { width: 36, arm: 9.8, leg: 11 },
  man: { width: 30, arm: 8.6, leg: 10 },
  daisy: { width: 23, arm: 6.2, leg: 6.4 },
  jordan: { width: 21, arm: 6, leg: 6.2 },
  myrtle: { width: 28, arm: 7, leg: 7 },
  woman: { width: 23, arm: 6.2, leg: 6.4 },
}

/** What each person wears and how each is printed, unless the pose says otherwise. */
const LOOK: Record<Look, { dress: Dress; skin: Tone; hair: 'ink' | 'paper' }> = {
  nick: { dress: 'ink', skin: 'ink', hair: 'ink' },
  gatsby: { dress: 'ink', skin: 'ink', hair: 'ink' },
  tom: { dress: 'ink', skin: 'ink', hair: 'paper' },
  wilson: { dress: 'ink', skin: 'ink', hair: 'paper' },
  wolfshiem: { dress: 'ink', skin: 'ink', hair: 'ink' },
  gatz: { dress: 'ink', skin: 'ink', hair: 'paper' },
  owl: { dress: 'ink', skin: 'ink', hair: 'ink' },
  man: { dress: 'ink', skin: 'ink', hair: 'ink' },
  daisy: { dress: 'paper', skin: 'paper', hair: 'ink' },
  jordan: { dress: 'paper', skin: 'ink', hair: 'paper' },
  myrtle: { dress: 'spotted', skin: 'ink', hair: 'ink' },
  woman: { dress: 'ink', skin: 'ink', hair: 'ink' },
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
const WOMEN_LEGS = {
  far: [
    [-2, -80],
    [-3, -40],
    [-4, -4],
  ] as P[],
  near: [
    [2, -80],
    [4, -40],
    [5, -4],
  ] as P[],
}
const MEN_ARMS = {
  far: [
    [-4, -132],
    [-8, -104],
    [-4, -80],
  ] as P[],
  near: [
    [4, -132],
    [8, -104],
    [10, -80],
  ] as P[],
}
const WOMEN_ARMS = {
  far: [
    [-3, -127],
    [-6, -103],
    [-3, -82],
  ] as P[],
  near: [
    [3, -127],
    [6, -103],
    [8, -82],
  ] as P[],
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
/** The body of a man (or, with `woman`, a woman) seated on a seat `seat` units high. */
export function seatedBody(seat: number, lean = 0, woman = false): { neck: P; hip: P } {
  return { hip: [0, -seat - 2], neck: [lean, -seat - 2 - (woman ? 52 : 68)] }
}

/** A woman's shoe with a small heel, at the ankle (x, y), toe along `facing`. */
function ladyShoe([x, y]: P, f: 1 | -1): Part {
  return {
    d: `M${n(x - f * 3.4)} ${n(y - 1)}L${n(x + f * 4)} ${n(y)}C${n(x + f * 8)} ${n(y + 0.6)} ${n(x + f * 9.4)} ${n(y + 2.4)} ${n(x + f * 9.4)} ${n(y + 4)}L${n(x - f * 2)} ${n(y + 4)}L${n(x - f * 3.2)} ${n(y + 4.4)}Z`,
  }
}

/**
 * A woman's skirt over her lap when she sits: from the seat behind the hip,
 * along the thigh to the knee, and falling `drop` below it, the length of
 * 1922.
 */
function lap(hip: P, knee: P, drop: number, thick = 9): string {
  // In the figure's own frame, facing right: along the thigh, and up from it.
  const { u, fr: up } = axes(hip, knee)
  const at = (o: P, a: number, b: number): P => along(o, u, a, up, b)
  const p = (q: P) => `${n(q[0])} ${n(q[1])}`
  const back = at(hip, -12, 0)
  const seatTop = at(hip, -6, thick)
  const overKnee = at(knee, -4, thick)
  const kneeFront = at(knee, thick * 0.8, 0)
  // The skirt falls straight down from the knee to its hem.
  const hemFront: P = [kneeFront[0] - 1, knee[1] + drop]
  const hemBack: P = [knee[0] - thick * 1.1, knee[1] + drop]
  const under = at(knee, -thick * 1.4, -thick * 0.8)
  const seatUnder = at(hip, -10, -thick * 0.9)
  return (
    `M${p(back)}Q${p(at(hip, -13, thick * 0.8))} ${p(seatTop)}L${p(overKnee)}` +
    `Q${p(at(knee, thick * 0.9, thick))} ${p(kneeFront)}L${p(hemFront)}L${p(hemBack)}` +
    `L${p(under)}L${p(seatUnder)}Q${p(at(hip, -14, -thick * 0.4))} ${p(back)}Z`
  )
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

/**
 * Where the specks of ash fall on Wilson's suit and the spots on Myrtle's
 * dress: fractions down the body (0 at the neck, 1 at the hem) and across it
 * (-1 back to 1 front), fixed once from the seeds, so every print is the same.
 */
let scatterCache: { ash: [number, number][]; spots: [number, number][] } | undefined
function scatter() {
  if (scatterCache) return scatterCache
  const r1 = rng(7101)
  const ash: [number, number][] = []
  for (let i = 0; i < 26; i++) ash.push([between(r1, 0.06, 1), between(r1, -0.85, 0.85)])
  const r2 = rng(7102)
  const spots: [number, number][] = []
  for (let row = 0; row < 9; row++)
    for (let col = 0; col < 4; col++)
      spots.push([
        0.08 + row * 0.11 + between(r2, -0.02, 0.02),
        -0.72 + col * 0.48 + (row % 2) * 0.22 + between(r2, -0.05, 0.05),
      ])
  scatterCache = { ash, spots: spots.filter(([, b]) => b < 0.86) }
  return scatterCache
}

function build(p: Pose) {
  const look = p.look
  const woman = WOMEN.includes(look)
  const L = LOOK[look]
  const B = BUILD[look]
  const dress: Dress = p.dress ?? L.dress
  const cloth: Tone = dress === 'spotted' ? 'ink' : dress
  const skin: Tone = p.skin ?? L.skin
  const hairTone = p.hair ?? L.hair
  const defNeck: P = woman ? [0, -132] : [0, -138]
  const defHip: P = woman ? [0, -80] : [0, -70]
  const neck: P = p.body?.neck ?? defNeck
  const hip: P = p.body?.hip ?? defHip
  const hAt: P = p.head?.at ?? (woman ? [neck[0] + 2.5, neck[1] - 21] : [neck[0] + 3, neck[1] - 22])
  const rot = p.head?.rot ?? (look === 'jordan' ? -6 : look === 'tom' ? 4 : 0)
  const headT = `translate(${n(hAt[0])} ${n(hAt[1])}) rotate(${rot})${p.head?.back ? ' scale(-1 1)' : ''}`
  const legs = p.legs ?? (woman ? WOMEN_LEGS : MEN_LEGS)
  const far = p.far ?? { pts: woman ? WOMEN_ARMS.far : MEN_ARMS.far }
  const near = p.near ?? { pts: woman ? WOMEN_ARMS.near : MEN_ARMS.near }
  const small = woman
  const parts: Piece[] = []
  const last = (a: P[]) => a[a.length - 1]

  const handOf = (a: ArmPose, sep?: number): Part[] => {
    const kind = a.hand ?? 'mitt'
    const wrist = last(a.pts)
    const angle = a.deg ?? endAngle(a.pts)
    const s = small ? 0.84 : 1
    const out: Part[] =
      kind === 'none'
        ? []
        : kind === 'mitt'
          ? [mitt(wrist, angle, s)]
          : kind === 'grip'
            ? [gripHand(wrist, angle, s)]
            : kind === 'point'
              ? pointingHand(wrist, angle, small ? 0.86 : 1, a.thumb ?? 1)
              : // Fanned 18 degrees by default: at 14 the rough edge of the
                // print closed the gaps between the fingers at panel size,
                // and open hands read as fists (the Merchant kit, 27
                // September 2026).
                hand(wrist, angle, {
                  size: a.size ?? (small ? 13 : 15),
                  spread: a.spread ?? 18,
                  thumb: a.thumb,
                })
    return out.map((q) => ({ ...q, sep, tone: skin }))
  }
  const armOf = (a: ArmPose, isNear: boolean): Part[] => {
    const sep = isNear ? 1.5 : undefined
    // A man's arm is in his sleeve; a woman's dress of 1922 leaves it bare.
    return [{ d: limb(a.pts), w: B.arm, sep, tone: woman ? skin : cloth }, ...handOf(a, sep)]
  }

  parts.push(armOf(far, false))

  if (woman) {
    const seated = p.seated ?? false
    for (const leg of [legs.far, legs.near]) {
      parts.push({ d: limb(leg), w: B.leg, tone: skin })
      parts.push({ ...ladyShoe(last(leg), 1), tone: 'ink' })
    }
    // The torso, then the dress hung on it.
    parts.push({ d: limb([neck, hip]), w: B.width * 0.66, tone: cloth })
    if (seated) {
      parts.push({ d: coat(neck, hip, 1, { width: B.width, hem: 2, flare: 0 }), tone: cloth })
      parts.push({ d: lap(hip, legs.near[1], 18), tone: cloth })
    } else {
      parts.push({ d: coat(neck, hip, 1, { width: B.width, hem: 46, flare: 4 }), tone: cloth })
    }
  } else {
    // A man: his trousers, his jacket (a lounge jacket of 1922, cut from the
    // coat hung neck to hip), and Tom's riding breeches and boots.
    const legOf = (leg: P[]): Part[] => {
      if (p.riding && leg.length >= 3) {
        const [h, k, a] = leg
        return [
          { d: limb([h, k]), w: B.leg + 3, tone: cloth },
          { d: limb([k, a]), w: B.leg - 0.6, tone: 'ink' },
          { ...boot([a[0], a[1] + 3], 1), tone: 'ink' },
        ]
      }
      return [
        { d: limb(leg), w: B.leg, tone: cloth },
        { ...shoe([last(leg)[0], last(leg)[1] + 3], 1), tone: 'ink' },
      ]
    }
    parts.push(...legOf(legs.far))
    // Gatsby's father's "long cheap ulster" hangs to the calf, over both legs.
    const ulster = look === 'gatz'
    if (ulster) parts.push(...legOf(legs.near))
    parts.push({ d: limb([neck, hip]), w: B.width * 0.76, tone: cloth })
    // Seated (the knee well forward of the hip), the jacket's skirt sits on
    // the seat instead of hanging below it.
    const [h0, k0] = legs.near
    const sitting = k0[0] - h0[0] > 18 && Math.abs(k0[1] - h0[1]) < 16
    parts.push({
      d: coat(neck, hip, 1, {
        width: B.width,
        hem: ulster ? 46 : sitting ? 4 : p.riding ? 16 : 13,
        flare: ulster ? 7 : sitting ? 1 : 3,
      }),
      tone: cloth,
    })
    if (!ulster) parts.push(...legOf(legs.near))
  }

  // The head, and the hair and hat on it.
  const headShape =
    look === 'tom' ? HEAD_TOM : look === 'wilson' ? HEAD_WILSON : woman ? HEAD_WOMAN : HEAD_MAN
  const headSep = skin === cloth ? 1 : undefined
  parts.push({ d: headShape, t: headT, tone: skin, sep: headSep })
  const hairShape = woman
    ? look === 'myrtle'
      ? MYRTLE_HAIR
      : look === 'jordan'
        ? JORDAN_HAIR
        : DAISY_HAIR
    : look === 'tom'
      ? TOM_HAIR
      : MAN_HAIR
  // A man's hair the same tone as his face is the head itself; any other hair is a shape.
  const hairPart = woman || hairTone !== skin
  if (hairPart && !(p.hat && !woman))
    parts.push({ d: hairShape, t: headT, tone: hairTone, sep: hairTone === skin ? 0.8 : undefined })
  const hat = p.hat
  if (hat)
    parts.push({
      d: hat === 'boater' ? BOATER : hat === 'fedora' ? FEDORA : hat === 'cap' ? CAP : CLOCHE,
      t: headT,
      tone: hat === 'boater' ? 'paper' : 'ink',
    })

  parts.push(armOf(near, true))

  return {
    parts,
    woman,
    skin,
    cloth,
    dress,
    hairTone,
    hairPart,
    headT,
    neck,
    hip,
    legs,
    rot,
  }
}

/**
 * One of the people of the novel, cut from the block: placed with its feet at
 * `at`, scaled by `scale` (on top of the person's own size), and turned to
 * face left with `flip`. `children` are drawn last, in the figure's own frame
 * (a glass, a magazine, a spade held in the hand).
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
  const eye = pose.eye ?? 'open'
  const { neck, hip } = b
  const { u, fr } = axes(neck, hip)
  const bodyLen = Math.hypot(hip[0] - neck[0], hip[1] - neck[1])

  // The shirt front and the tie in the opening of a man's jacket.
  let shirt = ''
  let tie = ''
  let lapels = ''
  if (!b.woman) {
    // A short V of shirt at the throat, the tie down it, and the lapel's edge.
    // (Cut first 22 units long, it read at panel size as a white scarf.)
    const A = along(neck, u, -1.6, fr, 4)
    const Bp = along(neck, u, -0.4, fr, 12.4)
    const C = along(neck, u, 13, fr, 9.4)
    shirt = `M${n(A[0])} ${n(A[1])}L${n(Bp[0])} ${n(Bp[1])}L${n(C[0])} ${n(C[1])}Z`
    const t0 = along(neck, u, 0.4, fr, 8.4)
    const t1 = along(neck, u, 12, fr, 9.2)
    tie = `M${n(t0[0])} ${n(t0[1])}L${n(t1[0])} ${n(t1[1])}`
    const l0 = along(neck, u, 1, fr, 13.6)
    const l1 = along(neck, u, 22, fr, 10.4)
    lapels = gouge(l0[0], l0[1], l1[0], l1[1], 0.7)
  }
  // Myrtle's spots and Wilson's ash, over the dress or the suit.
  let spots = ''
  let ash = ''
  if (b.dress === 'spotted') {
    const hemLen = pose.seated ? bodyLen + 4 : bodyLen + 44
    const half = BUILD[look].width / 2
    for (const [a, c] of scatter().spots) {
      const along0 = a * hemLen
      if (pose.seated && along0 > bodyLen) continue
      const w = half * (0.7 + 0.25 * Math.min(1, along0 / bodyLen))
      const q = along(neck, u, along0 + 4, fr, c * w)
      spots += `M${n(q[0] - 1.4)} ${n(q[1])}a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0 -2.8 0Z`
    }
  }
  if (pose.dusty ?? look === 'wilson') {
    const half = BUILD[look].width / 2
    for (const [a, c] of scatter().ash) {
      const q = along(neck, u, 6 + a * (bodyLen + 6), fr, c * half * 0.8)
      ash += gouge(q[0] - 1.2, q[1] - 0.6, q[0] + 1.2, q[1] + 0.6, 0.55)
    }
    for (const leg of [b.legs.near]) {
      const [h, k, a] = leg
      for (const t of [0.25, 0.6, 0.85]) {
        const q: P =
          t < 0.5
            ? [h[0] + (k[0] - h[0]) * t * 2, h[1] + (k[1] - h[1]) * t * 2]
            : [k[0] + (a[0] - k[0]) * (t - 0.5) * 2, k[1] + (a[1] - k[1]) * (t - 0.5) * 2]
        ash += gouge(q[0] - 1.6, q[1] + 1, q[0] + 0.8, q[1] - 0.4, 0.55)
      }
    }
  }
  // Tom's glistening boots: the shine down each shin and the lacing at the top.
  let bootCuts = ''
  if (pose.riding && !b.woman) {
    for (const leg of [b.legs.far, b.legs.near]) {
      const [, k, a] = leg
      const top: P = [k[0] + (a[0] - k[0]) * 0.08, k[1] + (a[1] - k[1]) * 0.08]
      bootCuts +=
        gouge(top[0] - 5.6, top[1], top[0] + 5.6, top[1] + 0.4, 0.9) +
        gouge(
          k[0] + 2.4 + (a[0] - k[0]) * 0.2,
          k[1] + (a[1] - k[1]) * 0.2,
          k[0] + 2.2 + (a[0] - k[0]) * 0.86,
          k[1] + (a[1] - k[1]) * 0.86,
          0.8,
          -0.2,
        )
      for (const t of [0.12, 0.2, 0.28])
        bootCuts += gouge(
          k[0] + (a[0] - k[0]) * t + 2.2,
          k[1] + (a[1] - k[1]) * t,
          k[0] + (a[0] - k[0]) * t + 5.2,
          k[1] + (a[1] - k[1]) * t - 1,
          0.45,
        )
    }
  }

  const hairCuts =
    !b.woman && !b.hairPart && !pose.hat ? (look === 'gatsby' ? GATSBY_HAIR : HAIR_LINES) : ''

  return (
    <Cut parts={b.parts} transform={transform} className={className} style={style}>
      {shirt && b.cloth !== 'paper' && <path d={shirt} fill={PAPER} />}
      {shirt && b.cloth === 'paper' && (
        <path d={shirt} fill="none" stroke={INK} strokeWidth={0.8} />
      )}
      {tie && <path d={tie} fill="none" stroke={INK} strokeWidth={2.2} />}
      {lapels && <path d={lapels} fill={b.cloth === 'paper' ? INK : PAPER} />}
      {spots && <path d={spots} fill={PAPER} />}
      {ash && <path d={ash} fill={PAPER} />}
      {bootCuts && <path d={bootCuts} fill={PAPER} />}
      <g transform={b.headT}>
        {hairCuts && (
          <path
            d={hairCuts}
            fill="none"
            stroke={PAPER}
            strokeWidth={look === 'gatsby' ? 1.3 : 1.2}
          />
        )}
        {look === 'wolfshiem' && !pose.hat && (
          <path d={GREY_TEMPLE} fill="none" stroke={PAPER} strokeWidth={0.9} />
        )}
        {look === 'gatz' && (
          <>
            <path d={GATZ_BEARD} fill={PAPER} />
            <path d={GATZ_BEARD_GAPS} fill="none" stroke={INK} strokeWidth={0.9} />
          </>
        )}
        {look === 'owl' && <path d={OWL_SPECTACLES} fill="none" stroke={PAPER} strokeWidth={1.4} />}
        {b.hairPart && b.hairTone === 'paper' && !pose.hat && (
          <path
            d={b.woman ? JORDAN_STRANDS : PALE_STRANDS}
            fill="none"
            stroke={INK}
            strokeWidth={0.8}
          />
        )}
        {b.hairPart && b.hairTone === 'ink' && b.woman && !pose.hat && (
          <path d={look === 'myrtle' ? MYRTLE_HAIR_CUTS : DAISY_WAVES} fill={PAPER} />
        )}
        {!b.woman && <path d={EAR} fill="none" stroke={feat} strokeWidth={1.1} />}
        {eye !== 'none' &&
          (eye === 'open' ? (
            look === 'tom' ? (
              <>
                <path d={TOM_EYE} fill={feat} />
                <path d={TOM_PUPIL} fill={b.skin === 'ink' ? INK : PAPER} />
              </>
            ) : b.skin === 'paper' ? (
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
        <path d={look === 'tom' ? TOM_BROW : b.woman ? BROW_FINE : BROW} fill={feat} />
        {look === 'gatsby' && <path d={GATSBY_CHEEK} fill={feat} />}
        {pose.frown && <path d={FROWN} fill={feat} />}
        {b.skin === 'paper' && (
          <path d={b.woman ? MOUTH_WOMAN : MOUTH_MAN} fill="none" stroke={INK} strokeWidth={1} />
        )}
        {pose.flush && (
          <path d={FLUSH} fill="none" stroke={RED} strokeWidth={1.8} strokeLinecap="round" />
        )}
        {pose.hat === 'boater' && <path d={BOATER_BAND} fill={INK} />}
        {pose.hat === 'fedora' && <path d={FEDORA_BAND} fill={PAPER} />}
        {pose.hat === 'cap' && <path d={CAP_SEAM} fill={PAPER} />}
        {pose.hat === 'cloche' && <path d={CLOCHE_BAND} fill={PAPER} />}
      </g>
      {children}
    </Cut>
  )
}
