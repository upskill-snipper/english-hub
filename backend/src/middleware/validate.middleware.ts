/**
 * Request validation middleware using Zod schemas.
 */

import type { Request, Response, NextFunction } from 'express';
import { type ZodSchema, ZodError } from 'zod';
import { BadRequestError } from '../utils/errors.js';

/**
 * Validates req.body against a Zod schema.
 * On success, replaces req.body with the parsed (typed, stripped) value.
 */
export function validateBody(schema: ZodSchema) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const messages = err.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
        throw new BadRequestError('Validation failed', messages);
      }
      throw err;
    }
  };
}

/**
 * Validates req.query against a Zod schema.
 */
export function validateQuery(schema: ZodSchema) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      req.query = schema.parse(req.query) as any;
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const messages = err.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
        throw new BadRequestError('Invalid query parameters', messages);
      }
      throw err;
    }
  };
}
