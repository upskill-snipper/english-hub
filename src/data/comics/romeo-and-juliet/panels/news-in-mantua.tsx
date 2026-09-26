import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, deg, gouge, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { engravedSky, footShadow, HEAD_MAN, type P } from './late-scenes-kit'
import { Figure, type Pose } from './late-scenes-people'

/**
 * Act 5, Scene 1: "News in Mantua", the seventeenth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/romeo-and-juliet.ts):
 *
 * - "Mantua. A Street." By day: Romeo speaks of how "all this day an
 *   unaccustom'd spirit / Lifts me above the ground with cheerful thoughts",
 *   and will ride "tonight". So the street is in full sun, and the sun,
 *   printed in the spot colour, blazes over the worst news of his life.
 * - "Enter Balthasar." He saw Juliet "laid low in her kindred's vault, / And
 *   presently took post to tell it you". So he is booted from riding post,
 *   the post-horse behind him with its head down, and he stands with his cap
 *   in his hand and the other hand held out: "O pardon me for bringing these
 *   ill news".
 * - "Is it even so? Then I defy you, stars!" So Romeo has flung back his head
 *   to glare at the sky, both fists clenched at his sides. Balthasar: "Your
 *   looks are pale and wild". So his face is cut pale, the one lit face in
 *   the picture. He was first cut shaking one fist above his head; a raised
 *   fist on an upright forearm is a salute of its own, and the review of 26
 *   September 2026 lowered it so the gesture cannot be read as one.
 * - "I do remember an apothecary [...] / And hereabouts he dwells [...] And in his
 *   needy shop a tortoise hung, / An alligator stuff'd, and other skins / Of
 *   ill-shaped fishes; and about his shelves / A beggarly account of empty
 *   boxes". "Being holiday, the beggar's shop is shut." So on the right is the
 *   shop, its lower shutter barred, and through the open window above it the
 *   stuffed alligator, the tortoise and a fish's skin hang over empty
 *   shelves. The Apothecary himself does not come out until Romeo calls, so
 *   he is not in the picture.
 *
 * Romeo is the Romeo of every other panel (curling hair, doublet, short
 * cloak, a sword at his side); he and Balthasar are drawn as in
 * ./late-scenes-people.tsx. Nothing is taken from a film or stage production.
 * Seeds: 1701 (sky), 1702 (street), 1703 (houses), 1704 (the sun's rays).
 */

const W = 860
const H = 340
const STREET = 250
const SUN: P = [262, 62]

/** Romeo, head flung back to the sky, fists clenched at his sides; drawn facing right, then flipped. */
const ROMEO: Pose = {
  look: 'romeo',
  sword: true,
  head: { at: [0, -176], rot: -15 },
  eye: 'none',
  far: {
    arm: [
      [-3, -149],
      [-11, -124],
      [-15, -104],
    ],
    hand: 'fist',
  },
  near: {
    arm: [
      [6, -147],
      [16, -124],
      [26, -106],
    ],
    hand: 'fist',
  },
  legs: {
    far: [
      [-5, -84],
      [-15, -44],
      [-24, 0],
    ],
    near: [
      [6, -84],
      [15, -44],
      [22, 0],
    ],
  },
  cloak: 9,
}
const ROMEO_HEAD = 'translate(0 -176) rotate(-15)'
const ROMEO_AT: P = [452, 326]

/** Balthasar, booted from the ride, his cap in his hand, head bowed. */
const BALTHASAR: Pose = {
  look: 'servant',
  bare: true,
  head: { at: [4, -175], rot: 16 },
  eye: 'down',
  far: {
    arm: [
      [-3, -149],
      [6, -122],
      [17, -130],
    ],
    hand: 'cup',
  },
  near: {
    arm: [
      [6, -147],
      [18, -121],
      [36, -118],
    ],
    hand: 'open',
    deg: -8,
    thumb: -1,
  },
  legs: {
    far: [
      [-5, -84],
      [-8, -46],
      [-10, 0],
    ],
    near: [
      [6, -84],
      [10, -46],
      [12, 0],
    ],
  },
  cloak: 2,
}
const BALTHASAR_AT: P = [262, 328]

/**
 * The post-horse, facing right with its head hung low after the ride from
 * Verona: its body runs off the left edge of the block. Hooves at y = 0.
 */
const HORSE = {
  body: 'M-230 -152L-40 -155C-20 -157 -8 -163 2 -166C18 -164 38 -150 52 -134C58 -128 62 -124 66 -118L86 -90C90 -84 90 -78 86 -74C82 -70 76 -70 72 -74L58 -90C54 -96 50 -100 44 -104C34 -108 22 -110 12 -108C4 -106 -2 -100 -6 -92C-8 -84 -10 -76 -11 -70L-230 -64Z',
  ear: 'M50 -131L46 -148L59 -134Z',
  legs: ['M-8 -76L-4 -40L-2 -4', 'M-22 -76L-26 -40L-28 -4'],
  hooves: 'M-9 -6H5L6 1H-10ZM-35 -6H-21L-20 1H-36Z',
  saddle: 'M-120 -154C-110 -166 -80 -168 -64 -156L-66 -110L-118 -108Z',
}
const HORSE_AT = 'translate(104 320) scale(0.96)'

/** The Apothecary's shop, on the right: its front, the barred shutter and the window. */
const SHOP = {
  front: 'M640 280V96L652 86H860V280Z',
  eaves: 'M628 92L652 70H870V92Z',
  window: 'M666 190V128C666 116 674 108 686 108H830C842 108 850 116 850 128V190Z',
  shutter: 'M662 200H854V280H662Z',
}

type Marks = {
  sky: string
  sun: string
  street: string
  houses: string
  inside: string
  shutter: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // a clear sky, darker towards the top, clearing round the sun
  const sky = engravedSky(rng(1701), { x0: 0, x1: W, y0: 0, y1: 150 }, (x, y) =>
    clamp(0.62 - y / 220 - Math.max(0, 1 - Math.hypot(x - SUN[0], y - SUN[1]) / 150) * 0.7),
  )
  // the sun's rays, cut as ink spokes on the pale sky
  const r4 = rng(1704)
  let sun = ''
  for (let a = 0; a < 360; a += 12) {
    const t = deg(a + between(r4, -3, 3))
    const r0 = between(r4, 28, 34)
    const r1 = r0 + between(r4, 14, 30)
    sun += wedge(
      SUN[0] + Math.cos(t) * r0,
      SUN[1] + Math.sin(t) * r0,
      SUN[0] + Math.cos(t) * r1,
      SUN[1] + Math.sin(t) * r1,
      2.2,
      0.4,
    )
  }
  // the street: cobbles as short ink cuts, heavier nearer the reader
  const r2 = rng(1702)
  let street = ''
  for (let y = STREET + 6; y < H; y += 7 + (y - STREET) * 0.05) {
    let x = between(r2, -20, 0)
    const t = (y - STREET) / (H - STREET)
    while (x < W) {
      const len = between(r2, 10, 22) * (1 + t)
      street += gouge(x, y, x + len, y + between(r2, -0.5, 0.5), 0.5 + t * 1.2)
      x += len + between(r2, 3, 8)
    }
  }
  // the houses across the street: their fronts cut in rows, lighter higher up
  const r3 = rng(1703)
  let houses = ''
  for (let y = 142; y < STREET - 2; y += 5) {
    let x = 226 + between(r3, -10, 0)
    while (x < 640) {
      const len = between(r3, 18, 50)
      houses += gouge(x, y, x + len, y + between(r3, -0.4, 0.4), 0.5 + (1 - (y - 142) / 110) * 1.6)
      x += len + between(r3, 4, 12)
    }
  }
  // inside the shop: dim, cut with a few rows
  let inside = ''
  for (let y = 112; y < 190; y += 6) inside += gouge(668, y, 848, y + between(r3, -0.6, 0.6), 0.7)
  let shutter = ''
  for (let x = 676; x < 854; x += 16) shutter += gouge(x, 204, x, 276, 1.2)
  cached = { sky, sun, street, houses, inside, shutter }
  return cached
}

function NewsInMantua({ uid }: ArtProps) {
  const m = marks()
  const id = { win: `${uid}-win`, face: `${uid}-face` }
  return (
    <>
      <defs>
        <clipPath id={id.win}>
          <path d={SHOP.window} />
        </clipPath>
        <clipPath id={id.face}>
          <path d="M8 -8L7 4L3 22H28V-8Z" />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 180], push: 1.03 })}>
        {/* the sky over Mantua, and the sun in the spot colour */}
        <rect x={0} y={0} width={W} height={STREET} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.sun} fill={INK} />
        <circle className="lc-glow" cx={SUN[0]} cy={SUN[1]} r={23} fill={RED} />

        {/* the houses across the street: a bell tower, roofs and arcades */}
        <path d="M560 150V66L574 50L588 66V150Z" fill={INK} />
        <path d="M568 78V96H580V78Z" fill={PAPER} />
        <path
          d="M226 250V152H232V146H318V136H324V130H382V148H388V142H446V156H452V138H512V150H518V146H560V152H566V146H640V250Z"
          fill={INK}
        />
        <path d="M250 146V132H260V146ZM344 130V116H354V130ZM474 138V124H484V138Z" fill={INK} />
        <path d={m.houses} fill={PAPER} />
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.fine}>
          {[236, 300, 364, 428, 492, 556].map((x) => (
            <path
              key={x}
              d={`M${x} 250V222C${x} 210 ${x + 10} 204 ${x + 22} 204C${x + 34} 204 ${x + 44} 210 ${x + 44} 222V250Z`}
            />
          ))}
        </g>
        <g fill={INK}>
          {[258, 322, 386, 450, 514, 578, 622].map((x) => (
            <rect key={x} x={x - 6} y={166} width={12} height={16} />
          ))}
        </g>

        {/* the street */}
        <rect x={0} y={STREET} width={W} height={H - STREET} fill={PAPER} />
        <path d={`M0 ${STREET}H${W}`} stroke={INK} strokeWidth={2} />
        <path d={m.street} fill={INK} />

        {/* the Apothecary's shop, shut for the holiday */}
        <path d={SHOP.front} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={SHOP.eaves} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={gouge(640, 84, 860, 84, 1.2)} fill={PAPER} />
        <path d={SHOP.window} fill={PAPER} />
        <g clipPath={`url(#${id.win})`}>
          <path d={m.inside} fill={INK} />
          {/* "an alligator stuff'd", hung by cords from the beam */}
          <path d="M702 108L708 130M780 108L776 132" stroke={INK} strokeWidth={1.2} />
          <path
            d="M672 140C684 132 700 130 716 131L728 127L736 132C752 130 770 130 786 133L800 128L804 134C814 134 826 138 840 146C826 146 814 144 804 142L798 150L788 143C770 146 752 146 736 144L728 150L720 142C706 144 688 144 672 140Z"
            fill={INK}
          />
          <path d={gouge(724, 136, 800, 137, 0.8) + gouge(690, 138, 700, 136, 0.6)} fill={PAPER} />
          {/* "a tortoise hung" */}
          <path d="M704 150V158M830 108V150" stroke={INK} strokeWidth={1.2} />
          <path d="M688 172C688 160 720 160 720 172Z" fill={INK} />
          <path
            d="M694 168L704 162L714 168M704 162V170"
            stroke={PAPER}
            strokeWidth={1}
            fill="none"
          />
          <path d="M702 158L706 158L704 162Z" fill={INK} />
          {/* "other skins / Of ill-shaped fishes" */}
          <path
            d="M830 150C840 156 842 170 836 182L840 190L828 186C822 176 822 162 830 150Z"
            fill={INK}
          />
          {/* "about his shelves / A beggarly account of empty boxes" */}
          <path d="M740 180H850V184H740Z" fill={INK} />
          <path
            d="M748 166H764V180H748ZM772 170H786V180H772ZM794 168H806V180H794Z"
            fill="none"
            stroke={INK}
            strokeWidth={1.4}
          />
        </g>
        <path d={SHOP.window} fill="none" stroke={INK} strokeWidth={LINE.bold} />
        <path d={SHOP.shutter} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.shutter} fill={INK} />
        <path d="M656 236H860" stroke={INK} strokeWidth={7} />
        <path d="M656 236H860" stroke={PAPER} strokeWidth={1} />

        {/* the post-horse, head hung low after the ride from Verona */}
        <g transform={HORSE_AT}>
          <g fill={PAPER} stroke={PAPER} strokeWidth={3.6} strokeLinejoin="round">
            <path d={HORSE.body} />
            <path d={HORSE.ear} />
            <path d={HORSE.hooves} />
          </g>
          <g fill="none" stroke={PAPER} strokeWidth={15.6} strokeLinecap="round">
            {HORSE.legs.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>
          <g fill="none" stroke={INK} strokeWidth={12} strokeLinecap="round">
            {HORSE.legs.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>
          <path d={HORSE.body} fill={INK} />
          <path d={HORSE.ear} fill={INK} />
          <path d={HORSE.hooves} fill={INK} />
          {/* the saddle, the bridle, the mane and the eye */}
          <path d={HORSE.saddle} fill="none" stroke={PAPER} strokeWidth={LINE.fine} />
          <path
            d="M-110 -110L-112 -60M-116 -60H-106"
            stroke={PAPER}
            strokeWidth={LINE.fine}
            fill="none"
          />
          {/* the bridle: headpiece, noseband and the rein back to the saddle */}
          <path
            d="M54 -128L64 -104L80 -84M64 -104L60 -92M72 -92L86 -84M60 -92C30 -110 -20 -120 -64 -130"
            stroke={PAPER}
            strokeWidth={LINE.fine}
            fill="none"
          />
          {/* the mane along the crest of the neck */}
          <path
            d={
              gouge(-2, -164, 8, -146, 1.3, -1) +
              gouge(10, -162, 20, -142, 1.3, -1) +
              gouge(22, -156, 32, -136, 1.3, -1) +
              gouge(34, -148, 44, -128, 1.2, -1)
            }
            fill={PAPER}
          />
          {/* the eye, half shut, and the nostril */}
          <path d="M66 -112Q70 -114.6 73 -111Q69.6 -110 66 -112Z" fill={PAPER} />
          <path d="M83 -81Q86 -83 87.4 -80" stroke={PAPER} strokeWidth={1.2} fill="none" />
        </g>
        <path d={footShadow(160, 326, 50)} fill={INK} />

        {/* Balthasar: "O pardon me for bringing these ill news" */}
        <path d={footShadow(BALTHASAR_AT[0], BALTHASAR_AT[1] + 2, 30)} fill={INK} />
        <Figure pose={BALTHASAR} at={BALTHASAR_AT} scale={1.1}>
          {/* his cap in his hand */}
          <path
            d="M8 -138C8 -146 16 -150 24 -148C30 -146 32 -140 30 -134C22 -132 14 -133 8 -138Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.3}
          />
        </Figure>

        {/* Romeo: "Then I defy you, stars!" */}
        <path d={footShadow(ROMEO_AT[0], ROMEO_AT[1] + 2, 36)} fill={INK} />
        <Figure pose={ROMEO} at={ROMEO_AT} scale={1.14} flip>
          {/* "Your looks are pale and wild": his face cut pale */}
          <g transform={ROMEO_HEAD}>
            <g clipPath={`url(#${id.face})`}>
              <path d={HEAD_MAN} fill={PAPER} stroke={INK} strokeWidth={2.6} />
            </g>
            {/* a wide eye under a knotted brow, and the mouth open on the words */}
            <path d="M7 -3.8Q10 -6.4 13.4 -3.8Q10 -1.4 7 -3.8Z" fill={INK} />
            <path
              d="M6 -8.6L10.4 -9.6L15 -8"
              fill="none"
              stroke={INK}
              strokeWidth={LINE.bold}
              strokeLinecap="round"
            />
            <path d="M12.4 9.2Q14.6 10.8 16.6 9.6" fill="none" stroke={INK} strokeWidth={1.6} />
            <path d="M8 2Q11 6 9.6 13" fill="none" stroke={INK} strokeWidth={0.9} />
          </g>
        </Figure>
      </g>
    </>
  )
}

export const newsInMantua: LinocutArt = { width: W, height: H, Draw: NewsInMantua }
