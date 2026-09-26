import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { InnerRule, PH, PW, hatch, once, portraitGround, rimLight, smooth } from './common'

/**
 * Mr Guest, Utterson's head clerk. Stevenson never describes his face or his
 * dress; he says who he is, what he is good at and what he does, all in
 * Chapter 5, by Utterson's fire:
 *
 *   "he sat on one side of his own hearth, with Mr. Guest, his head clerk,
 *   upon the other ... But the room was gay with firelight."
 *   "Guest, being a great student and critic of handwriting"
 *   "Guest's eyes brightened, and he sat down at once and studied it with
 *   passion."
 *   "the clerk laid the two sheets of paper alongside and sedulously compared
 *   their contents."
 *   "there's a rather singular resemblance; the two hands are in many points
 *   identical: only differently sloped."
 *
 * So he is drawn plainly, as a clerk of the 1880s (a dark coat, a white
 * collar, a dark tie, neat dark hair with a parting), and the markers point
 * only at what the text says: who he is, his brightening eye, his eye for a
 * hand, and what he finds. He leans over the two sheets laid side by side on
 * the little table, one finger on the last line of the second; the writing on the
 * two sheets is the same scrawl, upright on the first (Hyde's letter, "written
 * in an odd, upright hand") and sloped on the second (Jekyll's note: the text
 * says only "differently sloped", so the slope is the drawing's choice).
 * No word of it is legible, and none is meant to be. The fire
 * burns at the right, printed in the spot colour. Nothing here comes from a
 * film or stage production.
 *
 * Seeds: 3801 for the ground, 3802 for the cuts in the figure.
 */

/** The lean of a man bent over his work: the head inclined about the neck. */
const LEAN = 'rotate(16 150 244)'
const LEAN_A = deg(16)
/** A point on the head, as printed. */
const onHead = (x: number, y: number): [number, number] => {
  const dx = x - 150
  const dy = y - 244
  return [
    Math.round((150 + dx * Math.cos(LEAN_A) - dy * Math.sin(LEAN_A)) * 10) / 10,
    Math.round((244 + dx * Math.sin(LEAN_A) + dy * Math.cos(LEAN_A)) * 10) / 10,
  ]
}

/** A plain, middle-aged head in profile, facing right. */
const HEAD = smooth([
  [120, 246, 1],
  [118, 220],
  [106, 196],
  [100, 162],
  [102, 124],
  [116, 94],
  [142, 76],
  [174, 72],
  [198, 82],
  [212, 102],
  [216, 122],
  [217.5, 131, 1],
  [212.5, 139],
  [218, 152],
  [225, 163, 1],
  [219.5, 167],
  [212.5, 167.5, 1],
  [214, 174],
  [212, 177, 1],
  [213.5, 180.5],
  [209.5, 186],
  [214, 196],
  [210, 207],
  [196, 212],
  [184, 222],
  [182, 246, 1],
])
/** Neat dark hair, parted, over the top and the back. */
const HAIR = smooth([
  [80, 50, 1],
  [214, 50, 1],
  [206, 88],
  [194, 94],
  [184, 108],
  [178, 124],
  [166, 128],
  [152, 134],
  [144, 162],
  [138, 196],
  [126, 226, 1],
  [80, 226, 1],
])
const EAR = smooth([
  [162, 132],
  [151, 134],
  [147, 150],
  [151, 166],
  [161, 171],
  [167, 161],
  [168, 144],
])
const COAT = smooth([
  [30, 330, 1],
  [36, 292],
  [60, 264],
  [100, 250],
  [124, 246],
  [158, 262],
  [192, 258],
  [214, 268],
  [230, 292],
  [236, 330, 1],
])
const COLLAR = smooth([
  [120, 238, 1],
  [154, 250],
  [184, 238, 1],
  [188, 254, 1],
  [154, 264],
  [118, 254, 1],
])
const TIE = smooth([
  [172, 254, 1],
  [192, 250, 1],
  [196, 264],
  [186, 270],
  [178, 264],
])
/** The near arm, reaching across the front of the table. */
const SLEEVE = smooth([
  [120, 330, 1],
  [146, 310],
  [186, 300],
  [230, 292, 1],
  [234, 314, 1],
  [196, 322],
  [176, 330, 1],
])
const CUFF = smooth([
  [226, 290, 1],
  [238, 287, 1],
  [242, 312, 1],
  [230, 316, 1],
])
/** The little table, dark and polished, and the two sheets laid alongside on it. */
const TABLE = smooth([
  [140, 244, 1],
  [334, 236, 1],
  [334, 330, 1],
  [140, 330, 1],
])
/** Hyde's letter, "in an odd, upright hand", and Jekyll's note beside it. */
const SHEET_A = 'M160 248L222 245L228 288L154 292Z'
const SHEET_B = 'M240 244L302 241L312 283L246 287Z'
/** His hand at the foot of the second sheet: the back of it, and one finger on its last line. */
const HAND = smooth([
  [234, 292],
  [246, 286],
  [258, 288],
  [260, 300],
  [250, 308],
  [236, 310],
])
const FINGERS: [string, number][] = [
  ['M254 292L270 282', 6.2],
  ['M256 299L268 296', 5.8],
  ['M252 305L262 306', 5.4],
]
/** The fire, beyond the table: tongues of flame in the spot colour, over the coals. */
const FLAMES = [
  'M302 234C295 226 293 216 298 207C301 200 299 193 303 186C308 196 313 203 311 213C315 221 313 230 308 234Z',
  'M316 234C310 225 311 214 316 204C318 196 317 189 321 182C325 192 328 202 325 212C327 222 324 230 320 234Z',
  'M290 234C285 228 285 221 289 215C291 211 291 207 293 204C296 211 299 216 298 222C299 227 297 231 295 234Z',
]
const COALS =
  'M286 236C286 231 294 230 298 233C300 229 308 229 310 233C313 229 322 229 324 234C326 236 326 238 324 238L288 238Z'
const GRATE = 'M282 240L330 240M286 236L286 244M298 236L298 244M310 236L310 244M322 236L322 244'

type Marks = {
  ground: string
  hair: string
  back: string
  neck: string
  coat: string
  sleeve: string
  table: string
  writingA: string
  writingB: string
}

/**
 * A line of scrawl across a sheet, its letters sloped by `slope`: a run of
 * small loops, as a hand writes. Not a word of it is meant to be read.
 */
function scrawl(r: () => number, x0: number, x1: number, y: number, slope: number): string {
  let d = ''
  let x = x0
  while (x < x1 - 4) {
    const h = between(r, 2.4, 4.2)
    const w = between(r, 2.2, 3.4)
    d += `M${n(x)} ${n(y)}q${n(slope * h * 0.5 + w * 0.2)} ${n(-h)} ${n(w * 0.6 + slope * h)} ${n(-h)}q${n(-w * 0.1)} ${n(h * 0.8)} ${n(w * 0.4 - slope * h * 0.4)} ${n(h)}`
    x += w + (r() < 0.2 ? between(r, 2, 4) : 0)
  }
  return d
}

const marks = once<Marks>(() => {
  // Firelight from the right; the room dark behind him.
  const ground = portraitGround(3801, (x, y) =>
    clamp(0.05 + ((x - 60) / 260) * 0.9 - Math.max(0, (y - 250) / 300)),
  )
  const r = rng(3802)
  // Neat dark hair: fine paper strands combed back from a parting, and light
  // caught along its edge.
  let hair = ''
  for (let i = 0; i < 36; i++) {
    const t = (i + between(r, 0.1, 0.9)) / 36
    const sx = 206 - t * 60 + between(r, -2, 2)
    const sy = 84 + t * 46 + between(r, -2, 2)
    hair += gouge(sx, sy, 110 + t * 18, 90 + t * 120 + between(r, -4, 4), between(r, 0.4, 0.9), -2)
  }
  hair += rimLight(r, { cx: 158, cy: 150, rx: 58, ry: 80 }, 160, 290, 40, 1)
  // The parting: one clean paper cut from the brow back over the crown.
  hair += gouge(204, 80, 130, 70, 1.1, -3)
  let back = ''
  for (let rad = 40; rad < 78; rad += 3.6)
    back += arcDashes(r, 172, 156, rad, deg(106), deg(160), [8, 20], [2, 6])
  const neck = hatch(r, { x0: 118, x1: 188, y0: 218, y1: 246 }, 4.6, 0.08)
  const coat =
    gouge(56, 278, 46, 318, 2.2, 2) +
    gouge(86, 266, 78, 318, 1.6, 1.5) +
    gouge(118, 270, 112, 318, 1.2, -1)
  const sleeve = gouge(152, 318, 190, 306, 1.4, 1) + gouge(194, 308, 222, 300, 1.1, 1)
  // The polished top of the table, with the firelight along it.
  let table = ''
  for (let y = 306; y < 326; y += 5) table += gouge(146, y, 330, y - 4, between(r, 0.6, 1.2))
  // "only differently sloped": the same scrawl on both sheets, upright on
  // Hyde's letter and sloped forward on Jekyll's note.
  let writingA = ''
  let writingB = ''
  for (let i = 0; i < 7; i++) {
    writingA += scrawl(r, 162 - i * 0.8, 220 + i * 0.8, 256 + i * 5.2, 0)
    writingB += scrawl(r, 248 + i * 0.9, 300 + i * 1.4, 252 + i * 5.2, 0.55)
  }
  return { ground, hair, back, neck, coat, sleeve, table, writingA, writingB }
})

function GuestPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-gu-head`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* the fire, beyond the table */}
      <path d={COALS} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <path d={GRATE} fill="none" stroke={PAPER} strokeWidth={2} />
      {FLAMES.map((d, i) => (
        <path
          key={d}
          d={d}
          fill={RED}
          className="lc-flicker"
          // four 0.9 s flickers after the last delay: all done by 4 s
          style={timing({ delay: 0.2 + i * 0.1 })}
        />
      ))}
      {/* the ink halo that lifts him off the ground */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={COAT} />
        <path d={SLEEVE} />
        <g transform={LEAN}>
          <path d={HEAD} />
        </g>
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <g transform={LEAN}>
        <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.6} />
        <g clipPath={`url(#${headClip})`}>
          <g fill="none" stroke={INK} strokeLinecap="round">
            <path d={m.back} strokeWidth={1.4} />
            <path d={m.neck} strokeWidth={1} />
          </g>
          <path d={HAIR} fill={INK} />
          <path d={m.hair} fill={PAPER} />
        </g>
        <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.9} strokeLinejoin="round" />
        <path
          d="M160 141C154 143 153 155 156 162C158 165 161 164 162 160"
          fill="none"
          stroke={INK}
          strokeWidth={1.2}
          strokeLinecap="round"
        />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d="M210 207C194 214 176 210 166 196C161 188 160 178 160 168" strokeWidth={1.8} />
          {/* a level brow, and the eye cast down to the sheets */}
          <path d="M194 124Q205 120 216 123" strokeWidth={2.8} />
          <path d="M198 133Q205 131 213 133.5" strokeWidth={2.3} />
          <path d="M200 137Q206 138.5 212 136.5" strokeWidth={LINE.fine} />
          {/* the nostril, and a mouth shut in concentration */}
          <path d="M220 164C216.5 161.5 216 157.5 218.5 155" strokeWidth={1.3} />
          <path d="M212 177L203 176.5" strokeWidth={1.7} />
          <path d="M211 184Q208 185.5 206 184.5" strokeWidth={LINE.hairline} />
        </g>
        <circle cx={207.6} cy={135} r={2.3} fill={INK} />
        {/* "Guest's eyes brightened": a bright glint */}
        <circle cx={208.4} cy={134.3} r={0.95} fill={PAPER} />
      </g>
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={TIE} fill={INK} stroke={PAPER} strokeWidth={1} />
      {/* the table, the two sheets laid alongside, and his hand on the second */}
      <path d={TABLE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.table} fill={PAPER} />
      <path d={SHEET_A} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={SHEET_B} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d={m.writingA}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      <path
        d={m.writingB}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.sleeve} fill={PAPER} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <g fill="none" strokeLinecap="round">
        {FINGERS.map(([d, w]) => (
          <path key={`i${d}`} d={d} stroke={INK} strokeWidth={w + 3.2} />
        ))}
      </g>
      <path d={HAND} fill={PAPER} stroke={INK} strokeWidth={2.4} strokeLinejoin="round" />
      <g fill="none" strokeLinecap="round">
        {FINGERS.map(([d, w]) => (
          <g key={d}>
            <path d={d} stroke={INK} strokeWidth={w + 3.2} />
            <path d={d} stroke={PAPER} strokeWidth={w} />
          </g>
        ))}
      </g>
      <path d={HAND} fill={PAPER} />
      <InnerRule />
    </>
  )
}

export const guestArt: LinocutArt = { width: PW, height: PH, Draw: GuestPortrait }

const EYE: Pt = onHead(208, 135)

export const guest: Portrait = {
  name: 'Mr Guest',
  art: guestArt,
  alt: "A linocut portrait of Mr Guest, Utterson's head clerk, by Utterson's fire in Chapter 5: a plain, clean-shaven man of middle years with neat dark hair parted on top, in a dark coat, a white collar and a dark tie, seen in profile facing right and bent forward over a little table. On the table two sheets of paper lie side by side, each covered in the same handwriting, upright on the first sheet and sloped on the second; one of his fingers rests on the last line of the second. His eye, cast down at the sheets, has a bright glint in it. Beyond the table a fire burns in its grate, printed in red. Four numbered red markers point to him, his eye, his finger on the writing and the two sheets.",
  describedBy: [
    { phrase: 'Mr. Guest, his head clerk', at: [52, 226], to: [86, 262] },
    { phrase: "Guest's eyes brightened", at: [280, 112], to: EYE },
    { phrase: 'a great student and critic of handwriting', at: [300, 306], to: [268, 286] },
    {
      phrase: 'the two hands are in many points identical: only differently sloped',
      at: [122, 262],
      to: [160, 266],
    },
  ],
  where: 'Chapter 5',
  note: 'Utterson shows Guest Hyde’s letter to hear his opinion. When a note from Jekyll arrives, the expert eye sees at once what the lawyer did not want to see: the two hands are alike. Utterson locks the note away.',
  artNote:
    'Stevenson never describes his face or his clothes, so he is drawn plainly, as a clerk of the 1880s; the markers point only at what the text says of him.',
}
