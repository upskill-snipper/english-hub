import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Jekyll and Hyde Study Guide - Cambridge IGCSE English Literature',
    description:
      'Complete Strange Case of Dr Jekyll and Mr Hyde study guide for Cambridge IGCSE English Literature. Plot summary, character analysis, themes, 18 key quotes with analysis, Victorian context, and exam question practice.',
  },
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-literature/caie/jekyll-and-hyde',
  },
  title: 'Jekyll and Hyde Study Guide - Cambridge IGCSE English Literature',
  description:
    'Complete Strange Case of Dr Jekyll and Mr Hyde study guide for Cambridge IGCSE English Literature. Plot summary, character analysis, themes, 18 key quotes with analysis, Victorian context, and exam question practice.',
}

/* ─── Data ───────────────────────────────────────────────────── */

const keyQuotes = [
  {
    quote: 'Man is not truly one, but truly two',
    speaker: 'Dr Jekyll',
    location: "Chapter 10 (Henry Jekyll's Full Statement)",
    analysis:
      "The novella's central thesis. Jekyll articulates the duality at the heart of human nature. Stevenson challenges the Victorian ideal of a unified, morally consistent self, suggesting that repression does not eliminate desire but merely conceals it. The adverb 'truly' repeated twice insists on the authenticity of this divided self.",
  },
  {
    quote: 'If he be Mr Hyde, I shall be Mr Seek',
    speaker: 'Mr Utterson',
    location: 'Chapter 2 (Search for Mr Hyde)',
    analysis:
      "A rare moment of wordplay in an otherwise restrained narrative. The pun on 'hide' and 'seek' frames the novella as a detective story, but it also captures the broader Victorian anxiety: respectable society is determined to uncover what is hidden, yet terrified of what it might find.",
  },
  {
    quote:
      'The door, which was equipped with neither bell nor knocker, was blistered and distained',
    speaker: 'Narrator',
    location: 'Chapter 1 (Story of the Door)',
    analysis:
      "The neglected door is a Gothic symbol of concealment and transgression. Its lack of bell or knocker suggests secrecy and the desire to avoid scrutiny. The door connects Jekyll's respectable house to a sinister back street, physically embodying the duality between public respectability and private vice.",
  },
  {
    quote:
      'I was the first that could plod in the public eye with a load of genial respectability, and in a moment, like a schoolboy, strip off these lendings and spring headlong into the sea of liberty',
    speaker: 'Dr Jekyll',
    location: "Chapter 10 (Henry Jekyll's Full Statement)",
    analysis:
      "Jekyll relishes the freedom Hyde provides. 'Lendings' (borrowed garments) suggests that respectability is a costume, not an identity. The simile 'like a schoolboy' conveys childish excitement, while 'sea of liberty' implies boundless, unregulated pleasure. The contrast between 'plod' and 'spring' dramatises repression versus release.",
  },
  {
    quote:
      'I had voluntarily stripped myself of all those balancing instincts by which even the worst of us continues to walk with some degree of steadiness among temptations',
    speaker: 'Dr Jekyll',
    location: "Chapter 10 (Henry Jekyll's Full Statement)",
    analysis:
      "Jekyll acknowledges that Hyde lacks a moral compass. The metaphor of 'balancing instincts' presents morality as equilibrium; without it, one falls. The phrase 'even the worst of us' implies that all humans are tempted, and virtue is not the absence of evil but the ability to resist it.",
  },
  {
    quote: "Satan's signature upon a face",
    speaker: 'Mr Utterson',
    location: 'Chapter 2 (Search for Mr Hyde)',
    analysis:
      'Religious imagery marks Hyde as diabolical. The sibilant alliteration creates a sinister, hissing sound. Utterson, a rational lawyer, resorts to supernatural language because Hyde defies rational description. This reflects the Victorian tendency to frame deviance in moral or religious terms rather than psychological ones.',
  },
  {
    quote: "He was trampling calmly over the child's body and left her screaming on the ground",
    speaker: 'Mr Enfield',
    location: 'Chapter 1 (Story of the Door)',
    analysis:
      "Hyde's first act of violence is gratuitous and unprovoked. The oxymoron 'trampling calmly' is deeply disturbing: the adverb suggests indifference rather than rage, implying that cruelty is Hyde's natural state. The victim being a child intensifies the horror and establishes Hyde as a figure without moral restraint.",
  },
  {
    quote:
      'There was something wrong with his appearance; something displeasing, something downright detestable',
    speaker: 'Mr Enfield',
    location: 'Chapter 1 (Story of the Door)',
    analysis:
      "The tricolon with escalating intensity ('wrong', 'displeasing', 'detestable') shows observers struggling to articulate Hyde's repulsiveness. Stevenson deliberately keeps Hyde's appearance vague, making him more frightening. The inability to define his horror suggests that evil resists categorisation and that Hyde's wrongness is felt instinctively rather than seen.",
  },
  {
    quote:
      'I feel very strongly about putting questions; it partakes too much of the style of the day of judgement',
    speaker: 'Mr Enfield',
    location: 'Chapter 1 (Story of the Door)',
    analysis:
      "Enfield's reluctance to ask questions reflects Victorian gentlemanly conduct: respectable men do not pry. This code of discretion enables Jekyll's double life. Stevenson critiques a society where politeness and privacy are valued so highly that they become complicit in concealing wrongdoing.",
  },
  {
    quote: 'All human beings, as we meet them, are commingled out of good and evil',
    speaker: 'Dr Jekyll',
    location: "Chapter 10 (Henry Jekyll's Full Statement)",
    analysis:
      "Jekyll universalises his experience: duality is not his personal flaw but a fundamental human condition. 'Commingled' suggests that good and evil are inseparably mixed, not neatly divided. This challenges the Victorian binary of virtue and vice and anticipates Freudian psychology's model of the conscious and unconscious mind.",
  },
  {
    quote:
      'With ape-like fury, he was trampling his victim under foot and hailing down a storm of blows',
    speaker: 'Maid (witness)',
    location: 'Chapter 4 (The Carew Murder Case)',
    analysis:
      "The simile 'ape-like' connects Hyde to evolutionary regression and Darwin's theory. Victorian readers feared that beneath civilisation lay an animalistic, primitive self. The metaphor 'storm of blows' presents violence as a natural force, uncontrollable and devastating. The murder of Sir Danvers Carew marks Hyde's escalation from cruelty to homicide.",
  },
  {
    quote:
      'The large handsome face of Dr Jekyll grew pale to the very lips, and there came a blackness about his eyes',
    speaker: 'Narrator',
    location: 'Chapter 3 (Dr Jekyll Was Quite at Ease)',
    analysis:
      "Physical description hints at the internal presence of Hyde. The contrast between 'handsome' and the sudden pallor and 'blackness' foreshadows the transformation. Jekyll's body betrays what his words conceal, reinforcing the theme that the truth of one's nature cannot be permanently hidden.",
  },
  {
    quote: 'If I am the chief of sinners, I am the chief of sufferers also',
    speaker: 'Dr Jekyll',
    location: 'Chapter 5 (Incident of the Letter)',
    analysis:
      "The parallel structure ('chief of sinners... chief of sufferers') positions Jekyll as both perpetrator and victim. This self-pitying stance is ambiguous: is Jekyll genuinely tormented, or is he deflecting responsibility? The Biblical echo of St Paul ('chief of sinners') adds a confessional, religious dimension to his guilt.",
  },
  {
    quote:
      'He put the glass to his lips and drank at one gulp. A cry followed; he reeled, staggered, clutched at the table and held on, staring with injected eyes, gasping',
    speaker: 'Narrator',
    location: 'Chapter 10 (witnessed by Lanyon)',
    analysis:
      "The transformation scene uses rapid, short clauses to create breathless pacing. The list of verbs ('reeled, staggered, clutched... staring... gasping') conveys physical agony and loss of control. Lanyon's horror at witnessing this moment is so profound that it kills him, suggesting that some truths are too terrible to survive.",
  },
  {
    quote: 'I bring the life of that unhappy Henry Jekyll to an end',
    speaker: 'Dr Jekyll',
    location: "Chapter 10 (Henry Jekyll's Full Statement)",
    analysis:
      "The final line of Jekyll's confession. The third-person reference to himself ('that unhappy Henry Jekyll') suggests that Jekyll is already distanced from his own identity. The word 'unhappy' is an understatement that resonates with pathos. The narrative ends not with resolution but with silence and death.",
  },
  {
    quote:
      'The pleasures which I made haste to seek in my disguise were, as I have said, undignified; I would scarce use a harder term',
    speaker: 'Dr Jekyll',
    location: "Chapter 10 (Henry Jekyll's Full Statement)",
    analysis:
      "Jekyll is evasive about what Hyde actually does. The litotes ('scarce use a harder term') and vagueness of 'undignified' invite the reader to imagine the worst. Stevenson exploits Victorian reticence: by not naming the sins, he makes them more powerful. Scholars have debated whether these pleasures are sexual, violent, or both.",
  },
  {
    quote:
      'I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse',
    speaker: 'Dr Jekyll',
    location: "Chapter 10 (Henry Jekyll's Full Statement)",
    analysis:
      "The repeated adverb 'slowly' conveys the gradual, insidious nature of moral decline. 'Incorporated' (literally 'made into one body') is significant: Hyde is not a separate person but is consuming Jekyll from within. The binary of 'better' and 'worse' selves collapses as Hyde becomes dominant.",
  },
  {
    quote:
      'This was the shocking thing; that the slime of the pit seemed to utter cries and voices; that the amorphous dust gesticulated and sinned',
    speaker: 'Dr Jekyll',
    location: "Chapter 10 (Henry Jekyll's Full Statement)",
    analysis:
      "Biblical imagery of hell ('slime of the pit') frames Hyde's existence in apocalyptic terms. 'Amorphous' (without form) suggests that evil is shapeless and chaotic, the opposite of civilised order. The personification of dust and slime committing sin conveys Jekyll's horror at watching his worst impulses take physical shape.",
  },
]

const characters = [
  {
    name: 'Dr Henry Jekyll',
    description:
      "A wealthy, respected physician and scientist whose desire to separate the good and evil within himself leads to catastrophe. Jekyll is the embodiment of Victorian respectability: charitable, well-mannered, and socially prominent. However, his confession reveals that this public persona conceals private desires he considers shameful. His experiment is motivated not by pure science but by a wish to indulge his darker impulses without consequence. Jekyll's tragedy is that he believes he can control the division within himself, but Hyde grows progressively stronger until Jekyll can no longer suppress him.",
  },
  {
    name: 'Mr Edward Hyde',
    description:
      "Jekyll's alter ego and the physical manifestation of his repressed evil. Hyde is younger, smaller, and more energetic than Jekyll, suggesting that the evil side has been stunted by years of suppression. He is described with animalistic imagery ('ape-like', 'hissing'), linking him to evolutionary regression. Every character who encounters Hyde feels instinctive revulsion but cannot articulate why, suggesting that his wrongness is sensed rather than seen. Hyde's violence escalates from trampling a child to murdering Sir Danvers Carew, demonstrating that unchecked evil intensifies over time.",
  },
  {
    name: 'Mr Gabriel John Utterson',
    description:
      "A lawyer and the novella's primary narrator-figure. Utterson is the quintessential Victorian gentleman: loyal, discreet, rational, and restrained. His determination to uncover the truth about Hyde drives the plot, yet his gentlemanly code of privacy repeatedly prevents him from acting decisively. He represents the reader's perspective, piecing together clues. Stevenson uses him to critique Victorian propriety: Utterson's reluctance to pry allows Jekyll's double life to continue unchallenged.",
  },
  {
    name: 'Dr Hastie Lanyon',
    description:
      "A conventional physician and former friend of Jekyll. Lanyon dismissed Jekyll's scientific work as 'unscientific balderdash', representing mainstream Victorian science that refused to explore the darker aspects of human nature. When Lanyon witnesses Hyde's transformation into Jekyll, the shock kills him. His death symbolises the destruction that comes from confronting truths that respectable society has chosen to ignore.",
  },
  {
    name: 'Mr Richard Enfield',
    description:
      "Utterson's cousin and walking companion, who witnesses Hyde trampling a child. Enfield is a man-about-town who adheres strictly to the gentleman's code of not asking questions. His account of the door incident in Chapter 1 sets the mystery in motion. His refusal to gossip or speculate, while socially admirable, exemplifies the Victorian discretion that enables Hyde's continued existence.",
  },
  {
    name: 'Poole',
    description:
      "Jekyll's loyal butler, whose concern for his master eventually leads him to break the door down with Utterson. Poole's distress in the final chapters heightens suspense. As a servant, he observes Jekyll's deterioration more closely than anyone but is powerless to intervene, reflecting the rigid class boundaries of Victorian society.",
  },
]

const themes = [
  {
    name: 'Duality of Human Nature',
    detail:
      "The novella's central theme. Stevenson argues that every person contains both good and evil, and that attempting to separate them is catastrophic. Jekyll's experiment literalises a psychological truth: repression does not destroy desire but gives it a separate, uncontrollable life. The duality is reflected structurally (the respectable front of Jekyll's house versus the sinister back door), in the narrative form (multiple perspectives that gradually reveal the truth), and in the setting (the contrast between civilised London streets and dark, fog-shrouded lanes).",
  },
  {
    name: 'Victorian Hypocrisy and Repression',
    detail:
      "Stevenson critiques a society that demands outward respectability while ignoring what lies beneath. Jekyll's double life is only possible because Victorian gentlemen do not ask questions. Enfield declares that asking questions 'partakes too much of the style of the day of judgement'. Utterson suppresses his suspicions out of loyalty and propriety. The novella suggests that Victorian morality, by insisting on the appearance of virtue, creates the very conditions for hidden vice to flourish.",
  },
  {
    name: 'Science and Its Limits',
    detail:
      "Jekyll's experiment pushes science beyond moral boundaries. Lanyon represents conventional, cautious science; Jekyll represents transgressive, reckless experimentation. The novella, written during a period of rapid scientific advancement (Darwin, vivisection debates), asks whether there are areas of knowledge that humanity should not pursue. Jekyll's failure suggests that some aspects of human nature cannot be controlled by rational or scientific means.",
  },
  {
    name: 'Gothic Conventions and the Supernatural',
    detail:
      'Stevenson employs classic Gothic elements: transformation, the monstrous double (the Doppelganger), nighttime settings, locked doors, concealed documents, and an atmosphere of dread. London itself becomes a Gothic landscape, shrouded in fog and gaslight. However, the horror is ultimately psychological rather than supernatural: Hyde is not a demon but an aspect of Jekyll himself, making the terror more disturbing because it comes from within.',
  },
  {
    name: 'Secrecy and Silence',
    detail:
      "The narrative is structured around concealment. The truth is revealed only through documents read after Jekyll's death. Characters guard secrets: Jekyll hides his experiments, Utterson keeps his suspicions private, Enfield refuses to gossip. The novella's form (a mystery pieced together from multiple accounts) mirrors its content: just as Victorian society constructs a respectable surface, the text itself withholds information until the final chapters.",
  },
  {
    name: 'Evolution and Degeneration',
    detail:
      "Hyde is described in animalistic and primitive terms ('ape-like fury', 'troglodytic'). Victorian readers, influenced by Darwin's On the Origin of Species (1859), feared that civilisation was a thin veneer and that humans could regress to a bestial state. Hyde embodies this anxiety: he is smaller, younger, and more vital than Jekyll, suggesting that the primitive self is closer to the surface than polite society would like to believe.",
  },
  {
    name: 'Urban Gothic: London as Setting',
    detail:
      "Stevenson transforms London into a Gothic landscape. The fog, gaslight, narrow lanes, and the contrast between wealthy and impoverished districts create an atmosphere of menace and moral ambiguity. The geography of Jekyll's house (respectable facade on one street, sinister laboratory entrance on another) mirrors the duality of its owner. The city becomes a space where respectability and vice coexist in close proximity.",
  },
]

const plotSummary = [
  {
    chapter: 'Chapters 1-2: The Mystery Established',
    summary:
      "Mr Utterson and Mr Enfield pass a sinister door during their weekly walk. Enfield recounts witnessing a small, repulsive man (Hyde) trample a young girl and then pay compensation with a cheque signed by Dr Jekyll. Utterson, concerned, reads Jekyll's will and discovers it leaves everything to Hyde. He visits Dr Lanyon, who dismisses Jekyll's recent scientific work. Utterson stakes out the door and finally confronts Hyde, finding him indefinably repulsive.",
  },
  {
    chapter: "Chapters 3-4: Hyde's Escalation",
    summary:
      "Jekyll hosts a dinner party and assures Utterson he can be rid of Hyde whenever he chooses. Nearly a year later, Hyde is witnessed beating Sir Danvers Carew, a respected MP, to death with a cane. The police find a broken cane and a letter. Utterson leads them to Hyde's Soho lodgings, which are ransacked. Hyde has disappeared. Jekyll claims to have received a letter from Hyde but Utterson's clerk notices the handwriting is similar to Jekyll's.",
  },
  {
    chapter: 'Chapters 5-6: Uneasy Peace',
    summary:
      "With Hyde gone, Jekyll re-emerges into society, appearing healthier and more sociable. He resumes charitable work and entertains friends. However, Jekyll suddenly withdraws again, refusing visitors. Dr Lanyon falls mysteriously and fatally ill, telling Utterson he has had a shock from which he will not recover. He leaves a letter to be opened only after Jekyll's death or disappearance. Utterson attempts to visit Jekyll but is turned away.",
  },
  {
    chapter: 'Chapters 7-8: The Crisis',
    summary:
      "Utterson and Enfield, walking again, see Jekyll at a window. His expression changes to one of abject terror and he slams the window shut. Later, Poole arrives at Utterson's in distress: Jekyll has locked himself in the laboratory for days, and the voice from within no longer sounds like his master's. They break down the door and find Hyde's body in Jekyll's clothes, dead by suicide. Jekyll is nowhere to be found. They discover letters.",
  },
  {
    chapter: 'Chapters 9-10: The Revelations',
    summary:
      "Dr Lanyon's narrative reveals that Hyde transformed into Jekyll before Lanyon's eyes, causing a shock that killed him. Jekyll's full statement confesses everything: his experiment to separate good and evil, the intoxicating freedom of being Hyde, the gradual loss of control as transformations became involuntary, and his final entrapment as Hyde when the potion's ingredients ran out. The novella ends with Jekyll's written words; his fate is left ambiguous.",
  },
]

const assessmentObjectives = [
  {
    code: 'Textual Knowledge',
    title: 'Show detailed knowledge of the text',
    detail:
      "Demonstrate close knowledge of the novella's content through well-chosen quotations and precise references. In passage-based questions, work through the extract methodically. In essays, select relevant moments from across the entire text.",
  },
  {
    code: "Writer's Methods",
    title: "Understand the writer's methods and effects",
    detail:
      'Analyse how Stevenson uses language, form, and structure to create meaning. Identify literary techniques (metaphor, symbolism, narrative structure, pathetic fallacy) and explain their effects on the reader. This is the most heavily weighted objective.',
  },
  {
    code: 'Interpretation',
    title: 'Respond to different interpretations (implied)',
    detail:
      "While Cambridge IGCSE does not have a separate skill for alternative readings, markers reward responses that consider multiple perspectives: for example, whether Jekyll is a tragic figure or a reckless egotist, whether Hyde is a separate entity or Jekyll's true self.",
  },
  {
    code: 'Personal Response',
    title: 'Relate the text to its context',
    detail:
      'Show understanding of the Victorian context in which Stevenson wrote: attitudes to respectability, scientific advancement, Darwinian theory, urbanisation, and the Gothic literary tradition. Context should be integrated into analysis, not bolted on as a separate paragraph.',
  },
]

/* ─── Page component ─────────────────────────────────────────── */

export default function JekyllAndHydeStudyGuide() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Cambridge IGCSE English Literature &mdash; Paper 1 (Prose)
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            The Strange Case of Dr Jekyll and Mr Hyde &mdash; Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Plot, characters, themes, {keyQuotes.length} key quotes with analysis, Victorian
            context, Gothic conventions, and Cambridge-specific exam technique.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* ── Navigation ──────────────────────────────────────────── */}
        <nav className="mb-10 flex flex-wrap gap-2 text-sm" aria-label="Page sections">
          {[
            'Plot Summary',
            'Characters',
            'Themes',
            'Key Quotes',
            'Context',
            'What Markers Look For',
            'Exam Questions',
          ].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, '-')}`}
              className="rounded-full border border-primary/30 px-3 py-1 text-foreground transition hover:bg-primary/10"
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
            {plotSummary.map((ch) => (
              <div
                key={ch.chapter}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
                <h3 className="font-semibold text-foreground">{ch.chapter}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ch.summary}</p>
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
              <div key={c.name} className="rounded-lg border border-border bg-card p-5 shadow-md">
                <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
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
              <div key={t.name} className="rounded-lg border border-border bg-card p-5 shadow-md">
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
            Each quote includes the speaker, chapter location, and detailed analysis suitable for
            Cambridge IGCSE Paper 1 responses.
          </p>
          <div className="mt-6 space-y-5">
            {keyQuotes.map((q, i) => (
              <div key={i} className="rounded-lg border-l-4 border-primary bg-card p-5 shadow-md">
                <blockquote className="text-base font-medium italic text-foreground">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <p className="mt-1 text-xs font-semibold text-primary">
                  {q.speaker} &mdash; {q.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{q.analysis}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Context ─────────────────────────────────────────────── */}
        <section id="context" aria-labelledby="context-heading">
          <h2 id="context-heading" className="text-2xl font-bold text-foreground">
            Historical &amp; Literary Context
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">
                Victorian Respectability and the Double Life
              </h3>
              <p className="mt-2">
                The novella was published in 1886, during the height of the Victorian era. Society
                placed enormous emphasis on outward respectability, moral propriety, and
                self-control. Gentlemen were expected to suppress any desires that did not conform
                to strict moral codes. Stevenson exposes the hypocrisy of this system:
                Jekyll&rsquo;s double life is only possible because Victorian society does not look
                too closely at what its respectable members do in private.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">Darwin and the Theory of Evolution</h3>
              <p className="mt-2">
                Charles Darwin&rsquo;s <em>On the Origin of Species</em> (1859) and{' '}
                <em>The Descent of Man</em> (1871) challenged the idea that humans were
                fundamentally different from animals. Hyde&rsquo;s animalistic descriptions
                (&lsquo;ape-like&rsquo;, &lsquo;troglodytic&rsquo;) reflect Victorian anxieties
                about degeneration: the fear that civilised humans might revert to a primitive,
                bestial state. Hyde can be read as an embodiment of this evolutionary regression.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">The Gothic Tradition</h3>
              <p className="mt-2">
                Stevenson draws on the Gothic literary tradition, which originated with Horace
                Walpole&rsquo;s <em>The Castle of Otranto</em> (1764) and includes Mary
                Shelley&rsquo;s <em>Frankenstein</em> (1818). Gothic conventions in the novella
                include: the Doppelganger (the monstrous double), transformation, nighttime
                settings, locked doors and concealed documents, the urban landscape as a source of
                horror, and the transgressive scientist whose experiments breach moral boundaries.
                However, Stevenson modernises the Gothic by locating horror not in a remote castle
                but in the heart of respectable London.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">Victorian London and Urbanisation</h3>
              <p className="mt-2">
                By the 1880s, London was the world&rsquo;s largest city, characterised by extremes
                of wealth and poverty existing side by side. The geography of the novella reflects
                this: Jekyll&rsquo;s handsome house faces a respectable square, but its laboratory
                backs onto a squalid lane. Fog, gaslight, and labyrinthine streets create an
                atmosphere of concealment and menace, transforming the familiar city into a Gothic
                landscape.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">Science, Progress, and Anxiety</h3>
              <p className="mt-2">
                The late Victorian period saw rapid scientific and technological progress, which
                generated both excitement and anxiety. Vivisection (animal experimentation) was
                hotly debated. The novella reflects fears about science overreaching moral
                boundaries. Jekyll, like Frankenstein before him, is a scientist whose ambition to
                master nature leads to his destruction. Stevenson questions whether scientific
                progress is always beneficial and whether some knowledge is too dangerous to pursue.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">Stevenson&rsquo;s Narrative Method</h3>
              <p className="mt-2">
                The novella&rsquo;s structure is itself thematically significant. The story is told
                through multiple perspectives (Utterson&rsquo;s third-person narrative,
                Lanyon&rsquo;s letter, Jekyll&rsquo;s confession), withholding the full truth until
                the final two chapters. This mirrors the novella&rsquo;s themes of concealment and
                revelation. The reader, like Utterson, must piece together fragments to understand
                the whole picture, replicating the experience of living in a society built on
                surfaces and secrets.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Assessment Objectives ───────────────────────────────── */}
        <section id="what-markers-look-for" aria-labelledby="ao-heading">
          <h2 id="ao-heading" className="text-2xl font-bold text-foreground">
            Cambridge Assessment Objectives
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Understanding how Cambridge marks your work helps you target your revision. Paper 1
            (Prose) questions are marked holistically, but these objectives indicate what markers
            are looking for.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {assessmentObjectives.map((ao) => (
              <div key={ao.code} className="rounded-lg border border-border bg-card p-5 shadow-md">
                <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-foreground">
                  {ao.code}
                </span>
                <h3 className="mt-2 font-semibold text-foreground">{ao.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ao.detail}</p>
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
            Cambridge IGCSE Jekyll and Hyde questions appear in <strong>Paper 1 (Prose)</strong>.
            You will choose between a passage-based question and an essay question. Below are
            examples of both types with guidance on how to approach them.
          </p>

          <div className="mt-6 space-y-6">
            {/* Passage-based 1 */}
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Passage-Based
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                Re-read the passage in Chapter 10 from &ldquo;I was the first that could plod in the
                public eye&rdquo; to &ldquo;I was the first that ever did so for his
                pleasures.&rdquo; How does Stevenson present Jekyll&rsquo;s attitude to his double
                life in this passage?
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>
                    &bull; Work through the passage systematically, selecting key words and phrases
                    for close analysis
                  </li>
                  <li>
                    &bull; Analyse the contrast between &lsquo;plod&rsquo; and &lsquo;spring&rsquo;
                    &mdash; repression versus freedom
                  </li>
                  <li>
                    &bull; Discuss the metaphor of &lsquo;lendings&rsquo;: respectability as
                    borrowed clothing, not genuine identity
                  </li>
                  <li>
                    &bull; Consider tone: Jekyll sounds excited, even boastful &mdash; what does
                    this reveal about his character?
                  </li>
                  <li>
                    &bull; Link outward: connect to the theme of Victorian hypocrisy and the idea of
                    the performed self
                  </li>
                </ul>
              </div>
            </div>

            {/* Essay 1 */}
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Essay Question
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                How does Stevenson present the theme of duality in{' '}
                <em>The Strange Case of Dr Jekyll and Mr Hyde</em>?
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>
                    &bull; Plan 3&ndash;4 key points with supporting quotations from across the
                    novella
                  </li>
                  <li>
                    &bull; Consider duality on multiple levels: character (Jekyll/Hyde), setting
                    (front door/back door), narrative structure (surface story/hidden truth)
                  </li>
                  <li>
                    &bull; Analyse Stevenson&rsquo;s methods: symbolism (the door, the mirror),
                    imagery (light/dark, animal/human), narrative form (delayed revelation)
                  </li>
                  <li>
                    &bull; Discuss the philosophical implications: &lsquo;Man is not truly one, but
                    truly two&rsquo;
                  </li>
                  <li>
                    &bull; Reference context: Victorian repression, Darwinian anxiety, the Gothic
                    Doppelganger tradition
                  </li>
                </ul>
              </div>
            </div>

            {/* Passage-based 2 */}
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Passage-Based
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                Re-read the passage in Chapter 4 describing the murder of Sir Danvers Carew, from
                &ldquo;And then all of a sudden he broke out in a great flame of anger&rdquo; to
                &ldquo;the bones were audibly shattered.&rdquo; How does Stevenson make this such a
                shocking and significant moment?
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>
                    &bull; Analyse the contrast between the peaceful moonlit setting and the sudden
                    eruption of violence
                  </li>
                  <li>
                    &bull; Discuss the simile &lsquo;ape-like fury&rsquo;: Darwinian regression,
                    loss of civilised restraint
                  </li>
                  <li>
                    &bull; Note the maid&rsquo;s perspective: she faints, creating a gap in the
                    narrative that heightens horror
                  </li>
                  <li>
                    &bull; Examine sound imagery: &lsquo;bones were audibly shattered&rsquo; makes
                    violence visceral and sensory
                  </li>
                  <li>
                    &bull; Connect to the wider novella: this murder marks Hyde&rsquo;s escalation
                    and makes Jekyll&rsquo;s loss of control irreversible
                  </li>
                </ul>
              </div>
            </div>

            {/* Essay 2 */}
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Essay Question
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                Explore how Stevenson uses setting to create atmosphere in the novella.
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>
                    &bull; Discuss the symbolism of the door and Jekyll&rsquo;s house: dual
                    entrances reflecting dual nature
                  </li>
                  <li>
                    &bull; Analyse London fog and gaslight as pathetic fallacy: moral confusion,
                    concealment, danger
                  </li>
                  <li>
                    &bull; Contrast the ordered interiors (Utterson&rsquo;s rooms, Jekyll&rsquo;s
                    dining hall) with the chaotic laboratory
                  </li>
                  <li>
                    &bull; Reference Gothic conventions: the urban Gothic, nighttime settings,
                    labyrinthine streets
                  </li>
                  <li>
                    &bull; Link setting to context: Victorian London&rsquo;s juxtaposition of wealth
                    and poverty mirrors Jekyll&rsquo;s divided self
                  </li>
                </ul>
              </div>
            </div>

            {/* Essay 3 */}
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Essay Question
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                How far do you agree that Hyde is the real Jekyll? Discuss with reference to the
                novella as a whole.
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>
                    &bull; This is a &lsquo;how far do you agree&rsquo; question: present arguments
                    for and against, then offer a clear personal conclusion
                  </li>
                  <li>
                    &bull; For: Jekyll describes Hyde&rsquo;s pleasures as his own; Hyde is
                    &lsquo;natural and human&rsquo;; Jekyll is the disguise
                  </li>
                  <li>
                    &bull; Against: Jekyll has genuine goodness; Hyde is a reduction, lacking
                    &lsquo;balancing instincts&rsquo;; Jekyll feels remorse, Hyde does not
                  </li>
                  <li>
                    &bull; Analyse Stevenson&rsquo;s methods: the title places Jekyll first; Hyde
                    means &lsquo;to hide&rsquo;; the narrative structure prioritises Jekyll&rsquo;s
                    confession
                  </li>
                  <li>
                    &bull; Conclude with a nuanced argument: neither is the &lsquo;real&rsquo; self
                    &mdash; both are aspects of one person, which is Stevenson&rsquo;s central point
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ── Exam Technique Box ──────────────────────────────────── */}
          <div className="mt-8 rounded-lg border-2 border-primary/30 bg-primary/5 p-5">
            <h3 className="font-bold text-foreground">Cambridge Paper 1 Exam Technique</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Passage-based questions:</strong> Work through
                the extract line by line. Begin with the passage but always link outward to the rest
                of the novella. Focus on Stevenson&rsquo;s language choices: individual words,
                imagery, sentence structure, and their effects on the reader.
              </li>
              <li>
                <strong className="text-foreground">Essay questions:</strong> Plan before writing.
                Structure your response around 3&ndash;4 key points, each supported by quotations.
                Cover different parts of the novella rather than focusing on a single chapter.
                Always analyse <em>how</em> Stevenson presents ideas, not just <em>what</em>{' '}
                happens.
              </li>
              <li>
                <strong className="text-foreground">Use of terminology:</strong> Cambridge rewards
                precise literary terminology used naturally: metaphor, simile, symbolism, pathetic
                fallacy, narrative perspective, Doppelganger, Gothic conventions, foreshadowing,
                juxtaposition, dramatic irony.
              </li>
              <li>
                <strong className="text-foreground">Integrating context:</strong> Weave contextual
                references into your analysis rather than writing a separate paragraph. For example:
                &ldquo;Hyde&rsquo;s &lsquo;ape-like fury&rsquo; would have been particularly
                unsettling for Victorian readers familiar with Darwin&rsquo;s theory of evolution,
                which suggested that humans were not as far removed from animals as they
                believed.&rdquo;
              </li>
              <li>
                <strong className="text-foreground">Time management:</strong> You have approximately
                45 minutes per question. Spend 5 minutes planning, 35 minutes writing, and 5 minutes
                checking. A well-structured response with fewer points analysed in depth will score
                higher than a rushed response covering many points superficially.
              </li>
            </ul>
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

        {/* Public-domain notice */}
        <footer className="mt-8 text-xs text-muted-foreground">
          <p>
            <em>The Strange Case of Dr Jekyll and Mr Hyde</em> by Robert Louis Stevenson was first
            published in 1886. Stevenson died in 1894 and the text is in the{' '}
            <strong>public domain</strong>. All quotations on this page are reproduced from the
            original novella.
          </p>
        </footer>
      </div>
    </>
  )
}
