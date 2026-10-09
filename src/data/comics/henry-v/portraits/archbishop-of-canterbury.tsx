import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, deg, gouge, rng } from '@/components/comics/linocut/carve'

import { SKULL_CAP, SKULL_CAP_RIM } from '../panels/people'
import {
  ageLines,
  carry,
  EarCut,
  MAN_EAR,
  MAN_HEAD,
  ManEye,
  ManNoseAndMouth,
  NeckShadow,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  waves,
  whiteBrow,
} from './common'

/**
 * The Archbishop of Canterbury, as the King and the Archbishop himself speak
 * of him in the presence chamber, where he argues Henry's claim to France:
 *
 *   KING HENRY: "My learned lord, we pray you to proceed And justly and
 *   religiously unfold Why the law Salic that they have in France Or should
 *   or should not bar us in our claim." (Act 1, Scene 2)
 *   KING HENRY: "May I with right and conscience make this claim?"
 *   CANTERBURY: "The sin upon my head, dread sovereign!" (Act 1, Scene 2)
 *   CANTERBURY: "In aid whereof we of the spiritualty Will raise your
 *   Highness such a mighty sum As never did the clergy at one time Bring in
 *   to any of your ancestors." (Act 1, Scene 2)
 *
 * So: a learned churchman, who takes the sin of the war upon his own head,
 * and speaks for the clergy, the spiritualty, who will pay for it. The play
 * says nothing of his face.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx,
 * 'canterbury'): a prelate of 1414, clean-shaven, as the clergy were; the
 * black skull cap close on his crown, its rim cut in paper (the kit's
 * SKULL_CAP, carried to this size); his hair white below it at the nape (the
 * kit's NAPE_WHITE) and his face lined, the elder of the two bishops, which
 * the kit invents only to tell him from Ely; a short black cape on his
 * shoulders over the white rochet, and the cross on his breast cut in ink on
 * the white. No mitre: he is in council, not at the altar.
 *
 * Behind him is a tall window of the King's palace, its tracery cut in paper,
 * where the light comes from. There is no red in this plate.
 *
 * He faces left, towards the King, so the figure is drawn facing right and
 * flipped.
 *
 * MARKERS, in the order of the scene. "My learned lord" sits on his cheek
 * with no line; "The sin upon my head" comes to his skull cap from behind, at
 * the cap's own height; "we of the spiritualty" comes to the cross on his
 * breast from in front, at its own height. No line crosses his face.
 *
 * Seeds: 10401 to 10405 (the figure's marks), 10410 (the ground), 10411 (the
 * window).
 */

/** The black skull cap, and its rim, carried to this size. */
const CAP = carry(SKULL_CAP)
const CAP_RIM = carry(SKULL_CAP_RIM)
/**
 * White hair below the cap, from above the ear round the back of the head to
 * the nape: the kit's NAPE_WHITE, brought forward over the ear's top. On a
 * face printed in paper, white hair is only its strands, cut in ink: drawn as
 * a white shape with an ink edge, in the first cut, it read as a flap of
 * cloth over the head.
 */
const WHITE_HAIR = spline([
  [118, 70, 1],
  [123, 84],
  [117, 99],
  [105, 104],
  [93, 107],
  [86, 120],
  [80, 140],
  [72, 160],
  [64, 178, 1],
  [40, 178, 1],
  [36, 140],
  [36, 104],
  [44, 76, 1],
  [80, 66],
])

/** The black cassock's collar, standing round the foot of the neck. */
const COLLAR = spline([
  [62, 214, 1],
  [96, 218],
  [126, 222],
  [146, 222, 1],
  [150, 236, 1],
  [110, 240],
  [62, 236, 1],
])
/** The white rochet over the chest, below the cape, falling to the foot of the block. */
const ROCHET = spline([
  [96, 262, 1],
  [140, 256],
  [178, 262],
  [204, 282],
  [220, 312],
  [228, 346, 1],
  [96, 346, 1],
])
const ROCHET_FOLDS = 'M150 276Q156 308 152 346M176 284Q186 312 186 346M204 300Q212 322 212 346'
/** The short black cape over the shoulders, open a little at the front. */
const CAPE = spline([
  [-10, 346, 1],
  [-6, 300],
  [10, 266],
  [38, 242],
  [70, 230],
  [104, 232],
  [144, 228],
  [176, 240],
  [198, 258],
  [206, 276, 1],
  [178, 272],
  [150, 270],
  [122, 276],
  [98, 290],
  [80, 316],
  [72, 346, 1],
])
/** The cross on his breast, cut in ink on the rochet. */
const CROSS = 'M181 288H189V300H201V308H189V330H181V308H169V300H181Z'

/** The palace window behind him, in the portrait's own frame: a tall lancet. */
const WINDOW = 'M252 214V84Q252 36 284 16Q316 36 316 84V214Z'

type Marks = {
  hair: string
  age: string
  cheek: string
  brow: string
  cape: string
  glass: string
}

const marks = once((): Marks => {
  const r = rng(10401)
  // White hair: paper, cut through with ink strands combed back.
  const hair =
    waves(
      10402,
      22,
      (t) => [120 - t * 76, 72 + t * 6],
      (t) => [100 - t * 52, 104 + t * 76],
      [0.6, 1],
      1.4,
    ) +
    waves(
      10405,
      8,
      (t) => [112 - t * 60, 70 + t * 4],
      (t) => [86 - t * 40, 96 + t * 60],
      [0.5, 0.8],
      2,
    )
  const age = ageLines(10403, 3)
  let cheek = ''
  for (let rad = 14; rad < 26; rad += 3.4)
    cheek += arcDashes(r, 141, 110, rad, deg(66), deg(134), [8, 18], [2, 5])
  // White brows, lifted a little: he is making his case.
  const brow = whiteBrow(10404, 2.4)
  const cape = gouge(30, 262, 14, 330, 1.2, 1) + gouge(58, 250, 44, 330, 1.1, 0.8)
  // The leaded glass of the window: rows of small panes cut in paper.
  const g = rng(10411)
  let glass = ''
  for (let y = 22; y < 212; y += 9)
    for (let x = 254; x < 316; x += 10)
      glass += gouge(x + between(g, 1, 2), y + between(g, 1, 2), x + 8, y + 7, 1.4, 0.4)
  return { hair, age, cheek, brow, cape, glass }
})

/** Canterbury, head and shoulders, facing right in the 0..240 by 0..346 frame. */
export function CanterburyFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-cant`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-head`}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={`${id}-hair`}>
          <path d={WHITE_HAIR} />
        </clipPath>
      </defs>
      {/* the white rochet, the black cape over the shoulders, the cross on the breast */}
      <path d={ROCHET} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={ROCHET_FOLDS} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      <path d={CAPE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.cape} fill={PAPER} />
      <path d={CROSS} fill={INK} />
      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={id} />
      <g clipPath={`url(#${id}-head)`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.age} strokeWidth={LINE.hairline} />
        <path d={m.cheek} strokeWidth={0.95} />
      </g>
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      {/* white hair below the cap, round the back of the head: its strands, in ink */}
      <g clipPath={`url(#${id}-head)`}>
        <g clipPath={`url(#${id}-hair)`}>
          <path d={m.hair} fill={INK} />
        </g>
      </g>
      <EarCut {...MAN_EAR} />
      <ManNoseAndMouth />
      <path d={m.brow} fill="none" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />
      <ManEye look="open" />
      {/* the black skull cap, close on the crown, its rim cut in paper */}
      <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={CAP_RIM} fill={PAPER} />
    </g>
  )
}

/** A thick ink halo round head, cap, hair and shoulders. */
function CanterburyKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MAN_HEAD} />
      <path d={CAP} />
      <path d={CAPE} />
      <path d={ROCHET} />
    </g>
  )
}

const P = placing(64, 4, 0.94, true)

const ground = once(() =>
  // The presence chamber, lit from the window behind him, to the right.
  portraitGround('hv-archbishop-of-canterbury', 10410, (x, y) =>
    clamp(0.08 + ((x - 60) / 280) * 0.5 - (y / PH) * 0.1),
  ),
)

function CanterburyPortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <defs>
        <clipPath id={`${uid}-cant-win`}>
          <path d={WINDOW} />
        </clipPath>
      </defs>
      <path d={ground()} fill={PAPER} />
      {/* the tall window behind him, its leaded glass and its mullion */}
      <path d={WINDOW} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} strokeLinejoin="round" />
      <g clipPath={`url(#${uid}-cant-win)`}>
        <path d={m.glass} fill={PAPER} />
      </g>
      <path d="M284 18V214M252 120H316" fill="none" stroke={INK} strokeWidth={5} />
      <path d="M284 18V214M252 120H316" fill="none" stroke={PAPER} strokeWidth={1.2} />
      <g transform={P.transform}>
        <CanterburyKnockout />
        <CanterburyFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const archbishopOfCanterburyPortrait: LinocutArt = {
  width: PW,
  height: PH,
  Draw: CanterburyPortrait,
}

const CHEEK_AT = P.to(139, 127)
const CAP_AT = P.to(56, 66)
const CROSS_AT = P.to(201, 304)

export const archbishopOfCanterbury: Portrait = {
  name: 'Archbishop of Canterbury',
  art: archbishopOfCanterburyPortrait,
  alt: 'A linocut portrait of the Archbishop of Canterbury in profile, facing left, before a tall arched palace window of leaded glass: an old, clean-shaven man with a lined face and white brows, his white hair showing below a black skull cap that sits close on his crown. He wears a short black cape over his shoulders above a white linen rochet, with a black cross on his breast. Three numbered red markers point to his cheek, his skull cap and the cross.',
  describedBy: [
    { phrase: 'My learned lord', at: CHEEK_AT },
    { phrase: 'The sin upon my head', at: [CAP_AT[0] + 22, CAP_AT[1] - 2], to: CAP_AT },
    { phrase: 'we of the spiritualty', at: [CROSS_AT[0] - 40, CROSS_AT[1] - 2], to: CROSS_AT },
  ],
  where: 'Act 1, Scene 2',
  note: 'Canterbury argues at length that the Salic law does not bar Henry’s claim to France, and offers the Church’s money for the war. The audience has already heard him tell the Bishop of Ely, in Act 1, Scene 1, of a bill that would strip the Church of its lands, “the better half of our possession”, and of the sum he has offered the King.',
  artNote:
    'The play does not describe him. His skull cap, white rochet and cross are how the panels draw a prelate of 1414 in council; his white hair and lined face are invented only to tell him from the younger Bishop of Ely.',
}
