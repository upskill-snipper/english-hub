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

const chapters = [
  {
    chapter: "Chapter 1 — Thursday Evening",
    summary:
      "George Milton and Lennie Small walk along the Salinas River towards a ranch where they have new jobs. George is small, sharp-featured and quick; Lennie is enormous, shapeless and mentally disabled. George carries both work cards because Lennie loses things. They camp by the river for the night. George discovers Lennie has been secretly carrying a dead mouse in his pocket, stroking it for comfort. George reluctantly tells their shared dream: one day they will own a small farm where Lennie can tend rabbits. George reminds Lennie that if anything goes wrong at the new ranch, he must return to this spot and hide in the brush by the river. We learn they were run out of their last job in Weed after Lennie grabbed a woman's dress and would not let go.",
  },
  {
    chapter: "Chapter 2 — Friday Morning",
    summary:
      "George and Lennie arrive at the ranch and meet the bunk house inhabitants. The boss is suspicious about why George speaks for Lennie. They meet Candy, the ageing, one-handed swamper, and his old dog. Curley, the boss's aggressive son, immediately takes a dislike to Lennie because of his size. Curley's wife appears in the doorway, described as having 'full, rouged lips' and 'the eye'. George warns Lennie to stay away from both Curley and his wife. They also meet Slim, the skilled mule-driver whose authority is respected by everyone, and Carlson, a large, insensitive ranch hand.",
  },
  {
    chapter: "Chapter 3 — Friday Evening",
    summary:
      "Slim gives Lennie a puppy from his dog's litter. George confides in Slim about what happened in Weed. Carlson pressures Candy to let him shoot his old, suffering dog; Candy reluctantly agrees and immediately regrets not shooting the dog himself. George tells Lennie about the dream farm while Candy overhears. Candy offers his life savings ($350) to join them, making the dream suddenly achievable. Curley picks a fight with Lennie, punching him repeatedly. On George's command, Lennie grabs Curley's fist and crushes it. Slim forces Curley to say his hand was caught in a machine to avoid humiliation.",
  },
  {
    chapter: "Chapter 4 — Saturday Night",
    summary:
      "While most men visit a brothel in town, Lennie enters Crooks's room in the harness room of the barn. Crooks is the Black stable buck who is segregated from the other workers. Initially hostile, Crooks cruelly suggests George might not come back, reducing Lennie to distress. Candy joins them and they discuss the dream farm. For a moment, Crooks asks to join them. Curley's wife appears and, when challenged by Crooks, threatens him with lynching. Crooks withdraws his request to join the dream and retreats into isolation.",
  },
  {
    chapter: "Chapter 5 — Sunday Afternoon",
    summary:
      "Lennie is alone in the barn. He has accidentally killed his puppy by stroking it too hard. Curley's wife finds him and, despite Lennie's attempts to avoid her, tells him about her failed dreams of being in the movies. She invites him to stroke her soft hair. When she panics and tries to pull away, Lennie holds on tighter and accidentally breaks her neck. He takes the dead puppy and runs to the brush by the river, as George told him to. Candy finds the body and fetches George. They both know the dream is dead. George takes Carlson's Luger pistol. Curley organises a lynch mob.",
  },
  {
    chapter: "Chapter 6 — Sunday Evening",
    summary:
      "The novel returns to the clearing by the Salinas River where it began. Lennie waits in the brush. He hallucinates his Aunt Clara scolding him, then a giant rabbit telling him George will leave him. George arrives and, as the mob approaches, tells Lennie to look across the river while he describes the dream farm one final time. George shoots Lennie in the back of the head with Carlson's Luger. The men arrive. Only Slim understands what George has done and why. Slim leads George away, saying 'You hadda, George. I swear you hadda.' Carlson and Curley cannot understand why George is upset.",
  },
];

const characters = [
  {
    name: "George Milton",
    analysis:
      "George is small, quick-witted, and sharp-featured, described as 'small and quick, dark of face, with restless eyes and sharp, strong features'. He acts as Lennie's protector, parent-figure, and conscience. George is intelligent enough to see the futility of itinerant workers' lives but compassionate enough to stay with Lennie despite the burden. He dreams of independence and self-sufficiency. His shooting of Lennie at the end is the novel's most morally complex moment: an act of love that is simultaneously a killing. George's tragedy is that in saving Lennie from a worse fate, he destroys the only meaningful relationship in his life and condemns himself to the loneliness he always feared.",
  },
  {
    name: "Lennie Small",
    analysis:
      "Lennie is physically enormous but mentally disabled, described as 'a huge man, shapeless of face'. His surname is ironic. He is gentle by nature but dangerous because he does not understand his own strength. His obsession with stroking soft things (mice, puppies, Curley's wife's hair) follows a pattern of escalating destruction that foreshadows the final tragedy. Lennie is often compared to animals: he drinks from the pool 'like a horse', moves 'the way a bear drags his paws'. Steinbeck uses Lennie to explore vulnerability, innocence, and the way society destroys those it cannot accommodate. Lennie cannot survive in a world that demands self-control and social awareness he does not possess.",
  },
  {
    name: "Curley's Wife",
    analysis:
      "Curley's wife is never given a name, reflecting her status as a possession. She is the only woman on the ranch and is desperately lonely. She is initially presented as a dangerous 'tart' through the men's perspective, but Chapter 5 reveals her as a victim: she married Curley to escape her mother and clings to a lost dream of being in 'pitchers'. Her death is presented sympathetically: 'the meanness and the plannings and the discontent and the ache for attention were all gone from her face'. She represents the silencing of women's voices in 1930s America and the universal human need for connection and recognition.",
  },
  {
    name: "Candy",
    analysis:
      "Candy is the ageing, one-handed swamper who fears being 'canned' when he is no longer useful, just as his old dog was shot when it became a burden. He represents the disposability of workers in a capitalist system. When he hears about the dream farm, he desperately offers his savings to buy into it. The dream gives him purpose and hope, and its destruction leaves him with nothing. His regret about not shooting his own dog parallels George's decision to shoot Lennie himself rather than let the mob do it. Candy shows that loyalty and long service count for nothing in a system that values only productivity.",
  },
  {
    name: "Crooks",
    analysis:
      "Crooks is the Black stable buck, segregated from the other ranch hands because of his race. He is intelligent, proud, and deeply embittered by years of racial discrimination. He has a 'crooked back where a horse kicked him', and his name reflects this injury. His room is both his prison and his refuge. When Lennie visits, Crooks cruelly torments him by suggesting George will not return, projecting his own fear of abandonment. For a brief moment, the dream farm offers him the possibility of belonging, but Curley's wife's threat of lynching reminds him of his powerlessness. He withdraws, saying 'I didn' mean it. Jus' foolin''. Crooks represents the intersection of loneliness and racial prejudice in 1930s America.",
  },
  {
    name: "Slim",
    analysis:
      "Slim is the 'jerkline skinner', the most skilled and respected man on the ranch. He is described with almost godlike authority: 'there was a gravity in his manner and a quiet so profound that all talk stopped when he spoke'. Slim is the novel's moral compass. He understands George and Lennie's relationship without judgement, recognises the mercy in George's final act, and is the only character who offers genuine empathy. He represents an ideal of quiet dignity and moral clarity, but his powerlessness to change the system suggests that individual goodness is insufficient against structural injustice.",
  },
];

const themes = [
  {
    name: "Loneliness and Isolation",
    detail:
      "Loneliness pervades the novel. Steinbeck sets it near Soledad (Spanish for 'solitude'). George says itinerant workers are 'the loneliest guys in the world'. Every major character suffers isolation: George and Lennie travel together but are anomalies; Candy has lost his hand and will soon lose his job; Crooks is segregated by race; Curley's wife is the only woman on the ranch and is forbidden to talk to the men. The dream farm represents not just economic independence but human connection. The novel suggests that loneliness is a structural condition of 1930s American society, not merely a personal misfortune.",
  },
  {
    name: "The American Dream",
    detail:
      "George and Lennie's dream of owning a small farm ('an' live off the fatta the lan'') is a version of the American Dream: the idea that hard work and determination can lead to independence and prosperity. Steinbeck systematically dismantles this dream. The Depression has made it unachievable for most. Crooks articulates the futility: 'I seen hundreds of men come by on the road... every damn one of 'em's got a little piece of land in his head. An' never a God damn one of 'em ever gets it.' The dream is beautiful but ultimately an illusion that makes the characters' real powerlessness bearable.",
  },
  {
    name: "Friendship and Loyalty",
    detail:
      "George and Lennie's friendship is the novel's emotional centre and its most radical element. In a world where 'guys like us' travel alone, their bond is extraordinary. The other characters recognise its rarity: Slim says 'I hardly never seen two guys travel together.' Their friendship offers protection, purpose, and hope. Yet Steinbeck shows that even the deepest bond cannot withstand the pressures of a hostile world. George's final act of killing Lennie is presented as the ultimate expression of friendship: he saves Lennie from a brutal death at Curley's hands by giving him a peaceful one, reciting their shared dream as he does so.",
  },
  {
    name: "Prejudice and Discrimination",
    detail:
      "Steinbeck explores multiple forms of prejudice. Crooks suffers racial segregation and the threat of lynching. Curley's wife is dismissed as a 'tart' and denied even a name. Lennie is vulnerable because of his disability. Candy is marginalised because of his age and physical impairment. These characters are pushed to the margins of ranch society, denied the power to shape their own lives. Steinbeck uses the microcosm of the ranch to expose the systemic discrimination of 1930s America, showing how prejudice compounds loneliness and denies the most vulnerable any chance of achieving their dreams.",
  },
  {
    name: "Power and Powerlessness",
    detail:
      "Power on the ranch operates through hierarchies of wealth, race, gender, age, and physical ability. The boss owns the ranch; Curley abuses his father's authority; Curley's wife wields power over Crooks through racial threats but is powerless in relation to her husband. Lennie has immense physical strength but no social power. Slim has moral authority but cannot change the system. Steinbeck shows that power is unevenly distributed and that those at the bottom — the disabled, the Black, the female, the old — are crushed by structures they cannot control.",
  },
  {
    name: "Fate and Inevitability",
    detail:
      "The novel's circular structure — opening and closing at the same clearing by the river — creates a sense of fate. The pattern of Lennie killing soft things (mouse, puppy, woman) follows an escalating trajectory that makes the final tragedy feel inevitable. Steinbeck's use of foreshadowing (the shooting of Candy's dog prefigures Lennie's death; George's instruction to return to the brush; Lennie's history of trouble in Weed) creates a sense of doom. The naturalistic setting reinforces the idea that these characters are trapped by forces — economic, social, biological — beyond their control.",
  },
];

const keyQuotes = [
  {
    quote: "Guys like us, that work on ranches, are the loneliest guys in the world. They got no family. They don't belong no place.",
    chapter: "Chapter 1",
    speaker: "George",
    analysis:
      "George articulates the central condition of itinerant workers' lives. The repetition of negatives ('no family', 'don't belong no place') emphasises absence and lack. 'Loneliest guys in the world' is a superlative that universalises their suffering. This speech establishes loneliness as the novel's dominant theme and makes George and Lennie's friendship exceptional by contrast.",
  },
  {
    quote: "With us it ain't like that. We got a future. We got somebody to talk to that gives a damn about us.",
    chapter: "Chapter 1",
    speaker: "George",
    analysis:
      "The counterpart to the loneliness speech. George distinguishes himself and Lennie from other ranch workers through the language of possession ('We got'). The phrase 'gives a damn about us' is colloquial and heartfelt. Their friendship is presented as their greatest asset — more valuable than money or land. The future he promises is, tragically, an illusion.",
  },
  {
    quote: "I could get you strung up on a tree so easy it ain't even funny.",
    chapter: "Chapter 4",
    speaker: "Curley's wife to Crooks",
    analysis:
      "Curley's wife threatens Crooks with lynching when he challenges her presence. The casual tone ('so easy it ain't even funny') reveals the systemic nature of racial violence: it is so normalised that she can threaten murder as a matter of routine. This moment exposes the racial hierarchy that underpins the ranch and the wider society. It also shows that Curley's wife, herself a victim of gender oppression, can still exercise racial power.",
  },
  {
    quote: "A guy needs somebody — to be near him. A guy goes nuts if he ain't got nobody.",
    chapter: "Chapter 4",
    speaker: "Crooks",
    analysis:
      "Crooks articulates the psychological damage of isolation. 'Goes nuts' is a colloquial expression for mental breakdown, giving clinical loneliness a visceral, human expression. The repetition of 'guy' and 'nobody' creates a circular, trapped rhythm. Crooks speaks from painful experience: years of enforced solitude have left him bitter and defensive. This is Steinbeck's most direct statement that human beings require connection to survive.",
  },
  {
    quote: "I seen hundreds of men come by on the road an' on the ranches, with their bindles on their back an' that same damn thing in their heads... An' never a God damn one of 'em ever gets it.",
    chapter: "Chapter 4",
    speaker: "Crooks",
    analysis:
      "Crooks deconstructs the American Dream with the authority of lived experience. 'Hundreds of men' and 'that same damn thing' reduce the dream to a mass delusion. The phrase 'never a God damn one of 'em ever gets it' is absolute and unanswerable. Steinbeck uses Crooks to voice the novel's bleakest assessment: the dream is not deferred but impossible.",
  },
  {
    quote: "I ought to of shot that dog myself, George. I shouldn't ought to of let no stranger shoot my dog.",
    chapter: "Chapter 3",
    speaker: "Candy",
    analysis:
      "Candy's regret about his dog directly foreshadows George's decision to shoot Lennie himself. 'No stranger' implies that killing a loved one is an act of responsibility, not cruelty. The parallel between the dog and Lennie is made explicit: both are shot with the same gun (Carlson's Luger), both are shot in the back of the head, and both killings are presented as mercy. Candy's regret gives George the moral framework for his final act.",
  },
  {
    quote: "She was very pretty and simple, and her face was sweet and young.",
    chapter: "Chapter 5",
    speaker: "Narrator, describing Curley's wife after death",
    analysis:
      "In death, Curley's wife is finally described without the lens of male desire or suspicion. 'Sweet and young' replaces 'the eye' and 'jail bait'. The simplicity of the prose reflects the simplicity she achieves in death: free from 'the meanness and the plannings and the discontent'. Steinbeck invites the reader to see her as she truly was — a young woman whose life was wasted by the structures of gender and class.",
  },
  {
    quote: "A guy sets alone out here at night, maybe readin' books or thinkin' or stuff like that. Sometimes he gets thinkin', an' he got nothing to tell him what's so an' what ain't so.",
    chapter: "Chapter 4",
    speaker: "Crooks",
    analysis:
      "Crooks describes how isolation distorts reality. Without another person to validate his experience, he cannot distinguish truth from delusion. This is a profound insight into the psychology of loneliness: human beings need others not just for companionship but to confirm their perception of reality. The colloquial dialect makes the philosophical insight feel grounded and authentic.",
  },
  {
    quote: "I never get to talk to nobody. I get awful lonely.",
    chapter: "Chapter 5",
    speaker: "Curley's wife",
    analysis:
      "Curley's wife's confession mirrors Crooks's earlier admission. The double negative ('never... nobody') is grammatically emphatic. 'Awful lonely' is plain, understated, and devastating. Her loneliness drives her into the barn where she encounters Lennie, making it a direct cause of her death. Steinbeck shows that loneliness is not merely sad but dangerous — it creates the conditions for tragedy.",
  },
  {
    quote: "Tell me — like you done before... Tell me about the rabbits.",
    chapter: "Chapter 6",
    speaker: "Lennie",
    analysis:
      "Lennie's last request is to hear the dream one final time. 'Like you done before' reveals that the dream is a ritual, a bedtime story that provides comfort and security. The rabbits represent everything Lennie desires: softness, ownership, safety, and George's continued presence. The repetition of this request at the end creates the novel's circular structure and makes the dream a kind of prayer that George fulfils even as he ends Lennie's life.",
  },
  {
    quote: "You hadda, George. I swear you hadda.",
    chapter: "Chapter 6",
    speaker: "Slim",
    analysis:
      "Slim's final words validate George's decision and offer the only consolation available. 'Hadda' (had to) implies moral necessity. Slim alone understands that the killing was an act of love, not violence. His repetition ('I swear you hadda') is an oath, a moral absolution. This moment distinguishes Slim from Carlson and Curley, who cannot comprehend George's grief, underlining the difference between those who understand human connection and those who do not.",
  },
  {
    quote: "As happens sometimes, a moment settled and hovered and remained for much more than a moment. And sound stopped and movement stopped for much, much more than a moment.",
    chapter: "Chapter 6",
    speaker: "Narrator",
    analysis:
      "Steinbeck suspends time at the moment of Lennie's death. The repetition of 'moment' and 'stopped' creates a rhythmic, almost ceremonial prose style that elevates the scene beyond naturalism. The passage turns a violent act into something sacred, demanding that the reader pause and feel the weight of what has happened. It is Steinbeck's prose at its most lyrical and controlled.",
  },
  {
    quote: "I could live so easy and maybe have a girl.",
    chapter: "Chapter 1",
    speaker: "George",
    analysis:
      "George's outburst reveals his suppressed resentment at being tied to Lennie. 'So easy' contrasts with the difficulty of his actual life. The 'girl' he might have represents normalcy, independence, and choice. Yet George always returns to the dream and to Lennie, suggesting that his complaints are a release valve rather than genuine desire to leave. The tension between frustration and devotion defines George's character.",
  },
  {
    quote: "We'd jus' live there. We'd belong there. There wouldn't be no more runnin' round the country.",
    chapter: "Chapter 3",
    speaker: "George",
    analysis:
      "The dream farm offers belonging — the one thing itinerant workers lack. 'We'd belong there' is the emotional heart of the dream: not wealth but home. 'No more runnin'' implies safety and permanence. The conditional tense ('We'd') maintains the dream as hypothetical, hovering between hope and impossibility. Steinbeck makes the dream beautiful precisely so its destruction is devastating.",
  },
  {
    quote: "I seen things out here. I wasn't drunk. I don't know if I was asleep. If some guy was with me, he could tell me I was asleep, an' then it would be all right.",
    chapter: "Chapter 4",
    speaker: "Crooks",
    analysis:
      "Crooks describes the disorienting effect of prolonged isolation: without another person to validate his experience, he cannot distinguish reality from hallucination. 'If some guy was with me' expresses the fundamental human need for companionship not just as comfort but as a means of verifying reality. Steinbeck uses Crooks to argue that isolation is not merely lonely but psychologically destructive.",
  },
  {
    quote: "I coulda made somethin' of myself... Maybe I will yet.",
    chapter: "Chapter 5",
    speaker: "Curley's wife",
    analysis:
      "Curley's wife clings to her dream of Hollywood stardom even as she knows it is dead. 'Maybe I will yet' is heartbreaking in its futility — she says this minutes before her death. The contrast between her aspirations and her reality (trapped on a ranch, married to a man she despises) encapsulates Steinbeck's critique of the American Dream: it sustains hope but delivers nothing.",
  },
  {
    quote: "I think I knowed from the very first. I think I knowed we'd never do her.",
    chapter: "Chapter 5",
    speaker: "George",
    analysis:
      "After Curley's wife's death, George admits that the dream was always impossible. 'From the very first' suggests that George has been performing hope rather than genuinely believing. 'We'd never do her' uses the past conditional to close down the future entirely. This confession reframes every earlier recitation of the dream as a kind of prayer George knew would go unanswered — an act of love for Lennie rather than a genuine plan.",
  },
  {
    quote: "Ain't many guys travel around together... I don't know why. Maybe ever'body in the whole damn world is scared of each other.",
    chapter: "Chapter 2",
    speaker: "Slim",
    analysis:
      "Slim articulates the isolation at the heart of the novel with quiet authority. His observation that people are 'scared of each other' suggests that loneliness is not accidental but the product of mutual fear and distrust. Steinbeck uses Slim — the most perceptive character — to diagnose the social condition that makes George and Lennie's friendship both extraordinary and doomed.",
  },
  {
    quote: "I seen it over an' over — a guy talkin' to another guy and it don't make no difference if he don't hear or understand. The thing is, they're talkin'.",
    chapter: "Chapter 4",
    speaker: "Crooks",
    analysis:
      "Crooks observes that communication matters more than comprehension. The need to speak to another human being is so fundamental that even being heard imperfectly is better than silence. Steinbeck uses this insight to explain why every character in the novel seeks connection, however imperfect: Curley's wife talks to Lennie knowing he barely understands; Candy talks to his dog. The act of speaking is itself an assertion of humanity.",
  },
];

const contextSections = [
  {
    title: "The Great Depression (1929-1939)",
    content:
      "The novel is set during the Great Depression, when America's economy collapsed following the Wall Street Crash of 1929. Unemployment reached 25%. Migrant agricultural workers ('bindle stiffs') travelled from ranch to ranch in California, working temporary jobs for minimal wages. They owned almost nothing, had no job security, and lived in fear of being 'canned'. Steinbeck draws on this reality to create a world in which economic powerlessness compounds personal vulnerability.",
  },
  {
    title: "Steinbeck and California",
    content:
      "Steinbeck grew up in Salinas, California, and knew the landscape and working conditions intimately. He worked alongside migrant labourers on ranches and farms, and his fiction draws on first-hand observation. Of Mice and Men was conceived as a 'play-novelette' — a work that could be performed as a stage play with minimal adaptation. This explains the novel's tight structure: six chapters, each set in a single location, with action driven almost entirely by dialogue.",
  },
  {
    title: "Racial Segregation in 1930s America",
    content:
      "Crooks's segregation reflects the reality of Jim Crow-era America. Black workers were routinely separated from white workers, denied equal rights, and subject to racial violence including lynching. Curley's wife's threat to have Crooks 'strung up on a tree' is not an empty one: thousands of Black Americans were lynched between the 1880s and the 1960s. Steinbeck uses Crooks to show how racial prejudice multiplies the suffering of those already marginalised by poverty.",
  },
  {
    title: "Women in 1930s America",
    content:
      "Curley's wife has no name, reflecting women's lack of identity and agency in the period. She is defined entirely by her relationship to her husband. Her dream of being in 'pitchers' (pictures/movies) represents the only route to independence and recognition available to her. The men on the ranch view her exclusively as a sexual threat ('jail bait', 'tart'), denying her complexity and humanity. Steinbeck uses her to critique a society that reduces women to objects of male desire or male fear.",
  },
  {
    title: "The Title: Robert Burns",
    content:
      "The title comes from Robert Burns's poem 'To a Mouse' (1785): 'The best laid schemes o' mice an' men / Gang aft agley' (often go wrong). The allusion establishes the novel's fatalistic vision: no matter how carefully George and Lennie plan, forces beyond their control will destroy their dream. The reference to mice also connects to Lennie's obsession with soft things and the dead mouse he carries in Chapter 1.",
  },
  {
    title: "Mental Disability in the 1930s",
    content:
      "In the 1930s, mental disability was poorly understood and heavily stigmatised. There were no support systems, no legal protections, and no diagnostic frameworks. People like Lennie would have been institutionalised or, as in the novel, left in the care of family members or friends. George's protection of Lennie is extraordinary in this context. Steinbeck does not sentimentalise Lennie's disability but shows both its vulnerability and its danger, refusing easy answers about how society should treat those who cannot protect themselves.",
  },
];

const essayQuestions = [
  {
    question: "How does Steinbeck present the theme of loneliness in Of Mice and Men?",
    points: [
      "The setting near Soledad ('solitude') and George's speech about itinerant workers being 'the loneliest guys in the world'",
      "Crooks's enforced isolation and his confession that 'a guy goes nuts if he ain't got nobody'",
      "Curley's wife: 'I never get to talk to nobody. I get awful lonely' — loneliness as the cause of her fatal encounter with Lennie",
      "Candy's loss of his dog and his desperate attachment to the dream farm",
      "George after Lennie's death: now condemned to the very loneliness he described in Chapter 1",
    ],
  },
  {
    question: "How does Steinbeck use the dream farm to explore the American Dream?",
    points: [
      "The dream as a ritual: 'Tell me — like you done before' — it provides comfort and purpose",
      "Candy's $350 makes the dream briefly achievable — the only moment it seems real",
      "Crooks's speech: 'never a God damn one of 'em ever gets it' — the dream as mass delusion",
      "The dream's destruction after Lennie kills Curley's wife — it cannot survive contact with reality",
      "Steinbeck's wider argument: the American Dream is an illusion that sustains people but can never be fulfilled for the most vulnerable",
    ],
  },
  {
    question: "How does Steinbeck present Curley's wife in Of Mice and Men?",
    points: [
      "Initial presentation through male eyes: 'the eye', 'jail bait', 'tart' — the men's language reduces her to a sexual threat",
      "She is nameless — a possession defined by her husband",
      "Chapter 5 revelation: her lost dream of Hollywood, her loneliness, her marriage of desperation",
      "Her death: 'sweet and young' — Steinbeck strips away the hostile male gaze to reveal the person beneath",
      "Structural analysis: she is victim and catalyst — her presence causes the tragedy but she is also its victim",
    ],
  },
  {
    question: "How does Steinbeck present the relationship between George and Lennie?",
    points: [
      "The opening: George as protector, parent, and frustrated companion — 'I could live so easy'",
      "Their friendship as extraordinary: Slim says 'I hardly never seen two guys travel together'",
      "The dream as their shared bond: reciting it together is a ritual of connection",
      "The ending: George shoots Lennie as the ultimate act of friendship and protection",
      "Candy's regret about his dog provides the moral framework: better to do it yourself than let a stranger do it",
    ],
  },
];

/* ─── Page Component ─────────────────────────────────────────── */

export default function OfMiceAndMenStudyGuide() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="rounded-xl border bg-gradient-to-b from-primary/[0.06] to-transparent px-6 py-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          GCSE English Literature &mdash; Revision Notes
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Of Mice and Men &mdash; Complete Study Guide
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          John Steinbeck&rsquo;s 1937 novella. Chapter summaries, character analysis,
          themes, 20 key quotations with analysis, historical context, writer&rsquo;s methods, and essay planning.
        </p>
      </div>

      {/* Quick nav */}
      <nav className="flex flex-wrap gap-2 text-sm" aria-label="Page sections">
        {["Chapter Summaries", "Characters", "Themes", "Key Quotes", "Context", "Essay Planning", "Writer's Methods", "Grade 9 Points", "Exam Questions", "Practice Questions"].map(
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

      {/* Chapter Summaries */}
      <Section id="chapter-summaries" title="Chapter-by-Chapter Summary" defaultOpen>
        <div className="space-y-4">
          {chapters.map((ch) => (
            <div key={ch.chapter} className="rounded-lg border border-border bg-muted p-4">
              <h3 className="font-semibold text-foreground">{ch.chapter}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ch.summary}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Characters */}
      <Section id="characters" title="Character Analysis">
        <div className="space-y-5">
          {characters.map((c) => (
            <div key={c.name} className="rounded-lg border border-border bg-muted p-4">
              <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
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

      {/* Writer's Methods */}
      <Section id="writers-methods" title="Writer&rsquo;s Methods &amp; Techniques">
        <div className="space-y-4">
          {[
            {
              method: "Circular Structure",
              detail:
                "The novel opens and closes at the same clearing by the Salinas River. This circular structure creates a sense of fate and entrapment: the characters end up exactly where they started, and the dream has achieved nothing. The symmetry also underlines the mercy of George's act: by returning Lennie to the place where they were happiest, George gives his death a kind of peace that the lynch mob would not.",
            },
            {
              method: "Play-Novelette Form",
              detail:
                "Steinbeck conceived Of Mice and Men as a 'play-novelette' — a work designed to be performed as a stage play with minimal adaptation. This explains its tight structure: six chapters, each set in a single location, with action driven almost entirely by dialogue. The theatrical form creates immediacy and intensity, as every scene moves the plot towards its inevitable conclusion.",
            },
            {
              method: "Foreshadowing",
              detail:
                "Steinbeck uses systematic foreshadowing to create a sense of inevitability. The dead mouse (Ch. 1) foreshadows the dead puppy (Ch. 5) which foreshadows Curley's wife's death (Ch. 5). Candy's dog is shot in the back of the head with Carlson's Luger — the same gun, the same method George later uses on Lennie. George's instruction to return to the brush, Lennie's history in Weed, and the escalating pattern of killing soft things all point towards the final tragedy.",
            },
            {
              method: "Animal Imagery",
              detail:
                "Lennie is consistently described through animal similes: he drinks 'like a horse', moves 'the way a bear drags his paws', is 'as strong as a bull'. This imagery dehumanises him even as it generates sympathy, positioning him as a creature of instinct who cannot control his own strength. The animal comparison also connects to the novel's naturalistic philosophy: like the animals, Lennie is governed by impulses he cannot understand.",
            },
            {
              method: "Setting as Symbol",
              detail:
                "The Salinas River clearing represents peace and the possibility of the dream. The bunk house represents the transience and depersonalisation of ranch life. Crooks's room represents racial segregation and isolation. The barn represents danger and inevitability (it is where the puppy and Curley's wife die). Steinbeck uses each location to reinforce thematic concerns, making the physical spaces of the novel into moral landscapes.",
            },
            {
              method: "Dialogue and Dialect",
              detail:
                "Steinbeck reproduces the vernacular speech of 1930s ranch workers with precision: contractions ('ain't', 'coulda'), non-standard grammar ('don't make no difference'), and regional vocabulary ('bindle stiff'). This creates authenticity and class identity. The characters' limited vocabulary mirrors their limited options. Slim's more measured speech reflects his authority. Curley's wife's language shifts between performed seduction and genuine vulnerability.",
            },
            {
              method: "Naturalism",
              detail:
                "Steinbeck writes in the naturalist tradition, presenting characters as products of their environment and biology. The novel suggests that George, Lennie, and the other characters are trapped by forces — economic, social, biological — beyond their control. The detached, observational narrative voice refuses to moralise, allowing the reader to draw their own conclusions about the justice or injustice of the characters' fates.",
            },
            {
              method: "The Dream as Ritual",
              detail:
                "The dream farm is recited like a bedtime story: Lennie says 'Tell me — like you done before,' and George performs the familiar narrative. This repetition transforms the dream from a plan into a ritual — a shared act of faith that sustains the relationship. The dream's power lies not in its achievability but in the comfort of its telling. When George recites it for the last time, it becomes a kind of prayer.",
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
          Sophisticated, conceptualised arguments that distinguish Grade 9 responses.
        </p>
        <div className="space-y-3">
          {[
            "Steinbeck suggests that the American Dream is not merely unachievable but actively harmful: it sustains hope that prevents the characters from confronting the reality of their powerlessness. The dream functions as an opiate, making the intolerable bearable and thereby preventing resistance to the systems that cause suffering.",
            "George's killing of Lennie can be read as Steinbeck's most damning indictment of 1930s America: a society in which the only act of kindness available to a marginalised man is to kill the person he loves most. The moral framework of the novel collapses here — mercy and murder become indistinguishable because the system offers no humane alternative.",
            "Curley's wife's namelessness is not merely a reflection of 1930s gender norms but a deliberate authorial choice that implicates the reader. We, like the ranch workers, know her only through her relationship to a man. Steinbeck forces us to experience the same dehumanisation she suffers, making the reader complicit in the structures the novel critiques.",
            "Crooks's momentary desire to join the dream — and his immediate withdrawal when threatened by Curley's wife — demonstrates that racial prejudice does not merely exclude but actively destroys hope. His retraction ('I didn' mean it. Jus' foolin'') is the most psychologically devastating moment in the novel: he has learned to pre-emptively crush his own aspirations before the white world can do it for him.",
            "The setting near Soledad (Spanish for 'solitude') is not merely symbolic but deterministic. Steinbeck suggests that loneliness is not a personal failing but a structural condition created by the economic system: itinerant workers are kept mobile, rootless, and disconnected precisely because isolation makes them easier to exploit. Loneliness is a feature of the system, not a bug.",
            "Steinbeck's decision to suspend time at the moment of Lennie's death — 'a moment settled and hovered and remained for much more than a moment' — transforms a violent act into something almost sacred. The lyrical prose elevates the killing above naturalism into a register of tragic ritual, demanding that the reader honour the weight of what has happened rather than simply moving past it.",
            "Slim's final line — 'You hadda, George. I swear you hadda' — functions as the novel's moral verdict, but its authority is compromised by the fact that only Slim understands. Carlson's bewildered 'Now what the hell ya suppose is eatin' them two guys?' is the novel's real ending: a world in which genuine moral understanding is the exception, not the rule.",
            "The parallel between Candy's dog and Lennie is not merely structural but philosophical: both deaths raise the question of who has the right to decide when a life is no longer worth living. Candy's regret at not shooting his own dog provides George with a moral framework, but Steinbeck leaves the ethical question unresolved. The novel asks whether mercy killing is ever truly merciful, or whether it merely makes the unbearable easier for those who survive.",
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
              question: "How does Steinbeck present Crooks as a victim of racial prejudice in Of Mice and Men?",
              outline: [
                "Introduction: Crooks is the only Black character, and Steinbeck uses his enforced isolation to expose the systematic racism of 1930s America. His treatment on the ranch is a microcosm of Jim Crow segregation.",
                "Para 1 -- Physical segregation: Crooks lives in the harness room, separate from the other workers. His room is both prison and refuge. Steinbeck uses setting to make racial segregation visible and visceral.",
                "Para 2 -- Psychological damage: 'A guy goes nuts if he ain't got nobody.' Crooks articulates the mental health consequences of enforced isolation. His initial hostility to Lennie is defensive — he has learned to pre-empt rejection.",
                "Para 3 -- The brief hope: When Crooks hears about the dream farm, he tentatively asks to join. For a moment, he imagines belonging. This makes Curley's wife's threat all the more devastating: 'I could get you strung up on a tree so easy it ain't even funny.'",
                "Para 4 -- Withdrawal: After the threat, Crooks retreats: 'I didn' mean it. Jus' foolin'.' He has been reminded of the racial hierarchy and crushes his own hope before the system can do it more brutally. Steinbeck shows that racism destroys not just opportunity but the capacity to dream.",
                "Conclusion: Steinbeck presents Crooks as a man whose intelligence, pride, and capacity for connection have been systematically destroyed by racism. His brief hope and immediate withdrawal make the reader understand that prejudice does not merely exclude — it annihilates.",
              ],
            },
            {
              question: "How does Steinbeck use the ending of Of Mice and Men to explore the theme of friendship?",
              outline: [
                "Introduction: The ending — George shooting Lennie — is the novel's most morally complex moment, simultaneously an act of murder and an act of love. Steinbeck uses it to argue that friendship in a hostile world is both humanity's greatest resource and its greatest source of pain.",
                "Para 1 -- The return to the clearing: The circular structure returns to the river where the novel began. George sends Lennie here for safety. The return to their place of peace gives Lennie's death a gentleness the lynch mob would not.",
                "Para 2 -- The final recitation of the dream: George tells the dream one last time: 'Tell me — like you done before.' The dream is no longer a plan but a farewell — a last act of tenderness. Steinbeck transforms the ritual into an elegy.",
                "Para 3 -- The mercy killing: George shoots Lennie in the back of the head, mirroring how Carlson shot Candy's dog. Candy's regret ('I shouldn't ought to of let no stranger shoot my dog') provides the moral logic: it is better to do it yourself, with love, than to let strangers do it with cruelty.",
                "Para 4 -- Slim's understanding: 'You hadda, George. I swear you hadda.' Only Slim understands. Carlson's inability to comprehend George's grief ('Now what the hell ya suppose is eatin' them two guys?') underlines the depth of George and Lennie's bond: it is invisible to those who have never experienced such connection.",
                "Conclusion: Steinbeck argues that true friendship can demand impossible sacrifices. George's act destroys the only meaningful relationship in his life but saves Lennie from a worse fate. The tragedy is not that George kills Lennie but that the world gives him no other option.",
              ],
            },
            {
              question: "'Steinbeck presents all of his characters as victims.' How far do you agree?",
              outline: [
                "Introduction: While every major character suffers, Steinbeck is careful to distinguish between different kinds of victimhood — economic, racial, gendered, and disability-based — showing how multiple forms of oppression intersect.",
                "Para 1 -- Economic victims: George, Lennie, Candy, and the other ranch hands are victims of the Great Depression's economic system. They own nothing, have no security, and can be 'canned' at any time. Their poverty is structural, not personal.",
                "Para 2 -- Curley's wife as victim: She is nameless, trapped in a loveless marriage, denied a voice. Her death is described sympathetically: 'sweet and young.' Yet she also wields power over Crooks through racial threats. Steinbeck shows that victimhood is not simple — victims can also be perpetrators.",
                "Para 3 -- Crooks as victim of racism: Segregated, threatened with lynching, denied basic human connection. His victimhood is absolute — he has no power to wield over others.",
                "Para 4 -- Counter-argument: Curley is violent but insecure. Carlson is insensitive but not malicious. Even the boss is suspicious but not cruel. Steinbeck presents a world in which the system creates victims, but not all characters suffer equally. Some (Slim) maintain dignity; others (Curley) respond to their own inadequacies with aggression.",
                "Conclusion: Steinbeck presents a hierarchy of victimhood determined by race, gender, disability, and class. The novel argues that these systems of oppression are interconnected and that the most vulnerable (Lennie, Crooks, Curley's wife) are crushed by their intersection.",
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
              How does Steinbeck present the theme of loneliness in <em>Of Mice and Men</em>?
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Of Mice and Men - How Steinbeck presents the theme of loneliness"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">Question 2</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Steinbeck present Curley&rsquo;s wife in <em>Of Mice and Men</em>?
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Of Mice and Men - How Steinbeck presents Curley's wife"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">Question 3</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Steinbeck use the dream farm to explore the American Dream in <em>Of Mice and Men</em>?
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Of Mice and Men - How Steinbeck uses the dream farm to explore the American Dream"
              minWords={150}
              maxWords={800}
              rows={10}
            />
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3 className="font-bold text-foreground mb-1">Question 4</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How does Steinbeck present the relationship between George and Lennie in <em>Of Mice and Men</em>?
              <span className="ml-2 text-xs font-semibold text-muted-foreground">[30 marks]</span>
            </p>
            <AITextArea
              placeholder="Write your essay response here..."
              label="Your answer"
              subject="English Literature"
              topic="Of Mice and Men - How Steinbeck presents the relationship between George and Lennie"
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

      {/* Copyright notice */}
      <footer className="mt-8 text-center text-xs text-muted-foreground">
        <p>
          <em>Of Mice and Men</em> &copy; The Estate of John Steinbeck. Short
          quotations are used for criticism and review under fair dealing
          (CDPA&nbsp;1988, s.30).
        </p>
      </footer>
    </div>
  );
}
