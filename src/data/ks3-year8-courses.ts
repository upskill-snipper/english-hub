import type { CourseData } from './courses'
import { y8T1HungerGamesModules } from './curriculum/y8-t1-hunger-games-modules'
import { y8T2ConflictModules } from './curriculum/y8-t2-conflict-poetry-modules'
import { y8T3RhetoricMediaModules } from './curriculum/y8-t3-rhetoric-media-modules'

export const ks3Year8Courses: CourseData[] = [
  {
    id: 'ks3-y8-t1-hunger-games',
    title: 'Year 8 Term 1: The Hunger Games',
    subtitle: 'Power, inequality, and resistance through a dystopian novel.',
    tier: 'KS3',
    board: 'Universal',
    price: 0,
    duration: '6-8 hours',
    level: 'Year 8',
    description:
      "Examine power structures, social inequality, and resistance in Suzanne Collins's The Hunger Games. Develop inference, analytical paragraph writing, and contextual understanding. Aligned to 8R.1-8R.7 and 8W.1-8W.9.",
    color: '#ef4444',
    moduleList: y8T1HungerGamesModules,
  },
  {
    id: 'ks3-y8-t2-conflict-poetry',
    title: 'Year 8 Term 2: Conflict & Poetry',
    subtitle:
      'War poetry, humanity, and an introduction to Shakespeare - KS3 foundations with GCSE-prep cross-references.',
    tier: 'KS3',
    board: 'Universal',
    price: 0,
    duration: '6-8 hours',
    level: 'Year 8',
    description:
      "Build transferable analytical skills through conflict poetry exploring humanity and the cost of war, then explore Shakespeare's language and stagecraft in Macbeth and Julius Caesar. Develop comparative essay skills. This is a KS3 unit teaching transferable poetry-analysis skills; references to AQA Power & Conflict anthology poems are intentional GCSE-preparation cross-references, not a prescribed KS3 anthology. Aligned to 8R.1-8R.7 and 8W.2-8W.7.",
    color: '#3b82f6',
    moduleList: y8T2ConflictModules,
  },
  {
    id: 'ks3-y8-t3-rhetoric-media',
    title: 'Year 8 Term 3: Rhetoric & Media',
    subtitle: 'The art of persuasion - speeches, bias, and media literacy.',
    tier: 'KS3',
    board: 'Universal',
    price: 0,
    duration: '6-8 hours',
    level: 'Year 8',
    description:
      'Explore rhetoric through landmark speeches by Malala Yousafzai, Greta Thunberg, and Sheikha Moza. Develop media literacy, analyse bias and representation in news, and master persuasive writing. Aligned to 8R.3-8R.7 and 8W.1-8W.9.',
    color: '#f97316',
    moduleList: y8T3RhetoricMediaModules,
  },
]

export default ks3Year8Courses
