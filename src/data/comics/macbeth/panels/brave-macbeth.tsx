import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  n,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { BEARD_LINES, HAIR_CUTS } from './act1-people'
import { CutFigure, type Part } from './cut-figure'
import {
  CROWN,
  CROWN_CUTS,
  EYE,
  HEAD_BEARD,
  HEAD_MAN,
  HEAD_OLD,
  OLD_BEARD,
  OLD_HAIR,
  OLD_STRANDS,
} from './inverness-people'

/**
 * Act 1, Scene 2: "Brave Macbeth", the second moment in the guide's timeline.
 * Every detail is from the scene:
 *
 * - "A Camp near Forres." "Alarum within. Enter King Duncan, Malcolm,
 *   Donalbain, Lennox, with Attendants, meeting a bleeding Captain." So the
 *   king's tent
 *   on the right, and the battle still going on beyond the camp ("Alarum
 *   within"), on the ridge to the left: spears and banners black against the
 *   pale haze of the fight, dark smoke rising behind them.
 * - "What bloody man is that?" ... "I am faint, my gashes cry for help." The
 *   captain has come straight from the fight and can barely stand, so he is
 *   down on one knee, holding himself up on his spear. His wounds are the
 *   play's words, never the picture's: nothing on him is cut or marked.
 * - "For brave Macbeth (well he deserves that name), / Disdaining Fortune, with
 *   his brandish’d steel, / Which smok’d with bloody execution, / Like Valour’s
 *   minion, carv’d out his passage". The captain flings an arm back
 *   at the ridge where the fight is. Macbeth is not in this scene (he first
 *   enters in 1.3), so he is not in the picture: what he did to Macdonwald
 *   is the captain's story, and is left entirely to the words. No one is
 *   struck, and no one lies on the field.
 * - "O valiant cousin! worthy gentleman!" Duncan, old and crowned as the other
 *   Macbeth panels draw him ("the old man", 5.1; "His silver skin", 2.3),
 *   lifts a hand in praise. His crown is the panel's only red. His white
 *   beard and hair are edged in ink, because the tent behind his head is
 *   paper and a paper beard on paper disappears.
 * - "This is the sergeant / Who, like a good and hardy soldier, fought /
 *   ’Gainst my captivity.—Hail, brave friend!" Malcolm, young and beardless,
 *   holds out
 *   a hand to him, at shoulder height, clear of the dark door of the tent.
 *
 * REVIEWED 26 September 2026. The first version drew a small Macbeth on the
 * ridge with his sword printed red. He is not on stage in 1.2, and a panel
 * shows only who is there, so he was cut, and the spears close the gap he
 * left. The same review found Duncan's beard invisible against the tent and
 * Malcolm's hand resting on the tent door, and fixed both.
 *
 * Ross, who brings the news of Cawdor later in the scene, is not in the
 * picture: the panel shows the report of Macbeth, which is the moment's name.
 * Nothing is taken from a film or stage production. Seeds: 221 (sky), 222
 * (smoke), 223 (ground), 224 (spears), 225 (grass), 226 (haze).
 */

const W = 860
const H = 340
const HORIZON = 222

type Marks = {
  sky: string
  smoke: [number, number, number][][]
  ground: string
  grass: string
  spears: string
  tentShade: string
  haze: string
  hazeCuts: string
}

/** The ridge where the battle is, falling from the left edge to the plain. */
const RIDGE = `M-10 ${H}L-10 176C60 168 150 170 240 184C300 194 360 206 430 ${HORIZON}L430 ${H}Z`
const ridgeY = (x: number) => 176 + (x / 430) * (HORIZON - 176) + Math.sin((x / 430) * Math.PI) * 4

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // An overcast day. Behind the ridge the air is pale with the haze of the
  // fight, so the spears and the figure of Macbeth stand black against it;
  // over the plain it lightens towards the horizon.
  const light = (x: number, y: number) => {
    const plain = clamp(1 - Math.hypot((x - 560) * 0.6, (y - 200) * 1.6) / 330)
    return Math.max(plain * 0.95, 0.08)
  }
  const sky = gougeField(rng(221), { x0: 0, x1: W, y0: 4, y1: HORIZON }, light, {
    spacing: 7.6,
    len: [22, 86],
    gap: [6, 22],
  })

  // Smoke off the battle: dark billows rising from behind the ridge and
  // leaning right on the wind, as overlapping rounds whose union is the cloud.
  const rs = rng(222)
  const smoke: [number, number, number][][] = []
  for (const [x0, lean] of [
    [40, 1.2],
    [118, 0.9],
    [282, 1.1],
    [352, 0.8],
  ]) {
    const puffs: [number, number, number][] = []
    let y = ridgeY(x0) - 10
    for (let t = 0; t < 7; t++) {
      const r = 4 + t * 2.3 + between(rs, -0.6, 0.6)
      puffs.push([x0 + (t * t * 1.1 + t * 3) * lean + between(rs, -1.5, 1.5), y, r])
      y -= r * 0.95
    }
    smoke.push(puffs)
  }

  // The spears of the armies along the ridge, mostly upright, a few levelled,
  // and three banners above them.
  const rp = rng(224)
  let spears = ''
  for (let x = 8; x < 400; x += between(rp, 6, 11)) {
    const y = ridgeY(x) + 3
    const lean = between(rp, -0.35, 0.35) + (rp() < 0.1 ? 1.1 : 0)
    const len = between(rp, 30, 48)
    const tx = x + Math.sin(lean) * len
    const ty = y - Math.cos(lean) * len
    spears += wedge(x, y, tx, ty, 2.8, 1.6)
    spears += gouge(tx, ty, tx + Math.sin(lean) * 8, ty - Math.cos(lean) * 8, 2.2)
  }
  for (const x of [58, 262, 336]) {
    const y = ridgeY(x) + 3
    spears += wedge(x, y, x + 2, y - 70, 3, 2)
    spears += `M${n(x + 2)} ${n(y - 70)}L${n(x + 26)} ${n(y - 64)}L${n(x + 18)} ${n(y - 58)}L${n(x + 26)} ${n(y - 52)}L${n(x + 2)} ${n(y - 50)}Z`
  }

  // The trampled ground of the plain and the camp: ink cut with furrows of
  // light, pale at the horizon and darker towards the reader.
  const ground = gougeField(
    rng(223),
    { x0: 420, x1: W, y0: HORIZON + 4, y1: H },
    (_x, y) => 0.72 - ((y - HORIZON) / (H - HORIZON)) * 0.5,
    { spacing: 6.4, len: [24, 90], gap: [6, 20] },
  )

  // The haze of the fight along the ridge, cut nearly white just above it and
  // darkening upwards into the sky, so the spears stand black against it.
  let haze = `M-10 ${ridgeY(0) + 6}`
  for (let x = -10; x <= 470; x += 10) haze += `L${x} ${n(ridgeY(Math.max(0, x)) + 6)}`
  for (let x = 470; x >= -10; x -= 10)
    haze += `L${x} ${n(ridgeY(Math.max(0, x)) - 64 - 8 * Math.sin(x / 37) - 5 * Math.sin(x / 13))}`
  haze += 'Z'
  const rh = rng(226)
  let hazeCuts = ''
  for (let k = 0; k < 12; k++) {
    const up = 12 + k * 5
    const w = clamp((up - 14) / 52) * 3.2
    let x = between(rh, -40, 0)
    while (x < 470) {
      const len = between(rh, 30, 90)
      if (rh() < 0.3 + w * 0.2) {
        const y1 = ridgeY(Math.max(0, x)) - up
        const y2 = ridgeY(Math.min(430, x + len)) - up
        hazeCuts += gouge(x, y1, x + len, y2, 0.4 + w, between(rh, -0.6, 0.6))
      }
      x += len + between(rh, 4, 24)
    }
  }

  // Tufts of grass on the slope below the battle.
  const rt = rng(225)
  let grass = ''
  for (let y = 214; y < H; y += 9) {
    for (let x = between(rt, 0, 10); x < 430 - (y - 200) * 0.2; x += between(rt, 18, 36)) {
      if (y < ridgeY(x) + 12 || rt() < 0.35) continue
      for (let k = -1; k <= 1; k++) {
        const a = deg(-90 + k * 20 + between(rt, -6, 6))
        const len = between(rt, 5, 9)
        grass += gouge(x, y, x + Math.cos(a) * len, y + Math.sin(a) * len, 0.9)
      }
    }
  }

  // The shaded side of the tent, cut in ink.
  let tentShade = ''
  for (let x = 772; x < 846; x += 5.5) {
    const top = 150 - (846 - x) * 0.9
    tentShade += wedge(x, Math.max(top, 60), x + 6, 300, 0.6, 2 + (x - 772) * 0.05)
  }

  cached = { sky, smoke, ground, grass, spears, tentShade, haze, hazeCuts }
  return cached
}

// ── The captain, down on one knee, holding himself up on his spear ──────────
// Facing right, towards the king; his far arm flung back at the battle.
const CAPTAIN_HEAD = 'translate(6 -150) rotate(10) scale(0.94)'
const CAPTAIN: Part[] = [
  // his torn cloak, hanging behind
  {
    d: 'M-10 -134C-26 -118 -36 -90 -44 -56L-48 -40L-40 -44L-38 -32L-30 -42L-24 -30L-20 -44L-12 -38L-8 -112Z',
  },
  // the far arm, flung back and up at the ridge
  { d: 'M-4 -126L-30 -140L-50 -156', w: 8, sep: 1.4 },
  { d: 'M-48 -160C-52 -163 -57 -161 -57 -157C-56 -153 -51 -152 -48 -154Z' },
  { d: 'M-55 -160L-64 -168', w: 2.6 },
  // legs: the near knee on the ground, the far foot planted
  { d: 'M-2 -58L-10 -8L-40 -6', w: 10 },
  { d: 'M-44 -10L-34 -10L-34 0L-50 0Z' },
  { d: 'M2 -60L30 -58', w: 11 },
  { d: 'M30 -58L32 -8', w: 10 },
  { d: 'M26 -10L38 -10L46 -3L46 0L26 0Z' },
  // his mail shirt
  {
    d: 'M-14 -134C-20 -112 -20 -88 -16 -62L22 -60C24 -86 22 -112 14 -134C6 -140 -6 -140 -14 -134Z',
  },
  { d: HEAD_BEARD, t: CAPTAIN_HEAD },
  // the spear he leans on, and the near hand gripping it
  { d: 'M44 -178L46 2', w: 3.6, sep: 1.2 },
  { d: 'M44 -178L40.5 -191L45 -202L49 -191Z', sep: 1 },
  { d: 'M8 -128C18 -118 28 -106 40 -100', w: 8, sep: 1.4 },
  { d: 'M40 -106C45 -108 50 -104 49 -99C48 -94 42 -94 40 -97Z' },
]
const CAPTAIN_CUTS = gouge(-15, -84, 21, -84, 1.1) + gouge(-2, -128, -8, -66, 0.9, 0.8)

// ── Duncan: old and crowned, one hand lifted in praise ──────────────────────
// Facing right in his own frame and mirrored to face the captain.
const DUNCAN_HEAD = 'translate(4 -183) scale(0.92)'
const DUNCAN: Part[] = [
  {
    d: 'M-8 -166C-26 -150 -38 -112 -46 -64C-50 -38 -54 -16 -60 -1L-24 -1C-22 -40 -18 -92 -13 -132Z',
  },
  {
    d: 'M-12 -164C-20 -148 -22 -120 -21 -95C-22 -60 -30 -25 -38 -1L34 -1C28 -30 22 -65 19 -95C18 -125 18 -148 14 -162C6 -168 -4 -168 -12 -164Z',
  },
  { d: HEAD_OLD, t: DUNCAN_HEAD },
  { d: 'M9 -154C18 -150 28 -152 36 -160L44 -174', w: 8.5, sep: 1.4 },
  {
    d: 'M40 -172C39 -178 41 -186 45 -190L47 -189L47.5 -183L50 -191L52.5 -190.5L51.5 -182L55 -187L57 -185.5L53 -177C51 -173 46 -170 40 -172Z',
  },
]
const DUNCAN_CUTS =
  gouge(-4, -120, -12, -8, 1.2, 1) +
  gouge(8, -118, 14, -8, 1.1, -0.8) +
  gouge(-30, -104, -44, -8, 1, 1.2) +
  gouge(-16, -96, 16, -97, 0.9) +
  gouge(-30, -6, 30, -6, 0.9)

// ── Malcolm: young and beardless, a hand held out to the captain ────────────
const MALCOLM_HEAD = 'translate(3 -181) rotate(-4) scale(0.9)'
const MALCOLM: Part[] = [
  { d: 'M-9 -164C-26 -140 -32 -100 -38 -44L-14 -42C-14 -84 -12 -122 -6 -150Z' },
  { d: 'M-7 -56L-10 -8', w: 10 },
  { d: 'M7 -56L12 -8', w: 10 },
  { d: 'M-17 -11L-5 -11L-1 -4L-1 0L-19 0Z' },
  { d: 'M6 -11L17 -11L25 -4L25 0L6 0Z' },
  {
    d: 'M-12 -162C-18 -138 -18 -112 -16 -92L-22 -52L22 -52L16 -92C16 -116 16 -142 13 -161C5 -166 -5 -166 -12 -162Z',
  },
  { d: HEAD_MAN, t: MALCOLM_HEAD },
  { d: 'M6 -96L-34 -62', w: 4.4, sep: 1.4 },
  { d: 'M6 -96L13 -102', w: 3.4, sep: 1.2 },
  { d: 'M9 -150C16 -142 26 -140 38 -144L52 -148', w: 8, sep: 1.4 },
  { d: 'M50 -152C54 -154 60 -153 62 -150C60 -146 55 -144 51 -145Z', sep: 1 },
]
const MALCOLM_CUTS = gouge(-15, -95, 16, -95, 1.1) + gouge(-2, -130, -6, -58, 1, 0.8)

function BraveMacbeth(_: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [470, 200], push: 1.03 })}>
      <path d={m.sky} fill={PAPER} />
      <path d={m.haze} fill={PAPER} />
      <path d={m.hazeCuts} fill={INK} />
      {m.smoke.map((puffs, k) => (
        <g key={k} className="lc-rise" style={timing({ delay: 0.3 + k * 0.25, dur: 2.4 })}>
          <g fill={PAPER} stroke={PAPER} strokeWidth={3}>
            {puffs.map(([x, y, r]) => (
              <circle key={`${x}-${y}`} cx={n(x)} cy={n(y)} r={n(r)} />
            ))}
          </g>
          <g fill={INK}>
            {puffs.map(([x, y, r]) => (
              <circle key={`${x}-${y}`} cx={n(x)} cy={n(y)} r={n(r)} />
            ))}
          </g>
          <path
            d={puffs
              .slice(2)
              .map(
                ([x, y, r]) =>
                  `M${n(x - r * 0.6)} ${n(y - r * 0.2)}q${n(r * 0.5)} ${n(-r * 0.6)} ${n(r * 1.1)} ${n(-r * 0.1)}`,
              )
              .join('')}
            fill="none"
            stroke={PAPER}
            strokeWidth={1}
            strokeLinecap="round"
          />
        </g>
      ))}

      {/* the plain, and the camp's trampled ground */}
      <path d={m.ground} fill={PAPER} />
      <path d={`M400 ${HORIZON}H${W}`} stroke={PAPER} strokeWidth={1.4} />

      {/* the ridge, and the armies still fighting on it */}
      <path d={RIDGE} fill={INK} />
      <path d={m.spears} fill={INK} />
      <path d={m.grass} fill={PAPER} />

      {/* the king's tent */}
      <path
        d="M592 302L614 150Q700 64 720 38Q740 64 826 150L848 302Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={2}
      />
      <path d={m.tentShade} fill={INK} />
      <path
        d="M720 40L640 300M720 40L684 300M720 40L760 300M720 40L802 300M614 150Q720 176 826 150"
        stroke={INK}
        strokeWidth={1.2}
        fill="none"
      />
      <path d="M698 302L708 196Q720 176 732 196L742 302Z" fill={INK} />
      <path d="M586 300H854L846 310H594Z" fill={INK} />
      <path d="M720 40V12" stroke={PAPER} strokeWidth={5} />
      <path
        d="M720 12L688 17L698 22L688 27L720 26Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <path d="M720 40V12" stroke={INK} strokeWidth={2.4} />

      {/* the captain, Duncan and Malcolm */}
      <CutFigure parts={CAPTAIN} cuts={CAPTAIN_CUTS} transform="translate(430 322) scale(1.08)">
        <path d={EYE} transform={CAPTAIN_HEAD} fill={PAPER} />
        <path d={HAIR_CUTS} transform={CAPTAIN_HEAD} fill={PAPER} />
        <path
          d={BEARD_LINES}
          transform={CAPTAIN_HEAD}
          fill="none"
          stroke={PAPER}
          strokeWidth={0.9}
        />
      </CutFigure>
      <CutFigure
        parts={MALCOLM}
        cuts={MALCOLM_CUTS}
        transform="translate(778 318) scale(-1.04 1.04)"
      >
        <path d={EYE} transform={MALCOLM_HEAD} fill={PAPER} />
        <path d={HAIR_CUTS} transform={MALCOLM_HEAD} fill={PAPER} />
      </CutFigure>
      <CutFigure parts={DUNCAN} cuts={DUNCAN_CUTS} transform="translate(646 326) scale(-1.1 1.1)">
        <g transform={DUNCAN_HEAD}>
          <path d={EYE} fill={PAPER} />
          <path d={OLD_HAIR} fill={PAPER} stroke={INK} strokeWidth={1.2} />
          <path d={OLD_BEARD} fill={PAPER} stroke={INK} strokeWidth={1.2} />
          <path d={OLD_STRANDS} fill="none" stroke={INK} strokeWidth={0.8} />
          <path d={CROWN} fill={RED} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
          <path d={CROWN_CUTS} fill={INK} />
        </g>
      </CutFigure>
    </g>
  )
}

export const braveMacbeth: LinocutArt = { width: W, height: H, Draw: BraveMacbeth }
