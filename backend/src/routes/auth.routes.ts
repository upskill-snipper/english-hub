import { Router } from 'express';
import { z } from 'zod';
import { authController } from '../controllers/auth.controller.js';
import { requireAuth } from '../middleware/auth.middleware.js';
import { validateBody } from '../middleware/validate.middleware.js';
import { authLimiter } from '../middleware/rate-limit.middleware.js';
import { asyncHandler } from '../utils/async-handler.js';

const router = Router();

const signupSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  fullName: z.string().min(1, 'Full name is required').max(200),
});

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

const updateProfileSchema = z.object({
  fullName: z.string().min(1).max(200).optional(),
  avatarUrl: z.string().url().nullable().optional(),
});

router.post('/signup', authLimiter, validateBody(signupSchema), asyncHandler(authController.signup));
router.post('/login', authLimiter, validateBody(loginSchema), asyncHandler(authController.login));
router.post('/logout', asyncHandler(authController.logout));
router.get('/me', requireAuth, asyncHandler(authController.me));
router.patch('/me', requireAuth, validateBody(updateProfileSchema), asyncHandler(authController.updateProfile));

export default router;
