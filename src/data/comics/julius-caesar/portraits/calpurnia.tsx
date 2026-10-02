import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  n,
  rng,
  wave,
  ribbon,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  shoulders,
  spline,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanNeckShadow,
  type SP,
} from './common'

/**
 * Calpurnia, Caesar's wife, from the play's one word for her looks and two
 * lines of her own, on the morning of the Ides:
 *
 *   BRUTUS: "Calphurnia's cheek is pale" (Act 1, Scene 2)
 *   CALPHURNIA: "Caesar, I never stood on ceremonies, Yet now they fright
 *   me." (Act 2, Scene 2)
 *   CALPHURNIA: "When beggars die, there are no comets seen; The heavens
 *   themselves blaze forth the death of princes." (Act 2, Scene 2)
 *
 * So: her cheek left pale, the whole face cut in paper with no shadow on it;
 * her eye wide under a lifted brow, afraid; and in the dark sky ahead of her,
 * after a night in which "Nor heaven nor earth have been at peace" (Caesar,
 * 2.2), a comet, the heavens blazing. Its head is the plate's one red, a
 * thing in the sky and nowhere near her face. Nothing of her dream, of the
 * statue or of the blood in it is drawn: it is left to the words.
 *
 * She is drawn as the figure kit draws her (../panels/people.tsx): every
 * woman's head in these portraits (WOMAN_HEAD), and the dress of a Roman wife,
 * the stola, with the palla drawn over her head from the brow and falling
 * behind the neck and over the near shoulder in a few broad folds, its
 * hemmed edge round the face cut in paper (PALLA, PALLA_EDGE), so it reads
 * as heavy cloth and not as hair. A little of her dark hair shows at the brow
 * beneath it. The play describes none of this.
 *
 * She faces left, towards Caesar, whom she is begging to stay at home, so
 * the figure is drawn facing right and flipped.
 *
 * Seeds: 6101 (the figure's marks), 6110 to 6112 (the sky).
 */

/**
 * The palla over her head: from the brow over the crown, down behind the neck,
 * and over the near shoulder, its end hanging down in front of the breast.
 */
const PALLA = spline([
  [166, 62, 1],
  [156, 40],
  [122, 24],
  [82, 30],
  [52, 54],
  [36, 96],
  [30, 144],
  [20, 196],
  [2, 250],
  [-12, 300],
  [-18, 340, 1],
  [186, 340, 1],
  [178, 298],
  [164, 264],
  [144, 244],
  [120, 236],
  [104, 222],
  [101, 196],
  [107, 170],
  [112, 146],
  [115, 118],
  [124, 90],
  [140, 72],
])
/** Its hemmed edge, round the face and down over the shoulder: a band cut in paper. */
const PALLA_EDGE =
  'M166 62C150 66 132 76 124 90C116 106 114 126 112 146C108 166 101 182 101 196' +
  'C100 210 104 222 120 236C140 244 160 262 172 290C176 306 180 322 184 340'

/** Her dark hair at the brow, under the palla. */
const HAIR = spline([
  [164, 62, 1],
  [158, 66],
  [148, 66],
  [138, 70],
  [130, 78, 1],
  [126, 84],
  [134, 70],
  [148, 63],
])

/** The stola over the shoulders, its neck cut round. */
const STOLA = shoulders(0.96, 8)
const NECKLINE = 'M84 222C104 236 132 236 152 222'

type Marks = { palla: string; hair: string; stola: string }

const marks = once((): Marks => {
  const r = rng(6101)
  // The palla's folds: broad and few, as heavy cloth falls. Over the crown
  // they follow the head; behind the neck they hang; over the shoulder they
  // loop in shallow curves; on the end in front they hang straight.
  let palla =
    gouge(150, 44, 64, 70, 2.2, -9) +
    gouge(132, 36, 50, 92, 2, -10) +
    gouge(60, 92, 44, 200, 2.4, 6) +
    gouge(80, 120, 70, 232, 2, 5) +
    gouge(46, 214, 6, 300, 2.6, 4) +
    gouge(70, 238, 30, 336, 2.4, 4)
  for (let i = 0; i < 4; i++) {
    const y = 256 + i * 16
    palla += gouge(40 + i * 4, y, 150 - i * 2, y + 10 + i * 2, 1.8 - i * 0.2, -7 - i)
  }
  palla += gouge(168, 290, 176, 336, 1.6, 1) + gouge(152, 284, 156, 336, 1.4, 1)
  let hair = ''
  for (let i = 0; i < 4; i++)
    hair += gouge(160 - i * 7, 63 + i * 1.6, 150 - i * 7, 67 + i * 2.6, 0.6, 0.6)
  let stola = ''
  for (let i = 0; i < 6; i++) {
    const x = between(r, 90, 220)
    stola += gouge(x, between(r, 262, 284), x + between(r, -8, 8), 336, between(r, 0.9, 1.5), 1)
  }
  return { palla, hair, stola }
})

/** Calpurnia, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function CalpurniaFigure({ uid }: { uid: string }) {
  const m = marks()
  const clip = `${uid}-cp-palla`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={PALLA} />
        </clipPath>
      </defs>
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={`${uid}-cp`} />
      <path d={STOLA} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.stola} fill={PAPER} />
      <path d={NECKLINE} fill="none" stroke={PAPER} strokeWidth={1.6} strokeLinecap="round" />
      <path d={HAIR} fill={INK} />
      <path d={m.hair} fill={PAPER} />
      <path d={PALLA} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${clip})`}>
        <path d={m.palla} fill={PAPER} />
      </g>
      <path d={PALLA_EDGE} fill="none" stroke={PAPER} strokeWidth={4.4} strokeLinecap="round" />
      <path d={PALLA_EDGE} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* nostril, the lips a little apart, the chin */}
        <path d="M169.5 121.5C166 119.5 166 115.5 170 114.5" strokeWidth={1.2} />
        <path d="M163.5 137L157 137.4" strokeWidth={1.5} />
        <path d="M163 139.6L158 139.8" strokeWidth={0.9} />
        <path d="M164.5 143.5C162.5 145 160.5 145.3 158.5 144.7" strokeWidth={0.9} />
        {/* "Yet now they fright me": the brow lifted, the eye wide */}
        <path d="M143 80Q152 75 161.6 79.6" strokeWidth={2} />
        <path d="M145 94Q152.5 87.6 160.6 93" strokeWidth={2.2} />
        <path d="M146.5 99.6Q153 102.6 159.5 99" strokeWidth={1} />
      </g>
      <circle cx={153.4} cy={95.4} r={2.4} fill={INK} />
    </g>
  )
}

/** A thick ink halo round head, palla and shoulders. */
function CalpurniaKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={WOMAN_HEAD} />
      <path d={PALLA} />
      <path d={STOLA} />
    </g>
  )
}

const P = placing(26, 4, 0.98, true)

/** The comet's head, ahead of her in the sky, in the portrait's own coordinates. */
const COMET: Pt = [62, 62]

const sky = once(() => {
  // A storm sky, dark, a little lit round the comet.
  const ground = portraitGround('jc-calpurnia', 6110, (x, y) => {
    const d = Math.hypot(x - COMET[0], y - COMET[1])
    return clamp(0.05 + 0.75 * Math.max(0, 1 - d / 130) ** 1.3 - (y / PH) * 0.05)
  })
  const r = rng(6111)
  // Its tail: long paper strokes streaming back and up from the head.
  let tail = ''
  for (let i = 0; i < 9; i++) {
    const spread = (i - 4) * 2.6
    const len = between(r, 60, 100) * (1 - Math.abs(i - 4) * 0.08)
    tail += gouge(
      COMET[0] + 3,
      COMET[1] - 2 + spread * 0.2,
      COMET[0] + len,
      COMET[1] - len * 0.42 + spread,
      between(r, 0.8, 1.8) * (1 - Math.abs(i - 4) * 0.12),
      between(r, -1, 1),
    )
  }
  // Ragged storm clouds over the top of the sky, cut as wavy paper wisps.
  const r2 = rng(6112)
  let clouds = ''
  for (let i = 0; i < 5; i++) {
    const y = 20 + i * 9 + between(r2, -2, 2)
    const a = between(r2, 120, 200)
    clouds += ribbon(wave(a, a + between(r2, 80, 130), y, 2.6, 70, between(r2, 0, 6)), 2.2, 0.8)
  }
  // Its head blazing: short rays cut round it.
  let blaze = ''
  for (let k = 0; k < 12; k++) {
    const a = (k / 12) * Math.PI * 2 + 0.2
    const r0 = 10
    const r1 = k % 2 ? 15 : 19
    blaze += gouge(
      COMET[0] + Math.cos(a) * r0,
      COMET[1] + Math.sin(a) * r0,
      COMET[0] + Math.cos(a) * r1,
      COMET[1] + Math.sin(a) * r1,
      1.1,
    )
  }
  return { ground, tail, clouds, blaze }
})

function CalpurniaPortrait({ uid }: ArtProps) {
  const s = sky()
  return (
    <>
      <path d={s.ground} fill={PAPER} />
      <path d={s.clouds} fill={PAPER} />
      <path d={s.tail} fill={PAPER} />
      <path d={s.blaze} fill={PAPER} />
      <circle cx={COMET[0]} cy={COMET[1]} r={8.4} fill={INK} />
      <circle cx={COMET[0]} cy={COMET[1]} r={6.4} fill={RED} />
      <g transform={P.transform}>
        <CalpurniaKnockout />
        <CalpurniaFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const calpurniaPortrait: LinocutArt = { width: PW, height: PH, Draw: CalpurniaPortrait }

const CHEEK_AT = P.to(140, 124)
const EYE_AT = P.to(WOMAN_EYE[0], WOMAN_EYE[1])

export const calpurnia: Portrait = {
  name: 'Calpurnia',
  art: calpurniaPortrait,
  alt: 'A linocut portrait of Calpurnia in profile, facing left, at night: a woman with a dark mantle drawn over her head from the brow and down over her shoulder, in broad folds, its hemmed edge round her face cut in white, a little dark hair showing at her brow. Her face is pale, her brow lifted and her eye wide with fear, her lips a little apart. Ahead of her in the dark, stormy sky a comet blazes, its head printed red and its tail streaming away in white. Three numbered red markers point to her pale cheek, her eye and the comet.',
  describedBy: [
    // From below and behind the jaw, so the line never crosses her mouth or chin.
    {
      phrase: 'Calphurnia’s cheek is pale',
      at: [CHEEK_AT[0] + 40, CHEEK_AT[1] + 74],
      to: CHEEK_AT,
    },
    { phrase: 'Yet now they fright me', at: [EYE_AT[0] - 52, EYE_AT[1] + 20], to: EYE_AT },
    {
      phrase: 'The heavens themselves blaze forth the death of princes',
      at: [COMET[0] + 4, COMET[1] + 56],
      to: COMET,
    },
  ],
  where: 'Act 1, Scene 2; Act 2, Scene 2',
  note: 'Calpurnia has never believed in omens, and now they terrify her: the heavens, she says, announce the deaths of princes. She is right, and Caesar is talked out of listening to her.',
  artNote:
    'Her pale cheek is all the play gives of her looks. She wears the palla over her hair, as in the panels. The comet is her image, not a sight in the play; its fire is the print’s one colour.',
}
