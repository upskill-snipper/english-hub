// ─── Dedicated vitest config for the EU AI Act Art.15 marking eval harness ───
// The root vitest.config.ts restricts `include` to `src/**/*.test.{ts,tsx}`,
// which (by design) excludes this directory from `npm test`. This standalone
// config runs ONLY the eval entrypoint. It reuses the project's `@` path alias
// and a Node test environment (the harness reads the dataset via node:fs and
// needs no DOM). Invoke via: `npm run eval:marking`.

import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    environment: 'node',
    include: ['evals/run.ts'],
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
