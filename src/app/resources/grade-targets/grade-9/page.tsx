import type { Metadata } from "next";
import Link from "next/link";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/grade-targets/grade-9' },
  title: "Getting a Grade 9 | Grade Targets | The English Hub",
  description:
    "What makes a Grade 9 exceptional in GCSE English. Perceptive and critical analysis, originality, sophistication, example Grade 9 responses, and expert tips for achieving the highest grade.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const WHAT_MAKES_EXCEPTIONAL = [
  {
    title: "Conceptualised responses",
    description:
      "A Grade 9 response is not a series of good points -- it is a sustained, coherent argument built around a central concept or thesis. Every paragraph connects to and develops this overarching idea. The examiner should be able to summarise your entire essay in one sentence, and that sentence should be interesting.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Critical and exploratory thinking",
    description:
      "Grade 9 candidates do not simply accept texts at face value. They question, challenge, and probe. They consider how texts construct meaning, how readers are positioned, and how interpretations change depending on context. They treat literature as an ongoing conversation, not a fixed set of answers.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: "Originality of thought",
    description:
      "The best Grade 9 responses say something the examiner has not read before. This does not mean being controversial for the sake of it -- it means finding a fresh angle, a surprising connection, or an interpretation that demonstrates genuine independent thinking rather than rehearsed points.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    title: "Sophistication in every dimension",
    description:
      "Grade 9 is not just about analysis -- it is about the quality of the writing itself. The essay should read fluently, with varied and controlled sentence structures, precise vocabulary, and elegant transitions. The writing should be a pleasure to read, not just technically accurate.",
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
  },
];

const PERCEPTIVE_ANALYSIS = [
  {
    title: "Reading against the grain",
    description:
      "Instead of accepting the 'obvious' interpretation, consider what a text might be doing on a deeper level. Does it reinforce or subvert expectations? Is the narrator reliable? What assumptions does the text make about its reader?",
    example:
      "While the Inspector is typically read as Priestley's moral mouthpiece, there is something troubling about his methods. He manipulates, deceives, and bullies confessions from the Birlings -- tactics that mirror the very power imbalances he supposedly condemns. Perhaps Priestley is suggesting that moral awakening cannot be imposed from above; it must be chosen. The Inspector succeeds with Sheila precisely because she chooses to accept responsibility, not because she is forced to.",
  },
  {
    title: "Analysing what is absent",
    description:
      "Some of the most powerful effects in literature come from what is not said, not shown, or not done. Grade 9 candidates notice these silences and absences and explore their significance.",
    example:
      "What is most striking about the ending of 'A Christmas Carol' is what Dickens does not show us: the Cratchits' reaction to Scrooge's transformation. We never see whether they trust his sudden generosity or view it with suspicion. This omission is telling -- Dickens is less interested in realistic psychology than in moral fable. The novella's power lies not in its plausibility but in its conviction that change is possible, even for those who seem beyond redemption.",
  },
  {
    title: "Connecting form and meaning",
    description:
      "The very best responses consider how the form of a text (novel, play, poem, article) shapes its meaning. Why did the writer choose this form? How does the form enable or constrain what can be said?",
    example:
      "Stevenson's choice of multiple narrators in 'Jekyll and Hyde' is not merely a Victorian convention but a structural embodiment of the novel's central theme. Just as Jekyll's identity is fragmented, so too is the narrative itself. The reader, like Utterson, must piece together partial accounts to approach a truth that remains fundamentally elusive. The form enacts the content: the impossibility of knowing another person completely.",
  },
];

const ORIGINALITY_SOPHISTICATION = [
  {
    principle: "Move from technique to concept",
    weak: "Shakespeare uses dramatic irony when Macbeth says 'So fair and foul a day I have not seen.'",
    strong:
      "Macbeth's unconscious echo of the witches' 'fair is foul' in his first line collapses the boundary between the supernatural and the human. Shakespeare suggests that Macbeth was always susceptible to the witches' influence -- perhaps that the evil they represent was never external to him at all, but a reflection of ambitions he already harboured.",
  },
  {
    principle: "Challenge conventional readings",
    weak: "The Ghost of Christmas Past represents Scrooge's memories and shows him what he has lost.",
    strong:
      "The Ghost of Christmas Past is perhaps the most psychologically complex of the three spirits, because it forces Scrooge to confront not his cruelty but his vulnerability. The tears Scrooge sheds are not tears of guilt but of grief -- for the young man he was and the life he might have lived. Dickens implies that Scrooge's miserliness is not the cause of his isolation but a defence against the pain of emotional connection, making his transformation not a moral correction but a courageous act of reopening old wounds.",
  },
  {
    principle: "Make connections beyond the text",
    weak: "The poem uses a first-person narrator to share the speaker's feelings.",
    strong:
      "The confessional mode of the poem positions the reader as both confidant and judge. Like Browning's dramatic monologues, the speaker reveals more than they intend -- their self-justifications inadvertently exposing the very flaws they seek to conceal. The form implicates the reader: by listening, we become complicit in the speaker's worldview, forced to decide whether understanding constitutes forgiveness.",
  },
];

const EXAMPLE_RESPONSES = [
  {
    type: "Language Analysis",
    question: "Evaluate how successfully the writer creates a sense of isolation.",
    extract:
      "\"She had not spoken to another person in four days. The words, when they finally came, felt strange in her mouth -- foreign objects, shapes her tongue had forgotten how to form. The mirror showed a face she half-recognised, as if she were becoming someone else entirely, or perhaps no one at all.\"",
    response:
      "The writer creates isolation not as a physical condition but as a process of psychological dissolution, and it is this distinction that makes the passage so unsettling. The opening sentence -- \"She had not spoken to another person in four days\" -- is deliberately flat in its delivery, mimicking the emotional numbness that prolonged solitude produces. Four days is not, objectively, a very long time, yet the writer treats it as catastrophic, suggesting that human identity is far more fragile than we like to believe.\n\nThe metaphor of words as \"foreign objects\" is where the passage becomes genuinely disturbing. Language is the most fundamental tool of human connection, and by presenting it as something alien -- something the body rejects -- the writer implies that isolation does not merely deprive us of company but actively erodes our capacity for it. The verb \"forgotten\" is crucial: it suggests not a temporary absence but a permanent loss, as if the neural pathways of communication are being dismantled through disuse. There is an echo here of Orwell's Newspeak -- the idea that without language, certain thoughts become impossible. The character is not just alone; she is losing the ability to be anything else.\n\nThe final image of the mirror is the passage's most devastating moment. The phrase \"half-recognised\" occupies a disturbing middle ground between self and other, suggesting a fracturing of identity that is still in progress. But it is the final clause -- \"or perhaps no one at all\" -- that elevates the passage from effective to exceptional. The word \"perhaps\" introduces uncertainty even into the character's self-narration, as if she can no longer trust her own perception. The phrase \"no one at all\" does not mean death but something arguably worse: the dissolution of selfhood while the body continues to exist. The writer has taken a simple premise -- a person alone -- and constructed from it a meditation on the fragility of identity itself.",
    annotation:
      "This is a Grade 9 response. It goes beyond analysis of technique to develop a conceptualised argument (isolation as psychological dissolution). It makes an intertextual connection (Orwell's Newspeak) that enriches the analysis. It analyses what individual words do ('perhaps,' 'forgotten') at a forensic level. The writing itself is sophisticated, with varied sentence structures and precise vocabulary. The response evaluates the text's success by explaining why specific choices elevate it from 'effective to exceptional.'",
  },
  {
    type: "Creative Writing",
    question: "Write a narrative about a significant moment of change.",
    response:
      "The letter arrived on a Tuesday, which felt wrong. Significant things should happen on days that carry weight -- Mondays with their sharp edges, or Fridays thick with accumulated exhaustion. But Tuesday was a nothing day, a filler episode in the week's narrative, and perhaps that was the point. The universe, if it had a sense of humour, would choose exactly this kind of day to rearrange everything.\n\nShe read it standing up, which she would later realise was a mistake. Bad news should be received sitting down, the way doctors deliver diagnoses -- cushioned, prepared for, a chair already positioned for the moment the legs stop working. But she read it standing in the kitchen, one hand on the counter, the other holding six sentences that unmade eighteen years of certainty.\n\nThe house continued around her. The fridge hummed its indifferent hymn. Upstairs, the boiler clicked and sighed, heating water for a bath that nobody would take. Outside, Mrs Patterson's terrier barked at a postman who had already moved on. The world, it turned out, did not pause for personal catastrophe. It was this -- the sheer, unbothered continuity of everything -- that undid her more than the words themselves.\n\nShe folded the letter. Unfolded it. Read it again, as if the sentences might rearrange themselves into something bearable on a second attempt. They did not. The words sat where they were, patient and permanent, immune to the desperate alchemy of hope.\n\nLater -- minutes? hours? -- she would make tea. Not because she wanted tea, but because the ritual of it -- kettle, cup, bag, pour -- was the only language she had left. The body, when the mind fails, falls back on muscle memory: the small, rehearsed gestures of normalcy that hold a person together when everything else has come apart.",
    annotation:
      "This is a Grade 9 creative response. The voice is distinctive and controlled -- wry, intelligent, emotionally precise without being sentimental. The structural choices are deliberate: the essay delays the content of the letter entirely, making the reader experience the same disorientation as the character. The imagery is original ('filler episode in the week's narrative,' 'the desperate alchemy of hope'). Sentence structures are varied for effect, from long flowing observations to the devastating simplicity of 'They did not.' The philosophical register ('the sheer, unbothered continuity of everything') gives the piece intellectual weight. The ending is restrained and all the more powerful for it.",
  },
  {
    type: "Literature Essay",
    question: "How does Dickens use the character of Scrooge to present ideas about change?",
    response:
      "Dickens does not simply present Scrooge's transformation as a moral lesson; he constructs it as an argument about the nature of selfhood. The novella's radical proposition is that identity is not fixed but performative -- that we become who we choose to be, and that this choice remains available to us regardless of how long we have spent being someone else.\n\nScrooge's opening characterisation is deliberately excessive. Dickens describes him as 'hard and sharp as flint, from which no steel had ever struck out generous fire,' a simile that ostensibly confirms Scrooge's irredeemable nature. Yet the very extravagance of the description hints at artifice -- as if Dickens is constructing a caricature that the narrative will subsequently dismantle. The flint simile is particularly significant: flint is not incapable of producing fire, it simply requires the right force. The image contains within it the possibility of its own contradiction, foreshadowing the transformation to come.\n\nThe stave structure -- borrowed from the form of a carol -- reinforces the idea that change follows a pattern, almost a melody. Each spirit does not merely show Scrooge different times but different versions of himself: the vulnerable child, the ambitious young man, the isolated miser, and finally, the unmourned corpse. Dickens uses the fantastical framework of the ghost story to achieve something profoundly psychological -- a forced confrontation with the self as constructed over time. Scrooge does not learn new information from the spirits; he is compelled to look at information he has spent decades refusing to acknowledge.\n\nThe transformation scene is often read as triumphant, but there is something unsettling about its speed and totality. Scrooge wakes 'as light as a feather, as happy as an angel, as merry as a schoolboy,' and the tricolon of similes -- each more hyperbolic than the last -- mirrors the excessive negativity of the opening. Dickens perhaps suggests that Scrooge has not so much changed as switched performances, replacing one extreme with another. However, this reading may be too cynical; the novella's power lies in its insistence that joy, like misery, is a choice, and that choosing joy -- even suddenly, even implausibly -- is an act of courage. Dickens wrote 'A Christmas Carol' during a period of acute social crisis, and the speed of Scrooge's transformation serves a political as well as narrative purpose: it argues that social reform need not be gradual. Change is available now, to anyone willing to open their eyes.\n\nUltimately, Scrooge's journey from isolation to community enacts Dickens's deepest conviction: that human beings are not autonomous individuals but nodes in a network of mutual obligation. The closing image of Scrooge as a 'second father' to Tiny Tim is significant because fatherhood is not a solitary role -- it is defined entirely through relationship. Scrooge's transformation is complete not when he feels differently but when he acts differently, embedding himself in the lives of others. For Dickens, change is not an internal epiphany but an external practice.",
    annotation:
      "This is a convincing Grade 9 Literature response. It is built around a central concept (identity as performative/chosen) that is sustained and developed throughout. It challenges conventional readings (questioning whether the transformation is genuinely transformative or a 'switched performance'). It analyses form (stave structure, simile patterns) in relation to meaning. Context is seamlessly integrated, not as bolted-on paragraphs but as part of the analytical argument. The writing is itself sophisticated and a pleasure to read. The final paragraph achieves genuine insight in its distinction between internal epiphany and external practice.",
  },
];

const EXPERT_TIPS = [
  {
    tip: "Think in concepts, not techniques",
    detail:
      "Before you write, ask yourself: 'What is this text really about?' Not the plot or the topic, but the underlying idea. Build your entire response around that concept. A Grade 9 essay about Macbeth might be about the performance of masculinity, the impossibility of escaping conscience, or the corruption of language by power -- not just 'ambition.'",
  },
  {
    tip: "Write your thesis first",
    detail:
      "Spend your planning time crafting one sentence that captures your argument. Everything in your essay should develop this thesis. If a paragraph does not connect to it, cut it. Coherence is more valuable than coverage.",
  },
  {
    tip: "Be brave with your interpretations",
    detail:
      "Examiners reward genuine thinking, even if it is unconventional. If you can support an unusual reading with evidence, it will impress more than a safe, rehearsed response. The worst that can happen is you score a 7 -- but the best is a response that genuinely excites the examiner.",
  },
  {
    tip: "Read critical essays and literary journalism",
    detail:
      "Read book reviews in quality newspapers, literary essays, and academic introductions to your set texts. This exposes you to the kind of analytical thinking and vocabulary that characterises Grade 9 work. Absorb the style, not just the content.",
  },
  {
    tip: "Master the art of the short sentence",
    detail:
      "Grade 9 writing knows when to stop. After a long, complex sentence, a short one can be devastating. 'The world continued. She did not.' Learn to use brevity as a weapon, in both analytical and creative writing.",
  },
  {
    tip: "Treat your writing as craft",
    detail:
      "In creative writing, plan your techniques as deliberately as a painter plans a composition. Decide in advance: What is your central image? Where will you shift tone? What will your final sentence be? The best creative writing feels spontaneous but is meticulously planned.",
  },
  {
    tip: "Connect to the bigger picture",
    detail:
      "Grade 9 responses show awareness of how texts relate to broader literary, historical, and philosophical ideas. How does this poem connect to the Romantic tradition? How does this novel challenge Victorian values? This contextual fluency separates exceptional candidates from very good ones.",
  },
  {
    tip: "Revise by writing, not re-reading",
    detail:
      "The most effective revision for Grade 9 is practice: write timed essays, get feedback, rewrite. Reading your notes is passive; writing responses is active. Aim to write at least two full practice essays per week in the lead-up to exams.",
  },
];

/* ─── Icons ──────────────────────────────────────────────────── */

function ArrowRight() {
  return (
    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function Grade9Page() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/resources/grade-targets"
            className="inline-flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Grade Targets
          </Link>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-lg">
              9
            </span>
            <div className="text-left">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Getting a Grade 9
              </h1>
              <p className="text-sm font-medium text-white/80 uppercase tracking-wide">
                Exceptional
              </p>
            </div>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Grade 9 places you in the top 2% of all candidates. It demands
            critical thinking, originality, and writing that is genuinely
            compelling. Here is what it takes.
          </p>
        </div>
      </section>

      {/* What makes Grade 9 exceptional */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">
          What makes Grade 9 exceptional?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Grade 9 is not just &quot;Grade 7 but better.&quot; It represents a
          qualitative shift in how you think about and respond to texts. These
          are the four pillars of exceptional work.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {WHAT_MAKES_EXCEPTIONAL.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border-2 border-primary/20 bg-card p-6 shadow-md"
            >
              {item.icon}
              <h3 className="mt-3 text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Perceptive / Critical Analysis */}
      <section className="bg-muted px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">
            Perceptive and critical analysis
          </h2>
          <p className="mt-2 text-muted-foreground">
            These are the analytical moves that distinguish Grade 9 from Grade 7.
            They require you to think differently, not just more.
          </p>

          <div className="mt-8 space-y-6">
            {PERCEPTIVE_ANALYSIS.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <h3 className="text-lg font-bold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-4 rounded-lg border border-primary/10 bg-primary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Example
                  </p>
                  <p className="mt-1 text-sm italic leading-relaxed text-muted-foreground">
                    {item.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Originality and sophistication */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">
          Originality and sophistication
        </h2>
        <p className="mt-2 text-muted-foreground">
          See how the same material can be approached at different levels.
          The difference is not knowledge -- it is thinking.
        </p>

        <div className="mt-8 space-y-6">
          {ORIGINALITY_SOPHISTICATION.map((item) => (
            <div
              key={item.principle}
              className="rounded-xl border border-border bg-card shadow-md overflow-hidden"
            >
              <div className="border-b border-border bg-muted px-6 py-3">
                <h3 className="font-bold text-foreground">{item.principle}</h3>
              </div>
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                <div className="p-5">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                    Competent (5-7)
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.weak}
                  </p>
                </div>
                <div className="p-5 bg-primary/5">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    Exceptional (9)
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.strong}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Example responses */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">
            Example Grade 9 Responses
          </h2>
          <p className="mt-2 text-muted-foreground">
            These responses demonstrate the level of thinking, analysis, and
            writing quality that characterises Grade 9 work. Study them not to
            memorise, but to understand how exceptional candidates think.
          </p>

          <div className="mt-8 space-y-8">
            {EXAMPLE_RESPONSES.map((example) => (
              <div
                key={example.type}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-md"
              >
                <div className="border-b border-border bg-muted px-6 py-4">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {example.type}
                  </span>
                  <p className="mt-2 font-semibold text-foreground">
                    {example.question}
                  </p>
                  {example.extract && (
                    <p className="mt-2 text-sm italic text-muted-foreground">
                      {example.extract}
                    </p>
                  )}
                </div>

                <div className="px-6 py-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Student Response
                  </h4>
                  <div className="mt-2 rounded-lg bg-muted p-4">
                    {example.response.split("\n\n").map((para, i) => (
                      <p
                        key={i}
                        className="mt-3 first:mt-0 text-sm leading-relaxed text-muted-foreground"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="border-t border-primary/20 bg-primary/5 px-6 py-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Examiner Comment
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {example.annotation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert tips */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">Expert Tips</h2>
        <p className="mt-2 text-muted-foreground">
          Advice from examiners and top-achieving students on how to reach the
          highest grade consistently.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {EXPERT_TIPS.map((item) => (
            <div
              key={item.tip}
              className="rounded-xl border border-border bg-card p-5 shadow-md"
            >
              <h3 className="font-bold text-foreground">{item.tip}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link
            href="/resources/grade-targets/grade-7"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Grade 7 Guide
          </Link>
          <Link
            href="/resources/grade-targets"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-primary/90"
          >
            All Grade Targets <ArrowRight />
          </Link>
        </div>
      </section>

    </>
  );
}
