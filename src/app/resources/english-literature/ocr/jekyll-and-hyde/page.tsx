import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/ocr/jekyll-and-hyde' },
  title: "Jekyll and Hyde Study Guide for OCR | The English Hub",
  description:
    "Comprehensive Jekyll and Hyde study guide for OCR GCSE English Literature. Characters, themes, key quotations, context, and essay planning.",
};

/* ─── Quotation data ─────────────────────────────────────────── */

const keyQuotations = [
  {
    quote: "Man is not truly one, but truly two",
    speaker: "Dr Jekyll (Chapter 10)",
    analysis:
      "Jekyll's central revelation about human nature. Stevenson uses the adverb 'truly' twice to emphasise the fundamental duality of human nature. This challenges the Victorian belief in a single, unified moral self. Jekyll argues that everyone contains both good and evil — his experiment merely separates what already exists. This reflects emerging psychological theories about the unconscious mind.",
  },
  {
    quote: "If he be Mr Hyde, I shall be Mr Seek",
    speaker: "Mr Utterson (Chapter 2)",
    analysis:
      "Utterson's pun on the children's game 'hide and seek' introduces the novella's central dynamic of concealment and pursuit. The wordplay is uncharacteristically playful for the serious lawyer, revealing his determination. The pun also foreshadows the novella's structure — it is fundamentally a story about uncovering hidden truths. 'Hyde' as a name literally means 'hidden'.",
  },
  {
    quote: "Satan's signature upon a face",
    speaker: "Mr Enfield (Chapter 1)",
    analysis:
      "Enfield's description of Hyde associates him with the Devil, placing the novella within a Christian moral framework. The alliteration of 'Satan's signature' is hissing and sinister. The idea that evil can be read on the face reflects Victorian physiognomy — the pseudo-scientific belief that character could be determined from physical appearance. Hyde's repulsiveness is the outward sign of inner evil.",
  },
  {
    quote: "He was trampling calmly over the child's body",
    speaker: "Mr Enfield (Chapter 1)",
    analysis:
      "The oxymoron 'trampling calmly' is deeply disturbing. Trampling suggests violence and chaos, while 'calmly' implies indifference — Hyde feels no remorse or emotional response. The contrast encapsulates Hyde's nature: he is capable of violence without conscience. The child victim emphasises Hyde's moral depravity — he attacks the most innocent and vulnerable members of society.",
  },
  {
    quote: "I learned to recognise the thorough and primitive duality of man",
    speaker: "Dr Jekyll (Chapter 10)",
    analysis:
      "Jekyll describes his scientific and philosophical discovery. The adjective 'thorough' suggests the duality is complete and inescapable, while 'primitive' implies it is fundamental and ancient — predating civilisation and its moral codes. The word 'duality' became central to literary criticism of the novella. Stevenson suggests that the human condition is defined by internal conflict between civilised behaviour and primal instinct.",
  },
  {
    quote: "All human beings, as we meet them, are commingled out of good and evil",
    speaker: "Dr Jekyll (Chapter 10)",
    analysis:
      "The verb 'commingled' means mixed together inseparably, suggesting that good and evil are not separate compartments but are blended within every person. The phrase 'as we meet them' emphasises that this applies to everyone without exception. This universalising statement is Stevenson's central theme — the respectable surface of Victorian society conceals the same capacity for evil that Hyde represents.",
  },
  {
    quote: "The pleasures which I made haste to seek in my disguise were, as I have said, undignified",
    speaker: "Dr Jekyll (Chapter 10)",
    analysis:
      "Jekyll's euphemistic description of Hyde's activities is deliberately vague. The word 'undignified' is a massive understatement for the violence and depravity Hyde commits. The phrase 'made haste' suggests urgency and appetite. Stevenson never specifies exactly what Hyde does — this ambiguity allows the Victorian reader's imagination to fill in the blanks, making the horror more personal and unsettling.",
  },
  {
    quote: "I feel very strongly about putting questions; it partakes too much of the style of the day of judgement",
    speaker: "Mr Enfield (Chapter 1)",
    analysis:
      "Enfield's reluctance to ask questions is characteristic of Victorian gentlemen who valued privacy and discretion above truth. The religious allusion to the 'day of judgement' suggests that asking questions is a form of moral scrutiny that gentlemen should leave to God. Stevenson critiques this code of silence — it is precisely this refusal to investigate that allows Hyde (and the hidden sins of respectable men) to flourish.",
  },
  {
    quote: "If I am the chief of sinners, I am the chief of sufferers also",
    speaker: "Dr Jekyll (Chapter 10)",
    analysis:
      "Jekyll's self-description as 'chief of sinners' echoes St Paul's words in 1 Timothy 1:15, placing his story within a Christian framework of sin and suffering. The parallel structure ('chief of sinners... chief of sufferers') suggests that sin and suffering are inseparable — wrongdoing brings its own punishment. However, Jekyll's focus on his own suffering reveals a persistent selfishness; he is more concerned with his pain than with his victims'.",
  },
  {
    quote: "the body of a self-destroyer",
    speaker: "Mr Poole (Chapter 8)",
    analysis:
      "Poole's description of Jekyll/Hyde's death avoids the word 'suicide', which was a criminal offence and social taboo in Victorian England. The compound noun 'self-destroyer' captures the deeper truth: Jekyll has literally destroyed himself by splitting his identity. The ambiguity of who has died — Jekyll or Hyde — reinforces the idea that they were always one person. Self-destruction is the inevitable consequence of attempting to separate good from evil.",
  },
  {
    quote: "I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse",
    speaker: "Dr Jekyll (Chapter 10)",
    analysis:
      "The repetition of 'slowly' conveys the gradual, insidious nature of moral corruption. The contrast between 'original and better' and 'second and worse' initially seems to maintain a clear distinction, but the word 'incorporated' (literally, 'made into one body') reveals that Jekyll and Hyde are merging. Stevenson suggests that indulging evil gradually erodes moral resistance until the evil self becomes dominant.",
  },
  {
    quote: "My devil had been long caged, he came out roaring",
    speaker: "Dr Jekyll (Chapter 10)",
    analysis:
      "Jekyll's animalistic metaphor ('caged', 'roaring') presents Hyde as a beast that has been imprisoned by the restraints of civilisation. The word 'caged' suggests that Victorian respectability was a form of containment rather than genuine goodness. When released, the repressed desires emerge with violent force. This reflects Victorian anxieties about what lay beneath the surface of respectable society.",
  },
  {
    quote: "He had always been known for charities... he was now no less distinguished for religion",
    speaker: "Narrator (Chapter 6)",
    analysis:
      "After murdering Sir Danvers Carew, Jekyll appears to become more virtuous, not less. The irony is devastating: his public respectability increases even as his private evil deepens. Stevenson exposes the hypocrisy at the heart of Victorian society — outward charity and religious devotion can coexist with, and even mask, profound moral corruption.",
  },
  {
    quote: "The large handsome face of Dr Jekyll grew pale to the very lips, and there came a blackness about his eyes",
    speaker: "Narrator (Chapter 3)",
    analysis:
      "Jekyll's physical reaction when Utterson mentions Hyde reveals the emotional turmoil beneath his composed exterior. The colour draining from his face ('pale to the very lips') suggests shock and fear, while the 'blackness about his eyes' foreshadows the darkness within him. Stevenson uses physical description to hint at psychological truth — the body betrays what the mind tries to conceal.",
  },
  {
    quote: "This was the shocking thing; that the slime of the pit seemed to utter cries and voices",
    speaker: "Mr Utterson (Chapter 10)",
    analysis:
      "Utterson's reaction to Jekyll's confession uses Biblical imagery: 'the slime of the pit' evokes Hell. The word 'slime' connotes something primitive and repulsive. The shock is that this 'slime' can 'utter cries and voices' — evil is not mute and distant but articulate and human. Stevenson disturbs the reader by showing that evil is not an external threat but exists within ordinary, respectable people.",
  },
  {
    quote: "It was Hyde, after all, and Hyde alone, that was guilty",
    speaker: "Dr Jekyll (Chapter 10)",
    analysis:
      "Jekyll's attempt to distance himself from Hyde's actions reveals his continued self-deception. The phrase 'Hyde alone' tries to separate them into two distinct moral agents, but the novella has shown they are one person. Stevenson critiques the human tendency to deny responsibility for our darker impulses by projecting them onto an 'other'. Jekyll's refusal to accept his own guilt is itself a moral failing.",
  },
  {
    quote: "Mr Utterson the lawyer was a man of a rugged countenance, that was never lighted by a smile... yet somehow lovable",
    speaker: "Narrator (Chapter 1)",
    analysis:
      "The novella's opening description of Utterson establishes the Victorian ideal of restraint and repression. He suppresses emotion ('never lighted by a smile') yet maintains human connection ('somehow lovable'). The word 'somehow' suggests even the narrator cannot explain how warmth survives beneath such rigid self-control. Utterson embodies the tension between surface respectability and hidden feeling that defines the novella's world.",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function OCRJekyllAndHydePage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary to-primary-600 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-literature/ocr"
            className="inline-flex items-center gap-1 text-sm text-white/70 transition hover:text-white"
          >
            &larr; OCR English Literature
          </Link>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Jekyll and Hyde: Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Everything you need to know about The Strange Case of Dr Jekyll and
            Mr Hyde for OCR GCSE English Literature Paper 2, Section B &mdash;
            19th Century Prose.
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
            <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
              <p className="font-semibold text-primary">Paper 2: Exploring Effects and Impact</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Section B &mdash; 19th Century and Modern Prose/Drama. You will
                answer one question on Jekyll and Hyde. The question is an
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
                <p className="font-semibold text-foreground">Chapters 1&ndash;2: The Door and the Search</p>
                <p className="mt-2 text-sm">
                  Mr Utterson and Mr Enfield are walking in London when Enfield
                  tells the story of a sinister man, Mr Hyde, who trampled a
                  child in the street and paid compensation with a cheque signed
                  by the respectable Dr Jekyll. Utterson, Jekyll&rsquo;s lawyer,
                  discovers that Jekyll&rsquo;s will leaves everything to Hyde.
                  Troubled, Utterson seeks out Hyde and is repulsed by his
                  appearance, feeling an inexplicable sense of evil.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Chapters 3&ndash;4: Jekyll&rsquo;s Dinner Party and the Carew Murder</p>
                <p className="mt-2 text-sm">
                  Utterson raises his concerns with Jekyll, who dismisses them
                  and asks Utterson to respect his privacy. Nearly a year later,
                  Hyde brutally murders Sir Danvers Carew, a distinguished MP,
                  beating him to death with a cane. Utterson leads police to
                  Hyde&rsquo;s Soho lodgings, but Hyde has vanished. Jekyll
                  claims to have broken with Hyde and produces a letter — which
                  Utterson&rsquo;s clerk later suggests was forged by Jekyll
                  himself.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Chapters 5&ndash;7: Jekyll&rsquo;s Withdrawal</p>
                <p className="mt-2 text-sm">
                  Jekyll appears reformed and becomes sociable and charitable.
                  However, he suddenly withdraws from society. Dr Lanyon, a
                  mutual friend, falls mysteriously ill after a shocking
                  experience and dies, leaving Utterson a letter not to be
                  opened until Jekyll&rsquo;s death. Enfield and Utterson see
                  Jekyll at his window; his expression changes to one of terror
                  and he slams the window shut.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Chapter 8: The Last Night</p>
                <p className="mt-2 text-sm">
                  Jekyll&rsquo;s servant Poole comes to Utterson in distress,
                  saying his master has locked himself in the laboratory and his
                  voice has changed. They break down the door and find Hyde&rsquo;s
                  body, dead from poison, wearing Jekyll&rsquo;s clothes. Jekyll
                  is nowhere to be found. Utterson discovers letters from both
                  Lanyon and Jekyll.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-4">
                <p className="font-semibold text-foreground">Chapters 9&ndash;10: The Revelations</p>
                <p className="mt-2 text-sm">
                  Lanyon&rsquo;s letter reveals that he witnessed Hyde
                  transforming into Jekyll, and the shock destroyed his health.
                  Jekyll&rsquo;s own confession explains everything: he created a
                  potion to separate his dual nature, becoming Hyde to indulge
                  his darkest impulses without consequences. Over time, Hyde grew
                  stronger and the transformations became involuntary. Unable to
                  obtain more of the original chemical compound, Jekyll faces
                  permanent transformation into Hyde and takes his own life.
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
            {/* Dr Jekyll */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Dr Henry Jekyll</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Jekyll is a wealthy, respected doctor and scientist who
                represents the Victorian ideal of respectability. He is
                described as &ldquo;a large, well-made, smooth-faced man,&rdquo;
                known for his charity and social standing. However, beneath this
                respectable exterior, Jekyll feels constrained by the demands of
                Victorian morality.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                His experiment to separate his dual nature is born from a desire
                to indulge his darker impulses without damaging his reputation.
                This makes him morally culpable &mdash; he does not stumble into
                evil but actively seeks it out. His eventual inability to control
                Hyde represents the danger of indulging repressed desires: once
                released, they consume the individual. Jekyll&rsquo;s tragedy is
                that he created a monster he could not control, and his death is
                the ultimate consequence of his hubris.
              </p>
              <div className="mt-4 rounded border border-accent/20 bg-accent-50 p-3">
                <p className="text-sm font-medium text-accent-700">Key character arc</p>
                <p className="mt-1 text-sm text-accent-800">
                  Respectable but repressed &rarr; Creates Hyde to indulge
                  desires &rarr; Enjoys the freedom &rarr; Loses control &rarr;
                  Trapped by his own creation &rarr; Self-destruction
                </p>
              </div>
            </div>

            {/* Mr Hyde */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Mr Edward Hyde</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Hyde is the physical embodiment of Jekyll&rsquo;s repressed evil.
                He is described as small, deformed, and repulsive &mdash; every
                character who meets him feels an instinctive revulsion. His
                appearance reflects Victorian physiognomy, the belief that
                physical features reveal moral character. His smaller stature
                represents the fact that Jekyll has suppressed his evil side for
                years, so it is &ldquo;less exercised.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Hyde is characterised by violence without conscience. He tramples
                a child, murders Sir Danvers Carew with savage glee, and shows
                no remorse. He grows stronger as Jekyll continues to use the
                potion, eventually becoming the dominant personality. Stevenson
                suggests that evil, once indulged, does not remain contained
                &mdash; it grows and eventually overwhelms the good.
              </p>
            </div>

            {/* Mr Utterson */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Mr Gabriel Utterson</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Utterson is the novella&rsquo;s primary narrator and viewpoint
                character. As a lawyer, he represents Victorian rationality,
                respectability, and discretion. He is loyal to Jekyll, cautious
                in his judgements, and determined to find the truth while
                protecting his friend&rsquo;s reputation.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                However, Utterson also embodies the Victorian culture of
                repression and secrecy that enables Hyde to exist. He suppresses
                his own pleasures (&ldquo;He was austere with himself&rdquo;),
                avoids asking difficult questions, and prioritises discretion
                over truth. Stevenson uses Utterson to show how the Victorian
                gentleman&rsquo;s code of privacy and silence creates the
                conditions for hidden evil to thrive.
              </p>
            </div>

            {/* Dr Lanyon */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Dr Hastie Lanyon</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Lanyon represents conventional, orthodox science. He dismissed
                Jekyll&rsquo;s research as &ldquo;unscientific balderdash,&rdquo;
                preferring traditional, rational approaches. His death after
                witnessing Hyde&rsquo;s transformation symbolises the destruction
                of the rational Victorian worldview when confronted with truths
                it cannot accommodate.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Lanyon&rsquo;s inability to survive the truth suggests that
                Victorian society could not cope with the reality of human
                duality. He represents those who would rather die than accept
                that respectable men harbour dark desires. His letter provides
                one of the novella&rsquo;s two revelation chapters, giving the
                reader an external perspective on Jekyll&rsquo;s transformation.
              </p>
            </div>

            {/* Sir Danvers Carew */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary">Sir Danvers Carew</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Sir Danvers Carew is an elderly MP whose brutal murder by Hyde
                marks the novella&rsquo;s turning point. Described as
                &ldquo;beautiful&rdquo; and &ldquo;innocent,&rdquo; he represents
                the vulnerable victims of unchecked evil. His murder is the most
                violent scene in the novella and demonstrates that Hyde&rsquo;s
                violence is escalating beyond control. The murder of such a
                prominent figure also brings the threat of public exposure,
                raising the stakes for Jekyll.
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
                Duality of Human Nature
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The novella&rsquo;s central theme. Stevenson argues that every
                human being contains both good and evil, and that these forces
                are &ldquo;commingled&rdquo; inseparably. Jekyll&rsquo;s
                experiment attempts to separate them, but this proves impossible
                &mdash; the result is not a pure good self and a pure evil self,
                but Jekyll (who retains his moral awareness) and Hyde (who is
                pure evil). Stevenson suggests that the human condition is
                defined by this internal conflict, and that attempting to deny
                or separate the two sides is catastrophic.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Repression and Victorian Hypocrisy
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Victorian society demanded strict moral respectability,
                particularly from professional men like Jekyll. Stevenson
                exposes the hypocrisy of this system: the more strictly
                society represses natural desires, the more violently they
                emerge when released. Jekyll creates Hyde precisely because
                Victorian morality will not allow him to express his full
                humanity. The novella argues that repression does not eliminate
                evil &mdash; it concentrates and intensifies it.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Science and Its Limits
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Jekyll&rsquo;s experiment represents science without moral
                restraint. He pursues knowledge for personal gratification,
                not for the benefit of humanity. The conflict between Jekyll
                and Lanyon mirrors a real Victorian debate between
                &ldquo;transcendental&rdquo; science (pushing boundaries) and
                &ldquo;rational&rdquo; science (staying within established
                limits). Stevenson suggests that science divorced from ethics
                is dangerous &mdash; a theme that resonated with Victorian
                anxieties about Darwinism, vivisection, and rapid
                technological change.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Secrecy and Silence
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                The novella is saturated with secrecy. Characters avoid asking
                questions, keep letters sealed until death, and prioritise
                reputation over truth. Enfield&rsquo;s reluctance to
                &ldquo;put questions&rdquo; and Utterson&rsquo;s cautious
                discretion reflect a Victorian gentleman&rsquo;s code that
                valued privacy above all. Stevenson shows that this culture
                of secrecy enables evil: Hyde thrives in the spaces that
                respectable society refuses to examine.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Appearance vs Reality
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Nothing in the novella is as it seems. Jekyll&rsquo;s
                respectable exterior conceals dark desires. The two entrances
                to his house &mdash; the handsome front door and the sinister
                back door &mdash; symbolise his double life. Hyde&rsquo;s
                physical deformity is the visible sign of an inner evil that
                other characters keep hidden. Stevenson challenges the
                Victorian assumption that a respectable appearance guarantees
                a virtuous character.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Violence and Primitiveness
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Hyde is associated with animalistic imagery: he is
                &ldquo;ape-like,&rdquo; moves with &ldquo;monkey-like
                agility,&rdquo; and his violence is savage and instinctive.
                This connects to Darwin&rsquo;s theory of evolution (published
                1859), which disturbed Victorians by suggesting humans were
                descended from animals. Hyde represents the primitive,
                animalistic self that civilisation has suppressed but not
                eliminated. Stevenson suggests that the beast within is always
                threatening to break free.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted p-5">
              <h3 className="text-lg font-semibold text-foreground">
                The Gothic
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Stevenson employs Gothic conventions to create atmosphere and
                convey meaning. London is shrouded in fog, lit by gaslight,
                and filled with narrow, sinister streets. The setting mirrors
                the novella&rsquo;s themes: the fog represents the obscuring
                of truth, the darkness represents hidden evil, and the
                labyrinthine streets represent the complexity of human nature.
                The supernatural transformation and the theme of the double
                (doppelg&auml;nger) are classic Gothic elements.
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
              contextual areas to know for Jekyll and Hyde:
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Victorian Respectability</h3>
                <p className="mt-2 text-sm">
                  Victorian society placed enormous importance on public
                  reputation, moral conduct, and social propriety, particularly
                  for professional men. Gentlemen were expected to be rational,
                  restrained, and morally upright. This created intense pressure
                  to conceal any behaviour that deviated from the ideal.
                  Jekyll&rsquo;s double life is a product of this culture &mdash;
                  he cannot be both respectable and free, so he creates Hyde to
                  satisfy desires that respectability forbids.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Darwin and Evolution</h3>
                <p className="mt-2 text-sm">
                  Charles Darwin&rsquo;s <em>On the Origin of Species</em> (1859)
                  and <em>The Descent of Man</em> (1871) shocked Victorian
                  society by proposing that humans evolved from animals. This
                  raised terrifying questions: if we are descended from beasts,
                  is the beast still within us? Hyde&rsquo;s ape-like appearance
                  and animalistic behaviour represent Victorian fears of
                  evolutionary regression &mdash; the idea that civilised humans
                  could revert to a primitive state.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Freud and the Unconscious Mind</h3>
                <p className="mt-2 text-sm">
                  Although Freud&rsquo;s major works were published after the
                  novella (1886), the idea of the unconscious was emerging.
                  Jekyll&rsquo;s experiment can be read as an attempt to access
                  the unconscious &mdash; the hidden part of the psyche where
                  repressed desires are stored. Hyde represents the &ldquo;id&rdquo;
                  (primitive desires), Jekyll the &ldquo;ego&rdquo; (the
                  conscious, social self), and Victorian society the
                  &ldquo;superego&rdquo; (the moral rules that constrain
                  behaviour).
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Victorian London</h3>
                <p className="mt-2 text-sm">
                  London in the 1880s was a city of stark contrasts. Wealthy,
                  respectable areas existed alongside slums filled with poverty,
                  crime, and vice. The novella was published in the same decade
                  as the Jack the Ripper murders (1888), which terrified London
                  and exposed the dark underside of the city. Stevenson uses
                  London&rsquo;s geography symbolically: Jekyll&rsquo;s house
                  has a respectable front entrance and a sinister back door
                  leading to a different street, mirroring his double life.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Science and Religion</h3>
                <p className="mt-2 text-sm">
                  The Victorian era saw increasing tension between scientific
                  progress and religious belief. Jekyll&rsquo;s experiment
                  transgresses both scientific ethics and religious morality
                  &mdash; he attempts to play God by altering human nature.
                  Stevenson draws on the tradition of the &ldquo;over-reacher&rdquo;
                  (like Frankenstein and Faustus) &mdash; figures who are punished
                  for pursuing knowledge beyond human limits.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Robert Louis Stevenson</h3>
                <p className="mt-2 text-sm">
                  Stevenson grew up in Edinburgh, a city famous for its
                  dramatic division between the respectable New Town and the
                  disreputable Old Town. He was also aware of the case of Deacon
                  Brodie, an 18th-century Edinburgh man who was a respected
                  cabinet maker by day and a burglar by night. These influences
                  are evident in the novella&rsquo;s exploration of duality and
                  hidden lives.
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
              The OCR Jekyll and Hyde question does <strong>not</strong> give
              you an extract. You must write entirely from memory. Here is a
              recommended structure:
            </p>
            <div className="space-y-3">
              <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                <p className="font-semibold text-primary">Introduction (3&ndash;4 sentences)</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Address the question directly. State Stevenson&rsquo;s overall
                  message about the theme/character. Briefly reference the
                  Victorian context and the concept of duality.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                <p className="font-semibold text-primary">Paragraph 1: How the theme/character is introduced</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Analyse the early chapters. Use a memorised quotation and
                  explore language closely (AO2). Consider the narrative
                  perspective and what is withheld from the reader.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                <p className="font-semibold text-primary">Paragraph 2: Development through the middle chapters</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  How does the theme/character develop? Consider the escalation
                  of violence, the deepening mystery, and the structural
                  technique of withholding information. Link to context.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                <p className="font-semibold text-primary">Paragraph 3: The revelations (Chapters 9&ndash;10)</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  How is the theme/character illuminated by the final
                  revelations? Analyse Jekyll&rsquo;s confession and what it
                  reveals about Stevenson&rsquo;s message. Consider why
                  Stevenson saves the truth until the end.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                <p className="font-semibold text-primary">Paragraph 4: Wider significance</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  What is Stevenson&rsquo;s message about Victorian society?
                  Consider alternative interpretations. How does the novella
                  challenge the reader&rsquo;s assumptions about human nature?
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                <p className="font-semibold text-primary">Conclusion</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Final evaluative judgement. What is Stevenson&rsquo;s
                  overall message? Why does the novella remain powerful today?
                  Link back to the question.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-accent/20 bg-accent-50 p-5">
              <h3 className="font-semibold text-accent-700">OCR Exam Technique Tips</h3>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>&bull; <strong>No extract:</strong> You must memorise quotations. Aim to use 4&ndash;6 short quotations in your essay.</li>
                <li>&bull; <strong>AO1:</strong> Make clear, sustained arguments that directly answer the question. Explore how meaning develops across the novella.</li>
                <li>&bull; <strong>AO2:</strong> Analyse specific words, imagery, narrative structure, and Gothic conventions. Discuss Stevenson&rsquo;s use of multiple narrators, the epistolary form (letters), and the delayed revelation structure.</li>
                <li>&bull; <strong>AO3:</strong> Integrate context naturally. Link to Victorian respectability, Darwinism, the Gothic tradition, and the culture of secrecy. Do not write separate context paragraphs.</li>
                <li>&bull; <strong>AO4:</strong> Write clearly and accurately. Use a formal academic register with precise literary vocabulary.</li>
                <li>&bull; <strong>Time management:</strong> Spend approximately 45 minutes. Plan for 5 minutes before writing.</li>
              </ul>
            </div>
          </div>
        </section>

        <ExamBoardDisclaimer variant="content" className="mt-12" />
      </div>

    </>
  );
}
