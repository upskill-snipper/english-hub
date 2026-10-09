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
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, seatedBody, seatedLegs } from './people'

/**
 * Chapter I: "Dinner in East Egg", the first moment in the guide's timeline.
 * The moment's line is Daisy's, and the panel is drawn at the place and hour
 * she says it: after dinner, on the front porch in the dark, while Tom and
 * Jordan sit in the lit room behind. Every detail is from the held text (the
 * 1925 first edition, src/data/full-texts/the-great-gatsby.ts):
 *
 * - "Tom and Miss Baker, with several feet of twilight between them, strolled
 *   back into the library ... while ... I followed Daisy around a chain of
 *   connecting verandas to the porch in front. In its deep gloom we sat down
 *   side by side on a wicker settee." So the porch is black, and Nick and
 *   Daisy sit side by side on a settee whose wicker is cut as a weave.
 * - "Daisy took her face in her hands as if feeling its lovely shape, and her
 *   eyes moved gradually out into the velvet dusk." So she leans forward,
 *   her elbows on her knees and her chin and jaw in her hands, her eyes open,
 *   looking out past the porch column at the dusk over the lawn and the bay
 *   ("a cheerful red-and-white Georgian Colonial mansion, overlooking the
 *   bay. The lawn started at the beach and ran toward the front door").
 *   (Her hands were first cut over her cheek; at panel size they covered her
 *   mouth and read as a woman weeping or shocked, which the text does not
 *   say. They are under her jaw now, clear of the mouth.)
 * - Daisy is cut in paper, face, arms and dress: "They were both in white",
 *   "her glowing face" (the kit, ./people.tsx). Nick, beside her, is turned
 *   to her, "trying to look pleasantly interested".
 * - "Inside, the crimson room bloomed with light. Tom and Miss Baker sat at
 *   either end of the long couch and she read aloud to him from the Saturday
 *   Evening Post ... The lamp-light, bright on his boots and dull on the
 *   autumn-leaf yellow of her hair, glinted along the paper as she turned a
 *   page." So through the French window ("a bright rosy-colored space,
 *   fragilely bound into the house by French windows at either end") the
 *   room is printed in the spot colour, a standard lamp blooms in paper rays,
 *   Tom sits at one end of the long couch in his riding clothes and boots,
 *   and Jordan, in white, upright, her pale hair, holds the magazine open at
 *   the other. The lamp's light falls out through the panes onto the porch.
 *
 * Red is the crimson room, and only that: a broad field behind the people in
 * the window, never a small mark near a face. Daisy's "bright passionate
 * mouth" is left to the words. Tom's talk at dinner is neither quoted nor
 * drawn. Nothing is taken from a film, television or stage production.
 * Seeds: 1101 (the wall), 1102 (the dusk), 1103 (the lamp), 1104 (the floor),
 * 1106 (the stars).
 */

const W = 860
const H = 340
/** The porch floor's front edge, and the ceiling's lower edge. */
const FLOOR = 284
const CEIL = 16
/** The French window into the crimson room. */
const WIN = { x0: 34, x1: 276, y0: 40 }
/** The porch column, and the opening on the dusk beyond it. */
const COL = { x0: 676, x1: 706 }
/** The far shore on the bay, and where the lawn begins below the water. */
const HORIZON = 204
const LAWN = 226
/** The settee's back, from the floor of its seat up to its rolled rim. */
const SETTEE = 'M322 266V214Q322 160 382 156Q480 148 578 156Q638 160 638 214V266Z'

type Marks = {
  wall: string
  glow: string
  floor: string
  spill: string
  lamp: string
  wicker: string
  stars: string
  bay: string
  grass: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The porch wall in deep gloom: barely lit, a little more by the window.
  const wall = gougeField(
    rng(1101),
    { x0: WIN.x1 + 8, x1: COL.x0, y0: CEIL + 6, y1: FLOOR - 4 },
    (x, y) => Math.max(0.05, clamp(1 - Math.hypot(x - WIN.x1, (y - 210) * 0.7) / 200) * 0.4),
    { spacing: 7, len: [14, 50], gap: [8, 24], max: 2.6 },
  )
  // The velvet dusk: dark overhead, paling only low down over the bay.
  const glow = gougeField(
    rng(1102),
    { x0: COL.x1, x1: W, y0: 118, y1: HORIZON - 2 },
    (_x, y) => Math.pow(clamp((y - 118) / (HORIZON - 120)), 1.4) * 0.95,
    { spacing: 4.4, len: [10, 34], gap: [3, 12], max: 2.6 },
  )
  // The porch floor: boards running out from the house, in the gloom.
  const r = rng(1104)
  let floor = ''
  const V: [number, number] = [470, 120]
  for (let xt = -420; xt < 1300; xt += 34) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    floor += wedge(xt, FLOOR, xb + between(r, -2, 2), H, 0.6, 1.6 + between(r, 0, 0.6))
  }
  // The lamp's light out through the panes onto the boards.
  let spill = ''
  for (let y = FLOOR + 4; y < H - 4; y += 4.2) {
    const k = (y - FLOOR) / (H - FLOOR)
    const x0 = WIN.x0 + 30 + k * 60
    const x1 = WIN.x1 - 4 + k * 130
    let x = x0 + between(r, 0, 8)
    while (x < x1) {
      const len = between(r, 14, 40)
      spill += gouge(x, y, Math.min(x + len, x1), y + between(r, -0.5, 0.5), 0.5 + (1 - k) * 1.2)
      x += len + between(r, 4, 12)
    }
  }
  // "the crimson room bloomed with light": rays from the lamp's shade.
  const lamp = rays(rng(1103), 185, 130, { from: 24, to: 150, every: 7, width: 3 })
  // The wicker: a lattice of cane crossing both ways, clipped to the settee.
  let wicker = ''
  for (let k = -150; k < 330; k += 11) {
    wicker += `M${n(322 + k)} 270L${n(322 + k + 124)} 146`
    wicker += `M${n(322 + k)} 146L${n(322 + k + 124)} 270`
  }
  const rs = rng(1106)
  let stars = ''
  for (let i = 0; i < 12; i++) {
    const x = between(rs, COL.x1 + 12, W - 16)
    const y = between(rs, 94, 150)
    const rad = between(rs, 1.1, 1.8)
    stars += `M${n(x - rad)} ${n(y)}a${n(rad)} ${n(rad)} 0 1 0 ${n(rad * 2)} 0a${n(rad)} ${n(rad)} 0 1 0 ${n(-rad * 2)} 0Z`
  }
  // The bay below the far shore: pale water with the ripples cut dark.
  let bay = ''
  for (let y = HORIZON + 8; y < LAWN - 2; y += 4) {
    let x = COL.x1 + between(r, -6, 10)
    while (x < W) {
      const len = between(r, 12, 34)
      bay += gouge(x, y, x + len, y + 0.3, 0.6 + (y - HORIZON) * 0.04)
      x += len + between(r, 10, 26)
    }
  }
  // The lawn's edge catching the last of the light.
  let grass = ''
  for (let x = COL.x1 + 4; x < W; x += 9) grass += gouge(x, LAWN + 6, x + 6, LAWN + 5, 0.7)
  cached = { wall, glow, floor, spill, lamp, wicker, stars, bay, grass }
  return cached
}

function DinnerInEastEgg({ uid }: ArtProps) {
  const m = marks()
  const id = { win: `${uid}-win`, dusk: `${uid}-dusk`, settee: `${uid}-settee` }
  const panes = { x0: WIN.x0 + 8, x1: WIN.x1 - 8, y0: WIN.y0 + 8 }
  return (
    <>
      <defs>
        <clipPath id={id.win}>
          <rect x={panes.x0} y={panes.y0} width={panes.x1 - panes.x0} height={FLOOR - panes.y0} />
        </clipPath>
        <clipPath id={id.dusk}>
          <rect x={COL.x1} y={CEIL} width={W - COL.x1} height={FLOOR - CEIL} />
        </clipPath>
        <clipPath id={id.settee}>
          <path d={SETTEE} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [470, 200], push: 1.03 })}>
        {/* the porch in its deep gloom */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={CEIL - 3} width={W} height={2.4} fill={PAPER} />

        {/* the velvet dusk beyond the column: stars, the paling sky, the far
            shore, the pale bay, the dark lawn */}
        <g clipPath={`url(#${id.dusk})`}>
          <path d={m.stars} fill={PAPER} />
          <path d={m.glow} fill={PAPER} />
          <rect
            x={COL.x1}
            y={HORIZON + 2}
            width={W - COL.x1}
            height={LAWN - HORIZON - 2}
            fill={PAPER}
          />
          <path d={m.bay} fill={INK} />
          <path
            d={`M${COL.x1} ${HORIZON + 4}Q${COL.x1 + 60} ${HORIZON - 4} ${W} ${HORIZON + 1}V${HORIZON + 6}Q${COL.x1 + 70} ${HORIZON + 4} ${COL.x1} ${HORIZON + 8}Z`}
            fill={INK}
          />
          <path
            d={`M${COL.x1} ${LAWN + 2}Q${COL.x1 + 80} ${LAWN - 4} ${W} ${LAWN + 4}V${FLOOR}H${COL.x1}Z`}
            fill={INK}
          />
          <path d={m.grass} fill={PAPER} />
        </g>

        {/* the porch column, dark in the gloom, its fluting cut in paper, with
            its base and capital */}
        <rect
          x={COL.x0}
          y={CEIL}
          width={COL.x1 - COL.x0}
          height={FLOOR - CEIL}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={
            gouge(COL.x0 + 8, CEIL + 22, COL.x0 + 8, FLOOR - 18, 1.2) +
            gouge(COL.x0 + 15, CEIL + 22, COL.x0 + 15, FLOOR - 18, 1.6) +
            gouge(COL.x0 + 22, CEIL + 22, COL.x0 + 22, FLOOR - 18, 1.2)
          }
          fill={PAPER}
        />
        <rect
          x={COL.x0 - 6}
          y={CEIL}
          width={COL.x1 - COL.x0 + 12}
          height={10}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect
          x={COL.x0 - 6}
          y={FLOOR - 12}
          width={COL.x1 - COL.x0 + 12}
          height={12}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />

        {/* the French window: the crimson room behind its panes */}
        <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={FLOOR - WIN.y0} fill={PAPER} />
        <rect
          x={panes.x0}
          y={panes.y0}
          width={panes.x1 - panes.x0}
          height={FLOOR - panes.y0}
          fill={RED}
        />
        <g clipPath={`url(#${id.win})`}>
          {/* the lamp's bloom on the crimson walls */}
          <path d={m.lamp} fill={PAPER} />
          {/* the rug on the floor */}
          <path d={`M${panes.x0} 262H${panes.x1}V${FLOOR}H${panes.x0}Z`} fill={INK} />
          <path d={gouge(60, 268, 256, 270, 1) + gouge(50, 276, 266, 278, 0.9)} fill={PAPER} />
          {/* the standard lamp, its shade lit */}
          <path d="M185 154V262M175 262H195" stroke={INK} strokeWidth={3.4} fill="none" />
          <path d="M169 154L201 154L193 122L177 122Z" fill={PAPER} stroke={INK} strokeWidth={1.2} />
          {/* the long couch */}
          <path
            d="M46 198Q46 188 56 188H254Q264 188 264 198V250H46Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
          />
          <path
            d={
              gouge(60, 216, 252, 216, 1) +
              gouge(118, 196, 118, 244, 0.7) +
              gouge(192, 196, 192, 244, 0.7)
            }
            fill={PAPER}
          />
          <path
            d="M40 216Q40 208 50 208Q60 208 60 218V252H40ZM250 218Q250 208 260 208Q270 208 270 216V252H250Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
          />
          <path d="M52 250V262M258 250V262" stroke={INK} strokeWidth={4} />

          {/* Tom at one end, in his riding clothes, his boots in the lamp-light */}
          <Person
            at={[74, 274]}
            scale={0.6}
            pose={{
              look: 'tom',
              riding: true,
              body: seatedBody(58, -6),
              head: { rot: 6 },
              legs: {
                far: [
                  [-2, -60],
                  [34, -62],
                  [52, -4],
                ],
                near: [
                  [2, -60],
                  [40, -60],
                  [62, -4],
                ],
              },
              far: {
                pts: [
                  [-8, -124],
                  [-14, -96],
                  [4, -80],
                ],
                hand: 'mitt',
              },
              near: {
                pts: [
                  [-2, -124],
                  [6, -96],
                  [26, -72],
                ],
                hand: 'mitt',
                deg: 10,
              },
            }}
          />
          {/* Jordan at the other end, upright, reading the magazine aloud */}
          <Person
            at={[244, 274]}
            scale={0.62}
            flip
            pose={{
              look: 'jordan',
              seated: true,
              body: seatedBody(58, -2, true),
              legs: {
                far: [
                  [-2, -60],
                  [30, -62],
                  [28, -4],
                ],
                near: [
                  [2, -60],
                  [34, -60],
                  [32, -4],
                ],
              },
              far: {
                pts: [
                  [-4, -106],
                  [6, -82],
                  [30, -96],
                ],
                hand: 'grip',
                deg: -40,
              },
              near: {
                pts: [
                  [2, -106],
                  [14, -80],
                  [34, -88],
                ],
                hand: 'grip',
                deg: -30,
              },
            }}
          >
            {/* the Saturday Evening Post, held open */}
            <path d="M24 -112L46 -118L48 -86L27 -82Z" fill={PAPER} stroke={INK} strokeWidth={1.4} />
            <path
              d="M28 -106L42 -110M28.6 -100L43 -104M29.2 -94L43.6 -98"
              stroke={INK}
              strokeWidth={1.1}
            />
          </Person>
        </g>
        {/* the window's frame and glazing bars, white paint catching the light */}
        <g fill={PAPER}>
          <rect x={WIN.x0} y={WIN.y0} width={8} height={FLOOR - WIN.y0} />
          <rect x={WIN.x1 - 8} y={WIN.y0} width={8} height={FLOOR - WIN.y0} />
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={8} />
          <rect x={(WIN.x0 + WIN.x1) / 2 - 3} y={WIN.y0} width={6} height={FLOOR - WIN.y0} />
          <rect x={panes.x0} y={104} width={panes.x1 - panes.x0} height={3} />
          <rect x={panes.x0} y={160} width={panes.x1 - panes.x0} height={3} />
          <rect x={94} y={panes.y0} width={3} height={FLOOR - panes.y0} />
          <rect x={214} y={panes.y0} width={3} height={FLOOR - panes.y0} />
        </g>
        <rect
          x={WIN.x0 - 1}
          y={WIN.y0 - 1}
          width={WIN.x1 - WIN.x0 + 2}
          height={FLOOR - WIN.y0 + 1}
          fill="none"
          stroke={INK}
          strokeWidth={1.4}
        />

        {/* the porch floor in the gloom, and the lamp-light spilled on it */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
        <path d={m.floor} fill={PAPER} />
        <path d={m.spill} fill={PAPER} />
        <rect x={0} y={FLOOR - 1.4} width={W} height={2.4} fill={PAPER} />

        {/* the wicker settee */}
        <path d={SETTEE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d={m.wicker}
          clipPath={`url(#${id.settee})`}
          fill="none"
          stroke={PAPER}
          strokeWidth={0.9}
        />
        <path
          d="M330 214Q330 168 384 164Q480 156 576 164Q630 168 630 214"
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d="M316 262H644V276H316Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={gouge(320, 269, 640, 269, 0.9)} fill={PAPER} />
        <path d="M326 276L322 296M634 276L638 296" stroke={PAPER} strokeWidth={8} />
        <path d="M326 276L322 296M634 276L638 296" stroke={INK} strokeWidth={5} />

        {/* Nick, turned to her, listening */}
        <Person
          at={[388, 296]}
          scale={1.14}
          pose={{
            look: 'nick',
            body: seatedBody(44, 6),
            head: { rot: 10 },
            legs: seatedLegs(44, 38),
            far: {
              pts: [
                [2, -108],
                [10, -80],
                [32, -58],
              ],
              hand: 'mitt',
              deg: 14,
            },
            near: {
              pts: [
                [8, -108],
                [16, -80],
                [38, -56],
              ],
              hand: 'mitt',
              deg: 16,
            },
          }}
        />

        {/* Daisy, in white, her chin in her hands, looking out into the dusk */}
        <Person
          at={[512, 296]}
          scale={1.14}
          pose={{
            look: 'daisy',
            seated: true,
            body: { hip: [0, -48], neck: [18, -96] },
            head: { at: [27, -114], rot: -4 },
            legs: {
              far: [
                [-2, -48],
                [30, -52],
                [28, -4],
              ],
              near: [
                [2, -48],
                [36, -50],
                [34, -4],
              ],
            },
            far: {
              pts: [
                [16, -91],
                [31, -58],
                [40, -91],
              ],
              hand: 'mitt',
              deg: -84,
            },
            near: {
              pts: [
                [20, -91],
                [37, -58],
                [37, -90],
              ],
              hand: 'mitt',
              deg: -92,
            },
          }}
        />
      </g>
    </>
  )
}

export const dinnerInEastEgg: LinocutArt = { width: W, height: H, Draw: DinnerInEastEgg }
