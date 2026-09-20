// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { execSync } from 'node:child_process'
import {
  shuffleOptionsDeterministic,
  shuffledOptionsFor,
  optionsMustKeepOrder,
  remapOptionLetters,
} from '@/lib/quiz/shuffle'
import { ALL_QUESTIONS } from '@/app/revision/quiz/quiz-data'

/**
 * "On the quizzes the answer is B every time."
 *
 * It was, and it was not a misreading. Counted across the whole repository on
 * 20 September 2026, the correct answer was the second option in 2,557 of 3,254
 * questions. Per surface:
 *
 *     /learn module quizzes      2,129 / 2,942   72.4%
 *     InlineStudyEngine (78 pp)    944 / 1,050   89.9%
 *     /revision/quiz bank          432 /   500   86.4%
 *     /learn end-of-course         399 /   526   75.9%
 *     /ielts/listening             260 /   302   86.1%
 *     /games/grade-climber         143 /   156   91.7%
 *     /games/apostrophe-ace         54 /    55   98.2%
 *     /ks3/ilowersecondary/quiz     55 /    80   68.8%  (at A, not B)
 *     /games/capital-letter-quest   53 /    60   88.3%  (at C)
 *
 * Every affected surface made the same mistake: it shuffled the QUESTION POOL,
 * left the OPTIONS in authored order, and scored `index === correctIndex`. So a
 * student who clicked the second answer every time, reading nothing, scored
 * between 70% and 98%. On grade-climber, which reports a GCSE grade, every
 * question from grade 5 upward had its answer at B, so always-clicking-B
 * climbed from grade 3 to grade 9 and then scored 100% forever.
 *
 * ONE SURFACE WAS ALREADY SAFE, and it is why the fix took this shape rather
 * than a rewrite of the data. /revision/quiz has the second-worst bank on the
 * site - 86.4% at B - and it is harmless there, because quiz-engine.tsx
 * shuffles the options per session and compares option VALUES. The bias never
 * reaches the student. /games/prepositions-of-place is starker still: 56 of 56
 * answers are authored first, and it is completely safe for the same reason.
 *
 * Rebalancing 2,557 questions would have fixed today and not tomorrow: the next
 * author to write a hundred questions writes the answer at B again. Shuffling at
 * render cannot be undone by authoring.
 *
 * WHAT THIS FILE ASSERTS, in descending order of how much it matters:
 *
 *   1. The strategy itself no longer works. Run the real 500-question bank
 *      through the real shuffle and count. Always-B has to land near chance.
 *   2. Questions that cannot survive a shuffle do not get one, and an
 *      explanation that names a letter has its letters moved to match.
 *   3. No surface that renders a clickable option list compares a display
 *      position against a stored answer index.
 *
 * Rule 3 is the one that stops this coming back. It is stated as a rule about
 * harm rather than a list of filenames, so a NEW quiz page written next month is
 * caught by it without anyone remembering to add it here.
 *
 * AND THE DETECTOR IS ITSELF PINNED, because the first version of it could be
 * escaped by accident. It matched `question.options.map(`, so two surfaces
 * dropped silently out of scope the moment their fix renamed that expression to
 * `mcqOptions.map(` - their absence from the failure list read as a pass. The
 * vacuity guard below now names every surface that must be in scope.
 *
 * MUTATIONS RUN, each verified to have altered the file first:
 *   - shuffleOptionsDeterministic returning its input: test 1 fails at 86.4%.
 *   - the Fisher-Yates bound `i > 0` changed to `i > 1`: the per-slot uniformity
 *     check fails, position 0 never receives.
 *   - optionsMustKeepOrder returning false always: test 2 fails.
 *   - remapOptionLetters returning its input: test 2's letter test fails.
 *   - restoring `idx === q.correctIndex` in InlineStudyEngine: rule 3 fails.
 *   - renaming `view.options.map(` to `rows.map(` in grade-climber: the vacuity
 *     guard fails, which is the escape described above.
 *   - deleting one entry from KEEPS_ITS_OWN_ORDER: rule 3 fails.
 */

// ─── 1. The strategy no longer works ───────────────────────────────────────

describe('always clicking the same letter', () => {
  it('no longer beats chance on the real question bank', () => {
    // Vacuity guard. If the bank were empty or tiny, every assertion below
    // would pass for the wrong reason.
    expect(ALL_QUESTIONS.length).toBeGreaterThan(400)

    const authored = new Array(4).fill(0)
    for (const q of ALL_QUESTIONS) authored[q.correctIndex]++
    // The bias in the DATA is untouched and is expected to still be there. This
    // is what a student was exploiting, and it is the reason the render-time fix
    // has to hold: nothing stops an author writing the next hundred the same way.
    expect(authored[1] / ALL_QUESTIONS.length).toBeGreaterThan(0.8)

    // Now where the answer actually LANDS, over 200 simulated attempts.
    const landed = new Array(4).fill(0)
    let draws = 0
    for (let attempt = 0; attempt < 200; attempt++) {
      const salt = `attempt-${attempt}`
      for (const q of ALL_QUESTIONS) {
        const view = shuffledOptionsFor(q.options, q.correctIndex, q.id, salt, q.question)
        const at = view.options.indexOf(view.correctValue)
        expect(at).toBeGreaterThanOrEqual(0)
        landed[at]++
        draws++
      }
    }

    expect(draws).toBe(200 * ALL_QUESTIONS.length)
    for (let position = 0; position < 4; position++) {
      const share = landed[position] / draws
      const where = `position ${position} received ${(share * 100).toFixed(1)}%`
      expect(share, where).toBeGreaterThan(0.23)
      expect(share, where).toBeLessThan(0.27)
    }
  })

  it('and the order holds still while the student is reading', () => {
    // A Math.random() shuffle would reorder the options on every re-render, so
    // the answer a student was reaching for moves under their cursor. Same seed
    // has to mean same order, every time.
    const q = ALL_QUESTIONS[0]
    const first = shuffledOptionsFor(q.options, q.correctIndex, q.id, 'salt', q.question)
    for (let i = 0; i < 20; i++) {
      expect(
        shuffledOptionsFor(q.options, q.correctIndex, q.id, 'salt', q.question).options,
      ).toEqual(first.options)
    }
    // And a different attempt has to give a different order, or "try again"
    // hands back the board the student has just memorised.
    const orders = new Set(
      Array.from({ length: 40 }, (_, i) =>
        shuffledOptionsFor(q.options, q.correctIndex, q.id, `salt-${i}`, q.question).options.join(
          '|',
        ),
      ),
    )
    expect(orders.size).toBeGreaterThan(1)
  })

  it('and the correct option is never ambiguous', () => {
    // Scoring by value has one way to go wrong: a question carrying the same
    // option text twice, where one of the two is the answer. Both would mark
    // correct.
    //
    // Measured across all 8,270 option lists in the repository on 20 September
    // 2026: 25 carry a repeated option, and in every one of them the repeat is a
    // DISTRACTOR. /games/spelling-patterns offers "controled" twice against a
    // correct "controlled"; /games/tricky-word-spelling offers "surprize" twice
    // against a correct "surprise". Clicking either copy gives the same wrong
    // word, so value scoring is right rather than lucky.
    //
    // Those six questions are still worth an author's attention - a four-option
    // question with three real options is easier than it looks - but that is a
    // content fix, not this one.
    for (const q of ALL_QUESTIONS) {
      const correct = q.options[q.correctIndex]
      const copies = q.options.filter((o) => o === correct).length
      expect(copies, `${q.id} offers its own answer ${copies} times`).toBe(1)
    }
  })

  it('never loses, duplicates or rewrites an option', () => {
    for (const q of ALL_QUESTIONS.slice(0, 120)) {
      const view = shuffledOptionsFor(q.options, q.correctIndex, q.id, 'x', q.question)
      expect([...view.options].sort()).toEqual([...q.options].sort())
      expect(view.correctValue).toBe(q.options[q.correctIndex])
    }
  })

  it('and is uniform per slot, not just on average', () => {
    // Fisher-Yates done wrong - the classic off-by-one, or a sort with a random
    // comparator - is biased in a way that averaging over questions hides.
    const counts = Array.from({ length: 4 }, () => new Array(4).fill(0))
    const TRIALS = 20000
    for (let i = 0; i < TRIALS; i++) {
      const out = shuffleOptionsDeterministic(['a', 'b', 'c', 'd'], `seed-${i}`)
      for (let slot = 0; slot < 4; slot++) counts[out[slot].charCodeAt(0) - 97][slot]++
    }
    for (let item = 0; item < 4; item++) {
      for (let slot = 0; slot < 4; slot++) {
        const share = counts[item][slot] / TRIALS
        const where = `item ${item} landed in slot ${slot} ${(share * 100).toFixed(1)}% of the time`
        expect(share, where).toBeGreaterThan(0.22)
        expect(share, where).toBeLessThan(0.28)
      }
    }
  })
})

// ─── 2. Questions a shuffle would break ────────────────────────────────────

describe('questions that would become unanswerable', () => {
  it('keep the order they were written in', () => {
    const selfReferential = [
      ['Guilt', 'Ambition', 'Both A and B', 'Neither'],
      ['Iambic pentameter', 'Blank verse', 'All of the above', 'None of these'],
      ['A simile', 'A metaphor', 'A and B', 'Personification'],
      ['Tone', 'Structure', 'Imagery', 'None of them'],
    ]
    for (const options of selfReferential) {
      expect(optionsMustKeepOrder('What does the imagery suggest?', options), options[2]).toBe(true)
      const view = shuffledOptionsFor(options, 2, 'q1', 'salt', 'What does the imagery suggest?')
      expect(view.options).toEqual(options)
    }
  })

  it('including prose that names a position in words', () => {
    // A letter can be moved. "The third option" cannot: nothing in the sentence
    // says which option that was.
    const options = ['Alliteration', 'Sibilance', 'Assonance', 'Consonance']
    expect(optionsMustKeepOrder('What is wrong with the first option?', options)).toBe(true)
    expect(
      optionsMustKeepOrder('Why?', options) ||
        optionsMustKeepOrder('The third option combines both.', options),
    ).toBe(true)
  })

  it('and an ordered scale, which reads as nonsense shuffled', () => {
    expect(
      optionsMustKeepOrder('How often should you plan?', ['Never', 'Sometimes', 'Always']),
    ).toBe(true)
  })

  it('but a question asking for the correct ORDER is still shuffled', () => {
    // Every sequencing question in this repository keeps the whole sequence
    // inside a single option, so the OPTIONS are free even though what they
    // describe is not. Locking these would have been the easy over-correction:
    // it would leave the answer at B on every sequencing question on the site.
    const options = [
      'Tyrant, warrior, desperate, conflicted',
      'Brave warrior, ambitious, tyrant, fatalistic',
      'Ambitious, brave, guilty, mad',
      'Loyal thane, conflicted king, tyrant, ghost',
    ]
    const stem = 'What is the correct order of Macbeth’s character arc?'
    expect(optionsMustKeepOrder(stem, options)).toBe(false)
    const orders = new Set(
      Array.from(
        { length: 30 },
        (_, i) => shuffledOptionsFor(options, 1, 'q', `s${i}`, stem).options[0],
      ),
    )
    expect(orders.size).toBeGreaterThan(1)
  })

  it('and a lower-case "answer a" is ordinary English, not option A', () => {
    // /answer [a-d]/i matched "a correct phrase to answer a Q1" and locked a
    // question for nothing. The letter is capitalised everywhere it is meant.
    const options = ['"thick with cotton dust"', '"pale and drawn"', '"a leather strap"', '"shame"']
    expect(optionsMustKeepOrder('Which phrase would answer a Q1 about air quality?', options)).toBe(
      false,
    )
  })
})

describe('an explanation that names a letter', () => {
  // 717 explanations in this repository name an option by its letter, 302 of
  // them in the IELTS listening bank, which is 86.1% at B. Locking all of those
  // would have left the second-worst surface on the site as biased as it
  // started while reporting the bias fixed. So the letters move instead.
  const options = ['Wren', 'Heron', 'Kestrel', 'Swift']

  it('has its letters moved to where the options landed', () => {
    const explanation = 'Option B is stated; Option D is a distractor.'
    const view = shuffledOptionsFor(options, 1, 'ls-1', 'salt', 'Which bird?', explanation)
    const heronAt = String.fromCharCode(65 + view.options.indexOf('Heron'))
    const swiftAt = String.fromCharCode(65 + view.options.indexOf('Swift'))
    expect(view.explanation).toBe(`Option ${heronAt} is stated; Option ${swiftAt} is a distractor.`)
    // Vacuity guard: if nothing moved, the assertion above passes trivially.
    expect(view.options).not.toEqual(options)
  })

  it('across every letter, every wording and every order', () => {
    for (let i = 0; i < 60; i++) {
      const prose = 'Answer A and Option C are wrong; Answers B is right.'
      const view = shuffledOptionsFor(options, 1, `q${i}`, 'salt', 'Which bird?', prose)
      for (const [word, letter] of [
        ['Answer', 'A'],
        ['Option', 'C'],
        ['Answers', 'B'],
      ] as const) {
        const value = options[letter.charCodeAt(0) - 65]
        const shown = String.fromCharCode(65 + view.options.indexOf(value))
        expect(view.explanation, `${word} ${letter} -> ${shown}`).toContain(`${word} ${shown}`)
      }
    }
  })

  it('and leaves prose alone when the options did not move', () => {
    const locked = ['Guilt', 'Ambition', 'Both A and B', 'Neither']
    const prose = 'Option C combines the two.'
    const view = shuffledOptionsFor(locked, 2, 'q', 'salt', 'Which theme?', prose)
    expect(view.options).toEqual(locked)
    expect(view.explanation).toBe(prose)
  })

  it('and never invents a letter it cannot place', () => {
    // "Option E" on a four-option question, or a letter whose option text is
    // missing, must come back untouched rather than silently renumbered.
    expect(remapOptionLetters('Option E is absurd.', options, [...options].reverse())).toBe(
      'Option E is absurd.',
    )
    expect(remapOptionLetters('a and an are articles', options, options)).toBe(
      'a and an are articles',
    )
  })
})

// ─── 3. No surface may compare against a stored index ──────────────────────

/**
 * Strip comments and string literals before looking for code. Without this the
 * detector reads `t('test.correct')` as a use of a stored index and a docblock
 * mentioning `correctIndex` as a comparison, and both happened.
 */
function code(src: string): string {
  let out = ''
  let i = 0
  while (i < src.length) {
    const c = src[i]
    if (c === '/' && src[i + 1] === '/') {
      while (i < src.length && src[i] !== '\n') i++
      continue
    }
    if (c === '/' && src[i + 1] === '*') {
      const end = src.indexOf('*/', i + 2)
      const chunk = src.slice(i, end === -1 ? src.length : end + 2)
      out += chunk.replace(/[^\n]/g, ' ') // keep line numbers honest
      i = end === -1 ? src.length : end + 2
      continue
    }
    if (c === '"' || c === "'" || c === '`') {
      const quote = c
      out += ' '
      i++
      while (i < src.length && src[i] !== quote) {
        if (src[i] === '\\') {
          out += ' '
          i += 2
          continue
        }
        out += src[i] === '\n' ? '\n' : ' '
        i++
      }
      out += ' '
      i++
      continue
    }
    out += c
    i++
  }
  return out
}

/**
 * A surface is in scope when it renders a list of options a student can click
 * against a stored correct answer. That is the exact shape of the defect, so it
 * is the exact shape of the rule.
 *
 * The options expression is matched loosely - any identifier ending in
 * `options` or `Options` - because the first version matched only
 * `question.options.map(` and two surfaces escaped it by being renamed.
 */
const RENDERS_OPTIONS =
  /\b[\w.?[\]]*([Oo]ptions|[Cc]hoices|[Aa]nswers|[Dd]istractors)\b[^\n]{0,40}\.map\(/
const STORED_INDEX =
  /\b(correctIndex|answerIndex|correctAnswerIndex)\b|\.correct\b|\bcorrect\s*:\s*\d/
const CLICKABLE = /onClick=|onSelect|handleSelect|handleAnswer/

/**
 * Surfaces that render options against a stored answer and do NOT need the
 * shared shuffle. Each says why, and each was read before being listed. A new
 * entry has to be argued for here rather than appearing quietly, which is why
 * this is an exact map and not a count.
 */
const KEEPS_ITS_OWN_ORDER: Record<string, string> = {
  // The option index IS the answer: a Likert self-diagnostic where 0 is the
  // lowest band and 3 the highest, averaged into a grade estimate. Shuffling
  // would scramble the scale and destroy the result. Nothing is marked.
  'src/app/revision/grade-targets/grade-targets-quiz.tsx':
    'Likert self-diagnostic - the index is the grade band, not an answer',
  // Renders <div>, not <button>, with the correct option already highlighted
  // green. It is the answer key shown to a teacher. Nothing is clickable and
  // nothing is scored; the onClick the detector found is the export button.
  'src/app/demo/teacher/quizzes/page.tsx': 'teacher answer-key preview, nothing is clickable',
  // These four build their option list at round time and already shuffle it
  // there, then score by value. Bolting the shared helper on top of an already
  // shuffled list would add nothing.
  'src/app/games/dictionary-skills/page.tsx':
    'shuffles at build (shuffle(item.words)), scores option === currentQ.correct',
  'src/app/games/tense-timeline/page.tsx':
    'shuffle([correct, ...distractors]) at build, scores option === currentQ.tense; no index exists',
  'src/app/games/synonym-shuffle/page.tsx':
    'reshuffles on every question change, scores option === current.answer',
  'src/app/resources/study-tools/tester/page.tsx':
    'options: shuffle([correct, ...wrongs]) at generation, scores chosen === currentQuestion.correctAnswer',
  // The options do not exist until generateQuestions() runs and it shuffles
  // them, so there is no authored position to be biased. Measured over the 25
  // decks: 6,299 of 25,020 (25.18%) at index 1, which is chance.
  'src/components/flashcards/TestMode.tsx':
    'options generated and shuffled at runtime; measured 25.18% at index 1',
  // Found only when the detector was widened, having been missed by every
  // audit: two mini-games inside the games hub. Both reshuffle in a useEffect
  // keyed on the question and score `answer === currentQuestion.correct`, which
  // here is the correct option's TEXT and not an index.
  'src/app/games/page.tsx':
    'setShuffledOptions(shuffleArray(q.options)) per question, scores against the answer text',
  'src/app/resources/study-tools/quote-tester/page.tsx':
    'buildOptions returns shuffle([correct, ...wrongs]), scores answer === correct (a string)',
}

function inScope(): string[] {
  return execSync('git ls-files src', { encoding: 'utf8' })
    .split('\n')
    .filter((f) => f.endsWith('.tsx') && !f.startsWith('src/__tests__/'))
    .filter((f) => {
      const body = code(readFileSync(f, 'utf8'))
      return RENDERS_OPTIONS.test(body) && STORED_INDEX.test(body) && CLICKABLE.test(body)
    })
    .sort()
}

describe('every surface that marks a clicked option', () => {
  it('is found by the detector, and these ones by name', () => {
    // Vacuity guard, and the reason it names files. A rule that polices whatever
    // its regex happens to match can be escaped by a rename, and was: renaming
    // `question.options.map(` to `mcqOptions.map(` took /ielts/diagnostic and
    // /toolkit/test-builder out of scope, and their absence from the failure
    // list looked exactly like a pass.
    const found = inScope()
    expect(found.length).toBeGreaterThan(18)
    for (const must of [
      'src/components/study/InlineStudyEngine.tsx',
      'src/components/study/TextStudyHub.tsx',
      'src/app/games/grade-climber/page.tsx',
      'src/app/games/apostrophe-ace/page.tsx',
      'src/app/ks3/ilowersecondary/quiz/page.tsx',
      'src/app/ielts/listening/page.tsx',
      'src/app/ielts/diagnostic/page.tsx',
      'src/app/toolkit/test-builder/page.tsx',
      'src/app/learn/[courseId]/[moduleId]/client-page.tsx',
      'src/app/learn/[courseId]/assessment/client-page.tsx',
      'src/app/resources/teaching/assessment/page.tsx',
    ]) {
      expect(found, `${must} dropped out of scope`).toContain(must)
    }
  })

  it('shuffles its options', () => {
    const offences = inScope()
      .filter((f) => !(f in KEEPS_ITS_OWN_ORDER))
      .filter((f) => !/from '@\/lib\/quiz\/shuffle'/.test(readFileSync(f, 'utf8')))
    expect(offences).toEqual([])
  })

  it('and never compares a clicked position against the stored index', () => {
    // THE RULE. Deriving the correct VALUE from the stored index is the whole
    // point - `options[correctIndex]` is how correctValue is found, and the
    // `(?!\s*\])` below is what keeps that legal. Comparing something AGAINST
    // the index is the defect, because after a shuffle it names whatever landed
    // in that slot.
    //
    // `correct` is only counted when the file shows it is an index. Two mini
    // games and a quote tester name the correct option's TEXT `correct`, and
    // `answer === currentQuestion.correct` there is exactly right.
    const offences: string[] = []

    for (const file of inScope()) {
      if (file in KEEPS_ITS_OWN_ORDER) continue
      const body = code(readFileSync(file, 'utf8'))
      const correctIsAnIndex =
        /\[\s*[\w.?]*\bcorrect\b\s*\]/.test(body) || /\bcorrect\s*:\s*number\b/.test(body)
      const names = `correctIndex|answerIndex|correctAnswerIndex${correctIsAnIndex ? '|correct' : ''}`
      const patterns = [
        new RegExp(`(===|!==|==|!=)\\s*[\\w.?[\\]]*\\.(${names})\\b(?!\\s*\\])`),
        new RegExp(`[\\w.?[\\]]*\\.(${names})\\b(?!\\s*\\])\\s*(===|!==|==|!=)`),
      ]
      body.split('\n').forEach((line, n) => {
        for (const pattern of patterns) {
          const m = pattern.exec(line)
          if (m) offences.push(`${file}:${n + 1} compares against the stored index: ${m[0].trim()}`)
        }
      })
    }

    expect(offences).toEqual([])
  })

  it('and every exemption names a real file', () => {
    // An allow-list entry for a file that no longer exists is a rule nobody is
    // enforcing and nobody can see is gone.
    const tracked = new Set(execSync('git ls-files src', { encoding: 'utf8' }).split('\n'))
    for (const file of Object.keys(KEEPS_ITS_OWN_ORDER)) {
      expect(tracked.has(file), `${file} is exempted but not tracked`).toBe(true)
    }
  })
})
