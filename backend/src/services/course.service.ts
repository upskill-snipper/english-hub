/**
 * Course domain service.
 */

import { courseRepository } from '../data/course.repository.js';
import { NotFoundError } from '../utils/errors.js';

export const courseService = {
  async list(options: {
    board?: string;
    tier?: string;
    limit?: number;
    offset?: number;
  }) {
    return courseRepository.list({ ...options, publishedOnly: true });
  },

  async getByIdOrSlug(idOrSlug: string) {
    // Try UUID first, then slug
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(idOrSlug);
    const course = isUuid
      ? await courseRepository.findById(idOrSlug)
      : await courseRepository.findBySlug(idOrSlug);

    if (!course) throw new NotFoundError('Course not found');
    return course;
  },

  async getWithModules(idOrSlug: string) {
    const course = await this.getByIdOrSlug(idOrSlug);
    const modules = await courseRepository.getModules(course.id);
    return { ...course, modules };
  },

  async create(data: {
    slug: string;
    title: string;
    description?: string;
    board?: string;
    tier?: string;
    published?: boolean;
  }) {
    return courseRepository.create(data);
  },

  async update(id: string, data: Partial<{
    title: string;
    description: string;
    board: string;
    tier: string;
    published: boolean;
  }>) {
    const course = await courseRepository.update(id, data);
    if (!course) throw new NotFoundError('Course not found');
    return course;
  },
};
