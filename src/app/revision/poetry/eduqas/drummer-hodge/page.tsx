'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, AlertTriangle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'

/* ── Poem data (verified PD text from Verified Library) ──────────── */

const drummerHodge: PoemData = {
  title: 'Drummer Hodge',
  poet: 'Thomas Hardy',
  lines: [
    {
      text: 'They throw in Drummer Hodge, to rest',
      annotations: [
        {
          type: 'Diction',
          note: '"They throw in" is brutal and dehumanising. Hodge is not buried with ceremony but discarded, like rubbish, by anonymous hands. The verb "throw" denies dignity in death.',
          color: '#ef4444',
        },
      ],
    },
    {
      text: '  Uncoffined -- just as found:',
      annotations: [
        {
          type: 'Key quote',
          note: '"Uncoffined -- just as found" -- the em-dash isolates the brutal fact. There is no coffin, no preparation, no ceremony. The colon then opens onto the description of his makeshift grave. Hardy strips away every Victorian ritual of mourning.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: 'His landmark is a kopje-crest',
      annotations: [
        {
          type: 'Foreign vocabulary',
          note: '"Kopje" (Afrikaans for "small hill") locates the grave in the South African veldt. The foreign word emphasises Hodge’s alienation -- he lies in a landscape he cannot name.',
          color: '#10b981',
        },
      ],
    },
    { text: '  That breaks the veldt around;' },
    {
      text: 'And foreign constellations west',
      annotations: [
        {
          type: 'Imagery',
          note: '"Foreign constellations" -- the southern hemisphere stars are unfamiliar to a Wessex boy. The sky itself is alien, deepening his exile.',
          color: '#3b82f6',
        },
      ],
    },
    { text: '  Each night above his mound.' },
    { text: '' },

    { text: 'Young Hodge the Drummer never knew --' },
    { text: '  Fresh from his Wessex home --' },
    {
      text: 'The meaning of the broad Karoo,',
      annotations: [
        {
          type: 'Glossary',
          note: '"Karoo" -- the semi-desert plateau of South Africa. Hardy uses South African English to mark the unfamiliarity of the landscape.',
          color: '#10b981',
        },
      ],
    },
    { text: '  The Bush, the dusty loam,' },
    { text: 'And why uprose to nightly view' },
    {
      text: '  Strange stars amid the gloam.',
      annotations: [
        {
          type: 'Diction',
          note: '"Gloam" -- twilight. An archaic poetic word that contrasts with the African setting, capturing Hodge’s rural English perspective on a foreign sky.',
          color: '#a78bfa',
        },
      ],
    },
    { text: '' },

    { text: 'Yet portion of that unknown plain' },
    { text: '  Will Hodge for ever be;' },
    {
      text: 'His homely Northern breast and brain',
      annotations: [
        {
          type: 'Contrast',
          note: '"Homely Northern breast and brain" -- the simple Wessex boy. The contrast with the "unknown plain" emphasises how out of place he is, even in death.',
          color: '#3b82f6',
        },
      ],
    },
    {
      text: '  Grow to some Southern tree,',
      annotations: [
        {
          type: 'Imagery',
          note: '"Grow to some Southern tree" -- Hodge’s body literally feeds an alien plant. There is a strange consolation here: he becomes part of the foreign landscape, but only at the cost of being utterly transformed.',
          color: '#f59e0b',
        },
      ],
    },
    { text: 'And strange-eyed constellations reign' },
    {
      text: '  His stars eternally.',
      annotations: [
        {
          type: 'Closing image',
          note: '"His stars eternally" -- the once-foreign constellations now belong to him for ever. There is bitter irony: only by dying anonymously in another hemisphere does Hodge claim the southern sky.',
          color: '#ef4444',
        },
      ],
    },
  ],

  context: `<p><strong>Thomas Hardy</strong> (1840--1928) was one of the most important late-Victorian and early-modernist English novelists and poets, born in Dorset (his "Wessex"). After the savage reception of <em>Jude the Obscure</em> in 1895 he turned almost exclusively to poetry, producing nearly a thousand poems before his death.</p>
<p><strong>"Drummer Hodge"</strong> was written in November 1899 in response to the <strong>Second Boer War</strong> (1899--1902), fought between the British Empire and the South African Republic and Orange Free State. <strong>This is NOT a World War I poem.</strong> Hardy wrote it sixteen years before WWI began and twenty years before <em>Exposure</em> or <em>Dulce et Decorum Est</em>.</p>
<p>The poem is based on a press report of an English drummer boy killed at the Battle of Magersfontein. Hardy uses the generic Wessex name "Hodge" -- a slang term for an English farm labourer -- to make him representative of every rural English boy sent to die in a war he did not understand.</p>
<p>Hardy was deeply opposed to the war. The poem confronts readers with the horror of <strong>anonymous burial in a foreign land</strong>: no coffin, no ceremony, no homeland. It is one of the earliest English poems to question the cost of imperial conflict.</p>
<p><strong>Glossary:</strong> <em>kopje</em> = small hill; <em>veldt</em> = open South African grassland; <em>Karoo</em> = semi-desert plateau; <em>gloam</em> = twilight.</p>`,

  contextAr: `<p><strong>Thomas Hardy</strong> (1840-1928) من أهم الروائيين والشعراء الإنجليز في أواخر العصر الفيكتوري وبدايات الحداثة، مولود في Dorset (الـ"Wessex" حقّه). بعد الاستقبال القاسي لرواية <em>Jude the Obscure</em> سنة 1895، تحوّل بشكل شبه كامل للشعر، وكتب حوالي ألف قصيدة قبل وفاته.</p>
<p>قصيدة <strong>"Drummer Hodge"</strong> كتبها في نوفمبر 1899 رداً على <strong>حرب البوير الثانية</strong> (1899-1902)، اللي صارت بين الإمبراطورية البريطانية وجمهورية جنوب أفريقيا ودولة أورانج الحرة. <strong>هاي مو قصيدة من قصائد الحرب العالمية الأولى.</strong> Hardy كتبها قبل ست عشرة سنة من بداية الحرب العالمية الأولى وقبل عشرين سنة من <em>Exposure</em> أو <em>Dulce et Decorum Est</em>.</p>
<p>القصيدة مبنية على تقرير صحفي عن طفل طبّال إنجليزي انقتل في معركة Magersfontein. Hardy يستخدم الاسم العام Wessex "Hodge" - وهو لقب عامي للفلّاح الإنجليزي - عشان يخلّيه ممثّلاً عن كل ولد ريفي إنجليزي أُرسل ليموت في حرب ما يفهمها.</p>
<p>Hardy كان معارض بشدة للحرب. القصيدة تواجه القرّاء برعب <strong>الدفن المجهول في أرض غريبة</strong>: بدون تابوت، بدون مراسم، بدون وطن. وهي من أوائل القصائد الإنجليزية اللي شكّكت في كلفة الصراع الإمبريالي.</p>
<p><strong>قاموس المصطلحات:</strong> <em>kopje</em> = تلّ صغير؛ <em>veldt</em> = سهل عشبي مفتوح في جنوب أفريقيا؛ <em>Karoo</em> = هضبة شبه صحراوية؛ <em>gloam</em> = الغسق.</p>`,

  summary: `STANZA 1: An anonymous "they" throw the body of Drummer Hodge into the earth without a coffin, "just as found". His grave is marked only by a kopje (small hill) on the African veldt. Foreign constellations pass over his mound each night.

STANZA 2: Hodge, "fresh from his Wessex home", never understood the meaning of the South African landscape -- the Karoo, the Bush, the "dusty loam" -- nor why "strange stars" rose into view at twilight. He was a boy out of his depth in a war he did not understand.

STANZA 3: Yet now Hodge will be a "portion" of that "unknown plain" forever. His "homely Northern" body will literally grow into a "Southern tree". The "strange-eyed constellations" that once mystified him will be his stars "eternally". The poem ends with bitter consolation: in death, the foreign land claims him.`,

  summaryAr: `المقطع 1: ضمير مجهول "they" يرمون جثة Drummer Hodge في الأرض بدون تابوت، "just as found". قبره ما عليه إلا kopje (تلّ صغير) على الـveldt الأفريقي. والكواكب الأجنبية تمرّ فوق رابيته كل ليلة.

المقطع 2: Hodge، "fresh from his Wessex home"، أبداً ما فهم معنى المشهد الجنوب-أفريقي - الـKaroo، الـBush، الـ"dusty loam" - ولا ليش "strange stars" تطلع لعينه عند الغسق. كان ولد فوق طاقته في حرب ما يفهمها.

المقطع 3: ومع ذلك، الحين Hodge راح يصير "portion" من ذاك "unknown plain" للأبد. جسده "homely Northern" حرفياً راح ينبت في "Southern tree". والـ"strange-eyed constellations" اللي محيّرته بالأول راح يصيرون نجومه "eternally". القصيدة تنتهي بعزاء مرير: في الموت، الأرض الغريبة تحتوي عليه.`,

  formAndStructure: `FORM: Three stanzas of six lines each (sestets). Compact, controlled, ballad-like -- a deliberately small form for the small life it commemorates.

METRE: Alternating tetrameter and trimeter, like an English ballad. The folk metre is poignantly inappropriate for the foreign setting -- Hardy gives an English country tune to a death in the African veldt.

RHYME SCHEME: ABABAB in each stanza -- a tightly woven, balladic pattern. The closed scheme creates a small, contained world, like the small mound that contains Hodge.

LANDSCAPE-LANGUAGE CONTRAST: Hardy juxtaposes English ballad form and Wessex diction ("homely", "Northern", "gloam") with South African vocabulary ("kopje", "veldt", "Karoo"). The clash enacts Hodge’s displacement.

EM-DASHES AND PUNCTUATION: "Uncoffined -- just as found:" The em-dash and colon create a hard pause that isolates the brutal fact. Hardy uses punctuation to refuse easy continuity, refusing to let the reader move smoothly past the horror.

NARRATIVE ARC: Burial (stanza 1) → background (stanza 2) → eternal aftermath (stanza 3). The poem traces Hodge from death into the slow, strange consolation of becoming part of the foreign land.`,

  formAndStructureAr: `الشكل: ثلاث مقاطع، كل مقطع ستة أبيات (sestets). مدمج، مضبوط، يشبه البالاد - شكل صغير عمداً للحياة الصغيرة اللي يحييها.

الوزن: تناوب بين tetrameter وtrimeter، مثل البالاد الإنجليزية. الوزن الشعبي مفجع في عدم ملاءمته للمشهد الغريب - Hardy يعطي لحناً ريفياً إنجليزياً لميتة في الـveldt الأفريقي.

نظام القافية: ABABAB في كل مقطع - نمط بالاد محبوك بإحكام. النظام المغلق يخلق عالم صغير ومحتوى، مثل التلّ الصغير اللي يحتوي Hodge.

تضاد المشهد واللغة: Hardy يضع شكل البالاد الإنجليزية ومفردات Wessex ("homely"، "Northern"، "gloam") جنباً إلى جنب مع مفردات جنوب أفريقية ("kopje"، "veldt"، "Karoo"). والتصادم يجسّد اقتلاع Hodge من بيئته.

شَرَط ونقطتان (em-dashes and colons): "Uncoffined -- just as found:" الشَّرَط والنقطتان يخلقون وقفة قاسية تعزل الحقيقة المروّعة. Hardy يستخدم علامات الترقيم عشان يرفض الاستمرارية السهلة، ويرفض يخلّي القارئ يتجاوز الرعب بسلاسة.

القوس السردي: الدفن (المقطع 1) → الخلفية (المقطع 2) → الأبدية (المقطع 3). القصيدة تتبّع Hodge من الموت إلى العزاء البطيء الغريب بصيرورته جزء من الأرض الغريبة.`,

  keyQuotes: [
    {
      quote: 'They throw in Drummer Hodge, to rest / Uncoffined -- just as found:',
      analysis:
        '"Throw in" is the brutal verb of disposal. The em-dash before "just as found" isolates the absence of ceremony. Hardy denies Hodge every Victorian ritual of mourning -- no coffin, no preparation, no service. The colon then opens onto the description of the makeshift grave.',
      themes: ['Anonymous death', 'War', 'Imperial cost'],
      analysisAr:
        'الفعل "throw in" فعل قاسي يدلّ على التخلّص من الشي. والشَّرَط قبل "just as found" يعزل غياب المراسم. Hardy يحرم Hodge من كل طقوس الحداد الفيكتورية - لا تابوت، لا تجهيز، لا قدّاس. ثم النقطتان تفتحان المشهد على وصف القبر الارتجالي.',
      themesAr: ['موت مجهول', 'الحرب', 'كلفة الإمبراطورية'],
    },
    {
      quote: 'His landmark is a kopje-crest / That breaks the veldt around',
      analysis:
        '"Kopje" and "veldt" are South African words that the Wessex boy could not have known. His "landmark" -- the only sign of his existence -- is named in a language he did not speak. The geography itself is foreign to him.',
      themes: ['Displacement', 'Exile', 'Landscape'],
      analysisAr:
        'كلمتا "kopje" و"veldt" كلمات جنوب-أفريقية ما كان يقدر ولد Wessex يعرفها. علامة قبره - الإشارة الوحيدة على وجوده - مسمّاة بلغة ما كان يحكيها. الجغرافيا نفسها غريبة عنه.',
      themesAr: ['الاقتلاع', 'المنفى', 'المشهد الطبيعي'],
    },
    {
      quote: 'Fresh from his Wessex home',
      analysis:
        '"Fresh" suggests both youth and naivety -- he has barely left his rural English home before being killed in a foreign war. "Wessex" is Hardy’s name for the West Country; using it makes Hodge a specific English type rather than an abstract soldier.',
      themes: ['Youth', 'Rural England', 'Innocence'],
      analysisAr:
        'كلمة "fresh" توحي بالصغر والسذاجة مع بعض - هو بالكاد طلع من بيته الريفي الإنجليزي قبل ما ينقتل في حرب أجنبية. وكلمة "Wessex" هي اسم Hardy للجنوب الغربي الإنجليزي؛ واستخدامها يخلّي Hodge نموذج إنجليزي محدّد، مو جندي مجرّد.',
      themesAr: ['الصغر', 'الريف الإنجليزي', 'البراءة'],
    },
    {
      quote: 'Strange stars amid the gloam',
      analysis:
        'The southern hemisphere constellations are "strange" to him because he died before he could understand them. "Gloam" (twilight) is an old English word that anchors him in a Wessex world even as he lies under an African sky.',
      themes: ['Exile', 'Imagery', 'Cosmic indifference'],
      analysisAr:
        'كواكب نصف الكرة الجنوبي "strange" بالنسبة له لأنه مات قبل ما يقدر يفهمها. وكلمة "gloam" (الغسق) كلمة إنجليزية قديمة تربطه بعالم Wessex حتى وهو راقد تحت سماء أفريقية.',
      themesAr: ['المنفى', 'الصور الشعرية', 'لامبالاة الكون'],
    },
    {
      quote: 'Yet portion of that unknown plain / Will Hodge for ever be',
      analysis:
        '"Yet" pivots the poem. There is a strange consolation: Hodge becomes part of the African landscape forever. But "unknown" insists on his alienation -- even in death he does not know the place he now belongs to.',
      themes: ['Death', 'Belonging', 'Transformation'],
      analysisAr:
        'كلمة "yet" تشكّل مفصل القصيدة. في عزاء غريب: Hodge يصير جزء من المشهد الأفريقي للأبد. بس كلمة "unknown" تُصرّ على غربته - حتى في الموت ما يعرف المكان اللي يخصّه الحين.',
      themesAr: ['الموت', 'الانتماء', 'التحوّل'],
    },
    {
      quote: 'His homely Northern breast and brain / Grow to some Southern tree',
      analysis:
        'A literal, almost grotesque image: Hodge’s body decomposes and feeds an African tree. "Homely" and "Northern" mark his English origin; "Southern" marks his fate. The contrast captures total transformation -- the rural Wessex boy becomes vegetation in a foreign hemisphere.',
      themes: ['Transformation', 'Death', 'Nature'],
      analysisAr:
        'صورة حرفية، شبه مرعبة: جسد Hodge يتحلّل ويغذّي شجرة أفريقية. كلمتا "homely" و"Northern" يعلّمن أصله الإنجليزي؛ وكلمة "Southern" تعلّم مصيره. والتضاد يجسّد تحوّل كامل - ولد Wessex الريفي يصير نباتاً في نصف كرة غريب.',
      themesAr: ['التحوّل', 'الموت', 'الطبيعة'],
    },
    {
      quote: 'And strange-eyed constellations reign / His stars eternally',
      analysis:
        'The foreign stars become "his" in the closing line -- but only because he is dead. The verb "reign" gives the constellations imperial authority. There is bitter irony in "eternally": the boy who never understood these stars now lies under them forever.',
      themes: ['Time', 'Cosmic imagery', 'Final transformation'],
      analysisAr:
        'النجوم الأجنبية تصير "حقّه" في البيت الختامي - بس فقط لأنه ميت. والفعل "reign" يعطي الكواكب سلطة إمبريالية. وفي كلمة "eternally" مفارقة مريرة: الولد اللي ما فهم هاي النجوم أبداً، راح يرقد تحتها للأبد.',
      themesAr: ['الزمن', 'الصور الكونية', 'التحوّل النهائي'],
    },
  ],

  languageDevices: [
    {
      device: 'South African vocabulary',
      example: 'kopje / veldt / Karoo',
      effect:
        'Hardy embeds Afrikaans and South African English in an otherwise English ballad. The vocabulary marks Hodge as displaced -- the very words for the landscape are foreign to him. The reader, too, must look them up, mirroring Hodge’s alienation.',
      lineRef: 2,
      effectAr:
        'Hardy يضمّن مفردات Afrikaans والإنجليزية الجنوب-أفريقية داخل بالاد إنجليزي. والمفردات تعلّم Hodge كمقتلَع - حتى الكلمات اللي توصف المشهد غريبة عنه. والقارئ، هو الثاني، لازم يبحث عن معانيها، وهذا يحاكي اقتلاع Hodge.',
    },
    {
      device: 'Anonymous "they"',
      example: 'They throw in Drummer Hodge',
      effect:
        'The unnamed "they" denies anyone responsibility for the burial. There is no individual mourner -- the burial is impersonal, mechanical, imperial. The pronoun captures the dehumanising scale of the war machine.',
      lineRef: 0,
      effectAr:
        'الضمير "they" المجهول يحرم أي شخص من مسؤولية الدفن. ما في حدّاد فردي - الدفن غير شخصي، آلي، إمبريالي. والضمير يجسّد حجم آلة الحرب اللي تنزع الإنسانية.',
    },
    {
      device: 'Em-dash and colon',
      example: 'Uncoffined -- just as found:',
      effect:
        'The em-dash creates a stark pause that isolates the absence of a coffin. The colon then opens onto the makeshift grave. Hardy uses punctuation to refuse continuity, forcing the reader to feel each brutal fact separately.',
      lineRef: 1,
      effectAr:
        'الشَّرَط (em-dash) يخلق وقفة حادة تعزل غياب التابوت. ثم النقطتان (colon) تفتحان المشهد على القبر الارتجالي. Hardy يستخدم علامات الترقيم عشان يرفض الاستمرارية، ويجبر القارئ يحسّ بكل حقيقة قاسية بشكل منفصل.',
    },
    {
      device: 'Contrast (North/South)',
      example: 'homely Northern breast and brain / Grow to some Southern tree',
      effect:
        'Hardy juxtaposes "homely Northern" (familiar, English) with "Southern tree" (foreign, African). The geographical contrast enacts the speaker’s grief at how far Hodge has been taken from home, even in death.',
      lineRef: 14,
      effectAr:
        'Hardy يضع "homely Northern" (المألوف، الإنجليزي) جنباً إلى جنب مع "Southern tree" (الغريب، الأفريقي). والتضاد الجغرافي يجسّد حزن المتكلّم على بُعد Hodge عن بيته، حتى في الموت.',
    },
    {
      device: 'Personification of constellations',
      example: 'strange-eyed constellations reign / His stars eternally',
      effect:
        '"Strange-eyed" and "reign" give the constellations a watchful, imperial presence. They become almost the rulers of Hodge’s eternal sky. The image is at once consoling (he has stars) and chilling (they are foreign).',
      lineRef: 16,
      effectAr:
        'كلمتا "strange-eyed" و"reign" تعطيان الكواكب حضور مراقِب وإمبريالي. صارت تقريباً حكّام سماء Hodge الأبدية. والصورة في نفس الوقت معزّية (له نجوم) ومرعبة (هاي النجوم غريبة).',
    },
    {
      device: 'Ballad form',
      example: 'Three sestets in alternating tetrameter and trimeter, ABABAB',
      effect:
        'The English ballad form belongs at home in Wessex. Hardy applies it to a death in South Africa -- the form itself enacts the displacement, an English tune for a foreign grave.',
      lineRef: 0,
      effectAr:
        'شكل البالاد الإنجليزي مكانه الأصلي في Wessex. Hardy يطبّقه على ميتة في جنوب أفريقيا - الشكل بنفسه يجسّد الاقتلاع، لحن إنجليزي لقبر غريب.',
    },
  ],
}

export default function DrummerHodgeEduqasPage() {
  const t = useT()
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Drummer Hodge by Thomas Hardy - Analysis & Annotations"
        description="Verified public-domain text of Drummer Hodge by Thomas Hardy (Second Boer War, 1899), with line-by-line study notes and themes for Eduqas GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          { name: 'Eduqas Poetry', url: 'https://theenglishhub.app/revision/poetry/eduqas' },
          {
            name: 'Drummer Hodge',
            url: 'https://theenglishhub.app/revision/poetry/eduqas/drummer-hodge',
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

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10">
            <BookOpen className="size-5 text-red-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Drummer Hodge</h1>
            <p className="text-body-sm text-muted-foreground">
              Thomas Hardy (1899) &middot; Eduqas Poetry Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Eduqas
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2 rounded-lg bg-amber-500/5 border border-amber-500/10 p-3">
        <AlertTriangle className="mt-0.5 size-4 shrink-0 text-clay-600" />
        <p className="text-caption text-muted-foreground">
          <strong className="text-foreground">Setting:</strong> Drummer Hodge is a poem of the
          <strong> Second Boer War (South Africa, 1899)</strong> -- not the First World War. Hardy
          wrote it sixteen years before WWI began.
        </p>
      </div>

      <StudyTools
        textName="Drummer Hodge"
        textType="poem"
        examBoard="Eduqas"
        cluster="Eduqas Poetry Anthology"
        variant="compact"
      />

      <InteractivePoemViewer poem={drummerHodge} />

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        Drummer Hodge by Thomas Hardy (1899) is in the public domain. Source: Project Gutenberg /
        Wikisource &mdash; verified against the Verified Library. Reproduced freely for educational
        use.
      </footer>
    </div>
  )
}
