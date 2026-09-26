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

import { CutFigure, type Part } from './cut-figure'
import {
  CROWN,
  CROWN_CUTS,
  EYE,
  HEAD_BEARD,
  HEAD_MAN,
  HEAD_OLD,
  HEAD_WOMAN,
  Martlets,
  NEST,
  NEST_MUD,
  OLD_BEARD,
  OLD_HAIR,
  OLD_STRANDS,
  VEIL,
} from './inverness-people'

/**
 * Act 1, Scene 6: "Duncan arrives", the sixth moment in the guide's timeline.
 * The site's reader does not hold this scene, so the lines below were checked
 * against the Folger text the guide follows (its editorial brackets removed).
 * Every detail is from the scene:
 *
 * - "Hautboys and Torches. Enter King Duncan, Malcolm, Donalbain, Banquo,
 *   Lennox, Macduff, Ross, Angus, and Attendants." The king comes at the end
 *   of "his day's hard journey" (1.7), by torchlight, so the sky is an
 *   evening sky, pale at the horizon, and an attendant of the royal train
 *   lifts a torch.
 * - "This castle hath a pleasant seat. The air / Nimbly and sweetly recommends
 *   itself / Unto our gentle senses." Duncan, old and crowned (see
 *   ./inverness-people.tsx), lifts an open hand to the castle.
 * - "This guest of summer, / The temple-haunting martlet, does approve, / By
 *   his loved mansionry, that the heaven's breath / Smells wooingly here. No
 *   jutty, frieze, / Buttress, nor coign of vantage, but this bird / Hath made
 *   his pendant bed and procreant cradle." Banquo looks up and points at the
 *   martlets; their nests hang under the jutty below the battlements.
 * - Lady Macbeth comes out to meet them, and Duncan greets "our honored
 *   hostess" (Folger's spelling). She is cut in paper against the black of the
 *   gate: in 1.5 she told her husband to "Look like th' innocent flower, / But
 *   be the serpent under 't", and the panel lets the gate behind her be the
 *   dark. The torches either side of it carry the spot colour, the welcome,
 *   and so does Duncan's crown, printed red as the other Macbeth panels print
 *   it.
 *
 * Nothing is taken from a film or stage production. Seeds: 601 (sky), 602
 * (masonry), 603 (ground), 604 (torch light).
 */

const W = 860
const H = 340
const HORIZON = 226

type Marks = {
  sky: string
  hills: string
  wall: string
  tower: string
  ground: string
  shade: string
  drum: string
  glowL: string
  glowR: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(601)
  // Evening: the sky is the lightest thing in the print, so it is paper cut
  // with ink lines, thickening towards the top as the light goes.
  const skyDark = (x: number, y: number) =>
    clamp(0.66 - Math.pow(y / HORIZON, 0.8) * 0.72 + (x < 300 && y < 70 ? 0.08 : 0))
  const sky = gougeField(r, { x0: 0, x1: W, y0: 6, y1: HORIZON - 4 }, skyDark, {
    spacing: 5.6,
    len: [30, 110],
    gap: [4, 14],
    max: 3.6,
  })

  // Low hills on the horizon behind the king's party.
  let hills = ''
  for (let x = 0; x < 470; x += between(r, 10, 22)) {
    const y = HORIZON - 6 + Math.sin(x / 70) * 5 + between(r, -1, 1)
    hills += gouge(x, y, x + between(r, 12, 30), y + between(r, -1, 1), between(r, 0.5, 1.2))
  }

  // Masonry: courses of cut stone, lit from the west, the curtain wall a
  // mid tone so the black gate and the paper hostess both read against it.
  const m = rng(602)
  const wallLight = (x: number, y: number) => clamp(0.52 - (x - 520) / 900 - (y - 100) / 900)
  const wall = gougeField(m, { x0: 470, x1: 800, y0: 96, y1: 284 }, wallLight, {
    spacing: 8.5,
    len: [10, 26],
    gap: [3, 6],
    max: 2.6,
  })
  const towerLight = (x: number) => clamp(0.7 - Math.abs(x - 800) / 60)
  // The round tower by the gate, lit on its western side.
  const drum = gougeField(
    m,
    { x0: 468, x1: 540, y0: 64, y1: 284 },
    (x) => clamp(0.8 - (x - 468) / 70),
    {
      spacing: 8.5,
      len: [6, 16],
      gap: [3, 5],
      max: 2.4,
    },
  )
  const tower = gougeField(m, { x0: 780, x1: W, y0: 44, y1: 284 }, towerLight, {
    spacing: 8.5,
    len: [8, 20],
    gap: [3, 6],
    max: 2.4,
  })

  // The ground: short cuts of earth, thicker nearer the reader, tufts of grass.
  const g = rng(603)
  let ground = ''
  for (let y = HORIZON + 6; y < H; y += 4.4) {
    let x = between(g, -20, 0)
    while (x < 480) {
      const len = between(g, 6, 22)
      const depth = clamp((y - HORIZON) / (H - HORIZON))
      if (g() < 0.25 + depth * 0.35)
        ground += gouge(x, y, x + len, y + between(g, -0.6, 0.6), 0.4 + depth * 1.3)
      x += len + between(g, 10, 40)
    }
  }
  for (let i = 0; i < 26; i++) {
    const x = between(g, 20, 560)
    const y = between(g, HORIZON + 30, H - 8)
    if (x > 120 && x < 380 && y > 290) continue
    const h = 3 + ((y - HORIZON) / (H - HORIZON)) * 7
    ground += wedge(x, y, x - 2, y - h, 1.4, 0.2) + wedge(x + 3, y, x + 5, y - h * 0.8, 1.2, 0.2)
  }
  // The foreground falls into shadow along the bottom edge, as the reference
  // floor does, so the figures stand on something.
  let shade = ''
  for (let y = 312; y < H; y += 3.2)
    shade += gouge(-20, y, W + 20, y + between(g, -0.4, 0.4), 0.4 + (y - 312) * 0.16)

  const t = rng(604)
  const glowL = rays(t, 586, 188, { from: 12, to: 52, every: 12, width: 2.2 })
  const glowR = rays(t, 714, 188, { from: 12, to: 52, every: 12, width: 2.2 })

  cached = { sky, hills, wall, tower, drum, ground, shade, glowL, glowR }
  return cached
}

/** The battlements: merlons along a wall top at y, from x0 to x1. */
function merlons(x0: number, x1: number, y: number, h: number, w: number, gap: number) {
  let d = ''
  for (let x = x0; x + w <= x1 + 0.1; x += w + gap) d += `M${n(x)} ${n(y)}h${w}v${h}h${-w}Z`
  return d
}

// ── Duncan: old, crowned, one open hand lifted to the castle ────────────────
const DUNCAN_HEAD = 'translate(4 -183) scale(0.92)'
const DUNCAN: Part[] = [
  // the cloak behind him
  {
    d: 'M-8 -166C-26 -150 -38 -112 -46 -64C-50 -38 -54 -16 -60 -1L-24 -1C-22 -40 -18 -92 -13 -132Z',
  },
  {
    d: 'M-12 -164C-20 -148 -22 -120 -21 -95C-22 -60 -30 -25 -38 -1L34 -1C28 -30 22 -65 19 -95C18 -125 18 -148 14 -162C6 -168 -4 -168 -12 -164Z',
  },
  { d: HEAD_OLD, t: DUNCAN_HEAD },
  { d: CROWN, t: DUNCAN_HEAD },
  // the lifted arm and open hand
  { d: 'M9 -154C16 -146 24 -140 31 -139C37 -146 42 -155 45 -163', w: 8.5, sep: 1.4 },
  {
    d: 'M42 -160C40 -166 42 -174 46 -178L48 -177L48.5 -171L51 -179L53.5 -178.5L52.5 -170L56 -175L58 -173.5L54 -165C52 -161 47 -158 42 -160Z',
  },
]
const DUNCAN_CUTS =
  // folds of the robe and the cloak, the girdle, the hem
  gouge(-4, -120, -12, -8, 1.2, 1) +
  gouge(8, -118, 14, -8, 1.1, -0.8) +
  gouge(-30, -104, -44, -8, 1, 1.2) +
  gouge(-16, -96, 16, -97, 0.9) +
  gouge(-30, -6, 30, -6, 0.9)

// ── Banquo: a soldier, sword at his hip, looking up at the martlets ─────────
const BANQUO_HEAD = 'translate(3 -181) rotate(-22) scale(0.92)'
const BANQUO: Part[] = [
  { d: 'M-9 -164C-26 -140 -32 -100 -38 -44L-14 -42C-14 -84 -12 -122 -6 -150Z' },
  { d: 'M-7 -56L-10 -8', w: 10 },
  { d: 'M7 -56L12 -8', w: 10 },
  { d: 'M-17 -11L-5 -11L-1 -4L-1 0L-19 0Z' },
  { d: 'M6 -11L17 -11L25 -4L25 0L6 0Z' },
  {
    d: 'M-12 -162C-18 -138 -18 -112 -16 -92L-22 -52L22 -52L16 -92C16 -116 16 -142 13 -161C5 -166 -5 -166 -12 -162Z',
  },
  { d: HEAD_BEARD, t: BANQUO_HEAD },
  // the sword in its scabbard, hilt forward
  { d: 'M6 -96L-36 -60', w: 4.6, sep: 1.4 },
  { d: 'M6 -96L14 -103', w: 3.6, sep: 1.2 },
  { d: 'M2 -101L10 -91', w: 3, sep: 1.2 },
  // the arm pointing up at the birds
  { d: 'M9 -154L32 -163L45 -191', w: 8.5, sep: 1.4 },
  { d: 'M42 -190C41 -195 45 -199 48 -197C50 -195 50 -190 47 -187Z' },
  { d: 'M47 -196L51 -206', w: 2.6 },
]
const BANQUO_CUTS =
  gouge(-14, -95, 16, -95, 1.1) +
  gouge(-2, -130, -6, -58, 1, 0.8) +
  gouge(6, -88, 12, -56, 0.9, -0.5) +
  gouge(-22, -132, -30, -48, 1, 1)

// ── An attendant of the royal train, lifting a torch ────────────────────────
const ATTENDANT: Part[] = [
  { d: 'M-7 -54L-9 -8', w: 9.5 },
  { d: 'M7 -54L11 -8', w: 9.5 },
  { d: 'M-15 -11L-4 -11L-1 -4L-1 0L-17 0Z' },
  { d: 'M6 -11L16 -11L23 -4L23 0L6 0Z' },
  {
    d: 'M-12 -158C-18 -134 -18 -108 -16 -90L-21 -50L21 -50L16 -90C16 -112 16 -138 13 -157C5 -162 -5 -162 -12 -158Z',
  },
  { d: HEAD_MAN, t: 'translate(3 -177) scale(0.88)' },
  { d: 'M50 -238L34 -150', w: 3.4, sep: 1.2 },
  { d: 'M45.5 -242h9l-2.5 -8h-4.5Z' },
  { d: 'M8 -150L30 -160L40 -190', w: 8, sep: 1.4 },
]
const ATTENDANT_CUTS = gouge(-14, -93, 15, -93, 1) + gouge(-2, -140, -6, -56, 0.9, 0.8)

// ── Lady Macbeth: cut in paper, bowing in welcome at the gate ───────────────
// Drawn facing right and mirrored, so she faces the king.
const LADY_HEAD = 'translate(14 -174) rotate(14) scale(0.84)'
const LADY: Part[] = [
  // her far arm
  { d: 'M11 -147C18 -137 25 -130 33 -126L46 -122', w: 6.2 },
  { d: 'M44 -125C48 -127 53 -126 54 -123C53 -120 48 -119 45 -120Z' },
  {
    d: 'M-2 -156C-12 -138 -14 -116 -13 -100C-20 -70 -32 -34 -46 -1L34 -1C28 -32 22 -68 17 -100C19 -120 22 -138 22 -153C14 -160 4 -160 -2 -156Z',
  },
  { d: HEAD_WOMAN, t: LADY_HEAD },
  { d: VEIL, t: LADY_HEAD, sep: 1.2 },
  // her near arm, opened in welcome
  { d: 'M18 -148C26 -140 33 -135 41 -132L53 -131', w: 6.6, sep: 1.2 },
  { d: 'M51 -134C55 -136 60 -135 61 -132C60 -129 55 -128 52 -129Z', sep: 1 },
]
const LADY_CUTS =
  gouge(4, -118, -8, -6, 0.9, 1) +
  gouge(10, -110, 14, -6, 0.9, -0.6) +
  gouge(-4, -104, -26, -8, 0.8, 1) +
  gouge(-12, -100, 16, -101, 0.9)

function DuncanArrives({ uid }: ArtProps) {
  const m = marks()
  const gate = `${uid}-gate`
  return (
    <>
      <defs>
        <clipPath id={gate}>
          <path d="M604 288V176Q604 132 650 130Q696 132 696 176V288Z" />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [650, 220], push: 1.03 })}>
        {/* the evening sky and the low hills */}
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path
          d={`M0 ${HORIZON - 14}C60 ${HORIZON - 26} 130 ${HORIZON - 30} 200 ${HORIZON - 20}C260 ${HORIZON - 12} 320 ${HORIZON - 26} 400 ${HORIZON - 22}C440 ${HORIZON - 20} 470 ${HORIZON - 14} 480 ${HORIZON - 10}V${HORIZON + 6}H0Z`}
          fill={INK}
        />
        <path d={m.hills} fill={PAPER} />
        <path d={m.ground} fill={INK} />
        <path d={m.shade} fill={INK} />
        {/* long evening shadows, cast towards the castle */}
        <path
          d="M186 306H232L452 316L430 319ZM284 302H356L584 311L556 316ZM36 310H74L260 318L240 321Z"
          fill={INK}
        />

        {/* the castle: curtain wall, a round tower on the left, a keep on the right */}
        <rect x={500} y={96} width={290} height={192} fill={INK} />
        <path d={m.wall} fill={PAPER} />
        <path d="M468 60H540V288H468Z" fill={INK} />
        <path d={m.drum} fill={PAPER} />
        <path d={merlons(466, 542, 44, 18, 12, 9)} fill={INK} />
        <rect x={464} y={60} width={80} height={5} fill={INK} />
        <path d={gouge(466, 62.5, 542, 62.5, 1.1)} fill={PAPER} />
        <path d="M492 130v26M492 190v22" stroke={INK} strokeWidth={3} />
        <rect x={778} y={46} width={W - 778} height={242} fill={INK} />
        <path d={m.tower} fill={PAPER} />
        <path d={merlons(776, W, 26, 20, 14, 9)} fill={INK} />
        <path d="M818 110v34M818 200v28" stroke={PAPER} strokeWidth={2.6} />

        {/* the parapet and its jutty: a ledge on corbels, the nests beneath */}
        <path d={merlons(540, 780, 70, 18, 14, 10)} fill={INK} />
        <rect x={536} y={86} width={248} height={8} fill={INK} />
        <path d={gouge(538, 89.5, 782, 89.5, 1.3)} fill={PAPER} />
        <g fill={INK}>
          {[548, 578, 608, 638, 668, 698, 728, 758].map((x) => (
            <path key={x} d={`M${x} 94h12l-3 9h-6Z`} />
          ))}
        </g>
        <path
          d={[548, 578, 608, 638, 668, 698, 728, 758]
            .map((x) => gouge(x + 1, 95, x + 11, 95, 0.8))
            .join('')}
          fill={PAPER}
        />
        <g>
          {[
            [570, 104],
            [600, 104],
            [690, 104],
            [721, 104],
            [750, 104],
            [800, 52],
          ].map(([x, y]) => (
            <g key={x} transform={`translate(${x} ${y})`}>
              <path d={NEST} fill={INK} stroke={PAPER} strokeWidth={1.3} />
              <path d={NEST_MUD} fill="none" stroke={PAPER} strokeWidth={0.9} />
            </g>
          ))}
        </g>

        {/* the gate: a black mouth under a cut stone arch, the portcullis raised */}
        <path
          d="M596 288V176Q596 124 650 122Q704 124 704 176V288Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path d="M604 288V176Q604 132 650 130Q696 132 696 176V288Z" fill={INK} />
        <path
          d={
            'M598 176L606 176M600 150L608 154M612 132L617 139M630 124L632 132M650 122L650 130M670 124L668 132M688 132L683 139M700 150L692 154M702 176L694 176'
          }
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <g clipPath={`url(#${gate})`}>
          <path
            d="M616 128V168M632 126V168M650 124V168M668 126V168M684 128V168M604 144H696M604 160H696"
            stroke={PAPER}
            strokeWidth={1.3}
          />
          <path
            d={[616, 632, 650, 668, 684].map((x) => wedge(x, 167, x, 177, 2.6, 0.2)).join('')}
            fill={PAPER}
          />
        </g>
        {/* the gate's shadow, spilling on to the road */}
        <path d="M596 286H704L730 302H566Z" fill={INK} />
        <path d={`M464 284H${W}V292H464Z`} fill={INK} />

        {/* torches either side of the gate: the welcome */}
        <path d={m.glowL} fill={PAPER} opacity={0.9} />
        <path d={m.glowR} fill={PAPER} opacity={0.9} />
        <g fill={INK}>
          <path d="M580 196h12l-3 14h-6Z" />
          <path d="M708 196h12l-3 14h-6Z" />
          <rect x={584} y={209} width={4} height={14} />
          <rect x={712} y={209} width={4} height={14} />
        </g>
        <g fill={RED}>
          <path
            className="lc-flicker"
            d="M586 197C580 192 581 184 586 172C591 184 592 192 586 197Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8, delay: 0.4 })}
            d="M714 197C708 192 709 184 714 172C719 184 720 192 714 197Z"
          />
        </g>

        {/* Lady Macbeth, in paper against the dark of the gate */}
        <CutFigure
          parts={LADY}
          cuts={LADY_CUTS}
          tone="paper"
          halo={1.4}
          transform="translate(652 290) scale(-0.72 0.72)"
        >
          <path d={EYE} transform={LADY_HEAD} fill={INK} />
        </CutFigure>

        {/* the royal train: an attendant with a torch */}
        <CutFigure
          parts={ATTENDANT}
          cuts={ATTENDANT_CUTS}
          transform="translate(52 310) scale(0.9)"
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.9, delay: 0.2 })}
          d="M97.5 92C91.5 87 92.5 79 97.5 67C102.5 79 103.5 87 97.5 92Z"
          fill={RED}
        />

        {/* Banquo and the king */}
        <CutFigure parts={BANQUO} cuts={BANQUO_CUTS} transform="translate(206 306) scale(0.98)">
          <path d={EYE} transform={BANQUO_HEAD} fill={PAPER} />
        </CutFigure>
        <CutFigure parts={DUNCAN} cuts={DUNCAN_CUTS} transform="translate(322 302)">
          <g transform={DUNCAN_HEAD}>
            <path d={OLD_BEARD} fill={PAPER} stroke={INK} strokeWidth={1.3} />
            <path d={OLD_HAIR} fill={PAPER} />
            <path d={OLD_STRANDS} fill="none" stroke={INK} strokeWidth={0.9} />
            <path d={CROWN} fill={RED} />
            <path d={CROWN_CUTS} fill={PAPER} />
            <path d={EYE} fill={PAPER} />
          </g>
        </CutFigure>

        {/* the martlets: black on the sky, paper against the wall */}
        <g className="lc-drift-r" style={timing({ delay: 0.3 })}>
          <Martlets
            birds={[
              [352, 70, 1.1, true, -8],
              [406, 116, 0.9, false, 10],
              [440, 40, 0.8, true, -14],
              [566, 34, 0.9, false, -6],
              [626, 52, 0.75, true, 8],
              [712, 30, 0.85, false, 4],
              [744, 56, 0.7, true, -10],
            ]}
          />
          <Martlets
            tone="paper"
            birds={[
              [566, 150, 0.8, false, 6],
              [742, 132, 0.75, true, -8],
            ]}
          />
        </g>
      </g>
    </>
  )
}

export const duncanArrives: LinocutArt = { width: W, height: H, Draw: DuncanArrives }
