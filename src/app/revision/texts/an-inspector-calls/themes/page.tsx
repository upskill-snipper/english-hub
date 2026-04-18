'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Lightbulb,
  Quote,
  Sparkles,
  Scale,
  Heart,
  Users,
  Flame,
  Shield,
  Crown,
} from 'lucide-react'

import StudyTools from '@/components/study/StudyTools'

/* ────────────────────────────────────────────────────────────────────── */
/*  Data                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

type ThemeQuote = {
  quote: string
  speaker: string
  act: string
  analysis: string
}

type ThemeStudy = {
  title: string
  overview: string
  detailed: string
  keyQuotes: ThemeQuote[]
  evidenceByAct: { act: string; evidence: string }[]
  contextLink: string
  essayTip: string
}

const THEMES: ThemeStudy[] = [
  {
    title: 'Social Responsibility',
    overview:
      'The Inspector\u2019s central message: we are not isolated individuals but interconnected people who owe duties to one another.',
    detailed:
      'Social responsibility is the play\u2019s dominant theme and Priestley\u2019s explicit political argument. The Inspector exists to force every character \u2014 and, through them, the audience \u2014 to accept that their actions have consequences for others. Birling\u2019s opening philosophy of self-reliance ("a man has to look after himself and his own") is systematically dismantled as the Inspector reveals that each character\u2019s selfish action contributed to Eva\u2019s death. Priestley wrote the play in 1945 as Britain was building the welfare state under Clement Attlee\u2019s Labour government. The Inspector\u2019s final speech is a direct endorsement of this political moment: if we do not share responsibility for one another, we will face the consequences in "fire and blood and anguish." The play argues that social responsibility is not optional charity but a moral and political necessity.',
    keyQuotes: [
      {
        quote: '"We are members of one body. We are responsible for each other."',
        speaker: 'Inspector Goole',
        act: 'Act 3',
        analysis:
          'The play\u2019s thesis statement. The biblical echo of "one body" lends the socialist argument moral authority. The simple present tense makes responsibility a permanent fact, not an aspiration. Priestley addresses the 1945 audience directly through the Inspector.',
      },
      {
        quote: '"a man has to look after himself and his own"',
        speaker: 'Arthur Birling',
        act: 'Act 1',
        analysis:
          'Birling\u2019s capitalist philosophy, which the entire play exists to refute. "His own" limits moral obligation to family and class, excluding the working class entirely. Dramatic irony ensures the audience rejects this before the Inspector arrives.',
      },
      {
        quote: '"If we were all responsible for everything that happened to everybody \u2026 it would be very awkward."',
        speaker: 'Arthur Birling',
        act: 'Act 3',
        analysis:
          'Birling reduces morality to inconvenience. "Awkward" trivialises what the Inspector has shown to be a matter of life and death. Priestley uses Birling\u2019s register to expose the moral emptiness of capitalist individualism.',
      },
      {
        quote: '"Fire and blood and anguish."',
        speaker: 'Inspector Goole',
        act: 'Act 3',
        analysis:
          'The prophetic warning that the audience knows was fulfilled by two world wars. The tricolon builds from physical destruction to psychological suffering, insisting that the refusal of social responsibility has catastrophic collective consequences.',
      },
    ],
    evidenceByAct: [
      {
        act: 'Act 1',
        evidence:
          'Birling articulates the anti-responsibility position. The Inspector\u2019s arrival interrupts his speech, structurally challenging individualism from the moment the doorbell rings.',
      },
      {
        act: 'Act 2',
        evidence:
          'Sybil\u2019s charity committee rejected Eva\u2019s appeal, showing how institutions of "responsibility" can become instruments of class prejudice. Gerald\u2019s affair reveals responsibility as selective and self-serving.',
      },
      {
        act: 'Act 3',
        evidence:
          'The Inspector\u2019s final speech delivers the thesis. The telephone call ensures that responsibility cannot be evaded: the reckoning will repeat until the lesson is learned.',
      },
    ],
    contextLink:
      'Priestley wrote in 1945 as the Labour government of Clement Attlee began building the National Health Service, expanding national insurance, and constructing the welfare state. The Inspector\u2019s speech endorses these reforms and warns that the alternative is a return to the cruelty of 1912.',
    essayTip:
      'Structure your essay around the contrast between Birling\u2019s philosophy and the Inspector\u2019s. Show how the play moves from confident individualism (Act 1) to the moral reckoning that proves individualism wrong (Act 3). Always connect to the 1945 context.',
  },
  {
    title: 'Class and Inequality',
    overview:
      'The Birlings sit at the top of an Edwardian class hierarchy that treats those beneath them as expendable.',
    detailed:
      'Class is the mechanism through which every injustice in the play operates. Eva is sacked, exploited, used, and rejected at every turn because she lacks money, status, and connections. Birling fires her for demanding fair wages; Sheila has her dismissed on a whim; Gerald makes her a "kept woman" dependent on his charity; Sybil refuses her help because a working-class girl has no right to "fine feelings." Priestley exposes how class privilege insulates the wealthy from accountability while crushing those without power. The Birlings never see Eva as a person \u2014 she is "cheap labour" to Arthur, a pretty object to Gerald, and beneath consideration to Sybil. Priestley argues that class is not a natural hierarchy but a man-made system of exploitation that must be dismantled.',
    keyQuotes: [
      {
        quote: '"Girls of that class\u2014"',
        speaker: 'Sybil Birling',
        act: 'Act 2',
        analysis:
          'The interrupted phrase exposes class prejudice as instinctive and unexamined. Sybil categorises Eva by economic status before she finishes her sentence. The dash suggests the Inspector refuses to let her complete the dehumanising thought.',
      },
      {
        quote: '"But these girls aren\u2019t cheap labour \u2014 they\u2019re people."',
        speaker: 'Sheila Birling',
        act: 'Act 1',
        analysis:
          'Sheila rejects her father\u2019s dehumanising language and insists on Eva\u2019s humanity. The opposition between "cheap labour" and "people" captures Priestley\u2019s argument that the class system turns human beings into economic units.',
      },
      {
        quote: '"She was claiming elaborate fine feelings and scruples that were simply absurd in a girl in her position."',
        speaker: 'Sybil Birling',
        act: 'Act 2',
        analysis:
          'Sybil denies Eva the capacity for moral feeling based on class alone. "In her position" reveals that Sybil reserves virtues like scruple and sensitivity for the upper classes. Priestley exposes this as the deepest form of class prejudice.',
      },
      {
        quote: '"I didn\u2019t feel about her as she felt about me."',
        speaker: 'Gerald Croft',
        act: 'Act 2',
        analysis:
          'Gerald\u2019s admission reveals the power asymmetry in his relationship with Daisy. He had the freedom to leave; she did not. Class gave Gerald emotional options that poverty denied Daisy.',
      },
    ],
    evidenceByAct: [
      {
        act: 'Act 1',
        evidence:
          'Birling sacks Eva for demanding higher wages, treating workers as disposable. The stage directions describe a prosperous household served by Edna, whose silent presence underlines the class divide.',
      },
      {
        act: 'Act 2',
        evidence:
          'Gerald\u2019s affair with Daisy and Sybil\u2019s rejection at the charity committee both demonstrate how class shapes personal relationships and institutional power.',
      },
      {
        act: 'Act 3',
        evidence:
          'Eric\u2019s assault and the family\u2019s attempt to cover it up show how wealth provides impunity. The Inspector\u2019s speech universalises Eva\u2019s suffering to "millions" of working-class people.',
      },
    ],
    contextLink:
      'The Edwardian class system of 1912 was rigidly hierarchical. The Birlings represent the industrial middle class aspiring to aristocratic status (Birling\u2019s hoped-for knighthood). Priestley, writing in 1945, argued that the post-war settlement must dismantle these class barriers. The Labour landslide of 1945 reflected a public desire for exactly this change.',
    essayTip:
      'Focus on how class operates through language. Sybil\u2019s "Girls of that class," Birling\u2019s "cheap labour," and Gerald\u2019s objectifying descriptions all reveal class prejudice embedded in everyday speech. This is strong AO2 analysis that connects form to meaning.',
  },
  {
    title: 'Gender',
    overview:
      'Eva\u2019s experiences expose the double oppression of being both working-class and female in Edwardian England.',
    detailed:
      'Gender intersects with class throughout the play to produce Eva\u2019s suffering. She is sacked from a factory (economic exploitation), dismissed from a shop (female jealousy weaponised by class privilege), kept as a mistress (sexual exploitation), assaulted by a drunken young man (male violence), and denied charity when pregnant (punished for her sexuality by a woman who upholds patriarchal morality). Priestley shows how men like Gerald, Eric, and the unseen Alderman Meggarty exploit women with impunity because their wealth and gender give them unchecked power. But gender oppression is not exclusive to men: Sybil, a woman herself, enforces the patriarchal moral code by refusing help to a pregnant, unmarried woman. Sheila\u2019s transformation involves rejecting male authority \u2014 she returns Gerald\u2019s ring and challenges her father\u2019s worldview \u2014 making her moral growth inseparable from her growing independence as a woman.',
    keyQuotes: [
      {
        quote: '"She was very pretty \u2014 soft brown hair and big dark eyes."',
        speaker: 'Gerald Croft',
        act: 'Act 2',
        analysis:
          'Gerald describes Eva in objectifying terms that reduce her to physical appearance. The focus on beauty foreshadows the sexual exploitation that follows. Priestley shows how the male gaze turns women into objects of desire rather than autonomous people.',
      },
      {
        quote: '"I was in that state when a chap easily turns nasty."',
        speaker: 'Eric Birling',
        act: 'Act 3',
        analysis:
          'Eric\u2019s euphemism for his assault on Eva. "Turns nasty" sanitises male violence through casual, almost apologetic phrasing. Priestley forces the audience to recognise the horror behind the evasive language.',
      },
      {
        quote: '"She was young and pretty and warm-hearted \u2014 and intensely grateful."',
        speaker: 'Gerald Croft',
        act: 'Act 2',
        analysis:
          '"Intensely grateful" reveals that Gerald valued Daisy\u2019s dependence. The listing reduces her to a set of attractive attributes. Priestley shows how the "rescue" narrative disguises patriarchal control.',
      },
      {
        quote: '"But these girls aren\u2019t cheap labour \u2014 they\u2019re people."',
        speaker: 'Sheila Birling',
        act: 'Act 1',
        analysis:
          'Sheila insists on Eva\u2019s personhood against her father\u2019s dehumanising language. As a woman, Sheila\u2019s recognition of Eva\u2019s humanity represents a potential for cross-class female solidarity that her mother completely lacks.',
      },
    ],
    evidenceByAct: [
      {
        act: 'Act 1',
        evidence:
          'Eva is sacked from Birling\u2019s factory and then from Milwards. Both dismissals show women as economically vulnerable and dependent on male employers or female customers with class power.',
      },
      {
        act: 'Act 2',
        evidence:
          'Gerald\u2019s affair with Daisy and Sybil\u2019s rejection of Eva at the charity committee. Gerald exploits Eva sexually; Sybil punishes her for being an unmarried, pregnant woman.',
      },
      {
        act: 'Act 3',
        evidence:
          'Eric\u2019s assault is the play\u2019s most violent act. Sheila\u2019s refusal to take Gerald\u2019s ring back represents her rejection of a patriarchal system that treats women as possessions.',
      },
    ],
    contextLink:
      'In 1912, women could not vote, had limited employment rights, and were economically dependent on men. By 1945, women had the vote and had proved their capabilities during the war. Priestley\u2019s play supports the argument for women\u2019s equality by showing the devastating consequences of a society that treats women as objects.',
    essayTip:
      'Compare Sheila and Sybil to show that gender oppression is not straightforward. Sybil, a woman, enforces patriarchal values against Eva, while Sheila, a younger woman, rejects them. This complexity strengthens your argument and demonstrates sophisticated analysis.',
  },
  {
    title: 'Age and Generational Change',
    overview:
      'Sheila and Eric accept responsibility and change; Arthur and Sybil refuse. Priestley places his hope in the young.',
    detailed:
      'The generational divide is the engine of the play\u2019s final act. After the Inspector departs, the family splits along age lines: Arthur and Sybil celebrate their apparent escape and try to return to the comfort of the evening\u2019s opening, while Sheila and Eric insist that the moral lesson matters regardless of whether the Inspector was "real." Priestley wrote for a 1945 audience standing at a crossroads. The older generation represented by the Birlings clung to pre-war values of individualism, class hierarchy, and unchecked capitalism. The younger generation had the opportunity to reject those values and build a fairer society. By making Sheila and Eric the characters who learn and grow, Priestley directly addresses young people in the audience, asking them to take responsibility for building the post-war welfare state.',
    keyQuotes: [
      {
        quote: '"You began to learn something. And now you\u2019ve stopped."',
        speaker: 'Sheila Birling',
        act: 'Act 3',
        analysis:
          'Sheila accuses Gerald and her parents of moral regression. The short, accusing sentences convey frustrated disappointment. "Stopped" implies a deliberate choice to retreat from truth, sharpening the generational divide.',
      },
      {
        quote: '"You\u2019re not the kind of father a chap could go to."',
        speaker: 'Eric Birling',
        act: 'Act 3',
        analysis:
          'Eric exposes the emotional bankruptcy beneath Birling\u2019s patriarchal authority. The family\u2019s dysfunction was always present but concealed by wealth and convention. The younger generation can see what the older generation refuses to acknowledge.',
      },
      {
        quote: '"the famous younger generation who know it all"',
        speaker: 'Arthur Birling',
        act: 'Act 3',
        analysis:
          'Birling dismisses his children\u2019s moral growth as youthful arrogance. The sarcasm reveals his refusal to learn. Priestley positions the audience to side with the "younger generation" against this condescension.',
      },
      {
        quote: '"I\u2019ll never, never do it again to anybody."',
        speaker: 'Sheila Birling',
        act: 'Act 1',
        analysis:
          'Sheila\u2019s immediate and unconditional acceptance of guilt. The repetition of "never" conveys genuine remorse. Her response contrasts with her parents\u2019 defensive evasion and models the moral change Priestley wants from the young.',
      },
    ],
    evidenceByAct: [
      {
        act: 'Act 1',
        evidence:
          'Birling dominates with after-dinner speeches. His children listen dutifully. The generational hierarchy appears secure.',
      },
      {
        act: 'Act 2',
        evidence:
          'Sheila begins to challenge Gerald and her mother. The generational split starts to emerge as Sheila sees through evasion that her parents cannot recognise.',
      },
      {
        act: 'Act 3',
        evidence:
          'The split is absolute. Sheila and Eric insist the lesson matters; Arthur and Sybil try to forget it. The telephone call forces the cycle to repeat, denying the older generation their comfortable escape.',
      },
    ],
    contextLink:
      'The 1945 election saw a massive swing to Labour, driven largely by young voters and returning servicemen who rejected the old order. Priestley\u2019s play mirrors this political moment: the younger generation must reject their parents\u2019 values to build a better world.',
    essayTip:
      'Structure your essay around the contrast between Sheila/Eric and Arthur/Sybil. Track how each pair responds to the Inspector\u2019s revelations. Show that the generational divide is not just about age but about the willingness to change.',
  },
  {
    title: 'Power and Abuse of Power',
    overview:
      'Each character exercises a different form of power over Eva, and each abuses it.',
    detailed:
      'Power in the play operates through wealth, gender, age, social position, and institutional authority. Birling has the power to fire workers and uses it to crush dissent. Sheila has the power of a valued customer and uses it vindictively. Gerald has the power of wealth and class to make Daisy dependent on him. Eric uses physical and sexual power to assault Eva. Sybil has institutional power as chair of the charity and uses it to deny help to a desperate woman. The Inspector temporarily inverts these hierarchies, subjecting the powerful to a moral scrutiny they have never before faced. Priestley\u2019s argument is that power without responsibility is the root of social injustice, and that those who hold power must be held accountable for how they use it.',
    keyQuotes: [
      {
        quote: '"Public men, Mr Birling, have responsibilities as well as privileges."',
        speaker: 'Inspector Goole',
        act: 'Act 1',
        analysis:
          'The Inspector insists that power and responsibility are inseparable. The balanced phrasing frames this as a permanent truth, not a debatable opinion. He immediately challenges Birling\u2019s assumption that wealth entitles him to immunity.',
      },
      {
        quote: '"she\u2019d had a lot to say \u2014 far too much \u2014 so she had to go."',
        speaker: 'Arthur Birling',
        act: 'Act 1',
        analysis:
          'Birling describes sacking Eva as a routine exercise of employer power. "Far too much" measures speech by class entitlement: a working-class woman demanding fair wages is automatically saying too much. Power silences dissent.',
      },
      {
        quote: '"I was quite justified."',
        speaker: 'Sybil Birling',
        act: 'Act 2',
        analysis:
          'Sybil sees her institutional power as self-justifying. She does not need external validation \u2014 her position on the committee is sufficient authority. Priestley shows how institutional power can function without moral accountability.',
      },
      {
        quote: '"I was in that state when a chap easily turns nasty."',
        speaker: 'Eric Birling',
        act: 'Act 3',
        analysis:
          'Eric\u2019s assault is the most direct abuse of power in the play \u2014 physical, sexual, and class-based. The casual phrasing reveals how normalised male violence was in a society that gave men unchecked power over vulnerable women.',
      },
    ],
    evidenceByAct: [
      {
        act: 'Act 1',
        evidence:
          'Birling exercises economic power by sacking Eva. Sheila exercises consumer power by having Eva dismissed from Milwards. Both treat their power as an entitlement.',
      },
      {
        act: 'Act 2',
        evidence:
          'Gerald exercises sexual and economic power over Daisy. Sybil exercises institutional power through the charity committee. Both claim benevolent motives that disguise exploitation.',
      },
      {
        act: 'Act 3',
        evidence:
          'Eric\u2019s assault is the most violent exercise of power. The Inspector exercises moral power over all of them. The telephone call suggests that a higher power ensures accountability cannot be escaped.',
      },
    ],
    contextLink:
      'The Edwardian class system concentrated power in the hands of wealthy industrialists, landowners, and their families. The welfare state that Priestley supported was designed to redistribute power and protect the vulnerable from exploitation by the powerful.',
    essayTip:
      'Map each character\u2019s specific form of power over Eva: economic (Birling), consumer (Sheila), sexual/financial (Gerald), physical (Eric), institutional (Sybil). This systematic approach shows the examiner that you understand how power operates through different channels.',
  },
  {
    title: 'Guilt and Morality',
    overview:
      'Each character\u2019s response to guilt reveals their moral character. Priestley tests the audience alongside the Birlings.',
    detailed:
      'The play functions as a moral test: each character is confronted with their responsibility for Eva\u2019s death and their response reveals their true nature. Sheila accepts guilt immediately and without evasion. Eric is anguished and genuinely remorseful, despite his more serious crimes. Gerald feels temporary shame but quickly seeks to discredit the Inspector. Sybil is defiant and refuses to accept guilt at all. Arthur is concerned only with avoiding a public scandal. Priestley uses these contrasting responses to test his audience: which reaction do you recognise in yourself? The play\u2019s cyclical ending \u2014 a real inspector is coming \u2014 denies the characters (and the audience) the comfort of escaping moral judgment. Guilt cannot be evaded; it can only be faced or denied.',
    keyQuotes: [
      {
        quote: '"I\u2019ll never, never do it again to anybody."',
        speaker: 'Sheila Birling',
        act: 'Act 1',
        analysis:
          'The model response to guilt: immediate, unconditional, and forward-looking. The repetition of "never" conveys the depth of Sheila\u2019s remorse. Priestley presents this as the response he wants from his audience.',
      },
      {
        quote: '"It\u2019s what happened to the girl and what we all did to her that matters."',
        speaker: 'Sheila Birling',
        act: 'Act 3',
        analysis:
          'Sheila insists that moral guilt exists regardless of the Inspector\u2019s identity. "We all" distributes guilt collectively. "Matters" is a simple, emphatic word that refuses to let the family trivialise Eva\u2019s death.',
      },
      {
        quote: '"I was quite justified."',
        speaker: 'Sybil Birling',
        act: 'Act 2',
        analysis:
          'The complete refusal of guilt. Sybil\u2019s self-righteousness is impenetrable. Priestley presents her as the moral opposite of Sheila: where Sheila accepts, Sybil denies.',
      },
      {
        quote: '"I don\u2019t see much nonsense about it when a girl goes and kills herself."',
        speaker: 'Eric Birling',
        act: 'Act 3',
        analysis:
          'Eric challenges his father\u2019s attempt to dismiss the evening as "nonsense." The blunt reference to suicide forces the family to confront the human cost. Eric\u2019s guilt is painful but genuine.',
      },
    ],
    evidenceByAct: [
      {
        act: 'Act 1',
        evidence:
          'Birling feels no guilt for sacking Eva. Sheila accepts guilt immediately. The contrast establishes the moral spectrum that will structure the rest of the play.',
      },
      {
        act: 'Act 2',
        evidence:
          'Gerald shows temporary shame but will recover. Sybil shows no guilt at all. The Inspector\u2019s method forces each character to face their actions before the next is interrogated.',
      },
      {
        act: 'Act 3',
        evidence:
          'Eric\u2019s anguished guilt contrasts with his parents\u2019 celebration of their "escape." The telephone call ensures moral reckoning is inescapable. Priestley\u2019s message: you cannot outrun guilt.',
      },
    ],
    contextLink:
      'Priestley\u2019s wartime Postscripts broadcasts argued that Britain had a moral duty to learn from the suffering of the 1930s and 1940s. An Inspector Calls dramatises the same argument: those who refuse to feel guilt for past actions are condemned to repeat them.',
    essayTip:
      'Rank the characters by their willingness to accept guilt (Sheila > Eric > Gerald > Sybil/Arthur). This gives your essay a clear, progressive structure and allows you to argue that Priestley\u2019s moral test produces a spectrum of responses, not a simple pass/fail.',
  },
  {
    title: 'Capitalism vs Socialism',
    overview:
      'Birling represents capitalism; the Inspector represents socialism. The play dramatises the argument between them.',
    detailed:
      'An Inspector Calls is explicitly a political play. Birling\u2019s opening speeches articulate the capitalist worldview: self-reliance, profit, competition, and the rejection of collective responsibility. The Inspector\u2019s closing speech articulates the socialist alternative: community, shared responsibility, and the recognition that "we are members of one body." Priestley structures the entire play as an argument between these two positions, and there is no doubt which side wins. Birling\u2019s predictions are wrong, his values produce suffering, and his philosophy is discredited by dramatic irony. The Inspector\u2019s message is vindicated by the two world wars the audience has lived through and by the 1945 Labour landslide that reflected the public\u2019s desire for a more equal society. Priestley\u2019s play is not a neutral exploration of both sides \u2014 it is an argument for socialism, delivered through the most powerful dramatic means available.',
    keyQuotes: [
      {
        quote: '"The way some of these cranks talk and write now, you\u2019d think everybody has to look after everybody else."',
        speaker: 'Arthur Birling',
        act: 'Act 1',
        analysis:
          'Birling dismisses socialists as "cranks" \u2014 a word that implies irrationality. The play that follows proves the "cranks" right and Birling wrong. Priestley uses dramatic irony to let the audience see what Birling cannot.',
      },
      {
        quote: '"We are members of one body. We are responsible for each other."',
        speaker: 'Inspector Goole',
        act: 'Act 3',
        analysis:
          'The socialist counter-argument to Birling\u2019s individualism. "One body" uses biblical language to give the political message moral weight. Priestley answers Birling\u2019s "cranks" with the Inspector\u2019s moral certainty.',
      },
      {
        quote: '"a man has to look after himself and his own"',
        speaker: 'Arthur Birling',
        act: 'Act 1',
        analysis:
          'The capitalist creed in its purest form. Priestley presents it at the start of the play so that every subsequent revelation demonstrates its human cost. By Act 3, this philosophy has been proven responsible for Eva\u2019s death.',
      },
      {
        quote: '"One Eva Smith has gone \u2014 but there are millions and millions of Eva Smiths and John Smiths still left with us."',
        speaker: 'Inspector Goole',
        act: 'Act 3',
        analysis:
          'The Inspector turns Eva\u2019s individual tragedy into a systemic critique of capitalism. "Millions and millions" insists that exploitation is not an aberration but a structural feature of the economic system Birling represents.',
      },
    ],
    evidenceByAct: [
      {
        act: 'Act 1',
        evidence:
          'Birling\u2019s after-dinner speeches set out the capitalist position. The Inspector\u2019s arrival immediately challenges it. The doorbell interrupts Birling at his most confident, structurally enacting the interruption of capitalist certainty.',
      },
      {
        act: 'Act 2',
        evidence:
          'Gerald\u2019s affair and Sybil\u2019s charity work show how capitalism shapes personal relationships and institutional power. Both characters exercise capitalist values \u2014 ownership, hierarchy, control \u2014 in their treatment of Eva.',
      },
      {
        act: 'Act 3',
        evidence:
          'The Inspector\u2019s speech presents the socialist alternative. The older Birlings\u2019 attempt to discredit him represents capitalism\u2019s refusal to accept critique. The telephone call ensures the argument continues.',
      },
    ],
    contextLink:
      'Priestley was a committed democratic socialist who believed the 1945 Labour victory was Britain\u2019s chance to build a fairer society. His wartime Postscripts broadcasts reached millions and argued against a return to pre-war inequality. An Inspector Calls is the dramatic expression of the same political argument.',
    essayTip:
      'Always identify the play as a political argument, not a neutral exploration. Priestley does not present capitalism and socialism as equally valid \u2014 he systematically discredits Birling\u2019s position and endorses the Inspector\u2019s. State this clearly in your thesis.',
  },
]

/* ────────────────────────────────────────────────────────────────────── */
/*  Page                                                                 */
/* ────────────────────────────────────────────────────────────────────── */

export default function ThemesPage() {
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
              <BookOpen className="size-3" />
              Theme Analysis
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-clay-300/30 px-3 py-1 text-xs text-clay-600">
              <Sparkles className="size-3" />
              AQA / Edexcel / OCR / Eduqas
            </span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            An Inspector Calls &mdash; Themes
          </h1>
          <p className="mt-2 text-lg text-ink-500">
            by J.B. Priestley &mdash; 1945
          </p>
          <p className="mt-4 max-w-2xl text-ink-500">
            Seven major themes analysed in depth with key quotes, act-by-act
            evidence, AO3 context links, and essay planning tips for GCSE
            literature.
          </p>
        </section>

        {/* Exam tip banner */}
        <section className="mt-8 rounded-xl border border-clay-300/20 bg-clay-200/10 p-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-clay-500" />
            <div className="text-sm text-ink-600">
              <p className="mb-1 font-bold text-ink-800">Exam technique</p>
              <p>
                Theme questions require you to track how an idea develops across
                the <strong>whole play</strong> (AO1), analyse Priestley&rsquo;s
                use of <strong>language and structure</strong> (AO2), and link to{' '}
                <strong>historical context</strong> (AO3). Use the act-by-act
                evidence sections below to build a progressive argument.
              </p>
            </div>
          </div>
        </section>

        {/* Themes */}
        {THEMES.map((theme, idx) => (
          <section key={theme.title} className="mt-12">
            {/* Theme heading */}
            <div className="flex items-start gap-3 mb-2">
              <div className="flex size-10 items-center justify-center rounded-xl bg-teal-400/8">
                <BookOpen className="size-5 text-teal-700" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-ink-900">
                {theme.title}
              </h2>
            </div>
            <p className="ml-13 text-sm italic text-ink-500">{theme.overview}</p>

            {/* Detailed analysis */}
            <div className="mt-4 rounded-xl border border-teal-400/20 bg-cream-100/60 p-5">
              <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-ink-400">
                Detailed Analysis
              </h3>
              <p className="text-sm leading-relaxed text-ink-600">
                {theme.detailed}
              </p>
            </div>

            {/* Key quotes */}
            <div className="mt-6">
              <div className="mb-3 flex items-center gap-2">
                <Quote className="size-4 text-teal-700" />
                <h3 className="font-serif text-lg font-bold text-ink-800">
                  Key Quotes
                </h3>
              </div>
              <div className="space-y-3">
                {theme.keyQuotes.map((q, qi) => (
                  <div
                    key={qi}
                    className="rounded-xl border border-teal-400/20 bg-teal-500/5 p-4"
                  >
                    <p className="text-base font-medium italic text-ink-800">
                      {q.quote}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
                      {q.speaker} &mdash; {q.act}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      <span className="font-semibold text-ink-700">AO2: </span>
                      {q.analysis}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Evidence by act */}
            <div className="mt-5">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-ink-400">
                Evidence by Act
              </h3>
              <div className="grid gap-3 sm:grid-cols-3">
                {theme.evidenceByAct.map((ev, ei) => (
                  <div
                    key={ei}
                    className="rounded-xl border border-ink-100 bg-cream-50 p-4"
                  >
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-teal-600">
                      {ev.act}
                    </p>
                    <p className="text-sm leading-relaxed text-ink-600">
                      {ev.evidence}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Context link */}
            <div className="mt-4 rounded-xl border border-clay-300/20 bg-clay-200/8 p-4">
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-clay-600">
                AO3 Context Link
              </p>
              <p className="text-sm leading-relaxed text-ink-600">
                {theme.contextLink}
              </p>
            </div>

            {/* Essay tip */}
            <div className="mt-4 rounded-xl border border-teal-400/15 bg-teal-500/5 p-4">
              <div className="flex items-start gap-2">
                <Lightbulb className="mt-0.5 size-4 shrink-0 text-teal-600" />
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-teal-700">
                    Essay Planning Tip
                  </p>
                  <p className="text-sm leading-relaxed text-ink-600">
                    {theme.essayTip}
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            {idx < THEMES.length - 1 && (
              <div className="mt-10 border-t border-ink-100" />
            )}
          </section>
        ))}

        {/* Navigation */}
        <section className="mt-14 rounded-xl border border-teal-400/20 bg-teal-500/5 p-6">
          <h3 className="font-serif text-xl font-bold text-ink-900">
            Continue studying
          </h3>
          <p className="mt-1 text-sm text-ink-500">
            Explore characters, key quotes, and context for An Inspector Calls.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="/revision/texts/an-inspector-calls/characters"
              className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
            >
              Characters
            </a>
            <a
              href="/revision/texts/an-inspector-calls/key-quotes"
              className="inline-flex items-center rounded-lg border border-teal-400/30 bg-cream-50 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-500/5"
            >
              Key Quotes
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
