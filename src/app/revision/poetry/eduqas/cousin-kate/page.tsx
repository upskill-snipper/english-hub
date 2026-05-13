'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InteractivePoemViewer } from '@/components/study/InteractivePoemViewer'
import type { PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

/* ── Poem data (verified PD text from Verified Library) ──────────── */

const cousinKate: PoemData = {
  title: 'Cousin Kate',
  poet: 'Christina Rossetti',
  lines: [
    { text: 'I was a cottage maiden' },
    { text: '  Hardened by sun and air,' },
    { text: 'Contented with my cottage mates,' },
    { text: '  Not mindful I was fair.' },
    { text: 'Why did a great lord find me out,' },
    { text: '  And praise my flaxen hair?' },
    { text: 'Why did a great lord find me out' },
    { text: '  To fill my heart with care?' },
    { text: '' },

    { text: 'He lured me to his palace home--' },
    { text: '  Woe’s me for joy thereof--' },
    { text: 'To lead a shameless shameful life,' },
    { text: '  His plaything and his love.' },
    {
      text: 'He wore me like a silken knot,',
      annotations: [
        {
          type: 'Simile',
          note: '"He wore me like a silken knot" -- the speaker is reduced to an ornament, a decoration to be worn and discarded. The simile commodifies her, treating her as a possession rather than a person.',
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '  He changed me like a glove;',
      annotations: [
        {
          type: 'Simile',
          note: '"He changed me like a glove" -- the parallel simile reinforces objectification. She is replaceable, disposable. The pairing of "wore" and "changed" exposes the lord\'s casual use of her.',
          color: '#f59e0b',
        },
      ],
    },
    { text: 'So now I moan, an unclean thing,' },
    { text: '  Who might have been a dove.' },
    { text: '' },

    { text: 'O Lady Kate, my cousin Kate,' },
    { text: '  You grew more fair than I:' },
    { text: 'He saw you at your father’s gate,' },
    { text: '  Chose you, and cast me by.' },
    { text: 'He watched your steps along the lane,' },
    { text: '  Your work among the rye;' },
    { text: 'He lifted you from mean estate' },
    { text: '  To sit with him on high.' },
    { text: '' },

    { text: 'Because you were so good and pure' },
    { text: '  He bound you with his ring:' },
    { text: 'The neighbours call you good and pure,' },
    { text: '  Call me an outcast thing.' },
    { text: 'Even so I sit and howl in dust,' },
    { text: '  You sit in gold and sing:' },
    { text: 'Now which of us has tenderer heart?' },
    { text: '  You had the stronger wing.' },
    { text: '' },

    { text: 'O cousin Kate, my love was true,' },
    { text: '  Your love was writ in sand:' },
    { text: 'If he had fooled not me but you,' },
    { text: '  If you stood where I stand,' },
    { text: 'He’d not have won me with his love' },
    { text: '  Nor bought me with his land;' },
    { text: 'I would have spit into his face' },
    { text: '  And not have taken his hand.' },
    { text: '' },

    { text: 'Yet I’ve a gift you have not got,' },
    { text: '  And seem not like to get:' },
    { text: 'For all your clothes and wedding-ring' },
    { text: '  I’ve little doubt you fret.' },
    { text: 'My fair-haired son, my shame, my pride,' },
    { text: '  Cling closest to my neck;' },
    { text: 'Your father would give lands for one' },
    { text: '  To wear his coronet.' },
  ],

  context: `<p><strong>Christina Rossetti</strong> (1830--1894) was a leading Victorian poet, sister of the Pre-Raphaelite painter Dante Gabriel Rossetti. Deeply religious and unmarried, she frequently wrote about female experience, social injustice, and unequal love -- themes that drew on her work at the Highgate Penitentiary, a refuge for "fallen women".</p>
<p><strong>"Cousin Kate"</strong> was published in 1862 in <em>Goblin Market and Other Poems</em>. It dramatises the betrayal of a working-class woman ("a cottage maiden") by an aristocratic seducer who later marries her cousin Kate. The poem belongs to Rossetti’s sustained interrogation of Victorian double standards: the seduced woman is shamed and cast aside, while the seducer faces no consequence.</p>
<p>Rossetti’s speaker is unusually defiant for the period -- she refuses pity, claims moral superiority over the "good and pure" Kate, and ends triumphantly by revealing her son: a child the wealthy lord can never have. The dramatic monologue confronts the reader with female anger, class injustice, and the limits of Victorian respectability.</p>`,

  contextAr: `<p><strong>Christina Rossetti</strong> (1830-1894) من أبرز شعراء العصر الفيكتوري، وأخت الرسّام الـPre-Raphaelite دانتي غابرييل روسيتي. كانت متديّنة جداً وعزباء، وكتبت كثير عن التجربة الأنثوية والظلم الاجتماعي والحب غير المتكافئ — مواضيع نابعة من شغلها في Highgate Penitentiary، وهو ملجأ للنساء اللي يسمّونهم في تلك الفترة "fallen women".</p>
<p>قصيدة <strong>"Cousin Kate"</strong> انتشرت سنة 1862 في ديوان <em>Goblin Market and Other Poems</em>. تجسّد خيانة امرأة من الطبقة العاملة ("cottage maiden") من قبل رجل أرستقراطي يغويها، وبعدها يتزوّج ابنة عمها كيت. والقصيدة تنتمي إلى استجواب Rossetti المستمرّ للمعايير المزدوجة في العصر الفيكتوري: المرأة المغوية تُهان وتُلفظ، أما اللي أغواها فما يواجه أي عقوبة.</p>
<p>المتكلّمة في القصيدة متمرّدة بشكل غير معتاد بالنسبة للفترة الزمنية — ترفض الشفقة، وتدّعي تفوّقاً أخلاقياً على كيت "good and pure"، وتختم بالانتصار عبر كشف ابنها: طفل أبداً ما راح يقدر اللورد الغني ينجبه. والمونولوج الدرامي يواجه القارئ بغضب أنثوي، وظلم طبقي، وحدود المحترميّة الفيكتورية.</p>`,

  summary: `STANZA 1: The speaker remembers her former life as a "cottage maiden", hardened by outdoor work but contented. She asks bitterly why a "great lord" sought her out and praised her "flaxen hair", filling her heart with "care".

STANZA 2: The lord lured her to his palace as his lover. The oxymoron "shameless shameful" captures her conflicted state. The famous similes -- "He wore me like a silken knot, / He changed me like a glove" -- reduce her to a possession to be worn and discarded.

STANZA 3: The speaker addresses her cousin Kate directly. The lord saw Kate at her father’s gate, "chose" her instead, and "cast me by". Kate has been "lifted" from poverty to wealth.

STANZA 4: Because Kate was "good and pure", the lord married her with "his ring". Society calls Kate pure and the speaker an "outcast thing". The speaker sits in dust while Kate "sit[s] in gold and sing[s]". She asks who has the "tenderer heart" and concludes Kate had only the "stronger wing".

STANZA 5: The speaker insists her love was "true" while Kate’s was "writ in sand". She would have refused the lord’s offer; she would have "spit into his face". This is a striking moment of moral defiance.

STANZA 6: The speaker reveals her trump card: a "fair-haired son". Kate, despite all her wealth, is childless, and the lord would "give lands" for the boy who could wear his "coronet". The illegitimate child is simultaneously the speaker’s "shame" and her "pride".`,

  summaryAr: `المقطع 1: المتكلّمة تتذكّر حياتها السابقة كـ"cottage maiden"، اشتدّ عودها من الشغل في الهواء الطلق، بس كانت مرتاحة. تسأل بمرارة ليش "great lord" بحث عنها وأطرى على "flaxen hair" حقّها، وعمّر قلبها بالـ"care".

المقطع 2: اللورد أغواها وأخذها لقصره عشان تصير حبيبته. التضادّ "shameless shameful" يجسّد حالتها المتناقضة. والتشبيهات الشهيرة — "He wore me like a silken knot, / He changed me like a glove" — تختصرها لأداة يلبسها ويرميها.

المقطع 3: المتكلّمة تخاطب بنت عمها كيت بشكل مباشر. اللورد شاف كيت عند بوابة بيت أبوها، و"chose" كيت بدالها، و"cast me by". وكيت "lifted" من الفقر للثراء.

المقطع 4: لأن كيت كانت "good and pure"، اللورد تزوّجها بـ"his ring". المجتمع يسمّي كيت طاهرة، ويسمّي المتكلّمة "outcast thing". المتكلّمة جالسة في التراب وكيت "sit[s] in gold and sing[s]". تسأل مين عنده "tenderer heart"، وتختم إن كيت ما كان عندها إلا "stronger wing".

المقطع 5: المتكلّمة تأكّد إن حبّها كان "true" أما حب كيت "writ in sand". تقول لو إنها كانت مكانها بترفض عرض اللورد؛ بل بـ"spit into his face". هاي لحظة تمرّد أخلاقي مدهشة.

المقطع 6: المتكلّمة تكشف ورقتها الرابحة: "fair-haired son". كيت، رغم كل ثروتها، بدون أطفال، واللورد بـ"give lands" مقابل الولد اللي يقدر يلبس "coronet" حقّه. الطفل غير الشرعي هو في نفس الوقت "shame" و"pride" المتكلّمة.`,

  formAndStructure: `FORM: Six stanzas of eight lines each (octets). Alternate lines are indented, giving the poem a balladic, song-like quality suited to its narrative of seduction and betrayal.

METRE: Predominantly alternating tetrameter and trimeter, the traditional measure of the English ballad. This regular metre creates a deceptively simple, song-like surface beneath which Rossetti exposes deep moral and social anger.

RHYME: ABCB DBEB pattern in each stanza -- the second and fourth lines rhyme, the sixth and eighth lines rhyme. The recurring "B" rhyme often falls on emotionally weighted words ("care", "love", "by", "thing", "stand", "get").

DIRECT ADDRESS: The poem is a dramatic monologue addressed first to an absent listener, then directly to "cousin Kate" from stanza 3 onward. This shift creates tension and confrontation -- the speaker is calling Kate to account.

VOLTA: The dramatic turn comes in the final stanza, where the speaker reveals her son. After five stanzas of grievance and accusation, the closing image of the child is her assertion of victory over both the lord and Kate.

REPETITION AND PARALLELISM: "He wore me like a silken knot, / He changed me like a glove" -- paired similes reinforce objectification. "good and pure" is repeated, ironically, in stanza 4. "Why did a great lord find me out" repeats with grim insistence in stanza 1.`,

  formAndStructureAr: `الشكل: ست مقاطع، كل مقطع ثمانية أبيات (octets). الأبيات المتناوبة مزاحة عن الهامش، وهذا يعطي القصيدة طابع البالاد الغنائي اللي يناسب سرد الإغواء والخيانة.

الوزن: تناوب بين tetrameter وtrimeter بشكل أساسي، وهو الوزن التقليدي للبالاد الإنجليزية. الوزن المنتظم يخلق سطح غنائي بسيط ظاهرياً، وتحته تكشف Rossetti غضباً أخلاقياً واجتماعياً عميقاً.

القافية: نمط ABCB DBEB في كل مقطع — البيت الثاني والرابع يتقافون، والسادس والثامن يتقافون. والقافية "B" المتكرّرة كثير ما تنزل على كلمات مشحونة عاطفياً ("care"، "love"، "by"، "thing"، "stand"، "get").

المخاطبة المباشرة: القصيدة مونولوج درامي، يُوجَّه أولاً لمستمع غائب، وبعدين مباشرةً لـ"cousin Kate" من المقطع الثالث وراح. هاي النقلة تخلق توتر ومواجهة — المتكلّمة تستدعي كيت للحساب.

Volta: التحوّل الدرامي يجي في المقطع الأخير، لمّا تكشف المتكلّمة عن ابنها. بعد خمس مقاطع من الشكوى والاتهام، صورة الطفل الختامية هي إعلانها للنصر على اللورد وعلى كيت.

التكرار والتوازي: "He wore me like a silken knot, / He changed me like a glove" — التشبيهات المزدوجة تقوّي التشييء. وعبارة "good and pure" تتكرّر، بسخرية، في المقطع الرابع. وعبارة "Why did a great lord find me out" تتكرّر بإصرار مرير في المقطع الأول.`,

  keyQuotes: [
    {
      quote: 'He wore me like a silken knot, / He changed me like a glove',
      analysis:
        'The most famous lines in the poem. The paired similes objectify the speaker as a wearable accessory and a replaceable item of clothing. "Silken" suggests luxury and decoration; "glove" suggests intimacy that is easily put on and removed. Together they expose the lord’s view of women as possessions.',
      themes: ['Objectification', 'Class', 'Betrayal'],
      analysisAr:
        'أشهر أبيات القصيدة. التشبيهات المزدوجة تشيّء المتكلّمة كزخرفة تُلبَس وكقطعة ملابس قابلة للاستبدال. كلمة "silken" توحي بالفخامة والزينة؛ وكلمة "glove" توحي بحميمية يسهل لبسها ونزعها. مع بعض يفضحون نظرة اللورد للنساء كممتلكات.',
      themesAr: ['التشييء', 'الطبقية', 'الخيانة'],
    },
    {
      quote: 'a shameless shameful life',
      analysis:
        'A striking oxymoron. The speaker is "shameless" because she does not regret loving the lord, and "shameful" because society shames her for it. The contradiction captures the impossible position Victorian women were placed in.',
      themes: ['Shame', 'Society', 'Female experience'],
      analysisAr:
        'تضادّ صادم (oxymoron). المتكلّمة "shameless" لأنها ما تندم على حبها للورد، و"shameful" لأن المجتمع يخزيها على ذلك. والتناقض يجسّد الموقع المستحيل اللي وُضعت فيه المرأة الفيكتورية.',
      themesAr: ['العار', 'المجتمع', 'التجربة الأنثوية'],
    },
    {
      quote: 'an unclean thing, / Who might have been a dove',
      analysis:
        'The biblical "dove" symbolises purity and innocence -- everything the speaker has been denied. The contrast between "unclean thing" (animal, contaminated) and "dove" (pure, holy) shows how seduction has cost her social and spiritual standing.',
      themes: ['Purity', 'Loss', 'Religion'],
      analysisAr:
        'الـ"dove" (الحمامة) ترمز إلى الطهارة والبراءة في التراث الإنجيلي — كل شي حُرمت منه المتكلّمة. والتضاد بين "unclean thing" (شي حيواني وملوّث) و"dove" (طاهر وقدّيس) يبيّن كيف الإغواء كلّفها مكانتها الاجتماعية والروحية.',
      themesAr: ['الطهارة', 'الفقد', 'الدين'],
    },
    {
      quote: 'Your love was writ in sand',
      analysis:
        'A biblical allusion (the foolish man who built his house on sand, Matthew 7) that condemns Kate’s love as opportunistic. The image suggests Kate’s love will not endure -- it is shallow and self-interested. The speaker claims her own love, by contrast, was "true".',
      themes: ['Loyalty', 'Truth', 'Betrayal'],
      analysisAr:
        'تلميح إنجيلي (الرجل الأحمق اللي بنى بيته على الرمل، إنجيل متى 7) يدين حب كيت كحبّ انتهازي. الصورة توحي إن حب كيت ما راح يصمد — سطحي وأناني. وفي المقابل، المتكلّمة تدّعي إن حبّها هي "true".',
      themesAr: ['الوفاء', 'الصدق', 'الخيانة'],
    },
    {
      quote: 'I would have spit into his face / And not have taken his hand',
      analysis:
        'A startlingly aggressive moment. The speaker claims a moral defiance Kate lacked. The visceral verb "spit" rejects gentility and the conventional womanly response. It asserts that the speaker’s love was authentic precisely because it was not transactional.',
      themes: ['Defiance', 'Moral courage', 'Class'],
      analysisAr:
        'لحظة عدوانية صادمة. المتكلّمة تدّعي تمرّداً أخلاقياً افتقدته كيت. الفعل المادي القاسي "spit" يرفض التهذيب والاستجابة الأنثوية التقليدية. وهذا يؤكّد إن حب المتكلّمة كان أصيلاً تحديداً لأنه ما كان صفقة.',
      themesAr: ['التمرّد', 'الشجاعة الأخلاقية', 'الطبقية'],
    },
    {
      quote: 'My fair-haired son, my shame, my pride',
      analysis:
        'The triple noun phrase captures the speaker’s ambivalence. The boy is both "shame" (he is illegitimate) and "pride" (he is hers). The repetition of "my" asserts ownership -- a power Kate, despite her ring, lacks.',
      themes: ['Motherhood', 'Pride', 'Triumph'],
      analysisAr:
        'العبارة الاسمية الثلاثية تجسّد ازدواجية مشاعر المتكلّمة. الولد "shame" (لأنه غير شرعي) و"pride" (لأنه ابنها). تكرار "my" يؤكّد الملكية — قوّة تفتقدها كيت، رغم خاتم الزواج اللي عندها.',
      themesAr: ['الأمومة', 'الفخر', 'الانتصار'],
    },
    {
      quote: 'Your father would give lands for one / To wear his coronet',
      analysis:
        'The speaker reveals her trump card. The lord is childless within marriage; she has produced the heir he needs. "Coronet" (a small crown) reminds us of his title -- but his lineage now depends on her son. The poem ends with her quiet, devastating victory.',
      themes: ['Power', 'Inheritance', 'Class'],
      analysisAr:
        'المتكلّمة تكشف ورقتها الرابحة. اللورد بدون أطفال داخل زواجه؛ وهي أنجبت الوريث اللي يحتاجه. كلمة "coronet" (تاج صغير) تذكّرنا بلقبه — بس نسبه الحين معتمد على ابنها. القصيدة تنتهي بانتصارها الهادئ والمدمّر.',
      themesAr: ['السلطة', 'الميراث', 'الطبقية'],
    },
  ],

  languageDevices: [
    {
      device: 'Simile',
      example: 'He wore me like a silken knot, / He changed me like a glove',
      effect:
        'Twin similes reduce the speaker to objects: a silken knot (decoration) and a glove (replaceable accessory). The parallel construction emphasises the casualness of the lord’s use and dismissal.',
      lineRef: 13,
      effectAr:
        'تشبيهان متوازيان يحوّلون المتكلّمة إلى أشياء: silken knot (زخرفة) وglove (إكسسوار قابل للاستبدال). البناء المتوازي يؤكّد على لامبالاة اللورد في استخدامها ولفظها.',
    },
    {
      device: 'Oxymoron',
      example: 'a shameless shameful life',
      effect:
        'Captures the impossible Victorian position: defiantly unrepentant ("shameless") yet condemned by society ("shameful"). The contradiction holds her dignity and her disgrace simultaneously.',
      lineRef: 11,
      effectAr:
        'يجسّد الموقع المستحيل في العصر الفيكتوري: لا تتوب بتمرّد ("shameless") ومع ذلك المجتمع يدينها ("shameful"). والتناقض يحمل كرامتها وعارها في نفس اللحظة.',
    },
    {
      device: 'Direct address (apostrophe)',
      example: 'O Lady Kate, my cousin Kate',
      effect:
        'The speaker turns from grievance to direct confrontation, calling Kate to account. The repetition of "Kate" insists on familial intimacy precisely as the speaker accuses Kate of betrayal.',
      lineRef: 17,
      effectAr:
        'المتكلّمة تنتقل من الشكوى إلى المواجهة المباشرة، وتستدعي كيت للحساب. تكرار اسم "Kate" يُصرّ على الحميمية العائلية تحديداً في اللحظة اللي تتّهم فيها المتكلّمة كيت بالخيانة.',
    },
    {
      device: 'Biblical allusion',
      example: 'Who might have been a dove ... Your love was writ in sand',
      effect:
        '"Dove" recalls Christian purity (the Holy Spirit); "writ in sand" recalls the parable of the foolish builder. Rossetti uses biblical authority to elevate the speaker’s grievance into moral judgement.',
      lineRef: 16,
      effectAr:
        'كلمة "dove" تستحضر الطهارة المسيحية (الروح القدس)؛ وعبارة "writ in sand" تستحضر مَثَل البنّاء الأحمق. Rossetti تستخدم سلطة النص الإنجيلي عشان ترفع شكوى المتكلّمة إلى مستوى الحكم الأخلاقي.',
    },
    {
      device: 'Rhetorical question',
      example: 'Why did a great lord find me out, / And praise my flaxen hair?',
      effect:
        'The unanswered question forces the reader into the speaker’s confusion and grief. The repetition of the same question with a darker ending ("To fill my heart with care") shows how her thinking spirals.',
      lineRef: 4,
      effectAr:
        'السؤال اللي ما له جواب يجبر القارئ يدخل في حيرة المتكلّمة وحزنها. وتكرار نفس السؤال بخاتمة أكثر قتامة ("To fill my heart with care") يبيّن كيف يدور تفكيرها في دوّامة.',
    },
    {
      device: 'Class diction',
      example: '"cottage maiden" / "great lord" / "palace home" / "mean estate" / "coronet"',
      effect:
        'The poem is saturated with class markers. Rossetti draws explicit attention to the gulf between aristocrat and peasant -- the lord’s power over both women is rooted in this hierarchy.',
      lineRef: 0,
      effectAr:
        'القصيدة مشبّعة بمؤشّرات طبقية. Rossetti توجّه الانتباه بشكل صريح إلى الهوّة بين الأرستقراطي والفلّاحة — سلطة اللورد على كلتا المرأتين تنبع من هاي الهرمية.',
    },
  ],
}

export default function CousinKateEduqasPage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Cousin Kate by Christina Rossetti — Analysis & Annotations"
        description="Verified public-domain text of Cousin Kate by Christina Rossetti, with line-by-line study notes and themes for Eduqas GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          { name: 'Eduqas Poetry', url: 'https://theenglishhub.app/revision/poetry/eduqas' },
          {
            name: 'Cousin Kate',
            url: 'https://theenglishhub.app/revision/poetry/eduqas/cousin-kate',
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
          Back to Eduqas Poetry
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-pink-500/10">
            <BookOpen className="size-5 text-pink-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Cousin Kate</h1>
            <p className="text-body-sm text-muted-foreground">
              Christina Rossetti (1862) &middot; Eduqas Poetry Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              Eduqas
            </Badge>
          </div>
        </div>
      </div>

      <StudyTools
        textName="Cousin Kate"
        textType="poem"
        examBoard="Eduqas"
        cluster="Eduqas Poetry Anthology"
        variant="compact"
      />

      <InteractivePoemViewer poem={cousinKate} />

      <footer className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
        Cousin Kate by Christina Rossetti (1862) is in the public domain. Source: Project Gutenberg
        / Wikisource &mdash; verified against the Verified Library. Reproduced freely for
        educational use.
      </footer>
    </div>
  )
}
