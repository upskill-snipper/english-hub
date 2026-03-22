/**
 * JWT authentication middleware.
 *
 * Reads token from:
 *  1. Authorization: Bearer <token>
 *  2. HTTP-only cookie named "token"
 *
 * On success, attaches req.user with { id, email, role }.
 */

import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/index.js';
import { UnauthorizedError } from '../utils/errors.js';

export interface JwtPayload {
  sub: string;  // user id
  email: string;
  role: string;
}

// Extend Express Request
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

function extractToken(req: Request): string | null {
  // 1. Bearer token
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.slice(7);
  }

  // 2. HTTP-only cookie
  const cookieToken = req.cookies?.token as string | undefined;
  if (cookieToken) return cookieToken;

  return null;
}

/**
 * Requires authentication — throws 401 if no valid token.
 */
export function requireAuth(req: Request, _res: Response, next: NextFunction): void {
  const token = extractToken(req);
  if (!token) {
    throw new UnauthorizedError('Authentication required');
  }

  try {
    const payload = jwt.verify(token, config.jwt.secret) as JwtPayload;
    req.user = payload;
    next();
  } catch {
    throw new UnauthorizedError('Invalid or expired token');
  }
}

/**
 * Optional authentication — attaches user if token present, but doesn't reject.
 */
export function optionalAuth(req: Request, _res: Response, next: NextFunction): void {
  const token = extractToken(req);
  if (!token) {
    next();
    return;
  }

  try {
    const payload = jwt.verify(token, config.jwt.secret) as JwtPayload;
    req.user = payload;
  } catch {
    // Invalid token — proceed without user
  }
  next();
}

/**
 * Requires a specific role.
 */
export function requireRole(...roles: string[]) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    requireAuth(req, _res, () => {
      if (!req.user || !roles.includes(req.user.role)) {
        throw new UnauthorizedError('Insufficient permissions');
      }
      next();
    });
  };
}
