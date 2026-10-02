import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { gouge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  HEAD_NANCY,
  NancyHead,
  OPEN_HAND,
  handAt,
  headAt,
  line,
  seatedGown,
  type Hand,
  type P,
  type Part,
} from './people'
import { ARMCHAIR, ChairShape, H, PolishedParlour, SIDE_CHAIR, TABLE, W } from './polished-parlour'

/**
 * Chapter 17: "Nancy's Sunday", the fourteenth moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/silas-marner.ts); the room is in ./polished-parlour.tsx,
 * with the sentences it is drawn from, and "The Stone-pit gives up its
 * secret" draws it from the same place an hour later.
 *
 * - "It was Godfrey's custom on a Sunday afternoon to do a little
 *   contemplative farming in a leisurely walk. Nancy seldom accompanied him";
 *   "when Priscilla was not with her, she usually sat with Mant's Bible before
 *   her, and after following the text with her eyes for a little while, she
 *   would gradually permit them to wander as her thoughts had already insisted
 *   on wandering." So Nancy is alone, seated at the round table with the Bible
 *   open before her, her hand on its page and her eyes lifted from it.
 * - Where her thoughts wander: "the absence of children from their hearth was
 *   dwelt on in her husband's mind as a privation"; "Dissatisfaction seated
 *   musingly on a childless hearth". So her eyes have gone across the room to
 *   his armchair by the hearth, empty while he is out at the Stone-pits ("I
 *   shall just take a turn to the fields against the Stone-pits, Nancy").
 * - She is the kit's Nancy (NancyHead: the short hair and the flat rings over
 *   the brow), small, upright and neat in a plain dark gown: "the costume,
 *   with its dainty neatness and purity" (Chapter 16). Her bloom "now comes but
 *   fitfully", and nothing in this hour calls it up, so her cheek is not
 *   flushed; the spot colour is the low fire and the autumn trees.
 * - Priscilla and Mr Lammeter have driven home in the gig, and Godfrey has
 *   walked out, so no one else is in the room.
 *
 * The quotation is hers, from the argument she goes over in her mind: her
 * refusal, twice, to adopt the weaver's child.
 *
 * Seeds: none of its own; the room's marks are the parlour's.
 */

// ── NANCY, seated at the table, facing the empty chair ─────────────────────
const N_HEAD = { at: [604, 150] as P, rot: -2, scale: 1.14 }
const N_NECK: P = [610, 177]
const N_HIP: P = [630, 240]
const N_KNEE: P = [590, 242]
/** Her near hand laid on the open page. */
const N_ARM: P[] = [
  [604, 188],
  [594, 222],
  [572, 208],
]
const N_HAND: Hand = { parts: OPEN_HAND, scale: 0.9, rot: -30 }

/** Mant's Bible, open on the table before her: two pages and the edge of its boards. */
const BIBLE = {
  boards: 'M522 205L548 199.6L574 203.6L573 210L548 205.6L523 211.4Z',
  pages: 'M524.4 204.2L547.6 199L548 204.8L525.4 210ZM548.4 199L571.6 202.8L571 208.8L548 204.8Z',
  lines:
    'M528 204L545 200.4M528.6 206L545.4 202.4M529.2 208L545.8 204.4' +
    'M551 200.6L568 203.4M551 202.6L568 205.4M551 204.6L567.6 207.4',
}

function NancysSunday({ uid }: ArtProps) {
  const nt = headAt(-1, N_HEAD.at, N_HEAD.rot, N_HEAD.scale)
  const nancy: Part[] = [
    { d: seatedGown(N_NECK, N_HIP, N_KNEE, 294, -1, { width: 22, lap: 11 }) },
    { d: HEAD_NANCY, t: nt },
  ]
  return (
    <g className="lc-push" style={timing({ origin: [520, 190], push: 1.03 })}>
      <PolishedParlour uid={uid} hour="afternoon" />

      {/* his armchair by the hearth, empty */}
      <ChairShape
        parts={{ fill: [ARMCHAIR.back, ARMCHAIR.seat, ARMCHAIR.arm], stroke: [ARMCHAIR.legs] }}
      />
      <path d={ARMCHAIR.cuts} fill="none" stroke={PAPER} strokeWidth={1.2} />
      <g fill={PAPER}>
        {ARMCHAIR.buttons.map(([x, y]) => (
          <circle key={y} cx={x} cy={y} r={1.8} />
        ))}
      </g>

      {/* the table, and the Bible open on it */}
      <ChairShape parts={{ fill: [TABLE.top, TABLE.pillar], stroke: [TABLE.feet] }} width={3.6} />
      <path d={BIBLE.boards} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
      <path d={BIBLE.pages} fill={PAPER} />
      <path d={BIBLE.lines} fill="none" stroke={INK} strokeWidth={0.7} />
      <path d="M548 199.2V205" stroke={INK} strokeWidth={0.9} />

      {/* her chair */}
      <ChairShape
        parts={{ fill: [SIDE_CHAIR.back, SIDE_CHAIR.seat], stroke: [SIDE_CHAIR.legs] }}
        width={4}
      />

      {/* Nancy, her eyes lifted from the page to the empty chair */}
      <Figure parts={nancy}>
        <NancyHead t={nt} />
        {/* the neat folds of her gown, and its high waist */}
        <path
          d={
            gouge(604, 196, 622, 196, 0.7) +
            gouge(608, 200, 600, 238, 0.7, 0.8) +
            gouge(574, 256, 578, 290, 0.8) +
            gouge(586, 254, 592, 290, 0.7)
          }
          fill={PAPER}
        />
      </Figure>
      <Figure
        parts={[
          { d: line(N_ARM), w: 7, sep: 1.2 },
          ...N_HAND.parts.map((q) => ({ ...q, t: handAt(N_ARM, -1, N_HAND) })),
        ]}
        halo={1.4}
      />
    </g>
  )
}

export const nancysSunday: LinocutArt = { width: W, height: H, Draw: NancysSunday }
