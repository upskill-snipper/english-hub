/**
 * Auth controller — signup, login, logout, me.
 */

import type { Request, Response } from 'express';
import { authService } from '../services/auth.service.js';
import { config } from '../config/index.js';
import { userRepository } from '../data/user.repository.js';
import { NotFoundError } from '../utils/errors.js';

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: config.isProduction,
  sameSite: 'lax' as const,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  path: '/',
  ...(config.cookieDomain ? { domain: config.cookieDomain } : {}),
};

export const authController = {
  async signup(req: Request, res: Response) {
    const { email, password, fullName } = req.body;
    const { user, token } = await authService.signup({ email, password, fullName });

    res.cookie('token', token, COOKIE_OPTIONS);
    res.status(201).json({ user, token });
  },

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const { user, token } = await authService.login({ email, password });

    res.cookie('token', token, COOKIE_OPTIONS);
    res.json({ user, token });
  },

  async logout(_req: Request, res: Response) {
    res.clearCookie('token', { path: '/' });
    res.json({ message: 'Logged out' });
  },

  async me(req: Request, res: Response) {
    const userId = req.user!.sub;
    const user = await userRepository.findById(userId);
    if (!user) throw new NotFoundError('User not found');
    res.json({ user });
  },

  async updateProfile(req: Request, res: Response) {
    const userId = req.user!.sub;
    const { fullName, avatarUrl } = req.body;
    const user = await userRepository.update(userId, { fullName, avatarUrl });
    if (!user) throw new NotFoundError('User not found');
    res.json({ user });
  },
};
