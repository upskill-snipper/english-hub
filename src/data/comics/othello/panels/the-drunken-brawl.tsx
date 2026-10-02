import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { archway, stoneCourses, voussoirs } from './garden'
import { SeatedMan } from './kneel'
import { Person, TorchFlame, rapier } from './people'

/**
 * Act 2, Scene 3: "The drunken brawl", the sixth moment in the guide's
 * timeline. The fight itself is over when the picture is taken: it is the
 * moment Othello, roused from his bed, stops it and dismisses Cassio. Every
 * detail is from the scene in the held edition (src/data/full-texts/othello.ts,
 * Project Gutenberg #1531):
 *
 * - "A Hall in the Castle." It is late at night: Iago says "'Tis not yet ten
 *   o' th' clock" before the drinking starts, and "By the mass, 'tis morning"
 *   when it is over. So a stone hall lit by one torch in an iron bracket by
 *   the door, its flame the spot colour, and every cut in the wall widest
 *   round it.
 * - It is a night of revels ("'Tis a night of revels. The gallants desire
 *   it"; "Enter ... Servant with wine"), and the herald of 2.2 has given
 *   leave for "bonfires" all over the town. So a long table holds a jug and
 *   cups, and through the window bonfires burn red on the roofs of the town.
 * - "[A bell rings.]" IAGO: "Who's that which rings the bell? ... The town
 *   will rise." OTHELLO: "Silence that dreadful bell, it frights the isle."
 *   So the town's alarm bell swings in its tower through the window, with
 *   rings of sound cut round it.
 * - CASSIO and MONTANO: "[They fight.]" ... MONTANO: "Zounds, I bleed still,
 *   I am hurt to the death." So Montano, the old governor (grey-bearded in
 *   the kit), sits hunched on a bench with a hand pressed to his side and his
 *   sword fallen on the floor before him; a cup and a stool lie knocked over.
 *   No wound and no blood are drawn, and nothing red is near him.
 * - Cassio "following him with determin'd sword" (Iago's account). So his
 *   sword is still drawn in his hand, but hanging point down to the floor,
 *   away from everyone; his head is hung and his eyes shut: "I pray you,
 *   pardon me; I cannot speak."
 * - IAGO: "I do not know. Friends all but now, even now". OTHELLO: "Honest
 *   Iago, that looks dead with grieving, Speak". So Iago stands behind
 *   Cassio with both hands held open to Othello, as if he had nothing to do
 *   with it. (Roderigo has run off to "cry a mutiny" and is not here.)
 * - OTHELLO: "Cassio, I love thee, But never more be officer of mine." So
 *   Othello stands upright before the door and points at Cassio. He does not
 *   lift a hand against anyone: "if I stir, Or do but lift this arm, the best
 *   of you Shall sink in my rebuke."
 * - "Enter Desdemona, attended." OTHELLO: "Look, if my gentle love be not
 *   rais'd up!" So Desdemona has come to the open door from the lit passage
 *   beyond, a hand at her breast: "What's the matter?"
 *
 * The people are the kit's (./people.tsx), Othello's face in ink and the
 * Venetians' lit; Montano sits as ./kneel.tsx seats a man, on the kit's own
 * upper body.
 *
 * Seeds: 601 (wall), 602 (joints), 603 (floor), 604 (torch rays), 605 (the
 * passage), 606 (the night sky), 607 and 608 (the bell's rings).
 */

const W = 860
const H = 340
const BACK = 258
const DOOR = { x0: 30, x1: 118, spring: 150 }
const TORCH: [number, number] = [158, 130]
const WIN = { x0: 652, x1: 752, spring: 96, sill: 178 }
const TABLE = { x0: 676, x1: 872, top: 234 }

type Marks = {
  wall: string
  joints: string
  passage: string
  floor: string
  floorShade: string
  torchRays: string
  stars: string
  rings: string
  roofs: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(601)
  // The hall is lit by the torch by the door and the light from the passage;
  // the far end, by the window, is dim.
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot((x - TORCH[0]) * 0.75, (y - TORCH[1]) * 1.1) / 330) * 0.95,
      clamp(1 - Math.hypot(x - 74, (y - 200) * 0.8) / 150) * 0.7,
      0.05,
    )
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: BACK }, light, {
    spacing: 6.8,
    len: [14, 58],
    gap: [6, 22],
    max: 3.8,
  })
  const st = stoneCourses(602, { x0: 0, x1: W, y0: 4, y1: BACK }, light, 24)
  // The passage beyond the door: lit stone, its courses cut in ink.
  const pr = rng(605)
  let passage = ''
  for (let y = DOOR.spring - 40; y < BACK; y += 9)
    passage += gouge(DOOR.x0, y + between(pr, -1, 1), DOOR.x1, y, 0.5 + (y / BACK) * 0.6)
  // The flagged floor: ink joints on paper by the light, ink taking over away from it.
  const fr = rng(603)
  let floor = ''
  const V: [number, number] = [300, 60]
  for (let xt = -900; xt < 1700; xt += 54) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (BACK - V[1]))
    floor += wedge(xt, BACK, xb, H, 0.9, 3)
  }
  for (const [y, w] of [
    [266, 1],
    [280, 1.5],
    [300, 2],
    [326, 2.6],
  ] as const)
    floor += gouge(-10, y + between(fr, -1, 1), W + 10, y + between(fr, -1, 1), w)
  let floorShade = ''
  for (let y = BACK + 2; y < BACK + 14; y += 3)
    floorShade += gouge(0, y, W, y, 2.2 - (y - BACK) * 0.14)
  for (let y = BACK + 4; y < H; y += 4.2) {
    let x = 380 + between(fr, -20, 20)
    while (x < W) {
      const dark = clamp((x - 400) / 420)
      const len = between(fr, 20, 60)
      if (fr() < 0.2 + dark * 0.8)
        floorShade += gouge(x, y, x + len, y + between(fr, -0.6, 0.6), 0.5 + dark * 1.8)
      x += len + between(fr, 4, 20) * (1.2 - dark)
    }
  }
  const torchRays = rays(rng(604), TORCH[0], TORCH[1] - 12, {
    from: 18,
    to: 104,
    every: 8.5,
    width: 2.6,
  })
  // The night through the window: stars, the roofs of the town, a belfry.
  const sr = rng(606)
  let stars = ''
  for (let i = 0; i < 14; i++) {
    const x = between(sr, WIN.x0 + 6, WIN.x1 - 6)
    const y = between(sr, WIN.spring - 40, WIN.spring + 20)
    const s = between(sr, 0.7, 1.4)
    stars += `M${n(x - s)} ${n(y)}h${n(2 * s)}M${n(x)} ${n(y - s)}v${n(2 * s)}`
  }
  const roofs =
    `M${WIN.x0} ${WIN.sill}V150L${WIN.x0 + 14} 140L${WIN.x0 + 28} 150V144L${WIN.x0 + 36} 138L${WIN.x0 + 44} 146` +
    `V112H${WIN.x0 + 50}V102L${WIN.x0 + 56} 92L${WIN.x0 + 62} 102V112H${WIN.x0 + 68}V146` +
    `L${WIN.x0 + 80} 136L${WIN.x0 + 92} 148V152L${WIN.x1} 146V${WIN.sill}Z`
  const rings =
    arcDashes(rng(607), WIN.x0 + 56, 108, 16, Math.PI * 1.05, Math.PI * 1.95, [4, 8], [3, 6]) +
    arcDashes(rng(608), WIN.x0 + 56, 108, 24, Math.PI * 1.1, Math.PI * 1.9, [4, 9], [4, 7])
  cached = { wall, joints: st.joints, passage, floor, floorShade, torchRays, stars, rings, roofs }
  return cached
}

/** The jug and the cups of the revels on the table, and a cup and a stool knocked over on the floor. */
const JUG =
  'M748 232C744 222 744 212 750 204L748 196H764L762 204C768 212 768 222 764 232Z' +
  'M766 206C774 206 776 216 768 222L767 218C771 216 771 210 765 210Z'
const CUPS = 'M786 232L783 216H797L794 232ZM810 232L807 218H819L816 232Z'
const CUP_DOWN = 'M400 318L414 312L418 322L404 326Z'
const STOOL =
  'M432 330L466 318L468 324L434 336ZM438 332L432 312L436 311L442 331ZM460 322L456 302L460 301L464 321Z'
/**
 * Montano's sword where it fell, on the flags between Iago and his feet. WHY
 * HERE (2 October 2026): it was first laid at y 334, under the block's edge
 * and the push-in's crop, so the alt text described a sword nobody could
 * see. It is knocked out of the paper floor with a thin ink halo.
 */
const FALLEN_SWORD = rapier([584, 318], 184, 74)

function TheDrunkenBrawl({ uid }: ArtProps) {
  const m = marks()
  const winClip = `${uid}-win`
  const doorD = archway(DOOR.x0, DOOR.x1, DOOR.spring, BACK)
  const winD = archway(WIN.x0, WIN.x1, WIN.spring, WIN.sill)
  return (
    <>
      <defs>
        <clipPath id={winClip}>
          <path d={winD} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [300, 200], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />
        <path d={m.joints} fill={PAPER} />
        <path d={m.torchRays} fill={PAPER} />
        {/* the door, open on the lit passage */}
        <path d={doorD} fill={PAPER} stroke={INK} strokeWidth={6} />
        <path d={m.passage} fill={INK} />
        <path
          d={voussoirs(DOOR.x0 - 3, DOOR.x1 + 3, DOOR.spring, 14, 9)}
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />
        {/* the torch in its iron bracket */}
        <path
          d={`M${TORCH[0] - 3} ${TORCH[1] + 30}L${TORCH[0] + 3} ${TORCH[1] + 30}L${TORCH[0] + 4.4} ${TORCH[1]}L${TORCH[0] - 4.4} ${TORCH[1]}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${TORCH[0] - 9} ${TORCH[1] + 22}H${TORCH[0] + 9}M${TORCH[0]} ${TORCH[1] + 30}V${TORCH[1] + 44}`}
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />
        <TorchFlame at={[TORCH[0], TORCH[1] + 1]} s={1.5} rays={false} />
        {/* the window on the night, the town and its alarm bell */}
        <path d={winD} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} />
        <g clipPath={`url(#${winClip})`}>
          <path d={m.stars} stroke={PAPER} strokeWidth={0.9} />
          <path d={m.roofs} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
          <path
            d={`M${WIN.x0 + 52} 104Q${WIN.x0 + 56} 96 ${WIN.x0 + 60} 104L${WIN.x0 + 61} 110H${WIN.x0 + 51}Z`}
            fill={PAPER}
          />
          <path d={m.rings} fill="none" stroke={PAPER} strokeWidth={1.2} />
          <path
            className="lc-flicker"
            d={`M${WIN.x0 + 16} 150C${WIN.x0 + 14} 142 ${WIN.x0 + 20} 138 ${WIN.x0 + 21} 130C${WIN.x0 + 25} 138 ${WIN.x0 + 30} 142 ${WIN.x0 + 27} 150Z`}
            fill={RED}
          />
          <path
            className="lc-flicker"
            style={timing({ delay: 0.4 })}
            d={`M${WIN.x0 + 78} 150C${WIN.x0 + 76} 144 ${WIN.x0 + 81} 140 ${WIN.x0 + 82} 134C${WIN.x0 + 85} 140 ${WIN.x0 + 89} 144 ${WIN.x0 + 86} 150Z`}
            fill={RED}
          />
        </g>
        <path d={`M${WIN.x0 - 6} ${WIN.sill}H${WIN.x1 + 6}`} stroke={PAPER} strokeWidth={5} />
        {/* the floor */}
        <rect x={0} y={BACK} width={W} height={H - BACK} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.floorShade} fill={INK} />
        {/* the long table of the revels, its jug, its cups and a candle */}
        <path
          d={`M${TABLE.x0} ${TABLE.top}H${TABLE.x1}V${TABLE.top + 10}H${TABLE.x0}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${TABLE.x0 + 12} ${TABLE.top + 10}V${H}M${TABLE.x0 + 150} ${TABLE.top + 10}V${H}`}
          stroke={PAPER}
          strokeWidth={10}
        />
        <path
          d={`M${TABLE.x0 + 12} ${TABLE.top + 10}V${H}M${TABLE.x0 + 150} ${TABLE.top + 10}V${H}`}
          stroke={INK}
          strokeWidth={7}
        />
        <path
          d={gouge(TABLE.x0 + 4, TABLE.top + 2.5, TABLE.x1, TABLE.top + 2.5, 1.2)}
          fill={PAPER}
        />
        <path d={JUG + CUPS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={gouge(752, 210, 752, 228, 0.8) + gouge(789, 219, 790, 229, 0.6)} fill={PAPER} />
        <path d="M818 232V214H826V232Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <TorchFlame at={[822, 214]} s={0.7} delay={0.3} />

        {/* Desdemona, raised from her bed by the bell, in the doorway */}
        <Person
          at={[78, 262]}
          scale={0.82}
          pose={{
            look: 'desdemona',
            far: {
              pts: [
                [-4, -126],
                [0, -104],
                [8, -96],
              ],
            },
            near: {
              pts: [
                [4, -124],
                [14, -110],
                [20, -122],
              ],
            },
          }}
        />
        {/* Montano on the bench by the table, hurt, a hand pressed to his side */}
        <path
          d="M606 288H716V294H606ZM612 294V326M708 294V326"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <SeatedMan
          uid={uid}
          id="montano"
          at={[664, 326]}
          scale={1.18}
          flip
          lean={10}
          pose={{
            look: 'montano',
            sword: false,
            eye: 'down',
            head: { rot: 12 },
            far: {
              pts: [
                [-4, -130],
                [-14, -110],
                [-24, -100],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [16, -108],
                [2, -96],
              ],
            },
          }}
        />
        {/* his sword, fallen; the cup and the stool knocked over in the fight */}
        <path d={FALLEN_SWORD} fill={INK} stroke={INK} strokeWidth={3.2} strokeLinejoin="round" />
        <path d={FALLEN_SWORD} fill={PAPER} stroke={INK} strokeWidth={0.9} />
        <path d={CUP_DOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={STOOL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        {/* Iago behind Cassio, his hands open: "I do not know." */}
        <Person
          at={[494, 312]}
          scale={1.1}
          flip
          pose={{
            look: 'iago',
            head: { rot: 4 },
            far: {
              pts: [
                [-4, -130],
                [6, -106],
                [22, -98],
              ],
              hand: 'open',
              deg: 16,
            },
            near: {
              pts: [
                [5, -128],
                [18, -106],
                [34, -100],
              ],
              hand: 'open',
              deg: 10,
            },
          }}
        />
        {/* Cassio, his head hung, his sword down: "I pray you, pardon me; I cannot speak." */}
        <Person
          at={[376, 330]}
          scale={1.22}
          flip
          pose={{
            look: 'cassio',
            sword: false,
            eye: 'down',
            head: { rot: 18 },
            far: {
              pts: [
                [-4, -130],
                [-2, -106],
                [6, -86],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [10, -104],
                [14, -84],
              ],
            },
          }}
        >
          <path d={rapier([15, -82], 96, 76)} fill={PAPER} stroke={INK} strokeWidth={0.8} />
        </Person>
        {/* Othello, roused from his bed: "But never more be officer of mine." */}
        <Person
          at={[196, 328]}
          scale={1.28}
          pose={{
            look: 'othello',
            far: {
              pts: [
                [-4, -130],
                [-6, -104],
                [4, -86],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [26, -118],
                [48, -118],
              ],
              hand: 'point',
              deg: -2,
            },
          }}
        />
      </g>
    </>
  )
}

export const theDrunkenBrawl: LinocutArt = { width: W, height: H, Draw: TheDrunkenBrawl }
