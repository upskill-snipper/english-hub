"use client";

import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Data ───────────────────────────────────────────────────── */

const keyQuotes = [
  {
    quote: "You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it",
    speaker: "Atticus Finch",
    chapter: "Chapter 3",
    analysis:
      "Atticus's central moral teaching, conveying Lee's theme of empathy. The metaphor of climbing into another's skin is deliberately physical and visceral, making the abstract concept of empathy tangible for the child narrator (and the reader). This advice becomes the moral framework against which every character in the novel is measured. Atticus teaches Scout that judgement must be preceded by understanding, a lesson that applies to her encounters with Boo Radley, Mrs Dubose, and the Cunninghams alike.",
  },
  {
    quote: "Shoot all the bluejays you want, if you can hit 'em, but remember it's a sin to kill a mockingbird",
    speaker: "Atticus Finch",
    chapter: "Chapter 10",
    analysis:
      "The novel's central symbol. Miss Maudie explains that mockingbirds 'don't do one thing but make music for us to enjoy', establishing them as symbols of innocence and harmlessness. The mockingbird represents Tom Robinson (an innocent man destroyed by racial prejudice) and Boo Radley (a gentle recluse harmed by gossip and cruelty). Lee uses the symbol to argue that destroying innocence is the greatest moral crime.",
  },
  {
    quote: "The one thing that doesn't abide by majority rule is a person's conscience",
    speaker: "Atticus Finch",
    chapter: "Chapter 11",
    analysis:
      "Atticus distinguishes between legal democracy and moral courage. In Maycomb, the majority endorses racial prejudice, but Atticus insists that individual conscience must override collective injustice. Lee positions Atticus as a moral absolutist: doing right is not determined by popular opinion but by personal integrity. This statement foreshadows his decision to defend Tom Robinson despite overwhelming community opposition.",
  },
  {
    quote: "I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It's when you know you're licked before you begin but you begin anyway and you see it through no matter what",
    speaker: "Atticus Finch",
    chapter: "Chapter 11",
    analysis:
      "Atticus redefines courage through the example of Mrs Dubose, who battles her morphine addiction before dying. Lee contrasts physical bravery (the gun) with moral courage (persisting despite certain defeat). This definition applies directly to Atticus's defence of Tom Robinson: he knows the all-white jury will convict, but he proceeds because it is morally right. The passage is key for AO2 analysis of Lee's use of juxtaposition and redefinition.",
  },
  {
    quote: "As you grow older, you'll see white men cheat black men every day of your life, but let me tell you something and don't you forget it — whenever a white man does that to a black man, no matter who he is, how rich he is, or how fine a family he comes from, that white man is trash",
    speaker: "Atticus Finch",
    chapter: "Chapter 23",
    analysis:
      "Atticus uses the loaded term 'trash' — usually reserved for poor whites in Maycomb's class hierarchy — to condemn racial injustice. By inverting the social vocabulary, Lee exposes how the town's real moral failing is not poverty but prejudice. The direct address to Jem ('don't you forget it') signals that this is a lesson meant to shape the next generation. Atticus's quiet fury here reveals that his calm exterior masks deep anger at systemic injustice.",
  },
  {
    quote: "Mockingbirds don't do one thing but make music for us to enjoy. They don't eat up people's gardens, don't nest in corncribs, they don't do one thing but sing their hearts out for us. That's why it's a sin to kill a mockingbird",
    speaker: "Miss Maudie Atkinson",
    chapter: "Chapter 10",
    analysis:
      "Miss Maudie elaborates on the mockingbird metaphor, establishing that the bird symbolises pure, harmless goodness. The repetition of 'don't do one thing but' emphasises the creature's complete innocence. Lee uses Miss Maudie as a moral interpreter for Scout and the reader, reinforcing Atticus's values. The passage is essential for any essay on symbolism and should be analysed alongside the fates of Tom Robinson and Boo Radley.",
  },
  {
    quote: "There's something in our world that makes men lose their heads — they couldn't be fair if they tried. In our courts, when it's a white man's word against a black man's, the white man always wins. They're ugly, but those are the facts of life",
    speaker: "Atticus Finch",
    chapter: "Chapter 23",
    analysis:
      "Atticus acknowledges the systemic nature of racism in the American South. 'Lose their heads' implies irrationality — prejudice overrides reason. The frank admission that courts are unjust is remarkable from a lawyer who reveres the legal system, showing how deeply embedded racism is. Lee uses Atticus's disillusionment to convey her critique of Southern racial justice without descending into polemic.",
  },
  {
    quote: "I think there's just one kind of folks. Folks",
    speaker: "Scout Finch",
    chapter: "Chapter 23",
    analysis:
      "Scout articulates a child's instinctive egalitarianism, cutting through Maycomb's elaborate social hierarchy. The simple repetition of 'folks' strips away all distinctions of race, class, and family name. Lee uses Scout's innocence to expose the absurdity of adult prejudice. Jem's weary response — that he used to think so too — suggests that growing up in Maycomb means losing this moral clarity, reinforcing the theme of lost innocence.",
  },
  {
    quote: "Miss Jean Louise, stand up. Your father's passin'",
    speaker: "Reverend Sykes",
    chapter: "Chapter 21",
    analysis:
      "One of the novel's most emotionally powerful moments. Despite the guilty verdict, the Black community in the gallery stands to honour Atticus. The formality of 'Miss Jean Louise' elevates Scout and her father, while 'passin'' carries connotations of a solemn procession. Lee creates a tableau of moral authority: the people who have been denied justice recognise true courage. The moment inverts Maycomb's racial hierarchy — the marginalised community passes judgement on the white establishment.",
  },
  {
    quote: "Atticus, he was real nice",
    speaker: "Scout Finch",
    chapter: "Chapter 31",
    analysis:
      "Scout's final assessment of Boo Radley completes her moral education. Atticus replies, 'Most people are, Scout, when you finally see them.' The verb 'see' echoes his earlier lesson about climbing into someone's skin. Lee brings the novel full circle: Scout has learned to replace fear and prejudice with empathy and understanding. The simplicity of the language mirrors the clarity of Scout's moral vision at the end of her childhood journey.",
  },
  {
    quote: "The witnesses for the state... have presented themselves to you gentlemen... in the cynical confidence that their testimony would not be doubted, confident that you gentlemen would go along with them on the assumption — the evil assumption — that all Negroes lie, all Negroes are basically immoral beings",
    speaker: "Atticus Finch",
    chapter: "Chapter 20",
    analysis:
      "Atticus's closing argument to the jury directly names the racism underpinning the case. The repetition of 'confident' and 'assumption' exposes how prejudice masquerades as common sense. The phrase 'evil assumption' is Atticus's strongest moral language in the courtroom, marking the moment he moves from legal argument to moral appeal. Lee uses the trial as a dramatic set piece to confront the reader with the mechanics of institutional racism.",
  },
  {
    quote: "Before I can live with other folks I've got to live with myself",
    speaker: "Atticus Finch",
    chapter: "Chapter 11",
    analysis:
      "Atticus explains to Scout why he must defend Tom Robinson regardless of public opinion. Personal integrity is placed above social acceptance. Lee presents conscience as the ultimate authority: Atticus cannot function as a moral guide to his children if he compromises his own principles. The statement encapsulates Lee's humanist philosophy — that moral courage begins with individual accountability.",
  },
  {
    quote: "Neighbours bring food with death and flowers with sickness and little things in between. Boo was our neighbour",
    speaker: "Scout Finch (narrating)",
    chapter: "Chapter 31",
    analysis:
      "Scout's mature retrospective voice recognises that Boo Radley has been a good neighbour all along — leaving gifts, mending Jem's trousers, wrapping a blanket around Scout, and ultimately saving the children's lives. The simple declaration 'Boo was our neighbour' strips away years of fear and fantasy. Lee uses this realisation to complete the novel's moral arc: true understanding replaces prejudice when we see people as they really are.",
  },
  {
    quote: "It was times like these when I thought my father, who hated guns and had never been to any wars, was the bravest man who ever lived",
    speaker: "Scout Finch (narrating)",
    chapter: "Chapter 11",
    analysis:
      "Scout's retrospective narration redefines heroism. Lee contrasts traditional masculine courage (guns, war) with Atticus's quiet moral bravery. The child narrator's growing understanding of her father mirrors the reader's deepening appreciation of moral courage. This passage works in tandem with Atticus's definition of 'real courage' and is essential for discussing Lee's presentation of masculinity and heroism.",
  },
  {
    quote: "We know all men are not created equal in the sense some people would have us believe... But there is one way in this country in which all men are created equal... That institution, gentlemen, is a court",
    speaker: "Atticus Finch",
    chapter: "Chapter 20",
    analysis:
      "Atticus appeals to the ideal of legal equality, echoing the Declaration of Independence. The rhetorical structure builds from concession (acknowledging real inequality) to aspiration (the court as equaliser). The tragic irony is that the jury will betray this ideal by convicting Tom. Lee uses Atticus's idealism to heighten the injustice of the verdict: the institution that should protect the vulnerable instead destroys them.",
  },
];

const characters = [
  {
    name: "Scout Finch (Jean Louise)",
    description:
      "The novel's protagonist and first-person narrator. Scout is a tomboyish, intelligent, and fiercely curious six-to-nine-year-old who serves as the lens through which the reader experiences Maycomb. Her childish innocence allows Lee to expose adult hypocrisy and racial prejudice with devastating clarity: Scout asks the questions that adults cannot or will not answer. Over the course of the novel, Scout matures from a girl who settles disputes with her fists to one who can stand on Boo Radley's porch and see the world from his perspective — completing the empathetic education Atticus set out for her in Chapter 3.",
  },
  {
    name: "Atticus Finch",
    description:
      "A widowed lawyer and moral compass of the novel. Atticus defends Tom Robinson, a Black man falsely accused of raping Mayella Ewell, knowing he will face social ostracism. He embodies Lee's ideal of moral courage: he is principled without being preachy, compassionate without being naive. He teaches his children through example rather than instruction, and his consistent dignity in the face of insult (the spitting scene with Bob Ewell) reinforces Lee's argument that true strength lies in restraint and integrity. Atticus is the standard against which Maycomb's moral failures are measured.",
  },
  {
    name: "Jem Finch (Jeremy Atticus)",
    description:
      "Scout's older brother, who undergoes the novel's most painful loss of innocence. At the start, Jem shares Scout's childhood games and fascination with Boo Radley. The trial of Tom Robinson shatters his faith in justice and human goodness: he weeps at the guilty verdict and struggles to reconcile Maycomb's cruelty with the values Atticus has taught him. Jem's journey from innocence to disillusionment mirrors the novel's broader theme: growing up means confronting the reality that the world does not always operate by the moral rules you have been taught.",
  },
  {
    name: "Boo Radley (Arthur)",
    description:
      "A reclusive neighbour who has not left his house for years, Boo is initially a figure of childhood terror and gothic fantasy for Scout, Jem, and Dill. Lee gradually reveals Boo as a gentle, damaged man who watches over the children: he leaves gifts in the tree knothole, mends Jem's trousers, places a blanket around Scout during the fire, and ultimately saves the children from Bob Ewell's attack. Boo is the novel's primary 'mockingbird' alongside Tom Robinson — an innocent destroyed by cruelty and isolation. Scout's final understanding of Boo completes her moral education.",
  },
  {
    name: "Tom Robinson",
    description:
      "A Black man falsely accused of raping Mayella Ewell. Tom is honest, dignified, and compassionate — he helped Mayella out of genuine kindness, which the racist social order cannot comprehend. Despite Atticus's compelling defence, the all-white jury convicts Tom, and he is later shot dead while allegedly attempting to escape prison. Tom is a 'mockingbird': an innocent man whose destruction exposes the moral bankruptcy of Maycomb's racial caste system. His disabled left arm is a physical symbol of his powerlessness against the machinery of injustice.",
  },
  {
    name: "Calpurnia",
    description:
      "The Finches' Black housekeeper, who serves as a surrogate mother to Scout and Jem. Calpurnia is strict, loving, and morally authoritative — she disciplines the children and teaches them manners and empathy (her rebuke to Scout for mocking Walter Cunningham is a key moral lesson). She bridges Maycomb's racial divide: when she takes the children to First Purchase Church, they glimpse the Black community's world. Calpurnia lives a 'double life', speaking differently in each community, which Lee uses to explore the social pressures of racial segregation.",
  },
  {
    name: "Mayella Ewell",
    description:
      "The eldest Ewell child, who accuses Tom Robinson of rape. Mayella is a complex figure: she is a victim of poverty, neglect, and her father's physical and implied sexual abuse, yet she becomes complicit in the racist system that condemns an innocent man. Her crime is reaching across the racial barrier by kissing Tom, and she destroys him to conceal her transgression. Lee presents Mayella with some sympathy — her loneliness is 'the loneliest person in the world' — but ultimately she chooses to sacrifice Tom rather than challenge her father or her society.",
  },
  {
    name: "Bob Ewell",
    description:
      "The novel's human antagonist. Bob Ewell is the embodiment of Maycomb's worst qualities: he is racist, violent, ignorant, and abusive. He beats Mayella, fabricates the rape accusation against Tom, and later attacks Scout and Jem in revenge for Atticus's defence of Tom. Despite being white, Ewell occupies the bottom of Maycomb's social hierarchy, and Lee uses him to show that racism gives even the most degraded white citizen power over Black people. His attack on the children and subsequent death at Boo Radley's hands provides the novel's climactic convergence of its two main plots.",
  },
];

const themes = [
  {
    name: "Justice and Racial Prejudice",
    detail:
      "The trial of Tom Robinson is the novel's central dramatic event and Lee's most sustained critique of racial injustice in the American South. Despite overwhelming evidence of Tom's innocence, the all-white jury convicts him because, as Atticus explains, 'when it's a white man's word against a black man's, the white man always wins.' Lee exposes how the legal system — which should embody fairness — is corrupted by institutionalised racism. The guilty verdict represents not just Tom's personal tragedy but the systematic denial of justice to an entire race. Lee uses the courtroom as a microcosm of Southern society to argue that prejudice destroys the very foundations of civilisation.",
  },
  {
    name: "Moral Courage",
    detail:
      "Lee distinguishes between physical bravery and moral courage through Atticus's defence of Tom Robinson and his teaching about Mrs Dubose. 'Real courage' is defined as persisting in doing right when you know you will fail. Atticus defends Tom knowing the jury will convict; Mrs Dubose fights her addiction knowing she will die. Lee argues that moral courage — standing by your principles regardless of social pressure or personal cost — is the highest form of human virtue. This theme challenges Maycomb's culture of conformity, where most citizens lack the courage to oppose racial injustice.",
  },
  {
    name: "Growing Up and Loss of Innocence",
    detail:
      "Scout and Jem's journey from childhood innocence to moral awareness structures the entire novel. Their early fascination with Boo Radley represents the safe mysteries of childhood, while the trial forces them to confront adult cruelty, racism, and injustice. Jem's reaction to the guilty verdict — he weeps and cannot understand how people can be so unjust — marks the death of his childhood idealism. Scout's education is gentler: guided by Atticus, she learns to see people with empathy rather than fear. Lee suggests that growing up inevitably means encountering evil, but that moral education can shape how children respond to it.",
  },
  {
    name: "Empathy and Understanding",
    detail:
      "Atticus's instruction to 'climb into [another person's] skin and walk around in it' is the novel's moral foundation. Lee tests this principle against every relationship in the book: Scout must learn empathy for Boo Radley, Walter Cunningham, Mrs Dubose, and even Mayella Ewell. The novel argues that prejudice — whether racial, social, or personal — is fundamentally a failure of empathy. Those who can see the world from another's perspective (Atticus, Scout by the end) achieve moral clarity; those who cannot (Bob Ewell, the jury) cause destruction. Lee positions empathy as both a personal virtue and a social necessity.",
  },
  {
    name: "Social Class in the American South",
    detail:
      "Maycomb operates on a rigid social hierarchy: the professional class (the Finches), the farming class (the Cunninghams), the 'white trash' (the Ewells), and the Black community, who are beneath all whites regardless of their character or ability. Lee exposes the arbitrary cruelty of this system: the Ewells, despite being morally and socially degraded, have more legal standing than Tom Robinson simply because they are white. Aunt Alexandra's obsession with 'family background' and 'gentle breeding' represents the town's investment in maintaining these divisions. Scout's declaration that 'there's just one kind of folks. Folks' is Lee's rejection of the entire class system.",
  },
];

const chapterEvents = [
  {
    chapters: "Chapters 1-3",
    title: "Maycomb, the Radleys, and Scout's First Days at School",
    events:
      "Lee establishes Maycomb as a tired, insular Southern town during the Great Depression. Scout, Jem, and their summer friend Dill become fascinated by the mysterious Boo Radley. Scout's first day at school introduces the Cunningham family (proud but poor) and exposes the rigid social hierarchy. Miss Caroline's failure to understand Walter Cunningham's refusal of a quarter demonstrates institutional ignorance of class realities.",
    keyQuote: "You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it",
    quoteContext: "Atticus to Scout, Chapter 3 — the novel's moral foundation",
  },
  {
    chapters: "Chapters 4-7",
    title: "Gifts in the Knothole and the Radley Game",
    events:
      "Scout and Jem discover gifts left in a knothole of the Radley oak tree: chewing gum, pennies, carved soap figures, a watch, and a medal. The children act out 'the Radley game', dramatising Boo's story. Nathan Radley cements the knothole shut, cutting off Boo's only line of communication. Jem weeps silently — his first moment of adult understanding that kindness can be deliberately destroyed.",
    keyQuote: "Jem stayed moody and silent for a week",
    quoteContext: "After Nathan Radley fills the knothole, Chapter 7 — Jem begins to understand adult cruelty",
  },
  {
    chapters: "Chapters 8-9",
    title: "Miss Maudie's Fire and the Shadow of the Trial",
    events:
      "Miss Maudie's house burns down on the coldest night Maycomb has known. During the fire, someone (Boo Radley) places a blanket around Scout's shoulders without her noticing. Atticus agrees to defend Tom Robinson, and Scout fights Cecil Jacobs and her cousin Francis for calling Atticus a 'nigger-lover'. Atticus tells Uncle Jack that he hopes Scout and Jem will come to him rather than the town for answers about the case.",
    keyQuote: "I hope and pray I can get Jem and Scout through it without bitterness, and most of all, without catching Maycomb's usual disease",
    quoteContext: "Atticus to Uncle Jack, Chapter 9 — 'Maycomb's usual disease' is racism",
  },
  {
    chapters: "Chapters 10-11",
    title: "The Mad Dog and Mrs Dubose",
    events:
      "Atticus shoots a rabid dog (Tim Johnson) in a single shot, revealing his hidden skill as a marksman. The children discover he was once known as 'One-Shot Finch' but has chosen not to use guns. The mad dog symbolises the madness of racism approaching Maycomb. Mrs Dubose, a morphine-addicted neighbour, insults Atticus. Jem destroys her camellia bushes; as punishment, he reads to her daily. After her death, Atticus reveals she was battling addiction to die free — his example of 'real courage'.",
    keyQuote: "I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand",
    quoteContext: "Atticus to Jem, Chapter 11 — redefining courage from physical to moral",
  },
  {
    chapters: "Chapters 12-14",
    title: "Calpurnia's Church and Aunt Alexandra's Arrival",
    events:
      "Calpurnia takes Scout and Jem to First Purchase African M.E. Church, where they witness the Black community's poverty, dignity, and solidarity in supporting Tom Robinson's family. Aunt Alexandra arrives to provide 'feminine influence' for Scout and insists on proper behaviour and awareness of family heritage. Dill runs away from home to Maycomb, revealing his own neglect. Tensions rise as the trial approaches.",
    keyQuote: "It's not necessary to tell all you know. It's not ladylike — in the second place, folks don't like to have somebody around knowin' more than they do",
    quoteContext: "Calpurnia to Scout, Chapter 12 — Calpurnia explains code-switching between communities",
  },
  {
    chapters: "Chapters 15-16",
    title: "The Mob at the Jail",
    events:
      "A lynch mob arrives at the jail where Tom Robinson is held. Atticus sits alone outside to protect Tom. Scout, Jem, and Dill intervene. Scout recognises Walter Cunningham's father in the mob and speaks to him with childish innocence about his son and his legal affairs. Her empathy — seeing him as a person, not a member of a mob — shames him into dispersing the group. The next day, the trial begins and the courtroom is packed. The children watch from the 'Colored balcony'.",
    keyQuote: "It took an eight-year-old child to bring 'em to their senses... That proves something — that a gang of wild animals can be stopped, simply because they're still human",
    quoteContext: "Atticus to Jem, Chapter 16 — Scout's innocence defeats mob mentality",
  },
  {
    chapters: "Chapters 17-19",
    title: "The Trial: Testimony",
    events:
      "Bob Ewell testifies that he found Tom Robinson raping Mayella. Atticus establishes that Ewell is left-handed and that Mayella's injuries were on the right side of her face — consistent with a left-handed attacker. Tom Robinson's left arm is crippled, making it impossible for him to have inflicted the injuries. Mayella's testimony is contradictory and emotional. Tom testifies that Mayella kissed him and that he ran because he knew no Black man could be safe in that situation. The prosecutor exploits Tom's admission that he felt 'sorry' for Mayella — an unforgivable transgression in the racial hierarchy.",
    keyQuote: "You felt sorry for her, you felt sorry for her?",
    quoteContext: "Mr Gilmer to Tom Robinson, Chapter 19 — a Black man pitying a white woman violates Southern social code",
  },
  {
    chapters: "Chapters 20-22",
    title: "The Verdict",
    events:
      "Atticus delivers his closing argument, appealing to the jury's sense of justice and the ideal that 'all men are created equal' before the law. Despite the strength of the defence, the jury returns a guilty verdict. Jem weeps. As Atticus leaves the courtroom, the entire Black community in the gallery stands in his honour. The next morning, the Black community leaves gifts of food at the Finches' door. Miss Maudie tells the children that Atticus was the only man who could have made the jury deliberate for hours rather than minutes — a small victory.",
    keyQuote: "Miss Jean Louise, stand up. Your father's passin'",
    quoteContext: "Reverend Sykes to Scout, Chapter 21 — the Black community honours Atticus's moral courage",
  },
  {
    chapters: "Chapters 23-25",
    title: "Aftermath of the Trial",
    events:
      "Bob Ewell spits in Atticus's face; Atticus absorbs the insult without retaliation. Jem and Atticus discuss the jury system and why the verdict was unjust. Scout reflects that 'there's just one kind of folks. Folks.' Tom Robinson is shot dead attempting to escape prison — seventeen bullet wounds. Mr Underwood's editorial compares Tom's death to 'the senseless slaughter of songbirds', directly linking Tom to the mockingbird symbol. Aunt Alexandra and the missionary circle reveal the hypocrisy of white Christian women who pity Africans but endorse local racism.",
    keyQuote: "Mr Underwood didn't talk about miscarriages of justice, he was writing so children could understand. Mr Underwood simply figured it was a sin to kill cripples, be they standing, sitting, or escaping",
    quoteContext: "Scout narrating, Chapter 25 — Tom's death linked to the mockingbird motif",
  },
  {
    chapters: "Chapters 26-28",
    title: "Hypocrisy, Halloween, and the Attack",
    events:
      "Scout's teacher Miss Gates condemns Hitler's persecution of Jews but sees no contradiction with Maycomb's treatment of Black people — Lee's sharpest critique of Southern hypocrisy. On Halloween night, Scout and Jem walk home from a school pageant through dark streets. Bob Ewell attacks them. Scout's ham costume (made of wire mesh) saves her. A mysterious figure carries the injured Jem home. Scout realises the rescuer is Boo Radley.",
    keyQuote: "How can you hate Hitler so bad an' then turn around and be ugly about folks right at home?",
    quoteContext: "Scout to Jem, Chapter 26 — exposing the hypocrisy of selective morality",
  },
  {
    chapters: "Chapters 29-31",
    title: "Boo Radley Revealed",
    events:
      "Heck Tate reports that Bob Ewell fell on his own knife and died. Atticus initially believes Jem killed Ewell and insists on a public trial, but Tate explains it was Boo Radley and argues that exposing Boo to public attention would destroy him — it would be 'like shootin' a mockingbird'. Scout agrees: she has finally learned to see Boo as a person, not a phantom. She walks Boo home and stands on his porch, seeing the neighbourhood from his perspective — the ultimate fulfilment of Atticus's empathy lesson.",
    keyQuote: "Well, it'd be sort of like shootin' a mockingbird, wouldn't it?",
    quoteContext: "Scout to Atticus, Chapter 30 — Scout applies the mockingbird principle to protect Boo Radley",
  },
];

const narrativeTechniques = [
  {
    name: "First-Person Child Narrator",
    detail:
      "Scout narrates events she experienced between the ages of six and nine. Her childish perspective creates dramatic irony: the reader understands implications that Scout does not (such as the sexual nature of Tom's accusation, or the mob's murderous intent at the jail). Lee exploits the gap between what Scout sees and what the reader understands to expose adult hypocrisy and racial prejudice without heavy-handed commentary. The child's voice also generates pathos: Scout's innocent questions ('What's rape, Cal?') highlight the corruption of a society that forces children to confront such realities.",
  },
  {
    name: "Retrospective Voice",
    detail:
      "Although Scout narrates as a child, the novel is framed by an adult Scout looking back on her childhood. This dual perspective allows Lee to combine childish immediacy with mature reflection. Phrases like 'When enough years had gone by to enable us to look back on them' establish temporal distance. The adult narrator can comment on events with understanding that the child lacked, creating layers of meaning. This technique enables Lee to present innocence and experience simultaneously, reinforcing the theme of growing up.",
  },
  {
    name: "Symbolism: The Mockingbird",
    detail:
      "The mockingbird is the novel's central symbol, representing innocence that is destroyed by cruelty. Tom Robinson and Boo Radley are the primary mockingbirds: both are harmless, both contribute to their community, and both are damaged by prejudice and violence. The symbol is introduced by Atticus ('it's a sin to kill a mockingbird'), elaborated by Miss Maudie, and completed when Scout recognises that exposing Boo would be 'like shootin' a mockingbird'. Lee uses the symbol to unify the novel's two plots (the trial and the Radley mystery) under a single moral framework.",
  },
  {
    name: "Symbolism: The Radley House",
    detail:
      "The Radley house represents the unknown, fear, and the danger of prejudging others. At the novel's start, it is a gothic site of childhood terror — 'a malevolent phantom' inhabits it. As the children mature, the house is gradually domesticated: Boo leaves gifts, mends trousers, and wraps a blanket around Scout. By the end, Scout enters the house and sees Boo as a shy, gentle man. The transformation of the Radley house from threatening to welcoming mirrors the novel's moral argument: fear and prejudice dissolve when we make the effort to understand others.",
  },
  {
    name: "Southern Gothic Elements",
    detail:
      "Lee draws on the Southern Gothic tradition: the decaying town, the reclusive Boo Radley, the mad dog, the fire, the courtroom drama, and the violent attack in darkness. These gothic elements create atmosphere and tension, but Lee subverts the genre by revealing that the true horror is not supernatural but social — Maycomb's racism is more monstrous than any ghost story. The gothic Radley plot and the realist trial plot converge in the final chapters, showing that innocence is threatened by human evil, not by phantoms.",
  },
  {
    name: "Dual Plot Structure",
    detail:
      "The novel interweaves two plots: the children's fascination with Boo Radley (the 'innocence' plot) and the trial of Tom Robinson (the 'justice' plot). Both plots concern mockingbirds — innocent figures destroyed by prejudice. Lee uses the Radley plot to frame the trial: the children begin by misunderstanding Boo and end by understanding him, just as the novel begins with racial prejudice as an unexamined norm and ends by exposing its devastating consequences. The plots converge when Boo saves the children from Bob Ewell, bringing the novel to its climactic resolution.",
  },
];

const assessmentObjectives = [
  {
    code: "AO1",
    description: "Show detailed knowledge and understanding of the text",
    guidance:
      "Demonstrate thorough knowledge of the novel's plot, characters, and themes. Reference specific chapters and events accurately. Use precise, embedded quotations (not long block quotes). Show that you understand the significance of events, not just what happens: explain why the jury's verdict matters, why Boo Radley's gifts are significant, and what the mockingbird symbolises. Do not retell the story — select and deploy evidence purposefully to support your argument.",
  },
  {
    code: "AO2",
    description: "Analyse the language, form, and structure used by a writer to create meanings and effects",
    guidance:
      "This is where the highest marks are earned. Analyse Lee's specific word choices, her use of the child narrator and retrospective voice, symbolism (mockingbird, mad dog, Radley house), and structural decisions (dual plot, courtroom as set piece, the novel's circular ending). Discuss how the first-person narration creates dramatic irony. Always explain the effect on the reader. Use literary terminology accurately: dramatic irony, symbolism, juxtaposition, foreshadowing, motif, bildungsroman.",
  },
  {
    code: "AO3",
    description: "Demonstrate understanding of the relationships between texts and the contexts in which they were written and received",
    guidance:
      "To Kill a Mockingbird was published in 1960 but set in the 1930s during the Great Depression. Discuss the Jim Crow South, racial segregation, the Scottsboro Boys case (a real trial that influenced the novel), and the emerging Civil Rights Movement. Show how Lee wrote during a period of racial upheaval — the Montgomery Bus Boycott (1955), Brown v. Board of Education (1954) — and how the novel intervened in contemporary debates about racial justice. Integrate context into your analysis rather than treating it as a separate section.",
  },
  {
    code: "AO4",
    description: "Communicate a clear, relevant response using appropriate terminology",
    guidance:
      "Write clearly and analytically with a sustained argument. Use literary terminology accurately and naturally (do not force terms in without explanation). Structure your response with a clear introduction, developed paragraphs, and a conclusion. Each paragraph should make a point, support it with evidence, and analyse the writer's methods. Avoid feature-spotting (identifying a technique without explaining its effect). Write 'Lee presents...' or 'Lee uses...' to demonstrate awareness of authorial craft.",
  },
];

const sampleQuestion = {
  type: "Passage-Based (a)",
  question:
    "Re-read the passage in Chapter 21 from 'I shut my eyes' to 'Your father's passin'.' How does Lee make this such a powerful and moving moment in the novel?",
  modelParagraph:
    "Lee makes this moment profoundly moving through the contrast between the devastating guilty verdict and the Black community's act of silent honour. The child narrator's physical response — 'I shut my eyes' — conveys Scout's instinctive recoil from injustice, and the sensory detail immerses the reader in the emotional weight of the scene. Reverend Sykes's instruction, 'Miss Jean Louise, stand up. Your father's passin'', transforms Atticus's walk from the courtroom into a solemn procession. The formal address 'Miss Jean Louise' elevates the moment above the everyday, lending it ceremonial gravity. Lee structures this as a tableau — the entire gallery rising in unison — which inverts Maycomb's racial hierarchy: the powerless community passes moral judgement on the white establishment that has just condemned an innocent man. The word 'passin'' carries connotations of both physical movement and something greater, almost spiritual, suggesting that Atticus's moral stand transcends the courtroom. This moment is significant structurally because it follows immediately after the verdict, creating a sharp juxtaposition between legal failure and moral triumph. Lee ensures that the reader understands the trial is not simply a defeat: Atticus's courage has been witnessed and honoured by those who understand its true cost.",
};

/* ─── Page component ─────────────────────────────────────────── */

export default function ToKillAMockingbirdStudyGuide() {
  return (
    <>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#2C3E50] to-primary px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            Cambridge IGCSE English Literature
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            To Kill a Mockingbird &mdash; Complete Study Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Characters, themes, chapter-by-chapter events, {keyQuotes.length} key quotes with
            analysis, narrative techniques, context, and Cambridge-specific exam
            technique.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* ── Navigation ──────────────────────────────────────────── */}
        <nav className="mb-10 flex flex-wrap gap-2 text-sm" aria-label="Page sections">
          {[
            "Chapter Events",
            "Characters",
            "Themes",
            "Key Quotes",
            "Narrative Techniques",
            "Context",
            "Assessment Objectives",
            "Exam Questions",
          ].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-primary/30 px-3 py-1 text-foreground transition hover:bg-primary/10"
            >
              {s}
            </a>
          ))}
        </nav>

        {/* ── Chapter Events ────────────────────────────────────────── */}
        <section id="chapter-events" aria-labelledby="chapters-heading">
          <h2 id="chapters-heading" className="text-2xl font-bold text-foreground">
            Chapter-by-Chapter Key Events
          </h2>
          <div className="mt-6 space-y-4">
            {chapterEvents.map((ch) => (
              <div
                key={ch.chapters}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-block rounded-full bg-[#2C3E50] px-2.5 py-0.5 text-xs font-bold text-white">
                    {ch.chapters}
                  </span>
                  <h3 className="font-semibold text-foreground">{ch.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ch.events}</p>
                <div className="mt-3 rounded border-l-2 border-primary bg-primary/5 px-3 py-2">
                  <p className="text-xs italic text-foreground">&ldquo;{ch.keyQuote}&rdquo;</p>
                  <p className="mt-1 text-xs text-muted-foreground">{ch.quoteContext}</p>
                </div>
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
              <div
                key={c.name}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
                <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
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
              <div
                key={t.name}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
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
            Each quote includes the speaker, chapter, and detailed analysis suitable for
            Cambridge IGCSE responses.
          </p>
          <div className="mt-6 space-y-5">
            {keyQuotes.map((q, i) => (
              <div
                key={i}
                className="rounded-lg border-l-4 border-primary bg-card p-5 shadow-md"
              >
                <blockquote className="text-base font-medium italic text-foreground">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <p className="mt-1 text-xs font-semibold text-primary">
                  {q.speaker} &mdash; {q.chapter}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{q.analysis}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Narrative Techniques ───────────────────────────────────── */}
        <section id="narrative-techniques" aria-labelledby="techniques-heading">
          <h2 id="techniques-heading" className="text-2xl font-bold text-foreground">
            Narrative Techniques
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Lee&rsquo;s narrative methods are essential for AO2 (analysis of language, form,
            and structure). Examiners reward candidates who discuss <em>how</em> Lee shapes
            meaning, not just <em>what</em> happens.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {narrativeTechniques.map((d) => (
              <div
                key={d.name}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
                <h3 className="font-semibold text-foreground">{d.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.detail}</p>
              </div>
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
            To Kill a Mockingbird was published in 1960 but is set in the mid-1930s. Cambridge
            examiners expect you to discuss both the fictional setting and the context of
            publication, and to integrate context into your analysis rather than treating it
            as a bolt-on.
          </p>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">The Jim Crow South</h3>
              <p className="mt-2">
                The novel is set in Alabama during the 1930s, under the Jim Crow laws that
                enforced racial segregation throughout the American South. Black citizens were
                denied equal access to education, public facilities, and the legal system.
                All-white juries were the norm, and Black defendants faced systemic bias.
                Maycomb&rsquo;s rigid racial hierarchy — where even the Ewells outrank Tom
                Robinson — reflects this historical reality. Lee uses the fictional trial to
                dramatise the real injustice of a legal system that was designed to maintain
                white supremacy.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">The Great Depression</h3>
              <p className="mt-2">
                Maycomb in the 1930s is a town crippled by poverty. The Cunninghams cannot pay
                in cash and barter with crops instead. Professional families like the Finches
                are relatively comfortable, but even they feel the economic strain. The
                Depression intensified class tensions and racial scapegoating, as poor whites
                competed with Black workers for scarce resources. Lee&rsquo;s depiction of
                Maycomb&rsquo;s poverty provides the economic context for the social
                hierarchies that drive the plot.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">The Scottsboro Boys (1931)</h3>
              <p className="mt-2">
                Nine Black teenagers were falsely accused of raping two white women on a train
                in Alabama. Despite contradictory evidence and one accuser recanting, all-white
                juries convicted the defendants repeatedly. The case drew national and
                international attention to Southern racial injustice. Harper Lee, growing up in
                Monroeville, Alabama, would have been aware of this case, and Tom Robinson&rsquo;s
                trial shares clear parallels: a false accusation, an all-white jury, and a
                verdict determined by race rather than evidence.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">The Civil Rights Movement (1950s-60s)</h3>
              <p className="mt-2">
                Lee published the novel in 1960, during a period of intense civil rights
                activism. The Montgomery Bus Boycott (1955), the Brown v. Board of Education
                ruling (1954), and the sit-in movements were challenging segregation. By
                setting her novel in the 1930s and publishing it during the civil rights era,
                Lee drew a line between past injustice and present struggle, arguing that the
                racism of the Depression-era South had not been overcome. The novel became a
                key text of the movement, widely read in American schools as a moral education
                tool.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-foreground">Harper Lee&rsquo;s Biography</h3>
              <p className="mt-2">
                Lee grew up in Monroeville, Alabama, the model for Maycomb. Her father,
                Amasa Coleman Lee, was a lawyer who defended Black clients — a clear
                inspiration for Atticus Finch. Lee&rsquo;s childhood friend Truman Capote is
                widely considered the basis for Dill. The novel draws heavily on Lee&rsquo;s
                personal experience of small-town Southern life, racial tension, and the legal
                profession. Understanding Lee&rsquo;s background helps explain the novel&rsquo;s
                autobiographical tone and its intimate knowledge of the community it depicts.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Assessment Objectives ───────────────────────────────── */}
        <section id="assessment-objectives" aria-labelledby="ao-heading">
          <h2 id="ao-heading" className="text-2xl font-bold text-foreground">
            Cambridge Assessment Objectives
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Understanding the assessment objectives helps you target your revision and structure
            your exam answers for maximum marks.
          </p>
          <div className="mt-6 space-y-4">
            {assessmentObjectives.map((ao) => (
              <div
                key={ao.code}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded-full bg-[#2C3E50] px-2.5 py-0.5 text-xs font-bold text-white">
                    {ao.code}
                  </span>
                  <h3 className="font-semibold text-foreground">{ao.description}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ao.guidance}</p>
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
            Cambridge IGCSE To Kill a Mockingbird questions appear in the Prose section. You
            will choose between a passage-based (a) question and an essay (b) question. Below
            are examples of both types with guidance and a model paragraph.
          </p>

          <div className="mt-6 space-y-6">
            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-[#2C3E50]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Passage-Based (a)
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                Re-read the passage in Chapter 21 from &ldquo;I shut my eyes&rdquo; to
                &ldquo;Your father&rsquo;s passin&rsquo;.&rdquo; How does Lee make this such
                a powerful and moving moment in the novel?
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>&bull; Work through the passage line by line, identifying key language choices</li>
                  <li>&bull; Analyse the contrast between the verdict and the community&rsquo;s response</li>
                  <li>&bull; Discuss the effect of the child narrator: Scout&rsquo;s sensory detail and confusion heighten pathos</li>
                  <li>&bull; Consider the structural placement: immediately after the guilty verdict</li>
                  <li>&bull; Link to context: the Black community&rsquo;s standing ovation inverts the racial hierarchy</li>
                  <li>&bull; Use terminology: juxtaposition, dramatic irony, symbolism, tableau</li>
                </ul>
              </div>
            </div>

            {/* ── Model Paragraph ──────────────────────────────────── */}
            <div className="rounded-lg border-2 border-primary/40 bg-card p-5 shadow-md">
              <h3 className="text-lg font-semibold text-foreground">
                Model Paragraph (for the passage-based question above)
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground italic">
                {sampleQuestion.modelParagraph}
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">AOs demonstrated:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>&bull; <strong>AO1:</strong> Detailed knowledge of the passage and its significance in the novel</li>
                  <li>&bull; <strong>AO2:</strong> Analysis of Lee&rsquo;s language (&lsquo;passin&rsquo;&rsquo;), structure (juxtaposition of verdict and honour), and narrative perspective</li>
                  <li>&bull; <strong>AO3:</strong> Contextual awareness of racial hierarchy and the Black community&rsquo;s position</li>
                  <li>&bull; <strong>AO4:</strong> Clear, analytical writing using appropriate literary terminology</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-[#2C3E50]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Essay (b)
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                How does Lee present the theme of prejudice in To Kill a Mockingbird?
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>&bull; Plan 3&ndash;4 key points with supporting quotations for each</li>
                  <li>&bull; Discuss racial prejudice (Tom&rsquo;s trial), social prejudice (the class hierarchy), and personal prejudice (the children&rsquo;s fear of Boo Radley)</li>
                  <li>&bull; Analyse Lee&rsquo;s methods: the child narrator exposes hypocrisy; the mockingbird symbol condemns the destruction of innocence</li>
                  <li>&bull; Reference context: Jim Crow laws, the Scottsboro case, the Civil Rights Movement</li>
                  <li>&bull; Show how different characters embody or challenge prejudice (Atticus vs. Bob Ewell; Scout&rsquo;s growth vs. the jury&rsquo;s failure)</li>
                  <li>&bull; Conclude with Lee&rsquo;s wider message: that empathy is the antidote to prejudice</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-[#2C3E50]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Essay (b)
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                How does Lee use the character of Atticus Finch to convey her ideas about
                courage and morality?
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>&bull; Structure around key moments: the mad dog scene, the jail confrontation, the trial, the response to Bob Ewell&rsquo;s spitting</li>
                  <li>&bull; Contrast physical courage (shooting the dog) with moral courage (defending Tom)</li>
                  <li>&bull; Discuss Atticus as a father figure and moral educator — his methods of teaching through example</li>
                  <li>&bull; Analyse Lee&rsquo;s presentation: Atticus is seen through Scout&rsquo;s adoring but gradually maturing eyes</li>
                  <li>&bull; Link to context: Atticus represents the liberal Southern ideal during the Civil Rights era</li>
                  <li>&bull; Discuss Lee&rsquo;s purpose: Atticus embodies the novel&rsquo;s argument that moral courage can challenge — even if it cannot immediately defeat — institutional injustice</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 shadow-md">
              <span className="inline-block rounded-full bg-[#2C3E50]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                Passage-Based (a)
              </span>
              <p className="mt-3 text-sm font-medium text-foreground">
                Re-read the passage in Chapter 31 from &ldquo;I led him to the front
                porch&rdquo; to the end of the chapter. How does Lee use this moment to bring
                the novel to a satisfying conclusion?
              </p>
              <div className="mt-3 rounded bg-primary/5 p-3">
                <p className="text-xs font-semibold text-foreground">How to approach:</p>
                <ul className="mt-1 space-y-1 text-xs text-muted-foreground">
                  <li>&bull; Analyse Scout standing on Boo&rsquo;s porch — the fulfilment of Atticus&rsquo;s empathy lesson from Chapter 3</li>
                  <li>&bull; Discuss the retrospective narration: Scout sees the neighbourhood from Boo&rsquo;s perspective across the entire novel</li>
                  <li>&bull; Note the circular structure: the novel ends where it began, but Scout has been transformed</li>
                  <li>&bull; Analyse the gentle, reflective tone — Lee signals that Scout&rsquo;s childhood is ending</li>
                  <li>&bull; Discuss the mockingbird motif: Scout&rsquo;s protection of Boo echoes Atticus&rsquo;s defence of Tom</li>
                  <li>&bull; Link to context: Lee&rsquo;s message that empathy and understanding can overcome fear and prejudice</li>
                </ul>
              </div>
            </div>

            {/* ── Exam Technique ───────────────────────────────────── */}
            <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-5">
              <h3 className="text-lg font-semibold text-foreground">
                Cambridge Exam Technique: Key Tips
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">Passage-based (a) questions:</strong> Work
                  through the extract methodically. Use short, embedded quotations from the
                  passage. Analyse language, form, and structure (AO2). Then connect outward to
                  the rest of the novel and relevant context. Always discuss Lee&rsquo;s use of
                  the child narrator and how it shapes the reader&rsquo;s response.
                </li>
                <li>
                  <strong className="text-foreground">Essay (b) questions:</strong> Plan before you
                  write. Select 3&ndash;4 key moments from across the novel with quotations. Focus
                  on Lee&rsquo;s methods and purpose, not just what happens. Integrate
                  context rather than adding it as a separate paragraph. Show awareness of the
                  novel&rsquo;s structure and how it develops themes.
                </li>
                <li>
                  <strong className="text-foreground">Always use the author&rsquo;s name:</strong>{" "}
                  Write &ldquo;Lee presents...&rdquo; or &ldquo;Lee
                  uses...&rdquo; rather than &ldquo;the novel shows...&rdquo;. This demonstrates
                  awareness of authorial intent and helps you discuss methods (AO2).
                </li>
                <li>
                  <strong className="text-foreground">The 1930s setting and 1960 publication:</strong>{" "}
                  Like An Inspector Calls, this novel has a dual time frame. The 1930s setting
                  depicts historical racial injustice; the 1960 publication places it in dialogue
                  with the Civil Rights Movement. Both contexts are important for AO3.
                </li>
                <li>
                  <strong className="text-foreground">Quote precisely:</strong> Short, embedded
                  quotations (&lsquo;climb inside of his skin&rsquo;) are more effective than
                  long block quotes. Aim for at least one quotation per paragraph. Accuracy
                  matters — learn key quotes exactly.
                </li>
                <li>
                  <strong className="text-foreground">Link everything to Lee&rsquo;s purpose:</strong>{" "}
                  The strongest answers connect analysis to Lee&rsquo;s moral message.
                  Why does she use a child narrator? Why does Tom die off-stage? Why does Scout
                  end up on Boo&rsquo;s porch? Always ask: what is Lee trying to make the reader
                  think or feel?
                </li>
              </ul>
            </div>
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
      </div>

    </>
  );
}
