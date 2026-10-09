import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, type Pt } from '@/components/comics/linocut/carve'

import {
  GOWN,
  GOWN_NECK,
  gownFolds,
  hairFlow,
  handPaths,
  LEVEL_HAIR,
  LEVEL_HAIR_PTS,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  SpecHand,
  spline,
  WOMAN_EAR,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
} from './common'

/**
 * Iras, Cleopatra's other waiting-woman, from the two places the play gives
 * her more than a word:
 *
 *   IRAS: "There’s a palm presages chastity, if nothing else." ... "But how,
 *   but how? give me particulars." SOOTHSAYER: "Your fortunes are alike."
 *   (Act 1, Scene 2)
 *   CLEOPATRA: "Thou an Egyptian puppet shall be shown In Rome as well as I."
 *   IRAS: "The gods forbid!" (Act 5, Scene 2)
 *
 * So: a young woman holding out her open hand, palm up, for the soothsayer to
 * read, as she does in her first scene, her eye on him and her mouth closed.
 * The play says nothing of her looks.
 *
 * She is drawn as the figure kit draws her (../panels/people.tsx: 'iras'):
 * every woman's head (WOMAN_HEAD), her dark hair cut level at the jaw behind
 * (./common.tsx: LEVEL_HAIR, the kit's IRAS_HAIR), invented only to tell her
 * from Charmian and from Cleopatra's long hair, in a plain long gown, and no
 * mantle, which is the queen's; her forearm is bare below a short sleeve. Her
 * hand is held out at the height of her chest, open, palm up, the fingers
 * apart. Nothing of the last scene of the play is drawn: "The gods
 * forbid!" is her horror at being shown in Rome, and the card's note says so.
 * There is no red in this plate but the markers.
 *
 * MARKERS. The soothsayer's words come to her open palm from below, far from
 * her face; her own "The gods forbid!" sits on her cheek with no line, as the
 * pilot's "shrivelled his cheek" sits on Scrooge's.
 *
 * She faces left, towards the soothsayer, so the figure is drawn facing right
 * and flipped.
 *
 * Seeds: 8101 and 8102 (the figure's marks), 8110 (the ground).
 */

/**
 * Her near hand, held out low before her, palm up, as a hand is shown to a
 * reader of palms: seen from the side, the fingers stacked one beyond another
 * and reaching forward, each a little curled at the tip and cut apart from the
 * next, the thumb along the top. In the figure's frame.
 */
const HAND = handPaths({
  wrist: [
    [196, 257],
    [200, 276],
  ],
  knuckles: [
    [220, 259],
    [222.6, 265],
    [223.6, 271],
    [223, 276.6],
  ],
  tips: [
    [243, 252],
    [247, 259.6],
    [247.8, 267.4],
    [245, 275],
  ],
  width: [6.4, 6.6, 6.4, 5.8],
  bow: [1.8, 1.4, 1, 0.5],
  thumb: { root: [202, 257], tip: [221, 245], width: 6.8, bow: -1.6 },
})
/**
 * Her forearm, bare below the gown's short sleeve, rising from below the frame
 * to the wrist: pale against the dark gown, so the gesture reads.
 */
const FOREARM = spline([
  [134, 344, 1],
  [156, 312],
  [178, 282],
  [194, 254, 1],
  [203, 278, 1],
  [186, 304],
  [170, 344, 1],
])

type Marks = { hair: string; folds: string }

const marks = once((): Marks => {
  // Her hair: strands from the crown down to the level edge at the jaw,
  // brighter towards the light ahead of her.
  const hair = hairFlow(
    8101,
    LEVEL_HAIR_PTS,
    20,
    (t) => [150 - t * 70, 40 + t * 12 + Math.sin(t * Math.PI) * 4],
    (t) => [120 - t * 70, 84 + t * 20],
    (t) => [92 - t * 46, 196],
    [1, 1.6],
    (x) => clamp(0.3 + (x - 30) / 110),
  )
  return { hair, folds: gownFolds(8102) }
})

/** Iras, head and shoulders, her palm held out, facing right in the 0..240 by 0..332 frame. */
export function IrasFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-ir-hair`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={LEVEL_HAIR} />
        </clipPath>
      </defs>
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={`${uid}-ir`} />
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.folds} fill={PAPER} />
      <path d={GOWN_NECK} fill="none" stroke={PAPER} strokeWidth={1.8} strokeLinecap="round" />
      {/* her hair, cut level at the jaw */}
      <path
        d={LEVEL_HAIR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={WOMAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={WOMAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
      <WomanFace eye="open" />
      {/* her bare forearm, and her open hand held out, palm up */}
      <path d={FOREARM} fill={INK} stroke={INK} strokeWidth={5} strokeLinejoin="round" />
      <path d={FOREARM} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
      <SpecHand paths={HAND} />
    </g>
  )
}

/** A thick ink halo round head, hair, shoulders and the hand. */
function IrasKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={WOMAN_HEAD} />
      <path d={LEVEL_HAIR} />
      <path d={GOWN} />
      <path d={FOREARM} />
      <path d={HAND.back} />
    </g>
  )
}

const P = placing(16, 0, 0.96, true)

const ground = once(() =>
  // A room of the palace at Alexandria by day, the light ahead of her, to the left.
  portraitGround('ac-iras', 8110, (x, y) =>
    clamp(0.12 + ((PW - x - 40) / 270) * 0.86 - (y / PH) * 0.12),
  ),
)

function IrasPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <IrasKnockout />
        <IrasFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const irasPortrait: LinocutArt = { width: PW, height: PH, Draw: IrasPortrait }

const PALM_AT: Pt = P.to(236, 271)
const CHEEK_AT = P.to(132, 132)

export const iras: Portrait = {
  name: 'Iras',
  art: irasPortrait,
  alt: 'A linocut portrait of Iras in profile, facing left, head and shoulders: a young woman with her eye open and level and her mouth closed, her dark hair cut level at the jaw behind. She wears a plain dark gown, round at the neck, and holds her near hand out low before her, open and palm up, its fingers apart, as if for a fortune-teller to read. Two numbered red markers point to her open palm and sit on her cheek.',
  describedBy: [
    { phrase: 'Your fortunes are alike.', at: [PALM_AT[0] - 10, PALM_AT[1] + 34], to: PALM_AT },
    { phrase: 'The gods forbid!', at: CHEEK_AT },
  ],
  where: 'Act 1, Scene 2; Act 5, Scene 2',
  note: 'Iras says little, but when the soothsayer reads her palm and Charmian’s he tells them their fortunes are alike, and so they prove: the two women stay with their queen to the end. When Cleopatra pictures them both paraded through Rome, Iras answers with horror.',
  artNote:
    'The play does not describe her looks. Her hair cut level at the jaw and her plain gown are how the panels tell her from Charmian and from the queen.',
}
