// ─── Dedicated vitest config for the EU AI Act Art.15 marking eval harness ───
// The root vitest.config.ts restricts `include` to `src/**/*.test.{ts,tsx}`,
// which (by design) excludes this directory from `npm test`. This standalone
// config runs the eval entrypoint AND the pure stats unit tests. It reuses the
// project's `@` path alias and a Node test environment (the harness reads
// datasets via node:fs and needs no DOM). Invoke via: `npm run eval:marking`.
//
// `evals/fixtures/seed-synthetic-fixtures.ts` is deliberately EXCLUDED — fixture
// seeding is an explicit, separate action (evals/fixtures/seed.config.ts), never
// part of the accuracy run.

import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    environment: 'node',
    include: ['evals/run.ts', 'evals/stats.test.ts'],
    exclude: ['evals/fixtures/**', 'node_modules/**'],
    // Surface the harness's console.log report.
    silent: false,
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
})
