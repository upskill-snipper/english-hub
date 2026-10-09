import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { gouge, n } from '@/components/comics/linocut/carve'

/**
 * THE FLEETS: one war galley, cut once and used for every ship in the panels
 * of moments 11 to 13 ("By sea, by sea", "Actium" and "Shame, and a kiss"),
 * and of "All is lost", so that the ships a student sees at anchor off the
 * camp are the ships that fight, fly and come home.
 *
 * WHAT THE PLAY SAYS, and so what is drawn (the held edition,
 * src/data/full-texts/antony-and-cleopatra.ts):
 * - "Their ships are yare, yours heavy"; "Your ships are not well manned";
 *   "Trust not to rotten planks" (3.7). The play describes no ship beyond
 *   that, so each is a plain galley of the period: a long low hull with a ram
 *   at the waterline and the stern curling up over the deck, a bank of oars,
 *   and one mast with a square sail on its yard. Nothing is taken from a film
 *   or stage production.
 * - "I have sixty sails, Caesar none better" (3.7); "Th' Antoniad, the
 *   Egyptian admiral, With all their sixty, fly and turn the rudder" (3.10);
 *   "Forgive my fearful sails!" (3.11). Cleopatra's sails are what these
 *   scenes turn on, so hers, and only hers, are printed in the spot colour.
 *   The play gives them no colour: the red marks them as hers, so they can be
 *   followed from the camp to the battle and home to the harbour. Every other
 *   sail is paper (Antony's) or ink (Caesar's).
 *
 * A RED SAIL IS NEVER SMALL. At phone width a speck of red on the sea reads
 * as blood, so a red sail is drawn at a scale of 0.5 or more (about 34 units
 * across and 26 high, still a sail on a mast at 330 pixels). A ship further
 * off than that is not drawn with a red sail.
 *
 * The frame: facing right, the waterline at y 0 and the middle of the hull at
 * x 0, the stern at -68 and the ram's point at 72, the masthead at -104.
 * Place a ship with `at`, `s` and `facing`.
 */

export type P = [number, number]

/** The hull: a long low galley, the ram forward at the waterline, the stern curling up and over. */
export const HULL =
  'M-56 -13L44 -13C50 -14 54 -19 55 -25L60 -24C59 -17 58 -11 59 -7L71 -5L72 -1L59 1C40 6 -36 6 -52 2C-60 -1 -65 -9 -67 -19C-69 -30 -66 -39 -59 -43C-54 -45 -49 -41 -52 -37C-56 -34 -59 -28 -58 -21Z'
/** The wale and the rail along the hull, cut in paper. */
export const HULL_CUTS = gouge(-52, -6.4, 57, -6, 1.3) + gouge(-50, -10.4, 44, -10.4, 0.7)
/** A sail set on its yard and full of wind, bellied forward. */
export const SAIL =
  'M-36 -95Q-2 -99 32 -95C36 -76 35 -58 31 -44Q-2 -38 -33 -44C-37 -58 -38 -76 -36 -95Z'
/** The seams down a set sail. */
export const SAIL_SEAMS = 'M-14 -97C-13 -80 -13 -60 -14 -42M10 -97C11 -80 11 -60 10 -42'
/** The yard. */
export const YARD = 'M-38 -97Q-2 -101 34 -97'
/** The mast, and the stays from its head to the stem and the stern. */
export const MAST = 'M-2 -12V-104'
export const STAYS = 'M-2 -103L56 -25M-2 -103L-60 -41'

/** The oars along her side, slanting back as they pull. Each about 17 long. */
export function oars(count = 10): string {
  let d = ''
  for (let i = 0; i < count; i++) {
    const x = -42 + i * (88 / (count - 1))
    d += `M${n(x)} -5L${n(x - 9)} 10`
  }
  return d
}
const OARS = oars()

export type Sail = 'set' | 'furled' | 'none'

export interface ShipSpec {
  /** Where the middle of the hull meets the water. */
  at: P
  /** 1 is a hull 140 long. A red sail is never drawn below 0.5. */
  s: number
  facing?: 1 | -1
  sail?: Sail
  /** The colour of a set sail: Cleopatra's are red, Antony's paper, Caesar's ink. */
  colour?: 'red' | 'paper' | 'ink'
  /** Heeled over, or a mast struck askew in the fight, in degrees. */
  tilt?: number
  /** Draw the oars (in ink on a pale sea). */
  rowing?: boolean
  /**
   * With `false`, no mast, stays, yard or sail: a galley cleared for the
   * fight, as galleys were, rowed and ramming. Added for "Actium", where a
   * crowd of masted hulls read as a regatta and not a battle.
   */
  mast?: boolean
  /** A wake of ink cuts streaming back from the stern: a ship making way, in flight. */
  wake?: boolean
}

/** The wake behind the stern, in the hull's frame. */
const WAKE = 'M-66 1.6Q-92 -1.6 -122 -2.4M-62 4.4Q-90 7.6 -116 12.6M-72 -0.6Q-96 -5.4 -112 -9.4'

/**
 * One galley. Built as the figures are: a paper edge round the hull and the
 * sail so that ships crowded together stay apart, then the hull in ink with
 * its wale cut in paper, the mast and stays, and the sail.
 */
export function Ship({
  at,
  s,
  facing = 1,
  sail = 'set',
  colour = 'paper',
  tilt = 0,
  rowing = true,
  mast = true,
  wake = false,
}: ShipSpec) {
  if (colour === 'red' && s < 0.5)
    throw new Error('A red sail below scale 0.5 shrinks to a speck that reads as blood')
  const t = `translate(${n(at[0])} ${n(at[1])}) rotate(${tilt}) scale(${n(facing * s)} ${n(s)})`
  // Line weights are given in the drawing's units, so divide by the scale to
  // keep a stay as fine as a hairline and no finer at every size.
  const w = (v: number) => n(v / s)
  const fill = colour === 'red' ? RED : colour === 'ink' ? INK : PAPER
  return (
    <g transform={t} strokeLinecap="round" strokeLinejoin="round">
      {wake && <path d={WAKE} fill="none" stroke={INK} strokeWidth={w(1.3)} />}
      {rowing && <path d={OARS} fill="none" stroke={INK} strokeWidth={w(1.4)} />}
      {/* the paper edge round hull and sail, so a ship stays clear of the ships behind */}
      <path d={HULL} fill={PAPER} stroke={PAPER} strokeWidth={w(2.6)} />
      {mast && sail === 'set' && <path d={SAIL} fill={PAPER} stroke={PAPER} strokeWidth={w(2.6)} />}
      {mast && <path d={MAST} stroke={PAPER} strokeWidth={w(4.4)} />}
      <path d={HULL} fill={INK} />
      <path d={HULL_CUTS} fill={PAPER} />
      {mast && (
        <>
          <path d={STAYS} fill="none" stroke={INK} strokeWidth={w(0.9)} />
          <path d={MAST} stroke={INK} strokeWidth={w(2.2)} />
        </>
      )}
      {mast && sail === 'set' && (
        <>
          <path d={SAIL} fill={fill} stroke={INK} strokeWidth={w(1.3)} />
          <path
            d={SAIL_SEAMS}
            fill="none"
            stroke={colour === 'ink' ? PAPER : INK}
            strokeWidth={w(0.9)}
          />
        </>
      )}
      {mast && sail !== 'none' && <path d={YARD} fill="none" stroke={INK} strokeWidth={w(2.4)} />}
      {mast && sail === 'furled' && (
        <>
          <path d={YARD} fill="none" stroke={INK} strokeWidth={w(6)} />
          <path
            d="M-26 -101V-93M-12 -102V-94M4 -102V-94M18 -101V-93"
            stroke={PAPER}
            strokeWidth={w(1)}
          />
        </>
      )}
    </g>
  )
}
