import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/aqa/inspector-calls' },
  title: "An Inspector Calls Study Guide - AQA English Literature GCSE",
  description:
    "Complete An Inspector Calls revision guide for AQA GCSE English Literature. Plot summary, character analysis, themes, 20+ key quotations, Edwardian and post-war context, and essay planning.",
};

/* ─── Data ──────────────────────────────────────────────────── */

const plotSummary = [
  {
    section: "Act 1 (Part 1)",
    title: "The Birling Family Celebration",
    summary: [
      "The play opens in the Birling family's comfortable dining room in the industrial city of Brumley in spring 1912. They are celebrating the engagement of Sheila Birling to Gerald Croft, the son of a rival business owner. The family appears prosperous and confident.",
      "Arthur Birling makes a series of speeches about the future, claiming the Titanic is 'unsinkable,' that war is impossible, and that a man's only responsibility is to himself and his family. He tells Gerald: 'a man has to mind his own business and look after himself and his own.'",
      "The doorbell rings. Inspector Goole arrives to investigate the death of a young woman called Eva Smith (also known as Daisy Renton), who has died by swallowing disinfectant. The Inspector begins questioning Mr Birling.",
    ],
  },
  {
    section: "Act 1 (Part 2)",
    title: "Mr Birling and Sheila's Involvement",
    summary: [
      "Mr Birling admits he employed Eva Smith at his factory but sacked her for leading a strike demanding higher wages (from 22 and 6 to 25 shillings a week). He shows no remorse, calling it a 'perfectly straightforward case.'",
      "Sheila is shown a photograph and recognises Eva. She confesses she had Eva fired from her next job at Milwards, a department store, because Eva smiled when Sheila tried on a dress that did not suit her. Sheila acted out of jealousy and spite.",
      "Unlike her father, Sheila is genuinely distressed. She accepts responsibility: 'If I could help her now, I would.' Gerald reacts strangely when the Inspector mentions the name 'Daisy Renton,' and Sheila notices.",
    ],
  },
  {
    section: "Act 2 (Part 1)",
    title: "Gerald's Secret",
    summary: [
      "Gerald admits he met Daisy Renton (Eva Smith) at the Palace Bar, a venue associated with prostitution. He kept her as his mistress for several months, providing her with a flat and money. He ended the relationship when it suited him.",
      "Gerald claims he felt genuine affection for Daisy, but Sheila recognises that the power imbalance made it exploitative regardless of his feelings. She returns the engagement ring.",
      "Mrs Birling enters and is immediately cold and dismissive toward the Inspector. She tries to use her social position to intimidate him, but the Inspector is unmoved.",
    ],
  },
  {
    section: "Act 2 (Part 2)",
    title: "Mrs Birling's Cruelty",
    summary: [
      "Mrs Birling admits that Eva Smith came to her charity committee (the Brumley Women's Charity Organisation) asking for help. Eva was pregnant and desperate.",
      "Mrs Birling refused to help because Eva initially used the name 'Mrs Birling,' which Sybil found impertinent. She also refused because she felt the father of the child should take responsibility.",
      "Mrs Birling insists the father should be 'dealt with very severely' and made 'an example of.' Sheila tries to stop her mother, realising the implication, but Mrs Birling does not understand until the Inspector reveals that the father is Eric, her own son.",
    ],
  },
  {
    section: "Act 3 (Part 1)",
    title: "Eric's Confession",
    summary: [
      "Eric admits he met Eva at the Palace Bar, got her pregnant, and stole money from his father's business to support her. Eva refused the stolen money because she knew where it came from.",
      "Eric turns on his mother: 'You killed her - and the child she'd have had too.' The family is torn apart by mutual recrimination.",
      "The Inspector delivers his final speech about social responsibility: 'We don't live alone. We are members of one body. We are responsible for each other.' He warns that if people do not learn this lesson, they will be 'taught it in fire and blood and anguish.'",
    ],
  },
  {
    section: "Act 3 (Part 2)",
    title: "The Aftermath and the Twist",
    summary: [
      "After the Inspector leaves, Gerald returns and suggests the Inspector may not have been a real police officer. They phone the police and confirm there is no Inspector Goole on the force.",
      "Mr and Mrs Birling are relieved and try to dismiss the evening's events. They suggest the Inspector may have shown them photographs of different girls, meaning there may not have been a single victim.",
      "Sheila and Eric are appalled that their parents are trying to avoid responsibility. Sheila insists: 'You're pretending everything is just as it was before.'",
      "The phone rings. A girl has just died on her way to the infirmary after swallowing disinfectant. A police inspector is on his way to question them. The play ends with the family staring in shock.",
    ],
  },
];

const characters = [
  {
    name: "Arthur Birling",
    role: "Capitalist / The Old Guard",
    description:
      "A wealthy factory owner and local politician. Birling represents the self-interested capitalist class that Priestley attacks throughout the play. He is pompous, self-important, and concerned above all with profit, social status, and avoiding scandal. Priestley uses dramatic irony to undermine his authority from the start.",
    keyPoints: [
      "His confident predictions about the Titanic and no war are proved catastrophically wrong - Priestley uses dramatic irony to destroy his credibility before the Inspector arrives",
      "He sacked Eva Smith for asking for a fair wage - showing that capitalism prioritises profit over people",
      "He never accepts responsibility: 'I can't accept any responsibility' - he represents those who refuse to learn",
      "He is more worried about scandal and his knighthood than about Eva's death",
      "His final relief when the Inspector is discredited shows he has learned nothing",
      "Represents the Edwardian upper-middle class whose selfishness, Priestley argues, led to two world wars",
    ],
    keyQuotes: [
      "'The Titanic... unsinkable, absolutely unsinkable'",
      "'A man has to mind his own business and look after himself and his own'",
      "'I can't accept any responsibility'",
      "'The famous younger generation who know it all'",
    ],
  },
  {
    name: "Sybil Birling (Mrs Birling)",
    role: "Social Snob / Moral Hypocrisy",
    description:
      "Mrs Birling is Arthur's socially superior wife. She chairs the Brumley Women's Charity Organisation but uses her position to judge and exclude rather than help. She represents the moral hypocrisy of the upper class - those who perform charity while lacking genuine compassion.",
    keyPoints: [
      "She refused Eva help because Eva used the name 'Birling' - class snobbery overrode human compassion",
      "She insists the father should be punished, not realising she is condemning her own son",
      "Her dramatic irony is the cruellest in the play - she creates the rope that hangs her own family",
      "She never accepts responsibility, even after learning about Eric",
      "She tries to intimidate the Inspector with her social position - but he is unmoved",
      "Represents the failure of Victorian/Edwardian charitable institutions to truly help the poor",
    ],
    keyQuotes: [
      "'Girls of that class'",
      "'I did nothing I'm ashamed of'",
      "'He should be made an example of'",
      "'I'm sorry she should have come to such a horrible end. But I accept no blame for it at all'",
    ],
  },
  {
    name: "Sheila Birling",
    role: "The Conscience / Hope for Change",
    description:
      "Sheila begins as a naive, spoiled young woman but undergoes a genuine moral awakening during the play. She is the first to accept responsibility and the most vocally horrified by her parents' refusal to change. Priestley uses Sheila to represent the younger generation's potential for social progress.",
    keyPoints: [
      "Her jealousy (getting Eva fired from Milwards) shows the casual cruelty of privilege - she ruined a life on a whim",
      "She is the first to feel genuine guilt: 'If I could help her now, I would'",
      "She quickly understands the Inspector's methods and tries to warn her family",
      "Her relationship with Gerald breaks down as she sees him more clearly",
      "She is furious with her parents in Act 3: 'You're pretending everything is just as it was before'",
      "She represents Priestley's hope that the younger generation will build a more just society",
    ],
    keyQuotes: [
      "'But these girls aren't cheap labour - they're people'",
      "'If I could help her now, I would'",
      "'You're pretending everything is just as it was before'",
      "'I tell you - whoever that Inspector was, it was anything but a joke'",
    ],
  },
  {
    name: "Eric Birling",
    role: "The Troubled Son / Failed Privilege",
    description:
      "Eric is the Birlings' son - a heavy drinker who got Eva pregnant and stole money to support her. He represents the failures of upper-class upbringing: privileged but emotionally neglected, wealthy but morally adrift. Like Sheila, he accepts responsibility, but his guilt is more desperate and self-destructive.",
    keyPoints: [
      "His alcoholism hints at deeper problems in the Birling family that are never discussed",
      "His relationship with Eva involved force ('I was in that state when a chap easily turns nasty') - acknowledging coercion",
      "He stole money from his father's firm - privilege led him to believe he could take what he wanted",
      "Eva refused the stolen money because she had more integrity than Eric",
      "He confronts his mother: 'You killed her - and the child she'd have had too'",
      "Like Sheila, he accepts responsibility and cannot return to the way things were",
    ],
    keyQuotes: [
      "'You're not the kind of father a chap could go to when he's in trouble'",
      "'I was in that state when a chap easily turns nasty'",
      "'You killed her - and the child she'd have had too'",
      "'We did her in all right'",
    ],
  },
  {
    name: "Gerald Croft",
    role: "The Aristocratic Class",
    description:
      "Gerald is Sheila's fiance and the son of a wealthy industrialist (Lord Croft). He kept Eva as his mistress, providing her with comfort before abandoning her. Gerald is charming and seemingly kind, but his treatment of Eva reveals the exploitative power dynamics of class and gender. He sides with the older generation at the end.",
    keyPoints: [
      "His relationship with Daisy/Eva seems caring but is inherently exploitative - he has all the power",
      "He 'rescued' her from the Palace Bar but ultimately used and discarded her",
      "His confession seems honest, but he manipulates Sheila's sympathy",
      "He leads the effort to discredit the Inspector, showing self-interest over morality",
      "He represents the aristocratic class who charm and help on their own terms but ultimately protect themselves",
      "His behaviour bridges the older and younger generations - he has the potential to change but chooses not to",
    ],
    keyQuotes: [
      "'She was young and pretty and warm-hearted - and intensely grateful'",
      "'I became at once the most important person in her life'",
      "'Everything's all right now, Sheila'",
    ],
  },
  {
    name: "Inspector Goole",
    role: "Priestley's Mouthpiece / Moral Authority",
    description:
      "Inspector Goole is a mysterious figure who may not be a real police inspector at all. His name puns on 'ghoul' (spirit). He functions as Priestley's mouthpiece, delivering the play's socialist message directly to the Birling family and, through them, to the audience. His true identity is never revealed, which is part of his power.",
    keyPoints: [
      "He controls the pace of revelations, showing each character's involvement one at a time",
      "He treats all characters equally regardless of class - undermining the Birlings' sense of superiority",
      "His final speech ('We are members of one body') is the play's political thesis",
      "He may be a ghost, a time-traveller, a supernatural being, or simply a fraud - Priestley leaves it deliberately ambiguous",
      "His warning about 'fire and blood and anguish' refers to the two World Wars that the 1945 audience has already experienced",
      "He represents conscience itself - a force that cannot be dismissed or bribed",
    ],
    keyQuotes: [
      "'We don't live alone. We are members of one body. We are responsible for each other'",
      "'If men will not learn that lesson, then they will be taught it in fire and blood and anguish'",
      "'One person and one line of inquiry at a time'",
      "'Public men, Mr Birling, have responsibilities as well as privileges'",
    ],
  },
  {
    name: "Eva Smith / Daisy Renton",
    role: "The Working-Class Victim",
    description:
      "Eva never appears on stage, yet she is the play's most important character. She represents all working-class women exploited by the privileged classes. Each Birling contributed to her destruction. She may not even be a single person - the Inspector may have used photographs of different women. This would strengthen Priestley's point: Eva represents an entire class, not just one individual.",
    keyPoints: [
      "She is given no voice - she cannot speak for herself, just as the working class had no political voice in 1912",
      "She changed her name to Daisy Renton - suggesting she tried to reinvent herself and escape her past",
      "She had integrity: she refused Eric's stolen money, she went to charity for help",
      "Her death by swallowing disinfectant is violent and painful - Priestley does not let the audience forget the reality",
      "Whether she is one person or several, the point remains: the Birlings destroyed lives through selfishness",
      "She represents the working class who suffered so the wealthy could prosper",
    ],
    keyQuotes: [
      "'A pretty, lively sort of girl' (described by Birling)",
      "'She'd had a lot to say - far too much - so she had to go' (Birling on the strike)",
      "'She told me she didn't want me to touch her' (Eric's confession)",
    ],
  },
];

const themes = [
  {
    title: "Social Responsibility",
    colour: "bg-red-500/10 border-red-500/30",
    analysis:
      "This is the central theme of the play. Priestley uses the Inspector to argue that we are all interconnected and responsible for each other's welfare. Mr Birling's individualist philosophy ('a man has to look after himself') is systematically dismantled as each character is shown the consequences of their selfishness. The play is a direct argument for socialism and the welfare state, written in 1945 just as the Labour government was creating the NHS and the modern welfare system.",
    keyPoints: [
      "Birling's 'every man for himself' philosophy is discredited by dramatic irony and by the Inspector's revelations",
      "Each Birling could have helped Eva at different points - individual acts of compassion could have saved her",
      "The Inspector's final speech ('We are members of one body') is Priestley's thesis: society must be collective, not individualist",
      "'Fire and blood and anguish' - the consequences of ignoring social responsibility are war and suffering (the 1945 audience had lived through both world wars)",
      "The phone call at the end suggests that the lesson will be repeated until it is learned",
      "Priestley was a socialist who believed in shared responsibility, public services, and reducing inequality",
    ],
    keyQuotes: [
      "'A man has to mind his own business and look after himself'",
      "'We don't live alone. We are members of one body. We are responsible for each other'",
      "'If men will not learn that lesson, then they will be taught it in fire and blood and anguish'",
    ],
  },
  {
    title: "Class and Inequality",
    colour: "bg-amber-500/10 border-amber-500/30",
    analysis:
      "The play exposes the rigid class system of Edwardian England, where the wealthy exploited the poor without consequence. Every character's treatment of Eva is shaped by class: Birling sees her as disposable labour, Sheila sees her as a shop girl who dared to smile, Mrs Birling sees her as a girl 'of that class.' Priestley argues that class privilege creates moral blindness - the Birlings cannot see Eva as fully human because her class makes her invisible.",
    keyPoints: [
      "Mr Birling sacked Eva for asking for fair wages - class determines whose voice matters",
      "Mrs Birling's phrase 'girls of that class' dehumanises the entire working class",
      "Gerald's relationship with Eva was only possible because of the class power imbalance",
      "Eva had no social safety net - charity was controlled by people like Mrs Birling who could refuse help",
      "The Birlings are protected by their class: money, connections, and reputation shield them from consequences",
      "Priestley's 1945 audience had experienced wartime equality and was ready to reject the old class system",
    ],
    keyQuotes: [
      "'Girls of that class'",
      "'But these girls aren't cheap labour - they're people'",
      "'If you don't come down sharply on some of these people, they'd soon be asking for the earth'",
    ],
  },
  {
    title: "Gender and Power",
    colour: "bg-purple-500/10 border-purple-500/30",
    analysis:
      "Eva Smith's story exposes the vulnerability of women in Edwardian society. She is exploited by men (Birling as employer, Gerald as lover, Eric through coercion) and judged by women of higher class (Sheila's jealousy, Mrs Birling's prejudice). Eva had no legal protections, no vote (women did not get the vote until 1918), and no economic independence. Priestley shows that gender compounds class disadvantage.",
    keyPoints: [
      "Eva had limited employment options - factory work or the service industry. When fired, she had almost no alternatives",
      "Gerald's 'rescue' of Eva from the Palace Bar replaces one form of exploitation with another - she becomes dependent on him",
      "Eric's admission that Eva 'didn't want me to touch her' reveals sexual coercion",
      "Mrs Birling polices Eva's behaviour (rejecting her for using the name 'Birling') while ignoring her son's behaviour",
      "Sheila is initially valued only as a commodity in the business merger between Birling and Croft",
      "Sheila's awakening includes rejecting her role as Gerald's decorative fiancee",
    ],
    keyQuotes: [
      "'She was young and pretty and warm-hearted - and intensely grateful'",
      "'I was in that state when a chap easily turns nasty'",
      "'She'd had a lot to say - far too much - so she had to go'",
    ],
  },
  {
    title: "Generational Divide",
    colour: "bg-green-500/10 border-green-500/30",
    analysis:
      "The play creates a clear divide between the older generation (Mr and Mrs Birling, who refuse to change) and the younger generation (Sheila and Eric, who accept responsibility). This was directly relevant to Priestley's 1945 audience: the older generation had created two world wars, and the younger generation had a chance to build something better. Priestley places his hope in the young, while condemning the moral rigidity of the old.",
    keyPoints: [
      "Mr and Mrs Birling learn nothing: they try to discredit the Inspector and return to normal",
      "Sheila and Eric cannot go back: 'You're pretending everything is just as it was before'",
      "Birling dismisses the young as 'the famous younger generation who know it all' - ironic because they are the only ones who learn",
      "Gerald sits between the generations: young enough to change but chooses the older generation's path",
      "The final phone call suggests the older generation will face consequences whether they accept them or not",
      "In 1945, a new Labour government represented the younger generation voting for social change",
    ],
    keyQuotes: [
      "'The famous younger generation who know it all'",
      "'You're pretending everything is just as it was before'",
      "'We did her in all right'",
    ],
  },
  {
    title: "Morality and Conscience",
    colour: "bg-blue-500/10 border-blue-500/30",
    analysis:
      "The play functions as a moral test for each character. The Inspector presents them with evidence of their wrongdoing and watches how they respond. Those with genuine conscience (Sheila, Eric) are changed. Those who suppress conscience (Mr Birling, Mrs Birling) remain the same. The Inspector himself is conscience personified - a figure who forces people to confront uncomfortable truths they would rather ignore.",
    keyPoints: [
      "Each character is given a chance to show remorse - their response reveals their true character",
      "Sheila's immediate guilt contrasts with her parents' defensive anger",
      "The Inspector's method is Socratic - he asks questions that force characters to examine themselves",
      "The Birlings try to discredit the messenger rather than accept the message",
      "The final phone call suggests that conscience cannot be permanently silenced",
      "Priestley argues that collective morality (caring for others) must replace individual self-interest",
    ],
    keyQuotes: [
      "'If I could help her now, I would'",
      "'I can't accept any responsibility'",
      "'I tell you - whoever that Inspector was, it was anything but a joke'",
    ],
  },
];

const keyQuotations = [
  {
    quote: "The Titanic... unsinkable, absolutely unsinkable",
    speaker: "Mr Birling (Act 1)",
    analysis:
      "Dramatic irony: the 1945 audience knows the Titanic sank in 1912. This immediately undermines Birling's authority and judgement. His absolute confidence ('absolutely') makes his wrongness even more damning. Priestley signals that everything Birling believes is wrong, including his views on social responsibility.",
  },
  {
    quote: "A man has to mind his own business and look after himself and his own",
    speaker: "Mr Birling (Act 1)",
    analysis:
      "Birling's individualist manifesto. This directly contradicts the Inspector's later message about collective responsibility. The repetition of 'his own' emphasises selfishness. The play systematically proves this philosophy wrong. Priestley wrote this to discredit the capitalist worldview.",
  },
  {
    quote: "Come down sharply on some of these people, they'd soon be asking for the earth",
    speaker: "Mr Birling (Act 1)",
    analysis:
      "'These people' dehumanises the working class. 'Come down sharply' reveals the violence underlying class power. 'Asking for the earth' is hyperbole - Eva asked for a small wage increase. Birling's language exposes the cruelty masked by business respectability.",
  },
  {
    quote: "But these girls aren't cheap labour - they're people",
    speaker: "Sheila (Act 1)",
    analysis:
      "Sheila's moral awakening begins here. She challenges her father's dehumanisation of workers. The dash creates emphasis on 'they're people' - the fundamental truth the Birlings have forgotten. This is one of the first indications that Sheila will accept the Inspector's message.",
  },
  {
    quote: "If I could help her now, I would",
    speaker: "Sheila (Act 1)",
    analysis:
      "Genuine remorse expressed simply and directly. The conditional 'if I could' shows Sheila understands that some damage cannot be undone. This contrasts sharply with her parents, who never express any desire to help. Sheila is the play's moral compass.",
  },
  {
    quote: "She was young and pretty and warm-hearted - and intensely grateful",
    speaker: "Gerald (Act 2)",
    analysis:
      "'Intensely grateful' is disturbing: Gerald valued Eva's gratitude because it made him feel powerful. The list of adjectives ('young,' 'pretty,' 'warm-hearted') shows he saw her physical and emotional qualities as commodities. The dash before 'and intensely grateful' gives it sinister emphasis.",
  },
  {
    quote: "Girls of that class",
    speaker: "Mrs Birling (Act 2)",
    analysis:
      "Three words that reveal Mrs Birling's entire worldview. 'That class' creates distance and contempt - Eva is defined entirely by her social position. Mrs Birling cannot see past class to recognise shared humanity. This phrase encapsulates the class prejudice the play attacks.",
  },
  {
    quote: "I did nothing I'm ashamed of",
    speaker: "Mrs Birling (Act 2)",
    analysis:
      "Mrs Birling refuses to feel guilt, despite turning away a pregnant woman who came to her for help. The emphasis on 'I' shows self-absorption. 'Nothing I'm ashamed of' reveals a conscience completely deadened by class superiority. She is the play's most morally static character.",
  },
  {
    quote: "He should be made an example of",
    speaker: "Mrs Birling (Act 2)",
    analysis:
      "Dramatic irony at its most devastating. Mrs Birling is unknowingly condemning her own son. She demands punishment for the father of Eva's child, not realising it is Eric. Her self-righteous certainty makes the revelation more powerful. This is Priestley's masterful use of dramatic structure.",
  },
  {
    quote: "You're not the kind of father a chap could go to when he's in trouble",
    speaker: "Eric (Act 3)",
    analysis:
      "Eric exposes the emotional coldness behind the Birlings' respectable facade. The family may be wealthy, but there is no genuine communication or support. This explains Eric's alcoholism and recklessness - he has no parental guidance. Priestley suggests the upper class neglects its own children as well as the poor.",
  },
  {
    quote: "I was in that state when a chap easily turns nasty",
    speaker: "Eric (Act 3)",
    analysis:
      "Eric's euphemistic admission that he forced himself on Eva. 'That state' refers to drunkenness. 'Turns nasty' minimises sexual violence through understatement. The passive construction ('turns nasty') avoids taking full responsibility. Priestley exposes how language can obscure the reality of male violence.",
  },
  {
    quote: "You killed her - and the child she'd have had too",
    speaker: "Eric (Act 3)",
    analysis:
      "Eric directly accuses his mother. The bluntness is shocking after an evening of euphemism and evasion. 'The child she'd have had too' doubles the horror - Mrs Birling's refusal killed both mother and unborn child. This is the most emotionally raw moment in the play.",
  },
  {
    quote: "We are members of one body. We are responsible for each other",
    speaker: "Inspector Goole (Act 3)",
    analysis:
      "The Inspector's final speech and the play's thesis statement. 'Members of one body' is both socialist (the body politic) and Christian (the body of Christ). The short, declarative sentences have the force of commandments. This is Priestley speaking directly to his 1945 audience, arguing for the welfare state and collective responsibility.",
  },
  {
    quote: "They will be taught it in fire and blood and anguish",
    speaker: "Inspector Goole (Act 3)",
    analysis:
      "A prophetic warning. For the characters in 1912, this refers to World War I (1914-18). For the 1945 audience, it refers to both world wars. The tricolon ('fire and blood and anguish') builds in intensity. The conditional 'if' offers a choice: learn voluntarily or suffer the consequences. The final phone call suggests the Birlings chose to ignore the lesson.",
  },
  {
    quote: "You're pretending everything is just as it was before",
    speaker: "Sheila (Act 3)",
    analysis:
      "Sheila challenges her parents' attempt to dismiss the evening's events. 'Pretending' accuses them of deliberate self-deception. She understands that the moral truths revealed cannot be un-learned, regardless of whether the Inspector was real. This is the generational divide in action.",
  },
  {
    quote: "Public men, Mr Birling, have responsibilities as well as privileges",
    speaker: "Inspector Goole (Act 1)",
    analysis:
      "The Inspector directly challenges Birling's belief that power comes without obligation. 'Responsibilities as well as privileges' is the foundation of social democracy. The formal address ('Mr Birling') is controlled and authoritative. This sentence applies to every powerful institution in society.",
  },
  {
    quote: "We are responsible for each other… in fire and blood and anguish",
    speaker: "Inspector Goole (Act 3)",
    analysis:
      "The Inspector's warning connects responsibility to consequences. The shift from 'we are' (present, inclusive) to 'they will be taught' (future, inevitable) creates urgency. Priestley gives his audience a choice: build a just society now, or repeat the catastrophes of the past.",
  },
  {
    quote: "Millions and millions of Eva Smiths and John Smiths still left with us",
    speaker: "Inspector Goole (Act 3)",
    analysis:
      "Eva becomes representative of the entire working class. The triple repetition of 'millions' hammers home the scale of the problem. 'John Smiths' extends the argument to men as well. 'Still left with us' insists that this is an ongoing, current problem, not a historical one. The common surname 'Smith' makes the point universal.",
  },
];

const contextPoints = [
  {
    title: "Set in 1912, Written in 1945",
    detail:
      "This dual time setting is crucial. The play is set in 1912, before World War I, when the class system was rigid and unchallenged. It was written in 1945, just after World War II, when Britain was ready for radical social change. Priestley uses the gap between these dates to create powerful dramatic irony: the audience knows that Birling's confident predictions about peace and prosperity are catastrophically wrong.",
  },
  {
    title: "Priestley's Socialism",
    detail:
      "J.B. Priestley was a committed socialist who believed in collective responsibility, public ownership, and the welfare state. He gave influential radio broadcasts during WWII (the 'Postscripts') that argued for a fairer post-war society. An Inspector Calls is his most direct political play. He wrote it to persuade his audience to vote Labour in the 1945 election - which they did, in a landslide victory.",
  },
  {
    title: "The Welfare State",
    detail:
      "The play was first performed in 1945, the same year the Labour government was elected. Labour created the NHS (1948), nationalised key industries, and built the modern welfare state. Mrs Birling's charity committee represents the old model of voluntary, class-controlled charity - unreliable and subject to prejudice. Priestley argues for state-guaranteed support that cannot be withheld by individuals.",
  },
  {
    title: "Edwardian England (1901-1910)",
    detail:
      "The play is set in the Edwardian era, a period of extreme inequality. The wealthy lived in luxury while the working class endured poverty, poor housing, and dangerous working conditions. Women had no vote. Trade unions were weak. There was no safety net for the unemployed or sick. The Birling family's comfortable dining room represents this privileged bubble.",
  },
  {
    title: "World War I (1914-18) and World War II (1939-45)",
    detail:
      "The Inspector's warning about 'fire and blood and anguish' refers to both world wars. Priestley (and his audience) believed that the selfishness and inequality of Edwardian society had contributed to these catastrophes. The wars broke down class barriers and created a sense of shared sacrifice. Priestley argues that post-war Britain must not return to pre-war inequality.",
  },
  {
    title: "The Women's Movement",
    detail:
      "In 1912, women could not vote, had limited legal rights, and were economically dependent on men. The suffragette movement was active but had not yet succeeded. Eva Smith's vulnerability is specifically gendered: she is exploited by men and judged by women of higher class. By 1945, women had gained the vote (1918/1928) and had proved their capabilities during the war.",
  },
];

const essayQuestions = [
  {
    question:
      "How does Priestley present ideas about responsibility in An Inspector Calls?",
    plan: [
      "Introduction: Priestley uses the play to argue that we are all responsible for each other. The Inspector embodies this message while the Birlings represent different responses to it.",
      "Mr Birling rejects responsibility: 'A man has to look after himself.' His dramatic irony (Titanic, war predictions) destroys his credibility. Priestley discredits individualism before the Inspector arrives.",
      "Sheila accepts responsibility: 'If I could help her now, I would.' Her immediate guilt and moral growth represent Priestley's hope for the younger generation.",
      "Mrs Birling refuses responsibility: 'I did nothing I'm ashamed of.' Her charity work is revealed as class-controlled gatekeeping, not genuine compassion.",
      "The Inspector defines responsibility: 'We are members of one body.' This socialist manifesto argues for collective responsibility. The warning about 'fire and blood and anguish' connects individual selfishness to national catastrophe.",
      "Context: 1945 audience choosing between old individualism and new collectivism. Labour's welfare state. The play is a political argument disguised as a detective story.",
    ],
  },
  {
    question:
      "How does Priestley use the character of Sheila to convey his ideas?",
    plan: [
      "Sheila's starting point: privileged, naive, concerned with shopping and her engagement. She represents the pre-war upper-middle class in their comfortable ignorance.",
      "Her wrongdoing: getting Eva fired from Milwards out of jealousy. Shows how casual privilege can destroy lives. But she immediately feels genuine remorse.",
      "Her moral awakening: 'But these girls aren't cheap labour - they're people.' She is the first to see the Inspector's point. She tries to warn her family.",
      "Her challenge to the older generation: 'You're pretending everything is just as it was before.' She refuses to dismiss the evening's revelations, even when the Inspector is discredited.",
      "She represents Priestley's hope: the younger generation who will learn from the past and build a fairer society. Her transformation mirrors the social transformation Priestley advocates.",
      "Context: 1945 audience as 'Sheilas' - will they accept the lesson of the wars and vote for change, or will they be 'Birlings' who try to go back to the old ways?",
    ],
  },
  {
    question:
      "How does Priestley explore the theme of class in An Inspector Calls?",
    plan: [
      "The Birlings' comfortable world: the stage directions describe 'a fairly large suburban house.' Their wealth insulates them from the reality of working-class life.",
      "Birling and labour: Eva is sacked for asking for a living wage. 'These people' and 'come down sharply' - language reveals the violence of class power.",
      "Mrs Birling and class prejudice: 'Girls of that class' - she cannot see past social position to recognise humanity. Her charity is class-controlled gatekeeping.",
      "Gerald and class exploitation: his relationship with Eva/Daisy was only possible because of the power imbalance. Her 'intense gratitude' disturbs because it reveals dependency.",
      "Eva as the working class: she is given no voice in the play, just as the working class had no political voice in 1912. Her story is told entirely through the words of those who exploited her.",
      "Context: the class system in 1912 vs 1945. Wartime had broken down class barriers. Priestley argues the old hierarchy must not be restored.",
    ],
  },
];

/* ─── Component ──────────────────────────────────────────────── */

export default function InspectorCallsPage() {
  return (
    <>

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            AQA English Literature &middot; Paper 2
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            An Inspector Calls &mdash; Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            J.B. Priestley &middot; Written 1945 &middot; Set in 1912 &middot; Three-Act Play
          </p>
        </div>
      </section>

      {/* Quick navigation */}
      <nav className="sticky top-0 z-30 bg-card/95 backdrop-blur border-b border-border px-4 py-3 overflow-x-auto">
        <div className="mx-auto flex max-w-5xl gap-2 text-xs font-medium sm:text-sm sm:gap-4 whitespace-nowrap">
          {[
            ["#plot", "Plot"],
            ["#characters", "Characters"],
            ["#themes", "Themes"],
            ["#quotations", "Quotations"],
            ["#context", "Context"],
            ["#essays", "Essay Planning"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-border px-3 py-1 text-muted-foreground transition hover:bg-primary hover:text-foreground hover:border-primary"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Plot Summary ─────────────────────────────────────────── */}
      <section id="plot" className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">Plot Summary</h2>
        <p className="mt-2 text-muted-foreground">
          The play takes place in real time over a single evening. The Inspector
          arrives and systematically reveals each character&apos;s connection to
          Eva Smith&apos;s death.
        </p>

        <div className="mt-8 space-y-8">
          {plotSummary.map((section) => (
            <div key={section.section}>
              <h3 className="text-lg font-bold text-primary">
                {section.section}: {section.title}
              </h3>
              <div className="mt-3 space-y-3">
                {section.summary.map((para, i) => (
                  <p
                    key={i}
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Characters ───────────────────────────────────────────── */}
      <section id="characters" className="bg-muted px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Character Analysis
          </h2>

          <div className="mt-8 space-y-8">
            {characters.map((char) => (
              <div
                key={char.name}
                className="rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {char.name}
                  </h3>
                  <span className="text-sm text-accent font-medium">
                    {char.role}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {char.description}
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-foreground">
                    Key Points for Analysis
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    {char.keyPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-foreground">
                    Key Quotations
                  </h4>
                  <div className="mt-2 space-y-1">
                    {char.keyQuotes.map((q) => (
                      <p
                        key={q}
                        className="text-sm italic text-primary bg-primary/10 rounded px-3 py-1.5"
                      >
                        {q}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Themes ───────────────────────────────────────────────── */}
      <section id="themes" className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">Key Themes</h2>

        <div className="mt-8 space-y-8">
          {themes.map((theme) => (
            <div
              key={theme.title}
              className={`rounded-xl border p-6 ${theme.colour}`}
            >
              <h3 className="text-xl font-bold text-foreground">
                {theme.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {theme.analysis}
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-foreground">
                  Key Points
                </h4>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {theme.keyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-foreground">
                  Key Quotations
                </h4>
                <div className="mt-2 space-y-1">
                  {theme.keyQuotes.map((q) => (
                    <p
                      key={q}
                      className="text-sm italic text-muted-foreground bg-card/60 rounded px-3 py-1.5"
                    >
                      {q}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Key Quotations ───────────────────────────────────────── */}
      <section id="quotations" className="bg-primary/10 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Key Quotations with Analysis
          </h2>

          <div className="mt-8 space-y-4">
            {keyQuotations.map((q, i) => (
              <div
                key={i}
                className="rounded-xl bg-card p-5 shadow-md border border-border"
              >
                <p className="text-base font-semibold italic text-primary">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p className="mt-1 text-xs text-accent font-medium">
                  {q.speaker}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {q.analysis}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Context ──────────────────────────────────────────────── */}
      <section id="context" className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">
          Historical and Social Context
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {contextPoints.map((ctx) => (
            <div
              key={ctx.title}
              className="rounded-xl border border-border p-5"
            >
              <h3 className="font-bold text-primary">{ctx.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {ctx.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Essay Planning ───────────────────────────────────────── */}
      <section id="essays" className="bg-muted px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Essay Planning: Common Questions
          </h2>

          <div className="mt-8 space-y-6">
            {essayQuestions.map((eq, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <h3 className="font-bold text-foreground">
                  Q: {eq.question}
                </h3>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Suggested Paragraph Plan
                  </p>
                  <ol className="mt-3 space-y-2 text-sm text-muted-foreground list-decimal pl-5">
                    {eq.plan.map((p, j) => (
                      <li key={j} className="leading-relaxed">
                        {p}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <Link
          href="/resources/english-literature/aqa"
          className="text-sm font-medium text-accent hover:text-primary transition"
        >
          &larr; Back to AQA English Literature
        </Link>
      </section>

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4 mx-auto max-w-5xl px-4">
        An Inspector Calls &copy; The Estate of J.B. Priestley. Short quotations reproduced under the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose of criticism and review.
      </p>

    </>
  );
}
