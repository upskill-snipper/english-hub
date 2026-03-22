import { Router } from 'express';
import { healthController } from '../controllers/health.controller.js';
import { asyncHandler } from '../utils/async-handler.js';

const router = Router();

router.get('/health', healthController.health);
router.get('/ready', asyncHandler(healthController.ready));

export default router;
