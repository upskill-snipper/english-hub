'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
const poemData: PoemData = {
  title: "Sonnet 29 -- 'I think of thee!'",
  poet: 'Elizabeth Barrett Browning',
  lines: [
    {
      text: 'I think of thee! -- my thoughts do twine and bud',
      annotations: [
        {
          type: 'Extended metaphor',
          note: 'Thoughts are compared to a vine plant that grows around a tree (her lover). "Twine and bud" suggests organic, natural growth -- her love is alive and flourishing.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'About thee, as wild vines, about a tree,',
      annotations: [
        {
          type: 'Simile',
          note: '"Wild vines" suggests her thoughts are uncontrolled and natural. The tree (the lover) is the solid structure around which her thinking grows.',
          color: '#10b981',
        },
      ],
    },
    {
      text: "Put out broad leaves, and soon there's nought to see",
      annotations: [
        {
          type: 'Imagery',
          note: 'The vine grows so thickly that it obscures the tree entirely. Her thoughts about her lover have become so consuming that they obscure the real person.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Except the straggling green which hides the wood.',
      annotations: [
        {
          type: 'Key realisation',
          note: 'This is the problem she identifies: her fantasy ("straggling green") hides the reality ("wood"). Her imagined version of her lover has replaced the actual person.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Yet, O my palm-tree, be it understood',
      annotations: [
        {
          type: 'Apostrophe',
          note: 'She addresses her lover directly as "my palm-tree" -- a warm, exotic, strong image. The exclamatory "O" shows emotional intensity. "Be it understood" signals an important correction coming.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'I will not have my thoughts instead of thee',
      annotations: [
        {
          type: 'Volta',
          note: 'The volta (turn) of the sonnet. EBB rejects fantasy in favour of reality. She does not want her imagined version -- she wants the real, physical person. This is a powerful assertion of desire.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Who art dearer, better! Rather, instantly,',
      annotations: [
        {
          type: 'Exclamation',
          note: 'The exclamation and "Rather, instantly" convey urgency and passion. The real person is "dearer, better" than any fantasy -- a declaration of genuine, grounded love.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Renew thy presence; as a strong tree should,',
      annotations: [
        {
          type: 'Imperative',
          note: '"Renew thy presence" is a command -- EBB takes charge, demanding her lover\'s physical presence. The tree is now "strong", asserting the lover\'s masculine vitality.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Rustle thy boughs and set thy trunk all bare,',
      annotations: [
        {
          type: 'Sensual imagery',
          note: '"Set thy trunk all bare" has strong sensual and sexual undertones -- she desires physical intimacy, not just spiritual connection. Remarkably bold for a Victorian woman poet.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'And let these bands of greenery which insphere thee',
      annotations: [
        {
          type: 'Self-awareness',
          note: 'EBB acknowledges that her thoughts ("bands of greenery") have imprisoned ("insphere") her lover in a cage of fantasy. She is self-critical about her own idealisation.',
          color: '#8b5cf6',
        },
      ],
    },
    {
      text: 'Drop heavily down, -- burst, shattered, everywhere!',
      annotations: [
        {
          type: 'Violent imagery',
          note: 'The vine-thoughts are violently destroyed -- "burst, shattered, everywhere!" The aggressive verbs and caesura create a sense of forceful breaking free. Fantasy is actively rejected.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Because, in this deep joy to see and hear thee',
      annotations: [
        {
          type: 'Sensory language',
          note: '"See and hear" -- EBB wants physical, sensory experience of her lover, not abstract thoughts. The "deep joy" of reality surpasses any imagined pleasure.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And breathe within thy shadow a new air,',
      annotations: [
        {
          type: 'Intimacy',
          note: 'Breathing in his shadow suggests physical closeness -- sharing the same space and air. "New air" implies his presence transforms and renews her entire world.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'I do not think of thee -- I am too near thee.',
      annotations: [
        {
          type: 'Paradox',
          note: "The poem's brilliant final paradox: she began by thinking of him obsessively, but his actual presence makes thought unnecessary. Reality transcends imagination. Presence replaces absence.",
          color: '#ef4444',
        },
      ],
    },
  ],
  context: `<p><strong>Elizabeth Barrett Browning (1806-1861)</strong> wrote this sonnet as part of <em>Sonnets from the Portuguese</em> (1850), a sequence of 44 love sonnets addressed to her husband, <strong>Robert Browning</strong>.</p>
<p>The sonnets document their <strong>secret courtship</strong>. Elizabeth's controlling father forbade any of his children from marrying, so the couple courted in secret through letters and visits. They eventually eloped to Italy in 1846.</p>
<p>As a woman writing passionate love poetry in the <strong>Victorian era</strong>, EBB was breaking significant conventions. Women were expected to be passive objects of love, not active desiring subjects. This sonnet is remarkable for its <strong>female sexual agency</strong> -- she demands her lover's physical presence and uses imagery with sensual undertones.</p>
<p>The title "Sonnets from the Portuguese" was a private joke -- Robert called Elizabeth "my little Portuguese" because of her dark complexion, and the title disguised the poems as translations rather than personal confessions.</p>`,
  contextAr: `<p><strong>Elizabeth Barrett Browning (1806-1861)</strong> كتبت هالـsonnet ضمن مجموعتها <em>Sonnets from the Portuguese</em> (1850)، وهي سلسلة فيها 44 سونيتة حب موجّهة لزوجها <strong>Robert Browning</strong>.</p>
<p>الـsonnets توثّق <strong>خطوبتهم السرّية</strong>. أبو Elizabeth كان متسلّط ومانع كل أولاده من الزواج، فالثنين كانوا يتراسلون ويتقابلون بالسرّ. وفي النهاية، هربوا مع بعض إلى إيطاليا سنة 1846.</p>
<p>بصفتها امرأة تكتب شعر حب عاطفي في <strong>العصر الفيكتوري</strong>، EBB كانت تكسر أعراف كبيرة. النساء كان مفروض إنهم يكونون كائنات حب خاملة، مو ذوات راغبة فاعلة. هالسونيتة مميّزة بسبب <strong>الفاعلية الجنسية الأنثوية</strong> فيها — هي تطالب بحضور حبيبها الجسدي وتستخدم صور فيها إيحاءات حسّية.</p>
<p>عنوان "Sonnets from the Portuguese" كان مزحة خاصّة — Robert كان ينادي Elizabeth "my little Portuguese" بسبب بشرتها الداكنة، والعنوان موّه القصائد على إنها ترجمات بدل من اعترافات شخصية.</p>`,
  summary: `The speaker confesses that she thinks obsessively about her lover. Using an extended metaphor, she compares her thoughts to wild vines growing around a tree -- they have become so thick that they hide the real person beneath.\n\nAt the volta, she rejects this fantasy. She does not want her imagined version of her lover -- she wants the real, physical person, who is "dearer, better" than any thought. She commands him to assert his physical presence and shatter her fantasies like breaking vines.\n\nThe poem ends with a paradox: when he is physically present, she does not need to think of him at all, because reality transcends imagination. The poem moves from obsessive thought to joyful presence, from fantasy to reality.`,
  summaryAr: `المتكلّمة تعترف إنها تفكّر في حبيبها بشكل هوسي. تستخدم استعارة ممتدّة، تشبّه أفكارها بكروم برّية تلتفّ حول شجرة — وكبرت لدرجة إنها صارت تخفي الشخص الحقيقي تحتها.\n\nعند الـvolta، ترفض هالخيال. هي ما تبي النسخة المتخيّلة من حبيبها — تبي الشخص الحقيقي بجسده، اللي هو "dearer, better" من أي فكرة. تأمره إنه يفرض حضوره الجسدي ويحطّم خيالاتها مثل ما الكروم تنكسر.\n\nالقصيدة تنتهي بمفارقة: لمّا هو يكون حاضر جسدياً، هي ما تحتاج تفكّر فيه أصلاً، لأن الواقع يتجاوز الخيال. القصيدة تتحرّك من التفكير الهوسي إلى الحضور الفرح، من الخيال إلى الواقع.`,
  formAndStructure: `Form: Petrarchan (Italian) sonnet -- 14 lines with an octave (8 lines) and sestet (6 lines), though EBB loosens the traditional structure.\n\nVolta: The turn occurs at line 6 ("I will not have my thoughts instead of thee"), where the poem shifts from describing the problem (obsessive fantasy) to asserting the solution (demanding reality).\n\nRhyme scheme: Loosely ABBA ABBA CDC DCD, but EBB varies the Petrarchan form, reflecting her desire to break free from constraining forms -- mirroring the poem's thematic rejection of constraining thoughts.\n\nEnjambment: Heavy enjambment, especially in the octave, creates a sense of thoughts spilling over and growing uncontrollably, like the vine imagery.\n\nCaesura: Dramatic caesura in "Drop heavily down, -- burst, shattered, everywhere!" creates a violent breaking rhythm that enacts the shattering of fantasy.\n\nParadox: The final line reverses the opening -- from "I think of thee!" to "I do not think of thee", creating a complete structural arc from absence to presence.`,
  formAndStructureAr: `الشكل: PETRARCHAN SONNET (سونيتة بيتراركية إيطالية) — 14 بيت مع octave (ثمانية أبيات) وsestet (ستّة أبيات)، رغم إن EBB ترخي البنية التقليدية شوي.\n\nVOLTA (انعطاف)\nالانعطاف يحصل في البيت السادس ("I will not have my thoughts instead of thee")، حيث القصيدة تتحوّل من وصف المشكلة (الخيال الهوسي) إلى تأكيد الحل (المطالبة بالواقع).\n\nنمط القافية\nبشكل فضفاض ABBA ABBA CDC DCD، بس EBB تنوّع في الشكل البيتراركي. هالشي يعكس رغبتها تتحرّر من القوالب المقيّدة — ويعكس بنيوياً رفض القصيدة الموضوعي للأفكار المقيّدة.\n\nENJAMBMENT\nالاستخدام المكثّف للـenjambment، خصوصاً في الـoctave، يعطي إحساس إن الأفكار تطفح وتنمو بدون سيطرة، مثل صورة الكروم.\n\nCAESURA\nالـcaesura الدرامية في "Drop heavily down, -- burst, shattered, everywhere!" تخلق إيقاع كسر عنيف يجسّد لحظة تحطّم الخيال.\n\nPARADOX (مفارقة)\nالبيت الأخير يعكس الافتتاحية — من "I think of thee!" إلى "I do not think of thee"، ويخلق قوس بنيوي كامل من الغياب إلى الحضور.`,
  keyQuotes: [
    {
      quote: 'my thoughts do twine and bud',
      analysis:
        'The vine metaphor presents her thoughts as organic and alive -- they grow naturally and uncontrollably. "Twine" suggests both affection and entanglement.',
      themes: ['Obsession', 'Nature', 'Growth'],
      analysisAr:
        'استعارة الكروم تقدّم أفكارها على إنها عضوية وحيّة — تنمو بشكل طبيعي وبدون سيطرة. كلمة "twine" تلمّح للعاطفة والتشابك في نفس الوقت.',
      themesAr: ['الهوس', 'الطبيعة', 'النموّ'],
    },
    {
      quote: 'the straggling green which hides the wood',
      analysis:
        'Her fantasies ("green") have obscured the real person ("wood"). EBB recognises the danger of idealisation -- loving an idea rather than a person.',
      themes: ['Fantasy vs. reality', 'Idealisation'],
      analysisAr:
        'خيالاتها ("green") غطّت على الشخص الحقيقي ("wood"). EBB تعترف بخطر المثالية — إنها تحب فكرة بدل ما تحب شخص.',
      themesAr: ['الخيال مقابل الواقع', 'المثالية'],
    },
    {
      quote: 'O my palm-tree',
      analysis:
        'A tender, intimate address that combines warmth (palm = exotic, strong) with possessiveness ("my"). The apostrophe creates emotional immediacy and directness.',
      themes: ['Intimacy', 'Desire', 'Tenderness'],
      analysisAr:
        'نداء حنون وحميمي يجمع بين الدفء (النخلة = غريبة وقوية) والتملّك ("my"). الـapostrophe (مخاطبة الغايب) تخلق حضور عاطفي مباشر.',
      themesAr: ['الحميمية', 'الرغبة', 'الحنان'],
    },
    {
      quote: 'I will not have my thoughts instead of thee',
      analysis:
        'A powerful assertion of agency. EBB actively chooses reality over fantasy, demanding the physical person rather than settling for imagination. Remarkably bold for a Victorian woman.',
      themes: ['Female agency', 'Choice', 'Reality'],
      analysisAr:
        'تأكيد قوي على الفاعلية. EBB تختار الواقع على الخيال بشكل فاعل، وتطالب بالشخص الجسدي بدل ما ترضى بالتخيّل. هذا جريء بشكل لافت لامرأة في العصر الفيكتوري.',
      themesAr: ['الفاعلية الأنثوية', 'الاختيار', 'الواقع'],
    },
    {
      quote: 'set thy trunk all bare',
      analysis:
        'Sensual imagery with clear physical and sexual undertones. EBB desires to see her lover as he truly is -- stripped of her projections and physically present.',
      themes: ['Desire', 'Physicality', 'Honesty'],
      analysisAr:
        'صورة حسّية فيها إيحاءات جسدية وجنسية واضحة. EBB تشتهي تشوف حبيبها على حقيقته — متجرّد من إسقاطاتها وحاضر جسدياً.',
      themesAr: ['الرغبة', 'الجسدية', 'الصدق'],
    },
    {
      quote: 'burst, shattered, everywhere!',
      analysis:
        'Violent, explosive language destroys the vine-thoughts. The caesura and exclamation create a sense of forceful liberation. Fantasy must be actively destroyed, not gently set aside.',
      themes: ['Liberation', 'Violence', 'Decisiveness'],
      analysisAr:
        'لغة عنيفة وانفجارية تدمّر الأفكار-الكروم. الـcaesura وعلامة التعجّب يخلقون إحساس بتحرّر قوي. الخيال لازم يتحطّم بفاعلية، مو يُنحّى بهدوء.',
      themesAr: ['التحرّر', 'العنف', 'الحسم'],
    },
    {
      quote: 'breathe within thy shadow a new air',
      analysis:
        'Physical closeness -- sharing breath and space. His presence transforms her world ("new air"), suggesting renewal and the life-giving quality of genuine love.',
      themes: ['Intimacy', 'Renewal', 'Presence'],
      analysisAr:
        'قرب جسدي — مشاركة النفس والفضاء. حضوره يحوّل عالمها ("new air")، ويوحي بالتجديد وبأن الحب الحقيقي يعطي الحياة.',
      themesAr: ['الحميمية', 'التجديد', 'الحضور'],
    },
    {
      quote: 'I do not think of thee -- I am too near thee',
      analysis:
        'The paradoxical conclusion: physical presence makes thought redundant. Reality is so overwhelmingly superior to fantasy that the mind falls silent in the presence of the beloved.',
      themes: ['Paradox', 'Presence', 'Transcendence'],
      analysisAr:
        'الخاتمة المتناقضة: الحضور الجسدي يخلّي التفكير زايد عن الحاجة. الواقع متفوّق على الخيال لدرجة إن العقل يسكت في حضرة الحبيب.',
      themesAr: ['المفارقة', 'الحضور', 'التعالي'],
    },
  ],
  languageDevices: [
    {
      device: 'Extended metaphor (vine/tree)',
      example: 'my thoughts do twine and bud / About thee, as wild vines, about a tree',
      effect:
        'The sustained comparison of thoughts to vines and the lover to a tree creates a vivid image of obsessive love as something organic but ultimately smothering. It gives the abstract (thought) a physical, visual form.',
      lineRef: 0,
      effectAr:
        'المقارنة المتواصلة بين الأفكار والكروم، وبين الحبيب والشجرة، تخلق صورة حيّة للحب الهوسي على إنه عضوي بس خانق في النهاية. هي تعطي للمجرّد (الفكرة) شكل مادّي مرئي.',
    },
    {
      device: 'Volta (turn)',
      example: 'I will not have my thoughts instead of thee',
      effect:
        'The Petrarchan turn marks the shift from problem to resolution. EBB moves from describing passive obsession to actively demanding reality -- a structural enactment of female agency.',
      lineRef: 5,
      effectAr:
        'الـvolta البيتراركية تأشّر التحوّل من المشكلة إلى الحل. EBB تنتقل من وصف هوس خامل إلى مطالبة فاعلة بالواقع — تجسيد بنيوي للفاعلية الأنثوية.',
    },
    {
      device: 'Imperative verbs',
      example: 'Renew thy presence... Rustle thy boughs... set thy trunk all bare',
      effect:
        "The commands assert EBB's authority and desire. A Victorian woman ordering her lover to present himself physically was remarkably bold and subverts expected gender dynamics.",
      lineRef: 7,
      effectAr:
        'الأوامر تأكّد سلطة EBB ورغبتها. امرأة في العصر الفيكتوري تأمر حبيبها إنه يحضر جسدياً شي جريء بشكل لافت، ويقلب ديناميكيات النوع الاجتماعي المتوقّعة.',
    },
    {
      device: 'Caesura',
      example: 'Drop heavily down, -- burst, shattered, everywhere!',
      effect:
        'The dramatic pause followed by explosive monosyllables physically enacts the violent destruction of fantasy. The rhythm itself shatters, mirroring the content.',
      lineRef: 10,
      effectAr:
        'التوقّف الدرامي اللي يتبعه كلمات أحادية المقطع وانفجارية يجسّد جسدياً تحطيم الخيال العنيف. الإيقاع نفسه يتشظّى، ويعكس المحتوى.',
    },
    {
      device: 'Paradox',
      example: 'I do not think of thee -- I am too near thee',
      effect:
        'The final line reverses the opening, creating a complete emotional arc. Presence makes thought unnecessary -- a profound statement about authentic love transcending intellectual idealisation.',
      lineRef: 13,
      effectAr:
        'البيت الأخير يقلب الافتتاحية، ويخلق قوس عاطفي كامل. الحضور يخلّي التفكير غير ضروري — تصريح عميق عن إن الحب الأصيل يتجاوز المثالية العقلية.',
    },
    {
      device: 'Sensual imagery',
      example: 'set thy trunk all bare / breathe within thy shadow',
      effect:
        'The physical, bodily imagery asserts sexual desire and intimacy, subverting Victorian expectations of feminine modesty and presenting female desire as natural and legitimate.',
      lineRef: 8,
      effectAr:
        'الصور الجسدية تأكّد على الرغبة الجنسية والحميمية، وتقلب توقّعات العصر الفيكتوري عن حشمة المرأة، وتقدّم الرغبة الأنثوية على إنها طبيعية ومشروعة.',
    },
    {
      device: 'Exclamatory tone',
      example: 'I think of thee! / burst, shattered, everywhere!',
      effect:
        'Exclamation marks throughout convey passionate intensity. The poem is not a calm reflection but an urgent, emotionally charged declaration of desire and love.',
      lineRef: 0,
      effectAr:
        'علامات التعجّب على طول القصيدة توصل شدّة عاطفية. هي مو تأمّل هادي — هي إعلان ملحّ ومشحون عاطفياً عن الرغبة والحب.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 's29-1',
    question: 'What is the central metaphor of Sonnet 29?',
    type: 'multiple-choice',
    options: [
      'A journey',
      "The speaker's thoughts are wild vines growing around a tree (her lover)",
      'A storm at sea',
      'A bird in a cage',
    ],
    correctIndex: 1,
    explanation:
      'EBB compares her thoughts to wild vines that "twine and bud" around a tree (her lover). The vines have grown so thick they hide the real person beneath.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 's29-2',
    question: 'What does the speaker ultimately want?',
    type: 'multiple-choice',
    options: [
      'To think about her lover more',
      'The real, physical presence of her lover rather than an imagined version',
      'To write more poetry',
      'To travel abroad',
    ],
    correctIndex: 1,
    explanation:
      'At the volta, EBB rejects her own fantasies. She wants the real person who is "dearer, better" than any thought — physical presence beats imagination.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 's29-3',
    question: 'What form is the poem?',
    type: 'multiple-choice',
    options: ['Free verse', 'A Petrarchan sonnet', 'A ballad', 'A dramatic monologue'],
    correctIndex: 1,
    explanation:
      'It is a Petrarchan (Italian) sonnet with an octave and sestet. The volta between them marks the shift from obsessive thought to desire for physical reality.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 's29-4',
    question: 'What is the effect of "Renew thy presence"?',
    type: 'multiple-choice',
    options: [
      'A polite request',
      'An imperative command — the speaker demands her lover appear and destroy her fantasies',
      'A prayer',
      'A whisper',
    ],
    correctIndex: 1,
    explanation:
      'The imperative "Renew thy presence" is a direct command. EBB is not passive — she actively demands her lover\'s physical presence to replace the inadequate substitute of thought.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 's29-5',
    question: 'Who wrote the poem and what is its context?',
    type: 'multiple-choice',
    options: [
      'Charlotte Bronte in 1847',
      'Elizabeth Barrett Browning, written during her secret courtship with Robert Browning',
      'Jane Austen in 1813',
      'Emily Dickinson in 1862',
    ],
    correctIndex: 1,
    explanation:
      'Written by EBB during her secret courtship with Robert Browning. As an invalid confined to her room, she often had to rely on thought and letters rather than physical presence.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 's29-6',
    question: 'What does the vine metaphor suggest about obsessive thought?',
    type: 'multiple-choice',
    options: [
      'Thinking is always healthy',
      'Obsessive thoughts can smother the real person — fantasy is suffocating',
      'Vines are decorative',
      'The lover enjoys being thought about',
    ],
    correctIndex: 1,
    explanation:
      'The vines have grown so thick they hide the tree. EBB recognises that obsessive thinking can replace and smother reality — her fantasies are hiding the real person she loves.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 's29-7',
    question: 'What happens at the volta?',
    type: 'multiple-choice',
    options: [
      'Nothing changes',
      'The speaker shifts from describing her obsessive thoughts to rejecting them in favour of physical reality',
      'The poem ends',
      'A new character appears',
    ],
    correctIndex: 1,
    explanation:
      'The volta marks a dramatic shift — EBB stops describing her vine-like thoughts and actively rejects them. She wants reality, not fantasy: "I do not think of thee — I am too near thee."',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 's29-8',
    question: 'What is paradoxical about the final line?',
    type: 'multiple-choice',
    options: [
      'Nothing — it is straightforward',
      'When her lover is present, she does not need to think of him — reality transcends imagination',
      'She forgets her lover',
      'She prefers being alone',
    ],
    correctIndex: 1,
    explanation:
      'The paradox is that when her lover is physically present, she stops thinking about him — because reality is "dearer, better" than any fantasy. Presence makes thought unnecessary.',
    topic: 'Language',
    difficulty: 'grade-9',
  },
  {
    id: 's29-9',
    question: 'How does EBB present female desire differently from typical Victorian poetry?',
    type: 'multiple-choice',
    options: [
      'She is passive and submissive',
      'She is actively desiring, commanding, and rejecting inadequacy — unusually assertive for a Victorian woman poet',
      'She avoids the topic entirely',
      'She follows conventions exactly',
    ],
    correctIndex: 1,
    explanation:
      'EBB is boldly assertive — she commands her lover to appear, rejects her own fantasies as insufficient, and openly expresses physical desire. This was unusually direct for a Victorian woman.',
    topic: 'Context',
    difficulty: 'grade-9',
  },
  {
    id: 's29-10',
    question: 'Which poem pairs best with Sonnet 29?',
    type: 'multiple-choice',
    options: ['Neutral Tones', "Love's Philosophy by Shelley", 'Remains', 'Exposure'],
    correctIndex: 1,
    explanation:
      "Both Sonnet 29 and Love's Philosophy use natural imagery to express desire. But EBB writes from reciprocated love demanding presence, while Shelley persuades from unrequited desire.",
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Sonnet 29 explores obsessive love, the inadequacy of thought vs physical presence, female desire, and the power of reality over fantasy.',
    keyPoints: [
      'Physical presence is "dearer, better" than imagination',
      'Obsessive thought can smother the real person',
      'Female desire is expressed assertively and directly',
      'Reality transcends fantasy — "I do not think of thee"',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'EBB uses an extended vine/tree metaphor, imperative commands, and a paradoxical final line to express desire for physical reality.',
    keyPoints: [
      'Vine metaphor — thoughts "twine and bud" around the lover',
      '"Renew thy presence" — imperative command for physical presence',
      '"Dearer, better" — reality surpasses all fantasy',
      'Paradox — when present, she does not need to think',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'A Petrarchan sonnet with a clear volta shifting from obsessive thought to assertive demand for reality.',
    keyPoints: [
      'Petrarchan form — octave (thought) and sestet (reality)',
      'Volta — dramatic shift from fantasy to physical desire',
      'Exclamation marks — urgency and passion',
      'Enjambment — thoughts overflow, mirroring the vine metaphor',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Barrett Browning present desire in Sonnet 29?',
  'Compare how love is expressed in Sonnet 29 and one other poem from the anthology.',
  'How does Barrett Browning use the sonnet form to explore the relationship between thought and reality?',
]

const COMPARE_POEMS = [
  {
    title: "Love's Philosophy",
    href: '/revision/poetry/love-and-relationships/loves-philosophy',
    reason: 'Both use natural imagery to express desire, but Shelley persuades while EBB demands.',
  },
  {
    title: "Porphyria's Lover",
    href: '/revision/poetry/love-and-relationships/porphyrias-lover',
    reason:
      "Both explore desire for possession, but EBB seeks healthy presence while Browning's speaker seeks deadly control.",
  },
  {
    title: 'Neutral Tones',
    href: '/revision/poetry/love-and-relationships/neutral-tones',
    reason: 'Contrasting tones -- EBB celebrates living love while Hardy mourns its death.',
  },
]

export default function Sonnet29Page() {
  return (
    <div className="space-y-6">
      <CourseJsonLd
        name="Sonnet 29 by Elizabeth Barrett Browning — Analysis & Annotations"
        description="Line-by-line analysis of Sonnet 29 with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          {
            name: 'Love and Relationships',
            url: 'https://theenglishhub.app/revision/poetry/love-and-relationships',
          },
          {
            name: 'Sonnet 29',
            url: 'https://theenglishhub.app/revision/poetry/love-and-relationships/sonnet-29',
          },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Poetry
        </Button>
        <div className="flex items-center gap-3 mb-1">
          <Badge className="bg-rose-500/10 text-rose-400 border-rose-500/20">
            Love &amp; Relationships
          </Badge>
          <Badge variant="outline">AQA Anthology</Badge>
        </div>
      </div>

      <StudyTools
        textName="Sonnet 29"
        textType="poem"
        examBoard="AQA"
        cluster="Love & Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="Sonnet 29"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={poemData} />

      {/* Compare With Section */}
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="text-heading-sm font-heading text-foreground mb-3">Compare With</h3>
        <div className="grid gap-3 sm:grid-cols-3">
          {COMPARE_POEMS.map((p) => (
            <div key={p.title} className="rounded-lg border border-border/60 bg-muted/30 p-3.5">
              <p className="text-sm font-medium text-foreground mb-1">{p.title}</p>
              <p className="text-xs text-muted-foreground mb-2.5">{p.reason}</p>
              <Button variant="outline" size="xs" render={<Link href={p.href} />}>
                Study poem
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
