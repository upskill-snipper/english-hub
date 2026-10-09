import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gougeField, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  H,
  Log,
  NightGround,
  Pavilion,
  SeatedSoldier,
  W,
  WatchFire,
  farCamp,
  nightMarks,
  type NightMarks,
  type P,
} from './agincourt-night'
import { Person } from './people'

/**
 * Act 4, Scene 1: "The king in disguise", the fifteenth moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1521, src/data/full-texts/henry-v.ts), whose setting is "The
 * English camp at Agincourt":
 *
 * - "Lend me thy cloak, Sir Thomas"; "Give me any gage of thine, and I will
 *   wear it in my bonnet". So Henry wears Erpingham's long cloak closed about
 *   him and a soft bonnet, and no crown (the kit's `disguise`): to the
 *   soldiers he is "a gentleman of a company", and nobody knows him.
 * - "Enter three soldiers, John Bates, Alexander Court and Michael Williams."
 *   They are the kit's: Williams in his steel cap with his short dark beard,
 *   Bates in his steel cap and clean-shaven, Court bareheaded.
 * - "Let it be a quarrel between us if you live." "I embrace it." "How shall I
 *   know thee again?" ... "Here's my glove; give me another of thine."
 *   "There." This is the moment drawn: Williams, his brow drawn down, holds
 *   out his glove to the King, and the King holds out his own to Williams,
 *   each by its cuff, the fingers hanging. It is the glove the King has
 *   Exeter fill with crowns in 4.8 (the twentieth panel cuts the glove the
 *   same way). Bates comes between them with an open hand held out low: "Be
 *   friends, you English fools, be friends."
 * - "Brother John Bates, is not that the morning which breaks yonder?" So the
 *   night is ending: the first light lies low along the horizon on the right,
 *   the French camp dark against it, and Court sits on a log by the watch-fire
 *   looking towards the day. (He is cut from the kit's own pieces,
 *   `SeatedSoldier` in ./agincourt-night.tsx, bareheaded as the kit draws
 *   him.) The fire is the spot colour, drawn whole and kept well clear of his
 *   hands: a fire burned down to one small flame shrinks at phone width to a
 *   red speck beside a hand.
 *
 * The quotation is the King's answer to Williams's fear for the souls of men
 * who die in battle, the line the guide quotes for the scene. The argument
 * that leads to the gloves is about death in war; nothing of it is drawn.
 * Nothing is taken from a film or stage production.
 *
 * Seeds: 1501 (the night and the dawn), 1502 (the French camp), 1503 (the
 * first light).
 */

const HORIZON = 210
const FIRE: P = [716, 312]

/**
 * A glove held by its cuff, the fingers hanging down: the glove of the
 * twentieth panel (the-glove-and-the-count-of-the-dead.tsx), without the
 * crowns, centred on its cuff at (0, 0), about 13 across and 27 long.
 */
const GLOVE =
  'M-6 -4L6 -4L5.4 8L7.4 20L5.4 21L4.6 12L4 22L2 22.4L1.8 12L0.6 22.6L-1.4 22.4L-1 12L-2.8 21.6L-4.6 21L-3.6 12L-5.2 8Z' +
  'M5.4 6L10.4 12.4L8.8 14L4.8 9.4Z'
/** Where a man facing right holds a glove out in front of him, in his own frame. */
const GLOVE_AT = 'translate(41 -106)'
/** The arm that holds it out. */
const HOLDING = {
  pts: [
    [4, -128],
    [18, -112],
    [36, -108],
  ] as P[],
  hand: 'grip' as const,
  deg: 0,
}

function Glove() {
  return (
    <g transform={GLOVE_AT}>
      <path d={GLOVE} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
      <path d="M-5.6 2H5.6" stroke={INK} strokeWidth={0.8} />
    </g>
  )
}

type Marks = NightMarks & { french: { tents: string; fires: string }; first: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const m = nightMarks(1501, {
    horizon: HORIZON,
    dawn: 0.95,
    glows: [{ at: [FIRE[0], FIRE[1] - 14], reach: 110, strength: 0.55 }],
    stars: 16,
    // keep stars off the quotation's corner and the men's heads
    clear: (x, y) => (x < 360 && y < 76) || (x > 250 && x < 560 && y > 60),
  })
  const french = farCamp(1502, 660, 880, HORIZON, 24)
  // "the morning which breaks yonder": the first light, cut in long strokes
  // low along the horizon, brightest on the right.
  const first = gougeField(
    rng(1503),
    { x0: 280, x1: W, y0: HORIZON - 74, y1: HORIZON - 1 },
    (x, y) => clamp((x - 280) / 520) * Math.pow(clamp(1 - (HORIZON - y) / 74), 1.3),
    { spacing: 4.6, len: [40, 150], gap: [4, 20], max: 4.8 },
  )
  cached = { ...m, french, first }
  return cached
}

function TheKingInDisguise({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [380, 220], push: 1.03 })}>
      <NightGround m={m} />
      <path d={m.first} fill={PAPER} />

      {/* the French camp, dark against the first light */}
      <path d={m.french.tents} fill={INK} stroke={PAPER} strokeWidth={0.9} />
      <Pavilion at={[742, HORIZON + 2]} s={0.36} rich lit={-1} />
      <Pavilion at={[826, HORIZON + 3]} s={0.42} rich lit={-1} />

      {/* the English tents */}
      <Pavilion at={[74, 240]} s={0.96} />
      <Pavilion at={[196, 226]} s={0.66} />

      {/* Court, on a log by the fire, looking towards the day */}
      <WatchFire at={FIRE} s={1.02} />
      <Log at={[626, 328]} len={58} r={9} />
      <SeatedSoldier at={[624, 328]} s={1.12} seat={18} bow={2} look={-10} bare />

      {/* Bates, coming between them */}
      <Person
        at={[556, 318]}
        scale={1.12}
        flip
        pose={{
          look: 'soldier',
          variant: 0,
          mouth: 'open',
          head: { rot: 4 },
          far: {
            pts: [
              [-3, -128],
              [-6, -104],
              [-3, -80],
            ],
          },
          near: {
            pts: [
              [4, -128],
              [18, -108],
              [36, -102],
            ],
            hand: 'open',
            deg: -6,
            thumb: -1,
            spread: 15,
          },
        }}
      />

      {/* Williams: "Here's my glove; give me another of thine." */}
      <Person
        at={[456, 330]}
        scale={1.3}
        flip
        pose={{
          look: 'williams',
          brow: 'frown',
          far: {
            pts: [
              [-3, -128],
              [-6, -104],
              [-3, -80],
            ],
          },
          near: HOLDING,
        }}
      >
        <Glove />
      </Person>

      {/* the King, in Erpingham's cloak, holding out his own */}
      <Person
        at={[300, 330]}
        scale={1.3}
        pose={{
          look: 'henry',
          disguise: true,
          near: HOLDING,
        }}
      >
        <Glove />
      </Person>
    </g>
  )
}

export const theKingInDisguise: LinocutArt = { width: W, height: H, Draw: TheKingInDisguise }
