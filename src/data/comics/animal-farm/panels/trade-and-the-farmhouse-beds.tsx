import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { EndWall, type WallLine } from './end-wall'
import { Horse, Muriel, Pig, Wolfdog } from './people'

/**
 * Chapter 6: "Trade and the farmhouse beds", the seventeenth moment in the
 * guide's timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "It was about this time that the pigs suddenly moved into the farmhouse
 *   and took up their residence there." "the pigs not only took their meals
 *   in the kitchen and used the drawing-room as a recreation room, but also
 *   slept in the beds." "We have removed the sheets from the farmhouse beds,
 *   and sleep between blankets." So the farmhouse stands behind the yard, and
 *   through an upstairs window a pig lies asleep in a bed under a blanket.
 * - "Clover, who thought she remembered a definite ruling against beds, went
 *   to the end of the barn and tried to puzzle out the Seven Commandments
 *   which were inscribed there. Finding herself unable to read more than
 *   individual letters, she fetched Muriel." "With some difficulty Muriel
 *   spelt it out." So the two stand before the end wall of the big barn:
 *   Muriel, the white goat, nearest it with her face to the letters, and
 *   Clover behind her.
 * - "It says, 'No animal shall sleep in a bed with sheets,'" So the wall reads
 *   as it stands in Chapter VI: the Fourth with its two new words, the Fifth
 *   and the Sixth not yet changed (so this panel builds its own lines rather
 *   than taking the Chapter VIII wall from ./end-wall.tsx). "Curiously
 *   enough, Clover had not remembered that the Fourth Commandment mentioned
 *   sheets". The paint is white; the spot colour on "with sheets" is the print
 *   pointing at the words the scene is about, as the wall kit sets out.
 * - "And Squealer, who happened to be passing at this moment, attended by two
 *   or three dogs, was able to put the whole matter in its proper
 *   perspective." So Squealer comes up from the right, talking, with two of
 *   Napoleon's dogs at his back.
 *
 * The trade the moment also names (Mr Whymper and the Monday visits) is left
 * to the guide's card: the picture is the scene the quotation comes from. The
 * text gives no time of day, so it is an ordinary day. The animals are the
 * kit's (./people.tsx). Nothing is taken from a film, a cartoon or a stage
 * production. Seeds: 1701 (sky), 1702 (yard), 1703 (farmhouse), 1704 (field).
 */

const W = 860
const H = 340
const GROUND = 318
/** Where the far field meets the yard, behind the figures. */
const HORIZON = 296

/** The wall as it reads in Chapter VI: the Fourth changed, nothing else yet. */
const CHAPTER_VI: WallLine[] = [
  { runs: [{ t: '1. Whatever goes upon two legs is an enemy.' }], width: 300 },
  { runs: [{ t: '2. Whatever goes upon four legs, or has wings, is a freind.' }], width: 366 },
  { runs: [{ t: '3. No animal shall wear clothes.' }], width: 218 },
  {
    runs: [
      { t: '4. No animal shall sleep in a bed ' },
      { t: 'with sheets', red: true },
      { t: '.' },
    ],
    width: 290,
  },
  { runs: [{ t: '5. No animal shall drink alcohol.' }], width: 222 },
  { runs: [{ t: '6. No animal shall kill any other animal.' }], width: 258 },
  { runs: [{ t: '7. All animals are equal.' }], width: 170 },
]

/** The farmhouse behind the yard: its front wall and its roof. */
const HOUSE = { x0: 566, x1: 872, eaves: 160, ridge: 116, base: HORIZON + 4 }
/** The upstairs windows, [x, y]; the bedroom with the bed is BED_WINDOW. */
const WINDOWS: [number, number][] = [
  [604, 178],
  [806, 178],
]
const BED_WINDOW = { x: 676, y: 168, w: 86, h: 58 }

type Marks = { sky: string; field: string; yard: string; house: string; roof: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A pale day over the yard, lightly scored in ink.
  const r = rng(1701)
  let sky = ''
  for (let y = 8; y < HORIZON; y += 7) {
    let x = 400 + between(r, -20, 0)
    while (x < W) {
      const len = between(r, 30, 110)
      if (r() < 0.34 - y / 1100)
        sky += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.5 + (HORIZON - y) / 300)
      x += len + between(r, 20, 60)
    }
  }
  // The far field between the barn and the house: a dark hedge line.
  const f = rng(1704)
  let field = `M390 ${HORIZON + 6}`
  for (let x = 390; x <= HOUSE.x0 + 8; x += 6)
    field += `L${n(x)} ${n(HORIZON - 8 + 3.4 * Math.sin(x / 13) + between(f, -1.2, 1.2))}`
  field += `L${HOUSE.x0 + 8} ${HORIZON + 6}Z`
  // The trodden yard in front: pale, scored with ruts that darken towards us.
  const y = rng(1702)
  const yard = gougeField(
    y,
    { x0: 0, x1: W, y0: HORIZON + 2, y1: H },
    (_x, yy) => clamp(0.12 + (yy - HORIZON) / 340),
    { spacing: 5.5, len: [14, 60] },
  )
  // The farmhouse: a pale rendered front, cut with a few horizontal strokes
  // of shade under the eaves, and a dark slate roof with its courses cut in.
  const h = rng(1703)
  const houseLight = (x: number, yy: number) =>
    clamp(0.34 - (yy - HOUSE.eaves) / 420 - (x - HOUSE.x0) / 1800)
  const house = gougeField(
    h,
    { x0: HOUSE.x0, x1: HOUSE.x1, y0: HOUSE.eaves + 6, y1: HOUSE.base },
    houseLight,
    {
      spacing: 7,
      len: [16, 50],
      gap: [8, 26],
    },
  )
  let roof = ''
  for (let yy = HOUSE.ridge + 8; yy < HOUSE.eaves - 2; yy += 7) {
    const t = (yy - HOUSE.ridge) / (HOUSE.eaves - HOUSE.ridge)
    const x0 = HOUSE.x0 + 30 - t * 30
    roof += wedge(x0, yy, HOUSE.x1, yy, 0.8 + t * 0.6, 0.8 + t * 0.6)
  }
  cached = { sky, field, yard, house, roof }
  return cached
}

/**
 * The bedroom window, lit from within, and against the light a bed in
 * silhouette: a plain headboard, a pig's head asleep on the pillow (the ear
 * laid back, the eye shut) and a blanket, cut in stripes, pulled up over him.
 * No sheet shows.
 */
function BedWindow({ uid }: { uid: string }) {
  const { x, y, w, h } = BED_WINDOW
  const clip = `${uid}-bed`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <rect x={x} y={y} width={w} height={h} />
        </clipPath>
      </defs>
      <rect x={x - 6} y={y - 6} width={w + 12} height={h + 12} fill={PAPER} />
      <rect x={x - 3} y={y - 3} width={w + 6} height={h + 6} fill={INK} />
      <rect x={x} y={y} width={w} height={h} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        {/* the headboard and the foot of the bed */}
        <path d={`M${x + 3} ${y + h}V${y + 18}H${x + 11}V${y + h}Z`} fill={INK} />
        <path d={`M${x + w - 9} ${y + h}V${y + 30}H${x + w - 3}V${y + h}Z`} fill={INK} />
        {/* the pillow, and the pig's head on it, asleep on his side: the ear
            up, the eye shut, the flat end of the snout clear of the blanket */}
        <ellipse
          cx={x + 22}
          cy={y + 38}
          rx={13}
          ry={5}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.3}
        />
        <path
          d={`M${x + 12} ${y + 38}C${x + 10} ${y + 30} ${x + 14} ${y + 24} ${x + 22} ${y + 23}C${x + 30} ${y + 23} ${x + 38} ${y + 26} ${x + 43.6} ${y + 27.4}L${x + 44.6} ${y + 36}L${x + 40} ${y + 36.6}C${x + 32} ${y + 39} ${x + 22} ${y + 42} ${x + 12} ${y + 38}Z`}
          fill={INK}
        />
        <path d={`M${x + 18} ${y + 24.4}L${x + 12} ${y + 15}L${x + 25} ${y + 23}Z`} fill={INK} />
        <path d={`M${x + 42.8} ${y + 29}V${y + 34.6}`} stroke={PAPER} strokeWidth={1} />
        <path
          d={`M${x + 25} ${y + 29.2}Q${x + 27.6} ${y + 31} ${x + 30.2} ${y + 29}`}
          stroke={PAPER}
          strokeWidth={1.2}
          fill="none"
        />
        {/* the blanket over him, in dark stripes, and its turned-down edge */}
        <path
          d={`M${x + 34} ${y + 41}C${x + 46} ${y + 35} ${x + 62} ${y + 34} ${x + w - 9} ${y + 38}V${y + h}H${x + 12}V${y + 46}C${x + 20} ${y + 43} ${x + 28} ${y + 42} ${x + 34} ${y + 41}Z`}
          fill={INK}
        />
        <path
          d={[0, 1, 2, 3, 4, 5, 6]
            .map((k) => `M${x + 22 + k * 8} ${y + h}L${x + 28 + k * 8} ${y + 41}`)
            .join('')}
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <path
          d={`M${x + 32} ${y + 43}C${x + 46} ${y + 37.4} ${x + 62} ${y + 36.4} ${x + w - 10} ${y + 40}`}
          stroke={PAPER}
          strokeWidth={1.2}
          fill="none"
        />
      </g>
      {/* the glazing bars */}
      <path
        d={`M${x + w / 2} ${y}V${y + 10}M${x} ${y + 10}H${x + w}`}
        stroke={INK}
        strokeWidth={2.4}
      />
      <rect x={x - 8} y={y + h + 6} width={w + 16} height={4} fill={PAPER} />
    </g>
  )
}

function TradeAndTheFarmhouseBeds({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [420, 220], push: 1.03 })}>
      {/* a pale day, the far field and the yard */}
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <path d={m.field} fill={INK} />
      <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
      <path d={m.yard} fill={INK} />

      {/* the farmhouse, where the pigs now sleep */}
      <path
        d={`M${HOUSE.x0 - 10} ${HOUSE.eaves}L${HOUSE.x0 + 30} ${HOUSE.ridge}H${HOUSE.x1 + 10}V${HOUSE.eaves}Z`}
        fill={INK}
      />
      <path d={m.roof} fill={PAPER} />
      <rect x={HOUSE.x0 + 70} y={HOUSE.ridge - 30} width={22} height={34} fill={INK} />
      <rect x={HOUSE.x0 + 66} y={HOUSE.ridge - 34} width={30} height={6} fill={INK} />
      <rect x={HOUSE.x0 + 236} y={HOUSE.ridge - 28} width={22} height={32} fill={INK} />
      <rect x={HOUSE.x0 + 232} y={HOUSE.ridge - 32} width={30} height={6} fill={INK} />
      <rect
        x={HOUSE.x0}
        y={HOUSE.eaves}
        width={HOUSE.x1 - HOUSE.x0}
        height={HOUSE.base - HOUSE.eaves}
        fill={INK}
      />
      <path d={m.house} fill={PAPER} />
      <rect
        x={HOUSE.x0 - 12}
        y={HOUSE.eaves - 3}
        width={HOUSE.x1 - HOUSE.x0 + 24}
        height={6}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      {WINDOWS.map(([x, y]) => (
        <g key={x}>
          <rect x={x - 5} y={y - 5} width={46} height={46} fill={PAPER} />
          <rect x={x - 2} y={y - 2} width={40} height={40} fill={INK} />
          <path
            d={`M${x + 18} ${y}V${y + 36}M${x} ${y + 18}H${x + 36}`}
            stroke={PAPER}
            strokeWidth={1.6}
          />
          <rect x={x - 8} y={y + 41} width={52} height={4} fill={PAPER} />
        </g>
      ))}
      <BedWindow uid={uid} />

      {/* the end wall of the big barn, as it reads in Chapter VI */}
      <EndWall transform={`translate(10 ${GROUND - 300})`} lines={CHAPTER_VI} sky="day" />

      {/* Clover, who fetched Muriel, listening */}
      <Horse at={[536, GROUND]} s={1} face={-1} who="clover" headDown={14} uid={uid} />
      {/* Muriel, the white goat, spelling out the Fourth Commandment */}
      <Muriel at={[352, GROUND + 4]} s={1.12} face={-1} />
      {/* two of Napoleon's dogs at Squealer's back */}
      <g className="lc-drift-r" style={timing({ delay: 0.3 })}>
        <Wolfdog at={[818, GROUND - 18]} s={0.72} face={-1} />
        {/* Squealer, passing, putting "the whole matter in its proper perspective" */}
        <Pig at={[640, GROUND + 6]} s={1.05} face={-1} kind="squealer" mouthOpen />
        <Wolfdog at={[752, GROUND + 10]} s={0.92} face={-1} />
      </g>
    </g>
  )
}

export const tradeAndTheFarmhouseBeds: LinocutArt = {
  width: W,
  height: H,
  Draw: TradeAndTheFarmhouseBeds,
}
