import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, deg, gouge, rng } from '@/components/comics/linocut/carve'

import {
  BOW_KNOT,
  BOW_TIE,
  COLLAR,
  combedBack,
  EarCut,
  JACKET,
  LAPEL_FAR,
  LAPEL_NEAR,
  MAN_CHEEK,
  MAN_EAR,
  MAN_HAIR,
  MAN_HAIR_PTS,
  MAN_HEAD,
  ManBrow,
  NeckShadow,
  neckShade,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  SHIRT_V,
} from './common'

/**
 * Jay Gatsby, as Nick first sees him close to, at his own party in Chapter
 * III, and nothing else:
 *
 *   "He smiled understandingly—much more than understandingly. It was one of
 *   those rare smiles with a quality of eternal reassurance in it, that you
 *   may come across four or five times in life. ... Precisely at that point
 *   it vanished—and I was looking at an elegant young rough-neck, a year or
 *   two over thirty, whose elaborate formality of speech just missed being
 *   absurd."
 *
 *   "my eyes fell on Gatsby, standing alone on the marble steps and looking
 *   from one group to another with approving eyes. His tanned skin was drawn
 *   attractively tight on his face and his short hair looked as though it
 *   were trimmed every day."
 *
 * So: a man of about thirty in profile, facing right, smiling, the corner of
 * his mouth drawn up into his cheek and the lower lid of his eye lifted with
 * it; the skin drawn tight over the cheekbone and the jaw, cut as a shallow
 * hollow under the bone and a crisp edge to the jaw; short dark hair combed
 * straight back, oiled so that it shines where the light falls, and cut clean
 * over the ear and short at the nape, as if trimmed that morning. The novel
 * does not say what he wears that night, so he is in the plain evening dress
 * of 1922, a black dinner jacket with a white shirt front and a black bow
 * tie. The ground is lit from the right, where his party is. His tan is left
 * to the words: the print has no brown. There is no red in this plate.
 *
 * Seeds: 6101 (the ground), 6102 (the hair), 6103 (the figure's cuts), 6104
 * (the shade down the back of the neck).
 */

const P = placing(22, 20, 1.02)

/** Light from the right, on the front and the top of the head. */
const hairLight = (x: number, y: number) => clamp(0.2 + (x - 60) / 110 - (y - 40) / 260)

const marks = once(() => {
  const ground = portraitGround('gg-gatsby', 6101, (x, y) =>
    clamp(0.1 + ((x - 40) / 280) * 0.9 - Math.max(0, (y - 240) / 260)),
  )
  const hair = combedBack(6102, MAN_HAIR_PTS, 30, [0.7, 2.2], { light: hairLight })
  const r = rng(6103)
  // "drawn attractively tight": the hollow under the cheekbone, shallow bowls
  // of fine line, as the pilot cuts Scrooge's cheek, but fewer and higher.
  let cheek = ''
  for (let rad = 11; rad < 23; rad += 2.9)
    cheek += arcDashes(r, 146 + between(r, -1, 1), 113, rad, deg(64), deg(128), [9, 20], [1.5, 4])
  // The sheen of the satin lapels: close paper cuts down their length.
  let sheen = ''
  for (let i = 0; i < 5; i++) {
    const t = i / 4
    sheen += gouge(107 + t * 12, 254 + t * 6, 119 + t * 14, 330, 0.9 - t * 0.1)
  }
  for (let i = 0; i < 3; i++) sheen += gouge(168 + i * 3, 262, 172 + i * 3, 330, 0.7)
  // Folds of the jacket at the shoulder and the arm.
  const coat =
    gouge(34, 262, 20, 330, 1.8, 2) +
    gouge(62, 252, 56, 330, 1.2, 1.4) +
    gouge(196, 262, 210, 330, 1.6, -2)
  const back = neckShade(6104)
  return { ground, hair, cheek, sheen, coat, back }
})

/** The smile: the mouth drawn up at its corner into the cheek. */
const MOUTH = 'M169.6 148.3Q163.6 150.8 157.2 146'
/** The shadow under the lower lip. */
const LIP_SHADE = 'M167.6 156.2Q164.4 157.6 161.2 156.4'
/** The fold from the nostril down round the smile. */
const FOLD = 'M166 123.5Q156 130.5 155 143'
const NOSTRIL = 'M172.5 128C168.5 125.5 168.5 120 174 119'
/** The eye, its lower lid lifted a little by the smile; no lines round it. */
const EYE_UPPER = 'M146 98.5Q154 94 162.5 98.5'
const EYE_LOWER = 'M147.5 103.2Q154.5 102.4 161 101.6'

function GatsbyFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-gg-gatsby-hair`
  const headClip = `${uid}-gg-gatsby-head`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={MAN_HAIR} />
        </clipPath>
        <clipPath id={headClip}>
          <path d={MAN_HEAD} />
        </clipPath>
      </defs>
      {/* The ink halo that lifts the figure off the lit ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={MAN_HEAD} />
        <path d={MAN_HAIR} />
        <path d={JACKET} />
      </g>
      <path d={JACKET} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <path d={SHIRT_V} fill={PAPER} />
      <path
        d={LAPEL_NEAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        d={LAPEL_FAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={m.sheen} fill={PAPER} />
      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={`${uid}-gg-gatsby`} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.back} strokeWidth={1.5} />
        <path d={m.cheek} strokeWidth={0.95} />
      </g>
      <path
        d={MAN_HAIR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <EarCut outline={MAN_EAR.outline} curl={MAN_EAR.curl} />
      <ManBrow w={2.6} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* "approving eyes": the lower lid lifted a little by the smile */}
        <path d={EYE_UPPER} strokeWidth={2.3} />
        <path d={EYE_LOWER} strokeWidth={1.2} />
        <path d={NOSTRIL} strokeWidth={1.5} />
        <path d={FOLD} strokeWidth={1.2} />
        {/* "one of those rare smiles" */}
        <path d={MOUTH} strokeWidth={2} />
        <path d={LIP_SHADE} strokeWidth={0.9} />
      </g>
      <circle cx={155.3} cy={99.8} r={2.6} fill={INK} />
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={BOW_TIE} fill={INK} stroke={PAPER} strokeWidth={1} strokeLinejoin="round" />
      <path d={BOW_KNOT} fill={INK} stroke={PAPER} strokeWidth={0.8} />
    </g>
  )
}

function GatsbyPortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        <GatsbyFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const jayGatsbyArt: LinocutArt = { width: PW, height: PH, Draw: GatsbyPortrait }

const LIPS = P.to(182, 148)
const CHEEK = P.to(MAN_CHEEK[0], MAN_CHEEK[1] - 4)
const HAIR_BACK = P.to(44, 100)
const LAPEL = P.to(108, 262)

export const jayGatsby: Portrait = {
  name: 'Jay Gatsby',
  art: jayGatsbyArt,
  alt: "A linocut portrait of Jay Gatsby in profile, facing right, drawn from Fitzgerald's description in Chapter III: a man of about thirty, smiling, the corner of his mouth drawn up into his cheek and the lower lid of his eye lifted with it. The skin of his face is drawn tight, with a shallow hollow under the cheekbone and a crisp edge to the jaw. His short dark hair is combed straight back, shining where the light falls on it, and cut clean over the ear and short at the nape. He wears a black dinner jacket with a white shirt front and a black bow tie. The dark ground behind him is cut lighter to the right, where his party is. Four numbered red markers point to his smile, the skin of his face, his short hair and his evening clothes.",
  describedBy: [
    {
      phrase: 'one of those rare smiles with a quality of eternal reassurance in it',
      at: [LIPS[0] + 62, LIPS[1]],
      to: LIPS,
    },
    { phrase: 'His tanned skin was drawn attractively tight on his face', at: CHEEK },
    {
      phrase: 'his short hair looked as though it were trimmed every day',
      at: [HAIR_BACK[0] - 42, HAIR_BACK[1]],
      to: HAIR_BACK,
    },
    { phrase: 'an elegant young rough-neck, a year or two over thirty', at: LAPEL },
  ],
  where: 'Chapter III',
  note: 'Nick has been talking with a stranger for some time when the man says “I’m Gatsby”. Then comes the smile, and the moment it vanishes Nick sees “an elegant young rough-neck”: the legend and the man, one sentence apart. Gatsby watches his own party without drinking, and seems to Nick to grow “more correct” as his guests grow wilder.',
  artNote:
    'The print has no brown, so his tan is left to the words. Chapter III does not say what he wears, so he is drawn in the plain evening dress of 1922: a dinner jacket and a black bow tie.',
}
