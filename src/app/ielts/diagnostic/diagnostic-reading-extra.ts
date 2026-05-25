// ─── IELTS placement diagnostic — extra Reading passages ───────────────────
// Three ADDITIONAL original Academic-track Reading passages that extend the
// placement diagnostic so it can produce a genuinely discriminating baseline
// band. The lead aggregates `DIAGNOSTIC_READING_EXTRA` alongside the existing
// single passage in diagnostic-items.ts — this file owns only the extra content
// and edits nothing else.
//
// The three passages are deliberately GRADED by difficulty so the set spreads
// candidates across the band range:
//   • Passage 1 — EASIER  : accessible topic, plainer language (≈ Band 4–6).
//   • Passage 2 — MEDIUM  : academic register (≈ Band 5.5–7).
//   • Passage 3 — HARDER  : denser, more abstract argument (Band 7+ discrimination).
//
// Every passage body is 100% original, written for this test only, with no
// official IELTS affiliation. Question shapes come from @/lib/ielts/types:
//   - tfng : answer is 'true' | 'false' | 'not-given' (statement vs. the text)
//   - mcq  : `options` with a 0-based `correctIndex`
//   - gap  : `acceptableAnswers` matched case-insensitively and trimmed; the
//            prompt always states the word/number limit
// Each question carries an `explanation` justified directly from the passage,
// and every answer is unambiguously verifiable from the text. The 'not-given'
// items are genuine: the statement is neither confirmed nor contradicted.
//
// IDs use the `diag-r2-*` namespace to avoid colliding with the existing
// `diag-r-*` ids in diagnostic-items.ts.
// ────────────────────────────────────────────────────────────────────────────

import type { ReadingPassage } from '@/lib/ielts/types'

export const DIAGNOSTIC_READING_EXTRA: ReadingPassage[] = [
  // ─── Passage 1 — EASIER : The return of urban beekeeping ──────────────────
  {
    id: 'diag-r2-p1-bees',
    title: 'Bees in the City',
    body: `Not long ago, the idea of keeping bees in the middle of a busy city would have seemed strange. Beekeeping was something that happened in the countryside, among orchards and open fields. Today, however, hives can be found on the rooftops of hotels, offices and blocks of flats in many of the world's largest cities. This quiet movement is often called urban beekeeping, and it has grown quickly over the past twenty years.

There are several reasons for its popularity. Some people take it up as a relaxing hobby, enjoying the chance to work with nature without leaving home. Others are worried about the falling numbers of bees around the world and want to help. Bees are important because they pollinate plants, carrying pollen from flower to flower so that fruits and seeds can form. Without this work, many of the crops that people eat would be far harder to grow.

City bees can do surprisingly well. Parks, gardens and even window boxes provide a wide variety of flowers, and because these plants bloom at different times, food is available for much of the year. In some studies, city hives have produced more honey than hives in the countryside, where large farms may grow only a single crop. The warmth of the city can also be an advantage, as temperatures in built-up areas are often slightly higher than in the surrounding land.

There are difficulties too. A single hive can contain tens of thousands of bees, and a beekeeper who does not look after them properly may allow disease to spread. Neighbours are sometimes nervous, even though honeybees rarely sting unless they feel threatened. For these reasons, some cities now ask beekeepers to register their hives and to complete a short training course before they begin.

Supporters argue that the benefits are worth the effort. A well-kept hive can teach city dwellers about the natural world, supply local honey, and remind people that even the busiest streets are part of a living environment. Whether or not it makes a real difference to the global bee population, urban beekeeping has clearly captured the public imagination.`,
    questions: [
      {
        id: 'diag-r2-p1-q1',
        type: 'tfng',
        prompt: 'Urban beekeeping has become more common over the last twenty years.',
        answer: 'true',
        explanation:
          'The passage says hives can now be found on city rooftops and that this movement "has grown quickly over the past twenty years".',
      },
      {
        id: 'diag-r2-p1-q2',
        type: 'mcq',
        prompt: 'According to the passage, why are bees important to food production?',
        options: [
          'They produce large amounts of honey for people to eat.',
          'They pollinate plants so that fruits and seeds can form.',
          'They keep harmful insects away from crops.',
          'They warm the soil in built-up areas.',
        ],
        correctIndex: 1,
        explanation:
          'The text explains that bees "pollinate plants, carrying pollen from flower to flower so that fruits and seeds can form", and that without this, crops would be harder to grow.',
      },
      {
        id: 'diag-r2-p1-q3',
        type: 'tfng',
        prompt:
          'In some studies, hives in cities have produced more honey than hives in the countryside.',
        answer: 'true',
        explanation:
          'The passage states directly that "In some studies, city hives have produced more honey than hives in the countryside".',
      },
      {
        id: 'diag-r2-p1-q4',
        type: 'gap',
        prompt:
          'Complete the sentence with ONE word from the passage: Cities are often slightly warmer than the land around them, and this ______ can help city bees.',
        acceptableAnswers: ['warmth'],
        explanation:
          'The text says "The warmth of the city can also be an advantage, as temperatures in built-up areas are often slightly higher".',
      },
      {
        id: 'diag-r2-p1-q5',
        type: 'tfng',
        prompt: 'Honeybees frequently sting people for no reason.',
        answer: 'false',
        explanation:
          'The passage states that "honeybees rarely sting unless they feel threatened", which contradicts the idea that they sting frequently for no reason.',
      },
      {
        id: 'diag-r2-p1-q6',
        type: 'mcq',
        prompt: 'What does the passage say some cities now ask beekeepers to do?',
        options: [
          'Keep their hives outside the city limits.',
          'Limit each hive to a few hundred bees.',
          'Register their hives and complete a short training course.',
          'Sell their honey only to local shops.',
        ],
        correctIndex: 2,
        explanation:
          'The text says some cities "ask beekeepers to register their hives and to complete a short training course before they begin".',
      },
      {
        id: 'diag-r2-p1-q7',
        type: 'gap',
        prompt:
          'Complete the sentence with ONE word from the passage: City flowers bloom at different times, so ______ is available for much of the year.',
        acceptableAnswers: ['food'],
        explanation:
          'The passage says that because city plants "bloom at different times, food is available for much of the year".',
      },
      {
        id: 'diag-r2-p1-q8',
        type: 'tfng',
        prompt: 'Most people who take up urban beekeeping do so to earn money from selling honey.',
        answer: 'not-given',
        explanation:
          'The passage lists relaxation and concern for bees as motives and mentions that hives can supply local honey, but it never says most beekeepers do it to earn money, so this cannot be confirmed.',
      },
      {
        id: 'diag-r2-p1-q9',
        type: 'tfng',
        prompt:
          'The writer claims that urban beekeeping has definitely saved the world’s bee population.',
        answer: 'false',
        explanation:
          'The writer is deliberately cautious, saying "Whether or not it makes a real difference to the global bee population" — so the text does not claim it has definitely saved bees.',
      },
    ],
  },

  // ─── Passage 2 — MEDIUM : The science of sleep ────────────────────────────
  {
    id: 'diag-r2-p2-sleep',
    title: 'Why We Sleep',
    body: `Human beings spend roughly a third of their lives asleep, yet for most of history the purpose of sleep remained a mystery. It was tempting to assume that the sleeping brain simply switched off, resting in much the same way that a tired muscle recovers after exercise. Modern research has overturned this view. Far from shutting down, the brain during sleep is intensely active, carrying out a range of tasks that appear to be essential to learning, memory and health.

Sleep is not a single, uniform state. Over the course of a night, a sleeper moves repeatedly through several distinct stages, which scientists group broadly into two types. The first is non-REM sleep, during which the body's processes slow and the deepest, most restorative rest occurs. The second is REM sleep, named after the rapid eye movements that accompany it. It is during REM sleep that the most vivid dreams take place, and brain activity rises to levels close to those of waking life. A complete cycle through these stages lasts about ninety minutes, and a healthy adult repeats it four or five times each night.

One of the most striking discoveries of recent decades concerns the link between sleep and memory. In a series of experiments, volunteers were taught a new skill, such as a sequence of finger movements on a keyboard, and then tested again after a period of either sleep or wakefulness. Those who had slept consistently performed better, even though they had not practised in the meantime. The findings suggest that the brain uses sleep to strengthen and reorganise what has been learned during the day, transferring fragile new memories into more permanent storage.

The consequences of poor sleep extend well beyond feeling tired. Long-term studies have linked persistent sleep loss to a higher risk of several serious conditions, including heart disease and weakened immunity. Even a single night of disrupted sleep can impair concentration and judgement, which is one reason why tiredness is a recognised factor in road accidents. Nevertheless, the precise amount of sleep a person needs varies, and there is no single figure that suits everyone, despite the popular advice to aim for eight hours.

Why sleep should be so vital remains, in part, an open question. One influential idea is that sleep allows the brain to clear away waste products that build up while we are awake. Whatever the full explanation, the evidence increasingly suggests that sleep is not a luxury to be sacrificed but a biological necessity as fundamental as food or water.`,
    questions: [
      {
        id: 'diag-r2-p2-q1',
        type: 'tfng',
        prompt: 'Scientists once believed that the brain becomes inactive during sleep.',
        answer: 'true',
        explanation:
          'The passage says it was "tempting to assume that the sleeping brain simply switched off", a view that modern research has since overturned.',
      },
      {
        id: 'diag-r2-p2-q2',
        type: 'mcq',
        prompt: 'According to the passage, REM sleep is characterised by',
        options: [
          'the slowing of the body’s processes and the deepest rest.',
          'rapid eye movements and brain activity close to that of waking life.',
          'a complete absence of dreaming.',
          'a cycle that lasts about four or five hours.',
        ],
        correctIndex: 1,
        explanation:
          'The text says REM sleep is "named after the rapid eye movements that accompany it" and that during it "brain activity rises to levels close to those of waking life".',
      },
      {
        id: 'diag-r2-p2-q3',
        type: 'gap',
        prompt:
          'Complete the sentence with ONE number from the passage: A full sleep cycle through the stages lasts about ______ minutes.',
        acceptableAnswers: ['ninety', '90'],
        explanation:
          'The passage states that "A complete cycle through these stages lasts about ninety minutes".',
      },
      {
        id: 'diag-r2-p2-q4',
        type: 'tfng',
        prompt:
          'In the memory experiments, the volunteers who slept had practised the skill again before being tested.',
        answer: 'false',
        explanation:
          'The text explicitly says those who slept performed better "even though they had not practised in the meantime", which contradicts the statement.',
      },
      {
        id: 'diag-r2-p2-q5',
        type: 'mcq',
        prompt: 'What do the memory experiments suggest the brain does during sleep?',
        options: [
          'It forgets information that is no longer useful.',
          'It learns entirely new skills without any earlier practice.',
          'It strengthens and reorganises what was learned during the day.',
          'It slows down to conserve energy for the next day.',
        ],
        correctIndex: 2,
        explanation:
          'The findings "suggest that the brain uses sleep to strengthen and reorganise what has been learned during the day, transferring fragile new memories into more permanent storage".',
      },
      {
        id: 'diag-r2-p2-q6',
        type: 'tfng',
        prompt:
          'A single night of disrupted sleep can affect a person’s concentration and judgement.',
        answer: 'true',
        explanation:
          'The passage states that "Even a single night of disrupted sleep can impair concentration and judgement".',
      },
      {
        id: 'diag-r2-p2-q7',
        type: 'tfng',
        prompt: 'Everyone needs exactly eight hours of sleep each night to stay healthy.',
        answer: 'false',
        explanation:
          'The text says the amount of sleep a person needs "varies, and there is no single figure that suits everyone, despite the popular advice to aim for eight hours".',
      },
      {
        id: 'diag-r2-p2-q8',
        type: 'gap',
        prompt:
          'Complete the sentence with ONE word from the passage: One influential idea is that sleep lets the brain clear away ______ products that build up while we are awake.',
        acceptableAnswers: ['waste'],
        explanation:
          'The passage describes the idea that "sleep allows the brain to clear away waste products that build up while we are awake".',
      },
      {
        id: 'diag-r2-p2-q9',
        type: 'tfng',
        prompt: 'Long-term sleep loss has been linked to a greater risk of heart disease.',
        answer: 'true',
        explanation:
          'The text says long-term studies "have linked persistent sleep loss to a higher risk of several serious conditions, including heart disease".',
      },
      {
        id: 'diag-r2-p2-q10',
        type: 'mcq',
        prompt: 'Which statement best reflects the writer’s overall view of sleep?',
        options: [
          'Sleep is a luxury that busy people can safely give up.',
          'Sleep is a biological necessity as fundamental as food or water.',
          'Sleep matters only because it prevents road accidents.',
          'Sleep is fully understood by modern science.',
        ],
        correctIndex: 1,
        explanation:
          'The final paragraph concludes that sleep "is not a luxury to be sacrificed but a biological necessity as fundamental as food or water".',
      },
      {
        id: 'diag-r2-p2-q11',
        type: 'tfng',
        prompt: 'Dreaming during REM sleep helps people remember their dreams the next morning.',
        answer: 'not-given',
        explanation:
          'The passage links REM sleep to vivid dreams and links sleep generally to memory, but it never states that REM dreaming helps people recall their dreams, so this is not given.',
      },
    ],
  },

  // ─── Passage 3 — HARDER : Why languages disappear ─────────────────────────
  {
    id: 'diag-r2-p3-languages',
    title: 'The Silence of Vanishing Tongues',
    body: `Of the roughly seven thousand languages spoken today, linguists estimate that nearly half may fall silent before the century is out. A language is generally considered endangered when children cease to learn it as their mother tongue, for once an unbroken chain of transmission from one generation to the next is severed, the remaining speakers — however fluent — become the last custodians of a system that will not outlive them. The arithmetic is sobering: a tongue spoken by a few hundred elderly people is, in the most meaningful sense, already in its twilight.

The causes of this attrition are rarely as straightforward as outright suppression, though coercive policies have certainly played their part. More often the process is gradual and, paradoxically, voluntary. Faced with the overwhelming economic and social gravity of a dominant language — one that promises access to schooling, employment and a wider community — parents make the entirely rational decision to raise their children in it instead. Each such choice is individually sensible; collectively, they can doom a language within a few generations. The shift is lubricated by the simple fact that bilingualism, the natural waystation between one language and another, tends not to be stable. The minority tongue is reserved for an ever-narrowing range of domestic settings until it is no longer passed on at all.

It is tempting to regard this as merely sentimental loss, the linguistic equivalent of an old building falling into disrepair. Some commentators argue, not without force, that a reduction in the number of languages eases communication and that nostalgia should not stand in the way of practical advantage. Yet this position underestimates what a language is. Every language encodes a distinct way of carving up experience: its vocabulary may distinguish concepts that another language blurs, and its grammar may oblige speakers to attend to features of the world — the source of a piece of information, say, or the precise spatial relation between objects — that speakers of other languages can comfortably ignore. When a language dies, that particular lens is lost, and with it an irreplaceable record of how one human community made sense of its surroundings.

Efforts to reverse such decline have met with uneven success. The revival of Hebrew as an everyday spoken language is frequently cited as proof that a dormant tongue can be restored to vigour, but it was an exceptional case, sustained by powerful religious and political currents that few endangered languages can call upon. More typically, revitalisation programmes must content themselves with documentation — recording the speech of the last fluent generation so that scholars, and perhaps future descendants, retain some access to it. Whether such an archive constitutes a living language or merely its embalmed remains is a question that divides even those who undertake the work.

What is seldom disputed is that the losses are accelerating, and that they fall disproportionately on the smallest and most marginal communities. The disappearance of a language attracts none of the public alarm that greets the extinction of a species, perhaps because its consequences are harder to photograph. But the underlying logic is similar: once gone, neither can be reconstructed from first principles. In this respect the world's linguistic diversity, like its biological diversity, may prove to be a resource we appreciate fully only in its absence.`,
    questions: [
      {
        id: 'diag-r2-p3-q1',
        type: 'tfng',
        prompt:
          'Linguists believe that close to half of today’s languages could disappear within this century.',
        answer: 'true',
        explanation:
          'The opening sentence states that of about seven thousand languages, "nearly half may fall silent before the century is out".',
      },
      {
        id: 'diag-r2-p3-q2',
        type: 'mcq',
        prompt: 'According to the passage, a language is generally considered endangered when',
        options: [
          'it is spoken by fewer than seven thousand people.',
          'children stop learning it as their first language.',
          'a government introduces policies to suppress it.',
          'its speakers become bilingual.',
        ],
        correctIndex: 1,
        explanation:
          'The text says a language is "generally considered endangered when children cease to learn it as their mother tongue", breaking the chain of transmission between generations.',
      },
      {
        id: 'diag-r2-p3-q3',
        type: 'tfng',
        prompt:
          'The writer suggests that language loss is usually caused by deliberate government suppression.',
        answer: 'false',
        explanation:
          'The writer says the causes are "rarely as straightforward as outright suppression" and that the process is "more often" gradual and voluntary, contradicting the statement.',
      },
      {
        id: 'diag-r2-p3-q4',
        type: 'mcq',
        prompt:
          'Why does the writer describe the parents’ decision to raise children in a dominant language as a paradox?',
        options: [
          'Because the dominant language is harder for children to learn.',
          'Because each individual choice is sensible, yet together such choices can destroy a language.',
          'Because parents are usually forced to make the choice against their will.',
          'Because bilingual children rarely succeed at school.',
        ],
        correctIndex: 1,
        explanation:
          'The passage states that "Each such choice is individually sensible; collectively, they can doom a language", which is the paradox referred to.',
      },
      {
        id: 'diag-r2-p3-q5',
        type: 'gap',
        prompt:
          'Complete the sentence with ONE word from the passage: The writer notes that ______, the natural waystation between two languages, tends not to be stable.',
        acceptableAnswers: ['bilingualism'],
        explanation:
          'The text says "bilingualism, the natural waystation between one language and another, tends not to be stable".',
      },
      {
        id: 'diag-r2-p3-q6',
        type: 'tfng',
        prompt:
          'The writer fully agrees with commentators who say that having fewer languages is mainly an advantage.',
        answer: 'false',
        explanation:
          'Although the writer presents that view, the passage then says it "underestimates what a language is", showing the writer does not fully agree.',
      },
      {
        id: 'diag-r2-p3-q7',
        type: 'mcq',
        prompt: 'What does the writer say is lost when a language dies?',
        options: [
          'A complete written record of a community’s history.',
          'A distinct way of perceiving and describing experience.',
          'The ability of its speakers to learn other languages.',
          'A source of economic advantage for its community.',
        ],
        correctIndex: 1,
        explanation:
          'The text explains that each language "encodes a distinct way of carving up experience" and that when it dies, "that particular lens is lost".',
      },
      {
        id: 'diag-r2-p3-q8',
        type: 'tfng',
        prompt:
          'The revival of Hebrew is presented as a typical example of how endangered languages can be saved.',
        answer: 'false',
        explanation:
          'The passage calls the Hebrew revival "an exceptional case" sustained by unusual forces "that few endangered languages can call upon", so it is the opposite of typical.',
      },
      {
        id: 'diag-r2-p3-q9',
        type: 'mcq',
        prompt: 'What does the writer suggest about most language revitalisation programmes?',
        options: [
          'They successfully restore languages to everyday use.',
          'They usually have to settle for documenting the last fluent speakers.',
          'They are funded mainly by religious and political organisations.',
          'They focus on teaching the language to young children.',
        ],
        correctIndex: 1,
        explanation:
          'The text says that "More typically, revitalisation programmes must content themselves with documentation — recording the speech of the last fluent generation".',
      },
      {
        id: 'diag-r2-p3-q10',
        type: 'gap',
        prompt:
          'Complete the comparison with ONE word from the passage: The writer compares the loss of linguistic diversity to the loss of ______ diversity, since neither can be rebuilt once gone.',
        acceptableAnswers: ['biological'],
        explanation:
          'The final paragraph compares "the world’s linguistic diversity, like its biological diversity", noting that once gone neither can be reconstructed.',
      },
      {
        id: 'diag-r2-p3-q11',
        type: 'tfng',
        prompt:
          'The writer claims that the public reacts more strongly to a language dying than to a species becoming extinct.',
        answer: 'false',
        explanation:
          'The passage says the disappearance of a language "attracts none of the public alarm that greets the extinction of a species" — the reverse of the statement.',
      },
      {
        id: 'diag-r2-p3-q12',
        type: 'tfng',
        prompt:
          'Governments around the world are now increasing their funding for language documentation.',
        answer: 'not-given',
        explanation:
          'The passage discusses documentation efforts but says nothing about whether governments are increasing funding for them, so this claim cannot be verified from the text.',
      },
    ],
  },
]
