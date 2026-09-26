import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { gouge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Alcove, Garden, H, Room, W, Window, type Box } from './belmont'
import { HEAD_WOMAN, PORTIA_HAIR, PORTIA_STRANDS, Person, type Pose } from './people'
import { footShadow } from './venice-canal'

/**
 * Act 3, Scene 2: "Lead, and a letter", the ninth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/the-merchant-of-venice.ts):
 *
 * - "Belmont. A room in Portia's house." It is the casket room of
 *   ./belmont.tsx, cut as the other Belmont panels cut it, with the window
 *   on the gardens on the left and the alcove in the middle, its curtain,
 *   the room's spot colour, drawn right back.
 * - BASSANIO: "Thus ornament is but the guiled shore / To a most dangerous
 *   sea"; "thou meagre lead ... here choose I". "Opening the leaden casket."
 *   "Fair Portia's counterfeit!" So the lead casket, on the right of the
 *   three, stands open, and in it, propped against its lid, is her portrait:
 *   a small framed picture of a lady with fair hair ("Here in her hairs / The
 *   painter plays the spider, and hath woven / A golden mesh"), cut in paper
 *   as Portia's own hair is. The gold and silver caskets stand shut beside it,
 *   the ornament he turned down.
 * - Then the turn. "Enter Lorenzo, Jessica and Salerio." SALERIO: "Signior
 *   Antonio / Commends him to you." "Gives Bassanio a letter." "Bassanio opens
 *   the letter." So on the left Bassanio, turned to Portia, holds the open
 *   letter in both hands, his head bowed over it, reading. Across the room,
 *   on the far side of the caskets, Salerio, in his travelling hat and cloak
 *   (./people.tsx), who has given it to him, still holds out his hand;
 *   Lorenzo, in his flat bonnet, and Jessica, her dark hair loose, have come
 *   in with him and stand behind.
 * - PORTIA: "There are some shrewd contents in yond same paper / That steals
 *   the colour from Bassanio's cheek." "With leave, Bassanio, I am half
 *   yourself, / And I must freely have the half of anything / That this same
 *   paper brings you." So Portia, small and fair-haired, stands facing him,
 *   watching his face, and holds out an open hand towards the paper.
 * - Gratiano and Nerissa are in the room too, but have no part in these
 *   lines, and are left out so the letter can be seen.
 *
 * The quotation is the guide's own line for the moment, the reasoning that
 * brings Bassanio to the lead: the three caskets stand behind him as it
 * says. Nothing is taken from a film or stage production. Seed: 3201 (the
 * wall and the floor).
 */

const WIN: Box = { x0: 46, x1: 146, top: 40, bottom: 196 }
const ALCOVE: Box = { x0: 330, x1: 580, top: 64, bottom: 256 }
const FEET = 324

/** Portia (facing right), watching his face, holding out an open hand to him. */
const PORTIA: Pose = {
  look: 'portia',
  head: { rot: -2 },
  far: {
    pts: [
      [-3, -126],
      [-5, -102],
      [-2, -82],
    ],
  },
  near: {
    pts: [
      [4, -126],
      [18, -104],
      [34, -106],
    ],
    hand: 'open',
    deg: -6,
    thumb: -1,
  },
}

/**
 * Bassanio (flipped to face left), reading: his head bowed over the letter,
 * which he holds open before him in both hands.
 */
const BASSANIO: Pose = {
  look: 'bassanio',
  head: { rot: 16 },
  eye: 'down',
  sword: true,
  cloak: 1,
  far: {
    pts: [
      [-4, -128],
      [12, -104],
      [36, -112],
    ],
    deg: -80,
  },
  near: {
    pts: [
      [5, -128],
      [10, -100],
      [18, -106],
    ],
    deg: -100,
  },
}
/**
 * The letter, in Bassanio's frame: a sheet held open by its lower corners,
 * its lines of writing cut in ink, and the fold across its middle.
 */
const LETTER = 'M15 -140L40 -144L42 -112L17 -108Z'
const LETTER_LINES =
  gouge(19, -134.4, 36.4, -137.2, 0.6) +
  gouge(19.4, -129.4, 37, -132.2, 0.6) +
  gouge(19.8, -124.4, 37.4, -127.2, 0.6) +
  gouge(20.2, -118.4, 34, -120.6, 0.6) +
  gouge(20.6, -113.4, 38, -116.2, 0.6)
const LETTER_FOLD = 'M16 -124.2L41 -128'

/** Salerio (flipped to face left), his hand still held out from giving the letter. */
const SALERIO: Pose = {
  look: 'salerio',
  cloak: 2,
  far: {
    pts: [
      [-4, -128],
      [-8, -100],
      [-5, -76],
    ],
  },
  near: {
    pts: [
      [5, -128],
      [20, -110],
      [36, -116],
    ],
    hand: 'open',
    deg: -12,
    thumb: -1,
  },
}

/** Lorenzo and Jessica (flipped to face left), come in behind him, still. */
const LORENZO: Pose = {
  look: 'lorenzo',
  far: {
    pts: [
      [-4, -128],
      [-8, -100],
      [-5, -76],
    ],
  },
  near: {
    pts: [
      [5, -128],
      [9, -100],
      [7, -76],
    ],
  },
}
const JESSICA: Pose = {
  look: 'jessica',
  far: {
    pts: [
      [-3, -126],
      [-5, -102],
      [-2, -82],
    ],
  },
  near: {
    pts: [
      [4, -126],
      [8, -102],
      [8, -80],
    ],
  },
}

/**
 * Portia's counterfeit, in the lead casket's own frame, propped against its
 * raised lid: a dark frame round a pale picture of her head and shoulders in
 * profile, cut from the kit's own head and fair hair for her (HEAD_WOMAN,
 * PORTIA_HAIR), so the picture is plainly the lady standing by.
 */
const COUNTERFEIT_FRAME = 'M-11 -47H11V-17H-11Z'
const COUNTERFEIT_PICTURE = 'M-8.6 -44.6H8.6V-19.4H-8.6Z'
const COUNTERFEIT_SHOULDERS = 'M-8.6 -19.4C-8 -23.4 -4 -25.6 0.6 -25.6C5 -25.6 8 -23.4 8.6 -19.4Z'
const COUNTERFEIT_HEAD_AT = 'translate(0.6 -34.6) scale(0.36)'

function LeadAndALetter({ uid }: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [470, 180], push: 1.03 })}>
      <Room seed={3201} win={WIN} skip={ALCOVE} />
      <Window uid={uid} win={WIN} outside={<Garden win={WIN} />} />
      <Alcove
        box={ALCOVE}
        open={1}
        openOne="lead"
        inside={
          <>
            <path
              d={COUNTERFEIT_FRAME}
              fill={INK}
              stroke={PAPER}
              strokeWidth={1.2}
              strokeLinejoin="round"
            />
            <path d={COUNTERFEIT_PICTURE} fill={PAPER} />
            <path d={COUNTERFEIT_SHOULDERS} fill={INK} />
            <g transform={COUNTERFEIT_HEAD_AT}>
              <path d={HEAD_WOMAN} fill={INK} />
              <path d={PORTIA_HAIR} fill={PAPER} stroke={INK} strokeWidth={1.6} />
              <path d={PORTIA_STRANDS} fill="none" stroke={INK} strokeWidth={1.4} />
            </g>
          </>
        }
      />
      <path
        d={
          footShadow(164, 30, FEET + 2) +
          footShadow(284, 38, FEET + 2) +
          footShadow(652, 38, FEET + 2) +
          footShadow(740, 34, FEET + 2) +
          footShadow(806, 30, FEET + 2)
        }
        fill={INK}
      />
      <Person pose={JESSICA} at={[806, FEET]} scale={1.2} flip />
      <Person pose={LORENZO} at={[740, FEET]} scale={1.2} flip />
      <Person pose={SALERIO} at={[652, FEET]} scale={1.24} flip />
      <Person pose={PORTIA} at={[164, FEET]} scale={1.3} />
      <Person pose={BASSANIO} at={[284, FEET]} scale={1.24} flip>
        <path d={LETTER} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
        <path d={LETTER_LINES} fill={INK} />
        <path d={LETTER_FOLD} fill="none" stroke={INK} strokeWidth={0.8} />
      </Person>
    </g>
  )
}

export const leadAndALetter: LinocutArt = { width: W, height: H, Draw: LeadAndALetter }
