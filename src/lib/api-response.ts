import { NextResponse } from 'next/server'

/**
 * Standardized API response helpers for consistent error handling.
 */

export function successResponse<T>(data: T, status = 200) {
  return NextResponse.json(data, { status })
}

export function errorResponse(
  error: string,
  status: number,
  headers?: Record<string, string>
) {
  return NextResponse.json({ error }, { status, headers })
}

export function unauthorizedResponse(message = 'Unauthorized') {
  return errorResponse(message, 401)
}

export function forbiddenResponse(message = 'Forbidden') {
  return errorResponse(message, 403)
}

export function notFoundResponse(message = 'Not found') {
  return errorResponse(message, 404)
}

export function badRequestResponse(message = 'Bad request') {
  return errorResponse(message, 400)
}

export function rateLimitResponse(resetAt: number) {
  const retryAfter = Math.ceil((resetAt - Date.now()) / 1000)
  return errorResponse(
    'Too many requests. Please try again later.',
    429,
    { 'Retry-After': String(retryAfter) }
  )
}

export function serverErrorResponse(message = 'Internal server error') {
  return errorResponse(message, 500)
}
