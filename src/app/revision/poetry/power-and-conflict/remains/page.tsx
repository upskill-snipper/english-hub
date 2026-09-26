import { ArrowLeft, BookOpen, Swords, Brain, Skull, HeartCrack, Eye } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'
import StudyTools from '@/components/study/StudyTools'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd } from '@/components/seo/json-ld'
export const metadata = {
  openGraph: {
    title: 'Remains -- Simon Armitage -- The English Hub',
    description: 'Interactive study of ',
    images: [
      {
        url: '/api/og?title=Remains+--+Simon+Armitage+--+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Remains -- Simon Armitage -- The English Hub',
      },
    ],
  },
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/power-and-conflict/remains' },
  title: 'Remains -- Simon Armitage',
  description:
    'Remains by Simon Armitage annotated line by line for AQA Power and Conflict, with themes, quiz questions, essay prompts and comparison poems.',
}

/* ── Poem data ─────────────────────────────────────────────────── */

const REMAINS: PoemData = {
  title: 'Remains',
  poet: 'Simon Armitage',

  // NOTE: "Remains" (Simon Armitage) is in copyright. To avoid reproducing the
  // poem, each line below is given as a PARAPHRASE in the site's own words, one
  // entry per line of the poem, and the notes quote only short phrases.
  // Students must read the full text in the AQA Power and Conflict anthology.
  // Until 25 September 2026 this array printed the poem verbatim, and printed
  // it wrongly: five of its 30 lines were missing, a line that is not in the
  // poem had been added, and the stanza breaks fell in the wrong places. The
  // viewer numbers entries by position, so the entries below follow the poem's
  // own shape: seven quatrains and a closing couplet.
  //
  // Until 26 September 2026 the rest of this page quoted 96 distinct words of
  // the poem against a fair-dealing share of 30, misquoted two of them (a
  // past-tense opening the poem does not have, and a stanza-break enjambment
  // that is not there), called its stanzas irregular, said it moved from past
  // to present tense when it is in the present throughout, and a comment
  // called one of its real idioms fabricated. Every quotation left was checked
  // word for word that day against AQA's published anthology sample
  // (filestore.aqa.org.uk/resources/english/AQA-8702-TG-POEMS.PDF), which
  // prints the poem by permission of Pomona. The page now quotes 30 distinct
  // words; everything else is described in its own words, by line.
  lines: [
    // Stanza 1
    {
      text: '[Paraphrase] The speaker recalls a different time when his unit was dispatched',
      annotations: [
        {
          type: 'Colloquialism',
          note: 'The casual, anecdotal opening phrase suggests he is recounting just one of many similar incidents. The passive construction (the soldiers are sent by someone else) distances the speaker from responsibility.',
          color: '#60a5fa',
        },
      ],
    },
    { text: '[Paraphrase] to deal with thieves who were robbing a bank.' },
    {
      text: '[Paraphrase] One of the thieves runs off along the street,',
      annotations: [
        {
          type: 'Colloquialism',
          note: '"legs it" is informal slang, making the account feel like a real soldier talking rather than a polished literary voice.',
          color: '#60a5fa',
        },
      ],
    },
    {
      text: '[Paraphrase] He is likely carrying a weapon, but perhaps he is not.',
      annotations: [
        {
          type: 'Ambiguity',
          note: 'The uncertainty over whether the looter was armed introduces moral doubt. "Probably" shifts to the weaker "possibly" -- the soldier cannot justify the killing with certainty.',
          color: '#f59e0b',
        },
      ],
    },
    { text: '' },

    // Stanza 2
    {
      text: '[Paraphrase] So the speaker and two other soldiers',
      annotations: [
        {
          type: 'Shared responsibility',
          note: 'Naming the other two soldiers only as an unnamed somebody, twice over, is deliberately vague and distributes the blame across the group. The speaker tries to share the guilt rather than shoulder it alone.',
          color: '#60a5fa',
        },
      ],
    },
    { text: '[Paraphrase] all agree on what to do,' },
    {
      text: '[Paraphrase] and so the three of them start shooting.',
      annotations: [
        {
          type: 'Repetition',
          note: 'The word for the whole group recurs three times in lines 6 to 8, revealing the speaker desperately trying to dilute personal guilt through collective action.',
          color: '#34d399',
        },
      ],
    },
    { text: '[Paraphrase] The three fire together as one, and the speaker insists' },
    { text: '' },

    // Stanza 3
    {
      text: '[Paraphrase] he can see each bullet tearing through the man’s life,',
      annotations: [
        {
          type: 'Graphic imagery',
          note: "The violent verb for each bullet's passage suggests it destroys not just flesh but the entirety of the man's existence. The dash at the end of the line creates a sudden pause before the visual detail that follows.",
          color: '#f87171',
        },
      ],
    },
    { text: '[Paraphrase] He sees bright daylight through the man’s body, on the far side.' },
    { text: '[Paraphrase] They have shot the thief about twelve times' },
    {
      text: '[Paraphrase] and he lies on the road with his insides spilling out,',
      annotations: [
        {
          type: 'Visceral imagery',
          note: "The vague, colloquial way he describes the body is understated, yet it names a horrifying physical reality - the soldier's casual phrasing reveals desensitisation.",
          color: '#f87171',
        },
      ],
    },
    { text: '' },

    // Stanza 4
    { text: '[Paraphrase] a picture of suffering in its purest form.' },
    { text: '[Paraphrase] A fellow soldier walks past' },
    {
      text: '[Paraphrase] and casually throws the man’s intestines back inside him.',
      annotations: [
        {
          type: 'Graphic imagery',
          note: 'Shockingly visceral description. The casual verb "tosses" contrasts with the horrific action, reflecting how war desensitises soldiers to violence.',
          color: '#f87171',
        },
      ],
    },
    { text: '[Paraphrase] Then his body is loaded onto a lorry and driven off.' },
    { text: '' },

    // Stanza 5
    {
      text: '[Paraphrase] That should be the end of it, only it is not.',
      annotations: [
        {
          type: 'Volta / Turning point',
          note: "This caesura marks the poem's structural and emotional pivot. The speaker tries to dismiss the event but cannot -- the trauma persists.",
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '[Paraphrase] His bloodstain lingers where he fell, and while patrolling',
      annotations: [
        {
          type: 'Metaphor',
          note: 'The "blood-shadow" (see Key Quotes): the stain left behind becomes a permanent shadow, symbolising how the memory of the killing is imprinted on the speaker\'s conscience.',
          color: '#a78bfa',
        },
      ],
    },
    { text: '[Paraphrase] the speaker crosses that spot again and again, for weeks.' },
    { text: '[Paraphrase] Later he gets military leave at home, yet whenever he blinks' },
    { text: '' },

    // Stanza 6
    { text: '[Paraphrase] the looter charges out through the bank’s entrance again.' },
    { text: '[Paraphrase] When he sleeps, the man is again likely armed, but perhaps not.' },
    { text: '[Paraphrase] In his dreams, twelve bullets rip the man to pieces.' },
    {
      text: '[Paraphrase] Alcohol and drugs cannot drive the dead man from his mind,',
      annotations: [
        {
          type: 'PTSD',
          note: "Reference to substance abuse as a coping mechanism reveals the depth of the speaker's psychological trauma. The verb for driving the dead man out is military language used ironically: the enemy is now inside his mind.",
          color: '#f87171',
        },
      ],
    },
    { text: '' },

    // Stanza 7
    {
      text: '[Paraphrase] he is present in the speaker’s mind whenever his eyes shut,',
      annotations: [
        {
          type: 'Shift to present tense',
          note: "Most of the poem is told in the present tense, but from here it is the present of the speaker's life at home rather than a retold incident: the haunting is current and ongoing. Placing the dead man inside the speaker's head makes him a permanent presence.",
          color: '#f59e0b',
        },
      ],
    },
    {
      text: '[Paraphrase] entrenched like a soldier deep in hostile territory,',
      annotations: [
        {
          type: 'Military metaphor',
          note: "Entrenched like an enemy soldier (see Key Quotes), the dead man has invaded the speaker's mind. The speaker's own mind has become a battlefield.",
          color: '#a78bfa',
        },
      ],
    },
    {
      text: '[Paraphrase] not abandoned to die in a far-off, sunstruck, sand-choked country',
      annotations: [
        {
          type: 'Sibilance',
          note: "The sibilant sounds of this line's two hyphenated adjectives create a hissing, suffocating quality that mirrors the oppressive desert environment and the speaker's mental anguish.",
          color: '#34d399',
        },
      ],
    },
    { text: '[Paraphrase] or buried in a desert grave,' },
    { text: '' },

    // Stanza 8 (closing couplet)
    {
      text: '[Paraphrase] but uncomfortably close, right here in the present,',
      annotations: [
        {
          type: 'Isolation',
          note: "The final couplet is isolated from the rest of the poem, mirroring the speaker's emotional isolation and the way the memory cannot be contained within a neat structure.",
          color: '#a78bfa',
        },
      ],
    },
    {
      text: '[Paraphrase] the dead man’s blood-soaked life lies in the speaker’s blood-stained hands.',
      annotations: [
        {
          type: 'Pun',
          note: '"bloody" works as both a swear word (colloquial, angry) and a literal description (covered in blood). This dual meaning captures the soldier\'s guilt and frustration simultaneously.',
          color: '#f59e0b',
        },
        {
          type: 'Final line',
          note: "The end-stopped final line is definitive -- the speaker accepts inescapable guilt. Take away the two intensifiers and what is left is the idiom about holding someone's life in your hands, made literal and devastating.",
          color: '#f87171',
        },
      ],
    },
  ],

  context: `<p><strong>Simon Armitage</strong> (born 1963) is a contemporary English poet from Marsden, West Yorkshire. He has been UK Poet Laureate since May 2019, succeeding Carol Ann Duffy (who held the post 2009-2019). He originally trained as a probation officer, is now a professor at Leeds University, and served as Oxford Professor of Poetry from 2015 to 2019. He is known for writing in an accessible, conversational style that draws on everyday Northern English speech.</p>

<p><strong>Important biographical note:</strong> Armitage never served in any military or combat role. <em>"Remains"</em> (2007) was written for Channel 4's documentary <em>The Not Dead</em> and is based on interviews with Iraq War veterans - not on personal experience. The poem draws on the testimony of a soldier (often identified as Guardsman Tromans, who served in Basra and later suffered severe PTSD); Armitage's role was to act as a poetic translator of these accounts.</p>

<p>The poem explores the <strong>psychological aftermath of killing</strong> in modern warfare. Unlike older war poetry that focused on trenches and patriotism, "Remains" confronts the reality that soldiers carry the trauma of combat long after they return home.</p>

<p><strong>Key contextual points:</strong></p>
<ul>
  <li>Armitage himself never served in any war - the poem is based on documentary interviews, not personal experience</li>
  <li>Based on a real soldier's account -- Armitage acts as a mouthpiece for veterans who struggle to articulate their experiences</li>
  <li>Set during the Iraq War (2003 onwards) -- a controversial conflict where the justification for war was questioned</li>
  <li>The ambiguity over whether the looter was armed reflects the moral complexity of modern urban warfare, where combatants and civilians are hard to distinguish</li>
  <li>The poem was written to raise awareness of PTSD among returning soldiers, many of whom received inadequate mental health support</li>
  <li>Part of the broader AQA Power and Conflict anthology, exploring how power (military authority) creates lasting psychological conflict within individuals</li>
</ul>`,

  contextAr: `<p><strong>Simon Armitage</strong> (مواليد 1963) شاعر إنجليزي معاصر من Marsden في West Yorkshire. صار UK Poet Laureate من مايو 2019، وخلف Carol Ann Duffy (اللي كانت في هالمنصب من 2009 إلى 2019). في الأصل تدرّب يكون probation officer، وحالياً هو بروفيسور في جامعة Leeds، وشغل منصب Oxford Professor of Poetry من 2015 إلى 2019. معروف بأسلوبه السلس والمحكي، اللي يستلهم من اللهجة الإنجليزية الشمالية في الحياة اليومية.</p>

<p><strong>ملاحظة سيرة مهمّة:</strong> Armitage ما خدم أبد في أي دور عسكري أو قتالي. قصيدة <em>"Remains"</em> (2007) كُتبت لصالح وثائقي قناة Channel 4 <em>The Not Dead</em>، وهي مبنية على مقابلات مع قدامى محاربي حرب Iraq War - مو على تجربة شخصية. القصيدة تعتمد على شهادة جندي (غالباً يُعرّف باسم Guardsman Tromans، اللي خدم في Basra وعانى لاحقاً من PTSD حاد)؛ دور Armitage كان إنه يترجم شعرياً هالشهادات.</p>

<p>القصيدة تستكشف <strong>الأثر النفسي بعد فعل القتل</strong> في الحرب الحديثة. على عكس شعر الحرب القديم اللي ركّز على الخنادق والوطنية، قصيدة "Remains" تواجه الحقيقة إن الجنود يحملون صدمة المعركة معاهم لفترة طويلة بعد ما يرجعون لبيوتهم.</p>

<p><strong>نقاط سياقية مهمّة:</strong></p>
<ul>
  <li>Armitage نفسه ما خدم في أي حرب - القصيدة مبنية على مقابلات وثائقية، مو على تجربة شخصية</li>
  <li>مبنية على شهادة جندي حقيقي - Armitage يصير صوت ينطق بلسان قدامى المحاربين اللي يصعب عليهم يعبّرون عن تجاربهم</li>
  <li>الأحداث صارت أيام حرب Iraq War (من 2003 وما بعدها) - صراع مثير للجدل، انتقد فيه وايد ناس مبرّرات الحرب</li>
  <li>الغموض حول كون الـlooter مسلّح ولا لا يعكس التعقيد الأخلاقي للحرب الحضرية الحديثة، اللي يصير فيها صعب التفريق بين المقاتلين والمدنيين</li>
  <li>القصيدة كُتبت عشان ترفع الوعي بمرض PTSD عند الجنود الراجعين من الحرب، وكثير منهم ما حصلوا دعم نفسي كافي</li>
  <li>تنتمي لمجموعة AQA Power and Conflict الأوسع، اللي تستكشف كيف السلطة (السلطة العسكرية) تخلق صراع نفسي طويل المدى داخل الأفراد</li>
</ul>`,

  summary: `The speaker recounts a seemingly routine military incident: he and two fellow soldiers are sent to deal with looters at a bank. One looter runs and the three soldiers open fire, killing him. The speaker is uncertain whether the man was armed.

After the shooting, the soldiers handle the body with shocking casualness: one of them throws the man's insides back into him, and the body is driven away in a lorry. The speaker tries to close the story there, and admits in the same breath that he cannot (line 17).

The second half of the poem reveals the true cost. The memory of the dead man haunts the speaker relentlessly, on patrol, on leave at home, in sleep and in dreams. Neither drink nor drugs can erase the image. The dead man is entrenched in the speaker's mind like an enemy soldier holding a position behind the lines.

The poem ends with a devastating final couplet, in which the dead man's life lies in the speaker's own hands (line 30). The speaker is trapped in an endless cycle of guilt, unable to escape responsibility for a death that may or may not have been justified. The poem moves from casual narration to raw psychological torment, mirroring the way trauma can surface long after the event itself.`,

  summaryAr: `المتحدث يروي حادثة عسكرية تبدو روتينية: هو واثنين من رفاقه الجنود يتم إرسالهم عشان يتعاملون مع looters في بنك. واحد من اللصوص يركض، والجنود الثلاثة يفتحون النار ويقتلونه. المتحدث ما متأكّد إذا الرجال كان مسلّح ولا لا.

بعد إطلاق النار، الجنود يتعاملون مع الجثة بلا مبالاة صادمة: واحد منهم يرجّع أحشاء الرجال داخل جسمه، والجثة تنشال في شاحنة. المتحدث يحاول يسكّر القصة هني، وفي نفس النفَس يعترف إنه ما يقدر (البيت 17).

النصف الثاني من القصيدة يكشف الكلفة الحقيقية. ذكرى الرجال الميت تطارد المتحدث بلا هوادة، في الدورية، وفي البيت وهو في إجازة، وفي النوم والأحلام. لا الشرب ولا المخدّرات تقدر تمحي الصورة. الرجال الميت متمركز داخل عقل المتحدث مثل جندي عدو ماسك موقع ورا الخطوط.

القصيدة تنتهي بـcouplet ختامي مدمّر، فيه حياة الرجال الميت بين يدين المتحدث نفسه (البيت 30). المتحدث محاصر في دورة ذنب ما لها نهاية، عاجز عن الهروب من مسؤوليته عن موت ممكن يكون مبرّر وممكن لا. القصيدة تنتقل من سرد عابر إلى عذاب نفسي خام، تعكس كيف الصدمة تقدر تطلع للسطح بعد فترة طويلة من الحدث نفسه.`,

  formAndStructure: `FORM:
-- Free verse with no regular rhyme scheme, reflecting the chaotic and unstructured nature of both the combat incident and the speaker's fragmented mental state
-- Written as a dramatic monologue -- the speaker addresses the reader directly, creating an intimate, confessional tone
-- The poem is based on real testimony, giving it documentary authenticity

STRUCTURE:
-- Seven quatrains and a closing couplet: the regular four-line stanzas suggest an attempt at control, which the short, isolated final couplet breaks
-- The poem has a clear turning point (volta) at the first line of stanza 5 (line 17) -- everything before is the event; everything after is the psychological aftermath
-- Enjambment runs throughout, particularly across stanza breaks (from stanza 5 into stanza 6 he blinks and the looter charges out of the bank again), creating a sense of thoughts spilling over uncontrollably
-- The final couplet is deliberately isolated, mirroring the speaker's emotional isolation and the way the memory refuses to fit neatly into the past

VOICE & TENSE:
-- The whole poem is told in the present tense, even the anecdote of the shooting, so the event feels as if it is still happening; from stanza 5 that present becomes the speaker's own life at home, where the dead man is lodged in his head (line 25), showing the memory is ongoing and inescapable
-- Colloquial, conversational language (the slang of line 3, the shrug of line 17) contrasts with moments of intense, graphic imagery -- the everyday voice makes the horror more shocking
-- The anecdotal opening phrase suggests this is just one of many such incidents, normalising the violence

KEY STRUCTURAL EFFECTS:
-- The caesura in line 17 forces a pause that mirrors the speaker's failed attempt to move on
-- Repetition of the word for the whole group in stanza 2 shows the speaker trying to share the guilt
-- The shift from the plural first person of the patrol to the singular of the aftermath tracks the journey from shared action to solitary guilt`,

  formAndStructureAr: `الشكل (FORM):
-- free verse بلا نظام قافية منتظم، يعكس الطبيعة الفوضوية وغير المنظّمة لحادثة المعركة والحالة الذهنية المتشظّية للمتحدث.
-- مكتوبة بأسلوب dramatic monologue - المتحدث يخاطب القارئ مباشرة، ويخلق نبرة حميمة واعترافية.
-- القصيدة مبنية على شهادة حقيقية، وهالشي يعطيها مصداقية وثائقية.

البنية (STRUCTURE):
-- سبع مقاطع رباعية (quatrains) و couplet ختامي: المقاطع الرباعية المنتظمة توحي بمحاولة سيطرة، والـcouplet الأخير القصير والمعزول يكسرها.
-- القصيدة فيها volta واضحة في أول بيت من المقطع 5 (البيت 17) - كل شي قبل هذي اللحظة هو الحدث، وكل شي بعدها هو الأثر النفسي.
-- enjambment يمشي عبر القصيدة كلها، خصوصاً عبر فواصل المقاطع (من المقطع 5 للمقطع 6 يرمش، واللص يطلع من باب البنك مرّة ثانية)، يخلق إحساس بأفكار تنسكب بلا ضابط.
-- الـcouplet الختامي معزول عمداً، يعكس العزلة العاطفية للمتحدث وكيف الذكرى ترفض إنها تتركّز بشكل مرتّب في الماضي.

الصوت والزمن (VOICE & TENSE):
-- القصيدة كلها بالـpresent tense، حتى حكاية إطلاق النار، فالحدث يبان كأنه لسّاه يصير؛ ومن المقطع 5 هالحاضر يصير حياة المتحدث نفسه في البيت، والرجال الميت ساكن في راسه (البيت 25)، عشان توضّح إن الذكرى مستمرّة وما تنترك.
-- لغة محكية وعفوية (العامية في البيت 3، واللامبالاة في البيت 17) تتناقض مع لحظات صور مكثّفة ومفصّلة - الصوت اليومي يخلّي الرعب أصدم.
-- العبارة القصصية في الافتتاحية توحي إن هذي حادثة من ضمن وايد حوادث مشابهة، وهالشي يطبّع العنف.

التأثيرات البنيوية المهمّة:
-- الـcaesura في البيت 17 تفرض وقفة، تعكس محاولة المتحدث الفاشلة إنه يتجاوز.
-- تكرار الكلمة اللي تجمع الكل في المقطع 2 يبيّن المتحدث وهو يحاول يوزّع الذنب.
-- الانتقال من ضمير الجمع في الدورية إلى ضمير المفرد في اللي بعدها يرصد الرحلة من فعل مشترك إلى ذنب فردي.`,

  keyQuotes: [
    {
      quote: 'probably armed, possibly not',
      analysis:
        'The descending certainty (from "probably" to "possibly") reveals the speaker\'s moral doubt. He cannot be sure the killing was justified, and this uncertainty is the seed of his later guilt and PTSD. The phrase returns in his sleep in stanza 6 (line 22), so the doubt is what haunts him.',
      themes: ['Guilt', 'Moral ambiguity', 'Conflict'],
      analysisAr:
        'اليقين النازل (من "probably" إلى "possibly" الأضعف) يكشف الشك الأخلاقي عند المتحدث. ما يقدر يتأكّد إن القتل كان مبرّر، وهالغموض هو بذرة الذنب والـPTSD اللي يحسّ فيهم لاحقاً. والعبارة ترجع له في نومه في المقطع 6 (البيت 22)، يعني الشك نفسه هو اللي يطارده.',
      themesAr: ['الذنب', 'الغموض الأخلاقي', 'الصراع'],
    },
    {
      quote: 'End of story, except not really',
      analysis:
        'The volta of the poem. The caesura creates a pause that mirrors the speaker\'s failed attempt to close the chapter. "Except not really" is devastatingly understated -- this one line signals the shift from narrative to psychological torment.',
      themes: ['Power of memory', 'PTSD', 'Guilt'],
      analysisAr:
        'هذي الـvolta في القصيدة. الـcaesura تخلق وقفة، تعكس محاولة المتحدث الفاشلة إنه يغلق الفصل. وعبارة "Except not really" مكتومة بشكل مدمّر - هذا البيت الواحد يشير لانتقال من السرد إلى العذاب النفسي.',
      themesAr: ['قوة الذاكرة', 'PTSD', 'الذنب'],
    },
    {
      quote: 'blood-shadow',
      analysis:
        'A compound metaphor fusing bloodstain and shadow. The stain will not leave the street, and he walks over it on patrol for weeks (lines 18 to 19); the "shadow" suggests the man\'s death has left a permanent, dark imprint - both on the street and on the speaker\'s conscience.',
      themes: ['Guilt', 'Power of memory'],
      analysisAr:
        'metaphor مركّبة تدمج بقعة الدم والظل. البقعة ما تروح من الشارع، وهو يمشي فوقها في الدورية لأسابيع (البيتين 18 و19)؛ و"shadow" يلمّح إن موت الرجال خلّا بصمة دائمة ومظلمة - على الشارع وعلى ضمير المتحدث.',
      themesAr: ['الذنب', 'قوة الذاكرة'],
    },
    {
      quote: 'in my head',
      analysis:
        "At the start of stanza 7 (line 25), just after drink and drugs have failed to drive him out, the dead man is lodged in the speaker's head whenever he closes his eyes. The present tense makes the haunting immediate and ongoing: he has become an inescapable mental presence, and the speaker cannot find peace even in sleep.",
      themes: ['PTSD', 'Power of memory', 'Individual vs. authority'],
      analysisAr:
        'في بداية المقطع 7 (البيت 25)، بعد ما فشل الشرب والمخدّرات إنهم يطلّعونه، الرجال الميت ساكن في راس المتحدث كل ما يغمّض عيونه. الـpresent tense يخلّي المطاردة فورية ومستمرّة: صار حضور ذهني ما يمكن الهروب منه، والمتحدث ما يقدر يلقى راحة حتى وهو نايم.',
      themesAr: ['PTSD', 'قوة الذاكرة', 'الفرد ضد السلطة'],
    },
    {
      quote: 'dug in behind enemy lines',
      analysis:
        "Extended military metaphor. The dead man has invaded the speaker's mind like a soldier entrenched in hostile territory. Ironically, the speaker's own psyche has become the battlefield -- the war has followed him home.",
      themes: ['Power of memory', 'PTSD', 'Conflict'],
      analysisAr:
        'metaphor عسكرية ممتدّة. الرجال الميت غزى عقل المتحدث مثل جندي متمركز في أرض معادية. السخرية هنا إن نفس المتحدث نفسها صارت ساحة المعركة - الحرب لحقت ورّاه وجت معاه للبيت.',
      themesAr: ['قوة الذاكرة', 'PTSD', 'الصراع'],
    },
    {
      quote: 'his bloody life in my bloody hands',
      analysis:
        'A devastating pun: "bloody" works as a colloquial intensifier (swearing) and a literal description (blood-stained). The idiom about having blood on your hands (meaning guilt for a death) is made horrifyingly literal. The end-stopped final line is inescapable and definitive.',
      themes: ['Guilt', 'Reality of conflict', 'PTSD'],
      analysisAr:
        'pun مدمّرة: كلمة "bloody" تشتغل كمكثّف عامّي (شتيمة بريطانية) وكوصف حرفي (ملطّخ بالدم). والـidiom عن الدم اللي على يدينك (يعني تحمّل ذنب موت أحد) يتحوّل إلى شي حرفي ومرعب. والبيت الختامي المنتهي بنقطة (end-stopped) ما فيه مهرب وحاسم.',
      themesAr: ['الذنب', 'واقع الصراع', 'PTSD'],
    },
  ],

  languageDevices: [
    {
      device: 'Colloquialism',
      example: 'legs it',
      effect:
        'The informal, everyday language creates a sense of authenticity -- this sounds like a real soldier speaking, not a polished literary voice. It also normalises the violence, making the later horror more shocking by contrast.',
      lineRef: 2,
      effectAr:
        'اللغة غير الرسمية واليومية تخلق إحساس بالمصداقية - تسمع كأن جندي حقيقي يتكلم، مو صوت أدبي مصقول. وعلاوة على ذلك، تطبّع العنف، وبالمقارنة تخلّي الرعب اللي يجي بعدها أصدم.',
    },
    {
      device: 'Euphemism',
      example:
        '[Line 17: the speaker tries to close the story with a stock phrase, then takes it back]',
      effect:
        'The speaker tries to dismiss the killing as a closed chapter using a casual, dismissive phrase. The euphemism reveals his coping mechanism -- trying to minimise the significance of taking a life. Its immediate contradiction in the same line exposes the failure of this strategy (see Key Quotes).',
      lineRef: 20,
      effectAr:
        'المتحدث يحاول يطنّش فعل القتل كأنه فصل مغلق، باستخدام عبارة عابرة وتطنيشية. الـeuphemism تكشف آلية تأقلمه - يحاول يقلّل من أهمية إنه أخذ حياة. والتناقض الفوري في نفس البيت يفضح فشل هالاستراتيجية.',
    },
    {
      device: 'Repetition',
      example: '[Stanza 2: the word for the whole group, three times as the soldiers open fire]',
      effect:
        "Repeated emphasis on the collective action (the three of them, agreed, firing together) reveals the speaker's desperation to distribute guilt. By insisting others were equally responsible, he tries -- and fails -- to lessen his personal burden.",
      lineRef: 7,
      effectAr:
        'التأكيد المتكرّر على الفعل الجماعي (الثلاثة، متّفقين، يطلقون مع بعض) يكشف يأس المتحدث في توزيع الذنب. لمّا يصرّ إن غيره كان مسؤول بالتساوي، يحاول - ويفشل - إنه يخفّف عبئه الشخصي.',
    },
    {
      device: 'Graphic imagery',
      example: 'tosses',
      effect:
        "One of his mates flings the dead man's insides back where they came from (line 15). The visceral, almost unbearable detail forces the reader to confront the physical reality of violence, and the casual verb paired with such horrific content creates a jarring dissonance that reflects the soldier's desensitisation.",
      lineRef: 17,
      effectAr:
        'واحد من ربعه يرجّع أحشاء الرجال داخل جسمه (البيت 15). التفصيل المؤلم اللي يكاد ما يتحمّل يجبر القارئ إنه يواجه الواقع الجسدي للعنف، والفعل العابر "tosses" مع محتوى مرعب بهالقد يخلق تنافر صادم، يعكس فقدان الحس عند الجندي.',
    },
    {
      device: 'Pun ("bloody")',
      example: '[Line 30: the same intensifier used twice in the last line]',
      effect:
        "The word operates on two levels simultaneously: as a common British swear word expressing frustration, and as a literal description of blood-stained hands. This dual meaning captures both the speaker's emotional anguish and physical guilt in a single devastating line (see Key Quotes).",
      lineRef: 36,
    },
    {
      device: 'Enjambment',
      example:
        '[Stanzas 5 to 6: he blinks, and across the stanza break the looter charges out of the bank again]',
      effect:
        "Lines spill over stanza breaks, mirroring how the speaker's thoughts and memories overflow beyond his control. The fractured line structure reflects a fractured mind -- he cannot contain the memory within neat boundaries.",
      lineRef: 23,
    },
    {
      device: 'Military metaphor',
      example: '[Line 26: the dead man entrenched like an enemy soldier]',
      effect:
        'The dead man is described using the language of military strategy -- he has "dug in" (entrenched) in the speaker\'s mind (see Key Quotes). This ironic inversion shows that the war has followed the soldier home; his own psyche is now occupied territory.',
      lineRef: 31,
    },
    {
      device: 'Sibilance',
      example: '[Line 27: two hyphenated adjectives for the desert land, each alliterating on s]',
      effect:
        'The repeated "s" sounds create a hissing, suffocating quality that mirrors the oppressive desert heat and the speaker\'s sense of being smothered by memory. The alliterative compound adjectives also slow the reader down, forcing them to dwell in the discomfort.',
      lineRef: 32,
    },
  ],
}

/* ── Theme tokens ──────────────────────────────────────────────── */

const THEMES = [
  { label: 'Guilt', icon: HeartCrack, color: 'text-red-400 bg-red-500/10' },
  { label: 'PTSD / Trauma', icon: Brain, color: 'text-purple-400 bg-purple-500/10' },
  { label: 'Reality of conflict', icon: Swords, color: 'text-clay-600 bg-orange-500/10' },
  { label: 'Power of memory', icon: Eye, color: 'text-blue-400 bg-blue-500/10' },
  { label: 'Moral ambiguity', icon: Skull, color: 'text-clay-600 bg-amber-500/10' },
]

/* ── InlineStudyEngine data ───────────────────────────────────────── */

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'rem-1',
    question: 'What event does the speaker describe in Remains?',
    type: 'multiple-choice',
    options: [
      'A training exercise',
      'Shooting a looter during a deployment, then being haunted by the memory',
      'Rescuing a civilian from a warzone',
      "Returning home from war to a hero's welcome",
    ],
    correctIndex: 1,
    explanation:
      'The speaker describes shooting a looter who was raiding a bank. The uncertainty about whether the man was armed, and the graphic aftermath, haunt the soldier long after the event.',
    topic: 'Meaning',
    difficulty: 'foundation',
  },
  {
    id: 'rem-2',
    question: "What does the speaker's uncertainty about the looter in line 4 reveal?",
    type: 'multiple-choice',
    options: [
      'The soldier was certain the looter had a weapon',
      'The moral ambiguity and guilt - the soldier cannot be sure the killing was justified',
      'The soldier did not care about the situation',
      'The looter was definitely unarmed',
    ],
    correctIndex: 1,
    explanation:
      'The shift from "probably" to the weaker "possibly" shows the soldier\'s uncertainty. He cannot justify the killing with confidence, and this moral doubt becomes the source of his guilt and PTSD.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'rem-3',
    question:
      'Why does Armitage use colloquial language, such as the slang for running off in line 3 and the casual verb of line 15?',
    type: 'multiple-choice',
    options: [
      'He is a careless writer',
      'It makes the poem feel like a real soldier talking, not a polished literary voice',
      'It is meant to be humorous',
      'It shows the soldier is uneducated',
    ],
    correctIndex: 1,
    explanation:
      'The informal, colloquial language mimics the way a real soldier would recount the incident. It creates authenticity and makes the sudden shift to haunting imagery more shocking.',
    topic: 'Language',
    difficulty: 'foundation',
  },
  {
    id: 'rem-4',
    question: 'What does the poem explore about the psychological effects of war?',
    type: 'multiple-choice',
    options: [
      'War makes soldiers stronger',
      'The trauma of killing someone stays with you forever - PTSD and guilt',
      'Soldiers forget about war quickly',
      'War has no lasting psychological effects',
    ],
    correctIndex: 1,
    explanation:
      "Remains is fundamentally about PTSD (Post-Traumatic Stress Disorder). The dead man is entrenched inside the soldier's head like an enemy soldier (line 26) - he cannot escape the memory, even through drink or drugs.",
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'rem-5',
    question: 'What is the effect of the "blood-shadow" left on the street in line 18?',
    type: 'multiple-choice',
    options: [
      'It describes a clean crime scene',
      'The bloodstain becomes a permanent mark - literally and metaphorically, the killing leaves a stain that cannot be removed',
      'It shows the street is dangerous',
      'It describes sunset',
    ],
    correctIndex: 1,
    explanation:
      "The bloodstain becomes a permanent shadow - a stain on both the street and the soldier's conscience. It cannot be washed away, symbolising how guilt persists long after the physical event.",
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'rem-6',
    question: 'How does the poem shift between its two halves?',
    type: 'multiple-choice',
    options: [
      'It shifts from casual anecdote to haunting, inescapable guilt',
      'It shifts from sadness to happiness',
      'It stays in the same tone throughout',
      'It shifts from a warzone to a hospital',
    ],
    correctIndex: 0,
    explanation:
      "The first half uses casual, anecdotal language as if telling a story in a pub. The second half shifts dramatically as the dead man's image invades the soldier's waking life and dreams, and guilt takes over.",
    topic: 'Structure',
    difficulty: 'higher',
  },
  {
    id: 'rem-7',
    question: 'What is the significance of the final line of the poem?',
    type: 'multiple-choice',
    options: [
      'It is a swear word with no deeper meaning',
      'The double meaning of "bloody" - both literal blood and the colloquial intensifier - captures the soldier\'s guilt and casual horror simultaneously',
      'It describes the soldier washing his hands',
      'It refers to a different incident',
    ],
    correctIndex: 1,
    explanation:
      '"Bloody" works as both a swear word (casual, colloquial) and a literal description (covered in blood). This duality mirrors the poem\'s central tension between the soldier\'s casual surface and his deep psychological trauma.',
    topic: 'Language',
    difficulty: 'higher',
  },
  {
    id: 'rem-8',
    question: 'Where does Remains come from and what is its context?',
    type: 'multiple-choice',
    options: [
      'It was written during World War I',
      "It is based on a real soldier's testimony from the documentary The Not Dead, about British soldiers in Iraq",
      'It is entirely fictional',
      'It is based on the Falklands War',
    ],
    correctIndex: 1,
    explanation:
      "Remains is based on the real testimony of a soldier named Guardsman Tromans, featured in the Channel 4 documentary The Not Dead (2007). Armitage wrote the poem as part of a collection giving voice to modern soldiers' experiences.",
    topic: 'Context',
    difficulty: 'higher',
  },
  {
    id: 'rem-9',
    question: 'How does Armitage use the present tense to convey the experience of PTSD?',
    type: 'multiple-choice',
    options: [
      'The present tense makes the poem feel outdated',
      'The whole poem is in the present tense, so the shooting is told as if it is still happening; in the second half that present becomes his life at home, where the memory will not become past',
      'The poem is told entirely in the past tense',
      'It creates a light, cheerful tone',
    ],
    correctIndex: 1,
    explanation:
      "Even the anecdote of the shooting is told in the present tense (the patrol is sent out, the looter runs, the soldiers open fire), which makes it feel immediate. From stanza 5 the present is the speaker's real life, on leave at home, where the dead man is lodged in his head (line 25). PTSD means the traumatic event never becomes past - it remains present, inescapable.",
    topic: 'Structure',
    difficulty: 'grade-9',
  },
  {
    id: 'rem-10',
    question:
      'Which poem from the Power and Conflict anthology best pairs with Remains for exploring guilt and the psychological effects of conflict?',
    type: 'multiple-choice',
    options: [
      'Ozymandias by Shelley',
      'War Photographer by Carol Ann Duffy',
      'Tissue by Dharker',
      'Storm on the Island by Heaney',
    ],
    correctIndex: 1,
    explanation:
      'Both Remains and War Photographer explore the lasting psychological impact of witnessing violence. The photographer and the soldier are both haunted by what they have seen - but while the photographer observes, the soldier has directly caused death.',
    topic: 'Comparison',
    difficulty: 'grade-9',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Key Themes',
    summary:
      'Remains explores the psychological aftermath of killing in war - guilt, PTSD, moral ambiguity, and the impossibility of escaping traumatic memory.',
    keyPoints: [
      'Guilt and moral ambiguity - he cannot be sure the looter was armed (line 4)',
      "PTSD - the dead man is entrenched inside the speaker's head (line 26)",
      'The gap between the casual telling and the devastating psychological reality',
      'Individual responsibility vs shared guilt - the three soldiers open fire together (stanza 2)',
    ],
  },
  {
    topic: 'Language & Imagery',
    summary:
      'Armitage uses colloquial voice, graphic imagery, and dual-meaning words to create a tension between casual storytelling and deep psychological trauma.',
    keyPoints: [
      "Colloquial language (lines 3 and 15) - authentic soldier's voice",
      'The military metaphor of line 26 - inescapable memory',
      'The repeated intensifier of the last line - double meaning captures guilt',
      'Graphic imagery of the shooting creates visceral, unforgettable scenes',
    ],
  },
  {
    topic: 'Structure & Form',
    summary:
      'Free verse in seven quatrains and a closing couplet, told in the present tense throughout, so that the anecdote and the haunting that follows it both feel current.',
    keyPoints: [
      "Free verse - no regular rhyme or metre, mirroring the soldier's fractured state",
      'Present tense throughout - even the anecdote feels current, and the trauma refuses to become memory',
      'First half is narrative; second half is psychological torment',
      'Conversational tone gradually breaks down as guilt overwhelms',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Armitage present the psychological effects of conflict in Remains?',
  'Compare how guilt is presented in Remains and one other poem from the anthology.',
  'How does Armitage use language and structure to show the lasting impact of a single violent act?',
]

/* ── Comparison poems ──────────────────────────────────────────── */

const COMPARISONS = [
  {
    title: 'Bayonet Charge',
    poet: 'Ted Hughes',
    link: '/revision/poetry/power-and-conflict/bayonet-charge',
    points: [
      'Both explore the psychological impact of combat on individual soldiers',
      'Both use graphic, visceral imagery to convey the horror of violence',
      'Hughes focuses on the moment of action; Armitage on the aftermath and lasting trauma',
      'Bayonet Charge uses third person, creating distance; Remains uses first person, creating intimacy',
    ],
  },
  {
    title: 'War Photographer',
    poet: 'Carol Ann Duffy',
    link: '/revision/poetry/power-and-conflict/war-photographer',
    points: [
      'Both deal with memories of conflict that haunt the speaker after returning to safety',
      'Both explore the gap between those who experience war and those who observe it from afar',
      'War Photographer has a controlled, rhymed structure; Remains uses unrhymed free verse whose quatrains give way to a lone couplet, reflecting different coping mechanisms',
      'Both speakers are unable to escape the images of death they have witnessed',
    ],
  },
  {
    title: 'Kamikaze',
    poet: 'Beatrice Garland',
    link: '/revision/poetry/power-and-conflict/kamikaze',
    points: [
      'Both explore the conflict between duty (military orders) and personal conscience',
      'Both question whether following orders is morally justified',
      "Kamikaze's pilot chooses not to kill and is punished by society; Armitage's soldier follows orders and is punished by his own mind",
      'Both poems examine how war destroys individuals -- whether through action or inaction',
    ],
  },
]

/* ── Page component ────────────────────────────────────────────── */

export default function RemainsPage() {
  return (
    <div className="space-y-8">
      <CourseJsonLd
        name="Remains by Simon Armitage - Analysis & Annotations"
        description="Line-by-line analysis of Remains with interactive annotations, themes, language techniques, and comparison guidance for GCSE English Literature."
      />

      {/* ── Breadcrumb / back ── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ms-2 text-muted-foreground"
          render={<Link href="/revision/poetry/power-and-conflict" />}
        >
          <ArrowLeft className="size-3.5" />
          Power and Conflict
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <BookOpen className="size-5 text-rose-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Remains</h1>
            <p className="text-body-sm text-muted-foreground">
              Simon Armitage &middot; Power and Conflict Anthology
            </p>
            <Badge variant="secondary" className="mt-1.5 text-[0.65rem]">
              AQA
            </Badge>
          </div>
        </div>
      </div>

      {/* ── Theme tokens ── */}
      <div className="flex flex-wrap gap-2">
        {THEMES.map((t) => (
          <span
            key={t.label}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${t.color}`}
          >
            <t.icon className="size-3.5" />
            {t.label}
          </span>
        ))}
      </div>

      {/* ── Interactive poem viewer ── */}
      <StudyTools
        textName="Remains"
        textType="poem"
        examBoard="AQA"
        cluster="Power & Conflict"
        variant="compact"
      />

      <InlineStudyEngine
        textName="Remains"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />

      <InteractivePoemViewer poem={REMAINS} />

      {/* ── Comparison poems ── */}
      <section className="space-y-4">
        <h2 className="text-heading-md font-heading text-foreground">Comparison Poems</h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl">
          For the AQA exam, you must compare two poems from the anthology. These are the strongest
          pairings with "Remains" and the key points of comparison.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARISONS.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-border/60 bg-card p-5 flex flex-col"
            >
              <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">by {c.poet}</p>

              <ul className="space-y-2 mb-4 flex-1">
                {c.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-xs text-card-foreground leading-relaxed">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-rose-400/60" />
                    {p}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={<Link href={c.link} />}
              >
                Study {c.title}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
        {/* Until 26 September 2026 this credited Faber & Faber. The AQA anthology
            prints the poem from The Not Dead by permission of Pomona, its publisher. */}
        <strong>Rights notice:</strong> &copy; Simon Armitage (b. 1963), from <em>The Not Dead</em>{' '}
        (Pomona, 2008). The poem is paraphrased line by line here, not printed. Quotations from
        &ldquo;Remains&rdquo; are short fair-dealing extracts under CDPA 1988 &sect;30 (criticism,
        review, quotation). For full text, students should consult the board-licensed AQA Power
        &amp; Conflict anthology or Armitage&rsquo;s collection.
      </p>
    </div>
  )
}
