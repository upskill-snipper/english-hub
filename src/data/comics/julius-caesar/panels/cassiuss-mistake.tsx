import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type P } from './people'

/**
 * Act 5, Scene 3: "Cassius's mistake", the fourteenth moment in the guide's
 * timeline. The scene ends in two deaths, which happen off the page: the
 * panel draws the mistake itself, the moment Pindarus misreads the field,
 * while everyone in the scene is still alive. Every detail is from the scene
 * (the held edition, Project Gutenberg #1522):
 *
 * - "This hill is far enough." "Go, Pindarus, get higher on that hill, My
 *   sight was ever thick." "[Pindarus goes up.]" So Cassius stands on the
 *   lower slope of a hill, in the foreground, and Pindarus higher up, at its
 *   top, looking out over the field for him.
 * - "This ensign here of mine was turning back; I slew the coward, and did
 *   take it from him." So Cassius holds the standard, its pole planted beside
 *   him; what happened to its bearer is left to the words.
 * - "Mark Antony is in your tents, my lord." "Are those my tents where I
 *   perceive the fire?" "They are, my lord." So Cassius's tents are burning
 *   out on the plain, the flames in the spot colour, the smoke blowing.
 * - "Mount thou my horse ... Till he have brought thee up to yonder troops";
 *   Pindarus: "Titinius is enclosed round about With horsemen, that make to
 *   him on the spur". So far off across the plain one rider is ringed by
 *   horsemen riding at him, and Pindarus points at them. They are friends:
 *   "Did I not meet thy friends? And did not they Put on my brows this wreath
 *   of victory". Nobody in the panel is fighting.
 * - Cassius looks up at Pindarus and not at the field: he cannot see it, and
 *   takes Pindarus's word for it.
 *
 * Cassius and Pindarus are the kit's (./people.tsx): Cassius lean, in the
 * armour and cloak of a general at Philippi, and Pindarus, his bondman, in a
 * plain tunic. No sword is drawn. Nothing is taken from a film or stage
 * production. Seeds: 1401 (the sky and the ground), 1402 (the smoke).
 */

const W = 860
const H = 340
const HORIZON = 212

/** The hill: Cassius's ground in the foreground, rising behind him to the top where Pindarus stands. */
const HILL =
  'M-6 196C40 186 96 170 150 158C196 148 236 140 270 140C300 140 324 150 352 166C392 188 440 206 500 214C560 222 640 226 866 228V346H-6Z'
/** Where Pindarus stands, at the top. */
const TOP: P = [270, 141]

/** Cassius's tents, burning, out on the plain. */
const TENTS: [number, number, number][] = [
  [508, 214, 1],
  [540, 216, 0.86],
  [568, 213, 0.94],
  [598, 215, 0.8],
]

/**
 * Titinius ringed by horsemen, far off: [x, y, facing, scale] of each rider,
 * the far ones first. Titinius is the one in the middle, on Cassius's horse,
 * still riding on ("Yet he spurs on"); the others ride in on him from both
 * sides, the nearer ones lower and larger.
 */
const RIDERS: [number, number, 1 | -1, number][] = [
  [668, 214, 1, 0.84],
  [774, 214, -1, 0.84],
  [720, 222, 1, 1],
  [652, 230, 1, 1.08],
  [790, 231, -1, 1.08],
]

type Marks = {
  sky: string
  plain: string
  hillCuts: string
  smoke: string
  smokeCurls: string
  tents: string
}

/**
 * A horse and rider at a gallop, facing right, the hooves at (0, 0), about
 * 46 long and 44 high: the barrel, the neck and head reaching forward, the
 * tail streaming back, and the rider leaning over the withers. The legs,
 * stretched fore and aft, are strokes (RIDER_LEGS).
 */
const RIDER_BODY =
  'M-15 -24C-8 -28 4 -28 10 -25C13 -30 17 -35 22 -36L24 -39L26 -35C29 -33 31 -29 32 -25L30 -23L24 -26C21 -24 19 -21 17 -17C15 -13 11 -11 5 -11L-9 -11C-14 -12 -17 -15 -17 -19C-21 -19 -25 -16 -28 -13L-29 -15C-27 -20 -22 -24 -15 -24Z' +
  'M-3 -27C-4 -32 -2 -37 2 -39L3 -40C1 -43 2 -47 6 -47C10 -47 11 -43 9 -40L7 -38C9 -36 9 -32 8 -27Z'
const RIDER_LEGS = 'M12 -13L22 -7L28 -1M7 -12L14 -4L18 1M-9 -13L-18 -6L-26 -1M-12 -14L-16 -5L-14 1'

function Rider({ at, f, s }: { at: P; f: 1 | -1; s: number }) {
  return (
    <g transform={`translate(${at[0]} ${at[1]}) scale(${n(f * s)} ${n(s)})`}>
      <path d={RIDER_BODY} fill={PAPER} stroke={PAPER} strokeWidth={3} strokeLinejoin="round" />
      <path d={RIDER_LEGS} fill="none" stroke={PAPER} strokeWidth={5.4} strokeLinecap="round" />
      <path d={RIDER_LEGS} fill="none" stroke={INK} strokeWidth={2.6} strokeLinecap="round" />
      <path d={RIDER_BODY} fill={INK} />
      <path d="M-8 -21C-2 -23 4 -23 9 -21" fill="none" stroke={PAPER} strokeWidth={0.9} />
    </g>
  )
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1401)
  // the afternoon sky, darker overhead
  let sky = ''
  for (let y = 6; y < HORIZON - 14; y += 6) {
    let x = between(r, -30, 0)
    while (x < W) {
      const len = between(r, 30, 110)
      const D = clamp(0.6 - y / 300)
      if (r() < D * 1.2)
        sky += gouge(x, y + between(r, -0.6, 0.6), x + len, y + between(r, -0.6, 0.6), 0.3 + D * 2)
      x += len + between(r, 6, 26)
    }
  }
  // the far plain: furrows in ink, finer towards the horizon
  let plain = ''
  for (let y = HORIZON + 4; y < 240; y += 4.6) {
    let x = 380 + between(r, -20, 0)
    while (x < W) {
      const len = between(r, 20, 70)
      plain += gouge(x, y, x + len, y + between(r, -0.4, 0.4), 0.35 + (y - HORIZON) / 50)
      x += len + between(r, 10, 34)
    }
  }
  // the hill: grass in short ink ticks, heavier nearer
  let hillCuts = ''
  for (let i = 0; i < 230; i++) {
    const x = between(r, -6, 860)
    const y = between(r, 140, 340)
    const t = clamp((y - 140) / 200)
    hillCuts += gouge(x, y, x + 5 + t * 12, y - 1.5 - t * 3, 0.5 + t * 1.2, between(r, -0.6, 0.6))
  }
  // smoke from the tents: puffs that grow as they rise and blow to the
  // left over the hill, with their curls cut in paper
  const q = rng(1402)
  let smoke = ''
  let smokeCurls = ''
  for (let k = 0; k < 3; k++) {
    const x0 = 516 + k * 34
    for (let i = 0; i < 9; i++) {
      const t = i / 8
      const cx = x0 - t * t * (150 + k * 30) + between(q, -3, 3)
      const cy = 196 - t * (128 + k * 10)
      const rad = 7 + t * (15 + k * 3)
      smoke += `M${n(cx - rad)} ${n(cy)}a${n(rad)} ${n(rad * 0.86)} 0 1 0 ${n(2 * rad)} 0a${n(rad)} ${n(rad * 0.86)} 0 1 0 ${n(-2 * rad)} 0Z`
      if (i > 1)
        smokeCurls += `M${n(cx - rad * 0.6)} ${n(cy + rad * 0.1)}q${n(rad * 0.5)} ${n(-rad * 0.6)} ${n(rad * 1.1)} ${n(-rad * 0.2)}`
    }
  }
  let tents = ''
  for (const [x, y, sc] of TENTS)
    tents += `M${n(x - 18 * sc)} ${n(y)}L${n(x - 2 * sc)} ${n(y - 22 * sc)}L${n(x + 2 * sc)} ${n(y - 22 * sc)}L${n(x + 18 * sc)} ${n(y)}Z`
  cached = { sky, plain, hillCuts, smoke, smokeCurls, tents }
  return cached
}

function CassiussMistake({ uid }: ArtProps) {
  const m = marks()
  const id = { hill: `${uid}-hill` }
  return (
    <>
      <defs>
        <clipPath id={id.hill}>
          <path d={HILL} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [300, 220], push: 1.03 })}>
        {/* the sky, and the plain out to the horizon */}
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={`M300 ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.4} />
        <path d={m.plain} fill={INK} />

        {/* the smoke and the fire in Cassius's tents */}
        <g className="lc-drift-r">
          <path d={m.smoke} fill={INK} />
          <path
            d={m.smokeCurls}
            fill="none"
            stroke={PAPER}
            strokeWidth={1.4}
            strokeLinecap="round"
          />
        </g>
        <path d={m.tents} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
        <g fill={RED}>
          {TENTS.map(([x, y, s]) => (
            <path
              key={x}
              className="lc-flicker"
              d={`M${n(x - 7 * s)} ${n(y - 15 * s)}C${n(x - 8 * s)} ${n(y - 24 * s)} ${n(x - 3 * s)} ${n(y - 28 * s)} ${n(x - 1 * s)} ${n(y - 38 * s)}C${n(x + 3 * s)} ${n(y - 29 * s)} ${n(x + 9 * s)} ${n(y - 24 * s)} ${n(x + 7 * s)} ${n(y - 15 * s)}C${n(x + 3 * s)} ${n(y - 19 * s)} ${n(x - 3 * s)} ${n(y - 19 * s)} ${n(x - 7 * s)} ${n(y - 15 * s)}Z`}
            />
          ))}
        </g>

        {/* far off, Titinius ringed by horsemen riding at him */}
        {RIDERS.map(([x, y, f, sc]) => (
          <Rider key={x} at={[x, y]} f={f} s={sc} />
        ))}

        {/* the hill */}
        <path d={HILL} fill={PAPER} />
        <g clipPath={`url(#${id.hill})`}>
          <path d={m.hillCuts} fill={INK} />
        </g>
        <path d={HILL} fill="none" stroke={INK} strokeWidth={1.8} />

        {/* Pindarus at the top, pointing out over the field */}
        <Person
          pose={{
            look: 'pindarus',
            near: {
              pts: [
                [5, -130],
                [22, -122],
                [40, -114],
              ],
              hand: 'point',
              deg: 20,
            },
          }}
          at={TOP}
          scale={0.66}
        />

        {/* Cassius on the slope below, the standard in his hand, looking up at him */}
        <Person
          pose={{
            look: 'cassius',
            dress: 'armour',
            head: { rot: -16 },
            far: {
              pts: [
                [-4, -131],
                [12, -112],
                [26, -118],
              ],
              hand: 'grip',
              deg: -90,
            },
            near: {
              pts: [
                [5, -130],
                [10, -106],
                [16, -86],
              ],
              hand: 'mitt',
            },
          }}
          at={[150, 334]}
          scale={1.2}
        >
          {/* the standard: its pole, its crossbar and its cloth */}
          <path d="M31 6V-226" stroke={PAPER} strokeWidth={6.4} strokeLinecap="round" />
          <path d="M31 6V-226" stroke={INK} strokeWidth={3.6} strokeLinecap="round" />
          <path d="M14 -214H48" stroke={PAPER} strokeWidth={5.6} strokeLinecap="round" />
          <path d="M14 -214H48" stroke={INK} strokeWidth={3} strokeLinecap="round" />
          <path d="M16 -212H46V-178L31 -184L16 -178Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
          <path d={gouge(20, -206, 42, -206, 1.2) + gouge(22, -196, 40, -196, 0.9)} fill={PAPER} />
          <path d="M31 -226L27 -236L31 -246L35 -236Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
        </Person>
      </g>
    </>
  )
}

export const cassiussMistake: LinocutArt = { width: W, height: H, Draw: CassiussMistake }
