import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng } from '@/components/comics/linocut/carve'

import {
  Buttons,
  COAT,
  COAT_COLLAR,
  COLLAR_ROLL,
  CRAVAT,
  CRAVAT_FOLDS,
  CRAVAT_KNOT,
  EarCut,
  JAW,
  LAPEL_FAR,
  LAPEL_NEAR,
  MAN_EAR,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  OLD_HAIR,
  OLD_HAIR_PTS,
  PH,
  PW,
  SHIRT_POINT,
  VEST,
  ageLines,
  coatFolds,
  combedFromCrown,
  napeShade,
  once,
  placing,
  portraitGround,
  PortraitRule,
} from './common'

/**
 * Mr Bennet, from what the novel says of his mind and his habits, because it
 * says nothing of his looks:
 *
 *   "Mr. Bennet was so odd a mixture of quick parts, sarcastic humour,
 *   reserve, and caprice, that the experience of three and twenty years had
 *   been insufficient to make his wife understand his character." (Chapter 1)
 *
 *   "In his library he had been always sure of leisure and tranquillity"
 *   (Chapter 15)
 *
 *   "He was fond of the country and of books; and from these tastes had
 *   arisen his principal enjoyments." (Chapter 42)
 *
 * So: a man married three and twenty years, in profile, facing right, in his
 * library: the shelves of it behind him, and an open book held low in front
 * of him, its pages lit. He has looked up from it with the look of a man
 * enjoying a private joke: the corner of the mouth drawn up, the eye
 * narrowed and creased at the corner ("sarcastic humour"). His hair is grey
 * and his face lined, for his years; his dress is the plain dress of a
 * gentleman of the 1810s, a dark coat, a white waistcoat and a white
 * neckcloth. The novel describes none of it. Nothing here comes from a film
 * or stage production, and there is no red in this plate.
 *
 * Seeds: 8501 (the ground), 8502 (the hair), 8503 (the lines of age), 8504
 * (the coat), 8505 (the nape), 8506 (the shelves), 8507 (the print on the
 * pages).
 */

const P = placing(24, 6, 0.98)

/** The open book, in the figure's frame: two pages either side of its spine. */
const PAGE_L = 'M196 270L150 262L141 318L189 327Z'
const PAGE_R = 'M196 270L244 265L241 322L189 327Z'
/** The covers, showing as a dark edge under the pages. */
const COVERS = 'M141 318L189 327L241 322L242 330L189 335L139 326Z'

/** The shelves on the wall behind him, in the plate's frame, to the left of his head. */
const SHELF_X: [number, number] = [12, 120]
const SHELF_ROWS = [16, 92, 168, 244]

const marks = once(() => {
  // The light is the window in front of him; the shelves are behind.
  const ground = portraitGround('pp-mr-bennet', 8501, (x, y) =>
    clamp(0.1 + ((x - 110) / 220) * 0.9 - Math.max(0, (y - 250) / 280)),
  )
  // Grey hair, brushed back and down: ink strokes on the pale hair.
  const hair = combedFromCrown(8502, OLD_HAIR_PTS, [96, 44], 210, [7, 13], [0.45, 0.85])
  const age = ageLines(8503, 3)
  const folds = coatFolds(8504)
  const nape = napeShade(8505, 150, 118, 66, 120)
  // The spines of the books on his shelves: paper with ink between them,
  // lit less the further back from the window they stand.
  const r = rng(8506)
  let spines = ''
  let boards = ''
  for (const top of SHELF_ROWS) {
    boards += `M${SHELF_X[0]} ${top + 70}H${SHELF_X[1]}`
    let x = SHELF_X[0] + between(r, 0, 4)
    while (x < SHELF_X[1] - 6) {
      const w = between(r, 5, 10)
      const h = between(r, 48, 66)
      const lean = r() < 0.12 ? between(r, -5, 5) : 0
      const y1 = top + 68
      const y0 = y1 - h
      spines += `M${n(x)} ${n(y1)}L${n(x + lean)} ${n(y0)}L${n(x + lean + w)} ${n(y0)}L${n(x + w)} ${n(y1)}Z`
      x += w + between(r, 1.6, 3)
    }
  }
  // Bands across the spines, cut in ink, where the titles are.
  let bands = ''
  for (const top of SHELF_ROWS)
    for (const dy of [44, 50]) bands += `M${SHELF_X[0]} ${top + dy}H${SHELF_X[1]}`
  // The print on the pages: rows of short ink strokes.
  const rp = rng(8507)
  let print = ''
  for (let i = 0; i < 9; i++) {
    const t = (i + 1) / 10.5
    const yl = 264 + t * 56
    for (const [xa, xb, s] of [
      [150, 190, -1],
      [198, 238, 1],
    ] as [number, number, number][]) {
      let x = xa + between(rp, 1, 4)
      while (x < xb - 4) {
        const L = between(rp, 4, 10)
        const y = yl + (s < 0 ? (x - xa) * 0.18 : -(x - xa) * 0.12)
        print += `M${n(x)} ${n(y)}h${n(Math.min(L, xb - x))}`
        x += L + between(rp, 1.4, 3)
      }
    }
  }
  return { ground, hair, age, folds, nape, spines, boards, bands, print }
})

function BennetFigure({ uid }: { uid: string }) {
  const m = marks()
  const headClip = `${uid}-pp-mrb-head`
  const hairClip = `${uid}-pp-mrb-hair`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={OLD_HAIR} />
        </clipPath>
      </defs>
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={COAT} />
        <path d={MAN_HEAD} />
        <path d={OLD_HAIR} />
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.folds} fill={PAPER} />
      <path d={VEST} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <Buttons
        pts={[
          [160, 262],
          [163, 284],
        ]}
        r={2.4}
      />
      <path
        d={LAPEL_NEAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        d={LAPEL_FAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={MAN_HEAD} fill={PAPER} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.5} />
      </g>
      {/* Grey hair: pale, cut through with ink, and no outline where it meets
          the brow, or it reads as a cap. */}
      <path d={OLD_HAIR} fill={PAPER} />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={INK} />
      </g>
      <EarCut outline={MAN_EAR.outline} curl={MAN_EAR.curl} />
      <path d={m.age} fill="none" stroke={INK} strokeWidth={LINE.hairline} strokeLinecap="round" />
      <ManBrow w={2.4} raise={1} />
      <ManEye look="laugh" />
      <ManNoseAndMouth smile />
      <path d={JAW} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
      <path d={CRAVAT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={CRAVAT_FOLDS} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path
        d={CRAVAT_KNOT}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <path
        d={SHIRT_POINT}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <path
        d={COAT_COLLAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={COLLAR_ROLL} fill="none" stroke={PAPER} strokeWidth={LINE.hairline} />
      {/* The open book, held low in front of him, its pages lit. */}
      <g fill={INK} stroke={INK} strokeWidth={8} strokeLinejoin="round">
        <path d={PAGE_L} />
        <path d={PAGE_R} />
        <path d={COVERS} />
      </g>
      <path d={COVERS} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={PAGE_L} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={PAGE_R} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={m.print} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={gouge(196, 272, 189, 325, 0.9)} fill={INK} />
    </g>
  )
}

function BennetPortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      {/* His library: the shelves behind him. */}
      <rect x={SHELF_X[0]} y={12} width={SHELF_X[1] - SHELF_X[0]} height={PH - 24} fill={INK} />
      <path d={m.spines} fill={PAPER} />
      <path d={m.bands} fill="none" stroke={INK} strokeWidth={1.2} />
      <path d={m.boards} fill="none" stroke={PAPER} strokeWidth={3} />
      <path d={`M${SHELF_X[1] + 1} 12V${PH - 12}`} stroke={PAPER} strokeWidth={LINE.carve} />
      <g transform={P.transform}>
        <BennetFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const mrBennetArt: LinocutArt = { width: PW, height: PH, Draw: BennetPortrait }

const CHEEK = P.to(142, 130)
const BOOK = P.to(220, 290)
const SHELVES: [number, number] = [36, 56]

export const mrBennet: Portrait = {
  name: 'Mr Bennet',
  art: mrBennetArt,
  alt: 'A linocut portrait of Mr Bennet in profile, facing right, in his library, drawn from what Austen says of his mind and habits in Chapters 1, 15 and 42. Behind him, rows of books stand on shelves. He is a man past middle age, his hair grey and his face lined, looking up with the corner of his mouth drawn up and his eye narrowed and creased, as if at a private joke. He wears a dark coat, a white waistcoat and a white neckcloth, and holds an open book low in front of him, its pages lit. Three numbered red markers point to his face, the open book and the shelves.',
  describedBy: [
    {
      phrase: 'so odd a mixture of quick parts, sarcastic humour, reserve, and caprice',
      at: CHEEK,
    },
    {
      phrase: 'He was fond of the country and of books',
      at: [BOOK[0] + 36, BOOK[1] - 36],
      to: BOOK,
    },
    { phrase: 'In his library he had been always sure of leisure and tranquillity', at: SHELVES },
  ],
  where: 'Chapters 1, 15 and 42',
  note: 'His wit and his library are where he hides from his family. He laughs at them instead of guiding them, and when he jokes away Elizabeth’s warning about Brighton, the whole family pays for it.',
  artNote:
    'Austen never describes his looks. He is drawn plainly, as a gentleman of the 1810s married three and twenty years, his hair grey; the books and shelves are the library the novel gives him.',
}
