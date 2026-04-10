"use client";

import { useState } from "react";
import { AITextArea } from "@/components/AITextArea";

/* ─── Expandable section component ──────────────────────────── */

function Section({
  id,
  title,
  children,
  defaultOpen = false,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section id={id} className="border border-border rounded-lg bg-card shadow-md">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
        aria-expanded={open}
      >
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        <svg
          className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="border-t border-border px-5 pb-5 pt-4">{children}</div>}
    </section>
  );
}

/* ─── Data ───────────────────────────────────────────────────── */

const scenes = [
  {
    act: "Act One",
    scenes: [
      {
        scene: "Opening & The Narrator's Prologue",
        summary:
          "The Narrator introduces the story of the Johnstone twins who were 'separated at birth' and tells the audience from the very start that both brothers will die. This use of dramatic irony means the audience watches the entire play knowing the tragic outcome, creating tension and a sense of inevitability. The Narrator functions like a Greek chorus, commenting on events and reminding us of the superstitious prophecy that 'if either twin was told he was one of a pair, they shall both immediately die.'",
      },
      {
        scene: "Mrs Johnstone's Introduction",
        summary:
          "We meet Mrs Johnstone, a working-class mother from Liverpool who is already struggling to feed her existing children. Her husband has left her for a younger woman. She works as a cleaner for the wealthy Mrs Lyons. Through the song 'Marilyn Monroe', Mrs Johnstone reveals her romantic, optimistic nature and how her life has been shaped by broken promises. She discovers she is pregnant with twins, adding to her desperation.",
      },
      {
        scene: "The Pact with Mrs Lyons",
        summary:
          "Mrs Lyons, who cannot have children of her own, persuades Mrs Johnstone to give up one of the twins. She manipulates Mrs Johnstone by arguing the child will have a better life and by exploiting her superstitious nature, telling her that 'if either twin was told he was one of a pair, they shall both immediately die.' Mrs Johnstone reluctantly agrees. This moment establishes the central dramatic tension and the class-based power dynamic: Mrs Lyons has the social authority to take what she wants from a vulnerable working-class woman.",
      },
      {
        scene: "The Twins Are Born and Separated",
        summary:
          "The twins are born and Mrs Lyons takes Edward (Eddie). Mrs Johnstone keeps Michael (Mickey). Mrs Lyons fires Mrs Johnstone to prevent her from seeing Eddie. She places the Bible on the table and makes Mrs Johnstone swear on it, reinforcing the superstitious bond. Mrs Lyons becomes increasingly paranoid and possessive, while Mrs Johnstone is grief-stricken but powerless to challenge the arrangement.",
      },
      {
        scene: "Mickey and Eddie Meet (Age Seven)",
        summary:
          "At seven years old, Mickey and Eddie meet by chance and become instant friends. Their differences are immediately apparent: Mickey knows street slang and swear words while Eddie speaks formally and is fascinated by Mickey's language. They prick their fingers and become 'blood brothers', unaware they are actual brothers. Eddie gives Mickey sweets; Mickey teaches Eddie to swear. Their friendship is natural and joyful, highlighting how class barriers are learned, not innate. Mrs Lyons is horrified when she discovers the friendship.",
      },
      {
        scene: "Mrs Lyons's Growing Fear",
        summary:
          "Mrs Lyons becomes increasingly anxious and irrational. She tries to keep Eddie away from Mickey and the Johnstone estate. She reminds Mrs Johnstone of the superstition and even strikes Eddie when he mentions his new friend. Mrs Lyons's behaviour becomes controlling and unstable, contrasting with Mrs Johnstone's warmer, more relaxed parenting. Russell suggests that wealth and privilege do not guarantee happiness or good parenting.",
      },
      {
        scene: "The Policeman's Visit",
        summary:
          "A policeman visits both households after Mickey, Eddie, and Linda are caught throwing stones. At the Johnstone house, the policeman is threatening and condescending, warning that the children could end up in court. At the Lyons house, the same policeman is deferential and polite, treating the incident as a harmless prank. This scene is one of Russell's most direct critiques of class inequality: the law treats identical behaviour differently based on social class.",
      },
      {
        scene: "The Move to the Country",
        summary:
          "The Johnstone family is rehoused to Skelmersdale, a new town in the countryside. Mrs Johnstone is hopeful about the fresh start, singing 'Bright New Day'. The move initially seems positive: the children have space, the environment is cleaner, and Mickey is temporarily separated from Eddie. However, the Lyons family also moves nearby, ensuring the twins will meet again. The move represents the urban clearances of 1960s-70s Liverpool, when working-class families were relocated to new estates.",
      },
    ],
  },
  {
    act: "Act Two",
    scenes: [
      {
        scene: "Teenage Years (Age Fourteen)",
        summary:
          "Mickey, Eddie, and Linda are now teenagers. Mickey is awkward and self-conscious, struggling to express his feelings for Linda. Eddie is confident and articulate, attending a private boarding school. Despite their different upbringings, the friendship endures when they reconnect. Linda is developing into a strong, independent character who clearly likes Mickey but is frustrated by his inability to communicate his feelings. The class gap is widening: Eddie has opportunities that Mickey does not.",
      },
      {
        scene: "Eddie Goes Away to University",
        summary:
          "Eddie leaves for university while Mickey remains in Liverpool with few prospects. This is a pivotal moment: their paths diverge decisively. Eddie experiences personal growth, education, and social mobility. Mickey enters the adult working world, taking a factory job. The song 'That Guy' captures Mickey's frustration and envy. Russell makes clear that their different outcomes are not due to ability or character but to the class system that determines their opportunities from birth.",
      },
      {
        scene: "Mickey and Linda's Relationship",
        summary:
          "Mickey and Linda begin a relationship. Eddie, returning from university, is visibly disappointed but graciously supports them. Linda falls pregnant and she and Mickey marry quickly. Their early married life is happy but precarious: they are entirely dependent on Mickey's factory wage. Russell shows how working-class lives are shaped by economic vulnerability, where one setback can trigger a downward spiral.",
      },
      {
        scene: "Redundancy and Unemployment",
        summary:
          "Mickey is made redundant from the factory during the recession of the early 1980s. He cannot find work. The family faces poverty. This section directly reflects the mass unemployment in Liverpool and across northern England during the Thatcher era, when traditional industries collapsed. Russell shows how unemployment destroys not just livelihoods but identity and self-worth. Mickey becomes increasingly depressed, feeling that he has failed as a provider.",
      },
      {
        scene: "Sammy's Crime and Mickey's Imprisonment",
        summary:
          "Mickey's brother Sammy involves him in an armed robbery. Sammy shoots and kills a man during the robbery. Mickey, who served as lookout, is arrested and sentenced to prison. This represents the moment where Mickey's life is irrecoverably damaged. Russell suggests that poverty and desperation drive people towards crime, and that the criminal justice system punishes those who have already been failed by society. Mickey begins taking antidepressant medication in prison.",
      },
      {
        scene: "Mickey's Depression and Medication",
        summary:
          "After release from prison, Mickey is dependent on antidepressant pills. He is emotionally withdrawn, unable to connect with Linda or engage with life. Linda tries desperately to help him but he pushes her away. The medication keeps him 'level' but strips away his personality and capacity for joy. Russell uses Mickey's depression to show the psychological toll of poverty, unemployment, and incarceration on working-class men. Linda, desperate and lonely, turns to Eddie for help.",
      },
      {
        scene: "Linda and Eddie's Relationship",
        summary:
          "Linda contacts Eddie, now a successful local councillor, for help. Eddie uses his influence to get Mickey a job and the family a house. A relationship develops between Linda and Eddie. When Mrs Lyons, now mentally unstable, shows Mickey that Linda and Eddie have been meeting, Mickey is consumed by jealousy and rage. Russell creates sympathy for all three characters: Linda is driven by desperation, Eddie by genuine care, and Mickey by a sense of betrayal compounded by years of suffering.",
      },
      {
        scene: "The Final Scene",
        summary:
          "Mickey confronts Eddie at the Town Hall with Sammy's gun. The Narrator delivers his final warning. Mrs Johnstone arrives and, in a desperate attempt to stop the violence, reveals the truth: Mickey and Eddie are twin brothers. Rather than resolving the conflict, this revelation destroys Mickey. He screams that he could have been the one raised in privilege, with the education and the opportunities. In the chaos, a shot is fired and Eddie is killed. Armed police then shoot Mickey dead. The twins lie side by side in death, finally united. The Narrator asks the audience whether it was superstition, fate, or class that killed them.",
      },
    ],
  },
];

const characters = [
  {
    name: "Mrs Johnstone",
    role: "Mother of Mickey and Eddie",
    analysis:
      "A warm, loving, but economically powerless working-class mother. She is superstitious, generous, and emotionally open. Her decision to give away Eddie is driven by poverty, not lack of love. She is manipulated by Mrs Lyons, who exploits both her financial vulnerability and her superstitious nature. Throughout the play, Mrs Johnstone represents the working-class experience: she works hard, loves her children, and does her best, but she is consistently failed by a system that offers her no security. Her songs ('Marilyn Monroe', 'Easy Terms', 'Tell Me It's Not True') reveal a woman shaped by broken promises and romantic idealism. She is sympathetic but not blameless: her decision to give away a child, however understandable, sets the tragedy in motion. At the play's end, her revelation of the twins' identity triggers the catastrophe she has spent a lifetime trying to prevent.",
  },
  {
    name: "Mrs Lyons",
    role: "Eddie's adoptive mother",
    analysis:
      "A middle-class woman who initially appears sympathetic (she desperately wants a child) but becomes increasingly manipulative, paranoid, and unstable. She exploits Mrs Johnstone's vulnerability to take Eddie, then fires her to maintain control. She invents the superstition about the twins dying as a manipulation tactic, but ironically comes to believe it herself. As Eddie grows up, her possessiveness and anxiety intensify: she tries to control his friendships, strikes him, and eventually descends into near-madness. She represents the destructive potential of privilege: her wealth gives her power over Mrs Johnstone, but her inability to control events drives her to increasingly desperate acts. By the play's end, it is Mrs Lyons who shows Mickey that Linda and Eddie have been meeting, directly triggering the final tragedy. Russell uses her to show that the middle class, too, are damaged by the class system's rigid divisions.",
  },
  {
    name: "Mickey Johnstone",
    role: "One of the twins, raised by Mrs Johnstone",
    analysis:
      "Mickey's trajectory from lively, funny seven-year-old to depressed, pill-dependent adult is the play's most devastating illustration of how class determines life outcomes. As a child, Mickey is energetic, cheeky, and naturally charismatic. As a teenager, he is awkward but endearing, unable to articulate his feelings for Linda. As an adult, he is destroyed by unemployment, poverty, crime, and imprisonment. His dependence on antidepressants after prison strips him of the personality that defined him. Mickey's final speech is the play's emotional climax: 'I could have been him!' expresses the rage and grief of a man who understands that his suffering was not inevitable but was determined by which mother raised him. Russell uses Mickey to argue that talent and character are irrelevant when the system denies opportunity based on class. Mickey is not less capable than Eddie; he is less fortunate.",
  },
  {
    name: "Edward (Eddie) Lyons",
    role: "One of the twins, raised by Mrs Lyons",
    analysis:
      "Eddie is generous, articulate, and genuinely kind. Raised in privilege, he receives a private education, attends university, and becomes a local councillor. His friendship with Mickey is sincere: he is fascinated by Mickey's world and repeatedly crosses class boundaries to maintain the relationship. Eddie's generosity (giving Mickey sweets, lending him money, finding him a job) is genuine but also highlights the power imbalance between them. He can afford to be generous because he has never experienced scarcity. His relationship with Linda in the final act is complex: he genuinely cares for her and Mickey, but his privilege allows him to 'help' in ways that ultimately humiliate Mickey. Eddie represents the best of the middle class, yet Russell shows that even his goodness cannot overcome the structural inequality that divides him from his twin.",
  },
  {
    name: "Linda",
    role: "Childhood friend, Mickey's wife",
    analysis:
      "Linda is the strongest and most resilient character in the play. As a child, she is bold and fearless, standing up for Mickey against bullies. As a teenager, she is frustrated by Mickey's inability to express his feelings but remains loyal. As an adult, she is the one who holds the family together when Mickey falls apart: she works, cares for their child, and tries to get Mickey help. Her turn to Eddie is driven not by disloyalty but by desperation: Mickey has withdrawn into medication, and Eddie offers practical help. Linda represents the impossible position of working-class women: she bears the emotional and practical burden of poverty while receiving no support from the systems that should help. Russell creates deep sympathy for Linda, refusing to cast her as a villain for turning to Eddie.",
  },
  {
    name: "The Narrator",
    role: "Chorus figure, commentator",
    analysis:
      "The Narrator operates outside the main action, functioning like a Greek chorus. He opens the play by revealing the ending (the twins' deaths), creating dramatic irony that pervades every scene. He reappears throughout to comment on events, issue warnings, and remind the audience of the superstition. His songs ('The Devil's Got Your Number', 'Shoes Upon the Table') create an atmosphere of foreboding and inevitability. He directly addresses the audience, breaking the fourth wall and forcing them to consider who or what is responsible for the tragedy. In the final scene, he poses the central question: is it superstition, fate, or class that killed the brothers? The Narrator represents conscience, fate, and the audience's own judgement. Russell uses him to prevent the audience from becoming passively absorbed in the story, constantly reminding them that this is a constructed narrative with a political argument.",
  },
  {
    name: "Sammy Johnstone",
    role: "Mickey's older brother",
    analysis:
      "Sammy represents the extreme consequence of deprivation and neglect. As a child, he is destructive and aggressive: he burns insects, vandalises property, and bullies other children. As an adult, he turns to crime, eventually committing armed robbery and murder. Sammy is never given the attention or support that might have redirected his energy. Russell uses Sammy as a warning: this is what happens when society abandons its most vulnerable young people. Sammy also serves a structural function: it is his crime that drags Mickey down, demonstrating how poverty traps entire families in cycles of deprivation. Sammy never had the chance that Eddie received simply by being raised in a different postcode.",
  },
];

const themes = [
  {
    name: "Social Class and Inequality",
    detail:
      "The central theme of the play. Russell argues that class, not character, determines life outcomes. Mickey and Eddie are genetically identical twins, yet their lives diverge dramatically because of the families they are raised in. Eddie receives private education, university, and professional employment. Mickey gets a comprehensive education, a factory job, redundancy, and prison. The policeman scene (Act One) shows how authority treats identical behaviour differently based on class. Russell's Liverpool setting is crucial: the city experienced extreme class division, industrial decline, and unemployment during the 1970s-80s. The play does not suggest that working-class life is without value (Mrs Johnstone's warmth contrasts with Mrs Lyons's coldness), but it insists that the material consequences of class are devastating and unjust.",
  },
  {
    name: "Nature vs Nurture",
    detail:
      "The twins experiment at the play's heart asks: what makes us who we are? Mickey and Eddie share identical DNA but are raised in radically different environments. Their contrasting outcomes suggest that nurture (environment, opportunity, class) is far more powerful than nature (genetics, innate ability). Eddie's confidence, vocabulary, and life chances come from his upbringing, not his biology. Mickey's decline is caused by poverty and lack of opportunity, not lack of ability or character. Russell uses the twins to make a political argument: if we accept that nurture shapes outcomes, then society has a responsibility to ensure that all children receive equal opportunities. The play challenges the conservative view that inequality reflects natural differences in talent or effort.",
  },
  {
    name: "Superstition and Fate",
    detail:
      "The superstition that 'if either twin was told he was one of a pair, they shall both immediately die' hangs over the entire play. Mrs Lyons invents it to control Mrs Johnstone, but it takes on a life of its own: Mrs Johnstone genuinely believes it, and Mrs Lyons comes to believe her own lie. The Narrator reinforces the sense of fate through repeated references to 'the devil' and 'shoes upon the table'. Russell uses superstition as a dramatic device to create tension and inevitability, but the play's final question challenges the audience: was it really superstition that killed the brothers, or was it the class system? Russell implies that superstition is a way of avoiding responsibility. If we blame fate, we do not have to blame society. The superstition is a metaphor for all the myths that justify inequality: the idea that some people are simply 'meant' to succeed or fail.",
  },
  {
    name: "Friendship and Brotherhood",
    detail:
      "The friendship between Mickey and Eddie is the play's emotional core. As children, their bond is instant, natural, and joyful: class differences are a source of fascination, not division. They become 'blood brothers' by pricking their fingers, unknowingly enacting a literal truth. As they grow up, class pulls them apart. Eddie's education gives him a vocabulary and confidence that Mickey lacks. Eddie can afford generosity; Mickey cannot afford pride. Their friendship survives adolescence but is destroyed in adulthood by the material realities of class: unemployment, depression, and the power imbalance that Eddie's privilege creates. Russell suggests that genuine human connection cannot survive structural inequality. The tragedy is not that Mickey and Eddie stop caring about each other, but that the system makes their friendship impossible.",
  },
  {
    name: "Growing Up and Loss of Innocence",
    detail:
      "The play spans from the twins' birth to their deaths at around thirty. Russell structures the play to show how childhood innocence is progressively destroyed by adult realities. At seven, Mickey and Eddie are carefree and their class differences are comic. At fourteen, the differences begin to cause tension. In adulthood, the gap becomes unbridgeable. Russell uses the song 'Tell Me It's Not True' and the repeated motif of childhood games (cowboys and Indians, playing with guns) to contrast the innocence of play with the violent reality of adulthood. The toy guns of childhood become the real gun of the final scene. Russell argues that the class system robs working-class children of their futures: Mickey's lively childhood self is systematically destroyed by unemployment, poverty, and despair.",
  },
  {
    name: "Fate vs Free Will",
    detail:
      "The Narrator's prologue tells us the ending before the play begins, creating a sense of inevitability. Throughout the play, characters make choices, but Russell questions whether those choices are truly free. Mrs Johnstone 'chooses' to give away Eddie, but poverty leaves her with no real alternative. Mickey 'chooses' to participate in the robbery, but unemployment and desperation limit his options. The play's structure (beginning with the ending) implies that the outcome is predetermined, but the Narrator's final question asks whether it is fate, superstition, or class that determines the tragedy. Russell suggests that in an unequal society, the appearance of free choice disguises the reality of structural determination. Working-class characters are not free to choose differently because the system constrains their options at every turn.",
  },
];

const keyQuotes = [
  {
    quote: "If either twin was told he was one of a pair, they shall both immediately die.",
    speaker: "Mrs Lyons / The Narrator",
    context: "Act One",
    analysis:
      "The superstition that drives the entire plot. Mrs Lyons invents it to prevent Mrs Johnstone from reclaiming Eddie, but it becomes a self-fulfilling prophecy. The formal, almost biblical register ('they shall both immediately die') gives it the weight of fate. Russell uses this as a structural device: the audience knows from the start that the revelation will be fatal, creating dramatic irony throughout. The superstition also functions as a metaphor for the unspoken rules that maintain class division: the idea that crossing class boundaries will lead to destruction.",
  },
  {
    quote: "We're blood brothers.",
    speaker: "Mickey and Eddie",
    context: "Act One",
    analysis:
      "The boys' pact, made by pricking their fingers and mixing blood, is deeply ironic because they are already biological brothers. The ritual enacts a literal truth they do not know. 'Blood brothers' carries a double meaning throughout the play: the voluntary bond of friendship and the involuntary bond of family. Russell uses this moment to show that the natural connection between the twins is so strong that it reasserts itself despite the separation. The tragedy is that society cannot accommodate this connection.",
  },
  {
    quote: "He told me I was like Marilyn Monroe.",
    speaker: "Mrs Johnstone",
    context: "Act One (song: 'Marilyn Monroe')",
    analysis:
      "Mrs Johnstone's opening song reveals her romantic, trusting nature and how it has been exploited. Her husband compared her to Marilyn Monroe to seduce her, then left when she became worn down by poverty and childbearing. The Marilyn Monroe reference is significant: Monroe was glamorous but exploited and ultimately destroyed. Russell draws a parallel between Monroe and Mrs Johnstone: both are working-class women whose lives are shaped by the promises of others. The song establishes Mrs Johnstone as a sympathetic character whose optimism makes her vulnerable.",
  },
  {
    quote: "Living on the never never, constant as the Northern Star.",
    speaker: "Mrs Johnstone",
    context: "Act One (song: 'Easy Terms')",
    analysis:
      "This lyric captures the cycle of debt that traps working-class families. 'The never never' is a colloquial term for hire purchase (buying on credit), suggesting debts that are never fully paid. 'Constant as the Northern Star' is bitterly ironic: the only constant in Mrs Johnstone's life is debt and struggle. Russell uses the song to show how poverty is not a temporary condition but a permanent state enforced by economic structures. The musical form makes the audience engage emotionally with what might otherwise be an abstract political point.",
  },
  {
    quote: "You're not the same as him. You're not the same as him.",
    speaker: "Mrs Lyons",
    context: "Act One",
    analysis:
      "Mrs Lyons's desperate insistence that Eddie is different from Mickey is ironic because they are genetically identical. Her repetition reveals her anxiety and her need to maintain the class distinction that legitimises her possession of Eddie. 'Not the same' is the play's central lie: the twins are the same, and only class makes them different. Russell uses Mrs Lyons's fear to show how the middle class depends on the myth of natural superiority to justify inequality.",
  },
  {
    quote: "If I was our Sammy, I'd smash him. I'd give him a good hidin'.",
    speaker: "Mickey",
    context: "Act One",
    analysis:
      "Seven-year-old Mickey's comic bravado reveals both his admiration for his older brother Sammy and his frustration at being the younger child. The Liverpool dialect ('our Sammy', 'a good hidin'') grounds him in his working-class community. Russell uses Mickey's childhood energy and humour to make his later decline all the more devastating. The reference to violence, even in play, foreshadows the real violence that will destroy both twins.",
  },
  {
    quote: "Gis a sweet.",
    speaker: "Mickey",
    context: "Act One",
    analysis:
      "Mickey's first words to Eddie. The informal demand ('Gis' = give us) contrasts with Eddie's polite, formal speech. The sweets function as a symbol of the material inequality between them: Eddie has sweets to share because his family has money. Mickey asks because his family has nothing spare. Russell uses this small detail to establish the economic reality that underpins the entire play. Even at seven, the class system determines who gives and who receives.",
  },
  {
    quote: "Pissed off. You say smashing things, don't you? Smashing.",
    speaker: "Eddie",
    context: "Act One",
    analysis:
      "Eddie's fascination with Mickey's slang reveals how class segregation works: the boys inhabit different linguistic worlds. Eddie finds Mickey's language exotic and exciting precisely because his privileged upbringing has sheltered him from it. The exchange is comic but also revealing: language marks class identity, and Eddie's delight in crossing linguistic boundaries mirrors his desire to cross class boundaries. Russell shows that as children, class differences are a source of curiosity and pleasure; only later do they become sources of pain.",
  },
  {
    quote: "And do we blame superstition for what came to pass? Or could it be what we, the English, have come to know as class?",
    speaker: "The Narrator",
    context: "Act Two (finale)",
    analysis:
      "The play's final and most important lines. The Narrator directly addresses the audience, forcing them to consider whether the twins' deaths were caused by superstition (fate) or class (social inequality). By framing it as a question, Russell refuses to let the audience off the hook: they must make their own judgement. The phrase 'we, the English' implicates the entire audience in a national class system. Russell's answer is clearly that class is responsible, but by posing it as a question, he makes the argument more persuasive than a simple statement would be.",
  },
  {
    quote: "I could have been him!",
    speaker: "Mickey",
    context: "Act Two (final scene)",
    analysis:
      "Mickey's most devastating line, delivered after Mrs Johnstone reveals that he and Eddie are twins. The cry expresses everything: rage at the injustice of his life, grief for the opportunities he was denied, and the agonising realisation that his suffering was not inevitable but was determined by an arbitrary decision made at birth. 'I could have been him' is the play's thesis distilled into five words. Russell ensures that the audience understands that Mickey is not angry at Eddie personally but at the system that gave one twin everything and the other nothing.",
  },
  {
    quote: "Tell me it's not true. Say it's just a story.",
    speaker: "Mrs Johnstone",
    context: "Act Two (final song)",
    analysis:
      "Mrs Johnstone's final song, sung over her dead sons. The desperate plea to deny reality echoes her lifelong tendency to cling to hopeful narratives. 'Say it's just a story' is meta-theatrical: it acknowledges that the audience has been watching a story, but the emotions it has produced are real. Russell uses the song to unite the audience's grief with Mrs Johnstone's, creating a powerful emotional climax that reinforces the political message. The repetition of 'tell me it's not true' mirrors the repeated warnings and superstitions that have punctuated the play.",
  },
  {
    quote: "There's shoes upon the table an' a spider's been killed.",
    speaker: "The Narrator",
    context: "Throughout (song: 'Shoes Upon the Table')",
    analysis:
      "The Narrator's recurring motif of bad omens creates an atmosphere of impending doom. 'Shoes upon the table' is a traditional superstition associated with death. Russell uses these folk beliefs to build tension and to comment on how working-class communities use superstition to explain misfortune that actually has social and economic causes. The song's repetition throughout the play creates a cyclical structure that reinforces the sense of inescapable fate.",
  },
  {
    quote: "The devil's got your number, he's lookin' through the door.",
    speaker: "The Narrator",
    context: "Throughout (song: 'The Devil's Got Your Number')",
    analysis:
      "This recurring line personifies fate as the devil, creating a sinister, Gothic atmosphere. 'Lookin' through the door' suggests surveillance and inevitability: the characters cannot escape their fate. Russell uses religious imagery (the devil) alongside folk superstition to create a multi-layered sense of doom. The Narrator's warnings function as a dramatic device, heightening tension while reminding the audience that the outcome is already determined.",
  },
  {
    quote: "But you know the devil's got your number, y'know he's gonna find you, y'know he's right behind you.",
    speaker: "The Narrator",
    context: "Act Two",
    analysis:
      "The intensification of the devil motif in Act Two mirrors the escalating tragedy. The shift from 'lookin' through the door' to 'right behind you' creates a sense of closing distance and imminent catastrophe. Russell accelerates the Narrator's warnings as the social pressures on Mickey intensify, connecting supernatural menace with social reality. The audience understands that 'the devil' is not a supernatural entity but the class system itself.",
  },
  {
    quote: "That guy, I could kill that guy.",
    speaker: "Mickey",
    context: "Act Two (song: 'That Guy')",
    analysis:
      "Mickey's song about envying Eddie is a crucial turning point. The phrase 'I could kill that guy' is dramatic irony at its most painful: the audience knows that Mickey will indeed be involved in Eddie's death. The song expresses class resentment: Mickey sees Eddie's ease, confidence, and success, and feels the injustice without being able to articulate it politically. Russell shows how the class system transforms natural brotherly affection into destructive envy.",
  },
  {
    quote: "Why is a blood brother more than a real brother?",
    speaker: "Eddie",
    context: "Act One",
    analysis:
      "Eddie's innocent question unknowingly highlights the play's central irony: he and Mickey are real brothers, but neither knows it. The question also probes the nature of kinship: is the bond you choose (blood brotherhood) more meaningful than the bond of biology? Russell suggests that both natural connection and social circumstance matter, and that separating the twins violates both. The childish question carries the weight of the entire play's thematic argument.",
  },
  {
    quote: "Already a young man, and there's no sign of work.",
    speaker: "The Narrator",
    context: "Act Two",
    analysis:
      "This stark description of Mickey's situation in adulthood captures the reality of 1980s Liverpool, where youth unemployment reached catastrophic levels. 'No sign of work' suggests permanence, not a temporary setback. Russell uses the Narrator to state social facts that the characters themselves cannot articulate. The phrase connects Mickey's individual suffering to the broader political context of Thatcher-era deindustrialisation.",
  },
  {
    quote: "What's wrong with you, Mickey?",
    speaker: "Linda",
    context: "Act Two",
    analysis:
      "Linda's frustrated question to the depressed Mickey encapsulates the misunderstanding at the heart of their failing marriage. 'What's wrong with you' implies a personal failing, but Russell makes clear that what is wrong with Mickey is not personal but structural: unemployment, poverty, imprisonment, and medication have destroyed him. Linda's inability to reach Mickey despite her love shows the limits of individual agency in the face of systemic inequality.",
  },
  {
    quote: "I'm not saying a word. I'm not saying a word.",
    speaker: "Mrs Johnstone",
    context: "Throughout",
    analysis:
      "Mrs Johnstone's repeated assertion that she will keep the secret of the twins' identity is both a promise and a prison. Her silence is driven by superstitious fear but it also serves the class system: by keeping quiet, she allows Eddie to remain in his privileged position and Mickey in his disadvantaged one. Russell shows how secrecy and silence maintain social structures. When she finally breaks her silence in the final scene, the truth destroys rather than liberates.",
  },
  {
    quote: "Light romance, with your very own Doris Day.",
    speaker: "The Narrator",
    context: "Act Two",
    analysis:
      "The Narrator's sardonic description of Mickey, Eddie, and Linda's teenage years uses the language of romantic films to create ironic contrast. 'Light romance' suggests a carefree love story, but the audience knows the story ends in death. The reference to Doris Day (like the earlier Marilyn Monroe reference) connects the characters to popular culture fantasies that mask harsh realities. Russell uses these cultural references to show how romantic narratives distract from and disguise class inequality.",
  },
  {
    quote: "By the time I was twenty-five, I looked like forty-two.",
    speaker: "Mrs Johnstone",
    context: "Act One",
    analysis:
      "A devastating summary of how poverty ages working-class women. The specific numbers make it concrete and heartbreaking. Russell uses Mrs Johnstone's self-awareness to create sympathy: she understands what has happened to her but is powerless to change it. The line also explains why her husband left her for a younger woman, linking personal betrayal to economic deprivation. Physical ageing becomes a metaphor for the toll that poverty takes on every aspect of life.",
  },
  {
    quote: "There's a mad woman livin' next door.",
    speaker: "Mrs Johnstone",
    context: "Act Two",
    analysis:
      "Mrs Johnstone's description of Mrs Lyons after the Lyons family moves nearby. The casual colloquialism ('a mad woman') understates the seriousness of Mrs Lyons's deteriorating mental health. Russell uses the proximity of the two families to create dramatic tension and to show that class divisions persist even when the families live side by side. The irony is that Mrs Lyons's 'madness' is driven by the secret she shares with Mrs Johnstone: class anxiety and the fear of exposure.",
  },
  {
    quote: "Take no notice of him. He's only soft.",
    speaker: "Linda",
    context: "Act One",
    analysis:
      "Linda's defence of Mickey against mockery. 'Soft' in Liverpool dialect means gentle or sensitive, and Linda uses it affectionately. Her willingness to stand up for Mickey at seven years old foreshadows her lifelong role as his protector. Russell establishes Linda's strength early, making her later helplessness in the face of Mickey's depression all the more tragic. The line also characterises Mickey: his 'softness' is endearing as a child but becomes a vulnerability in the harsh adult world.",
  },
];

const dramaticDevices = [
  {
    device: "The Narrator as Chorus",
    detail:
      "The Narrator functions like a chorus in Greek tragedy: he stands outside the action, comments on events, and addresses the audience directly. He reveals the ending in the prologue, creating dramatic irony that pervades every scene. His recurring songs ('Shoes Upon the Table', 'The Devil's Got Your Number') build tension and a sense of inevitability. He poses the play's central question in the final lines, forcing the audience to consider whether class or superstition caused the tragedy. The Narrator prevents passive engagement: the audience is constantly reminded that this is a constructed story with a political argument.",
  },
  {
    device: "Songs and Music",
    detail:
      "Blood Brothers is a musical, and the songs are integral to its meaning. Mrs Johnstone's songs ('Marilyn Monroe', 'Easy Terms', 'Tell Me It's Not True') reveal her inner life and create emotional connection. The Narrator's songs create atmosphere and foreboding. Songs like 'That Guy' and 'Light Romance' capture teenage emotions. Russell uses the musical form to make political themes emotionally accessible: the audience feels the injustice of class inequality through melody and rhythm, not just dialogue. The contrast between the upbeat childhood songs and the desperate adult songs mirrors the loss of innocence.",
  },
  {
    device: "Dramatic Irony",
    detail:
      "The audience knows from the opening that the twins will die. This knowledge transforms every scene: the childhood games become poignant, the teenage friendships become bittersweet, and the adult conflicts become agonising. The audience also knows that Mickey and Eddie are brothers, creating additional irony in scenes where characters comment on their similarity or difference. Russell uses dramatic irony to create emotional intensity and to implicate the audience: we watch, knowing the outcome, just as society watches class inequality produce predictable tragedies.",
  },
  {
    device: "Staging and Set Design",
    detail:
      "Russell's stage directions call for a divided stage that represents the class divide: the Johnstone and Lyons households are visible simultaneously, allowing the audience to see the contrast in real time. The staging makes the thesis visible: two worlds, side by side, producing radically different outcomes. Lighting shifts mark the passage of time and changes in mood. The sparse, versatile set reflects the play's epic time span (thirty years) and encourages the audience to focus on the characters and themes rather than realistic detail.",
  },
  {
    device: "Juxtaposition",
    detail:
      "Russell constantly juxtaposes the twins' lives to highlight inequality. The policeman scene is the clearest example: the same incident produces a threat at the Johnstone house and a polite conversation at the Lyons house. As adults, Eddie goes to university while Mickey goes to the factory. Eddie becomes a councillor while Mickey becomes a prisoner. These juxtapositions are Russell's most effective argumentative tool: by placing contrasting outcomes side by side, he makes the audience see that class, not character, determines fate.",
  },
  {
    device: "Foreshadowing",
    detail:
      "The play is saturated with foreshadowing. The children's games of cowboys and Indians anticipate the real gun violence of the finale. Mickey's toy gun becomes Sammy's real gun. The blood brotherhood ritual foreshadows the blood spilled at the end. The Narrator's warnings escalate in urgency as the play progresses. Russell uses foreshadowing to create a sense of inevitability: the tragedy is not a surprise but a consequence. This structural choice supports the play's argument that class inequality produces predictable, preventable tragedies.",
  },
  {
    device: "Time Compression",
    detail:
      "The play covers approximately thirty years in two acts. Russell accelerates time to show how childhood innocence is progressively destroyed by adult realities. The rapid ageing of the characters (particularly Mickey's decline from seven to thirty) creates a sense of relentless forward momentum. The speed also prevents the audience from becoming comfortable: just as they enjoy the comedy of the children's scenes, the characters age and the tone darkens. This structural pacing mirrors the way poverty accelerates ageing and diminishes life chances.",
  },
];

const contextSections = [
  {
    title: "1980s Liverpool and Thatcher's Britain",
    content:
      "Blood Brothers is set against the backdrop of Liverpool from the 1960s to the early 1980s, a period of dramatic economic and social change. Liverpool's traditional industries (docks, manufacturing) were in terminal decline. Under Margaret Thatcher's Conservative government (1979-1990), monetarist economic policies accelerated deindustrialisation, leading to mass unemployment in northern cities. Liverpool was particularly hard hit: unemployment in some areas reached 40%. Thatcher's government was accused of deliberately managing the decline of cities like Liverpool, with a leaked cabinet memo suggesting Liverpool be subject to 'managed decline'. Russell, a Liverpudlian himself, wrote the play as a direct response to these conditions.",
  },
  {
    title: "Class Divide in Britain",
    content:
      "Britain's class system is central to the play. The divide between working class and middle class affected every aspect of life: education (comprehensive vs private schools), housing (council estates vs detached houses), employment (manual labour vs professional careers), healthcare, accent, and social expectations. Russell argues that class is the primary determinant of life outcomes in Britain. The play's twins experiment dramatises this argument: identical genetics, different class, radically different lives. The 1980s saw the gap between rich and poor widen significantly under Thatcher's policies, which cut taxes for the wealthy, reduced welfare spending, and broke the power of trade unions.",
  },
  {
    title: "Unemployment and Its Effects",
    content:
      "Mass unemployment is the catalyst for Mickey's decline. In the early 1980s, Britain experienced its worst recession since the 1930s. Manufacturing jobs disappeared as factories closed. For working-class men like Mickey, whose identity and self-worth were tied to their role as breadwinners, unemployment was psychologically devastating. Russell shows how unemployment leads to poverty, which leads to desperation, which leads to crime. This chain of causation is not presented as inevitable but as the predictable consequence of government policy choices. The play argues that unemployment is not a personal failure but a political one.",
  },
  {
    title: "Willy Russell: Background",
    content:
      "Willy Russell was born in Whiston, near Liverpool, in 1947 to a working-class family. He left school at fifteen with few qualifications and worked as a hairdresser before returning to education. His own experience of class barriers informs all his work, including Educating Rita, Shirley Valentine, and Blood Brothers. Russell understands the working-class experience from the inside, which gives his writing authenticity and emotional power. Blood Brothers was first performed as a school play in 1981, then transferred to the West End in 1983. It ran for over 24 years in London, making it one of the longest-running musicals in West End history.",
  },
  {
    title: "Housing and Urban Clearances",
    content:
      "The Johnstone family's move from inner-city Liverpool to Skelmersdale reflects the real urban clearance programmes of the 1960s-70s, when working-class families were relocated from slum housing to new towns. These moves were intended to improve living conditions but often disrupted established communities, separated families from support networks, and moved people away from employment. Russell shows the move as initially hopeful but ultimately insufficient: the class system follows the Johnstones to their new home. The proximity of the Lyons family in the new location ensures that the class divide remains visible.",
  },
  {
    title: "Superstition in Working-Class Culture",
    content:
      "Russell uses superstition both as a dramatic device and as a comment on working-class culture. Superstitions about shoes on tables, broken mirrors, and magpies were common in working-class communities. Russell treats these beliefs with respect rather than mockery, but he also suggests that superstition can be a way of explaining misfortune that has social and economic causes. By attributing tragedy to fate or bad luck, people avoid confronting the political structures that actually cause suffering. The play's final question challenges this: it was not superstition that killed the brothers but the class system.",
  },
];

const essayQuestions = [
  {
    question: "How does Russell present the effects of social class in Blood Brothers?",
    points: [
      "The twins as a 'nature vs nurture' experiment: identical genetics, different class, different outcomes",
      "The policeman scene: contrasting treatment of the same offence in different class settings",
      "Education: Eddie's private school and university vs Mickey's comprehensive school and factory",
      "Language: how dialect and register mark class identity (Mickey's slang vs Eddie's formal speech)",
      "The final scene: 'I could have been him!' as the play's thesis statement on class determinism",
      "Context: link to 1980s Liverpool, Thatcher's policies, and mass unemployment",
    ],
  },
  {
    question: "How does Russell use the Narrator to create dramatic tension?",
    points: [
      "The prologue: revealing the ending creates dramatic irony throughout the play",
      "Recurring songs: 'Shoes Upon the Table' and 'The Devil's Got Your Number' as motifs of doom",
      "Breaking the fourth wall: the Narrator addresses the audience, preventing passive engagement",
      "The Greek chorus function: commenting on the action from outside it",
      "The final question: forcing the audience to decide whether class or superstition killed the brothers",
      "The Narrator as the voice of conscience, fate, or society's judgement",
    ],
  },
  {
    question: "Explore how Russell presents the character of Mrs Johnstone.",
    points: [
      "Her warmth and generosity vs her economic powerlessness",
      "The Marilyn Monroe motif: romantic idealism and its exploitation",
      "Her superstitious nature and how Mrs Lyons manipulates it",
      "Her decision to give up Eddie: sympathy vs responsibility",
      "Her silence throughout the play: 'I'm not saying a word' as both promise and prison",
      "The final revelation and 'Tell Me It's Not True': the cost of breaking silence",
    ],
  },
  {
    question: "'Blood Brothers is more about politics than people.' How far do you agree?",
    points: [
      "Arguments for: the twins as a political thought experiment, the class critique, the Thatcher-era context",
      "Arguments against: the emotional depth of Mrs Johnstone, Mickey's psychological journey, Linda's resilience",
      "Russell's technique: using personal stories to make political arguments emotionally compelling",
      "The songs as a bridge between politics and emotion",
      "The final question: Russell addresses both political and human dimensions simultaneously",
      "Conclusion: the play is powerful precisely because it is about both -- politics without people is propaganda; people without politics is sentimentality",
    ],
  },
  {
    question: "How does Russell use dramatic irony in Blood Brothers?",
    points: [
      "The prologue reveals the deaths, making every subsequent scene ironic",
      "The blood brotherhood ritual: the boys are already biological brothers",
      "Mickey's 'I could kill that guy' about Eddie: foreshadowing the fatal confrontation",
      "Mrs Lyons's 'you're not the same as him': they are genetically identical",
      "The childhood gun games that prefigure the real gun violence of the finale",
      "The audience as complicit witnesses: we know the truth but, like Mrs Johnstone, cannot prevent the tragedy",
    ],
  },
];

/* ─── Page Component ─────────────────────────────────────────── */

export default function BloodBrothersStudyGuide() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="rounded-xl border bg-gradient-to-b from-primary/[0.06] to-transparent px-6 py-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          GCSE English Literature &mdash; Revision Notes
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Blood Brothers &mdash; Complete Study Guide
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Willy Russell&rsquo;s 1983 musical play. Act-by-act summaries, character analysis,
          themes, 22 key quotations with analysis, dramatic devices, context, and essay planning.
        </p>
      </div>

      {/* Quick nav */}
      <nav className="flex flex-wrap gap-2 text-sm" aria-label="Page sections">
        {["Scene Summaries", "Characters", "Themes", "Key Quotes", "Dramatic Devices", "Context", "Essay Planning", "Writer's Methods", "Grade 9 Points", "Exam Questions", "Practice Questions"].map(
          (s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-primary/30 px-3 py-1 text-foreground transition hover:bg-primary/10"
            >
              {s}
            </a>
          )
        )}
      </nav>

      {/* Scene Summaries */}
      <Section id="scene-summaries" title="Act-by-Act Summary" defaultOpen>
        <div className="space-y-6">
          {scenes.map((act) => (
            <div key={act.act}>
              <h3 className="mb-3 text-lg font-bold text-primary">{act.act}</h3>
              <div className="space-y-4">
                {act.scenes.map((s) => (
                  <div key={s.scene} className="rounded-lg border border-border bg-muted p-4">
                    <h4 className="font-semibold text-foreground">{s.scene}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Characters */}
      <Section id="characters" title="Character Analysis">
        <div className="space-y-5">
          {characters.map((c) => (
            <div key={c.name} className="rounded-lg border border-border bg-muted p-4">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
                <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {c.role}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.analysis}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Themes */}
      <Section id="themes" title="Key Themes">
        <div className="grid gap-4 sm:grid-cols-2">
          {themes.map((t) => (
            <div key={t.name} className="rounded-lg border border-border bg-muted p-4">
              <h3 className="font-semibold text-foreground">{t.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Key Quotes */}
      <Section id="key-quotes" title={`Key Quotations (${keyQuotes.length})`}>
        <p className="mb-4 text-sm text-muted-foreground">
          Each quotation includes detailed analysis suitable for GCSE-level essay responses, including references to song lyrics.
        </p>
        <div className="space-y-4">
          {keyQuotes.map((q, i) => (
            <div key={i} className="rounded-lg border-l-4 border-primary bg-muted p-4">
              <blockquote className="text-base font-medium italic text-foreground">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <p className="mt-1 text-xs font-semibold text-primary">
                {q.speaker} &mdash; {q.context}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{q.analysis}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Dramatic Devices */}
      <Section id="dramatic-devices" title="Dramatic Devices">
        <div className="space-y-4">
          {dramaticDevices.map((d) => (
            <div key={d.device} className="rounded-lg border border-border bg-muted p-4">
              <h3 className="font-semibold text-foreground">{d.device}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Context */}
      <Section id="context" title="Historical & Social Context">
        <div className="space-y-4">
          {contextSections.map((c) => (
            <div key={c.title} className="rounded-lg border border-border bg-muted p-4">
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.content}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Essay Planning */}
      <Section id="essay-planning" title="Essay Planning for Common Questions">
        <div className="space-y-5">
          {essayQuestions.map((eq, i) => (
            <div key={i} className="rounded-lg border border-border bg-muted p-4">
              <p className="font-medium text-foreground">{eq.question}</p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">Key points to cover:</p>
                <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                  {eq.points.map((p, j) => (
                    <li key={j}>&bull; {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Writer's Methods */}
      <Section id="writers-methods" title="Writer&rsquo;s Methods &amp; Techniques">
        <div className="space-y-4">
          {[
            {
              method: "Musical Form",
              detail:
                "Russell's choice to write a musical is itself a political act. Songs bypass rational defences and communicate directly through emotion. Mrs Johnstone's songs ('Marilyn Monroe', 'Easy Terms', 'Tell Me It's Not True') create empathy for a character who might otherwise be judged harshly. The Narrator's songs build dread. The contrast between upbeat childhood songs and desperate adult songs mirrors the loss of innocence. Music makes the political argument emotionally irresistible.",
            },
            {
              method: "Dramatic Irony",
              detail:
                "The audience knows from the opening that the twins will die and that they are brothers. This transforms every scene: the blood brotherhood ritual is poignant because they are already biological brothers; Mickey's 'I could kill that guy' is agonising foreshadowing; Mrs Lyons's 'you're not the same as him' is bitterly ironic. Russell uses dramatic irony to implicate the audience: like Mrs Johnstone, we know the truth but are powerless to prevent the tragedy.",
            },
            {
              method: "Juxtaposition",
              detail:
                "Russell constantly places contrasting scenes side by side. The policeman scene is the most explicit example: identical behaviour produces a threat at the Johnstone house and a polite conversation at the Lyons house. Adult outcomes (university vs factory, councillor vs prisoner) are juxtaposed to show that class, not character, determines fate. This technique makes the political argument visual and undeniable.",
            },
            {
              method: "The Narrator as Greek Chorus",
              detail:
                "The Narrator stands outside the action, commenting and warning. He reveals the ending in the prologue, creating dramatic irony. His recurring motifs ('shoes upon the table', 'the devil's got your number') build an atmosphere of inevitability. He breaks the fourth wall, preventing passive engagement. His final question forces the audience to judge: was it superstition or class? Russell uses him to ensure the play is never just entertainment but always argument.",
            },
            {
              method: "Symbolism of Guns",
              detail:
                "Guns appear throughout as a motif of escalating danger. At seven, Mickey and Eddie play cowboys with toy guns. As teenagers, they play with air rifles. As an adult, Sammy uses a real gun in the robbery. In the final scene, Mickey holds a real gun pointed at Eddie. The progression from toy to real weapon mirrors the loss of innocence and the way childhood play prefigures adult violence. Russell makes the connection between class deprivation and violence explicit through this sustained symbol.",
            },
            {
              method: "Dialect and Register",
              detail:
                "Russell uses language to mark class identity. Mickey speaks in Liverpool dialect: 'Gis a sweet', 'pissed off', 'a good hidin''. Eddie speaks in standard English with formal vocabulary: 'smashing', 'super'. As children, these differences are comic; as adults, they become barriers. Eddie's linguistic confidence gives him access to power (politics, professional life) that Mickey's dialect denies. Language is both symptom and cause of class inequality.",
            },
            {
              method: "Time Compression",
              detail:
                "The play covers thirty years in two acts. Russell accelerates time to show how childhood promise is progressively destroyed by adult realities. The rapid ageing prevents the audience from becoming comfortable: just as they enjoy the childhood comedy, the characters age and the tone darkens. This structural pacing mirrors how poverty accelerates ageing and diminishes life chances.",
            },
          ].map((m) => (
            <div key={m.method} className="rounded-lg border border-border bg-muted p-4">
              <h3 className="font-semibold text-foreground">{m.method}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Grade 9 Exemplar Points */}
      <Section id="grade-9-points" title="Grade 9 Exemplar Points">
        <p className="mb-4 text-sm text-muted-foreground">
          These sophisticated, conceptualised arguments distinguish Grade 9 responses.
        </p>
        <div className="space-y-3">
          {[
            "Russell's twins experiment is not merely a dramatic conceit but a rigorous political argument. By making Mickey and Eddie genetically identical, he eliminates every variable except class. The play functions as a controlled experiment in social determinism, arguing that nurture (environment, opportunity, wealth) is overwhelmingly more powerful than nature (genetics, innate ability) in determining life outcomes.",
            "The superstition functions as a metaphor for all the myths that justify class inequality: the idea that some people are 'meant' to succeed, that poverty reflects personal failing, that social mobility is freely available. Russell suggests that believing in superstition is easier than confronting the political reality that the system is rigged. If we blame fate, we do not have to blame policy.",
            "Mickey's dependence on antidepressants after prison is not merely personal tragedy but a political indictment. Russell shows how the state manages working-class despair through medication rather than addressing its causes: unemployment, poverty, and hopelessness. Mickey's pills keep him 'level' but destroy his personality, suggesting that the system's response to the damage it causes is to sedate, not to solve.",
            "Mrs Lyons's descent into paranoia subverts the assumption that wealth guarantees wellbeing. Russell shows that the class system damages everyone: the working class through deprivation, the middle class through anxiety and guilt. Mrs Lyons's possessiveness and instability suggest that privilege purchased through exploitation is inherently unstable.",
            "The policeman scene is Russell's most efficient argument. In under two minutes, identical behaviour produces opposite outcomes based solely on class. The policeman's language shifts from threatening ('I'd have the law on you') to deferential ('It was more of a prank, really'). Russell demonstrates that the law is not blind but class-conscious, and that justice itself is distributed unequally.",
            "Mickey's final cry --- 'I could have been him!' --- is devastating because it expresses not merely personal grief but a structural truth. The exclamation is simultaneously about one individual and about every working-class person whose potential was wasted by circumstance. Russell ensures that the audience hears not just Mickey but the political argument: talent is equally distributed; opportunity is not.",
            "The play's musical form is itself a political choice. Music democratises complex arguments: Russell uses melody and rhythm to communicate class critique to audiences who might resist it in prose or lecture form. The emotional accessibility of songs like 'Tell Me It's Not True' ensures that the political message is felt, not merely understood.",
            "Russell's decision to set the play in Liverpool is crucial. Liverpool in the 1980s was ground zero of Thatcher's Britain: mass unemployment, managed decline, and the systematic destruction of working-class communities. The play is not a universal fable but a specific historical argument about what happened when government policy abandoned an entire city and its people.",
          ].map((point, i) => (
            <div key={i} className="rounded-lg border-l-4 border-accent bg-muted p-4">
              <p className="text-sm leading-relaxed text-muted-foreground">{point}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Exam Questions with Model Answer Outlines */}
      <Section id="exam-questions" title="Exam-Style Questions with Model Answer Outlines">
        <p className="mb-4 text-sm text-muted-foreground">
          These outlines show how to structure a full-mark GCSE response.
        </p>
        <div className="space-y-6">
          {[
            {
              question: "How does Russell present the decline of Mickey throughout Blood Brothers?",
              outline: [
                "Introduction: Mickey's trajectory from lively child to depressed, pill-dependent adult is the play's most devastating illustration of how class determines life outcomes. Russell uses Mickey's decline to argue that working-class potential is systematically wasted.",
                "Para 1 -- Childhood (age seven): Mickey is energetic, funny, and naturally charismatic. 'If I was our Sammy, I'd smash him.' His vitality and humour make the audience love him. Russell establishes this baseline to make his later decline all the more devastating.",
                "Para 2 -- Adolescence (age fourteen): Mickey is awkward but endearing. He cannot articulate his feelings for Linda. His education has given him no tools for emotional expression. Meanwhile, Eddie's private school has equipped him with confidence and vocabulary. The class gap widens.",
                "Para 3 -- Adulthood: unemployment, crime, prison: Mickey loses his factory job in the recession. He is drawn into Sammy's armed robbery and imprisoned. Russell shows how poverty creates a chain: unemployment leads to desperation, which leads to crime, which leads to prison. Each link is forged by the class system.",
                "Para 4 -- Depression and medication: After prison, Mickey is dependent on antidepressants. He is emotionally absent, pushing Linda away. 'What's wrong with you, Mickey?' implies personal failing, but Russell makes clear the cause is structural. The pills keep him alive but destroy who he was.",
                "Conclusion: Russell argues that Mickey's decline is not personal failure but political murder. The class system systematically destroyed every quality that made him human: his energy, humour, relationships, and hope. 'I could have been him!' is the verdict.",
              ],
            },
            {
              question: "'Blood Brothers shows that the class system is the real villain.' How far do you agree?",
              outline: [
                "Introduction: While the play features individual antagonists (Mrs Lyons, Sammy, arguably the Narrator), Russell consistently directs blame towards the class system itself. The play argues that class is the structural cause of the tragedy.",
                "Para 1 -- The twins as proof: Identical genetics, different class, radically different outcomes. This eliminates individual character as an explanation. The only variable is class. Russell's argument is methodical: if nature is constant, nurture (class) is the determining factor.",
                "Para 2 -- The policeman scene: The law treats identical behaviour differently based on class. This shows that even institutions designed to be impartial (the police, the courts) are instruments of class bias. The system is rigged from childhood.",
                "Para 3 -- Counter-argument: Mrs Lyons's manipulation: She is a middle-class individual who acts villainously. However, her manipulation is enabled by her class position: she has the economic power to take Mrs Johnstone's child and the social authority to enforce the arrangement. Her individual villainy is a product of class privilege.",
                "Para 4 -- The Narrator's final question: 'Could it be what we, the English, have come to know as class?' Russell poses it as a question but the entire play has been building the answer. By implicating 'we, the English,' he makes class inequality a national, not individual, failing.",
                "Conclusion: While individuals make choices within the play, Russell argues that those choices are constrained by class. The system is the villain because it determines who gets to choose freely and who does not.",
              ],
            },
            {
              question: "How does Russell use the character of Linda to explore the effects of class inequality?",
              outline: [
                "Introduction: Linda is the play's most resilient character, but her resilience is progressively overwhelmed by the structural pressures of class inequality. Russell uses her to show the impossible position of working-class women.",
                "Para 1 -- Childhood strength: As a child, Linda is bold and fearless, defending Mickey against bullies. 'Take no notice of him. He's only soft.' She is the strongest character at seven. Russell establishes her as someone whose potential is equal to anyone's.",
                "Para 2 -- Teenage loyalty: Linda clearly likes Mickey but waits for him to express his feelings. Her frustration at his inability to communicate reflects the emotional limitations imposed by his upbringing. She could have chosen Eddie; she chose Mickey. Russell shows that love crosses class boundaries but cannot survive within them.",
                "Para 3 -- Adult burden: Linda holds the family together when Mickey collapses. She works, cares for their child, and tries to help Mickey with his depression. The entire burden of poverty falls on her. Russell shows how working-class women bear disproportionate emotional and practical costs.",
                "Para 4 -- The turn to Eddie: Linda's relationship with Eddie is driven by desperation, not disloyalty. Eddie offers practical help (a job, a house) that the system denies Mickey. Russell refuses to condemn Linda, creating sympathy for all three characters in the love triangle. Her 'betrayal' is the system's, not hers.",
                "Conclusion: Russell uses Linda to show that individual strength cannot overcome structural inequality. She is the strongest character in the play, yet even she is broken by the system. Her fate argues that class inequality destroys not just individuals but relationships and families.",
              ],
            },
          ].map((eq, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-bold text-foreground">{eq.question}</h4>
              <div className="mt-3 space-y-2">
                {eq.outline.map((para, j) => (
                  <p key={j} className="text-sm leading-relaxed text-muted-foreground">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Practice Questions */}
      <Section id="practice-questions" title="Practice Questions">
        <p className="text-sm text-muted-foreground mb-6">
          Write your answer below each question and receive AI-powered feedback tailored to GCSE English Literature mark schemes.
          Aim for at least 150 words per response to get meaningful feedback.
        </p>
        <div className="space-y-8">
          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">Question 1</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Russell present the effects of social class in <em>Blood Brothers</em>?
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Blood Brothers - How Russell presents the effects of social class"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">Question 2</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Russell use the Narrator to create dramatic tension in <em>Blood Brothers</em>?
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Blood Brothers - How Russell uses the Narrator to create dramatic tension"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">Question 3</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Russell present the character of Mrs Johnstone in <em>Blood Brothers</em>?
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Blood Brothers - How Russell presents the character of Mrs Johnstone"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">Question 4</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Russell present the theme of nature versus nurture in <em>Blood Brothers</em>?
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Blood Brothers - How Russell presents the theme of nature versus nurture"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>
        </div>
      </Section>

      {/* Back link */}
      <div className="pt-4 text-sm">
        <a
          href="/resources/revision-notes"
          className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
        >
          &larr; Back to Revision Notes
        </a>
      </div>
    </div>
  );
}
