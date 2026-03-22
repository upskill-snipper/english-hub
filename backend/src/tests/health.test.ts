/**
 * Health endpoint tests.
 * These don't require a real database — they test the HTTP layer.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock the database module before importing the app
vi.mock('../data/db.js', () => ({
  pool: { query: vi.fn(), on: vi.fn(), end: vi.fn() },
  pingDatabase: vi.fn().mockResolvedValue(true),
  closeDatabase: vi.fn(),
}));

// Mock config to avoid requiring env vars in tests
vi.mock('../config/index.js', () => ({
  config: {
    port: 8080,
    nodeEnv: 'test',
    isProduction: false,
    db: { connectionString: null, host: 'localhost', port: 5432, name: 'test', user: 'test', password: 'test', ssl: false },
    jwt: { secret: 'test-secret-at-least-32-chars-long!!', expiresIn: '1h' },
    cookieDomain: undefined,
    frontendUrl: 'http://localhost:3000',
    stripe: { secretKey: '', webhookSecret: '' },
    rateLimit: { windowMs: 900000, max: 100 },
    logLevel: 'error',
  },
}));

import request from 'supertest';
import app from '../app.js';
import { pingDatabase } from '../data/db.js';

describe('Health endpoints', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('GET /api/health returns 200 with status ok', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body).toHaveProperty('timestamp');
    expect(res.body).toHaveProperty('uptime');
  });

  it('GET /api/ready returns 200 when database is reachable', async () => {
    vi.mocked(pingDatabase).mockResolvedValue(true);
    const res = await request(app).get('/api/ready');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ready');
    expect(res.body.checks.database).toBe('ok');
  });

  it('GET /api/ready returns 503 when database is unreachable', async () => {
    vi.mocked(pingDatabase).mockResolvedValue(false);
    const res = await request(app).get('/api/ready');
    expect(res.status).toBe(503);
    expect(res.body.status).toBe('not_ready');
    expect(res.body.checks.database).toBe('unreachable');
  });
});
