import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arc,
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rng,
} from '@/components/comics/linocut/carve'

/**
 * Scrooge, as Dickens describes him in Stave One, and nothing else:
 *
 *   "The cold within him froze his old features, nipped his pointed nose,
 *   shrivelled his cheek, stiffened his gait; made his eyes red, his thin lips
 *   blue; and spoke out shrewdly in his grating voice. A frosty rime was on his
 *   head, and on his eyebrows, and his wiry chin."
 *
 * So: an old face in profile, a long pointed nose, a hollow cheek cut as fine
 * shallow bowls of line, thin lips, a red lower lid, and white bristles of rime
 * standing off his head, brows and chin. His dress is plain period dress for a
 * city man of 1843 (high collar, black stock, black coat), because the text
 * does not describe it. Nothing here comes from a film or stage production.
 *
 * The head is drawn once, in its own 200 by 320 frame facing right, and placed
 * with a transform, so every panel he appears in shows the same man. Later
 * panels (the knocker, the bed-curtains, Christmas morning) should reuse
 * SCROOGE_HEAD and ScroogeHeadLit rather than draw him again.
 */

/** The head in profile, facing right, in a 0..200 by 0..320 frame. */
export const SCROOGE_HEAD =
  'M62 200C64 182 60 164 52 148C38 130 33 102 42 78C54 50 84 32 116 32C138 32 152 43 157 59C161 70 161 78 163 86C166 90 166 94 163 97C161 99 161 101 163 104L186 130C189 133 187 137 182 137C177 137 173 138 170 141C168 143 167 144 167 146C168 149 169 151 167 153L164 154.5C166 156 166 158 165 160C162 162 161 165 164 169C169 175 171 182 166 188C160 192 150 191 140 189C128 192 118 196 112 200Z'
export const SCROOGE_NECK = 'M60 196C62 206 62 216 58 226L122 226C118 216 114 206 112 196Z'
export const SCROOGE_COAT =
  'M50 232C28 240 8 256 -4 280L-10 330L220 330C214 296 200 272 182 256C170 246 154 238 138 232C120 246 80 248 50 232Z'
const COLLAR =
  'M54 228C72 234 106 234 128 224L136 200C130 206 120 210 112 212C92 216 70 214 56 210Z'
const STOCK = 'M52 228C74 240 108 240 134 226L140 242C120 254 80 254 50 242Z'

type HeadMarks = {
  hair: string
  tufts: string
  back: string
  cheek: string
  jaw: string
  socket: string
  temple: string
  rime: string
  stubble: [number, number][]
}

/**
 * The cut marks inside the head for one seed: thin strands swept back from a
 * receding hairline, the shadowed back of the neck, the shrivelled cheek, the
 * rime. Pure, and cached per seed, since a head never changes.
 */
const marksBySeed = new Map<number, HeadMarks>()
function headMarks(seed: number): HeadMarks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  let hair = ''
  for (let i = 0; i < 46; i++) {
    const t = i / 45
    const a0 = deg(266 - t * 100)
    const sx = 112 + Math.cos(a0) * 78 + between(r, -2, 2)
    const sy = 106 + Math.sin(a0) * 76 + between(r, -2, 2)
    const ex = 40 + between(r, -2, 8) + t * 4
    const ey = 70 + t * 74 + between(r, -5, 5)
    const mx = (sx + ex) / 2 - 8 + between(r, -3, 3)
    const my = (sy + ey) / 2 - 10 + t * 6
    if (sx > ex + 4) hair += `M${n(sx)} ${n(sy)}Q${n(mx)} ${n(my)} ${n(ex)} ${n(ey)}`
  }

  let tufts = ''
  for (let i = 0, tries = 0; i < 150 && tries < 3000; tries++) {
    const x = between(r, 30, 150)
    const y = between(r, 28, 150)
    const dx = x - 110
    const dy = y - 110
    if (Math.hypot(dx, dy) < 40 || x > 142 || (x > 78 && y > 96) || (x > 128 && y > 58)) continue
    const th = Math.atan2(dy, dx) - Math.PI / 2 + between(r, -0.25, 0.25)
    const L = between(r, 7, 15)
    const qx = Math.cos(th) * L * 0.5 + between(r, -1.5, 1.5)
    const qy = Math.sin(th) * L * 0.5 + between(r, -1.5, 1.5)
    tufts += `M${n(x)} ${n(y)}q${n(qx)} ${n(qy)} ${n(Math.cos(th) * L)} ${n(Math.sin(th) * L)}`
    i++
  }

  // Shadow on the back of the neck.
  let back = ''
  for (let rad = 72; rad < 110; rad += 3.4)
    back += arcDashes(r, 118, 112, rad, deg(112), deg(150), [8, 22], [2, 5])

  // "shrivelled his cheek": shallow bowls of fine line under the cheekbone.
  let cheek = ''
  for (let rad = 14; rad < 38; rad += 3.3)
    cheek += arcDashes(r, 140 + between(r, -1, 1), 116, rad, deg(58), deg(152), [10, 30], [1.5, 4])

  let jaw = ''
  for (let y = 190; y < 226; y += 3.8)
    jaw += `M${n(92 + (y - 190) * 0.4)} ${n(y)}L${n(150 - (y - 190) * 1.2)} ${n(y + 3)}`

  let socket = ''
  for (let rad = 9; rad < 18; rad += 2.8) socket += arc(153, 101, rad, deg(175), deg(292))

  let temple = ''
  for (let i = 0; i < 6; i++)
    temple += `M${n(122 + i * 3)} ${n(66 + i * 1.5)}Q${n(118 + i * 3)} 84 ${n(126 + i * 3)} ${n(100 - i)}`

  // "A frosty rime was on his head, and on his eyebrows, and his wiry chin":
  // white bristles standing off all three.
  let rime = ''
  const bristle = (x: number, y: number, ang: number, len: number, w: number) => {
    rime += gouge(x, y, x + Math.cos(ang) * len, y + Math.sin(ang) * len, w, between(r, -0.6, 0.6))
  }
  for (let i = 0; i < 30; i++) {
    const a = deg(between(r, 158, 262))
    bristle(
      110 + Math.cos(a) * 72,
      112 + Math.sin(a) * 78,
      a + between(r, -0.4, 0.4),
      between(r, 2.5, 6.5),
      between(r, 0.8, 1.5),
    )
  }
  for (let i = 0; i < 18; i++)
    bristle(
      152 + between(r, 0, 12),
      86 + between(r, -2, 2),
      deg(between(r, -48, -8)),
      between(r, 5, 11),
      between(r, 1.1, 1.9),
    )
  for (let i = 0; i < 16; i++) {
    const t = between(r, 0, 1)
    bristle(
      164.5 + t * 6,
      170 + t * 17,
      deg(between(r, -25, 45)),
      between(r, 3, 7),
      between(r, 0.9, 1.6),
    )
  }

  const stubble: [number, number][] = []
  for (let i = 0; i < 9; i++)
    stubble.push([
      157 + (i % 3) * 3.4 + between(r, -1, 1),
      172 + Math.floor(i / 3) * 4.5 + between(r, -1, 1),
    ])

  const marks = { hair, tufts, back, cheek, jaw, socket, temple, rime, stubble }
  marksBySeed.set(seed, marks)
  return marks
}

const COAT_CUTS =
  gouge(40, 262, 16, 316, 2.4, 3) +
  gouge(64, 262, 58, 318, 1.6, 2) +
  gouge(182, 268, 200, 318, 2.2, -2) +
  gouge(150, 250, 176, 316, 1.4, -1)
const STOCK_CUTS = gouge(70, 238, 96, 244, 1.2) + gouge(104, 241, 128, 236, 1.2)

/**
 * Scrooge's head cut in light: paper face, ink marks. `wide` opens the eye and
 * lifts the brow, for fright (the knocker, the Ghost). Place it with a
 * transform on a parent <g>; knock it out of a busy ground first with
 * ScroogeKnockout.
 */
export function ScroogeHeadLit({
  uid,
  seed,
  wide = false,
}: {
  uid: string
  seed: number
  wide?: boolean
}) {
  const m = headMarks(seed)
  const clip = `${uid}-scrooge-${seed}`
  const up = wide ? -5 : 0
  const eyeUpper = wide ? 'M144.5 97Q152 90.5 161 96' : 'M145 99Q152 96 160 99.5'
  const eyeLower = wide ? 'M146.5 107Q154 109.5 160.5 104.5' : 'M147.5 105Q154 106 159.5 102.5'
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={SCROOGE_HEAD} />
          <path d={SCROOGE_NECK} />
        </clipPath>
      </defs>
      <path d={SCROOGE_COAT} fill={INK} stroke={PAPER} strokeWidth={2} />
      <path d={COAT_CUTS} fill={PAPER} />
      <path d="M138 232L160 290L150 246Z" fill={PAPER} />
      <path d={SCROOGE_NECK} fill={PAPER} />
      <path d={SCROOGE_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.hair} strokeWidth={0.9} />
        <path d={m.tufts} strokeWidth={0.85} />
        <path d={m.back} strokeWidth={1.7} />
        <path d={m.cheek} strokeWidth={0.95} />
        <path d={m.jaw} strokeWidth={1.3} />
        <path d={m.socket} strokeWidth={0.95} />
        <path d={m.temple} strokeWidth={LINE.hairline} />
        <path d="M98 152C112 172 130 186 150 190" strokeWidth={1.4} />
        <path
          d="M84 206C88 212 90 220 90 228M72 204C74 212 74 220 72 228M104 210C106 216 106 222 104 228"
          strokeWidth={LINE.fine}
        />
      </g>
      <path d={STOCK} fill={INK} stroke={PAPER} strokeWidth={1.4} />
      <path d={STOCK_CUTS} fill={PAPER} />
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* the ear */}
        <path d="M96 104C86 104 82 114 84 124C86 134 92 140 100 140" strokeWidth={2} />
        <path d="M95 112C90 114 90 124 93 130C95 133 98 132 99 128" strokeWidth={1.3} />
        {/* the lined forehead, crow's feet, nostril, thin lips */}
        <path
          d="M138 48Q146 46 152 52M136 58Q145 56 154 62M140 68Q148 67 156 72"
          strokeWidth={1.1}
        />
        <path d="M142 102L132 100M142 106L133 108M141 110L135 116" strokeWidth={1} />
        <path d="M173 136C169 131 171 125 177 125" strokeWidth={1.5} />
        <path d="M171 141C165 146 158 151 153 155.5" strokeWidth={1.6} />
        <path d="M150.5 159C151.5 166 154 171 157 175" strokeWidth={1} />
        <path d="M164 154.5C159 155 155 155.5 151 157.5" strokeWidth={1.8} />
        {/* brow and upper lid */}
        <path d={`M147 ${88 + up}Q155 ${84 + up} 164 ${89 + up}`} strokeWidth={3.4} />
        <path d={eyeUpper} strokeWidth={2.2} />
      </g>
      <circle cx={wide ? 155.6 : 155.2} cy={wide ? 100.6 : 101.2} r={wide ? 2.6 : 2.8} fill={INK} />
      {/* "made his eyes red": the spot colour on the lower lid */}
      <path d={eyeLower} fill="none" stroke={RED} strokeWidth={2.3} strokeLinecap="round" />
      <g fill={INK}>
        {m.stubble.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={0.8} />
        ))}
      </g>
      <path d={m.rime} fill={PAPER} transform={`translate(0 ${up})`} />
    </g>
  )
}

/** A thick ink halo round head, neck and coat, to lift the lit head off a busy ground. */
export function ScroogeKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={7}>
      <path d={SCROOGE_HEAD} />
      <path d={SCROOGE_NECK} />
      <path d={SCROOGE_COAT} />
    </g>
  )
}

/** Scrooge as a solid black silhouette: head, neck, collar and coat. */
export function ScroogeSilhouette({ outline }: { outline: number }) {
  return (
    <g>
      <path d={SCROOGE_COAT} fill={INK} stroke={PAPER} strokeWidth={outline} />
      <path d={SCROOGE_NECK} fill={INK} />
      <path d={SCROOGE_HEAD} fill={INK} stroke={PAPER} strokeWidth={outline} />
      <path d={SCROOGE_NECK} fill={INK} />
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={outline * 0.6} />
    </g>
  )
}

// ── The character-card portrait ────────────────────────────────────────────

const PW = 332
const PH = 318

/** Horizontal cuts behind the head, darkest at the left, lightest in front of his face. */
let portraitGround: string | undefined
function ground(): string {
  if (portraitGround) return portraitGround
  const r = rng(404)
  let d = ''
  for (let y = 12; y < PH - 8; y += 5.2) {
    let x = 10 + between(r, 0, 8)
    while (x < PW - 10) {
      const len = between(r, 20, 90)
      const L = clamp((x - 20) / (PW - 40))
      d += gouge(
        x,
        y + between(r, -0.5, 0.5),
        Math.min(x + len, PW - 10),
        y + between(r, -0.5, 0.5),
        0.3 + L * 2.4 * between(r, 0.7, 1.1),
      )
      x += len + between(r, 4, 12)
    }
  }
  portraitGround = d
  return d
}

const PORTRAIT_PLACE = 'translate(26 -4) scale(1.24)'

function ScroogePortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={PORTRAIT_PLACE}>
        <ScroogeKnockout />
      </g>
      <g transform={PORTRAIT_PLACE}>
        <ScroogeHeadLit uid={uid} seed={21} />
      </g>
      <rect
        x={8}
        y={8}
        width={PW - 16}
        height={PH - 16}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.6}
      />
    </>
  )
}

export const scroogePortrait: LinocutArt = { width: PW, height: PH, Draw: ScroogePortrait }
