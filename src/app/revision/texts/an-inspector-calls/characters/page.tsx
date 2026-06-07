'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Lightbulb,
  Quote,
  Sparkles,
  Users,
  Shield,
  Crown,
  Heart,
  AlertTriangle,
  Gem,
  Ghost,
  UserX,
} from 'lucide-react'

import StudyTools from '@/components/study/StudyTools'
import { useT } from '@/lib/i18n/use-t'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
/* ────────────────────────────────────────────────────────────────────── */
/*  Data                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

type CharacterQuote = {
  quote: string
  act: string
  analysis: string
}

type CharacterStudy = {
  name: string
  role: string
  colour: string
  overview: string
  arc: string
  keyQuotes: CharacterQuote[]
  themeLinks: string[]
  examTip: string
}

const CHARACTERS: CharacterStudy[] = [
  {
    name: 'Inspector Goole',
    role: 'The mysterious investigating inspector',
    colour: 'teal',
    overview:
      'The Inspector is Priestley\u2019s most powerful dramatic device: a figure of absolute moral authority who arrives uninvited, controls the pace of the evening, and forces every character to confront their responsibility for Eva Smith\u2019s death. His name puns on "ghoul," suggesting a supernatural or spectral presence, and his origins are never explained. He does not behave like a real police inspector \u2014 he already seems to know the answers to the questions he asks, he shows the photograph to only one person at a time, and he delivers a final speech that sounds more like a sermon than a police report. Priestley uses the Inspector as a socialist mouthpiece: he voices the argument that society must take collective responsibility for its weakest members, and his prophetic warning of "fire and blood and anguish" carries the moral weight of two world wars the audience already knows about.',
    arc: 'The Inspector does not change \u2014 he arrives with moral certainty and leaves with it. His function is to change others. He systematically dismantles the Birlings\u2019 self-image, moving from Arthur\u2019s economic exploitation to Sheila\u2019s petty jealousy, Gerald\u2019s sexual exploitation, Sybil\u2019s class prejudice, and Eric\u2019s violence. After his departure, the question of whether he was "real" becomes central \u2014 but Priestley\u2019s point is that his identity matters far less than his message.',
    keyQuotes: [
      {
        quote: '"We are members of one body. We are responsible for each other."',
        act: 'Act 3',
        analysis:
          'The play\u2019s thesis statement. The biblical echo of "one body" (from St Paul\u2019s letters) lends the socialist message moral authority that transcends politics. The simple present tense \u2014 "we are," not "we should be" \u2014 presents collective responsibility as a permanent, inescapable fact.',
      },
      {
        quote: '"Fire and blood and anguish."',
        act: 'Act 3',
        analysis:
          'A prophetic tricolon that the audience knows was fulfilled by two world wars. Each noun escalates from destruction to suffering to psychological torment. The warning gives the Inspector an almost supernatural authority, as though he exists outside time.',
      },
      {
        quote: '"Public men, Mr Birling, have responsibilities as well as privileges."',
        act: 'Act 1',
        analysis:
          'The Inspector directly challenges the capitalist assumption that wealth entitles its holders to immunity from scrutiny. The balanced phrasing frames social duty as non-negotiable, immediately inverting the power dynamic between the Inspector and Birling.',
      },
      {
        quote:
          '"One Eva Smith has gone \u2014 but there are millions and millions and millions of Eva Smiths and John Smiths still left with us."',
        act: 'Act 3',
        analysis:
          'The Inspector universalises Eva\u2019s suffering, turning a single case into a political argument about systemic injustice. The tripled "millions" insists on scale; the addition of "John Smiths" makes the argument gender-inclusive; "still left with us" insists that the problem is present, not past.',
      },
      {
        quote: '"We don\u2019t live alone. We are members of one body."',
        act: 'Act 3',
        analysis:
          'The negative construction "don\u2019t live alone" directly contradicts Birling\u2019s Act 1 philosophy of self-reliance. Priestley bookends the play with opposing worldviews: Birling\u2019s individualism at the start, the Inspector\u2019s collectivism at the end.',
      },
    ],
    themeLinks: [
      'Social Responsibility \u2014 the Inspector is the voice of collective duty',
      'Power \u2014 he temporarily inverts the class hierarchy, subjecting the powerful to moral scrutiny',
      'Capitalism vs Socialism \u2014 he embodies Priestley\u2019s democratic socialist argument',
    ],
    examTip:
      'Discuss the Inspector\u2019s dramatic function rather than treating him as a realistic character. He is a device Priestley uses to deliver his political message. Always link his speeches to the 1945 context and the welfare state being built when the play was written.',
  },
  {
    name: 'Arthur Birling',
    role: 'Prosperous factory owner and family patriarch',
    colour: 'clay',
    overview:
      'Arthur Birling is a self-made businessman obsessed with profit, social status, and his upcoming knighthood. He represents the capitalist ruling class that Priestley wrote the play to attack. His after-dinner speeches in Act 1 are loaded with dramatic irony: he predicts the Titanic is "unsinkable," dismisses the threat of war, and insists that "a man has to look after himself and his own." The 1945 audience knows every one of these predictions is catastrophically wrong, and Priestley uses this to discredit not just Birling the man but the entire philosophy he represents. Birling is stubbornly incapable of learning: even after the Inspector\u2019s departure, his only concern is avoiding a public scandal. He never accepts genuine moral responsibility.',
    arc: 'Birling begins the play in a position of absolute confidence and authority. The Inspector\u2019s investigation progressively undermines his self-assurance, but unlike Sheila and Eric, Birling does not change. By Act 3, he is desperately trying to prove the Inspector was a hoax, clinging to the hope that no real consequences will follow. He represents the older generation\u2019s refusal to learn from history.',
    keyQuotes: [
      {
        quote: '"The Titanic \u2014 unsinkable, absolutely unsinkable."',
        act: 'Act 1',
        analysis:
          'Dramatic irony at its sharpest. The audience knows the Titanic sank in April 1912. Birling\u2019s absolute certainty immediately marks him as a man whose judgment cannot be trusted, inviting the audience to reject everything else he says \u2014 including his capitalist philosophy.',
      },
      {
        quote: '"a man has to look after himself and his own"',
        act: 'Act 1',
        analysis:
          'Birling articulates the capitalist individualism that Priestley wrote the play to dismantle. "His own" draws a boundary around family and class, leaving people like Eva outside the circle of moral obligation. It is the direct opposite of the Inspector\u2019s final speech.',
      },
      {
        quote:
          '"If we were all responsible for everything that happened to everybody \u2026 it would be very awkward."',
        act: 'Act 3',
        analysis:
          'Birling reduces a moral question to a practical inconvenience. The word "awkward" reveals the hollowness of his position \u2014 he cannot engage with the ethics of responsibility, only with its personal cost. Priestley uses understatement to expose moral emptiness.',
      },
      {
        quote:
          '"The way some of these cranks talk and write now, you\u2019d think everybody has to look after everybody else."',
        act: 'Act 1',
        analysis:
          'Birling dismisses socialists as "cranks" before the Inspector arrives, setting up the dramatic reversal that follows. The word "cranks" reveals his contempt for collective responsibility, making the Inspector\u2019s arrival an immediate challenge to his worldview.',
      },
      {
        quote: '"the famous younger generation who know it all"',
        act: 'Act 3',
        analysis:
          'Birling dismisses Sheila and Eric\u2019s moral growth as youthful arrogance. The sarcasm reveals his defensive refusal to learn. Priestley positions the audience to side with the "younger generation" against Birling\u2019s complacent condescension.',
      },
    ],
    themeLinks: [
      'Capitalism vs Socialism \u2014 Birling is the play\u2019s embodiment of capitalist self-interest',
      'Social Responsibility \u2014 he rejects it completely and is punished for doing so',
      'Age & Generational Change \u2014 he represents the old order that refuses to change',
    ],
    examTip:
      'Always connect Birling\u2019s dramatic irony to Priestley\u2019s political argument. His wrong predictions about the Titanic and war are not just comic \u2014 they discredit the capitalist worldview he represents. Birling is wrong about facts, so Priestley invites us to conclude he is wrong about values too.',
  },
  {
    name: 'Sybil Birling',
    role: 'Arthur\u2019s wife and charity committee chair',
    colour: 'clay',
    overview:
      'Sybil Birling is the most class-conscious character in the play and the most resistant to the Inspector\u2019s message. Cold, snobbish, and rigidly hierarchical, she uses her position as chair of the Brumley Women\u2019s Charity Organisation to enforce class prejudice rather than provide genuine aid. When Eva \u2014 pregnant and desperate \u2014 appealed to the committee, Sybil rejected her application because Eva had used the name "Mrs Birling," which Sybil found presumptuous. Her refusal was motivated by class snobbery and personal pique, not by any assessment of need. Priestley uses Sybil to show how charitable institutions can be instruments of class prejudice rather than genuine compassion.',
    arc: 'Sybil is the character who changes least. She enters the play confident in her social superiority and leaves it the same way. Even the revelation that her own son is the father of Eva\u2019s child does not produce genuine moral reflection \u2014 only embarrassment and deflection. Priestley presents her as the most hardened product of the class system: someone so insulated by privilege that moral awakening is impossible.',
    keyQuotes: [
      {
        quote: '"I was quite justified."',
        act: 'Act 2',
        analysis:
          'Sybil\u2019s stubborn self-righteousness compressed into four words. She refuses to accept guilt even when confronted with the consequences of her actions. "Justified" reveals a person whose moral framework is built entirely on class position rather than human empathy.',
      },
      {
        quote: '"Girls of that class\u2014"',
        act: 'Act 2',
        analysis:
          'The interrupted phrase is more revealing than a completed sentence. Sybil categorises Eva by class before she has finished speaking, showing that prejudice is reflexive and instinctive, not reasoned. The dash suggests the Inspector cuts her off, refusing to let her complete the dehumanising thought.',
      },
      {
        quote: '"he ought to be dealt with very severely"',
        act: 'Act 2',
        analysis:
          'Sybil unknowingly condemns her own son. Priestley constructs the scene so that her desire for punishment rebounds on her family, punishing her moral hypocrisy through dramatic irony. The phrase "dealt with very severely" reveals her punitive instinct toward the working class.',
      },
      {
        quote: '"the father of the child \u2026 is entirely responsible"',
        act: 'Act 2',
        analysis:
          'Sybil deflects blame from herself onto the unknown father, not knowing it is Eric. Her insistence makes her the architect of her own exposure. "Entirely" is an absolute that she will desperately wish to retract once the truth emerges.',
      },
    ],
    themeLinks: [
      'Class & Inequality \u2014 Sybil embodies rigid class prejudice disguised as respectability',
      'Gender \u2014 she fails in solidarity with Eva, showing how class can override gender loyalty',
      'Guilt & Morality \u2014 she is the character who most completely refuses to accept guilt',
    ],
    examTip:
      'Focus on Sybil\u2019s language of class. Phrases like "Girls of that class" reveal that her prejudice operates through instinctive categorisation. Her charity work is not compassionate but controlling \u2014 a way of maintaining class boundaries while appearing virtuous.',
  },
  {
    name: 'Sheila Birling',
    role: 'The Birlings\u2019 daughter, engaged to Gerald',
    colour: 'teal',
    overview:
      'Sheila undergoes the most complete moral transformation in the play, moving from a sheltered, materialistic young woman to the play\u2019s moral conscience. At the start she is excited about her engagement ring and oblivious to the consequences of her own actions \u2014 it was her jealous complaint to the manager at Milwards that got Eva sacked. But the moment the Inspector reveals her involvement, Sheila accepts guilt immediately and without evasion. From that point, she becomes the Inspector\u2019s ally, seeing through Gerald\u2019s deception, challenging her parents\u2019 refusal to change, and insisting that the moral lesson matters regardless of whether the Inspector was "real." Priestley uses Sheila to represent the younger generation he believed could build a fairer post-war society.',
    arc: 'Act 1: Sheila is naive, playful, and excited about her engagement. She is genuinely horrified to learn she played a part in Eva\u2019s story. Act 2: She returns the engagement ring to Gerald, demonstrating that moral awakening has real personal consequences. She begins to function as the Inspector\u2019s ally, predicting what the family will try to hide. Act 3: After the Inspector leaves, Sheila holds the lesson alive against her parents\u2019 attempts to forget it. She becomes the audience\u2019s representative on stage, insisting that truth matters more than comfort.',
    keyQuotes: [
      {
        quote: '"But these girls aren\u2019t cheap labour \u2014 they\u2019re people."',
        act: 'Act 1',
        analysis:
          'Sheila rejects her father\u2019s dehumanising economic language and insists on Eva\u2019s humanity. The simple opposition between "cheap labour" and "people" captures the play\u2019s core argument in a single sentence. The dash marks the moment of moral awakening.',
      },
      {
        quote: '"I\u2019ll never, never do it again to anybody."',
        act: 'Act 1',
        analysis:
          'The repetition of "never" conveys genuine, unconditional remorse. Sheila is the first character to accept guilt fully, and her response is immediate. Priestley models the moral change he wants from his audience: swift, sincere, and absolute.',
      },
      {
        quote: '"You began to learn something. And now you\u2019ve stopped."',
        act: 'Act 3',
        analysis:
          'Sheila accuses Gerald and her parents of moral regression. The short, accusing sentences convey frustrated disappointment and position her as the play\u2019s moral centre. "Stopped" implies a deliberate choice to retreat from uncomfortable truth.',
      },
      {
        quote: '"It\u2019s what happened to the girl and what we all did to her that matters."',
        act: 'Act 3',
        analysis:
          'Sheila cuts through her parents\u2019 evasion with devastating clarity. "We all" insists on collective guilt. "Matters" is a simple, emphatic word that refuses to let the family reduce Eva\u2019s death to a question of the Inspector\u2019s identity.',
      },
      {
        quote: '"No, because I remember what he said, how he looked, and what he made me feel."',
        act: 'Act 3',
        analysis:
          'Sheila explains why she cannot return to ignorance. The tricolon \u2014 "said," "looked," "feel" \u2014 moves from intellectual to emotional, showing that the Inspector\u2019s impact was not just rational but deeply felt. Priestley argues that genuine moral change is irreversible.',
      },
    ],
    themeLinks: [
      'Social Responsibility \u2014 Sheila is the first to accept it and the last to abandon it',
      'Age & Generational Change \u2014 she represents the young generation Priestley believed in',
      'Gender \u2014 her transformation involves rejecting male authority (Gerald, her father)',
    ],
    examTip:
      'Track Sheila\u2019s language across the three acts. In Act 1 she speaks in short, emotional exclamations; by Act 3 she uses the Inspector\u2019s own measured, analytical register. This linguistic shift mirrors her moral growth and is strong AO2 evidence.',
  },
  {
    name: 'Eric Birling',
    role: 'The Birlings\u2019 son',
    colour: 'teal',
    overview:
      'Eric is the most troubled member of the Birling family. His heavy drinking \u2014 hinted at throughout Act 1 through stage directions noting his "squiffy" behaviour \u2014 signals deeper dysfunction beneath the family\u2019s polished exterior. Eric forced himself on Eva when drunk, got her pregnant, and then stole money from his father\u2019s firm to support her. His confession in Act 3 is the most violent in the play, and Priestley does not soften it. Yet Eric, like Sheila, accepts genuine responsibility. He is anguished, ashamed, and furious with his parents for trying to cover things up. His accusation that Birling is "not the kind of father a chap could go to" exposes the emotional bankruptcy at the heart of the family.',
    arc: 'Eric is largely absent or marginal in Acts 1 and 2, which builds suspense. His return in Act 3 brings the most dramatic revelations. Like Sheila, he undergoes genuine moral change: he accepts guilt, condemns his parents\u2019 evasion, and insists the lesson matters. But his change is more painful \u2014 he must confront not just his complicity but his violence.',
    keyQuotes: [
      {
        quote: '"You\u2019re not the kind of father a chap could go to."',
        act: 'Act 3',
        analysis:
          'Eric\u2019s accusation exposes the emotional bankruptcy beneath Birling\u2019s patriarchal authority. The phrase reveals that the family\u2019s dysfunction was not caused by the Inspector but was always present, concealed by social convention and wealth.',
      },
      {
        quote: '"I was in that state when a chap easily turns nasty."',
        act: 'Act 3',
        analysis:
          'Eric\u2019s euphemism for his assault on Eva. "That state" avoids naming his drunkenness directly, while "turns nasty" sanitises violence. Priestley forces the audience to read through Eric\u2019s evasive language to understand the full horror of what he did.',
      },
      {
        quote:
          '"she didn\u2019t want me to marry her \u2026 she treated me \u2014 as if I were a kid."',
        act: 'Act 3',
        analysis:
          'Eric reveals that Eva had more emotional maturity than he did. The phrase "as if I were a kid" shows his immaturity and his dependence. Priestley gives Eva, even in her absence, more moral stature than the privileged young man who wronged her.',
      },
      {
        quote: '"I don\u2019t see much nonsense about it when a girl goes and kills herself."',
        act: 'Act 3',
        analysis:
          'Eric challenges his father\u2019s attempt to dismiss the evening as "nonsense." The blunt reference to suicide forces the family to confront the human cost. Eric\u2019s plain language cuts through his father\u2019s euphemisms.',
      },
    ],
    themeLinks: [
      'Age & Generational Change \u2014 like Sheila, Eric accepts responsibility and challenges his parents',
      'Power & Abuse of Power \u2014 his assault on Eva is the most violent abuse in the play',
      'Guilt & Morality \u2014 his guilt is genuine but complicated by his own victimhood within the family',
    ],
    examTip:
      'Do not excuse Eric\u2019s behaviour because he eventually shows remorse. Priestley presents his assault on Eva as a consequence of the entitled, unaccountable upbringing the Birling household provided. His guilt is real, but so is his crime.',
  },
  {
    name: 'Gerald Croft',
    role: 'Sheila\u2019s fianc\u00e9, son of Sir George Croft',
    colour: 'clay',
    overview:
      'Gerald occupies a complex middle ground in the play. His affair with Daisy Renton (Eva\u2019s assumed name) contained what appears to be genuine feeling \u2014 he rescued her from the predatory Alderman Meggarty and gave her accommodation, money, and affection. But the relationship was always shaped by a vast power imbalance: Gerald was a wealthy industrialist\u2019s son, Daisy was a desperate, penniless woman. He made her his "kept woman" and then ended the relationship when it suited him, leaving her worse off than before. After the Inspector leaves, Gerald leads the effort to discredit the investigation, aligning himself with the older generation rather than with Sheila and Eric. His dual nature \u2014 capable of kindness but ultimately self-serving \u2014 makes him one of Priestley\u2019s most nuanced creations.',
    arc: 'Gerald begins as the charming, socially superior fianc\u00e9. His confession in Act 2 temporarily humanises him \u2014 he is the only character who seems to have genuinely cared for Eva. But his post-Inspector behaviour reveals his true allegiance: he wants to bury the truth, not learn from it. He offers Sheila the ring back as though nothing has changed, showing that he has not undergone the transformation that Sheila demands.',
    keyQuotes: [
      {
        quote: '"I didn\u2019t feel about her as she felt about me."',
        act: 'Act 2',
        analysis:
          'Gerald\u2019s admission reveals the power asymmetry at the heart of the relationship. He had the freedom to leave; she did not. The imbalance of feeling reflects the imbalance of class: his wealth gave him emotional options that her poverty denied her.',
      },
      {
        quote: '"She was young and pretty and warm-hearted \u2014 and intensely grateful."',
        act: 'Act 2',
        analysis:
          'Gerald lists Daisy\u2019s qualities as though she were a pleasant acquisition. "Intensely grateful" is the most revealing phrase: he valued her gratitude \u2014 her dependence \u2014 rather than seeing her as an equal. The listing reduces her to a set of attractive attributes.',
      },
      {
        quote: '"Everything\u2019s all right now, Sheila. What about this ring?"',
        act: 'Act 3',
        analysis:
          'Gerald tries to restore the status quo after the Inspector\u2019s departure. "Everything\u2019s all right now" dismisses the entire evening\u2019s moral reckoning. The ring becomes a symbol of his desire to return to comfortable ignorance \u2014 precisely what Sheila now refuses to do.',
      },
      {
        quote: '"I think it was simply a piece of bluff."',
        act: 'Act 3',
        analysis:
          'Gerald leads the campaign to discredit the Inspector, reducing the moral interrogation to a "bluff." This aligns him with Arthur and Sybil and separates him from the younger generation. Priestley uses Gerald to show that charm and class are no substitutes for genuine moral growth.',
      },
    ],
    themeLinks: [
      'Gender \u2014 Gerald\u2019s "rescue" of Daisy reproduces patriarchal power under the guise of kindness',
      'Class & Inequality \u2014 his relationship with Daisy is shaped entirely by their class difference',
      'Power \u2014 he exercises power through charm and social position rather than through open authority',
    ],
    examTip:
      'Gerald is the character who most divides examiners. Some candidates call him sympathetic; others condemn him. The strongest approach is to acknowledge his genuine feeling for Daisy while showing that his class position made the relationship inherently exploitative. Discuss the gap between his intentions and his impact.',
  },
  {
    name: 'Eva Smith / Daisy Renton',
    role: 'The unseen working-class victim',
    colour: 'teal',
    overview:
      'Eva never appears on stage, but she is the moral centre of the play. She is sacked from Birling\u2019s factory for leading a strike, dismissed from Milwards because of Sheila\u2019s jealousy, kept as Gerald\u2019s mistress, assaulted by Eric, refused help by Sybil\u2019s charity, and driven to suicide. Her multiple names \u2014 Eva Smith, Daisy Renton, "Mrs Birling" \u2014 suggest she may be several women or an everywoman figure representing all working-class victims of the class system. Priestley deliberately keeps her off stage to mirror the way the class system renders the poor invisible. She is talked about, judged, and categorised by every character, but never speaks for herself. This structural choice is itself a political argument: the voiceless are at the mercy of those who hold power.',
    arc: 'Eva\u2019s story is told in reverse through the confessions of others. Each revelation adds a new layer of exploitation. She moves from independent worker (sacked by Birling) to shop assistant (dismissed by Sheila) to kept woman (abandoned by Gerald) to assault victim (Eric) to charity applicant (rejected by Sybil) to suicide. The downward trajectory is relentless, and Priestley ensures that every step was caused by a Birling or a Croft.',
    keyQuotes: [
      {
        quote:
          '"One Eva Smith has gone \u2014 but there are millions and millions and millions of Eva Smiths and John Smiths still left with us."',
        act: 'Act 3 (Inspector)',
        analysis:
          'The Inspector universalises Eva\u2019s suffering. She is not a unique case but a representative of systemic injustice. The tripled "millions" turns a personal tragedy into a political argument about the scale of class exploitation.',
      },
      {
        quote: '"she\u2019d had a lot to say \u2014 far too much \u2014 so she had to go."',
        act: 'Act 1 (Birling)',
        analysis:
          'Birling\u2019s description of Eva\u2019s dismissal reveals that her "crime" was speaking up. "Far too much" measures speech by class entitlement: a working-class woman who demands fair wages is automatically saying too much. Priestley shows how power silences dissent.',
      },
      {
        quote:
          '"She was claiming elaborate fine feelings and scruples that were simply absurd in a girl in her position."',
        act: 'Act 2 (Sybil)',
        analysis:
          'Sybil denies Eva the capacity for moral feeling based solely on her class. "In her position" reveals that Sybil\u2019s moral framework reserves virtues like scruple and feeling for the upper classes. Priestley exposes this as the ugliest form of class prejudice.',
      },
      {
        quote: '"She was very pretty \u2014 soft brown hair and big dark eyes."',
        act: 'Act 2 (Gerald)',
        analysis:
          'Gerald describes Eva\u2019s appearance in objectifying detail. The focus on physical attractiveness reduces Eva to her looks, foreshadowing the way every male character in the play treats her as an object to be used rather than a person to be respected.',
      },
    ],
    themeLinks: [
      'Social Responsibility \u2014 Eva\u2019s death is the consequence of collective irresponsibility',
      'Class & Inequality \u2014 she is exploited at every level of the class system',
      'Gender \u2014 she suffers the double oppression of being both working-class and female',
    ],
    examTip:
      'Refer to Eva as "Eva Smith/Daisy Renton" to show awareness of the ambiguity around her identity. Discuss whether she is one woman or several \u2014 and argue that Priestley\u2019s point is that it does not matter, because "millions of Eva Smiths" exist. Her absence from the stage is itself a dramatic technique worth analysing.',
  },
]

/* ────────────────────────────────────────────────────────────────────── */
/*  Page                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

export default function CharactersPage() {
  const t = useT()
  return (
    <div className="min-h-screen bg-background font-heading">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          {
            name: 'An Inspector Calls',
            url: 'https://theenglishhub.app/revision/texts/an-inspector-calls',
          },
          {
            name: 'Characters',
            url: 'https://theenglishhub.app/revision/texts/an-inspector-calls/characters',
          },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Study Tools */}
        <StudyTools textName="An Inspector Calls" textType="play" />

        {/* Hero */}
        <section className="mt-8 rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.06] p-6 sm:p-8 lg:p-10">
          <Link
            href="/revision/texts/an-inspector-calls"
            className="mb-4 inline-flex items-center gap-1 text-sm text-teal-600 hover:text-teal-700 dark:text-teal-300 dark:hover:text-teal-200"
          >
            <ArrowLeft className="size-3.5" />
            {t('rev.texts.aic.back')}
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300">
              <Users className="size-3" />
              {t('rev.texts.common.character_guide')}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-clay-500/30 px-3 py-1 text-xs text-clay-700 dark:text-clay-300">
              <Sparkles className="size-3" />
              AQA / Edexcel / OCR / Eduqas
            </span>
          </div>

          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('rev.texts.aic.characters.title')}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{t('rev.texts.aic.byline')}</p>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            {t('rev.texts.aic.characters.intro')}
          </p>
        </section>

        {/* Exam tip banner */}
        <section className="mt-8 rounded-xl border border-clay-500/20 bg-clay-500/10 p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-clay-600 dark:text-clay-300" />
            <div className="text-sm text-muted-foreground">
              <p className="mb-1 font-bold text-foreground">
                {t('rev.texts.common.exam_technique')}
              </p>
              <p>{t('rev.texts.aic.characters.exam_technique_body')}</p>
            </div>
          </div>
        </section>

        {/* Characters */}
        {CHARACTERS.map((char, idx) => {
          const accentBg = char.colour === 'teal' ? 'bg-teal-500/10' : 'bg-clay-500/10'
          const accentText =
            char.colour === 'teal'
              ? 'text-teal-700 dark:text-teal-300'
              : 'text-clay-600 dark:text-clay-300'
          const accentBorder = char.colour === 'teal' ? 'border-teal-500/20' : 'border-clay-500/20'
          const quoteBg = char.colour === 'teal' ? 'bg-teal-500/5' : 'bg-clay-500/10'

          return (
            <section key={char.name} className="mt-12">
              {/* Character heading */}
              <div className="flex items-start gap-3 mb-2">
                <div className={`flex size-10 items-center justify-center rounded-xl ${accentBg}`}>
                  <Users className={`size-5 ${accentText}`} />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">{char.name}</h2>
                  <p className="text-sm italic text-muted-foreground">{char.role}</p>
                </div>
              </div>

              {/* Overview */}
              <div className={`mt-4 rounded-xl border ${accentBorder} bg-muted p-5`}>
                <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t('rev.texts.common.overview')}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{char.overview}</p>
              </div>

              {/* Character arc */}
              <div className="mt-4 rounded-xl border border-border/60 bg-card p-5">
                <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t('rev.texts.common.character_arc')}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{char.arc}</p>
              </div>

              {/* Key quotes */}
              <div className="mt-6">
                <div className="mb-3 flex items-center gap-2">
                  <Quote className={`size-4 ${accentText}`} />
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {t('rev.texts.common.key_quotes')}
                  </h3>
                </div>
                <div className="space-y-3">
                  {char.keyQuotes.map((q, qi) => (
                    <div key={qi} className={`rounded-xl border ${accentBorder} ${quoteBg} p-4`}>
                      <p className="text-base font-medium italic text-foreground">{q.quote}</p>
                      <p
                        className={`mt-1 text-xs font-semibold uppercase tracking-wider ${accentText}`}
                      >
                        {q.act}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          {t('rev.texts.common.ao2_label')}
                        </span>
                        {q.analysis}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Theme links */}
              <div className="mt-5 rounded-xl border border-border/60 bg-muted p-4">
                <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t('rev.texts.common.theme_links')}
                </h3>
                <ul className="space-y-1">
                  {char.themeLinks.map((link, li) => (
                    <li key={li} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span
                        className={`mt-1.5 size-1.5 shrink-0 rounded-full ${char.colour === 'teal' ? 'bg-teal-500' : 'bg-clay-500'}`}
                      />
                      {link}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exam tip */}
              <div className="mt-4 rounded-xl border border-clay-500/20 bg-clay-500/10 p-4">
                <div className="flex items-start gap-2">
                  <Lightbulb className="mt-0.5 size-4 shrink-0 text-clay-600 dark:text-clay-300" />
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-clay-600 dark:text-clay-300">
                      {t('rev.texts.common.exam_tip')}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{char.examTip}</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              {idx < CHARACTERS.length - 1 && <div className="mt-10 border-t border-border/60" />}
            </section>
          )
        })}

        {/* Navigation */}
        <section className="mt-14 rounded-xl border border-teal-500/20 bg-teal-500/5 p-6">
          <h3 className="font-heading text-xl font-bold text-foreground">
            {t('rev.texts.common.continue_studying')}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {t('rev.texts.aic.characters.continue_sub')}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/revision/texts/an-inspector-calls/themes"
              className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
            >
              {t('rev.texts.common.themes')}
            </Link>
            <Link
              href="/revision/texts/an-inspector-calls/key-quotes"
              className="inline-flex items-center rounded-lg border border-teal-500/30 bg-card px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5 dark:text-teal-300"
            >
              {t('rev.texts.common.key_quotes')}
            </Link>
            <Link
              href="/revision/texts/an-inspector-calls/context"
              className="inline-flex items-center rounded-lg border border-teal-500/30 bg-card px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5 dark:text-teal-300"
            >
              {t('rev.texts.common.context')}
            </Link>
          </div>
        </section>

        {/* Fair-dealing notice */}
        <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
          {t('rev.texts.aic.fair_dealing')}
        </p>
      </div>
    </div>
  )
}
