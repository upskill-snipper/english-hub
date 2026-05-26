// DRAFT - AWAITING ENGLISH-TEACHER REVIEW
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { TextGuide, type TextGuideData } from '../_components/text-guide'
import TextStudyHub from '@/components/study/TextStudyHub'
import InlineStudyEngine, { type QuizQuestion } from '@/components/study/InlineStudyEngine'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'Julius Caesar - Study Guide | The English Hub',
    description:
      'In-depth study guide for Julius Caesar by William Shakespeare: plot, characters, themes, context and key quotations.',
  },
  title: 'Julius Caesar - Study Guide',
  description:
    'In-depth study guide for Julius Caesar by William Shakespeare: plot, characters, themes, context and key quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/texts/julius-caesar',
  },
}

const data: TextGuideData = {
  title: 'Julius Caesar',
  author: 'William Shakespeare',
  year: '1599',
  category: 'Play',
  badge: 'AQA',
  intro:
    'Shakespeare\u2019s Julius Caesar, written in 1599, is a political tragedy built on conspiracy, rhetoric and civil war. Drawing on Plutarch\u2019s Lives for its material, the play dramatises the assassination of Rome\u2019s most powerful general in 44 BCE and the bloody aftermath that tears the republic apart. It is less a study of one protagonist than an examination of how words, ideals and ambition collide in public life: Brutus kills Caesar because he fears tyranny, and Mark Antony uses a single funeral speech to turn a city against the conspirators. Written in a year of intense Elizabethan anxiety about succession and an ageing queen with no heir, the play asks whether the destruction of a ruler can ever restore liberty, or whether it simply unleashes worse violence. Its scenes of assassination, mob rule and battlefield defeat remain some of the most influential political drama in English literature.',
  quickInfo: {
    genre: 'Tragedy (political)',
    setting: 'Ancient Rome, 44 BCE and aftermath',
    length: 'Five-act play (~2,480 lines)',
    published: 'First folio 1623',
  },
  plotSummary: [
    'The play opens in Rome during the Feast of Lupercal in February 44 BCE. Julius Caesar has returned victorious from civil war against Pompey, and the streets are crowded with citizens celebrating him. The tribunes Flavius and Marullus rebuke the commoners for their fickle loyalty, stripping decorations from Caesar\u2019s statues. A soothsayer warns Caesar to "beware the ides of March," but Caesar dismisses him as a dreamer. In the same act, Cassius begins working on Brutus, flattering him with comparisons to his famous ancestor who helped expel the last Roman king, and planting the suggestion that Caesar has grown dangerously powerful. Omens multiply across the city: a storm rages, lions walk the streets, and graves are said to yield up their dead.',
    'Cassius recruits a group of senators to join the conspiracy, and Brutus \u2014 torn between his love for Caesar and his fear of tyranny \u2014 finally agrees to lead them. On the night before the ides of March, Calpurnia dreams of Caesar\u2019s statue running with blood and begs him to stay home. Caesar is persuaded to remain, but the conspirator Decius reinterprets the dream as a sign of Rome\u2019s rebirth through Caesar and flatters him into going to the Capitol. There, on 15 March, Casca strikes the first blow and the other conspirators follow. Caesar, seeing Brutus among them, utters "Et tu, Brute?" and dies at the foot of Pompey\u2019s statue.',
    'Mark Antony, Caesar\u2019s ally, pretends to make peace with the conspirators and asks permission to speak at the funeral. Brutus addresses the crowd first, explaining in measured prose that he killed Caesar not because he loved him less but because he loved Rome more. The citizens are convinced \u2014 until Antony rises. In one of the most famous speeches in English drama, Antony repeatedly calls Brutus "an honourable man" while showing the crowd Caesar\u2019s wounds and reading his will, inciting the mob to fury. The city erupts into riot. In the chaos, Cinna the poet is mistaken for Cinna the conspirator and torn apart in the street. Antony joins Octavius and Lepidus to form a new triumvirate, coolly agreeing to political murders, and marches against the conspirators.',
    'The final acts take place at Philippi in 42 BCE, where the armies of Brutus and Cassius face Antony and Octavius. Tensions between the two conspirators almost break their alliance, and Brutus receives news that his wife Portia has killed herself by swallowing hot coals. The ghost of Caesar appears to Brutus, announcing they will meet again at Philippi. In the battle that follows, Cassius mistakenly believes his friend Titinius has been captured and orders his servant to kill him. Brutus, defeated in the second engagement, runs onto his own sword held by Strato. Antony enters and delivers the final judgement that Brutus was "the noblest Roman of them all," the only conspirator who acted for the common good rather than from envy.',
  ],
  characters: [
    {
      name: 'Julius Caesar',
      role: 'Roman general and dictator; the title character',
      body: 'Caesar appears in only three scenes before his death, yet dominates the play. Shakespeare presents him as simultaneously great and vulnerable: a supreme public figure who speaks of himself in the third person and compares himself to the Northern Star, while privately suffering epileptic fits and deafness in one ear. His refusal of the crown three times at the Lupercal is ambiguous \u2014 calculated modesty or genuine restraint? After his assassination, his spirit continues to shape events, appearing as a ghost to Brutus and inspiring the triumvirate\u2019s revenge.',
    },
    {
      name: 'Marcus Brutus',
      role: 'Senator; leader of the conspiracy against Caesar',
      body: 'Brutus is the play\u2019s tragic centre \u2014 an idealistic, philosophical Stoic descended from the Junius Brutus who helped expel Rome\u2019s last king. Shakespeare makes him agonise over the decision to kill his friend Caesar, and his soliloquy in the orchard ("It must be by his death") reveals how carefully he constructs a moral justification. His honourable intentions repeatedly undermine him in practice: he overrules Cassius by sparing Antony, by letting Antony speak at the funeral, and by engaging at Philippi too early. His suicide completes Shakespeare\u2019s portrait of noble failure.',
    },
    {
      name: 'Cassius',
      role: 'Senator and chief instigator of the conspiracy',
      body: 'Cassius is shrewd, envious and passionately republican. Shakespeare gives him the play\u2019s most penetrating political analysis \u2014 "The fault, dear Brutus, is not in our stars, / But in ourselves" \u2014 and makes him the practical engine of the plot. Caesar calls him dangerous because he reads too much and rarely smiles. Cassius manipulates Brutus through forged letters and flattery, but defers to him once Brutus joins, and this deference proves fatal: Cassius is right about Antony and about the timing of battle, and Brutus is wrong on both. He kills himself at Philippi on the anniversary of his birth.',
    },
    {
      name: 'Mark Antony',
      role: 'Caesar\u2019s close ally and avenger',
      body: 'Antony is transformed by the assassination from a minor pleasure-seeker into a formidable political operator. His funeral oration is a masterclass in rhetorical manipulation: he uses repetition, irony ("Brutus is an honourable man"), physical spectacle (Caesar\u2019s bloody cloak) and the contents of the will to turn the crowd into a rioting mob. In the later acts Shakespeare darkens him, showing him coolly marking relatives for death in the triumvirate\u2019s proscriptions. His tribute to Brutus at the end suggests a genuine recognition of honour even in an enemy.',
    },
    {
      name: 'Calpurnia',
      role: 'Caesar\u2019s wife',
      body: 'Calpurnia appears briefly but memorably. On the morning of the ides of March she describes a terrifying dream in which Caesar\u2019s statue runs with blood and Romans bathe their hands in it (2.2). She kneels and begs him to stay home, and for a moment he agrees. Her warning is dismissed when Decius reinterprets the dream flatteringly. Shakespeare uses her to dramatise the play\u2019s interest in omens and the cost of ignoring private counsel in favour of public flattery. She also highlights the male political world that systematically excludes women\u2019s voices.',
    },
    {
      name: 'Portia',
      role: 'Brutus\u2019s wife; daughter of Cato the Younger',
      body: 'Portia is intelligent, Stoic and proud of her philosophical lineage. In a striking scene (2.1) she presses Brutus to share the secret weighing on him, and as proof of her strength she reveals she has gashed her own thigh to prove she can bear pain without speaking. Shakespeare gives her more political seriousness than most of his wives. Her offstage suicide \u2014 she swallows burning coals, according to the report in 4.3 \u2014 comes as Brutus is cracking under the strain of civil war, and he hears the news with shattered composure.',
    },
    {
      name: 'Casca',
      role: 'Senator; the first conspirator to stab Caesar',
      body: 'Casca is blunt, cynical and sharp-tongued. He provides the eyewitness account of Caesar\u2019s refusal of the crown at the Lupercal, describing the crowd\u2019s stinking breath and Caesar\u2019s fit with contempt for both. During the storm before the ides, his terror at the supernatural portents contrasts with Cassius\u2019s cool republican reading of them. Shakespeare has Casca strike the first blow in the assassination ("Speak, hands, for me!"), marking the moment words give way to violence. He is a political realist whose plain speaking exposes the hollowness of Roman public ritual.',
    },
  ],
  themes: [
    {
      title: 'Power and ambition',
      body: 'Shakespeare centres the play on a question the conspirators cannot answer: is Caesar ambitious enough to become a tyrant? Brutus admits in soliloquy that he has seen no proof, only fears what Caesar "may" become once crowned. The play refuses to resolve whether Caesar was genuinely a danger to the republic or merely a powerful man undone by envy. After his death, Antony, Octavius and Cassius all reveal ambition of their own, suggesting that the problem is not Caesar but the structure of power itself. The cycle of violence proves that eliminating one ambitious man only clears space for others.',
    },
    {
      title: 'Fate versus free will',
      body: 'Omens saturate the play: the soothsayer\u2019s warning, Calpurnia\u2019s dream, the storm, the supernatural lions, Caesar\u2019s ghost. Characters disagree sharply about what these portents mean. Cassius insists, "Men at some time are masters of their fates," treating omens as political tools. Caesar oscillates between fatalism ("What can be avoided / Whose end is purposed by the mighty gods?") and bravado. Shakespeare leaves the question open: events seem fated in retrospect, yet every disaster follows from a specific human choice \u2014 Caesar ignoring his wife, Brutus sparing Antony, Cassius giving in to Brutus.',
    },
    {
      title: 'Rhetoric and persuasion',
      body: 'The play is obsessed with the power of public speech. Cassius persuades Brutus through private rhetoric; Decius persuades Caesar through reinterpretation; Brutus persuades the plebeians through calm prose; Antony then unmakes Brutus\u2019s argument through inflammatory verse. Shakespeare dramatises how the same audience can be swung in opposite directions within minutes, and how dangerous this volatility becomes in a republic that relies on public judgement. The speeches over Caesar\u2019s body are often taught as a paired set, the most famous example in English of rhetoric as political weapon.',
    },
    {
      title: 'Honour',
      body: 'Honour is the word Brutus and Antony both use most. Brutus kills Caesar because his conception of honour demands it, then refuses to be seen breaking his word even when pragmatism would save him. Antony weaponises the word in the funeral speech, repeating "Brutus is an honourable man" until the repetition itself becomes accusation. Shakespeare makes the audience feel how honour can be a sincere ethical compass and a hollow slogan at the same time. The play\u2019s final tribute \u2014 "This was the noblest Roman of them all" \u2014 grants Brutus the honour he sought, yet at the cost of his life and of Rome itself.',
    },
    {
      title: 'Public versus private duty',
      body: 'Every major character is torn between private loyalty and public obligation. Brutus loves Caesar but loves Rome more. Portia demands to be treated as a political partner rather than a decorative wife. Calpurnia\u2019s private dream is dismissed in favour of public ceremony. Caesar himself insists the public man must override the private body. Shakespeare stages the cost of this split in domestic scenes \u2014 Brutus and Portia in the orchard, Caesar and Calpurnia in his house \u2014 where private counsel is repeatedly drowned out by political reputation. When Brutus learns of Portia\u2019s suicide, his Stoic denial of grief reveals how far the public role has consumed the man.',
    },
    {
      title: 'Republic versus tyranny',
      body: 'Behind every speech is an argument about what kind of state Rome should be. Cassius and Brutus invoke the expulsion of the Tarquins and the founding of the republic, appealing to an almost mystical Roman liberty. Antony and Octavius stand for concentrated executive power, justified by the need for order after chaos. Shakespeare, writing under an ageing Elizabeth with no clear heir, leaves the debate genuinely open. The republican conspirators are shown as flawed and self-deceiving, but the triumvirate that replaces them is coldly murderous. Neither side offers a clean answer, which is part of what has kept the play politically resonant for four centuries.',
    },
  ],
  historicalContext: [
    'Shakespeare\u2019s principal source was Sir Thomas North\u2019s 1579 translation of Plutarch\u2019s Parallel Lives, in particular the lives of Caesar, Brutus and Antony. North\u2019s English was already vivid and speech-filled, and Shakespeare lifted whole passages, reshaping dialogue and compressing timelines. The assassination took place on 15 March 44 BCE; the battles of Philippi followed in October 42 BCE. Shakespeare telescopes these events so they appear almost continuous, heightening the sense that one act of political violence leads directly to civil war.',
    'Julius Caesar was probably the first play performed at the newly built Globe Theatre in 1599. A Swiss visitor, Thomas Platter, recorded seeing it there in September of that year. Elizabeth I was in her late sixties with no direct heir, and the English political elite was openly anxious about the succession \u2014 a topic it was effectively illegal to discuss. A Roman play about the assassination of a ruler, the overthrow of a republic, and the dangers of mob rhetoric allowed Shakespeare to explore live political questions with some protective distance.',
    'Classical republicanism was central to the Elizabethan grammar-school curriculum. Educated playgoers would have read Cicero, Plutarch and Livy in Latin, and knew the standard Tudor interpretation of Roman history: that Caesar had destroyed the republic, that Brutus was a noble liberator, and that the resulting civil wars showed the dangers of ambition. Shakespeare complicates this inherited reading. His Brutus is sympathetic but politically naive; his Caesar is arrogant but not clearly tyrannical; his Antony is both heroic and ruthless. The play invites the audience to weigh the arguments rather than accept the schoolroom verdict.',
    'The violence of the play also reflected the real precariousness of Elizabethan public order. The Essex Rebellion of 1601 \u2014 in which a faction including Shakespeare\u2019s own patron tried to seize power from the Queen \u2014 occurred less than two years after Julius Caesar was first performed. In the interval between assassination and battle, Shakespeare\u2019s Rome slips into mob violence, property seizure and political murder by list. His audience, living under a government nervous about plots, exiles and the unknown succession, would have recognised these anxieties as their own.',
  ],
  quotations: [
    {
      quote: '"Beware the ides of March."',
      who: 'Soothsayer - Act 1, Scene 2',
      analysis:
        'The play\u2019s most famous warning, compressed into a single metrical line. Caesar dismisses the speaker as "a dreamer," establishing the pattern of ignored omens.',
    },
    {
      quote:
        '"The fault, dear Brutus, is not in our stars, / But in ourselves, that we are underlings."',
      who: 'Cassius - Act 1, Scene 2',
      analysis:
        'Cassius\u2019s republican manifesto: men make their own political fate. The line cuts directly against the play\u2019s imagery of omens and stars.',
    },
    {
      quote: '"Men at some time are masters of their fates."',
      who: 'Cassius - Act 1, Scene 2',
      analysis:
        'Part of the same speech, extending the argument that submission to Caesar is a choice, not a destiny. Cassius uses rhetoric to goad Brutus into action.',
    },
    {
      quote:
        '"Let me have men about me that are fat, / Sleek-headed men and such as sleep a-nights. / Yond Cassius has a lean and hungry look; / He thinks too much: such men are dangerous."',
      who: 'Caesar - Act 1, Scene 2',
      analysis:
        'Caesar\u2019s private assessment of Cassius, combining shrewd political instinct with the self-confident claim that he fears no one.',
    },
    {
      quote:
        '"It must be by his death: and for my part, / I know no personal cause to spurn at him, / But for the general."',
      who: 'Brutus - Act 2, Scene 1',
      analysis:
        'Brutus\u2019s orchard soliloquy. He admits he has no personal grievance and constructs a hypothetical justification \u2014 Caesar must die not for what he is but for what he might become.',
    },
    {
      quote:
        '"Cowards die many times before their deaths; / The valiant never taste of death but once."',
      who: 'Caesar - Act 2, Scene 2',
      analysis:
        'Caesar\u2019s response to Calpurnia\u2019s warnings. The line embodies his stoical public persona but is delivered just before he walks into the assassination.',
    },
    {
      quote:
        '"When beggars die, there are no comets seen; / The heavens themselves blaze forth the death of princes."',
      who: 'Calpurnia - Act 2, Scene 2',
      analysis:
        'Calpurnia reads the storm as a sign that Caesar is uniquely endangered. Her imagery links political rank to cosmic order, a hierarchy the play will shatter.',
    },
    {
      quote: '"Et tu, Brute? Then fall, Caesar."',
      who: 'Caesar - Act 3, Scene 1',
      analysis:
        'Shakespeare\u2019s own wording, not historical Latin. The shock is that betrayal by Brutus ends Caesar\u2019s will to resist; the public man accepts the verdict of his friend.',
    },
    {
      quote: '"Cry \'Havoc!\' and let slip the dogs of war."',
      who: 'Antony - Act 3, Scene 1',
      analysis:
        'Antony\u2019s soliloquy over Caesar\u2019s body announces that civil war is now inevitable. "Havoc" was a military order permitting unrestricted killing and plunder.',
    },
    {
      quote: '"Not that I loved Caesar less, but that I loved Rome more."',
      who: 'Brutus - Act 3, Scene 2',
      analysis:
        'The core of Brutus\u2019s funeral speech, delivered in balanced prose. It persuades the crowd \u2014 briefly \u2014 that personal affection has been sacrificed to public duty.',
    },
    {
      quote:
        '"Friends, Romans, countrymen, lend me your ears; / I come to bury Caesar, not to praise him."',
      who: 'Antony - Act 3, Scene 2',
      analysis:
        'The opening of the funeral oration. The tricolon address flatters the crowd into listening, and the apparent disclaimer sets up a speech that will do the opposite.',
    },
    {
      quote: '"For Brutus is an honourable man; / So are they all, all honourable men."',
      who: 'Antony - Act 3, Scene 2',
      analysis:
        'The refrain that Antony repeats until it turns into accusation. Shakespeare makes verbal irony into political weapon, eroding the crowd\u2019s trust in the conspirators line by line.',
    },
    {
      quote: '"This was the most unkindest cut of all."',
      who: 'Antony - Act 3, Scene 2',
      analysis:
        'Antony points to the wound he attributes to Brutus, using physical spectacle to make Caesar\u2019s blood the argument. The double superlative is ungrammatical and deliberately emotive.',
    },
    {
      quote: '"O judgement, thou art fled to brutish beasts, / And men have lost their reason."',
      who: 'Antony - Act 3, Scene 2',
      analysis:
        'A pause in the oration staged as grief. Antony accuses the crowd of losing reason while actively inciting them to do so, one of the play\u2019s sharpest rhetorical ironies.',
    },
    {
      quote:
        '"There is a tide in the affairs of men, / Which, taken at the flood, leads on to fortune."',
      who: 'Brutus - Act 4, Scene 3',
      analysis:
        'Brutus insists on engaging at Philippi immediately. The metaphor is eloquent, but he is overruling Cassius\u2019s better military judgement, and the decision leads to defeat.',
    },
    {
      quote:
        '"O Julius Caesar, thou art mighty yet! / Thy spirit walks abroad, and turns our swords / In our own proper entrails."',
      who: 'Brutus - Act 5, Scene 3',
      analysis:
        'Over Cassius\u2019s body, Brutus acknowledges that Caesar\u2019s power has outlived his death. The image of swords turning inward captures the self-destruction of the conspiracy.',
    },
    {
      quote: '"This was the noblest Roman of them all."',
      who: 'Antony - Act 5, Scene 5',
      analysis:
        'Antony\u2019s tribute to the dead Brutus distinguishes him from the other conspirators, who acted from envy. The play ends with a grudging moral verdict on its tragic hero.',
    },
    {
      quote:
        "\"His life was gentle, and the elements / So mix'd in him that Nature might stand up / And say to all the world, 'This was a man!'\"",
      who: 'Antony - Act 5, Scene 5',
      analysis:
        'The closing lines elevate Brutus to a model of balanced Stoic virtue. Shakespeare gives the last word on his protagonist to his political enemy, a final example of the play\u2019s layered sympathies.',
    },
  ],
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'jc-1',
    question: 'What warning does the Soothsayer give Caesar in Act 1?',
    type: 'multiple-choice',
    options: [
      'Trust no senator',
      'Beware the ides of March',
      'Fear the storm at night',
      'Do not wear a crown',
    ],
    correctIndex: 1,
    explanation:
      'The Soothsayer warns Caesar to "beware the ides of March" (15 March). Caesar dismisses him as "a dreamer," setting up the play\'s pattern of ignored omens.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'jc-2',
    question: 'Who is the first conspirator to stab Caesar?',
    type: 'multiple-choice',
    options: ['Brutus', 'Cassius', 'Casca', 'Decius'],
    correctIndex: 2,
    explanation:
      'Casca strikes the first blow with the line "Speak, hands, for me!" The other conspirators then follow, with Brutus\'s stab coming last and provoking Caesar\'s "Et tu, Brute?".',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'jc-3',
    question: 'Who says "Friends, Romans, countrymen, lend me your ears"?',
    type: 'multiple-choice',
    options: ['Brutus', 'Cassius', 'Caesar', 'Mark Antony'],
    correctIndex: 3,
    explanation:
      'Mark Antony opens his funeral oration with this tricolon, flattering the crowd into listening. The speech goes on to turn them against the conspirators.',
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'jc-4',
    question: 'What does Caesar say as Brutus joins the attack?',
    type: 'multiple-choice',
    options: ['"Havoc!"', '"Et tu, Brute?"', '"The ides have come"', '"Traitor!"'],
    correctIndex: 1,
    explanation:
      '"Et tu, Brute? Then fall, Caesar." Shakespeare\'s wording, not a historical record. The betrayal by Brutus ends Caesar\'s will to resist.',
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'jc-5',
    question: 'What dream does Calpurnia have on the night before the ides of March?',
    type: 'multiple-choice',
    options: [
      'Caesar wearing a crown',
      "Caesar's statue running with blood",
      'A storm over Rome',
      'Brutus weeping',
    ],
    correctIndex: 1,
    explanation:
      "In Act 2 Scene 2, Calpurnia dreams of Caesar's statue running with blood while Romans bathe their hands in it. She begs him to stay home, but Decius flatters him into going to the Capitol.",
    topic: 'Plot',
    difficulty: 'foundation',
  },
  {
    id: 'jc-6',
    question: 'Who leads the conspiracy against Caesar?',
    type: 'multiple-choice',
    options: ['Mark Antony', 'Marcus Brutus', 'Octavius', 'Casca'],
    correctIndex: 1,
    explanation:
      "Marcus Brutus leads the conspiracy, although Cassius is the chief instigator who recruits him. Brutus's name gives the plot moral authority, which is exactly why Cassius needs him.",
    topic: 'Characters',
    difficulty: 'foundation',
  },
  {
    id: 'jc-7',
    question:
      'What does Cassius mean by "The fault, dear Brutus, is not in our stars, / But in ourselves, that we are underlings"?',
    type: 'multiple-choice',
    options: [
      'Astrology is unreliable',
      'Submission to Caesar is a choice, not a destiny \u2014 men make their own political fate',
      'Brutus should study the stars more',
      'The gods are punishing Rome',
    ],
    correctIndex: 1,
    explanation:
      'Cassius rejects fatalism and insists that political submission is a human choice. The line is a republican manifesto and directly goads Brutus into joining the conspiracy.',
    topic: 'Themes',
    difficulty: 'foundation',
  },
  {
    id: 'jc-8',
    question: 'How does Portia die?',
    type: 'multiple-choice',
    options: [
      'Killed in battle',
      'Swallows burning coals',
      'Drinks poison',
      "Stabbed by Antony's soldiers",
    ],
    correctIndex: 1,
    explanation:
      "Portia's suicide is reported in Act 4 Scene 3. She swallows hot coals while Brutus is away fighting the civil war, overcome by grief and the strain of his absence.",
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'jc-9',
    question: 'What rhetorical device does Antony rely on most heavily in the funeral speech?',
    type: 'multiple-choice',
    options: [
      'Alliteration',
      'Ironic repetition of "Brutus is an honourable man"',
      'Rhyming couplets',
      'Latin quotations',
    ],
    correctIndex: 1,
    explanation:
      'Antony repeats "Brutus is an honourable man" until the repetition itself becomes accusation. The ironic refrain erodes the crowd\'s trust in the conspirators while appearing to praise them.',
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'jc-10',
    question: "What is the significance of Cinna the poet's death in Act 3 Scene 3?",
    type: 'multiple-choice',
    options: [
      'He is a leader of the mob',
      'The mob tears him apart because he shares a name with the conspirator Cinna, showing the irrational violence Antony has unleashed',
      'He attacks Antony',
      'He is a senator',
    ],
    correctIndex: 1,
    explanation:
      "The plebeians mistake Cinna the poet for Cinna the conspirator and kill him over a name. Shakespeare uses the scene to dramatise the mob violence Antony's oratory has unleashed.",
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'jc-11',
    question:
      'What does Brutus\'s orchard soliloquy ("It must be by his death") reveal about his reasoning?',
    type: 'multiple-choice',
    options: [
      'He hates Caesar personally',
      'He admits he has no personal grievance and justifies the killing based on what Caesar might become, not what he is',
      'He wants to be king himself',
      'He is following orders from the gods',
    ],
    correctIndex: 1,
    explanation:
      'Brutus openly admits he has no personal cause against Caesar and constructs a hypothetical justification. Shakespeare shows the moral fragility of the idealistic case for assassination.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'jc-12',
    question:
      "How does Shakespeare use the contrast between Brutus's and Antony's funeral speeches?",
    type: 'multiple-choice',
    options: [
      'Both use identical rhetoric',
      'Brutus speaks in calm prose about principle; Antony uses inflammatory verse, physical spectacle and the will to manipulate the crowd into a riot',
      'Antony speaks first',
      'They both fail to persuade anyone',
    ],
    correctIndex: 1,
    explanation:
      "Brutus uses rational prose and abstract appeals to honour; Antony uses emotive verse, shows Caesar's bloody cloak and reads the will, turning the same crowd against the conspirators within minutes.",
    topic: "Writer's Methods",
    difficulty: 'higher',
  },
  {
    id: 'jc-13',
    question: 'Why does Cassius kill himself at Philippi?',
    type: 'multiple-choice',
    options: [
      'Brutus orders him to',
      'He believes mistakenly that his friend Titinius has been captured, and orders his servant to kill him on the anniversary of his birth',
      'He is stabbed by Antony',
      'He drinks poison',
    ],
    correctIndex: 1,
    explanation:
      'Cassius misreads the battlefield, thinks Titinius has been taken by the enemy, and has his servant run him through. The tragedy is sharpened by the fact that Titinius was actually being welcomed by friends.',
    topic: 'Plot',
    difficulty: 'higher',
  },
  {
    id: 'jc-14',
    question: 'What does Antony mean by calling Brutus "the noblest Roman of them all"?',
    type: 'multiple-choice',
    options: [
      'That Brutus was the richest conspirator',
      'That Brutus alone acted for the common good rather than from envy, unlike the other conspirators',
      'That Brutus was a good soldier',
      'That Brutus descended from the kings of Rome',
    ],
    correctIndex: 1,
    explanation:
      'Antony distinguishes Brutus from the other conspirators by motive: all the others "did that they did in envy of great Caesar," while Brutus acted on principle. The tribute is grudging but genuine.',
    topic: 'Characters',
    difficulty: 'higher',
  },
  {
    id: 'jc-15',
    question: 'How does the play present the question of whether Caesar was genuinely a tyrant?',
    type: 'multiple-choice',
    options: [
      'It clearly shows Caesar as a tyrant who had to be stopped',
      "It refuses to resolve the question: Brutus admits in soliloquy he has no proof, and the conspirators' own ambitions suggest the problem is power itself rather than Caesar specifically",
      'It shows Caesar as entirely innocent',
      'Caesar is never accused of tyranny',
    ],
    correctIndex: 1,
    explanation:
      'Shakespeare deliberately leaves this open. Brutus concedes he has "no personal cause" and kills Caesar for what he "may" become. The triumvirate that replaces him is coldly murderous, implying the problem is structural.',
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'jc-16',
    question: "What does Caesar's ghost represent when it appears to Brutus?",
    type: 'multiple-choice',
    options: [
      'A hallucination caused by stress',
      'The continuing power of Caesar\'s political spirit, which Brutus acknowledges with "thy spirit walks abroad, and turns our swords / In our own proper entrails"',
      'A warning from the gods',
      "Calpurnia's revenge",
    ],
    correctIndex: 1,
    explanation:
      "The ghost embodies the play's argument that Caesar's power has outlived his body. Brutus himself sees the civil war as Caesar's spirit turning the conspirators' weapons against themselves.",
    topic: 'Themes',
    difficulty: 'grade-9',
  },
  {
    id: 'jc-17',
    question: 'How does Shakespeare use omens to explore the tension between fate and free will?',
    type: 'multiple-choice',
    options: [
      'Omens always prove correct and characters who ignore them die',
      'Characters interpret omens in radically different ways \u2014 Calpurnia reads them as warnings, Decius reinterprets them flatteringly, Cassius treats them as political tools \u2014 leaving the audience to weigh fate against choice',
      'Only Caesar sees omens',
      'The play has no omens',
    ],
    correctIndex: 1,
    explanation:
      'Shakespeare deliberately shows the same omens being read in opposite ways. Events feel fated in retrospect, but every disaster follows a specific human choice, keeping the fate/free-will question live.',
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'jc-18',
    question:
      'Why was a Roman political tragedy particularly resonant for Elizabethan audiences in 1599?',
    type: 'multiple-choice',
    options: [
      'Roman history was fashionable',
      'Elizabeth I was ageing with no clear heir and succession anxieties could not be discussed openly; a play about the assassination of a ruler allowed Shakespeare to stage live political questions with protective distance',
      'It was cheaper to stage',
      'Audiences preferred foreign settings',
    ],
    correctIndex: 1,
    explanation:
      'Writing in 1599 for an audience worried about succession and mob unrest (the Essex Rebellion followed in 1601), Shakespeare used Rome to explore tyranny, rhetoric and civil war at one remove from current English politics.',
    topic: 'Context',
    difficulty: 'grade-9',
  },
  {
    id: 'jc-19',
    question: "What is the effect of Antony showing the crowd Caesar's bloody cloak and wounds?",
    type: 'multiple-choice',
    options: [
      'It is purely decorative',
      "It makes Caesar's body the argument, converting an abstract political act into visceral personal loss and completing the mob's turn against the conspirators",
      'The crowd is unaffected',
      'It is a religious ritual',
    ],
    correctIndex: 1,
    explanation:
      "Antony uses physical spectacle alongside verbal rhetoric: the cloak makes Caesar's murder immediate and personal, bypassing the crowd's reason. Shakespeare stages the moment rhetoric becomes riot.",
    topic: "Writer's Methods",
    difficulty: 'grade-9',
  },
  {
    id: 'jc-20',
    question:
      "What does Brutus's decision to spare Antony and let him speak at the funeral reveal about his character?",
    type: 'multiple-choice',
    options: [
      'He is a coward',
      "His idealism and insistence on honourable conduct repeatedly outweigh political pragmatism, overruling Cassius's shrewder judgement and sealing the conspiracy's defeat",
      'He secretly admires Antony',
      'He plans to kill Antony later',
    ],
    correctIndex: 1,
    explanation:
      'Cassius wants Antony killed and then forbidden to speak; Brutus overrules him twice. This idealistic honour is the quality that makes Brutus "the noblest Roman" and the quality that destroys him.',
    topic: 'Characters',
    difficulty: 'higher',
  },
]

const REVISION_TOPICS = [
  {
    topic: 'Power and Ambition',
    summary:
      'Shakespeare centres the play on an unresolved question: was Caesar genuinely a tyrant-in-waiting, or a powerful man undone by envy?',
    keyPoints: [
      'Brutus admits in soliloquy he has no personal cause \u2014 only fears what Caesar "may" become',
      'Caesar refuses the crown three times at the Lupercal \u2014 modesty or calculation?',
      'The triumvirate that replaces Caesar is coldly murderous, suggesting the problem is power itself',
      'The cycle of violence continues after the assassination',
      'Eliminating one ambitious man clears space for others',
    ],
  },
  {
    topic: 'Fate vs Free Will',
    summary:
      'Omens saturate the play, but characters disagree sharply about what they mean and whether they can be overridden.',
    keyPoints: [
      "Soothsayer's warning, Calpurnia's dream, the storm, Caesar's ghost",
      'Cassius: "Men at some time are masters of their fates"',
      'Caesar oscillates between fatalism and bravado',
      'Every disaster follows a specific human choice (Caesar ignoring Calpurnia, Brutus sparing Antony)',
      'Shakespeare keeps the question genuinely open',
    ],
  },
  {
    topic: 'Rhetoric and Persuasion',
    summary:
      'The play is obsessed with public speech and the volatility of audiences who can be swung in opposite directions within minutes.',
    keyPoints: [
      'Cassius persuades Brutus through private flattery and forged letters',
      "Decius reinterprets Calpurnia's dream to flatter Caesar to the Capitol",
      'Brutus speaks in calm prose; Antony in inflammatory verse',
      'Antony uses repetition ("honourable man"), physical spectacle (the cloak), and the will',
      'The paired funeral speeches are the most famous example of rhetoric as political weapon in English',
    ],
  },
  {
    topic: 'Honour',
    summary:
      'Honour is both a sincere ethical compass and a hollow slogan, and Shakespeare makes the audience feel it operating as both at once.',
    keyPoints: [
      'Brutus kills Caesar because his conception of honour demands it',
      'Antony weaponises "Brutus is an honourable man" until the repetition becomes accusation',
      'Brutus refuses to break his word even when pragmatism would save him',
      'Antony\'s final tribute: "This was the noblest Roman of them all"',
      'Honour gives Brutus dignity and destroys him at the same time',
    ],
  },
  {
    topic: 'Public vs Private Duty',
    summary:
      'Every major character is torn between private loyalty and public obligation, and the play stages the cost of choosing the public role.',
    keyPoints: [
      'Brutus loves Caesar but loves Rome more',
      'Portia demands to be treated as a political partner, gashes her own thigh as proof',
      "Calpurnia's private dream is dismissed in favour of public ceremony",
      'Caesar insists the public man must override the private body',
      "Brutus's Stoic denial of grief at Portia's death shows how far the role has consumed the man",
    ],
  },
  {
    topic: 'Republic vs Tyranny',
    summary:
      'Behind every speech is an argument about what kind of state Rome should be \u2014 and Shakespeare leaves the debate genuinely open.',
    keyPoints: [
      'Cassius and Brutus invoke the expulsion of the Tarquins and Roman liberty',
      'Antony and Octavius stand for concentrated executive power after chaos',
      'The conspirators are flawed and self-deceiving',
      'The triumvirate is coldly murderous, marking relatives for death',
      'Neither side offers a clean answer \u2014 part of why the play remains politically resonant',
    ],
  },
]

const ESSAY_PROMPTS = [
  'How does Shakespeare present the theme of power and ambition in Julius Caesar?',
  'How does Shakespeare use the character of Brutus to explore the conflict between honour and pragmatism?',
  'How does Shakespeare present rhetoric and persuasion in Julius Caesar?',
  'How does Shakespeare explore the tension between fate and free will in the play?',
  'How does Shakespeare present the conflict between public duty and private loyalty?',
]

export default async function JuliusCaesarPage() {
  const board = await getServerBoard()
  const allowedBoards = ['aqa']
  if (board && !allowedBoards.includes(board)) {
    redirect('/revision/texts')
  }

  return (
    <>
      <CourseJsonLd
        name="Julius Caesar - Complete GCSE Study Guide"
        description="In-depth study guide for Julius Caesar covering plot, characters, themes, key quotations, historical context and exam essay plans for GCSE English Literature."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Set Texts', url: 'https://theenglishhub.app/revision/texts' },
          { name: 'Julius Caesar', url: 'https://theenglishhub.app/revision/texts/julius-caesar' },
        ]}
      />
      <TextStudyHub
        textName="Julius Caesar"
        textType="play"
        examBoard="AQA"
        basePath="/revision/texts/julius-caesar"
        subPages={[
          {
            id: 'read',
            href: '/revision/texts/julius-caesar/read',
            icon: 'read' as const,
            title: 'Read Full Text',
            description: 'With annotations',
          },
          {
            id: 'acts',
            href: '/revision/texts/julius-caesar/acts',
            icon: 'acts' as const,
            title: 'Act-by-Act Analysis',
            description: 'Key moments & quotes',
          },
          {
            id: 'characters',
            href: '/revision/texts/julius-caesar/characters',
            icon: 'characters' as const,
            title: 'Characters',
            description: 'Full character guide',
          },
          {
            id: 'themes',
            href: '/revision/texts/julius-caesar/themes',
            icon: 'themes' as const,
            title: 'Themes',
            description: 'Theme analysis',
          },
          {
            id: 'quotes',
            href: '/revision/texts/julius-caesar/key-quotes',
            icon: 'quotes' as const,
            title: 'Key Quotes',
            description: 'Quotes with analysis',
          },
          {
            id: 'context',
            href: '/revision/texts/julius-caesar/context',
            icon: 'context' as const,
            title: 'Context',
            description: 'Historical context',
          },
          {
            id: 'essays',
            href: '/revision/texts/julius-caesar/essay-plans',
            icon: 'essays' as const,
            title: 'Essay Plans',
            description: 'GCSE essay plans',
          },
        ]}
        quizQuotes={data.quotations.slice(0, 10).map((q) => ({
          quote: q.quote.replace(/["\u201C\u201D]/g, ''),
          character: q.who.split('\u2014')[0].trim(),
          context: q.analysis.slice(0, 100) + '...',
        }))}
        essayQuestions={[
          'How does Shakespeare present the theme of power and ambition in Julius Caesar?',
          'How does Shakespeare use the character of Brutus to explore the conflict between honour and pragmatism?',
          'How does Shakespeare present rhetoric and persuasion in Julius Caesar?',
          'How does Shakespeare explore the tension between fate and free will in the play?',
          'How does Shakespeare present the conflict between public duty and private loyalty?',
        ]}
        flashcards={data.quotations.slice(0, 8).map((q) => ({
          front: q.quote,
          back: q.analysis,
        }))}
      />

      <InlineStudyEngine
        textName="Julius Caesar"
        questions={QUIZ_QUESTIONS}
        essayPrompts={ESSAY_PROMPTS}
        revisionTopics={REVISION_TOPICS}
      />
      <div className="mb-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-100">
        <strong className="block text-foreground">Draft study guide</strong>
        <span>
          AI-assisted draft under expert review. Cross-check with your teacher&rsquo;s notes.
        </span>
      </div>
      <TextGuide data={data} />
    </>
  )
}
