import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import { inside } from '../../jekyll-and-hyde/portraits/common'
import { combedFromCrown, shoulders } from '../../julius-caesar/portraits/common'
import { spline, type SP } from '../../the-merchant-of-venice/portraits/common'

/**
 * What the Pride and Prejudice portraits share.
 *
 * The block, the cut ground behind a sitter, the paper rule, the outline and
 * placing helpers, the man's head and the woman's head are the portraits' own
 * from the plays and from The Great Gatsby, re-exported here rather than
 * copied: through ../../the-merchant-of-venice/portraits/common.tsx (MAN_HEAD,
 * WOMAN_HEAD, their eyes, mouths and ears, the shadow under the jaw),
 * ../../julius-caesar/portraits/common.tsx (the shoulders every garment is
 * cut from, `once`, the ear, hair combed out from the crown, the fringe, the
 * lines of age) and ../../the-tempest/portraits/common.tsx (a head turned at
 * the neck). A second copy of a helper is a copy that drifts, and one hand
 * cutting every text keeps the site one artist. Only the dress of the 1800s
 * and 1810s, the hair worn with it, and a few faces the novel asks for, are
 * defined below.
 *
 * ONE HEAD FOR EVERY MAN, AND ONE FOR EVERY WOMAN. Every man is cut from
 * MAN_HEAD and every woman from WOMAN_HEAD, the same brow, nose, mouth and
 * ear, and each is told from the others only by what the novel gives them
 * (Elizabeth's dark eyes, Mr Collins "tall" and "heavy looking", Lady
 * Catherine's "strongly-marked features"), by their age, by the dress of
 * their station, and by what they are doing. Two heads are changed because
 * the novel's words change them: Mr Collins's jaw is heavier (The Great
 * Gatsby's TOM_HEAD, the same outline with the jaw squarer and lower), and
 * Lady Catherine's nose and chin are stronger (LADY_HEAD, below). Mr Bingley,
 * "quite young", is cut from the youth's head the plays give Octavius
 * (YOUTH_HEAD).
 *
 * AS AUSTEN DESCRIBES THEM, AND NO FURTHER. Every phrase on a card is copied
 * from the held edition, src/data/full-texts/pride-and-prejudice.ts (the
 * first edition of 1813, as Project Gutenberg #42671 transcribes it), in its
 * spelling and punctuation ("Mr." with its full stop, "gentleman-like"), and
 * each portrait's docblock quotes the sentences each detail comes from.
 * Austen describes very little of anyone's looks. She gives Elizabeth "dark
 * eyes", Mr Darcy a "fine, tall person", Mr Collins, Lady Catherine, Lydia,
 * Georgiana and Wickham a sentence or two each; of Jane, Mr Bingley, Mr and
 * Mrs Bennet, Charlotte and Mrs Gardiner she says almost nothing a print can
 * show. Where the novel gives no looks, the sitter is drawn plainly in the
 * dress of the time and the markers point only at what the novel does say;
 * the card's small print says so. No colour of hair is named for anyone, so
 * every head of hair is cut dark, as the block prints it, and grey for the
 * older people. Nothing comes from a film, television or stage production:
 * not the 1940, 1995 or 2005 adaptations, not their faces, not their
 * costumes.
 *
 * THE DRESS OF 1811 TO 1813, PLAIN ON PURPOSE. The novel was revised for
 * publication in 1811 to 1812 and names very little of what anyone wears:
 * Mr Bingley's "blue coat" (Chapter 3), the officers' "red coats" and
 * "regimentals" (Chapters 7, 15 and 18), Lydia's bonnet (Chapter 39). The
 * rest is the ordinary dress of the English gentry of those years. A
 * gentleman wears a dark tail-coat with a high collar standing up behind his
 * neck and the lapels turned back (COAT, COAT_COLLAR, LAPEL_NEAR, LAPEL_FAR),
 * a white neckcloth wound high round his throat with the points of his shirt
 * collar standing up against his jaw (CRAVAT, SHIRT_POINT), and a waistcoat
 * in the opening of the coat (VEST); his hair is cut short and brushed
 * forward from the crown, with whiskers down in front of the ear
 * (MAN_HAIR_PTS), as men wore it then. A clergyman wears the same in black.
 * A militia officer's coat is printed in the spot colour (see Wickham's
 * file). A lady wears a high-waisted gown (GOWN) with a ribbon at the waist
 * under the bust (SASH), its neck cut round at the collarbone with a band of
 * muslin along the edge (SCOOP, NECKLINE, TUCKER_SPINE) or, for a girl,
 * filled to the foot of the neck by a white chemisette closed with a small
 * frill (CHEMISETTE, FRILL_SPINE). A young woman's hair is drawn up from the
 * neck to a knot at the back of the crown, with short curls at the temple
 * (HAIR_UP_PTS, KNOT, TEMPLE_CURLS). A married
 * woman wears a white cap over her hair (capShapes), as married women did
 * indoors; out of doors a bonnet (BONNET_CROWN, BONNET_BRIM). Every sitter is dressed to the
 * throat or the collarbone, women with the same care and dignity as men, and
 * nothing on a card is chosen for what it says about a woman's body. Lydia
 * (fifteen) and Georgiana (sixteen) are girls, and are drawn as girls.
 *
 * RED IS NEVER ON A MOUTH, A CHIN OR A HAND, where at a glance it reads as
 * blood. A flush sits on the cheekbone, well clear of the lips. The only
 * large red in these portraits is Wickham's coat, which is the spot colour
 * because the novel names it.
 *
 * MARKERS NEVER CROSS A FACE. A marker for the face, a cheek or the skin sits
 * on the face with no line, as the pilot's "shrivelled his cheek" sits on
 * Scrooge's. Any other marker that reaches a head comes to its feature from
 * in front at the feature's own height, as Scrooge's eye marker does, or,
 * for the hair, from behind at the hair's own height: never down from above
 * the head and never up from the neck. A marker for the lips stops in the
 * air before them.
 *
 * GROUND KEYS. portraitGround caches each ground by its key in a module every
 * text's portraits share: every key here starts "pp-".
 *
 * SEEDS. Each portrait has its own block of a hundred: 8100 for Elizabeth,
 * 8200 Mr Darcy, 8300 Jane, 8400 Mr Bingley, 8500 Mr Bennet, 8600 Mrs Bennet,
 * 8700 Wickham, 8800 Georgiana, 8900 Lydia, 9000 Mr Collins, 9100 Charlotte,
 * 9200 Lady Catherine, 9300 Mrs Gardiner.
 *
 * Every figure is drawn facing right in its own 0..240 by 0..332 frame, the
 * frame of MAN_HEAD and WOMAN_HEAD, and placed with `placing`; one that faces
 * left is flipped.
 */

export {
  EarCut,
  ageLines,
  combedFromCrown,
  fringe,
  napeShade,
  once,
  shoulders,
  YOUTH_EAR,
  YOUTH_HEAD,
  YOUTH_HEAD_OPEN,
  YOUTH_MOUTH,
  YouthEye,
  YouthNoseAndMouth,
} from '../../julius-caesar/portraits/common'
export {
  Buttons,
  capsule,
  Hand,
  handPoint,
  hatch,
  lerp2,
  MAN_CHEEK,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  MAN_HEAD_OPEN,
  MAN_MOUTH,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  NeckShadow,
  neckShade,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  quad2,
  ruffBand,
  spline,
  strands,
  WOMAN_EAR,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
  type Digit,
  type SP,
} from '../../the-merchant-of-venice/portraits/common'
export { NECK_PIVOT, onTurnedHead, turn } from '../../the-tempest/portraits/common'
export { TOM_HEAD } from '../../the-great-gatsby/portraits/common'
export { Hand as SpecHand, handPaths } from '../../jekyll-and-hyde/portraits/hands'
/**
 * Colour on a cheekbone (Lydia's "fine complexion") and curls cut as open
 * rings, from the Silas Marner portraits, which are drawn in the same years.
 */
export { Bloom, curlMarks } from '../../silas-marner/portraits/common'
export { inside }

// ── A gentleman's hair ──────────────────────────────────────────────────────

/**
 * Cut short and brushed forward from the crown, the locks falling forward on
 * the forehead, with whiskers grown down in front of the ear to the lobe: how
 * a gentleman wore his hair in the 1810s. For MAN_HEAD (and YOUTH_HEAD, whose
 * skull is the same). Fill it with INK and cut it with `brushedForward`.
 */
export const MAN_HAIR_PTS: SP[] = [
  [166, 70, 1],
  [162, 56],
  [154, 46],
  [150, 40, 1],
  [140, 36],
  [128, 30, 1],
  [116, 29],
  [102, 27, 1],
  [92, 31],
  [80, 33, 1],
  [70, 42],
  [62, 48, 1],
  [56, 60],
  [50, 70, 1],
  [47, 84],
  [44, 110],
  [46, 134],
  [50, 152],
  [56, 166, 1],
  [70, 162],
  [86, 150],
  [93, 138],
  [93, 118],
  [97, 104],
  [108, 99],
  [116, 103],
  [117, 126],
  [118, 146, 1],
  [124.5, 146, 1],
  [125.5, 124],
  [126.5, 103],
  [136, 92],
  [147, 83],
  [157.5, 77, 1],
]
export const MAN_HAIR = spline(MAN_HAIR_PTS)
/** The crown, where the brushed hair turns from. */
export const MAN_CROWN: Pt = [88, 50]

const brushedCache = new Map<string, string>()
/**
 * Short hair brushed forward from the crown: paper strokes lying out from
 * MAN_CROWN through the hair (combedFromCrown, as the Roman crop is cut),
 * fewer where `light` is low, so the hair is lit towards the face and dark at
 * the back of the head. `outline` is the hair's landmarks. Cached by seed.
 */
export function brushedForward(
  seed: number,
  outline: SP[] = MAN_HAIR_PTS,
  count = 190,
  light: (x: number, y: number) => number = (x) => Math.min(1, 0.25 + (x - 44) / 100),
): string {
  const key = `${seed}-${count}-${outline.length}`
  const hit = brushedCache.get(key)
  if (hit) return hit
  const d = combedFromCrown(seed, outline, MAN_CROWN, count, [7, 14], [0.55, 1], light)
  brushedCache.set(key, d)
  return d
}

/**
 * The locks falling forward over the top of the forehead: ink wedges from the
 * front of the hair down onto the brow, curling forward at the tip, so the
 * edge of the hair reads as hair and not as the rim of a cap. Fill with INK,
 * after the head.
 */
export function forelocks(seed: number, count = 7): string {
  const r = rng(seed)
  let d = ''
  for (let i = 0; i < count; i++) {
    const t = (i + 0.5) / count
    const x = 146 + t * 18
    const y = 86 - t * 17
    const L = between(r, 8, 13)
    const w = between(r, 1.8, 2.8)
    d += `M${n(x - w)} ${n(y - 2)}Q${n(x + L * 0.6)} ${n(y + L * 0.05)} ${n(x + L * 0.55)} ${n(y + L * 0.8)}Q${n(x + L * 0.2)} ${n(y + L * 0.35)} ${n(x + w)} ${n(y - 1)}Z`
  }
  return d
}

/**
 * The eye of MAN_HEAD under a heavy lid: the lid lowered and level, the dark
 * of the eye half under it and turned down, so the man looks down his nose.
 * For pride, where ManEye's `down` is for grief or thought.
 */
export function ProudEye() {
  return (
    <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
      <circle cx={155.4} cy={101.6} r={2.8} fill={INK} stroke="none" />
      <path d="M145.6 99.2Q154 96.6 162.8 99.4" strokeWidth={2.8} />
      <path d="M147.5 104.2Q154.5 106.4 161 103.2" strokeWidth={1.1} />
      <path d="M146.4 94.4Q153.6 91.6 160.8 93.8" strokeWidth={LINE.hairline} />
    </g>
  )
}

/**
 * Grey hair, worn by an older man: thinner at the temple, the forehead higher,
 * brushed back and down rather than forward, and the whiskers shorter. Fill
 * with PAPER and cut it in ink with `combedFromCrown`.
 */
export const OLD_HAIR_PTS: SP[] = [
  [150, 50, 1],
  [140, 38],
  [120, 31],
  [96, 31],
  [72, 41],
  [55, 59],
  [45, 84],
  [41, 112],
  [43, 140],
  [50, 162, 1],
  [66, 158],
  [84, 152],
  [93, 140],
  [92, 118],
  [97, 104],
  [108, 99],
  [116, 103],
  [117, 120],
  [118, 138, 1],
  [125, 138, 1],
  [126.5, 118],
  [127, 100],
  [130, 86],
  [134, 72],
  [140, 60],
]
export const OLD_HAIR = spline(OLD_HAIR_PTS)

// ── A gentleman's dress ─────────────────────────────────────────────────────
//
// In the frame of MAN_HEAD, the body turned a little towards us so the front
// of the coat shows. Drawn in two layers: `CoatBehind` before the head (the
// coat, its lapels, the waistcoat), `CoatFront` after it (the neckcloth wound
// round the neck, the shirt point against the jaw, and the coat's high collar
// standing up behind).

/** The coat: the shoulders every garment here is cut from. */
export const COAT = shoulders(1, 0)

/** The waistcoat in the opening of the coat. */
export const VEST = spline([
  [124, 238, 1],
  [168, 236, 1],
  [176, 280],
  [181, 336, 1],
  [128, 336, 1],
  [126, 284],
])

/** The lapels turned back either side of the waistcoat, notched where they meet the collar. */
export const LAPEL_NEAR = spline([
  [96, 232, 1],
  [124, 238, 1],
  [126, 284],
  [128, 336, 1],
  [104, 336, 1],
  [98, 292],
  [94, 258, 1],
  [84, 252, 1],
])
export const LAPEL_FAR = spline([
  [168, 236, 1],
  [190, 242, 1],
  [200, 256, 1],
  [191, 262, 1],
  [197, 300],
  [202, 336, 1],
  [181, 336, 1],
  [176, 280],
])

/**
 * The neckcloth, wound high round the neck from the collarbone right up under
 * the jaw, so no bare neck shows, and puffed forward under the chin, where it
 * is tied.
 */
export const CRAVAT = spline([
  [58, 204],
  [76, 182],
  [98, 166],
  [112, 166],
  [130, 178],
  [150, 186],
  [164, 187],
  [171, 197],
  [167, 212],
  [160, 226],
  [158, 240],
  [148, 250],
  [124, 253],
  [96, 250],
  [72, 242],
  [58, 226],
])
/** The folds the cloth makes as it is wound round, and where it is tied. */
export const CRAVAT_FOLDS =
  'M66 210Q104 188 162 200M64 226Q108 210 160 216M78 242Q116 234 154 232M150 194Q157 214 152 236'
/** The knot under the chin, and its two short ends falling over the waistcoat. */
export const CRAVAT_KNOT = spline([
  [146, 226, 1],
  [162, 224, 1],
  [166, 240],
  [160, 256, 1],
  [154, 246],
  [148, 258, 1],
  [143, 242],
])

/**
 * The point of the shirt collar, standing up out of the neckcloth against the
 * side of the jaw, in front of the ear: the high points of the 1810s.
 */
export const SHIRT_POINT = spline([
  [122, 178, 1],
  [150, 188, 1],
  [146, 176],
  [139, 160, 1],
  [130, 168],
])
/** The line of the jaw, above the neckcloth, back to below the ear. */
export const JAW = 'M110 150C116 162 124 170 134 176'

/**
 * The coat's collar standing up close behind the neck, as high as the nape
 * hair, its top rolled over, and turning down at the front into the lapel.
 */
export const COAT_COLLAR = spline([
  [28, 262, 1],
  [32, 238],
  [38, 216],
  [46, 198],
  [56, 186],
  [66, 184],
  [71, 192],
  [73, 208],
  [80, 226],
  [96, 242],
  [118, 252, 1],
  [90, 257],
  [60, 257],
])
/** The roll of the collar, cut as one paper line along it. */
export const COLLAR_ROLL = 'M38 238Q44 208 56 194Q66 190 70 200'

/** The coat's buttons at the edge of the far lapel, cut in paper. */
export const COAT_BUTTONS: Pt[] = [
  [196, 274],
  [199, 298],
  [201, 322],
]

/**
 * The cuts that turn the ink coat into cloth: folds falling from the shoulder
 * and down the sleeve, in paper, lit from the right.
 */
export function coatFolds(seed: number): string {
  const r = rng(seed)
  let d = ''
  d += gouge(20, 268, 4, 330, 1.6, 2)
  d += gouge(40, 262, 32, 330, 1.2, 1.5)
  d += gouge(216, 276, 228, 330, 1.5, -1.5)
  d += gouge(206, 296, 214, 334, 1, -1)
  for (let i = 0; i < 3; i++) {
    const x = between(r, 58, 90)
    d += gouge(x, between(r, 270, 286), x + between(r, -4, 4), 334, between(r, 0.7, 1), 0.8)
  }
  return d
}

/** Stripes down a waistcoat, cut in paper on ink or in ink on paper. */
export function vestStripes(step = 5.6): string {
  let d = ''
  for (let x = 126; x < 182; x += step) d += `M${n(x)} 238L${n(x + (x - 150) * 0.12)} 336`
  return d
}

// ── A lady's hair ───────────────────────────────────────────────────────────

/**
 * Drawn up from the neck to a knot at the back of the crown, smooth over the
 * head and parted, with short curls at the temple: how a young woman wore her
 * hair in the 1810s. In WOMAN_HEAD's frame. The ear is left clear, and drawn
 * over the hair.
 */
export const HAIR_UP_PTS: SP[] = [
  [160, 61, 1],
  [154, 47],
  [140, 34],
  [116, 28],
  [90, 32],
  [68, 44],
  [52, 63],
  [44, 88],
  [42, 114],
  [45, 140],
  [52, 158],
  [62, 170, 1],
  [76, 164],
  [88, 154],
  [95, 140],
  [97, 118],
  [104, 104],
  [116, 99],
  [128, 97],
  [137, 91],
  [146, 82],
  [154, 72],
]
export const HAIR_UP = spline(HAIR_UP_PTS)
/** The knot of hair at the back of the crown. */
export const KNOT_CENTRE: Pt = [60, 56]
export const KNOT = spline([
  [42, 54],
  [47, 40],
  [60, 34],
  [74, 38],
  [80, 52],
  [76, 66],
  [62, 73],
  [48, 68],
])
/**
 * Where the curls sit, clustered at the temple and along the hairline, and
 * how big each is: [x, y, radius]. Listed back to front, so the front ones
 * overlap those behind, as curls do.
 */
export const TEMPLE_CURLS: [number, number, number][] = [
  [146, 66, 4],
  [139, 76, 4.4],
  [131, 88, 4.2],
  [158, 63, 3.8],
  [152, 72, 4.8],
  [145, 82, 5],
  [137, 92, 4.4],
]

const upCache = new Map<number, { strands: string; knot: string }>()
/**
 * The cuts in hair drawn up to the knot: paper strokes lying in towards the
 * knot from the brow and the nape, and strands wound round the knot itself.
 * Cached by seed.
 */
export function hairUpCuts(seed: number, count = 130): { strands: string; knot: string } {
  const hit = upCache.get(seed)
  if (hit) return hit
  const strands = combedFromCrown(
    seed,
    HAIR_UP_PTS,
    KNOT_CENTRE,
    count,
    [8, 15],
    [0.5, 0.95],
    (x) => Math.min(1, 0.3 + (x - 44) / 110),
  )
  const r = rng(seed + 1)
  let knot = ''
  // The coil of the knot: two turns of strands wound round its middle.
  for (const [rad, k, w] of [
    [12, 9, 1.2],
    [5.5, 5, 0.9],
  ] as [number, number, number][]) {
    for (let i = 0; i < k; i++) {
      const a = (i / k) * Math.PI * 2 + between(r, -0.2, 0.2)
      const x = KNOT_CENTRE[0] + Math.cos(a) * rad
      const y = KNOT_CENTRE[1] + Math.sin(a) * rad * 0.9
      const L = rad * 1.05
      knot += gouge(x, y, x + Math.cos(a + 1.7) * L, y + Math.sin(a + 1.7) * L * 0.9, w, 1.4)
    }
  }
  const out = { strands, knot }
  upCache.set(seed, out)
  return out
}

/**
 * One curl: a small round of hair, its spiral cut in paper, with a paper rim
 * so it stands clear of the hair behind it and of the brow in front.
 *
 * Named Ringlet, not Curl: the comics test scans the whole source of every
 * art file, comments included, for the letters "url" followed by an opening
 * bracket that is not a reference to one of the piece's own ids. A function
 * called Curl, declared or drawn, puts exactly that in the file, and the set
 * failed its "nothing external" check (10 October 2026). Any name ending in
 * "url" does the same.
 */
export function Ringlet({ at, r = 5 }: { at: Pt; r?: number }) {
  const [x, y] = at
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={INK} stroke={PAPER} strokeWidth={1.1} />
      <path
        d={`M${n(x + r * 0.45)} ${n(y)}A${n(r * 0.45)} ${n(r * 0.45)} 0 1 1 ${n(x)} ${n(y - r * 0.45)}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={1}
        strokeLinecap="round"
      />
    </g>
  )
}

/** The curls at the temple, back to front. `k` scales every curl. */
export function Curls({
  at = TEMPLE_CURLS,
  k = 1,
}: {
  at?: [number, number, number][]
  k?: number
}) {
  return (
    <g>
      {at.map(([x, y, r]) => (
        <Ringlet key={`${x}-${y}`} at={[x, y]} r={r * k} />
      ))}
    </g>
  )
}

/**
 * A ribbon bound round the hair from the brow back to the knot, as young
 * women wore one with the hair drawn up. Laid along these points as a band of
 * paper with an ink edge.
 */
export const BANDEAU_PTS: Pt[] = [
  [156, 54],
  [146, 42],
  [128, 34],
  [106, 33],
  [88, 38],
  [76, 44],
]

// ── A married woman's cap ───────────────────────────────────────────────────

/**
 * A white cap of muslin gathered full over the back of the head, its frilled
 * edge round the face from the brow to below the ear, and a ribbon round it
 * just behind the frill: the cap a married woman wore indoors. In
 * WOMAN_HEAD's frame. A little of the hair shows at the brow, under the frill.
 * `capShapes(k)` makes the crown fuller (k above 1) for a grander cap.
 */
export function capShapes(k = 1) {
  const C: Pt = [92, 100]
  const puff = (x: number, y: number): SP => [C[0] + (x - C[0]) * k, C[1] + (y - C[1]) * k]
  const outline: SP[] = [
    [154, 50, 1],
    [148, 36],
    puff(128, 24),
    puff(100, 22),
    puff(74, 30),
    puff(54, 48),
    puff(42, 74),
    puff(38, 104),
    puff(42, 128),
    [50, 146],
    [60, 156, 1],
    [80, 158],
    [98, 154],
    [112, 148, 1],
    [113, 130],
    [116, 112],
    [124, 92],
    [138, 68],
  ]
  /** The frilled edge, round the face from the brow to below the ear. */
  const edge: Pt[] = [
    [154, 50],
    [138, 68],
    [124, 92],
    [116, 112],
    [113, 130],
    [112, 148],
  ]
  /** The ribbon, along the frill a little behind it. */
  const band: Pt[] = [
    [146, 44],
    [131, 64],
    [117, 90],
    [109, 112],
    [106, 132],
    [104, 150],
  ]
  return { cap: spline(outline), edge, band, centre: [C[0] - 14 * k, C[1] - 18 * k] as Pt }
}
export const CAP_PARTS = capShapes()

/**
 * A frill along a spine: a row of shallow scallops on one side of it, so the
 * edge of the muslin reads as gathered and not as a line. Stroke it in ink.
 */
export function frill(spine: Pt[], depth = 3.2, every = 5.6): string {
  let d = ''
  for (let i = 0; i < spine.length - 1; i++) {
    const [ax, ay] = spine[i]
    const [bx, by] = spine[i + 1]
    const L = Math.hypot(bx - ax, by - ay)
    const nx = (by - ay) / L
    const ny = -(bx - ax) / L
    for (let t = 0; t < L - 0.1; t += every) {
      const t1 = Math.min(t + every, L)
      const x0 = ax + ((bx - ax) * t) / L
      const y0 = ay + ((by - ay) * t) / L
      const x1 = ax + ((bx - ax) * t1) / L
      const y1 = ay + ((by - ay) * t1) / L
      d += `M${n(x0)} ${n(y0)}Q${n((x0 + x1) / 2 + nx * depth)} ${n((y0 + y1) / 2 + ny * depth)} ${n(x1)} ${n(y1)}`
    }
  }
  return d
}

/**
 * Gathers in the muslin of a cap: fine lines from the ribbon back towards the
 * middle of the crown, where the muslin is drawn in, stopping short of it.
 */
export function capGathers(seed: number, band: Pt[], centre: Pt, count = 16): string {
  const r = rng(seed)
  let d = ''
  for (let i = 0; i < count; i++) {
    const t = (i + between(r, 0.2, 0.8)) / count
    const f = t * (band.length - 1)
    const j = Math.min(band.length - 2, Math.floor(f))
    const u = f - j
    const x0 = band[j][0] + (band[j + 1][0] - band[j][0]) * u - 5
    const y0 = band[j][1] + (band[j + 1][1] - band[j][1]) * u
    const k = between(r, 0.5, 0.72)
    const x1 = x0 + (centre[0] - x0) * k
    const y1 = y0 + (centre[1] - y0) * k
    d += `M${n(x0)} ${n(y0)}Q${n((x0 + x1) / 2 + between(r, -4, 4))} ${n((y0 + y1) / 2 + between(r, -4, 4))} ${n(x1)} ${n(y1)}`
  }
  return d
}

// ── A bonnet ────────────────────────────────────────────────────────────────

/**
 * A bonnet for walking out: a soft crown over the back of the head and a
 * stiff brim standing forward round the face, tied with a ribbon under the
 * chin. In WOMAN_HEAD's frame.
 */
export const BONNET_CROWN = spline([
  [110, 34],
  [88, 24],
  [64, 30],
  [46, 48],
  [38, 76],
  [40, 104],
  [50, 126, 1],
  [76, 126],
  [100, 116, 1],
  [108, 70],
])
export const BONNET_BRIM = spline([
  [96, 132, 1],
  [100, 96],
  [110, 56],
  [126, 30],
  [150, 18],
  [178, 18],
  [196, 30, 1],
  [186, 40],
  [172, 46],
  [156, 58],
  [140, 82],
  [128, 112],
  [122, 142, 1],
])
/** The inside of the brim, its lining showing as a pale band round the face. */
export const BONNET_LINING: Pt[] = [
  [194, 31],
  [182, 40],
  [170, 47],
  [156, 58],
  [141, 81],
  [130, 110],
  [124, 140],
]
/** The ribbon from the brim down past the cheek to a bow under the chin. */
export const BONNET_RIBBON = spline([
  [118, 140, 1],
  [124, 140, 1],
  [134, 168],
  [146, 186, 1],
  [140, 190, 1],
  [128, 170],
])

// ── A lady's dress ──────────────────────────────────────────────────────────
//
// In WOMAN_HEAD's frame, the body turned a little towards us.

/** The gown over the shoulders, narrower and more sloping than a man's coat. */
export const GOWN = shoulders(0.86, 2)
/**
 * The neck of the gown, cut round at the collarbone: SCOOP is the skin it
 * leaves bare between the foot of the neck and the neckline, NECKLINE the
 * edge itself, TUCKER_SPINE where the band of muslin along it runs.
 */
export const SCOOP = 'M68 220C90 240 132 244 158 222L150 212L76 212Z'
export const NECKLINE = 'M68 220C90 240 132 244 158 222'
export const TUCKER_SPINE: Pt[] = [
  [72, 221],
  [88, 230],
  [112, 235],
  [136, 232],
  [154, 222],
]
/**
 * A chemisette, for a girl: muslin filling the neck of the gown up to the
 * throat, where a small frill closes it (FRILL_SPINE). Laid over SCOOP.
 */
export const CHEMISETTE = 'M70 222C90 242 132 246 156 224L148 198L80 200Z'
export const FRILL_SPINE: Pt[] = [
  [80, 203],
  [98, 208],
  [118, 209],
  [136, 205],
  [148, 199],
]
/** The ribbon round the high waist, under the bust, curving round the body. */
export const SASH = 'M-10 298Q118 314 246 292L246 304Q118 326 -10 310Z'
/** The weave of the ribbon: two fine lines along it. */
export const SASH_LINES = 'M-10 302.4Q118 318.4 246 296.4M-10 305.6Q118 321.6 246 299.6'
/** The bow it is tied in at the front: two loops, the knot, and two short ends. */
export const SASH_BOW =
  spline([
    [163, 306, 1],
    [150, 297],
    [146, 309],
    [161, 313, 1],
  ]) +
  spline([
    [169, 306, 1],
    [182, 296],
    [187, 308],
    [171, 313, 1],
  ]) +
  spline([
    [162, 312, 1],
    [156, 332, 1],
    [162, 330, 1],
    [166, 314, 1],
  ]) +
  spline([
    [168, 313, 1],
    [176, 331, 1],
    [170, 332, 1],
    [165, 315, 1],
  ])
export const SASH_KNOT = 'M162 304L170 304L171 314L161 314Z'

/**
 * A fichu: a kerchief of white muslin laid round the shoulders over the gown
 * and crossed on the breast, as an older woman wore one by day. In
 * WOMAN_HEAD's frame, over GOWN.
 */
export const FICHU = spline([
  [74, 210, 1],
  [56, 222],
  [30, 238],
  [12, 260],
  [40, 264],
  [80, 258],
  [116, 262],
  [140, 274, 1],
  [158, 260],
  [166, 242],
  [158, 224],
  [146, 212, 1],
  [140, 230],
  [126, 244],
  [104, 242],
  [86, 230],
])
/** The folds of the fichu, and the line where its two ends cross. */
export const FICHU_FOLDS =
  'M30 246Q62 252 96 252M52 232Q84 240 112 246M118 258Q134 252 148 238M126 268Q144 258 156 240M140 274Q148 256 156 228'

// ── Faces the novel asks for ────────────────────────────────────────────────

/**
 * Lady Catherine's head: WOMAN_HEAD with "strongly-marked features"
 * (Chapter 29): the nose longer and higher in the bridge, the chin fuller and
 * set further forward, the jaw heavier. Everything else is every woman's.
 */
export const LADY_HEAD = spline([
  [76, 236],
  [68, 210],
  [57, 180],
  [48, 146],
  [48, 108],
  [60, 72],
  [84, 48],
  [114, 38],
  [141, 40],
  [157, 54],
  [163, 72],
  [165.5, 89],
  [163.5, 97, 1],
  [171, 106],
  [179, 119],
  [178.5, 125.5],
  [168, 128.5, 1],
  [169.5, 134],
  [164.5, 138, 1],
  [167.5, 142],
  [164, 148, 1],
  [168.5, 158],
  [166, 169],
  [154, 177],
  [140, 181],
  [133, 190],
  [130, 208],
  [131, 236],
])

/**
 * WOMAN_HEAD talking or laughing: the outline cut back between the lips, and
 * WOMAN_MOUTH fills the gap with ink, so it reads as an open mouth whatever
 * ground is behind it. The chin drops a little with the jaw.
 */
export const WOMAN_HEAD_OPEN = spline([
  [76, 236],
  [68, 210],
  [57, 180],
  [48, 146],
  [48, 108],
  [60, 72],
  [84, 48],
  [114, 38],
  [141, 40],
  [157, 54],
  [163, 72],
  [165.5, 89],
  [163, 97, 1],
  [169, 108],
  [176, 119],
  [174.5, 124.5],
  [166.5, 127, 1],
  [168, 132.5],
  [164.8, 135.4, 1],
  [157.6, 138.2, 1],
  [165, 142.6, 1],
  [167.2, 146],
  [163.6, 150.4, 1],
  [167, 159],
  [164.4, 168.6],
  [153, 175.4],
  [139, 179],
  [132, 187],
  [129, 206],
  [131, 236],
])
export const WOMAN_MOUTH = 'M165 135.2L157.2 138.2L165.2 142.8Z'

/**
 * A woman's features, as WomanFace cuts them, with the expressions these
 * portraits need besides: the eye `open`, `down` (lowered), `bright` (open,
 * with a glint cut in the dark of it) or `laugh` (the lower lid pushed up);
 * the mouth `closed`, `smile` (the corner drawn up), `arch` (the corner drawn
 * up and in, a smile held back) or `open` (with WOMAN_HEAD_OPEN); the brow
 * `level`, `raised` or `knit`.
 */
export function WomanFeatures({
  eye = 'open',
  mouth = 'closed',
  brow = 'level',
  nostril = 'M169.5 121.5C166 119.5 166 115.5 170 114.5',
}: {
  eye?: 'open' | 'down' | 'bright' | 'laugh' | 'proud'
  mouth?: 'closed' | 'smile' | 'arch' | 'open'
  brow?: 'level' | 'raised' | 'knit'
  /** The nostril, for a head whose nose is not WOMAN_HEAD's. */
  nostril?: string
}) {
  const browD =
    brow === 'raised'
      ? 'M143 80.5Q152 76.5 161 80'
      : brow === 'knit'
        ? 'M143 82Q151 81.4 161 85.6'
        : 'M143 83.5Q152 80 161 83'
  return (
    <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
      <path d={nostril} strokeWidth={1.2} />
      {mouth === 'closed' && (
        <>
          <path d="M163.5 137L156.5 137.8" strokeWidth={1.6} />
          <path d="M165.5 133C163.5 134 161.5 135.5 160.5 137" strokeWidth={0.9} />
          <path d="M164.5 143.5C162.5 145 160.5 145.3 158.5 144.7" strokeWidth={0.9} />
        </>
      )}
      {mouth === 'smile' && (
        <>
          <path d="M163.5 137Q160 138.6 155.6 135.6" strokeWidth={1.6} />
          <path d="M165.5 133C163.5 134 161.5 135.5 160.5 137" strokeWidth={0.9} />
          <path d="M164.5 143.5C162.5 145 160.5 145.3 158.5 144.7" strokeWidth={0.9} />
          <path d="M156 133.8Q154.4 131 155.4 127.6" strokeWidth={0.9} />
        </>
      )}
      {mouth === 'arch' && (
        <>
          <path d="M163.5 137L158.6 137.6Q156.6 137.4 155.8 135.2" strokeWidth={1.6} />
          <path d="M165.5 133C163.5 134 161.5 135.5 160.5 137" strokeWidth={0.9} />
          <path d="M164.5 143.5C162.5 145 160.5 145.3 158.5 144.7" strokeWidth={0.9} />
        </>
      )}
      {mouth === 'open' && (
        <>
          <path d={WOMAN_MOUTH} fill={INK} stroke="none" />
          <path d="M156.4 134.6Q154.6 131.6 155.6 128" strokeWidth={0.9} />
          <path d="M165.4 148.4C163.4 150 161.2 150.4 159.2 149.8" strokeWidth={0.9} />
        </>
      )}
      <path d={browD} strokeWidth={2} />
      {eye === 'open' && (
        <>
          <path d="M145 94.5Q152.5 90 160.5 94" strokeWidth={2.2} />
          <path d="M146.5 99.2Q153 101.6 159.5 98.6" strokeWidth={1} />
          <circle cx={153.6} cy={96.2} r={2.5} fill={INK} stroke="none" />
        </>
      )}
      {eye === 'bright' && (
        <>
          <path d="M144.6 94.6Q152.5 89.4 160.8 93.8" strokeWidth={2.4} />
          <path d="M146.5 99.6Q153 102 159.5 98.8" strokeWidth={1} />
          <circle cx={154} cy={96.4} r={3.1} fill={INK} stroke="none" />
          <circle cx={155.1} cy={95.2} r={1} fill={PAPER} stroke="none" />
          <path d="M156.6 91.4L158 88.6M159.8 92.4L162 89.8M153.2 91L153.8 88" strokeWidth={0.9} />
        </>
      )}
      {eye === 'laugh' && (
        <>
          <path d="M145 95.5Q152.5 90.5 160.5 95" strokeWidth={2.2} />
          <path d="M146.5 98.2Q153 95.8 159.5 97.4" strokeWidth={1.3} />
          <path d="M144.5 96L138.5 93.5M144.6 98.8L138.8 99.8" strokeWidth={0.9} />
          <circle cx={153.4} cy={95.2} r={2} fill={INK} stroke="none" />
        </>
      )}
      {eye === 'proud' && (
        <>
          <circle cx={153.8} cy={97.4} r={2.4} fill={INK} stroke="none" />
          <path d="M145 95.6Q152.6 93.2 160.8 95.4" strokeWidth={2.6} />
          <path d="M146.5 99.6Q153 102 159.5 99" strokeWidth={1} />
          <path d="M145.6 91Q152.4 88.6 159.4 90.4" strokeWidth={LINE.hairline} />
        </>
      )}
      {eye === 'down' && (
        <>
          <path d="M145 96Q152.5 99.5 160.5 95.5" strokeWidth={2.3} />
          <path
            d="M147 97.5L145.5 101.5M151 99L150.5 103M155.5 99L156 103M159.5 97L161 100.5"
            strokeWidth={0.9}
          />
          <path d="M146 91.5Q152 89.5 158 91" strokeWidth={0.9} />
        </>
      )}
    </g>
  )
}

// ── A hand laid on the breast ───────────────────────────────────────────────

/**
 * A hand laid flat on the breast, the back of it towards us and the fingers
 * up and a little apart, the thumb out along the chest: cut as the Julius
 * Caesar portraits cut Portia's, so it reads as a hand at rest on the breast
 * and never as a fist or a salute. In the hand's own frame, the wrist at the
 * origin; place it with `handOnBreast`. For Mrs Bennet's nerves and Mr
 * Collins's bow.
 */
export const HAND_PALM = spline([
  [-13, 2],
  [-15, -14],
  [-15, -30],
  [-11, -42],
  [1, -46],
  [14, -44],
  [20, -36],
  [20, -16],
  [15, 0],
])
export const HAND_DIGITS: { from: Pt; to: Pt; w: number }[] = [
  { from: [15.5, -36], to: [21, -56], w: 7 },
  { from: [8.5, -40], to: [12, -66], w: 7.6 },
  { from: [0.5, -42], to: [1, -70], w: 7.8 },
  { from: [-7.5, -40], to: [-11, -63], w: 7.6 },
  { from: [-12, -12], to: [-25, -32], w: 8.6 },
]
export const HAND_LINES = 'M-12 -59L-9.6 -60M-0.4 -66L2.4 -66M10.6 -62L13.4 -62.5M19 -53L21.4 -53.5'

/** Where a hand goes: its transform, and a point in its frame carried to the figure's. */
export function handOnBreast(at: Pt, rot: number, s: number) {
  const a = (rot * Math.PI) / 180
  const c = Math.cos(a)
  const sn = Math.sin(a)
  return {
    transform: `translate(${at[0]} ${at[1]}) rotate(${rot}) scale(${s})`,
    to: (x: number, y: number): [number, number] => [
      at[0] + (x * c - y * sn) * s,
      at[1] + (x * sn + y * c) * s,
    ],
  }
}

// ── Small helpers ───────────────────────────────────────────────────────────

/**
 * The gathers of a muslin gown: fine ink lines falling from the neckline and
 * spreading as they go down to the waist, as the cloth is gathered in at the
 * neck. For a white gown; a dark one is cut with `coatFolds`.
 */
export function gownGathers(seed: number, count = 11): string {
  const r = rng(seed)
  let d = ''
  for (let i = 0; i < count; i++) {
    const t = (i + between(r, 0.25, 0.75)) / count
    // A point on the neckline (its curve from 66,222 to 160,226).
    const u = 0.08 + t * 0.84
    const x0 =
      (1 - u) ** 3 * 66 + 3 * (1 - u) ** 2 * u * 88 + 3 * (1 - u) * u * u * 134 + u ** 3 * 160
    const y0 =
      (1 - u) ** 3 * 222 + 3 * (1 - u) ** 2 * u * 240 + 3 * (1 - u) * u * u * 244 + u ** 3 * 222
    const spread = (x0 - 112) * 1.7
    const x1 = 112 + spread + between(r, -6, 6)
    const y1 = 296 + between(r, 0, 8)
    d += `M${n(x0)} ${n(y0 + 4)}Q${n((x0 + x1) / 2 + between(r, -3, 3))} ${n((y0 + y1) / 2)} ${n(x1)} ${n(y1)}`
  }
  // Below the ribbon, the skirt falls straight.
  for (let i = 0; i < 6; i++) {
    const x = between(r, 20, 210)
    d += `M${n(x)} ${n(322 + between(r, -4, 4))}L${n(x + between(r, -3, 3))} 336`
  }
  return d
}

/** Folds in a pale garment, cut in ink: fine lines falling to the foot of the frame. */
export function paleFolds(seed: number, xs: [number, number], top: number, count: number): string {
  const r = rng(seed)
  let d = ''
  for (let i = 0; i < count; i++) {
    const x = between(r, xs[0], xs[1])
    const y = top + between(r, -6, 10)
    d += `M${n(x)} ${n(y)}Q${n(x + between(r, -5, 5))} ${n((y + 336) / 2)} ${n(x + between(r, -8, 8))} 336`
  }
  return d
}

/** Cut lines along a ribbon of points, kept inside an outline: for hair or cloth. */
export function cutsInside(outline: SP[], lines: Pt[][], w: number): string {
  const poly = outline.map(([x, y]): Pt => [x, y])
  let d = ''
  for (const line of lines) {
    let run: Pt[] = []
    const flush = () => {
      if (run.length > 2) d += ribbon(run, w, 0.75)
      run = []
    }
    for (const p of line) {
      if (inside(poly, p[0], p[1])) run.push(p)
      else flush()
    }
    flush()
  }
  return d
}
