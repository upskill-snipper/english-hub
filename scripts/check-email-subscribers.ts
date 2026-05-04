import { config as loadDotenv } from 'dotenv'
import { resolve } from 'path'
import { PrismaClient } from '@prisma/client'

loadDotenv({ path: resolve(__dirname, '..', '.env.local') })

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DIRECT_URL || process.env.DATABASE_URL } },
})

async function main() {
  const rows = await prisma.$queryRawUnsafe<
    Array<{ email: string; magnet_slug: string; source_path: string; created_at: Date }>
  >(
    `SELECT email, magnet_slug, source_path, created_at
     FROM public.email_subscribers
     ORDER BY created_at DESC
     LIMIT 10`,
  )
  console.log(`Total recent rows: ${rows.length}`)
  for (const row of rows) {
    console.log(
      `  ${row.created_at.toISOString()} | ${row.email} | ${row.magnet_slug ?? '(no magnet)'}`,
    )
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
