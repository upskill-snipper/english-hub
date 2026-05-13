import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ArrowLeft, BookOpen, Feather, Users, Layers, Quote } from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Jekyll and Hyde Chapter Analysis | The English Hub',
  description:
    'Detailed analysis of all 10 chapters of Strange Case of Dr Jekyll and Mr Hyde: summaries, key events, character development, language techniques with quotes, and structural significance.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/jekyll-and-hyde/chapters',
  },
}

/* ─── Types ──────────────────────────────────────────────────── */

type LanguageTechnique = {
  technique: string
  quote: string
  effect: string
  // Khaleeji-AR variants. English quotation stays in EN per brand
  // convention; technique label + effect commentary translate.
  techniqueAr?: string
  effectAr?: string
}

type ChapterData = {
  number: number
  title: string
  summary: string
  keyEvents: string[]
  characterDevelopment: string
  languageAnalysis: LanguageTechnique[]
  structuralSignificance: string
  // Khaleeji-AR variants. Chapter `title` (e.g. "Story of the Door")
  // stays in EN — these are exam-canonical headings.
  summaryAr?: string
  keyEventsAr?: string[]
  characterDevelopmentAr?: string
  structuralSignificanceAr?: string
}

/* ─── Data ───────────────────────────────────────────────────── */

const chapters: ChapterData[] = [
  {
    number: 1,
    title: 'Story of the Door',
    summary:
      'The novella opens with the lawyer Mr Gabriel Utterson and his distant cousin Richard Enfield on one of their regular Sunday walks through London. Passing a neglected door in a side street, Enfield recounts a disturbing incident he witnessed: late at night, a small, deformed man trampled a young girl at a street corner, showing complete indifference to her screams. A crowd gathered and forced the man to pay compensation. He disappeared through the sinister door and returned with a cheque for one hundred pounds signed by Dr Henry Jekyll. The man gave his name as Edward Hyde. Utterson is troubled because he is the executor of Jekyll\'s will, which leaves everything to Hyde in the event of Jekyll\'s death or "disappearance." The chapter ends with Utterson resolving to find out more about the mysterious Hyde.',
    summaryAr:
      'الرواية تفتح على المحامي Mr Gabriel Utterson وقريبه البعيد Richard Enfield وهما في واحدة من جولاتهم المعتادة يوم الأحد في London. لمن يمرّون بباب مهمل في شارع جانبي، Enfield يحكي حادثة مزعجة شهدها: في ساعة متأخّرة من الليل، رجال صغير ومشوّه داس بنت صغيرة في زاوية الشارع، وما اهتم أبد بصراخها. تجمّع الناس وأجبروه يدفع تعويض. اختفى من نفس الباب الشرير، ورجع بشيك بمئة جنيه موقّع من Dr Henry Jekyll. عرّف نفسه باسم Edward Hyde. Utterson ينقبض لأنه منفّذ وصية Jekyll، اللي تترك كل شي لـ Hyde في حالة موت Jekyll أو "disappearance". الفصل يختم بـ Utterson وهو مصمّم يعرف أكثر عن Hyde الغامض.',
    keyEvents: [
      'Enfield describes witnessing Hyde trample a young girl in the street',
      'Hyde pays compensation with a cheque signed by the respectable Dr Jekyll',
      "Utterson learns that Jekyll's will names Hyde as sole beneficiary",
      'The mysterious, neglected door is introduced as a key symbol',
      'Enfield and Utterson agree never to speak of the incident again',
    ],
    characterDevelopment:
      'Utterson is established as rational, methodical, and deeply loyal. His instinct is to protect his friends rather than expose scandal. Enfield represents the typical Victorian gentleman: curious but ultimately committed to discretion. Hyde is introduced entirely through other people\'s reactions, creating an atmosphere of dread before the reader ever "meets" him directly.',
    languageAnalysis: [
      {
        technique: 'Juxtaposition',
        quote: '"trampled calmly over the child\'s body and left her screaming on the ground"',
        effect:
          'The adverb "calmly" placed next to the violence of "trampled" creates a shocking juxtaposition. Hyde\'s complete lack of emotion reveals his absence of conscience and immediately establishes him as inhuman.',
      },
      {
        technique: 'Semantic field of concealment',
        quote:
          '"The door, which was equipped with neither bell nor knocker, was blistered and distained"',
        effect:
          "The door symbolises the hidden, disreputable side of Jekyll's life. Its physical neglect (blistered, distained) mirrors the moral decay that Hyde represents. The absence of bell or knocker suggests secrecy and a refusal to welcome scrutiny.",
      },
      {
        technique: 'Aporia (rhetorical inarticulacy)',
        quote: '"I never saw a man I so disliked, and yet I scarce know why"',
        effect:
          "Enfield's inability to articulate his revulsion introduces the motif of Hyde being indescribable. Evil resists rational categorisation, reflecting Victorian anxiety about threats that cannot be classified or controlled.",
      },
      {
        technique: 'Pathetic fallacy',
        quote: '"street shone out in contrast to its dingy neighbourhood, like a fire in a forest"',
        effect:
          'The description of the street creates a deceptive brightness that contrasts with the dark events about to unfold. Stevenson establishes London as a city of contrasts, mirroring the duality theme.',
      },
      {
        technique: 'Simile',
        quote: '"like a district of some city in a nightmare"',
        effect:
          "The simile comparing the London streets to a nightmare blurs the boundary between reality and the subconscious. The Gothic atmosphere is rooted in psychological unease rather than supernatural events, foreshadowing the novella's exploration of the hidden self.",
      },
    ],
    structuralSignificance:
      'Chapter 1 establishes the mystery-driven structure of the novella. The reader, like Utterson, is drawn in by questions: who is Hyde, and why does Jekyll protect him? Stevenson withholds information, mirroring the secrecy that pervades Victorian society. The chapter also introduces the dual geography of London (respectable streets versus neglected back alleys), which mirrors the duality of Jekyll and Hyde throughout.',
  },
  {
    number: 2,
    title: 'Search for Mr Hyde',
    summary:
      'Utterson, disturbed by what Enfield has told him, examines Jekyll\'s will more closely. It states that in the event of Jekyll\'s death or unexplained absence for more than three months, all his possessions should pass to Edward Hyde. Utterson visits Dr Lanyon, an old mutual friend, who confirms that he and Jekyll have fallen out over Jekyll\'s "unscientific" experiments. Utterson begins to stake out the door, eventually confronting Hyde in person. He finds Hyde small, pale, and deeply repellent, describing "Satan\'s signature" on his face. Hyde gives Utterson his Soho address. Utterson then visits Jekyll, who is not at home, and learns from Poole the butler that the servants have orders to obey Hyde. Utterson fears that Hyde is blackmailing Jekyll.',
    summaryAr:
      'Utterson، منزعج من حكاية Enfield، يفحص وصية Jekyll بدقة أكثر. الوصية تنص إن في حالة موت Jekyll أو غيابه غير المبرّر لأكثر من ثلاث أشهر، كل ممتلكاته تنتقل إلى Edward Hyde. Utterson يروح Dr Lanyon، صديق قديم لهم اثنين، اللي يأكّد إنه وJekyll تخاصموا بسبب تجارب Jekyll "unscientific". Utterson يبدأ يرابط عند الباب، وفي الآخر يقابل Hyde وجهاً لوجه. يلقاه صغير، شاحب، ونافر بشدّة، ويصف وجهه بأنه "Satan\'s signature". Hyde يعطي Utterson عنوانه في Soho. Utterson يزور Jekyll، اللي مو في البيت، ويعرف من Poole الخدّام إن الخدم عندهم أوامر يطيعون Hyde. Utterson يخاف إن Hyde يبتزّ Jekyll.',
    keyEvents: [
      "Utterson reads Jekyll's unusual will leaving everything to Hyde",
      'Dr Lanyon dismisses Jekyll\'s science as "unscientific balderdash"',
      'Utterson stakes out the mysterious door and finally meets Hyde face to face',
      'Hyde gives Utterson his Soho address, showing unexpected cooperation',
      "Poole reveals that Jekyll's servants have been ordered to obey Hyde",
    ],
    characterDevelopment:
      'Utterson becomes increasingly anxious and develops into the detective figure of the novella. His nightmare about Hyde reveals his subconscious fears. Lanyon is positioned as the rational, conventional scientist who rejects anything outside established knowledge. Hyde is physically encountered for the first time, and his ability to provoke instinctive disgust in the measured Utterson is telling.',
    languageAnalysis: [
      {
        technique: 'Religious imagery',
        quote: '"Satan\'s signature upon a face"',
        effect:
          'Utterson frames Hyde in Biblical terms, suggesting evil is physically inscribed on the body. The metaphor of a "signature" implies that evil marks a person permanently, reflecting the Victorian pseudo-science of physiognomy, which claimed character could be read from facial features.',
      },
      {
        technique: 'Pun / paronomasia',
        quote: '"If he be Mr Hyde, I shall be Mr Seek"',
        effect:
          'Utterson\'s darkly comic pun reveals his determination but also foreshadows the danger of seeking hidden truths. The wordplay on "hide" and "seek" frames the entire novella as a deadly game of concealment and pursuit.',
      },
      {
        technique: 'Gothic description',
        quote:
          '"Mr Hyde was pale and dwarfish, he gave an impression of deformity without any nameable malformation"',
        effect:
          'The paradox of deformity without a "nameable" defect makes Hyde uncanny. He is wrong in a way that defies rational description, tapping into fears of the unknowable. The effect can be retrospectively analysed using Freud\'s later concept of the "uncanny" (das Unheimliche), though Freud was writing decades after Stevenson.',
      },
      {
        technique: 'Metaphor (dream sequence)',
        quote:
          '"the figure had no face by which he might know it; even in his dreams, it had no face"',
        effect:
          "The faceless figure in Utterson's nightmare symbolises the unknowability of evil. The absence of features makes Hyde a blank screen for Victorian fears about degeneracy, the primitive, and the repressed.",
      },
      {
        technique: 'Dramatic irony',
        quote: '"the moment I choose, I can be rid of Mr Hyde"',
        effect:
          "Jekyll's reassurance is loaded with dramatic irony for the reader who knows (or will learn) that Hyde cannot be controlled. Jekyll's overconfidence mirrors the hubris of classical tragedy and foreshadows his downfall.",
      },
    ],
    structuralSignificance:
      'This chapter deepens the mystery by providing clues without answers. Stevenson uses Utterson as a surrogate reader, piecing together fragments. The rift between Lanyon and Jekyll introduces the theme of science versus orthodoxy, which will become crucial in the final revelations. The chapter moves from public investigation (reading the will, visiting Lanyon) to private encounter (meeting Hyde), narrowing the focus towards the truth.',
  },
  {
    number: 3,
    title: 'Dr Jekyll Was Quite at Ease',
    summary:
      'Two weeks later, Jekyll hosts a dinner party attended by Utterson and other old friends. After the guests leave, Utterson raises his concerns about Hyde and the will. Jekyll becomes visibly agitated but assures Utterson that he can "be rid of Mr Hyde" whenever he chooses. He asks Utterson, as his lawyer and friend, to honour the will and look after Hyde\'s interests if anything should happen to him. Jekyll describes his situation as "painful" but insists it can be resolved at any moment. Utterson reluctantly agrees.',
    summaryAr:
      'بعد أسبوعين، Jekyll يستضيف عشاء يحضره Utterson وأصدقاء قدامى. بعد ما يطلع الضيوف، Utterson يطرح قلقه عن Hyde والوصية. Jekyll يصير عصبي ويبيّن عليه الاضطراب، لكنه يطمئن Utterson إنه يقدر "be rid of Mr Hyde" متى ما يبا. يطلب من Utterson، باعتباره محاميه وصديقه، يحترم الوصية ويعتني بمصالح Hyde لو صار له شي. Jekyll يصف وضعه بأنه "painful"، لكنه يصرّ إن المسألة قابلة للحل بأي لحظة. Utterson يوافق على مضض.',
    keyEvents: [
      'Jekyll hosts a dinner party, appearing his usual sociable self',
      'Utterson confronts Jekyll about Hyde after the other guests leave',
      'Jekyll grows pale and agitated when Hyde is mentioned',
      'Jekyll claims he can rid himself of Hyde at any time',
      'Jekyll makes Utterson promise to carry out the terms of his will',
    ],
    characterDevelopment:
      "Jekyll is seen performing respectability at his dinner party, but his composure cracks when Hyde is mentioned. The contrast between the social Jekyll and the frightened private Jekyll enacts the duality theme within a single scene. Utterson's loyalty overrides his suspicion; he agrees to honour the will despite his misgivings, embodying the Victorian code of discretion over truth.",
    languageAnalysis: [
      {
        technique: 'Juxtaposition',
        quote:
          '"the large handsome face of Dr Jekyll grew pale to the very lips, and there came a blackness about his eyes"',
        effect:
          'The shift from "handsome" to "pale" and "blackness" within a single sentence physically enacts the Jekyll-to-Hyde duality. The darkness "about his eyes" suggests Hyde lurking beneath Jekyll\'s composed exterior, threatening to surface.',
      },
      {
        technique: 'Dramatic irony',
        quote: '"the moment I choose, I can be rid of Mr Hyde. I give you my hand upon that"',
        effect:
          "Jekyll's confidence that he is in control is deeply ironic. The handshake sealing the promise is a gesture of trust between gentlemen, yet the reader senses that this trust is misplaced. The phrase foreshadows Jekyll's ultimate loss of control.",
      },
      {
        technique: 'Euphemism',
        quote: '"my position is a very strange one — a very strange one"',
        effect:
          'Jekyll uses vague, evasive language to avoid naming his predicament. The repetition of "very strange" signals emotional distress beneath the surface. Stevenson demonstrates how Victorian propriety forces characters to speak around the truth rather than confronting it.',
      },
      {
        technique: 'Imperative mood',
        quote:
          '"I only ask for justice; I only ask you to help him for my sake, when I am no longer here"',
        effect:
          'Jekyll\'s plea shifts from commanding to desperate. The phrase "when I am no longer here" foreshadows his death or disappearance, while the word "justice" ironically aligns Hyde with a moral concept he utterly lacks.',
      },
      {
        technique: 'Symbolism',
        quote:
          '"the fire burned in the grate... and Jekyll, looking deadly sick, did not rise to meet them"',
        effect:
          "The domestic fire suggests warmth and respectability, but Jekyll's sickly appearance undermines the comfort of the setting. The refusal to rise breaks social convention, signalling that Jekyll's inner turmoil is beginning to erode his public performance.",
      },
    ],
    structuralSignificance:
      'This is the shortest chapter and functions as a pause in the rising action. Its brevity mirrors Jekyll\'s false reassurance: everything seems "quite at ease" on the surface, but the truth is suppressed. Structurally, it lulls the reader into temporary comfort before the violent escalation of the Carew murder in Chapter 4. The ironic title signals that nothing is truly at ease.',
  },
  {
    number: 4,
    title: 'The Carew Murder Case',
    summary:
      "Nearly a year later, a maidservant witnesses the brutal murder of Sir Danvers Carew, an elderly and distinguished Member of Parliament. From her window, she sees a small man (whom she recognises as Hyde) attack Carew without provocation, beating him to death with a heavy walking cane. She faints and does not wake until the early hours, when she calls the police. The broken cane is identified as one Utterson once gave to Jekyll. Utterson leads the police to Hyde's lodgings in Soho, which are lavishly furnished but ransacked, with papers half-burned in the grate. Hyde has vanished. Despite a large reward, he is not found.",
    summaryAr:
      'بعد سنة تقريباً، خادمة تشهد جريمة فظيعة: مقتل Sir Danvers Carew، عضو برلمان عجوز ومرموق. من نافذتها، تشوف رجال صغير (تعرفه إنه Hyde) يهاجم Carew بدون أي استفزاز، ويضربه بعصا مشي ثقيلة لين الموت. تطيح مغمى عليها وما تصحى إلا في الساعات الأولى من الصبح، فتتصل بالشرطة. العصا المكسورة تنعرف بإنها كانت هدية من Utterson لـ Jekyll. Utterson يقود الشرطة لسكن Hyde في Soho، اللي ملقى مفروش بفخامة لكن مقلوب رأساً على عقب، وأوراق محروقة نص حرق في الموقد. Hyde اختفى. مع وجود مكافأة كبيرة، ما يلقونه.',
    keyEvents: [
      'A maidservant witnesses Hyde murder Sir Danvers Carew with a walking cane',
      'The murder is unprovoked and extraordinarily violent',
      'The broken cane is identified as a gift Utterson gave to Jekyll years ago',
      "Police find Hyde's Soho rooms ransacked and partly burned",
      'Hyde disappears entirely and cannot be traced despite a reward',
    ],
    characterDevelopment:
      "Hyde's violence escalates dramatically from trampling a child to frenzied murder, showing that evil, once indulged, grows uncontrollable. The murder is motiveless, emphasising Hyde's purely destructive nature. Utterson's discovery of the cane deepens his suspicion of the link between Jekyll and Hyde, but he still does not guess the truth.",
    languageAnalysis: [
      {
        technique: 'Simile and animalistic imagery',
        quote:
          '"with ape-like fury, he was trampling his victim under foot and hailing down a storm of blows"',
        effect:
          'The simile "ape-like" connects Hyde to Darwinian fears of evolutionary regression, suggesting that beneath civilisation lurks a primitive beast. The metaphor "storm of blows" frames the violence as an uncontrollable natural force, removing human agency and implying Hyde is beyond reason.',
      },
      {
        technique: 'Pathetic fallacy',
        quote: '"the fog still slept on the wing above the drowned city"',
        effect:
          'The personified fog "sleeping" over a "drowned" city creates a suffocating Gothic atmosphere. London is submerged in darkness and concealment, mirroring the characters\' inability to see the truth. The verb "drowned" foreshadows destruction.',
      },
      {
        technique: 'Contrast',
        quote: '"an aged and beautiful gentleman with white hair"',
        effect:
          "Carew is presented as the epitome of innocence and respectability. His beauty, age, and white hair emphasise his vulnerability and make Hyde's attack even more horrifying. Stevenson uses the contrast to clarify that Hyde targets goodness itself.",
      },
      {
        technique: 'Onomatopoeia and violent imagery',
        quote: '"the bones were audibly shattered and the body jumped upon the roadway"',
        effect:
          'The word "audibly" forces the reader to hear the violence; "jumped" gives the corpse an unnatural animation. The graphic physicality refuses to let the reader look away, breaking the novella\'s usual pattern of gentlemanly restraint.',
      },
      {
        technique: 'Symbolism (the cane)',
        quote:
          '"the stick with which the deed had been done... was one which Utterson... had himself presented many years before to Henry Jekyll"',
        effect:
          "The cane is a symbol of gentlemanly respectability repurposed as a murder weapon. That it was a gift from Utterson to Jekyll creates a chain of complicity linking the respectable world to Hyde's violence. The broken cane suggests the shattering of Victorian propriety.",
      },
    ],
    structuralSignificance:
      "Chapter 4 marks the novella's turning point. The crime shifts the narrative from private mystery to public crisis, involving the police and the press. Stevenson raises the stakes dramatically: what began as an oddity about a will has become a murder investigation. The chapter also establishes the pattern of Hyde's escalating violence, suggesting that the longer Jekyll indulges his alter ego, the worse the consequences become.",
  },
  {
    number: 5,
    title: 'Incident of the Letter',
    summary:
      'Utterson visits Jekyll, who appears "deadly sick." Jekyll swears he is finished with Hyde and will never see him again. He shows Utterson a letter apparently from Hyde, promising to disappear and assuring Jekyll he has a means of escape. Jekyll claims it was delivered by hand but will not explain further. On his way out, Utterson asks Poole about the letter; Poole says nothing came by hand that day, only regular post. Later, Utterson\'s head clerk, Mr Guest, who is an expert in handwriting, notices that Hyde\'s letter bears a striking resemblance to Jekyll\'s own handwriting, albeit with a different slope. Utterson realises with a "chill" that Jekyll may have forged the letter on Hyde\'s behalf.',
    summaryAr:
      'Utterson يزور Jekyll، اللي يبيّن عليه إنه "deadly sick". Jekyll يحلف إنه خلّص من Hyde وما يباه يشوفه ثاني مرة. يوري Utterson رسالة من ظاهرها إنها من Hyde، تعد بالاختفاء وتطمئن Jekyll إن عنده وسيلة هرب. Jekyll يدّعي إن الرسالة وصلت باليد، لكن ما يشرح أكثر. وهو طالع، Utterson يسأل Poole عن الرسالة؛ Poole يقول ما وصل شي باليد ذيك الساعة، بس البريد العادي. بعدها، كاتب Utterson الأول Mr Guest، اللي خبير في خطوط اليد، يلاحظ إن رسالة Hyde تشبه خط Jekyll بشكل ملفت، بس الميلان مختلف. Utterson يدرك بـ "chill" إن Jekyll يمكن زوّر الرسالة باسم Hyde.',
    keyEvents: [
      'Utterson visits a sick and frightened Jekyll in his laboratory',
      'Jekyll produces a letter supposedly from Hyde, pledging to vanish',
      'Poole tells Utterson no letter was delivered by hand that day',
      "Guest the clerk identifies the handwriting as almost identical to Jekyll's",
      'Utterson suspects Jekyll has forged the letter to protect Hyde',
    ],
    characterDevelopment:
      "Jekyll is visibly weakened and frightened, and his claim to have broken with Hyde proves to be either a lie or self-deception. Utterson's reaction to the handwriting clue reveals his conflicted loyalty: rather than investigating further, he locks the information away. Guest serves as an objective analyst who sees what Utterson cannot allow himself to accept.",
    languageAnalysis: [
      {
        technique: 'Foreshadowing',
        quote: '"the two hands are in many points identical; only differently sloped"',
        effect:
          'The near-identical handwriting is the strongest clue yet that Jekyll and Hyde are the same person. The "different slope" is a brilliant metaphor: the same fundamental identity, tilted in a different moral direction. This foreshadows the full revelation in Chapter 10.',
      },
      {
        technique: 'Symbolism (the laboratory)',
        quote:
          '"the theatre... once crowded with eager students and now lying gaunt and silent, the tables laden with chemical apparatus"',
        effect:
          'The word "theatre" carries a double meaning: a medical lecture theatre but also a stage for performance and transformation. Its abandonment and silence suggest that Jekyll\'s experiments have moved beyond legitimate science into dangerous secrecy.',
      },
      {
        technique: 'Adjectives suggesting decay',
        quote: '"looking deadly sick... he did not rise to welcome his visitor"',
        effect:
          'The phrase "deadly sick" foreshadows Jekyll\'s eventual death. His failure to rise breaches Victorian social etiquette, signalling that his inner turmoil has begun to overpower his ability to perform respectability.',
      },
      {
        technique: 'Epistolary form',
        quote: '"Dear Dr Jekyll... You have been too generous. I am unworthy"',
        effect:
          "Hyde's supposed letter is polite and deferential, creating a jarring disconnect with his violent actions. If Jekyll forged the letter, the politeness becomes a performance of repentance. The epistolary form adds a layer of unreliability that deepens the mystery.",
      },
      {
        technique: 'Metaphor',
        quote: '"his blood ran cold in his veins"',
        effect:
          "This Gothic cliche is deliberately deployed at a moment of genuine revelation. Utterson's physical response to the handwriting evidence shows that even a rational lawyer can be overcome by horror when confronted with truths he has tried to avoid.",
      },
    ],
    structuralSignificance:
      "Chapter 5 is the pivotal chapter for clues. The handwriting evidence is Stevenson's most direct hint at the truth before the final revelations. Structurally, the chapter shifts the narrative into epistolary mode (letters and documents), anticipating the two narrative letters that conclude the novella. Utterson's decision to suppress the evidence rather than act on it also reinforces the theme of Victorian secrecy.",
  },
  {
    number: 6,
    title: 'Remarkable Incident of Dr Lanyon',
    summary:
      'With Hyde seemingly gone, Jekyll appears to return to his old self. For more than two months he is sociable, charitable, and religious, hosting dinners and renewing his friendship with Lanyon. Then, abruptly, Jekyll shuts his door again. When Utterson visits Lanyon, he is shocked to find him gravely ill, with the look of death upon him. Lanyon refuses to discuss Jekyll and says: "I wish to see or hear no more of Dr Jekyll." He says he has had a shock from which he will not recover. Within weeks, Lanyon is dead. He leaves Utterson a sealed letter marked "not to be opened till the death or disappearance of Dr Henry Jekyll." Utterson, true to his professional honour, resists the temptation to open it.',
    summaryAr:
      'بمجرد ما يبيّن Hyde إنه راح، Jekyll يبيّن إنه رجع لطبيعته القديمة. لأكثر من شهرين هو اجتماعي وكريم ومتديّن، يستضيف عشاءات ويجدّد صداقته مع Lanyon. ثم، فجأة، Jekyll يسكّر بابه ثاني مرة. لمن يزور Utterson Lanyon، يتفاجأ إنه مريض بشكل خطر، وعليه شبح الموت. Lanyon يرفض يتكلّم عن Jekyll ويقول: "I wish to see or hear no more of Dr Jekyll". يقول إنه أصابته صدمة ما يقدر يتعافى منها. خلال أسابيع، Lanyon يموت. يترك لـ Utterson رسالة مختومة مكتوب عليها "not to be opened till the death or disappearance of Dr Henry Jekyll". Utterson، وفياً لشرف مهنته، يقاوم إغراء فتحها.',
    keyEvents: [
      'Jekyll returns to social life for over two months, apparently free of Hyde',
      'Jekyll suddenly becomes a recluse again, refusing all visitors',
      'Utterson finds Lanyon gravely ill and changed beyond recognition',
      "Lanyon declares he never wants to hear Jekyll's name again",
      'Lanyon dies and leaves Utterson a sealed letter about Jekyll',
    ],
    characterDevelopment:
      "Jekyll's brief period of sociability represents his attempt to permanently suppress Hyde, but the sudden relapse shows this is impossible. Lanyon's dramatic decline from a robust, cheerful man to a hollow dying figure demonstrates the destructive power of forbidden knowledge. Utterson's refusal to open Lanyon's letter reflects his loyalty and professional ethics, but also his fear of the truth.",
    languageAnalysis: [
      {
        technique: 'Contrast / Transformation',
        quote: '"he had his death-warrant written legibly upon his face"',
        effect:
          'The metaphor of a "death-warrant" transforms Lanyon\'s face into a legal document, connecting death to the motif of letters and written texts that pervade the novella. It also suggests that the knowledge Lanyon has gained has literally sentenced him to death.',
      },
      {
        technique: 'Tricolon',
        quote:
          '"He had always been known for charities; he was now no less distinguished for religion. He was busy, he was much in the open air, he did good"',
        effect:
          'The tricolon "busy... open air... did good" creates a rhythm of frenetic activity. Jekyll\'s exaggerated virtue is overcompensation for Hyde\'s crimes. Stevenson ironically highlights Victorian hypocrisy: public goodness is used as a mask for private sin.',
      },
      {
        technique: 'Repetition',
        quote: '"I wish to see or hear no more of Dr Jekyll... I am quite done with that person"',
        effect:
          'Lanyon\'s repetitive, absolute refusal reveals deep psychological trauma. The formal phrase "that person" dehumanises Jekyll and creates distance, suggesting Lanyon cannot process what he has witnessed.',
      },
      {
        technique: 'Gothic motif (sealed documents)',
        quote:
          '"a sealed enclosure... not to be opened till the death or disappearance of Dr Henry Jekyll"',
        effect:
          'The sealed letter is a classic Gothic device. It prolongs suspense, defers revelation, and symbolises the culture of secrecy. The word "disappearance" echoes Jekyll\'s will and suggests that those closest to him always anticipated a mysterious end.',
      },
      {
        technique: 'Sensory decay',
        quote:
          '"he looked deadly pale... his flesh had fallen away; he was visibly balder and older"',
        effect:
          'The physical description of Lanyon mirrors his psychological collapse. The verb "fallen away" suggests something has been stripped from him, while "visibly" forces the reader to see the transformation. Lanyon becomes a visual warning of what happens when the truth is confronted.',
      },
    ],
    structuralSignificance:
      "Chapter 6 marks the calm before the final storm. Stevenson uses the structure of hope followed by sudden reversal (Jekyll's sociability then relapse; Lanyon's health then death) to create a rhythm of false comfort. The sealed letter adds another layer to the novella's frame narrative, building towards the revelations of Chapters 9 and 10. The chapter's title, \"Remarkable Incident,\" is characteristically understated, contrasting with the devastating content.",
  },
  {
    number: 7,
    title: 'Incident at the Window',
    summary:
      'Utterson and Enfield are again on their Sunday walk and pass Jekyll\'s house. They see Jekyll sitting at an upstairs window, looking like "some disconsolate prisoner." They exchange pleasantries and invite him to join them. Jekyll agrees but then, mid-sentence, an expression of "abject terror and despair" crosses his face. He abruptly shuts the window and vanishes. Utterson and Enfield walk away in horrified silence. This is one of the shortest chapters in the novella.',
    summaryAr:
      'Utterson وEnfield مرة ثانية في جولتهم يوم الأحد ويمرّون ببيت Jekyll. يشوفون Jekyll قاعد عند نافذة في الطابق العلوي، يبيّن مثل "some disconsolate prisoner". يتبادلون التحية ويدعونه ينضم لهم. Jekyll يوافق، لكن فجأة، في منتصف جملته، يطلع على وجهه تعبير من "abject terror and despair". يسكّر النافذة بشكل مفاجئ ويختفي. Utterson وEnfield يمشون بصمت مرعوب. هذا واحد من أقصر فصول الرواية.',
    keyEvents: [
      "Utterson and Enfield pass Jekyll's house on their regular walk",
      'Jekyll appears at the window looking imprisoned and melancholy',
      'Jekyll begins speaking to them but is suddenly overcome with horror',
      'Jekyll abruptly closes the window and disappears from view',
      'Utterson and Enfield walk on in shocked silence',
    ],
    characterDevelopment:
      "Jekyll is barely able to maintain his public facade. His brief attempt at normality is overwhelmed by what appears to be an involuntary transformation beginning. The horror on his face suggests he is losing the battle against Hyde. Utterson and Enfield's silent departure reveals the limits of Victorian politeness: they witness something terrible but cannot speak of it.",
    languageAnalysis: [
      {
        technique: 'Simile',
        quote: '"like some disconsolate prisoner"',
        effect:
          'Jekyll is compared to a prisoner, suggesting he is trapped by his own experiment. The word "disconsolate" means beyond comfort, implying that Jekyll\'s situation is now hopeless. The simile foreshadows the final chapter where Jekyll is literally locked in his laboratory.',
      },
      {
        technique: 'Triad of nouns',
        quote:
          '"an expression of such abject terror and despair, as froze the very blood of the two gentlemen below"',
        effect:
          'The triad "abject terror and despair" escalates the emotional intensity. The verb "froze" transfers Jekyll\'s horror to Utterson and Enfield, physically immobilising them. The blood-freezing image is a Gothic convention made powerful by its context among restrained gentlemen.',
      },
      {
        technique: 'Silence as characterisation',
        quote: '"they said nothing, but walked on once more in silence"',
        effect:
          'The silence that closes the chapter is more eloquent than any dialogue. Stevenson demonstrates that some experiences are beyond language. The silence also reflects the Victorian compulsion to avoid naming uncomfortable truths.',
      },
      {
        technique: 'Structural juxtaposition',
        quote:
          '"the smile was struck out of his face and succeeded by an expression of such abject terror"',
        effect:
          'The speed of the transition from smile to terror mirrors the Jekyll-to-Hyde transformation. The passive voice ("was struck out") suggests the change is involuntary, something imposed upon Jekyll rather than chosen by him.',
      },
      {
        technique: 'Dramatic irony',
        quote:
          '"Come now; I am very low in spirits, and I will stay here... but indeed, Utterson, I am very glad to see you"',
        effect:
          "Jekyll's attempt at warmth and social connection is devastatingly undercut by what follows. The audience understands that Jekyll is trying to hold onto his identity, but the transformation is taking over. His gladness at seeing friends emphasises his isolation.",
      },
    ],
    structuralSignificance:
      "This extremely short chapter functions as a moment of pure Gothic horror within the detective narrative. Its brevity mirrors the speed of Jekyll's transformation and the fleeting nature of his control. Structurally, it mirrors Chapter 1 (Utterson and Enfield walking together) but with a much darker outcome, showing how the situation has deteriorated. The window becomes a liminal space between the public and private, the respectable and the monstrous.",
  },
  {
    number: 8,
    title: 'The Last Night',
    summary:
      "Jekyll's butler Poole arrives at Utterson's house in a state of terror. He believes his master has been murdered and replaced by someone else, because the voice behind the locked laboratory door no longer sounds like Jekyll. Together they return to Jekyll's house, where the servants are huddled in the hallway, terrified. Poole describes how the figure behind the door has been desperately sending him out for a particular chemical salt, rejecting every batch as impure. They hear a voice crying and weeping behind the door. Poole is convinced he once caught a glimpse of the occupant and saw a creature wearing a mask who \"cried out like a rat\" and fled. Utterson and Poole break down the door with an axe. Inside they find the body of Edward Hyde, still twitching in Jekyll's oversized clothes, dead by suicide from a vial of poison. Jekyll is nowhere to be found. On the desk they discover an updated will naming Utterson as beneficiary, a short note from Jekyll, and Lanyon's sealed letter.",
    summaryAr:
      'Poole خدّام Jekyll ييي بيت Utterson في حالة رعب. مقتنع إن سيده قد قُتل وحد ثاني صار مكانه، لأن الصوت اللي وراء باب المختبر المسكّر ما عاد يشبه صوت Jekyll. سوا يرجعون لبيت Jekyll، والخدم ملتمّين في الرواق وخايفين. Poole يصف شلون الشخص اللي وراء الباب يطلّبه بإلحاح ملح كيميائي معيّن، ويرفض كل دفعة ويقول عنها مغشوشة. يسمعون صوت يبكي وراء الباب. Poole مقتنع إنه شاف لمحة من الشخص ولاحظ إنه مخلوق لابس قناع و"cried out like a rat" وهرب. Utterson وPoole يكسرون الباب بفأس. داخل المختبر يلقون جثة Edward Hyde، لسّى تترعش، لابس ثياب Jekyll اللي وايد أكبر من حجمه، منتحر بقارورة سم. Jekyll مو موجود في أي مكان. على المكتب يحصّلون وصية محدّثة باسم Utterson كمستفيد، وملاحظة قصيرة من Jekyll، ورسالة Lanyon المختومة.',
    keyEvents: [
      "Poole arrives at Utterson's door in a panic, believing Jekyll has been murdered",
      'The servants are gathered in terror, sensing something is terribly wrong',
      'The voice behind the locked door has changed and no longer sounds like Jekyll',
      'Poole describes a masked figure who "cried out like a rat"',
      'Utterson and Poole break down the door with an axe',
      "They find Hyde dead by suicide in Jekyll's clothes; Jekyll has vanished",
    ],
    characterDevelopment:
      "Poole breaks the conventions of his class by seeking help from Utterson, driven by genuine fear and loyalty. His courage in confronting the unknown contrasts with the passive avoidance of the gentlemen earlier in the novella. Utterson finally acts decisively rather than deferring. Hyde's death in Jekyll's oversized clothes is a powerful visual symbol of the duality that has destroyed them both.",
    languageAnalysis: [
      {
        technique: 'Animalistic imagery',
        quote: '"it cried out like a rat when it came to light"',
        effect:
          'Poole describes Hyde as "it" rather than "he," stripping him of humanity. The simile "like a rat" continues the pattern of animal imagery associated with Hyde, suggesting he has degenerated even further from humanity. Rats connote disease, concealment, and parasitism.',
      },
      {
        technique: 'Gothic atmosphere',
        quote:
          '"the wind, which only broke in puffs and draughts into that deep well of building, tossed the light of the candle to and fro"',
        effect:
          'The flickering candlelight creates a classic Gothic setting of instability and fear. The phrase "deep well of building" makes the courtyard seem like a pit or abyss, symbolising the moral depths into which Jekyll has fallen.',
      },
      {
        technique: 'Clothing symbolism',
        quote:
          '"the clothes, although of the doctor\'s bigness, were enormously too large for him in every measurement"',
        effect:
          "Hyde wearing Jekyll's oversized clothes is one of the novella's most powerful visual images. The ill-fitting garments symbolise Hyde's parasitic relationship with Jekyll: he inhabits Jekyll's life but does not fill it. The detail also provides the physical evidence that confirms the truth.",
      },
      {
        technique: 'Suspense through pacing',
        quote:
          '"\'Down with the door, Poole!\' Utterson cried... and the red baize door leaped against the lock and hinges"',
        effect:
          'The imperative and exclamation mark break with Utterson\'s usual measured tone, showing the gravity of the situation. The personification of the door "leaping" against its frame creates violent, kinetic energy. The colour "red" carries connotations of blood and danger.',
      },
      {
        technique: 'Sensory detail',
        quote:
          '"right in the midst there lay the body of a man sorely contorted and still twitching"',
        effect:
          'The word "contorted" suggests pain and distortion, while "still twitching" implies they have arrived moments too late. The present participle "twitching" creates an unnerving sense of life persisting in death, blurring the boundary between the living and the dead.',
      },
    ],
    structuralSignificance:
      'Chapter 8 is the climax of the narrative present. It is the longest and most dramatic chapter, written almost as a thriller. The breaking down of the door symbolises the breaking of silence, secrecy, and Victorian restraint that has characterised the novella. Structurally, Stevenson solves the mystery of the plot (who is behind the door) while deepening the real mystery (how and why). The discovery of documents on the desk transitions the novella from action to revelation, setting up the final two epistolary chapters.',
  },
  {
    number: 9,
    title: "Dr Lanyon's Narrative",
    summary:
      'This chapter is Lanyon\'s letter, read by Utterson after the events of Chapter 8. Lanyon describes receiving a desperate, registered letter from Jekyll instructing him to go to Jekyll\'s laboratory, retrieve a specific drawer of chemicals, and bring it to his own house. At midnight, a small, repulsive man arrives at Lanyon\'s door: it is Hyde. He mixes the chemicals into a potion and offers Lanyon the choice to leave the room or to stay and witness something that will "stagger the unbelief of Satan." Lanyon chooses to stay. Hyde drinks the potion and, before Lanyon\'s eyes, transforms into Henry Jekyll. Lanyon writes that the shock of what he witnessed has been fatal: "my life is shaken to its roots; sleep has left me; the deadliest terror sits by me at all hours." He is dying of the knowledge.',
    summaryAr:
      'هالفصل هو رسالة Lanyon، يقرأها Utterson بعد أحداث الفصل الثامن. Lanyon يصف إنه استلم رسالة مسجّلة وعاجلة من Jekyll، يأمره فيها يروح مختبر Jekyll، ويأخذ درج معيّن فيه مواد كيميائية، ويرجع به لبيته. منتصف الليل، رجال صغير ونافر ييي على باب Lanyon: هو Hyde. يخلط المواد ويسوّي جرعة، ويعطي Lanyon الخيار: يطلع من الغرفة ولّا يبقى ويشهد شي بـ"stagger the unbelief of Satan". Lanyon يختار يبقى. Hyde يشرب الجرعة، وقدام عيون Lanyon، يتحوّل إلى Henry Jekyll. Lanyon يكتب إن صدمة اللي شافه كانت قاتلة: "my life is shaken to its roots; sleep has left me; the deadliest terror sits by me at all hours". هو يموت بفعل المعرفة نفسها.',
    keyEvents: [
      'Lanyon receives a frantic letter from Jekyll with precise instructions',
      "Lanyon retrieves a drawer of chemicals from Jekyll's laboratory",
      'At midnight, Hyde arrives and mixes the chemicals into a potion',
      'Hyde offers Lanyon the choice to witness the transformation or leave',
      'Lanyon watches Hyde drink the potion and transform into Jekyll',
      'Lanyon reveals the shock is killing him',
    ],
    characterDevelopment:
      "Lanyon represents the limits of rational Victorian science. He cannot accommodate what he has seen within his understanding of the world, and the result is fatal. His choice to stay and watch, despite being warned, reveals a curiosity that mirrors the reader's own. Jekyll's desperation in the letter shows he is losing control and depends on others to obtain the chemicals he needs.",
    languageAnalysis: [
      {
        technique: 'First-person narrative shift',
        quote: '"O God!" I screamed, and "O God!" again and again"',
        effect:
          "The shift to Lanyon's first person creates immediacy and authenticity. The repetition and exclamation marks convey complete psychological breakdown. The invocation of God suggests Lanyon's rational, scientific worldview has collapsed and he reaches for religious language as a last resort.",
      },
      {
        technique: 'Tricolon (building dread)',
        quote:
          '"my life is shaken to its roots; sleep has left me; the deadliest terror sits by me at all hours"',
        effect:
          'The tricolon escalates from existential crisis ("shaken to its roots") to physical suffering ("sleep has left me") to permanent psychological torment ("deadliest terror sits by me"). The personification of terror "sitting" by him makes it a constant, inescapable companion.',
      },
      {
        technique: 'Visual transformation',
        quote:
          '"he put the glass to his lips and drank at one gulp... there before my eyes — pale and shaken, and half fainting — there stood Henry Jekyll!"',
        effect:
          'The dashes create breathless, interrupted syntax that mimics Lanyon\'s shock. The detail "at one gulp" shows Hyde\'s desperate haste. The repetition of "there" emphasises the impossibility of what Lanyon is seeing: the familiar Jekyll standing where the monstrous Hyde was moments before.',
      },
      {
        technique: 'Hyperbolic religious language',
        quote: '"what he told me in the next hour, I cannot bring my mind to set on paper"',
        effect:
          "Lanyon's refusal to write the full truth mirrors the culture of suppression that pervades the novella. Some knowledge is presented as genuinely too dangerous to record, suggesting that the full horror exceeds even what Jekyll's own confession will reveal.",
      },
      {
        technique: 'Sensory overload',
        quote:
          '"he reeled, staggered, clutched at the table and held on, staring with injected eyes, gasping with open mouth"',
        effect:
          'The rapid sequence of verbs ("reeled, staggered, clutched, held, staring, gasping") creates a cinematic, almost slow-motion description of the transformation. The "injected eyes" (bloodshot) and "open mouth" reduce the figure to raw physicality, stripped of all social performance.',
      },
    ],
    structuralSignificance:
      "Chapter 9 is the first of two epistolary chapters that finally explain the mystery. By giving Lanyon his own narrative voice, Stevenson provides an eyewitness account of the transformation from someone outside the Jekyll-Hyde relationship. This external verification is crucial: it proves the transformation is real, not metaphorical. Structurally, the chapter moves from detective fiction to Gothic horror, and the shift to first person makes the reader experience Lanyon's shock directly.",
  },
  {
    number: 10,
    title: "Henry Jekyll's Full Statement of the Case",
    summary:
      'The final chapter is Jekyll\'s own written confession, composed as his last act before Hyde takes over permanently. Jekyll explains that he had long been fascinated by the duality of human nature and felt burdened by the need to conceal his pleasures behind a facade of respectability. He discovered a chemical compound that could separate his dual nature, allowing him to transform into the purely evil Edward Hyde. At first, Jekyll relished the freedom: as Hyde, he could indulge every vice without consequence, then return to his respectable life by drinking the potion again. However, the transformations gradually became involuntary. One morning Jekyll woke as Hyde without taking the potion. Hyde grew stronger and more dominant with each transformation. Jekyll tried to stop but found he could not resist the temptation. After Hyde murdered Carew, Jekyll resolved never to transform again, but he eventually succumbed. The crucial salt needed for the potion began to run out, and new batches did not work — Jekyll suspects the original salt contained an unknown impurity that was the true catalyst. Trapped in his laboratory, transforming involuntarily and running out of the potion, Jekyll writes his confession knowing that by the time Utterson reads it, Hyde will have taken over completely. He ends: "I bring the life of that unhappy Henry Jekyll to an end."',
    summaryAr:
      'الفصل الأخير هو اعتراف Jekyll نفسه المكتوب، يخطّه كآخر شي يسوّيه قبل ما يستولي Hyde بشكل دائم. Jekyll يشرح إنه كان من زمان مفتون بازدواجية النفس البشرية، وكان يحس بثقل الحاجة لإخفاء ملذّاته وراء واجهة الاحترام. اكتشف مركّب كيميائي يقدر يفصل بين جانبيه، يخلّيه يتحوّل إلى Edward Hyde الشرير الصرف. في البداية، Jekyll استمتع بالحرّية: كـ Hyde، يقدر ينغمس بأي رذيلة بلا عواقب، ثم يرجع لحياته المحترمة بشرب الجرعة مرة ثانية. لكن، التحوّلات شيئاً فشيئاً صارت بلا إرادة. صبح واحد، Jekyll قام كـ Hyde بدون ما يشرب الجرعة. Hyde يقوى ويسيطر مع كل تحوّل. Jekyll حاول يوقف، لكن ما قدر يقاوم الإغراء. بعد ما قتل Hyde Sir Danvers Carew، Jekyll تعهّد إنه ما يتحوّل ثاني، لكنه استسلم في الآخر. الملح الجوهري اللي يحتاجه للجرعة بدأ يخلّص، والدفعات الجديدة ما تشتغل — Jekyll يشك إن الملح الأصلي كان فيه شائبة مجهولة هي المحفّز الحقيقي. محاصر داخل مختبره، يتحوّل بلا إرادة والجرعة تخلّص، Jekyll يكتب اعترافه وهو يعرف إنه لمن يقرأه Utterson، Hyde يكون استولى بشكل كامل. يختم بـ: "I bring the life of that unhappy Henry Jekyll to an end."',
    keyEvents: [
      'Jekyll confesses his lifelong struggle with duality and concealed desires',
      'He describes creating the potion to separate his good and evil natures',
      'Jekyll initially enjoys the freedom of living as Hyde without moral consequence',
      'The transformations become involuntary — Jekyll wakes as Hyde without the potion',
      'After the Carew murder, Jekyll tries and fails to stop transforming',
      'The crucial salt runs out and cannot be replaced',
      'Jekyll writes his final confession knowing Hyde will take over permanently',
    ],
    characterDevelopment:
      "Jekyll is finally seen in full complexity: not a villain but a man destroyed by his own intellectual arrogance and moral weakness. He genuinely believed he could control the experiment and is horrified by the consequences. His confession reveals self-pity, self-deception, and genuine insight in equal measure. He refers to Hyde in the third person even as he acknowledges they are the same being, showing that even at the end he cannot fully accept the truth. Hyde, through Jekyll's account, is revealed as an addiction: initially pleasurable, increasingly compulsive, and ultimately fatal.",
    languageAnalysis: [
      {
        technique: 'Declarative philosophical statement',
        quote: '"man is not truly one, but truly two"',
        effect:
          'This is the thesis statement of the entire novella. The balanced, parallel structure ("not truly one, but truly two") gives it the authority of a scientific axiom. Jekyll goes even further, speculating that man may be "a mere polity of multifarious, incongruous and independent denizens," suggesting identity is even more fragmented than a simple binary.',
      },
      {
        technique: 'Metaphor of addiction',
        quote:
          '"I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse"',
        effect:
          'The passive construction ("losing hold," "becoming incorporated") makes the process sound involuntary and irreversible, mirroring the language of addiction. The repetition of "slowly" creates a creeping, insidious pace. The moral vocabulary ("better," "worse") frames the transformation as spiritual decline.',
      },
      {
        technique: 'Biblical imagery',
        quote:
          '"this was the shocking thing; that the slime of the pit seemed to utter cries and voices"',
        effect:
          'The "slime of the pit" is a direct reference to Hell. Hyde is characterised as something that has crawled from the underworld. The verb "utter" gives evil its own voice and agency, suggesting it is a living force that demands expression rather than a passive condition.',
      },
      {
        technique: 'Oxymoron',
        quote:
          '"I felt younger, lighter, happier in body; within I was conscious of a heady recklessness"',
        effect:
          'Jekyll describes becoming Hyde with genuinely positive language ("younger, lighter, happier"), creating an oxymoron with the moral horror of what Hyde represents. The word "heady" suggests intoxication, while "recklessness" hints at the loss of moral compass. Stevenson shows why evil is seductive.',
      },
      {
        technique: 'Third-person self-reference',
        quote: '"I bring the life of that unhappy Henry Jekyll to an end"',
        effect:
          'Jekyll refers to himself as "that unhappy Henry Jekyll," using the third person and the demonstrative "that" to create distance from his own identity. The sentence functions as both a death notice and a farewell. The word "unhappy" carries tremendous pathos, reducing a life of ambition, achievement, and catastrophe to a single adjective.',
      },
    ],
    structuralSignificance:
      "Chapter 10 is the longest chapter and provides the definitive explanation of the novella's central mystery. By placing Jekyll's confession last, Stevenson ensures maximum dramatic impact: the reader finally understands everything, but only after the outcome is already known. This creates a tragic irony: we read Jekyll's account knowing he is already dead. The epistolary form (a written statement rather than a spoken confession) is significant because it means Jekyll never faces another person with the truth. Even his final act is mediated by text, reinforcing the novella's themes of concealment and the impossibility of genuine self-disclosure in Victorian society.",
  },
]

/* ─── Page ───────────────────────────────────────────────────── */

export default async function JekyllChaptersPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }
  const h = await headers()
  const isAr = h.get('x-lang') === 'ar'
  const pickStr = (en: string, ar?: string) => (isAr && ar ? ar : en)

  return (
    <div className="space-y-10 pb-16" dir={isAr ? 'rtl' : undefined}>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'Dr Jekyll and Mr Hyde',
            url: 'https://theenglishhub.app/revision/texts/jekyll-and-hyde',
          },
          {
            name: 'Chapter-by-Chapter Analysis',
            url: 'https://theenglishhub.app/revision/texts/jekyll-and-hyde/chapters',
          },
        ]}
      />
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Revision', href: '/revision' },
          { label: 'Texts', href: '/revision/texts' },
          { label: 'Jekyll and Hyde', href: '/revision/texts/jekyll-and-hyde' },
          { label: 'Chapter Analysis' },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts/jekyll-and-hyde" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to study guide
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <BookOpen className="mr-1 size-3 text-emerald-400" />
              Deep Study
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              AQA / Edexcel / OCR / Eduqas
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Chapter-by-Chapter Analysis
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            Strange Case of Dr Jekyll and Mr Hyde — Robert Louis Stevenson (1886)
          </p>
          <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
            All 10 chapters analysed in depth: summaries, key events, character development, five
            language techniques per chapter with full quotations, and structural significance.
          </p>
        </div>
      </section>

      {/* Chapter navigation */}
      <section>
        <Card>
          <CardContent className="p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Jump to chapter
            </p>
            <div className="flex flex-wrap gap-2">
              {chapters.map((ch) => (
                <a
                  key={ch.number}
                  href={`#chapter-${ch.number}`}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:border-primary/30"
                >
                  <span className="text-xs text-muted-foreground">Ch {ch.number}</span>
                  {ch.title}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Chapters */}
      {chapters.map((ch) => (
        <section key={ch.number} id={`chapter-${ch.number}`} className="scroll-mt-8 space-y-5">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10 text-sm font-bold text-emerald-400">
              {ch.number}
            </span>
            <h2 className="text-heading-lg font-heading text-foreground">
              {isAr ? 'الفصل' : 'Chapter'} {ch.number}: {ch.title}
            </h2>
          </div>

          {/* Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                <BookOpen className="size-4 text-blue-400" />
                {isAr ? 'الملخص' : 'Summary'}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-body-sm text-muted-foreground">
              <p>{pickStr(ch.summary, ch.summaryAr)}</p>
            </CardContent>
          </Card>

          {/* Key Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                <Layers className="size-4 text-clay-600" />
                Key Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {ch.keyEvents.map((evt, i) => (
                  <li key={i} className="flex items-start gap-2 text-body-sm text-muted-foreground">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-[10px] font-bold text-clay-600">
                      {i + 1}
                    </span>
                    {evt}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Character Development */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                <Users className="size-4 text-violet-400" />
                Character Development
              </CardTitle>
            </CardHeader>
            <CardContent className="text-body-sm text-muted-foreground">
              <p>{ch.characterDevelopment}</p>
            </CardContent>
          </Card>

          {/* Language Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                <Feather className="size-4 text-emerald-400" />
                Language Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {ch.languageAnalysis.map((la, i) => (
                <div key={i} className="rounded-lg border border-border/40 bg-card/50 p-4">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {la.technique}
                  </Badge>
                  <p className="mb-2 text-body-md font-medium italic text-foreground">{la.quote}</p>
                  <p className="text-body-sm text-muted-foreground">{la.effect}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Structural Significance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-heading-md font-heading">
                <Layers className="size-4 text-blue-400" />
                Structural Significance
              </CardTitle>
            </CardHeader>
            <CardContent className="text-body-sm text-muted-foreground">
              <p>{ch.structuralSignificance}</p>
            </CardContent>
          </Card>

          {/* Divider between chapters */}
          {ch.number < 10 && <div className="border-t border-border/40 pt-4" />}
        </section>
      ))}

      {/* Navigation CTA */}
      <section className="flex flex-col gap-3 sm:flex-row">
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/jekyll-and-hyde/key-quotes" />}
        >
          <Quote className="size-3.5" />
          Key Quotes by Theme
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/jekyll-and-hyde/essay-plans" />}
        >
          <Feather className="size-3.5" />
          Essay Plans
        </Button>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/revision/texts/jekyll-and-hyde" />}
        >
          <ArrowLeft className="size-3.5" />
          Study Guide Overview
        </Button>
      </section>

      {/* Public domain notice */}
      <p className="text-xs text-muted-foreground border-t border-border/60 pt-4">
        <em>Strange Case of Dr Jekyll and Mr Hyde</em> (1886) by Robert Louis Stevenson is in the
        public domain. Quotations are reproduced freely.
      </p>
    </div>
  )
}
