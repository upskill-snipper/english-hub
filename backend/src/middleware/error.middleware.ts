/**
 * Central error handler.
 * Maps AppError subclasses to structured JSON responses.
 * In production, hides internal error details.
 */

import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/errors.js';
import { config } from '../config/index.js';
import { logger } from '../utils/logger.js';

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  // Known application errors
  if (err instanceof AppError) {
    if (err.statusCode >= 500) {
      logger.error(err.message, { code: err.code, stack: err.stack });
    }

    res.status(err.statusCode).json({
      error: {
        code: err.code,
        message: err.message,
        ...(err.details && !config.isProduction ? { details: err.details } : {}),
      },
    });
    return;
  }

  // Zod validation errors
  if (err.name === 'ZodError') {
    res.status(400).json({
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Invalid request data',
        ...(!config.isProduction ? { details: (err as any).errors } : {}),
      },
    });
    return;
  }

  // Unexpected errors
  logger.error('Unhandled error', {
    message: err.message,
    stack: err.stack,
    name: err.name,
  });

  res.status(500).json({
    error: {
      code: 'INTERNAL_ERROR',
      message: config.isProduction
        ? 'An unexpected error occurred'
        : err.message,
    },
  });
}
