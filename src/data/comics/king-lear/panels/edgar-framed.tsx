import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, stoneWall } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Person, Sword } from './people'

/**
 * Act 2, Scene 1: "Edgar framed". The moment Edmund stages the fight, just
 * before Edgar runs. Edmund has heard his father coming, and says:
 *
 *   "In cunning I must draw my sword upon you: Draw: seem to defend yourself:
 *   now quit you well. Yield: come before my father. Light, ho, here! Fly,
 *   brother. Torches, torches!"
 *
 * Every detail is from the scene (the held edition, src/data/full-texts/
 * king-lear.ts):
 * - "A court within the Castle of the Earl of Gloucester", at night: "You
 *   have now the good advantage of the night." Edmund will tell his father
 *   that Edgar stood "conjuring the moon", and Kent finds the moon shining
 *   the same night (2.2: "though it be night, yet the moon shines"). So the
 *   court is walled in coursed stone, paved with flags, and the moon stands
 *   over the postern on the right.
 * - "In cunning I must draw my sword upon you: Draw: seem to defend
 *   yourself." Both brothers have drawn, and their blades meet. Edmund
 *   presses forward with his knowing smile (the kit's `mouth: 'smile'`);
 *   Edgar, who has done nothing ("I am sure on't, not a word"), falls back
 *   towards the postern, his free hand flung out behind him: "Fly, brother."
 * - "I hear my father coming ... Light, ho, here! ... Torches, torches!" and
 *   then "Enter Gloucester and Servants with torches." So the door behind
 *   Edmund opens on a lit passage, and two servants are coming down it with
 *   torches, small and far off, their flames the one red in the panel.
 *   Gloucester is not drawn: he has not yet come in, and when he does he
 *   asks "Now, Edmund, where's the villain?"
 *
 * Not drawn: the cut Edmund gives his own arm a moment later ("Some blood
 *   drawn on me would beget opinion"). Nothing in the panel is wounded, and
 *   there is no red on either blade.
 *
 * The brothers are the kit's ('edmund', 'edgar', ./people.tsx): Edmund's
 * short curls and short cloak, Edgar's straight hair to the shoulder, both
 * with the straight cross-hilted swords of the kit's old Britain, drawn, so
 * neither wears the kit's sheathed sword at his hip (`sword: false`, as the
 * duel in 5.3 has it): with it, each brother first held one sword and wore
 * another (the review, 2 October 2026). The
 * servants are the kit's 'servant', a third of his size. The coursed walls
 * and the flagged paving are cut with the Romeo and Juliet kit's stoneWall
 * and flagFloor, as other castle rooms on the site are. Nothing is taken from
 * a film or stage production.
 *
 * Seeds: 6201 (the court), 6202 (the paving's shade).
 */

const W = 860
const H = 340
/** The foot of the walls, where the paving begins. */
const GROUND = 262
/** The top of the curtain wall between the tower and the gatehouse. */
const WALL_TOP = 96
/** The moon, over the postern. */
const MOON: [number, number] = [662, 46]
/** The door in the tower, open on the lit passage. */
const ARCH = 'M50 262V178C50 148 72 126 100 126C128 126 150 148 150 178V262Z'

type Marks = {
  sky: string
  halo: string
  wall: { cuts: string; joints: string }
  tower: { cuts: string; joints: string }
  floor: string
  shade: string
  passage: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(6201)
  // Two lights on the walls: the door on the left, where the torches are
  // coming, and the moon on the right. The middle of the wall, behind the
  // brothers, is left darker and quieter so their outlines read.
  const light = (x: number, y: number) => {
    const torch = clamp(1 - Math.hypot((x - 100) * 0.8, (y - 214) * 1.2) / 230)
    const moon = clamp(1 - Math.hypot((x - MOON[0]) * 0.8, y - MOON[1]) / 260) * 0.75
    return Math.max(torch, moon, 0.04)
  }
  // The sky, lit round the moon, so the battlements stand dark against it.
  const sky = gougeField(
    r,
    { x0: 180, x1: 770, y0: 6, y1: WALL_TOP + 2 },
    (x, y) => clamp(1.05 - Math.hypot((x - MOON[0]) * 0.55, (y - MOON[1]) * 1.3) / 230, 0.05),
    { spacing: 5, len: [16, 70], gap: [6, 20], max: 4.6 },
  )
  const halo = [27, 33]
    .map((rad) => arcDashes(r, MOON[0], MOON[1], rad, 0, Math.PI * 2, [5, 14], [4, 9]))
    .join('')
  const wall = stoneWall(r, { x0: 200, x1: 760, y0: WALL_TOP + 8, y1: GROUND }, light, 28)
  const tower = stoneWall(r, { x0: 0, x1: 200, y0: 4, y1: GROUND }, light, 28)
  const floor = flagFloor(r, W, H, GROUND, [300, 120], 64, 6)
  // The paving darkens away from the door, cut as ink rows that thicken.
  const s = rng(6202)
  let shade = ''
  for (let y = GROUND + 6; y < H; y += 4.2) {
    let x = 170 + between(s, 0, 30)
    while (x < W) {
      const len = between(s, 30, 90)
      const d = clamp((x - 190) / 640)
      if (s() < 0.2 + d * 0.7)
        shade += gouge(x, y, x + len, y + between(s, -0.5, 0.5), 0.3 + d * 1.6)
      x += len + between(s, 6, 20)
    }
  }
  // The passage beyond the door: its floor and vault running away, lit.
  const passage =
    'M66 262L86 226M134 262L114 226M86 226H114M86 226V176C86 166 92 160 100 160C108 160 114 166 114 176V226' +
    'M70 238H130M76 250H124'
  cached = { sky, halo, wall, tower, floor, shade, passage }
  return cached
}

/** A servant coming down the passage with a torch held up, far off and small. */
function TorchBearer({ at, delay }: { at: [number, number]; delay: number }) {
  const s = 0.3
  // The flame, at the top of the torch the near hand holds up, in the
  // figure's frame (see the arm below).
  const top: [number, number] = [at[0] + 26 * s, at[1] - 180 * s]
  return (
    <g>
      <Person
        pose={{
          look: 'servant',
          near: {
            pts: [
              [4, -128],
              [18, -142],
              [22, -160],
            ],
            hand: 'grip',
            deg: -80,
          },
        }}
        at={at}
        scale={s}
      >
        <path d="M24 -150L27 -186" stroke={INK} strokeWidth={4} strokeLinecap="round" />
      </Person>
      <path
        className="lc-flicker"
        style={timing({ dur: 0.8, delay })}
        d={`M${n(top[0])} ${n(top[1] + 2)}c-3.6 -3.4 -3 -8 0 -13c3 5 3.6 9.6 0 13Z`}
        fill={RED}
      />
    </g>
  )
}

function EdgarFramed({ uid }: ArtProps) {
  const m = marks()
  const archClip = `${uid}-arch`
  return (
    <>
      <defs>
        <clipPath id={archClip}>
          <path d={ARCH} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [500, 200], push: 1.03 })}>
        {/* the night sky over the court, and the moon */}
        <path d={m.sky} fill={PAPER} />
        <circle cx={MOON[0]} cy={MOON[1]} r={18} fill={PAPER} />
        <path d={m.halo} fill="none" stroke={PAPER} strokeWidth={LINE.hairline} />
        {/* the curtain wall, its battlements dark against the moonlit sky */}
        <path
          d={
            `M200 ${WALL_TOP}` +
            Array.from({ length: 16 }, (_, k) => {
              const x = 206 + k * 34
              return `H${x}V${WALL_TOP - 14}H${x + 18}V${WALL_TOP}`
            }).join('') +
            `H760V${GROUND}H200Z`
          }
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.wall.cuts} fill={PAPER} />
        <path d={m.wall.joints} fill={PAPER} />
        {/* the tower on the left, its door open on the lit passage */}
        <rect x={0} y={0} width={200} height={GROUND} fill={INK} />
        <path d={m.tower.cuts} fill={PAPER} />
        <path d={m.tower.joints} fill={PAPER} />
        <path d="M200 0V262" stroke={PAPER} strokeWidth={LINE.bold} />
        <path d={ARCH} fill={PAPER} stroke={INK} strokeWidth={9} />
        <path d={ARCH} fill="none" stroke={PAPER} strokeWidth={2.4} />
        <g clipPath={`url(#${archClip})`}>
          <path d={m.passage} fill="none" stroke={INK} strokeWidth={1.4} />
          <TorchBearer at={[92, 236]} delay={0.5} />
          <TorchBearer at={[112, 240]} delay={0.7} />
        </g>
        {/* the postern on the right, open on the dark */}
        <rect x={760} y={20} width={100} height={GROUND - 20} fill={INK} />
        <path d="M760 20V262M760 20H860" stroke={PAPER} strokeWidth={LINE.carve} fill="none" />
        <path
          d="M778 262V198C778 182 790 170 804 170C818 170 830 182 830 198V262Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={4}
        />
        {/* the paving */}
        <rect x={0} y={GROUND} width={W} height={H - GROUND} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.shade} fill={INK} />

        {/* Edmund, pressing the staged attack, smiling */}
        <Person
          pose={{
            look: 'edmund',
            sword: false,
            mouth: 'smile',
            head: { rot: -3 },
            body: { neck: [8, -134], hip: [0, -70] },
            legs: {
              far: [
                [-2, -70],
                [-16, -38],
                [-32, -4],
              ],
              near: [
                [3, -70],
                [22, -42],
                [26, -3],
              ],
            },
            far: {
              pts: [
                [4, -126],
                [-10, -104],
                [-22, -94],
              ],
              hand: 'open',
            },
            near: {
              pts: [
                [10, -126],
                [28, -118],
                [42, -128],
              ],
              hand: 'grip',
              deg: -46,
            },
          }}
          at={[398, 326]}
          scale={1.1}
        >
          <Sword grip={[42, -128]} angle={-46} len={86} />
        </Person>

        {/* Edgar, falling back towards the postern, sword up, bewildered */}
        <Person
          pose={{
            look: 'edgar',
            mouth: 'open',
            head: { rot: 5 },
            body: { neck: [-8, -134], hip: [0, -70] },
            legs: {
              far: [
                [-3, -70],
                [-16, -38],
                [-28, -3],
              ],
              near: [
                [3, -70],
                [10, -38],
                [14, -3],
              ],
            },
            far: {
              pts: [
                [-10, -126],
                [-26, -116],
                [-42, -120],
              ],
              hand: 'open',
            },
            near: {
              pts: [
                [-4, -126],
                [12, -128],
                [24, -144],
              ],
              hand: 'grip',
              deg: -40,
            },
          }}
          at={[592, 326]}
          scale={1.1}
          flip
        >
          <Sword grip={[24, -144]} angle={-40} len={84} />
        </Person>
      </g>
    </>
  )
}

export const edgarFramed: LinocutArt = { width: W, height: H, Draw: EdgarFramed }
