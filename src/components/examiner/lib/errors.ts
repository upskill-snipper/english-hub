// ─── Examiner tool - turning an API failure into something a teacher can act on

import { readConsentRefusal, type AIConsentRefusal } from '@/components/consent/ai-consent-refusal'
import { ApiError } from './sse'

export type ToolFailure =
  | { kind: 'consent'; refusal: AIConsentRefusal }
  | { kind: 'upgrade'; message: string }
  | { kind: 'ceiling'; message: string }
  | { kind: 'signin'; message: string }
  | { kind: 'message'; message: string }

export function describeFailure(err: unknown): ToolFailure {
  if (err instanceof ApiError) {
    const refusal = readConsentRefusal(err.status, err.body)
    if (refusal) return { kind: 'consent', refusal }
    if (err.status === 401) return { kind: 'signin', message: err.message }
    if (err.code === 'subscription_required') return { kind: 'upgrade', message: err.message }
    if (err.code === 'monthly_ceiling') return { kind: 'ceiling', message: err.message }
    if (err.status === 402) return { kind: 'upgrade', message: err.message }
    if (err.status === 429)
      return {
        kind: 'message',
        message: 'Too many requests in a short time. Wait a minute and try again.',
      }
    if (err.status === 413) return { kind: 'message', message: err.message }
    return { kind: 'message', message: err.message }
  }
  if (err instanceof DOMException && err.name === 'AbortError') {
    return { kind: 'message', message: 'Stopped.' }
  }
  return { kind: 'message', message: err instanceof Error ? err.message : String(err) }
}
