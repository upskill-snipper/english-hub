import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ─── Security Headers ─────────────────────────────────────────────────
// Restrictive defaults suitable for an application handling children's
// data. Adjust CSP sources as third-party integrations (Stripe, analytics)
// are added.

// ─── Content Security Policy ──────────────────────────────────────────

const CSP_DIRECTIVES = [
  // Only allow resources from same origin by default
  "default-src 'self'",

  // Scripts: self + Next.js inline scripts (uses nonce in production)
  // unsafe-inline is needed for Next.js dev mode; tighten with nonces in prod
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com",

  // Styles: self + inline (Next.js CSS-in-JS)
  "style-src 'self' 'unsafe-inline'",

  // Images: self + data URIs (for inline images) + Stripe
  "img-src 'self' data: https://*.stripe.com",

  // Fonts: self only
  "font-src 'self'",

  // API connections: self + Stripe
  "connect-src 'self' https://api.stripe.com",

  // Frames: Stripe only (for 3D Secure / payment elements)
  "frame-src https://js.stripe.com https://hooks.stripe.com",

  // No embedding this site in frames
  "frame-ancestors 'none'",

  // Forms can only submit to same origin
  "form-action 'self'",

  // Base URI restricted to self
  "base-uri 'self'",

  // Block all object/embed/applet
  "object-src 'none'",

  // Upgrade insecure requests in production
  "upgrade-insecure-requests",
];

const CONTENT_SECURITY_POLICY = CSP_DIRECTIVES.join("; ");

// ─── All Security Headers ─────────────────────────────────────────────

export const securityHeaders: Record<string, string> = {
  "Content-Security-Policy": CONTENT_SECURITY_POLICY,
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
  "Permissions-Policy":
    "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  "X-DNS-Prefetch-Control": "off",
  "X-Permitted-Cross-Domain-Policies": "none",
};

// ─── Middleware Helper ─────────────────────────────────────────────────

/**
 * Apply security headers to an existing NextResponse.
 */
export function applySecurityHeaders(response: NextResponse): NextResponse {
  for (const [key, value] of Object.entries(securityHeaders)) {
    response.headers.set(key, value);
  }
  return response;
}

/**
 * Next.js middleware function that adds security headers to every response.
 *
 * Usage in middleware.ts:
 *   import { securityHeadersMiddleware } from "@/lib/headers";
 *   export function middleware(request: NextRequest) {
 *     return securityHeadersMiddleware(request);
 *   }
 */
export function securityHeadersMiddleware(request: NextRequest): NextResponse {
  const response = NextResponse.next();
  return applySecurityHeaders(response);
}

// ─── next.config.js Helper ─────────────────────────────────────────────

/**
 * Security headers formatted for use in next.config.js `headers()`.
 *
 * Usage:
 *   import { nextConfigSecurityHeaders } from "@/lib/headers";
 *   module.exports = {
 *     async headers() {
 *       return [{ source: "/(.*)", headers: nextConfigSecurityHeaders }];
 *     },
 *   };
 */
export const nextConfigSecurityHeaders = Object.entries(securityHeaders).map(
  ([key, value]) => ({ key, value })
);
