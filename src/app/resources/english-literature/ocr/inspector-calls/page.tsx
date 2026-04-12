import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/ocr/inspector-calls' },
  title: "An Inspector Calls Study Guide for OCR | The English Hub",
  description:
    "Comprehensive An Inspector Calls study guide for OCR GCSE English Literature. Characters, themes, key quotations, context, and essay planning.",
};

/* ─── Quotation data ─────────────────────────────────────────── */

const keyQuotations = [
  {
    quote: "We are members of one body. We are responsible for each other.",
    speaker: "Inspector Goole (Act 3)",
    analysis:
      "The Inspector's final speech encapsulates Priestley's socialist message. The metaphor of 'one body' draws on Christian imagery of the body of Christ, suggesting collective humanity. The repetition of 'we' is inclusive and inescapable — Priestley insists that social responsibility is universal. This directly challenges the Birlings' individualist, capitalist worldview.",
  },
  {
    quote: "But these girls aren't cheap labour — they're people.",
    speaker: "Sheila Birling (Act 1)",
    analysis:
      "Sheila's recognition of the workers' humanity marks the beginning of her moral awakening. The dash creates a dramatic pause that emphasises the contrast between how the workers are treated ('cheap labour') and what they actually are ('people'). This line challenges her father's capitalist view that workers are merely a cost to be minimised.",
  },
  {
    quote: "It would be very awkward, wouldn't it?",
    speaker: "Mrs Birling (Act 2)",
    analysis:
      "Mrs Birling's rhetorical question reveals her complete inability to accept social responsibility. The word 'awkward' is a striking understatement — she reduces the consequences of exploitation to mere social inconvenience. The tag question 'wouldn't it?' seeks validation from the audience, but Priestley intends the audience to reject her position entirely.",
  },
  {
    quote: "these cranks talk and write now, you'd think everybody has to look after everybody else",
    speaker: "Mr Birling (Act 1)",
    analysis:
      "Birling dismisses socialist ideas as the work of 'cranks', revealing his contempt for collective responsibility. Priestley uses dramatic irony: the audience knows that Birling's confident predictions about the Titanic and no war are wrong, undermining his authority. His dismissal of social responsibility is positioned to be equally wrong.",
  },
  {
    quote: "I'm ashamed of you as well — yes both of you.",
    speaker: "Sheila Birling (Act 3)",
    analysis:
      "Sheila turns against her parents, marking a generational divide. Her shame contrasts with her parents' refusal to accept responsibility. The emphatic 'yes both of you' shows her determination and moral clarity. She represents the younger generation that Priestley hopes will build a more just society after the war.",
  },
  {
    quote: "You're not the kind of father a chap could go to when he's in trouble",
    speaker: "Eric Birling (Act 3)",
    analysis:
      "Eric's accusation exposes the failure of the Birling family unit. Despite their wealth and social standing, the family lacks genuine emotional connection. The colloquial 'chap' reveals Eric's vulnerability. Priestley suggests that capitalist values — prioritising profit and reputation over compassion — corrode even the most intimate human relationships.",
  },
  {
    quote: "unsinkable, absolutely unsinkable",
    speaker: "Mr Birling (Act 1)",
    analysis:
      "Birling's confident declaration about the Titanic is a masterful use of dramatic irony. The audience knows the Titanic sank in 1912, so Birling's certainty is immediately undermined. The repetition and intensifier 'absolutely' make him appear foolish. Priestley uses this to discredit everything else Birling says — including his views on social responsibility.",
  },
  {
    quote: "I was in that state where a chap easily turns nasty",
    speaker: "Eric Birling (Act 3)",
    analysis:
      "Eric's euphemistic confession about his assault on Eva Smith reveals his moral weakness. The phrase 'that state' avoids directly naming his drunkenness, and 'turns nasty' understates the violence of his actions. The passive construction ('turns') suggests a lack of agency, as though Eric is trying to distance himself from responsibility. Priestley shows how privilege enables men to avoid accountability.",
  },
  {
    quote: "Elaborate fine feelings and scruples that were simply absurd in a girl in her position",
    speaker: "Mrs Birling (Act 2)",
    analysis:
      "Mrs Birling's snobbery is laid bare in this statement. She cannot accept that a working-class girl could possess moral principles ('fine feelings and scruples'). The word 'position' reveals her rigid class consciousness — she believes that moral sensibility is the preserve of the upper classes. Priestley exposes the hypocrisy: it is Mrs Birling, not Eva, who lacks moral feeling.",
  },
  {
    quote: "You began to learn something. And now you've stopped.",
    speaker: "Sheila Birling (Act 3)",
    analysis:
      "Sheila's frustration with her parents' refusal to change is palpable. The tricolon ('You knew it then. You began to learn something. And now you've stopped.') builds in emotional intensity. The short sentences convey urgency. Sheila recognises that learning about one's own complicity in social injustice should lead to permanent change, not relief when the threat of exposure passes.",
  },
  {
    quote: "Public men, Mr Birling, have responsibilities as well as privileges",
    speaker: "Inspector Goole (Act 1)",
    analysis:
      "The Inspector directly challenges Birling's belief that wealth grants only privilege, not obligation. The pairing of 'responsibilities' and 'privileges' suggests they are inseparable. This reflects Priestley's socialist conviction that those with power and wealth owe a duty to the less fortunate. The formal address 'Mr Birling' maintains authority while delivering a moral rebuke.",
  },
  {
    quote: "They will be taught it in fire and blood and anguish.",
    speaker: "Inspector Goole (Act 3)",
    analysis:
      "The Inspector's prophetic warning refers to the World Wars. Written in 1945, the play is set in 1912 — Priestley's audience had lived through both wars and would recognise this as a prophecy already fulfilled. The triad 'fire and blood and anguish' evokes the horrors of warfare. The message is clear: if society does not choose compassion, it will be forced to learn through suffering.",
  },
  {
    quote: "Everything's all right now, Sheila. What about this ring?",
    speaker: "Gerald Croft (Act 3)",
    analysis:
      "Gerald's attempt to return to normality by offering the ring again shows he has learned nothing. For Gerald, the Inspector's visit was an interruption to be overcome, not a lesson to be absorbed. The casual 'everything's all right now' dismisses Eva's death and the moral reckoning entirely. Priestley uses this to show that the privileged classes will resist change unless forced.",
  },
  {
    quote: "I don't come into this suicide business",
    speaker: "Mrs Birling (Act 2)",
    analysis:
      "Mrs Birling's use of the word 'business' reduces Eva's death to a commercial transaction, revealing how thoroughly capitalism has colonised her language and thought. Her flat denial 'I don't come into this' is a refusal of responsibility that will be dramatically overturned as the Inspector reveals her role. The audience anticipates her exposure, creating dramatic tension.",
  },
  {
    quote: "She'd had a lot to say — far too much — so she had to go",
    speaker: "Mr Birling (Act 1)",
    analysis:
      "Birling's justification for sacking Eva reveals his authoritarian attitude to the working class. The dash and parenthetical 'far too much' show his irritation at a worker daring to speak up. The phrase 'had to go' presents her dismissal as inevitable, removing any sense of personal choice or responsibility. Priestley exposes how the powerful silence dissent.",
  },
  {
    quote: "Girls of that class—",
    speaker: "Mrs Birling (Act 2)",
    analysis:
      "Sheila's interruption cuts off Mrs Birling's dismissive phrase, but the incomplete sentence speaks volumes. The phrase 'that class' reveals deep-rooted snobbery and dehumanisation — Eva is reduced to a category rather than recognised as an individual. The dash represents Sheila's growing refusal to accept her mother's class prejudice, symbolising generational change.",
  },
  {
    quote: "We are learning something tonight. And it should teach us something too.",
    speaker: "Sheila Birling (Act 2)",
    analysis:
      "Sheila distinguishes between passively receiving information ('learning something') and actively changing behaviour ('teach us something'). The distinction is central to Priestley's message: awareness without action is meaningless. Sheila's use of 'we' shows she includes herself in the need for change, unlike her parents who resist any suggestion of fault.",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function OCRInspectorCallsPage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-literature/ocr"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
          >
            &larr; OCR English Literature
          </Link>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            An Inspector Calls: Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Everything you need to know about An Inspector Calls for OCR GCSE
            English Literature Paper 2, Section B &mdash; Modern Drama.
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* OCR Exam Format */}
        <section aria-labelledby="exam-format-heading">
          <h2
            id="exam-format-heading"
            className="text-2xl font-bold text-foreground"
          >
            OCR Exam Format
          </h2>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
              <p className="font-semibold text-primary">Paper 2: Exploring Effects and Impact</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Section B &mdash; 19th Century and Modern Prose/Drama. You will
                answer one question on An Inspector Calls. The question is an
                essay question <strong>without an extract</strong> &mdash; you
                must write from memory. You have approximately 45 minutes.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-muted p-4">
              <p className="font-semibold text-foreground">Assessment Objectives</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li><strong>AO1:</strong> Read, understand and respond to texts. Use textual references, including quotations, to support and illustrate interpretations.</li>
                <li><strong>AO2:</strong> Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology.</li>
                <li><strong>AO3:</strong> Show understanding of the relationships between texts and the contexts in which they were written.</li>
                <li><strong>AO4:</strong> Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Plot summary */}
        <section aria-labelledby="plot-heading">
          <h2
            id="plot-heading"
            className="text-2xl font-bold text-foreground"
          >
            Plot Summary
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <div className="space-y-3">
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Act 1: The Engagement and the Inspector&rsquo;s Arrival</p>
                <p className="mt-2 text-sm">
                  The Birling family are celebrating Sheila&rsquo;s engagement to
                  Gerald Croft. Mr Birling lectures about self-reliance and
                  dismisses collective responsibility. Inspector Goole arrives and
                  reveals that a young woman, Eva Smith, has killed herself by
                  drinking disinfectant. He shows a photograph to Mr Birling, who
                  admits sacking her from his factory for leading a strike for
                  higher wages. Sheila then confesses she had Eva dismissed from
                  Milwards out of jealousy.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Act 2: Gerald and Mrs Birling Exposed</p>
                <p className="mt-2 text-sm">
                  Gerald admits he had an affair with the girl (now using the name
                  Daisy Renton), keeping her as his mistress before ending the
                  relationship. Mrs Birling is revealed to have used her position
                  on a charity committee to deny the pregnant Eva help, claiming
                  her case was impertinent. Mrs Birling insists the father of the
                  child should be held responsible &mdash; not realising the
                  father is her own son Eric.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Act 3: Eric&rsquo;s Confession and the Aftermath</p>
                <p className="mt-2 text-sm">
                  Eric confesses he got Eva pregnant, stole money from his
                  father&rsquo;s firm to support her, and she refused it when she
                  discovered it was stolen. The Inspector delivers his final
                  speech about collective responsibility and leaves. The family
                  then discover that no girl has died at the infirmary and begin
                  to question whether the Inspector was real. Mr and Mrs Birling
                  and Gerald are relieved, but Sheila and Eric insist the moral
                  lesson still stands. The play ends with a phone call: a real
                  inspector is on his way to ask questions about a girl who has
                  just died.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Characters */}
        <section aria-labelledby="characters-heading">
          <h2
            id="characters-heading"
            className="text-2xl font-bold text-foreground"
          >
            Character Analysis
          </h2>

          <div className="mt-6 space-y-6">
            {/* Inspector Goole */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Inspector Goole</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                The Inspector is Priestley&rsquo;s mouthpiece &mdash; a dramatic
                device rather than a realistic character. His name,
                &ldquo;Goole,&rdquo; is a homophone of &ldquo;ghoul,&rdquo;
                suggesting a supernatural or spectral presence. He controls the
                pace and direction of the interrogation, refusing to let
                characters see the photograph simultaneously, which raises
                questions about whether they are all connected to the same girl.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                He speaks with moral authority, cutting through the
                Birlings&rsquo; self-justification with blunt, powerful language.
                His final speech is the climax of Priestley&rsquo;s message: that
                society must choose compassion or face destruction. His
                mysterious nature &mdash; he is not a real police inspector
                &mdash; gives his words a prophetic, almost divine quality.
              </p>
              <div className="mt-4 rounded border border-accent/20 bg-primary/10 p-3">
                <p className="text-sm font-medium text-primary">Key role</p>
                <p className="mt-1 text-sm text-primary">
                  Priestley&rsquo;s moral voice &rarr; Challenges each character
                  &rarr; Delivers the socialist message &rarr; Prophetic warning
                  &rarr; Disappears mysteriously
                </p>
              </div>
            </div>

            {/* Mr Birling */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Mr Birling</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Arthur Birling is a wealthy industrialist and local magistrate who
                represents the capitalist ruling class. He is pompous,
                self-important, and obsessed with social status and profit. His
                dramatic irony-laden speeches about the Titanic and the
                impossibility of war immediately undermine his credibility with
                the audience.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                He sacked Eva Smith for asking for a modest pay rise, viewing
                workers purely as a cost. Throughout the play, his primary concern
                is protecting his reputation and his knighthood, not the death of
                a young woman. He learns nothing from the Inspector&rsquo;s visit,
                representing the older generation&rsquo;s refusal to change.
              </p>
              <div className="mt-4 rounded border border-accent/20 bg-primary/10 p-3">
                <p className="text-sm font-medium text-primary">Key character arc</p>
                <p className="mt-1 text-sm text-primary">
                  Confident and complacent &rarr; Defensive under questioning
                  &rarr; Anxious about scandal &rarr; Relieved when threat passes
                  &rarr; Learns nothing
                </p>
              </div>
            </div>

            {/* Mrs Birling */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Mrs Birling</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Sybil Birling is the most socially conscious member of the family,
                acutely aware of class boundaries and determined to maintain them.
                She is cold, unsympathetic, and deeply snobbish, unable to accept
                that a working-class girl could have genuine moral principles.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Her refusal to help Eva at the charity committee is perhaps the
                most damning act in the play &mdash; she turned away a desperate,
                pregnant woman because she found her &ldquo;impertinent.&rdquo;
                Her dramatic irony moment, when she unknowingly condemns her own
                son by demanding the father be held responsible, is one of the
                play&rsquo;s most powerful scenes. Like her husband, she refuses
                to accept responsibility even after the truth is revealed.
              </p>
            </div>

            {/* Sheila Birling */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Sheila Birling</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Sheila represents the hope of the younger generation. She begins
                the play as a spoiled, privileged young woman but undergoes a
                profound moral transformation. She is the first to accept her
                guilt and shows genuine remorse for having Eva dismissed from
                Milwards.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                As the play progresses, Sheila becomes increasingly perceptive,
                almost taking on the Inspector&rsquo;s role by challenging her
                parents and Gerald. She refuses Gerald&rsquo;s ring at the end,
                recognising that everything has changed. Her moral awakening is
                permanent &mdash; she insists the lesson matters regardless of
                whether the Inspector was real. She represents Priestley&rsquo;s
                hope that the younger generation will build a fairer society.
              </p>
              <div className="mt-4 rounded border border-accent/20 bg-primary/10 p-3">
                <p className="text-sm font-medium text-primary">Key character arc</p>
                <p className="mt-1 text-sm text-primary">
                  Shallow and playful &rarr; Shocked by her own cruelty &rarr;
                  Genuinely remorseful &rarr; Takes on the Inspector&rsquo;s role
                  &rarr; Refuses to return to ignorance
                </p>
              </div>
            </div>

            {/* Eric Birling */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Eric Birling</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Eric is presented as troubled, immature, and a heavy drinker. His
                behaviour towards Eva &mdash; forcing himself on her when drunk,
                getting her pregnant, then stealing money &mdash; represents the
                worst excesses of male privilege and entitlement. However, like
                Sheila, he accepts responsibility and is changed by the
                Inspector&rsquo;s visit.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                His accusation that his father is not the kind of man &ldquo;a
                chap could go to when he&rsquo;s in trouble&rdquo; exposes the
                emotional emptiness of the Birling household. Eric aligns with
                Sheila against their parents at the end, representing the
                generational divide that Priestley uses to suggest that change is
                possible through the young.
              </p>
            </div>

            {/* Gerald Croft */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Gerald Croft</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Gerald occupies a middle ground. He is from a higher social class
                than the Birlings and shows some genuine feeling for Eva/Daisy,
                but ultimately he exploited her vulnerability for his own pleasure
                and then discarded her. His relationship with Eva was unequal
                from the start &mdash; he had all the power.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Crucially, Gerald aligns himself with Mr and Mrs Birling in the
                final act. He is the one who discovers the Inspector may not have
                been real and eagerly grasps at this to avoid responsibility. His
                offer to return the ring to Sheila shows he wants to pretend
                nothing has happened. He represents the aristocratic class that
                will resist social change.
              </p>
            </div>

            {/* Eva Smith */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Eva Smith / Daisy Renton</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Eva never appears on stage, yet she is the play&rsquo;s most
                important character. Her multiple names suggest she is not one
                person but a representative of all exploited working-class people.
                &ldquo;Eva&rdquo; echoes Eve (the first woman, representing all
                women), and &ldquo;Smith&rdquo; is the most common English surname.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Each member of the Birling family exploits her in a different way
                &mdash; economically, socially, sexually, and through the denial
                of charity. Her death by swallowing disinfectant is horrific and
                visceral, designed to shock the audience into recognising the
                human cost of social inequality. She is Priestley&rsquo;s
                reminder that behind every statistic is a real person.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Themes */}
        <section aria-labelledby="themes-heading">
          <h2
            id="themes-heading"
            className="text-2xl font-bold text-foreground"
          >
            Key Themes
          </h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Social Responsibility
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The play&rsquo;s central theme. Priestley argues that we are all
                connected and have a duty to care for one another. The
                Inspector&rsquo;s message &mdash; &ldquo;We are members of one
                body&rdquo; &mdash; is a direct rejection of Mr Birling&rsquo;s
                philosophy that &ldquo;a man has to look after himself.&rdquo;
                Each character&rsquo;s treatment of Eva demonstrates the
                consequences of failing to take responsibility for others. The
                play is structured to force the audience to examine their own
                social responsibility.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Class and Social Inequality
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Priestley exposes how the class system allows the wealthy to
                exploit the poor without consequence. The Birlings treat
                working-class people as disposable. Mrs Birling cannot accept
                that a girl of &ldquo;that class&rdquo; could have moral
                principles. Mr Birling sees workers as &ldquo;cheap labour.&rdquo;
                Eva&rsquo;s invisibility on stage reinforces how the upper classes
                refuse to see the humanity of those beneath them.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Generational Divide
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The younger generation (Sheila and Eric) accept responsibility
                and are changed by the Inspector&rsquo;s visit, while the older
                generation (Mr and Mrs Birling) refuse to learn. Priestley uses
                this divide to express hope: the play was written in 1945 for an
                audience that had the power to build a new, more equal society
                after the war. The young represent the possibility of change; the
                old represent the entrenched resistance to it.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Gender and Exploitation
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Eva is exploited by men at every turn. Gerald keeps her as a
                mistress; Eric forces himself on her when drunk. The play exposes
                how patriarchal society leaves women vulnerable, particularly
                working-class women with no safety net. Mrs Birling&rsquo;s
                complicity shows that women of the upper classes could be just as
                oppressive. Priestley challenges the audience to recognise that
                gender and class intersect to create compounded disadvantage.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Capitalism vs Socialism
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Mr Birling embodies capitalism: profit over people, self-interest
                over community. The Inspector embodies socialism: collective
                responsibility, empathy, and equality. Priestley, a committed
                socialist, structures the play so that Birling&rsquo;s
                capitalist philosophy is systematically discredited while the
                Inspector&rsquo;s socialist message is validated. The play is a
                political argument dressed as a detective story.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Morality and Conscience
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The Inspector acts as each character&rsquo;s conscience, forcing
                them to confront their actions. Some characters (Sheila, Eric)
                develop a genuine moral awareness; others (Mr Birling, Mrs
                Birling, Gerald) suppress their conscience once the threat of
                exposure passes. Priestley suggests that true morality requires
                permanent change, not just temporary guilt when caught.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Key quotations */}
        <section aria-labelledby="quotations-heading">
          <h2
            id="quotations-heading"
            className="text-2xl font-bold text-foreground"
          >
            Key Quotations with Analysis
          </h2>
          <p className="mt-2 text-muted-foreground">
            Learn these quotations for the closed-book exam. Each one can be
            applied to multiple themes and characters.
          </p>

          <div className="mt-6 space-y-6">
            {keyQuotations.map((q) => (
              <div
                key={q.quote}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
                <blockquote className="border-l-4 border-accent pl-4 text-lg font-medium italic text-foreground">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <p className="mt-2 text-sm font-medium text-primary">
                  {q.speaker}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {q.analysis}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Context */}
        <section aria-labelledby="context-heading">
          <h2
            id="context-heading"
            className="text-2xl font-bold text-foreground"
          >
            Historical and Social Context
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Understanding context is essential for AO3. Here are the key
              contextual areas to know for An Inspector Calls:
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Written in 1945, Set in 1912</h3>
                <p className="mt-2 text-sm">
                  This dual time frame is crucial. Priestley wrote the play just
                  as World War Two was ending, but set it in 1912, before World
                  War One. This allows him to use dramatic irony: the audience
                  knows that Birling&rsquo;s confident predictions about peace and
                  prosperity are wrong. Priestley is warning his 1945 audience not
                  to repeat the mistakes of 1912 &mdash; not to return to a
                  society of inequality and selfishness.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">The Welfare State and Post-War Britain</h3>
                <p className="mt-2 text-sm">
                  The play was first performed in 1945, the year Labour won a
                  landslide election and began building the welfare state &mdash;
                  the NHS, social security, and public housing. Priestley was a
                  vocal supporter of these reforms. The play can be read as
                  propaganda for collective responsibility: a dramatic argument
                  for why Britain needed a welfare state.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Edwardian Class System (1912 setting)</h3>
                <p className="mt-2 text-sm">
                  In 1912, Britain had rigid class divisions. The wealthy
                  industrialist class (like the Birlings) had enormous power over
                  their workers, who had few rights and no welfare safety net.
                  Women could not vote, and working-class women like Eva were
                  particularly vulnerable. There was no NHS, no unemployment
                  benefit, and charity was controlled by the upper classes.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Priestley&rsquo;s Socialism</h3>
                <p className="mt-2 text-sm">
                  J.B. Priestley was a committed socialist who believed in
                  collective responsibility, workers&rsquo; rights, and social
                  equality. He served in World War One and saw the devastating
                  effects of inequality first-hand. His &ldquo;Postscripts&rdquo;
                  radio broadcasts during World War Two (listened to by millions)
                  argued for a fairer post-war society. The play is a dramatic
                  expression of his political convictions.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">The Titanic and Dramatic Irony</h3>
                <p className="mt-2 text-sm">
                  Birling&rsquo;s claim that the Titanic is &ldquo;unsinkable&rdquo;
                  is the play&rsquo;s most obvious dramatic irony. The Titanic
                  sank on its maiden voyage in April 1912, killing over 1,500
                  people. Birling also dismisses the possibility of war &mdash;
                  World War One began in 1914, killing millions. These errors
                  destroy Birling&rsquo;s credibility and, by extension, discredit
                  his capitalist philosophy.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Women&rsquo;s Rights</h3>
                <p className="mt-2 text-sm">
                  In 1912, women could not vote and had limited legal rights.
                  Working-class women like Eva were especially powerless. The
                  suffragette movement was active but had not yet achieved its
                  goals. Eva&rsquo;s exploitation by multiple characters reflects
                  the intersecting disadvantages of class and gender. By 1945,
                  women had gained the vote and contributed significantly to the
                  war effort, making change possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Essay planning */}
        <section aria-labelledby="essay-heading">
          <h2
            id="essay-heading"
            className="text-2xl font-bold text-foreground"
          >
            Essay Planning for OCR
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The OCR An Inspector Calls question does <strong>not</strong> give
              you an extract. You must write entirely from memory. Here is a
              recommended structure:
            </p>
            <div className="space-y-3">
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                <p className="font-semibold text-primary">Introduction (3&ndash;4 sentences)</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Address the question directly. State Priestley&rsquo;s overall
                  message about the theme/character. Briefly mention the 1945/1912
                  time frame and why it matters.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                <p className="font-semibold text-primary">Paragraph 1: Beginning of the play</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  How is the theme/character established at the start? Use a
                  memorised quotation. Analyse language closely (AO2). Link to
                  context (AO3).
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                <p className="font-semibold text-primary">Paragraph 2: Middle of the play</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  How does the theme/character develop as the Inspector&rsquo;s
                  investigation unfolds? Use another quotation. Consider dramatic
                  techniques and structure.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                <p className="font-semibold text-primary">Paragraph 3: End of the play</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  How is the theme/character presented at the climax? Use the
                  Inspector&rsquo;s final speech or the phone call ending. Consider
                  Priestley&rsquo;s purpose and message.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                <p className="font-semibold text-primary">Paragraph 4: Alternative interpretation or wider significance</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Offer a different reading or consider how the audience in 1945
                  would have responded differently to a modern audience. This
                  shows evaluative thinking and gains higher marks.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                <p className="font-semibold text-primary">Conclusion</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Final evaluative judgement. What is Priestley&rsquo;s overall
                  message? Why does the play remain relevant today? Link back to
                  the question.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-accent/20 bg-primary/10 p-5">
              <h3 className="font-semibold text-primary">OCR Exam Technique Tips</h3>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>&bull; <strong>No extract:</strong> You must memorise quotations. Aim to use 4&ndash;6 short quotations in your essay.</li>
                <li>&bull; <strong>AO1:</strong> Make clear, sustained arguments that directly answer the question throughout.</li>
                <li>&bull; <strong>AO2:</strong> Analyse specific words, dramatic devices, and structural techniques. Use terminology like dramatic irony, stage directions, the well-made play structure, and the unity of time/place.</li>
                <li>&bull; <strong>AO3:</strong> Integrate context naturally. Don&rsquo;t bolt on context paragraphs &mdash; weave it into your analysis.</li>
                <li>&bull; <strong>AO4:</strong> Write clearly and accurately. Use a formal academic register.</li>
                <li>&bull; <strong>Time management:</strong> Spend approximately 45 minutes. Plan for 5 minutes before writing.</li>
              </ul>
            </div>
          </div>
        </section>

        <ExamBoardDisclaimer variant="content" className="mt-12" />

        <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
          An Inspector Calls &copy; The Estate of J.B. Priestley. Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of criticism and review.
        </p>
      </div>

    </>
  );
}
