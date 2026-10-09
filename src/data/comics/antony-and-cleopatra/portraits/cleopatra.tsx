import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arc,
  between,
  clamp,
  deg,
  gouge,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  GOWN,
  GOWN_NECK,
  gownFolds,
  hairFlow,
  HEAD_CROWN,
  HEAD_CROWN_BAND,
  LONG_HAIR,
  LONG_HAIR_PTS,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  WOMAN_EAR,
  WOMAN_HEAD,
} from './common'

/**
 * Cleopatra, from what the play says of her looks, and from nowhere else:
 *
 *   PHILO: "Those his goodly eyes ... now bend, now turn The office and
 *   devotion of their view Upon a tawny front." (Act 1, Scene 1)
 *   CLEOPATRA: "Nay, hear them, Antony. ... As I am Egypt’s queen, Thou
 *   blushest, Antony" (Act 1, Scene 1)
 *   CLEOPATRA: "Think on me That am with Phœbus’ amorous pinches black, And
 *   wrinkled deep in time?" (Act 1, Scene 5)
 *   ENOBARBUS: "For her own person, It beggared all description" and "Age
 *   cannot wither her, nor custom stale Her infinite variety." (Act 2,
 *   Scene 2)
 *
 * So: a queen, crowned, her head up and her eye open and level; her face
 * dark, as a Roman soldier sees it ("tawny") and as she sees it herself,
 * darkened by the sun ("Phœbus’ amorous pinches black"), and lit by that sun.
 * The play says nothing else of her face, and Enobarbus says outright that
 * her person is beyond describing; the portrait invents nothing else.
 *
 * HOW THE FACE IS CUT. In a linocut the block is ink and light is what the
 * artist cuts away, so a dark face is cut as the print cuts anything dark, and
 * as the Othello portraits cut Othello's (../../othello/portraits/common.tsx:
 * DarkHead), whose method this follows on the woman's head: the face left in
 * ink, its outline lifted off the ground by a paper halo, and the light that
 * falls on it from ahead cut in paper, in contours cut back from the profile
 * and following it, so the brow, the nose, the cheek, the chin and the throat
 * are modelled and never a flat silhouette; broken arcs on the cheekbone; the
 * white of the eye round a dark iris; the brow's ridge; one fine line where
 * the lips part, never the lips themselves; the ear. The head is WOMAN_HEAD,
 * every woman's head in these portraits, cut no differently from Octavia's or
 * Charmian's: nothing in the outline is changed to mark her out. She is drawn
 * with exactly the care and dignity of every other sitter: head up, eye level,
 * mouth closed, in a gown to the throat.
 *
 * She is drawn as the figure kit draws her (../panels/people.tsx): her dark
 * hair long and loose down her back (./common.tsx: LONG_HAIR, the kit's
 * CLEO_HAIR), a plain gown, and the queen's mantle hanging from her shoulders
 * behind her, which her women do not wear. She wears the crown the play gives
 * her ("Bring our crown and all", 5.2): the kit's plain band of points, cut in
 * paper, with nothing on it. No headdress, serpent, painted eye, jewel or bare
 * shoulder from any picture of an Egyptian queen, and nothing from a film or
 * stage production. There is no red in this plate but the markers.
 *
 * Her "wrinkled deep in time" is left to the words: the play's own answer to
 * it is Enobarbus's "Age cannot wither her", and the card's note gives both.
 *
 * MARKERS. Her own "As I am Egypt’s queen" comes to the crown from behind,
 * at the height of the crown, over her hair. The two words for her face sit
 * on it with no line, as the pilot's "shrivelled his cheek" sits on
 * Scrooge's: Philo's "tawny front" on her forehead, her own "Phœbus’ amorous
 * pinches" on her cheek. No line crosses her face.
 *
 * She faces left, so the figure is drawn facing right and flipped.
 *
 * Seeds: 2101 to 2104 (the figure's marks), 2110 (the ground).
 */

/**
 * The front of WOMAN_HEAD, the profile the light falls on, as (y, x) pairs
 * from the top of the brow to the foot of the throat, sampled from the
 * outline itself: the light on the face is cut back from this line.
 */
const PROFILE: Pt[] = [
  [40, 141],
  [44.2, 148.2],
  [49.9, 154],
  [54, 157],
  [58.2, 159.3],
  [62.8, 160.8],
  [67.5, 162],
  [72, 163],
  [76.5, 164],
  [81.1, 164.8],
  [85.4, 165.3],
  [89, 165.5],
  [92, 165.1],
  [94.6, 164.3],
  [97, 163],
  [99.5, 164.3],
  [102.9, 166.1],
  [106.5, 168.1],
  [109.4, 169.9],
  [112.4, 171.9],
  [115.3, 174],
  [117.9, 175.5],
  [120, 176.3],
  [122.3, 176.2],
  [124, 175.1],
  [125, 173.7],
  [126, 171],
  [126.8, 167.5],
  [127, 166.5],
  [129.4, 167.4],
  [132.3, 168.1],
  [134.3, 167.1],
  [136.2, 164.8],
  [137, 163.5],
  [139, 165.6],
  [141, 166.5],
  [143.6, 165.4],
  [146.3, 163.5],
  [147, 163],
  [150.3, 164.7],
  [153.3, 165.9],
  [156, 166.5],
  [159.8, 166.4],
  [163.7, 165.4],
  [166, 164],
  [169, 160.6],
  [171.5, 156.2],
  [173.6, 151.3],
  [174.9, 145.8],
  [176.3, 140.4],
  [178.6, 136.7],
  [181.6, 134],
  [186, 132],
  [192.3, 130.4],
  [200, 129.3],
  [206, 129],
  [213.5, 130.5],
  [222.3, 133.3],
  [230.4, 134.4],
]
function frontAt(y: number): number {
  for (let i = 0; i < PROFILE.length - 1; i++) {
    const [y0, x0] = PROFILE[i]
    const [y1, x1] = PROFILE[i + 1]
    if (y >= y0 && y <= y1) return x0 + ((x1 - x0) * (y - y0)) / (y1 - y0 || 1)
  }
  return PROFILE[PROFILE.length - 1][1]
}

/** No light is cut over the eye, the lips, the nostril or the ear: each is cut on its own. */
function shut(x: number, y: number): boolean {
  const eye = ((x - 153) / 11.5) ** 2 + ((y - 95.4) / 7.4) ** 2 < 1
  const lips = x > 154 && y > 129.5 && y < 149.5
  const nostril = ((x - 168.4) / 5.4) ** 2 + ((y - 118.4) / 6.4) ** 2 < 1
  const ear = ((x - 104) / 12.5) ** 2 + ((y - 125) / 22) ** 2 < 1
  return eye || lips || nostril || ear
}

/**
 * The queen's mantle, hung from the shoulders behind her and falling down her
 * back, fuller below: the kit's QUEEN_MANTLE at the size of a portrait. Behind
 * the gown and the hair; its folds and its edge cut in paper.
 */
const MANTLE = spline([
  [122, 225, 1],
  [96, 223],
  [70, 221],
  [46, 227],
  [20, 243],
  [2, 268],
  [-14, 304],
  [-24, 344, 1],
  [156, 344, 1],
  [146, 304],
  [134, 262],
])
/** Its front edge, falling from the shoulder over the gown, cut in paper. */
const MANTLE_EDGE = 'M121 226C127 244 133 262 139 282C145 302 151 322 156 344'

/** The line where her dark hair meets her dark brow, temple and neck, cut in paper. */
const HAIRLINE =
  'M161 58.6C153 59.6 146 60.6 140 63C132 67 126 74 122 82C118.6 89 115 95 109 99.4' +
  'C102 103.6 95 108 91.6 117C88.6 126 88 138 88 150C88 166 89.4 182 92.6 198'

type Marks = { light: string; cheek: string; hair: string; folds: string; mantle: string }

const marks = once((): Marks => {
  const r = rng(2101)
  // THE LIGHT ON THE FACE, from ahead of her: lines cut back from the profile
  // and following it, as contours follow a form, the first, just inside the
  // edge, the widest and unbroken, where the sun strikes, and each further
  // back thinner and more broken, until the face turns from the light into
  // the ink. They run from the hairline down the brow and the nose to the
  // upper lip, and stop there: below the mouth, lines that followed the
  // profile down the chin would read as a beard, so the chin is modelled
  // with arcs across its round instead (below).
  let light = ''
  const contours: [number, number, number, number][] = [
    // [how far back from the profile, the cut's width, the shortest run, the longest]
    [2.6, 2.3, 60, 60],
    [5.8, 1.9, 9, 16],
    [9.4, 1.5, 6, 11],
    [13.4, 1.15, 4, 8],
    [17.8, 0.9, 3, 6],
  ]
  for (const [back, w, kMin, kMax] of contours) {
    // a run never crosses the eye or the nostril, and never jumps where the
    // profile does (under the nose): a cut that bridged it would lie across
    // the face like a bar
    const runs: Pt[][] = [[]]
    let prev: Pt | null = null
    for (let y = 61 + back * 0.4; y < 129; y += 1.2) {
      const x = frontAt(y) - back
      const ok = !shut(x, y)
      const jump = prev !== null && Math.abs(x - prev[0]) > 1.5
      if (!ok || jump) {
        if (runs[runs.length - 1].length) runs.push([])
      }
      if (ok) runs[runs.length - 1].push([x, y])
      prev = [x, y]
    }
    for (const run of runs) {
      let i = 0
      while (i < run.length - 3) {
        const k = Math.round(between(r, kMin, kMax))
        const part = run.slice(i, i + k + 1)
        // a stub shorter than four steps reads as a scratch, not as light
        if (part.length > 4) light += ribbon(part, w * between(r, 0.85, 1.1), 0.7)
        i += k + Math.round(between(r, 2, 4))
      }
    }
  }
  // The chin: arcs across its round, the light on its front.
  for (const [rad, w] of [
    [5, 1.7],
    [8.4, 1.4],
    [11.8, 1.05],
  ]) {
    light += ribbon(
      Array.from({ length: 9 }, (_, i): Pt => {
        const a = deg(-38 + i * 9.5)
        return [154 + Math.cos(a) * rad, 156 + Math.sin(a) * rad]
      }),
      w,
      0.7,
    )
  }
  // The front of the throat, lit: two long lines down it from under the jaw.
  for (const [back, w] of [
    [3, 1.8],
    [7.4, 1.2],
  ]) {
    const pts: Pt[] = []
    for (let y = 186; y < 226; y += 2) pts.push([frontAt(y) - back, y])
    light += ribbon(pts, w, 0.7)
  }
  // The cheekbone, under the eye: broken arcs following its round.
  let cheek = ''
  for (let rad = 11; rad < 26; rad += 3) {
    let a = deg(30 + between(r, 0, 8))
    while (a < deg(100)) {
      const e = Math.min(a + between(r, 7, 14) / rad, deg(106))
      cheek += arc(140, 100, rad, a, e)
      a = e + between(r, 2, 4) / rad
    }
  }
  // HER HAIR, long and loose, cut in two sweeps of paper strands, brighter
  // towards the light ahead of her: from the hairline back over the side of
  // the head below the crown, and from the back of the head down her back.
  const lit = (x: number) => clamp(0.3 + (x - 20) / 130)
  const hair =
    hairFlow(
      2102,
      LONG_HAIR_PTS,
      14,
      (t) => [156 - t * 40, 64 + t * 38],
      (t) => [104 - t * 30, 66 + t * 40],
      (t) => [52 - t * 6, 92 + t * 70],
      [1.1, 1.7],
      lit,
    ) +
    hairFlow(
      2104,
      LONG_HAIR_PTS,
      24,
      (t) => [46 + t * 46, 100 + t * 70],
      (t) => [34 + t * 58, 220 + t * 10],
      (t) => [8 + t * 92, 344],
      [1, 1.8],
      lit,
    )
  // the mantle's folds, falling from the shoulder in long diagonals, across
  // the run of the gown's folds so the two cloths read apart
  const mantle =
    gouge(118, 240, 136, 340, 1.5, -1.5) +
    gouge(108, 246, 122, 340, 1.3, -1.2) +
    gouge(98, 252, 106, 340, 1.1, -1) +
    gouge(30, 252, -2, 340, 1.7, 2) +
    gouge(12, 262, -14, 340, 1.5, 2)
  return { light, cheek, hair, folds: gownFolds(2103), mantle }
})

/** Cleopatra, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function CleopatraFigure({ uid }: { uid: string }) {
  const m = marks()
  const clip = `${uid}-cl-head`
  const hairClip = `${uid}-cl-hair`
  const mantleClip = `${uid}-cl-mantle`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={WOMAN_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={LONG_HAIR} />
        </clipPath>
        <clipPath id={mantleClip}>
          <path d={MANTLE} />
        </clipPath>
      </defs>
      {/* the gown, and the queen's mantle over its back, hung from the shoulders */}
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.folds} fill={PAPER} />
      <path d={MANTLE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${mantleClip})`}>
        <path d={m.mantle} fill={PAPER} />
      </g>
      <path d={MANTLE_EDGE} fill="none" stroke={PAPER} strokeWidth={2.4} strokeLinecap="round" />
      {/* the paper halo round the head, then the head in ink */}
      <path d={WOMAN_HEAD} fill={PAPER} stroke={PAPER} strokeWidth={3.6} strokeLinejoin="round" />
      <path d={WOMAN_HEAD} fill={INK} />
      <path d={GOWN_NECK} fill="none" stroke={PAPER} strokeWidth={2.2} strokeLinecap="round" />
      {/* the light on the face, cut in paper */}
      <g clipPath={`url(#${clip})`}>
        <path d={m.light} fill={PAPER} />
        <path d={m.cheek} fill="none" stroke={PAPER} strokeWidth={1.1} strokeLinecap="round" />
      </g>
      <g fill="none" stroke={PAPER} strokeLinecap="round" strokeLinejoin="round">
        {/* the ridge of the brow over the eye */}
        <path d="M143.4 84.2Q152.4 80.8 161.6 83.6" strokeWidth={1.6} />
        {/* the wing of the nostril */}
        <path d="M169.6 121.6C166 119.6 166 115.6 170 114.6" strokeWidth={1.25} />
        {/* the parting of the lips: one fine line, never the lips themselves */}
        <path d="M163.2 137.2L157.6 137.8" strokeWidth={0.95} />
        {/* the eyelid's crease, and the lower lid */}
        <path d="M145.2 90.6Q152.6 87 160.4 90.8" strokeWidth={1.1} />
        <path d="M147 100.4Q153 102.6 158.8 99.6" strokeWidth={0.9} />
        {/* the line of the jaw, from below the ear to the chin */}
        <path d="M118 158C126 166 136 171 150 172.6" strokeWidth={1.1} />
        {/* the ear cut in paper lines */}
        <path d={WOMAN_EAR.outline} strokeWidth={1.4} />
        <path d={WOMAN_EAR.curl} strokeWidth={1.3} />
      </g>
      {/* the eye: its white, the dark of it, and the light in it */}
      <path
        d="M146.2 95.4Q152.4 91.4 159.6 93Q161 95.6 159.4 98Q152.6 99.4 146.2 95.4Z"
        fill={PAPER}
      />
      <circle cx={153.6} cy={95.6} r={2.8} fill={INK} />
      <circle cx={154.4} cy={94.8} r={0.75} fill={PAPER} />
      {/* her hair, long and loose down her back, its strands cut in paper */}
      <path
        d={LONG_HAIR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={HAIRLINE} fill="none" stroke={PAPER} strokeWidth={1.7} strokeLinecap="round" />
      {/* the ear over the hair tucked behind it */}
      <path d={WOMAN_EAR.outline} fill={INK} stroke={PAPER} strokeWidth={1.4} />
      <path d={WOMAN_EAR.curl} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinecap="round" />
      {/* the crown, a plain band of points */}
      <path d={HEAD_CROWN} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
      <path d={HEAD_CROWN_BAND} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
    </g>
  )
}

/** A thick ink halo round head, hair, crown, mantle and shoulders. */
function CleopatraKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MANTLE} />
      <path d={GOWN} />
      <path d={WOMAN_HEAD} />
      <path d={LONG_HAIR} />
      <path d={HEAD_CROWN} />
    </g>
  )
}

const P = placing(32, 12, 0.94, true)

const ground = once(() =>
  // A room of the palace at Alexandria by day, the sun ahead of her, to the left.
  portraitGround('ac-cleopatra', 2110, (x, y) =>
    clamp(0.16 + ((PW - x - 40) / 270) * 0.86 - (y / PH) * 0.12),
  ),
)

function CleopatraPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <CleopatraKnockout />
        <CleopatraFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const cleopatraPortrait: LinocutArt = { width: PW, height: PH, Draw: CleopatraPortrait }

const CROWN_AT = P.to(50, 66)
const FRONT_AT = P.to(147, 70)
const CHEEK_AT = P.to(131, 128)

export const cleopatra: Portrait = {
  name: 'Cleopatra',
  art: cleopatraPortrait,
  alt: 'A linocut portrait of Cleopatra in profile, facing left, head and shoulders: a queen with her head held up and her eye open and level, her mouth closed. Her face and throat are printed dark, with the light falling on her brow, her nose, her cheek, her chin and her throat cut in fine pale lines that follow her profile, and the white of her eye cut round a dark iris. Her dark hair falls long and loose down her back, and on it sits a plain pale crown, a band with points. She wears a plain dark gown, high and round at the throat, with a dark mantle hanging behind her shoulders. Three numbered red markers point to her crown, her forehead and her cheek.',
  describedBy: [
    { phrase: 'As I am Egypt’s queen', at: [CROWN_AT[0] + 40, CROWN_AT[1]], to: CROWN_AT },
    { phrase: 'Upon a tawny front', at: FRONT_AT },
    { phrase: 'with Phœbus’ amorous pinches black', at: CHEEK_AT },
  ],
  where: 'Act 1, Scenes 1 and 5',
  note: 'Almost everything the play says of her looks is somebody’s judgement. Philo, a Roman, sneers at the “tawny front” his general gazes on; among her women, Cleopatra calls herself darkened by the sun and “wrinkled deep in time”; and Enobarbus, in Rome, says that “Age cannot wither her” and that her person “beggared all description”.',
  artNote:
    'The print has no brown, so her face is cut as the print cuts anything dark, left in ink with the sunlight cut out of it. The play describes nothing else of her face, her hair or her dress: her hair, gown and mantle are how the panels draw her, and her crown is the one she calls for in the last scene.',
}
