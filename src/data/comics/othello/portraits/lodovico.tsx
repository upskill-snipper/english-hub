import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  DOUBLET_W,
  EarCut,
  FLAT_BONNET,
  FLAT_BONNET_BAND,
  GRIP_AT,
  GRIP_DIGITS,
  GRIP_LINES,
  GRIP_PALM,
  Hand,
  handPoint,
  HAT_NAPE,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  manRuff,
  ManBrow,
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
} from './common'

/**
 * Lodovico, from what the play says of him:
 *
 *   "The duke and senators of Venice greet you. [Gives him a packet.]"
 *   (Lodovico, Act 4, Scene 1)
 *   "This Lodovico is a proper man." "A very handsome man." (Desdemona and
 *   Emilia, Act 4, Scene 3)
 *
 * So: a nobleman of Venice, Desdemona's cousin, a handsome man, holding the
 * packet from the Duke and senators that recalls Othello and puts Cassio in
 * his place, its seal the spot colour. He sees Othello strike his wife, and at
 * the end he speaks for Venice; the portrait shows him as he arrives, before
 * either.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): every
 * man's head (MAN_HEAD), lit; a short dark beard, as Cassio's but a little
 * longer at the point (LODOVICO_BEARD); a flat bonnet without a feather
 * (Roderigo's bonnet, in ./common.tsx, as the kit gives it him); the small
 * ruff and a long cloak. His hand is closed round the foot of the packet with
 * its fingers cut apart, as the shared grip in ./common.tsx closes.
 *
 * Seeds: 9901 (the figure's marks), 9910 (the ground).
 */

/** His short dark beard, longer at the point than Cassio's; it never covers his lips. */
const BEARD = spline([
  [121, 146, 1],
  [130, 164],
  [144, 172],
  [156, 168],
  [162.4, 158, 1],
  [168.6, 157.8, 1],
  [173.6, 164],
  [176.4, 177],
  [176, 192],
  [170, 203],
  [160, 196],
  [146, 194],
  [134, 192],
  [125, 182],
  [119.6, 164],
])
const MOUSTACHE = spline([
  [166.8, 137, 1],
  [170.6, 137.8],
  [172.4, 140.4],
  [170.2, 142.4, 1],
  [164.4, 143],
  [160.2, 141.6],
  [161.4, 139],
])

/** The long cloak over his shoulders, its edge falling down the front. */
const CLOAK = spline([
  [-16, 336, 1],
  [-12, 292],
  [4, 256],
  [34, 230],
  [68, 218],
  [102, 222],
  [126, 228, 1],
  [146, 252],
  [160, 290],
  [166, 336, 1],
])
/** The border of the cloak down its front edge, cut in paper. */
const CLOAK_EDGE = ribbon(
  [
    [126, 230],
    [140, 250],
    [152, 280],
    [158, 310],
    [161, 336],
  ],
  7,
  0.1,
  false,
)

// His hand closed round the foot of the packet, before his chest; the packet
// rises upright from it, folded and sealed.
const HAND_AT: Pt = [176, 270]
const HAND_S = 1.2
const inHand = handPoint(HAND_AT, 0, HAND_S)
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) scale(${HAND_S})`
const PX = inHand(...GRIP_AT)[0]
/** The packet: a letter folded and sealed. */
const PACKET = `M${n(PX - 16)} 204L${n(PX + 16)} 200L${n(PX + 18)} 282L${n(PX - 14)} 286Z`
const PACKET_FOLDS = `M${n(PX - 15)} 230L${n(PX + 16.6)} 226M${n(PX - 14.6)} 256L${n(PX + 17.2)} 252`
/** "The duke and senators of Venice greet you": the seal, in the spot colour. */
export const SEAL_AT: Pt = [PX + 1, 218]

const marks = once(() => {
  const r = rng(9901)
  let nape = ''
  for (let i = 0; i < 14; i++) {
    const x = between(r, 48, 86)
    const y = between(r, 96, 164)
    nape += gouge(x, y, x + between(r, -1, 3), y + between(r, 7, 12), between(r, 0.5, 0.8), 0.6)
  }
  let beard = ''
  for (let i = 0; i < 7; i++) {
    const x = 130 + i * 6 + between(r, -1, 1)
    const y = 174 + Math.sin((i / 6) * Math.PI) * 6 + between(r, -1.5, 1.5)
    beard += gouge(x, y, x + between(r, 1, 2.4), y + between(r, 6, 10), 0.55, 0.4)
  }
  // The cloak's folds, falling from the shoulders.
  let cloak = ''
  for (let i = 0; i < 6; i++) {
    const x = between(r, -4, 120)
    cloak += gouge(x, between(r, 250, 270), x + between(r, -8, 4), 336, between(r, 0.9, 1.5), 1)
  }
  return { nape, beard, cloak }
})

/** Lodovico, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function LodovicoFigure({ uid }: { uid: string }) {
  const m = marks()
  const napeClip = `${uid}-lod-nape`
  const beardClip = `${uid}-lod-beard`
  const RUFF = manRuff()
  return (
    <g>
      <defs>
        <clipPath id={napeClip}>
          <path d={HAT_NAPE} />
        </clipPath>
        <clipPath id={beardClip}>
          <path d={BEARD} />
        </clipPath>
      </defs>
      <path d={DOUBLET_W} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.cloak} fill={PAPER} />
      <path d={CLOAK_EDGE} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={`${uid}-lod`} />
      <path d={HAT_NAPE} fill={INK} />
      <g clipPath={`url(#${napeClip})`}>
        <path d={m.nape} fill={PAPER} />
      </g>
      <EarCut {...MAN_EAR} />
      <ManNoseAndMouth />
      <ManBrow w={2.6} />
      <ManEye look="open" />
      {/* his short dark beard, longer at the point */}
      <path d={BEARD} fill={INK} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
      <g clipPath={`url(#${beardClip})`}>
        <path d={m.beard} fill={PAPER} />
      </g>
      <path d={MOUSTACHE} fill={INK} />
      <path
        d={FLAT_BONNET}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={FLAT_BONNET_BAND} fill={PAPER} stroke={INK} strokeWidth={0.9} />
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={1.2} />
      {/* the packet from the Duke and senators, folded and sealed */}
      <path d={PACKET} fill={INK} stroke={INK} strokeWidth={6} strokeLinejoin="round" />
      <path d={PACKET} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
      <path d={PACKET_FOLDS} fill="none" stroke={INK} strokeWidth={1} />
      <circle cx={SEAL_AT[0]} cy={SEAL_AT[1]} r={6.4} fill={RED} stroke={INK} strokeWidth={1} />
      <circle cx={SEAL_AT[0]} cy={SEAL_AT[1]} r={3.4} fill="none" stroke={INK} strokeWidth={0.9} />
      <Hand
        transform={HAND_T}
        palm={GRIP_PALM}
        digits={GRIP_DIGITS}
        lines={GRIP_LINES}
        halo={3.4}
      />
    </g>
  )
}

/** A thick ink halo round bonnet, head, beard and shoulders. */
function LodovicoKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={FLAT_BONNET} />
      <path d={MAN_HEAD} />
      <path d={BEARD} />
      <path d={DOUBLET_W} />
      <path d={CLOAK} />
    </g>
  )
}

const P = placing(42, 10, 0.94)

const ground = once(() =>
  // Before the castle on Cyprus, by day: the light ahead of him, to the right.
  portraitGround('othello-lodovico', 9910, (x, y) =>
    clamp(0.12 + ((x - 80) / 240) * 0.9 - (y / PH) * 0.1),
  ),
)

function LodovicoPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <LodovicoKnockout />
        <LodovicoFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const lodovicoPortrait: LinocutArt = { width: PW, height: PH, Draw: LodovicoPortrait }

const SEAL = P.to(SEAL_AT[0], SEAL_AT[1] + 22)
const CHEEK_AT = P.to(146, 124)
const EYE_AT = P.to(MAN_EYE[0] + 1, MAN_EYE[1])

export const lodovico: Portrait = {
  name: 'Lodovico',
  art: lodovicoPortrait,
  alt: 'A linocut portrait of Lodovico in profile, facing right, head and shoulders: a handsome man with his face lit and pale, his eye open and level, and a short dark beard and moustache, longer at the point of his chin. He wears a flat dark bonnet tilted over his brow with a pale band, a small white ruff, and a long dark cloak with a pale border down its front. In his hand before his chest he holds upright a folded letter, closed with a round seal printed in red. Three numbered red markers point to the seal, his cheek and his eye.',
  describedBy: [
    {
      phrase: 'The duke and senators of Venice greet you.',
      at: [SEAL[0] + 40, SEAL[1] - 26],
      to: SEAL,
    },
    {
      phrase: 'This Lodovico is a proper man.',
      at: [CHEEK_AT[0] - 54, CHEEK_AT[1] + 36],
      to: CHEEK_AT,
    },
    { phrase: 'A very handsome man.', at: [EYE_AT[0] + 40, EYE_AT[1] - 40], to: EYE_AT },
  ],
  where: 'Act 4, Scenes 1 and 3',
  note: 'Lodovico brings the letter from Venice that calls Othello home and gives Cassio his place, and sees Othello strike his wife. At the end it is he who speaks for Venice.',
  artNote:
    'The play says only that he is a handsome nobleman of Venice and Desdemona’s cousin. He is drawn as the panels draw him, with a short dark beard, a flat bonnet and a long cloak; the seal on the letter is the one red in the print.',
}
