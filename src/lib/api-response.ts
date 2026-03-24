import { NextRequest, NextResponse } from 'next/server'

/**
 * Standardized API response helpers for consistent error handling.
 */

export function successResponse<T>(data: T, status = 200) {
  return NextResponse.json(data, { status })
}

export function errorResponse(
  error: string,
  status: number,
  headers?: Record<string, string>,
  details?: Record<string, unknown>
) {
  return NextResponse.json({ error, ...details }, { status, headers })
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

export function unsupportedMediaTypeResponse(message = 'Content-Type must be application/json') {
  return errorResponse(message, 415)
}

export function serviceUnavailableResponse(message = 'Service temporarily unavailable') {
  return errorResponse(message, 503)
}

export function serverErrorResponse(message = 'Internal server error') {
  return errorResponse(message, 500)
}

export function requireJsonContentType(request: NextRequest): NextResponse | null {
  const ct = request.headers.get('content-type');
  if (!ct || !ct.includes('application/json')) {
    return NextResponse.json(
      { error: 'Content-Type must be application/json' },
      { status: 415 }
    );
  }
  return null;
}
