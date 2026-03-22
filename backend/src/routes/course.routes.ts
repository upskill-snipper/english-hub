import { Router } from 'express';
import { z } from 'zod';
import { courseController } from '../controllers/course.controller.js';
import { requireRole } from '../middleware/auth.middleware.js';
import { validateBody } from '../middleware/validate.middleware.js';
import { asyncHandler } from '../utils/async-handler.js';

const router = Router();

const createCourseSchema = z.object({
  slug: z.string().min(1).max(200).regex(/^[a-z0-9-]+$/, 'Slug must be lowercase alphanumeric with hyphens'),
  title: z.string().min(1).max(500),
  description: z.string().max(5000).optional(),
  board: z.string().max(50).optional(),
  tier: z.string().max(50).optional(),
  published: z.boolean().optional(),
});

const updateCourseSchema = z.object({
  title: z.string().min(1).max(500).optional(),
  description: z.string().max(5000).optional(),
  board: z.string().max(50).optional(),
  tier: z.string().max(50).optional(),
  published: z.boolean().optional(),
});

// Public — anyone can browse published courses
router.get('/', asyncHandler(courseController.list));
router.get('/:id', asyncHandler(courseController.getById));

// Admin only — create and update courses
router.post('/', requireRole('admin', 'teacher'), validateBody(createCourseSchema), asyncHandler(courseController.create));
router.patch('/:id', requireRole('admin', 'teacher'), validateBody(updateCourseSchema), asyncHandler(courseController.update));

export default router;
