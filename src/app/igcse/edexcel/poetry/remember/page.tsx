'use client'
// [P2:auth] board guard deferred — client page, no server-side requireIgcseBoard

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

/* ── Poem data ────────────────────────────────────────────────────── */

const poem: PoemData = {
  title: 'Remember',
  poet: 'Christina Rossetti',
  lines: [
    {
      text: 'Remember me when I am gone away,',
      annotations: [
        {
          type: 'Opening imperative',
          note: 'The poem opens with a direct command — "Remember me". The speaker is already addressing her beloved from beyond the experience of dying. The imperative verb gives the opening line its quiet authority.',
          color: '#3b82f6',
        },
        {
          type: 'Euphemism',
          note: '"Gone away" avoids the word "dead". Rossetti softens the harshness of death in the opening, treating it as a journey rather than an ending. This gentle tone sets up the whole poem\'s emotional register.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Gone far away into the silent land;',
      annotations: [
        {
          type: 'Key quote',
          note: '"The silent land" is a metaphor for death — a place without voices, without communication. The capitalised "L" in earlier versions sometimes gives it a biblical feel. "Silent" emphasises that the dead cannot speak.',
          color: '#f59e0b',
        },
        {
          type: 'Imagery',
          note: '"Silent land" draws on a long tradition of imagining the afterlife as a distant country. The quietness of the land is the poem\'s key feature: there will be no contact between speaker and beloved once she is there.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'When you can no more hold me by the hand,',
      annotations: [
        {
          type: 'Physical detail',
          note: 'The hand-holding makes the love tangible. Rossetti grounds the abstract idea of death in a specific, everyday act of affection — the couple will no longer be able to touch.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Nor I half turn to go yet turning stay.',
      annotations: [
        {
          type: 'Key quote',
          note: '"Half turn to go yet turning stay" is a beautiful image of reluctant parting — she leaves but turns back, cannot quite go. It captures the pattern of her relationship: always a little reluctant to leave.',
          color: '#f59e0b',
        },
        {
          type: 'Repetition (polyptoton)',
          note: '"Turn… turning" — the same verb repeated in different forms mimics the physical motion of turning back. The grammar enacts the gesture.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Remember me when no more day by day',
      annotations: [
        {
          type: 'Anaphora',
          note: '"Remember me" is repeated at the start of line 5, echoing line 1. This anaphora becomes the poem\'s emotional anchor. Memory is the act she asks for again and again.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'You tell me of our future that you planned:',
      annotations: [
        {
          type: 'Pathos',
          note: 'The beloved "plans" their future together — but we already know there is no future for them. The ordinary, hopeful act of future-planning becomes poignant because it is about to be cut short.',
          color: '#ef4444',
        },
        {
          type: 'Biography',
          note: 'Rossetti was twice engaged but never married — both engagements broken on religious grounds. Critics often read the poem as her reflection on her own cancelled futures.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Only remember me; you understand',
      annotations: [
        {
          type: 'Key quote',
          note: '"Only remember me" — the word "only" is crucial. She does not ask for grief, tears, or tribute. Just memory. The word "only" suggests both a modest request and the bare minimum of what she wants.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'It will be late to counsel then or pray.',
      annotations: [
        {
          type: 'Religious',
          note: 'Rossetti was deeply religious (High Anglican). "Counsel" (advice) and "pray" are her twin forms of care. Both become impossible once she is dead. The line acknowledges the limits of what the living can do for the dead.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Yet if you should forget me for a while',
      annotations: [
        {
          type: 'Volta',
          note: 'Classic sonnet volta — the turn at line 9. The word "Yet" signals a complete change in direction. Everything that follows reverses what came before. She moves from asking for memory to permitting forgetting.',
          color: '#a855f7',
        },
        {
          type: 'Key quote',
          note: '"For a while" keeps the forgetting small and temporary. Rossetti is not asking her beloved to forget forever, only to be allowed to forget when grief becomes too much.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And afterwards remember, do not grieve:',
      annotations: [
        {
          type: 'Selflessness',
          note: "This is where the poem's tenderness peaks. Do not grieve — even though he would be remembering that he forgot her. She releases him from the guilt of forgetting.",
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'For if the darkness and corruption leave',
      annotations: [
        {
          type: 'Ambiguity',
          note: '"Darkness and corruption" are literal images of the grave — bodies decaying in darkness. But they can also refer to grief\'s darkness and the corrupting effects of mourning. Rossetti lets both readings stand.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'A vestige of the thoughts that once I had,',
      annotations: [
        {
          type: 'Key quote',
          note: '"A vestige" — a trace, a remnant. The idea is that even a fragment of her thoughts may survive her. It is a cautious, humble image of what might be left of her mind.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Better by far you should forget and smile',
      annotations: [
        {
          type: 'Key quote',
          note: 'One of the most-quoted lines in Victorian poetry. She prefers his happiness to her being remembered. This is radical selflessness — her legacy matters less than his wellbeing.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Than that you should remember and be sad.',
      annotations: [
        {
          type: 'Final couplet',
          note: "The final line completes the volta's reversal. She began by asking to be remembered; she ends by telling him it is better to forget if remembering will hurt. The poem's emotional logic has moved from self-concern to pure love.",
          color: '#a855f7',
        },
      ],
    },
  ],

  context: `
    <h3>Christina Rossetti (1830–1894)</h3>
    <p>Christina Rossetti was one of the most important Victorian poets. She was the sister of the Pre-Raphaelite painter and poet Dante Gabriel Rossetti, and grew up in a literary and artistic London family of Italian descent. She published her first poems at age 17 and became famous for her 1862 collection <em>Goblin Market and Other Poems</em>.</p>

    <h3>Faith</h3>
    <p>Rossetti was a <strong>devoted High Anglican Christian</strong>, and her religious faith shapes almost all her poetry. She wrote hymns (including "In the Bleak Midwinter"), devotional works and poems about death, resurrection and the soul. "Remember" is not explicitly religious but is informed by her Christian acceptance of death as a passage rather than an ending.</p>

    <h3>Biography: the broken engagements</h3>
    <p>Rossetti was engaged twice but never married. Her first engagement, to the painter <strong>James Collinson</strong>, was broken in 1850 when he converted back to Roman Catholicism. Her second engagement, to the scholar <strong>Charles Cayley</strong>, ended for similar religious reasons. Many critics read "Remember" as one of her many poems about lost love and the futures that never happened.</p>

    <h3>Date and publication</h3>
    <p>"Remember" was written in <strong>1849</strong>, when Rossetti was just 19 years old, and published in 1862 in <em>Goblin Market and Other Poems</em>. Its remarkable maturity — a young woman imagining her own death and releasing her beloved from grief — astonished early readers.</p>

    <h3>Victorian death culture</h3>
    <p>The Victorians were famously preoccupied with death and mourning. Mourning had elaborate social rituals — black clothes, long periods of withdrawal, memorial portraits and hair jewellery. Rossetti\'s poem is striking because it resists these rituals. She does not want her beloved to be consumed by grief; she wants him to smile. This was a gentler, more modern view of mourning.</p>

    <h3>Place in the canon</h3>
    <p>"Remember" has become one of the most frequently read poems at funerals and memorial services. Its balance of grief and consolation, and its quiet permission to move on, make it one of the tenderest poems about dying in English.</p>
  `,

  summary: `Lines 1–4 (first quatrain): The speaker asks her beloved to remember her after she has died. She imagines her death as going "far away into the silent land". She describes the physical losses — he can no longer hold her hand, and she can no longer half-turn back the way lovers do when parting reluctantly.

Lines 5–8 (second quatrain): The speaker continues her request. She asks him to remember her when he can no longer tell her about "our future that you planned". She says "Only remember me" — a simple, modest request. Once she is dead, it will be too late for him to offer her counsel or prayer.

Lines 9–14 (sestet — the turn): The poem\'s volta comes at line 9 with "Yet". The speaker now changes her request. If her beloved should happen to forget her for a while — and then remember that he forgot — she does not want him to grieve about it. If forgetting her will bring him peace, that is better than remembering with sadness. She ends by saying it is "Better by far you should forget and smile / Than that you should remember and be sad."

Overall meaning: The poem is a love letter about dying. At first the speaker asks to be remembered, but halfway through she reverses herself: her beloved\'s happiness matters more than being remembered. The poem moves from the speaker\'s own concern for her legacy to a selfless concern for her beloved\'s peace of mind. It is a deeply tender meditation on how love can release the other from obligation — even the obligation of memory.`,

  formAndStructure: `Form: A Petrarchan (Italian) sonnet — 14 lines divided into an octave (eight lines) and a sestet (six lines). Rossetti\'s choice of Petrarchan form, rather than Shakespearean, is significant — it gives the volta greater dramatic weight.

Rhyme scheme: ABBA ABBA CDD ECE. The octave follows the strict Italian pattern with only two rhymes, creating a closed, meditative feel. The sestet\'s looser rhyme scheme reflects the softening and freeing-up of the speaker\'s position.

Metre: Iambic pentameter throughout — ten syllables per line, five unstressed-stressed feet. The regularity is gentle and speech-like, suited to the poem\'s tone of quiet address.

The octave (lines 1–8): The speaker asks to be remembered. The repeated imperative "Remember me" (lines 1, 5, 7) anchors this section. She imagines concrete losses — hand-holding, future-planning, counsel, prayer. The tone is pleading but calm.

The sestet (lines 9–14): The volta at line 9 reverses everything. "Yet if you should forget me for a while…" The speaker now permits forgetting. The tone becomes gentler still, and by the final couplet she has reversed her request entirely. The structural break between octave and sestet is the hinge of the poem.

Volta: The turn is marked by "Yet" at the start of line 9 — one of the cleanest, quietest voltas in English poetry. It does not shout; it simply reconsiders. This is a volta of emotional generosity, not of argument.

Repetition: "Remember me" repeats (lines 1, 5, 7) through the octave, establishing the request. "Forget" appears twice in the sestet. The word-count shift from "remember" to "forget" tracks the poem\'s emotional journey.

Enjambment and caesura: The lines flow gently into each other, with most of the pauses coming at line ends. The poem\'s steadiness — no sudden stops, no violent breaks — matches its tone of serene acceptance.

Tone: Tender, quiet, loving. Remarkably, there is no anger, no fear, no bitterness. The speaker accepts her own death as given and focuses entirely on the wellbeing of her beloved. This calmness is the poem\'s most distinctive feature.`,

  keyQuotes: [
    {
      quote: 'Remember me when I am gone away, / Gone far away into the silent land',
      analysis:
        'The opening imperative — "Remember me" — is the poem\'s central request. "Gone away" is a gentle euphemism for death, treating it as a journey rather than an ending. "The silent land" is the poem\'s most striking metaphor for death: a place without voices, where communication between the living and the dead is no longer possible. The soft alliteration in "silent" and "land" gives the line a hushed, reverent quality.',
      themes: ['Death', 'Memory', 'Farewell'],
      analysisAr:
        'صيغةُ الأمر الافتتاحيّة — "Remember me" — هي الطلبُ المحوريّ للقصيدة. وعبارة "gone away" كنايةٌ رقيقة عن الموت، تجعله رحلةً لا نهاية. أمّا "the silent land" فأبلغ استعارات القصيدة للموت: بلدٌ بلا أصوات، انقطع فيه التواصل بين الأحياء والأموات. والجناسُ الناعم في "silent" و"land" يُكسب السطرَ هدوءاً مهيباً.',
      themesAr: ['الموت', 'الذكرى', 'الوداع'],
    },
    {
      quote: 'Nor I half turn to go yet turning stay',
      analysis:
        'A beautifully observed image of parting. Anyone who has ever said goodbye to someone they love knows the gesture — half turning to leave, then turning back, lingering. The repetition "turn… turning" mimics the motion of the body itself. Rossetti captures not the idea of losing a beloved but the specific physical reluctance that real goodbyes involve.',
      themes: ['Parting', 'Intimacy', 'Reluctance'],
      analysisAr:
        'صورةُ وداعٍ مرصودةٌ ببراعة. كلُّ من ودّع حبيباً يعرف هذه الهيئة — التفاتةٌ نصفيّة لينصرف، ثمّ التفاتةٌ معاكسةٌ ليبقى. وتكرارُ "turn… turning" يحاكي حركةَ الجسد ذاتَها. التقطت Rossetti لا فكرةَ فقد الحبيب فحسب، بل التردّدَ الجسديّ المخصوص في الوداعات الحقيقيّة.',
      themesAr: ['الوداع', 'الحميميّة', 'التردّد'],
    },
    {
      quote: 'You tell me of our future that you planned',
      analysis:
        'The beloved\'s act of planning a future together becomes poignant because the reader knows there is no future for them. The verb "planned" is in the past — even as they talk about what is to come, their plans are already historical. The line has special resonance given Rossetti\'s own broken engagements. She knew what it felt like to imagine a future with someone that never arrived.',
      themes: ['Lost futures', 'Plans', 'Pathos'],
      analysisAr:
        'فعلُ الحبيب في رسمِ مستقبلٍ مشترك يكتسب وجعاً، لأنّ القارئ يعلم أنّه لا مستقبل لهما. وزمنُ "planned" الماضي: فحتى وهما يتحدّثان عمّا سيأتي، باتت خططُهما تاريخاً. وللسطر رنينٌ خاصّ إذا تذكّرنا خِطبَتي Rossetti المنفسختين. عرفت في حياتها وقعَ أن يرسم المرءُ مستقبلاً مع آخر، ثمّ لا يحضرُ ذلك المستقبل.',
      themesAr: ['المستقبلات المفقودة', 'الخطط', 'الباثوس'],
    },
    {
      quote: 'Only remember me',
      analysis:
        'The word "only" is the poem\'s quiet centre. She asks for nothing else — not grief, not tears, not monuments. Just memory, and the bare fact of being remembered. "Only" simultaneously lowers and raises the stakes: it is a modest request, but also a declaration that memory is the one thing she cannot live without. The simplicity of the phrase matches the simplicity of what she wants.',
      themes: ['Modesty', 'Memory', 'Request'],
      analysisAr:
        'لفظةُ "only" هي قلب القصيدة الهادئ. لا تطلب شيئاً سواه — لا حِداداً ولا دموعاً ولا نُصُباً. الذكرى وحدها، أن تُذكَر، لا أكثر. تُهبط "only" المُطالَبَةَ وتُعليها في آنٍ معاً: طلبٌ متواضع وإعلانٌ بأنّ الذكرى وحدها ما لا يمكنها الاستغناء عنه. وبساطةُ العبارة على قَدرِ بساطة ما تطلبه.',
      themesAr: ['التواضع', 'الذكرى', 'الطلب'],
    },
    {
      quote: 'Yet if you should forget me for a while / And afterwards remember, do not grieve',
      analysis:
        'The volta of the sonnet. The word "Yet" quietly reverses everything. The speaker now permits forgetting — but only "for a while", and only on condition that when he remembers, he does not grieve about it. This is extraordinarily gentle and generous. She has imagined his future grief at having forgotten her and tries to release him from it in advance.',
      themes: ['Forgetting', 'Forgiveness', 'Generosity'],
      analysisAr:
        'الـ volta في السونيتة. لفظةُ "Yet" تقلب كلّ شيءٍ بهدوء. تأذن المتكلّمةُ الآن بالنسيان — لكن "for a while" فقط، وبشرط ألّا يحزن إذا تذكّر أنّه نَسي. كرَمٌ ولطفٌ نادران. تخيّلت حزنَه المستقبليّ على نسيانه إيّاها، فحاولت أن تُحرِّره منه سَلَفاً.',
      themesAr: ['النسيان', 'العفو', 'الكَرَم'],
    },
    {
      quote: 'A vestige of the thoughts that once I had',
      analysis:
        '"Vestige" means a trace, a remnant. Rossetti is extraordinarily humble about what will survive of her — not her whole mind, not her love, just "a vestige". The line captures the uncertain Christian hope of her time: that something of the mind may persist after death, but nothing guaranteed. It is a cautious, honest image of afterlife.',
      themes: ['Afterlife', 'Humility', 'Legacy'],
      analysisAr:
        'كلمة "vestige" تعني أَثَراً أو بقيّةً. تتواضع Rossetti بشكلٍ لافت في وصف ما سيبقى منها — لا عقلَها كلّه، لا حبَّها، إنّما "a vestige". يلتقط السطر الرجاءَ المسيحيّ الحذِر في عصرها: قد يبقى شيءٌ من الذهن بعد الموت، لكن لا ضمان. صورةٌ حذرةٌ صادقةٌ للحياة الآخرة.',
      themesAr: ['الحياة الآخرة', 'التواضع', 'الإرث'],
    },
    {
      quote: 'Better by far you should forget and smile / Than that you should remember and be sad',
      analysis:
        'The final couplet is one of the most quoted lines in Victorian poetry. The speaker places her beloved\'s happiness above her own legacy. "Forget and smile" is set directly against "remember and be sad" — and forgetting wins. This is radical selflessness: she would rather be lost from his memory than be a source of pain. The poem ends not with a plea for remembrance but with a release from it.',
      themes: ['Selflessness', 'Love beyond self', 'Release'],
      analysisAr:
        'البيت الختاميّ من أكثر أسطر الشعر الفيكتوريّ تداولاً. تضع المتكلّمةُ سعادةَ حبيبها فوق ميراثها هي. "Forget and smile" في مقابل مباشر لـ"remember and be sad" — والنسيانُ يفوز. تجرّدٌ راديكاليّ من الذات: تُؤثر أن تَضيع من ذاكرته على أن تكون مصدرَ ألم. تنتهي القصيدة لا بتوسّلٍ للذكرى بل بإطلاقٍ منها.',
      themesAr: ['التجرّد', 'الحبّ بعد الذات', 'الإفراج'],
    },
    {
      quote: 'It will be late to counsel then or pray',
      analysis:
        'A quietly devastating line. Once she is dead, the beloved can no longer give her counsel or offer her prayers — or rather, prayers for her will be possible but their effect is uncertain. The line acknowledges the bitter truth that death puts an end to the small, daily gestures of care that make up a relationship. "Late" is doing enormous emotional work here.',
      themes: ['Limits of care', 'Finality', 'Religion'],
      analysisAr:
        'سطرٌ موجعٌ بهدوء. بعد رحيلها لن يستطيع الحبيب أن يُسديها نصحاً أو يدعوَ لها — أو فلنقل إنّ الدعاء سيكون ممكناً لكن أثرَه غامض. يعترف السطر بالحقيقة المرّة بأنّ الموت يُنهي تلك اللفتات اليوميّة الصغيرة من العناية التي تتكوّن منها العلاقات. ولفظةُ "Late" تحمل ثقلاً عاطفيّاً ضخماً.',
      themesAr: ['حدود العناية', 'القطعيّة', 'الدين'],
    },
  ],

  languageDevices: [
    {
      device: 'Anaphora',
      example:
        'Remember me when I am gone away… / Remember me when no more day by day… / Only remember me',
      effect:
        'The repetition of "Remember me" at the start of lines 1, 5 and 7 anchors the octave in a single request. The anaphora gives the poem the feel of a whispered litany — almost a prayer. When the sestet replaces "remember" with "forget", the emotional shift is even more striking because of how insistently she had asked for memory.',
      lineRef: 0,
      effectAr:
        'تكرارُ "Remember me" في مفتتح السطور 1 و5 و7 يُرسي الـ octave على طلبٍ واحد. ويُكسب الـ anaphora القصيدةَ وقعَ ابتهالٍ هامس — يكاد يكون صلاة. وحين يستعيض الـ sestet عن "remember" بـ"forget"، يصير التحوّلُ العاطفيّ أشدّ وقعاً بسبب إلحاحها السابق على الذكرى.',
    },
    {
      device: 'Metaphor',
      example: 'Gone far away into the silent land',
      effect:
        'Death becomes "the silent land" — a quiet country you travel to. The metaphor domesticates death, making it a place rather than an absence. "Silent" is the key adjective: communication is what ends. The metaphor softens the harshness of dying without denying its finality.',
      lineRef: 1,
      effectAr:
        'يصير الموت "the silent land" — بلداً صامتاً يرتحل إليه المرء. تُؤنِس الاستعارةُ الموتَ، فتجعله مكاناً لا غياباً. ولفظة "silent" هي المفتاح: التواصلُ هو ما ينتهي. تُليّن الاستعارةُ قسوةَ الموت دون أن تُنكر قطعيّته.',
    },
    {
      device: 'Volta',
      example: 'Yet if you should forget me for a while',
      effect:
        'The structural turn of the sonnet. The word "Yet" is small but it reverses the poem\'s direction entirely. Before the volta, the speaker asks to be remembered; after it, she permits forgetting. This kind of volta — of emotional generosity rather than logical argument — is rare and gives the poem its tenderness.',
      lineRef: 8,
      effectAr:
        'الانعطافةُ البنائيّة للسونيتة. لفظة "Yet" صغيرة، لكنّها تقلب اتّجاهَ القصيدة كلّه. قبل الـ volta تطلب أن تُذكَر؛ بعدها تأذن بالنسيان. وهذا الضربُ من الـ volta — كرَمٌ عاطفيّ لا حُجّةٌ منطقيّة — نادر، ومنه تكتسب القصيدةُ رقّتَها.',
    },
    {
      device: 'Antithesis',
      example: 'forget and smile… remember and be sad',
      effect:
        "The final couplet places forgetting+happiness directly against remembering+sadness. The parallel construction makes the choice crystal clear. Rossetti argues, through this balance, that the beloved's emotional wellbeing outweighs her own place in his memory. The antithesis is the poem's ethical argument.",
      lineRef: 12,
      effectAr:
        'يضع البيت الختاميّ "النسيان + الابتسامة" في مقابل مباشر لـ"الذكرى + الحزن". والتركيبُ المتوازي يُوضح الاختيار. تُحاجج Rossetti عبر هذا التوازن بأنّ راحةَ الحبيب العاطفيّة فوق مكانتها في ذاكرته. هذه الـ antithesis هي حُجّةُ القصيدة الأخلاقيّة.',
    },
    {
      device: 'Euphemism',
      example: 'gone away… silent land… darkness and corruption',
      effect:
        'Rossetti rarely uses the word "death" directly. Instead she circles it with gentle alternatives: "gone away", "silent land", and even the more direct "darkness and corruption" are still metaphorical rather than literal. The accumulation of euphemisms softens death and lets the poem remain a love poem rather than a horror.',
      lineRef: 1,
      effectAr:
        'قلّما تستعمل Rossetti كلمة "death" مباشرةً. وتُحيط بها بدائلَ ناعمة: "gone away" و"silent land"، بل حتى "darkness and corruption" الأشدّ صراحة تبقى استعاريّة لا حرفيّة. وتراكمُ التلطّفات يُليّن الموتَ ويُبقي القصيدةَ قصيدةَ حبٍّ لا قصيدةَ رعب.',
    },
    {
      device: 'Iambic pentameter',
      example: 'Re-MEM-ber ME when I am GONE a-WAY',
      effect:
        "The gentle, steady five-beat rhythm gives the poem a speech-like calm. Unlike Shakespeare's Sonnet 116, which disrupts its metre for emotional effect, Rossetti keeps her rhythm almost perfectly regular — a sign of the speaker's self-control and acceptance. The steady beat matches the steady voice of a woman facing her own death without panic.",
      lineRef: 0,
      effectAr:
        'الإيقاعُ الرقيق المستقرّ من خمس تفعيلات يكسب القصيدةَ هدوءاً يشبه الكلام العاديّ. خلافاً لـSonnet 116 لـShakespeare التي تكسر وزنَها لأثرٍ عاطفيّ، تُبقي Rossetti إيقاعَها منتظماً على نحوٍ شبه تامّ — علامةٌ على ضبط المتكلّمة لنفسها وقبولها. والإيقاعُ الثابت يحاكي ثبات صوت امرأةٍ تواجه موتَها دون فزع.',
    },
  ],

  contextAr: `
    <h3>Christina Rossetti (1830–1894)</h3>
    <p>كانت Christina Rossetti واحدةً من أبرز شعراء العصر الفيكتوريّ. هي شقيقةُ الرسّام والشاعر الـPre-Raphaelite الـDante Gabriel Rossetti، نشأت في عائلةٍ لندنيّة أدبيّةٍ فنّيّة من أصلٍ إيطاليّ. نشرت أوّل قصائدها في سنّ السابعة عشرة، واشتُهرت بمجموعتها <em>Goblin Market and Other Poems</em> سنة 1862.</p>

    <h3>الإيمان</h3>
    <p>كانت Rossetti <strong>مسيحيّةً أنغليكانيّةً عالية الكنيسة</strong> ملتزمة، وإيمانُها يصبغ كلّ شعرها تقريباً. كتبت ترانيم (منها "In the Bleak Midwinter")، ومدوّناتٍ تعبّديّة، وقصائد عن الموت والقيامة والروح. ليست "Remember" قصيدةً دينيّةً صراحةً، لكنّها تتغذّى من قبولها المسيحيّ للموت بوصفه عبوراً لا نهاية.</p>

    <h3>سيرة: الخِطبتان المنفسختان</h3>
    <p>خُطبت Rossetti مرّتين ولم تتزوّج قطّ. انفسخت خِطبتها الأولى للرسّام <strong>James Collinson</strong> سنة 1850 حين عاد إلى الكاثوليكيّة الرومانيّة. وانتهت خِطبتها الثانية للعالم <strong>Charles Cayley</strong> لأسبابٍ دينيّة مماثلة. ويقرأ كثيرٌ من النقّاد "Remember" بوصفها واحدةً من قصائدها الكثيرة عن الحبّ المفقود والمستقبلات التي لم تتحقّق.</p>

    <h3>التاريخ والنشر</h3>
    <p>كُتبت "Remember" سنة <strong>1849</strong>، حين كانت Rossetti في التاسعة عشرة، ونُشرت سنة 1862 في <em>Goblin Market and Other Poems</em>. ونضجُها اللافت — شابّةٌ تتخيّل موتَها وتُحرّر حبيبها من الحزن — أدهش القرّاءَ الأوائل.</p>

    <h3>ثقافةُ الموت الفيكتوريّة</h3>
    <p>اشتُهر الفيكتوريّون بانشغالهم بالموت والحداد. كانت للحداد طقوسٌ اجتماعيّةٌ مفصّلة — ثيابٌ سوداء، فترات انعزالٍ طويلة، صور تذكاريّة، حُلِيٌّ مصنوعةٌ من خصلات شعر الموتى. والقصيدة لافتةٌ لأنّها تقاوم هذه الطقوس. لا تريد لحبيبها أن يستهلكه الحزن؛ تريده أن يبتسم. كان هذا تصوّراً أرقّ وأقربَ إلى الحداثة لمعنى الحداد.</p>

    <h3>المكانة في القانون الأدبيّ</h3>
    <p>أصبحت "Remember" من أكثر القصائد قراءةً في الجنائز ومجالس الذكرى. ومن توازنها بين الحزن والعزاء، ومن الإذن الهادئ الذي تمنحه للمضيّ قُدُماً، صارت من أرقّ القصائد عن الموت في الإنجليزيّة.</p>
  `,

  summaryAr: `السطور 1–4 (الرباعيّة الأولى): تطلب المتكلّمةُ من حبيبها أن يتذكّرها بعد رحيلها. تتخيّل موتَها رحلةً "far away into the silent land". وتذكر الفقدان الجسديّ — لن يقدر بعدُ على الإمساك بيدها، ولا تستطيع هي أن تستدير نصفَ التفاتةٍ كما يفعل العاشقون حين يفترقون متردّدين.

السطور 5–8 (الرباعيّة الثانية): تتابع المتكلّمةُ طلبها. تسأله أن يتذكّرها حين لا يستطيع أن يحدّثها عن "our future that you planned". وتقول "Only remember me" — طلبٌ بسيطٌ متواضع. فمتى ماتت، فات الأوانُ على أن يُسديها نصيحةً أو يدعوَ لها.

السطور 9–14 (الـ sestet — الانعطافة): تأتي الـ volta عند السطر التاسع بكلمة "Yet". تُغيّر المتكلّمةُ الآن طلبها. إن نسيها حبيبُها لفترة — ثمّ تذكّر أنّه نسي — فلا تريده أن يحزن. وإن كان النسيانُ سيمنحه السلام، فهو أفضل من الذكرى الحزينة. وتختم بقولها إنّ "Better by far you should forget and smile / Than that you should remember and be sad."

المعنى الإجماليّ: القصيدة رسالةُ حبٍّ عن الاحتضار. تبدأ المتكلّمةُ بطلب الذكرى، لكنّها تنقلب على نفسها في نصف الطريق: راحةُ الحبيب أهمّ من أن تُذكَر. تنتقل القصيدة من الانشغال الذاتيّ بالميراث إلى انشغالٍ متجرّدٍ بسلام الحبيب الذهنيّ. تأمّلٌ بالغ الرقّة في كيف يمكن للحبّ أن يُحرّر الآخرَ من الالتزام — حتى التزامِ الذكرى.`,

  formAndStructureAr: `الشكل: سونيتة بتراركيّة (إيطاليّة) — أربعة عشر سطراً مقسّمة إلى octave (ثمانية أسطر) وsestet (ستّة أسطر). واختيارُ Rossetti للشكل البتراركيّ بدل الشيكسبيريّ ذو دلالة — يمنح الـ volta ثقلاً درامياً أكبر.

نظام القافية: ABBA ABBA CDD ECE. يتبع الـ octave النمطَ الإيطاليّ الصارم بقافيتين فقط، فيمنح إحساساً بالانغلاق والتأمّل. ويعكس النظامُ الأكثر مرونةً في الـ sestet تليينَ موقف المتكلّمة وتحرّرَه.

الوزن: iambic pentameter من بدايتها إلى نهايتها — عشرةُ مقاطع للسطر، خمس تفعيلات (مقطعٌ غير مُشدّد ثمّ مُشدّد). الانتظامُ ناعمٌ شبيه بالكلام، يلائم نبرةَ القصيدة الهادئة في النداء.

الـ octave (السطور 1–8): تطلب المتكلّمةُ أن تُذكَر. صيغةُ الأمر المكرَّرة "Remember me" (في السطور 1 و5 و7) تُرسي هذا القسم. وتتخيّل خساراتٍ ملموسة — الإمساك بيد، رسم المستقبل، النصح، الدعاء. النبرة متوسّلةٌ هادئة.

الـ sestet (السطور 9–14): تقلب الـ volta عند السطر التاسع كلَّ شيء. "Yet if you should forget me for a while…" تأذن المتكلّمةُ الآن بالنسيان. تزداد النبرة رِقّةً، وفي البيت الختاميّ تكون قد عكست طلبَها تماماً. والكسرُ البنائيّ بين الـ octave والـ sestet هو مفصلُ القصيدة.

الـ volta: تُؤشّر إليها لفظةُ "Yet" في مفتتح السطر التاسع — وهي من أنظف وأهدأ الـ voltas في الشعر الإنجليزيّ. لا تصيح؛ تُعيد النظر فحسب. هذه volta كرَمٍ عاطفيّ لا volta حُجّةٍ منطقيّة.

التكرار: "Remember me" يتكرّر (في السطور 1 و5 و7) عبر الـ octave، مُرسياً الطلب. أمّا "Forget" فيظهر مرّتين في الـ sestet. وانزياح الإحصاء من "remember" إلى "forget" يحاكي رحلةَ القصيدة العاطفيّة.

الـ enjambment والـ caesura: تتدفّق السطور بعضُها في بعضٍ بهدوء، وتقع معظم الوقفات عند نهايات الأسطر. ثباتُ القصيدة — لا انكساراتٌ مفاجئة ولا توقّفاتٌ عنيفة — يلائم نبرةَ القبول الصافي.

النبرة: حنون، هادئة، عاشقة. ومن اللافت أنّ لا غضب ولا خوف ولا مرارة. تتقبّل المتكلّمةُ موتَها مُسلَّماً وتُركّز انتباهها كلّه على راحة حبيبها. وهذا الهدوء أبرز ما يُميّز القصيدة.`,
}

/* ── Comparison poems ─────────────────────────────────────────────── */

const comparisons = [
  {
    title: 'Sonnet 116',
    poet: 'William Shakespeare',
    href: '/igcse/edexcel/poetry/sonnet-116',
    reason:
      'Both are sonnets about the nature of love and time. Shakespeare argues love is "ever-fixed" and does not change; Rossetti asks her beloved to remember her but is willing to release him from memory. Compare the absolute constancy of Shakespeare\'s love with Rossetti\'s more flexible, self-sacrificing version.',
    themes: ['Sonnet form', 'Love and time', 'Enduring love'],
  },
  {
    title: 'Do not go gentle into that good night',
    poet: 'Dylan Thomas',
    href: '/igcse/edexcel/poetry',
    reason:
      'Both poems are about dying. Thomas urges fierce resistance — "rage, rage against the dying of the light". Rossetti offers calm acceptance and release. Compare two completely opposite attitudes to death: defiance and serenity.',
    themes: ['Death', 'Acceptance vs. defiance'],
  },
  {
    title: 'Poem at Thirty-Nine',
    poet: 'Alice Walker',
    href: '/igcse/edexcel/poetry',
    reason:
      "Both poems explore how the living remember the dead. Walker looks back at her father's gentle presence; Rossetti imagines being looked back at. Compare how each writer imagines memory as a living act.",
    themes: ['Memory', 'Loss', 'Continuing love'],
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function RememberPage() {
  return (
    <div className="space-y-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Anthology
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Remember</h1>
            <p className="text-body-sm text-muted-foreground">
              Christina Rossetti &middot; Edexcel IGCSE Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Edexcel IGCSE Literature
            </Badge>
          </div>
        </div>
      </div>

      <InteractivePoemViewer poem={poem} />

      <StudyTools textName="Remember" textType="poem" examBoard="Edexcel" variant="compact" />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          The Edexcel exam asks you to compare the named poem with another from the anthology. These
          are strong pairings for Remember.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90">
                {c.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{c.poet}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.reason}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
