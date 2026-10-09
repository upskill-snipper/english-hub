import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gouge, gougeField, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CROWN, CROWN_BAND, Person, type P } from './people'
import { H, HourGlass, Playhouse, SKY, W, Yard } from './the-wooden-o'

/**
 * The Epilogue: "Small time", the twenty-fourth and last moment in the
 * guide's timeline. "The stage, after the story has ended." Every detail is
 * from the Epilogue in the held edition (src/data/full-texts/henry-v.ts,
 * Project Gutenberg #1521), and from the Prologue it answers:
 *
 * - "Thus far, with rough and all-unable pen, Our bending author hath
 *   pursu'd the story, In little room confining mighty men". So the place is
 *   the playhouse of the first panel, cut the same from the same yard
 *   (./the-wooden-o.tsx): the wooden O, its bare stage and the people of the
 *   yard below it. The story is over, and the open sky that held the
 *   imagined army in the first panel is empty.
 * - "Enter Chorus." He is the kit's Chorus, in the dress of the playhouse's
 *   own time (./people.tsx), on the same boards as in the first panel, now at
 *   the right of the stage and turned into it. "Our bending author", and "In
 *   your fair minds let this acceptance take": he bows low at the front of
 *   the stage, as a player does when the play is done, his arms hanging
 *   before him, over the people of the yard. (He was first cut with a hand
 *   raised to his breast, which at panel size read as a hand to his face,
 *   and then with an arm swept behind him, which read as a hand on an aching
 *   back.)
 * - "Small time, but in that small most greatly lived This star of England."
 *   The hour-glass of the Prologue ("Turning the accomplishment of many
 *   years Into an hour-glass") stands where it stood, and its sand has all
 *   run down. The afternoon's light is going: the sky darkens towards the
 *   top, and one star is out over the O, cut in paper. The quotation.
 * - "Henry the Sixth, in infant bands crown'd King Of France and England, did
 *   this king succeed; Whose state so many had the managing, That they lost
 *   France". So the King's crown is left lying on the empty boards, tipped
 *   on its side: the King is gone, and the crown he left to a child has
 *   fallen. It is printed in the spot colour, big enough at phone width to
 *   stay a crown, and away from any face or hand. The infant King is not
 *   drawn, nor anything of what was lost; "made his England bleed" is left
 *   to the words.
 *
 * Nothing is taken from a film, television or stage production. Seeds: 2401
 * (the dusk sky), 2402 (the star's light).
 */

const CHORUS: P = [604, 288]
const GLASS: P = [432, 280]
/** The crown on the boards, where its rim touches them. */
const CROWN_AT: P = [318, 283]
const STAR: P = [214, 52]

type Marks = { dusk: string; starRays: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The dusk sky: ink overhead, cut lighter towards the roofline where the
  // last of the day lingers, in long gouges; a ring kept dark round the star.
  const dusk = gougeField(
    rng(2401),
    { x0: 0, x1: W, y0: 4, y1: 140 },
    (x, y) => {
      const low = clamp((y - 4) / 136)
      const star = Math.hypot(x - STAR[0], (y - STAR[1]) * 1.3)
      return (0.03 + 0.97 * Math.pow(low, 1.7)) * clamp((star - 26) / 34, 0, 1)
    },
    { spacing: 6, len: [30, 120], gap: [10, 34], max: 3.4 },
  )
  const starRays = rays(rng(2402), STAR[0], STAR[1], { from: 17, to: 25, every: 45, width: 1.3 })
  cached = { dusk, starRays }
  return cached
}

/** A star of four long points and four short, cut in paper. */
const STAR_SHAPE = (() => {
  const pts: string[] = []
  for (let k = 0; k < 16; k++) {
    const a = (k * Math.PI) / 8 - Math.PI / 2
    const r = k % 4 === 0 ? 14 : k % 2 === 0 ? 6 : 2.8
    pts.push(`${n(STAR[0] + Math.cos(a) * r)} ${n(STAR[1] + Math.sin(a) * r)}`)
  }
  return `M${pts.join('L')}Z`
})()

function SmallTime({ uid }: ArtProps) {
  const m = marks()
  const skyClip = `${uid}-sky`
  return (
    <>
      <defs>
        <clipPath id={skyClip}>
          <path d={SKY} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
        {/* the sky of the O at dusk, empty of the story, and one star out */}
        <g clipPath={`url(#${skyClip})`}>
          <path d={SKY} fill={INK} />
          <path d={m.dusk} fill={PAPER} />
        </g>
        <g className="lc-fade-in" style={timing({ delay: 0.8, dur: 1.6 })}>
          <path d={m.starRays} fill={PAPER} />
          <path d={STAR_SHAPE} fill={PAPER} />
        </g>

        <Playhouse />

        {/* the hour-glass where it stood at the Prologue, its sand run down */}
        <HourGlass x={GLASS[0]} y={GLASS[1]} sand={1} />

        {/* the King's crown, left lying on the boards */}
        <path
          d={gouge(CROWN_AT[0] - 34, CROWN_AT[1] + 2, CROWN_AT[0] + 38, CROWN_AT[1] + 3, 2.2)}
          fill={INK}
        />
        <g
          transform={`translate(${CROWN_AT[0]} ${CROWN_AT[1]}) rotate(-16) scale(1.7) translate(0 12)`}
        >
          <path d={CROWN} fill={RED} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
          <path d={CROWN_BAND} fill="none" stroke={INK} strokeWidth={1} />
        </g>

        {/* the Chorus, bowing low to the yard, his arms hanging before him */}
        <path
          d={
            gouge(CHORUS[0] - 46, CHORUS[1], CHORUS[0] + 44, CHORUS[1] + 1, 2.2) +
            gouge(CHORUS[0] - 32, CHORUS[1] + 4, CHORUS[0] + 30, CHORUS[1] + 4.4, 1.4)
          }
          fill={INK}
        />
        <Person
          at={CHORUS}
          scale={1.12}
          flip
          pose={{
            look: 'chorus',
            body: { neck: [42, -116], hip: [0, -71] },
            head: { at: [57, -132], rot: 43 },
            eye: 'down',
            legs: {
              far: [
                [-3, -71],
                [-6, -36],
                [-8, -3],
              ],
              near: [
                [3, -71],
                [8, -37],
                [12, -3],
              ],
            },
            far: {
              pts: [
                [38, -113],
                [41, -91],
                [42, -70],
              ],
            },
            near: {
              pts: [
                [45, -111],
                [50, -89],
                [53, -68],
              ],
              hand: 'open',
              deg: 96,
              thumb: 1,
            },
          }}
        />

        <Yard />
      </g>
    </>
  )
}

export const smallTime: LinocutArt = { width: W, height: H, Draw: SmallTime }
