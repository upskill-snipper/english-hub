import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, deg, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import { InnerRule, PH, PW, once, smooth } from './common'

/**
 * William Frankenstein as Elizabeth describes him in her letter to Victor at
 * Ingolstadt, the only description of him the novel gives:
 *
 *   "I wish you could see him; he is very tall of his age, with sweet
 *   laughing blue eyes, dark eyelashes, and curling hair. When he smiles, two
 *   little dimples appear on each cheek, which are rosy with health."
 *   (Chapter 6)
 *
 * and, in the same letter, the place he lives: "The blue lake, and snow-clad
 * mountains, they never change". So: a young boy in profile, facing right,
 * laughing, his eye creased with it under dark lashes, a dimple at the
 * corner of his smile, and the one spot of colour a blush high on his cheek
 * ("rosy with health": on the cheek, well away from the mouth); a
 * head of tight curls; behind him, a pale sky, the snow-capped mountains and
 * the lake.
 *
 * SAFEGUARDING. William is a child, and this is the only picture of him on
 * the site's cards: happy, at home, in daylight, alone, and nowhere near the
 * Creature or the place where he dies. Nothing of what happens to him is
 * drawn or hinted at here.
 *
 * The blue of his eyes cannot be printed and is left to the words; the
 * colour of his hair is not given, and a cut block prints curls dark. His
 * clothes are not described, so he wears a boy's dress of the 1790s: a short
 * dark jacket with a wide white frilled collar. Nothing here comes from a
 * film or stage production.
 *
 * Seed: 4702, for the lake, the ridges and the curls.
 */

/** A young boy's head in profile, facing right: a round brow, a small nose, a full cheek, a short neck. */
const HEAD = smooth([
  [120, 238, 1],
  [118, 214],
  [102, 192],
  [88, 164],
  [82, 128],
  [88, 92],
  [108, 62],
  [140, 44],
  [178, 42],
  [208, 56],
  [224, 80],
  [230, 106],
  [230, 122],
  [226.5, 130, 1],
  [230, 138],
  [235, 146, 1],
  [230.5, 150],
  [224, 151.5, 1],
  [225.5, 154.5],
  [227.5, 157, 1],
  [223.5, 161.5, 1],
  [225.5, 165.5, 1],
  [222, 169.5],
  [223.5, 175],
  [217.5, 182],
  [206, 186],
  [194, 188, 1],
  [196, 212],
  [200, 238, 1],
])

/** A head of tight curls over the crown and down to the nape, clear of the brow and the ear. */
const HAIR_PTS: Pt[] = [
  [214, 66],
  [200, 50],
  [176, 38],
  [146, 36],
  [116, 44],
  [94, 62],
  [80, 92],
  [76, 128],
  [80, 164],
  [92, 190],
  [108, 204],
  [122, 196],
  [128, 172],
  [138, 150],
  [144, 126],
  [154, 112],
  [170, 100],
  [190, 84],
  [204, 74],
]
const HAIR = smooth(HAIR_PTS)
/** Round curls standing out along the hair's outer edge, so the outline itself is curly. */
const CURL_EDGE: [number, number, number][] = [
  [212, 64, 6],
  [198, 50, 7],
  [178, 40, 8],
  [154, 36, 8],
  [130, 38, 8],
  [110, 48, 8],
  [94, 64, 8],
  [84, 86, 8],
  [78, 110, 8],
  [78, 134, 8],
  [82, 158, 8],
  [90, 180, 8],
  [104, 198, 7],
]

const EAR = smooth([
  [166, 124],
  [158, 120],
  [152, 126],
  [151, 140],
  [155, 150],
  [162, 152],
  [167, 146],
  [168, 134],
])

/** The open, laughing mouth, in ink behind the lips. */
const MOUTH = 'M225.6 159.6L212 158.6Q215 165.4 224 163.8Z'
/**
 * "rosy with health": the second block laid flat, high on the cheek and well
 * away from the mouth, as the pilot lays Fred's "ruddy" cheek
 * (src/data/comics/a-christmas-carol/portraits/fred.tsx).
 *
 * WHY FLAT (27 September 2026). It was first cut as a patch of six short
 * slanting red strokes, and at card and phone size they read as scratches
 * on a child's face, and this child is the one the Creature kills. Walton's
 * card had already found that red strokes on a cheek read as cuts. The style
 * guide keeps the spot colour to flat shapes; a soft, wide lozenge on the
 * cheekbone reads as a blush.
 */
const BLOOM =
  'M179.6 146.4C180.4 141.2 188.4 138.6 196 139.8C201.6 141 202.4 146.4 197.4 149.6C191.6 152.6 181.4 152.4 179.6 146.4Z'

const JACKET = smooth([
  [30, 330, 1],
  [36, 280],
  [60, 244],
  [104, 228],
  [150, 232],
  [196, 228],
  [230, 240],
  [252, 270],
  [258, 330, 1],
])
/** The wide white frilled collar, falling open over the jacket. */
const COLLAR = (() => {
  const edge: Pt[] = []
  for (let i = 0; i <= 12; i++) {
    const t = i / 12
    edge.push([96 + t * 132, 238 + Math.sin(Math.PI * t) * 26])
  }
  let d = `M102 222L216 222L228 238`
  for (let i = edge.length - 1; i > 0; i--) {
    const [x1, y1] = edge[i]
    const [x2, y2] = edge[i - 1]
    d += `Q${n((x1 + x2) / 2)} ${n((y1 + y2) / 2 + 6)} ${n(x2)} ${n(y2)}`
  }
  return d + 'Z'
})()

// ── The lake and the mountains behind him ──────────────────────────────────

const SHORE = 206
const MOUNTAINS =
  'M8 206L8 176L30 150L48 164L64 140L74 150L74 206Z' +
  'M232 206L232 170L252 140L268 156L290 118L308 142L324 128L324 206Z'
const SNOW =
  'M24 157L30 150L38 158L33 158L30 162L27 158ZM58 147L64 140L70 147L66 146L63 150Z' +
  'M246 149L252 140L260 148L255 147L252 152L249 148ZM284 127L290 118L298 128L293 127L290 133L287 127ZM318 134L324 128L324 138L321 135Z'

type Marks = {
  lake: string
  ridges: string
  curls: string
  jacket: string
  frill: string
}

const marks = once<Marks>(() => {
  // Daylight: the sky over the lake is left pale, with only a few fine cuts
  // of ink in it (drawn in the plate), and the lake below is lit.
  const r = rng(4702)
  let lake = ''
  for (let y = SHORE + 6; y < 262; y += 6) {
    let x = 10 + between(r, 0, 16)
    while (x < 322) {
      const len = between(r, 16, 52)
      lake += gouge(
        x,
        y,
        Math.min(x + len, 322),
        y + between(r, -0.4, 0.4),
        0.35 + ((y - SHORE) / 60) * 0.5,
      )
      x += len + between(r, 8, 22)
    }
  }
  // Fine lines down the mountains' flanks, cut in paper.
  let ridges = ''
  for (const [x, top] of [
    [256, 150],
    [270, 160],
    [292, 128],
    [304, 142],
    [318, 138],
    [34, 160],
    [62, 150],
  ] as Pt[])
    ridges += gouge(x, top + 6, x + between(r, -8, 8), SHORE - 2, 0.6, 1)

  // The curls: small open rings cut in paper through the dark hair.
  let curls = ''
  for (let i = 0; i < 70; i++) {
    const x = between(r, 80, 214)
    const y = between(r, 40, 210)
    const cx = x
    const cy = y
    const rad = between(r, 2.6, 4.6)
    const a0 = deg(between(r, 0, 360))
    const a1 = a0 + deg(between(r, 200, 290))
    const p0: Pt = [cx + Math.cos(a0) * rad, cy + Math.sin(a0) * rad]
    const p1: Pt = [cx + Math.cos(a1) * rad, cy + Math.sin(a1) * rad]
    curls += `M${n(p0[0])} ${n(p0[1])}A${n(rad)} ${n(rad)} 0 1 1 ${n(p1[0])} ${n(p1[1])}`
  }

  const jacket = gouge(56, 276, 46, 326, 1.4, 1) + gouge(236, 276, 246, 326, 1.4, -1)
  let frill = ''
  for (let i = 0; i < 12; i++) {
    const x = 104 + i * 10
    frill += `M${n(x)} ${n(226)}L${n(x + 1 - (i - 6) * 0.3)} ${n(238 + Math.sin((Math.PI * i) / 12) * 18)}`
  }

  return { lake, ridges, curls, jacket, frill }
})

function WilliamFrankenstein({ uid }: ArtProps) {
  const m = marks()
  const hairClip = `${uid}-wf-hair`
  return (
    <>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
          {CURL_EDGE.map(([x, y, rr]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={rr} />
          ))}
        </clipPath>
      </defs>
      {/* the pale sky, the mountains with their snow, and the lake */}
      <path d={`M8 8L324 8L324 ${SHORE}L8 ${SHORE}Z`} fill={PAPER} />
      <path
        d="M20 40L60 40M90 28L130 28M240 36L300 36M250 60L312 60M20 70L52 70M262 90L304 90"
        stroke={INK}
        strokeWidth={0.6}
        strokeLinecap="round"
      />
      <path d={MOUNTAINS} fill={INK} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
      <path d={m.ridges} fill={PAPER} />
      <path d={SNOW} fill={PAPER} />
      <path d={`M8 ${SHORE}L324 ${SHORE}L324 262L8 262Z`} fill={PAPER} />
      <path d={m.lake} fill={INK} />
      <path d={`M8 ${SHORE}L324 ${SHORE}`} stroke={INK} strokeWidth={LINE.bold} />
      {/* an ink edge round the whole figure, to lift it off the pale ground */}
      <g fill={INK} stroke={INK} strokeWidth={6} strokeLinejoin="round">
        <path d={JACKET} />
        <path d={HEAD} />
        <path d={HAIR} />
        {CURL_EDGE.map(([x, y, rr]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={rr} />
        ))}
      </g>
      <path d={JACKET} fill={INK} />
      <path d={m.jacket} fill={PAPER} />
      <path d={HEAD} fill={PAPER} />
      {/* the curls, dark, cut through with rings of light */}
      <g fill={INK}>
        <path d={HAIR} />
        {CURL_EDGE.map(([x, y, rr]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={rr} />
        ))}
      </g>
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.curls} fill="none" stroke={PAPER} strokeWidth={1.1} strokeLinecap="round" />
      </g>
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.7} strokeLinejoin="round" />
      <path d={BLOOM} fill={RED} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M164 130C159 132 158 140 160 145C161 148 164 147 165 144" strokeWidth={1.1} />
        {/* a fine brow; the eye creased with laughing, under dark lashes */}
        <path d="M198 104Q208 98.5 218 102" strokeWidth={1.9} />
        <path d="M203 116Q210 109.5 218 114.5" strokeWidth={2.4} />
        <path
          d="M206 112.6L204.4 108.4M209.6 111L209 106.6M213.4 111L214 106.8M216.6 112.6L218.6 109"
          strokeWidth={1.1}
        />
        <path d="M204.5 120Q211 122.5 217 118.5" strokeWidth={1.2} />
        {/* the small nose, the laughing mouth and the dimple beside it */}
        <path d="M231.5 147C228.5 145.5 228.5 141.5 231.5 140" strokeWidth={1.3} />
        <path d="M209.4 156.6Q207.4 160.4 209.6 164.4" strokeWidth={1.2} />
        <path d="M217 152Q211 155 210 159" strokeWidth={0.9} />
        <path d="M174 170C182 180 190 185 198 187" strokeWidth={1} />
      </g>
      <circle cx={211.2} cy={115.4} r={2.6} fill={INK} />
      <circle cx={212.2} cy={114.4} r={0.8} fill={PAPER} />
      <path d={MOUTH} fill={INK} />
      <path d="M214 160L224.4 160.6" stroke={PAPER} strokeWidth={1.1} />
      {/* the wide frilled collar */}
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={m.frill} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <InnerRule />
    </>
  )
}

export const williamFrankensteinArt: LinocutArt = {
  width: PW,
  height: PH,
  Draw: WilliamFrankenstein,
}

export const williamFrankenstein: Portrait = {
  name: 'William Frankenstein',
  art: williamFrankensteinArt,
  alt: "A linocut portrait of Victor's little brother William, a young boy, in profile, facing right, laughing, on a bright day by the lake at Geneva. He has a head of tight dark curls, a round forehead, a small nose and full cheeks; his eye is creased with laughter under dark lashes, his mouth is open in a smile with a dimple beside it, and a soft flush printed in red sits high on his cheek, well away from his mouth. He wears a short dark jacket with a wide white frilled collar. Behind him is a pale sky, dark mountains capped with snow, and the lake. Three numbered red markers point to his eye, his curls and his rosy cheek.",
  describedBy: [
    { phrase: 'sweet laughing blue eyes, dark eyelashes', at: [268, 90], to: [212, 112] },
    { phrase: 'curling hair', at: [40, 96], to: [84, 110] },
    {
      phrase: 'two little dimples appear on each cheek, which are rosy with health',
      at: [150, 206],
      to: [188, 150],
    },
  ],
  where: 'Chapter 6',
  passage:
    'I wish you could see him; he is very tall of his age, with sweet laughing blue eyes, dark eyelashes, and curling hair. When he smiles, two little dimples appear on each cheek, which are rosy with health.',
  note: 'Elizabeth writes to Victor in Ingolstadt while he recovers from his long fever. Her picture of the youngest Frankenstein, happy and loved, is the only one the novel gives.',
  artNote:
    'He is a young child, drawn as Elizabeth describes him, at home by the lake in her letter. The print cannot show blue, so his eyes are left to the words; his clothes are not described, so he wears a boy’s dress of the 1790s.',
}
