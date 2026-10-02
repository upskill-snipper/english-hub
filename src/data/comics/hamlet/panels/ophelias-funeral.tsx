import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { ChurchyardBack, GraveFront, GRAVE, H, W } from './churchyard'
import { flower } from './ophelia-mad-laertes-in-arms'
import { Person } from './people'

/**
 * Act 5, Scene 1: "Ophelia's funeral", the eighteenth moment in the guide's
 * timeline. The panel draws the moment of its quotation, when Hamlet comes
 * out from where he has been watching and names himself. Every detail is from
 * the scene in the held edition (src/data/full-texts/hamlet.ts, Project
 * Gutenberg #1524):
 *
 * - The churchyard and the grave are ./churchyard.tsx's, the same as in "The
 *   graveyard": this is the grave the Gravedigger was digging. "Enter priests,
 *   &c, in procession; the corpse of Ophelia, Laertes and Mourners following;
 *   King, Queen, their Trains". So on the far side of the grave, before the
 *   church, stand the Priest with his book, the Queen, the King and two
 *   mourners in veils, behind the heap of clay.
 * - SAFEGUARDING. Ophelia's body is never drawn: no coffin, no bier, nothing
 *   of her above the edge of the grave. LAERTES: "Hold off the earth a while,
 *   Till I have caught her once more in mine arms. [Leaps into the grave.]"
 *   So Laertes is in the grave, seen from the waist up, and the dark of the
 *   pit below him is all there is of what he has leapt down to.
 * - QUEEN: "[Scattering flowers.] Sweets to the sweet. Farewell." So flowers
 *   lie strewn along the far edge of the grave and on the heap, and the
 *   Queen holds her emptied hand out over the grave, open and palm down, as
 *   the Ghost's is cut in "The Ghost's command". The flowers are the spot
 *   colour: what the scene is about is a young woman buried with her "maiden
 *   strewments". They are her own flowers, cut as "Ophelia mad, Laertes in
 *   arms" cuts them: five petals round a paper heart, with an ink edge on the
 *   pale turf and a paper edge on the dark clay.
 * - HAMLET: "[Advancing.] What is he whose grief Bears such an emphasis? ...
 *   This is I, Hamlet the Dane. [Leaps into the grave.]" So Hamlet strides
 *   to the end of the grave with his hand on his breast, naming himself. He
 *   had hidden with Horatio ("Couch we awhile and mark"), so Horatio is
 *   behind him and reaches after him, as a few lines later he tries to quiet
 *   him: "Good my lord, be quiet."
 * - LAERTES: "[Grappling with him.] The devil take thy soul!" The struggle is
 *   not drawn. Laertes has turned in the grave towards Hamlet, his hand on
 *   its edge, frowning, his mouth open.
 * - The people are the kit's (./people.tsx). Laertes is drawn bareheaded in
 *   the grave and is known by his short pointed beard, which the kit gives
 *   him for when he is bareheaded. The Priest was added to the kit for this
 *   panel.
 *
 * The spot colour is on the flowers only. Laertes was first cut with the
 * kit's flush of anger on his cheek; on his face, tilted back in the grave,
 * the two red strokes read as streaks, and beside a grave that could be
 * taken for blood, so his anger is left to his brow and his open mouth.
 *
 * WHY THE FLOWERS ARE CUT AS THEY ARE (reviewed 2 October 2026). They were
 * first nineteen small blossoms of four round petals, scattered at random,
 * with a posy of the same in the Queen's fist. At phone width the blossoms
 * were a scatter of red specks along the edge of a grave and on the dark
 * clay, which reads at a glance as spatter, and the posy ran into her fist:
 * red on a hand, which the kit's rule forbids. So there are fewer of them,
 * larger, each one plainly a flower, set by hand clear of the people, and
 * her hand is empty: she has scattered them.
 *
 * Nothing is taken from a film or stage production. Seeds: the churchyard's
 * own; the flowers are placed by hand.
 */

/**
 * The strewn flowers, placed by hand: along the far lip of the grave, more of
 * them towards the Queen's end, where she stands, and none behind Laertes, so
 * that no red is beside his face or his hands; and a few on the clay.
 */
const LIP: Pt[] = [
  [474, GRAVE.far - 3],
  [568, GRAVE.far - 4],
  [592, GRAVE.far - 2],
  [614, GRAVE.far - 4],
  [636, GRAVE.far - 3],
  [656, GRAVE.far - 2],
  [672, GRAVE.far - 4],
]
const ON_HEAP: Pt[] = [
  [712, 286],
  [738, 271],
  [752, 292],
  [764, 274],
  [788, 291],
]
const FLOWER_SIZE = 1.3
const LIP_FLOWERS = LIP.map(([x, y]) => flower(x, y, FLOWER_SIZE))
const HEAP_FLOWERS = ON_HEAP.map(([x, y]) => flower(x, y, FLOWER_SIZE))

/** Strewn flowers in the spot colour, edged in `edge` so they stand off what they lie on. */
function Strewn({ flowers, edge }: { flowers: ReturnType<typeof flower>[]; edge: string }) {
  return (
    <>
      <path
        d={flowers.map((f) => f.petals).join('')}
        fill={RED}
        stroke={edge}
        strokeWidth={edge === PAPER ? 1 : 0.7}
      />
      <path d={flowers.map((f) => f.heart).join('')} fill={PAPER} />
    </>
  )
}

/** The Priest's book, open in his hands, in his frame. */
const BOOK = 'M14 -118L30 -122L33 -110L17 -106Z'
const BOOK_LINES = 'M18 -115L27.6 -117.6M19 -111.6L28.6 -114M23.4 -120L25.6 -108.2'

function OpheliasFuneral({ uid: _uid }: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [430, 190], push: 1.03 })}>
      <ChurchyardBack />

      {/* the far side of the grave: the Priest, the Queen, the King, two mourners */}
      <Person
        at={[628, 279]}
        scale={0.86}
        flip
        pose={{
          look: 'priest',
          eye: 'down',
          head: { rot: 8 },
          far: {
            pts: [
              [-4, -130],
              [6, -106],
              [16, -112],
            ],
            hand: 'grip',
            deg: -20,
          },
          near: {
            pts: [
              [5, -128],
              [14, -104],
              [30, -110],
            ],
            hand: 'grip',
            deg: -30,
          },
        }}
      >
        <path d={BOOK} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
        <path d={BOOK_LINES} fill="none" stroke={INK} strokeWidth={0.8} />
      </Person>
      <Person
        at={[680, 280]}
        scale={0.86}
        flip
        pose={{
          look: 'gertrude',
          brow: 'sorrow',
          head: { rot: 2 },
          far: {
            pts: [
              [-4, -126],
              [-4, -104],
              [6, -94],
            ],
          },
          // her hand emptied over the grave: "Sweets to the sweet. Farewell."
          near: {
            pts: [
              [5, -124],
              [16, -104],
              [30, -106],
            ],
            hand: 'open',
            deg: 14,
            thumb: -1,
          },
        }}
      />
      <Person
        at={[730, 279]}
        scale={0.86}
        flip
        pose={{
          look: 'claudius',
          brow: 'frown',
          far: {
            pts: [
              [-4, -130],
              [-8, -104],
              [-2, -84],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [12, -104],
              [10, -88],
            ],
          },
        }}
      />
      <Person
        at={[782, 281]}
        scale={0.84}
        flip
        pose={{
          look: 'lady',
          eye: 'down',
          head: { rot: 12 },
          near: {
            pts: [
              [5, -124],
              [10, -102],
              [4, -96],
            ],
          },
        }}
      />
      <Person
        at={[818, 282]}
        scale={0.84}
        flip
        pose={{
          look: 'lady',
          eye: 'down',
          head: { rot: 14 },
          near: {
            pts: [
              [5, -124],
              [12, -104],
              [6, -98],
            ],
          },
        }}
      />

      <Strewn flowers={LIP_FLOWERS} edge={INK} />

      {/* Laertes in the grave, turned on Hamlet, his hand on its edge */}
      <Person
        at={[522, 398]}
        scale={1.1}
        flip
        pose={{
          look: 'laertes',
          bare: true,
          brow: 'frown',
          mouth: 'open',
          head: { rot: -12 },
          far: {
            pts: [
              [-4, -130],
              [-10, -106],
              [-4, -86],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [22, -106],
              [44, -82],
            ],
            hand: 'open',
            deg: 22,
          },
        }}
      />
      <GraveFront />
      <Strewn flowers={HEAP_FLOWERS} edge={PAPER} />

      {/* Horatio, reaching after him */}
      <Person
        at={[262, 328]}
        scale={1.12}
        pose={{
          look: 'horatio',
          eye: 'wide',
          far: {
            pts: [
              [-4, -130],
              [-2, -104],
              [8, -90],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [20, -108],
              [40, -98],
            ],
            hand: 'open',
            deg: 24,
          },
        }}
      />
      {/* Hamlet, advancing, his hand on his breast: "This is I, Hamlet the Dane." */}
      <Person
        at={[404, 326]}
        scale={1.17}
        pose={{
          look: 'hamlet',
          brow: 'frown',
          mouth: 'open',
          head: { rot: 5 },
          legs: {
            far: [
              [-3, -70],
              [-11, -36],
              [-20, -3],
            ],
            near: [
              [3, -70],
              [13, -38],
              [19, -3],
            ],
          },
          far: {
            pts: [
              [-4, -130],
              [-14, -106],
              [-20, -86],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [22, -108],
              [17, -122],
            ],
            hand: 'open',
            deg: -150,
          },
        }}
      />
    </g>
  )
}

export const opheliasFuneral: LinocutArt = { width: W, height: H, Draw: OpheliasFuneral }
