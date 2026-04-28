import type { CourseData } from './courses'
import { y9T1ChristmasCarolModules } from './curriculum/y9-t1-christmas-carol-modules'
import { y9T2WritingCraftModules } from './curriculum/y9-t2-writing-craft-modules'
import { y9T3OmamModules } from './curriculum/y9-t3-omam-modules'

export const ks3Year9Courses: CourseData[] = [
  {
    id: 'ks3-y9-t1-christmas-carol',
    title: 'Year 9 Term 1: A Christmas Carol',
    subtitle: 'Dickens, Victorian society, and moral redemption — a GCSE bridge text.',
    tier: 'KS3',
    board: 'Universal',
    price: 0,
    duration: '6-8 hours',
    level: 'Year 9',
    description:
      "Study Dickens's A Christmas Carol as a gateway to GCSE-level literary analysis. Explore themes of poverty, redemption, and social responsibility with full contextual knowledge. Develop sustained analytical essays. Aligned to 9R.1–9R.7 and 9W.1–9W.9.",
    color: '#dc2626',
    moduleList: y9T1ChristmasCarolModules,
  },
  {
    id: 'ks3-y9-t2-writing-craft',
    title: 'Year 9 Term 2: Writing Craft',
    subtitle: 'Master transactional and creative writing for GCSE success.',
    tier: 'KS3',
    board: 'Universal',
    price: 0,
    duration: '6-8 hours',
    level: 'Year 9',
    description:
      'Develop advanced writing skills across transactional formats (articles, speeches, letters, reports) and creative writing (narrative, descriptive, and imaginative). Understand how to adapt tone, style, and structure for different purposes and audiences. Aligned to 9W.1–9W.10.',
    color: '#7c3aed',
    moduleList: y9T2WritingCraftModules,
  },
  {
    id: 'ks3-y9-t3-omam',
    title: 'Year 9 Term 3: Of Mice and Men',
    subtitle:
      "1930s America, the American Dream, and Steinbeck's language — Y9 stretch unit and bridge to Edexcel / Eduqas / IGCSE GCSE study.",
    tier: 'KS3',
    board: 'Universal',
    price: 0,
    duration: '6-8 hours',
    level: 'Year 9',
    description:
      "Study Steinbeck's Of Mice and Men in depth, examining the Great Depression context, marginalised voices, and the destruction of dreams. This is a Year 9 stretch unit that doubles as preparation for the GCSE / IGCSE specifications (Edexcel, Eduqas, and CIE) which prescribe Of Mice and Men as a set text. Develops exam-style analytical essays and contextual integration skills. Aligned to 9R.1–9R.7 and 9W.1–9W.9.",
    color: '#059669',
    moduleList: y9T3OmamModules,
  },
]

export default ks3Year9Courses
