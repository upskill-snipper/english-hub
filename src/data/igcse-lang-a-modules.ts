import type { CourseModule } from './courses';
import { igcseAChunk1 } from './temp/igcse-a-m1-3';
import { igcseAChunk2 } from './temp/igcse-a-m4-6';
import { igcseAChunk3 } from './temp/igcse-a-m7-9';
import { igcseAChunk4 } from './temp/igcse-a-m10-12';
import { igcseAChunk5 } from './temp/igcse-a-m13-14';

export const igcseLangAModules: CourseModule[] = [
  ...igcseAChunk1,
  ...igcseAChunk2,
  ...igcseAChunk3,
  ...igcseAChunk4,
  ...igcseAChunk5,
];
