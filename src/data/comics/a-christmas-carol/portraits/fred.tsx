import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  deg,
  gouge,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { InnerRule, PH, PW, once, portraitGround } from './common'

/**
 * Fred, Scrooge's nephew, as Dickens describes him in Stave One, and nothing
 * else:
 *
 *   "He had so heated himself with rapid walking in the fog and frost, this
 *   nephew of Scrooge's, that he was all in a glow; his face was ruddy and
 *   handsome; his eyes sparkled, and his breath smoked again."
 *
 * So: a young, handsome face in profile, facing left (towards his uncle, as
 * he faces him in the counting-house panel); light cut out of the dark round
 * his head, as if the warmth came off him, and his face edged in the spot
 * colour ("all in a glow"); the spot colour again, flat, on his cheek
 * ("ruddy"); a dark eye with a cut glint ("sparkled"); and three white puffs
 * of breath ("smoked again"), which rise in turn.
 *
 * His dress is not described, so he wears what he wears in the
 * counting-house panel: a plain top hat, a muffler and a greatcoat of 1843.
 * The muffler's end flies out behind him because he has come in from "rapid
 * walking". Nothing here comes from a film or stage production.
 *
 * Drawn facing right, like the Scrooge head, and mirrored as a whole by
 * MIRROR, so marker coordinates below are in the mirrored (printed) frame.
 * Seeds: 707 for the ground, 708 for the cuts in the figure.
 */

const MIRROR = `matrix(-1 0 0 1 ${PW} 0)`

const HAT_CROWN =
  'M124 99L118 30C118 20 140 14 172 14C204 14 226 20 226 30L222 99C200 103 146 103 124 99Z'
const HAT_BRIM =
  'M98 104C100 92 112 94 124 96C150 100 196 100 222 96C234 94 246 92 250 104C244 112 232 110 220 108C194 105 152 105 126 108C112 110 102 112 98 104Z'
const HAT_BAND = 'M121 86C150 91 196 91 223 86L222 98C196 102 150 102 122 98Z'

/** The head in profile, facing right, from under the brim to the jaw. */
const HEAD =
  'M226 104C230 110 233 117 233 123C234 127 233 129 233 131L250 155C253 158 251 162 247 162C244 162 241 162 239 164.5C240 168 242 169 242 171C240 172 239 173 240 174C242 176 241 179 238 181C236 183 237 185 239 188C242 194 238 202 229 204C215 206 196 204 180 196C166 190 150 186 138 180C127 164 123 132 125 104Z'
/** Only the front of the face, forehead to jaw: the edge that glows. */
const FACE_EDGE =
  'M226 104C230 110 233 117 233 123C234 127 233 129 233 131L250 155C253 158 251 162 247 162C244 162 241 162 239 164.5C240 168 242 169 242 171C240 172 239 173 240 174C242 176 241 179 238 181C236 183 237 185 239 188C242 194 238 202 229 204'
const NECK = 'M150 180L146 234L230 234L226 198Z'
/** Hair brushed back under the hat, with the whisker down in front of the ear. */
const HAIR =
  'M125 104L191 104C190 128 192 156 189 177C185 180 181 179 180 174C176 166 168 160 160 158C150 158 140 162 132 164C125 146 123 126 125 104Z'
const EAR = 'M172 138C162 138 158 150 160 160C162 168 168 172 176 170C174 160 175 148 172 138Z'
const CHEEK = 'M198 163C199 155 210 151 218 155C223 160 220 168 210 170C203 171 197 169 198 163Z'

const COAT =
  'M148 232C120 240 92 256 78 284L70 330L300 330C298 296 290 268 272 250C258 240 242 234 230 232C206 246 170 246 148 232Z'
const COLLAR = 'M150 214C136 216 122 226 114 240L106 266C120 252 134 244 150 240Z'
const LAPEL = 'M232 238C246 256 252 282 252 318L238 318C238 286 232 262 222 244Z'

/** The muffler: wound round the neck, one end hanging, one flying out behind. */
const MUFFLER_WRAP = 'M146 214C170 224 206 226 230 212L234 236C208 250 170 250 144 238Z'
const MUFFLER_HANG = 'M212 240C216 262 220 288 218 318L238 318C240 290 236 262 230 238Z'
const FLY_SPINE: Pt[] = Array.from({ length: 13 }, (_, i): Pt => {
  const t = i / 12
  return [150 - t * 126, 226 - t * 8 + Math.sin(t * Math.PI * 2.5) * 5]
})

/** A puff of breath: overlapping rounds, as in the counting-house panel. */
function puff(cx: number, cy: number, s: number): string {
  const rounds: [number, number, number][] = [
    [-0.9, 0.2, 0.62],
    [-0.2, -0.45, 0.78],
    [0.6, -0.1, 0.66],
    [0.1, 0.35, 0.6],
  ]
  return rounds
    .map(([dx, dy, rr]) => {
      const x = cx + dx * s
      const y = cy + dy * s
      const r = rr * s
      return `M${n(x - r)} ${n(y)}a${n(r)} ${n(r)} 0 1 0 ${n(2 * r)} 0a${n(r)} ${n(r)} 0 1 0 ${n(-2 * r)} 0Z`
    })
    .join('')
}
const PUFFS: [number, number, number][] = [
  [263, 171, 7.5],
  [282, 151, 10],
  [299, 127, 12],
]

/** Perpendicular ticks along a spine: the ribbing of a knitted muffler. */
function ribs(spine: Pt[], half: number, every: number): string {
  let d = ''
  for (let i = 0; i < spine.length - 1; i++) {
    const [ax, ay] = spine[i]
    const [bx, by] = spine[i + 1]
    const L = Math.hypot(bx - ax, by - ay)
    const nx = -(by - ay) / L
    const ny = (bx - ax) / L
    for (let t = 0; t < L; t += every) {
      const x = ax + ((bx - ax) * t) / L
      const y = ay + ((by - ay) * t) / L
      d += `M${n(x + nx * half)} ${n(y + ny * half)}L${n(x - nx * half)} ${n(y - ny * half)}`
    }
  }
  return d
}

type Marks = {
  ground: string
  glow: string
  hair: string
  shade: string
  sheen: string
  coat: string
  muffler: string
  fly: string
  flyRibs: string
  fringe: string
}

const marks = once<Marks>(() => {
  // Lit from his face outwards, so the ground itself glows round him.
  const ground = portraitGround(707, (x, y) => 1.1 - Math.hypot(x - 118, (y - 150) * 1.1) / 150)
  const r = rng(708)
  // "all in a glow": broken rings of light round his head, widest nearest him.
  let glow = ''
  for (let rad = 88; rad < 168; rad += 8)
    glow += arcDashes(r, 214, 150, rad, deg(-180), deg(180), [10, 30], [6, 16])

  // Hair brushed back under the hat: fine paper strands on the ink.
  let hair = ''
  for (let i = 0; i < 18; i++) {
    const y0 = 108 + i * 3.8 + between(r, -1, 1)
    const x1 = 170 - between(r, 0, 6) - (i > 11 ? (i - 11) * 3 : 0)
    hair += gouge(x1, y0, x1 - between(r, 18, 30), y0 + between(r, 5, 11), between(r, 0.5, 0.95))
  }
  for (let i = 0; i < 9; i++)
    hair += gouge(
      187 - between(r, 0, 2),
      108 + i * 7.5,
      181 - between(r, 0, 2),
      118 + i * 7.5,
      0.75,
    )

  // Modelling, as on the Scrooge head: shadow under the jaw and down the
  // neck, and a few shallow cuts at the temple and under the cheekbone.
  let shade = ''
  for (let y = 204; y < 222; y += 3.6)
    shade += `M${n(160 + (y - 204) * 0.3)} ${n(y)}L${n(222 - (y - 204) * 0.6)} ${n(y + 2)}`
  for (let rad = 16; rad < 30; rad += 3.4)
    shade += arcDashes(r, 204, 138, rad, deg(62), deg(128), [8, 20], [2, 5])
  for (let i = 0; i < 4; i++)
    shade += `M${n(196 + i * 3)} ${n(108 + i)}Q${n(193 + i * 3)} 118 ${n(199 + i * 3)} ${n(128 - i)}`

  // Sheen on the silk of the hat, widest on the side the light comes from.
  let sheen = ''
  for (let i = 0; i < 10; i++) {
    const x = 214 - i * 5.6 + between(r, -1, 1)
    sheen += gouge(x, 26 + between(r, 0, 6), x + 2 - i * 0.2, 80 - between(r, 0, 8), 1.7 - i * 0.13)
  }

  // Folds of the greatcoat, and the shoulder catching the light.
  const coat =
    gouge(258, 262, 274, 318, 2.2, -2) +
    gouge(240, 250, 248, 318, 1.2, -1) +
    gouge(96, 266, 88, 318, 2, 2) +
    gouge(122, 256, 112, 318, 1.3, 1) +
    gouge(170, 252, 164, 312, 0.9) +
    gouge(262, 256, 216, 238, 1.6, 1.5)

  // The knitted muffler: ribbing across the wrap and down the hanging end.
  let muffler = ''
  for (let i = 0; i < 13; i++) {
    const x = 150 + i * 6.6
    muffler += `M${n(x)} ${n(222 + Math.sin(i) * 1)}L${n(x + 1.5)} ${n(241 - Math.abs(6 - i) * 0.6)}`
  }
  for (let y = 246; y < 312; y += 6.5)
    muffler += `M${n(216 + (y - 246) * 0.05)} ${n(y)}L${n(236 + (y - 246) * 0.03)} ${n(y + 1)}`
  const fly = ribbon(FLY_SPINE, 20, 0, true)
  const flyRibs = ribs(FLY_SPINE.slice(0, -1), 8.5, 6.2)
  let fringe = ''
  for (let i = 0; i < 6; i++) {
    const y = 214 + i * 3.4
    fringe += `M${n(24)} ${n(y + 2)}L${n(14)} ${n(y + between(r, -1, 3))}`
  }
  return { ground, glow, hair, shade, sheen, coat, muffler, fly, flyRibs, fringe }
})

function FredPortrait(_: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={MIRROR}>
        <path d={m.glow} fill="none" stroke={PAPER} strokeWidth={1.9} strokeLinecap="round" />
        {/* The ink halo that lifts the figure off the ground. */}
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={HAT_CROWN} />
          <path d={HAT_BRIM} />
          <path d={HEAD} />
          <path d={NECK} />
          <path d={COAT} />
          <path d={m.fly} />
        </g>
        <path d={m.fly} fill={PAPER} />
        <path d={m.flyRibs} fill="none" stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.fringe} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinecap="round" />
        <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.coat} fill={PAPER} />
        <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={NECK} fill={PAPER} />
        {/* "all in a glow": the front of his face edged in the spot colour. */}
        <path d={FACE_EDGE} fill="none" stroke={RED} strokeWidth={8} strokeLinejoin="round" />
        <path d={HEAD} fill={PAPER} />
        <path
          d={m.shade}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
          strokeLinecap="round"
        />
        <path d={HAIR} fill={INK} />
        <path d={m.hair} fill={PAPER} />
        <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
        <path
          d="M170 147C166 150 166 158 169 162"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        {/* "ruddy": the second block, flat on the cheek. */}
        <path d={CHEEK} fill={RED} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* brow, eye, nostril, the corner of a smile, the chin */}
          <path d="M209 118Q220 113 232 118" strokeWidth={3.2} />
          <path d="M213.5 126.5Q220.5 122.5 229 126.5" strokeWidth={2.2} />
          <path d="M215 132Q221 134 227.5 130.5" strokeWidth={LINE.fine} />
          <path d="M243 160.5C240.5 158.5 237.5 159.5 237.5 162.5" strokeWidth={1.5} />
          <path d="M233 160C229 165 229 170 231.5 175" strokeWidth={LINE.fine} />
          <path d="M240 174Q235 175.5 230.5 173" strokeWidth={1.7} />
          <path d="M232 190Q236 192 238 189" strokeWidth={LINE.fine} />
          <path d="M180 178C190 192 206 200 224 203" strokeWidth={1.4} />
        </g>
        {/* "his eyes sparkled": a dark eye with a cut glint. */}
        <circle cx={224.6} cy={128.6} r={3} fill={INK} />
        <circle cx={225.6} cy={127.6} r={1.05} fill={PAPER} />
        <path d={MUFFLER_WRAP} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={MUFFLER_HANG} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.muffler} fill="none" stroke={INK} strokeWidth={LINE.fine} />
        <path d={HAT_CROWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.sheen} fill={PAPER} />
        <path d={HAT_BAND} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={HAT_BRIM} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        {/* "his breath smoked again": three puffs, rising in turn. */}
        {PUFFS.map(([x, y, s], i) => (
          <g key={x} className="lc-rise" style={timing({ delay: 0.5 + i * 0.35, dur: 1.2 })}>
            <path d={puff(x, y, s)} fill={PAPER} />
            <path
              d={`M${n(x - s * 0.6)} ${n(y + s * 0.15)}q${n(s * 0.35)} ${n(-s * 0.45)} ${n(s * 0.8)} 0M${n(x - s * 0.1)} ${n(y - s * 0.55)}q${n(s * 0.3)} ${n(-s * 0.3)} ${n(s * 0.6)} ${n(s * 0.05)}`}
              fill="none"
              stroke={INK}
              strokeWidth={LINE.hairline}
              strokeLinecap="round"
            />
          </g>
        ))}
      </g>
      <InnerRule />
    </>
  )
}

export const fredArt: LinocutArt = { width: PW, height: PH, Draw: FredPortrait }

export const fredPortrait: Portrait = {
  name: 'Fred',
  art: fredArt,
  alt: "A linocut portrait of Fred, Scrooge's nephew, in profile and facing left, drawn from Dickens's description in Stave One: a young, handsome face with a straight nose and a smile at the corner of his mouth, its front edged in red, with a flat red flush on his cheek and a dark eye with a white glint in it. Three white puffs of breath rise from his lips into the cold air, and pale rays are cut into the dark all round his head, as if he were giving off warmth. He wears a tall black top hat, a pale knitted muffler with one end flying out behind him, and a dark greatcoat with its collar turned up. Four numbered red markers point to the glow round his face, his red cheek, his eye and his breath.",
  describedBy: [
    { phrase: 'all in a glow', at: [46, 62], to: [66, 84] },
    { phrase: 'his face was ruddy and handsome', at: [138, 184], to: [122, 164] },
    { phrase: 'his eyes sparkled', at: [66, 116], to: [104, 127] },
    { phrase: 'his breath smoked again', at: [34, 184], to: [44, 150] },
  ],
  where: 'Stave One',
  passage:
    "He had so heated himself with rapid walking in the fog and frost, this nephew of Scrooge's, that he was all in a glow; his face was ruddy and handsome; his eyes sparkled, and his breath smoked again.",
  note: 'Everything cold in his uncle is warm in Fred. Scrooge carries his own cold about with him; his nephew comes in out of the fog and frost glowing.',
}
