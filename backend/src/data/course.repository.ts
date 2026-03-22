/**
 * Course data access layer.
 */

import { pool } from './db.js';

export interface CourseRow {
  id: string;
  slug: string;
  title: string;
  description: string;
  board: string;
  tier: string;
  published: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface ModuleRow {
  id: string;
  course_id: string;
  title: string;
  sort_order: number;
  content: Record<string, unknown>;
  created_at: Date;
  updated_at: Date;
}

export const courseRepository = {
  async findById(id: string): Promise<CourseRow | null> {
    const { rows } = await pool.query<CourseRow>(
      `SELECT * FROM courses WHERE id = $1`,
      [id],
    );
    return rows[0] ?? null;
  },

  async findBySlug(slug: string): Promise<CourseRow | null> {
    const { rows } = await pool.query<CourseRow>(
      `SELECT * FROM courses WHERE slug = $1`,
      [slug],
    );
    return rows[0] ?? null;
  },

  async list(options: {
    board?: string;
    tier?: string;
    publishedOnly?: boolean;
    limit?: number;
    offset?: number;
  } = {}): Promise<{ courses: CourseRow[]; total: number }> {
    const conditions: string[] = [];
    const values: unknown[] = [];
    let idx = 1;

    if (options.publishedOnly !== false) {
      conditions.push(`published = true`);
    }
    if (options.board) {
      conditions.push(`board = $${idx++}`);
      values.push(options.board);
    }
    if (options.tier) {
      conditions.push(`tier = $${idx++}`);
      values.push(options.tier);
    }

    const where = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
    const limit = options.limit ?? 50;
    const offset = options.offset ?? 0;

    values.push(limit, offset);

    const [dataResult, countResult] = await Promise.all([
      pool.query<CourseRow>(
        `SELECT * FROM courses ${where} ORDER BY created_at DESC LIMIT $${idx++} OFFSET $${idx}`,
        values,
      ),
      pool.query<{ count: string }>(
        `SELECT COUNT(*) AS count FROM courses ${where}`,
        values.slice(0, -2), // exclude limit/offset
      ),
    ]);

    return {
      courses: dataResult.rows,
      total: parseInt(countResult.rows[0]?.count ?? '0', 10),
    };
  },

  async create(data: {
    slug: string;
    title: string;
    description?: string;
    board?: string;
    tier?: string;
    published?: boolean;
  }): Promise<CourseRow> {
    const { rows } = await pool.query<CourseRow>(
      `INSERT INTO courses (slug, title, description, board, tier, published)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [
        data.slug,
        data.title,
        data.description ?? '',
        data.board ?? 'AQA',
        data.tier ?? 'GCSE',
        data.published ?? false,
      ],
    );
    return rows[0]!;
  },

  async update(id: string, data: Partial<{
    title: string;
    description: string;
    board: string;
    tier: string;
    published: boolean;
  }>): Promise<CourseRow | null> {
    const sets: string[] = [];
    const values: unknown[] = [];
    let idx = 1;

    for (const [key, value] of Object.entries(data)) {
      if (value !== undefined) {
        sets.push(`${key} = $${idx++}`);
        values.push(value);
      }
    }

    if (sets.length === 0) return this.findById(id);

    values.push(id);
    const { rows } = await pool.query<CourseRow>(
      `UPDATE courses SET ${sets.join(', ')} WHERE id = $${idx} RETURNING *`,
      values,
    );
    return rows[0] ?? null;
  },

  /** Get modules for a course, ordered by sort_order */
  async getModules(courseId: string): Promise<ModuleRow[]> {
    const { rows } = await pool.query<ModuleRow>(
      `SELECT * FROM modules WHERE course_id = $1 ORDER BY sort_order ASC`,
      [courseId],
    );
    return rows;
  },
};
