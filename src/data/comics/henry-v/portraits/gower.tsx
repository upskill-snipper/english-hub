import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, deg, gouge, rng } from '@/components/comics/linocut/carve'

import {
  EarCut,
  JACK,
  JackBody,
  jackQuilts,
  JackNeck,
  KETTLE_CAP,
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
  portraitGround,
  PortraitRule,
  PW,
  spline,
  SteelCap,
  steelLight,
} from './common'

/**
 * Captain Gower, the English captain, as his friend Fluellen gives him to the
 * King after the battle:
 *
 *   FLUELLEN: "Gower is a good captain, and is good knowledge and literatured
 *   in the wars." (Act 4, Scene 7)
 *
 * It is all the play says of him, and it is praise of what he knows, not of
 * how he looks. He is the patient one of the pair: he lowers his voice when
 * Fluellen tells him to ("I will speak lower", 4.1), sees through Pistol
 * ("Why, this is an arrant counterfeit rascal", 3.6) and stands up for the
 * Welshman against him (5.1). So he is drawn steady and plain: the eye level,
 * the mouth closed, the brow quiet.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx, 'gower'):
 * every man's head (MAN_HEAD), clean-shaven; the steel cap with its broad brim
 * (the kit's KETTLE, as ./common.tsx carries it to this size), the light on
 * its bowl cut in paper; and the soldier's padded jack with its high neck, as
 * the captains and the soldiers wear it. His dark hair shows only below the
 * cap, at the temple and the nape, and no stroke of it crosses the brim: cut
 * under the cap at panel size, it read as a bandage round his head (the kit,
 * 2 October 2026). Clean-shaven and in the steel cap, he is never taken for
 * Williams, who is bearded, or for Fluellen, in his round cap and hood.
 *
 * The camp by day, the light ahead of him. There is no red in this plate.
 *
 * MARKERS, in the order of the sentence. "Gower is a good captain" comes to
 * the steel cap, the soldier's, from in front at the bowl's own height, above
 * his face; "good knowledge and literatured in the wars" sits on his cheek
 * with no line. No line crosses his face.
 *
 * Seeds: 9701 to 9705 (the figure's marks), 9710 (the ground).
 */

/** Dark hair below the cap: at the temple in front of the ear, and at the nape. */
const HAIR = spline([
  [117, 84, 1],
  [119, 98],
  [117, 110, 1],
  [110, 104],
  [100, 102],
  [92, 107],
  [88, 120],
  [86, 136],
  [82, 150, 1],
  [72, 146],
  [62, 152, 1],
  [53, 136],
  [49, 116],
  [49, 98],
  [53, 86, 1],
])

type Marks = { quilts: string; hair: string; cheek: string; nape: string; steel: string }

const marks = once((): Marks => {
  const r = rng(9701)
  const quilts = jackQuilts(9702)
  let hair = ''
  for (const [x, y, x2, y2] of [
    [111, 90, 113, 106],
    [95, 110, 88, 134],
    [80, 104, 72, 138],
    [64, 100, 58, 134],
  ] as [number, number, number, number][])
    hair += gouge(x, y, x2 + between(r, -1, 1), y2, 0.8, between(r, -1, 1))
  // A lean, weathered cheek: a few fine arcs under the cheekbone.
  let cheek = ''
  for (let rad = 14; rad < 24; rad += 3.6)
    cheek += arcDashes(r, 141, 110, rad, deg(80), deg(124), [7, 14], [2, 5])
  const nape = napeShade(9703, 150, 118, 86, 112)
  const steel = steelLight(9704)
  return { quilts, hair, cheek, nape, steel }
})

/** Gower, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function GowerFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-gow`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-head`}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={`${id}-hair`}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <JackBody quilts={m.quilts} />
      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={id} />
      <g clipPath={`url(#${id}-head)`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.4} />
        <path d={m.cheek} strokeWidth={0.95} />
      </g>
      <JackNeck />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-hair)`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <EarCut {...MAN_EAR} />
      <ManNoseAndMouth />
      {/* the patient one: a quiet brow over a level eye */}
      <ManBrow w={2.8} />
      <ManEye look="open" />
      <SteelCap id={id} light={m.steel} />
    </g>
  )
}

/** A thick ink halo round head, cap and shoulders. */
function GowerKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MAN_HEAD} />
      <path d={KETTLE_CAP} />
      <path d={JACK} />
    </g>
  )
}

const P = placing(42, 22, 0.92)

const ground = once(() =>
  // The English camp by day: the light ahead of him, to the right.
  portraitGround('hv-gower', 9710, (x, y) =>
    clamp(0.12 + ((x - 60) / 260) * 0.82 - (y / PH) * 0.14),
  ),
)

function GowerPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <GowerKnockout />
        <GowerFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const gowerPortrait: LinocutArt = { width: PW, height: PH, Draw: GowerPortrait }

/** The front of the bowl of the cap, and the cheek. */
const CAP_AT = P.to(150, 44)
const CHEEK_AT = P.to(139, 127)

export const gower: Portrait = {
  name: 'Gower',
  art: gowerPortrait,
  alt: 'A linocut portrait of Captain Gower in profile, facing right, by day: a plain, clean-shaven man with a quiet brow, a level eye and a closed mouth, his dark hair showing below his cap at the temple and the nape. He wears a dark steel cap with a broad brim curving down at front and back, the light on its round bowl cut in long white curves, and a padded soldier’s jacket with a high neck, its quilting cut in white. Two numbered red markers point to his steel cap and to his cheek.',
  describedBy: [
    { phrase: 'Gower is a good captain', at: [CAP_AT[0] + 66, CAP_AT[1]], to: CAP_AT },
    { phrase: 'good knowledge and literatured in the wars', at: CHEEK_AT },
  ],
  where: 'Act 4, Scene 7',
  passage: 'Gower is a good captain, and is good knowledge and literatured in the wars.',
  note: 'Gower is the English captain and Fluellen’s friend, the patient listener to his long speeches about the wars of the Romans. He sees through Pistol before Fluellen does, and in Act 5 he takes the Welshman’s side against him.',
  artNote:
    'The play praises what he knows, not how he looks. His steel cap and padded jacket are how the panels draw an English captain of 1415, and he is clean-shaven, as they draw him, so that he is never taken for the bearded Williams.',
}
