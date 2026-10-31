import type { GameBank } from '@/lib/games/explanations/types'

/**
 * The Verb To Be: read a sentence, or a short dialogue, and choose the form
 * of "to be" that fills the gap, from the question's own options.
 *
 * Moved out of src/app/games/to-be-conjugation/page.tsx on 16 October 2026,
 * when every answer gained an explanation (src/lib/games/explanations/types.ts).
 *
 * WHAT WAS WRONG WITH THE QUESTIONS (found writing those explanations). The
 * label is small, and a student reads the sentence first. Eight sentences read
 * as natural English in a second tense, so a student who chose it was marked
 * wrong for good English:
 *
 *   - Three past sentences had no past word, and read at least as well in the
 *     present ("The shops are closed on Sunday" is the usual sentence). Each
 *     now carries one: "The film we saw last night ___ really exciting.",
 *     "Last Sunday the shops ___ closed." and "The students ___ quiet during
 *     the test yesterday."
 *   - "We ___ late for the bus this morning." fits "were", "are" and "will be"
 *     depending on the hour. It is now "yesterday morning".
 *   - English often uses the present for a plan, so four future sentences were
 *     just as natural with "am", "are" or "is": "I am at home this evening",
 *     "They are here tomorrow morning", "We are on holiday next week" and,
 *     the usual way to say it, "The exam is next Friday". Each now carries a
 *     word that only the future fits: "I ___ at home soon.", "They ___ here in
 *     about an hour.", "This time next week we ___ on holiday." and "The exam
 *     ___ over in two hours."
 *
 * A NINTH, FOUND BY THE SECOND READER (16 October 2026). "He ___ twelve years
 * old next month." answered "will be", but English gives a coming age in the
 * present as readily as in the future ("He's twelve next month", as "The exam
 * is next Friday" above), so "is" was good English marked wrong. It is now "He
 * ___ taller than his father one day.": a guess about the future, which only
 * "will be" fits.
 *
 * REBUILT FOR DEPTH (24 October 2026). The founder found the games "too
 * obvious and easy". Measured that day (.tmp-games-audit/REPORT-eal.md): a
 * label above each sentence named the tense it needed (present, past, future,
 * short form), so the student had only to match the subject; the short forms
 * printed the answer in brackets ("___ a teacher, not a student. (I am)"),
 * the only option with an apostrophe; and a round of 15 from 54 repeated
 * itself, 2.9 answers a round stated by an earlier explanation. Now:
 *
 *   - no label: the sentence itself, or the dialogue before it, decides the
 *     tense, and the options are chosen so that exactly one is good English;
 *   - each question has its own three to five options, every one a mistake
 *     learners really make with "to be": the wrong person (I is, you was,
 *     they isn't), the wrong time (am with "yesterday"), "do" or "did" where
 *     English uses "be" (Do you a student? He didn't at school), "have" for
 *     age, hunger and cold (I have cold, How old has your brother?), a
 *     missing subject or verb (Is my sister. She my sister.), "will" without
 *     "be", a short answer ending in a short form (Yes, I'm.), and their,
 *     there and your for they're and you're;
 *   - a line of dialogue or the start of a short text can come before the
 *     sentence (`context`), shown above it on the page;
 *   - 240 questions, 80 a tier. Tier 1 (A1): am, is and are; was and were
 *     with a past time; short forms; isn't and aren't; questions (Are you
 *     ...?); short answers (Yes, she is.); there is and there are; be, not
 *     have, for age and feelings. Tier 2 (A2): wasn't and weren't; past
 *     questions (Were you at home yesterday?) and their short answers; there
 *     was and there were; will be and won't be; been and being; be after
 *     must, can and should, and "to be" after want; subjects that trick the
 *     ear (everyone, the news, the police, my friend and I). Tier 3 (B1): "to
 *     be" in a short text or a dialogue, where the text decides: has been
 *     and have been with for and since; the passive (was built, are made);
 *     was and were with an -ing verb in a story; question tags (isn't it?,
 *     aren't I?); if and when (If I were you, when I am older); being and to
 *     be after a verb or a preposition; going to; used to be; there has been;
 *     and dialogue turns in mixed tenses;
 *   - `facts` keep apart, in one round, two questions that ask the same
 *     subject and form (two "she is", or "Are you" asked and "Are you"
 *     shown in a dialogue), so one never answers the next (gapFacts below);
 *   - the one-line rules the page showed before 16 October (`why`) and the
 *     tense label (`tense`) are dropped: nothing has read the first since the
 *     explanation panel replaced it, and the second gave the answer away. Git
 *     keeps both.
 *
 * Fixed in the 54 earlier questions: every option set is now the question's
 * own (the eight forms for every sentence offered "being" and "will be"
 * where no learner would write them); "He ___ a footballer when he was
 * young." printed its own answer ("he was") and is now "Forty years ago, my
 * grandad ___ a footballer."; the ten bracketed short forms lost the bracket:
 * four became a reply in a dialogue ("Who is that boy?" "___ a good friend of
 * mine."), and six a negative with a reason ("She ___ very tall, but her
 * brother is."), two of them now in tier 2 (wasn't, weren't). Their keys
 * changed with their sentences. A present sentence with no time word could
 * be read in the past ("The coffee was too hot to drink"), so those offer
 * only present forms; a
 * future one with no word that rules out the present ("I ___ at home soon.")
 * offers will be among other forms with "will" or "being", never am or is.
 *
 * CHECKED BY A SECOND READER (31 October 2026). Every answer and option was
 * read against its sentence and dialogue: no marked answer was wrong, and
 * none of the 240 lets a second option be good English. Fixed:
 *
 *   - "No, ___ a teacher." offered "Am" with a capital in mid-sentence, which
 *     marked it wrong by its look; it is now "am", as "No, ___ just in time."
 *     offers "are".
 *   - "The film we saw last night ___ really exciting." was keyed "night was",
 *     the word before the gap, not its subject, so it could share a round
 *     with "___ the film good last night?"; it now carries "film was".
 *   - "Everyone in my family", "The shops in our town" and "One of my
 *     friends" were keyed by the noun before the gap; each now carries its
 *     subject (everyone is, shops are, one is).
 *   - Questions whose explanations teach each other's answer, though their
 *     subjects differ, now share a fact and so never meet in one round:
 *     "everyone" with a singular verb (2), two people joined by "and" (6),
 *     "you and ..." answered with "we" (3), "born" (3), age (5), feelings
 *     such as cold and hungry (5), "to be" before a job (3), and the present
 *     after if and when for a future time (6).
 */

/** What a question asks, and the group the dealer spreads across a round. */
export type Kind =
  | 'present'
  | 'past'
  | 'short form'
  | 'negative'
  | 'question'
  | 'short answer'
  | 'there'
  | 'be not have'
  | 'future'
  | 'been'
  | 'being'
  | 'after a modal'
  | 'after a verb'
  | 'agreement'
  | 'continuous'
  | 'for and since'
  | 'passive'
  | 'tag'
  | 'if and when'
  | 'going to'
  | 'used to'
  | 'dialogue'

export interface VerbItem {
  /** What the student completes, with ___ for the gap. */
  sentence: string
  /** Lines shown above the sentence: the turns of a dialogue before it, or the start of a short text. */
  context?: readonly string[]
  answer: string
  /** The options shown, the answer among them; the page deals them in a new order each time. */
  options: readonly string[]
  /** 1 (A1), 2 (A2) or 3 (B1). */
  tier: 1 | 2 | 3
  kind: Kind
  /** Anything else that would give this question away to another, beyond what gapFacts finds. */
  facts?: readonly string[]
}

export const VERB_BANK: VerbItem[] = [
  // ── Tier 1: am, is, are ─────────────────────────────────────────────
  {
    sentence: 'I ___ a student at the language school.',
    answer: 'am',
    options: ['am', 'is', 'are', 'were'],
    tier: 1,
    kind: 'present',
  },
  {
    sentence: 'She ___ my best friend from class.',
    answer: 'is',
    options: ['am', 'is', 'are', 'were'],
    tier: 1,
    kind: 'present',
  },
  {
    sentence: 'They ___ from Spain and Portugal.',
    answer: 'are',
    options: ['am', 'is', 'are', 'was'],
    tier: 1,
    kind: 'present',
  },
  {
    sentence: 'We ___ ready to begin the lesson.',
    answer: 'are',
    options: ['am', 'is', 'are', 'was'],
    tier: 1,
    kind: 'present',
  },
  {
    sentence: 'He ___ a very kind teacher.',
    answer: 'is',
    options: ['am', 'is', 'are', 'were'],
    tier: 1,
    kind: 'present',
  },
  {
    sentence: 'You ___ very good at grammar.',
    answer: 'are',
    options: ['am', 'is', 'are', 'was'],
    tier: 1,
    kind: 'present',
  },
  {
    sentence: 'The coffee ___ too hot to drink.',
    answer: 'is',
    options: ['am', 'is', 'are', 'were'],
    tier: 1,
    kind: 'present',
  },
  {
    sentence: 'My parents ___ at work right now.',
    answer: 'are',
    options: ['am', 'is', 'are', 'were'],
    tier: 1,
    kind: 'present',
  },
  {
    sentence: 'It ___ a beautiful sunny day today.',
    answer: 'is',
    options: ['am', 'is', 'are', 'were'],
    tier: 1,
    kind: 'present',
  },
  {
    sentence: 'The children ___ playing in the garden.',
    answer: 'are',
    options: ['am', 'is', 'are', 'was'],
    tier: 1,
    kind: 'present',
  },
  {
    sentence: 'I ___ happy to help you with English.',
    answer: 'am',
    options: ['am', 'is', 'are', 'were'],
    tier: 1,
    kind: 'present',
  },
  {
    sentence: 'This book ___ very interesting.',
    answer: 'is',
    options: ['am', 'is', 'are', 'were'],
    tier: 1,
    kind: 'present',
  },
  {
    sentence: 'We ___ in the same class this term.',
    answer: 'are',
    options: ['am', 'is', 'are', 'was'],
    tier: 1,
    kind: 'present',
  },
  {
    sentence: 'Tom and Lucy ___ brother and sister.',
    answer: 'are',
    options: ['am', 'is', 'are', 'was'],
    tier: 1,
    kind: 'present',
    facts: ['joined by and'],
  },
  {
    sentence: 'The weather ___ cold in winter.',
    answer: 'is',
    options: ['am', 'is', 'are', 'were'],
    tier: 1,
    kind: 'present',
  },

  // ── Tier 1: was, were ───────────────────────────────────────────────
  {
    sentence: 'Yesterday I ___ very tired after work.',
    answer: 'was',
    options: ['was', 'were', 'am'],
    tier: 1,
    kind: 'past',
  },
  {
    sentence: 'She ___ at the cinema last night.',
    answer: 'was',
    options: ['was', 'were', 'is', 'has been'],
    tier: 1,
    kind: 'past',
  },
  {
    sentence: 'They ___ on holiday in Italy last summer.',
    answer: 'were',
    options: ['were', 'was', 'are', 'have been'],
    tier: 1,
    kind: 'past',
  },
  {
    sentence: 'We ___ late for the bus yesterday morning.',
    answer: 'were',
    options: ['were', 'was', 'are', 'have been'],
    tier: 1,
    kind: 'past',
  },
  {
    sentence: 'Forty years ago, my grandad ___ a footballer.',
    answer: 'was',
    options: ['was', 'were', 'is', 'has been'],
    tier: 1,
    kind: 'past',
  },
  {
    sentence: 'You ___ very helpful yesterday, thank you.',
    answer: 'were',
    options: ['were', 'was', 'are', 'have been'],
    tier: 1,
    kind: 'past',
  },
  {
    sentence: 'The film we saw last night ___ really exciting.',
    answer: 'was',
    options: ['was', 'were', 'is', 'are'],
    tier: 1,
    kind: 'past',
    facts: ['film was'],
  },
  {
    sentence: 'My grandparents ___ born in Wales.',
    answer: 'were',
    options: ['were', 'was', 'are', 'have been'],
    tier: 1,
    kind: 'past',
    facts: ['born'],
  },
  {
    sentence: 'It ___ raining when we left the house.',
    answer: 'was',
    options: ['was', 'were', 'is', 'has been'],
    tier: 1,
    kind: 'past',
  },
  {
    sentence: 'Last Sunday the shops ___ closed.',
    answer: 'were',
    options: ['were', 'was', 'are', 'have been'],
    tier: 1,
    kind: 'past',
  },
  {
    sentence: 'I ___ born in nineteen ninety.',
    answer: 'was',
    options: ['was', 'were', 'am'],
    tier: 1,
    kind: 'past',
    facts: ['born'],
  },
  {
    sentence: 'The students ___ quiet during the test yesterday.',
    answer: 'were',
    options: ['were', 'was', 'are', 'have been'],
    tier: 1,
    kind: 'past',
  },
  {
    sentence: 'Last week ___ very busy at the office.',
    answer: 'was',
    options: ['was', 'were', 'is', 'are'],
    tier: 1,
    kind: 'past',
  },

  // ── Tier 1: short forms, in a reply ─────────────────────────────────
  {
    context: ['A: Are you a student here?'],
    sentence: 'B: No, ___ a teacher.',
    answer: "I'm",
    options: ["I'm", 'I', 'am'],
    tier: 1,
    kind: 'short form',
  },
  {
    context: ['A: Who is that boy?'],
    sentence: 'B: ___ a good friend of mine.',
    answer: "He's",
    options: ["He's", 'His', 'He', 'Is'],
    tier: 1,
    kind: 'short form',
  },
  {
    context: ['A: Where are your grandparents from?'],
    sentence: 'B: ___ from a small village in Ghana.',
    answer: "They're",
    options: ["They're", 'Their', 'There', 'They', 'There are'],
    tier: 1,
    kind: 'short form',
  },
  {
    context: ['A: What are you and Sam doing tonight?'],
    sentence: 'B: ___ going to the party.',
    answer: "We're",
    options: ["We're", 'Were', 'We', 'Where'],
    tier: 1,
    kind: 'short form',
    facts: ['answered with we'],
  },

  // ── Tier 1: isn't, aren't ───────────────────────────────────────────
  {
    sentence: 'She ___ very tall, but her brother is.',
    answer: "isn't",
    options: ["isn't", "doesn't", 'not', "aren't"],
    tier: 1,
    kind: 'negative',
  },
  {
    sentence: 'We ___ ready yet. Please wait a minute.',
    answer: "aren't",
    options: ["aren't", "isn't", "don't", 'not', "haven't"],
    tier: 1,
    kind: 'negative',
  },
  {
    sentence: 'Relax. You ___ late. The lesson starts at ten.',
    answer: "aren't",
    options: ["aren't", "isn't", "don't", 'not'],
    tier: 1,
    kind: 'negative',
  },
  {
    sentence: 'It ___ very cold today, so you can leave your coat at home.',
    answer: "isn't",
    options: ["isn't", "doesn't", 'not', "aren't"],
    tier: 1,
    kind: 'negative',
  },

  // ── Tier 1, new on 24 October 2026: am, is, are with a time word ────
  {
    sentence: 'My brother ___ at the dentist at the moment.',
    answer: 'is',
    options: ['am', 'is', 'are', 'was'],
    tier: 1,
    kind: 'present',
  },
  {
    sentence: 'I ___ in the kitchen now. Come and help me.',
    answer: 'am',
    options: ['am', 'is', 'are', 'was'],
    tier: 1,
    kind: 'present',
  },
  {
    sentence: 'Your keys ___ on the table by the door.',
    answer: 'are',
    options: ['am', 'is', 'are', 'was'],
    tier: 1,
    kind: 'present',
  },
  {
    sentence: 'Zara and I ___ in the same football team.',
    answer: 'are',
    options: ['am', 'is', 'are', 'was'],
    tier: 1,
    kind: 'present',
    facts: ['joined by and'],
  },
  {
    sentence: 'In 2018, my sister and I ___ at the same primary school.',
    answer: 'were',
    options: ['were', 'was', 'am', 'have been'],
    tier: 1,
    kind: 'past',
    facts: ['joined by and'],
  },
  {
    sentence: 'Last night the moon ___ very bright.',
    answer: 'was',
    options: ['was', 'were', 'is', 'has been'],
    tier: 1,
    kind: 'past',
  },
  {
    sentence: 'When I ___ a child, I lived in Lagos.',
    answer: 'was',
    options: ['was', 'were', 'am'],
    tier: 1,
    kind: 'past',
  },

  // ── Tier 1: short forms ─────────────────────────────────────────────
  {
    context: ['A: What is the weather like today?'],
    sentence: 'B: ___ very cold. Take a coat.',
    answer: "It's",
    options: ["It's", 'Its', 'It', 'Is'],
    tier: 1,
    kind: 'short form',
  },
  {
    context: ['A: Where are you and your brother?'],
    sentence: 'B: ___ at the bus stop.',
    answer: "We're",
    options: ["We're", "They're", "You're", 'Were'],
    tier: 1,
    kind: 'short form',
    facts: ['answered with we'],
  },
  {
    context: ['A: Who is that woman?'],
    sentence: 'B: ___ my aunt. Her name is Rosa.',
    answer: "She's",
    options: ["She's", 'She', 'Is'],
    tier: 1,
    kind: 'short form',
  },
  {
    context: ['A: Am I late?'],
    sentence: 'B: No, ___ just in time.',
    answer: "you're",
    options: ["you're", 'your', 'you', 'are'],
    tier: 1,
    kind: 'short form',
  },

  // ── Tier 1: isn't, aren't, am not ───────────────────────────────────
  {
    sentence: 'I ___ hungry. I had a big lunch.',
    answer: 'am not',
    options: ['am not', 'not', "don't", "isn't", "aren't"],
    tier: 1,
    kind: 'negative',
  },
  {
    sentence: 'My brothers ___ at school now. They are ill in bed.',
    answer: "aren't",
    options: ["aren't", "isn't", "don't", 'not', "weren't"],
    tier: 1,
    kind: 'negative',
  },
  {
    sentence: 'This ___ my bag. Mine is blue.',
    answer: "isn't",
    options: ["isn't", "aren't", "doesn't", 'not'],
    tier: 1,
    kind: 'negative',
  },
  {
    sentence: 'The tickets ___ expensive. They only cost two pounds.',
    answer: "aren't",
    options: ["aren't", "isn't", "don't", 'not'],
    tier: 1,
    kind: 'negative',
  },
  {
    sentence: 'Mr Patel ___ in his office now. He is at lunch.',
    answer: "isn't",
    options: ["isn't", "aren't", "doesn't", 'not'],
    tier: 1,
    kind: 'negative',
  },

  // ── Tier 1: questions ───────────────────────────────────────────────
  {
    sentence: '___ you a student at this school?',
    answer: 'Are',
    options: ['Are', 'Is', 'Do', 'Does'],
    tier: 1,
    kind: 'question',
  },
  {
    sentence: '___ your sister at home now?',
    answer: 'Is',
    options: ['Is', 'Are', 'Does', 'Do'],
    tier: 1,
    kind: 'question',
  },
  {
    sentence: '___ I in the right room for the English class?',
    answer: 'Am',
    options: ['Am', 'Is', 'Are', 'Do'],
    tier: 1,
    kind: 'question',
  },
  {
    sentence: '___ the children asleep?',
    answer: 'Are',
    options: ['Are', 'Is', 'Do', 'Does'],
    tier: 1,
    kind: 'question',
  },
  {
    sentence: '___ it far to the station?',
    answer: 'Is',
    options: ['Is', 'Are', 'Does', 'Do'],
    tier: 1,
    kind: 'question',
  },
  {
    sentence: '___ Ravi and Ana in your class?',
    answer: 'Are',
    options: ['Are', 'Is', 'Do', 'Does'],
    tier: 1,
    kind: 'question',
    facts: ['joined by and'],
  },
  {
    sentence: 'How old ___ your brother?',
    answer: 'is',
    options: ['is', 'are', 'has', 'does'],
    tier: 1,
    kind: 'question',
    facts: ['how old', 'age'],
  },
  {
    sentence: 'Where ___ the toilets, please?',
    answer: 'are',
    options: ['are', 'is', 'do', 'does'],
    tier: 1,
    kind: 'question',
  },
  {
    sentence: '___ your parents from Turkey?',
    answer: 'Are',
    options: ['Are', 'Is', 'Do', 'Does'],
    tier: 1,
    kind: 'question',
    facts: ['parents from'],
  },

  // ── Tier 1: short answers ───────────────────────────────────────────
  {
    context: ['A: Are you hungry?'],
    sentence: 'B: Yes, ___.',
    answer: 'I am',
    options: ['I am', "I'm", 'I do', 'you are'],
    tier: 1,
    kind: 'short answer',
  },
  {
    context: ['A: Is your brother at school today?'],
    sentence: 'B: No, ___.',
    answer: "he isn't",
    options: ["he isn't", 'he not', "he doesn't", "she isn't"],
    tier: 1,
    kind: 'short answer',
  },
  {
    context: ['A: Is it cold outside?'],
    sentence: 'B: Yes, ___.',
    answer: 'it is',
    options: ['it is', "it's", 'it does', 'is it'],
    tier: 1,
    kind: 'short answer',
  },
  {
    context: ['A: Are they your cousins?'],
    sentence: 'B: No, ___.',
    answer: "they aren't",
    options: ["they aren't", 'they not', "they don't", "they doesn't"],
    tier: 1,
    kind: 'short answer',
  },
  {
    context: ['A: Are you ready to go?'],
    sentence: 'B: No, ___. Give me five minutes.',
    answer: "I'm not",
    options: ["I'm not", "I don't", 'I not', "I isn't"],
    tier: 1,
    kind: 'short answer',
    facts: ['i am not'],
  },
  {
    context: ['A: Are your parents at home?'],
    sentence: 'B: Yes, ___.',
    answer: 'they are',
    options: ['they are', "they're", 'they do', 'there are'],
    tier: 1,
    kind: 'short answer',
  },
  {
    context: ['A: Is Paula from Brazil?'],
    sentence: 'B: Yes, ___.',
    answer: 'she is',
    options: ['she is', "she's", 'she does', 'he is'],
    tier: 1,
    kind: 'short answer',
  },
  {
    context: ['A: Are we late?'],
    sentence: 'B: No, ___. The film starts at eight.',
    answer: "we aren't",
    options: ["we aren't", 'we not', "we don't", "we weren't"],
    tier: 1,
    kind: 'short answer',
  },

  // ── Tier 1: there is, there are ─────────────────────────────────────
  {
    sentence: '___ a park near my house.',
    answer: 'There is',
    options: ['There is', 'There are', 'It has', 'Have'],
    tier: 1,
    kind: 'there',
  },
  {
    sentence: '___ two banks on this street.',
    answer: 'There are',
    options: ['There are', 'There is', 'It has', 'Have'],
    tier: 1,
    kind: 'there',
  },
  {
    sentence: 'There ___ three people in my family.',
    answer: 'are',
    options: ['are', 'is', 'have', 'has'],
    tier: 1,
    kind: 'there',
  },
  {
    sentence: 'How many students ___ there in your class?',
    answer: 'are',
    options: ['are', 'is', 'have', 'has'],
    tier: 1,
    kind: 'there',
  },
  {
    sentence: '___ any eggs in the fridge?',
    answer: 'Are there',
    options: ['Are there', 'Is there', 'There are', 'Have'],
    tier: 1,
    kind: 'there',
  },
  {
    context: ['A: Is there a bank near here?'],
    sentence: 'B: Yes, ___. It is next to the post office.',
    answer: 'there is',
    options: ['there is', "there's", 'it is', 'there are'],
    tier: 1,
    kind: 'there',
  },

  // ── Tier 1: be, not have, for age, hunger and cold ──────────────────
  {
    sentence: 'My sister ___ ten years old.',
    answer: 'is',
    options: ['is', 'has', 'have', 'are'],
    tier: 1,
    kind: 'be not have',
    facts: ['age'],
  },
  {
    sentence: 'I ___ cold. Can you close the window?',
    answer: 'am',
    options: ['am', 'have', 'has', 'is'],
    tier: 1,
    kind: 'be not have',
    facts: ['feeling'],
  },
  {
    sentence: "We ___ hungry. Let's eat now.",
    answer: 'are',
    options: ['are', 'have', 'has', 'is'],
    tier: 1,
    kind: 'be not have',
    facts: ['feeling'],
  },
  {
    sentence: 'He ___ thirsty. He wants a glass of water.',
    answer: 'is',
    options: ['is', 'has', 'have', 'are'],
    tier: 1,
    kind: 'be not have',
    facts: ['feeling'],
  },
  {
    sentence: 'How old ___ you?',
    answer: 'are',
    options: ['are', 'have', 'do', 'is'],
    tier: 1,
    kind: 'be not have',
    facts: ['how old', 'age'],
  },

  // ── Tier 2: wasn't, weren't ─────────────────────────────────────────
  {
    sentence: 'He ___ at school yesterday because he had a cold.',
    answer: "wasn't",
    options: ["wasn't", "weren't", "didn't", "isn't"],
    tier: 2,
    kind: 'negative',
  },
  {
    sentence: 'They ___ at home last night. They went to a concert.',
    answer: "weren't",
    options: ["weren't", "wasn't", "didn't", "haven't been"],
    tier: 2,
    kind: 'negative',
  },

  // ── Tier 2: will be ─────────────────────────────────────────────────
  {
    sentence: 'I ___ at home soon.',
    answer: 'will be',
    options: ['will be', 'will', 'will being', 'am being'],
    tier: 2,
    kind: 'future',
  },
  {
    sentence: 'She ___ ready in five minutes.',
    answer: 'will be',
    options: ['will be', 'will', 'will being', 'is being'],
    tier: 2,
    kind: 'future',
  },
  {
    sentence: 'They ___ here in about an hour.',
    answer: 'will be',
    options: ['will be', 'will', 'are being', 'will being'],
    tier: 2,
    kind: 'future',
  },
  {
    sentence: 'This time next week we ___ on holiday.',
    answer: 'will be',
    options: ['will be', 'will', 'were', 'will being'],
    tier: 2,
    kind: 'future',
  },
  {
    sentence: 'It ___ sunny at the weekend, I hope.',
    answer: 'will be',
    options: ['will be', 'will', 'will being', 'is being'],
    tier: 2,
    kind: 'future',
  },
  {
    sentence: 'You ___ fine after a good rest.',
    answer: 'will be',
    options: ['will be', 'will', 'will being', 'are being'],
    tier: 2,
    kind: 'future',
  },
  {
    sentence: 'The exam ___ over in two hours.',
    answer: 'will be',
    options: ['will be', 'will', 'will to be', 'is being'],
    tier: 2,
    kind: 'future',
  },
  {
    sentence: 'He ___ taller than his father one day.',
    answer: 'will be',
    options: ['will be', 'will', 'will to be', 'is being'],
    tier: 2,
    kind: 'future',
  },

  // ── Tier 2: been, being ─────────────────────────────────────────────
  {
    sentence: 'I have ___ to London many times.',
    answer: 'been',
    options: ['been', 'be', 'being'],
    tier: 2,
    kind: 'been',
    facts: ['been to'],
  },
  {
    sentence: 'She has ___ a teacher for ten years.',
    answer: 'been',
    options: ['been', 'be', 'being'],
    tier: 2,
    kind: 'been',
  },
  {
    sentence: 'They have ___ very busy this week.',
    answer: 'been',
    options: ['been', 'be', 'being'],
    tier: 2,
    kind: 'been',
  },
  {
    sentence: 'Have you ever ___ to Scotland?',
    answer: 'been',
    options: ['been', 'be', 'being'],
    tier: 2,
    kind: 'been',
    facts: ['been to'],
  },
  {
    sentence: 'He had ___ ill for a week before the trip.',
    answer: 'been',
    options: ['been', 'be', 'being'],
    tier: 2,
    kind: 'been',
  },
  {
    sentence: 'The dog is ___ very noisy today.',
    answer: 'being',
    options: ['being', 'been', 'be'],
    tier: 2,
    kind: 'being',
  },
  {
    sentence: 'Why are you ___ so unkind to him?',
    answer: 'being',
    options: ['being', 'been', 'be'],
    tier: 2,
    kind: 'being',
  },
  {
    sentence: 'You are ___ very patient with the class.',
    answer: 'being',
    options: ['being', 'been', 'be'],
    tier: 2,
    kind: 'being',
  },
  // ── Tier 2, new on 24 October 2026: wasn't, weren't ────────────────
  {
    sentence: 'I ___ at the party on Saturday because I had to work.',
    answer: "wasn't",
    options: ["wasn't", "weren't", "didn't", "haven't been"],
    tier: 2,
    kind: 'negative',
  },
  {
    sentence: 'The shops ___ open on Christmas Day, so we stayed at home.',
    answer: "weren't",
    options: ["weren't", "wasn't", "didn't"],
    tier: 2,
    kind: 'negative',
  },
  {
    sentence: 'My phone ___ in my bag yesterday. I left it at home.',
    answer: "wasn't",
    options: ["wasn't", "weren't", "didn't", "isn't"],
    tier: 2,
    kind: 'negative',
  },
  {
    sentence: 'Sorry, we ___ at home when you called. We went to the park.',
    answer: "weren't",
    options: ["weren't", "wasn't", "didn't", "haven't been"],
    tier: 2,
    kind: 'negative',
  },
  {
    sentence: "Yesterday's test ___ difficult. Everyone finished early.",
    answer: "wasn't",
    options: ["wasn't", "weren't", "didn't", "isn't"],
    tier: 2,
    kind: 'negative',
  },
  {
    sentence: 'You ___ in class on Monday. What happened?',
    answer: "weren't",
    options: ["weren't", "wasn't", "didn't", "haven't been"],
    tier: 2,
    kind: 'negative',
  },

  // ── Tier 2: past questions ──────────────────────────────────────────
  {
    sentence: '___ you at home yesterday?',
    answer: 'Were',
    options: ['Were', 'Was', 'Did', 'Are'],
    tier: 2,
    kind: 'question',
  },
  {
    sentence: '___ the film good last night?',
    answer: 'Was',
    options: ['Was', 'Were', 'Did', 'Is'],
    tier: 2,
    kind: 'question',
  },
  {
    sentence: '___ your parents at the match last Saturday?',
    answer: 'Were',
    options: ['Were', 'Was', 'Did', 'Are'],
    tier: 2,
    kind: 'question',
  },
  {
    sentence: 'Where ___ you born?',
    answer: 'were',
    options: ['were', 'was', 'are', 'did'],
    tier: 2,
    kind: 'question',
    facts: ['born'],
  },
  {
    sentence: 'What time ___ it when you got home?',
    answer: 'was',
    options: ['was', 'were', 'is', 'did'],
    tier: 2,
    kind: 'question',
  },
  {
    sentence: 'Why ___ you late yesterday?',
    answer: 'were',
    options: ['were', 'was', 'are', 'did'],
    tier: 2,
    kind: 'question',
  },
  {
    sentence: '___ it cold in Scotland last week?',
    answer: 'Was',
    options: ['Was', 'Were', 'Is', 'Did'],
    tier: 2,
    kind: 'question',
  },
  {
    sentence: 'How ___ your holiday in Spain last month?',
    answer: 'was',
    options: ['was', 'were', 'is', 'did'],
    tier: 2,
    kind: 'question',
  },
  {
    sentence: '___ there many people at the concert last night?',
    answer: 'Were',
    options: ['Were', 'Was', 'Did', 'Are'],
    tier: 2,
    kind: 'question',
  },
  {
    sentence: 'Who ___ your teacher last year?',
    answer: 'was',
    options: ['was', 'were', 'is', 'did'],
    tier: 2,
    kind: 'question',
  },

  // ── Tier 2: past short answers ──────────────────────────────────────
  {
    context: ['A: Was the museum open on Monday?'],
    sentence: 'B: No, ___.',
    answer: "it wasn't",
    options: ["it wasn't", "it didn't", "it weren't", "it isn't"],
    tier: 2,
    kind: 'short answer',
  },
  {
    context: ['A: Were your friends at the cinema too?'],
    sentence: 'B: Yes, ___.',
    answer: 'they were',
    options: ['they were', 'they was', 'they did', 'there were'],
    tier: 2,
    kind: 'short answer',
  },
  {
    context: ['A: Was your sister at the wedding?'],
    sentence: 'B: No, ___.',
    answer: "she wasn't",
    options: ["she wasn't", "she didn't", "she weren't", "she isn't"],
    tier: 2,
    kind: 'short answer',
  },
  {
    context: ['A: Were the questions difficult?'],
    sentence: 'B: No, ___. I finished in ten minutes.',
    answer: "they weren't",
    options: ["they weren't", "they wasn't", "they didn't", "they aren't", "there weren't"],
    tier: 2,
    kind: 'short answer',
  },
  {
    context: ['A: Was I very loud last night?'],
    sentence: 'B: Yes, ___. You woke the baby.',
    answer: 'you were',
    options: ['you were', 'you was', 'I was', 'you did'],
    tier: 2,
    kind: 'short answer',
  },
  {
    context: ['A: Were you tired after the race?'],
    sentence: 'B: Yes, ___.',
    answer: 'I was',
    options: ['I was', 'I were', 'I did', 'you were'],
    tier: 2,
    kind: 'short answer',
  },
  {
    context: ['A: Was the bus late again?'],
    sentence: 'B: Yes, ___. Twenty minutes late.',
    answer: 'it was',
    options: ['it was', 'it did', 'it were', 'it is'],
    tier: 2,
    kind: 'short answer',
  },
  {
    context: ['A: Were you and Leo in the same class?'],
    sentence: 'B: Yes, ___.',
    answer: 'we were',
    options: ['we were', 'we was', 'they were', 'we did'],
    tier: 2,
    kind: 'short answer',
    facts: ['answered with we'],
  },

  // ── Tier 2: there was, there were; nouns we cannot count ───────────
  {
    sentence: 'There ___ a lot of rain last night.',
    answer: 'was',
    options: ['was', 'were', 'is', 'had'],
    tier: 2,
    kind: 'there',
  },
  {
    sentence: 'There ___ twenty people at my birthday party last week.',
    answer: 'were',
    options: ['were', 'was', 'are', 'have been'],
    tier: 2,
    kind: 'there',
  },
  {
    sentence: 'There ___ some milk in the fridge.',
    answer: 'is',
    options: ['is', 'are', 'has', 'have'],
    tier: 2,
    kind: 'there',
  },
  {
    sentence: 'There ___ a lot of children in the park today.',
    answer: 'are',
    options: ['are', 'is', 'have', 'has'],
    tier: 2,
    kind: 'there',
  },
  {
    sentence: 'There ___ no buses after midnight.',
    answer: 'are',
    options: ['are', 'is', 'have', 'has'],
    tier: 2,
    kind: 'there',
  },
  {
    sentence: 'There ___ an old castle on the hill, but it fell down years ago.',
    answer: 'was',
    options: ['was', 'were', 'is', 'had'],
    tier: 2,
    kind: 'there',
  },
  {
    context: ['A: Is there any bread?'],
    sentence: 'B: No, ___. I will buy some.',
    answer: "there isn't",
    options: ["there isn't", "there aren't", "it isn't", 'there not'],
    tier: 2,
    kind: 'there',
  },
  {
    sentence: 'How many chairs ___ in the room?',
    answer: 'are there',
    options: ['are there', 'is there', 'there are', 'they are'],
    tier: 2,
    kind: 'there',
  },

  // ── Tier 2: will be, won't be ───────────────────────────────────────
  {
    sentence: 'Next year my brother ___ eighteen.',
    answer: 'will be',
    options: ['will be', 'will', 'was', 'will have'],
    tier: 2,
    kind: 'future',
    facts: ['age'],
  },
  {
    sentence: 'I ___ fifteen in May.',
    answer: 'will be',
    options: ['will be', 'will', 'have', 'am being'],
    tier: 2,
    kind: 'future',
    facts: ['age'],
  },
  {
    sentence: 'I ___ at school tomorrow. It is a holiday.',
    answer: "won't be",
    options: ["won't be", "wasn't", "don't be", 'not will be'],
    tier: 2,
    kind: 'future',
  },
  {
    sentence: "Don't call after nine. We ___ awake then.",
    answer: "won't be",
    options: ["won't be", "weren't", "don't be", "aren't being"],
    tier: 2,
    kind: 'future',
  },
  {
    sentence: 'The shop ___ open on Sunday, so buy the milk today.',
    answer: "won't be",
    options: ["won't be", "doesn't be", "isn't being", 'not will be'],
    tier: 2,
    kind: 'future',
  },
  {
    sentence: 'It ___ sunny tomorrow, so take an umbrella.',
    answer: "won't be",
    options: ["won't be", "wasn't", "doesn't be", 'not will be'],
    tier: 2,
    kind: 'future',
  },

  // ── Tier 2: been, being ─────────────────────────────────────────────
  {
    sentence: 'Where have you ___? I waited for an hour.',
    answer: 'been',
    options: ['been', 'be', 'being'],
    tier: 2,
    kind: 'been',
  },
  {
    sentence: 'Stop ___ silly and sit down.',
    answer: 'being',
    options: ['being', 'be', 'been'],
    tier: 2,
    kind: 'being',
  },

  // ── Tier 2: be, not have, for feelings ──────────────────────────────
  {
    sentence: 'I ___ afraid of big dogs.',
    answer: 'am',
    options: ['am', 'have', 'has', 'is'],
    tier: 2,
    kind: 'be not have',
    facts: ['feeling'],
  },
  {
    sentence: 'You ___ right. The answer is seven.',
    answer: 'are',
    options: ['are', 'have', 'has', 'is'],
    tier: 2,
    kind: 'be not have',
  },
  {
    sentence: 'I ___ sleepy. I went to bed very late.',
    answer: 'am',
    options: ['am', 'have', 'has', 'is'],
    tier: 2,
    kind: 'be not have',
    facts: ['feeling'],
  },

  // ── Tier 2: be after must, can, should; to be after want ───────────
  {
    sentence: 'You must ___ quiet in the library.',
    answer: 'be',
    options: ['be', 'are', 'to be', 'being'],
    tier: 2,
    kind: 'after a modal',
  },
  {
    sentence: 'I want ___ a doctor when I grow up.',
    answer: 'to be',
    options: ['to be', 'be', 'being', 'am'],
    tier: 2,
    kind: 'after a verb',
    facts: ['to be a job'],
  },
  {
    sentence: 'It can ___ very cold here in January.',
    answer: 'be',
    options: ['be', 'is', 'to be', 'being'],
    tier: 2,
    kind: 'after a modal',
  },
  {
    sentence: 'You should ___ careful on the ice.',
    answer: 'be',
    options: ['be', 'are', 'to be', 'being'],
    tier: 2,
    kind: 'after a modal',
  },
  {
    sentence: 'I would like ___ a pilot one day.',
    answer: 'to be',
    options: ['to be', 'be', 'being', 'am'],
    tier: 2,
    kind: 'after a verb',
    facts: ['to be a job'],
  },
  {
    sentence: "Tomorrow's lesson might ___ online.",
    answer: 'be',
    options: ['be', 'is', 'to be', 'being'],
    tier: 2,
    kind: 'after a modal',
  },

  // ── Tier 2: subjects that trick the ear ─────────────────────────────
  {
    sentence: 'Everyone in my family ___ tall.',
    answer: 'is',
    options: ['is', 'are', 'were'],
    tier: 2,
    kind: 'agreement',
    facts: ['everyone is', 'everyone'],
  },
  {
    sentence: 'The shops in our town ___ open until eight.',
    answer: 'are',
    options: ['are', 'is', 'was'],
    tier: 2,
    kind: 'agreement',
    facts: ['shops are'],
  },
  {
    sentence: 'The news ___ good today.',
    answer: 'is',
    options: ['is', 'are', 'were'],
    tier: 2,
    kind: 'agreement',
  },
  {
    sentence: 'My jeans ___ too long. I need a shorter pair.',
    answer: 'are',
    options: ['are', 'is', 'was'],
    tier: 2,
    kind: 'agreement',
  },
  {
    sentence: 'One of my friends ___ from Peru.',
    answer: 'is',
    options: ['is', 'are', 'were'],
    tier: 2,
    kind: 'agreement',
    facts: ['one is'],
  },
  {
    sentence: 'Maths ___ my favourite subject.',
    answer: 'is',
    options: ['is', 'are', 'were'],
    tier: 2,
    kind: 'agreement',
  },
  {
    sentence: 'The police ___ outside the bank now.',
    answer: 'are',
    options: ['are', 'is', 'was'],
    tier: 2,
    kind: 'agreement',
  },
  {
    sentence: 'My friend and I ___ in the school play this year.',
    answer: 'are',
    options: ['are', 'am', 'is', 'was'],
    tier: 2,
    kind: 'agreement',
    facts: ['joined by and'],
  },

  // ── Tier 2: "to be" with an -ing verb ───────────────────────────────
  {
    sentence: 'Why ___ you crying?',
    answer: 'are',
    options: ['are', 'do', 'is', 'does'],
    tier: 2,
    kind: 'continuous',
  },
  {
    sentence: 'She ___ not working today. It is her day off.',
    answer: 'is',
    options: ['is', 'does', 'are'],
    tier: 2,
    kind: 'continuous',
  },
  {
    sentence: 'Be quiet. The baby ___ sleeping.',
    answer: 'is',
    options: ['is', 'are', 'does'],
    tier: 2,
    kind: 'continuous',
  },
  {
    sentence: "What ___ you doing at eight o'clock last night?",
    answer: 'were',
    options: ['were', 'was', 'did', 'are'],
    tier: 2,
    kind: 'continuous',
  },
  {
    sentence: 'I ___ reading when you phoned.',
    answer: 'was',
    options: ['was', 'were', 'am', 'did'],
    tier: 2,
    kind: 'continuous',
  },
  // ── Tier 3 (B1), new on 24 October 2026: has been, have been ────────
  {
    context: ['Mia moved to Leeds in 2019.'],
    sentence: 'She ___ there ever since.',
    answer: 'has been',
    options: ['has been', 'is', 'was', 'have been'],
    tier: 3,
    kind: 'for and since',
  },
  {
    sentence: 'My grandparents ___ married for fifty years, and they are still very happy.',
    answer: 'have been',
    options: ['have been', 'are', 'were', 'have being'],
    tier: 3,
    kind: 'for and since',
  },
  {
    context: ['A: When did you start at this school?', 'B: Two years ago.'],
    sentence: 'A: Oh, so you ___ here for two years.',
    answer: 'have been',
    options: ['have been', 'are', 'were', 'has been'],
    tier: 3,
    kind: 'for and since',
  },
  {
    sentence: 'Our teacher is ill. She ___ off school since Monday.',
    answer: 'has been',
    options: ['has been', 'is', 'was', 'had been'],
    tier: 3,
    kind: 'for and since',
  },
  {
    context: ['I joined the chess club three years ago, and I still go every week.'],
    sentence: 'So I ___ a member for three years.',
    answer: 'have been',
    options: ['have been', 'am', 'was', 'have being'],
    tier: 3,
    kind: 'for and since',
  },
  {
    sentence: 'We ___ friends since we were five.',
    answer: 'have been',
    options: ['have been', 'are', 'were', 'has been'],
    tier: 3,
    kind: 'for and since',
  },
  {
    context: ['It started raining on Friday.'],
    sentence: 'It ___ wet for three days now.',
    answer: 'has been',
    options: ['has been', 'is', 'was', 'have been'],
    tier: 3,
    kind: 'for and since',
  },
  {
    context: ['My uncle started driving buses in 2010. He still loves it.'],
    sentence: 'He ___ a bus driver since 2010.',
    answer: 'has been',
    options: ['has been', 'is', 'was', 'have been'],
    tier: 3,
    kind: 'for and since',
  },
  {
    context: ['The café on our street opened in 1985, and it is still busy every day.'],
    sentence: 'It ___ open for over forty years.',
    answer: 'has been',
    options: ['has been', 'is', 'was', 'had been'],
    tier: 3,
    kind: 'for and since',
  },

  // ── Tier 3: the passive ─────────────────────────────────────────────
  {
    context: ['Our school is very old.'],
    sentence: 'It ___ built in 1902.',
    answer: 'was',
    options: ['was', 'is', 'has been', 'were'],
    tier: 3,
    kind: 'passive',
  },
  {
    context: ['A: What a lovely old photo.'],
    sentence: 'B: Thanks. It ___ taken by my grandmother in 1975.',
    answer: 'was',
    options: ['was', 'is', 'has been', 'were'],
    tier: 3,
    kind: 'passive',
  },
  {
    context: ['Our street looks very different now.'],
    sentence: 'The old houses ___ knocked down in 1990.',
    answer: 'were',
    options: ['were', 'was', 'are', 'have been'],
    tier: 3,
    kind: 'passive',
  },
  {
    context: ['Our city is getting greener.'],
    sentence: 'Every year, thousands of trees ___ planted here.',
    answer: 'are',
    options: ['are', 'is', 'have', 'has'],
    tier: 3,
    kind: 'passive',
  },
  {
    context: ['People learn English all over the world.'],
    sentence: 'Today, English ___ spoken in many countries.',
    answer: 'is',
    options: ['is', 'are', 'was', 'has'],
    tier: 3,
    kind: 'passive',
  },
  {
    context: ['A: Why are you late?'],
    sentence: 'B: My bike ___ stolen last night, so I had to walk.',
    answer: 'was',
    options: ['was', 'is', 'has been', 'were'],
    tier: 3,
    kind: 'passive',
  },
  {
    context: ['The classroom looks great this morning.'],
    sentence: 'The windows ___ cleaned yesterday.',
    answer: 'were',
    options: ['were', 'was', 'are', 'have been'],
    tier: 3,
    kind: 'passive',
  },
  {
    context: ['This bread is still warm.'],
    sentence: 'It ___ made an hour ago.',
    answer: 'was',
    options: ['was', 'is', 'has been', 'were'],
    tier: 3,
    kind: 'passive',
  },
  {
    context: ['The new library is ready, but it is not open yet.'],
    sentence: 'It ___ opened by the mayor next week.',
    answer: 'will be',
    options: ['will be', 'was', 'has been', 'will'],
    tier: 3,
    kind: 'passive',
  },

  // ── Tier 3: was and were with an -ing verb, in a story ─────────────
  {
    context: ['Yesterday something strange happened.'],
    sentence: 'I ___ walking to school when I saw a fox.',
    answer: 'was',
    options: ['was', 'were', 'am', 'have been'],
    tier: 3,
    kind: 'continuous',
  },
  {
    context: ["At eight o'clock last night, our house was very busy."],
    sentence: 'My parents ___ cooking, and my sister was doing her homework.',
    answer: 'were',
    options: ['were', 'was', 'are', 'have been'],
    tier: 3,
    kind: 'continuous',
  },
  {
    sentence: 'While we ___ waiting for the bus, it started to rain.',
    answer: 'were',
    options: ['were', 'was', 'are', 'have been'],
    tier: 3,
    kind: 'continuous',
  },
  {
    context: ["Sorry I didn't answer your call last night."],
    sentence: 'I ___ having a shower.',
    answer: 'was',
    options: ['was', 'am', 'were', 'have been'],
    tier: 3,
    kind: 'continuous',
  },
  {
    sentence: 'When the teacher came in, the students ___ talking loudly.',
    answer: 'were',
    options: ['were', 'was', 'are', 'have been'],
    tier: 3,
    kind: 'continuous',
  },
  {
    context: ["A: Why didn't you hear the doorbell?"],
    sentence: 'B: Sorry, I ___ listening to music.',
    answer: 'was',
    options: ['was', 'am', 'were'],
    tier: 3,
    kind: 'continuous',
  },
  {
    context: ['Last Sunday, we had a picnic in the park.'],
    sentence: 'The sun ___ shining, and everyone looked happy.',
    answer: 'was',
    options: ['was', 'were', 'is', 'has been'],
    tier: 3,
    kind: 'continuous',
  },
  {
    context: ['Last night there was a power cut.'],
    sentence: 'We ___ watching a film when the lights went out.',
    answer: 'were',
    options: ['were', 'was', 'are', 'have been'],
    tier: 3,
    kind: 'continuous',
  },

  // ── Tier 3: question tags ───────────────────────────────────────────
  {
    context: ['A: Look at the ice on the cars.'],
    sentence: "B: It's really cold today, ___ it?",
    answer: "isn't",
    options: ["isn't", "doesn't", "wasn't", "aren't"],
    tier: 3,
    kind: 'tag',
  },
  {
    context: ["A: Hi. I'm Omar."],
    sentence: "B: Hi, Omar. You're new here, ___ you?",
    answer: "aren't",
    options: ["aren't", "don't", "isn't", "weren't"],
    tier: 3,
    kind: 'tag',
  },
  {
    context: ['A: Lena and Max missed the start of the film.'],
    sentence: 'B: They were late again, ___ they?',
    answer: "weren't",
    options: ["weren't", "didn't", "wasn't", "aren't"],
    tier: 3,
    kind: 'tag',
  },
  {
    context: ['A: Where is Priya?'],
    sentence: "B: I don't know. She isn't here today, ___ she?",
    answer: 'is',
    options: ['is', "isn't", 'does', 'was'],
    tier: 3,
    kind: 'tag',
  },
  {
    context: ['A: The lesson started ten minutes ago.'],
    sentence: "B: Oh no. I'm late, ___ I?",
    answer: "aren't",
    options: ["aren't", "isn't", "don't", "wasn't"],
    tier: 3,
    kind: 'tag',
  },
  {
    context: ['A: I need to revise tonight.'],
    sentence: "B: Oh yes. There's a test tomorrow, ___ there?",
    answer: "isn't",
    options: ["isn't", "doesn't", "hasn't", "aren't"],
    tier: 3,
    kind: 'tag',
  },
  {
    context: ['A: My parents speak Swahili at home.'],
    sentence: 'B: Your parents are from Kenya, ___ they?',
    answer: "aren't",
    options: ["aren't", "don't", "isn't", "weren't"],
    tier: 3,
    kind: 'tag',
    facts: ['parents from'],
  },
  {
    context: ['A: Tom missed the maths test.'],
    sentence: "B: That's right. He wasn't at school yesterday, ___ he?",
    answer: 'was',
    options: ['was', "wasn't", 'did', 'is'],
    tier: 3,
    kind: 'tag',
  },
  {
    context: ['A: Whose coat is this?'],
    sentence: "B: It's Leo's coat, ___ it?",
    answer: "isn't",
    options: ["isn't", "doesn't", "aren't", "wasn't"],
    tier: 3,
    kind: 'tag',
  },
  {
    context: ['A: Hurry up. The film starts at seven.'],
    sentence: "B: We aren't late, ___ we? It is only six.",
    answer: 'are',
    options: ['are', "aren't", 'do', 'were'],
    tier: 3,
    kind: 'tag',
  },
  // ── Tier 3: if and when ─────────────────────────────────────────────
  {
    context: ['A: What shall we do on Saturday?'],
    sentence: 'B: If it ___ sunny, we will go to the beach.',
    answer: 'is',
    options: ['is', 'will be', 'was', 'would be'],
    tier: 3,
    kind: 'if and when',
    facts: ['present for the future'],
  },
  {
    sentence: 'When I ___ older, I want to work with animals.',
    answer: 'am',
    options: ['am', 'will be', 'was', 'would be'],
    tier: 3,
    kind: 'if and when',
    facts: ['present for the future'],
  },
  {
    context: ["A: I don't understand this homework."],
    sentence: 'B: If I ___ you, I would ask the teacher for help.',
    answer: 'were',
    options: ['were', 'am', 'will be', 'would be'],
    tier: 3,
    kind: 'if and when',
  },
  {
    context: ['A: What time does your train arrive?'],
    sentence: 'B: About six. I will phone you when I ___ at the station.',
    answer: 'am',
    options: ['am', 'will be', 'was', 'would be'],
    tier: 3,
    kind: 'if and when',
    facts: ['present for the future'],
  },
  {
    context: ['A: We still have a long way to walk.'],
    sentence: 'B: If you ___ tired, we can stop for a rest.',
    answer: 'are',
    options: ['are', 'will be', 'were', 'would be'],
    tier: 3,
    kind: 'if and when',
    facts: ['present for the future'],
  },
  {
    sentence: 'If the weather ___ bad tomorrow, the match will be cancelled.',
    answer: 'is',
    options: ['is', 'will be', 'was', 'would be'],
    tier: 3,
    kind: 'if and when',
    facts: ['present for the future'],
  },
  {
    context: ['Mum is at work until six.'],
    sentence: 'She will cook dinner when she ___ home.',
    answer: 'is',
    options: ['is', 'will be', 'was', 'would be'],
    tier: 3,
    kind: 'if and when',
    facts: ['present for the future'],
  },
  {
    sentence: 'If I ___ rich, I would buy a house by the sea.',
    answer: 'were',
    options: ['were', 'am', 'will be', 'would be'],
    tier: 3,
    kind: 'if and when',
  },
  {
    sentence: 'We walk to school unless it ___ raining.',
    answer: 'is',
    options: ['is', 'will be', 'was', 'would be'],
    tier: 3,
    kind: 'if and when',
  },

  // ── Tier 3: being and to be after a verb or a preposition ──────────
  {
    context: ['My brother is shy.'],
    sentence: "He doesn't like ___ the centre of attention.",
    answer: 'being',
    options: ['being', 'be', 'been', 'is'],
    tier: 3,
    kind: 'being',
  },
  {
    context: ['A: Here are the books you wanted.'],
    sentence: 'B: Great. Thank you for ___ so helpful today.',
    answer: 'being',
    options: ['being', 'be', 'to be', 'been'],
    tier: 3,
    kind: 'being',
  },
  {
    context: ['A: Why do you always run to the bus?'],
    sentence: "B: I'm tired of ___ late every morning.",
    answer: 'being',
    options: ['being', 'be', 'to be', 'been'],
    tier: 3,
    kind: 'being',
  },
  {
    context: ['Kasia joined our class today.'],
    sentence: 'She seems ___ a little nervous.',
    answer: 'to be',
    options: ['to be', 'being', 'be', 'is'],
    tier: 3,
    kind: 'after a verb',
  },
  {
    context: ['My cousin loves animals.'],
    sentence: 'She hopes ___ a vet one day.',
    answer: 'to be',
    options: ['to be', 'being', 'be', 'will be'],
    tier: 3,
    kind: 'after a verb',
    facts: ['to be a job'],
  },
  {
    context: ['A: Your parents are out tonight.'],
    sentence: "B: That's OK. I don't mind ___ at home on my own.",
    answer: 'being',
    options: ['being', 'to be', 'be', 'been'],
    tier: 3,
    kind: 'being',
  },
  {
    context: ['Our team lost every match last year.'],
    sentence: 'This year we need ___ better.',
    answer: 'to be',
    options: ['to be', 'be', 'being', 'are'],
    tier: 3,
    kind: 'after a verb',
  },
  {
    context: ['A: Why do you go to bed so early?'],
    sentence: 'B: I hate ___ tired in the morning.',
    answer: 'being',
    options: ['being', 'be', 'been', 'am'],
    tier: 3,
    kind: 'being',
  },

  // ── Tier 3: going to ────────────────────────────────────────────────
  {
    context: ['Look at those dark clouds.'],
    sentence: 'It ___ going to rain.',
    answer: 'is',
    options: ['is', 'will', 'was', 'are'],
    tier: 3,
    kind: 'going to',
  },
  {
    context: ['We bought the train tickets yesterday.'],
    sentence: 'We ___ going to visit Grandma next weekend.',
    answer: 'are',
    options: ['are', 'will', 'is'],
    tier: 3,
    kind: 'going to',
  },
  {
    context: ['A: Why are you wearing your football boots?'],
    sentence: 'B: I ___ going to play in the park.',
    answer: 'am',
    options: ['am', 'will', 'is'],
    tier: 3,
    kind: 'going to',
  },
  {
    sentence: 'I ___ going to call you, but my phone died.',
    answer: 'was',
    options: ['was', 'am', 'will', 'were'],
    tier: 3,
    kind: 'going to',
  },
  {
    context: ['A: Do you have plans for the summer?'],
    sentence: 'B: Yes, my sister and I ___ going to learn to swim.',
    answer: 'are',
    options: ['are', 'am', 'is', 'will'],
    tier: 3,
    kind: 'going to',
    facts: ['joined by and'],
  },
  {
    context: ['Be careful with that glass.'],
    sentence: 'You ___ going to drop it.',
    answer: 'are',
    options: ['are', 'will', 'is', 'were'],
    tier: 3,
    kind: 'going to',
  },

  // ── Tier 3: used to be ──────────────────────────────────────────────
  {
    context: ['This shop sells shoes now.'],
    sentence: 'It ___ a bank when I was a child.',
    answer: 'used to be',
    options: ['used to be', 'use to be', 'was used to', 'is used to'],
    tier: 3,
    kind: 'used to',
  },
  {
    context: ['My grandad is very calm these days.'],
    sentence: 'But he ___ very strict when my dad was young.',
    answer: 'used to be',
    options: ['used to be', 'use to be', 'was used to', 'used to being'],
    tier: 3,
    kind: 'used to',
  },
  {
    sentence: 'There ___ a cinema in our town, but it closed years ago.',
    answer: 'used to be',
    options: ['used to be', 'use to be', 'was used to', 'is used to'],
    tier: 3,
    kind: 'used to',
  },

  // ── Tier 3: there, in a short text ──────────────────────────────────
  {
    context: ['A: Why is there a new speed sign on this road?'],
    sentence: 'B: There ___ two accidents here since January.',
    answer: 'have been',
    options: ['have been', 'were', 'are', 'was'],
    tier: 3,
    kind: 'there',
  },
  {
    context: ['The weather forecast is bad.'],
    sentence: 'There ___ strong winds tonight, so stay inside.',
    answer: 'will be',
    options: ['will be', 'were', 'will', 'was'],
    tier: 3,
    kind: 'there',
  },
  {
    context: ['A: How was the party?'],
    sentence: 'B: Great. There ___ so many people that we could not move.',
    answer: 'were',
    options: ['were', 'was', 'are', 'have been'],
    tier: 3,
    kind: 'there',
  },
  {
    context: ['Our village is very quiet now.'],
    sentence: 'Fifty years ago, there ___ three shops and a school here.',
    answer: 'were',
    options: ['were', 'was', 'are', 'have been'],
    tier: 3,
    kind: 'there',
  },
  {
    context: ['A: Is everything OK? You look worried.'],
    sentence: 'B: Yes. There ___ a problem with my phone, but it works now.',
    answer: 'was',
    options: ['was', 'is', 'were', 'has'],
    tier: 3,
    kind: 'there',
  },
  {
    context: ['The builders started work in March.'],
    sentence: 'Next year there ___ a new swimming pool in our town.',
    answer: 'will be',
    options: ['will be', 'was', 'has been', 'will'],
    tier: 3,
    kind: 'there',
  },

  // ── Tier 3: a turn in a dialogue ────────────────────────────────────
  {
    context: ['A: Where were you last night?', 'B: At home, with my family.'],
    sentence: 'A: ___ your brother at home too?',
    answer: 'Was',
    options: ['Was', 'Were', 'Is', 'Did'],
    tier: 3,
    kind: 'dialogue',
  },
  {
    context: ['A: I phoned you three times yesterday.'],
    sentence: 'B: Sorry, I ___ at football practice all afternoon.',
    answer: 'was',
    options: ['was', 'am', 'were', 'have been'],
    tier: 3,
    kind: 'dialogue',
  },
  {
    context: ['A: Is Sara still in hospital?'],
    sentence: 'B: No, she ___ at home since Tuesday.',
    answer: 'has been',
    options: ['has been', 'is', 'was', 'had been'],
    tier: 3,
    kind: 'for and since',
  },
  {
    context: ['A: How was your first day at the new school?'],
    sentence: 'B: Great. Everyone ___ really friendly.',
    answer: 'was',
    options: ['was', 'were', 'are'],
    tier: 3,
    kind: 'dialogue',
    facts: ['everyone'],
  },
  {
    context: ['A: Was the exam hard?'],
    sentence: 'B: Not really. The questions ___ easier than I expected.',
    answer: 'were',
    options: ['were', 'was', 'are', 'have been'],
    tier: 3,
    kind: 'dialogue',
  },
  {
    context: ['A: Why is the shop closed?'],
    sentence: 'B: I think the owner ___ on holiday this week.',
    answer: 'is',
    options: ['is', 'are', 'has', 'will'],
    tier: 3,
    kind: 'dialogue',
  },
  {
    context: ['A: Do you know Mr Evans?'],
    sentence: 'B: Yes, he ___ my teacher two years ago.',
    answer: 'was',
    options: ['was', 'is', 'has been', 'were'],
    tier: 3,
    kind: 'dialogue',
  },
  {
    context: ['A: You look tired.'],
    sentence: 'B: I am. I ___ awake half the night with toothache.',
    answer: 'was',
    options: ['was', 'am', 'were'],
    tier: 3,
    kind: 'dialogue',
  },
  {
    context: ['A: Was the party fun?', 'B: Yes, but the music was very loud.'],
    sentence: 'A: ___ your neighbours angry about the noise?',
    answer: 'Were',
    options: ['Were', 'Was', 'Did'],
    tier: 3,
    kind: 'dialogue',
  },
  {
    context: ['A: Where are my glasses?'],
    sentence: 'B: They ___ on the kitchen table five minutes ago.',
    answer: 'were',
    options: ['were', 'are', 'was', 'have been'],
    tier: 3,
    kind: 'dialogue',
  },
  {
    context: ['A: Is it your birthday today?'],
    sentence: 'B: No, it ___ yesterday.',
    answer: 'was',
    options: ['was', 'is', 'were', 'has been'],
    tier: 3,
    kind: 'dialogue',
  },
  {
    context: ['A: How long have you lived here?'],
    sentence: 'B: Only a month, so I ___ still new here.',
    answer: 'am',
    options: ['am', 'was', 'have been', 'were'],
    tier: 3,
    kind: 'dialogue',
  },
]

/** The options a question offers, in the order written; the page shuffles them. */
export function optionSet(item: VerbItem): readonly string[] {
  return item.options
}

/** Lower case, curly apostrophes straightened, everything but letters and apostrophes a space. */
const plain = (s: string) =>
  s
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[^a-z' ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const SUBJECTS = new Set(['i', 'you', 'he', 'she', 'it', 'we', 'they', 'there'])
const BE = new Set(['am', 'is', 'are', 'was', 'were', "isn't", "aren't", "wasn't", "weren't"])
/** A subject joined to "to be", read as both forms: "he's" is "he is". */
const FULL: Record<string, string> = {
  "i'm": 'i am',
  "you're": 'you are',
  "he's": 'he is',
  "she's": 'she is',
  "it's": 'it is',
  "we're": 'we are',
  "they're": 'they are',
  "there's": 'there is',
}

const DETERMINERS = new Set(['the', 'a', 'an', 'my', 'your', 'his', 'her', 'our', 'their', 'this'])
const QUESTION_WORDS = new Set(['what', 'where', 'when', 'why', 'how', 'who'])

/** Every subject and form of "to be" side by side in a text: "are you", "she was", "it is". */
function pairsIn(text: string): string[] {
  // A speaker's label ("A:", "B:") is not a word of the text.
  const words = plain(text.replace(/(^|\s)[AB]:\s/g, ' '))
    .split(' ')
    .filter(Boolean)
  const out: string[] = []
  words.forEach((w, i) => {
    if (FULL[w]) out.push(w, FULL[w])
    const next = words[i + 1]
    if (!next) return
    // "My brother is shy": the word before a form of "to be".
    if (BE.has(next) && !BE.has(w)) out.push(`${w} ${next}`)
    // "Are you ...?", "Is your brother ...?": the subject after it, first.
    if (BE.has(w) && SUBJECTS.has(next)) out.push(`${next} ${w}`)
    const opens = i === 0 || QUESTION_WORDS.has(words[i - 1])
    if (opens && BE.has(w) && DETERMINERS.has(next) && words[i + 2])
      out.push(`${words[i + 2]} ${w}`)
  })
  return out
}

/** The subject just after the gap, as in a question: "you", or "brother" for "your brother". */
function subjectAfter(after: string): string | undefined {
  const words = plain(after).split(' ').filter(Boolean)
  if (SUBJECTS.has(words[0] ?? '')) return words[0]
  if (DETERMINERS.has(words[0] ?? '') && words[1]) return words[1]
  return undefined
}

/**
 * What would give a question away to another in the same round, so the
 * dealer keeps the two apart (src/lib/games/deal-round.ts). Each is a
 * subject and a form of "to be", subject first, whichever order the text
 * has them in, because a student who has just seen "Are you" in one
 * question knows the answer to "You ___ very good at grammar":
 *
 *   - the gap read with its subject: "she is" for "She ___ my best friend",
 *     "you were" for "___ you at home yesterday?", "brother is" for "How
 *     old ___ your brother?", "it isn't" for a tag; the reply itself for a
 *     reply ("i am"), and its full form for a short form ("he's" is also
 *     "he is"); where a pronoun follows the gap, that pronoun too, since the
 *     page shows the gap filled once it is answered ("If I ___ you" shows
 *     "were you");
 *   - "has been" or "have been" itself, where that is the answer;
 *   - every subject and form of "to be" printed together in the dialogue
 *     or the rest of the sentence ("Are you a student here?", "but her
 *     brother is");
 *   - anything the question names in `facts`.
 *
 * So "I ___ a student" and "I ___ happy to help" are never in one round,
 * and nor are "___ you a student?" and a dialogue that begins "Are you".
 */
export function gapFacts(item: VerbItem): string[] {
  const answer = plain(item.answer)
  const [before, after = ''] = item.sentence.split('___')
  const prev = plain(before.replace(/^[A-Z]:\s*/, ''))
    .split(' ')
    .filter(Boolean)
    .pop()
  const words = answer.split(' ')
  const facts: string[] = []
  if (words.length > 1 && SUBJECTS.has(words[0])) facts.push(answer)
  else if (words.length > 1 && SUBJECTS.has(words[words.length - 1]))
    facts.push(`${words[words.length - 1]} ${words.slice(0, -1).join(' ')}`)
  else if (FULL[answer]) facts.push(answer, FULL[answer])
  else {
    if (prev && prev !== 'yes' && prev !== 'no') facts.push(`${prev} ${answer}`)
    const subject = subjectAfter(after)
    if (subject) facts.push(`${subject} ${answer}`)
    if (!prev && !subject) facts.push(answer)
  }
  // Two present perfects of "to be" in one round answer each other.
  if (answer === 'has been' || answer === 'have been') facts.push(answer)
  for (const line of item.context ?? []) facts.push(...pairsIn(line))
  facts.push(...pairsIn(`${before} ${after}`))
  facts.push(...(item.facts ?? []))
  return [...new Set(facts)]
}

/** The forms recorded by name; any other answer is recorded by its kind. */
const PLAIN = new Set(['am', 'is', 'are', 'was', 'were', 'will be', 'been', 'being'])

export const BANK: GameBank<VerbItem> = {
  slug: 'to-be-conjugation',
  items: VERB_BANK,
  // A sentence is unique on its own; a reply ("B: Yes, ___.") is unique with
  // the dialogue before it.
  key: (v) => (v.context ? `${v.context.join(' ')} ${v.sentence}` : v.sentence),
  answer: (v) => v.answer,
  options: optionSet,
  // The form asked for ("chose is when the answer was are"), as before 24
  // October 2026; an answer with an apostrophe or a subject is recorded by
  // its kind, because apostrophes are dropped from a kind, so "We're" would
  // be recorded as the past tense "were".
  tag: (v) => (PLAIN.has(v.answer.toLowerCase()) ? v.answer.toLowerCase() : v.kind),
  tier: (v) => v.tier,
  group: (v) => v.kind,
  facts: gapFacts,
  deepened: '2026-10-24',
}
