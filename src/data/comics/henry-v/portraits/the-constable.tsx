import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arc, between, clamp, deg, gouge, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  Beard,
  beardStrands,
  EarCut,
  HARNESS,
  locks,
  mailRings,
  MAN_EAR,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  napeShade,
  NeckShadow,
  once,
  PH,
  placing,
  POINTED_BEARD_P,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  SPAUDLER,
  SPAUDLER_RIMS,
  SPAUDLER_RIVETS,
  STANDARD,
  STANDARD_EDGE,
  star,
} from './common'

/**
 * The Constable of France, the commander of its army, as the play gives him
 * at the French court and in the French camp on the night before Agincourt:
 *
 *   CONSTABLE, to the Dauphin: "O peace, Prince Dauphin! You are too much
 *   mistaken in this king." (Act 2, Scene 4)
 *   CONSTABLE: "Tut! I have the best armour of the world. Would it were day!"
 *   RAMBURES: "My Lord Constable, the armour that I saw in your tent tonight,
 *   are those stars or suns upon it?"
 *   CONSTABLE: "Stars, my lord." (Act 3, Scene 7)
 *
 * So: the soldier of the French court in his armour, the best in the world by
 * his own account, with stars upon it. The play says nothing of his face.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx,
 * 'constable'): every man's head (MAN_HEAD), bareheaded, his short dark hair
 * cut in paper, with the dark pointed beard the kit gives him to tell him from
 * the King of France and the Dauphin (the Lear kit's CORNWALL_BEARD, as
 * ./common.tsx cuts it at this size, POINTED_BEARD_P). He wears the armour he
 * boasts of, as the panel of his tent shows it on its stand
 * (../panels/the-french-wait-for-morning.tsx): bright plate, printed in paper
 * with ink edges, five-pointed stars cut on it in ink. It is the harness the
 * English portraits wear (HARNESS, the spaudler's lames over the near
 * shoulder and the mail standard at the neck), but polished bright where
 * theirs is dark under the cloth, so the French commander and the English
 * lords are not taken for each other. The French are drawn with the same care
 * as the English: a proud man, never a caricature.
 *
 * Night in the French camp, "Would it were day!": a few stars in the sky
 * behind him, and the first light low ahead. There is no red in this plate.
 *
 * MARKERS. "You are too much mistaken in this king" sits on his cheek with no
 * line: his judgement of Henry, which the play proves right. "I have the best
 * armour of the world" comes to the plates on his shoulder from behind, at
 * their own height; "Stars, my lord" comes to a star on his breastplate from in
 * front, at its own height. No line crosses his face.
 *
 * Seeds: 10301 to 10306 (the figure's marks), 10310 (the ground), 10311 (the
 * sky's stars).
 */

/** Short dark hair, cropped close, over the crown to the nape, round the ear. */
const HAIR = spline([
  [158, 58, 1],
  [146, 63],
  [133, 71],
  [123, 84],
  [118, 98],
  [117, 110, 1],
  [110, 104],
  [100, 101],
  [91, 106],
  [87, 120],
  [85, 138],
  [81, 154, 1],
  [70, 148],
  [60, 158, 1],
  [50, 138],
  [44, 112],
  [45, 86],
  [56, 62],
  [78, 44],
  [110, 33],
  [138, 34],
  [154, 44],
])

/** The stars on the breastplate and on the lames of the spaudler: [x, y, size, turn]. */
const STARS: [number, number, number, number][] = [
  [186, 272, 8.4, 4],
  [172, 304, 8, -6],
  [204, 312, 7.6, 10],
  [150, 330, 7.4, 0],
  [86, 254, 6.4, -8],
  [44, 290, 6, 6],
]
/** The breastplate's ridge, down the middle of the chest. */
const RIDGE = 'M160 244Q182 290 194 340'

type Marks = {
  hair: string
  nape: string
  beard: string
  rings: string
  shade: string
  lameShade: string
}

const marks = once((): Marks => {
  const r = rng(10301)
  const hair = locks(
    10302,
    16,
    (t) => [150 - t * 100, 52 - t * 4],
    (t) => [124 - t * 70, 100 + t * 56],
    [0.8, 1.3],
    -6,
  )
  const nape = napeShade(10303, 150, 118, 80, 112)
  const beard = beardStrands(10304, true)
  const rings = mailRings(rng(10305), { x0: 46, x1: 164, y0: 204, y1: 256 }, 5.6)
  // The round of the bright plate turning away from the light: rows of ink
  // curves along the back of the chest and under it, thickest at the edge.
  let shade = ''
  for (let i = 0; i < 9; i++) {
    const rad = 150 + i * 7
    shade += arc(230, 352, rad, deg(184 + between(r, -1, 1)), deg(212 + i * 1.6))
  }
  for (let i = 0; i < 5; i++) {
    const x = 210 + i * 5.6
    shade += gouge(x, 262 + i * 8, x + 10, 342, 0.7 + i * 0.12, 1)
  }
  // The underside of each lame of the spaudler, in shadow.
  let lameShade = ''
  for (const [y0, y1] of [
    [262, 271],
    [290, 300],
    [306, 316],
  ] as [number, number][])
    for (let y = y0; y < y1; y += 2.6) lameShade += `M18 ${y + 4}Q80 ${y - 4} 138 ${y}`
  return { hair, nape, beard, rings, shade, lameShade }
})

/** The Constable, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function ConstableFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-con`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-head`}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={`${id}-hair`}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={`${id}-plate`}>
          <path d={HARNESS} />
        </clipPath>
        <clipPath id={`${id}-std`}>
          <path d={STANDARD} />
        </clipPath>
        <clipPath id={`${id}-lames`}>
          {SPAUDLER.map((d) => (
            <path key={d} d={d} />
          ))}
        </clipPath>
      </defs>
      {/* "the best armour of the world": the breastplate, bright, its ridge and its round in ink */}
      <path d={HARNESS} fill={PAPER} stroke={INK} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${id}-plate)`}>
        <path d={m.shade} fill={INK} stroke={INK} strokeWidth={1.3} />
      </g>
      <path d={RIDGE} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={id} />
      <g clipPath={`url(#${id}-head)`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.4} />
      </g>
      {/* the mail standard round the neck, dark against the bright plate */}
      <path
        d={STANDARD}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <g clipPath={`url(#${id}-std)`}>
        <path d={m.rings} fill="none" stroke={PAPER} strokeWidth={0.95} />
      </g>
      <path d={STANDARD_EDGE} fill="none" stroke={PAPER} strokeWidth={2} strokeLinecap="round" />
      {/* the spaudler's lames over the near shoulder, bright, their undersides in shadow */}
      {[2, 1, 0].map((k) => (
        <path
          key={k}
          d={SPAUDLER[k]}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
      ))}
      <g clipPath={`url(#${id}-lames)`}>
        <path d={m.lameShade} fill="none" stroke={INK} strokeWidth={1.1} />
      </g>
      <g fill="none" stroke={INK} strokeLinecap="round">
        {SPAUDLER_RIMS.map((d) => (
          <path key={d} d={d} strokeWidth={2.2} />
        ))}
      </g>
      <g fill={INK}>
        {SPAUDLER_RIVETS.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={1.9} />
        ))}
      </g>
      {/* "are those stars or suns upon it?" "Stars, my lord." */}
      <path d={STARS.map(([x, y, s, t]) => star(x, y, s, t)).join('')} fill={INK} />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-hair)`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <EarCut {...MAN_EAR} />
      <ManNoseAndMouth />
      <Beard id={id} d={POINTED_BEARD_P} strands={m.beard} />
      <ManBrow w={3} />
      <ManEye look="open" />
    </g>
  )
}

/** A thick ink halo round head, hair, beard and shoulders. */
function ConstableKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MAN_HEAD} />
      <path d={HAIR} />
      <path d={POINTED_BEARD_P} />
      <path d={HARNESS} />
    </g>
  )
}

const P = placing(36, 0, 0.98)

/** Where the first light is, low ahead of him. */
const DAWN: Pt = [330, 300]

const ground = once(() => {
  // The French camp at night: dark overhead, a little light low ahead of him.
  const cuts = portraitGround('hv-the-constable', 10310, (x, y) => {
    const d = Math.hypot(x - DAWN[0], (y - DAWN[1]) * 1.3)
    return clamp(0.05 + 0.75 * clamp(1 - d / 300) ** 1.4)
  })
  // A few stars over the camp, behind him, where the dark is deepest.
  const r = rng(10311)
  let sky = ''
  for (let i = 0; i < 8; i++) {
    const x = between(r, 18, 96)
    const y = between(r, 18, 170)
    const s = between(r, 2.4, 3.8)
    sky += gouge(x - s, y, x + s, y, s * 0.3) + gouge(x, y - s * 1.2, x, y + s * 1.2, s * 0.3)
  }
  return { cuts, sky }
})

function ConstablePortrait({ uid }: ArtProps) {
  const g = ground()
  return (
    <>
      <path d={g.cuts} fill={PAPER} />
      <path d={g.sky} fill={PAPER} />
      <g transform={P.transform}>
        <ConstableKnockout />
        <ConstableFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const theConstablePortrait: LinocutArt = {
  width: PW,
  height: PH,
  Draw: ConstablePortrait,
}

const CHEEK_AT = P.to(139, 126)
const LAME_AT = P.to(30, 266)
const STAR_AT = P.to(194, 272)

export const theConstable: Portrait = {
  name: 'The Constable',
  art: theConstablePortrait,
  alt: 'A linocut portrait of the Constable of France in profile, facing right, at night: a bareheaded man with short dark hair, a moustache and a dark beard cut to a point below his chin, his eye level under a heavy brow. He wears bright plate armour printed in white with black edges, a collar of dark mail round his neck and curved plates over his shoulder, and black five-pointed stars are cut on his breastplate and his shoulder plates. A few stars shine in the dark sky behind him. Three numbered red markers point to his cheek, the plates on his shoulder and a star on his breastplate.',
  describedBy: [
    { phrase: 'You are too much mistaken in this king', at: CHEEK_AT },
    {
      phrase: 'I have the best armour of the world',
      at: [LAME_AT[0] - 36, LAME_AT[1] - 2],
      to: LAME_AT,
    },
    {
      phrase: 'Stars, my lord',
      at: [STAR_AT[0] + 40, STAR_AT[1] - 4],
      to: [STAR_AT[0] + 8, STAR_AT[1]],
    },
  ],
  where: 'Act 2, Scene 4; Act 3, Scene 7',
  note: 'The Constable commands the French army. At the French court he warns the Dauphin not to underrate Henry, whose wild youth, he says, was a cover for good judgement. On the night before the battle he boasts of his armour and mocks the Dauphin’s boasting behind his back.',
  artNote:
    'The play gives his armour and the stars on it, not his face. His dark pointed beard is how the panels tell him from the French King and the Dauphin.',
}
