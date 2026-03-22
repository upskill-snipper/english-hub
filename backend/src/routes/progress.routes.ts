import { Router } from 'express';
import { z } from 'zod';
import { progressController } from '../controllers/progress.controller.js';
import { requireAuth } from '../middleware/auth.middleware.js';
import { validateBody } from '../middleware/validate.middleware.js';
import { asyncHandler } from '../utils/async-handler.js';

const router = Router();

const updateProgressSchema = z.object({
  moduleId: z.string().uuid('Invalid module ID'),
  completed: z.boolean().optional(),
  score: z.number().min(0).max(100).nullable().optional(),
  timeSpentSecs: z.number().int().min(0).optional(),
});

// All progress routes require authentication
router.use(requireAuth);

router.get('/', asyncHandler(progressController.getMyProgress));
router.get('/stats', asyncHandler(progressController.getMyStats));
router.post('/', validateBody(updateProgressSchema), asyncHandler(progressController.updateProgress));

export default router;
