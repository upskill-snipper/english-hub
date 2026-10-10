import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng } from '@/components/comics/linocut/carve'

import {
  InnerRule,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  ManFeatures,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  curlMarks,
  hatch,
  nudge,
  once,
  placer,
  portraitGround,
  rimLight,
  smooth,
  type Knot,
} from './common'

/**
 * Compeyson, as the novel describes him, and nothing else. Dickens never
 * shows him close: he is seen through Magwitch's telling, in Chapter 42, of
 * the day the two of them were tried together:
 *
 *   "When we was put in the dock, I noticed first of all what a gentleman
 *   Compeyson looked, wi' his curly hair and his black clothes and his white
 *   pocket-handkercher, and what a common sort of a wretch I looked."
 *
 * and, a little earlier: "He set up fur a gentleman, this Compeyson, and he'd
 * been to a public boarding-school and had learning. He was a smooth one to
 * talk, and was a dab at the ways of gentlefolks. He was good-looking too."
 * Later in the same speech, he speaks "wi' his face dropping every now and
 * then into his white pocket-handkercher".
 *
 * So: a good-looking man in profile, facing right, his head up and his face
 * composed, as a man looks who means to be taken for a gentleman ("what a
 * gentleman Compeyson looked"); dark curly hair, with the curls cut in paper
 * ("his curly hair"); a black tail-coat, a white neckcloth wound high and the
 * points of his collar at the jaw ("his black clothes"); and his white
 * handkerchief in his hand, which rests on the rail of the dock before him
 * ("his white pocket-handkercher"). The dock is a plain dark rail across the
 * block at his chest, with its panelled front below it. The colour of his hair is not given; it is printed dark.
 *
 * WHAT IS NOT DRAWN (the shared rules, ./common.tsx): nothing of the river,
 * and nothing of the trial but the rail. Magwitch, beside him in the dock in
 * the telling, is not drawn. Nothing here comes from a film or stage
 * production.
 *
 * Seeds: 8101 for the ground, 8102 for the cuts in the figure.
 */

/** The one man's head, unchanged: "He was good-looking too", and nothing more particular. */
const HEAD_K: Knot[] = nudge(MAN_HEAD, [
  [0, -2, 0],
  [27, 0, 4],
  [28, 0, 4],
])

/** The head lifted a little, chin up, about the base of the neck. */
const F = placer([4, 4], 0.92, -4, [164, 252])
const HEAD = smooth(F.knots(HEAD_K))

/** Dark curly hair, full over the crown, down to the top of the ear, and at the nape. */
const HAIR_K: Knot[] = [
  [228, 82],
  [224, 62],
  [208, 44],
  [182, 32],
  [150, 30],
  [120, 38],
  [98, 58],
  [86, 88],
  [84, 124],
  [90, 158],
  [100, 184],
  [112, 202, 1],
  [124, 192],
  [132, 170],
  [142, 150],
  [156, 132],
  [172, 118],
  [186, 108, 1],
  [196, 98],
  [210, 92],
  [220, 92],
]
const HAIR_PLACED = F.knots(HAIR_K)
const HAIR = smooth(HAIR_PLACED)

/** The black tail-coat over the shoulders, standing up behind the neck. */
const COAT = smooth([
  [-8, 330, 1],
  [-6, 290],
  [8, 262],
  [40, 244],
  [84, 236],
  [122, 238],
  [160, 250],
  [204, 248],
  [234, 258],
  [256, 282],
  [266, 330, 1],
])
const COLLAR = smooth([
  [86, 252, 1],
  [94, 222],
  [116, 214],
  [144, 226],
  [158, 250],
  [138, 262, 1],
])
/** The white neckcloth, wound high. */
const NECKCLOTH = smooth([
  [128, 238, 1],
  [166, 234],
  [206, 228],
  [218, 240],
  [214, 258],
  [182, 264],
  [136, 258, 1],
])
const LAPEL = smooth([
  [214, 258, 1],
  [238, 266],
  [252, 300],
  [256, 330, 1],
  [242, 330, 1],
  [234, 290],
])
/** The rail of the dock, across the block at his chest, and the panelled front below it. */
const RAIL = { y0: 262, y1: 280 }

/**
 * His hand resting on the rail, the fingers over its edge, holding his white
 * handkerchief, which hangs over the rail before him: the hand is a plain
 * shape in paper with its fingers cut apart, the cloth paper with its folds
 * cut in ink.
 */
const SLEEVE = 'M150 262C170 248 200 242 232 244L240 250L236 262Z'
const HAND = 'M232 244C242 238 256 238 266 242L274 250L272 262L234 262Z'
const FINGERS = 'M246 248L250 262M256 247L260 262M265 249L268 262'
const KERCHIEF =
  'M250 256C260 254 272 256 280 262C286 278 292 296 294 312L274 314C272 298 266 284 260 278C254 286 250 300 248 314L230 312C234 292 240 270 250 256Z'
const KERCHIEF_FOLDS = 'M266 262C268 280 272 296 276 312M256 270C254 284 252 298 252 312'

type Marks = {
  ground: string
  curls: string
  rim: string
  neck: string
  coat: string
  rail: string
}

const marks = once<Marks>(() => {
  // The courtroom, lit from the high windows in front of him; dark behind.
  const ground = portraitGround(8101, (x, y) =>
    clamp(0.08 + ((x - 30) / 300) * 0.75 - Math.max(0, (y - 230) / 220)),
  )
  const r = rng(8102)
  // "his curly hair": open rings cut in paper through the dark hair, and the
  // light along its top.
  const curls = curlMarks(r, HAIR_PLACED, 64, [2.6, 4.6])
  const [cx, cy] = F.pt([150, 118])
  const rim = rimLight(r, { cx, cy, rx: 56, ry: 64 }, 196, 334, 26, 1)
  const neck = hatch(r, { x0: 112, x1: 150, y0: 200, y1: 244 }, 5, 0.1)
  // The black coat: folds over the shoulders, the light on the front of it.
  let coat = gouge(28, 262, 16, 322, 1.4, 1.6) + gouge(70, 248, 60, 322, 1.2, 1.4)
  for (let i = 0; i < 4; i++) coat += gouge(222 + i * 4, 276 + i * 6, 226 + i * 4, 322, 0.6, -0.4)
  // The wood of the rail: its grain cut long and fine.
  let rail = ''
  for (let y = RAIL.y0 + 4; y < RAIL.y1 - 2; y += 4) {
    let x = between(r, 8, 20)
    while (x < PW - 10) {
      const len = between(r, 30, 90)
      rail += gouge(x, y, Math.min(x + len, PW - 10), y + between(r, -0.4, 0.4), 0.6)
      x += len + between(r, 8, 24)
    }
  }
  return { ground, curls, rim, neck, coat, rail }
})

function CompeysonPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-cp-head`
  const hairClip = `${uid}-cp-hair`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={HAIR} />
      </g>
      {/* "his black clothes" */}
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.neck} strokeWidth={LINE.hairline} />
      </g>
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={NECKCLOTH} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d="M146 246Q176 244 206 238M150 254Q178 254 204 250"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <ProfileEar at={F.pt(MAN_EAR)} h={42} />
      {/* "what a gentleman Compeyson looked": a good-looking face, composed, the chin up */}
      <ManFeatures F={F} brow={2.8} raise={1} mouth="set" />
      <ProfileEye at={F.pt([MAN_EYE[0], MAN_EYE[1]])} s={0.86} heavy look={0.4} />
      {/* "his curly hair" */}
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.curls} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinecap="round" />
        <path d={m.rim} fill={PAPER} />
      </g>
      {/* the dock: its panelled front, and its rail across his chest */}
      <rect x={-4} y={RAIL.y1} width={PW + 8} height={PH - RAIL.y1 + 4} fill={INK} />
      <path
        d={`M40 ${RAIL.y1 + 8}V${PH}M120 ${RAIL.y1 + 8}V${PH}M200 ${RAIL.y1 + 8}V${PH}M280 ${RAIL.y1 + 8}V${PH}`}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <rect
        x={-4}
        y={RAIL.y0}
        width={PW + 8}
        height={RAIL.y1 - RAIL.y0}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={m.rail} fill={PAPER} />
      {/* his hand on the rail, holding "his white pocket-handkercher" */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={KERCHIEF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={KERCHIEF_FOLDS} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={HAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={FINGERS} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <InnerRule />
    </>
  )
}

export const compeysonArt: LinocutArt = { width: PW, height: PH, Draw: CompeysonPortrait }

export const compeyson: Portrait = {
  name: 'Compeyson',
  art: compeysonArt,
  alt: "A linocut portrait of Compeyson standing in the dock, drawn from Magwitch's account of their trial in Chapter 42, in profile, facing right, against a dark courtroom lit from in front of him. He is a good-looking man with a composed face, his chin a little raised and his eyelid lowered. His dark hair is thick and curly. He wears a black tail-coat with a standing collar and a white neckcloth wound high. He stands behind the dark wooden rail of the dock, which crosses the picture at his chest, his forearm and hand resting on it, holding a white handkerchief that hangs over the rail. Four numbered red markers point to his face, his curly hair, his black coat and his white handkerchief.",
  describedBy: [
    { phrase: 'what a gentleman Compeyson looked', at: F.pt([188, 150]) },
    { phrase: 'his curly hair', at: [28, 120], to: F.pt([100, 110]) },
    { phrase: 'his black clothes', at: [28, 228], to: [62, 244] },
    { phrase: 'his white pocket-handkercher', at: [306, 232], to: [284, 286] },
  ],
  where: 'Chapter 42',
  passage:
    'When we was put in the dock, I noticed first of all what a gentleman Compeyson looked, wi’ his curly hair and his black clothes and his white pocket-handkercher, and what a common sort of a wretch I looked.',
  note: 'Compeyson is seen only through Magwitch’s eyes, and what Magwitch sees is class: the same crime, two men in the dock, and the one who looks a gentleman gets seven years to the other’s fourteen. He is also the man who jilted Miss Havisham, so one villain joins the two halves of the plot.',
  artNote:
    'Dickens gives no face beyond “good-looking”, and no colour for his hair, so he is drawn plainly and his hair is printed dark. The handkerchief is in his hand because he speaks in court “wi’ his face dropping every now and then” into it.',
}
