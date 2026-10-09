import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { timing } from '@/components/comics/linocut/styles'

import {
  H,
  Log,
  Moon,
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
 * Act 4, Chorus: "A little touch of Harry", the fourteenth moment in the
 * guide's timeline: "The two camps at Agincourt, before dawn". Every detail
 * is from the Chorus's speech in the held edition (Project Gutenberg #1521,
 * src/data/full-texts/henry-v.ts):
 *
 * - "Now entertain conjecture of a time When creeping murmur and the poring
 *   dark Fills the wide vessel of the universe"; "the third hour of drowsy
 *   morning"; "the gazing moon". So it is deep night, with the moon high on
 *   the right.
 * - "Fire answers fire, and through their paly flames Each battle sees the
 *   other's umber'd face"; "Proud of their numbers and secure in soul, The
 *   confident and over-lusty French Do the low-rated English play at dice".
 *   So across the field the French camp is many fires and great pavilions,
 *   far off along the horizon under the moon. Their dice are left to the
 *   words: at that distance they could not be seen.
 * - "The poor condemned English, Like sacrifices, by their watchful fires
 *   Sit patiently and inly ruminate The morning's danger; and their gesture
 *   sad, Investing lank-lean cheeks and war-worn coats". So the English sit
 *   by their fire in their soldiers' jacks (the kit's 'soldier'), bowed and
 *   still, before their low, patched tents (./agincourt-night.tsx); a
 *   second fire burns further off, where another watch sits.
 * - "The royal captain of this ruin'd band Walking from watch to watch, from
 *   tent to tent ... Bids them good morrow with a modest smile, And calls them
 *   brothers, friends, and countrymen"; "every wretch, pining and pale before,
 *   Beholding him, plucks comfort from his looks". So the King has come up
 *   behind the nearest man at the fire, smiling down, his open hand on the
 *   man's shoulder; the man across the fire lifts his face to the King, and
 *   the one behind it still sits hunched, his head bowed over his knees. The
 *   men sitting are cut from the kit's own pieces (`SeatedSoldier` in
 *   ./agincourt-night.tsx), because the kit's standing figure cannot sit in
 *   a jack. Henry is in harness with his crown, so that he is known: the
 *   Chorus calls him "royal" twice, and he is not yet in disguise (the next
 *   scene).
 *
 * The Chorus himself, who speaks all this, is not drawn: the guide sets the
 * moment in the camps, and the panel is what he asks the audience to see.
 * The one fire near enough to be flame is the spot colour, big and clear of
 * every hand and face: the hunched man's hands rest on his knees, well back
 * from the flames, because at phone width red beside a hand reads as blood.
 * Nothing is taken from a film or stage production.
 *
 * Seeds: 1401 (the night), 1402 (the French fires), 1403 (the moon).
 */

const HORIZON = 202
const FIRE: P = [368, 304]
/** The second English fire, further off on the left, cut in paper. */
const FAR_FIRE: P = [136, 252]
const MOON: P = [706, 66]

type Marks = NightMarks & { french: { tents: string; fires: string } }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const m = nightMarks(1401, {
    horizon: HORIZON,
    glows: [
      { at: [FIRE[0], FIRE[1] - 34], reach: 220, strength: 0.95 },
      { at: [FAR_FIRE[0], FAR_FIRE[1] - 10], reach: 70, strength: 0.5 },
    ],
    stars: 34,
    // keep stars off the moon, the quotation's corner and the King's head
    clear: (x, y) =>
      Math.hypot(x - MOON[0], y - MOON[1]) < 52 ||
      (x < 360 && y < 76) ||
      (x > 490 && x < 630 && y > 70),
  })
  // "Fire answers fire": the French camp, many fires close together.
  const french = farCamp(1402, 600, 880, HORIZON, 19)
  cached = { ...m, french }
  return cached
}

function ALittleTouchOfHarry({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [450, 220], push: 1.03 })}>
      <NightGround m={m} />
      <Moon at={MOON} rad={22} seed={1403} />

      {/* across the field, the French camp: many fires and great pavilions */}
      <path d={m.french.tents} fill={INK} stroke={PAPER} strokeWidth={0.9} />
      <path d={m.french.fires} fill={PAPER} />
      <Pavilion at={[652, HORIZON + 2]} s={0.34} rich lit={-1} />
      <Pavilion at={[734, HORIZON + 3]} s={0.42} rich lit={-1} />
      <Pavilion at={[818, HORIZON + 2]} s={0.36} rich lit={-1} />

      {/* the English tents, low and patched, and a second watch further off */}
      <Pavilion at={[60, 236]} s={0.92} />
      <Pavilion at={[244, 222]} s={0.66} />
      <Pavilion at={[440, 212]} s={0.48} />
      <path
        d={
          `M${FAR_FIRE[0] - 5} ${FAR_FIRE[1]}Q${FAR_FIRE[0] - 6} ${FAR_FIRE[1] - 7} ${FAR_FIRE[0]} ${FAR_FIRE[1] - 13}` +
          `Q${FAR_FIRE[0] + 6} ${FAR_FIRE[1] - 7} ${FAR_FIRE[0] + 5} ${FAR_FIRE[1]}Z`
        }
        fill={PAPER}
      />
      <SeatedSoldier at={[112, 256]} s={0.44} seat={5} bow={24} hug eye="down" />
      <SeatedSoldier at={[160, 256]} s={0.42} flip seat={5} bow={18} eye="down" beard />

      {/* the watch-fire, and the men round it */}
      <SeatedSoldier at={[450, 282]} s={0.84} flip seat={5} bow={28} look={8} eye="down" beard />
      <WatchFire at={FIRE} s={1.2} />
      <Log at={[254, 326]} len={58} r={9} />
      <SeatedSoldier at={[252, 326]} s={1.16} seat={18} bow={4} look={-18} />
      <Log at={[496, 328]} len={58} r={9} />
      <SeatedSoldier at={[498, 328]} s={1.16} flip seat={18} bow={8} look={-8} bare />

      {/* the King, come to the fire, his hand on the man's shoulder */}
      <Person
        at={[556, 330]}
        scale={1.3}
        flip
        pose={{
          look: 'henry',
          dress: 'armour',
          mouth: 'smile',
          body: { neck: [10, -136] },
          head: { rot: 14 },
          legs: {
            far: [
              [-3, -70],
              [-6, -36],
              [-8, -3],
            ],
            near: [
              [3, -70],
              [12, -37],
              [16, -3],
            ],
          },
          far: {
            pts: [
              [6, -128],
              [4, -104],
              [8, -82],
            ],
          },
          near: {
            pts: [
              [12, -128],
              [26, -104],
              [38, -84],
            ],
            hand: 'open',
            deg: 72,
            thumb: -1,
            spread: 12,
          },
        }}
      />
    </g>
  )
}

export const aLittleTouchOfHarry: LinocutArt = { width: W, height: H, Draw: ALittleTouchOfHarry }
