/**
 * Health and readiness endpoints for Azure App Service.
 *
 * /health  — shallow check (app is running).
 * /ready   — deep check (app + database are reachable).
 */

import type { Request, Response } from 'express';
import { pingDatabase } from '../data/db.js';

export const healthController = {
  health(_req: Request, res: Response) {
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
  },

  async ready(_req: Request, res: Response) {
    const dbOk = await pingDatabase();

    if (dbOk) {
      res.json({
        status: 'ready',
        timestamp: new Date().toISOString(),
        checks: { database: 'ok' },
      });
    } else {
      res.status(503).json({
        status: 'not_ready',
        timestamp: new Date().toISOString(),
        checks: { database: 'unreachable' },
      });
    }
  },
};
