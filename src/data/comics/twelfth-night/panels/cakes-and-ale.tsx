import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Cup, Person, seatedBody, seatedLegs } from './people'

/**
 * Act 2, Scene 3: "Cakes and ale", the eighth moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1526, src/data/full-texts/twelfth-night.ts):
 *
 * - "A Room in Olivia's House." "not to be abed after midnight, is to be up
 *   betimes"; Malvolio's "at this time of night". So it is after midnight:
 *   the room is dark but for one candle on the table, its flame the spot
 *   colour, and a window shows a crescent moon and stars.
 * - "Marian, I say! a stoup of wine"; "let us therefore eat and drink"; and
 *   the scene's own words, "cakes and ale". So on the table are a jug, cups
 *   and a plate of cakes. Sir Toby holds a cup, and Sir Andrew has one by
 *   him; nobody is shown the worse for drink, and nothing about the drinking
 *   is made to look fine.
 * - "Enter Malvolio. My masters, are you mad? ... Is there no respect of
 *   place, persons, nor time, in you?" So Malvolio has stepped in from the dark
 *   doorway in his steward's black, with his chain, and stands stiffly, his
 *   chin up. (A finger raised in rebuke was tried, and at panel size a single
 *   raised finger could be misread; his bearing does the work instead.)
 * - "Out o' tune? sir, ye lie. Art any more than a steward? Dost thou think,
 *   because thou art virtuous, there shall be no more cakes and ale?" Sir
 *   Toby, in his riding boots ("so be these boots too", 1.3), has turned on
 *   him and points at him, cup in his other hand.
 * - Maria has just begged "Nay, good Sir Toby": she stands behind him, one
 *   open hand raised to quieten him. Feste, in his motley and fool's hood, is
 *   singing at Malvolio ("O, no, no, no, no, you dare not"), one hand lifted
 *   with the song. Sir Andrew, the tallest of them even sitting, his flaxen
 *   hair hanging straight, sits at the end of the table.
 *
 * The people are cut from ./people.tsx. Nothing is taken from a film,
 * television or stage production. Seeds: 2801 (the wall), 2802 (the
 * floor), 2803 (the candle's light), 2804 (the stars).
 */

const W = 860
const H = 340
/** The foot of the back wall. */
const SKIRT = 250
const FEET = 326
/** The candle's flame, on the table. */
const FLAME: Pt = [498, 176]
/** The table top: its ends, its front edge and its back edge. */
const TABLE = { x0: 400, x1: 612, front: 226, back: 208 }
/** The window on the night, between the doorway and Sir Toby. */
const WIN = { x: 170, y: 30, w: 112, h: 90 }

type Marks = { wall: string; floor: string; candleRays: string; stars: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The room is dark but for the candle; the cuts in the wall follow its light.
  const light = (x: number, y: number) =>
    clamp(1 - Math.hypot((x - FLAME[0]) * 0.8, (y - FLAME[1]) * 1.1) / 300) * 0.95
  const wall = gougeField(rng(2801), { x0: 0, x1: W, y0: 6, y1: SKIRT - 2 }, light, {
    spacing: 6,
    len: [16, 60],
    gap: [6, 22],
    max: 3.6,
  })
  // The floorboards, running back to a point behind the table.
  const r = rng(2802)
  let floor = ''
  const V: Pt = [506, 60]
  for (let xt = -700; xt < 1600; xt += 34) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (SKIRT + 4 - V[1]))
    const L = light(xt, SKIRT + 20)
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        SKIRT + 4 + (H - SKIRT - 4) * t0,
        xt + (xb - xt) * t1,
        SKIRT + 4 + (H - SKIRT - 4) * t1,
        0.5 + (1 - L) * 1.4 + t0 * 1.6,
        0.5 + (1 - L) * 1.4 + t1 * 1.6,
      )
      t0 = t1 + between(r, 0.02, 0.08)
    }
  }
  const candleRays = rays(rng(2803), FLAME[0], FLAME[1] - 4, {
    from: 16,
    to: 100,
    every: 7,
    width: 2,
  })
  const s = rng(2804)
  let stars = ''
  for (let i = 0; i < 8; i++) {
    const x = between(s, WIN.x + 10, WIN.x + WIN.w - 40)
    const y = between(s, WIN.y + 10, WIN.y + WIN.h - 10)
    stars += gouge(x - 2.6, y, x + 2.6, y, 0.8) + gouge(x, y - 2.6, x, y + 2.6, 0.8)
  }
  cached = { wall, floor, candleRays, stars }
  return cached
}

const rect = (x: number, y: number, w: number, h: number) =>
  `M${n(x)} ${n(y)}h${n(w)}v${n(h)}h${n(-w)}Z`

/** A round cake on the plate: paper, with its crust cut in ink. */
const cake = (cx: number, cy: number) => `M${n(cx - 7)} ${n(cy)}a7 5 0 1 0 14 0a7 5 0 1 0 -14 0Z`

function CakesAndAle({ uid }: ArtProps) {
  const m = marks()
  const win = `${uid}-win`
  return (
    <>
      <defs>
        <clipPath id={win}>
          <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [480, 200], push: 1.03 })}>
        {/* the dark room, lit by one candle */}
        <path d={m.wall} fill={PAPER} />
        <g className="lc-fade-in" style={timing({ dur: 1.4 })}>
          <path d={m.candleRays} fill={PAPER} />
        </g>
        {/* the window on the night: a crescent moon and stars */}
        <rect x={WIN.x - 8} y={WIN.y - 8} width={WIN.w + 16} height={WIN.h + 16} fill={PAPER} />
        <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} fill={INK} />
        <g clipPath={`url(#${win})`}>
          <path d={m.stars} fill={PAPER} />
          <path
            d={`M${WIN.x + 92} ${WIN.y + 18}A17 17 0 1 0 ${WIN.x + 106} ${WIN.y + 46}A13.4 13.4 0 1 1 ${WIN.x + 92} ${WIN.y + 18}Z`}
            fill={PAPER}
          />
        </g>
        <path
          d={`M${WIN.x + WIN.w / 2} ${WIN.y}V${WIN.y + WIN.h}M${WIN.x} ${WIN.y + 44}H${WIN.x + WIN.w}`}
          stroke={PAPER}
          strokeWidth={3}
        />
        <rect x={WIN.x - 12} y={WIN.y + WIN.h + 6} width={WIN.w + 24} height={6} fill={PAPER} />

        {/* the doorway on the left, where Malvolio has come in from the dark house */}
        <path d={rect(24, 66, 124, SKIRT - 66)} fill={PAPER} />
        <path d={rect(34, 76, 104, SKIRT - 76)} fill={INK} />
        <path
          d={gouge(40, 84, 40, SKIRT - 6, 0.8) + gouge(132, 84, 132, SKIRT - 6, 0.8)}
          fill={PAPER}
        />

        {/* the skirting and the floor */}
        <rect x={0} y={SKIRT} width={W} height={5} fill={PAPER} />
        <rect x={0} y={SKIRT + 5} width={W} height={H - SKIRT - 5} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the table */}
        <path
          d={`M${TABLE.x0} ${TABLE.front}L${TABLE.x0 + 14} ${TABLE.back}H${TABLE.x1 - 14}L${TABLE.x1} ${TABLE.front}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path d={rect(TABLE.x0, TABLE.front, TABLE.x1 - TABLE.x0, 9)} fill={INK} />
        <path
          d={gouge(TABLE.x0 + 6, TABLE.front + 4.4, TABLE.x1 - 6, TABLE.front + 4.4, 1)}
          fill={PAPER}
        />
        <path
          d={`M${TABLE.x0 + 12} ${TABLE.front + 9}V${FEET - 4}M${TABLE.x1 - 12} ${TABLE.front + 9}V${FEET - 4}M${TABLE.x0 + 12} ${FEET - 30}H${TABLE.x1 - 12}`}
          stroke={INK}
          strokeWidth={7}
        />
        {/* the candle in its stick */}
        <rect
          x={FLAME[0] - 5}
          y={FLAME[1] + 7}
          width={10}
          height={24}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <path d={`M${FLAME[0] - 13} ${FLAME[1] + 31}h26l-4 5h-18Z`} fill={INK} />
        <path
          className="lc-flicker"
          d={`M${FLAME[0]} ${FLAME[1] + 7}C${FLAME[0] - 6} ${FLAME[1]} ${FLAME[0] - 4} ${FLAME[1] - 7} ${FLAME[0]} ${FLAME[1] - 17}C${FLAME[0] + 4} ${FLAME[1] - 7} ${FLAME[0] + 6} ${FLAME[1]} ${FLAME[0]} ${FLAME[1] + 7}Z`}
          fill={RED}
        />
        {/* the jug */}
        <path
          d="M434 218C428 202 428 188 436 178H460C468 188 468 202 462 218Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <path d="M462 186C474 186 476 204 463 208" fill="none" stroke={INK} strokeWidth={3.4} />
        <path d="M432 178L428 172H442Z" fill={INK} />
        <path d={gouge(440, 186, 438, 210, 1.3)} fill={PAPER} />
        {/* a cup */}
        <Cup at={[538, 216]} scale={1.2} />
        {/* the plate of cakes */}
        <path d="M546 216Q576 226 606 216L602 222Q576 230 550 222Z" fill={INK} />
        <g fill={PAPER} stroke={INK} strokeWidth={1.3}>
          <path d={cake(562, 212)} />
          <path d={cake(590, 212)} />
          <path d={cake(576, 204)} />
        </g>

        {/* Malvolio, just in from the doorway, stiff, his chin up */}
        <Person
          at={[100, FEET]}
          scale={1.04}
          pose={{
            look: 'malvolio',
            head: { rot: -6 },
            far: {
              pts: [
                [-4, -128],
                [-9, -100],
                [-6, -74],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [9, -100],
                [7, -74],
              ],
            },
          }}
        />
        {/* Maria behind Sir Toby, one open hand raised to quieten him */}
        <Person
          at={[378, FEET]}
          scale={1}
          flip
          pose={{
            look: 'maria',
            head: { rot: 2 },
            far: {
              pts: [
                [-3, -124],
                [-7, -100],
                [-4, -84],
              ],
            },
            near: {
              pts: [
                [4, -124],
                [20, -112],
                [32, -132],
              ],
              hand: 'open',
              deg: -66,
              thumb: -1,
              size: 15,
              spread: 21,
            },
          }}
        />
        {/* Sir Toby, turned on Malvolio, pointing, his cup in his other hand */}
        <Person
          at={[272, FEET]}
          scale={1.04}
          flip
          pose={{
            look: 'sir-toby',
            legs: {
              far: [
                [-3, -70],
                [-8, -36],
                [-12, -3],
              ],
              near: [
                [3, -70],
                [10, -36],
                [14, -3],
              ],
            },
            far: {
              pts: [
                [-4, -128],
                [-12, -104],
                [2, -98],
              ],
              hand: 'grip',
              deg: -10,
            },
            near: {
              pts: [
                [5, -128],
                [26, -132],
                [46, -146],
              ],
              hand: 'point',
              deg: -18,
            },
          }}
        >
          <Cup at={[8, -100]} scale={1.15} />
        </Person>
        {/* the stool Sir Andrew sits on */}
        <path d="M622 276H678M628 276L624 324M672 276L676 324" stroke={PAPER} strokeWidth={9} />
        <path d="M622 276H678M628 276L624 324M672 276L676 324" stroke={INK} strokeWidth={5.6} />
        {/* Sir Andrew, seated at the end of the table, his cup by him */}
        <Person
          at={[650, FEET]}
          scale={1}
          flip
          pose={{
            look: 'sir-andrew',
            body: seatedBody(52, 4),
            legs: seatedLegs(52, 30),
            far: {
              pts: [
                [0, -114],
                [-6, -90],
                [8, -82],
              ],
            },
            near: {
              pts: [
                [6, -114],
                [22, -98],
                [38, -100],
              ],
              hand: 'grip',
              deg: -4,
            },
          }}
        >
          <Cup at={[44, -98]} scale={1.1} />
        </Person>
        {/* Feste, singing at Malvolio, one hand lifted with the song */}
        <Person
          at={[770, FEET]}
          scale={1.02}
          flip
          pose={{
            look: 'feste',
            head: { rot: -6 },
            far: {
              pts: [
                [-4, -128],
                [-8, -100],
                [-5, -74],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [28, -124],
                [40, -154],
              ],
              hand: 'open',
              deg: -72,
              thumb: 1,
              size: 15,
              spread: 20,
            },
          }}
        />
      </g>
    </>
  )
}

export const cakesAndAle: LinocutArt = { width: W, height: H, Draw: CakesAndAle }
