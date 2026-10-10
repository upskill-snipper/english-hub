import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
  wave,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

/**
 * Pip's chambers in the Temple, the room of moments 11 and 12 ("The convict
 * returns", Chapter 39, and "Magwitch's story", Chapters 41 and 42), drawn
 * once so the two panels show one room: by lamplight on the night of the
 * storm, and by daylight on the morning the convict tells his life. From the
 * held edition (src/data/full-texts/great-expectations.ts):
 *
 * - "We had left Barnard's Inn more than a year, and lived in the Temple. Our
 *   chambers were in Garden-court, down by the river." "We lived at the top
 *   of the last house" (Chapter 39). So the window looks out on the river.
 * - The storm: "When the rain came with it and dashed against the windows";
 *   "I shaded my face with my hands and looked through the black windows ...
 *   I saw that the lamps in the court were blown out, and that the lamps on
 *   the bridges and the shore were shuddering" (Chapter 39). So at night the
 *   panes are black, rain is cut across them, and the far lamps of a bridge
 *   and the shore are small cut lights. The coal fires in the barges, "like
 *   red-hot splashes in the rain", are left to the words: a red speck on the
 *   water reads as blood at panel size.
 * - "Occasionally, the smoke came rolling down the chimney as though it could
 *   not bear to go out into such a night" (Chapter 39): smoke curls out under
 *   the mantel at night.
 * - "I read with my watch upon the table"; "It was a shaded lamp, to shine
 *   upon a book, and its circle of light was very contracted"; "having set
 *   the lamp on the table" (Chapter 39). So the reading-lamp stands on a
 *   table, shaded, with the shut book and the watch by it, and its light is a
 *   small pool.
 * - "And your books too ... mounting up, on their shelves, by hundreds!"
 *   (Chapter 39): a tall case of books.
 * - The fire: Magwitch "sat down on a chair that stood before the fire"
 *   (Chapter 39); in the morning he turns "an angry eye on the fire" (Chapter
 *   41). By day the room is lit from the window, and the lamp is out.
 *
 * Nothing in the room is described beyond that, so it is plain: a
 * wainscot-high skirting, boards, a stone chimney-piece. Seeds: 3911 (the
 * wall by night), 3912 (the wall by day), 3913 (the floor), 3914 (the books),
 * 3915 (the rain), 3916 (the far lamps), 3917 (the river by day), 3918 (the
 * lamp's light), 3919 (the chimney smoke).
 */

export const W = 860
export const H = 340
/** Where the back wall meets the floor. */
export const BASE = 252
/** The fireplace: its surround, the opening, the mantel shelf. */
export const FIRE = { x0: 30, x1: 200, mantel: 150, ox0: 66, ox1: 164, otop: 180 }
/** The fire's heart, for the light. */
export const FIRE_AT: [number, number] = [115, 222]
/** The side-table against the back wall, and its top. */
export const SIDE = { x0: 374, x1: 466, top: 204 }
/** The reading-lamp on it: the foot of its column and the shade's rim. */
export const LAMP = { x: 420, foot: 204, rim: 162 }
/** The tall bookcase. */
export const CASE = { x0: 512, x1: 690, top: 22 }
/** The window on the river. */
export const WIN = { x0: 716, x1: 840, y0: 24, y1: 230 }

type Marks = {
  wall: string
  floor: string
  books: string
  bands: string
  rain: string
  lamps: string
  river: string
  sky: string
  lampLight: string
  smoke: string
  surround: string
}

const cache: Partial<Record<'night' | 'day', Marks>> = {}

function marks(night: boolean): Marks {
  const key = night ? 'night' : 'day'
  const hit = cache[key]
  if (hit) return hit
  // By night the room is lit by the shaded lamp and the fire; by day, from
  // the window on the right and by the fire.
  const light = night
    ? (x: number, y: number) => {
        const lamp = clamp(1 - Math.hypot((x - LAMP.x) * 0.8, (y - LAMP.rim - 20) * 1.2) / 230)
        const fire = clamp(1 - Math.hypot(x - FIRE_AT[0], (y - FIRE_AT[1]) * 1.1) / 200) * 0.8
        return Math.max(lamp, fire, 0.04)
      }
    : (x: number, y: number) => {
        const win = clamp(1 - Math.hypot((x - WIN.x0) * 0.7, (y - 120) * 1.1) / 560) * 0.75
        const fire = clamp(1 - Math.hypot(x - FIRE_AT[0], (y - FIRE_AT[1]) * 1.1) / 190) * 0.7
        return Math.max(win, fire, 0.1)
      }
  const wall = gougeField(rng(night ? 3911 : 3912), { x0: 0, x1: W, y0: 4, y1: BASE - 12 }, light, {
    spacing: 6.2,
  })

  // The floor: boards running to a point in the middle of the room.
  const f = rng(3913)
  let floor = ''
  const V = [440, 40]
  for (let xt = -700; xt < 1600; xt += 32) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (BASE - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(f, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        BASE + (H - BASE) * t0,
        xt + (xb - xt) * t1,
        BASE + (H - BASE) * t1,
        0.8 + t0 * 2.8,
        0.8 + t1 * 2.8,
      )
      t0 = t1 + between(f, 0.02, 0.07)
    }
  }

  // The books: spines of every height and width on five shelves, a few
  // leaning, cut in paper with the gaps between them left in ink.
  const b = rng(3914)
  let books = ''
  let bands = ''
  const shelves = [64, 110, 156, 202, 248]
  for (const sy of shelves) {
    let x = CASE.x0 + 12
    while (x < CASE.x1 - 18) {
      const w = between(b, 5, 9.5)
      const h = between(b, 28, 38)
      const lean = b() < 0.08 && x < CASE.x1 - 40 ? between(b, 3, 6) : 0
      books += `M${n(x)} ${sy}L${n(x + lean)} ${n(sy - h)}L${n(x + lean + w)} ${n(sy - h + lean * 0.3)}L${n(x + w)} ${sy}Z`
      if (b() < 0.7)
        bands += gouge(x + lean * 0.8 + 1, sy - h * 0.8, x + lean * 0.8 + w - 1, sy - h * 0.8, 0.7)
      if (b() < 0.5) bands += gouge(x + 1, sy - 6, x + w - 1, sy - 6, 0.6)
      x += w + between(b, 1.2, 2.4) + lean * 1.2
      if (b() < 0.06) x += between(b, 6, 14)
    }
  }

  // Through the window. By night: rain driven across black panes, and the
  // lamps of a bridge and the far shore shuddering. By day: a leaden sky, the
  // far shore, and the river.
  let rain = ''
  let lamps = ''
  let river = ''
  let sky = ''
  if (night) {
    const rr = rng(3915)
    for (let i = 0; i < 120; i++) {
      const x = between(rr, WIN.x0 - 10, WIN.x1 + 20)
      const y = between(rr, WIN.y0, WIN.y1)
      const len = between(rr, 9, 22)
      rain += gouge(x, y, x - len * 0.45, y + len, between(rr, 0.35, 0.6))
    }
    const lr = rng(3916)
    // A bridge's lamps in a low arch, and lamps strung along the shore.
    for (let i = 0; i < 6; i++) {
      const x = WIN.x0 + 14 + i * 19 + between(lr, -2, 2)
      const y = 120 - Math.sin((i / 5) * Math.PI) * 12 + between(lr, -1, 1)
      lamps += `M${n(x - 1.6)} ${n(y)}a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0Z`
      lamps += gouge(x, y - 2.4, x + between(lr, -1.4, 1.4), y - 6.6, 0.45)
      lamps += gouge(x, y + 2.4, x + between(lr, -1.4, 1.4), y + 6.2, 0.45)
    }
    for (let i = 0; i < 7; i++) {
      const x = WIN.x0 + 8 + i * 17 + between(lr, -3, 3)
      const y = 156 + between(lr, -2, 2)
      lamps += `M${n(x - 1.2)} ${n(y)}a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0 -2.4 0Z`
      lamps += gouge(x, y + 2, x + between(lr, -1, 1), y + 7, 0.4)
    }
  } else {
    const sr = rng(3917)
    for (let y = WIN.y0 + 6; y < 130; y += 5.4) {
      let x = WIN.x0 + between(sr, -20, 0)
      while (x < WIN.x1) {
        const len = between(sr, 16, 50)
        if (sr() < 0.55)
          sky += gouge(x, y, x + len, y + between(sr, -0.4, 0.4), 0.35 + (130 - y) / 260)
        x += len + between(sr, 6, 22)
      }
    }
    // the far shore, low and dark, and the water below it
    for (let y = 152, k = 0; y < WIN.y1; y += 5 + k * 0.6, k++) {
      let x = WIN.x0 + between(sr, -10, 0)
      while (x < WIN.x1) {
        const len = between(sr, 10, 26) + k * 2
        if (sr() < 0.3 + k * 0.08)
          river += ribbon(wave(x, x + len, y, 1, len, between(sr, 0, 6), 6), 0.6 + k * 0.25, 0.6)
        x += len + between(sr, 3, 10)
      }
    }
  }
  const lampLight = night
    ? rays(rng(3918), LAMP.x, LAMP.rim + 4, { from: 22, to: 96, every: 6, width: 2.4 })
    : ''
  // Smoke curling out under the mantel, "as though it could not bear to go out".
  let smoke = ''
  if (night) {
    const s = rng(3919)
    for (let k = 0; k < 3; k++) {
      const y0 = FIRE.otop + 6 + k * 7
      const pts = wave(
        FIRE.ox0 + 8 + k * 10,
        FIRE.ox1 + 26 - k * 8,
        y0,
        2.4,
        40,
        between(s, 0, 6),
        12,
      )
      smoke += ribbon(
        pts.map(([x, y], i) => [x, y - i * 0.9]),
        3.2 - k * 0.6,
        0.8,
      )
    }
  }
  // The stone surround's dressed blocks.
  const surround =
    gouge(FIRE.x0 + 12, FIRE.mantel + 12, FIRE.x0 + 12, BASE - 4, 1.4) +
    gouge(FIRE.x0 + 20, FIRE.mantel + 16, FIRE.x0 + 20, BASE - 8, 0.9) +
    gouge(FIRE.x1 - 12, FIRE.mantel + 12, FIRE.x1 - 12, BASE - 4, 1.4) +
    gouge(FIRE.x1 - 20, FIRE.mantel + 16, FIRE.x1 - 20, BASE - 8, 0.9) +
    gouge(FIRE.ox0 + 6, FIRE.mantel + 14, FIRE.ox1 - 6, FIRE.mantel + 14, 1.1)

  const out = { wall, floor, books, bands, rain, lamps, river, sky, lampLight, smoke, surround }
  cache[key] = out
  return out
}

/**
 * The room, drawn behind the people: the wall, the floor, the fireplace and
 * its fire, the side-table and the reading-lamp, the bookcase and the window.
 * `night` gives the storm, the lit lamp and the smoke; without it, the
 * morning.
 */
export function TempleRoom({ uid, night }: { uid: string; night: boolean }) {
  const m = marks(night)
  const win = `${uid}-tw`
  return (
    <>
      <defs>
        <clipPath id={win}>
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} />
        </clipPath>
      </defs>
      <path d={m.wall} fill={PAPER} />
      {/* the skirting, and the floor */}
      <rect x={0} y={BASE - 12} width={W} height={7} fill={PAPER} />
      <rect x={0} y={BASE - 5} width={W} height={1.6} fill={PAPER} />
      <rect x={0} y={BASE} width={W} height={H - BASE} fill={PAPER} />
      <path d={m.floor} fill={INK} />

      {/* the window on the river */}
      <rect
        x={WIN.x0 - 9}
        y={WIN.y0 - 9}
        width={WIN.x1 - WIN.x0 + 18}
        height={WIN.y1 - WIN.y0 + 18}
        fill={INK}
      />
      <g clipPath={`url(#${win})`}>
        {night ? (
          <>
            <rect
              x={WIN.x0}
              y={WIN.y0}
              width={WIN.x1 - WIN.x0}
              height={WIN.y1 - WIN.y0}
              fill={INK}
            />
            <path d={m.lamps} fill={PAPER} />
            <g className="lc-drift-r" style={timing({ dur: 3.2 })}>
              <path d={m.rain} fill={PAPER} />
            </g>
          </>
        ) : (
          <>
            <rect
              x={WIN.x0}
              y={WIN.y0}
              width={WIN.x1 - WIN.x0}
              height={WIN.y1 - WIN.y0}
              fill={PAPER}
            />
            <path d={m.sky} fill={INK} />
            <path
              d={`M${WIN.x0} 146L${WIN.x0 + 30} 141L${WIN.x0 + 64} 144L${WIN.x0 + 92} 138L${WIN.x1} 143V152H${WIN.x0}Z`}
              fill={INK}
            />
            <path d={m.river} fill={INK} />
          </>
        )}
      </g>
      {/* The glazing bars: ink against the daylight; by night, cut in paper
          where the lamp catches them, or the black window is lost in the black
          wall. */}
      <g fill={night ? 'none' : INK} stroke={night ? PAPER : 'none'} strokeWidth={1.4}>
        <rect x={(WIN.x0 + WIN.x1) / 2 - 2.5} y={WIN.y0} width={5} height={WIN.y1 - WIN.y0} />
        {[WIN.y0 + 51, WIN.y0 + 154].map((y) => (
          <rect key={y} x={WIN.x0} y={y - 2.5} width={WIN.x1 - WIN.x0} height={5} />
        ))}
        <rect x={WIN.x0} y={(WIN.y0 + WIN.y1) / 2 - 3.5} width={WIN.x1 - WIN.x0} height={7} />
      </g>
      <rect
        x={WIN.x0 - 5}
        y={WIN.y0 - 5}
        width={WIN.x1 - WIN.x0 + 10}
        height={WIN.y1 - WIN.y0 + 10}
        fill="none"
        stroke={PAPER}
        strokeWidth={night ? 3 : LINE.carve}
      />
      <rect x={WIN.x0 - 16} y={WIN.y1 + 9} width={WIN.x1 - WIN.x0 + 32} height={7} fill={PAPER} />
      <rect x={WIN.x0 - 16} y={WIN.y1 + 16} width={WIN.x1 - WIN.x0 + 32} height={2} fill={INK} />

      {/* the bookcase, "mounting up, on their shelves, by hundreds" */}
      <rect
        x={CASE.x0}
        y={CASE.top}
        width={CASE.x1 - CASE.x0}
        height={BASE - CASE.top + 2}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={m.books} fill={PAPER} />
      <path d={m.bands} fill={INK} />
      <g fill={PAPER}>
        {[64, 110, 156, 202, 248].map((y) => (
          <rect key={y} x={CASE.x0 + 4} y={y} width={CASE.x1 - CASE.x0 - 8} height={3.4} />
        ))}
        <rect x={CASE.x0 - 6} y={CASE.top - 8} width={CASE.x1 - CASE.x0 + 12} height={5} />
      </g>
      <rect x={CASE.x0 - 6} y={CASE.top - 3} width={CASE.x1 - CASE.x0 + 12} height={3} fill={INK} />

      {/* the fireplace: a stone surround, the mantel shelf, the grate */}
      <rect
        x={FIRE.x0}
        y={FIRE.mantel}
        width={FIRE.x1 - FIRE.x0}
        height={BASE - FIRE.mantel}
        fill={PAPER}
      />
      <path d={m.surround} fill={INK} />
      <rect
        x={FIRE.x0 - 10}
        y={FIRE.mantel - 8}
        width={FIRE.x1 - FIRE.x0 + 20}
        height={8}
        fill={INK}
      />
      <rect
        x={FIRE.x0 - 12}
        y={FIRE.mantel - 12}
        width={FIRE.x1 - FIRE.x0 + 24}
        height={4}
        fill={PAPER}
      />
      <path
        d={`M${FIRE.ox0} ${BASE}V${FIRE.otop + 14}Q${FIRE.ox0} ${FIRE.otop} ${FIRE.ox0 + 14} ${FIRE.otop}H${FIRE.ox1 - 14}Q${FIRE.ox1} ${FIRE.otop} ${FIRE.ox1} ${FIRE.otop + 14}V${BASE}Z`}
        fill={INK}
      />
      {/* the grate's bars, and the fire in it */}
      <path
        d={`M${FIRE.ox0 + 12} 226H${FIRE.ox1 - 12}M${FIRE.ox0 + 13} 233H${FIRE.ox1 - 13}M${FIRE.ox0 + 15} 240H${FIRE.ox1 - 15}M${FIRE.ox0 + 18} 226V246M${FIRE.ox1 - 18} 226V246`}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.6}
      />
      <g fill={RED}>
        <path d="M84 226C83 218 90 214 96 218C99 211 110 210 113 217C118 212 129 214 130 220C136 217 146 220 146 226Z" />
        <path className="lc-flicker" d="M95 219C92 210 97 202 101 194C104 202 109 209 105 219Z" />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.8, delay: 0.4 })}
          d="M116 219C114 212 118 206 121 199C124 206 127 212 125 219Z"
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 1, delay: 0.15 })}
          d="M134 220C133 215 136 211 138 207C140 211 142 215 141 220Z"
        />
      </g>
      {night && (
        <g className="lc-rise" style={timing({ delay: 0.6, dur: 1.6 })}>
          <path d={m.smoke} fill={PAPER} />
        </g>
      )}
      <rect x={FIRE.x0 - 8} y={BASE} width={FIRE.x1 - FIRE.x0 + 16} height={9} fill={PAPER} />
      <rect x={FIRE.x0 - 8} y={BASE + 9} width={FIRE.x1 - FIRE.x0 + 16} height={2} fill={INK} />

      {/* the side-table, and the reading-lamp on it */}
      {night && <path d={m.lampLight} fill={PAPER} />}
      <path
        d={`M${SIDE.x0 + 8} ${SIDE.top + 6}V${BASE + 4}M${SIDE.x1 - 8} ${SIDE.top + 6}V${BASE + 4}`}
        stroke={INK}
        strokeWidth={5}
      />
      <rect
        x={SIDE.x0}
        y={SIDE.top}
        width={SIDE.x1 - SIDE.x0}
        height={8}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <Lamp lit={night} />
    </>
  )
}

/**
 * The reading-lamp: a foot, a column, a reservoir and a deep shade that
 * throws its light down. Lit, its flame shows under the rim, cut in paper and
 * not printed red (a red speck there sits close to the hands in moment 11),
 * and its light is a small pool on the table, "very contracted". Unlit, it is
 * all ink.
 */
function Lamp({ lit }: { lit: boolean }) {
  const { x, foot, rim } = LAMP
  return (
    <g>
      {lit && (
        <path
          d={`M${x - 40} ${foot}Q${x} ${foot - 7} ${x + 40} ${foot}Q${x} ${foot + 3} ${x - 40} ${foot}Z`}
          fill={PAPER}
        />
      )}
      <path
        d={`M${x - 9} ${foot}H${x + 9}L${x + 6} ${foot - 4}H${x + 2.5}V${rim + 12}H${x + 6}V${rim + 6}H${x - 6}V${rim + 12}H${x - 2.5}V${foot - 4}H${x - 6}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
      {lit && (
        <path
          className="lc-flicker"
          style={timing({ dur: 0.9, delay: 0.3 })}
          d={`M${x} ${rim + 5}C${x - 3.4} ${rim + 1} ${x - 2} ${rim - 4} ${x} ${rim - 9}C${x + 2} ${rim - 4} ${x + 3.4} ${rim + 1} ${x} ${rim + 5}Z`}
          fill={PAPER}
        />
      )}
      {/* the shade, wide at the rim */}
      <path
        d={`M${x - 20} ${rim}L${x - 9} ${rim - 22}H${x + 9}L${x + 20} ${rim}Q${x} ${rim + 4} ${x - 20} ${rim}Z`}
        fill={lit ? PAPER : INK}
        stroke={lit ? INK : PAPER}
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
      {lit && (
        <path
          d={
            gouge(x - 12, rim - 6, x + 12, rim - 6, 0.8) +
            gouge(x - 7, rim - 15, x + 7, rim - 15, 0.6)
          }
          fill={INK}
        />
      )}
      <path d={`M${x - 3} ${rim - 22}V${rim - 28}H${x + 3}V${rim - 22}`} fill={INK} />
    </g>
  )
}
