import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rays, rng } from '@/components/comics/linocut/carve'

import { CROWN, CROWN_BAND_LINE } from '../../the-tempest/portraits/common'
import {
  EarCut,
  HARNESS,
  Jupon,
  locks,
  mailRings,
  napeShade,
  once,
  PH,
  placing,
  plateLight,
  Plates,
  portraitGround,
  PortraitRule,
  PW,
  quilting,
  spline,
  STANDARD,
  WatchFire,
  YOUTH_EAR,
  YOUTH_HEAD,
  YOUTH_JAW,
  YouthEye,
} from './common'

/**
 * King Henry V, as the Chorus shows him on the night before Agincourt,
 * walking through his camp among men who expect to die in the morning:
 *
 *   "For forth he goes and visits all his host, Bids them good morrow with a
 *   modest smile, And calls them brothers, friends, and countrymen. Upon his
 *   royal face there is no note How dread an army hath enrounded him; Nor
 *   doth he dedicate one jot of colour Unto the weary and all-watched night,
 *   But freshly looks, and over-bears attaint With cheerful semblance and
 *   sweet majesty; ... A largess universal like the sun His liberal eye doth
 *   give to everyone" (Act 4, Chorus)
 *
 * So: a young man's face, fresh and untroubled, its eye open and level, the
 * corner of the mouth just lifted in a modest smile, lit from in front by
 * the watch-fires he walks between, in the dark of the camp. It is the
 * nearest the play comes to describing his face. He is young throughout:
 * "the very May-morn of his youth" (Ely, 1.2), "you savour too much of your
 * youth" (the French Ambassador, 1.2).
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): the youth's
 * head (YOUTH_HEAD), clean-shaven, his short dark hair cut in paper, and the
 * King's crown (the Tempest portraits' CROWN, the kit's at this size) printed
 * in paper, so the King is known; dressed for the field, in the kit's harness
 * of 1415: the jupon, the mail standard at the neck, and the plates of the
 * spaudler over the near shoulder, all in ink, their edges cut in paper. In
 * the field the kit sets the crown on his helm; walking the camp at night he
 * is bareheaded under it, so the face the Chorus describes is seen. He
 * carries nothing: no blade is drawn.
 *
 * RED is the watch-fire in the corner ahead of him, "by their watchful fires",
 * drawn large and well away from his face, and nothing else: its light is the
 * ground cut brighter towards it and the rays round it, and it falls on his
 * face.
 *
 * MARKERS, in the order the passage gives them. "a modest smile" comes to his
 * mouth from in front, at its own height, and stops in the air before his
 * lips; "Upon his royal face there is no note" sits on his cheek with no
 * line; "His liberal eye" comes to his eye from in front, at its own height.
 * No line crosses his face.
 *
 * Seeds: 9101 to 9106 (the figure's marks), 9110 (the ground), 9111 (the
 * firelight), 9112 (the stars).
 */

/** Short dark hair, under the crown: from the brow over the crown to the nape, round the ear. */
const HAIR = spline([
  [157, 64, 1],
  [146, 70],
  [134, 80],
  [126, 94],
  [122, 108],
  [121, 118, 1],
  [113, 104],
  [102, 98],
  [91, 103],
  [86, 120],
  [84, 142],
  [79, 162, 1],
  [70, 158],
  [60, 168, 1],
  [48, 146],
  [41, 112],
  [43, 80],
  [57, 52],
  [82, 34],
  [112, 27],
  [140, 32],
  [156, 46],
])

/** "a modest smile": the lips closed, the corner of the mouth just lifted. */
const SMILE = 'M167.6 142.6Q163.6 144.6 159.2 141.4'
/** The crease the smile lifts in the cheek, behind the corner of the mouth. */
const SMILE_CREASE = 'M157.8 139.4Q156 136.2 152.4 135.4'

type Marks = {
  hair: string
  nape: string
  quilts: string
  rings: string
  light: string
}

const marks = once((): Marks => {
  // The hair: locks combed forward and down from the crown, cut in paper
  // through the ink, thicker where the firelight from the front falls.
  const hair =
    locks(
      9101,
      14,
      (t) => [148 - t * 98, 60 - t * 4],
      (t) => [128 - t * 70, 104 + t * 52],
      [0.8, 1.3],
      -6,
    ) +
    locks(
      9102,
      6,
      (t) => [150 - t * 18, 66 + t * 10],
      (t) => [128 - t * 6, 92 + t * 22],
      [1, 1.5],
      -2,
    )
  const nape = napeShade(9103, 150, 118, 80, 112)
  const quilts = quilting(
    9104,
    [118, 136, 154, 172, 190, 206],
    (x) => 236 + Math.abs(x - 150) * 0.24,
  )
  const rings = mailRings(rng(9105), { x0: 46, x1: 164, y0: 204, y1: 256 }, 5.6)
  const light = plateLight(9106, 80, 300, 40, 66)
  return { hair, nape, quilts, rings, light }
})

/** Henry, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function HenryFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-hv5`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-head`}>
          <path d={YOUTH_HEAD} />
        </clipPath>
        <clipPath id={`${id}-hair`}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <Jupon quilts={m.quilts} />

      <path d={YOUTH_HEAD} fill={PAPER} />
      <g clipPath={`url(#${id}-head)`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.4} />
        <path d={YOUTH_JAW} strokeWidth={1.4} />
      </g>
      {/* the mail standard over the foot of the neck, and the spaudler */}
      <Plates id={id} rings={m.rings} light={m.light} />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-hair)`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <EarCut {...YOUTH_EAR} />

      {/* the face: nostril, the fold of the cheek, the smile, the chin */}
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M174.5 126C170.5 123.5 170.6 118.5 175.6 117.5" strokeWidth={1.4} />
        <path d="M163 122Q158 130 159.5 138" strokeWidth={0.9} />
        <path d={SMILE} strokeWidth={1.7} />
        <path d={SMILE_CREASE} strokeWidth={0.9} />
        <path d="M168.5 152.5C166 154 163.5 154 161.5 153" strokeWidth={0.9} />
      </g>
      {/* "But freshly looks": the eye open and level under a steady brow */}
      <YouthEye look="open" brow={2.6} />

      {/* the King's crown, in paper, so the King is known */}
      <path d={CROWN} fill={PAPER} stroke={INK} strokeWidth={1.7} strokeLinejoin="round" />
      <path d={CROWN_BAND_LINE} fill="none" stroke={INK} strokeWidth={1.3} />
    </g>
  )
}

/** A thick ink halo round head, crown and shoulders. */
function HenryKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={YOUTH_HEAD} />
      <path d={HAIR} />
      <path d={CROWN} />
      <path d={HARNESS} />
      <path d={STANDARD} />
    </g>
  )
}

const P = placing(36, -2, 1)

/** Where the watch-fire stands, low in the corner ahead of him. */
const FIRE: [number, number] = [292, 300]

const ground = once(() => {
  // The camp at night: dark behind him, brightening towards the fire ahead.
  const cuts = portraitGround('hv-king-henry-v', 9110, (x, y) => {
    const d = Math.hypot(x - FIRE[0], (y - FIRE[1] + 30) * 1.1)
    return clamp(0.05 + 0.9 * clamp(1 - d / 270) ** 1.6)
  })
  // The firelight, as broken spokes cut outwards from the flames.
  const light = rays(rng(9111), FIRE[0], FIRE[1] - 28, { from: 44, to: 132, every: 6, width: 2.6 })
  // A few stars over the camp, behind him, where the dark is deepest.
  const r = rng(9112)
  let stars = ''
  for (let i = 0; i < 7; i++) {
    const x = between(r, 20, 70)
    const y = between(r, 20, 150)
    const s = between(r, 2.6, 4)
    stars += gouge(x - s, y, x + s, y, s * 0.3) + gouge(x, y - s * 1.2, x, y + s * 1.2, s * 0.3)
  }
  return { cuts, light, stars }
})

function HenryPortrait({ uid }: ArtProps) {
  const g = ground()
  return (
    <>
      <defs>
        <clipPath id={`${uid}-hv5-fire`}>
          <rect x={236} y={150} width={PW - 246} height={PH - 160} />
        </clipPath>
      </defs>
      <path d={g.cuts} fill={PAPER} />
      <path d={g.stars} fill={PAPER} />
      <g clipPath={`url(#${uid}-hv5-fire)`}>
        <path d={g.light} fill={PAPER} />
      </g>
      <g transform={P.transform}>
        <HenryKnockout />
        <HenryFigure uid={uid} />
      </g>
      <WatchFire x={FIRE[0]} y={FIRE[1]} s={0.95} />
      <PortraitRule />
    </>
  )
}

export const kingHenryVPortrait: LinocutArt = { width: PW, height: PH, Draw: HenryPortrait }

const CHEEK_AT = P.to(139, 128)
/** In the air just before his lips. */
const LIP_AT = P.to(177, 143)
const EYE_AT = P.to(158, 99.5)

export const kingHenryV: Portrait = {
  name: 'King Henry V',
  art: kingHenryVPortrait,
  alt: 'A linocut portrait of King Henry V in profile, facing right, at night in his camp before the battle: a young, clean-shaven man with short dark hair, wearing a pale crown with five points. His eye is open and level and the corner of his mouth is lifted in a small smile. He wears armour: a dark padded coat over his chest, a collar of mail round his neck and plates of steel over his shoulder. The dark behind him is scattered with a few stars, and in the corner ahead of him a watch-fire of crossed logs burns with red flames, its light falling on his face. Three numbered red markers point to his smile, his cheek and his eye.',
  describedBy: [
    { phrase: 'a modest smile', at: [LIP_AT[0] + 46, LIP_AT[1] + 6], to: LIP_AT },
    { phrase: 'Upon his royal face there is no note', at: CHEEK_AT },
    {
      phrase: 'His liberal eye doth give to everyone',
      at: [EYE_AT[0] + 66, EYE_AT[1] - 6],
      to: EYE_AT,
    },
  ],
  where: 'Act 4, Chorus',
  passage:
    'For forth he goes and visits all his host, Bids them good morrow with a modest smile, And calls them brothers, friends, and countrymen. Upon his royal face there is no note How dread an army hath enrounded him; Nor doth he dedicate one jot of colour Unto the weary and all-watched night, But freshly looks, and over-bears attaint With cheerful semblance and sweet majesty; That every wretch, pining and pale before, Beholding him, plucks comfort from his looks. A largess universal like the sun His liberal eye doth give to everyone, Thawing cold fear, that mean and gentle all Behold, as may unworthiness define, A little touch of Harry in the night.',
  note: 'This is the Chorus’s picture of the King on the night before Agincourt: a fresh, untroubled face that gives every frightened soldier courage. The next scene tests it, and wooing Katherine in Act 5 Henry describes his own face very differently: “an aspect of iron”.',
  artNote:
    'The Chorus describes how he looks, not the shape of his face. He is drawn young, as the play calls him, with the crown so that the King is known, in the plain armour of 1415.',
}
