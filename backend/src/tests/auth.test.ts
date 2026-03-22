/**
 * Auth endpoint tests.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock database
vi.mock('../data/db.js', () => ({
  pool: {
    query: vi.fn(),
    on: vi.fn(),
    end: vi.fn(),
  },
  pingDatabase: vi.fn().mockResolvedValue(true),
  closeDatabase: vi.fn(),
}));

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
    rateLimit: { windowMs: 900000, max: 1000 },
    logLevel: 'error',
  },
}));

import request from 'supertest';
import app from '../app.js';
import { pool } from '../data/db.js';

describe('Auth endpoints', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('POST /api/auth/signup', () => {
    it('returns 400 for invalid email', async () => {
      const res = await request(app)
        .post('/api/auth/signup')
        .send({ email: 'not-an-email', password: 'password123', fullName: 'Test User' });

      expect(res.status).toBe(400);
      expect(res.body.error.code).toBe('BAD_REQUEST');
    });

    it('returns 400 for short password', async () => {
      const res = await request(app)
        .post('/api/auth/signup')
        .send({ email: 'test@example.com', password: 'short', fullName: 'Test User' });

      expect(res.status).toBe(400);
      expect(res.body.error.code).toBe('BAD_REQUEST');
    });

    it('returns 400 for missing fullName', async () => {
      const res = await request(app)
        .post('/api/auth/signup')
        .send({ email: 'test@example.com', password: 'password123' });

      expect(res.status).toBe(400);
    });

    it('creates user and returns token on valid signup', async () => {
      // Mock: no existing user
      vi.mocked(pool.query)
        .mockResolvedValueOnce({ rows: [], rowCount: 0, command: 'SELECT', oid: 0, fields: [] } as any)
        // Mock: insert returns new user
        .mockResolvedValueOnce({
          rows: [{
            id: '123',
            email: 'test@example.com',
            full_name: 'Test User',
            role: 'student',
            avatar_url: null,
            created_at: new Date(),
            updated_at: new Date(),
          }],
          rowCount: 1, command: 'INSERT', oid: 0, fields: [],
        } as any);

      const res = await request(app)
        .post('/api/auth/signup')
        .send({ email: 'test@example.com', password: 'password123', fullName: 'Test User' });

      expect(res.status).toBe(201);
      expect(res.body.user.email).toBe('test@example.com');
      expect(res.body).toHaveProperty('token');
      // Should set HTTP-only cookie
      expect(res.headers['set-cookie']).toBeDefined();
    });
  });

  describe('POST /api/auth/login', () => {
    it('returns 401 for non-existent user', async () => {
      vi.mocked(pool.query).mockResolvedValueOnce({
        rows: [], rowCount: 0, command: 'SELECT', oid: 0, fields: [],
      } as any);

      const res = await request(app)
        .post('/api/auth/login')
        .send({ email: 'nobody@example.com', password: 'password123' });

      expect(res.status).toBe(401);
    });
  });

  describe('GET /api/auth/me', () => {
    it('returns 401 without auth token', async () => {
      const res = await request(app).get('/api/auth/me');
      expect(res.status).toBe(401);
    });
  });
});
