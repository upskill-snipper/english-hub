import { gouge } from '@/components/comics/linocut/carve'
import { PAPER } from '@/components/comics/linocut/palette'

import { Cut, k, place, type Placing } from './people'

/**
 * A figure the Chapter 9 panels need that neither the shared kit
 * (./people.tsx) nor the Chapter 10 figures (./two-legs.tsx) draw: a cow on
 * her feet, for the Spontaneous Demonstration in "Rations and the Republic",
 * where the cows march behind the horses. Drawn in the kit's frame: facing
 * right, feet on y = 0, placed with `at`, `s` and `face`.
 *
 * REDRAWN 27 September 2026. She was first the kit's lying cow (a round
 * blob of a body) lifted on to four thin legs, and at panel size she read as
 * an insect, her two horns as feelers. She is now the cow of "The
 * Rebellion" (the charging cow in ./the-rebellion.tsx), whose long deep
 * body, heavy head and short horns already read as a cow at a smaller scale,
 * walking instead of charging: the same body, the head carried level, the
 * legs in a steady stride.
 *
 * The black cockerel and the bleating sheep of Chapter 9 are the ones in
 * ./two-legs.tsx, so that each looks the same wherever it appears.
 */

const COW_WALKING = {
  /** The body of the Rebellion's cow, unchanged. */
  body: 'M-50 -72C-30 -78 12 -78 32 -74C42 -72 48 -64 48 -54C48 -46 44 -40 38 -38C16 -34 -18 -34 -38 -38C-48 -40 -54 -48 -54 -60C-54 -66 -52 -70 -50 -72Z',
  /** The heavy head carried a little below the line of the back, the muzzle broad. */
  head: 'M30 -74C40 -78 50 -76 56 -70L70 -56C73 -52 72 -46 67 -46L56 -48C48 -50 40 -54 34 -58Z',
  /** Short horns from the poll, curving forward and up: no longer than the ear. */
  horns: 'M52 -73C53 -79 57 -82 62 -82M47 -75C46 -81 48 -85 52 -86',
  ear: 'M46 -70L35 -74L42 -64Z',
  /** A steady walk: the near fore and far hind reaching, the others under her. */
  legs: 'M-42 -40L-47 -3M-32 -38L-28 -3M28 -40L35 -3M38 -40L38 -3',
  tail: 'M-52 -66C-58 -58 -60 -46 -60 -32',
  tuft: 'M-63 -34L-57 -34L-58 -24L-62 -24Z',
}

export function CowStanding({ at, s = 1, face = 1 }: Placing) {
  const w = k(s)
  const c = COW_WALKING
  return (
    <Cut
      parts={[
        { d: c.legs, w: 7.5 },
        { d: c.tail, w: 2.6 },
        { d: c.tuft },
        { d: c.body },
        { d: c.horns, w: 3.2 },
        { d: c.head },
        { d: c.ear },
      ]}
      halo={w(1.8)}
      transform={place(at, s, face)}
    >
      <path
        d={
          // the eye, the flank's fold and the nostril, as the Rebellion's cow
          gouge(51, -65, 56, -63, w(0.9)) +
          gouge(-30, -70, -40, -42, w(0.6), w(-2.4)) +
          gouge(66, -50, 68.6, -48.4, w(0.6))
        }
        fill={PAPER}
      />
    </Cut>
  )
}
