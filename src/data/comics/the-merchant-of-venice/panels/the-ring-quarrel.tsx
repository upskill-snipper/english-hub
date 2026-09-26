import type { LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  type Pt,
  type Rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type Pose } from './people'

/**
 * Act 5, Scene 1: "The ring quarrel", the sixteenth and last moment in the
 * guide's timeline. Every detail is from the scene, as the held edition
 * prints it (src/data/full-texts/the-merchant-of-venice.ts):
 *
 * - "Belmont. The avenue to Portia's house." PORTIA: "I have not yet /
 *   Enter'd my house." So everyone stands out of doors, on the avenue, with
 *   the house at its end. The avenue is lined with trees ("When the sweet
 *   wind did gently kiss the trees"), cut as two rows of tall cypresses
 *   running back to the door, and the grassy bank where Lorenzo and Jessica
 *   sat is pale in the foreground: "How sweet the moonlight sleeps upon this
 *   bank!"
 * - THE TIME. The guide says "towards dawn"; the scene says "It is almost
 *   morning", but also "being two hours to day", and Gratiano swears "By
 *   yonder moon". So it is still night: the moon is up, the stars are out
 *   ("the floor of heaven / Is thick inlaid with patens of bright gold", some
 *   cut as round patens; "these blessed candles of the night"), and one
 *   window of the house is lit: "That light we see is burning in my hall. /
 *   How far that little candle throws his beams!" Its candle is the one
 *   other mark of the spot colour, with its beams cut round it.
 * - THE MOMENT. BASSANIO: "Pardon this fault, and by my soul I swear / I
 *   never more will break an oath with thee." ANTONIO: "I once did lend my
 *   body for his wealth [...] I dare be bound again". PORTIA: "Then you shall
 *   be his surety. Give him this". ANTONIO: "Here, Lord Bassanio, swear to
 *   keep this ring." BASSANIO: "By heaven, it is the same I gave the doctor!"
 *   So Antonio stands in the middle, between the wives and the husbands,
 *   holding the ring up to Bassanio in his fingers; the ring is the spot
 *   colour, and it catches the moonlight in a burst of cuts, so that the eye
 *   goes to it first. Bassanio, facing him, draws his head back at the sight
 *   of it and holds out an open hand, the fingers apart, to take it. Portia,
 *   behind Antonio, holds her open
 *   hand out towards the ring she has just given him.
 * - WHO IS THERE. The guide names seven, and all seven are drawn: Nerissa
 *   beside her mistress, with Gratiano's ring still in her keeping, her hands
 *   before her; Gratiano behind Bassanio, watching; and Lorenzo and Jessica
 *   on the bank at the left ("Lorenzo here / Shall witness", and the deed of
 *   gift is "to you and Jessica"). Bassanio's and Gratiano's followers are
 *   left out rather than crowded in.
 * - Portia and Nerissa are in their own gowns: the husbands must not know
 *   them for the doctor and the clerk until the letter is read.
 *
 * The people are cut from ./people.tsx, the kit every panel of this text
 * draws them from, and dressed as it dresses them: Portia's fair hair in
 * paper, Nerissa's coif, Antonio's merchant's gown and cap, Bassanio
 * bareheaded with a short cloak and a rapier, Gratiano's feathered cap,
 * Lorenzo's bonnet and Jessica's long dark hair. Nothing is taken from a
 * film or stage production. Seeds: 16101 (the sky), 16102 (the stars),
 * 16103 (the cypresses), 16104 (the grass and the bank), 16105 (the
 * candle's beams), 16106 (the ring's glint).
 */

const W = 860
const H = 340
/** The moon, high over the bank. */
const MOON: Pt = [214, 74]
/** Portia's house at the end of the avenue, and the lit window of the hall. */
const HOUSE = { x0: 598, x1: 764, eaves: 150, ground: 214 }
const HALL_WIN: Pt = [712, 182]
/** The vanishing point of the avenue, at the house door. */
const VP: Pt = [650, 214]

// ── The people ───────────────────────────────────────────────────────────────

/**
 * Antonio, holding the ring up to Bassanio in his fingers, which are cut apart
 * so the hand reads as holding, never as a fist.
 */
const ANTONIO: Pose = {
  look: 'antonio',
  head: { at: [4, -160], rot: 4 },
  far: {
    pts: [
      [-3, -132],
      [-6, -106],
      [-3, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -132],
      [20, -104],
      [42, -114],
    ],
    hand: 'open',
    deg: -60,
    thumb: -1,
    spread: 8,
  },
}
const A_AT: Pt = [382, 330]
const A_S = 1.08
/** Where the ring is, just above Antonio's fingertips, in the drawing's coordinates. */
const RING: Pt = [A_AT[0] + 53.2 * A_S, A_AT[1] - 134 * A_S]

/**
 * Bassanio, facing him, his head drawn back at the sight of it, holding out
 * an open hand, the fingers spread, below and to the side of the ring, to
 * take it as Antonio bids him ("swear to keep this ring").
 *
 * REVIEWED 27 September 2026. He was first cut throwing a hand up at head
 * height in astonishment; at panel size its fingers closed up, and at phone
 * width it read as a fist raised beside Antonio's face. A hand held out low
 * to receive the ring cannot be read as a blow.
 */
const BASSANIO: Pose = {
  look: 'bassanio',
  head: { at: [2, -160], rot: -8 },
  far: {
    pts: [
      [-3, -132],
      [-6, -106],
      [-3, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -132],
      [24, -110],
      [43, -116],
    ],
    hand: 'open',
    deg: -18,
    thumb: -1,
    size: 16,
    spread: 20,
  },
  sword: true,
  cloak: 0,
}

/** Portia, behind Antonio, her open hand held out towards the ring she gave him. */
const PORTIA: Pose = {
  look: 'portia',
  head: { at: [3, -154], rot: 2 },
  far: {
    pts: [
      [-3, -126],
      [-5, -104],
      [0, -92],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [3, -126],
      [16, -106],
      [34, -108],
    ],
    hand: 'open',
    deg: -4,
    thumb: -1,
    spread: 12,
  },
}

/** Nerissa beside her mistress, her hands together before her. */
const NERISSA: Pose = {
  look: 'nerissa',
  head: { at: [3, -154], rot: 0 },
  far: {
    pts: [
      [-3, -126],
      [4, -104],
      [14, -100],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [3, -126],
      [8, -104],
      [18, -98],
    ],
    hand: 'mitt',
  },
}

/** Gratiano behind Bassanio, watching. */
const GRATIANO: Pose = {
  look: 'gratiano',
  head: { at: [3, -160], rot: 6 },
  far: {
    pts: [
      [-3, -132],
      [-6, -106],
      [-3, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -132],
      [8, -106],
      [6, -84],
    ],
    hand: 'mitt',
  },
  sword: true,
}

/** Lorenzo and Jessica, who waited at Belmont, looking on from the bank. */
const LORENZO: Pose = {
  look: 'lorenzo',
  far: {
    pts: [
      [-3, -132],
      [-6, -106],
      [-3, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -132],
      [8, -106],
      [6, -84],
    ],
    hand: 'mitt',
  },
}
const JESSICA: Pose = {
  look: 'jessica',
  far: {
    pts: [
      [-3, -126],
      [-4, -104],
      [4, -94],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [3, -126],
      [6, -104],
      [14, -96],
    ],
    hand: 'mitt',
  },
}

// ── The avenue ───────────────────────────────────────────────────────────────

type Tree = { cx: number; base: number; h: number; w: number }
/**
 * The avenue's trees: tall, slim cypresses, in two rows running back to the
 * house door. The left-hand row stands behind the people, the right-hand row
 * beyond the walk; each is cut lighter on the side towards the moon.
 */
const TREES: Tree[] = [
  { cx: 426, base: 272, h: 194, w: 31 },
  { cx: 502, base: 238, h: 132, w: 23 },
  { cx: 560, base: 228, h: 100, w: 17 },
  { cx: 602, base: 220, h: 74, w: 13 },
  { cx: 630, base: 216, h: 52, w: 9 },
  { cx: 826, base: 272, h: 196, w: 32 },
  { cx: 782, base: 240, h: 122, w: 21 },
]

/** A cypress: a flame-shaped crown, widest a third of the way up, dark to the ground. */
function cypress(t: Tree) {
  const { cx, base, h, w } = t
  const top = base - h
  return (
    `M${n(cx - w * 0.5)} ${n(base)}` +
    `C${n(cx - w * 0.85)} ${n(base - h * 0.1)} ${n(cx - w)} ${n(base - h * 0.3)} ${n(cx - w * 0.82)} ${n(base - h * 0.5)}` +
    `C${n(cx - w * 0.6)} ${n(top + h * 0.22)} ${n(cx - w * 0.2)} ${n(top + h * 0.06)} ${n(cx)} ${n(top)}` +
    `C${n(cx + w * 0.2)} ${n(top + h * 0.06)} ${n(cx + w * 0.6)} ${n(top + h * 0.22)} ${n(cx + w * 0.82)} ${n(base - h * 0.5)}` +
    `C${n(cx + w)} ${n(base - h * 0.3)} ${n(cx + w * 0.85)} ${n(base - h * 0.1)} ${n(cx + w * 0.5)} ${n(base)}Z`
  )
}

/** The half-width of a cypress's crown at height y. */
function halfAt(t: Tree, y: number) {
  const f = clamp((t.base - y) / t.h)
  return t.w * 0.92 * Math.max(Math.sin(Math.PI * Math.pow(f, 0.62)), f < 0.3 ? 0.55 : 0)
}

/**
 * The cuts of the foliage: short upward sprays, thickest and most frequent on
 * the side towards the moon (up and to the left) and near the top.
 */
function foliage(r: Rng, t: Tree) {
  let d = ''
  for (let y = t.base - t.h + 10; y < t.base - t.h * 0.1; y += between(r, 6.5, 9)) {
    const half = halfAt(t, y)
    if (half < 3) continue
    for (let k = 0; k < 4; k++) {
      const u = between(r, -0.95, 0.55)
      const x = t.cx + u * half
      const L = clamp(0.62 - u * 0.5 - ((y - (t.base - t.h)) / t.h) * 0.35)
      if (r() > L) continue
      const len = between(r, 4, 8) * (0.8 + L * 0.5)
      d += gouge(x, y, x - len * 0.5, y - len, 0.45 + L * 1.2, -0.6)
    }
  }
  return d
}

type Marks = {
  sky: string
  stars: string
  patens: Pt[]
  crowns: string
  lit: string
  grass: string
  bankMarks: string
  beams: string
  house: string
  glint: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = gougeField(
    rng(16101),
    { x0: 0, x1: W, y0: 4, y1: 214 },
    (x, y) => Math.max(clamp(1 - Math.hypot(x - MOON[0], (y - MOON[1]) * 1.2) / 240) * 0.8, 0.03),
    { spacing: 6.6, len: [26, 96], gap: [8, 28], max: 2.8 },
  )
  const s = rng(16102)
  let stars = ''
  const patens: Pt[] = []
  for (let i = 0; i < 60; i++) {
    const x = between(s, 14, W - 14)
    const y = between(s, 14, 150)
    if (Math.hypot(x - MOON[0], y - MOON[1]) < 70) continue
    if (i % 5 === 0) {
      patens.push([x, y])
      continue
    }
    const sz = between(s, 1.6, 3.4)
    stars += `M${n(x - sz)} ${n(y)}L${n(x)} ${n(y - sz * 0.4)}L${n(x + sz)} ${n(y)}L${n(x)} ${n(y + sz * 0.4)}ZM${n(x)} ${n(y - sz)}L${n(x + sz * 0.4)} ${n(y)}L${n(x)} ${n(y + sz)}L${n(x - sz * 0.4)} ${n(y)}Z`
  }
  const tr = rng(16103)
  const crowns = TREES.map(cypress).join('')
  const lit = TREES.map((t) => foliage(tr, t)).join('')
  const g = rng(16104)
  const grass = gougeField(
    g,
    { x0: 0, x1: W, y0: 218, y1: H },
    (x, y) => clamp(0.18 + (y - 218) / 500 - Math.max(0, x - 560) / 700),
    { spacing: 5.2, len: [8, 26], gap: [5, 16], max: 2 },
  )
  let bankMarks = ''
  for (let y = 258; y < H; y += 6) {
    let x = between(g, -20, 0)
    while (x < 440) {
      const len = between(g, 10, 30)
      const dark = clamp((x - 280) / 190 + (y - 310) / 90)
      if (g() < dark * 0.8)
        bankMarks += gouge(x, y + between(g, -0.6, 0.6), x + len, y, 0.5 + dark * 1.4)
      else if (g() < 0.22) bankMarks += gouge(x, y, x + len * 0.4, y - between(g, 3, 7), 0.5)
      x += len + between(g, 3, 10)
    }
  }
  const beams = rays(rng(16105), HALL_WIN[0], HALL_WIN[1], {
    from: 14,
    to: 58,
    every: 15,
    width: 1.6,
  })
  let house = ''
  for (let y = HOUSE.eaves + 10; y < HOUSE.ground; y += 9)
    house += gouge(HOUSE.x0 + 4, y, HOUSE.x1 - 4, y + between(tr, -0.5, 0.5), 0.55)
  // The ring catches the moonlight: a burst of short cuts round it.
  const glint = rays(rng(16106), RING[0], RING[1], { from: 13, to: 34, every: 18, width: 2.6 })
  cached = {
    sky,
    stars,
    patens,
    crowns,
    lit,
    grass,
    bankMarks,
    beams,
    house,
    glint,
  }
  return cached
}

function TheRingQuarrel() {
  const m = marks()
  const h = HOUSE
  return (
    <g className="lc-push" style={timing({ origin: RING, push: 1.03 })}>
      {/* the night sky, pale round the moon, and the stars and patens */}
      <rect x={0} y={0} width={W} height={H} fill={INK} />
      <path d={m.sky} fill={PAPER} />
      <path d={m.stars} fill={PAPER} />
      <g fill={PAPER}>
        {m.patens.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={n(x)} cy={n(y)} r={2.4} />
        ))}
      </g>
      {/* "By yonder moon" */}
      <circle cx={MOON[0]} cy={MOON[1]} r={34} fill={PAPER} />
      <path
        d={
          gouge(MOON[0] - 20, MOON[1] - 8, MOON[0] + 6, MOON[1] - 10, 1.4) +
          gouge(MOON[0] - 6, MOON[1] + 6, MOON[0] + 22, MOON[1] + 3, 1.6) +
          gouge(MOON[0] - 22, MOON[1] + 16, MOON[0] - 2, MOON[1] + 18, 1.1)
        }
        fill={INK}
      />

      {/* the house at the end of the avenue, and the candle in its hall */}
      <path
        d={`M${h.x0} ${h.ground}V${h.eaves}L${h.x0 + 40} ${h.eaves - 30}H${h.x1 - 40}L${h.x1} ${h.eaves}V${h.ground}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.bold}
        strokeLinejoin="round"
      />
      <path d={`M${h.x0 - 6} ${h.eaves}H${h.x1 + 6}`} stroke={INK} strokeWidth={3} />
      <path d={m.house} fill={INK} />
      <g fill={INK}>
        {[618, 648, 736].map((x) => (
          <path key={x} d={`M${x} 196V178Q${x + 7} 170 ${x + 14} 178V196Z`} />
        ))}
        <path
          d={`M${VP[0] - 10} ${h.ground}V${h.ground - 28}Q${VP[0]} ${h.ground - 38} ${VP[0] + 10} ${h.ground - 28}V${h.ground}Z`}
        />
      </g>
      <path d={m.beams} fill={INK} />
      <path
        className="lc-glow"
        style={timing({ delay: 0.6 })}
        d={`M${HALL_WIN[0] - 8} 196V178Q${HALL_WIN[0]} 170 ${HALL_WIN[0] + 8} 178V196Z`}
        fill={RED}
      />

      {/* the grass, and the pale avenue running up to the door */}
      <rect x={0} y={214} width={W} height={H - 214} fill={INK} />
      <path d={m.grass} fill={PAPER} />
      <path
        d={`M${VP[0] - 12} ${h.ground}L${VP[0] + 12} ${h.ground}L${W + 60} ${H}L400 ${H}Z`}
        fill={PAPER}
      />
      <path
        d={gouge(VP[0] + 4, h.ground + 6, 700, H, 1.2) + gouge(VP[0] - 4, h.ground + 10, 520, H, 1)}
        fill={INK}
      />

      {/* the trees of the avenue */}
      <path
        d={m.crowns}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={m.lit} fill={PAPER} />

      {/* the bank where the moonlight sleeps */}
      <path
        d="M-10 350V262C40 244 120 234 200 236C280 238 350 248 410 264C440 272 470 290 492 350Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.bold}
      />
      <path d={m.bankMarks} fill={INK} />

      {/* Jessica and Lorenzo on the bank, then Nerissa and Portia */}
      <Person pose={JESSICA} at={[58, 314]} scale={1.02} />
      <Person pose={LORENZO} at={[110, 316]} scale={1.02} />
      <Person pose={NERISSA} at={[222, 324]} scale={1.08} />
      <Person pose={PORTIA} at={[292, 328]} scale={1.08} />
      {/* the husbands, just come home, and Antonio between them and their wives */}
      <Person pose={GRATIANO} at={[640, 328]} scale={1.06} flip />
      <Person pose={BASSANIO} at={[516, 330]} scale={1.08} flip />
      {/* "Here, Lord Bassanio, swear to keep this ring." */}
      {/* It is drawn before Antonio, so his fingers hold it from in front. */}
      <g className="lc-glow" style={timing({ delay: 0.5 })}>
        <path d={m.glint} fill={PAPER} />
      </g>
      <circle cx={n(RING[0])} cy={n(RING[1])} r={10.4} fill={PAPER} />
      <circle cx={n(RING[0])} cy={n(RING[1])} r={6.2} fill="none" stroke={INK} strokeWidth={5.2} />
      <circle cx={n(RING[0])} cy={n(RING[1])} r={6.2} fill="none" stroke={RED} strokeWidth={3} />
      <Person pose={ANTONIO} at={A_AT} scale={A_S} />
    </g>
  )
}

export const theRingQuarrel: LinocutArt = { width: W, height: H, Draw: TheRingQuarrel }
