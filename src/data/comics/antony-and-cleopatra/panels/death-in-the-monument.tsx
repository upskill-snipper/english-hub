import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { sandal, sandalCuts } from '../../julius-caesar/panels/people'
import { cut, lightField } from './light-cuts'
import { stoneCourses } from './monument'
import {
  CutFigure,
  Person,
  UpperBody,
  hand,
  limb,
  reach,
  sizeOf,
  toFigure,
  toHip,
  type P,
  type Part,
  type Pose,
} from './people'

/**
 * Act 4, Scene 15: "Death in the monument", the twenty-first moment in the
 * guide's timeline. The panel draws the moment before the death the title
 * names: Antony alive, being drawn up to Cleopatra. Every detail is from the
 * scene in the held edition (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Alexandria. A monument." "Enter Cleopatra and her maids aloft, with
 *   Charmian and Iras." So the three women are high up on the monument, on
 *   its roof behind the parapet: the monument is the tall tower of dressed
 *   stone that Caesar's camp sees on the skyline in the next panel
 *   (./monument.tsx).
 * - "Enter, below Diomedes." "Enter, below Antony borne by the Guard." So
 *   Diomedes, a man of the queen's household in a long robe, and two of the
 *   guard, helmeted, stand on the ground at the foot of the wall, looking up;
 *   and to Cleopatra's "Help, friends below!" and "Assist, good friends", one
 *   of the guard steadies the sling from below with both hands.
 * - CLEOPATRA: "Help me, my women, we must draw thee up." "Here's sport
 *   indeed! How heavy weighs my lord!" "They heave Antony aloft to
 *   Cleopatra." So Charmian, her hair bound at the nape, and Iras, hers cut
 *   level at the jaw (the kit's marks, ./people.tsx), lean back and haul on
 *   two ropes that run over the parapet and down to a sling of cloth under
 *   him, and Cleopatra leans out over the parapet between them with both
 *   hands held down to him, the fingers open.
 * - ANTONY: "O, quick, or I am gone." He is alive and drawn alive: sitting
 *   up in the sling halfway up the wall, his head turned up to her, one hand
 *   lifted towards hers and the other on the rope, their hands not yet met.
 *   He has been unarmed ("Unarm, Eros", 4.14), so he wears his belted tunic
 *   and no cuirass.
 * - CLEOPATRA: "O sun, Burn the great sphere thou mov'st in! Darkling stand
 *   The varying shore o' th' world." Antony's "long day's task is done"
 *   (4.14), so it is evening: the sun is going down into the sea beyond the
 *   shore, printed in the spot colour, the sky darkening overhead, and the
 *   low light falls on the face of the monument, which is cut pale.
 *
 * WHAT IS LEFT OUT, AND WHY. Antony "falls on his sword" in the scene before
 * (4.14), and this play's rule (./people.tsx) is that no death by a
 * character's own hand is shown or suggested by its method. So there is no
 * wound, no blood, no blade and no red anywhere on him or near him; the only
 * red is the setting sun, large and far off over the sea, and its light on
 * the water is cut in paper, never red. The quotation is Cleopatra's line as
 * they lift him, not a line of the death. Cleopatra's face, like every face
 * in the print, is cut in ink, and the play's "tawny front" (1.1) is left to
 * the words; she wears no crown, because the play gives her none until 5.2.
 *
 * REDRAWN, 9 October 2026. The first cut set the three women in a window
 * high in the tower, in ink on its dark opening, at a third of this size:
 * at phone width they were three outlines, and Cleopatra's arms, drawn
 * apart from her so they could reach over the sill, came out of the stone
 * rather than her shoulders. Now they stand on the roof against the evening
 * sky, as large as the guard below, and her arms are her own.
 *
 * Nothing is taken from a film or stage production. Seeds: 2101 (the sky),
 * 2102 (the sea), 2103 (the stone), 2104 (the ground).
 */

const W = 860
const H = 340
const HORIZON = 258
/** The setting sun, half sunk, and its radius. */
const SUN: P = [190, HORIZON]
const SUN_R = 42
/** Where the guard and Diomedes stand. */
const FOOT = 333

/** The shore, from the sea's edge to the foot of the monument. */
const LAND = 'M-4 296C90 292 210 294 300 298C352 301 396 306 426 312L866 314V346H-4Z'
const landTop = (x: number) => (x < 300 ? 294 : 298 + ((x - 300) / 126) * 14)

/** The monument: its wall, the cornice under the roof, and the parapet the women stand behind. */
const TOWER_LEFT = (y: number) => 432 + ((334 - y) / 186) * 14
const TOWER = `M426 336L${n(TOWER_LEFT(148))} 148L866 148V336Z`
const CORNICE = 'M438 136L866 136V150L442 150Z'
const PARAPET = { x0: 450, y0: 106, y1: 136 }

type Marks = { sky: string; sea: string; land: string; stone: string; shade: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The evening sky: cut almost clean along the sea and round the sun, and
  // darkening overhead, but never to black behind the women on the roof, who
  // must read against it.
  const r = rng(2101)
  const skyLight = (x: number, y: number) =>
    clamp(
      Math.max(
        1.08 - Math.hypot((x - SUN[0]) * 0.5, (y - SUN[1]) * 1.15) / 250,
        0.3 + ((y - 10) / (HORIZON - 10)) ** 1.2 * 0.62,
        // the last of the light, behind the roof and the women on it
        1.02 -
          Math.hypot(Math.max(0, 470 - x) * 0.9, Math.max(0, y - 120) * 0.6) / 300 -
          Math.max(0, 40 - y) / 260,
      ),
      0,
      1,
    )
  let sky = ''
  for (let y = 5; y < HORIZON - 1; y += 5.2) {
    let x = between(r, -40, 0)
    while (x < W) {
      const len = between(r, 36, 130)
      const L = skyLight(x + len / 2, y)
      if (r() < 0.04 + L * 0.96)
        sky += cut(
          x,
          y + between(r, -0.6, 0.6),
          len,
          0.4 + L * L * 7.4,
          between(r, -0.8, 0.8),
          between(r, -0.4, 0.4),
        )
      x += len * (1 - L * 0.25) + between(r, 6, 30) * (1 - L * 0.85)
    }
  }
  // The sea: dark, with a path of light cut almost clean under the sun.
  const s = rng(2102)
  let sea = ''
  for (let y = HORIZON + 3; y < 312; y += 3.2 + (y - HORIZON) * 0.09) {
    const t = (y - HORIZON) / 44
    let x = between(s, -30, 0)
    while (x < 440) {
      const len = between(s, 10, 34) * (1 + t * 0.6)
      const mid = x + len / 2
      const lit = clamp(1 - Math.abs(mid - SUN[0]) / (22 + t * 46)) * (1 - t * 0.35)
      if (y < landTop(mid) - 2 && s() < 0.16 + lit * 0.84)
        sea += cut(x, y, len, 0.5 + lit * 4.4, between(s, -0.4, 0.4), between(s, -0.3, 0.3))
      x += len + between(s, 6, 26) * (1.25 - lit)
    }
  }
  const land = lightField(
    2104,
    { x0: 0, x1: 440, y0: 298, y1: H },
    (x, y) => clamp(0.34 - (y - 296) / 110 - Math.max(0, x - 300) / 900),
    { spacing: 5.4, len: [10, 34], gap: [6, 18], max: 2.2 },
  )
  // The monument's face, pale in the low sun, in courses of dressed stone,
  // with fine ink lines gathering to the right, where the light fails.
  const stone =
    stoneCourses(2103, { x0: 0, x1: W + 4, y0: 150, y1: 334 }, TOWER_LEFT, { course: 23 }) +
    stoneCourses(2105, { x0: PARAPET.x0, x1: W + 4, y0: 104, y1: 136 }, () => PARAPET.x0, {
      course: 16,
      stone: [44, 64],
    })
  const sh = rng(2106)
  let shade = ''
  for (let y = 154; y < 334; y += 4.6) {
    let x = TOWER_LEFT(y) + between(sh, 0, 30)
    while (x < W) {
      const len = between(sh, 20, 70)
      const D = clamp((x + len / 2 - 600) / 380 - 0.06)
      if (sh() < D * 0.9) shade += cut(x, y, len, 0.3 + D * 1.1, between(sh, -0.4, 0.4))
      x += len + between(sh, 10, 50) * (1.3 - D)
    }
  }
  cached = { sky, sea, land, stone, shade }
  return cached
}

// ── The people ──────────────────────────────────────────────────────────────

type Frame = { hip: P; s: number; lean: number; flip: boolean }

/**
 * The women on the roof: where each one's hip is, hidden by the parapet, and
 * how far she leans. The haulers lean back from their ropes; Cleopatra leans
 * out over the parapet.
 */
const CHARMIAN: Frame = { hip: [484, 116], s: 0.94, lean: -16, flip: false }
const IRAS: Frame = { hip: [754, 116], s: 0.92, lean: -16, flip: true }
const CLEOPATRA: Frame = { hip: [650, 118], s: 1.02, lean: 56, flip: true }
/** Antony's hip in the sling, halfway up the wall: he sits up, barely leaning back. */
const ANTONY: Frame = { hip: [574, 252], s: 0.98, lean: -4, flip: false }

/** The two ropes: where each comes over the parapet's edge, and the hauler's grip on it. */
const LEFT_ROPE = { x: 532, grip: [522, 103] as P }
const RIGHT_ROPE = { x: 628, grip: [714, 103] as P }
/** Where Cleopatra's two hands reach, her far hand and her near one. */
const CLEO_HANDS: [P, P] = [
  [614, 147],
  [604, 144],
]
/**
 * His lifted arm, elbow and wrist: the elbow out in front and the forearm
 * upright, so the hand rises beside his face and never across it.
 */
const ANTONY_ELBOW: P = [601, 207]
const ANTONY_WRIST: P = [610, 186]
/** His other hand, closed on the rope beside him, as a man holds the rope of a swing. */
const ANTONY_GRIP: P = [535, 198]

/** The guard who steadies the sling: where he stands, his size, and where his two hands are. */
const GUARD_AT: P = [488, FOOT]
const GUARD_S = 0.84
const SLING_STEADY: [P, P] = [
  [520, 262],
  [528, 258],
]
/** The guard's arm, reaching to a point of the panel. */
const guardArm = (shoulder: P, world: P) => {
  const s = GUARD_S * sizeOf('soldier')
  return reach(shoulder, toFigure(world, GUARD_AT, s), 24, 1)
}

/** The transform of a figure's hip frame (its lean is the UpperBody's own). */
const frameOf = (f: Frame) =>
  `translate(${n(f.hip[0])} ${n(f.hip[1])}) scale(${n(f.flip ? -f.s : f.s)} ${n(f.s)})`

/** A point in a frame's unturned hip frame, out into the panel. */
const toWorld = (local: P, f: Frame): P => [
  f.hip[0] + (f.flip ? -local[0] : local[0]) * f.s,
  f.hip[1] + local[1] * f.s,
]

/**
 * Antony in the sling, in his hip frame (facing right): the thighs along the
 * sling, the shins hanging, the tunic's skirt over the lap. His upper body is
 * the kit's own, from `UpperBody`.
 */
const ANTONY_LEGS: Part[] = [
  {
    d: limb([
      [0, 2],
      [32, 8],
      [35, 44],
    ]),
    w: 9,
  },
  sandal([35, 48], 1),
  {
    d: limb([
      [-4, 4],
      [24, 12],
      [24, 48],
    ]),
    w: 9,
  },
  sandal([24, 52], 1),
  { d: 'M-20 -12C-24 0 -22 10 -15 13L30 15C35 13 37 6 35 0C30 -7 22 -10 14 -11Z' },
]
const ANTONY_LEG_CUTS =
  sandalCuts([35, 48], 1) +
  sandalCuts([24, 52], 1) +
  cut(-14, 2, 40, 1.5, 2, 1.2) +
  cut(-18, -6, 20, 1.2, 10, -0.6)
/** The sling of cloth under his thighs, and where its two ropes are made fast. */
const SLING = 'M-44 -4C-30 22 18 28 50 6L54 18C24 44 -30 38 -50 4Z'
const SLING_ENDS: [P, P] = [
  [-45, 1],
  [50, 12],
]

/** A rope: an ink cord with a paper edge, so it reads on the stone and the sky. */
function Rope({ pts }: { pts: P[] }) {
  const d = limb(pts)
  return (
    <>
      <path
        d={d}
        fill="none"
        stroke={PAPER}
        strokeWidth={5.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={d}
        fill="none"
        stroke={INK}
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  )
}

/** The angle of the last bone of an arm, for the hand at its end. */
const lastAngle = (pts: P[]) =>
  (Math.atan2(pts[2][1] - pts[1][1], pts[2][0] - pts[1][0]) * 180) / Math.PI

/** An UpperBody's arm, posed in its hip frame and handed back in the figure frame it is drawn in. */
const armTo = (shoulder: P, target: P, side: 1 | -1) =>
  reach([shoulder[0], shoulder[1] + 86], target, 24, side).map(([x, y]) => [x, y - 86] as P)

function DeathInTheMonument({ uid }: ArtProps) {
  const m = marks()
  const slingL = toWorld(SLING_ENDS[0], ANTONY)
  const slingR = toWorld(SLING_ENDS[1], ANTONY)
  // Charmian and Iras haul, both hands closed on the rope in front of them,
  // low over the parapet.
  const hauler = (look: 'charmian' | 'iras', f: Frame, grip: P): Pose => {
    const g = toHip(grip, f)
    return {
      look,
      head: { rot: 14 },
      eye: 'down',
      far: { pts: armTo([-3, -128], [g[0] - 9, g[1] + 2], 1), hand: 'grip' },
      near: { pts: armTo([5, -128], g, 1), hand: 'grip' },
    }
  }
  // Cleopatra's arms, in her hip frame turned by her lean, drawn after the
  // parapet so they reach down over it.
  const [c0, c1] = CLEO_HANDS.map((t) => toHip(t, CLEOPATRA))
  const cleoFar = reach([-1, -42], c0, 23, -1)
  const cleoNear = reach([5, -42], c1, 23, -1)
  const cleoArms: Part[] = [
    { d: limb(cleoFar), w: 7.6 },
    ...hand(cleoFar[2], lastAngle(cleoFar), { size: 13.5, spread: 18, thumb: -1 }),
    { d: limb(cleoNear), w: 7.6, sep: 1.5 },
    ...hand(cleoNear[2], lastAngle(cleoNear), { size: 13.5, spread: 18, thumb: -1, sep: 1.5 }),
  ]
  // Antony's lifted hand, reaching up to hers.
  const hipToFigure = (w: P): P => {
    const [x, y] = toHip(w, ANTONY)
    return [x, y - 86]
  }
  const antonyNear: P[] = [[5, -128], hipToFigure(ANTONY_ELBOW), hipToFigure(ANTONY_WRIST)]
  const antonyFar = armTo([-3, -128], toHip(ANTONY_GRIP, ANTONY), -1)
  const parapetTop = PARAPET.y0
  return (
    <g className="lc-push" style={timing({ origin: [600, 160], push: 1.03 })}>
      {/* the evening sky, the sun going down into the sea */}
      <rect x={0} y={0} width={W} height={H} fill={INK} />
      <path d={m.sky} fill={PAPER} />
      <path
        d={`M${SUN[0] - SUN_R} ${HORIZON}A${SUN_R} ${SUN_R} 0 0 1 ${SUN[0] + SUN_R} ${HORIZON}Z`}
        fill={RED}
        stroke={INK}
        strokeWidth={1.4}
      />
      <rect x={0} y={HORIZON} width={440} height={H - HORIZON} fill={INK} />
      <path d={m.sea} fill={PAPER} />

      {/* the shore */}
      <path d={LAND} fill={INK} />
      <path d={m.land} fill={PAPER} />
      <path d={LAND} fill="none" stroke={PAPER} strokeWidth={LINE.carve} />

      {/* the women on the roof, behind the parapet */}
      <g transform={frameOf(CHARMIAN)}>
        <UpperBody
          uid={uid}
          id="charmian"
          pose={hauler('charmian', CHARMIAN, LEFT_ROPE.grip)}
          lean={CHARMIAN.lean}
        />
      </g>
      <g transform={frameOf(IRAS)}>
        <UpperBody
          uid={uid}
          id="iras"
          pose={hauler('iras', IRAS, RIGHT_ROPE.grip)}
          lean={IRAS.lean}
        />
      </g>
      <g transform={frameOf(CLEOPATRA)}>
        <UpperBody
          uid={uid}
          id="cleopatra"
          lean={CLEOPATRA.lean}
          pose={{
            look: 'cleopatra',
            // the head held up against the lean, so her hair falls down her back
            head: { rot: -22 },
            eye: 'down',
            far: {
              pts: [
                [-1, -128],
                [0, -124],
              ],
              hand: 'none',
            },
            near: {
              pts: [
                [5, -128],
                [6, -124],
              ],
              hand: 'none',
            },
          }}
        />
      </g>

      {/* the monument: its pale face in courses of stone, the cornice, the parapet */}
      <path d={TOWER} fill={PAPER} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
      <path d={m.shade} fill={INK} />
      <path
        d={`M${PARAPET.x0} ${parapetTop}H${W + 4}V${PARAPET.y1}H${PARAPET.x0}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={3}
      />
      <path d={m.stone} fill="none" stroke={INK} strokeWidth={1.5} />
      <path d={CORNICE} fill={INK} />
      <path d={cut(446, 141, 420, 1.3)} fill={PAPER} />
      <path d={cut(452, 103.5, 414, 1)} fill={INK} />

      {/* the ropes, from the women's hands over the parapet to the sling */}
      <Rope pts={[LEFT_ROPE.grip, [LEFT_ROPE.x, parapetTop + 1], [LEFT_ROPE.x, 150], slingL]} />
      <Rope pts={[RIGHT_ROPE.grip, [RIGHT_ROPE.x, parapetTop + 1], [RIGHT_ROPE.x, 150], slingR]} />

      {/* Cleopatra's arms, held down over the parapet to him */}
      <g transform={frameOf(CLEOPATRA)}>
        <g transform={`rotate(${CLEOPATRA.lean})`}>
          <CutFigure parts={[cleoArms]} />
        </g>
      </g>

      {/* Antony, alive, drawn up in the sling */}
      <g transform={frameOf(ANTONY)}>
        <CutFigure parts={ANTONY_LEGS} cuts={ANTONY_LEG_CUTS} />
        <UpperBody
          uid={uid}
          id="antony"
          lean={ANTONY.lean}
          pose={{
            look: 'antony',
            dress: 'tunic',
            head: { rot: -34 },
            far: { pts: antonyFar, hand: 'grip', deg: 180 },
            near: { pts: antonyNear, hand: 'open', thumb: -1, deg: -84 },
          }}
        />
        <path d={SLING} fill={INK} stroke={PAPER} strokeWidth={1.8} strokeLinejoin="round" />
        <path d={cut(-36, 12, 80, 1.2, 8, 3) + cut(-30, 21, 68, 1, 6, 2.4)} fill={PAPER} />
      </g>
      {/* the rope again where his hand closes round it, so it reads as held */}
      <Rope
        pts={[
          [LEFT_ROPE.x, ANTONY_GRIP[1] - 16],
          [LEFT_ROPE.x - 0.4, ANTONY_GRIP[1] + 14],
        ]}
      />

      {/* two of the guard below, looking up at him */}
      {/* one steadies the sling from below, both hands open under its end */}
      <Person
        pose={{
          look: 'soldier',
          head: { rot: -26 },
          far: { pts: guardArm([-3, -128], SLING_STEADY[0]), hand: 'open', thumb: -1 },
          near: { pts: guardArm([5, -128], SLING_STEADY[1]), hand: 'open', thumb: -1 },
        }}
        at={GUARD_AT}
        scale={GUARD_S}
      />
      <Person
        pose={{
          look: 'soldier',
          head: { rot: -24 },
          near: {
            pts: [
              [5, -128],
              [18, -108],
              [32, -104],
            ],
            hand: 'open',
            thumb: -1,
          },
        }}
        at={[704, FOOT]}
        scale={0.84}
        flip
      />
      {/* Diomedes, who brought her the news, looking up from the shore */}
      <Person pose={{ look: 'attendant', head: { rot: -22 } }} at={[392, FOOT - 4]} scale={0.84} />
    </g>
  )
}

export const deathInTheMonument: LinocutArt = { width: W, height: H, Draw: DeathInTheMonument }
