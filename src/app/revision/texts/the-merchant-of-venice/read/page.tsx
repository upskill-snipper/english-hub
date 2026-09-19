'use client'

// The complete text of The Merchant of Venice. See src/data/full-texts/the-merchant-of-venice.ts for the
// edition and how it was obtained; the analysis panels are deliberately empty
// because the text is sourced and the commentary is not written.

import { FullTextReader } from '@/components/study/FullTextReader'
import { theMerchantOfVeniceText } from '@/data/full-texts/the-merchant-of-venice'

export default function Page() {
  return (
    <FullTextReader data={theMerchantOfVeniceText} slug="the-merchant-of-venice" year="c. 1597" />
  )
}
