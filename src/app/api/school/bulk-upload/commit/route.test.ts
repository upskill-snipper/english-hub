/**
 * Unit tests for POST /api/school/bulk-upload/commit.
 *
 * Three binding behaviours under test:
 *   1. RBAC — a signed-in user who is NOT a school admin receives 403.
 *   2. Idempotency — the same idempotencyKey submitted twice returns the
 *      cached response and does not create users a second time.
 *   3. Transactional rollback — a Prisma failure mid-batch reverts every
 *      User create AND every auth user created in the same request.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { NextRequest } from 'next/server';

// ---------------------------------------------------------------------------
// Mocks
// ---------------------------------------------------------------------------

// Supabase auth: default to a signed-in user; tests flip to anon for the
// Unauthorized case.
let authUser: { id: string; email: string } | null = {
  id: 'supa-admin-1',
  email: 'admin@example.school.uk',
};

const getUserMock = vi.fn(async () => ({
  data: { user: authUser },
  error: null,
}));

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: { getUser: getUserMock },
  }),
  createServiceRoleClient: () => serviceRoleClientMock,
}));

// verifySchoolMember: flip between admin / teacher / null based on the
// mocked user id.
let memberRole: 'admin' | 'teacher' | null = 'admin';
vi.mock('@/lib/school-auth', () => ({
  verifySchoolMember: vi.fn(async (_userId: string, roles?: string[]) => {
    if (memberRole === null) return null;
    if (roles && !roles.includes(memberRole)) return null;
    return {
      id: 'member-1',
      user_id: 'supa-admin-1',
      school_id: 'school-1',
      role: memberRole,
      invite_status: 'accepted',
      schools: { id: 'school-1', name: 'Test Academy' },
    };
  }),
}));

// Rate limiter: permissive by default.
vi.mock('@/lib/rate-limit', () => ({
  rateLimit: vi.fn(async () => ({ success: true, resetAt: Date.now() + 60_000 })),
  getClientIp: vi.fn(() => '127.0.0.1'),
}));

// Email sink.
vi.mock('@/lib/email', () => ({
  sendEmail: vi.fn(async () => ({ success: true, messageId: 'm-1' })),
}));

// Service role client — auth admin + supabase-table helpers.
const createdAuthUsers: Array<{ email: string; id: string }> = [];
const deletedAuthUserIds: string[] = [];
let authCreateUserShouldFail = false;
const serviceRoleClientMock = {
  auth: {
    admin: {
      createUser: vi.fn(async ({ email }: { email: string }) => {
        if (authCreateUserShouldFail) {
          return { data: null, error: { message: 'create failed' } };
        }
        const id = `authid-${createdAuthUsers.length + 1}`;
        createdAuthUsers.push({ email, id });
        return { data: { user: { id, email } }, error: null };
      }),
      deleteUser: vi.fn(async (id: string) => {
        deletedAuthUserIds.push(id);
        return { data: null, error: null };
      }),
    },
  },
  from: vi.fn(() => ({
    upsert: vi.fn(async () => ({ data: null, error: null })),
  })),
};

// Prisma mock — in-memory state so idempotency and rollback can be asserted.
interface JobRow {
  id: string;
  idempotencyKey: string;
  adminUserId: string;
  schoolId: string;
  fileName: string;
  rowCount: number;
  successCount: number;
  createdCount: number;
  updatedCount: number;
  skippedCount: number;
  errorCount: number;
  errorsJson: unknown;
  status: string;
  createdAt: Date;
  completedAt: Date | null;
}

let jobs: JobRow[] = [];
let users: Array<{ id: string; email: string }> = [];
let userCreateShouldFailOn: string | null = null;

const prismaMock = {
  bulkUploadJob: {
    findUnique: vi.fn(
      async ({ where }: { where: { idempotencyKey?: string; id?: string } }) =>
        jobs.find(
          (j) =>
            (where.idempotencyKey !== undefined &&
              j.idempotencyKey === where.idempotencyKey) ||
            (where.id !== undefined && j.id === where.id),
        ) ?? null,
    ),
    create: vi.fn(async ({ data }: { data: Partial<JobRow> }) => {
      const row: JobRow = {
        id: data.id ?? `job-${jobs.length + 1}`,
        idempotencyKey: data.idempotencyKey ?? '',
        adminUserId: data.adminUserId ?? '',
        schoolId: data.schoolId ?? '',
        fileName: data.fileName ?? '',
        rowCount: data.rowCount ?? 0,
        successCount: 0,
        createdCount: 0,
        updatedCount: 0,
        skippedCount: 0,
        errorCount: 0,
        errorsJson: null,
        status: data.status ?? 'pending',
        createdAt: new Date(),
        completedAt: null,
      };
      jobs.push(row);
      return row;
    }),
    update: vi.fn(
      async ({
        where,
        data,
      }: {
        where: { id: string };
        data: Partial<JobRow>;
      }) => {
        const row = jobs.find((j) => j.id === where.id);
        if (row) Object.assign(row, data);
        return row as JobRow;
      },
    ),
  },
  user: {
    findMany: vi.fn(async () => [] as Array<{ id: string; email: string }>),
    create: vi.fn(async ({ data }: { data: { email: string } }) => {
      if (userCreateShouldFailOn && data.email === userCreateShouldFailOn) {
        throw new Error('simulated Prisma failure');
      }
      const row = { id: `u-${users.length + 1}`, email: data.email };
      users.push(row);
      return row;
    }),
  },
  // Provide a real transaction runner that calls the callback with a tx
  // handle pointing at the same mocks, then rolls back on throw by wiping
  // any users it created during the callback.
  $transaction: vi.fn(async (cb: (tx: unknown) => Promise<unknown>) => {
    const snapshotUsers = users.slice();
    const snapshotJobs = jobs.map((j) => ({ ...j }));
    try {
      return await cb(prismaMock);
    } catch (e) {
      users = snapshotUsers;
      jobs = snapshotJobs;
      throw e;
    }
  }),
};

// `vi.mock` is hoisted above the module-level const declarations, so we
// cannot close over `prismaMock` directly — it would be in the temporal
// dead zone when the route imports `@/lib/prisma` and the factory fires.
// A Proxy defers the lookup until a property is actually accessed, by
// which time the module-level constants have been initialised.
vi.mock('@/lib/prisma', () => ({
  prisma: new Proxy(
    {},
    {
      get: (_target, prop) => (prismaMock as Record<string | symbol, unknown>)[prop],
    },
  ),
}));

// Import the handler AFTER the mocks are registered.
import { POST } from './route';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeRequest(body: unknown): NextRequest {
  return new NextRequest('http://localhost/api/school/bulk-upload/commit', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
}

const baseRow = {
  row: 2,
  firstName: 'Alex',
  lastName: 'Morgan',
  email: 'alex@example.school.uk',
  yearGroup: 'Year 10',
  classCode: '10A',
};

function freshBody(overrides: Partial<{ idempotencyKey: string }> = {}) {
  return {
    fileName: 'students.csv',
    idempotencyKey: overrides.idempotencyKey ?? `idem-${randomKey()}`,
    rows: [
      { ...baseRow, row: 2 },
      { ...baseRow, row: 3, email: 'priya@example.school.uk', firstName: 'Priya' },
    ],
  };
}

function randomKey() {
  // Produce a 16-char base-36 suffix. `Math.random().toString(36)` can
  // return short strings when the underlying float has leading base-36
  // zeros (e.g. `0.4xyz`), which made the generated idempotency key
  // drop below the route's 16-char minimum and flip the tests to 422.
  // Zero-padding keeps the length invariant regardless of entropy.
  return Math.random().toString(36).slice(2).padEnd(16, '0').slice(0, 16);
}

// ---------------------------------------------------------------------------
// Test resets
// ---------------------------------------------------------------------------

beforeEach(() => {
  jobs = [];
  users = [];
  createdAuthUsers.length = 0;
  deletedAuthUserIds.length = 0;
  authCreateUserShouldFail = false;
  userCreateShouldFailOn = null;
  authUser = { id: 'supa-admin-1', email: 'admin@example.school.uk' };
  memberRole = 'admin';
  vi.clearAllMocks();
  // Re-attach default prisma findMany behaviour (cleared by clearAllMocks).
  prismaMock.user.findMany.mockImplementation(async () => []);
});

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('POST /api/school/bulk-upload/commit', () => {
  it('returns 401 when the user is not signed in', async () => {
    authUser = null;
    const res = await POST(makeRequest(freshBody()));
    expect(res.status).toBe(401);
  });

  it('returns 403 when the signed-in user is not a school admin (RBAC)', async () => {
    memberRole = 'teacher';
    const res = await POST(makeRequest(freshBody()));
    expect(res.status).toBe(403);
    const json = await res.json();
    expect(json.error).toMatch(/admin/i);
  });

  it('creates new users on the happy path and returns per-row outcomes', async () => {
    const res = await POST(makeRequest(freshBody()));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.created).toBe(2);
    expect(json.updated).toBe(0);
    expect(json.skipped).toBe(0);
    expect(json.outcomes).toHaveLength(2);
    expect(users).toHaveLength(2);
    expect(createdAuthUsers).toHaveLength(2);
    // The job row is flipped to 'completed' inside the transaction.
    expect(jobs[0].status).toBe('completed');
    expect(jobs[0].completedAt).not.toBeNull();
  });

  it('is idempotent: the same key twice returns the cached response without re-creating users', async () => {
    const body = freshBody({ idempotencyKey: 'idem-fixed-key-12345' });
    const first = await POST(makeRequest(body));
    expect(first.status).toBe(200);
    const firstJson = await first.json();
    expect(firstJson.created).toBe(2);

    // Second call with the same key — no new auth users, no new User rows.
    const second = await POST(makeRequest(body));
    expect(second.status).toBe(200);
    const secondJson = await second.json();
    expect(secondJson.jobId).toBe(firstJson.jobId);
    expect(secondJson.idempotent).toBe(true);
    expect(createdAuthUsers).toHaveLength(2); // unchanged
    expect(users).toHaveLength(2); // unchanged
    expect(jobs).toHaveLength(1); // still one job row
  });

  it('rolls back every create when Prisma throws mid-batch', async () => {
    // Force the second user.create to throw.
    userCreateShouldFailOn = 'priya@example.school.uk';
    const res = await POST(makeRequest(freshBody()));
    expect(res.status).toBe(500);
    const json = await res.json();
    expect(json.error).toMatch(/commit failed/i);
    // Prisma tx rolled back → users wiped.
    expect(users).toHaveLength(0);
    // Auth users created before the failure were revoked.
    expect(deletedAuthUserIds.length).toBeGreaterThan(0);
    // Job row reflects the failure.
    expect(jobs[0].status).toBe('failed');
  });

  it('rejects commits missing an idempotency key', async () => {
    const bad = freshBody();
    // deliberately break the key
    (bad as { idempotencyKey: string }).idempotencyKey = 'x';
    const res = await POST(makeRequest(bad));
    expect(res.status).toBe(422);
  });

  it('rejects an empty rows array', async () => {
    const res = await POST(
      makeRequest({
        fileName: 'empty.csv',
        idempotencyKey: 'idem-' + randomKey(),
        rows: [],
      }),
    );
    expect(res.status).toBe(422);
  });
});
