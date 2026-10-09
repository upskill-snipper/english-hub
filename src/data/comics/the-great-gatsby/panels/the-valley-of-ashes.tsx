import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, SERIF } from '@/components/comics/linocut/palette'
import { between, gouge, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person } from './people'

/**
 * Chapter II: "The valley of ashes and the flat", the third moment in the
 * guide's timeline. The panel is the valley, under Doctor T. J. Eckleburg's
 * eyes, on the afternoon Tom takes Nick off the train to meet Myrtle. The
 * flat, and what Tom does there, are not drawn. Every detail is from the
 * held text (the 1925 first edition, src/data/full-texts/the-great-gatsby.ts):
 *
 * - "the motor road hastily joins the railroad and runs beside it for a
 *   quarter of a mile ... This is a valley of ashes—a fantastic farm where
 *   ashes grow like wheat into ridges and hills and grotesque gardens; where
 *   ashes take the forms of houses and chimneys and rising smoke and,
 *   finally, with a transcendent effort, of ash-gray men, who move dimly and
 *   already crumbling through the powdery air." So the land is ridges and
 *   hills of ash, one of them heaped into the shape of a house with a
 *   chimney whose smoke is ash too, and the men are cut pale, as if made of
 *   it.
 * - "Occasionally a line of gray cars crawls along an invisible track ...
 *   and comes to rest, and immediately the ash-gray men swarm up with leaden
 *   spades and stir up an impenetrable cloud, which screens their obscure
 *   operations from your sight." So in the middle distance a line of small
 *   wagons stands on a track among the heaps, men with spades climb on them,
 *   and a cloud of dust rises over them and hides the far end of the line.
 * - "above the gray land and the spasms of bleak dust which drift endlessly
 *   over it, you perceive, after a moment, the eyes of Doctor T. J.
 *   Eckleburg ... their retinas are one yard high. They look out of no face,
 *   but, instead, from a pair of enormous yellow spectacles which pass over a
 *   nonexistent nose ... his eyes, dimmed a little by many paintless days,
 *   under sun and rain, brood on". So the billboard stands high over
 *   everything on its posts: two huge eyes and the round spectacles round
 *   them, joined at a bridge over nothing, no face and no nose, the paint
 *   flaking in paper chips. (The chips are fine and show only where they
 *   cross the ink of the eyes and rims; at panel size they pass for the
 *   print's own voids, so the alt text does not claim them.) Their blue and
 *   the spectacles' yellow are colours the print does not have, so they are
 *   left to the words.
 * - "I went up to New York with Tom on the train one afternoon, and when we
 *   stopped by the ashheaps he jumped to his feet and ... forced me from the
 *   car ... I followed him over a low whitewashed railroad fence, and we
 *   walked back a hundred yards along the road under Doctor Eckleburg's
 *   persistent stare." So the train waits on the line at the left, the low
 *   white fence runs between the line and the road, and on the road Tom,
 *   broad and pale-haired (the kit, ./people.tsx), strides ahead under the
 *   eyes with Nick following.
 * - "The only building in sight was a small block of yellow brick sitting on
 *   the edge of the waste land ... One of the three shops it contained was
 *   for rent and another was an all-night restaurant, approached by a trail
 *   of ashes; the third was a garage—Repairs. George B. Wilson." So on the
 *   right stands a small block of pale brick with three shopfronts: an empty
 *   one, the restaurant with a pale trail of ash to its door, and the garage
 *   under its sign. Its yellow is left to the words. Wilson and Myrtle are
 *   inside, not yet seen.
 *
 * NO RED. Everything in the valley is gray, and the text says so again and
 * again ("ash-gray men", "gray cars", "the gray land"); the one colour it
 * names, the eyes' blue and the spectacles' yellow, the print cannot show.
 * So this print has no spot colour at all. The child setting torpedoes on
 * the track is not drawn. Nothing is taken from a film, television or stage
 * production. Seeds: 1301 (the sky), 1302 (the far ridges), 1303 (the near
 * heaps), 1304 (the dust cloud), 1305 (the billboard's flaking paint), 1307
 * (the road), 1308 (the ash smoke).
 */

const W = 860
const H = 340
/** The billboard's board, and the centres of the two eyes on it. */
const BOARD = { x0: 436, x1: 724, y0: 22, y1: 106 }
const EYES: [number, number][] = [
  [514, 66],
  [646, 66],
]
/** The track of the ash wagons among the heaps, and their left and right ends. */
const TRACK = { y: 216, x0: 196, x1: 420 }
/** The railway line, the fence between it and the road, and the road. */
const RAIL = 248
const FENCE = 264
const ROAD = 272
/** Wilson's block. */
const BLOCK = { x0: 652, x1: 846, top: 170, foot: ROAD }

/** The far ridges of ash, a low grey line under the sky. */
const RIDGES =
  'M0 168C50 146 110 150 170 162C230 140 290 144 350 158C410 146 470 144 530 160C600 142 680 146 760 164C800 156 830 158 860 162V250H0Z'
/**
 * The near heaps: hills of ash, and one heap in the form of a house, a gable
 * with a chimney, between the train and the wagons.
 */
const HEAPS =
  'M0 214C30 200 70 196 110 204C124 198 136 196 146 196L146 178L172 154L198 178V160H208V182C214 192 222 196 232 198C256 194 280 198 300 206C330 194 370 192 410 204C450 192 500 194 540 206C580 196 620 196 656 206V252H0Z'
/** Where the ash smoke rises: the top of the ash chimney. */
const CHIMNEY: [number, number] = [203, 158]

type Marks = {
  sky: string
  ridges: string
  heaps: string
  heapsLow: string
  smoke: [number, number, number][]
  cloud: [number, number, number][]
  flakes: string
  road: string
  trail: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The powdery air: a pale sky with a few fine dark lines of drifting dust.
  const rs = rng(1301)
  let sky = ''
  for (let y = 14; y < 166; y += 9) {
    let x = between(rs, -20, 10)
    while (x < W) {
      const len = between(rs, 24, 80)
      if (rs() < 0.42)
        sky += gouge(x, y, x + len, y + between(rs, -0.4, 0.4), 0.35 + (y / 166) * 0.3)
      x += len + between(rs, 20, 60)
    }
  }
  // The ash: grey, cut as broken diagonal hatching over the paper, so it
  // reads as ash. (Long level cuts, tried first, made the heaps a lake, and
  // white specks on black made them a night sky.) The far ridges are hatched
  // one way and pale; the near heaps closer, and crossed low down, darker.
  const hatch = (x0: number, x1: number, y0: number, y1: number, gap: number, slope: number) => {
    let d = ''
    const run = (y1 - y0) * slope
    for (let x = x0 - Math.abs(run); x < x1 + Math.abs(run); x += gap)
      d += `M${Math.round(x)} ${y1}L${Math.round(x + run)} ${y0}`
    return d
  }
  const ridges = hatch(0, W, 136, 218, 6.4, 0.6)
  const heaps = hatch(0, 660, 162, 252, 4, 0.6)
  const heapsLow = hatch(0, 660, 212, 252, 5, -0.6)
  // "rising smoke": billows of ash going up from the ash chimney and drifting,
  // one outline round them all.
  const smoke: [number, number, number][] = [
    [CHIMNEY[0], CHIMNEY[1] - 6, 4.2],
    [CHIMNEY[0] + 2, CHIMNEY[1] - 14, 5.2],
    [CHIMNEY[0] + 6, CHIMNEY[1] - 23, 6.2],
    [CHIMNEY[0] + 12, CHIMNEY[1] - 32, 7],
    [CHIMNEY[0] + 20, CHIMNEY[1] - 40, 7.6],
    [CHIMNEY[0] + 30, CHIMNEY[1] - 46, 8],
  ]
  // "an impenetrable cloud": billows over the far end of the wagons.
  const rc = rng(1304)
  const cloud: [number, number, number][] = []
  for (let i = 0; i < 14; i++) {
    const cx = between(rc, 318, 420)
    const cy = between(rc, 176, 206) - (cx - 318) * 0.12
    const r1 = (v: number) => Math.round(v * 10) / 10
    cloud.push([r1(cx), r1(cy), r1(between(rc, 9, 16))])
  }
  // "dimmed a little by many paintless days": chips of paint gone from the eyes.
  const rf = rng(1305)
  let flakes = ''
  for (let i = 0; i < 46; i++) {
    const [ex, ey] = EYES[i % 2]
    const x = ex + between(rf, -44, 44)
    const y = ey + between(rf, -30, 30)
    flakes += gouge(x, y, x + between(rf, 2, 5), y + between(rf, -1.2, 1.2), between(rf, 0.5, 0.9))
  }
  // The road: ruts and ash in the dust, heavier towards us.
  const rr = rng(1307)
  let road = ''
  for (let y = ROAD + 8; y < H - 2; y += 7) {
    let x = between(rr, -10, 20)
    while (x < W) {
      const len = between(rr, 18, 60)
      if (rr() < 0.5)
        road += gouge(
          x,
          y,
          x + len,
          y + between(rr, -0.4, 0.4),
          0.4 + ((y - ROAD) / (H - ROAD)) * 0.7,
        )
      x += len + between(rr, 16, 44)
    }
  }
  // "approached by a trail of ashes": flecks from the road to the restaurant's door.
  let trail = ''
  for (let i = 0; i < 18; i++) {
    const t = i / 17
    const x = 724 - t * 30 + between(rr, -6, 6)
    const y = ROAD + 3 + t * 52 + between(rr, -2, 2)
    trail += gouge(x, y, x + between(rr, 4, 9), y + between(rr, -0.6, 0.6), 0.9)
  }
  cached = { sky, ridges, heaps, heapsLow, smoke, cloud, flakes, road, trail }
  return cached
}

/** A small ash wagon on the track: its tub on four wheels. */
function wagon(x: number, y: number) {
  return `M${x - 15} ${y - 17}H${x + 15}L${x + 11} ${y - 5}H${x - 11}Z`
}

function TheValleyOfAshes({ uid }: ArtProps) {
  const m = marks()
  const id = { ridges: `${uid}-ridges`, heaps: `${uid}-heaps`, board: `${uid}-board` }
  const legs = (back: number, fore: number) => ({
    far: [
      [-3, -70],
      [-back * 0.45, -38],
      [-back, -4],
    ] as [number, number][],
    near: [
      [3, -70],
      [fore * 0.6, -38],
      [fore, -3],
    ] as [number, number][],
  })
  return (
    <>
      <defs>
        <clipPath id={id.ridges}>
          <path d={RIDGES} />
        </clipPath>
        <clipPath id={id.heaps}>
          <path d={HEAPS} />
        </clipPath>
        <clipPath id={id.board}>
          <rect
            x={BOARD.x0}
            y={BOARD.y0}
            width={BOARD.x1 - BOARD.x0}
            height={BOARD.y1 - BOARD.y0}
          />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [580, 120], push: 1.03 })}>
        {/* the powdery air */}
        <rect x={0} y={0} width={W} height={ROAD} fill={PAPER} />
        <path d={m.sky} fill={INK} />

        {/* the far ridges of ash */}
        <path d={RIDGES} fill={PAPER} />
        <g clipPath={`url(#${id.ridges})`}>
          <path d={m.ridges} stroke={INK} strokeWidth={1.1} strokeDasharray="6 3 2 3 9 4" />
        </g>
        <path d={RIDGES} fill="none" stroke={INK} strokeWidth={LINE.bold} />

        {/* Doctor T. J. Eckleburg's billboard on its posts, high over everything */}
        <path
          d={`M462 ${BOARD.y1}V230M698 ${BOARD.y1}V230M580 ${BOARD.y1}V230M462 ${BOARD.y1 + 34}H698`}
          stroke={PAPER}
          strokeWidth={8}
        />
        <path
          d={`M462 ${BOARD.y1}V230M698 ${BOARD.y1}V230M580 ${BOARD.y1}V230M462 ${BOARD.y1 + 34}H698`}
          stroke={INK}
          strokeWidth={4.6}
        />
        <rect
          x={BOARD.x0}
          y={BOARD.y0}
          width={BOARD.x1 - BOARD.x0}
          height={BOARD.y1 - BOARD.y0}
          fill={PAPER}
          stroke={INK}
          strokeWidth={4}
        />
        <g clipPath={`url(#${id.board})`}>
          {EYES.map(([x, y]) => (
            <g key={x}>
              {/* the eye: its lids, the great iris looking down, the glint */}
              <path
                d={`M${x - 40} ${y}Q${x} ${y - 30} ${x + 40} ${y}Q${x} ${y + 30} ${x - 40} ${y}Z`}
                fill={PAPER}
                stroke={INK}
                strokeWidth={3}
              />
              <circle cx={x} cy={y + 3} r={15} fill={INK} />
              <circle cx={x - 4} cy={y - 1} r={4} fill={PAPER} />
              {/* the spectacles' round rim */}
              <circle cx={x} cy={y} r={36} fill="none" stroke={INK} strokeWidth={6.4} />
            </g>
          ))}
          {/* the bridge over a nonexistent nose, and the arms to either side */}
          <path
            d={`M${EYES[0][0] + 34} ${EYES[0][1] - 12}Q${(EYES[0][0] + EYES[1][0]) / 2} ${EYES[0][1] - 30} ${EYES[1][0] - 34} ${EYES[1][1] - 12}M${EYES[0][0] - 36} ${EYES[0][1] - 4}L${BOARD.x0} ${EYES[0][1] - 10}M${EYES[1][0] + 36} ${EYES[1][1] - 4}L${BOARD.x1} ${EYES[1][1] - 10}`}
            fill="none"
            stroke={INK}
            strokeWidth={6}
          />
          <path d={m.flakes} fill={PAPER} />
        </g>

        {/* ash rising from the ash chimney */}
        <g className="lc-rise" style={timing({ delay: 0.4, dur: 2 })}>
          <g fill={INK} stroke={INK} strokeWidth={3}>
            {m.smoke.map(([cx, cy, r]) => (
              <circle key={cy} cx={cx} cy={cy} r={r} />
            ))}
          </g>
          <g fill={PAPER}>
            {m.smoke.map(([cx, cy, r]) => (
              <circle key={cy} cx={cx} cy={cy} r={r} />
            ))}
          </g>
          <path
            d={
              gouge(CHIMNEY[0] + 4, CHIMNEY[1] - 30, CHIMNEY[0] + 14, CHIMNEY[1] - 36, 0.7) +
              gouge(CHIMNEY[0] + 20, CHIMNEY[1] - 42, CHIMNEY[0] + 32, CHIMNEY[1] - 46, 0.7)
            }
            fill={INK}
          />
        </g>

        {/* the near heaps: hills of ash, one of them in the form of a house */}
        <path d={HEAPS} fill={PAPER} />
        <g clipPath={`url(#${id.heaps})`}>
          <path d={m.heaps} stroke={INK} strokeWidth={1.3} strokeDasharray="7 2 3 2 5 3" />
          <path d={m.heapsLow} stroke={INK} strokeWidth={1.2} strokeDasharray="4 3 6 2" />
        </g>
        <path d={HEAPS} fill="none" stroke={INK} strokeWidth={LINE.bold} />
        {/* the ash house's door and window, so the heap reads as a house */}
        <path d="M156 182h9v16h-9zM176 180h10v9h-10z" fill={INK} />

        {/* the line of gray cars on its track, the ash-gray men climbing up
            with their spades, and the cloud they raise */}
        <path d={`M${TRACK.x0} ${TRACK.y}H${TRACK.x1}`} stroke={PAPER} strokeWidth={1.6} />
        <path
          d={[214, 252, 290, 328, 366, 404].map((x) => wagon(x, TRACK.y)).join('')}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.3}
        />
        <g fill={INK} stroke={PAPER} strokeWidth={1}>
          {[214, 252, 290, 328, 366, 404].flatMap((x) =>
            [x - 7, x + 7].map((wx) => <circle key={wx} cx={wx} cy={TRACK.y - 3} r={2.8} />),
          )}
        </g>
        {(
          [
            [236, 1, 0.34],
            [276, 1, 0.34],
            [314, 1, 0.34],
          ] as [number, 1 | -1, number][]
        ).map(([x, f, s]) => (
          <Person
            key={x}
            at={[x, TRACK.y - 14]}
            scale={s}
            flip={f < 0}
            pose={{
              look: 'man',
              dress: 'paper',
              skin: 'paper',
              hat: 'cap',
              body: { neck: [22, -126], hip: [0, -70] },
              head: { rot: 24 },
              far: {
                pts: [
                  [18, -120],
                  [30, -100],
                  [40, -84],
                ],
                hand: 'grip',
              },
              near: {
                pts: [
                  [24, -120],
                  [36, -96],
                  [46, -76],
                ],
                hand: 'grip',
              },
            }}
          >
            {/* a leaden spade, digging into the wagon */}
            <path d="M30 -104L56 -30" stroke={INK} strokeWidth={4} />
            <path d="M50 -38L64 -42L70 -10L60 -6Z" fill={INK} />
          </Person>
        ))}
        {/* the cloud: one outline round all its billows, like the breath in
            the counting-house */}
        <g className="lc-rise" style={timing({ delay: 0.8, dur: 1.6 })}>
          <g fill={INK} stroke={INK} strokeWidth={3}>
            {m.cloud.map(([cx, cy, r]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
            ))}
          </g>
          <g fill={PAPER}>
            {m.cloud.map(([cx, cy, r]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
            ))}
          </g>
        </g>

        {/* the railway, the train waiting at the halt, and the low whitewashed fence */}
        <path d={`M0 ${RAIL}H${W}V${FENCE}H0Z`} fill={INK} />
        <path d={`M0 ${RAIL + 4}H${W}M0 ${RAIL + 10}H${W}`} stroke={PAPER} strokeWidth={1.4} />
        <path
          d="M0 186H136Q144 186 144 194V246H0Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d="M0 182H138" stroke={PAPER} strokeWidth={2.4} />
        <g fill={PAPER}>
          {[10, 44, 78, 112].map((x) => (
            <rect key={x} x={x} y={198} width={18} height={18} />
          ))}
        </g>
        <path d="M0 232H144" stroke={PAPER} strokeWidth={1.4} />
        <circle cx={30} cy={246} r={6} fill={INK} stroke={PAPER} strokeWidth={1.4} />
        <circle cx={114} cy={246} r={6} fill={INK} stroke={PAPER} strokeWidth={1.4} />
        <path d={`M0 ${FENCE - 4}H${W}M0 ${FENCE + 2}H${W}`} stroke={PAPER} strokeWidth={2.2} />
        <path
          d={Array.from({ length: 30 }, (_, i) => `M${12 + i * 29} ${FENCE - 9}V${FENCE + 6}`).join(
            '',
          )}
          stroke={PAPER}
          strokeWidth={3.2}
        />

        {/* Wilson's small block of brick on the edge of the waste land: a shop
            to let, the all-night restaurant, the garage */}
        <rect
          x={BLOCK.x0}
          y={BLOCK.top}
          width={BLOCK.x1 - BLOCK.x0}
          height={BLOCK.foot - BLOCK.top}
          fill={PAPER}
          stroke={INK}
          strokeWidth={2.4}
        />
        <path
          d={
            Array.from(
              { length: 15 },
              (_, i) => `M${BLOCK.x0} ${BLOCK.top + 12 + i * 6}H${BLOCK.x1}`,
            ).join('') +
            Array.from({ length: 15 }, (_, i) =>
              Array.from({ length: 8 }, (_, j) => {
                const x = BLOCK.x0 + 12 + j * 24 + (i % 2) * 12
                const y = BLOCK.top + 12 + i * 6
                return `M${x} ${y}v6`
              }).join(''),
            ).join('')
          }
          stroke={INK}
          strokeWidth={0.8}
        />
        <path
          d={`M${BLOCK.x0 - 4} ${BLOCK.top}H${BLOCK.x1 + 4}V${BLOCK.top + 7}H${BLOCK.x0 - 4}Z`}
          fill={INK}
        />
        {/* the upper windows */}
        <path
          d="M668 186h16v20h-16zM700 186h16v20h-16zM732 186h16v20h-16zM778 186h16v20h-16zM810 186h16v20h-16z"
          fill={INK}
        />
        {/* the empty shop, the restaurant's door and window, the garage door */}
        <rect x={660} y={226} width={38} height={40} fill={INK} />
        <path d={gouge(664, 232, 692, 260, 0.8)} fill={PAPER} />
        <rect x={706} y={226} width={20} height={46} fill={INK} />
        <rect x={730} y={226} width={26} height={28} fill={INK} />
        <path d="M730 240H756M743 226V254" stroke={PAPER} strokeWidth={1.4} />
        <rect x={766} y={224} width={72} height={48} fill={INK} />
        <rect x={762} y={208} width={80} height={13} fill={INK} />
        <text
          x={802}
          y={218.6}
          textAnchor="middle"
          fontFamily={SERIF}
          fontSize={10}
          fontWeight={700}
          letterSpacing={2.4}
          fill={PAPER}
        >
          REPAIRS
        </text>

        {/* the motor road */}
        <rect x={0} y={ROAD} width={W} height={H - ROAD} fill={PAPER} />
        <path d={m.road} fill={INK} />
        <path d={m.trail} fill={INK} />
        <path d={`M0 ${ROAD}H${W}`} stroke={INK} strokeWidth={2} />

        {/* Nick, following */}
        <Person
          at={[452, 320]}
          scale={0.92}
          pose={{
            look: 'nick',
            head: { rot: -4 },
            legs: legs(20, 20),
            far: {
              pts: [
                [-4, -132],
                [4, -104],
                [16, -84],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -132],
                [-4, -106],
                [-10, -84],
              ],
              hand: 'mitt',
            },
          }}
        />
        {/* Tom, striding ahead towards the garage under the eyes */}
        <Person
          at={[580, 322]}
          scale={0.96}
          pose={{
            look: 'tom',
            body: { neck: [8, -138], hip: [0, -70] },
            head: { at: [14, -160], rot: 6 },
            legs: legs(28, 26),
            far: {
              pts: [
                [4, -132],
                [18, -108],
                [34, -92],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [10, -132],
                [-2, -106],
                [-14, -88],
              ],
              hand: 'mitt',
            },
          }}
        />
      </g>
    </>
  )
}

export const theValleyOfAshes: LinocutArt = { width: W, height: H, Draw: TheValleyOfAshes }
