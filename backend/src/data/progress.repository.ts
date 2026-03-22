/**
 * Student progress data access layer.
 */

import { pool } from './db.js';

export interface ProgressRow {
  id: string;
  user_id: string;
  module_id: string;
  completed: boolean;
  score: number | null;
  time_spent_secs: number;
  completed_at: Date | null;
  updated_at: Date;
}

export const progressRepository = {
  async findByUserAndModule(userId: string, moduleId: string): Promise<ProgressRow | null> {
    const { rows } = await pool.query<ProgressRow>(
      `SELECT * FROM progress WHERE user_id = $1 AND module_id = $2`,
      [userId, moduleId],
    );
    return rows[0] ?? null;
  },

  /** Get all progress for a user, optionally filtered to a specific course */
  async listByUser(userId: string, courseId?: string): Promise<ProgressRow[]> {
    if (courseId) {
      const { rows } = await pool.query<ProgressRow>(
        `SELECT p.* FROM progress p
         JOIN modules m ON m.id = p.module_id
         WHERE p.user_id = $1 AND m.course_id = $2
         ORDER BY m.sort_order ASC`,
        [userId, courseId],
      );
      return rows;
    }

    const { rows } = await pool.query<ProgressRow>(
      `SELECT * FROM progress WHERE user_id = $1 ORDER BY updated_at DESC`,
      [userId],
    );
    return rows;
  },

  /** Upsert progress — creates or updates the record for a user/module pair */
  async upsert(data: {
    userId: string;
    moduleId: string;
    completed?: boolean;
    score?: number | null;
    timeSpentSecs?: number;
  }): Promise<ProgressRow> {
    const { rows } = await pool.query<ProgressRow>(
      `INSERT INTO progress (user_id, module_id, completed, score, time_spent_secs, completed_at)
       VALUES ($1, $2, $3, $4, $5, CASE WHEN $3 THEN now() ELSE NULL END)
       ON CONFLICT (user_id, module_id) DO UPDATE SET
         completed = COALESCE($3, progress.completed),
         score = COALESCE($4, progress.score),
         time_spent_secs = progress.time_spent_secs + COALESCE($5, 0),
         completed_at = CASE
           WHEN $3 AND progress.completed_at IS NULL THEN now()
           ELSE progress.completed_at
         END
       RETURNING *`,
      [
        data.userId,
        data.moduleId,
        data.completed ?? false,
        data.score ?? null,
        data.timeSpentSecs ?? 0,
      ],
    );
    return rows[0]!;
  },

  /** Summary stats for a user */
  async getUserStats(userId: string): Promise<{
    totalModules: number;
    completedModules: number;
    avgScore: number;
    totalTimeSecs: number;
  }> {
    const { rows } = await pool.query<{
      total_modules: string;
      completed_modules: string;
      avg_score: string | null;
      total_time_secs: string;
    }>(
      `SELECT
         COUNT(*) AS total_modules,
         COUNT(*) FILTER (WHERE completed) AS completed_modules,
         AVG(score) FILTER (WHERE score IS NOT NULL) AS avg_score,
         COALESCE(SUM(time_spent_secs), 0) AS total_time_secs
       FROM progress
       WHERE user_id = $1`,
      [userId],
    );

    const row = rows[0];
    return {
      totalModules: parseInt(row?.total_modules ?? '0', 10),
      completedModules: parseInt(row?.completed_modules ?? '0', 10),
      avgScore: parseFloat(row?.avg_score ?? '0'),
      totalTimeSecs: parseInt(row?.total_time_secs ?? '0', 10),
    };
  },
};
