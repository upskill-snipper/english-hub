import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { battlemented, castShadow, daySky, headland, seaLines } from './garden'
import { Person, type Pose } from './people'

/**
 * Act 2, Scene 1: "Storm and reunion on Cyprus", the fifth moment in the
 * guide's timeline. Every detail is from the scene, as the held edition
 * prints it (src/data/full-texts/othello.ts):
 *
 * - "A seaport in Cyprus. A Platform." So a stone platform on the harbour
 *   wall, its battlemented parapet along the sea, the bay beyond it and a
 *   headland across the water. The Cyprus of the later panels is cut with
 *   the same tools (./garden.tsx): the same day sky, the same sea.
 * - The storm is passing: "a high-wrought flood", "The chidden billow seems
 *   to pelt the clouds", "The wind-shak'd surge"; "The great contention of
 *   the sea and skies / Parted our fellowship." So a dark bank of storm cloud
 *   is going off to the left over a sea still heaving with white crests, and
 *   the sky clears to the right, where Othello's ship has come in: "If after
 *   every tempest come such calms".
 * - "A sail, a sail!" "The Moor! I know his trumpet." His ship rides in the
 *   bay, her sails taken in, the pennant of Venice at her masthead printed in
 *   the spot colour, as the galley of "The trance and the blow" carries it:
 *   the one red in the print.
 * - "Enter Othello and Attendants." OTHELLO: "O my fair warrior!"
 *   DESDEMONA: "My dear Othello!" So in the middle Othello, come up from the
 *   harbour, and Desdemona, come to meet him, face each other with their
 *   hands joined, his head bowed to her and hers lifted to him. He is drawn
 *   as the kit draws him (./people.tsx). They are not drawn kissing: the
 *   joined hands carry it.
 * - On the left the people who waited with her: Cassio, bearded, who has
 *   just called "Lo, where he comes!", holds out an open hand towards them;
 *   Montano, the governor, grey-bearded, in his round cap and long cloak;
 *   Emilia in her coif; Roderigo in his feathered bonnet. And apart from them,
 *   nearest to us at the far left, Iago, a hand on his hip and the knowing
 *   smile the kit gives him alone: "O, you are well tun'd now, / But I'll set
 *   down the pegs that make this music".
 *
 * The quotation is Othello's own, verbatim. Nothing is taken from a film or
 * stage production. Seeds: 4501 (sky), 4502 (storm cloud), 4503 (sea), 4504
 * (crests), 4505 (parapet), 4506 (platform), 4507 to 4510 (shadows).
 */

const W = 860
const H = 340
/** The horizon, the top of the parapet, and where the parapet meets the platform. */
const HORIZON = 150
const PARAPET = 214
const GROUND = 262
const FEET = 322

const OTHELLO: Pose = {
  look: 'othello',
  mouth: 'joy',
  head: { rot: 7 },
  cloak: 4,
  legs: {
    far: [
      [-3, -70],
      [-9, -36],
      [-13, -3],
    ],
    near: [
      [3, -70],
      [8, -36],
      [11, -3],
    ],
  },
  far: {
    pts: [
      [-3, -130],
      [-9, -104],
      [-6, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [15, -106],
      [31, -102],
    ],
    hand: 'open',
    deg: -6,
    thumb: -1,
    spread: 16,
  },
}

const DESDEMONA: Pose = {
  look: 'desdemona',
  mouth: 'joy',
  head: { rot: -9 },
  hem: { front: 24, back: 40 },
  far: {
    pts: [
      [-3, -126],
      [4, -104],
      [14, -96],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -126],
      [14, -106],
      [29, -104],
    ],
    hand: 'open',
    deg: 10,
    thumb: -1,
    spread: 12,
    size: 13.5,
  },
}

/** Cassio, holding out an open hand towards them: "Lo, where he comes!" */
const CASSIO: Pose = {
  look: 'cassio',
  cloak: 2,
  far: {
    pts: [
      [-3, -130],
      [-7, -104],
      [-6, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [22, -114],
      [42, -118],
    ],
    hand: 'open',
    deg: -16,
    thumb: -1,
  },
}

const MONTANO: Pose = {
  look: 'montano',
  far: {
    pts: [
      [-3, -130],
      [-7, -104],
      [-6, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [8, -104],
      [8, -84],
    ],
    hand: 'mitt',
  },
}

const EMILIA: Pose = {
  look: 'emilia',
  far: {
    pts: [
      [-3, -126],
      [2, -104],
      [12, -96],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -126],
      [8, -102],
      [16, -95],
    ],
    hand: 'mitt',
    deg: 170,
  },
}

const RODERIGO: Pose = {
  look: 'roderigo',
  cloak: 2,
  far: {
    pts: [
      [-3, -130],
      [-7, -104],
      [-6, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [8, -104],
      [7, -84],
    ],
    hand: 'mitt',
  },
}

/** Iago apart, a hand on his hip, the knowing smile, as in "The trance and the blow". */
const IAGO: Pose = {
  look: 'iago',
  mouth: 'smile',
  head: { rot: 2 },
  far: {
    pts: [
      [-3, -130],
      [-6, -104],
      [-4, -82],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [20, -110],
      [8, -88],
    ],
    hand: 'mitt',
    deg: 160,
  },
}

/**
 * Othello's ship at anchor in the bay, broadside on, facing left, her
 * waterline at (x, y): a tall hull with a raised stern, three masts with
 * their sails taken in on the yards (paper bundles), and the pennant of
 * Venice at the mainmast head in the spot colour.
 */
function Ship({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g stroke={PAPER} strokeWidth={3.4} strokeLinejoin="round" strokeLinecap="round" fill="none">
        <path d="M-30 -2V-74M0 -4V-92M26 -4V-66M-46 -30L-30 -44" />
      </g>
      <path
        d="M-48 -14L-36 -12L-30 -6H22L26 -16H44L46 -6C42 4 30 8 18 8H-24C-36 6 -44 0 -48 -14Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <path
        d={
          gouge(-34, 0, 38, -1, 0.7) + 'M-26 -4h3v3h-3zM-14 -4h3v3h-3zM-2 -4h3v3h-3zM10 -4h3v3h-3z'
        }
        fill={PAPER}
      />
      <path
        d="M-30 -2V-74M0 -4V-92M26 -4V-66M-46 -30L-30 -44"
        stroke={INK}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      {/* the yards, and the sails furled along them */}
      {[
        [-30, -66, 14],
        [-30, -44, 17],
        [0, -84, 16],
        [0, -60, 21],
        [26, -58, 12],
        [26, -38, 15],
      ].map(([mx, my, w]) => (
        <path
          key={`${mx}${my}`}
          d={`M${mx - w} ${my}Q${mx} ${my + 4} ${mx + w} ${my}L${mx + w - 2} ${my + 2.6}Q${mx} ${my + 7} ${mx - w + 2} ${my + 2.6}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1}
          strokeLinejoin="round"
        />
      ))}
      <path
        d="M0 -92L16 -88L0 -84Z"
        fill={RED}
        stroke={INK}
        strokeWidth={0.8}
        strokeLinejoin="round"
      />
    </g>
  )
}

type Marks = {
  sky: string
  storm: string
  stormCuts: string
  sea: string
  swell: string
  crests: string
  floor: string
  shadows: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The sky clears to the right, where the ship has come in.
  const sky = daySky(4501, { x0: 0, x1: W, y0: 6, y1: HORIZON - 4 }, (x, y) =>
    clamp(0.72 - x / 900 - y / 700),
  )
  // The storm going off to the left: a heaped bank of dark cloud filling the
  // top left corner, its underside rolling down from the top of the sky to
  // the horizon, the billows of its edge caught by the light.
  const r = rng(4502)
  const edge: [number, number][] = []
  for (let x = 500; x >= -10; x -= 8) {
    const t = clamp(1 - x / 500)
    const y =
      Math.pow(t, 0.75) * (HORIZON - 22) +
      Math.abs(Math.sin(x / 19)) * 9 * t +
      between(r, -1.5, 1.5)
    edge.push([x, y])
  }
  const storm =
    `M-10 0H500` + edge.map(([x, y]) => `L${n(x)} ${n(y)}`).join('') + `L-10 ${HORIZON}Z`
  const stormCuts =
    gougeField(
      r,
      { x0: 0, x1: 500, y0: 4, y1: HORIZON - 10 },
      (x, y) => clamp(0.06 + (x / 500) * 0.3 - y / 1000),
      { spacing: 6.4, len: [20, 70], gap: [8, 22], max: 2.6 },
    ) +
    edge
      .slice(0, -1)
      .map(([x, y], i) => gouge(x, y - 3, edge[i + 1][0], edge[i + 1][1] - 3, 1.1))
      .join('')
  // The sea, still heaving with white crests on the left, calmer to the right.
  const sea = seaLines(4503, { x0: 0, x1: W, y0: HORIZON + 2, y1: PARAPET })
  // Under the storm the sea is dark and heaving: ink cut close, with the
  // white crests of the waves cut out of it, thinning to the calm on the right.
  const c = rng(4504)
  const swell = gougeField(
    c,
    { x0: 0, x1: 500, y0: HORIZON + 2, y1: PARAPET },
    (x) => clamp(0.95 - x / 500) * 0.85,
    { spacing: 5, len: [20, 60], gap: [3, 10], max: 3.2 },
  )
  let crests = ''
  for (let y = HORIZON + 8; y < PARAPET - 4; y += 9) {
    let x = between(c, -20, 10)
    while (x < 460) {
      const len = between(c, 16, 34)
      const rough = clamp(1 - x / 470)
      if (c() < 0.25 + rough * 0.65) {
        const h = 2 + rough * 3
        const pts: [number, number][] = []
        for (let k = 0; k <= 8; k++)
          pts.push([x + (len * k) / 8, y - h * Math.sin((Math.PI * k) / 8)])
        crests += ribbon(pts, 1.4 + rough * 1.6, 0.6)
      }
      x += len + between(c, 12, 34)
    }
  }
  const floor = flagFloor(rng(4506), W, H, GROUND, [430, 160], 66, 4)
  const shadows =
    castShadow(4507, 66, FEET + 4, 26) +
    castShadow(4508, 300, FEET + 1, 26) +
    castShadow(4509, 456, FEET + 1, 24) +
    castShadow(4510, 520, FEET + 1, 28)
  cached = { sky, storm, stormCuts, sea, swell, crests, floor, shadows }
  return cached
}

function StormAndReunion(_props: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [480, 180], push: 1.03 })}>
      {/* the clearing sky, and the storm going off to the left */}
      <rect x={0} y={0} width={W} height={HORIZON} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <g className="lc-drift" style={timing({ dur: 3.6 })}>
        <path d={m.storm} fill={INK} />
        <path d={m.stormCuts} fill={PAPER} />
      </g>
      {/* the headland across the bay, and the sea still heaving */}
      <path
        d={headland(690, 880, HORIZON + 1, 26)}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <rect x={0} y={HORIZON} width={W} height={PARAPET - HORIZON} fill={PAPER} />
      <path d={m.sea} fill={INK} />
      <path d={m.swell} fill={INK} />
      <path d={m.crests} fill={PAPER} />
      <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.6} />
      {/* Othello's ship, come in at anchor */}
      <Ship x={742} y={196} s={1.05} />

      {/* the battlemented parapet of the platform, and its paving */}
      <path
        d={battlemented(-6, W + 6, PARAPET, GROUND, 26, 16, 14)}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={
          gouge(-6, PARAPET + 4, W + 6, PARAPET + 4, 1.4) +
          [40, 130, 220, 310, 400, 490, 580, 670, 760, 850]
            .map((x, i) => gouge(x + (i % 2) * 18, PARAPET + 12, x + (i % 2) * 18, GROUND - 4, 1.1))
            .join('') +
          gouge(-6, (PARAPET + GROUND) / 2 + 4, W + 6, (PARAPET + GROUND) / 2 + 4, 0.9)
        }
        fill={PAPER}
      />
      <rect x={0} y={GROUND} width={W} height={H - GROUND} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <rect x={0} y={GROUND - 1} width={W} height={3} fill={INK} />
      <path d={m.shadows} fill={INK} />

      {/* those who waited: Roderigo and Montano further back, Emilia, Cassio */}
      <Person pose={RODERIGO} at={[146, 306]} scale={0.94} />
      <Person pose={MONTANO} at={[220, 308]} scale={0.95} />
      <Person pose={EMILIA} at={[188, 318]} scale={1.02} />
      <Person pose={CASSIO} at={[296, FEET]} scale={1.05} />
      {/* the meeting: "O my fair warrior!" "My dear Othello!" */}
      <Person pose={OTHELLO} at={[522, FEET]} scale={1.1} flip />
      <Person pose={DESDEMONA} at={[454, FEET]} scale={1.1} />
      {/* Iago apart, nearest to us */}
      <Person pose={IAGO} at={[64, 328]} scale={1.12} />
    </g>
  )
}

export const stormAndReunion: LinocutArt = { width: W, height: H, Draw: StormAndReunion }
