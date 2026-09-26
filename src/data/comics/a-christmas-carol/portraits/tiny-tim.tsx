import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, n, rays, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { InnerRule, PH, PW, once, portraitGround } from './common'

/**
 * Tiny Tim, as Dickens describes him in Stave Three, and nothing else:
 *
 *   "Alas for Tiny Tim, he bore a little crutch, and had his limbs supported
 *   by an iron frame!"
 *
 * That is almost all the description the text gives him, so the rest is
 * where Stave Three puts him: "His active little crutch was heard upon the
 * floor, and back came Tiny Tim ... to his stool before the fire", and "He
 * sat very close to his father's side upon his little stool."
 *
 * So: a small boy in profile, facing right, sitting on his little stool
 * before the fire, his face lit by it; his little crutch upright beside him,
 * his hand on its grip; and the iron frame on his legs, cut as bars down the
 * outside of the thigh and the shin, hinged at the knee and strapped. The
 * fire is the spot colour, and its light is cut across the whole ground. He
 * is drawn as the family see him: a child at home, bright-faced, not as a
 * figure of pity. This is Tim alive, at the Christmas of Stave Three. The
 * style guide's rule that he is never drawn dead (his loss is shown by the
 * empty seat and the crutch without an owner) belongs to the panels of the
 * future, not to this portrait.
 *
 * His face, hair and clothes are not described, so they are plain: a short
 * jacket with a white collar, and trousers. Nothing here comes from a film or
 * stage production.
 *
 * Seeds: 1843 for the ground, 1844 for the fire's light and the cuts, 1846
 * for the cuts in his hair (see TimHead, which the Bob Cratchit portrait
 * shares).
 */

/** Where the fire's light comes from. */
const FIRE_AT: Pt = [284, 214]

/**
 * Tim's head, facing right, in a frame of its own (about x 110 to 180, y 76
 * to 154). The Bob Cratchit portrait places the same head on his father's
 * shoulder, so he is the same boy in both.
 */
export const TIM_HEAD =
  'M138 78C160 76 174 90 175 108C175 113 175 117 174 120L179 129C180 131 178 132 176 132C175 133 175 134 175 135C176 137 176 138 175 139C174 140 174 141 175 142C175 144 173 146 171 147C171 151 168 154 162 154C154 154 148 151 142 147C134 143 126 138 120 130C110 116 112 90 124 83C128 80 133 78 138 78Z'
/** The head sits a little lower on the neck than it is drawn. */
const HEAD_DROP = 'translate(0 6)'
/** Short hair, with a ragged fringe over the forehead. */
const TIM_HAIR =
  'M172 100C168 86 154 76 138 76C120 77 110 90 110 106C110 118 114 128 120 134C124 126 128 120 132 116C138 110 144 106 150 104L153 108L157 101L161 104L165 98L169 101Z'
const TIM_EAR = 'M138 114C132 114 129 120 130 126C131 131 135 133 140 132C138 126 139 120 138 114Z'
const NECK = 'M140 140L138 166L162 166L160 146Z'
const COLLAR = 'M130 158C142 166 160 166 172 158L176 168C162 176 142 176 126 168Z'
const JACKET =
  'M128 166C118 178 114 200 116 228L156 230C164 214 170 196 174 178C175 172 174 168 172 164Z'
const ARM: Pt[] = [
  [152, 176],
  [164, 192],
  [176, 202],
  [190, 206],
]
const HAND = 'M186 198C192 194 200 196 202 202C202 208 196 212 190 211C185 210 183 204 186 198Z'

/** The legs: thigh along the stool, shin down to the floor. */
const THIGH: Pt[] = [
  [122, 222],
  [150, 222],
  [180, 225],
]
const SHIN: Pt[] = [
  [180, 222],
  [182, 250],
  [184, 280],
]
const BOOT =
  'M176 276C184 274 196 276 204 282C206 288 202 292 194 292L176 292C172 288 172 280 176 276Z'

/** "he bore a little crutch": a small crutch, its padded top under his arm's reach. */
const CRUTCH =
  'M198 160L203 160L209 290L204 290ZM186 154C192 150 208 150 214 154L213 160C207 157 193 157 187 160Z'
const CRUTCH_GRIP = 'M199 206L212 206L212 211L199 211Z'

/** His little stool. */
const SEAT = 'M92 226L162 226L162 235L92 235Z'
const STOOL_LEGS =
  'M100 235L106 235L96 292L90 292ZM148 235L154 235L164 292L158 292ZM124 235L130 235L130 292L124 292Z'

/** The grate and the fire in it: tongues of flame above, coals behind the bars. */
const GRATE = 'M254 244L318 244L318 294L254 294Z'
/** One tongue of flame, rising from `base` and leaning a little. */
function flame(x: number, base: number, h: number, w: number, lean: number): string {
  return `M${n(x - w)} ${base}C${n(x - w)} ${n(base - h * 0.45)} ${n(x + lean - w * 0.4)} ${n(base - h * 0.7)} ${n(x + lean)} ${n(base - h)}C${n(x + lean + w * 0.4)} ${n(base - h * 0.7)} ${n(x + w)} ${n(base - h * 0.45)} ${n(x + w)} ${base}Z`
}
const FLAMES = [
  flame(264, 248, 34, 9, -4),
  flame(280, 248, 52, 11, 2),
  flame(296, 248, 42, 10, -2),
  flame(310, 248, 28, 8, 3),
].join('')

type Marks = {
  ground: string
  light: string
  jacket: string
  arm: string
  thigh: string
  shin: string
  floor: string
  coals: [number, number, number][]
}

/** The cuts in Tim's hair, from their own seed (1846), so both portraits match. */
const timHairCuts = once(() => {
  const r = rng(1846)
  let d = ''
  for (let i = 0; i < 10; i++) {
    const y0 = 88 + i * 4.2
    d += gouge(162 - i * 3.4, y0 + 2, 118 + between(r, 0, 5), y0 + 12 + i, between(r, 0.5, 0.85))
  }
  return d
})

/**
 * Tim's head in its own frame, lit from the front: a child's face, the eye
 * low in the head, a small nose and a small smile. Place it with a transform.
 */
export function TimHead() {
  return (
    <g>
      <path d={TIM_HEAD} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
      <path d={TIM_HAIR} fill={INK} />
      <path d={timHairCuts()} fill={PAPER} />
      <path d={TIM_EAR} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M155 108Q161 105 168 108" strokeWidth={1.8} />
        <path d="M156.5 115.5Q162 112 168 115.5" strokeWidth={2} />
        <path d="M158 120Q163 121.5 167.5 119" strokeWidth={LINE.hairline} />
        <path d="M177 128.5C175 127.5 173 128 173 130.5" strokeWidth={1.3} />
        <path d="M175 140Q172 141.5 168.5 139.5" strokeWidth={1.5} />
        <path d="M150 124Q153 134 161 138" strokeWidth={LINE.hairline} />
      </g>
      <circle cx={164.5} cy={117.2} r={2.9} fill={INK} />
      <circle cx={165.4} cy={116.2} r={0.95} fill={PAPER} />
    </g>
  )
}

/** A lump of coal: an irregular five-sided shape. */
function coal(x: number, y: number, s: number): string {
  const pts = [0, 1, 2, 3, 4].map((i) => {
    const a = (i / 5) * Math.PI * 2 + (i % 2) * 0.3
    const k = i % 2 ? 0.8 : 1.05
    return `${n(x + Math.cos(a) * s * k)} ${n(y + Math.sin(a) * s * k * 0.8)}`
  })
  return `M${pts.join('L')}Z`
}

const marks = once<Marks>(() => {
  const [fx, fy] = FIRE_AT
  const ground = portraitGround(1843, (x, y) => 1 - Math.hypot(x - fx, (y - fy) * 1.2) / 260)
  const r = rng(1844)
  const light = rays(r, fx, fy, { from: 40, to: 300, every: 4.6, width: 6 })

  // Light from the fire catching the front of his jacket and his sleeve.
  const jacket =
    gouge(170, 178, 158, 226, 1.5, -1) +
    gouge(162, 182, 148, 226, 1, -0.5) +
    gouge(128, 180, 124, 224, 0.8)
  const arm = ribbon(ARM, 13, 0.2, false)
  const thigh = ribbon(THIGH, 20, 0.1, false)
  const shin = ribbon(SHIN, 13, 0, true)

  // The floor, lit towards the fire.
  let floor = ''
  for (let y = 296; y < 312; y += 5)
    for (let x = 16 + between(r, 0, 10); x < 240; x += between(r, 30, 60)) {
      const w = 0.4 + (x / 240) * 1.6
      floor += gouge(x, y + between(r, -0.5, 0.5), x + between(r, 16, 36), y, w)
    }

  const coals: [number, number, number][] = []
  for (let i = 0; i < 8; i++)
    coals.push([
      262 + (i % 4) * 15 + between(r, -2, 2),
      258 + Math.floor(i / 4) * 16 + between(r, -2, 2),
      between(r, 4.5, 6.5),
    ])

  return { ground, light, jacket, arm, thigh, shin, floor, coals }
})

/** The boy, his stool and his crutch are drawn at 1 and set larger, from the floor. */
const FIGURE_PLACE = 'translate(146 292) scale(1.15) translate(-150 -292)'

function TinyTimPortrait(_: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <path d={m.light} fill={PAPER} />
      <path d={m.floor} fill={PAPER} />
      {/* The fire before him, the one spot colour in the picture. */}
      <g className="lc-flicker" style={timing({ delay: 0.2, dur: 0.9 })}>
        <path d={FLAMES} fill={RED} />
        <path d={flame(280, 248, 26, 4, 1) + flame(296, 248, 18, 3.4, -1)} fill={PAPER} />
      </g>
      <path d={GRATE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path
        d={m.coals.map(([x, y, s]) => coal(x, y, s)).join('')}
        fill={RED}
        className="lc-glow"
        style={timing({ delay: 0.4 })}
      />
      <path d="M254 256L318 256M254 270L318 270M254 284L318 284" stroke={INK} strokeWidth={3.4} />
      <path d="M254 256L318 256M254 270L318 270M254 284L318 284" stroke={PAPER} strokeWidth={1.2} />
      <g transform={FIGURE_PLACE}>
        {/* The ink halo round the boy, his stool and his crutch. */}
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={TIM_HEAD} transform={HEAD_DROP} />
          <path d={JACKET} />
          <path d={m.thigh} />
          <path d={m.shin} />
          <path d={BOOT} />
          <path d={SEAT} />
          <path d={STOOL_LEGS} />
          <path d={CRUTCH} />
        </g>
        {/* "his little stool" */}
        <path d={STOOL_LEGS} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={SEAT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d="M100 230L154 230" stroke={INK} strokeWidth={LINE.hairline} />
        <path
          d={JACKET}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.jacket} fill={PAPER} />
        {/* "had his limbs supported by an iron frame": on the thigh, a bar
          along its side; at the knee, the hinge; on the shin, a bar down each
          side of the stocking, strapped. */}
        <path
          d={m.thigh}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d="M128 222L176 225" stroke={PAPER} strokeWidth={5} strokeLinecap="round" />
        <path d="M128 222L176 225" stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
        <path d="M142 214L142 230M162 215L162 231" stroke={PAPER} strokeWidth={2.6} />
        <path d={m.shin} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path
          d="M174 230L177 276M188 229L190 276"
          fill="none"
          stroke={PAPER}
          strokeWidth={5}
          strokeLinecap="round"
        />
        <path
          d="M174 230L177 276M188 229L190 276"
          fill="none"
          stroke={INK}
          strokeWidth={2.2}
          strokeLinecap="round"
        />
        <path d="M173 244L190 243M175 262L191 261" stroke={INK} strokeWidth={3} />
        <circle cx={180} cy={225} r={5.2} fill={PAPER} stroke={INK} strokeWidth={1.8} />
        <circle cx={180} cy={225} r={1.4} fill={INK} />
        <path d={BOOT} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={NECK} fill={PAPER} />
        <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        {/* his face, lit by the fire */}
        <g transform={HEAD_DROP}>
          <TimHead />
        </g>
        {/* "he bore a little crutch" */}
        <path d={CRUTCH} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
        <path d={CRUTCH_GRIP} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.arm} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} strokeLinejoin="round" />
        <path d={HAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      </g>
      <InnerRule />
    </>
  )
}

export const tinyTimArt: LinocutArt = { width: PW, height: PH, Draw: TinyTimPortrait }

export const tinyTimPortrait: Portrait = {
  name: 'Tiny Tim',
  art: tinyTimArt,
  alt: "A linocut portrait of Tiny Tim, drawn from Dickens's description in Stave Three: a small boy in profile, facing right, sitting on his little wooden stool before the fire, his face lit by it and a small smile on his lips. He wears a dark jacket with a white collar. His little crutch stands upright beside him, and his hand rests on its grip. An iron frame supports his legs: a bar along his thigh, a round hinge at his knee, and a bar down each side of his shin, strapped at the calf and above the ankle. On the right, the fire burns red in its grate, and its light is cut in rays across the dark background. Two numbered red markers point to his crutch and to the iron frame on his leg.",
  describedBy: [
    { phrase: 'he bore a little crutch', at: [244, 112], to: [210, 130] },
    { phrase: 'had his limbs supported by an iron frame', at: [56, 196], to: [124, 212] },
  ],
  where: 'Stave Three',
  passage:
    'Alas for Tiny Tim, he bore a little crutch, and had his limbs supported by an iron frame!',
  note: 'This one sentence is nearly all Dickens tells us about how Tim looks. The rest of him is his words and his cheerfulness, which is why the Spirit’s warning of “a crutch without an owner” lands so hard.',
}
