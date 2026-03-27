import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/caie/inspector-calls' },
  title: "An Inspector Calls Study Guide - Cambridge IGCSE English Literature",
  description:
    "Complete An Inspector Calls study guide for Cambridge IGCSE English Literature. Characters, themes, 15+ key quotes with analysis, 1912/1945 context, dramatic devices, and Cambridge-specific exam technique.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const keyQuotes = [
  {
    quote: "We are members of one body. We are responsible for each other",
    speaker: "Inspector Goole",
    act: "Act 3",
    analysis:
      "The Inspector's central moral message, articulating Priestley's socialist vision. 'One body' is a metaphor drawn from Christian theology (the body of Christ), giving the message spiritual authority. The first-person plural 'we' implicates the audience as well as the Birlings, making the lesson universal rather than personal.",
  },
  {
    quote: "If men will not learn that lesson, then they will be taught it in fire and blood and anguish",
    speaker: "Inspector Goole",
    act: "Act 3",
    analysis:
      "A prophetic warning that alludes to the two World Wars. The 1945 audience would recognise that Priestley's warning came true: the ruling class's refusal to accept social responsibility led to catastrophic conflict. The tricolon 'fire and blood and anguish' is biblical in tone, positioning the Inspector as a moral prophet.",
  },
  {
    quote: "But these girls aren't cheap labour - they're people",
    speaker: "Inspector Goole",
    act: "Act 1",
    analysis:
      "Directly challenges Birling's capitalist view of workers as expendable commodities. The dash creates a dramatic pause that forces reconsideration. Priestley uses the Inspector to voice the argument that human dignity should take precedence over profit.",
  },
  {
    quote: "We don't live alone. We are members of a community",
    speaker: "Inspector Goole",
    act: "Act 3",
    analysis:
      "Refutes Birling's earlier claim that 'a man has to mind his own business'. The simple, declarative sentences carry the weight of moral certainty. Priestley positions community and collective responsibility as the antidote to the selfish individualism of the Birling class.",
  },
  {
    quote: "a man has to mind his own business and look after himself and his own",
    speaker: "Mr Birling",
    act: "Act 1",
    analysis:
      "Birling's capitalist philosophy of self-interest, which the entire play systematically dismantles. The listing ('himself and his own') reveals his narrow worldview. Priestley ensures the audience recognises this attitude as morally bankrupt by having the Inspector prove that every Birling's selfish actions contributed to Eva's death.",
  },
  {
    quote: "The Titanic - she sails next week... unsinkable, absolutely unsinkable",
    speaker: "Mr Birling",
    act: "Act 1",
    analysis:
      "Dramatic irony: the 1945 audience knows the Titanic sank in 1912. This immediately destroys Birling's credibility. Combined with his predictions that there will be no war, Priestley uses dramatic irony to undermine everything Birling represents: capitalist confidence, complacency, and wilful ignorance.",
  },
  {
    quote: "The Germans don't want war. Nobody wants war",
    speaker: "Mr Birling",
    act: "Act 1",
    analysis:
      "Another instance of dramatic irony, as two World Wars followed. Birling's repeated wrong predictions establish him as foolish and short-sighted. Priestley is warning the 1945 audience not to repeat the complacency of 1912: those who ignore social problems create the conditions for conflict.",
  },
  {
    quote: "I'm ashamed of you as well - yes, both of you",
    speaker: "Sheila Birling",
    act: "Act 3",
    analysis:
      "Sheila turns against her parents, representing the generational divide that is central to the play. Her willingness to accept guilt and learn from it contrasts with her parents' denial. Priestley uses the younger generation as a vehicle for hope that society can change.",
  },
  {
    quote: "You're not the kind of father a chap could go to when he's in trouble",
    speaker: "Eric Birling",
    act: "Act 3",
    analysis:
      "Exposes the dysfunction beneath the Birlings' respectable surface. Eric's accusation reveals that Birling's patriarchal authority is a facade; he has failed in his most basic responsibility as a father. Priestley critiques the upper-class family as emotionally hollow despite its material wealth.",
  },
  {
    quote: "I'll never, never do it again to anybody",
    speaker: "Sheila Birling",
    act: "Act 1",
    analysis:
      "The repetition of 'never' conveys genuine remorse. Sheila is the first character to accept responsibility and vow to change. Priestley presents her as a model for the audience: recognising wrongdoing and committing to moral growth is the correct response.",
  },
  {
    quote: "Between us we drove that girl to commit suicide",
    speaker: "Sheila Birling",
    act: "Act 3",
    analysis:
      "Sheila accepts collective guilt with the pronoun 'we', echoing the Inspector's communal language. 'Drove' implies relentless pressure, not a single act. Priestley uses Sheila to demonstrate that responsibility cannot be divided into harmless portions: each person's contribution matters.",
  },
  {
    quote: "She was very pretty and looked as if she could take care of herself. I couldn't be sorry for her",
    speaker: "Mrs Birling",
    act: "Act 2",
    analysis:
      "Mrs Birling's prejudice against Eva is based on class snobbery rather than evidence. The non-sequitur logic (pretty, therefore undeserving of sympathy) exposes her moral blindness. Priestley shows how the upper classes dehumanise the poor to justify withholding help.",
  },
  {
    quote: "I was quite justified. The girl had begun by telling us a pack of lies",
    speaker: "Mrs Birling",
    act: "Act 2",
    analysis:
      "Mrs Birling refuses to accept any responsibility, hiding behind procedural justification. 'Quite justified' is clipped and self-assured. Priestley presents her as the most morally entrenched character: she represents the older generation's refusal to change.",
  },
  {
    quote: "The girl's dead and we all helped to kill her - and that's what matters",
    speaker: "Eric Birling",
    act: "Act 3",
    analysis:
      "Like Sheila, Eric grasps the Inspector's moral lesson. The blunt monosyllabic language ('dead', 'kill') strips away euphemism. 'That's what matters' rejects his parents' attempt to focus on reputation rather than morality. Priestley aligns the younger generation with truth and accountability.",
  },
  {
    quote: "Public men, Mr Birling, have responsibilities as well as privileges",
    speaker: "Inspector Goole",
    act: "Act 1",
    analysis:
      "Directly challenges the idea that wealth and status exempt people from moral obligation. The balanced structure ('responsibilities as well as privileges') implies the two should be equal. Priestley's socialist message is clear: power must come with accountability.",
  },
  {
    quote: "Who is this Inspector? A fake?",
    speaker: "Mr Birling",
    act: "Act 3",
    analysis:
      "After the Inspector leaves, Birling desperately tries to discredit him. The question reveals that Birling cares more about whether the Inspector was real than about Eva's death. Priestley uses this to show that the older generation will seize any excuse to avoid moral reckoning.",
  },
  {
    quote: "Everything's all right now, Sheila. What about this ring?",
    speaker: "Gerald Croft",
    act: "Act 3",
    analysis:
      "Gerald tries to restore the status quo by offering the engagement ring again. The ring symbolises the pre-Inspector world of appearances and social contracts. Sheila's refusal signals that she has been permanently changed, while Gerald's offer shows he has learned nothing.",
  },
];

const characters = [
  {
    name: "Inspector Goole",
    description:
      "A mysterious figure who drives the action by interrogating each Birling family member. His name puns on 'ghoul', hinting at a supernatural dimension. He functions as Priestley's mouthpiece, articulating socialist values of collective responsibility. His omniscient knowledge and prophetic final speech suggest he is more than a police inspector: he may represent conscience, a time-traveller, or a divine figure. His dramatic function is to strip away the Birlings' respectable veneer and force them to confront their moral failures.",
  },
  {
    name: "Mr Arthur Birling",
    description:
      "A prosperous factory owner and local magistrate who represents capitalist self-interest. His confident predictions about the Titanic and the impossibility of war are undermined by dramatic irony, destroying his credibility. He prioritises profit over workers' welfare and social reputation over moral truth. After the Inspector leaves, he is more concerned about a public scandal than Eva's death. Priestley uses Birling as a cautionary figure: his worldview is selfish, complacent, and ultimately wrong.",
  },
  {
    name: "Mrs Sybil Birling",
    description:
      "Arthur's wife and a prominent member of the Brumley Women's Charity Organisation. She is the most socially rigid character, refusing to accept any responsibility for Eva's death. Her class prejudice leads her to reject Eva's appeal for help, and she blames the father of Eva's child without realising it is her own son Eric. She is cold, hypocritical, and morally blind. Priestley presents her as the embodiment of upper-class indifference to the suffering of the poor.",
  },
  {
    name: "Sheila Birling",
    description:
      "The Birlings' daughter, initially presented as a naive, materialistic young woman. She had Eva dismissed from Milwards out of jealousy. However, Sheila undergoes the most significant moral transformation in the play: she quickly accepts guilt, shows genuine empathy, and refuses to return to her pre-Inspector complacency. She becomes almost an ally of the Inspector, urging her parents to be honest. Priestley uses Sheila to represent the hope that the younger generation can build a more just society.",
  },
  {
    name: "Eric Birling",
    description:
      "The Birlings' son, who forced himself on Eva Smith (an implied sexual assault), made her pregnant, and stole money from his father's business to support her. His alcoholism and emotional instability suggest deep unhappiness beneath the family's prosperous surface. Like Sheila, Eric accepts responsibility and is horrified by his parents' refusal to do the same. His accusation that Birling is not 'the kind of father a chap could go to' exposes the family's emotional dysfunction.",
  },
  {
    name: "Gerald Croft",
    description:
      "Son of Lord and Lady Croft, engaged to Sheila. He had an affair with Eva/Daisy Renton, initially rescuing her but ultimately abandoning her when it suited him. Gerald is the most ambiguous of the younger characters: he shows some genuine feeling for Eva but readily joins Mr Birling in discrediting the Inspector after he leaves. He represents the upper class's ability to feel momentary sympathy without fundamentally changing.",
  },
  {
    name: "Eva Smith / Daisy Renton",
    description:
      "A working-class woman who never appears on stage but whose life and death drive the entire plot. She changes her name as she moves between the Birlings' spheres of influence, symbolising how the upper classes reshape and exploit the poor. She represents all vulnerable working-class people. Priestley deliberately keeps her voiceless to mirror how the poor are silenced by the powerful. Whether she is one person or several is left ambiguous, reinforcing the point that collective responsibility applies regardless.",
  },
];

const themes = [
  {
    name: "Social Responsibility",
    detail:
      "The play's central theme. Priestley argues that individuals have a duty of care towards others in society, particularly those who are vulnerable. The Inspector's message ('We are members of one body') is a direct challenge to Birling's philosophy of self-interest. Each character's treatment of Eva demonstrates how a failure of responsibility at any level - employer, consumer, charity, personal - can contribute to someone's destruction.",
  },
  {
    name: "Class and Social Inequality",
    detail:
      "The Birlings' wealth and social position give them power over Eva, who has no safety net. Mrs Birling's refusal to help Eva because she used the Birling name is an act of class snobbery. Priestley exposes how the class system dehumanises the poor: Eva is treated as cheap labour, a sexual object, and an inconvenient charity case, never as a person with dignity and rights.",
  },
  {
    name: "Generational Divide",
    detail:
      "Sheila and Eric accept the Inspector's message and show willingness to change; Mr and Mrs Birling and Gerald do not. This generational split is central to Priestley's purpose. Writing for a 1945 audience, he is arguing that the younger generation must reject the values of the pre-war establishment and build a fairer society. The older generation's refusal to learn makes them morally obsolete.",
  },
  {
    name: "Gender and Power",
    detail:
      "Eva is exploited by men (Birling as employer, Gerald and Eric as sexual partners) and judged by women (Sheila's jealousy, Mrs Birling's moral condemnation). The play exposes how Edwardian patriarchy leaves working-class women especially vulnerable. Eva's pregnancy and her treatment by the charity committee highlight how women who fall outside 'respectable' norms are punished by society.",
  },
  {
    name: "Appearance versus Reality",
    detail:
      "The Birlings project an image of respectability, wealth, and moral authority, but the Inspector reveals selfishness, hypocrisy, and cruelty beneath the surface. The engagement dinner, a symbol of social harmony, is systematically destroyed. Even the Inspector's identity is uncertain: his power comes not from his police rank but from his moral authority. Priestley suggests that truth matters more than appearances.",
  },
  {
    name: "Time, Consequences, and Learning from the Past",
    detail:
      "The play is set in 1912 but performed in 1945, creating a double time frame that is essential to its meaning. The audience can see that Birling's complacency led to two World Wars. Priestley's message is that 1945 Britain must not repeat the mistakes of 1912. The final phone call (a real Inspector is coming) implies that those who refuse to learn from the past are condemned to repeat it.",
  },
];

const dramaticDevices = [
  {
    name: "Dramatic Irony",
    detail:
      "The 1945 audience knows that Birling's confident predictions are wrong: the Titanic sank, two World Wars did happen, and the class system did not remain stable. This irony undermines everything Birling represents and ensures the audience sides with the Inspector from the start. It is Priestley's most powerful structural device for discrediting capitalist complacency.",
  },
  {
    name: "The Three Unities",
    detail:
      "The play observes the classical unities of time (one evening), place (one room), and action (one investigation). This concentrates the drama and prevents the characters from escaping scrutiny. The claustrophobic single setting - the Birling dining room - becomes a pressure cooker in which secrets are forced to the surface.",
  },
  {
    name: "The 'Well-Made Play' Structure",
    detail:
      "Priestley uses the conventions of the well-made play (exposition, rising tension, climax, denouement) but subverts the ending. Instead of resolution, the final phone call reopens the investigation. The cyclical structure implies that moral lessons cannot be avoided: if you refuse to learn, you will be confronted again.",
  },
  {
    name: "Entrances and Exits",
    detail:
      "The Inspector controls the pace of revelation by interviewing one character at a time. Each character's confession flows into the next, creating a chain of responsibility. Priestley carefully staggers entrances so that dramatic tension builds continuously rather than dissipating.",
  },
  {
    name: "Stage Directions",
    detail:
      "Priestley's opening stage directions specify that lighting should be 'pink and intimate' before the Inspector arrives, then become 'brighter and harder'. This visual metaphor represents the shift from comfortable illusion to harsh moral scrutiny. The detailed directions show Priestley intended precise control over the audience's experience.",
  },
  {
    name: "The Cliff-Hanger Ending",
    detail:
      "The final phone call announcing that a real Inspector is on his way creates a powerful dramatic shock. It punishes the characters (especially Mr and Mrs Birling) who thought they had escaped accountability. For the audience, it reinforces Priestley's message: social responsibility cannot be evaded, and moral reckoning is inevitable.",
  },
];

const assessmentObjectives = [
  {
    code: "AO1",
    description: "Show detailed knowledge and understanding of the text",
    guidance:
      "Demonstrate that you know the play thoroughly. Refer to specific moments, quote accurately, and show you understand the plot, characters, and themes. Do not simply retell the story; select relevant details to support your argument.",
  },
  {
    code: "AO2",
    description: "Analyse the language, form, and structure used by a writer to create meanings and effects",
    guidance:
      "This is where the highest marks are won. Analyse Priestley's word choices, dramatic devices, and structural decisions. Discuss how the well-made play structure builds tension, how stage directions create meaning, and how dramatic irony shapes the audience's response. Always explain the effect on the audience.",
  },
  {
    code: "AO3",
    description: "Demonstrate understanding of the relationships between texts and the contexts in which they were written and received",
    guidance:
      "The 1912/1945 dual time frame is essential. Discuss Edwardian class divisions, the welfare state debate, Priestley's socialism, and the post-war political context. Show how context shapes both the play's meaning and the audience's reception of it. Avoid bolting context on; integrate it into your analysis.",
  },
  {
    code: "AO4",
    description: "Communicate a clear, relevant response using appropriate terminology",
    guidance:
      "Write clearly and analytically. Use literary terminology accurately (dramatic irony, stage directions, motif, symbolism, juxtaposition). Structure your response with a clear argument. Avoid feature-spotting without explanation.",
  },
];

const plotSummary = [
  {
    act: "Act 1",
    summary:
      "The Birling family and Gerald Croft celebrate Sheila and Gerald's engagement at dinner. Mr Birling delivers speeches about self-reliance and predicts no war and that the Titanic is 'unsinkable'. Inspector Goole arrives and announces that a young woman, Eva Smith, has died after swallowing disinfectant. He reveals that Birling sacked Eva from his factory for leading a strike over wages. Sheila then confesses that she had Eva dismissed from her job at Milwards out of jealousy.",
  },
  {
    act: "Act 2",
    summary:
      "Gerald admits he had an affair with Eva (now calling herself Daisy Renton), keeping her as his mistress before ending the relationship. Mrs Birling is revealed to have used her influence on the Brumley Women's Charity Organisation committee to reject Eva's plea for help, despite Eva being pregnant. Mrs Birling insists the father of the child should be held entirely responsible, not realising she is condemning her own son.",
  },
  {
    act: "Act 3",
    summary:
      "Eric is exposed as the father of Eva's child. He forced himself on her, made her pregnant, and stole money from Birling's office to support her. The Inspector delivers his final speech about collective responsibility and leaves. Gerald returns to reveal that no Inspector Goole exists on the police force. The family discover that no girl has died at the infirmary. Mr and Mrs Birling are relieved, but Sheila and Eric insist the moral lesson still stands. The phone rings: a real Inspector is coming to investigate the death of a young woman.",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function InspectorCallsStudyGuide() {
  return (
    <>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#2E86C1] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            Cambridge IGCSE English Literature
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            An Inspector Calls &mdash; Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Plot, characters, themes, {keyQuotes.length}+ key quotes with analysis, dramatic devices,
            1912/1945 context, and Cambridge-specific exam technique.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* ── Navigation ──────────────────────────────────────────── */}
        <nav className="mb-10 flex flex-wrap gap-2 text-sm" aria-label="Page sections">
          {[
            "Plot Summary",
            "Characters",
            "Themes",
            "Key Quotes",
            "Dramatic Devices",
            "Context",
            "Assessment Objectives",
            "Exam Questions",
          ].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-[#2E86C1]/30 px-3 py-1 text-foreground transition hover:bg-primary/10"
            >
              {s}
            </a>
          ))}
        </nav>

        {/* ── Plot Summary ────────────────────────────────────────── */}
        <section id="plot-summary" aria-labelledby="plot-heading">
          <h2 id="plot-heading" className="text-2xl font-bold text-foreground">
            Plot Summary
          </h2>
          <div className="mt-6 space-y-4">
            {plotSummary.map((act) => (
              <div
                key={act.act}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
                <h3 className="font-semibold text-foreground">{act.act}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{act.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Characters ──────────────────────────────────────────── */}
        <section id="characters" aria-labelledby="characters-heading">
          <h2 id="characters-heading" className="text-2xl font-bold text-foreground">
            Character Analysis
          </h2>
          <div className="mt-6 space-y-6">
            {characters.map((c) => (
              <div
                key={c.name}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
                <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Themes ──────────────────────────────────────────────── */}
        <section id="themes" aria-labelledby="themes-heading">
          <h2 id="themes-heading" className="text-2xl font-bold text-foreground">
            Key Themes
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {themes.map((t) => (
              <div
                key={t.name}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
                <h3 className="font-semibold text-foreground">{t.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Key Quotes ──────────────────────────────────────────── */}
        <section id="key-quotes" aria-labelledby="quotes-heading">
          <h2 id="quotes-heading" className="text-2xl font-bold text-foreground">
            Key Quotes ({keyQuotes.length})
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Each quote includes the speaker, location, and detailed analysis suitable for
            Cambridge IGCSE responses.
          </p>
          <div className="mt-6 space-y-5">
            {keyQuotes.map((q, i) => (
              <div
                key={i}
                className="rounded-lg border-l-4 border-[#2E86C1] bg-card p-5 shadow-md"
              >
                <blockquote className="text-base font-medium italic text-foreground">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <p className="mt-1 text-xs font-semibold text-primary">
                  {q.speaker} &mdash; {q.act}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{q.analysis}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Dramatic Devices ─────────────────────────────────────── */}
        <section id="dramatic-devices" aria-labelledby="devices-heading">
          <h2 id="devices-heading" className="text-2xl font-bold text-foreground">
            Dramatic Devices
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Priestley&rsquo;s use of dramatic techniques is essential for AO2 (analysis of form
            and structure). Examiners reward candidates who discuss <em>how</em> Priestley shapes
            meaning, not just <em>what</em> happens.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {dramaticDevices.map((d) => (
              <div
                key={d.name}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
                <h3 className="font-semibold text-foreground">{d.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Context ─────────────────────────────────────────────── */}
        <section id="context" aria-labelledby="context-heading">
          <h2 id="context-heading" className="text-2xl font-bold text-foreground">
            Historical &amp; Social Context
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The dual time frame (set in 1912, performed in 1945) is fundamental to the
            play&rsquo;s meaning. Cambridge examiners expect you to discuss both contexts and
            explain how the gap between them creates dramatic irony.
          </p>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">1912: The Edwardian Setting</h3>
              <p className="mt-2">
                The play is set in 1912, just before the First World War and the sinking of the
                Titanic. Britain was marked by extreme class divisions: the wealthy industrial
                class (like the Birlings) enjoyed enormous privilege, while the working class had
                no welfare state, no NHS, and limited rights. Women could not vote, and
                working-class women like Eva Smith were especially vulnerable. The rigid social
                hierarchy meant that the upper classes felt little obligation towards the poor.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">1945: The Post-War Audience</h3>
              <p className="mt-2">
                The play was first performed in 1945, just as the Second World War was ending.
                The war had created a sense of national solidarity: people from all classes had
                fought and suffered together. There was widespread appetite for social reform,
                leading to the election of Clement Attlee&rsquo;s Labour government, which
                established the welfare state and the NHS. Priestley&rsquo;s play spoke directly
                to this moment, arguing that the pre-war attitudes of the Birling class must
                never return.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">J.B. Priestley&rsquo;s Socialism</h3>
              <p className="mt-2">
                Priestley was a committed socialist who believed in collective responsibility and
                social equality. During the war, his BBC radio broadcasts (the{" "}
                <em>Postscripts</em>) reached millions and advocated for a fairer society. He
                co-founded the Common Wealth Party. An Inspector Calls is his most famous dramatic
                expression of these beliefs: the Inspector is Priestley&rsquo;s mouthpiece,
                delivering the socialist message directly to the audience.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">The Welfare State Debate</h3>
              <p className="mt-2">
                In 1912, there was no state safety net for the poor. Charitable organisations
                (like Mrs Birling&rsquo;s committee) were the only source of help, and they could
                refuse assistance at will. The Beveridge Report of 1942 proposed a comprehensive
                welfare state to combat poverty, disease, ignorance, squalor, and idleness.
                Priestley&rsquo;s play dramatises exactly why private charity is insufficient: Mrs
                Birling&rsquo;s prejudice means Eva is denied help at her most desperate moment.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">The Role of Women</h3>
              <p className="mt-2">
                In 1912, women had limited legal rights and were largely dependent on men. The
                Representation of the People Act (1918) gave some women the vote, and full
                suffrage came in 1928. Eva&rsquo;s vulnerability stems partly from her gender: she
                is exploited sexually by Gerald and Eric, judged morally by Mrs Birling, and has
                no institutional protection. Sheila&rsquo;s transformation suggests that women of
                the next generation might exercise moral authority more responsibly.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Assessment Objectives ───────────────────────────────── */}
        <section id="assessment-objectives" aria-labelledby="ao-heading">
          <h2 id="ao-heading" className="text-2xl font-bold text-foreground">
            Cambridge Assessment Objectives
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Understanding the assessment objectives helps you target your revision and structure
            your exam answers for maximum marks.
          </p>
          <div className="mt-6 space-y-4">
            {assessmentObjectives.map((ao) => (
              <div
                key={ao.code}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded-full bg-[#1A5276] px-2.5 py-0.5 text-xs font-bold text-white">
                    {ao.code}
                  </span>
                  <h3 className="font-semibold text-foreground">{ao.description}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ao.guidance}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Exam Questions ──────────────────────────────────────── */}
        <section id="exam-questions" aria-labelledby="exam-heading">
          <h2 id="exam-heading" className="text-2xl font-bold text-foreground">
            Cambridge-Style Exam Questions
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cambridge IGCSE An Inspector Calls questions appear in Paper 2 (Drama). You will
            choose between a passage-based question and an essay question. Below are examples
            of both types with guidance on how to approach them.
          </p>

          <div className="mt-6 space-y-6">
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-[#1A5276]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Passage-Based
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                Re-read the Inspector&rsquo;s final speech, from &ldquo;But just remember
                this&rdquo; to the end of his dialogue. How does Priestley make this such a
                powerful and significant moment in the play?
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>&bull; Work through the passage line by line, identifying key language choices</li>
                  <li>&bull; Analyse the shift from individual to collective pronouns (&lsquo;you&rsquo; to &lsquo;we&rsquo;)</li>
                  <li>&bull; Discuss the prophetic, biblical tone: &lsquo;fire and blood and anguish&rsquo;</li>
                  <li>&bull; Consider the dramatic context: this is the Inspector&rsquo;s exit speech, his final judgement</li>
                  <li>&bull; Link to context: the 1945 audience has lived through the &lsquo;fire and blood&rsquo; he predicts</li>
                  <li>&bull; Use terminology: tricolon, imperative, dramatic irony, Priestley&rsquo;s mouthpiece</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-[#1A5276]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Essay Question
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                How does Priestley present the theme of social responsibility in An Inspector
                Calls?
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>&bull; Plan 3&ndash;4 key points with supporting quotations for each</li>
                  <li>&bull; Contrast Birling&rsquo;s individualism with the Inspector&rsquo;s collectivism</li>
                  <li>&bull; Track how each character responds to the idea of responsibility (accepting or denying)</li>
                  <li>&bull; Discuss Priestley&rsquo;s methods: dramatic irony, the chain-of-events structure, the final phone call</li>
                  <li>&bull; Reference context: Priestley&rsquo;s socialism, the 1945 welfare state movement</li>
                  <li>&bull; Show awareness of the generational divide as a structural device</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-[#1A5276]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Essay Question
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                How does Priestley use the character of Sheila Birling to convey his ideas about
                change and responsibility?
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>&bull; Structure chronologically to show Sheila&rsquo;s moral arc across the play</li>
                  <li>&bull; Act 1: shallow and materialistic (&lsquo;Oh - it&rsquo;s wonderful!&rsquo; about the ring)</li>
                  <li>&bull; Mid-play: accepts guilt quickly, shows empathy, becomes the Inspector&rsquo;s ally</li>
                  <li>&bull; Act 3: refuses to go back to how things were; rejects Gerald&rsquo;s ring</li>
                  <li>&bull; Contrast with her parents to highlight the generational divide</li>
                  <li>&bull; Discuss Priestley&rsquo;s purpose: Sheila represents the audience he hopes to create</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-[#1A5276]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Passage-Based
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                Re-read the opening of Act 1, from the start of the play to the Inspector&rsquo;s
                arrival. How does Priestley use this section to establish the characters and
                setting, and to prepare the audience for what follows?
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>&bull; Analyse the stage directions: &lsquo;pink and intimate&rsquo; lighting symbolises comfortable illusion</li>
                  <li>&bull; Discuss Birling&rsquo;s speeches: dramatic irony in his predictions establishes him as unreliable</li>
                  <li>&bull; Note the celebration context: the engagement dinner creates a sense of surface harmony</li>
                  <li>&bull; Identify foreshadowing: Eric&rsquo;s unease, Gerald&rsquo;s evasiveness, Sheila&rsquo;s suspicion</li>
                  <li>&bull; Consider the dramatic impact of the Inspector&rsquo;s arrival: the doorbell interrupts Birling mid-speech</li>
                  <li>&bull; Link to context: the 1912 setting and its significance for a 1945 audience</li>
                </ul>
              </div>
            </div>

            {/* ── Exam Technique ───────────────────────────────────── */}
            <div className="rounded-lg border-2 border-[#2E86C1]/30 bg-primary/5 p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Cambridge Exam Technique: Key Tips
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">Passage-based questions:</strong> Work
                  through the extract methodically. Use short, embedded quotations from the
                  passage. Analyse language, form, and structure (AO2). Then connect outward to
                  the rest of the play and relevant context.
                </li>
                <li>
                  <strong className="text-foreground">Essay questions:</strong> Plan before you
                  write. Select 3&ndash;4 key moments from across the play with quotations. Focus
                  on Priestley&rsquo;s methods and purpose, not just what happens. Integrate
                  context rather than adding it as a separate paragraph.
                </li>
                <li>
                  <strong className="text-foreground">Always use the author&rsquo;s name:</strong>{" "}
                  Write &ldquo;Priestley presents...&rdquo; or &ldquo;Priestley
                  uses...&rdquo; rather than &ldquo;the play shows...&rdquo;. This demonstrates
                  awareness of authorial intent and helps you discuss methods (AO2).
                </li>
                <li>
                  <strong className="text-foreground">The 1912/1945 dual context:</strong> This is
                  unique to An Inspector Calls and is essential for every answer. The gap between
                  setting and performance creates dramatic irony and carries Priestley&rsquo;s
                  political message.
                </li>
                <li>
                  <strong className="text-foreground">Quote precisely:</strong> Short, embedded
                  quotations (&lsquo;fire and blood and anguish&rsquo;) are more effective than
                  long block quotes. Aim for at least one quotation per paragraph.
                </li>
                <li>
                  <strong className="text-foreground">Link everything to Priestley&rsquo;s purpose:</strong>{" "}
                  The strongest answers connect analysis to Priestley&rsquo;s socialist message.
                  Why does he make Birling wrong about the Titanic? Why does Sheila change but Mrs
                  Birling does not? Always ask: what is Priestley trying to make the audience
                  think or feel?
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Back link & disclaimer ──────────────────────────────── */}
        <div className="mt-12 flex items-center gap-2 text-sm">
          <Link
            href="/resources/english-literature/caie"
            className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
          >
            &larr; Back to Cambridge IGCSE English Literature
          </Link>
        </div>

        <ExamBoardDisclaimer variant="content" className="mt-8" />
      </div>

    </>
  );
}
