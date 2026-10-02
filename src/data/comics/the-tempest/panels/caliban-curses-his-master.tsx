import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, STAFF_HELD, type P } from './people'
import { CalibanRock, Cell, LimeTree } from './the-cell'

/**
 * Act 1, Scene 2: "Caliban curses his master", the fourth moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1540, src/data/full-texts/the-tempest.ts):
 *
 * - "The Island. Before the cell of Prospero." "We'll visit Caliban my
 *   slave"; "What ho! slave! Caliban! ... Come forth, I say". Caliban lives
 *   apart, in his rock ("here you sty me In this hard rock"), so he has come
 *   out of its dark opening on the left (CalibanRock, ./the-cell.tsx), and
 *   Prospero and Miranda stand facing him on the right, before their cell
 *   (Cell). Ariel has come and gone ("Hark in thine ear ... [Exit.]") and is
 *   not drawn.
 * - "I must eat my dinner. This island's mine, by Sycorax my mother, Which
 *   thou tak'st from me." "And show'd thee all the qualities o' th' isle,
 *   The fresh springs, brine-pits, barren place, and fertile." Caliban, drawn
 *   as the kit draws him (./people.tsx), a man, barefoot, in his gaberdine,
 *   stands upright with one hand on his breast and the other swept back
 *   over the island's hills behind him; ahead of him a spring runs down the
 *   hillside to the shore, the sea beyond.
 * - "Thou strok'st me ... and teach me how To name the bigger light, and how
 *   the less, That burn by day and night". It is afternoon, and the bigger
 *   light, the sun, stands over the island: the spot colour.
 * - "Thou most lying slave"; "Hag-seed, hence! Fetch us in fuel". Prospero,
 *   staff in hand (held clear of his face, as the kit's STAFF_HELD holds it),
 *   frowns and points at him. Miranda stands beside her
 *   father, apart from both, her hands folded, looking on. By the kit's rule
 *   nothing in her pose or Caliban's alludes to Prospero's accusation:
 *   Caliban speaks to Prospero and looks at him alone.
 *
 * Seeds: 3401 (sky), 3402 (the sun), 3403 (hills), 3404 (sea), 3405 (ground).
 *
 * REVIEWED 2 October 2026. The cell was missing, though the guide and the
 * play set the scene before it; Prospero's staff ran up through his face; and
 * Caliban's open hand, cut with its fingers close, read at panel size as a
 * flat paddle. All three are mended.
 *
 * REVIEWED AGAIN, the same day. Mended, the arm had been raised straight up
 * and back behind him with the hand at the end of it, and at phone size a
 * raised straight arm reads as a salute. It is swept back at the height of
 * his shoulder now, the elbow a little bent, and the hills behind him are cut
 * lower so the open hand is still seen against the sky.
 */

const W = 860
const H = 340
const GROUND = 330
const HORIZON = 206

/**
 * The island's hills behind Caliban, falling to the shore on the right: low
 * enough behind him that his arm, swept back at the height of his shoulder,
 * is seen against the sky.
 */
const hill = (x: number) =>
  HORIZON -
  Math.max(0, 48 - x * 0.1) -
  14 * Math.sin(x / 60) * Math.max(0, 1 - x / 520) -
  4 * Math.sin(x / 13)

type Marks = {
  sky: string
  sun: string
  hills: string
  hillCuts: string
  spring: string
  sea: string
  ground: string
  tufts: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = gougeField(
    rng(3401),
    { x0: 0, x1: W, y0: 4, y1: HORIZON },
    (x, y) =>
      clamp(
        0.1 + (1 - y / HORIZON) * 0.36 - Math.max(0, 1 - Math.hypot(x - 392, y - 70) / 120) * 0.4,
      ),
    { spacing: 6, len: [36, 130], gap: [14, 44], max: 2.2 },
  )
  // The sun's light, cut in ink round it on the pale sky.
  const sun = rays(rng(3402), 392, 70, { from: 30, to: 96, every: 8, width: 2.4 })

  // The hills: an ink mass, its slopes cut lighter where the sun falls.
  let hills = `M-10 ${HORIZON + 30}`
  for (let x = -10; x <= 560; x += 6) hills += `L${n(x)} ${n(hill(x))}`
  hills += `L560 ${HORIZON + 30}Z`
  // Their slopes: short cuts of scrub and grass, slanting with the hillside,
  // thick near the sunlit crest and thinning into shadow below.
  const h = rng(3403)
  let hillCuts = ''
  for (let i = 0; i < 430; i++) {
    const x = between(h, 0, 556)
    const top = hill(x)
    const y = between(h, top + 3, HORIZON + 28)
    const light = clamp(0.85 - (y - top) / 70 + (x / 560) * 0.15)
    if (h() > light) continue
    const slope = (hill(x + 4) - hill(x - 4)) / 8
    const len = 3 + light * 5
    const a = Math.atan(slope) + between(h, -0.3, 0.3)
    hillCuts += gouge(x, y, x + Math.cos(a) * len, y + Math.sin(a) * len, 0.5 + light * 1.1)
  }
  // The spring, running down the hillside to the shore, cut in paper.
  const spring =
    'M402 200C405 206 400 213 408 220C416 228 410 234 424 240L436 240C422 232 428 226 418 218C411 211 417 206 410 200Z'

  const sea = gougeField(rng(3404), { x0: 520, x1: W, y0: HORIZON + 2, y1: 246 }, () => 0.3, {
    spacing: 5,
    len: [30, 90],
    gap: [8, 26],
    max: 1.8,
  })
  const g = rng(3405)
  const ground = gougeField(
    g,
    { x0: 0, x1: W, y0: 240, y1: H },
    (x, y) => clamp(((y - 236) / 104) ** 1.5 * 0.5 + 0.06),
    { spacing: 6, len: [10, 46], gap: [14, 44], max: 2 },
  )
  let tufts = ''
  for (let i = 0; i < 80; i++) {
    const x = between(g, 0, W)
    const y = between(g, 246, H - 2)
    const h = 3 + clamp((y - 240) / 100) * 7
    tufts += `M${n(x - 2.4)} ${n(y)}l${n(-1.2)} ${n(-h)}M${n(x)} ${n(y)}l0 ${n(-h * 1.25)}M${n(x + 2.4)} ${n(y)}l${n(1.6)} ${n(-h)}`
  }
  cached = { sky, sun, hills, hillCuts, spring, sea, ground, tufts }
  return cached
}

const CALIBAN: P = [276, GROUND]
const PROSPERO: P = [548, GROUND]
const MIRANDA: P = [690, GROUND]

function CalibanCursesHisMaster({ uid }: ArtProps) {
  const m = marks()
  const seaClip = `${uid}-sea`
  return (
    <>
      <defs>
        <clipPath id={seaClip}>
          <rect x={0} y={HORIZON} width={W} height={40} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        {/* "the bigger light": the afternoon sun over the island */}
        <path
          className="lc-fade-in"
          style={timing({ delay: 0.3, dur: 1.4 })}
          d={m.sun}
          fill={INK}
        />
        <circle cx={392} cy={70} r={24} fill={RED} stroke={INK} strokeWidth={LINE.bold} />

        <g clipPath={`url(#${seaClip})`}>
          <path d={m.sea} fill={INK} />
        </g>
        <path d={`M520 ${HORIZON}H${W}`} stroke={INK} strokeWidth={LINE.fine} />
        {/* the island behind him: its hills, a spring running down to the shore */}
        <path d={m.hills} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.hillCuts} fill={PAPER} />
        <path d={m.spring} fill={PAPER} stroke={INK} strokeWidth={1} />
        <LimeTree at={[466, 236]} scale={0.4} which="small" />

        {/* the ground where they stand */}
        <path
          d={`M-10 ${H + 10}L-10 236Q430 226 ${W + 10} 240L${W + 10} ${H + 10}Z`}
          fill={PAPER}
        />
        <path
          d={`M-10 236Q430 226 ${W + 10} 240`}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path d={m.ground} fill={INK} />
        <path d={m.tufts} stroke={INK} strokeWidth={1.3} strokeLinecap="round" />

        {/* the cell, behind Prospero and Miranda on the right (no fire in its
            door: the sun is this panel's one red) */}
        <Cell at={[778, 262]} scale={0.62} />

        {/* his rock, with its dark opening */}
        <CalibanRock at={[120, 316]} scale={1.12} />

        {/* Caliban, a hand on his breast, the other swept back over the island:
            "This island's mine" */}
        <Person
          at={CALIBAN}
          scale={1.18}
          pose={{
            look: 'caliban',
            head: { rot: -6 },
            legs: {
              far: [
                [-5, -44],
                [-11, -3],
              ],
              near: [
                [5, -44],
                [11, -3],
              ],
            },
            // Swept back over the island at the height of his shoulder, the
            // elbow a little bent and the hand open, so the open hand is seen
            // against the sky over the lowered hills. (Low, against the dark
            // hills, its fingers closed up and it read as a paddle; raised
            // straight up behind him, it read at panel size as a salute.)
            far: {
              pts: [
                [-4, -130],
                [-25, -125],
                [-47, -134],
              ],
              hand: 'open',
              deg: 194,
              thumb: 1,
              size: 16.5,
              spread: 22,
            },
            near: {
              pts: [
                [5, -128],
                [18, -104],
                [13, -118],
              ],
              hand: 'open',
              deg: -100,
              size: 14,
              spread: 12,
              thumb: 1,
            },
          }}
        />

        {/* Prospero, staff in hand, frowning, pointing at him */}
        <Person
          at={PROSPERO}
          scale={1.2}
          flip
          pose={{
            look: 'prospero',
            head: { rot: -2 },
            frown: true,
            far: {
              pts: [
                [-4, -130],
                [16, -122],
                [42, -126],
              ],
              hand: 'point',
              deg: -4,
            },
            near: STAFF_HELD.near,
            staff: STAFF_HELD.staff,
          }}
        />

        {/* Miranda, beside her father and apart, looking on */}
        <Person
          at={MIRANDA}
          scale={1.2}
          flip
          pose={{
            look: 'miranda',
            far: {
              pts: [
                [-3, -124],
                [0, -102],
                [12, -94],
              ],
              deg: 10,
            },
            near: {
              pts: [
                [3, -124],
                [8, -102],
                [16, -96],
              ],
              deg: 170,
            },
          }}
        />
      </g>
    </>
  )
}

export const calibanCursesHisMaster: LinocutArt = {
  width: W,
  height: H,
  Draw: CalibanCursesHisMaster,
}
