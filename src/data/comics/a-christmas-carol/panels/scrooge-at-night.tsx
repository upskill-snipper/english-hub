import { INK, PAPER } from '@/components/comics/linocut/palette'

import { SCROOGE_HEAD, SCROOGE_NECK, ScroogeHeadLit } from '../scrooge'

/**
 * Scrooge from Christmas Eve night until morning: the same head as the Stave
 * One portrait, in his nightcap and dressing-gown. From Marley's visit he is
 * "in his dressing-gown and slippers, and his nightcap", having "took off his
 * cravat", and the Ghost of Christmas Past takes him out "clad but lightly in
 * his slippers, dressing-gown, and nightcap". So every panel from the third
 * moment through Stave II draws his head with this, not with the day's
 * collar and stock.
 *
 * Drawn in the head's own 200 by 320 frame (see scrooge.tsx), facing right,
 * so a panel places it with one transform, as it places ScroogeHeadLit.
 */

/** The nightcap: over the crown, its long end hanging down behind to a tassel. */
const CAP =
  'M152 64C148 42 130 26 106 24C80 22 56 34 44 58C36 74 34 92 38 110C30 130 20 160 16 188C14 198 18 204 24 202C32 182 42 150 52 128C62 118 76 108 90 100C110 88 130 76 152 64Z'
/** The dressing-gown's collar, round the neck where the cravat was. */
const GOWN_COLLAR = 'M52 210C70 222 104 224 126 212L134 236C110 250 74 250 48 236Z'

export function Nightcap() {
  return (
    <g>
      <path d={CAP} fill={INK} stroke={INK} strokeWidth={10} strokeLinejoin="round" />
      <path d={CAP} fill={PAPER} stroke={INK} strokeWidth={4} strokeLinejoin="round" />
      <g fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round">
        <path d="M60 110C70 80 96 56 136 48" />
        <path d="M46 96C58 66 82 44 112 36" />
        <path d="M42 128C36 150 30 170 26 190" />
      </g>
      {/* the tassel */}
      <path
        d="M20 198L12 216M20 198L18 218M20 198L26 216"
        stroke={INK}
        strokeWidth={6}
        strokeLinecap="round"
      />
      <path
        d="M20 198L12 216M20 198L18 218M20 198L26 216"
        stroke={PAPER}
        strokeWidth={2.6}
        strokeLinecap="round"
      />
    </g>
  )
}

/**
 * Scrooge's lit head in his nightcap, with the gown's collar and no stock:
 * the portrait's head clipped to the head and the top of the neck, knocked
 * out of the ground with an ink halo. `wide` is fright (Marley); `tears`
 * cuts two tears on his cheek below the red-rimmed eye (the schoolroom, where
 * he "wept to see his poor forgotten self").
 */
export function ScroogeNightHead({
  uid,
  seed,
  wide = false,
  tears = false,
}: {
  uid: string
  seed: number
  wide?: boolean
  tears?: boolean
}) {
  const clip = `${uid}-night-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={SCROOGE_HEAD} />
          <path d="M58 190H124V214H58Z" />
        </clipPath>
      </defs>
      <g fill={INK} stroke={INK} strokeWidth={7}>
        <path d={SCROOGE_HEAD} />
        <path d={SCROOGE_NECK} />
      </g>
      <g clipPath={`url(#${clip})`}>
        <ScroogeHeadLit uid={uid} seed={seed} wide={wide} />
      </g>
      <path d={GOWN_COLLAR} fill={INK} stroke={PAPER} strokeWidth={4} />
      <Nightcap />
      {tears && (
        <g fill={PAPER} stroke={INK} strokeWidth={2.6}>
          <path d="M150 112C146 120 145 126 150 128C155 126 154 120 150 112Z" />
          <path d="M144 138C140 146 139 152 144 154C149 152 148 146 144 138Z" />
        </g>
      )}
    </g>
  )
}
