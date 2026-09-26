import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import { InnerRule, PH, PW, hatch, once, placing, portraitGround, smooth } from './common'

/**
 * Justine Moritz at her trial in Chapter 8, as Victor sees her from the
 * benches:
 *
 *   "The appearance of Justine was calm. She was dressed in mourning; and her
 *   countenance, always engaging, was rendered, by the solemnity of her
 *   feelings, exquisitely beautiful. Yet she appeared confident in
 *   innocence, and did not tremble, although gazed on and execrated by
 *   thousands ... A tear seemed to dim her eye when she saw us; but she
 *   quickly recovered herself, and a look of sorrowful affection seemed to
 *   attest her utter guiltlessness." (Chapter 8)
 *
 * So: a young woman in profile, facing left, standing at the bar of the
 * court, upright and still, her head level; her gown black for mourning; one
 * tear on her cheek below the eye; and behind her, in the dark of the court,
 * rows of heads and shoulders, the thousands who gaze on her. (They were
 * first cut as pale faces with dots for eyes, and read as a cartoon crowd;
 * they are dark shapes edged in paper now, as a crowd in a dim room is.) The bar itself
 * runs across the foot of the block in front of her. There is no red in
 * this plate: the passage names no colour, and nothing here is to be read as
 * blood.
 *
 * SAFEGUARDING. This is Justine at her trial, alive and composed. Her
 * condemnation and her death are not drawn or hinted at.
 *
 * Her looks are not described beyond the passage (Elizabeth calls her
 * "extremely pretty" in Chapter 6), so she is drawn plainly, as a young
 * Genevese servant of the 1790s: a plain gathered white cap with a frill,
 * covering her hair, and a black gown with a black kerchief. Nothing here comes from a film or stage
 * production.
 *
 * She is drawn facing right in her own 0..240 by 0..336 frame and flipped by
 * P to face left, towards the judges.
 *
 * Seeds: 4801 for the ground, 4802 for the cuts in the figure and the crowd.
 */

const P = placing(30, -12, 1.12, true)

/** A young woman's head in profile, facing right: a straight small nose, a round chin. */
const HEAD = smooth([
  [82, 252, 1],
  [78, 214],
  [64, 184],
  [56, 150],
  [58, 112],
  [72, 78],
  [98, 56],
  [128, 48],
  [154, 56],
  [168, 74],
  [174, 96],
  [174.5, 110],
  [172, 117, 1],
  [176.5, 129],
  [181, 140, 1],
  [177.5, 144.5],
  [171.5, 146.5, 1],
  [172.5, 151.5],
  [171, 156.5, 1],
  [172.5, 161],
  [169, 166.5],
  [171, 175],
  [165.5, 185],
  [152, 190],
  [140, 196],
  [136, 216],
  [138, 252, 1],
])
/** The plain white cap: soft and gathered over the crown, covering her hair. */
const CAP = smooth([
  [164, 70, 1],
  [162, 50],
  [146, 32],
  [118, 22],
  [86, 26],
  [60, 42],
  [44, 70],
  [40, 104],
  [46, 136],
  [60, 156, 1],
  [80, 150],
  [94, 132],
  [104, 112],
  [120, 96],
  [140, 84],
  [156, 76],
])
/** The cap's frill round her face: small scallops along its front edge. */
const FRILL = (() => {
  const edge: Pt[] = [
    [164, 72],
    [150, 80],
    [132, 88],
    [116, 100],
    [102, 118],
    [92, 136],
    [78, 150],
    [62, 158],
  ]
  let d = ''
  for (let i = 0; i < edge.length - 1; i++) {
    const [x1, y1] = edge[i]
    const [x2, y2] = edge[i + 1]
    const mx = (x1 + x2) / 2
    const my = (y1 + y2) / 2
    const dx = x2 - x1
    const dy = y2 - y1
    const L = Math.hypot(dx, dy) || 1
    d += `M${n(x1)} ${n(y1)}Q${n(mx + (dy / L) * 6)} ${n(my - (dx / L) * 6)} ${n(x2)} ${n(y2)}`
  }
  return d
})()
const EAR = smooth([
  [112, 128],
  [106, 125],
  [102, 130],
  [102, 141],
  [105, 148],
  [110, 150],
  [114, 145],
  [115, 135],
])
/** A little of her dark hair, gathered at the nape below the cap. */
const NAPE = smooth([
  [52, 150],
  [66, 158],
  [80, 160],
  [84, 172],
  [72, 182],
  [56, 176],
  [48, 164],
])
/** The black mourning gown, high to the neck, with a black kerchief. */
const GOWN = smooth([
  [-14, 340, 1],
  [-8, 296],
  [12, 262],
  [46, 244],
  [84, 234],
  [120, 236],
  [150, 232],
  [176, 244],
  [200, 270],
  [214, 304],
  [218, 340, 1],
])
/** The tear, below her eye. */
const TEAR =
  'M162 118C160.5 122 159 126 160 128.5C161 130.6 164 130.4 164.6 128.2C165.4 125.8 163.8 121.8 162 118Z'

/** The bar of the court, across the foot of the block, in the plate's coordinates. */
const BAR = 'M-4 296L336 290L336 330L-4 330Z'

type Marks = {
  ground: string
  crowd: string[]
  gown: string
  bar: string
  cheek: string
  neck: string
  cap: string
}

const marks = once<Marks>(() => {
  // The court is dark; a little light falls on her from the left, where she
  // faces the judges.
  const ground = portraitGround(4801, (x, y) =>
    clamp(0.06 + (1 - x / 332) * 0.45 - Math.max(0, (y - 200) / 300)),
  )
  const r = rng(4802)

  // "gazed on and execrated by thousands": rows of small pale heads and
  // shoulders in the dark behind her, dimmer and smaller as they go back.
  // Each row is drawn in front of the one behind it, and each head and its
  // shoulders are one dark shape with a paper edge, so the crowd reads as
  // many people in the dark, not as faces.
  const crowd: string[] = []
  const rows: [number, number, number][] = [
    [74, 5, 15],
    [100, 6, 18],
    [130, 7.4, 22],
    [166, 9, 27],
    [206, 11, 32],
    [248, 13, 38],
  ]
  rows.forEach(([y, hr, step], k) => {
    let row = ''
    for (let x = 14 + (k % 2) * step * 0.5; x < 330; x += step + between(r, -2, 2)) {
      const cx = x + between(r, -2, 2)
      const cy = y + between(r, -2, 2)
      row += `M${n(cx - hr)} ${n(cy)}a${n(hr)} ${n(hr * 1.15)} 0 1 0 ${n(hr * 2)} 0a${n(hr)} ${n(hr * 1.15)} 0 1 0 ${n(-hr * 2)} 0Z`
      row += `M${n(cx - hr * 2.1)} ${n(cy + hr * 3.4)}Q${n(cx - hr * 1.6)} ${n(cy + hr * 0.9)} ${n(cx)} ${n(cy + hr * 0.9)}Q${n(cx + hr * 1.6)} ${n(cy + hr * 0.9)} ${n(cx + hr * 2.1)} ${n(cy + hr * 3.4)}Z`
    }
    crowd.push(row)
  })

  const gown =
    gouge(24, 266, 10, 334, 1.8, 2) +
    gouge(60, 252, 54, 334, 1.4, 1.5) +
    gouge(184, 262, 200, 334, 1.6, -1.5)
  let bar = ''
  for (let i = 0; i < 3; i++) bar += gouge(0, 304 + i * 8, 334, 298 + i * 8, 0.6 + i * 0.1, 0.5)

  // The soft shade at the back of the cheek, and under the jaw.
  const cheek = 'M126 150C130 166 140 178 152 186'
  // The neck in the shadow of the jaw and the cap, hatched darker than the face.
  const neck =
    hatch(r, { x0: 60, x1: 142, y0: 192, y1: 250 }, 3.6, 0.1) +
    hatch(r, { x0: 56, x1: 100, y0: 150, y1: 192 }, 3.6, 0.1)
  // The folds of the cap, and its frill.
  // The cap is gathered: fine folds running out from the back of the crown
  // to its edge.
  let cap = ''
  const gather: Pt = [70, 78]
  for (let i = 0; i < 16; i++) {
    const a = ((-150 + i * 13) * Math.PI) / 180
    const L = between(r, 34, 60)
    cap += `M${n(gather[0] + Math.cos(a) * 8)} ${n(gather[1] + Math.sin(a) * 8)}Q${n(gather[0] + Math.cos(a + 0.12) * L * 0.6)} ${n(gather[1] + Math.sin(a + 0.12) * L * 0.6)} ${n(gather[0] + Math.cos(a) * L)} ${n(gather[1] + Math.sin(a) * L)}`
  }
  let frill = ''
  for (let i = 0; i < 9; i++) {
    const t = i / 8
    const x = 166 - t * 104
    const y = 74 + t * 72 - Math.sin(Math.PI * t) * 16
    frill += `M${n(x)} ${n(y)}l${n(-2)} ${n(4)}`
  }
  cap += frill

  return { ground, crowd, gown, bar, cheek, neck, cap }
})

function JustineMoritz({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-jm-head`
  const capClip = `${uid}-jm-cap`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={capClip}>
          <path d={CAP} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* the crowd in the dark of the court */}
      {m.crowd.map((row, k) => (
        <path
          key={row.slice(0, 24)}
          d={row}
          fill={INK}
          stroke={PAPER}
          strokeWidth={0.7 + k * 0.18}
        />
      ))}
      <g transform={P.transform}>
        {/* the ink halo that lifts her off the crowd */}
        <g fill={INK} stroke={INK} strokeWidth={10} strokeLinejoin="round">
          <path d={GOWN} />
          <path d={HEAD} />
          <path d={CAP} />
        </g>
        <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.gown} fill={PAPER} />
        <path d={HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.cheek} strokeWidth={1} />
          <path d={m.neck} strokeWidth={0.9} />
        </g>
        {/* the black kerchief, high at the neck */}
        <path
          d="M84 226C104 236 130 236 150 226L156 240C132 250 104 250 80 240Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <path d={NAPE} fill={INK} stroke={PAPER} strokeWidth={1} strokeLinejoin="round" />
        <path d={CAP} fill={PAPER} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
        <g clipPath={`url(#${capClip})`}>
          <path d={m.cap} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
        </g>
        <path d={FRILL} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />

        <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d="M110 131C107 133 106 140 108 143" strokeWidth={1} />
          {/* a level brow; the eye steady, looking ahead */}
          <path d="M146 98Q156 94 167 98" strokeWidth={2} />
          <path d="M150 109.5Q157 104.5 165 108.5" strokeWidth={2} />
          <path d="M151.5 113.5Q157.5 116.6 164 112.6" strokeWidth={LINE.fine} />
          {/* the nostril, and a closed, still mouth */}
          <path d="M175.5 142.6C172 141 172 136.6 175.5 135" strokeWidth={1.3} />
          <path d="M171 156.6L162.6 157" strokeWidth={1.6} />
          <path d="M168.6 162Q166 163.2 163.4 162.4" strokeWidth={LINE.hairline} />
        </g>
        <circle cx={158.6} cy={110.4} r={2.4} fill={INK} />
        <circle cx={159.4} cy={109.6} r={0.8} fill={PAPER} />
        {/* "A tear seemed to dim her eye" */}
        <path d={TEAR} fill={PAPER} stroke={INK} strokeWidth={1} />
      </g>
      {/* the bar of the court, in front of her */}
      <path d={BAR} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} />
      <path d={m.bar} fill={PAPER} />
      <InnerRule />
    </>
  )
}

export const justineMoritzArt: LinocutArt = { width: PW, height: PH, Draw: JustineMoritz }

/** The cheek, reached from below the jaw, so the marker's line keeps clear of the mouth. */
const FACE: Pt = P.to(136, 160)
const TEAR_AT: Pt = P.to(172, 128)
const GOWN_AT: Pt = P.to(110, 262)

export const justineMoritz: Portrait = {
  name: 'Justine Moritz',
  art: justineMoritzArt,
  alt: 'A linocut portrait of Justine Moritz at her trial, in profile, facing left, standing upright and still at the bar of the court, which runs across the foot of the picture in front of her. She is a young woman in a plain gathered white cap with a frill round her face, dressed all in black for mourning, with a black kerchief at her neck. Her head is level and her mouth closed, and a single tear lies on her cheek below her eye. Behind her, in the dark of the court, rows and rows of people are packed together, dark heads and shoulders edged in pale light, smaller towards the back. There is no colour in the print but black and paper. Four numbered red markers point to her black gown, her face, the crowd and the tear.',
  describedBy: [
    { phrase: 'She was dressed in mourning', at: [GOWN_AT[0] + 40, 300], to: GOWN_AT },
    { phrase: 'her countenance, always engaging', at: [100, 232], to: FACE },
    { phrase: 'gazed on and execrated by thousands', at: [300, 60], to: [296, 102] },
    {
      phrase: 'A tear seemed to dim her eye when she saw us',
      at: [TEAR_AT[0] - 40, TEAR_AT[1] - 40],
      to: TEAR_AT,
    },
  ],
  where: 'Chapter 8',
  passage:
    'The appearance of Justine was calm. She was dressed in mourning; and her countenance, always engaging, was rendered, by the solemnity of her feelings, exquisitely beautiful. Yet she appeared confident in innocence, and did not tremble, although gazed on and execrated by thousands; for all the kindness which her beauty might otherwise have excited, was obliterated in the minds of the spectators by the imagination of the enormity she was supposed to have committed. She was tranquil, yet her tranquillity was evidently constrained; and as her confusion had before been adduced as a proof of her guilt, she worked up her mind to an appearance of courage. When she entered the court, she threw her eyes round it, and quickly discovered where we were seated. A tear seemed to dim her eye when she saw us; but she quickly recovered herself, and a look of sorrowful affection seemed to attest her utter guiltlessness.',
  note: 'Victor knows she is innocent and says nothing. She is condemned on the evidence the Creature planted, and her words after the trial, “I almost began to think that I was the monster that he said I was”, look ahead to the Creature’s own story.',
  artNote:
    'Shelley does not describe her face or hair, only her mourning, so she is drawn plainly, as a young servant of the 1790s in a white cap and a black gown.',
}
