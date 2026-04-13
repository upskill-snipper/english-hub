/**
 * Content safety checks for essay feedback submissions.
 * Detects prompt injection, essay generation requests, non-prose content,
 * and harmful content patterns.
 */

export interface ContentSafetyInput {
  essay: string
  questionText: string
}

/**
 * Detect if the user is trying to misuse the essay feedback tool.
 * Blocks: prompt injection, essay generation requests, off-topic content.
 */
export function contentSafetyCheck(body: ContentSafetyInput): string | null {
  const essayLower = body.essay.toLowerCase()
  const questionLower = body.questionText.toLowerCase()
  const combined = `${essayLower} ${questionLower}`

  // 1. Block prompt injection / jailbreak attempts
  const injectionPatterns = [
    /ignore (all |your |previous |the above )?instructions/i,
    /disregard (all |your |previous |the above )?instructions/i,
    /forget (all |your |previous |the above )?instructions/i,
    /you are now/i,
    /pretend (you are|to be)/i,
    /act as (a|an|if)/i,
    /new (system |role )?instructions?:/i,
    /override (your|the) (system|role|prompt)/i,
    /do not follow/i,
    /bypass (the |your )?(content |safety )?filter/i,
    /system\s*prompt/i,
  ]

  for (const pattern of injectionPatterns) {
    if (pattern.test(combined)) {
      return 'Your submission contains content that cannot be processed. Please submit only your essay text.'
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
  const uniqueWords = new Set(words.map((w) => w.toLowerCase().replace(/[^a-z]/g, '')).filter(Boolean))
  if (wordCount >= 20 && uniqueWords.size < Math.max(5, wordCount * 0.1)) {
    return 'Your submission does not appear to be an essay. Please submit original continuous writing.'
  }

  // Detect keyboard mashing / random characters (very low ratio of real words)
  const alphaWords = words.filter((w) => /^[a-zA-Z'-]+$/.test(w))
  if (wordCount >= 20 && alphaWords.length / wordCount < 0.4) {
    return 'Your submission does not appear to be an essay. Please submit at least a few paragraphs of continuous writing.'
  }

  // 4. Block clearly off-topic / harmful content
  const harmfulPatterns = [
    /\b(how to (make|build|create) (a |an? )?(bomb|weapon|drug|explosive))/i,
    /\b(hack(ing)?|exploit|malware|phishing)/i,
  ]

  for (const pattern of harmfulPatterns) {
    if (pattern.test(combined)) {
      return 'Your submission contains content outside the scope of English essay feedback. Please submit English Language or Literature coursework only.'
    }
  }

  // 4b. Detect self-harm / suicide keywords — return safeguarding signposting
  // This is a child safeguarding requirement (DD-07). The response must be
  // supportive, non-judgmental, and provide UK helpline numbers.
  const safeguardingPatterns = [/\b(self[- ]?harm)/i, /\bsuicid/i]

  for (const pattern of safeguardingPatterns) {
    if (pattern.test(combined)) {
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
  }

  return null
}
