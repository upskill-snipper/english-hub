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
  wisps,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { mitt } from '../../much-ado-about-nothing/panels/people'
import { Cut, Person, type P, type Pose } from './people'

/**
 * Chapters 11 to 13: "Visits, a fight and an apprenticeship", the fourth
 * moment in the guide's timeline. Of its many visits the panel shows the one
 * that the rest of the novel keeps returning to: the first time Pip is taken
 * into the room of the wedding feast, in Chapter 11, at the instant of its
 * quotation. Every detail is from that chapter in the held text
 * (src/data/full-texts/great-expectations.ts):
 *
 * - "From that room, too, the daylight was completely excluded"; "A fire had
 *   been lately kindled in the damp oldfashioned grate, and it was more
 *   disposed to go out than to burn up, and the reluctant smoke which hung in
 *   the room seemed colder than the clearer air—like our own marsh mist.
 *   Certain wintry branches of candles on the high chimneypiece faintly
 *   lighted the chamber". So the room is dark; the fire in the grate is a few
 *   dull red coals, the smoke hangs across the room in pale wisps, and two
 *   branched candlesticks stand on the high chimneypiece, their flames the
 *   spot colour.
 * - "The most prominent object was a long table with a tablecloth spread on
 *   it, as if a feast had been in preparation when the house and the clocks
 *   all stopped together. An épergne or centre-piece of some kind was in the
 *   middle of this cloth; it was so heavily overhung with cobwebs that its
 *   form was quite undistinguishable; and, as I looked along the yellow
 *   expanse out of which I remember its seeming to grow, like a black fungus,
 *   I saw speckled-legged spiders with blotchy bodies running home to it, and
 *   running out from it". So the long table runs back into the dark, its
 *   cloth printed faded, and in the middle of it the black mass of the cake
 *   rises under its cobwebs, cut in paper, with spiders running on the cloth.
 * - "I heard the mice too, rattling behind the panels ... the blackbeetles
 *   ... groped about the hearth". So the walls are panelled, and two beetles
 *   are on the hearth.
 * - "Miss Havisham laid a hand upon my shoulder. In her other hand she had a
 *   crutch-headed stick on which she leaned, and she looked like the Witch of
 *   the place"; "'What do you think that is?' she asked me, again pointing
 *   with her stick; 'that, where those cobwebs are?'"; "With some vague
 *   misgiving ... I shrank under her touch." So Miss Havisham, the kit's
 *   figure (./people.tsx), stands stooped at the near end of the table, one
 *   hand laid on Pip's shoulder and the other on the crutch of her stick,
 *   leaning on it, and Pip, the same boy as in "First visit to Satis House",
 *   shrinks under her hand, looking where she has pointed.
 *
 * REDRAWN 10 October 2026. She first held the stick out level towards the
 * cake, but her hand had to be raised to her chin to clear Pip's head, and at
 * panel size the stick read as a long pipe in her mouth; and her hand on his
 * shoulder was drawn under him and could not be seen. She now leans on the
 * stick, as the same sentence has her do, and the hand on his shoulder is
 * cut over him (HAVISHAM_HAND).
 *
 * WHAT IS NOT DRAWN. The fight with the pale young gentleman in the garden
 * (Chapter 11) is violence between boys, with blood, and is not shown, nor are
 * the guide's later visits. The quotation is her own word for the thing on
 * the table; her talk in the same chapter of where she will lie when she is
 * dead is not quoted.
 *
 * Seeds: 1401 (the walls), 1402 (the faded cloth), 1403 (the cobwebs), 1404
 * (the smoke), 1405 (the candles' light), 1406 (the floor).
 */

const W = 860
const H = 340
const FLOOR = 292
/** The long table: its near end, its far end, the top of the cloth and its hem. */
const TABLE = { x0: 344, x1: 836, top: 206, hem: 246 }
/** The cake under its cobwebs, in the middle of the cloth. */
const CAKE = { cx: 596, foot: 206, top: 116 }
/** The high chimneypiece and the grate below it. */
const CHIMNEY = { x0: 18, x1: 196, shelf: 120, ax0: 54, ax1: 160, top: 196 }
const CANDLES: [number, number][] = [
  [42, 76],
  [56, 66],
  [70, 76],
  [146, 76],
  [160, 66],
  [174, 76],
]

type Marks = {
  wall: string
  panels: string
  cloth: string
  clothFolds: string
  webs: string
  smoke: string
  candleRays: string
  floor: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot(x - 108, (y - 72) * 1.1) / 260) ** 1.3, 0.05)
  const wall = gougeField(rng(1401), { x0: CHIMNEY.x1, x1: W, y0: 4, y1: FLOOR }, light, {
    spacing: 6.4,
    len: [12, 40],
    gap: [8, 22],
    max: 2.6,
  })
  // The panels of the walls, where the mice rattle: their mouldings cut faint.
  let panels = ''
  for (let x = CHIMNEY.x1 + 14; x < W - 30; x += 74) {
    panels += `M${x} 176H${x + 60}V${FLOOR - 14}H${x}Z`
    panels += `M${x + 6} 182H${x + 54}V${FLOOR - 20}H${x + 6}Z`
  }
  panels += `M${CHIMNEY.x1} 166H${W}`
  // The cloth, "the yellow expanse": white once, printed hatched over.
  const c = rng(1402)
  let cloth = ''
  for (let y = TABLE.top + 3; y < TABLE.hem; y += 3.2)
    for (let x = TABLE.x0 + between(c, 0, 6); x < TABLE.x1; x += between(c, 9, 16))
      cloth += gouge(x, y, x + between(c, 3, 8), y + between(c, -0.3, 0.3), 0.5)
  let clothFolds = ''
  for (let x = TABLE.x0 + 16; x < TABLE.x1; x += between(c, 26, 40))
    clothFolds += wedge(x, TABLE.top + 8, x + between(c, -3, 3), TABLE.hem + 2, 0.4, 2)
  // The cobwebs over the cake and running from it: fine paper strands.
  const w = rng(1403)
  let webs = ''
  // Strands draped from the cake down to the cloth on either side, sagging.
  for (let k = 0; k < 14; k++) {
    const side = k % 2 ? 1 : -1
    const t = between(w, 0.1, 0.9)
    const x0 = CAKE.cx + side * (12 + t * 40)
    const y0 = CAKE.top + 6 + t * 70
    const x1 = CAKE.cx + side * between(w, 70, 150)
    const y1 = TABLE.top + between(w, 2, 10)
    webs += `M${n(x0)} ${n(y0)}Q${n((x0 + x1) / 2)} ${n(Math.max(y0, y1) + between(w, 2, 10))} ${n(x1)} ${n(y1)}`
  }
  // Veils of web hung over the tiers.
  for (let k = 0; k < 7; k++) {
    const y = CAKE.top + 16 + k * 11
    const half = 20 + k * 6
    webs += `M${n(CAKE.cx - half)} ${n(y + 2)}Q${CAKE.cx} ${n(y + 12)} ${n(CAKE.cx + half)} ${n(y + 2)}`
  }
  // A few long strands up into the dark.
  for (let k = 0; k < 4; k++) {
    const x0 = CAKE.cx + between(w, -16, 16)
    webs += `M${n(x0)} ${CAKE.top + 4}Q${n(x0 + between(w, -30, 30))} ${n(CAKE.top - 40)} ${n(x0 + between(w, -80, 80))} 4`
  }
  // Thin and many, so that they hang as a haze and not as three white streaks.
  const smoke = wisps(rng(1404), 9, { x0: 330, x1: 840, y0: 58, y1: 132 }, [1.2, 2.6])
  const candleRays = rays(rng(1405), 108, 72, { from: 40, to: 96, every: 11, width: 1.8 })
  const f = rng(1406)
  let floor = ''
  for (let y = FLOOR + 6; y < H; y += 8 + (y - FLOOR) * 0.1)
    for (let x = between(f, -20, 0); x < W; x += between(f, 40, 90))
      floor += gouge(
        x,
        y,
        x + between(f, 20, 50),
        y + between(f, -0.5, 0.5),
        0.5 + (y - FLOOR) * 0.012,
      )
  cached = { wall, panels, cloth, clothFolds, webs, smoke, candleRays, floor }
  return cached
}

/** A spider running on the cloth: a blotchy body and speckled legs, at (x, y), facing `a` degrees. */
function spider(x: number, y: number, a: number, key: string) {
  return (
    <g key={key} transform={`translate(${x} ${y}) rotate(${a})`}>
      <path
        d="M-3 -2.6L-6.4 -5.6M-1 -3L-2.6 -7M1 -3L2.6 -7M3 -2.6L6.4 -5.6M-3 2.6L-6.4 5.6M-1 3L-2.6 7M1 3L2.6 7M3 2.6L6.4 5.6"
        stroke={INK}
        strokeWidth={0.9}
        strokeLinecap="round"
      />
      <ellipse cx={-1} cy={0} rx={3.6} ry={2.8} fill={INK} />
      <circle cx={3.2} cy={0} r={1.8} fill={INK} />
    </g>
  )
}

/** A wintry branch of candles on the chimneypiece: a stem with three arms. */
function Branch({ x, i }: { x: number; i: number }) {
  return (
    <>
      <path
        d={`M${x} ${CHIMNEY.shelf - 2}V92M${x - 14} 90Q${x - 14} 98 ${x} 98Q${x + 14} 98 ${x + 14} 90M${x} 98V80`}
        fill="none"
        stroke={PAPER}
        strokeWidth={3.2}
      />
      <path
        d={`M${x} ${CHIMNEY.shelf - 2}V92M${x - 14} 90Q${x - 14} 98 ${x} 98Q${x + 14} 98 ${x + 14} 90M${x} 98V80`}
        fill="none"
        stroke={INK}
        strokeWidth={1.6}
      />
      <path d={`M${x - 8} ${CHIMNEY.shelf - 2}H${x + 8}`} stroke={INK} strokeWidth={3} />
      {[-14, 0, 14].map((dx) => {
        const cx = x + dx
        const cy = dx === 0 ? 70 : 80
        return (
          <g key={dx}>
            <rect
              x={cx - 2}
              y={cy - 2}
              width={4}
              height={10}
              fill={PAPER}
              stroke={INK}
              strokeWidth={0.8}
            />
            <path
              className="lc-flicker"
              style={timing({ dur: 0.9, delay: 0.2 + i * 0.3 + (dx + 14) * 0.01 })}
              d={`M${cx} ${cy - 2}C${cx - 2.6} ${cy - 5} ${cx - 2} ${cy - 9} ${cx} ${cy - 12}C${cx + 2} ${cy - 9} ${cx + 2.6} ${cy - 5} ${cx} ${cy - 2}Z`}
              fill={RED}
            />
          </g>
        )
      })}
    </>
  )
}

// ── THE PEOPLE, from the figure kit ─────────────────────────────────────────

/**
 * Miss Havisham, stooped, at the near end of the table: her far hand on the
 * crutch of her stick, which she leans on, and her near arm reaching down to
 * Pip's shoulder. The near hand is not drawn with her (`hand: 'none'`): it is
 * HAVISHAM_HAND, cut after Pip so that it lies on him.
 */
const HAVISHAM_AT: P = [258, 324]
const HAVISHAM_SCALE = 1.3
const HAVISHAM: Pose = {
  look: 'havisham',
  shoe: 'near',
  body: { neck: [8, -126], hip: [0, -78] },
  head: { at: [13, -146], rot: 8 },
  far: {
    pts: [
      [4, -121],
      [7, -98],
      [17, -78],
    ],
    hand: 'grip',
    deg: 60,
  },
  near: {
    pts: [
      [12, -120],
      [22, -101],
      [40, -90],
    ],
    hand: 'none',
  },
}
/** Her crutch-headed stick, in her frame: the shaft to the floor, and the crutch under her hand. */
const STICK = 'M20 -76L30 -2M12 -78L27 -75'
/** Her near hand on Pip's shoulder, in her frame: the wrist, and the way the fingers lie. */
const HAVISHAM_HAND: { wrist: P; deg: number } = { wrist: [40, -90], deg: 30 }

/** Pip, the boy of "First visit to Satis House", his head sunk between his shoulders. */
const PIP_AT: P = [318, 328]
const PIP: Pose = {
  look: 'pip',
  age: 'boy',
  eye: 'wide',
  body: { neck: [1, -91], hip: [0, -52] },
  head: { at: [6, -104], rot: -6 },
  far: {
    pts: [
      [-2, -87],
      [-3, -67],
      [2, -51],
    ],
    hand: 'mitt',
    deg: 80,
  },
  near: {
    pts: [
      [3, -87],
      [4, -67],
      [8, -51],
    ],
    hand: 'mitt',
    deg: 76,
  },
}

function FeastRoom({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-room`
  const { x0, x1, shelf, ax0, ax1, top } = CHIMNEY
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <rect x={0} y={0} width={W} height={FLOOR} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [440, 190], push: 1.03 })}>
        {/* the dark room, faintly lit by the candles on the chimneypiece */}
        <path d={m.wall} fill={PAPER} />
        <path d={m.candleRays} fill={PAPER} />
        <path d={m.panels} fill="none" stroke={PAPER} strokeWidth={0.9} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
        <path d={m.floor} fill={PAPER} />
        <rect x={0} y={FLOOR - 3} width={W} height={3} fill={PAPER} />

        {/* the high chimneypiece, and the damp grate with its reluctant fire */}
        <rect x={x0} y={shelf} width={x1 - x0} height={FLOOR - shelf} fill={INK} />
        <path
          d={
            gouge(x0 + 8, shelf + 20, x0 + 8, FLOOR - 6, 1.4) +
            gouge(x1 - 8, shelf + 20, x1 - 8, FLOOR - 6, 1.4)
          }
          fill={PAPER}
        />
        <rect x={x0 - 8} y={shelf - 6} width={x1 - x0 + 16} height={8} fill={PAPER} />
        <rect x={x0 - 8} y={shelf + 2} width={x1 - x0 + 16} height={2.4} fill={INK} />
        <path
          d={`M${ax0} ${FLOOR}V${top + 18}Q${ax0} ${top} ${ax0 + 18} ${top}H${ax1 - 18}Q${ax1} ${top} ${ax1} ${top + 18}V${FLOOR}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d="M78 262H136M80 268H134M84 258V274M96 258V274M108 258V274M120 258V274M132 258V274"
          stroke={PAPER}
          strokeWidth={1.3}
        />
        <g fill={RED}>
          <circle className="lc-glow" cx={96} cy={256} r={3} />
          <circle cx={110} cy={257} r={2.4} />
          <circle className="lc-glow" style={timing({ delay: 0.8 })} cx={121} cy={256} r={2.6} />
        </g>
        {/* the blackbeetles on the hearth */}
        <g fill={INK} stroke={PAPER} strokeWidth={0.9}>
          <ellipse cx={70} cy={288} rx={4.4} ry={2.6} />
          <ellipse cx={150} cy={289} rx={4} ry={2.4} />
        </g>
        <Branch x={56} i={0} />
        <Branch x={160} i={1} />

        {/* the long table, its cloth spread, faded */}
        <path
          d={`M${TABLE.x0 + 12} ${TABLE.hem}V${FLOOR - 2}M${TABLE.x1 - 14} ${TABLE.hem}V${FLOOR - 4}M${(TABLE.x0 + TABLE.x1) / 2} ${TABLE.hem}V${FLOOR - 3}`}
          stroke={INK}
          strokeWidth={7}
        />
        <path
          d={`M${TABLE.x0 + 12} ${TABLE.hem}V${FLOOR - 2}M${TABLE.x1 - 14} ${TABLE.hem}V${FLOOR - 4}M${(TABLE.x0 + TABLE.x1) / 2} ${TABLE.hem}V${FLOOR - 3}`}
          stroke={PAPER}
          strokeWidth={1}
          opacity={0}
        />
        <path
          d={`M${TABLE.x0} ${TABLE.top}H${TABLE.x1}V${TABLE.hem}L${TABLE.x1 - 20} ${TABLE.hem + 3}L${TABLE.x0 + 20} ${TABLE.hem + 2}L${TABLE.x0} ${TABLE.hem}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <path d={m.cloth} fill={INK} />
        <path d={m.clothFolds} fill={INK} />
        <path d={`M${TABLE.x0} ${TABLE.top + 2}H${TABLE.x1}`} stroke={INK} strokeWidth={1.2} />

        {/* the bride-cake under its cobwebs, "like a black fungus" */}
        <path
          d={`M${CAKE.cx - 58} ${CAKE.foot}C${CAKE.cx - 60} ${CAKE.foot - 18} ${CAKE.cx - 50} ${CAKE.foot - 30} ${CAKE.cx - 42} ${CAKE.foot - 36}C${CAKE.cx - 44} ${CAKE.foot - 52} ${CAKE.cx - 34} ${CAKE.foot - 60} ${CAKE.cx - 26} ${CAKE.foot - 64}C${CAKE.cx - 28} ${CAKE.top + 8} ${CAKE.cx - 12} ${CAKE.top} ${CAKE.cx} ${CAKE.top}C${CAKE.cx + 14} ${CAKE.top} ${CAKE.cx + 28} ${CAKE.top + 10} ${CAKE.cx + 26} ${CAKE.foot - 64}C${CAKE.cx + 36} ${CAKE.foot - 58} ${CAKE.cx + 44} ${CAKE.foot - 50} ${CAKE.cx + 42} ${CAKE.foot - 36}C${CAKE.cx + 52} ${CAKE.foot - 30} ${CAKE.cx + 62} ${CAKE.foot - 18} ${CAKE.cx + 60} ${CAKE.foot}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <g clipPath={`url(#${clip})`}>
          <path d={m.webs} fill="none" stroke={PAPER} strokeWidth={0.9} />
        </g>
        {spider(520, 222, 200, 's1')}
        {spider(668, 226, -20, 's2')}
        {spider(700, 214, 10, 's3')}
        {spider(470, 230, 170, 's4')}
        {spider(560, 236, 260, 's5')}

        {/* "the reluctant smoke which hung in the room ... like our own marsh mist" */}
        <g className="lc-drift" style={timing({ dur: 3.8 })}>
          <path d={m.smoke} fill={PAPER} />
        </g>

        {/* Miss Havisham, leaning on her crutch-headed stick */}
        <Person at={HAVISHAM_AT} scale={HAVISHAM_SCALE} pose={HAVISHAM}>
          <path d={STICK} fill="none" stroke={PAPER} strokeWidth={5.6} strokeLinecap="round" />
          <path d={STICK} fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />
        </Person>

        {/* Pip, shrinking under her touch, looking where she has pointed */}
        <Person at={PIP_AT} scale={1.3} pose={PIP} />

        {/* her hand laid on his shoulder, cut over him so that it shows */}
        <Cut
          transform={`translate(${HAVISHAM_AT[0]} ${HAVISHAM_AT[1]}) scale(${n(HAVISHAM_SCALE * 0.98)})`}
          parts={[{ ...mitt(HAVISHAM_HAND.wrist, HAVISHAM_HAND.deg, 0.94 * 0.95), tone: 'paper' }]}
        />
      </g>
    </>
  )
}

export const visitsAFightAndAnApprenticeship: LinocutArt = { width: W, height: H, Draw: FeastRoom }
