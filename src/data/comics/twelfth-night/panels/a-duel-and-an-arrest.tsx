import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gougeField, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, rapier } from './people'
import { OrchardTree, WallCoping, brickWall, footShadow, grassTufts, skyBars } from './act-3-garden'

/**
 * Act 3, Scene 4: "A duel and an arrest", the thirteenth moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1526, src/data/full-texts/twelfth-night.ts):
 *
 * - Sir Toby sends Sir Andrew to "Scout me for him at the corner of the
 *   orchard", and tells Cesario "thy intercepter ... attends thee at the
 *   orchard end". So the duel is at the orchard end of Olivia's garden: its
 *   fruit trees on the grass, the garden wall behind (./act-3-garden.tsx).
 * - The instant drawn is the officers' coming: "SIR ANDREW [Draws.] Pray God
 *   he keep his oath!" ... "VIOLA [Draws.] I do assure you 'tis against my
 *   will." ... "SIR TOBY [Draws.] Nay, if you be an undertaker, I am for
 *   you." ... "FIRST OFFICER This is the man; do thy office." / "SECOND
 *   OFFICER Antonio, I arrest thee at the suit / Of Count Orsino."
 * - Sir Andrew, the tallest man, his flaxen hair hanging straight, is
 *   terrified ("Pox on't, I'll not meddle with him"; "an I thought he had
 *   been valiant ... I'd have seen him damned ere I'd have challenged him"):
 *   he leans away, holds his sword out at arm's length and puts his other
 *   hand up.
 * - Sir Toby has drawn on Antonio, and lowers his point as the officers come:
 *   "I'll be with you anon."
 * - Cesario is Viola, who has drawn against her will ("A little thing would
 *   make me tell them how much I lack of a man"): her sword hangs point down
 *   at her side, and she turns to the stranger who took her part, her open
 *   hand out to him ("I'll make division of my present with you").
 * - Antonio stepped in for her, taking her for Sebastian: "Put up your sword.
 *   If this young gentleman / Have done offence, I take the fault on me."
 *   The officer knows his face "Though now you have no sea-cap on your head",
 *   so he is bareheaded. His sword is back in its scabbard ("I must obey"),
 *   and he holds out his hand to the youth: "Will you deny me now?"
 * - The First Officer takes him by the shoulder ("Take him away"); the Second
 *   points him out. The officers are the kit's: steel caps, plain jerkins,
 *   and one carries a watchman's bill upright, raised against no one.
 *
 * SAFEGUARDING. Swords are drawn but touch no one: every blade points at the
 * ground or into the empty air between the two sides, and nobody is struck.
 * Fabian is in the scene too ("O good Sir Toby, hold! Here come the
 * officers"), but he does nothing in this instant, and is not drawn, so that
 * the six who act can be read at panel size.
 *
 * The quotation is Viola's, a moment later, when Antonio has called her by
 * her brother's name. The people are cut from the kit (./people.tsx); nothing
 * is taken from a film, television or stage production. No spot colour: the
 * scene has nothing in it the red would stand for that would not read as
 * blood beside drawn swords.
 *
 * Seeds: 1301 (sky), 1302 (wall), 1303 (grass), 1304 (tufts), 1305, 1307 and
 * 1308 (the orchard trees).
 */

const W = 860
const H = 340
const FEET = 326
const WALL_TOP = 196
const WALL_BASE = 236
const TOBY_X = 96
const ANDREW_X = 214
const VIOLA_X = 420
const ANTONIO_X = 580
const OFFICER1_X = 662
const OFFICER2_X = 772

type Marks = {
  sky: string
  wall: string
  ground: string
  tufts: string
  shadows: string
}
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = skyBars(rng(1301), { x0: 0, x1: W, y0: 6, y1: WALL_TOP - 8 })
  const wall = brickWall(
    rng(1302),
    { x0: 0, x1: W, y0: WALL_TOP + 2, y1: WALL_BASE },
    (x) => clamp(0.3 + x / 1000),
    6.4,
  )
  const ground = gougeField(
    rng(1303),
    { x0: 0, x1: W, y0: WALL_BASE + 6, y1: H },
    (_x, y) => clamp(0.05 + ((y - WALL_BASE) / (H - WALL_BASE)) ** 2 * 0.3),
    { spacing: 6, len: [10, 40], gap: [10, 30], max: 1.8 },
  )
  const tufts = grassTufts(rng(1304), { x0: 0, x1: W, y0: WALL_BASE + 8, y1: H - 6 }, 120, [
    { x0: ANDREW_X - 30, x1: ANDREW_X + 40, y0: FEET - 14, y1: H },
    { x0: TOBY_X - 30, x1: TOBY_X + 40, y0: FEET - 14, y1: H },
    { x0: VIOLA_X - 30, x1: VIOLA_X + 36, y0: FEET - 14, y1: H },
    { x0: ANTONIO_X - 36, x1: ANTONIO_X + 30, y0: FEET - 14, y1: H },
    { x0: OFFICER1_X - 36, x1: OFFICER1_X + 30, y0: FEET - 14, y1: H },
    { x0: OFFICER2_X - 36, x1: OFFICER2_X + 30, y0: FEET - 14, y1: H },
  ])
  const shadows =
    footShadow(ANDREW_X, FEET, 34, -3) +
    footShadow(TOBY_X, FEET, 34, -3) +
    footShadow(VIOLA_X, FEET, 28, -3) +
    footShadow(ANTONIO_X, FEET, 30, -3) +
    footShadow(OFFICER1_X, FEET, 30, -3) +
    footShadow(OFFICER2_X, FEET, 30, -3)
  cached = { sky, wall, ground, tufts, shadows }
  return cached
}

/** The second officer's bill, upright in his far hand: a staff, and a hooked blade at its head. */
function Bill({ x, foot, top }: { x: number; foot: number; top: number }) {
  const blade = `M${x - 2} ${top + 26}L${x - 2} ${top + 8}L${x + 1} ${top}L${x + 4} ${top + 8}L${x + 4} ${top + 14}C${x + 12} ${top + 16} ${x + 16} ${top + 22} ${x + 16} ${top + 30}C${x + 11} ${top + 28} ${x + 7} ${top + 27} ${x + 4} ${top + 28}L${x + 4} ${top + 32}Z`
  return (
    <g>
      <path d={`M${x + 1} ${foot}V${top + 10}`} stroke={PAPER} strokeWidth={7} />
      <path d={blade} fill={PAPER} stroke={PAPER} strokeWidth={3.6} strokeLinejoin="round" />
      <path d={`M${x + 1} ${foot}V${top + 10}`} stroke={INK} strokeWidth={3.4} />
      <path d={blade} fill={INK} />
    </g>
  )
}

function ADuelAndAnArrest({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [430, 220], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <rect x={0} y={WALL_TOP} width={W} height={WALL_BASE - WALL_TOP} fill={PAPER} />
      <path d={m.wall} fill={INK} />
      <WallCoping x0={0} x1={W} top={WALL_TOP} />
      <rect x={0} y={WALL_BASE} width={W} height={3} fill={INK} />
      {/* the orchard at the end of the garden */}
      <OrchardTree r={rng(1305)} cx={158} cy={120} rx={40} ry={38} base={WALL_BASE + 14} />
      <OrchardTree r={rng(1307)} cx={506} cy={118} rx={44} ry={40} base={WALL_BASE + 12} />
      <OrchardTree r={rng(1308)} cx={716} cy={110} rx={40} ry={40} base={WALL_BASE + 20} />
      <path d={m.ground} fill={INK} />
      <path d={m.tufts} stroke={INK} strokeWidth={1.3} strokeLinecap="round" fill="none" />
      <path d={m.shadows} fill={INK} />

      {/* Sir Andrew, his sword held out at arm's length, leaning away from his man */}
      <Person
        at={[ANDREW_X, FEET]}
        scale={0.98}
        pose={{
          look: 'sir-andrew',
          body: { neck: [-18, -134], hip: [0, -70] },
          head: { rot: -16 },
          legs: {
            far: [
              [-3, -70],
              [-16, -38],
              [-18, -3],
            ],
            near: [
              [3, -70],
              [12, -36],
              [16, -3],
            ],
          },
          far: {
            pts: [
              [-22, -124],
              [4, -112],
              [28, -106],
            ],
            hand: 'grip',
            deg: 18,
          },
          near: {
            pts: [
              [-12, -124],
              [10, -116],
              [20, -136],
            ],
            hand: 'open',
            deg: -64,
            size: 13,
            thumb: -1,
          },
        }}
      >
        <path d={rapier([28, -106], 18, 80)} fill={PAPER} stroke={INK} strokeWidth={0.9} />
      </Person>

      {/* Sir Toby, his sword drawn on Antonio and lowered as the officers come */}
      <Person
        at={[TOBY_X, FEET]}
        scale={1}
        pose={{
          look: 'sir-toby',
          head: { rot: 2 },
          far: {
            pts: [
              [-4, -128],
              [-10, -100],
              [-6, -78],
            ],
            hand: 'mitt',
          },
          near: {
            pts: [
              [5, -128],
              [18, -106],
              [30, -92],
            ],
            hand: 'grip',
            deg: 64,
          },
        }}
      >
        <path d={rapier([30, -92], 64, 84)} fill={PAPER} stroke={INK} strokeWidth={0.9} />
      </Person>

      {/* Cesario, her sword lowered, turning to the stranger who took her part */}
      <Person
        at={[VIOLA_X, FEET]}
        scale={1.08}
        pose={{
          look: 'cesario',
          cloak: 6,
          far: {
            pts: [
              [-4, -128],
              [-10, -102],
              [-12, -80],
            ],
            hand: 'grip',
            deg: 92,
          },
          near: {
            pts: [
              [5, -128],
              [20, -112],
              [36, -116],
            ],
            hand: 'open',
            deg: -14,
            size: 12.5,
            thumb: -1,
          },
        }}
      >
        <path d={rapier([-12, -80], 92, 76)} fill={PAPER} stroke={INK} strokeWidth={0.9} />
      </Person>

      {/* the second officer's bill, behind him */}
      <Bill x={OFFICER2_X + 14} foot={FEET - 4} top={58} />

      {/* Antonio, held, his hand held out to the youth he takes for Sebastian */}
      <Person
        at={[ANTONIO_X, FEET]}
        flip
        pose={{
          look: 'antonio',
          bare: true,
          sword: true,
          far: {
            pts: [
              [-4, -128],
              [-8, -100],
              [-4, -76],
            ],
            hand: 'mitt',
          },
          near: {
            pts: [
              [5, -128],
              [22, -114],
              [40, -118],
            ],
            hand: 'open',
            deg: -8,
            thumb: -1,
          },
        }}
      />

      {/* the first officer, his hand on Antonio's shoulder */}
      <Person
        at={[OFFICER1_X, FEET]}
        flip
        pose={{
          look: 'officer',
          body: { neck: [6, -138], hip: [0, -70] },
          head: { rot: 6 },
          far: {
            pts: [
              [0, -128],
              [-4, -100],
              [0, -76],
            ],
            hand: 'mitt',
          },
          near: {
            pts: [
              [10, -128],
              [34, -112],
              [58, -126],
            ],
            hand: 'grip',
            deg: -20,
          },
        }}
      />

      {/* the second officer: "This is the man" */}
      <Person
        at={[OFFICER2_X, FEET]}
        flip
        pose={{
          look: 'officer',
          far: {
            pts: [
              [-4, -128],
              [-10, -112],
              [-14, -128],
            ],
            hand: 'grip',
            deg: -90,
          },
          near: {
            pts: [
              [5, -128],
              [22, -130],
              [38, -144],
            ],
            hand: 'point',
            deg: -24,
          },
        }}
      />
    </g>
  )
}

export const aDuelAndAnArrest: LinocutArt = { width: W, height: H, Draw: ADuelAndAnArrest }
