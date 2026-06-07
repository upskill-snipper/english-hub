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
import { useT } from '@/lib/i18n/use-t'
const soldier: PoemData = {
  title: 'The Soldier',
  poet: 'Rupert Brooke',
  lines: [
    {
      text: 'If I should die, think only this of me:',
      annotations: [
        {
          type: 'Conditional',
          note: '"If I should die" - the speaker contemplates his own possible death calmly. There is no fear, only quiet acceptance. He directs the reader\'s response.',
          color: '#3b82f6',
        },
        {
          type: 'Direct address',
          note: 'The poem is a personal message - "think only this of me". The speaker controls the narrative of his death, leaving instructions for those who survive him.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: "   That there's some corner of a foreign field",
      annotations: [
        {
          type: 'Key quote',
          note: 'The famous opening of the central conceit. The "corner of a foreign field" will become English forever through the soldier\'s death. England expands through his sacrifice.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'That is for ever England. There shall be',
      annotations: [
        {
          type: 'Hyperbole',
          note: '"For ever" - the speaker imagines his death creating eternal English territory. The grandiose claim shows his romantic, idealistic view of patriotic sacrifice.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '   In that rich earth a richer dust concealed;',
      annotations: [
        {
          type: 'Imagery',
          note: '"Richer dust" - the speaker\'s body, made of English soil, will enrich the foreign earth. He literally identifies himself with England. "Concealed" suggests the body is buried.',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'A dust whom England bore, shaped, made aware,',
      annotations: [
        {
          type: 'Personification',
          note: 'England is personified as a mother figure - "bore, shaped, made aware". The country gave him life, formed his character, and gave him consciousness. Total identification of self with nation.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '   Gave, once, her flowers to love, her ways to roam,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Her flowers to love, her ways to roam" - England is a generous mother who provided beauty and freedom. The speaker remembers idyllic English landscape.',
          color: '#10b981',
        },
      ],
    },
    {
      text: "A body of England's, breathing English air,",
      annotations: [
        {
          type: 'Repetition',
          note: 'The repetition of "England" and "English" hammers home the central idea: the speaker is utterly English. There is no other identity.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: '   Washed by the rivers, blest by suns of home.',
      annotations: [
        {
          type: 'Religious diction',
          note: '"Blest by suns" - the language is religious, sanctifying English nature. The sunlight is a blessing, not just illumination.',
          color: '#3b82f6',
        },
        {
          type: 'Key quote',
          note: "The octave's closing line completes the picture: the soldier's body is England's in every way, blessed by English nature. This is the foundation for his sacrifice.",
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'And think, this heart, all evil shed away,',
      annotations: [
        {
          type: 'Volta',
          note: '"And think" - the sestet begins with a turn from physical body to spiritual heart. The speaker imagines death as purification - "all evil shed away".',
          color: '#a855f7',
        },
      ],
    },
    {
      text: '   A pulse in the eternal mind, no less',
      annotations: [
        {
          type: 'Diction',
          note: '"Eternal mind" - the speaker imagines becoming part of an eternal consciousness. The metaphor is mystical, almost religious.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: 'Gives somewhere back the thoughts by England given;',
      annotations: [
        {
          type: 'Reciprocity',
          note: 'The speaker returns to England what England gave him - his thoughts, his identity. Death is not loss but a giving back.',
          color: '#a855f7',
        },
      ],
    },
    {
      text: '   Her sights and sounds; dreams happy as her day;',
      annotations: [
        {
          type: 'Imagery',
          note: '"Sights and sounds; dreams happy as her day" - the speaker celebrates English experience. Even after death, he gives back this English joy to "the eternal mind".',
          color: '#10b981',
        },
      ],
    },
    {
      text: 'And laughter, learnt of friends; and gentleness,',
      annotations: [
        {
          type: 'Catalogue',
          note: '"Laughter, learnt of friends" - English friendship and joy. The catalogue of English virtues (laughter, gentleness) creates an idealised vision.',
          color: '#10b981',
        },
      ],
    },
    {
      text: '   In hearts at peace, under an English heaven.',
      annotations: [
        {
          type: 'Closing image',
          note: '"Hearts at peace, under an English heaven" - even heaven is English. Total patriotic vision. The poem ends not with death\'s horror but with idyllic peace.',
          color: '#10b981',
        },
        {
          type: 'Key quote',
          note: 'The famous closing line. Brooke imagines paradise itself as English. The line shows total identification of nation with afterlife.',
          color: '#f59e0b',
        },
      ],
    },
  ],

  context: `
    <h3>Rupert Brooke (1887-1915)</h3>
    <p>Brooke was an English poet famous for his idealistic war sonnets. Handsome, charismatic, and a Cambridge graduate, he became a national symbol of patriotic youth. He was friends with Virginia Woolf and other Bloomsbury writers.</p>

    <h3>Composition (1914)</h3>
    <p>"The Soldier" was written at the start of WW1, before Brooke had experienced any combat. He saw the war as a noble, cleansing crusade. The poem reflects the optimistic, romantic view of war that was common in 1914.</p>

    <h3>Brooke\'s Death</h3>
    <p>Brooke died in April 1915, aged 27, on his way to the Gallipoli campaign. He died not in battle but from sepsis caused by an infected mosquito bite. He was buried on the Greek island of Skyros - "a corner of a foreign field" indeed.</p>

    <h3>National Symbol</h3>
    <p>After his death, Brooke became a martyr-figure for patriotic Britain. The Dean of St Paul\'s Cathedral read "The Soldier" in a sermon on Easter Sunday 1915. Winston Churchill wrote his obituary. Brooke\'s romantic image of English sacrifice was used in propaganda throughout the war.</p>

    <h3>Pre-Trench Warfare View</h3>
    <p>The poem belongs to the early phase of WW1, before the horrors of the Somme and Passchendaele changed public attitudes. Brooke never saw the trenches. His vision of noble death contrasts sharply with the later poems by Owen, Sassoon, and Rosenberg, who experienced the reality of industrialised warfare.</p>

    <h3>Edwardian Patriotism</h3>
    <p>The poem reflects <strong>Edwardian patriotism</strong> - a confident belief in England\'s moral and cultural superiority. England is presented as a mother who gives life and meaning. To die for England is therefore the highest possible honour.</p>
  `,

  contextAr: `
    <h3>Rupert Brooke (1887-1915)</h3>
    <p>Brooke شاعر إنجليزي اشتهر بقصايد الحرب المثالية. كان شخصية وسيمة كاريزماتية، خرّيج Cambridge، وصار رمز قومي للشباب الوطني. كان صديق Virginia Woolf وكتّاب Bloomsbury الثانيين.</p>

    <h3>الكتابة (1914)</h3>
    <p>"The Soldier" انكتبت في بداية الحرب العالمية الأولى، قبل ما Brooke يخوض أي قتال. كان يشوف الحرب كحملة نبيلة مطهّرة. القصيدة تعكس النظرة المتفائلة والرومانسية للحرب اللي كانت شايعة في 1914.</p>

    <h3>موت Brooke</h3>
    <p>Brooke توفي في إبريل 1915، وعمره 27 سنة، في طريقه لحملة Gallipoli. مات مو في معركة، بل بسبب تسمّم دم من قرصة بعوضة ملوّثة. دفنوه في الجزيرة اليونانية Skyros - "ركن من حقل غريب" فعلاً.</p>

    <h3>الرمز القومي</h3>
    <p>بعد موته، Brooke صار شخصية شهيد لبريطانيا الوطنية. عميد كاتدرائية St Paul قرى "The Soldier" في عظة يوم Easter Sunday 1915. Winston Churchill كتب نعيه. صورة Brooke الرومانسية للتضحية الإنجليزية استُخدمت في الدعاية طول الحرب.</p>

    <h3>نظرة ما قبل حرب الخنادق</h3>
    <p>القصيدة تنتمي للمرحلة الأولى من الحرب العالمية الأولى، قبل أهوال Somme وPasschendaele اللي غيّرت الموقف الشعبي. Brooke ما شاف الخنادق أبد. رؤيته للموت النبيل تتناقض بشكل صارخ مع قصايد Owen وSassoon وRosenberg اللاحقة، اللي عاشوا واقع الحرب الصناعية.</p>

    <h3>الوطنية الإدواردية</h3>
    <p>القصيدة تعكس <strong>الوطنية الإدواردية</strong> - إيمان واثق بالتفوّق الأخلاقي والثقافي لإنجلترا. إنجلترا تُقدَّم كأم تعطي الحياة والمعنى. الموت من أجل إنجلترا هو أعلى شرف ممكن.</p>
  `,

  summary: `Octave (lines 1-8): The speaker addresses the reader: if he should die in war, they should think of him as having made "some corner of a foreign field" forever English. His body, made of English soil, will enrich foreign earth. He emphasises that England has given him everything - it has shaped him, given him life, beauty, and freedom.

Sestet (lines 9-14): The speaker turns from his physical body to his spiritual heart. After death, his soul will become "a pulse in the eternal mind", returning to a kind of cosmic consciousness all the gifts England gave him: thoughts, sights, sounds, dreams, laughter, gentleness. The poem ends with the image of "hearts at peace, under an English heaven".

Overall meaning: "The Soldier" is a romantic, idealistic vision of patriotic sacrifice. Brooke imagines death in war as a noble act that unites the soldier with England forever. The poem makes no mention of pain, fear, or violence - death is presented as peaceful, beautiful, and sacred. It is the perfect example of the patriotic poetry that Owen would later attack as "the old Lie".`,

  summaryAr: `الـoctave (الأبيات 1-8): المتكلّم يخاطب القارئ: إذا مات في الحرب، يفترض إنهم يفكّرون فيه إنه سوّى "some corner of a foreign field" إنجليزي للأبد. جسمه، اللي مصنوع من تراب إنجليزي، بيخصّب الأرض الغريبة. يأكّد إن إنجلترا عطته كل شي - شكّلته، عطته الحياة، الجمال، والحرية.

الـsestet (الأبيات 9-14): المتكلّم ينتقل من جسمه المادي لقلبه الروحي. بعد الموت، روحه تصير "a pulse in the eternal mind"، تردّ لنوع من الوعي الكوني كل الهبات اللي عطتها له إنجلترا: أفكار، مناظر، أصوات، أحلام، ضحك، لطف. القصيدة تنتهي بصورة "hearts at peace, under an English heaven".

المعنى العام: "The Soldier" رؤية رومانسية مثالية للتضحية الوطنية. Brooke يتصوّر الموت في الحرب كعمل نبيل يوحّد الجندي بإنجلترا للأبد. القصيدة ما تذكر ألم ولا خوف ولا عنف - الموت يُقدَّم هادئ، جميل، مقدّس. هي المثال المثالي للشعر الوطني اللي بعدين Owen هاجمه كـ"the old Lie".`,

  formAndStructure: `Form: Petrarchan sonnet with a Shakespearean rhyme scheme. The traditional sonnet form gives the poem dignity and authority - it sounds noble, official, even religious.

Rhyme scheme: ABABCDCD in the octave, EFGEFG in the sestet. The rigid, traditional rhyme scheme reinforces the sense of established order and inherited values. It feels like a hymn or a prayer.

Metre: Iambic pentameter throughout. The regular, steady rhythm gives the poem a calm, controlled quality. There is no metrical disruption - everything is ordered and certain.

Octave/sestet division: The octave focuses on the body (physical sacrifice); the sestet focuses on the soul (spiritual transcendence). The traditional volta marks the move from earthly to heavenly.

Volta: At the start of the sestet ("And think, this heart..."), the poem turns from the physical body to the spiritual heart. The shift is from material death to spiritual immortality.

Repetition: "England" and "English" are repeated throughout (8 times in 14 lines). The repetition creates a near-religious incantation, fixing England as the central object of devotion.

Diction: The vocabulary is archaic and elevated - "blest", "evil shed away", "eternal mind". The language sounds biblical and ceremonial, lifting the poem above ordinary speech.

Tone: Calm, confident, devotional. There is no fear or doubt. The speaker has made peace with the idea of death. This calm tone is what makes the poem powerful - and, to later readers, troubling.`,

  formAndStructureAr: `Form: Petrarchan sonnet مع نظام قافية Shakespearean. الشكل التقليدي للـsonnet يعطي القصيدة هيبة وسلطة - يحسّ نبيل، رسمي، حتى ديني.

Rhyme scheme: ABABCDCD في الـoctave، EFGEFG في الـsestet. القافية الصارمة التقليدية تعزّز إحساس النظام والقيم الموروثة. تحسّ كأنها ترنيمة أو دعاء.

Metre: iambic pentameter طول القصيدة. الإيقاع المنتظم الثابت يعطي القصيدة طابع هادي ومسيطر عليه. ما فيه أي اضطراب وزني - كل شي مرتّب ومؤكّد.

تقسيم الـoctave/sestet: الـoctave يركّز على الجسم (التضحية المادية)؛ الـsestet يركّز على الروح (التجاوز الروحي). الـvolta التقليدي يعلّم الانتقال من الأرضي للسماوي.

Volta: في بداية الـsestet ("And think, this heart...")، القصيدة تتحوّل من الجسم المادي للقلب الروحي. الانتقال من الموت المادي للخلود الروحي.

التكرار: "England" و"English" تتكرّر طول القصيدة (8 مرات في 14 بيت). التكرار يخلق ترتيل شبه ديني، يثبّت إنجلترا كموضوع التفاني الأساسي.

اللغة: المفردات قديمة ورفيعة - "blest"، "evil shed away"، "eternal mind". اللغة تحسّ توراتية ومراسمية، ترفع القصيدة فوق الكلام العادي.

النبرة: هادية، واثقة، تعبّدية. ما فيه خوف ولا شك. المتكلّم تصالح مع فكرة الموت. هالنبرة الهادية هي اللي تخلّي القصيدة قوية - وللقرّاء المتأخّرين، مزعجة.`,

  keyQuotes: [
    {
      quote: 'If I should die, think only this of me',
      analysis:
        'The opening establishes the speaker\'s composed attitude to death. "If I should die" treats his own death as a calm possibility. "Think only this of me" - the speaker controls the narrative, instructing the reader how to remember him. There is no panic.',
      themes: ['Patriotic sacrifice', 'Death', 'Control of narrative'],
      analysisAr:
        'الافتتاحية تأسّس موقف المتكلّم المتزن من الموت. "If I should die" يتعامل مع موته كاحتمال هادي. "Think only this of me" - المتكلّم يسيطر على السرد، يوجّه القارئ كيف يتذكّره. ما فيه هلع.',
      themesAr: ['التضحية الوطنية', 'الموت', 'السيطرة على السرد'],
    },
    {
      quote: 'some corner of a foreign field / That is for ever England',
      analysis:
        'The famous central conceit. The soldier\'s death creates eternal English territory abroad. "For ever" makes the claim hyperbolic - his sacrifice is permanent, monumental. England expands through individual death.',
      themes: ['Patriotism', 'Empire', 'Sacrifice'],
      analysisAr:
        'الـconceit المركزي الشهير. موت الجندي يخلق أرض إنجليزية أبدية في الخارج. "For ever" تخلّي الادّعاء مبالغ - تضحيته دائمة، ضخمة. إنجلترا تتمدّد عبر موت الفرد.',
      themesAr: ['الوطنية', 'الإمبراطورية', 'التضحية'],
    },
    {
      quote: 'A dust whom England bore, shaped, made aware',
      analysis:
        'England is personified as a mother who gave the speaker life, character, and consciousness. The triple verb "bore, shaped, made aware" captures the totality of England\'s gift. The speaker owes everything to his country.',
      themes: ['Patriotism', 'Identity', 'Personification'],
      analysisAr:
        'إنجلترا مشخصنة كأم عطت المتكلّم الحياة والشخصية والوعي. الفعل الثلاثي "bore, shaped, made aware" يلتقط شمولية هبة إنجلترا. المتكلّم يدين لبلده بكل شي.',
      themesAr: ['الوطنية', 'الهوية', 'Personification'],
    },
    {
      quote: "A body of England's, breathing English air",
      analysis:
        'The speaker is not just from England - he IS England. His body is "England\'s", his breath is "English". The repetition obliterates any separation between self and nation. This is total patriotism.',
      themes: ['Identity', 'Nationalism', 'Repetition'],
      analysisAr:
        'المتكلّم مو بس من إنجلترا - هو إنجلترا. جسمه "England\'s"، نفسه "English". التكرار يمحي أي فصل بين الذات والوطن. هذي وطنية كاملة.',
      themesAr: ['الهوية', 'القومية', 'التكرار'],
    },
    {
      quote: 'Washed by the rivers, blest by suns of home',
      analysis:
        'Religious language ("blest") sanctifies English nature. Rivers and sun are gifts from England, blessings from a sacred place. The line idealises the English landscape as a holy benediction.',
      themes: ['Pastoral', 'Religion', 'Idealisation'],
      analysisAr:
        'اللغة الدينية ("blest") تقدّس الطبيعة الإنجليزية. الأنهار والشمس هبات من إنجلترا، بركات من مكان مقدّس. البيت يضفي مثالية على المنظر الإنجليزي كنعمة مقدّسة.',
      themesAr: ['الريفي', 'الدين', 'المثالية'],
    },
    {
      quote: 'this heart, all evil shed away',
      analysis:
        'The volta of the sonnet. Death is presented as purification - all evil falls away. The speaker imagines becoming pure through dying. This is the romantic view of war as morally cleansing.',
      themes: ['Purification', 'Death', 'Idealism'],
      analysisAr:
        'الـvolta في الـsonnet. الموت يُقدَّم كتطهير - كل الشر يسقط. المتكلّم يتصوّر إنه يصير نقي من خلال الموت. هذي الرؤية الرومانسية للحرب كمطهّرة أخلاقياً.',
      themesAr: ['التطهير', 'الموت', 'المثالية'],
    },
    {
      quote: 'A pulse in the eternal mind',
      analysis:
        'Mystical, near-religious metaphor. The dead soldier becomes a heartbeat in some cosmic consciousness. Death is not an end but a continuation of awareness in a greater whole. This is poetic, but completely unscientific.',
      themes: ['Spirituality', 'Death', 'Continuity'],
      analysisAr:
        'استعارة صوفية شبه دينية. الجندي الميت يصير نبضة في وعي كوني. الموت مو نهاية بل امتداد للوعي في كلّ أكبر. هذا شاعري، بس غير علمي تماماً.',
      themesAr: ['الروحانية', 'الموت', 'الاستمرارية'],
    },
    {
      quote: 'In hearts at peace, under an English heaven',
      analysis:
        "The closing line is the poem's most extreme image - even heaven is English. Brooke imagines paradise as having a national identity. This is the height of patriotic devotion: not just England forever, but England in eternity. The image is beautiful, troubling, and entirely typical of pre-trench-warfare patriotism.",
      themes: ['Heaven', 'Nationalism', 'Eternal England'],
      analysisAr:
        'البيت الختامي هو أكثر صورة متطرّفة في القصيدة - حتى الجنّة إنجليزية. Brooke يتصوّر الفردوس بهوية قومية. هذي قمّة التفاني الوطني: مو بس إنجلترا للأبد، بل إنجلترا في الأبدية. الصورة جميلة ومزعجة ونموذجية تماماً للوطنية ما قبل حرب الخنادق.',
      themesAr: ['الجنّة', 'القومية', 'إنجلترا الأبدية'],
    },
  ],

  languageDevices: [
    {
      device: 'Personification',
      example: 'A dust whom England bore, shaped, made aware ... her flowers to love',
      effect:
        "England is personified as a mother throughout the poem. She gives birth, shapes character, provides flowers and freedom. This makes patriotism feel familial and natural - dying for England becomes like dying for one's mother.",
      lineRef: 5,
      effectAr:
        'إنجلترا مشخصنة كأم طول القصيدة. تلد، تشكّل الشخصية، تعطي زهور وحرية. هذا يخلّي الوطنية تحسّ عائلية وطبيعية - الموت من أجل إنجلترا يصير مثل الموت من أجل أم الإنسان.',
    },
    {
      device: 'Repetition',
      example: "England ... English ... England's ... English ... English",
      effect:
        'England and English are repeated 8 times in 14 lines. The repetition functions like an incantation, fixing England as the only meaningful identity. The reader cannot escape the word - just as the speaker cannot escape his national identity.',
      lineRef: 3,
      effectAr:
        '"England" و"English" تتكرّر 8 مرات في 14 بيت. التكرار يشتغل كتعويذة، يثبّت إنجلترا كالهوية الوحيدة ذات المعنى. القارئ ما يقدر يهرب من الكلمة - مثل ما المتكلّم ما يقدر يهرب من هويته القومية.',
    },
    {
      device: 'Religious diction',
      example: 'blest ... evil shed away ... eternal ... heaven',
      effect:
        'The language is religious and ceremonial. England becomes a sacred place; death becomes purification; the afterlife is "an English heaven". The religious tone elevates patriotism into a kind of faith.',
      lineRef: 8,
      effectAr:
        'اللغة دينية ومراسمية. إنجلترا تصير مكان مقدّس؛ الموت يصير تطهير؛ الحياة الآخرة "an English heaven". النبرة الدينية ترفع الوطنية لنوع من الإيمان.',
    },
    {
      device: 'Sonnet form',
      example: 'Traditional Petrarchan sonnet with octave/sestet division',
      effect:
        "The sonnet form is traditionally used for love poetry. Brooke writes a love poem to his country. The form's dignified tradition gives the patriotic content authority and beauty - it sounds inherited, eternal, sacred.",
      lineRef: 1,
      effectAr:
        'شكل الـsonnet يُستخدم تقليدياً لشعر الحب. Brooke يكتب قصيدة حب لبلده. تقليد الشكل المهيب يعطي المحتوى الوطني سلطة وجمال - يحسّ موروث، أبدي، مقدّس.',
    },
    {
      device: 'Hyperbole',
      example: 'for ever England ... eternal mind ... English heaven',
      effect:
        'The poem repeatedly uses hyperbolic language - "for ever", "eternal", "heaven". The exaggeration is not accidental - Brooke\'s patriotism is deliberately monumental. Nothing about this vision is small or modest.',
      lineRef: 3,
      effectAr:
        'القصيدة تستخدم لغة مبالغة بشكل متكرّر - "for ever"، "eternal"، "heaven". المبالغة مو صدفة - وطنية Brooke ضخمة عن قصد. ما فيه شي في هالرؤية صغير ولا متواضع.',
    },
    {
      device: 'Volta',
      example: 'And think, this heart, all evil shed away',
      effect:
        'The traditional sonnet turn moves the poem from body (octave) to soul (sestet). The shift signals a move from physical sacrifice to spiritual immortality. The volta is the structural heart of the patriotic vision.',
      lineRef: 9,
      effectAr:
        'التحوّل التقليدي في الـsonnet ينقل القصيدة من الجسم (octave) للروح (sestet). الانتقال يأشّر للحركة من التضحية المادية للخلود الروحي. الـvolta هو القلب البنيوي للرؤية الوطنية.',
    },
    {
      device: 'Imagery (pastoral)',
      example: 'her flowers to love, her ways to roam ... washed by the rivers, blest by suns',
      effect:
        'Brooke uses idyllic pastoral imagery - flowers, rivers, sunshine. England is presented as a beautiful, gentle landscape. The reader is invited to love England as a place worth dying for.',
      lineRef: 6,
      effectAr:
        'Brooke يستخدم صور ريفية مثالية - زهور، أنهار، أشعة شمس. إنجلترا تُقدَّم كمنظر جميل ولطيف. القارئ يُدعى يحبّ إنجلترا كمكان يستحقّ الموت من أجله.',
    },
  ],
}

const comparisons = [
  {
    title: 'Dulce et Decorum Est',
    poet: 'Wilfred Owen',
    href: '/revision/poetry/eduqas/dulce-et-decorum-est',
    reason:
      "The most famous Eduqas pairing. Brooke romanticises war; Owen exposes its horror. Brooke's patriotic ideal is exactly the lie Owen attacks. The contrast in tone, imagery, and message could not be sharper.",
    themes: ['War', 'Patriotism', 'Anti-war'],
  },
  {
    title: 'A Wife in London',
    poet: 'Thomas Hardy',
    href: '/revision/poetry/eduqas/a-wife-in-london',
    reason:
      'Both poems show how soldiers die abroad while their loved ones remain at home. Brooke imagines a noble death; Hardy shows the bureaucratic, painful reality of bereavement.',
    themes: ['War', 'Death', 'Home and away'],
  },
  {
    title: 'Sonnet 43',
    poet: 'Elizabeth Barrett Browning',
    href: '/revision/poetry/eduqas/sonnet-43',
    reason:
      'Both are sonnets about devotion. EBB declares total love for a person; Brooke declares total love for a country. Both use the sonnet form to express absolute commitment.',
    themes: ['Sonnet form', 'Devotion', 'Total commitment'],
  },
]

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'ts-1',
    question: 'What is the speaker imagining?',
    type: 'multiple-choice',
    options: [
      'Returning home from war',
      'His own death in battle - and how the foreign soil where he is buried will become "a corner that is for ever England"',
      'A holiday abroad',
      'Retirement',
    ],
    correctIndex: 1,
    explanation:
      'The speaker imagines dying in battle abroad. He sees his death as a gift to the foreign land - his English body will sanctify it, making that spot "for ever England."',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'ts-2',
    question: 'What does "a corner of a foreign field that is for ever England" mean?',
    type: 'multiple-choice',
    options: [
      'England owns foreign territory',
      "The soldier's buried body transforms foreign soil into sacred English ground - death for England is a form of colonisation",
      'A cricket ground abroad',
      'An embassy',
    ],
    correctIndex: 1,
    explanation:
      'The soldier believes his English body will consecrate foreign soil, making it permanently English. This reveals a deeply patriotic - and arguably imperialist - view of English identity.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'ts-3',
    question: 'What form is the poem?',
    type: 'multiple-choice',
    options: [
      'Free verse',
      'A Petrarchan sonnet - the octave imagines death, the sestet imagines an afterlife',
      'A ballad',
      'Blank verse',
    ],
    correctIndex: 1,
    explanation:
      'A Petrarchan sonnet with an octave (lines 1-8) imagining the physical death and burial, and a sestet (lines 9-14) imagining a spiritual afterlife of peace and English values.',
    topic: 'Structure',
    difficulty: 'foundation',
  },
  {
    id: 'ts-4',
    question: 'How does Brooke present England?',
    type: 'multiple-choice',
    options: [
      'As a flawed country',
      'As an idealised, perfect motherland - gentle, pastoral, and worth dying for',
      'As a military power',
      'As a modern city',
    ],
    correctIndex: 1,
    explanation:
      'England is idealised as a gentle, nurturing motherland - "her flowers", "her ways", "English air". It is presented as a paradise worth any sacrifice.',
    topic: 'Themes',
    difficulty: 'higher',
  },
  {
    id: 'ts-5',
    question: 'When was it written and how does this affect its meaning?',
    type: 'multiple-choice',
    options: [
      'After the war ended',
      'In 1914, before the reality of trench warfare - it reflects early-war idealism that was shattered by 1915',
      'During the Victorian era',
      'In 1918',
    ],
    correctIndex: 1,
    explanation:
      "Written in 1914 before the horrors of trench warfare became known. It reflects the idealistic patriotism of the war's early months, which was soon replaced by the disillusionment of Owen and Sassoon.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'ts-6',
    question: 'Who was Rupert Brooke?',
    type: 'multiple-choice',
    options: [
      'A trench soldier who survived the war',
      'A poet who died of sepsis in 1915 without seeing combat - his poetry represents pre-war idealism',
      'A war correspondent',
      'A general',
    ],
    correctIndex: 1,
    explanation:
      'Rupert Brooke (1887-1915) died of blood poisoning on a troop ship before reaching Gallipoli. He never experienced trench combat, and his poetry represents the naive patriotism of 1914.',
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'ts-7',
    question: 'What does "a dust whom England bore, shaped, made aware" suggest?',
    type: 'multiple-choice',
    options: [
      'The soldier is dusty from travel',
      'The soldier sees himself as entirely created by England - his body, mind, and values are English through and through',
      'He is made of actual dust',
      'He is cleaning',
    ],
    correctIndex: 1,
    explanation:
      'The soldier presents himself as a product of England - born from her soil, shaped by her culture, made conscious by her influence. His identity is entirely English, making his death a gift back to the motherland.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'ts-8',
    question: 'What is the tone of the poem?',
    type: 'multiple-choice',
    options: [
      'Angry and bitter',
      'Calm, accepting, and idealistically patriotic - death is presented as peaceful and meaningful',
      'Terrified',
      'Sarcastic',
    ],
    correctIndex: 1,
    explanation:
      'The tone is remarkably calm and serene. Death is not feared but welcomed as a meaningful act. The speaker imagines peace, beauty, and an English heaven - a stark contrast to the reality of war.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'ts-9',
    question: "How does The Soldier contrast with Owen's war poetry?",
    type: 'multiple-choice',
    options: [
      'They share the same view',
      'Brooke idealises death for one\'s country as noble; Owen calls it "the old Lie" - they represent opposite poles of war poetry',
      "Owen's is more patriotic",
      'They were written at the same time',
    ],
    correctIndex: 1,
    explanation:
      'Brooke represents the idealistic patriotism of 1914; Owen represents the disillusioned realism of 1917-18. Together they show how attitudes to war changed as its reality became clear.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
  {
    id: 'ts-10',
    question: "What is problematic about the poem's view of England and sacrifice?",
    type: 'multiple-choice',
    options: [
      'Nothing - it is perfectly balanced',
      "The poem can be read as imperialist - English soil is presented as superior, and the soldier's death as colonising foreign land",
      'It is too short',
      'The rhyme scheme is wrong',
    ],
    correctIndex: 1,
    explanation:
      "Modern readers may find the poem's assumptions problematic: England is unquestioningly idealised, foreign land needs English bodies to improve it, and death in war is presented without any horror or doubt.",
    topic: 'Themes',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'The Soldier presents patriotic self-sacrifice as noble, beautiful, and meaningful - reflecting the idealism of 1914 before the reality of trench warfare.',
    keyPoints: [
      'Patriotism - England idealised as a nurturing motherland',
      'Noble sacrifice - death for England is presented as peaceful and purposeful',
      'Identity - the soldier sees himself as entirely made by England',
      'Pre-war idealism - contrasts sharply with later disillusionment',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Brooke uses pastoral imagery, personification of England as a mother, and serene, elevated language to present death as beautiful.',
    keyPoints: [
      '"A corner of a foreign field that is for ever England" - death as colonisation',
      '"A dust whom England bore, shaped, made aware" - identity as entirely English',
      'Pastoral imagery - flowers, air, rivers - England as paradise',
      'Calm, accepting tone - no fear, no horror, only peace',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'A Petrarchan sonnet - octave imagines physical death, sestet imagines spiritual afterlife. The traditional form suits the traditional values.',
    keyPoints: [
      'Petrarchan sonnet - classical form for classical ideals',
      'Octave: physical death and burial abroad',
      'Sestet: spiritual afterlife of peace and English values',
      'Regular iambic pentameter - calm, controlled, unhurried',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Brooke present patriotism and sacrifice in The Soldier?',
  'Compare how attitudes to war are presented in The Soldier and one other poem from the anthology.',
  "How does Brooke use language and the sonnet form to idealise death for one's country?",
]

export default function SoldierEduqasPage() {
  const t = useT()
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="The Soldier by Rupert Brooke - Analysis & Annotations"
        description="Line-by-line analysis of The Soldier with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          { name: 'Eduqas Poetry', url: 'https://theenglishhub.app/revision/poetry/eduqas' },
          {
            name: 'The Soldier',
            url: 'https://theenglishhub.app/revision/poetry/eduqas/the-soldier',
          },
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
          {t('rev.poetry.shared.back_to_eduqas_poetry')}
        </Button>

        <div className="mb-5 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-body-sm text-amber-100">
          <p className="font-semibold mb-1">Legacy anthology notice</p>
          <p className="text-amber-100/90 leading-relaxed">
            This page is from the legacy pre-2025 Eduqas anthology. The current Eduqas 2025 cluster
            does not include this poem. The content remains as a study reference.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10">
            <BookOpen className="size-5 text-red-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">The Soldier</h1>
            <p className="text-body-sm text-muted-foreground">
              Rupert Brooke &middot; Eduqas Poetry Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Eduqas
            </Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="The Soldier"
        textType="poem"
        examBoard="Eduqas"
        cluster="Eduqas Poetry Anthology"
        variant="compact"
      />
      <InlineStudyEngine
        textName="The Soldier"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={soldier} />

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            {t('rev.poetry.shared.compare_with')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong Eduqas pairings for war poetry comparison questions.
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
