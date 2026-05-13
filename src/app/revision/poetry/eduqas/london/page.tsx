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
const london: PoemData = {
  title: 'London',
  poet: 'William Blake',
  lines: [
    {
      text: "I wander thro' each charter'd street,",
      annotations: [
        {
          type: 'Diction',
          note: '"Charter\'d" suggests ownership and control - even the streets are owned and regulated. Blake protests how every part of London has been claimed by the wealthy and powerful.',
          color: '#ef4444',
        },
        {
          type: 'Speaker',
          note: '"I wander" - the speaker drifts aimlessly, observing the city. This wandering mirrors the powerlessness of London\'s ordinary people.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: "Near where the charter'd Thames does flow.",
      annotations: [
        {
          type: 'Repetition',
          note: 'The repetition of "charter\'d" emphasises the totality of control - even nature (the Thames) has been mapped, owned and regulated. Nothing in London is truly free.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'And mark in every face I meet',
      annotations: [
        {
          type: 'Repetition',
          note: '"Mark" - the speaker observes, but the word also suggests a permanent stamp or scar on people\'s faces. Suffering has marked them.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'Marks of weakness, marks of woe.',
      annotations: [
        {
          type: 'Anaphora',
          note: 'The repetition of "marks" hammers home the inescapability of suffering. The alliteration "marks... weakness... woe" creates a relentless, mournful rhythm.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'Every Londoner bears visible signs of misery. Blake universalises the suffering - this is not isolated but systemic.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'In every cry of every Man,',
      annotations: [
        {
          type: 'Anaphora',
          note: 'The repetition of "every" throughout the second stanza creates an inescapable, totalising effect. Suffering is universal.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'In every Infants cry of fear,',
      annotations: [
        {
          type: 'Pathos',
          note: 'Even babies are crying in fear. Childhood innocence has been corrupted by the city. Blake suggests children are born into suffering, not happiness.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'In every voice: in every ban,',
      annotations: [
        {
          type: 'Ambiguity',
          note: '"Ban" can mean prohibition, curse, or marriage banns - suggesting laws, religious curses, and social customs all oppress equally.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: "The mind-forg'd manacles I hear.",
      annotations: [
        {
          type: 'Metaphor',
          note: '"Mind-forg\'d manacles" - one of poetry\'s most famous metaphors. The chains binding Londoners are mental, not physical. They have internalised their oppression and accepted their suffering as natural.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'A devastating image: people are not just oppressed by external forces but by their own minds. Their imagination has been imprisoned.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'How the Chimney-sweepers cry',
      annotations: [
        {
          type: 'Social criticism',
          note: 'Chimney sweeps were children, often as young as four, forced into dangerous work. Blake highlights child exploitation as a moral failure of the city.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Every blackning Church appalls,',
      annotations: [
        {
          type: 'Symbolism',
          note: '"Blackning" describes both literal soot from chimneys and moral corruption. The Church should protect the innocent but instead is "appalled" - and complicit. "Appall" also means to make pale, suggesting hypocrisy.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'Blake attacks institutional Christianity for failing the poor. The Church has been blackened by complicity with suffering.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And the hapless Soldiers sigh',
      annotations: [
        {
          type: 'Pathos',
          note: '"Hapless" - unfortunate, helpless. Soldiers are themselves victims of the same powers they fight for. Blake had Republican sympathies and opposed Britain\'s wars.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Runs in blood down Palace walls',
      annotations: [
        {
          type: 'Imagery',
          note: "A shocking visual: the soldier's sigh becomes literal blood staining the palace. The monarchy is responsible for soldiers' deaths in foreign wars. Blake makes the king's guilt visible.",
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The image suggests revolution - blood on palace walls echoes the French Revolution that Blake supported.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: "But most thro' midnight streets I hear",
      annotations: [
        {
          type: 'Time shift',
          note: '"Midnight" - the poem moves into darkness, the most desperate time. The speaker hears, not sees, the worst suffering.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: 'How the youthful Harlots curse',
      annotations: [
        {
          type: 'Social criticism',
          note: '"Youthful Harlots" - young prostitutes, often forced into the work by poverty. Blake refuses to look away from the most vulnerable victims of London\'s economy.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: 'Blasts the new-born Infants tear',
      annotations: [
        {
          type: 'Imagery',
          note: "The harlot's curse \"blasts\" (destroys) the newborn's tear - meaning the child is born infected with venereal disease. The prostitute's suffering passes directly to the next generation.",
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And blights with plagues the Marriage hearse.',
      annotations: [
        {
          type: 'Oxymoron',
          note: '"Marriage hearse" - the most shocking image in the poem. Marriage, supposedly a celebration of love and life, is turned into a funeral carriage. Disease and death corrupt even love.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: "The poem ends with this devastating oxymoron. London's corruption infects everything, even the most sacred institutions.",
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>William Blake (1757-1827)</h3>
    <p>Blake was a poet, painter and printmaker, largely unrecognised in his lifetime. He was a radical thinker who rejected institutional religion, supported the French and American Revolutions, and was deeply critical of industrialisation, slavery, and child labour. He claimed to see visions and spoke with angels.</p>

    <h3>Songs of Innocence and Experience (1794)</h3>
    <p>"London" appears in <em>Songs of Experience</em>, the darker companion to <em>Songs of Innocence</em>. The two collections together show "the two contrary states of the human soul". "London" presents experience as bleak, corrupt, and full of suffering caused by human institutions.</p>

    <h3>Late 18th-Century London</h3>
    <p>Blake\'s London was the world\'s largest city. The Industrial Revolution drove rural poor into urban slums. Working conditions were appalling, child labour was common, and disease (especially syphilis) was rampant. The wealthy lived alongside the desperately poor.</p>

    <h3>Political Context</h3>
    <p>The poem was written during a period of revolution and reaction. The French Revolution (1789) inspired hope in radicals like Blake but terrified the British establishment. Blake saw the Church and Monarchy as oppressors complicit in human suffering.</p>

    <h3>Religious Critique</h3>
    <p>Blake was a Christian but a fierce critic of organised religion. He believed the established Church had abandoned its duty to the poor and instead served the powerful. The "blackning Church" image is central to his anti-clerical message.</p>
  `,

  contextAr: `
    <h3>William Blake (1757-1827)</h3>
    <p>Blake شاعر ورسّام وفنّان طباعة، ما اعترف فيه أحد إلى حد بعيد في حياته. كان مفكّر راديكالي، يرفض الدين المؤسّسي، ويدعم الثورتين الفرنسية والأمريكية، وينتقد بشدّة التصنيع والعبودية وعمالة الأطفال. ادّعى إنه يشوف رؤى ويحكي مع الملائكة.</p>

    <h3>Songs of Innocence and Experience (1794)</h3>
    <p>قصيدة "London" تطلع في <em>Songs of Experience</em>، الديوان الأكثر قتامة المُكمّل لـ<em>Songs of Innocence</em>. الديوانان مع بعض يبيّنون "الحالتين المتضادتين للروح الإنسانية". قصيدة "London" تقدّم الـexperience كحالة كئيبة وفاسدة ومليانة معاناة بسبب المؤسسات البشرية.</p>

    <h3>لندن في أواخر القرن الـ18</h3>
    <p>لندن Blake كانت أكبر مدينة في العالم. والثورة الصناعية دفعت الفقراء من الريف للأحياء المتهالكة في المدينة. ظروف العمل كانت مريعة، عمالة الأطفال كانت منتشرة، والأمراض (وبالأخص الزهري) كانت متفشّية. الأغنياء كانوا يعيشون جنب الفقراء المُعدمين.</p>

    <h3>السياق السياسي</h3>
    <p>القصيدة مكتوبة في فترة ثورة ورد فعل. الثورة الفرنسية (1789) ألهمت أملاً عند الراديكاليين مثل Blake، بس رعبت المؤسسة البريطانية. Blake كان يشوف الكنيسة والملكية كقوّتين قامعتين متواطئتين في المعاناة الإنسانية.</p>

    <h3>النقد الديني</h3>
    <p>Blake كان مسيحياً، بس كان منتقد شرس للدين المنظَّم. كان يعتقد إن الكنيسة المُؤسَّسة تخلّت عن واجبها تجاه الفقراء، وصارت تخدم الأقوياء بدلاً عنه. وصورة "blackning Church" مركزية في رسالته المعادية لرجال الدين.</p>
  `,

  summary: `Stanza 1: The speaker walks through London\'s "charter\'d" (owned, regulated) streets near the equally controlled Thames. He observes that everyone he meets bears "marks of weakness, marks of woe" - visible signs of suffering.

Stanza 2: The speaker hears suffering everywhere - in adults\' cries, infants\' cries, voices, and laws ("bans"). He concludes that Londoners wear "mind-forg\'d manacles" - chains they have created in their own minds. They have accepted their oppression.

Stanza 3: Blake names three institutions and their victims: the Church (which fails chimney-sweep children), the Monarchy (whose wars kill soldiers, whose blood metaphorically runs down palace walls), and society at large.

Stanza 4: At midnight, the speaker hears young prostitutes cursing. Their curses "blast" newborn babies (with disease) and turn marriage into a "marriage hearse" - a funeral. The poem ends with corruption infecting birth, love, and death.

Overall meaning: London is a city of total oppression where institutions (Church, Monarchy, marriage) have failed everyone. Suffering is universal, inescapable, and self-perpetuating. Blake calls for radical change but the poem itself offers no hope - only documentation of the misery.`,

  summaryAr: `المقطع 1: المتكلّم يمشي في شوارع لندن الـ"charter\'d" (مملوكة، مُنظَّمة) قرب نهر التايمز اللي هو الثاني تحت سيطرة مماثلة. ويلاحظ إن كل واحد يلاقيه يحمل "marks of weakness, marks of woe" — علامات معاناة ظاهرة.

المقطع 2: المتكلّم يسمع المعاناة في كل مكان — في صرخات الكبار، وصرخات الأطفال، والأصوات، والقوانين ("bans"). ويستنتج إن أهل لندن لابسين "mind-forg\'d manacles" — قيود صنعوها في عقولهم نفسهم. صاروا يقبلون قمعهم وتسلّيموا له.

المقطع 3: Blake يسمّي ثلاث مؤسسات وضحاياها: الكنيسة (اللي تخذل أطفال منظّفي المداخن)، الملكية (اللي حروبها تقتل الجنود، ودمهم رمزياً يجري على جدران القصر)، والمجتمع بشكل عام.

المقطع 4: في منتصف الليل، المتكلّم يسمع شابّات بائعات هوى يلعنون. ولعناتهم "blast" الرضّع حديثي الولادة (بالمرض)، وتحوّل الزواج إلى "marriage hearse" — جنازة. القصيدة تنتهي والفساد يلوّث الولادة والحب والموت.

المعنى العام: لندن مدينة قمع شامل، تخذل فيها كل المؤسسات (الكنيسة، الملكية، الزواج) الناس بالكامل. والمعاناة كونية ومستمرة وتعيد إنتاج نفسها. Blake يدعو للتغيير الجذري، بس القصيدة بنفسها ما تقدّم أمل — بس توثيق للبؤس.`,

  formAndStructure: `Form: Four quatrains (four-line stanzas), tightly controlled. The rigid structure mirrors the constricted lives of Londoners - they cannot escape the form just as they cannot escape the city.

Rhyme scheme: ABAB throughout. The regular alternating rhymes create a relentless, hammering rhythm that mirrors the inescapable suffering described.

Metre: Mostly iambic tetrameter (four feet per line). The march-like rhythm makes the poem feel like a slow funeral procession through the city. Some lines are deliberately stressed differently for emphasis.

Repetition and anaphora: The repetition of "charter\'d" (stanza 1), "every" (stanza 2), and "marks" creates a totalising effect - suffering is everywhere, no one escapes.

First person: "I wander", "I hear", "I meet" - the speaker is a witness, but a passive one. He observes but cannot intervene. This mirrors the position of Blake\'s reader.

Volta: There is no traditional turn. The poem moves from observation (stanzas 1-2) to specific examples of institutional failure (stanzas 3-4), but the bleakness intensifies rather than reverses.

Sound: Heavy use of harsh consonants and mournful vowel sounds. The poem sounds bitter and tired. The closing oxymoron "Marriage hearse" is sonically jarring, leaving the reader unsettled.`,

  formAndStructureAr: `الشكل: أربع quatrains (مقاطع من أربعة أبيات)، مضبوطة بإحكام. البنية الصارمة تعكس حيوات أهل لندن المقيّدة — ما يقدرون يهربون من الشكل، تماماً مثل ما ما يقدرون يهربون من المدينة.

نظام القافية: ABAB طول القصيدة. القوافي المتناوبة المنتظمة تخلق إيقاع متواصل ودقّاق يعكس المعاناة اللي ما لها مهرب.

الوزن: غالباً iambic tetrameter (أربع أقدام في كل بيت). الإيقاع المسيري يخلّي القصيدة تحسّ مثل موكب جنازة بطيء يمشي في المدينة. وبعض الأبيات تحمل نَبَر مختلف عمداً للتشديد.

التكرار والـAnaphora: تكرار "charter\'d" (المقطع 1)، و"every" (المقطع 2)، و"marks" يخلق أثر شامل — المعاناة في كل مكان، ما في أحد يهرب.

ضمير المتكلّم: "I wander"، "I hear"، "I meet" — المتكلّم شاهد، بس سلبي. يراقب وما يقدر يتدخّل. وهذا يعكس موقع قارئ Blake.

Volta: ما في تحوّل تقليدي. القصيدة تنتقل من الملاحظة (المقاطع 1-2) إلى أمثلة محدّدة على فشل المؤسسات (المقاطع 3-4)، بس القتامة تتعمّق بدل ما تنقلب.

الصوت: استخدام كثيف للحروف الساكنة القاسية والحركات الصوتية الحزينة. القصيدة تطنّ مريرة ومتعبة. والتضاد الختامي "Marriage hearse" صوتياً صادم، ويترك القارئ مزعزَع.`,

  keyQuotes: [
    {
      quote: "each charter'd street ... charter'd Thames",
      analysis:
        'The repetition of "charter\'d" suggests total control. Streets being owned is one thing, but the Thames - a natural river - being "charter\'d" shows the absurdity. Even nature has been claimed by the wealthy. Blake protests against the privatisation of common space.',
      themes: ['Oppression', 'Power', 'Capitalism'],
      analysisAr:
        'تكرار "charter\'d" يوحي بسيطرة شاملة. ملكية الشوارع شي، بس نهر التايمز — وهو نهر طبيعي — يصير "charter\'d"، فهذي عبثية. حتى الطبيعة استولى عليها الأغنياء. Blake يحتجّ على خصخصة الفضاء المشترك.',
      themesAr: ['القمع', 'السلطة', 'الرأسمالية'],
    },
    {
      quote: 'Marks of weakness, marks of woe',
      analysis:
        'The repetition and alliteration create a hammering, mournful effect. "Marks" suggests permanent signs - suffering has been etched onto Londoners\' faces. The pairing of "weakness" and "woe" links physical decline with emotional pain.',
      themes: ['Suffering', 'Universal misery', 'Oppression'],
      analysisAr:
        'التكرار والـalliteration يخلقون أثر دقّاق وحزين. كلمة "marks" توحي بعلامات دائمة — المعاناة محفورة على وجوه أهل لندن. واقتران "weakness" و"woe" يربط التدهور الجسدي بالألم العاطفي.',
      themesAr: ['المعاناة', 'البؤس الشامل', 'القمع'],
    },
    {
      quote: "The mind-forg'd manacles I hear",
      analysis:
        'The most famous line in the poem. "Mind-forg\'d manacles" is a metaphor for psychological imprisonment - Londoners have internalised their oppression and accepted it as natural. They forge their own chains. This is more devastating than physical chains because it cannot be removed by revolution alone - it requires a change of consciousness.',
      themes: ['Mental imprisonment', 'Oppression', 'Powerlessness'],
      analysisAr:
        'أشهر بيت في القصيدة. "Mind-forg\'d manacles" استعارة عن الحبس النفسي — أهل لندن استبطنوا قمعهم وقبلوه كشي طبيعي. صاروا يصنعون قيودهم بأنفسهم. وهذا أكثر تدميراً من القيود المادية، لأن الثورة وحدها ما تقدر تكسره — يحتاج تغيير في الوعي.',
      themesAr: ['الحبس الذهني', 'القمع', 'العجز'],
    },
    {
      quote: 'every blackning Church appalls',
      analysis:
        '"Blackning" works literally (soot from chimneys) and metaphorically (moral corruption). "Appalls" means both "horrifies" and "makes pale" - the Church is shocked by suffering yet pale with hypocrisy. Blake attacks the institution that should protect the poor for being complicit in their suffering.',
      themes: ['Religion', 'Hypocrisy', 'Institutional failure'],
      analysisAr:
        'كلمة "blackning" تشتغل حرفياً (سخام المداخن) ومجازياً (فساد أخلاقي). وكلمة "appalls" تعني "يرعب" و"يجعل شاحباً" مع بعض — الكنيسة مصدومة من المعاناة، بس شاحبة من النفاق. Blake يهاجم المؤسسة اللي المفروض إنها تحمي الفقراء على تواطؤها في معاناتهم.',
      themesAr: ['الدين', 'النفاق', 'فشل المؤسسات'],
    },
    {
      quote: 'Runs in blood down Palace walls',
      analysis:
        "A shocking visual: the soldier's sigh becomes literal blood staining the palace. Blake makes the monarchy's guilt physical and visible. The image foreshadows revolution - blood on palace walls echoes the French Revolution Blake supported.",
      themes: ['War', 'Monarchy', 'Revolution'],
      analysisAr:
        'صورة بصرية صادمة: تنهيدة الجندي تتحوّل إلى دم حرفي يلطّخ القصر. Blake يخلّي ذنب الملكية مادي ومرئي. والصورة تستبق الثورة — الدم على جدران القصر يستحضر الثورة الفرنسية اللي دعمها Blake.',
      themesAr: ['الحرب', 'الملكية', 'الثورة'],
    },
    {
      quote: 'youthful Harlots curse',
      analysis:
        '"Youthful" emphasises that these prostitutes are young - children forced into sex work by poverty. Their "curse" is multi-layered: they swear, they have venereal disease, and they curse the society that failed them. Blake refuses to romanticise or look away.',
      themes: ['Poverty', 'Exploitation', 'Innocence corrupted'],
      analysisAr:
        'كلمة "youthful" تأكّد إن هاي البائعات صغيرات — أطفال أجبرهم الفقر على شغل الجنس. واللعنة ("curse") حقّتهم متعدّدة الطبقات: يسبّون، وعندهم أمراض تناسلية، ويلعنون المجتمع اللي خذلهم. Blake يرفض الرومنسة أو إنه يبعد نظره.',
      themesAr: ['الفقر', 'الاستغلال', 'البراءة المُفسَدة'],
    },
    {
      quote: 'blights with plagues the Marriage hearse',
      analysis:
        'The poem\'s devastating final image. "Marriage hearse" is an oxymoron - marriage should be a celebration of life, but in Blake\'s London it is a funeral carriage. Venereal disease passed from prostitutes to husbands to wives to babies turns marriage into a death sentence. Corruption infects love itself.',
      themes: ['Disease', 'Love corrupted', 'Death'],
      analysisAr:
        'صورة القصيدة الختامية المدمّرة. "Marriage hearse" تضادّ (oxymoron) — الزواج المفروض إنه احتفال بالحياة، بس في لندن Blake هو عربة جنازة. الأمراض التناسلية اللي تنتقل من البائعات للأزواج للزوجات للأطفال تحوّل الزواج إلى حكم بالموت. والفساد يصيب الحب نفسه.',
      themesAr: ['المرض', 'الحب المُفسَد', 'الموت'],
    },
    {
      quote: 'In every cry of every Man',
      analysis:
        'The anaphoric "every" in stanza 2 creates a totalising effect - no one is exempt from suffering. Blake universalises misery, making it impossible for the reader to imagine any Londoner escaping. The capitalised "Man" suggests humanity itself, not just individuals.',
      themes: ['Universal suffering', 'Powerlessness'],
      analysisAr:
        'كلمة "every" المتكرّرة (anaphora) في المقطع الثاني تخلق أثر شامل — ما في أحد معفى من المعاناة. Blake يجعل البؤس كونياً، ويخلّي القارئ ما يقدر يتخيّل أي شخص من أهل لندن يهرب. والحرف الكبير في "Man" يوحي بالإنسانية نفسها، مو بأفراد فقط.',
      themesAr: ['المعاناة الشاملة', 'العجز'],
    },
  ],

  languageDevices: [
    {
      device: 'Anaphora',
      example: 'In every cry of every Man, / In every Infants cry of fear, / In every voice',
      effect:
        'The repetition of "every" creates a relentless, totalising effect. Suffering is not occasional but universal. The reader feels overwhelmed by the catalogue of pain, just as the speaker is overwhelmed walking through the city.',
      lineRef: 4,
      effectAr:
        'تكرار "every" يخلق أثر شامل ما يهدأ. المعاناة مو عابرة بل كونية. والقارئ يحسّ بالغرق تحت قائمة الألم، تماماً مثل غرق المتكلّم وهو يمشي في المدينة.',
    },
    {
      device: 'Metaphor',
      example: "The mind-forg'd manacles I hear",
      effect:
        "Blake's most famous metaphor describes mental imprisonment. The chains are not external but internal - Londoners have created their own oppression by accepting the system. This makes the suffering harder to escape than literal chains, because revolution alone cannot break it.",
      lineRef: 7,
      effectAr:
        'أشهر استعارة عند Blake، توصف الحبس الذهني. القيود مو خارجية بل داخلية — أهل لندن خلقوا قمعهم بنفسهم بقبولهم للنظام. هذا يخلّي المعاناة أصعب من القيود الحرفية في الهرب منها، لأن الثورة وحدها ما تقدر تكسرها.',
    },
    {
      device: 'Symbolism',
      example: 'every blackning Church appalls',
      effect:
        'The Church symbolises institutional religion\'s moral failure. "Blackning" works as both literal soot and metaphorical corruption. Blake suggests that the very institutions claiming to protect souls are blackened by their complicity with suffering.',
      lineRef: 9,
      effectAr:
        'الكنيسة ترمز للفشل الأخلاقي للدين المؤسّسي. كلمة "blackning" تشتغل كسخام حرفي وكفساد مجازي مع بعض. Blake يلمّح إن المؤسسات اللي تدّعي حماية الأرواح هي نفسها مسوّدة بتواطؤها مع المعاناة.',
    },
    {
      device: 'Oxymoron',
      example: 'Marriage hearse',
      effect:
        "The poem's devastating closing image. Marriage (life, love, hope) is paired with hearse (death, ending). The oxymoron captures how London's corruption infects even the most sacred institutions. It leaves the reader with a permanent jolt of disgust.",
      lineRef: 15,
      effectAr:
        'صورة القصيدة الختامية المدمّرة. الزواج (حياة، حب، أمل) مقترن بـhearse (موت، نهاية). والتضاد يجسّد كيف فساد لندن يصيب حتى أكثر المؤسسات قدسيةً. ويخلّي القارئ مع صدمة دائمة من الاشمئزاز.',
    },
    {
      device: 'Imagery (visual)',
      example: 'Runs in blood down Palace walls',
      effect:
        'A shocking visual that makes the abstract guilt of the monarchy literal. The soldier\'s "sigh" becomes blood. Blake forces the reader to see what political language hides: the human cost of war and royal power.',
      lineRef: 11,
      effectAr:
        'صورة بصرية صادمة تحوّل ذنب الملكية المجرّد إلى شي حرفي. تنهيدة الجندي ("sigh") تصير دم. Blake يجبر القارئ يشوف اللي تخفيه اللغة السياسية: الكلفة الإنسانية للحرب وللسلطة الملكية.',
    },
    {
      device: 'Repetition',
      example: "charter'd street ... charter'd Thames / marks of weakness, marks of woe",
      effect:
        'Heavy repetition creates a hammering, oppressive rhythm. The reader cannot escape the words just as Londoners cannot escape suffering. "Charter\'d" repeated emphasises that even nature has been controlled.',
      lineRef: 1,
      effectAr:
        'التكرار الكثيف يخلق إيقاع دقّاق وقامع. القارئ ما يقدر يهرب من الكلمات تماماً مثل ما ما يقدر أهل لندن يهربون من المعاناة. وتكرار "charter\'d" يأكّد إن حتى الطبيعة صارت تحت السيطرة.',
    },
    {
      device: 'Alliteration',
      example: 'marks ... weakness ... woe',
      effect:
        'The alliterative "w" sounds in "weakness" and "woe" create a soft, mournful tone. Combined with the harder "m" of "marks", the effect is exhausted, defeated - the sound of someone tired of seeing suffering.',
      lineRef: 3,
      effectAr:
        'الـalliteration على حرف "w" في "weakness" و"woe" يخلق نبرة ناعمة وحزينة. وبدمجها مع حرف "m" الأصلب في "marks"، الأثر مرهَق ومهزوم — صوت شخص تعب من رؤية المعاناة.',
    },
  ],
}

const comparisons = [
  {
    title: 'Ozymandias',
    poet: 'Percy Bysshe Shelley',
    href: '/revision/poetry/eduqas/ozymandias',
    reason:
      'Both Romantic poems criticise abusive power. Blake attacks the institutions of his own time; Shelley attacks ancient tyranny. Both warn that power structures cause suffering.',
    themes: ['Power', 'Oppression', 'Political critique'],
  },
  {
    title: 'A Wife in London',
    poet: 'Thomas Hardy',
    href: '/revision/poetry/eduqas/a-wife-in-london',
    reason:
      'Both poems use London as a setting for grief and oppression. Hardy shows personal tragedy; Blake shows systemic suffering. Both make the city itself feel hostile.',
    themes: ['London setting', 'Suffering', 'Loss'],
  },
  {
    title: 'Dulce et Decorum Est',
    poet: 'Wilfred Owen',
    href: '/revision/poetry/eduqas/dulce-et-decorum-est',
    reason:
      'Both poets attack the institutions that send soldiers to die. Blake\'s "blood down Palace walls" anticipates Owen\'s exposure of the truth behind patriotic rhetoric.',
    themes: ['War', 'Institutional failure', 'Suffering'],
  },
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'lon-1',
    question: 'What does "charter\'d" suggest about London?',
    type: 'multiple-choice',
    options: [
      'The streets are well-maintained',
      'Everything is controlled, owned, and commercialised',
      'The streets are full of tourists',
      'London is free',
    ],
    correctIndex: 1,
    explanation:
      'Blake uses "charter\'d" to suggest even streets and the Thames are controlled. Freedom is an illusion.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'lon-2',
    question: 'What are "mind-forg\'d manacles"?',
    type: 'multiple-choice',
    options: [
      'Physical chains',
      'Psychological chains — people imprisoned by acceptance of oppression',
      'Bracelets',
      'Laws',
    ],
    correctIndex: 1,
    explanation:
      'The chains are mental — people have internalised their oppression and accepted it as normal.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'lon-3',
    question: 'What institutions does Blake attack?',
    type: 'multiple-choice',
    options: [
      'Schools and hospitals',
      'The Church and the monarchy',
      'Factories and shops',
      'The army',
    ],
    correctIndex: 1,
    explanation:
      'Blake attacks the Church for ignoring child chimney sweeps and the monarchy for sending soldiers to die.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'lon-4',
    question: 'What is the oxymoron "Marriage hearse"?',
    type: 'multiple-choice',
    options: [
      'A wedding tradition',
      'Love and death fused — corruption has poisoned every aspect of life',
      'A funeral procession',
      'A type of carriage',
    ],
    correctIndex: 1,
    explanation:
      'Marriage (love) combined with hearse (death) shows corruption has destroyed even sacred institutions.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'lon-5',
    question: 'What dominates stanza 2?',
    type: 'multiple-choice',
    options: [
      'Rhyming couplets',
      'Anaphora — "In every" repeated four times',
      'A volta',
      'Lack of punctuation',
    ],
    correctIndex: 1,
    explanation:
      'The repetition creates overwhelming, cumulative effect making suffering feel universal.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'lon-6',
    question: 'What does "Runs in blood down Palace walls" suggest?',
    type: 'multiple-choice',
    options: [
      'The Palace is being painted',
      "Blake directly blames the monarchy for soldiers' deaths",
      'Soldiers are protecting the Palace',
      'The Palace is under renovation',
    ],
    correctIndex: 1,
    explanation:
      'Blood on "Palace walls" makes the monarchy\'s responsibility for death undeniable.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'lon-7',
    question: 'When was the poem published?',
    type: 'multiple-choice',
    options: ['1818', '1794, during the Industrial Revolution', '1850', '1914'],
    correctIndex: 1,
    explanation:
      'Published in Songs of Experience (1794) during the Industrial Revolution and aftermath of the French Revolution.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'lon-8',
    question: 'What metre does Blake use?',
    type: 'multiple-choice',
    options: [
      'Free verse',
      'Iambic tetrameter — steady marching rhythm',
      'Iambic pentameter',
      'Anapaestic',
    ],
    correctIndex: 1,
    explanation: 'The four-beat rhythm sounds like footsteps, reinforcing relentless oppression.',
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'lon-9',
    question: 'How does the cyclical structure reinforce the message?',
    type: 'multiple-choice',
    options: [
      'London is improving',
      'Suffering repeats endlessly from generation to generation',
      'There is resolution',
      'The streets are circular',
    ],
    correctIndex: 1,
    explanation:
      "The poem begins with a baby's cry and ends with a new-born infant's tear — suffering passes from generation to generation.",
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'lon-10',
    question: 'Which theme is most central to the poem?',
    type: 'multiple-choice',
    options: [
      "Nature's beauty",
      'Institutional oppression and its effects on ordinary people',
      'Romantic love',
      'Travel',
    ],
    correctIndex: 1,
    explanation:
      'The poem attacks every level of institutional power — commercial, religious, royal — and shows how they destroy innocence and freedom.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'London explores corruption of power, suffering of ordinary people, and loss of innocence in an industrialised city.',
    keyPoints: [
      'Power corrupts — Church, monarchy, and commercial interests cause suffering',
      'Oppression is both external and internal ("mind-forg\'d manacles")',
      'Innocence destroyed — children suffer from birth',
      'Cyclical suffering repeats across generations',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Blake uses metaphor, repetition, oxymoron, and visceral imagery to create unrelenting suffering.',
    keyPoints: [
      '"Mind-forg\'d manacles" — psychological chains',
      '"Marriage hearse" — oxymoron fusing love with death',
      '"Runs in blood down Palace walls" — monarchy blamed',
      'Semantic field of suffering throughout',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      "Four quatrains in ABAB rhyme with iambic tetrameter — rigid structure mirrors charter'd restrictions.",
    keyPoints: [
      'Regular ABAB rhyme — form as constrained as the city',
      'Anaphora in stanza 2 — overwhelming cumulative effect',
      '"But most" signals volta to darkest imagery',
      'First-person narrator as eyewitness',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Blake present the effects of power on ordinary people in London?',
  'Compare how Blake and one other poet present the abuse of power.',
  'How does Blake use language and structure to create a sense of hopelessness?',
]

export default function LondonEduqasPage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="London by William Blake — Analysis & Annotations"
        description="Line-by-line analysis of London with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          { name: 'Eduqas Poetry', url: 'https://theenglishhub.app/revision/poetry/eduqas' },
          { name: 'London', url: 'https://theenglishhub.app/revision/poetry/eduqas/london' },
        ]}
      />
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/eduqas" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Eduqas Poetry
        </Button>

        <div className="mb-5 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-body-sm text-amber-100">
          <p className="font-semibold mb-1">Legacy anthology notice</p>
          <p className="text-amber-100/90 leading-relaxed">
            This page is from the legacy pre-2025 Eduqas anthology. The current Eduqas 2025 cluster
            does not include this poem. The content remains as a study reference.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <BookOpen className="size-5 text-clay-600" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">London</h1>
            <p className="text-body-sm text-muted-foreground">
              William Blake &middot; Eduqas Poetry Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Eduqas
            </Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="London"
        textType="poem"
        examBoard="Eduqas"
        cluster="Eduqas Poetry Anthology"
        variant="compact"
      />
      <InlineStudyEngine
        textName="London"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={london} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">Compare with</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong Eduqas pairings for comparison questions involving London.
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

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        Poem text is reproduced for the purpose of private study and educational criticism under UK
        fair-dealing provisions (Copyright, Designs and Patents Act 1988, s.30). No commercial use
        is intended. All quotations remain the intellectual property of the respective rights
        holders.
      </footer>
    </div>
  )
}
