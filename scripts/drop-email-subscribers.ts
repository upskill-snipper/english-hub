import { config as loadDotenv } from 'dotenv'
import { resolve } from 'path'
import { PrismaClient } from '@prisma/client'
import { assertWritableTarget, describePlanMode } from './_guard.mjs'

loadDotenv({ path: resolve(__dirname, '..', '.env.local') })

// MAINT-6 (19 September 2026): .env.local points at PRODUCTION and carries the
// service-role key, so this script used to write there by default. Placed at
// module scope above the client, because the client is constructed here and
// not inside main(). Two keys required against anything not demonstrably local.
const __guard = assertWritableTarget({ script: 'scripts/drop-email-subscribers.ts' })
if (__guard.mode !== 'apply') {
  console.error(describePlanMode(__guard, 'scripts/drop-email-subscribers.ts'))
  process.exit(1)
}

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DIRECT_URL || process.env.DATABASE_URL } },
})

async function main() {
  // Confirm row count before dropping (safety check)
  const rows = await prisma.$queryRawUnsafe<Array<{ count: bigint }>>(
    'SELECT COUNT(*) as count FROM public.email_subscribers',
  )
  const count = Number(rows[0].count)
  console.log(`email_subscribers row count: ${count}`)

  if (count > 0) {
    console.error('Refusing to drop — table has rows. Export them first.')
    process.exit(1)
  }

  await prisma.$executeRawUnsafe('DROP TABLE IF EXISTS public.email_subscribers')
  console.log('✓ Table dropped.')
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
