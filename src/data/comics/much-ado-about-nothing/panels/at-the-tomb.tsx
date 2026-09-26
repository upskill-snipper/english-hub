import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { arch, ChurchWindow, FLOOR, H, Nave, Pillar, W, type Light, type P } from './church'
import { HAIR_CUTS, Person, type Pose } from './people'

/**
 * Act 5, Scene 3: "At the tomb", the fourteenth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/much-ado-about-nothing.ts):
 *
 * - "The Inside of a Church." It is the church of "“Kill Claudio”", drawn
 *   from ./church.tsx, and it is midnight: "Midnight, assist our moan". So
 *   the only light is the tapers', and a high window shows the stars. The
 *   dawn Don Pedro sees at the end ("the gentle day [...] Dapples the drowsy
 *   East with spots of grey") has not come yet.
 * - "Is this the monument of Leonato?" "It is, my lord." The Friar's plan in
 *   4.1 puts it in the church: "on your family's old monument / Hang
 *   mournful epitaphs". So on the right is the family's monument: a tomb
 *   chest of pale stone under a round-arched niche, with an old inscribed
 *   tablet on the wall of the niche. No body and no effigy is drawn; Hero is
 *   alive, and the picture never shows the dead.
 * - "[Reads from a scroll.]" then "Hang thou there upon the tomb, / Praising
 *   her when I am dumb." So Claudio, a beardless youth ("my Lord
 *   Lack-beard", 5.1), stands black against the pale stone and reaches up
 *   to hang the scroll of the epitaph on the monument, its lines of writing
 *   cut in ink.
 * - "Enter Don Pedro, Claudio and Attendants, with music and tapers." "Now,
 *   music, sound, and sing your solemn hymn." So Don Pedro, the Prince, known
 *   by his circlet, stands behind Claudio with his head bowed, holding up a
 *   taper, and on the left three attendants stand in a row, two with tapers
 *   and one playing a lute for the hymn, their heads bowed. The attendants
 *   are not described: they are the kit's plain men in doublets, bareheaded
 *   in the church (./people.tsx, the watchman's figure without his hat).
 * - The tapers' flames are the spot colour, the only colour in the dark:
 *   the rite of mourning Claudio vows to repeat, "Yearly will I do this rite."
 *   Every taper is held up and forward, so its flame burns above and ahead
 *   of the face of the man who holds it. The attendants first held theirs at
 *   the chest, and at phone width each flame sat at a bowed man's mouth,
 *   where red reads as blood.
 *
 * The people are drawn from ./people.tsx, as in every panel of this play.
 * Nothing is taken from a film or stage production. Seeds: 14101 (the wall
 * and floor), 14102 to 14104 (the tapers' light), 14105 (the stars), 14106 (the
 * stone and the writing), 14107 (the light on the floor).
 */

/** The tapers' flames: the three attendants' and Don Pedro's. */
const FLAMES: P[] = [
  [136, 131],
  [304, 131],
  [505, 112],
]
const LIGHTS: Light[] = [
  ...FLAMES.map((at) => ({ at, reach: 150, power: 0.6 })),
  { at: [700, 160] as P, reach: 190, power: 0.42 },
]
/** The monument's niche, and the chest in front of it. */
const NICHE = { x0: 606, x1: 834, top: 34, bottom: FLOOR }
/** The scroll of the epitaph, hung on the wall of the niche. */
const SCROLL = { x0: 634, x1: 676, top: 118, bottom: 176 }

const ATTENDANT = (hand: 'taper' | 'lute'): Pose => ({
  look: 'watchman',
  bare: true,
  eye: 'down',
  head: { at: [4, -159], rot: 14 },
  far:
    hand === 'lute'
      ? {
          pts: [
            [-3, -132],
            [10, -114],
            [30, -118],
          ],
          hand: 'mitt',
          deg: -30,
        }
      : {
          pts: [
            [-3, -132],
            [-5, -106],
            [-2, -82],
          ],
          hand: 'mitt',
        },
  near:
    hand === 'lute'
      ? {
          pts: [
            [4, -132],
            [2, -108],
            [12, -98],
          ],
          hand: 'mitt',
          deg: 10,
        }
      : {
          pts: [
            [4, -132],
            [18, -110],
            [32, -116],
          ],
          hand: 'mitt',
          deg: -84,
        },
})

const DON_PEDRO: Pose = {
  look: 'don-pedro',
  eye: 'down',
  head: { at: [4, -159], rot: 12 },
  far: {
    pts: [
      [-3, -132],
      [-4, -106],
      [2, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -132],
      [24, -118],
      [36, -140],
    ],
    hand: 'mitt',
    deg: -80,
  },
}

/** Claudio, reaching up to hang the scroll on the monument. */
const CLAUDIO: Pose = {
  look: 'claudio',
  head: { at: [4, -160], rot: -8 },
  far: {
    pts: [
      [-3, -132],
      [-5, -106],
      [-2, -84],
    ],
    hand: 'mitt',
  },
  // The elbow bent at a right angle and the forearm upright, the hand on the
  // scroll's top roller: a man hanging something on a nail. The arm was first
  // raised straight from the shoulder at forty-five degrees with the hand
  // open, and at phone width that is the shape of a salute (review, 26
  // September 2026).
  near: {
    pts: [
      [4, -132],
      [34, -128],
      [46, -160],
    ],
    hand: 'open',
    deg: -76,
    thumb: -1,
    spread: 12,
  },
}

/**
 * The attendants go bareheaded in the church, and a bare ink head with no
 * hair cut into it reads as a hood: so their short hair is cut in paper, as
 * the kit cuts Benedick's and Don Pedro's (HAIR_CUTS), in the head's frame.
 */
function AttendantHair() {
  return (
    <g transform="translate(4 -159) rotate(14)">
      <path d={HAIR_CUTS} fill={PAPER} />
    </g>
  )
}

/** A taper held upright in a hand at `at`, its flame at the top in the spot colour. */
function Taper({ at, len = 34, delay = 0 }: { at: P; len?: number; delay?: number }) {
  const [x, y] = at
  return (
    <g>
      <rect
        x={x - 2.6}
        y={y - len}
        width={5.2}
        height={len + 4}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.4}
      />
      <path
        className="lc-flicker"
        style={timing({ dur: 0.8, delay })}
        d={`M${x} ${y - len - 1}C${x - 4.4} ${y - len - 6} ${x - 3.2} ${y - len - 12} ${x} ${y - len - 20}C${x + 3.2} ${y - len - 12} ${x + 4.4} ${y - len - 6} ${x} ${y - len - 1}Z`}
        fill={RED}
      />
    </g>
  )
}

type Marks = { glows: string; pools: string; stars: string; stone: string; writing: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const glows = FLAMES.map(([x, y], i) =>
    rays(rng(14102 + i), x, y, { from: 16, to: 64, every: 12, width: 1.8 }),
  ).join('')
  let stars = ''
  const s = rng(14105)
  for (let k = 0; k < 8; k++) {
    const x = between(s, 312, 358)
    const y = between(s, 70, 140)
    stars += gouge(x - 2.4, y, x + 2.4, y, 1) + gouge(x, y - 2.4, x, y + 2.4, 1)
  }
  // the grain of the monument's stone, cut in ink on its pale face
  let stone = ''
  const g = rng(14106)
  for (let y = 206; y < 246; y += 7) {
    let x = 612 + between(g, 0, 16)
    while (x < 826) {
      const len = between(g, 10, 30)
      if (g() < 0.45) stone += gouge(x, y, x + len, y + between(g, -0.4, 0.4), 0.55)
      x += len + between(g, 10, 30)
    }
  }
  // the epitaph's lines of writing, short and even, as a hand writes verse
  let writing = ''
  for (let k = 0, y = SCROLL.top + 12; y < SCROLL.bottom - 8; k++, y += 5.4) {
    const indent = k % 2 ? 7 : 4
    writing += `M${SCROLL.x0 + indent} ${n(y)}H${n(SCROLL.x1 - 6 - between(g, 0, 10))}`
  }
  // the pool of light each taper throws on the flags round the feet of the
  // man who holds it, cut in paper, widest in the middle
  let pools = ''
  const pl = rng(14107)
  for (const [x] of FLAMES)
    for (let y = 290; y < 336; y += 3.6) {
      const w = 1 - Math.abs(y - 312) / 24
      if (w <= 0.05) continue
      const half = 64 * Math.sqrt(w)
      pools += gouge(
        x - half + between(pl, -4, 4),
        y,
        x + half + between(pl, -4, 4),
        y + between(pl, -0.5, 0.5),
        0.6 + w * 1.9,
      )
    }
  cached = { glows, pools, stars, stone, writing }
  return cached
}

function AtTheTomb({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-tomb-wall`
  const S = SCROLL
  return (
    <g className="lc-push" style={timing({ origin: [600, 180], push: 1.03 })}>
      <defs>
        <clipPath id={clip}>
          <path d={`M0 0H${W}V${FLOOR}H0Z`} />
        </clipPath>
      </defs>
      <Nave seed={14101} lights={LIGHTS} vanish={[520, 110]} night />
      <g clipPath={`url(#${clip})`}>
        <path d={m.glows} fill={PAPER} />
      </g>
      <path d={m.pools} fill={PAPER} />

      {/* a high window on the night */}
      <ChurchWindow
        uid={uid}
        win={{ x0: 308, x1: 362, top: 58, bottom: 146 }}
        outside={
          <>
            <rect x={308} y={58} width={54} height={88} fill={INK} />
            <path d={m.stars} fill={PAPER} />
          </>
        }
      />
      <Pillar x={404} lit={1} />

      {/* the monument of Leonato's family */}
      <path
        d={arch({ x0: NICHE.x0 - 12, x1: NICHE.x1 + 12, top: NICHE.top - 12, bottom: FLOOR })}
        fill={PAPER}
        stroke={INK}
        strokeWidth={2}
      />
      <path d={arch(NICHE)} fill={INK} />
      <path
        d={arch({ x0: NICHE.x0 - 6, x1: NICHE.x1 + 6, top: NICHE.top - 6, bottom: FLOOR })}
        fill="none"
        stroke={INK}
        strokeWidth={1.4}
      />
      {/* the old tablet, its inscription worn */}
      <path d="M700 70H800V116H700Z" fill={PAPER} stroke={INK} strokeWidth={2} />
      <path d="M712 82H788M712 93H788M712 104H770" stroke={INK} strokeWidth={1.8} />
      {/* the chest, on its plinth */}
      <path d="M600 186H840V198H600Z" fill={PAPER} stroke={INK} strokeWidth={2} />
      <path d="M610 198H830V252H610Z" fill={PAPER} stroke={INK} strokeWidth={2} />
      <path d={m.stone} fill={INK} />
      <path
        d="M626 206H710V244H626ZM730 206H814V244H730Z"
        fill="none"
        stroke={INK}
        strokeWidth={2.2}
      />
      <path d="M596 252H844V266H596Z" fill={PAPER} stroke={INK} strokeWidth={2} />

      {/* the epitaph, hung on the tomb: a scroll on a cord from a nail */}
      <path
        d={`M${S.x0 + 6} ${S.top}L${(S.x0 + S.x1) / 2} ${S.top - 14}L${S.x1 - 6} ${S.top}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <circle cx={(S.x0 + S.x1) / 2} cy={S.top - 15} r={2.2} fill={PAPER} />
      <path
        d={`M${S.x0} ${S.top}H${S.x1}V${S.bottom}H${S.x0}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.6}
      />
      <path d={m.writing} stroke={INK} strokeWidth={1.2} />
      <g fill={PAPER} stroke={INK} strokeWidth={1.4}>
        <rect x={S.x0 - 3} y={S.top - 4} width={S.x1 - S.x0 + 6} height={6} rx={3} />
        <rect x={S.x0 - 3} y={S.bottom - 2} width={S.x1 - S.x0 + 6} height={6} rx={3} />
      </g>

      {/* the attendants with their tapers and the lute */}
      <Person pose={ATTENDANT('taper')} at={[104, 300]} scale={0.94}>
        <AttendantHair />
        <Taper at={[34, -114]} len={56} />
      </Person>
      <Person pose={ATTENDANT('lute')} at={[190, 300]} scale={0.94}>
        <AttendantHair />
        {/*
          The lute: its round body against his chest, its neck held out and
          up, and the pegbox bent back at the end of it. The neck was first
          an ink bar on the ink wall with one hairline down it, which left a
          round disc with a boss at his chest, and at phone width that read
          as a shield (review, 26 September 2026). So the neck and pegbox are
          outlined in paper as the body is, and the strings run in paper from
          the bridge to the pegbox, so the whole instrument reads.
        */}
        <path
          d="M22 -113L50 -129M49 -129L56 -123"
          stroke={PAPER}
          strokeWidth={8.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 -113L50 -129M49 -129L56 -123"
          stroke={INK}
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M-2 -104C-2 -116 10 -122 20 -118C28 -114 30 -104 26 -96C20 -86 4 -86 -1 -96Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.6}
        />
        <circle cx={12} cy={-104} r={3.4} fill={PAPER} />
        <path d="M5 -97.4L48.6 -127.4M6.4 -95.6L49.6 -125.8" stroke={PAPER} strokeWidth={0.8} />
        <path d="M3 -99.6H9" stroke={PAPER} strokeWidth={1.6} strokeLinecap="round" />
      </Person>
      <Person pose={ATTENDANT('taper')} at={[272, 300]} scale={0.94}>
        <AttendantHair />
        <Taper at={[34, -114]} len={56} delay={0.4} />
      </Person>

      <Person pose={DON_PEDRO} at={[458, 322]} scale={1.18}>
        <Taper at={[40, -138]} len={30} delay={0.2} />
      </Person>
      <Person pose={CLAUDIO} at={[598, 322]} scale={1.2} />
    </g>
  )
}

export const atTheTomb: LinocutArt = { width: W, height: H, Draw: AtTheTomb }
