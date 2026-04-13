import { describe, it, expect, beforeEach, vi } from 'vitest'
import { isAiOptedOut, setAiOptedOut } from '@/lib/ai-preferences'

describe('AI Preferences (ai-preferences.ts)', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  describe('isAiOptedOut', () => {
    it('returns false by default (no localStorage entry)', () => {
      expect(isAiOptedOut()).toBe(false)
    })

    it('returns true when opted out', () => {
      localStorage.setItem('english-hub-ai-opted-out', 'true')
      expect(isAiOptedOut()).toBe(true)
    })

    it('returns false when explicitly opted in', () => {
      localStorage.setItem('english-hub-ai-opted-out', 'false')
      expect(isAiOptedOut()).toBe(false)
    })

    it('returns false for unexpected localStorage values', () => {
      localStorage.setItem('english-hub-ai-opted-out', 'yes')
      expect(isAiOptedOut()).toBe(false)
    })

    it('returns false for empty string', () => {
      localStorage.setItem('english-hub-ai-opted-out', '')
      expect(isAiOptedOut()).toBe(false)
    })
  })

  describe('setAiOptedOut', () => {
    it('sets opted out to true', () => {
      setAiOptedOut(true)
      expect(localStorage.getItem('english-hub-ai-opted-out')).toBe('true')
    })

    it('sets opted out to false', () => {
      setAiOptedOut(false)
      expect(localStorage.getItem('english-hub-ai-opted-out')).toBe('false')
    })

    it('overwrites previous value', () => {
      setAiOptedOut(true)
      expect(isAiOptedOut()).toBe(true)

      setAiOptedOut(false)
      expect(isAiOptedOut()).toBe(false)
    })

    it('round-trips with isAiOptedOut', () => {
      setAiOptedOut(true)
      expect(isAiOptedOut()).toBe(true)

      setAiOptedOut(false)
      expect(isAiOptedOut()).toBe(false)
    })
  })
})
