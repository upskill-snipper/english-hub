/**
 * Server entry point.
 *
 * Azure App Service sets the PORT environment variable.
 * Handles graceful shutdown (SIGTERM from App Service on restart/scale-in).
 */

import app from './app.js';
import { config } from './config/index.js';
import { closeDatabase } from './data/db.js';
import { logger } from './utils/logger.js';

const server = app.listen(config.port, () => {
  logger.info(`Server started`, {
    port: config.port,
    env: config.nodeEnv,
    pid: process.pid,
  });
});

// ── Graceful shutdown ─────────────────────────────────────────────────────────
// Azure App Service sends SIGTERM before killing the process.
// We stop accepting new connections and close the DB pool cleanly.

function shutdown(signal: string) {
  logger.info(`${signal} received — shutting down gracefully`);

  server.close(async () => {
    logger.info('HTTP server closed');
    await closeDatabase();
    process.exit(0);
  });

  // Force exit if graceful shutdown takes too long (10s)
  setTimeout(() => {
    logger.error('Forced shutdown after timeout');
    process.exit(1);
  }, 10_000).unref();
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

// Catch unhandled rejections — log but don't crash in production
process.on('unhandledRejection', (reason) => {
  logger.error('Unhandled promise rejection', {
    error: reason instanceof Error ? reason.message : String(reason),
    stack: reason instanceof Error ? reason.stack : undefined,
  });
});
