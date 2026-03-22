/**
 * Centralised configuration loaded from environment variables.
 * In Azure App Service every value here is set via App Settings.
 * Locally, use a .env file loaded by your dev runner (tsx reads .env automatically).
 */

function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

function optionalEnv(key: string, fallback: string): string {
  return process.env[key] ?? fallback;
}

export const config = {
  /** Server */
  port: parseInt(optionalEnv('PORT', '8080'), 10),
  nodeEnv: optionalEnv('NODE_ENV', 'development'),
  isProduction: optionalEnv('NODE_ENV', 'development') === 'production',

  /** Database */
  db: {
    connectionString: process.env['DB_CONNECTION_STRING'] ?? null,
    host: optionalEnv('DB_HOST', 'localhost'),
    port: parseInt(optionalEnv('DB_PORT', '5432'), 10),
    name: optionalEnv('DB_NAME', 'english_hub'),
    user: optionalEnv('DB_USER', 'postgres'),
    password: optionalEnv('DB_PASSWORD', 'postgres'),
    ssl: optionalEnv('DB_SSL', 'false') === 'true',
  },

  /** Auth */
  jwt: {
    secret: requireEnv('JWT_SECRET'),
    expiresIn: optionalEnv('JWT_EXPIRES_IN', '7d'),
  },
  cookieDomain: process.env['COOKIE_DOMAIN'] ?? undefined,

  /** Frontend */
  frontendUrl: optionalEnv('FRONTEND_URL', 'http://localhost:3000'),

  /** Stripe */
  stripe: {
    secretKey: process.env['STRIPE_SECRET_KEY'] ?? '',
    webhookSecret: process.env['STRIPE_WEBHOOK_SECRET'] ?? '',
  },

  /** Rate Limiting */
  rateLimit: {
    windowMs: parseInt(optionalEnv('RATE_LIMIT_WINDOW_MS', '900000'), 10),
    max: parseInt(optionalEnv('RATE_LIMIT_MAX_REQUESTS', '100'), 10),
  },

  /** Logging */
  logLevel: optionalEnv('LOG_LEVEL', 'info'),
} as const;
