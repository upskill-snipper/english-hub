import type { CSSProperties, ReactNode } from 'react'

import { gouge, n, ribbon } from '@/components/comics/linocut/carve'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'

/**
 * The animals and people of Animal Farm, cut from the text's own descriptions
 * and shared by every panel, so that a student meets the same animal from
 * chapter to chapter. Drawn first for the panels of moments 1 to 5 (Chapters
 * 1 and 2); every other Animal Farm panel draws its recurring characters from
 * here. A change to any shape below changes every panel that uses it: preview
 * them all before changing one.
 *
 * A figure is cut as the reference panel cuts Fred
 * (src/data/comics/a-christmas-carol/counting-house.tsx): a halo round every
 * part, so it reads as one shape with a single carved outline, then the parts,
 * then the cuts of its features. An ink animal has a paper halo and paper
 * cuts; a white animal (`tone="paper"`) has an ink halo and ink cuts, as the
 * pilot cuts a lit figure.
 *
 * EVERY ANIMAL IS DRAWN IN ITS OWN FRAME, facing right, standing on y = 0,
 * and placed with `at` (where its feet meet the ground), `s` (its scale) and
 * `face` (-1 to face left). The halo and the cuts keep their weight in the
 * drawing's units whatever the scale, so a small animal is not left without
 * an outline. At the same `s` the animals stand in the sizes the text gives
 * them: a horse about twice the height of a pig, Boxer bigger than both other
 * horses, a donkey, a goat and the dogs smaller in turn. A person is drawn in
 * the same frame, so a man at the same `s` stands a little below a horse's
 * withers.
 *
 * WHAT THE TEXT SAYS, and so what is drawn (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - OLD MAJOR: "the prize Middle White boar"; "twelve years old and had lately
 *   grown rather stout, but he was still a majestic-looking pig, with a wise
 *   and benevolent appearance in spite of the fact that his tushes had never
 *   been cut" (Chapter 1). So he is a white pig, cut in paper with an ink halo,
 *   bigger and heavier than the others, with a calm eye and his uncut tushes
 *   curving up from his jaw.
 * - NAPOLEON: "a large, rather fierce-looking Berkshire boar, the only
 *   Berkshire on the farm" (Chapter 2). So he is a big black pig, the breed
 *   the text names, with a heavy brow cut low over a small eye and a mouth
 *   that turns down.
 * - SNOWBALL: "a more vivacious pig than Napoleon, quicker in speech and more
 *   inventive" (Chapter 2). The text gives him no colour or breed, only "the
 *   only Berkshire" beside him, so he is cut pale, in PAPER like Major, which
 *   keeps him apart from Napoleon at a glance (the portraits in
 *   ../portraits/common.tsx cut him the same way). He is younger and lighter
 *   than Major, with no tushes; his eye is open and his ears are up.
 * - SQUEALER: "a small fat pig named Squealer, with very round cheeks,
 *   twinkling eyes, nimble movements, and a shrill voice"; "skipping from
 *   side to side and whisking his tail" (Chapter 2). Pale as well, and the
 *   smallest and roundest of the three: a round cheek cut in the jowl, a
 *   twinkle beside his eye, and his tail drawn mid-whisk.
 * - THE OTHER PIGS: "porkers" (Chapter 2), plain black pigs, smaller.
 * - BOXER: "an enormous beast, nearly eighteen hands high"; "A white stripe
 *   down his nose"; "vast hairy hoofs" (Chapter 1); "his great iron-shod
 *   hoofs" (Chapter 4). So he is the biggest animal in any panel, black, with
 *   a paper blaze from brow to nose, and long hair falling over his hoofs.
 * - CLOVER: "a stout motherly mare approaching middle life, who had never
 *   quite got her figure back after her fourth foal" (Chapter 1). No colour is
 *   given, so she is cut dark but hatched, a softer tone than Boxer's solid
 *   black, and with no stripe, so the two cart-horses are never confused (as
 *   the portraits cut her). Her belly hangs deeper and rounder than his, and
 *   she has the same hairy hoofs.
 * - MOLLIE: "the foolish, pretty white mare who drew Mr. Jones's trap"; she
 *   came "chewing at a lump of sugar" and "began flirting her white mane,
 *   hoping to draw attention to the red ribbons it was plaited with"
 *   (Chapter 1). So she is the slimmest horse, cut in paper, her mane in
 *   plaits tied with ribbons in the spot colour.
 * - BENJAMIN: "the donkey"; "the oldest animal on the farm, and the worst
 *   tempered"; "Alone among the animals on the farm he never laughed"
 *   (Chapter 1); "a little greyer about the muzzle" (Chapter 10). So he is
 *   dark, his long ears are up, his head hangs a little, his muzzle is pale
 *   and grizzled (as in the portraits), and his mouth is one straight cut.
 * - MURIEL: "the white goat" (Chapter 1): paper, with a beard and short horns.
 * - THE DOGS: "Bluebell, Jessie, and Pincher" (Chapter 1), not described, so
 *   plain black farm dogs with pricked ears. NAPOLEON'S DOGS, from Chapter 5,
 *   are "enormous", "as fierce-looking as wolves", in "brass-studded collars":
 *   see Wolfdog.
 * - MOSES: "the tame raven" (Chapter 1): a black bird with a heavy beak.
 * - The cat, the hens, the pigeons, the sheep, the cows and the brood of
 *   ducklings are not described beyond what they are, so they are drawn
 *   plainly, as English farm animals.
 * - MR JONES is never described in person: he is "too drunk to remember",
 *   he "lurched across the yard" (Chapter 1), and he lounges "in his Windsor
 *   chair in the kitchen" (Chapter 2). So he is a plain countryman of the
 *   period in shirt and waistcoat, bare-headed, and nothing about his face is
 *   exaggerated. His men wear caps, so he can be told from them.
 *
 * Nothing is taken from a film, a cartoon or a stage production of the book.
 */

export type P = [number, number]

/**
 * One part of a figure: a filled shape, or with `w` a limb drawn as a stroke
 * of that width. `sep` cuts an edge that wide round this part before it is
 * filled, to lift a leg off the body behind it. `t` places the part.
 */
export type Part = { d: string; w?: number; sep?: number; t?: string }

export type Tone = 'ink' | 'paper'

/** Where an animal stands, how big it is and which way it faces. */
export type Placing = {
  at: P
  s?: number
  face?: 1 | -1
  className?: string
  style?: CSSProperties
}

const r3 = (v: number) => Math.round(v * 1000) / 1000

export const place = (at: P, s = 1, face: 1 | -1 = 1) =>
  `translate(${n(at[0])} ${n(at[1])}) scale(${r3(face * s)} ${r3(s)})`

/**
 * A figure cut from the block. `halo` and every width in `cuts` are in the
 * figure's own units; pass `halo={1.8 / s}` to keep a constant outline.
 */
export function Cut({
  parts,
  cuts,
  cutStrokes,
  halo = 1.8,
  tone = 'ink',
  transform,
  className,
  style,
  children,
  under,
}: {
  parts: Part[]
  cuts?: string
  /** Fine lines cut in the edge colour: [path, width]. */
  cutStrokes?: [string, number][]
  halo?: number
  tone?: Tone
  transform?: string
  className?: string
  style?: CSSProperties
  children?: ReactNode
  /** Drawn inside the figure's frame before anything else: a shadow, a straw bed. */
  under?: ReactNode
}) {
  const fg = tone === 'ink' ? INK : PAPER
  const edge = tone === 'ink' ? PAPER : INK
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
      {under}
      {halo > 0 && parts.map((p, i) => shape(p, edge, halo * 2, `h${i}`))}
      {parts.map((p, i) => [
        p.sep ? shape(p, edge, p.sep * 2, `s${i}`) : null,
        shape(p, fg, 0, `f${i}`),
      ])}
      {cuts && <path d={cuts} fill={edge} />}
      {cutStrokes?.map(([d, w]) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke={edge}
          strokeWidth={w}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      {children}
    </g>
  )
}

/** Widths that stay the same in the drawing whatever the figure's scale. */
export const k = (s: number) => (w: number) => Math.round((w / s) * 100) / 100

// ── PIGS ────────────────────────────────────────────────────────────────────
// About 120 long and 60 high standing, snout at the right.

/** A standing pig's body and head, ground at y = 0. */
export const PIG_BODY =
  'M-44 -46C-28 -57 -2 -59 18 -53C29 -50 37 -44 44 -37C48 -33 53 -31.5 58 -31L61 -30.2L61.6 -20.6L57.6 -19C52 -18.5 47 -17.5 43 -18C38 -14 31 -12 25 -12C18 -10 8 -10 -4 -10C-20 -10 -34 -11 -44 -16C-53 -22 -55 -36 -44 -46Z'
/** Squealer: shorter, fatter, the cheek pushed out round. */
export const SQUEALER_BODY =
  'M-36 -44C-24 -58 0 -60 16 -54C27 -50 34 -44 40 -38C44 -34 50 -32 55 -31.4L58 -30.6L58.6 -21.4L54.8 -19.8C50 -19 46 -18.6 44 -18C41 -12 34 -9 26 -9C18 -7 6 -7 -6 -8C-22 -9 -34 -12 -42 -18C-48 -26 -46 -38 -36 -44Z'
export const PIG_EAR = 'M20 -51C23 -60 28 -67 36 -72C37 -63 35.5 -55 32 -48Z'
export const PIG_FAR_EAR = 'M13 -53C15 -61 19 -67 25 -71C26.5 -64 26 -57 24 -51Z'
/** A curl of tail, stroked. */
export const PIG_TAIL = 'M-50 -38C-57 -41 -61 -35 -57 -31C-53 -28 -49 -32 -52 -35'
/** Squealer's tail, whisked out straight behind him. */
export const SQUEALER_TAIL = 'M-44 -36C-52 -40 -58 -46 -60 -54C-58 -58 -54 -57 -55 -53'
const PIG_LEGS_STAND = ['M-27 -14L-27 -4', 'M24 -14L26 -4', 'M-36 -16L-37 -4', 'M14 -14L15 -4']
/** Mid-skip: the near legs off the ground, the far ones planted. */
const PIG_LEGS_SKIP = ['M-27 -14L-31 -4', 'M24 -14L30 -4', 'M-36 -16L-44 -10', 'M14 -14L22 -9']

/** Features cut into a pig's head and body, in the pig's frame. */
export function pigCuts(s: number, kind: PigKind) {
  const w = k(s)
  // The eye is never thinner than a sliver of the pig's own size, so a pig
  // drawn large (Major in "Major's warnings") still has an eye, not a scratch.
  const eyeW = Math.max(w(0.95), 1.15)
  // WHERE THE EYE IS (26 September 2026). It was first set on the line of the
  // forehead itself, half outside the head, so the halo swallowed it and no
  // pig had a visible eye. It sits well inside the face now, under the brow.
  const eye =
    kind === 'napoleon'
      ? gouge(36, -34.4, 40.8, -34.8, Math.max(w(0.6), 0.8))
      : kind === 'squealer'
        ? gouge(33.6, -33.6, 38.8, -34.2, Math.max(w(0.9), 1.1))
        : gouge(35, -35, 41, -35.6, eyeW)
  // Major's age: a fold of jowl and two wrinkles across the top of the snout.
  const age =
    kind === 'major'
      ? gouge(29, -35, 37, -19, w(0.5), w(2.2)) +
        gouge(48.4, -31.4, 49.4, -25.4, w(0.4), w(0.8)) +
        gouge(52, -31, 52.8, -26, w(0.4), w(0.6))
      : ''
  // Napoleon's heavy brow, cut low and slanting down to the snout: "rather
  // fierce-looking". The others have a light brow.
  const brow =
    kind === 'napoleon'
      ? gouge(30.6, -40.4, 44, -36.6, w(1.25), w(-0.4))
      : gouge(33.4, -39.4, 42.4, -38.8, w(0.45), w(-0.6))
  const body =
    gouge(16, -46, 13, -18, w(0.6), w(-2.2)) +
    gouge(-30, -48, -38, -20, w(0.6), w(2.6)) +
    gouge(27, -54.5, 33, -67, w(0.5))
  const mouth =
    kind === 'squealer'
      ? gouge(44, -21.4, 52, -24, w(0.5))
      : kind === 'napoleon'
        ? ''
        : gouge(45, -21.6, 54, -22, w(0.45))
  return eye + brow + body + mouth + age
}

/**
 * The dark tips of a white pig's trotters: over the round end of each leg
 * stroke, a cap the leg's width, following the leg's last direction.
 */
function trotters(legs: Part[]) {
  let d = ''
  for (const l of legs) {
    if (!l.w) continue
    const v = (l.d.match(/-?\d+(\.\d+)?/g) ?? []).map(Number)
    if (v.length < 4) continue
    const [x0, y0, x1, y1] = v.slice(-4)
    const L = Math.hypot(x1 - x0, y1 - y0) || 1
    const ux = (x1 - x0) / L
    const uy = (y1 - y0) / L
    const r = l.w / 2
    const bx = x1 - ux * r * 0.6
    const by = y1 - uy * r * 0.6
    d += `M${n(bx - uy * r)} ${n(by + ux * r)}L${n(x1 - uy * r)} ${n(y1 + ux * r)}A${n(r)} ${n(r)} 0 0 0 ${n(x1 + uy * r)} ${n(y1 - ux * r)}L${n(bx + uy * r)} ${n(by - ux * r)}Z`
  }
  return d
}

/**
 * Fine strokes: the flat of the snout; Squealer's round cheek and the
 * twinkle by his eye; the down-turned corner of Napoleon's mouth.
 */
export function pigStrokes(s: number, kind: PigKind): [string, number][] {
  const w = k(s)
  const out: [string, number][] = [['M58.8 -29.4Q57.2 -25 58.8 -20.6', w(0.8)]]
  if (kind === 'squealer') {
    out.push(['M26 -31C24 -24 27 -17 34 -16', w(0.9)])
    out.push(['M40 -37.4L41 -39.2M41.6 -35.4L43.4 -36.2', w(0.6)])
  }
  if (kind === 'napoleon') out.push(['M44 -20.4L53 -21.6M44 -20.4L41.6 -17.6', w(0.9)])
  return out
}

export type PigKind = 'plain' | 'major' | 'napoleon' | 'snowball' | 'squealer'
export type PigPose = 'stand' | 'lie' | 'lie-trotter' | 'sit' | 'skip'

/**
 * A pig. `kind` picks who: Major is pale and big, with his tushes; Napoleon
 * is the one black pig, with a heavy brow; Snowball is pale; Squealer is pale,
 * small and round; `plain` is any other pig, black. `pose`: standing, lying on
 * the straw, lying with one trotter raised ("Major raised his trotter for
 * silence"), sitting up on his haunches, or mid-skip. `mouthOpen` for a pig
 * speaking or singing.
 */
export function Pig({
  at,
  s = 1,
  face = 1,
  kind = 'plain',
  pose = 'stand',
  className,
  style,
  mouthOpen = false,
}: Placing & { kind?: PigKind; pose?: PigPose; mouthOpen?: boolean }) {
  const w = k(s)
  const body = kind === 'squealer' ? SQUEALER_BODY : PIG_BODY
  const lying = pose === 'lie' || pose === 'lie-trotter'
  // Lying: the whole pig sinks so its belly is on the ground; to raise a
  // trotter it lifts its forequarters a little on the other. Sitting: it
  // tips back on its haunches, rump on the ground, head up.
  const t =
    pose === 'lie'
      ? 'translate(0 10)'
      : pose === 'lie-trotter'
        ? 'translate(0 10) rotate(-9 -50 -12)'
        : pose === 'sit'
          ? 'translate(0 14) rotate(-22 -46 -14)'
          : undefined
  const legs: Part[] = []
  if (pose === 'stand') PIG_LEGS_STAND.forEach((d) => legs.push({ d, w: 8 }))
  else if (pose === 'skip') PIG_LEGS_SKIP.forEach((d) => legs.push({ d, w: 8 }))
  else if (pose === 'sit')
    legs.push(
      { d: 'M-40 -5L-26 -3', w: 7.5 },
      { d: 'M12 -24L13 -4', w: 8 },
      { d: 'M20 -24L22 -4', w: 8 },
    )
  else if (pose === 'lie-trotter') legs.push({ d: 'M22 -6L34 -2', w: 7 })
  else legs.push({ d: 'M22 -2L34 -2', w: 7 }, { d: 'M16 -3L30 -3', w: 7 })
  const tail = kind === 'squealer' || pose === 'skip' ? SQUEALER_TAIL : PIG_TAIL
  const parts: Part[] = [
    ...legs,
    { d: PIG_FAR_EAR, t },
    { d: tail, w: 2.6, t },
    { d: body, t },
    { d: PIG_EAR, t },
  ]
  if (pose === 'lie-trotter') {
    // The near foreleg lifted off the straw and held out under the snout
    // (its cloven hoof is drawn below). A leg raised straight up read as a
    // stick across his face, and one bent up under the chin tangled with the
    // jaw, so it reaches forward, clear of both.
    parts.push({ d: 'M20 -4L30 -1', w: 7 })
    parts.push({ d: 'M10 -5C16 -6 22 -6 28 -6C33 -7 38 -8 42 -10', w: 8.5, sep: w(1.6) })
  }
  const tone: Tone = kind === 'plain' || kind === 'napoleon' ? 'ink' : 'paper'
  const edge = tone === 'ink' ? PAPER : INK
  return (
    <g transform={place(at, s, face)} className={className} style={style}>
      <Cut parts={parts} halo={w(1.8)} tone={tone}>
        <g transform={t}>
          <path d={pigCuts(s, kind)} fill={edge} />
          {pigStrokes(s, kind).map(([d, sw]) => (
            <path key={d} d={d} fill="none" stroke={edge} strokeWidth={sw} strokeLinecap="round" />
          ))}
          {mouthOpen && (
            <path
              d="M44 -19.4L55 -20.6L50 -15.8C47.6 -15.4 45.4 -16.6 44 -19.4Z"
              fill={INK}
              stroke={edge}
              strokeWidth={w(0.9)}
              strokeLinejoin="round"
            />
          )}
          {kind === 'major' && (
            // "his tushes had never been cut": a tusk curving up from the jaw,
            // drawn over the open mouth so it is never hidden by it
            <path
              d="M45.6 -18.4C46.8 -22.8 47.8 -26.6 47.2 -31C50.4 -27.2 51.6 -22.8 50 -18Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth={w(0.9)}
              strokeLinejoin="round"
            />
          )}
        </g>
        {pose === 'lie-trotter' && (
          // the raised trotter's cloven hoof, dark, split by one cut
          <path
            d="M40.5 -13L45.8 -15.7L48.8 -9.7L43.5 -7Z"
            fill={INK}
            stroke={tone === 'paper' ? INK : PAPER}
            strokeWidth={w(0.9)}
          />
        )}
        {pose === 'lie-trotter' && (
          <path d="M42 -10L47.3 -12.7" stroke={PAPER} strokeWidth={w(0.8)} />
        )}
        {tone === 'paper' && (
          // a white pig's trotters are dark at the tip
          <path d={trotters(legs)} fill={INK} />
        )}
      </Cut>
    </g>
  )
}

// ── HORSES ──────────────────────────────────────────────────────────────────
// Withers about 112 above the ground, the muzzle at the right.

export const HORSE_BARREL =
  'M-66 -104C-50 -114 -20 -112 6 -108C24 -105 34 -110 42 -108C56 -104 66 -94 67 -80C68 -70 63 -63 56 -61C30 -56 -10 -56 -36 -60C-52 -62 -63 -67 -71 -76C-77 -86 -76 -98 -66 -104Z'
/** Clover, "never quite got her figure back": the belly hangs lower and rounder. */
export const MARE_BARREL =
  'M-66 -104C-50 -113 -20 -111 6 -107C24 -104 34 -109 42 -107C56 -103 66 -94 67 -80C68 -70 63 -62 55 -59C30 -50 -10 -50 -36 -56C-52 -60 -63 -66 -71 -76C-77 -86 -76 -98 -66 -104Z'
/** The neck, arched from the withers to the poll, its underside down to the chest. */
export const HORSE_NECK = 'M28 -106C36 -128 52 -154 72 -168L80 -160L60 -150C58 -128 62 -100 66 -74Z'
/**
 * The head in its own frame (HEAD_FRAME places it): the poll at the origin,
 * the face running down the x axis to the muzzle, the round jowl below. A
 * cart-horse's head is heavy; it is drawn a little large, so the face reads
 * on a phone.
 */
export const HORSE_HEAD =
  'M-4 -7C6 -11 18 -10 28 -8.5C40 -7 50 -7 56 -5C62 -3 64 3 62 7C60 11 55 12.5 51 11.5C48 13.5 45 14 42 13.5C36 13 31 15 27 19C21 26 8 27 2 21C-2 17 -5 10 -5 3C-5 -2 -5 -5 -4 -7Z'
/** The ears, pricked, in the head's frame. */
export const HORSE_EARS =
  'M-3 -6C-8 -12 -12 -17 -15 -23C-8 -20 -1 -14 5 -9ZM-6 -3C-12 -8 -17 -12 -21 -17C-14 -15 -7 -11 -2 -6Z'
/** Where the head sits on the neck: the poll, its tilt below level, its scale. */
export const HEAD_FRAME = 'translate(72 -158) rotate(56) scale(0.84)'
/** The tail, hanging from the croup. */
export const HORSE_TAIL_SHAPE =
  'M-68 -102C-80 -96 -87 -80 -87 -62C-87 -48 -85 -38 -83 -28L-79 -33L-77 -26L-73 -32L-70 -27C-71 -46 -70 -72 -63 -95Z'
/** The tail of a horse lying down, falling from the croup and lying along the ground. */
export const HORSE_TAIL_LYING =
  'M-68 -48C-78 -44 -83 -32 -84 -18C-84 -10 -81 -5 -76 -3L-67 -3C-70 -9 -70 -17 -68 -26C-66 -36 -63 -42 -60 -46Z'
export const HORSE_TAIL: P[] = [
  [-70, -98],
  [-80, -88],
  [-86, -68],
  [-86, -48],
  [-82, -30],
]
/** A foot and the long hair that falls over it: "vast hairy hoofs". */
export const hoof = (x: number) =>
  `M${x - 8} 0L${x + 9} 0C${x + 8} -6 ${x + 6} -12 ${x + 5} -19L${x - 5} -19C${x - 6} -12 ${x - 8} -6 ${x - 8} 0Z`
export const featherCuts = (x: number, w: number) =>
  gouge(x - 3, -14, x - 6, -2, w) +
  gouge(x + 1, -15, x + 1, -2, w) +
  gouge(x + 4, -14, x + 6.5, -2, w)

/** Standing: forelegs straight, the hind legs angled back to the hock. */
const HORSE_LEGS_STAND = [
  { d: 'M-40 -64C-44 -52 -50 -44 -52 -38L-48 -14', x: -48 },
  { d: 'M42 -64L40 -36L42 -14', x: 42 },
  { d: 'M-52 -66C-56 -54 -62 -46 -64 -38L-58 -14', x: -58 },
  { d: 'M55 -66L57 -36L57 -14', x: 57 },
]

/** Diagonal hatching over a horse's whole frame, `gap` apart. */
const hatch = (gap: number) => {
  let d = ''
  for (let x = -170; x < 130; x += gap) d += `M${n(x)} 20L${n(x + 124)} -190`
  return d
}

/** `plain`: any other cart-horse, such as the two that draw the knacker's van (Chapter 9). */
export type HorseWho = 'boxer' | 'clover' | 'mollie' | 'plain'
export type HorsePose = 'stand' | 'lie' | 'lie-guard' | 'gallop' | 'charge'

/**
 * A cart-horse, or Mollie. Boxer is the biggest, heaviest in the leg, and
 * carries the blaze ("A white stripe down his nose"); Clover is hatched;
 * Mollie is cut in paper, her mane plaited and tied with red ribbons, and
 * `sugar` puts the lump in her mouth. `pose`: standing, lying down with the
 * legs folded, lying with one foreleg laid out in front ("Clover made a sort
 * of wall round them with her great foreleg"), galloping, or charging at a
 * flying gallop with every hoof off the ground (`charge`). `headDown`
 * turns the head and neck about the withers, in degrees: positive to lower
 * it, negative to raise it.
 *
 * `uid` keeps Clover's clip unique to her piece. Without it the clip's id is
 * built from her pose, so two Clovers in one plate share a clip only when
 * they would draw the same one.
 */
export function Horse({
  at,
  s = 1,
  face = 1,
  who = 'boxer',
  pose = 'stand',
  sugar = false,
  headDown = 0,
  uid,
  className,
  style,
}: Placing & {
  who?: HorseWho
  pose?: HorsePose
  sugar?: boolean
  headDown?: number
  uid?: string
}) {
  const w = k(s)
  const lying = pose === 'lie' || pose === 'lie-guard'
  const bodyT = lying ? 'translate(0 54)' : undefined
  // the head and neck turn about the withers: down to graze or listen, up to charge
  const neckT =
    [bodyT, headDown ? `rotate(${headDown} 40 -104)` : ''].filter(Boolean).join(' ') || undefined
  const headT = [neckT, HEAD_FRAME].filter(Boolean).join(' ')
  const tone: Tone = who === 'mollie' ? 'paper' : 'ink'
  const edge = tone === 'ink' ? PAPER : INK
  const barrel = who === 'clover' ? MARE_BARREL : HORSE_BARREL
  const legW = who === 'boxer' ? 13 : who === 'mollie' ? 9.5 : 11.5
  const parts: Part[] = []
  const hoofs: number[] = []
  if (pose === 'stand') {
    for (const l of HORSE_LEGS_STAND) {
      parts.push({ d: l.d, w: legW })
      parts.push({ d: hoof(l.x) })
      hoofs.push(l.x)
    }
  } else if (pose === 'charge') {
    // the flying gallop of the old prints: forelegs stretched out in front,
    // hind legs stretched out behind, every hoof off the ground
    const legs = [
      { d: 'M-40 -66L-60 -46L-80 -28', f: 'translate(-80 -28) rotate(51)' },
      { d: 'M44 -66L64 -46L84 -30', f: 'translate(84 -30) rotate(-48)' },
      { d: 'M-52 -68L-72 -48L-94 -30', f: 'translate(-94 -30) rotate(51)' },
      { d: 'M56 -68L74 -48L94 -30', f: 'translate(94 -30) rotate(-48)' },
    ]
    for (const l of legs) {
      parts.push({ d: l.d, w: legW, sep: w(1) })
      parts.push({ d: hoof(0), t: `${l.f} translate(0 15) scale(0.8)`, sep: w(1) })
    }
  } else if (pose === 'gallop') {
    // the moment of a gallop when the forelegs reach and the hind legs drive
    const legs = [
      { d: 'M-40 -64C-50 -54 -62 -48 -74 -42', f: 'translate(-78 -40) rotate(64)' },
      { d: 'M42 -64L60 -54L72 -60', f: 'translate(78 -58) rotate(-96)' },
      { d: 'M-52 -66C-60 -54 -68 -44 -74 -34L-68 -20', f: 'translate(-66 -8) rotate(-12)' },
      { d: 'M55 -66L70 -48L66 -28', f: 'translate(64 -14) rotate(10)' },
    ]
    for (const l of legs) {
      parts.push({ d: l.d, w: legW })
      parts.push({ d: hoof(0), t: `${l.f} scale(0.9)` })
    }
  } else {
    // lying: the hind leg folded under, a foreleg folded or laid out in front
    parts.push({ d: 'M-54 -14C-42 -4 -22 -2 0 -3', w: legW, sep: w(1.2) })
    parts.push({ d: hoof(0), t: 'translate(4 0) rotate(-90 0 -8) scale(0.8)' })
    if (pose === 'lie-guard') {
      parts.push({ d: 'M52 -8C66 -4 84 -3 104 -5', w: legW, sep: w(1.2) })
      parts.push({ d: hoof(0), t: 'translate(110 1) rotate(-90 0 -8) scale(0.8)' })
    } else {
      parts.push({ d: 'M50 -8L66 -5L80 -5', w: legW, sep: w(1.2) })
      parts.push({ d: hoof(0), t: 'translate(86 1) rotate(-90 0 -8) scale(0.8)' })
    }
  }
  parts.push(lying ? { d: HORSE_TAIL_LYING } : { d: HORSE_TAIL_SHAPE, t: bodyT })
  parts.push({ d: barrel, t: bodyT })
  parts.push({ d: HORSE_NECK, t: neckT })
  parts.push({ d: HORSE_EARS, t: headT })
  parts.push({ d: HORSE_HEAD, t: headT })
  const bodyCuts =
    gouge(48, -100, 52, -68, w(0.6), w(3)) +
    gouge(-50, -104, -64, -76, w(0.6), w(-3)) +
    gouge(-76, -86, -80, -40, w(0.4), w(-1)) +
    gouge(-72, -80, -74, -36, w(0.4), w(-0.6)) +
    (who === 'clover' ? gouge(-30, -60, 30, -56, w(0.5), w(2.4)) : '')
  const neckCuts =
    who === 'mollie'
      ? ''
      : // the mane, cut as strands along the crest
        gouge(33, -110, 42, -128, w(0.45)) +
        gouge(40, -118, 51, -140, w(0.45)) +
        gouge(48, -128, 60, -152, w(0.45)) +
        gouge(57, -140, 68, -160, w(0.4))
  const hs = s * 0.84
  const hw = (v: number) => Math.round((v / hs) * 100) / 100
  const headCuts =
    gouge(15, 2.6, 22.5, 1.8, hw(0.95)) +
    gouge(55, 1, 58.6, 4.4, hw(0.6), hw(-0.6)) +
    gouge(50.5, 9.4, 60, 8.2, hw(0.4)) +
    gouge(4, 2, 26, 17.5, hw(0.5), hw(-4))
  const clip = `${uid ?? 'af'}-clover-${pose}-${headDown}`
  return (
    <g transform={place(at, s, face)} className={className} style={style}>
      <Cut parts={parts} halo={w(1.8)} tone={tone}>
        {who === 'clover' && (
          // her softer tone: diagonal cuts clipped to her body, neck and head
          <>
            <defs>
              <clipPath id={clip}>
                <path d={barrel} transform={bodyT} />
                <path d={HORSE_NECK} transform={neckT} />
                <path d={HORSE_HEAD} transform={headT} />
              </clipPath>
            </defs>
            <path
              d={hatch(Math.round((3.4 / s) * 10) / 10)}
              clipPath={`url(#${clip})`}
              stroke={PAPER}
              strokeWidth={w(0.85)}
              fill="none"
            />
          </>
        )}
        {pose === 'stand' && (
          <path d={hoofs.map((x) => featherCuts(x, w(0.4))).join('')} fill={edge} />
        )}
        <path d={bodyCuts} fill={edge} transform={bodyT} />
        {neckCuts && <path d={neckCuts} fill={edge} transform={neckT} />}
        <g transform={headT}>
          <path d={headCuts} fill={edge} />
          {who === 'boxer' && (
            // "A white stripe down his nose", cut a few units inside the
            // profile. It was first cut on the profile's edge, where a blaze
            // is in life, and there it merged with the carved outline and
            // vanished at panel size (26 September 2026).
            <path
              d={ribbon(
                [
                  [4, -3.6],
                  [16, -4.6],
                  [30, -3.8],
                  [44, -2.8],
                  [56, -0.6],
                ],
                7,
                0.4,
              )}
              fill={PAPER}
            />
          )}
          {who === 'mollie' && sugar && (
            // "chewing at a lump of sugar"
            <rect
              x={58}
              y={6}
              width={8.5}
              height={8.5}
              fill={PAPER}
              stroke={INK}
              strokeWidth={hw(1)}
              transform="rotate(-50 62 10)"
            />
          )}
        </g>
        {who === 'mollie' && (
          // her white mane in plaits, "the red ribbons it was plaited with"
          <g transform={neckT}>
            {(
              [
                [34, -113, -62],
                [42, -126, -58],
                [51, -139, -52],
                [61, -151, -46],
              ] as [number, number, number][]
            ).map(([x, y, a]) => (
              <g key={x} transform={`translate(${x} ${y}) rotate(${a})`}>
                <ellipse
                  cx={0}
                  cy={-3}
                  rx={4.2}
                  ry={3}
                  fill={PAPER}
                  stroke={INK}
                  strokeWidth={w(0.9)}
                />
                <path d="M0 -1L-4.4 3.6L-4.6 -2.2ZM0 -1L4.4 3.6L4.6 -2.2Z" fill={RED} />
              </g>
            ))}
          </g>
        )}
      </Cut>
    </g>
  )
}

// ── BENJAMIN, MURIEL, THE DOGS, THE CAT ─────────────────────────────────────

/** Benjamin the donkey: withers about 70, a heavy head and long ears. */
export const DONKEY = {
  body: 'M-44 -66C-30 -72 0 -72 20 -70C32 -68 40 -62 40 -52C40 -44 34 -40 28 -40C10 -36 -16 -36 -30 -40C-40 -42 -48 -50 -48 -58C-48 -62 -46 -64 -44 -66Z',
  neck: 'M16 -70C22 -82 30 -92 38 -98L52 -92C48 -80 42 -64 36 -46Z',
  head: 'M35 -101C41 -107 50 -106 54 -100C58 -93 62 -87 65 -81C67 -76 64 -71 59 -72C55 -72 52 -75 49 -79C45 -84 39 -88 33 -93Z',
  ears: 'M40 -102C37 -114 34 -124 30 -134C38 -127 44 -116 47 -104ZM46 -103C48 -115 51 -124 56 -132C56 -121 54 -111 51 -101Z',
  tail: 'M-47 -60C-52 -50 -54 -40 -53 -28',
  tuft: 'M-56 -30L-50 -30L-51 -20L-55 -20Z',
  legs: [
    'M-32 -42L-33 -3',
    'M24 -42L23 -3',
    'M-40 -44C-42 -32 -38 -24 -36 -18L-38 -3',
    'M32 -44L33 -3',
  ],
}

/**
 * Benjamin. `lying` folds his legs under him and lowers him to the ground
 * (Chapter 7, "with one accord they all lay down"; Chapter 8, "flung
 * themselves flat on their bellies"); `headDown` bows his head about the
 * withers, in degrees ("Benjamin nodded his muzzle", Chapter 8). Both added
 * for moments 21 to 25; with neither he is exactly as first drawn.
 */
export function Benjamin({
  at,
  s = 1,
  face = 1,
  lying = false,
  headDown = 0,
  className,
  style,
}: Placing & { lying?: boolean; headDown?: number }) {
  const w = k(s)
  const bodyT = lying ? 'translate(0 32)' : undefined
  const headT =
    [bodyT, headDown ? `rotate(${headDown} 22 -70)` : undefined].filter(Boolean).join(' ') ||
    undefined
  const legs: Part[] = lying
    ? [
        { d: 'M-40 -12C-32 -2 -16 -2 -4 -3', w: 6.5, sep: w(1.2) },
        { d: 'M24 -6L40 -3L50 -3', w: 6.5, sep: w(1.2) },
      ]
    : DONKEY.legs.map((d) => ({ d, w: 6.5 }))
  const parts: Part[] = [
    ...(lying ? [] : legs),
    { d: DONKEY.tail, w: 2.4, t: bodyT },
    { d: DONKEY.tuft, t: bodyT },
    { d: DONKEY.body, t: bodyT },
    { d: DONKEY.neck, t: headT },
    { d: DONKEY.head, t: headT },
    { d: DONKEY.ears, t: headT },
    ...(lying ? legs : []),
  ]
  // "a little greyer about the muzzle": the muzzle cut pale, grizzled with ink
  const muzzle =
    'M56 -87C59 -85 63 -83 65 -80C66 -76 63 -72 59 -72C56 -73 54 -76 52 -79C53 -82 54 -85 56 -87Z'
  const headCuts =
    gouge(45, -95, 50.5, -94, w(0.85)) +
    gouge(38, -109, 34, -126, w(0.6)) +
    gouge(49, -106, 53, -124, w(0.5))
  return (
    <Cut
      parts={parts}
      halo={w(1.8)}
      transform={place(at, s, face)}
      className={className}
      style={style}
    >
      <path d={gouge(24, -66, 26, -46, w(0.5), w(2))} fill={PAPER} transform={headT} />
      <g transform={headT}>
        <path d={headCuts} fill={PAPER} />
        <path d={muzzle} fill={PAPER} />
        <path
          d="M55.6 -83L57.6 -82M56.6 -78.6L59.4 -79.4M60.6 -84.4L61.6 -81.6M62.6 -79L64.2 -80"
          stroke={INK}
          strokeWidth={w(0.6)}
          fill="none"
        />
        {/* "Alone among the animals on the farm he never laughed": one straight cut */}
        <path d={gouge(57.6, -74.8, 64, -75.6, w(0.5))} fill={INK} />
      </g>
    </Cut>
  )
}

/** Muriel, "the white goat": withers about 50, a beard and short back-swept horns. */
export const GOAT = {
  body: 'M-30 -52C-16 -58 8 -58 20 -54C28 -50 30 -42 26 -36C12 -32 -12 -32 -24 -36C-32 -38 -36 -46 -30 -52Z',
  head: 'M16 -56C20 -66 26 -74 32 -78C38 -80 42 -76 44 -70C46 -64 49 -60 47 -56C43 -54 39 -57 35 -60C31 -56 27 -48 24 -40Z',
  beard: 'M40 -57L43 -46L36 -52Z',
  horns: 'M31 -79C27 -86 21 -89 15 -88',
  ear: 'M28 -72L18 -70L27 -67Z',
  tail: 'M-29 -52L-35 -61',
  legs: ['M-14 -36L-13 -2', 'M14 -38L13 -2', 'M-20 -38L-21 -2', 'M20 -38L21 -2'],
}

/**
 * Muriel. `lying` folds her legs under her and lowers her to the ground
 * (Chapter 7, "with one accord they all lay down"). Added for moments 21 to
 * 25; without it she is exactly as first drawn. `headDown` bows her head
 * about the top of her neck, in degrees, as Benjamin's does: added on 27
 * September 2026 for "The Battle of the Windmill", where every animal but
 * Napoleon "flung themselves flat on their bellies and hid their faces" and
 * she alone was left lying with her head up.
 */
export function Muriel({
  at,
  s = 1,
  face = 1,
  lying = false,
  headDown = 0,
  className,
  style,
}: Placing & { lying?: boolean; headDown?: number }) {
  const w = k(s)
  const t = lying ? 'translate(0 30)' : undefined
  const headT =
    [t, headDown ? `rotate(${headDown} 20 -50)` : undefined].filter(Boolean).join(' ') || undefined
  const folded: Part[] = [
    { d: 'M-26 -8C-20 -2 -10 -2 -2 -3', w: 4.4, sep: w(1.1) },
    { d: 'M14 -5L26 -3L32 -3', w: 4.4, sep: w(1.1) },
  ]
  const parts: Part[] = [
    ...(lying ? [] : GOAT.legs.map((d) => ({ d, w: 4.4 }))),
    { d: GOAT.tail, w: 3.4, t },
    { d: GOAT.horns, w: 3.2, t: headT },
    { d: GOAT.body, t },
    { d: GOAT.head, t: headT },
    { d: GOAT.beard, t: headT },
    { d: GOAT.ear, t: headT },
    ...(lying ? folded : []),
  ]
  const cuts = gouge(34, -71, 39, -71.5, w(0.8)) + gouge(43, -58.6, 47, -58.2, w(0.4))
  return (
    <Cut
      parts={parts}
      halo={w(1.8)}
      tone="paper"
      transform={place(at, s, face)}
      className={className}
      style={style}
    >
      <path d={cuts} fill={INK} transform={headT} />
    </Cut>
  )
}

/** A farm dog: Bluebell, Jessie or Pincher. Withers about 34. */
export const DOG = {
  body: 'M-30 -34C-16 -40 6 -40 16 -37C22 -35 24 -29 22 -23C10 -19 -14 -19 -24 -22C-32 -24 -34 -30 -30 -34Z',
  head: 'M12 -36C11 -46 17 -54 26 -54C32 -54 36 -50 37 -46L46 -43.4C48.4 -42 48 -38 44.6 -37L37 -35.6C32 -32 25 -30 19 -29Z',
  ear: 'M20 -51.6L18.6 -62L27 -53.6ZM25.4 -53.4L27 -63L31.8 -52Z',
  tail: 'M-30 -31C-38 -30 -44 -34 -47 -42',
  legs: ['M-22 -24L-24 -2', 'M14 -26L15 -2', 'M-16 -24L-15 -2', 'M8 -26L6 -2'],
}
const DOG_LIE = {
  body: 'M-30 -16C-18 -24 6 -24 16 -20C22 -18 24 -12 22 -6C10 -2 -14 -2 -24 -4C-32 -6 -34 -12 -30 -16Z',
  legs: ['M18 -4L34 -2', 'M-24 -6L-12 -2'],
}

export function Dog({
  at,
  s = 1,
  face = 1,
  lying = false,
  className,
  style,
}: Placing & { lying?: boolean }) {
  const w = k(s)
  const t = lying ? 'translate(0 17)' : undefined
  const parts: Part[] = [
    ...(lying ? DOG_LIE.legs : DOG.legs).map((d) => ({ d, w: 4.6 })),
    { d: DOG.tail, w: 6, t },
    { d: lying ? DOG_LIE.body : DOG.body },
    { d: DOG.head, t },
    { d: DOG.ear, t },
  ]
  return (
    <Cut
      parts={parts}
      halo={w(1.8)}
      transform={place(at, s, face)}
      className={className}
      style={style}
    >
      <path
        d={gouge(28, -46.6, 32.6, -47, w(0.8)) + gouge(38, -38.6, 44, -39, w(0.4))}
        fill={PAPER}
        transform={t}
      />
    </Cut>
  )
}

/**
 * One of Napoleon's dogs, from Chapter 5 on: "nine enormous dogs wearing
 * brass-studded collars", "huge dogs, and as fierce-looking as wolves", the
 * puppies he took from Jessie and Bluebell and "reared privately". So they are
 * not the farm dogs above: withers about 50, taller than a pig, lean and deep
 * in the chest, with a long muzzle, pricked ears and a slanted brow over the
 * eye. The print has no brass, so the collar is ink and its studs are cut as
 * bright points. `pose`: standing, or bounding with all four feet off the
 * ground ("came bounding into the barn"). The jaw is drawn shut in both: the
 * text's "snapping jaws" are left to the words, and nothing in them is red.
 * Drawn first for "Snowball is driven out"; draw every one of the nine from
 * here.
 */
const WOLFDOG = {
  body: 'M-36 -50C-22 -57 4 -57 22 -55C33 -53 39 -46 39 -37C39 -29 34 -25 27 -26C17 -30 4 -34 -10 -34C-22 -34 -32 -36 -38 -41C-42 -45 -40 -48 -36 -50Z',
  neck: 'M16 -55C22 -63 29 -70 35 -74L47 -64C44 -54 39 -44 32 -34Z',
  head: 'M33 -73C37 -80 45 -83 51 -79C54 -77 56 -74 59 -72L71 -67.5C73.5 -65 72 -61.5 68 -61.5L59 -60.5C55 -58 49 -57 43 -59C38 -61 34 -66 33 -73Z',
  jaw: 'M44 -59L68 -61.5L66 -57.5C60 -56 52 -55.5 46 -56Z',
  ears: 'M38.5 -77.5L37 -91L46.5 -80.5ZM34.5 -75L30.5 -87L39.5 -78Z',
  tail: 'M-37 -48L-46 -46L-53 -40L-57 -31',
  collar: 'M28.2 -57.8L38.4 -67.2L41.8 -63.2L31.6 -53.4Z',
  studs: [
    [31.4, -56.2],
    [34.4, -59],
    [37.4, -61.9],
    [40, -64.4],
  ] as P[],
  legs: {
    stand: ['M-24 -38L-30 -20L-26 -2', 'M26 -30L27 -2', 'M-16 -36L-20 -20L-15 -2', 'M18 -32L17 -2'],
    bound: [
      'M-24 -40L-44 -30L-60 -30',
      'M26 -30L46 -22L60 -24',
      'M-18 -38L-34 -22L-50 -14',
      'M18 -32L36 -14L50 -10',
    ],
  },
}

export function Wolfdog({
  at,
  s = 1,
  face = 1,
  pose = 'stand',
  className,
  style,
}: Placing & { pose?: 'stand' | 'bound' }) {
  const w = k(s)
  const lift = pose === 'bound' ? 'translate(0 -16) rotate(-6 0 -40)' : undefined
  const legs: Part[] = WOLFDOG.legs[pose].map((d) => ({ d, w: 6, t: lift }))
  const parts: Part[] = [
    legs[0],
    legs[1],
    { d: WOLFDOG.tail, w: 7, t: lift },
    { d: WOLFDOG.body, t: lift },
    { d: WOLFDOG.neck, t: lift },
    { d: WOLFDOG.head, t: lift },
    { d: WOLFDOG.jaw, t: lift },
    { d: WOLFDOG.ears, t: lift },
    legs[2],
    legs[3],
  ]
  return (
    <g transform={place(at, s, face)} className={className} style={style}>
      <Cut parts={parts} halo={w(1.8)}>
        <g transform={lift}>
          <path
            d={WOLFDOG.collar}
            fill={INK}
            stroke={PAPER}
            strokeWidth={w(0.9)}
            strokeLinejoin="round"
          />
          <g fill={PAPER}>
            {WOLFDOG.studs.map(([x, y]) => (
              <circle key={x} cx={x} cy={y} r={w(0.95)} />
            ))}
          </g>
          {/* the eye under a slanted brow, the line of the shut jaw, the hackles */}
          <path
            d={
              gouge(48, -73.6, 54.4, -72.2, w(0.8)) +
              gouge(47, -77, 56, -74.4, w(0.45), w(-0.5)) +
              gouge(45, -59.6, 64, -61.2, w(0.4)) +
              gouge(10, -53, 22, -42, w(0.5), w(1.4)) +
              gouge(-28, -50, -34, -38, w(0.5), w(-1.2))
            }
            fill={PAPER}
          />
        </g>
      </Cut>
    </g>
  )
}

/** The cat, sitting, "who looked round, as usual, for the warmest place". */
const CAT =
  'M-9 0C-13 -8 -11 -16 -5 -20C-3 -24 1 -26 5 -26L6 -32L10 -27L13 -27L16 -32L17 -25C19 -22 19 -18 15 -16C13 -12 13 -6 13 0Z'
export function Cat({ at, s = 1, face = 1 }: Placing) {
  const w = k(s)
  return (
    <Cut
      parts={[{ d: CAT }, { d: 'M-9 -1C-16 -1 -20 -4 -20 -9', w: 2.6 }]}
      cuts={gouge(10, -22, 13, -22, w(0.6))}
      halo={w(1.6)}
      transform={place(at, s, face)}
    />
  )
}

// ── BIRDS, SHEEP, COWS, DUCKLINGS ───────────────────────────────────────────

/** A hen roosting on a sill, about 20 high. */
export const HEN =
  'M-11 0C-15 -4 -15 -11 -10 -14C-6 -16 0 -15 3 -13C4 -17 5 -20 8 -21C11 -22 13 -20 13 -18L16.5 -16.4L13 -15.4C13 -12 12 -8 10 -5C7 -1 2 0 -4 0ZM-10 -12C-13 -17 -15 -21 -15 -26C-12 -23 -8 -19 -5 -14ZM7.6 -21.2L8.2 -24.4L9.8 -22.2L11 -24.6L11.8 -21.2Z'
export function Hen({ at, s = 1, face = 1 }: Placing) {
  const w = k(s)
  return (
    <Cut
      parts={[{ d: HEN }]}
      cuts={gouge(10, -18.6, 12, -18.8, w(0.55)) + gouge(-8, -9, 4, -6, w(0.45), w(1.2))}
      halo={w(1.4)}
      transform={place(at, s, face)}
    />
  )
}

/** A pigeon on a rafter, about 12 high. */
const PIGEON = 'M-9 -4C-9 -8 -4 -10 2 -9C3 -12 6 -13 8 -11L11 -10L8 -9C8 -5 4 -1 -2 -1L-13 -2Z'
export function Pigeon({ at, s = 1, face = 1 }: Placing) {
  const w = k(s)
  return <Cut parts={[{ d: PIGEON }]} halo={w(1.3)} transform={place(at, s, face)} />
}

/**
 * Moses, "the tame raven", perched, about 26 high, with the heavy beak of a
 * raven. `flying` spreads his wings.
 */
const RAVEN_PERCH =
  'M-18 -6C-16 -14 -8 -20 2 -20C6 -24 10 -26 14 -24L23 -22L14 -19C14 -12 10 -6 2 -3L-4 -2L-22 2Z'
const RAVEN_FLY =
  'M-22 2C-12 -2 -2 -3 6 -2C10 -5 14 -6 17 -4L26 -2L17 0C12 3 4 5 -6 5L-18 8L-26 12L-21 5Z' +
  'M-4 -1C-8 -10 -16 -20 -30 -26L-27 -22L-34 -21L-28 -17L-33 -14L-24 -12C-18 -8 -12 -3 -8 0Z' +
  'M2 -2C4 -12 2 -22 -4 -32L-4 -27L-9 -29L-6 -23L-10 -23L-6 -18C-4 -12 -3 -6 -2 -2Z'
export function Moses({
  at,
  s = 1,
  face = 1,
  flying = false,
  beakOpen = false,
  className,
  style,
}: Placing & { flying?: boolean; beakOpen?: boolean }) {
  const w = k(s)
  const d = flying ? RAVEN_FLY : RAVEN_PERCH
  const eyeY = flying ? -3.4 : -20.4
  return (
    <g transform={place(at, s, face)} className={className} style={style}>
      <Cut
        parts={[{ d }, ...(flying ? [] : [{ d: 'M-2 -3L-3 4M4 -4L4 4', w: 1.6 }])]}
        cuts={gouge(10, eyeY, 13, eyeY - 0.2, w(0.6))}
        halo={w(1.4)}
      >
        {beakOpen && (
          <path
            d={flying ? 'M17 -2.6L26 1L17 -0.4Z' : 'M15 -19.6L24 -16L15 -17.4Z'}
            fill={INK}
            stroke={PAPER}
            strokeWidth={w(0.9)}
          />
        )}
      </Cut>
    </g>
  )
}

/** A sheep lying in the straw: a pale fleece and a dark face. About 30 long. */
export const SHEEP_FLEECE =
  'M-20 0C-24 -6 -22 -14 -14 -16C-10 -21 -2 -21 2 -17C8 -21 16 -18 17 -11C21 -8 21 -2 17 0Z'
export const SHEEP_HEAD =
  'M12 -12C16 -17 24 -16 27 -10C29 -6 27 -3 22 -4C18 -4 14 -6 12 -8ZM15 -14L10 -17L14 -10Z'
export function Sheep({ at, s = 1, face = 1 }: Placing) {
  const w = k(s)
  return (
    <g transform={place(at, s, face)}>
      <Cut parts={[{ d: SHEEP_FLEECE }]} tone="paper" halo={w(1.6)}>
        <path
          d="M-16 -8C-14 -11 -10 -11 -8 -8M-4 -12C-2 -15 2 -15 4 -12M6 -7C8 -10 12 -10 14 -7M-10 -3C-8 -6 -4 -6 -2 -3"
          fill="none"
          stroke={INK}
          strokeWidth={w(0.8)}
        />
      </Cut>
      <Cut parts={[{ d: SHEEP_HEAD }]} halo={w(1.4)} cuts={gouge(20, -11.6, 23, -11.8, w(0.5))} />
    </g>
  )
}

/** A cow lying down, chewing the cud: horns, a long face. About 90 long. */
export const COW = {
  body: 'M-40 0C-45 -14 -36 -32 -14 -34C6 -36 24 -32 30 -22C34 -14 34 -5 30 0Z',
  head: 'M22 -28C28 -38 40 -41 48 -36L60 -22C62 -16 58 -12 52 -14C44 -16 36 -18 28 -16Z',
  horns: 'M36 -40C34 -47 30 -50 24 -50M42 -41C44 -48 48 -51 54 -51',
  ear: 'M36 -36L26 -34L34 -31Z',
  leg: 'M18 -3L40 -2',
}
export function Cow({ at, s = 1, face = 1 }: Placing) {
  const w = k(s)
  return (
    <Cut
      parts={[
        { d: COW.leg, w: 7 },
        { d: COW.horns, w: 3 },
        { d: COW.body },
        { d: COW.head },
        { d: COW.ear },
      ]}
      cuts={
        gouge(44, -33, 49, -32.5, w(0.8)) +
        gouge(-20, -30, -28, -6, w(0.55), w(-2.4)) +
        gouge(54, -19, 58, -17, w(0.5))
      }
      halo={w(1.8)}
      transform={place(at, s, face)}
    />
  )
}

/**
 * A duckling, "cheeping feebly": a pale round body with a stub of tail, a
 * round head on it and a flat beak, about 20 long. The first one was a single
 * blob with a point, and at panel size read as an egg.
 */
const DUCKLING =
  'M-6 0C-8.4 -2 -8 -5.6 -4.6 -6.4C-2.4 -7 0 -6.6 1.4 -5.6C1 -8 2.4 -10.6 5 -10.8C7.4 -11 8.8 -9.4 8.6 -7.6L12 -7.2C12.4 -6.2 11.6 -5.4 10.4 -5.4L8 -5.6C7.4 -4.6 6.4 -3.6 6 -2.4C5 -0.6 3 0 0 0ZM-6 -3L-9.6 -5L-7.4 -1.4Z'
export function Duckling({ at, s = 1, face = 1 }: Placing) {
  const w = k(s)
  return (
    <Cut
      parts={[{ d: DUCKLING }]}
      tone="paper"
      halo={w(1.2)}
      cuts={gouge(4.6, -8.6, 6.4, -8.8, Math.max(w(0.5), 0.5))}
      cutStrokes={[
        ['M8.4 -7.4L8.2 -5.6', w(0.6)],
        ['M-4 -3.4C-2 -1.6 1 -1.6 3 -3', w(0.5)],
      ]}
      transform={place(at, s, face)}
    />
  )
}

// ── PEOPLE ──────────────────────────────────────────────────────────────────

/**
 * A head in profile facing right, centred on (0, 0) in a box about 34 wide and
 * 42 high, as the Macbeth kit draws one. Scaled to a man's height below: a
 * man of 1.75 metres stands about 107 in the animals' frame.
 */
export const HEAD =
  'M-9 21C-10 15 -14 11 -15 3C-16 -9 -8 -19 2 -19C10 -19 14 -13 13.5 -7L14.5 -3L19 3.5C19.5 4.5 18.5 5 17 5L14 5.5L15 8L13.5 9.5L14.5 11.5L12.5 13C12 15.5 10 17 6.5 17L5.5 21Z'
export const HAIR_CUTS =
  gouge(7, -15.5, -12, -5, 0.6, 2.6) +
  gouge(10.5, -11, -13.5, 3, 0.55, 3) +
  gouge(-1, -18, -13, -10, 0.5, 1.4)
export const EYE_CUT = gouge(5.5, -2.6, 10.5, -3.6, 0.95)
/** A flat cloth cap, over HEAD, for Jones's men. */
export const CAP =
  'M-15 -6C-14 -18 -4 -22 6 -20C12 -19 16 -15 17 -11L25 -8C25 -6 22 -5 18 -5L-15 -3Z'

/** Where a man's head sits, in his frame (feet at 0). */
const HEAD_T = (at: P, rot = 0, facing: 1 | -1 = 1) =>
  `translate(${at[0]} ${at[1]}) rotate(${rot}) scale(${0.36 * facing} 0.36)`

export type ManPose = 'run' | 'run-look-back' | 'stand'

/**
 * Mr Jones or one of his men, in the animals' frame, facing right. `run`
 * leans into a long stride with the arms flung; `run-look-back` turns the
 * head to look over his shoulder at what is behind. Jones is bare-headed in
 * shirt and waistcoat; `cap` is one of his men, in a cap and jacket.
 */
export function Man({
  at,
  s = 1,
  face = 1,
  pose = 'run',
  cap = false,
  className,
  style,
}: Placing & { pose?: ManPose; cap?: boolean }) {
  const w = k(s)
  const running = pose !== 'stand'
  const back = pose === 'run-look-back'
  const headAt: P = running ? [14, -98] : [2, -99]
  const headT = HEAD_T(headAt, running ? 8 : 0, back ? -1 : 1)
  const torso = running
    ? 'M-4 -88C4 -92 14 -90 18 -84C22 -72 20 -60 14 -50C8 -46 -2 -46 -8 -50C-10 -62 -10 -76 -4 -88Z'
    : 'M-8 -88C-2 -91 8 -91 12 -88C14 -74 13 -60 11 -48C4 -46 -4 -46 -10 -48C-12 -60 -12 -76 -8 -88Z'
  const legs: Part[] = running
    ? [
        { d: 'M4 -50L-10 -28L-26 -18', w: 7.5 },
        { d: 'M8 -50L20 -30L16 -6', w: 7.5 },
      ]
    : [
        { d: 'M-5 -50L-6 -6', w: 7.5 },
        { d: 'M6 -50L7 -6', w: 7.5 },
      ]
  const boots: Part[] = running
    ? [{ d: 'M-32 -22L-24 -13L-30 -9L-36 -16Z' }, { d: 'M12 -8L26 -6L26 0L10 0Z' }]
    : [{ d: 'M-12 -8L0 -8L2 0L-14 0Z' }, { d: 'M2 -8L14 -8L16 0L0 0Z' }]
  const arms: Part[] = running
    ? [
        { d: 'M2 -84L-14 -72L-24 -78', w: 6.5, sep: w(1.2) },
        { d: 'M12 -84L26 -72L36 -80', w: 6.5, sep: w(1.2) },
      ]
    : [
        { d: 'M-6 -84L-10 -64L-10 -52', w: 6.5 },
        { d: 'M10 -84L14 -64L14 -52', w: 6.5 },
      ]
  const hands: Part[] = running
    ? [
        { d: 'M-24 -78m-3.4 0a3.4 3.4 0 1 0 6.8 0a3.4 3.4 0 1 0 -6.8 0' },
        { d: 'M36 -80m-3.4 0a3.4 3.4 0 1 0 6.8 0a3.4 3.4 0 1 0 -6.8 0' },
      ]
    : []
  const parts: Part[] = [
    legs[0],
    arms[0],
    ...hands.slice(0, 1),
    { d: torso },
    legs[1],
    ...boots,
    { d: HEAD, t: headT },
    ...(cap ? [{ d: CAP, t: headT }] : []),
    arms[1],
    ...hands.slice(1),
  ]
  return (
    <g transform={place(at, s, face)} className={className} style={style}>
      <Cut parts={parts} halo={w(1.8)}>
        <g transform={headT}>
          <path d={EYE_CUT + (cap ? '' : HAIR_CUTS)} fill={PAPER} />
        </g>
        {!cap && (
          // Jones in his shirt-sleeves: the waistcoat is the black, the shirt shows at the arms
          <path
            d={running ? 'M4 -84L-10 -74M14 -84L24 -74' : 'M-6 -82L-9 -66M10 -82L13 -66'}
            stroke={PAPER}
            strokeWidth={w(0.9)}
            fill="none"
          />
        )}
        {cap && <path d="M-2 -86L8 -58" stroke={PAPER} strokeWidth={w(0.7)} fill="none" />}
      </Cut>
    </g>
  )
}
