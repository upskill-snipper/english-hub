'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

/* ─── Data ───────────────────────────────────────────────────── */

const characters = [
  {
    name: 'Hermia',
    description:
      "Egeus's daughter, in love with Lysander despite her father's insistence she marry Demetrius. Hermia is spirited and defiant: she risks death or lifelong celibacy rather than submit to patriarchal authority. Her small stature becomes a source of comedy in the woodland scenes when Helena mocks her as a 'puppet', but Shakespeare also uses it to explore the gap between physical appearance and inner strength. Her willingness to elope demonstrates the play's central argument that love cannot be legislated.",
  },
  {
    name: 'Lysander',
    description:
      "A young Athenian nobleman who loves Hermia. Lysander is presented as the 'deserving' lover - he is wealthy, well-born, and genuinely devoted. His famous line 'The course of true love never did run smooth' establishes one of the play's key themes. When enchanted by Puck's love juice, his sudden passion for Helena satirises the fickleness of romantic desire and raises the question of whether 'natural' love is any more rational than magically induced love.",
  },
  {
    name: 'Helena',
    description:
      "Hermia's childhood friend, desperately in love with Demetrius, who rejects her. Helena is self-aware about her humiliation ('I am your spaniel') yet unable to stop pursuing Demetrius, which Shakespeare uses to explore love as a loss of dignity and rational control. When both men suddenly adore her in the forest, she assumes she is being mocked, revealing her deep insecurity. Her character asks the audience to consider whether love ennobles or degrades.",
  },
  {
    name: 'Demetrius',
    description:
      "Initially betrothed to Helena, Demetrius has transferred his affections to Hermia, and Egeus supports his suit. He is the least sympathetic of the four lovers: he threatens Helena with violence in the woods and is aggressive in his rejection of her. Crucially, at the play's end he remains under the influence of the love juice - Shakespeare never restores his 'natural' affections, raising an unsettling question about whether his final love for Helena is genuine.",
  },
  {
    name: 'Oberon',
    description:
      "King of the Fairies, quarrelling with Titania over a changeling boy. Oberon is a complex figure: he genuinely wants to help Helena (instructing Puck to anoint Demetrius's eyes), yet he also humiliates his own wife by making her fall in love with an ass-headed weaver. He embodies the play's ambivalence about magical power - it can resolve problems but also violates autonomy and consent. His final blessing of the marriages frames the fairy world as ultimately benevolent.",
  },
  {
    name: 'Titania',
    description:
      "Queen of the Fairies, whose refusal to surrender the changeling boy causes her dispute with Oberon. Titania is arguably the play's most dignified character: she honours her dead votaress by raising the boy, and her speech about the disordered seasons reveals that fairy quarrels have cosmic consequences. Her enchanted love for Bottom is both comic and troubling - it strips her of agency. Her willing reconciliation with Oberon after the spell is lifted leaves open the question of whether the patriarchal order has been challenged or reinforced.",
  },
  {
    name: 'Puck (Robin Goodfellow)',
    description:
      "Oberon's mischievous servant, drawn from English folklore. Puck is the agent of chaos: he applies the love juice to the wrong Athenian, transforms Bottom's head, and delights in the confusion he creates ('Lord, what fools these mortals be!'). He functions as both comic catalyst and choric commentator, standing apart from the action to observe human absurdity. His epilogue directly addresses the audience, collapsing the boundary between the play's dream-world and reality.",
  },
  {
    name: 'Nick Bottom',
    description:
      "A weaver and enthusiastic amateur actor who plays Pyramus in the mechanicals' play. Bottom is gloriously unselfconscious: he wants to play every part and is unfazed by his transformation into an ass. His night with Titania parodies courtly love - a working-class man is adored by a queen. His 'dream' speech (Act 4, Scene 1) is surprisingly profound, echoing St Paul's words about divine mystery. Bottom bridges the comic and the philosophical, making him one of Shakespeare's greatest comic creations.",
  },
  {
    name: 'Theseus',
    description:
      "Duke of Athens, preparing to marry Hippolyta. Theseus represents rational, patriarchal authority: he upholds Egeus's right over Hermia and dismisses the lovers' account of the night as imagination ('The lunatic, the lover, and the poet / Are of imagination all compact'). Yet his own marriage to Hippolyta - a conquered Amazon queen - complicates his authority. His Act 5 speech on imagination is one of the play's key thematic statements about the relationship between art, love, and reality.",
  },
  {
    name: 'Hippolyta',
    description:
      "Queen of the Amazons, betrothed to Theseus after he defeated her in battle. Hippolyta speaks sparingly but significantly. She contradicts Theseus's dismissal of the lovers' story, arguing that it 'grows to something of great constancy', and her quiet corrections suggest an intelligence and sensitivity that Theseus lacks. Her presence subtly reminds the audience that this 'happy' marriage originated in military conquest.",
  },
  {
    name: 'Egeus',
    description:
      "Hermia's father, who demands that Athenian law compel her to marry Demetrius. Egeus represents the oppressive patriarchal authority that the young lovers must escape. His language is possessive: he claims Hermia is 'mine' and that he may 'dispose of her' as he wishes. The play's comic resolution requires his authority to be overruled by Theseus, suggesting that rigid paternal control is incompatible with love and social harmony.",
  },
]

const themes = [
  {
    name: 'Love and Desire',
    detail:
      "Shakespeare presents love as irrational, unpredictable, and often humiliating. The four lovers' shifting affections in the forest - partly natural, partly magically induced - blur the line between 'true' love and infatuation. Helena pursues Demetrius like a 'spaniel'; Titania adores an ass. The play asks whether love is a genuine emotion or a kind of enchantment, and whether there is any meaningful difference. Lysander's observation that 'The course of true love never did run smooth' frames love as inherently turbulent, while the multiple weddings at the end suggest that social order depends on channelling desire into marriage.",
  },
  {
    name: 'Dreams and Reality',
    detail:
      "The title itself signals the play's preoccupation with the boundary between dreaming and waking. The woodland scenes have a dreamlike quality: identities shift, time behaves strangely, and the characters later struggle to recall what happened. Bottom's 'dream' is 'past the wit of man to say what dream it was'. Theseus dismisses the lovers' experience as mere imagination, but Hippolyta's response - that it 'grows to something of great constancy' - suggests that dreams may reveal truths that reason cannot access. The play-within-a-play adds another layer: art, like dreams, creates an alternative reality.",
  },
  {
    name: 'Magic and Transformation',
    detail:
      "The love juice (from 'love-in-idleness') is the play's central magical device, capable of making anyone fall in love with the first creature they see. Bottom's literal transformation into an ass externalises the metaphorical transformations that love produces. Titania's enchantment transforms her from a powerful queen into a doting fool. Shakespeare uses magic not merely as a plot mechanism but as a metaphor for the transformative - and potentially dehumanising - power of desire. The fairy world operates by different rules, and the woodland becomes a space where Athenian social norms dissolve.",
  },
  {
    name: 'Order versus Chaos',
    detail:
      "The play moves from the rigid order of Theseus's Athens (where fathers own daughters and the law mandates death for disobedience) into the anarchic woodland, then back to Athens for the restored social order of marriage. The fairy quarrel between Oberon and Titania has disrupted the natural world: seasons are disordered, crops rot, and rivers flood. Resolution requires both the fairy and human conflicts to be settled. Shakespeare suggests that order is necessary but that rigid, authoritarian order (Egeus's demand) must yield to a more generous, flexible harmony.",
  },
  {
    name: 'Appearance versus Reality',
    detail:
      "Nothing in the play is quite as it seems. Lovers who swore eternal devotion switch partners overnight. Bottom, the most foolish character, is adored by the Fairy Queen. The mechanicals' play of Pyramus and Thisbe - a tragic love story performed as farce - mirrors the main plot and asks whether the lovers' own story could equally have ended in tragedy. Theseus's speech on imagination links lovers, lunatics, and poets as people who see what is not there. The play's final speech, Puck's epilogue, asks the audience to consider the entire performance as a 'dream', dissolving the distinction between theatrical illusion and reality.",
  },
]

const plotSummary = [
  {
    act: 'Act 1',
    summary:
      "In Athens, Duke Theseus prepares for his marriage to Hippolyta. Egeus brings his daughter Hermia before Theseus, demanding she marry Demetrius; Hermia loves Lysander. Theseus gives Hermia until his wedding day to obey or face death or lifelong celibacy. Hermia and Lysander plan to elope through the forest. Hermia confides in Helena, who decides to tell Demetrius, hoping to regain his favour. Separately, a group of Athenian workmen ('the mechanicals') plan to rehearse a play - Pyramus and Thisbe - for the Duke's wedding.",
    quotes: [
      {
        text: 'The course of true love never did run smooth',
        speaker: 'Lysander',
        analysis:
          "This proverbial statement establishes the play's central theme. The monosyllabic simplicity gives it an air of universal truth, and it frames the obstacles the lovers face as inevitable rather than exceptional.",
      },
      {
        text: 'I am your spaniel; and, Demetrius, / The more you beat me, I will fawn on you',
        speaker: 'Helena',
        analysis:
          "The animal imagery degrades Helena willingly - she compares herself to a dog. The masochistic language ('beat me', 'fawn') presents love as a loss of human dignity, inverting the Petrarchan convention where the lover is ennobled by devotion.",
      },
    ],
  },
  {
    act: 'Act 2',
    summary:
      "In the forest, Oberon and Titania quarrel over a changeling boy. Oberon instructs Puck to fetch the juice of 'love-in-idleness', a flower struck by Cupid's arrow, which makes the sleeper fall in love with the first living thing they see. Oberon plans to anoint Titania's eyes to punish her. Seeing Helena's distress as Demetrius rejects her, Oberon also tells Puck to anoint the eyes of 'the Athenian youth'. Puck mistakes Lysander for Demetrius and applies the juice to the wrong man. Lysander wakes, sees Helena, and instantly declares his love for her, abandoning Hermia.",
    quotes: [
      {
        text: 'Ill met by moonlight, proud Titania',
        speaker: 'Oberon',
        analysis:
          "The trochaic rhythm and alliteration create a sense of ceremony and tension. 'Ill met' immediately signals conflict, while 'moonlight' establishes the nocturnal, otherworldly setting of the fairy world.",
      },
      {
        text: 'I know a bank where the wild thyme blows, / Where oxlips and the nodding violet grows',
        speaker: 'Oberon',
        analysis:
          "This lyrical passage creates a sensuous, idyllic natural setting - yet it is also the site of Titania's enchantment and humiliation. The beauty of the language contrasts with Oberon's manipulative intent, embodying the play's tension between appearance and reality.",
      },
    ],
  },
  {
    act: 'Act 3',
    summary:
      "The mechanicals rehearse in the forest. Puck transforms Bottom's head into that of a donkey; his companions flee in terror. The enchanted Titania wakes, sees Bottom, and falls passionately in love with him. Meanwhile, Oberon discovers Puck has anointed the wrong Athenian. He corrects the error by enchanting the sleeping Demetrius, who wakes and falls for Helena. Now both men love Helena, who believes she is being mocked. Hermia, bewildered by Lysander's rejection, confronts Helena. The four lovers quarrel bitterly, with insults about Helena's height and Hermia's shortness. Oberon orders Puck to lead them astray through the forest until they collapse from exhaustion.",
    quotes: [
      {
        text: 'Lord, what fools these mortals be!',
        speaker: 'Puck',
        analysis:
          "Puck's exclamation functions as choric commentary: he stands outside the action and judges human behaviour from a supernatural perspective. The line invites the audience to share his amusement, creating dramatic irony as we watch the lovers' chaos with the same detachment.",
      },
      {
        text: 'O spite! O hell! I see you all are bent / To set against me for your merriment',
        speaker: 'Helena',
        analysis:
          "Helena's assumption that the men's love is mockery reveals her deep insecurity. The exclamatory 'O spite! O hell!' conveys genuine anguish within a comic scene, and Shakespeare asks the audience to recognise the pain beneath the farce.",
      },
      {
        text: "My Oberon! What visions have I seen! / Methought I was enamour'd of an ass",
        speaker: 'Titania',
        analysis:
          "The dramatic irony is acute: Titania's 'vision' was reality. 'Enamour'd of an ass' works on two levels - literal (Bottom's head) and metaphorical (foolish infatuation). Her horror upon waking parallels the lovers' confusion, reinforcing the dream/reality theme.",
      },
    ],
  },
  {
    act: 'Act 4',
    summary:
      "Titania dotes on the ass-headed Bottom, ordering her fairies to attend him. Oberon, having obtained the changeling boy, takes pity on Titania and lifts the enchantment. She wakes, horrified by her 'visions'. Oberon and Titania reconcile and dance together. The four lovers are found asleep by the hunting party of Theseus and Hippolyta. Demetrius, still under enchantment, now loves Helena. Theseus overrules Egeus and declares that the two couples shall be married alongside himself and Hippolyta. Bottom wakes alone, marvelling at his 'dream'.",
    quotes: [
      {
        text: 'I have had a most rare vision. I have had a dream, past the wit of man to say what dream it was',
        speaker: 'Bottom',
        analysis:
          "Bottom's speech echoes 1 Corinthians 2:9 ('Eye hath not seen, nor ear heard'). The biblical allusion elevates a comic character to unexpected profundity: his 'dream' touches on the ineffable, suggesting that transformative experiences transcend rational understanding. Shakespeare blurs the boundary between the absurd and the sublime.",
      },
      {
        text: 'Are you sure / That we are awake? It seems to me / That yet we sleep, we dream',
        speaker: 'Demetrius',
        analysis:
          "Demetrius articulates the play's central uncertainty: the boundary between dream and waking has become impossible to locate. His hesitation reflects the audience's own experience - after the forest scenes, certainty about what is 'real' has dissolved.",
      },
    ],
  },
  {
    act: 'Act 5',
    summary:
      "The three couples are married. Theseus selects the mechanicals' play, Pyramus and Thisbe, for the evening's entertainment despite Philostrate's warning that it is terrible. The artisans perform their earnest but comically inept tragedy, with Bottom as Pyramus. The courtly audience makes witty, sometimes cruel, comments throughout. After the couples retire, the fairies enter to bless the house and the marriages. Puck delivers the epilogue, asking the audience to forgive the play's faults and to consider the performance 'no more yielding but a dream'.",
    quotes: [
      {
        text: 'The lunatic, the lover, and the poet / Are of imagination all compact',
        speaker: 'Theseus',
        analysis:
          "Theseus groups three types of irrational vision together, dismissing all as fantasy. The tricolon structure creates rhetorical authority, but the play itself has shown that imagination - whether in love, dreams, or art - can access truths that reason misses. Shakespeare dramatises the tension between Theseus's rationalism and the play's own magical logic.",
      },
      {
        text: "If we shadows have offended, / Think but this, and all is mended, / That you have but slumber'd here / While these visions did appear",
        speaker: 'Puck',
        analysis:
          "Puck's epilogue collapses the fourth wall: 'shadows' means both fairies and actors. By asking the audience to treat the play as a dream, Shakespeare extends the dream/reality theme beyond the stage. The trochaic tetrameter and rhyming couplets create a spell-like, incantatory rhythm, making the audience complicit in the play's magic.",
      },
    ],
  },
]

const techniques = [
  {
    name: 'Comedy and the Green World',
    detail:
      "A Midsummer Night's Dream follows the structure of Shakespearean comedy: characters leave the 'normal' world (Athens), enter a 'green world' (the forest) where identities become fluid and social rules dissolve, then return to the normal world transformed. The forest is a liminal space - neither fully real nor fully imaginary - where problems that seem insoluble in Athens (parental authority, unrequited love) can be resolved. The movement from order to chaos and back to a new, more flexible order is the engine of Shakespearean comedy.",
  },
  {
    name: 'Verse versus Prose',
    detail:
      'The lovers and fairies speak in verse (often rhyming couplets), reflecting their elevated social status and the heightened, lyrical quality of their emotions. The mechanicals speak in prose, marking them as working-class and grounding their scenes in earthy, physical comedy. The contrast is also thematic: verse is associated with imagination, enchantment, and the irrational, while prose is associated with the practical and the literal. When the mechanicals perform their play in verse, the comic mismatch between their crude poetry and the refined form underscores the theme of appearance versus reality.',
  },
  {
    name: 'The Play-within-a-Play (Pyramus and Thisbe)',
    detail:
      "The mechanicals' performance of Pyramus and Thisbe in Act 5 mirrors the main plot: like Hermia and Lysander, Pyramus and Thisbe are lovers separated by parental opposition who elope and meet in a wood, with tragic consequences. By presenting this parallel story as a comic farce, Shakespeare asks the audience to recognise how easily the main plot could have ended in tragedy. The courtly audience's mocking commentary also raises questions about class, artistic merit, and the power of theatre: Theseus argues that even bad art deserves a generous audience, and Hippolyta disagrees.",
  },
  {
    name: 'The Woodland as Liminal Space',
    detail:
      "The forest outside Athens functions as a threshold between the rational, law-governed city and a space where magic, desire, and chaos rule. Time is distorted (a single night feels like an eternity), identities shift (Bottom becomes an ass; lovers switch partners), and social hierarchies collapse (a queen loves a weaver). The woodland setting draws on folk traditions of fairy-haunted forests and midsummer rituals. Shakespeare uses it to suggest that beneath civilisation's surface, humans are governed by irrational desires that only become visible when social structures are removed.",
  },
  {
    name: 'Fairy Magic and the Love Juice',
    detail:
      "The juice of 'love-in-idleness' (a pansy struck by Cupid's arrow) is both a plot device and a metaphor. It literalises the idea of 'falling' in love - an involuntary, irrational experience that overpowers reason. Shakespeare makes the audience uncomfortable by showing that enchanted love is indistinguishable from 'real' love: both produce the same language, the same devotion, the same absurdity. Demetrius remains enchanted at the play's end, so his 'happy ending' is built on manipulation, quietly undercutting the comedy's joyful resolution.",
  },
  {
    name: 'Multiple Plots and Mirroring',
    detail:
      "The play weaves together four distinct groups - the Athenian court, the four lovers, the fairies, and the mechanicals - and their stories mirror and comment on each other. The fairy quarrel over the changeling boy parallels the human lovers' quarrels; Titania's enchanted love for Bottom mirrors the lovers' enchanted passions; Pyramus and Thisbe's tragedy mirrors the lovers' near-miss. This structural technique creates thematic density and invites the audience to draw connections between different forms of love, power, and illusion.",
  },
]

const examGuidance = {
  passageBased: {
    label: 'Part (a) - Passage-Based Question',
    tips: [
      'You will be given a printed extract and asked how Shakespeare creates particular effects in that passage.',
      'Work through the passage methodically, line by line or section by section - do not jump around randomly.',
      'Identify specific language features: imagery, word choice, sound patterns, rhetorical devices, verse form.',
      "Analyse the effect of each feature - do not simply name techniques ('Shakespeare uses a metaphor'). Explain what it does.",
      'Connect the passage to the rest of the play: how does it develop themes, advance the plot, or reveal character?',
      'Embed short quotations from the passage into your sentences rather than copying out long blocks of text.',
      "Address all four assessment skills: Textual Knowledge (knowledge and understanding), Analysis of Writer's Methods (analysis of language, form, structure), Interpretation and Ideas (context where relevant), Personal Response (personal response and evaluation).",
    ],
  },
  essayBased: {
    label: 'Part (b) - Essay Question',
    tips: [
      "You will answer a broader question on character, theme, or Shakespeare's methods across the whole play.",
      'Plan before you write: identify 3-4 key points and select quotations to support each one.',
      'Structure your essay by argument, not by retelling the plot chronologically.',
      "Every paragraph should make a clear point, support it with a quotation, and analyse Shakespeare's methods.",
      "Use discourse markers ('Furthermore', 'Conversely', 'However') to show the marker how your argument develops.",
      'Include contextual references where they genuinely illuminate meaning (Elizabethan attitudes to marriage, folk beliefs about fairies, classical sources).',
      'Address the question in every paragraph - markers reward sustained focus.',
    ],
  },
}

const sampleQuestion = {
  question:
    "How does Shakespeare present the theme of transformation in A Midsummer Night's Dream?",
  modelParagraph:
    "Shakespeare uses Bottom's literal transformation into an ass to explore the metaphorical transformations that love and desire produce (Textual Knowledge). When Titania declares 'Thou art as wise as thou art beautiful' while gazing at Bottom's donkey head, the dramatic irony exposes how love distorts perception - the audience sees the absurdity that Titania, enchanted, cannot (Analysis of Writer's Methods: dramatic irony, juxtaposition of 'wise' and 'beautiful' with the visual reality of the ass head). The word 'ass' itself functions as a pun: Bottom is both literally an ass and figuratively a fool, yet his 'Bottom's Dream' speech in Act 4 reveals unexpected depth, echoing St Paul's description of divine mysteries beyond human comprehension. This allusion elevates a comic scene to something philosophically resonant, suggesting that transformation - even absurd transformation - can grant access to truths that rational thought cannot reach (Personal Response: evaluative personal response). For an Elizabethan audience familiar with Ovid's Metamorphoses - a key source for Shakespeare - Bottom's transformation would recall a rich tradition of mythological shape-shifting in which physical change reveals inner truths about human nature (Interpretation and Ideas: literary and classical context).",
  aos: [
    'Textual Knowledge - identifies the scene and its thematic significance.',
    "Analysis of Writer's Methods - discusses dramatic irony, wordplay ('ass'), juxtaposition, and biblical allusion.",
    "Interpretation and Ideas - references Ovid's Metamorphoses and Elizabethan literary traditions.",
    'Personal Response - offers an evaluative judgement about the philosophical implications of transformation.',
  ],
}

/* ─── Page component ─────────────────────────────────────────── */

export default function MidsummerNightsDreamStudyGuide() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Cambridge IGCSE English Literature
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            A Midsummer Night&rsquo;s Dream &mdash; Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Characters, themes, act-by-act summary with key quotations, Shakespeare&rsquo;s dramatic
            techniques, and Cambridge-specific exam guidance.
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
            'Dramatic Techniques',
            'Exam Guidance',
            'Sample Question',
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
            Act-by-Act Summary
          </h2>
          <div className="mt-6 space-y-6">
            {plotSummary.map((act) => (
              <Card key={act.act}>
                <CardHeader>
                  <CardTitle>{act.act}</CardTitle>
                  <CardDescription>{act.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-foreground">
                    Key Quotations
                  </p>
                  <div className="space-y-4">
                    {act.quotes.map((q, i) => (
                      <div
                        key={i}
                        className="rounded-lg border-l-4 border-primary bg-primary/5 p-4"
                      >
                        <blockquote className="text-sm font-medium italic text-foreground">
                          &ldquo;{q.text}&rdquo;
                        </blockquote>
                        <p className="mt-1 text-xs font-semibold text-primary">{q.speaker}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {q.analysis}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
              <Card key={c.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{c.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                </CardContent>
              </Card>
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
              <Card key={t.name}>
                <CardHeader>
                  <CardTitle>{t.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Dramatic Techniques ─────────────────────────────────── */}
        <section id="dramatic-techniques" aria-labelledby="techniques-heading">
          <h2 id="techniques-heading" className="text-2xl font-bold text-foreground">
            Shakespeare&rsquo;s Dramatic Techniques
          </h2>
          <div className="mt-6 space-y-5">
            {techniques.map((t) => (
              <Card key={t.name}>
                <CardHeader>
                  <CardTitle>{t.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Exam Guidance ────────────────────────────────────────── */}
        <section id="exam-guidance" aria-labelledby="exam-heading">
          <h2 id="exam-heading" className="text-2xl font-bold text-foreground">
            CAIE Exam Guidance
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cambridge IGCSE English Literature questions on set texts offer two options: a
            passage-based part (a) and an essay-based part (b). Below is detailed guidance for each.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {/* Passage-based */}
            <Card>
              <CardHeader>
                <CardTitle>{examGuidance.passageBased.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {examGuidance.passageBased.tips.map((tip, i) => (
                    <li key={i} className="text-sm leading-relaxed text-muted-foreground">
                      &bull; {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Essay-based */}
            <Card>
              <CardHeader>
                <CardTitle>{examGuidance.essayBased.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {examGuidance.essayBased.tips.map((tip, i) => (
                    <li key={i} className="text-sm leading-relaxed text-muted-foreground">
                      &bull; {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Sample Question ──────────────────────────────────────── */}
        <section id="sample-question" aria-labelledby="sample-heading">
          <h2 id="sample-heading" className="text-2xl font-bold text-foreground">
            Sample Question with Model Paragraph
          </h2>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-base">
                <span className="mr-2 inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-foreground">
                  Essay Question
                </span>
              </CardTitle>
              <CardDescription className="font-medium text-foreground">
                {sampleQuestion.question}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground">
                  Model Paragraph (addressing all 4 skills)
                </p>
                <div className="rounded-lg bg-primary/5 p-4 text-sm leading-relaxed text-muted-foreground">
                  {sampleQuestion.modelParagraph}
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-foreground">
                  Assessment Objectives Addressed
                </p>
                <ul className="space-y-1.5">
                  {sampleQuestion.aos.map((ao, i) => (
                    <li key={i} className="text-sm leading-relaxed text-muted-foreground">
                      &bull; {ao}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Back link ────────────────────────────────────────────── */}
        <div className="mt-12 flex items-center gap-2 text-sm">
          <Link
            href="/resources/english-literature/caie"
            className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
          >
            &larr; Back to Cambridge IGCSE English Literature
          </Link>
        </div>
      </div>
    </>
  )
}
