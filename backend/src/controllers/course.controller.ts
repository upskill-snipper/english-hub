/**
 * Course controller — list, get, create, update.
 */

import type { Request, Response } from 'express';
import { courseService } from '../services/course.service.js';

export const courseController = {
  async list(req: Request, res: Response) {
    const board = typeof req.query['board'] === 'string' ? req.query['board'] : undefined;
    const tier = typeof req.query['tier'] === 'string' ? req.query['tier'] : undefined;
    const limit = typeof req.query['limit'] === 'string' ? parseInt(req.query['limit'], 10) : undefined;
    const offset = typeof req.query['offset'] === 'string' ? parseInt(req.query['offset'], 10) : undefined;
    const result = await courseService.list({ board, tier, limit, offset });
    res.json(result);
  },

  async getById(req: Request, res: Response) {
    const id = req.params['id'] as string;
    const course = await courseService.getWithModules(id);
    res.json({ course });
  },

  async create(req: Request, res: Response) {
    const course = await courseService.create(req.body);
    res.status(201).json({ course });
  },

  async update(req: Request, res: Response) {
    const id = req.params['id'] as string;
    const course = await courseService.update(id, req.body);
    res.json({ course });
  },
};
