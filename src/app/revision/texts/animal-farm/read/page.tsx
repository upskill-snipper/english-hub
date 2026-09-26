'use client'

// The complete text of Animal Farm. See src/data/full-texts/animal-farm.ts for
// the edition and how it was obtained. The novella has been out of UK
// copyright since 1 January 2021; the site works to UK law.

import { FullTextReader } from '@/components/study/FullTextReader'
import { animalFarmText } from '@/data/full-texts/animal-farm'

export default function Page() {
  return <FullTextReader data={animalFarmText} slug="animal-farm" year="1945" />
}
