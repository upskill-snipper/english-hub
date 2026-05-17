// Dedicated vitest config for the (offline) synthetic-fixture seeder. Kept
// separate from the eval run config so seeding is an explicit, deliberate
// action and never part of the accuracy run itself. No network.
import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    environment: 'node',
    include: ['evals/fixtures/seed-synthetic-fixtures.ts'],
    silent: false,
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../../src'),
    },
  },
})
