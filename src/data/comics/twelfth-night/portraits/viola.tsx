import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { PAPER } from '@/components/comics/linocut/palette'
import { clamp } from '@/components/comics/linocut/carve'

import {
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  TWIN_BUTTONS,
  TWIN_CHEEK,
  TWIN_NAPE_AT,
  TwinFigure,
  TwinKnockout,
} from './common'

/**
 * Viola, as the page Cesario, as Orsino describes her when he sends her to
 * woo Olivia for him, in Act 1, Scene 4:
 *
 *   "Dear lad, believe it; For they shall yet belie thy happy years, That say
 *   thou art a man: Diana's lip Is not more smooth and rubious; thy small
 *   pipe Is as the maiden's organ, shrill and sound, And all is semblative a
 *   woman's part."
 *
 * So: a young woman dressed as a young man, as the text says ("Enter
 * Valentine and Viola in man's attire", the same scene), her face smooth and
 * beardless. Malvolio says the same of the page in the next scene: "Not yet
 * old enough for a man, nor young enough for a boy ... 'Tis with him in
 * standing water, between boy and man." The disguise is hers, chosen to
 * survive alone in a strange country ("Conceal me what I am", Act 1, Scene
 * 2), and the print never mocks it.
 *
 * She is drawn as the figure kit draws Cesario (../panels/people.tsx), from
 * TwinFigure (./common.tsx): her own face, the one she shares with
 * Sebastian; the flat bonnet tilted back with the feather curling from its
 * band, the "ornament" she copies from him ("he went Still in this fashion,
 * colour, ornament, For him I imitate", Act 3, Scene 4); the small ruff, the
 * doublet and the short cloak; and the dark hair curling at her nape, which
 * on her is the end of her long hair gathered up under the bonnet. Her lip,
 * "smooth and rubious", is left to the words: the print keeps its red off a
 * mouth. There is no red in this plate.
 *
 * Seeds: 8101 (the figure and its marks), 8110 (the ground).
 */

/** Her head held level, a little lifted: she has just been given her errand. */
const ROT = -2

const P = placing(64, 40, 0.86)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Orsino's palace: the light ahead of her, to the right, where she is sent.
  ground = portraitGround('twelfth-night-viola', 8110, (x, y) =>
    clamp(0.1 + ((x - 40) / 280) * 0.86 - (y / PH) * 0.12),
  )
  return ground
}

function ViolaPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <TwinKnockout rot={ROT} />
        <TwinFigure uid={uid} seed={8101} rot={ROT} />
      </g>
      <PortraitRule />
    </>
  )
}

export const violaPortrait: LinocutArt = { width: PW, height: PH, Draw: ViolaPortrait }

const DOUBLET_AT = P.to(TWIN_BUTTONS[1][0] + 2, TWIN_BUTTONS[1][1] + 4)
/*
 * Marker lines on a face never cross a mouth, a chin or a beard: a red line
 * there reads as blood at a glance. The line to her cheek comes down from
 * above, through the bonnet and the hair at her temple, and stops on the
 * cheek well behind the mouth.
 */
const CHEEK_AT = onTurnedHead(P, ROT, TWIN_CHEEK[0] - 4, TWIN_CHEEK[1] - 2)
const NAPE_AT = onTurnedHead(P, ROT, TWIN_NAPE_AT[0], TWIN_NAPE_AT[1])

export const viola: Portrait = {
  name: 'Viola',
  art: violaPortrait,
  alt: 'A linocut portrait of Viola disguised as the page Cesario, in profile, facing right: a young woman dressed as a young man, with a smooth, beardless face and a steady, open eye. She wears a dark flat bonnet tilted back on her head, with a pale band and a long dark feather curling back from it over her head, a small white ruff, a dark doublet with a row of pale buttons, and a short dark cloak over her far shoulder. Her dark hair curls at the nape of her neck, the end of her long hair gathered up under the bonnet. Three numbered red markers point to her doublet, her cheek and the hair at her nape.',
  describedBy: [
    { phrase: 'Dear lad', at: [DOUBLET_AT[0] + 50, DOUBLET_AT[1] - 16], to: DOUBLET_AT },
    // On the cheek with no line, as the pilot's "shrivelled his cheek" sits on
    // Scrooge's: from behind the head the line crossed hair and face and read as
    // a cut. (Checked 2 October 2026.)
    { phrase: 'belie thy happy years', at: CHEEK_AT },
    {
      phrase: 'all is semblative a woman’s part',
      at: [NAPE_AT[0] - 46, NAPE_AT[1] + 40],
      to: NAPE_AT,
    },
  ],
  where: 'Act 1, Scene 4',
  passage:
    'Dear lad, believe it; For they shall yet belie thy happy years, That say thou art a man: Diana’s lip Is not more smooth and rubious; thy small pipe Is as the maiden’s organ, shrill and sound, And all is semblative a woman’s part.',
  note: 'Orsino has known his new page for three days and already sees what the audience knows: Cesario’s lip, voice and looks are a woman’s. He gives it as his reason for sending this page to woo Olivia, and the audience hears the dramatic irony.',
  artNote:
    'The play never describes the clothes Viola wears as Cesario, only that she copies her brother’s. Her bonnet with its feather, ruff, doublet and cloak are how the panels draw both twins; the dark hair at her nape is the end of her long hair, gathered up under the bonnet. Her “rubious” (ruby-red) lip is left to the words.',
}
