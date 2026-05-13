/**
 * EAL curriculum — 10 core topics for Arabic L1 learners.
 *
 * Each topic mirrors the depth of a KS3 weekly lesson plan: concept
 * explanation, illustrative examples, common Arabic-L1 transfer
 * errors, and practice exercises with explanations.
 *
 * EN content authored by the language-design pass; Khaleeji AR
 * fields populated by the local Ollama translation pipeline at
 * D:/AI-Agent-Server/agents/english-hub-co/scripts/translate_eal.py
 * with the same back-translation QA loop used for the dictionary
 * waves.
 */

import type { EALCurriculum } from './types'

export const EAL: EALCurriculum = {
  topics: [
    // ─── 1. Articles a / an / the ────────────────────────────────────
    {
      id: 'articles',
      category: 'grammar',
      title: { en: 'Articles: a, an, the', ar: 'أدوات التعريف والتنكير: a / an / the' },
      description: {
        en: 'When to use a/an, when to use the, and when to use nothing. This is the single biggest grammar gap for Arabic speakers — Arabic has no indefinite article and uses ال differently from English the.',
        ar: 'متى تستخدم a / an، ومتى the، ومتى ما تحطّ شي. هذي أكبر فجوة نحوية لمتحدّث العربي — لأن العربي ما عنده أداة تنكير، ويستخدم «ال» بطريقة تختلف عن «the» الإنجليزية.',
      },
      concept: {
        en: 'English uses three article forms: a, an, and the. "A" (or "an" before a vowel sound) is the indefinite article — it introduces something for the first time, or refers to one of many. "The" is the definite article — it points to a specific thing already known. Many singular countable nouns NEED an article — you cannot say "I bought book" in English the way you might say "اشتريت كتاب" in Arabic. The rule: every singular countable noun in English needs either a, an, the, or another determiner (this, my, one). Plural and uncountable nouns can stand alone when general ("Books are important") but take "the" when specific ("The books on the table are mine").',
        ar: 'الإنجليزي عنده ثلاث صيغ للأدوات: a / an / the. "a" (أو "an" قبل صوت متحرّك) هي أداة التنكير — تستخدمها لمّا تذكر الشي أول مرّة، أو تشير لواحد من ضمن عدد. "the" أداة التعريف — تشير لشي معروف ومحدّد. وايد من الأسماء المعدودة المفردة في الإنجليزي تحتاج أداة — ما تقدر تقول "I bought book" كما تقول بالعربي "اشتريت كتاب". القاعدة: كل اسم معدود مفرد في الإنجليزي لازم يجي معاه a، an، the، أو محدّد ثاني (this, my, one). الأسماء الجمع وغير المعدودة تقف بدون أداة لمّا تكون عامّة ("Books are important")، بس تاخذ "the" لمّا تكون محدّدة ("The books on the table are mine").',
      },
      examples: [
        {
          en: 'I bought a book yesterday.',
          ar: 'اشتريت كتاب أمس.',
          note: { en: 'First mention → indefinite a.', ar: 'أول ذكر → نكرة a.' },
        },
        {
          en: 'The book was about Shakespeare.',
          ar: 'الكتاب كان عن شكسبير.',
          note: { en: 'Second mention → definite the.', ar: 'ذكر ثانٍ → معرّف the.' },
        },
        {
          en: 'She is a teacher.',
          ar: 'هي مدرّسة.',
          note: { en: 'Profession → indefinite a.', ar: 'مهنة → نكرة a.' },
        },
        {
          en: 'The sun rises in the east.',
          ar: 'الشمس تشرق من الشرق.',
          note: { en: 'Unique thing → definite the.', ar: 'شيء فريد → معرّف the.' },
        },
        {
          en: 'I love music.',
          ar: 'أحب الموسيقى.',
          note: { en: 'General uncountable → no article.', ar: 'اسم غير معدود عام → بدون أداة.' },
        },
        {
          en: 'The music at the party was loud.',
          ar: 'الموسيقى في الحفلة كانت عالية.',
          note: { en: 'Specific uncountable → the.', ar: 'اسم غير معدود محدّد → the.' },
        },
        {
          en: 'He plays the piano.',
          ar: 'هو يعزف على البيانو.',
          note: { en: 'Musical instruments → the.', ar: 'الآلات الموسيقية → the.' },
        },
        {
          en: 'She goes to school every day.',
          ar: 'تروح المدرسة كل يوم.',
          note: {
            en: 'Institution as concept → no article.',
            ar: 'المؤسسة كمفهوم عام → بدون أداة.',
          },
        },
      ],
      commonErrors: [
        {
          wrong: 'I bought book yesterday.',
          right: 'I bought a book yesterday.',
          explanation: {
            en: 'Singular countable nouns always need an article in English.',
            ar: 'الأسماء المفرد المعدود لازم تاخذ أداة تعريف أو تنكير في الإنجليزي.',
          },
        },
        {
          wrong: 'The Shakespeare wrote many plays.',
          right: 'Shakespeare wrote many plays.',
          explanation: {
            en: 'Personal names never take "the".',
            ar: 'أسماء الأشخاص ما تاخذ "the" أبد.',
          },
        },
        {
          wrong: 'I love the music.',
          right: 'I love music.',
          explanation: {
            en: 'General love of music = no article. With "the" you mean a specific piece of music.',
            ar: 'محبة الموسيقى بشكل عام = بدون أداة. مع "the" يعني موسيقى محددة.',
          },
        },
        {
          wrong: 'She is teacher.',
          right: 'She is a teacher.',
          explanation: {
            en: 'Professions always take a/an in English.',
            ar: 'المهن دايماً تاخذ a / an في الإنجليزي.',
          },
        },
        {
          wrong: 'He goes to the school by bus.',
          right: 'He goes to school by bus.',
          explanation: {
            en: '"Go to school" as a daily activity needs no article. "The school" means a specific building.',
            ar: '"Go to school" كنشاط يومي بدون أداة. "the school" يعني مبنى محدد.',
          },
        },
        {
          wrong: 'I live in the Doha.',
          right: 'I live in Doha.',
          explanation: {
            en: 'Most city names take no article.',
            ar: 'معظم أسماء المدن بدون أداة.',
          },
        },
      ],
      exercises: [
        {
          question: { en: 'Choose the correct article.', ar: 'اختر الأداة الصحيحة.' },
          prompt: { en: 'She is ___ excellent student.', ar: 'هي ___ طالبة ممتازة.' },
          options: [
            { en: 'a', ar: 'a' },
            { en: 'an', ar: 'an' },
            { en: 'the', ar: 'the' },
            { en: '(nothing)', ar: '(لا شيء)' },
          ],
          correctIndex: 1,
          explanation: {
            en: '"Excellent" starts with a vowel sound (/e/), so we use "an" not "a".',
            ar: '«Excellent» تبدأ بصوت حرف علة (/e/)، فنستخدم «an» مو «a».',
          },
        },
        {
          question: { en: 'Choose the correct article.', ar: 'اختر الأداة الصحيحة.' },
          prompt: { en: 'I love ___ music.', ar: 'أحب ___ الموسيقى.' },
          options: [
            { en: 'a', ar: 'a' },
            { en: 'the', ar: 'the' },
            { en: '(nothing)', ar: '(لا شيء)' },
            { en: 'an', ar: 'an' },
          ],
          correctIndex: 2,
          explanation: {
            en: 'General uncountable love → no article. Use "the" only if you mean a specific piece of music.',
            ar: 'محبة عامة لاسم غير معدود → بدون أداة. استخدم "the" بس إذا كنت تقصد قطعة موسيقية محددة.',
          },
        },
        {
          question: { en: 'Choose the correct sentence.', ar: 'اختر الجملة الصحيحة.' },
          prompt: { en: 'Which is correct?', ar: 'أي وحدة صحيحة؟' },
          options: [
            { en: 'I bought book yesterday.', ar: 'I bought book yesterday.' },
            { en: 'I bought a book yesterday.', ar: 'I bought a book yesterday.' },
            { en: 'I bought the a book yesterday.', ar: 'I bought the a book yesterday.' },
            { en: 'I bought an book yesterday.', ar: 'I bought an book yesterday.' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Singular countable nouns need an article on first mention — "a book".',
            ar: 'الاسم المفرد المعدود لازم أداة عند أول ذكر — "a book".',
          },
        },
        {
          question: { en: 'Choose the correct article.', ar: 'اختر الأداة الصحيحة.' },
          prompt: { en: '___ sun rises in the east.', ar: '___ الشمس تشرق من الشرق.' },
          options: [
            { en: 'A', ar: 'A' },
            { en: 'An', ar: 'An' },
            { en: 'The', ar: 'The' },
            { en: '(nothing)', ar: '(لا شيء)' },
          ],
          correctIndex: 2,
          explanation: {
            en: 'Unique things (sun, moon, sky, world) always take "the".',
            ar: 'الأشياء الفريدة (الشمس، القمر، السماء، العالم) دايماً تاخذ "the".',
          },
        },
      ],
    },

    // ─── 2. Word order: English SVO ──────────────────────────────────
    {
      id: 'word-order',
      category: 'sentence',
      title: {
        en: 'Word Order: Subject + Verb + Object',
        ar: 'ترتيب الكلمات: الفاعل + الفعل + المفعول',
      },
      description: {
        en: "English is a strict SVO language — subject before verb, verb before object. Arabic moves the verb to the start (VSO) in many sentences, especially classical Arabic. Switching this off is the single fastest way to make your written English sound like a native speaker's.",
        ar: 'الإنجليزي يلتزم بترتيب فاعل-فعل-مفعول (SVO) بصرامة. العربي يحرّك الفعل أول الجملة (VSO) في حالات وايد، خاصة في الفصحى. إعادة الترتيب لـ SVO هي أسرع طريقة تخلّي إنجليزيتك المكتوبة تشبه كتابة المتحدّث الأصلي.',
      },
      concept: {
        en: 'Every English declarative sentence follows the pattern: SUBJECT → VERB → OBJECT (or COMPLEMENT). "The boy reads the book." Subject = the boy. Verb = reads. Object = the book. Arabic frequently begins with the verb: "قرأ الولد الكتاب" (read-the boy-the book). If you write English the same way ("Reads the boy the book"), it sounds like a question or wrong. The fix: always lead with WHO is doing the action, then WHAT they are doing. Questions invert this (Verb-Subject-Object: "Does the boy read?") but statements never do. Adverbs of frequency (always, often, never) sit BETWEEN subject and verb: "She always reads." Adverbs of time/place go at the end: "She reads the book in the library every evening."',
        ar: 'كل جملة خبرية في الإنجليزي تتبع نمط واحد: SUBJECT → VERB → OBJECT (أو COMPLEMENT). "The boy reads the book." الفاعل = the boy. الفعل = reads. المفعول = the book. العربي وايد مرّات يبدأ بالفعل: "قرأ الولد الكتاب". إذا كتبت إنجليزيك بنفس الترتيب ("Reads the boy the book")، يطلع شكلها سؤال أو خطأ صريح. الحل: ابدأ دايماً بـ "مَن" يسوّي الحدث، ثم "وش" يسوّي. الأسئلة تعكس الترتيب (Verb-Subject-Object: "Does the boy read?") بس الجمل الخبرية أبد ما تعكس. ظروف التكرار (always, often, never) تجي بين الفاعل والفعل: "She always reads." ظروف الزمان والمكان تجي في الآخر: "She reads the book in the library every evening."',
      },
      examples: [
        {
          en: 'The boy reads the book.',
          ar: 'الولد يقرأ الكتاب.',
          note: { en: 'Subject + Verb + Object.', ar: 'فاعل + فعل + مفعول.' },
        },
        {
          en: 'My sister bought a new car last week.',
          ar: 'أختي اشترت سيارة جديدة الأسبوع الماضي.',
          note: { en: 'Time phrase at the end.', ar: 'عبارة الزمن في النهاية.' },
        },
        {
          en: 'She always reads before bed.',
          ar: 'هي دايماً تقرأ قبل النوم.',
          note: { en: 'Always between subject and verb.', ar: '"Always" بين الفاعل والفعل.' },
        },
        {
          en: 'The students will take the exam tomorrow.',
          ar: 'الطلاب راح ياخذون الامتحان باچر.',
          note: { en: 'Future tense, same SVO order.', ar: 'زمن مستقبل، نفس ترتيب SVO.' },
        },
        {
          en: 'Macbeth murders Duncan in his sleep.',
          ar: 'ماكبث يقتل دنكن وهو نايم.',
          note: {
            en: 'Literary essay pattern: subject-verb-object.',
            ar: 'نمط المقالة الأدبية: فاعل-فعل-مفعول.',
          },
        },
        {
          en: 'In the morning, she drinks tea.',
          ar: 'في الصباح هي تشرب الشاي.',
          note: {
            en: 'Time phrase can lead, but SVO follows immediately.',
            ar: 'عبارة الزمن ممكن تيي أول، لكن SVO تيي مباشرة بعدها.',
          },
        },
      ],
      commonErrors: [
        {
          wrong: 'Reads the boy the book.',
          right: 'The boy reads the book.',
          explanation: {
            en: 'Verb cannot come first in an English statement. Lead with the subject.',
            ar: 'الفعل ما يقدر يجي أول في الجملة الخبرية الإنجليزية. ابدأ بالفاعل.',
          },
        },
        {
          wrong: 'She reads always before bed.',
          right: 'She always reads before bed.',
          explanation: {
            en: 'Adverbs of frequency (always, never, often) go BETWEEN subject and verb.',
            ar: 'ظروف التكرار (always، never، often) تجي بين الفاعل والفعل.',
          },
        },
        {
          wrong: 'Yesterday went I to the shop.',
          right: 'Yesterday I went to the shop.',
          explanation: {
            en: 'Time phrase can lead a sentence, but the subject still comes before the verb.',
            ar: 'عبارة الزمن ممكن تبدأ الجملة، لكن الفاعل لازم يجي قبل الفعل.',
          },
        },
        {
          wrong: 'Is important the homework.',
          right: 'The homework is important.',
          explanation: {
            en: 'In statements, subject comes first. Only in questions can the verb come first.',
            ar: 'في الجمل الخبرية الفاعل أولاً. الفعل يجي أول بس في الأسئلة.',
          },
        },
      ],
      exercises: [
        {
          question: {
            en: 'Put the words in the correct order.',
            ar: 'رتّب الكلمات بالترتيب الصحيح.',
          },
          prompt: {
            en: "reads / Macbeth / the witches' prophecy / carefully",
            ar: "reads / Macbeth / the witches' prophecy / carefully",
          },
          options: [
            {
              en: "Macbeth reads carefully the witches' prophecy.",
              ar: "Macbeth reads carefully the witches' prophecy.",
            },
            {
              en: "Macbeth reads the witches' prophecy carefully.",
              ar: "Macbeth reads the witches' prophecy carefully.",
            },
            {
              en: "Reads Macbeth the witches' prophecy carefully.",
              ar: "Reads Macbeth the witches' prophecy carefully.",
            },
            {
              en: "Carefully Macbeth the witches' prophecy reads.",
              ar: "Carefully Macbeth the witches' prophecy reads.",
            },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Subject + Verb + Object, then the manner adverb at the end.',
            ar: 'فاعل + فعل + مفعول، وظرف الحال في النهاية.',
          },
        },
        {
          question: { en: 'Spot the error.', ar: 'حدّد الخطأ.' },
          prompt: {
            en: 'Which sentence is correctly ordered?',
            ar: 'أي جملة فيها الترتيب الصحيح؟',
          },
          options: [
            {
              en: 'Always she completes her essays on time.',
              ar: 'Always she completes her essays on time.',
            },
            {
              en: 'She always completes her essays on time.',
              ar: 'She always completes her essays on time.',
            },
            {
              en: 'She completes always her essays on time.',
              ar: 'She completes always her essays on time.',
            },
            {
              en: 'On time always she completes her essays.',
              ar: 'On time always she completes her essays.',
            },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Adverbs of frequency sit between subject and main verb.',
            ar: 'ظروف التكرار بين الفاعل والفعل الرئيسي.',
          },
        },
      ],
    },

    // ─── 3. Present Perfect Tense ─────────────────────────────────────
    {
      id: 'present-perfect',
      category: 'grammar',
      title: {
        en: 'Present Perfect: have/has + past participle',
        ar: 'المضارع التام: have/has + التصريف الثالث',
      },
      description: {
        en: 'The present perfect connects past action to the present moment. Arabic has no direct equivalent — speakers reach for the simple past, which often sounds wrong in English. Mastering this tense moves you from Grade 4 to Grade 6 writing overnight.',
        ar: 'المضارع التام يربط الفعل في الماضي باللحظة الحالية. ما عنده مقابل مباشر في العربي — متحدّث العربي ينحاز للماضي البسيط اللي يطلع غلط في الإنجليزي. إتقان هذا الزمن يرفع كتابتك من درجة 4 لدرجة 6 بسرعة.',
      },
      concept: {
        en: 'Form: HAVE (or HAS for he/she/it) + PAST PARTICIPLE. "I have read the book." "She has finished her essay." Use it for: (1) Action started in the past, still relevant now — "I have lived here for ten years" (and I still live here). (2) Action completed at unspecified time — "I have seen that film" (some time before now). (3) Recent action with present consequence — "She has broken her arm" (her arm is still broken). Time markers: ever, never, just, already, yet, for, since, recently. Compare with simple past, which is for COMPLETED past actions at a SPECIFIC past time: "I read the book yesterday" (action finished, specific time).',
        ar: `صيغة HAVE (أو HAS للهاء) + فاعل ماضٍ. "I have read the book." "She has finished her essay." استخدمها لـ: (1) عمل بدأ في الماضي وله صلة بالحاضر الآن — "I have lived here for ten years" (وأنا أعيش هنا حتى الآن). (2) عمل انتهى في وقت غير محدد — "I have seen that film" (في وقت ما قبل الآن). (3) عمل حديث له عواقب حالية — "She has broken her arm" (ذراعها لا يزال معطوباً). مؤشرات الزمن: ever، never، just، already، yet، for، since، recently. قارنها مع الماضي البسيط، الذي يستخدم للأعمال المكتملة في وقت محدد في الماضي: "I read the book yesterday" (العمل انتهى، وقت محدد).`,
      },
      examples: [
        {
          en: 'I have lived in Doha for ten years.',
          ar: 'سكنت في الدوحة من عشر سنين.',
          note: { en: 'Started past, still continuing.', ar: 'بدا في الماضي ولا يزال مستمر.' },
        },
        {
          en: 'She has finished her homework.',
          ar: 'هي خلّصت الواجب.',
          note: {
            en: 'Recent completion with present result.',
            ar: 'إنجاز قريب له أثر في الحاضر.',
          },
        },
        {
          en: 'Have you ever read Macbeth?',
          ar: 'هل قريت Macbeth أبد؟',
          note: {
            en: '"Ever" with present perfect — life experience question.',
            ar: '"Ever" مع المضارع التام — سؤال خبرة حياتية.',
          },
        },
        {
          en: 'They have just arrived.',
          ar: 'هم وصلوا للتو.',
          note: { en: '"Just" = very recently.', ar: '"Just" تعني قبل قليل جداً.' },
        },
        {
          en: 'I have never been to London.',
          ar: 'ما رحت لندن أبد.',
          note: { en: '"Never" with present perfect.', ar: '"Never" مع المضارع التام.' },
        },
        {
          en: 'She has already eaten breakfast.',
          ar: 'هي تعشّت ريوقها.',
          note: {
            en: '"Already" before the past participle.',
            ar: '"Already" قبل التصريف الثالث.',
          },
        },
      ],
      commonErrors: [
        {
          wrong: 'I live in Doha since 2014.',
          right: 'I have lived in Doha since 2014.',
          explanation: {
            en: '"Since" + a past start date requires present perfect.',
            ar: '"Since" + تاريخ بداية في الماضي يتطلّب المضارع التام.',
          },
        },
        {
          wrong: 'She has read the book yesterday.',
          right: 'She read the book yesterday.',
          explanation: {
            en: 'A specific past time ("yesterday") triggers simple past, not present perfect.',
            ar: 'وقت محدّد في الماضي ("yesterday") يأخذ الماضي البسيط، مو المضارع التام.',
          },
        },
        {
          wrong: 'I have ate dinner.',
          right: 'I have eaten dinner.',
          explanation: {
            en: 'Past participle of "eat" is "eaten", not "ate".',
            ar: 'التصريف الثالث للفعل "eat" هو "eaten" مو "ate".',
          },
        },
        {
          wrong: 'Did you ever read Shakespeare?',
          right: 'Have you ever read Shakespeare?',
          explanation: {
            en: '"Ever" (life experience) takes present perfect, not simple past.',
            ar: '"Ever" (خبرة حياتية) ياخذ المضارع التام مو الماضي البسيط.',
          },
        },
      ],
      exercises: [
        {
          question: { en: 'Choose the correct tense.', ar: 'اختر الزمن الصحيح.' },
          prompt: {
            en: 'I ___ in this city for five years.',
            ar: 'I ___ in this city for five years.',
          },
          options: [
            { en: 'live', ar: 'live' },
            { en: 'lived', ar: 'lived' },
            { en: 'have lived', ar: 'have lived' },
            { en: 'am living', ar: 'am living' },
          ],
          correctIndex: 2,
          explanation: {
            en: '"For" + duration starting in the past, still true now = present perfect.',
            ar: '"For" + مدة تبدأ في الماضي ومستمرة = مضارع تام.',
          },
        },
        {
          question: { en: 'Choose the correct tense.', ar: 'اختر الزمن الصحيح.' },
          prompt: { en: 'She ___ her essay yesterday.', ar: 'She ___ her essay yesterday.' },
          options: [
            { en: 'has finished', ar: 'has finished' },
            { en: 'finished', ar: 'finished' },
            { en: 'have finished', ar: 'have finished' },
            { en: 'finish', ar: 'finish' },
          ],
          correctIndex: 1,
          explanation: {
            en: '"Yesterday" is a specific past time → simple past, not present perfect.',
            ar: '"Yesterday" وقت محدّد في الماضي → ماضي بسيط، مو مضارع تام.',
          },
        },
        {
          question: { en: 'Choose the correct sentence.', ar: 'اختر الجملة الصحيحة.' },
          prompt: { en: 'Which is correct?', ar: 'أي وحدة صحيحة؟' },
          options: [
            {
              en: 'Have you ever read a Shakespeare play?',
              ar: 'Have you ever read a Shakespeare play?',
            },
            {
              en: 'Did you ever read a Shakespeare play?',
              ar: 'Did you ever read a Shakespeare play?',
            },
            {
              en: 'Do you ever read a Shakespeare play?',
              ar: 'Do you ever read a Shakespeare play?',
            },
            {
              en: 'Are you ever reading a Shakespeare play?',
              ar: 'Are you ever reading a Shakespeare play?',
            },
          ],
          correctIndex: 0,
          explanation: {
            en: '"Ever" in a life-experience question uses present perfect.',
            ar: '"Ever" في سؤال عن خبرة حياتية ياخذ المضارع التام.',
          },
        },
      ],
    },

    // ─── 4. Past Tenses (simple, continuous, perfect) ────────────────
    {
      id: 'past-tenses',
      category: 'grammar',
      title: {
        en: 'Past Tenses: simple, continuous, perfect',
        ar: 'أزمنة الماضي: البسيط والمستمر والتام',
      },
      description: {
        en: 'Three past tenses, three different jobs. Simple past = completed action. Past continuous = ongoing past action. Past perfect = action completed before another past action. GCSE Literature essays use all three constantly when narrating.',
        ar: 'ثلاثة أزمنة ماضية، كل وحد له شغل. الماضي البسيط = فعل خلص. الماضي المستمر = فعل ماشي في الماضي. الماضي التام = فعل خلص قبل فعل ماضي آخر. مقالات GCSE Literature تستخدم الثلاثة باستمرار وقت السرد.',
      },
      concept: {
        en: 'Simple past — completed action at a specific time. "I read the book yesterday." Forms: regular = verb + ed (worked, played); irregular = special form (went, took, saw). Past continuous — was/were + verb-ing — action in progress at a moment in the past. "I was reading when the phone rang." Often pairs with simple past to show one action interrupting another. Past perfect — had + past participle — action completed before another past action. "By the time she arrived, I had finished the essay." The past perfect is for the EARLIER of two past events. Use it sparingly in essays — only when the sequence really matters.',
        ar: `الماضي البسيط يستخدم لوصف فعل مكتمل في وقت محدد. "I read the book yesterday." الشكل: الفعل المنتهي بـ ed (worked, played); الفعل غير المنتظم له شكل خاص (went, took, saw). الماضي المستمر — was/were + الفعل بال-ing — وصف فعل مستمر في لحظة معينة من الماضي. "I was reading when the phone rang." غالباً ما يترافق مع الماضي البسيط لإظهار أن فعل واحد قاطع فعل آخر. الماضي المثالي — had + الفعل الماضي (الفعيل) — وصف فعل مكتمل قبل فعل آخر في الماضي. "By the time she arrived, I had finished the essay." الماضي المثالي يستخدم للحدث الأقدم من بين حدثين في الماضي. استخدمه بحذر في الرسائل العلمية فقط عندما يكون التسلسل مهمًا حقاً.`,
      },
      examples: [
        {
          en: 'Macbeth murdered Duncan in Act 2.',
          ar: 'Macbeth قتل Duncan في الفصل الثاني.',
          note: { en: 'Simple past — completed event.', ar: 'ماضي بسيط — حدث منتهٍ.' },
        },
        {
          en: 'Lady Macbeth was washing her hands when she sleepwalked.',
          ar: 'Lady Macbeth كانت تغسل يديها لما كانت تمشي في النوم.',
          note: { en: 'Past continuous + simple past.', ar: 'ماضي مستمر + ماضي بسيط.' },
        },
        {
          en: 'By the end of Act 1, Macbeth had already met the witches.',
          ar: 'بنهاية الفصل الأول كان Macbeth قابل الساحرات.',
          note: {
            en: 'Past perfect — earlier of two past events.',
            ar: 'ماضي تام — الأقدم بين حدثين ماضيين.',
          },
        },
        {
          en: 'I read the book and watched the film.',
          ar: 'قريت الكتاب وشفت الفيلم.',
          note: { en: 'Two simple past actions in sequence.', ar: 'فعلان ماضيان متتاليان بسيطين.' },
        },
        {
          en: 'While I was studying, my brother was watching TV.',
          ar: 'بينما كنت أدرس، كان أخوي يتفرّج تلفزيون.',
          note: {
            en: 'Two parallel past continuous actions.',
            ar: 'فعلان متوازيان في الماضي المستمر.',
          },
        },
      ],
      commonErrors: [
        {
          wrong: 'Yesterday I have eaten pizza.',
          right: 'Yesterday I ate pizza.',
          explanation: {
            en: 'A specific past time → simple past, not present perfect.',
            ar: 'وقت ماضٍ محدّد → ماضي بسيط، مو مضارع تام.',
          },
        },
        {
          wrong: 'When she arrived, I finished the essay.',
          right: 'When she arrived, I had finished the essay.',
          explanation: {
            en: 'If "finished" happened BEFORE "arrived", use past perfect.',
            ar: 'إذا كان "finished" حصل قبل "arrived"، استخدم الماضي التام.',
          },
        },
        {
          wrong: 'I was study when she called.',
          right: 'I was studying when she called.',
          explanation: {
            en: 'Past continuous = was/were + verb-ING.',
            ar: 'الماضي المستمر = was/were + الفعل + ing.',
          },
        },
        {
          wrong: 'Macbeth had murder Duncan in Act 2.',
          right: 'Macbeth murdered Duncan in Act 2.',
          explanation: {
            en: 'Simple past tells the story. Past perfect is for events BEFORE the main timeline.',
            ar: 'الماضي البسيط يحكي القصة. الماضي التام للأحداث اللي قبل الخط الزمني الرئيسي.',
          },
        },
      ],
      exercises: [
        {
          question: { en: 'Choose the correct tense.', ar: 'اختر الزمن الصحيح.' },
          prompt: {
            en: 'When I arrived at the party, everyone ___.',
            ar: 'When I arrived at the party, everyone ___.',
          },
          options: [
            { en: 'has left', ar: 'has left' },
            { en: 'left', ar: 'left' },
            { en: 'had left', ar: 'had left' },
            { en: 'was leaving', ar: 'was leaving' },
          ],
          correctIndex: 2,
          explanation: {
            en: 'Everyone left BEFORE I arrived → past perfect for the earlier action.',
            ar: 'الكل ترك الحفلة قبل ما وصلت → ماضي تام للحدث الأقدم.',
          },
        },
        {
          question: { en: 'Choose the correct sentence.', ar: 'اختر الجملة الصحيحة.' },
          prompt: {
            en: "Which best describes Macbeth's state after the murder?",
            ar: 'أي جملة تصف حال Macbeth بعد القتل؟',
          },
          options: [
            {
              en: 'Macbeth has murdered Duncan and was feeling guilty.',
              ar: 'Macbeth has murdered Duncan and was feeling guilty.',
            },
            {
              en: 'Macbeth murdered Duncan and was feeling guilty.',
              ar: 'Macbeth murdered Duncan and was feeling guilty.',
            },
            {
              en: 'Macbeth had murdered Duncan and was feeling guilty.',
              ar: 'Macbeth had murdered Duncan and was feeling guilty.',
            },
            {
              en: 'Macbeth is murdering Duncan and was feeling guilty.',
              ar: 'Macbeth is murdering Duncan and was feeling guilty.',
            },
          ],
          correctIndex: 2,
          explanation: {
            en: 'The murder happened BEFORE the guilt → past perfect for the murder, past continuous for the ongoing guilt.',
            ar: 'القتل حدث قبل الشعور بالذنب → ماضي تام للقتل، ماضي مستمر للشعور المستمر.',
          },
        },
      ],
    },

    // ─── 5. Subject–Verb Agreement ────────────────────────────────────
    {
      id: 'subject-verb-agreement',
      category: 'grammar',
      title: { en: 'Subject–Verb Agreement', ar: 'مطابقة الفاعل للفعل' },
      description: {
        en: 'The verb must match the subject in number. Singular subject → singular verb. Plural subject → plural verb. Arabic verbs change in more complex ways (dual, plural, gender) — English only really cares about third person singular -s.',
        ar: 'الفعل لازم يطابق الفاعل في العدد. فاعل مفرد → فعل مفرد. فاعل جمع → فعل جمع. أفعال العربي تتغيّر بطرق أعقد (مثنّى، جمع، تذكير، تأنيث) — الإنجليزي يهتم بس بـ -s للمفرد الغائب.',
      },
      concept: {
        en: 'The rule: in the simple present, add -s/-es to the verb ONLY for he/she/it. "I walk, you walk, we walk, they walk, BUT he walks." For past tense, no agreement needed — verbs are the same for all subjects ("I walked, he walked, they walked"). Be careful with: (1) collective nouns (the team IS — singular in British English; the team ARE — also acceptable). (2) "There is/are" — match the noun after it ("There IS a book / There ARE books"). (3) Each, every, neither, either — always singular. (4) Compound subjects with AND → plural ("Macbeth and Banquo ARE generals").',
        ar: `في الحاضر البسيط، نضيف -س/-ز لل VERB فقط لـ he/she/it. "I walk, you walk, we walk, they walk، بس he walks." في الماضي، ماكو حاجة تتفق فيها — الأفعال هي نفسها لكل المبتدأين ("I walked, he walked, they walked"). كون حذر مع: (1) أسماء الجمع (الفرقة IS — مفرد بالإنجليزية البريطانية؛ الفرقة ARE — مو شرط). (2) "There is/are" — اربط الكلمة اللي بعدها ("There IS a book / There ARE books"). (3) كل، كل واحد، لا أي، ولا أي — دائمًا مفرد. (4) موضوعات مركبة مع AND → جمع ("Macbeth and Banquo ARE generals").`,
      },
      examples: [
        {
          en: 'She walks to school every day.',
          ar: 'هي تروح المدرسة مشي كل يوم.',
          note: {
            en: 'Third person singular → walks (with -s).',
            ar: 'مفرد غائبة → walks (مع -s).',
          },
        },
        {
          en: 'They walk to school every day.',
          ar: 'هم يروحون المدرسة مشي كل يوم.',
          note: { en: 'Plural → walk (no -s).', ar: 'جمع → walk (بدون -s).' },
        },
        {
          en: 'There is a problem with the essay.',
          ar: 'في مشكلة في المقالة.',
          note: { en: 'Singular noun → is.', ar: 'اسم مفرد → is.' },
        },
        {
          en: 'There are three errors in the paragraph.',
          ar: 'في ثلاث أخطاء في الفقرة.',
          note: { en: 'Plural noun → are.', ar: 'اسم جمع → are.' },
        },
        {
          en: 'Each student writes their own essay.',
          ar: 'كل طالب يكتب مقالته الخاصة.',
          note: { en: '"Each" always takes singular verb.', ar: '"Each" دايماً مع فعل مفرد.' },
        },
      ],
      commonErrors: [
        {
          wrong: 'She walk to school.',
          right: 'She walks to school.',
          explanation: { en: 'Third person singular requires -s.', ar: 'المفرد الغائب يحتاج -s.' },
        },
        {
          wrong: 'There is many problems.',
          right: 'There are many problems.',
          explanation: { en: '"Problems" is plural → are.', ar: '"Problems" جمع → are.' },
        },
        {
          wrong: 'Macbeth and Banquo is generals.',
          right: 'Macbeth and Banquo are generals.',
          explanation: {
            en: 'Two subjects joined by AND → plural verb.',
            ar: 'فاعلان موصولان بـ AND → فعل جمع.',
          },
        },
        {
          wrong: 'Every student have a textbook.',
          right: 'Every student has a textbook.',
          explanation: {
            en: '"Every" always takes a singular verb.',
            ar: '"Every" دايماً مع فعل مفرد.',
          },
        },
      ],
      exercises: [
        {
          question: { en: 'Choose the correct verb.', ar: 'اختر الفعل الصحيح.' },
          prompt: {
            en: 'The student ___ his essay every Monday.',
            ar: 'The student ___ his essay every Monday.',
          },
          options: [
            { en: 'write', ar: 'write' },
            { en: 'writes', ar: 'writes' },
            { en: 'are writing', ar: 'are writing' },
            { en: 'writed', ar: 'writed' },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Third person singular (the student = he) → -s.',
            ar: 'مفرد غائب → -s.',
          },
        },
      ],
    },

    // ─── 6. Plurals and Uncountable Nouns ────────────────────────────
    {
      id: 'plurals-uncountable',
      category: 'grammar',
      title: { en: 'Plurals and Uncountable Nouns', ar: 'الجمع والأسماء غير المعدودة' },
      description: {
        en: 'Most English nouns add -s for plural. But some words are uncountable (information, advice, furniture) and never take -s. Some words look plural but mean one thing (news, mathematics). And irregular plurals (children, mice, feet) are common in essays.',
        ar: 'معظم الأسماء الإنجليزية تاخذ -s للجمع. بعضها غير معدود (information, advice, furniture) وما تاخذ -s أبد. وبعض الكلمات شكلها جمع بس معناها واحد (news, mathematics). والجموع الشاذة (children, mice, feet) شائعة في المقالات.',
      },
      concept: {
        en: 'Regular plural = -s (book → books). After s/x/ch/sh add -es (bus → buses, box → boxes). After consonant + y, change y to ies (city → cities). Irregular plurals: man → men, woman → women, child → children, foot → feet, tooth → teeth, mouse → mice, person → people. Uncountable nouns (information, advice, furniture, equipment, news, water, music) never take -s and use singular verbs. To count them, use a unit phrase: "a piece of advice", "two pieces of information", "three slices of bread". "News" looks plural but is uncountable singular: "The news IS bad."',
        ar: 'الجمع المنتظم = -s (book → books). بعد الحروف s/x/ch/sh نضيف -es (bus → buses, box → boxes). بعد حرف ساكن + y نقلب y إلى ies (city → cities). الجموع الشاذة: man → men, woman → women, child → children, foot → feet, tooth → teeth, mouse → mice, person → people. الأسماء غير المعدودة (information, advice, furniture, equipment, news, water, music) أبد ما تاخذ -s وتجي مع فعل مفرد. لو تبي تعدّها، استخدم وحدة قياس: "a piece of advice"، "two pieces of information"، "three slices of bread". "News" شكلها جمع بس هي مفرد غير معدود: "The news IS bad."',
      },
      examples: [
        {
          en: 'I bought three books yesterday.',
          ar: 'اشتريت ثلاث كتب أمس.',
          note: { en: 'Regular plural with -s.', ar: 'جمع منتظم بـ -s.' },
        },
        {
          en: 'The children are playing in the garden.',
          ar: 'العيال يلعبون في الحديقة.',
          note: { en: 'Irregular plural: child → children.', ar: 'جمع شاذ: child → children.' },
        },
        {
          en: 'She gave me some good advice.',
          ar: 'أعطتني نصيحة زينة.',
          note: { en: '"Advice" uncountable — no -s.', ar: '"Advice" غير معدود — بدون -s.' },
        },
        {
          en: 'The news is shocking.',
          ar: 'الأخبار صادمة.',
          note: {
            en: '"News" looks plural, takes singular verb.',
            ar: '"News" شكلها جمع وتاخذ فعل مفرد.',
          },
        },
        {
          en: 'I need three pieces of information.',
          ar: 'أحتاج ثلاث معلومات.',
          note: {
            en: 'Counting uncountable nouns with "pieces of".',
            ar: 'عدّ الاسم غير المعدود بـ "pieces of".',
          },
        },
      ],
      commonErrors: [
        {
          wrong: 'She gave me three advices.',
          right: 'She gave me three pieces of advice.',
          explanation: {
            en: '"Advice" is uncountable — never takes -s. Count it with "pieces of".',
            ar: '"Advice" غير معدود — ما تاخذ -s. عدّها بـ "pieces of".',
          },
        },
        {
          wrong: 'The childrens are playing.',
          right: 'The children are playing.',
          explanation: {
            en: '"Children" is already plural — no extra -s.',
            ar: '"Children" جمع أصلاً — بدون -s إضافية.',
          },
        },
        {
          wrong: 'The informations are important.',
          right: 'The information is important.',
          explanation: {
            en: '"Information" is uncountable singular.',
            ar: '"Information" غير معدود مفرد.',
          },
        },
        {
          wrong: 'I have two homeworks tonight.',
          right: 'I have two pieces of homework tonight.',
          explanation: { en: '"Homework" is uncountable.', ar: '"Homework" غير معدود.' },
        },
      ],
      exercises: [
        {
          question: { en: 'Choose the correct form.', ar: 'اختر الصيغة الصحيحة.' },
          prompt: {
            en: 'The teacher gave us a lot of useful ___.',
            ar: 'The teacher gave us a lot of useful ___.',
          },
          options: [
            { en: 'advices', ar: 'advices' },
            { en: 'advice', ar: 'advice' },
            { en: 'advise', ar: 'advise' },
            { en: 'advised', ar: 'advised' },
          ],
          correctIndex: 1,
          explanation: {
            en: '"Advice" is uncountable — no plural form.',
            ar: '"Advice" غير معدود — ما عنده جمع.',
          },
        },
      ],
    },

    // ─── 7. Prepositions of Time and Place ───────────────────────────
    {
      id: 'prepositions',
      category: 'grammar',
      title: { en: 'Prepositions: in, on, at', ar: 'حروف الجر: in, on, at' },
      description: {
        en: 'English prepositions rarely match Arabic prepositions one-to-one. The "in/on/at" trio for time and place is the most common gap. Learn the rules + memorise the exceptions — there is no shortcut.',
        ar: 'حروف الجر الإنجليزية نادراً ما تطابق العربية واحد لواحد. ثلاثي "in/on/at" للزمن والمكان أكثر فجوة شائعة. تعلّم القواعد + احفظ الاستثناءات — ما فيه طريق مختصر.',
      },
      concept: {
        en: 'Time: AT for clock times + festivals + night ("at 3 pm", "at Christmas", "at night"). ON for days + dates ("on Monday", "on 5 May"). IN for months + years + centuries + parts of the day ("in May", "in 2024", "in the morning", "in the 21st century"). Place: AT for specific points ("at the bus stop", "at the door"). ON for surfaces + streets ("on the table", "on Oxford Street"). IN for enclosed spaces + larger areas ("in the box", "in London", "in Qatar"). Special phrases: "in the morning / afternoon / evening" BUT "at night". "in bed", "at home", "at school", "at work" (no article).',
        ar: `الوقت: AT يستخدم لتوقيتات الساعة + المهرجانات + الليل ("at 3 pm", "at Christmas", "at night"). ON يستخدم للأيام + التارikh ("on Monday", "on 5 May"). IN يستخدم للشهور + السنوات + القرون + أجزاء اليوم ("in May", "in 2024", "in the morning", "in the 21st century"). المكان: AT يستخدم لنقاط محددة ("at the bus stop", "at the door"). ON يستخدم للأسطح + الشوارع ("on the table", "on Oxford Street"). IN يستخدم للمساحات المغلقة + المناطق الأكبر حجمًا ("in the box", "in London", "in Qatar"). جمل خاصة: "in the morning / afternoon / evening" لكن "at night". "in bed", "at home", "at school", "at work" (بدون مادة).`,
      },
      examples: [
        {
          en: 'I will meet you at 3 pm on Monday in the cafeteria.',
          ar: 'أقابلك الساعة ٣ يوم الإثنين في الكافتيريا.',
          note: {
            en: 'All three in one sentence — time AT, day ON, place IN.',
            ar: 'الثلاثة في جملة واحدة — وقت AT، يوم ON، مكان IN.',
          },
        },
        {
          en: 'She was born in 2010 in Doha.',
          ar: 'انولدت في ٢٠١٠ في الدوحة.',
          note: { en: 'Year + city → IN.', ar: 'سنة + مدينة → IN.' },
        },
        {
          en: 'The exam starts at 9 am on Tuesday.',
          ar: 'الامتحان يبدأ الساعة ٩ يوم الثلاثاء.',
          note: { en: 'Clock time AT, day ON.', ar: 'وقت AT، يوم ON.' },
        },
        {
          en: 'Macbeth meets the witches on the heath.',
          ar: 'Macbeth يقابل الساحرات في الخلاء.',
          note: { en: 'Open outdoor place → ON.', ar: 'مكان مكشوف → ON.' },
        },
      ],
      commonErrors: [
        {
          wrong: 'I will see you in Monday.',
          right: 'I will see you on Monday.',
          explanation: { en: 'Days take ON, not IN.', ar: 'الأيام تاخذ ON مو IN.' },
        },
        {
          wrong: 'She lives at Doha.',
          right: 'She lives in Doha.',
          explanation: { en: 'Cities take IN.', ar: 'المدن تاخذ IN.' },
        },
        {
          wrong: "The class starts in 9 o'clock.",
          right: "The class starts at 9 o'clock.",
          explanation: { en: 'Clock times take AT.', ar: 'الأوقات على الساعة تاخذ AT.' },
        },
        {
          wrong: 'I read the book in last week.',
          right: 'I read the book last week.',
          explanation: {
            en: '"Last week / next year / this morning" take no preposition.',
            ar: '"Last week / next year / this morning" بدون حرف جر.',
          },
        },
      ],
      exercises: [
        {
          question: { en: 'Choose the correct preposition.', ar: 'اختر حرف الجر الصحيح.' },
          prompt: {
            en: 'The play opens ___ Act 1, Scene 1.',
            ar: 'The play opens ___ Act 1, Scene 1.',
          },
          options: [
            { en: 'in', ar: 'in' },
            { en: 'on', ar: 'on' },
            { en: 'at', ar: 'at' },
            { en: 'by', ar: 'by' },
          ],
          correctIndex: 0,
          explanation: {
            en: 'Acts/scenes/chapters take IN.',
            ar: 'الفصول والمشاهد والأبواب تاخذ IN.',
          },
        },
      ],
    },

    // ─── 8. Phrasal Verbs ────────────────────────────────────────────
    {
      id: 'phrasal-verbs',
      category: 'vocabulary',
      title: {
        en: 'Phrasal Verbs: get up, look after, give in',
        ar: 'الأفعال المركّبة: get up, look after, give in',
      },
      description: {
        en: 'A phrasal verb = verb + preposition or adverb. The meaning is usually different from the verb alone. "Give up" doesn\'t mean "give" + "up" — it means stop trying. Arabic rarely uses this pattern, so phrasal verbs need memorisation.',
        ar: 'الفعل المركّب = فعل + حرف جر أو ظرف. معناه عادةً يختلف عن الفعل لحاله. "Give up" ما تعني "give" + "up" — تعني توقّف عن المحاولة. العربي ما يستخدم هالنمط، فالأفعال المركّبة تحتاج حفظ.',
      },
      concept: {
        en: 'Phrasal verbs come in two main types: (1) Separable — the object can go between or after ("turn off the light" / "turn the light off"). With pronouns, MUST go between ("turn it off" not "turn off it"). (2) Inseparable — the verb + preposition stay together ("look after the children" — not "look the children after"). High-frequency phrasal verbs for GCSE essays: come up with (think of), figure out (understand), look up to (admire), get over (recover from), give in (surrender), find out (discover), put off (postpone), make up (invent), turn down (reject), pick up (collect/learn). Use these in essays to lift your register.',
        ar: `الفعل المركب بيكون من نوعين رئيسيين: (1) قابل للانفصال — يمكن أن يوضع الفاعل بين الفعل أو بعده ("turn off the light" / "turn the light off"). مع الضمائر، لازم يكون بين الفعل والفعل ("turn it off" ماكوش صح "turn off it"). (2) غير قابل للانفصال — الفعل والظرف بيكونوا ملايين ("look after the children" — ماكوش صح "look the children after"). من أكثـر الأفعال المركبة استعمالًا في مقالات الGCSE: come up with (يفكر في)، figure out (يفهم)، look up to (يعجب منه)، get over (يتغلب على)، give in (يurrender)، find out (يدري)، put off (ينتظر)، make up (يفكر)، turn down (يرفض)، pick up (يجمع/يتعلم). استخدموا هاد الأفعال في مقالاتكم عشان ترفعوا مستوى الكلام.`,
      },
      examples: [
        {
          en: 'Macbeth gives in to his ambition.',
          ar: 'Macbeth يستسلم لطموحه.',
          note: { en: '"Give in" = surrender, yield.', ar: '"Give in" = يستسلم، يخضع.' },
        },
        {
          en: 'Lady Macbeth cannot get over her guilt.',
          ar: 'Lady Macbeth ما تقدر تتجاوز إحساسها بالذنب.',
          note: { en: '"Get over" = recover from.', ar: '"Get over" = يتعافى من.' },
        },
        {
          en: 'I figured out the answer.',
          ar: 'فهمت الإجابة.',
          note: { en: '"Figure out" = work out, understand.', ar: '"Figure out" = يفهم، يستنتج.' },
        },
        {
          en: 'She turned down the offer.',
          ar: 'هي رفضت العرض.',
          note: { en: '"Turn down" = reject.', ar: '"Turn down" = يرفض.' },
        },
      ],
      commonErrors: [
        {
          wrong: 'I will look the children after.',
          right: 'I will look after the children.',
          explanation: {
            en: '"Look after" is inseparable — keep the words together.',
            ar: '"Look after" غير قابل للفصل — اترك الكلمات مع بعض.',
          },
        },
        {
          wrong: 'Turn off it.',
          right: 'Turn it off.',
          explanation: {
            en: 'With pronouns, the object must go BETWEEN the verb and the preposition.',
            ar: 'مع الضمائر، المفعول لازم يجي بين الفعل وحرف الجر.',
          },
        },
        {
          wrong: 'I give up to study English.',
          right: 'I gave up studying English.',
          explanation: {
            en: '"Give up" takes -ing form, not infinitive.',
            ar: '"Give up" ياخذ -ing مو المصدر.',
          },
        },
      ],
      exercises: [
        {
          question: { en: 'Choose the correct phrasal verb.', ar: 'اختر الفعل المركّب الصحيح.' },
          prompt: {
            en: 'Lady Macbeth cannot ___ her guilt.',
            ar: 'Lady Macbeth cannot ___ her guilt.',
          },
          options: [
            { en: 'get over', ar: 'get over' },
            { en: 'give up', ar: 'give up' },
            { en: 'pick up', ar: 'pick up' },
            { en: 'put off', ar: 'put off' },
          ],
          correctIndex: 0,
          explanation: {
            en: '"Get over" means recover from emotionally.',
            ar: '"Get over" = يتعافى عاطفياً من.',
          },
        },
      ],
    },

    // ─── 9. Capitals and Punctuation ─────────────────────────────────
    {
      id: 'capitals-punctuation',
      category: 'sentence',
      title: { en: 'Capitals and Punctuation', ar: 'الحروف الكبيرة وعلامات الترقيم' },
      description: {
        en: 'Arabic has no capital letters and uses punctuation differently. English examiners deduct marks for missed capitals and run-on sentences. This is mechanical SPaG (spelling, punctuation, grammar) — easy points if you train it.',
        ar: 'العربي ما عنده حروف كبيرة ويستخدم علامات الترقيم بطريقة مختلفة. مصححو الإنجليزي يخصمون درجات على الحروف الكبيرة المفقودة والجمل المتداخلة. هذي SPaG ميكانيكية — درجات سهلة لو دربت عليها.',
      },
      concept: {
        en: `CAPITALS: start of every sentence. Proper nouns (names of people, places, books, days, months — Macbeth, London, January, Monday, Shakespeare). The pronoun "I" — always capital. Titles in headings (The Tragedy of Macbeth). FULL STOPS end sentences. COMMAS separate items in lists, mark off subordinate clauses, separate the speaker from their words (She said, "I will go."). SEMICOLONS join two complete sentences too closely related to separate: "Macbeth is ambitious; his wife is more so." COLONS introduce lists or explanations. APOSTROPHES show possession ("Macbeth's sword") or contractions ("don't" = "do not"). QUOTATION MARKS surround speech and embedded quotations in essays. AVOID run-on sentences — two complete thoughts joined only by a comma is wrong (with the famous "She came, she saw, she conquered" being a special rhetorical case).`,
        ar: `CAPITALS: بداية كل جملة بحرف كبير. أسماء الأعلام (أشخاص، أماكن، كتب، أيام، شهور — Macbeth, London, January, Monday, Shakespeare). الضمير "I" — دايماً بحرف كبير. العناوين في الهيدنغز (The Tragedy of Macbeth). FULL STOPS تنهي الجمل. COMMAS تفصل العناصر في القوائم، وتعزل الجمل الفرعية، وتفصل المتكلّم عن كلامه (She said, "I will go."). SEMICOLONS تربط جملتين كاملتين قريبتين بالمعنى للحدّ اللي ما يستاهل تفصلهم: "Macbeth is ambitious; his wife is more so." COLONS تقدّم قوائم أو شروحات. APOSTROPHES تبيّن الملكية ("Macbeth's sword") أو الاختصار ("don't" = "do not"). QUOTATION MARKS تحيط بالكلام المنقول والاقتباسات في المقالات. تجنّب run-on sentences — جمعك جملتين كاملتين بفاصلة بس غلط (الجملة الشهيرة "She came, she saw, she conquered" حالة بلاغية خاصة).`,
      },
      examples: [
        {
          en: 'Macbeth is a tragedy by William Shakespeare.',
          ar: 'Macbeth مسرحية تراجيدية لـ William Shakespeare.',
          note: {
            en: 'Capitals on play title, author name.',
            ar: 'حروف كبيرة لعنوان المسرحية واسم المؤلف.',
          },
        },
        {
          en: 'I read the book on Monday.',
          ar: 'قريت الكتاب يوم الإثنين.',
          note: {
            en: '"I" always capital; "Monday" is a proper noun.',
            ar: '"I" دايماً كبيرة؛ "Monday" اسم علم.',
          },
        },
        {
          en: `Lady Macbeth says, "Out, damned spot!"`,
          ar: `Lady Macbeth تقول: "Out, damned spot!"`,
          note: {
            en: 'Quotation marks + comma + capital at start of speech.',
            ar: 'علامات اقتباس + فاصلة + حرف كبير في بداية الكلام.',
          },
        },
      ],
      commonErrors: [
        {
          wrong: 'macbeth is a tragedy.',
          right: 'Macbeth is a tragedy.',
          explanation: {
            en: 'Proper nouns always capitalised.',
            ar: 'أسماء الأعلام دايماً حرف كبير.',
          },
        },
        {
          wrong: 'i went to london last week.',
          right: 'I went to London last week.',
          explanation: {
            en: 'Both "I" and "London" need capitals.',
            ar: 'كل من "I" و"London" يحتاجان حرف كبير.',
          },
        },
        {
          wrong: 'She came she saw she conquered.',
          right: 'She came, she saw, she conquered.',
          explanation: {
            en: 'List of past actions needs commas separating them.',
            ar: 'قائمة الأفعال الماضية تحتاج فواصل.',
          },
        },
      ],
      exercises: [
        {
          question: { en: 'Fix the capitalisation.', ar: 'صحّح الحروف الكبيرة.' },
          prompt: {
            en: 'Which version is correctly capitalised?',
            ar: 'أي نسخة حروفها الكبيرة صحيحة؟',
          },
          options: [
            {
              en: 'i love reading shakespeare on sunday.',
              ar: 'i love reading shakespeare on sunday.',
            },
            {
              en: 'I love reading Shakespeare on Sunday.',
              ar: 'I love reading Shakespeare on Sunday.',
            },
            {
              en: 'I love Reading Shakespeare on Sunday.',
              ar: 'I love Reading Shakespeare on Sunday.',
            },
            {
              en: 'I love reading Shakespeare on sunday.',
              ar: 'I love reading Shakespeare on sunday.',
            },
          ],
          correctIndex: 1,
          explanation: {
            en: "Capitalise: I, Shakespeare (proper noun), Sunday (day name). Don't capitalise: love, reading, on.",
            ar: 'الكبيرة: I، Shakespeare (علم)، Sunday (يوم). الصغيرة: love، reading، on.',
          },
        },
      ],
    },

    // ─── 10. Common Arabic Transfer Errors ───────────────────────────
    {
      id: 'common-arabic-errors',
      category: 'common_errors',
      title: {
        en: 'Common Arabic-Speaker Transfer Errors',
        ar: 'أخطاء النقل الشائعة لمتحدّث العربي',
      },
      description: {
        en: 'A consolidated checklist of the errors examiners flag most often on essays from Arabic L1 students. Bookmark this — running through it before submitting any essay catches 80% of avoidable mistakes.',
        ar: 'قائمة موحّدة بأكثر الأخطاء اللي يرصدها المصححون في مقالات طلاب العربي. احفظ هذا في مفضّلتك — مراجعتها قبل تسليم أي مقالة تمسك 80٪ من الأخطاء اللي يمكن تجنّبها.',
      },
      concept: {
        en: 'The top 10 transfer errors, in order of GCSE-essay frequency: (1) Missing indefinite articles ("She is teacher" → "She is a teacher"). (2) Verb in front position ("Said the boy" → "The boy said"). (3) Simple past instead of present perfect ("I live here since 2015" → "I have lived here since 2015"). (4) Confused prepositions ("in Monday" → "on Monday"). (5) -s missing on third-person singular ("She walk" → "She walks"). (6) Plural on uncountable nouns ("informations" → "information"). (7) "and so" or "and also" as connectors instead of "and" + a comma ("Macbeth is ambitious and also he is loyal" → "Macbeth is ambitious, and he is loyal" or just "Macbeth is ambitious and loyal"). (8) Capital letters dropped on proper nouns ("macbeth" → "Macbeth"). (9) Direct translation of Arabic idioms (use English idioms instead). (10) "Because" used as a sentence opener with no main clause ("Because Macbeth is ambitious." — incomplete sentence; fix: "Because Macbeth is ambitious, he kills Duncan.").',
        ar: `أهم عشرة أخطاء تحويلية حسب تكرارها في مقالات الGCSE:

(1) نسيان المفعول به غير المحدد ("She is teacher" → "She is a teacher").

(2) وضع الفعل في بداية الجملة ("Said the boy" → "The boy said").

(3) استخدام الماضي البسيط بدلاً من الماضي الكامن ("I live here since 2015" → "I have lived here since 2015").

(4) الخلط بين prepositions ("in Monday" → "on Monday").

(5) نقص حرف الجر -s في الفعل الثالث المفرد ("She walk" → "She walks").

(6) وضع الجمع على الأسماء غير العدديّة ("informations" → "information").

(7) استخدام "and so" أو "and also" بدلاً من "and" مع الفاصلة ("Macbeth is ambitious and also he is loyal" → "Macbeth is ambitious, and he is loyal" or just "Macbeth is ambitious and loyal").

(8) إهمال الأحرف الأولى الكبيرة في الاسماء الخاصة ("macbeth" → "Macbeth").

(9) الترجمة المباشرة للتعبيرات العربية (استخدم التعبيرات الإنجليزية بدلاً من ذلك).

(10) استخدام كلمة "because" كمبتدأ بدون جملة رئيسية ("Because Macbeth is ambitious." — جملة غير مكتملة؛ الحل: "Because Macbeth is ambitious, he kills Duncan.").`,
      },
      examples: [
        {
          en: 'Macbeth is a tragedy that Shakespeare wrote in 1606.',
          ar: 'Macbeth مسرحية تراجيدية كتبها Shakespeare سنة 1606.',
          note: {
            en: 'Article + capitals + relative clause — all correct.',
            ar: 'أداة + حرف كبير + جملة وصلية — كلها صحيحة.',
          },
        },
        {
          en: 'I have studied English for five years.',
          ar: 'درست الإنجليزي من خمس سنين.',
          note: { en: 'Present perfect for ongoing action.', ar: 'مضارع تام للفعل المستمر.' },
        },
      ],
      commonErrors: [
        {
          wrong: 'She is teacher and she teach English since 2015.',
          right: 'She is a teacher and she has taught English since 2015.',
          explanation: {
            en: 'Three errors fixed: missing "a", missing -s on "teach", "since 2015" needs present perfect.',
            ar: 'ثلاث أخطاء تصحّحت: "a" المفقودة، -s المفقودة من "teach"، و"since 2015" يحتاج مضارع تام.',
          },
        },
        {
          wrong: 'Said the boy that he will go to school in Monday.',
          right: 'The boy said that he would go to school on Monday.',
          explanation: {
            en: 'Fixed: SVO order, "in Monday" → "on Monday", "will" → "would" for reported speech.',
            ar: 'صحّحت: ترتيب SVO، "in Monday" → "on Monday"، و"will" → "would" للحديث المنقول.',
          },
        },
      ],
      exercises: [
        {
          question: { en: 'Fix all the errors.', ar: 'صحّح كل الأخطاء.' },
          prompt: {
            en: 'Which is the corrected version of: "macbeth murder duncan in act 2 and he feel guilty since."',
            ar: 'أي نسخة صحّحت: "macbeth murder duncan in act 2 and he feel guilty since."',
          },
          options: [
            {
              en: 'Macbeth murders Duncan in Act 2 and he feels guilty since.',
              ar: 'Macbeth murders Duncan in Act 2 and he feels guilty since.',
            },
            {
              en: 'Macbeth murdered Duncan in Act 2 and he has felt guilty since.',
              ar: 'Macbeth murdered Duncan in Act 2 and he has felt guilty since.',
            },
            {
              en: 'Macbeth murdered Duncan in Act 2 and he feel guilty since.',
              ar: 'Macbeth murdered Duncan in Act 2 and he feel guilty since.',
            },
            {
              en: 'macbeth murdered duncan in act 2 and he has felt guilty since.',
              ar: 'macbeth murdered duncan in act 2 and he has felt guilty since.',
            },
          ],
          correctIndex: 1,
          explanation: {
            en: 'Fixed: capitals on names + acts, simple past for the murder event, present perfect for guilt continuing to now.',
            ar: 'صحّحت: حروف كبيرة للأسماء + الفصل، ماضي بسيط للقتل، مضارع تام للذنب المستمر للحاضر.',
          },
        },
      ],
    },
  ],
}

export function findEALTopic(slug: string) {
  return EAL.topics.find((t) => t.id === slug)
}
