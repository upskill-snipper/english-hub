/**
 * Content safety checks for essay feedback submissions.
 * Detects prompt injection, essay generation requests, non-prose content,
 * and harmful content patterns - and signposts UK helplines on personal
 * safeguarding disclosures.
 *
 * ── 2026-08-18 REWRITE (read before adding patterns) ─────────────────────
 * The original pre-screen was tested against attack strings but never
 * against real GCSE essays, and it rejected ordinary literary analysis:
 *
 *   - /act as (a|an|if)/ blocked "Priestley uses the Inspector to act as a
 *     mouthpiece" - the single most common construction in An Inspector
 *     Calls essays, a text this platform ships a whole sample page for.
 *   - /pretend (you are|to be)/ blocked "Lady Macbeth urges her husband to
 *     pretend to be the innocent flower".
 *   - /do not follow/ blocked "the characters do not follow the natural
 *     order".
 *   - /\bexploit/ (no trailing boundary) blocked every essay containing
 *     "exploitation" - the THEME of An Inspector Calls.
 *   - /\bsuicid/ replaced marking with a helpline response for any essay
 *     discussing Eva Smith's death - i.e. essentially every plot-aware
 *     Inspector Calls essay.
 *
 * Principles now:
 *   1. The ESSAY BODY is quoted student prose about literature. Injection
 *      defence for it belongs in the hardened system prompt and the output
 *      filter, not in phrase-matching prose. Only patterns that are
 *      near-unambiguous instructions to a model remain, and the fuzzier
 *      ones scan the QUESTION text only (where a planted instruction would
 *      actually change behaviour).
 *   2. Harmful-content patterns must be word-bounded and specific.
 *   3. Safeguarding signposting stays - it is a children's product - but
 *      distinguishes PERSONAL disclosure (always signpost) from LITERARY
 *      discussion of a set text (mark the essay; these texts are on the
 *      syllabus precisely because they deal with hard subjects).
 */

export interface ContentSafetyInput {
  essay: string
  questionText: string
}

// Near-unambiguous model-instruction patterns - safe to scan everywhere.
// Each one is an imperative aimed at "instructions", a "prompt" or a filter;
// none plausibly occurs in an essay about a set text.
const INJECTION_PATTERNS_ANYWHERE = [
  /ignore (all |your |previous |the above )?instructions/i,
  /disregard (all |your |previous |the above )?instructions/i,
  /forget (all |your |previous |the above )?instructions/i,
  /new (system |role )?instructions?:/i,
  /override (your|the) (system|role|prompt)/i,
  /bypass (the |your )?(content |safety )?filter/i,
  /system\s*prompt/i,
]

// Fuzzier role-play framings. In the QUESTION field they are instruction-
// shaped; in an essay they are ordinary prose ("to act as a mouthpiece",
// "you are now aware of Priestley's intent"), so they scan the question ONLY.
const INJECTION_PATTERNS_QUESTION_ONLY = [
  /you are now/i,
  /pretend (you are|to be)/i,
  /\bact as (a|an|if)\b/i,
  /do not follow/i,
]

// First-person distress - ALWAYS signposted, even inside literary discussion.
// Deliberately first-person and present-tense so "Eva Smith kills herself"
// does not match but "I want to kill myself" does.
const PERSONAL_DISCLOSURE_PATTERNS = [
  /\bi\s+(?:want|wanted|am going|'m going|plan|planned|tried|try|think about|keep thinking about)\s+to\s+(?:die|kill myself|end (?:it|my life)|hurt myself)/i,
  /\bi\s+(?:self[- ]?harm|cut myself|have been cutting)/i,
  /\bkill(?:ing)? myself\b/i,
  /\bend(?:ing)? my (?:own )?life\b/i,
]

// Third-person / thematic safeguarding terms. These trigger the signpost
// ONLY when no literary frame is detected (see LITERARY_FRAME below).
const THEMATIC_SAFEGUARDING_PATTERNS = [/\b(self[- ]?harm)/i, /\bsuicid/i]

// Evidence that the text is discussing literature rather than the writer's
// own life: named set-text characters/authors, or the vocabulary of
// analysis. Kept deliberately broad - the cost of a miss here is a student
// getting a helpline card instead of their mark on syllabus content, and
// personal disclosures are already caught unconditionally above.
const LITERARY_FRAME =
  /\b(priestley|birling|eva smith|inspector goole|sheila|gerald|shakespeare|macbeth|lady macbeth|ophelia|hamlet|romeo|juliet|dickens|scrooge|stevenson|jekyll|hyde|golding|steinbeck|curley|lennie|owen|duffy|armitage|blake|the (?:poet|writer|author|playwright|novel|play|poem|text|character|audience|reader)|stage directions?|soliloquy|dramatic irony|foreshadow)/i

/**
 * Detect if the user is trying to misuse the essay feedback tool.
 * Blocks: prompt injection, essay generation requests, off-topic content.
 * Returns a user-facing message, or null when the submission may proceed.
 */
export function contentSafetyCheck(body: ContentSafetyInput): string | null {
  const essayLower = body.essay.toLowerCase()
  const questionLower = body.questionText.toLowerCase()
  const combined = `${essayLower} ${questionLower}`

  // 1. Prompt injection / jailbreak attempts.
  for (const pattern of INJECTION_PATTERNS_ANYWHERE) {
    if (pattern.test(combined)) {
      return 'Your submission contains content that cannot be processed. Please submit only your essay text.'
    }
  }
  for (const pattern of INJECTION_PATTERNS_QUESTION_ONLY) {
    if (pattern.test(questionLower)) {
      return 'The question field contains content that cannot be processed. Please enter only the essay question or task.'
    }
  }

  // 2. Block requests to WRITE/GENERATE essays (not feedback)
  const generationPatterns = [
    /^(write|generate|create|compose|draft|produce|make) (me |an? |the )?(essay|response|answer|paragraph|piece)/i,
    /^(can you |please |could you )?(write|generate|create|compose|draft)/i,
    /^(help me )?(write|generate|create|compose|draft) (an? |the |my )?(essay|response|answer)/i,
  ]

  for (const pattern of generationPatterns) {
    if (pattern.test(essayLower.trim())) {
      return 'This tool provides feedback on essays you have already written. Please paste your own essay text, not a request to generate one.'
    }
  }

  // 3. Check essay looks like actual prose (not code, gibberish, or repeated words)
  // Word count is already validated elsewhere (100+ words), so this only catches
  // clearly non-prose content. Valid creative writing with short sentences,
  // dialogue, or unconventional punctuation should pass.
  const words = body.essay.trim().split(/\s+/)
  const wordCount = words.length

  // Detect code-like content (high density of braces, semicolons, arrows, etc.)
  const codeChars = (body.essay.match(/[{};<>=()]/g) || []).length
  if (codeChars / body.essay.length > 0.05 && codeChars > 20) {
    return 'Your submission appears to contain code rather than an essay. Please submit English prose writing.'
  }

  // Detect single repeated word/phrase (e.g. "test test test test...")
  const uniqueWords = new Set(
    words.map((w) => w.toLowerCase().replace(/[^a-z]/g, '')).filter(Boolean),
  )
  if (wordCount >= 20 && uniqueWords.size < Math.max(5, wordCount * 0.1)) {
    return 'Your submission does not appear to be an essay. Please submit original continuous writing.'
  }

  // Detect keyboard mashing / random characters (very low ratio of real words)
  const alphaWords = words.filter((w) => /^[a-zA-Z'-]+$/.test(w))
  if (wordCount >= 20 && alphaWords.length / wordCount < 0.4) {
    return 'Your submission does not appear to be an essay. Please submit at least a few paragraphs of continuous writing.'
  }

  // 4. Block clearly off-topic / harmful content. Word-bounded on BOTH sides:
  // the previous /\bexploit/ (no trailing boundary) matched "exploitation",
  // the central theme of An Inspector Calls.
  const harmfulPatterns = [
    /\b(how to (make|build|create) (a |an? )?(bomb|weapon|drug|explosive))/i,
    /\b(hacking|malware|phishing)\b/i,
  ]

  for (const pattern of harmfulPatterns) {
    if (pattern.test(combined)) {
      return 'Your submission contains content outside the scope of English essay feedback. Please submit English Language or Literature coursework only.'
    }
  }

  // 4b. Safeguarding (DD-07, children's product). Two tiers:
  //     - A first-person disclosure ALWAYS gets the supportive signpost,
  //       even mid-essay: a child reaching out through the tool matters
  //       more than the mark.
  //     - Thematic terms (a character's suicide, self-harm as a theme)
  //       signpost only when the text shows no sign of being literary
  //       analysis - otherwise an Inspector Calls essay could never be
  //       marked, since Eva Smith's death IS the plot.
  const personalDisclosure = PERSONAL_DISCLOSURE_PATTERNS.some((p) => p.test(combined))
  const thematicMention = THEMATIC_SAFEGUARDING_PATTERNS.some((p) => p.test(combined))
  const literaryFrame = LITERARY_FRAME.test(combined)

  if (personalDisclosure || (thematicMention && !literaryFrame)) {
    return (
      'It looks like your submission may contain sensitive content. ' +
      'This tool can only give English essay feedback, but if you or someone you know needs support, please reach out:\n\n' +
      '• Childline: 0800 1111 (free, confidential, under-19s)\n' +
      '• NSPCC: 0808 800 5000\n' +
      '• Samaritans: 116 123 (free, 24/7)\n' +
      '• Crisis Text Line: text SHOUT to 85258\n\n' +
      'You are not alone, and it is okay to ask for help.'
    )
  }

  return null
}
