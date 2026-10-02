import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  COLLAR,
  Figure,
  HEAD_MARY,
  HEAD_WATSON,
  MARY_CROWN,
  MARY_CROWN_LINES,
  MARY_CUTS,
  MARY_HAIR,
  MARY_HAIR_LINES,
  MARY_PUPIL,
  OPEN_HAND,
  PaperHands,
  SHAKE_HAND,
  WATSON_CUTS,
  WATSON_FLUSH,
  WATSON_HAIR,
  WATSON_PUPIL,
  dressStanding,
  floorBoards,
  gent,
  handAt,
  headAt,
  type P,
  type Part,
} from './people'

/**
 * Chapter 11, "The Great Agra Treasure": "The empty box", the thirteenth
 * moment in the guide's timeline. The panel is the end of the chapter, in Mrs
 * Cecil Forrester's drawing-room, the box open and empty and Watson turned
 * from it to Mary. Every detail is from the text:
 *
 * - "A quarter of an hour's drive brought us to Mrs. Cecil Forrester's. The
 *   servant seemed surprised at so late a visitor"; "I knew that night". So it
 *   is night, and the window is dark.
 * - "She was seated by the open window, dressed in some sort of white
 *   diaphanous material, with a little touch of scarlet at the neck and waist.
 *   The soft light of a shaded lamp fell upon her as she leaned back in the
 *   basket chair, playing over her sweet, grave face, and tinting with a dull,
 *   metallic sparkle the rich coils of her luxuriant hair. One white arm and
 *   hand drooped over the side of the chair"; "At the sound of my foot-fall
 *   she sprang to her feet". So the basket chair stands empty by the open
 *   window, and Mary stands in a white dress cut in paper, her arms white,
 *   the spot colour a sash at her waist (see SASH for her neck), and her
 *   fair hair bare, drawn back to the knot the kit gives her (MARY_HAIR), with
 *   the crown the turban covers elsewhere (MARY_CROWN, cut first for this
 *   panel and shared with "Mary's indifference to the fortune"). Her "large
 *   blue eyes" are left to the words: the print has no blue.
 * - "putting down the box upon the table"; "'What a pretty box!' she said ...
 *   'This is Indian work, I suppose?' 'Yes; it is Benares metal-work.'";
 *   "There was in the front a thick and broad hasp, wrought in the image of a
 *   sitting Buddha. Under this I thrust the end of the poker and twisted it
 *   outward as a lever. The hasp sprang open with a loud snap. With trembling
 *   fingers I flung back the lid"; "The iron-work was two-thirds of an inch
 *   thick all round ... not one shred or crumb of metal or jewelry lay within
 *   it. It was absolutely and completely empty." So the iron box stands on
 *   the table under the lamp, its lid flung back, the hasp hanging open, its
 *   thick walls cut in paper at the rim, and its inside lit and bare; Mrs
 *   Forrester's poker lies on the table in front of it.
 * - "'Because you are within my reach again,' I said, taking her hand. She
 *   did not withdraw it"; "'Then I say, "Thank God," too,' she whispered, as
 *   I drew her to my side. Whoever had lost a treasure, I knew that night that
 *   I had gained one." So Watson has his back to the box and holds Mary's
 *   white hand in his, and she looks up at him. He is moved, so the spot
 *   colour flushes his cheekbone (WATSON_FLUSH); he is bareheaded indoors.
 *
 * Seeds: 1301 (the wall), 1302 (the floor), 1303 (the lamp's light), 1304 (the
 * night through the window).
 */

const W = 860
const H = 340
const FLOOR = 262
/** The shaded lamp on the table: the light of the room. */
const LAMP: P = [300, 132]

type Marks = { wall: string; floor: string; glow: string; night: string; weave: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The room is lit by the shaded lamp alone: the wall is cut round it.
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot((x - LAMP[0]) * 0.8, (y - LAMP[1] - 30) * 1.2) / 330) ** 1.2,
      0.04,
    )
  const wall = gougeField(rng(1301), { x0: 0, x1: W, y0: 6, y1: FLOOR - 2 }, light, {
    spacing: 6.2,
    len: [14, 50],
  })
  const floor = floorBoards(rng(1302), W, H, FLOOR, [430, 90], 34)
  const glow = rays(rng(1303), LAMP[0], LAMP[1] + 14, { from: 26, to: 92, every: 9, width: 2.2 })
  // A few stars in the night through the open window.
  const r = rng(1304)
  let night = ''
  for (let i = 0; i < 9; i++) {
    const x = between(r, 52, 168)
    const y = between(r, 40, 120)
    const s = between(r, 0.7, 1.4)
    night += `M${n(x - s)} ${n(y)}a${n(s)} ${n(s)} 0 1 0 ${n(2 * s)} 0a${n(s)} ${n(s)} 0 1 0 ${n(-2 * s)} 0Z`
  }
  // The weave of the basket chair: paper lines both ways.
  let weave = ''
  for (let x = 96; x < 196; x += 6) weave += `M${x} 170L${x + 30} 260`
  for (let x = 96; x < 196; x += 6) weave += `M${x + 30} 170L${x} 260`
  cached = { wall, floor, glow, night, weave }
  return cached
}

// ── The window, the empty basket chair ──────────────────────────────────────
const WIN = { x: 44, y: 26, w: 130, h: 182 }
/** The basket chair in profile, facing right: a rounded wicker back, the seat, the skirt. */
const CHAIR =
  'M100 262C98 230 96 196 102 172C106 158 120 156 124 168C126 184 126 204 128 214H186C192 214 194 220 192 228L188 262Z'

// ── The table, the lamp, the box ────────────────────────────────────────────
const TABLE_TOP = 'M252 214H462V222H252Z'
const TABLE_LEGS = 'M264 222L260 300M450 222L454 300M268 270H446'
/** The lamp: its base and column on the table, and its shade. */
const LAMP_BASE = 'M288 214C288 206 292 202 300 202C308 202 312 206 312 214Z'
const LAMP_COLUMN = 'M297 202V148H303V202Z'
const LAMP_SHADE = 'M278 146L288 116H312L322 146Z'

/**
 * The iron box, seen from a little above so its inside shows: the front, the
 * end, the top of its thick walls cut in paper, the bare inside lit by the
 * lamp (the back wall, the floor and the line where they meet, and nothing
 * else), the lid flung back on its hinge, and the hasp, "wrought in the image
 * of a sitting Buddha", hanging open.
 */
const BOX_FRONT = 'M352 214V184H432V214Z'
const BOX_END = 'M432 184L450 156V186L432 214Z'
/** the top of the walls, "two-thirds of an inch thick all round", round the opening */
const BOX_TOP = 'M352 184L370 156H450L432 184Z'
/** the opening, and the bare inside it */
const BOX_INSIDE = 'M358.4 180.6L372.6 159.4H443.6L429.4 180.6Z'
/** the back wall inside, in shadow under the rim, and the floor below it */
const BOX_BACK_WALL = 'M372.6 159.4H443.6L439.6 166.4H368Z'
/** the inner corners, and where the back wall meets the floor */
const BOX_INSIDE_LINES = 'M368 166.4H439.6M368 166.4L358.4 180.6M439.6 166.4L443.6 159.4'
const BOX_LID = 'M370 156L366 114L446 110L450 156Z'
const BOX_LID_CUTS =
  gouge(372, 150, 369, 120, 0.7) +
  gouge(446, 150, 443, 116, 0.7) +
  gouge(372, 120, 441, 116, 0.7) +
  gouge(373, 146, 444, 144, 0.7) +
  gouge(388, 137, 428, 134, 0.6) +
  gouge(392, 128, 424, 126, 0.6)
const BOX_FRONT_CUTS =
  gouge(355, 188, 429, 188, 0.7) +
  gouge(355, 210, 429, 210, 0.7) +
  gouge(364, 193, 364, 206, 0.55) +
  gouge(420, 193, 420, 206, 0.55)
/** The hasp, sprung open and hanging: a sitting figure cut on a plate. */
const HASP = 'M386 186H398V204Q392 209 386 204Z'
const HASP_FIGURE =
  'M390.6 190.4a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0ZM388.6 199.6Q392.2 194.8 395.8 199.6L396.6 203H387.8Z'
/** Mrs Forrester's poker, laid on the table in front of the box: a ring handle and a hooked end. */
const POKER = 'M268 218L350 216'
const POKER_END = 'M350 216L357 214L359 210'

// ── Watson, his back to the box, her hand in his ────────────────────────────
const WAT_HEAD = { d: HEAD_WATSON, at: [528, 102] as P, rot: 10, scale: 1.3 }
const WAT_HOLD: P[] = [
  [534, 148],
  [554, 184],
  [580, 194],
]
const WATSON: Part[] = gent({
  facing: 1,
  neck: [524, 136],
  hip: [514, 214],
  head: WAT_HEAD,
  body: { width: 34, hem: 44, flare: 8 },
  arm: 9,
  leg: 10,
  near: {
    arm: WAT_HOLD,
    leg: [
      [518, 214],
      [530, 266],
      [536, 318],
    ],
    hand: { parts: OPEN_HAND, scale: 1.05, rot: -14 },
  },
  far: {
    arm: [
      [518, 148],
      [520, 186],
      [530, 214],
    ],
    leg: [
      [510, 214],
      [500, 266],
      [494, 318],
    ],
  },
})

// ── Mary, facing him, looking up, her white hand in his ─────────────────────
/**
 * Mary is drawn here rather than with Mary() from the kit, because her dress
 * is the one white dress in the novel; her head, hair, crown and features are
 * the kit's own, so she is the same woman as in every other panel.
 */
const MARY_HEAD = { at: [628, 126] as P, rot: 12, scale: 1.12 }
const MARY_NECK: P = [626, 156]
const MARY_WAIST: P = [630, 214]
const MARY_DRESS = dressStanding(MARY_NECK, MARY_WAIST, 318, -1)
const MARY_HOLD: P[] = [
  [620, 166],
  [612, 188],
  [598, 190],
]
const MARY_OTHER: P[] = [
  [632, 166],
  [638, 196],
  [632, 220],
]
/**
 * "a little touch of scarlet at the neck and waist": the sash at her waist is
 * the spot colour. The touch at her neck is left to the words: tried as a
 * small bow, at panel size it read as a red mark at the throat of a white
 * dress, which a reader could take for a wound.
 */
const SASH = 'M615 208C622 206 634 206 643 208L644 216C634 214 622 214 614 216Z'
const SASH_ENDS = 'M637 215L640 236L645 235L642 215ZM642 215L648 232L652 230L646 214Z'
/** The fall of the white stuff: fine folds in ink down the skirt and the bodice. */
const DRESS_FOLDS =
  'M622 222C618 252 614 282 610 314M630 222C630 254 630 286 630 316M638 222C642 252 646 284 650 316M618 172C618 186 620 198 622 206M632 170C634 184 634 196 634 206'

function TheEmptyBox({ uid }: ArtProps) {
  const m = marks()
  const winClip = `${uid}-win`
  const chairClip = `${uid}-chair`
  const wt = headAt(1, WAT_HEAD.at, WAT_HEAD.rot, WAT_HEAD.scale)
  const mt = headAt(-1, MARY_HEAD.at, MARY_HEAD.rot, MARY_HEAD.scale)
  const line = (a: P[]) => 'M' + a.map(([x, y]) => `${x} ${y}`).join('L')
  const maryHand = { parts: SHAKE_HAND, scale: 0.86, rot: 4 }
  return (
    <>
      <defs>
        <clipPath id={winClip}>
          <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} />
        </clipPath>
        <clipPath id={chairClip}>
          <path d={CHAIR} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [470, 180], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={FLOOR - 4} width={W} height={4} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the open window on the night */}
        <rect x={WIN.x - 9} y={WIN.y - 9} width={WIN.w + 18} height={WIN.h + 18} fill={PAPER} />
        <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} fill={INK} />
        <g clipPath={`url(#${winClip})`}>
          <path d={m.night} fill={PAPER} />
        </g>
        <path
          d={`M${WIN.x} ${WIN.y + 72}H${WIN.x + WIN.w}M${WIN.x + WIN.w / 2} ${WIN.y}V${WIN.y + 72}M${WIN.x} ${WIN.y + 36}H${WIN.x + WIN.w}`}
          stroke={PAPER}
          strokeWidth={3.4}
        />
        <rect x={WIN.x - 14} y={WIN.y + WIN.h + 4} width={WIN.w + 28} height={6} fill={PAPER} />

        {/* the basket chair, empty: she has sprung to her feet */}
        <path d={CHAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${chairClip})`}>
          <path d={m.weave} stroke={PAPER} strokeWidth={0.8} />
        </g>
        <path d="M128 214H188" stroke={PAPER} strokeWidth={2.4} />

        {/* the lamp's soft light */}
        <path d={m.glow} fill={PAPER} />

        {/* the table and the lamp */}
        <path d={TABLE_LEGS} stroke={INK} strokeWidth={5} fill="none" />
        <path d={TABLE_TOP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={LAMP_BASE} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={LAMP_COLUMN} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path
          d={LAMP_SHADE}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={gouge(284, 140, 316, 140, 0.9)} fill={PAPER} />
        <path d="M282 148H318" stroke={PAPER} strokeWidth={2.2} />

        {/* the iron box, its lid flung back, absolutely and completely empty */}
        <path
          d={BOX_LID}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={BOX_LID_CUTS} fill={PAPER} />
        <path
          d={BOX_END}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={BOX_TOP} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
        <path d={BOX_INSIDE} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
        <path d={BOX_BACK_WALL} fill={INK} />
        <path d={gouge(376, 162.6, 436, 162.6, 0.5)} fill={PAPER} />
        <path d={BOX_INSIDE_LINES} fill="none" stroke={INK} strokeWidth={0.9} />
        <path d={BOX_FRONT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={BOX_FRONT_CUTS} fill={PAPER} />
        <path d={HASP} fill={PAPER} stroke={INK} strokeWidth={1} />
        <path d={HASP_FIGURE} fill={INK} />

        {/* the poker, laid down in front of it */}
        <path
          d={POKER + POKER_END}
          stroke={PAPER}
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d={POKER + POKER_END}
          stroke={INK}
          strokeWidth={3.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx={264} cy={218} r={5.4} fill="none" stroke={PAPER} strokeWidth={5.6} />
        <circle cx={264} cy={218} r={5.4} fill="none" stroke={INK} strokeWidth={2.6} />

        {/* Watson, turned from the box to her */}
        <Figure parts={WATSON}>
          <g transform={wt}>
            <path d={WATSON_CUTS + WATSON_HAIR + COLLAR} fill={PAPER} />
            <path d={WATSON_PUPIL} fill={INK} />
            <path
              d={WATSON_FLUSH}
              fill="none"
              stroke={RED}
              strokeWidth={2.2}
              strokeLinecap="round"
            />
          </g>
          <path
            d={gouge(516, 152, 508, 214, 0.9, 1.2) + gouge(530, 230, 540, 300, 0.8, -1)}
            fill={PAPER}
          />
        </Figure>

        {/* Mary, in white */}
        <path d={line(MARY_OTHER)} stroke={INK} strokeWidth={9} strokeLinecap="round" fill="none" />
        <path
          d={line(MARY_OTHER)}
          stroke={PAPER}
          strokeWidth={6}
          strokeLinecap="round"
          fill="none"
        />
        <path d={MARY_DRESS} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
        <path d={DRESS_FOLDS} fill="none" stroke={INK} strokeWidth={0.8} strokeLinecap="round" />
        <path d={SASH} fill={RED} />
        <path d={SASH_ENDS} fill={RED} />
        <path d={line(MARY_HOLD)} stroke={INK} strokeWidth={9} strokeLinecap="round" fill="none" />
        <path
          d={line(MARY_HOLD)}
          stroke={PAPER}
          strokeWidth={6}
          strokeLinecap="round"
          fill="none"
        />
        <g transform={mt}>
          <path d={HEAD_MARY} fill={INK} stroke={PAPER} strokeWidth={1.6} strokeLinejoin="round" />
          <path d={MARY_HAIR + MARY_CROWN} fill={PAPER} stroke={INK} strokeWidth={0.8} />
          <path d={MARY_HAIR_LINES + MARY_CROWN_LINES} fill="none" stroke={INK} strokeWidth={0.8} />
          <path d={MARY_CUTS} fill={PAPER} />
          <path d={MARY_PUPIL} fill={INK} />
        </g>

        {/* her white hand in his */}
        <PaperHands hands={[{ parts: maryHand.parts, t: handAt(MARY_HOLD, -1, maryHand) }]} />
      </g>
    </>
  )
}

export const theEmptyBox: LinocutArt = { width: W, height: H, Draw: TheEmptyBox }
