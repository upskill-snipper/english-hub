// ─── EAL CEFR Diagnostic Question Bank ────────────────────────────────────────
// Calibrated multiple-choice items spanning A2..C1 across the five EAL
// skill strands, weighted toward the grammar/sentence patterns Arabic L1
// learners most often need to retrain (articles, perfect tenses, word
// order, transfer errors). Each item is tagged with the CEFR level it
// discriminates at and the skill it probes; the scoring engine
// (src/lib/eal/cefr.ts) uses both for placement and routing.
//
// Answer options for grammatical-form questions are intentionally
// English-only (loc() falls back to EN) - you don't translate the
// answer token. Question, prompt and explanation are fully bilingual
// (Khaleeji AR), matching the rest of the EAL curriculum.
//
// Cambridge English Qualifications anchor the level calibration:
// A2 Key, B1 Preliminary, B2 First, C1 Advanced (for Schools).
// https://www.cambridgeenglish.org/exams-and-tests/qualifications/
// ──────────────────────────────────────────────────────────────────────────────

import type { DiagnosticQuestion } from './cefr'

export const DIAGNOSTIC_BANK: DiagnosticQuestion[] = [
  // ─── A2 ─────────────────────────────────────────────────────────────
  {
    id: 'g-a2-01',
    level: 'A2',
    skill: 'grammar',
    question: { en: 'Choose the correct article.', ar: 'اختر الأداة الصحيحة.' },
    prompt: { en: 'She is ___ honest person.', ar: 'She is ___ honest person.' },
    options: [{ en: 'a' }, { en: 'an' }, { en: 'the' }, { en: '(no word)' }],
    correctIndex: 1,
    explanation: {
      en: '"Honest" starts with a silent H - the first sound is a vowel /ɒ/, so we use "an".',
      ar: 'كلمة "honest" تبدأ بحرف H صامت - أول صوت متحرّك، فنستخدم "an".',
    },
  },
  {
    id: 'g-a2-02',
    level: 'A2',
    skill: 'grammar',
    question: { en: 'Choose the correct verb form.', ar: 'اختر صيغة الفعل الصحيحة.' },
    prompt: { en: 'They ___ from Qatar.', ar: 'They ___ from Qatar.' },
    options: [{ en: 'am' }, { en: 'is' }, { en: 'are' }, { en: 'be' }],
    correctIndex: 2,
    explanation: {
      en: 'The subject "they" is plural, so the verb "to be" is "are".',
      ar: 'الفاعل "they" جمع، فيكون فعل الكينونة "are".',
    },
  },
  {
    id: 'g-a2-03',
    level: 'A2',
    skill: 'grammar',
    question: { en: 'Choose the correct plural.', ar: 'اختر صيغة الجمع الصحيحة.' },
    prompt: { en: 'I have three ___.', ar: 'I have three ___.' },
    options: [{ en: 'child' }, { en: 'childs' }, { en: 'children' }, { en: 'childrens' }],
    correctIndex: 2,
    explanation: {
      en: '"Child" has an irregular plural: "children" (never "childs" or "childrens").',
      ar: 'كلمة "child" جمعها شاذ: "children" (مو "childs" ولا "childrens").',
    },
  },
  {
    id: 'g-a2-04',
    level: 'A2',
    skill: 'grammar',
    question: {
      en: 'Choose the correct present-simple form.',
      ar: 'اختر صيغة المضارع البسيط الصحيحة.',
    },
    prompt: { en: 'He ___ football every Friday.', ar: 'He ___ football every Friday.' },
    options: [{ en: 'play' }, { en: 'plays' }, { en: 'playing' }, { en: 'played' }],
    correctIndex: 1,
    explanation: {
      en: 'Third-person singular (he/she/it) takes -s in the present simple: "plays".',
      ar: 'المفرد الغائب (he/she/it) يأخذ -s في المضارع البسيط: "plays".',
    },
  },
  {
    id: 's-a2-01',
    level: 'A2',
    skill: 'sentence',
    question: { en: 'Choose the correctly ordered sentence.', ar: 'اختر الجملة بالترتيب الصحيح.' },
    prompt: {
      en: 'Words: I / every day / drink / coffee',
      ar: 'الكلمات: I / every day / drink / coffee',
    },
    options: [
      { en: 'I drink coffee every day.' },
      { en: 'Every day drink I coffee.' },
      { en: 'I every day drink coffee.' },
      { en: 'Drink I coffee every day.' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'English is Subject-Verb-Object: "I (S) drink (V) coffee (O)", with the time phrase at the end.',
      ar: 'الإنجليزي ترتيبه فاعل-فعل-مفعول: "I drink coffee"، وعبارة الزمن في الآخر.',
    },
  },
  {
    id: 'v-a2-01',
    level: 'A2',
    skill: 'vocabulary',
    question: { en: 'Choose the opposite of "expensive".', ar: 'اختر عكس كلمة "expensive".' },
    prompt: { en: 'expensive ↔ ___', ar: 'expensive ↔ ___' },
    options: [{ en: 'cheap' }, { en: 'big' }, { en: 'fast' }, { en: 'heavy' }],
    correctIndex: 0,
    explanation: {
      en: 'The opposite of "expensive" (high price) is "cheap" (low price).',
      ar: 'عكس "expensive" (غالي) هو "cheap" (رخيص).',
    },
  },
  {
    id: 'p-a2-01',
    level: 'A2',
    skill: 'pronunciation',
    question: {
      en: 'Which word begins with a /p/ sound (not /b/)?',
      ar: 'أي كلمة تبدأ بصوت /p/ (مو /b/)؟',
    },
    prompt: {
      en: 'P vs B is not contrastive in Arabic - listen carefully.',
      ar: 'صوت P و B ما يتفرّقون في العربي - انتبه.',
    },
    options: [{ en: 'park' }, { en: 'bark' }, { en: 'bin' }, { en: 'boat' }],
    correctIndex: 0,
    explanation: {
      en: '"Park" starts with /p/ (no voice). "Bark", "bin", "boat" start with /b/ (voiced).',
      ar: '"Park" تبدأ بصوت /p/ (بدون اهتزاز). أما "bark/bin/boat" فتبدأ بـ /b/.',
    },
  },
  {
    id: 'c-a2-01',
    level: 'A2',
    skill: 'common_errors',
    question: { en: 'Choose the correct English.', ar: 'اختر الإنجليزية الصحيحة.' },
    prompt: { en: 'Talking about age:', ar: 'الكلام عن العمر:' },
    options: [
      { en: 'I have 15 years old.' },
      { en: 'I am 15 years old.' },
      { en: 'I have 15 years.' },
      { en: 'My age have 15.' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Arabic uses "have" for age (عندي ١٥ سنة) - English uses "be": "I am 15 years old".',
      ar: 'العربي يقول "عندي ١٥ سنة" بفعل الملكية - الإنجليزي يستخدم "be": "I am 15 years old".',
    },
  },

  // ─── B1 ─────────────────────────────────────────────────────────────
  {
    id: 'g-b1-01',
    level: 'B1',
    skill: 'grammar',
    question: { en: 'Choose the correct tense.', ar: 'اختر الزمن الصحيح.' },
    prompt: { en: 'I ___ here since 2019.', ar: 'I ___ here since 2019.' },
    options: [{ en: 'am' }, { en: 'was' }, { en: 'have been' }, { en: 'will be' }],
    correctIndex: 2,
    explanation: {
      en: '"Since 2019" + an action continuing to now needs the present perfect: "have been".',
      ar: '"Since 2019" مع فعل مستمر للحين يحتاج المضارع التام: "have been".',
    },
  },
  {
    id: 'g-b1-02',
    level: 'B1',
    skill: 'grammar',
    question: { en: 'Choose the correct past form.', ar: 'اختر صيغة الماضي الصحيحة.' },
    prompt: { en: 'She ___ to London last year.', ar: 'She ___ to London last year.' },
    options: [{ en: 'go' }, { en: 'goed' }, { en: 'went' }, { en: 'gone' }],
    correctIndex: 2,
    explanation: {
      en: '"Go" is irregular: past simple is "went" (not "goed"; "gone" is the past participle).',
      ar: '"Go" فعل شاذ: ماضيه البسيط "went" (مو "goed"؛ و"gone" اسم المفعول).',
    },
  },
  {
    id: 'g-b1-03',
    level: 'B1',
    skill: 'grammar',
    question: { en: 'Choose the correct preposition.', ar: 'اختر حرف الجر الصحيح.' },
    prompt: {
      en: 'We arrived ___ the airport at noon.',
      ar: 'We arrived ___ the airport at noon.',
    },
    options: [{ en: 'to' }, { en: 'in' }, { en: 'at' }, { en: 'on' }],
    correctIndex: 2,
    explanation: {
      en: '"Arrive at" a place/point (airport, station). "Arrive in" a city/country. Never "arrive to".',
      ar: 'نقول "arrive at" لمكان محدّد، و"arrive in" لمدينة أو دولة. أبداً "arrive to".',
    },
  },
  {
    id: 'g-b1-04',
    level: 'B1',
    skill: 'grammar',
    question: { en: 'Choose the correct comparative.', ar: 'اختر صيغة المقارنة الصحيحة.' },
    prompt: { en: 'This book is ___ than that one.', ar: 'This book is ___ than that one.' },
    options: [
      { en: 'interestinger' },
      { en: 'more interesting' },
      { en: 'most interesting' },
      { en: 'the interesting' },
    ],
    correctIndex: 1,
    explanation: {
      en: 'Long adjectives form the comparative with "more": "more interesting than".',
      ar: 'الصفات الطويلة تكوّن المقارنة بـ "more": "more interesting than".',
    },
  },
  {
    id: 's-b1-01',
    level: 'B1',
    skill: 'sentence',
    question: { en: 'Choose the correct linking word.', ar: 'اختر أداة الربط الصحيحة.' },
    prompt: {
      en: '___ it was raining, we went to the beach.',
      ar: '___ it was raining, we went to the beach.',
    },
    options: [{ en: 'Although' }, { en: 'Because' }, { en: 'So' }, { en: 'Despite' }],
    correctIndex: 0,
    explanation: {
      en: 'Two contrasting clauses → "Although" + clause. "Despite" needs a noun, not a clause.',
      ar: 'جملتان متضادتان → "Although" + جملة. أما "Despite" فيتبعها اسم مو جملة.',
    },
  },
  {
    id: 'v-b1-01',
    level: 'B1',
    skill: 'vocabulary',
    question: { en: 'Choose the correct collocation.', ar: 'اختر التلازم اللفظي الصحيح.' },
    prompt: { en: 'We need to ___ a decision today.', ar: 'We need to ___ a decision today.' },
    options: [{ en: 'do' }, { en: 'make' }, { en: 'take' }, { en: 'have' }],
    correctIndex: 1,
    explanation: {
      en: 'Fixed collocation: "make a decision" (not "do a decision").',
      ar: 'تلازم ثابت: "make a decision" (مو "do a decision").',
    },
  },
  {
    id: 'p-b1-01',
    level: 'B1',
    skill: 'pronunciation',
    question: { en: 'Which letter is silent in "knife"?', ar: 'أي حرف صامت في كلمة "knife"؟' },
    prompt: { en: 'knife', ar: 'knife' },
    options: [{ en: 'k' }, { en: 'n' }, { en: 'i' }, { en: 'f' }],
    correctIndex: 0,
    explanation: {
      en: 'The "k" in the cluster "kn-" is silent: "knife" is said /naɪf/.',
      ar: 'حرف "k" في "kn-" صامت: تُنطق "knife" مثل /naɪf/.',
    },
  },
  {
    id: 'c-b1-01',
    level: 'B1',
    skill: 'common_errors',
    question: { en: 'Choose the correct sentence.', ar: 'اختر الجملة الصحيحة.' },
    prompt: { en: 'In a seminar:', ar: 'في ندوة:' },
    options: [
      { en: 'We discussed about the topic.' },
      { en: 'We discussed the topic.' },
      { en: 'We discussed on the topic.' },
      { en: 'We discussed for the topic.' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"Discuss" is transitive - no preposition: "discuss the topic" (not "discuss about").',
      ar: '"Discuss" فعل متعدٍّ بدون حرف جر: "discuss the topic" (مو "discuss about").',
    },
  },
  {
    id: 'g-b1-05',
    level: 'B1',
    skill: 'grammar',
    question: { en: 'Choose the correct form.', ar: 'اختر الصيغة الصحيحة.' },
    prompt: { en: 'She gave me ___ on the essay.', ar: 'She gave me ___ on the essay.' },
    options: [{ en: 'an advice' }, { en: 'some advice' }, { en: 'a advice' }, { en: 'advices' }],
    correctIndex: 1,
    explanation: {
      en: '"Advice" is uncountable: no "a/an", no plural. Use "some advice".',
      ar: '"Advice" اسم غير معدود: بدون "a/an" وبدون جمع. نقول "some advice".',
    },
  },

  // ─── B2 ─────────────────────────────────────────────────────────────
  {
    id: 'v-b2-01',
    level: 'B2',
    skill: 'vocabulary',
    question: { en: 'Choose the correct phrasal verb.', ar: 'اختر الفعل المركّب الصحيح.' },
    prompt: {
      en: 'The match was ___ because of the storm.',
      ar: 'The match was ___ because of the storm.',
    },
    options: [{ en: 'called off' }, { en: 'called on' }, { en: 'called in' }, { en: 'called up' }],
    correctIndex: 0,
    explanation: {
      en: '"Call off" = cancel. The match was cancelled, so "called off".',
      ar: '"Call off" تعني "يلغي". المباراة أُلغيت، فالصح "called off".',
    },
  },
  {
    id: 'g-b2-01',
    level: 'B2',
    skill: 'grammar',
    question: { en: 'Choose the correct conditional form.', ar: 'اختر صيغة الشرط الصحيحة.' },
    prompt: { en: 'If I ___ you, I would apologise.', ar: 'If I ___ you, I would apologise.' },
    options: [{ en: 'am' }, { en: 'was' }, { en: 'were' }, { en: 'will be' }],
    correctIndex: 2,
    explanation: {
      en: 'Second conditional (unreal present) uses "were" for all subjects: "If I were you".',
      ar: 'الشرط الثاني (غير واقعي) يستخدم "were" لكل الفاعلين: "If I were you".',
    },
  },
  {
    id: 'g-b2-02',
    level: 'B2',
    skill: 'grammar',
    question: { en: 'Choose the correct passive form.', ar: 'اختر صيغة المبني للمجهول الصحيحة.' },
    prompt: { en: 'The letter ___ yesterday.', ar: 'The letter ___ yesterday.' },
    options: [{ en: 'sent' }, { en: 'was sent' }, { en: 'is sent' }, { en: 'has sent' }],
    correctIndex: 1,
    explanation: {
      en: 'Past passive = was/were + past participle: "was sent" (the letter received the action).',
      ar: 'المبني للمجهول الماضي = was/were + اسم مفعول: "was sent".',
    },
  },
  {
    id: 's-b2-01',
    level: 'B2',
    skill: 'sentence',
    question: { en: 'Choose the correct relative pronoun.', ar: 'اختر اسم الموصول الصحيح.' },
    prompt: {
      en: 'The man ___ car was stolen called the police.',
      ar: 'The man ___ car was stolen called the police.',
    },
    options: [{ en: 'who' }, { en: 'which' }, { en: 'whose' }, { en: 'whom' }],
    correctIndex: 2,
    explanation: {
      en: '"Whose" shows possession (the man’s car). "Who" is a subject, "whom" an object.',
      ar: '"Whose" تدل على الملكية (سيارة الرجل). "Who" فاعل و"whom" مفعول.',
    },
  },
  {
    id: 'v-b2-02',
    level: 'B2',
    skill: 'vocabulary',
    question: { en: 'What does "sensible" mean?', ar: 'وش معنى "sensible"؟' },
    prompt: { en: 'She made a sensible decision.', ar: 'She made a sensible decision.' },
    options: [
      { en: 'practical and reasonable', ar: 'عملي ومنطقي' },
      { en: 'easily upset', ar: 'سريع الانفعال' },
      { en: 'very expensive', ar: 'غالي جداً' },
      { en: 'physically sensitive', ar: 'حسّاس جسدياً' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'False friend: "sensible" = practical/reasonable. "Sensitive" = easily affected emotionally.',
      ar: 'صديق كاذب: "sensible" تعني عملي/منطقي. أما "sensitive" فتعني حسّاس عاطفياً.',
    },
  },
  {
    id: 'g-b2-03',
    level: 'B2',
    skill: 'grammar',
    question: { en: 'Choose the correct reported speech.', ar: 'اختر الكلام المنقول الصحيح.' },
    prompt: { en: 'She said she ___ tired.', ar: 'She said she ___ tired.' },
    options: [{ en: 'is' }, { en: 'was' }, { en: 'will be' }, { en: 'be' }],
    correctIndex: 1,
    explanation: {
      en: 'Backshift in reported speech: present "is" → past "was" after "said".',
      ar: 'في الكلام المنقول نرجع الزمن خطوة: "is" تصير "was" بعد "said".',
    },
  },
  {
    id: 'v-b2-03',
    level: 'B2',
    skill: 'vocabulary',
    question: { en: 'Choose the natural collocation.', ar: 'اختر التلازم الطبيعي.' },
    prompt: { en: 'There was ___ all night.', ar: 'There was ___ all night.' },
    options: [
      { en: 'heavy rain' },
      { en: 'strong rain' },
      { en: 'big rain' },
      { en: 'thick rain' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'Native collocation is "heavy rain" (and "strong wind"), not "strong/big rain".',
      ar: 'التلازم الأصيل "heavy rain" (و"strong wind")، مو "strong/big rain".',
    },
  },
  {
    id: 'c-b2-01',
    level: 'B2',
    skill: 'common_errors',
    question: { en: 'Choose the correct sentence.', ar: 'اختر الجملة الصحيحة.' },
    prompt: { en: 'Reporting a recommendation:', ar: 'نقل توصية:' },
    options: [
      { en: 'He suggested me to go.' },
      { en: 'He suggested that I go.' },
      { en: 'He suggested to go me.' },
      { en: 'He suggested me going.' },
    ],
    correctIndex: 1,
    explanation: {
      en: '"Suggest" does not take "object + to-infinitive". Use "suggest that I go" or "suggest going".',
      ar: '"Suggest" ما تأخذ "مفعول + to". نقول "suggest that I go" أو "suggest going".',
    },
  },

  // ─── C1 ─────────────────────────────────────────────────────────────
  {
    id: 'g-c1-01',
    level: 'C1',
    skill: 'grammar',
    question: { en: 'Choose the correct inversion.', ar: 'اختر صيغة القلب الصحيحة.' },
    prompt: {
      en: 'Not only ___ late, but he also forgot the report.',
      ar: 'Not only ___ late, but he also forgot the report.',
    },
    options: [{ en: 'he was' }, { en: 'was he' }, { en: 'he is' }, { en: 'is he' }],
    correctIndex: 1,
    explanation: {
      en: 'A negative adverbial at the front ("Not only") triggers subject-auxiliary inversion: "was he".',
      ar: 'الظرف المنفي في البداية ("Not only") يقلب الفاعل والمساعد: "was he".',
    },
  },
  {
    id: 'v-c1-01',
    level: 'C1',
    skill: 'vocabulary',
    question: {
      en: 'Choose the closest meaning of "ubiquitous".',
      ar: 'اختر أقرب معنى لـ "ubiquitous".',
    },
    prompt: { en: 'Smartphones are now ubiquitous.', ar: 'Smartphones are now ubiquitous.' },
    options: [
      { en: 'found everywhere', ar: 'موجود في كل مكان' },
      { en: 'very expensive', ar: 'غالي جداً' },
      { en: 'rarely seen', ar: 'نادر' },
      { en: 'recently invented', ar: 'مخترع حديثاً' },
    ],
    correctIndex: 0,
    explanation: {
      en: '"Ubiquitous" = present everywhere at once (omnipresent).',
      ar: '"Ubiquitous" تعني موجود في كل مكان في آن واحد.',
    },
  },
  {
    id: 'g-c1-02',
    level: 'C1',
    skill: 'grammar',
    question: { en: 'Choose the correct mixed conditional.', ar: 'اختر الشرط المختلط الصحيح.' },
    prompt: {
      en: 'If she had studied medicine, she ___ a doctor now.',
      ar: 'If she had studied medicine, she ___ a doctor now.',
    },
    options: [{ en: 'would be' }, { en: 'would have been' }, { en: 'will be' }, { en: 'is' }],
    correctIndex: 0,
    explanation: {
      en: 'Mixed conditional: past condition → present result uses "would + base": "would be ... now".',
      ar: 'شرط مختلط: شرط ماضٍ ونتيجة حاضرة → "would + مصدر": "would be ... now".',
    },
  },
  {
    id: 's-c1-01',
    level: 'C1',
    skill: 'sentence',
    question: {
      en: 'Choose the word to complete the cleft sentence.',
      ar: 'اختر الكلمة لإكمال الجملة المشقوقة.',
    },
    prompt: {
      en: 'It was in 2010 ___ the company was founded.',
      ar: 'It was in 2010 ___ the company was founded.',
    },
    options: [{ en: 'that' }, { en: 'when' }, { en: 'which' }, { en: 'where' }],
    correctIndex: 0,
    explanation: {
      en: 'In an "It was … that …" cleft, the connector is "that", even for time phrases.',
      ar: 'في التركيب "It was … that …" تكون أداة الربط "that"، حتى مع عبارات الزمن.',
    },
  },
  {
    id: 'v-c1-02',
    level: 'C1',
    skill: 'vocabulary',
    question: { en: 'What does "bite the bullet" mean?', ar: 'وش معنى تعبير "bite the bullet"؟' },
    prompt: {
      en: 'He decided to bite the bullet and tell the truth.',
      ar: 'He decided to bite the bullet and tell the truth.',
    },
    options: [
      { en: 'face something difficult bravely', ar: 'يواجه أمراً صعباً بشجاعة' },
      { en: 'eat very quickly', ar: 'يأكل بسرعة' },
      { en: 'make a serious mistake', ar: 'يرتكب خطأً جسيماً' },
      { en: 'stay completely silent', ar: 'يلتزم الصمت التام' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'Idiom: "bite the bullet" = force yourself to do something unpleasant or difficult.',
      ar: 'تعبير اصطلاحي: "bite the bullet" تعني تجبر نفسك على فعل شيء صعب أو مزعج.',
    },
  },
  {
    id: 'g-c1-03',
    level: 'C1',
    skill: 'grammar',
    question: {
      en: 'Choose the correct subjunctive form.',
      ar: 'اختر صيغة الـ subjunctive الصحيحة.',
    },
    prompt: {
      en: 'The board recommended that he ___ the offer.',
      ar: 'The board recommended that he ___ the offer.',
    },
    options: [{ en: 'accepts' }, { en: 'accept' }, { en: 'accepted' }, { en: 'accepting' }],
    correctIndex: 1,
    explanation: {
      en: 'After "recommend/insist/demand that", use the base form (subjunctive): "that he accept".',
      ar: 'بعد "recommend/insist/demand that" نستخدم المصدر المجرّد (subjunctive): "that he accept".',
    },
  },
  {
    id: 'c-c1-01',
    level: 'C1',
    skill: 'common_errors',
    question: { en: 'Choose the correct fixed phrase.', ar: 'اختر العبارة الثابتة الصحيحة.' },
    prompt: { en: '___, the data showed the opposite.', ar: '___, the data showed the opposite.' },
    options: [
      { en: 'On the contrary' },
      { en: 'In the contrary' },
      { en: 'By the contrary' },
      { en: 'At the contrary' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'The fixed phrase is "on the contrary" - a common L1 transfer error is "in the contrary".',
      ar: 'العبارة الثابتة "on the contrary" - وخطأ النقل الشائع هو "in the contrary".',
    },
  },
]

/** The full diagnostic bank (sorted by level then skill for stable ids). */
export function getDiagnosticQuestions(): DiagnosticQuestion[] {
  return DIAGNOSTIC_BANK
}

/** Questions for a single CEFR band - powers the per-level mock practice. */
export function getQuestionsForLevel(level: DiagnosticQuestion['level']): DiagnosticQuestion[] {
  return DIAGNOSTIC_BANK.filter((q) => q.level === level)
}
