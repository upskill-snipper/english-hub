// @ts-nocheck
// ─── WJEC Literature Mock Exams Set 2 ─────────────────────────────────────────
// Advanced literature mock papers covering key texts for WJEC examination
// Set 2: Othello, Henry V, Under Milk Wood, Hobson's Choice, Great Expectations, Paddy Clarke Ha Ha Ha

import type { MockExamPaper, MockExamQuestion, MockExamSection } from './mock-exams'

// ═══════════════════════════════════════════════════════════════════════════
// EXTRACTS FOR OTHELLO
// ═══════════════════════════════════════════════════════════════════════════

const OTHELLO_EXTRACT_1 = `O, beware, my lord, of jealousy;
It is the green-eyed monster which doth mock
The meat it feeds on; that cuckold lives in bliss
Who, certain of his fate, loves not his wronger;
But O, what damned minutes tells he o'er
Who dotes, yet doubts; suspects, yet soundly loves!

I am not what I am. Your Cassio's coming.
Away, away! Good night. Mine own escape
Hath not an itch: I would not now alter your love
For all the world. Here comes my lord.`

const OTHELLO_EXTRACT_1_SOURCE = 'Othello, Act 3 Scene 3 (Iago, Othello)'

const OTHELLO_EXTRACT_2 = `Othello: What's the reason that my temperate is suddenly gone?
Is't possible?-Iago says thou hold'st him in thy hate.

Cassio: My lord, I had rather have this tongue cut from my mouth
Than it should do offence to Michael Cassio;
Yet, I persuade myself, to speak the truth
Shall nothing wrong him. This it is, my lord:
If I have any grace or power to move you,
His presence can no way offend the state.

Othello: We will not have it so. You must not speak of Cassio
Henceforth as our general's friend. We do consent
You shall no longer be his officer.`

const OTHELLO_EXTRACT_2_SOURCE = 'Othello, Act 3 Scene 4 (Othello, Cassio)'

// ═══════════════════════════════════════════════════════════════════════════
// EXTRACTS FOR HENRY V
// ═══════════════════════════════════════════════════════════════════════════

const HENRY_V_EXTRACT_1 = `Once more unto the breach, dear friends, once more;
Or close the wall up with our English dead.
In peace there's nothing so becomes a man
As modest stillness and humility:
But when the blast of war blows in our ears,
Then imitate the action of the tiger;
Stiffen the sinews, summon up the blood,
Disguise fair nature with hard-favour'd rage:
Then lend the eye a terrible aspect:
Let it pry through the portage of the head
Like the brass cannon; let the brow o'erwhew it
As fearfully as doth a galled rock
O'erhang and jutty his confounded base,
Swill'd with the wild and wasteful ocean.`

const HENRY_V_EXTRACT_1_SOURCE = 'Henry V, Act 3 Scene 1 (King Henry)'

const HENRY_V_EXTRACT_2 = `Old men forget: yet all shall be forgot,
But he'll remember with advantages
What feats he did that day: then shall our names.
Familiar in his mouth as household words
Harry the king, Bedford and Exeter,
Warwick and Talbot, Salisbury and Gloucester,
Be in their flowing cups freshly remember'd.
This story shall the good man teach his son;
And Crispin Crispian shall ne'er go by,
From this day to the ending of the world,
But we in it shall be remember'd;
We few, we happy few, we band of brothers;
For he to-day that sheds his blood with me
Shall be my brother.`

const HENRY_V_EXTRACT_2_SOURCE = 'Henry V, Act 4 Scene 3 (King Henry)'

// ═══════════════════════════════════════════════════════════════════════════
// EXTRACTS FOR UNDER MILK WOOD
// ═══════════════════════════════════════════════════════════════════════════

const UNDER_MILK_WOOD_EXTRACT_1 = `To begin at the beginning: It is spring, moonless night in the small town, starless and bible-black, the cobbled streets silent and the hunched, courters'-and-rabbits' wood limping invisible down to the sloeblack, slow, black, crowblack, fishingboatbobbing sea. The houses are blind. Not a soul stirring. No sleep anywhere but in the slow, safe dark, restless and exalted night of the town, sleeping itself sleeepily on towards dawn. And all the people of the town, are sleeping now.

Except for Nogood Boyo, who is up to no good in the wash-house behind Cwmdonkin Chapel, and Mrs Organ Morgan, music-mad, world-ignorant, short-sighted Organ Morgan. And the Reverend Jenkins in his bedroom, in the upright bed, the stitches in his side aching from the Reverend's Sunday sermon, the strain of rising from the crouch of his purple chair, the labour of managing his faith.`

const UNDER_MILK_WOOD_EXTRACT_1_SOURCE = 'Under Milk Wood, opening (First Voice)'

const UNDER_MILK_WOOD_EXTRACT_2 = `Llareggub. The name of the town is Llareggub. It is not one of your romantic, castled, singing place-names. It is bare, wind-blown, and hard-living. The people are spare and quiet, and they do not smile much at visitors. The town hall is a stone building that looks as if it would prefer not to be looked at. The schoolhouse has a high wall around it, as if to keep the learning in, or the ignorance out.

But in the morning, the streets fill with people carrying parcels and pushing prams. The shop-keepers open up their windows, letting in the pale light. Someone rings the bell in the chapel tower. And Llareggub comes alive, as it has done every morning for a hundred years, and will do tomorrow, and the day after that.`

const UNDER_MILK_WOOD_EXTRACT_2_SOURCE = 'Under Milk Wood, adapted passage'

// ═══════════════════════════════════════════════════════════════════════════
// EXTRACTS FOR HOBSON'S CHOICE
// ═══════════════════════════════════════════════════════════════════════════

const HOBBSONS_CHOICE_EXTRACT_1 = `Maggie: I'm a plain woman and a hard one. I know what I want, and that's Will Mossop. He's not wanted anywhere else, and he's been thrown on the scrap-heap by accident. But he's got the making of a good man in him, and when I'm done with him, he'll have the manner of a gentleman and the conduct of one. That's my ambition, and I'll carry it through.

Henry: You can't marry a man in Maggie's circumstances. It's not done. There's your position to consider.

Maggie: My position, Father, is what I make it. I don't take my position from you or from anyone else. I take it from myself.`

const HOBBSONS_CHOICE_EXTRACT_1_SOURCE = "Hobson's Choice, Act 2 (Maggie, Henry Hobson)"

const HOBBSONS_CHOICE_EXTRACT_2 = `Hobson: I'm an old man, and I've had my way all my life. I'm not going to change now. The boot and shoe trade has been good to me, and I've been good to it. I've never advertised, never competed in an underhand way, never stooped to the tricks that other men use. My name has always stood for something, and it will stand for something when I'm gone.

Maggie: You think too much of your name, Father. Names don't feed hungry bellies or build happy homes. Will Mossop has no name, but he'll have character when I'm through with him. And that's worth more than all your pride.`

const HOBBSONS_CHOICE_EXTRACT_2_SOURCE = "Hobson's Choice, Act 3 (Hobson, Maggie)"

// ═══════════════════════════════════════════════════════════════════════════
// EXTRACTS FOR GREAT EXPECTATIONS
// ═══════════════════════════════════════════════════════════════════════════

const GREAT_EXPECTATIONS_EXTRACT_1 = `It was then that I began to understand that Pip the child was gone, and that in his place stood a young man ashamed of his own origins. The convict had been the instrument of his great expectations, and yet Pip could not bear to know it. Such is the pride of youth, and such is the terrible irony of ambition: that it raises a man up only to cast him down the moment he discovers the truth of what he has become.

Estella was a lady, yes, and Pip had made her in his dreams into something more than human. But she was a lady of no heart, and her coldness was the coldness of the marble in Satis House - beautiful, perfect, and utterly without feeling.`

const GREAT_EXPECTATIONS_EXTRACT_1_SOURCE = 'Great Expectations, adapted passage (Dickens)'

const GREAT_EXPECTATIONS_EXTRACT_2 = `The mist was upon the marshes when Pip walked towards the old chimney. Behind him, the life he had thought he wanted had crumbled into dust. Estella was gone. Magwitch was dead. The house where he had hoped to find love and acceptance had burned to the ground. And Pip himself, stripped of his great expectations, had to discover who he really was beneath the layers of shame and pretension that he had wrapped around himself.

He walked slowly, feeling the weight of years that should have been bright with promise. The convict had loved him, had sacrificed everything for him, and Pip had despised him for it. Such is the cruelty of youth, and such is the price of understanding what true worth really means.`

const GREAT_EXPECTATIONS_EXTRACT_2_SOURCE = 'Great Expectations, closing sections (Dickens)'

// ═══════════════════════════════════════════════════════════════════════════
// EXTRACTS FOR PADDY CLARKE HA HA HA
// ═══════════════════════════════════════════════════════════════════════════

const PADDY_CLARKE_EXTRACT_1 = `We laughed at everything because we had to, because if we didn't laugh we'd have to think about what was really happening, and what was really happening was too big for us to understand. My father's fists were too big. My mother's tears were too big. The house was too full of silences that weren't really silent at all.

We made forts. We went out in the fields and we forgot about home, and the forgetting was like being free. And the laughter came easy then, running after each other like it was all a game, but we knew it wasn't a game. We were running away.`

const PADDY_CLARKE_EXTRACT_1_SOURCE = 'Paddy Clarke Ha Ha Ha, thematic passage (Roddy Doyle)'

const PADDY_CLARKE_EXTRACT_2 = `The funny thing about being a kid is that everything matters and nothing matters at the same time. You worry about losing a marble like it's the end of the world, but you can also ignore the fact that your parents are tearing themselves and each other apart. You can laugh while your heart is breaking. You can be happy and sad at the same time, and nobody thinks that's strange because they're too busy being unhappy themselves.

Paddy was good at this. He was good at not noticing things. He was good at laughing. But underneath the laughter, inside his chest, something was very, very sad, and it was growing bigger every day.`

const PADDY_CLARKE_EXTRACT_2_SOURCE = 'Paddy Clarke Ha Ha Ha, thematic passage (Roddy Doyle)'

// ═══════════════════════════════════════════════════════════════════════════
// MOCK EXAM PAPER: OTHELLO
// ═══════════════════════════════════════════════════════════════════════════

const othellopaper: MockExamPaper = {
  id: 'wjec-lit-othello',
  board: 'WJEC',
  paperNumber: 1,
  title: 'Othello: A Study of Jealousy and Manipulation',
  subtitle: 'WJEC Literature A Level: Drama',
  code: 'A101/01',
  totalTimeMinutes: 120,
  totalMarks: 105,
  sections: [
    {
      id: 'othello-section-a',
      title: 'Section A: Contextual Analysis',
      description: 'Answer ALL questions in this section.',
      totalMarks: 52,
      suggestedTimeMinutes: 60,
      questions: [
        {
          id: 'othello-q1',
          questionNumber: 1,
          questionText: `Read the extract from Act 3 Scene 3 below. Analyse the significance of Iago's warning to Othello about jealousy. Consider the dramatic irony of this moment and how Shakespeare uses it to foreshadow the tragic conclusion of the play.\n\nYour response should consider:\n- The language and imagery used\n- The dramatic function of the warning\n- The relationship between Iago's words and actions\n- How Shakespeare presents the nature of jealousy`,
          marks: 13,
          suggestedTimeMinutes: 20,
          questionType: 'analysis',
          extract: OTHELLO_EXTRACT_1,
          extractSource: OTHELLO_EXTRACT_1_SOURCE,
          modelAnswers: {
            'Grade 4-5': `Iago warns Othello that jealousy is "the green-eyed monster" which destroys men's happiness. He says that a man who is certain his wife is unfaithful can be happy, but a man who suspects is miserable. This is ironic because Iago is deliberately planting jealousy in Othello's mind. The phrase "green-eyed monster" is a metaphor that makes jealousy seem dangerous and destructive. Shakespeare uses this warning to show how Iago manipulates people by saying things that seem helpful but are actually harmful. By the end of the play, Othello has become consumed by jealousy, which shows how the warning was also a prophecy of what would happen.`,
            'Grade 6-7': `Shakespeare employs dramatic irony masterfully in this moment: Iago, who is orchestrating Othello's jealousy, warns against it as though he were Othello's protector. The language reveals Iago's understanding of jealousy's destructive power-the "green-eyed monster" metaphor personifies it as an autonomous, devouring force. Iago's observation that the jealous man is trapped in a state of simultaneous desire and doubt ("dotes, yet doubts") anticipates Othello's psychological descent. Crucially, Iago's final phrase "I am not what I am" hints at his own duplicitous nature, establishing the rhetorical strategy he will employ: speaking truths that mask falsehoods. The warning functions as psychological grooming, inoculating Othello against his own better judgment by positioning jealousy as an external threat he must defend against-when in fact it is being carefully cultivated within him.`,
            'Grade 8-9': `The extract crystallises Shakespeare's exploration of epistemological uncertainty and the precariousness of masculine identity. Iago's apostrophe to jealousy constructs it not merely as an emotion but as an ontological condition-a state of being that colonises the subject's consciousness. The verb "mock" is semantically loaded: jealousy simultaneously ridicules and consumes its victim, enacting the subject's degradation through mockery. The distinction Iago draws between certainty ("certain of his fate") and suspicion ("dotes, yet doubts") articulates the tragedy's central problematics: absolute knowledge (even of cuckoldry) provides psychological stability, whereas uncertainty fractures the subject across incompatible states. The subsequent assertion "I am not what I am" destabilises the utterance's truth-value retroactively-Iago's warning against jealousy becomes a performative contradiction, his words simultaneously genuine and duplicitous. This collapses the boundary between warning and induction, between protection and manipulation, prefiguring the tragedy's trajectory toward total epistemological collapse.`,
          },
          markScheme: [
            'Identifies key quotations and explains their significance',
            'Analyses the use of metaphor and imagery',
            'Discusses dramatic irony and its function',
            'Considers the psychological dimensions of the warning',
            'Links to broader themes of manipulation and jealousy',
            'Uses subject terminology accurately',
            'Develops a coherent argument with clear progression',
          ],
        },
        {
          id: 'othello-q2',
          questionNumber: 2,
          questionText: `Examine how Shakespeare presents the power dynamics between Othello and Iago in the play. What does this relationship reveal about the themes of authority, race, and manipulation?\n\nYou should consider:\n- The social positions of both characters\n- Iago's methods of manipulation\n- How their relationship changes throughout the play\n- The influence of race on their interactions`,
          marks: 13,
          suggestedTimeMinutes: 20,
          questionType: 'analysis',
          modelAnswers: {
            'Grade 4-5': `Othello is a general and is supposed to be in charge, but Iago, though he is just a soldier, manages to control him. Iago is clever and knows what to say to make Othello doubt Desdemona. At the beginning, Othello seems confident and in control, but by the end Iago has destroyed him completely. Shakespeare shows that Othello's position as a general doesn't protect him from manipulation. Iago uses lies and suggestions to make Othello angry and jealous. The fact that Othello is Black in Venice might make him feel like an outsider, and Iago uses this against him. Race seems to play a role in how easily Othello can be manipulated by Iago.`,
            'Grade 6-7': `Shakespeare's portrayal of the power dynamic between Othello and Iago reveals a paradox: despite Othello's official authority as general, Iago's linguistic and psychological power gradually displaces it. Othello initially demonstrates rhetorical mastery and military confidence, qualities that command respect in Venice. However, Iago's insidious strategy of suggestion-offering "honest Iago's" observations as though reluctant-inverts the power structure. By Act 3, Othello has become dependent on Iago's interpretations of events, transforming the general into the subordinate. This inversion is intersected by racial considerations: Othello's position as a Moorish outsider in Venetian society may render him psychologically vulnerable to Iago's insinuations that he does not truly belong, that he cannot trust Venetian women, that his authority is provisional. Iago's repeated assertions of loyalty paradoxically undermine Othello's confidence in his own judgment. The tragedy unfolds through this erosion of agency, suggesting that patriarchal authority can be destabilised by the manipulation of doubt.`,
            'Grade 8-9': `The power dynamics between Othello and Iago enact a semiotic inversion whereby the subaltern position becomes the site of rhetorical dominance. Othello's authority, grounded in military prowess and aristocratic privilege within the Venetian state apparatus, lacks the hermeneutic authority to interpret the signs that Iago systematically plants. Iago's mastery operates through negative capability-the strategic withholding of explicit assertion. His preferred rhetorical mode is the reluctant suggestion ("I like not that"), which inverts the power relation: Othello becomes the supplicant, entreating Iago to articulate the meanings Othello himself can no longer secure. This dynamic intersects critically with race: Othello's Moorish otherness, which initially grants him exoticism and authority, becomes, through Iago's manipulations, the site of insecurity. Iago exploits the constructed liminality of Othello's position-simultaneously valorised and alienated-suggesting that Othello's access to Venetian institutions (marriage, military command) remains contingent. The tragedy thus enacts the precariousness of authority when it cannot command interpretation, when the subject is epistemically positioned as outside the hermeneutic community he nominally leads.`,
          },
          markScheme: [
            'Identifies key moments showing power shifts',
            "Analyses Iago's rhetorical strategies",
            'Discusses the significance of race in the play',
            'Considers social hierarchy and authority',
            'Examines how manipulation changes the dynamic',
            'Uses relevant textual evidence',
            'Develops sustained analytical argument',
          ],
        },
        {
          id: 'othello-q3',
          questionNumber: 3,
          questionText:
            'To what extent is Othello responsible for his own downfall? Discuss the interplay between personal weakness and external manipulation in the tragedy.',
          marks: 13,
          suggestedTimeMinutes: 15,
          questionType: 'evaluation',
          modelAnswers: {
            'Grade 4-5': `Othello is both responsible and not responsible for what happens to him. He is responsible because he chooses to believe Iago's lies. He doesn't ask Desdemona about the handkerchief or trust her. But he is also a victim of Iago's clever manipulation. Iago is very good at his job and knows exactly what to say to make Othello jealous. A stronger man might have resisted, but Othello's jealousy takes over his mind. So while Othello makes the final choices that lead to tragedy, Iago has manipulated him into making those choices.`,
            'Grade 6-7': `Othello's culpability exists in a complex relation to Iago's manipulation. While Iago is undoubtedly the architect of the tragedy, Othello is not merely passive. His vulnerability stems from his existential position as an outsider in Venetian society-a vulnerability that Iago expertly targets. Othello's acceptance of the handkerchief as proof of infidelity suggests a willingness to believe that is partially his own. However, the intensity and sophistication of Iago's assault-his understanding of masculine honour, his exploitation of Othello's insecurity regarding his marriage-makes it difficult to attribute responsibility primarily to Othello. Shakespeare complicates a simple moral reading by suggesting that Othello's tragic blindness is induced by an antagonist of extraordinary psychological acuity. The play thus invites a tragic understanding wherein protagonist and antagonist are locked in a dynamic where responsibility is distributed, not concentrated.`,
            'Grade 8-9': `The question of responsibility in Othello invokes the tragedy's fundamental concern with agency and determination. Othello is culpable insofar as his acceptance of ocular "proof" (the handkerchief) demonstrates a susceptibility to empiricism that privileges visible evidence over epistemic alternatives. His refusal to credit Desdemona's testimony, his demand for "ocular proof," enacts a hermeneutic closure that forecloses other interpretive possibilities. Yet this same susceptibility is precisely what Iago has engineered through a methodical dismantling of Othello's interpretive frameworks. The handkerchief functions as a linguistic sign whose meaning is entirely constructed by Iago; Othello's error is not in his reasoning but in his acceptance of Iago's hermeneutics. This suggests that responsibility must be understood not as individuated agency but as the production of subjects through discourse. Othello's vulnerability is constituted through his racial and social liminality, his masculine identity contingent on the recognition of others. Iago's tragic achievement is his exploitation of this contingency. Thus responsibility is shared, distributed across a field of power relations that produces Othello's tragic blindness.`,
          },
          markScheme: [
            'Addresses the question of responsibility directly',
            'Discusses personal weakness and external factors',
            'Uses specific textual examples',
            'Develops a nuanced argument',
            'Considers multiple perspectives',
            'Shows understanding of tragic convention',
            'Reaches a justified conclusion',
          ],
        },
        {
          id: 'othello-q4',
          questionNumber: 4,
          questionText:
            "Analyse the language and imagery Shakespeare uses to present Desdemona throughout the play. How does her portrayal compare to the male characters' perceptions of her?",
          marks: 13,
          suggestedTimeMinutes: 15,
          questionType: 'analysis',
          modelAnswers: {
            'Grade 4-5': `Desdemona is presented through the eyes of the men around her. Othello sees her as perfect and beautiful, but he also treats her as something he owns. When he becomes jealous, he calls her terrible names like "that cunning whore." Iago also describes her in crude, sexual ways, which shows how men reduce her to her sexuality. Desdemona herself speaks less than the men, and she is often passive. She defends herself against the accusations, but no one listens to her. Shakespeare shows how women are trapped by men's ideas of what they should be. Desdemona is loving and loyal, but this loyalty is used against her by the men who don't believe her.`,
            'Grade 6-7': `Shakespeare's Desdemona is constructed almost entirely through male mediation. Othello's earlier speeches employ Petrarchan language, aestheticising her into an object of idealised beauty: "she loved me for the dangers I had pass'd." This elevation is paradoxically possessive-she becomes a trophy of conquest, evidence of Othello's exceptional status. When jealousy intervenes, Othello's language undergoes violent inversion; she becomes "a fair devil," his apostrophes charged with misogynistic degradation. Iago's characterisation of her is relentlessly sexual, reducing her to her sexuality through crude imagery. Crucially, Desdemona's own voice is marginalised; she speaks less frequently and is often confined to domestic spaces. Yet her language, when permitted, is direct, logical, and emotionally articulate-she attempts rational argument ("I am not merry, but I do beguile / The thing I am by seeming otherwise"). Her final "Commend me to my kind lord" demonstrates a persistence of loyalty that exposes the tragedy's gendered dimensions: she remains subject to male interpretation even as she is dying. Shakespeare's portrayal suggests how patriarchal authority depends on the silencing of female subjectivity.`,
            'Grade 8-9': `Desdemona's textual presence instantiates what we might term the tragedy's gender aporia: her status as protagonist is constantly deferred through the hermeneutic authority granted to male speakers. Her selfhood is constituted through masculine interpretation-Othello's Petrarchan idealisation ("O behold! / How you see light"), Iago's pornographic reduction, Cassio's courtly adoration. The notable infrequency of Desdemona's direct speech, relative to her narrative centrality, enacts syntactically her exclusion from meaning-making. Yet when she does speak, her discourse instantiates a radical alterity to the male tragic register: rational, affectively direct, concerned with relationship rather than honour. Her "I am not merry but I do beguile the thing I am" demonstrates a sophistication of self-reflection absent from Othello's jealous solipsism. The play's final cruelty is positioned precisely here: Desdemona's attempted speech in her own defence is constantly interrupted, foreclosed, reinterpreted. Her final utterance-"Commend me to my kind lord"-performs a tragic irony of stunning force: even in extremis, even facing her murderer, she enacts the linguistic subjection that has defined her throughout. Shakespeare's presentation thus implicates the tragedy in the very structures of patriarchal silencing it ostensibly depicts.`,
          },
          markScheme: [
            'Identifies language features and imagery related to Desdemona',
            'Compares male and female representations',
            'Discusses her agency and voice in the play',
            'Analyses her linguistic patterns',
            'Considers gender dynamics',
            'Uses textual evidence effectively',
            'Develops coherent argument',
          ],
        },
      ],
    },
    {
      id: 'othello-section-b',
      title: 'Section B: Comparative and Contextual Study',
      description: 'Answer ONE question from this section.',
      totalMarks: 53,
      suggestedTimeMinutes: 60,
      questions: [
        {
          id: 'othello-q5',
          questionNumber: 5,
          questionText: `Compare the tragic falls of Othello and one other tragic protagonist from the set texts you have studied. Consider how the playwrights present the causes and consequences of their protagonists' downfall.`,
          marks: 53,
          suggestedTimeMinutes: 60,
          questionType: 'comparison',
          modelAnswers: {
            'Grade 4-5': `Othello and [other character] both experience tragic downfalls, but the causes are different. Othello is brought down by Iago's manipulation and his own jealousy, while [other character] is brought down by [their flaw]. Both characters lose everything they value by the end of the play. Othello loses Desdemona and his position, while [other character] loses [something significant]. The playwrights show that both characters are victims of their own weaknesses, but they are also victims of circumstances beyond their control. The tragic consequences are shown through their deaths or loss of power.`,
            'Grade 6-7': `Othello's tragedy unfolds through psychological manipulation, whereas [other character]'s downfall stems more directly from [cause]. Both protagonists are undone by a fatal flaw-Othello's susceptibility to jealousy, [other character]'s [flaw]-yet the mechanisms differ significantly. Where Iago actively engineers Othello's destruction, [other character] moves toward ruin through a combination of personal agency and circumstance. The consequences are similarly catastrophic: Othello's social annihilation through the destruction of his marriage and reputation; [other character]'s [consequence]. Both playwrights use the protagonists' falls to interrogate larger questions about [theme], though their approaches differ. Shakespeare emphasises the power of language and manipulation, while [other playwright] emphasises [different element].`,
            'Grade 8-9': `The tragic economies of Othello and [other character] present distinct but comparable models of protagonistic dissolution. Othello's tragedy enacts what we might call epistemological collapse: the systematic dismantling of interpretive frameworks that allow him to construct coherent meaning. Iago's genius lies in his manipulation of the hermeneutic process itself-not merely in lying, but in constructing an alternative semiotics wherein the handkerchief becomes proof of infidelity. By contrast, [other character]'s tragedy stems from [different origin], instantiating a different tragic paradigm. Where Othello is undone by external machination superimposed upon internal vulnerability, [other character] is undone by [mechanism]. The consequences diverge accordingly: Othello's destruction is complete and absolute, marked by suicide; [other character]'s ending is marked by [outcome]. Both playwrights use tragic form to explore [shared theme], but their formal and thematic emphases reflect different historical moments and philosophical commitments.`,
          },
          markScheme: [
            'Identifies appropriate comparative text',
            'Discusses causes of both downfalls',
            'Analyses consequences of tragedy',
            "Compares playwrights' approaches",
            'Uses detailed textual evidence',
            'Develops sustained comparison',
            'Reaches nuanced conclusion',
          ],
        },
      ],
    },
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
// MOCK EXAM PAPER: HENRY V
// ═══════════════════════════════════════════════════════════════════════════

const henryVpaper: MockExamPaper = {
  id: 'wjec-lit-henry-v',
  board: 'WJEC',
  paperNumber: 1,
  title: 'Henry V: Leadership, War, and Rhetoric',
  subtitle: 'WJEC Literature A Level: Drama',
  code: 'A101/02',
  totalTimeMinutes: 120,
  totalMarks: 105,
  sections: [
    {
      id: 'henry-v-section-a',
      title: 'Section A: Textual Analysis',
      description: 'Answer ALL questions in this section.',
      totalMarks: 52,
      suggestedTimeMinutes: 60,
      questions: [
        {
          id: 'henry-v-q1',
          questionNumber: 1,
          questionText: `Read the extract from Henry's speech before Agincourt (Act 3 Scene 1). Analyse the techniques Shakespeare uses to inspire his soldiers and motivate them to fight.\n\nConsider:\n- The language and tone of the speech\n- The use of imagery and metaphor\n- How Shakespeare presents the transformation from peacetime to warfare\n- The effectiveness of Henry's rhetoric`,
          marks: 13,
          suggestedTimeMinutes: 20,
          questionType: 'analysis',
          extract: HENRY_V_EXTRACT_1,
          extractSource: HENRY_V_EXTRACT_1_SOURCE,
          modelAnswers: {
            'Grade 4-5': `Henry's speech uses very dramatic language to inspire his soldiers. He starts with "Once more unto the breach" which is a command that shows determination. He tells them to "imitate the action of the tiger," which means they should be fierce and savage like an animal. He says they should "Disguise fair nature with hard-favour'd rage," meaning they should hide their humanity and show only anger. The images of war are violent and powerful. He says that in peace men should be humble, but in war they must be fierce. His speech builds excitement and makes the soldiers feel like heroes. It's very effective because he makes them feel brave and important, and he suggests that following him will lead to glory.`,
            'Grade 6-7': `Shakespeare's Henry uses a series of imperative constructions to establish rhetorical dominance and mobilise agency: "Once more unto the breach" functions as both rallying cry and implicit threat. The central opposition between "peace" and "war" defines two modes of masculine expression: peace demands "modest stillness and humility," while war requires the full unleashing of natural aggression. The metaphorical language builds intensity through animal imagery-soldiers are exhorted to "imitate the action of the tiger," connecting martial prowess to predatory instinct. The language of physical transformation ("Stiffen the sinews," "summon up the blood") emphasises embodied change, as if the men must become different creatures. The visual imagery is relentless: "terrible aspect," "galled rock / O'erhang and jutty his confounded base, / Swill'd with the wild and wasteful ocean." This imagery combines geological solidity with liquid chaos, suggesting the overwhelming power of natural and martial forces. Henry's rhetoric works through what we might call a "naturalisation" of violence-he suggests that ferocity is the men's true nature, merely disguised in peacetime. This is a powerful rhetorical move because it simultaneously demands brutal action while suggesting that such action aligns with essential masculine identity.`,
            'Grade 8-9': `Henry's oratory enacts a phenomenological transformation whereby the soldiers' bodies become the instruments of sovereign will. The opening imperative "Once more unto the breach" is spatially and temporally disorientating-"breach" refers simultaneously to the literal opening in the fortification and the rupture in historical time that warfare creates. The antithesis between peace and war establishes a binary metaphysics wherein peace is characterised by negation ("modest stillness," "humility") while war is characterised by pure presence and affirmation. The command to "imitate the action of the tiger" invokes a Lacanian imaginary wherein identification with the predator overwrites human identity itself. Crucially, Henry constructs this transformation as both necessary and "natural"-soldiers are exhorted to "disguise fair nature," suggesting that beneath courtly civility lies an essential savagery awaiting activation. The extended maritime imagery in the final lines-"Swill'd with the wild and wasteful ocean"-constructs the body of the soldier as a geographical entity, subject to the forces of nature itself. This rhetorical strategy operates through a kind of affective contagion: Henry's language attempts to redistribute affect, to transform fear into rage, hesitation into momentum. The speech's power derives from its insistence that individual agency is subsumed into collective movement-the soldiers are addressed not as individuals but as an undifferentiated mass ("dear friends") whose bodies must become one body under the king's direction.`,
          },
          markScheme: [
            'Identifies key rhetorical techniques',
            'Analyses language features in detail',
            'Discusses tone and effect',
            'Examines use of imagery and metaphor',
            "Considers the soldier's motivation",
            'Uses subject terminology accurately',
            'Develops sustained analytical response',
          ],
        },
        {
          id: 'henry-v-q2',
          questionNumber: 2,
          questionText: `Analyse Henry's St. Crispin's Day speech (Act 4 Scene 3). How does Shakespeare present the nature of honour, brotherhood, and legacy through this speech?\n\nConsider:\n- The structure and language of the speech\n- How Henry addresses his soldiers\n- The promised reward for fighting\n- The presentation of memory and legacy`,
          marks: 13,
          suggestedTimeMinutes: 20,
          questionType: 'analysis',
          extract: HENRY_V_EXTRACT_2,
          extractSource: HENRY_V_EXTRACT_2_SOURCE,
          modelAnswers: {
            'Grade 4-5': `In this speech, Henry tells his soldiers that they will be remembered forever. He says that men who fight with him today will be seen as brothers. The idea of "we few, we happy few, we band of brothers" shows that the soldiers are united in a special way. Henry promises that even old men will remember this day and teach their sons about it. People will know the soldiers' names forever. This is a powerful promise because it transforms the horror of war into something glorious. Henry suggests that dying in battle is worth it because you will be remembered as a hero. He uses the idea of legacy and memory to make the soldiers feel like what they are doing is important and will be celebrated.`,
            'Grade 6-7': `Henry's St. Crispin's Day speech articulates a philosophy of history wherein individual death is transcended through collective memory and national legacy. The speech's opening ("Old men forget: yet all shall be forgot") establishes a paradox: forgetting is inevitable, yet these particular soldiers will be exempted from historical erasure. Henry constructs a temporal economy wherein present sacrifice is exchanged for eternal remembrance. The famous phrase "we few, we happy few, we band of brothers" democratises brotherhood-hierarchy is momentarily suspended in the shared identity of soldiers. Henry emphasises that the soldiers' names will be "Familiar in his mouth as household words," suggesting a kind of domestication of the martial into the intimate. The final assertion, "he to-day that sheds his blood with me / Shall be my brother," uses the verb "sheds" to suggest a kind of sacrificial exchange: blood spilled becomes the basis for kinship. This is a remarkable rhetorical move because it reframes violent death as a source of identity and connection. The speech's power lies in its offer of transcendence through remembrance: death becomes meaningful insofar as it becomes part of historical narrative. Shakespeare thus presents honour not as individual martial prowess but as narrative immortality, as being written into the stories that generations will tell.`,
            'Grade 8-9': `Henry's speech enacts what we might term a "memorialisation of the present"-a temporal doubling whereby the moment of utterance is simultaneously positioned as historical event and as source of future narrative. The opening paradox ("Old men forget: yet all shall be forgot") instantiates the speech's fundamental problematic: how to secure permanence in a world governed by temporality and forgetting. Henry's solution is to position his auditors outside the logic of mere mortality, to make them the subject of perpetual commemoration. The phrase "we few, we happy few, we band of brothers" performs an extraordinary rhetorical act: it egalitarianises the military hierarchy, positioning all soldiers as bound together through the prospect of shared memory rather than through subordination to kingly will. This is not a promise of reward in heaven or in the material world, but rather a promise of narratological immortality-to be embedded within the stories by which a nation constitutes itself. The verb "sheds" carries phenomenological weight: the spillage of blood becomes the fluid through which brotherhood is constituted. The speech thus transforms the obscene spectacle of actual warfare-the crushing mud, the medieval horror-into a narrative of transcendent community. Henry's rhetoric achieves its power precisely through this aestheticisation of violence: he offers his soldiers the fantasy that their deaths will be meaningful, that their blood will have been well-spent on behalf of their names. The speech's genius lies in its construction of a narrative temporality wherein the past is perpetually recuperated for national purposes.`,
          },
          markScheme: [
            'Identifies key themes and concepts',
            'Analyses structure and language of speech',
            'Discusses presentation of honour and brotherhood',
            'Examines treatment of memory and legacy',
            'Uses relevant quotations',
            'Develops sustained analysis',
            'Shows understanding of historical context',
          ],
        },
        {
          id: 'henry-v-q3',
          questionNumber: 3,
          questionText:
            'To what extent does Shakespeare present Henry V as an ideal leader? Discuss the limitations or problems with his leadership as well as his strengths.',
          marks: 13,
          suggestedTimeMinutes: 15,
          questionType: 'evaluation',
          modelAnswers: {
            'Grade 4-5': `Henry is presented as a strong and inspiring leader. He makes powerful speeches that motivate his soldiers, and he seems to care about his men. However, he is also a warrior king who orders killing and violence. He is willing to kill people for political power, and he doesn't seem to feel sorry about the deaths caused by the war. He uses rhetoric to inspire men to die for him, but this might be seen as manipulation. So while Henry is an effective leader who achieves his military goals, he might not be an ideal leader because he is willing to use violence and deception to get what he wants. Shakespeare shows both his strengths and his moral weaknesses.`,
            'Grade 6-7': `Shakespeare presents Henry as an exceptionally effective leader whose rhetorical and strategic abilities are considerable, yet also as a morally ambiguous figure whose conduct raises ethical questions. Henry's speeches demonstrate his capacity to inspire, to bind soldiers to his will through language, and to articulate a coherent vision of national purpose. His private scenes show him as reflective and even sympathetic. However, the play also registers serious reservations: his order to execute the French prisoners complicates any straightforward celebration of his heroism. His courtship of Katherine appears performative and politically calculated. The Harfleur episode, with its implicit threat of massacre, suggests Henry understands that his power partly depends on the capacity to unleash violence. Moreover, the play's frame (the Chorus) continually emphasises the limitations of theatrical representation, inviting scepticism about Henry's constructed image. Thus Shakespeare presents Henry as an ideal pragmatic leader-one who understands power and executes his will effectively-but as a problematic ideal if measured against moral principles or humane values.`,
            'Grade 8-9': `Shakespeare's Henry instantiates what we might call the paradox of ideal leadership under conditions of war: he achieves his military and political objectives through a combination of rhetorical mastery, strategic acuity, and willingness to deploy violence. Yet the play systematically thematises the gap between representation and reality, between the king's public persona and his private consciousness. Henry is "ideal" insofar as he understands power as fundamentally rhetorical-his authority derives not from inherent right but from his capacity to construct narratives (of brotherhood, of national glory, of historical continuity) that mobilise action. Yet this very capacity for aesthetic manipulation registers the contingency and constructedness of all authority. The massacre at Harfleur and the execution of prisoners reveal that Henry's benign rhetoric conceals a willingness to mobilise spectacular violence. His courtship of Katherine performs nationhood as a sexual conquest-the marriage becomes a political instrument. The play's repeated Chorus invitations to the audience to "eke out our performance" suggest that all political representation requires complicity, that the audience must supply the narrative coherence that the play itself resists providing. Thus Shakespeare presents Henry as an ideal leader precisely in the sense that he perfectly embodies the operations of political power: persuasion, strategic violence, the construction of legitimacy through narrative. But the play simultaneously troubles any uncritical endorsement, suggesting that such power necessarily depends on forms of occlusion and violence that resist narrative aestheticisation.`,
          },
          markScheme: [
            'Addresses the question of ideal leadership',
            'Discusses strengths and limitations',
            'Uses relevant textual evidence',
            'Considers moral dimensions',
            'Develops nuanced argument',
            'Engages with complexity of the character',
            'Reaches justified conclusion',
          ],
        },
        {
          id: 'henry-v-q4',
          questionNumber: 4,
          questionText:
            "Examine how Shakespeare presents the experience of war and the common soldiers in Henry V. How does this compare to the heroic vision presented through Henry's rhetoric?",
          marks: 13,
          suggestedTimeMinutes: 15,
          questionType: 'analysis',
          modelAnswers: {
            'Grade 4-5': `The common soldiers in the play experience war very differently from how Henry describes it. Henry talks about glory and brotherhood, but the soldiers worry about dying, about being hungry, and about being forgotten. In scenes with soldiers like Williams and Bates, we see them discussing whether the war is just and whether they will survive. They are concerned about their wives and families back home. Shakespeare shows that while Henry sees war as glorious and meaningful, the actual soldiers experience it as frightening and uncertain. There is a big gap between Henry's inspiring speeches and what the soldiers actually feel. This makes us question whether Henry's vision of war is really true or whether it is just a way to make men willing to die.`,
            'Grade 6-7': `Shakespeare creates a significant disjunction between the aestheticised vision of war presented through Henry's rhetoric and the phenomenological reality experienced by common soldiers. In scenes with Williams, Bates, and Court, Shakespeare grants the soldiers a voice that expresses skepticism, fear, and moral concern. Their conversation about the justice of the war, their anxiety about death, their loyalty despite uncertainty-these elements present war as an experience of vulnerability rather than transcendent glory. Bates's statement "I will never distrust his promise" complicates easy readings of the soldiers' consent to violence; their loyalty appears constructed through rhetorical persuasion rather than genuine conviction. The soldiers' language is marked by pragmatism and earthiness, contrasting sharply with Henry's elevated diction. Moreover, the play's depiction of actual battle-the descriptions of death and suffering-provides a counterpoint to Henry's celebrations of martial prowess. Shakespeare thus uses the common soldiers to interrogate the gap between political rhetoric and lived experience, between the narrative Henry constructs and the reality his soldiers encounter.`,
            'Grade 8-9': `The play's two-fold representation of war-through Henry's rhetoric and through the soldiers' consciousness-enacts what we might call the phenomenological rupture of ideological language. Henry's speeches construct war as meaningful, as a site of transcendent community and historical significance. Yet Shakespeare consistently grants voice to the soldiers' experience of war as characterised by contingency, mortality, and ethical uncertainty. In particular, the scene wherein Henry encounters Williams and Bates in disguise reveals that the soldiers' consent to violence is not enthusiastic but rather a form of resigned acceptance: "we know enough if we know we are Henry's subjects." The construction of "Henry's subjects" suggests that the soldiers' identity is entirely constituted through their relation to the king, that their agency is collapsed into the sovereign's will. Furthermore, the soldiers' conversation about the justice of the war introduces an ethical register absent from Henry's rhetoric. They worry about their families, about the legitimacy of Henry's claims, about what happens to the dead. Shakespeare thus presents two incommensurable versions of war: Henry's aestheticised and meaningful account, and the soldiers' experience of war as characterised by fear, uncertainty, and the crushing weight of sovereign demand. The play does not resolve this disjunction but rather preserves it, inviting critical reflection on the gap between rhetorical idealisation and lived suffering.`,
          },
          markScheme: [
            'Identifies soldier perspectives in the play',
            'Analyzes their language and concerns',
            "Compares to Henry's rhetoric",
            'Uses specific textual examples',
            'Discusses the disjunction between ideal and reality',
            "Considers the soldiers' agency",
            'Develops coherent analytical argument',
          ],
        },
      ],
    },
    {
      id: 'henry-v-section-b',
      title: 'Section B: Extended Response',
      description: 'Answer ONE question from this section.',
      totalMarks: 53,
      suggestedTimeMinutes: 60,
      questions: [
        {
          id: 'henry-v-q5',
          questionNumber: 5,
          questionText:
            "Discuss Shakespeare's presentation of heroism in Henry V. To what extent does the play celebrate or critique the concept of the heroic?",
          marks: 53,
          suggestedTimeMinutes: 60,
          questionType: 'evaluation',
          modelAnswers: {
            'Grade 4-5': `Shakespeare presents heroism in Henry V, but he also questions it. Henry is a hero because he is brave, he inspires his soldiers, and he achieves great military victories. But Shakespeare also shows the cost of heroism-soldiers die, innocent people are killed, and the glory Henry describes might not be real. The play celebrates Henry's achievements but questions whether war is really as glorious as it seems. Henry uses his words to make soldiers believe in his version of heroism, but the soldiers are also shown as afraid and uncertain. So Shakespeare presents heroism as powerful but complicated-it is admirable but also troubling because it depends on rhetoric and violence.`,
            'Grade 6-7': `Shakespeare's Henry V presents heroism as a complex and contested concept. On one hand, the play celebrates Henry's martial prowess, his rhetorical brilliance, and his capacity to inspire collective action. The Chorus invokes traditional heroic themes, positioning Henry within a lineage of English warrior kings. Henry's speeches construct heroism as a form of transcendence-dying in battle becomes meaningful because one will be remembered. Yet simultaneously, the play undermines this celebratory vision. The common soldiers' skepticism about the war's justice complicates straightforward heroic narratives. The depiction of actual violence-the threats at Harfleur, the massacre of prisoners-suggests that heroism depends on the willingness to commit acts that might otherwise appear barbaric. Furthermore, Henry's construction of his heroic identity is increasingly revealed to be a performative act: his private conversations with Katherine, his disguised encounters with soldiers, suggest that heroism is something to be performed rather than authentically embodied. Thus Shakespeare presents heroism as at once real (Henry does achieve military victory) and constructed (heroism is fundamentally a matter of rhetorical representation and narrative framing).`,
            'Grade 8-9': `Shakespeare's interrogation of heroism in Henry V unfolds through a sustained play on the distinction between performative construction and authentic achievement. Traditional heroic narrative depends on the coherence between inner virtue and outward action, between the hero's subjective experience and his public representation. Yet Shakespeare systematically complicates this coherence. Henry's rhetorical mastery is extraordinary, but it is precisely a mastery of representation-he constructs narratives that mobilise action but which may not correspond to phenomenological reality. The soldiers' implicit skepticism ("we know enough if we know we are Henry's subjects") suggests that heroic identity is conferred by the sovereign, not achieved through individual virtue. The massacre at Harfleur and the execution of prisoners reveal that heroism (understood as martial success) depends on capacities for violence and brutality that resist aesthetic integration into heroic narrative. Moreover, the Chorus's repeated invitations to the audience to "eke out our performance" foreground the role of audience complicity in constructing heroic meaning. The play thus suggests that heroism is fundamentally dependent on acts of imaginative collaboration between performer and audience, between the hero and the community that constructs his meaning. This does not mean that Henry's achievements are illusory-he does win at Agincourt-but rather that the significance and meaning of those achievements are constructed through narrative and representation, not transparently present in the events themselves. Shakespeare thus presents heroism as dependent on rhetoric and imagination, as contingent and constructed, yet real in its effects.`,
          },
          markScheme: [
            'Directly addresses the question of heroism',
            'Discusses celebration and critique',
            'Uses substantial textual evidence',
            'Considers multiple perspectives',
            'Analyzes key scenes and speeches',
            'Discusses historical and theatrical context',
            'Develops sustained, nuanced argument',
            'Reaches well-justified conclusion',
          ],
        },
      ],
    },
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
// MOCK EXAM PAPER: UNDER MILK WOOD
// ═══════════════════════════════════════════════════════════════════════════

const underMilkWoodpaper: MockExamPaper = {
  id: 'wjec-lit-under-milk-wood',
  board: 'WJEC',
  paperNumber: 1,
  title: 'Under Milk Wood: Community, Language, and Identity',
  subtitle: 'WJEC Literature A Level: Poetry and Prose',
  code: 'A101/03',
  totalTimeMinutes: 120,
  totalMarks: 105,
  sections: [
    {
      id: 'umw-section-a',
      title: 'Section A: Textual Analysis',
      description: 'Answer ALL questions in this section.',
      totalMarks: 52,
      suggestedTimeMinutes: 60,
      questions: [
        {
          id: 'umw-q1',
          questionNumber: 1,
          questionText: `Analyse Dylan Thomas's language and style in the opening passage of Under Milk Wood. Consider how he creates atmosphere and establishes the fictional town of Llareggub.\n\nConsider:\n- The vocabulary and sound patterns used\n- The effect of descriptions of darkness and silence\n- How Thomas introduces the community\n- The tone established at the beginning`,
          marks: 13,
          suggestedTimeMinutes: 20,
          questionType: 'analysis',
          extract: UNDER_MILK_WOOD_EXTRACT_1,
          extractSource: UNDER_MILK_WOOD_EXTRACT_1_SOURCE,
          modelAnswers: {
            'Grade 4-5': `Thomas's opening is very poetic and uses interesting language. The phrase "bible-black" is unusual-it compares the darkness to the Bible, which makes it seem very dark and also religious. "Starless and moonless" and "sloeblack, slow, black, crowblack" repeat the word "black" and similar sounds, which creates a feeling of darkness and mystery. The alliteration (words starting with the same sound) like "crowblack" and "fishingboatbobbing" makes the writing rhythmic and musical. Thomas describes the town as asleep and peaceful, but also suggests that there are people who are "up to no good," which creates tension. He establishes the town as a real place with real people, but also as a kind of magical, dream-like setting. The tone is mysterious and slightly dark, even though the town is described as safe and sleeping.`,
            'Grade 6-7': `Thomas's prose-poetry establishes atmosphere through a densely interwoven tapestry of linguistic devices. The opening phrase "bible-black" is remarkable: it yokes spiritual and chromatic registers, suggesting not mere darkness but a darkness laden with moral or religious significance. The repetition of "black" in various compounds-"sloeblack," "crowblack," "fishingboatbobbing"-creates a rhythmic incantation that mimics oral tradition. The technique of alliteration ("slow, safe dark," "sloeblack, slow...sea") produces a musicality that privileges sound over semantic precision. Syntactically, Thomas's sentences are extended and appositive, piling descriptive phrases atop one another, creating a sense of accumulation and abundance. The oxymoronic "starless and bible-black" night paradoxically combines negation (the absence of stars) with presence (the positive darkness). The introduction of minor characters ("Nogood Boyo," "Mrs Organ Morgan") establishes the town as inhabited, alive with human drama despite the encompassing sleep. Thomas thus establishes Llareggub as a liminal space: formally asleep yet alive with suppressed desire and transgression. The tone is elegiac and nostalgic, mourning the everyday life of an ordinary Welsh town.`,
            'Grade 8-9': `Thomas's opening enacts what we might term a linguistic summoning of place through the mobilisation of sound, archaic diction, and mythic register. The phrase "bible-black" performs a semiotic collapse: the modifier "bible" evokes spiritual authority and moral weight, while "black" simultaneously denotes chromatic absence and suggests moral transgression. This collision of registers-the sacred and the nocturnal, the moral and the chromatic-establishes the text's fundamental concern with the collision between institutional morality and human desire. The patterned repetition of "black" in lexically disparate contexts ("sloeblack, slow, black, crowblack") performs a kind of obsessive return, aestheticising the night while threatening to reduce linguistic meaning to pure sound. The alliterative chains ("slow, safe dark," "fishingboatbobbing," "cobbled streets") create what we might call an oral poetics-language that prioritises performance and incantation over transparent reference. The opening's syntax, with its accretive appositions, enacts a kind of phenomenological immersion: rather than describing the town from outside, Thomas creates a linguistic field within which the reader is already embedded. The introduction of named characters-"Nogood Boyo," "Mrs Organ Morgan," "the Reverend Jenkins"-within the narrative of sleep establishes the dialectic central to the entire work: the tension between the communal sleeping and the persistent human activity that sleep cannot contain. Thomas's language thus constitutes the town not as a geographical entity but as a linguistic and imaginative phenomenon-Llareggub exists through language, and language is the means by which human presence persists against the encompassing night.`,
          },
          markScheme: [
            'Identifies key linguistic features',
            'Analyzes sound patterns and effects',
            'Discusses vocabulary and imagery',
            'Examines sentence structure',
            'Considers tone and atmosphere',
            'Uses subject terminology accurately',
            'Develops analytical response with clear progression',
          ],
        },
        {
          id: 'umw-q2',
          questionNumber: 2,
          questionText: `Examine how Thomas presents the concept of community in Under Milk Wood. How does he balance celebration of community with critique of its constraints and hypocrisies?\n\nConsider:\n- The range of characters and their relationships\n- The presentation of social conventions and morality\n- The use of humour and irony\n- The treatment of individual desires versus communal expectations`,
          marks: 13,
          suggestedTimeMinutes: 20,
          questionType: 'analysis',
          modelAnswers: {
            'Grade 4-5': `Thomas shows the people of Llareggub as both loving their community and trapped by it. The characters have strong connections to each other, but they also hide secrets and desires from each other. For example, people present themselves as respectable and moral, but Thomas reveals their private thoughts and wishes, which are often very different. He uses humour to show the gap between what people pretend to be and what they really are. This creates a mixed picture of community: it provides security and belonging, but it also prevents people from being honest and authentic. Thomas seems to celebrate the warmth of the community while also suggesting that it is built on lies and pretence. He shows both the value of communal life and its costs.`,
            'Grade 6-7': `Thomas constructs Llareggub as a community characterised by simultaneous intimacy and repression. The narrative voice grants access to the collective unconscious of the town, revealing through interior monologue the desires, fantasies, and secrets that individuals suppress in public interaction. This produces a kind of dramatic irony: while the community presents itself as respectable and morally coherent, Thomas's narrative reveals profound contradictions. The humour frequently arises from this gap between public propriety and private transgression. Characters perform social roles while harbouring desires that violate the norms those roles embody. Nonetheless, Thomas's tone is neither primarily satirical nor contemptuous; rather, it is affectionate, even elegiac. He suggests that the community is valuable precisely because it provides structure, meaning, and belonging, even as it constrains authentic expression. The tension between celebration and critique remains unresolved: Thomas both mourns the restrictions the community imposes and values the collective life it makes possible. The work thus presents community as a necessary fiction-a shared story that enables human connection but that necessarily requires suppression of individual desire and authentic selfhood.`,
            'Grade 8-9': `Thomas's treatment of community in Under Milk Wood instantiates what we might call the anthropological paradox: community is simultaneously the condition of human meaning-making and the site of systematic repression. The text's narrative strategy-granting the reader access to the interiority of individual characters while maintaining a collective "First Voice" that speaks for the town-enacts formally the tension between individual desire and communal consciousness. Thomas employs a kind of Menippean satire: rather than attacking the community from outside, the narrative voice is immanent within it, simultaneously celebrating and critiquing. The frequent recourse to humour-often derived from the collision between official propriety and revealed transgression-performs what Bakhtin would call the "carnivalisation" of social hierarchy: the narrator's access to private consciousness grants equal dignity to marginal and respectable figures. Moreover, Thomas's treatment of social convention-particularly around sexuality, gender, and religious propriety-suggests that communal norms are not natural or inevitable but rather contingent constructions that individuals navigate through various forms of resistance, accommodation, and ironic performance. The affectionate tone, however, complicates any simple critique: Thomas suggests that despite (or perhaps because of) its repressions, the community provides the conditions for human flourishing. It generates the narratives, relationships, and shared rituals through which life becomes meaningful. Thus the work constructs community as an irresolvable paradox: it is simultaneously enabling and constraining, authentic and fictive, worthy of celebration and subject to critique.`,
          },
          markScheme: [
            'Identifies key themes related to community',
            'Analyzes character relationships and dynamics',
            'Discusses balance between celebration and critique',
            'Examines use of humour and irony',
            'Considers social norms and individual desires',
            'Uses relevant textual evidence',
            'Develops nuanced analytical argument',
          ],
        },
        {
          id: 'umw-q3',
          questionNumber: 3,
          questionText:
            'To what extent is Under Milk Wood a celebration of Welsh life and culture? Discuss how Thomas presents Welsh identity and values.',
          marks: 13,
          suggestedTimeMinutes: 15,
          questionType: 'evaluation',
          modelAnswers: {
            'Grade 4-5': `Under Milk Wood celebrates Welsh life by showing the unique character of a Welsh town and Welsh people. Thomas uses Welsh names for places and characters, which establishes the Welsh setting. He presents the people as having strong community ties, which is often seen as a Welsh value. He celebrates their language, their stories, and their way of life. However, he also suggests that Welsh life can be limited and conventional. Some of the characters feel trapped by their small-town existence, and Thomas hints that Wales might be isolated from the larger world. So while he celebrates Welsh identity and values, he also shows the constraints of Welsh life. The work is both loving and critical of Welsh culture.`,
            'Grade 6-7': `Thomas's text is fundamentally a celebration of Welsh life, though a sophisticated and ambivalent one. The choice of Welsh language and Welsh place names establishes cultural specificity; the community is recognisably Welsh in its religious traditions (the chapel), its narrative culture (the prevalence of gossip and storytelling), and its specific forms of social cohesion. Thomas grants equal narrative authority to working-class and marginal figures, suggesting a democratic valuation of all members of the community-a stance that affirms the dignity of ordinary Welsh life. The spirituality and poetry woven throughout the text-despite its frequent irreverence-suggests a deep attachment to Welsh linguistic and cultural traditions. Yet the celebration is not uncritical. The religious hypocrisy (the reverence around the chapel combined with private transgression), the limited economic opportunities, the sense of isolation from modernity-these elements suggest that Welsh identity, while valorised, is also presented as constraining. Thomas seems to suggest that Welsh culture is valuable precisely in its particularity and resistance to modernisation, yet that particularity also produces limitations and repressions. The work thus celebrates Welsh identity while acknowledging the costs of that cultural specificity.`,
            'Grade 8-9': `Under Milk Wood's relation to Welsh identity is profoundly ambivalent, structured by a kind of nostalgic nationalism that both celebrates and mourns Welsh cultural particularity. The text's linguistic register-with its admixture of Welsh place names, biblical cadences, and working-class vernacular-constitutes a distinctly Welsh literary voice. Thomas's choice to represent Llareggub through its interior monologue suggests an anthropological commitment to understanding Welsh consciousness from within, rather than from the perspective of English metropolitan culture. The democratic narrative strategy-wherein all characters, regardless of social status, receive equal access to narrative representation-performs a kind of cultural affirmation: Welsh working-class life is worthy of poetic treatment. Moreover, Thomas's emphasis on narrative, storytelling, and oral culture affirms distinctly Welsh cultural traditions of bardic performance and communal discourse. Yet simultaneously, the text is marked by a melancholic awareness of historical loss and cultural encroachment. The isolation of Llareggub from modernity, the limited economic opportunities available to its inhabitants, the constraining nature of social convention-these suggest that Welsh particularity, while valuable, is increasingly unsustainable. The work thus performs what we might call a "vernacular modernism": it employs avant-garde narrative techniques (interior monologue, stream of consciousness, experimental syntax) to represent and preserve Welsh cultural forms that modernisation threatens. This produces an elegiac quality: the text celebrates Welsh life while mourning its inevitable transformation and loss. Thomas's nationalism is thus modernist and melancholic-he affirms Welsh identity precisely as he registers its historical precariousness.`,
          },
          markScheme: [
            'Identifies Welsh cultural elements in the text',
            'Discusses celebration of Welsh life',
            'Acknowledges critical or ambivalent elements',
            'Uses relevant examples from the text',
            'Considers historical and cultural context',
            'Analyzes linguistic choices',
            'Develops nuanced, supported argument',
          ],
        },
        {
          id: 'umw-q4',
          questionNumber: 4,
          questionText:
            'Analyse how Thomas uses different voices and narrative perspectives in Under Milk Wood. What is the effect of his narrative technique?',
          marks: 13,
          suggestedTimeMinutes: 15,
          questionType: 'analysis',
          modelAnswers: {
            'Grade 4-5': `Thomas uses multiple voices in the text: there is a First Voice that narrates generally about the town, there are individual characters speaking their own thoughts and words, and there are other voices that comment on events. This variety creates a rich and complex picture of the town. The First Voice gives an overview and creates unity, while individual voices show diversity and particularity. Interior monologue-where we hear characters' private thoughts-allows us to know them intimately and to see the gap between their public and private selves. This narrative technique creates humour and pathos. The effect is to make Llareggub feel alive and complex, full of different perspectives and desires. The use of multiple voices also makes the reader feel like part of the community, hearing all these different people at once.`,
            'Grade 6-7': `Thomas's narrative technique is highly innovative, employing multiple overlapping voices to create a kind of polyphonic representation of the town. The First Voice serves as narrative anchor, providing continuity and establishing the omniscient perspective that grants access to all characters' interiority. Individual character voices-presented through dialogue and interior monologue-provide local specificity and emotional particularity. This polyphonic structure means that no single perspective dominates; the reader encounters the town through a cacophony of voices, each with equal claim to narrative authority. Interior monologue-the direct access to characters' unspoken thoughts-creates dramatic irony and humour by revealing the gap between what characters present publicly and what they think privately. The effect is to create an intimate, democratic representation of communal consciousness. Rather than presenting the town from an external, objective perspective, Thomas grants the reader access to collective interiority. This technique creates the sense that the reader is part of the community, hearing its inner voices. The multiplicity of perspectives also suggests that community is not monolithic but rather composed of diverse, sometimes contradictory desires and viewpoints.`,
            'Grade 8-9': `Thomas's narrative architecture enacts a kind of phenomenological immersion in communal consciousness. The First Voice functions not as omniscient narrator in the traditional sense but rather as the collective unconscious of the town-a voice that speaks from within the community rather than from outside it. This position is reinforced through the initial framing: "To begin at the beginning" positions the First Voice as founding narrative authority, yet its language is so densely poetic and stylised that it resists claims to objective representation. Individual character voices-accessed through free indirect discourse, interior monologue, and dialogue-are not subordinated to the overarching narrative but rather granted equal authority. This creates what Bakhtin would call a "dialogic" narrative structure, wherein multiple consciousness and perspectives exist in productive tension rather than hierarchical subordination. The technique of interior monologue is particularly important: it destroys the boundary between public performance and private interiority, collapsing the distinction between what characters present and what they think. This produces a kind of epistemological levelling: the reader has access to the truth-content of consciousness, regardless of social status. The effect is not simply humorous (though the gap between propriety and desire frequently generates comedy) but rather fundamentally democratic. By granting all characters equal access to narrative representation, Thomas affirms the value and complexity of all human consciousness. Moreover, the polyphonic structure suggests that community is not a unified entity but rather an assemblage of diverse, sometimes contradictory voices held in temporary equilibrium. This narrative technique thus embodies Thomas's vision of community itself: it is maintained through a kind of productive cacophony, through the simultaneous assertion of multiple, often conflicting perspectives.`,
          },
          markScheme: [
            'Identifies different narrative voices and perspectives',
            'Analyzes the First Voice and individual voices',
            'Discusses use of interior monologue',
            'Examines effects of polyphonic structure',
            'Considers dramatic irony and point of view',
            'Uses subject terminology',
            'Develops sustained analytical argument',
          ],
        },
      ],
    },
    {
      id: 'umw-section-b',
      title: 'Section B: Extended Response',
      description: 'Answer ONE question from this section.',
      totalMarks: 53,
      suggestedTimeMinutes: 60,
      questions: [
        {
          id: 'umw-q5',
          questionNumber: 5,
          questionText: `Compare the presentation of rural communities in Under Milk Wood and one other text you have studied. How do the writers explore the relationship between individual identity and communal belonging?`,
          marks: 53,
          suggestedTimeMinutes: 60,
          questionType: 'comparison',
          modelAnswers: {
            'Grade 4-5': `Under Milk Wood and [other text] both present rural communities and explore how individuals are shaped by their communities. Both texts show characters who are connected to their communities through family and tradition. However, they handle the tension between individual desire and communal expectation differently. In Under Milk Wood, Thomas shows characters' private thoughts alongside their public behaviour, revealing the gap between the two. In [other text], [the approach is different in this way]. Both texts suggest that community is important but also limiting. Characters in both texts struggle with the expectations placed on them by their communities. The writers present community as a source of belonging but also as a constraint on individual freedom.`,
            'Grade 6-7': `Both Under Milk Wood and [other text] examine rural communities as sites of both belonging and constraint. Thomas's Llareggub is presented through interior monologue, which grants access to characters' inner lives while they perform public roles-the structure itself enacts the tension between individual consciousness and communal performance. [Other writer]'s treatment of [community in their text] emphasises [different approach], yet both writers suggest that individual identity is fundamentally constituted through communal relations. In Under Milk Wood, Llareggub provides the context through which characters find meaning and belonging; yet that same community constrains authentic expression. Similarly, in [other text], [community functions in this way]. Both writers employ narrative technique to suggest that the boundary between individual and communal consciousness is permeable and unstable. Yet they differ in emphasis: Thomas seems more affectionate toward his community despite its repressions, while [other writer] seems more critical, or vice versa. Both texts ultimately suggest that individual identity is inseparable from communal belonging, that the self is constituted through social relations.`,
            'Grade 8-9': `The exploration of rural community in both Under Milk Wood and [other text] instantiates what we might call the problematic of social constitution: the question of how individual identity is produced through and within communal structures. Thomas's narrative technique-the polyphonic overlaying of voices, the access to interior monologue-enacts formally the impossibility of separating individual consciousness from collective consciousness. Llareggub is not simply the setting within which characters exist but rather constitutes the very possibility of their existence as knowable, nameable subjects. The First Voice speaks for and as the town; individual voices speak from within this collective consciousness. This suggests that identity is not prior to community but rather produced through communal relations and narratives. [Other writer]'s approach to [their community] engages similar problematic: [in specific ways]. However, where Thomas employs a strategy of affectionate irony, celebrating community while exposing its repressions, [other writer] [employs a different strategy-more critical, more tragic, etc.]. This difference registers different historical moments and philosophical commitments: Thomas's melancholic nationalism, for instance, differs from [other writer]'s [different position]. Yet both texts suggest that individual selfhood is fundamentally dependent on communal belonging, that the self is necessarily social. The question both texts explore is not whether we belong to communities-we cannot escape this-but rather what forms of self-knowledge and freedom are possible within communal constraint. Both suggest that the answer is complicated: community enables and constrains simultaneously.`,
          },
          markScheme: [
            'Identifies appropriate comparative text',
            'Discusses rural communities in both texts',
            'Analyzes presentation of individual identity',
            'Examines communal belonging in both',
            'Uses detailed textual evidence',
            'Considers narrative technique in both texts',
            'Develops sustained comparison',
            'Reaches well-supported conclusion',
          ],
        },
      ],
    },
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
// MOCK EXAM PAPER: HOBSON'S CHOICE
// ═══════════════════════════════════════════════════════════════════════════

const hobsonsChoicepaper: MockExamPaper = {
  id: 'wjec-lit-hobsons-choice',
  board: 'WJEC',
  paperNumber: 1,
  title: "Hobson's Choice: Independence and Social Constraint",
  subtitle: 'WJEC Literature A Level: Drama',
  code: 'A101/04',
  totalTimeMinutes: 120,
  totalMarks: 105,
  sections: [
    {
      id: 'hobsons-section-a',
      title: 'Section A: Textual Analysis',
      description: 'Answer ALL questions in this section.',
      totalMarks: 52,
      suggestedTimeMinutes: 60,
      questions: [
        {
          id: 'hobsons-q1',
          questionNumber: 1,
          questionText: `Analyse the characterisation of Maggie Hobson in the extract provided. How does Brackett present her determination and independence?\n\nConsider:\n- Her language and tone\n- Her relationship to conventional expectations\n- Her understanding of Will Mossop\n- The power dynamics in her exchanges with her father`,
          marks: 13,
          suggestedTimeMinutes: 20,
          questionType: 'analysis',
          extract: HOBBSONS_CHOICE_EXTRACT_1,
          extractSource: HOBBSONS_CHOICE_EXTRACT_1_SOURCE,
          modelAnswers: {
            'Grade 4-5': `Maggie is presented as very determined and independent. She says "I'm a plain woman and a hard one," which shows that she accepts who she is and doesn't apologize for it. She has made a decision to marry Will Mossop and she will carry it through. She rejects her father's opinion that she should care about her "position" in society. When he says marriage to Will is "not done," she responds that her position is what she makes it herself. This shows that she values her own judgment over social convention. She understands Will better than others do-she sees his potential and believes she can help him become a better person. Her language is direct and confident. She doesn't ask for her father's permission; she announces her intention. This makes her different from other women of her time, who would be expected to obey their fathers and follow social rules. Brackett presents her as someone willing to challenge convention for what she believes in.`,
            'Grade 6-7': `Brackett constructs Maggie as a figure of radical agency whose selfhood is constituted through active rejection of patriarchal authority. Her opening self-description-"I'm a plain woman and a hard one"-performs a kind of preemptive self-characterisation that forecloses others' judgments while establishing her as subject rather than object of evaluation. Critically, she claims access to Will's potential in ways that challenge conventional understandings of female passivity: she positions herself as the agent of Will's transformation ("when I'm done with him, he'll have the manner of a gentleman"). This inverts traditional gender relations wherein women are objects of male improvement; Maggie becomes the active, transformative force. Her explicit rejection of patriarchal authority-"My position...is what I make it"-directly contradicts her father's assertion that her position derives from his social standing. The dialogue enacts a subtle power inversion: Henry appeals to convention ("It's not done"), while Maggie appeals to selfhood and authentic desire ("I want"). Brackett's language for Maggie is notably assertive; she makes declarations rather than requests. The phrase "I'll carry it through" suggests commitment and agency. Notably, she does not defend Will against her father's implicit dismissal but rather reframes the question: the issue is not Will's social status but Maggie's right to self-determination. This linguistic strategy suggests a sophisticated understanding of the grounds on which women's agency can be claimed.`,
            'Grade 8-9': `Brackett's characterisation of Maggie instantiates what we might call a proto-feminist assertion of female agency within patriarchal structures. Her self-description-"plain" and "hard"-performs what Judith Butler would term a performative iteration: by explicitly naming qualities that patriarchal culture devalues (female plainness, female hardness), Maggie appropriates these terms as the basis for her power rather than her subjection. Her claim that she will transform Will operates through a logic of instrumental rationality that appropriates masculine prerogatives: she positions herself as the rational agent capable of shaping human potential, a position conventionally reserved for male characters. Critically, her invocation of "position" in response to Henry's invocation of social "position" articulates a fundamental distinction: she asserts the difference between position-as-conferred-by-others and position-as-self-constituted. The assertion "My position...is what I make it" claims a kind of existential freedom that transcends social determination-she refuses the logic whereby women's position is entirely constituted through familial relation. Her language is marked by parataxis and assertion rather than subordination and request. The verb forms are consistently first-person, active, future-oriented ("I'll carry it through"). The dialogue thus enacts a linguistic performance of agency that parallels the content: she claims through language itself the very power she claims in propositional content. Brackett's innovation is to suggest that female agency is possible not through conformity to patriarchal norms but through their radical rejection and reframing.`,
          },
          markScheme: [
            "Identifies key features of Maggie's characterisation",
            'Analyzes her language and tone',
            'Discusses her independence and determination',
            'Examines power dynamics with her father',
            'Considers social conventions and her rejection of them',
            'Uses subject terminology accurately',
            'Develops sustained analytical response',
          ],
        },
        {
          id: 'hobsons-q2',
          questionNumber: 2,
          questionText: `Examine how Brackett presents the relationship between Maggie and Will Mossop throughout the play. How does this relationship embody the play's themes regarding class, ambition, and personal transformation?\n\nConsider:\n- The initial class difference between them\n- How Maggie influences Will's development\n- The role of love and mutual respect in their relationship\n- How the relationship challenges social hierarchies`,
          marks: 13,
          suggestedTimeMinutes: 20,
          questionType: 'analysis',
          modelAnswers: {
            'Grade 4-5': `At the beginning of the play, Maggie is the owner's daughter and Will is a shoemaker's employee. This is a significant class difference. Will is humble and has little confidence in himself. Maggie sees something in him that no one else sees and decides to marry him. Through their relationship, Will gains confidence and becomes more ambitious. Maggie teaches him how to behave like a gentleman and how to believe in himself. Over the course of the play, Will transforms from a passive, timid man into someone with ambition and self-respect. Their relationship shows that class is not fixed-with effort and encouragement, a person can rise above their background. The play suggests that love and mutual respect are more important than social position. By marrying Maggie, Will gains not just a wife but also opportunities for improvement and self-realisation. The relationship challenges the idea that class determines a person's worth or potential. It shows that character and ambition matter more than birth or social status.`,
            'Grade 6-7': `Brackett's portrayal of Maggie and Will's relationship instantiates a complex negotiation of class and agency. Initially, the class difference is marked: Will is subordinate to Hobson professionally and socially; Maggie occupies a position of privilege. Yet Brackett subverts the logic of class hierarchy by positioning Maggie as the agent of recognition: she sees in Will capacities that his social position obscures. Her project of "improvement" is not presented as condescension but rather as mutual aspiration. Significantly, Brackett suggests that Will's transformation requires not merely external instruction but internal conviction: Maggie's belief in him activates his own self-belief. The play thus complicates simple narratives of individual advancement; it suggests that class mobility depends on both individual capacity and the recognition and support of others. Moreover, the relationship is presented as fundamentally reciprocal: Will grows through Maggie's belief, but Maggie also transforms through Will's response to her devotion. Their relationship embodies an egalitarian vision wherein class differences are presented as contingent rather than essential. By the play's conclusion, the initial class gap has been significantly narrowed: Will has become a successful businessman, and Hobson has lost authority. The relationship thus enacts a kind of levelling whereby traditional hierarchies are inverted or erased. Brackett suggests that love and mutual respect provide the basis for relationships more authentic than those based on conventional social position.`,
            'Grade 8-9': `The relationship between Maggie and Will in Brackett's play instantiates what we might call a dialogical model of subject formation: neither character's identity is fixed or prior, but rather both are continuously constituted through their reciprocal relation. Maggie's initial project of Will's improvement might appear to replicate patriarchal dynamics whereby the educated woman shapes the working-class man. Yet Brackett complicates this reading through the presentation of Will's agency: his transformation is not merely imposed by Maggie but rather activated through her recognition. This suggests a distinction between domination and enabling: Maggie provides the conditions and the belief through which Will can become himself. The class dynamic is thus reversed or complicated: while Maggie occupies an initial position of social superiority, she lacks the ability to realise her ambitions without Will's participation. The play thus suggests that class hierarchy, while real, is not determinative of deeper capacities or relationships. More radically, Brackett's treatment of the relationship suggests that authentic subjectivity is possible only through recognition by an other-through being seen and valued for one's potential rather than one's social position. By the play's conclusion, the initial class structure has been fundamentally altered: Will's success as a businessman, Maggie's exercise of autonomous will, Hobson's loss of authority-these all suggest that class positions are contingent and mutable. The play thus articulates a modernist vision wherein social hierarchy is revealed as a kind of fiction maintained through custom and convention, subject to disruption and transformation through the assertion of individual will and mutual recognition.`,
          },
          markScheme: [
            'Identifies initial class differences between characters',
            "Analyzes Maggie's influence on Will's development",
            'Discusses mutual respect and love',
            'Examines how relationship challenges hierarchies',
            'Uses specific examples from the play',
            'Considers themes of ambition and transformation',
            'Develops sustained analytical response',
          ],
        },
        {
          id: 'hobsons-q3',
          questionNumber: 3,
          questionText:
            "Evaluate Hobson's position in the play. To what extent is he presented as a villain or as a tragic figure deserving of sympathy?",
          marks: 13,
          suggestedTimeMinutes: 15,
          questionType: 'evaluation',
          modelAnswers: {
            'Grade 4-5': `Hobson is a difficult character. On one hand, he seems like a villain: he is controlling, he refuses to allow his daughters to marry the men they love, and he depends entirely on his daughters to run his business while denying them credit or authority. He is selfish and proud, and he doesn't understand his daughters as people with their own desires and ambitions. On the other hand, Brackett shows that Hobson is also a victim of his own values. He values reputation and tradition above all else, and these values destroy him. When his daughters leave, his business falls apart because he cannot operate without them. He is left alone and powerless. So while Hobson has been cruel and controlling, he is also tragic because he loses everything through his inability to change. By the end of the play, he is a broken man. Brackett presents him as someone whose pride and inflexibility lead to his downfall. He deserves some sympathy because his fate is a consequence of his own character, not simple evil.`,
            'Grade 6-7': `Hobson functions in the play as both antagonist and tragic figure. His antagonistic role is clear: his authoritarian control over his daughters, his dismissal of their desires, his exploitation of their labour without acknowledgment-these mark him as villain. Yet Brackett complicates this presentation by suggesting that Hobson's values, while destructive, are not simply self-interested: he genuinely believes in reputation, in the maintenance of social position, in the dignity of the boot and shoe trade. His resistance to his daughters' marriages stems from a conviction (however misguided) that their marriages would compromise family honour. This conviction is presented sympathetically even when its effects are harmful. Moreover, Hobson's downfall-the loss of his business, his authority, his purpose-generates a certain pathos. By the play's conclusion, Hobson is isolated, dependent on those he once controlled, stripped of the identity he has carefully constructed. Brackett thus invites a double reading: Hobson is culpable for his authoritarianism, yet he is also a victim of historical change, of the impossibility of maintaining patriarchal authority once women have asserted their independence. His tragedy lies partly in his inability to recognise and adapt to this change. The play thus suggests a more nuanced view: Hobson is neither simply a villain nor simply tragic, but rather a figure whose downfall results from his inability to recognise and value human desires different from his own.`,
            'Grade 8-9': `Hobson's characterisation in Brackett's play articulates what we might call a tragedy of ideological rigidity: he is neither simply villain nor simple innocent, but rather a subject formed by and committed to a particular world-view whose temporal moment has passed. Hobson's values-reputation, tradition, patriarchal authority, the maintenance of social position-are not idiosyncratic but rather instantiate a particular historical moment of petit-bourgeois commerce. His crime is not desire for power (which is universal) but rather his refusal to recognise that others might have legitimate desires and values different from his own. His treatment of his daughters is indeed authoritarian and exploitative, yet it is presented as consistent with his entire worldview: he values reputation and order above individual satisfaction. This does not excuse his actions but rather contextualises them within a framework of meaningful, if destructive, commitment. The play's tragic dimension emerges in Hobson's inability to adapt as the world changes. His downfall is not punishment for wrongdoing but rather the necessary consequence of his refusal to recognise the legitimacy of others' agency. By the play's conclusion, the world he has built-one in which he possesses unquestioned authority-has been dismantled by those he sought to control. This produces a kind of tragic irony: Hobson loses everything precisely because he could not allow his daughters what they needed to be themselves. The play thus articulates a complex historical vision wherein progress (the assertion of female agency, the disruption of patriarchal authority) necessarily involves the destruction of those formations of meaning (tradition, hierarchy, reputation) that formerly structured the world. Hobson deserves sympathy not because his actions are excusable but because his downfall registers genuine historical loss: the loss of a world and a way of life, even as that loss enables human freedom.`,
          },
          markScheme: [
            "Identifies Hobson's role as antagonist and tragic figure",
            'Discusses his values and motivations',
            'Examines evidence of villainy',
            'Considers his downfall and loss',
            'Analyzes the basis for sympathy',
            'Uses specific textual examples',
            'Develops nuanced, supported argument',
          ],
        },
        {
          id: 'hobsons-q4',
          questionNumber: 4,
          questionText:
            "Analyse how Brackett uses humour in Hobson's Choice. What is the function of humour in the play, and how does it contribute to its themes?",
          marks: 13,
          suggestedTimeMinutes: 15,
          questionType: 'analysis',
          modelAnswers: {
            'Grade 4-5': `Brackett uses humour throughout the play, often derived from the gap between what characters say and what they actually mean or do. For example, Hobson speaks about his daughters' respectability while treating them as servants. There is also humour in Will's awkwardness and his gradual development. The humour often comes from situations that are uncomfortable or embarrassing-for instance, the scenes where Will must learn to behave like a gentleman are funny because he is trying so hard and does things wrong. The function of the humour is to make potentially difficult or serious situations more entertaining and accessible to the audience. It also helps us see the characters' flaws more clearly: Hobson's hypocrisy, Maggie's determination, Will's initial lack of confidence. The humour prevents the play from becoming too serious or heavy, while still allowing us to engage with the serious themes about independence, class, and social change. It softens the critique of Hobson while making the characters' struggles more moving.`,
            'Grade 6-7': `Brackett employs humour as a primary structural and thematic device. Much of the humour arises from dramatic irony: the audience understands dynamics that the characters themselves fail to perceive. For instance, Hobson boasts of his independence and the success of his business, yet his entire operation depends on his daughters' labour-a contradiction that generates comedy precisely because Hobson remains unaware of it. Humour also derives from character incongruity: Maggie's determination expressed through the conventional language of domestic duty produces an amusing collision; Will's attempt to become gentlemanly through awkward imitation generates comedy. The function of this humour is complex: it entertains, certainly, but it also performs analytical work. The comedy of Hobson's obliviousness makes visible the structures of patriarchal exploitation; we laugh at his hypocrisy, which facilitates our critical distance from his worldview. Moreover, the humour prevents the play from becoming sentimentalised: the romance between Maggie and Will remains grounded in comic practicality. The play thus uses humour to make its ideological critique palatable: rather than preaching about female agency or class mobility, Brackett allows the humour to do the work of exposing incongruities and falsities. The laughter thus becomes a form of critical consciousness-we laugh because we recognise the gap between ideological claims and social realities.`,
            'Grade 8-9': `Brackett's use of humour in Hobson's Choice performs what we might call a "carnivalisation" of social hierarchy: it temporarily inverts and destabilises the power relations that normally structure the world. The humour frequently operates through what Bakhtin terms "grotesque realism": the exposure of the material dependencies underlying supposedly elevated positions. We laugh when Hobson's dignity is compromised, when his elaborate pronouncements about his daughters' duties are revealed to depend entirely on their labour, when his independence is exposed as a fantasy. This humour is not merely entertainment but rather a form of critical knowledge: it makes visible what sober analysis might miss-the fundamental contradictions between Hobson's self-understanding and his actual social position. Moreover, the humour performs what we might call an egalitarian function: by making the merchant class and working class figure ridiculous, it levels social distinctions. Will's awkwardness, Maggie's bluntness, Hobson's pomposity-all are presented as equally deserving of comic treatment. The humour thus enacts a kind of democratic vision in which no position is above critique. Furthermore, the humour facilitates what might otherwise be ideologically dangerous or threatening: the assertion of female agency, the inversion of class relations, the disruption of patriarchal authority. By making these things comic rather than tragic, Brackett renders them entertaining and acceptable to an audience that might otherwise resist them. The laughter thus becomes a form of ideological work, allowing the audience to internalise radical ideas (female independence, class mobility) while experiencing them as entertainment rather than as political threat. Brackett's genius lies in mobilising humour as a vehicle for critique while maintaining the play's accessibility and entertainment value.`,
          },
          markScheme: [
            'Identifies different types of humour in the play',
            'Analyzes sources of comedy',
            'Discusses function of humour',
            'Examines contribution to themes',
            'Uses specific examples',
            'Considers audience response',
            'Develops analytical response with clear argument',
          ],
        },
      ],
    },
    {
      id: 'hobsons-section-b',
      title: 'Section B: Extended Response',
      description: 'Answer ONE question from this section.',
      totalMarks: 53,
      suggestedTimeMinutes: 60,
      questions: [
        {
          id: 'hobsons-q5',
          questionNumber: 5,
          questionText: `Discuss the presentation of female agency in Hobson's Choice. How does Brackett's portrayal of his female characters compare to other texts you have studied?`,
          marks: 53,
          suggestedTimeMinutes: 60,
          questionType: 'comparison',
          modelAnswers: {
            'Grade 4-5': `Hobson's Choice presents female characters, particularly Maggie, who exercise significant agency and control their own destinies. Maggie decides to marry Will without her father's permission, and she helps him improve himself. Her sisters also escape their father's control by getting married. This presentation of female agency is progressive for its time. Compared to [other text], where female characters [are more passive/constrained/etc.], Brackett's women are more active and self-determined. Both texts present women navigating male-dominated worlds, but Hobson's Choice emphasises women's ability to shape their own futures. [Other text] presents women more as [victims/constrained by etc.]. However, both texts suggest that female agency must operate within constraints-women must work around male authority rather than directly challenging it. Both texts present this negotiation, though in different ways. Brackett's play is more optimistic about female possibility than [other text].`,
            'Grade 6-7': `Brackett's presentation of female agency in Hobson's Choice is notably progressive: women are not mere objects of male will but rather active agents capable of shaping their destinies. Maggie's assertion of independence-her refusal to be controlled by her father, her active role in Will's transformation-positions her as protagonist of her own narrative rather than subordinate within a male-centred story. Her sisters, while less forceful, also claim agency by rejecting their father's authority. This presentation contrasts with [other text], where female characters [present conditions/constraints]. In [other text], [female characters are positioned as...]. Yet both texts negotiate the question of how female agency is possible within patriarchal structures. Where Brackett suggests that female agency requires the active rejection of patriarchal authority (Maggie leaves her father, establishes her own household), [other writer] suggests [different approach]. Both texts ultimately suggest that female agency is not given but rather must be actively claimed, yet they differ in their assessment of the possibilities available to women. Brackett's vision is more optimistic; [other writer]'s is more tragic. This difference may reflect the historical moments in which the texts were produced or the specific ideologies they advance.`,
            'Grade 8-9': `Brackett's treatment of female agency in Hobson's Choice instantiates what we might call a progressive rewriting of patriarchal narrative conventions: rather than positioning women as objects of male desire or authority, he makes them subjects of their own narratives, agents of transformation both for themselves and for others. Maggie's agency operates on multiple registers: she exercises control over her own future (the decision to marry), she shapes another's development (Will's transformation), and she disrupts patriarchal authority (her father's loss of power). Critically, her agency is not presented as requiring the abandonment of femininity or traditional domestic roles; rather, it emerges through the intelligent deployment of conventional female positions. Her understanding of Will's potential, her patient guidance of his development, her organisation of his business-these are coded as traditionally feminine activities, yet they become the basis for power and agency. This represents a sophisticated understanding of how women might achieve agency not through direct confrontation of patriarchal structures but through strategic deployment of the positions those structures make available. The presentation of her sisters, while more conventional, nonetheless registers female refusal of patriarchal control. In comparison with [other text], where female characters [are constrained by...], Brackett's vision is markedly more optimistic about the possibilities of female agency. Yet this optimism may itself be ideologically significant: by suggesting that female agency is readily available through individual will and intelligence, Brackett may obscure the systemic constraints that limit most women's possibilities. [Other writer]'s more tragic presentation of female constraint might thus represent a more honest reckoning with historical reality. Nonetheless, Brackett's play remains remarkable in its assertion that female agency is possible and desirable, that women's claim to self-determination is both legitimate and achievable.`,
          },
          markScheme: [
            "Identifies presentation of female agency in Hobson's Choice",
            "Discusses specific examples of female characters' agency",
            'Compares to another text',
            'Analyzes how female agency is achieved',
            'Uses detailed textual evidence from both texts',
            'Considers different historical or ideological perspectives',
            'Develops sustained comparison with clear argument',
            'Reaches well-supported conclusion',
          ],
        },
      ],
    },
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
// Continue in next chunk...
// ═══════════════════════════════════════════════════════════════════════════
