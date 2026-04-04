import type { CourseData } from './courses';
import { y12IalUnit1Modules } from './curriculum/y12-ial-unit1-modules';
import { y12IalUnit2Modules } from './curriculum/y12-ial-unit2-modules';
import { y13IalUnit3Modules } from './curriculum/y13-ial-unit3-modules';
import { y13IalUnit4Modules } from './curriculum/y13-ial-unit4-modules';

export const ialYear1213Courses: CourseData[] = [
  {
    id: 'ial-y12-unit1',
    title: 'IAL English Language Unit 1: Language & Context',
    subtitle: 'Language in social contexts — Edexcel IAL English Language (WEN01).',
    tier: 'Higher',
    board: 'Edexcel IAL',
    specCode: 'WEN01',
    price: 0,
    duration: '10-12 hours',
    level: 'Year 12',
    description: 'Study language variation, identity, and social context for Edexcel IAL English Language Unit 1. Covers language frameworks, sociolinguistics, dialect, idiolect, gender, occupation, and media language with full analytical methodology.',
    color: '#1d4ed8',
    moduleList: y12IalUnit1Modules,
  },
  {
    id: 'ial-y12-unit2',
    title: 'IAL English Language Unit 2: Language Change',
    subtitle: 'Historical and contemporary language change — Edexcel IAL (WEN02).',
    tier: 'Higher',
    board: 'Edexcel IAL',
    specCode: 'WEN02',
    price: 0,
    duration: '10-12 hours',
    level: 'Year 12',
    description: 'Explore how and why English changes over time for Edexcel IAL English Language Unit 2. Covers historical language change, contemporary change, language debate, attitudes to change, and child language acquisition with data analysis skills.',
    color: '#0369a1',
    moduleList: y12IalUnit2Modules,
  },
  {
    id: 'ial-y13-unit3',
    title: 'IAL English Language Unit 3: Crafting Language',
    subtitle: 'Original writing and commentary — Edexcel IAL (WEN03).',
    tier: 'Higher',
    board: 'Edexcel IAL',
    specCode: 'WEN03',
    price: 0,
    duration: '10-12 hours',
    level: 'Year 13',
    description: 'Develop advanced creative and analytical writing for Edexcel IAL English Language Unit 3. Master original writing for different purposes and audiences, produce a critical commentary evaluating your own linguistic choices, and explore style and register at A-level.',
    color: '#7e22ce',
    moduleList: y13IalUnit3Modules,
  },
  {
    id: 'ial-y13-unit4',
    title: 'IAL English Language Unit 4: Language Investigation',
    subtitle: 'Independent research and investigation — Edexcel IAL (WEN04).',
    tier: 'Higher',
    board: 'Edexcel IAL',
    specCode: 'WEN04',
    price: 0,
    duration: '10-12 hours',
    level: 'Year 13',
    description: 'Complete a structured language investigation for Edexcel IAL English Language Unit 4. Covers research methodology, data collection and analysis, applying linguistic frameworks, writing up findings, and producing an academic report with full coursework guidance.',
    color: '#065f46',
    moduleList: y13IalUnit4Modules,
  },
];

export default ialYear1213Courses;
