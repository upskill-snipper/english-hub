import type { Dictionary } from './dictionary'

/**
 * The homepage as one scroll story (20 October 2026): a hero with the text
 * search and the board picker, a games band, five chapters that take Macbeth
 * from the first page to the exam room, and an epilogue with the one call to
 * action. Every fact here is from section 3 of the landing-page design brief of
 * 18 October 2026, itself built from the verified claim sheet TEHC-079; a
 * number that is not in that pack is not on the page.
 *
 * Student-facing lines are Gulf colloquial Arabic, as the other shards are.
 * Exam and brand terms (GCSE, IGCSE, AQA, EAL, KS3, IELTS, AI) and the names of
 * texts and games stay in Latin script in every locale, as they do on the pages
 * the links open. "{board}", "{boards}", "{n}", "{title}" and the price
 * placeholders are filled by the components. No em dashes, no exclamation
 * marks, in any locale.
 *
 * What this shard replaced: dictionary-home-hero.ts (home.lp.*, home.play.*),
 * dictionary-homepage.ts (homepage.*) and the home.* half of
 * dictionary-mkt-home.ts, all of whose keys were read only by the old
 * src/app/page.tsx: 87 links, nine of them to school sales and one to sign-up,
 * and no product on the page. Their copy also carried claims the fact pack
 * forbids ("AI-assisted", "examiner-style feedback", a school pilot), which is
 * why none of it was reused.
 */
export const HOME_STORY_DICTIONARY: Dictionary = {
  // ─── Shared ───────────────────────────────────────────────────────────────
  'home.story.cta.primary': {
    en: 'Start your 7-day free trial',
    ar: 'ابدأ تجربتك المجانية لمدة 7 أيام',
    es: 'Empieza tu prueba gratuita de 7 días',
  },
  'home.story.cta.no_card': {
    en: 'No card needed.',
    ar: 'ما تحتاج بطاقة.',
    es: 'No hace falta tarjeta.',
  },
  // Joins a list of board names: "AQA, OCR and Eduqas".
  'home.story.and': { en: 'and', ar: 'و', es: 'y' },
  'home.story.list_sep': { en: ', ', ar: '، ', es: ', ' },
  'home.story.library': {
    en: 'Browse every set text',
    ar: 'تصفح كل النصوص المقررة',
    es: 'Explora todos los textos prescritos',
  },
  'home.story.library_board': {
    en: 'Browse your {board} set texts',
    ar: 'تصفح نصوصك المقررة في {board}',
    es: 'Explora tus textos prescritos de {board}',
  },
  'home.story.search_again': {
    en: 'Search for another text',
    ar: 'دوّر على نص ثاني',
    es: 'Busca otro texto',
  },

  // ─── Hero ─────────────────────────────────────────────────────────────────
  'home.story.hero.eyebrow': {
    en: 'Start your anthology.',
    ar: 'ابدأ مختاراتك.',
    es: 'Empieza tu antología.',
  },
  'home.story.hero.h1': {
    en: 'English revision, one set text at a time.',
    ar: 'مراجعة الإنجليزي، نص مقرر واحد في كل مرة.',
    es: 'Repaso de inglés, un texto prescrito cada vez.',
  },
  'home.story.hero.sub': {
    en: 'For GCSE and IGCSE, built around the set texts. Study guides, quests and comics, free with no account.',
    ar: 'لطلاب GCSE وIGCSE، مبنية حول النصوص المقررة. أدلة دراسة ومهام وقصص مصورة، ببلاش وبدون حساب.',
    es: 'Para GCSE e IGCSE, construido en torno a los textos prescritos. Guías de estudio, misiones y cómics, gratis y sin cuenta.',
  },
  'home.story.hero.quiet_before': {
    en: 'Not ready for an account?',
    ar: 'مو جاهز تسوي حساب؟',
    es: '¿Aún no quieres una cuenta?',
  },
  'home.story.hero.quiet_link': {
    en: 'Play a quest',
    ar: 'العب مهمة',
    es: 'Juega una misión',
  },
  'home.story.hero.quiet_after': {
    en: 'on your text instead.',
    ar: 'على نصك بدال ذلك.',
    es: 'sobre tu texto.',
  },
  'home.story.hero.you_study': {
    en: 'You study {board}.',
    ar: 'إنت تدرس {board}.',
    es: 'Estudias con {board}.',
  },
  'home.story.hero.change_board': {
    en: 'Change board',
    ar: 'غيّر البورد',
    es: 'Cambiar de junta',
  },
  'home.story.hero.your_shelf': {
    en: 'See your {board} set texts',
    ar: 'شوف نصوصك المقررة في {board}',
    es: 'Ver tus textos prescritos de {board}',
  },
  // For a remembered board that sets no texts (KS3, Cambridge 0500 and 0990),
  // whose landing page is its hub rather than a shelf.
  'home.story.hero.your_hub': {
    en: 'Open your {board} hub',
    ar: 'افتح صفحة {board} مالك',
    es: 'Abre tu página de {board}',
  },
  'home.story.hero.plate1_alt': {
    en: 'Three witches on a bare heath in a thunderstorm, drawn in black and cream. A bolt of lightning splits the sky above them, a dead thorn tree bends in the wind on the left, and the fires of a battle burn along the horizon on the right.',
    ar: 'ثلاث ساحرات على أرض قاحلة في عاصفة رعدية، مرسومات بالأسود والكريمي. برق يشق السماء فوقهن، وشجرة شوك ميتة تنحني مع الريح على اليسار، ونيران معركة تشتعل على الأفق يمين الصورة.',
    es: 'Tres brujas en un páramo desnudo bajo una tormenta, dibujadas en negro y crema. Un rayo parte el cielo sobre ellas, un espino muerto se dobla con el viento a la izquierda y los fuegos de una batalla arden en el horizonte a la derecha.',
  },
  'home.story.hero.plate1_caption': {
    en: "Macbeth, Act 1, Scene 1, from the site's comic.",
    ar: 'Macbeth، الفصل 1، المشهد 1، من القصة المصورة في الموقع.',
    es: 'Macbeth, acto 1, escena 1, del cómic del sitio.',
  },
  'home.story.hero.plate2_alt': {
    en: "Lady Macbeth alone in a dark stone chamber, drawn in black and cream, holding her husband's letter lowered in one hand and raising her other arm towards a tall window, where a raven sits on the battlements and black smoke billows in.",
    ar: 'Lady Macbeth لحالها في غرفة حجرية معتمة، مرسومة بالأسود والكريمي، تمسك رسالة زوجها بيد منزّلة وترفع يدها الثانية نحو نافذة عالية، فيها غراب على الأسوار ودخان أسود يدخل منها.',
    es: 'Lady Macbeth sola en una cámara de piedra oscura, dibujada en negro y crema, con la carta de su marido en una mano bajada y el otro brazo alzado hacia una ventana alta, donde un cuervo se posa en las almenas y entra un humo negro.',
  },
  'home.story.hero.plate2_caption': {
    en: 'Act 1, Scene 5. Lady Macbeth reads the letter.',
    ar: 'الفصل 1، المشهد 5. Lady Macbeth تقرأ الرسالة.',
    es: 'Acto 1, escena 5. Lady Macbeth lee la carta.',
  },

  // ─── Board picker strip ───────────────────────────────────────────────────
  'home.story.boards.heading': {
    en: 'Pick your exam board to see its set texts',
    ar: 'اختر بورد الامتحان مالك',
    es: 'Elige tu junta examinadora',
  },
  // What choosing a board really does on this site, and nothing more: the
  // shelf is filtered by board (src/lib/revision/shelf.ts) and the search
  // index tags each text with its boards (src/lib/search/text-search-index.ts).
  // A text page does not warn when the chosen board does not set it; it only
  // sends "back" to the full library instead of the board shelf, so no warning
  // is promised here.
  'home.story.boards.sub': {
    en: "Choosing your board is how the site shows the right texts. Each text names the boards that set it, and the text search shows each result's boards.",
    ar: 'اختيار البورد هو الطريقة اللي يعرض فيها الموقع النصوص الصح. كل نص يذكر البوردات اللي تقرره، والبحث يبيّن لك بوردات كل نتيجة.',
    es: 'Elegir tu junta es como el sitio te muestra los textos correctos. Cada texto indica las juntas que lo fijan, y el buscador muestra las juntas de cada resultado.',
  },
  'home.story.boards.gcse': { en: 'GCSE', ar: 'GCSE', es: 'GCSE' },
  'home.story.boards.igcse': {
    en: 'International GCSE',
    ar: 'International GCSE',
    es: 'International GCSE',
  },
  'home.story.boards.open_shelf': {
    en: 'See its set texts',
    ar: 'شوف نصوصه المقررة',
    es: 'Ver sus textos prescritos',
  },
  'home.story.boards.open_hub': {
    en: 'Open its hub',
    ar: 'افتح صفحته',
    es: 'Abrir su página',
  },

  // ─── Games band ───────────────────────────────────────────────────────────
  'home.story.games.eyebrow': {
    en: 'Before the story',
    ar: 'قبل القصة',
    es: 'Antes de la historia',
  },
  'home.story.games.heading': {
    en: 'Warm up with a game.',
    ar: 'سخّن بلعبة.',
    es: 'Calienta con un juego.',
  },
  'home.story.games.body': {
    en: '37 games for EAL, KS3 and GCSE, marked as you play. All 37 explain every answer. Some are timed, and none needs an account.',
    ar: '37 لعبة لطلاب EAL وKS3 وGCSE، تتصحح وإنت تلعب. كل الـ 37 تشرح كل إجابة. بعضها بوقت محدد، وولا وحدة منها تحتاج حساب.',
    es: '37 juegos para EAL, KS3 y GCSE, corregidos mientras juegas. Los 37 explican cada respuesta. Algunos tienen tiempo, y ninguno necesita cuenta.',
  },
  'home.story.games.quests': {
    en: 'Set-text quests',
    ar: 'مهام النصوص المقررة',
    es: 'Misiones de los textos',
  },
  'home.story.games.theme_matcher': {
    en: 'Theme Matcher',
    ar: 'Theme Matcher',
    es: 'Theme Matcher',
  },
  'home.story.games.speed_analysis': {
    en: 'Speed Analysis',
    ar: 'Speed Analysis',
    es: 'Speed Analysis',
  },
  'home.story.games.quote_detective': {
    en: 'Quote Detective',
    ar: 'Quote Detective',
    es: 'Quote Detective',
  },
  'home.story.games.grade_climber': {
    en: 'Grade Climber',
    ar: 'Grade Climber',
    es: 'Grade Climber',
  },
  'home.story.games.all': {
    en: 'All 37 games',
    ar: 'كل الـ 37 لعبة',
    es: 'Los 37 juegos',
  },

  // ─── The story: head and chapter index ────────────────────────────────────
  'home.story.lede.eyebrow': {
    en: 'One text, five chapters',
    ar: 'نص واحد، خمسة فصول',
    es: 'Un texto, cinco capítulos',
  },
  'home.story.lede.body': {
    en: 'Below, one student takes Macbeth from the first page to the exam room. Study guides and quests cover 100+ set texts. Some texts also have the full text to read, and a comic.',
    ar: 'تحت، طالب واحد ياخذ Macbeth من أول صفحة لين قاعة الامتحان. كل نص مقرر له دليل دراسة ومهام؛ أما القارئ والقصة المصورة والامتحانات التجريبية وتصحيح الـ AI فموجودة حيث يوفّرها النص.',
    es: 'Abajo, un estudiante lleva Macbeth desde la primera página hasta la sala de examen. Cada texto prescrito tiene una guía de estudio y misiones; el lector, el cómic, los exámenes de prueba y la corrección con IA están donde el texto los tiene.',
  },
  'home.story.index.label': { en: 'Chapters', ar: 'الفصول', es: 'Capítulos' },
  'home.story.index.read': { en: 'Read it', ar: 'اقرأه', es: 'Léelo' },
  'home.story.index.read_short': { en: 'Read', ar: 'اقرأ', es: 'Leer' },
  'home.story.index.play': { en: 'Play it', ar: 'العبه', es: 'Juégalo' },
  'home.story.index.play_short': { en: 'Play', ar: 'العب', es: 'Jugar' },
  'home.story.index.revise': { en: 'Revise it', ar: 'راجعه', es: 'Repásalo' },
  'home.story.index.revise_short': { en: 'Revise', ar: 'راجع', es: 'Repasar' },
  'home.story.index.write': { en: 'Write about it', ar: 'اكتب عنه', es: 'Escribe sobre él' },
  'home.story.index.write_short': { en: 'Write', ar: 'اكتب', es: 'Escribir' },
  'home.story.index.sit': { en: 'Sit it', ar: 'امتحن فيه', es: 'Examínate' },
  'home.story.index.sit_short': { en: 'Sit', ar: 'امتحن', es: 'Examen' },
  // {n} is the Roman numeral, {title} the index label above.
  'home.story.chapter_eyebrow': {
    en: 'Chapter {n} of V. {title}',
    ar: 'الفصل {n} من V. {title}',
    es: 'Capítulo {n} de V. {title}',
  },

  // ─── Chapter I: Read it ───────────────────────────────────────────────────
  'home.story.read.h2': {
    en: 'Read the whole play, with the key lines marked.',
    ar: 'اقرأ المسرحية كاملة، والأسطر المهمة معلّمة.',
    es: 'Lee la obra entera, con las líneas clave marcadas.',
  },
  'home.story.read.p1': {
    en: "Macbeth is one of 30+ set texts free to read in full. Key quotations are highlighted in 22 texts, so the lines worth learning stand out as you read. Macbeth's key extracts are annotated line by line.",
    ar: 'Macbeth واحد من أكثر من 30 نص مقرر تقدر تقراه كامل ببلاش. الاقتباسات المهمة مظلّلة في 22 نص، عشان الأسطر اللي تستاهل الحفظ تبيّن لك وإنت تقرأ. والمقاطع الرئيسية من Macbeth مشروحة سطر بسطر.',
    es: 'Macbeth es uno de los más de 30 textos prescritos que se pueden leer enteros gratis. Las citas clave están resaltadas en 22 textos, para que las líneas que merece la pena aprender destaquen mientras lees. Los extractos clave de Macbeth están anotados línea a línea.',
  },
  'home.story.read.p2': {
    en: 'It is also one of 22 set texts drawn as linocut-style comics: 400+ panels, kept inside the study guide.',
    ar: 'وهو كمان واحد من 22 نص مقرر مرسوم كقصص مصورة بأسلوب الطباعة الخشبية: أكثر من 400 لوحة، كلها داخل دليل الدراسة.',
    es: 'También es uno de los 22 textos prescritos dibujados como cómics de estilo linograbado: más de 400 viñetas, dentro de la guía de estudio.',
  },
  // {boards} is built from the set-text registry, never typed.
  'home.story.read.boards': {
    en: 'Macbeth is set by {boards}.',
    ar: 'Macbeth مقرر عند {boards}.',
    es: 'Macbeth lo fijan {boards}.',
  },
  'home.story.read.not_your_board': {
    en: '{board} does not set Macbeth, so your own texts are the ones to follow.',
    ar: '{board} ما يقرر Macbeth، فنصوصك إنت هي اللي تتابعها.',
    es: '{board} no fija Macbeth, así que los textos que debes seguir son los tuyos.',
  },
  'home.story.read.link': {
    en: 'Read Macbeth in full',
    ar: 'اقرأ Macbeth كامل',
    es: 'Lee Macbeth entero',
  },
  'home.story.read.shot_alt': {
    en: "The reader page for Macbeth on a laptop: the contents list of scenes beside Act 1, Scene 1, with the line 'When the hurlyburly's done' highlighted as a key quotation.",
    ar: "صفحة القارئ لـ Macbeth على لابتوب: قائمة المحتويات فيها 28 مشهد جنب الفصل 1، المشهد 1، والسطر 'When the hurlyburly's done' مظلّل كاقتباس مهم.",
    es: "La página del lector de Macbeth en un portátil: el índice de 28 escenas junto al acto 1, escena 1, con la línea 'When the hurlyburly's done' resaltada como cita clave.",
  },
  'home.story.read.shot_caption': {
    en: 'The reader, Act 1, Scene 1, with a key quotation highlighted.',
    ar: 'القارئ، الفصل 1، المشهد 1، واقتباس مهم مظلّل.',
    es: 'El lector, acto 1, escena 1, con una cita clave resaltada.',
  },
  'home.story.read.shot_phone_alt': {
    en: "Act 1, Scene 1 of Macbeth in the reader, with the line 'When the hurlyburly's done' highlighted as a key quotation.",
    ar: "الفصل 1، المشهد 1 من Macbeth في القارئ، والسطر 'When the hurlyburly's done' مظلّل كاقتباس مهم.",
    es: "Acto 1, escena 1 de Macbeth en el lector, con la línea 'When the hurlyburly's done' resaltada como cita clave.",
  },
  'home.story.read.shot_phone_caption': {
    en: 'A key quotation, highlighted in the reader.',
    ar: 'اقتباس مهم، مظلّل في القارئ.',
    es: 'Una cita clave, resaltada en el lector.',
  },
  'home.story.read.plate_alt': {
    en: 'Macbeth, a soldier in a mail shirt and cloak, starts back from three witches on a heath, drawn in black and cream under a sky split between storm and sun. The nearest witch points a long finger at him, Banquo stands his ground behind him with a spear, and a red crown hangs in the air above Macbeth’s head.',
    ar: 'Macbeth، جندي بدرع حلقي وعباءة، يرجع للخلف مذعور من ثلاث ساحرات على أرض قاحلة، مرسوم بالأسود والكريمي تحت سماء مقسومة بين عاصفة وشمس. أقرب ساحرة تشير له بإصبع طويل، وBanquo واقف وراه ثابت برمح، وتاج أحمر معلّق في الهوا فوق راس Macbeth.',
    es: 'Macbeth, un soldado con cota de malla y capa, retrocede ante tres brujas en un páramo, dibujado en negro y crema bajo un cielo partido entre tormenta y sol. La bruja más cercana le señala con un dedo largo, Banquo se mantiene firme detrás de él con una lanza, y una corona roja flota en el aire sobre la cabeza de Macbeth.',
  },
  'home.story.read.plate_caption': {
    en: 'Act 1, Scene 3. The prophecies, from the comic.',
    ar: 'الفصل 1، المشهد 3. النبوءات، من القصة المصورة.',
    es: 'Acto 1, escena 3. Las profecías, del cómic.',
  },

  // ─── Chapter II: Play it ──────────────────────────────────────────────────
  'home.story.play.h2': {
    en: 'Play the text as a quest, one part at a time.',
    ar: 'العب النص كمهمة، جزء ورا جزء.',
    es: 'Juega el texto como una misión, parte por parte.',
  },
  'home.story.play.p1': {
    en: 'Quests for 100+ set texts: 600+ levels, 8,700+ questions, most answers with the reason. Put the moments of Act 1 in order, then work through the levels. Finish a part and its panels ink in.',
    ar: 'مهام لأكثر من 100 نص مقرر: أكثر من 600 مستوى، وأكثر من 8,700 سؤال، وأغلب الإجابات مع السبب. رتّب لحظات الفصل الأول، بعدين كمّل المستويات؛ خلّص جزء وتنرسم لوحاته في نسختك إنت من القصة المصورة.',
    es: 'Misiones para más de 100 textos prescritos: más de 600 niveles, más de 8.700 preguntas, la mayoría de las respuestas con el porqué. Ordena los momentos del acto 1 y luego avanza por los niveles; termina una parte y sus viñetas se dibujan en tu propia copia del cómic.',
  },
  'home.story.play.p2': {
    en: 'No timers, no daily streaks, no leaderboards, no lives; a flame counts right answers in a row. Signed in, answers are saved; not signed in, nothing is sent.',
    ar: 'بدون مؤقتات، ولا سلاسل يومية، ولا لوحات متصدرين، ولا أرواح؛ شعلة تعدّ إجاباتك الصح المتتالية. إذا إنت مسجّل دخول، إجاباتك تنحفظ؛ وإذا مو مسجّل، ما ينرسل شي.',
    es: 'Sin temporizadores, sin rachas diarias, sin clasificaciones, sin vidas; una llama cuenta las respuestas correctas seguidas. Con sesión iniciada, las respuestas se guardan; sin sesión, no se envía nada.',
  },
  'home.story.play.link': {
    en: 'Play the Macbeth quest',
    ar: 'العب مهمة Macbeth',
    es: 'Juega la misión de Macbeth',
  },
  'home.story.play.shot_alt': {
    en: 'The Macbeth quest page on a laptop: the title, an Open the study guide link, a progress card at 0 of 21 stars, a Start: Part 1 button, and the first level, Part 1, which is up next.',
    ar: 'صفحة مهمة Macbeth على اللابتوب: العنوان، ورابط فتح دليل الدراسة، وبطاقة التقدم على صفر من 21 نجمة، وزر البدء بالجزء الأول، والمستوى الأول وهو التالي.',
    es: 'La página de la misión de Macbeth en un portátil: el título, el enlace para abrir la guía de estudio, la tarjeta de progreso con 0 de 21 estrellas, el botón Start: Part 1 y el primer nivel, que es el siguiente.',
  },
  'home.story.play.phone_alt': {
    en: 'Part 1 of the Macbeth quest on a phone: a story-order challenge with five comic thumbnails to tap into order, a flame counter at zero, and a Check the order button.',
    ar: 'الجزء الأول من مهمة Macbeth على جوال: تحدي ترتيب القصة فيه خمس صور مصغّرة من القصة المصورة تضغطها بالترتيب، وعدّاد شعلة على صفر، وزر Check the order.',
    es: 'La parte 1 de la misión de Macbeth en un móvil: un reto de orden de la historia con cinco miniaturas del cómic para tocar en orden, un contador de llama a cero y un botón Check the order.',
  },
  'home.story.play.caption': {
    en: 'The quest map, and the first level on a phone.',
    ar: 'خريطة المهمة، والمستوى الأول على جوال.',
    es: 'El mapa de la misión, y el primer nivel en un móvil.',
  },
  'home.story.play.phone_caption': {
    en: 'The first level of the Macbeth quest, on a phone.',
    ar: 'المستوى الأول من مهمة Macbeth، على جوال.',
    es: 'El primer nivel de la misión de Macbeth, en un móvil.',
  },

  // ─── Chapter III: Revise it ───────────────────────────────────────────────
  'home.story.revise.h2': {
    en: 'Revise it with the study guide.',
    ar: 'راجعه مع دليل الدراسة.',
    es: 'Repásalo con la guía de estudio.',
  },
  'home.story.revise.p1': {
    en: "100+ set-text study guides. Macbeth's has an overview, the acts, characters, themes, context, key quotations, flashcards and a quiz. Revision notes for 40+ texts and 2,000+ flashcards sit alongside, with exam technique and common mistakes.",
    ar: 'أكثر من 100 دليل دراسة للنصوص المقررة. دليل Macbeth فيه نظرة عامة، والفصول، والشخصيات، والمواضيع، والسياق، والاقتباسات المهمة، وبطاقات مراجعة، واختبار قصير. وجنبه ملاحظات مراجعة لأكثر من 40 نص وأكثر من 2,000 بطاقة مراجعة، مع تقنيات الامتحان والأخطاء الشائعة.',
    es: 'Más de 100 guías de estudio de textos prescritos. La de Macbeth tiene una visión general, los actos, los personajes, los temas, el contexto, las citas clave, tarjetas de repaso y un cuestionario. Al lado hay notas de repaso de más de 40 textos y más de 2.000 tarjetas, con técnica de examen y errores frecuentes.',
  },
  'home.story.revise.p2': {
    en: 'All of it is free with no account, so revision can start tonight.',
    ar: 'كل هذا ببلاش وبدون حساب، فالمراجعة تقدر تبدأ الليلة.',
    es: 'Todo gratis y sin cuenta, así que el repaso puede empezar esta noche.',
  },
  'home.story.revise.link': {
    en: 'Open the Macbeth study guide',
    ar: 'افتح دليل دراسة Macbeth',
    es: 'Abre la guía de estudio de Macbeth',
  },
  'home.story.revise.shot_alt': {
    en: 'The Macbeth study guide on a laptop: an eight-tile grid for the full text, act-by-act analysis, characters, themes, key quotes, context, essay plans and AI revision notes, with a quick quote quiz, an essay practice card and a flashcard below.',
    ar: 'دليل دراسة Macbeth على لابتوب: شبكة من ثماني بلاطات للنص الكامل، والتحليل فصل بفصل، والشخصيات، والمواضيع، والاقتباسات المهمة، والسياق، وخطط المقالات، وملاحظات المراجعة بالـ AI، وتحتها اختبار اقتباسات سريع، وبطاقة تدريب على المقال، وبطاقة مراجعة.',
    es: 'La guía de estudio de Macbeth en un portátil: una cuadrícula de ocho fichas para el texto completo, el análisis acto por acto, personajes, temas, citas clave, contexto, planes de redacción y notas de repaso con IA, con un cuestionario rápido de citas, una tarjeta de práctica de redacción y una tarjeta de repaso debajo.',
  },
  'home.story.revise.caption': {
    en: 'The study guide hub for Macbeth.',
    ar: 'صفحة دليل الدراسة لـ Macbeth.',
    es: 'La página de la guía de estudio de Macbeth.',
  },
  'home.story.revise.phone_alt': {
    en: 'The Macbeth study guide on a phone: a chip row and the eight-tile Study Macbeth grid, from Read Full Text to AI Revision Notes.',
    ar: 'دليل دراسة Macbeth على جوال: صف من الأزرار الصغيرة وشبكة Study Macbeth من ثماني بلاطات، من Read Full Text إلى AI Revision Notes.',
    es: 'La guía de estudio de Macbeth en un móvil: una fila de chips y la cuadrícula Study Macbeth de ocho fichas, de Read Full Text a AI Revision Notes.',
  },

  // ─── Chapter IV: Write about it ───────────────────────────────────────────
  'home.story.write.h2': {
    en: 'Write the essay, and have it marked.',
    ar: 'اكتب المقال، وخلّه يتصحح.',
    es: 'Escribe la redacción, y que te la corrijan.',
  },
  'home.story.write.p1': {
    en: 'Choose the board, paper and question, paste the essay and send it. Get a mark for each assessment objective, what went well, what to improve and what to practise next. Written by AI and labelled as AI; the grade is a practice estimate, not an official result.',
    ar: 'اختر البورد والورقة والسؤال، والصق المقال وأرسله. تحصل على درجة لكل هدف تقييم، وإيش اللي كان زين، وإيش اللي تحسّنه، وإيش اللي تتدرب عليه بعدين. مكتوب بالـ AI ومعلّم إنه AI؛ والدرجة تقدير تدريبي، مو نتيجة رسمية.',
    es: 'Elige la junta, el examen y la pregunta, pega la redacción y envíala. Recibe una nota por cada objetivo de evaluación, qué salió bien, qué mejorar y qué practicar después. Escrito por IA y etiquetado como IA; la nota es una estimación de práctica, no un resultado oficial.',
  },
  'home.story.write.p2': {
    en: "AI marking is part of the 7-day free trial or a plan. 13 to 15-year-olds need a parent's approval or their school's recorded authorisation before AI feedback is switched on.",
    ar: 'تصحيح الـ AI جزء من التجربة المجانية لمدة 7 أيام أو من الاشتراك. الطلاب من 13 إلى 15 سنة يحتاجون موافقة ولي الأمر أو إذن المدرسة المسجّل قبل ما تشتغل ملاحظات الـ AI.',
    es: 'La corrección con IA forma parte de la prueba gratuita de 7 días o de un plan. Los estudiantes de 13 a 15 años necesitan la aprobación de un padre o madre, o la autorización registrada de su colegio antes de activar el feedback de IA.',
  },
  'home.story.write.link': {
    en: 'Send an essay for marking',
    ar: 'أرسل مقال للتصحيح',
    es: 'Envía una redacción para corregir',
  },
  'home.story.write.shot_alt': {
    en: 'The essay submission form on a laptop: exam board, paper and question selects, a field for the question you answered, an optional title and a box for your essay, all empty.',
    ar: 'نموذج إرسال المقال على لابتوب: قوائم لاختيار البورد والورقة والسؤال، وخانة للسؤال اللي جاوبت عليه، وعنوان اختياري، ومربع للمقال، كلها فاضية.',
    es: 'El formulario de envío de redacciones en un portátil: selectores de junta, examen y pregunta, un campo para la pregunta que respondiste, un título opcional y un cuadro para tu redacción, todos vacíos.',
  },
  'home.story.write.caption': {
    en: 'The marking form, before anything is typed.',
    ar: 'نموذج التصحيح، قبل ما ينكتب فيه شي.',
    es: 'El formulario de corrección, antes de escribir nada.',
  },
  'home.story.write.phone_alt': {
    en: 'The essay submission form on a phone: exam board, paper and question selects and the field for the question you answered, all empty.',
    ar: 'نموذج إرسال المقال على جوال: قوائم لاختيار البورد والورقة والسؤال، وخانة السؤال اللي جاوبت عليه، كلها فاضية.',
    es: 'El formulario de envío de redacciones en un móvil: selectores de junta, examen y pregunta y el campo para la pregunta que respondiste, todos vacíos.',
  },

  // ─── Chapter V: Sit it ────────────────────────────────────────────────────
  'home.story.sit.h2': {
    en: 'Sit a mock paper.',
    ar: 'امتحن في ورقة تجريبية.',
    es: 'Haz un examen de prueba.',
  },
  'home.story.sit.p1': {
    en: 'Mock papers by board, free with an account.',
    ar: 'أوراق تجريبية حسب البورد، ببلاش مع حساب. امتحن في ورقة كاملة قبل الامتحان الحقيقي، وبعدين ارجع بالّي تعلمته للدليل.',
    es: 'Exámenes de prueba por junta, gratis con una cuenta. Haz un examen completo antes del real, y luego lleva lo que aprendiste de vuelta a la guía.',
  },
  'home.story.sit.link': {
    en: 'Browse the mock papers',
    ar: 'تصفح الأوراق التجريبية',
    es: 'Explora los exámenes de prueba',
  },
  'home.story.sit.shot_alt': {
    en: 'The Exam Papers list on the mock papers page: the filters for all papers, language and literature, and the tops of two AQA cards titled English Language Paper 1 and Paper 2.',
    ar: 'قائمة Exam Papers في صفحة الأوراق التجريبية: فلاتر لكل الأوراق واللغة والأدب، وبطاقتان لورقتي English Language من AQA.',
    es: 'La lista Exam Papers de la página de exámenes de prueba: filtros para todos los exámenes, lengua y literatura, y dos tarjetas de examen de English Language de AQA.',
  },
  'home.story.sit.caption': {
    en: 'Mock papers, listed by board and paper.',
    ar: 'الأوراق التجريبية، مرتبة حسب البورد والورقة.',
    es: 'Exámenes de prueba, listados por junta y examen.',
  },
  'home.story.sit.phone_alt': {
    en: 'The mock papers page on a phone, from its How It Works button down to the Exam Papers heading.',
    ar: 'صفحة الأوراق التجريبية على جوال: زر View Exam Papers، وورقة نموذجية معلّمة إنها قريباً، وعنوان Exam Papers.',
    es: 'La página de exámenes de prueba en un móvil: un botón View Exam Papers, un examen de muestra marcado como próximamente y el encabezado Exam Papers.',
  },
  'home.story.sit.phone_caption': {
    en: 'The mock papers page on a phone.',
    ar: 'صفحة الأوراق التجريبية على جوال.',
    es: 'La página de exámenes de prueba en un móvil.',
  },

  // ─── Epilogue ─────────────────────────────────────────────────────────────
  'home.story.end.eyebrow': { en: 'Epilogue', ar: 'الخاتمة', es: 'Epílogo' },
  'home.story.end.h2': {
    en: 'Start your anthology.',
    ar: 'ابدأ مختاراتك.',
    es: 'Empieza tu antología.',
  },
  'home.story.end.sub': {
    en: 'A 7-day free trial of the full product. No card. It covers AI marking, the examiner tool, model answers and courses, but not the school portal.',
    ar: 'تجربة مجانية لمدة 7 أيام للمنتج كامل. بدون بطاقة. تشمل تصحيح الـ AI، وأداة الممتحن، والإجابات النموذجية، والدورات.',
    es: 'Una prueba gratuita de 7 días del producto completo. Sin tarjeta. Incluye la corrección con IA, la herramienta del examinador, las respuestas modelo y los cursos.',
  },
  'home.story.end.guide': {
    en: 'Read a study guide',
    ar: 'اقرأ دليل دراسة',
    es: 'Lee una guía de estudio',
  },
  'home.story.end.quest': { en: 'Play a quest', ar: 'العب مهمة', es: 'Juega una misión' },
  'home.story.end.free_label': {
    en: 'Free with no account:',
    ar: 'ببلاش وبدون حساب:',
    es: 'Gratis y sin cuenta:',
  },
  'home.story.end.free_list': {
    en: 'study guides, quests, games, comics, full texts, revision notes, flashcards, study tools, exam technique, the first module of every course, and the IELTS placement test.',
    ar: 'أدلة الدراسة، والمهام، والألعاب، والقصص المصورة، والنصوص الكاملة، وملاحظات المراجعة، وبطاقات المراجعة، وأدوات الدراسة، وتقنيات الامتحان، وأول وحدة من كل دورة، واختبار تحديد المستوى لـ IELTS.',
    es: 'guías de estudio, misiones, juegos, cómics, textos completos, notas de repaso, tarjetas, herramientas de estudio, técnica de examen, el primer módulo de cada curso y la prueba de nivel de IELTS.',
  },
  'home.story.end.plan_label': { en: 'Student plan', ar: 'خطة الطالب', es: 'Plan Estudiante' },
  // Prices come from src/constants/pricing.ts; the words come from here.
  'home.story.end.plan_price': {
    en: '{monthly} a month or {annual} a year. Planned standard pricing {std_monthly} a month or {std_annual} a year.',
    ar: '{monthly} في الشهر أو {annual} في السنة. السعر القياسي المخطط له {std_monthly} في الشهر أو {std_annual} في السنة.',
    es: '{monthly} al mes o {annual} al año. Precio estándar previsto: {std_monthly} al mes o {std_annual} al año.',
  },
  'home.story.end.pricing_link': { en: 'See pricing', ar: 'شوف الأسعار', es: 'Ver precios' },

  // ─── Also on the site ─────────────────────────────────────────────────────
  'home.story.also.heading': {
    en: 'Also on the site',
    ar: 'كمان في الموقع',
    es: 'También en el sitio',
  },
  'home.story.also.levels': {
    en: 'KS3, GCSE, International GCSE, International A level (guides and quests), IELTS, EAL',
    ar: 'KS3، GCSE، International GCSE، International A level (أدلة ومهام)، IELTS، EAL',
    es: 'KS3, GCSE, International GCSE, International A level (guías y misiones), IELTS, EAL',
  },
  'home.story.also.parents.title': { en: 'Parents', ar: 'أولياء الأمور', es: 'Padres' },
  'home.story.also.parents.body': {
    en: "Your child can use the study guides, quests, games and comics without an account. Under-13s cannot sign up; 13 to 15-year-olds need a parent's approval or their school's recorded authorisation before AI feedback is switched on.",
    ar: 'ولدك أو بنتك يقدرون يستخدمون أدلة الدراسة والمهام والألعاب والقصص المصورة بدون حساب. اللي أعمارهم أقل من 13 ما يقدرون يسجلون؛ ومن 13 إلى 15 سنة يحتاجون موافقة ولي الأمر أو إذن المدرسة المسجّل قبل ما تشتغل ملاحظات الـ AI.',
    es: 'Tu hijo o hija puede usar las guías de estudio, las misiones, los juegos y los cómics sin cuenta. Los menores de 13 no pueden registrarse; los de 13 a 15 años necesitan la aprobación de un padre o madre, o la autorización registrada de su colegio antes de activar el feedback de IA.',
  },
  'home.story.also.parents.link': { en: 'For parents', ar: 'لأولياء الأمور', es: 'Para padres' },
  'home.story.also.teachers.title': { en: 'Teachers', ar: 'المعلمون', es: 'Profesores' },
  'home.story.also.teachers.body': {
    en: "The examiner tool marks typed or photographed scripts against the paper's level grid. The AI mark is a second opinion, never the award. Teacher plan {monthly} a month or {annual} a year.",
    ar: 'أداة الممتحن تصحح الأوراق المكتوبة أو المصورة على شبكة مستويات الورقة. درجة الـ AI رأي ثاني، ومو هي الدرجة النهائية أبداً. خطة المعلم {monthly} في الشهر أو {annual} في السنة.',
    es: 'La herramienta del examinador corrige escritos mecanografiados o fotografiados según la tabla de niveles del examen. La nota de la IA es una segunda opinión, nunca la calificación. Plan Profesor: {monthly} al mes o {annual} al año.',
  },
  'home.story.also.teachers.link': { en: 'For teachers', ar: 'للمعلمين', es: 'Para profesores' },
  'home.story.also.schools.title': { en: 'Schools', ar: 'المدارس', es: 'Colegios' },
  'home.story.also.schools.body': {
    en: 'We are at launch stage, taking our first ten Founding Schools. As a Founding School you would be among the first to use it, and we set it up with you. A place covers the whole school at {price} a school year, against planned standard pricing of {std}.',
    ar: 'إحنا في مرحلة الإطلاق، ونستقبل أول عشر مدارس مؤسِّسة. كمدرسة مؤسِّسة بتكونون من أول اللي يستخدمونه، ونجهّزه معاكم. المقعد يغطي المدرسة كاملة بـ {price} في السنة الدراسية، مقابل سعر قياسي مخطط له {std}.',
    es: 'Estamos en fase de lanzamiento, con nuestros diez primeros Founding Schools. Como Founding School estaríais entre los primeros en usarlo, y lo ponemos en marcha con vosotros. Una plaza cubre todo el colegio por {price} al año escolar, frente a un precio estándar previsto de {std}.',
  },
  'home.story.also.schools.link': { en: 'For schools', ar: 'للمدارس', es: 'Para colegios' },
  'home.story.also.ielts.title': { en: 'IELTS', ar: 'IELTS', es: 'IELTS' },
  'home.story.also.ielts.body': {
    en: 'A free IELTS placement test, about 12 minutes, no account.',
    ar: 'اختبار تحديد مستوى IELTS ببلاش، حوالي 12 دقيقة، بدون حساب.',
    es: 'Una prueba de nivel de IELTS gratuita, unos 12 minutos, sin cuenta.',
  },
  'home.story.also.ielts.link': {
    en: 'Take the placement test',
    ar: 'سوِّ اختبار تحديد المستوى',
    es: 'Haz la prueba de nivel',
  },
  'home.story.also.eal.title': { en: 'EAL', ar: 'EAL', es: 'EAL' },
  'home.story.also.eal.body': {
    en: '37 games for EAL, KS3 and GCSE, marked as you play. All 37 explain every answer.',
    ar: 'ألعاب المهارات الـ 37 تغطي EAL مع KS3 وGCSE، وتتصحح وإنت تلعب. كل الـ 37 تشرح كل إجابة.',
    es: '37 juegos para EAL, KS3 y GCSE, corregidos mientras juegas. Los 37 explican cada respuesta.',
  },
  'home.story.also.eal.link': {
    en: 'For EAL learners',
    ar: 'لطلاب EAL',
    es: 'Para estudiantes EAL',
  },
  'home.story.also.arabic.title': { en: 'Arabic', ar: 'العربية', es: 'Árabe' },
  'home.story.also.arabic.body': {
    en: 'The same site in Arabic, right to left. Study material stays in English.',
    ar: 'نفس الموقع بالعربي، من اليمين لليسار. المواد الدراسية تبقى بالإنجليزي.',
    es: 'El mismo sitio en árabe, de derecha a izquierda. El material de estudio sigue en inglés.',
  },
  'home.story.also.arabic.link': {
    en: 'Open the Arabic site',
    ar: 'افتح الموقع بالعربي',
    es: 'Abre el sitio en árabe',
  },
}
