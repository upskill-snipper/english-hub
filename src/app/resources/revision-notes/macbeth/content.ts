/**
 * Macbeth set-text guide - bilingual content module.
 *
 * Houses every prose block rendered by ./page.tsx in two locales:
 *   en - UK GCSE marker register (unchanged from the original page).
 *   ar - Khaleeji-leaning literary explanatory prose.
 *
 * Conventions (mirrors components/study/InteractivePoemViewer.tsx):
 *   - English quotations stay in English (memorisation requirement).
 *     They appear verbatim inside both `en` and `ar` strings, wrapped
 *     in straight " marks so the page renders the same orthography.
 *   - Latin script is preserved for: character names (Macbeth, Lady
 *     Macbeth, Banquo …), the author (Shakespeare), brand (The English
 *     Hub), exam boards (AQA, Edexcel, OCR, Eduqas, CAIE), the play
 *     title (Macbeth), and AO codes (AO1-AO4). Acts and scenes use
 *     Latin numerals (Act 1, Scene 7 / 1.7).
 *   - Gender policy: binary M/F. Lady Macbeth is treated as a female
 *     speaker (تقول، تطلب، تتمنى) - feminine verb forms throughout.
 *     Macbeth, Banquo, Duncan, Macduff, Malcolm, Ross, Lennox: male
 *     verb forms (يقول، يخاف، يقتل).
 *   - Khaleeji register markers: شنو، شلون، أبغى، وايد، الحين، إحنا،
 *     ببلاش، يشوف. Avoids Levantine (شو، كيفك، ليش).
 */

export type Bi = { en: string; ar: string }

/* ──────────────── HERO + NAV ──────────────── */

export const HERO_TITLE: Bi = {
  en: 'Macbeth - The Definitive GCSE Revision Guide',
  ar: 'Macbeth - دليل المراجعة الشامل لـ GCSE',
}

export const HERO_LEAD: Bi = {
  en: 'The most comprehensive Macbeth resource you will find. Act-by-act plot summaries, 10 character profiles with key quotes, 8 themes with detailed analysis, 30+ quotations with full breakdowns, historical context, and 5 essay planning templates. Everything you need for your GCSE English Literature exam.',
  ar: 'أشمل مرجع لـ Macbeth بتلقاه. ملخصات الحبكة فصل فصل، 10 شخصيات بكل اقتباساتها، 8 ثيمات بتحليل مفصّل، أكثر من 30 اقتباس مع تفكيك كامل، السياق التاريخي، و5 قوالب تخطيط مقال. كل اللي تحتاجه لامتحان GCSE English Literature.',
}

export const JUMP_LABEL: Bi = { en: 'Jump to section:', ar: 'انتقل للقسم:' }

export const NAV_LABELS: Record<string, Bi> = {
  'plot-summary': { en: 'Plot Summary', ar: 'ملخص الحبكة' },
  characters: { en: 'Characters', ar: 'الشخصيات' },
  themes: { en: 'Themes', ar: 'الثيمات' },
  'key-quotations': { en: 'Key Quotations', ar: 'الاقتباسات المفتاحية' },
  context: { en: 'Context', ar: 'السياق' },
  'essay-planning': { en: 'Essay Planning', ar: 'تخطيط المقال' },
  'writers-methods': { en: "Writer's Methods", ar: 'أساليب الكاتب' },
  'grade-9': { en: 'Grade 9 Points', ar: 'نقاط Grade 9' },
}

/* ──────────────── SECTION TITLES ──────────────── */

export const SECTION_PLOT_TITLE: Bi = { en: 'Act-by-Act Plot Summary', ar: 'ملخص الحبكة فصل فصل' }
export const SECTION_PLOT_BADGE: Bi = { en: '5 Acts', ar: '5 فصول' }
export const SECTION_CHARS_TITLE: Bi = { en: 'Character Profiles', ar: 'ملفات الشخصيات' }
export const SECTION_CHARS_BADGE: Bi = { en: '10 Characters', ar: '10 شخصيات' }
export const SECTION_THEMES_TITLE: Bi = { en: 'Major Themes', ar: 'الثيمات الرئيسية' }
export const SECTION_THEMES_BADGE: Bi = { en: '8 Themes', ar: '8 ثيمات' }
export const SECTION_QUOTES_TITLE: Bi = {
  en: 'Key Quotations Bank',
  ar: 'بنك الاقتباسات المفتاحية',
}
export const SECTION_QUOTES_BADGE: Bi = { en: '34 Quotes', ar: '34 اقتباس' }
export const SECTION_CONTEXT_TITLE: Bi = { en: 'Historical Context', ar: 'السياق التاريخي' }
export const SECTION_ESSAY_TITLE: Bi = { en: 'Essay Planning Templates', ar: 'قوالب تخطيط المقال' }
export const SECTION_ESSAY_BADGE: Bi = { en: '5 Questions', ar: '5 أسئلة' }
export const SECTION_METHODS_TITLE: Bi = {
  en: "Writer's Methods and Techniques",
  ar: 'أساليب الكاتب وتقنياته',
}
export const SECTION_METHODS_BADGE: Bi = { en: '10 Techniques', ar: '10 تقنيات' }
export const SECTION_GRADE9_TITLE: Bi = {
  en: 'Grade 9 Exemplar Points and Interpretations',
  ar: 'نقاط وقراءات نموذجية لـ Grade 9',
}
export const SECTION_GRADE9_BADGE: Bi = { en: '8 Points', ar: '8 نقاط' }
export const SECTION_PRACTICE_TITLE: Bi = { en: 'Practice Questions', ar: 'أسئلة تطبيقية' }
export const SECTION_PRACTICE_BADGE: Bi = { en: '4 Questions', ar: '4 أسئلة' }

export const LABEL_KEY_SCENES: Bi = { en: 'Key Scenes', ar: 'المشاهد الأساسية' }
export const LABEL_ROLE: Bi = { en: 'Role:', ar: 'الدور:' }
export const LABEL_KEY_TRAITS: Bi = { en: 'Key traits:', ar: 'أبرز السمات:' }
export const LABEL_ARC: Bi = { en: 'Character arc:', ar: 'تطور الشخصية:' }

/* ──────────────── PLOT - ACT SUMMARIES ──────────────── */

export const ACT1_TITLE: Bi = { en: 'Act 1 - The Prophecy', ar: 'Act 1 - النبوءة' }
export const ACT1_P1: Bi = {
  en: 'The play opens amid thunder and lightning with three witches planning to meet Macbeth after a battle ("When the hurlyburly\'s done, / When the battle\'s lost and won"). Their chant "Fair is foul, and foul is fair" establishes the theme of moral inversion that pervades the entire play. Meanwhile, a wounded Captain reports to King Duncan that Macbeth has fought with extraordinary bravery against the rebels and the Norwegian invaders, earning the titles "brave Macbeth" and "Bellona\'s bridegroom." Duncan orders the execution of the traitorous Thane of Cawdor and awards Cawdor\'s title to Macbeth.',
  ar: 'المسرحية تنفتح وسط رعد وبرق مع ثلاث ساحرات يدبّرن لقاء Macbeth بعد المعركة ("When the hurlyburly\'s done, / When the battle\'s lost and won"). ترتيلتهنّ "Fair is foul, and foul is fair" تأسّس ثيمة الانقلاب الأخلاقي اللي يخترق المسرحية كلها. بنفس الوقت، نقيب جريح يبلّغ King Duncan إنّ Macbeth حارب بشجاعة وايد عجيبة ضد المتمرّدين والغزاة النرويجيين، فحصّل ألقاب "brave Macbeth" و"Bellona\'s bridegroom". Duncan يأمر بإعدام Thane of Cawdor الخائن ويمنح لقبه لـ Macbeth.',
}
export const ACT1_P2: Bi = {
  en: 'On a "blasted heath," Macbeth and Banquo encounter the Weird Sisters, who prophesy that Macbeth will become Thane of Cawdor and then King, while Banquo will be "lesser than Macbeth, and greater" and father to a line of kings. Almost immediately, Ross arrives to confirm Macbeth has indeed been made Thane of Cawdor. This partial fulfilment ignites Macbeth\'s ambition; in an aside, he imagines the murder ("whose horrid image doth unfix my hair") but also considers that "chance may crown me / Without my stir." Duncan names his eldest son Malcolm as Prince of Cumberland (heir), prompting Macbeth\'s aside: "Stars, hide your fires; / Let not light see my black and deep desires."',
  ar: 'على "blasted heath"، يلتقي Macbeth وBanquo بالأخوات الغريبات اللي يتنبّأن إنّ Macbeth بيصير Thane of Cawdor ثم Kingً، بينما Banquo بيكون "lesser than Macbeth, and greater" وأب لسلالة ملوك. الحين بعدها مباشرة يجي Ross يأكّد إنّ Macbeth صار فعلاً Thane of Cawdor. هذا التحقق الجزئي يولّع طموح Macbeth؛ في مونولوج جانبي يتصوّر القتل ("whose horrid image doth unfix my hair") لكنه يفكّر بعد إنّ "chance may crown me / Without my stir". Duncan يعيّن ابنه الأكبر Malcolm وريثاً (Prince of Cumberland)، فيقول Macbeth بصوت جانبي: "Stars, hide your fires; / Let not light see my black and deep desires".',
}
export const ACT1_P3: Bi = {
  en: 'Macbeth writes to Lady Macbeth, who reads the letter and immediately resolves that Duncan must die. In her "unsex me here" soliloquy, she invokes evil spirits to strip her of feminine compassion. When Duncan arrives at their castle as an honoured guest, Lady Macbeth counsels Macbeth to "look like the innocent flower, / But be the serpent under\'t." In his "If it were done" soliloquy (1.7), Macbeth lists every reason not to kill Duncan but acknowledges he has only "vaulting ambition" to drive him. He decides not to proceed - but Lady Macbeth attacks his manhood and outlines a practical plan (drug the guards, use their daggers), persuading him to commit the murder.',
  ar: 'Macbeth يكتب لـ Lady Macbeth، وهي تقرأ الرسالة وتحسم على طول إنّ Duncan لازم يموت. في مونولوجها "unsex me here" تستدعي أرواحاً شريرة عشان تنزع منها الحنان الأنثوي. لمّا يجي Duncan لقصرهم ضيفاً مكرّماً، توصي Lady Macbeth زوجها إنه "look like the innocent flower, / But be the serpent under\'t". في مونولوج Macbeth الشهير "If it were done" (1.7) يعدّد كل أسباب اللي تمنعه من قتل Duncan لكنه يعترف إنّ ما عنده غير "vaulting ambition" تدفعه. يقرّر إنه ما يمشي بالخطة - لكن Lady Macbeth تطعن في رجولته وتعرض خطة عمليّة (تخدير الحرّاس واستخدام خناجرهم)، فتقنعه ينفّذ الجريمة.',
}
export const ACT1_KEYSCENES: Bi[] = [
  {
    en: '1.1 - The witches\' opening scene: "Fair is foul, and foul is fair"',
    ar: '1.1 - مشهد افتتاح الساحرات: "Fair is foul, and foul is fair"',
  },
  {
    en: "1.2 - The Captain's report: Macbeth's battlefield heroism established",
    ar: '1.2 - تقرير النقيب: تتأسّس بطولة Macbeth في الميدان',
  },
  {
    en: "1.3 - The witches' three prophecies on the heath; Macbeth's first aside about murder",
    ar: '1.3 - نبوءات الساحرات الثلاث على الـ heath؛ أول مونولوج جانبي لـ Macbeth عن القتل',
  },
  {
    en: 'Duncan names Malcolm heir; Macbeth\'s "Stars, hide your fires" aside',
    ar: '1.4 - Duncan يسمّي Malcolm وريثاً؛ مونولوج Macbeth الجانبي "Stars, hide your fires"',
  },
  {
    en: 'Lady Macbeth reads the letter; "unsex me here" soliloquy',
    ar: '1.5 - Lady Macbeth تقرأ الرسالة؛ مونولوج "unsex me here"',
  },
  {
    en: 'Macbeth\'s "If it were done" soliloquy; Lady Macbeth\'s persuasion',
    ar: '1.7 - مونولوج Macbeth "If it were done"؛ إقناع Lady Macbeth له',
  },
]

export const ACT2_TITLE: Bi = { en: 'Act 2 - The Murder of Duncan', ar: 'Act 2 - مقتل Duncan' }
export const ACT2_P1: Bi = {
  en: 'Banquo, unable to sleep, tells Macbeth he has dreamed of the Weird Sisters. Macbeth lies, claiming he does not think of them. Left alone, Macbeth hallucinates a dagger leading him towards Duncan\'s chamber ("Is this a dagger which I see before me, / The handle toward my hand?"). He murders Duncan offstage while his guards sleep, drugged by Lady Macbeth. Immediately wracked with guilt, he returns carrying the bloody daggers. He is horrified: he could not say "Amen" when the guards mumbled a prayer, and he believes he heard a voice cry "Sleep no more! / Macbeth does murder sleep." He declares that "all great Neptune\'s ocean" cannot wash the blood from his hands.',
  ar: 'Banquo ما يقدر ينام، يقول لـ Macbeth إنه حلم بالأخوات الغريبات. Macbeth يكذب ويدّعي إنه ما يفكّر فيهنّ. لمّا يبقى وحده، Macbeth يهلوس خنجراً يرشده لغرفة Duncan ("Is this a dagger which I see before me, / The handle toward my hand?"). يقتل Duncan خارج المنظر بينما الحرّاس نائمون من المخدّر اللي حطّته Lady Macbeth. الذنب يضربه على طول، يرجع وهو شايل الخناجر الملطّخة بالدم. مرعوب: ما قدر يقول "Amen" لمّا الحرّاس تمتموا دعاء، ويعتقد إنه سمع صوتاً يصرخ "Sleep no more! / Macbeth does murder sleep". يعلن إنّ "all great Neptune\'s ocean" ما يقدر يغسل الدم عن يديه.',
}
export const ACT2_P2: Bi = {
  en: 'Lady Macbeth, composed and practical, takes the daggers back and smears the sleeping guards with Duncan\'s blood to frame them, dismissing Macbeth\'s terror with "A little water clears us of this deed." The porter provides brief comic relief, stumbling drunkenly to answer the gate and joking about being the porter of hell-gate - a scene loaded with dramatic irony, as the castle has indeed become a kind of hell. Macduff and Lennox arrive. Macduff discovers Duncan\'s body and raises the alarm ("O horror, horror, horror! / Tongue nor heart cannot conceive nor name thee!"). Macbeth kills the guards, claiming it was done in fury at their apparent crime. Malcolm and Donalbain, fearing for their own lives, flee to England and Ireland respectively, inadvertently casting suspicion on themselves. Macbeth travels to Scone to be crowned King of Scotland. An Old Man and Ross discuss the unnatural events that accompanied the murder: an owl killed a falcon, Duncan\'s horses turned wild and ate each other, and darkness has blotted out the day.',
  ar: 'Lady Macbeth، متماسكة وعمليّة، ترجع الخناجر وتلطّخ الحرّاس النائمين بدم Duncan عشان توقع التهمة عليهم، وترفض رعب Macbeth بقولها "A little water clears us of this deed". البوّاب يجيب لحظة كوميديا مؤقتة، يترنّح سكران ليفتح الباب ويمزح إنه بوّاب باب الجحيم - مشهد مشحون بالـ dramatic irony، لأنّ القصر فعلاً صار نوعاً من جحيم. يصلون Macduff وLennox. يكتشف Macduff جثة Duncan ويرفع الصياح ("O horror, horror, horror! / Tongue nor heart cannot conceive nor name thee!"). Macbeth يقتل الحرّاس، مدّعياً إنه عمل ذلك من شدة الغضب على جريمتهم المزعومة. Malcolm وDonalbain، خوفاً على أرواحهم، يهربون لإنجلترا وإيرلندا، وبهالهروب يجلبون الشكّ على نفسهم بدون قصد. Macbeth يسافر لـ Scone عشان يتوّج King of Scotland. رجل مسنّ وRoss يناقشون الأحداث غير الطبيعية اللي رافقت الجريمة: بومة قتلت صقراً، خيول Duncan هاجت وأكلت بعضها، والظلام طمس النهار.',
}
export const ACT2_KEYSCENES: Bi[] = [
  {
    en: '2.1 - The dagger soliloquy: "Is this a dagger which I see before me?"',
    ar: '2.1 - مونولوج الخنجر: "Is this a dagger which I see before me?"',
  },
  {
    en: '2.2 - The murder; "Will all great Neptune\'s ocean wash this blood?"; Lady Macbeth\'s composure',
    ar: '2.2 - الجريمة؛ "Will all great Neptune\'s ocean wash this blood?"؛ تماسك Lady Macbeth',
  },
  {
    en: "2.3 - The porter scene (dramatic irony); discovery of Duncan's body by Macduff",
    ar: '2.3 - مشهد البوّاب (dramatic irony)؛ اكتشاف جثة Duncan على يد Macduff',
  },
  {
    en: '2.4 - Unnatural events in nature - pathetic fallacy reflecting the cosmic consequences of regicide',
    ar: '2.4 - أحداث غير طبيعية في الطبيعة - pathetic fallacy يعكس النتائج الكونية لقتل الملك',
  },
]

export const ACT3_TITLE: Bi = {
  en: "Act 3 - Banquo's Murder and the Banquet",
  ar: 'Act 3 - مقتل Banquo ومشهد المأدبة',
}
export const ACT3_P1: Bi = {
  en: 'Now king, Macbeth is consumed by insecurity. In a soliloquy, he reveals that "To be thus is nothing, / But to be safely thus" - being king is worthless without security. He fears the witches\' prophecy that Banquo\'s descendants will be kings, meaning he has "filed [defiled] my mind" and "mine eternal jewel / Given to the common enemy of man" (sold his soul) for Banquo\'s children\'s benefit. Crucially, he no longer consults Lady Macbeth but hires murderers independently, manipulating them by questioning their manhood - mirroring Lady Macbeth\'s earlier tactic.',
  ar: 'الحين وهو King، يأكل القلق Macbeth. في مونولوج يكشف إنّ "To be thus is nothing, / But to be safely thus" - الملك بدون أمان ما يسوى شي. يخاف من نبوءة الساحرات إنّ نسل Banquo بيصيرون ملوكاً، يعني هو "filed [defiled] my mind" و"mine eternal jewel / Given to the common enemy of man" (باع روحه) عشان أبناء Banquo. الأهم، إنه ما عاد يستشير Lady Macbeth، بل يستأجر قتلة بنفسه، ويتلاعب بهم عبر الطعن في رجولتهم - يكرّر تكتيك Lady Macbeth السابق.',
}
export const ACT3_P2: Bi = {
  en: 'Lady Macbeth, excluded from his plans, reveals her own growing despair: "Nought\'s had, all\'s spent, / Where our desire is got without content." Macbeth tells her his mind is "full of scorpions" but hints at a coming deed without sharing details ("Be innocent of the knowledge, dearest chuck"). The murderers kill Banquo but Fleance escapes - a critical failure, as the prophecy about Banquo\'s royal line remains unfulfilled. At a grand state banquet, Macbeth sees Banquo\'s ghost sitting in his chair. He reacts with visible terror, nearly revealing his guilt to the assembled lords. Lady Macbeth desperately tries to control the situation, telling the thanes it is a familiar affliction and privately accusing Macbeth of cowardice. The ghost returns a second time before vanishing. Macbeth resolves to visit the witches again. Lennox and a lord discuss the state of Scotland, revealing that Macduff has gone to the English court to seek Malcolm\'s help in raising an army against Macbeth\'s tyranny.',
  ar: 'Lady Macbeth، المستبعدة من خططه، تكشف يأسها المتنامي: "Nought\'s had, all\'s spent, / Where our desire is got without content". Macbeth يقول لها إنّ عقله "full of scorpions" لكنه يلمّح لجريمة قادمة بدون ما يكشف التفاصيل ("Be innocent of the knowledge, dearest chuck"). القتلة يقتلون Banquo لكن Fleance يهرب - فشل حرج، لأنّ نبوءة سلالة Banquo الملكية تبقى من غير تحقّق. في مأدبة دولة فخمة، Macbeth يشوف شبح Banquo قاعد على كرسيّه. يردّ بفزع باين، يكاد يفضح ذنبه أمام الـ lords المجتمعين. Lady Macbeth بيأس تحاول تتحكّم بالموقف، تقول للـ thanes إنها وعكة معتادة وتتّهم Macbeth بالجبن في الخفاء. الشبح يرجع مرة ثانية قبل ما يختفي. Macbeth يعزم على زيارة الساحرات مرة ثانية. Lennox ولورد يناقشون حال Scotland، فيتكشّف إنّ Macduff راح للبلاط الإنجليزي يطلب مساعدة Malcolm في جمع جيش ضد طغيان Macbeth.',
}
export const ACT3_KEYSCENES: Bi[] = [
  {
    en: "3.1 - Macbeth's soliloquy on Banquo; hiring the murderers",
    ar: '3.1 - مونولوج Macbeth حول Banquo؛ استئجار القتلة',
  },
  {
    en: '3.2 - "O, full of scorpions is my mind, dear wife!" - growing estrangement',
    ar: '3.2 - "O, full of scorpions is my mind, dear wife!" - التباعد المتنامي',
  },
  {
    en: "3.3 - Banquo's murder; Fleance's escape",
    ar: '3.3 - مقتل Banquo؛ هروب Fleance',
  },
  {
    en: '3.4 - The banquet scene - Banquo\'s ghost; "I am in blood / Stepp\'d in so far"',
    ar: '3.4 - مشهد المأدبة - شبح Banquo؛ "I am in blood / Stepp\'d in so far"',
  },
  {
    en: "3.6 - Lennox's ironic commentary on Macbeth's tyranny; news of Macduff's flight to England",
    ar: '3.6 - تعليق Lennox الساخر على طغيان Macbeth؛ خبر هروب Macduff لإنجلترا',
  },
]

export const ACT4_TITLE: Bi = {
  en: "Act 4 - The Apparitions and Macduff's Family",
  ar: 'Act 4 - الأشباح وعائلة Macduff',
}
export const ACT4_P1: Bi = {
  en: 'Macbeth visits the witches and demands answers. They conjure three apparitions: an armed head warns "Beware Macduff"; a bloody child proclaims "none of woman born / Shall harm Macbeth"; and a crowned child holding a tree declares he will not be vanquished "until / Great Birnam Wood to high Dunsinane Hill / Shall come against him." Macbeth feels invincible, dismissing the seemingly impossible conditions. But when he asks about Banquo\'s line, the witches show a procession of eight kings followed by Banquo\'s ghost - confirming that Banquo\'s descendants will rule. Significantly, the second witch remarks "By the pricking of my thumbs, / Something wicked this way comes" when Macbeth arrives - even the witches now consider him wicked.',
  ar: 'Macbeth يزور الساحرات ويطالب بإجابات. يستحضرن ثلاثة أشباح: رأس مسلّح يحذّر "Beware Macduff"؛ طفل ملطّخ بالدم يعلن "none of woman born / Shall harm Macbeth"؛ وطفل مكلّل ممسك بشجرة يقرّر إنه ما يُهزم "until / Great Birnam Wood to high Dunsinane Hill / Shall come against him". يحسّ Macbeth إنه ما يُغلب، ويستهين بالشروط اللي تبدو مستحيلة. لكن لمّا يسأل عن سلالة Banquo، الساحرات يرين موكب ثمانية ملوك يتبعهم شبح Banquo - يأكّد إنّ نسل Banquo بيحكم. ومن المهم إنّ الساحرة الثانية تقول "By the pricking of my thumbs, / Something wicked this way comes" لمّا يجي Macbeth - حتى الساحرات الحين يعتبرنه شريراً.',
}
export const ACT4_P2: Bi = {
  en: "When Macbeth learns Macduff has fled to England, he orders the murder of Lady Macduff and her children - an act of pure, purposeless cruelty with no strategic value. Scene 4.2 shows Lady Macduff's distress at her husband's departure, her witty and tender conversation with her son, and then the brutal murder of both. This is the play's most shocking moment and marks Macbeth's complete moral descent from reluctant murderer to conscienceless tyrant.",
  ar: 'لمّا يعلم Macbeth إنّ Macduff هرب لإنجلترا، يأمر بقتل Lady Macduff وأطفالها - فعل وحشيّة خالصة بلا غاية، ما له قيمة استراتيجية. مشهد 4.2 يبيّن قلق Lady Macduff لرحيل زوجها، وحوارها الذكي الحنون مع ابنها، ثم القتل الوحشي للاثنين. هذي اللحظة الأكثر صدمة في المسرحية وتدلّ على هبوط Macbeth الأخلاقي الكامل من قاتل متردّد إلى طاغية بلا ضمير.',
}
export const ACT4_P3: Bi = {
  en: 'In England (4.3), Malcolm tests Macduff\'s loyalty by pretending to be unfit to rule, claiming he is lustful, greedy, and possesses none of the "king-becoming graces." When Macduff despairs for Scotland ("Bleed, bleed, poor country!"), Malcolm reveals it was a test and confirms his virtue. Ross arrives with the devastating news of the Macduff family\'s slaughter. Macduff\'s raw grief ("All my pretty ones? / Did you say all?") is one of the play\'s most emotionally powerful moments. When Malcolm tells him to "dispute it like a man," Macduff replies, "I shall do so; / But I must also feel it as a man" - redefining masculinity as encompassing emotional depth. His grief is channelled into resolve: "Front to front / Bring thou this fiend of Scotland and myself."',
  ar: 'في إنجلترا (4.3)، Malcolm يختبر ولاء Macduff بإنه يدّعي إنه ما يصلح للحكم، ويقول إنه شهواني وطمّاع وما عنده شي من "king-becoming graces". لمّا ييأس Macduff على Scotland ("Bleed, bleed, poor country!")، يكشف Malcolm إنه كان اختبار ويأكّد فضيلته. يوصل Ross بالخبر المدمّر عن مذبحة عائلة Macduff. حزن Macduff الخام ("All my pretty ones? / Did you say all?") من أعمق لحظات المسرحية عاطفياً. لمّا يقول له Malcolm "dispute it like a man"، يردّ Macduff: "I shall do so; / But I must also feel it as a man" - يعيد تعريف الرجولة بإنها تشمل العمق العاطفي. حزنه يتحوّل لعزم: "Front to front / Bring thou this fiend of Scotland and myself".',
}
export const ACT4_KEYSCENES: Bi[] = [
  {
    en: '4.1 - The three apparitions; the show of eight kings; "Something wicked this way comes"',
    ar: '4.1 - الأشباح الثلاثة؛ موكب الملوك الثمانية؛ "Something wicked this way comes"',
  },
  {
    en: "4.2 - The murder of Lady Macduff and her son - Macbeth's most monstrous act",
    ar: '4.2 - قتل Lady Macduff وابنها - أبشع فعل لـ Macbeth',
  },
  {
    en: '4.3 - Malcolm\'s testing of Macduff; Macduff\'s grief: "He has no children"; "I must also feel it as a man"',
    ar: '4.3 - اختبار Malcolm لـ Macduff؛ حزن Macduff: "He has no children"؛ "I must also feel it as a man"',
  },
]

export const ACT5_TITLE: Bi = { en: 'Act 5 - Downfall and Death', ar: 'Act 5 - السقوط والموت' }
export const ACT5_P1: Bi = {
  en: 'Lady Macbeth, consumed by guilt, sleepwalks through the castle, watched by a gentlewoman and a doctor. She obsessively tries to wash imaginary blood from her hands: "Out, damned spot! out, I say!" She speaks in fragmented prose (a stark shift from her earlier controlled verse), reliving the murders: "Yet who would have thought the old man to have had so much blood in him?" and "All the perfumes of Arabia will not sweeten this little hand." The doctor declares "More needs she the divine than the physician" - her sickness is spiritual, not physical.',
  ar: 'Lady Macbeth، يأكلها الذنب، تمشي في القصر وهي نائمة، تتراقبها وصيفة وطبيب. تحاول هوسياً تغسل دماً وهمياً عن يديها: "Out, damned spot! out, I say!". تتكلّم بنثر مفكّك (تحوّل صادم عن الشعر المنضبط اللي كانت تقوله قبل)، تعيش الجرائم من جديد: "Yet who would have thought the old man to have had so much blood in him?" و"All the perfumes of Arabia will not sweeten this little hand". الطبيب يقول "More needs she the divine than the physician" - مرضها روحي، مو جسدي.',
}
export const ACT5_P2: Bi = {
  en: "Meanwhile, the Scottish lords Angus, Lennox, Menteith, and Caithness join Malcolm's forces. They describe Macbeth's rule as diseased: \"He cannot buckle his distemper'd cause / Within the belt of rule.\" Macbeth, fortified at Dunsinane, oscillates between defiance and despair. Malcolm orders his soldiers to cut branches from Birnam Wood as camouflage, unwittingly fulfilling the third apparition's prophecy.",
  ar: 'بنفس الوقت، اللوردات الاسكتلنديون Angus وLennox وMenteith وCaithness ينضمّون لجيش Malcolm. يصفون حكم Macbeth بإنه مرض: "He cannot buckle his distemper\'d cause / Within the belt of rule". Macbeth متحصّن في Dunsinane، يتأرجح بين التحدي واليأس. Malcolm يأمر جنوده يقطعون أغصاناً من Birnam Wood للتمويه، فيحقّقون نبوءة الشبح الثالث بلا قصد.',
}
export const ACT5_P3: Bi = {
  en: 'Macbeth receives news of Lady Macbeth\'s death (almost certainly suicide) and delivers his most famous nihilistic soliloquy: "Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day, / To the last syllable of recorded time." Life is now "a tale / Told by an idiot, full of sound and fury, / Signifying nothing." When a messenger reports that Birnam Wood appears to be moving, Macbeth\'s confidence cracks. In the final battle, Macbeth kills Young Siward but encounters Macduff. He boasts that no man born of woman can harm him, but Macduff reveals he was "from his mother\'s womb / Untimely ripp\'d" - born by Caesarean section, not naturally "of woman born." Macbeth, realising the equivocating prophecies have betrayed him, briefly considers surrender but chooses to fight and die. Macduff kills him and presents his head to Malcolm, who is hailed as the new King of Scotland. Malcolm\'s final speech restores order: he promotes the thanes to earls and invites all to his coronation at Scone.',
  ar: 'يوصل Macbeth خبر موت Lady Macbeth (شبه أكيد انتحار) ويلقي مونولوجه العدمي الأشهر: "Tomorrow, and tomorrow, and tomorrow, / Creeps in this petty pace from day to day, / To the last syllable of recorded time". الحياة الحين "a tale / Told by an idiot, full of sound and fury, / Signifying nothing". لمّا يبلّغ رسول إنّ Birnam Wood يبان إنها تتحرّك، ثقة Macbeth تنكسر. في المعركة الأخيرة، Macbeth يقتل Young Siward لكن يلتقي Macduff. يتفاخر إنّ ما من رجل مولود من امرأة يقدر يضرّه، لكن Macduff يكشف إنه "from his mother\'s womb / Untimely ripp\'d" - مولود بقيصرية، مو طبيعياً "of woman born". Macbeth، يدرك إنّ النبوءات المراوغة خانته، يفكّر لحظة بالاستسلام لكنه يختار يقاتل ويموت. Macduff يقتله ويقدّم رأسه لـ Malcolm، اللي يُهتف به King of Scotland الجديد. خطاب Malcolm الختامي يعيد النظام: يرفع الـ thanes لرتبة earls ويدعو الكل لتتويجه في Scone.',
}
export const ACT5_KEYSCENES: Bi[] = [
  {
    en: '5.1 - Lady Macbeth\'s sleepwalking scene: "Out, damned spot!"',
    ar: '5.1 - مشهد Lady Macbeth وهي تمشي نائمة: "Out, damned spot!"',
  },
  {
    en: '5.3 - Macbeth\'s defiance; "I have liv\'d long enough"',
    ar: '5.3 - تحدّي Macbeth؛ "I have liv\'d long enough"',
  },
  {
    en: '5.5 - Lady Macbeth\'s death; "Tomorrow, and tomorrow, and tomorrow" soliloquy; Birnam Wood moves',
    ar: '5.5 - موت Lady Macbeth؛ مونولوج "Tomorrow, and tomorrow, and tomorrow"؛ Birnam Wood تتحرّك',
  },
  { en: '5.7 - Macbeth kills Young Siward', ar: '5.7 - Macbeth يقتل Young Siward' },
  {
    en: "5.8 - Macduff reveals his birth; Macbeth's death; Malcolm crowned king",
    ar: '5.8 - Macduff يكشف قصة ولادته؛ موت Macbeth؛ Malcolm يُتوّج Kingً',
  },
]

/* ──────────────── CHARACTERS ──────────────── */

export type CharacterBlock = {
  title: Bi
  tags: Bi[]
  role: Bi
  traits: Bi
  arc: Bi
}

export const CHAR_MACBETH: CharacterBlock = {
  title: { en: 'Macbeth', ar: 'Macbeth' },
  tags: [
    { en: 'Tragic Hero', ar: 'بطل مأساوي' },
    { en: 'Protagonist', ar: 'بطل المسرحية' },
    { en: 'Thane → King → Tyrant', ar: 'Thane ← King ← طاغية' },
  ],
  role: {
    en: "Thane of Glamis, then Thane of Cawdor, then King of Scotland. The play's tragic hero whose downfall is driven by ambition and moral weakness.",
    ar: 'Thane of Glamis، ثم Thane of Cawdor، ثم King of Scotland. بطل المسرحية المأساوي اللي سقوطه يدفعه الطموح والضعف الأخلاقي.',
  },
  traits: {
    en: 'Brave, ambitious, imaginative, guilt-ridden, impressionable, increasingly ruthless, ultimately nihilistic.',
    ar: 'شجاع، طموح، خيالي، يحمل ذنباً، سريع التأثّر، يزداد قسوة، وفي الآخر عدمي.',
  },
  arc: {
    en: 'Macbeth begins as a valiant, honoured warrior - "brave Macbeth," "Bellona\'s bridegroom" - who is rewarded by a grateful king. The witches\' prophecy awakens a latent ambition that Lady Macbeth fans into action. He murders Duncan reluctantly, tormented by guilt (hallucinated dagger, inability to say "Amen," voices crying "Sleep no more"). As king, he grows paranoid and orders Banquo\'s murder without consulting Lady Macbeth, marking his independence in evil. The ghost at the banquet shows his guilt is still active. By Act 4, he orders the pointless massacre of the Macduff family, demonstrating moral collapse. In Act 5, having lost his wife, his allies, and his will to live, he delivers the nihilistic "Tomorrow" soliloquy - ambition has led to utter meaninglessness. Yet he retains a tragic, residual courage, choosing to fight rather than surrender. He is not a simple villain: Shakespeare ensures we see his inner torment at every stage, making him a figure of both horror and pity.',
    ar: 'Macbeth يبدأ محارباً شجاعاً مكرَّماً - "brave Macbeth"، "Bellona\'s bridegroom" - يكافئه ملك ممتنّ. نبوءة الساحرات تصحّي طموحاً كامناً تنفخ فيه Lady Macbeth حتى يشتعل فعلاً. يقتل Duncan مكرهاً، يعذّبه الذنب (خنجر هلوسي، عجز عن قول "Amen"، أصوات تصرخ "Sleep no more"). لمّا يصير King يكبر فيه الشك ويأمر بقتل Banquo بدون استشارة Lady Macbeth، علامة على استقلاله في الشر. شبح المأدبة يبيّن إنّ ذنبه لا يزال شغّال. في Act 4، يأمر بمذبحة بلا معنى لعائلة Macduff، دليل على الانهيار الأخلاقي. في Act 5، بعد ما يخسر زوجته وحلفاءه وإرادة الحياة، يقول مونولوج "Tomorrow" العدمي - الطموح وصل به للا معنى مطلق. ومع هذا تبقى عنده شجاعة مأساوية متبقية، يختار يقاتل لا أن يستسلم. ما هو شرير بسيط: Shakespeare يحرص نشوف عذابه الداخلي في كل مرحلة، فيخلّيه شخصية رعب ورحمة بنفس الوقت.',
  },
}

export const CHAR_LADYMACBETH: CharacterBlock = {
  title: { en: 'Lady Macbeth', ar: 'Lady Macbeth' },
  tags: [
    { en: 'Tragic Figure', ar: 'شخصية مأساوية' },
    { en: 'Catalyst', ar: 'محرّكة الأحداث' },
    { en: 'Powerful → Broken', ar: 'قوية ← منكسرة' },
  ],
  role: {
    en: "Macbeth's wife and the driving force behind Duncan's murder. One of Shakespeare's most complex female characters.",
    ar: 'زوجة Macbeth والقوة الدافعة وراء قتل Duncan. وحدة من أعقد الشخصيات النسائية عند Shakespeare.',
  },
  traits: {
    en: 'Ambitious, manipulative, determined, intelligent, ultimately vulnerable, guilt-ridden.',
    ar: 'طموحة، تتلاعب، حازمة، ذكيّة، وفي النهاية هشّة وتحمل ذنباً.',
  },
  arc: {
    en: 'When we first meet her, Lady Macbeth is ambitious, ruthless, and apparently stronger-willed than her husband. She calls on evil spirits to "unsex" her, rejecting femininity and compassion to pursue power. She manipulates Macbeth by questioning his manhood, plans Duncan\'s murder in practical detail, and remains calm when Macbeth panics afterwards ("A little water clears us of this deed"). However, her control cracks: she is notably absent from the planning of Banquo\'s murder (Macbeth acts alone, telling her "Be innocent of the knowledge"), and she admits "Nought\'s had, all\'s spent, / Where our desire is got without content." By Act 5, she has been destroyed by guilt. Her sleepwalking scene - obsessively trying to wash imagined blood from her hands, speaking in fragmented prose rather than controlled verse - mirrors and devastatingly inverts her earlier dismissal of guilt. She almost certainly dies by suicide. The Macbeths\' guilt trajectories are inverse: he begins guilt-ridden and becomes hardened; she begins controlled and is ultimately overwhelmed.',
    ar: 'لمّا نشوفها أول مرة، Lady Macbeth طموحة قاسية، يبان إنّ إرادتها أقوى من إرادة زوجها. تستدعي أرواحاً شريرة عشان "unsex" فتنزع عنها الأنوثة والشفقة بحثاً عن السلطة. تتلاعب بـ Macbeth عبر الطعن في رجولته، تخطّط لقتل Duncan بتفصيل عملي، وتبقى هادئة لمّا يفزع Macbeth بعد الجريمة ("A little water clears us of this deed"). لكن سيطرتها تنهار: ما تظهر في تخطيط قتل Banquo (Macbeth يتصرّف وحده ويقول لها "Be innocent of the knowledge")، وتعترف "Nought\'s had, all\'s spent, / Where our desire is got without content". وبحلول Act 5، الذنب يحطّمها. مشهد المشي وهي نائمة - تحاول هوسياً تغسل دماً وهمياً، تتكلّم بنثر مفكّك بدل الشعر المنضبط - يعكس بقسوة استخفافها السابق بالذنب ويقلبه. شبه أكيد إنها تنتحر. مسارا ذنب آل Macbeth معكوسان: هو يبدأ ممتلئاً ذنباً ويتقسّى، وهي تبدأ مسيطرة فيغمرها الذنب في النهاية.',
  },
}

export const CHAR_BANQUO: CharacterBlock = {
  title: { en: 'Banquo', ar: 'Banquo' },
  tags: [
    { en: 'Moral Foil', ar: 'نقيض أخلاقي' },
    { en: 'Victim', ar: 'ضحية' },
    { en: 'Loyal → Murdered', ar: 'مخلص ← مقتول' },
  ],
  role: {
    en: "Macbeth's fellow general and friend. Father of Fleance. Ancestor of King James I's Stuart dynasty (a deliberate compliment to the king).",
    ar: 'القائد الزميل لـ Macbeth وصديقه. أبو Fleance. جدّ سلالة Stuart اللي ينتمي لها King James I (مجاملة مقصودة للملك).',
  },
  traits: {
    en: 'Brave, wise, morally cautious, loyal, perceptive - but arguably complicit through silence.',
    ar: 'شجاع، حكيم، حذر أخلاقياً، مخلص، فطن - بس فيه احتمال إنه متواطئ بالصمت.',
  },
  arc: {
    en: 'Banquo acts as a moral foil to Macbeth. He hears the same prophecies but does not act on them. He warns Macbeth that "instruments of darkness tell us truths" to betray us - showing moral wisdom Macbeth ignores. However, Banquo is not entirely innocent: he suspects Macbeth of foul play ("Thou play\'dst most foully for\'t") but does not act, perhaps because the prophecy also benefits his own descendants. His murder in Act 3 removes the last moral check on Macbeth. As a ghost at the banquet, he represents Macbeth\'s guilt made visible and the impossibility of escaping consequences. Historically, Shakespeare presents Banquo as virtuous to flatter James I, whose claim to the English throne traced through Banquo\'s line.',
    ar: 'Banquo يشتغل كنقيض أخلاقي لـ Macbeth. يسمع نفس النبوءات لكنه ما يتصرّف بها. يحذّر Macbeth إنّ "instruments of darkness tell us truths" عشان يخوننا - يبيّن حكمة أخلاقية يتجاهلها Macbeth. ومع هذا، Banquo مو بريء بالكامل: يشكّ في Macbeth بالغدر ("Thou play\'dst most foully for\'t") لكنه ما يتحرّك، يمكن لأنّ النبوءة تنفع ذريّته بعد. مقتله في Act 3 يلغي آخر رادع أخلاقي على Macbeth. كشبح في المأدبة، يمثّل ذنب Macbeth وقد صار مرئياً واستحالة الهروب من العواقب. تاريخياً، Shakespeare يقدّم Banquo فاضلاً مجاملةً لـ James I اللي يعود نسبه للعرش الإنجليزي عبر سلالة Banquo.',
  },
}

export const CHAR_MACDUFF: CharacterBlock = {
  title: { en: 'Macduff', ar: 'Macduff' },
  tags: [
    { en: 'Hero', ar: 'بطل' },
    { en: 'Agent of Justice', ar: 'أداة العدالة' },
    { en: 'Suspicious → Avenging', ar: 'مرتاب ← منتقم' },
  ],
  role: {
    en: "Thane of Fife. Discovers Duncan's body. Ultimately kills Macbeth and restores the legitimate monarchy.",
    ar: 'Thane of Fife. يكتشف جثة Duncan. وفي النهاية يقتل Macbeth ويُرجِع الحكم الشرعي.',
  },
  traits: {
    en: 'Principled, courageous, patriotic, emotionally honest, grief-stricken, morally upright.',
    ar: 'مبدئي، شجاع، وطني، صادق عاطفياً، يحطّمه الحزن، مستقيم أخلاقياً.',
  },
  arc: {
    en: 'Macduff is the play\'s agent of justice. He is the first to discover Duncan\'s murder and is immediately suspicious of Macbeth. Unlike the other thanes, he refuses to attend Macbeth\'s coronation at Scone and later flees to England to raise an army. His family pays the terrible price for his principled stance. When he learns of their murder, his raw grief ("All my pretty ones? / Did you say all?") is devastating. His response to Malcolm\'s instruction to "dispute it like a man" - "I shall do so; / But I must also feel it as a man" - offers the play\'s most powerful redefinition of masculinity. His Caesarean birth fulfils the apparition\'s prophecy, allowing him to defeat Macbeth. He represents righteous vengeance, emotional honesty, and the restoration of legitimate order.',
    ar: 'Macduff هو أداة العدالة في المسرحية. أول من يكتشف مقتل Duncan ويرتاب على طول في Macbeth. على عكس بقية الـ thanes، يرفض حضور تتويج Macbeth في Scone وبعدها يهرب لإنجلترا يجمع جيشاً. عائلته تدفع الثمن الفادح لموقفه المبدئي. لمّا يعلم بمقتلهم، حزنه الخام ("All my pretty ones? / Did you say all?") مدمّر. ردّه على تعليمات Malcolm "dispute it like a man" - "I shall do so; / But I must also feel it as a man" - يقدّم أقوى إعادة تعريف للرجولة في المسرحية. ولادته بالقيصرية تحقّق نبوءة الشبح وتسمح له بهزيمة Macbeth. يمثّل الانتقام العادل والصدق العاطفي وإعادة النظام الشرعي.',
  },
}

export const CHAR_DUNCAN: CharacterBlock = {
  title: { en: 'King Duncan', ar: 'King Duncan' },
  tags: [
    { en: 'Ideal King', ar: 'الملك المثالي' },
    { en: 'Victim', ar: 'ضحية' },
    { en: 'Trusting → Murdered', ar: 'مؤتمِن ← مقتول' },
  ],
  role: {
    en: "King of Scotland. His murder is the play's inciting crime, and his goodness makes the act more horrific.",
    ar: 'King of Scotland. مقتله الجريمة المحرِّكة للمسرحية، وطيبته تخلّي الفعل أبشع.',
  },
  traits: {
    en: 'Gracious, trusting, generous, dignified, naive, the embodiment of legitimate authority.',
    ar: 'كريم، يثق بالناس، سخيّ، وقور، ساذج، تجسيد للسلطة الشرعية.',
  },
  arc: {
    en: "Duncan is presented as the ideal king: gracious, trusting, generous, and loved by his subjects. He rewards loyalty, speaks gently, and praises Macbeth's castle as having a \"pleasant seat.\" His very goodness makes his murder more horrific - he is a guest in Macbeth's home, making the crime a violation of hospitality (a sacred bond in medieval Scotland) as well as regicide and a sin against God's anointed ruler. However, he is somewhat naive - he trusted the original Thane of Cawdor too, admitting \"There's no art to find the mind's construction in the face\" just as Macbeth, the new Cawdor, enters plotting his murder. He embodies the divine right of kings and legitimate authority; his death disrupts the Great Chain of Being and throws nature into chaos.",
    ar: 'Duncan يُقدَّم كالملك المثالي: كريم، يثق، سخيّ، يحبّه رعيّته. يكافئ الولاء، يتكلّم بلطف، يمدح قصر Macbeth بإنّ مقعده "pleasant". طيبته نفسها تخلّي قتله أبشع - هو ضيف في بيت Macbeth، فالجريمة انتهاك للضيافة (رابط مقدّس في Scotland القروسطية) فضلاً عن قتل الملك وخطيئة ضد مَن مسحه الله. لكنه ساذج شوي - كان يثق في Thane of Cawdor الأصلي بعد، يعترف "There\'s no art to find the mind\'s construction in the face" بالضبط بينما يدخل Macbeth، الـ Cawdor الجديد، وهو يدبّر قتله. يجسّد divine right of kings والسلطة الشرعية؛ موته يكسر الـ Great Chain of Being ويرمي الطبيعة في الفوضى.',
  },
}

export const CHAR_MALCOLM: CharacterBlock = {
  title: { en: 'Malcolm', ar: 'Malcolm' },
  tags: [
    { en: 'Legitimate Heir', ar: 'الوريث الشرعي' },
    { en: 'Restorer of Order', ar: 'مُعيد النظام' },
    { en: 'Fugitive → King', ar: 'لاجئ ← King' },
  ],
  role: {
    en: "Duncan's eldest son and rightful heir. Flees to England, then returns to defeat Macbeth and restore legitimate rule.",
    ar: 'ابن Duncan الأكبر والوريث الشرعي. يهرب لإنجلترا ثم يرجع ليهزم Macbeth ويستعيد الحكم الشرعي.',
  },
  traits: {
    en: 'Cautious, shrewd, politically astute, virtuous, patient - the opposite of his trusting father.',
    ar: 'حذر، فطن، ذكي سياسياً، فاضل، صبور - عكس أبوه المؤتمِن.',
  },
  arc: {
    en: "Malcolm flees to England after his father's murder - a wise survival strategy, though it makes him look guilty. In Act 4, he tests Macduff's loyalty by falsely claiming to be worse than Macbeth (lustful, greedy, without any \"king-becoming graces\"). When Macduff reacts with genuine despair, Malcolm reveals the truth. This scene shows Malcolm as shrewd and cautious - the opposite of his trusting father. He has learned from Duncan's mistakes. He represents legitimate kingship and order. His final speech, promoting the thanes to earls (a reference to James I's historical Anglicisation of Scotland) and inviting all to his coronation, signals Scotland's restoration.",
    ar: 'Malcolm يهرب لإنجلترا بعد مقتل أبوه - استراتيجية بقاء حكيمة، مع إنها تخلّيه يبان متّهم. في Act 4، يختبر ولاء Macduff بزعم كاذب إنه أسوأ من Macbeth (شهواني، طمّاع، بدون أي "king-becoming graces"). لمّا يردّ Macduff بيأس صادق، يكشف Malcolm الحقيقة. هالمشهد يبيّن Malcolm فطناً حذراً - عكس أبوه المؤتمِن. تعلّم من أخطاء Duncan. يمثّل الحكم الشرعي والنظام. خطابه الختامي، يرفع الـ thanes لرتبة earls (إشارة لأنغلَزة James I التاريخية لـ Scotland) ويدعو الكل لتتويجه، يدلّ على استعادة Scotland.',
  },
}

export const CHAR_WITCHES: CharacterBlock = {
  title: { en: 'The Witches (Weird Sisters)', ar: 'الساحرات (الأخوات الغريبات)' },
  tags: [
    { en: 'Supernatural', ar: 'خوارق' },
    { en: 'Catalysts', ar: 'محرّكات' },
    { en: 'Ambiguous', ar: 'غامضات' },
  ],
  role: {
    en: "Three supernatural beings who prophesy Macbeth's rise and manipulate events through equivocation. They open and shape the play but never directly command Macbeth to act.",
    ar: 'ثلاث كائنات خارقة يتنبّأن بصعود Macbeth ويتلاعبن بالأحداث عبر الـ equivocation. يفتحن المسرحية ويرسمن مسارها لكن ما يأمرن Macbeth بالفعل أبداً.',
  },
  traits: {
    en: 'Ambiguous, sinister, equivocating, non-human, chaotic, morally subversive.',
    ar: 'غامضات، مشؤومات، مراوغات، غير بشريات، فوضويات، مقوّضات للأخلاق.',
  },
  arc: {
    en: 'The witches are deliberately ambiguous. Shakespeare never confirms whether they create Macbeth\'s ambition or merely reveal what is already there. They speak in trochaic tetrameter (the reverse of normal iambic pentameter), rhyming couplets, and paradoxes ("Fair is foul, and foul is fair"), setting them apart from the human characters linguistically. They represent the supernatural, moral disorder, and the disruption of the natural world. For a Jacobean audience, witchcraft was a genuine fear - James I himself wrote Daemonologie and personally oversaw witch trials. In Act 4, their prophecies are technically true but deliberately misleading (equivocation), reflecting contemporary anxieties about the Gunpowder Plot conspirators. The witches raise the play\'s central question: fate versus free will. Banquo describes them as androgynous: "You should be women, / And yet your beards forbid me to interpret / That you are so" - they blur every boundary, including gender.',
    ar: 'الساحرات غامضات بقصد. Shakespeare ما يأكّد أبداً إذا كنّ يخلقن طموح Macbeth أو يكشفن اللي موجود فيه. يتكلّمن بـ trochaic tetrameter (عكس الـ iambic pentameter العادي)، أبيات مقفّاة، ومتناقضات ("Fair is foul, and foul is fair")، فتميّزهنّ لغوياً عن البشر. يمثّلن الخوارق والاضطراب الأخلاقي وتمزّق العالم الطبيعي. لجمهور Jacobean، السحر خوف فعلي - James I نفسه كتب Daemonologie وأشرف شخصياً على محاكمات السحرة. في Act 4، نبوءاتهنّ صحيحة تقنياً لكن مضلّلة بقصد (equivocation)، تعكس قلق المعاصرين من متآمري Gunpowder Plot. الساحرات يطرحن سؤال المسرحية المركزي: القدر مقابل الإرادة الحرة. Banquo يصفهنّ كأنهنّ بلا جنس واضح: "You should be women, / And yet your beards forbid me to interpret / That you are so" - يطمسن كل الحدود، حتى الجنس.',
  },
}

export const CHAR_LADYMACDUFF: CharacterBlock = {
  title: { en: 'Lady Macduff', ar: 'Lady Macduff' },
  tags: [
    { en: 'Foil to Lady Macbeth', ar: 'نقيض Lady Macbeth' },
    { en: 'Innocent Victim', ar: 'ضحية بريئة' },
  ],
  role: {
    en: "Macduff's wife. Her brief appearance and murder in Act 4 marks the moral nadir of Macbeth's tyranny.",
    ar: 'زوجة Macduff. ظهورها القصير وقتلها في Act 4 يمثّل أحطّ نقطة أخلاقية في طغيان Macbeth.',
  },
  traits: {
    en: 'Maternal, witty, loving, angry, vulnerable, natural - everything Lady Macbeth has suppressed.',
    ar: 'أم، ذكيّة، محبّة، غاضبة، هشّة، طبيعية - كل ما قمعته Lady Macbeth في نفسها.',
  },
  arc: {
    en: "Though her scene is brief (4.2), Lady Macduff is dramatically significant. She represents the domestic, maternal sphere that Lady Macbeth rejects when she calls on spirits to \"unsex\" her. Her anger at Macduff for leaving is natural and human. Her witty, tender conversation with her son contrasts sharply with the Macbeths' childless, guilt-ridden marriage. Her murder, along with her children's, is the play's most shocking act of violence because it targets innocents for no military or strategic gain - it is pure tyranny. It marks Macbeth's complete moral descent and galvanises Macduff into action. She serves as a dramatic foil to Lady Macbeth: where Lady Macbeth invokes darkness and rejects motherhood, Lady Macduff embodies maternal love and domestic normality.",
    ar: 'حتى لو مشهدها قصير (4.2)، Lady Macduff مهمة درامياً. تمثّل الفضاء المنزلي الأمومي اللي ترفضه Lady Macbeth لمّا تستدعي الأرواح يـ "unsex" لها. غضبها على Macduff لأنه ترك العيال طبيعي وإنساني. حوارها الذكي الحنون مع ابنها يتناقض بحدّة مع زواج آل Macbeth العقيم المثقَل بالذنب. مقتلها مع أطفالها أصدم فعل عنف في المسرحية لأنه يستهدف أبرياء بلا غاية عسكرية أو استراتيجية - طغيان خالص. يدلّ على الهبوط الأخلاقي الكامل لـ Macbeth ويحرّك Macduff للفعل. تشتغل نقيضاً درامياً لـ Lady Macbeth: حيث تستدعي Lady Macbeth الظلام وترفض الأمومة، Lady Macduff تجسّد الحب الأمومي والحياة المنزلية الطبيعية.',
  },
}

export const CHAR_ROSS: CharacterBlock = {
  title: { en: 'Ross', ar: 'Ross' },
  tags: [
    { en: 'Messenger', ar: 'رسول' },
    { en: 'Diplomat & Survivor', ar: 'دبلوماسي وناجٍ' },
  ],
  role: {
    en: "A Scottish nobleman and kinsman of Macduff. Acts as a messenger and go-between, delivering crucial news throughout the play. He is the play's most politically adaptable figure.",
    ar: 'نبيل اسكتلندي وقريب Macduff. يعمل كرسول ووسيط، يوصل أخباراً مفصلية طول المسرحية. أكثر شخصية مرنة سياسياً.',
  },
  traits: {
    en: 'Diplomatic, cautious, politically shrewd, evasive, ultimately loyal to Scotland.',
    ar: 'دبلوماسي، حذر، فطن سياسياً، يتهرّب من الالتزامات، وفي النهاية مخلص لـ Scotland.',
  },
  arc: {
    en: "Ross appears more frequently than any minor character, functioning as the play's news-bearer and political barometer. In Act 1, he brings the good news of Macbeth's new title. In Act 2, he discusses the unnatural portents following Duncan's murder. In Act 4, he initially equivocates when speaking to Lady Macduff, then travels to England to deliver the devastating news of her family's slaughter to Macduff - one of the play's most emotionally charged moments. His hesitation before breaking the news (\"Your castle is surprised; your wife and babes / Savagely slaughter'd\") shows the weight of what he carries. Ross represents the ordinary nobility caught between tyranny and conscience: he survives by being careful with his words, but ultimately sides with the forces of justice. His journey mirrors Scotland's: from loyalty to Duncan, through the horror of Macbeth's reign, to the restoration under Malcolm.",
    ar: 'Ross يظهر أكثر من أي شخصية ثانوية، يشتغل كحامل أخبار وميزان سياسي. في Act 1 يجيب خبر سعيد بلقب Macbeth الجديد. في Act 2 يناقش النذر غير الطبيعية اللي تلت مقتل Duncan. في Act 4 أول ما يحكي مع Lady Macduff يتهرّب، ثم يسافر لإنجلترا ينقل خبر مذبحة عائلتها لـ Macduff - وحدة من أعمق لحظات المسرحية عاطفياً. ترّدده قبل ما يفجّر الخبر ("Your castle is surprised; your wife and babes / Savagely slaughter\'d") يبيّن ثقل اللي يحمله. Ross يمثّل النبلاء العاديين العالقين بين الطغيان والضمير: ينجو لأنه يضبط كلامه، لكنه في الأخير ينحاز لقوى العدالة. رحلته تعكس رحلة Scotland: من ولاء Duncan، عبر فظائع حكم Macbeth، إلى الاستعادة في عهد Malcolm.',
  },
}

export const CHAR_LENNOX: CharacterBlock = {
  title: { en: 'Lennox', ar: 'Lennox' },
  tags: [
    { en: 'Voice of Scotland', ar: 'صوت Scotland' },
    { en: 'Cautious Dissenter', ar: 'معارض حذر' },
  ],
  role: {
    en: "A Scottish nobleman who gradually sees through Macbeth's pretence. His ironic speeches in Act 3, Scene 6 voice the growing opposition to Macbeth's rule.",
    ar: 'نبيل اسكتلندي يبدأ يكشف زيف Macbeth شي شي. خطاباته الساخرة في 3.6 تعبّر عن المعارضة المتنامية لحكم Macbeth.',
  },
  traits: {
    en: 'Observant, politically careful, increasingly sceptical, ironic, courageous in dissent.',
    ar: 'ملاحظ، حذر سياسياً، يتزايد شكّه، ساخر، شجاع في معارضته.',
  },
  arc: {
    en: 'Lennox begins as a loyal thane attending Duncan. He accompanies Macduff to discover Duncan\'s body and describes the "unruly night" of terrible storms - connecting the regicide to cosmic disorder. His most important scene is 3.6, where he speaks with biting irony about Macbeth\'s convenient explanations: how "noble" it was for Macbeth to kill the guards in "pious rage," how "monstrous" it would have been for Malcolm and Donalbain to kill their father. His sarcasm makes clear that Scotland\'s nobility sees through Macbeth but must speak in coded language to survive. By Act 5, he has openly joined Malcolm\'s forces. Lennox represents how tyranny forces even the honourable to use equivocation - ironically, the very practice the porter scene mocks. Shakespeare uses him to show the audience that Scotland is not deceived by Macbeth, only silenced by fear.',
    ar: 'Lennox يبدأ كـ thane مخلص يرافق Duncan. يصحّب Macduff في اكتشاف جثة Duncan، ويصف "unruly night" بعواصفها الفظيعة - يربط قتل الملك بالاضطراب الكوني. أهم مشهد له 3.6، يتكلّم بسخرية لاذعة على تفسيرات Macbeth المريحة: كم "noble" كان قتل Macbeth للحرّاس في "pious rage"، وكم كان بيكون "monstrous" لو قتل Malcolm وDonalbain أبوهم. سخريته تخلّي واضح إنّ نبلاء Scotland يكشفون Macbeth بس مجبورين يتكلّمون بلغة مشفّرة عشان يعيشون. وبحلول Act 5، انضمّ علنياً لجيش Malcolm. Lennox يمثّل كيف الطغيان يجبر حتى الشرفاء على الـ equivocation - مفارقة، لأنّ هذي بالضبط الممارسة اللي يسخر منها مشهد البوّاب. Shakespeare يستخدمه عشان يبيّن للجمهور إنّ Scotland مو منخدعة بـ Macbeth، بس صامتة من الخوف.',
  },
}

/* ──────────────── THEMES ──────────────── */

export type ThemeBlock = { title: Bi; body: Bi }

export const THEME_AMBITION: ThemeBlock = {
  title: { en: 'Ambition', ar: 'الطموح' },
  body: {
    en: "Ambition is the play's driving force and its central warning. Shakespeare presents ambition itself as neither good nor bad - Macbeth's bravery in battle is driven by ambition, and ambition for Scotland motivates Malcolm. It is unchecked ambition, \"vaulting ambition, which o'erleaps itself,\" that is destructive. Macbeth knows murder is wrong (his soliloquies are full of moral reasoning) but chooses ambition over conscience. Lady Macbeth's ambition is arguably even fiercer - she drives the initial plan and recognises that Macbeth has ambition but lacks \"the illness should attend it.\" The play shows ambition destroying everything: Macbeth's honour, his marriage, his sanity, and ultimately his life. It functions as a cautionary tale for the Jacobean audience about the dangers of overreaching one's ordained place in the Great Chain of Being. Macbeth's trajectory - from honoured warrior to nihilistic tyrant whose life \"signif[ies] nothing\" - demonstrates that ambition without moral constraint leads not to fulfilment but to existential emptiness.",
    ar: 'الطموح هو القوة المحرّكة في المسرحية وتحذيرها المركزي. Shakespeare يقدّم الطموح بحدّ ذاته لا خيّراً ولا شريراً - شجاعة Macbeth في المعركة يدفعها طموح، والطموح لـ Scotland يحرّك Malcolm. الطموح غير المقيّد، "vaulting ambition, which o\'erleaps itself"، هو المدمِّر. Macbeth يدري إنّ القتل خطأ (مونولوجاته مليانة تعليل أخلاقي) لكنه يختار الطموح على الضمير. طموح Lady Macbeth أشدّ شراسة على الأغلب - هي تدفع الخطة الأولى وتشوف إنّ Macbeth عنده طموح لكن تنقصه "the illness should attend it". المسرحية تورّي الطموح وهو يحطّم كل شي: شرف Macbeth، زواجه، عقله، وفي الآخر حياته. تشتغل كقصة تحذير لجمهور Jacobean من خطر التعدّي على المكان اللي قدّره الله للمرء في الـ Great Chain of Being. مسار Macbeth - من محارب مكرَّم إلى طاغية عدمي حياته "signif[ies] nothing" - يثبت إنّ الطموح بلا قيد أخلاقي يقود مو للاكتفاء، بل لفراغ وجودي.',
  },
}

export const THEME_POWER: ThemeBlock = {
  title: { en: 'Power and Kingship', ar: 'السلطة والملك' },
  body: {
    en: 'Shakespeare contrasts legitimate power (Duncan, Malcolm) with tyrannical power (Macbeth). Duncan\'s power is characterised by generosity, trust, and love - his subjects fight willingly for him. He embodies the "king-becoming graces" that Malcolm later lists: "justice, verity, temperance, stableness, / Bounty, perseverance, mercy, lowliness." Macbeth\'s power, by contrast, is maintained through fear, secrecy, and violence. As king, he is suspicious, isolated, and unable to enjoy his position: "To be thus is nothing, but to be safely thus." The play reflects Jacobean beliefs about the divine right of kings: a king appointed by God rules justly, while a usurper brings chaos to the entire natural order. The unnatural events (storms, horses eating each other, an owl killing a falcon) reflect the cosmic consequences of illegitimate power. Macbeth\'s reign is described as a disease: Caithness says Scotland "bleeds" under him, and Malcolm is the "medicine" to cure it. Power gained through violence must be maintained through violence, creating a cycle that ultimately consumes the tyrant.',
    ar: 'Shakespeare يقابل بين السلطة الشرعية (Duncan، Malcolm) والسلطة الطاغية (Macbeth). سلطة Duncan تتميّز بالكرم والثقة والمحبة - رعيّته تقاتل عنه طوعاً. يجسّد الـ "king-becoming graces" اللي يعدّدها Malcolm بعدين: "justice, verity, temperance, stableness, / Bounty, perseverance, mercy, lowliness". أمّا سلطة Macbeth فتُحفَظ بالخوف والسرية والعنف. كـ King يصير شكّاكاً منعزلاً ما يقدر يستمتع بمنصبه: "To be thus is nothing, but to be safely thus". المسرحية تعكس اعتقاد Jacobean بـ divine right of kings: الملك اللي عيّنه الله يحكم بعدل، والمغتصب يجيب الفوضى للنظام الطبيعي كله. الأحداث غير الطبيعية (عواصف، خيول تأكل بعضها، بومة تقتل صقراً) تعكس النتائج الكونية للسلطة غير الشرعية. حكم Macbeth يُوصف كمرض: Caithness يقول إنّ Scotland "bleeds" تحته، وMalcolm هو "medicine" تشفيها. السلطة المكسوبة بالعنف لازم تتحفظ بالعنف، فتنشأ دائرة تأكل الطاغية في الآخر.',
  },
}

export const THEME_GUILT: ThemeBlock = {
  title: { en: 'Guilt and Conscience', ar: 'الذنب والضمير' },
  body: {
    en: 'Guilt in Macbeth is presented as an inescapable, corrosive force that manifests physically and psychologically. It appears before, during, and after the act of murder. Before Duncan\'s death, Macbeth hallucinates a dagger; immediately after, he hears voices saying he has "murder\'d sleep," cannot say "Amen," and sees his hands as so bloody they would turn the ocean red. Later, Banquo\'s ghost appears only to him, guilt made visible at the worst possible moment. Lady Macbeth, who initially seems immune to guilt ("A little water clears us of this deed"), is eventually destroyed by it - her sleepwalking scene shows her subconscious torment, obsessively washing imagined blood from her hands in prose that has replaced her earlier controlled verse. Blood is the play\'s central symbol of guilt: permanent, spreading, impossible to wash away. Shakespeare suggests that guilt is the natural moral response to sin and that it cannot be suppressed, only displaced. The Macbeths\' guilt trajectories are inverse: he begins guilt-ridden and becomes hardened ("I am in blood / Stepp\'d in so far"); she begins controlled and is ultimately overwhelmed. The doctor\'s verdict that Lady Macbeth needs "the divine" rather than "the physician" frames guilt as a spiritual condition - it cannot be cured by medicine, only by confession and repentance, which is impossible given the magnitude of their crimes.',
    ar: 'الذنب في Macbeth يُقدَّم كقوة لا مفرّ منها، تنخر، تتجلّى جسدياً ونفسياً. يظهر قبل القتل وأثناءه وبعده. قبل موت Duncan، يهلوس Macbeth خنجراً؛ على طول بعد، يسمع أصواتاً تقول إنه "murder\'d sleep"، يعجز عن قول "Amen"، يشوف يديه ملطّختين دماً يخلّي البحر أحمر. بعدين، شبح Banquo يظهر له هو فقط، الذنب يصير مرئياً في أسوأ لحظة ممكنة. Lady Macbeth، اللي تبان أول الأمر محصّنة من الذنب ("A little water clears us of this deed")، يحطّمها في الآخر - مشهد سيرها وهي نائمة يبيّن عذابها اللاواعي، تغسل دماً وهمياً عن يديها بنثر حلّ محل الشعر المنضبط اللي كانت تتكلّم به قبل. الدم رمز الذنب المركزي في المسرحية: دائم، ينتشر، يستحيل غسله. Shakespeare يلمّح إنّ الذنب الردّ الأخلاقي الطبيعي على الخطيئة وما يقدر يُكبَت، فقط يتزحزح. مساري ذنب آل Macbeth معكوسان: هو يبدأ مثقّلاً بالذنب ويتقسّى ("I am in blood / Stepp\'d in so far")، وهي تبدأ مسيطرة فيغمرها الذنب في النهاية. حُكم الطبيب إنّ Lady Macbeth تحتاج "the divine" مو "the physician" يصوّر الذنب كحالة روحية - ما يشفيها الدواء، بس الاعتراف والتوبة، وهذي مستحيلة بحجم جرائمهما.',
  },
}

export const THEME_SUPERNATURAL: ThemeBlock = {
  title: { en: 'The Supernatural', ar: 'الخوارق' },
  body: {
    en: "The supernatural pervades the play from its opening scene. The witches, the prophecies, the apparitions, Banquo's ghost, the floating dagger, Lady Macbeth's invocation of spirits, and the unnatural darkness all contribute to an atmosphere of evil and moral disorder. For a Jacobean audience, the supernatural was not fictional - witchcraft was punishable by death, and James I was personally fascinated by demonology. Shakespeare uses the supernatural to explore whether evil comes from external forces or from within. The witches never tell Macbeth to kill anyone - they present possibilities, and he chooses to act. Lady Macbeth's invocation (\"Come, you spirits / That tend on mortal thoughts\") is a deliberate, voluntary act of summoning evil. The dagger and Banquo's ghost are left ambiguous: are they genuine supernatural manifestations, or psychological projections of guilt? This ambiguity is central to the play's exploration of moral responsibility. The witches speak in trochaic tetrameter (stressed-unstressed, reversing the normal iambic pattern), which aurally marks them as agents of inversion - everything they touch is backwards, reversed, subverted.",
    ar: 'الخوارق تنتشر في المسرحية من المشهد الافتتاحي. الساحرات، النبوءات، الأشباح، شبح Banquo، الخنجر الطائر، استدعاء Lady Macbeth للأرواح، والظلام غير الطبيعي، كلها تساهم في جو من الشر والاضطراب الأخلاقي. لجمهور Jacobean، الخوارق ما كانت خيالاً - السحر عقوبته الإعدام، وJames I شخصياً مفتون بالشياطين. Shakespeare يوظّف الخوارق ليتساءل إذا الشر يجي من قوى خارجية أو من الداخل. الساحرات أبداً ما يأمرن Macbeth بقتل أحد - يعرضن احتمالات، وهو يختار يتصرّف. استدعاء Lady Macbeth ("Come, you spirits / That tend on mortal thoughts") فعل متعمَّد، تطوّعي، لاستدعاء الشر. الخنجر وشبح Banquo يظلّان غامضين: هل هي تجلّيات خارقة فعلية أم إسقاط نفسي للذنب؟ هذا الغموض جوهري في استكشاف المسرحية للمسؤولية الأخلاقية. الساحرات يتكلّمن بـ trochaic tetrameter (مشدَّد-غير مشدَّد، عكس النمط الـ iambic العادي)، اللي يميّزهنّ سمعياً كأدوات قلب - كل ما يلامسنه يصير مقلوباً، معكوساً، مقوَّضاً.',
  },
}

export const THEME_GENDER: ThemeBlock = {
  title: { en: 'Masculinity and Gender', ar: 'الرجولة والنوع' },
  body: {
    en: 'The play interrogates what it means to be a man. Lady Macbeth manipulates Macbeth by equating manhood with violence and fearlessness: "When you durst do it, then you were a man." She herself seeks to reject femininity ("unsex me here") to be capable of cruelty, viewing compassion and nurturing as female weaknesses incompatible with power. Macbeth internalises this toxic definition, using the same tactic on the murderers: "Are you so gospell\'d / To pray for this good man?" The witches blur gender boundaries entirely - Banquo notes they "should be women, / And yet your beards forbid me to interpret / That you are so." However, Shakespeare offers an alternative model through Macduff, who insists he "must also feel it as a man" - genuine masculinity includes emotional sensitivity, grief, and moral courage. The play suggests that the equation of manhood with violence is destructive and ultimately self-defeating: Lady Macbeth\'s attempt to suppress her femininity leads to her mental collapse; Macbeth\'s pursuit of "manly" violence leads to tyranny and death. Lady Macduff\'s maternal love and her son\'s innocence offer a contrasting domestic sphere that Macbeth\'s violence destroys but cannot erase.',
    ar: 'المسرحية تستجوب شنو يعني تكون رجالاً. Lady Macbeth تتلاعب بـ Macbeth بمعادلة الرجولة بالعنف والإقدام: "When you durst do it, then you were a man". هي بنفسها تسعى ترفض الأنوثة ("unsex me here") عشان تقدر تكون قاسية، تعتبر الشفقة والرعاية ضعفاً نسائياً ما يتوافق مع السلطة. Macbeth يستبطن هذا التعريف السام، يستخدم نفس التكتيك مع القتلة: "Are you so gospell\'d / To pray for this good man?". الساحرات يطمسن حدود النوع كلياً - Banquo يلاحظ إنهنّ "should be women, / And yet your beards forbid me to interpret / That you are so". لكن Shakespeare يقدّم نموذجاً بديلاً عبر Macduff، اللي يصرّ إنه "must also feel it as a man" - الرجولة الحقيقية تشمل الحساسية العاطفية والحزن والشجاعة الأخلاقية. المسرحية تقول إنّ معادلة الرجولة بالعنف مدمّرة وتُفشِل صاحبها في الآخر: محاولة Lady Macbeth قمع أنوثتها تقود لانهيارها العقلي؛ ومسعى Macbeth للعنف "الرجولي" يقود للطغيان والموت. حبّ Lady Macduff الأمومي وبراءة ابنها يقدّمان فضاء منزلي مضاد يحطّمه عنف Macbeth لكنه ما يقدر يمحيه.',
  },
}

export const THEME_LOYALTY: ThemeBlock = {
  title: { en: 'Loyalty and Betrayal', ar: 'الولاء والخيانة' },
  body: {
    en: 'The play is structured around acts of betrayal that escalate in severity. The original Thane of Cawdor betrays Duncan; Macbeth then repeats this pattern on a grander scale. Macbeth betrays his king (regicide), his guest (violating the sacred bond of hospitality), his friend (Banquo\'s murder), and his country (tyranny). In Act 1, Scene 7, Macbeth himself catalogues the bonds he would violate: he is Duncan\'s "kinsman," "subject," and "host" - all relationships that should protect Duncan, not endanger him. In contrast, characters like Macduff and Malcolm demonstrate loyalty to Scotland even at enormous personal cost - Macduff loses his entire family. Banquo is loyal to his conscience but arguably disloyal to Duncan by keeping silent about his suspicions. The play shows that betrayal of natural bonds - between king and subject, host and guest, friend and friend - unleashes chaos throughout the natural and political order. Loyalty, when restored through Malcolm\'s accession, brings peace and order back to Scotland. Duncan\'s own reflection - "He was a gentleman on whom I built / An absolute trust" - is repeated ironically as Macbeth, the new Cawdor, enters plotting a greater betrayal.',
    ar: 'المسرحية مبنيّة حول أفعال خيانة تتصاعد. Thane of Cawdor الأصلي يخون Duncan؛ بعدها Macbeth يكرّر هالنمط على نطاق أكبر. Macbeth يخون ملكه (regicide)، ضيفه (انتهاك حُرمة الضيافة)، صديقه (مقتل Banquo)، وبلده (الطغيان). في 1.7، Macbeth بنفسه يعدّد الروابط اللي بيخرقها: هو "kinsman" لـ Duncan، و"subject"، و"host" - كل علاقات المفروض تحمي Duncan لا تعرّضه للخطر. في المقابل، شخصيات مثل Macduff وMalcolm تثبت الولاء لـ Scotland حتى بكلفة شخصية باهظة - Macduff يخسر عائلته كلها. Banquo مخلص لضميره لكن يمكن يُعدّ غير مخلص لـ Duncan لأنه يسكت عن شكوكه. المسرحية تبيّن إنّ خيانة الروابط الطبيعية - بين King ورعيّته، مضيف وضيفه، صديق وصديقه - تطلق الفوضى في النظام الطبيعي والسياسي. الولاء، لمّا يُستعاد عبر تتويج Malcolm، يرجع السلام والنظام لـ Scotland. ملاحظة Duncan نفسها - "He was a gentleman on whom I built / An absolute trust" - تتكرّر بسخرية مع دخول Macbeth، الـ Cawdor الجديد، وهو يدبّر خيانة أعظم.',
  },
}

export const THEME_FATE: ThemeBlock = {
  title: { en: 'Fate vs Free Will', ar: 'القدر مقابل الإرادة الحرة' },
  body: {
    en: 'This is perhaps the play\'s most debated theme. The witches prophesy that Macbeth will be king, but they never say he must murder Duncan to achieve it. Banquo receives similar prophecies but does not commit murder - proving that the prophecy alone is not sufficient cause. This suggests free will: Macbeth chooses his path. He even acknowledges this initially: "If chance will have me king, why, chance may crown me / Without my stir." Yet he abandons this rational position almost immediately. The prophecies all come true, and Macbeth echoes the witches\' language ("So foul and fair a day") before even meeting them, suggesting a predestined connection. The Act 4 apparitions are technically truthful but deliberately misleading - this equivocation gives Macbeth false confidence while fulfilling the letter of prophecy. Shakespeare deliberately leaves the question unresolved, creating dramatic tension. The play can be read as an argument for free will (Macbeth makes choices at every stage and could have chosen differently) or as a tragedy of fate (the witches seem to know the future with certainty). Most productively, it explores the space between: Macbeth may be predisposed to ambition, but he still makes conscious decisions that he knows to be wrong.',
    ar: 'يمكن هذي أكثر ثيمة مختلَف فيها في المسرحية. الساحرات يتنبأن إنّ Macbeth بيصير King، لكن ما يقلن أبداً إنه لازم يقتل Duncan عشان يصير. Banquo يستلم نبوءات شبيهة لكنه ما يرتكب قتل - يثبت إنّ النبوءة لحالها مو سبب كافٍ. هذا يلمّح للإرادة الحرة: Macbeth يختار طريقه. حتى يعترف بهذا أول الأمر: "If chance will have me king, why, chance may crown me / Without my stir". مع هذا يتخلّى عن هالموقف العقلاني على طول. كل النبوءات تتحقّق، Macbeth يعكس لغة الساحرات ("So foul and fair a day") قبل ما يقابلهنّ، ما يلمّح لارتباط مكتوب. أشباح Act 4 صحيحة تقنياً لكن مضلّلة بقصد - هذا الـ equivocation يعطي Macbeth ثقة كاذبة بينما يحقّق حرف النبوءة. Shakespeare يترك السؤال مفتوحاً بقصد، فيخلق توتر درامي. ممكن تُقرأ المسرحية كحُجّة على الإرادة الحرة (Macbeth يختار في كل مرحلة وكان يقدر يختار غير) أو كمأساة قدر (الساحرات يبان إنهنّ يعرفن المستقبل بتأكّد). الأنفع إنها تستكشف المنطقة بين الاثنين: ممكن Macbeth ميّال أصلاً للطموح، لكنه يتّخذ قرارات واعية يدري إنها غلط.',
  },
}

export const THEME_APPEARANCE: ThemeBlock = {
  title: { en: 'Appearance vs Reality', ar: 'الظاهر والباطن' },
  body: {
    en: '"Fair is foul, and foul is fair" - the play\'s opening line announces that nothing is what it seems. This theme operates at every level. Macbeth appears to be a loyal thane while planning murder; Lady Macbeth advises him to "look like the innocent flower, / But be the serpent under\'t." Duncan cannot read the Thane of Cawdor\'s treachery in his face - nor can he read Macbeth\'s, despite the ironic repetition. The witches\' prophecies are technically true but deliberately misleading: Birnam Wood does "come" to Dunsinane as camouflage, and Macbeth is killed by a man "not of woman born" through Caesarean section. Lady Macbeth plays the gracious hostess while plotting regicide. Macbeth performs grief at Duncan\'s death while being the murderer. The porter\'s reference to "equivocators" links this theme to the Gunpowder Plot, where Catholic conspirators used equivocation (technically true but misleading statements). The play is full of dramatic irony, where the audience sees truths that characters cannot. Even self-knowledge is unreliable: Lady Macbeth believes she can handle guilt ("a little water"); Macbeth believes the prophecies make him invincible. The theme reinforces the idea that evil distorts reality and that surfaces cannot be trusted in a world where moral order has been disrupted.',
    ar: '"Fair is foul, and foul is fair" - الجملة الافتتاحية تعلن إنّ ما من شي يبان كما هو. هالثيمة تشتغل على كل المستويات. Macbeth يبان thane مخلصاً وهو يخطّط للقتل؛ Lady Macbeth توصيه يـ "look like the innocent flower, / But be the serpent under\'t". Duncan ما يقدر يقرأ خيانة Thane of Cawdor في وجهه - ولا يقدر يقرأ خيانة Macbeth، رغم التكرار الساخر. نبوءات الساحرات صحيحة تقنياً لكن مضلّلة بقصد: Birnam Wood فعلاً "come" لـ Dunsinane كتمويه، وMacbeth يُقتَل برجل "not of woman born" بالقيصرية. Lady Macbeth تلعب دور المضيفة الكريمة وهي تدبّر قتل الملك. Macbeth يمثّل الحزن على موت Duncan وهو القاتل. إشارة البوّاب لـ "equivocators" تربط هالثيمة بـ Gunpowder Plot، اللي استخدم متآمروه الكاثوليك المراوغة (تصريحات صحيحة تقنياً لكن مضلّلة). المسرحية مليانة dramatic irony، يشوف فيها الجمهور حقائق ما يشوفها الشخصيات. حتى المعرفة بالذات غير موثوقة: Lady Macbeth تعتقد إنها تقدر تتحمّل الذنب ("a little water")؛ Macbeth يعتقد إنّ النبوءات تخلّيه حصيناً. الثيمة تعزّز فكرة إنّ الشر يشوّه الواقع وإنّ السطح ما يُؤمَن في عالم انهار فيه النظام الأخلاقي.',
  },
}

/* ──────────────── CONTEXT BLOCKS ──────────────── */

export type ContextBlock = { title: Bi; body: Bi }

export const CTX_JAMES1: ContextBlock = {
  title: { en: 'King James I and the Union of Crowns', ar: 'King James I واتحاد التاجين' },
  body: {
    en: "Macbeth was written c.1606, shortly after James VI of Scotland became James I of England in 1603 (the Union of the Crowns). Shakespeare's company, the Lord Chamberlain's Men, was renamed the King's Men under James's patronage. The play is carefully designed to flatter the new king: Banquo, the ancestor of the Stuart line, is presented as noble and virtuous (unlike in Shakespeare's historical source, Holinshed's Chronicles, where Banquo was Macbeth's accomplice). The show of eight kings in Act 4 represents James's royal lineage stretching into the future. Setting the play in Scotland was itself a compliment to James's heritage. The play may have been first performed before James at Hampton Court in 1606.",
    ar: "Macbeth كُتبت تقريباً سنة 1606، بُعَيد ما صار James VI of Scotland هو James I of England سنة 1603 (Union of the Crowns). فرقة Shakespeare، Lord Chamberlain's Men، تغيّر اسمها لـ King's Men تحت رعاية James. المسرحية مصمّمة بعناية لتجامل الملك الجديد: Banquo، جدّ سلالة Stuart، يُقدَّم نبيلاً فاضلاً (على عكس مصدر Shakespeare التاريخي، Holinshed's Chronicles، اللي يجعل Banquo شريك Macbeth). موكب الملوك الثمانية في Act 4 يمثّل سلالة James الملكية الممتدة في المستقبل. توطين المسرحية في Scotland كان بحدّ ذاته مجاملة لإرث James. يمكن إنها عُرضت أول مرة أمام James في Hampton Court سنة 1606.",
  },
}

export const CTX_GUNPOWDER: ContextBlock = {
  title: { en: 'The Gunpowder Plot (1605)', ar: 'Gunpowder Plot (1605)' },
  body: {
    en: 'Just a year before Macbeth was written, Guy Fawkes and Catholic conspirators attempted to blow up Parliament and kill James I on 5 November 1605. The plot\'s discovery led to national anxiety about treason and regicide. Macbeth dramatises these fears: the murder of a righteous king by a trusted subject, the equivocation (double-meaning language) used by the conspirators (the porter scene explicitly references "equivocators", a direct allusion to Father Henry Garnet, who was tried for his role in the plot and who defended the practice of equivocation), and the ultimate punishment of traitors. The play reinforced the message that regicide is the ultimate sin, punished by God and nature.',
    ar: 'قبل سنة واحدة من كتابة Macbeth، Guy Fawkes ومتآمرون كاثوليك حاولوا ينسفون البرلمان ويقتلون James I في 5 نوفمبر 1605. كشف المؤامرة جلب قلقاً وطنياً من الخيانة وقتل الملك. Macbeth تدرمن هالمخاوف: قتل ملك صالح على يد رعيّة موثوق فيها، الـ equivocation (لغة بمعنيَين) اللي استخدمها المتآمرون (مشهد البوّاب يشير صراحةً لـ "equivocators"، إيحاء مباشر لـ Father Henry Garnet اللي حوكم لدوره في المؤامرة ودافع عن ممارسة الـ equivocation)، والعقاب الحتمي للخونة. المسرحية ترسّخ رسالة إنّ regicide أعظم خطيئة، ويعاقبها الله والطبيعة.',
  },
}

export const CTX_DIVINE_RIGHT: ContextBlock = {
  title: { en: 'The Divine Right of Kings', ar: 'الحق الإلهي للملوك' },
  body: {
    en: "James I strongly promoted the belief that kings were appointed by God and answerable only to God. He wrote The True Law of Free Monarchies (1598) to articulate this doctrine. Killing a king was therefore not just murder but a sin against God's will - an act of sacrilege. This is why Duncan's murder is presented as so catastrophic: it is an act against the divine order. Macbeth recognises this himself in 1.7: Duncan's virtues \"will plead like angels, trumpet-tongued, against / The deep damnation of his taking-off.\" The natural disturbances that follow (darkness, storms, animals behaving unnaturally) reflect the belief that regicide disrupts the entire cosmos. Macbeth's torment and downfall serve as proof that God will punish those who violate the divine right. Malcolm's restoration at the end represents God's order being re-established.",
    ar: 'James I روّج بقوة لاعتقاد إنّ الملوك يعيّنهم الله ومحاسبون أمامه فقط. كتب The True Law of Free Monarchies (1598) ليُفصّل هذي العقيدة. قتل ملك إذن مو مجرد جريمة بل خطيئة ضد إرادة الله - تدنيس للمقدّس. هذي السبب اللي يخلّي قتل Duncan يُقدَّم كارثياً: فعل ضد النظام الإلهي. Macbeth بنفسه يدري بها في 1.7: فضائل Duncan "will plead like angels, trumpet-tongued, against / The deep damnation of his taking-off". الاضطرابات الطبيعية اللي تلت (ظلام، عواصف، حيوانات تتصرّف بشكل غير طبيعي) تعكس اعتقاد إنّ regicide يكسر الكون كله. عذاب Macbeth وسقوطه دليل إنّ الله يعاقب من ينتهك divine right. استعادة Malcolm في النهاية تمثّل إعادة بناء نظام الله.',
  },
}

export const CTX_CHAIN: ContextBlock = {
  title: { en: 'The Great Chain of Being', ar: 'Great Chain of Being' },
  body: {
    en: 'Elizabethan and Jacobean society believed in a strict hierarchy ordained by God: God → Angels → King → Nobles → Commoners → Animals → Plants → Minerals. Every being had its fixed place, and disrupting this chain at any level caused chaos throughout. Macbeth\'s regicide breaks the chain at a fundamental level, which is why nature responds with chaos: horses eating each other (animals above acting like animals below), an owl killing a falcon (a lower bird killing a higher one - mirroring the thane killing the king), and unnatural darkness during the day. Lady Macbeth\'s attempt to "unsex" herself is also a violation of the chain - she tries to transcend her ordained gender role, which a Jacobean audience would see as an act of rebellion against divine order. The restoration of order under Malcolm represents the chain being repaired and the natural hierarchy re-established.',
    ar: 'مجتمع Elizabethan وJacobean آمن بتراتبية صارمة قدّرها الله: الله ← الملائكة ← الملك ← النبلاء ← العامة ← الحيوانات ← النباتات ← الجمادات. لكل كائن مكانه الثابت، وكسر السلسلة عند أي مستوى يجيب فوضى في الكل. قتل Macbeth للملك يكسر السلسلة عند مستوى أساسي، ولهذا الطبيعة تردّ بفوضى: خيول تأكل بعضها (حيوانات عليا تتصرّف ككائنات سفلى)، بومة تقتل صقراً (طير أدنى يقتل طير أعلى - يعكس الـ thane وهو يقتل الـ King)، وظلام غير طبيعي في النهار. محاولة Lady Macbeth أن "unsex" حالها هي بعد انتهاك للسلسلة - تحاول تتجاوز دورها الجنوسي المقدَّر، وهذا يعتبره جمهور Jacobean ثورة على النظام الإلهي. استعادة النظام في عهد Malcolm تمثّل إصلاح السلسلة وإعادة التراتبية الطبيعية.',
  },
}

export const CTX_WITCHCRAFT: ContextBlock = {
  title: { en: 'Witchcraft and James I', ar: 'السحر وJames I' },
  body: {
    en: "James I wrote Daemonologie (1597), a treatise on witchcraft, and personally attended witch trials - most notably the North Berwick witch trials of 1590, where supposed witches were accused of attempting to murder James by raising storms at sea. The Witchcraft Act of 1604 made practising witchcraft punishable by death. Shakespeare's witches would have been genuinely terrifying to the original audience - not the Halloween figures we think of today, but real agents of Satan. The play validates James's beliefs by presenting witchcraft as real and dangerous, while also flattering the king's expertise on the subject. The ambiguity of the witches' power (do they cause events or merely predict them?) reflects contemporary debates about the nature and extent of demonic influence. Their use of equivocation - technically true statements that mislead - connects them to the Catholic conspirators of the Gunpowder Plot.",
    ar: 'James I كتب Daemonologie (1597)، رسالة عن السحر، وحضر شخصياً محاكمات السحرة - أشهرها محاكمات North Berwick سنة 1590، حيث اتُّهمت ساحرات مزعومات بمحاولة قتل James برفع عواصف بحرية. Witchcraft Act of 1604 خلّى ممارسة السحر عقوبتها الإعدام. ساحرات Shakespeare كنّ مرعبات فعلاً للجمهور الأصلي - مو شخصيات Halloween زي ما نتصوّر اليوم، بل عميلات حقيقيات للشيطان. المسرحية تصادق على معتقدات James بتقديم السحر حقيقياً وخطراً، وفي نفس الوقت تجامل خبرة الملك في الموضوع. غموض قدرة الساحرات (هل يسبّبن الأحداث أو يتنبأن بها فقط؟) يعكس النقاشات المعاصرة حول طبيعة التأثير الشيطاني ومداه. استخدامهنّ للـ equivocation - تصريحات صحيحة تقنياً لكن مضلِّلة - يربطهنّ بمتآمري الكاثوليك في Gunpowder Plot.',
  },
}

export const CTX_GENDER_JACOBEAN: ContextBlock = {
  title: { en: 'Attitudes to Gender in Jacobean England', ar: 'مواقف Jacobean من النوع الاجتماعي' },
  body: {
    en: 'Women in Jacobean society were expected to be obedient, nurturing, and subordinate to men. The dominant view, rooted in both classical philosophy and Christian theology, held that women were naturally weaker in reason and more susceptible to temptation (a legacy of the Eve narrative). Lady Macbeth\'s rejection of these roles ("unsex me here") would have been deeply shocking to the original audience. Her invocation of spirits aligns her with the witches and suggests that transgressing "natural" femininity requires supernatural assistance - it is, by implication, unnatural and diabolical. Her eventual mental collapse can be read as Shakespeare suggesting that such transgression leads to destruction - though modern audiences may read it more sympathetically, as the consequence of being forced into an impossible position in a patriarchal world. The witches, too, blur gender boundaries: Banquo notes they "should be women, / And yet your beards forbid me to interpret / That you are so." Lady Macduff, by contrast, represents the maternal ideal; her murder therefore represents Macbeth\'s attack on natural womanhood itself.',
    ar: 'النساء في مجتمع Jacobean كان متوقَّع منهنّ الطاعة والرعاية والخضوع للرجال. الرأي السائد، الجذر في الفلسفة الكلاسيكية واللاهوت المسيحي، إنّ المرأة أضعف عقلاً بطبيعتها وأكثر عرضة للإغراء (إرث قصة Eve). رفض Lady Macbeth لهالأدوار ("unsex me here") كان بيصدم الجمهور الأصلي وايد. استدعاؤها للأرواح يحاذيها مع الساحرات ويلمّح إنّ تجاوز "الأنوثة الطبيعية" يتطلّب عوناً خارقاً - يعني، ضمناً، أمر غير طبيعي وشيطاني. ممكن يُقرأ انهيارها العقلي في الآخر كأنّ Shakespeare يلمّح إنّ هالتجاوز يقود للدمار - مع إنّ الجمهور الحديث يمكن يقرأها بمزيد من التعاطف، كنتيجة لكونها مُكرَهة في موقع مستحيل في عالم بطريركي. الساحرات بعد يطمسن حدود النوع: Banquo يلاحظ إنهنّ "should be women, / And yet your beards forbid me to interpret / That you are so". في المقابل، Lady Macduff تمثّل المثال الأمومي؛ ومقتلها إذن يمثّل هجوم Macbeth على الأنوثة الطبيعية نفسها.',
  },
}

/* ──────────────── ESSAY PLANNING ──────────────── */

export type EssayQuestion = {
  title: Bi
  paragraphs: { heading: Bi; body: Bi }[]
}

export const ESSAY_AMBITION: EssayQuestion = {
  title: {
    en: '"How does Shakespeare present ambition in Macbeth?"',
    ar: '"شلون يقدّم Shakespeare الطموح في Macbeth؟"',
  },
  paragraphs: [
    {
      heading: { en: 'Paragraph 1: Ambition as latent desire', ar: 'الفقرة 1: الطموح كرغبة كامنة' },
      body: {
        en: 'Macbeth\'s ambition exists before the witches - his aside "Stars, hide your fires" (1.4) reveals dark desires before Lady Macbeth\'s influence. The imperative verb "hide" shows concealment of something that already exists. Link to the witches as catalysts, not creators of ambition. Context: the witches represent a Jacobean fear that temptation lurks everywhere.',
        ar: 'طموح Macbeth موجود قبل الساحرات - مونولوجه الجانبي "Stars, hide your fires" (1.4) يكشف رغبات مظلمة قبل تأثير Lady Macbeth. الفعل الأمري "hide" يبيّن إخفاءً لشي موجود فعلاً. اربطها بالساحرات كمحرّكات، لا خالقات للطموح. السياق: الساحرات يمثّلن خوف Jacobean إنّ الإغراء يكمن في كل مكان.',
      },
    },
    {
      heading: {
        en: 'Paragraph 2: Lady Macbeth as the driver',
        ar: 'الفقرة 2: Lady Macbeth كقائدة',
      },
      body: {
        en: 'Lady Macbeth\'s ambition is arguably stronger - "unsex me here" (1.5) shows her willing to sacrifice her very nature for power. Her manipulation of Macbeth\'s masculinity (1.7) is the tactic that overcomes his moral objections. She identifies that he has ambition but lacks "the illness should attend it" - "illness" admits the moral cost.',
        ar: 'طموح Lady Macbeth يمكن أقوى - "unsex me here" (1.5) تبيّن استعدادها تضحّي بطبيعتها نفسها مقابل السلطة. تلاعبها برجولة Macbeth (1.7) هو التكتيك اللي يتغلّب على اعتراضاته الأخلاقية. تشوف إنّ عنده طموحاً لكنه يفتقد "the illness should attend it" - كلمة "illness" تعترف بالكلفة الأخلاقية.',
      },
    },
    {
      heading: {
        en: 'Paragraph 3: Ambition as self-destructive',
        ar: 'الفقرة 3: الطموح يدمّر نفسه',
      },
      body: {
        en: '"Vaulting ambition, which o\'erleaps itself" (1.7) - the horse-riding metaphor foreshadows the fall. By Act 3, ambition has trapped him: "I am in blood / Stepp\'d in so far" - the river of blood image suggests he is drowning in the consequences. Context: link to the Great Chain of Being and the dangers of overreaching one\'s ordained position.',
        ar: '"Vaulting ambition, which o\'erleaps itself" (1.7) - استعارة ركوب الخيل تنبّئ بالسقوط. وبحلول Act 3، يحبسه الطموح: "I am in blood / Stepp\'d in so far" - صورة نهر الدم تلمّح إنه يغرق في العواقب. السياق: اربطها بـ Great Chain of Being وخطر تجاوز موضع المرء المقدَّر.',
      },
    },
    {
      heading: {
        en: 'Paragraph 4: The consequences - nihilism',
        ar: 'الفقرة 4: العواقب - العدمية',
      },
      body: {
        en: '"Tomorrow, and tomorrow, and tomorrow" (5.5) - ambition has led to meaninglessness, not fulfilment. Life "signif[ies] nothing." The plodding monosyllables enact the tedium. Context: cautionary tale for a Jacobean audience about the self-defeating nature of unchecked ambition. Contrast with Malcolm, whose ambition for Scotland is legitimate and restorative.',
        ar: '"Tomorrow, and tomorrow, and tomorrow" (5.5) - الطموح يقود للا معنى، مو للاكتفاء. الحياة "signif[ies] nothing". المقاطع الأحادية البطيئة تجسّد الملل. السياق: قصة تحذير لجمهور Jacobean من طبيعة الطموح غير المقيَّد المهلِكة لصاحبها. قارِنها بـ Malcolm اللي طموحه لـ Scotland شرعي وترميمي.',
      },
    },
  ],
}

export const ESSAY_GUILT: EssayQuestion = {
  title: {
    en: '"How does Shakespeare present guilt in Macbeth?"',
    ar: '"شلون يقدّم Shakespeare الذنب في Macbeth؟"',
  },
  paragraphs: [
    {
      heading: { en: 'Paragraph 1: Guilt before the act', ar: 'الفقرة 1: الذنب قبل الفعل' },
      body: {
        en: 'Even before the murder, Macbeth\'s guilt manifests in the hallucinated dagger (2.1): "Is this a dagger which I see before me?" His conscience warns him. Analyse: is the dagger supernatural or psychological? Either way, it shows his mind rejecting what his hand is about to do. Link to the supernatural theme and Jacobean beliefs about guilty visions.',
        ar: 'حتى قبل القتل، ذنب Macbeth يظهر في الخنجر الهلوسي (2.1): "Is this a dagger which I see before me?". ضميره يحذّره. حلّل: الخنجر خارق أم نفسي؟ في الحالتين، يبيّن عقله وهو يرفض ما توشك يده تسوّيه. اربطها بثيمة الخوارق وباعتقاد Jacobean في رؤى الذنب.',
      },
    },
    {
      heading: {
        en: 'Paragraph 2: Immediate guilt - the blood imagery',
        ar: 'الفقرة 2: الذنب الفوري - صور الدم',
      },
      body: {
        en: '"Will all great Neptune\'s ocean wash this blood / Clean from my hand?" (2.2). Guilt as permanent, oceanic, contaminating. The shift from Latinate diction ("multitudinous seas incarnadine") to blunt monosyllables ("making the green one red") mirrors his mind oscillating between intellectual distance and visceral horror. Contrast with Lady Macbeth\'s dismissive "a little water."',
        ar: '"Will all great Neptune\'s ocean wash this blood / Clean from my hand?" (2.2). الذنب دائم، محيطي، يلوّث. التحوّل من المعجم اللاتيني ("multitudinous seas incarnadine") لمقاطع أحادية مباشرة ("making the green one red") يعكس تأرجح عقله بين المسافة الفكرية والرعب الجسدي. قارِنها باستخفاف Lady Macbeth "a little water".',
      },
    },
    {
      heading: {
        en: 'Paragraph 3: Guilt made visible - the ghost',
        ar: 'الفقرة 3: الذنب يصير مرئياً - الشبح',
      },
      body: {
        en: "Banquo's ghost (3.4) externalises Macbeth's guilt at the worst possible moment - during a public banquet. Only he can see it, suggesting it is psychological. The ghost disrupts the performance of kingship, threatening to expose his crimes. Lady Macbeth tries to control the situation but her power over him is fading.",
        ar: 'شبح Banquo (3.4) يخرج ذنب Macbeth في أسوأ لحظة ممكنة - وسط مأدبة عامة. هو وحده يقدر يشوفه، ما يلمّح إنه نفسي. الشبح يكسر أداء الملك ويهدّد بكشف جرائمه. Lady Macbeth تحاول تتحكّم لكن سلطتها عليه تخبو.',
      },
    },
    {
      heading: {
        en: "Paragraph 4: Lady Macbeth's delayed guilt",
        ar: 'الفقرة 4: ذنب Lady Macbeth المؤجَّل',
      },
      body: {
        en: 'The sleepwalking scene (5.1): "Out, damned spot!" Her guilt surfaces in her unconscious. Prose replaces verse - her controlled language has collapsed with her controlled mind. She relives multiple murders in fragments. The doctor says she needs "the divine" (a priest), not "the physician" - guilt is framed as spiritual sickness. Context: link to religious belief in damnation and the impossibility of forgiveness without repentance.',
        ar: 'مشهد السير وهي نائمة (5.1): "Out, damned spot!". ذنبها يطلع من اللاوعي. النثر يحلّ محل الشعر - لغتها المنضبطة انهارت مع عقلها المنضبط. تعيش جرائم متعدّدة على شكل شظايا. الطبيب يقول إنها تحتاج "the divine" (قسّ)، مو "the physician" - الذنب يُؤطَّر كمرض روحي. السياق: اربطها بالاعتقاد الديني في damnation واستحالة الغفران بلا توبة.',
      },
    },
  ],
}

export const ESSAY_SUPERNATURAL: EssayQuestion = {
  title: {
    en: '"How does Shakespeare present the supernatural in Macbeth?"',
    ar: '"شلون يقدّم Shakespeare الخوارق في Macbeth؟"',
  },
  paragraphs: [
    {
      heading: {
        en: 'Paragraph 1: The witches as agents of chaos',
        ar: 'الفقرة 1: الساحرات كأدوات فوضى',
      },
      body: {
        en: '"Fair is foul" (1.1) - they invert moral order from the opening line. Their trochaic tetrameter reverses the normal iambic rhythm, linguistically marking them as agents of inversion. The paradoxes and pathetic fallacy ("thunder and lightning") create atmosphere. Context: James I\'s Daemonologie, genuine contemporary fear of witchcraft, and the Witchcraft Act of 1604.',
        ar: '"Fair is foul" (1.1) - يقلبن النظام الأخلاقي من السطر الأول. الـ trochaic tetrameter ينقلب على إيقاع الـ iambic العادي، فيوسمهنّ لغوياً كأدوات قلب. المتناقضات والـ pathetic fallacy ("thunder and lightning") تخلق الجو. السياق: Daemonologie لـ James I، الخوف المعاصر الحقيقي من السحر، وWitchcraft Act of 1604.',
      },
    },
    {
      heading: {
        en: "Paragraph 2: Lady Macbeth's invocation",
        ar: 'الفقرة 2: استدعاء Lady Macbeth',
      },
      body: {
        en: '"Come, you spirits / That tend on mortal thoughts" (1.5) - she deliberately summons supernatural evil. This is an act of will, not victimhood. The imperative "Come" shows agency. She allies herself with dark forces voluntarily, aligning herself with the witches. Context: link to Jacobean fears that humans could invite demonic possession through their own moral weakness.',
        ar: '"Come, you spirits / That tend on mortal thoughts" (1.5) - تستدعي الشر الخارق بقصد. هذا فعل إرادة، مو ضحية. الأمر "Come" يبيّن الفاعلية. تحالف نفسها مع قوى الظلمة طوعاً، تحاذي نفسها مع الساحرات. السياق: اربطها بمخاوف Jacobean إنّ البشر يقدرون يدعون التلبّس الشيطاني عبر ضعفهم الأخلاقي.',
      },
    },
    {
      heading: {
        en: 'Paragraph 3: Hallucinations - supernatural or psychological?',
        ar: 'الفقرة 3: الهلوسات - خارقة أم نفسية؟',
      },
      body: {
        en: 'The dagger (2.1) and Banquo\'s ghost (3.4) - Shakespeare deliberately leaves it ambiguous. Macbeth asks the dagger "Art thou not, fatal vision, sensible to feeling as to sight?" - he cannot determine its reality. Are these genuine supernatural events or projections of guilt? This ambiguity is the play\'s richest interpretive question and allows multiple readings.',
        ar: 'الخنجر (2.1) وشبح Banquo (3.4) - Shakespeare يتعمّد ترك الأمر غامضاً. Macbeth يسأل الخنجر "Art thou not, fatal vision, sensible to feeling as to sight?" - ما يقدر يحدّد واقعيته. هل هي أحداث خارقة فعلية أم إسقاطات ذنب؟ هذا الغموض أغنى سؤال تأويلي في المسرحية ويسمح بقراءات متعدّدة.',
      },
    },
    {
      heading: {
        en: 'Paragraph 4: The apparitions and equivocation',
        ar: 'الفقرة 4: الأشباح والـ equivocation',
      },
      body: {
        en: 'Act 4\'s apparitions give literally true but misleading prophecies ("none of woman born" = Caesarean; Birnam Wood "moves" as camouflage). The supernatural does not lie but does not tell the whole truth - equivocation. Context: link this directly to the Gunpowder Plot, where Catholic conspirators used equivocation, and to the porter\'s reference to equivocators in 2.3.',
        ar: 'أشباح Act 4 يعطون نبوءات صحيحة حرفياً لكنها مضلّلة ("none of woman born" = قيصرية؛ Birnam Wood "موف" كتمويه). الخوارق ما تكذب لكن ما تقول كل الحقيقة - equivocation. السياق: اربطها مباشرة بـ Gunpowder Plot، حيث استخدم متآمرو الكاثوليك الـ equivocation، وبإشارة البوّاب لـ equivocators في 2.3.',
      },
    },
  ],
}

export const ESSAY_MASCULINITY: EssayQuestion = {
  title: {
    en: '"How does Shakespeare present masculinity in Macbeth?"',
    ar: '"شلون يقدّم Shakespeare الرجولة في Macbeth؟"',
  },
  paragraphs: [
    {
      heading: {
        en: "Paragraph 1: Masculinity as violence (Lady Macbeth's view)",
        ar: 'الفقرة 1: الرجولة كعنف (رؤية Lady Macbeth)',
      },
      body: {
        en: '"When you durst do it, then you were a man" (1.7). Lady Macbeth equates manhood with the courage to kill. Her "unsex me here" (1.5) implies femininity = weakness, masculinity = capacity for cruelty. She even claims she would "dash\'d the brains out" of her own nursing baby if she had sworn to do so. This toxic definition is the play\'s most destructive idea.',
        ar: '"When you durst do it, then you were a man" (1.7). Lady Macbeth تعادل الرجولة بشجاعة القتل. "unsex me here" (1.5) تلمّح: الأنوثة = ضعف، والرجولة = قدرة على القسوة. حتى تدّعي إنها بتـ "dash\'d the brains out" لرضيعها لو حلفت تسوّي كذا. هذا التعريف السامّ أشدّ فكرة مدمّرة في المسرحية.',
      },
    },
    {
      heading: {
        en: "Paragraph 2: Macbeth's rejected definition",
        ar: 'الفقرة 2: تعريف Macbeth المرفوض',
      },
      body: {
        en: '"I dare do all that may become a man; / Who dares do more is none" (1.7) - Macbeth briefly offers a healthier view: manhood means propriety, not excess. He is also echoing Lady Macbeth\'s tactic with the murderers in 3.1, showing how the toxic definition propagates. Context: link to Jacobean expectations of warrior masculinity and the martial culture that valued violence.',
        ar: '"I dare do all that may become a man; / Who dares do more is none" (1.7) - Macbeth يقدّم لحظياً رؤية أصحّ: الرجولة تعني اللياقة، مو التطرّف. وهو بعد يكرّر تكتيك Lady Macbeth مع القتلة في 3.1، فيبيّن كيف ينتشر التعريف السامّ. السياق: اربطها بتوقعات Jacobean من رجولة المحارب وثقافة القتال اللي تقدّس العنف.',
      },
    },
    {
      heading: {
        en: "Paragraph 3: Macduff's alternative masculinity",
        ar: 'الفقرة 3: رجولة Macduff البديلة',
      },
      body: {
        en: '"I must also feel it as a man" (4.3) - Macduff offers a masculinity that includes emotional depth, vulnerability, and grief. He corrects Malcolm\'s "Dispute it like a man" by adding that feeling is part of being a man. He is still a warrior - he ultimately kills Macbeth - but he defines manhood through humanity, not just action. This is Shakespeare\'s positive model.',
        ar: '"I must also feel it as a man" (4.3) - Macduff يقدّم رجولة تشمل العمق العاطفي والهشاشة والحزن. يصحّح "Dispute it like a man" لـ Malcolm بإضافة إنّ الإحساس جزء من كون المرء رجلاً. لازال محارب - في الأخير هو يقتل Macbeth - لكنه يعرّف الرجولة عبر الإنسانية، مو الفعل بس. هذا هو النموذج الإيجابي عند Shakespeare.',
      },
    },
    {
      heading: {
        en: 'Paragraph 4: The consequences of toxic masculinity',
        ar: 'الفقرة 4: عواقب الرجولة السامّة',
      },
      body: {
        en: "Lady Macbeth's rejection of femininity leads to her destruction (the sleepwalking scene). Macbeth's pursuit of \"manly\" violence leads to tyranny, isolation, and death. Lady Macduff's murder represents the destruction of the maternal, domestic sphere by toxic masculine violence. Shakespeare's message: equating masculinity exclusively with violence is self-destructive for individuals and society.",
        ar: 'رفض Lady Macbeth للأنوثة يقود لتدميرها (مشهد السير وهي نائمة). مسعى Macbeth للعنف "الرجولي" يقود للطغيان والعزلة والموت. مقتل Lady Macduff يمثّل تدمير الفضاء الأمومي المنزلي بعنف ذكوري سامّ. رسالة Shakespeare: حصر الرجولة بالعنف تدمير للذات وللمجتمع.',
      },
    },
  ],
}

export const ESSAY_LADYMACBETH: EssayQuestion = {
  title: {
    en: '"How does Shakespeare present Lady Macbeth as a powerful character?"',
    ar: '"شلون يقدّم Shakespeare Lady Macbeth شخصية قوية؟"',
  },
  paragraphs: [
    {
      heading: {
        en: 'Paragraph 1: Power through language and will',
        ar: 'الفقرة 1: السلطة عبر اللغة والإرادة',
      },
      body: {
        en: 'Lady Macbeth commands spirits ("Come, you spirits", 1.5), commands her husband ("look like the innocent flower"), and commands the situation after the murder. Her language is full of imperatives. She is the planner: Macbeth hesitates, she drives the action. Context: this would have been deeply transgressive for a Jacobean audience - a wife commanding and manipulating her husband inverts the expected gender hierarchy.',
        ar: 'Lady Macbeth تأمر الأرواح ("Come, you spirits"، 1.5)، تأمر زوجها ("look like the innocent flower")، وتأمر الموقف بعد القتل. لغتها مليانة بأوامر. هي المخطِّطة: Macbeth يتردّد، وهي تدفع الفعل. السياق: هذا كان بيُعدّ تجاوزاً عميقاً لجمهور Jacobean - زوجة تأمر زوجها وتتلاعب فيه تقلب التراتبية الجنوسية المتوقّعة.',
      },
    },
    {
      heading: {
        en: 'Paragraph 2: Power through manipulation of masculinity',
        ar: 'الفقرة 2: السلطة عبر التلاعب بالرجولة',
      },
      body: {
        en: '"When you durst do it, then you were a man" (1.7) - she understands that masculinity is Macbeth\'s psychological weak point and exploits it. She also uses shock tactics: claiming she would murder her own baby. She controls the situation after the murder when Macbeth panics, taking the daggers back and framing the guards. "A little water clears us" - she reduces murder to a practical problem.',
        ar: '"When you durst do it, then you were a man" (1.7) - تشوف إنّ الرجولة نقطة ضعف Macbeth النفسية فتستغلّها. تستخدم بعد تكتيكات صدمة: تدّعي إنها بتقتل رضيعها. تتحكّم بالموقف بعد الجريمة لمّا يفزع Macbeth، ترجع الخناجر وتلصق التهمة بالحرّاس. "A little water clears us" - تختزل القتل لمشكلة عملية.',
      },
    },
    {
      heading: { en: 'Paragraph 3: The loss of power', ar: 'الفقرة 3: فقدان السلطة' },
      body: {
        en: 'By Act 3, Macbeth acts without consulting her ("Be innocent of the knowledge, dearest chuck"). She is sidelined, left in the dark. At the banquet, she tries to control Macbeth\'s reaction to the ghost but fails - her influence is waning. "Nought\'s had, all\'s spent" (3.2) - she recognises their power has brought no fulfilment. Her power was always dependent on Macbeth\'s compliance, and as he becomes more autonomous in evil, she becomes less relevant.',
        ar: 'بحلول Act 3، Macbeth يتصرّف بدون استشارتها ("Be innocent of the knowledge, dearest chuck"). تُترَك على الهامش وفي الظلام. في المأدبة تحاول تتحكّم بردّ Macbeth على الشبح وتفشل - تأثيرها يخبو. "Nought\'s had, all\'s spent" (3.2) - تشوف إنّ سلطتهم ما جابت اكتفاء. سلطتها كانت دايماً معتمدة على امتثال Macbeth، ومع ما يستقلّ هو أكثر في الشر تصير هي أقل أهمية.',
      },
    },
    {
      heading: {
        en: 'Paragraph 4: Power destroyed by guilt',
        ar: 'الفقرة 4: السلطة يحطّمها الذنب',
      },
      body: {
        en: 'The sleepwalking scene (5.1) shows complete reversal: the woman who commanded spirits now cannot command her own mind. Prose replaces verse. "Out, damned spot!" - she cannot wash away what she once dismissed with "a little water." She probably dies by suicide - the ultimate loss of control. Context: a Jacobean audience might see her destruction as divine punishment for transgressing her natural role; modern readers might see it as the inevitable cost of suppressing her humanity.',
        ar: 'مشهد السير وهي نائمة (5.1) يبيّن انقلاباً كاملاً: المرأة اللي أمرت الأرواح ما تقدر الحين تأمر عقلها. النثر يحلّ محل الشعر. "Out, damned spot!" - ما تقدر تغسل اللي استخفّت به قبل بـ "a little water". على الأرجح تموت منتحرة - الفقدان النهائي للسيطرة. السياق: جمهور Jacobean يمكن يشوف دمارها عقوبة إلهية لتجاوز دورها الطبيعي؛ القرّاء المعاصرون يشوفونه كلفة حتمية لقمع إنسانيتها.',
      },
    },
  ],
}

/* ──────────────── WRITER'S METHODS ──────────────── */

export type MethodBlock = { title: Bi; body: Bi }

export const METHOD_SOLILOQUY: MethodBlock = {
  title: { en: 'Soliloquy and Aside', ar: 'المونولوج والمونولوج الجانبي' },
  body: {
    en: 'Shakespeare uses soliloquies to reveal the characters\' inner turmoil. Macbeth\'s "Is this a dagger which I see before me?" soliloquy (2.1) and "Tomorrow, and tomorrow, and tomorrow" (5.5) chart his psychological journey from anxious hesitation to nihilistic despair. Lady Macbeth\'s sleepwalking scene (5.1) functions as an involuntary soliloquy - her unconscious mind reveals what her conscious will suppressed. Soliloquies create dramatic irony: the audience knows the characters\' true feelings while other characters do not.',
    ar: 'Shakespeare يستخدم المونولوج عشان يكشف الاضطراب الداخلي للشخصيات. مونولوج Macbeth "Is this a dagger which I see before me?" (2.1) ومونولوج "Tomorrow, and tomorrow, and tomorrow" (5.5) يرسمان رحلته النفسية من التردد القلق إلى اليأس العدمي. مشهد Lady Macbeth وهي نائمة (5.1) يشتغل كمونولوج لا إرادي - لاوعيها يكشف اللي قمعته إرادتها الواعية. المونولوجات تخلق dramatic irony: الجمهور يدري بمشاعر الشخصيات الحقيقية بينما بقية الشخصيات ما تدري.',
  },
}

export const METHOD_BLOOD: MethodBlock = {
  title: { en: 'Blood Imagery', ar: 'صور الدم' },
  body: {
    en: 'Blood runs through the play as its dominant image. After Duncan\'s murder, Macbeth stares at his hands: "Will all great Neptune\'s ocean wash this blood / Clean from my hand?" Lady Macbeth dismisses this: "A little water clears us of this deed." By Act 5, it is she who cannot remove the blood: "Out, damned spot!" The reversal is structurally deliberate - blood becomes a symbol of inescapable guilt that transfers from one character to the other. Blood also symbolises the natural order: Duncan\'s blood, shed unnaturally, stains everything it touches.',
    ar: 'الدم يجري في المسرحية كصورتها المهيمنة. بعد قتل Duncan، Macbeth يحدّق في يديه: "Will all great Neptune\'s ocean wash this blood / Clean from my hand?". Lady Macbeth تستهين بكلامه: "A little water clears us of this deed". وبحلول Act 5، هي اللي ما تقدر تشيل الدم: "Out, damned spot!". الانقلاب مقصود بنيوياً - الدم يصير رمزاً للذنب اللي ما منه مفرّ ينتقل من شخصية للثانية. الدم بعد يرمز للنظام الطبيعي: دم Duncan، اللي سُفك بشكل غير طبيعي، يلطّخ كل ما يلامسه.',
  },
}

export const METHOD_IRONY: MethodBlock = {
  title: { en: 'Dramatic Irony', ar: 'Dramatic Irony' },
  body: {
    en: 'Duncan calls Macbeth\'s castle a place where "the air nimbly and sweetly recommends itself" (1.6) moments before being murdered there. He calls Macbeth "a gentleman on whom I built an absolute trust" (1.4) just as Macbeth is plotting his death. These ironies heighten the horror and create complicity between audience and murderer: we know what Duncan does not, placing us in the uncomfortable position of silent witnesses.',
    ar: 'Duncan يصف قصر Macbeth كمكان حيث "the air nimbly and sweetly recommends itself" (1.6) قبل ما يُقتَل فيه بدقائق. يسمّي Macbeth "a gentleman on whom I built an absolute trust" (1.4) بالضبط بينما يدبّر Macbeth موته. هالمفارقات ترفع الرعب وتخلق تواطؤاً بين الجمهور والقاتل: إحنا ندري باللي ما يدري به Duncan، فنحطّ في موضع الشاهد الصامت غير المرتاح.',
  },
}

export const METHOD_PATHETIC: MethodBlock = {
  title: {
    en: 'Pathetic Fallacy and the Natural Order',
    ar: 'الـ Pathetic Fallacy والنظام الطبيعي',
  },
  body: {
    en: 'Nature mirrors the moral disorder caused by regicide. On the night of Duncan\'s murder, there are "lamentings heard i\' the air, strange screams of death" (2.3). An owl kills a falcon (a lesser bird killing a greater one, mirroring Macbeth killing Duncan). Duncan\'s horses "eat each other" (2.4). Shakespeare uses the Jacobean Great Chain of Being: when the rightful king is murdered, the entire natural order is disrupted. Order is only restored when Malcolm, the legitimate heir, takes the throne.',
    ar: 'الطبيعة تعكس الاضطراب الأخلاقي اللي يسبّبه regicide. ليلة قتل Duncan في "lamentings heard i\' the air, strange screams of death" (2.3). بومة تقتل صقراً (طير أدنى يقتل طير أعلى، يعكس Macbeth وهو يقتل Duncan). خيول Duncan "eat each other" (2.4). Shakespeare يستخدم Great Chain of Being الـ Jacobean: لمّا يُقتَل الملك الشرعي، النظام الطبيعي كله يضطرب. النظام ما يُستعاد إلا لمّا Malcolm، الوريث الشرعي، يأخذ العرش.',
  },
}

export const METHOD_EQUIVOCATION: MethodBlock = {
  title: { en: 'Equivocation and Paradox', ar: 'الـ Equivocation والمتناقضة' },
  body: {
    en: 'The witches speak in paradoxes: "Fair is foul, and foul is fair" (1.1). The prophecies are equivocal - they mean something different from what Macbeth assumes. "None of woman born shall harm Macbeth" proves true only because Macduff was delivered by Caesarean section. This language of deception connects to the historical context: the Gunpowder Plot (1605) involved equivocation by Catholic conspirators. Shakespeare\'s audience would have been deeply suspicious of language that appears truthful but conceals its true meaning.',
    ar: 'الساحرات يتكلّمن بمتناقضات: "Fair is foul, and foul is fair" (1.1). النبوءات equivocal - تعني شيئاً غير اللي يفترضه Macbeth. "None of woman born shall harm Macbeth" تطلع صحيحة فقط لأنّ Macduff خرج بقيصرية. لغة الخداع هذي ترتبط بالسياق التاريخي: Gunpowder Plot (1605) تضمّن equivocation من متآمري الكاثوليك. جمهور Shakespeare كان بيرتاب وايد من لغة تبان صادقة وتخفي معناها الحقيقي.',
  },
}

export const METHOD_FIVE_ACT: MethodBlock = {
  title: { en: 'Five-Act Tragic Structure', ar: 'البنية المأساوية ذات الخمسة فصول' },
  body: {
    en: "Macbeth follows the classical five-act tragic structure. Act 1 is exposition (setting, prophecy, temptation). Act 2 is rising action (the murder). Act 3 is the climax/turning point (Banquo's murder and ghost). Act 4 is falling action (Macbeth's tyranny deepens). Act 5 is catastrophe (Macbeth's defeat and death). The play compresses time dramatically - Macbeth's rise and fall feels breathlessly fast, reinforcing the sense that ambition consumes its possessor.",
    ar: 'Macbeth تتبع البنية المأساوية الكلاسيكية ذات الخمسة فصول. Act 1 تمهيد (الإعداد، النبوءة، الإغراء). Act 2 تصاعد (الجريمة). Act 3 الذروة/نقطة التحوّل (قتل Banquo وشبحه). Act 4 هبوط (يتعمّق طغيان Macbeth). Act 5 كارثة (هزيمة Macbeth وموته). المسرحية تضغط الزمن درامياً - صعود Macbeth وسقوطه يحسّ به المتلقّي سريعاً مبهراً، فيعزّز إحساس إنّ الطموح يأكل صاحبه.',
  },
}

export const METHOD_ANTITHESIS: MethodBlock = {
  title: { en: 'Antithesis and Binary Opposites', ar: 'التضاد والثنائيات المتقابلة' },
  body: {
    en: 'The play is structured around binary opposites: light/dark, good/evil, order/chaos, loyalty/treachery, appearance/reality. Lady Macbeth instructs Macbeth to "look like the innocent flower, / But be the serpent under\'t" (1.5). The witches invert natural categories: "Fair is foul, and foul is fair." These antitheses create a world where nothing is what it seems, and moral certainty is constantly undermined.',
    ar: 'المسرحية مبنية حول ثنائيات متقابلة: نور/ظلام، خير/شر، نظام/فوضى، ولاء/خيانة، ظاهر/باطن. Lady Macbeth توصي Macbeth يـ "look like the innocent flower, / But be the serpent under\'t" (1.5). الساحرات يقلبن الفئات الطبيعية: "Fair is foul, and foul is fair". هذي التضادات تخلق عالماً ما من شي فيه يبان كما هو، واليقين الأخلاقي يتقوّض باستمرار.',
  },
}

export const METHOD_SUPERNATURAL_DEVICE: MethodBlock = {
  title: { en: 'The Supernatural as Dramatic Device', ar: 'الخوارق كأداة درامية' },
  body: {
    en: "The witches, Banquo's ghost, the floating dagger, and the apparitions serve multiple dramatic functions. They create spectacle and entertainment for the audience. They externalise Macbeth's inner desires (the dagger leads him to Duncan). They raise the question of agency: do the witches cause Macbeth's actions, or do they merely reveal what he already wants? For James I's court, the supernatural had real political significance - James himself had written Daemonologie (1597) and believed in witchcraft.",
    ar: 'الساحرات، شبح Banquo، الخنجر الطائر، والأشباح يقومون بوظائف درامية متعدّدة. يخلقون فرجة وتسلية للجمهور. يخرجون رغبات Macbeth الداخلية (الخنجر يقوده لـ Duncan). يطرحون سؤال الفاعلية: هل الساحرات تسبّب أفعال Macbeth أو فقط تكشف اللي يبغاه أصلاً؟ بالنسبة لبلاط James I، الخوارق كان لها وزن سياسي حقيقي - James بنفسه كتب Daemonologie (1597) وآمن بالسحر.',
  },
}

export const METHOD_IAMBIC: MethodBlock = {
  title: { en: 'Iambic Pentameter and Prose', ar: 'الـ Iambic Pentameter والنثر' },
  body: {
    en: 'Noble characters speak in iambic pentameter (the rhythm of natural English speech elevated to verse). The witches speak in trochaic tetrameter ("Double, double, toil and trouble") - a shorter, chanting rhythm that sounds unnatural and spelllike. When Lady Macbeth sleepwalks (5.1), she speaks in prose, not verse - signalling her mental disintegration. The shift from verse to prose marks the collapse of order, reason, and nobility. Shakespeare uses metre as a character tool.',
    ar: 'الشخصيات النبيلة تتكلّم بـ iambic pentameter (إيقاع اللغة الإنجليزية الطبيعي مرفوعاً للشعر). الساحرات يتكلّمن بـ trochaic tetrameter ("Double, double, toil and trouble") - إيقاع أقصر شبيه بالترتيل، يبان غير طبيعي وكالتعويذة. لمّا تمشي Lady Macbeth نائمة (5.1)، تتكلّم نثراً، مو شعراً - علامة على تفكّكها العقلي. التحوّل من الشعر للنثر يدلّ على انهيار النظام والعقل والنبل. Shakespeare يوظّف الوزن كأداة شخصية.',
  },
}

export const METHOD_STAGECRAFT: MethodBlock = {
  title: { en: 'Stagecraft and Stage Directions', ar: 'الحرفة المسرحية والإرشادات' },
  body: {
    en: "Shakespeare uses visual theatre powerfully. The dagger scene requires the actor to reach for something invisible - the audience sees Macbeth's madness but not its cause. Banquo's ghost appears at the banquet, visible to Macbeth but not to the guests - creating a split between what different characters perceive. The \"show of eight kings\" in Act 4 was designed to flatter James I (who traced his lineage from Banquo). The final scene, where Macduff enters with Macbeth's head, provides a visual symbol of tyranny defeated.",
    ar: 'Shakespeare يستخدم المسرح البصري بقوة. مشهد الخنجر يتطلّب من الممثّل يمدّ يده لشي غير مرئي - الجمهور يشوف جنون Macbeth بدون ما يشوف سببه. شبح Banquo يظهر في المأدبة، يشوفه Macbeth وما يشوفه الضيوف - يخلق انقساماً في ما تدركه كل شخصية. "show of eight kings" في Act 4 صُمّمَ مجاملةً لـ James I (اللي يربط نسبه بـ Banquo). المشهد الختامي، حيث يدخل Macduff برأس Macbeth، يقدّم رمزاً بصرياً للطغيان المهزوم.',
  },
}

/* ──────────────── GRADE 9 POINTS ──────────────── */

export type Grade9Block = { title: Bi; body: Bi }

export const G9_WITCHES: Grade9Block = {
  title: {
    en: '1. The Witches Do Not Cause Anything',
    ar: '1. الساحرات ما يسبّبن شيئاً',
  },
  body: {
    en: 'Lower-grade answers say the witches "make" Macbeth kill Duncan. A Grade 9 response recognises that the witches only predict - they never command. They say Macbeth "shalt be king hereafter," not "you must kill Duncan." Macbeth makes the interpretive leap from prophecy to murder himself. Banquo hears the same prophecies but does not act on them. This distinction is crucial: Shakespeare presents the witches as a catalyst, not a cause. The real source of evil is Macbeth\'s pre-existing ambition, which the witches merely surface. The play explores how external temptation activates internal desire - but the choice always remains human.',
    ar: 'الإجابات الأدنى تقول إنّ الساحرات "make" Macbeth يقتل Duncan. ردّ Grade 9 يدرك إنّ الساحرات يتنبأن فقط - أبداً ما يأمرن. يقلن إنّ Macbeth "shalt be king hereafter"، مو "لازم تقتل Duncan". القفزة التأويلية من النبوءة للقتل يسوّيها Macbeth بنفسه. Banquo يسمع نفس النبوءات لكنه ما يتصرّف. هذا التمييز جوهري: Shakespeare يقدّم الساحرات كمحرّك، مو كسبب. مصدر الشر الحقيقي هو طموح Macbeth الموجود أصلاً، اللي الساحرات يطفينه على السطح فقط. المسرحية تستكشف كيف الإغراء الخارجي ينشّط الرغبة الداخلية - لكن الاختيار يبقى إنسانياً دايماً.',
  },
}

export const G9_LADYMACBETH_PERFORMANCE: Grade9Block = {
  title: {
    en: '2. Lady Macbeth and the Performance of Masculinity',
    ar: '2. Lady Macbeth وأداء الرجولة',
  },
  body: {
    en: 'Lady Macbeth does not simply reject femininity - she performs masculinity, exposing it as a social construct rather than a natural state. When she says "unsex me here," she is not asking to become a man but to remove the social constraints that prevent women from acting decisively. Her later collapse in Act 5 has been read as the psychological cost of this performance: maintaining a masculine facade while being denied the emotional outlet that her society allows only to women. Shakespeare thus uses Lady Macbeth to question whether gendered behaviour is natural or performed - a remarkably modern interrogation.',
    ar: 'Lady Macbeth ما ترفض الأنوثة فقط - تؤدّي الرجولة، فتكشفها كبناء اجتماعي مو حالة طبيعية. لمّا تقول "unsex me here"، ما تطلب تصير رجل بل أن تُرفع عنها القيود الاجتماعية اللي تمنع النساء من الفعل الحاسم. انهيارها في Act 5 يُقرأ كثمن نفسي لهالأداء: الحفاظ على واجهة ذكورية بينما تُمنَع من المنفذ العاطفي اللي يسمح به مجتمعها للنساء فقط. Shakespeare يوظّف Lady Macbeth إذن لتساؤل: هل السلوك الجنوسي طبيعي أم مؤدّى - استجواب حديث وايد لافت.',
  },
}

export const G9_TRAGIC_HERO: Grade9Block = {
  title: { en: '3. Macbeth as Anti-Tragic Hero', ar: '3. Macbeth بطل مأساوي مضاد' },
  body: {
    en: 'Aristotle\'s tragic hero should be fundamentally noble, brought low by a single flaw (hamartia). A sophisticated reading might argue that Macbeth does not fit this model. His ambition is not a flaw in an otherwise noble character - it is his defining quality. He is described as "brave Macbeth" in battle, but his bravery is violence, not virtue. His soliloquies show self-awareness (he knows the murder is wrong) but not moral growth - he acts despite knowing better. Shakespeare may be subverting the tragic hero model: Macbeth is not a good man corrupted but a man whose violence finds a new outlet. This reading makes the play more disturbing: it suggests that the capacity for evil is not an aberration but an integral part of human nature.',
    ar: 'البطل المأساوي عند Aristotle لازم يكون نبيلاً جوهرياً، يسقطه عيب واحد (hamartia). قراءة متقدّمة تجادل إنّ Macbeth ما يدخل في هالنموذج. طموحه مو عيب في شخصية نبيلة، بل صفته المميِّزة. يوصَف بـ "brave Macbeth" في المعركة لكن شجاعته عنف، مو فضيلة. مونولوجاته تبيّن وعياً ذاتياً (يدري إنّ القتل غلط) لكن ما فيها نموّ أخلاقي - يتصرّف رغم معرفته. ممكن إنّ Shakespeare يقوّض نموذج البطل المأساوي: Macbeth مو رجل صالح أُفسد بل رجل عنفه يلقى منفذاً جديداً. هذي القراءة تخلّي المسرحية أكثر إقلاقاً: تلمّح إنّ القدرة على الشر مو شذوذاً بل جزء أصيل من الطبيعة البشرية.',
  },
}

export const G9_DUNCAN: Grade9Block = {
  title: {
    en: '4. Duncan as Idealised King - or Weak One?',
    ar: '4. Duncan ملكاً مثالياً - أو ضعيفاً؟',
  },
  body: {
    en: 'Duncan is presented as a gracious, trusting king - but a top-level response might question whether his naivety is a flaw. He has already been betrayed by one Thane of Cawdor and admits he cannot "find the mind\'s construction in the face" - he immediately trusts Macbeth with the same title. In the harsh political world of medieval Scotland, Duncan\'s trusting nature could be read as political incompetence. Shakespeare may be suggesting that being a good man and being a good king are not the same thing - a politically astute observation for a playwright writing under James I.',
    ar: 'Duncan يُقدَّم كملك كريم مؤتمِن - لكن ردّ من المستوى الأعلى يمكن يتساءل هل سذاجته عيب. كان قد خانه Thane of Cawdor واحد، ويعترف إنه ما يقدر "find the mind\'s construction in the face" - ومع هذا يثق على طول بـ Macbeth بنفس اللقب. في عالم Scotland القروسطي السياسي القاسي، طبيعة Duncan الواثقة ممكن تُقرأ كعجز سياسي. ممكن إنّ Shakespeare يلمّح إنّ كون المرء رجلاً صالحاً وكونه ملكاً صالحاً مو نفس الشي - ملاحظة سياسية فطنة من كاتب مسرحي يكتب في عهد James I.',
  },
}

export const G9_TOMORROW: Grade9Block = {
  title: {
    en: "5. 'Tomorrow and Tomorrow' as Nihilism or Self-Knowledge",
    ar: '5. "Tomorrow and Tomorrow" عدمية أم معرفة بالذات',
  },
  body: {
    en: 'Macbeth\'s final great soliloquy ("Tomorrow, and tomorrow, and tomorrow...") is usually read as nihilistic despair. But a Grade 9 response might argue it represents Macbeth\'s most honest moment of self-knowledge. For the first time, he sees life clearly, without the distorting lens of ambition. "Life\'s but a walking shadow, a poor player / That struts and frets his hour upon the stage" - the theatrical metaphor is self-referential: Macbeth recognises that he has been playing a role (king, tyrant) and that the role has consumed the man. This is not just despair but a form of tragic insight that brings him closer to the audience\'s understanding than at any other point in the play.',
    ar: 'مونولوج Macbeth الأخير الكبير ("Tomorrow, and tomorrow, and tomorrow...") عادةً يُقرأ يأساً عدمياً. لكن ردّ Grade 9 يمكن يجادل إنه يمثّل أصدق لحظة معرفة بالذات عند Macbeth. لأول مرة يشوف الحياة بوضوح، بدون عدسة الطموح المشوِّهة. "Life\'s but a walking shadow, a poor player / That struts and frets his hour upon the stage" - الاستعارة المسرحية تشير لذاتها: Macbeth يدرك إنه كان يلعب دوراً (King، طاغية) وإنّ الدور أكل الرجل. هذا مو يأس فقط بل شكل من البصيرة المأساوية يقرّبه لفهم الجمهور أكثر من أي نقطة ثانية في المسرحية.',
  },
}

export const G9_REGICIDE: Grade9Block = {
  title: { en: '6. Regicide as Cosmic Crime', ar: '6. قتل الملك جريمة كونية' },
  body: {
    en: "For a Jacobean audience, killing a king was not merely murder but an assault on the divine order. The Great Chain of Being placed the king directly below God; regicide was therefore a crime against God. This is why nature itself responds to Duncan's murder with storms, unnatural darkness, and animals behaving abnormally. Shakespeare is not being superstitious - he is using the belief system of his audience to magnify the horror. A Grade 9 response should connect the pathetic fallacy to the specific Jacobean belief in the Divine Right of Kings, showing how Shakespeare uses contemporary theology to intensify his drama.",
    ar: 'لجمهور Jacobean، قتل الملك مو مجرد جريمة بل اعتداء على النظام الإلهي. Great Chain of Being تضع الملك مباشرة تحت الله؛ فإذن regicide جريمة ضد الله. لهذا السبب الطبيعة نفسها تردّ على قتل Duncan بعواصف وظلام غير طبيعي وحيوانات تتصرّف بشكل شاذّ. Shakespeare ما يخرف بل يستعمل نسق معتقد جمهوره ليضخّم الرعب. ردّ Grade 9 لازم يربط الـ pathetic fallacy بمعتقد Jacobean المحدّد في Divine Right of Kings، يبيّن كيف Shakespeare يستعمل اللاهوت المعاصر ليكثّف دراميّته.',
  },
}

export const G9_MACDUFF: Grade9Block = {
  title: {
    en: "7. Macduff as Macbeth's True Counterpart",
    ar: '7. Macduff نقيض Macbeth الحقيقي',
  },
  body: {
    en: 'Macduff and Macbeth are structurally parallel: both are Scottish nobles, both are warriors, both lose their families (Macbeth loses his relationship with Lady Macbeth; Macduff loses his wife and children literally). But their responses to grief diverge utterly. Macbeth spirals into violence; Macduff channels grief into just action. When Malcolm tells Macduff to "dispute it like a man," Macduff replies: "I shall do so; / But I must also feel it as a man." This is the play\'s alternative model of masculinity: strength that includes emotional vulnerability rather than suppressing it. Macduff represents what Macbeth could have been.',
    ar: 'Macduff وMacbeth متوازيان بنيوياً: كلاهما نبيلان اسكتلنديان، كلاهما محاربان، كلاهما يخسران عائلتيهما (Macbeth يخسر علاقته بـ Lady Macbeth؛ وMacduff يخسر زوجته وعياله حرفياً). لكن ردّيهما على الحزن يتباعدان كلياً. Macbeth ينحدر في العنف؛ Macduff يحوّل الحزن لفعل عادل. لمّا يقول Malcolm لـ Macduff "dispute it like a man"، يردّ Macduff: "I shall do so; / But I must also feel it as a man". هذا نموذج الرجولة البديل في المسرحية: قوة تشمل الهشاشة العاطفية بدل قمعها. Macduff يمثّل ما كان يقدر يصير Macbeth.',
  },
}

export const G9_PROPAGANDA: Grade9Block = {
  title: {
    en: '8. The Play as Political Propaganda',
    ar: '8. المسرحية كدعاية سياسية',
  },
  body: {
    en: "Macbeth was almost certainly written for James I, who became king of England in 1603. James traced his ancestry from Banquo (the \"show of eight kings\" in Act 4 flatters James's lineage). The play validates James's rule by showing the chaos that results from illegitimate succession. The witches reflect James's personal interest in demonology. A Grade 9 response might argue that Macbeth functions partly as political propaganda: it tells the story James wanted told - that legitimate succession brings order, usurpation brings chaos, and the Stuart line is blessed. Understanding this political context enriches every reading of the play.",
    ar: 'Macbeth شبه أكيد إنها كُتبت لـ James I، اللي صار ملك إنجلترا سنة 1603. James يربط نسبه بـ Banquo ("show of eight kings" في Act 4 مجاملة لسلالة James). المسرحية تصادق على حكم James بإظهار الفوضى اللي تنتج عن الخلافة غير الشرعية. الساحرات تعكس اهتمام James الشخصي بالشياطين. ردّ Grade 9 يمكن يجادل إنّ Macbeth تشتغل جزئياً كدعاية سياسية: تروي القصة اللي يبغى James يُرويها - إنّ الخلافة الشرعية تجيب نظاماً، والاغتصاب يجيب فوضى، وسلالة Stuart مباركة. فهم هذا السياق السياسي يثري كل قراءة للمسرحية.',
  },
}

/* ──────────────── ESSAY-PLANNING + QUOTE INTRO + CLOSING ──────────────── */

export const ESSAY_INTRO: Bi = {
  en: 'These templates show you how to structure responses to the most common exam questions. Adapt them to fit the specific question wording. Each template uses the structure: Point → Evidence (quotation) → Analysis (technique + effect) → Context (link to Jacobean period).',
  ar: 'هذي القوالب تعلّمك شلون تنظّم ردّك على أكثر أسئلة امتحان شيوعاً. عدّلها حسب صياغة السؤال. كل قالب يستخدم البنية: نقطة ← دليل (اقتباس) ← تحليل (تقنية + أثر) ← سياق (ربط بحقبة Jacobean).',
}

export const QUOTES_INTRO: Bi = {
  en: 'Every quotation below is tagged by character and theme. Each one can be used in multiple essay types. These are the most important quotations to memorise for a closed-book exam.',
  ar: 'كل اقتباس بالأسفل موسوم بالشخصية والثيمة. كل اقتباس ممكن يخدم أكثر من نوع مقال. هذي أهم الاقتباسات اللي لازم تحفظها لامتحان مغلق الكتاب.',
}

export const QUOTES_BY_CHAR: Bi = { en: 'Organised by Character', ar: 'مرتّبة حسب الشخصية' }
export const QUOTES_CROSS: Bi = { en: 'Quick Theme Cross-Reference', ar: 'فهرس سريع بالثيمات' }
export const QUOTES_CROSS_INTRO: Bi = {
  en: 'Use this table to find quotations by theme for your essay planning.',
  ar: 'استخدم هالجدول عشان تلقى الاقتباسات حسب الثيمة وأنت تخطّط مقالك.',
}
export const QUOTES_COL_THEME: Bi = { en: 'Theme', ar: 'الثيمة' }
export const QUOTES_COL_LIST: Bi = { en: 'Key Quotations', ar: 'الاقتباسات المفتاحية' }

export const METHODS_INTRO: Bi = {
  en: '', // there is no intro in the source page; methods open directly
  ar: '',
}

export const GRADE9_INTRO: Bi = {
  en: 'These higher-level interpretations demonstrate the sophisticated analysis needed for top grades. Each goes beyond surface reading to consider authorial intent, alternative readings, and structural significance.',
  ar: 'هذي القراءات الأعلى مستوى تعرض التحليل الراقي اللي يحتاجه الـ Grade الأعلى. كل وحدة تتجاوز القراءة السطحية لتنظر في نيّة الكاتب والقراءات البديلة والدلالة البنيوية.',
}

export const PRACTICE_INTRO: Bi = {
  en: 'Write your answer below each question and receive AI-powered feedback tailored to GCSE English Literature mark schemes. Aim for at least 150 words per response to get meaningful feedback.',
  ar: 'اكتب جوابك تحت كل سؤال واستلم ملاحظات AI مفصّلة على مقياس تصحيح GCSE English Literature. اهدف لـ 150 كلمة على الأقل عشان تحصّل ملاحظات مفيدة.',
}

export const PRACTICE_Q: { title: Bi; body: Bi }[] = [
  {
    title: { en: 'Question 1', ar: 'السؤال 1' },
    body: {
      en: 'How does Shakespeare present the theme of ambition in Macbeth? Refer to the whole play in your answer.',
      ar: 'شلون يقدّم Shakespeare ثيمة الطموح في Macbeth؟ ارجع للمسرحية كلها في إجابتك.',
    },
  },
  {
    title: { en: 'Question 2', ar: 'السؤال 2' },
    body: {
      en: 'How does Shakespeare use the character of Lady Macbeth to explore the theme of guilt?',
      ar: 'شلون يستخدم Shakespeare شخصية Lady Macbeth ليستكشف ثيمة الذنب؟',
    },
  },
  {
    title: { en: 'Question 3', ar: 'السؤال 3' },
    body: {
      en: 'How does Shakespeare present the supernatural in Macbeth? Refer to the role of the witches and other supernatural elements in your answer.',
      ar: 'شلون يقدّم Shakespeare الخوارق في Macbeth؟ ارجع لدور الساحرات والعناصر الخارقة الثانية في إجابتك.',
    },
  },
  {
    title: { en: 'Question 4', ar: 'السؤال 4' },
    body: {
      en: 'How does Shakespeare present the relationship between Macbeth and Lady Macbeth throughout the play?',
      ar: 'شلون يقدّم Shakespeare العلاقة بين Macbeth وLady Macbeth خلال المسرحية كلها؟',
    },
  },
]

export const PRACTICE_MARKS: Bi = { en: '[30 marks]', ar: '[30 درجة]' }
export const PRACTICE_PLACEHOLDER: Bi = {
  en: 'Write your essay response here...',
  ar: 'اكتب جواب مقالك هنا...',
}
export const PRACTICE_LABEL: Bi = { en: 'Your answer', ar: 'جوابك' }

export const FOOTER_COPYRIGHT: Bi = {
  en: 'Macbeth by William Shakespeare is in the public domain. Quotations are reproduced freely.',
  ar: 'Macbeth لـ William Shakespeare في الملكية العامة. الاقتباسات مُعاد إنتاجها بحرية.',
}

/* ──────────────── LOCALE HOOK ──────────────── */

/**
 * Picks the `en` or `ar` field from a Bi block based on the current
 * locale. Default is `en` so this is safe to call before the cookie
 * read settles (SSR / first paint).
 */
export function pick(b: Bi, locale: 'en' | 'ar' | 'es'): string {
  if (locale === 'ar' && b.ar) return b.ar
  return b.en
}
