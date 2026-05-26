import type { CourseData } from './courses'
import { y7T1FoxGirlModules } from './curriculum/y7-t1-fox-girl-modules'
import { y7T2VoiceIdentityModules } from './curriculum/y7-t2-voice-identity-modules'
import { y7T3ShapingMeaningModules } from './curriculum/y7-t3-shaping-meaning-modules'

export const ks3Year7Courses: CourseData[] = [
  {
    id: 'ks3-y7-t1-fox-girl',
    title: 'Year 7 Term 1: Fox Girl & White Gazelle',
    subtitle: 'Identity, belonging, and character analysis through a dual-narrative novel.',
    tier: 'KS3',
    board: 'Universal',
    price: 0,
    duration: '6-8 hours',
    level: 'Year 7',
    description:
      "Explore identity and belonging through Katherine Rundell's Fox Girl and White Gazelle. Develop reading comprehension, character analysis, PEE paragraph writing, and inference skills aligned to 7R.1-7R.6 and 7W.1-7W.9.",
    color: '#f59e0b',
    moduleList: y7T1FoxGirlModules,
  },
  {
    id: 'ks3-y7-t2-voice-identity',
    title: 'Year 7 Term 2: Voice & Identity',
    subtitle: 'Finding your own voice and exploring others through autobiography and fiction.',
    tier: 'KS3',
    board: 'Universal',
    price: 0,
    duration: '6-8 hours',
    level: 'Year 7',
    description:
      "Discover what makes a writer's voice unique and how language shapes identity. Covers tone, perspective, descriptive writing, reflective writing, and empathy through diverse texts. Aligned to 7R.3-7R.5 and 7W.1-7W.6.",
    color: '#8b5cf6',
    moduleList: y7T2VoiceIdentityModules,
  },
  {
    id: 'ks3-y7-t3-shaping-meaning',
    title: 'Year 7 Term 3: Shaping Meaning',
    subtitle: 'Stories, folk tales, and poetry - how writers craft meaning for their readers.',
    tier: 'KS3',
    board: 'Universal',
    price: 0,
    duration: '6-8 hours',
    level: 'Year 7',
    description:
      'Analyse narrative structure and moral themes in folk tales from different cultures, then explore poetry through annotation, imagery, and comparison. End-of-year assessment combines both skills. Aligned to 7R.3-7R.6 and 7W.2-7W.5.',
    color: '#10b981',
    moduleList: y7T3ShapingMeaningModules,
  },
]

export default ks3Year7Courses
