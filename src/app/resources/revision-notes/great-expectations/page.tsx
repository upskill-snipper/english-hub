"use client";

import { useState } from "react";

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

const stagesSummary = [
  {
    stage: "Stage 1: Pip's Childhood (Chapters 1-19)",
    subtitle: "The Forge and the First Expectations",
    summary:
      "Pip, an orphan raised by his harsh sister Mrs Joe and her kind husband Joe Gargery, the village blacksmith, lives on the Kent marshes. As a young boy he encounters an escaped convict, Abel Magwitch, in the churchyard and brings him food and a file out of fear and pity. Pip is later invited to Satis House to 'play' for Miss Havisham, a wealthy recluse who was jilted on her wedding day and now lives among the decaying remains of her wedding feast. There he meets Estella, Miss Havisham's adopted daughter, who is beautiful but cold and contemptuous. Estella makes Pip ashamed of his 'coarse hands' and 'thick boots', and he becomes dissatisfied with his humble life at the forge. Miss Havisham encourages Estella to break Pip's heart as part of her revenge against all men. Pip is formally apprenticed to Joe, but the seeds of social ambition have been sown. Mr Jaggers, a powerful London lawyer, arrives to inform Pip that he has 'great expectations' from an anonymous benefactor and is to be brought up as a gentleman. Pip assumes Miss Havisham is his patron and that she intends him for Estella.",
  },
  {
    stage: "Stage 2: Pip's Great Expectations (Chapters 20-39)",
    subtitle: "London and the Life of a Gentleman",
    summary:
      "Pip moves to London, where he is tutored alongside Herbert Pocket, who becomes his closest friend. Herbert reveals the full story of Miss Havisham's betrayal by Compeyson, a gentleman-criminal who conspired with her half-brother Arthur to swindle her. Pip lives extravagantly, falls into debt, and joins an idle gentlemen's club called the Finches of the Grove. He treats Joe with embarrassment and condescension when Joe visits London, ashamed of his old companion's rough manners. He continues to pursue Estella, despite her repeated warnings that she has no heart to give. Estella is courted by the brutish Bentley Drummle, which torments Pip. Pip visits Satis House and confronts Miss Havisham about Estella. Meanwhile, Mrs Joe dies after being attacked by Orlick, Joe's journeyman. Biddy, a kind and intelligent village girl, cares for the household. At the end of Stage 2, in a devastating revelation, Magwitch returns secretly to London and reveals himself as Pip's true benefactor. The convict has made his fortune in Australia and has devoted his life to making Pip a gentleman. Pip's assumptions about Miss Havisham are shattered, and he is horrified to owe everything to a criminal.",
  },
  {
    stage: "Stage 3: Pip's Redemption (Chapters 40-59)",
    subtitle: "Loss, Loyalty, and True Worth",
    summary:
      "Pip must hide Magwitch, whose return to England is punishable by death. Gradually, Pip comes to understand and even love the old convict, recognising Magwitch's generosity and loyalty. He discovers that Estella is Magwitch's daughter by Molly, Jaggers's housekeeper, though Estella does not know this. Miss Havisham, confronted by Pip about the damage she has done, is consumed by remorse and begs his forgiveness; her dress catches fire and she is fatally burned. Pip and Herbert plan Magwitch's escape down the Thames, but they are intercepted by Compeyson, Magwitch's old enemy, who has informed the authorities. In the struggle, Compeyson drowns and Magwitch is mortally injured. Magwitch is sentenced to death but dies peacefully in prison, with Pip at his side, after Pip tells him that his daughter is alive, beautiful, and that Pip loves her. With his expectations gone, Pip falls gravely ill and is nursed back to health by Joe, who also quietly pays off Pip's debts. Pip resolves to return to the forge and marry Biddy, but discovers that Joe and Biddy have married each other. Humbled and repentant, Pip goes abroad to work with Herbert in business. Years later he returns and meets Estella in the ruins of Satis House. Estella, softened by her own suffering in a miserable marriage to Drummle (now dead), takes Pip's hand, and Dickens implies they will not part again.",
  },
];

const characters = [
  {
    name: "Pip (Philip Pirrip)",
    role: "Protagonist and narrator",
    analysis:
      "Pip is both the narrator looking back on his younger self and the protagonist whose moral development drives the novel. As a child he is sensitive, imaginative, and fearful. His encounter with Estella instils a deep shame about his social class, which becomes the engine of his ambition. Once he receives his expectations, Pip becomes snobbish, ungrateful, and morally blind: he neglects Joe, is embarrassed by his origins, and assumes wealth equals worth. His journey is one of painful self-discovery. The revelation of Magwitch as his benefactor forces him to confront his own shallow values. Through suffering, loss, and the example of Joe's unconditional love, Pip learns that true gentility lies in character, not class. Dickens uses Pip's first-person narration to create dramatic irony: the older Pip judges his younger self harshly, guiding the reader to recognise the moral errors as they unfold.",
  },
  {
    name: "Estella",
    role: "Miss Havisham's adopted daughter; Pip's love interest",
    analysis:
      "Estella is raised by Miss Havisham as an instrument of revenge against men: she is taught to be beautiful, proud, and emotionally cold. She repeatedly tells Pip she has 'no heart' and warns him not to love her, yet he persists. Estella is both victim and perpetrator: she inflicts pain on Pip but has herself been damaged by Miss Havisham's upbringing. Her marriage to the brutal Drummle is an act of self-destruction that even Miss Havisham does not intend. By the novel's end, suffering has humanised her. Dickens uses Estella to explore whether nurture can permanently destroy a person's capacity for love, and ultimately suggests it cannot. Her parentage (the daughter of a convict and a murderer) reinforces the novel's argument that class and breeding do not determine character.",
  },
  {
    name: "Miss Havisham",
    role: "Wealthy recluse of Satis House",
    analysis:
      "Jilted by Compeyson on her wedding day, Miss Havisham has stopped all the clocks at twenty to nine and lives in her decaying wedding dress among the rotting remains of her wedding feast. She adopts Estella and raises her to break men's hearts as revenge for her own suffering. Miss Havisham is one of Dickens's most Gothic and psychologically complex creations. She represents the destructive power of arrested grief and the way bitterness, left unchecked, corrupts not only the sufferer but everyone around them. Her remorse in the final stage, when she sees the damage she has done to both Estella and Pip, is genuine and devastating. Her death by fire is both punishment and purification. The phrase 'What have I done!' is her moment of tragic recognition.",
  },
  {
    name: "Joe Gargery",
    role: "Blacksmith; Pip's brother-in-law and surrogate father",
    analysis:
      "Joe is the novel's moral compass. He is gentle, loyal, honest, and utterly without pretension. He endures Mrs Joe's violence without complaint and treats Pip with unconditional love. When Pip becomes a gentleman and treats Joe with condescension, Joe bears it patiently, telling Pip that he is 'wrong, out of the forge' and would not wish to make Pip uncomfortable. Joe's visit to London, where he is awkward and ashamed, is one of the novel's most painful scenes because Pip's discomfort causes Joe to leave. Yet when Pip is ill and destitute, Joe nurses him without reproach and pays his debts. Joe represents the moral ideal of the novel: true gentility is kindness, loyalty, and honest labour, not wealth or social status.",
  },
  {
    name: "Abel Magwitch (Provis)",
    role: "Escaped convict; Pip's secret benefactor",
    analysis:
      "Magwitch is the convict Pip helps as a child on the marshes. Transported to Australia, he works hard and devotes his fortune to making Pip a gentleman, partly out of gratitude and partly to prove that a convict can 'make' a gentleman as fine as any the upper classes produce. His return to England, risking death, reveals the depth of his devotion. Magwitch challenges Victorian assumptions about class: he is a criminal, yet his generosity and loyalty exceed those of the supposed gentlefolk. Pip's gradual acceptance of Magwitch as a father figure, and his tenderness at Magwitch's deathbed, marks the completion of Pip's moral education. Dickens uses Magwitch to argue that worth is determined by character, not birth or social position.",
  },
  {
    name: "Herbert Pocket",
    role: "Pip's close friend and companion in London",
    analysis:
      "Herbert is the 'pale young gentleman' Pip fights at Satis House as a child. In London, he becomes Pip's closest friend and moral confidant. Herbert is open, cheerful, honourable, and practically minded. He gives Pip the nickname 'Handel' and gently teaches him table manners. Unlike Pip, Herbert works for his living and does not pretend to be above his station. He represents the qualities of a true gentleman: kindness, integrity, and generosity of spirit. Pip's secret arrangement to set Herbert up in business (using Miss Havisham's money) is Pip's most selfless act and demonstrates that he has learned to use wealth for others' benefit.",
  },
  {
    name: "Mr Jaggers",
    role: "Powerful London lawyer",
    analysis:
      "Jaggers is the intermediary between Pip and his anonymous benefactor. He is commanding, intimidating, and morally ambiguous. He obsessively washes his hands with scented soap after dealing with clients, a symbolic gesture that suggests both guilt and a desire to remain untainted by the criminal world he navigates. Jaggers knows the secrets of almost every character (Estella's parentage, Magwitch's identity, Molly's crime) but reveals nothing unless compelled. He represents the law as a system of power rather than justice. His professional detachment raises questions about moral responsibility: he follows the letter of the law but makes no effort to address its failures.",
  },
  {
    name: "Wemmick",
    role: "Jaggers's clerk",
    analysis:
      "Wemmick leads a carefully divided life. At the office he is businesslike and emotionless, with a mouth 'like a post-box'. At home in Walworth he is warm, whimsical, and devoted to his elderly father, the 'Aged Parent', in a miniature castle complete with a drawbridge, a flagpole, and a cannon. Wemmick's 'Walworth sentiments' versus his 'Little Britain sentiments' represent the Victorian tension between private feeling and public duty. He advises Pip to keep personal and professional life strictly separate. Dickens uses Wemmick to show that the dehumanising demands of the legal and commercial world can be survived only by maintaining a private space of genuine human warmth.",
  },
  {
    name: "Biddy",
    role: "Village girl; Joe's second wife",
    analysis:
      "Biddy is intelligent, perceptive, kind, and self-improving. She teaches Pip to read and later keeps house for Joe after Mrs Joe's death. She sees through Pip's snobbery and gently challenges him, asking whether Estella is truly 'worth' his devotion and whether he might not be happier at the forge. Pip dismisses her advice, but Biddy is consistently right. Her marriage to Joe is the fitting union of two good people. Biddy functions as a foil to Estella: where Estella is beautiful but emotionally damaged, Biddy is plain but morally whole. She represents the domestic virtues and genuine worth that Pip overlooks in his pursuit of social advancement.",
  },
  {
    name: "Compeyson",
    role: "Gentleman-criminal and Magwitch's enemy",
    analysis:
      "Compeyson is the man who jilted Miss Havisham and conspired with her half-brother Arthur to defraud her. He is also Magwitch's former criminal partner, who received a lighter sentence than Magwitch at trial because of his gentlemanly appearance and manners. Compeyson embodies the novel's critique of class: he is a criminal who escapes justice because he looks and speaks like a gentleman, while Magwitch, equally guilty, is punished more harshly because he looks like a criminal. Compeyson is Dickens's clearest demonstration that the Victorian class system rewards appearance over substance.",
  },
  {
    name: "Mrs Joe (Georgiana)",
    role: "Pip's sister and Joe's wife",
    analysis:
      "Mrs Joe raises Pip 'by hand', which means both that she bottle-fed him (rather than breastfeeding) and that she frequently beats him. She is harsh, resentful, and violent, using her Tickler (a cane) and her apron as tools of domestic tyranny. She represents the failure of family love in a society obsessed with respectability and resentment. Her attack by Orlick leaves her brain-damaged and dependent; her subsequent gentleness towards Orlick and Joe suggests that her harshness was a product of frustration rather than nature. Her death marks the end of Pip's connection to his old life.",
  },
];

const themes = [
  {
    name: "Social Class and Ambition",
    detail:
      "Class is the novel's central preoccupation. Pip's encounter with Estella makes him ashamed of being 'common', and his expectations fuel a desire to rise in society. Yet Dickens systematically demolishes the equation of class with worth. The true gentleman of the novel is Joe, a blacksmith. The true villain is Compeyson, who looks and speaks like a gentleman. Magwitch's fortune, earned through honest labour in Australia, creates a 'gentleman' in Pip, exposing the arbitrariness of class distinctions. Dickens shows that Victorian society rewards birth and appearance over character, and that social ambition, when disconnected from moral values, leads to ingratitude, snobbery, and unhappiness.",
  },
  {
    name: "Ambition and Self-Improvement",
    detail:
      "Dickens distinguishes between genuine self-improvement and shallow social climbing. Pip's desire to become a gentleman is driven not by a wish to be morally better but by a wish to be socially superior and to win Estella's love. This is contrasted with Biddy's quiet self-education and Herbert's honest industry. Joe's refusal to change embodies a different kind of integrity. The novel argues that true improvement means becoming kinder, more loyal, and more honest, not wealthier or more refined. Pip's moral improvement only begins when his material expectations are destroyed.",
  },
  {
    name: "Love and Relationships",
    detail:
      "The novel explores many forms of love. Pip's romantic obsession with Estella is self-destructive and based on fantasy rather than genuine connection. Miss Havisham's love for Compeyson curdles into a desire for revenge that poisons Estella. Joe's love for Pip is unconditional and selfless, the novel's moral ideal. Magwitch's love for Pip, though possessive and partly motivated by revenge against society, is ultimately generous and self-sacrificing. Herbert and Clara's quiet, honest love provides a model of healthy partnership. Dickens suggests that love rooted in social ambition or revenge destroys, while love rooted in kindness and loyalty redeems.",
  },
  {
    name: "Loyalty and Gratitude",
    detail:
      "Pip's central moral failure is ingratitude. He is ashamed of Joe, who has loved him unconditionally, and fantasises that Miss Havisham, who has manipulated him, is his benefactor. When Magwitch reveals himself, Pip is repulsed by the very man who sacrificed everything for him. The novel charts Pip's painful journey from ingratitude to gratitude: he learns to value Joe's constancy, to recognise Magwitch's devotion, and to see that loyalty is more valuable than social status. Joe's loyalty to Pip, even when Pip treats him badly, is the moral standard against which all other behaviour is measured.",
  },
  {
    name: "Justice and the Law",
    detail:
      "The legal system in Great Expectations is powerful but not just. Jaggers represents law as a mechanism of power, not morality. Compeyson receives a lighter sentence than Magwitch because of his class, exposing the class bias of the justice system. Magwitch is condemned to death for returning to England, regardless of his reformation. Orlick escapes justice for attacking Mrs Joe. Dickens presents a world in which the law punishes the poor and protects the wealthy, and where true justice (compassion, forgiveness, and moral responsibility) operates outside the legal system entirely.",
  },
  {
    name: "Identity and Self-Knowledge",
    detail:
      "Pip's struggle is fundamentally one of identity. He is ashamed of who he is and tries to become someone else. His name itself is uncertain: 'Philip Pirrip' becomes 'Pip' because that is all the infant tongue could manage. His identity is constructed by others: Miss Havisham shapes his desires, Estella teaches him to be ashamed, Magwitch wants to 'make' him a gentleman. Only through suffering and loss does Pip discover his authentic self: someone who values love over status, loyalty over ambition, and character over class. The novel suggests that self-knowledge is the most painful and valuable form of education.",
  },
  {
    name: "Forgiveness and Redemption",
    detail:
      "The novel's moral arc bends towards forgiveness. Miss Havisham begs Pip to forgive her and dies consumed by guilt. Pip forgives Magwitch and comes to love him. Joe forgives Pip without being asked, simply nursing him back to health and paying his debts. Estella, softened by suffering, is finally able to connect with Pip emotionally. Dickens argues that forgiveness is essential to moral growth and that holding onto grievance (as Miss Havisham does) is self-destructive. The novel's ending, however ambiguous, offers the possibility of redemption for those willing to change.",
  },
];

const keyQuotes = [
  {
    quote: "I took her hand in mine, and we went out of the ruined place... I saw no shadow of another parting from her.",
    chapter: "Chapter 59",
    speaker: "Pip (narrator)",
    analysis:
      "The novel's famous final lines. The 'ruined place' (Satis House) symbolises the destruction of false expectations. The absence of 'shadow' suggests hope, but the phrasing is deliberately ambiguous: Pip says he 'saw no shadow' of parting, not that they never parted. Dickens revised the ending from a bleaker original at Bulwer-Lytton's suggestion, and the ambiguity of this version allows readers to interpret it as either a reunion or a final farewell. The hand-holding recalls the class-conscious moment when Estella first mocked Pip's 'coarse hands'.",
  },
  {
    quote: "I loved her against reason, against promise, against peace, against hope, against happiness, against all discouragement that could be.",
    chapter: "Chapter 29",
    speaker: "Pip (narrator)",
    analysis:
      "The anaphoric repetition of 'against' creates a hammering rhythm that conveys the irrational, self-destructive nature of Pip's love for Estella. Each 'against' adds another argument for stopping, yet Pip continues. The passage reveals that Pip understands his love is foolish even as he cannot resist it. Dickens shows how desire rooted in class aspiration becomes an obsession that overrides reason. The word 'against' positions love as a battle fought against oneself.",
  },
  {
    quote: "In a word, I was too cowardly to do what I knew to be right, as I had been too cowardly to avoid doing what I knew to be wrong.",
    chapter: "Chapter 28",
    speaker: "Pip (narrator)",
    analysis:
      "Pip's devastating self-assessment of his treatment of Joe. The balanced syntax (too cowardly to do right / too cowardly to avoid wrong) exposes the moral paralysis caused by social ambition. Pip knows he is behaving badly but cannot stop because admitting Joe publicly would threaten his status as a gentleman. The word 'cowardly' is significant: Pip's failing is not ignorance but moral cowardice. This is one of the novel's most important moments of self-knowledge.",
  },
  {
    quote: "Suffering has been stronger than all other teaching, and has taught me to understand what your heart used to be. I have been bent and broken, but -- I hope -- into a better shape.",
    chapter: "Chapter 59",
    speaker: "Estella",
    analysis:
      "Estella's final speech marks her transformation from emotionally frozen to emotionally open. The metaphor of being 'bent and broken' into a 'better shape' echoes the forge imagery associated with Joe: just as metal must be heated and hammered to be useful, Estella's suffering has remade her. The dash before 'I hope' conveys uncertainty and vulnerability, qualities entirely absent from the earlier Estella. This line encapsulates the novel's argument that suffering can be redemptive.",
  },
  {
    quote: "I am what you have made me. Take all the praise, take all the blame; take all the success, take all the failure; in a word, take me.",
    chapter: "Chapter 38",
    speaker: "Estella to Miss Havisham",
    analysis:
      "Estella confronts Miss Havisham with the consequences of her upbringing. The imperative repetition of 'take' is both an accusation and a surrender. Estella cannot be blamed for her coldness because she was manufactured to be cold. This speech is central to the novel's exploration of nature versus nurture: Estella is the daughter of passionate people (Magwitch and Molly) but has been trained to suppress all feeling. The irony is that Miss Havisham wanted Estella to break others' hearts, but the greatest heart she breaks is Miss Havisham's own.",
  },
  {
    quote: "He calls the knaves, Jacks, this boy! And what coarse hands he has! And what thick boots!",
    chapter: "Chapter 8",
    speaker: "Estella",
    analysis:
      "Estella's first sustained criticism of Pip, spoken at Satis House. The exclamation marks convey contempt and disgust. The details are telling: 'knaves' versus 'Jacks' is a matter of vocabulary, not morality; 'coarse hands' and 'thick boots' are the marks of honest labour. Estella equates social refinement with worth, and Pip internalises this judgment, which drives his entire trajectory. Dickens shows how class contempt is transmitted through language, turning the working class's labour into a source of shame.",
  },
  {
    quote: "Pip, dear old chap, life is made of ever so many partings welded together.",
    chapter: "Chapter 27",
    speaker: "Joe",
    analysis:
      "Joe's simple but profound observation uses the language of the forge ('welded') to describe human experience. The metaphor transforms loss into something constructive: partings are not simply breaks but are joined together to make a whole life. The warmth of 'dear old chap' contrasts painfully with Pip's cold reception of Joe in London. Joe's wisdom, expressed in the language of manual labour, challenges the assumption that education and class produce superior insight.",
  },
  {
    quote: "I want to be a gentleman... I am ashamed of home.",
    chapter: "Chapter 17",
    speaker: "Pip",
    analysis:
      "Pip's confession to Biddy is the novel's turning point in terms of character. The brevity of 'I am ashamed of home' is devastating in its honesty. Biddy rightly questions whether Estella is 'worth' this self-rejection. Pip's shame is not innate but learned: it was installed by Estella's contempt. Dickens shows how class ideology operates: it convinces people to despise their own origins and to seek validation from those who despise them.",
  },
  {
    quote: "It is a most miserable thing to feel ashamed of home.",
    chapter: "Chapter 14",
    speaker: "Pip (narrator)",
    analysis:
      "One of the novel's most quoted lines, this crystallises Pip's internal conflict. The word 'miserable' acknowledges the emotional cost of snobbery: shame does not elevate Pip but makes him wretched. Yet he cannot stop feeling it. Dickens shows that class-based shame is a form of self-harm, destroying the very happiness it promises to create. The simplicity of the sentence gives it the force of a moral axiom.",
  },
  {
    quote: "Look'ee here, Pip. I'm your second father. You're my son -- more to me nor any son.",
    chapter: "Chapter 39",
    speaker: "Magwitch",
    analysis:
      "Magwitch's revelation of himself as Pip's benefactor is the novel's central plot twist. The phrase 'second father' establishes a parental claim that competes with Joe's. Magwitch's rough dialect ('Look'ee', 'nor') contrasts with the 'gentleman' he has created. The irony is multiple: Pip has been made a gentleman by a convict, not a lady; his expectations are founded on crime, not respectability; and the man he most despised has loved him most devotedly.",
  },
  {
    quote: "So, I called myself Pip, and came to be called Pip.",
    chapter: "Chapter 1",
    speaker: "Pip (narrator)",
    analysis:
      "The novel's opening establishes identity as uncertain and self-constructed. Pip names himself because he cannot pronounce his full name (Philip Pirrip), and this infantile self-naming foreshadows the novel's exploration of how identity is shaped by circumstance, desire, and the perceptions of others. The passive 'came to be called' suggests that identity is partly imposed from outside. The simplicity of 'Pip' contrasts with the grandeur of his later expectations.",
  },
  {
    quote: "Miss Havisham's intentions towards me, all a mere dream; Estella not designed for me; I only suffered in Satis House as a convenience.",
    chapter: "Chapter 39",
    speaker: "Pip (narrator)",
    analysis:
      "The triple structure catalogues the collapse of Pip's assumptions. Each clause dismantles a different illusion: his patron, his destined bride, and his role at Satis House. The word 'convenience' is particularly bitter, reducing Pip from the hero of a romance to a tool in Miss Havisham's revenge. This is the moment when Pip's false identity disintegrates and his painful journey towards self-knowledge begins.",
  },
  {
    quote: "We spent as much money as we could, and got as little for it as people could make up their minds to give us.",
    chapter: "Chapter 34",
    speaker: "Pip (narrator)",
    analysis:
      "Pip's sardonic summary of his London lifestyle exposes the hollowness of his 'great expectations'. The balanced syntax (spent much / got little) highlights the irony of a life dedicated to consumption. The older Pip's dry humour reveals his retrospective shame. Dickens critiques the Victorian gentleman's idle lifestyle: Pip and Herbert produce nothing and consume everything, living as parasites on Magwitch's convict labour.",
  },
  {
    quote: "There was a long hard time when I kept far from me the remembrance of what I had thrown away when I was quite ignorant of its worth.",
    chapter: "Chapter 58",
    speaker: "Pip (narrator)",
    analysis:
      "Pip reflects on his neglect of Joe and Biddy. The phrase 'quite ignorant of its worth' inverts the novel's central irony: Pip spent years trying to acquire 'worth' through wealth and status while discarding the genuine worth of Joe's love. The word 'thrown away' implies reckless waste. This is a key moment of anagnorisis (self-recognition) in which the older Pip fully comprehends the cost of his younger self's snobbery.",
  },
  {
    quote: "Pause you who read this, and think for a moment of the long chain of iron or gold, of thorns or flowers, that would never have bound you, but for the formation of the first link on one memorable day.",
    chapter: "Chapter 9",
    speaker: "Pip (narrator)",
    analysis:
      "Pip addresses the reader directly, reflecting on how his visit to Satis House set the course of his life. The metaphor of the 'chain' suggests that consequences are linked and inescapable. The contrasting pairs (iron/gold, thorns/flowers) capture the dual nature of his expectations: they bring both opportunity and suffering. The word 'bound' implies imprisonment as well as connection. Dickens uses this narratorial intervention to emphasise that a single event can alter an entire life.",
  },
  {
    quote: "You have been the embodiment of every graceful fancy that my mind has ever become acquainted with.",
    chapter: "Chapter 44",
    speaker: "Pip to Estella",
    analysis:
      "Pip's declaration of love uses the word 'embodiment', which is telling: Estella is not loved as a person but as the physical form of Pip's fantasies. 'Graceful fancy' reveals that Pip's love is aesthetic and imaginative, not based on knowledge of Estella as a real person. This speech is simultaneously the most romantic and the most self-deluded moment in the novel. Pip loves a projection, not a person.",
  },
  {
    quote: "I did really cry in good earnest when I went to bed, to think that my expectations had done some good to somebody.",
    chapter: "Chapter 37",
    speaker: "Pip (narrator)",
    analysis:
      "Pip weeps with relief after secretly arranging Herbert's partnership. This is the only time his money does genuine good, and significantly, it involves giving rather than spending. The phrase 'some good to somebody' is understated but marks a moral turning point: Pip begins to understand that wealth's value lies in what it can do for others. Dickens contrasts this selfless act with Pip's habitual self-indulgence.",
  },
  {
    quote: "In the little world in which children have their existence... there is nothing so finely perceived and so finely felt, as injustice.",
    chapter: "Chapter 8",
    speaker: "Pip (narrator)",
    analysis:
      "This observation about childhood sensitivity to unfairness carries autobiographical weight: Dickens drew on his own childhood experiences of injustice (working in a blacking factory while his father was imprisoned for debt). The repetition of 'finely' emphasises how acutely children perceive moral wrongs. This quotation is often used to discuss Dickens's treatment of childhood and his social criticism.",
  },
  {
    quote: "I loved Joe -- perhaps for no better reason in those early days than because the dear fellow let me love him.",
    chapter: "Chapter 6",
    speaker: "Pip (narrator)",
    analysis:
      "Joe's willingness to be loved, without demanding anything in return, defines his character. The phrase 'let me love him' reverses the usual dynamic: Joe gives Pip permission to feel affection in a household dominated by Mrs Joe's violence. The parenthetical 'perhaps for no better reason' is the older Pip's self-deprecating qualification, but it actually identifies the highest form of love: one that asks nothing in return.",
  },
  {
    quote: "I must be taken as I have been made. The success is not mine, the failure is not mine, but the two together make me.",
    chapter: "Chapter 38",
    speaker: "Estella to Miss Havisham",
    analysis:
      "Estella refuses to accept personal blame for her emotional coldness, attributing it entirely to Miss Havisham's upbringing. The balanced phrasing ('success...failure...two together') reflects the duality of Estella's nature: she is Miss Havisham's greatest achievement (beautiful, accomplished, powerful over men) and greatest failure (incapable of love). This quotation is essential for discussing the theme of nurture versus nature and the moral responsibility of those who shape children.",
  },
  {
    quote: "All other swindlers upon earth are nothing to the self-swindlers, and with such pretences did I cheat myself.",
    chapter: "Chapter 28",
    speaker: "Pip (narrator)",
    analysis:
      "Pip recognises that his greatest deception has been self-deception. The metaphor of 'swindling' connects Pip's moral self-delusion to the financial fraud committed by Compeyson against Miss Havisham. The superlative ('nothing to') emphasises that self-deception is worse than any external con. This quotation is central to the novel's exploration of identity and self-knowledge: Pip has been performing the role of gentleman while knowing, deep down, that the performance is hollow.",
  },
  {
    quote: "Heaven knows we need never be ashamed of our tears, for they are rain upon the blinding dust of earth, overlying our hard hearts.",
    chapter: "Chapter 19",
    speaker: "Pip (narrator)",
    analysis:
      "Pip weeps as he leaves the forge for London, and the older narrator justifies this emotion with a beautiful metaphor. Tears are redemptive ('rain') and cleansing, softening hearts that have become hardened ('hard hearts') by the dust of worldly concerns. The phrase 'blinding dust' suggests that materialism obscures moral vision. This quotation is often used to discuss Dickens's sentimentalism, but it also functions as a moment of prophetic self-awareness: Pip's tears foreshadow his eventual recognition of the forge's true value.",
  },
  {
    quote: "What have I done! What have I done!",
    chapter: "Chapter 49",
    speaker: "Miss Havisham",
    analysis:
      "Miss Havisham's anguished repetition marks her moment of tragic recognition (anagnorisis). She finally sees the full extent of the damage she has inflicted on Estella and Pip. The question is unanswerable because the damage cannot be undone. Shortly after this scene, her dress catches fire and she is fatally burned, a symbolic punishment for her destructive obsession. The repetition conveys both horror and helplessness, making Miss Havisham a genuinely tragic figure rather than merely a villain.",
  },
  {
    quote: "Once for all; I knew to my sorrow, often and often, if not always, that I loved her against reason.",
    chapter: "Chapter 29",
    speaker: "Pip (narrator)",
    analysis:
      "The phrase 'to my sorrow' acknowledges that Pip's love for Estella is a source of suffering, not joy. The qualifications ('often and often, if not always') suggest moments of lucidity in which Pip nearly escapes his obsession. 'Against reason' frames love as an irrational force that overrides judgment. Dickens presents Pip's love as both genuine and deeply misguided, inviting sympathy and criticism simultaneously.",
  },
  {
    quote: "I have been bent and broken, but -- I hope -- into a better shape.",
    chapter: "Chapter 59",
    speaker: "Estella",
    analysis:
      "This single sentence is one of the most frequently quoted lines in the novel. The forge metaphor connects Estella to Joe's world of honest labour and transformation through hardship. The tentative 'I hope' suggests Estella's growth is ongoing, not complete. Dickens implies that redemption is a process, not an event, and that acknowledging one's brokenness is the first step towards healing.",
  },
];

const contextSections = [
  {
    title: "The Victorian Class System",
    content:
      "Victorian England was rigidly stratified by class. Birth determined social position far more than ability or character. The 'gentleman' was defined not by moral qualities but by wealth, manners, accent, and leisure. To work with one's hands was considered 'common'. Dickens, who rose from poverty to become the most celebrated novelist of his age, was acutely aware of the injustice and absurdity of this system. Great Expectations systematically dismantles the Victorian equation of class with worth: Joe (a blacksmith) is the novel's truest gentleman, while Compeyson (a well-spoken criminal) uses his gentlemanly appearance to escape justice.",
  },
  {
    title: "Convicts and Transportation",
    content:
      "Between 1788 and 1868, Britain transported approximately 162,000 convicts to Australia. Transportation was used for crimes ranging from theft to political dissent. Convicts who returned to England without permission faced the death penalty. Magwitch's story reflects this reality: he is transported to New South Wales, makes his fortune through hard labour, and risks death to return to England. The 'hulks' (decommissioned ships used as floating prisons) that Pip sees on the Thames were a visible symbol of the penal system. Dickens visited prisons regularly and was deeply concerned about the treatment of convicts and the poor.",
  },
  {
    title: "Dickens's Life and Autobiography",
    content:
      "Great Expectations is Dickens's most autobiographical novel. Like Pip, Dickens was born into modest circumstances and felt acutely ashamed of his background after his father was imprisoned for debt and the twelve-year-old Charles was sent to work in Warren's Blacking Factory, pasting labels on bottles of shoe polish. This childhood trauma informed his lifelong sympathy with the poor and his suspicion of the class system. Like Pip, Dickens achieved social respectability and wealth but never entirely shed his feelings of shame and outsiderness. The novel was written in 1860-61, a period of personal crisis during which Dickens separated from his wife Catherine.",
  },
  {
    title: "The Bildungsroman",
    content:
      "Great Expectations belongs to the tradition of the Bildungsroman, or 'novel of formation', which traces the moral and psychological development of a young protagonist from childhood to maturity. The genre, established by Goethe's Wilhelm Meister's Apprenticeship, was popular in the Victorian period (David Copperfield, Jane Eyre). Dickens subverts the form: instead of a straightforward journey from innocence to experience and success, Pip's development is one of moral regression followed by painful recovery. His 'great expectations' prove to be a trap, not a liberation, and true maturity comes only through the loss of wealth and status.",
  },
  {
    title: "The Gothic Tradition",
    content:
      "Dickens draws on Gothic conventions to create some of the novel's most memorable imagery. Satis House, with its stopped clocks, rotting wedding feast, and decaying bride, is a classic Gothic setting. Miss Havisham, motionless among her ruins, evokes the Gothic figure of the madwoman. The marshes, the convict, the churchyard, and the opening scene's atmosphere of terror all draw on Gothic traditions. Dickens uses these elements not merely for atmosphere but to externalise psychological states: Satis House is a physical manifestation of Miss Havisham's arrested grief, just as the marshes symbolise the moral confusion of Pip's childhood.",
  },
];

const essayQuestions = [
  {
    question: "How does Dickens present the theme of social class in Great Expectations?",
    points: [
      "Pip's shame about being 'common' after visiting Satis House; Estella's contempt for his hands and boots",
      "The contrast between Joe's moral gentility and Compeyson's criminal gentility",
      "Magwitch as benefactor: a convict 'makes' a gentleman, exposing class as a construct",
      "The legal system's class bias: Compeyson's lighter sentence versus Magwitch's harsher punishment",
      "Pip's eventual recognition that true worth lies in character, not birth or wealth",
      "Link to Victorian context: Dickens's own class anxiety and his critique of the rigid social hierarchy",
    ],
  },
  {
    question: "How does Dickens use the character of Miss Havisham to explore the theme of revenge?",
    points: [
      "Satis House as a Gothic symbol of arrested time and obsessive grief",
      "Miss Havisham's project: raising Estella to break men's hearts as revenge against Compeyson",
      "The destruction of Estella's emotional life as collateral damage of revenge",
      "The irony that revenge most damages the avenger: Miss Havisham's isolation and despair",
      "'What have I done!' -- the moment of tragic recognition and its consequences",
      "Her death by fire as symbolic purification; Pip's forgiveness as an alternative to the cycle of revenge",
    ],
  },
  {
    question: "Explore how Dickens presents Pip's moral development throughout the novel.",
    points: [
      "Stage 1: childhood innocence and kindness (helping Magwitch), followed by the corruption of Satis House",
      "Stage 2: snobbery, ingratitude towards Joe, idle consumption in London, moral blindness",
      "The revelation of Magwitch as benefactor: the shattering of false assumptions",
      "Stage 3: gradual acceptance of Magwitch, selfless acts (Herbert's partnership), compassion for the dying convict",
      "The final reunion with Estella: humility and emotional honesty replace ambition and fantasy",
      "Dickens's use of first-person retrospective narration to create irony and moral judgment",
    ],
  },
  {
    question: "'Joe Gargery is the true gentleman of Great Expectations.' How far do you agree?",
    points: [
      "Joe's defining qualities: kindness, loyalty, honesty, forgiveness, unconditional love",
      "Joe's visit to London: his discomfort reveals Pip's snobbery, not Joe's inadequacy",
      "Joe nursing Pip back to health and paying his debts without reproach",
      "Counter-argument: Joe's passivity (he does not protect Pip from Mrs Joe or challenge the class system)",
      "The novel's redefinition of 'gentleman': moral character versus social status",
      "Link to Dickens's social criticism: the working class possesses virtues the upper class lacks",
    ],
  },
  {
    question: "How does Dickens use setting to convey meaning in Great Expectations?",
    points: [
      "The marshes: moral confusion, danger, isolation; the opening establishes an atmosphere of vulnerability",
      "The forge: warmth, honest labour, moral integrity; Joe's domain represents authentic values",
      "Satis House: Gothic decay, arrested time, the destructive effects of wealth and revenge",
      "London: corruption, ambition, moral compromise; Newgate Prison as a symbol of guilt",
      "Wemmick's castle: the division between public and private self; domestic warmth as resistance to dehumanisation",
      "The river: escape, danger, and the final confrontation with Compeyson; water as both threat and cleansing",
    ],
  },
];

/* ─── Page Component ─────────────────────────────────────────── */

export default function GreatExpectationsStudyGuide() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="rounded-xl border bg-gradient-to-b from-primary/[0.06] to-transparent px-6 py-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          GCSE English Literature &mdash; Revision Notes
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Great Expectations &mdash; Complete Study Guide
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Charles Dickens&rsquo;s 1861 Bildungsroman. Three-stage plot summary, character analysis,
          themes, 25+ key quotations with analysis, Victorian context, and essay planning.
        </p>
      </div>

      {/* Quick nav */}
      <nav className="flex flex-wrap gap-2 text-sm" aria-label="Page sections">
        {["Plot Summary", "Characters", "Themes", "Key Quotes", "Context", "Essay Planning"].map(
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

      {/* Plot Summary */}
      <Section id="plot-summary" title="Three-Stage Plot Summary" defaultOpen>
        <p className="mb-4 text-sm text-muted-foreground">
          Dickens structured the novel in three &lsquo;stages&rsquo; corresponding to the
          three volumes of its original publication. Each stage marks a phase of Pip&rsquo;s
          moral and social development.
        </p>
        <div className="space-y-4">
          {stagesSummary.map((s) => (
            <div key={s.stage} className="rounded-lg border border-border bg-muted p-4">
              <h3 className="font-semibold text-foreground">{s.stage}</h3>
              <p className="mt-0.5 text-xs font-medium text-primary">{s.subtitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
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
          Each quotation includes detailed analysis suitable for GCSE-level essay responses.
        </p>
        <div className="space-y-4">
          {keyQuotes.map((q, i) => (
            <div key={i} className="rounded-lg border-l-4 border-primary bg-muted p-4">
              <blockquote className="text-base font-medium italic text-foreground">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <p className="mt-1 text-xs font-semibold text-primary">
                {q.speaker ? `${q.speaker} — ` : ""}{q.chapter}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{q.analysis}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Context */}
      <Section id="context" title="Historical & Literary Context">
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

      {/* Back link */}
      <div className="pt-4 text-sm">
        <a
          href="/resources/revision-notes"
          className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
        >
          &larr; Back to Revision Notes
        </a>
      </div>

      {/* Public-domain notice */}
      <footer className="mt-8 text-center text-xs text-muted-foreground">
        <p>
          <em>Great Expectations</em> by Charles Dickens (first published 1861)
          is in the public domain. All quotations are reproduced freely.
        </p>
      </footer>
    </div>
  );
}
