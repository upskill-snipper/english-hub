/**
 * Progress controller — get / update student progress.
 */

import type { Request, Response } from 'express';
import { progressService } from '../services/progress.service.js';

export const progressController = {
  async getMyProgress(req: Request, res: Response) {
    const userId = req.user!.sub;
    const courseId = req.query['courseId'] as string | undefined;
    const progress = await progressService.getForUser(userId, courseId);
    res.json({ progress });
  },

  async updateProgress(req: Request, res: Response) {
    const userId = req.user!.sub;
    const { moduleId, completed, score, timeSpentSecs } = req.body;
    const progress = await progressService.updateProgress({
      userId,
      moduleId,
      completed,
      score,
      timeSpentSecs,
    });
    res.json({ progress });
  },

  async getMyStats(req: Request, res: Response) {
    const userId = req.user!.sub;
    const stats = await progressService.getUserStats(userId);
    res.json({ stats });
  },
};
