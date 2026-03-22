/**
 * PostgreSQL connection pool — single shared instance (Azure best practice).
 *
 * Uses Azure Database for PostgreSQL Flexible Server.
 * Connection string or individual params come from environment variables.
 * The pool handles reconnects, idle timeouts, and connection reuse.
 */

import { Pool, type PoolConfig } from 'pg';
import { config } from '../config/index.js';
import { logger } from '../utils/logger.js';

function buildPoolConfig(): PoolConfig {
  const base: PoolConfig = {
    // Connection limits tuned for Azure App Service (B1 = 1 core)
    max: 20,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
    // Statement timeout prevents runaway queries
    statement_timeout: 30_000,
  };

  if (config.db.connectionString) {
    return { ...base, connectionString: config.db.connectionString };
  }

  return {
    ...base,
    host: config.db.host,
    port: config.db.port,
    database: config.db.name,
    user: config.db.user,
    password: config.db.password,
    ssl: config.db.ssl ? { rejectUnauthorized: true } : false,
  };
}

export const pool = new Pool(buildPoolConfig());

// Log connection errors (but don't crash — the pool retries)
pool.on('error', (err) => {
  logger.error('Unexpected database pool error', { error: err.message });
});

/** Health-check helper: runs a lightweight query */
export async function pingDatabase(): Promise<boolean> {
  try {
    const result = await pool.query('SELECT 1 AS ok');
    return result.rows[0]?.ok === 1;
  } catch {
    return false;
  }
}

/** Graceful shutdown */
export async function closeDatabase(): Promise<void> {
  await pool.end();
  logger.info('Database pool closed');
}
