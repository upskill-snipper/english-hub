/**
 * Wraps async Express handlers so thrown errors are forwarded to next().
 * Without this, async exceptions would cause unhandled promise rejections.
 */

import type { Request, Response, NextFunction, RequestHandler } from 'express';

type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<void | Response>;

export function asyncHandler(fn: AsyncRequestHandler): RequestHandler {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
