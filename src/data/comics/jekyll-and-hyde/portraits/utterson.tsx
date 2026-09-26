import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
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

import {
  InnerRule,
  PH,
  PW,
  hatch,
  lerp2,
  once,
  portraitGround,
  rimLight,
  smooth,
  strands,
} from './common'

/**
 * Mr Gabriel John Utterson, as Stevenson describes him in the first sentences
 * of the book, and nothing else:
 *
 *   "Mr. Utterson the lawyer was a man of a rugged countenance that was never
 *   lighted by a smile; cold, scanty and embarrassed in discourse; backward
 *   in sentiment; lean, long, dusty, dreary and yet somehow lovable. At
 *   friendly meetings, and when the wine was to his taste, something
 *   eminently human beaconed from his eye"
 *
 * So: a long, lean man in profile, facing right, at the end of a dinner among
 * friends: a long head on a long neck and narrow shoulders ("lean, long"); a
 * craggy face cut with many lines, a hollow under the cheekbone, a long nose
 * and a long, hard jaw ("rugged"); a mouth cut straight, its corner turned a
 * little down ("never lighted by a smile"); and one bright glint in his eye,
 * the only warm thing in the face ("beaconed from his eye"). Before him on
 * the dark table stands his glass, the wine in it printed in the spot colour
 * ("when the wine was to his taste").
 *
 * He matches the Utterson of the panels (../panels/people.tsx): the tallest
 * and thinnest man in the set, with a long hard jaw, a heavy brow and a mouth
 * that never smiles. His hair and his evening dress (a black coat, a white
 * stand collar, a dark tie) are not described, so they are plain; the hair is
 * dry and brushed back from a high, lined forehead, cut in grey strands for
 * "dusty", which sets him apart from Jekyll's dark, thick hair; the panels
 * brush it back the same way. Nothing here comes from a
 * film or stage production.
 *
 * Seeds: 3301 for the ground, 3302 for the cuts in the figure.
 */

/** A long head on a long neck, in profile, facing right. */
export const UTTERSON_HEAD = smooth([
  [118, 236, 1],
  [118, 206],
  [112, 180],
  [106, 140],
  [110, 98],
  [126, 64],
  [152, 42],
  [184, 36],
  [210, 46],
  [224, 68],
  [228, 94],
  [231, 108],
  [232.5, 114, 1],
  [226, 124],
  [232, 140],
  [241, 154],
  [249, 166, 1],
  [241, 169.5],
  [233, 170, 1],
  [234, 178],
  [232, 181.5, 1],
  [233, 185],
  [229, 190],
  [233, 200],
  [231.5, 212],
  [222, 216.5],
  [206, 214],
  [196, 220],
  [194, 236, 1],
])
/** Dry, greying hair brushed back from a high, lined forehead. */
const HAIR = smooth([
  [80, 20, 1],
  [204, 20, 1],
  [204, 46],
  [194, 58],
  [188, 80],
  [184, 104],
  [176, 118],
  [168, 118],
  [156, 126],
  [150, 160],
  [142, 196],
  [126, 226, 1],
  [80, 226, 1],
])
const EAR = smooth([
  [168, 116],
  [157, 118],
  [152, 138],
  [155, 160],
  [165, 168],
  [172, 158],
  [173, 134],
])
/** Narrow shoulders, and a long back. */
const COAT = smooth([
  [52, 330, 1],
  [58, 290],
  [80, 258],
  [112, 242],
  [150, 256],
  [192, 250],
  [220, 258],
  [238, 280],
  [246, 330, 1],
])
const COLLAR = smooth([
  [116, 234, 1],
  [154, 244],
  [194, 230, 1],
  [197, 244, 1],
  [154, 256],
  [114, 247, 1],
])
const SHIRT = smooth([
  [188, 246, 1],
  [208, 244, 1],
  [224, 330, 1],
  [204, 330, 1],
])
const TIE = smooth([
  [192, 246, 1],
  [208, 244, 1],
  [211, 257],
  [202, 262],
  [194, 257],
])
const LAPEL = smooth([
  [172, 254, 1],
  [194, 260, 1],
  [212, 330, 1],
  [192, 330, 1],
  [180, 290],
])
/** The dinner table in front of him: dark, polished wood. */
const TABLE = smooth([
  [214, 290, 1],
  [334, 284, 1],
  [334, 330, 1],
  [214, 330, 1],
])
/** His wine glass: the bowl, the stem and the foot. */
const BOWL = 'M270 216L306 216C306 233 300 246 288 250C276 246 270 233 270 216Z'
const WINE = 'M271.4 229L304.6 229C303 240 297 247 288 248.5C279 247 273 240 271.4 229Z'
const STEM = 'M288 250L288 282'
const FOOT = 'M274 284C274 280 302 280 302 284C302 287.5 274 287.5 274 284Z'

type Marks = {
  ground: string
  hair: string
  back: string
  cheek: string
  lines: string
  neck: string
  coat: string
  table: string
}

const marks = once<Marks>(() => {
  // Candlelight from the right, over the table; the dark behind his head.
  const ground = portraitGround(3301, (x, y) =>
    clamp(0.05 + ((x - 60) / 270) * 0.9 - Math.max(0, (y - 230) / 260)),
  )
  const r = rng(3302)
  // Short, dry hair, brushed down and back: grey strands on the black.
  const hair =
    strands(r, 64, lerp2([200, 48], [176, 118]), lerp2([124, 70], [132, 210]), [0.7, 1.4], 2.4) +
    strands(r, 26, lerp2([196, 34], [132, 48]), lerp2([114, 96], [112, 150]), [0.6, 1.2], 2) +
    rimLight(r, { cx: 168, cy: 132, rx: 60, ry: 96 }, 150, 285, 44, 1.1)
  let back = ''
  for (let rad = 44; rad < 90; rad += 3.4)
    back += arcDashes(r, 178, 150, rad, deg(106), deg(170), [8, 22], [2, 6])
  // "rugged": the hollow under the cheekbone, cut as shallow bowls of line.
  let cheek = ''
  for (let rad = 12; rad < 30; rad += 2.8)
    cheek += arcDashes(r, 210 + between(r, -1, 1), 144, rad, deg(66), deg(156), [8, 24], [1.5, 4])
  // The lines of a long, hard face: the brow, the temple, the eye.
  let lines = ''
  for (let i = 0; i < 6; i++)
    lines += `M${n(190 + i * 3)} ${n(84 + i * 1.5)}Q${n(186 + i * 3)} 98 ${n(192 + i * 3)} ${n(110 - i)}`
  for (let rad = 9; rad < 18; rad += 2.8) lines += arc(221, 128, rad, deg(178), deg(290))
  const neck = hatch(r, { x0: 116, x1: 202, y0: 214, y1: 240 }, 3.6, 0.07)
  const coat =
    gouge(76, 270, 64, 318, 2.2, 2) +
    gouge(104, 262, 96, 318, 1.6, 1.5) +
    gouge(140, 268, 138, 318, 1.1, -1)
  // The shine on the polished top, broken where the glass stands, and the
  // glass's reflection below it.
  let table = ''
  for (let y = 294; y < 322; y += 5) {
    let x = 222 + between(r, 0, 10)
    while (x < 322) {
      const len = between(r, 12, 40)
      const end = Math.min(x + len, 322)
      if (end < 280 || x > 296)
        table += gouge(x, y, end, y + between(r, -0.4, 0.4), between(r, 0.5, 1.3))
      x += len + between(r, 6, 14)
    }
  }
  table += gouge(288, 292, 288, 316, 1.4)
  return { ground, hair, back, cheek, lines, neck, coat, table }
})

function UttersonPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-ut-head`
  const bowlClip = `${uid}-ut-bowl`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={UTTERSON_HEAD} />
        </clipPath>
        <clipPath id={bowlClip}>
          <path d={BOWL} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={UTTERSON_HEAD} />
        <path d={COAT} />
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <path d={UTTERSON_HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.6} />
      <g clipPath={`url(#${headClip})`}>
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.6} />
          <path d={m.cheek} strokeWidth={0.95} />
          <path d={m.lines} strokeWidth={LINE.hairline} />
          <path d={m.neck} strokeWidth={1.1} />
        </g>
        <path d={HAIR} fill={INK} />
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
      <path
        d="M166 126C160 128 159 144 162 152C164 155 167 154 168 150"
        fill="none"
        stroke={INK}
        strokeWidth={1.3}
        strokeLinecap="round"
      />
      <path d={SHIRT} fill={PAPER} />
      <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={TIE} fill={INK} stroke={PAPER} strokeWidth={1} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* the long, hard jaw, back to below the ear */}
        <path d="M230 212C212 218 190 212 178 196C172 186 170 174 170 164" strokeWidth={2} />
        {/* a heavy brow, and lines cut across the forehead */}
        <path d="M204 118Q216 113 231 116" strokeWidth={3.6} />
        <path
          d="M200 76Q212 71 226 76M202 88Q215 85 228 89M206 100Q218 98 229 101"
          strokeWidth={1.1}
        />
        {/* the eye, under a heavy lid */}
        <path d="M209 126Q216.5 122 225 125" strokeWidth={2.4} />
        <path d="M211 131.5Q217.5 133 224 130" strokeWidth={LINE.fine} />
        <path d="M206 128L198 126M206 132L199 135" strokeWidth={1} />
        {/* the nostril, and the deep fold from the nose past the mouth */}
        <path d="M241 167C236.5 164 236 159 239 156" strokeWidth={1.5} />
        <path d="M232 154C222 166 219 180 222 194" strokeWidth={1.5} />
        {/* "never lighted by a smile": a straight mouth, its corner turned down */}
        <path d="M232 181.5L219 181" strokeWidth={2} />
        <path d="M219 181Q216.5 182 216 185" strokeWidth={LINE.fine} />
        <path d="M230 188.5Q227 190 225 189" strokeWidth={LINE.hairline} />
      </g>
      <circle cx={221.2} cy={127.8} r={2.8} fill={INK} />
      {/* "something eminently human beaconed from his eye": one bright glint */}
      <circle cx={222.4} cy={126.6} r={1.15} fill={PAPER} />
      {/* the table, and his glass of wine */}
      <path d={TABLE} fill={INK} stroke={INK} strokeWidth={8} strokeLinejoin="round" />
      <path d={TABLE} fill={INK} />
      <path d={m.table} fill={PAPER} />
      <path d="M214 290L334 284" fill="none" stroke={PAPER} strokeWidth={LINE.bold} />
      <path d={BOWL} fill={INK} stroke={INK} strokeWidth={6} strokeLinejoin="round" />
      <g clipPath={`url(#${bowlClip})`}>
        <path d={WINE} fill={RED} />
      </g>
      <path d={BOWL} fill="none" stroke={PAPER} strokeWidth={1.8} />
      <path
        d="M276 220Q275 232 280 240"
        fill="none"
        stroke={PAPER}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path d={STEM} fill="none" stroke={INK} strokeWidth={6} />
      <path d={STEM} fill="none" stroke={PAPER} strokeWidth={2.2} />
      <path d={FOOT} fill={PAPER} stroke={INK} strokeWidth={2} />
      <InnerRule />
    </>
  )
}

export const uttersonArt: LinocutArt = { width: PW, height: PH, Draw: UttersonPortrait }

export const utterson: Portrait = {
  name: 'Mr Gabriel John Utterson',
  art: uttersonArt,
  alt: "A linocut portrait of Mr Utterson, the lawyer, in profile, facing right, drawn from Stevenson's description in Chapter 1: a long, lean man with a long head on a long neck and narrow shoulders, greying hair brushed back from a high, lined forehead, a heavy brow, a long nose, a hollow cheek and a long, hard jaw. His face is cut with lines, and his mouth is straight, its corner turned a little down; only his eye has a bright glint in it. He wears a black evening coat, a white collar and a dark tie. In front of him on a dark, polished table stands a glass of wine, the wine printed in red. Four numbered red markers point to his unsmiling mouth, his long, lean figure, the wine and his eye.",
  describedBy: [
    {
      phrase: 'a rugged countenance that was never lighted by a smile',
      at: [262, 188],
      to: [232, 182],
    },
    { phrase: 'lean, long, dusty, dreary', at: [40, 222], to: [104, 214] },
    { phrase: 'when the wine was to his taste', at: [306, 190], to: [296, 230] },
    { phrase: 'something eminently human beaconed from his eye', at: [264, 98], to: [226, 126] },
  ],
  where: 'Chapter 1',
  passage:
    'Mr. Utterson the lawyer was a man of a rugged countenance that was never lighted by a smile; cold, scanty and embarrassed in discourse; backward in sentiment; lean, long, dusty, dreary and yet somehow lovable. At friendly meetings, and when the wine was to his taste, something eminently human beaconed from his eye; something indeed which never found its way into his talk, but which spoke not only in these silent symbols of the after-dinner face, but more often and loudly in the acts of his life.',
  note: 'The novella opens on a man who gives nothing away. Almost every word is cold or dry, and then comes “yet somehow lovable”: the warmth is real, but it shows only in his eye and in what he does.',
}
