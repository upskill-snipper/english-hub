import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { InnerRule, PH, PW, once, portraitGround } from './common'

/**
 * The Ghost of Christmas Yet to Come, as Dickens describes it in Stave Four,
 * and nothing else:
 *
 *   "It was shrouded in a deep black garment, which concealed its head, its
 *   face, its form, and left nothing of it visible save one outstretched
 *   hand. But for this it would have been difficult to detach its figure from
 *   the night, and separate it from the darkness by which it was surrounded."
 *
 * And from the paragraphs round it: "The Phantom slowly, gravely, silently,
 * approached"; "The Spirit answered not, but pointed onward with its hand";
 * Scrooge "could see nothing but a spectral hand and one great heap of
 * black".
 *
 * So the print does what the passage says is hard: a tall hooded shape of
 * solid ink on a ground of night that is almost solid ink too, told apart
 * only by a fine cut outline and a few long folds; the hood's opening is a
 * rim round nothing, because the face is concealed; and the one thing cut
 * clear is the hand, reaching out of the sleeve and pointing onward. It
 * comes into view last. No spot colour is printed: the passage is black.
 * Nothing here comes from a film or stage production.
 *
 * Seeds: 1844 for the ground, 1845 for the folds.
 */

/** The whole shrouded figure, hood to hem, the sleeve reaching forward. */
const SHROUD =
  'M148 20C174 20 194 38 202 64C208 86 208 108 204 126C214 136 222 146 228 156C236 160 244 162 252 164L250 198C242 198 234 198 226 200C230 230 240 272 256 322L40 322C54 272 70 222 84 180C92 150 96 118 100 88C104 58 120 20 148 20Z'
/** The opening of the hood, where a face would be: a rim round darkness. */
const HOOD_RIM = 'M194 56C204 70 206 96 200 118C194 128 184 126 180 114C174 96 178 72 194 56Z'
/**
 * "save one outstretched hand": long and thin, reaching out of the sleeve,
 * the forefinger pointing onward and the other fingers loosely curled. The
 * fingers are drawn as lines and cut as outlined strokes.
 */
const PALM = 'M248 168C260 166 274 170 284 175C287 180 285 186 281 190C271 194 259 194 248 192Z'
const FINGERS = [
  'M283 177L310 184',
  'M283 182Q296 186 294 192Q292 196 286 195',
  'M280 187Q290 192 287 198Q284 201 279 199',
  'M276 191Q284 197 280 202Q277 204 273 202',
  'M258 188Q268 193 277 191',
].join('')
const CUFF = 'M246 162C250 174 251 186 248 200L256 198C258 186 258 174 254 164Z'

type Marks = { ground: string; folds: string; knuckles: string }

const marks = once<Marks>(() => {
  // Night: the ground is barely cut anywhere, a little more ahead of the hand.
  const ground = portraitGround(1844, (x, y) => 0.16 + (x / PW) * 0.22 + (y / PH) * 0.08)
  const r = rng(1845)
  // A few long folds falling from the hood, so the shape can just be read.
  let folds = ''
  const lines: [number, number, number, number][] = [
    [120, 60, 92, 300],
    [140, 70, 128, 310],
    [164, 134, 170, 314],
    [188, 140, 206, 300],
    [110, 110, 70, 290],
    [216, 206, 236, 300],
  ]
  for (const [x1, y1, x2, y2] of lines)
    folds += gouge(x1, y1, x2 + between(r, -3, 3), y2, between(r, 0.8, 1.3), between(r, -3, 3))
  folds += gouge(212, 164, 258, 174, 0.9, -1) + gouge(206, 150, 234, 160, 0.7, -0.5)
  const knuckles = 'M262 172Q268 176 276 176M258 178Q266 181 274 180M297 181L298 184'
  return { ground, folds, knuckles }
})

function GhostOfChristmasYetToComePortrait(_: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      {/* "difficult to detach its figure from the night": no halo, only a
          fine cut edge and a few folds. */}
      <path d={SHROUD} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={m.folds} fill={PAPER} />
      <path d={HOOD_RIM} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path
        d="M198 64C204 80 204 100 198 116"
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.hairline}
      />
      {/* The one thing cut clear, arriving last. */}
      <g className="lc-fade-in" style={timing({ delay: 0.8, dur: 1.4 })}>
        <g stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d={PALM} fill={INK} strokeWidth={3} />
          <path d={FINGERS} fill="none" strokeWidth={6.6} />
        </g>
        <g stroke={PAPER} strokeLinecap="round" strokeLinejoin="round">
          <path d={PALM} fill={PAPER} strokeWidth={0} />
          <path d={FINGERS} fill="none" strokeWidth={4} />
        </g>
        <path d={m.knuckles} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
        <path d={CUFF} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      </g>
      <InnerRule />
    </>
  )
}

export const ghostOfChristmasYetToComeArt: LinocutArt = {
  width: PW,
  height: PH,
  Draw: GhostOfChristmasYetToComePortrait,
}

export const ghostOfChristmasYetToComePortrait: Portrait = {
  name: 'Ghost of Christmas Yet to Come',
  art: ghostOfChristmasYetToComeArt,
  alt: "A linocut portrait of the Ghost of Christmas Yet to Come, drawn from Dickens's description in Stave Four: a tall hooded figure in a long black garment that falls to the ground, standing against a night background that is almost as black as it is. The figure can be made out only by a thin pale outline and a few long pale folds. Inside the hood, where a face would be, there is only darkness inside a pale rim. The one clear thing in the picture is a thin pale hand reaching out of its sleeve towards the right, the forefinger pointing onward. Four numbered red markers point to the black garment, the hood that hides its face, the outstretched hand, and the faint edge where the figure meets the night.",
  describedBy: [
    { phrase: 'shrouded in a deep black garment', at: [48, 238], to: [84, 250] },
    { phrase: 'which concealed its head, its face', at: [244, 70], to: [200, 86] },
    { phrase: 'save one outstretched hand', at: [300, 150], to: [296, 178] },
    { phrase: 'difficult to detach its figure from the night', at: [52, 104], to: [98, 104] },
  ],
  where: 'Stave Four',
  passage:
    'It was shrouded in a deep black garment, which concealed its head, its face, its form, and left nothing of it visible save one outstretched hand. But for this it would have been difficult to detach its figure from the night, and separate it from the darkness by which it was surrounded.',
  note: 'The future cannot be seen, so the Spirit has no face. All Scrooge is given is a hand that points, and he must work out for himself where it is pointing.',
}
