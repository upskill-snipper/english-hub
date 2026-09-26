import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Benjamin,
  Cut,
  Hen,
  Horse,
  Muriel,
  PIG_EAR,
  PIG_FAR_EAR,
  SQUEALER_BODY,
  SQUEALER_TAIL,
  Sheep,
  k,
  pigCuts,
  pigStrokes,
  place,
  type P,
  type Part,
} from './people'

/**
 * Chapter 9: "Squealer's story", the twenty-ninth moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "Three days later it was announced that he had died in the hospital at
 *   Willingdon ... Squealer came to announce the news to the others." So it
 *   is day, in the farmyard, and the others are gathered to hear him: Clover,
 *   Benjamin, Muriel, sheep and hens, all facing him. Where he speaks is not
 *   said; he is set on the farmhouse doorstep, the pigs' house, which puts
 *   the one pale figure against the dark door, where the eye goes first.
 * - "'It was the most affecting sight I have ever seen!' said Squealer,
 *   lifting his trotter and wiping away a tear." So Squealer sits up on his
 *   haunches with one trotter raised to his eye and a tear below it. The tear
 *   is cut in paper, never in red: a red drop on a face reads as blood. It
 *   comes last, after the rest of the print.
 * - Squealer is the kit's (./people.tsx): "a small fat pig ... with very round
 *   cheeks, twinkling eyes", cut pale. He is built here from the kit's own
 *   body, ears, tail, cuts and sitting tilt (its `sit` pose), with the near
 *   foreleg lifted instead of planted and the haunch folded under him.
 * - What he tells them is a lie the reader can see through and the animals
 *   cannot: "their last doubts disappeared". So the listeners stand quiet and
 *   still, and nothing in the picture contradicts him. The case of whisky the
 *   pigs buy that night is left to the words.
 *
 * The spot colour is the farmhouse roof, red as the text's farm roofs are
 * ("the red roofs of the farm buildings", Chapter 7), and nothing else. Nothing
 * is taken from a film, a cartoon or a stage production.
 *
 * Seed: 2901 (sky, brickwork and yard).
 */

const W = 860
const H = 340
/** The foot of the farmhouse wall, and the far edge of the yard. */
const FOOT = 252
const HOUSE = { x0: 404, x1: 872, eaves: 74 }

// ── SQUEALER, SITTING UP, WIPING AWAY A TEAR ────────────────────────────────
// The kit's pig, tipped back on his haunches by the kit's own sitting tilt,
// with the near foreleg raised to his eye. In the kit's pig frame: facing
// right, ground at y = 0.

/**
 * Tipped back on his haunches, and let down so his rump rests on the step, as
 * the kit's sitting pig is (it was first left hovering a little above it).
 */
const SIT = 'translate(0 12) rotate(-24 -40 -8)'
/**
 * The near foreleg, raised from the chest so the trotter comes up to the
 * front corner of his eye, in the pig's own frame (it tips back with him).
 * REDRAWN 27 September 2026: it first ran from the shoulder straight across
 * the face, a long pale stroke over his cheek, and its dark tip sat on the
 * eye itself, so at panel size he seemed to have a black eye and a bar
 * across his face, and the sitting pose did not read. It is short now, as a
 * pig's leg is, and stops beside the eye.
 */
const RAISED = 'M28 -13C38 -14 44 -20 44 -28'
/** The trotter's dark horn, pointing up at the corner of the eye, and its cleft. */
const TROTTER = 'M40 -29C40 -33 42.6 -35.4 45.6 -34.8C47.6 -33 47.4 -29.6 44.8 -27.6Z'
const CLEFT = 'M43.4 -34.6L44.2 -29'
/** His eye screwed shut in grief: an arc over the kit's eye, curving down at both ends. */
const SHUT_EYE = 'M32.4 -33C35.6 -36.8 39.4 -36.4 41 -33.4'
/** The hind leg folded under him, as the kit's sitting pig has it. */
const HAUNCH = 'M-40 -5L-26 -3'
/** "wiping away a tear": a drop on his round cheek, under the eye, in paper. */
const TEAR =
  'M35 -31C37 -28.4 38.2 -26 38 -24.2C37.8 -22.2 36.3 -21.2 34.8 -21.4C33.2 -21.6 32.2 -23 32.7 -25C33.2 -26.8 34.2 -29 35 -31Z'

function SquealerWiping({ at, s, face }: { at: P; s: number; face: 1 | -1 }) {
  const w = k(s)
  const parts: Part[] = [
    { d: 'M16 -30L18 -4', w: 8 },
    { d: HAUNCH, w: 7.5 },
    { d: PIG_FAR_EAR, t: SIT },
    { d: SQUEALER_TAIL, w: 2.6, t: SIT },
    { d: SQUEALER_BODY, t: SIT },
    { d: PIG_EAR, t: SIT },
    { d: RAISED, w: 7.4, sep: w(1.4), t: SIT },
  ]
  return (
    <g transform={place(at, s, face)}>
      <Cut parts={parts} halo={w(1.8)} tone="paper">
        <g transform={SIT}>
          <path d={pigCuts(s, 'squealer')} fill={INK} />
          {pigStrokes(s, 'squealer').map(([d, sw]) => (
            <path key={d} d={d} fill="none" stroke={INK} strokeWidth={sw} strokeLinecap="round" />
          ))}
          <path d={SHUT_EYE} fill="none" stroke={INK} strokeWidth={w(1.1)} strokeLinecap="round" />
          {/* the trotter at his eye, its horn dark, the cleft cut in it */}
          <path d={TROTTER} fill={INK} />
          <path d={CLEFT} stroke={PAPER} strokeWidth={w(0.6)} />
          <path
            d={TEAR}
            fill={PAPER}
            stroke={INK}
            strokeWidth={w(0.9)}
            strokeLinejoin="round"
            className="lc-fade-in"
            style={timing({ delay: 1.3, dur: 0.8 })}
          />
        </g>
      </Cut>
    </g>
  )
}

// ── THE SCENE ───────────────────────────────────────────────────────────────

type Marks = { sky: string; bricks: string; yard: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(2901)
  let sky = ''
  for (let y = 16; y < 150; y += 10) {
    let x = between(r, -60, 0)
    while (x < HOUSE.x0) {
      const len = between(r, 40, 130)
      if (r() < 0.34) sky += gouge(x, y, x + len, y + between(r, -1.5, 1.5), 0.6 + y / 300)
      x += len + between(r, 30, 110)
    }
  }
  // The farmhouse wall: brick courses cut in paper, lit from the left.
  let bricks = ''
  for (let y = HOUSE.eaves + 8, row = 0; y < FOOT - 2; y += 7, row++) {
    let x = HOUSE.x0 + 4 + (row % 2 ? 9 : 0) + between(r, -2, 2)
    while (x < W) {
      const bw = between(r, 12, 17)
      const L = clamp(0.85 - (x - HOUSE.x0) / 520)
      if (r() < 0.35 + L * 0.6) bricks += gouge(x, y, x + bw - 3, y, 0.5 + L * 1.1)
      x += bw
    }
  }
  // The yard: paper, scored with short strokes of ink.
  let yard = ''
  for (let y = FOOT + 6; y < H; y += 6 + (y - FOOT) * 0.05) {
    const t = clamp((y - FOOT) / (H - FOOT))
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 6, 18) * (0.7 + t)
      if (r() < 0.55) yard += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.5 + t * 1.1)
      x += len + between(r, 14, 40) * (1.4 - t * 0.5)
    }
  }
  cached = { sky, bricks, yard }
  return cached
}

/** A sash window of the farmhouse: frame, glazing bars and sill. */
function sashWindow(x: number, y: number) {
  return (
    <g key={`${x}-${y}`}>
      <rect x={x - 3} y={y - 3} width={40} height={50} fill={PAPER} />
      <rect x={x} y={y} width={34} height={44} fill={INK} />
      <path
        d={`M${x + 17} ${y}V${y + 44}M${x} ${y + 22}H${x + 34}`}
        stroke={PAPER}
        strokeWidth={LINE.bold}
      />
      <rect x={x - 5} y={y + 47} width={44} height={4} fill={PAPER} />
    </g>
  )
}

function SquealersStory({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [600, 220], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      {/* the far hedge beyond the yard */}
      <path
        d={`M0 ${FOOT}L0 ${FOOT - 22}C60 ${FOOT - 30} 120 ${FOOT - 18} 180 ${FOOT - 26}C240 ${FOOT - 34} 300 ${FOOT - 20} 360 ${FOOT - 28}C400 ${FOOT - 32} 440 ${FOOT - 24} ${HOUSE.x0} ${FOOT - 26}L${HOUSE.x0} ${FOOT}Z`}
        fill={INK}
      />
      <path d={m.yard} fill={INK} />

      {/* the farmhouse: dark brick, its roof red */}
      <rect
        x={HOUSE.x0}
        y={HOUSE.eaves}
        width={HOUSE.x1 - HOUSE.x0}
        height={FOOT - HOUSE.eaves}
        fill={INK}
      />
      <path d={m.bricks} fill={PAPER} />
      <path
        d={`M${HOUSE.x0 - 12} ${HOUSE.eaves + 2}L${HOUSE.x0 + 40} 34H${HOUSE.x1}V${HOUSE.eaves + 2}Z`}
        fill={RED}
      />
      <path
        d={`M${HOUSE.x0 - 14} ${HOUSE.eaves + 1}H${HOUSE.x1}`}
        stroke={INK}
        strokeWidth={LINE.bold}
      />
      <rect x={560} y={4} width={18} height={24} fill={INK} />
      <rect x={790} y={0} width={18} height={26} fill={INK} />
      {sashWindow(456, 104)}
      {sashWindow(770, 104)}
      {sashWindow(770, 180)}
      {/* the door, shut, and its step */}
      <rect x={596} y={140} width={96} height={FOOT - 140} fill={PAPER} />
      <rect x={604} y={148} width={80} height={FOOT - 148} fill={INK} />
      <path
        d={`M644 148V${FOOT}M612 172H636M652 172H676M612 212H636M652 212H676`}
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      <rect
        x={582}
        y={FOOT - 2}
        width={124}
        height={8}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
      />

      {/* the animals, gathered to hear him */}
      <Horse at={[112, 318]} s={0.96} who="clover" headDown={10} uid={uid} />
      <Benjamin at={[272, 322]} s={0.9} />
      <Muriel at={[372, 322]} s={0.9} />
      <Hen at={[210, 336]} s={1.6} />
      <Sheep at={[452, 328]} s={1.6} />
      <Sheep at={[500, 338]} s={1.6} />
      <Hen at={[540, 326]} s={1.5} />

      {/* Squealer on the doorstep, "lifting his trotter and wiping away a tear" */}
      <SquealerWiping at={[652, FOOT + 1]} s={1.45} face={-1} />
    </g>
  )
}

export const squealersStory: LinocutArt = { width: W, height: H, Draw: SquealersStory }
