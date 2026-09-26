import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arc,
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  rays,
  ribbon,
  rng,
  wave,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { BEARD_LINES, HAIR_CUTS } from './act1-people'
import { CutFigure, type Part } from './cut-figure'
import { CROWN, EYE, HEAD_BEARD, HEAD_MACBETH } from './inverness-people'
import { Witch } from './witch'

/**
 * Act 1, Scene 3: "The prophecies", the third moment in the guide's timeline.
 * Every detail is from the scene:
 *
 * - "A heath." "Thunder." Macbeth's first line is "So foul and fair
 *   a day I have not seen", and he calls it "this blasted heath". So it is
 *   day, and the sky is split: a dark storm, rain and a far fork of
 *   lightning over the witches on the left, the sun breaking through on the
 *   right, behind the two soldiers, so they stand black against daylight.
 * - Banquo sees them "So wither’d, and so wild in their attire", "each at once
 *   her choppy finger laying / Upon her skinny lips", with beards. The same
 *   three as in The witches meet, drawn from those words (./witch.tsx): one
 *   points at Macbeth, one lays a finger on her lips, one lifts both arms.
 * - "All hail, Macbeth! that shalt be king hereafter!" The promise is shown as
 *   a crown hanging in the air above Macbeth's head, not on it, in the spot
 *   colour, inside a dark disc with light breaking out of it: a sign, not a
 *   thing he could reach. It is the only red in the panel, as the other
 *   Macbeth panels crown the king in red.
 * - "Good sir, why do you start and seem to fear / Things that do sound so
 *   fair?" Macbeth starts back, a hand up; Banquo, who "neither beg[s] nor
 *   fear[s]", stands his ground with his spear and questions them.
 * - They come from the battle, so both wear the mail shirt and pinned cloak of
 *   an eleventh-century Scottish soldier, as in the Macbeth portraits, and
 *   the heads the other Macbeth panels share (./inverness-people.tsx):
 *   HEAD_MACBETH for Macbeth, the plain bearded head for Banquo. The play
 *   describes neither man's looks.
 *
 * Nothing is taken from a film or stage production. Seeds: 231 (sky), 232
 * (sun), 233 (rain), 234 (heath), 235 (mist), 237 (the crown's rays).
 */

const W = 860
const H = 340
const HORIZON = 252

type Marks = {
  sky: string
  sun: string
  rain: string
  heath: string
  mist: string
  bolt: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Fair on the right, where the sun breaks through; foul on the left.
  // "So foul and fair a day": dark storm over the witches on the left, the
  // sky cut brighter and brighter towards the sun on the right, so the black
  // figures of the soldiers stand against daylight.
  const light = (x: number, y: number) => {
    const sun = clamp(1 - Math.hypot(x - 780, (y - 58) * 1.1) / 560)
    const low = clamp(1 - (HORIZON - y) / 60) * 0.4
    return Math.max(Math.pow(sun, 0.85), low, 0.05)
  }
  const sky = gougeField(rng(231), { x0: 0, x1: W, y0: 4, y1: HORIZON - 6 }, light, {
    spacing: 8.2,
    len: [24, 90],
    gap: [6, 22],
  })
  const sun = rays(rng(232), 780, 58, { from: 40, to: 150, every: 8, width: 3.4 })

  // Rain slanting out of the storm over the witches.
  const rr = rng(233)
  let rain = ''
  for (let i = 0; i < 46; i++) {
    const x = between(rr, 10, 420)
    const y = between(rr, 20, 210)
    const len = between(rr, 12, 22)
    rain += gouge(x, y, x + len * 0.3, y + len, 0.6)
  }

  // Thunder: a far fork of lightning over the storm.
  const bolt = ribbon(
    [
      [424, 0],
      [432, 24],
      [420, 36],
      [438, 66],
      [430, 76],
      [442, 104],
    ],
    5,
    0.6,
    false,
  )

  // Heather on the blasted heath, larger towards the reader.
  const rg = rng(234)
  let heath = ''
  for (let y = HORIZON + 6; y < H; y += 10 + (y - HORIZON) * 0.16) {
    const s = 0.7 + (y - HORIZON) / 100
    for (let x = between(rg, -10, 10); x < W; x += between(rg, 22, 44) * s) {
      if (rg() < 0.4) continue
      for (let k = -1; k <= 1; k++) {
        const len = between(rg, 4, 7) * s
        const a = deg(-90 + k * 22 + between(rg, -6, 6))
        heath += gouge(x, y, x + Math.cos(a) * len, y + Math.sin(a) * len, 0.5 + s * 0.3)
      }
    }
  }

  // A low mist at the witches' feet: "The earth hath bubbles, as the water
  // has, / And these are of them."
  const rm = rng(235)
  let mist = ''
  for (let y = 262; y < 312; y += 5) {
    const dense = clamp(1 - Math.abs(y - 284) / 26)
    let x = between(rm, -60, -10)
    while (x < 470) {
      const len = between(rm, 50, 150)
      if (rm() < 0.4 + dense * 0.6)
        mist += ribbon(
          wave(x, Math.min(x + len, 480), y, 1.2, 90, between(rm, 0, 6), 7),
          1 + dense * 4.2 * between(rm, 0.85, 1.1),
          0.6,
        )
      x += len * (0.72 + (1 - dense) * 0.3) + between(rm, 3, 18) * (1.2 - dense)
    }
  }

  cached = { sky, sun, rain, heath, mist, bolt }
  return cached
}

// ── Macbeth: starting back, one hand up, the other at his sword ─────────────
// Drawn facing right, feet on y = 0, and mirrored to face the witches.
const MACBETH_HEAD = 'translate(0 -181) rotate(-10) scale(0.95)'
const MACBETH: Part[] = [
  // the cloak, flying out behind him
  {
    d: 'M-8 -166C-30 -150 -48 -112 -58 -64C-62 -40 -66 -18 -74 -2L-28 -2C-26 -40 -22 -92 -14 -132Z',
  },
  // legs braced as he starts back: the rear one planted wide
  { d: 'M-6 -58L-24 -10', w: 10.5 },
  { d: 'M8 -58L16 -9', w: 10.5 },
  { d: 'M-33 -13L-21 -13L-16 -5L-16 0L-35 0Z' },
  { d: 'M10 -12L21 -12L29 -5L29 0L10 0Z' },
  // the mail shirt, to the knee
  {
    d: 'M-12 -164C-20 -140 -20 -112 -17 -92L-24 -50L24 -50L17 -92C16 -116 15 -142 11 -162C3 -168 -4 -168 -12 -164Z',
  },
  { d: HEAD_MACBETH, t: MACBETH_HEAD },
  // the sword at his hip, and his far hand on its hilt
  { d: 'M4 -96L-38 -62', w: 4.6, sep: 1.4 },
  { d: 'M4 -96L12 -103', w: 3.6, sep: 1.2 },
  { d: 'M0 -101L8 -91', w: 3, sep: 1.2 },
  { d: 'M10 -104C14 -106 18 -103 17 -99C16 -95 11 -95 9 -98Z', sep: 1 },
  // the near arm flung up, palm out
  { d: 'M8 -152C18 -150 26 -154 32 -162L40 -176', w: 8, sep: 1.4 },
  {
    d: 'M36 -174C35 -180 37 -187 40 -191L42 -190.5L42.5 -184L45 -192L47.5 -191.5L46.5 -183L49.5 -189L51.5 -188L48 -178C46 -174 40 -171 36 -174Z',
  },
]
/** Belt, brooch, folds, and rows of ring mail cut across the shirt. */
function mail(x0: number, x1: number, y0: number, y1: number) {
  let d = ''
  let row = 0
  for (let y = y0; y < y1; y += 5.4, row++)
    for (let x = x0 + (row % 2) * 2.6; x < x1; x += 5.2) d += arc(x, y, 2.1, deg(20), deg(160))
  return d
}
const MACBETH_MAIL = mail(-12, 12, -150, -104) + mail(-18, 18, -88, -56)
const MACBETH_CUTS =
  gouge(-17, -95, 17, -95, 1.2) +
  gouge(-18, -132, -30, -52, 1, 1) +
  gouge(-40, -100, -56, -10, 1, 1.2)

// ── Banquo: standing his ground, spear upright, questioning them ────────────
const BANQUO_HEAD = 'translate(3 -181) rotate(4) scale(0.92)'
const BANQUO: Part[] = [
  { d: 'M-9 -164C-26 -140 -34 -100 -40 -44L-14 -42C-14 -84 -12 -122 -6 -150Z' },
  { d: 'M-7 -56L-10 -8', w: 10 },
  { d: 'M7 -56L12 -8', w: 10 },
  { d: 'M-17 -11L-5 -11L-1 -4L-1 0L-19 0Z' },
  { d: 'M6 -11L17 -11L25 -4L25 0L6 0Z' },
  {
    d: 'M-12 -162C-18 -138 -18 -112 -16 -92L-22 -52L22 -52L16 -92C16 -116 16 -142 13 -161C5 -166 -5 -166 -12 -162Z',
  },
  { d: HEAD_BEARD, t: BANQUO_HEAD },
  // the spear, held upright in his far hand
  { d: 'M30 -236L32 4', w: 3.6, sep: 1.2 },
  { d: 'M30 -236L26.5 -250L31 -262L35 -250Z', sep: 1 },
  { d: 'M10 -150L22 -132L30 -130', w: 8, sep: 1.4 },
  { d: 'M26 -136C30 -139 35 -136 34 -131C33 -127 28 -126 26 -129Z' },
  // the near hand opened towards them: "Live you?"
  { d: 'M6 -150C12 -134 20 -116 30 -110L44 -112', w: 8, sep: 1.4 },
  { d: 'M42 -116C46 -118 52 -117 54 -114C52 -110 47 -108 43 -109Z', sep: 1 },
]
const BANQUO_MAIL = mail(-11, 12, -150, -104) + mail(-17, 17, -88, -56)
const BANQUO_CUTS = gouge(-16, -95, 16, -95, 1.2) + gouge(-22, -132, -32, -50, 1, 1)

/**
 * The promise: a dark disc in the bright sky above Macbeth, light breaking
 * out of it, and the crown inside it in red.
 */
const CROWN_AT: [number, number] = [552, 46]
const CROWN_RAYS = rays(rng(237), CROWN_AT[0], CROWN_AT[1], {
  from: 22,
  to: 40,
  every: 9,
  width: 2.4,
})

function Prophecies(_: ArtProps) {
  const m = marks()
  const fig = (
    parts: Part[],
    at: string,
    s: number,
    cuts: string,
    mailCuts: string,
    head: string,
    hair = true,
  ) => (
    <CutFigure parts={parts} cuts={cuts} transform={`${at} scale(${-s} ${s})`}>
      <path d={mailCuts} fill="none" stroke={PAPER} strokeWidth={0.8} />
      <path d={EYE} transform={head} fill={PAPER} />
      {hair && <path d={HAIR_CUTS} transform={head} fill={PAPER} />}
      <path d={BEARD_LINES} transform={head} fill="none" stroke={PAPER} strokeWidth={0.9} />
    </CutFigure>
  )
  return (
    <g className="lc-push" style={timing({ origin: [560, 170], push: 1.03 })}>
      {/* the sky: storm over the witches, the sun breaking through on the right */}
      <path d={m.sky} fill={PAPER} />
      <path d={m.sun} fill={PAPER} />
      <circle cx={780} cy={58} r={34} fill={PAPER} />
      <path d={m.rain} fill={PAPER} />
      <path className="lc-glow" style={timing({ delay: 0.4 })} d={m.bolt} fill={PAPER} />

      {/* the heath */}
      <path
        d={`M0 ${HORIZON + 2}L0 ${HORIZON - 6}Q200 ${HORIZON - 16} 420 ${HORIZON - 8}T${W} ${HORIZON - 8}L${W} ${HORIZON + 2}Z`}
        fill={INK}
      />
      <path d={`M0 ${HORIZON}H${W}`} stroke={PAPER} strokeWidth={1.2} />
      <path d={m.heath} fill={PAPER} />

      {/* the three witches, hailing him */}
      <g transform="translate(38 76) scale(0.88)">
        <Witch pose="arms" />
      </g>
      <g transform="translate(140 66) scale(0.94)">
        <Witch pose="hush" />
      </g>
      <g transform="translate(250 58)">
        <Witch pose="point" />
      </g>
      <g className="lc-drift" style={timing({ delay: 0.2 })}>
        <path d={m.mist} fill={PAPER} />
      </g>

      {/* Banquo behind, Macbeth in front starting back */}
      {fig(BANQUO, 'translate(684 316)', 1.1, BANQUO_CUTS, BANQUO_MAIL, BANQUO_HEAD)}
      {fig(MACBETH, 'translate(548 330)', 1.2, MACBETH_CUTS, MACBETH_MAIL, MACBETH_HEAD, false)}

      {/* "that shalt be king hereafter": the crown hangs in the air above him */}
      <g className="lc-fade-in" style={timing({ delay: 1.2, dur: 1.4 })}>
        <circle cx={CROWN_AT[0]} cy={CROWN_AT[1]} r={38} fill={PAPER} />
        <circle cx={CROWN_AT[0]} cy={CROWN_AT[1]} r={35} fill={INK} />
        <path d={CROWN_RAYS} fill={PAPER} />
        <path
          d={CROWN}
          transform={`translate(${CROWN_AT[0] + 1} ${CROWN_AT[1] + 28}) scale(1.5)`}
          fill={RED}
          stroke={INK}
          strokeWidth={1.4}
          strokeLinejoin="round"
        />
        <path
          d={gouge(CROWN_AT[0] - 20, CROWN_AT[1] + 8, CROWN_AT[0] + 21, CROWN_AT[1] + 8.6, 1.2)}
          fill={INK}
        />
      </g>
    </g>
  )
}

export const theProphecies: LinocutArt = { width: W, height: H, Draw: Prophecies }
