/**
 * Route aggregator — mounts all route modules.
 */

import { Router } from 'express';
import authRoutes from './auth.routes.js';
import courseRoutes from './course.routes.js';
import progressRoutes from './progress.routes.js';
import healthRoutes from './health.routes.js';

const router = Router();

// Health/readiness (no prefix — /health, /ready)
router.use(healthRoutes);

// API routes
router.use('/auth', authRoutes);
router.use('/courses', courseRoutes);
router.use('/progress', progressRoutes);

export default router;
