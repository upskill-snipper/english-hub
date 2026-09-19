import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { EN_MESSAGES } from '@/lib/i18n/generated/en'
import { AR_MESSAGES } from '@/lib/i18n/generated/ar'
import { ES_MESSAGES } from '@/lib/i18n/generated/es'

/**
 * Every dictation button on the site was decorative.
 *
 * REPORTED FROM THE LIVE SITE: the microphone on /marking/submit does nothing.
 *
 * THE CAUSE WAS ONE DIRECTIVE IN next.config.js. The site sent
 *
 *   Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(self)
 *
 * and `microphone=()` is not "no third parties", it is "no origin at all,
 * including this one". So the Web Speech API could never start. The button
 * rendered, because `SpeechRecognition` exists in Chrome whatever the policy
 * says; it just refused to listen.
 *
 * AND NOBODY SAW AN ERROR, which is why it survived. `useDictation` has always
 * accepted an `onError`, and not one of the call sites passed one, so the
 * failure was caught, assigned to a callback that was undefined, and dropped.
 * The button stopped pulsing and that was the whole of the feedback.
 *
 * Both halves are fixed here, and both matter. The policy makes it work; the
 * error display means that the next time it does not - a user who denies the
 * permission, a browser that withdraws it - the reader is told, instead of
 * clicking a microphone that silently does nothing.
 */

const ROOT = process.cwd()
/**
 * Comments stripped, and this is the third assertion in one night's work to
 * need it. A docblock that explains a defect necessarily quotes the defect, so
 * a plain substring search over a well-commented file finds the explanation and
 * reports the bug as still present. Assert against the code.
 */
const CONFIG_SRC = readFileSync(join(ROOT, 'next.config.js'), 'utf8')
const CONFIG = CONFIG_SRC.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')
const BUTTON = readFileSync(join(ROOT, 'src/components/speech/DictationButton.tsx'), 'utf8')
const HOOK = readFileSync(join(ROOT, 'src/lib/speech/use-dictation.ts'), 'utf8')

describe('the header that switched it off', () => {
  it('lets this origin use the microphone', () => {
    expect(CONFIG).toContain('microphone=(self)')
  })

  it('and no longer closes it to everyone', () => {
    // The exact string that was shipping.
    expect(CONFIG).not.toContain('microphone=()')
  })

  it('without opening anything else', () => {
    // A blanket relaxation would satisfy the assertion above and hand out the
    // camera as well. Nothing in this product uses it.
    expect(CONFIG).toContain('camera=()')
    expect(CONFIG).toContain('geolocation=()')
  })

  it('and keeps the wallet directive that was fixed before it', () => {
    expect(CONFIG).toContain('payment=(self)')
  })
})

describe('a failure is now visible', () => {
  it('the button passes an onError, which no call site ever did', () => {
    expect(BUTTON).toContain('onError:')
  })

  it('and renders what it says', () => {
    expect(BUTTON).toMatch(/\{error && \(/)
    expect(BUTTON).toContain('role="status"')
  })

  it('telling a blocked microphone apart from a broken one', () => {
    // "You have denied permission" and "something went wrong" need different
    // actions from the reader, and only one of them is fixable by them.
    expect(BUTTON).toContain("code === 'not-allowed'")
    expect(BUTTON).toContain('speech.mic_blocked')
    expect(BUTTON).toContain('speech.mic_failed')
  })

  it('and clears the message when the reader tries again', () => {
    // A stale error sitting under a working microphone is its own small lie.
    expect(BUTTON).toContain('setError(null)')
  })

  it('the hook still reports the code it always did', () => {
    // The hook was never the problem. If this stops firing, the button above
    // has nothing to display and the silence comes back.
    expect(HOOK).toContain('onErrorRef.current?.(event.error)')
  })
})

describe('the message exists in all three locales', () => {
  it.each(['speech.mic_blocked', 'speech.mic_failed'])('%s', (key) => {
    expect(EN_MESSAGES[key], `${key} missing from en`).toBeTruthy()
    expect(AR_MESSAGES[key], `${key} missing from ar`).toBeTruthy()
    expect(ES_MESSAGES[key], `${key} missing from es`).toBeTruthy()
  })

  it('and the blocked message tells the reader what to do about it', () => {
    expect(EN_MESSAGES['speech.mic_blocked'].toLowerCase()).toContain('allow')
  })
})

describe('how many surfaces this was broken on', () => {
  const USERS: string[] = []
  function walk(dir: string) {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, e.name)
      if (e.isDirectory()) {
        walk(full)
        continue
      }
      if (!e.name.endsWith('.tsx')) continue
      if (full.includes('DictationButton')) continue
      if (readFileSync(full, 'utf8').includes('<DictationButton')) USERS.push(full)
    }
  }
  walk(join(ROOT, 'src'))

  it('more than one, which is why the fix belongs in the header and the button', () => {
    // Seven when this was written: the marking form, essay feedback, the
    // marker, school marking, a student page and two IELTS pages. Fixing the
    // call sites one at a time would have been six chances to miss one.
    expect(USERS.length).toBeGreaterThanOrEqual(5)
  })

  it('and not one of them has to know about the error handling', () => {
    // The point of putting it in the button. A call site that had to opt in
    // would drift back to silence the moment somebody added an eighth.
    for (const f of USERS) {
      expect(readFileSync(f, 'utf8'), f).not.toContain('speech.mic_blocked')
    }
  })
})
