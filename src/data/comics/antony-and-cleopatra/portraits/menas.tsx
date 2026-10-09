import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  CAP_BRIM,
  CAP_FOLD,
  CAP_NAPE,
  EarCut,
  FELT_CAP,
  handPaths,
  MAN_EAR,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  MOUSTACHE,
  napeShade,
  NeckShadow,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  SHORT_BEARD,
  shortBeardCuts,
  SpecHand,
  spline,
  Tunic,
  TUNIC,
} from './common'

/**
 * Menas, one of the "famous pirates" (Act 1, Scene 4) who serve Pompey, from
 * his meeting with Enobarbus after the treaty and his own words on the galley:
 *
 *   ENOBARBUS: "But give me your hand, Menas. If our eyes had authority, here
 *   they might take two thieves kissing." MENAS: "All men’s faces are true,
 *   whatsome’er their hands are." (Act 2, Scene 6)
 *   MENAS, to Pompey: "I have ever held my cap off to thy fortunes." (Act 2,
 *   Scene 7)
 *
 * So: a seaman, his hand held out to take Enobarbus's, the fingers straight
 * and apart and the thumb up, as a hand is offered to be shaken; his face set
 * and steady, a face he says is true whatever the hands are; and the cap he
 * says he has always taken off to Pompey's fortunes. Nothing of his offer to
 * Pompey on the galley is drawn or pointed at, and no marker names him a
 * thief or a pirate.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx: 'menas'):
 * every man's head (MAN_HEAD) with a short dark beard (./common.tsx:
 * SHORT_BEARD, the kit's HEAD_CASCA), which with the cap tells him from
 * Enobarbus; the felt cap of a working man (FELT_CAP, the kit's CAP), soft and
 * rising to a rounded point; and a plain tunic, his forearm bare. The play
 * describes none of it. There is no red in this plate but the markers.
 *
 * MARKERS. The cap's comes to it from behind, at its own height, over the back
 * of the head; "All men’s faces are true" sits on his cheek, above the beard,
 * with no line, as the pilot's "shrivelled his cheek" sits on Scrooge's; the
 * hand's comes to it from below, far from the face. No line crosses his face.
 *
 * Seeds: 11101 to 11103 (the figure's marks), 11105 (the tunic), 11110 (the
 * ground).
 */

/**
 * His near hand, held out before him to be shaken: seen from the side, the
 * back of the hand towards us, the fingers straight and reaching forward, cut
 * apart, and the thumb up.
 */
const HAND = handPaths({
  wrist: [
    [190, 262],
    [193, 281],
  ],
  knuckles: [
    [212, 262],
    [213.6, 267.4],
    [214, 272.8],
    [213.4, 278],
  ],
  tips: [
    [235, 264],
    [236.4, 270],
    [236, 275.8],
    [233.4, 281],
  ],
  width: [6.2, 6.4, 6.2, 5.6],
  bow: [-0.6, -0.4, -0.2, 0],
  thumb: { root: [196, 262], tip: [214, 250], width: 6.8, bow: -1.4 },
})
/** His forearm, bare below the short sleeve of his tunic, from below the frame to the wrist. */
const FOREARM = spline([
  [130, 344, 1],
  [152, 312],
  [174, 284],
  [188, 260, 1],
  [196, 282, 1],
  [180, 306],
  [166, 344, 1],
])

type Marks = { nape: string; beard: string; cap: string }

const marks = once((): Marks => {
  const nape = napeShade(11101, 150, 118, 66, 120)
  // The felt of the cap: a few soft cuts following its round, brighter
  // towards the light ahead of him.
  const r = rng(11102)
  let cap = ''
  for (let i = 0; i < 9; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 9
    const x = 52 + t * 96
    const y0 = 80 - t * 12 - Math.sin(t * Math.PI) * 6
    const y1 = 12 + Math.abs(t - 0.45) * 50
    cap += gouge(
      x,
      y0,
      x + (t - 0.5) * 18,
      y1,
      between(r, 0.6, 0.9) * (0.6 + t * 0.6),
      between(r, -2, -0.5),
    )
  }
  return { nape, beard: shortBeardCuts(11103), cap }
})

/** Menas, head and shoulders, his hand held out, facing right in the 0..240 by 0..332 frame. */
export function MenasFigure({ uid }: { uid: string }) {
  const m = marks()
  const clip = `${uid}-me-head`
  const beardClip = `${uid}-me-beard`
  const capClip = `${uid}-me-cap`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={beardClip}>
          <path d={SHORT_BEARD} />
          <path d={MOUSTACHE} />
        </clipPath>
        <clipPath id={capClip}>
          <path d={FELT_CAP} />
        </clipPath>
      </defs>
      <Tunic seed={11105} />
      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={`${uid}-me`} />
      <g clipPath={`url(#${clip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.5} />
      </g>
      {/* the dark hair below the cap, and the felt cap, its brim and a fold cut in paper */}
      <path
        d={CAP_NAPE}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <EarCut {...MAN_EAR} />
      <path
        d={FELT_CAP}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <g clipPath={`url(#${capClip})`}>
        <path d={m.cap} fill={PAPER} />
        <path d={CAP_FOLD} fill="none" stroke={PAPER} strokeWidth={1.4} strokeLinecap="round" />
      </g>
      <path d={CAP_BRIM} fill="none" stroke={PAPER} strokeWidth={3.2} strokeLinecap="round" />
      <ManNoseAndMouth />
      {/* the short dark beard and the moustache, their strands cut in paper */}
      <path d={SHORT_BEARD} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
      <path d={MOUSTACHE} fill={INK} stroke={PAPER} strokeWidth={0.9} strokeLinejoin="round" />
      <g clipPath={`url(#${beardClip})`}>
        <path d={m.beard} fill={PAPER} />
      </g>
      <ManBrow w={3} />
      <ManEye look="open" />
      {/* his bare forearm, and his hand held out to be shaken */}
      <path d={FOREARM} fill={INK} stroke={INK} strokeWidth={5} strokeLinejoin="round" />
      <path d={FOREARM} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
      <SpecHand paths={HAND} />
    </g>
  )
}

/** A thick ink halo round head, cap, beard, shoulders and the hand. */
function MenasKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={TUNIC} />
      <path d={MAN_HEAD} />
      <path d={FELT_CAP} />
      <path d={SHORT_BEARD} />
      <path d={FOREARM} />
      <path d={HAND.back} />
    </g>
  )
}

const P = placing(28, 16, 0.92)

const ground = once(() =>
  // The deck of Pompey's galley by the light of the feast, ahead of him.
  portraitGround('ac-menas', 11110, (x, y) =>
    clamp(0.08 + ((x - 60) / 270) * 0.78 - (y / PH) * 0.1),
  ),
)

function MenasPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <MenasKnockout />
        <MenasFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const menasPortrait: LinocutArt = { width: PW, height: PH, Draw: MenasPortrait }

const CAP_AT: Pt = P.to(40, 70)
const FACE_AT = P.to(146, 122)
const HAND_AT = P.to(224, 279)

export const menas: Portrait = {
  name: 'Menas',
  art: menasPortrait,
  alt: 'A linocut portrait of Menas in profile, facing right, head and shoulders: a seaman with a short dark beard along his jaw and a moustache, a steady, level eye and his mouth set, wearing a soft dark felt cap that rises to a rounded point, its rolled brim cut in white, with dark hair showing beneath it at the back. He wears a plain dark tunic, and his bare near arm is held out before him with the hand open to be shaken, the fingers straight and apart and the thumb up. Three numbered red markers point to his cap, sit on his cheek and point to his hand.',
  describedBy: [
    {
      phrase: 'I have ever held my cap off to thy fortunes.',
      at: [CAP_AT[0] - 18, CAP_AT[1] - 2],
      to: CAP_AT,
    },
    { phrase: 'All men’s faces are true', at: FACE_AT },
    { phrase: 'give me your hand, Menas', at: [HAND_AT[0] - 4, HAND_AT[1] + 26], to: HAND_AT },
  ],
  where: 'Act 2, Scenes 6 and 7',
  note: 'Menas shakes hands with Enobarbus, two old enemies joking that they are both thieves, and claims that faces are honest whatever hands do. On the galley he offers Pompey the whole world by a crime; when Pompey refuses, Menas resolves to leave him.',
  artNote:
    'The play does not describe his looks. His beard, his felt cap and his plain tunic are how the panels draw him, and tell him from Enobarbus.',
}
