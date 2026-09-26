'use client'

// The complete text of Do not go gentle into that good night. See
// src/data/full-texts/do-not-go-gentle-into-that-good-night.ts for the edition
// (the Pearson anthology's own page) and how it was extracted. The poem has
// been out of UK copyright since 1 January 2024; the site works to UK law.

import { FullTextReader } from '@/components/study/FullTextReader'
import { doNotGoGentleIntoThatGoodNightText } from '@/data/full-texts/do-not-go-gentle-into-that-good-night'

export default function Page() {
  return (
    <FullTextReader
      data={doNotGoGentleIntoThatGoodNightText}
      slug="do-not-go-gentle-into-that-good-night"
      year="1951"
    />
  )
}
