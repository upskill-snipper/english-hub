'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

/* ─── Data ───────────────────────────────────────────────────── */

const keyQuotes = [
  {
    quote: "I'm not just somebody's mother. I'm me. I'm Helen.",
    speaker: 'Helen',
    act: 'Act 1',
    analysis:
      "Helen resists being defined solely by her maternal role, asserting an individual identity separate from motherhood. Delaney uses the emphatic repetition of 'I'm' to convey Helen's determination to exist beyond societal expectations for women. The short, declarative sentences mirror the directness of working-class speech, grounding her assertion in kitchen sink realism.",
  },
  {
    quote: "We're unique! Young ones and old ones.",
    speaker: 'Jo',
    act: 'Act 1',
    analysis:
      "Jo ironically celebrates the dysfunctional mother-daughter bond she shares with Helen. The exclamation conveys a brittle, self-aware humour that is characteristic of Delaney's dialogue. 'Unique' carries both pride and pain: Jo recognises that their relationship is unusual but cannot escape its limitations.",
  },
  {
    quote:
      "You're a cruel woman, Helen. You've had your life ruined by men but you won't let me have mine.",
    speaker: 'Jo',
    act: 'Act 1',
    analysis:
      "Jo directly accuses Helen of hypocrisy, pointing out that Helen repeats the very patterns of male dependency she has suffered from. The accusation foreshadows Jo's own entanglement with Jimmy and later vulnerability. Delaney uses the mother-daughter conflict to expose how cycles of poverty and poor relationships are inherited across generations.",
  },
  {
    quote: "I really do live at the same time as myself, don't I?",
    speaker: 'Jo',
    act: 'Act 1',
    analysis:
      "Jo's existential reflection signals her precocious intelligence and isolation. The rhetorical question directed at herself suggests she has no one else to confide in. Delaney captures the interior life of a working-class teenager who is intellectually alive but socially marginalised, challenging the assumption that the poor lack self-awareness.",
  },
  {
    quote: "You've got to get rid of this baby, Jo.",
    speaker: 'Helen',
    act: 'Act 2',
    analysis:
      "Helen's blunt imperative reveals her instinct to solve problems through avoidance rather than support. The directness is shocking but also reflects the limited options available to working-class women in the 1950s, when unmarried motherhood carried severe social stigma. Delaney refuses to sentimentalise the mother-daughter relationship, presenting it with unflinching honesty.",
  },
  {
    quote: "I love you. You're the first woman I've ever loved.",
    speaker: 'Jimmy (The Boy)',
    act: 'Act 1',
    analysis:
      "Jimmy's declaration is romantic but fleeting; he disappears from the play after this scene. The claim that Jo is 'the first woman' he has loved creates dramatic irony, as the audience suspects his sincerity. Delaney uses Jimmy to explore interracial relationships without moralising: the focus is on Jo's emotional vulnerability rather than racial difference itself.",
  },
  {
    quote: "I don't want to be a mother. I don't want to be a woman.",
    speaker: 'Jo',
    act: 'Act 2',
    analysis:
      "Jo explicitly rejects the roles that 1950s society prescribes for her sex. The parallel structure ('I don't want to be') conveys mounting desperation. Delaney gives voice to a female anxiety that was rarely articulated on the British stage: the terror of being trapped by biology and gender expectations.",
  },
  {
    quote: "It's your baby. It's nothing to do with me.",
    speaker: 'Helen',
    act: 'Act 2',
    analysis:
      "Helen disowns responsibility for Jo's pregnancy with brutal directness. The possessive pronoun 'your' distances her entirely. Delaney reverses the expected maternal instinct to highlight how poverty and self-interest corrode family bonds. Helen's rejection drives Jo closer to Geof, whose care proves more reliable than biological motherhood.",
  },
  {
    quote: 'Would you like to marry me?',
    speaker: 'Geof',
    act: 'Act 2',
    analysis:
      "Geof's gentle proposal is an act of selfless devotion, offering Jo social respectability and practical support despite his own marginalised identity as a gay man. The tentative phrasing ('Would you like to') contrasts with the aggressive possessiveness of other male characters. Delaney presents a radical alternative to the heterosexual nuclear family: a partnership based on genuine care rather than convention.",
  },
  {
    quote: "You know I'm not really dark, don't you?",
    speaker: 'Jo',
    act: 'Act 2',
    analysis:
      "Jo's anxious question about her unborn child's skin colour reveals her awareness of the racial prejudice the child will face. The hedging ('not really') suggests Jo is trying to minimise the social consequences. Delaney confronts 1950s racial attitudes directly, showing how prejudice permeates even intimate family moments.",
  },
  {
    quote:
      "I used to try to hold my mother's hands but she always pushed me away. She had me but she didn't want me.",
    speaker: 'Jo',
    act: 'Act 2',
    analysis:
      "Jo's memory of childhood rejection is one of the play's most emotionally raw moments. The contrast between 'had me' (gave birth) and 'didn't want me' (withheld love) captures the gap between biological motherhood and emotional nurture. Delaney uses this confession to explain Jo's fierce independence and her fear of repeating Helen's failures.",
  },
  {
    quote: "I can't stand girls who have to have men around them all the time.",
    speaker: 'Jo',
    act: 'Act 1',
    analysis:
      "Jo's contempt for female dependency is aimed directly at Helen but also reveals her own anxieties about repeating her mother's pattern. The generalised 'girls' distances her from the accusation. Delaney uses Jo to voice a proto-feminist critique of women who define themselves through relationships with men, reflecting the emerging social changes of the late 1950s.",
  },
  {
    quote: 'The dream has gone but the baby is real enough.',
    speaker: 'Jo',
    act: 'Act 2',
    analysis:
      "Jo contrasts romantic illusion with material reality in a single sentence. The juxtaposition of 'dream' and 'real' encapsulates the play's anti-romantic stance: Delaney consistently strips away sentiment to expose the harsh consequences of desire. The baby becomes a symbol of the inescapable reality that working-class women must confront without support.",
  },
  {
    quote: "I'm contemporary. I live at the same time as myself.",
    speaker: 'Jo',
    act: 'Act 1',
    analysis:
      'Jo claims modernity and self-possession with characteristic wit. Delaney uses this aphorism to position Jo as a new kind of stage heroine: articulate, self-aware, and unapologetically present. The line also functions as a meta-theatrical statement about the play itself, which insists on representing contemporary working-class life rather than the drawing-room dramas of the theatrical establishment.',
  },
  {
    quote: "It's a bit of a come-down from the room I had before.",
    speaker: 'Helen',
    act: 'Act 1',
    analysis:
      "Helen's ironic understatement about their squalid new flat establishes the setting's poverty. The phrase 'come-down' implies social decline, a motif that runs through the play. Delaney's stage directions describe a comfortless flat in Salford, grounding the drama in the specific material conditions of working-class life and the kitchen sink realism tradition.",
  },
]

const characters = [
  {
    name: 'Jo (Josephine)',
    description:
      "The play's protagonist, a restless, intelligent seventeen-year-old who craves independence but is emotionally starved by her mother's neglect. Jo is sharp-tongued, creative (she draws and writes), and fiercely self-reliant, yet deeply vulnerable. Her brief relationship with Jimmy leaves her pregnant and alone, forcing her to confront the prospect of single motherhood in a society hostile to unmarried mothers. Jo resists being defined by her gender, class, or her mother's failures, but Delaney shows that personal resilience alone cannot overcome structural inequality. Jo's character arc - from defiant teenager to anxious expectant mother - embodies the play's central tension between individual agency and social constraint. She is one of the first working-class female protagonists in British drama, and her voice broke new ground in 1958.",
  },
  {
    name: 'Helen',
    description:
      "Jo's mother, a semi-prostitute who oscillates between affection and cruel indifference towards her daughter. Helen is hedonistic, vain, and self-centred, prioritising her relationships with men over her responsibilities as a mother. She drinks heavily and uses humour to deflect serious emotion. Yet Delaney refuses to present her as a simple villain: Helen is also a victim of poverty and limited options, a woman whose own upbringing offered no model of good parenting. Her marriage to Peter is motivated by financial security rather than love, and her periodic returns to Jo reveal a residual maternal instinct she cannot sustain. Helen represents the cycle of neglect that Delaney traces across generations.",
  },
  {
    name: 'Peter',
    description:
      "Helen's boyfriend and later husband, a brash, wealthy car salesman who is younger than Helen. Peter is loud, patronising, and casually cruel, dismissing Jo as an inconvenience. He represents the allure and danger of male financial power: Helen marries him for security, but his presence drives Jo out of the home. Peter's racism towards Jimmy and contempt for Jo's poverty reveal the prejudices that operate across class lines. Delaney uses Peter to show how economic dependency on men traps women like Helen in destructive relationships.",
  },
  {
    name: 'Jimmy (The Boy)',
    description:
      "A Black sailor who has a brief, tender relationship with Jo before returning to sea. Jimmy is affectionate and romantic, proposing marriage and giving Jo a ring, but he is ultimately transient: he leaves and never returns. His racial identity is significant because Jo's mixed-race child will face prejudice in 1950s Britain. Delaney treats Jimmy with warmth and without racial caricature, presenting the interracial relationship as natural and uncontroversial in itself - the prejudice comes from society, not from the characters. Jimmy's departure leaves Jo to face the consequences of their relationship alone, underscoring the gendered inequality of sexual relationships.",
  },
  {
    name: 'Geof (Geoffrey Ingham)',
    description:
      "A quiet, caring art student who moves in with Jo after Helen's departure. Geof is implied to be gay - he has been thrown out of his lodgings, and Jo questions his sexuality directly. Despite this, he offers Jo the most stable, nurturing relationship in the play: he cooks, cleans, prepares for the baby, and proposes marriage to give her respectability. Geof challenges 1950s gender norms by performing the domestic, caring role traditionally assigned to women. His eventual expulsion by Helen's return is one of the play's most poignant moments, as Jo loses the only person who has offered her unconditional support. Delaney uses Geof to present an alternative model of family based on mutual care rather than sexual convention.",
  },
]

const themes = [
  {
    name: 'Class and Poverty',
    detail:
      "The play is rooted in the material deprivation of working-class Salford. Jo and Helen's comfortless flat, their insecurity, and their dependence on men for financial survival are not incidental details but the structural conditions that shape every relationship in the play. Delaney shows that poverty limits choices: Helen marries Peter for money, Jo cannot afford proper antenatal care, and Geof's marginalisation is compounded by his lack of resources. The kitchen sink realism of the staging - bare rooms, cold flats, urban grime - insists that the audience confront the reality of working-class life rather than the comfortable middle-class drawing rooms of conventional theatre.",
  },
  {
    name: 'Motherhood and Family',
    detail:
      "The play interrogates the idealised notion of the nuclear family by presenting a household in which no conventional family structure works. Helen is a negligent mother who prioritises men over her daughter. Jo dreads repeating Helen's failures but faces single motherhood without support. Geof, the most maternal figure in the play, is not a biological parent at all. Delaney suggests that love and care matter more than biological ties or social convention, but she also shows that the absence of a supportive family structure has devastating consequences for those - especially women and children - who fall outside it.",
  },
  {
    name: 'Race and Prejudice',
    detail:
      "Jimmy's race and the prospect of Jo's mixed-race baby bring racial prejudice into sharp focus. Peter's racist comments, Helen's horrified reaction to the baby's likely skin colour, and Jo's own anxieties about social stigma all reveal the entrenched racism of 1950s Britain. Delaney was writing at the time of the first major wave of Caribbean and African immigration (the Windrush generation), and her sympathetic portrayal of an interracial relationship was genuinely radical. She presents prejudice as a social construction, not a natural response, and refuses to treat Jimmy as exotic or dangerous.",
  },
  {
    name: 'Gender and Independence',
    detail:
      "Jo's desire for independence - from her mother, from men, from the role society prescribes for her - drives the play's action. Yet Delaney shows that true independence is almost impossible for a working-class woman in 1950s Britain: Jo's pregnancy traps her in precisely the domestic situation she wanted to escape. Helen's dependence on men for financial security, and her inability to sustain an independent identity, serves as a cautionary parallel. Geof's disruption of gender roles (a man performing domestic care) highlights how rigidly 1950s society policed the boundary between male and female behaviour.",
  },
  {
    name: 'Loneliness and Belonging',
    detail:
      "Every character in the play is, in some fundamental sense, alone. Jo is abandoned by her mother, her lover, and ultimately by Geof. Helen cannot sustain intimacy with anyone. Geof is marginalised by his sexuality. Jimmy is a transient figure with no permanent home. The play's emotional power comes from its characters' desperate, often thwarted attempts to connect with one another. Delaney suggests that belonging is not guaranteed by family, marriage, or community, but must be actively created - and that social structures in 1950s Britain make this creation extraordinarily difficult for the poor and the marginalised.",
  },
]

const dramaticTechniques = [
  {
    name: 'Kitchen Sink Realism',
    detail:
      'A Taste of Honey is a landmark of the kitchen sink realism movement, which emerged in British theatre in the late 1950s. Delaney sets the play in a shabby rented flat in Salford, depicting the unglamorous reality of working-class life with unflinching honesty. Unlike the drawing-room dramas that dominated the West End, the play features characters who are poor, unmarried, and socially marginalised. The realism is not merely aesthetic but political: by putting working-class lives on stage, Delaney challenged the cultural assumption that serious drama was the preserve of the middle and upper classes.',
  },
  {
    name: 'Dialogue and Humour',
    detail:
      "Delaney's dialogue is naturalistic, sharp, and laced with dark humour. Characters deflect pain with wit: Helen's one-liners mask her emotional negligence, and Jo's sarcasm is a defence mechanism against vulnerability. The humour prevents the play from becoming sentimental or didactic, and it reflects the real speech patterns of working-class Salford. The rapid, overlapping exchanges between Jo and Helen have a musicality that recalls the rhythms of everyday conversation, giving the play an authenticity that was revolutionary in 1958.",
  },
  {
    name: 'Staging and Set Design',
    detail:
      "Joan Littlewood's original Theatre Workshop production used a jazz trio on stage to provide musical interludes between scenes, creating a Brechtian distancing effect that prevented the audience from becoming passively absorbed in the narrative. The sparse, functional set - a bed, a table, a gas stove - reinforces the poverty of Jo and Helen's world. The single-room setting concentrates the drama and forces characters into uncomfortable proximity. Delaney's stage directions emphasise the flat's coldness, darkness, and lack of comfort, making the physical environment an expression of emotional deprivation.",
  },
  {
    name: 'Social Commentary',
    detail:
      "The play addresses taboo subjects that were rarely discussed on the British stage in 1958: unmarried motherhood, interracial relationships, homosexuality, and working-class poverty. Delaney does not moralise about these issues; instead, she presents them as facts of life that her characters must navigate. This refusal to judge is itself a radical act: by normalising what society stigmatised, Delaney challenges the audience to reconsider their own prejudices. The play's social commentary is embedded in character and action rather than delivered through speeches, making it more persuasive than explicit polemic.",
  },
  {
    name: 'Structure and Pacing',
    detail:
      "The two-act structure mirrors Jo's transition from dependent teenager (Act 1) to expectant mother (Act 2). Act 1 establishes the cycle of neglect and romantic illusion; Act 2 confronts the consequences. The pacing is episodic rather than tightly plotted, reflecting the shapelessness of working-class life where events happen to characters rather than being controlled by them. Key moments - Jimmy's departure, Helen's marriage, Geof's arrival - are presented without melodrama, as part of the ordinary rhythm of life.",
  },
  {
    name: 'Music and Jazz',
    detail:
      "The original production incorporated a live jazz band that played between scenes and sometimes during the action. This technique, influenced by Brecht and Joan Littlewood's Theatre Workshop aesthetic, served multiple purposes: it created atmosphere, marked transitions, and prevented the audience from losing themselves in naturalistic illusion. The jazz also connects to Jimmy's cultural identity and to the broader cultural shifts of the late 1950s, when jazz, rock and roll, and youth culture were challenging established social norms.",
  },
]

const assessmentObjectives = [
  {
    code: 'Textual Knowledge',
    description: 'Show detailed knowledge and understanding of the text',
    guidance:
      "Demonstrate thorough knowledge of the play's events, characters, and themes. Refer to specific moments and quote accurately. Do not retell the plot; select relevant details to support your argument. Show that you understand not just what happens but why it matters.",
  },
  {
    code: "Writer's Methods",
    description:
      'Analyse the language, form, and structure used by a writer to create meanings and effects',
    guidance:
      "This is where the highest marks are won. Analyse Delaney's dialogue, her use of humour, the two-act structure, staging choices, and the influence of Joan Littlewood's production. Discuss how kitchen sink realism shapes meaning. Identify specific language techniques (imagery, repetition, tone) and always explain their effect on the audience.",
  },
  {
    code: 'Interpretation',
    description:
      'Demonstrate understanding of the relationships between texts and the contexts in which they were written and received',
    guidance:
      "Discuss 1950s Salford, post-war social change, attitudes to race and sexuality, the Angry Young Men movement, and the kitchen sink realism tradition. Show how these contexts shape the play's themes and the audience's response. Integrate context into your analysis rather than bolting it on as a separate paragraph.",
  },
  {
    code: 'Personal Response',
    description: 'Communicate a clear, relevant response using appropriate terminology',
    guidance:
      'Write clearly and analytically. Use literary terminology accurately (naturalistic dialogue, stage directions, dramatic irony, juxtaposition, symbolism). Structure your response with a clear argument. Avoid feature-spotting: always explain the effect of the techniques you identify.',
  },
]

const plotSummary = [
  {
    act: 'Act 1',
    summary:
      'Jo and her mother Helen move into a comfortless rented flat in Salford. Their relationship is combative: Helen drinks, entertains men, and neglects Jo, while Jo is sharp-tongued and resentful. Helen begins seeing Peter, a brash, younger car salesman who is openly contemptuous of Jo. Meanwhile, Jo starts a relationship with Jimmy, a Black sailor. Jimmy proposes, gives Jo a ring, and they sleep together before he returns to sea, promising to come back. Helen announces she is marrying Peter and leaving. Jo is left alone in the flat, pregnant, though she does not yet realise it.',
    keyQuotations: [
      { quote: "It's a bit of a come-down from the room I had before.", speaker: 'Helen' },
      { quote: "We're unique! Young ones and old ones.", speaker: 'Jo' },
      { quote: "I'm contemporary. I live at the same time as myself.", speaker: 'Jo' },
      { quote: "I love you. You're the first woman I've ever loved.", speaker: 'Jimmy' },
    ],
  },
  {
    act: 'Act 2',
    summary:
      "Several months later. Jo is now visibly pregnant and living alone. Geof, a quiet art student who has been evicted from his lodgings (implied to be because of his homosexuality), moves in with her. Geof cares for Jo domestically - cooking, cleaning, and preparing for the baby - and proposes marriage, which Jo gently refuses. Helen returns, having separated from Peter, and is horrified to learn that the baby's father is Black. She tries to reassert control over Jo's life, driving Geof away. The play ends with Jo alone, about to give birth, having lost the one person who genuinely cared for her. Helen has gone to the pub.",
    keyQuotations: [
      { quote: "I don't want to be a mother. I don't want to be a woman.", speaker: 'Jo' },
      { quote: 'Would you like to marry me?', speaker: 'Geof' },
      { quote: 'The dream has gone but the baby is real enough.', speaker: 'Jo' },
      { quote: "You've got to get rid of this baby, Jo.", speaker: 'Helen' },
    ],
  },
]

/* ─── Page component ─────────────────────────────────────────── */

export default function ATasteOfHoneyStudyGuide() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Cambridge IGCSE English Literature
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            A Taste of Honey &mdash; Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Characters, themes, {keyQuotes.length}+ key quotes with analysis, dramatic techniques,
            1950s context, and Cambridge-specific exam technique for Shelagh Delaney&rsquo;s
            groundbreaking play.
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
            'Dramatic Techniques',
            'Context',
            'What Markers Look For',
            'Exam Questions',
          ].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, '-')}`}
              className="rounded-full border border-amber-800/30 px-3 py-1 text-foreground transition hover:bg-primary/10"
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
          <div className="mt-6 space-y-6">
            {plotSummary.map((act) => (
              <Card key={act.act}>
                <CardHeader>
                  <CardTitle>{act.act}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{act.summary}</p>
                  <div className="mt-4 space-y-2">
                    <p className="text-xs font-semibold text-foreground">Key Quotations</p>
                    {act.keyQuotations.map((q, i) => (
                      <p key={i} className="text-xs italic text-muted-foreground">
                        &ldquo;{q.quote}&rdquo;{' '}
                        <span className="not-italic font-medium text-primary">
                          &mdash; {q.speaker}
                        </span>
                      </p>
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

        {/* ── Key Quotes ──────────────────────────────────────────── */}
        <section id="key-quotes" aria-labelledby="quotes-heading">
          <h2 id="quotes-heading" className="text-2xl font-bold text-foreground">
            Key Quotes ({keyQuotes.length})
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Each quote includes the speaker, location, and detailed analysis suitable for Cambridge
            IGCSE responses.
          </p>
          <div className="mt-6 space-y-5">
            {keyQuotes.map((q, i) => (
              <div key={i} className="rounded-lg border-l-4 border-amber-800 bg-card p-5 shadow-md">
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

        {/* ── Dramatic Techniques ─────────────────────────────────── */}
        <section id="dramatic-techniques" aria-labelledby="techniques-heading">
          <h2 id="techniques-heading" className="text-2xl font-bold text-foreground">
            Dramatic Techniques
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Delaney&rsquo;s dramatic techniques are essential for Writer's Methods (analysis of
            form, structure, and language). Markers reward responses that discuss <em>how</em>{' '}
            Delaney creates meaning, not just <em>what</em> happens.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {dramaticTechniques.map((d) => (
              <Card key={d.name}>
                <CardHeader>
                  <CardTitle>{d.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{d.detail}</p>
                </CardContent>
              </Card>
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
            Cambridge markers expect you to integrate contextual knowledge into your analysis
            (Interpretation). The following areas are most relevant to A Taste of Honey.
          </p>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <Card>
              <CardHeader>
                <CardTitle>1950s Salford and Working-Class Life</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Shelagh Delaney grew up in Salford, a working-class industrial city near
                  Manchester. In the 1950s, Salford was characterised by terraced housing, factory
                  work, poverty, and close-knit but economically deprived communities. The
                  play&rsquo;s setting - a cold, comfortless flat - reflects the real living
                  conditions Delaney knew. Housing was often damp, overcrowded, and lacking basic
                  amenities. Delaney draws directly on this environment to ground her drama in
                  material reality.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>The Kitchen Sink Movement</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  A Taste of Honey belongs to the wave of &lsquo;kitchen sink realism&rsquo; that
                  transformed British theatre and cinema in the late 1950s. John Osborne&rsquo;s
                  Look Back in Anger (1956) is often cited as the movement&rsquo;s starting point,
                  but Delaney&rsquo;s play - written when she was just eighteen - brought a
                  distinctively female, northern, working-class voice to the stage. The movement
                  rejected the polished drawing-room conventions of the theatrical establishment,
                  insisting that ordinary lives deserved serious dramatic treatment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Race and Immigration in 1950s Britain</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The arrival of the Empire Windrush in 1948 marked the beginning of large-scale
                  Caribbean immigration to Britain. By the late 1950s, racial tensions were visible:
                  the 1958 Notting Hill race riots occurred the same year A Taste of Honey was first
                  performed. Delaney&rsquo;s sympathetic, non-judgmental portrayal of an interracial
                  relationship was genuinely radical. Jimmy is presented as a warm, romantic figure,
                  and the play locates prejudice firmly in the attitudes of other characters (Peter,
                  Helen) rather than in the relationship itself.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Attitudes to Gender and Sexuality</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  In the 1950s, women were expected to marry, keep house, and raise children.
                  Unmarried motherhood carried severe social stigma. Homosexuality was illegal in
                  England and Wales until 1967 (the Sexual Offences Act). Delaney&rsquo;s decision
                  to place a pregnant unmarried teenager and a gay man at the centre of her play was
                  a deliberate provocation. She treats both characters with compassion and dignity,
                  presenting their situations as ordinary human experiences rather than moral
                  failings.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Joan Littlewood and Theatre Workshop</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The play was first produced by Joan Littlewood&rsquo;s Theatre Workshop at the
                  Theatre Royal, Stratford East, in May 1958. Littlewood was a pioneering director
                  committed to working-class theatre. Her collaborative approach shaped the final
                  production significantly: she added the jazz trio, encouraged improvisation, and
                  enhanced the play&rsquo;s Brechtian elements. The Theatre Workshop&rsquo;s ethos -
                  accessible, politically engaged, formally experimental - was integral to the
                  play&rsquo;s impact.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Shelagh Delaney: A New Voice</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Delaney wrote A Taste of Honey at the age of eighteen, allegedly after seeing a
                  play she thought she could improve upon. As a working-class woman from Salford
                  with no university education, she was an outsider in the theatrical world. Her
                  youth, gender, and class made her debut all the more remarkable. The play drew on
                  her own experiences of growing up in poverty, and its authenticity was immediately
                  recognised by critics and audiences. Delaney gave a voice to people who had been
                  largely invisible on the British stage.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Assessment Objectives ───────────────────────────────── */}
        <section id="what-markers-look-for" aria-labelledby="ao-heading">
          <h2 id="ao-heading" className="text-2xl font-bold text-foreground">
            Cambridge Assessment Objectives
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Understanding the assessment objectives helps you target your revision and structure
            your exam answers for maximum marks.
          </p>
          <div className="mt-6 space-y-4">
            {assessmentObjectives.map((ao) => (
              <Card key={ao.code}>
                <CardContent className="pt-5">
                  <div className="flex items-center gap-2">
                    <span className="inline-block rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                      {ao.code}
                    </span>
                    <h3 className="font-semibold text-foreground">{ao.description}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {ao.guidance}
                  </p>
                </CardContent>
              </Card>
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
            Cambridge IGCSE questions on set drama texts typically offer a choice between a
            passage-based question (a) and an essay question (b). Below are examples of both types
            with guidance on how to approach them.
          </p>

          <div className="mt-6 space-y-6">
            {/* Passage-based */}
            <Card>
              <CardContent className="pt-5">
                <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                  (a) Passage-Based
                </span>
                <p className="mt-3 text-sm font-medium text-foreground">
                  Re-read the passage in Act 2 where Geof prepares for the baby&rsquo;s arrival and
                  proposes marriage to Jo. How does Delaney make this such a significant moment in
                  the play?
                </p>
                <div className="mt-3 rounded bg-primary/5 p-3">
                  <p className="text-xs font-semibold text-foreground">How to approach:</p>
                  <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                    <li>
                      &bull; Analyse Geof&rsquo;s gentle, tentative language: &lsquo;Would you like
                      to marry me?&rsquo; - contrast with Jimmy&rsquo;s romantic declarations
                    </li>
                    <li>
                      &bull; Discuss Geof&rsquo;s domestic actions (cooking, cleaning, preparing
                      baby clothes) as a reversal of 1950s gender roles
                    </li>
                    <li>
                      &bull; Consider Jo&rsquo;s refusal: she values honesty over social convention
                    </li>
                    <li>
                      &bull; Link to context: homosexuality was illegal; Geof offers a marriage of
                      convenience that challenges social norms
                    </li>
                    <li>
                      &bull; Analyse the dramatic irony: the audience knows Helen will return and
                      destroy this fragile domestic arrangement
                    </li>
                    <li>
                      &bull; Use terminology: naturalistic dialogue, stage directions, subtext,
                      juxtaposition
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Essay question */}
            <Card>
              <CardContent className="pt-5">
                <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                  (b) Essay Question
                </span>
                <p className="mt-3 text-sm font-medium text-foreground">
                  How does Delaney present the relationship between Jo and Helen in A Taste of
                  Honey?
                </p>
                <div className="mt-3 rounded bg-primary/5 p-3">
                  <p className="text-xs font-semibold text-foreground">How to approach:</p>
                  <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                    <li>&bull; Plan 3&ndash;4 key points with supporting quotations for each</li>
                    <li>
                      &bull; Track the relationship across both acts: combative closeness in Act 1,
                      separation and painful reunion in Act 2
                    </li>
                    <li>
                      &bull; Analyse the dialogue: rapid exchanges, dark humour, mutual cruelty
                      masked as affection
                    </li>
                    <li>
                      &bull; Discuss the cycle of neglect: Jo fears becoming Helen, but her
                      circumstances push her towards the same pattern
                    </li>
                    <li>
                      &bull; Reference context: limited options for working-class women, absent
                      fathers, the social stigma of unmarried motherhood
                    </li>
                    <li>
                      &bull; Consider Delaney&rsquo;s purpose: she refuses to idealise motherhood,
                      presenting it as shaped by material conditions
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Essay question 2 */}
            <Card>
              <CardContent className="pt-5">
                <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                  (b) Essay Question
                </span>
                <p className="mt-3 text-sm font-medium text-foreground">
                  How does Delaney use the character of Geof to challenge social conventions in A
                  Taste of Honey?
                </p>
                <div className="mt-3 rounded bg-primary/5 p-3">
                  <p className="text-xs font-semibold text-foreground">How to approach:</p>
                  <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                    <li>
                      &bull; Discuss Geof&rsquo;s implied homosexuality and the legal/social context
                      (homosexuality illegal until 1967)
                    </li>
                    <li>
                      &bull; Analyse his domestic, caring role as a reversal of 1950s masculinity
                    </li>
                    <li>
                      &bull; Contrast Geof with Peter and Jimmy: he is the most nurturing figure in
                      the play
                    </li>
                    <li>
                      &bull; Consider Delaney&rsquo;s presentation of an alternative family model:
                      care-based rather than convention-based
                    </li>
                    <li>
                      &bull; Discuss Helen&rsquo;s hostility towards Geof and what it reveals about
                      societal attitudes
                    </li>
                    <li>
                      &bull; Link to Delaney&rsquo;s broader purpose: normalising marginalised
                      identities on the British stage
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Passage-based 2 */}
            <Card>
              <CardContent className="pt-5">
                <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                  (a) Passage-Based
                </span>
                <p className="mt-3 text-sm font-medium text-foreground">
                  Re-read the opening of the play, from Jo and Helen&rsquo;s arrival at the flat to
                  Helen&rsquo;s first mention of Peter. How does Delaney use this section to
                  establish character and setting?
                </p>
                <div className="mt-3 rounded bg-primary/5 p-3">
                  <p className="text-xs font-semibold text-foreground">How to approach:</p>
                  <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                    <li>
                      &bull; Analyse stage directions: the flat&rsquo;s poverty (cold, dark, sparse)
                      establishes kitchen sink realism
                    </li>
                    <li>
                      &bull; Discuss the dialogue: Jo and Helen&rsquo;s rapid, combative exchanges
                      establish their relationship dynamic
                    </li>
                    <li>
                      &bull; Note Helen&rsquo;s ironic humour as a defence mechanism against their
                      circumstances
                    </li>
                    <li>
                      &bull; Identify Jo&rsquo;s intelligence and independence from her first lines
                    </li>
                    <li>
                      &bull; Consider the audience&rsquo;s response: Delaney immediately confronts
                      them with working-class reality
                    </li>
                    <li>
                      &bull; Link to context: 1950s Salford housing conditions, the kitchen sink
                      movement
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* ── Sample Model Paragraph ──────────────────────────── */}
            <Card className="border-2 border-primary/30">
              <CardHeader>
                <CardTitle className="text-lg">Sample Question &amp; Model Paragraph</CardTitle>
                <CardDescription>
                  Demonstrating all four Assessment Objectives in a single paragraph
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-foreground">
                  <em>How does Delaney present the theme of motherhood in A Taste of Honey?</em>
                </p>
                <div className="mt-4 rounded-lg border border-border bg-primary/5 p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Delaney presents motherhood as a cycle of neglect shaped by poverty and limited
                    opportunity, rather than the natural, instinctive bond idealised by 1950s
                    society <span className="font-semibold text-primary">[Textual Knowledge]</span>.
                    When Jo confesses, &ldquo;I used to try to hold my mother&rsquo;s hands but she
                    always pushed me away,&rdquo; the contrast between the child&rsquo;s reaching
                    gesture and the mother&rsquo;s rejection creates a painful image of emotional
                    deprivation{' '}
                    <span className="font-semibold text-primary">[Writer's Methods]</span>. The verb
                    &ldquo;pushed&rdquo; implies physical force, while &ldquo;always&rdquo;
                    establishes this as a habitual pattern rather than a single incident, suggesting
                    that Helen&rsquo;s neglect is systemic{' '}
                    <span className="font-semibold text-primary">[Writer's Methods]</span>. This
                    failure of maternal care must be understood in the context of 1950s
                    working-class Britain, where women like Helen had little access to education,
                    stable employment, or social support, and were often forced into dependency on
                    unreliable men{' '}
                    <span className="font-semibold text-primary">[Interpretation]</span>. Delaney
                    uses the juxtaposition between Helen&rsquo;s biological motherhood and
                    Geof&rsquo;s nurturing care to argue that genuine parenting is defined by
                    action, not biology - a radical proposition on the 1958 stage, where the nuclear
                    family was rarely questioned{' '}
                    <span className="font-semibold text-primary">[Interpretation]</span>. By
                    structuring the play so that Jo&rsquo;s own pregnancy mirrors Helen&rsquo;s
                    earlier experience, Delaney implies that without structural change, the cycle of
                    neglect will simply repeat - a deeply pessimistic but honest conclusion that
                    refuses the comfort of a sentimental resolution{' '}
                    <span className="font-semibold text-primary">[Personal Response]</span>.
                  </p>
                </div>
                <div className="mt-3 rounded bg-muted/50 p-3">
                  <p className="text-xs font-semibold text-foreground">Why this works:</p>
                  <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                    <li>
                      &bull; <strong>Textual Knowledge:</strong> Demonstrates knowledge of the text
                      with an accurate, embedded quotation and reference to the play&rsquo;s events
                    </li>
                    <li>
                      &bull; <strong>Writer's Methods:</strong> Analyses specific word choices
                      (&ldquo;pushed&rdquo;, &ldquo;always&rdquo;) and structural techniques
                      (juxtaposition, cyclical structure)
                    </li>
                    <li>
                      &bull; <strong>Interpretation:</strong> Integrates contextual knowledge (1950s
                      working-class conditions, attitudes to family) into the argument rather than
                      bolting it on
                    </li>
                    <li>
                      &bull; <strong>Personal Response:</strong> Communicates clearly with
                      appropriate literary terminology (juxtaposition, cyclical structure,
                      resolution) and sustains a coherent argument
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* ── Exam Technique ───────────────────────────────────── */}
            <div className="rounded-lg border-2 border-amber-800/30 bg-primary/5 p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Cambridge Exam Technique: Key Tips
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">Passage-based (a) questions:</strong> Work
                  through the extract methodically. Use short, embedded quotations from the passage.
                  Analyse language, form, and structure (Writer's Methods). Then connect outward to
                  the rest of the play and relevant context. Stay focused on the passage but show
                  awareness of the wider play.
                </li>
                <li>
                  <strong className="text-foreground">Essay (b) questions:</strong> Plan before you
                  write. Select 3&ndash;4 key moments from across the play with quotations. Focus on
                  Delaney&rsquo;s methods and purpose, not just what happens. Integrate context
                  rather than adding it as a separate paragraph.
                </li>
                <li>
                  <strong className="text-foreground">Always use the author&rsquo;s name:</strong>{' '}
                  Write &ldquo;Delaney presents...&rdquo; or &ldquo;Delaney uses...&rdquo; rather
                  than &ldquo;the play shows...&rdquo;. This demonstrates awareness of authorial
                  intent and helps you discuss methods (Writer's Methods).
                </li>
                <li>
                  <strong className="text-foreground">Connect to context purposefully:</strong>{' '}
                  Reference 1950s Salford, attitudes to race and sexuality, the kitchen sink
                  movement, and gender expectations - but always link context to the specific point
                  you are making. Avoid generic context paragraphs.
                </li>
                <li>
                  <strong className="text-foreground">Quote precisely:</strong> Short, embedded
                  quotations (&lsquo;pushed me away&rsquo;) are more effective than long block
                  quotes. Aim for at least one quotation per paragraph.
                </li>
                <li>
                  <strong className="text-foreground">
                    Link everything to Delaney&rsquo;s purpose:
                  </strong>{' '}
                  The strongest answers connect analysis to Delaney&rsquo;s intentions. Why does she
                  make Geof the most caring character? Why does Helen return at the end? Why is the
                  ending unresolved? Always ask: what is Delaney trying to make the audience think
                  or feel?
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Back link ───────────────────────────────────────────── */}
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
