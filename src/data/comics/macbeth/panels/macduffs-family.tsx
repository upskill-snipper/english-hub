import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CutFigure, HEAD, type Part } from './cut-figure'
import { flagFloor, stoneWall } from './dunsinane-kit'
import { HEAD_WOMAN, VEIL } from './inverness-people'

/**
 * Act 4, Scene 2: "Macduff's family", the seventeenth moment in the guide's
 * timeline. The site's reader does not print this scene, so the details are
 * from the Folger text the guide was checked against, and from the guide's
 * own summary:
 *
 * - "Enter Macduff's Wife, her Son, and Ross." The scene is her home, the
 *   castle in Fife (Ross in 4.3: "Your castle is surprised"), so a stone room
 *   with its hearth.
 * - A messenger warns her to take her "little ones" and go ("Be not found
 *   here"), and leaves. She answers "Whither should I fly? / I have done no
 *   harm", and the murderers come in: "What are these faces?"
 * - So the picture is that moment and no later: two men in the doorway, black
 *   against the light behind them, their long shadows stretching across the
 *   floor towards Lady Macduff, who stands between them and her son with one
 *   hand raised, the boy holding on to her gown. Their swords stay at their
 *   sides. What follows is never drawn (the style guide names it): the
 *   picture carries the danger, not the deed.
 * - Nobody in the scene is described. The murderers are plain rough men in
 *   hooded cloaks; Lady Macduff is drawn as the other Macbeth panels draw a
 *   lady (HEAD_WOMAN and VEIL, ./inverness-people.tsx), in a long gown; her
 *   son is a small boy in a tunic.
 *
 * The spot colour is the fire on her hearth: the home that is about to be
 * broken into, and nothing else. She and the boy are cut as light, the men as
 * shadow.
 *
 * Nothing is taken from a film or stage production. Seeds: 1701 (the wall),
 * 1702 (the floor), 1703 (the passage beyond the door).
 */

const W = 860
const H = 340
const FLOOR = 252

/** The doorway: an arched opening, its centre, half-width and the top of its arch. */
const DOOR = { cx: 144, half: 76, top: 58 }
const DOOR_OPEN = `M${DOOR.cx - DOOR.half} ${FLOOR}V${DOOR.top + DOOR.half}A${DOOR.half} ${DOOR.half} 0 0 1 ${DOOR.cx + DOOR.half} ${DOOR.top + DOOR.half}V${FLOOR}Z`
const DOOR_SURROUND = `M${DOOR.cx - DOOR.half - 12} ${FLOOR}V${DOOR.top + DOOR.half}A${DOOR.half + 12} ${DOOR.half + 12} 0 0 1 ${DOOR.cx + DOOR.half + 12} ${DOOR.top + DOOR.half}V${FLOOR}Z`
/** The light thrown into the room through the doorway, across the floor. */
const PATCH = `M${DOOR.cx - DOOR.half} ${FLOOR}L${DOOR.cx + DOOR.half} ${FLOOR}L${W} 318L${W} ${H}L250 ${H}Z`
/** The hearth on the right. */
const HEARTH = { x0: 742, x1: 850, top: 150 }

/** One tongue of flame, `h` tall and `w` wide at its foot on (x, y), leaning by `lean`. */
function flame(x: number, y: number, h: number, w: number, lean: number) {
  return `M${n(x - w / 2)} ${y}C${n(x - w * 0.62)} ${n(y - h * 0.42)} ${n(x - w * 0.12 + lean * 0.4)} ${n(y - h * 0.58)} ${n(x + lean * 0.7)} ${n(y - h * 0.84)}L${n(x + lean)} ${n(y - h)}C${n(x + w * 0.3 + lean * 0.6)} ${n(y - h * 0.66)} ${n(x + w * 0.66)} ${n(y - h * 0.4)} ${n(x + w / 2)} ${y}Z`
}
/** The hearth's flames, [dx from the hearth's left, height, width, lean]. */
const HEARTH_FLAMES: [number, number, number, number][] = [
  [42, 30, 12, -3],
  [54, 44, 14, 1],
  [66, 34, 12, 4],
]

type Marks = {
  wall: { cuts: string; joints: string; edges: string }
  floor: string
  voussoirs: string
  beyond: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The wall is lit round the doorway and, low on the right, by the hearth.
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot((x - DOOR.cx) * 0.8, (y - 170) * 0.9) / 250),
      clamp(1 - Math.hypot(x - 796, (y - 230) * 1.2) / 150) * 0.8,
      0.05,
    )
  const wall = stoneWall(rng(1701), { x0: 0, x1: W, y0: 0, y1: FLOOR }, light)
  const floor = flagFloor(rng(1702), W, H, FLOOR, [DOOR.cx + 40, 40])

  // The stones of the arch, cut as wedges radiating from its centre.
  let voussoirs = ''
  const cy = DOOR.top + DOOR.half
  for (let a = 180; a <= 360; a += 15) {
    const t = (a * Math.PI) / 180
    voussoirs += wedge(
      DOOR.cx + Math.cos(t) * DOOR.half,
      cy + Math.sin(t) * DOOR.half,
      DOOR.cx + Math.cos(t) * (DOOR.half + 12),
      cy + Math.sin(t) * (DOOR.half + 12),
      1.6,
      2.2,
    )
  }
  for (let y = cy + 22; y < FLOOR; y += 24) {
    voussoirs += wedge(DOOR.cx - DOOR.half - 12, y, DOOR.cx - DOOR.half, y, 2, 2)
    voussoirs += wedge(DOOR.cx + DOOR.half, y, DOOR.cx + DOOR.half + 12, y, 2, 2)
  }

  // Beyond the door: the flags of the passage, closing up into the distance.
  const r = rng(1703)
  let beyond = ''
  for (let k = 0; k < 6; k++) {
    const y = FLOOR - 4 - k * k * 1.6
    beyond += gouge(
      DOOR.cx - DOOR.half,
      y,
      DOOR.cx + DOOR.half,
      y + between(r, -0.5, 0.5),
      1.1 - k * 0.12,
    )
  }
  beyond +=
    gouge(DOOR.cx - 30, 180, DOOR.cx - 36, FLOOR - 26, 0.9) +
    gouge(DOOR.cx + 40, 176, DOOR.cx + 46, FLOOR - 26, 0.9)

  cached = { wall, floor, voussoirs, beyond }
  return cached
}

// ── The murderers, facing right, feet at (0, 0), about 172 tall ─────────────

const MURDERER_HOOD =
  'M-16 -128C-23 -140 -21 -163 -7 -172C3 -177 14 -173 17 -164L11 -160C6 -165 -2 -164 -6 -158C-10 -150 -12 -138 -10 -128Z'
const MURDERER_CLOAK =
  'M-14 -132C-24 -128 -28 -110 -29 -92C-30 -76 -31 -60 -33 -44L29 -44C27 -62 25 -80 25 -96C25 -114 22 -128 12 -133Z'
/** An open hand at the end of a reaching arm. */
const MURDERER_HAND =
  'M44 -110.5C48 -112.5 53 -112 57 -110L58.5 -107.5L53 -107.2L59.5 -105.5L59 -103L52.5 -103.8L57.5 -100.6L56 -98.6L50.5 -101.4C47 -100.5 44 -101.5 43 -104Z'
const MURDERER_BOOTS = [
  'M-24 -9L-9 -9L-8 0L-27 0C-27 -4 -26 -7 -24 -9Z',
  'M24 -12L35 -12C40 -9 44 -5 44 0L24 0Z',
]
function murdererParts(step: number, reach = false): Part[] {
  return [
    { d: 'M-4 -72L-44 -32', w: 4.6 },
    { d: 'M-8 -46C-10 -32 -13 -18 -16 -6', w: 10 },
    { d: `M10 -46C${14 + step * 0.4} -32 ${20 + step * 0.6} -20 ${26 + step * 0.4} -8`, w: 10 },
    ...MURDERER_BOOTS.map((d) => ({
      d,
      t: d === MURDERER_BOOTS[1] ? `translate(${step * 0.6} 0)` : undefined,
    })),
    { d: MURDERER_CLOAK },
    { d: HEAD, t: 'translate(4 -150) scale(1.05)' },
    { d: MURDERER_HOOD },
    reach
      ? { d: 'M13 -124C24 -118 34 -110 46 -106', w: 8 }
      : { d: 'M14 -124C22 -110 24 -96 20 -80', w: 8 },
    ...(reach ? [{ d: MURDERER_HAND }] : []),
  ]
}
/** The line of the hood, the belt, a fold: all a silhouette needs. */
const MURDERER_CUTS =
  gouge(-9, -130, -5, -160, 0.7, 0.8) +
  gouge(-26, -70, 26, -72, 0.7) +
  gouge(-14, -118, -20, -56, 0.8, 0.5)

/**
 * A figure's shadow on the floor, thrown away from the doorway: the figure's
 * own shapes laid flat along the light. Height runs along the floor towards
 * the lower right, width is foreshortened.
 */
const shadowMatrix = (fx: number, fy: number, k = 1) =>
  `matrix(${n(0.55 * k)} ${n(0.62 * k)} ${n(-2.3 * k)} ${n(-0.3 * k)} ${fx} ${fy})`

// ── Lady Macduff and her son, facing right in their own frame ───────────────

const LADY_GOWN =
  'M-10 -163C-18 -161 -23 -152 -24 -140C-25 -118 -27 -92 -32 -64C-36 -40 -42 -18 -48 0L42 0C36 -22 30 -48 26 -74C23 -96 22 -118 21 -138C20 -152 16 -161 9 -163Z'
const LADY_HEAD_AT = 'translate(4 -184) scale(1.1)'
/** Her raised hand, open, the palm towards the door. */
const LADY_HAND =
  'M37.5 -146C35.5 -151 35.5 -157 37 -162.5L39 -162.8L39.6 -156L40.4 -165L42.4 -165L42.4 -156L43.8 -163.6L45.8 -163.2L45.2 -154.6L47.2 -159.2L49 -158.4L47 -150.5C46 -146.5 43.5 -144.5 40.5 -144.5Z'
const LADY_PARTS: Part[] = [
  { d: LADY_GOWN },
  { d: VEIL, t: LADY_HEAD_AT },
  { d: HEAD_WOMAN, t: LADY_HEAD_AT },
  { d: VEIL, t: LADY_HEAD_AT },
  { d: 'M12 -152C22 -142 30 -138 34 -140C38 -142 40 -146 41 -150', w: 8 },
  { d: LADY_HAND },
]
/** Her other arm, reaching back to hold the boy by the shoulder. */
const LADY_BACK_ARM: Part[] = [
  { d: 'M-12 -150C-22 -140 -30 -126 -34 -116C-38 -110 -42 -106 -46 -104', w: 8 },
  { d: 'M-43 -107C-48 -109 -53 -107 -56 -103C-57 -100 -54 -98 -51 -99L-45 -100Z' },
]
/** The folds of her gown, the girdle, the edge of the veil. */
const LADY_CUTS =
  gouge(-8, -112, -22, -8, 1, 0.8) +
  gouge(4, -112, 2, -6, 1.1, -0.4) +
  gouge(14, -112, 26, -8, 1, -0.8) +
  gouge(-18, -110, -36, -8, 0.8, 0.6) +
  gouge(-22, -121, 22, -121, 0.9)
/** Her eye and mouth, and the veil's edge over her brow, in her head's frame. */
/** Folds in the veil where it falls down her back, in her head's frame. */
const VEIL_CUTS = gouge(-12, -6, -20, 58, 0.7, -1.2) + gouge(-6, 2, -15, 62, 0.6, -0.8)
const LADY_FACE_CUTS =
  gouge(4.5, -7.4, 11, -8.2, 0.7, -0.4) +
  gouge(10, 10.6, 12.5, 10.4, 0.45) +
  gouge(-6, -14, 10.5, -11.5, 0.6, 1.2)

const SON_HEAD_AT = 'translate(0 -100) scale(0.92)'
const SON_TUNIC = 'M-8 -82C-14 -80 -16 -72 -16 -62L-17 -34L13 -34L11 -62C11 -72 9 -80 4 -82Z'
const SON_PARTS: Part[] = [
  { d: 'M-6 -36L-7 -4', w: 6 },
  { d: 'M5 -36L6 -4', w: 6 },
  { d: 'M-13 -5L-3 -5L-2 0L-14 0Z' },
  { d: 'M3 -5L12 -5C14 -4 15 -2 15 0L3 0Z' },
  { d: SON_TUNIC },
  { d: HEAD, t: SON_HEAD_AT },
  { d: 'M4 -76C9 -68 14 -63 22 -61', w: 5 },
]
/** His hair, as an ink cap over the head, and his eye, in the head's frame. */
const SON_HAIR =
  'M-14.5 6C-17 -8 -9 -20 2 -20C9 -20 14 -15 14 -8C10 -11 5 -12 0 -10C-4 -8 -7 -3 -8 3C-10 5 -12 6 -14.5 6Z'
const SON_FACE_CUTS = gouge(8, 10.5, 11, 10.4, 0.4)

/** Where each stands: the murderers' feet, and Lady Macduff's (she faces left). */
const M1: [number, number] = [182, 258]
const M2: [number, number] = [122, 252]
const LADY: [number, number] = [628, 320]

function MacduffsFamily({ uid }: ArtProps) {
  const m = marks()
  const patch = `${uid}-patch`
  return (
    <>
      <defs>
        <clipPath id={patch}>
          <path d={PATCH} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 200], push: 1.03 })}>
        {/* the stone room, lit from the doorway and the hearth */}
        <path d={m.wall.cuts} fill={PAPER} />
        <path d={m.wall.joints} fill={INK} />
        <path d={m.wall.edges} fill={PAPER} />

        {/* the floor: dark, but for the light from the door */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
        <path d={PATCH} fill={PAPER} />
        <g clipPath={`url(#${patch})`}>
          <path d={m.floor} fill={INK} />
        </g>

        {/* the hearth, and the fire on it */}
        <rect
          x={HEARTH.x0}
          y={HEARTH.top}
          width={HEARTH.x1 - HEARTH.x0}
          height={FLOOR - HEARTH.top}
          fill={PAPER}
        />
        <rect
          x={HEARTH.x0 - 6}
          y={HEARTH.top - 8}
          width={HEARTH.x1 - HEARTH.x0 + 12}
          height={8}
          fill={PAPER}
        />
        <rect
          x={HEARTH.x0 - 6}
          y={HEARTH.top - 1}
          width={HEARTH.x1 - HEARTH.x0 + 12}
          height={2}
          fill={INK}
        />
        <path
          d={`M${HEARTH.x0 + 16} ${FLOOR}V${HEARTH.top + 40}Q${HEARTH.x0 + 16} ${HEARTH.top + 22} ${HEARTH.x0 + 36} ${HEARTH.top + 22}H${HEARTH.x1 - 36}Q${HEARTH.x1 - 16} ${HEARTH.top + 22} ${HEARTH.x1 - 16} ${HEARTH.top + 40}V${FLOOR}Z`}
          fill={INK}
        />
        <path
          d={
            gouge(HEARTH.x0 + 7, HEARTH.top + 10, HEARTH.x0 + 7, FLOOR - 6, 1.4) +
            gouge(HEARTH.x1 - 7, HEARTH.top + 10, HEARTH.x1 - 7, FLOOR - 6, 1.4)
          }
          fill={INK}
        />
        <g fill={RED}>
          <path
            d={`M${HEARTH.x0 + 30} ${FLOOR - 4}C${HEARTH.x0 + 40} ${FLOOR - 12} ${HEARTH.x1 - 40} ${FLOOR - 12} ${HEARTH.x1 - 30} ${FLOOR - 4}Z`}
          />
          {HEARTH_FLAMES.map(([dx, h, w, lean], i) => (
            <path
              key={dx}
              className="lc-flicker"
              style={timing({ dur: 0.7 + i * 0.1, delay: i * 0.2 })}
              d={flame(HEARTH.x0 + dx, FLOOR - 6, h, w, lean)}
            />
          ))}
        </g>
        <path
          d={`M${HEARTH.x0 + 26} ${FLOOR - 2}L${HEARTH.x1 - 26} ${FLOOR - 8}M${HEARTH.x0 + 28} ${FLOOR - 8}L${HEARTH.x1 - 28} ${FLOOR - 2}`}
          stroke={INK}
          strokeWidth={4}
        />

        {/* the doorway, its arch, and the light of the passage beyond */}
        <path d={DOOR_SURROUND} fill={PAPER} />
        <path d={m.voussoirs} fill={INK} />
        <path d={DOOR_OPEN} fill={PAPER} stroke={INK} strokeWidth={2} />
        <path d={m.beyond} fill={INK} />
        {/* the door, swung open into the room */}
        <path
          d={`M${DOOR.cx - DOOR.half - 12} ${DOOR.top + 46}L${DOOR.cx - DOOR.half - 54} ${DOOR.top + 30}L${DOOR.cx - DOOR.half - 54} ${FLOOR + 26}L${DOOR.cx - DOOR.half - 12} ${FLOOR}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.6}
        />
        <path
          d={
            gouge(
              DOOR.cx - DOOR.half - 23,
              DOOR.top + 48,
              DOOR.cx - DOOR.half - 23,
              FLOOR + 3,
              0.9,
            ) +
            gouge(
              DOOR.cx - DOOR.half - 33,
              DOOR.top + 44,
              DOOR.cx - DOOR.half - 33,
              FLOOR + 10,
              0.9,
            ) +
            gouge(
              DOOR.cx - DOOR.half - 43,
              DOOR.top + 40,
              DOOR.cx - DOOR.half - 43,
              FLOOR + 17,
              0.9,
            )
          }
          fill={PAPER}
        />

        {/* the murderers' shadows, stretching across the lit floor towards her */}
        <g className="lc-drift" style={timing({ delay: 0.4 })}>
          <g clipPath={`url(#${patch})`} fill={INK}>
            <CutFigure
              parts={murdererParts(4, true)}
              halo={0}
              transform={shadowMatrix(M1[0], M1[1])}
            />
            <CutFigure
              parts={murdererParts(0)}
              halo={0}
              transform={shadowMatrix(M2[0], M2[1], 0.94)}
            />
          </g>
        </g>

        {/* the murderers in the doorway, black against the light */}
        <CutFigure
          parts={murdererParts(0)}
          cuts={MURDERER_CUTS}
          halo={1.2}
          transform={`translate(${M2[0]} ${M2[1]}) scale(0.94)`}
        />
        <CutFigure
          parts={murdererParts(4, true)}
          cuts={MURDERER_CUTS}
          halo={1.2}
          transform={`translate(${M1[0]} ${M1[1]})`}
        />

        {/* Lady Macduff between them and her son, who holds on to her gown */}
        <g transform={`translate(${LADY[0]} ${LADY[1]}) scale(-1 1)`}>
          <CutFigure parts={LADY_PARTS} cuts={LADY_CUTS} tone="paper" halo={1.8}>
            <g transform={LADY_HEAD_AT}>
              <path d={VEIL_CUTS} fill={INK} />
              <path d={LADY_FACE_CUTS} fill={INK} />
              <circle cx={8.4} cy={-3.2} r={1.5} fill={INK} />
            </g>
          </CutFigure>
          <CutFigure
            parts={SON_PARTS}
            tone="paper"
            halo={1.6}
            transform="translate(-54 0) scale(1.08)"
          >
            <g transform={SON_HEAD_AT}>
              <path d={SON_HAIR} fill={INK} />
              <path d={SON_FACE_CUTS} fill={INK} />
              <circle cx={7.6} cy={-2.6} r={1.5} fill={INK} />
            </g>
            <path d={gouge(-6, -76, -10, -40, 0.7, 0.4)} fill={INK} />
          </CutFigure>
          <CutFigure parts={LADY_BACK_ARM} tone="paper" halo={1.6} />
        </g>
      </g>
    </>
  )
}

export const macduffsFamily: LinocutArt = { width: W, height: H, Draw: MacduffsFamily }
