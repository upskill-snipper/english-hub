import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { gouge, n, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  CandleStand,
  FLOOR,
  Floor,
  H,
  NightWindow,
  W,
  candleGlow,
  candleLight,
  chamberMarks,
  type Bed,
} from './bedchamber'
import { OpenBed, linenTop, openBedMarks } from './open-bed'
import {
  FACE_EDGE,
  FACE_WOMAN,
  HEAD_WOMAN,
  LIT_BROW_W,
  LIT_EAR_W,
  LIT_EYE_W_DOWN,
  LIT_LINES_W,
  LIT_MOUTH_W,
  Person,
  type Pose,
} from './people'

/**
 * Act 5, Scene 2: "The murder", the fifteenth moment in the guide's
 * timeline. The picture is the scene's first moment, before anything happens,
 * and goes no further. Every detail is from the held edition
 * (src/data/full-texts/othello.ts):
 *
 * - "Cyprus. A Bedchamber in the castle." "Desdemona in bed asleep; a light
 *   burning." So it is the chamber of ./bedchamber.tsx, the room "Emilia
 *   speaks" and "Othello's last words" show, with its one candle on its tall
 *   stand, its flame the spot colour, and the bed in the same place; but the
 *   bed's curtains are still open (./open-bed.tsx), because Othello does not
 *   draw them until Emilia knocks ("let me the curtains draw").
 * - Desdemona lies asleep on her back under the white sheets ("Lay on my bed
 *   my wedding sheets", 4.2), covered to the chin, her eyes shut and her dark
 *   hair unpinned ("Prithee, unpin me", 4.3), spread on the linen. Her face is
 *   lit, as the kit lights every Venetian face (./people.tsx), and here the
 *   speech itself says why: "that whiter skin of hers than snow, / And smooth
 *   as monumental alabaster". Lying down is a pose `Person` cannot make, so she
 *   is cut from the kit's own pieces (HEAD_WOMAN, FACE_WOMAN and the lit
 *   features), her head turned to face up; only her hair spread on the linen
 *   is new, cut as the kit cuts HAIR_LOOSE.
 * - OTHELLO: "Put out the light, and then put out the light: / If I quench
 *   thee, thou flaming minister". So he stands apart from the bed, on the far
 *   side of the candle, his head bowed towards its flame as he speaks to it,
 *   and his near hand flat on his breast: "It is the cause, it is the cause,
 *   my soul". Nothing in his hands, and his sword is not drawn on him: the
 *   picture must not suggest how she dies.
 * - "Let me not name it to you, you chaste stars!" So the stars show in the
 *   narrow window behind him, as in the later panels.
 * - The door is shut: he unlocks it only when Emilia calls ("[Unlocks the
 *   door.]"). It is the doorway "Emilia speaks" shows open, cut to the same
 *   measures as ./bedchamber.tsx's OpenDoor.
 *
 * SAFEGUARDING, the play's own rules (../index.ts). The murder is never shown
 * and never implied: no hands near her, nobody near the bed, no pillow (her
 * head lies on the linen over the bolster, one white mass with the sheet),
 * nothing in Othello's hands. Desdemona is covered to the chin and nothing of
 * her is drawn but her sleeping face and her hair. The only red is the
 * candle's flame. Nothing is taken from a film or stage production.
 *
 * Seeds: 1501 (the wall and the floor), 1502 (the candle's light), 1503 (the
 * bed's hangings and coverlet).
 */

const FLAME: Pt = [372, 150]
const BED: Bed = { x0: 34, x1: 246, foot: 300, top: 44 }
const DOOR = { x0: 708, x1: 778, top: 120 }
const LT = linenTop(BED)

type Marks = {
  room: ReturnType<typeof chamberMarks>
  bed: ReturnType<typeof openBedMarks>
  glow: string
}
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = candleLight(FLAME)
  const hidden = (x: number, y: number) =>
    (x > BED.x0 - 20 && x < BED.x1 + 14 && y > BED.top - 4) ||
    (x > DOOR.x0 - 14 && x < DOOR.x1 + 14 && y > DOOR.top - 12)
  cached = {
    room: chamberMarks(1501, light, hidden),
    glow: candleGlow(1502, FLAME),
    bed: openBedMarks(1503, BED, light),
  }
  return cached
}

/**
 * The door shut and locked: the same arched doorway and stone surround as
 * ./bedchamber.tsx's OpenDoor, with the planked leaf closed in it, its two
 * iron straps and its lock.
 */
function ShutDoor({ x0, x1, top }: { x0: number; x1: number; top: number }) {
  const w = x1 - x0
  const r = w / 2
  const cx = (x0 + x1) / 2
  let stones = ''
  for (let k = 1; k < 7; k++) {
    const a = (Math.PI * k) / 7
    stones += gouge(
      cx - Math.cos(a) * (r + 1),
      top + r - Math.sin(a) * (r + 1),
      cx - Math.cos(a) * (r + 10),
      top + r - Math.sin(a) * (r + 10),
      0.9,
    )
  }
  let planks = ''
  for (let x = x0 + w / 5; x < x1 - 4; x += w / 5)
    planks += gouge(x, top + 8 + Math.abs(x - cx) * 0.4, x, FLOOR - 4, 0.9)
  return (
    <g>
      <path
        d={`M${n(x0 - 10)} ${FLOOR}V${n(top + r)}A${n(r + 10)} ${n(r + 10)} 0 0 1 ${n(x1 + 10)} ${n(top + r)}V${FLOOR}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={stones} fill={PAPER} />
      <path
        d={`M${n(x0)} ${FLOOR}V${n(top + r)}A${n(r)} ${n(r)} 0 0 1 ${n(x1)} ${n(top + r)}V${FLOOR}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={planks} fill={PAPER} />
      <path
        d={`M${n(x0 + 2)} ${n(top + r + 18)}H${n(x1 - 2)}M${n(x0 + 2)} ${FLOOR - 28}H${n(x1 - 2)}`}
        stroke={PAPER}
        strokeWidth={2.4}
      />
      {/* the lock plate and its keyhole */}
      <path
        d={`M${n(x1 - 16)} ${n((top + r + FLOOR) / 2 - 8)}h10v16h-10Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
      />
      <path
        d={`M${n(x1 - 11)} ${n((top + r + FLOOR) / 2 - 3)}v6`}
        stroke={INK}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </g>
  )
}

// ── Desdemona asleep ─────────────────────────────────────────────────────────

/** Her head, turned to face up, the crown towards the head of the bed: in the frame of the panel. */
const HEAD_T = 'translate(206 219) rotate(90) scale(-0.97 0.97)'

/**
 * Her unpinned hair, spread on the linen above her head and under it, in ink,
 * with strands cut in paper (HAIR_CUTS): the kit's HAIR_LOOSE laid down, as a
 * sleeper's hair lies. In the frame of the panel.
 */
const HAIR =
  'M196 236C192 228 194 214 202 206C210 199 222 198 230 203C238 207 244 214 246 222C248 228 248 234 246 237Z'
const HAIR_CUTS =
  gouge(214, 203, 240, 220, 0.6, -1.4) +
  gouge(224, 206, 244, 232, 0.6, -1) +
  gouge(206, 210, 226, 234, 0.55, 1.2) +
  gouge(234, 210, 244, 214, 0.5, -0.6)

/**
 * The white coverlet over her, from her shoulders to her feet: a long, low
 * mound on the linen, filled in paper down into the coverlet's fall over the
 * side rail, so that the two are one cloth (TOP is its upper edge, the only
 * line drawn round it), with the edge of the sheet turned down over it at her
 * neck and two long soft folds running the length of it.
 *
 * WHY NO FOLDS ACROSS IT (2 October 2026). The first cut had four folds
 * across the mound and an ink line where it met the fall, and at panel size
 * the white shape read as a body bound in a shroud, on a bed where a woman is
 * about to die. A sleeper's coverlet falls in folds along its length.
 */
const TOP =
  'M196 224C194 218 190 215 184 214C164 211 146 214 124 212C100 210 78 214 62 213C52 212 47 217 45 226'
const COVER = `${TOP}L44 ${LT + 8}H197Z`
const COVER_LINES =
  'M186 218C190 222 192 226 191 231' +
  'M176 222C150 221 122 220 96 222M150 226C128 225 104 226 80 227'

function Sleeper() {
  return (
    <g>
      {/* the linen over the bolster at the head of the bed */}
      <path
        d={`M150 ${LT}C150 226 160 222 176 222H240V${LT}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      {/* her hair spread on it, and her head, lit */}
      <g strokeLinejoin="round">
        <path d={HAIR} fill={PAPER} stroke={PAPER} strokeWidth={3.6} />
        <path d={HEAD_WOMAN} transform={HEAD_T} fill={PAPER} stroke={PAPER} strokeWidth={3.6} />
        <path d={HAIR} fill={INK} />
        <path d={HAIR_CUTS} fill={PAPER} />
        <path d={HEAD_WOMAN} transform={HEAD_T} fill={INK} />
        <g transform={HEAD_T}>
          <path d={FACE_WOMAN} fill={PAPER} stroke={INK} strokeWidth={FACE_EDGE} />
          <path d={LIT_EYE_W_DOWN + LIT_BROW_W} fill={INK} />
          <path
            d={LIT_LINES_W + LIT_MOUTH_W + LIT_EAR_W}
            fill="none"
            stroke={INK}
            strokeWidth={0.9}
            strokeLinecap="round"
          />
        </g>
      </g>
      {/* the white coverlet, drawn up to her chin: one cloth with its fall over the rail */}
      <path d={COVER} fill={PAPER} />
      <path d={TOP} fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
      <path d={COVER_LINES} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
    </g>
  )
}

// ── Othello ─────────────────────────────────────────────────────────────────

/**
 * Othello, flipped to face the candle and the bed beyond it: his head bowed
 * to the flame, his near hand flat on his breast, his far arm at his side.
 */
const OTHELLO: Pose = {
  look: 'othello',
  sword: false,
  eye: 'open',
  head: { rot: 12 },
  far: {
    pts: [
      [-3, -130],
      [-7, -104],
      [-5, -82],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [5, -130],
      [-1, -104],
      [13, -105],
    ],
    hand: 'open',
    deg: -96,
    thumb: 1,
    size: 16,
    spread: 18,
  },
}

function TheMurder({ uid }: ArtProps) {
  const m = marks()
  void uid
  return (
    <g className="lc-push" style={timing({ origin: [372, 190], push: 1.03 })}>
      <path d={m.room.wall} fill={PAPER} />
      <path d={m.glow} fill={PAPER} />
      <NightWindow x={486} top={56} w={30} h={92} />
      <ShutDoor x0={DOOR.x0} x1={DOOR.x1} top={DOOR.top} />
      <Floor marks={m.room} />
      <OpenBed b={BED} marks={m.bed} linen={<Sleeper />} />
      <CandleStand flame={FLAME} floor={306} />
      <Person pose={OTHELLO} at={[452, 318]} scale={1.12} flip />
    </g>
  )
}

export const theMurder: LinocutArt = { width: W, height: H, Draw: TheMurder }
