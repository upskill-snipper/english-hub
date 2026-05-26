'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, GitCompare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
const sheWalksInBeauty: PoemData = {
  title: 'She Walks in Beauty',
  poet: 'Lord Byron',
  lines: [
    {
      text: 'She walks in beauty, like the night',
      annotations: [
        {
          type: 'Simile',
          note: 'The opening simile is unusual: women are usually compared to daylight or sunshine. By comparing her to "the night", Byron suggests a darker, mysterious, more sophisticated kind of beauty -- one rooted in calmness rather than brightness.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The poem\'s most famous line. "Walks in beauty" makes beauty something she carries with her, not just a quality she possesses.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Of cloudless climes and starry skies;',
      annotations: [
        {
          type: 'Imagery',
          note: 'A clear night sky full of stars -- Byron specifies "cloudless" so that nothing dims her beauty. The imagery is celestial, lifting her above the everyday world.',
          color: '#10b981',
        },
        {
          type: 'Alliteration',
          note: 'The repeated soft "c" and "s" sounds ("cloudless climes", "starry skies") create a hushed, reverent tone, as though Byron does not want to break the spell of describing her.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: "And all that's best of dark and bright",
      annotations: [
        {
          type: 'Juxtaposition',
          note: 'Byron pairs opposites -- "dark and bright" -- to suggest balance. She is not extreme in either direction; she combines the best of both.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Meet in her aspect and her eyes;',
      annotations: [
        {
          type: 'Imagery',
          note: '"Aspect" means appearance or expression. Her eyes are singled out as the meeting place of light and dark -- the windows of the soul where her inner harmony is most visible.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Thus mellowed to that tender light',
      annotations: [
        {
          type: 'Tone',
          note: '"Mellowed" and "tender" suggest softness rather than dazzling brightness. Byron praises a quiet, gentle beauty rather than a bold, fiery one.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Which heaven to gaudy day denies.',
      annotations: [
        {
          type: 'Contrast',
          note: '"Gaudy day" -- bright daylight is dismissed as showy and vulgar. Heaven (a divine source) reserves this softer light for night, and so for her.',
          color: '#ef4444',
        },
        {
          type: 'Religious diction',
          note: '"Heaven" elevates her beauty to a divine gift, almost sacred. The contrast with "gaudy" makes ostentatious beauty feel cheap by comparison.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'One shade the more, one ray the less,',
      annotations: [
        {
          type: 'Balance',
          note: 'A perfectly balanced line: shade vs ray, more vs less. Byron suggests her beauty is so finely tuned that even the smallest change would spoil it.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The exquisite mathematical precision of her beauty. Any alteration -- one more shadow, one less highlight -- would damage perfection.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'Had half impaired the nameless grace',
      annotations: [
        {
          type: 'Diction',
          note: '"Nameless grace" -- her beauty cannot be reduced to a single feature or named quality. There is something indefinable about it, beyond words.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Which waves in every raven tress,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Raven tress" -- her hair is jet-black, like a raven\'s feathers. This reinforces the night imagery from stanza one. "Waves" gives her hair a living, flowing quality.',
          color: '#10b981',
        },
      ],
    },
    {
      text: "Or softly lightens o'er her face;",
      annotations: [
        {
          type: 'Light imagery',
          note: '"Softly lightens" -- gentle light playing over her face. Byron continues the contrast of light and dark introduced in stanza one.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'Where thoughts serenely sweet express',
      annotations: [
        {
          type: 'Inner beauty',
          note: 'The poem now turns inward. Her thoughts are "serenely sweet" -- peaceful and kind. Byron is emphasising that her beauty reflects an inner moral calm, not just outward looks.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'How pure, how dear their dwelling place.',
      annotations: [
        {
          type: 'Religious diction',
          note: '"Pure", "dear", "dwelling place" -- this language is almost sacred. Her mind is described as a kind of holy temple where pure thoughts live.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: "And on that cheek, and o'er that brow,",
      annotations: [
        {
          type: 'Structure',
          note: 'The final stanza zooms in on her face -- cheek, brow, smile. After two stanzas of abstract praise, Byron grounds his admiration in physical detail.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'So soft, so calm, yet eloquent,',
      annotations: [
        {
          type: 'Adjectives',
          note: '"Soft", "calm", "eloquent" -- a triad of adjectives praising gentleness. "Eloquent" is interesting: her face speaks without words.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'The smiles that win, the tints that glow,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Smiles that win" -- captivating, charming. "Tints that glow" -- the warm colour in her cheeks. Light still shines from her, even in this final stanza.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'But tell of days in goodness spent,',
      annotations: [
        {
          type: 'Moral message',
          note: 'Her beauty is the result of a virtuous life. Byron makes a moral claim: a good life produces a beautiful face. Inner goodness becomes outer beauty.',
          color: '#3b82f6',
        },
        {
          type: 'Key quote',
          note: 'The crucial line that turns the poem into something more than physical description. Outer beauty reflects inner virtue.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'A mind at peace with all below,',
      annotations: [
        {
          type: 'Moral message',
          note: '"At peace with all below" -- in harmony with everyone around her. She holds no grudges and disturbs no one.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'A heart whose love is innocent!',
      annotations: [
        {
          type: 'Closure',
          note: 'The poem ends emphatically on "innocent" -- a single word that crowns the praise. Crucially, Byron presents this love as pure and non-sexual, surprising for a poet famous for scandal.',
          color: '#ef4444',
        },
        {
          type: 'Key quote',
          note: 'The exclamation mark is the only one in the poem. After 17 lines of quiet admiration, this final line bursts out with conviction.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>Lord Byron (1788--1824)</h3>
    <p>George Gordon, Lord Byron, was one of the most famous of the English Romantic poets. He was notorious in his own lifetime for his many love affairs, his political radicalism, and his striking good looks. He died fighting for Greek independence at 36 and became a kind of literary celebrity unlike any poet before him.</p>

    <h3>The Romantics</h3>
    <p>Romantic poetry valued emotion, nature, individual experience and beauty. Byron is part of the "second generation" of Romantics, alongside Shelley and Keats. Unlike Wordsworth, who focused on nature and ordinary life, Byron is often more dramatic, witty and worldly.</p>

    <h3>Composition (1814)</h3>
    <p>Byron is said to have written "She Walks in Beauty" the morning after meeting his cousin by marriage, <strong>Mrs Anne Beatrix Wilmot</strong>, at a party in London. She was wearing a black mourning dress decorated with sparkling spangles -- the literal source of the contrast between dark and bright that runs through the poem. Despite Byron's reputation, the relationship was not romantic; the poem celebrates her beauty with admiration rather than desire.</p>

    <h3>Hebrew Melodies</h3>
    <p>The poem was published in 1815 as part of <em>Hebrew Melodies</em>, a collection of lyrics Byron wrote to be set to traditional Jewish music. The collection's tone is generally serious, reverent and reflective -- which is why this poem feels more spiritual than sensual.</p>
  `,

  contextAr: `
    <h3>Lord Byron (1788-1824)</h3>
    <p>George Gordon, Lord Byron، واحد من أشهر شعراء الرومانسية الإنجليزية. صار مشهور في زمنه بكثرة علاقاته الغرامية، ومواقفه السياسية الراديكالية، وجمال شكله اللافت. مات وهو يقاتل من أجل استقلال اليونان وعمره 36، وصار نوع من المشاهير الأدبيين ما شاف الشعر مثله من قبل.</p>

    <h3>الرومانسيون</h3>
    <p>الشعر الرومانسي كان يقدّر العاطفة، والطبيعة، والتجربة الفردية، والجمال. Byron جزء من الجيل الثاني من الرومانسيين، يم Shelley وKeats. على عكس Wordsworth اللي ركّز على الطبيعة وحياة الناس العاديين، Byron عادة أكثر دراميّة وذكاء واطّلاع على الدنيا.</p>

    <h3>وقت الكتابة (1814)</h3>
    <p>يقولون إن Byron كتب "She Walks in Beauty" صبح اليوم اللي قبل ما قابل قريبة زوجته، <strong>Mrs Anne Beatrix Wilmot</strong>، في حفلة في لندن. كانت لابسة فستان أسود للحداد، مزيّن بـspangles لمّاعة - وهذا هو المصدر الحرفي للتضاد بين dark وbright اللي يسري في القصيدة. على الرغم من سمعة Byron، العلاقة ما كانت عاطفية؛ القصيدة تحتفي بجمالها بإعجاب مو برغبة.</p>

    <h3>Hebrew Melodies</h3>
    <p>القصيدة انتشرت في 1815 ضمن <em>Hebrew Melodies</em>، مجموعة قصائد كتبها Byron عشان يحطّون عليها موسيقى يهودية تقليدية. نبرة المجموعة بشكل عام جديّة، تأمّلية، فيها وقار - وهذا يفسّر ليش هالقصيدة تحسّ بها روحية أكثر منها حسّية.</p>
  `,

  summary: `Stanza 1: The speaker compares the woman to "the night / Of cloudless climes and starry skies" -- a night sky that is both dark and full of stars. The "best of dark and bright" meet in her face and eyes, creating a soft, mellow beauty unlike harsh daylight.

Stanza 2: The balance of light and shadow in her appearance is so perfect that any change would damage her grace. Her dark, wavy hair frames her face. The poem now turns inward: her face expresses "thoughts serenely sweet", suggesting the purity of her inner mind.

Stanza 3: The speaker focuses on her cheek, brow and smiles. Her face is "soft", "calm", "eloquent". The poem ends with a moral claim: this outer beauty is the result of "days in goodness spent" -- her physical beauty reflects a virtuous mind, a peaceful heart, and a love that is innocent.

Overall meaning: The poem is a sustained praise of a woman whose beauty combines outer attractiveness with inner moral calm. Byron argues that true beauty is not just visual but ethical -- the product of a life lived well and a mind at peace.`,

  summaryAr: `المقطع الأول: المتكلّم يشبّه المرأة بـ"the night / Of cloudless climes and starry skies" - سما ليلية مظلمة ومليانة نجوم في نفس الوقت. "best of dark and bright" يلتقون في وجهها وعيونها، فيخلقون جمال هادي ناعم، مو مثل قسوة ضوء النهار.

المقطع الثاني: التوازن بين النور والظل في مظهرها كامل لدرجة إن أيّ تغيير صغير راح يخرّب رقّتها. شعرها الأسود المتموّج يحيط وجهها. القصيدة الحين تتجه للداخل: وجهها يعبّر عن "thoughts serenely sweet"، وهذا يلمّح لنقاء عقلها الداخلي.

المقطع الثالث: المتكلّم يركّز على خدّها وجبينها وابتساماتها. وجهها "soft"، "calm"، "eloquent". القصيدة تنتهي بادعاء أخلاقي: هالجمال الخارجي هو نتيجة "days in goodness spent" - جمالها الجسدي يعكس عقل فاضل، وقلب مسالم، وحب بريء.

المعنى العام: القصيدة مديح متواصل لامرأة جمالها يجمع بين الجاذبية الخارجية والهدوء الأخلاقي الداخلي. Byron يقول إن الجمال الحقيقي مو بصري بس، بل أخلاقي - حصيلة حياة عاشتها صاحبتها زين وعقل في سلام.`,

  formAndStructure: `Form: Three six-line stanzas (sestets), each rhyming ABABAB. The rhyme scheme is regular and tightly controlled, creating a sense of harmony and balance that mirrors the woman's poised beauty.

Metre: Iambic tetrameter (four iambs per line, eight syllables). The rhythm is steady and gentle -- like a slow, dignified walk. This deliberate, even rhythm matches the calmness Byron is praising.

Stanza progression: The poem moves from outer description (stanza 1: dark and light), to physical features and inner thoughts (stanza 2: hair, mind), to a moral conclusion (stanza 3: virtue produces beauty). Byron deepens the praise as the poem progresses: looks, then mind, then character.

Symmetry: Many lines are internally balanced -- "One shade the more, one ray the less" -- mirroring the perfect balance of features Byron is describing. Form and content reinforce each other.

Sound: Soft consonants ("s", "l", "m") dominate, creating a hushed, almost reverent tone. There is no harshness anywhere in the poem.

Tone: Calm, admiring, reverent. Byron resists the temptation to be passionate or sensual; instead, the tone is serene throughout, ending with the quiet exclamation "innocent!"`,

  formAndStructureAr: `Form (الشكل): ثلاث مقاطع، كل مقطع ستة أبيات (sestets)، كلّها بقافية ABABAB. نظام القافية منتظم ومضبوط، يخلق إحساس بالانسجام والتوازن، يعكس جمالها الرشيق.

Metre (الوزن): iambic tetrameter (أربع iambs في كل بيت، ثمان مقاطع). الإيقاع ثابت ولطيف - مثل مشية بطيئة وقورة. هالإيقاع المتعمّد المتوازن يطابق الهدوء اللي يمدحه Byron.

تطوّر المقاطع: القصيدة تتحرّك من الوصف الخارجي (المقطع الأول: dark وbright)، إلى ملامح الوجه والأفكار الداخلية (المقطع الثاني: الشعر، العقل)، إلى خاتمة أخلاقية (المقطع الثالث: الفضيلة تنتج الجمال). Byron يعمّق المديح كل ما تقدّمت القصيدة: المظهر، بعدين العقل، بعدين الشخصية.

التماثل (symmetry): أبيات كثيرة متوازنة داخلياً - "One shade the more, one ray the less" - تعكس التوازن الكامل في الملامح اللي يوصفها Byron. الشكل والمحتوى يدعمون بعض.

الصوت: الحروف اللينة ("s"، "l"، "m") تسود، فتخلق نبرة هادية، شبه مقدّسة. ما فيه قسوة في أي مكان في القصيدة.

النبرة (tone): هادية، معجبة، فيها وقار. Byron يقاوم الإغراء إنه يصير عاطفي أو شهواني؛ بدلاً عن ذلك، النبرة صافية طول القصيدة، وتنتهي بالتعجّب الهادي "innocent!"`,

  keyQuotes: [
    {
      quote: 'She walks in beauty, like the night',
      analysis:
        'The opening simile is striking because it links a woman with "the night" rather than the day. Night is dark, mysterious and quiet -- so the comparison suggests a serene, sophisticated beauty. "Walks in beauty" makes beauty something she carries with her, as natural as movement.',
      themes: ['Beauty', 'Nature imagery', 'Idealised love'],
      analysisAr:
        'الـsimile الافتتاحي لافت لأنه يربط المرأة بـ"the night" مو بالنهار. الليل مظلم، فيه غموض وفيه هدوء - فالتشبيه يلمّح لجمال صافي راقي. وعبارة "walks in beauty" تخلّي الجمال شي تحمله معها، طبيعي زي حركتها.',
      themesAr: ['الجمال', 'صور الطبيعة', 'الحب المثالي'],
    },
    {
      quote: "all that's best of dark and bright",
      analysis:
        'Byron praises her by uniting opposites. She is neither too bright nor too dark; she combines the best of both. This argues that beauty is about harmony and balance, not extremes -- a fundamentally Romantic idea.',
      themes: ['Balance', 'Harmony', 'Beauty'],
      analysisAr:
        'Byron يمدحها بجمعه للأضداد. هي لا أكثر من اللازم بـbright ولا بـdark؛ تجمع أحسن ما في الاثنين. وهذا يقول إن الجمال يتعلّق بالانسجام والتوازن، مو بالتطرّف - فكرة رومانسية في جوهرها.',
      themesAr: ['التوازن', 'الانسجام', 'الجمال'],
    },
    {
      quote: 'One shade the more, one ray the less, / Had half impaired the nameless grace',
      analysis:
        'A perfectly balanced couplet. The slightest change -- "one shade more", "one ray less" -- would damage her beauty, suggesting it is mathematically perfect. "Nameless grace" admits that her beauty has a mysterious, indefinable quality beyond simple description.',
      themes: ['Perfection', 'Beauty', 'Mystery'],
      analysisAr:
        'بيتان متوازنين بشكل تام. أصغر تغيير - "one shade more"، "one ray less" - كفيل يخرّب جمالها، وهذا يلمّح إن جمالها كامل رياضياً. وعبارة "nameless grace" تعترف إن جمالها فيه صفة غامضة ما تتسمّى، فوق أي وصف بسيط.',
      themesAr: ['الكمال', 'الجمال', 'الغموض'],
    },
    {
      quote: 'thoughts serenely sweet express / How pure, how dear their dwelling place',
      analysis:
        'The poem turns inward. Her face is described as the "dwelling place" of pure thoughts, which is almost religious diction -- like describing a temple or shrine. Her outer beauty is now read as evidence of an inner spiritual purity.',
      themes: ['Inner beauty', 'Spirituality', 'Virtue'],
      analysisAr:
        'القصيدة تتجه للداخل. وجهها يوصف على إنه "dwelling place" لأفكار طاهرة، وهذا قريب من اللغة الدينية - مثل ما توصف معبد أو مقام. جمالها الخارجي الحين يُقرأ كدليل على نقاء روحي داخلي.',
      themesAr: ['الجمال الداخلي', 'الروحانية', 'الفضيلة'],
    },
    {
      quote: 'tell of days in goodness spent',
      analysis:
        'A direct moral claim: her face shows that she has lived a good life. Byron is arguing that virtue produces beauty -- a goodness inside reveals itself outside. This moves the poem beyond physical description to ethical praise.',
      themes: ['Virtue', 'Inner beauty', 'Moral life'],
      analysisAr:
        'ادّعاء أخلاقي مباشر: وجهها يبيّن إنها عاشت حياة طيبة. Byron يقول إن الفضيلة تنتج الجمال - الطيبة في الداخل تظهر في الخارج. هالشي يخرج بالقصيدة من الوصف الجسدي للمديح الأخلاقي.',
      themesAr: ['الفضيلة', 'الجمال الداخلي', 'الحياة الأخلاقية'],
    },
    {
      quote: 'A heart whose love is innocent!',
      analysis:
        'The poem\'s only exclamation mark, on its final word. After 17 lines of restrained admiration, the speaker bursts out with conviction. Crucially, the love is "innocent" -- not sexual, not possessive. Coming from the famously scandalous Byron, this insistence on purity is remarkable.',
      themes: ['Innocence', 'Spiritual love', 'Idealisation'],
      analysisAr:
        'علامة التعجّب الوحيدة في القصيدة، على كلمتها الأخيرة. بعد 17 بيت من الإعجاب المكبوح، المتكلّم ينفجر بقناعة. والمهم إن الحب "innocent" - مو شهواني، مو فيه استحواذ. ولمّا تطلع من Byron المشهور بفضائحه، هالإصرار على الطهارة شي لافت.',
      themesAr: ['البراءة', 'الحب الروحي', 'المثالية'],
    },
  ],

  languageDevices: [
    {
      device: 'Simile',
      example: 'She walks in beauty, like the night',
      effect:
        'The opening simile aligns the woman with the calm, dark beauty of a starry night. Unusually, women are normally compared to sunlight or day -- the night comparison gives her a mysterious, sophisticated quality.',
      lineRef: 0,
      effectAr:
        'الـsimile الافتتاحي يحاذي المرأة بالجمال الهادي المظلم لليلة فيها نجوم. غير عن العادة، النساء عادة يُشبَّهن بضوء الشمس أو النهار - تشبيهها بالليل يعطيها صفة غامضة وراقية.',
    },
    {
      device: 'Juxtaposition',
      example: "all that's best of dark and bright",
      effect:
        'Byron pairs opposites to suggest harmony. Her beauty is not extreme; it lies in the perfect balance of light and shadow, an ideal mid-point between extremes.',
      lineRef: 2,
      effectAr:
        'Byron يجمع الأضداد عشان يلمّح للانسجام. جمالها مو متطرّف؛ هو في التوازن الكامل بين النور والظل، نقطة منتصف مثالية بين الطرفين.',
    },
    {
      device: 'Religious diction',
      example: 'How pure, how dear their dwelling place',
      effect:
        'Byron uses sacred language ("pure", "dwelling place") to describe her mind. This elevates her beyond ordinary praise -- her face becomes almost a holy site.',
      lineRef: 11,
      effectAr:
        'Byron يستخدم لغة مقدّسة ("pure"، "dwelling place") عشان يوصف عقلها. هالشي يرفعها فوق المديح العادي - وجهها يصير شبه موقع مقدّس.',
    },
    {
      device: 'Alliteration',
      example: 'cloudless climes and starry skies',
      effect:
        'Soft "c" and "s" sounds create a hushed, almost reverent atmosphere. The sound of the line is gentle and breathy, matching the gentleness of the beauty being described.',
      lineRef: 1,
      effectAr:
        'أصوات الـ"c" والـ"s" الناعمة تخلق جو هامس، شبه مقدّس. صوت البيت لطيف وأشبه بالتنفّس، يطابق نعومة الجمال اللي يوصفه.',
    },
    {
      device: 'Personification',
      example: 'thoughts serenely sweet express',
      effect:
        'Her thoughts "express" themselves through her face, as if they have a life of their own. This makes her inner mind visible to the reader through her outer features.',
      lineRef: 10,
      effectAr:
        'أفكارها "تعبّر" عن نفسها من خلال وجهها، كأن لها حياتها الخاصة. هالـpersonification يخلّي عقلها الداخلي مرئي للقارئ من خلال ملامحها الخارجية.',
    },
    {
      device: 'Tonal contrast',
      example: 'mellowed to that tender light / Which heaven to gaudy day denies',
      effect:
        'The contrast between "tender light" and "gaudy day" devalues showy, ostentatious beauty in favour of soft, refined beauty. "Gaudy" is the only harsh word in the poem -- and it is used to dismiss its opposite.',
      lineRef: 5,
      effectAr:
        'التضاد بين "tender light" و"gaudy day" يقلّل من قيمة الجمال الفاضح المتباهي لصالح الجمال الناعم الراقي. كلمة "gaudy" هي الكلمة القاسية الوحيدة في القصيدة - ومستخدمة عشان ترفض عكسها.',
    },
    {
      device: 'Caesura and balance',
      example: 'One shade the more, one ray the less',
      effect:
        'The pause in the middle of the line creates two perfectly balanced halves. The grammatical balance mirrors the visual balance Byron is describing -- form embodies content.',
      lineRef: 6,
      effectAr:
        'التوقّف في نص البيت يخلق نصفين متوازنين بشكل تام. التوازن النحوي يعكس التوازن البصري اللي يوصفه Byron - الشكل يجسّد المحتوى.',
    },
  ],
}

const comparisons = [
  {
    title: 'Neutral Tones',
    poet: 'Thomas Hardy',
    href: '/revision/poetry/ocr/love-and-relationships/neutral-tones',
    reason:
      'A striking contrast: Byron celebrates a beautiful, virtuous woman; Hardy mourns a colourless, dead love. Both use light/dark imagery, but to opposite emotional ends.',
    themes: ['Light and dark', 'Imagery', 'Contrasting moods'],
  },
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'swb-1',
    question: 'What is the poem about?',
    type: 'multiple-choice',
    options: [
      'A woman exercising',
      'The beauty of a woman who perfectly balances light and dark, inner goodness and outward grace',
      'A sunset',
      'A painting',
    ],
    correctIndex: 1,
    explanation:
      'Byron describes a woman whose beauty combines light and dark in perfect harmony. Her outer beauty reflects inner goodness - she is as beautiful in character as in appearance.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'swb-2',
    question: 'What does "She walks in beauty, like the night" mean?',
    type: 'multiple-choice',
    options: [
      'She walks at night',
      'Her beauty is compared to a clear, starry night - dark and luminous simultaneously',
      'She is dark-haired only',
      'She is nocturnal',
    ],
    correctIndex: 1,
    explanation:
      'Byron compares her beauty to a cloudless starlit night - she combines darkness and light in perfect balance, like stars against a dark sky.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'swb-3',
    question: 'What form does the poem use?',
    type: 'multiple-choice',
    options: [
      'Free verse',
      'Three sestets (six-line stanzas) with ABABAB rhyme',
      'A sonnet',
      'Blank verse',
    ],
    correctIndex: 1,
    explanation:
      'Three six-line stanzas with regular ABABAB rhyme. The flowing, harmonious form mirrors the balanced beauty it describes.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'swb-4',
    question: 'What is the significance of the light/dark contrast?',
    type: 'multiple-choice',
    options: [
      'Her clothes are striped',
      'Perfect beauty requires balance - too much light or dark would destroy the harmony',
      'Day and night are described',
      'She uses makeup',
    ],
    correctIndex: 1,
    explanation:
      '"One shade the more, one ray the less" would ruin the perfection. Byron presents beauty as a precise balance of opposites - any change would destroy it.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'swb-5',
    question: 'When was the poem written?',
    type: 'multiple-choice',
    options: [
      '1850',
      '1814, reportedly after Byron saw his cousin by marriage at a party wearing a black mourning dress with sequins',
      '1794',
      '1819',
    ],
    correctIndex: 1,
    explanation:
      'Written in 1814 after Byron saw his cousin Mrs Wilmot at a party. She wore a black dress with spangles (sequins), creating the interplay of darkness and light that inspired the poem.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'swb-6',
    question: 'How does Byron link outer beauty to inner character?',
    type: 'multiple-choice',
    options: [
      "He doesn't",
      'The final stanza reveals her beauty reflects a "mind at peace" and a "heart whose love is innocent"',
      'Only looks matter',
      'Inner beauty is irrelevant',
    ],
    correctIndex: 1,
    explanation:
      'The final stanza shifts from physical beauty to moral beauty. Her serene expression reflects a peaceful mind and innocent heart - outer beauty is a mirror of inner goodness.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'swb-7',
    question: 'What does "a mind at peace with all below" suggest?',
    type: 'multiple-choice',
    options: [
      'She is asleep',
      'She is serene, at peace with the world - her inner tranquillity creates her outward beauty',
      'She lives underground',
      'She is meditative',
    ],
    correctIndex: 1,
    explanation:
      "The woman's peacefulness with the world around her creates the calm, harmonious beauty Byron describes. Inner serenity radiates outward.",
    topic: 'Language',
    difficulty: 'grade-9',
  },
  {
    id: 'swb-8',
    question: "How is the poem's tone different from many love poems?",
    type: 'multiple-choice',
    options: [
      'It is angry',
      'It is reverent and admiring rather than passionate or possessive - the speaker worships from a distance',
      'It is identical to all love poems',
      'It is sarcastic',
    ],
    correctIndex: 1,
    explanation:
      "Byron's tone is reverential - he admires rather than desires. There is no possession, no plea, no demand. The speaker simply observes and celebrates perfection.",
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'swb-9',
    question: 'What is the effect of the regular metre and rhyme?',
    type: 'multiple-choice',
    options: [
      'It makes the poem boring',
      'The smooth, flowing rhythm mirrors the harmonious, balanced beauty it describes',
      'It creates tension',
      'It has no effect',
    ],
    correctIndex: 1,
    explanation:
      "The regular iambic tetrameter and ABABAB rhyme create a smooth, flowing musicality that mirrors the harmony and balance of the woman's beauty.",
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'swb-10',
    question: 'Which poem contrasts most with She Walks in Beauty?',
    type: 'multiple-choice',
    options: ['Neutral Tones by Hardy', 'Crossing the Bar', 'The Eagle', 'When I Have Fears'],
    correctIndex: 0,
    explanation:
      'She Walks in Beauty celebrates perfect, harmonious beauty; Neutral Tones presents love as dead and colourless. They offer opposite visions of how relationships are experienced.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'She Walks in Beauty celebrates the perfect balance of light and dark, inner goodness reflected in outward beauty, and reverent admiration.',
    keyPoints: [
      'Beauty as balance - light and dark in perfect harmony',
      'Inner beauty mirrors outer beauty - "a mind at peace"',
      'Reverence - the speaker admires without possessing',
      '"One shade the more, one ray the less" - beauty is precise',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Byron uses light/dark contrast, celestial imagery, and smooth, harmonious language to celebrate perfect beauty.',
    keyPoints: [
      '"Like the night / Of cloudless climes and starry skies" - beauty as starlit darkness',
      'Light/dark balance throughout - neither dominates',
      '"A mind at peace" - inner serenity creates outer beauty',
      'Smooth, flowing diction - language mirrors harmony',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Three sestets with ABABAB rhyme in iambic tetrameter - the flowing, regular form mirrors the balanced beauty described.',
    keyPoints: [
      'Three stanzas: appearance (1), balance (2), character (3)',
      'ABABAB rhyme - smooth, harmonious pattern',
      'Iambic tetrameter - flowing, musical rhythm',
      'Progression from outer to inner beauty',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Byron present beauty in She Walks in Beauty?',
  'Compare how admiration is expressed in She Walks in Beauty and one other poem from the anthology.',
  'How does Byron use imagery and form to create a sense of harmony and balance?',
]

export default function SheWalksInBeautyPage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="She Walks in Beauty by Lord Byron - Analysis & Annotations"
        description="Line-by-line analysis of She Walks in Beauty with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          { name: 'OCR Poetry', url: 'https://theenglishhub.app/revision/poetry/ocr' },
          {
            name: 'She Walks in Beauty',
            url: 'https://theenglishhub.app/revision/poetry/ocr/she-walks-in-beauty',
          },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/ocr/love-and-relationships" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Love and Relationships
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-pink-500/10">
            <BookOpen className="size-5 text-pink-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">She Walks in Beauty</h1>
            <p className="text-body-sm text-muted-foreground">
              Lord Byron &middot; Love and Relationships cluster
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              OCR
            </Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="She Walks in Beauty"
        textType="poem"
        examBoard="OCR"
        cluster="Love and Relationships"
        variant="compact"
      />
      <InlineStudyEngine
        textName="She Walks in Beauty"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={sheWalksInBeauty} />

      <section className="rounded-xl border border-border/60 bg-muted/30 p-4 sm:p-5">
        <p className="text-xs text-muted-foreground leading-relaxed">
          The text of &ldquo;She Walks in Beauty&rdquo; is in the public domain. All annotations and
          critical commentary on this page are original to english-hub and are provided for private
          study and educational purposes under the fair dealing provisions of the Copyright, Designs
          and Patents Act 1988.
        </p>
      </section>

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          The OCR exam asks you to compare two poems from your cluster. These are strong pairings
          for She Walks in Beauty.
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
