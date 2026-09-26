import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  n,
  rays,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import { PH, portraitGround, PortraitRule, PW } from './common'

/**
 * Lady Macbeth in the sleepwalking scene (5.1), the one place the play shows
 * her body at all, and then only her hands:
 *
 *   "Yet here's a spot." "Out, damned spot! out, I say!" "What, will these
 *   hands ne'er be clean?" "Here's the smell of the blood still: all the
 *   perfumes of Arabia will not sweeten this little hand."
 *
 * So she holds up one small hand and stares at it, and the spot on it is the
 * only red in the plate. There is no blood to see: the spot is the one she
 * sees, printed in the spot colour as a sign, not a wound. The Gentlewoman
 * has seen her "rise from her bed, throw her nightgown upon her", and she
 * enters with a taper; so she is in a plain white nightgown, her hair is
 * down, and the candle beside her is the only light. Her face, hair and
 * gown are otherwise undescribed and drawn plainly.
 *
 * She faces left, so the figure is drawn facing right in its own 0..200 by
 * 0..320 frame and flipped into place.
 */

export const LADY_MACBETH_HEAD =
  'M70 246C62 216 56 188 52 160C44 120 52 76 80 52C102 32 132 28 150 40C160 46 164 54 165 64C166 74 167 80 168 86L165 94C170 104 176 112 181 121C182.5 125 181 128 177 129C174 130 172 130 170 131C171 134 172 136 172 138C170 140 169 141 169 142C171 144 172 146 171 148C169 150 167 151 166 153C168 157 170 162 169 166C166 172 160 176 150 178C142 180 136 184 134 192L136 250L70 250Z'
const HAIR =
  'M161 54C150 54 138 60 131 72C125 84 121 98 119 112C117 132 114 150 110 168C106 190 102 214 100 240C98 270 102 300 108 332L18 332C24 300 32 270 38 240C44 210 44 180 46 150C46 110 56 70 82 50C104 34 132 28 150 36C156 40 159 46 161 54Z'
/** The nightgown, over the shoulders, with a round neck. */
const GOWN =
  'M62 226C34 238 10 262 -2 292L-8 332L236 332C230 302 216 278 198 264C180 250 160 240 142 230C132 238 116 241 102 240C86 238 74 234 62 226Z'
/** The shadow the jaw casts on her neck, deepest at the back. */
const NECK_SHADOW =
  'M166 170C160 176 152 180 140 184C130 187 118 188 104 188L102 226C114 216 126 208 137 202L139 194C148 188 158 180 166 170Z'
/** The raised forearm in its sleeve, from the bottom of the plate to the wrist. */
const SLEEVE =
  'M196 212C190 244 184 284 178 332L236 332C232 292 228 250 222 210C214 206 204 206 196 212Z'
/** "this little hand": the back of her left hand, fingers up, thumb towards her face. */
export const LADY_MACBETH_HAND =
  'M199 214L196 197C192 191 188 185 185 177C183 171 186 167 189.5 169.5C192.5 174 195 179 197 181L196 147C196 142 201 142 201.2 147L202 159L203.5 136C203.5 131 208.5 131 208.6 136L209.5 158L211 140C211 135 216 135 216 140L216.5 162L218 151C218.5 146.5 223 147 222.8 151.5L222 179C221.5 190 220 202 218 214Z'
const HAND_LINES =
  'M201.4 160L201.9 177M208.8 158.5L209 177M216.3 162.5L215.8 178' +
  'M198 170Q200 168 202 170M205.5 150Q207 148.5 208.5 150M213 154Q214.5 152.5 216 154'
/** The hand is drawn at full size and set smaller about the wrist: "this little hand". */
const WRIST: [number, number] = [208, 213]
const HAND_SCALE = 0.8
const HAND_T = `translate(${WRIST[0]} ${WRIST[1]}) scale(${HAND_SCALE}) translate(${-WRIST[0]} ${-WRIST[1]})`
const inHand = (x: number, y: number): [number, number] => [
  WRIST[0] + (x - WRIST[0]) * HAND_SCALE,
  WRIST[1] + (y - WRIST[1]) * HAND_SCALE,
]
/** "Out, damned spot": the blot on the back of the hand. */
const SPOT =
  'M205 191C206 187.5 210.5 186.5 213 188.5C215.5 190.5 214.5 194.5 211.5 195.5C208.5 196.5 204 195 205 191Z'

type Marks = {
  hair: string
  gown: string
  sleeve: string
  neck: string
  neckBack: string
  cheek: string
}

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // Loose hair falling from the crown down her back: long wavy ribbons.
  let hair = ''
  for (let i = 0; i < 30; i++) {
    const t = (i + between(r, 0.1, 0.9)) / 30
    const x0 = 140 - t * 84 + between(r, -3, 3)
    const y0 = 46 + Math.abs(t - 0.35) * 30 + between(r, 0, 8)
    const x1 = 104 - t * 76 + between(r, -6, 6)
    const y1 = 250 + between(r, 30, 80)
    const ph = between(r, 0, 6)
    const pts: Pt[] = []
    for (let k = 0; k <= 16; k++) {
      const u = k / 16
      const bulge = Math.sin(Math.PI * u) * (1 - t) * -16
      pts.push([x0 + (x1 - x0) * u + bulge + Math.sin(u * 7 + ph) * 3, y0 + (y1 - y0) * u])
    }
    hair += ribbon(pts, between(r, 0.7, 1.4) * (1.2 - t * 0.5), 0.8)
  }

  // Linen folds in the nightgown, cut in ink.
  let gown = ''
  for (let i = 0; i < 9; i++) {
    const x = between(r, 110, 200)
    gown += gouge(
      x,
      between(r, 250, 270),
      x + between(r, -14, 6),
      332,
      between(r, 0.8, 1.6),
      between(r, -2, 2),
    )
  }
  gown += gouge(104, 246, 148, 244, 0.9, 1.2)
  let sleeve = ''
  for (let i = 0; i < 5; i++) {
    const x = 200 + i * 6 + between(r, -2, 2)
    sleeve += gouge(
      x,
      220 + between(r, 0, 20),
      x - 6 + between(r, -3, 3),
      332,
      between(r, 0.7, 1.3),
      1,
    )
  }

  // The neck in the shadow of the jaw: ink, with fine cuts, so the face
  // stands clear of it.
  let neck = ''
  for (let y = 192; y < 222; y += 3.4)
    neck += gouge(98, y, 116 + (222 - y) * 0.6, y - between(r, 1, 3), between(r, 0.5, 0.9))
  let neckBack = ''
  for (let y = 224; y < 240; y += 3.2)
    neckBack += `M${n(100)} ${n(y)}L${n(116 - (y - 224) * 0.4)} ${n(y + 1)}`

  // Shadow at the back of the cheek, towards the hair.
  let cheek = ''
  for (let i = 0; i < 9; i++) {
    const y = 108 + i * 7
    cheek += `M${n(122 + between(r, 0, 3))} ${n(y)}L${n(134 + between(r, -2, 4) - i * 0.5)} ${n(y + 3)}`
  }

  // The gown turned from the candle: ink hatching thickening towards her back.
  for (let y = 236; y < 332; y += 3.8) {
    const reach = 120 - (y - 236) * 0.3
    gown += gouge(-8, y, reach + between(r, -8, 8), y + 2, 0.5 + ((y - 236) / 96) * 0.6, 0.3)
  }

  const m = { hair, gown, sleeve, neck, neckBack, cheek }
  marksBySeed.set(seed, m)
  return m
}

/**
 * Lady Macbeth sleepwalking, head, shoulders and raised hand, facing right in
 * the 0..240 by 0..332 frame.
 */
export function LadyMacbethFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const headClip = `${uid}-lm-head-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={LADY_MACBETH_HEAD} />
        </clipPath>
      </defs>
      {/* the white nightgown catches the candle; an ink line cuts it from the face */}
      <path d={GOWN} fill={PAPER} stroke={INK} strokeWidth={2} />
      <path d={m.gown} fill={INK} />
      {/* the gathered neckline */}
      <path
        d="M62 227C74 235 86 239 102 241C116 242 132 239 142 231"
        fill="none"
        stroke={INK}
        strokeWidth={3}
      />
      <path d={LADY_MACBETH_HEAD} fill={PAPER} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.cheek} strokeWidth={LINE.hairline} />
      </g>
      <path d={NECK_SHADOW} fill={INK} />
      <path d={m.neck} fill={PAPER} />
      <path d={m.neckBack} fill="none" stroke={INK} strokeWidth={1.3} />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.hair} fill={PAPER} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* nostril, lips and the corner of the mouth */}
        <path d="M173 124C169 122 169 118 173 117" strokeWidth={1.3} />
        <path d="M170 138.5C166 139 163 139.5 160 139" strokeWidth={1.9} />
        <path d="M171 134C168 135 166 136.5 165 138" strokeWidth={1} />
        <path d="M168.5 147C166 148.5 164 149 162 148.5" strokeWidth={1} />
        {/* a fine arched brow */}
        <path d="M146 86Q155 81 165 86" strokeWidth={2.2} />
        {/* "her eyes are open": the lid lifted clear of the eye, the stare fixed */}
        <path d="M146 96Q154 90 163 96" strokeWidth={2} />
        <path d="M147.5 104Q155 106.5 162 101.5" strokeWidth={1.2} />
        <path
          d="M148 109Q154 112 160 108.5M150 113Q155 115.5 159 113"
          strokeWidth={LINE.hairline}
        />
      </g>
      <circle cx={157.2} cy={98.8} r={2.6} fill={INK} />
      {/* the raised arm and "this little hand" */}
      <path d={SLEEVE} fill={PAPER} stroke={INK} strokeWidth={2.2} />
      <path d={m.sleeve} fill={INK} />
      <g transform={HAND_T}>
        <path
          d={LADY_MACBETH_HAND}
          fill={INK}
          stroke={INK}
          strokeWidth={5}
          strokeLinejoin="round"
        />
        <path d={LADY_MACBETH_HAND} fill={PAPER} />
        <path d={HAND_LINES} fill="none" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />
        <path d={SPOT} fill={RED} />
      </g>
    </g>
  )
}

// ── The taper, and the portrait ────────────────────────────────────────────

/** Figure frame to portrait: scaled, then flipped so she faces left. */
const S = 1.14
const DX = -4
const DY = -14
const PLACE = `translate(${PW} 0) scale(-1 1) translate(${DX} ${DY}) scale(${S})`
/** A point in the figure's frame, in the portrait's coordinates. */
const toPortrait = (x: number, y: number): [number, number] => [PW - (DX + x * S), DY + y * S]

/** The taper stands in front of her, in the figure's frame. */
const FLAME: [number, number] = [262, 176]
const CANDLE = 'M256 194L268 194L269 300L255 300Z'
const HOLDER =
  'M240 300C248 296 276 296 284 300L282 310C274 314 250 314 242 310ZM258 310L266 310L270 336L254 336Z'
const FLAME_PATH =
  'M262 158C258 166 255.5 172 256 178C256.5 184 259 187 262 187C265 187 267.5 184 268 178C268.5 172 266 166 262 158Z'

let cuts: { ground: string; glow: string } | undefined
function portraitCuts() {
  if (cuts) return cuts
  const [fx, fy] = toPortrait(FLAME[0], FLAME[1])
  const ground = portraitGround('lady-macbeth', 1605, (x, y) => {
    const d = Math.hypot(x - fx, (y - fy) * 0.9)
    return 0.05 + clamp(1 - d / 170) ** 1.5
  })
  const glow = rays(rng(515), fx, fy, { from: 16, to: 70, every: 7, width: 2.6 })
  cuts = { ground, glow }
  return cuts
}

function LadyMacbethPortrait({ uid }: ArtProps) {
  const c = portraitCuts()
  return (
    <>
      <path d={c.ground} fill={PAPER} />
      <path d={c.glow} fill={PAPER} />
      <g transform={PLACE}>
        {/* ink halo round the figure and the taper, so both stand clear of the cuts */}
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={LADY_MACBETH_HEAD} />
          <path d={HAIR} />
          <path d={GOWN} />
          <path d={SLEEVE} />
          <path d={LADY_MACBETH_HAND} transform={HAND_T} />
          <path d={CANDLE} />
          <path d={HOLDER} />
        </g>
        <LadyMacbethFigure uid={uid} seed={51} />
        <path d={HOLDER} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={CANDLE} fill={PAPER} />
        <path d="M259 204L259 290M264 206L265 292" stroke={INK} strokeWidth={0.9} />
        <path d="M262 188L262 196" stroke={INK} strokeWidth={1.4} />
        <path d={FLAME_PATH} fill={PAPER} className="lc-flicker" />
      </g>
      <PortraitRule />
    </>
  )
}

export const ladyMacbethPortrait: LinocutArt = { width: PW, height: PH, Draw: LadyMacbethPortrait }

const HAND_AT = toPortrait(...inHand(210, 152))
const SPOT_AT = toPortrait(...inHand(209.5, 191.5))
const FACE_AT = toPortrait(166, 104)

export const ladyMacbeth: Portrait = {
  name: 'Lady Macbeth',
  art: ladyMacbethPortrait,
  alt: 'A linocut portrait of Lady Macbeth walking in her sleep, in profile facing left: a pale woman with long dark hair loose down her back, in a white nightgown, her eyes wide open and fixed. She holds up one small hand in front of her face and stares at it. On the back of the hand is a single red spot, the only colour in the print. A lit candle stands before her, the only light in the dark. Three numbered red markers point to her face, her hand and the spot on it.',
  describedBy: [
    { phrase: 'his fiend-like queen', at: [FACE_AT[0] - 22, 44], to: FACE_AT },
    { phrase: 'this little hand', at: [HAND_AT[0] - 36, HAND_AT[1] - 20], to: HAND_AT },
    { phrase: 'Out, damned spot', at: [SPOT_AT[0] - 40, SPOT_AT[1] + 26], to: SPOT_AT },
  ],
  where: 'Act 5, Scene 1; Act 5, Scene 8',
  note: 'In the sleepwalking scene she tries to wash away a spot no one else can see. The last the play says of her is Malcolm’s “fiend-like queen”; the last it shows of her is a woman who cannot get one small hand clean.',
  artNote:
    'The red spot is the one only she can see, printed as a sign of her guilt and not as blood on her skin: the Doctor and the Gentlewoman watch her rub her hands and see nothing on them.',
}
