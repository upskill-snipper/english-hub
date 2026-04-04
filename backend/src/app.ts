/**
 * Express application setup.
 * Separated from server.ts so tests can import the app without starting the server.
 */

import * as Sentry from '@sentry/node';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { config } from './config/index.js';
import routes from './routes/index.js';
import { apiLimiter } from './middleware/rate-limit.middleware.js';
import { errorHandler } from './middleware/error.middleware.js';
import { logger } from './utils/logger.js';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1,
  enabled: !!process.env.SENTRY_DSN,
});

const app = express();

// ── Trust Azure App Service reverse proxy ─────────────────────────────────────
// App Service terminates TLS and proxies requests. This ensures req.ip and
// req.protocol are correct. Must be set before rate limiting so the limiter
// sees the real client IP, not the proxy IP.
app.set('trust proxy', 1);

// ── Security headers ──────────────────────────────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: config.isProduction ? undefined : false,
}));

// ── CORS ──────────────────────────────────────────────────────────────────────
app.use(cors({
  origin: config.frontendUrl,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// ── Response compression ─────────────────────────────────────────────────────
app.use(compression());

// ── Body parsing ──────────────────────────────────────────────────────────────
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(cookieParser());

// ── Rate limiting (global) ────────────────────────────────────────────────────
app.use('/api', apiLimiter);

// ── Request logging ───────────────────────────────────────────────────────────
app.use((req, _res, next) => {
  logger.debug(`${req.method} ${req.path}`, {
    ip: req.ip,
    userAgent: req.get('user-agent'),
  });
  next();
});

// ── Mount routes ──────────────────────────────────────────────────────────────
app.use('/api', routes);

// ── 404 catch-all ─────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({
    error: { code: 'NOT_FOUND', message: 'Endpoint not found' },
  });
});

// ── Sentry error handler (must be before custom error handler) ───────────────
Sentry.setupExpressErrorHandler(app);

// ── Central error handler ─────────────────────────────────────────────────────
app.use(errorHandler);

export default app;
