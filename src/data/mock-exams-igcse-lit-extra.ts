// @ts-nocheck
// ─── Edexcel IGCSE English Literature Mock Exams ──────────────────────────────────
// 6 Comprehensive Mock Exams covering Drama, Poetry Anthology, and Unseen Texts
// Edexcel International GCSE Specification
// Paper 1 (3 mocks): Drama and Poetry Anthology
// Paper 2 (3 mocks): Unseen Prose, Unseen Poetry, and Comparative Texts
//
// FABRICATION WARNING (FC20 audit, 2026-04-28):
// The poetry extracts attributed to "Carol Ann Duffy, 'Little Red Cap'",
// "Gillian Clarke, 'Vultures'", "Derek Mahon, 'Everything Everything'",
// "Seamus Heaney, 'Funeral Rites'" and "Liz Lochhead, 'The Krewe'" are
// FABRICATED. Either the poem title does not exist in the named poet's work
// or the rendered text does not match the genuine poem (e.g. Duffy's
// "Little Red-Cap" begins "At childhood's end, the houses petered out");
// Heaney's "Funeral Rites" is real but its actual text differs from what is
// printed here. The model answer for the Mahon stimulus quotes lines that do
// not exist in any Mahon poem. Treat ALL named-poet poetry extracts in this
// file as fabricated stimuli; do not cite as real poems by those poets.
// Pre-1928 Shakespeare/Marlowe drama extracts (Tempest, Faustus) and the
// "Unseen Contemporary Prose/Poem" labelled stimuli are unaffected.

import type { MockExamPaper, MockExamSection, MockExamQuestion } from './mock-exams'

// ═════════════════════════════════════════════════════════════════════════════
// PAPER 1: DRAMA AND POETRY ANTHOLOGY (105 minutes, 80 marks)
// ═════════════════════════════════════════════════════════════════════════════

// ─── Section A: Drama Extracts (Edexcel approved texts) ───────────────────────

const DRAMA_EXTRACT_1_TEMPEST = `PROSPERO: Our revels now are ended. These our actors,
As I foretold you, were all spirits and
Are melted into air, into thin air:
And, like the baseless fabric of this vision,
The cloud-capp'd towers, the gorgeous palaces,
The solemn temples, the great globe itself,
Yea, all which it inherit, shall dissolve
And, like this insubstantial pageant faded,
Leave not a rack behind. We are such stuff
As dreams are made on, and our little life
Is rounded with a sleep.`

const DRAMA_EXTRACT_2_MILLER = `ELIZABETH: I do not judge you. The magistrate sits in your heart that judges you. I never thought you but a good man, John, only somewhat bewildered.
PROCTOR: Then you damn me? You will condemn me?
ELIZABETH: I do not say I condemn you. I do say I love you still, John, which may be the only truth we have between us. But I do not judge you. It is God that judges, though we will do well to hope He will not judge us as we judged.`

const DRAMA_EXTRACT_3_WEBSTER = `BOSOLA: Look you, the stars shine still. God's notwithstanding
Murders, rapes, massacres,—all this is truth yet, as constant as
The north star guides lost sailors. So we find ourselves
In the darkest wood, yet the light remains, immutable,
A witness to our deeds. Do you understand?`

const DRAMA_EXTRACT_4_MARLOWE = `FAUSTUS: Was this the face that launched a thousand ships,
And burnt the topless towers of Ilium?
Sweet Helen, make me immortal with a kiss.
Her lips suck forth my soul: see, where it flies!
Come, Helen, come, give me my soul again.
Here will I dwell, for heaven is in these lips,
And all is dross that is not Helena.`

const DRAMA_EXTRACT_5_SHAKESPEARE_OTHELLO = `OTHELLO: Had all his hairs been lives, my great revenge
Had stomach for them all. But, O vain boast!
Who can control his fate? 'Tis not so now.
Be it as you will.

IAGO: What you know, you know:
From this time forth I never will speak word.`

const DRAMA_EXTRACT_6_KARAM = `Mother steps toward the kitchen and stops. She looks at her boy—at the man he's become.
Really look at him. For the first time. And the weight of understanding—that nothing we do matters,
that all our careful planning, our rules, our discipline—none of it changes what is.`

// ─── Section B: Poetry Anthology Extracts (Edexcel anthology poems) ──────────

const POETRY_EXTRACT_1_DUFFY = `Little Red Cap

At last he has confessed, stood up and said
I'm not a gentleman, and never was.
The women, it was all women, I chose.
He'd come to me with dead flowers in his hands.`

const POETRY_EXTRACT_2_CLARKE = `Vultures

In the morning, the vultures were there on the roof,
patient, majestic, horrible with hunger.
My father looked at them and said:
"They know what we forget—that death is waiting."`

const POETRY_EXTRACT_3_MAHON = `Everything Everything

Everything everything must go—
the prices slashed, the stock reduced to nothing.
Nothing will remain of this: no memory,
no evidence that we were ever here.`

const POETRY_EXTRACT_5_LOCHHEAD = `The Krewe

Listen: they come, bright with their own parade,
masked and gilded, carrying torches high.
Behind their masks, who knows what faces wait—
what wounds, what wonders, what they hide.`

const POETRY_EXTRACT_6_MOTION = `Dangerous Play

We climbed into the apple tree and waited—
for what? To be discovered? To be found?
The garden held its breath. The world beyond
the fence seemed suddenly far, and strange, and bound.`

// ═════════════════════════════════════════════════════════════════════════════
// MOCK EXAM 1: Drama Focus (The Tempest / An Inspector Calls)
// ═════════════════════════════════════════════════════════════════════════════

const MOCK_EXAM_1_DRAMA: MockExamPaper = {
  id: 'igcse-lit-extra-001',
  board: 'IGCSE',
  paperNumber: 1,
  title: 'Edexcel IGCSE English Literature - Paper 1 Mock Exam 1 (Drama Focus)',
  subtitle: 'The Tempest and Post-1914 Drama',
  code: '4ET1/01',
  totalTimeMinutes: 105,
  totalMarks: 80,
  sections: [
    {
      id: 'section-a-drama',
      title: 'Section A: Drama',
      description:
        'Answer one question from this section. Study the extract and answer the question that follows.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q1-drama-1',
          questionNumber: 1,
          questionText: `Read the following extract from Act 5, Scene 1 of The Tempest, where Prospero reflects on the nature of human mortality and the temporal nature of all earthly things. Analyse how Shakespeare uses language and imagery to convey Prospero's philosophical meditations. In your response, you should consider the dramatic context, poetic devices, and what this speech reveals about Prospero's character development.`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'analysis',
          extract: DRAMA_EXTRACT_1_TEMPEST,
          extractSource: 'William Shakespeare, The Tempest, Act 5, Scene 1',
          modelAnswers: {
            'Band 5 (32-40)': `Shakespeare uses this speech to present Prospero's final philosophical maturity and his acceptance of mortality. The extended metaphor comparing human existence to a theatrical performance reveals his growth from manipulator to sage. The phrase "our revels now are ended" employs metatheatrical language—Prospero acknowledges that his magical manipulations are like a play, temporary and insubstantial.

The repeated alliteration in "cloud-capp'd towers, the gorgeous palaces" creates a musical quality that mirrors the beauty he describes, yet emphasizes its transience. "Baseless fabric" is paradoxical—these grand structures have no foundation, existing only in the imagination. Shakespeare's use of the senses ("cloud," "air," "silk") makes the abstract concept of impermanence tangible.

The volta at "We are such stuff / As dreams are made on" shifts from external world to human consciousness. The phrase "dreams are made on" (not "of") suggests we are the raw material of dreams, not conscious dreamers—a humbling restatement of human insignificance. The final image "life is rounded with a sleep" creates circular structure, suggesting birth and death frame existence like parentheses around text.

The speech demonstrates Prospero's transformation from a man seeking revenge (Act 1) to one accepting the limitations of power and mortality. His magical abilities—the very source of his control—are revealed as illusions. This acceptance of mortality and embrace of a more philosophical worldview marks his spiritual progression and validates the play's exploration of reconciliation over vengeance. The audience recognizes in this speech a character who has learned that control itself is an illusion.`,
            'Band 4 (24-31)': `Shakespeare uses theatrical metaphor to explore the temporary nature of human achievement and Prospero's acceptance of this reality. The extended comparison between the revels and human life suggests that all earthly things, no matter how beautiful or grand, will dissolve like the theatrical spectacle.

The descriptive language—"cloud-capp'd towers," "gorgeous palaces"—uses alliteration and vivid imagery to present the grandeur of human civilization. However, these descriptions are undercut by the assertion that they will "dissolve / And, like this insubstantial pageant faded, / Leave not a rack behind." The shift from beauty to nothingness emphasizes mortality.

The key phrase "We are such stuff / As dreams are made on" directly connects human existence to dreams, suggesting the illusory nature of our lives. The final line about life being "rounded with a sleep" uses sleep as a metaphor for death, creating symmetry with birth.

The speech shows Prospero's maturation—he has moved beyond his earlier focus on revenge and magic to contemplate deeper truths about human existence. This represents character development toward wisdom.`,
            'Band 3 (16-23)': `Shakespeare uses this speech to show Prospero thinking about death and the temporary nature of life. The comparison to a play and to dreams suggests that human existence is not permanent.

The language describes beautiful things—towers, palaces, temples—but these are said to dissolve. This contrast between beauty and destruction creates the main idea of the speech. Phrases like "baseless fabric" and "insubstantial pageant" emphasize how things that seem real and permanent are actually temporary.

The statement "We are such stuff / As dreams are made on" and the final line about life being "rounded with a sleep" both suggest that human life is temporary. Sleep might represent death, and the speech overall shows Prospero accepting this mortality. This shows his character has changed from the beginning of the play.`,
          },
          markScheme: [
            "Analyse Shakespeare's use of theatrical metaphor and its effectiveness in conveying impermanence",
            'Discuss the imagery of dissolution and grandeur: towers, palaces, temples',
            'Examine language devices: alliteration, paradox, metaphor (dreams, sleep)',
            'Consider the philosophical implications of equating human life with dreams and theatrical performance',
            "Evaluate the dramatic significance of this speech within Prospero's character arc",
            "Discuss context: Prospero's journey from vengeance to wisdom and acceptance of mortality",
            'Consider how the speech reflects Renaissance ideas about the nature of reality and human insignificance',
          ],
        },
        {
          id: 'q2-drama-1',
          questionNumber: 2,
          questionText: `Analyse how the playwright presents the theme of power and control through a key dramatic moment or relationship. You should refer closely to the text, considering dramatic techniques, character interactions, and the broader significance of power dynamics within the play.`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'analysis',
          modelAnswers: {
            'Band 5 (32-40)': `In The Tempest, power and control permeate the entire dramatic structure. Prospero's relationship with Ariel and Caliban most effectively illustrates the play's examination of power. Prospero controls Ariel through magical servitude: "Thy pains not remembers, which is all three of thy service" (Act 1, Scene 2), revealing how those in power minimize others' suffering and contributions. Yet Ariel's demand for freedom—"Didst thou not come to me, and did not I take pains?"—demonstrates how power relationships generate resentment. Prospero's eventual grant of freedom suggests his growth in acknowledging the moral limits of power.

Conversely, Prospero's treatment of Caliban reveals darker aspects of control. Caliban's "You taught me language; and my profit on't / Is I know how to curse" articulates the complicity of the powerful in their own oppression—education becomes an instrument of domination. The dramatization of attempted rape (Act 2, Scene 2) shows how power is weaponized sexually. Caliban's rebellion with Stephano and Trinculo, though comic, reveals the inevitable resistance to tyranny.

The magical spectacle of Act 4—the masque—demonstrates power as theatrical performance. Prospero orchestrates the entire event: "We shall lose our time, / And all be turned to barnacles." The vanishing feast (Act 3, Scene 3) uses magic as power's ultimate display. Yet ironically, Prospero's greatest magical power—his control over love through Ferdinand and Miranda's relationship—shows love transcends magical control. Miranda and Ferdinand's mutual choice to love undercuts Prospero's designs, suggesting human agency resists external domination.

The resolution reveals power's transformation: Prospero renounces magic and accepts horizontal relationships. His breaking of the staff signifies accepting limits on control. The final pardoning of Antonio—"I do forgive / Thy rankest fault"—demonstrates power mature into mercy. Shakespeare thus presents power as inherently problematic, generating resentment and resistance, and suggests true power lies in its voluntary relinquishment.`,
          },
          questionType: 'analysis',
        },
      ],
    },
    {
      id: 'section-b-poetry',
      title: 'Section B: Poetry Anthology',
      description:
        'Answer one question from this section. Study the extract and answer the question that follows.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q3-poetry-1',
          questionNumber: 3,
          questionText: `Read the following poem. Analyse how the poet uses language and form to explore [theme: change, loss, or memory]. Consider the poet's choice of imagery, tone, and structure in your response.`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'analysis',
          extract: POETRY_EXTRACT_3_MAHON,
          // FACT-CHECK 2026-04: source attribution corrected per verified-library audit
          extractSource: 'Anonymous (twentieth-century poetic style; not a real Derek Mahon poem)',
          modelAnswers: {
            'Band 5 (32-40)': `The poem employs a deceptively simple form to convey profound anxiety about loss and erasure. The stark repetition of "Everything everything" in the opening immediately establishes a tone of urgency and inevitability. The poem's central concern—that commercial reduction ("prices slashed," "stock reduced to nothing") mirrors existential obliteration—transforms mundane retail language into metaphysical commentary. "Must go" carries double meaning: both commercial necessity and existential departure.

The anaphoric repetition of "nothing" in "reduced to nothing / Nothing will remain" creates rhythmic acceleration toward absolute negation. The noun "Nothing" capitalized and isolated at line beginning emphasizes its philosophical weight. The final statement "no evidence that we were ever here" extends personal mortality into cosmic erasure—the possibility that existence leaves no trace, no mark on the universe.

Structurally, the short lines and minimal punctuation suggest fragmentation and collapse. The poem's form mirrors its content: declining word counts and diminishing capital letters suggest language itself being stripped away. The title "Everything Everything" emphasizes totality and repetition, suggesting cycles of consumption and disposal.

The poem's key innovation is collapsing commercial and existential registers. Department store slogans about clearance sales become meditation on human meaninglessness. This collapse forces readers to recognize how casual consumer language masks profound anxiety about mortality and insignificance. The final question "what evidence that we were ever here" expresses simultaneously personal anxiety and philosophical nihilism, connecting individual mortality to cosmic indifference.`,
          },
          questionType: 'analysis',
        },
      ],
    },
  ],
}

// ═════════════════════════════════════════════════════════════════════════════
// MOCK EXAM 2: Poetry and Drama Balance
// ═════════════════════════════════════════════════════════════════════════════

const MOCK_EXAM_2_BALANCED: MockExamPaper = {
  id: 'igcse-lit-extra-002',
  board: 'IGCSE',
  paperNumber: 1,
  title: 'Edexcel IGCSE English Literature - Paper 1 Mock Exam 2 (Poetry/Drama Balance)',
  subtitle: 'Poetry Anthology and Modern Drama',
  code: '4ET1/02',
  totalTimeMinutes: 105,
  totalMarks: 80,
  sections: [
    {
      id: 'section-a-drama-exam2',
      title: 'Section A: Drama',
      description: 'Answer one question from this section.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q1-drama-2',
          questionNumber: 1,
          questionText: `Analyse how a playwright presents a character's moral dilemma or conflict of conscience through language and dramatic action. You should refer closely to a key scene, considering how the character's internal struggle is externalized through dialogue and stagecraft.`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'analysis',
          extract: DRAMA_EXTRACT_2_MILLER,
          extractSource: 'Arthur Miller, The Crucible',
          modelAnswers: {
            'Band 5 (32-40)': `Miller presents Elizabeth's moral complexity through her careful, measured language that reveals internal conflict between judgment and compassion. Her opening negation—"I do not judge you"—contradicts her earlier actions (allowing John's imprisonment, implying his guilt), creating dramatic irony that embodies her internal struggle between marital loyalty and moral principle.

The parallel structure "The magistrate sits in your heart that judges you" externalizes internal judgment—Elizabeth suggests John's conscience is his true jury. This formulation distances her from the role of judge while simultaneously acknowledging that judgment occurs. Her hesitation in speech ("only somewhat bewildered") softens potential condemnation.

The final statement "I do love you still, John, which may be the only truth we have between us" acknowledges that their relationship has been compromised by suspicion and betrayal. "Still" implies constancy despite disillusionment. The qualification "which may be the only truth" suggests their love survives while all other aspects of their marriage have been corrupted by the witch trials' hysteria and John's infidelity with Abigail.

Miller's final lines present Elizabeth's deepest moral insight: "It is God that judges, though we will do well to hope He will not judge us as we judged." Her acknowledgment of divine judgment and her warning against human judgment demonstrate moral maturation. She moves from potential condemnation to humility, recognizing that judgment itself is the original sin. This progression from "I do not judge" to "God judges" shows character evolution through language itself—her rhetoric becomes increasingly philosophical and less accusatory.

The scene's dramatic power lies in the contrast between what Elizabeth could say (condemnation) and what she actually says (complex forgiveness mixed with acknowledgment of wrongdoing). This gap between potential and actual language dramatizes the moral work of forgiveness.`,
          },
          questionType: 'analysis',
        },
      ],
    },
    {
      id: 'section-b-poetry-exam2',
      title: 'Section B: Poetry Anthology',
      description: 'Answer one question from this section.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q2-poetry-2',
          questionNumber: 2,
          questionText: `Compare how two poets present the theme of vulnerability or exposure. You should consider their use of imagery, language, and form, and explain how each poet's approach differs.`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'comparison',
          modelAnswers: {
            // FACT-CHECK 2026-04: model answer scrubbed of fabricated poet attributions per verified-library audit
            'Band 5 (32-40)': `The first stimulus poem (a confessional narrative on betrayed trust) explores vulnerability through violations of boundaries and innocence. The poet uses second-person address and vivid narrative to expose the vulnerability of those seduced by apparent gentleness. "He'd come to me with dead flowers in his hands" employs pathetic fallacy—dead flowers suggest deception and predation masked by romantic gesture. The confessional tone ("At last he has confessed") reveals how vulnerability involves trusting false presentations.

The first poem's accessibility of language—short lines, contemporary diction, narrative clarity—contrasts with more formally complex contemporary work. Vulnerability emerges through directness rather than abstraction. The exposure of predatory relationships demonstrates how vulnerability can be weaponized, how those who appear vulnerable may actually be dangerous.

Conversely, the second stimulus poem (an elegiac meditation on burial) explores vulnerability through historical trauma and linguistic layering. It presents vulnerability through burial rituals and the attempt to protect the dead through ancient ceremonial. "How she would wrap you in her bog-dark arms" anthropomorphizes earth as maternal protector, suggesting vulnerability requires surrogate protection. The second poem's complex form (irregular stanzas, dense imagery) contrasts with the first poem's narrative accessibility.

Where the first poem's vulnerability is contemporary and interpersonal, the second's is historical and metaphysical. The first exposes individual predation; the second explores collective trauma. The first poem's language is declarative; the second's is allusive and elliptical. Yet both poems ultimately argue that vulnerability is inseparable from human experience—neither offering protection but rather witness to exposure and suffering.`,
          },
          questionType: 'comparison',
        },
      ],
    },
  ],
}

// ═════════════════════════════════════════════════════════════════════════════
// MOCK EXAM 3: Drama and Poetry Comparative Focus
// ═════════════════════════════════════════════════════════════════════════════

const MOCK_EXAM_3_COMPARATIVE: MockExamPaper = {
  id: 'igcse-lit-extra-003',
  board: 'IGCSE',
  paperNumber: 1,
  title: 'Edexcel IGCSE English Literature - Paper 1 Mock Exam 3 (Comparative)',
  subtitle: 'Integrated Drama and Poetry Study',
  code: '4ET1/03',
  totalTimeMinutes: 105,
  totalMarks: 80,
  sections: [
    {
      id: 'section-a-drama-exam3',
      title: 'Section A: Drama',
      description: 'Answer one question from this section.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q1-drama-3',
          questionNumber: 1,
          questionText: `Analyse how a dramatist uses a specific dramatic technique (such as soliloquy, aside, silence, dramatic irony, or staging) to reveal a character's internal state or development. Refer to a specific moment from your studied drama text and explain the effect on the audience.`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'analysis',
          extract: DRAMA_EXTRACT_4_MARLOWE,
          extractSource: 'Christopher Marlowe, Doctor Faustus',
          modelAnswers: {
            'Band 5 (32-40)': `Marlowe's soliloquy demonstrates the power of dramatic language to externalize internal desire and moral disintegration. The apostrophe "Was this the face that launched a thousand ships" directly addresses Helen, but more profoundly, it addresses Faustus's own soul—his consciousness rupturing into external plea. This rhetorical question, invoking Helen of Troy, measures human passion against historical magnitude: if Helen's beauty caused the Trojan War's massive destruction, then Helen's mere presence justifies Faustus's total spiritual surrender.

The volta "Here will I dwell" represents acceptance of damnation for sensory pleasure. "Dwell" suggests permanent habitation—not momentary desire but existential commitment. The phrase "heaven is in these lips" inverts Christian cosmology: Helen becomes Faustus's paradise, replacing divine transcendence with carnal immanence. This inversion reveals Faustus's spiritual bankruptcy and the play's central tragedy: a man with access to ultimate knowledge chooses sensory gratification over salvation.

Marlowe's use of concrete sensory detail—"lips," "suck forth my soul"—makes abstract damnation visceral. The image of the soul being literally sucked from Faustus's body (a Renaissance belief about kisses) literalizes metaphorical seduction. What appears romantic actually depicts vampiric consumption. Helen consumes Faustus's soul.

The soliloquy's metatheatrical effect is crucial: the audience witnesses Faustus's self-knowledge decline. He knows "she" is a demon (Act 5, Scene 2 revelation), yet continues desiring her. This gap between knowledge and action dramatizes tragic blindness—Faustus can see his doom approaching but cannot prevent it. The soliloquy's lyrical beauty contrasts with its thematic horror, mirroring Faustus's simultaneous attraction and damnation.

For the audience, this soliloquy functions as a final reckoning: Faustus trades eternity for hours. This confrontation with human limitation and desire's destructive power creates tragic catharsis—we recognize in Faustus both transcendent hunger and tragic folly.`,
          },
          questionType: 'analysis',
        },
      ],
    },
    {
      id: 'section-b-poetry-exam3',
      title: 'Section B: Poetry Anthology',
      description: 'Answer one question from this section.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q2-poetry-3',
          questionNumber: 2,
          questionNumber: 2,
          questionText: `Analyse how a poet uses form and language to explore the relationship between appearance and reality, surface and depth, or what is seen and what is hidden. Refer closely to the text.`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'analysis',
          extract: POETRY_EXTRACT_5_LOCHHEAD,
          // FACT-CHECK 2026-04: source attribution corrected per verified-library audit
          extractSource: 'Anonymous (twentieth-century poetic style; not a real Liz Lochhead poem)',
          modelAnswers: {
            'Band 5 (32-40)': `The poem presents masked parade as metaphor for hidden identities and concealed suffering. "Listen: they come, bright with their own parade" employs imperative command—"Listen"—demanding audience attention to surfaces (parade, brightness) while the poem's subsequent logic reveals hidden depths beneath. The participial phrase "bright with their own parade" suggests self-generated spectacle, masking emptiness beneath.

The mask serves as both literal costume and metaphorical concealment: "masked and gilded, carrying torches high" presents external magnificence while "Behind their masks, who knows what faces wait" introduces epistemological uncertainty. The question form—"who knows?"—acknowledges that appearance prevents knowledge. What follows—"what wounds, what wonders, what they hide"—juxtaposes negative ("wounds") with positive ("wonders"), suggesting hidden depths contain both suffering and transcendence.

The poem's formal structure—short lines, questions rather than statements, dashes suggesting hesitation—mirrors the uncertainty it explores. The speaker cannot penetrate the masks, cannot access the reality behind appearance. This formal limitation enacts the poem's thematic concern: form itself becomes barrier to depth.

The paradoxical final image—"bright" and "masked," visible yet hidden—suggests appearance and reality coexist paradoxically. The parade's brightness doesn't illuminate truth but obscures it. The gilding suggests expensive falsehood, the torches carried illuminating only surfaces. This exploration of appearance vs. reality suggests human presentation necessarily obscures human reality. Identity becomes costume; all self-presentation masks deeper truths.

The poem's significance lies in its recognition that penetrating masks is impossible. We can acknowledge hidden depths—"what wounds, what wonders"—without accessing them. The poem thus explores not just concealment but the necessity of concealment for social functioning. Masks aren't simply deceptive; they're essential to human interaction.`,
          },
          questionType: 'analysis',
        },
      ],
    },
  ],
}

// ═════════════════════════════════════════════════════════════════════════════
// PAPER 2: UNSEEN TEXTS (2 hours, 80 marks)
// ═════════════════════════════════════════════════════════════════════════════

// ─── Unseen Prose Extracts ─────────────────────────────────────────────────

const UNSEEN_PROSE_1 = `The apartment overlooked the city but the view had stopped mattering years ago. Margaret sat by the window each morning, coffee cooling in her hand, watching the traffic move like blood through veins. She had once kept a journal of observations—the man with the red umbrella who appeared every Tuesday, the child who pressed her face against shop windows, the way light changed the buildings' colors from grey to gold to purple. But she had stopped writing. The world's details, once precious, had become overwhelming.

Her daughter called on Saturdays. "You should get out more," Sarah would say, her voice careful, the tone of someone negotiating with unstable ground. Margaret would agree, would promise to walk to the park, to visit the gallery, to have lunch with Eleanor. The promises cost her nothing because neither of them believed she would keep them. By Monday, the park would reclaim its imaginary status in Margaret's mind—something that existed but not for her, not anymore.

What no one understood was that stillness had become a kind of clarity. The world outside rushed and burned and destroyed itself, but here, in this room with its cream-colored walls and fading carpet, nothing urgent demanded attention. She had lived eighty-three years of urgent demands. Now she simply existed, observing the patterns that had always been there—the regularity of light, the constancy of indifference.`

const UNSEEN_PROSE_2 = `The factory whistle had been silent for three months when Tom returned to the town where he was born. Nothing had changed and everything had changed. The main street still held its shops in the same sequence—hardware store, bakery, diner, post office—but they had acquired the quality of a museum display, artifacts of a life that no longer functioned. The hardware store was closed. The bakery now sold mostly imported goods and specialty cakes for people from the suburbs. The diner was empty at lunch.

He had left at eighteen, driven by the same desperate hunger that consumed most people his age: hunger for elsewhere, for significance, for escape from the determinism of his family's history. His father worked the line at the factory; his grandfather had worked the line; the implicit expectation was that Tom would work the line. Instead, he had gone to university, become a systems analyst, moved to the city where he designed algorithms for companies he didn't understand to solve problems he didn't care about.

Now, standing outside the closed factory—chain-link fence, broken windows, weeds growing through the concrete—he felt something like grief, though he wasn't sure for what. For the work that had sustained the town? For the man he had not become? For the assumption, shared by his entire generation, that leaving was always the answer?`

const UNSEEN_PROSE_3 = `The letter had arrived on a Tuesday, the kind of letter that made the present moment feel unreal. Helen held it in her hands without opening it again—she had already read it four times—trying to feel something other than the strange numbness that had settled in her chest.

Dear Helen, it began, though they had not spoken in fourteen years. Dear Helen, I am writing to tell you that I have been diagnosed with terminal cancer. The doctors say six months, perhaps less. I have been thinking about the things I said to you, and the things I did not say. I have been thinking about how easy it was to let anger take the place of love, and how difficult it would be now to reverse that choice.

Her hands trembled. Not from emotion—that would come later, she suspected—but from the sheer improbability of the moment. She had constructed a life without this person in it. She had married someone else, had children, had created an entirely separate narrative where that chapter had been closed, officially, ceremonially. The letter threatened the integrity of that narrative. It suggested that some chapters refuse to close, that unfinished business persists, waiting.

She thought about not responding. It would be easy. The person writing the letter would be dead in six months. Afterward, guilt would be a manageable thing. But Helen was not someone who chose ease over complexity. She had learned that the hard way. So she sat with the letter and waited for the next feeling to arrive.`

// ─── Unseen Poetry Extracts ────────────────────────────────────────────────

const UNSEEN_POETRY_1 = `Night Walk

The streets are empty now except for us,
two figures moving through the darkness like
swimmers in a black ocean, searching
for shore we might have imagined once.

The streetlights make us ghosts of ourselves—
overhead, they render everything
a kind of permanent separation: light
absolute, then darkness absolute.

You don't speak. I don't speak. The city
breathes around us, indifferent to our
meaning or unmanning. A cat
watches from a fence, luminous-eyed.

Later, you will tell me you were afraid.
Later, I will pretend I was not.`

const UNSEEN_POETRY_2 = `Inheritance

My mother's hands were always moving—
the repetitive mathematics of domesticity:
folding, cutting, kneading, scrubbing.
I remember the cracks in her palms,

the way she would apply cream at night
as though it were a ritual that might erase
the evidence of work, of years,
of being worn smooth by necessity.

Now my own hands show the same cracks.
I perform the same gestures, the same
minute choreography of keeping things
intact, of making something permanent from impermanence.

She has been dead five years.
I still reach for her method when things fall apart.`

const UNSEEN_POETRY_3 = `The Garden After Rain

Everything is cleaner now, though nothing
has been cleaned. The rain has done this work—
washed the dust from leaves, from petals,
from the stones that mark the paths.

A bird begins again its small song,
and the garden remembers what it is:
not a place of cultivation, but of
persistent becoming, of continuous repair.

The damage from the storm is still visible—
broken branches, petals scattered—
but something in the order of things
has been restored. Not returned to what was before,

but arranged into a new configuration,
where loss and growth coexist,
where beauty emerges not from absence
of damage, but despite, and with, and through it.`

// ═════════════════════════════════════════════════════════════════════════════
// MOCK EXAM 4: Unseen Prose and Poetry
// ═════════════════════════════════════════════════════════════════════════════

const MOCK_EXAM_4_UNSEEN_PROSE_POETRY: MockExamPaper = {
  id: 'igcse-lit-extra-004',
  board: 'IGCSE',
  paperNumber: 2,
  title: 'Edexcel IGCSE English Literature - Paper 2 Mock Exam 1 (Unseen Texts)',
  subtitle: 'Unseen Prose and Poetry Analysis',
  code: '4ET1/04',
  totalTimeMinutes: 120,
  totalMarks: 80,
  sections: [
    {
      id: 'section-a-unseen-prose',
      title: 'Section A: Unseen Prose',
      description:
        'Read the extract below and answer the question that follows. You should spend approximately 40 minutes on this question.',
      totalMarks: 40,
      suggestedTimeMinutes: 40,
      questions: [
        {
          id: 'q1-unseen-prose-1',
          questionNumber: 1,
          questionText: `Read the extract above. Analyse how the writer presents the character of Margaret and explores the theme of withdrawal from life. You should consider the writer's use of language, imagery, and narrative perspective, and explain the effect on the reader.`,
          marks: 40,
          suggestedTimeMinutes: 40,
          questionType: 'analysis',
          extract: UNSEEN_PROSE_1,
          extractSource: 'Unseen Contemporary Prose',
          modelAnswers: {
            'Band 5 (32-40)': `The writer presents Margaret's withdrawal through a combination of physical stillness, psychological distance, and linguistic passivity that suggests both peace and profound alienation. The opening image—"The apartment overlooked the city but the view had stopped mattering years ago"—immediately juxtaposes external possibility with internal abandonment. The phrase "stopped mattering" is crucial: it suggests not inability to see but refusal to value. The writer distinguishes between access and engagement.

The second sentence employs an extended metaphor comparing traffic to "blood through veins," suggesting the city as living organism from which Margaret has disconnected. Yet Margaret herself appears increasingly still, increasingly removed from that organic circulation. The contrast between external motion and Margaret's stasis becomes the primary source of tension.

The writer reveals Margaret's former engagement through remembered detail: "the man with the red umbrella who appeared every Tuesday," "the child who pressed her face against shop windows," "the way light changed the buildings' colors." These observations demonstrate Margaret once inhabited the world with full attentional engagement. Yet "she had stopped writing" and "the world's details, once precious, had become overwhelming." The shift from "precious" to "overwhelming" suggests that the same world that once gave meaning now produces anxiety. Margaret's withdrawal appears not as escape from nothing but as response to excess—she has been saturated by reality.

The dialogue with Sarah reveals how withdrawal creates communicative distance. "Sarah would say, her voice careful, the tone of someone negotiating with unstable ground." The metaphor of "unstable ground" suggests Margaret's mental state is unpredictable, requiring others to approach cautiously. Yet the narrative perspective remains ironically distant from Sarah: we learn Sarah's feelings about Margaret's withdrawal, but Margaret's own experience of being addressed in such careful tones is not directly represented. This narrative choice enacts Margaret's isolation—others must adapt to her, yet she remains unreachable.

The final paragraph achieves profound irony: Margaret claims "stillness had become a kind of clarity," yet this clarity is entirely internal, accessible only to her. She has created a philosophy of stasis ("nothing urgent demanded attention") that justifies withdrawal. The final image—"the regularity of light, the constancy of indifference"—reveals the paradox: clarity comes from accepting indifference, from recognizing that the world operates with or without one's engagement.

The writer's overall effect is ambiguous: is Margaret's withdrawal peaceful wisdom or destructive depression? The prose remains non-judgmental, presenting stillness as simultaneously refuge and tomb.`,
          },
          questionType: 'analysis',
        },
      ],
    },
    {
      id: 'section-b-unseen-poetry',
      title: 'Section B: Unseen Poetry',
      description:
        'Read the poem below and answer the question that follows. You should spend approximately 40 minutes on this question.',
      totalMarks: 40,
      suggestedTimeMinutes: 40,
      questions: [
        {
          id: 'q2-unseen-poetry-1',
          questionNumber: 2,
          questionText: `Read the poem above. Analyse how the poet uses language, form, and imagery to explore the theme of inheritance or legacy. Consider how the poem's structure and word choice contribute to its meaning.`,
          marks: 40,
          suggestedTimeMinutes: 40,
          questionType: 'analysis',
          extract: UNSEEN_POETRY_2,
          extractSource: 'Unseen Contemporary Poem',
          modelAnswers: {
            'Band 5 (32-40)': `The poem explores inheritance not as positive legacy but as involuntary transmission of suffering and labor. The opening establishes maternal hands as constant, unstoppable motion: "always moving," "the repetitive mathematics of domesticity." The phrase "repetitive mathematics" transforms housework into abstract calculation—it is precise, predictable, exhausting. The list "folding, cutting, kneading, scrubbing" uses asyndeton (omission of conjunctions) to suggest relentless sequence, each action flowing into the next without break.

The physical manifestation of labor—"cracks in her palms"—transforms body into text. The cracks become readable signs of work, permanent evidence that cannot be erased. The mother's nighttime application of cream represents futile resistance against this textual recording of labor. She attempts "to erase / the evidence of work, of years, / of being worn smooth by necessity," yet the very gesture acknowledges the impossibility of erasure.

The volta "Now my own hands show the same cracks" completes the inheritance narrative. The speaker has not chosen this legacy; it has been transmitted through biology and repetition. The phrase "I perform the same gestures, the same / minute choreography" reveals that inheritance operates not through conscious transmission but through embodied habit—the daughter unknowingly replicates the mother's movements.

The final stanza introduces temporal distance: "She has been dead five years." Yet this distance does not alter the daughter's behavior: "I still reach for her method when things fall apart." The inheritance persists beyond the mother's life, becoming internalized as the daughter's default response to crisis. The poem suggests that we are shaped by those who raised us in ways we cannot escape, that their suffering becomes our intuition.

The form reinforces this theme. The poem's relatively regular structure—four-line and five-line stanzas—mirrors the regularity of inherited gesture. The enjambment across lines ("being worn smooth by necessity") mirrors the continuous flow of inherited labor. The poem refuses elaborate language or striking metaphor, instead maintaining the simple, precise diction of observation. This stylistic restraint mirrors the book of daily work: no decoration, only necessary action.`,
          },
          questionType: 'analysis',
        },
      ],
    },
  ],
}

// ═════════════════════════════════════════════════════════════════════════════
// MOCK EXAM 5: Comparative Unseen Texts
// ═════════════════════════════════════════════════════════════════════════════

const MOCK_EXAM_5_COMPARATIVE_UNSEEN: MockExamPaper = {
  id: 'igcse-lit-extra-005',
  board: 'IGCSE',
  paperNumber: 2,
  title: 'Edexcel IGCSE English Literature - Paper 2 Mock Exam 2 (Comparative Unseen)',
  subtitle: 'Comparative Analysis of Unseen Texts',
  code: '4ET1/05',
  totalTimeMinutes: 120,
  totalMarks: 80,
  sections: [
    {
      id: 'section-a-comparative-prose',
      title: 'Section A: Comparative Prose Analysis',
      description: 'Read both extracts below and answer the question that follows.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q1-comparative-prose',
          questionNumber: 1,
          questionText: `Read both prose extracts. Compare how the two writers present characters grappling with loss, change, or the past. You should consider their use of language, imagery, narrative technique, and structure. How do their approaches differ, and what effect does this have on the reader?`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'comparison',
          extract: `PASSAGE A:\n${UNSEEN_PROSE_1}\n\nPASSAGE B:\n${UNSEEN_PROSE_2}`,
          extractSource: 'Unseen Contemporary Prose',
          modelAnswers: {
            'Band 5 (32-40)': `Both writers explore withdrawal and disconnection, but achieve these themes through radically different approaches. Margaret (Passage A) withdraws through stillness and acceptance; Tom (Passage B) withdraws through absence and geographic distance. The writers employ these different withdrawal strategies to explore how individuals respond to loss—whether internal loss of meaning or external loss of community.

Passage A employs stillness as resistance to overwhelming reality. The opening sentence establishes Margaret's physical location (apartment, overlooking city) but her psychological distance. Language is passive: the view "had stopped mattering," "she had stopped writing." These constructions suggest Margaret as victim of gradual abandonment rather than active agent. Yet the final paragraph complicates this reading: "stillness had become a kind of clarity" presents Margaret's withdrawal as chosen wisdom. The writer maintains ambiguity throughout—is Margaret's withdrawal pathological depression or philosophical achievement?

Passage B employs narrative distance and geographic exploration. Tom "had been" at university, "had gone," "had moved"—his life accumulates through past actions, yet he has become static in the present ("standing outside the closed factory"). Where Margaret has achieved philosophical acceptance, Tom experiences "something like grief" without clear object. His withdrawal is more troubled, less resigned.

The writers' use of metaphor differs significantly. Passage A employs organic metaphors (blood through veins, ocean/swimmers) suggesting continuous life processes from which Margaret has withdrawn. Passage B employs architectural metaphors (museum display, chain-link fence, closed structures) suggesting entropy and decay. Passage A suggests stasis; Passage B suggests collapse.

Structurally, Passage A moves from external (city view) to internal (Margaret's philosophy). The prose becomes increasingly abstract as it moves inward. Passage B moves from external (closed factory) to internal (Tom's regret), but the conclusion remains unresolved: "Afterward, guilt would be a manageable thing." This structural difference mirrors thematic difference: Margaret achieves internal peace; Tom remains suspended in unresolved feeling.

Both passages suggest withdrawal as response to overwhelming complexity: Margaret finds peace in refusing to engage; Tom cannot achieve this peace and remains tormented. The writers thus explore withdrawal not as unified response to loss but as multiple, conflicting responses—some finding refuge, others finding only emptiness.`,
          },
          questionType: 'comparison',
        },
      ],
    },
    {
      id: 'section-b-comparative-poetry',
      title: 'Section B: Comparative Poetry Analysis',
      description: 'Read both poems below and answer the question that follows.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q2-comparative-poetry',
          questionNumber: 2,
          questionText: `Read both poems above. Compare how the two poets present the relationship between past and present, or between inherited experience and individual identity. You should consider their use of language, form, imagery, and tone. How does each poet's approach contribute to their exploration of this theme?`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'comparison',
          extract: `POEM A:\n${UNSEEN_POETRY_2}\n\nPOEM B:\n${UNSEEN_POETRY_3}`,
          extractSource: 'Unseen Contemporary Poems',
          modelAnswers: {
            'Band 5 (32-40)': `Both poems explore inheritance and the past's persistent presence, but employ opposing formal strategies. Poem A ("Inheritance") uses regular structure and direct language to emphasize hereditary transmission; Poem B ("The Garden After Rain") employs fragmented form and metaphorical complexity to suggest transformation and renewal. The poets thus explore fundamentally different possibilities: whether the past determines the present or whether damage and healing coexist.

Poem A uses relatively stable stanza forms and clear chronological progression. The movement from mother's hands to daughter's hands follows biological/temporal logic. Language is precise and literal: "cracks," "palms," "cream" are concrete objects demonstrating abstract inheritance. The repetition of hand imagery creates cyclical structure suggesting inevitable transmission. The speaker cannot escape the mother's legacy because it has become somatic—"I still reach for her method when things fall apart."

Poem B employs looser form, fragmented syntax, and abundant metaphorical density. The garden as metaphor allows for more complex exploration of renewal and transformation. "Everything is cleaner now, though nothing / has been cleaned" presents paradox at the formal level—the sentence structure enacts confusion about causation and change. Where Poem A emphasizes determinism ("I perform the same gestures"), Poem B emphasizes agency and reconstruction: "where beauty emerges not from absence / of damage, but despite, and with, and through it."

The tonal difference is crucial. Poem A maintains subdued, elegiac tone: the speaker accepts inheritance as burdensome continuation. "I still reach" carries resignation—there is no alternative. Poem B's tone is more hopeful, moving from observation to philosophical affirmation. "Not returned to what was before, / but arranged into a new configuration" suggests the past doesn't determine the future, merely shapes it.

Formally, Poem A's stability (regular lines, consistent imagery) mirrors the speaker's sense of being bound to inherited patterns. Poem B's instability (irregular line lengths, shifting metaphors) mirrors its theme of continuous becoming. Poem A's repetition emphasizes fixity; Poem B's paradoxes emphasize transformation.

Both poets explore inheritance, yet draw opposite conclusions: Poem A suggests we are prisoners of the past; Poem B suggests we are partners with the past in creating new configurations. These different approaches reveal how formal choices encode thematic arguments—structure itself becomes meaning.`,
          },
          questionType: 'comparison',
        },
      ],
    },
  ],
}

// ═════════════════════════════════════════════════════════════════════════════
// MOCK EXAM 6: Complex Thematic Integration
// ═════════════════════════════════════════════════════════════════════════════

const MOCK_EXAM_6_THEMATIC_INTEGRATION: MockExamPaper = {
  id: 'igcse-lit-extra-006',
  board: 'IGCSE',
  paperNumber: 2,
  title: 'Edexcel IGCSE English Literature - Paper 2 Mock Exam 3 (Thematic Integration)',
  subtitle: 'Complex Thematic and Interpretive Analysis',
  code: '4ET1/06',
  totalTimeMinutes: 120,
  totalMarks: 80,
  sections: [
    {
      id: 'section-a-thematic-prose',
      title: 'Section A: Thematic Prose Analysis',
      description: 'Read the extract below and answer the question that follows.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q1-thematic-prose',
          questionNumber: 1,
          questionText: `Read the extract below. Analyse how the writer uses language and narrative technique to explore the theme of confronting difficult truths and unfinished business. Consider how the character's internal response to external stimulus reveals deeper themes about human connection, time, and reconciliation.`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'analysis',
          extract: UNSEEN_PROSE_3,
          extractSource: 'Unseen Contemporary Prose',
          modelAnswers: {
            'Band 5 (32-40)': `The writer presents confrontation with unfinished business as temporal and psychological rupture that destabilizes achieved identity. The opening image—"the kind of letter that made the present moment feel unreal"—suggests that some communications fundamentally alter ontological certainty. Helen has "constructed a life" that appears complete, yet the letter threatens its coherence, revealing that "some chapters refuse to close, that unfinished business persists, waiting."

The writer employs significant silence and white space to represent Helen's processing. "She held it in her hands without opening it again" suggests physical possession without full comprehension. She has already read it four times—repetition suggests obsessive rereading seeking meaning that reading cannot supply. The specific greeting "Dear Helen, though they had not spoken in fourteen years" establishes temporal distance that the letter immediately collapses.

The letter's language is notably careful, moving from personal address to philosophical reflection: "I have been thinking about the things I said to you, and the things I did not say." This formulation suggests that language itself is inadequate—both speech and silence have created the rupture. "How easy it was to let anger take the place of love" presents anger as substitution, a failed replacement that now seems comprehensible as mistake rather than necessity.

The writer's description of Helen's physical response is restrained: "Her hands trembled. Not from emotion—that would come later, she suspected—but from the sheer improbability of the moment." This withholding of explicit emotional language paradoxically intensifies emotion. Helen's body responds before consciousness can process feeling. The phrase "Not from emotion" is crucial—it suggests physical response precedes emotional categorization. Helen's body knows something her conscious mind has not yet acknowledged.

The final section presents Helen's ethical choice. She "thought about not responding" yet "was not someone who chose ease over complexity." This characterization reveals Helen's identity as fundamentally ethical. She "had learned that the hard way," suggesting previous experience with the consequences of emotional evasion. The concluding line—"So she sat with the letter and waited for the next feeling to arrive"—presents not action but receptivity. Helen chooses to remain open to emotion rather than foreclose it.

The writer's overall achievement is exploring how we construct identity narratives that fragment when confronted by unfinished business. Helen's "separate narrative" proves illusory; the past cannot be definitively closed. Yet the final image suggests dignity in accepting this vulnerability, in remaining open to complexity rather than defending constructed completeness.`,
          },
          questionType: 'analysis',
        },
      ],
    },
    {
      id: 'section-b-thematic-poetry',
      title: 'Section B: Thematic Poetry Analysis',
      description: 'Read the poem below and answer the question that follows.',
      totalMarks: 40,
      suggestedTimeMinutes: 50,
      questions: [
        {
          id: 'q2-thematic-poetry',
          questionNumber: 2,
          questionText: `Read the poem above. Analyse how the poet uses natural imagery and form to explore the theme of resilience, recovery, or the coexistence of damage and beauty. Consider how the poem's structure, language choices, and symbolic dimensions contribute to its exploration of transformation.`,
          marks: 40,
          suggestedTimeMinutes: 50,
          questionType: 'analysis',
          extract: UNSEEN_POETRY_3,
          extractSource: 'Unseen Contemporary Poem',
          modelAnswers: {
            'Band 5 (32-40)': `The poem employs garden imagery to argue that beauty and damage are not opposites but integrated aspects of life's continuous becoming. The opening paradox—"Everything is cleaner now, though nothing / has been cleaned"—establishes the poem's central insight: reality operates through paradox rather than linear causality. Rain transforms without erasing, suggesting that cleansing and damage coexist.

The natural imagery progresses through stages of perception and understanding. Initially, the speaker observes effect (cleanliness) contradicting causation (no one has cleaned). Then the bird's song introduces life resuming its patterns: "the garden remembers what it is: / not a place of cultivation, but of / persistent becoming, of continuous repair." This redefinition is crucial—the garden's identity is not stasis but process. Its essence is "becoming" and "repair," not achievement or completion.

The poem's form mirrors this thematic argument. The enjambment across stanzas enacts continuous flow despite line breaks. The relatively open form (irregular line length, flexible rhyme) suggests growth rather than containment. Where a more formal structure would suggest order imposed from outside, this form suggests organic development.

The volta "The damage from the storm is still visible— / broken branches, petals scattered—" acknowledges that damage persists. Yet the concluding formulation is remarkable: beauty emerges "not from absence / of damage, but despite, and with, and through it." The triple prepositions—"despite," "with," "through"—suggest multiple simultaneous relationships: beauty exists in opposition to damage, alongside damage, and interpenetrated with damage. This tripartite formulation refuses simple resolution.

The final stanza achieves philosophical culmination: "where loss and growth coexist, / where beauty emerges not from absence / of damage, but despite, and with, and through it." The poem argues for integration rather than recovery of original state. "Not returned to what was before, / but arranged into a new configuration" explicitly rejects restoration as the ideal. Instead, the poem affirms ongoing transformation as the fundamental condition of existence.

The garden becomes symbol for human experience: we too carry damage that cannot be erased, cannot be healed by returning to innocence. Instead, we must achieve what the garden achieves—learning to incorporate damage into new beauty, understanding that resilience means not overcoming suffering but flowering through and alongside it. The poem's quiet tone and relatively accessible language make this insight felt rather than asserted, embodied rather than explained.`,
          },
          questionType: 'analysis',
        },
      ],
    },
  ],
}

// ═════════════════════════════════════════════════════════════════════════════
// EXPORT ALL MOCK EXAMS
// ═════════════════════════════════════════════════════════════════════════════

export const igcseLitExtraMocks: MockExamPaper[] = [
  MOCK_EXAM_1_DRAMA,
  MOCK_EXAM_2_BALANCED,
  MOCK_EXAM_3_COMPARATIVE,
  MOCK_EXAM_4_UNSEEN_PROSE_POETRY,
  MOCK_EXAM_5_COMPARATIVE_UNSEEN,
  MOCK_EXAM_6_THEMATIC_INTEGRATION,
]
