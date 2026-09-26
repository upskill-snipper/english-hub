import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED, SERIF } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { SCROOGE_HEAD, SCROOGE_NECK } from '../scrooge'
import { ScroogeNightHead } from './scrooge-at-night'

/**
 * Stave Four: "The gravestone", the fifteenth moment in the guide's timeline.
 * Every detail is from the text:
 *
 * - "A churchyard. Here, then; the wretched man whose name he had now to learn,
 *   lay underneath the ground. It was a worthy place. Walled in by houses;
 *   overrun by grass and weeds, the growth of vegetation's death, not life;
 *   choked up with too much burying". So tall houses stand close behind the
 *   churchyard wall, rank grass and weeds cover the ground, and the old stones
 *   are crowded together and leaning.
 * - "The Spirit stood among the graves, and pointed down to One." The Phantom
 *   is as Stave Four first describes it: "shrouded in a deep black garment,
 *   which concealed its head, its face, its form, and left nothing of it
 *   visible save one outstretched hand"; "tall and stately"; "a spectral hand
 *   and one great heap of black". So it has no face: the hood is empty dark,
 *   and the only paper in the figure is its bony hand and the carved folds.
 * - "Scrooge crept towards it, trembling as he went; and following the finger,
 *   read upon the stone of the neglected grave his own name, EBENEZER
 *   SCROOGE." The name is the one spot of colour, and the last thing to
 *   print: it fades in on the stone as he reads it. Weeds grow round its foot.
 * - "'Am I that man who lay upon the bed?' he cried, upon his knees" and
 *   "'Spirit!' he cried, tight clutching at its robe, 'hear me! I am not the
 *   man I was.'" So Scrooge kneels between the Spirit and the stone, turned up
 *   towards the empty hood, one fist clutching the black robe.
 *
 * Scrooge is dressed as the text leaves him since he was taken from his bed,
 * "clad but lightly in his slippers, dressing-gown, and nightcap" (Stave Two).
 * His head is the shared ScroogeNightHead (scrooge-at-night.tsx), the
 * portrait's own face in the nightcap every Spirit panel gives him, his eyes
 * wide, mirrored to face the Spirit and tipped back. His face is cut in paper
 * because he faces the pale sky behind the Phantom; the Phantom is black
 * against that sky, the focal silhouette. The text gives no hour and no
 * weather, so the sky is plain.
 *
 * WHY THAT HEAD (review, 26 September 2026). The first draft cut a face of
 * its own on SCROOGE_HEAD and put the cut-figure nightcap over it, whose brim
 * crossed his eye like a blindfold; at the climax of the book his face could
 * not be read. The lit panels all use ScroogeNightHead, so this one does too.
 *
 * Nothing of the dead is shown: a grave is a stone and grass. Seed 1501.
 */

const W = 860
const H = 340

type Marks = {
  sky: string
  houseCuts: string
  windows: string
  wallCuts: string
  ground: string
  grass: string
  weeds: string
  stoneWear: string
  gownLight: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1501)
  // The sky is palest low behind the Phantom's hood and darkens to the corners.
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1.1 - Math.hypot((x - 270) * 0.55, (y - 150) * 1.1) / 330),
      clamp(0.5 - Math.hypot((x - 660) * 0.9, y - 30) / 260) * 0.8,
      0.06,
    )
  const sky = gougeField(r, { x0: 0, x1: W, y0: 6, y1: 204 }, light, {
    spacing: 6.4,
    len: [20, 80],
  })

  // Brick courses on the near house fronts, faint.
  let houseCuts = ''
  const courses = (x0: number, x1: number, y0: number) => {
    for (let y = y0; y < 196; y += 7.5) {
      let x = x0 + between(r, -10, 0)
      while (x < x1) {
        const len = between(r, 10, 36)
        if (r() < 0.4) houseCuts += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.55)
        x += len + between(r, 10, 30)
      }
    }
  }
  courses(4, 100, 80)
  courses(446, W, 90)

  // Sash windows, dark panes with paper glazing bars, a few to each house.
  let windows = ''
  const sash = (x: number, y: number, w: number, h: number) => {
    windows += `M${n(x)} ${n(y)}h${n(w)}v${n(h)}h${n(-w)}Z`
    windows += `M${n(x + w / 2)} ${n(y)}v${n(h)}M${n(x)} ${n(y + h / 2)}h${n(w)}`
  }
  sash(26, 90, 18, 26)
  sash(64, 90, 18, 26)
  sash(44, 142, 18, 24)
  sash(500, 96, 16, 24)
  sash(586, 104, 22, 32)
  sash(544, 150, 16, 22)
  sash(706, 102, 18, 28)
  sash(744, 146, 18, 26)
  sash(810, 110, 20, 28)

  // The churchyard wall: courses of stone under a paper coping.
  let wallCuts = ''
  for (let y = 210; y < 226; y += 5) {
    let x = between(r, -8, 0)
    while (x < W) {
      const len = between(r, 16, 34)
      wallCuts += gouge(x, y, x + len, y, 0.7)
      x += len + between(r, 2, 4)
    }
  }

  // The ground between the graves: low light from the sky across it.
  const groundLight = (x: number, y: number) =>
    clamp(0.5 - Math.abs(x - 300) / 900 - (y - 226) / 240, 0.05, 0.45)
  const ground = gougeField(r, { x0: 0, x1: W, y0: 232, y1: 296 }, groundLight, {
    spacing: 7,
    len: [12, 44],
  })

  // "overrun by grass and weeds": paper blades, rank and tall at the front.
  let grass = ''
  for (let x = 2; x < W; x += between(r, 3.2, 5.6)) {
    const base = between(r, 322, 346)
    const tall = between(r, 16, 44) * (x > 440 && x < 620 ? 1.2 : 1)
    const lean = between(r, -9, 9)
    grass += wedge(x, base, x + lean, base - tall, between(r, 2, 3.4), 0.2)
  }
  for (let x = 6; x < W; x += between(r, 6, 11)) {
    const base = between(r, 292, 314)
    const tall = between(r, 8, 20)
    grass += wedge(x, base, x + between(r, -5, 5), base - tall, between(r, 1.4, 2.2), 0.2)
  }

  // Weeds: tall stalks with broad drooping leaves, some round the stone's foot.
  let weeds = ''
  const weed = (x: number, base: number, tall: number, lean: number) => {
    weeds += ribbon(
      [
        [x, base],
        [x + lean * 0.3, base - tall * 0.4],
        [x + lean * 0.7, base - tall * 0.75],
        [x + lean, base - tall],
      ],
      3,
      0.5,
      false,
    )
    for (let k = 0; k < 4; k++) {
      const t = 0.28 + k * 0.18
      const sx = x + lean * t
      const sy = base - tall * t
      const side = k % 2 ? 1 : -1
      const len = between(r, 13, 20) * (1 - k * 0.12)
      weeds += gouge(sx, sy, sx + side * len, sy + between(r, 3, 9), 3.2, side * 1.4)
    }
  }
  weed(448, 332, 88, -8)
  weed(474, 336, 62, 5)
  weed(592, 334, 76, 9)
  weed(616, 338, 52, -3)
  weed(100, 332, 74, 5)
  weed(716, 338, 60, -8)
  weed(20, 338, 58, 6)

  // The stone: weathered, a crack, lichen; the name is left clear.
  let stoneWear = 'M552 290L560 270L556 256L564 244M470 290L476 276'
  for (let i = 0; i < 34; i++) {
    const x = between(r, 464, 586)
    const y = between(r, 164, 296)
    if (y > 190 && y < 256) continue
    stoneWear += `M${n(x)} ${n(y)}l${n(between(r, 1.5, 3.5))} ${n(between(r, -1, 1))}`
  }

  // Scrooge's dressing-gown, lit from the sky he faces: close cuts on his
  // front, fewer towards his back, so he reads as grey beside the black Spirit.
  let gownLight = ''
  for (let x = 316; x < 412; x += 3.4) {
    const L = clamp(1 - (x - 322) / 70)
    if (L <= 0.04) continue
    gownLight += gouge(x, 200, x + (x - 330) * 0.28, 308, 0.4 + L * 1.2, between(r, -0.6, 0.6))
  }

  cached = { sky, houseCuts, windows, wallCuts, ground, grass, weeds, stoneWear, gownLight }
  return cached
}

/** The houses that wall the churchyard in, as one ink shape. */
const HOUSES =
  // near houses on the left, tall
  'M0 206V60H14V44H26V60H46L72 32L102 60H106V150' +
  // the far row behind the Phantom, low
  'H116V184H138V176H146V184H176L188 174L200 184H318V176H328V184H356L368 176L380 184H440' +
  // near houses on the right, tall, with gables and chimneys
  'V70H452V58H464V70H480L512 42L544 70H560V84H600V64H610V52H622V64H648V80H690L722 52L754 80H780V62H790V48H802V62H820V86H860V206Z'

/**
 * The Phantom, standing, facing right, its arm held out level. Its hood is
 * empty dark: the text gives it no face. Drawn in panel coordinates.
 */
const PHANTOM =
  'M210 32C226 32 240 48 244 70C248 80 247 92 245 98C252 97 258 96 264 95C300 92 336 88 366 84L377 114C362 132 342 142 318 146C302 150 292 162 288 180C292 226 300 266 312 300C316 306 312 309 304 309C280 311 256 307 232 310C206 306 176 312 140 309C126 309 112 308 104 304C118 290 128 262 138 226C148 190 156 146 170 112C178 94 186 80 192 66C194 48 198 34 210 32Z'
const ROBE_FOLDS =
  gouge(198, 66, 178, 128, 1.3, 1) +
  gouge(184, 124, 150, 302, 2, 4) +
  gouge(166, 150, 128, 300, 1.2, 2) +
  gouge(204, 132, 190, 302, 1.7, 1.5) +
  gouge(224, 126, 226, 300, 1.6, -1) +
  gouge(244, 136, 258, 302, 1.8, -2.5) +
  gouge(268, 200, 288, 302, 1.3, -1.5) +
  gouge(172, 250, 176, 304, 1, 0.5) +
  gouge(276, 102, 356, 94, 1.2, 1) +
  gouge(290, 118, 358, 110, 1.5, -1.8) +
  gouge(306, 134, 352, 128, 1.1, -1.4) +
  gouge(218, 46, 236, 70, 0.9, -0.8)
/** The rim of the hood's opening, cut as a paper line; inside it, nothing. */
const HOOD_RIM = 'M224 44C236 58 240 78 237 100'
/** The sleeve's open mouth, and the hand coming out of it. */
const CUFF = 'M366 86C371 95 375 104 376 114'
/**
 * "one outstretched hand", in its own frame: wrist at the origin, pointing
 * along +x, back of the hand up. Bony: one long finger out, the others
 * curled under, the knuckles and joints cut in ink. Placed with HAND_AT.
 */
const HAND =
  'M-4 -11C6 -13 18 -13 27 -10.5L44 -8.6L46.4 -9.4L63 -6.4C66.6 -5.9 67.4 -2.8 64 -2.2L46.4 -2.6L36 -1.6C38.6 2.6 37.6 8.4 33 10C31 14 26 15 23 12.4C20 15 15.4 15 13.4 11.6C8 12 2 11 -4 8.6Z'
const HAND_CUTS =
  'M27 -10.5L28 -4M46 -8.8L46.4 -3M56 -7.4L56.4 -2.6M12 -1.6C20 -2.6 28 -0.8 33 2M33 10C30 7 29 4.6 30 1.6M23 12.4C21 9.6 21 7 22 4.6M8 -12L10 -7M17 -12.6L18.4 -7.4'
const HAND_AT = 'translate(370 100) rotate(40)'

/**
 * Scrooge, on his knees, facing left up at the hood. The dressing-gown pools
 * behind him on the grass; his near arm reaches out to clutch the robe.
 */
const GOWN =
  'M330 206C338 202 350 202 358 206C370 212 378 226 380 244C382 262 390 282 408 296L410 306L326 306C318 304 318 296 324 290C334 280 342 264 342 250C342 238 336 228 332 220C330 214 328 209 330 206Z'
const GOWN_FOLDS =
  gouge(356, 214, 360, 296, 1.5, -1.5) +
  gouge(372, 236, 392, 300, 1.4, -1.5) +
  gouge(340, 262, 346, 302, 1.2, 1) +
  gouge(336, 212, 350, 230, 1, -1)
const ARM = 'M338 218C326 224 312 228 300 230'
/** The fist, closed on the Phantom's robe. */
const FIST = 'M303 222C298 218 290 218 286 222C283 226 283 232 285 236C288 241 296 242 302 239Z'
/** The head: ScroogeNightHead mirrored, 42 units tall, tipped back to look up. */
const HEAD_AT = 'translate(329 195) rotate(14) scale(-0.25 0.25) translate(-110 -116)'
/** The whole kneeling figure, enlarged about his knee. */
const SCROOGE_AT = 'translate(330 306) scale(1.12) translate(-330 -306)'

/** Old stones behind: [shape, lean in degrees, pivot x, pivot y, worn lettering]. */
const FAR_GRAVES: [string, number, number, number, string][] = [
  [
    'M624 262L626 226C626 218 634 214 642 214C650 214 656 218 656 226L656 262Z',
    -7,
    640,
    262,
    'M632 234H648M634 240H646',
  ],
  [
    'M668 256L670 232C670 226 676 222 682 222C688 222 694 226 694 232L694 256Z',
    6,
    681,
    256,
    'M675 238H689',
  ],
  [
    'M706 266L707 222C707 212 716 207 728 207C740 207 748 212 748 222L749 266Z',
    -4,
    728,
    266,
    'M714 222H740M716 229H738M718 236H734',
  ],
  ['M770 262L772 236H760V226H772V216H784V226H796V236H784L786 262Z', 5, 778, 262, ''],
  [
    'M34 266L36 230C36 222 44 218 52 218C60 218 66 222 66 230L66 266Z',
    8,
    50,
    266,
    'M44 234H58M46 240H56',
  ],
  [
    'M88 258L89 236C89 229 95 225 102 225C109 225 114 229 114 236L115 258Z',
    -5,
    102,
    258,
    'M95 240H109',
  ],
  [
    'M808 260L809 232C809 224 816 220 824 220C832 220 838 224 838 232L839 260Z',
    9,
    824,
    260,
    'M816 236H832',
  ],
  ['M404 250L405 234C405 229 410 226 416 226C422 226 426 229 426 234L427 250Z', -6, 416, 250, ''],
]

/** The neglected grave's stone. */
const STONE = 'M452 302L454 180C454 160 478 148 526 148C574 148 598 160 598 180L600 302Z'
const STONE_EDGE = 'M463 298L465 182C465 168 486 158 526 158C566 158 587 168 587 182L589 298'
const STONE_SHADE =
  gouge(590, 172, 592, 300, 2.4, -0.6) +
  gouge(583, 196, 584, 300, 1.2, -0.3) +
  gouge(576, 236, 577, 300, 0.8)

function Gravestone({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-stone`
  const gownClip = `${uid}-gown`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={STONE} />
        </clipPath>
        <clipPath id={gownClip}>
          <path d={GOWN} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [470, 230], push: 1.03 })}>
        {/* the sky, and the houses that wall the churchyard in */}
        <path d={m.sky} fill={PAPER} />
        <path d={HOUSES} fill={INK} />
        <path
          d={HOUSES}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.houseCuts} fill={PAPER} />
        <path d={m.windows} fill="none" stroke={PAPER} strokeWidth={LINE.fine} />

        {/* the churchyard wall, and the ground inside it */}
        <rect x={0} y={200} width={W} height={6} fill={PAPER} />
        <rect x={0} y={206} width={W} height={2} fill={INK} />
        <path d={m.wallCuts} fill={PAPER} />
        <rect x={0} y={226} width={W} height={3} fill={PAPER} />
        <path d={m.ground} fill={PAPER} />

        {/* old graves, crowded and leaning */}
        {FAR_GRAVES.map(([d, a, ox, oy, lines]) => (
          <g key={d} transform={`rotate(${a} ${ox} ${oy})`}>
            <path d={d} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
            {lines && <path d={lines} stroke={INK} strokeWidth={LINE.fine} />}
          </g>
        ))}

        {/* the neglected grave, and on it his name */}
        <g transform="rotate(-3 526 302)">
          <path d={STONE} fill={INK} stroke={INK} strokeWidth={7} strokeLinejoin="round" />
          <path d={STONE} fill={PAPER} />
          <g clipPath={`url(#${clip})`}>
            <path d={STONE_SHADE} fill={INK} />
          </g>
          <path d={STONE_EDGE} fill="none" stroke={INK} strokeWidth={LINE.fine} />
          <path
            d={m.stoneWear}
            fill="none"
            stroke={INK}
            strokeWidth={LINE.fine}
            strokeLinecap="round"
          />
          <g
            className="lc-fade-in"
            style={timing({ delay: 1.2, dur: 1.4 })}
            fill={RED}
            fontFamily={SERIF}
            fontWeight={700}
            fontSize={23}
            textAnchor="middle"
          >
            <text x={524} y={214} textLength={112} lengthAdjust="spacingAndGlyphs">
              EBENEZER
            </text>
            <text x={524} y={244} textLength={106} lengthAdjust="spacingAndGlyphs">
              SCROOGE
            </text>
          </g>
          <path d="M488 258H560" stroke={INK} strokeWidth={LINE.fine} />
        </g>

        {/* the Phantom, black against the sky, with a paper edge below the roofs */}
        <path d={PHANTOM} fill={PAPER} stroke={PAPER} strokeWidth={4.2} strokeLinejoin="round" />
        <g transform={HAND_AT}>
          <path d={HAND} fill={INK} stroke={INK} strokeWidth={4} strokeLinejoin="round" />
        </g>
        <path d={PHANTOM} fill={INK} />
        <path d={ROBE_FOLDS} fill={PAPER} />
        <path
          d={HOOD_RIM}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.bold}
          strokeLinecap="round"
        />
        <g transform={HAND_AT}>
          <path d={HAND} fill={PAPER} />
          <path
            d={HAND_CUTS}
            fill="none"
            stroke={INK}
            strokeWidth={LINE.fine}
            strokeLinecap="round"
          />
        </g>
        <path d={CUFF} fill="none" stroke={PAPER} strokeWidth={LINE.carve} strokeLinecap="round" />
        {/* the robe pulled into folds by his grip */}
        <path
          d={
            gouge(283, 214, 270, 198, 0.9, 1.5) +
            gouge(281, 222, 264, 220, 0.8, 1) +
            gouge(282, 230, 270, 248, 0.9, -1.5)
          }
          fill={PAPER}
        />

        {/* Scrooge on his knees, clutching at the robe */}
        <g transform={SCROOGE_AT}>
          <path d={GOWN} fill={PAPER} stroke={PAPER} strokeWidth={3.4} strokeLinejoin="round" />
          <path d={FIST} fill={PAPER} stroke={PAPER} strokeWidth={3.4} strokeLinejoin="round" />
          <path d={ARM} fill="none" stroke={PAPER} strokeWidth={14.4} strokeLinecap="round" />
          <path d={GOWN} fill={INK} />
          <g clipPath={`url(#${gownClip})`}>
            <path d={m.gownLight} fill={PAPER} />
          </g>
          <path d={GOWN_FOLDS} fill={INK} />
          <path d={ARM} fill="none" stroke={INK} strokeWidth={11} strokeLinecap="round" />
          <path d={gouge(332, 221, 306, 228, 1, 0.6)} fill={PAPER} />
          <path d={FIST} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
          <path d="M287 227H297M286 232H296M288 237H297" stroke={INK} strokeWidth={LINE.fine} />
          <g transform={HEAD_AT}>
            {/* a thick ink edge, so the lit face stands off the pale sky */}
            <g fill={INK} stroke={INK} strokeWidth={16} strokeLinejoin="round">
              <path d={SCROOGE_HEAD} />
              <path d={SCROOGE_NECK} />
            </g>
            <ScroogeNightHead uid={uid} seed={151} wide />
          </g>
        </g>

        {/* grass and weeds over everything's foot */}
        <path d={m.grass} fill={PAPER} />
        <path d={m.weeds} fill={PAPER} />
      </g>
    </>
  )
}

export const gravestone: LinocutArt = { width: W, height: H, Draw: Gravestone }
