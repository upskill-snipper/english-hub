import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  InnerRule,
  PH,
  PW,
  capsule,
  hatch,
  once,
  portraitGround,
  rimLight,
  smooth,
  strands,
} from './common'

/**
 * Alphonse Frankenstein at the inn near Thonon, in Chapter 2, when Victor,
 * thirteen, brings him the book that will set his course:
 *
 *   "When I was thirteen years of age, we all went on a party of pleasure to
 *   the baths near Thonon: the inclemency of the weather obliged us to remain
 *   a day confined to the inn. ... My father looked carelessly at the
 *   titlepage of my book, and said, "Ah! Cornelius Agrippa! My dear Victor,
 *   do not waste your time upon this; it is sad trash."" (Chapter 2)
 *
 * So: an older man in profile, facing right, by the inn's window, where the
 * rain runs down the panes; he holds the open book low in one hand, and his
 * eye, under a heavy lid, falls on its title page only in passing, the mouth
 * set in a short, dismissive line. Not a word on the page is legible, and
 * none is meant to be. There is no red in this plate: the passage names no
 * colour.
 *
 * Shelley never describes his face. He married late ("nor was it until the
 * decline of life that he became a husband and the father of a family",
 * Chapter 1) and his hair is grey by the end ("his grey hairs", Chapter 23),
 * so he is the panels' Alphonse (../panels/people.tsx): an older man with a
 * high forehead, his grey hair swept back and tied at the nape with a black
 * ribbon, as a Genevese syndic of the 1780s wore it; a dark coat with a high
 * collar and a white neckcloth. His grey hair is cut as the panels cut it:
 * dense paper strands combed back through the black. Nothing here comes from
 * a film or stage production.
 *
 * Seeds: 4901 for the ground, 4902 for the cuts in the figure.
 */

/** An older man's head in profile, facing right: a high forehead, a long nose, a heavy jaw. */
const HEAD = smooth([
  [120, 262, 1],
  [118, 226],
  [102, 190],
  [90, 150],
  [92, 104],
  [110, 66],
  [140, 44],
  [176, 40],
  [204, 52],
  [218, 74],
  [223, 98],
  [222, 110],
  [218.5, 117, 1],
  [224, 130],
  [230, 142],
  [235, 153, 1],
  [229, 157],
  [221, 158, 1],
  [221.5, 162],
  [223, 166, 1],
  [220, 170, 1],
  [221.5, 174],
  [218, 179],
  [220, 188],
  [216, 198],
  [204, 204],
  [186, 206],
  [174, 202, 1],
  [178, 230],
  [182, 262, 1],
])
/** Grey hair swept back from a high forehead over the crown to the nape. */
const HAIR = smooth([
  [198, 50],
  [184, 40],
  [158, 34],
  [128, 38],
  [104, 54],
  [88, 82],
  [84, 120],
  [88, 156],
  [98, 182],
  [112, 196, 1],
  [124, 182],
  [128, 160],
  [136, 138],
  [148, 122],
  [162, 110],
  [176, 94],
  [188, 72],
])
/** The queue at the nape, and its black ribbon tied in a bow. */
const QUEUE = smooth([
  [100, 188],
  [110, 194],
  [104, 222],
  [96, 252],
  [88, 256],
  [90, 226],
])
const BOW = 'M104 192L88 180L86 198ZM104 192L114 176L120 194ZM100 188L110 188L112 198L102 200Z'

const EAR = smooth([
  [162, 128],
  [155, 124],
  [150, 130],
  [149, 143],
  [152, 153],
  [158, 157],
  [164, 151],
  [165, 139],
])

/** The dark coat, its high collar standing behind the neck, and the white neckcloth. */
const COAT = smooth([
  [-12, 330, 1],
  [-12, 264],
  [30, 246],
  [80, 236],
  [120, 240],
  [160, 246],
  [196, 250],
  [224, 266],
  [240, 300],
  [244, 330, 1],
])
const COLLAR = smooth([
  [84, 240, 1],
  [92, 212],
  [106, 200],
  [122, 214],
  [138, 234],
  [150, 246, 1],
  [118, 248],
])
const NECKCLOTH = smooth([
  [172, 208, 1],
  [196, 210],
  [212, 206, 1],
  [216, 226],
  [204, 244],
  [186, 250],
  [174, 238],
])

/** The near arm, bent, holding the book low in front of him. */
const SLEEVE = smooth([
  [110, 330, 1],
  [120, 290],
  [150, 262],
  [186, 262],
  [210, 272, 1],
  [214, 294, 1],
  [184, 294],
  [158, 306],
  [150, 330, 1],
])
const CUFF = 'M206 268L218 266L222 294L210 296Z'
/** The open book, tilted up towards him: its dark boards and its two pages. */
const BOARDS = 'M206 252L302 238L308 282L212 298Z'
const PAGE_L = 'M212 254L256 247L259 286L216 293Z'
const PAGE_R = 'M256 247L300 240L304 280L259 286Z'
/** The back of his hand under the book's lower edge, and his thumb laid over the left page. */
const HANDBACK = smooth([
  [208, 284],
  [218, 282],
  [232, 290],
  [234, 302],
  [224, 308],
  [210, 304],
])
const THUMB = capsule(222, 286, 234, 274, 6.4)
const FINGERS: [Pt, Pt, number][] = [
  [[230, 296], [244, 294], 5.6],
  [[230, 302], [243, 301], 5.4],
]

/** The inn's window at the upper right, where the rain runs down the panes. */
const WINDOW = 'M244 22L322 22L322 176L244 176Z'
const MULLIONS = 'M283 22L283 176M244 74L322 74M244 126L322 126'
const SILL = 'M238 176L326 176L326 186L238 186Z'

type Marks = {
  ground: string
  rain: string
  hair: string
  hairRim: string
  coat: string
  sleeve: string
  lines: string
  neck: string
  scrawl: string
}

/** A line of scrawl, not meant to be read: a run of small loops. */
function scrawl(r: () => number, x0: number, x1: number, y: number, h: number): string {
  let d = ''
  let x = x0
  while (x < x1 - 3) {
    const w = between(r, 1.8, 3)
    d += `M${n(x)} ${n(y)}q${n(w * 0.3)} ${n(-h)} ${n(w * 0.6)} ${n(-h)}q${n(-w * 0.1)} ${n(h * 0.8)} ${n(w * 0.4)} ${n(h)}`
    x += w + (r() < 0.2 ? between(r, 2, 4) : 0)
  }
  return d
}

const marks = once<Marks>(() => {
  // A dull day indoors: grey light from the window at the right, dark
  // behind him.
  const ground = portraitGround(4901, (x, y) => {
    const d = Math.hypot(x - 290, (y - 100) * 1.1)
    return 0.08 + clamp(1 - d / 300) ** 1.3 * 0.8
  })
  const r = rng(4902)

  // "the inclemency of the weather": the panes dark with the storm outside,
  // the rain cut as long slanting streaks.
  let rain = ''
  for (let i = 0; i < 46; i++) {
    const x = between(r, 246, 330)
    const y = between(r, 20, 170)
    const L = between(r, 10, 22)
    rain += gouge(x, y, x - L * 0.22, y + L, between(r, 0.4, 0.8))
  }

  // Grey hair: dense paper strands combed back through the black, and light
  // along the crown from the window.
  let hair = strands(
    r,
    70,
    (t) => [200 - t * 66, 48 + t * 72],
    (t) => [132 - t * 40, 38 + t * 150],
    [0.9, 1.6],
    2.6,
  )
  hair += strands(
    r,
    50,
    (t) => [190 - t * 62, 40 + t * 22],
    (t) => [108 - t * 20, 70 + t * 100],
    [0.8, 1.4],
    2,
  )
  const hairRim = rimLight(r, { cx: 146, cy: 120, rx: 60, ry: 84 }, 230, 330, 30, 1.2)

  const coat = gouge(22, 264, 8, 322, 2, 2) + gouge(58, 254, 52, 324, 1.5, 1.5)
  const sleeve = gouge(132, 290, 188, 270, 1.2, -1) + gouge(150, 304, 200, 282, 1, -0.6)

  // An older face: lines across the high forehead, at the corner of the eye,
  // from the nose to the mouth, and along the jaw.
  const lines =
    'M190 64Q202 61 212 66M188 74Q202 71 216 77M192 84Q204 82 218 87' +
    'M192 116L184 114M192 120L185 124' +
    'M216 146Q206 156 208 170M196 178Q200 190 208 196M178 170C184 186 194 198 208 202'
  const neck = hatch(r, { x0: 124, x1: 180, y0: 206, y1: 232 }, 4, 0.12)

  // The title page: a heading and a few lines of scrawl, and the opposite
  // page, closer set; not a word to be read.
  let text = scrawl(r, 222, 250, 262, 4) + scrawl(r, 226, 246, 270, 2.6)
  for (let i = 0; i < 3; i++) text += scrawl(r, 224, 250, 278 + i * 5, 2)
  for (let i = 0; i < 7; i++) text += scrawl(r, 262, 298, 252 + i * 4.6, 2)

  return { ground, rain, hair, hairRim, coat, sleeve, lines, neck, scrawl: text }
})

function AlphonseFrankenstein({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-af-head`
  const hairClip = `${uid}-af-hair`
  const windowClip = `${uid}-af-window`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={windowClip}>
          <path d={WINDOW} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* the window, and the rain on it */}
      <path d={WINDOW} fill={INK} />
      <g clipPath={`url(#${windowClip})`}>
        <path d={m.rain} fill={PAPER} />
      </g>
      <path d={WINDOW} fill="none" stroke={PAPER} strokeWidth={LINE.bold} />
      <path d={MULLIONS} fill="none" stroke={PAPER} strokeWidth={LINE.bold} />
      <path d={SILL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      {/* the ink halo that lifts him off the ground */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={COAT} />
        <path d={HEAD} />
        <path d={HAIR} />
        <path d={SLEEVE} />
        <path d={BOARDS} />
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <path d={HEAD} fill={PAPER} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.lines} strokeWidth={0.9} />
        <path d={m.neck} strokeWidth={1.1} />
      </g>
      <path d={QUEUE} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
        <path d={m.hairRim} fill={PAPER} />
      </g>
      <path d={BOW} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M160 132C156 134 155 142 157 147C158 150 161 149 162 146" strokeWidth={1.1} />
        {/* one brow a little raised; a heavy lid over an eye cast down at the book */}
        <path d="M196 101Q208 94 221 100" strokeWidth={2.8} />
        <path d="M198 113.5Q206 109 216 112.5" strokeWidth={2.6} />
        <path d="M200 118Q207 120 214.5 116.5" strokeWidth={LINE.fine} />
        {/* the nostril, and the mouth set in a short dismissive line */}
        <path d="M231 153C227 151 227 146 231 144" strokeWidth={1.4} />
        <path d="M223 166.4L212 166Q209.5 167.4 209 169.4" strokeWidth={1.7} />
      </g>
      <circle cx={208.4} cy={116} r={2.3} fill={INK} />
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path
        d={NECKCLOTH}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <path
        d="M184 216C190 224 196 230 206 232M180 228C186 238 192 242 200 246"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      {/* the arm, and the book held low in his hand */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.sleeve} fill={PAPER} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={BOARDS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={PAGE_L} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={PAGE_R} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d="M256 247L259 286" stroke={INK} strokeWidth={1.4} />
      <path d={m.scrawl} fill="none" stroke={INK} strokeWidth={0.7} strokeLinecap="round" />
      <g fill={INK} stroke={INK} strokeWidth={3.4} strokeLinejoin="round">
        <path d={HANDBACK} />
        {FINGERS.map(([a, b, w]) => (
          <path key={`h${a[0]}-${a[1]}`} d={capsule(a[0], a[1], b[0], b[1], w)} />
        ))}
        <path d={THUMB} />
      </g>
      <path d={HANDBACK} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      {FINGERS.map(([a, b, w]) => (
        <path
          key={`${a[0]}-${a[1]}`}
          d={capsule(a[0], a[1], b[0], b[1], w)}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
      ))}
      <path d={THUMB} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d="M231.5 276.5L233 278.4" stroke={INK} strokeWidth={0.8} />
      <InnerRule />
    </>
  )
}

export const alphonseFrankensteinArt: LinocutArt = {
  width: PW,
  height: PH,
  Draw: AlphonseFrankenstein,
}

export const alphonseFrankenstein: Portrait = {
  name: 'Alphonse Frankenstein',
  art: alphonseFrankensteinArt,
  alt: "A linocut portrait of Victor's father, Alphonse Frankenstein, at the inn near Thonon: an older man in profile, facing right, with a high, lined forehead and grey hair swept back and tied at the nape with a black ribbon bow. He wears a dark coat with a high collar and a white neckcloth. In one hand he holds an open book low in front of him, his thumb over the page, and his eye, under a heavy lid, falls on the title page only in passing; his mouth is set in a short, dismissive line. Behind him at the right is the inn's window, its panes dark with rain running down them. Three numbered red markers point to the rain on the window, his eye and the book.",
  describedBy: [
    {
      phrase: 'the inclemency of the weather obliged us to remain a day confined to the inn',
      at: [300, 200],
      to: [300, 150],
    },
    {
      phrase: 'My father looked carelessly at the titlepage of my book',
      at: [236, 70],
      to: [210, 114],
    },
    { phrase: 'it is sad trash', at: [292, 306], to: [238, 276] },
  ],
  where: 'Chapter 2',
  passage:
    'When I was thirteen years of age, we all went on a party of pleasure to the baths near Thonon: the inclemency of the weather obliged us to remain a day confined to the inn. In this house I chanced to find a volume of the works of Cornelius Agrippa. I opened it with apathy; the theory which he attempts to demonstrate, and the wonderful facts which he relates, soon changed this feeling into enthusiasm. A new light seemed to dawn upon my mind; and, bounding with joy, I communicated my discovery to my father. My father looked carelessly at the titlepage of my book, and said, "Ah! Cornelius Agrippa! My dear Victor, do not waste your time upon this; it is sad trash."',
  note: 'A loving father, and a careless one here: Victor says that if his father had explained why Agrippa was out of date, “the train of my ideas would never have received the fatal impulse that led to my ruin”. Readers can weigh how fair that is.',
  artNote:
    'Shelley never describes his face. He did not marry “until the decline of life”, and his hair is grey by the end, so he is an older man with grey hair tied back, as the panels draw him, in the dress of a Genevese gentleman of the 1780s.',
}
