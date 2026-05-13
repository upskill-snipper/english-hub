// @ts-nocheck
/**
 * Khaleeji-Arabic (Gulf-dialect) translated vocabulary decks for the
 * highest-priority GCSE / IGCSE English revision topics.
 *
 * Conventions
 * -----------
 * - `front` (term) is ALWAYS kept in English — students need the English term
 *   for the exam.
 * - `back` (definition) keeps the existing English explanation untouched.
 * - `backAr` carries a Khaleeji explanatory-prose translation of the
 *   definition. Literary-technique names are transliterated (Latin
 *   keepalive) so that students can map term → Arabic concept without
 *   losing the technical label.
 * - `frontAr` carries the transliteration when one is useful.
 * - Example sentences inside the English definition are intentionally
 *   left in English (the student is studying English exam answers); the
 *   Khaleeji prose explains the mechanics around them.
 * - Pronouns / verb forms are binary M / F as required by gender policy:
 *   when addressing a student, default is masculine ("راح تشوف") but female
 *   form is given in parentheses where the rendering is materially different
 *   ("راح تشوف (راح تشوفين)").
 *
 * Decks (top 5 highest-priority)
 * ------------------------------
 * 1. Macbeth — key terms (15 cards)
 * 2. An Inspector Calls — key terms (15 cards)
 * 3. A Christmas Carol — key terms (15 cards)
 * 4. Power & Conflict poetry technique vocab (15 cards)
 * 5. GCSE English Language analytical vocabulary — rhetorical devices &
 *    sentence types (15 cards)
 */

import type { FlashcardDeck } from './flashcard-data'

export const khaleejiVocabDecks: FlashcardDeck[] = [
  // ────────────────────────────────────────────────────────────────────
  // DECK 1 — MACBETH key terms (15 cards)
  // ────────────────────────────────────────────────────────────────────
  {
    id: 'kh-macbeth-key-terms',
    title: 'Macbeth — Key Terms (Khaleeji)',
    description:
      'Mustalahaat asasiyya li-Macbeth maʿ sharḥ Khaleeji — 15 key terms for Macbeth with Khaleeji explanations.',
    category: 'Set Texts',
    board: 'All',
    cards: [
      {
        id: 'kh-mb-1',
        front: 'Tragic Hero',
        frontAr: 'البطل التراجيدي (Tragic Hero)',
        back: 'Definition: A noble character whose fatal flaw (hamartia) leads to their downfall.\n\nExample essay sentence: "Macbeth begins as a celebrated warrior but his ambition transforms him into a tyrant, fulfilling the classical pattern of the tragic hero."\n\nWhen to use it: To frame Macbeth\'s arc using the conventions Shakespeare inherited from Greek tragedy.',
        backAr:
          'التعريف: شخصية شريفة و عندها مكانة عالية، بس عندها عيب داخلي (يسمونه "hamartia") يجرّها بالنهاية إلى السقوط و الدمار. يعني البطل مو شرير من البداية، لكن غلطته الكبيرة تخرّب كل شي.\n\nالاستخدام: تستخدمه (تستخدمينه) عشان توضّح إن ماكبث ما هو شرير عادي — هو بطل تراجيدي كلاسيكي على الطريقة الإغريقية، شجاع و قوي بس طموحه دمّره.\n\nمثال جملة (تنحفظ بالإنجليزي): "Macbeth begins as a celebrated warrior but his ambition transforms him into a tyrant, fulfilling the classical pattern of the tragic hero."',
      },
      {
        id: 'kh-mb-2',
        front: 'Hamartia',
        frontAr: 'هامارتيا (Hamartia)',
        back: "Definition: The fatal flaw or error of judgement that causes the tragic hero's downfall.\n\nExample essay sentence: \"Macbeth's hamartia is his 'vaulting ambition,' which propels him to murder Duncan and ultimately destroys him.\"\n\nWhen to use it: When pinpointing the single quality that triggers the protagonist's ruin.",
        backAr:
          'التعريف: الكلمة إغريقية، و معناها العيب القاتل أو الخطأ بالحكم اللي يسبب سقوط البطل. مو أي صفة سيئة، لا — هذي الصفة بالذات اللي تجرّه إلى الكارثة.\n\nبالنسبة لماكبث، الهامارتيا حقّه هو "vaulting ambition" — يعني الطموح المفرط اللي ما يعرف حدود. هو شجاع و وفي، بس طمعه بالعرش هو اللي خرّب كل شي.\n\nالاستخدام: استخدمها (استخدميها) لمّا تبغى تحدّد بالضبط وش الصفة الواحدة اللي بدأت سلسلة الكوارث بالمسرحية.',
      },
      {
        id: 'kh-mb-3',
        front: 'Regicide',
        frontAr: 'قتل الملك / ريجيسايد (Regicide)',
        back: 'Definition: The deliberate killing of a king or monarch.\n\nExample essay sentence: "The regicide of Duncan is presented as a violation of cosmic order, not merely a political crime."\n\nWhen to use it: When discussing the murder of Duncan in Act 2 — emphasises the religious and political weight of the act.',
        backAr:
          'التعريف: الكلمة لاتينية و معناها قتل الملك. مو مجرد قتل عادي — هذي جريمة لها وزن ديني و سياسي بنفس الوقت، لأن الملك بعصر شكسبير كان يُعتبر مختار من الله (يسمونه "Divine Right of Kings").\n\nلمّا ماكبث يقتل دنكان، هو ما كسر قانون بشري بس — كسر النظام الكوني كله. عشان جذي تشوف (تشوفين) الطبيعة تصير غير طبيعية بعدها: الخيل تأكل بعضها، البوم يقتل الصقر، الظلام يغطي النهار.\n\nالاستخدام: استخدم (استخدمي) المصطلح لمّا تبغى توضّح إن جريمة ماكبث أكبر من مجرد قتل سياسي.',
      },
      {
        id: 'kh-mb-4',
        front: 'The Divine Right of Kings',
        frontAr: 'الحق الإلهي للملوك',
        back: 'Definition: The Jacobean belief that monarchs are appointed by God and that rebellion against them is a sin against divine order.\n\nExample essay sentence: "By violating the Divine Right of Kings, Macbeth disturbs the Great Chain of Being, and nature itself rebels."\n\nWhen to use it: When contextualising why regicide is treated as cosmic and not just legal.',
        backAr:
          'التعريف: عقيدة كانت سائدة بعصر الملك جيمس الأول (Jacobean era) — يعتقدون إن الملك مختار من الله مباشرة، و إن طاعته واجب ديني. أي تمرّد عليه يُعتبر تمرّد على الله نفسه.\n\nشكسبير كتب المسرحية و الملك جيمس على العرش، و جيمس نفسه كتب كتاب عن هالموضوع. عشان جذي شكسبير حريص يبيّن إن قتل دنكان كارثة دينية، مو مجرد سياسة.\n\nالاستخدام: تستخدمها (تستخدمينها) عشان تشرح ليش الجو الطبيعي يتقلب بعد القتل، و ليش ماكبث ما يقدر يهنأ بالحكم.',
      },
      {
        id: 'kh-mb-5',
        front: 'Soliloquy',
        frontAr: 'سوليلوكي / مونولوج داخلي (Soliloquy)',
        back: "Definition: A speech in which a character, alone on stage, reveals their inner thoughts directly to the audience.\n\nExample essay sentence: \"In the 'Is this a dagger' soliloquy, Macbeth's fractured syntax exposes a mind being torn apart by guilt and desire.\"\n\nWhen to use it: When analysing private moments where the audience hears the character's real, unfiltered thoughts.",
        backAr:
          'التعريف: خطاب طويل تلقيه الشخصية و هي وحدها على المسرح. بهالحالة الشخصية تكشف أفكارها الداخلية مباشرة للجمهور — مالها رقيب، ما تخفي شي.\n\nالسوليلوكي مهم جداً بماكبث لأنه يخلّينا نشوف الصراع الداخلي للبطل: التردد، الذنب، الخوف، الطموح. كل واحد من هذي ينكشف بلحظات الوحدة على المسرح.\n\nالاستخدام: استخدمه (استخدميه) لمّا تحلّل أي مشهد يكون فيه ماكبث (أو الليدي ماكبث) لحاله يكلّم نفسه. أمثلة شهيرة: "Is this a dagger?" و "Tomorrow, and tomorrow, and tomorrow."',
      },
      {
        id: 'kh-mb-6',
        front: 'Dramatic Irony',
        frontAr: 'المفارقة الدرامية (Dramatic Irony)',
        back: "Definition: When the audience knows something the characters do not, creating tension or pathos.\n\nExample essay sentence: \"Duncan's praise of Macbeth's castle as having a 'pleasant seat' is laced with dramatic irony — the audience knows he is about to be murdered within those walls.\"\n\nWhen to use it: When the gap between what a character believes and what we know creates emotional or moral weight.",
        backAr:
          'التعريف: لمّا يكون الجمهور عارف معلومة الشخصية ما تعرفها. هالفرق بالمعرفة يخلق توتر، أو يضحّك، أو يكسر القلب — على حسب الموقف.\n\nمثال قوي: دنكان يدخل قلعة ماكبث و يمدحها و يقول إنها مكان لطيف، بينما إحنا الجمهور عارفين إنه راح يموت داخلها بنفس الليلة. هالفجوة بين سذاجة دنكان و علم الجمهور تخلق توتر مرعب.\n\nالاستخدام: استخدمها (استخدميها) لمّا يكون فيه فرق واضح بين اللي تعتقده الشخصية و اللي يعرفه الجمهور.',
      },
      {
        id: 'kh-mb-7',
        front: 'Foreshadowing',
        frontAr: 'الإنذار المسبق / فورشادوينج (Foreshadowing)',
        back: "Definition: Hints or clues that prepare the audience for events later in the play.\n\nExample essay sentence: \"The witches' equivocal prophecy — 'Fair is foul, and foul is fair' — foreshadows a world in which moral categories are inverted.\"\n\nWhen to use it: When tracing how Shakespeare plants warnings or expectations early on.",
        backAr:
          'التعريف: لمحات و تلميحات يحطّها الكاتب بداية المسرحية عشان يحضّر الجمهور لأحداث جاية. مو إعلان مباشر، لا — هي إشارات خفية تكتشف معناها بعدين.\n\nبماكبث، السحرة من الفصل الأول يقولون "Fair is foul, and foul is fair" — هالعبارة تلمّح إن العالم اللي راح نشوفه عالم مقلوب، فيه الجميل قبيح و القبيح جميل. كل اللي يصير بعدها يأكد هالفكرة.\n\nالاستخدام: استخدمه (استخدميه) لمّا تتبّع كيف شكسبير يزرع بذور أحداث المستقبل بشكل مبكر.',
      },
      {
        id: 'kh-mb-8',
        front: 'Pathetic Fallacy',
        frontAr: 'باثيتيك فالاسي / الانفعال المسقط على الطبيعة (Pathetic Fallacy)',
        back: "Definition: Using natural phenomena (weather, environment) to reflect a character's mood or moral state.\n\nExample essay sentence: \"The 'thunder and lightning' that opens Act 1 establishes a moral universe in turmoil, mirroring the violence to come.\"\n\nWhen to use it: Whenever weather or natural events seem to mirror or comment on human action.",
        backAr:
          'التعريف: تقنية أدبية يستخدم فيها الكاتب عناصر الطبيعة (الجو، البرق، الرعد، الظلام) عشان تعكس مشاعر الشخصية أو الحالة الأخلاقية للعالم بالمسرحية.\n\nماكبث تبدأ بـ "thunder and lightning" — رعد و برق. هذا مو وصف جوّي عابر، هذا إشارة إن العالم الأخلاقي مضطرب و إن الفوضى راح تنزل على المملكة. بكل مشهد إجرامي تقريباً، الجو يصير عاصف أو الليل يصير ثقيل.\n\nالاستخدام: استخدمها (استخدميها) لمّا تشوف الطقس أو الطبيعة تعكس وضع الشخصية النفسي أو الأخلاقي.',
      },
      {
        id: 'kh-mb-9',
        front: 'Motif',
        frontAr: 'موتيف / موضوع متكرر (Motif)',
        back: 'Definition: A recurring image, idea, or symbol that develops a play\'s themes.\n\nExample essay sentence: "The motif of blood evolves from a badge of honour in Act 1 to a stain Lady Macbeth cannot wash away — tracing the descent into guilt."\n\nWhen to use it: When tracking an image or idea that appears repeatedly and gains layered meaning.',
        backAr:
          'التعريف: صورة أو فكرة أو رمز يتكرر عبر المسرحية و كل مرة يضيف معنى جديد. الموتيف مو مجرد ذكر مرتين — لازم يكون له حضور قوي و يتطوّر مع التيمة.\n\nأشهر موتيفات ماكبث: الدم. بالبداية الدم رمز شرف عسكري (دم الأعداء على درع ماكبث)، و بعدها يصير رمز ذنب (الليدي ماكبث تحاول تغسل الدم من يدها). هالتحوّل وحده يحكي قصة المسرحية كلها.\n\nموتيفات ثانية: الظلام، الملابس اللي ما تناسب صاحبها، النوم و الحلم.\n\nالاستخدام: استخدمه (استخدميه) لمّا تتبّع تطوّر صورة معينة من بداية المسرحية لنهايتها.',
      },
      {
        id: 'kh-mb-10',
        front: 'Equivocation',
        frontAr: 'إيكويفوكيشن / المراوغة بالكلام (Equivocation)',
        back: "Definition: The use of ambiguous, double-meaning language to mislead without telling an outright lie.\n\nExample essay sentence: \"The witches' equivocation — promising Macbeth he cannot be killed 'by man of woman born' — gives him false security while concealing the literal truth.\"\n\nWhen to use it: When analysing the witches' prophecies or any speech designed to deceive through ambiguity.",
        backAr:
          'التعريف: استخدام كلام له أكثر من معنى عشان تخدع الطرف الثاني بدون ما تكذب صراحة. الكلام ظاهره صحيح، بس معناه الحقيقي مختلف تماماً.\n\nالسحرة سيّدات هالفن: يقولون لماكبث إنه ما راح يُقتل من رجل ولدته امرأة — و هو يفهمها إنه محصّن، بينما الحقيقة إن ماكدف ولد بعملية قيصرية (مو ولادة طبيعية)، فينطبق عليه الشرط.\n\nالعصر الجاكوبي كان مهتم بهالموضوع بسبب محاكمات اليسوعيين اللي استخدموا الـ equivocation عشان يتهرّبوا من الاتهام.\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل لغة السحرة أو أي كلام مخادع بطريقة ذكية.',
      },
      {
        id: 'kh-mb-11',
        front: 'Hubris',
        frontAr: 'هوبريس / الكبرياء المفرط (Hubris)',
        back: 'Definition: Excessive pride or self-confidence that defies the gods or natural order — a classical concept linked to tragic downfall.\n\nExample essay sentence: "By Act 5, Macbeth\'s hubris is on full display: he believes himself invulnerable, mocking the very prophecies that have led him here."\n\nWhen to use it: When highlighting moments where a character\'s arrogance brings them closer to ruin.',
        backAr:
          'التعريف: كلمة إغريقية معناها الكبرياء المفرط — تشعر بنفسك أعظم من البشر العاديين و تتحدّى قوى أكبر منك. بالتراجيديا الكلاسيكية، الهوبريس دايماً يجيب الكارثة.\n\nماكبث بالفصل الخامس وصل لذروة الهوبريس: يعتقد إنه ما يُقهر، يستخفّ بنبوءات السحرة، يدخل المعركة و هو متأكد إنه فوق البشر. و بالضبط هالكبرياء هي اللي عمته عن المعنى الحقيقي للنبوءات.\n\nالفرق بينه و بين الهامارتيا: الهامارتيا هي العيب الجذري (الطموح)، الهوبريس هي التضخّم النفسي اللي يجي معاه.\n\nالاستخدام: استخدمها (استخدميها) لتوصف لحظات الغرور قبل السقوط.',
      },
      {
        id: 'kh-mb-12',
        front: 'Catharsis',
        frontAr: 'كاثارسيس / التطهير العاطفي (Catharsis)',
        back: "Definition: The emotional release the audience experiences at the end of a tragedy — pity and fear are purged.\n\nExample essay sentence: \"Macbeth's death restores moral order and provides the audience with the catharsis Aristotle identifies as the goal of tragedy.\"\n\nWhen to use it: When discussing the audience's response to the play's ending.",
        backAr:
          'التعريف: مصطلح أرسطي معناه التطهير العاطفي اللي يحس فيه الجمهور بنهاية التراجيديا. خلال المسرحية إحنا نتعاطف مع البطل و نخاف معاه، و لمّا يموت بالنهاية، تنطلق هالمشاعر و نحس براحة و توازن.\n\nبماكبث، موت البطل يردّ النظام الأخلاقي للمملكة، و الجمهور يطلع من المسرح مرتاح إن العدالة تحقّقت — مع إن الطريق لها كان مأساوي.\n\nالاستخدام: استخدمها (استخدميها) بفقرة الخاتمة عشان تشرح أثر النهاية على الجمهور.',
      },
      {
        id: 'kh-mb-13',
        front: 'The Supernatural',
        frontAr: 'الخوارق / السوبرناتشورال (The Supernatural)',
        back: "Definition: Forces or beings beyond the natural world — witches, ghosts, prophecies, omens.\n\nExample essay sentence: \"Shakespeare uses the supernatural to externalise Macbeth's inner darkness, blurring the line between fate and personal choice.\"\n\nWhen to use it: When discussing the witches, Banquo's ghost, or any of the play's many omens.\n\nKey debate: Are the witches causing Macbeth's actions, or merely revealing what is already inside him?",
        backAr:
          'التعريف: قوى أو كائنات خارج العالم الطبيعي — السحرة، الأشباح، النبوءات، الإشارات الغيبية. شكسبير يحطّها بالمسرحية عشان يخلق جو رعب و يكسر حدود الواقع.\n\nبماكبث، الخوارق ما تقتصر على السحرة — فيه شبح بانكو، فيه الخنجر اللي يطفّ بالهواء، فيه الليلة اللي يصير فيها النهار ظلام. كل هذي عناصر تخلق إحساس إن العالم اتقلب رأساً على عقب.\n\nنقاش مهم: هل السحرة هم اللي خلوا ماكبث يقتل، و إلا هم بس كشفوا اللي كان داخله أصلاً؟ هالسؤال هو لبّ المسرحية.\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل دور السحرة و الأشباح، و ربط القدر بالاختيار الشخصي.',
      },
      {
        id: 'kh-mb-14',
        front: 'Ambition',
        frontAr: 'الطموح',
        back: 'Definition: The driving desire for power or achievement — Macbeth\'s central theme and arguably its central warning.\n\nExample essay sentence: "Shakespeare presents ambition as a corrosive force: it elevates Macbeth politically while destroying him morally."\n\nWhen to use it: As the play\'s thematic anchor — almost every essay question on Macbeth links back to this.',
        backAr:
          'التعريف: الرغبة الجارفة بالسلطة و الإنجاز. الطموح بحد ذاته مو شر — صار شر بماكبث لأنه ما له حدود. شكسبير يفرّق بين طموح مشروع (تطلب الترقية بالاستحقاق) و طموح متوحش يدوس على كل شي.\n\nماكبث نفسه يصفه بـ "vaulting ambition" — يعني طموح يقفز فوق العقل و الأخلاق. و هذا اللي يدمّره.\n\nالليدي ماكبث طموحها أشد و أكثر برودة بالبداية، بس هي كمان تنكسر بالنهاية، اللي يبيّن إن الطموح المفرط ما يميّز بين رجال و نساء.\n\nالاستخدام: استخدمها (استخدميها) كمحور أي مقال — تقريباً كل سؤال امتحان على ماكبث يرجع لهالتيمة.',
      },
      {
        id: 'kh-mb-15',
        front: 'Tyranny',
        frontAr: 'الطغيان (Tyranny)',
        back: 'Definition: Cruel, oppressive rule — what Macbeth becomes after seizing the throne.\n\nExample essay sentence: "By Act 4, Macbeth has descended from legitimate king to outright tyrant — ordering the slaughter of women and children to silence opposition."\n\nWhen to use it: When tracking Macbeth\'s political decline and Shakespeare\'s warning about unchecked power.',
        backAr:
          'التعريف: الحكم القاسي الظالم اللي يعتمد على القمع و الخوف. هذا اللي يصير له ماكبث بعد ما يستلم العرش. ما يحكم بالعدل — يحكم بالقتل و الجواسيس و التهديد.\n\nبالفصل الرابع، يأمر بقتل عائلة ماكدف كاملة، نساء و أطفال، بدون أي مبرّر عسكري. هذي قمة الطغيان: يستخدم العنف ضد العزّل عشان يخوّف بقية المعارضين.\n\nشكسبير يحذّر جمهوره: السلطة بدون رقابة دينية أو أخلاقية تتحوّل دايماً إلى طغيان.\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل تحوّل ماكبث من قائد مشرّف إلى حاكم وحشي.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  // DECK 2 — AN INSPECTOR CALLS key terms (15 cards)
  // ────────────────────────────────────────────────────────────────────
  {
    id: 'kh-aic-key-terms',
    title: 'An Inspector Calls — Key Terms (Khaleeji)',
    description:
      'Mustalahaat asasiyya li-An Inspector Calls maʿ sharḥ Khaleeji — 15 key terms with Khaleeji explanations.',
    category: 'Set Texts',
    board: 'All',
    cards: [
      {
        id: 'kh-aic-1',
        front: 'Morality Play',
        frontAr: 'المسرحية الأخلاقية (Morality Play)',
        back: 'Definition: A medieval dramatic form designed to teach a moral lesson, in which characters often embody abstract virtues or vices.\n\nExample essay sentence: "Priestley reworks the medieval morality play, casting the Inspector as a modern conscience and the Birlings as personifications of upper-class sin."\n\nWhen to use it: When framing the play\'s didactic structure and the Inspector\'s role as a moral teacher.',
        backAr:
          'التعريف: شكل مسرحي أصله بالعصور الوسطى الأوروبية، هدفه تعليم الجمهور درس أخلاقي. الشخصيات بهالنوع من المسرحيات ما تكون بشر طبيعيين دايماً — تمثّل فضائل و رذائل مجرّدة (الكبرياء، الجشع، التواضع).\n\nبريستلي يأخذ هالقالب القديم و يحدّثه: المفتش جول يلعب دور الضمير، و البيرلنغز يمثّلون رذائل الطبقة العليا — الجشع (السيد بيرلنغ)، الغرور (السيدة بيرلنغ)، اللامسؤولية (جيرالد و إيريك).\n\nالاستخدام: استخدمها (استخدميها) لمّا تشرح ليش المسرحية تعطي درس واضح، و ليش المفتش يحكي زي الواعظ.',
      },
      {
        id: 'kh-aic-2',
        front: 'Socialism',
        frontAr: 'الاشتراكية (Socialism)',
        back: "Definition: A political philosophy advocating collective responsibility, social equality, and shared ownership of resources.\n\nExample essay sentence: \"Priestley's socialism is most visible in the Inspector's final speech: 'We are members of one body. We are responsible for each other.'\"\n\nWhen to use it: When discussing Priestley's political message and his use of the Inspector as a mouthpiece.",
        backAr:
          'التعريف: فلسفة سياسية تنادي بالمسؤولية الجماعية و المساواة الاجتماعية و إن ثروات المجتمع تتوزّع بعدل. بريستلي نفسه كان اشتراكي ملتزم و كتب المسرحية ١٩٤٥ بنهاية الحرب العالمية الثانية عشان يدفع البلد لبناء مجتمع أعدل.\n\nالمفتش جول هو لسان بريستلي بالمسرحية: خطبته الأخيرة "إحنا أعضاء جسد واحد، مسؤولين عن بعضنا" هي بيان اشتراكي بكل وضوح.\n\nبالمقابل، السيد بيرلنغ يمثّل الرأسمالية الأنانية: "كل واحد يهتم بنفسه و عائلته."\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل الرسالة السياسية للمسرحية، و ليش بريستلي اختار يكتبها لجمهور ١٩٤٥.',
      },
      {
        id: 'kh-aic-3',
        front: 'Capitalism',
        frontAr: 'الرأسمالية (Capitalism)',
        back: "Definition: An economic system based on private ownership, profit motive, and individual enterprise — the ideology Priestley critiques through Mr Birling.\n\nExample essay sentence: \"Mr Birling embodies the worst of Edwardian capitalism: he treats workers as costs to be minimised and dismisses collective responsibility as the talk of 'cranks.'\"\n\nWhen to use it: When analysing Mr Birling's worldview or contrasting it with the Inspector's.",
        backAr:
          'التعريف: نظام اقتصادي يقوم على الملكية الخاصة و الربح و المنافسة الفردية. السيد بيرلنغ بالمسرحية نموذج كامل للرأسمالي الإدواردي: يشوف العمال مجرّد تكلفة لازم تنخفض، و الأرباح أهم من أي شي.\n\nبريستلي ينتقد الرأسمالية بشدة من خلال بيرلنغ — يخلّيه يقول كلام يعتقد إنه حكمة (إن السفينة تايتانك ما تغرق، إن ما فيه حرب جاية)، و إحنا الجمهور نعرف إنه غلطان. هالـ dramatic irony يحطّم مصداقيته السياسية.\n\nالاستخدام: استخدمها (استخدميها) كنقيض للاشتراكية، و عشان تحلّل شخصية السيد بيرلنغ و قيمه.',
      },
      {
        id: 'kh-aic-4',
        front: 'Dramatic Irony',
        frontAr: 'المفارقة الدرامية (Dramatic Irony)',
        back: "Definition: When the audience knows something the characters do not.\n\nExample essay sentence: \"Birling's confident prediction that 'the Titanic… is unsinkable' is devastating dramatic irony — the 1945 audience knows that the ship sank just months later.\"\n\nWhen to use it: When analysing Birling's many wrong predictions or the Inspector's prophetic warnings.",
        backAr:
          'التعريف: لمّا الجمهور يكون عارف معلومة الشخصية تجهلها. بـ "Inspector Calls" بريستلي يستخدم هالتقنية بطريقة عبقرية: المسرحية محطّمة على عام ١٩١٢، بس مكتوبة ١٩٤٥. يعني الجمهور عاش الحربين العالميتين و عارف كل اللي بيرلنغ يتنبّأ به غلط.\n\nبيرلنغ يقول: تايتانك ما تغرق (و إحنا عارفين إنها غرقت ١٩١٢). يقول: ما فيه حرب (إحنا عشنا حربين). يقول: المستقبل سلام و رخاء (إحنا خرجنا من خراب ١٩٤٥).\n\nهالمفارقة تدمّر مصداقية بيرلنغ السياسية قبل ما المفتش يدخل أصلاً.\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل أي تنبؤ من بيرلنغ، أو لحظات يكون فيها الجمهور يعرف أكثر من الشخصية.',
      },
      {
        id: 'kh-aic-5',
        front: 'Microcosm',
        frontAr: 'ميكروكوزم / عالم مصغّر (Microcosm)',
        back: 'Definition: A small unit (a family, a room) that represents a larger whole (society, a nation).\n\nExample essay sentence: "The Birling household functions as a microcosm of Edwardian Britain — each character embodies a different facet of upper-class hypocrisy."\n\nWhen to use it: When arguing that the family is meant to stand for society at large.',
        backAr:
          'التعريف: عالم مصغّر يمثّل عالم أكبر. بيت البيرلنغز بالمسرحية مو مجرّد عائلة — هو نموذج مصغّر لكل بريطانيا الإدواردية، و كل شخصية فيه تمثّل وجه من وجوه الطبقة العليا:\n\n- آرثر بيرلنغ: الرأسمالي الذكر\n- سيبيل بيرلنغ: المرأة الباردة المهتمة بالطبقة\n- شيلا: الجيل الصاعد القابل للتغيير\n- إيريك: السلوك المنحرف اللي تخبّيه الطبقة العليا\n- جيرالد: الاستغلال "النبيل" للنساء الفقيرات\n\nبريستلي يحطّ كل هالأنواع بغرفة طعام واحدة عشان يوصل رسالة: هذا مجتمع كامل بمكان واحد.\n\nالاستخدام: استخدمها (استخدميها) لمّا تشرح ليش العائلة معنى لها أبعد من ذاتها.',
      },
      {
        id: 'kh-aic-6',
        front: 'Collective Responsibility',
        frontAr: 'المسؤولية الجماعية',
        back: "Definition: The principle that everyone in society shares responsibility for the welfare of others.\n\nExample essay sentence: \"The Inspector's final lesson is collective responsibility: 'We don't live alone. We are members of one body.'\"\n\nWhen to use it: When analysing the play's central moral and political thesis.",
        backAr:
          'التعريف: الفكرة الأساسية اللي بريستلي يبغى يوصلها — إن كل واحد بالمجتمع مسؤول عن غيره، و إن أفعالنا الفردية لها أثر على ناس ما نعرفهم.\n\nالمفتش جول هو حامل هالرسالة: قصة إيفا سميث ما تخصّ شخص واحد — كل واحد من البيرلنغز ساهم بمأساتها بطريقة مختلفة:\n\n- آرثر فصلها\n- شيلا اشتكت عليها\n- جيرالد استغلّها\n- إيريك اعتدى عليها\n- سيبيل رفضتها لمّا طلبت المساعدة\n\nكل واحد يعتقد إن فعله بسيط، بس مجموع الأفعال قتل إنسانة. هذي هي المسؤولية الجماعية: ما تقدر تختفي وراء "أنا ما عملت كل شي."\n\nالاستخدام: استخدمها (استخدميها) كمحور المقال، خاصة مع شيلا و إيريك اللي يستوعبون الدرس.',
      },
      {
        id: 'kh-aic-7',
        front: 'Generational Divide',
        frontAr: 'الفجوة بين الأجيال',
        back: "Definition: The contrast between the older and younger characters' responses to the Inspector's message.\n\nExample essay sentence: \"Priestley dramatises a generational divide: while Sheila and Eric accept responsibility, their parents retreat into denial as soon as the Inspector leaves.\"\n\nWhen to use it: When comparing characters and arguing for Priestley's hope in the younger generation.",
        backAr:
          'التعريف: التباين الواضح بين رد فعل الجيل الأكبر (آرثر و سيبيل) و الجيل الأصغر (شيلا و إيريك) لما يتعلّمونه من المفتش.\n\nالكبار يرفضون التغيير و يتمسّكون بمواقفهم حتى بعد ما تنكشف الحقائق. أول ما يحسّون إن المفتش قد يكون مزيّف، يحتفلون و يرجعون لقيمهم القديمة.\n\nالصغار يتأثرون بعمق. شيلا تقول لأبوها: "ما يهم إذا كان حقيقي أو لا — اللي عملناه حقيقي." هذا الفرق الجوهري.\n\nبريستلي رسالته: التغيير ممكن، بس راح يجي من الجيل الجديد. هالرسالة كانت قوية لجمهور ١٩٤٥ اللي للتو خرج من حرب و عنده فرصة يبني مجتمع جديد.\n\nالاستخدام: استخدمها (استخدميها) لمّا تقارن بين شخصيات الكبار و الصغار.',
      },
      {
        id: 'kh-aic-8',
        front: 'Stage Directions',
        frontAr: 'تعليمات المسرح / ستيج دايركشنز (Stage Directions)',
        back: "Definition: The playwright's instructions about setting, lighting, sound, and actor movement — embedded in the text but not spoken aloud.\n\nExample essay sentence: \"Priestley's opening stage directions specify lighting that is 'pink and intimate' until the Inspector arrives, after which it becomes 'brighter and harder' — the moral spotlight has been switched on.\"\n\nWhen to use it: When analysing the visual and atmospheric dimension of the play.",
        backAr:
          'التعريف: التعليمات اللي يكتبها الكاتب المسرحي للمخرج و الممثلين — وصف الديكور، الإضاءة، الأصوات، حركة الممثلين. ما تُلفظ بصوت، بس لها تأثير ضخم على معنى المشهد.\n\nبريستلي يستخدمها بذكاء. بداية المسرحية الإضاءة "وردية و حميمة" (pink and intimate) — جو دافئ مزيّف. أول ما يدخل المفتش، الإضاءة تنقلب "أسطع و أقسى" (brighter and harder). فيه ضوء استجواب الحين، و البيت ما عاد ملجأ.\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل الجو البصري للمسرحية، خاصة وصف الديكور و الإضاءة بالفصل الأول.',
      },
      {
        id: 'kh-aic-9',
        front: 'Allegory',
        frontAr: 'أليجوري / تمثيل رمزي (Allegory)',
        back: 'Definition: A story in which characters and events stand for abstract ideas or moral principles.\n\nExample essay sentence: "The play can be read as an allegory: Eva Smith represents the working class as a whole, and her death indicts every member of the Birling family — and the system they uphold."\n\nWhen to use it: When arguing that the play\'s characters function on a symbolic as well as literal level.',
        backAr:
          'التعريف: قصة شخصياتها و أحداثها تمثّل أفكار مجرّدة أو مبادئ أخلاقية أكبر منها. مش مجرّد رمز واحد، بل النص كله مبني على هالطريقة.\n\nإيفا سميث ما هي شخصية واحدة — هي رمز لكل الطبقة العاملة المضطهدة. حتى اسمها يلمّح: "إيفا" قريب من "Eve" (حواء)، و "Smith" أكثر اسم عائلة شائع بإنجلترا. يعني هي كل امرأة عاملة، كل واحد منّا.\n\nالمفتش جول كمان يمكن قراءته كرمز: ضمير المجتمع، عدالة إلهية، روح إيفا نفسها — كل تفسير ممكن.\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل الأبعاد الرمزية للمسرحية و تحاجج إن المعنى أكبر من الحبكة.',
      },
      {
        id: 'kh-aic-10',
        front: 'Edwardian Era',
        frontAr: 'العصر الإدواردي',
        back: 'Definition: The reign of Edward VII (1901–1910), often extended to 1914 — a period of rigid class hierarchy, conspicuous wealth, and complacency before World War I.\n\nExample essay sentence: "Set in 1912, the play captures the Edwardian elite at the peak of self-satisfied ignorance, only two years before the war that would destroy their world."\n\nWhen to use it: When establishing historical context — especially the class system Eva Smith was trapped in.',
        backAr:
          'التعريف: عصر حكم الملك إدوارد السابع (١٩٠١-١٩١٠)، و يمتد عملياً لحد ١٩١٤ مع بداية الحرب العالمية الأولى. كان عصر:\n\n- طبقية صارمة (الأغنياء أغنياء جداً، الفقراء بدون أي حماية اجتماعية)\n- نساء بدون حق تصويت\n- ما فيه دولة رفاه: لا تأمين صحي، لا بطالة، لا حد أدنى للأجور\n- ثقة عمياء بالتقدّم الأبدي و التفوّق البريطاني\n\nبريستلي يختار ١٩١٢ بالضبط لأنه آخر سنة قبل ما العالم يتغيّر. البيرلنغز عايشين بفقاعة، و إحنا الجمهور نعرف إن الفقاعة راح تنفجر.\n\nالاستخدام: استخدمها (استخدميها) لتثبيت السياق التاريخي و توضّح ليش إيفا ما كان عندها أي حماية.',
      },
      {
        id: 'kh-aic-11',
        front: 'Catalyst',
        frontAr: 'كاتالست / محفّز (Catalyst)',
        back: 'Definition: A character or event that triggers significant change in others.\n\nExample essay sentence: "The Inspector is a catalyst — he does not destroy the Birlings, but he forces them to reveal what they already are."\n\nWhen to use it: When analysing the Inspector\'s function in driving every other character\'s moral exposure.',
        backAr:
          'التعريف: شخصية أو حدث يحفّز تغيير كبير بالشخصيات الثانية. الكاتالست ما يصنع التغيير من الصفر — هو يطلّع اللي كان مدفون داخل الشخصية.\n\nالمفتش جول هو الكاتالست الأكمل: ما يقتل أحد، ما يهاجم أحد. بس وجوده و أسئلته تجبر كل شخصية تواجه نفسها. شيلا تتغيّر، إيريك ينكسر، آرثر يتحجّر دفاعاً، سيبيل تنكر، جيرالد يتلاعب.\n\nكل واحد يكشف طبيعته الحقيقية لأن المفتش حطّ المرآة قدامه.\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل دور المفتش — هو مو بطل تقليدي، هو محفّز كشف.',
      },
      {
        id: 'kh-aic-12',
        front: 'Cyclical Structure',
        frontAr: 'البنية الدائرية',
        back: "Definition: A structure in which the ending returns to or mirrors the beginning.\n\nExample essay sentence: \"The phone call at the end — announcing that an inspector is on his way — gives the play a cyclical structure: the Birlings' moral lesson begins again.\"\n\nWhen to use it: When discussing the play's ending and Priestley's refusal to let the audience off the hook.",
        backAr:
          'التعريف: بنية مسرحية ترجع فيها النهاية لنقطة قريبة من البداية، يعني الدائرة تكتمل. بريستلي يستخدم هالتقنية عشان يجبر الجمهور يفكّر بمعنى التكرار.\n\nبنهاية المسرحية، الجميع يتنفّس الصعداء — المفتش طلع مزيّف، إيفا ما ماتت. الكبار يحتفلون و يضحكون. ثم — رنّة التلفون: شرطة فيها مفتش جاي يحقّق بانتحار فتاة.\n\nالدورة بدأت من جديد. الدرس راح يتكرّر لأن الكبار ما تعلّموا.\n\nبريستلي يقول للجمهور: إذا ما تعلّمتم من القصة، التاريخ راح يعيد نفسه. هذي رسالة ١٩٤٥: إذا ما بنينا مجتمع أعدل بعد الحرب، الكارثة راح تتكرّر.\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل النهاية و معنى المكالمة الأخيرة.',
      },
      {
        id: 'kh-aic-13',
        front: 'Didactic',
        frontAr: 'ديداكتك / تعليمي (Didactic)',
        back: 'Definition: Designed to teach a lesson, especially a moral or political one.\n\nExample essay sentence: "Priestley\'s play is unashamedly didactic: it does not just dramatise injustice, it actively demands a different future."\n\nWhen to use it: When acknowledging that the play is consciously trying to change the audience\'s views.',
        backAr:
          'التعريف: عمل أدبي يهدف بوضوح لتعليم درس — أخلاقي أو سياسي أو ديني. الكلمة ما تستخدم بمعنى سلبي دايماً، بس تشير إن العمل ما يخبّي نواياه التعليمية.\n\nمسرحية بريستلي تعليمية بكل وضوح. هو ما يبغى الجمهور يستمتع بس — يبغاهم يتغيّرون. خطبة المفتش الأخيرة هي درس مباشر: "إذا ما تعلّمنا هالدرس، راح نتعلّمه بنار و دم و كرب."\n\nبعض النقاد يعتبرونها فيها خطابية زيادة — بس بريستلي ما كان يبغى الذكاء الأدبي بقدر ما يبغى التغيير الاجتماعي.\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل النية وراء المسرحية، خاصة بفقرة الخاتمة.',
      },
      {
        id: 'kh-aic-14',
        front: 'Patriarchy',
        frontAr: 'النظام الأبوي / باتريارشي (Patriarchy)',
        back: "Definition: A social system in which men hold primary power, dominating roles of political leadership, moral authority, and control of property.\n\nExample essay sentence: \"Mr Birling's dismissal of Sheila — 'Now, Sheila, I'm not defending him' — exposes the patriarchal assumption that women's moral judgements can be brushed aside.\"\n\nWhen to use it: When analysing how female characters (Sheila, Sybil, Eva) are silenced or controlled.",
        backAr:
          'التعريف: نظام اجتماعي السلطة فيه بأيد الرجال — قيادة سياسية، سلطة أخلاقية، تحكّم بالأملاك و المال. النساء بهالنظام تابعات و رأيهن مهمّش.\n\nالمسرحية تظهر الأبوية بطرق كثيرة:\n- آرثر يصفّق على فمّ شيلا أكثر من مرّة لمّا تتكلّم بصراحة\n- سيبيل تعيش حسب توقعات الرجال و تنقل القمع للنساء الثانية (ترفض مساعدة إيفا)\n- جيرالد "يكفل" إيفا — يعني يستخدمها كملك لما هي محتاجة\n- إيريك يعتدي عليها بدون عواقب — لو ما جا المفتش\n\nالأبوية مو مجرد سلطة رجال، هي نظام كامل يقمع النساء الفقيرات بشكل خاص.\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل وضع النساء بالمسرحية و تجربة إيفا بالذات.',
      },
      {
        id: 'kh-aic-15',
        front: 'Hypocrisy',
        frontAr: 'النفاق',
        back: "Definition: Professing virtues or beliefs one does not hold; the gap between public morality and private behaviour.\n\nExample essay sentence: \"Mrs Birling's charity work for 'fallen women' is exposed as deep hypocrisy when she discovers her own son fathered Eva Smith's unborn child.\"\n\nWhen to use it: When exposing the moral double standards of the Birlings and the class they represent.",
        backAr:
          'التعريف: ادّعاء فضائل أو قيم ما تؤمن فيها فعلاً. الفجوة بين أخلاق الواجهة و سلوك الخفاء.\n\nسيبيل بيرلنغ نموذج النفاق الكامل: تتطوّع بجمعية خيرية للنساء "الساقطات" بس ترفض مساعدة إيفا. تدّعي الأخلاق العالية بس تطرد امرأة حامل بدون مسكن. و الصدمة الكبرى: تكتشف إن الأب اللي مسؤول هو ابنها إيريك.\n\nآرثر منافق بطريقة ثانية: يدّعي إنه أب فاضل بس يدافع عن ربحه على حساب حياة العمال.\n\nجيرالد منافق "مهذّب": يدّعي الحب لكن يخفي علاقته كأنه ما صار شي.\n\nبريستلي يكشف نفاق الطبقة العليا كله بليلة واحدة.\n\nالاستخدام: استخدمها (استخدميها) لمّا تكشف الازدواجية الأخلاقية لأي شخصية، خاصة سيبيل.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  // DECK 3 — A CHRISTMAS CAROL key terms (15 cards)
  // ────────────────────────────────────────────────────────────────────
  {
    id: 'kh-christmas-carol-key-terms',
    title: 'A Christmas Carol — Key Terms (Khaleeji)',
    description:
      'Mustalahaat asasiyya li-A Christmas Carol maʿ sharḥ Khaleeji — 15 key terms for the novella.',
    category: 'Set Texts',
    board: 'All',
    cards: [
      {
        id: 'kh-cc-1',
        front: 'Novella',
        frontAr: 'نوفيلا / رواية قصيرة (Novella)',
        back: 'Definition: A short novel — longer than a short story but shorter than a full-length novel.\n\nExample essay sentence: "Dickens deliberately chose the novella form for A Christmas Carol — short enough to be read in one Christmas evening, long enough to deliver a sweeping moral conversion."\n\nWhen to use it: When discussing the text\'s form and Dickens\'s populist intent.',
        backAr:
          'التعريف: رواية قصيرة، أطول من القصة القصيرة و أقصر من الرواية الكاملة. ديكنز اختار هالشكل بقصد: قصير كفاية إن العائلة كلها تقدر تقراه بليلة عيد الميلاد، و طويل كفاية يقدّم تحوّل كامل لشخصية رئيسية.\n\nالشكل يخدم الرسالة: لو كانت رواية ضخمة، الفقراء و الطبقة العاملة ما يقدرون يقرونها — ما عندهم وقت و لا فلوس. كنوفيلا، الكتاب وصل للجميع.\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل بنية النص و قرار ديكنز يخلّيه قصير و مكثّف.',
      },
      {
        id: 'kh-cc-2',
        front: 'Allegory',
        frontAr: 'أليجوري / تمثيل رمزي (Allegory)',
        back: 'Definition: A story in which characters and events stand for abstract moral or political ideas.\n\nExample essay sentence: "Each ghost is allegorical: Past represents memory and conscience, Present represents empathy and immediate need, Future represents consequence and mortality."\n\nWhen to use it: When arguing that the story works on a symbolic as well as a literal level.',
        backAr:
          'التعريف: نوع من القصص اللي شخصياتها و أحداثها تمثّل أفكار مجرّدة. الأشباح الثلاثة بالقصة مو مجرّد كائنات خارقة — كل شبح يمثّل بُعد من أبعاد ضمير سكروج:\n\n- شبح الماضي: الذاكرة و الندم — يجبر سكروج يتذكّر من كان قبل\n- شبح الحاضر: التعاطف و معاناة الناس الآن — يوريه ألم العائلات حواليه\n- شبح المستقبل: العواقب و الموت — يوريه نهايته إذا ما تغيّر\n\nسكروج نفسه أليجوري — يمثّل الرأسمالية الفيكتورية الباردة. تحوّله يمثّل إمكانية الفداء و التغيير.\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل دور الأشباح أو تحاجج إن للقصة معنى رمزي أعمق.',
      },
      {
        id: 'kh-cc-3',
        front: 'Avarice',
        frontAr: 'الجشع / آڤاريس (Avarice)',
        back: "Definition: Extreme greed for wealth or material gain.\n\nExample essay sentence: \"Scrooge's avarice is established in the opening through a chain of damning adjectives — 'squeezing, wrenching, grasping, scraping, clutching, covetous old sinner.'\"\n\nWhen to use it: When analysing Scrooge's defining vice in Stave 1.",
        backAr:
          'التعريف: الجشع المتطرّف على الثروة و المال. مو مجرّد حب فلوس، هو شغف مرضي بالاكتناز.\n\nديكنز يفتح القصة بقائمة صفات تصف جشع سكروج: "ضاغط، ملوي، قابض، كاشط، ممسك، رجل عجوز خاطئ يطمع بكل شي" — ست أفعال بصف واحد. كل فعل أعنف من اللي قبله.\n\nالجشع بالعقيدة المسيحية أحد الخطايا السبع الكبرى، و ديكنز كاتب مسيحي ملتزم. هو يربط الجشع بالموت الروحي: سكروج عايش بس روحه ميتة.\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل شخصية سكروج بالستيف الأول، أو تربطها بالنقد الديني للرأسمالية.',
      },
      {
        id: 'kh-cc-4',
        front: 'Redemption Arc',
        frontAr: 'قوس الفداء / رحلة التحوّل',
        back: 'Definition: A narrative pattern in which a flawed character undergoes moral transformation and reaches salvation.\n\nExample essay sentence: "Scrooge\'s redemption arc moves from miser to benefactor in five stages, one per stave — Dickens insists that change is possible at any age."\n\nWhen to use it: When tracing Scrooge\'s journey across the five staves.',
        backAr:
          'التعريف: نمط قصصي تتحوّل فيه شخصية معيوبة لتصير صالحة. الرحلة مو مجرّد تغيير سلوك — هي تطهير روحي كامل.\n\nسكروج يمر بخمس مراحل، واحدة بكل ستيف:\n١. ستيف ١: العزلة و الجشع — نقطة البداية\n٢. ستيف ٢: مواجهة الماضي و الندم\n٣. ستيف ٣: رؤية ألم الفقراء (تيم الصغير) و تطوير التعاطف\n٤. ستيف ٤: الخوف من الموت بدون أحد يبكي عليه\n٥. ستيف ٥: الفعل — يساعد الكراتشيتس، يتبرّع، يضحك\n\nرسالة ديكنز: التحوّل ممكن حتى للأكثر قسوة، حتى بأكبر عمر. ما فات الأوان.\n\nالاستخدام: استخدمها (استخدميها) كهيكل لأي مقال يطلب وصف رحلة سكروج.',
      },
      {
        id: 'kh-cc-5',
        front: 'Pathos',
        frontAr: 'باثوس / استدرار العاطفة (Pathos)',
        back: "Definition: A quality that evokes pity or sadness in the audience.\n\nExample essay sentence: \"Tiny Tim is the engine of the novella's pathos — his frailty, optimism, and possible death weaponise the reader's emotions in service of social reform.\"\n\nWhen to use it: When analysing how Dickens manipulates the reader's emotions to push for change.",
        backAr:
          'التعريف: صفة بالعمل الأدبي تثير الحزن أو الشفقة عند القارئ. ديكنز سيّد الباثوس — يخلق شخصيات تكسر القلب عشان يدفع القارئ للعمل الاجتماعي.\n\nتيم الصغير هو المثال الأقوى: طفل مريض، فقير، متفائل مع ذلك. لمّا الشبح يوريه قبر تيم الصغير، القارئ ينهار عاطفياً. هذا الانهيار مقصود — ديكنز يبغى القارئ يحس قبل ما يفكر، عشان يتبرّع و يتعاطف بحياته الحقيقية.\n\nبعض النقاد ينتقدون ديكنز إنه عاطفي زيادة (sentimental). بس بريق هالعاطفية مفيد: غيّر القوانين، ساعد بإصلاح قانون الفقراء.\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل المشاهد العاطفية و دورها بالغرض السياسي.',
      },
      {
        id: 'kh-cc-6',
        front: 'Victorian Era',
        frontAr: 'العصر الفيكتوري',
        back: 'Definition: The reign of Queen Victoria (1837–1901), defined by industrial wealth, severe poverty, and rigid class divisions.\n\nExample essay sentence: "Dickens wrote A Christmas Carol in 1843 to confront the Victorian middle class with the poverty that industrialisation had concealed behind their parlours."\n\nWhen to use it: When establishing historical context.',
        backAr:
          'التعريف: عصر حكم الملكة فيكتوريا (١٨٣٧-١٩٠١). إنجلترا فيه:\n\n- ثورة صناعية: ثروة هائلة لطبقة قليلة\n- فقر مدقع: ملايين العمال يعيشون بأحياء قذرة بدون حماية\n- عمل الأطفال: أطفال بعمر ٥ سنوات يشتغلون بالمناجم و المصانع\n- قانون الفقراء (Poor Law) ١٨٣٤: يحبس الفقراء بـ "ورشات الفقر" (workhouses) كأنهم مجرمين\n- لا تعليم مجاني، لا تأمين صحي، لا ضمان اجتماعي\n\nديكنز عايش كل هذا — اشتغل بمصنع تلميع أحذية و هو طفل لمّا أبوه دخل سجن المدينين. هو ما يكتب بنظرية — يكتب من تجربة شخصية.\n\nهدفه من القصة: يجبر الطبقة الوسطى الفيكتورية تشوف الفقر اللي خبّوه عن أعينهم.\n\nالاستخدام: استخدمها (استخدميها) لتثبيت السياق التاريخي.',
      },
      {
        id: 'kh-cc-7',
        front: 'Foil',
        frontAr: 'فويل / شخصية مقابلة (Foil)',
        back: 'Definition: A character whose qualities contrast with another\'s, highlighting key traits in the protagonist.\n\nExample essay sentence: "Bob Cratchit acts as a foil to Scrooge: warm where Scrooge is cold, rich in family where Scrooge is rich in coin."\n\nWhen to use it: When comparing two characters to expose the protagonist\'s flaws or growth.',
        backAr:
          'التعريف: شخصية صفاتها متناقضة مع البطل عشان تبرز صفاته. مثل ما المرآة توري شي بوضوح، الـ foil يوري طبيعة البطل.\n\nبوب كراتشيت فويل سكروج المثالي:\n- سكروج بارد، بوب دافي\n- سكروج وحيد، بوب مليان عائلة\n- سكروج غني بالفلوس، بوب غني بالحب\n- سكروج كافر بعيد الميلاد، بوب يحتفل به رغم الفقر\n\nفريد، ابن أخت سكروج، فويل ثاني — يمثّل الشباب و الفرح اللي رفضه سكروج.\n\nحتى السيدتان اللتان تطلبان تبرّعاً للفقراء بالستيف الأول هما فويل: يمثّلن الكرم اللي سكروج رفضه.\n\nالاستخدام: استخدمها (استخدميها) لمّا تقارن شخصيتين عشان تكشف صفات البطل.',
      },
      {
        id: 'kh-cc-8',
        front: 'Symbolism',
        frontAr: 'الرمزية',
        back: "Definition: The use of objects, colours, or images to represent abstract ideas.\n\nExample essay sentence: \"The chains that bind Marley's ghost symbolise the spiritual weight of a life spent serving wealth instead of humanity — they are 'forged in life' by every selfish act.\"\n\nWhen to use it: When analysing specific objects or images that carry deeper meaning.",
        backAr:
          'التعريف: استخدام الأشياء أو الألوان أو الصور عشان تمثّل أفكار مجرّدة. ديكنز يحطّ رموز بكل صفحة:\n\n- سلاسل مارلي: ثقل الأنانية و حب المال — صنعها بحياته بكل فعل أناني\n- الجرس الميت بمشهد مارلي: انقطاع التواصل الإنساني\n- النار بمكتب كراتشيت (صغيرة) و بيت سكروج (الأكبر بس مظلمة): الفرق بين الدفء الإنساني و البرودة المادية\n- إغناريد و الجهل (الطفلان الجائعان): جهل المجتمع و فقر النظام\n- قبر سكروج بدون اسم: الفناء الكامل لمن عاش لنفسه فقط\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل أي صورة متكرّرة بالقصة و معناها الأعمق.',
      },
      {
        id: 'kh-cc-9',
        front: 'Misanthrope',
        frontAr: 'كاره البشر / ميساانثروب (Misanthrope)',
        back: "Definition: A person who dislikes or distrusts other people and avoids social contact.\n\nExample essay sentence: \"Scrooge enters the novella as a misanthrope — his 'Bah! Humbug!' is not a complaint about Christmas alone, but about the entire idea of human connection.\"\n\nWhen to use it: When describing Scrooge's initial state of bitter isolation.",
        backAr:
          'التعريف: شخص يكره البشر و يبتعد عن التواصل الاجتماعي. الكلمة إغريقية: "ميسو" (يكره) + "أنثروبوس" (الإنسان).\n\nسكروج بداية القصة ميساانثروب كامل:\n- يرفض دعوة ابن أخته فريد لعيد الميلاد\n- يطلق صفة "غباء" على ٢ سيدتين يطلبن تبرّع للفقراء\n- يفضّل يشتغل وحده بمكتبه البارد\n- "Bah! Humbug!" — ردّه الشهير على أي مظاهر إنسانية\n\nبس ديكنز يكشف أصل هالكراهية بالستيف الثاني: سكروج ما ولد كذا. كان طفل وحيد بمدرسة داخلية، تخلّى عنه أبوه، خسر أخته الحبيبة، خسر حبّه. الميساانثروب صنيع الألم.\n\nهالخلفية مهمّة: ديكنز ما يدين سكروج بدون تفسير — يبيّن إن حتى أكثر إنسان قسوة قابل للفداء.\n\nالاستخدام: استخدمها (استخدميها) لوصف حالة سكروج الأولى.',
      },
      {
        id: 'kh-cc-10',
        front: 'Juxtaposition',
        frontAr: 'جاكستابوزيشن / المقابلة (Juxtaposition)',
        back: 'Definition: Placing two contrasting things side by side to highlight their differences.\n\nExample essay sentence: "Dickens juxtaposes Scrooge\'s cold counting-house with the Cratchits\' warm hearth — wealth versus love made visible in a single chapter."\n\nWhen to use it: When two scenes, characters, or images are deliberately contrasted.',
        backAr:
          'التعريف: حطّ شيئين متناقضين جنب بعض عشان يبرز الفرق بينهم. ديكنز يستخدم هالتقنية بشكل مكثّف عشان يفضح الظلم الاجتماعي.\n\nأمثلة قوية:\n- مكتب سكروج البارد (نار صغيرة، عمال يرتجفون) ⇄ بيت كراتشيت الدافئ (نار صغيرة بس قلوب كبيرة)\n- ثروة سكروج المادية ⇄ غناه العاطفي الصفر\n- وليمة شبح الحاضر (وفرة) ⇄ حال الطفلين الجائعين (إغناريد و الجهل) تحت ثيابه\n- موت سكروج المتخيل (ما حد يحضر) ⇄ موت تيم المتخيل (الكل ينهار)\n\nالتقنية مو ترف أدبي — هي أداة سياسية: ديكنز يخلّي القارئ يشوف بعينه التناقض بين الغني و الفقير بنفس المدينة.\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل أي مشهدين أو صورتين متعاكستين.',
      },
      {
        id: 'kh-cc-11',
        front: 'Imagery',
        frontAr: 'الصور الفنية / إيميجري (Imagery)',
        back: "Definition: Descriptive language that appeals to the senses — sight, sound, touch, smell, taste.\n\nExample essay sentence: \"Dickens's imagery of Scrooge — 'hard and sharp as flint, from which no steel had ever struck out generous fire' — translates an abstract trait into a physical, almost tactile sensation.\"\n\nWhen to use it: When analysing how language creates a vivid sensory experience.",
        backAr:
          'التعريف: اللغة الوصفية اللي تخاطب الحواس — البصر، السمع، اللمس، الشم، الذوق. الصور الفنية تخلّي القارئ يحس بالعالم زي ما هو موجود قدامه.\n\nديكنز ماستر بالصور البصرية و اللمسية:\n- وصف سكروج: "قاسي و حاد مثل الصوّان (flint)، ما طلّع منه أي حديد نار سخية" — حسّ لمسي قاسي\n- الضباب اللندوني: "كثيف، عابس، تخلّى أهل المدينة يلمسون بعض و هم مستحيلين يشوفون" — يلمس و يكتم نفس\n- بيت كراتشيت: "صحون نظيفة، نار صغيرة، بطاطس مهروسة" — حواس الدفء و الفقر معاً\n- شبح المستقبل: ظل أسود بلا وجه، بس "يمد إصبع" نحو القبر — رعب بصري بأقل تفاصيل\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل أي وصف، خاصة الوصف الجسدي للأشباح أو الأماكن.',
      },
      {
        id: 'kh-cc-12',
        front: 'Personification',
        frontAr: 'التشخيص / بيرسونيفيكيشن (Personification)',
        back: 'Definition: Giving human qualities to non-human things — objects, animals, abstract ideas.\n\nExample essay sentence: "Dickens personifies the door knocker into Marley\'s face — an inanimate object becomes the first crack in Scrooge\'s rational, materialist worldview."\n\nWhen to use it: When analysing moments where Dickens animates objects to make moral or supernatural points.',
        backAr:
          'التعريف: إعطاء صفات بشرية للأشياء أو الحيوانات أو الأفكار المجرّدة. ديكنز يحبّ يحيي الأشياء بطريقة تكسر منطق سكروج.\n\nأشهر مثال: مطرقة الباب اللي تتحوّل لوجه مارلي. سكروج رجل واقعي ما يصدّق بالأشباح، بس الباب نفسه يخاطبه. هذي أول كسر بحاجزه العقلاني.\n\nأمثلة ثانية:\n- الضباب اللندوني "يزحف" — كأنه كائن حي\n- الجرس بمكتب سكروج "يهتزّ" لحاله قبل وصول مارلي\n- النار بمدفأة المكتب "تختفي" أمام شبح الحاضر — كأنها خايفة\n- ساعة سكروج "تدقّ" بطريقة غير طبيعية\n\nالتشخيص يخلق جو غير طبيعي و يحضّر القارئ لتدخّل العالم الخارق.\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل لحظات يحيي فيها ديكنز الأشياء.',
      },
      {
        id: 'kh-cc-13',
        front: 'Stave',
        frontAr: 'ستيف / مقطع موسيقي',
        back: 'Definition: A stanza or section of a song — Dickens uses "Stave" instead of "Chapter" to reinforce that this is "A Christmas Carol."\n\nExample essay sentence: "By dividing the novella into five staves, Dickens insists on the text\'s identity as a song — a carol — to be sung communally at Christmas."\n\nWhen to use it: When discussing the novella\'s musical framing and Christmas-festival context.',
        backAr:
          'التعريف: الكلمة معناها مقطع من أغنية. ديكنز ما سمّى أقسام كتابه "فصول" (chapters) — سمّاها "ستيفز" (staves) عشان يأكّد إن هذا "كارول" — يعني ترنيمة عيد ميلاد.\n\nهذا قرار فني مدروس: العنوان "A Christmas Carol" و الأقسام "Staves" — كل شي يخلق إحساس إن هذي أغنية، تُغنّى مع العائلة بليلة العيد.\n\nالكارول بالعصر الفيكتوري كان تقليد جماعي: الناس تجتمع و تغنّي ترانيم العيد. ديكنز يبغى كتابه يكون نفس التجربة — قصة تُقرأ بصوت عالي، تُحس بالقلب، تُغنّى مع العائلة.\n\nخمس ستيفز = خمس مقاطع موسيقية = رحلة كاملة للتحوّل.\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل بنية النص و قرار ديكنز التركيب الموسيقي.',
      },
      {
        id: 'kh-cc-14',
        front: 'Foreshadowing',
        frontAr: 'الإنذار المسبق (Foreshadowing)',
        back: 'Definition: Hints or clues that prepare the reader for events later in the text.\n\nExample essay sentence: "Marley\'s warning that Scrooge will be visited by three spirits foreshadows the structure of the entire novella."\n\nWhen to use it: When tracing Dickens\'s careful construction of expectation.',
        backAr:
          'التعريف: تلميحات يحطّها الكاتب مبكراً عشان يحضّر القارئ لأحداث جاية. ديكنز يستخدم الإنذار المسبق بطريقتين:\n\n١. إنذار مباشر: شبح مارلي يقول لسكروج "ثلاث أرواح راح يزورونك" — هذا يحضّرنا للستيفز الثلاثة الجاية.\n\n٢. إنذار رمزي: الباب-مطرقة اللي يتحوّل لوجه مارلي بداية الستيف الأول — هذا إنذار إن العالم الخارق راح يكسر منطق سكروج.\n\nالنبؤة بقبر تيم الصغير بالستيف الرابع — تحضّر القارئ للنتيجة العاطفية. لمّا سكروج يسأل: "هل هذي ظلال الأشياء اللي راح تكون، أو ممكن تتغيّر؟" ديكنز يلمّح إن المستقبل قابل للتغيير.\n\nالاستخدام: استخدمها (استخدميها) لمّا تحلّل كيف ديكنز يبني توقّعات القارئ خطوة بخطوة.',
      },
      {
        id: 'kh-cc-15',
        front: 'Social Criticism',
        frontAr: 'النقد الاجتماعي',
        back: 'Definition: Literature that analyses and critiques social problems — especially poverty, inequality, and injustice.\n\nExample essay sentence: "A Christmas Carol is one of the most influential pieces of social criticism in English literature — it changed both public attitudes and eventually government policy on poor relief."\n\nWhen to use it: When framing the novella as a political intervention, not just a ghost story.',
        backAr:
          'التعريف: الأدب اللي ينتقد مشاكل المجتمع — الفقر، اللامساواة، الظلم، استغلال الأطفال. ديكنز ما كتب القصة عشان يسلّي بس — كتبها عشان يغيّر القوانين.\n\nالنقد الاجتماعي بالقصة:\n- استغلال العمال: سكروج يدفع لكراتشيت ١٥ شلن بالأسبوع — أقل من الكفاف\n- قانون الفقراء ١٨٣٤: سكروج يقول "هل ما زالت ورشات الفقر شغّالة؟" — يردّد دعاية الحكومة\n- موت الأطفال: تيم الصغير يموت لو ما تغيّر سكروج — رمز لآلاف الأطفال اللي ماتوا فعلاً\n- الجهل و البؤس: الطفلان تحت رداء شبح الحاضر — تحذير إن المجتمع لو ما رعى أطفاله، راح يحصد العنف\n\nأثر القصة الحقيقي: غيّرت رأي الطبقة الوسطى البريطانية، و ساهمت بإصلاح قانون الفقراء، و خلّت العمل الخيري قيمة مركزية بعيد الميلاد.\n\nالاستخدام: استخدمها (استخدميها) لمّا تحاجج إن القصة عمل سياسي مو مجرّد قصة عيد.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  // DECK 4 — POWER & CONFLICT poetry technique vocab (15 cards)
  // ────────────────────────────────────────────────────────────────────
  {
    id: 'kh-power-conflict-techniques',
    title: 'Power & Conflict — Poetry Techniques (Khaleeji)',
    description:
      'Mustalahaat al-shiʿr li-anthology al-quwwa wa al-niza‘ maʿ sharḥ Khaleeji — 15 poetry techniques for the AQA Power & Conflict cluster.',
    category: 'Poetry',
    board: 'AQA',
    cards: [
      {
        id: 'kh-pc-1',
        front: 'Caesura',
        frontAr: 'سيزورا / وقفة وسط البيت (Caesura)',
        back: 'Definition: A pause in the middle of a line of poetry, usually created by punctuation.\n\nExample (Exposure, Owen): "But nothing happens." — the full stop creates an emphatic mid-line stop.\n\nEffect on reader: Disrupts rhythm, forces reflection, mirrors hesitation, exhaustion, or sudden realisation.\n\nWhen to mention in essays: Always name the punctuation mark and link it to meaning.',
        backAr:
          'التعريف: وقفة وسط بيت الشعر، تتسبّب فيها علامة ترقيم — فاصلة، نقطة، شرطة، علامة استفهام. الكلمة لاتينية معناها "قطع."\n\nبشعر "السلطة و الصراع"، السيزورا تستخدم بشكل قوي عشان تكسر إيقاع البيت و تجبر القارئ يتوقّف:\n\n- بقصيدة "Exposure" لـ Owen: "But nothing happens." — النقطة بنص البيت توري إن لا شي يصير بمعركة الجنود ضد البرد. الإيقاع ينقطع زي ما الأمل ينقطع.\n- بقصيدة "Bayonet Charge" لـ Hughes: السيزورا تعكس تشتّت الجندي و ارتباكه بساحة المعركة.\n- بقصيدة "Remains" لـ Armitage: الوقفات الكثيرة تعكس صدمة الجندي بعد القتل (PTSD).\n\nالاستخدام: لمّا تحلّل، احطّ اسم علامة الترقيم بالضبط — "الفاصلة المنقوطة بعد كذا تخلق caesura يعكس..."',
      },
      {
        id: 'kh-pc-2',
        front: 'Enjambment',
        frontAr: 'إنجامبمنت / تخطي البيت (Enjambment)',
        back: 'Definition: When a sentence or phrase runs over the end of a line without punctuation, continuing into the next line.\n\nExample (Storm on the Island): "We are prepared: we build our houses / squat" — the line break drops onto "squat," emphasising the low, defensive posture.\n\nEffect: Creates momentum, urgency, breathlessness — or surprises the reader with the word that lands on the new line.\n\nWhen to mention: Link the effect of the line break to the meaning it produces.',
        backAr:
          'التعريف: لمّا الجملة تتخطّى نهاية البيت بدون علامة ترقيم — يعني المعنى يكمّل بالبيت اللي بعده. الكلمة فرنسية معناها "تسلّق فوق."\n\nالأثر:\n- يخلق اندفاع و سرعة (نفس الجملة ما تتوقّف)\n- يخلق إحساس بضيق نفس (في الشعر العسكري بالذات)\n- ينقل القارئ بسرعة من فكرة لفكرة، أو يفاجئه بالكلمة اللي تنزل بداية البيت الجديد\n\nأمثلة من السلطة و الصراع:\n- "Storm on the Island" لـ Heaney: "we build our houses / squat" — كلمة "squat" تنزل بعد كسر السطر، فتزداد قوة الصورة (بيوت قصيرة دفاعية).\n- "The Charge of the Light Brigade" لـ Tennyson: الـ enjambment يخلق إيقاع الجياد المنطلقة.\n- "Kamikaze" لـ Garland: الـ enjambment يعكس تذكّر متدفّق، ذاكرة بدون توقّف.\n\nالاستخدام: حدّد الكلمة اللي تنزل بداية السطر الجديد و اشرح ليش الكاتب اختار يحطّها بهالمكان.',
      },
      {
        id: 'kh-pc-3',
        front: 'Volta',
        frontAr: 'فولتا / نقطة التحوّل (Volta)',
        back: "Definition: A turning point in a poem — a shift in mood, argument, tone, or perspective.\n\nExample (Ozymandias): The shift from the traveller's description of the statue's pride to the final image of \"the lone and level sands\" — power dissolving into desert.\n\nEffect: Creates contrast, forces re-evaluation, often delivers the poem's deepest message.\n\nWhen to mention: Identify the exact line and explain what shifts and why.",
        backAr:
          'التعريف: نقطة تحوّل بالقصيدة — يتغيّر فيها المزاج أو الحجة أو النبرة أو وجهة النظر. الكلمة إيطالية معناها "دوران."\n\nبالسوناتا التقليدية، الفولتا تجي بالسطر التاسع (سوناتا بتراركية) أو السطر الثالث عشر (سوناتا شكسبيرية). بس قصائد السلطة و الصراع تستخدمها بأماكن متنوّعة.\n\nأمثلة قوية:\n- "Ozymandias" لـ Shelley: من فخر التمثال إلى الرمال الفارغة الممتدّة — تحطّم كامل لوهم السلطة.\n- "My Last Duchess" لـ Browning: من وصف اللوحة الهادي إلى الكشف المخيف ("I gave commands; Then all smiles stopped") — الدوق قاتل.\n- "Bayonet Charge" لـ Hughes: من اندفاع الجندي إلى توقّفه ("In what cold clockwork of the stars") — لحظة شك ميتافيزيقي.\n\nالاستخدام: لمّا تحلّل أي قصيدة، اسأل: وين نقطة التحوّل؟ وش يتغيّر قبلها و بعدها؟',
      },
      {
        id: 'kh-pc-4',
        front: 'Sibilance',
        frontAr: 'سيبيلانس / تكرار حروف الصفير (Sibilance)',
        back: 'Definition: Repetition of "s," "sh," or soft "c" sounds.\n\nExample (Ozymandias): "Of that colossal Wreck, boundless and bare / The lone and level sands stretch far away." — the soft "s" sounds whisper across the empty desert.\n\nEffect: Often creates a sinister, hushed, secretive, or vast atmosphere. Can also feel soothing or smooth.\n\nWhen to mention: Read the phrase aloud — the sound effect should support the poem\'s meaning.',
        backAr:
          'التعريف: تكرار حروف الصفير (س، ش، ص). إذا قرأت السطر بصوت عالي راح تسمع همس مستمر.\n\nالأثر:\n- جو همس و تخفّي و خطر (شر مخبّى)\n- جو امتداد و فراغ (الرمال، الرياح)\n- جو خداع و إغراء (لغة الأفعى)\n- أحياناً جو هدوء و سلاسة\n\nأمثلة من المختارة الشعرية:\n- "Ozymandias": "lone and level sands stretch" — الصفير ينقل امتداد الصحراء و عبثية الإمبراطورية.\n- "Storm on the Island": "stacks and stooks" — الصفير يعكس وقع الرياح.\n- "Tissue" لـ Dharker: "Skin smoothes" — الصفير يخلق إحساس نعومة الورق و رقّته.\n\nالاستخدام: لمّا تحلّل، اقرأ السطر بصوت عالي و حلّل وش الجو اللي يخلقه التكرار الصوتي.',
      },
      {
        id: 'kh-pc-5',
        front: 'Plosive',
        frontAr: 'البلوزيف / حروف الانفجار (Plosive)',
        back: 'Definition: Hard consonant sounds — p, b, t, d, k, g — that "explode" when spoken.\n\nExample (Bayonet Charge): "bullets smacking the belly out of the air" — the plosive "b" sounds mimic gunfire.\n\nEffect: Creates violence, aggression, abruptness — language that strikes like a blow.\n\nWhen to mention: When the poem describes battle, anger, or sudden physical impact.',
        backAr:
          'التعريف: حروف ساكنة قوية تطلع من إغلاق و فتح الفم بسرعة: ب، ت، د، ك، ج، ق. الكلمة الإنجليزية "plosive" من "explode" — يعني تنفجر.\n\nالأثر:\n- عنف و عدوانية\n- وقع طلقات نارية أو ضربات\n- غضب و قطع\n- إيقاع متشنّج\n\nأمثلة:\n- "Bayonet Charge" لـ Hughes: "bullets smacking the belly out of the air" — الـ b و الـ s و الـ k تنقل صوت الرصاص.\n- "Exposure" لـ Owen: "merciless iced east winds that knive us" — الـ k و الـ t تنقل قسوة البرد.\n- "Remains" لـ Armitage: "blood-shadow stays on the street" — الـ b و الـ d تنقل ثقل الذنب.\n- "Charge of the Light Brigade": "Cannon to right of them, / Cannon to left of them" — الـ c تخلق وقع المدافع.\n\nالاستخدام: لمّا تحلّل مشهد عنف، حدّد البلوزيف و فسّر ليش الشاعر اختاره (بدل حروف ناعمة).',
      },
      {
        id: 'kh-pc-6',
        front: 'Iambic Pentameter',
        frontAr: 'البحر الإيامبي الخماسي',
        back: 'Definition: A line of poetry with five iambs — ten syllables alternating unstressed-STRESSED (da-DUM da-DUM da-DUM da-DUM da-DUM).\n\nExample (Ozymandias, Shelley): "And on the pedestal these words appear" — a regular iambic pentameter line.\n\nEffect: Mimics natural English speech and the heartbeat. When disrupted, the irregularity draws attention.\n\nWhen to mention: Discuss BOTH the regular metre and any moments where it breaks down.',
        backAr:
          'التعريف: بيت شعري فيه خمس "إيامب" — يعني عشر مقاطع صوتية تتناوب بين ضعيف-قوي (دا-دم دا-دم خمس مرات).\n\nالأثر:\n- يحاكي إيقاع الكلام الإنجليزي الطبيعي\n- يحاكي ضربات القلب — جو هادي و مستقر\n- لمّا ينكسر الإيقاع، الكسر نفسه يبعث إشارة (اضطراب، شك، عنف)\n\nأمثلة من المختارة:\n- "Ozymandias" لـ Shelley: بيت إيامبي منتظم لمعظم القصيدة — يعطي السرد سلطة و رصانة. الكسر الوحيد بـ "Look on my Works" — كأن الكلمات تتجمّد لحظة.\n- "My Last Duchess" لـ Browning: إيامبي خماسي + مقفّى — يعطي الدوق سلطة لغوية، لكن الإنجامبمنت يكسر الإيقاع و يكشف توتّره.\n- شكسبير و معظم الشعر الإليزابيثي مكتوب بالإيامبي الخماسي.\n\nالاستخدام: لمّا تحلّل القصيدة، صفّق بالإيقاع — وين يستمر؟ وين يتعثّر؟',
      },
      {
        id: 'kh-pc-7',
        front: 'Anaphora',
        frontAr: 'الأنافورا / تكرار البداية (Anaphora)',
        back: 'Definition: Repetition of a word or phrase at the BEGINNING of successive lines or clauses.\n\nExample (The Charge of the Light Brigade): "Cannon to right of them, / Cannon to left of them, / Cannon in front of them" — relentless three-fold repetition.\n\nEffect: Creates rhythm, emphasis, accumulation, urgency, or claustrophobia.\n\nWhen to mention: Always count the repetitions and explain the building effect.',
        backAr:
          'التعريف: تكرار كلمة أو عبارة ببداية أبيات متتالية. الكلمة إغريقية معناها "حمل لفوق."\n\nالأثر:\n- بناء إيقاع متراكم\n- تكثيف العاطفة\n- إحساس بإحاطة أو حصار\n- إحساس بإلحاح و حركة لا تتوقّف\n\nأمثلة:\n- "The Charge of the Light Brigade" لـ Tennyson: "Cannon to right of them, / Cannon to left of them, / Cannon in front of them" — التكرار يحاصر الجنود من كل الجهات.\n- "Checking Out Me History" لـ Agard (لو موجود): "Dem tell me" — التكرار يبني غضب ضد التاريخ المفروض.\n- "London" لـ Blake: "In every cry of every Man, / In every Infant\'s cry of fear, / In every voice" — التكرار يعكس انتشار الألم بكل المدينة.\n\nالاستخدام: عُدّ كم مرّة تكرّرت العبارة، و وضّح كيف كل تكرار يزيد المعنى.',
      },
      {
        id: 'kh-pc-8',
        front: 'Pathetic Fallacy',
        frontAr: 'باثيتيك فالاسي / الإسقاط على الطبيعة',
        back: 'Definition: Using natural phenomena to reflect a character\'s mood or moral state.\n\nExample (Storm on the Island): The literal storm mirrors the threat of human conflict — "we are bombarded by the empty air."\n\nEffect: Externalises inner emotion; turns landscape into psychology.\n\nWhen to mention: When weather or environment seems to reflect or comment on human feeling.',
        backAr:
          'التعريف: استخدام الطقس أو الطبيعة عشان تعكس مشاعر الشخصية أو الجو الأخلاقي. الكلمة لـ John Ruskin بالقرن الـ١٩.\n\nالأثر:\n- تحويل المشاعر الداخلية لمشاهد خارجية\n- خلق جو نفسي بدون ما الشاعر يصرّح\n- ربط الإنسان بالكون\n\nأمثلة من السلطة و الصراع:\n- "Storm on the Island" لـ Heaney: العاصفة ما هي طقس فقط — هي تهديد الصراع البشري. الجزيرة "Stormont" (مقر برلمان إيرلندا الشمالية) تختفي بـ "ont" — العاصفة سياسية.\n- "Exposure" لـ Owen: الجليد و الرياح القاسية تعكس قسوة الحرب و موت الجنود ببطء.\n- "Bayonet Charge" لـ Hughes: "his foot hung like statuary in mid-stride" — الطبيعة (الميدان) تتجمّد مع الجندي بلحظة شك.\n- "Kamikaze" لـ Garland: البحر الجميل يغوي الطيار يرجع للحياة بدل ما يموت بمهمة الانتحار.\n\nالاستخدام: لمّا الطقس أو المنظر يعكس شعور الإنسان، حدّد المشاعر بالضبط.',
      },
      {
        id: 'kh-pc-9',
        front: 'Dramatic Monologue',
        frontAr: 'مونولوج درامي (Dramatic Monologue)',
        back: "Definition: A poem spoken by a single character to a silent listener, revealing the speaker's personality — often unintentionally.\n\nExample (My Last Duchess, Browning): The Duke reveals his controlling, murderous nature while trying to impress an envoy.\n\nEffect: Creates dramatic irony — we learn things about the speaker they don't mean to tell us.\n\nWhen to mention: When a poem is in a clear first-person voice talking to a defined listener.",
        backAr:
          'التعريف: قصيدة يقولها متكلّم واحد يخاطب مستمع صامت. المستمع موجود بالقصيدة لكن ما يردّ — كل ما عندنا هو كلام المتكلّم. و من هالكلام، نكتشف طبيعة المتكلّم — أحياناً ضد إرادته.\n\nالأثر:\n- مفارقة درامية: المتكلّم يكشف عن نفسه أكثر مما يقصد\n- نقد الشخصية من داخلها\n- بناء صورة معقّدة بدون راوي يحكم علناً\n\nأمثلة:\n- "My Last Duchess" لـ Browning: الدوق يكلّم مبعوث الكونت اللي راح يجيب له عروس جديدة. خلال الكلام، الدوق يكشف إنه قتل زوجته السابقة لأنها كانت "تبتسم لكل أحد." الجمهور يفهم الجريمة، المبعوث ربّما يفهم، الدوق نفسه يحسب إنه يبيّن جدارته.\n- "Checking Out Me History" لـ Agard: مونولوج درامي بصوت ساخر، يخاطب المعلّمين البريطانيين اللي علّموه تاريخ أبيض فقط.\n- "Tissue" بطريقة مختلفة: متأمّل وحده، لكن بصوت يخاطب القارئ.\n\nالاستخدام: لمّا تحلّل، اسأل: مين المتكلّم؟ مين المستمع؟ وش يكشفه المتكلّم بدون قصد؟',
      },
      {
        id: 'kh-pc-10',
        front: 'Hyperbole',
        frontAr: 'هايبربولي / المبالغة (Hyperbole)',
        back: 'Definition: Deliberate, obvious exaggeration for emphasis.\n\nExample (Ozymandias): "King of Kings: / Look on my Works, ye Mighty, and despair!" — Ozymandias\'s self-described supremacy is shattered by the surrounding emptiness.\n\nEffect: Reveals a character\'s ego, distorts reality, or amplifies emotion.\n\nWhen to mention: When the exaggeration is unmistakable and serves a thematic purpose.',
        backAr:
          'التعريف: مبالغة متعمّدة و واضحة عشان تخدم غرض فني. مو كذب — هي تضخيم مقصود. الكلمة إغريقية معناها "رمي فوق."\n\nالأثر:\n- كشف غرور الشخصية\n- تضخيم العاطفة\n- خلق سخرية لمّا الحقيقة تكذّب الكلام\n- إثارة استجابة قوية عند القارئ\n\nأمثلة من المختارة:\n- "Ozymandias": "King of Kings: Look on my Works, ye Mighty, and despair!" — مبالغة طاغية. لكن مفارقة الشاعر: ما فيه شي حول التمثال إلا رمال. المبالغة تفضح غرور الإمبراطور.\n- "The Charge of the Light Brigade": "Honour the charge they made!" — مبالغة بطولية، رغم إن الفرسان ماتوا بسبب أمر خاطئ.\n- "London" لـ Blake: "every cry... every voice... every ban" — تعميم مبالغ يجعل المدينة سجن كامل.\n\nالاستخدام: لمّا تكتشف مبالغة، اسأل: هل الشاعر يأيّد المبالغة و إلا يفضحها؟',
      },
      {
        id: 'kh-pc-11',
        front: 'Cyclical Structure',
        frontAr: 'البنية الدائرية',
        back: 'Definition: A structure in which the poem\'s ending returns to or mirrors its opening.\n\nExample (Storm on the Island): The poem opens "We are prepared" and ends with "huge nothing that we fear" — confidence dissolves into terror, but the frame remains.\n\nEffect: Suggests entrapment, inescapability, or a repeating cycle.\n\nWhen to mention: When the poem deliberately ends where it began, or with a strong echo.',
        backAr:
          'التعريف: بنية ترجع فيها نهاية القصيدة لبدايتها — يا بنفس الكلمات أو بصدى واضح.\n\nالأثر:\n- إحساس بأن لا مفر\n- إحساس بتكرار لا ينتهي\n- تأكيد إن المشكلة دائرية و ما تنحل\n- أحياناً، تأكيد على ثبات قيمة معينة\n\nأمثلة من السلطة و الصراع:\n- "Storm on the Island" لـ Heaney: تبدأ بـ "We are prepared" (إحنا مستعدين)، تنتهي بـ "huge nothing that we fear" (لا شي ضخم اللي نخاف منه) — الثقة تتحوّل لخوف، لكن العاصفة هي نفسها.\n- "Charge of the Light Brigade": كل مقطع تقريباً يبدأ بـ "Half a league" أو "Cannon" — البنية تكرّر الهجوم لا نهائياً.\n- "Remains" لـ Armitage: تبدأ و تنتهي بصورة القتل — الجندي محبوس بذكراه.\n- "Kamikaze" لـ Garland: تبدأ بالطيار يقلع، تنتهي بذكراه يحلم بالبحر — دائرة الذاكرة.\n\nالاستخدام: قارن أول كلمات القصيدة بآخر كلماتها — هل فيه صدى؟',
      },
      {
        id: 'kh-pc-12',
        front: 'Personification of Nature',
        frontAr: 'تشخيص الطبيعة',
        back: 'Definition: Giving human qualities to natural forces — wind, storm, sea, mountain.\n\nExample (Exposure): "merciless iced east winds that knive us" — the wind is given the agency and cruelty of a soldier.\n\nEffect: Turns the environment into an active enemy, intensifying the speaker\'s vulnerability.\n\nWhen to mention: When natural forces are described as if they had human will or intent.',
        backAr:
          'التعريف: إعطاء صفات بشرية لقوى الطبيعة — الرياح، العاصفة، البحر، الجبل. مو مجرّد تشبيه، بل تحويل الطبيعة لكائن حي عاقل.\n\nالأثر بشعر السلطة و الصراع:\n- الطبيعة تصير عدو ثاني للجندي (مع جنود الجهة الثانية)\n- يضاعف إحساس الضعف الإنساني\n- يطرح سؤال: هل الكون نفسه ضد البشر؟\n\nأمثلة:\n- "Exposure" لـ Owen: "merciless iced east winds that knive us" — الرياح "بلا رحمة"، تطعن الجنود زي إنسان بسكين. لا فقط برد — قتلة.\n- "Storm on the Island" لـ Heaney: "wind dives / And strafes invisibly" — الرياح "تنقضّ" و "تقصف"، استعارة عسكرية لطبيعة في حالة حرب.\n- "Prelude" لـ Wordsworth: الجبل ينتصب "كأنه كائن مسموح بنفسه" — يخاف الشاب.\n- "Kamikaze": البحر لا يُشخصّن، لكن يجذب الطيار بأمل الحياة.\n\nالاستخدام: حدّد الفعل اللي أُسند للطبيعة و اسأل ليش الشاعر اختاره.',
      },
      {
        id: 'kh-pc-13',
        front: 'Juxtaposition',
        frontAr: 'جاكستابوزيشن / المقابلة',
        back: 'Definition: Placing two contrasting ideas, images, or characters side by side.\n\nExample (Poppies, Weir): The domestic detail of "spasms of paper red" (poppy on uniform) sits beside the violent imagery of war — home and front collide in one image.\n\nEffect: Forces the reader to compare; sharpens the contrast between two worlds.\n\nWhen to mention: When two opposing images appear together, especially across a stanza break.',
        backAr:
          'التعريف: حطّ شيئين متناقضين جنب بعض. التقنية تجبر القارئ يقارن و يحس الفرق.\n\nالأثر:\n- تكثيف التباين بين عالمين\n- خلق توتر عاطفي\n- كشف تناقضات الواقع\n\nأمثلة من السلطة و الصراع:\n- "Poppies" لـ Weir: التفاصيل المنزلية (تجميع الزهرة، شعر الابن) جنب صور الحرب (cenotaph، الميدان). البيت و الجبهة بصورة واحدة.\n- "Kamikaze" لـ Garland: جمال البحر و الأسماك ⇄ مهمة الانتحار. الحياة ⇄ الموت.\n- "London" لـ Blake: "marriage hearse" — العرس (حياة) جنب الجنازة (موت). كلمة واحدة فيها التناقض.\n- "The Emigrée": "sunlight" المضيء بالذاكرة ⇄ "shadow" المدينة الفعلية.\n- "War Photographer" لـ Duffy: الغرفة الهادية بإنجلترا ⇄ "spools of suffering" من ميادين الحرب.\n\nالاستخدام: حدّد الصورتين المتناقضتين و فسّر وش يكشف التضاد.',
      },
      {
        id: 'kh-pc-14',
        front: 'Free Verse',
        frontAr: 'الشعر الحر (Free Verse)',
        back: "Definition: Poetry without a regular rhyme scheme, metre, or stanza pattern.\n\nExample (War Photographer, Duffy): The free verse mirrors the photographer's lack of control over the horrors he documents.\n\nEffect: Can feel natural and conversational, OR fragmented and unstable — context decides.\n\nWhen to mention: When a poem clearly lacks regular form — and always link this to meaning.",
        backAr:
          'التعريف: شعر بدون قافية منتظمة، بدون وزن ثابت، بدون عدد محدّد من الأبيات بكل مقطع. مو نفس النثر — لازال شعر، بس بدون قواعد شكلية صارمة.\n\nملاحظة: الـ free verse مختلف عن الـ blank verse. الـ blank verse فيه وزن إيامبي خماسي بدون قافية. الـ free verse ما عنده وزن منتظم.\n\nالأثر:\n- إحساس بحرية أو فوضى — على حسب القصيدة\n- إيقاع طبيعي قريب من الكلام اليومي\n- لمّا الموضوع فوضوي، الشكل الحر يعكسه\n- لمّا الموضوع مكسور أو مؤلم، انعدام التماسك الشكلي يعكس الانهيار\n\nأمثلة:\n- "War Photographer" لـ Duffy: الشعر الحر يعكس فقدان السيطرة على الذكريات المؤلمة من ميادين الحرب.\n- "Tissue" لـ Dharker: الشعر الحر يحاكي رقّة الورق و عبور المعاني عبر الحدود.\n- "Checking Out Me History" لـ Agard: الشعر الحر يكسر قواعد الإنجليزي الرسمي عشان يؤكّد على الهوية الكاريبية.\n\nالاستخدام: لمّا تكتشف شعر حر، اربط انعدام البنية بمضمون القصيدة.',
      },
      {
        id: 'kh-pc-15',
        front: 'Symbolism',
        frontAr: 'الرمزية (Symbolism)',
        back: 'Definition: Using an object, colour, or image to represent a deeper, often abstract meaning.\n\nExample (Poppies, Weir): The poppy traditionally symbolises remembrance and sacrifice; Weir uses it to ground a domestic moment of maternal grief.\n\nEffect: Compresses meaning, allows multiple readings, evokes cultural associations.\n\nWhen to mention: When an image clearly carries a significance beyond its literal sense.',
        backAr:
          'التعريف: استخدام صورة (شي، لون، حيوان) عشان تمثّل معنى أعمق. الفرق بين الاستعارة و الرمز: الاستعارة عابرة (سطر واحد)؛ الرمز يتكرّر و يكتسب طبقات معنى.\n\nالأثر:\n- ضغط معنى كبير بصورة صغيرة\n- استدعاء ثقافة كاملة وراء الصورة (الخشخاش = الذكرى البريطانية)\n- فتح القصيدة لتفسيرات متعدّدة\n\nأمثلة قوية:\n- "Poppies" لـ Weir: الخشخاش رمز ذكرى موتى الحرب البريطانيين. الأم تربطها بثياب ابنها قبل ما يرحل للجيش — رمز الحرب الوطني يصير رمز فقدان شخصي.\n- "Tissue" لـ Dharker: الورق رمز هشاشة كل الأنظمة البشرية — الكتب الدينية، الخرائط، السلطة. الورق "يخفّ بالضوء" — يكشف إن الحقيقة وراءه.\n- "Storm on the Island": "Stormont" — اسم الجزيرة المختصر يصير رمز سياسي (مقر برلمان إيرلندا الشمالية).\n- "Bayonet Charge": "the yellow hare" — الأرنب رمز الجنود البريئين اللي يموتون بدون فهم.\n- "Kamikaze": البحر رمز الحياة و العودة لها.\n\nالاستخدام: لمّا تشوف صورة تتكرّر، اسأل: وش الفكرة المجرّدة اللي ترمز لها؟',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────
  // DECK 5 — GCSE English LANGUAGE analytical vocabulary
  //          (rhetorical devices + sentence types) — 15 cards
  // ────────────────────────────────────────────────────────────────────
  {
    id: 'kh-gcse-lang-analytical',
    title: 'GCSE English Language — Analytical Vocab (Khaleeji)',
    description:
      'Adawat al-balagha wa anwa‘ al-jumal li-imtihan al-lugha al-injliziyya — 15 rhetorical devices and sentence types with Khaleeji explanations.',
    category: 'Techniques',
    board: 'All',
    cards: [
      {
        id: 'kh-la-1',
        front: 'Anaphora',
        frontAr: 'أنافورا / تكرار البداية (Anaphora)',
        back: 'Definition: Repetition of a word or phrase at the START of successive clauses or sentences.\n\nExample: "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields." (Churchill)\n\nEffect: Builds rhythm and emotional momentum; hammers home a key idea.\n\nUse in Paper 2 writing: To create a powerful, rhythmic argument — but use sparingly so it lands.',
        backAr:
          'التعريف: تكرار كلمة أو عبارة ببداية جمل متتالية. الكلمة إغريقية معناها "حمل لفوق."\n\nمثال شهير (تشرشل): "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields." الكلمة المتكرّرة "we shall fight" تبني إيقاع و عاطفة.\n\nالأثر:\n- يخلق إيقاع قوي و متراكم\n- يكثّف الفكرة المركزية\n- يجمع الجمهور حول صوت واحد\n\nاستخدامه بالامتحان (Paper 2 Q5 — الكتابة): استخدمه بحدر — مرة واحدة أو مرتين بالمقالة. مثلاً، إذا تكتب ضد التلوّث: "Our oceans are dying. Our skies are choking. Our forests are vanishing." التكرار يبني عاطفة قوية.\n\nبالقراءة (Q3 / Q4): لمّا تكتشف أنافورا بالنص، حلّل الأثر — كيف التكرار يجبر القارئ يحس مع الكاتب.',
      },
      {
        id: 'kh-la-2',
        front: 'Tricolon (Rule of Three)',
        frontAr: 'تريكولون / قاعدة الثلاث (Tricolon)',
        back: 'Definition: A series of three parallel words, phrases, or clauses used together.\n\nExample: "Government of the people, by the people, for the people." (Lincoln)\n\nEffect: Three feels complete and rhythmic — two is too few, four too many.\n\nUse in writing: For polished, authoritative argument moments.',
        backAr:
          'التعريف: ثلاث كلمات أو عبارات أو جمل متوازية تجي مع بعض. الإيقاع الثلاثي يحس "كامل" بالأذن البشرية — اثنان قليل، أربعة زيادة.\n\nمثال شهير (لينكولن): "Government of the people, by the people, for the people."\n\nأمثلة أدبية:\n- ديكنز: "It was the best of times, it was the worst of times..." (و يكمّل بأكثر من تريكولون)\n- شكسبير (يوليوس قيصر): "Friends, Romans, countrymen, lend me your ears."\n- تشرشل: "Blood, toil, tears and sweat."\n\nالأثر:\n- إيقاع مرضي و سلس\n- يعطي الجملة وزن خطابي\n- يسهل تذكّره (كل الشعارات الشهيرة ثلاثية)\n\nاستخدامه بالكتابة: لمّا تبغى تكون عبارة لها وقع — تريكولون يساعد. مثال: "We need action, courage, and conviction."\n\nبالتحليل: لمّا تكتشف ثلاث عناصر، سمّيها تريكولون و اشرح كيف الثلاثية تكثّف المعنى.',
      },
      {
        id: 'kh-la-3',
        front: 'Antithesis',
        frontAr: 'أنتيثيسيس / المقابلة (Antithesis)',
        back: 'Definition: Placing two opposite ideas in a balanced, parallel structure within one sentence.\n\nExample: "It was the best of times, it was the worst of times." (Dickens)\n\nEffect: Highlights contrast sharply; the balance makes the opposition feel inevitable.\n\nUse in writing: To present two sides of an argument in a single striking sentence.',
        backAr:
          'التعريف: حطّ فكرتين متضادتين بتركيب متوازي بنفس الجملة. الكلمة إغريقية معناها "وضع ضد."\n\nمثال (ديكنز): "It was the best of times, it was the worst of times" — نفس البنية النحوية، معاني متضادة.\n\nأمثلة ثانية:\n- نيل أرمسترونغ: "That\'s one small step for man, one giant leap for mankind." (small step ⇄ giant leap)\n- شكسبير (هاملت): "To be, or not to be." (وجود ⇄ عدم)\n- "Many are called, but few are chosen." (كثيرون ⇄ قليلون)\n\nالفرق بين الأنتيثيسيس و الجاكستابوزيشن:\n- الجاكستابوزيشن أوسع (أي تضاد بأي شكل)\n- الأنتيثيسيس أضيق و أكثر صرامة: لازم تركيب نحوي متوازي\n\nاستخدامه بالكتابة: عشان تصنع تعارض ذكي. مثلاً: "Phones connect us to strangers but disconnect us from the people next to us."\n\nبالتحليل: لمّا تشوف بنية متوازية فيها تضاد، سمّيها أنتيثيسيس و حلّل كيف التضاد يخلق معنى.',
      },
      {
        id: 'kh-la-4',
        front: 'Rhetorical Question',
        frontAr: 'سؤال بلاغي (Rhetorical Question)',
        back: 'Definition: A question asked for effect, not expecting an answer — the answer is implied.\n\nExample: "How long must we tolerate this injustice?"\n\nEffect: Engages the reader, provokes thought, and implies the answer is obvious — anyone who disagrees feels unreasonable.\n\nUse in writing: 1-2 strategically placed RQs per essay, never more.',
        backAr:
          'التعريف: سؤال يُطرح بدون توقّع جواب — لأن الجواب واضح من السياق. الهدف هو التأثير على القارئ، مو الحصول على معلومة.\n\nمثال: "How long must we tolerate this injustice?" — الجواب الواضح: "ما يمكن نتحمّل أكثر." السؤال يجبر القارئ يوافق ضمنياً.\n\nالأثر:\n- يحرّك الفكر\n- يخلق اتفاق ضمني (لأن الجواب واضح)\n- يجعل المعارضة تبدو غير عقلانية\n\nاستخدامه بالكتابة:\n- بمقدمة المقالة لجذب الانتباه: "Are we really prepared to accept a future without trees?"\n- بنهاية فقرة للضغط على القارئ\n- بـ ١-٢ مرات بالمقالة كحد أقصى — أكثر يحس متكلّف\n\nبالتحليل: لمّا تشوف سؤال بدون جواب صريح، حلّل وش الجواب الضمني و كيف الكاتب يستخدمه لكسب القارئ.\n\nملاحظة: لا تخلطه مع الـ hypophora — اللي هو سؤال ثم الكاتب يجاوب بنفسه.',
      },
      {
        id: 'kh-la-5',
        front: 'Hypophora',
        frontAr: 'هايبوفورا / سؤال و جواب (Hypophora)',
        back: 'Definition: A device where the writer asks a question and immediately answers it themselves.\n\nExample: "Is this fair? Of course not. It is an outrage that demands our attention."\n\nEffect: Controls the argument by anticipating the reader\'s questions; sounds conversational and authoritative.\n\nUse in writing: To structure a paragraph with a clear question-answer rhythm.',
        backAr:
          'التعريف: تقنية يطرح فيها الكاتب سؤال، ثم يجاوب بنفسه على طول. مختلف عن السؤال البلاغي — هناك ما فيه جواب صريح، هنا الكاتب يجاوب بسرعة.\n\nمثال: "Is this fair? Of course not. It is an outrage that demands our attention."\n\nالأثر:\n- يحاكي الحوار و النقاش\n- يسبق سؤال القارئ و يعطيه الإجابة المرغوبة\n- يخلق ثقة بنبرة الكاتب\n- يجدّد إيقاع الكتابة (بدل فقرات سرد متتالية)\n\nاستخدامه بالكتابة (Paper 2 Q5):\n- مفيد بمقالات الحجج (الموافقة أو الاعتراض)\n- مثال: "Why does this matter? Because every day we delay, another species disappears. Why now? Because waiting is no longer an option."\n\nبالتحليل: لمّا تكتشف سؤال يجيب عنه الكاتب على طول، سمّيها هايبوفورا و وضّح كيف تتحكم بمسار النقاش.',
      },
      {
        id: 'kh-la-6',
        front: 'Emotive Language',
        frontAr: 'اللغة العاطفية',
        back: 'Definition: Words chosen to trigger an emotional response rather than a rational one.\n\nExample: "The helpless, starving children were abandoned by those who should have protected them."\n\nEffect: Bypasses logic; appeals directly to sympathy, anger, guilt, or fear.\n\nUse in writing: Powerful adjectives and verbs — but don\'t overdo it or it sounds manipulative.',
        backAr:
          'التعريف: كلمات مختارة عشان تثير شعور — تعاطف، غضب، ذنب، خوف — بدل ما تثير العقل. الفرق بين "ماتوا" و "ذُبحوا" — الثاني عاطفي.\n\nأمثلة:\n- "The helpless, starving children were abandoned" — كلمات "helpless" و "starving" و "abandoned" كلها عاطفية.\n- "The corrupt politicians lined their pockets while their constituents suffered" — "corrupt" و "lined their pockets" و "suffered" تثير الغضب.\n- إعلانات الجمعيات الخيرية تستخدمها بكثرة.\n\nالأثر:\n- تكسر دفاع العقل و توصل للقلب\n- تُحرّك القارئ للفعل\n- لمّا تتكرّر بشدة، تبدو مفتعلة (manipulative) و تخسر مصداقيتها\n\nاستخدامه بالكتابة (Q5):\n- اختار صفات قوية لكن صادقة\n- ادمج اللغة العاطفية مع حقائق منطقية — مزيج "pathos + logos"\n- لا تستخدم نفس الصفة العاطفية مرتين بنفس الفقرة\n\nبالتحليل (Q3 / Q4): حدّد الكلمات العاطفية بالضبط و وضّح وش الشعور المستهدف.',
      },
      {
        id: 'kh-la-7',
        front: 'Direct Address',
        frontAr: 'المخاطبة المباشرة (Direct Address)',
        back: 'Definition: Speaking directly to the reader using "you" or "we."\n\nExample: "You know this is wrong. We can do better."\n\nEffect: "You" creates a personal, unavoidable appeal; "we" creates solidarity and shared responsibility.\n\nUse in writing: Alternate between "you" (challenging) and "we" (inclusive) for impact.',
        backAr:
          'التعريف: مخاطبة القارئ مباشرة بضمائر "you" أو "we" أو "us" أو "our." يكسر الجدار بين الكاتب و القارئ.\n\nمثال: "You know this is wrong. We can do better."\n\nالفرق بين "you" و "we":\n- "You": يخلق ضغط شخصي، يجبر القارئ يفكر بنفسه. مفيد بالتحدي.\n  مثال: "You scroll past these images every day. What are you doing about it?"\n- "We": يخلق وحدة و مسؤولية مشتركة. مفيد بالدعوة للعمل.\n  مثال: "We must act before it is too late. Our children are watching."\n\nالأثر:\n- يقرّب المسافة بين الكاتب و القارئ\n- يحوّل القارئ من متلقي إلى مشارك\n- يستحيل الهروب من النص\n\nاستخدامه بالكتابة: ابدأ بـ "you" لتثير الانتباه، ثم انتقل لـ "we" لتدعو للوحدة.\n\nبالتحليل: حدّد الضمائر و وضّح أثرها (شخصي vs جماعي).',
      },
      {
        id: 'kh-la-8',
        front: 'Hyperbole',
        frontAr: 'هايبربولي / المبالغة (Hyperbole)',
        back: 'Definition: Deliberate, obvious exaggeration for emphasis or dramatic effect.\n\nExample: "This is the greatest crisis facing our generation." / "I have told you a million times."\n\nEffect: Conveys strong feeling or creates humour; the underlying truth feels more urgent because of the exaggeration.\n\nUse in writing: For one or two powerful moments — never as a default.',
        backAr:
          'التعريف: مبالغة متعمّدة و واضحة — القارئ يعرف إنها مبالغة. الهدف يا تكثيف العاطفة أو خلق فكاهة.\n\nأمثلة:\n- "I have told you a million times" — واضح إنه مو حرفياً مليون، لكن الإحساس بالتكرار يوصل.\n- "This is the greatest crisis of our generation" — مبالغة عاطفية لإثارة الحماسة.\n- "I\'m starving" — مو حرفياً جوعان موت، لكن جوعان كثير.\n\nالأثر:\n- يكثّف الشعور\n- يثير دراما\n- بالأدب الكوميدي، يخلق ضحك\n- بالكتابة الجدية، إذا استُخدم بكثرة، يفقد قوّته\n\nاستخدامه بالكتابة (Q5):\n- لحظة واحدة قوية، ثم ادعمها بدليل واقعي\n- مثال: "Plastic pollution is an environmental catastrophe of biblical proportions. Last year alone, eight million tonnes entered our oceans."\n- المبالغة + حقيقة = حجة قوية\n\nبالتحليل: حدّد المبالغة و فسّر ليش الكاتب لجأ لها (تكثيف، سخرية، استفزاز).',
      },
      {
        id: 'kh-la-9',
        front: 'Anecdote',
        frontAr: 'أنيكدوت / حكاية شخصية (Anecdote)',
        back: 'Definition: A short personal story used to illustrate a point.\n\nExample: "Last summer, I watched a seven-year-old child pick up every piece of litter on a beach while adults walked past."\n\nEffect: Makes abstract arguments concrete and emotional; the reader connects with a real (or realistic) story.\n\nUse in writing: Open with a short, vivid anecdote to hook the reader.',
        backAr:
          'التعريف: قصة شخصية قصيرة تستخدم عشان تثبت نقطة. الناس تنسى الإحصائيات، لكن تتذكّر القصص.\n\nمثال: "Last summer, I watched a seven-year-old child pick up every piece of litter on a beach while adults walked past. If a child can act, what is our excuse?"\n\nالأثر:\n- يحوّل الفكرة المجرّدة لشي ملموس\n- يخلق تعاطف مباشر\n- يعطي الكاتب مصداقية (يبدو إنه عاش الموقف)\n- يكسر إيقاع الحجة بقصة\n\nاستخدامه بالكتابة (Q5):\n- ممتاز كبداية مقالة — يجذب القارئ من أول سطر\n- ممكن يكون من خبرتك أو خبرة شخص تعرفه\n- لو ما عندك قصة، اخترع واحدة معقولة — الممتحن مو راح يتحقّق\n- اجعلها قصيرة (٢-٣ جمل) و قوية\n\nبالتحليل: لمّا تكتشف قصة شخصية بنص، حلّل وش تخدم — هل تبني تعاطف؟ مصداقية؟ تنوّع إيقاعي؟',
      },
      {
        id: 'kh-la-10',
        front: 'Statistic / Fact',
        frontAr: 'إحصائية / حقيقة',
        back: 'Definition: A specific number or verifiable claim used to support an argument.\n\nExample: "Research shows that 73% of students perform better with regular breaks."\n\nEffect: Makes an argument feel rational, evidence-based, undeniable. Appeals to the reader\'s intelligence.\n\nUse in writing: Cite statistics (real or plausible) to back up bold claims.',
        backAr:
          'التعريف: رقم محدّد أو ادعاء يمكن التحقّق منه يستخدم لدعم الحجة. الإحصائية ترفع المقالة من رأي إلى حجة مدعومة.\n\nمثال: "Research shows that 73% of students perform better with regular breaks." الرقم محدّد و يبدو علمي.\n\nالأثر:\n- يخلق ثقة بالحجة\n- يخاطب العقل (logos بمفهوم أرسطو)\n- يصعّب على القارئ يخالف\n\nاستخدامه بالكتابة (Q5):\n- لمّا تكتب مقالة حجج، لازم تدرج إحصائيات\n- مو لازم تكون دقيقة ١٠٠٪ — الممتحن ما يتحقّق. خلّيها معقولة و دقيقة الشكل ("٧٣٪" أحسن من "كثير")\n- اربط الإحصائية بالحجة على طول، لا تتركها معلّقة\n- مثال: "Eight million tonnes of plastic enter our oceans every year. That is one truck-load every minute, of every day."\n\nبالتحليل: لمّا تشوف رقم محدّد بنص، حلّل أثره — كيف يقوّي مصداقية الكاتب؟',
      },
      {
        id: 'kh-la-11',
        front: 'Simple Sentence',
        frontAr: 'الجملة البسيطة',
        back: 'Definition: A sentence with one independent clause — one subject, one verb, one complete idea.\n\nExample: "Macbeth murdered Duncan."\n\nEffect: Creates impact, finality, clarity. Stops the reader. Often the most powerful sentence in a paragraph.\n\nUse in writing: Drop a short, simple sentence after a long complex one for emphasis.',
        backAr:
          'التعريف: جملة فيها فعل واحد و فاعل واحد و فكرة واحدة كاملة. ما فيها روابط أو جمل فرعية. أقصر و أبسط أنواع الجمل.\n\nمثال:\n- "Macbeth murdered Duncan."\n- "It was over."\n- "She refused."\n- "Silence."\n\nالأثر:\n- تأثير قوي و حاسم\n- توقف القارئ\n- توضّح الفكرة بدون التواء\n- بعد جملة طويلة، الجملة البسيطة تنزل زي مطرقة\n\nاستخدامها بالكتابة (Q5):\n- اختمها كثير بفقرات قوية. مثال: "We have ignored the warning signs for decades — the rising temperatures, the dying coral, the burning forests, the floods that come once a century but now arrive every spring. It is too late for excuses. The time to act is now."\n- الجملة البسيطة "The time to act is now" تنفجر بعد كل الوصف الطويل.\n\nبالتحليل: لمّا تكتشف جملة قصيرة بسيطة بنص (خاصة بعد جمل طويلة)، حلّل ليش الكاتب اختار البساطة بهالموقع.',
      },
      {
        id: 'kh-la-12',
        front: 'Compound Sentence',
        frontAr: 'الجملة المركّبة (Compound)',
        back: 'Definition: Two or more independent clauses joined by a coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so) or a semicolon.\n\nExample: "Macbeth wanted the throne, but he feared the consequences."\n\nEffect: Joins related ideas of equal weight; creates balance.\n\nUse in writing: When two ideas are equally important and need linking.',
        backAr:
          'التعريف: جملتان مستقلتان أو أكثر متّصلتان بأداة عطف (and, but, or, so, yet) أو بفاصلة منقوطة (;).\n\nأدوات العطف الإنجليزية الأساسية تُعرف بـ FANBOYS:\n- For (لأن)\n- And (و)\n- Nor (و لا)\n- But (لكن)\n- Or (أو)\n- Yet (مع ذلك)\n- So (لذلك)\n\nمثال: "Macbeth wanted the throne, but he feared the consequences."\n\nالأثر:\n- يربط فكرتين متساويتين بالوزن\n- يخلق توازن و تنوّع إيقاعي\n- مفيد لإظهار التناقض ("but") أو السببية ("so") أو الإضافة ("and")\n\nاستخدامها بالكتابة:\n- اخلطها مع جمل بسيطة و معقّدة عشان يكون نصّك متنوّع الإيقاع\n- ممتازة لإظهار التناقض: "He had wealth, yet he felt empty."\n\nبالتحليل: لمّا تكتشف جملتين مرتبطتين بـ "but" أو "so"، حلّل العلاقة بينهم (تناقض، سبب، إضافة).',
      },
      {
        id: 'kh-la-13',
        front: 'Complex Sentence',
        frontAr: 'الجملة المعقّدة (Complex)',
        back: 'Definition: A sentence containing one independent clause and at least one dependent clause, joined by a subordinator (although, because, when, while, if, since, etc.).\n\nExample: "Although he had everything, Macbeth could not sleep."\n\nEffect: Shows nuance, layered thought, cause-effect, or concession.\n\nUse in writing: For sophisticated, qualified arguments.',
        backAr:
          'التعريف: جملة فيها جملة مستقلة (تقدر تقف وحدها) و جملة تابعة (ما تكتمل وحدها) تبدأ بأداة ربط مثل: although, because, when, while, if, since, before, after, unless, until.\n\nمثال: "Although he had everything, Macbeth could not sleep."\n- الجملة التابعة: "Although he had everything" — ما تكتمل وحدها\n- الجملة المستقلة: "Macbeth could not sleep" — تكتمل وحدها\n\nالأثر:\n- تكشف عن تفكير معقّد و طبقات\n- توضّح علاقات السبب و النتيجة، الشرط، التضاد\n- تخلق إيقاع كتابة "ناضج"\n\nاستخدامها بالكتابة (Q5):\n- مهمة جداً لأي مقالة حجج. تظهر أنك تستطيع التفكير المعقّد.\n- مثال: "While some argue that phones distract students, the evidence suggests they enrich learning when used responsibly."\n- اخلطها مع جمل قصيرة بسيطة — التنوّع يبني إيقاع قوي.\n\nبالتحليل: لمّا تكتشف "although" أو "because" أو "while"، حدّد الجملة التابعة و حلّل العلاقة (تضاد، سبب، شرط).',
      },
      {
        id: 'kh-la-14',
        front: 'Compound-Complex Sentence',
        frontAr: 'الجملة المركّبة المعقّدة',
        back: 'Definition: A sentence with at least two independent clauses AND at least one dependent clause.\n\nExample: "Although Macbeth had everything he wanted, he could not sleep, and his guilt grew every night."\n\nEffect: Conveys layered, sophisticated thought; mirrors complex situations.\n\nUse in writing: Use sparingly — for moments where the argument really is multi-layered. Overuse makes prose dense.',
        backAr:
          'التعريف: جملة فيها على الأقل جملتين مستقلتين و جملة تابعة واحدة. هي مزيج من الجملة المركّبة (compound) و المعقّدة (complex).\n\nمثال: "Although Macbeth had everything he wanted, he could not sleep, and his guilt grew every night."\n- جملة تابعة: "Although Macbeth had everything he wanted"\n- جملة مستقلة ١: "he could not sleep"\n- جملة مستقلة ٢: "his guilt grew every night"\n- مربوطة بـ "and"\n\nالأثر:\n- تنقل تفكير متعدّد الطبقات\n- مناسبة للمواقف المعقّدة الحقيقية\n- علامة كتابة متطوّرة (يحبّها الممتحنين بالـ GCSE)\n\nاستخدامها بالكتابة (Q5):\n- استخدمها بحدر — مرة أو مرتين بالمقالة\n- لو زدت بها، النص يصير كثيف و صعب القراءة\n- اخلطها مع جمل بسيطة عشان تنوّع الإيقاع\n- مثال: "While many believe that fast food is harmless, the statistics tell a different story, and parents must act before it is too late."\n\nبالتحليل: لمّا تكتشف جملة فيها أكثر من رابط (although + and)، حلّل التعقيد و ليش الكاتب اختار هالشكل.',
      },
      {
        id: 'kh-la-15',
        front: 'Minor Sentence (Fragment)',
        frontAr: 'الجملة الناقصة / الفرغمنت (Minor Sentence)',
        back: 'Definition: An incomplete sentence — usually lacks a main verb — used deliberately for stylistic effect.\n\nExample: "Silence. Then the explosion."\n\nEffect: Creates impact, urgency, fragmentation, or stream-of-consciousness.\n\nUse in writing: For dramatic moments — but never accidentally. Mark them clearly as a stylistic choice.',
        backAr:
          'التعريف: جملة ناقصة — عادة بدون فعل رئيسي — تُستخدم بقصد لتأثير أسلوبي. مو خطأ نحوي إذا استُخدمت متعمّد، لكن خطأ إذا كانت غير مقصودة.\n\nأمثلة:\n- "Silence. Then the explosion." (لا فعل رئيسي بالأولى)\n- "A small room. A single window. No way out." (سلسلة وصف بدون أفعال)\n- "Never." (جملة من كلمة واحدة)\n- "Why?" (سؤال ناقص)\n\nالأثر:\n- يخلق وقع درامي\n- يكسر الإيقاع و يجذب الانتباه\n- يحاكي تيار الوعي و الفكر المتقطّع\n- يخلق توتر و ترقّب\n\nاستخدامها بالكتابة (Q5):\n- استخدمها بحدر — ٢-٣ مرات بمقالة كحد أقصى\n- مفيدة جداً ببداية مشهد وصفي قوي: "Darkness. Then footsteps."\n- بمشاهد توتر و رعب\n- لا تستخدمها لو ما تعرف توضّح للممتحن إنها أسلوبية متعمّدة (السياق لازم يكون واضح)\n\nبالتحليل: لمّا تكتشف جملة بدون فعل، تأكّد إنها متعمّدة (سياق وصفي قوي، وقع درامي) و حلّل الأثر.',
      },
    ],
  },
]

export default khaleejiVocabDecks
