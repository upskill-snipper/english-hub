import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, n, rng } from '@/components/comics/linocut/carve'

/**
 * Venice for the Merchant of Venice panels: Antonio's argosies and the
 * house fronts of the city, cut once so the Venice of one panel is the Venice
 * of the next.
 *
 * THE ARGOSIES. "Your mind is tossing on the ocean, / There where your
 * argosies, with portly sail / Like signiors and rich burghers on the flood
 * ... Do overpeer the petty traffickers" (1.1); "Thou know'st that all my
 * fortunes are at sea" (1.1); "he hath an argosy bound to Tripolis, another
 * to the Indies ... a third at Mexico, a fourth for England" (1.3). So an
 * argosy is a great merchant ship with a high stern and full, "portly" sails,
 * and its sails are printed in the spot colour: they are what Antonio's
 * fortunes, and so the bond, rest on. A panel that shows his ships at sea
 * draws them with `Argosy`; a panel on the news of a wreck (3.1) should draw
 * it as news, not as a picture of drowning men.
 */

/** One argosy, broadside on, facing right, its waterline at (0, 0), about 64 long and 70 tall. */
const HULL =
  'M-34 -12L-22 -12L-22 -6L22 -6L30 -12L34 -11C31 -4 26 3 18 5L-24 5C-29 2 -32 -3 -34 -12Z'
/** The high stern castle, at the back (left). */
const CASTLE = 'M-35 -22L-21 -22L-21 -11L-35 -11Z'
/** Masts, yards and the bowsprit, stroked in ink. */
const RIG =
  'M-10 -8V-66M12 -8V-56M-28 -22V-44M30 -10L44 -22' +
  'M-22 -60H2M-24 -38H4M-2 -52H26M-2 -32H26M-34 -40H-22'
/** The "portly" sails, bellied forward: printed in red. */
const SAILS =
  'M-21 -59Q-6 -56 1 -59Q5 -50 0 -41Q-8 -38 -23 -41Q-19 -50 -21 -59Z' +
  'M-23 -37Q-6 -34 3 -37Q8 -26 2 -14Q-8 -12 -25 -14Q-20 -26 -23 -37Z' +
  'M-1 -51Q12 -48 25 -51Q29 -43 25 -35Q12 -32 -2 -35Q2 -43 -1 -51Z' +
  'M-1 -31Q12 -28 25 -31Q30 -22 25 -12Q12 -10 -2 -12Q2 -22 -1 -31Z' +
  'M-27 -43L-21 -43L-27 -24Z'
/** The paper cuts across the sails: their seams and the belly of the cloth. */
const SAIL_CUTS =
  gouge(-18, -50, -3, -50, 0.6, 1) +
  gouge(-19, -26, 0, -26, 0.7, 1.2) +
  gouge(3, -43, 22, -43, 0.6, 1) +
  gouge(3, -22, 22, -22, 0.7, 1.2)

/**
 * An argosy at sea, placed with its waterline at `at` and scaled by `s`. It is
 * cut with a paper edge, so it reads on the dark sea and on a pale sky, and
 * its sails are the one red on the water.
 */
export function Argosy({
  at,
  s = 1,
  flip = false,
}: {
  at: [number, number]
  s?: number
  flip?: boolean
}) {
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`}>
      <g stroke={PAPER} strokeWidth={3.2} strokeLinejoin="round" fill={PAPER}>
        <path d={HULL + CASTLE} />
        <path d={RIG} fill="none" strokeLinecap="round" />
        <path d={SAILS} />
      </g>
      <path d={HULL + CASTLE} fill={INK} />
      <path d={RIG} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
      <path d={SAILS} fill={RED} />
      <path d={SAIL_CUTS} fill={PAPER} />
      {/* the gunwale and the castle's windows, cut in paper */}
      <path d={gouge(-20, -3, 26, -4, 0.8) + 'M-32 -18h3v3h-3zM-27 -18h3v3h-3z'} fill={PAPER} />
    </g>
  )
}

/**
 * Ripples on water, cut in paper on ink between y0 and y1, closer and finer
 * towards the far edge. One seed per panel.
 */
export function ripples(seed: number, x0: number, x1: number, y0: number, y1: number) {
  const r = rng(seed)
  let d = ''
  for (let y = y0 + 2; y < y1; ) {
    const t = (y - y0) / (y1 - y0)
    let x = x0 + between(r, -20, 0)
    while (x < x1) {
      const len = between(r, 10, 34) * (0.6 + t)
      if (r() < 0.7)
        d += gouge(x, y, x + len, y + between(r, -0.4, 0.4), 0.5 + t * 1.3, between(r, -0.6, 0.6))
      x += len + between(r, 6, 22) * (0.5 + t)
    }
    y += 3 + t * 5
  }
  return d
}

/**
 * A round-arched opening from x0 to x1, with its sill at `bottom` and the
 * top of its arch at `top`: a Venetian window or the arch of a portico.
 */
export function archPath(x0: number, x1: number, top: number, bottom: number) {
  const r = (x1 - x0) / 2
  return `M${n(x0)} ${n(bottom)}V${n(top + r)}A${n(r)} ${n(r)} 0 0 1 ${n(x1)} ${n(top + r)}V${n(bottom)}Z`
}
