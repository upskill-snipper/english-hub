import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arc,
  between,
  deg,
  gouge,
  n,
  rays,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { InnerRule, PH, PW, once, portraitGround } from './common'

/**
 * The Ghost of Christmas Present, as Dickens describes it in Stave Three, and
 * nothing else:
 *
 *   "It was clothed in one simple green robe, or mantle, bordered with white
 *   fur. This garment hung so loosely on the figure, that its capacious breast
 *   was bare, as if disdaining to be warded or concealed by any artifice. Its
 *   feet, observable beneath the ample folds of the garment, were also bare;
 *   and on its head it wore no other covering than a holly wreath, set here
 *   and there with shining icicles. Its dark brown curls were long and free;
 *   free as its genial face, its sparkling eye, its open hand, its cheery
 *   voice, its unconstrained demeanour, and its joyful air. Girded round its
 *   middle was an antique scabbard; but no sword was in it, and the ancient
 *   sheath was eaten up with rust."
 *
 * And from the paragraph before: "a jolly Giant, glorious to see; who bore a
 * glowing torch, in shape not unlike Plenty's horn, and held it up, high up,
 * to shed its light on Scrooge".
 *
 * So, from the middle up and filling the block: a big head in profile, facing
 * right and laughing, its eye creased and cut with a glint; long curls
 * falling down its back; a wreath of holly leaves round its head with icicles
 * hanging from it; a robe hanging open from a broad bare breast, its edge
 * bordered with fur cut in short tufts; one arm raising the torch high, a
 * horn with its mouth upwards, whose flame and glow are the spot colour and
 * whose light is cut through the whole ground; the other hand held out open;
 * and at the middle the empty scabbard, its mouth open with no hilt in it,
 * spotted with rust in the spot colour.
 *
 * The robe is "green" and the curls "dark brown", neither of which the print
 * can show: both are ink, and the card says so. Nothing here comes from a film
 * or stage production.
 *
 * Seeds: 1843 for the ground, 1225 for the rays and the cuts in the figure.
 */

/** The mouth of the torch, where its light comes from. */
const TORCH_AT: Pt = [262, 34]

/**
 * The head, its curls and its wreath are drawn in their own frame, facing
 * right, and placed with HEAD_PLACE.
 */
const HEAD_PLACE = 'translate(140 30) scale(0.85) translate(-146 -46)'
const HEAD =
  'M146 46C170 46 188 58 194 76C197 86 197 94 196 100C198 104 198 108 196 111C202 122 210 132 212 140C214 146 210 150 204 150C202 152 200 153 199 155C204 158 208 160 208 163C203 165 198 166 196 167C200 170 204 172 206 176C206 181 202 184 200 185C202 192 198 200 188 202C176 204 164 200 156 194C146 188 136 182 128 172C112 152 110 100 120 74C126 58 136 46 146 46Z'
/** The front of the face only, brow to jaw: the one edge of the head that is outlined. */
const PROFILE =
  'M194 76C197 86 197 94 196 100C198 104 198 108 196 111C202 122 210 132 212 140C214 146 210 150 204 150C202 152 200 153 199 155C204 158 208 160 208 163C203 165 198 166 196 167C200 170 204 172 206 176C206 181 202 184 200 185C202 192 198 200 188 202C180 204 172 202 166 198'
/** The curls, in the head's frame: over the crown and down the back. */
const HAIR =
  'M186 62C176 48 160 40 144 40C120 42 106 62 102 92C96 140 92 210 82 282C80 298 88 306 100 306L150 290C146 266 144 240 146 214C148 200 150 190 154 180C150 158 148 134 152 114C158 94 170 76 186 62Z'
/** Where the curls end towards the face, and at the back, in the head's frame. */
const hairFront = (y: number) => (y < 62 ? 176 : y < 114 ? 186 - (y - 62) * 0.65 : 150)
const hairBack = (y: number) => (y < 92 ? 106 - (92 - y) * 0.6 : 102 - (y - 92) * 0.09)
const NECK = 'M146 140L140 184L186 188L182 150Z'

/** The robe: over the back and shoulder, hanging open at the front. */
const ROBE = 'M20 318L26 256C34 214 64 186 106 176L150 170C160 200 170 240 176 286L178 318Z'
/** "its capacious breast was bare" */
const BREAST =
  'M146 176L184 180C204 186 214 204 216 230C218 256 212 282 204 318L176 318C172 272 164 226 146 176Z'
/** The fur along the robe's open edge. */
const FUR: Pt[] = [
  [140, 168],
  [150, 196],
  [160, 228],
  [168, 262],
  [174, 296],
  [176, 322],
]

/** The arm that raises the torch, in its sleeve, fur at the cuff. */
const TORCH_ARM: Pt[] = [
  [168, 206],
  [196, 200],
  [222, 188],
  [236, 160],
  [244, 128],
  [248, 104],
]
const TORCH_CUFF = 'M232 118C240 110 256 112 262 120L258 134C252 128 240 126 234 132Z'
const TORCH_HAND = 'M238 100C236 88 246 80 256 84C266 88 268 100 262 108C256 114 242 112 238 100Z'
/** "in shape not unlike Plenty's horn": a curled horn, its mouth upwards. */
const HORN =
  'M254 100C246 104 238 100 238 92C238 84 246 82 250 76C256 66 254 54 244 44L280 30C282 46 278 62 270 76C264 88 262 96 254 100Z'
const HORN_MOUTH =
  'M244 44C240 36 258 26 274 24C284 24 286 28 280 32C274 38 256 44 248 46C245 46 244 46 244 44Z'
const FLAME =
  'M248 38C242 26 252 18 250 6C258 14 262 8 262 1C272 10 270 18 276 14C282 24 278 32 270 34C262 38 254 40 248 38Z'

/**
 * "its open hand": held out, palm up, from a fur cuff, the four fingers fanned
 * apart and the thumb up. The first draft held one finger out and curled the
 * rest under the thumb, which printed as a pointing hand (at phone width, a
 * finger-gun); an open hand must show its fingers apart.
 */
const OPEN_SLEEVE = 'M196 246C214 240 236 236 252 236L256 262C238 264 218 268 200 274Z'
const OPEN_CUFF = 'M248 232C254 230 260 232 262 238L264 262C260 266 254 266 252 262Z'
const OPEN_HAND =
  'M262 240C268 238 274 237 279 237.5L296 229.6C299 228.4 301 232.4 298.4 233.8L286 241L302.6 238C305.6 237.6 306.2 242 303.2 242.6L287 246L303 248.4C306 249 305.6 253.4 302.6 253.2L286 251.4L297.4 257.4C300 259 297.6 262.6 295 261.4L280 259C274 262 268 262 262 260Z'
const THUMB =
  'M266 240C267 233 272 228 278 227C282 227.4 282 231.6 279 233.6C275.6 236 272 239 270.4 242Z'

/** "Girded round its middle was an antique scabbard; but no sword was in it". */
const GIRDLE = 'M24 262C80 264 150 272 214 264L212 278C150 286 80 280 22 276Z'
const SCABBARD = 'M128 274L152 276L80 322L52 322Z'
const LOCKET = 'M124 268C132 266 148 268 154 272L150 286C144 282 134 280 126 282Z'

/** One holly leaf, pointing along `a`, sharp spines along both edges. */
function hollyLeaf(x: number, y: number, a: number, s: number): string {
  const c = Math.cos(a)
  const si = Math.sin(a)
  const P = (u: number, v: number): string =>
    `${n(x + (u * c - v * si) * s)} ${n(y + (u * si + v * c) * s)}`
  return `M${P(0, 0)}L${P(2.5, 3.6)}L${P(4.6, 3)}L${P(7, 4.7)}L${P(9.4, 3.3)}L${P(12, 4.3)}L${P(14.4, 2.4)}L${P(17, 0)}L${P(14.4, -2.4)}L${P(12, -4.3)}L${P(9.4, -3.3)}L${P(7, -4.7)}L${P(4.6, -3)}L${P(2.5, -3.6)}Z`
}

type Marks = {
  ground: string
  light: string
  curls: string
  wreath: [number, number, number, boolean][]
  icicles: string
  fur: string
  furTufts: string
  robe: string
  arm: string
  sleeve: string
  rust: string
}

const marks = once<Marks>(() => {
  const [tx, ty] = TORCH_AT
  const ground = portraitGround(1843, (x, y) => 1 - Math.hypot(x - tx, y - ty) / 300)
  const r = rng(1225)
  const light = rays(r, tx, ty, { from: 34, to: 360, every: 4.6, width: 7.2 })

  // "Its dark brown curls were long and free": curls cut as open rings, in
  // the head's frame.
  let curls = ''
  for (let i = 0, tries = 0; i < 70 && tries < 4000; tries++) {
    const x = between(r, 86, 186)
    const y = between(r, 44, 296)
    if (x > hairFront(y) - 7 || x < hairBack(y) + 6) continue
    const rad = between(r, 5, 8.5)
    const a0 = between(r, 0, 6.28)
    curls += arc(x, y, rad, a0, a0 + deg(between(r, 210, 300)))
    i++
  }

  // "a holly wreath, set here and there with shining icicles": an ellipse of
  // leaves round the head, seen from the side, in the head's frame. The half
  // behind the head is drawn smaller, and under it.
  const wreath: [number, number, number, boolean][] = []
  for (let i = 0; i < 16; i++) {
    const t = deg(i * 22.5 + 8)
    const x = 148 + Math.cos(t) * 50
    const y = 70 + Math.sin(t) * 13 - (Math.cos(t) + 1) * 4
    wreath.push([x, y, t + Math.PI / 2 + (i % 2 ? 0.8 : -0.8), Math.sin(t) > 0])
  }
  let icicles = ''
  for (const t of [26, 58, 92, 124, 156]) {
    const a = deg(t)
    const x = 148 + Math.cos(a) * 50
    const y = 72 + Math.sin(a) * 13 - (Math.cos(a) + 1) * 4
    const len = between(r, 11, 17)
    icicles += `M${n(x - 2.8)} ${n(y + 2)}L${n(x + 2.8)} ${n(y + 2)}L${n(x + 0.4)} ${n(y + 2 + len)}Z`
  }

  const fur = ribbon(FUR, 15, 0, true)
  let furTufts = ''
  for (let i = 0; i < FUR.length - 1; i++) {
    const [ax, ay] = FUR[i]
    const [bx, by] = FUR[i + 1]
    for (let t = 0; t < 1; t += 0.18) {
      const x = ax + (bx - ax) * t + between(r, -4, 4)
      const y = ay + (by - ay) * t + between(r, -2, 2)
      furTufts += `M${n(x)} ${n(y)}q${n(between(r, -2, 2))} ${n(between(r, 2, 4))} ${n(between(r, -1, 1))} ${n(between(r, 4, 6))}`
    }
  }

  // Folds of the robe, hanging loosely from the shoulder.
  const robe =
    gouge(56, 236, 44, 318, 2.2, 2) +
    gouge(86, 214, 80, 318, 1.6, 1.5) +
    gouge(116, 200, 118, 280, 1.3, 1) +
    gouge(138, 214, 150, 280, 1, -1) +
    gouge(70, 196, 108, 182, 1.6, -1)
  const arm = ribbon(TORCH_ARM, 30, 0.25, false)
  const sleeve =
    gouge(182, 214, 220, 196, 1.3, -1) +
    gouge(226, 178, 238, 140, 1.1, 1) +
    gouge(196, 206, 226, 186, 0.8)

  let rust = ''
  for (let i = 0; i < 9; i++) {
    const t = between(r, 0.1, 0.95)
    const x = 136 - t * 62 + between(r, -3, 3)
    const y = 282 + t * 32 + between(r, -2, 2)
    const s = between(r, 1.6, 3.2)
    rust += `M${n(x - s)} ${n(y)}q${n(s)} ${n(-s * 1.2)} ${n(s * 2)} 0q${n(-s)} ${n(s * 1.1)} ${n(-s * 2)} 0Z`
  }

  return { ground, light, curls, wreath, icicles, fur, furTufts, robe, arm, sleeve, rust }
})

function GhostOfChristmasPresentPortrait(_: ArtProps) {
  const m = marks()
  const leaf = ([x, y, a, near]: [number, number, number, boolean]) => (
    <g key={`${n(x)}-${n(y)}`}>
      <path
        d={hollyLeaf(x - Math.cos(a) * 8, y - Math.sin(a) * 8, a, near ? 1.3 : 1)}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        d={`M${n(x - Math.cos(a) * 8)} ${n(y - Math.sin(a) * 8)}L${n(x + Math.cos(a) * 7)} ${n(y + Math.sin(a) * 7)}`}
        stroke={PAPER}
        strokeWidth={LINE.hairline}
      />
    </g>
  )
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <path d={m.light} fill={PAPER} />
      {/* The ink halo that lifts the Giant off his own light. */}
      <g fill={INK} stroke={INK} strokeWidth={10} strokeLinejoin="round">
        <path d={HAIR} transform={HEAD_PLACE} />
        <path d={HEAD} transform={HEAD_PLACE} />
        <path d={ROBE} />
        <path d={BREAST} />
        <path d={m.arm} />
        <path d={HORN} />
        <path d={HORN_MOUTH} />
        <path d={TORCH_HAND} />
        <path d={OPEN_SLEEVE} />
        <path d={OPEN_HAND} />
        <path d={THUMB} />
      </g>
      {/* "a glowing torch ... held it up, high up" */}
      <g className="lc-flicker" style={timing({ delay: 0.2, dur: 0.9 })}>
        <path d={FLAME} fill={RED} />
        <path d="M258 32C256 24 260 20 260 14C266 20 268 26 264 32Z" fill={PAPER} />
      </g>
      {/* The far wreath leaves, behind the head. */}
      <g transform={HEAD_PLACE}>{m.wreath.filter((w) => !w[3]).map(leaf)}</g>
      <path d={ROBE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.robe} fill={PAPER} />
      <path d={BREAST} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
      <path
        d="M170 204Q190 208 206 224M178 250Q192 256 206 254"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinecap="round"
      />
      <path d={m.fur} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d={m.furTufts}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      <path d={GIRDLE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      {/* the empty scabbard: its mouth open, no hilt, eaten with rust */}
      <path
        d={SCABBARD}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d="M110 290L120 296M88 304L98 310" stroke={PAPER} strokeWidth={LINE.bold} />
      <path d={m.rust} fill={RED} />
      <path d={LOCKET} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <ellipse cx={139} cy={271} rx={10} ry={3.6} transform="rotate(8 139 271)" fill={INK} />
      {/* "its open hand" */}
      <path
        d={OPEN_SLEEVE}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        d={OPEN_HAND}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.bold}
        strokeLinejoin="round"
      />
      <path d={THUMB} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
      <path
        d="M268 248Q274 246 280 247M268 253.5Q274 252 279.5 254"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      <path d={OPEN_CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={NECK} fill={PAPER} />
      <path d="M146 150L140 184M182 156L186 188" fill="none" stroke={INK} strokeWidth={LINE.fine} />
      <g transform={HEAD_PLACE}>
        <path d={HEAD} fill={PAPER} />
        <path
          d={PROFILE}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.bold * 1.3}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* the brow, the eye creased with laughing, the laugh lines */}
          <path d="M172 92Q184 84 198 92" strokeWidth={4.2} />
          <path d="M175 108Q184 100 194 106" strokeWidth={3} />
          <path d="M177 112Q185 116 193 112" strokeWidth={LINE.fine * 1.3} />
          <path
            d="M170 104L162 100M170 110L161 111M171 116L164 122"
            strokeWidth={LINE.fine * 1.3}
          />
          {/* the round, lifted cheek, the broad nose, the open laughing mouth */}
          <path d="M170 122C160 132 162 152 182 158" strokeWidth={LINE.fine * 1.4} />
          <path d="M199 152C196 157 194 162 196 167" strokeWidth={LINE.fine * 1.3} />
          <path
            d="M172 130Q174 138 180 142M166 136Q168 144 174 148"
            strokeWidth={LINE.hairline * 1.3}
          />
          <path d="M204 146C200 141 195 143 195 148" strokeWidth={2} />
          <path d="M188 186Q194 190 200 186" strokeWidth={LINE.fine * 1.3} />
          <path d="M150 150Q156 170 172 182" strokeWidth={LINE.fine * 1.2} />
        </g>
        <path d="M195 166L208 163C209 168 208 172 206 176C202 174 198 170 195 166Z" fill={INK} />
        <path d="M198 166L207 164L207 166L199 167.5Z" fill={PAPER} />
        {/* "its sparkling eye" */}
        <circle cx={188} cy={108} r={3.8} fill={INK} />
        <circle cx={189.4} cy={106.6} r={1.3} fill={PAPER} />
      </g>
      <g transform={HEAD_PLACE}>
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={2} strokeLinejoin="round" />
        <path d={m.curls} fill="none" stroke={PAPER} strokeWidth={2.1} strokeLinecap="round" />
        {/* The near wreath leaves, and the icicles. */}
        {m.wreath.filter((w) => w[3]).map(leaf)}
        <path
          d={m.icicles}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
          strokeLinejoin="round"
        />
      </g>
      {/* The torch arm, in front of the breast. */}
      <path d={m.arm} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.sleeve} fill={PAPER} />
      <path d={HORN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path
        d="M250 56L272 46M252 68L274 60M248 80L268 74"
        stroke={PAPER}
        strokeWidth={LINE.fine}
        fill="none"
      />
      <path d={HORN_MOUTH} fill={RED} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={TORCH_HAND} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
      <path
        d="M244 94Q252 90 262 94M242 101Q252 97 263 101"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      <path d={TORCH_CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <InnerRule />
    </>
  )
}

export const ghostOfChristmasPresentArt: LinocutArt = {
  width: PW,
  height: PH,
  Draw: GhostOfChristmasPresentPortrait,
}

export const ghostOfChristmasPresentPortrait: Portrait = {
  name: 'Ghost of Christmas Present',
  art: ghostOfChristmasPresentArt,
  alt: "A linocut portrait of the Ghost of Christmas Present, drawn from Dickens's description in Stave Three: a giant seen from the middle up, filling the picture, his big head in profile, facing right and laughing, his eye creased with a white glint in it. Long dark curls fall down his back, and a wreath of spiky holly leaves circles his head, with small white icicles hanging from it. His dark robe hangs open from a broad bare chest, and its open edge is bordered with pale fur. One arm raises high a torch shaped like a curling horn, with a red flame and a red glow at its mouth, and its light is cut in rays across the whole dark background. His other hand is held out open, palm up. At his middle hangs an empty scabbard, its mouth open with no sword in it, spotted with red rust. Six numbered red markers point to the fur on his robe, the holly wreath and icicles, his curls, his eye, his open hand and the empty scabbard.",
  describedBy: [
    {
      phrase: 'one simple green robe, or mantle, bordered with white fur',
      at: [124, 240],
      to: [158, 232],
    },
    {
      phrase: 'a holly wreath, set here and there with shining icicles',
      at: [226, 28],
      to: [190, 50],
    },
    { phrase: 'Its dark brown curls were long and free', at: [46, 150], to: [96, 170] },
    { phrase: 'its sparkling eye', at: [224, 100], to: [180, 84] },
    { phrase: 'its open hand', at: [298, 212], to: [286, 238] },
    {
      phrase: 'an antique scabbard; but no sword was in it',
      at: [182, 300],
      to: [150, 284],
    },
  ],
  where: 'Stave Three',
  passage:
    'It was clothed in one simple green robe, or mantle, bordered with white fur. This garment hung so loosely on the figure, that its capacious breast was bare, as if disdaining to be warded or concealed by any artifice. Its feet, observable beneath the ample folds of the garment, were also bare; and on its head it wore no other covering than a holly wreath, set here and there with shining icicles. Its dark brown curls were long and free; free as its genial face, its sparkling eye, its open hand, its cheery voice, its unconstrained demeanour, and its joyful air. Girded round its middle was an antique scabbard; but no sword was in it, and the ancient sheath was eaten up with rust.',
  note: 'Nothing about this Spirit is hidden or held back: bare breast, bare feet, open hand. Even its scabbard is empty and rusted; it brings plenty and peace, not a sword.',
  artNote:
    'The torch comes from the paragraph before: “a glowing torch, in shape not unlike Plenty’s horn”. The robe is green and the curls dark brown in the text; the print has only black and one red, so the red is kept for the torch’s glow and the rust.',
}
