'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Lightbulb,
  Quote,
  Sparkles,
  Filter,
} from 'lucide-react'

import StudyTools from '@/components/study/StudyTools'

/* ────────────────────────────────────────────────────────────────────── */
/*  Data                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

type QuoteEntry = {
  id: number
  quote: string
  speaker: string
  act: 'Act 1' | 'Act 2' | 'Act 3'
  context: string
  ao2Analysis: string
  ao3Context: string
  themes: string[]
  examTip: string
}

const QUOTES: QuoteEntry[] = [
  /* ── Act 1 ──────────────────────────────────────────────────────────── */
  {
    id: 1,
    quote: '"The Titanic \u2014 unsinkable, absolutely unsinkable."',
    speaker: 'Arthur Birling',
    act: 'Act 1',
    context: 'Birling\u2019s after-dinner speech, predicting a future of progress and peace.',
    ao2Analysis:
      'The superlative "absolutely" conveys total certainty. The audience knows the Titanic sank, so dramatic irony instantly discredits Birling. Priestley weaponises hindsight to undermine capitalist confidence.',
    ao3Context:
      'The Titanic sank in April 1912, killing over 1,500 people. Birling\u2019s prediction is wrong within weeks of the play\u2019s setting, making his judgment unreliable from the opening scene.',
    themes: ['Capitalism vs Socialism', 'Social Responsibility'],
    examTip: 'Use this as your opening quote when writing about dramatic irony or Birling\u2019s characterisation. It immediately establishes that Priestley wants the audience to distrust Birling.',
  },
  {
    id: 2,
    quote: '"a man has to look after himself and his own"',
    speaker: 'Arthur Birling',
    act: 'Act 1',
    context: 'Birling advises Gerald and Eric on the principles of business and life.',
    ao2Analysis:
      '"His own" limits moral obligation to family and class. The declarative sentence presents selfishness as universal truth. This is the capitalist creed that the entire play exists to refute.',
    ao3Context:
      'Birling articulates the laissez-faire individualism of Edwardian capitalism. Priestley, writing in 1945, presents this philosophy as the cause of two world wars and mass unemployment.',
    themes: ['Capitalism vs Socialism', 'Social Responsibility'],
    examTip: 'Pair this directly with the Inspector\u2019s "We are members of one body" to show how Priestley structures the play as a debate between two opposing philosophies.',
  },
  {
    id: 3,
    quote: '"The way some of these cranks talk and write now, you\u2019d think everybody has to look after everybody else."',
    speaker: 'Arthur Birling',
    act: 'Act 1',
    context: 'Birling dismisses socialist thinkers before the Inspector arrives.',
    ao2Analysis:
      '"Cranks" dismisses socialists as irrational. The play that follows proves the "cranks" right and Birling wrong. Priestley uses dramatic irony to ensure the audience sides with those Birling mocks.',
    ao3Context:
      'Priestley himself was one of the "cranks" Birling ridicules. His Postscripts broadcasts during WWII argued for collective responsibility and reached millions of listeners.',
    themes: ['Capitalism vs Socialism'],
    examTip: 'This quote works well in essays about Priestley\u2019s methods. The audience recognises that "everybody has to look after everybody else" is exactly the Inspector\u2019s message.',
  },
  {
    id: 4,
    quote: '"But these girls aren\u2019t cheap labour \u2014 they\u2019re people."',
    speaker: 'Sheila Birling',
    act: 'Act 1',
    context: 'Sheila challenges her father\u2019s economic language after learning about Eva.',
    ao2Analysis:
      'The dash marks the moment of moral awakening. Sheila replaces the dehumanising economic term "cheap labour" with the simple, emphatic "people." The antithesis captures the play\u2019s core argument in a single sentence.',
    ao3Context:
      'Workers in Edwardian factories had minimal rights. The welfare state built after 1945 aimed to ensure that working people were treated as citizens with rights, not as disposable economic units.',
    themes: ['Class & Inequality', 'Social Responsibility', 'Gender'],
    examTip: 'This is one of the strongest AO2 quotes in the play. Analyse the contrast between "cheap labour" and "people" to show how Priestley uses language to dramatise moral awakening.',
  },
  {
    id: 5,
    quote: '"I\u2019ll never, never do it again to anybody."',
    speaker: 'Sheila Birling',
    act: 'Act 1',
    context: 'Sheila accepts full responsibility after learning she had Eva dismissed from Milwards.',
    ao2Analysis:
      'The repetition of "never" conveys the depth of Sheila\u2019s remorse. The promise is immediate, unconditional, and forward-looking. Priestley models the moral response he wants from his audience.',
    ao3Context:
      'Priestley\u2019s 1945 audience had just lived through a world war. He is asking them, like Sheila, to commit to never allowing the conditions that caused such suffering to return.',
    themes: ['Guilt & Morality', 'Age & Generational Change'],
    examTip: 'Use this as evidence that Sheila is the first character to change. Contrast her immediate acceptance with her parents\u2019 refusal to learn.',
  },
  {
    id: 6,
    quote: '"Public men, Mr Birling, have responsibilities as well as privileges."',
    speaker: 'Inspector Goole',
    act: 'Act 1',
    context: 'The Inspector\u2019s first direct challenge to Birling\u2019s authority.',
    ao2Analysis:
      'The balanced phrasing of "responsibilities as well as privileges" frames social duty as non-negotiable. The Inspector speaks to Birling as a moral equal \u2014 or superior \u2014 despite Birling\u2019s wealth and status.',
    ao3Context:
      'The Edwardian upper-middle class enjoyed privileges \u2014 wealth, political influence, social status \u2014 without proportional accountability. The post-war welfare state aimed to attach responsibility to power.',
    themes: ['Power & Abuse of Power', 'Social Responsibility'],
    examTip: 'This quote immediately establishes the Inspector\u2019s moral authority. Use it to show how Priestley inverts the class hierarchy through the Inspector\u2019s language.',
  },
  {
    id: 7,
    quote: '"she\u2019d had a lot to say \u2014 far too much \u2014 so she had to go."',
    speaker: 'Arthur Birling',
    act: 'Act 1',
    context: 'Birling explains why he sacked Eva from his factory.',
    ao2Analysis:
      '"Far too much" measures speech by class entitlement: a working-class woman demanding fair wages is automatically saying too much. The parenthetical dash reveals Birling\u2019s irritation that a worker dared to speak at all.',
    ao3Context:
      'Workers in 1912 had no legal protection against unfair dismissal. Trade unions were growing but strikes were risky. Eva\u2019s sacking for speaking up reflects the power imbalance of Edwardian labour relations.',
    themes: ['Power & Abuse of Power', 'Class & Inequality'],
    examTip: 'Analyse the word "go" \u2014 it reduces dismissal to a casual verb, sanitising the destruction of Eva\u2019s livelihood. This is strong AO2 on how language disguises exploitation.',
  },
  /* ── Act 2 ──────────────────────────────────────────────────────────── */
  {
    id: 8,
    quote: '"I didn\u2019t feel about her as she felt about me."',
    speaker: 'Gerald Croft',
    act: 'Act 2',
    context: 'Gerald admits the emotional asymmetry in his relationship with Daisy Renton.',
    ao2Analysis:
      'The parallel structure ("I didn\u2019t feel \u2026 as she felt") highlights the imbalance. Gerald had the freedom to leave; Daisy did not. The admission reveals how class power creates emotional inequality.',
    ao3Context:
      'Women in 1912 had very few economic options. A working-class woman who lost her income was often forced into dependence on men. Gerald\u2019s "rescue" of Daisy replicated the patriarchal power structure it appeared to challenge.',
    themes: ['Gender', 'Class & Inequality', 'Power & Abuse of Power'],
    examTip: 'Use this to argue that Gerald\u2019s relationship with Daisy was inherently exploitative, regardless of his intentions. The power imbalance made genuine equality impossible.',
  },
  {
    id: 9,
    quote: '"She was young and pretty and warm-hearted \u2014 and intensely grateful."',
    speaker: 'Gerald Croft',
    act: 'Act 2',
    context: 'Gerald describes Daisy\u2019s qualities when he first took her as his mistress.',
    ao2Analysis:
      'The listing reduces Daisy to a set of attractive attributes. "Intensely grateful" is the most revealing phrase: Gerald valued her dependence. The polysyndeton ("and \u2026 and \u2026 and") accumulates her qualities like a catalogue of possessions.',
    ao3Context:
      'The "kept woman" was a recognised feature of Edwardian upper-class life. Men of Gerald\u2019s class routinely maintained mistresses while their social equals looked the other way.',
    themes: ['Gender', 'Class & Inequality'],
    examTip: 'Analyse "intensely grateful" as the key phrase. Gratitude implies dependence, and dependence implies power. Gerald\u2019s description reveals more about him than about Daisy.',
  },
  {
    id: 10,
    quote: '"I was quite justified."',
    speaker: 'Sybil Birling',
    act: 'Act 2',
    context: 'Sybil defends her decision to refuse Eva\u2019s appeal at the charity committee.',
    ao2Analysis:
      'Four words that capture complete moral blindness. "Quite" reinforces her certainty; "justified" frames her class prejudice as rational decision-making. Sybil sees no gap between her position and her morality.',
    ao3Context:
      'Charitable organisations in Edwardian England were often run by upper-class women and could be instruments of class control rather than genuine aid. Sybil\u2019s committee reflects this dynamic.',
    themes: ['Class & Inequality', 'Guilt & Morality', 'Power & Abuse of Power'],
    examTip: 'This is the shortest and most powerful quote for Sybil. Use it to argue that Priestley presents her class prejudice as so deeply embedded that she genuinely cannot see it as wrong.',
  },
  {
    id: 11,
    quote: '"Girls of that class\u2014"',
    speaker: 'Sybil Birling',
    act: 'Act 2',
    context: 'Sybil begins to dismiss Eva based on her social position.',
    ao2Analysis:
      'The interrupted phrase is more revealing than a completed sentence. Sybil categorises Eva by class reflexively, before she has finished speaking. The dash suggests the Inspector cuts her off, refusing to let her complete the dehumanising thought.',
    ao3Context:
      'Class in Edwardian England was not just economic but linguistic. The way people spoke about the working class \u2014 "that class," "these people" \u2014 reinforced their exclusion from full humanity.',
    themes: ['Class & Inequality'],
    examTip: 'The interruption is the key feature to analyse. Discuss what Sybil might have said and why Priestley chose not to let her finish. The unsaid is as important as the said.',
  },
  {
    id: 12,
    quote: '"he ought to be dealt with very severely"',
    speaker: 'Sybil Birling',
    act: 'Act 2',
    context: 'Sybil demands punishment for the father of Eva\u2019s child, not knowing it is Eric.',
    ao2Analysis:
      '"Dealt with" is punitive and impersonal. Sybil positions herself as a judge without recognising that the judgment will fall on her own family. Priestley constructs the dramatic irony so that Sybil\u2019s desire for punishment becomes her own humiliation.',
    ao3Context:
      'The Edwardian moral code punished unmarried mothers but rarely the men involved. Sybil\u2019s demand for severity reflects this double standard, which Priestley exposes as hypocritical.',
    themes: ['Guilt & Morality', 'Gender', 'Class & Inequality'],
    examTip: 'This is a perfect example of dramatic irony. Explain how the audience and Sheila can see the trap closing while Sybil walks into it with absolute confidence.',
  },
  {
    id: 13,
    quote: '"the father of the child \u2026 is entirely responsible"',
    speaker: 'Sybil Birling',
    act: 'Act 2',
    context: 'Sybil deflects blame onto the unknown father, about to be revealed as Eric.',
    ao2Analysis:
      '"Entirely" is an absolute that Sybil will desperately wish to retract. She attempts to shift all responsibility away from herself, but Priestley ensures her words rebound. The ellipsis marks the moment when Sybil seals her family\u2019s exposure.',
    ao3Context:
      'The Edwardian class system allowed the wealthy to deflect blame downward. Sybil\u2019s instinct to blame the father reflects a system where responsibility always flowed away from those with power.',
    themes: ['Guilt & Morality', 'Power & Abuse of Power'],
    examTip: 'Analyse the word "entirely" and its ironic effect. Sybil intends to condemn a stranger but ends up condemning her own son.',
  },
  {
    id: 14,
    quote: '"She was claiming elaborate fine feelings and scruples that were simply absurd in a girl in her position."',
    speaker: 'Sybil Birling',
    act: 'Act 2',
    context: 'Sybil explains why she rejected Eva\u2019s appeal at the charity committee.',
    ao2Analysis:
      'Sybil denies Eva the capacity for moral feeling based solely on class. "In her position" reserves virtues like scruple and sensitivity for the upper classes. "Absurd" turns Eva\u2019s integrity into a joke. Priestley exposes the deepest form of class prejudice.',
    ao3Context:
      'The belief that the working class lacked refined feelings was a cornerstone of Victorian and Edwardian class ideology. Priestley shows this assumption to be both cruel and self-serving.',
    themes: ['Class & Inequality', 'Gender'],
    examTip: 'This is an excellent quote for discussing how class prejudice operates through assumptions about moral capacity. Sybil does not just deny Eva help \u2014 she denies her full humanity.',
  },
  {
    id: 15,
    quote: '"She was very pretty \u2014 soft brown hair and big dark eyes."',
    speaker: 'Gerald Croft',
    act: 'Act 2',
    context: 'Gerald describes first seeing Eva/Daisy at the Palace bar.',
    ao2Analysis:
      'Gerald describes Eva in objectifying detail, focusing entirely on physical appearance. The adjectives "soft" and "big" create a passive, vulnerable image. Priestley shows how the male gaze reduces women to objects of desire.',
    ao3Context:
      'Women in 1912 had limited economic independence and were often valued primarily for their appearance and compliance. Gerald\u2019s description reflects the gendered power dynamics of the period.',
    themes: ['Gender', 'Power & Abuse of Power'],
    examTip: 'Note what Gerald does not describe: Eva\u2019s intelligence, her courage in leading a strike, or her moral integrity. His description reveals his values, not hers.',
  },
  /* ── Act 3 ──────────────────────────────────────────────────────────── */
  {
    id: 16,
    quote: '"We are members of one body. We are responsible for each other."',
    speaker: 'Inspector Goole',
    act: 'Act 3',
    context: 'The Inspector\u2019s final speech before departing.',
    ao2Analysis:
      'The play\u2019s thesis statement. "One body" echoes St Paul\u2019s letters, lending the socialist message biblical authority. The simple present tense makes responsibility a permanent fact. The inclusive "we" implicates the audience alongside the Birlings.',
    ao3Context:
      'The 1945 welfare state was built on the principle that society is collectively responsible for its members. The Inspector\u2019s speech directly endorses this political moment.',
    themes: ['Social Responsibility', 'Capitalism vs Socialism'],
    examTip: 'This is the most important quote in the play. Always include it in essays about social responsibility. Analyse the biblical register, the tense, and the pronoun "we."',
  },
  {
    id: 17,
    quote: '"Fire and blood and anguish."',
    speaker: 'Inspector Goole',
    act: 'Act 3',
    context: 'The Inspector warns of consequences if society refuses to learn.',
    ao2Analysis:
      'A prophetic tricolon that builds from physical destruction ("fire") to bodily suffering ("blood") to psychological torment ("anguish"). The escalation insists that the consequences of irresponsibility affect every dimension of human experience.',
    ao3Context:
      'The audience knows this prophecy was fulfilled by WWI (1914\u201318) and WWII (1939\u201345). Priestley gives the Inspector the authority of historical knowledge that the 1912 characters lack.',
    themes: ['Social Responsibility', 'Capitalism vs Socialism'],
    examTip: 'Link this directly to the 1912 setting and the 1945 audience. The audience has lived through the "fire and blood and anguish" the Inspector predicts, making his warning both retrospective and urgent.',
  },
  {
    id: 18,
    quote: '"One Eva Smith has gone \u2014 but there are millions and millions of Eva Smiths and John Smiths still left with us."',
    speaker: 'Inspector Goole',
    act: 'Act 3',
    context: 'The Inspector universalises Eva\u2019s suffering in his final speech.',
    ao2Analysis:
      'The shift from singular "One Eva Smith" to "millions and millions" turns a personal tragedy into a systemic argument. The addition of "John Smiths" makes the point gender-inclusive. "Still left with us" insists the problem is present, not past.',
    ao3Context:
      'Priestley\u2019s 1945 audience knew that millions had suffered from poverty, unemployment, and war. The Inspector\u2019s speech argues that Eva\u2019s story is not exceptional but representative of systemic failure.',
    themes: ['Social Responsibility', 'Class & Inequality'],
    examTip: 'Use this to argue that Eva is an everywoman figure. Her individual suffering represents a collective injustice that demands collective action.',
  },
  {
    id: 19,
    quote: '"We don\u2019t live alone. We are members of one body."',
    speaker: 'Inspector Goole',
    act: 'Act 3',
    context: 'A compressed restatement of the Inspector\u2019s central argument.',
    ao2Analysis:
      'The negative construction "don\u2019t live alone" directly contradicts Birling\u2019s Act 1 philosophy. Priestley bookends the play with opposing worldviews: individualism at the start, collectivism at the end. The simple language makes the argument accessible and unanswerable.',
    ao3Context:
      'The post-war consensus in Britain was built on the rejection of individualism. The NHS, national insurance, and council housing all expressed the principle that "we don\u2019t live alone."',
    themes: ['Social Responsibility', 'Capitalism vs Socialism'],
    examTip: 'Pair this with Birling\u2019s "a man has to look after himself and his own" to show the play\u2019s dialectical structure: thesis (Birling) \u2014 antithesis (Inspector).',
  },
  {
    id: 20,
    quote: '"You\u2019re not the kind of father a chap could go to."',
    speaker: 'Eric Birling',
    act: 'Act 3',
    context: 'Eric accuses his father of emotional unavailability after his confession.',
    ao2Analysis:
      'Eric\u2019s accusation exposes the emotional bankruptcy beneath Birling\u2019s patriarchal authority. "A chap" is deliberately casual, masking deep pain with understatement. The family\u2019s dysfunction was not caused by the Inspector but was always present.',
    ao3Context:
      'The Edwardian father was expected to be an authority figure, not an emotional support. Priestley shows how this model of masculinity fails the younger generation and contributes to family dysfunction.',
    themes: ['Age & Generational Change', 'Power & Abuse of Power'],
    examTip: 'Use this to show that the Birling family\u2019s problems existed before the Inspector arrived. The investigation does not create dysfunction \u2014 it exposes dysfunction that was always there.',
  },
  {
    id: 21,
    quote: '"It\u2019s what happened to the girl and what we all did to her that matters."',
    speaker: 'Sheila Birling',
    act: 'Act 3',
    context: 'Sheila insists the moral lesson stands regardless of the Inspector\u2019s identity.',
    ao2Analysis:
      '"We all" distributes guilt collectively. "Matters" is a simple, emphatic monosyllable that refuses to let the family trivialise Eva\u2019s death. Sheila cuts through her parents\u2019 evasion with a clarity that marks her as the play\u2019s moral centre.',
    ao3Context:
      'Priestley addresses the audience through Sheila: the lesson of the play matters regardless of its fictional status. Art can deliver moral truth even when the "inspector" is not real.',
    themes: ['Guilt & Morality', 'Social Responsibility'],
    examTip: 'This quote works in almost any essay on the play. It articulates Priestley\u2019s core argument: moral responsibility exists independently of legal or factual verification.',
  },
  {
    id: 22,
    quote: '"You began to learn something. And now you\u2019ve stopped."',
    speaker: 'Sheila Birling',
    act: 'Act 3',
    context: 'Sheila accuses Gerald and her parents of abandoning the Inspector\u2019s lesson.',
    ao2Analysis:
      'The short, accusing sentences convey frustrated disappointment. "Began" implies incomplete learning; "stopped" implies a deliberate choice to retreat. Priestley sharpens the generational divide at the play\u2019s climax through Sheila\u2019s register.',
    ao3Context:
      'Priestley feared that the post-war moment of reform might be temporary. Sheila\u2019s accusation reflects his anxiety that society would "stop" learning and return to pre-war inequality.',
    themes: ['Age & Generational Change', 'Guilt & Morality'],
    examTip: 'This is the key quote for generational conflict. Use it to argue that the older generation\u2019s refusal to learn is a deliberate moral choice, not mere stubbornness.',
  },
  {
    id: 23,
    quote: '"the famous younger generation who know it all"',
    speaker: 'Arthur Birling',
    act: 'Act 3',
    context: 'Birling dismisses Sheila and Eric\u2019s moral growth as youthful arrogance.',
    ao2Analysis:
      'Birling\u2019s sarcasm reveals his defensive refusal to learn. "Famous" is bitterly ironic. Priestley positions the audience to side with the younger generation against Birling\u2019s condescension, making the quote work against the speaker.',
    ao3Context:
      'The 1945 Labour landslide was driven largely by young voters and returning servicemen who rejected the old order. Birling\u2019s dismissal of the young mirrors the establishment\u2019s surprise at the election result.',
    themes: ['Age & Generational Change'],
    examTip: 'This quote is designed to backfire. Birling intends it as an insult, but the audience recognises that the younger generation genuinely does understand something the older generation refuses to accept.',
  },
  {
    id: 24,
    quote: '"If we were all responsible for everything that happened to everybody \u2026 it would be very awkward."',
    speaker: 'Arthur Birling',
    act: 'Act 3',
    context: 'Birling tries to dismiss the Inspector\u2019s message after his departure.',
    ao2Analysis:
      'Birling reduces a moral question to a practical inconvenience. "Awkward" trivialises what the Inspector has shown to be a matter of life and death. The conditional "If" reveals that Birling still treats responsibility as hypothetical, not real.',
    ao3Context:
      'The welfare state required exactly the collective responsibility Birling calls "awkward." Priestley\u2019s audience would recognise the NHS and social insurance as the practical answer to Birling\u2019s objection.',
    themes: ['Social Responsibility', 'Capitalism vs Socialism'],
    examTip: 'Analyse the word "awkward" closely. It is a massive understatement that reveals moral emptiness. Birling cannot engage with ethics, only with inconvenience.',
  },
  {
    id: 25,
    quote: '"I was in that state when a chap easily turns nasty."',
    speaker: 'Eric Birling',
    act: 'Act 3',
    context: 'Eric describes his assault on Eva, euphemistically referring to his drunkenness.',
    ao2Analysis:
      '"That state" avoids naming drunkenness directly. "Turns nasty" sanitises violence through casual, almost apologetic phrasing. "Easily" normalises the behaviour. Priestley forces the audience to read through Eric\u2019s evasive language to understand the full horror.',
    ao3Context:
      'Male violence against working-class women was rarely prosecuted in 1912. Eric\u2019s class and gender gave him impunity. Priestley exposes this systemic failure by making the audience confront the reality behind the euphemism.',
    themes: ['Gender', 'Power & Abuse of Power'],
    examTip: 'This quote is essential for essays on gender or power. Analyse the euphemism: what Eric calls "turning nasty" is sexual assault. Priestley uses Eric\u2019s language to show how violence is normalised.',
  },
  {
    id: 26,
    quote: '"she didn\u2019t want me to marry her \u2026 she treated me \u2014 as if I were a kid."',
    speaker: 'Eric Birling',
    act: 'Act 3',
    context: 'Eric reveals that Eva refused his offer of marriage and saw his immaturity.',
    ao2Analysis:
      'Eva\u2019s refusal to marry Eric shows she had more moral integrity than her attacker. "As if I were a kid" reveals Eric\u2019s immaturity and Eva\u2019s clear-sightedness. Priestley gives Eva, even in her absence, more moral stature than the Birlings.',
    ao3Context:
      'In 1912, marriage to the father would have been the "expected" solution for a pregnant unmarried woman. Eva\u2019s refusal shows a modern independence that challenges Edwardian conventions.',
    themes: ['Gender', 'Age & Generational Change'],
    examTip: 'Use this to argue that Eva has more moral insight than any of the Birlings. She sees Eric clearly while his own family cannot.',
  },
  {
    id: 27,
    quote: '"I don\u2019t see much nonsense about it when a girl goes and kills herself."',
    speaker: 'Eric Birling',
    act: 'Act 3',
    context: 'Eric challenges his father\u2019s attempt to dismiss the Inspector\u2019s visit as nonsense.',
    ao2Analysis:
      'The blunt reference to suicide forces the family to confront the human cost. "Goes and kills herself" is deliberately stark, cutting through Birling\u2019s euphemisms. Eric\u2019s plain language serves as moral clarity against his father\u2019s evasion.',
    ao3Context:
      'Suicide carried severe social stigma in the early twentieth century and was illegal until 1961. Eric\u2019s willingness to name it directly is itself an act of moral courage within the Birling household.',
    themes: ['Guilt & Morality', 'Age & Generational Change'],
    examTip: 'Contrast Eric\u2019s direct language here with Birling\u2019s euphemistic dismissals. The difference in register mirrors the difference in moral engagement.',
  },
  {
    id: 28,
    quote: '"No, because I remember what he said, how he looked, and what he made me feel."',
    speaker: 'Sheila Birling',
    act: 'Act 3',
    context: 'Sheila explains why she cannot dismiss the Inspector as a hoax.',
    ao2Analysis:
      'The tricolon \u2014 "said," "looked," "feel" \u2014 moves from intellectual to visual to emotional, showing the Inspector\u2019s impact operated on every level. "Made me feel" acknowledges that genuine moral change is irreversible. Priestley argues that truth experienced cannot be un-experienced.',
    ao3Context:
      'Priestley believed that theatre could change people\u2019s moral perceptions. Sheila\u2019s description of the Inspector\u2019s impact mirrors what Priestley hoped the play itself would do to its audience.',
    themes: ['Guilt & Morality', 'Age & Generational Change'],
    examTip: 'This is excellent for discussing Priestley\u2019s dramatic methods. Sheila describes the Inspector\u2019s effect in terms that mirror the audience\u2019s own experience of watching the play.',
  },
  {
    id: 29,
    quote: '"Everything\u2019s all right now, Sheila. What about this ring?"',
    speaker: 'Gerald Croft',
    act: 'Act 3',
    context: 'Gerald tries to restore the engagement after the Inspector is discredited.',
    ao2Analysis:
      '"Everything\u2019s all right now" dismisses the entire evening\u2019s moral reckoning. The ring becomes a symbol of Gerald\u2019s desire to return to comfortable ignorance. Priestley shows that Gerald has learned nothing \u2014 he wants to resume the status quo.',
    ao3Context:
      'The engagement ring represents the Birling-Croft business alliance as much as a personal relationship. Gerald\u2019s desire to restore it reflects the capitalist class\u2019s instinct to protect its interests after a crisis.',
    themes: ['Age & Generational Change', 'Capitalism vs Socialism'],
    examTip: 'Use the ring as a symbol. In Act 1 it represents the merger of two capitalist families; in Act 3 Sheila\u2019s refusal to take it back represents her rejection of those values.',
  },
  {
    id: 30,
    quote: '"It\u2019s a free country, I told them."',
    speaker: 'Arthur Birling',
    act: 'Act 1',
    context: 'Birling justifies refusing Eva\u2019s request for higher wages.',
    ao2Analysis:
      'Birling invokes "freedom" to justify exploitation. "Free country" means free for employers, not employees. Priestley exposes how the language of liberty can be weaponised to defend inequality and suppress workers\u2019 rights.',
    ao3Context:
      'The debate between economic "freedom" (free markets, minimal regulation) and social freedom (workers\u2019 rights, welfare) was central to British politics in both 1912 and 1945. Priestley firmly sides with social freedom.',
    themes: ['Capitalism vs Socialism', 'Power & Abuse of Power'],
    examTip: 'Analyse the irony of "free country." Freedom for Birling means freedom to exploit. For Eva, it means freedom to starve. This contrast is a powerful way to discuss Priestley\u2019s critique of capitalism.',
  },
]

const ACTS = ['Act 1', 'Act 2', 'Act 3'] as const
const THEME_LIST = [
  'Social Responsibility',
  'Class & Inequality',
  'Gender',
  'Age & Generational Change',
  'Power & Abuse of Power',
  'Guilt & Morality',
  'Capitalism vs Socialism',
] as const

/* ────────────────────────────────────────────────────────────────────── */
/*  Page                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

import { useState } from 'react'

export default function KeyQuotesPage() {
  const [filterAct, setFilterAct] = useState<string | null>(null)
  const [filterTheme, setFilterTheme] = useState<string | null>(null)

  const filtered = QUOTES.filter((q) => {
    if (filterAct && q.act !== filterAct) return false
    if (filterTheme && !q.themes.includes(filterTheme)) return false
    return true
  })

  return (
    <div className="min-h-screen bg-cream-50 font-serif">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Study Tools */}
        <StudyTools textName="An Inspector Calls" textType="play" />

        {/* Hero */}
        <section className="mt-8 rounded-2xl border border-teal-400/20 bg-gradient-to-br from-cream-100 via-cream-50 to-teal-300/[0.06] p-6 sm:p-8 lg:p-10">
          <a
            href="/revision/texts/an-inspector-calls"
            className="mb-4 inline-flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft className="size-3.5" />
            Back to An Inspector Calls
          </a>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
              <Quote className="size-3" />
              Key Quotes Bank
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-clay-300/30 px-3 py-1 text-xs text-clay-600">
              <Sparkles className="size-3" />
              AQA / Edexcel / OCR / Eduqas
            </span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            An Inspector Calls &mdash; Key Quotes
          </h1>
          <p className="mt-2 text-lg text-ink-500">
            by J.B. Priestley &mdash; 1945
          </p>
          <p className="mt-4 max-w-2xl text-ink-500">
            30 essential quotations with full AO2 language analysis, AO3 context
            links, and exam technique tips. Filter by act or theme to find the
            quotes you need.
          </p>
        </section>

        {/* Exam tip banner */}
        <section className="mt-8 rounded-xl border border-clay-300/20 bg-clay-200/10 p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-clay-500" />
            <div className="text-sm text-ink-600">
              <p className="mb-1 font-bold text-ink-800">Exam technique</p>
              <p>
                You do not need to memorise every quote. Choose{' '}
                <strong>3&ndash;4 versatile quotes per character</strong> that you
                can use across multiple themes and question types. For each, learn
                the quote, the speaker, the act, and one strong AO2 analytical
                point.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="size-4 text-teal-600" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-ink-500">
              Filter Quotes
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => { setFilterAct(null); setFilterTheme(null) }}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                !filterAct && !filterTheme
                  ? 'bg-teal-600 text-white'
                  : 'bg-cream-100 text-ink-500 hover:bg-cream-200'
              }`}
            >
              All ({QUOTES.length})
            </button>
            {ACTS.map((act) => (
              <button
                key={act}
                onClick={() => { setFilterAct(filterAct === act ? null : act); setFilterTheme(null) }}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  filterAct === act
                    ? 'bg-teal-600 text-white'
                    : 'bg-cream-100 text-ink-500 hover:bg-cream-200'
                }`}
              >
                {act} ({QUOTES.filter((q) => q.act === act).length})
              </button>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {THEME_LIST.map((theme) => (
              <button
                key={theme}
                onClick={() => { setFilterTheme(filterTheme === theme ? null : theme); setFilterAct(null) }}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  filterTheme === theme
                    ? 'bg-clay-500 text-white'
                    : 'bg-cream-100 text-ink-500 hover:bg-cream-200'
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </section>

        {/* Quotes */}
        <div className="mt-8 space-y-4">
          {filtered.map((q) => (
            <section
              key={q.id}
              className="rounded-xl border border-teal-400/15 bg-cream-100/50 p-5"
            >
              {/* Quote */}
              <p className="text-lg font-medium italic text-ink-800">
                {q.quote}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                  {q.speaker}
                </span>
                <span className="text-xs text-ink-300">&bull;</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-clay-500">
                  {q.act}
                </span>
              </div>

              {/* Context */}
              <div className="mt-3">
                <p className="text-xs font-bold uppercase tracking-wider text-ink-400">
                  Context
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">
                  {q.context}
                </p>
              </div>

              {/* AO2 */}
              <div className="mt-3">
                <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
                  AO2 &mdash; Language Analysis
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">
                  {q.ao2Analysis}
                </p>
              </div>

              {/* AO3 */}
              <div className="mt-3">
                <p className="text-xs font-bold uppercase tracking-wider text-clay-500">
                  AO3 &mdash; Context Link
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-600">
                  {q.ao3Context}
                </p>
              </div>

              {/* Themes */}
              <div className="mt-3 flex flex-wrap gap-1">
                {q.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-teal-500/8 px-2.5 py-0.5 text-xs font-medium text-teal-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Exam tip */}
              <div className="mt-3 rounded-lg bg-clay-200/10 p-3">
                <div className="flex items-start gap-2">
                  <Lightbulb className="mt-0.5 size-3.5 shrink-0 text-clay-500" />
                  <p className="text-xs leading-relaxed text-ink-500">
                    <span className="font-bold text-clay-600">Exam tip: </span>
                    {q.examTip}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-8 rounded-xl border border-ink-100 bg-cream-100/60 p-8 text-center">
            <p className="text-sm text-ink-400">
              No quotes match your current filters. Try a different combination.
            </p>
          </div>
        )}

        {/* Navigation */}
        <section className="mt-14 rounded-xl border border-teal-400/20 bg-teal-500/5 p-6">
          <h3 className="font-serif text-xl font-bold text-ink-900">
            Continue studying
          </h3>
          <p className="mt-1 text-sm text-ink-500">
            Explore characters, themes, and context for An Inspector Calls.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="/revision/texts/an-inspector-calls/characters"
              className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
            >
              Characters
            </a>
            <a
              href="/revision/texts/an-inspector-calls/themes"
              className="inline-flex items-center rounded-lg border border-teal-400/30 bg-cream-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5"
            >
              Themes
            </a>
            <a
              href="/revision/texts/an-inspector-calls/context"
              className="inline-flex items-center rounded-lg border border-teal-400/30 bg-cream-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5"
            >
              Context
            </a>
          </div>
        </section>

        {/* Fair-dealing notice */}
        <p className="mt-10 border-t border-ink-100 pt-4 text-xs text-ink-400">
          Short quotations (&le;15 words each) reproduced under the fair dealing
          provision of the Copyright, Designs and Patents Act 1988 for the purpose
          of criticism, review and educational study.{' '}
          <em>An Inspector Calls</em> &copy; J.B. Priestley Estate. Full text
          available from your school or local library.
        </p>
      </div>
    </div>
  )
}
