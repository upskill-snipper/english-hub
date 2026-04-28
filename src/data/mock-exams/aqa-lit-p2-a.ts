// @ts-nocheck
import type { MockExamPaper } from '../mock-exams'

// ═══════════════════════════════════════════════════════════════════════════════
// AQA English Literature Paper 2: Modern Texts and Poetry (8702/2)
// 5 complete mock papers — An Inspector Calls, Power & Conflict, Unseen Poetry
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Unseen Poems ───────────────────────────────────────────────────────────────

// Paper 1 — Unseen Poems
const UNSEEN_1A = `The Foundry

Six days a week the furnace mouth
swallowed our fathers whole —
they walked in upright, ordinary men,
and came back stooped and small.

The heat pressed language from their lips;
they spoke in nods and grunts,
in the clink of coins on kitchen tables,
in boots left at the door.

My mother read his silence
like a book in a foreign tongue —
she learned the grammar of exhaustion,
the syntax of a bitten tongue.

When the foundry closed, he sat
in the kitchen chair for weeks,
still rising every morning at five,
still lacing phantom boots.`

const UNSEEN_1B = `Shift's End

He carried the smell of it home each night,
sulphur and slag embedded in skin,
his overalls stiff with a second body
that would not wash away.

At the table he held his fork
the way he held his chisel — clenched,
as though the meal might fight him,
as though rest was a trick.

I watched him from the stairs,
my father folded into a man
I did not recognise —
his hands too large for tenderness,

his voice a rasp that softened
only when he thought I slept,
whispering goodnight to the dark
like a prayer he half-remembered.`

// Paper 2 — Unseen Poems
const UNSEEN_2A = `Border Country

We crossed in the blue hour
when the guards changed shift,
our belongings in a plastic bag,
our papers in my mother's fist.

She told us not to look back.
She told us the fence was just a fence,
that the dogs were only dogs,
that fear was something you could fold

and put away, like laundry.
I believed her. I was seven.
The moon was a torn fingernail
snagged on barbed wire.

On the other side, a field
of sunflowers stood in the dark,
their heads bowed as if in welcome,
or in grief — I could not tell.`

const UNSEEN_2B = `Passage

They sealed us in the lorry at dusk,
thirty bodies breathing one breath,
the dark so thick you could press
your thumb into it like clay.

My sister gripped my hand.
Somebody's child was crying
in a language I had never heard
but understood completely.

Hours passed, or minutes.
When the doors swung open
the light was blinding —
ordinary English light,

grey and soft and careless,
falling on a car park,
on a man eating a sandwich,
on the rest of our lives.`

// Paper 3 — Unseen Poems
const UNSEEN_3A = `What the River Knows

The river has been taking notes for centuries —
recording every footstep on its banks,
the weight of bridges, the confessions
tossed from railings after dark.

It knows the names of drowned things:
bicycles and shopping trolleys,
a wedding ring thrown in anger,
a letter that was never sent.

It remembers the factories that drank it dry,
the cholera summers, the ice fairs,
the children who swam here
before the signs went up.

Now it carries coffee cups and condoms,
plastic bags like pale jellyfish,
and still it keeps moving —
patient, indifferent, old as stone.`

const UNSEEN_3B = `Estuary

The tide unpacks itself across the mud,
laying out its wares: a crab shell,
the spine of a gull, a length of rope
still holding the shape of a knot.

Nothing stays. The water writes
and overwrites its messages,
each wave a sentence spoken
to no one, understood by everything.

I stand where land gives up
pretending to be solid,
where my feet sink and the earth
closes gently over them,

and I think: this is how grief works —
not the drowning they describe,
but the slow, soft pull of ground
that wants you to remain.`

// Paper 4 — Unseen Poems
const UNSEEN_4A = `Controlled Assessment

They measure us by numbers now:
attendance codes, predicted grades,
the distance between target and result
plotted on a graph.

My teacher says I am a C
aspiring to a B —
as though I am a letter
learning to be a better letter.

In the corridor they've pinned
a banner: AIM HIGHER.
Below it, Jason Cooke is crying
because his mum forgot to come.

The data says we're improving.
The spreadsheet tells a story
of upward trends and value-added,
and none of it mentions Jason,

or the way his face crumpled
like paper, or how Miss Shah
held him, said nothing, held him —
which is not on any mark scheme.`

const UNSEEN_4B = `Assembly

They lined us up in rows
and told us to be grateful:
for hot meals, for heating,
for the privilege of equations.

The headmaster spoke in graphs —
attendance up, exclusions down,
each child a data point
on the road to somewhere better.

I sat at the back and counted
ceiling tiles, radiator pipes,
the seconds until the bell.
My best friend was gone —

moved to a different school
in a different borough,
and nobody had measured
the size of that particular loss.`

// Paper 5 — Unseen Poems
const UNSEEN_5A = `Inheritance

My grandmother left me her hands —
broad palms mapped with creases,
fingers that remember how to braid hair,
how to fold pastry, how to pray.

She left me her stubbornness,
her habit of singing while cooking,
her refusal to sit in the front pew,
her faith in bread as medicine.

I found her recipes in a biscuit tin,
written in pencil on the backs of envelopes,
measurements guessed — a handful, a pinch,
a bit more if the day is cold.

She left me her accent, a country
I have never visited that lives
inside my vowels like a tenant
who will not be evicted.`

const UNSEEN_5B = `Dowry

My mother brought three things
across the water: a cooking pot,
a photograph of people I would never meet,
and a silence she would not explain.

The pot still sits on our shelf,
dented, blackened, out of place
between the microwave and the kettle
like a word from another language.

The photograph lives in a drawer.
Sometimes she opens it,
touches a face, says a name
that means nothing and everything.

The silence she distributed evenly —
we each carry a portion,
passing it between us at the table
like a dish no one remembers ordering.`

// ─── Papers ─────────────────────────────────────────────────────────────────────

export const aqaLitP2Papers: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 1
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lit-p2-01',
    board: 'AQA',
    paperNumber: 2,
    title: 'Paper 2: Modern Texts and Poetry',
    subtitle: 'English Literature 8702/2',
    code: '8702/2',
    totalTimeMinutes: 135,
    totalMarks: 96,
    sections: [
      {
        id: 'aqa-lit-p2-01-secA',
        title: 'Section A: Modern Texts',
        description:
          'Answer one question from this section on your studied text.\n\nAn Inspector Calls — J.B. Priestley',
        totalMarks: 34,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'aqa-lit-p2-01-q1',
            questionNumber: 1,
            questionText:
              'How does Priestley use the character of Mr Birling to explore ideas about responsibility?\n\nWrite about:\n• how Priestley presents Mr Birling at different points in the play\n• how Priestley uses Mr Birling to explore ideas about responsibility.\n\n[30 marks + 4 marks for SPaG]',
            marks: 34,
            suggestedTimeMinutes: 50,
            questionType: 'evaluation',
            modelAnswers: {
              'Grade 4-5': `Priestley uses Mr Birling to show ideas about responsibility. At the start of the play, Birling makes a speech about how "a man has to mind his own business and look after himself and his own." This shows he doesn't care about other people and only thinks about himself and his family. He is a capitalist who thinks everyone should look after themselves.

When the Inspector arrives and tells them about Eva Smith, Birling doesn't want to take responsibility. He fired Eva from his factory because she asked for higher wages. He says "I can't accept any responsibility" which shows he doesn't think he did anything wrong. He thinks paying workers less is just good business.

Birling is also used to show how wrong selfish people can be. He says the Titanic is "unsinkable" and that there won't be a war, but the audience knows these things are wrong. Priestley does this to show that people like Birling who only care about themselves don't understand the world properly.

At the end of the play, when they find out the Inspector might have been fake, Birling is relieved and celebrates. He hasn't learned anything, which is different from the younger generation like Sheila. Priestley uses this to show that older, selfish people can't change.

Overall, Priestley uses Birling to criticise people who don't take responsibility for others and to show the audience that we should all care about each other.`,
              'Grade 6-7': `Priestley constructs Mr Birling as a dramatic vehicle through which to criticise capitalist individualism and the refusal to accept social responsibility. From his opening speeches, Birling is presented as confident, dogmatic, and utterly self-assured. His declaration that "a man has to mind his own business and look after himself" establishes him as the embodiment of laissez-faire capitalism, a philosophy Priestley seeks to dismantle throughout the play.

Birling's dramatic irony is central to Priestley's method. His confident predictions — that the Titanic is "unsinkable," that war is impossible, that technological progress guarantees prosperity — are designed to undermine his credibility with the audience. Written in 1945 but set in 1912, the play exploits the audience's historical knowledge to suggest that Birling's worldview is not merely selfish but demonstrably, catastrophically wrong. Priestley implies that the refusal to accept collective responsibility is not an intellectual position but a form of wilful blindness.

When confronted with Eva Smith's death, Birling's response reveals the limitations of his moral framework. He acknowledges firing her but insists he acted reasonably: "I can't accept any responsibility." His language is telling — "accept" implies that responsibility exists but can be declined, like an unwanted invitation. Priestley suggests that for men like Birling, morality is transactional: obligations are only real if they are legally enforceable.

Significantly, Birling does not undergo any transformation. While Sheila and Eric are profoundly affected by the Inspector's visit, Birling reverts immediately to self-congratulation when the threat of scandal recedes. His final relief — "the whole thing's different now" — demonstrates that his concern was never moral but reputational. Priestley uses this stasis to distinguish between the older generation, entrenched in selfish values, and the younger generation, capable of genuine moral growth.

Through Birling, Priestley argues that social responsibility cannot be optional: it must be understood as a fundamental obligation, or the consequences — as the Inspector's final speech makes clear — will be "fire and blood and anguish."`,
              'Grade 8-9': `Priestley deploys Mr Birling as both a character and an ideological construct — a concentrated expression of the Edwardian capitalist mindset that the play systematically dismantles. Birling is not merely a bad man; he is a system of thought made flesh, and Priestley's genius lies in ensuring that the audience's rejection of Birling's character becomes, inevitably, a rejection of the economic philosophy he represents.

From the outset, Birling is presented through a carefully orchestrated pattern of dramatic irony so devastating that it functions almost as satire. His confident assertions — the Titanic is "unsinkable absolutely unsinkable," war is impossible because "the Germans don't want war" — are not simply wrong but wrong on a civilisational scale. Writing in 1945, in the aftermath of two world wars and the sinking of the Titanic, Priestley weaponises the audience's historical knowledge against Birling's rhetoric. The effect is to establish a hermeneutic principle for the entire play: when Birling speaks with certainty, the opposite is true. Thus, when he insists that "a man has to mind his own business and look after himself and his own," the audience is already primed to understand this not as common sense but as the foundational delusion of a worldview that has produced catastrophe.

Birling's response to Eva Smith's death reveals the moral architecture of that delusion with surgical precision. His language — "I can't accept any responsibility" — is revealing in its passive construction. Responsibility, in Birling's grammar, is something external that arrives, like a bill, and can be returned to sender. Priestley contrasts this with the Inspector's active formulation: "we are members of one body. We are responsible for each other." The clash is not merely between two opinions but between two ontologies — Birling's atomised individualism, in which each person is a discrete economic unit, and the Inspector's collectivism, in which identity is relational and obligation is intrinsic.

The staging reinforces this ideological conflict. Birling occupies the head of the dining table — a patriarchal position of authority — yet his authority is systematically dismantled by the Inspector's interrogation. His attempts to invoke social status ("I was an alderman for years — and Lord Mayor two years ago") reveal that his concept of responsibility is entirely hierarchical: he recognises obligations upward (to those with more social power) but not downward (to those with less). Eva Smith is, in his framework, literally beneath notice.

Crucially, Birling's stasis at the play's conclusion is not simply a failure of character but a structural necessity. Priestley requires him to remain unchanged so that the audience understands that the capitalist mindset is not susceptible to moral argument — it can only be replaced, not reformed. When Birling celebrates the apparent exposure of the Inspector as a fraud, his relief is not personal but ideological: if the Inspector's narrative is false, then the moral framework it demanded can be safely discarded. Priestley denies Birling — and the audience — this comfort with the final telephone call, which reasserts the reality of consequence and the inescapability of collective responsibility.

Through Birling, Priestley crafts a devastating argument: that the language of personal responsibility, as deployed by those with economic power, is itself the mechanism by which genuine social responsibility is evaded. Birling's tragedy — if a man so lacking in self-awareness can be said to have one — is that he cannot recognise himself as the problem he claims does not exist.`,
            },
            markScheme: [
              'AO1: Read, understand and respond — use textual references to support interpretation (12 marks)',
              'AO2: Analyse language, form and structure using subject terminology (12 marks)',
              'AO3: Show understanding of context (6 marks)',
              'AO4: SPaG — spelling, punctuation, grammar, vocabulary (4 marks)',
              'Band 5-6: Thoughtful/critical response, judicious references, analysis of methods with terminology, context convincingly explored',
              'Band 3-4: Clear/explained response, effective references, clear understanding of methods, context clearly understood',
              'Band 1-2: Simple/emerging response, some references, awareness of methods, some context',
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p2-01-secB',
        title: 'Section B: Poetry Anthology',
        description: 'Answer one question from this section.\n\nPower and Conflict Anthology',
        totalMarks: 30,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-lit-p2-01-q2',
            questionNumber: 2,
            questionText:
              'Compare how poets present the lasting effects of conflict in "Remains" by Simon Armitage and "Exposure" by Wilfred Owen.\n\nIn your answer you should consider:\n• the poets\' use of language, form and structure\n• the influence of the contexts in which the poems were written.\n\n[30 marks]',
            marks: 30,
            suggestedTimeMinutes: 45,
            questionType: 'comparison',
            modelAnswers: {
              'Grade 4-5': `Both "Remains" and "Exposure" show the lasting effects of conflict on soldiers. In "Remains," Armitage writes about a soldier who can't forget killing a man. The line "his blood-shadow stays on the street" shows that the memory won't go away, like a stain. The soldier tries to get rid of the memory by drinking and taking drugs but "the image of the dead man" is "dug in behind my eyes." This shows the psychological effects of war.

In "Exposure," Owen shows how soldiers suffer from the cold and waiting. The repeated line "But nothing happens" shows how boring and painful war is. The cold is described as attacking them: "the merciless iced east winds that knive us." This personification makes the weather seem like an enemy.

Both poems show that conflict causes suffering that lasts. In "Remains" it's psychological — the soldier can't stop thinking about what he did. In "Exposure" it's physical and mental — the soldiers are slowly destroyed by the conditions. Owen uses half-rhyme throughout which creates an unsettling feeling, while Armitage uses colloquial language to make it feel real and modern.

The context is different because Owen wrote during World War One and experienced the trenches himself, while Armitage based "Remains" on a documentary about modern soldiers in Iraq. Both poets are showing that war damages people no matter when it happens.`,
              'Grade 6-7': `Armitage and Owen both present conflict as an experience that inflicts enduring psychological and physical damage, though they approach this theme from markedly different temporal and stylistic positions.

In "Remains," the lasting effects of conflict are figured primarily as psychological haunting. The speaker's casual, colloquial register — "probably armed, possibly not" — initially disguises the trauma beneath a veneer of soldierly nonchalance, but the poem's structure enacts the progressive collapse of that defence. The transition from the collective "we" to the isolated "I" tracks the soldier's descent into individual guilt, while the image of the dead man whose "blood-shadow stays on the street" transforms a specific memory into something permanent and archetypal. Armitage's use of enjambment — "his bloody life in my bloody hands" — forces the reader to inhabit the soldier's inability to contain or control the memory. The final metaphor of the dead man "dug in behind my eyes" is grimly military in its vocabulary, suggesting that the victim has become an occupying force in the soldier's consciousness.

Owen's approach in "Exposure" is more systematic and less individual. The lasting effects of conflict are presented not as a single traumatic event but as a grinding, cumulative process of attrition. The pararhyme — "knive us... nervous," "silent... salient" — creates a formal architecture of near-misses that mirrors the soldiers' experience of almost-but-not-quite dying, a sustained tension that is its own form of suffering. The repeated refrain "But nothing happens" is devastating in its simplicity: it reconfigures inaction itself as a form of violence, suggesting that the waiting and the cold are not interruptions to war but its truest expression.

Contextually, both poems respond to the gap between official narratives of conflict and lived experience. Owen, writing during World War One, challenges the patriotic rhetoric that sustained public support for the war; his soldiers die not in glorious battle but from hypothermia, "forgotten" by a society that sent them to fight. Armitage, responding to twenty-first-century conflicts in Iraq and Afghanistan, addresses a different but related problem: the invisibility of psychological trauma in soldiers who return physically intact but mentally shattered.

Both poets ultimately suggest that the lasting effects of conflict cannot be contained by conventional language or structure. Owen's half-rhymes and Armitage's colloquialisms are both, in their different ways, attempts to find a form adequate to an experience that resists neat articulation.`,
              'Grade 8-9': `Armitage and Owen construct complementary but formally distinct meditations on the persistence of conflict within the human mind and body, each deploying poetic structure as a mechanism for enacting — rather than merely describing — the lasting damage of war.

"Remains" operates through a carefully orchestrated collapse of register and perspective. The opening stanza's colloquial informality — "On another occasion, we got sent out" — performs the speaker's initial attempt to process trauma through the language of anecdote, as though the killing can be domesticated by being narrated casually. The shift from plural to singular pronouns ("we" to "I") is not merely a grammatical change but a moral one: it charts the moment at which collective military action becomes individual guilt. Armitage's formal choices reinforce this disintegration — the poem's loose, unrhymed stanzas suggest a narrative structure that cannot quite hold itself together, while the enjambment across stanza breaks ("probably armed, possibly not" straddling a line break) enacts the speaker's inability to establish certainty about his own actions. The central image — "his blood-shadow stays on the street" — operates on multiple levels: it is both a literal description and a metaphor for the indelible psychological imprint of violence. The compound "blood-shadow" refuses to resolve into a single semantic category, yoking the physical (blood) to the immaterial (shadow) in a way that captures the paradox of traumatic memory — simultaneously vivid and unreal.

Owen's "Exposure," by contrast, presents lasting damage not as a dramatic event but as an atmospheric condition. The poem's pararhyme — "knive us / nervous," "wire / war," "snow-dazed / sun-dozed" — creates a soundscape of perpetual near-resolution, in which rhyme almost arrives but never quite does. This formal choice is precisely calibrated to the poem's thematic content: the soldiers exist in a state of permanent anticipation that never resolves into action or relief. The repeated "But nothing happens" gains cumulative force through each iteration, transforming from a report into an indictment — the "nothing" that happens is itself a form of destruction, a slow erasure of identity, purpose, and hope.

Owen's manipulation of tense is particularly striking. The present tense ("Our brains ache") creates an eternal present from which there is no escape — the suffering is not remembered but perpetually re-experienced, a formal anticipation of what would later be understood as the temporality of PTSD. Armitage achieves a similar effect through different means: the shift in "Remains" from past tense narration to the present-tense final stanza ("he's here in my head") collapses the distance between event and aftermath, suggesting that for the traumatised mind, the past is not past.

Contextually, both poems interrogate the relationship between conflict and visibility. Owen's soldiers are rendered "Forgotten" by the very society they defend — the domestic world of "kind fires" and "glowing coals" exists in a separate reality that cannot accommodate the truth of the trenches. Armitage addresses a contemporary parallel: the speaker in "Remains" has been physically present on a street where "the public" can watch, yet his psychological damage remains invisible, undiagnosed, untreated. Both poets suggest that the lasting effects of conflict are compounded by society's refusal to witness them.

Structurally, the two poems arrive at parallel conclusions through inverse methods. Owen moves from the specific ("Our brains ache") to the cosmic ("For love of God seems dying"), suggesting that exposure destroys not just individual soldiers but the moral framework of civilisation itself. Armitage narrows from the collective to the agonisingly personal, ending with the dead man "dug in behind my eyes" — a metaphor that turns the vocabulary of military entrenchment against the soldier himself, suggesting that in modern conflict, the true occupation occurs within the mind of the survivor.`,
            },
            markScheme: [
              'AO1: Read, understand and respond — use textual references to support interpretation (12 marks)',
              'AO2: Analyse language, form and structure using subject terminology (12 marks)',
              'AO3: Show understanding of context (6 marks)',
              'Must compare both poems throughout — not two separate essays',
              'Band 5-6: Critical comparison, exploratory analysis of methods, convincing context',
              'Band 3-4: Clear comparison, explained analysis of methods, clear context',
              'Band 1-2: Simple comparison, awareness of methods, some context',
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p2-01-secC',
        title: 'Section C: Unseen Poetry',
        description: 'Answer both questions in this section.',
        totalMarks: 32,
        suggestedTimeMinutes: 40,
        questions: [
          {
            id: 'aqa-lit-p2-01-q3',
            questionNumber: 3,
            questionText:
              'In "The Foundry," how does the poet present the impact of work on family life?\n\n[24 marks]',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'analysis',
            extract: UNSEEN_1A,
            extractSource: 'Original poem — "The Foundry"',
            modelAnswers: {
              'Grade 4-5': `The poet presents work as something that changes the father and affects the whole family. The furnace "swallowed our fathers whole" which is a metaphor showing that the factory consumed them completely. They went in as "ordinary men" and came back "stooped and small," which shows the work physically damaged them.

The father's silence is important. He communicates in "nods and grunts" instead of words, showing the work has taken away his ability to express himself. The mother has to learn to read his silence "like a book in a foreign tongue," which is a simile showing that the father has become like a stranger in his own home.

When the foundry closes, the father keeps getting up at five and "lacing phantom boots." This shows that the work has become part of his identity and without it he doesn't know who he is. The word "phantom" is interesting because it suggests something ghostly, as if the job is haunting him even after it's gone.

Overall, the poem shows that hard physical work takes away people's humanity and affects their families too.`,
              'Grade 6-7': `The poet presents work as a dehumanising force that infiltrates and distorts family relationships. The opening metaphor — the furnace "swallowed our fathers whole" — establishes the factory as a consuming entity, an image that positions the workers as passive, even sacrificial. The transformation from "upright, ordinary men" to figures who return "stooped and small" is both literal (the physical toll of manual labour) and symbolic: the work diminishes them in every sense.

Language is central to the poem's exploration of work's domestic impact. The father's communication is reduced to "nods and grunts" and material signs — "the clink of coins on kitchen tables, / in boots left at the door." These metonymic substitutions suggest that the father has been emptied of emotional language; his only vocabulary is the vocabulary of labour. The mother's response — reading his silence "like a book in a foreign tongue" — extends this linguistic metaphor, suggesting that work has created an unbridgeable communicative distance within the marriage. The phrase "grammar of exhaustion" is particularly effective, implying that tiredness has its own structured language that must be learned and interpreted.

The poem's final stanza shifts from the damage of work to the damage of its absence. The father's continued early rising and "lacing phantom boots" is haunting in its suggestion that identity, once consumed by labour, cannot be recovered when that labour ends. "Phantom" carries connotations of amputation (phantom limb syndrome), implying that the job was so integral to the father's selfhood that its removal has left a painful absence that the body continues to reach for.

Structurally, the poem's four quatrains mirror the regularity of industrial routine, while the half-rhymes and near-rhymes create a sense of things almost but not quite fitting together — an apt formal echo of the domestic relationships the poem describes.`,
              'Grade 8-9': `The poem constructs a devastating account of how industrial labour mediates and ultimately impoverishes family relationships, deploying an extended conceit of language and communication to suggest that the foundry does not merely tire the father but fundamentally reconfigures his capacity for human connection.

The opening stanza's central metaphor — the furnace that "swallowed our fathers whole" — operates with deliberate ambiguity. "Swallowed" implies both consumption and silencing (as in swallowing words), establishing the foundry as a mechanism that destroys both body and voice. The plural "our fathers" is significant: the first-person plural positions this not as an individual tragedy but as a collective, class-based experience, a structural rather than personal failing. The men enter "upright" and "ordinary" — adjectives that carry a quiet dignity — and return "stooped and small," the monosyllabic simplicity of "small" carrying an emotional weight that more elaborate diction could not achieve.

The poem's most sophisticated move is its sustained linguistic metaphor. The father speaks "in nods and grunts, / in the clink of coins on kitchen tables" — communication reduced to gesture and material exchange. The mother must learn to interpret this as though decoding a foreign language: "the grammar of exhaustion, / the syntax of a bitten tongue." The terms "grammar" and "syntax" are precisely chosen — they imply that this is not mere inarticulation but a structured alternative language, with its own rules and logic. The oxymoronic quality of "syntax of a bitten tongue" — syntax implies ordered speech, while a bitten tongue implies its suppression — captures the paradox of a silence that nevertheless communicates, that is itself a form of expression forced into being by the absence of any other.

The final stanza's temporal shift — from the routine of employment to the void of redundancy — is structurally and thematically crucial. The father "sat / in the kitchen chair for weeks," the enjambment after "sat" creating a momentary suspension that mirrors his stasis. His continued adherence to the factory's rhythms — "still rising every morning at five" — reveals that the foundry has not merely occupied his time but colonised his identity. The image of "lacing phantom boots" is the poem's most resonant: "phantom" invokes the medical phenomenon of phantom limb pain, recasting the lost job as a form of amputation. The body continues to perform the rituals of a life that no longer exists, suggesting that industrial labour's deepest damage is ontological — it does not just take your time; it becomes who you are, and when it is removed, what remains is not freedom but bewilderment.

The poem's form — regular quatrains with subdued, irregular rhyme — embodies its thematic tension between the imposed regularity of industrial life and the emotional disorder it produces. The controlled structure is itself a kind of "bitten tongue," containing within its measured lines an anger and grief that is all the more powerful for its restraint.`,
            },
            markScheme: [
              'AO1: Read, understand and respond — use textual references to support interpretation (12 marks)',
              'AO2: Analyse language, form and structure using subject terminology (12 marks)',
              'Band 5-6: Critical, exploratory response with judicious references; analysis of methods with integrated terminology',
              'Band 3-4: Clear, explained response with effective references; clear understanding of methods',
              'Band 1-2: Simple response with some references; awareness of methods',
            ],
          },
          {
            id: 'aqa-lit-p2-01-q4',
            questionNumber: 4,
            questionText:
              'In both "The Foundry" and "Shift\'s End," the speakers describe the impact of industrial work on a father. What are the similarities and/or differences between the ways the poets present this?\n\n[8 marks]',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'comparison',
            extract: UNSEEN_1B,
            extractSource: 'Original poem — "Shift\'s End"',
            modelAnswers: {
              'Grade 4-5': `Both poems present fathers who are changed by their work. In "The Foundry," the father communicates in "nods and grunts," and in "Shift's End," the father holds his fork "the way he held his chisel — clenched," showing work has invaded even the way he eats. Both show fathers who can't switch off from work.

However, "Shift's End" is more tender at the end — the father whispers goodnight "like a prayer he half-remembered," which shows he still has love even if he can't express it normally. "The Foundry" is bleaker, ending with the father lost without his job.`,
              'Grade 6-7': `Both poems present industrial work as a force that alienates fathers from their families, but they explore different facets of this alienation. "The Foundry" focuses on the destruction of language — the father reduced to "nods and grunts" — while "Shift's End" emphasises the physical colonisation of the body: the father holds his fork "the way he held his chisel — clenched," the simile suggesting that the body cannot distinguish between labour and rest.

Both poems employ a child's perspective, but to different effects. "The Foundry" uses the plural "our fathers," creating collective witness, while "Shift's End" is more intimate — "I watched him from the stairs" — the physical distance between speaker and father mirroring the emotional distance work has created.

Significantly, "Shift's End" offers a moment of qualified tenderness in the father's whispered goodnight, "like a prayer he half-remembered." The simile suggests that love persists beneath the exhaustion, though in diminished, barely articulate form. "The Foundry" denies even this consolation — its father is so absorbed by work that its removal leaves only absence, not reconnection.`,
              'Grade 8-9': `Both poems anatomise the domestic fallout of industrial labour through the perspective of observing children, yet they construct crucially different models of damage. "The Foundry" presents work as a linguistic catastrophe — the father's selfhood is erased through the loss of communicative capacity — while "Shift's End" figures work as a bodily occupation, the father's physical habits so deeply conditioned by labour that domesticity becomes a continuation of the workplace: he holds his fork "the way he held his chisel — clenched, / as though the meal might fight him."

The poems also diverge in their emotional trajectories. "Shift's End" permits a moment of residual tenderness — the whispered goodnight is "like a prayer he half-remembered," suggesting that beneath the industrial conditioning, some vestige of paternal love survives, albeit in diminished, almost ritualistic form. "The Foundry" refuses this consolation: its final image of "lacing phantom boots" figures the father as permanently, irreversibly shaped by labour, unable to recover an identity independent of the foundry even in its absence. Where "Shift's End" suggests love persists despite work, "The Foundry" suggests that work has consumed the very capacity for connection.`,
            },
            markScheme: [
              'AO2: Analyse language, form and structure using subject terminology (8 marks)',
              'Must compare: identify similarities AND/OR differences',
              'Band 3-4 (7-8 marks): Exploratory comparison with well-chosen references',
              'Band 2-3 (4-6 marks): Clear comparison with relevant references',
              'Band 1 (1-3 marks): Simple comparison with some references',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 2
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lit-p2-02',
    board: 'AQA',
    paperNumber: 2,
    title: 'Paper 2: Modern Texts and Poetry',
    subtitle: 'English Literature 8702/2',
    code: '8702/2',
    totalTimeMinutes: 135,
    totalMarks: 96,
    sections: [
      {
        id: 'aqa-lit-p2-02-secA',
        title: 'Section A: Modern Texts',
        description:
          'Answer one question from this section on your studied text.\n\nAn Inspector Calls — J.B. Priestley',
        totalMarks: 34,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'aqa-lit-p2-02-q1',
            questionNumber: 1,
            questionText:
              'How does Priestley present the theme of social class in An Inspector Calls?\n\nWrite about:\n• how Priestley presents social class at different points in the play\n• how Priestley uses the theme of social class to convey his message to the audience.\n\n[30 marks + 4 marks for SPaG]',
            marks: 34,
            suggestedTimeMinutes: 50,
            questionType: 'evaluation',
            modelAnswers: {
              'Grade 4-5': `Priestley presents social class as very important in An Inspector Calls. The Birlings are upper class and live in a big house with expensive furniture. The stage directions say the house has "good solid furniture" and the family are dressed in evening clothes. This shows they are wealthy and comfortable.

Eva Smith is working class and has a very different life. She works in Birling's factory for low wages and when she asks for more money she gets fired. This shows the power that upper-class people have over working-class people. Birling doesn't care about Eva because she is lower class than him.

Mrs Birling also shows class prejudice. She refused to help Eva at the charity because Eva used the name "Birling," and Mrs Birling thought a working-class girl had no right to use an upper-class name. She says Eva only had "herself to blame." This shows how class makes people unsympathetic to others.

The Inspector represents Priestley's socialist views. He says "we are members of one body" meaning class shouldn't divide people. Priestley wrote the play after World War Two when people hoped society would become more equal, and he uses the play to argue that class divisions are wrong and harmful.

Overall, Priestley shows that social class creates inequality and that the upper classes use their position to exploit and ignore the working class.`,
              'Grade 6-7': `Priestley constructs social class as both a material reality and a moral blindfold, using the Birling household as a microcosm of Edwardian class relations to expose the structural violence that inequality enables.

The play's opening stage directions establish class as a performed identity. The Birlings' dining room, with its "heavily comfortable" furnishings and port glasses, signals bourgeois prosperity, but the qualifier "not cosy and homelike" introduces an early note of unease. Priestley suggests that the Birlings' class position is maintained through display rather than genuine comfort — it is a performance of respectability rather than an expression of authentic wellbeing.

Class hierarchy is central to each character's treatment of Eva Smith. Birling dismisses her wage request as the disruption of an economic order he considers natural: cheap labour is simply how business works. Mrs Birling's refusal to help Eva at the Brumley Women's Charity Organisation reveals an even more insidious form of class prejudice. Her objection — that Eva "gave herself ridiculous airs" and "was claiming elaborate fine feelings" — exposes the assumption that emotional depth and social aspiration are privileges of the upper classes. To Mrs Birling, a working-class woman who uses an upper-class name is committing a form of trespass.

Gerald Croft's relationship with Eva/Daisy reveals how class intersects with gender to create particular forms of exploitation. His "rescue" of Daisy from Alderman Meggarty positions him as the benevolent upper-class protector, but the relationship is fundamentally unequal — Daisy is dependent on Gerald's generosity, and when he tires of her, she has no recourse. Priestley suggests that cross-class relationships within a hierarchical society are inherently exploitative, regardless of individual intention.

The Inspector's function is to dismantle these class-based justifications. His final speech — "We are members of one body. We are responsible for each other" — articulates the socialist principle that class is an artificial division that obscures a deeper human interdependence. Written in 1945, with the Beveridge Report and the incoming Labour government promising a welfare state, Priestley's message is both a critique of the past and an argument for the collectivist future.

The generational divide is crucial. Sheila and Eric, the younger Birlings, demonstrate a capacity to see past class distinctions that their parents lack. Sheila's recognition that "these girls aren't cheap labour — they're people" represents the attitudinal shift Priestley hopes to inspire in his audience.`,
              'Grade 8-9': `Priestley's treatment of social class in An Inspector Calls operates on multiple registers simultaneously: it is a naturalistic depiction of Edwardian class relations, a structural analysis of how inequality produces suffering, and a performative argument for the dismantling of class hierarchies — addressed not to the characters on stage but to the post-war audience Priestley understood as uniquely positioned to build a more equitable society.

The play's dramaturgical architecture is itself a class statement. The single setting — the Birlings' dining room — confines the audience within the bourgeois interior, forcing a confrontation with the values that space represents. Priestley's stage directions specify "heavily comfortable but not cosy" furniture and lighting that is "pink and intimate" before the Inspector's arrival, then "brighter and harder" afterwards. This lighting shift is a theatrical metaphor for ideological exposure: the rosy glow of class privilege is replaced by the harsh illumination of scrutiny. The Birlings' comfort is revealed as contingent upon the suffering of those excluded from the room — Eva Smith, who is never seen on stage, is structurally positioned outside the bourgeois space, her absence a permanent accusation.

Each Birling's interaction with Eva exposes a different mechanism by which class hierarchy produces harm. Birling's sacking of Eva for demanding higher wages reveals the economic dimension: capital's structural dependence on cheap, disposable labour. Significantly, Birling frames this not as cruelty but as rationality — "If you don't come down sharply on some of these people, they'd soon be asking for the earth." The metaphor is revealing: "the earth" implies that fair wages represent an impossibly excessive demand, naturalising exploitation as common sense.

Mrs Birling's contribution is perhaps the most ideologically revealing. Her objection to Eva is not economic but ontological: Eva has transgressed class boundaries by claiming the Birling name and displaying "fine feelings" that Mrs Birling considers the exclusive property of her own class. This is class as epistemology — Mrs Birling cannot recognise Eva as fully human because her conceptual framework categorises working-class experience as inherently less complex, less worthy of sympathy, less real. Her insistence that the father of Eva's child should bear sole responsibility, and her assumption that this father must be a working-class man ("some drunken young idler"), exposes the recursive logic of class prejudice: the upper classes attribute moral failure to the lower classes, then use those attributed failures to justify further indifference.

Gerald's treatment of Eva/Daisy Renton introduces the intersection of class and gender. His "rescue" narrative — saving a vulnerable woman from Alderman Meggarty — performs the feudal archetype of noblesse oblige, but Priestley carefully deconstructs its benevolence. Gerald provides Daisy with accommodation and financial support, but these gifts create dependency rather than agency; when the relationship ends, Daisy is returned to precisely the vulnerability from which Gerald "saved" her, now compounded by emotional attachment. Priestley suggests that individual kindness across class lines, however genuine, cannot compensate for structural inequality — it merely personalises and sentimentalises what is fundamentally a political problem.

The Inspector functions as a destabilising force within the class system the Birlings represent. His refusal to defer to Birling's social status — ignoring references to the Chief Constable, the aldermanship, the knighthood — constitutes a performative challenge to the authority of class. His language, too, operates outside class conventions: the directness of "We are members of one body" cuts through the euphemisms and circumlocutions that characterise bourgeois discourse in the play, replacing the Birlings' language of obligation ("I can't accept any responsibility") with a language of ontological interconnection.

The play's conclusion — the telephone announcement of a girl's death and a real inspector's imminent arrival — is Priestley's most audacious structural choice. It denies the Birlings the comfort of discovering that the Inspector was a fraud, reasserting the reality of consequence against the family's desperate attempt to return to their pre-Inspector complacency. For the audience, this final twist transforms the play from a period piece into an urgent address: the class system that destroyed Eva Smith has not been dismantled, and its consequences are still unfolding. Priestley's 1945 audience, poised between the memory of two wars and the promise of the welfare state, is positioned as the generation that must choose between the Birlings' world and the Inspector's.`,
            },
            markScheme: [
              'AO1: Read, understand and respond — use textual references to support interpretation (12 marks)',
              'AO2: Analyse language, form and structure using subject terminology (12 marks)',
              'AO3: Show understanding of context (6 marks)',
              'AO4: SPaG — spelling, punctuation, grammar, vocabulary (4 marks)',
              "Band 5-6: Critical exploratory response; analysis of writer's methods; convincing context",
              'Band 3-4: Clear explained response; understanding of methods; clear context',
              'Band 1-2: Simple response; awareness of methods; some context',
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p2-02-secB',
        title: 'Section B: Poetry Anthology',
        description: 'Answer one question from this section.\n\nPower and Conflict Anthology',
        totalMarks: 30,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-lit-p2-02-q2',
            questionNumber: 2,
            questionText:
              'Compare how poets present the power of nature in "Storm on the Island" by Seamus Heaney and "Ozymandias" by Percy Bysshe Shelley.\n\nIn your answer you should consider:\n• the poets\' use of language, form and structure\n• the influence of the contexts in which the poems were written.\n\n[30 marks]',
            marks: 30,
            suggestedTimeMinutes: 45,
            questionType: 'comparison',
            modelAnswers: {
              'Grade 4-5': `Both "Storm on the Island" and "Ozymandias" present nature as more powerful than humans. In "Storm on the Island," Heaney describes a fierce storm that attacks the island community. The wind is described as a "huge nothing" which is an oxymoron showing that something invisible can still be terrifying and powerful. The people prepare for the storm by building strong houses, but nature is still frightening.

In "Ozymandias," Shelley shows how nature has destroyed the statue of a powerful king. The "lone and level sands stretch far away" which shows the desert has taken over everything. The king thought he was the most powerful but now his statue is broken and "Nothing beside remains." This shows nature outlasts human power.

Both poems show nature winning. In Heaney's poem, nature attacks in a dramatic storm, while in Shelley's poem, nature wins slowly over time by wearing away the statue. Heaney uses first person ("we") to show a community experiencing nature's power together, while Shelley tells the story through a traveller, making it feel distant.

The context is important. Shelley was a Romantic poet who believed in the power of nature over human arrogance. Heaney wrote about Ireland where storms are common and the landscape shapes people's lives.`,
              'Grade 6-7': `Heaney and Shelley both present nature as a force that ultimately supersedes human power, but their temporal perspectives differ fundamentally: Heaney captures nature's power in the immediate present of a storm, while Shelley reveals it through the slow, irreversible erosion of centuries.

In "Storm on the Island," nature's power is presented as an assault. Heaney's language militarises the storm — the wind "pummels" and "strafes" — drawing implicit parallels between natural violence and human conflict. This martial vocabulary may reflect the poem's allegorical dimension: the hidden word "Stormont" in the title suggests a political reading in which the "storm" represents the Troubles and the "island" is Ireland itself. Nature's power thus becomes a lens through which political power is examined.

The poem's most striking paradox is the "huge nothing that we fear." This oxymoron captures the peculiar terror of facing an invisible, formless power. The collective pronoun "we" positions the speaker within a community, but this community is ultimately helpless — their preparations ("We are prepared: we build our houses squat") cannot protect them from what they cannot see. Heaney's blank verse form, which mimics conversational speech but carries the weight of iambic pentameter, reflects this tension between ordinariness and threat.

Shelley's approach in "Ozymandias" is architecturally different. Nature's power is not dramatised but revealed through aftermath. The "colossal Wreck" of Ozymandias's statue functions as a memento mori for all human ambition: the inscription "Look on my Works, ye Mighty, and despair!" is rendered bitterly ironic by the "lone and level sands" that have replaced those works. Shelley's sonnet form — traditionally associated with permanence and artistic immortality — is subverted to convey impermanence. The poem's fragmented structure (the story is relayed through multiple voices: the narrator, the traveller, the sculptor, Ozymandias himself) mirrors the fragmentation of the statue, form enacting content.

Both poets suggest that human attempts to control or resist nature are fundamentally futile, but they locate this futility differently. Heaney's community experiences it as present fear; Shelley's Ozymandias represents it as historical fact. Together, they suggest that whether nature acts in the violence of a storm or the patience of erosion, the outcome is the same.`,
              'Grade 8-9': `Heaney and Shelley construct complementary but temporally and formally distinct arguments about nature's supremacy over human agency, each deploying the resources of poetic form to enact — rather than merely assert — the inadequacy of human structures (literal and metaphorical) in the face of natural power.

"Storm on the Island" presents nature's power as a phenomenological crisis — an experience that overwhelms not just the body but the conceptual frameworks through which experience is understood. The poem's opening declarative — "We are prepared" — establishes a false confidence that the subsequent lines progressively demolish. The preparations (squat houses, rock rather than trees) are material responses to a material threat, but the storm, as it develops, refuses materiality: it becomes "a huge nothing that we fear," an oxymoron that collapses the distinction between presence and absence upon which rational preparation depends. Heaney's genius here is to locate terror not in what the storm does but in what it is — or rather, in what it is not. The blank verse, with its conversational enjambments and colloquial register ("you might think"), performs the community's attempt to domesticate the extraordinary through ordinary language, an attempt that the final image decisively defeats.

The poem's militarised vocabulary — "bombarded," "strafes," "salvo" — introduces a secondary register that the hidden acrostic "STORMONT" makes explicit. Nature's power becomes an allegory for political violence, and the islanders' preparation an analogue for Northern Ireland's communities bracing against the Troubles. This layered reading does not diminish the poem's engagement with natural power but deepens it: Heaney suggests that political and natural forces share a common capacity to render human agency meaningless, to reduce communities to passive endurance.

Shelley's "Ozymandias" operates in an entirely different temporal register: not the compressed present of the storm but the vast retrospect of geological time. Nature's power here is not violent but patient — the "lone and level sands" have not destroyed Ozymandias's monument through force but through the accumulation of time itself. The poem's structure brilliantly enacts this temporal perspective through its layered narrative frames: the poet speaks to us, relaying the words of a traveller, who describes the work of a sculptor, who recorded the expression of Ozymandias. Each frame adds a layer of mediation, suggesting that as time passes, human achievements become increasingly remote, increasingly filtered through other perspectives, until they lose all original authority.

The irony of the inscription — "Look on my Works, ye Mighty, and despair!" — is typically read as simple dramatic irony (the works have vanished), but Shelley's critique is more sophisticated. The command "despair" was originally directed at rival kings, who should despair at Ozymandias's superiority. Now, the same word acquires a new meaning: the mighty should despair because the same fate awaits their works. Nature, in Shelley's formulation, does not merely destroy — it recontextualises, transforming the very language of power into an inadvertent confession of impermanence. This is nature as an author, rewriting human texts.

Formally, Shelley subverts the Petrarchan sonnet — a form associated with permanence and artistic immortality — by refusing to resolve its rhyme scheme neatly. The irregular rhyme (ABABACDCEDEFEF) creates a sense of structural instability that mirrors the statue's decay, while the volta arrives not at the expected line 9 but at line 12, delaying the thematic turn and compressing the poem's devastating conclusion into just two and a half lines.

Contextually, both poems emerge from traditions that interrogate the relationship between human civilisation and the natural world, but from opposite directions. Shelley, writing in the Romantic tradition, celebrates nature's supremacy as a corrective to human hubris — the desert that buries Ozymandias is an agent of justice as much as of entropy. Heaney, writing from a community embedded in a harsh landscape, presents nature's power with a more ambivalent emotional register: there is respect but also fear, endurance but also vulnerability.

Both poems ultimately suggest that human power — whether political, imperial, or communal — exists on borrowed time. Shelley renders this philosophically, as an ironic meditation on the vanity of ambition; Heaney renders it experientially, as the lived reality of a community that knows, viscerally, that "it is a huge nothing that we fear." Together, they articulate a spectrum of nature's supremacy, from the slow patience of erosion to the sudden violence of storm.`,
            },
            markScheme: [
              'AO1: Read, understand and respond — use textual references to support interpretation (12 marks)',
              'AO2: Analyse language, form and structure using subject terminology (12 marks)',
              'AO3: Show understanding of context (6 marks)',
              'Must compare both poems throughout',
              'Band 5-6: Critical comparison with exploratory analysis and convincing context',
              'Band 3-4: Clear comparison with explained analysis and clear context',
              'Band 1-2: Simple comparison with awareness of methods and some context',
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p2-02-secC',
        title: 'Section C: Unseen Poetry',
        description: 'Answer both questions in this section.',
        totalMarks: 32,
        suggestedTimeMinutes: 40,
        questions: [
          {
            id: 'aqa-lit-p2-02-q3',
            questionNumber: 3,
            questionText:
              'In "Border Country," how does the poet present the experience of displacement?\n\n[24 marks]',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'analysis',
            extract: UNSEEN_2A,
            extractSource: 'Original poem — "Border Country"',
            modelAnswers: {
              'Grade 4-5': `The poet presents displacement as a frightening experience for a child. The family crosses the border "in the blue hour / when the guards changed shift," which shows they have to be secretive and careful. The mother carries their "belongings in a plastic bag" which shows they don't have much and have had to leave quickly.

The mother tries to protect her children by telling them "not to look back" and that the fence is "just a fence" and "the dogs were only dogs." She is trying to make it seem less scary, but the reader can tell it is dangerous. The metaphor of fear being "something you could fold / and put away, like laundry" is a simile that makes fear sound simple and domestic, which contrasts with how scary the situation really is.

The child says "I believed her. I was seven." This short sentence is powerful because it shows the innocence of the child and how trusting they are. The moon is described as "a torn fingernail / snagged on barbed wire" which is a violent image that contrasts with the mother's calm words.

At the end, the sunflowers "bowed as if in welcome, / or in grief — I could not tell." This ambiguity shows that the speaker doesn't know whether what awaits them will be good or bad. Displacement means leaving everything behind without knowing what comes next.`,
              'Grade 6-7': `The poet presents displacement as an experience that operates simultaneously on two registers: the child's partial understanding and the adult speaker's retrospective awareness of what was really at stake. This dual perspective gives the poem its particular emotional texture — tenderness and terror coexisting in the same images.

The opening temporal marker — "the blue hour" — is both specific and symbolic. Twilight is a transitional space, neither day nor night, and the family's crossing occurs in this in-between state. The detail "when the guards changed shift" grounds the poem in a reality of borders, surveillance, and danger, establishing displacement as something that must be navigated strategically rather than simply experienced.

The mother's reassurances constitute the poem's emotional core. Her insistence that "the fence was just a fence" and "the dogs were only dogs" employs a rhetorical strategy of deliberate reduction — stripping threatening objects of their connotations. The extended metaphor of fear as "something you could fold / and put away, like laundry" domesticates terror, translating it into the familiar language of household routine. This is not naivety but maternal strategy: the mother is constructing a bearable version of reality for her children.

The speaker's retrospective interjection — "I believed her. I was seven" — is devastating in its economy. The past tense "believed" implies present disbelief; the age functions as both explanation and indictment, suggesting that only the extreme trust of childhood could render such reassurances credible. The moon as "a torn fingernail / snagged on barbed wire" introduces a counter-narrative to the mother's domesticated version, the violence of the image (torn, snagged) contradicting the calm she has constructed.

The final image of sunflowers whose heads are "bowed as if in welcome, / or in grief" refuses to resolve the poem's emotional ambivalence. The "or" holds two futures in suspension — hope and mourning — and the child's inability to distinguish between them becomes a metaphor for displacement itself: a condition in which meaning is perpetually uncertain, in which arrival and loss are indistinguishable.`,
              'Grade 8-9': `The poem constructs displacement as a compound experience in which danger, maternal love, childhood innocence, and retrospective knowledge coexist in unresolved tension, the adult speaker's voice simultaneously inhabiting and interrogating the child's perspective in a way that renders the poem both tender and devastating.

The temporal and spatial setting is precisely calibrated. "The blue hour" — the period of twilight associated with transition and liminality — positions the crossing in a space that is neither here nor there, a geographical correlative for the ontological condition of displacement itself. The strategic detail "when the guards changed shift" introduces a note of calculation that subtly recharacterises the mother: she is not merely fleeing but navigating, exploiting gaps in a system of surveillance. This recasts displacement from passive victimhood to active, if desperate, agency.

The poem's most sophisticated technique is the mother's rhetorical reconstruction of reality. Her assertions — "the fence was just a fence," "the dogs were only dogs" — employ a deliberately reductive grammar that strips signifiers of their threatening connotations. The anaphoric structure ("She told us... She told us... She told us") creates an incantatory rhythm that mimics the function of lullaby or prayer — language deployed not to communicate information but to create a protective sonic enclosure. The culminating metaphor — fear as "something you could fold / and put away, like laundry" — is a masterpiece of emotional displacement: it translates existential terror into the most mundane of domestic actions, suggesting that the mother's gift to her children is not the elimination of fear but its translation into a manageable grammar.

The caesura of "I believed her. I was seven" performs a structural rupture that marks the poem's tonal pivot. The sentence's brutal brevity — after the flowing enjambments of the mother's speech — creates a silence around itself, a pause in which the reader registers the gap between the child's trust and the adult's knowledge. The age, "seven," functions as a threshold: old enough to remember, young enough to believe. The past tense "believed" contains within it the entire arc of the speaker's subsequent disillusionment.

The moon as "a torn fingernail / snagged on barbed wire" introduces a counter-text to the mother's sanitised narrative. The image is violent, bodily, and entangled — the fingernail suggests human vulnerability, the barbed wire suggests human cruelty, and their conjunction in the natural image of the moon collapses the distinction between landscape and suffering. The moon, traditionally a symbol of guidance and beauty, is here reconfigured as a sign of damage.

The closing stanza's sunflowers, "their heads bowed as if in welcome, / or in grief," refuse the reader's desire for resolution. The coordinating conjunction "or" holds two mutually exclusive interpretations in permanent suspension, and the speaker's admission "I could not tell" extends this irresolution to the level of testimony. Displacement, the poem suggests, is not a journey from one known place to another but an entry into a condition of permanent ambiguity — a state in which even welcome and grief become indistinguishable, and in which the narrator, decades later, still cannot determine which was which.`,
            },
            markScheme: [
              'AO1: Read, understand and respond — use textual references to support interpretation (12 marks)',
              'AO2: Analyse language, form and structure using subject terminology (12 marks)',
              'Band 5-6: Critical, exploratory response with judicious references and integrated analysis',
              'Band 3-4: Clear, explained response with effective references and understanding of methods',
              'Band 1-2: Simple response with some references and awareness of methods',
            ],
          },
          {
            id: 'aqa-lit-p2-02-q4',
            questionNumber: 4,
            questionText:
              'In both "Border Country" and "Passage," the speakers describe crossing a border. What are the similarities and/or differences between the ways the poets present this experience?\n\n[8 marks]',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'comparison',
            extract: UNSEEN_2B,
            extractSource: 'Original poem — "Passage"',
            modelAnswers: {
              'Grade 4-5': `Both poems describe crossing a border but in different ways. "Border Country" is about crossing on foot through fields with guards and dogs, while "Passage" is about being hidden in a lorry. Both show the experience as frightening.

In "Border Country," the mother tries to comfort the children, but in "Passage" there is no comfort — just "thirty bodies breathing one breath" in the dark. Both poems end with arrival somewhere new, but "Border Country" ends with uncertainty (the sunflowers could mean welcome or grief) while "Passage" ends with ordinary English life — "a man eating a sandwich" — which contrasts with the dramatic journey.`,
              'Grade 6-7': `Both poems present border crossings as experiences of extreme vulnerability, but they employ contrasting sensory registers. "Border Country" is visual — moonlight, sunflowers, barbed wire — while "Passage" is dominated by the absence of sight: "the dark so thick you could press / your thumb into it like clay." This tactile rendering of darkness creates claustrophobic intensity distinct from "Border Country's" open landscape.

Both poems use the child's perspective, but differently. "Border Country's" speaker trusts the mother's protective fictions; "Passage's" speaker finds connection through shared suffering — a child "crying / in a language I had never heard / but understood completely." This moment transcends linguistic barriers, suggesting that displacement creates its own universal language.

The endings create a striking contrast. "Border Country" concludes with ambiguity — the sunflowers' gesture unreadable — while "Passage" arrives at bathos: "ordinary English light, / grey and soft and careless." The adjective "careless" is particularly charged, implying both gentleness and indifference. England does not care about their arrival, and this carelessness is simultaneously a relief (no guards, no dogs) and a wound (their suffering is unnoticed).`,
              'Grade 8-9': `Both poems anatomise the experience of illicit border crossing, but they construct contrasting phenomenologies of displacement. "Border Country" operates through visual and natural imagery — moonlight, sunflowers, barbed wire — locating the crossing within a landscape that, however threatening, remains legible. "Passage," by contrast, creates a sensorily deprived space in which meaning itself collapses: the dark is "so thick you could press / your thumb into it like clay," a synaesthetic image that transforms absence into suffocating substance.

The poems' treatment of community under duress diverges instructively. "Border Country" centres the family unit — the mother's protective fictions create a private enclosure of meaning within the threatening landscape. "Passage" dissolves individual family bonds into collective anonymous suffering: "thirty bodies breathing one breath" merges distinct persons into a single organism, while the crying child "in a language I had never heard / but understood completely" posits a pre-linguistic communication born of shared extremity.

Most strikingly, the poems construct opposing models of arrival. "Border Country's" sunflowers, bowing "as if in welcome, / or in grief," suspend the destination between hope and loss. "Passage" deflates this ambiguity with devastating bathos: "ordinary English light, / grey and soft and careless, / falling on a car park, / on a man eating a sandwich." The mundane specificity annihilates the epic register of the journey, and the final line — "on the rest of our lives" — recontextualises this careless ordinariness as the permanent condition of the displaced: their lives will unfold in spaces that have no knowledge of, and no interest in, the darkness they crossed to reach them.`,
            },
            markScheme: [
              'AO2: Analyse language, form and structure using subject terminology (8 marks)',
              'Must compare: identify similarities AND/OR differences',
              'Band 3-4 (7-8 marks): Exploratory comparison with well-chosen references',
              'Band 2-3 (4-6 marks): Clear comparison with relevant references',
              'Band 1 (1-3 marks): Simple comparison with some references',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 3
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lit-p2-03',
    board: 'AQA',
    paperNumber: 2,
    title: 'Paper 2: Modern Texts and Poetry',
    subtitle: 'English Literature 8702/2',
    code: '8702/2',
    totalTimeMinutes: 135,
    totalMarks: 96,
    sections: [
      {
        id: 'aqa-lit-p2-03-secA',
        title: 'Section A: Modern Texts',
        description:
          'Answer one question from this section on your studied text.\n\nAn Inspector Calls — J.B. Priestley',
        totalMarks: 34,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'aqa-lit-p2-03-q1',
            questionNumber: 1,
            questionText:
              'How does Priestley use the character of Sheila to explore ideas about change?\n\nWrite about:\n• how Priestley presents Sheila at different points in the play\n• how Priestley uses Sheila to explore ideas about change.\n\n[30 marks + 4 marks for SPaG]',
            marks: 34,
            suggestedTimeMinutes: 50,
            questionType: 'evaluation',
            modelAnswers: {
              'Grade 4-5': `Priestley uses Sheila to show that people can change if they are willing to listen and learn. At the start of the play, Sheila is presented as a typical young upper-class woman. She is excited about her engagement to Gerald and says things like "Oh — it's wonderful!" She seems happy and not very aware of the world outside her family.

When the Inspector tells them about Eva Smith, Sheila is the first to feel guilty. She got Eva fired from Milwards because she was jealous of how Eva looked in a dress. When she hears what happened, she says "I'll never, never do it again" which shows she immediately takes responsibility. This is different from her parents who try to avoid blame.

As the play goes on, Sheila becomes more mature. She starts to question Gerald about his affair and supports the Inspector's investigation. She says "you fool — he knows" to her family members who try to hide things, showing she understands the Inspector's purpose better than the older characters.

At the end, even when it seems the Inspector was fake, Sheila still feels guilty. She says "everything we said had happened really had happened" which shows she has genuinely changed. She doesn't go back to how she was before, unlike her parents.

Priestley uses Sheila to represent the younger generation who can change and build a better, more caring society. This links to 1945 when people hoped for a fairer world after the war.`,
              'Grade 6-7': `Priestley constructs Sheila as the play's most dynamic character, using her transformation from privileged naivety to moral awareness as both a dramatic arc and a political argument about the possibility of ideological change.

Sheila's opening presentation is carefully calibrated to establish the distance she will travel. Her vocabulary is dominated by exclamatory, superficial responses — "Oh — it's wonderful!" and "I think it's perfect" — that mark her as a product of her class: articulate but unthinking, comfortable within a worldview she has never been required to question. The stage directions reinforce this: she is "pleased with life," a phrase that captures both contentment and complacency.

Her complicity in Eva Smith's fate — getting Eva dismissed from Milwards out of jealousy — reveals the casual cruelty that class privilege enables. However, Priestley immediately distinguishes Sheila from her parents through the quality of her response. Where Birling deflects and Mrs Birling denies, Sheila accepts: "I'll never, never do it again." The repetition of "never" signals not merely regret but a moral commitment to change, a recognition that awareness must translate into altered behaviour.

Sheila's developing role as the Inspector's ally is structurally significant. Her warning to Gerald — "you fool — he knows" — demonstrates not just intelligence but a newly developed capacity to read situations through a moral rather than social lens. She has internalised the Inspector's method: truth is not optional, and concealment compounds guilt. This positioning establishes Sheila as a bridge figure between the Inspector's values and the audience's potential for transformation.

The generational contrast is Priestley's central political argument. Sheila and Eric represent the post-war generation that Priestley believed could build the welfare state: young enough to have their assumptions shattered, morally flexible enough to construct new values from the wreckage. Sheila's refusal to return to normalcy — "the ones I knew are the ones who died" — is not simply personal growth but ideological conversion. She has moved from the Birlings' individualism to the Inspector's collectivism, and Priestley positions this movement as available to any audience member willing to undergo it.

Her insistence, even after the Inspector's apparent exposure, that "everything we said had happened really had happened" is the play's moral cornerstone. Sheila understands what her parents cannot: that the truth of their culpability does not depend on the Inspector's institutional legitimacy. Guilt is not a legal verdict but a moral condition, and it persists regardless of whether anyone is watching.`,
              'Grade 8-9': `Priestley deploys Sheila Birling as the play's primary mechanism of audience identification and ideological transformation, constructing her journey from complicit bourgeois innocence to active moral consciousness as a template for the change he demands of his post-war audience.

Sheila's initial characterisation is a precise exercise in dramatic misdirection. The surface impression — a "pretty" girl who is "pleased with life," excited by her engagement ring — invites the audience to categorise her as decorative and intellectually negligible. Priestley deliberately encourages this underestimation in order to make her subsequent transformation more dramatically potent. The early Sheila speaks in the affective vocabulary of her class ("wonderful," "perfect," "awfully"), a lexicon that signals emotional responsiveness but not moral depth. Priestley positions her within the play's opening tableau as an ornament of the bourgeois household — part of its comfortable furniture.

The revelation of her role in Eva Smith's dismissal from Milwards recalibrates this impression with surgical precision. Sheila's crime — using her social position to punish a shop girl for being attractive — is simultaneously trivial and devastating. Priestley understands that the most effective illustration of systemic injustice is not the grand, deliberate cruelty but the casual, almost accidental exercise of power. Sheila did not intend to destroy Eva; she barely thought about Eva at all. This is precisely the point: class privilege operates most efficiently when its beneficiaries are unconscious of its effects.

What distinguishes Sheila from her parents is the immediacy and completeness of her moral response. Her declaration — "I'll never, never do it again" — contains a performative dimension: it is not merely a promise but an act of self-reconstitution, a speech act that simultaneously acknowledges the old self and inaugurates the new. The repetition of "never" carries a weight absent from the Birlings' evasions; where Birling's "I can't accept any responsibility" uses modal construction to imply impossibility, Sheila's "never" accepts the full burden of future moral obligation.

Sheila's evolving function within the dramatic structure mirrors the Inspector's own. By Act Two, she is conducting her own interrogation of Gerald, demonstrating that the Inspector's moral framework has become self-replicating — it does not require his physical presence to operate. Her warning, "you fool — he knows," reveals not just perspicacity but an alignment of vision: she sees what the Inspector sees, understands what he understands. Priestley suggests that genuine moral change is not merely a matter of feeling differently but of perceiving differently — Sheila's eyes have been structurally reorganised.

The play's denouement tests Sheila's transformation against the gravitational pull of her family's ideology. When Birling and Mrs Birling eagerly dismantle the Inspector's credibility, Sheila resists with a formulation of remarkable philosophical precision: "everything we said had happened really had happened." This sentence is not a repetition of known facts but an epistemological claim. Sheila is asserting that moral truth is independent of institutional verification — that what they did to Eva Smith remains real regardless of whether the Inspector was a police officer, a ghost, or a theatrical device. This is Priestley's most radical argument: responsibility cannot be retroactively revoked by discrediting its witness.

Contextually, Sheila embodies the audience Priestley is addressing. Writing in 1945, with the Labour landslide imminent and the welfare state on the horizon, Priestley presents Sheila's transformation as historically available. The play's 1912 setting creates a temporal parallax: the audience, like Sheila, can see both the failures of the past and the possibilities of the future. Sheila's change is not merely personal growth but a political model — proof that it is possible to inherit privilege and nevertheless choose justice, to recognise complicity and nevertheless act differently. Her final position — changed, uncomfortable, unable to return to the "pink and intimate" lighting of the play's opening — is precisely where Priestley wants his audience to be when they leave the theatre.`,
            },
            markScheme: [
              'AO1: Read, understand and respond — use textual references to support interpretation (12 marks)',
              'AO2: Analyse language, form and structure using subject terminology (12 marks)',
              'AO3: Show understanding of context (6 marks)',
              'AO4: SPaG — spelling, punctuation, grammar, vocabulary (4 marks)',
              'Band 5-6: Critical/exploratory response; judicious use of references; analysis of methods; convincing context',
              'Band 3-4: Clear/explained response; effective references; clear understanding of methods; clear context',
              'Band 1-2: Simple/emerging response; some references; awareness of methods; some context',
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p2-03-secB',
        title: 'Section B: Poetry Anthology',
        description: 'Answer one question from this section.\n\nPower and Conflict Anthology',
        totalMarks: 30,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-lit-p2-03-q2',
            questionNumber: 2,
            questionText:
              'Compare how poets present the experience of loss in "Poppies" by Jane Weir and "Bayonet Charge" by Ted Hughes.\n\nIn your answer you should consider:\n• the poets\' use of language, form and structure\n• the influence of the contexts in which the poems were written.\n\n[30 marks]',
            marks: 30,
            suggestedTimeMinutes: 45,
            questionType: 'comparison',
            modelAnswers: {
              'Grade 4-5': `Both "Poppies" and "Bayonet Charge" deal with loss caused by war, but from very different perspectives. "Poppies" is written from a mother's point of view as she watches her son leave for war, while "Bayonet Charge" shows a soldier in the middle of battle.

In "Poppies," the mother describes small, personal details that show her love and loss. She "smoothed down your collar" and later goes to the memorial to "lean against it like a wishbone." The wishbone image is sad because it shows she is making a wish, probably for her son to come home safely. The poem is full of domestic images — "sellotape," "cat hairs" — which contrast with the war theme and show how the mother connects war to everyday life.

In "Bayonet Charge," Hughes shows a soldier running towards the enemy. The soldier's thoughts are described violently: "The patriotic tear that had brimmed in his eye" has been replaced by "terror." He has lost his belief in why he is fighting. He sees a "yellow hare" rolling in pain, which represents the innocent suffering of war.

Both poets show loss, but differently. Weir shows the emotional loss of a parent sending a child to war. Hughes shows the loss of idealism and humanity in battle. Weir's poem is gentle and domestic, while Hughes's is chaotic and frightening. The context is relevant because Weir wrote "Poppies" in response to modern conflicts, while Hughes was born in 1930 and never fought in any war — he drew on his father William's WWI accounts (William survived Gallipoli as one of only seventeen survivors of his Lancashire Fusiliers regiment) to imagine the soldier's terror.`,
              'Grade 6-7': `Weir and Hughes present loss as operating in fundamentally different registers — the domestic and the visceral — yet both poets suggest that war's destruction extends far beyond physical harm to encompass the erosion of meaning, identity, and connection.

"Poppies" constructs loss through an accumulation of sensory, domestic details that function as indices of intimacy. The mother's actions — smoothing the son's collar, noting "cat hairs" on his jacket — are simultaneously ordinary and charged with the knowledge that these mundane gestures may be the last points of physical contact. Weir's use of textile imagery throughout ("bandaged," "sellotape," "bias binding") creates an extended metaphor of maternal care as mending and covering, but also, implicitly, of wounds that cannot be repaired. The poem's temporal structure, which conflates the son's childhood (playing with "plastic toys") with his departure for war, suggests that for the mother, time has collapsed: all moments of intimacy are simultaneously present, and all are shadowed by anticipated loss.

Hughes constructs loss as an immediate, embodied experience. "Bayonet Charge" opens in medias res — "Suddenly he awoke and was running" — plunging the reader into the disorientation of combat without preamble or explanation. The loss here is epistemological: the soldier has lost the framework of meaning that justified his presence. "King, honour, human dignity, etcetera" — Hughes writes "etcetera" once (cite exactly as printed; do not abbreviate to "etc.", and don't double the word). The dismissive single "etcetera" reduces patriotic abstractions to an exhausted list, something barely worth completing. Hughes suggests that combat does not merely endanger the body but dismantles the conceptual structures (patriotism, honour, duty) that made violence seem rational.

The "yellow hare" that "rolled like a flame" functions as a concentrated symbol of innocent suffering. Its pain is purposeless and unexplained, mirroring the soldier's growing realisation that his own suffering lacks the justification he was promised. The simile "like a flame" connects the hare to the warfare around it while individualising its pain, suggesting that war's most devastating losses are the ones too small and specific to appear in any official narrative.

Structurally, the poems' forms embody their respective modes of loss. "Poppies" unfolds in long, flowing stanzas that mimic the movement of memory — associative, circling, reluctant to arrive at its conclusion. "Bayonet Charge" deploys irregular stanza breaks and heavy caesurae that reproduce the stop-start chaos of combat. Both forms are "broken" in ways that mirror their content: "Poppies" breaks the expected chronological narrative of war poetry; "Bayonet Charge" breaks the expected heroic register.

Contextually, both poets address the gap between public commemorative narratives and private experience. Weir, writing in response to the Iraq and Afghanistan conflicts, places her poem in dialogue with Remembrance Sunday rituals — poppies, memorials, the expected performance of national grief — while insisting on the irreducibly personal nature of a mother's loss. Hughes, who was born in 1930 and never fought in any war, drew on his father William's WWI accounts — William survived Gallipoli as one of only seventeen survivors of his Lancashire Fusiliers regiment — to dismantle the rhetoric of heroism that sustained public support for war, replacing it with the brute phenomenology of terror.`,
              'Grade 8-9': `Weir and Hughes construct antiphonal accounts of war's capacity for destruction, each locating loss in a different domain — the domestic interior and the battlefield — yet converging on the shared recognition that war's deepest damage is to meaning itself: the frameworks of love, duty, honour, and connection through which human beings make sense of violence.

"Poppies" operates through a poetics of displacement, in which the mother's grief is expressed not directly but through a meticulously curated sequence of sensory and domestic details that function as affective surrogates. The "sellotape bandaged" around her son's finger, the "cat hairs" on his blazer, the maternal gesture of smoothing a collar — each detail carries a double charge, simultaneously evoking the mundane intimacy of family life and the knowledge that these small physical contacts are threatened or already lost. Weir's textile imagery — "bias binding," "the poppy petals" she "pinned" — weaves an extended metaphor of fabrication and mending that is also, inescapably, an image of insufficient protection: cloth cannot stop bullets, and the mother's acts of care cannot prevent the harm she fears.

The poem's temporal structure is its most formally innovative feature. Weir collapses chronological sequence, moving fluidly between the son's childhood ("playing at being Eskimos"), his departure, and the mother's solitary visit to the war memorial, without clear transitions. This technique mimics the phenomenology of anticipatory grief, in which past and future contaminate each other: every memory of the child is simultaneously an apprehension of loss, every domestic moment retrospectively charged with the knowledge of what is coming. The final image — the mother leaning against the memorial "like a wishbone" — is devastating in its implications. A wishbone is a structure designed to be broken, and its breaking is associated with the granting of wishes. The simile suggests both the mother's fragility and the desperate, futile quality of her hope.

Hughes's "Bayonet Charge" approaches loss from the opposite direction — not the slow accumulation of domestic grief but the sudden, violent annihilation of conceptual coherence. The poem's opening — "Suddenly he awoke and was running" — is masterful in its disorientation: "awoke" suggests not alertness but its opposite, a transition into a reality so extreme that previous consciousness now seems like sleep. The soldier's physical experience is rendered with hallucinatory intensity ("bullets smacking the belly out of the air," "blue crackling air"), but it is the collapse of ideological framework that constitutes the poem's central loss. The parenthetical — "(King, honour, human dignity, etcetera / Dropped like luxuries in a yelling alarm)" — is Hughes's most corrosive device. Hughes writes "etcetera" once (cite exactly as printed; do not abbreviate to "etc.", and don't double the word), and the dismissive single word performs the very exhaustion it describes, reducing the entire apparatus of patriotic justification to a list too tedious to complete. "Luxuries" is equally devastating: it implies that moral principles are affordable only in peacetime, that they are possessions discarded in extremis rather than foundations that sustain.

The "yellow hare" that "rolled like a flame / And crawled in a threshing circle" is the poem's structural and moral pivot. It is the only moment of individualised suffering in a landscape of anonymous violence, and its impact derives precisely from its irrelevance — the hare's pain serves no strategic purpose, illustrates no principle, advances no cause. It is suffering as pure fact, stripped of narrative justification. Hughes suggests that this — not heroism, not sacrifice, not any of the stories war tells about itself — is the truth of combat: purposeless damage inflicted on sentient beings. The soldier's final act — running towards the enemy "his terror's touchy dynamite" — is not courage but the absence of any alternative, a "loss" of selfhood so complete that forward momentum is all that remains.

Both poets, though separated by context and approach, converge on a shared insight: that war produces losses for which no language — commemorative, patriotic, elegiac — is adequate. Weir's mother cannot articulate her grief directly, displacing it into objects and gestures; Hughes's soldier cannot articulate his terror, his thoughts fragmenting under the pressure of experience. The formal strategies of both poems — Weir's associative, temporally fluid structure; Hughes's violently enjambed, caesura-ridden lines — are attempts to find poetic forms capable of holding what discursive language cannot. In this sense, both poems are not merely about loss but are themselves acts of linguistic loss — records of the point at which language fails in the face of what it is asked to describe.`,
            },
            markScheme: [
              'AO1: Read, understand and respond — use textual references to support interpretation (12 marks)',
              'AO2: Analyse language, form and structure using subject terminology (12 marks)',
              'AO3: Show understanding of context (6 marks)',
              'Must compare both poems throughout — not two separate essays',
              'Band 5-6: Critical comparison with exploratory analysis; convincing context',
              'Band 3-4: Clear comparison with explained analysis; clear context',
              'Band 1-2: Simple comparison with awareness of methods; some context',
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p2-03-secC',
        title: 'Section C: Unseen Poetry',
        description: 'Answer both questions in this section.',
        totalMarks: 32,
        suggestedTimeMinutes: 40,
        questions: [
          {
            id: 'aqa-lit-p2-03-q3',
            questionNumber: 3,
            questionText:
              'In "What the River Knows," how does the poet present the relationship between nature and human life?\n\n[24 marks]',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'analysis',
            extract: UNSEEN_3A,
            extractSource: 'Original poem — "What the River Knows"',
            modelAnswers: {
              'Grade 4-5': `The poet presents the river as something that has watched human life for a long time. The river "has been taking notes for centuries" which is personification — it makes the river seem like a witness or a recorder. It knows about all the things people have thrown into it, like "a wedding ring thrown in anger" and "a letter that was never sent." These are personal, emotional objects which show the river is connected to people's private lives.

The river also remembers history: "the cholera summers, the ice fairs, / the children who swam here." This list mixes good and bad memories together, showing that the river doesn't judge — it just remembers everything equally.

In the present, the river carries "coffee cups and condoms, / plastic bags like pale jellyfish." The simile comparing plastic bags to jellyfish is clever because it shows how human rubbish has become part of the river's natural world. The word "still" in "still it keeps moving" shows the river continues despite everything humans do to it.

The final line describes the river as "patient, indifferent, old as stone." These three adjectives suggest the river will outlast all human activity. "Indifferent" is important because it means the river doesn't care about humans — it just carries on regardless. This is both comforting and slightly unsettling.`,
              'Grade 6-7': `The poet constructs the river as an immortal, non-judgmental witness to the full span of human experience, using personification and cataloguing to explore the asymmetrical relationship between a natural feature that endures and the human lives that pass through its awareness.

The opening metaphor — "taking notes for centuries" — immediately establishes the river as a conscious, archival presence. The phrase positions the river as a scholar or journalist rather than a passive landscape feature, conferring upon it an agency that reconfigures the human-nature relationship: we do not observe the river; it observes us. The catalogue that follows — "bicycles and shopping trolleys, / a wedding ring thrown in anger, / a letter that was never sent" — juxtaposes the mundane and the emotionally charged, suggesting that the river receives all human deposits with equal attention, flattening the hierarchies of significance that humans impose on their own experience.

The historical catalogue in the third stanza extends the river's temporal range, encompassing "cholera summers" (the Victorian epidemics), "ice fairs" (the Little Ice Age), and "children who swam here / before the signs went up." This final detail introduces a note of elegiac commentary: the signs that now prohibit swimming represent the bureaucratisation of the relationship between humans and nature, a loss of direct contact. The river remembers a time before such mediation existed.

The present tense of the fourth stanza — "Now it carries coffee cups and condoms" — introduces environmental critique without polemic. The simile "plastic bags like pale jellyfish" is particularly effective: it simultaneously beautifies pollution (pale, translucent, floating) and indicts it (the bags mimic living creatures, suggesting that human waste is colonising ecological niches). The river's continued movement — "still it keeps moving" — positions it as a force indifferent to human degradation.

The final line — "patient, indifferent, old as stone" — deploys a tricolon of increasing force. "Patient" implies purpose; "indifferent" removes it; "old as stone" transcends human temporality entirely. The river is not merely older than the city: it belongs to a geological timescale in which human civilisation is an episode, not a destination. The poet suggests that nature's relationship to human life is one of tolerant accommodation rather than partnership — the river carries our debris, records our histories, and outlasts our presence without caring whether we are here or not.`,
              'Grade 8-9': `The poem constructs the river as an entity that occupies a fundamentally different temporal and moral register from the human lives it witnesses, deploying personification not as decorative metaphor but as an epistemological reframing that challenges anthropocentric assumptions about the significance of human experience.

The opening — "The river has been taking notes for centuries" — performs a double operation: it confers consciousness on the river (personification) while simultaneously archiving that consciousness in a mode associated with detached observation rather than emotional engagement. "Taking notes" implies recording without intervening, witnessing without judging — a stance that becomes the poem's governing principle. The river's "notes" encompass both the specific and the archetypal: "a wedding ring thrown in anger" is simultaneously a particular object and a universal human narrative of love's failure, while "a letter that was never sent" is charged with the pathos of uncommunicated intention. The river, the poem suggests, is the repository of all the things humans cannot face or refuse to articulate.

The catalogue form that dominates the poem's middle stanzas is itself a structural argument. By listing "bicycles and shopping trolleys" alongside "cholera summers" and "ice fairs," the poet flattens historical hierarchies, treating the detritus of contemporary consumerism and the catastrophes of Victorian public health as equivalent deposits in the river's memory. This is not moral relativism but geological perspective: from the river's vantage point, all human history occupies the same narrow band of recent experience, its internal distinctions invisible at sufficient temporal distance.

The transition to the present — "Now it carries coffee cups and condoms" — introduces a quiet environmental critique that avoids polemic through the precision of its imagery. "Plastic bags like pale jellyfish" is the poem's most technically accomplished simile: the comparison simultaneously aestheticises refuse (the bags are "pale," translucent, floating with apparent grace) and exposes the ecological violence of that aestheticisation (plastic bags kill actual jellyfish; the simile's beauty is itself an index of environmental degradation). The word "pale" carries spectral connotations — these are ghost-creatures, imitations of life, haunting the river's ecosystem.

The final line — "patient, indifferent, old as stone" — is a masterclass in controlled escalation. "Patient" still implies some relationship to human temporality (one is patient in relation to something one awaits); "indifferent" severs that relationship entirely; "old as stone" transcends the biological register altogether, positioning the river within geological time where human categories of meaning cease to apply. The tricolon's movement from relational ("patient") to autonomous ("indifferent") to elemental ("old as stone") enacts the poem's central argument: that nature's relationship to human life is not one of opposition or nurture but of radical otherness — a coexistence in which one party is aware of the other and the other is not.

The poem's deepest unsettling is its refusal to sentimentalise this indifference. The river does not care about the wedding ring or the cholera victims or the swimming children — it carries them all with the same imperturbable momentum. The effect is not nihilistic but perspectival: by inhabiting the river's viewpoint, however provisionally, the reader is invited to see human drama at the scale at which it actually operates in the natural world — as a brief, local disturbance in a system of incomprehensible duration and patience.`,
            },
            markScheme: [
              'AO1: Read, understand and respond — use textual references to support interpretation (12 marks)',
              'AO2: Analyse language, form and structure using subject terminology (12 marks)',
              'Band 5-6: Critical, exploratory response; judicious references; integrated analysis of methods',
              'Band 3-4: Clear, explained response; effective references; clear understanding of methods',
              'Band 1-2: Simple response; some references; awareness of methods',
            ],
          },
          {
            id: 'aqa-lit-p2-03-q4',
            questionNumber: 4,
            questionText:
              'In both "What the River Knows" and "Estuary," the speakers describe bodies of water. What are the similarities and/or differences between the ways the poets present this?\n\n[8 marks]',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'comparison',
            extract: UNSEEN_3B,
            extractSource: 'Original poem — "Estuary"',
            modelAnswers: {
              'Grade 4-5': `Both poems describe water in a way that connects it to human emotions. In "What the River Knows," the river remembers human history and carries people's discarded objects. In "Estuary," the water "writes / and overwrites its messages," which suggests it is constantly changing and communicating.

However, the poems have different tones. "What the River Knows" is more about history and the passing of time, while "Estuary" becomes personal at the end when the speaker compares the mud pulling at their feet to grief — "not the drowning they describe, / but the slow, soft pull of ground." Both poems use water as a metaphor, but for different things: memory in the first and loss in the second.`,
              'Grade 6-7': `Both poems personify water as a communicative entity, but to divergent ends. "What the River Knows" constructs the river as an archivist — "taking notes for centuries" — whose consciousness spans historical time and receives all human experience with impartial attention. "Estuary" presents water as an author whose communications are deliberately ephemeral: "The water writes / and overwrites its messages, / each wave a sentence spoken / to no one." Where the river preserves, the estuary erases.

The poems also differ in the speaker's relationship to the water. "What the River Knows" maintains observational distance — the speaker catalogues the river's contents but does not enter it. "Estuary's" speaker stands "where land gives up / pretending to be solid," physically immersed in the liminal space between land and water. This embodied engagement enables the poem's emotional pivot: the mud that "wants you to remain" becomes a metaphor for grief's "slow, soft pull" — a gravitational loss rather than a dramatic one.

Both poems use water to explore time, but at different scales. The river operates in centuries; the estuary operates in tidal cycles. Yet both arrive at a similar insight: water's relationship to human emotion is one of analogy rather than sympathy — it does not feel for us, but it moves in ways that illuminate how we feel.`,
              'Grade 8-9': `Both poems deploy water as a medium of meaning-making, but they construct opposing models of how water signifies. "What the River Knows" presents the river as a cumulative archive — its meaning derives from accretion, the layering of centuries of human deposit into a single continuous flow. "Estuary" presents water as a palimpsest of erasure: meaning is perpetually written and overwritten, "each wave a sentence spoken / to no one, understood by everything." The river keeps; the estuary lets go. This fundamental difference generates distinct emotional registers: the river prompts meditation on memory and permanence; the estuary enables an exploration of grief and release.

The speakers' physical relationships to the water also diverge productively. "What the River Knows" is observed from the bank — the catalogue form implies a surveyor's distance, an intellectual engagement with the river's contents. "Estuary's" speaker crosses the threshold: "I stand where land gives up / pretending to be solid," a formulation that recasts solid ground as performance and the interstitial mud as truth. The sinking feet — "the earth / closes gently over them" — transform the body into part of the landscape, collapsing the observer-observed distinction that "What the River Knows" maintains.

This physical immersion enables "Estuary's" devastating concluding metaphor: grief as "the slow, soft pull of ground / that wants you to remain." The personification of ground as desirous recasts grief not as an emotion the speaker feels but as an external force that acts upon them — a gravitational field rather than a psychological state. "What the River Knows" concludes with the river's indifference; "Estuary" concludes with the landscape's insistence. Together, they present complementary faces of nature's relationship to human suffering: one that does not notice, and one that will not let go.`,
            },
            markScheme: [
              'AO2: Analyse language, form and structure using subject terminology (8 marks)',
              'Must compare: identify similarities AND/OR differences',
              'Band 3-4 (7-8 marks): Exploratory comparison with well-chosen references',
              'Band 2-3 (4-6 marks): Clear comparison with relevant references',
              'Band 1 (1-3 marks): Simple comparison with some references',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 4
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lit-p2-04',
    board: 'AQA',
    paperNumber: 2,
    title: 'Paper 2: Modern Texts and Poetry',
    subtitle: 'English Literature 8702/2',
    code: '8702/2',
    totalTimeMinutes: 135,
    totalMarks: 96,
    sections: [
      {
        id: 'aqa-lit-p2-04-secA',
        title: 'Section A: Modern Texts',
        description:
          'Answer one question from this section on your studied text.\n\nAn Inspector Calls — J.B. Priestley',
        totalMarks: 34,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'aqa-lit-p2-04-q1',
            questionNumber: 1,
            questionText:
              'How does Priestley present the importance of the Inspector in An Inspector Calls?\n\nWrite about:\n• how Priestley presents the Inspector at different points in the play\n• how Priestley uses the Inspector to convey his ideas to the audience.\n\n[30 marks + 4 marks for SPaG]',
            marks: 34,
            suggestedTimeMinutes: 50,
            questionType: 'evaluation',
            modelAnswers: {
              'Grade 4-5': `The Inspector is one of the most important characters in An Inspector Calls. Priestley uses him to teach the Birlings and the audience about social responsibility.

When the Inspector arrives, the stage directions say he creates "an impression of massiveness, solidity and purposefulness." This makes him seem powerful and determined. He interrupts the family's celebration of Sheila's engagement, which shows he represents something more important than their private happiness.

The Inspector controls the investigation by showing each character a photograph one at a time. He says "one person and one line of inquiry at a time" which shows he has a method and won't let the Birlings take control. He is different from the Birlings because he doesn't care about their social status — he ignores Birling's mentions of knowing the Chief Constable.

The Inspector's famous speech at the end is very important: "We don't live alone. We are members of one body. We are responsible for each other." This is Priestley's message to the audience. It's a socialist message about how everyone in society should look after each other, not just themselves.

After the Inspector leaves, the family argue about whether he was real. This mystery makes the Inspector seem supernatural or like a figure representing conscience. Priestley uses him to deliver the message that even if nobody is watching, we should still behave responsibly.`,
              'Grade 6-7': `Priestley constructs the Inspector as a multi-functional dramatic device: he is simultaneously an investigator, a moral authority, a structural mechanism, and a symbolic figure whose ambiguous ontological status — is he real? supernatural? allegorical? — amplifies the play's thematic impact.

The Inspector's entrance is carefully staged to disrupt the Birlings' complacency. His arrival interrupts Birling's speech about individual responsibility, creating a direct dramatic confrontation between two opposing philosophies. The stage directions — "massiveness, solidity and purposefulness" — establish him as a physical presence that cannot be deflected or ignored, in contrast to the "pink and intimate" lighting of the preceding scene, which the Inspector's arrival changes to "brighter and harder." This lighting shift externalises the Inspector's function: he brings uncomfortable clarity to a household that has preferred comfortable obscurity.

The Inspector's investigative method is itself a statement of values. His insistence on showing the photograph to "one person... at a time" rejects the Birlings' instinct to construct a collective defence, instead isolating each individual with their specific guilt. This methodology embodies Priestley's moral argument: responsibility cannot be shared, diluted, or distributed — it must be individually acknowledged. The Inspector's refusal to defer to Birling's social connections demonstrates that in his moral framework, status confers no exemption.

His language operates in a different register from the Birlings' evasive, euphemistic discourse. Where Birling speaks of "duty" and Mrs Birling of "her own people," the Inspector speaks in concrete, physical terms: Eva Smith "swallowed a lot of strong disinfectant" and "died in misery and agony." This refusal to sanitise suffering is a deliberate confrontation with the Birlings' habit of abstracting real consequences into comfortable categories.

The Inspector's final speech — "We are members of one body. We are responsible for each other" — operates on the boundary between dramatic dialogue and direct address to the audience. Its rhetorical structure — anaphoric repetition of "we," escalation from statement to warning ("if men will not learn that lesson, then they will be taught it in fire and blood and anguish") — draws on the traditions of both political oratory and biblical prophecy. For Priestley's 1945 audience, the "fire and blood and anguish" would have evoked both world wars, transforming the Inspector's warning from prediction to retrospective diagnosis.

The ambiguity surrounding the Inspector's identity — confirmed by the final phone call which announces a real inspector is on the way — prevents the Birlings (and the audience) from dismissing his message as fraudulent. Priestley ensures that the moral challenge outlasts the challenger, suggesting that conscience cannot be debunked by discrediting its messenger.`,
              'Grade 8-9': `The Inspector in An Inspector Calls occupies a unique position in English dramatic literature: he is at once a realistic character (a police investigator), a structural device (the mechanism through which each Birling's guilt is exposed), a rhetorical figure (Priestley's mouthpiece for socialist ideology), and a symbolic or supernatural presence whose irreducible ambiguity prevents the audience from domesticating his challenge into any single interpretive framework.

Priestley's stage directions introduce the Inspector through a vocabulary of materiality — "massiveness, solidity and purposefulness" — that is paradoxically destabilised by everything that follows. A character described in terms of physical weight turns out to have no verifiable institutional existence; his "solidity" is a quality of presence, not of identity. This initial misdirection is deliberate: Priestley establishes the Inspector as something the audience can see and feel but not categorise, a figure who resists the very impulse to classify and contain that defines the Birlings' worldview.

The Inspector's dramatic entrance interrupts Birling's speech at the precise moment when its ideological content is most explicitly stated: "a man has to mind his own business and look after himself and his own." The timing is not coincidental but structural: the Inspector arrives as the antithesis of Birling's thesis, the play's dialectical architecture announced in its staging. The lighting change — from "pink and intimate" to "brighter and harder" — translates this ideological confrontation into visual language, suggesting that the Inspector's function is not merely to investigate but to illuminate: to replace the Birlings' preferred self-image with something closer to objective truth.

The Inspector's investigative methodology is itself an ideological statement of considerable sophistication. His insistence on "one person and one line of inquiry at a time" has been read as a technique of police procedure, but it functions more precisely as a dismantling of collective responsibility in favour of individual accountability. The Birlings instinctively seek to distribute guilt — each pointing to the next link in the chain — but the Inspector forces each to confront their specific contribution in isolation. This is Priestley's answer to the most common defence of systemic injustice: the claim that individual actions are insignificant within larger structures. The Inspector demonstrates that the structure is nothing but individual actions, and that responsibility cannot be evaded by gesturing at complexity.

The Inspector's language constitutes a sustained assault on the Birlings' discursive conventions. Where the family employs euphemism, abstraction, and circumlocution — "a girl of that sort," "her own people," "I can't accept any responsibility" — the Inspector insists on the material, the physical, the specific: "She'd swallowed a lot of strong disinfectant. It burnt her inside out." This linguistic strategy is not merely rhetorical effectiveness but philosophical commitment: the Inspector refuses to permit the distance between language and reality that makes indifference possible. By forcing the Birlings to hear what actually happened to Eva Smith's body, he collapses the gap between their actions and their consequences.

The Inspector's final speech represents Priestley's most direct intervention in the dramatic texture. The passage — "We don't live alone. We are members of one body. We are responsible for each other. And I tell you that the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish" — operates simultaneously in several registers. It is prophetic (the "fire and blood" anticipates both world wars for the 1912 characters); it is retrospective (the 1945 audience has already witnessed the fulfilment of this prophecy); and it is prospective (Priestley is arguing that the lesson must be learned now, in 1945, or it will be taught again). The temporal layering transforms the speech from a character's dialogue into a direct address to the audience, breaking the fourth wall without technically doing so.

The question of the Inspector's ontological status — human, supernatural, temporal anomaly, collective conscience — is not a puzzle to be solved but a deliberately irresolvable ambiguity that is the play's final and most sophisticated argumentative move. If the Inspector is real, his message has institutional authority; if supernatural, it has metaphysical authority; if allegorical, it has philosophical authority. By refusing to confirm any single reading, Priestley ensures that the Inspector's challenge cannot be domesticated into a framework that the audience can manage and thereby dismiss. The final phone call — announcing a real inspector and a real death — seals this strategy: it reasserts the reality of consequence at the precise moment when the Birlings (and potentially the audience) have begun to construct a narrative of escape. The play ends not with resolution but with the renewal of the challenge, suggesting that the Inspector's function is not to judge but to return — as many times as necessary, in as many forms as necessary — until the lesson is learned.`,
            },
            markScheme: [
              'AO1: Read, understand and respond — use textual references to support interpretation (12 marks)',
              'AO2: Analyse language, form and structure using subject terminology (12 marks)',
              'AO3: Show understanding of context (6 marks)',
              'AO4: SPaG — spelling, punctuation, grammar, vocabulary (4 marks)',
              'Band 5-6: Critical/exploratory response; judicious references; analysis of methods; convincing context',
              'Band 3-4: Clear/explained response; effective references; understanding of methods; clear context',
              'Band 1-2: Simple/emerging response; some references; awareness of methods; some context',
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p2-04-secB',
        title: 'Section B: Poetry Anthology',
        description: 'Answer one question from this section.\n\nPower and Conflict Anthology',
        totalMarks: 30,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-lit-p2-04-q2',
            questionNumber: 2,
            questionText:
              'Compare how poets present the effects of conflict on identity in "Remains" by Simon Armitage and "Bayonet Charge" by Ted Hughes.\n\nIn your answer you should consider:\n• the poets\' use of language, form and structure\n• the influence of the contexts in which the poems were written.\n\n[30 marks]',
            marks: 30,
            suggestedTimeMinutes: 45,
            questionType: 'comparison',
            modelAnswers: {
              'Grade 4-5': `Both "Remains" and "Bayonet Charge" show how conflict destroys a person's sense of who they are. In "Remains," the soldier can't escape the memory of killing someone. The dead man is "dug in behind my eyes" which is a metaphor showing the memory has become part of him. His identity has been changed by what he did.

In "Bayonet Charge," the soldier loses his beliefs during battle. He started out believing in "King, honour, human dignity, etcetera" but during the charge these ideas "dropped like luxuries." (Hughes writes "etcetera" once — cite exactly as printed; do not abbreviate to "etc.", and don't double the word.) The word "luxuries" shows that in the middle of battle, beliefs are not important anymore — only survival matters. His identity as a patriotic soldier is replaced by pure fear.

Both poems show soldiers whose identities are damaged, but in different ways. Armitage's soldier suffers after the event — he can't sleep and tries to "flush" the memory away. Hughes's soldier suffers during the event — he is confused and frightened in the middle of the charge. The colloquial language in "Remains" ("legs it up the road") makes it sound like real speech, while Hughes uses more poetic imagery ("blue crackling air").

The context matters because "Remains" is based on real accounts from soldiers in Iraq, while "Bayonet Charge" imagines a World War One infantry charge. Hughes was born in 1930 and never fought in any war — he drew on his father William's WWI accounts (William survived Gallipoli as one of only seventeen survivors of his Lancashire Fusiliers regiment) to imagine the soldier's terror. Both poems show that whatever the war, conflict strips away people's sense of self.`,
              'Grade 6-7': `Armitage and Hughes both present conflict as a force that fragments and reconstitutes identity, but they locate this transformation at different points in the temporal arc of combat experience — Armitage in the aftermath, Hughes in the immediate moment of violence.

In "Remains," the dissolution of identity is tracked through the poem's pronominal structure. The opening stanzas employ the collective "we" — "We get sent out," "all three of us open fire" — distributing responsibility across the group and maintaining the soldier's identity as part of a unit. The transition to the singular "I" — "I see broad daylight on the other side" — marks the moment at which collective identity fails as a protective mechanism. The soldier's individual consciousness becomes inescapable, and with it, individual guilt. The dead man, "dug in behind my eyes," has colonised the speaker's perceptual apparatus; the military metaphor of being "dug in" suggests that the victim has become a permanent occupant of the soldier's identity, a presence that cannot be dislodged.

Hughes constructs identity-loss as a real-time process. The opening — "Suddenly he awoke and was running" — presents a protagonist already mid-action, denied the orienting framework of beginning. The third-person pronoun "he" creates distance, as though the speaker cannot fully identify with the figure being described — or as though the soldier has become sufficiently alien to himself that first-person narration is impossible. The parenthetical aside — "(King, honour, human dignity, etcetera / Dropped like luxuries in a yelling alarm)" — dramatises the shedding of ideological identity under extreme pressure. Hughes writes "etcetera" once (cite exactly as printed; do not abbreviate to "etc.", and don't double the word); the single dismissive word performs the bankruptcy of patriotic language, trailing off into an admission that the entire framework was always a list — enumerable, disposable, not fundamental.

Structurally, the poems mirror their protagonists' psychological states. "Remains" begins with the appearance of narrative coherence (stanzas, a chronological account) but disintegrates into the final couplet's isolation: "his bloody life in my bloody hands." The polysemy of "bloody" — literally blood-stained, colloquially emphatic — captures the contamination of everyday language by violent experience. "Bayonet Charge" deploys three stanzas of increasing fragmentation, the enjambments and caesurae accelerating until the final image of the soldier "plunged past" understanding itself, running on pure instinct where identity once was.

Both poets suggest that conflict does not merely threaten the body but dismantles the narrative structures through which identity is maintained. Armitage's soldier cannot construct a version of events that allows him to live with himself; Hughes's soldier cannot sustain the version of himself that made the charge seem meaningful. In both cases, the "self" that entered conflict no longer exists, and what replaces it is not a new identity but an absence — a space where coherent selfhood used to be.`,
              'Grade 8-9': `Armitage and Hughes construct complementary phenomenologies of identity-destruction under the pressure of combat, each deploying form, voice, and imagery as diagnostic instruments that reveal the specific mechanisms by which warfare dismantles the coherent selfhood soldiers carry into battle.

"Remains" dramatises the progressive failure of the strategies through which the soldier attempts to contain his experience within a manageable identity. The opening's collective voice — "On another occasion, we got sent out" — performs the regiment's institutional function: by distributing agency across the group ("all three of us open fire"), the military collective absorbs individual responsibility, allowing each soldier to understand himself as a component rather than an author of violence. Armitage tracks the collapse of this protective mechanism with forensic precision. The shift to "I" at the poem's centre marks the moment at which the collective identity proves insufficient to the moral weight of what has occurred. The soldier's attempt to manage this through narrative — the anecdotal, conversational register ("and somebody else and somebody else") — likewise fails: the colloquial voice that initially suggests casual control increasingly reveals itself as a form of compulsive repetition, the verbal tic of a mind unable to stop returning to the scene it cannot process.

The climactic image — the dead man "dug in behind my eyes" — is the poem's most concentrated statement of identity-corruption. "Dug in" imports the military vocabulary of entrenchment into the psychological domain, suggesting that the victim has established a permanent fortified position within the soldier's consciousness. The eyes, the organs of witness, have been occupied by the object of their witnessing. Armitage suggests that the act of killing does not merely produce guilt but restructures perception itself: the soldier now sees through the dead man, his visual field permanently mediated by the presence that inhabits it.

Hughes approaches identity-dissolution from a radically different angle: not the retrospective failure of narrative containment but the real-time evacuation of ideological content under physical duress. "Bayonet Charge" presents a protagonist mid-action whose identity — the complex of beliefs, loyalties, and self-understandings that motivated his enlistment — is being stripped away faster than consciousness can register. The opening "Suddenly he awoke" positions the charge as a transition between states of consciousness: the "sleep" of peacetime ideology and the violent "waking" of combat reality. The third-person narration is crucial: Hughes's refusal of "I" suggests that the experience is too extreme for the first-person to accommodate — the soldier has become an object, a body in motion, witnessed rather than witnessing.

The parenthetical — "(King, honour, human dignity, etcetera / Dropped like luxuries in a yelling alarm)" — is Hughes's most devastating formal move. The parentheses themselves perform relegation: the entire structure of patriotic identity is bracketed, enclosed, set aside from the poem's "real" content (which is physical sensation and terror). The dismissive single "etcetera" — which Hughes writes once and which should be cited exactly as printed (never doubled, never abbreviated to "etc.") — detonates the passage: it transforms patriotic values from convictions into a list, and a list not worth completing. "Luxuries" extends the metaphor: ideals are possessions rather than foundations, items one carries when circumstances permit and discards when they do not. Hughes implies that ideological identity — the sense of oneself as a patriot, a citizen, a moral agent — is not hardwired but accessory, and that combat reveals this with merciless clarity.

Both poets converge on the recognition that conflict does not merely harm identity but reveals its contingency. Armitage shows that the soldier's post-combat identity is not a damaged version of his former self but evidence that the former self was always a construction — one that depended on never having to accommodate the reality of killing. Hughes shows that the patriotic self was always provisional — a set of propositions that functioned only in the absence of the experiences they purported to justify. In both cases, combat does not destroy a real self but exposes the fragility of what was taken for one, leaving not a wounded identity but the vertiginous recognition that identity itself may be less substantial than it appears.`,
            },
            markScheme: [
              'AO1: Read, understand and respond — use textual references to support interpretation (12 marks)',
              'AO2: Analyse language, form and structure using subject terminology (12 marks)',
              'AO3: Show understanding of context (6 marks)',
              'Must compare both poems throughout',
              'Band 5-6: Critical comparison with exploratory analysis; convincing context',
              'Band 3-4: Clear comparison with explained analysis; clear context',
              'Band 1-2: Simple comparison with awareness of methods; some context',
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p2-04-secC',
        title: 'Section C: Unseen Poetry',
        description: 'Answer both questions in this section.',
        totalMarks: 32,
        suggestedTimeMinutes: 40,
        questions: [
          {
            id: 'aqa-lit-p2-04-q3',
            questionNumber: 3,
            questionText:
              'In "Controlled Assessment," how does the poet present ideas about education?\n\n[24 marks]',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'analysis',
            extract: UNSEEN_4A,
            extractSource: 'Original poem — "Controlled Assessment"',
            modelAnswers: {
              'Grade 4-5': `The poet presents education as a system that reduces children to numbers and data. The title "Controlled Assessment" is an education term which immediately connects the poem to school. The students are measured by "attendance codes, predicted grades" — these are all numbers, not anything personal or human.

The speaker says their teacher told them they are "a C / aspiring to a B" which is a metaphor comparing the student to a letter grade. The question "as though I am a letter / learning to be a better letter" shows how ridiculous this is — people aren't letters. The tone here is sarcastic.

The poem then describes Jason Cooke crying "because his mum forgot to come." This is an emotional, human moment that contrasts with all the data and numbers. The "banner" saying "AIM HIGHER" is ironic because Jason's problem isn't academic — it's personal and emotional, and the school system doesn't measure things like that.

The final stanza says the data shows "we're improving" and tells "a story of upward trends," but "none of it mentions Jason." This contrast between data and reality is the poem's main point. The last image of Miss Shah holding Jason, which is "not on any mark scheme," suggests that the most important things in education — care, kindness, human connection — can't be measured.`,
              'Grade 6-7': `The poet presents education as a system that has become so fixated on quantification that it has lost the capacity to recognise, let alone address, the human realities of the children it serves. The title's irony is immediately apparent: "Controlled Assessment" is a formal examination term, but the poem systematically demonstrates that what matters most in education is precisely what cannot be "controlled" or "assessed."

The opening stanza establishes the poem's central metaphor: education as measurement. Students are reduced to "attendance codes, predicted grades, / the distance between target and result / plotted on a graph." The language is bureaucratic and spatial — "distance," "plotted," "graph" — transforming children into data points in a coordinate system. The passive construction ("They measure us") positions students as objects of scrutiny rather than participants in their own development.

The speaker's personal experience crystallises this dehumanisation. Being told "I am a C / aspiring to a B" reduces identity to alphabetical ranking, and the speaker's wry response — "as though I am a letter / learning to be a better letter" — exposes the absurdity through a literalising technique that takes the metaphor of grades-as-identity to its logical conclusion. The enjambment across the stanza break ("a C / aspiring to a B") mirrors the fragmentation of selfhood that the grading system produces.

The introduction of Jason Cooke represents the poem's emotional and structural turning point. Jason's distress — "crying / because his mum forgot to come" — introduces a category of need that the measurement system cannot accommodate. The spatial irony is devastating: the banner reading "AIM HIGHER" is literally above him as he cries, its motivational language rendered grotesque by its proximity to genuine suffering. The banner addresses academic ambition; Jason's crisis is relational, emotional, domestic — none of which appear on any spreadsheet.

The final stanza's contrast between "upward trends and value-added" and the reality of Jason's crumpled face and Miss Shah's wordless embrace constitutes the poem's thesis. The penultimate observation — "none of it mentions Jason" — is a quiet indictment of a system that has defined its metrics so narrowly that human pain falls outside its field of vision. The closing image — Miss Shah holding Jason in an act that "is not on any mark scheme" — reclaims education as fundamentally relational, arguing that the most valuable thing a school can offer is not measurable progress but witnessed, acknowledged suffering.`,
              'Grade 8-9': `The poem mounts a structurally sophisticated critique of the reduction of education to quantitative metrics, employing a deliberately prosaic register that mirrors the bureaucratic language it interrogates while strategically deploying moments of emotional specificity that expose the human cost of that reduction.

The title operates on multiple levels. "Controlled Assessment" is a specific examination format (now largely replaced, lending the term a period quality), but the poem recontextualises each word: "controlled" implies constraint, surveillance, the suppression of organic development; "assessment" implies judgement, reduction, the transformation of complex persons into evaluable units. The entire educational experience, the title suggests, is structured around the twin imperatives of control and measurement, neither of which accommodates the actual lives of children.

The opening stanza's vocabulary is systematically bureaucratic: "attendance codes," "predicted grades," "target," "result," "graph." The cumulative effect is to construct a lexicon in which no word carries emotional weight or acknowledges subjective experience. Students are "measured by numbers" — the passive voice eliding the agents responsible for this system — and their educational lives are rendered as "the distance between target and result / plotted on a graph." The spatial metaphor is revealing: "distance" implies a deficit, a gap to be closed, positioning every child as inherently insufficient in relation to an externally imposed standard.

The speaker's personal testimony — "My teacher says I am a C / aspiring to a B" — introduces a first-person voice whose very existence constitutes a challenge to the system's impersonality. The enjambment after "C" creates a momentary pause in which the full weight of that reductive designation is felt before "aspiring to a B" offers the system's consolation: you are insufficient, but you might become less so. The speaker's response — "as though I am a letter / learning to be a better letter" — employs a literalising irony that exposes the metaphorical violence of grading: to call a child a letter is to perform an act of ontological substitution, replacing a person with a sign.

The poem's structural pivot is Jason Cooke, whose introduction disrupts both the poem's discursive register and the measurement framework it describes. The specificity of the name — Jason Cooke, not "a student" — is itself a political act: it insists on individuality in a system that prefers anonymity. His crisis — "his mum forgot to come" — is so irreducibly personal, so categorically unmeasurable, that it constitutes a refutation of the entire assessment framework simply by existing. The spatial composition of the scene — the "AIM HIGHER" banner above, the crying child below — creates a visual irony that borders on cruelty, the institutional exhortation rendered obscene by its juxtaposition with genuine distress.

The final stanza performs the poem's most sophisticated critique. The data "says we're improving" and "tells a story / of upward trends and value-added" — but the word "story" is doing crucial work. It repositions data not as objective truth but as narrative: a selection, an interpretation, a version of events that is necessarily partial. The data's "story" is one "of upward trends and value-added," but it is also, as the poet demonstrates, a story from which Jason Cooke has been edited out. The concluding image — Miss Shah holding Jason in an act "not on any mark scheme" — is the poem's counter-narrative: a moment of unquantifiable human value that the system cannot recognise because it lacks the vocabulary to describe it. The poem's final argument is that the most important thing happening in any school on any given day is almost certainly something that will never appear in any dataset — and that a system incapable of seeing this is not merely flawed but fundamentally misdirected.`,
            },
            markScheme: [
              'AO1: Read, understand and respond — use textual references to support interpretation (12 marks)',
              'AO2: Analyse language, form and structure using subject terminology (12 marks)',
              'Band 5-6: Critical, exploratory response; judicious references; integrated analysis of methods',
              'Band 3-4: Clear, explained response; effective references; clear understanding of methods',
              'Band 1-2: Simple response; some references; awareness of methods',
            ],
          },
          {
            id: 'aqa-lit-p2-04-q4',
            questionNumber: 4,
            questionText:
              'In both "Controlled Assessment" and "Assembly," the speakers describe their experience of school. What are the similarities and/or differences between the ways the poets present this?\n\n[8 marks]',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'comparison',
            extract: UNSEEN_4B,
            extractSource: 'Original poem — "Assembly"',
            modelAnswers: {
              'Grade 4-5': `Both poems criticise the education system for focusing on data instead of children. In "Controlled Assessment," students are measured by "predicted grades" and "attendance codes." In "Assembly," the headmaster "spoke in graphs" which is a metaphor showing he sees students as statistics, not people.

Both poems end with something the system misses. "Controlled Assessment" ends with Miss Shah comforting Jason, which "is not on any mark scheme." "Assembly" ends with the speaker's friend moving schools, and "nobody had measured / the size of that particular loss." Both show that what matters most to children — emotions and friendships — is invisible to the system.`,
              'Grade 6-7': `Both poems present education as a system that has substituted quantitative measurement for genuine understanding of children's lives, but they deploy different emotional registers to make this critique. "Controlled Assessment" moves between sardonic observation ("as though I am a letter / learning to be a better letter") and genuine pathos (Jason Cooke's tears). "Assembly" maintains a more consistently detached, almost numbed tone — the speaker counting "ceiling tiles, radiator pipes" while the headmaster recites data.

Both poems construct contrasts between institutional metrics and unmeasurable loss. "Controlled Assessment" opposes "upward trends" with Miss Shah's embrace; "Assembly" opposes the headmaster's "attendance up, exclusions down" with the departure of the speaker's best friend. The final lines of both poems function as devastating codas: "Controlled Assessment" notes that compassion is "not on any mark scheme"; "Assembly" observes that "nobody had measured / the size of that particular loss." In both cases, the verb "measured" becomes accusatory — the system measures everything except what matters.

The poems differ in their relationship to agency. "Controlled Assessment" provides a counter-model in Miss Shah, whose silent embrace represents an alternative educational ethic. "Assembly" offers no such consolation — the speaker is passive throughout, counting objects while the institution operates over and around them, and the friend's departure leaves a void that is simply, irrevocably, unmeasured.`,
              'Grade 8-9': `Both poems anatomise the epistemological limitations of data-driven education, but they construct distinct affective positions in relation to that critique. "Controlled Assessment" oscillates between sardonic resistance — the speaker's literalising irony ("as though I am a letter") signals active intellectual engagement with the system's absurdity — and compassionate witness, culminating in the image of Miss Shah's embrace as the unquantifiable ethical centre of education. "Assembly" operates through a more pervasive affective flatness: the speaker counts "ceiling tiles, radiator pipes, / the seconds until the bell," their disengagement mirroring the institution's disengagement from their inner life.

The poems converge most powerfully in their closings. Both deploy the vocabulary of measurement against itself: "Controlled Assessment" names what "is not on any mark scheme"; "Assembly" identifies what "nobody had measured." But the objects of this unmeasured significance differ instructively. "Controlled Assessment" locates value in a present act of compassion (Miss Shah holding Jason); "Assembly" locates it in an absent person (the friend who has gone). The former argues that the system overlooks what is happening; the latter argues that it overlooks what is missing. Together, they construct a comprehensive indictment: education-as-measurement fails both to see what is in front of it and to notice what has been lost.

The phrase "that particular loss" in "Assembly" carries special weight. "Particular" insists on specificity against the generalising impulse of data; it argues that grief, like friendship, is irreducibly individual and therefore incompatible with systems that operate through aggregation. Both poems ultimately suggest that education's most serious failure is not pedagogical but perceptual: it has constructed a way of seeing that is structurally incapable of seeing what matters most.`,
            },
            markScheme: [
              'AO2: Analyse language, form and structure using subject terminology (8 marks)',
              'Must compare: identify similarities AND/OR differences',
              'Band 3-4 (7-8 marks): Exploratory comparison with well-chosen references',
              'Band 2-3 (4-6 marks): Clear comparison with relevant references',
              'Band 1 (1-3 marks): Simple comparison with some references',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPER 5
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-lit-p2-05',
    board: 'AQA',
    paperNumber: 2,
    title: 'Paper 2: Modern Texts and Poetry',
    subtitle: 'English Literature 8702/2',
    code: '8702/2',
    totalTimeMinutes: 135,
    totalMarks: 96,
    sections: [
      {
        id: 'aqa-lit-p2-05-secA',
        title: 'Section A: Modern Texts',
        description:
          'Answer one question from this section on your studied text.\n\nAn Inspector Calls — J.B. Priestley',
        totalMarks: 34,
        suggestedTimeMinutes: 50,
        questions: [
          {
            id: 'aqa-lit-p2-05-q1',
            questionNumber: 1,
            questionText:
              'How does Priestley explore the conflict between generations in An Inspector Calls?\n\nWrite about:\n• how Priestley presents the conflict between the older and younger generations\n• how Priestley uses this conflict to convey his ideas about society.\n\n[30 marks + 4 marks for SPaG]',
            marks: 34,
            suggestedTimeMinutes: 50,
            questionType: 'evaluation',
            modelAnswers: {
              'Grade 4-5': `Priestley shows a clear conflict between the older generation (Mr and Mrs Birling) and the younger generation (Sheila and Eric) in An Inspector Calls. The older generation refuse to accept responsibility while the younger generation learn from the Inspector's visit.

At the start of the play, the family seem united. They are celebrating Sheila's engagement and everything seems happy. But once the Inspector arrives and reveals what they did to Eva Smith, the family splits along generational lines.

Mr Birling refuses to accept blame for firing Eva. He says "I can't accept any responsibility" and thinks he was just doing good business. Mrs Birling is even worse — she blames Eva for everything and says the father of the baby should take responsibility, not knowing it's her own son Eric. Neither of them changes or learns anything.

Sheila and Eric are different. Sheila says "I'll never, never do it again" and keeps feeling guilty even after the Inspector leaves. Eric is angry and upset, telling his parents "you're not the kind of father a chap could go to." He has learned that his parents' values are wrong.

At the end, when the family thinks the Inspector was fake, the parents celebrate but Sheila says "everything we said had happened really had happened." This shows the generational divide clearly — the old can't change but the young can.

Priestley uses this to show his audience that the younger generation can build a better society based on caring for others, not selfishness. He wrote the play in 1945 when there was hope for a new, fairer society.`,
              'Grade 6-7': `Priestley structures An Inspector Calls around a generational fault line that serves as both a realistic dramatic conflict and an allegorical argument about the possibility of social transformation. The older Birlings — Arthur and Sybil — represent the entrenched values of Edwardian capitalism, while Sheila and Eric embody the potential for moral evolution that Priestley identifies with the post-war generation.

The play's opening establishes generational harmony as a surface condition. The family's celebration of Sheila's engagement creates an appearance of unity, but Priestley plants early signs of instability. Birling's patronising speeches to Eric and Gerald ("you'll hear some people say that war is inevitable") position the younger generation as a passive audience for patriarchal wisdom, while Sheila's playful challenge to Gerald about his summer absence hints at an independent intelligence not yet activated.

The Inspector's investigation systematically activates this latent generational tension. Each revelation widens the divide, but the crucial distinction is not between innocence and guilt — all four Birlings are implicated — but between the capacity and the refusal to learn. Sheila's immediate, visceral response ("I'll never, never do it again") represents what the play values: the willingness to allow experience to restructure moral understanding. Her parents' responses — Birling's economic rationalism, Mrs Birling's class-based dismissal — represent its opposite: the deployment of existing ideological frameworks to neutralise moral challenge.

Eric's role in the generational conflict is more complex than Sheila's. His culpability is arguably the greatest — he has exploited Eva sexually and stolen money — yet Priestley presents his honest acknowledgement of guilt as morally superior to his parents' evasions. Eric's outburst — "you're not the kind of father a chap could go to when he's in trouble" — punctures Birling's patriarchal authority, revealing that the older generation's claim to moral leadership is hollow.

The play's denouement crystallises the generational divide into a philosophical opposition. Birling and Mrs Birling eagerly deconstruct the Inspector's credentials, treating the investigation as a problem of verification rather than morality. Sheila and Eric resist this retreat: Sheila's insistence that "the ones I knew are the ones who died" and Eric's contemptuous "you lot may be letting yourselves out nicely" demonstrate that their transformation is irreversible.

Contextually, Priestley's generational argument is inseparable from the play's 1945 context. Writing as Britain prepared to elect a Labour government committed to the welfare state, Priestley presents the younger generation as the agents of a collectivist future — not because they are innocent, but because they are capable of change. The older generation, locked into the individualist assumptions of the Edwardian era, cannot change because they have too much invested in the existing order. The play thus argues that social progress depends not on the conversion of those who benefit from inequality but on the moral courage of those young enough to imagine alternatives.`,
              'Grade 8-9': `Priestley's dramatisation of generational conflict in An Inspector Calls operates on three interlocking levels: as a psychologically credible family drama, as a structural analysis of how ideological reproduction is disrupted, and as a performative argument addressed to the 1945 audience about the historical agency of the post-war generation.

The play's architecture systematically demonstrates that the generational divide is not one of moral character but of epistemological flexibility. All four Birlings contribute to Eva Smith's destruction; the distinction between them lies not in what they did but in how they respond to the knowledge of what they did. The older Birlings employ a series of cognitive strategies — rationalisation (Birling: "I can't accept any responsibility"), class-based dismissal (Mrs Birling: "a girl of that sort"), appeals to authority ("I was an alderman for years"), and procedural delegitimisation (questioning the Inspector's identity) — that function collectively to insulate their existing worldview from the challenge the Inspector presents. These are not failures of feeling but failures of epistemology: the older Birlings' conceptual framework is incapable of accommodating the proposition that their comfortable lives are causally connected to the suffering of others, and so the proposition must be rejected.

Sheila and Eric, by contrast, demonstrate what might be called epistemological porosity: the capacity to allow new moral information to restructure existing understanding. Sheila's trajectory is particularly revealing. Her initial guilt is emotional and reactive — "I'll never, never do it again" — but it develops into something more sophisticated. By Act Three, she has internalised not merely the Inspector's conclusions but his method: she reads Gerald's evasions with the Inspector's acuity, warning "you fool — he knows." This evolution from passive recipient of moral instruction to active moral agent is Priestley's model for the transformation he hopes to catalyse in his audience.

Eric's generational rebellion is more volatile and more conflicted. His crimes — the sexual exploitation of Eva, the theft from his father's business — represent not merely individual moral failures but the logical consequences of the older generation's values. Eric has learned from his father that women of Eva's class are available for use, and from his mother that one's own needs take precedence over others' suffering. His guilt is genuine, but so is his fury: "you're not the kind of father a chap could go to when he's in trouble" is simultaneously a personal accusation and a structural critique — Eric's failings are the products of a parental model that taught self-interest and withheld emotional intimacy. Priestley suggests that the younger generation's moral potential is compromised, though not destroyed, by the older generation's inheritance.

The play's denouement stages the generational conflict as an irreconcilable epistemological crisis. When Birling and Mrs Birling discover that the Inspector may not have been genuine, they experience not merely relief but vindication — if the messenger is discredited, the message can be dismissed. Their celebratory mood is a precise dramatisation of how ideological systems protect themselves: by converting a question of morality into a question of evidence, and by treating the absence of external verification as proof that no moral obligation exists. Sheila's counter-argument — "everything we said had happened really had happened" — articulates a radically different epistemology: moral truth is self-authenticating and does not require institutional endorsement.

The final phone call — announcing a real inspector investigating a real death — is Priestley's most devastating dramatic intervention. It does not resolve the generational conflict but escalates it: the older Birlings are returned to the terror from which they had just escaped, while the younger Birlings are confirmed in their understanding that consequences cannot be evaded through procedural scepticism. For the audience, the phone call functions as a structural warning: the play itself, like the Inspector's visit, may have been a rehearsal — but the real reckoning is still to come.

Priestley's 1945 audience occupies precisely the position he has prepared for them. They have witnessed, through the play's 1912 setting, the consequences of the older generation's philosophy: two world wars, mass unemployment, the Depression. They know, as the audience always knows in this play, what the characters on stage do not yet know. The generational conflict is thus not merely represented on stage but extended into the auditorium: the audience is invited to choose — as the younger Birlings have chosen — between the comfort of denial and the discomfort of responsibility. The play's structural genius is that it makes this choice feel both urgent and available, arguing that the post-war generation stands at a hinge-point in history where the older generation's failures can be acknowledged and transcended, but only if the young are willing to resist the gravitational pull of the values they have inherited.`,
            },
            markScheme: [
              'AO1: Read, understand and respond — use textual references to support interpretation (12 marks)',
              'AO2: Analyse language, form and structure using subject terminology (12 marks)',
              'AO3: Show understanding of context (6 marks)',
              'AO4: SPaG — spelling, punctuation, grammar, vocabulary (4 marks)',
              'Band 5-6: Critical/exploratory response; judicious references; analysis of methods; convincing context',
              'Band 3-4: Clear/explained response; effective references; understanding of methods; clear context',
              'Band 1-2: Simple/emerging response; some references; awareness of methods; some context',
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p2-05-secB',
        title: 'Section B: Poetry Anthology',
        description: 'Answer one question from this section.\n\nPower and Conflict Anthology',
        totalMarks: 30,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-lit-p2-05-q2',
            questionNumber: 2,
            questionText:
              'Compare how poets present ideas about memory and the past in "Ozymandias" by Percy Bysshe Shelley and "Poppies" by Jane Weir.\n\nIn your answer you should consider:\n• the poets\' use of language, form and structure\n• the influence of the contexts in which the poems were written.\n\n[30 marks]',
            marks: 30,
            suggestedTimeMinutes: 45,
            questionType: 'comparison',
            modelAnswers: {
              'Grade 4-5': `Both "Ozymandias" and "Poppies" deal with the past and memory but in very different ways. "Ozymandias" is about how a powerful king from the past has been forgotten, while "Poppies" is about a mother remembering her son who has gone to war.

In "Ozymandias," the past is shown through a ruined statue in the desert. The inscription says "Look on my Works, ye Mighty, and despair!" but there is nothing left — just "lone and level sands." This shows that even the most powerful people will be forgotten. Memory of Ozymandias only survives because of the sculptor who captured his expression.

In "Poppies," the mother remembers personal, intimate details about her son: "smoothed down your collar," "cat hairs," "Sellotape bandaged around his hand." These small memories are very different from Ozymandias's grand inscription. The mother's memories are about love and everyday life, while Ozymandias tried to be remembered through power and fear.

Both poems show that the past doesn't stay the same. Ozymandias wanted to be remembered as powerful but is now just a "colossal Wreck." The mother in "Poppies" has clear, vivid memories but they are mixed with sadness because her son might not come back.

Shelley was a Romantic poet who criticised powerful rulers, while Weir wrote about modern warfare and the personal cost of conflict. Both show that what we remember — and how we remember — matters.`,
              'Grade 6-7': `Shelley and Weir engage with memory and the past from diametrically opposed positions — the monumental and the intimate — yet both poets ultimately reveal the fragility of all attempts to preserve the past, whether through imperial inscription or maternal love.

"Ozymandias" presents the past as something that actively resists preservation. The statue's "shattered visage" and "trunkless legs" are images of deliberate decomposition: time has not merely eroded Ozymandias's monument but dismembered it, reducing imperial ambition to archaeological fragments. The irony of the inscription — "Look on my Works, ye Mighty, and despair!" — depends on the gap between intended and actual meaning: Ozymandias commanded future generations to despair at his greatness, but the "works" have vanished, and the despair the inscription now provokes is existential rather than intimidatory. Memory, Shelley suggests, is unreliable not because it distorts but because it fails — the desert "stretches far away," its blankness an image of historical amnesia.

However, the poem preserves a counter-memory. The sculptor's art — which "well those passions read / Which yet survive, stamped on these lifeless things" — has outlasted the king's political power. The sculptor read Ozymandias's character and "stamped" it in stone, and this act of observation (rather than Ozymandias's own self-aggrandisement) is what survives. Shelley implies that artistic memory — based on truthful observation — is more durable than political memory — based on self-serving propaganda.

"Poppies" constructs memory as a sensory, embodied experience inseparable from the body that remembers. The mother's recollections — "the world overflowing / like a treasure chest," "Sellotape bandaged around his hand" — are not chronological or analytical but associative, triggered by physical sensations and domestic objects. Weir's temporal structure, which collapses past and present into a single continuous moment, mirrors the phenomenology of grief: for the bereaved mother, the son's childhood and his departure are not sequential events but co-present realities, each contaminating the other.

Structurally, the poems embody different relationships to time. "Ozymandias" is framed through multiple temporal layers — the poet, the traveller, the sculptor, Ozymandias — each adding distance from the original moment. "Poppies" resists temporal distance through the second person ("you"), addressing the absent son directly and collapsing the space between past and present. Where Shelley's layers of narration enact historical remoteness, Weir's direct address performs memory's insistence on intimacy.

Both poems suggest that the past is defined less by what it contained than by who is remembering and why. Ozymandias sought to control his legacy through force; the mother cannot control hers at all. Yet the mother's vulnerable, fragmented memories prove more emotionally enduring than Ozymandias's calculated inscription — suggesting that it is precisely the uncontrolled, involuntary quality of personal memory that gives it its power.`,
              'Grade 8-9': `Shelley and Weir construct antithetical but ultimately complementary models of how the past persists — and fails to persist — in human consciousness, each exploring the tension between the desire to preserve and the inevitability of loss.

"Ozymandias" interrogates monumental memory: the deliberate, public attempt to project the self into the future through enduring material inscription. Ozymandias's statue is memory-as-architecture, designed to communicate power across centuries. The poem's devastating irony lies in the fact that the monument has indeed survived, but communicates precisely the opposite of its intended message. The inscription — "Look on my Works, ye Mighty, and despair!" — persists as text, but the referent (the "Works") has been erased by time. What remains is a speech act divorced from its context, a command that now points at emptiness. Shelley suggests that monumental memory is inherently self-undermining: the more emphatically the past insists on its own significance, the more poignant its inevitable failure becomes.

Yet the poem preserves a second, unintended form of memory. The sculptor, whose art "well those passions read / Which yet survive, stamped on these lifeless things," has achieved what Ozymandias could not: a truthful record of character rather than a propagandistic projection of power. The word "survive" is crucial — it is the passions, not the power, that endure, and they endure because the sculptor's observational fidelity was more durable than the king's self-mythologising. Shelley's argument is that authentic memory — memory grounded in truthful perception rather than self-interested construction — is paradoxically more lasting than the deliberate monuments designed to ensure remembrance.

"Poppies" operates in an entirely different register of memory: the involuntary, sensory, bodily memory of a mother whose recollections of her son are triggered by physical proximity and domestic objects. Where Ozymandias's memory is carved in stone, the mother's is embedded in texture — "cat hairs," "Sellotape," the smoothing of a collar. These are not monumental but haptic memories, preserved not in durable materials but in the body's muscle memory and the senses' associative pathways. Weir's temporal structure — fluid, non-linear, collapsing the son's childhood into his departure — mimics the phenomenology of involuntary recall, in which the past does not stay in the past but erupts into the present, triggered by a smell, a texture, a gesture.

The poems construct opposing relationships between memory and power. Ozymandias's memory is an expression of power — an attempt to dominate the future through the sheer material presence of the monument. The mother's memory in "Poppies" is an expression of powerlessness — she cannot prevent her son's departure, cannot guarantee his return, and can only revisit, obsessively, the moments of physical closeness that preceded the separation. Yet Weir implies that it is precisely the mother's lack of control over her memories that gives them their emotional authenticity. The involuntary quality of her recall — memories that arrive unbidden, in disordered sequence, attached to the textures of everyday life — testifies to a relationship that was genuine rather than constructed, lived rather than performed.

The poems' formal choices embody their respective models of memory. Shelley's sonnet, with its layered narration (poet-traveller-sculptor-king), performs the temporal distance that separates the reader from the remembered past. Each narrative frame adds a layer of mediation, suggesting that historical memory is always received memory — always somebody's account of somebody else's account. Weir's free verse, with its enjambments and associative leaps, refuses such mediation: the mother's voice moves directly from sensation to sensation, memory to memory, without the structural ordering that distance provides. If Shelley shows memory filtered through time, Weir shows memory unfiltered by it — still raw, still tactile, still present.

Both poems arrive, through opposite routes, at a shared recognition: that the past cannot be preserved in the form its inhabitants intended. Ozymandias's monument communicates futility rather than power; the mother's vivid memories serve as reminders of absence rather than presence. In both cases, the attempt to hold the past produces an encounter with loss — the loss of empires in Shelley, the loss of a child in Weir. The difference lies in how that loss is valued: Shelley's irony suggests that Ozymandias's loss is deserved (power should not endure); Weir's grief suggests that the mother's loss is unendurable (love should not have to let go). Together, the poems argue that memory is never neutral — it is always shaped by the relationship between the rememberer and the remembered, and its meaning changes depending on whether what was lost was power or love.`,
            },
            markScheme: [
              'AO1: Read, understand and respond — use textual references to support interpretation (12 marks)',
              'AO2: Analyse language, form and structure using subject terminology (12 marks)',
              'AO3: Show understanding of context (6 marks)',
              'Must compare both poems throughout',
              'Band 5-6: Critical comparison with exploratory analysis; convincing context',
              'Band 3-4: Clear comparison with explained analysis; clear context',
              'Band 1-2: Simple comparison with awareness of methods; some context',
            ],
          },
        ],
      },
      {
        id: 'aqa-lit-p2-05-secC',
        title: 'Section C: Unseen Poetry',
        description: 'Answer both questions in this section.',
        totalMarks: 32,
        suggestedTimeMinutes: 40,
        questions: [
          {
            id: 'aqa-lit-p2-05-q3',
            questionNumber: 3,
            questionText:
              'In "Inheritance," how does the poet present the relationship between generations?\n\n[24 marks]',
            marks: 24,
            suggestedTimeMinutes: 30,
            questionType: 'analysis',
            extract: UNSEEN_5A,
            extractSource: 'Original poem — "Inheritance"',
            modelAnswers: {
              'Grade 4-5': `The poet presents the relationship between generations through the idea of what a grandmother passes down to her granddaughter. The title "Inheritance" usually means money or property, but in this poem it means personal qualities and cultural traditions.

The grandmother left the speaker "her hands" which is a metaphor — not literally her hands, but the same kind of hands, "broad palms mapped with creases." The word "mapped" suggests the hands tell a story, like a map shows a journey. These hands "remember how to braid hair, / how to fold pastry, how to pray" — all personal, domestic skills passed down through generations.

The grandmother also left "her stubbornness" and "her habit of singing while cooking" which are personality traits, not physical objects. This shows that inheritance is about character as well as things. The recipes "written in pencil on the backs of envelopes" with measurements like "a handful, a pinch" show an informal, personal kind of knowledge that can't be found in books.

The most powerful image is the accent described as "a country / I have never visited that lives / inside my vowels like a tenant / who will not be evicted." This metaphor shows that the grandmother's culture lives on in the speaker's voice even though the speaker has never been to the country. The word "tenant" suggests the accent has made a home in her voice and refuses to leave.

The poem shows that the relationship between generations is about passing down identity, culture, and love through everyday things, not through money or possessions.`,
              'Grade 6-7': `The poet presents the intergenerational relationship as a process of cultural and physical transmission in which identity is inherited not through deliberate instruction but through proximity, repetition, and embodiment. The poem's governing metaphor — inheritance — is progressively redefined from the legal and material to the bodily, behavioural, and linguistic.

The opening — "My grandmother left me her hands" — performs this redefinition immediately. The verb "left" carries testamentary connotations (as in a will), but the bequest is physical and genetic rather than legal. The hands are "mapped with creases" — a cartographic metaphor that transforms the grandmother's body into a readable landscape, suggesting that lived experience inscribes itself physically and can be "read" by subsequent generations. The hands "remember" — the verb conferring an autonomous memory on the body itself, independent of conscious recall.

The second stanza shifts from body to personality, cataloguing inherited traits with a specificity that insists on individuality. "Her stubbornness" and "her habit of singing while cooking" are not grand cultural practices but idiosyncratic personal characteristics, suggesting that inheritance operates at the level of the particular rather than the general. "Her refusal to sit in the front pew" introduces a note of quiet nonconformity that the speaker has also inherited — rebellion transmitted through domestic example rather than political instruction.

The recipes in the biscuit tin constitute the poem's most resonant image of intergenerational transmission. Written "in pencil on the backs of envelopes" — impermanent materials, borrowed surfaces — they embody a form of knowledge that exists outside institutional frameworks. The measurements — "a handful, a pinch, / a bit more if the day is cold" — are subjective, embodied, and contextual, requiring not literacy but physical intuition. They can only be fully understood by a body that has learned, through practice and proximity, the grandmother's particular sense of proportion.

The final stanza's central metaphor — the accent as "a country / I have never visited that lives / inside my vowels like a tenant / who will not be evicted" — operates on multiple levels. It figures cultural inheritance as spatial (a country), linguistic (vowels), and legal (tenant, evicted). The speaker carries an origin she has never experienced firsthand, and this origin is not a memory but a presence — it inhabits her voice, shaping her speech from within. The legal metaphor of tenancy is particularly effective: a tenant occupies a space that belongs to someone else, suggesting that the speaker's voice is a dwelling shared between her own identity and her grandmother's cultural legacy — a cohabitation that is permanent, involuntary, and ultimately defining.`,
              'Grade 8-9': `The poem constructs intergenerational inheritance as a process of embodied cultural transmission that operates below the threshold of conscious choice, progressively redefining "inheritance" from a legal and material concept to a phenomenological one in which identity is not received but physically inhabited.

The opening line — "My grandmother left me her hands" — establishes the poem's governing strategy: the literal and the figurative are held in permanent, generative suspension. "Left" carries the weight of testamentary language, but the bequest — "her hands" — is simultaneously metaphorical (the grandmother passed down hands of a similar shape and capacity) and uncannily literal (the speaker experiences her own hands as her grandmother's, transplanted across generations). This refusal to resolve into either pure metaphor or pure description is the poem's central technical achievement: it insists that physical inheritance is metaphorical (the hands signify continuity) and that metaphorical inheritance is physical (cultural identity literally shapes the body).

The hands' autonomous memory — "fingers that remember how to braid hair, / how to fold pastry, how to pray" — introduces the concept of embodied knowledge: skills that reside not in the mind but in the musculature, transmitted through repetition and proximity rather than instruction. The tricolon moves from the domestic (braiding, pastry) to the spiritual (prayer), suggesting that the grandmother's inheritance encompasses not merely practical skill but an entire orientation toward the world — a way of being that includes physical gesture, culinary tradition, and metaphysical practice as interconnected elements of a single cultural grammar.

The recipes stanza crystallises the poem's epistemological argument. Knowledge recorded "in pencil on the backs of envelopes" exists outside institutional preservation — it is impermanent, informal, and personal. The measurements — "a handful, a pinch, / a bit more if the day is cold" — are irreducibly subjective: they cannot be converted into standardised units because they are calibrated not to universal scales but to a specific body's sense of proportion and a specific sensibility's response to context. "A bit more if the day is cold" is particularly striking: it implies a knowledge system in which cooking is responsive to atmospheric conditions, in which the boundary between self and environment is permeable, in which the appropriate amount of an ingredient is determined not by measurement but by a felt sense of what the moment requires. This is knowledge that cannot be transmitted through text alone — it requires the physical co-presence of teacher and learner, body and body.

The final stanza's extended metaphor — the accent as "a country / I have never visited that lives / inside my vowels like a tenant / who will not be evicted" — is the poem's most formally ambitious and thematically decisive image. The metaphor layers three conceptual domains: geography (country), linguistics (vowels), and property law (tenant, evicted). The grandmother's accent — and by extension her entire cultural identity — is figured as a place that exists within the speaker's body, a country she carries in her voice without ever having set foot on its soil. The legal metaphor of tenancy introduces a productive ambiguity: a tenant occupies a space by arrangement, not by ownership, yet this particular tenant "will not be evicted" — the cultural inheritance has become permanent, resistant to the speaker's conscious control or any external force of assimilation.

The word "evicted" is loaded with additional connotations: forced removal, displacement, the violence of being cast out of a place one considers home. By using this word to describe the hypothetical removal of the accent, the poet implies that to lose the grandmother's cultural imprint would be an act of violence against the self — that the inherited accent is not merely a feature of the speaker's identity but its foundation, the ground on which all subsequent identity-construction stands. The relationship between generations, the poem ultimately argues, is not one of voluntary transmission but of involuntary inhabitation: the grandmother does not merely influence the speaker but lives within her, a permanent presence that shapes speech, gesture, and perception from the inside.`,
            },
            markScheme: [
              'AO1: Read, understand and respond — use textual references to support interpretation (12 marks)',
              'AO2: Analyse language, form and structure using subject terminology (12 marks)',
              'Band 5-6: Critical, exploratory response; judicious references; integrated analysis of methods',
              'Band 3-4: Clear, explained response; effective references; clear understanding of methods',
              'Band 1-2: Simple response; some references; awareness of methods',
            ],
          },
          {
            id: 'aqa-lit-p2-05-q4',
            questionNumber: 4,
            questionText:
              'In both "Inheritance" and "Dowry," the speakers describe what has been passed down by a female relative. What are the similarities and/or differences between the ways the poets present this?\n\n[8 marks]',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'comparison',
            extract: UNSEEN_5B,
            extractSource: 'Original poem — "Dowry"',
            modelAnswers: {
              'Grade 4-5': `Both poems describe things passed down from older female relatives, but the tone is very different. "Inheritance" is warm and celebratory — the grandmother's gifts (hands, stubbornness, recipes) are valued and loved. "Dowry" is more sad and mysterious — the mother brought "a cooking pot, / a photograph of people I would never meet, / and a silence she would not explain."

In "Inheritance," the speaker knows and understands what was passed down. In "Dowry," the mother's silence is the main inheritance, and nobody understands it. Both poems use objects as symbols — recipes and the accent in "Inheritance," the cooking pot and photograph in "Dowry." But "Inheritance" shows connection while "Dowry" shows distance and things left unsaid.`,
              'Grade 6-7': `Both poems explore female-line cultural transmission through material objects, but construct opposed emotional landscapes. "Inheritance" presents transmission as enrichment: the grandmother's bequests — hands, recipes, accent — are gifts that deepen the speaker's identity. "Dowry" presents transmission as burden: the mother's three objects — "a cooking pot, / a photograph of people I would never meet, / and a silence she would not explain" — are marked by loss, opacity, and unresolved grief.

The poems differ crucially in what accompanies the material inheritance. "Inheritance" transmits knowledge and personality alongside objects — the recipes come with the grandmother's intuitive measurements, the hands come with embodied skills. "Dowry" transmits silence: the cooking pot sits "out of place / between the microwave and the kettle / like a word from another language," a simile that figures cultural dislocation as linguistic incomprehension. Where "Inheritance" celebrates cultural continuity, "Dowry" mourns cultural rupture.

The treatment of silence also diverges. "Inheritance" locates cultural presence in the grandmother's accent — sound as inheritance. "Dowry" locates cultural inheritance in the mother's silence — absence as inheritance. The final image of silence distributed "like a dish no one remembers ordering" is grimly domestic: it transforms unspoken grief into a shared family meal, a communal inheritance that nourishes no one but cannot be refused.`,
              'Grade 8-9': `Both poems anatomise female-line cultural transmission, but they construct opposed models of what it means to inherit. "Inheritance" presents the grandmother's legacy as a form of plenitude — each bequest (hands, personality, recipes, accent) adds a layer of identity, thickening the speaker's selfhood through accumulation. "Dowry" presents the mother's legacy as a form of absence — its three objects are defined less by what they are than by what is missing: the people in the photograph whom the speaker "would never meet," the silence the mother "would not explain."

The poems' treatment of cultural objects reveals this distinction with particular precision. "Inheritance" embeds its objects in living practice — the recipes are used, the hands perform remembered tasks. "Dowry's" objects are arrested: the cooking pot sits on a shelf, "dented, blackened, out of place / between the microwave and the kettle," a material remnant severed from the cultural context that gave it meaning. The simile "like a word from another language" figures this dislocation linguistically, suggesting that the pot signifies something the speaker lacks the cultural vocabulary to decode. Where "Inheritance" describes an accent that persists involuntarily — cultural presence — "Dowry" describes objects that persist without explanation — cultural presence drained of meaning.

The poems' most profound divergence lies in their closing images. "Inheritance" ends with the accent as an un-evictable tenant — cultural identity as permanent, embodied, resistant to erasure. "Dowry" ends with silence passed around the table "like a dish no one remembers ordering" — cultural inheritance as unwilled, unexplained, and collectively consumed without comprehension. Together, they illuminate two faces of diasporic experience: the grandmother's legacy enriches because it is accompanied by voice, story, and embodied knowledge; the mother's legacy haunts because it is accompanied by silence, severed from the narrative that would make it intelligible.`,
            },
            markScheme: [
              'AO2: Analyse language, form and structure using subject terminology (8 marks)',
              'Must compare: identify similarities AND/OR differences',
              'Band 3-4 (7-8 marks): Exploratory comparison with well-chosen references',
              'Band 2-3 (4-6 marks): Clear comparison with relevant references',
              'Band 1 (1-3 marks): Simple comparison with some references',
            ],
          },
        ],
      },
    ],
  },
]
