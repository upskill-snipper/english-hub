/**
 * Rate limiting for public endpoints.
 * Uses express-rate-limit with in-memory store.
 *
 * For multi-instance App Service scaling, swap to an Azure Redis-backed store
 * (e.g. rate-limit-redis) to share state across instances.
 */

import rateLimit from 'express-rate-limit';
import { config } from '../config/index.js';

/** General API rate limiter — 100 req / 15 min per IP */
export const apiLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.max,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: {
      code: 'TOO_MANY_REQUESTS',
      message: 'Too many requests, please try again later.',
    },
  },
});

/** Strict limiter for auth endpoints — 10 req / 15 min per IP */
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: {
      code: 'TOO_MANY_REQUESTS',
      message: 'Too many authentication attempts, please try again later.',
    },
  },
});
