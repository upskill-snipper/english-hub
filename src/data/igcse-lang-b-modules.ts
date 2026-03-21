import type { CourseModule } from './courses';
import { igcseBChunk1 } from './temp/igcse-b-m1-3';
import { igcseBChunk2 } from './temp/igcse-b-m4-6';
import { igcseBChunk3 } from './temp/igcse-b-m7-9';
import { igcseBChunk4 } from './temp/igcse-b-m10-12';
import { igcseBChunk5 } from './temp/igcse-b-m13-14';

export const igcseLangBModules: CourseModule[] = [
  ...igcseBChunk1,
  ...igcseBChunk2,
  ...igcseBChunk3,
  ...igcseBChunk4,
  ...igcseBChunk5,
];
