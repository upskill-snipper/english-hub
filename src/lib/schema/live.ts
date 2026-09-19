/**
 * Read what the database actually has.
 *
 * Every query here is a SELECT against a catalogue view. This module cannot
 * create, alter or drop anything, which matters because it runs on a cron
 * against a production database holding children's data.
 *
 * The distinction this whole area exists to enforce (DATA-1, and the third
 * structural fact in CLAUDE.md): `_migrations_applied` records an INTENTION.
 * These views record reality. When they disagree, reality wins, and you only
 * find out if something asks.
 */

import { prisma } from '@/lib/prisma'
import type { LiveSchema } from './drift'

export async function readLiveSchema(): Promise<LiveSchema> {
  const [tables, columns, policies, indexes, triggers, functions] = await Promise.all([
    prisma.$queryRawUnsafe<{ n: string }[]>(
      `select table_name as n from information_schema.tables where table_schema = 'public'`,
    ),
    prisma.$queryRawUnsafe<{ n: string }[]>(
      `select table_name || '.' || column_name as n from information_schema.columns where table_schema = 'public'`,
    ),
    prisma.$queryRawUnsafe<{ n: string }[]>(
      `select tablename || ':' || policyname as n from pg_policies where schemaname = 'public'`,
    ),
    prisma.$queryRawUnsafe<{ n: string }[]>(
      `select indexname as n from pg_indexes where schemaname = 'public'`,
    ),
    // `auth` as well as `public`: the account-creation trigger lives on
    // `auth.users`, and a query scoped to `public` would report it missing for
    // ever - a permanent false alarm, which is how a report stops being read.
    prisma.$queryRawUnsafe<{ n: string }[]>(
      `select n.nspname || '.' || t.tgname as n
         from pg_trigger t
         join pg_class c on c.oid = t.tgrelid
         join pg_namespace n on n.oid = c.relnamespace
        where n.nspname in ('public', 'auth') and not t.tgisinternal`,
    ),
    prisma.$queryRawUnsafe<{ n: string }[]>(
      `select p.proname as n
         from pg_proc p
         join pg_namespace n on n.oid = p.pronamespace
        where n.nspname = 'public'`,
    ),
  ])

  const names = (rows: { n: string }[]) => rows.map((r) => r.n)

  return {
    tables: names(tables),
    columns: names(columns),
    policies: names(policies),
    indexes: names(indexes),
    triggers: names(triggers),
    functions: names(functions),
  }
}
