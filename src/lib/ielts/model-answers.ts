// ─── IELTS model answers (self-authored, copyright-safe) ─────────────────────
// Worked, band-targeted SAMPLE answers for Writing (Task 1 + Task 2) and
// Speaking (Parts 1/2/3). Every prompt, every answer and every commentary line
// here is ORIGINAL, written in-house for The English Hub. We do NOT reproduce
// any real exam paper, and any reference to the marking criteria is paraphrased
// in our own words (never the published descriptors verbatim).
//
// Each item shows two levels — a "developing" answer around band 6.5 and a
// "strong" answer around band 8 — to the SAME prompt, plus a short "why this
// sits at this band" note for each, written in plain English so a learner can
// see exactly what lifts an answer up the scale.
//
// Surfaced by /ielts/model-answers (gated behind hasIeltsAccess, with one free
// sample) and linked from the Writing and Speaking practice pages.
// ────────────────────────────────────────────────────────────────────────────

import type { Band } from './types'

export type ModelAnswerSkill = 'writing' | 'speaking'

/** A single band-targeted sample answer with a plain-English rationale. */
export interface ModelAnswerSample {
  /** Approximate band this sample is written to illustrate. */
  band: Band
  /** Short label, e.g. "Developing (≈ Band 6.5)". */
  label: string
  /** The sample answer text. For speaking Part 2 this is a long-turn monologue. */
  text: string
  /**
   * Bullet notes — in our OWN words — on what places this answer at this band
   * and (for the lower band) what would lift it higher. Criteria are paraphrased,
   * never quoted from the official descriptors.
   */
  why: string[]
}

export interface ModelAnswerItem {
  id: string
  skill: ModelAnswerSkill
  /** Grouping shown in the UI, e.g. "Writing Task 2" or "Speaking Part 2". */
  section: string
  /** The (self-authored) prompt the samples respond to. */
  prompt: string
  /** Extra context for the reader (data described in words, part timing, etc.). */
  promptNote?: string
  /** Two samples: a developing one (~6.5) and a strong one (~8). */
  samples: ModelAnswerSample[]
  /** True for the single sample we show free (the rest are gated). */
  free?: boolean
  /** Deep-link to where the learner can practise this section. */
  practiceHref: string
}

export const MODEL_ANSWERS: ModelAnswerItem[] = [
  // ── Writing Task 1 (Academic – data) ─────────────────────────────────────
  {
    id: 'ma-write-t1-academic',
    skill: 'writing',
    section: 'Writing Task 1 · Academic',
    free: true,
    practiceHref: '/ielts/writing',
    prompt:
      'The chart below shows the number of visitors (in millions) to three city museums — the National Gallery, the Science Centre and the History Museum — in 2010, 2015 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
    promptNote:
      'Self-authored data: National Gallery — 2.0m (2010), 3.2m (2015), 4.5m (2020). Science Centre — 1.5m (2010), 2.8m (2015), 3.0m (2020). History Museum — 3.5m (2010), 3.1m (2015), 2.4m (2020).',
    samples: [
      {
        band: 6.5,
        label: 'Developing (≈ Band 6.5)',
        text: `The chart gives information about visitor numbers to three museums in a city in 2010, 2015 and 2020.

In 2010, the History Museum had the most visitors with 3.5 million. The National Gallery had 2 million and the Science Centre had 1.5 million, which was the lowest. In 2015, the National Gallery rose to 3.2 million and the Science Centre went up to 2.8 million. The History Museum fell a little to 3.1 million.

By 2020, the National Gallery was the most popular with 4.5 million visitors. The Science Centre increased to 3 million. The History Museum continued to fall and reached 2.4 million, so it was the lowest in the last year.

Overall, the National Gallery and the Science Centre became more popular over the period, while the History Museum became less popular.`,
        why: [
          'It answers the task and includes the key figures accurately, which keeps the task-response mark solid.',
          'There is an overview, but it arrives at the end rather than up front, and it could be sharper about the swap in ranking.',
          'Linking is functional ("In 2010 / By 2020 / Overall") but a bit repetitive, which holds back the organisation mark.',
          'To climb higher: lead with the overview, group the two rising museums together, and use more varied change language (e.g. "more than doubled", "a steady decline").',
        ],
      },
      {
        band: 8,
        label: 'Strong (≈ Band 8)',
        text: `The line chart compares how many people, in millions, visited three city museums — the National Gallery, the Science Centre and the History Museum — across three years between 2010 and 2020.

Overall, the two younger attractions grew markedly while the History Museum declined throughout, so that the rankings effectively reversed: the History Museum led at the start of the period but trailed by the end.

In 2010, the History Museum was clearly the busiest, drawing 3.5 million visitors, well ahead of the National Gallery (2 million) and the Science Centre, which attracted just 1.5 million. From that point, however, the History Museum slipped steadily, easing to 3.1 million in 2015 before falling to 2.4 million in 2020.

The other two venues moved in the opposite direction. National Gallery numbers more than doubled, climbing from 2 million to 4.5 million and making it the most visited museum by 2020. The Science Centre saw the sharpest early surge, almost doubling to 2.8 million by 2015, after which growth flattened, edging up only marginally to 3 million.`,
        why: [
          'The overview is placed second, is fully separate, and captures the single most important idea — the reversal in ranking — which is exactly what lifts the task-response mark.',
          'Data is selected and grouped (the two rising museums versus the declining one) rather than listed year by year.',
          'Change is described with precise, varied phrasing ("more than doubled", "eased", "edging up only marginally", "the sharpest early surge").',
          'Sentence structures vary naturally and the figures are woven in as support, not dumped, signalling strong control of grammar and vocabulary.',
        ],
      },
    ],
  },

  // ── Writing Task 2 (Academic essay) ──────────────────────────────────────
  {
    id: 'ma-write-t2-opinion',
    skill: 'writing',
    section: 'Writing Task 2 · Essay',
    practiceHref: '/ielts/writing',
    prompt:
      'Some people believe that universities should focus on preparing students for the job market, while others argue that the main purpose of university is to develop knowledge for its own sake. Discuss both views and give your own opinion. Write at least 250 words.',
    samples: [
      {
        band: 6.5,
        label: 'Developing (≈ Band 6.5)',
        text: `These days people have different opinions about what universities are for. Some think they should train students for jobs, while others think they should focus on knowledge. In this essay I will discuss both sides and give my opinion.

On one hand, many people believe universities should prepare students for work. This is because students pay a lot of money and they want a good job after they finish. If courses teach practical skills like computing or accounting, graduates can find employment more easily. This is good for the economy too.

On the other hand, some people say university should be about learning for its own sake. They think students should study subjects like history or philosophy even if they are not useful for a job. This helps people think better and become more educated.

In my opinion, I think universities should do both. Students need skills for the job market, but they also need to develop their thinking. So the best universities should mix practical courses with academic knowledge, because this prepares students for life and for work.

In conclusion, both views have good points, but I believe a balance is the best solution for students and for society.`,
        why: [
          'Both views are covered and a clear opinion is given, so the essay does the job the question asks.',
          'Paragraphing is logical, but ideas are stated rather than fully developed — each point needs an example or a "so what" to feel convincing.',
          'Vocabulary and grammar are accurate but fairly plain, with some repetition ("good", "think", "knowledge") that caps the range marks.',
          'To climb higher: extend each reason with a concrete example, vary the linking beyond "On one hand / On the other hand", and use more precise academic vocabulary.',
        ],
      },
      {
        band: 8,
        label: 'Strong (≈ Band 8)',
        text: `Universities sit at the centre of a long-running debate: should they equip graduates for employment, or should they pursue knowledge purely for its intellectual value? While both aims have merit, I believe the two are complementary rather than opposed, and the strongest institutions deliberately pursue both.

Those who prioritise employability make a practical case. A degree now represents a substantial financial commitment, and graduates reasonably expect it to improve their prospects. Vocational and technical programmes — in fields such as engineering, medicine or data science — produce the skilled workforce that modern economies depend on, and a clear line from study to career also widens access for students who cannot treat education as a luxury.

The opposing view, however, warns against reducing universities to job-training centres. Disciplines such as philosophy, literature and pure mathematics may have no immediate commercial application, yet they cultivate the critical reasoning, ethical judgement and intellectual curiosity that societies cannot do without. Many of the breakthroughs that later transform industries begin as research with no obvious "use" at all.

In my view, framing these as alternatives is a false choice. The analytical and communicative habits built through academic study are precisely the qualities employers value most, while professional training is hollow without the broader thinking that underpins it. A well-designed degree therefore blends rigorous knowledge with applicable skill, preparing graduates not only for their first job but for a lifetime of adapting to new ones.

In conclusion, although the debate is often posed as knowledge versus employability, the most valuable university experience unites them, serving both the individual and the wider economy.`,
        why: [
          'The position is clear from the introduction and is sustained consistently — the writer argues the two aims are complementary, then proves it.',
          'Each body paragraph develops its idea with reasoning and concrete fields/examples rather than bare assertion, which is what the top task-response bands reward.',
          'Cohesion is natural and varied (no mechanical "Firstly/Secondly"); ideas connect through meaning, not just connector words.',
          'Vocabulary is precise and academic ("complementary", "vocational", "intellectual curiosity") and sentence forms are varied and almost entirely error-free.',
        ],
      },
    ],
  },

  // ── Speaking Part 1 ──────────────────────────────────────────────────────
  {
    id: 'ma-speak-p1',
    skill: 'speaking',
    section: 'Speaking Part 1',
    practiceHref: '/ielts/speaking',
    prompt: 'Do you enjoy cooking? Why or why not?',
    promptNote:
      'Part 1 answers should be a couple of sentences — enough to give a reason and a small detail, without turning into a speech.',
    samples: [
      {
        band: 6.5,
        label: 'Developing (≈ Band 6.5)',
        text: `Yes, I like cooking. I usually cook at the weekend because I have more time. I am not very good at it, but I enjoy making simple dishes like pasta or rice with vegetables. It helps me relax after a busy week.`,
        why: [
          'It answers directly and adds a reason and an example, so the response is relevant and complete enough for the question.',
          'Speech would flow reasonably but the sentences are short and similar in shape, which limits the fluency and range marks.',
          'Vocabulary is correct but everyday ("like", "good", "relax"); a few more natural collocations would help.',
          'To climb higher: link ideas more smoothly, add one vivid detail, and use a more idiomatic phrase or two.',
        ],
      },
      {
        band: 8,
        label: 'Strong (≈ Band 8)',
        text: `I do, actually — it's become a bit of a stress-reliever for me. During the week I rarely have the energy, but at weekends I'll happily spend an hour experimenting with something new, usually whatever I've seen online that week. I'm no chef, but there's something genuinely satisfying about putting a meal together from scratch and having people enjoy it.`,
        why: [
          'The answer sounds spontaneous and unforced, with natural fillers ("actually", "a bit of") that mark genuine fluency rather than a memorised script.',
          'Ideas connect smoothly and the speaker extends the answer without being asked, which the higher fluency bands reward.',
          'Language is varied and idiomatic ("stress-reliever", "from scratch", "I\'m no chef"), showing a wide, flexible vocabulary.',
          'Grammar is accurate across a mix of tenses and structures, with the contractions and rhythm of natural speech.',
        ],
      },
    ],
  },

  // ── Speaking Part 2 (long turn) ──────────────────────────────────────────
  {
    id: 'ma-speak-p2',
    skill: 'speaking',
    section: 'Speaking Part 2',
    practiceHref: '/ielts/speaking',
    prompt:
      'Describe a skill you would like to learn. You should say: what the skill is; how you would learn it; how long you think it would take; and explain why you would like to learn this skill.',
    promptNote:
      'You have one minute to prepare and should speak for one to two minutes. The two samples below are written as continuous monologues.',
    samples: [
      {
        band: 6.5,
        label: 'Developing (≈ Band 6.5)',
        text: `I would like to talk about a skill I want to learn, which is playing the guitar. I have always liked music and I think the guitar is a very nice instrument. So I would really like to learn how to play it.

To learn it, I think I would take lessons. Maybe I would find a teacher near my home, or I could watch videos on the internet because there are many free tutorials. I would also need to practise every day, even if it is only for a short time.

I think it would take quite a long time, maybe one or two years to play well. At the beginning it is difficult because your fingers hurt, but after some months it becomes easier.

The reason I want to learn the guitar is that it would help me relax. Also, I could play songs with my friends at parties, which would be fun. So that is the skill I would like to learn.`,
        why: [
          'All four bullet points are covered and the talk fills the time, so the task is fully addressed.',
          'It is organised in clear stages, but the connectors are simple and repeated ("So / Also / The reason"), keeping the organisation at a middle level.',
          'Vocabulary is accurate but plain, and most sentences follow a similar pattern, which limits the range marks.',
          'To climb higher: add a specific detail or short story, vary sentence openings, and use more precise or idiomatic vocabulary.',
        ],
      },
      {
        band: 8,
        label: 'Strong (≈ Band 8)',
        text: `The skill I'd most love to pick up is playing the guitar — it's something I've meant to do for years and never quite got round to.

As for how I'd learn it, I'd probably take a hybrid approach. I'd start with a few lessons from a proper teacher just to get the basics right — things like posture and chord shapes that are easy to get wrong on your own — and then lean on online tutorials to keep practising between sessions. The key, I imagine, would be short, daily practice rather than long, occasional bursts.

Realistically, I think getting to a point where I could play a song confidently might take a year or so, and genuine fluency probably a good deal longer. The first few weeks are notoriously frustrating, apparently, because your fingertips are sore and nothing sounds quite right — but I'm told it clicks fairly suddenly once the muscle memory kicks in.

The main reason I'm drawn to it is that I find music incredibly grounding, and there's a real difference between listening to a song and actually being able to create one. On top of that, I love the idea of being the person who can pick up a guitar at a gathering and get everyone singing along — it's a lovely, sociable skill to have.`,
        why: [
          'The long turn is delivered fluently and at length, covering every prompt while sounding like a real, unscripted explanation.',
          'Cohesion is sophisticated and natural ("As for how", "On top of that", "once the muscle memory kicks in"), well beyond mechanical linking.',
          'The language is rich and idiomatic ("never quite got round to", "a hybrid approach", "notoriously frustrating", "grounding"), showing a wide range used precisely.',
          'A variety of complex structures appears with very few errors, and the speaker shows nuance (distinguishing "play a song confidently" from "genuine fluency").',
        ],
      },
    ],
  },

  // ── Speaking Part 3 (discussion) ─────────────────────────────────────────
  {
    id: 'ma-speak-p3',
    skill: 'speaking',
    section: 'Speaking Part 3',
    practiceHref: '/ielts/speaking',
    prompt:
      'Do you think it is better to learn a new skill when you are young, or can people learn just as well as adults?',
    promptNote:
      'Part 3 expects a fuller, more analytical answer — give a view, explain it, and consider more than one side.',
    samples: [
      {
        band: 6.5,
        label: 'Developing (≈ Band 6.5)',
        text: `I think it is usually easier to learn when you are young. Children have more free time and their brains are very flexible, so they can learn things like languages or music quickly. For example, kids who grow up speaking two languages can speak both perfectly.

However, adults can also learn well. They are more motivated and they understand why they are learning, so they can focus better. The problem is that adults are often busy with work and family, so they have less time to practise.

So overall, I think both can learn, but it depends on the person and how much time they have.`,
        why: [
          'It gives a clear view and looks at both sides, which is what a Part 3 answer needs.',
          'There is a relevant example, but the ideas stay fairly general and could be pushed further.',
          'Linking ("However / So overall") works but is simple, and the vocabulary, while accurate, is not very precise.',
          'To climb higher: develop each point with a clearer reason, hedge opinions more naturally, and use more academic vocabulary.',
        ],
      },
      {
        band: 8,
        label: 'Strong (≈ Band 8)',
        text: `That's an interesting one. My instinct is that the answer really depends on the type of skill in question. For things like pronunciation in a foreign language, there does seem to be a genuine advantage to starting young — children seem to absorb sounds almost effortlessly, whereas adults often carry an accent no matter how hard they try.

That said, I'd be wary of overstating it. Adults bring things to learning that children simply don't have — discipline, a clear sense of purpose, and the ability to draw on existing knowledge. An adult learning to code, for instance, can lean on years of logical reasoning and problem-solving, which can make them far more efficient than a child.

So on balance, I'd say the idea that the young always have the edge is a bit of a myth. The real factors are probably motivation and consistent practice, and those aren't tied to age at all — if anything, an adult who genuinely wants to learn may well outpace a child who's only doing it because they've been told to.`,
        why: [
          'The answer is analytical and nuanced — it qualifies the question ("depends on the type of skill") instead of giving a flat yes or no.',
          'Points are fully developed with reasoning and examples, and opinions are hedged naturally ("My instinct is", "I\'d be wary of overstating it").',
          'Cohesion is seamless and discursive ("That said", "So on balance", "if anything"), typical of a high-level speaker.',
          'Vocabulary is precise and varied and the grammar handles complex, abstract ideas with ease and accuracy.',
        ],
      },
    ],
  },
]

export function modelAnswersForSkill(skill: ModelAnswerSkill): ModelAnswerItem[] {
  return MODEL_ANSWERS.filter((m) => m.skill === skill)
}

/** Total count — used for headline copy ("10 model answers across 5 sections"). */
export const MODEL_ANSWER_SAMPLE_COUNT = MODEL_ANSWERS.reduce((n, m) => n + m.samples.length, 0)
