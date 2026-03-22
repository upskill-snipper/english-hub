/**
 * User data access layer.
 * All SQL is parameterised to prevent injection.
 */

import { pool } from './db.js';

export interface UserRow {
  id: string;
  email: string;
  password_hash: string;
  full_name: string;
  role: string;
  avatar_url: string | null;
  created_at: Date;
  updated_at: Date;
}

export type UserPublic = Omit<UserRow, 'password_hash'>;

const PUBLIC_COLUMNS = 'id, email, full_name, role, avatar_url, created_at, updated_at';

export const userRepository = {
  async findById(id: string): Promise<UserPublic | null> {
    const { rows } = await pool.query<UserPublic>(
      `SELECT ${PUBLIC_COLUMNS} FROM users WHERE id = $1`,
      [id],
    );
    return rows[0] ?? null;
  },

  async findByEmail(email: string): Promise<UserRow | null> {
    const { rows } = await pool.query<UserRow>(
      `SELECT * FROM users WHERE email = $1`,
      [email.toLowerCase()],
    );
    return rows[0] ?? null;
  },

  async create(data: {
    email: string;
    passwordHash: string;
    fullName: string;
    role?: string;
  }): Promise<UserPublic> {
    const { rows } = await pool.query<UserPublic>(
      `INSERT INTO users (email, password_hash, full_name, role)
       VALUES ($1, $2, $3, $4)
       RETURNING ${PUBLIC_COLUMNS}`,
      [data.email.toLowerCase(), data.passwordHash, data.fullName, data.role ?? 'student'],
    );
    return rows[0]!;
  },

  async update(id: string, data: Partial<{
    fullName: string;
    avatarUrl: string | null;
    role: string;
  }>): Promise<UserPublic | null> {
    const sets: string[] = [];
    const values: unknown[] = [];
    let idx = 1;

    if (data.fullName !== undefined) {
      sets.push(`full_name = $${idx++}`);
      values.push(data.fullName);
    }
    if (data.avatarUrl !== undefined) {
      sets.push(`avatar_url = $${idx++}`);
      values.push(data.avatarUrl);
    }
    if (data.role !== undefined) {
      sets.push(`role = $${idx++}`);
      values.push(data.role);
    }

    if (sets.length === 0) return this.findById(id);

    values.push(id);
    const { rows } = await pool.query<UserPublic>(
      `UPDATE users SET ${sets.join(', ')} WHERE id = $${idx}
       RETURNING ${PUBLIC_COLUMNS}`,
      values,
    );
    return rows[0] ?? null;
  },

  async list(options: { limit?: number; offset?: number } = {}): Promise<{
    users: UserPublic[];
    total: number;
  }> {
    const limit = options.limit ?? 50;
    const offset = options.offset ?? 0;

    const [dataResult, countResult] = await Promise.all([
      pool.query<UserPublic>(
        `SELECT ${PUBLIC_COLUMNS} FROM users ORDER BY created_at DESC LIMIT $1 OFFSET $2`,
        [limit, offset],
      ),
      pool.query<{ count: string }>(`SELECT COUNT(*) AS count FROM users`),
    ]);

    return {
      users: dataResult.rows,
      total: parseInt(countResult.rows[0]?.count ?? '0', 10),
    };
  },
};
