/**
 * Authentication service — signup, login, token management.
 */

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from '../config/index.js';
import { userRepository } from '../data/user.repository.js';
import {
  BadRequestError,
  ConflictError,
  UnauthorizedError,
} from '../utils/errors.js';
import type { JwtPayload } from '../middleware/auth.middleware.js';

const BCRYPT_ROUNDS = 12;

function signToken(payload: JwtPayload): string {
  return jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn as string,
  } as jwt.SignOptions);
}

export const authService = {
  async signup(data: {
    email: string;
    password: string;
    fullName: string;
  }) {
    // Check for existing user
    const existing = await userRepository.findByEmail(data.email);
    if (existing) {
      throw new ConflictError('An account with this email already exists');
    }

    // Validate password strength
    if (data.password.length < 8) {
      throw new BadRequestError('Password must be at least 8 characters');
    }

    const passwordHash = await bcrypt.hash(data.password, BCRYPT_ROUNDS);
    const user = await userRepository.create({
      email: data.email,
      passwordHash,
      fullName: data.fullName,
    });

    const token = signToken({ sub: user.id, email: user.email, role: user.role });

    return { user, token };
  },

  async login(data: { email: string; password: string }) {
    const user = await userRepository.findByEmail(data.email);
    if (!user) {
      throw new UnauthorizedError('Invalid email or password');
    }

    const valid = await bcrypt.compare(data.password, user.password_hash);
    if (!valid) {
      throw new UnauthorizedError('Invalid email or password');
    }

    const token = signToken({ sub: user.id, email: user.email, role: user.role });

    // Return user without password_hash
    const { password_hash: _, ...publicUser } = user;
    return { user: publicUser, token };
  },

  /** Verify and decode a token (for middleware or refresh flows) */
  verifyToken(token: string): JwtPayload {
    try {
      return jwt.verify(token, config.jwt.secret) as JwtPayload;
    } catch {
      throw new UnauthorizedError('Invalid or expired token');
    }
  },
};
