/**
 * Khaleeji Arabic translations for the metadata layer of macbethData.
 *
 * Scope: section titles, character names + descriptions, theme names +
 * descriptions, the page title/author, and contextNotes. The play text
 * itself (each section's `content` HTML) stays in English — students are
 * reading Shakespeare's original. Likewise the `evidence` and `keyQuotes`
 * arrays stay in English because they are direct Shakespeare quotations
 * and would lose their purpose if translated.
 *
 * The translator (`translateMacbethData`) walks the data structure and
 * substitutes any string whose EN value appears in MACBETH_AR. Strings
 * not in the map fall through unchanged — so missing translations
 * degrade to English rather than rendering blank.
 */
import type { Locale } from '@/lib/i18n/use-locale'
import type { TextData } from '@/components/study/InteractiveTextViewer'

export const MACBETH_AR: Record<string, string> = {
  // ─── Title + author ─────────────────────────────────────────────
  Macbeth: 'ماكبث',
  'William Shakespeare': 'وليام شكسبير',

  // ─── Section titles (Acts/Scenes) ───────────────────────────────
  'Act 1, Scene 1 — The Witches': 'الفصل الأول، المشهد الأول — الساحرات',
  'Act 1, Scene 2 — A Bloody Battle': 'الفصل الأول، المشهد الثاني — معركة دامية',
  'Act 1, Scene 3 — The Prophecies': 'الفصل الأول، المشهد الثالث — النبوءات',
  'Act 1, Scene 4 — Duncan Names Malcolm Heir':
    'الفصل الأول، المشهد الرابع — دنكان يعيّن مالكولم وليّ العهد',
  'Act 1, Scene 5 — Lady Macbeth': 'الفصل الأول، المشهد الخامس — ليدي ماكبث',
  'Act 1, Scene 7 — Macbeth Hesitates': 'الفصل الأول، المشهد السابع — ماكبث يتردّد',
  'Act 2, Scene 1 — The Dagger': 'الفصل الثاني، المشهد الأول — الخنجر',
  'Act 2, Scene 2 — The Murder': 'الفصل الثاني، المشهد الثاني — الجريمة',
  'Act 2, Scene 3 — The Discovery': 'الفصل الثاني، المشهد الثالث — اكتشاف الجريمة',
  'Act 3, Scene 1 — Banquo Suspects': 'الفصل الثالث، المشهد الأول — بانكو يشكّ',
  'Act 3, Scene 4 — The Banquet': 'الفصل الثالث، المشهد الرابع — مأدبة الشبح',
  'Act 4, Scene 1 — The Cauldron': 'الفصل الرابع، المشهد الأول — قِدر الساحرات',
  'Act 4, Scene 2 — Lady Macduff': 'الفصل الرابع، المشهد الثاني — ليدي ماكدف',
  'Act 4, Scene 3 — Malcolm and Macduff': 'الفصل الرابع، المشهد الثالث — مالكولم وماكدف',
  'Act 5, Scene 1 — The Sleepwalking Scene': 'الفصل الخامس، المشهد الأول — مشهد السير في النوم',
  'Act 5, Scene 5 — Tomorrow Speech': 'الفصل الخامس، المشهد الخامس — مونولوج "غداً"',
  'Act 5, Scene 8 — The Final Battle': 'الفصل الخامس، المشهد الثامن — المعركة الأخيرة',

  // ─── Character names ────────────────────────────────────────────
  'Lady Macbeth': 'ليدي ماكبث',
  Banquo: 'بانكو',
  Macduff: 'ماكدف',
  'King Duncan': 'الملك دنكان',
  'The Witches (Weird Sisters)': 'الساحرات الثلاث (الأخوات الغريبات)',
  Malcolm: 'مالكولم',
  'Lady Macduff': 'ليدي ماكدف',

  // ─── Character descriptions ─────────────────────────────────────
  "The play's tragic hero. A brave Scottish general whose ambition, ignited by the witches' prophecy and his wife's goading, leads him to murder King Duncan and seize the throne. He descends from honoured warrior to paranoid tyrant, ultimately destroyed by the very forces he sought to control. His soliloquies reveal a man acutely aware of his own moral corruption yet unable to stop himself.":
    'البطل التراجيدي للمسرحية. جنرال اسكتلندي شجاع، شعلة الطموح فيه أشعلتها نبوءة الساحرات وتحريض زوجته، فتقوده لقتل الملك دنكان والاستيلاء على العرش. يتدحرج من محارب مكرّم إلى طاغية مذعور، ويُسحَق في النهاية بنفس القوى اللي حاول يسيطر عليها. مونولوجاته تكشف رجل واعي وايد بفساده الأخلاقي بس ما يقدر يوقف نفسه.',
  "Macbeth's wife and co-conspirator. She is the driving force behind Duncan's murder, manipulating her husband by questioning his manhood. She calls on dark spirits to \"unsex\" her and fill her with cruelty. However, her iron resolve crumbles as guilt takes hold, leading to sleepwalking, madness, and implied suicide. Her arc from fierce ambition to psychological destruction is one of Shakespeare's greatest character studies.":
    'زوجة ماكبث وشريكته في المؤامرة. هي القوة الدافعة وراء قتل دنكان، وتلاعبت بزوجها عن طريق التشكيك في رجولته. تستنجد بالأرواح المظلمة عشان "تنزع أنوثتها" وتملأها بالقسوة. لكن إرادتها الحديدية تنهار لمّا الذنب يسيطر، وتنتهي بالسير في النوم والجنون والانتحار المُلمَّح. قوسها من الطموح الشرس للدمار النفسي يُعدّ من أعظم دراسات الشخصيات عند شكسبير.',
  "Macbeth's fellow general and moral foil. He hears the same prophecy but responds with caution rather than ambition. He warns that \"the instruments of darkness tell us truths, to betray's in deepest consequence.\" After Duncan's murder, he suspects Macbeth but does not act. His murder by Macbeth's hired assassins and his ghost's appearance at the banquet serve as physical manifestations of Macbeth's guilt.":
    'جنرال زميل لماكبث ومرآة أخلاقية له. يسمع نفس النبوءة بس يردّ بالحذر مو الطموح. يحذّر إن "أدوات الظلام تخبرنا حقائق لتخوننا في أعمق العواقب." بعد جريمة دنكان يشكّ في ماكبث بس ما يتحرّك. اغتياله بأيدي قتلة ماكبث المأجورين وظهور شبحه في المأدبة تجسّد ذنب ماكبث بصورة ملموسة.',
  "The Thane of Fife and the play's agent of justice. He is the first to discover Duncan's body and refuses to attend Macbeth's coronation. After his family is slaughtered on Macbeth's orders, he joins Malcolm in England and leads the army that defeats Macbeth. His caesarean birth fulfils the witches' prophecy, and his grief for his family offers an alternative model of masculinity.":
    'ثاين فايف ووكيل العدالة في المسرحية. هو أوّل من يكتشف جثة دنكان ويرفض حضور تتويج ماكبث. بعد ذبح عائلته بأوامر ماكبث، ينضمّ لمالكولم في إنجلترا ويقود الجيش اللي يهزم ماكبث. ولادته القيصرية تحقّق نبوءة الساحرات، وحزنه على عائلته يقدّم نموذج بديل للرجولة.',
  'The gracious and trusting King of Scotland whose murder sets the tragedy in motion. He represents the divinely ordained order and is presented as generous and virtuous. His fatal flaw is excessive trust -- he cannot read treachery in faces. His murder disrupts nature itself, with storms, earthquakes, and unnatural darkness following his death.':
    'ملك اسكتلندا الكريم والمتسامح اللي اغتياله يفجّر التراجيديا. يمثّل النظام المعيّن إلهيّاً ويُقدَّم كرجل سخي وفاضل. عيبه القاتل ثقته الزائدة — ما يقدر يقرأ الخيانة في الوجوه. اغتياله يخلّ بالطبيعة نفسها: عواصف وزلازل وظلام غير طبيعي تتبع موته.',
  'Three supernatural beings who prophesy Macbeth\'s rise and fall. They open the play with "Fair is foul, and foul is fair," establishing the theme of moral inversion. They speak in trochaic tetrameter, marking them as outside the natural order. Their prophecies are technically true but deliberately misleading, using equivocation to give Macbeth false confidence. Shakespeare never resolves whether they cause Macbeth\'s downfall or merely predict it.':
    'ثلاثة كائنات خارقة تتنبّأ بصعود ماكبث وسقوطه. يفتتحن المسرحية بـ "Fair is foul, and foul is fair,"وترسّخن ثيمة قلب الأخلاق. يتكلّمن بوزن trochaic tetrameter اللي يميّزهن عن النظام الطبيعي. نبوءاتهن صحيحة حرفياً بس مضلّلة عن قصد، يستخدمن المراوغة عشان يعطن ماكبث ثقة كاذبة. شكسبير ما يحسم أبداً إذا كنّ يتسبّبن في سقوط ماكبث أو فقط يتنبّأن به.',
  "Duncan's eldest son and rightful heir to the Scottish throne. He initially flees after his father's murder but matures into a shrewd and cautious leader. He tests Macduff's loyalty by pretending to be riddled with vices, demonstrating political wisdom his father lacked. His restoration as king at the play's end represents the triumph of legitimate order over tyranny.":
    'الابن الأكبر لدنكان ووريث العرش الاسكتلندي الشرعي. يهرب أول الأمر بعد اغتيال أبوه، بس ينضج ليصير قائد حذر وذكي. يختبر ولاء ماكدف عن طريق التظاهر بأنه مليان عيوب، ويظهر حكمة سياسية ما كانت عند أبوه. عودته للعرش في نهاية المسرحية تمثّل انتصار النظام الشرعي على الطغيان.',
  "Macduff's wife, who appears briefly before being murdered with her children on Macbeth's orders. Her scene with her son provides the play's most emotionally devastating moment and illustrates the innocent victims of Macbeth's tyranny. Her murder marks Macbeth's complete moral degeneration -- he has moved from killing a king to slaughtering women and children.":
    'زوجة ماكدف، تظهر باختصار قبل أن تُقتل مع أطفالها بأوامر ماكبث. مشهدها مع ابنها يقدّم أكثر اللحظات تدميراً عاطفياً في المسرحية ويوضّح الضحايا الأبرياء لطغيان ماكبث. اغتيالها يعلّم الانحطاط الأخلاقي الكامل لماكبث — انتقل من قتل ملك إلى ذبح النساء والأطفال.',

  // ─── Theme names ────────────────────────────────────────────────
  Ambition: 'الطموح',
  Fate: 'القدر',
  Guilt: 'الذنب',
  'The Supernatural': 'الخوارق',
  'Kingship and Power': 'الملوكية والسلطة',
  'Appearance vs Reality': 'الظاهر مقابل الحقيقة',
  'Gender and Masculinity': 'الجندر والذكورية',

  // ─── Theme descriptions ─────────────────────────────────────────
  "Ambition is the play's central engine. Macbeth's \"vaulting ambition\" drives him to murder; Lady Macbeth's hunger for status drives her to invoke evil; even Banquo is tempted (though he resists). Shakespeare presents ambition not as inherently evil but as dangerous when divorced from moral restraint. The play warns Jacobean audiences that ambition unchecked by virtue or divine law leads to tyranny and self-destruction.":
    'الطموح هو المحرّك المركزي للمسرحية. "Vaulting ambition" مال ماكبث تدفعه للقتل؛ جوع ليدي ماكبث للمكانة يدفعها لاستحضار الشرّ؛ حتى بانكو يتعرّض للإغواء (مع إنه يقاوم). شكسبير يقدّم الطموح مو شر بطبعه، بس خطر لمّا ينفصل عن الكوابح الأخلاقية. المسرحية تحذّر جمهور الجاكوبيين إن الطموح اللي ما يلجمه فضيلة ولا شريعة إلهية يقود للطغيان وتدمير الذات.',
  "The witches' prophecies raise the play's central philosophical question: do humans have free will, or are their lives predetermined? Macbeth treats the prophecy of kingship as inevitable and acts to fulfil it, but Banquo, who hears the same prophecies, does not murder anyone. Shakespeare suggests that prophecy reveals possibilities, but choice determines outcomes. Macbeth's tragedy is that he interprets prediction as obligation, choosing to make the prophecy true through evil action.":
    'نبوءات الساحرات ترفع السؤال الفلسفي الجوهري في المسرحية: هل الإنسان عنده إرادة حرة، أو حياته مكتوبة سلفاً؟ ماكبث يتعامل مع نبوءة الملك كأنها حتمية ويتحرّك ليحقّقها، بس بانكو اللي يسمع نفس النبوءات ما يقتل أحداً. شكسبير يلمّح إن النبوءة تكشف احتمالات، لكن الاختيار يحدّد النتائج. تراجيديا ماكبث إنه يفسّر التنبّؤ كالتزام، ويختار تحقيق النبوءة عبر الفعل الشرير.',
  'Guilt pervades the play from the moment Macbeth kills Duncan. His hallucination of a floating dagger, his inability to say "Amen," and the voice crying "Sleep no more!" reveal a conscience that resists what ambition demands. Lady Macbeth appears invulnerable at first, dismissing guilt with "A little water clears us of this deed," but her sleepwalking scene reveals guilt erupting from the unconscious. Shakespeare uses guilt as evidence of a moral order that exists regardless of whether characters acknowledge it.':
    'الذنب يغمر المسرحية من اللحظة اللي ماكبث يقتل فيها دنكان. هلوسته بالخنجر الطائر، وعجزه عن قول "Amen,"والصوت اللي يصرخ "Sleep no more!"تكشف ضميراً يقاوم ما يطلبه الطموح. ليدي ماكبث تبدو محصّنة أول الأمر، وتطرد الذنب بقولها "A little water clears us of this deed,"بس مشهد سيرها في النوم يكشف الذنب وهو ينفجر من اللاوعي. شكسبير يستخدم الذنب كدليل على نظام أخلاقي موجود سواء اعترفت به الشخصيات أو ما اعترفت.',
  "The supernatural suffuses every level of the play. Shakespeare uses it to create atmosphere, drive the plot, and raise questions about fate and free will. The witches' prophecies, the floating dagger, Banquo's ghost, and Lady Macbeth's invocation of spirits all blur the boundary between natural and supernatural. Crucially, Shakespeare refuses to resolve the ambiguity: do the witches cause events or merely predict them? This deliberate uncertainty is central to the play's power.":
    'الخوارق تتغلغل في كل مستوى من مستويات المسرحية. شكسبير يستخدمها لخلق أجواء وتحريك الحبكة ورفع أسئلة عن القدر والإرادة. نبوءات الساحرات، الخنجر الطائر، شبح بانكو، واستحضار ليدي ماكبث للأرواح — كلها تضبّب الحدّ بين الطبيعي والخارق. والأهم إن شكسبير يرفض حسم الالتباس: هل الساحرات يتسبّبن في الأحداث أو يتنبّأن بها بس؟ هذا الالتباس المتعمَّد هو جوهر قوة المسرحية.',
  'The play contrasts three models of kingship. Duncan embodies the gracious, divinely appointed monarch but is fatally trusting. Macbeth rules through fear and violence, with no legitimate claim. Malcolm represents a synthesis: virtue combined with political shrewdness. The play endorses the doctrine of the Divine Right of Kings -- nature itself rebels when the legitimate king is murdered, and order is only restored when the rightful heir takes the throne.':
    'المسرحية تقارن بين ثلاث نماذج للملوكية. دنكان يجسّد الملك الكريم المعيّن إلهيّاً بس ثقته مفرطة لدرجة قاتلة. ماكبث يحكم بالخوف والعنف بدون أي حق شرعي. مالكولم يمثّل التركيب: فضيلة مع ذكاء سياسي. المسرحية تتبنّى عقيدة الحق الإلهي للملوك — الطبيعة نفسها تثور لمّا يُقتل الملك الشرعي، والنظام ما يعود إلا لمّا الوريث الحق يأخذ العرش.',
  'The gap between appearance and reality is the play\'s foundational theme. "Fair is foul, and foul is fair." Nothing is what it seems: the witches\' prophecies appear promising but deliver destruction; Macbeth appears loyal while plotting regicide; Lady Macbeth instructs deception ("look like the innocent flower, but be the serpent under\'t"). The motif of equivocation had particular resonance after the Gunpowder Plot, when the doctrine of equivocation was exposed at trial.':
    'الفجوة بين الظاهر والحقيقة هي الثيمة الأساسية للمسرحية. "Fair is foul, and foul is fair."ولا شي على ما يبدو: نبوءات الساحرات تبدو واعدة بس تنتهي بالدمار؛ ماكبث يبدو وفيّاً وهو يخطّط لقتل الملك؛ ليدي ماكبث تعلّم الخداع ("look like the innocent flower, but be the serpent under\'t"). موتيف المراوغة عنده صدى خاص بعد مؤامرة البارود، لمّا انكشفت عقيدة المراوغة في المحاكمة.',
  'Shakespeare interrogates ideas of masculinity throughout the play. Lady Macbeth equates manhood with violence, taunting: "When you durst do it, then you were a man." She asks to be "unsexed," rejecting femininity. However, Macduff offers an alternative model: "I must also feel it as a man," insisting that genuine masculinity includes emotional depth. Macbeth himself is trapped by toxic masculinity, murdering partly to prove his manhood. Lady Macbeth\'s eventual breakdown suggests that rejecting feminine qualities comes at devastating psychological cost.':
    'شكسبير يستجوب أفكار الذكورية على طول المسرحية. ليدي ماكبث تساوي الرجولة بالعنف، وتغايظ: "When you durst do it, then you were a man."تطلب أن تكون "unsexed,"رافضةً الأنوثة. لكن ماكدف يقدّم نموذج بديل: "I must also feel it as a man,"مصرّاً إن الرجولة الحقّة تتضمّن العمق العاطفي. ماكبث نفسه محبوس داخل ذكورية سامّة، يقتل جزئياً ليثبت رجولته. انهيار ليدي ماكبث في النهاية يقترح إن رفض الصفات الأنثوية له ثمن نفسي مدمّر.',
}

/**
 * Return a shallow-translated copy of macbethData given the current
 * locale. EN locale passes the data through unchanged. For AR, any
 * field whose EN string appears in MACBETH_AR is swapped; unknown
 * strings fall through to EN so a missing translation degrades to
 * the original rather than rendering blank.
 *
 * The play `content` HTML stays in English at every locale — that's
 * the Shakespeare source the student is reading. Same for character
 * keyQuotes and theme evidence arrays: those are direct quotations
 * and would lose pedagogical value if translated.
 */
export function translateMacbethData(data: TextData, locale: Locale): TextData {
  if (locale !== 'ar') return data
  const tr = (en: string): string => MACBETH_AR[en] ?? en
  return {
    ...data,
    title: tr(data.title),
    author: tr(data.author),
    sections: data.sections.map((s) => ({ ...s, title: tr(s.title) })),
    characters: data.characters.map((c) => ({
      ...c,
      name: tr(c.name),
      description: tr(c.description),
    })),
    themes: data.themes.map((th) => ({
      ...th,
      name: tr(th.name),
      description: tr(th.description),
    })),
  }
}
