/**
 * Progress tracking service.
 */

import { progressRepository } from '../data/progress.repository.js';

export const progressService = {
  async getForUser(userId: string, courseId?: string) {
    return progressRepository.listByUser(userId, courseId);
  },

  async updateProgress(data: {
    userId: string;
    moduleId: string;
    completed?: boolean;
    score?: number | null;
    timeSpentSecs?: number;
  }) {
    return progressRepository.upsert(data);
  },

  async getUserStats(userId: string) {
    return progressRepository.getUserStats(userId);
  },
};
