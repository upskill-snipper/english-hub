import { config as loadDotenv } from 'dotenv'
import { resolve } from 'path'
import { PrismaClient } from '@prisma/client'

loadDotenv({ path: resolve(__dirname, '..', '.env.local') })

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
