// DRAFT — AWAITING ENGLISH-TEACHER REVIEW
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'Hamlet — Study Guide | The English Hub',
  description:
    'In-depth study guide for Hamlet by William Shakespeare: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/hamlet',
  },
}

const data: TextGuideData = {
  title: 'Hamlet',
  author: 'William Shakespeare',
  year: 'c. 1599\u20131601',
  category: 'Play',
  badge: 'AQA A-Level / Edexcel A-Level / OCR A-Level / Eduqas A-Level',
  intro:
    'Shakespeare\u2019s longest and most philosophically searching tragedy, Hamlet follows a young prince of Denmark commanded by his father\u2019s ghost to avenge a secret murder. Written around 1599\u20131601, at the turn of a new century and the end of the Elizabethan age, the play takes the conventions of the revenge tragedy and turns them inwards, producing a protagonist who cannot simply act. Hamlet delays, philosophises, stages a play, feigns madness, and agonises over the meaning of existence itself. The play explores the collapse of a court corrupted from within, the unstable boundary between performance and truth, and the tension between moral thought and violent action. Its central soliloquies \u2014 including "To be, or not to be" \u2014 have become defining statements of existential crisis in Western literature. Hamlet appears on every major A-Level specification and remains Shakespeare\u2019s most quoted and most debated play.',
  quickInfo: {
    genre: 'Revenge tragedy',
    setting: 'Elsinore Castle, Denmark',
    length: '5-act play (Shakespeare\u2019s longest, ~4,000 lines)',
    published: 'First quarto 1603 (bad); Second quarto 1604/05; First folio 1623',
  },
  plotSummary: [
    'The play opens on the battlements of Elsinore Castle, where guards have seen the ghost of the recently deceased King Hamlet. Prince Hamlet, still in mourning, is bitter about his mother Gertrude\u2019s hasty remarriage to his uncle Claudius, who has taken the throne. The Ghost appears to Hamlet and reveals that Claudius poisoned him while he slept in the orchard, demanding that Hamlet take revenge \u2014 but spare Gertrude. Shaken and uncertain whether the Ghost is honest or a demonic trick, Hamlet resolves to feign an "antic disposition" to conceal his intentions while he investigates.',
    'As Hamlet\u2019s erratic behaviour unsettles the court, Polonius, the lord chamberlain, decides it is love-madness caused by his daughter Ophelia, whom Hamlet has been courting. Polonius and Claudius spy on the couple, and Hamlet cruelly rejects Ophelia, telling her to "get thee to a nunnery." To test the Ghost\u2019s story, Hamlet stages a play \u2014 "The Mousetrap" \u2014 that re-enacts the murder. Claudius\u2019s guilty reaction confirms his guilt. Shortly afterwards, Hamlet confronts Gertrude in her closet; hearing a noise behind the arras and assuming it is Claudius, he stabs and kills Polonius. Claudius, now alarmed, sends Hamlet to England with his childhood friends Rosencrantz and Guildenstern, carrying sealed orders for Hamlet\u2019s execution.',
    'In Hamlet\u2019s absence, Ophelia descends into genuine madness, singing fragmented songs and distributing symbolic flowers. She drowns in a brook under circumstances Gertrude describes as possibly accidental, possibly suicidal. Laertes, Ophelia\u2019s brother, returns from France burning for revenge against Hamlet for killing his father. Claudius manipulates his grief, proposing a fencing match in which Laertes will use a poison-tipped sword. Meanwhile Hamlet, having discovered the death warrant at sea, rewrites it to condemn Rosencrantz and Guildenstern instead and escapes back to Denmark after a pirate encounter.',
    'Hamlet returns to find gravediggers preparing Ophelia\u2019s grave. In the famous graveyard scene he contemplates the skull of Yorick, the court jester, and meditates on the universal levelling power of death. Ophelia\u2019s funeral procession arrives; Hamlet and Laertes grapple in her grave. The duel is arranged. In the final scene, Gertrude drinks from a poisoned cup Claudius intended for Hamlet. Laertes wounds Hamlet with the envenomed blade; the swords are switched and Hamlet wounds Laertes in turn. As they die, Laertes confesses the plot. Hamlet stabs Claudius and forces him to drink the poison. Hamlet dies in Horatio\u2019s arms, asking him to "tell my story." The Norwegian prince Fortinbras arrives to find the Danish court destroyed and claims the throne.',
  ],
  characters: [
    {
      name: 'Hamlet',
      role: 'Prince of Denmark; son of the murdered King Hamlet and Gertrude',
      body: 'Hamlet is one of the most complex characters in English literature: intellectual, witty, grief-stricken and prone to self-laceration. He is commanded to act but consumed by the question of whether action is ever justified. His seven soliloquies give the audience privileged access to a mind thinking aloud, moving between rage, despair, self-mockery and philosophical speculation. Shakespeare uses Hamlet to explore the limits of moral thought: the more clearly he sees the corruption around him, the harder it becomes to act decisively within it.',
    },
    {
      name: 'Claudius',
      role: 'King of Denmark; Hamlet\u2019s uncle and stepfather',
      body: 'Claudius is a skilled political operator whose charm and fluency mask a fratricide. Shakespeare gives him a genuine soliloquy in Act 3 in which he tries, and fails, to repent for the murder of his brother, revealing a conscience he cannot escape. As the play progresses he becomes increasingly ruthless, engineering Hamlet\u2019s execution, manipulating Laertes, and poisoning the final duel. He represents the corruption at the heart of the state: eloquent, public-facing, and rotten beneath.',
    },
    {
      name: 'Gertrude',
      role: 'Queen of Denmark; Hamlet\u2019s mother, remarried to Claudius',
      body: 'Gertrude remarries Claudius within a month of her husband\u2019s death, a speed Hamlet finds obscene. Shakespeare leaves her complicity in the murder deliberately ambiguous; the Ghost warns Hamlet to leave her judgement to heaven. In the closet scene she appears genuinely shaken by Hamlet\u2019s accusations. Her final act \u2014 drinking the poisoned cup, possibly knowingly \u2014 allows a reading of quiet maternal sacrifice. Critics have disagreed for centuries about whether she is weak, guilty, or simply trapped.',
    },
    {
      name: 'Ophelia',
      role: 'Daughter of Polonius; Hamlet\u2019s former beloved',
      body: 'Ophelia is obedient, gentle and caught between the men who claim authority over her: her father Polonius, her brother Laertes, and Hamlet himself. She is instructed to reject Hamlet\u2019s advances and then used as bait to spy on him. When her father is killed by her lover, her mind breaks. Her mad scenes \u2014 singing bawdy songs and distributing flowers \u2014 have been read by feminist critics as a suppressed voice finally speaking. Her drowning, reported by Gertrude in lyrical verse, is the play\u2019s most haunting offstage event.',
    },
    {
      name: 'Polonius',
      role: 'Lord Chamberlain; father of Ophelia and Laertes',
      body: 'Polonius is a pompous, long-winded courtier who dispenses proverbial advice ("to thine own self be true") while scheming behind every curtain. Shakespeare uses him for much of the play\u2019s comedy, but also to show how surveillance and political micromanagement corrode the court. His compulsive spying leads directly to his own death: Hamlet stabs him through the arras in Gertrude\u2019s closet, mistaking him for Claudius. His killing is the moment from which every remaining tragedy follows.',
    },
    {
      name: 'Laertes',
      role: 'Son of Polonius; brother of Ophelia',
      body: 'Laertes is often read as a foil to Hamlet: decisive, action-oriented and quick to revenge. When he learns of his father\u2019s death he returns from France at the head of a rebellion and immediately demands vengeance. Yet his willingness to act makes him easy to manipulate; Claudius turns his grief into a weapon. In the final scene, poisoned by his own plot, Laertes confesses the truth and forgives Hamlet, providing the moral clarity Hamlet has struggled to achieve.',
    },
    {
      name: 'Horatio',
      role: 'Hamlet\u2019s close friend; a scholar from Wittenberg',
      body: 'Horatio is the play\u2019s voice of rational scepticism and loyal friendship. Hamlet praises him for being "not passion\u2019s slave" \u2014 a man whose reason governs his feeling. He is the one Hamlet trusts to test the Ghost\u2019s guilt, the one he confides in after returning from the sea, and the one he asks to survive and tell his story. Horatio is the sole major character left standing at the end, giving the play a witness to carry its meaning outward.',
    },
    {
      name: 'The Ghost',
      role: 'The spirit of the murdered King Hamlet',
      body: 'The Ghost sets the plot in motion, commanding Hamlet to revenge his "foul and most unnatural murder." Shakespeare leaves his status deliberately uncertain: Hamlet wonders whether the spirit is truly his father or a devil tempting him to damnation, a question rooted in the theological anxieties of post-Reformation England. The Ghost appears three times, finally reappearing in Gertrude\u2019s closet \u2014 unseen by her \u2014 to sharpen Hamlet\u2019s resolve. He is both grieving father and terrifying messenger from beyond.',
    },
  ],
  themes: [
    {
      title: 'Revenge and delay',
      body: 'Hamlet is framed as a revenge tragedy but repeatedly frustrates the genre\u2019s expectations. Where the conventional avenger acts swiftly, Hamlet thinks, questions and procrastinates. Shakespeare surrounds him with foils who do act \u2014 Laertes returns immediately to avenge Polonius; Fortinbras leads armies to reclaim lost land \u2014 throwing Hamlet\u2019s paralysis into relief. Critics have offered many explanations: moral scruple, Christian anxiety about damnation, Oedipal attachment to Gertrude, or an intellectual inability to settle on a single interpretation of events. The delay itself becomes the subject of the play, forcing the audience to examine what revenge costs the avenger.',
    },
    {
      title: 'Madness \u2014 real and performed',
      body: 'Madness runs throughout the play as both strategy and consequence. Hamlet adopts an "antic disposition" as a cover for his investigation, but his performances become increasingly difficult to distinguish from genuine disturbance. Polonius famously observes "Though this be madness, yet there is method in\u2019t," registering the ambiguity. Ophelia\u2019s madness, by contrast, is unambiguously real \u2014 a disintegration caused by grief, male manipulation and the unbearable fact of her lover killing her father. Shakespeare contrasts performed and authentic madness to ask what sanity means in a court where everyone is lying.',
    },
    {
      title: 'Death and mortality',
      body: 'Hamlet is saturated with death: a ghost, a murder, a drowning, a stabbing, multiple poisonings. The "To be, or not to be" soliloquy interrogates suicide as a philosophical option, weighing the pain of existence against the unknown terrors of what follows. The graveyard scene \u2014 Hamlet holding Yorick\u2019s skull, imagining the dust of Alexander stopping a beer barrel \u2014 meditates on death as the great leveller that makes kings and jesters indistinguishable. Shakespeare uses these moments to place revenge within a vast existential frame, asking whether any earthly action can matter in the face of mortality.',
    },
    {
      title: 'Appearance vs reality',
      body: 'The court of Elsinore runs on surveillance, disguise and performance. Claudius performs kingly grief while concealing murder; Polonius hides behind arrases; Rosencrantz and Guildenstern pose as friends while spying for the crown; Hamlet himself performs madness. Shakespeare uses the recurring motifs of acting, watching and masks \u2014 including the embedded play-within-a-play \u2014 to ask how truth can be found in a world where everyone performs. Hamlet\u2019s instinct that "seeming" is universal and dangerous underlies much of his philosophical paralysis.',
    },
    {
      title: 'Corruption and decay',
      body: 'Marcellus\u2019s line "Something is rotten in the state of Denmark" establishes the play\u2019s dominant metaphor: the kingdom as a diseased body. Shakespeare fills the text with images of disease, weeds, ulcers, poison and putrefaction, suggesting that the murder at the top has infected the whole state. Claudius\u2019s crime is not only personal but political, disordering the succession and poisoning the court. The final scene, in which the royal family dies together by literal poison, literalises the metaphor: the rot that began in secret becomes visible at the cost of everyone\u2019s lives.',
    },
    {
      title: 'Family and duty',
      body: 'The play is built around three fractured father-son relationships: Hamlet and the murdered king, Laertes and Polonius, and Fortinbras and his own deceased father. Each son is called to avenge his father, and the play contrasts their responses. Hamlet also confronts complicated duties to his mother, to his former lover Ophelia, and to the state. Shakespeare examines how filial obligation becomes coercive when it demands violence: the Ghost\u2019s command binds Hamlet to a code that destroys him. The play asks whether loyalty to the dead can ever be reconciled with responsibility to the living.',
    },
  ],
  historicalContext: [
    'Shakespeare wrote Hamlet around 1599\u20131601, at the turn of the century and near the end of Elizabeth I\u2019s long reign. The play\u2019s source is ultimately the legend of Amleth in Saxo Grammaticus\u2019s twelfth-century Gesta Danorum, reaching Shakespeare through Fran\u00e7ois de Belleforest\u2019s Histoires Tragiques (1570). An earlier Elizabethan play on the same story \u2014 the so-called Ur-Hamlet, now lost and possibly by Thomas Kyd \u2014 almost certainly influenced Shakespeare\u2019s version. Kyd\u2019s The Spanish Tragedy had established the English revenge-play tradition, with its ghost demanding vengeance, its delayed avenger, its feigned madness and its bloody finale. Shakespeare both uses and radically interiorises these conventions.',
    'The play emerges out of the religious uncertainty of post-Reformation England. Protestant doctrine had officially abolished Purgatory, yet the Ghost describes himself as suffering for "the foul crimes done in my days of nature" \u2014 a distinctly Catholic image. Hamlet\u2019s hesitation about whether the Ghost is honest or demonic reflects genuine Elizabethan anxieties about spirits: a devil could take the shape of a dead loved one to tempt the living into damnation. Hamlet\u2019s refusal to kill Claudius at prayer, for fear of sending him to heaven, depends on a theology his Protestant audience had been taught to distrust even while they understood it.',
    'The play also echoes the political unease of its moment. Elizabeth was ageing and childless, and the succession was openly contested. In February 1601 the Earl of Essex launched his short-lived rebellion against the Queen; Shakespeare\u2019s company was briefly implicated when supporters of Essex commissioned a revival of Richard II on the eve of the rising. A play about usurpation, a diseased court, an uncertain succession and a young man caught between his father\u2019s authority and his own conscience carried a charge no Elizabethan audience could have missed. Hamlet\u2019s Denmark \u2014 rotten, watched, militarised on the edge of foreign invasion \u2014 holds up a mirror to the England of 1601.',
  ],
  quotations: [
    {
      quote: '"To be, or not to be, that is the question."',
      who: 'Hamlet \u2014 Act 3, Scene 1',
      analysis:
        'The play\u2019s most famous line opens a soliloquy weighing existence against suicide, framing suffering as a philosophical problem rather than a personal one.',
    },
    {
      quote: '"Something is rotten in the state of Denmark."',
      who: 'Marcellus \u2014 Act 1, Scene 4',
      analysis:
        'Marcellus\u2019s line establishes the play\u2019s dominant metaphor of the kingdom as a diseased body, with corruption at the top infecting the whole state.',
    },
    {
      quote: '"Though this be madness, yet there is method in\u2019t."',
      who: 'Polonius \u2014 Act 2, Scene 2',
      analysis:
        'Polonius registers the central ambiguity of Hamlet\u2019s behaviour, unintentionally voicing the audience\u2019s question about whether the prince is feigning or breaking.',
    },
    {
      quote: '"The lady doth protest too much, methinks."',
      who: 'Gertrude \u2014 Act 3, Scene 2',
      analysis:
        'Watching the Player Queen swear fidelity, Gertrude\u2019s comment lands with ironic weight given her own hasty remarriage; Shakespeare makes her the unwitting critic of herself.',
    },
    {
      quote: '"Get thee to a nunnery."',
      who: 'Hamlet \u2014 Act 3, Scene 1',
      analysis:
        'Hamlet\u2019s cruel dismissal of Ophelia has a double edge \u2014 "nunnery" was Elizabethan slang for brothel \u2014 fusing rejection with bitter misogyny about female sexuality.',
    },
    {
      quote: '"Alas, poor Yorick! I knew him, Horatio."',
      who: 'Hamlet \u2014 Act 5, Scene 1',
      analysis:
        'Holding the jester\u2019s skull, Hamlet confronts death as the great leveller; memory and laughter are reduced to bone, setting up the philosophical tone of the final act.',
    },
    {
      quote: '"Goodnight, sweet prince, / And flights of angels sing thee to thy rest."',
      who: 'Horatio \u2014 Act 5, Scene 2',
      analysis:
        'Horatio\u2019s farewell grants Hamlet a Christian blessing denied to almost everyone else in the play, letting the audience say goodbye to the protagonist with tenderness.',
    },
    {
      quote: '"O, what a rogue and peasant slave am I!"',
      who: 'Hamlet \u2014 Act 2, Scene 2',
      analysis:
        'Comparing himself to the actor who can weep for Hecuba, Hamlet turns his self-contempt into performance criticism, exposing the gap between feeling and action that defines him.',
    },
    {
      quote: '"What a piece of work is a man."',
      who: 'Hamlet \u2014 Act 2, Scene 2',
      analysis:
        'The great Renaissance paean to human dignity is placed in the mouth of a man who no longer believes it \u2014 Hamlet ends the speech calling humanity a "quintessence of dust."',
    },
    {
      quote: '"Frailty, thy name is woman."',
      who: 'Hamlet \u2014 Act 1, Scene 2',
      analysis:
        'Hamlet\u2019s disgust at Gertrude\u2019s remarriage is generalised into a misogynistic aphorism; Shakespeare shows the prince\u2019s grief curdling into contempt for female sexuality.',
    },
    {
      quote: '"The rest is silence."',
      who: 'Hamlet \u2014 Act 5, Scene 2',
      analysis:
        'Hamlet\u2019s dying words refuse the long speeches that have defined him, leaving the play\u2019s unanswered metaphysical questions deliberately unspoken.',
    },
    {
      quote: '"The time is out of joint \u2014 O cursed spite, / That ever I was born to set it right!"',
      who: 'Hamlet \u2014 Act 1, Scene 5',
      analysis:
        'Immediately after the Ghost\u2019s revelation, Hamlet frames his mission as restoring a dislocated world \u2014 an impossibly large task that foreshadows his paralysis.',
    },
    {
      quote: '"O, my offence is rank, it smells to heaven."',
      who: 'Claudius \u2014 Act 3, Scene 3',
      analysis:
        'Claudius\u2019s prayer soliloquy gives the audience unambiguous proof of his guilt and humanises him, complicating the moral clarity Hamlet needs to act.',
    },
    {
      quote: '"The play\u2019s the thing / Wherein I\u2019ll catch the conscience of the King."',
      who: 'Hamlet \u2014 Act 2, Scene 2',
      analysis:
        'Hamlet turns theatre into forensic instrument, announcing the Mousetrap plan and exposing Shakespeare\u2019s own faith in drama as a way of reaching the truth.',
    },
    {
      quote: '"Now might I do it pat, now he is praying."',
      who: 'Hamlet \u2014 Act 3, Scene 3',
      analysis:
        'Hamlet finds Claudius apparently at prayer and refuses to kill him, fearing he would send his soul to heaven \u2014 a theological reasoning that becomes his fatal delay.',
    },
    {
      quote: '"How all occasions do inform against me, / And spur my dull revenge!"',
      who: 'Hamlet \u2014 Act 4, Scene 4',
      analysis:
        'Watching Fortinbras\u2019s army march for a worthless patch of ground, Hamlet measures himself against a man of action and finds himself intolerably wanting.',
    },
    {
      quote: '"There\u2019s a divinity that shapes our ends, / Rough-hew them how we will."',
      who: 'Hamlet \u2014 Act 5, Scene 2',
      analysis:
        'After surviving the voyage to England, Hamlet arrives at a calmer providential view; his philosophical restlessness gives way to a kind of religious acceptance before the final scene.',
    },
    {
      quote: '"There is nothing either good or bad, but thinking makes it so."',
      who: 'Hamlet \u2014 Act 2, Scene 2',
      analysis:
        'Spoken to Rosencrantz and Guildenstern, the line captures Hamlet\u2019s relativism and his tendency to dissolve moral certainties under analysis \u2014 a mindset that hinders revenge.',
    },
    {
      quote: '"This above all: to thine own self be true."',
      who: 'Polonius \u2014 Act 1, Scene 3',
      analysis:
        'Polonius\u2019s advice to Laertes sounds noble but is undercut by the speaker\u2019s own hypocrisy; Shakespeare turns proverbial wisdom into characterisation of a meddling courtier.',
    },
    {
      quote: '"There are more things in heaven and earth, Horatio, / Than are dreamt of in your philosophy."',
      who: 'Hamlet \u2014 Act 1, Scene 5',
      analysis:
        'Hamlet rebukes his friend\u2019s scepticism after the Ghost\u2019s appearance, asserting that rational philosophy cannot account for everything \u2014 a claim the play will test relentlessly.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 'ham-1', question: 'Who does the Ghost reveal murdered King Hamlet?', type: 'multiple-choice', options: ['Polonius', 'Claudius', 'Fortinbras', 'Laertes'], correctIndex: 1, explanation: 'The Ghost reveals that Claudius, his own brother, poisoned him while he slept in the orchard. This sets in motion Hamlet\'s mission of revenge.', topic: 'Plot', difficulty: 'foundation' },
  { id: 'ham-2', question: 'What is Hamlet\'s relationship to Claudius?', type: 'multiple-choice', options: ['Brother', 'Cousin', 'Uncle and stepfather', 'Grandson'], correctIndex: 2, explanation: 'Claudius is Hamlet\'s uncle (his father\'s brother) and, after marrying Gertrude, also his stepfather. Gertrude remarries within a month of King Hamlet\'s death, a speed Hamlet finds obscene.', topic: 'Characters', difficulty: 'foundation' },
  { id: 'ham-3', question: 'Where is the play set?', type: 'multiple-choice', options: ['Verona, Italy', 'Elsinore Castle, Denmark', 'London, England', 'Paris, France'], correctIndex: 1, explanation: 'The play is set at Elsinore Castle in Denmark. The Danish court is depicted as corrupt, watched, and militarised \u2014 "something is rotten in the state of Denmark."', topic: 'Plot', difficulty: 'foundation' },
  { id: 'ham-4', question: 'Who does Hamlet accidentally kill behind the arras in Gertrude\'s closet?', type: 'multiple-choice', options: ['Claudius', 'Horatio', 'Polonius', 'Rosencrantz'], correctIndex: 2, explanation: 'Hamlet hears a noise behind the arras and stabs through it, assuming it is Claudius. It is in fact Polonius, who has been spying. This killing triggers the second half of the tragedy.', topic: 'Plot', difficulty: 'foundation' },
  { id: 'ham-5', question: 'What is "The Mousetrap"?', type: 'multiple-choice', options: ['A weapon', 'A play Hamlet stages to catch Claudius\'s conscience', 'A nickname for Polonius', 'A secret passage in the castle'], correctIndex: 1, explanation: 'Hamlet stages a play that re-enacts King Hamlet\'s murder to test the Ghost\'s story. Claudius\'s guilty reaction confirms his guilt: "The play\'s the thing / Wherein I\'ll catch the conscience of the King."', topic: 'Plot', difficulty: 'foundation' },
  { id: 'ham-6', question: 'How does Ophelia die?', type: 'multiple-choice', options: ['Poisoned by Claudius', 'Killed in a duel', 'Drowns in a brook, reported by Gertrude', 'Dies of a broken heart onstage'], correctIndex: 2, explanation: 'Ophelia drowns in a brook in Act 4. The death happens offstage and is reported by Gertrude in a lyrical speech. Whether the drowning is accidental or suicidal is left deliberately ambiguous.', topic: 'Plot', difficulty: 'foundation' },
  { id: 'ham-7', question: 'Who says "Something is rotten in the state of Denmark"?', type: 'multiple-choice', options: ['Hamlet', 'Horatio', 'Marcellus', 'The Ghost'], correctIndex: 2, explanation: 'Marcellus speaks the line in Act 1 Scene 4, establishing the play\'s dominant metaphor: the kingdom as a diseased body, with corruption spreading from the top.', topic: 'Writer\'s Methods', difficulty: 'foundation' },
  { id: 'ham-8', question: 'Who arrives at the end of the play to find the Danish court dead?', type: 'multiple-choice', options: ['Laertes', 'Fortinbras', 'Rosencrantz', 'The Ghost'], correctIndex: 1, explanation: 'Fortinbras, the Norwegian prince, arrives to find Claudius, Gertrude, Laertes and Hamlet all dead. He claims the throne of Denmark, providing a political resolution to the chaos.', topic: 'Plot', difficulty: 'foundation' },
  { id: 'ham-9', question: 'What happens to Rosencrantz and Guildenstern?', type: 'multiple-choice', options: ['They flee Denmark', 'Hamlet rewrites the sealed orders so they are executed in England instead of him', 'They duel Laertes', 'They become loyal to Hamlet'], correctIndex: 1, explanation: 'Claudius sends Hamlet to England with sealed orders for his execution, carried by Rosencrantz and Guildenstern. Hamlet discovers the orders at sea and rewrites them, condemning his former friends instead.', topic: 'Plot', difficulty: 'higher' },
  { id: 'ham-10', question: 'What does Hamlet mean by "antic disposition"?', type: 'multiple-choice', options: ['A fashion style', 'A feigned madness used as a cover while he investigates Claudius', 'A genuine mental breakdown', 'A formal courtly manner'], correctIndex: 1, explanation: 'Hamlet decides to put on an "antic disposition" \u2014 feigned madness \u2014 to conceal his intentions and investigate the Ghost\'s claims. The performance becomes increasingly hard to distinguish from real disturbance.', topic: 'Themes', difficulty: 'higher' },
  { id: 'ham-11', question: 'Why does Hamlet refuse to kill Claudius when he finds him praying?', type: 'multiple-choice', options: ['Claudius has guards nearby', 'He fears killing Claudius mid-prayer would send his soul to heaven', 'Horatio stops him', 'He is not convinced Claudius is guilty'], correctIndex: 1, explanation: 'Hamlet reasons that killing Claudius while he prays would send his soul to heaven \u2014 an inadequate revenge for a man who murdered King Hamlet "full of bread." The theological reasoning is one of his fatal delays.', topic: 'Themes', difficulty: 'higher' },
  { id: 'ham-12', question: 'Who says "Though this be madness, yet there is method in\'t"?', type: 'multiple-choice', options: ['Hamlet', 'Claudius', 'Polonius', 'Gertrude'], correctIndex: 2, explanation: 'Polonius observes this about Hamlet\'s behaviour in Act 2 Scene 2, inadvertently voicing the audience\'s central question: is Hamlet truly mad or performing madness?', topic: 'Writer\'s Methods', difficulty: 'higher' },
  { id: 'ham-13', question: 'How does Laertes function as a foil to Hamlet?', type: 'multiple-choice', options: ['He is indecisive like Hamlet', 'He acts swiftly on his desire for revenge while Hamlet delays, highlighting Hamlet\'s paralysis', 'He is a philosopher like Hamlet', 'He has no relationship to Hamlet\'s arc'], correctIndex: 1, explanation: 'Laertes returns from France at the head of a rebellion immediately upon hearing of his father\'s death. His decisive action throws Hamlet\'s philosophical delay into sharp relief \u2014 both sons must avenge murdered fathers.', topic: 'Characters', difficulty: 'higher' },
  { id: 'ham-14', question: 'What is the dramatic significance of Ophelia\'s mad scenes?', type: 'multiple-choice', options: ['They provide comic relief', 'Her madness is unambiguously real, contrasting with Hamlet\'s performed madness and dramatising female powerlessness', 'They are unimportant to the plot', 'They reveal she is faking grief'], correctIndex: 1, explanation: 'Unlike Hamlet\'s "antic disposition," Ophelia\'s madness is a genuine breakdown caused by grief and manipulation. Feminist critics read her fragmented songs and symbolic flowers as a suppressed female voice finally speaking.', topic: 'Characters', difficulty: 'higher' },
  { id: 'ham-15', question: 'What is the significance of the graveyard scene with Yorick\'s skull?', type: 'multiple-choice', options: ['It provides comic relief only', 'Hamlet confronts death as the great leveller that makes kings and jesters indistinguishable, framing the final act philosophically', 'It reveals a new murder', 'It is a flashback'], correctIndex: 1, explanation: 'Holding the court jester\'s skull, Hamlet meditates on mortality: memory, laughter and power are all reduced to bone. He imagines the dust of Alexander stopping a beer barrel, placing revenge within a vast existential frame.', topic: 'Themes', difficulty: 'higher' },
  { id: 'ham-16', question: 'How does Shakespeare use the motif of appearance vs reality?', type: 'multiple-choice', options: ['Everyone in the play is entirely honest', 'The court runs on surveillance, disguise and performance \u2014 Claudius performs grief, Polonius hides behind arrases, Hamlet performs madness, and a play-within-a-play dramatises the question directly', 'Only Hamlet is deceptive', 'The motif appears once'], correctIndex: 1, explanation: 'The play is saturated with acting, watching and masks. The embedded Mousetrap play makes the theme literal, and Hamlet\'s instinct that "seeming" is universal underlies much of his philosophical paralysis.', topic: 'Writer\'s Methods', difficulty: 'grade-9' },
  { id: 'ham-17', question: 'Why is the Ghost\'s theological status ambiguous?', type: 'multiple-choice', options: ['Shakespeare forgot to clarify', 'The Ghost describes Catholic purgatory, but Protestant doctrine had abolished it \u2014 Hamlet must consider whether the spirit is truly his father or a devil tempting him to damnation', 'The Ghost is explicitly an angel', 'No audience cared about ghosts'], correctIndex: 1, explanation: 'The Ghost describes suffering for "foul crimes done in my days of nature" \u2014 a Catholic image of purgatory. Post-Reformation English audiences knew a devil could take a dead loved one\'s shape to tempt the living, justifying Hamlet\'s delay in trusting him.', topic: 'Context', difficulty: 'grade-9' },
  { id: 'ham-18', question: 'How does the play subvert revenge tragedy conventions?', type: 'multiple-choice', options: ['It is a comedy', 'It keeps the genre\'s ghost, feigned madness and bloody finale but radically interiorises the form \u2014 the avenger delays, philosophises, and the delay itself becomes the play\'s subject', 'It has no revenge plot', 'It ignores earlier plays'], correctIndex: 1, explanation: 'Kyd\'s The Spanish Tragedy established the revenge-play conventions Shakespeare inherits: ghost, delayed avenger, feigned madness, bloody finale. Shakespeare keeps these but turns them inward, making Hamlet\'s inability to act the main subject.', topic: 'Writer\'s Methods', difficulty: 'grade-9' },
  { id: 'ham-19', question: 'How do critics interpret Gertrude\'s final act of drinking the poisoned cup?', type: 'multiple-choice', options: ['She has no choice', 'Her complicity is deliberately left ambiguous \u2014 readings range from accident to quiet maternal sacrifice, with some seeing her knowingly drinking to save Hamlet', 'She is obviously murdered by Claudius', 'She wanted the throne'], correctIndex: 1, explanation: 'Shakespeare leaves Gertrude\'s awareness uncertain throughout. The Ghost tells Hamlet to leave her to heaven, and her final drink allows a reading of quiet sacrifice. Critics have disagreed for centuries about whether she is weak, guilty, or trapped.', topic: 'Characters', difficulty: 'grade-9' },
  { id: 'ham-20', question: 'What does "The rest is silence" suggest about Hamlet\'s death?', type: 'multiple-choice', options: ['He has more to say', 'His dying words refuse the long speeches that have defined him, leaving the play\'s unanswered metaphysical questions deliberately unspoken', 'He is angry at Horatio', 'He is calling for music'], correctIndex: 1, explanation: 'Hamlet\'s final line rejects the philosophical speechifying that has characterised the whole play. The "rest" \u2014 what lies beyond death, the meaning of his suffering \u2014 remains silent, refusing the audience the consolation of an answer.', topic: 'Themes', difficulty: 'grade-9' },
]

const REVISION_TOPICS = [
  { topic: 'Revenge and Delay', summary: 'Hamlet frustrates the revenge-tragedy form: where the conventional avenger acts, Hamlet thinks, questions and procrastinates.', keyPoints: ['The Ghost\'s command binds Hamlet to a code that destroys him', 'Laertes and Fortinbras act as foils who do act decisively', 'Hamlet refuses to kill Claudius at prayer \u2014 a theological delay', '"How all occasions do inform against me" \u2014 self-contempt at inaction', 'The delay itself becomes the play\'s central subject'] },
  { topic: 'Madness \u2014 Real and Performed', summary: 'Madness runs throughout the play as both strategy and consequence, with the boundary between performed and genuine disturbance increasingly unstable.', keyPoints: ['Hamlet\'s "antic disposition" is initially a cover for investigation', 'Polonius: "Though this be madness, yet there is method in\'t"', 'Ophelia\'s madness is unambiguously real \u2014 grief and manipulation', 'Her flower scene: suppressed female voice finally speaking', 'Feminist critics read her breakdown as a political statement'] },
  { topic: 'Death and Mortality', summary: 'The play is saturated with death and interrogates it as a philosophical problem, not just a plot event.', keyPoints: ['"To be, or not to be" weighs existence against suicide', 'The graveyard scene: death as the great leveller', 'Yorick\'s skull: memory reduced to bone', 'Alexander\'s dust stopping a beer barrel', 'The final scene literalises the poison metaphor'] },
  { topic: 'Appearance vs Reality', summary: 'The court runs on surveillance, disguise and performance, making truth difficult to find in a world where everyone performs.', keyPoints: ['Claudius performs grief while concealing murder', 'Polonius hides behind arrases \u2014 dies of his own spying', 'Rosencrantz and Guildenstern pose as friends while spying', 'The Mousetrap: play-within-a-play as forensic instrument', '"Seeming" as a universal Elizabethan anxiety'] },
  { topic: 'Corruption and Decay', summary: '"Something is rotten in the state of Denmark" \u2014 the kingdom is presented as a diseased body, with murder at the top infecting the whole state.', keyPoints: ['Recurring imagery of disease, weeds, ulcers and poison', 'Claudius\'s crime is political as well as personal', 'The final scene: royal family dies together by literal poison', 'Marcellus and Hamlet both register the rottenness early', 'Historical context: Essex rebellion 1601, anxious succession'] },
]

const ESSAY_PROMPTS = [
  'How does Shakespeare present the theme of revenge in Hamlet?',
  'How does Shakespeare use the character of Ophelia to explore madness and female powerlessness?',
  'How does Shakespeare present the relationship between appearance and reality in Hamlet?',
  'How does Shakespeare use soliloquy to present Hamlet\'s inner conflict?',
  'How does Shakespeare explore ideas of death and mortality in Hamlet?',
]

export default async function HamletPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa', 'edexcel', 'ocr', 'eduqas']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <CourseJsonLd
        name="Hamlet — Complete A-Level Study Guide"
        description="In-depth study guide for Hamlet covering plot, characters, themes, key quotations, historical context and exam essay plans for A-Level English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://theenglishhub.app" },
          { name: "Revision", url: "https://theenglishhub.app/revision" },
          { name: "Set Texts", url: "https://theenglishhub.app/revision/texts" },
          { name: "Hamlet", url: "https://theenglishhub.app/revision/texts/hamlet" },
        ]}
      />
      <TextStudyHub
        textName="Hamlet"
        textType="play"
        examBoard="AQA"
        basePath="/revision/texts/hamlet"
        subPages={[
          { id: 'read', href: '/revision/texts/hamlet/read', icon: 'read' as const, title: 'Read Full Text', description: 'With annotations' },
          { id: 'acts', href: '/revision/texts/hamlet/acts', icon: 'acts' as const, title: 'Act-by-Act Analysis', description: 'Key moments & quotes' },
          { id: 'characters', href: '/revision/texts/hamlet/characters', icon: 'characters' as const, title: 'Characters', description: 'Full character guide' },
          { id: 'themes', href: '/revision/texts/hamlet/themes', icon: 'themes' as const, title: 'Themes', description: 'Theme analysis' },
          { id: 'quotes', href: '/revision/texts/hamlet/key-quotes', icon: 'quotes' as const, title: 'Key Quotes', description: 'Quotes with analysis' },
          { id: 'context', href: '/revision/texts/hamlet/context', icon: 'context' as const, title: 'Context', description: 'Historical context' },
          { id: 'essays', href: '/revision/texts/hamlet/essay-plans', icon: 'essays' as const, title: 'Essay Plans', description: 'A-Level essay plans' },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map(q => ({
          quote: q.quote.replace(/["\u201C\u201D]/g, ''),
          character: q.who.split('\u2014')[0].trim(),
          context: q.analysis.slice(0, 100) + '...',
        }))}
        essayQuestions={[
          'How does Shakespeare present the theme of revenge in Hamlet?',
          'How does Shakespeare use the character of Ophelia to explore madness and female powerlessness?',
          'How does Shakespeare present the relationship between appearance and reality in Hamlet?',
          'How does Shakespeare use soliloquy to present Hamlet\'s inner conflict?',
          'How does Shakespeare explore ideas of death and mortality in Hamlet?',
        ]}
        flashcards={data.quotations.slice(0, 8).map(q => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="Hamlet"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <div className="mb-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-100">
        <strong className="block text-foreground">Draft study guide</strong>
        <span>AI-assisted draft under expert review. Cross-check with your teacher&rsquo;s notes.</span>
      </div>
      <TextGuide data={data} />
    </>
  )
}
